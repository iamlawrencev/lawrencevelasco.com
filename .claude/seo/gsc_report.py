#!/usr/bin/env python3
"""Search Console report for lawrencevelasco.com.

Reads the service-account key from $GOOGLE_APPLICATION_CREDENTIALS (or
~/.config/gcloud/gsc-key.json, written by .claude/hooks/session-start.sh),
calls the Search Console API read-only, and prints a Markdown report.
Never prints the key or the access token.

Usage: python3 .claude/seo/gsc_report.py [--json]
"""
import base64
import datetime as dt
import json
import os
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

SITE = "https://lawrencevelasco.com/"
NAME_QUERY = "lawrence velasco"
SCOPE = "https://www.googleapis.com/auth/webmasters.readonly"
API = "https://searchconsole.googleapis.com"
DATA_LAG_DAYS = 3  # Search Console data is usually 2-3 days behind


def key_path():
    return os.environ.get("GOOGLE_APPLICATION_CREDENTIALS") or os.path.expanduser(
        "~/.config/gcloud/gsc-key.json"
    )


def b64url(data):
    return base64.urlsafe_b64encode(data).rstrip(b"=")


def load_service_account():
    """Key file from the session hook, or decode $GSC_SA_KEY_B64 directly."""
    path = key_path()
    if os.path.exists(path):
        with open(path) as f:
            return json.load(f)
    b64 = os.environ.get("GSC_SA_KEY_B64")
    if not b64:
        sys.exit(f"No Search Console key: {path} is missing and GSC_SA_KEY_B64 is not set.")
    try:
        sa = json.loads(base64.b64decode(b64))
    except Exception:
        sys.exit("GSC_SA_KEY_B64 could not be decoded as a service-account JSON.")
    os.makedirs(os.path.dirname(path), mode=0o700, exist_ok=True)
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_TRUNC, 0o600)
    with os.fdopen(fd, "w") as f:
        json.dump(sa, f)
    return sa


def rs256(signing_input, private_key_pem):
    """Sign with the openssl CLI; the cryptography package is only a fallback,
    because in some containers it is broken and panics (BaseException) on import."""
    import shutil
    import subprocess
    import tempfile
    if shutil.which("openssl"):
        with tempfile.TemporaryDirectory() as d:
            kf = os.path.join(d, "k.pem")
            fd = os.open(kf, os.O_WRONLY | os.O_CREAT, 0o600)
            with os.fdopen(fd, "w") as f:
                f.write(private_key_pem)
            r = subprocess.run(["openssl", "dgst", "-sha256", "-sign", kf],
                               input=signing_input, capture_output=True)
        if r.returncode == 0 and r.stdout:
            return r.stdout
    try:
        from cryptography.hazmat.primitives import hashes, serialization
        from cryptography.hazmat.primitives.asymmetric import padding
        key = serialization.load_pem_private_key(private_key_pem.encode(), password=None)
        return key.sign(signing_input, padding.PKCS1v15(), hashes.SHA256())
    except (KeyboardInterrupt, SystemExit):
        raise
    except BaseException:
        sys.exit("Signing failed: openssl did not work and the cryptography package is unusable.")


def access_token():
    sa = load_service_account()
    now = int(time.time())
    header = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claims = b64url(json.dumps({
        "iss": sa["client_email"], "scope": SCOPE, "aud": sa["token_uri"],
        "iat": now, "exp": now + 3600,
    }).encode())
    signing_input = header + b"." + claims
    sig = b64url(rs256(signing_input, sa["private_key"]))
    body = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": (signing_input + b"." + sig).decode(),
    }).encode()
    try:
        with urllib.request.urlopen(urllib.request.Request(sa["token_uri"], data=body), timeout=30) as r:
            return json.load(r)["access_token"]
    except urllib.error.HTTPError as e:
        sys.exit(f"Token request failed: HTTP {e.code} {e.read().decode(errors='replace')[:300]}")
    except urllib.error.URLError as e:
        sys.exit(f"Token request failed: {e.reason}")


class GSC:
    def __init__(self, token):
        self.token = token

    def call(self, method, path, payload=None):
        req = urllib.request.Request(
            API + path, method=method,
            data=json.dumps(payload).encode() if payload is not None else None,
            headers={"Authorization": f"Bearer {self.token}", "Content-Type": "application/json"},
        )
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                return json.load(r)
        except urllib.error.HTTPError as e:
            return {"error": f"HTTP {e.code}: {e.read().decode(errors='replace')[:300]}"}
        except urllib.error.URLError as e:
            return {"error": str(e.reason)}

    def search(self, start, end, dimensions=(), filters=None, limit=25):
        body = {"startDate": str(start), "endDate": str(end), "dimensions": list(dimensions), "rowLimit": limit}
        if filters:
            body["dimensionFilterGroups"] = [{"filters": filters}]
        site = urllib.parse.quote(SITE, safe="")
        return self.call("POST", f"/webmasters/v3/sites/{site}/searchAnalytics/query", body)

    def sitemaps(self):
        site = urllib.parse.quote(SITE, safe="")
        return self.call("GET", f"/webmasters/v3/sites/{site}/sitemaps")

    def inspect(self, url):
        return self.call("POST", "/v1/urlInspection/index:inspect", {"inspectionUrl": url, "siteUrl": SITE})


def totals(resp):
    rows = resp.get("rows") or []
    if not rows:
        return {"clicks": 0, "impressions": 0, "ctr": 0.0, "position": None}
    r = rows[0]
    return {k: r.get(k) for k in ("clicks", "impressions", "ctr", "position")}


