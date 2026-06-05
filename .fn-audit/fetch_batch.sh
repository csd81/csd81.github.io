#!/usr/bin/env bash
# fetch_batch.sh <start> <count>  -> fetches pages in parallel, emits batch.json
cd "$(dirname "$0")/.."
start="$1"; count="${2:-10}"
python3 - "$start" "$count" <<'PY'
import json,sys
q=json.load(open('.fn-audit/queue.json'))
s,c=int(sys.argv[1]),int(sys.argv[2])
batch=q[s:s+c]
json.dump(batch,open('.fn-audit/_batch.json','w'))
print('\n'.join(f"{e['name']}\t{e['target']}" for e in batch))
PY
# parallel fetch
while IFS=$'\t' read -r name target; do
  safe=$(printf '%s' "$name" | tr -c 'A-Za-z0-9_.-' '_')
  ./.fn-audit/fetch_one.sh "$target" "src/sandbox/matlab/referencelist/${safe}.html" &
done < <(python3 -c "import json;[print(e['name']+chr(9)+e['target']) for e in json.load(open('.fn-audit/_batch.json'))]")
wait
echo "FETCH_DONE"
