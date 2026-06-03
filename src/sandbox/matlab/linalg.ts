/** Dense linear algebra: det, inv, `\` (square solve + least squares), norm, diag, eye. */
import { type Mat, MatError, mat, zeros, scalar, isScalar, numel, transpose, matmul } from './values';

export function eye(n: number, m = n): Mat {
  const out = zeros(n, m);
  const d = Math.min(n, m);
  for (let i = 0; i < d; i++) out.data[i + i * n] = 1;
  return out;
}

/** LU with partial pivoting. Returns LU packed, pivot rows, and the sign of det. */
function lu(a: Mat): { lu: Float64Array; piv: number[]; sign: number; n: number } {
  const n = a.rows;
  if (a.cols !== n) throw new MatError('matrix must be square');
  const A = Float64Array.from(a.data); // column-major copy
  const at = (r: number, c: number) => A[r + c * n];
  const set = (r: number, c: number, v: number) => { A[r + c * n] = v; };
  const piv = Array.from({ length: n }, (_, i) => i);
  let sign = 1;
  for (let k = 0; k < n; k++) {
    let p = k, max = Math.abs(at(k, k));
    for (let r = k + 1; r < n; r++) { const v = Math.abs(at(r, k)); if (v > max) { max = v; p = r; } }
    if (p !== k) {
      for (let c = 0; c < n; c++) { const t = at(k, c); set(k, c, at(p, c)); set(p, c, t); }
      const tp = piv[k]; piv[k] = piv[p]; piv[p] = tp;
      sign = -sign;
    }
    const pivot = at(k, k);
    if (pivot === 0) continue; // singular; det → 0
    for (let r = k + 1; r < n; r++) {
      const f = at(r, k) / pivot;
      set(r, k, f);
      for (let c = k + 1; c < n; c++) set(r, c, at(r, c) - f * at(k, c));
    }
  }
  return { lu: A, piv, sign, n };
}

export function det(a: Mat): number {
  if (isScalar(a)) return a.data[0];
  const { lu: A, sign, n } = lu(a);
  let d = sign;
  for (let i = 0; i < n; i++) d *= A[i + i * n];
  return d;
}

/** Solve a square system A x = B (B may have multiple columns) using LU. */
function luSolve(a: Mat, b: Mat): Mat {
  const { lu: A, piv, n } = lu(a);
  const at = (r: number, c: number) => A[r + c * n];
  const m = b.cols;
  const X = zeros(n, m);
  for (let col = 0; col < m; col++) {
    // permuted rhs
    const y = new Float64Array(n);
    for (let r = 0; r < n; r++) y[r] = b.data[piv[r] + col * b.rows];
    // forward (unit lower)
    for (let r = 0; r < n; r++) { let s = y[r]; for (let c = 0; c < r; c++) s -= at(r, c) * y[c]; y[r] = s; }
    // back (upper)
    for (let r = n - 1; r >= 0; r--) {
      let s = y[r];
      for (let c = r + 1; c < n; c++) s -= at(r, c) * y[c];
      const d = at(r, r);
      y[r] = d === 0 ? (s === 0 ? 0 : NaN) : s / d;
    }
    for (let r = 0; r < n; r++) X.data[r + col * n] = y[r];
  }
  return X;
}

export function inv(a: Mat): Mat {
  if (isScalar(a)) return scalar(1 / a.data[0]);
  if (a.rows !== a.cols) throw new MatError('inverse requires a square matrix');
  return luSolve(a, eye(a.rows));
}

/** A \ B (mldivide): square → LU solve; non-square → least squares (normal equations). */
export function mldivide(a: Mat, b: Mat): Mat {
  if (isScalar(a)) return mat(b.rows, b.cols, b.data.map((v) => v / a.data[0]) as Float64Array);
  if (a.rows !== b.rows) throw new MatError(`\\: row dimensions must agree (${a.rows} vs ${b.rows})`);
  if (a.rows === a.cols) return luSolve(a, b);
  // Overdetermined / underdetermined → normal equations (AᵀA) x = Aᵀ b.
  const At = transpose(a);
  return luSolve(matmul(At, a), matmul(At, b));
}

export function diag(a: Mat): Mat {
  if (a.rows === 1 || a.cols === 1) {
    // vector → diagonal matrix
    const n = numel(a);
    const out = zeros(n, n);
    for (let i = 0; i < n; i++) out.data[i + i * n] = a.data[i];
    return out;
  }
  const n = Math.min(a.rows, a.cols);
  const out = zeros(n, 1);
  for (let i = 0; i < n; i++) out.data[i] = a.data[i + i * a.rows];
  return out;
}

/** norm(v) — 2-norm for vectors, Frobenius for matrices; norm(v,p) for p∈{1,2,inf}. */
export function norm(a: Mat, p: number | 'inf' | 'fro' = 2): number {
  const isVec = a.rows === 1 || a.cols === 1;
  if (isVec) {
    if (p === 1) return a.data.reduce((s, x) => s + Math.abs(x), 0);
    if (p === 'inf') return a.data.reduce((s, x) => Math.max(s, Math.abs(x)), 0);
    return Math.hypot(...Array.from(a.data));
  }
  // matrix: Frobenius for 'fro', else fall back to Frobenius (sufficient for the corpora)
  return Math.hypot(...Array.from(a.data));
}
