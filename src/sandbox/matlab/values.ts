/**
 * Runtime values for the MATLAB subset.
 *
 * Everything numeric is a dense, column-major matrix (scalars are 1×1, strings
 * are 1×n char rows). Function handles are the only other value kind.
 */

export interface Mat {
  kind: 'num';
  rows: number;
  cols: number;
  data: Float64Array;   // column-major real part: element (r,c) at data[r + c*rows]
  idata?: Float64Array; // column-major imaginary part; present ⇒ complex storage
  isChar?: boolean;
  isBool?: boolean;
}
export interface Handle {
  kind: 'handle';
  call: (args: Value[], nargout: number) => Promise<Value[]>;
  name?: string;
}
/** Graphics handle (e.g. the result of `gca`). Properties live in the graphics sink. */
export interface GObj {
  kind: 'gobj';
  gtype: 'axes' | 'figure';
}
/** Cell array — a rectangular container of arbitrary values (column-major). */
export interface Cell {
  kind: 'cell';
  rows: number;
  cols: number;
  items: Value[];   // column-major: element (r,c) at items[r + c*rows]
}
/** Struct (scalar or array) — named fields, each a per-element value list (column-major). */
export interface StructV {
  kind: 'struct';
  rows: number;
  cols: number;
  fields: Map<string, Value[]>;  // field name → value per element (length rows*cols)
}
/** Sparse matrix in Compressed Sparse Column (CSC) format. */
export interface Sparse {
  kind: 'sparse';
  rows: number;
  cols: number;
  colptr: Int32Array;   // length cols+1: column j occupies rowind/values[colptr[j]..colptr[j+1])
  rowind: Int32Array;   // row index of each stored entry (sorted within a column)
  values: Float64Array; // the stored (structurally nonzero) values
}
export type Value = Mat | Handle | GObj | Cell | StructV | Sparse;

export class MatError extends Error {}

// ── Constructors ───────────────────────────────────────────────────────
export function mat(rows: number, cols: number, data: Float64Array): Mat {
  return { kind: 'num', rows, cols, data };
}
export function zeros(rows: number, cols: number): Mat {
  return mat(rows, cols, new Float64Array(rows * cols));
}
export function scalar(x: number): Mat { return mat(1, 1, Float64Array.of(x)); }
export function bool(b: boolean): Mat { return { ...scalar(b ? 1 : 0), isBool: true }; }
export function empty(): Mat { return mat(0, 0, new Float64Array(0)); }

export function fromRows(rowsArr: number[][]): Mat {
  const rows = rowsArr.length;
  const cols = rows ? rowsArr[0].length : 0;
  const m = zeros(rows, cols);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) m.data[r + c * rows] = rowsArr[r][c];
  return m;
}
export function rowVec(arr: number[]): Mat {
  const m = zeros(1, arr.length);
  m.data.set(arr);
  return m;
}
export function colVec(arr: number[]): Mat {
  const m = zeros(arr.length, 1);
  m.data.set(arr);
  return m;
}
export function str(s: string): Mat {
  const m = zeros(s.length ? 1 : 0, s.length);
  for (let i = 0; i < s.length; i++) m.data[i] = s.charCodeAt(i);
  m.isChar = true;
  return m;
}

// ── Inspectors ─────────────────────────────────────────────────────────
export function isMat(v: Value): v is Mat { return v.kind === 'num'; }
export function isHandle(v: Value): v is Handle { return v.kind === 'handle'; }
export function isCell(v: Value): v is Cell { return v.kind === 'cell'; }
export function isStruct(v: Value): v is StructV { return v.kind === 'struct'; }
export function isSparse(v: Value): v is Sparse { return v.kind === 'sparse'; }
export function makeCell(rows: number, cols: number, items: Value[]): Cell { return { kind: 'cell', rows, cols, items }; }
/** Dimensions of any value. */
export function dimsOf(v: Value): [number, number] {
  if (v.kind === 'num' || v.kind === 'cell' || v.kind === 'struct' || v.kind === 'sparse') return [v.rows, v.cols];
  return [1, 1];
}

