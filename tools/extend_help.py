#!/usr/bin/env python3
"""Migrate one-line EXTRA_HELP/EXTRA_SYNTAX entries into full HELP entries (summary + syntax +
description + examples) from the scraped MATLAB reference dump, then empty EXTRA_HELP/EXTRA_SYNTAX.

Fixes vs the original extend_help_core.py:
  * Scraped text is escaped correctly (backslash BEFORE quote) and markdown backticks stripped,
    so emitted TS strings always terminate.
  * EXTRA_HELP / EXTRA_SYNTAX parsing is escaped-quote aware, so a summary like
    'A*X + X*A\\' + Q = 0' is captured whole (not truncated, no dangling backslash).
  * Keys already present in HELP are skipped (no duplicate object keys).
"""
import re, sys

DOCS_FILE = '/home/csd81/Desktop/docs/0core_referencelist/monolithic.md'
TS_FILE = sys.argv[1]

JUNK_PREFIXES = ('We value your privacy', 'MORE OPTIONSAGREE', 'Select a Web Site',
                 'Accelerating the pace', 'Based on your location', 'You can also select a web site',
                 'Contact your local', '© 1994', 'Choose a web site')


def esc(text):
    text = text.replace('\\', '\\\\').replace("'", "\\'").replace('`', '')
    return re.sub(r'\s+', ' ', text.replace('\n', ' ')).strip()


def process_monolithic(filepath):
    content = open(filepath, encoding='utf-8').read()
    out = {}
    for part in content.split('# File: ')[1:]:
        filename = part.split('\n', 1)[0].strip()
        if not filename.endswith('.html'):
            continue
        func = filename[:-5].lower()
        description = []
        dm = re.search(r'## Description\n(.*?)(?=\n## |\Z)', part, re.DOTALL)
        if dm:
            for p in dm.group(1).strip().split('\n\n'):
                p = esc(p)
                if p and not any(p.startswith(j) for j in JUNK_PREFIXES):
                    description.append(p)
        examples = []
        em = re.search(r'## Examples\n(.*?)(?=\n## |\Z)', part, re.DOTALL)
        if em:
            blocks = re.findall(r'```matlab\n(.*?)\n```', em.group(1), re.DOTALL) \
                or re.findall(r'```\n(.*?)\n```', em.group(1), re.DOTALL)
            for cb in blocks:
                for l in cb.split('\n'):
                    if l.strip():
                        examples.append(esc(l))
                        if len(examples) >= 3:
                            break
                if len(examples) >= 3:
                    break
        out[func] = {'description': description[:5], 'examples': examples}
    return out


STR = r"'((?:[^'\\]|\\.)*)'"
KEYVAL = re.compile(r"'?(?P<key>[A-Za-z0-9_.]+)'?\s*:\s*" + STR)


def main():
    docs = process_monolithic(DOCS_FILE)
    ts = open(TS_FILE, encoding='utf-8').read()
    eh = re.search(r'const EXTRA_HELP:\s*Record<string,\s*string>\s*=\s*\{([\s\S]*?)\n\};', ts)
    es = re.search(r'const EXTRA_SYNTAX:\s*Record<string,\s*string\[\]>\s*=\s*\{([\s\S]*?)\n\};', ts)
    he = re.search(r'(const HELP:\s*Record<string,\s*HelpEntry>\s*=\s*\{[\s\S]*?)\n\};', ts)
    if not (eh and es and he):
        sys.exit('could not locate EXTRA_HELP / EXTRA_SYNTAX / HELP')

    help_pairs = {m.group('key'): m.group(2) for m in KEYVAL.finditer(eh.group(1))}   # group(2) = the string value (group 1 is the key)
    syntax_pairs = {}
    for m in re.finditer(r"'?(?P<key>[A-Za-z0-9_.]+)'?\s*:\s*\[(?P<arr>[^\]]*)\]", es.group(1)):
        syntax_pairs[m.group('key')] = re.findall(STR, m.group('arr'))
    existing = set(re.findall(r"(?:^|\n)\s+'?([A-Za-z0-9_.]+)'?\s*:\s*\{\s*summary:", he.group(1)))

    lines, skipped = [], 0
    for key, summary in help_pairs.items():
        if key in existing:
            skipped += 1
            continue
        doc = docs.get(key.lower(), {})
        syn = syntax_pairs.get(key) or []
        parts = [f"summary: '{summary}'",
                 'syntax: [' + ', '.join(f"'{s}'" for s in syn) + ']']   # HelpEntry requires syntax (may be empty)
        if doc.get('description'):
            parts.append('description: [' + ', '.join(f"'{p}'" for p in doc['description']) + ']')
        if doc.get('examples'):
            parts.append('examples: [' + ', '.join(f"'{e}'" for e in doc['examples']) + ']')
        lines.append(f"  '{key}': {{ {', '.join(parts)} }},")

    new_ts = ts.replace(he.group(1), he.group(1) + '\n' + '\n'.join(lines))
    new_ts = re.sub(r'(const EXTRA_HELP:\s*Record<string,\s*string>\s*=\s*)\{[\s\S]*?\n\};', r'\1{};', new_ts)
    new_ts = re.sub(r'(const EXTRA_SYNTAX:\s*Record<string,\s*string\[\]>\s*=\s*)\{[\s\S]*?\n\};', r'\1{};', new_ts)
    open(TS_FILE, 'w', encoding='utf-8').write(new_ts)
    print(f'Migrated {len(lines)} into HELP ({skipped} skipped as already present); docs had {len(docs)} functions.')


if __name__ == '__main__':
    main()
