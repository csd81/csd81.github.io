/**
 * Wrap undelimited inline LaTeX in $...$ for the study-guide markdown files.
 *
 * Heuristic: a "math run" is anchored by a LaTeX command (\foo) or an identifier
 * carrying a sub/superscript (x^2, a_{i1}); it then extends right across
 * letter-free "glue" (spaces, = + - * / < > , : . |) to further atoms (commands,
 * brace groups, scripted identifiers, or standalone single letters/digits).
 * It stops at English words (>=2 letters) so prose is never wrapped. Existing
 * $...$ / $$...$$, fenced ``` blocks and `inline code` are left untouched.
 *
 * Usage: node scripts/wrap-math.mjs <file...>            (in place)
 *        node scripts/wrap-math.mjs --dry <file>          (print diff-ish)
 */
import { readFileSync, writeFileSync } from 'fs';
import katex from 'katex';

const isLetter = (c) => !!c && /[A-Za-z]/.test(c);
const isAlnum = (c) => !!c && /[A-Za-z0-9]/.test(c);
// Glue joins math atoms within a run. Only a literal space counts as
// whitespace glue — NOT tab/newline, so runs never cross table columns or lines.
const isGlue = (c) => !!c && /[ =+\-*/<>,:.|()[\]]/.test(c);

/** Delimiter-sizing commands that must be followed by a delimiter. */
const DELIMS = new Set([
  'left', 'right', 'big', 'Big', 'bigg', 'Bigg', 'bigl', 'bigr', 'Bigl', 'Bigr',
  'biggl', 'biggr', 'Biggl', 'Biggr', 'bigm', 'Bigm', 'biggm', 'Biggm', 'middle',
]);

/** From j (just after a sizing command), consume optional space + one delimiter. */
function delimiter(s, j) {
  while (s[j] === ' ') j++;
  if (/[()[\]|/.<>]/.test(s[j] || '')) return j + 1;
  if (s[j] === '\\' && /[{}|]/.test(s[j + 1] || '')) return j + 2;
  if (s[j] === '\\' && isLetter(s[j + 1])) { j += 1; while (isLetter(s[j])) j++; return j; }
  return j;
}

/** End index of a balanced {...} group starting at i (s[i]==='{'). */
function brace(s, i) {
  let d = 0;
  for (let j = i; j < s.length; j++) {
    if (s[j] === '{') d++;
    else if (s[j] === '}') { d--; if (d === 0) return j + 1; }
  }
  return s.length;
}

/** End index of a balanced \{...\} group starting at i (s[i]==='\\', s[i+1]==='{'). */
function escBrace(s, i) {
  let d = 0, j = i;
  while (j < s.length) {
    if (s[j] === '\\' && s[j + 1] === '{') { d++; j += 2; }
    else if (s[j] === '\\' && s[j + 1] === '}') { d--; j += 2; if (d === 0) return j; }
    else j++;
  }
  return s.length;
}

/** Consume the scripts/argument groups trailing an atom head (from j). */
function trailers(s, j) {
  while (j < s.length) {
    if (s[j] === '_' || s[j] === '^') {
      j++;
      if (s[j] === '{') j = brace(s, j);
      else if (s[j] === '\\' && isLetter(s[j + 1])) { j++; while (isLetter(s[j])) j++; }
      else if (/[A-Za-z0-9+\-]/.test(s[j] || '')) j++;
    } else if (s[j] === '{') {
      j = brace(s, j);
    } else if (s[j] === '\\' && s[j + 1] === '{') {
      j = escBrace(s, j);
    } else break;
  }
  return j;
}

/** End index of a math atom starting at i, or -1 if none. */
function atom(s, i) {
  let j = i;
  if (s[j] === '\\' && isLetter(s[j + 1])) {            // \command
    const nameStart = j + 1;
    j++; while (isLetter(s[j])) j++;
    if (DELIMS.has(s.slice(nameStart, j))) j = delimiter(s, j); // \left( \big[ \right) ...
    j = trailers(s, j);
    return j;
  }
  if (s[j] === '\\' && s[j + 1] === '{') return escBrace(s, j); // \{ ... \}
  if (s[j] === '{') return trailers(s, brace(s, j));    // brace group
  if (isAlnum(s[j])) { j++; return trailers(s, j); }    // identifier (+ scripts)
  return -1;
}

/** Does an atom starting at i carry a command or a script (i.e. can ANCHOR a run)? */
function anchor(s, i) {
  if (s[i] === '\\' && isLetter(s[i + 1])) return atom(s, i);
  if (isAlnum(s[i]) && (s[i + 1] === '_' || s[i + 1] === '^')) return atom(s, i);
  return -1;
}

/** A standalone single letter/digit is a valid continuation only if not the
 *  start of an English word (next char isn't a letter). */
function validContinuation(s, g, b) {
  if (b - g === 1 && isAlnum(s[g])) return !isLetter(s[b]);
  return true;
}

/** True if `expr` renders in KaTeX without error (so wrapping it is safe). */
function katexOk(expr) {
  try {
    katex.renderToString(expr, { throwOnError: true, strict: false });
    return true;
  } catch {
    return false;
  }
}

function wrapMath(txt) {
  let out = '', i = 0;
  while (i < txt.length) {
    const a = anchor(txt, i);
    if (a > i) {
      let end = a;
      for (;;) {
        let g = end;
        while (g < txt.length && isGlue(txt[g])) g++;
        const b = atom(txt, g);
        if (b > g && validContinuation(txt, g, b)) end = b;
        else break;
      }
      // Trim trailing glue, then only wrap if KaTeX accepts the run; otherwise
      // leave it literal so the transform can never introduce a parse failure.
      const run = txt.slice(i, end).replace(/[ =+\-*/<>,:.|]+$/, '');
      if (run && katexOk(run)) {
        out += '$' + run + '$';
        i += run.length; // leave trimmed trailing glue as ordinary text
      } else {
        out += txt[i];
        i++;
      }
    } else {
      out += txt[i];
      i++;
    }
  }
  return out;
}

/** Apply wrapMath only outside protected spans (code, existing math). */
const PROTECT = /(```[\s\S]*?```|`[^`]*`|\$\$[\s\S]*?\$\$|\$[^$\n]+\$)/g;
function normalize(md) {
  let out = '', last = 0, m;
  PROTECT.lastIndex = 0;
  while ((m = PROTECT.exec(md))) {
    out += wrapMath(md.slice(last, m.index)) + m[0];
    last = m.index + m[0].length;
  }
  return out + wrapMath(md.slice(last));
}

const args = process.argv.slice(2);
const dry = args[0] === '--dry';
const files = dry ? args.slice(1) : args;
for (const f of files) {
  const before = readFileSync(f, 'utf8');
  const after = normalize(before);
  if (dry) {
    console.log('==== ' + f + ' ====');
    console.log(after.slice(0, 1400));
  } else {
    writeFileSync(f, after);
  }
}
