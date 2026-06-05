#!/usr/bin/env node
// extract-source.mjs — pull raw MATLAB .m source for a list of functions, so toolbox functions can
// be reverse-engineered from the algorithm of record instead of guessed from docs.
//
// Usage:
//   node scripts/extract-source.mjs fn1 fn2 fn3 ...
//   node scripts/extract-source.mjs --section <id>     # read bullets from expanded_computable_functions.md
//   node scripts/extract-source.mjs --file names.txt   # one function name per line
//
// Output: scratch/src/<fn>.m per readable m-file, and scratch/triage.tsv
//   (name  exist  path)   exist=2 m-file(dumped) | 5 built-in(skip) | 0 missing.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const GAP = `${ROOT}/src/sandbox/matlab/toolboxes/expanded_computable_functions.md`;

function namesFromSection(id) {
  const md = readFileSync(GAP, 'utf8').split('\n');
  const out = []; let inSec = false;
  for (const line of md) {
    const h = line.match(/^## `?([\w-]+)`?/);
    if (h) { inSec = h[1] === id; continue; }
    if (inSec) { const b = line.match(/^[*-]\s+`?([A-Za-z]\w*)`?/); if (b) out.push(b[1]); }
  }
  return out;
}

const args = process.argv.slice(2);
let names = [];
if (args[0] === '--section') names = namesFromSection(args[1]);
else if (args[0] === '--file') names = readFileSync(args[1], 'utf8').split('\n').map((s) => s.trim()).filter(Boolean);
else names = args;
names = [...new Set(names)].filter(Boolean);
if (!names.length) { console.error('no function names'); process.exit(1); }

const SCR = `${ROOT}/scratch`; mkdirSync(`${SCR}/src`, { recursive: true });
// Resolve exist()/which() for every name in one REPL-style `matlab -batch` call (no run()/type —
// those were fragile); then read each .m straight off disk from the resolved path.
const D = '@@@';
const list = names.map((n) => `'${n}'`).join(',');
const cmd = `ns={${list}}; for i=1:numel(ns), n=ns{i}; try, fprintf('${D}\\t%s\\t%d\\t%s\\n', n, exist(n), which(n)); catch, fprintf('${D}\\t%s\\t-1\\t\\n', n); end; end`;

console.error(`resolving ${names.length} functions via matlab -batch ...`);
let out;
try { out = execFileSync('matlab', ['-batch', cmd], { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }); }
catch (e) { out = (e.stdout || '') + (e.stderr || ''); }

const triage = [];
let dumped = 0, builtin = 0, missing = 0;
for (const line of out.split('\n')) {
  if (!line.startsWith(`${D}\t`)) continue;
  const [, name, existS, ...pathParts] = line.split('\t');
  const exist = parseInt(existS, 10);
  const path = pathParts.join('\t').trim();
  triage.push(`${name}\t${exist}\t${path}`);
  if (exist === 2 && path && path.endsWith('.m')) {
    try { writeFileSync(`${SCR}/src/${name}.m`, readFileSync(path, 'utf8')); dumped++; } catch { missing++; }
  } else if (exist === 5) builtin++;
  else missing++;
}
writeFileSync(`${SCR}/triage.tsv`, triage.join('\n') + '\n');
console.error(`dumped ${dumped} m-files → scratch/src/  | built-in(skip) ${builtin} | missing ${missing}`);
console.error(`triage → scratch/triage.tsv`);
