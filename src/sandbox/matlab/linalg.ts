/** Dense linear algebra: det, inv, `\` (square solve + least squares), norm, diag, eye. */
import { type Mat, MatError, mat, zeros, scalar, isScalar, numel, transpose, matmul, isComplex, cmul, cdiv, finishComplex, ctranspose, cmatmul, ewRDiv, csqrt, clog, colVec } from './values';

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
      y[r] = s / d;   // IEEE: singular pivot → ±Inf (s≠0) or NaN (0/0), matching MATLAB
    }
    for (let r = 0; r < n; r++) X.data[r + col * n] = y[r];
  }
  return X;
}

/** Solve upper-triangular R x = B for square R. */
function upperTriSolve(R: Mat, b: Mat): Mat {
  const n = R.rows;
  if (R.cols !== n) throw new MatError('upperTriSolve: matrix must be square');
  if (b.rows !== n) throw new MatError(`upperTriSolve: row dimensions must agree (${n} vs ${b.rows})`);
  const X = zeros(n, b.cols);
  for (let col = 0; col < b.cols; col++) {
    for (let r = n - 1; r >= 0; r--) {
      let s = b.data[r + col * b.rows];
      for (let c = r + 1; c < n; c++) s -= R.data[r + c * n] * X.data[c + col * n];
      X.data[r + col * n] = s / R.data[r + r * n];
    }
  }
  return X;
}

function qrPivot(A: Mat): { Q: Mat; R: Mat; piv: number[]; rank: number; tol: number } {
  const m = A.rows, n = A.cols;
  const R = mat(m, n, Float64Array.from(A.data));
  const Q = eye(m);
  const piv = Array.from({ length: n }, (_, i) => i);
  const colNorm = new Float64Array(n);
  let maxColNorm = 0;
  for (let c = 0; c < n; c++) {
    let s = 0;
    for (let r = 0; r < m; r++) s += R.data[r + c * m] ** 2;
    colNorm[c] = Math.sqrt(s);
    maxColNorm = Math.max(maxColNorm, colNorm[c]);
  }
  const at = (M: Mat, r: number, c: number) => M.data[r + c * M.rows];
  const steps = Math.min(m, n);
  for (let k = 0; k < steps; k++) {
    let pc = k, best = -1;
    for (let c = k; c < n; c++) {
      let s = 0;
      for (let r = k; r < m; r++) s += at(R, r, c) ** 2;
      colNorm[c] = Math.sqrt(s);
      if (colNorm[c] > best) { best = colNorm[c]; pc = c; }
    }
    if (pc !== k) {
      for (let r = 0; r < m; r++) {
        const t = R.data[r + k * m];
        R.data[r + k * m] = R.data[r + pc * m];
        R.data[r + pc * m] = t;
      }
      const tp = piv[k]; piv[k] = piv[pc]; piv[pc] = tp;
      const tn = colNorm[k]; colNorm[k] = colNorm[pc]; colNorm[pc] = tn;
    }
    let normx = 0; for (let r = k; r < m; r++) normx += at(R, r, k) ** 2; normx = Math.sqrt(normx);
    if (normx === 0) continue;
    const alpha = at(R, k, k) >= 0 ? -normx : normx;
    const v = new Float64Array(m);
    v[k] = at(R, k, k) - alpha;
    for (let r = k + 1; r < m; r++) v[r] = at(R, r, k);
    let vnorm2 = 0; for (let r = k; r < m; r++) vnorm2 += v[r] ** 2;
    if (vnorm2 === 0) continue;
    for (let c = k; c < n; c++) {
      let d = 0; for (let r = k; r < m; r++) d += v[r] * at(R, r, c);
      d = (2 * d) / vnorm2;
      for (let r = k; r < m; r++) R.data[r + c * m] -= d * v[r];
    }
    for (let r = 0; r < m; r++) {
      let d = 0; for (let i = k; i < m; i++) d += at(Q, r, i) * v[i];
      d = (2 * d) / vnorm2;
      for (let i = k; i < m; i++) Q.data[r + i * m] -= d * v[i];
    }
  }
  const tol = Math.max(m, n) * 2.220446049250313e-16 * maxColNorm;
  let rank = 0;
  for (let k = 0; k < steps; k++) if (Math.abs(R.data[k + k * m]) > tol) rank++;
  return { Q, R, piv, rank, tol };
}

export function qrRankWarning(A: Mat): string | null {
  if (A.rows === A.cols || A.rows < 1 || A.cols < 1 || A.isChar || A.idata) return null;
  const { rank, tol } = qrPivot(A);
  if (rank === Math.min(A.rows, A.cols)) return null;
  return `Rank deficient, rank = ${rank}, tol = ${tol.toExponential(6)}.`;
}

function qrPivotSolve(a: Mat, b: Mat): { x: Mat; rank: number; tol: number } {
  const { Q, R, piv, rank, tol } = qrPivot(a);
  const z = zeros(a.cols, b.cols);
  if (rank > 0) {
    const rhs = zeros(rank, b.cols);
    for (let col = 0; col < b.cols; col++) {
      for (let r = 0; r < rank; r++) {
        let s = 0;
        for (let k = 0; k < a.rows; k++) s += Q.data[k + r * Q.rows] * b.data[k + col * b.rows];
        rhs.data[r + col * rank] = s;
      }
    }
    const R11 = zeros(rank, rank);
    for (let c = 0; c < rank; c++) for (let r = 0; r <= c; r++) R11.data[r + c * rank] = R.data[r + c * R.rows];
    const y = upperTriSolve(R11, rhs);
    for (let col = 0; col < b.cols; col++) for (let r = 0; r < rank; r++) z.data[r + col * z.rows] = y.data[r + col * y.rows];
  }
  const x = zeros(a.cols, b.cols);
  for (let c = 0; c < a.cols; c++) {
    const orig = piv[c];
    for (let col = 0; col < b.cols; col++) x.data[orig + col * x.rows] = z.data[c + col * z.rows];
  }
  return { x, rank, tol };
}

export function inv(a: Mat): Mat {
  if (isComplex(a)) { if (a.rows !== a.cols) throw new MatError('inverse requires a square matrix'); return cLuSolve(a, eye(a.rows)); }
  if (isScalar(a)) return scalar(1 / a.data[0]);
  if (a.rows !== a.cols) throw new MatError('inverse requires a square matrix');
  return luSolve(a, eye(a.rows));
}

/** A \ B (mldivide): square → LU solve; rectangular → pivoted-QR basic least-squares solve. */
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
  // Rectangular systems use QR with column pivoting. This avoids normal equations
  // for tall least-squares problems and gives MATLAB-like basic solutions for
  // rank-deficient or underdetermined systems.
  return qrPivotSolve(a, b).x;
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

