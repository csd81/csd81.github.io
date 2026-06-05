import json, re, sys

def nums(s):
    # strip doc display chrome that injects spurious numbers:
    #  - size annotations like 6×1, 2×3×2  (× = U+00D7)
    s = re.sub(r'\d+(?:\s*×\s*\d+)+', ' ', s)
    #  - N-D slice headers like  B(:,:,1) =
    s = re.sub(r'\(:,:,\s*\d+\)', ' ', s)
    #  - type-name tokens that contain digits (int8, uint16, float32 …)
    s = re.sub(r'\b(u?int|float)\d+\b', ' ', s)
    #  - attach a sign to the number it qualifies, so complex display "a - bi"
    #    (spaced sign) matches the doc's "a -bi" instead of reading +b
    s = re.sub(r'([+\-])\s+(?=[\d.])', r'\1', s)
    # extract numeric tokens (incl scientific, signs)
    return re.findall(r'-?\d+\.?\d*(?:[eE][-+]?\d+)?', s)

def numclose(a, b, rtol=1e-3, atol=1e-3):
    try:
        fa, fb = float(a), float(b)
    except: return a == b
    return abs(fa - fb) <= atol + rtol * max(abs(fa), abs(fb))

def compare(expected, got):
    """Return (ok, reason). Compares numeric content ignoring display chrome."""
    e = nums(expected); g = nums(got)
    if not e and not g: return True, "no-nums"
    if len(e) != len(g): return False, f"count {len(e)} vs {len(g)}"
    for x, y in zip(e, g):
        if not numclose(x, y): return False, f"{x} != {y}"
    return True, "ok"

if __name__ == "__main__":
    ex = json.load(open('.fn-audit/_batch_examples.json'))
    res = {r['id']: r for r in json.load(open('.fn-audit/_run.json'))}
    report = []
    for name, d in ex.items():
        blocks = [e['in'] for e in d.get('examples', [])]
        exps   = [e['out'] for e in d.get('examples', [])]
        r = res.get(name, {})
        outs = r.get('outs', []); errs = r.get('errs', [])
        for i, (inp, exp) in enumerate(zip(blocks, exps)):
            got = outs[i] if i < len(outs) else ''
            err = errs[i] if i < len(errs) else None
            if exp.strip() == '':   # plot/no-output example
                status = 'ERR' if err else 'skip(noout)'
                ok = err is None
            else:
                ok, reason = compare(exp, got)
                status = 'OK' if ok else f'DIFF({reason})'
                if err: status = f'ERR'
            report.append({'fn':name,'i':i,'in':inp,'exp':exp,'got':got,'err':err,'status':status,'ok':ok and not err})
    json.dump(report, open('.fn-audit/_report.json','w'), indent=1)
    # summary
    from collections import Counter
    bad=[r for r in report if not r['ok'] and not r['status'].startswith('skip')]
    print(f"total examples: {len(report)}  failing: {len(bad)}")
    for r in report:
        mark = '✓' if r['ok'] else ('·' if r['status'].startswith('skip') else '✗')
        if mark=='✗':
            print(f"  {mark} {r['fn']}#{r['i']} [{r['status']}] {r['in'][:45]!r}")
