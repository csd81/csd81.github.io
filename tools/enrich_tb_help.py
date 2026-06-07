#!/usr/bin/env python3
import os
"""Additively enrich tb/help-*.ts entries with description/examples from the MATLAB reference dump.
Never removes anything — existing summary/syntax/seealso (and hand-written entries) are preserved.
Only adds `description`(+`examples`) to entries that lack a description and whose function is in the docs."""
import re, sys

DOCS_FILE = '/home/csd81/Desktop/docs/0core_referencelist/monolithic.md'
JUNK = ('We value your privacy', 'MORE OPTIONSAGREE', 'Select a Web Site', 'Accelerating the pace',
        'Based on your location', 'You can also select a web site', 'Contact your local', '© 1994', 'Choose a web site')


def esc(t):
    t = re.sub(r'\[+\s*\d+\s*\]+\([^)]*\)', '', t)   # drop citation links [[1]](url)
    t = re.sub(r'\[([^\]]*)\]\([^)]*\)', r'\1', t)   # [text](url) -> text
    t = re.sub(r'\*\*?([^*]+)\*\*?', r'\1', t)        # **bold**/*italic* -> text
    t = t.replace('\\', '\\\\').replace("'", "\\'").replace('`', '')
    return re.sub(r'\s+', ' ', t.replace('\n', ' ')).strip()


def load_docs(path):
    out = {}
    for part in open(path, encoding='utf-8').read().split('# File: ')[1:]:
        fn = part.split('\n', 1)[0].strip()
        if not fn.endswith('.html'):
            continue
        desc = []
        dm = re.search(r'## Description\n(.*?)(?=\n## |\Z)', part, re.DOTALL)
        if dm:
            for raw in dm.group(1).strip().split('\n\n'):
                raw = raw.strip()
                if re.fullmatch(r'\[[^\]]*\]\([^)]*\)', raw):   # pure link paragraph, e.g. [example](url)
                    continue
                p = esc(raw)
                if p and p.lower() != 'example' and not any(p.startswith(j) for j in JUNK):
                    desc.append(p)
        ex = []
        em = re.search(r'## Examples\n(.*?)(?=\n## |\Z)', part, re.DOTALL)
        if em:
            blocks = re.findall(r'```matlab\n(.*?)\n```', em.group(1), re.DOTALL) or re.findall(r'```\n(.*?)\n```', em.group(1), re.DOTALL)
            for cb in blocks:
                for l in cb.split('\n'):
                    if l.strip():
                        ex.append(esc(l))
                        if len(ex) >= 3:
                            break
                if len(ex) >= 3:
                    break
        out[fn[:-5].lower()] = {'description': desc[:5], 'examples': ex}
    return out


KEY = re.compile(r"('?)([A-Za-z_][A-Za-z0-9_.]*)\1\s*:\s*")


def split_entries(body):
    """Yield (key, value_start, value_end) for each top-level entry — brace/bracket/string aware."""
    i, n = 0, len(body)
    while i < n:
        if body[i] in ' \t\n,':
            i += 1
            continue
        m = KEY.match(body, i)
        if not m:
            i += 1
            continue
        key, vstart = m.group(2), m.end()
        j, depth, instr, escaped = vstart, 0, None, False
        while j < n:
            c = body[j]
            if instr:
                if escaped:
                    escaped = False
                elif c == '\\':
                    escaped = True
                elif c == instr:
                    instr = None
            elif c in "'\"`":
                instr = c
            elif c in '{[(':
                depth += 1
            elif c in '}])':
                depth -= 1
            elif c == ',' and depth == 0:
                break
            j += 1
        yield key, vstart, vstart + len(body[vstart:j].rstrip())
        i = j + 1


def enrich(value, doc):
    if not doc or not doc.get('description') or 'description:' in value:
        return None
    desc = 'description: [' + ', '.join(f"'{p}'" for p in doc['description']) + ']'
    ex = (', examples: [' + ', '.join(f"'{e}'" for e in doc['examples']) + ']') if doc.get('examples') else ''
    v = value.strip()
    if v.startswith('{') and v.endswith('}'):
        return '{ ' + v[1:-1].strip().rstrip(',') + ', ' + desc + ex + ' }'
    if v.startswith("'") and v.endswith("'"):
        return "{ summary: " + v + ', syntax: [], ' + desc + ex + ' }'   # HelpEntry requires syntax
    return None


DOCMAP = {
    'aerospace': 'aerotbx', 'antenna': 'antenna', 'audio': 'audio', 'bioinfo': 'bioinfo', 'comm': 'comm',
    'control': 'control', 'curvefit': 'curvefit', 'dsp': 'dsp', 'econ': 'econ', 'financial': 'finance',
    'fininst': 'fininst', 'fixedpoint': 'fixedpoint', 'fusion': 'fusion', 'fuzzy': 'fuzzy', 'gads': 'gads',
    'ident': 'ident', 'images': 'images', 'lidar': 'lidar', 'mapping': 'map', 'nav': 'nav', 'nnet': 'deeplearning',
    'optim': 'optim', 'parallel': 'parallel-computing', 'pde': 'pde', 'phased': 'phased', 'radar': 'radar',
    'rf': 'rf', 'risk': 'risk', 'rl': 'reinforcement-learning', 'robotics': 'robotics', 'signal': 'signal',
    'simulink': '0simulink', 'stats': 'stats', 'symbolic': 'symbolic', 'textanalytics': 'textanalytics',
    'uav': 'uav', 'vision': 'vision', 'wavelet': 'wavelet',
}


def process(path, docs):
    s = open(path, encoding='utf-8').read()
    rec = re.search(r'(export const HELP_\w+: Record<string, HelpEntry \| string> = \{)([\s\S]*?)(\n\s*\};)', s)
    if not rec:
        return 0
    head, body, tail = rec.groups()
    edits = []
    for key, vs, ve in split_entries(body):
        nv = enrich(body[vs:ve], docs.get(key.lower()))
        if nv is not None:
            edits.append((vs, ve, nv))
    if not edits:
        return 0
    nb = body
    for vs, ve, nv in sorted(edits, reverse=True):
        nb = nb[:vs] + nv + nb[ve:]
    open(path, 'w', encoding='utf-8').write(s[:rec.start()] + head + nb + tail + s[rec.end():])
    return len(edits)


def main():
    cache, total = {}, 0
    for path in sys.argv[1:]:
        tbid = path.split('/')[-1].replace('help-', '').replace('.ts', '')
        docdir = DOCMAP.get(tbid)
        if not docdir:
            print(f'{path.split("/")[-1]}: no doc map, skip')
            continue
        if docdir not in cache:
            docpath = f'/home/csd81/Desktop/docs/{docdir}/monolithic.md'
            cache[docdir] = load_docs(docpath) if os.path.exists(docpath) else {}
        c = process(path, cache[docdir])
        total += c
        print(f'{path.split("/")[-1]} (<-{docdir}): +{c}')
    print(f'TOTAL: {total}')


if __name__ == '__main__':
    main()
