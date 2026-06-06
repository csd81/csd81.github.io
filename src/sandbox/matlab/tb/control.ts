// Control System Toolbox — LTI models as generic ClassV objects (tf/ss/zpk) plus algebraic
// analysis (pole/zero/dcgain/isstable) and model conversions (tf2zp/zp2tf). Validated against
// the live Control System Toolbox. See plan §1 (ClassV) / §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isObject, makeObject, scalar, bool, colVec, rowVec, toArray, asScalar, asString, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Roots of a real-coefficient polynomial (descending coeffs) via Durand-Kerner. */
function polyRoots(coeffs: number[]): { re: number[]; im: number[] } {
  let c = coeffs.slice(); while (c.length > 1 && Math.abs(c[0]) < 1e-300) c.shift();
  let trail = 0; while (c.length > 1 && Math.abs(c[c.length - 1]) < 1e-300) { c.pop(); trail++; }
  const n = c.length - 1; const re: number[] = [], im: number[] = [];
  if (n >= 1) {
    const a = c.map((v) => v / c[0]); const pr = new Array(n), pi = new Array(n);
    for (let k = 0; k < n; k++) { const ang = (2 * Math.PI * k) / n + 0.4; pr[k] = 1.2 * Math.cos(ang); pi[k] = 1.2 * Math.sin(ang); }
    for (let it = 0; it < 600; it++) {
      let maxd = 0;
      for (let k = 0; k < n; k++) {
        let vr = a[0], vi = 0; for (let j = 1; j <= n; j++) { const nr = vr * pr[k] - vi * pi[k] + a[j]; vi = vr * pi[k] + vi * pr[k]; vr = nr; }
        let dr = 1, di = 0; for (let j = 0; j < n; j++) if (j !== k) { const er = pr[k] - pr[j], ei = pi[k] - pi[j]; const nr = dr * er - di * ei; di = dr * ei + di * er; dr = nr; }
        const dd = dr * dr + di * di || 1e-300; const qr = (vr * dr + vi * di) / dd, qi = (vi * dr - vr * di) / dd;
        pr[k] -= qr; pi[k] -= qi; maxd = Math.max(maxd, Math.hypot(qr, qi));
      }
      if (maxd < 1e-14) break;
    }
    for (let k = 0; k < n; k++) { re.push(Math.abs(pr[k]) < 1e-9 ? 0 : pr[k]); im.push(Math.abs(pi[k]) < 1e-9 ? 0 : pi[k]); }
  }
  for (let z = 0; z < trail; z++) { re.push(0); im.push(0); }
  return { re, im };
}
/** Expand Π(s − rₖ) → real polynomial coefficients (descending). */
function polyFromRoots(rr: number[], ri: number[]): number[] {
  let cr = [1], ci = [0];
  for (let k = 0; k < rr.length; k++) { const nr = new Array(cr.length + 1).fill(0), ni = new Array(cr.length + 1).fill(0); for (let j = 0; j < cr.length; j++) { nr[j] += cr[j]; ni[j] += ci[j]; nr[j + 1] -= cr[j] * rr[k] - ci[j] * ri[k]; ni[j + 1] -= cr[j] * ri[k] + ci[j] * rr[k]; } cr = nr; ci = ni; }
  return cr.map((v) => (Math.abs(v) < 1e-12 ? 0 : v));
}
/** Sort roots ascending by real part then imaginary (MATLAB pole/zero order). */
function sortRoots(r: { re: number[]; im: number[] }): { re: number[]; im: number[] } {
  const idx = r.re.map((_, i) => i).sort((a, b) => r.re[a] - r.re[b] || r.im[a] - r.im[b]);
  return { re: idx.map((i) => r.re[i]), im: idx.map((i) => r.im[i]) };
}
const getNumDen = (v: Value): { num: number[]; den: number[] } => {
  if (isObject(v) && v.className === 'tf') return { num: toArray(v.props.get('num') as Mat), den: toArray(v.props.get('den') as Mat) };
  throw new Error('expected a tf model');
};
function rootsValue(r: { re: number[]; im: number[] }): Value { const c = colVec(r.re); if (r.im.some((x) => x !== 0)) c.idata = Float64Array.from(r.im); return c; }

// ── small dense-matrix + polynomial helpers ──
function matRows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }
function fromRows(rows: number[][]): Mat { const R = rows.length, C = R ? rows[0].length : 0; const o = { kind: 'num' as const, rows: R, cols: C, data: new Float64Array(R * C) } as Mat; for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) o.data[r + c * R] = rows[r][c]; return o; }
const mmul = (A: number[][], B: number[][]): number[][] => { const n = A.length, m = B[0].length, p = B.length; const C: number[][] = []; for (let i = 0; i < n; i++) { C[i] = []; for (let j = 0; j < m; j++) { let s = 0; for (let k = 0; k < p; k++) s += A[i][k] * B[k][j]; C[i][j] = s; } } return C; };
const eye = (n: number): number[][] => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
/** Dense matrix inverse via Gauss-Jordan with partial pivoting. */
function matInv(A: number[][]): number[][] {
  const n = A.length; const M = A.map((r, i) => [...r, ...eye(n)[i]]);
  for (let col = 0; col < n; col++) {
    let piv = col; for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    if (Math.abs(M[piv][col]) < 1e-300) throw new Error('ss2ss: transformation matrix T is singular');
    [M[col], M[piv]] = [M[piv], M[col]];
    const d = M[col][col]; for (let j = 0; j < 2 * n; j++) M[col][j] /= d;
    for (let r = 0; r < n; r++) if (r !== col) { const f = M[r][col]; for (let j = 0; j < 2 * n; j++) M[r][j] -= f * M[col][j]; }
  }
  return M.map((row) => row.slice(n));
}
const traceM = (A: number[][]) => A.reduce((s, row, i) => s + row[i], 0);
function polyConv(a: number[], b: number[]): number[] { const o = new Array(a.length + b.length - 1).fill(0); for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) o[i + j] += a[i] * b[j]; return o; }
function polyAdd(a: number[], b: number[]): number[] { const n = Math.max(a.length, b.length); const o = new Array(n).fill(0); for (let i = 0; i < a.length; i++) o[n - a.length + i] += a[i]; for (let i = 0; i < b.length; i++) o[n - b.length + i] += b[i]; return o; }
const tfModel = (num: number[], den: number[]): Value => makeObject('tf', { num: rowVec(num), den: rowVec(den) });

// ── frequency response (bode) helpers ──
/** Evaluate a real polynomial (descending coeffs) at s=jω → complex (re,im). */
function polyValJw(coeffs: number[], w: number): { re: number; im: number } {
  // Horner in s=jω: powers of (jω) cycle 1, jω, −ω², −jω³, …
  let re = 0, im = 0;
  for (let k = 0; k < coeffs.length; k++) { const nr = re * 0 - im * w + coeffs[k]; im = re * w + im * 0; re = nr; }
  return { re, im };
}
/** Get (num,den) for tf, or convert an ss model to (num,den) via Faddeev-LeVerrier (SISO). */
function getNumDenAny(v: Value): { num: number[]; den: number[] } {
  if (isObject(v) && v.className === 'tf') return getNumDen(v);
  if (isObject(v) && v.className === 'ss') {
    const A = matRows(m(v.props.get('A') as Mat)), B = matRows(m(v.props.get('B') as Mat)), C = matRows(m(v.props.get('C') as Mat));
    const D = v.props.has('D') ? asScalar(v.props.get('D') as Value) : 0; const N = A.length;
    if (N === 0) return { num: [D], den: [1] };
    const p = [1]; let M = eye(N); const Ms = [eye(N)];
    for (let k = 1; k <= N; k++) { const AM = mmul(A, M); p[k] = -traceM(AM) / k; M = AM.map((row, i) => row.map((vv, j) => vv + (i === j ? p[k] : 0))); if (k < N) Ms.push(M); }
    const den = p; const numAdj = new Array(N).fill(0);
    for (let k = 0; k < N; k++) { const CMk = mmul(mmul(C, Ms[k]), B); numAdj[k] = CMk[0][0]; }
    const num = polyAdd(numAdj, den.map((vv) => vv * D));
    return { num, den };
  }
  throw new Error('bode: expected a tf or ss model');
}
/** Default log-spaced frequency grid (rad/s) when w is omitted. */
function autoFreqGrid(num: number[], den: number[]): number[] {
  const feats: number[] = [];
  for (const r of [polyRoots(num), polyRoots(den)]) for (let i = 0; i < r.re.length; i++) { const mag = Math.hypot(r.re[i], r.im[i]); if (mag > 0) feats.push(mag); }
  let lo = -1, hi = 2;
  if (feats.length) { const mn = Math.min(...feats), mx = Math.max(...feats); lo = Math.floor(Math.log10(mn)) - 1; hi = Math.ceil(Math.log10(mx)) + 1; }
  const npts = 200; const grid: number[] = [];
  for (let i = 0; i < npts; i++) grid.push(10 ** (lo + ((hi - lo) * i) / (npts - 1)));
  return grid;
}
/** [mag,phase,wout] frequency response of a SISO tf/ss over grid w. phase in degrees (unwrapped). */
function bodeData(sys: Value, wArg: Value | undefined): { mag: number[]; phase: number[]; w: number[] } {
  const { num, den } = getNumDenAny(sys);
  const w = wArg && isMatLike(wArg) ? toArray(m(wArg)) : autoFreqGrid(num, den);
  const mag: number[] = [], phaseRaw: number[] = [];
  for (const wi of w) {
    const n = polyValJw(num, wi), d = polyValJw(den, wi);
    const dd = d.re * d.re + d.im * d.im || 1e-300;
    const hr = (n.re * d.re + n.im * d.im) / dd, hi = (n.im * d.re - n.re * d.im) / dd;
    mag.push(Math.hypot(hr, hi)); phaseRaw.push((Math.atan2(hi, hr) * 180) / Math.PI);
  }
  // Unwrap phase (degrees): remove ±360° jumps.
  const phase = phaseRaw.slice();
  for (let i = 1; i < phase.length; i++) { let d = phase[i] - phase[i - 1]; while (d > 180) { phase[i] -= 360; d -= 360; } while (d < -180) { phase[i] += 360; d += 360; } }
  return { mag, phase, w };
}
const isMatLike = (v: Value): boolean => !!v && !isObject(v);

