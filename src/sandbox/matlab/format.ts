/** Display formatting (`format short`) and the `fprintf`/`sprintf` printf engine. */
import { type Mat, type Value, isMat, isHandle, isComplex, numel, isScalar, asString } from './values';

/** Format a complex scalar as `a + bi` / `a - bi`. */
function fmtC(re: number, im: number): string {
  const sign = im < 0 || Object.is(im, -0) ? '-' : '+';
  return `${formatScalar(re)} ${sign} ${formatScalar(Math.abs(im))}i`;
}
function complexMatrixLines(m: Mat): string[] {
  const cells: string[][] = []; let w = 0;
  for (let r = 0; r < m.rows; r++) { const row: string[] = []; for (let c = 0; c < m.cols; c++) { const i = r + c * m.rows; const s = fmtC(m.data[i], m.idata ? m.idata[i] : 0); row.push(s); w = Math.max(w, s.length); } cells.push(row); }
  return cells.map((row) => '   ' + row.map((s) => s.padStart(w)).join('   '));
}

// ── Number / matrix display ────────────────────────────────────────────
export function formatScalar(x: number): string {
  if (Number.isNaN(x)) return 'NaN';
  if (x === Infinity) return 'Inf';
  if (x === -Infinity) return '-Inf';
  if (Number.isInteger(x) && Math.abs(x) < 1e15) return String(x);
  const a = Math.abs(x);
  if (a !== 0 && (a >= 1e5 || a < 1e-4)) return x.toExponential(4).replace('e', 'e');
  return x.toFixed(4);
}

function allIntegers(m: Mat): boolean {
  for (let i = 0; i < m.data.length; i++) if (!Number.isInteger(m.data[i])) return false;
  return true;
}

/** Lines for a numeric matrix body (no name, no surrounding blanks). */
export function matrixLines(m: Mat): string[] {
  if (numel(m) === 0) return ['[]'];
  const ints = allIntegers(m);
  const cells: string[][] = [];
  let width = 0;
  for (let r = 0; r < m.rows; r++) {
    const row: string[] = [];
    for (let c = 0; c < m.cols; c++) {
      const v = m.data[r + c * m.rows];
      const s = ints && Math.abs(v) < 1e15 ? String(v) : formatScalar(v);
      row.push(s);
      width = Math.max(width, s.length);
    }
    cells.push(row);
  }
  return cells.map((row) => '   ' + row.map((s) => s.padStart(width)).join('   '));
}

/** `disp(x)` output. */
/** Brief one-token form of a value, for cell/struct display. */
function brief(v: Value): string {
  if (v.kind === 'gobj') return `<${v.gtype}>`;
  if (isHandle(v)) return `@${v.name ?? 'fn'}`;
  if (v.kind === 'cell') return `{${v.rows}×${v.cols} cell}`;
  if (v.kind === 'struct') return `[${v.rows}×${v.cols} struct]`;
  if (v.kind === 'sparse') return `[${v.rows}×${v.cols} sparse]`;
  if (v.kind === 'str') return v.rows * v.cols === 1 ? `"${v.items[0]}"` : `[${v.rows}×${v.cols} string]`;
  if (v.kind === 'graph') return `[${v.directed ? 'digraph' : 'graph'}]`;
  if (v.isChar) return `'${asString(v)}'`;
  if (numel(v) === 0) return '[]';
  if (isScalar(v)) return `[${isComplex(v) ? fmtC(v.data[0], v.idata![0]) : formatScalar(v.data[0])}]`;
  return `[${v.rows}×${v.cols} ${isComplex(v) ? 'complex' : 'double'}]`;
}
function cellLines(v: { rows: number; cols: number; items: Value[] }): string[] {
  if (v.rows * v.cols === 0) return ['  {}'];
  const cells: string[][] = []; let w = 0;
  for (let r = 0; r < v.rows; r++) { const row: string[] = []; for (let c = 0; c < v.cols; c++) { const s = `{${brief(v.items[r + c * v.rows])}}`; row.push(s); w = Math.max(w, s.length); } cells.push(row); }
  return cells.map((row) => '    ' + row.map((s) => s.padEnd(w)).join('    '));
}
function structLines(v: { rows: number; cols: number; fields: Map<string, Value[]> }): string[] {
  if (v.rows === 1 && v.cols === 1) return [...v.fields.entries()].map(([k, vals]) => `    ${k}: ${brief(vals[0])}`);
  return [`  ${v.rows}×${v.cols} struct array with fields:`, ...[...v.fields.keys()].map((k) => `    ${k}`)];
}
/** MATLAB-style sparse display: a column-major list of `(i,j)  value` lines. */
function sparseLines(v: { rows: number; cols: number; colptr: Int32Array; rowind: Int32Array; values: Float64Array }): string[] {
  if (v.values.length === 0) return [`   All zero sparse: ${v.rows}×${v.cols}`];
  const out: string[] = [];
  for (let j = 0; j < v.cols; j++) for (let p = v.colptr[j]; p < v.colptr[j + 1]; p++) out.push(`   (${v.rowind[p] + 1},${j + 1})${' '.repeat(Math.max(1, 8 - String(v.rowind[p] + 1).length))}${formatScalar(v.values[p])}`);
  return out;
}