// ── Sparse (CSC) constructors / conversions ────────────────────────────
/** Build a CSC matrix from triplets (1-based row/col indices), summing duplicates. */
export function sparseFromTriplets(rows: number, cols: number, ii: number[], jj: number[], vv: number[]): Sparse {
  const acc = new Map<number, number>();
  for (let k = 0; k < ii.length; k++) {
    const i = ii[k] - 1, j = jj[k] - 1; if (i < 0 || i >= rows || j < 0 || j >= cols) throw new MatError('sparse: index out of range');
    const key = j * rows + i; const v = vv.length === 1 ? vv[0] : vv[k];
    acc.set(key, (acc.get(key) ?? 0) + v);
  }
  return sparseFromMap(rows, cols, acc);
}
/** Build CSC from a column-major linear-index → value map (drops exact zeros). */
export function sparseFromMap(rows: number, cols: number, acc: Map<number, number>): Sparse {
  const keys = [...acc.keys()].filter((k) => acc.get(k) !== 0).sort((a, b) => a - b);
  const colptr = new Int32Array(cols + 1);
  const rowind = new Int32Array(keys.length); const values = new Float64Array(keys.length);
  let p = 0, col = 0;
  for (const key of keys) {
    const j = Math.floor(key / rows), i = key - j * rows;
    while (col < j) colptr[++col] = p;
    rowind[p] = i; values[p] = acc.get(key)!; p++;
  }
  while (col < cols) colptr[++col] = p;
  return { kind: 'sparse', rows, cols, colptr, rowind, values };
}
export function denseToSparse(A: Mat): Sparse {
  const acc = new Map<number, number>();
  for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const v = A.data[r + c * A.rows]; if (v !== 0) acc.set(c * A.rows + r, v); }
  return sparseFromMap(A.rows, A.cols, acc);
}
export function sparseToDense(S: Sparse): Mat {
  const out = zeros(S.rows, S.cols);
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) out.data[S.rowind[p] + j * S.rows] = S.values[p];
  return out;
}
export function numelOf(v: Value): number { const [r, c] = dimsOf(v); return r * c; }
export function numel(m: Mat): number { return m.rows * m.cols; }
export function isScalar(m: Mat): boolean { return m.rows === 1 && m.cols === 1; }
export function isEmpty(m: Mat): boolean { return m.rows === 0 || m.cols === 0; }

export function asScalar(v: Value, ctx = 'value'): number {
  if (!isMat(v)) throw new MatError(`${ctx}: expected a number, got a function handle`);
  if (numel(v) !== 1) throw new MatError(`${ctx}: expected a scalar (${v.rows}×${v.cols} given)`);
  return v.data[0];
}
export function asString(v: Value): string {
  if (!isMat(v) || !v.isChar) {
    if (isMat(v) && numel(v) === 0) return '';
    throw new MatError('expected a string');
  }
  let s = '';
  for (let c = 0; c < v.cols; c++) s += String.fromCharCode(v.data[c]);
  return s;
}
/** Truthiness: nonempty and all elements nonzero (MATLAB `if` semantics). */
export function truthy(v: Value): boolean {
  if (v.kind === 'cell' || v.kind === 'struct') return numelOf(v) > 0;
  if (v.kind === 'sparse') { for (const x of v.values) if (x === 0) return false; return v.values.length === v.rows * v.cols && v.rows > 0; }
  if (!isMat(v)) return true;
  if (numel(v) === 0) return false;
  for (let i = 0; i < v.data.length; i++) if (v.data[i] === 0 && (!v.idata || v.idata[i] === 0)) return false;
  return true;
}

