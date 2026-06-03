/** Dense linear algebra: det, inv, `\` (square solve + least squares), norm, diag, eye. */
import { type Mat, MatError, mat, zeros, scalar, isScalar, numel, transpose, matmul, isComplex, cmul, cdiv, finishComplex, ctranspose, cmatmul, ewRDiv } from './values';

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
  if (isComplex(a)) { if (a.rows !== a.cols) throw new MatError('inverse requires a square matrix'); return cLuSolve(a, eye(a.rows)); }
  if (isScalar(a)) return scalar(1 / a.data[0]);
  if (a.rows !== a.cols) throw new MatError('inverse requires a square matrix');
  return luSolve(a, eye(a.rows));
}

/** A \ B (mldivide): square → LU solve; non-square → least squares (normal equations). */
export function mldivide(a: Mat, b: Mat): Mat {
  if (isComplex(a) || isComplex(b)) {
    if (isScalar(a)) return ewRDiv(b, a);
    if (a.rows !== b.rows) throw new MatError(`\\: row dimensions must agree (${a.rows} vs ${b.rows})`);
    if (a.rows === a.cols) return cLuSolve(a, b);
    const At = ctranspose(a);
    return cLuSolve(cmatmul(At, a), cmatmul(At, b));
  }
  if (isScalar(a)) return mat(b.rows, b.cols, b.data.map((v) => v / a.data[0]) as Float64Array);
  if (a.rows !== b.rows) throw new MatError(`\\: row dimensions must agree (${a.rows} vs ${b.rows})`);
  if (a.rows === a.cols) return luSolve(a, b);
  // Overdetermined / underdetermined → normal equations (AᵀA) x = Aᵀ b.
  const At = transpose(a);
  return luSolve(matmul(At, a), matmul(At, b));
}

// ── Complex LU (partial pivoting), solve, determinant ──────────────────
function cFactor(a: Mat): { re: Float64Array; im: Float64Array; piv: number[]; sign: number; n: number } {
  const n = a.rows; if (a.cols !== n) throw new MatError('matrix must be square');
  const re = Float64Array.from(a.data); const im = a.idata ? Float64Array.from(a.idata) : new Float64Array(n * n);
  const piv = Array.from({ length: n }, (_, i) => i); let sign = 1;
  const mag = (r: number, c: number) => Math.hypot(re[r + c * n], im[r + c * n]);
  for (let k = 0; k < n; k++) {
    let p = k, mx = mag(k, k); for (let r = k + 1; r < n; r++) { const v = mag(r, k); if (v > mx) { mx = v; p = r; } }
    if (p !== k) { for (let c = 0; c < n; c++) { let t = re[k + c * n]; re[k + c * n] = re[p + c * n]; re[p + c * n] = t; t = im[k + c * n]; im[k + c * n] = im[p + c * n]; im[p + c * n] = t; } const tp = piv[k]; piv[k] = piv[p]; piv[p] = tp; sign = -sign; }
    const dr = re[k + k * n], di = im[k + k * n];
    if (dr === 0 && di === 0) continue;
    for (let r = k + 1; r < n; r++) {
      const [fr, fi] = cdiv(re[r + k * n], im[r + k * n], dr, di);
      re[r + k * n] = fr; im[r + k * n] = fi;
      for (let c = k + 1; c < n; c++) { const [pr, pi] = cmul(fr, fi, re[k + c * n], im[k + c * n]); re[r + c * n] -= pr; im[r + c * n] -= pi; }
    }
  }
  return { re, im, piv, sign, n };
}