// ── Polynomial roots (Durand–Kerner) and general eigenvalues ───────────
/** All roots of a real-coefficient polynomial (high→low), complex-valued. */
export function durandKerner(coefIn: number[]): { re: number[]; im: number[] } {
  let c = coefIn.slice(); while (c.length > 1 && c[0] === 0) c.shift();
  const n = c.length - 1; if (n <= 0) return { re: [], im: [] };
  const mc = c.map((v) => v / c[0]); // monic, high→low
  const zr = new Array<number>(n), zi = new Array<number>(n);
  for (let k = 0; k < n; k++) { let pr = 1, pi = 0; for (let t = 0; t < k; t++) { const [a, b] = cmul(pr, pi, 0.4, 0.9); pr = a; pi = b; } zr[k] = pr; zi[k] = pi; }
  const pev = (x: number, y: number): [number, number] => { let sr = mc[0], si = 0; for (let k = 1; k < mc.length; k++) { const [tr, ti] = cmul(sr, si, x, y); sr = tr + mc[k]; si = ti; } return [sr, si]; };
  for (let iter = 0; iter < 500; iter++) {
    let maxd = 0;
    for (let k = 0; k < n; k++) {
      const [pr, pi] = pev(zr[k], zi[k]);
      let dr = 1, di = 0;
      for (let j = 0; j < n; j++) { if (j === k) continue; const [qr, qi] = cmul(dr, di, zr[k] - zr[j], zi[k] - zi[j]); dr = qr; di = qi; }
      if (dr === 0 && di === 0) continue;
      const [er, ei] = cdiv(pr, pi, dr, di);
      zr[k] -= er; zi[k] -= ei; maxd = Math.max(maxd, Math.hypot(er, ei));
    }
    if (maxd < 1e-14) break;
  }
  for (let k = 0; k < n; k++) if (Math.abs(zi[k]) < 1e-9 * (1 + Math.abs(zr[k]))) zi[k] = 0;
  return { re: zr, im: zi };
}

/** Characteristic polynomial (monic, high→low) via Faddeev–LeVerrier (real A). */
export function charpoly(A: Mat): number[] {
  const n = A.rows; const c = [1]; let M = eye(n);
  for (let k = 1; k <= n; k++) {
    const AM = matmul(A, M);
    let tr = 0; for (let i = 0; i < n; i++) tr += AM.data[i + i * n];
    const ck = -tr / k; c.push(ck);
    M = mat(n, n, Float64Array.from(AM.data)); for (let i = 0; i < n; i++) M.data[i + i * n] += ck;
  }
  return c;
}

/** Eigenvector for eigenvalue (lr,li) by complex inverse iteration. */
function eigVec(A: Mat, lr: number, li: number): { re: number[]; im: number[] } {
  const n = A.rows;
  const Mre = Float64Array.from(A.data); const Mim = A.idata ? Float64Array.from(A.idata) : new Float64Array(n * n);
  const pr = lr + 1e-8 * (Math.abs(lr) + 1), pi = li + 1e-8 * (Math.abs(li) + 1); // perturb off the exact eigenvalue
  for (let i = 0; i < n; i++) { Mre[i + i * n] -= pr; Mim[i + i * n] -= pi; }
  const M: Mat = { kind: 'num', rows: n, cols: n, data: Mre, idata: Mim };
  let vr = new Array<number>(n).fill(1), vi = new Array<number>(n).fill(0);
  for (let it = 0; it < 50; it++) {
    const x = cLuSolve(M, { kind: 'num', rows: n, cols: 1, data: Float64Array.from(vr), idata: Float64Array.from(vi) });
    let nrm = 0; for (let i = 0; i < n; i++) nrm += x.data[i] ** 2 + (x.idata ? x.idata[i] ** 2 : 0); nrm = Math.sqrt(nrm) || 1;
    for (let i = 0; i < n; i++) { vr[i] = x.data[i] / nrm; vi[i] = (x.idata ? x.idata[i] : 0) / nrm; }
  }
  return { re: vr, im: vi };
}

// ── More decompositions / matrix functions ────────────────────────────
/** Upper Hessenberg form via Householder: P' A P = H. */
export function hess(A: Mat): { P: Mat; H: Mat } {
  const n = A.rows; const H = mat(n, n, Float64Array.from(A.data)); const P = eye(n);
  for (let k = 0; k < n - 2; k++) {
    let alpha = 0; for (let i = k + 1; i < n; i++) alpha += H.data[i + k * n] ** 2; alpha = Math.sqrt(alpha) * (H.data[(k + 1) + k * n] >= 0 ? -1 : 1);
    if (alpha === 0) continue;
    const v = new Float64Array(n); v[k + 1] = H.data[(k + 1) + k * n] - alpha; for (let i = k + 2; i < n; i++) v[i] = H.data[i + k * n];
    let vn = 0; for (let i = k + 1; i < n; i++) vn += v[i] ** 2; if (vn === 0) continue;
    for (let c = 0; c < n; c++) { let d = 0; for (let i = k + 1; i < n; i++) d += v[i] * H.data[i + c * n]; d = (2 * d) / vn; for (let i = k + 1; i < n; i++) H.data[i + c * n] -= d * v[i]; }
    for (let r = 0; r < n; r++) { let d = 0; for (let i = k + 1; i < n; i++) d += H.data[r + i * n] * v[i]; d = (2 * d) / vn; for (let i = k + 1; i < n; i++) H.data[r + i * n] -= d * v[i]; }
    for (let r = 0; r < n; r++) { let d = 0; for (let i = k + 1; i < n; i++) d += P.data[r + i * n] * v[i]; d = (2 * d) / vn; for (let i = k + 1; i < n; i++) P.data[r + i * n] -= d * v[i]; }
  }
  return { P, H };
}

/** Similarity rotation in the (i,i+1) plane: T ← Gᵀ T G, U ← U G, with G=[[cs,-sn],[sn,cs]]. */
function planeRot(T: Mat, U: Mat, n: number, i: number, cs: number, sn: number): void {
  for (let j = 0; j < n; j++) { const a = T.data[i + j * n], b = T.data[(i + 1) + j * n]; T.data[i + j * n] = cs * a + sn * b; T.data[(i + 1) + j * n] = -sn * a + cs * b; }
  for (let r = 0; r < n; r++) { const a = T.data[r + i * n], b = T.data[r + (i + 1) * n]; T.data[r + i * n] = cs * a + sn * b; T.data[r + (i + 1) * n] = -sn * a + cs * b; }
  for (let r = 0; r < n; r++) { const a = U.data[r + i * n], b = U.data[r + (i + 1) * n]; U.data[r + i * n] = cs * a + sn * b; U.data[r + (i + 1) * n] = -sn * a + cs * b; }
}

