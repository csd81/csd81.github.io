#!/usr/bin/env node
// Scaffold a toolbox module stub from the reference data.
// Usage: node scripts/gen-toolbox.mjs <id> ["Display Name"] [docBaseUrl]
//
// Reads src/sandbox/matlab/toolboxes/expanded_computable_functions.md (curated candidate list)
// and toolboxes/<id>/referencelist.html (full reference) to print the candidate function names
// and emit a starter src/sandbox/matlab/tb/<id>.ts with `throw 'not yet implemented'` stubs plus
// one-line help entries. Implement the computable subset by hand, then validate vs live MATLAB.
// (Reads the untracked toolboxes/ data dir; never commits it.)
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TB_DATA = join(ROOT, 'src/sandbox/matlab/toolboxes');
const TB_CODE = join(ROOT, 'src/sandbox/matlab/tb');

const id = process.argv[2];
if (!id) { console.error('usage: node scripts/gen-toolbox.mjs <id> ["Display Name"] [docBaseUrl]'); process.exit(1); }
const displayName = process.argv[3] || `${id} toolbox`;
const docBase = process.argv[4] || `https://www.mathworks.com/help/${id}/`;

// 1) candidate function names from the curated md (section `## \`<id>\``)
const md = readFileSync(join(TB_DATA, 'expanded_computable_functions.md'), 'utf8');
const lines = md.split('\n');
const start = lines.findIndex((l) => l.trim() === `## \`${id}\``);
const names = [];
if (start >= 0) for (let i = start + 1; i < lines.length && !lines[i].startsWith('## '); i++) {
  const mm = lines[i].match(/^\*\s+`([^`]+)`/); if (mm) names.push(mm[1]);
}
// drop obviously non-computable names (config/app/UI/contact/videos/blocks)
const SKIP = /(^ui|config$|app$|contact_us|^videos$|gridlayout|streamer|gpuarray)/i;
const fns = names.filter((n) => !SKIP.test(n));

console.log(`# ${id} — ${fns.length} candidate computable functions (of ${names.length} listed)`);
console.log(fns.join('\n'));

// 2) emit a stub module unless one already exists
const out = join(TB_CODE, `${id}.ts`);
if (existsSync(out)) { console.error(`\n${out} already exists — not overwriting.`); process.exit(0); }
const CONST = id.toUpperCase().replace(/[^A-Z0-9]/g, '_');
const body = `// ${displayName} — generated stub (fill in the computable subset, then validate vs live MATLAB).
import type { Builtin } from '../builtins';
import { type Value, toMat as m, scalar, MatError } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const TODO: Builtin = async () => { throw new MatError('not yet implemented in the sandbox'); };
void m; void scalar; void ret;   // commonly-used helpers (remove when implementing)

export const ${CONST}: ToolboxModule = {
  id: ${JSON.stringify(id)},
  name: ${JSON.stringify(displayName)},
  docBase: ${JSON.stringify(docBase)},
  builtins: {
${fns.map((n) => `    ${/^[A-Za-z_$][\w$]*$/.test(n) ? n : JSON.stringify(n)}: TODO,`).join('\n')}
  },
  help: {
${fns.map((n) => `    ${/^[A-Za-z_$][\w$]*$/.test(n) ? n : JSON.stringify(n)}: ${JSON.stringify(n)},`).join('\n')}
  },
};
`;
writeFileSync(out, body);
console.error(`\nWrote stub ${out}. Register it in tb/index.ts (import + TOOLBOXES array).`);