// ── LQR / Riccati helpers ──
const matT = (A: number[][]): number[][] => A[0].map((_, j) => A.map((r) => r[j]));
const matSub = (A: number[][], B: number[][]): number[][] => A.map((r, i) => r.map((v, j) => v - B[i][j]));
const matAdd2 = (A: number[][], B: number[][]): number[][] => A.map((r, i) => r.map((v, j) => v + B[i][j]));
const symmetrize = (A: number[][]): number[][] => A.map((r, i) => r.map((v, j) => (v + A[j][i]) / 2));
/** Reduce LQR with cross term N to standard form: A←A−B R⁻¹ N', Q←Q−N R⁻¹ N'. K←K+R⁻¹N'. */
function reduceCross(A: number[][], B: number[][], Q: number[][], Ri: number[][], N: number[][] | null): { A: number[][]; Q: number[][]; corr: number[][] | null } {
  if (!N) return { A, Q, corr: null };
  const Nt = matT(N); const RiNt = mmul(Ri, Nt);      // R⁻¹ N'
  return { A: matSub(A, mmul(B, RiNt)), Q: matSub(Q, mmul(N, RiNt)), corr: RiNt };
}
const matScale = (A: number[][], s: number): number[][] => A.map((r) => r.map((v) => v * s));
const eyeN = (n: number): number[][] => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
/** Least-squares solve of a (rows×n) overdetermined system M·X = R via the normal equations
 *  (MᵀM)X = MᵀR (M is well-conditioned here, spanning an invariant subspace). */
function lstsq(M: number[][], R: number[][]): number[][] {
  const Mt = matT(M); return mmul(matInv(mmul(Mt, M)), mmul(Mt, R));
}
/** Determinant of a dense matrix via LU with partial pivoting (used for sign-function scaling). */
function matDet(A: number[][]): number {
  const n = A.length; const M = A.map((r) => r.slice()); let d = 1;
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (piv !== c) { [M[c], M[piv]] = [M[piv], M[c]]; d = -d; }
    if (M[c][c] === 0) return 0;
    d *= M[c][c];
    for (let r = c + 1; r < n; r++) { const f = M[r][c] / M[c][c]; for (let j = c; j < n; j++) M[r][j] -= f * M[c][j]; }
  }
  return d;
}
/** Solve the continuous-time algebraic Riccati equation A'X+XA−XBR⁻¹B'X+Q=0 via the matrix-sign
 *  function (Roberts' method). H=[A,−G;−Q,−A'] (G=BR⁻¹B'); the determinant-scaled Newton iteration
 *  Z←½(c·Z + c⁻¹·Z⁻¹) with c=|det Z|^{−1/N} converges quadratically to W=sign(H). The optimal
 *  determinantal scaling keeps every iterate well-conditioned, so the iteration converges even for
 *  *unstable* A (the earlier norm-ratio scaling collapsed c→0 and blew the iterate up to NaN).
 *  With W partitioned into n×n blocks, the stabilizing X solves the overdetermined system
 *  [W12; W22+I]·X = −[W11+I; W21] (least squares — the leading n columns of I−W span the stable
 *  invariant subspace). */
function care(A: number[][], B: number[][], Q: number[][], Ri: number[][]): number[][] {
  const n = A.length; const N = 2 * n; const G = mmul(mmul(B, Ri), matT(B)); const At = matT(A);
  let Z: number[][] = [];
  for (let i = 0; i < N; i++) {
    Z[i] = [];
    for (let j = 0; j < N; j++) {
      if (i < n && j < n) Z[i][j] = A[i][j];
      else if (i < n) Z[i][j] = -G[i][j - n];
      else if (j < n) Z[i][j] = -Q[i - n][j];
      else Z[i][j] = -At[i - n][j - n];
    }
  }
  for (let it = 0; it < 200; it++) {
    const Zi = matInv(Z);
    const c = Math.pow(Math.abs(matDet(Z)), -1 / N) || 1;   // optimal determinantal scaling
    const Zn = matScale(matAdd2(matScale(Z, c), matScale(Zi, 1 / c)), 0.5);
    let d = 0; for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) d = Math.max(d, Math.abs(Zn[i][j] - Z[i][j]));
    Z = Zn; if (d < 1e-13) break;
  }
  // Z = sign(H). Stabilizing X solves [W12; W22+I] X = −[W11+I; W21].
  const Mlhs: number[][] = [], Rrhs: number[][] = [];
  for (let i = 0; i < n; i++) { Mlhs[i] = []; Rrhs[i] = []; for (let j = 0; j < n; j++) { Mlhs[i][j] = Z[i][n + j]; Rrhs[i][j] = -(Z[i][j] + (i === j ? 1 : 0)); } }
  for (let i = 0; i < n; i++) { Mlhs[n + i] = []; Rrhs[n + i] = []; for (let j = 0; j < n; j++) { Mlhs[n + i][j] = Z[n + i][n + j] + (i === j ? 1 : 0); Rrhs[n + i][j] = -Z[n + i][j]; } }
  return symmetrize(lstsq(Mlhs, Rrhs));
}
/** Solve the discrete-time algebraic Riccati equation A'XA−X−A'XB(R+B'XB)⁻¹B'XA+Q=0
 *  by the fixed-point Riccati iteration (converges for stabilizable/detectable systems). */
function dare(A: number[][], B: number[][], Q: number[][], Rm: number[][]): number[][] {
  const n = A.length; const At = matT(A), Bt = matT(B);
  let X = Q.map((r) => r.slice());
  for (let it = 0; it < 10000; it++) {
    const AtX = mmul(At, X);
    const BtXB = matAdd2(Rm, mmul(mmul(Bt, X), B));      // R + B'XB
    const BtXA = mmul(mmul(Bt, X), A);                   // B'XA
    const Xn = symmetrize(matAdd2(matSub(mmul(AtX, A), mmul(mmul(matT(BtXA), matInv(BtXB)), BtXA)), Q));
    let d = 0, s = 0; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { d = Math.max(d, Math.abs(Xn[i][j] - X[i][j])); s = Math.max(s, Math.abs(Xn[i][j])); }
    X = Xn;
    if (d <= 1e-15 * (s + 1)) break;
  }
  return X;
}
/** Discrete Riccati with cross term N (cost x'Qx+u'Ru+2x'Nu): solve via reduction
 *  Ā=A−B R⁻¹ N', Q̄=Q−N R⁻¹ N', X=dare(Ā,B,Q̄,R); gain K=(R+B'XB)⁻¹(B'XA+N'). Returns {X,K}. */
function dareN(A: number[][], B: number[][], Q: number[][], Rm: number[][], N: number[][]): { X: number[][]; K: number[][] } {
  const Ri = matInv(Rm); const Nt = matT(N); const RiNt = mmul(Ri, Nt);
  const Abar = matSub(A, mmul(B, RiNt)); const Qbar = matSub(Q, mmul(N, RiNt));
  const X = dare(Abar, B, Qbar, Rm); const Bt = matT(B);
  const K = mmul(matInv(matAdd2(Rm, mmul(mmul(Bt, X), B))), matAdd2(mmul(mmul(Bt, X), A), Nt));
  return { X, K };
}
/** Closed-loop eigenvalues of A−BK as a column Value (complex when needed). The characteristic
 *  polynomial is formed via Faddeev–LeVerrier and its roots found with polyRoots (Durand–Kerner);
 *  this is more reliable than reading them off the real-Schur diagonal blocks, which can converge
 *  to a spurious quasi-triangular clustering for some closely-spaced real spectra. */
function eigClosed(Acl: number[][]): Value {
  const N = Acl.length;
  if (N === 0) return colVec([]);
  // Faddeev–LeVerrier: characteristic poly p (descending coeffs, leading 1).
  const p = [1]; let Mk = eye(N);
  for (let k = 1; k <= N; k++) { const AM = mmul(Acl, Mk); p[k] = -traceM(AM) / k; Mk = AM.map((row, i) => row.map((vv, j) => vv + (i === j ? p[k] : 0))); }
  const e = sortRoots(polyRoots(p));
  const c = colVec(e.re); if (e.im.some((x) => x !== 0)) c.idata = Float64Array.from(e.im);
  return c;
}
/** Common (A,B,Q,R[,N]) parsing for lqr/dlqr → matrices. */
function lqrArgs(a: Value[]): { A: number[][]; B: number[][]; Q: number[][]; Ri: number[][]; Rm: number[][]; N: number[][] | null } {
  const A = matRows(m(a[0])), B = matRows(m(a[1])), Q = matRows(m(a[2]));
  const Rm = matRows(m(a[3])); const Ri = matInv(Rm);
  const N = a.length >= 5 ? matRows(m(a[4])) : null;
  return { A, B, Q, Ri, Rm, N };
}
/** Build [K,S,e] outputs for nargout. */
function lqrResult(K: number[][], S: number[][], Acl: number[][], n: number): Promise<Value[]> {
  const out: Value[] = [fromRows(K)];
  if (n >= 2) out.push(fromRows(S));
  if (n >= 3) out.push(eigClosed(Acl));
  return Promise.resolve(out);
}