/** Real Schur form via Francis double-shift QR with deflation: U' A U = T (quasi-upper-triangular). */
export function schur(A: Mat): { U: Mat; T: Mat } {
  const n = A.rows;
  const { P, H } = hess(A);
  const T = mat(n, n, Float64Array.from(H.data));
  let U = mat(n, n, Float64Array.from(P.data));
  if (n <= 1) return { U, T };
  const g = (i: number, j: number) => T.data[i + j * n];
  let hi = n - 1, guard = 0;
  while (hi > 0) {
    if (guard++ > 120 * n) break;
    // Find top `l` of the trailing unreduced block, zeroing negligible subdiagonals.
    let l = hi;
    while (l > 0) { const s = Math.abs(g(l - 1, l - 1)) + Math.abs(g(l, l)); if (Math.abs(g(l, l - 1)) <= 1e-14 * (s || 1)) { T.data[l + (l - 1) * n] = 0; break; } l--; }
    if (l === hi) { hi -= 1; continue; }          // 1×1 block converged
    if (l === hi - 1) { hi -= 2; continue; }       // 2×2 block converged (kept for now)
    // Explicit double shift from the trailing 2×2 of the active window [0..hi].
    const a = g(hi - 1, hi - 1), b = g(hi - 1, hi), c = g(hi, hi - 1), d = g(hi, hi);
    const s = a + d, det = a * d - b * c;          // trace & determinant → shifts
    const mwin = hi + 1;
    const Tw = mat(mwin, mwin, new Float64Array(mwin * mwin));
    for (let j = 0; j < mwin; j++) for (let i = 0; i < mwin; i++) Tw.data[i + j * mwin] = g(i, j);
    const Tw2 = matmul(Tw, Tw);
    const M = mat(mwin, mwin, new Float64Array(mwin * mwin));
    for (let j = 0; j < mwin; j++) for (let i = 0; i < mwin; i++) M.data[i + j * mwin] = Tw2.data[i + j * mwin] - s * Tw.data[i + j * mwin] + (i === j ? det : 0);
    const { Q } = qr(M);
    const Qf = eye(n);
    for (let j = 0; j < mwin; j++) for (let i = 0; i < mwin; i++) Qf.data[i + j * n] = Q.data[i + j * mwin];
    const Tn = matmul(matmul(transpose(Qf), T), Qf);
    T.data.set(Tn.data);
    U = matmul(U, Qf);
  }
  // Standardize: triangularize any 2×2 block that actually has real eigenvalues.
  for (let i = 0; i < n - 1; i++) {
    if (Math.abs(g(i + 1, i)) < 1e-300) continue;
    const a = g(i, i), b = g(i, i + 1), c = g(i + 1, i), d = g(i + 1, i + 1);
    const disc = (a + d) * (a + d) - 4 * (a * d - b * c);
    if (disc < 0) continue;                        // genuine complex pair → leave as 2×2
    const lam = ((a + d) + Math.sign((a + d) || 1) * Math.sqrt(disc)) / 2;
    let v1 = b, v2 = lam - a; if (Math.abs(v1) + Math.abs(v2) < 1e-300) { v1 = lam - d; v2 = c; }
    const nrm = Math.hypot(v1, v2) || 1;
    planeRot(T, U, n, i, v1 / nrm, v2 / nrm);
    T.data[(i + 1) + i * n] = 0;
  }
  return { U, T };
}

/** Eigenvalues read off a real Schur form T (1×1 and 2×2 diagonal blocks). */
export function schurEig(T: Mat): { re: number[]; im: number[] } {
  const n = T.rows; const re: number[] = [], im: number[] = [];
  for (let i = 0; i < n; ) {
    if (i < n - 1 && Math.abs(T.data[(i + 1) + i * n]) > 1e-300) {
      const a = T.data[i + i * n], b = T.data[i + (i + 1) * n], c = T.data[(i + 1) + i * n], d = T.data[(i + 1) + (i + 1) * n];
      const tr = a + d, disc = tr * tr - 4 * (a * d - b * c);
      if (disc >= 0) { const r = Math.sqrt(disc); re.push((tr + r) / 2, (tr - r) / 2); im.push(0, 0); }   // unreduced 2×2 with real eigenvalues
      else { const s = Math.sqrt(-disc) / 2; re.push(tr / 2, tr / 2); im.push(s, -s); }
      i += 2;
    } else { re.push(T.data[i + i * n]); im.push(0); i += 1; }
  }
  return { re, im };
}

/** Parlett–Reinsch balancing: D⁻¹AD has comparable row/column norms (D diagonal, powers of 2). */
export function balance(A: Mat): { D: number[]; B: Mat } {
  const n = A.rows; const B = mat(n, n, Float64Array.from(A.data)); const D = new Array(n).fill(1);
  const RAD = 2, RAD2 = 4; let done = false, guard = 0;
  while (!done && guard++ < 1000) {
    done = true;
    for (let i = 0; i < n; i++) {
      let c = 0, r = 0;
      for (let j = 0; j < n; j++) if (j !== i) { c += Math.abs(B.data[j + i * n]); r += Math.abs(B.data[i + j * n]); }
      if (c === 0 || r === 0) continue;
      let f = 1, cc = c; const sBefore = c + r;
      let gg = r / RAD; while (cc < gg) { f *= RAD; cc *= RAD2; }
      gg = r * RAD; while (cc >= gg) { f /= RAD; cc /= RAD2; }
      if ((cc + r) < 0.95 * sBefore * f) {
        done = false; D[i] *= f; const gi = 1 / f;
        for (let j = 0; j < n; j++) B.data[i + j * n] *= gi;
        for (let j = 0; j < n; j++) B.data[j + i * n] *= f;
      }
    }
  }
  return { D, B };
}

/** Convert a real Schur pair (U,T) to complex Schur form (upper-triangular T). */
export function rsf2csf(U0: Mat, T0: Mat): { U: Mat; T: Mat } {
  const n = T0.rows;
  const Tr = Float64Array.from(T0.data), Ti = new Float64Array(n * n);
  const Ur = Float64Array.from(U0.data), Ui = new Float64Array(n * n);
  const gT = (a: Float64Array, i: number, j: number) => a[i + j * n];
  for (let mm = n - 1; mm >= 1; mm--) {
    if (Math.abs(Tr[mm + (mm - 1) * n]) < 1e-300) continue;
    // Eigenvalue μ of the trailing 2×2 block, minus T(mm,mm).
    const a = gT(Tr, mm - 1, mm - 1), b = gT(Tr, mm - 1, mm), c = gT(Tr, mm, mm - 1), d = gT(Tr, mm, mm);
    const tr = a + d, disc = tr * tr - 4 * (a * d - b * c);
    const [sr, si] = csqrt(disc, 0);
    let mur = (tr + sr) / 2 - d, mui = si / 2; // μ = λ₁ − T(mm,mm)
    const rr = Math.hypot(Math.hypot(mur, mui), Tr[mm + (mm - 1) * n]) || 1;
    // rotation: cR = μ/r (conj used on the (1,1)/(1,2) side), sR = T(mm,mm-1)/r
    let cr = mur / rr, ci = mui / rr; const sn = Tr[mm + (mm - 1) * n] / rr;
    // Apply G = [[conj(c), s], [-s, c]] to rows (mm-1,mm), cols (mm-1..n-1):
    for (let j = mm - 1; j < n; j++) {
      const x0r = Tr[(mm - 1) + j * n], x0i = Ti[(mm - 1) + j * n], x1r = Tr[mm + j * n], x1i = Ti[mm + j * n];
      // row mm-1 = conj(c)*x0 + s*x1 ; row mm = -s*x0 + c*x1
      Tr[(mm - 1) + j * n] = cr * x0r + ci * x0i + sn * x1r; Ti[(mm - 1) + j * n] = cr * x0i - ci * x0r + sn * x1i;
      Tr[mm + j * n] = -sn * x0r + cr * x1r - ci * x1i; Ti[mm + j * n] = -sn * x0i + cr * x1i + ci * x1r;
    }
    // Apply Gᴴ to cols (mm-1,mm): col(mm-1) = c·y0 + s·y1 ; col(mm) = −s·y0 + conj(c)·y1.
    for (let r = 0; r <= mm; r++) {
      const y0r = Tr[r + (mm - 1) * n], y0i = Ti[r + (mm - 1) * n], y1r = Tr[r + mm * n], y1i = Ti[r + mm * n];
      Tr[r + (mm - 1) * n] = cr * y0r - ci * y0i + sn * y1r; Ti[r + (mm - 1) * n] = cr * y0i + ci * y0r + sn * y1i;
      Tr[r + mm * n] = -sn * y0r + cr * y1r + ci * y1i; Ti[r + mm * n] = -sn * y0i + cr * y1i - ci * y1r;
    }
    for (let r = 0; r < n; r++) {
      const y0r = Ur[r + (mm - 1) * n], y0i = Ui[r + (mm - 1) * n], y1r = Ur[r + mm * n], y1i = Ui[r + mm * n];
      Ur[r + (mm - 1) * n] = cr * y0r - ci * y0i + sn * y1r; Ui[r + (mm - 1) * n] = cr * y0i + ci * y0r + sn * y1i;
      Ur[r + mm * n] = -sn * y0r + cr * y1r + ci * y1i; Ui[r + mm * n] = -sn * y0i + cr * y1i - ci * y1r;
    }
    Tr[mm + (mm - 1) * n] = 0; Ti[mm + (mm - 1) * n] = 0;
    void cr; void ci;
  }
  return { U: finishComplex(n, n, Ur, Ui), T: finishComplex(n, n, Tr, Ti) };
}

