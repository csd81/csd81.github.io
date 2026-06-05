#!/usr/bin/env bash
# fetch_one.sh <target-path> <out-dom-file>
target="$1"; out="$2"
prof="/tmp/chrome-fetch-$$-$RANDOM"
UA="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36"
timeout 40 google-chrome --headless=new --disable-gpu --no-sandbox \
  --user-data-dir="$prof" --user-agent="$UA" --lang=en-US --accept-lang=en-US,en \
  --virtual-time-budget=9000 --dump-dom "https://www.mathworks.com/help/matlab/${target}" > "$out" 2>/dev/null
rc=$?
rm -rf "$prof"
exit $rc