// ── matrix exponential (scaling & squaring with [6/6] Padé) ──
function matExp(A: number[][]): number[][] {
  const n = A.length;
  if (n === 0) return [];
  // scaling: choose s so that ‖A/2^s‖∞ ≤ 1/2
  let normInf = 0;
  for (let i = 0; i < n; i++) { let s = 0; for (let j = 0; j < n; j++) s += Math.abs(A[i][j]); normInf = Math.max(normInf, s); }
  let s = 0; while (normInf / 2 ** s > 0.5) s++;
  const Asc = matScale(A, 1 / 2 ** s);
  // [6/6] Padé: N = Σ c_k A^k, D = Σ (-1)^k c_k A^k
  const c = [1, 1 / 2, 5 / 44, 1 / 66, 1 / 792, 1 / 15840, 1 / 665280];
  let Ak = eye(n); let Np = matScale(eye(n), c[0]); let Dp = matScale(eye(n), c[0]);
  for (let k = 1; k <= 6; k++) {
    Ak = mmul(Ak, Asc);
    Np = matAdd2(Np, matScale(Ak, c[k]));
    Dp = matAdd2(Dp, matScale(Ak, (k % 2 ? -1 : 1) * c[k]));
  }
  let E = mmul(matInv(Dp), Np);
  for (let i = 0; i < s; i++) E = mmul(E, E);   // squaring
  return E;
}

// ── Lyapunov / Sylvester (Kronecker linear-solve) helpers ──
/** Solve a dense linear system M x = b (column vectors) via Gauss-Jordan (matInv). */
function linSolve(M: number[][], b: number[]): number[] {
  const Mi = matInv(M); return Mi.map((row) => row.reduce((s, v, j) => s + v * b[j], 0));
}
/** Kronecker product A ⊗ B (both dense). */
function kron(A: number[][], B: number[][]): number[][] {
  const ar = A.length, ac = A[0].length, br = B.length, bc = B[0].length;
  const O: number[][] = Array.from({ length: ar * br }, () => new Array(ac * bc).fill(0));
  for (let i = 0; i < ar; i++) for (let j = 0; j < ac; j++) for (let p = 0; p < br; p++) for (let q = 0; q < bc; q++) O[i * br + p][j * bc + q] = A[i][j] * B[p][q];
  return O;
}
/** Column-major vec of a matrix → flat array. */
function vecCM(X: number[][]): number[] { const r = X.length, c = X[0].length; const o: number[] = []; for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) o.push(X[i][j]); return o; }
/** Inverse of vecCM into an r×c matrix. */
function unvecCM(v: number[], r: number, c: number): number[][] { const O: number[][] = Array.from({ length: r }, () => new Array(c).fill(0)); let k = 0; for (let j = 0; j < c; j++) for (let i = 0; i < r; i++) O[i][j] = v[k++]; return O; }
/** Solve continuous Sylvester A X + X B + C = 0 for X (vec: (I⊗A + Bᵀ⊗I) vecX = −vecC). */
function sylvSolve(A: number[][], B: number[][], C: number[][]): number[][] {
  const n = A.length, m2 = B.length; const In = eyeN(n), Im = eyeN(m2);
  const M = matAdd2(kron(Im, A), kron(matT(B), In));
  const x = linSolve(M, vecCM(C).map((v) => -v));
  return unvecCM(x, n, m2);
}
/** Solve continuous Lyapunov A X + X Aᵀ + Q = 0 for X. */
function lyapSolve(A: number[][], Q: number[][]): number[][] { return symmetrize(sylvSolve(A, matT(A), Q)); }
/** Solve discrete Lyapunov A X Aᵀ − X + Q = 0 (vec: (A⊗A − I) vecX = −vecQ). */
function dlyapSolve(A: number[][], Q: number[][]): number[][] {
  const n = A.length; const I = eyeN(n * n);
  const M = matSub(kron(A, A), I);
  const x = linSolve(M, vecCM(Q).map((v) => -v));
  return symmetrize(unvecCM(x, n, n));
}
/** Upper-triangular Cholesky R (R'·R = X) of a symmetric positive-definite matrix. */
function cholUpper(X: number[][]): number[][] {
  const n = X.length; const R: number[][] = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    let s = X[j][j]; for (let k = 0; k < j; k++) s -= R[k][j] * R[k][j];
    if (s <= 0) throw new Error('lyapchol: solution is not positive definite');
    R[j][j] = Math.sqrt(s);
    for (let i = j + 1; i < n; i++) { let t = X[j][i]; for (let k = 0; k < j; k++) t -= R[k][j] * R[k][i]; R[j][i] = t / R[j][j]; }
  }
  return R;
}

/** c2d via ZOH: discretise (A,B) of the tf's controllable-canonical realisation using
 *  expm([[A,B];[0,0]])=[[Ad,Bd];[0,I]], then convert (Ad,Bd,C,D) back to tf. */
function c2dZoh(num: number[], den: number[], Ts: number): { num: number[]; den: number[] } {
  // controllable-canonical realization (matches tf2ss above)
  const g = den[0] || 1; const d = den.map((v) => v / g); let nm = num.map((v) => v / g);
  while (nm.length < d.length) nm.unshift(0);
  const no = d.length - 1; const D = nm[0];
  if (no === 0) return { num: [D], den: [1] };
  const A: number[][] = []; for (let i = 0; i < no; i++) { A[i] = []; for (let j = 0; j < no; j++) A[i][j] = i === 0 ? -d[j + 1] : (i - 1 === j ? 1 : 0); }
  const B = Array.from({ length: no }, (_, i) => [i === 0 ? 1 : 0]);
  const C = [Array.from({ length: no }, (_, j) => nm[j + 1] - D * d[j + 1])];
  // augmented [[A B];[0 0]]
  const M: number[][] = [];
  for (let i = 0; i < no + 1; i++) { M[i] = []; for (let j = 0; j < no + 1; j++) M[i][j] = i < no && j < no ? A[i][j] * Ts : (i < no && j === no ? B[i][0] * Ts : 0); }
  const E = matExp(M);
  const Ad: number[][] = [], Bd: number[][] = [];
  for (let i = 0; i < no; i++) { Ad[i] = []; for (let j = 0; j < no; j++) Ad[i][j] = E[i][j]; Bd[i] = [E[i][no]]; }
  // (Ad,Bd,C,D) → tf via Faddeev-LeVerrier
  return ss2tfFL(Ad, Bd, C, D);
}
/** SISO ss→tf (Faddeev-LeVerrier), shared by c2d. */
function ss2tfFL(A: number[][], B: number[][], C: number[][], D: number): { num: number[]; den: number[] } {
  const N = A.length; const p = [1]; let M = eye(N); const Ms = [eye(N)];
  for (let k = 1; k <= N; k++) { const AM = mmul(A, M); p[k] = -traceM(AM) / k; M = AM.map((row, i) => row.map((v, j) => v + (i === j ? p[k] : 0))); if (k < N) Ms.push(M); }
  const den = p; const numAdj = new Array(N).fill(0);
  for (let k = 0; k < N; k++) { const CMk = mmul(mmul(C, Ms[k]), B); numAdj[k] = CMk[0][0]; }
  const num = polyAdd(numAdj, den.map((v) => v * D));
  return { num: num.map((v) => (Math.abs(v) < 1e-12 ? 0 : v)), den: den.map((v) => (Math.abs(v) < 1e-12 ? 0 : v)) };
}
/** c2d via Tustin (bilinear): s = (2/Ts)(z-1)/(z+1). Substitute into num(s)/den(s). */
function c2dTustin(num: number[], den: number[], Ts: number): { num: number[]; den: number[] } {
  // Pad numerator to denominator length so both are degree n.
  const nn = num.slice(), dd = den.slice();
  while (nn.length < dd.length) nn.unshift(0);
  const n = dd.length - 1; const a = 2 / Ts;
  // For a polynomial p(s)=Σ p_k s^{n-k}, substitute s=a(z-1)/(z+1):
  //   p(s)·(z+1)^n = Σ p_k · [a(z-1)]^{n-k} · (z+1)^k   (polynomials in z, descending)
  const accum = (coeffs: number[]): number[] => {
    let res = new Array(n + 1).fill(0);
    for (let k = 0; k <= n; k++) {
      // term = coeffs[k] * (a(z-1))^{n-k} * (z+1)^k
      let term = [coeffs[k] * a ** (n - k)];
      const zm1 = [1, -1], zp1 = [1, 1];
      for (let i = 0; i < n - k; i++) term = polyConv(term, zm1);
      for (let i = 0; i < k; i++) term = polyConv(term, zp1);
      res = polyAdd(res, term);
    }
    return res;
  };
  let bn = accum(nn), an = accum(dd);
  const lead = an[0] || 1; bn = bn.map((v) => v / lead); an = an.map((v) => v / lead);
  return { num: bn.map((v) => (Math.abs(v) < 1e-12 ? 0 : v)), den: an.map((v) => (Math.abs(v) < 1e-12 ? 0 : v)) };
}