/** Generalized (QZ) Schur for a regular pair with nonsingular B: Q A Z = AA, Q B Z = BB. */
export function qz(A: Mat, B: Mat): { AA: Mat; BB: Mat; Q: Mat; Z: Mat } {
  const M = mldivide(B, A);              // B⁻¹A (B must be nonsingular)
  const { U: Z, T: S } = schur(M);       // Z' M Z = S, Z orthogonal
  const BZ = matmul(B, Z);
  const { Q: Qb, R } = qr(BZ);           // BZ = Qb R  →  Qbᵀ B Z = R (upper triangular)
  const Qm = transpose(Qb);              // MATLAB's Q (so Q A Z = AA)
  const AA = matmul(Qm, matmul(A, Z));   // = R S  (quasi-triangular)
  const BB = matmul(Qm, matmul(B, Z));   // = R    (upper triangular)
  void R;
  return { AA, BB, Q: Qm, Z };
}

/** Solve the small Sylvester equation B1 X − X B2 = C (block sizes ≤ 2). */
function sylvSmall(B1: Mat, B2: Mat, C: Mat): Mat {
  const p = B1.rows, q = B2.rows, pq = p * q;
  const K = zeros(pq, pq); const rhs = zeros(pq, 1);
  // vec(X) column-major; equation row index = i + k*p for X(i,k).
  for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) {
    const row = i + k * p; rhs.data[row] = C.data[i + k * p];
    for (let ii = 0; ii < p; ii++) K.data[row + (ii + k * p) * pq] += B1.data[i + ii * p];
    for (let kk = 0; kk < q; kk++) K.data[row + (i + kk * p) * pq] -= B2.data[kk + k * q];
  }
  const x = mldivide(K, rhs);
  const X = zeros(p, q); for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) X.data[i + k * p] = x.data[i + k * p];
  return X;
}

/** Swap the adjacent diagonal blocks at [j..j+p-1] (size p) and [j+p..] (size q) of a Schur form. */
function swapAdjacent(T: Mat, U: Mat, n: number, j: number, p: number, q: number): void {
  const s = p + q;
  const B1 = zeros(p, p), B2 = zeros(q, q), C = zeros(p, q);
  for (let b = 0; b < p; b++) for (let a = 0; a < p; a++) B1.data[a + b * p] = T.data[(j + a) + (j + b) * n];
  for (let b = 0; b < q; b++) for (let a = 0; a < q; a++) B2.data[a + b * q] = T.data[(j + p + a) + (j + p + b) * n];
  for (let b = 0; b < q; b++) for (let a = 0; a < p; a++) C.data[a + b * p] = T.data[(j + a) + (j + p + b) * n];
  const X = sylvSmall(B1, B2, C);
  // Columns spanning B2's invariant subspace inside the combined block: [ -X ; I_q ].
  const Mblk = zeros(s, q);
  for (let b = 0; b < q; b++) { for (let a = 0; a < p; a++) Mblk.data[a + b * s] = -X.data[a + b * p]; Mblk.data[(p + b) + b * s] = 1; }
  const { Q } = qr(Mblk);                // s×s orthogonal; first q cols span the subspace
  const Qf = eye(n);
  for (let b = 0; b < s; b++) for (let a = 0; a < s; a++) Qf.data[(j + a) + (j + b) * n] = Q.data[a + b * s];
  const Tn = matmul(matmul(transpose(Qf), T), Qf); T.data.set(Tn.data);
  const Un = matmul(U, Qf); U.data.set(Un.data);
}

/** Reorder a real Schur form so that selected eigenvalues move to the top-left. */
export function ordschur(U0: Mat, T0: Mat, sel: boolean[]): { U: Mat; T: Mat } {
  const n = T0.rows; const T = mat(n, n, Float64Array.from(T0.data)); const U = mat(n, n, Float64Array.from(U0.data));
  // Block layout: positions with their sizes (1 or 2) and whether selected (any constituent selected).
  const blockAt = (start: number) => (start < n - 1 && Math.abs(T.data[(start + 1) + start * n]) > 1e-300 ? 2 : 1);
  for (let pass = 0; pass < n * n; pass++) {
    let swapped = false;
    let pos = 0;
    while (pos < n) {
      const sz = blockAt(pos); const next = pos + sz;
      if (next >= n) break;
      const szN = blockAt(next);
      const selHere = sel[pos] || (sz === 2 && sel[pos + 1]);
      const selNext = sel[next] || (szN === 2 && sel[next + 1]);
      if (!selHere && selNext) {
        swapAdjacent(T, U, n, pos, sz, szN);
        // selection follows the moved blocks: next block (now on top) becomes selected-at pos
        const a = sel[pos], b = sz === 2 ? sel[pos + 1] : undefined;
        for (let k = 0; k < szN; k++) sel[pos + k] = sel[next + k];
        sel[pos + szN] = a; if (sz === 2) sel[pos + szN + 1] = b!;
        swapped = true; pos += szN;
      } else pos += sz;
    }
    if (!swapped) break;
  }
  return { U, T };
}

/** Reorder a real generalized Schur form (AA quasi-triangular, BB upper-triangular)
 *  so selected eigenvalues move to the top-left, updating Q,Z (Q·A·Z=AA, Q·B·Z=BB).
 *  Handles adjacent 1×1 blocks (real generalized eigenvalues); 2×2 (complex-pair)
 *  blocks are left in place. `sel[i]` selects generalized eigenvalue i. */
