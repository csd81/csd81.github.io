import katex from 'katex';
import { readFileSync } from 'fs';

const md = readFileSync(process.argv[2], 'utf8');
// mask escaped \$ so it doesn't count as a delimiter
const masked = md.replace(/\\\$/g, '');

let blocks = 0, failed = 0;
// display $$...$$
const display = [...masked.matchAll(/\$\$([\s\S]*?)\$\$/g)];
let rest = masked.replace(/\$\$([\s\S]*?)\$\$/g, (_, b) => {
  blocks++;
  try { katex.renderToString(b, { displayMode: true, strict: false, throwOnError: true }); }
  catch (e) { failed++; console.log('DISPLAY FAIL:', e.message.split('\n')[0], '::', b.slice(0, 60).replace(/\n/g, ' ')); }
  return ' ';
});
// inline $...$
[...rest.matchAll(/\$([^$]+?)\$/g)].forEach(m => {
  blocks++;
  try { katex.renderToString(m[1], { displayMode: false, strict: false, throwOnError: true }); }
  catch (e) { failed++; console.log('INLINE FAIL:', e.message.split('\n')[0], '::', m[1].slice(0, 60).replace(/\n/g, ' ')); }
});

const dollars = (masked.match(/(?<!\$)\$(?!\$)/g) || []).length;
const dd = (masked.match(/\$\$/g) || []).length;
console.log(`blocks: ${blocks}, FAILED: ${failed}, single-$ count: ${dollars}, $$ count: ${dd}`);
