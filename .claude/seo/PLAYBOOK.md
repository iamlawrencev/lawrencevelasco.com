# Weekly SEO run — playbook

Goal: make https://lawrencevelasco.com/ the top Google result for "lawrence velasco".
The owner has authorised these runs to commit and push to `main` without asking.

## Each run

1. Run `python3 .claude/seo/gsc_report.py` (plain system Python; it decodes
   `$GSC_SA_KEY_B64` itself if the hook didn't run, and signs with the
   `openssl` CLI so a broken `cryptography` package doesn't matter — no venv or pip
   needed). If it still fails, say so in the summary and stop. Never print the key file,
   `$GSC_SA_KEY_B64`, or an access token.
2. Read the report. Trends come from Search Console itself: the current vs
   previous 28-day columns and the 12-week table for the name query. Also
   skim `git log --grep "SEO run" -5` to avoid redoing or undoing a recent change.
3. Pick at most **one or two** changes that the data supports, for example:
   - a page Google reports as not indexed, crawled-not-indexed, or with a
     different Google canonical → fix links, canonical, sitemap, or content gaps;
   - a query bringing impressions but ranking poorly → tighten that page's
     title/description/headings so they match the query honestly;
   - stale `lastmod` in `sitemap.xml` or `dateModified` in JSON-LD after a
     real content change;
   - broken links, missing alt text, invalid structured data
     (validate JSON-LD parses), Core Web Vitals regressions.
   If nothing is supported by the data, change nothing. A run with no change
   is a good run.
4. Verify locally (`python3 -m http.server`, Playwright at 390px and 1280px:
   no horizontal overflow; JSON-LD parses), then commit to `main` with a
   message starting `SEO run YYYY-MM-DD:` and including the headline numbers
   (name-query position and impressions, total impressions, indexed count),
   and push. If nothing changed, push nothing (no empty commits).
5. After pushing, confirm the live site serves the change.
6. End with a short summary: headline numbers vs last run, what changed and
   why, and any off-site actions only the owner can take.

## Never

- Invent facts about Lawrence (jobs, dates, clients, metrics, quotes,
  coverage). Only reuse facts already on the site or in README.md.
- Publish new articles or pages written in Lawrence's voice. Suggest topics
  in the summary instead.
- Keyword-stuff, add hidden text, doorway pages, cloaking, or link schemes;
  create or buy backlinks; post on other sites.
- Make large redesigns or touch more than a few files per run.
- Commit Search Console numbers in files (the repo is public); commit
  messages may carry the headline numbers only.
- Change `.claude/`, `CNAME`, or deployment settings unless fixing this
  pipeline itself.