export function cLuSolve(a: Mat, b: Mat): Mat {
  const { re, im, piv, n } = cFactor(a);
  const m = b.cols; const Xre = new Float64Array(n * m), Xim = new Float64Array(n * m);
  const bim = (r: number, c: number) => (b.idata ? b.idata[r + c * b.rows] : 0);
  for (let col = 0; col < m; col++) {
    const yr = new Float64Array(n), yi = new Float64Array(n);
    for (let r = 0; r < n; r++) { yr[r] = b.data[piv[r] + col * b.rows]; yi[r] = bim(piv[r], col); }
    for (let r = 0; r < n; r++) { let sr = yr[r], si = yi[r]; for (let c = 0; c < r; c++) { const [pr, pi] = cmul(re[r + c * n], im[r + c * n], yr[c], yi[c]); sr -= pr; si -= pi; } yr[r] = sr; yi[r] = si; }
    for (let r = n - 1; r >= 0; r--) { let sr = yr[r], si = yi[r]; for (let c = r + 1; c < n; c++) { const [pr, pi] = cmul(re[r + c * n], im[r + c * n], yr[c], yi[c]); sr -= pr; si -= pi; } const [zr, zi] = cdiv(sr, si, re[r + r * n], im[r + r * n]); yr[r] = zr; yi[r] = zi; }
    for (let r = 0; r < n; r++) { Xre[r + col * n] = yr[r]; Xim[r + col * n] = yi[r]; }
  }
  return finishComplex(n, m, Xre, Xim);
}

/** Determinant of a complex matrix → [re, im]. */
export function cDet(a: Mat): [number, number] {
  const { re, im, sign, n } = cFactor(a);
  let dr = sign, di = 0;
  for (let k = 0; k < n; k++) { const [zr, zi] = cmul(dr, di, re[k + k * n], im[k + k * n]); dr = zr; di = zi; }
  return [dr, di];
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

/** norm(v) — 2-norm for vectors; matrix norms for p∈{1,2,inf,'fro'}. */
export function norm(a: Mat, p: number | 'inf' | 'fro' = 2): number {
  const isVec = a.rows === 1 || a.cols === 1;
  if (isVec) {
    if (p === 1) return a.data.reduce((s, x) => s + Math.abs(x), 0);
    if (p === 'inf') return a.data.reduce((s, x) => Math.max(s, Math.abs(x)), 0);
    if (p === 'fro' || p === 2) return Math.hypot(...Array.from(a.data));
    // general vector p-norm
    return Math.pow(a.data.reduce((s, x) => s + Math.pow(Math.abs(x), p as number), 0), 1 / (p as number));
  }
  if (p === 'fro') return Math.hypot(...Array.from(a.data));
  if (p === 1) { let m = 0; for (let c = 0; c < a.cols; c++) { let s = 0; for (let r = 0; r < a.rows; r++) s += Math.abs(a.data[r + c * a.rows]); m = Math.max(m, s); } return m; }
  if (p === 'inf') { let m = 0; for (let r = 0; r < a.rows; r++) { let s = 0; for (let c = 0; c < a.cols; c++) s += Math.abs(a.data[r + c * a.rows]); m = Math.max(m, s); } return m; }
  // p === 2 : largest singular value
  return svd(a).s[0] ?? 0;
}

// ── QR (Householder), Cholesky, LU outputs ─────────────────────────────
export function qr(A: Mat): { Q: Mat; R: Mat } {
  const m = A.rows, n = A.cols;
  const R = mat(m, n, Float64Array.from(A.data));
  const Q = eye(m);
  const at = (M: Mat, r: number, c: number) => M.data[r + c * M.rows];
  for (let k = 0; k < Math.min(m - 1, n); k++) {
    let normx = 0; for (let i = k; i < m; i++) normx += at(R, i, k) ** 2; normx = Math.sqrt(normx);
    if (normx === 0) continue;
    const alpha = at(R, k, k) >= 0 ? -normx : normx;
    const v = new Float64Array(m);
    v[k] = at(R, k, k) - alpha;
    for (let i = k + 1; i < m; i++) v[i] = at(R, i, k);
    let vnorm2 = 0; for (let i = k; i < m; i++) vnorm2 += v[i] ** 2;
    if (vnorm2 === 0) continue;
    // R := R - 2 v (vᵀR)/vᵀv
    for (let c = 0; c < n; c++) { let d = 0; for (let i = k; i < m; i++) d += v[i] * at(R, i, c); d = (2 * d) / vnorm2; for (let i = k; i < m; i++) R.data[i + c * m] -= d * v[i]; }
    // Q := Q - 2 (Qv) vᵀ/vᵀv
    for (let r = 0; r < m; r++) { let d = 0; for (let i = k; i < m; i++) d += at(Q, r, i) * v[i]; d = (2 * d) / vnorm2; for (let i = k; i < m; i++) Q.data[r + i * m] -= d * v[i]; }
  }
  return { Q, R };
}

export function chol(A: Mat): Mat {
  const n = A.rows;
  if (A.cols !== n) throw new MatError('chol: matrix must be square');
  const R = zeros(n, n);
  for (let j = 0; j < n; j++) {
    let d = A.data[j + j * n];
    for (let k = 0; k < j; k++) d -= R.data[k + j * n] ** 2;
    if (d <= 0) throw new MatError('chol: matrix must be symmetric positive definite');
    R.data[j + j * n] = Math.sqrt(d);
    for (let i = j + 1; i < n; i++) {
      let s = A.data[j + i * n];
      for (let k = 0; k < j; k++) s -= R.data[k + j * n] * R.data[k + i * n];
      R.data[j + i * n] = s / R.data[j + j * n];
    }
  }
  return R; // upper triangular, RᵀR = A
}

export function luOutputs(A: Mat): { L: Mat; U: Mat; P: Mat } {
  const { lu: packed, piv, n } = lu(A);
  const L = eye(n), U = zeros(n, n), P = zeros(n, n);
  for (let r = 0; r < n; r++) {
    P.data[r + piv[r] * n] = 1;
    for (let c = 0; c < n; c++) {
      const v = packed[r + c * n];
      if (c >= r) U.data[r + c * n] = v; else L.data[r + c * n] = v;
    }
  }
  return { L, U, P }; // P*A = L*U
}

// ── Symmetric eigensolver (cyclic Jacobi) + SVD ────────────────────────
export function jacobiEigSym(A0: Mat): { values: number[]; V: Mat } {
  const n = A0.rows;
  const A = Float64Array.from(A0.data);
  const V = eye(n);
  const at = (r: number, c: number) => A[r + c * n];
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0; for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += at(p, q) ** 2;
    if (off < 1e-30) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      const apq = at(p, q); if (Math.abs(apq) < 1e-300) continue;
      const app = at(p, p), aqq = at(q, q);
      const theta = (aqq - app) / (2 * apq);
      const t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
      const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let i = 0; i < n; i++) {
        const aip = A[i + p * n], aiq = A[i + q * n];
        A[i + p * n] = c * aip - s * aiq; A[i + q * n] = s * aip + c * aiq;
      }
      for (let i = 0; i < n; i++) {
        const api = A[p + i * n], aqi = A[q + i * n];
        A[p + i * n] = c * api - s * aqi; A[q + i * n] = s * api + c * aqi;
      }
      for (let i = 0; i < n; i++) {
        const vip = V.data[i + p * n], viq = V.data[i + q * n];
        V.data[i + p * n] = c * vip - s * viq; V.data[i + q * n] = s * vip + c * viq;
      }
    }
  }
  const values: number[] = []; for (let i = 0; i < n; i++) values.push(A[i + i * n]);
  return { values, V };
}