export function ordqz(AA0: Mat, BB0: Mat, Q0: Mat, Z0: Mat, sel: boolean[]): { AA: Mat; BB: Mat; Q: Mat; Z: Mat } {
  const n = AA0.rows;
  const AA = mat(n, n, Float64Array.from(AA0.data)), BB = mat(n, n, Float64Array.from(BB0.data));
  const Q = mat(n, n, Float64Array.from(Q0.data)), Z = mat(n, n, Float64Array.from(Z0.data));
  const A = AA.data, B = BB.data, Qd = Q.data, Zd = Z.data; const s = sel.slice();
  const colRot = (M: Float64Array, j: number, c: number, sn: number) => { for (let i = 0; i < n; i++) { const t = M[i + j * n], u = M[i + (j + 1) * n]; M[i + j * n] = c * t + sn * u; M[i + (j + 1) * n] = -sn * t + c * u; } };
  const rowRot = (M: Float64Array, j: number, c: number, sn: number) => { for (let k = 0; k < n; k++) { const t = M[j + k * n], u = M[(j + 1) + k * n]; M[j + k * n] = c * t + sn * u; M[(j + 1) + k * n] = -sn * t + c * u; } };
  const is2x2 = (j: number) => j < n - 1 && Math.abs(A[(j + 1) + j * n]) > 1e-300;
  // Swap adjacent 1×1 generalized eigenvalues at j, j+1 (move λ_{j+1} to position j).
  const swap = (j: number) => {
    const a11 = A[j + j * n], a12 = A[j + (j + 1) * n], a22 = A[(j + 1) + (j + 1) * n];
    const b11 = B[j + j * n], b12 = B[j + (j + 1) * n], b22 = B[(j + 1) + (j + 1) * n];
    // right rotation aligning the first column with the λ2-eigenvector of the 2×2 pencil
    let v1: number, v2: number;
    if (Math.abs(b22) > 1e-300) { const l2 = a22 / b22; v1 = -(a12 - l2 * b12); v2 = a11 - l2 * b11; }
    else { v1 = -b12; v2 = b11; }                 // λ2 = ∞
    let r = Math.hypot(v1, v2) || 1; const cz = v1 / r, sz = v2 / r;
    colRot(A, j, cz, sz); colRot(B, j, cz, sz); colRot(Zd, j, cz, sz);
    // left rotation restoring upper-triangular BB (zero its (j+1,j) entry)
    const bj = B[j + j * n], bj1 = B[(j + 1) + j * n]; r = Math.hypot(bj, bj1) || 1; const cq = bj / r, sq = bj1 / r;
    rowRot(A, j, cq, sq); rowRot(B, j, cq, sq); rowRot(Qd, j, cq, sq);
    B[(j + 1) + j * n] = 0; A[(j + 1) + j * n] = 0;
  };
  for (let pass = 0; pass < n * n; pass++) {
    let moved = false;
    for (let j = 0; j + 1 < n; j++) {
      if (is2x2(j) || is2x2(j + 1)) continue;      // skip complex-pair blocks
      if (!s[j] && s[j + 1]) { swap(j); const tmp = s[j]; s[j] = s[j + 1]; s[j + 1] = tmp; moved = true; }
    }
    if (!moved) break;
  }
  return { AA, BB, Q, Z };
}

// ── Integer matrix normal forms (Hermite / Smith) ────────────────────────
const idMat = (n: number): number[][] => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
const matToRows = (A: Mat): number[][] => Array.from({ length: A.rows }, (_, i) => Array.from({ length: A.cols }, (_, j) => A.data[i + j * A.rows]));
const rowsToMat = (R: number[][]): Mat => { const m = R.length, n = R[0]?.length ?? 0; const o = zeros(m, n); for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) o.data[i + j * m] = R[i][j]; return o; };
function assertInt(R: number[][], who: string): void { for (const row of R) for (const v of row) if (Math.abs(v - Math.round(v)) > 1e-9) throw new MatError(`${who}: integer matrix required`); }
/** Hermite normal form by column operations: A·V = H, V unimodular, H lower-triangular. */
export function hermiteFormInt(A: Mat): { H: Mat; U: Mat } {
  const R = matToRows(A); assertInt(R, 'hermiteForm'); R.forEach((row) => row.forEach((_, j) => (row[j] = Math.round(row[j]))));
  const m = R.length, n = R[0].length; const H = R.map((r) => r.slice()); const V = idMat(n);
  const swapCol = (a: number, b: number) => { for (let i = 0; i < m; i++) [H[i][a], H[i][b]] = [H[i][b], H[i][a]]; for (let i = 0; i < n; i++) [V[i][a], V[i][b]] = [V[i][b], V[i][a]]; };
  const addCol = (dst: number, src: number, k: number) => { for (let i = 0; i < m; i++) H[i][dst] += k * H[i][src]; for (let i = 0; i < n; i++) V[i][dst] += k * V[i][src]; };
  const negCol = (a: number) => { for (let i = 0; i < m; i++) H[i][a] = -H[i][a]; for (let i = 0; i < n; i++) V[i][a] = -V[i][a]; };
  let pc = 0;
  for (let r = 0; r < m && pc < n; r++) {
    let guard = 0;
    for (; ;) {
      const nz = []; for (let c = pc; c < n; c++) if (H[r][c] !== 0) nz.push(c);
      if (!nz.length) break;
      let piv = nz[0]; for (const c of nz) if (Math.abs(H[r][c]) < Math.abs(H[r][piv])) piv = c;
      if (piv !== pc) swapCol(piv, pc);
      let done = true; for (let c = pc + 1; c < n; c++) if (H[r][c] !== 0) { addCol(c, pc, -Math.round(H[r][c] / H[r][pc])); if (H[r][c] !== 0) done = false; }
      if (done) break; if (++guard > 1000) break;
    }
    if (pc < n && H[r][pc] !== 0) { if (H[r][pc] < 0) negCol(pc); for (let c = 0; c < pc; c++) { const q = Math.floor(H[r][c] / H[r][pc]); if (q) addCol(c, pc, -q); } pc++; }
  }
  return { H: rowsToMat(H), U: rowsToMat(V) };
}
/** Smith normal form: U·A·V = S, U,V unimodular, S diagonal with s₁|s₂|… */
export function smithFormInt(A: Mat): { U: Mat; S: Mat; V: Mat } {
  const R = matToRows(A); assertInt(R, 'smithForm'); R.forEach((row) => row.forEach((_, j) => (row[j] = Math.round(row[j]))));
  const m = R.length, n = R[0].length; const S = R.map((r) => r.slice()); const U = idMat(m), V = idMat(n);
  const swapRow = (a: number, b: number) => { [S[a], S[b]] = [S[b], S[a]]; [U[a], U[b]] = [U[b], U[a]]; };
  const addRow = (d: number, s: number, k: number) => { for (let j = 0; j < n; j++) S[d][j] += k * S[s][j]; for (let j = 0; j < m; j++) U[d][j] += k * U[s][j]; };
  const negRow = (a: number) => { for (let j = 0; j < n; j++) S[a][j] = -S[a][j]; for (let j = 0; j < m; j++) U[a][j] = -U[a][j]; };
  const swapCol = (a: number, b: number) => { for (let i = 0; i < m; i++) [S[i][a], S[i][b]] = [S[i][b], S[i][a]]; for (let i = 0; i < n; i++) [V[i][a], V[i][b]] = [V[i][b], V[i][a]]; };
  const addCol = (d: number, s: number, k: number) => { for (let i = 0; i < m; i++) S[i][d] += k * S[i][s]; for (let i = 0; i < n; i++) V[i][d] += k * V[i][s]; };
  const negCol = (a: number) => { for (let i = 0; i < m; i++) S[i][a] = -S[i][a]; for (let i = 0; i < n; i++) V[i][a] = -V[i][a]; };
  for (let t = 0; t < Math.min(m, n); t++) {
    let guard = 0;
    for (; ;) {
      // bring the smallest nonzero |entry| of the trailing submatrix to (t,t)
      let pi = -1, pj = -1, best = Infinity;
      for (let i = t; i < m; i++) for (let j = t; j < n; j++) if (S[i][j] !== 0 && Math.abs(S[i][j]) < best) { best = Math.abs(S[i][j]); pi = i; pj = j; }
      if (pi < 0) break;
      if (pi !== t) swapRow(pi, t); if (pj !== t) swapCol(pj, t);
      let changed = false;
      for (let i = t + 1; i < m; i++) if (S[i][t] !== 0) { addRow(i, t, -Math.round(S[i][t] / S[t][t])); if (S[i][t] !== 0) changed = true; }
      for (let j = t + 1; j < n; j++) if (S[t][j] !== 0) { addCol(j, t, -Math.round(S[t][j] / S[t][t])); if (S[t][j] !== 0) changed = true; }
      if (!changed) {
        // ensure (t,t) divides the rest; if not, fold an offending row into row t
        let bad = false; for (let i = t + 1; i < m && !bad; i++) for (let j = t + 1; j < n; j++) if (S[i][j] % S[t][t] !== 0) { addRow(t, i, 1); bad = true; break; }
        if (!bad) break;
      }
      if (++guard > 2000) break;
    }
    if (S[t][t] < 0) negRow(t);
  }
  return { U: rowsToMat(U), S: rowsToMat(S), V: rowsToMat(V) };
}