export function dispValue(v: Value): string {
  if (v.kind === 'cell') return cellLines(v).join('\n');
  if (v.kind === 'struct') return structLines(v).join('\n');
  if (v.kind === 'sparse') return sparseLines(v).join('\n');
  if (v.kind === 'str') return strLines(v).join('\n');
  if (v.kind === 'graph') return graphLines(v).join('\n');
  if (v.kind === 'gobj') return `<${v.gtype} handle>`;
  if (isHandle(v)) return `@${v.name ?? 'anonymous'}`;
  if (v.kind === 'num' && v.nd) return ndLines(v).join('\n');
  if (v.isChar) return asString(v);
  if (numel(v) === 0) return '';
  if (isComplex(v)) return isScalar(v) ? fmtC(v.data[0], v.idata![0]) : complexMatrixLines(v).join('\n');
  if (isScalar(v)) return formatScalar(v.data[0]);
  return matrixLines(v).join('\n');
}

/** Auto-display of `name = value` (unsuppressed statements). */
export function displayValue(name: string, v: Value): string {
  if (v.kind === 'cell') return `${name} =\n\n  ${v.rows}×${v.cols} cell array\n${cellLines(v).join('\n')}\n`;
  if (v.kind === 'struct') return `${name} =\n\n  struct with fields:\n${structLines(v).join('\n')}\n`;
  if (v.kind === 'sparse') return `${name} =\n\n${sparseLines(v).join('\n')}\n`;
  if (v.kind === 'str') return `${name} =\n\n${strLines(v).join('\n')}\n`;
  if (v.kind === 'graph') return `${name} =\n\n  ${v.directed ? 'digraph' : 'graph'} with properties:\n${graphLines(v).join('\n')}\n`;
  if (v.kind === 'num' && v.nd) return `${name} =\n\n${ndLines(v).join('\n')}\n`;
  if (v.kind === 'gobj') return `${name} =\n\n  <${v.gtype} handle>\n`;
  if (isHandle(v)) return `${name} =\n\n    @${v.name ?? 'anonymous function'}\n`;
  if (v.isChar) return `${name} =\n\n    ${asString(v)}\n`;
  if (numel(v) === 0) return `${name} =\n\n     []\n`;
  if (isComplex(v)) return isScalar(v) ? `${name} =\n\n   ${fmtC(v.data[0], v.idata![0])}\n` : `${name} =\n\n${complexMatrixLines(v).join('\n')}\n`;
  if (isScalar(v)) return `${name} =\n\n   ${formatScalar(v.data[0])}\n`;
  return `${name} =\n\n${matrixLines(v).join('\n')}\n`;
}

/** Display of a string array: scalar as `"text"`, otherwise quoted entries in a grid. */
function strLines(v: { rows: number; cols: number; items: string[] }): string[] {
  if (v.rows * v.cols === 1) return [`    "${v.items[0]}"`];
  if (v.rows * v.cols === 0) return ['    0×0 string array'];
  const q = v.items.map((s) => `"${s}"`); let w = 0; for (const s of q) w = Math.max(w, s.length);
  const lines: string[] = [];
  for (let r = 0; r < v.rows; r++) { const row: string[] = []; for (let c = 0; c < v.cols; c++) row.push(q[r + c * v.rows].padEnd(w)); lines.push('    ' + row.join('    ')); }
  return lines;
}

/** Summary display of a graph/digraph: edge & node tables (MATLAB-style). */
function graphLines(v: { directed: boolean; n: number; edges: { s: number; t: number; w: number }[]; names?: string[] }): string[] {
  const weighted = v.edges.some((e) => e.w !== 1);
  return [
    `    Edges: [${v.edges.length}×${weighted ? 2 : 1} table]`,
    `    Nodes: [${v.n}×${v.names ? 1 : 0} table]`,
  ];
}

/** Slice-wise display of an N-D array: each page as `(:,:,k) = <2-D slice>`. */
function ndLines(v: Mat): string[] {
  const dims = v.nd!; const d0 = dims[0], d1 = dims[1], pageSize = d0 * d1;
  const higher = dims.slice(2); const nPages = higher.reduce((p, x) => p * x, 1);
  const out: string[] = [];
  for (let pg = 0; pg < nPages; pg++) {
    let rem = pg; const idx: number[] = []; for (const h of higher) { idx.push((rem % h) + 1); rem = Math.floor(rem / h); }
    const sd = new Float64Array(pageSize); const si = v.idata ? new Float64Array(pageSize) : undefined;
    for (let i = 0; i < pageSize; i++) { sd[i] = v.data[pg * pageSize + i]; if (si) si[i] = v.idata![pg * pageSize + i]; }
    const slice: Mat = { kind: 'num', rows: d0, cols: d1, data: sd, idata: si, isChar: v.isChar };
    out.push(`(:,:,${idx.join(',')}) =`, '', dispValue(slice), '');
  }
  return out;
}

