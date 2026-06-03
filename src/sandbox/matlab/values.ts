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
  data: Float64Array;   // column-major: element (r,c) at data[r + c*rows]
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
export type Value = Mat | Handle | GObj;

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
  if (!isMat(v)) return true;
  if (numel(v) === 0) return false;
  for (let i = 0; i < v.data.length; i++) if (v.data[i] === 0) return false;
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
  out.isChar = a.isChar;
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
  let co = 0;
  let allChar = true, allBool = true;
  for (const p of nonEmpty) { out.data.set(p.data.subarray(0, rows * p.cols), co * rows); co += p.cols; if (!p.isChar) allChar = false; if (!p.isBool) allBool = false; }
  if (allChar) out.isChar = true;
  if (allBool && !allChar) out.isBool = true;
  return out;
}
export function vertcat(parts: Mat[]): Mat {
  const nonEmpty = parts.filter((p) => numel(p) > 0);
  if (!nonEmpty.length) return empty();
  const cols = nonEmpty[0].cols;
  let rows = 0;
  for (const p of nonEmpty) { if (p.cols !== cols) throw new MatError('vertical dimensions mismatch'); rows += p.rows; }
  const out = zeros(rows, cols);
  let ro = 0;
  let allBool = true;
  for (const p of nonEmpty) {
    for (let c = 0; c < cols; c++) for (let r = 0; r < p.rows; r++) out.data[(ro + r) + c * rows] = p.data[r + c * p.rows];
    ro += p.rows;
    if (!p.isBool) allBool = false;
  }
  if (allBool) out.isBool = true;
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
    if (s === 'colon') { const out = zeros(numel(m), 1); out.data.set(m.data); out.isChar = m.isChar; return out; }
    // linear indexing: result takes the index vector's own shape
    const out = zeros(1, s.length);
    for (let i = 0; i < s.length; i++) {
      const li = s[i] - 1;
      if (li < 0 || li >= numel(m)) throw new MatError(`index ${s[i]} out of bounds (numel=${numel(m)})`);
      out.data[i] = m.data[li];
    }
    out.isChar = m.isChar;
    // if both target and index are columns, keep a column
    if (m.cols === 1 && m.rows > 1) return transpose(out);
    return out;
  }
  if (subs.length === 2) {
    const rs = subToList(subs[0], m.rows);
    const cs = subToList(subs[1], m.cols);
    const out = zeros(rs.length, cs.length);
    for (let cc = 0; cc < cs.length; cc++) for (let rr = 0; rr < rs.length; rr++) {
      const r = rs[rr] - 1, c = cs[cc] - 1;
      if (r < 0 || r >= m.rows || c < 0 || c >= m.cols) throw new MatError(`index (${rs[rr]},${cs[cc]}) out of bounds (${m.rows}×${m.cols})`);
      out.data[rr + cc * out.rows] = m.data[r + c * m.rows];
    }
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
    for (let i = 0; i < idx.length; i++) {
      const li = idx[i] - 1;
      m.data[li] = rhs.data.length === 1 ? rhs.data[0] : rhs.data[i];
    }
    if (rhs.isChar && (numel(m) === idx.length)) m.isChar = true;
    return m;
  }
  if (subs.length === 2) {
    const rsRaw = subs[0], csRaw = subs[1];
    const maxR = rsRaw === 'colon' ? m.rows : (rsRaw.length ? Math.max(...rsRaw) : 0);
    const maxC = csRaw === 'colon' ? m.cols : (csRaw.length ? Math.max(...csRaw) : 0);
    if (maxR > m.rows || maxC > m.cols) m = growTo(m, Math.max(m.rows, maxR), Math.max(m.cols, maxC));
    const rs = subToList(rsRaw, m.rows);
    const cs = subToList(csRaw, m.cols);
    const scalarRhs = rhs.data.length === 1;
    for (let cc = 0; cc < cs.length; cc++) for (let rr = 0; rr < rs.length; rr++) {
      const v = scalarRhs ? rhs.data[0] : rhs.data[rr + cc * rhs.rows];
      m.data[(rs[rr] - 1) + (cs[cc] - 1) * m.rows] = v;
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
  out.isChar = m.isChar;
  return out;
}

/** Flatten a matrix to a number[] in column-major order. */
export function toArray(m: Mat): number[] { return Array.from(m.data); }