/** Refine a frequency crossing by bisection on f(w). */
function bisect(f: (w: number) => number, lo: number, hi: number): number {
  let flo = f(lo);
  for (let it = 0; it < 200; it++) {
    const mid = 0.5 * (lo + hi); const fm = f(mid);
    if (fm === 0 || (hi - lo) < 1e-13 * Math.max(1, mid)) return mid;
    if ((flo < 0) === (fm < 0)) { lo = mid; flo = fm; } else hi = mid;
  }
  return 0.5 * (lo + hi);
}
/** L(jw) of a tf → complex value. */
function evalLjw(num: number[], den: number[], w: number): { re: number; im: number; mag: number; phaseDeg: number } {
  const nv = polyValJw(num, w), dv = polyValJw(den, w);
  const dd = dv.re * dv.re + dv.im * dv.im || 1e-300;
  const re = (nv.re * dv.re + nv.im * dv.im) / dd, im = (nv.im * dv.re - nv.re * dv.im) / dd;
  return { re, im, mag: Math.hypot(re, im), phaseDeg: (Math.atan2(im, re) * 180) / Math.PI };
}
/** margin: find phase (−180°) and gain (0 dB) crossovers; return [Gm,Pm,Wcg,Wcp]. */
function marginData(num: number[], den: number[]): { Gm: number; Pm: number; Wcg: number; Wcp: number } {
  // dense log grid for bracketing
  const grid: number[] = []; for (let i = 0; i <= 8000; i++) grid.push(10 ** (-4 + (8 * i) / 8000));
  const L = grid.map((w) => evalLjw(num, den, w));
  // --- phase crossover: L(jw) real & negative ⇔ Im[L]=0 with Re[L]<0 (phase = ±180°) ---
  let Wcg = NaN, Gm = Infinity;
  for (let i = 1; i < grid.length; i++) {
    const a = L[i - 1].im, b = L[i].im;
    if (a === 0 || (a < 0) !== (b < 0)) {
      const wc = bisect((w) => evalLjw(num, den, w).im, grid[i - 1], grid[i]);
      const lc = evalLjw(num, den, wc);
      if (lc.re < 0) { const gm = 1 / lc.mag; if (gm > 0 && gm < Gm) { Gm = gm; Wcg = wc; } }
    }
  }
  const gainDb = grid.map((_, i) => L[i].mag);
  // --- gain crossover: mag passes through 1 ---
  let Wcp = NaN, Pm = Infinity;
  for (let i = 1; i < grid.length; i++) {
    const a = gainDb[i - 1] - 1, b = gainDb[i] - 1;
    if (a === 0 || (a < 0) !== (b < 0)) {
      const wc = bisect((w) => evalLjw(num, den, w).mag - 1, grid[i - 1], grid[i]);
      const L = evalLjw(num, den, wc);
      let pm = L.phaseDeg + 180; // 180 + phase
      while (pm > 180) pm -= 360; while (pm < -180) pm += 360;
      if (Math.abs(pm) < Math.abs(Pm) || !isFinite(Pm)) { Pm = pm; Wcp = wc; }
    }
  }
  if (!isFinite(Pm)) { Pm = Infinity; Wcp = NaN; }
  return { Gm, Pm, Wcg, Wcp };
}

/** stepinfo from a (t,y) response: linear-interpolated rise/settle, parabolic-refined peak. */
function stepInfoFromResp(t: number[], y: number[], yfinal: number, yinit: number): Map<string, number> {
  const st = 0.02, rtLo = 0.1, rtHi = 0.9;
  const dev = yfinal - yinit;
  const interpCross = (lvl: number): number => {
    for (let i = 1; i < y.length; i++) {
      const a = y[i - 1] - lvl, b = y[i] - lvl;
      if (a === 0) return t[i - 1];
      if ((a < 0) !== (b < 0)) return t[i - 1] + (t[i] - t[i - 1]) * (lvl - y[i - 1]) / (y[i] - y[i - 1]);
    }
    return NaN;
  };
  const yLo = yinit + rtLo * dev, yHi = yinit + rtHi * dev;
  const tLo = interpCross(yLo), tHi = interpCross(yHi);
  const RiseTime = tHi - tLo;
  // SettlingMin/Max: extrema once response first reaches rtHi level
  let iHi = 0; while (iHi < y.length && y[iHi] < yHi) iHi++;
  let sMin = Infinity, sMax = -Infinity;
  for (let i = iHi; i < y.length; i++) { sMin = Math.min(sMin, y[i]); sMax = Math.max(sMax, y[i]); }
  // SettlingTime: last time |y-yfinal| exits the ±st·|dev| band
  const band = st * Math.abs(dev);
  let SettlingTime = 0;
  for (let i = 1; i < y.length; i++) {
    const a = Math.abs(y[i - 1] - yfinal) - band, b = Math.abs(y[i] - yfinal) - band;
    if (a === 0) SettlingTime = t[i - 1];
    else if ((a < 0) !== (b < 0)) SettlingTime = t[i - 1] + (t[i] - t[i - 1]) * (0 - a) / (b - a);
  }
  // Peak deviation |y-yinit|, parabolic refine.
  let pk = -Infinity, ipk = 0;
  for (let i = 0; i < y.length; i++) { const d = Math.abs(y[i] - yinit); if (d > pk) { pk = d; ipk = i; } }
  let Peak = pk, PeakTime = t[ipk];
  if (ipk > 0 && ipk < y.length - 1) {
    const x0 = t[ipk - 1], x1 = t[ipk], x2 = t[ipk + 1];
    const f0 = Math.abs(y[ipk - 1] - yinit), f1 = Math.abs(y[ipk] - yinit), f2 = Math.abs(y[ipk + 1] - yinit);
    const denom = (x0 - x1) * (x0 - x2) * (x1 - x2);
    if (Math.abs(denom) > 1e-300) {
      const A2 = (x2 * (f1 - f0) + x1 * (f0 - f2) + x0 * (f2 - f1)) / denom;
      const B2 = (x2 * x2 * (f0 - f1) + x1 * x1 * (f2 - f0) + x0 * x0 * (f1 - f2)) / denom;
      if (A2 < 0) { const xv = -B2 / (2 * A2); if (xv > x0 && xv < x2) { PeakTime = xv; Peak = f1 - A2 * (x1 - xv) * (x1 - xv); } }
    }
  }
  const Overshoot = dev !== 0 ? Math.max(0, (sMax - yfinal) / Math.abs(dev)) * 100 : 0;
  const Undershoot = dev !== 0 ? Math.max(0, (yinit - sMin) / Math.abs(dev)) * 100 : 0;
  return new Map<string, number>([
    ['RiseTime', RiseTime], ['SettlingTime', SettlingTime], ['SettlingMin', sMin], ['SettlingMax', sMax],
    ['Overshoot', Overshoot], ['Undershoot', Undershoot], ['Peak', Peak], ['PeakTime', PeakTime],
  ]);
}
/** Dense step response of a SISO tf on a fine uniform grid via its ss realization + expm steps. */
function stepResponse(num: number[], den: number[]): { t: number[]; y: number[]; yfinal: number } {
  const g = den[0] || 1; const d = den.map((v) => v / g); let nm = num.map((v) => v / g);
  while (nm.length < d.length) nm.unshift(0);
  const no = d.length - 1; const D = nm[0];
  const yfinal = num[num.length - 1] / den[den.length - 1];
  if (no === 0) return { t: [0, 1], y: [D, D], yfinal: D };
  const A: number[][] = []; for (let i = 0; i < no; i++) { A[i] = []; for (let j = 0; j < no; j++) A[i][j] = i === 0 ? -d[j + 1] : (i - 1 === j ? 1 : 0); }
  const B = Array.from({ length: no }, (_, i) => [i === 0 ? 1 : 0]);
  const C = [Array.from({ length: no }, (_, j) => nm[j + 1] - D * d[j + 1])];
  // settle horizon from slowest pole
  const poles = polyRoots(den); let maxReal = -Infinity, minDecay = Infinity;
  for (let i = 0; i < poles.re.length; i++) { if (poles.re[i] < 0) minDecay = Math.min(minDecay, -poles.re[i]); maxReal = Math.max(maxReal, poles.re[i]); }
  let Tfinal = isFinite(minDecay) && minDecay > 0 ? 8 / minDecay : 40;
  Tfinal = Math.min(Math.max(Tfinal, 5), 500);
  const Nsteps = 40000; const h = Tfinal / Nsteps;
  // discretize for fixed-step propagation: x_{k+1}=Ad x_k + Bd u, u=1 step
  const Maug: number[][] = [];
  for (let i = 0; i < no + 1; i++) { Maug[i] = []; for (let j = 0; j < no + 1; j++) Maug[i][j] = i < no && j < no ? A[i][j] * h : (i < no && j === no ? B[i][0] * h : 0); }
  const E = matExp(Maug);
  const Ad: number[][] = [], Bd: number[][] = [];
  for (let i = 0; i < no; i++) { Ad[i] = []; for (let j = 0; j < no; j++) Ad[i][j] = E[i][j]; Bd[i] = [E[i][no]]; }
  const t: number[] = [], y: number[] = []; let x = new Array(no).fill(0);
  for (let k = 0; k <= Nsteps; k++) {
    let out = D; for (let j = 0; j < no; j++) out += C[0][j] * x[j];
    t.push(k * h); y.push(out);
    const xn = new Array(no).fill(0);
    for (let i = 0; i < no; i++) { let s = Bd[i][0]; for (let j = 0; j < no; j++) s += Ad[i][j] * x[j]; xn[i] = s; }
    x = xn;
  }
  return { t, y, yfinal };
}