/** Matrix exponential via scaling and squaring (Taylor). */
export function expm(A: Mat): Mat {
  const n = A.rows; const nrm = norm(A, 'inf') || 1; const sgrid = Math.max(0, Math.ceil(Math.log2(nrm)));
  const sc = Math.pow(2, sgrid); const B = mat(n, n, A.data.map((v) => v / sc) as Float64Array);
  let E = eye(n); let term = eye(n);
  for (let k = 1; k <= 18; k++) { term = matmul(term, B); for (let i = 0; i < term.data.length; i++) term.data[i] /= k; for (let i = 0; i < E.data.length; i++) E.data[i] += term.data[i]; }
  for (let t = 0; t < sgrid; t++) E = matmul(E, E);
  return E;
}

/** f(A) for diagonalisable A via the eigendecomposition: V·f(D)·V⁻¹. */
/** Matrix function f(A) via Schur–Parlett (complex Schur + Parlett recurrence with
 *  confluent handling for equal/clustered eigenvalues — robust for repeated eigenvalues). */
function funmViaEig(A: Mat, f: (re: number, im: number) => [number, number]): Mat {
  const n = A.rows; if (n === 0) return A;
  // Real symmetric A: use the exact eigendecomposition A = V Λ Vᵀ (V real orthogonal),
  // so f(A) = V diag(f(λ)) Vᵀ. Avoids the Schur–Parlett path, which loses symmetry here.
  if (!isComplex(A) && isSymmetric(A)) {
    const { values, V } = jacobiEigSym(A);
    const fv = values.map((v) => f(v, 0));
    const Fre = new Float64Array(n * n), Fim = new Float64Array(n * n);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      let sr = 0, si = 0;
      for (let kk = 0; kk < n; kk++) { const w = V.data[i + kk * n] * V.data[j + kk * n]; sr += w * fv[kk][0]; si += w * fv[kk][1]; }
      Fre[i + j * n] = sr; Fim[i + j * n] = si;
    }
    return finishComplex(n, n, Fre, Fim);
  }
  // complex Schur: A = U T Uᴴ, T upper-triangular
  const sc = schur(A); const cs = rsf2csf(sc.U, sc.T);
  const Tre = cs.T.data, Tim = cs.T.idata ?? new Float64Array(n * n);
  const tr = (i: number, j: number) => Tre[i + j * n], ti = (i: number, j: number) => Tim[i + j * n];
  const Fre = new Float64Array(n * n), Fim = new Float64Array(n * n);
  for (let i = 0; i < n; i++) { const [a, b] = f(tr(i, i), ti(i, i)); Fre[i + i * n] = a; Fim[i + i * n] = b; }
  const fprime = (re: number, im: number): [number, number] => { const h = 1e-6; const [pr, pi] = f(re + h, im); const [mr, mi] = f(re - h, im); return [(pr - mr) / (2 * h), (pi - mi) / (2 * h)]; };
  for (let d = 1; d < n; d++) for (let i = 0; i + d < n; i++) {
    const j = i + d;
    // F_ij (T_jj − T_ii) = T_ij (F_jj − F_ii) + Σ_{i<k<j} (T_ik F_kj − F_ik T_kj)   [from FT = TF]
    let nr = 0, ni = 0;
    { const [r, m] = cmul(tr(i, j), ti(i, j), Fre[j + j * n] - Fre[i + i * n], Fim[j + j * n] - Fim[i + i * n]); nr += r; ni += m; }
    for (let k = i + 1; k < j; k++) {
      const [r1, m1] = cmul(Fre[i + k * n], Fim[i + k * n], tr(k, j), ti(k, j));   // F_ik T_kj
      const [r2, m2] = cmul(tr(i, k), ti(i, k), Fre[k + j * n], Fim[k + j * n]);   // T_ik F_kj
      nr += r2 - r1; ni += m2 - m1;   // + (T_ik F_kj − F_ik T_kj)
    }
    const dr = tr(j, j) - tr(i, i), di = ti(j, j) - ti(i, i);
    if (Math.hypot(dr, di) < 1e-11) {   // confluent: f'(λ) on the (near-)equal eigenvalue
      const [pr, pi] = fprime((tr(i, i) + tr(j, j)) / 2, (ti(i, i) + ti(j, j)) / 2);
      const [r, m] = cmul(tr(i, j), ti(i, j), pr, pi); Fre[i + j * n] = r; Fim[i + j * n] = m;
    } else { const [r, m] = cdiv(nr, ni, dr, di); Fre[i + j * n] = r; Fim[i + j * n] = m; }
  }
  const F = finishComplex(n, n, Fre, Fim);
  const Uc = cs.U; return cmatmul(cmatmul(Uc, F), ctranspose(Uc));   // U F Uᴴ
}
export const sqrtm = (A: Mat): Mat => funmViaEig(A, (re, im) => csqrt(re, im));
export const logm = (A: Mat): Mat => funmViaEig(A, (re, im) => clog(re, im));

/** LDL' factorisation of a symmetric matrix → unit-lower L and diagonal D. */
export function ldl(A: Mat): { L: Mat; D: Mat } {
  const n = A.rows; const L = eye(n); const D = zeros(n, n);
  for (let j = 0; j < n; j++) {
    let dj = A.data[j + j * n]; for (let k = 0; k < j; k++) dj -= L.data[j + k * n] ** 2 * D.data[k + k * n]; D.data[j + j * n] = dj;
    for (let i = j + 1; i < n; i++) { let s = A.data[i + j * n]; for (let k = 0; k < j; k++) s -= L.data[i + k * n] * L.data[j + k * n] * D.data[k + k * n]; L.data[i + j * n] = dj !== 0 ? s / dj : 0; }
  }
  return { L, D };
}