// ── Element-wise ops with implicit expansion ───────────────────────────
function broadcastDims(a: Mat, b: Mat): [number, number] {
  const rows = a.rows === b.rows ? a.rows : (a.rows === 1 ? b.rows : b.rows === 1 ? a.rows : -1);
  const cols = a.cols === b.cols ? a.cols : (a.cols === 1 ? b.cols : b.cols === 1 ? a.cols : -1);
  if (rows < 0 || cols < 0) throw new MatError(`matrix dimensions must agree (${a.rows}×${a.cols} vs ${b.rows}×${b.cols})`);
  return [rows, cols];
}
export function elementwise(a: Mat, b: Mat, f: (x: number, y: number) => number): Mat {
  const [rows, cols] = broadcastDims(a, b);
  const out = zeros(rows, cols);
  for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
    const av = a.data[(a.rows === 1 ? 0 : r) + (a.cols === 1 ? 0 : c) * a.rows];
    const bv = b.data[(b.rows === 1 ? 0 : r) + (b.cols === 1 ? 0 : c) * b.rows];
    out.data[r + c * rows] = f(av, bv);
  }
  return out;
}
export function map(a: Mat, f: (x: number) => number): Mat {
  const out = zeros(a.rows, a.cols);
  for (let i = 0; i < a.data.length; i++) out.data[i] = f(a.data[i]);
  return out;
}

export function matmul(a: Mat, b: Mat): Mat {
  if (isScalar(a) || isScalar(b)) return elementwise(a, b, (x, y) => x * y);
  if (a.cols !== b.rows) throw new MatError(`inner matrix dimensions must agree (${a.rows}×${a.cols} * ${b.rows}×${b.cols})`);
  const out = zeros(a.rows, b.cols);
  for (let c = 0; c < b.cols; c++)
    for (let k = 0; k < a.cols; k++) {
      const bk = b.data[k + c * b.rows];
      if (bk === 0) continue;
      for (let r = 0; r < a.rows; r++) out.data[r + c * out.rows] += a.data[r + k * a.rows] * bk;
    }
  return out;
}

export function transpose(a: Mat): Mat {
  const out = zeros(a.cols, a.rows);
  for (let c = 0; c < a.cols; c++) for (let r = 0; r < a.rows; r++) out.data[c + r * out.rows] = a.data[r + c * a.rows];
  if (a.idata) { const im = new Float64Array(a.cols * a.rows); for (let c = 0; c < a.cols; c++) for (let r = 0; r < a.rows; r++) im[c + r * out.rows] = a.idata[r + c * a.rows]; out.idata = im; }
  out.isChar = a.isChar;
  return out;
}

/** Conjugate transpose (`'`): transpose with the imaginary part negated. */
export function ctranspose(a: Mat): Mat {
  const out = transpose(a);
  if (out.idata) for (let i = 0; i < out.idata.length; i++) out.idata[i] = -out.idata[i];
  return out;
}

// ── Concatenation ──────────────────────────────────────────────────────
export function horzcat(parts: Mat[]): Mat {
  const nonEmpty = parts.filter((p) => numel(p) > 0);
  if (!nonEmpty.length) return empty();
  const rows = nonEmpty[0].rows;
  let cols = 0;
  for (const p of nonEmpty) { if (p.rows !== rows) throw new MatError('horizontal dimensions mismatch'); cols += p.cols; }
  const out = zeros(rows, cols);
  const anyImag = nonEmpty.some((p) => p.idata);
  const im = anyImag ? new Float64Array(rows * cols) : null;
  let co = 0;
  let allChar = true, allBool = true;
  for (const p of nonEmpty) {
    out.data.set(p.data.subarray(0, rows * p.cols), co * rows);
    if (im && p.idata) im.set(p.idata.subarray(0, rows * p.cols), co * rows);
    co += p.cols; if (!p.isChar) allChar = false; if (!p.isBool) allBool = false;
  }
  if (im) out.idata = im;
  if (allChar) out.isChar = true;
  if (allBool && !allChar && !im) out.isBool = true;
  return out;
}
export function vertcat(parts: Mat[]): Mat {
  const nonEmpty = parts.filter((p) => numel(p) > 0);
  if (!nonEmpty.length) return empty();
  const cols = nonEmpty[0].cols;
  let rows = 0;
  for (const p of nonEmpty) { if (p.cols !== cols) throw new MatError('vertical dimensions mismatch'); rows += p.rows; }
  const out = zeros(rows, cols);
  const anyImag = nonEmpty.some((p) => p.idata);
  const im = anyImag ? new Float64Array(rows * cols) : null;
  let ro = 0;
  let allBool = true;
  for (const p of nonEmpty) {
    for (let c = 0; c < cols; c++) for (let r = 0; r < p.rows; r++) { out.data[(ro + r) + c * rows] = p.data[r + c * p.rows]; if (im) im[(ro + r) + c * rows] = p.idata ? p.idata[r + c * p.rows] : 0; }
    ro += p.rows;
    if (!p.isBool) allBool = false;
  }
  if (im) out.idata = im; else if (allBool) out.isBool = true;
  return out;
}