export function isSymmetric(A: Mat, tol = 1e-10): boolean {
  if (A.rows !== A.cols) return false;
  for (let r = 0; r < A.rows; r++) for (let c = r + 1; c < A.cols; c++) if (Math.abs(A.data[r + c * A.rows] - A.data[c + r * A.rows]) > tol * (1 + Math.abs(A.data[r + c * A.rows]))) return false;
  return true;
}

/** SVD via the symmetric eigendecomposition of AᵀA. Returns descending singular values. */
export function svd(A: Mat): { U: Mat; s: number[]; V: Mat } {
  const m = A.rows, n = A.cols;
  const AtA = matmul(transpose(A), A); // n×n symmetric PSD
  const { values, V } = jacobiEigSym(AtA);
  const order = values.map((v, i) => i).sort((a, b) => values[b] - values[a]);
  const s = order.map((i) => Math.sqrt(Math.max(0, values[i])));
  const Vs = zeros(n, n);
  order.forEach((src, dst) => { for (let r = 0; r < n; r++) Vs.data[r + dst * n] = V.data[r + src * n]; });
  // U columns = A v_i / s_i for s_i > 0
  const U = zeros(m, m);
  const tol = 1e-12 * (s[0] || 1);
  for (let j = 0; j < Math.min(m, n); j++) {
    if (s[j] > tol) for (let r = 0; r < m; r++) { let d = 0; for (let k = 0; k < n; k++) d += A.data[r + k * m] * Vs.data[k + j * n]; U.data[r + j * m] = d / s[j]; }
  }
  return { U, s, V: Vs };
}