/** minreal: cancel coincident num/den roots within tol; rebuild tf. */
function minrealTf(num: number[], den: number[], tol: number): { num: number[]; den: number[] } {
  const z = polyRoots(num), p = polyRoots(den);
  // leading gains
  let i0 = 0; while (i0 < num.length && Math.abs(num[i0]) < 1e-300) i0++;
  let j0 = 0; while (j0 < den.length && Math.abs(den[j0]) < 1e-300) j0++;
  const kn = num[i0] ?? 0, kd = den[j0] ?? 1;
  const zr = z.re.slice(), zi = z.im.slice(), pr = p.re.slice(), pi = p.im.slice();
  const usedP = new Array(pr.length).fill(false);
  const zKeepR: number[] = [], zKeepI: number[] = [], pKeepR: number[] = [], pKeepI: number[] = [];
  for (let a = 0; a < zr.length; a++) {
    let best = -1, bd = tol;
    for (let b = 0; b < pr.length; b++) if (!usedP[b]) { const dist = Math.hypot(zr[a] - pr[b], zi[a] - pi[b]); if (dist <= bd) { bd = dist; best = b; } }
    if (best >= 0) usedP[best] = true; else { zKeepR.push(zr[a]); zKeepI.push(zi[a]); }
  }
  for (let b = 0; b < pr.length; b++) if (!usedP[b]) { pKeepR.push(pr[b]); pKeepI.push(pi[b]); }
  const k = kn / kd;
  let n2 = polyFromRoots(zKeepR, zKeepI).map((v) => v * k);
  let d2 = polyFromRoots(pKeepR, pKeepI);
  // normalize so leading den coeff = 1 (MATLAB minreal returns monic-den scaling implicitly via tf)
  const lead = d2[0] || 1; n2 = n2.map((v) => v / lead); d2 = d2.map((v) => v / lead);
  return { num: n2.map((v) => (Math.abs(v) < 1e-10 ? 0 : v)), den: d2.map((v) => (Math.abs(v) < 1e-10 ? 0 : v)) };
}