// ── Ranges ─────────────────────────────────────────────────────────────
export function range(from: number, step: number, to: number): Mat {
  if (step === 0) return empty();
  const out: number[] = [];
  const eps = Math.abs(step) * 1e-10;
  if (step > 0) for (let v = from; v <= to + eps; v += step) out.push(v);
  else for (let v = from; v >= to - eps; v += step) out.push(v);
  return rowVec(out);
}

// ── Indexing ───────────────────────────────────────────────────────────
export type Sub = number[] | 'colon';   // 1-based index lists, or whole dimension

function subToList(s: Sub, dim: number): number[] {
  if (s === 'colon') { const a = []; for (let i = 1; i <= dim; i++) a.push(i); return a; }
  return s;
}

export function indexGet(m: Mat, subs: Sub[]): Mat {
  if (subs.length === 1) {
    const s = subs[0];
    if (s === 'colon') { const out = zeros(numel(m), 1); out.data.set(m.data); if (m.idata) out.idata = Float64Array.from(m.idata); out.isChar = m.isChar; return out; }
    // linear indexing: result takes the index vector's own shape
    const out = zeros(1, s.length); const im = m.idata ? new Float64Array(s.length) : null;
    for (let i = 0; i < s.length; i++) {
      const li = s[i] - 1;
      if (li < 0 || li >= numel(m)) throw new MatError(`index ${s[i]} out of bounds (numel=${numel(m)})`);
      out.data[i] = m.data[li]; if (im) im[i] = m.idata![li];
    }
    if (im) out.idata = im;
    out.isChar = m.isChar;
    // if both target and index are columns, keep a column
    if (m.cols === 1 && m.rows > 1) return transpose(out);
    return out;
  }
  if (subs.length === 2) {
    const rs = subToList(subs[0], m.rows);
    const cs = subToList(subs[1], m.cols);
    const out = zeros(rs.length, cs.length); const im = m.idata ? new Float64Array(rs.length * cs.length) : null;
    for (let cc = 0; cc < cs.length; cc++) for (let rr = 0; rr < rs.length; rr++) {
      const r = rs[rr] - 1, c = cs[cc] - 1;
      if (r < 0 || r >= m.rows || c < 0 || c >= m.cols) throw new MatError(`index (${rs[rr]},${cs[cc]}) out of bounds (${m.rows}×${m.cols})`);
      out.data[rr + cc * out.rows] = m.data[r + c * m.rows]; if (im) im[rr + cc * out.rows] = m.idata![r + c * m.rows];
    }
    if (im) out.idata = im;
    out.isChar = m.isChar;
    return out;
  }
  throw new MatError('only 1-D and 2-D indexing are supported');
}