// ── printf ─────────────────────────────────────────────────────────────
/** Flatten args (column-major) into a stream; char args stay grouped for %s. */
function buildStream(args: Value[]): Array<{ s: string } | { n: number }> {
  const stream: Array<{ s: string } | { n: number }> = [];
  for (const a of args) {
    if (isHandle(a)) { stream.push({ s: a.name ?? '@fn' }); continue; }
    if (a.kind === 'gobj') { stream.push({ s: `<${a.gtype}>` }); continue; }
    if (a.kind === 'cell' || a.kind === 'struct' || a.kind === 'graph') { stream.push({ s: brief(a) }); continue; }
    if (a.kind === 'str') { for (const s of a.items) stream.push({ s }); continue; }
    if (a.kind === 'sparse') { for (const v of a.values) stream.push({ n: v }); continue; }
    if (a.isChar) { stream.push({ s: asString(a) }); continue; }
    for (let i = 0; i < a.data.length; i++) stream.push({ n: a.data[i] });
  }
  return stream;
}

const ESCAPES: Record<string, string> = { n: '\n', t: '\t', r: '\r', '\\': '\\', '%': '%' };

export function sprintf(fmt: string, args: Value[]): string {
  const stream = buildStream(args);
  let p = 0;
  const nextNum = (): number => { while (p < stream.length && !('n' in stream[p])) p++; const c = stream[p++]; return c && 'n' in c ? c.n : 0; };
  const nextStr = (): string => { const c = stream[p]; if (c && 's' in c) { p++; return c.s; } if (c && 'n' in c) { p++; return String.fromCharCode(c.n); } return ''; };

  const renderOnce = (): { text: string; consumedAny: boolean } => {
    let out = '';
    let consumedAny = false;
    let i = 0;
    while (i < fmt.length) {
      const ch = fmt[i];
      if (ch === '\\') { const e = fmt[i + 1]; out += ESCAPES[e] ?? ('\\' + (e ?? '')); i += 2; continue; }
      if (ch !== '%') { out += ch; i++; continue; }
      // parse conversion
      let j = i + 1;
      let flags = '';
      while ('-+ 0#'.includes(fmt[j])) { flags += fmt[j]; j++; }
      let width = '';
      while (fmt[j] >= '0' && fmt[j] <= '9') { width += fmt[j]; j++; }
      let prec = '';
      if (fmt[j] === '.') { prec += '.'; j++; while (fmt[j] >= '0' && fmt[j] <= '9') { prec += fmt[j]; j++; } }
      const conv = fmt[j];
      i = j + 1;
      if (conv === '%') { out += '%'; continue; }
      consumedAny = true;
      out += applyConv(conv, flags, width, prec, nextNum, nextStr);
    }
    return { text: out, consumedAny };
  };

  // Repeat the format while values remain (MATLAB behaviour).
  let result = '';
  const first = renderOnce();
  result += first.text;
  if (first.consumedAny) {
    while (p < stream.length) {
      const r = renderOnce();
      result += r.text;
      if (!r.consumedAny) break;
    }
  }
  return result;
}

function applyConv(
  conv: string, flags: string, width: string, prec: string,
  nextNum: () => number, nextStr: () => string,
): string {
  const w = width ? parseInt(width, 10) : 0;
  const pr = prec ? parseInt(prec.slice(1), 10) : undefined;
  let body: string;
  switch (conv) {
    case 'd': case 'i': case 'u': {
      const v = nextNum();
      body = Number.isFinite(v) ? String(Math.round(v)) : (v === Infinity ? 'Inf' : v === -Infinity ? '-Inf' : 'NaN');
      break;
    }
    case 'f': { const v = nextNum(); body = Number.isFinite(v) ? v.toFixed(pr ?? 6) : (Number.isNaN(v) ? 'NaN' : (v > 0 ? 'Inf' : '-Inf')); break; }
    case 'e': case 'E': { const v = nextNum(); body = v.toExponential(pr ?? 6); if (conv === 'E') body = body.toUpperCase(); break; }
    case 'g': case 'G': { const v = nextNum(); body = formatG(v, pr ?? 6); if (conv === 'G') body = body.toUpperCase(); break; }
    case 'c': { body = String.fromCharCode(nextNum()); break; }
    case 's': { body = nextStr(); break; }
    default: return '%' + conv;
  }
  if (w > body.length) {
    if (flags.includes('-')) body = body.padEnd(w);
    else if (flags.includes('0') && 'difeEgG'.includes(conv)) {
      const neg = body.startsWith('-');
      body = (neg ? '-' : '') + (neg ? body.slice(1) : body).padStart(w - (neg ? 1 : 0), '0');
    } else body = body.padStart(w);
  }
  return body;
}

function formatG(v: number, sig: number): string {
  if (v === 0) return '0';
  const s = v.toPrecision(sig || 1);
  return s.includes('.') && !s.includes('e') ? s.replace(/\.?0+$/, '') : s;
}