/** Nonnegative least squares (Lawson–Hanson active set): min ‖Cx−d‖, x ≥ 0. */
export function lsqnonneg(C: Mat, d: Mat): Mat {
  const mC = C.rows, n = C.cols; const x = new Float64Array(n);
  const P = new Set<number>(); const Z = new Set<number>(); for (let i = 0; i < n; i++) Z.add(i);
  const Ct = transpose(C);
  const colFrom = (a: Float64Array) => mat(n, 1, Float64Array.from(a));
  const subCols = (cols: number[]) => { const o = zeros(mC, cols.length); cols.forEach((c, j) => { for (let r = 0; r < mC; r++) o.data[r + j * mC] = C.data[r + c * mC]; }); return o; };
  let outer = 0;
  while (Z.size && outer++ < 3 * n) {
    const Cx = matmul(C, colFrom(x)); const r = new Float64Array(mC); for (let i = 0; i < mC; i++) r[i] = d.data[i] - Cx.data[i];
    const w = matmul(Ct, mat(mC, 1, r));
    let jmax = -1, wmax = 1e-10; for (const j of Z) if (w.data[j] > wmax) { wmax = w.data[j]; jmax = j; }
    if (jmax < 0) break;
    P.add(jmax); Z.delete(jmax);
    let inner = 0;
    while (inner++ < 3 * n) {
      const cols = [...P].sort((a, b) => a - b); const z = mldivide(subCols(cols), d);
      const zfull = new Float64Array(n); cols.forEach((c, i) => { zfull[c] = z.data[i]; });
      if (cols.every((c) => zfull[c] > 0)) { for (let i = 0; i < n; i++) x[i] = zfull[i]; break; }
      let alpha = Infinity; for (const c of cols) if (zfull[c] <= 0) alpha = Math.min(alpha, x[c] / (x[c] - zfull[c]));
      for (let i = 0; i < n; i++) x[i] += alpha * (zfull[i] - x[i]);
      for (const c of [...P]) if (Math.abs(x[c]) < 1e-12) { P.delete(c); Z.add(c); }
    }
  }
  return colVec(Array.from(x));
}

/** General eigenvalues (+ optional eigenvectors) via charpoly + Durand–Kerner. */
export function generalEig(A: Mat, wantVec: boolean): { D: { re: number[]; im: number[] }; V?: Mat } {
  const { re, im } = durandKerner(charpoly(A));
  const order = re.map((_, i) => i).sort((i, j) => re[i] - re[j] || im[i] - im[j]);
  const er = order.map((i) => re[i]), ei = order.map((i) => im[i]);
  if (!wantVec) return { D: { re: er, im: ei } };
  const n = A.rows; const Vre = new Float64Array(n * n), Vim = new Float64Array(n * n);
  for (let c = 0; c < n; c++) { const v = eigVec(A, er[c], ei[c]); for (let r = 0; r < n; r++) { Vre[r + c * n] = v.re[r]; Vim[r + c * n] = v.im[r]; } }
  return { D: { re: er, im: ei }, V: finishComplex(n, n, Vre, Vim) };
}

export function diag(a: Mat): Mat {
  const ai = a.idata;
  if (a.rows === 1 || a.cols === 1) {
    // vector → diagonal matrix
    const n = numel(a);
    const out = zeros(n, n);
    if (ai) out.idata = new Float64Array(n * n);
    for (let i = 0; i < n; i++) { out.data[i + i * n] = a.data[i]; if (ai) out.idata![i + i * n] = ai[i]; }
    return out;
  }
  const n = Math.min(a.rows, a.cols);
  const out = zeros(n, 1);
  if (ai) out.idata = new Float64Array(n);
  for (let i = 0; i < n; i++) { out.data[i] = a.data[i + i * a.rows]; if (ai) out.idata![i] = ai[i + i * a.rows]; }
  return out;
}