def sitemap_urls():
    here = os.path.dirname(os.path.abspath(__file__))
    path = os.path.join(here, "..", "..", "sitemap.xml")
    import re
    with open(path) as f:
        return re.findall(r"<loc>([^<]+)</loc>", f.read())


def collect():
    g = GSC(access_token())
    end = dt.date.today() - dt.timedelta(days=DATA_LAG_DAYS)
    cur = (end - dt.timedelta(days=27), end)
    prev = (cur[0] - dt.timedelta(days=28), cur[0] - dt.timedelta(days=1))
    name_filter = [{"dimension": "query", "operator": "contains", "expression": NAME_QUERY}]
    name_terms = [{"dimension": "query", "operator": "includingRegex", "expression": "(?i)lawrence|velasco|iamlawrencev"}]

    data = {
        "generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
        "window": {"current": [str(d) for d in cur], "previous": [str(d) for d in prev]},
        "totals": {"current": totals(g.search(*cur, limit=1)), "previous": totals(g.search(*prev, limit=1))},
        "name_query": {
            "current": totals(g.search(*cur, filters=name_filter, limit=1)),
            "previous": totals(g.search(*prev, filters=name_filter, limit=1)),
        },
        "name_queries": g.search(end - dt.timedelta(days=89), end, ["query"], name_terms, 25).get("rows", []),
        "name_weekly": [],
        "top_queries": g.search(*cur, dimensions=["query"], limit=25).get("rows", []),
        "top_pages": g.search(*cur, dimensions=["page"], limit=25).get("rows", []),
        "sitemaps": g.sitemaps().get("sitemap", []),
        "inspection": {},
    }
    daily = g.search(end - dt.timedelta(days=83), end, ["date"], name_filter, 500).get("rows", [])
    weeks = {}
    for r in daily:
        d = dt.date.fromisoformat(r["keys"][0])
        wk = str(d - dt.timedelta(days=d.weekday()))
        w = weeks.setdefault(wk, {"impressions": 0, "clicks": 0, "pos_x_impr": 0.0})
        w["impressions"] += r["impressions"]
        w["clicks"] += r["clicks"]
        w["pos_x_impr"] += r["position"] * r["impressions"]
    for wk in sorted(weeks):
        w = weeks[wk]
        data["name_weekly"].append({
            "week": wk, "impressions": w["impressions"], "clicks": w["clicks"],
            "position": round(w["pos_x_impr"] / w["impressions"], 1) if w["impressions"] else None,
        })
    for url in sitemap_urls():
        res = g.inspect(url)
        if "error" in res:
            data["inspection"][url] = {"error": res["error"]}
            continue
        s = res.get("inspectionResult", {}).get("indexStatusResult", {})
        data["inspection"][url] = {
            "verdict": s.get("verdict"), "coverage": s.get("coverageState"),
            "lastCrawl": s.get("lastCrawlTime"), "googleCanonical": s.get("googleCanonical"),
        }
    return data


def fmt_pos(p):
    return "–" if p is None else f"{p:.1f}"


def markdown(d):
    out = [f"# Search Console report — {d['generated']}", ""]
    c, p = d["window"]["current"], d["window"]["previous"]
    out.append(f"Window: {c[0]} → {c[1]} (vs {p[0]} → {p[1]})")
    out.append("")
    out.append("| Metric | Current 28d | Previous 28d |")
    out.append("|---|---|---|")
    for label, key in (("All queries", "totals"), (f'"{NAME_QUERY}"', "name_query")):
        cur, prev = d[key]["current"], d[key]["previous"]
        out.append(f"| {label} impressions | {cur['impressions']} | {prev['impressions']} |")
        out.append(f"| {label} clicks | {cur['clicks']} | {prev['clicks']} |")
        out.append(f"| {label} avg position | {fmt_pos(cur['position'])} | {fmt_pos(prev['position'])} |")
    out += ["", f'## "{NAME_QUERY}" by week (12 weeks)', "", "| Week of | Impr | Clicks | Pos |", "|---|---|---|---|"]
    for w in d["name_weekly"] or [{"week": "no data", "impressions": 0, "clicks": 0, "position": None}]:
        out.append(f"| {w['week']} | {w['impressions']} | {w['clicks']} | {fmt_pos(w['position'])} |")
    for title, key in (("Name-related queries (90d)", "name_queries"), ("Top queries (28d)", "top_queries"), ("Top pages (28d)", "top_pages")):
        out += ["", f"## {title}", "", "| Key | Impr | Clicks | Pos |", "|---|---|---|---|"]
        for r in d[key] or [{"keys": ["no data"], "impressions": 0, "clicks": 0, "position": None}]:
            out.append(f"| {r['keys'][0]} | {r['impressions']} | {r['clicks']} | {fmt_pos(r.get('position'))} |")
    out += ["", "## Sitemaps", ""]
    for s in d["sitemaps"] or [{"path": "none"}]:
        out.append(f"- {s.get('path')}: lastDownloaded {s.get('lastDownloaded')}, errors {s.get('errors')}, warnings {s.get('warnings')}")
    out += ["", "## Index status", "", "| URL | Verdict | Coverage | Last crawl |", "|---|---|---|---|"]
    for url, s in d["inspection"].items():
        if "error" in s:
            out.append(f"| {url} | error | {s['error'][:80]} | |")
        else:
            out.append(f"| {url} | {s['verdict']} | {s['coverage']} | {s['lastCrawl'] or 'never'} |")
    return "\n".join(out)


if __name__ == "__main__":
    report = collect()
    print(json.dumps(report, indent=2) if "--json" in sys.argv else markdown(report))