export const CONTROL: ToolboxModule = {
  id: 'control',
  name: 'Control System Toolbox',
  docBase: 'https://www.mathworks.com/help/control/ref/',
  builtins: {
    /** tf(num,den) — transfer-function model. */
    tf: (a) => ret(makeObject('tf', a.length >= 3 && isMatLike(a[2]) ? { num: rowVec(toArray(m(a[0]))), den: rowVec(toArray(m(a[1]))), Ts: scalar(asScalar(a[2])) } : { num: rowVec(toArray(m(a[0]))), den: rowVec(toArray(m(a[1]))) })),
    /** ss(A,B,C,D) — state-space model. */
    ss: (a) => ret(makeObject('ss', { A: m(a[0]), B: m(a[1]), C: m(a[2]), D: a.length >= 4 ? m(a[3]) : scalar(0) })),
    /** zpk(z,p,k) — zero-pole-gain model. */
    zpk: (a) => ret(makeObject('zpk', { z: colVec(toArray(m(a[0]))), p: colVec(toArray(m(a[1]))), k: scalar(asScalar(a[2])) })),
    /** pole(sys) — system poles (roots of the denominator). */
    pole: (a) => ret(rootsValue(sortRoots(polyRoots(getNumDen(a[0]).den)))),
    /** zero(sys) — system (transmission) zeros (roots of the numerator). */
    zero: (a) => ret(rootsValue(sortRoots(polyRoots(getNumDen(a[0]).num)))),
    /** dcgain(sys) — steady-state (s=0) gain. */
    dcgain: (a) => { const { num, den } = getNumDen(a[0]); return ret(scalar(num[num.length - 1] / den[den.length - 1])); },
    /** isstable(sys) — true if all poles have negative real part (continuous). */
    isstable: (a) => {
      const sys = a[0]; const r = polyRoots(getNumDen(sys).den);
      const Ts = isObject(sys) && sys.props.has('Ts') ? asScalar(sys.props.get('Ts') as Value) : 0;
      // Discrete (Ts>0): poles strictly inside the unit circle; continuous: in the left half-plane.
      const stable = Ts > 0 ? r.re.every((re, i) => Math.hypot(re, r.im[i]) < 1) : r.re.every((x) => x < 0);
      return ret(bool(stable));
    },
    /** [z,p,k] = tf2zp(num,den) — transfer function to zero-pole-gain. */
    tf2zp: (a, n) => {
      const num = toArray(m(a[0])), den = toArray(m(a[1])); const z = sortRoots(polyRoots(num)), p = sortRoots(polyRoots(den));
      let i0 = 0; while (i0 < num.length && num[i0] === 0) i0++; let j0 = 0; while (j0 < den.length && den[j0] === 0) j0++;
      const k = (num[i0] ?? 0) / (den[j0] ?? 1);
      return n >= 3 ? Promise.resolve([rootsValue(z), rootsValue(p), scalar(k)]) : n >= 2 ? Promise.resolve([rootsValue(z), rootsValue(p)]) : ret(rootsValue(z));
    },
    /** [num,den] = zp2tf(z,p,k) — zero-pole-gain to transfer function. */
    zp2tf: (a, n) => {
      const z = toArray(m(a[0])), p = toArray(m(a[1])), k = asScalar(a[2]);
      const num = polyFromRoots(z, z.map(() => 0)).map((v) => v * k); const den = polyFromRoots(p, p.map(() => 0));
      while (num.length < den.length) num.unshift(0);   // pad numerator to denominator length
      return n >= 2 ? Promise.resolve([rowVec(num), rowVec(den)]) : ret(rowVec(num));
    },
    /** [A,B,C,D] = tf2ss(num,den) — controllable canonical state-space realization. */
    tf2ss: (a, n) => {
      let num = toArray(m(a[0])); const den0 = toArray(m(a[1])); const g = den0[0] || 1; const den = den0.map((v) => v / g); num = num.map((v) => v / g);
      while (num.length < den.length) num.unshift(0); const no = den.length - 1;
      const A: number[][] = []; for (let i = 0; i < no; i++) { A[i] = []; for (let j = 0; j < no; j++) A[i][j] = i === 0 ? -den[j + 1] : (i - 1 === j ? 1 : 0); }
      const B = Array.from({ length: no }, (_, i) => [i === 0 ? 1 : 0]); const D = num[0];
      const C = [Array.from({ length: no }, (_, j) => num[j + 1] - D * den[j + 1])];
      if (n < 2) return ret(fromRows(A)); // 0-state (static gain) → 0x0 A, matching MATLAB
      return Promise.resolve([fromRows(A), fromRows(B), fromRows(C), scalar(D)]);
    },
    /** [num,den] = ss2tf(A,B,C,D) — state-space to transfer function (Faddeev-LeVerrier). */
    ss2tf: (a, n) => {
      const A = matRows(m(a[0])), B = matRows(m(a[1])), C = matRows(m(a[2])); const D = a.length >= 4 ? asScalar(a[3]) : 0; const N = A.length;
      const p = [1]; let M = eye(N); const Ms = [eye(N)];
      for (let k = 1; k <= N; k++) { const AM = mmul(A, M); p[k] = -traceM(AM) / k; M = AM.map((row, i) => row.map((v, j) => v + (i === j ? p[k] : 0))); if (k < N) Ms.push(M); }
      const den = p; const numAdj = new Array(N).fill(0);
      for (let k = 0; k < N; k++) { const CMk = mmul(mmul(C, Ms[k]), B); numAdj[k] = CMk[0][0]; }
      const num = polyAdd(numAdj, den.map((v) => v * D));
      return n >= 2 ? Promise.resolve([rowVec(num), rowVec(den)]) : ret(rowVec(num));
    },
    /** [wn,zeta] = damp(sys) — natural frequencies and damping ratios of the poles. */
    damp: (a, n) => {
      const r = polyRoots(getNumDen(a[0]).den); const wn = r.re.map((re, i) => Math.hypot(re, r.im[i])); const zeta = r.re.map((re, i) => (wn[i] > 0 ? -re / wn[i] : 0));
      const order = wn.map((_, i) => i).sort((x, y) => wn[x] - wn[y]);
      return n >= 2 ? Promise.resolve([colVec(order.map((i) => wn[i])), colVec(order.map((i) => zeta[i]))]) : ret(colVec(order.map((i) => wn[i])));
    },
    /** ctrb(A,B) — controllability matrix [B AB A²B …]. */
    ctrb: (a) => { const A = matRows(m(a[0])), B = matRows(m(a[1])); const N = A.length; const cols: number[][] = B.map((r) => r.slice()); let cur = B; for (let i = 1; i < N; i++) { cur = mmul(A, cur); for (let r = 0; r < N; r++) cols[r].push(...cur[r]); } return ret(fromRows(cols)); },
    /** obsv(A,C) — observability matrix [C; CA; CA²; …]. */
    obsv: (a) => { const A = matRows(m(a[0])), C = matRows(m(a[1])); const N = A.length; const rows: number[][] = C.map((r) => r.slice()); let cur = C; for (let i = 1; i < N; i++) { cur = mmul(cur, A); rows.push(...cur.map((r) => r.slice())); } return ret(fromRows(rows)); },
    /** dsort(p) — sort discrete-time poles by descending magnitude. */
    dsort: (a) => ret(colVec(toArray(m(a[0])).slice().sort((x, y) => Math.abs(y) - Math.abs(x)))),
    /** esort(p) — sort continuous-time poles by descending real part. */
    esort: (a) => ret(colVec(toArray(m(a[0])).slice().sort((x, y) => y - x))),
    // `series` is registered as a CLASS METHOD (below) rather than a global builtin, because the
    // name collides with Symbolic's `series`. OOP dispatch routes series(tf,…) here, series(sym,…)
    // to Symbolic — matching MATLAB.
    /** parallel(sys1,sys2) — parallel connection sys1+sys2. */
    parallel: (a) => { const g1 = getNumDen(a[0]), g2 = getNumDen(a[1]); return ret(tfModel(polyAdd(polyConv(g1.num, g2.den), polyConv(g2.num, g1.den)), polyConv(g1.den, g2.den))); },
    /** feedback(sys1,sys2) — negative-feedback closed loop sys1/(1+sys1·sys2). */
    feedback: (a) => { const g1 = getNumDen(a[0]); const g2 = a.length >= 2 && isObject(a[1]) ? getNumDen(a[1]) : { num: [asScalar(a[1] ?? scalar(1))], den: [1] }; return ret(tfModel(polyConv(g1.num, g2.den), polyAdd(polyConv(g1.den, g2.den), polyConv(g1.num, g2.num)))); },
    /** order(sys) — number of states (denominator degree). */
    order: (a) => ret(scalar(getNumDen(a[0]).den.length - 1)),
    /** [K,S,e] = lqr(A,B,Q,R[,N]) — continuous LQR. Solves CARE A'S+SA−SBR⁻¹B'S+Q=0,
     *  K=R⁻¹(B'S+N'), e=eig(A−BK). */
    lqr: (a, n) => {
      const { A, B, Q, Ri, N } = lqrArgs(a);
      const { A: Ar, Q: Qr, corr } = reduceCross(A, B, Q, Ri, N);   // fold cross term N
      const S = care(Ar, B, Qr, Ri);
      let K = mmul(Ri, mmul(matT(B), S));                            // R⁻¹ B'S
      if (corr) K = matAdd2(K, corr);                                // + R⁻¹ N'
      const Acl = matSub(A, mmul(B, K));
      return lqrResult(K, S, Acl, n);
    },
    /** [K,S,e] = dlqr(A,B,Q,R[,N]) — discrete LQR. Solves DARE, K=(R+B'SB)⁻¹(B'SA+N'),
     *  e=eig(A−BK). */
    dlqr: (a, n) => {
      const { A, B, Q, Ri, Rm, N } = lqrArgs(a);
      const { A: Ar, Q: Qr } = reduceCross(A, B, Q, Ri, N);          // fold cross term N
      const S = dare(Ar, B, Qr, Rm);
      const Bt = matT(B);
      const RBSB = matInv(matAdd2(Rm, mmul(mmul(Bt, S), B)));        // (R+B'SB)⁻¹
      let BSA = mmul(mmul(Bt, S), A);                                // B'SA  (original A)
      if (N) BSA = matAdd2(BSA, matT(N));                            // + N'
      const K = mmul(RBSB, BSA);
      const Acl = matSub(A, mmul(B, K));
      return lqrResult(K, S, Acl, n);
    },
    /** [mag,phase,wout] = bode(sys[,w]) — Bode frequency response data. mag in absolute units,
     *  phase in degrees (unwrapped). With no output args, returns mag only (no plotting here). */
    bode: (a, n) => {
      const { mag, phase, w } = bodeData(a[0], a[1]);
      const magV = colVec(mag);
      if (n >= 3) return Promise.resolve([magV, colVec(phase), colVec(w)]);
      if (n >= 2) return Promise.resolve([magV, colVec(phase)]);
      return ret(magV);
    },
    /** [mag,wout] = bodemag(sys[,w]) — Bode magnitude response (absolute units). */
    bodemag: (a, n) => {
      const { mag, w } = bodeData(a[0], a[1]);
      const magV = colVec(mag);
      return n >= 2 ? Promise.resolve([magV, colVec(w)]) : ret(magV);
    },
    /** ss2ss(sys,T) — state-coordinate transform z=Tx: A→TAT⁻¹, B→TB, C→CT⁻¹, D→D. */
    ss2ss: (a) => {
      const sys = a[0];
      if (!isObject(sys) || sys.className !== 'ss') throw new Error('ss2ss: first argument must be a state-space (ss) model');
      const A = matRows(m(sys.props.get('A') as Mat)), B = matRows(m(sys.props.get('B') as Mat)), C = matRows(m(sys.props.get('C') as Mat));
      const D = sys.props.get('D') as Value; const T = matRows(m(a[1]));
      if (T.length === 0 || T.length !== T[0].length) throw new Error('ss2ss: T must be a square matrix');
      const Ti = matInv(T);
      const An = mmul(mmul(T, A), Ti); const Bn = mmul(T, B); const Cn = mmul(C, Ti);
      return ret(makeObject('ss', { A: fromRows(An), B: fromRows(Bn), C: fromRows(Cn), D }));
    },
    /** c2d(sys,Ts[,method]) — continuous→discrete. method: 'zoh' (default) | 'tustin'/'bilinear'. */
    c2d: (a) => {
      const { num, den } = getNumDen(a[0]); const Ts = asScalar(a[1]);
      const meth = (a.length >= 3 ? asString(a[2]) : 'zoh').toLowerCase();
      let r: { num: number[]; den: number[] };
      if (meth === 'tustin' || meth === 'bilinear') r = c2dTustin(num, den, Ts);
      else r = c2dZoh(num, den, Ts);
      return ret(makeObject('tf', { num: rowVec(r.num), den: rowVec(r.den), Ts: scalar(Ts) }));
    },
    /** [Gm,Pm,Wcg,Wcp] = margin(sys) — gain margin (abs), phase margin (deg), crossover freqs. */
    margin: (a, n) => {
      const { num, den } = getNumDenAny(a[0]);
      const { Gm, Pm, Wcg, Wcp } = marginData(num, den);
      if (n >= 4) return Promise.resolve([scalar(Gm), scalar(Pm), scalar(Wcg), scalar(Wcp)]);
      if (n >= 3) return Promise.resolve([scalar(Gm), scalar(Pm), scalar(Wcg)]);
      if (n >= 2) return Promise.resolve([scalar(Gm), scalar(Pm)]);
      return ret(scalar(Gm));
    },
    /** stepinfo(sys) or stepinfo(y,t[,yfinal[,yinit]]) — step-response characteristics struct. */
    stepinfo: (a) => {
      let t: number[], y: number[], yfinal: number, yinit = 0;
      if (isObject(a[0])) {
        const { num, den } = getNumDenAny(a[0]);
        const resp = stepResponse(num, den); t = resp.t; y = resp.y; yfinal = resp.yfinal;
        if (a.length >= 2 && isMatLike(a[1])) yfinal = asScalar(a[1]);
      } else {
        y = toArray(m(a[0])); t = a.length >= 2 ? toArray(m(a[1])) : y.map((_, i) => i + 1);
        yfinal = a.length >= 3 ? asScalar(a[2]) : y[y.length - 1];
        yinit = a.length >= 4 ? asScalar(a[3]) : 0;
      }
      const info = stepInfoFromResp(t, y, yfinal, yinit);
      const fields = new Map<string, Value[]>();
      for (const key of ['RiseTime', 'SettlingTime', 'SettlingMin', 'SettlingMax', 'Overshoot', 'Undershoot', 'Peak', 'PeakTime'])
        fields.set(key, [scalar(info.get(key) ?? NaN)]);
      return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
    },
    /** X = lyap(A,Q) solves A*X+X*A'+Q=0; X = lyap(A,B,C) solves the Sylvester eqn A*X+X*B+C=0. */
    lyap: (a) => {
      const A = matRows(m(a[0]));
      if (a.length >= 3) { const B = matRows(m(a[1])), C = matRows(m(a[2])); return ret(fromRows(sylvSolve(A, B, C))); }
      return ret(fromRows(lyapSolve(A, matRows(m(a[1])))));
    },
    /** X = dlyap(A,Q) solves the discrete Lyapunov equation A*X*A'-X+Q=0. */
    dlyap: (a) => ret(fromRows(dlyapSolve(matRows(m(a[0])), matRows(m(a[1]))))),
    /** R = lyapchol(A,B) returns the Cholesky factor R (R'*R = X) of lyap(A,B*B'). */
    lyapchol: (a) => {
      const A = matRows(m(a[0])), B = matRows(m(a[1]));
      const X = lyapSolve(A, mmul(B, matT(B)));
      return ret(fromRows(cholUpper(X)));
    },
    /** [X,K,L] = idare(A,B,Q,R) solves the discrete-time algebraic Riccati equation. */
    idare: (a, n) => {
      const A = matRows(m(a[0])), B = matRows(m(a[1])), Q = matRows(m(a[2]));
      const Rm = matRows(m(a[3]));
      const X = dare(A, B, Q, Rm);
      const Bt = matT(B);
      const Kgain = () => mmul(matInv(matAdd2(Rm, mmul(mmul(Bt, X), B))), mmul(mmul(Bt, X), A)); // (R+B'XB)^-1 B'XA
      const out: Value[] = [fromRows(X)];
      if (n >= 2) out.push(fromRows(Kgain()));
      if (n >= 3) out.push(eigClosed(matSub(A, mmul(B, Kgain()))));
      return Promise.resolve(out);
    },
    /** [K,S,e] = lqrd(A,B,Q,R,Ts) / lqrd(A,B,Q,R,N,Ts) designs a discrete LQR equivalent to the
     *  continuous cost J=∫(x'Qx+u'Ru+2x'Nu)dt for the plant (A,B) sampled at Ts. */
    lqrd: (a, nout) => {
      const A = matRows(m(a[0])), B = matRows(m(a[1])), Q = matRows(m(a[2])); const Rm = matRows(m(a[3]));
      const ns = A.length, ni = B[0].length;
      const hasN = a.length >= 6;                          // lqrd(A,B,Q,R,N,Ts)
      const Nc = hasN ? matRows(m(a[4])) : Array.from({ length: ns }, () => new Array(ni).fill(0));
      const Ts = asScalar(a[hasN ? 5 : 4]);
      // Van Loan augmented matrix (Franklin/Powell/Workman): exact cost discretisation.
      const nn = ns + ni; const dim = 2 * nn; const At = matT(A), Bt = matT(B), Nt = matT(Nc);
      const M: number[][] = Array.from({ length: dim }, () => new Array(dim).fill(0));
      const set = (r0: number, c0: number, blk: number[][]) => { for (let i = 0; i < blk.length; i++) for (let j = 0; j < blk[0].length; j++) M[r0 + i][c0 + j] = blk[i][j] * Ts; };
      // rows 0..ns-1: [-A', 0, Q, N]; rows ns..nn-1: [-B', 0, N', R]; rows nn..nn+ns-1: [0,0,A,B]
      set(0, 0, matScale(At, -1)); set(0, nn, Q); set(0, nn + ns, Nc);
      set(ns, 0, matScale(Bt, -1)); set(ns, nn, Nt); set(ns, nn + ns, Rm);
      set(nn, nn, A); set(nn, nn + ns, B);
      const phi = matExp(M);
      const phi12: number[][] = [], phi22: number[][] = [];
      for (let i = 0; i < nn; i++) { phi12[i] = []; phi22[i] = []; for (let j = 0; j < nn; j++) { phi12[i][j] = phi[i][nn + j]; phi22[i][j] = phi[nn + i][nn + j]; } }
      const QQ = symmetrize(mmul(matT(phi22), phi12));      // [Qd Nd; Nd' Rd]
      const Qd: number[][] = [], Rd: number[][] = [], Nd: number[][] = [];
      for (let i = 0; i < ns; i++) { Qd[i] = []; Nd[i] = []; for (let j = 0; j < ns; j++) Qd[i][j] = QQ[i][j]; for (let j = 0; j < ni; j++) Nd[i][j] = QQ[i][ns + j]; }
      for (let i = 0; i < ni; i++) { Rd[i] = []; for (let j = 0; j < ni; j++) Rd[i][j] = QQ[ns + i][ns + j]; }
      const Ad: number[][] = [], Bd: number[][] = [];
      for (let i = 0; i < ns; i++) { Ad[i] = []; Bd[i] = []; for (let j = 0; j < ns; j++) Ad[i][j] = phi22[i][j]; for (let j = 0; j < ni; j++) Bd[i][j] = phi22[i][ns + j]; }
      const { X, K } = dareN(Ad, Bd, Qd, Rd, Nd);
      const out: Value[] = [fromRows(K)];
      if (nout >= 2) out.push(fromRows(X));
      if (nout >= 3) out.push(eigClosed(matSub(Ad, mmul(Bd, K))));
      return Promise.resolve(out);
    },
    /** [u,t] = gensig(type,tau[,Tf,Ts]) generates a periodic unit-amplitude test signal. */
    gensig: (a, nout) => {
      const type = asString(a[0]).toLowerCase().slice(0, 2);
      const tau = asScalar(a[1]);
      const Tf = a.length >= 3 && a[2] && !(isMatLike(a[2]) && m(a[2]).data.length === 0) ? asScalar(a[2]) : 5 * tau;
      const Ts = a.length >= 4 ? asScalar(a[3]) : tau / 64;
      const t: number[] = []; for (let v = 0; v <= Tf + 1e-12; v += Ts) t.push(v);
      const eps = 2.220446049250313e-16;
      const u = t.map((tv) => {
        const r = tv - Math.floor(tv / tau) * tau;   // rem(t,tau)
        if (type === 'si') return Math.sin((2 * Math.PI / tau) * tv);
        if (type === 'sq') return r >= tau / 2 ? 1 : 0;
        if (type === 'pu') return r < (1 - 1000 * eps) * Ts ? 1 : 0;
        throw new Error('gensig: unknown signal type');
      });
      const U = colVec(u), T = colVec(t);
      return nout >= 2 ? Promise.resolve([U, T]) : ret(U);
    },
    /** S = lsiminfo(y,t[,yfinal[,yinit]]) returns linear-response characteristics. */
    lsiminfo: (a) => {
      const y = toArray(m(a[0]));
      const t = a.length >= 2 && isMatLike(a[1]) ? toArray(m(a[1])) : y.map((_, i) => i + 1);
      const yf = a.length >= 3 ? asScalar(a[2]) : y[y.length - 1];
      const yi = a.length >= 4 ? asScalar(a[3]) : 0;
      const ST = 0.02; const ns = t.length;
      // Peak of |y-yi|
      let peak = -Infinity, ipeak = 0; for (let i = 0; i < ns; i++) { const d = Math.abs(y[i] - yi); if (d > peak) { peak = d; ipeak = i; } }
      // Min / Max
      let mn = Infinity, imn = 0, mx = -Infinity, imx = 0;
      for (let i = 0; i < ns; i++) { if (y[i] < mn) { mn = y[i]; imn = i; } if (y[i] > mx) { mx = y[i]; imx = i; } }
      const err = y.map((v) => Math.abs(v - yf));
      const settle = (tol: number): number => {
        let iS = -1; for (let i = ns - 1; i >= 0; i--) if (err[i] > tol) { iS = i; break; }
        if (iS < 0) return 0;
        if (iS === ns - 1) return NaN;
        // Ts==0 (continuous): interpolate
        const aa = y[iS] - y[iS + 1], bb = y[iS + 1] - yf;
        const tau = Math.max((-tol - bb) / aa, (tol - bb) / aa);
        return t[iS + 1] + tau * (t[iS] - t[iS + 1]);
      };
      let transient: number, settling: number;
      if (Number.isFinite(yf)) {
        transient = settle(ST * Math.max(...err));
        settling = settle(ST * Math.abs(yf - yi));
      } else { transient = NaN; settling = NaN; }
      const fields = new Map<string, Value[]>([
        ['TransientTime', [scalar(transient)]], ['SettlingTime', [scalar(settling)]],
        ['Peak', [scalar(peak)]], ['PeakTime', [scalar(t[ipeak])]],
        ['Min', [scalar(mn)]], ['MinTime', [scalar(t[imn])]],
        ['Max', [scalar(mx)]], ['MaxTime', [scalar(t[imx])]],
      ]);
      return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
    },
    /** minreal(sys[,tol]) — minimal realization via pole/zero cancellation. */
    minreal: (a) => {
      const { num, den } = getNumDen(a[0]);
      const tol = a.length >= 2 ? asScalar(a[1]) : Math.sqrt(2.220446049250313e-16);
      const r = minrealTf(num, den, Math.max(tol, 1e-9));
      return ret(makeObject('tf', { num: rowVec(r.num), den: rowVec(r.den) }));
    },
  },
  help: {
    tf: { summary: 'Create a transfer-function model', syntax: ['sys = tf(num,den)', 'sys = tf(num,den,Ts)'], seealso: ['zpk', 'ss', 'bode', 'step'] },
    ss: { summary: 'Create a state-space model', syntax: ['sys = ss(A,B,C,D)', 'sys = ss(A,B,C,D,Ts)'], description: ['sys = ss(A,B,C,D) creates a continuous-time state-space model with matrices A (state), B (input), C (output), D (feedthrough).', 'sys = ss(A,B,C,D,Ts) creates a discrete-time model with sample time Ts.'], seealso: ['tf', 'zpk', 'ssdata', 'pole'] },
    zpk: { summary: 'Create a zero-pole-gain model', syntax: ['sys = zpk(z,p,k)', 'sys = zpk(z,p,k,Ts)'], description: ['sys = zpk(z,p,k) creates a continuous-time zero-pole-gain model where z is a vector of zeros, p is a vector of poles, and k is the scalar gain.', 'sys = zpk(z,p,k,Ts) creates a discrete-time ZPK model with sample time Ts.'], seealso: ['tf', 'ss', 'pole', 'zero'] },
    pole: { summary: 'Compute poles of a dynamic system', syntax: ['p = pole(sys)'], seealso: ['zero', 'damp', 'eig'] },
    zero: { summary: 'Compute zeros of a dynamic system', syntax: ['z = zero(sys)', '[z,gain] = zero(sys)'], description: ['z = zero(sys) returns the transmission zeros of the dynamic system sys as a column vector.', 'For MIMO systems, returns the Smith-McMillan zeros.'], seealso: ['pole', 'damp', 'zpk'] },
    dcgain: { summary: 'Compute DC (low-frequency) gain of a dynamic system', syntax: ['k = dcgain(sys)'], description: ['k = dcgain(sys) returns the steady-state gain of sys, i.e. the gain at frequency zero.', 'For discrete-time systems, evaluates the transfer function at z=1.'], seealso: ['pole', 'bode', 'step'] },
    isstable: { summary: 'Determine if a dynamic system is stable', syntax: ['tf = isstable(sys)'], description: ['isstable(sys) returns true if all poles of sys lie in the left half-plane (continuous) or inside the unit disk (discrete).'], seealso: ['pole', 'damp', 'isproper'] },
    tf2zp: { summary: 'Convert transfer function to zero-pole-gain form', syntax: ['[z,p,k] = tf2zp(num,den)'], description: ['[z,p,k] = tf2zp(num,den) finds the zeros z, poles p, and gain k of a SISO transfer function given as numerator/denominator coefficient vectors.'], seealso: ['zp2tf', 'tf2ss', 'roots'] },
    zp2tf: { summary: 'Convert zero-pole-gain to transfer function', syntax: ['[num,den] = zp2tf(z,p,k)'], description: ['[num,den] = zp2tf(z,p,k) converts zero-pole-gain data to numerator/denominator polynomial coefficient vectors.'], seealso: ['tf2zp', 'zpk', 'tf'] },
    tf2ss: { summary: 'Convert transfer function to state-space', syntax: ['[A,B,C,D] = tf2ss(num,den)'], description: ['[A,B,C,D] = tf2ss(num,den) converts the SISO transfer function polynomial num/den to a state-space realization in controllable canonical form.'], seealso: ['ss2tf', 'tf2zp', 'ss'] },
    ss2tf: { summary: 'Convert state-space to transfer function', syntax: ['[num,den] = ss2tf(A,B,C,D)', '[num,den] = ss2tf(A,B,C,D,iu)'], description: ['[num,den] = ss2tf(A,B,C,D) converts the state-space matrices to transfer function numerator/denominator polynomials.', 'For MIMO systems, iu selects the input channel.'], seealso: ['tf2ss', 'ss2ss', 'zpk'] },
    damp: { summary: 'Natural frequency and damping of system poles', syntax: ['[wn,zeta] = damp(sys)', '[wn,zeta,p] = damp(sys)'], description: ['[wn,zeta] = damp(sys) returns the natural frequencies wn and damping ratios zeta of the poles of sys.', 'Poles with negative real part have positive damping; unstable poles have negative damping.'], seealso: ['pole', 'zero', 'esort'] },
    ctrb: { summary: 'Compute controllability matrix', syntax: ['Co = ctrb(A,B)', 'Co = ctrb(sys)'], seealso: ['obsv', 'rank'] },
    obsv: { summary: 'Compute observability matrix', syntax: ['Ob = obsv(A,C)', 'Ob = obsv(sys)'], description: ['Ob = obsv(A,C) returns the observability matrix [C; C*A; C*A^2; ...] for the pair (A,C).', 'A system is observable if rank(obsv(A,C)) equals the number of states.'], seealso: ['ctrb', 'rank', 'ss'] },
    dsort: { summary: 'Sort discrete-time poles by magnitude', syntax: ['[s,ndx] = dsort(p)'], description: ['[s,ndx] = dsort(p) sorts the vector of discrete-time poles p by magnitude, placing unstable poles (|p|>=1) first.', 'ndx contains the original indices of the sorted poles.'], seealso: ['esort', 'pole', 'damp'] },
    esort: { summary: 'Sort continuous-time poles by real part', syntax: ['[s,ndx] = esort(p)'], description: ['[s,ndx] = esort(p) sorts the vector of continuous-time poles p by real part, placing unstable poles (real(p)>=0) first.', 'ndx contains the original indices of the sorted poles.'], seealso: ['dsort', 'pole', 'damp'] },
    parallel: { summary: 'Parallel connection of two dynamic systems', syntax: ['sys = parallel(sys1,sys2)'], description: ['sys = parallel(sys1,sys2) connects sys1 and sys2 in parallel: the outputs are summed and inputs are shared.', 'Equivalent to sys1 + sys2 for LTI models.'], seealso: ['series', 'feedback', 'connect'] },
    feedback: { summary: 'Feedback connection of two dynamic systems', syntax: ['sys = feedback(sys1,sys2)', 'sys = feedback(sys1,sys2,sign)'], description: ['sys = feedback(sys1,sys2) forms the negative feedback loop: output of sys2 feeds back to the input of sys1.', 'sign=+1 selects positive feedback; default is -1 (negative feedback).'], seealso: ['parallel', 'series', 'connect'] },
    order: { summary: 'Model order (number of states)', syntax: ['n = order(sys)'], description: ['n = order(sys) returns the number of states of the dynamic system sys.', 'For a transfer function it returns the degree of the denominator polynomial.'], seealso: ['pole', 'minreal', 'ss'] },
    series: { summary: 'Series (cascade) connection of two dynamic systems', syntax: ['sys = series(sys1,sys2)'], description: ['sys = series(sys1,sys2) connects sys1 and sys2 in series: the output of sys1 feeds the input of sys2.', 'Equivalent to sys1 * sys2 for LTI models.'], seealso: ['parallel', 'feedback', 'connect'] },
    ss2ss: { summary: 'State coordinate transformation for state-space models', syntax: ['sys2 = ss2ss(sys,T)'], seealso: ['ss', 'canon', 'balreal'] },
    lqr: { summary: 'Linear-quadratic regulator design (continuous time)', syntax: ['[K,S,e] = lqr(sys,Q,R)', '[K,S,e] = lqr(A,B,Q,R)'], seealso: ['dlqr', 'lqe', 'place'] },
    dlqr: { summary: 'Linear-quadratic regulator design (discrete time)', syntax: ['[K,S,e] = dlqr(A,B,Q,R)', '[K,S,e] = dlqr(A,B,Q,R,N)'], description: ['[K,S,e] = dlqr(A,B,Q,R) computes the optimal discrete-time LQR gain K minimizing sum(x\'Qx + u\'Ru) subject to x(k+1)=Ax(k)+Bu(k).', 'N adds a cross-term in the cost; S is the solution of the discrete algebraic Riccati equation; e are closed-loop eigenvalues.'], seealso: ['lqr', 'place', 'dare'] },
    bode: { summary: 'Bode frequency response of dynamic systems', syntax: ['bode(sys)', '[mag,phase,wout] = bode(sys)'], seealso: ['bodemag', 'nyquist', 'margin'] },
    bodemag: { summary: 'Bode magnitude response of dynamic systems', syntax: ['bodemag(sys)', '[mag,wout] = bodemag(sys)'], description: ['bodemag(sys) plots the magnitude (in dB) of the frequency response of sys without the phase panel.', '[mag,wout] = bodemag(sys) returns the magnitude and frequency vector without plotting.'], seealso: ['bode', 'nyquist', 'margin'] },
    c2d: { summary: 'Convert model from continuous to discrete time', syntax: ['sysd = c2d(sys,Ts)', 'sysd = c2d(sys,Ts,method)'], seealso: ['d2c', 'd2d', 'zoh'] },
    margin: { summary: 'Gain and phase margins and crossover frequencies', syntax: ['[Gm,Pm,Wgm,Wpm] = margin(sys)'], seealso: ['bode', 'allmargin', 'nyquist'] },
    stepinfo: { summary: 'Step-response characteristics (rise time, settling time, etc.)', syntax: ['S = stepinfo(sys)'], seealso: ['step', 'lsim', 'impulse'] },
    minreal: { summary: 'Minimal realization or pole-zero cancellation', syntax: ['msys = minreal(sys)', 'msys = minreal(sys,tol)'], seealso: ['pole', 'zero', 'ss'] },
    lyap: { summary: 'Continuous Lyapunov and Sylvester equation solver', syntax: ['X = lyap(A,Q)', 'X = lyap(A,B,C)'], description: ['X = lyap(A,Q) solves the continuous-time Lyapunov equation A*X + X*A\' + Q = 0.', 'X = lyap(A,B,C) solves the Sylvester equation A*X + X*B + C = 0.'], seealso: ['dlyap', 'lyapchol', 'sylvester'] },
    dlyap: { summary: 'Discrete-time Lyapunov equation solver', syntax: ['X = dlyap(A,Q)'], description: ['X = dlyap(A,Q) solves the discrete-time Lyapunov equation A*X*A\' - X + Q = 0.'], seealso: ['lyap', 'dlyapchol', 'covar'] },
    lyapchol: { summary: 'Square-root (Cholesky) solver for continuous Lyapunov equations', syntax: ['R = lyapchol(A,B)'], description: ['R = lyapchol(A,B) computes the upper-triangular Cholesky factor R of the solution X = R\'*R of the Lyapunov equation A*X + X*A\' + B*B\' = 0.', 'A must be stable; R is returned such that R\'*R is positive semidefinite.'], seealso: ['lyap', 'dlyapchol', 'chol'] },
    idare: { summary: 'Discrete-time algebraic Riccati equation solver', syntax: ['[X,K,L] = idare(A,B,Q,R)'], description: ['[X,K,L] = idare(A,B,Q,R) solves A\'*X*A - X - (A\'*X*B)*inv(R+B\'*X*B)*(B\'*X*A) + Q = 0.', 'K = inv(R+B\'*X*B)*B\'*X*A is the optimal gain and L = eig(A-B*K) are the closed-loop eigenvalues.'], seealso: ['icare', 'dlqr', 'dare'] },
    lqrd: { summary: 'Discrete LQR design from a continuous cost function', syntax: ['[K,S,e] = lqrd(A,B,Q,R,Ts)'], description: ['[K,S,e] = lqrd(A,B,Q,R,Ts) computes the discrete state-feedback gain K that minimizes the continuous-time LQR cost for the plant (A,B) sampled with period Ts.', 'S is the solution of the associated discrete Riccati equation and e are the discrete closed-loop eigenvalues.'], seealso: ['lqr', 'dlqr', 'c2d'] },
    gensig: { summary: 'Generate a periodic test input signal', syntax: ['[u,t] = gensig(type,tau)', '[u,t] = gensig(type,tau,Tf,Ts)'], description: ['[u,t] = gensig(type,tau) generates a unit-amplitude periodic signal of period tau. type is \'sin\', \'square\', or \'pulse\'.', 'Tf sets the signal duration (default 5*tau) and Ts the sample spacing (default tau/64).'], seealso: ['lsim', 'square', 'sawtooth'] },
    lsiminfo: { summary: 'Compute linear-response characteristics', syntax: ['S = lsiminfo(y,t)', 'S = lsiminfo(y,t,yfinal,yinit)'], description: ['S = lsiminfo(y,t) returns a struct with TransientTime, SettlingTime, Peak, PeakTime, Min, MinTime, Max, MaxTime for the response data (t,y).', 'yfinal defaults to the last sample of y and yinit defaults to 0.'], seealso: ['stepinfo', 'lsim', 'impulse'] },
  },
  // OOP method dispatch (see tb/types.ts): series(tf,…) routes here; series(sym,…) → Symbolic.
  methods: {
    tf: { series: (a) => { const g1 = getNumDen(a[0]), g2 = getNumDen(a[1]); return ret(tfModel(polyConv(g1.num, g2.num), polyConv(g1.den, g2.den))); } },
  },
};