/** norm(v) — 2-norm for vectors; matrix norms for p∈{1,2,inf,'fro'}. */
export function norm(a: Mat, p: number | 'inf' | 'fro' = 2): number {
  const ai = a.idata; const mag = (i: number) => (ai ? Math.hypot(a.data[i], ai[i]) : Math.abs(a.data[i]));   // element magnitude (complex-aware)
  const n = a.data.length; const isVec = a.rows === 1 || a.cols === 1;
  if (isVec) {
    if (p === 1) { let s = 0; for (let i = 0; i < n; i++) s += mag(i); return s; }
    if (p === 'inf') { let s = 0; for (let i = 0; i < n; i++) s = Math.max(s, mag(i)); return s; }
    if (p === 'fro' || p === 2) { let s = 0; for (let i = 0; i < n; i++) s += mag(i) ** 2; return Math.sqrt(s); }
    let s = 0; for (let i = 0; i < n; i++) s += Math.pow(mag(i), p as number); return Math.pow(s, 1 / (p as number));
  }
  if (p === 'fro') { let s = 0; for (let i = 0; i < n; i++) s += mag(i) ** 2; return Math.sqrt(s); }
  if (p === 1) { let m = 0; for (let c = 0; c < a.cols; c++) { let s = 0; for (let r = 0; r < a.rows; r++) s += mag(r + c * a.rows); m = Math.max(m, s); } return m; }
  if (p === 'inf') { let m = 0; for (let r = 0; r < a.rows; r++) { let s = 0; for (let c = 0; c < a.cols; c++) s += mag(r + c * a.rows); m = Math.max(m, s); } return m; }
  // p === 2 : largest singular value
  return (ai ? svdC(a) : svd(a)).s[0] ?? 0;
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
/** Economy SVD of a complex matrix via one-sided (complex) Jacobi: A = U·diag(s)·Vᴴ,
 *  U is m×k, V is n×k, k=min(m,n); U,V have orthonormal columns and s ≥ 0 descending. */
export function svdC(A: Mat): { U: Mat; s: number[]; V: Mat } {
  const mm = A.rows, nn = A.cols;
  if (mm < nn) { const r = svdC(ctranspose(A)); return { U: r.V, s: r.s, V: r.U }; }   // A = (Aᴴ)ᴴ
  const br = Float64Array.from(A.data), bi = A.idata ? Float64Array.from(A.idata) : new Float64Array(mm * nn);
  const vr = new Float64Array(nn * nn), vi = new Float64Array(nn * nn); for (let i = 0; i < nn; i++) vr[i + i * nn] = 1;
  for (let sweep = 0; sweep < 60; sweep++) {
    let off = 0;
    for (let p = 0; p < nn - 1; p++) for (let q = p + 1; q < nn; q++) {
      let app = 0, aqq = 0, gr = 0, gi = 0;
      for (let r = 0; r < mm; r++) { const pr = br[r + p * mm], pii = bi[r + p * mm], qr = br[r + q * mm], qi = bi[r + q * mm]; app += pr * pr + pii * pii; aqq += qr * qr + qi * qi; gr += pr * qr + pii * qi; gi += pr * qi - pii * qr; }  // γ = colpᴴ·colq
      const gabs = Math.hypot(gr, gi); if (gabs < 1e-300) continue; off += gabs;
      // rotate column q by e^{-iθ} so γ becomes real-positive, then apply a real Jacobi rotation
      const th = Math.atan2(gi, gr), cph = Math.cos(th), sph = Math.sin(th);
      for (let r = 0; r < mm; r++) { const qr = br[r + q * mm], qi = bi[r + q * mm]; br[r + q * mm] = qr * cph + qi * sph; bi[r + q * mm] = -qr * sph + qi * cph; }
      for (let r = 0; r < nn; r++) { const qr = vr[r + q * nn], qi = vi[r + q * nn]; vr[r + q * nn] = qr * cph + qi * sph; vi[r + q * nn] = -qr * sph + qi * cph; }
      const tau = (app - aqq) / (2 * gabs); const t = Math.sign(tau || 1) / (Math.abs(tau) + Math.sqrt(1 + tau * tau)); const c = 1 / Math.sqrt(1 + t * t), s2 = c * t;
      for (let r = 0; r < mm; r++) { const pr = br[r + p * mm], pii = bi[r + p * mm], qr = br[r + q * mm], qi = bi[r + q * mm]; br[r + p * mm] = c * pr + s2 * qr; bi[r + p * mm] = c * pii + s2 * qi; br[r + q * mm] = -s2 * pr + c * qr; bi[r + q * mm] = -s2 * pii + c * qi; }
      for (let r = 0; r < nn; r++) { const pr = vr[r + p * nn], pii = vi[r + p * nn], qr = vr[r + q * nn], qi = vi[r + q * nn]; vr[r + p * nn] = c * pr + s2 * qr; vi[r + p * nn] = c * pii + s2 * qi; vr[r + q * nn] = -s2 * pr + c * qr; vi[r + q * nn] = -s2 * pii + c * qi; }
    }
    if (off < 1e-15) break;
  }
  const sv: number[] = []; for (let j = 0; j < nn; j++) { let nr = 0; for (let r = 0; r < mm; r++) nr += br[r + j * mm] ** 2 + bi[r + j * mm] ** 2; sv[j] = Math.sqrt(nr); }
  const order = sv.map((_, j) => j).sort((x, y) => sv[y] - sv[x]);
  const Ur = new Float64Array(mm * nn), Ui = new Float64Array(mm * nn), Vr = new Float64Array(nn * nn), Vi = new Float64Array(nn * nn); const s: number[] = [];
  order.forEach((j, k) => { s[k] = sv[j]; const inv = sv[j] > 1e-300 ? 1 / sv[j] : 0; for (let r = 0; r < mm; r++) { Ur[r + k * mm] = br[r + j * mm] * inv; Ui[r + k * mm] = bi[r + j * mm] * inv; } for (let r = 0; r < nn; r++) { Vr[r + k * nn] = vr[r + j * nn]; Vi[r + k * nn] = vi[r + j * nn]; } });
  return { U: finishComplex(mm, nn, Ur, Ui), s, V: finishComplex(nn, nn, Vr, Vi) };
}
export function svd(A: Mat): { U: Mat; s: number[]; V: Mat } {
  const m = A.rows, n = A.cols;
  const AtA = matmul(transpose(A), A); // n×n symmetric PSD
  const { values, V } = jacobiEigSym(AtA);
  const order = values.map((v, i) => i).sort((a, b) => values[b] - values[a]);
  const k = Math.min(m, n);
  const s = order.slice(0, k).map((i) => Math.sqrt(Math.max(0, values[i])));   // exactly min(m,n) singular values
  const Vs = zeros(n, n);
  order.forEach((src, dst) => { for (let r = 0; r < n; r++) Vs.data[r + dst * n] = V.data[r + src * n]; });
  // U columns = A v_i / s_i for s_i > 0
  const U = zeros(m, m);
  const tol = 1e-12 * (s[0] || 1);
  for (let j = 0; j < k; j++) {
    if (s[j] > tol) for (let r = 0; r < m; r++) { let d = 0; for (let c = 0; c < n; c++) d += A.data[r + c * m] * Vs.data[c + j * n]; U.data[r + j * m] = d / s[j]; }
  }
  completeOrthoBasis(U, m);   // fill zero/missing columns (left null space) so U is a valid orthogonal matrix
  return { U, s, V: Vs };
}
/** Fill any (near-)zero columns of an m×m matrix with vectors that complete an
 *  orthonormal basis (modified Gram-Schmidt against the existing columns). */
function completeOrthoBasis(U: Mat, m: number): void {
  const cols: number[][] = [];
  const colOf = (j: number) => { const c: number[] = []; for (let r = 0; r < m; r++) c.push(U.data[r + j * m]); return c; };
  const norm2 = (v: number[]) => Math.sqrt(v.reduce((a, x) => a + x * x, 0));
  for (let j = 0; j < m; j++) { const c = colOf(j); if (norm2(c) > 1e-10) cols.push(c); }
  for (let j = 0; j < m; j++) {
    if (norm2(colOf(j)) > 1e-10) continue;   // already a real column
    for (let e = 0; e < m; e++) {
      const v = new Array(m).fill(0); v[e] = 1;
      for (const c of cols) { let dot = 0; for (let r = 0; r < m; r++) dot += v[r] * c[r]; for (let r = 0; r < m; r++) v[r] -= dot * c[r]; }
      const nrm = norm2(v);
      if (nrm > 1e-8) { for (let r = 0; r < m; r++) { v[r] /= nrm; U.data[r + j * m] = v[r]; } cols.push(v); break; }
    }
  }
}

export function rankOf(A: Mat, tol?: number): number {
  // one-sided Jacobi (svdC) resolves tiny singular values with high relative accuracy;
  // the AtA-based svd loses half the digits and overcounts rank for singular matrices (e.g. magic(4)).
  const { s } = svdC(A);
  const t = tol ?? (Math.max(A.rows, A.cols) * (s[0] || 0) * 2.220446049250313e-16);
  return s.filter((x) => x > t).length;
}
export function cond(A: Mat): number { const { s } = svd(A); const mn = s[s.length - 1]; return mn === 0 ? Infinity : s[0] / mn; }
/** MATLAB-style "close to singular" message for a square matrix solved via backslash, or null
 *  if A is well-conditioned (rcond ≥ eps), not square, or complex (cond here is real-only). */
export function illConditionWarning(A: Mat): string | null {
  if (A.rows !== A.cols || A.rows < 1 || A.isChar || A.idata) return null;
  const c = cond(A);
  const rc = Number.isFinite(c) && c !== 0 ? 1 / c : 0;
  if (rc >= Number.EPSILON) return null;
  return rc === 0
    ? 'Matrix is singular to working precision.'
    : `Matrix is close to singular or badly scaled. Results may be inaccurate. RCOND = ${rc.toExponential(6)}.`;
}
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

/** Rational null-space basis (MATLAB `null(A,'rational')`): from rref, one basis
 *  vector per free column with 1 in the free position and -R(pivot,free) elsewhere. */
export function nullspaceRational(A: Mat): Mat {
  const R = rref(A); const m = R.rows, n = R.cols;
  const pivotCol: number[] = []; const isPivot = new Array<boolean>(n).fill(false);
  for (let r = 0; r < m; r++) {
    let lead = -1;
    for (let c = 0; c < n; c++) if (Math.abs(R.data[r + c * m]) > 1e-10) { lead = c; break; }
    if (lead >= 0) { pivotCol.push(lead); isPivot[lead] = true; }
  }
  const free: number[] = []; for (let c = 0; c < n; c++) if (!isPivot[c]) free.push(c);
  const N = zeros(n, free.length);
  free.forEach((f, dst) => {
    N.data[f + dst * n] = 1;
    pivotCol.forEach((p, ri) => { N.data[p + dst * n] = -R.data[ri + f * m]; });
  });
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