/** Assign into `m` (growing as needed); returns the (possibly new) matrix. */
export function indexSet(m: Mat, subs: Sub[], rhs: Mat): Mat {
  if (subs.length === 1) {
    const s = subs[0];
    const idx = s === 'colon' ? subToList('colon', numel(m)) : s;
    const need = idx.length ? Math.max(...idx) : 0;
    if (need > numel(m)) {
      // grow a vector (default to row when target is empty/row)
      if (m.rows <= 1) m = growTo(m, 1, Math.max(m.cols, need));
      else if (m.cols === 1) m = growTo(m, Math.max(m.rows, need), 1);
      else throw new MatError('cannot grow a matrix by linear index');
    }
    if (rhs.idata && !m.idata) m.idata = new Float64Array(m.data.length);
    const scalarR = rhs.data.length === 1;
    for (let i = 0; i < idx.length; i++) {
      const li = idx[i] - 1;
      m.data[li] = scalarR ? rhs.data[0] : rhs.data[i];
      if (m.idata) m.idata[li] = rhs.idata ? (scalarR ? rhs.idata[0] : rhs.idata[i]) : 0;
    }
    if (rhs.isChar && (numel(m) === idx.length)) m.isChar = true;
    return m;
  }
  if (subs.length === 2) {
    const rsRaw = subs[0], csRaw = subs[1];
    const maxR = rsRaw === 'colon' ? m.rows : (rsRaw.length ? Math.max(...rsRaw) : 0);
    const maxC = csRaw === 'colon' ? m.cols : (csRaw.length ? Math.max(...csRaw) : 0);
    if (maxR > m.rows || maxC > m.cols) m = growTo(m, Math.max(m.rows, maxR), Math.max(m.cols, maxC));
    if (rhs.idata && !m.idata) m.idata = new Float64Array(m.data.length);
    const rs = subToList(rsRaw, m.rows);
    const cs = subToList(csRaw, m.cols);
    const scalarRhs = rhs.data.length === 1;
    for (let cc = 0; cc < cs.length; cc++) for (let rr = 0; rr < rs.length; rr++) {
      const si = rr + cc * rhs.rows;
      m.data[(rs[rr] - 1) + (cs[cc] - 1) * m.rows] = scalarRhs ? rhs.data[0] : rhs.data[si];
      if (m.idata) m.idata[(rs[rr] - 1) + (cs[cc] - 1) * m.rows] = rhs.idata ? (scalarRhs ? rhs.idata[0] : rhs.idata[si]) : 0;
    }
    return m;
  }
  throw new MatError('only 1-D and 2-D indexing are supported');
}

/** Null assignment `A(...) = []` — delete the indexed rows/columns/elements. */
export function indexDelete(m: Mat, subs: Sub[]): Mat {
  if (subs.length === 1) {
    const s = subs[0];
    if (s === 'colon') return empty();
    const drop = new Set(s.map((x) => x - 1));
    const keep: number[] = [];
    for (let i = 0; i < numel(m); i++) if (!drop.has(i)) keep.push(m.data[i]);
    const out = m.cols === 1 && m.rows !== 1 ? colVec(keep) : rowVec(keep);
    out.isChar = m.isChar;
    return out;
  }
  if (subs.length === 2) {
    const [rs, cs] = subs;
    if (rs === 'colon' && cs === 'colon') return empty();
    if (rs === 'colon' && cs !== 'colon') {
      const drop = new Set(cs.map((x) => x - 1));
      const cols: number[] = [];
      for (let c = 0; c < m.cols; c++) if (!drop.has(c)) cols.push(c);
      const out = zeros(m.rows, cols.length);
      cols.forEach((c, ci) => { for (let r = 0; r < m.rows; r++) out.data[r + ci * m.rows] = m.data[r + c * m.rows]; });
      out.isChar = m.isChar;
      return out;
    }
    if (cs === 'colon' && rs !== 'colon') {
      const drop = new Set(rs.map((x) => x - 1));
      const rows: number[] = [];
      for (let r = 0; r < m.rows; r++) if (!drop.has(r)) rows.push(r);
      const out = zeros(rows.length, m.cols);
      rows.forEach((r, ri) => { for (let c = 0; c < m.cols; c++) out.data[ri + c * out.rows] = m.data[r + c * m.rows]; });
      out.isChar = m.isChar;
      return out;
    }
    throw new MatError('a null assignment must have a colon (:) in one subscript');
  }
  throw new MatError('null assignment supports 1-D and 2-D indexing only');
}

function growTo(m: Mat, rows: number, cols: number): Mat {
  if (rows === m.rows && cols === m.cols) return m;
  const out = zeros(rows, cols);
  for (let c = 0; c < m.cols; c++) for (let r = 0; r < m.rows; r++) out.data[r + c * rows] = m.data[r + c * m.rows];
  if (m.idata) { out.idata = new Float64Array(rows * cols); for (let c = 0; c < m.cols; c++) for (let r = 0; r < m.rows; r++) out.idata[r + c * rows] = m.idata[r + c * m.rows]; }
  out.isChar = m.isChar;
  return out;
}