export function rankOf(A: Mat, tol?: number): number {
  const { s } = svd(A);
  const t = tol ?? (Math.max(A.rows, A.cols) * (s[0] || 0) * 2.220446049250313e-16);
  return s.filter((x) => x > t).length;
}
export function cond(A: Mat): number { const { s } = svd(A); const mn = s[s.length - 1]; return mn === 0 ? Infinity : s[0] / mn; }
export function pinv(A: Mat): Mat {
  const { U, s, V } = svd(A); const m = A.rows, n = A.cols;
  const tol = Math.max(m, n) * (s[0] || 0) * 2.220446049250313e-16;
  const P = zeros(n, m);
  for (let j = 0; j < Math.min(m, n); j++) if (s[j] > tol) {
    for (let r = 0; r < n; r++) for (let c = 0; c < m; c++) P.data[r + c * n] += (V.data[r + j * n] * U.data[c + j * m]) / s[j];
  }
  return P;
}
/** Orthonormal basis for the range (columns of U for nonzero singular values). */
export function orth(A: Mat): Mat {
  const { U, s } = svd(A); const m = A.rows;
  const tol = Math.max(A.rows, A.cols) * (s[0] || 0) * 2.220446049250313e-16;
  const cols: number[] = []; for (let j = 0; j < Math.min(m, A.cols); j++) if (s[j] > tol) cols.push(j);
  const O = zeros(m, cols.length);
  cols.forEach((j, dst) => { for (let r = 0; r < m; r++) O.data[r + dst * m] = U.data[r + j * m]; });
  return O;
}
/** Orthonormal basis for the null space (V columns for ~zero singular values). */
export function nullspace(A: Mat): Mat {
  const { s, V } = svd(A); const n = A.cols;
  const tol = Math.max(A.rows, A.cols) * (s[0] || 0) * 2.220446049250313e-16;
  const cols: number[] = []; for (let j = 0; j < n; j++) if ((s[j] ?? 0) <= tol) cols.push(j);
  const N = zeros(n, cols.length);
  cols.forEach((j, dst) => { for (let r = 0; r < n; r++) N.data[r + dst * n] = V.data[r + j * n]; });
  return N;
}

/** Reduced row echelon form (Gauss-Jordan, partial pivoting). */
export function rref(A0: Mat): Mat {
  const A = mat(A0.rows, A0.cols, Float64Array.from(A0.data));
  const m = A.rows, n = A.cols; let lead = 0;
  const tol = 1e-10 * (1 + Math.max(...Array.from(A.data).map(Math.abs)));
  for (let r = 0; r < m; r++) {
    if (lead >= n) break;
    let i = r; while (Math.abs(A.data[i + lead * m]) < tol) { i++; if (i === m) { i = r; lead++; if (lead === n) return A; } }
    for (let c = 0; c < n; c++) { const t = A.data[r + c * m]; A.data[r + c * m] = A.data[i + c * m]; A.data[i + c * m] = t; }
    const piv = A.data[r + lead * m];
    for (let c = 0; c < n; c++) A.data[r + c * m] /= piv;
    for (let k = 0; k < m; k++) if (k !== r) { const f = A.data[k + lead * m]; for (let c = 0; c < n; c++) A.data[k + c * m] -= f * A.data[r + c * m]; }
    lead++;
  }
  return A;
}

/** Column-wise (dim 1) or row-wise (dim 2) p-norms. */
export function vecnorm(A: Mat, p: number | 'inf' = 2, dim = 1): Mat {
  const pn = (vals: number[]) => p === 'inf' ? Math.max(...vals.map(Math.abs)) : Math.pow(vals.reduce((s, x) => s + Math.pow(Math.abs(x), p), 0), 1 / p);
  if (dim === 1) { const out = zeros(1, A.cols); for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); out.data[c] = pn(col); } return out; }
  const out = zeros(A.rows, 1); for (let r = 0; r < A.rows; r++) { const row: number[] = []; for (let c = 0; c < A.cols; c++) row.push(A.data[r + c * A.rows]); out.data[r] = pn(row); } return out;
}
