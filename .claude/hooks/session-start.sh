#!/bin/bash
# Decodes the Search Console service-account key from $GSC_SA_KEY_B64 into
# ~/.config/gcloud/gsc-key.json and exports GOOGLE_APPLICATION_CREDENTIALS.
# Never prints the key or the variable.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

if [ -z "${GSC_SA_KEY_B64:-}" ]; then
  echo "session-start: GSC_SA_KEY_B64 not set; skipping Search Console key" >&2
  exit 0
fi

key_dir="$HOME/.config/gcloud"
key_file="$key_dir/gsc-key.json"
mkdir -p "$key_dir"
chmod 700 "$key_dir"

tmp="$(umask 077 && mktemp "$key_dir/.gsc-key.XXXXXX")"
trap 'rm -f "$tmp"' EXIT

if ! printf '%s' "$GSC_SA_KEY_B64" | base64 -d > "$tmp" 2>/dev/null; then
  echo "session-start: GSC_SA_KEY_B64 is not valid base64; key not written" >&2
  exit 0
fi
if ! python3 -I -c 'import json,sys; d=json.load(open(sys.argv[1])); assert d.get("type")=="service_account"' "$tmp" >/dev/null 2>&1; then
  echo "session-start: decoded GSC key is not a service-account JSON; key not written" >&2
  exit 0
fi

chmod 600 "$tmp"
mv -f "$tmp" "$key_file"
trap - EXIT

if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  echo "export GOOGLE_APPLICATION_CREDENTIALS=\"$key_file\"" >> "$CLAUDE_ENV_FILE"
fi
echo "session-start: Search Console key ready at $key_file" >&2