/** Flatten a matrix to a number[] in column-major order (real part). */
export function toArray(m: Mat): number[] { return Array.from(m.data); }

// ── Complex numbers ────────────────────────────────────────────────────
export function isComplex(m: Mat): boolean { return !!m.idata; }
export function cscalar(re: number, im: number): Mat { return { kind: 'num', rows: 1, cols: 1, data: Float64Array.of(re), idata: Float64Array.of(im) }; }
const imAt = (m: Mat, i: number): number => (m.idata ? m.idata[i] : 0);

/** Build a complex matrix, dropping the imaginary store if every element is real. */
export function finishComplex(rows: number, cols: number, re: Float64Array, im: Float64Array): Mat {
  let anyImag = false; for (let i = 0; i < im.length; i++) if (im[i] !== 0) { anyImag = true; break; }
  return anyImag ? { kind: 'num', rows, cols, data: re, idata: im } : { kind: 'num', rows, cols, data: re };
}
const anyC = (a: Mat, b: Mat): boolean => !!a.idata || !!b.idata;

/** Complex element-wise op with implicit expansion. f(ar,ai,br,bi) → [re,im]. */
function cElementwise(a: Mat, b: Mat, f: (ar: number, ai: number, br: number, bi: number) => [number, number]): Mat {
  const rows = a.rows === b.rows ? a.rows : (a.rows === 1 ? b.rows : b.rows === 1 ? a.rows : -1);
  const cols = a.cols === b.cols ? a.cols : (a.cols === 1 ? b.cols : b.cols === 1 ? a.cols : -1);
  if (rows < 0 || cols < 0) throw new MatError(`matrix dimensions must agree (${a.rows}×${a.cols} vs ${b.rows}×${b.cols})`);
  const re = new Float64Array(rows * cols), im = new Float64Array(rows * cols);
  for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
    const ai0 = (a.rows === 1 ? 0 : r) + (a.cols === 1 ? 0 : c) * a.rows;
    const bi0 = (b.rows === 1 ? 0 : r) + (b.cols === 1 ? 0 : c) * b.rows;
    const [zr, zi] = f(a.data[ai0], imAt(a, ai0), b.data[bi0], imAt(b, bi0));
    re[r + c * rows] = zr; im[r + c * rows] = zi;
  }
  return finishComplex(rows, cols, re, im);
}

// complex scalar helpers
export const cmul = (ar: number, ai: number, br: number, bi: number): [number, number] => [ar * br - ai * bi, ar * bi + ai * br];
export const cdiv = (ar: number, ai: number, br: number, bi: number): [number, number] => { const d = br * br + bi * bi; return [(ar * br + ai * bi) / d, (ai * br - ar * bi) / d]; };
export const cexp = (ar: number, ai: number): [number, number] => { const e = Math.exp(ar); return [e * Math.cos(ai), e * Math.sin(ai)]; };
export const clog = (ar: number, ai: number): [number, number] => [Math.log(Math.hypot(ar, ai)), Math.atan2(ai, ar)];
export const cpow = (ar: number, ai: number, br: number, bi: number): [number, number] => {
  if (ar === 0 && ai === 0) return [br > 0 || (br === 0 && bi === 0) ? (br === 0 && bi === 0 ? 1 : 0) : NaN, 0];
  const [lr, li] = clog(ar, ai); const [mr, mi] = cmul(lr, li, br, bi); return cexp(mr, mi);
};
export const csqrt = (ar: number, ai: number): [number, number] => { const m = Math.hypot(ar, ai); const re = Math.sqrt((m + ar) / 2); const im = Math.sign(ai || 1) * Math.sqrt((m - ar) / 2); return [re, im]; };

// real fast-path wrappers used by the evaluator (stay real when both operands are real)
export const ewAdd = (a: Mat, b: Mat): Mat => anyC(a, b) ? cElementwise(a, b, (ar, ai, br, bi) => [ar + br, ai + bi]) : elementwise(a, b, (x, y) => x + y);
export const ewSub = (a: Mat, b: Mat): Mat => anyC(a, b) ? cElementwise(a, b, (ar, ai, br, bi) => [ar - br, ai - bi]) : elementwise(a, b, (x, y) => x - y);
export const ewMul = (a: Mat, b: Mat): Mat => anyC(a, b) ? cElementwise(a, b, cmul) : elementwise(a, b, (x, y) => x * y);
export const ewRDiv = (a: Mat, b: Mat): Mat => anyC(a, b) ? cElementwise(a, b, cdiv) : elementwise(a, b, (x, y) => x / y);
export const ewLDiv = (a: Mat, b: Mat): Mat => anyC(a, b) ? cElementwise(a, b, (ar, ai, br, bi) => cdiv(br, bi, ar, ai)) : elementwise(a, b, (x, y) => y / x);
export const ewPow = (a: Mat, b: Mat): Mat => {
  // complex if either operand complex, or a negative real raised to a non-integer power
  let needC = anyC(a, b);
  if (!needC) for (let i = 0; i < a.data.length; i++) { const e = b.data[b.data.length === 1 ? 0 : i]; if (a.data[i] < 0 && !Number.isInteger(e)) { needC = true; break; } }
  return needC ? cElementwise(a, b, cpow) : elementwise(a, b, Math.pow);
};

/** Complex-aware equality (`==` / `~=`); returns a logical matrix. */
export function ewEq(a: Mat, b: Mat, want: boolean): Mat {
  const r = anyC(a, b)
    ? cElementwise(a, b, (ar, ai, br, bi) => { const eq = ar === br && ai === bi; return [(want ? eq : !eq) ? 1 : 0, 0]; })
    : elementwise(a, b, (x, y) => ((want ? x === y : x !== y) ? 1 : 0));
  return { kind: 'num', rows: r.rows, cols: r.cols, data: r.data, isBool: true };
}

export function cmatmul(a: Mat, b: Mat): Mat {
  if (!anyC(a, b)) return matmul(a, b);
  if (isScalar(a) || isScalar(b)) return ewMul(a, b);
  if (a.cols !== b.rows) throw new MatError(`inner matrix dimensions must agree (${a.rows}×${a.cols} * ${b.rows}×${b.cols})`);
  const re = new Float64Array(a.rows * b.cols), im = new Float64Array(a.rows * b.cols);
  for (let c = 0; c < b.cols; c++) for (let k = 0; k < a.cols; k++) {
    const br = b.data[k + c * b.rows], bi = imAt(b, k + c * b.rows);
    for (let r = 0; r < a.rows; r++) { const ar = a.data[r + k * a.rows], ai = imAt(a, r + k * a.rows); re[r + c * a.rows] += ar * br - ai * bi; im[r + c * a.rows] += ar * bi + ai * br; }
  }
  return finishComplex(a.rows, b.cols, re, im);
}

/** Element-wise unary complex map. f(re,im) → [re,im]. */
export function cmap(a: Mat, f: (re: number, im: number) => [number, number]): Mat {
  const re = new Float64Array(a.data.length), im = new Float64Array(a.data.length);
  for (let i = 0; i < a.data.length; i++) { const [zr, zi] = f(a.data[i], imAt(a, i)); re[i] = zr; im[i] = zi; }
  return finishComplex(a.rows, a.cols, re, im);
}
/** Real-valued unary map over a complex array (e.g. abs, angle). */
export function cmapReal(a: Mat, f: (re: number, im: number) => number): Mat {
  const out = zeros(a.rows, a.cols);
  for (let i = 0; i < a.data.length; i++) out.data[i] = f(a.data[i], imAt(a, i));
  return out;
}
export function conj(a: Mat): Mat { if (!a.idata) return a; const im = new Float64Array(a.idata.length); for (let i = 0; i < im.length; i++) im[i] = -a.idata[i]; return { kind: 'num', rows: a.rows, cols: a.cols, data: a.data, idata: im }; }
export function realPart(a: Mat): Mat { return mat(a.rows, a.cols, Float64Array.from(a.data)); }
export function imagPart(a: Mat): Mat { const o = zeros(a.rows, a.cols); if (a.idata) o.data.set(a.idata); return o; }
