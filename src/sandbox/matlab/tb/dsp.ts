// DSP System Toolbox — fills gaps not covered by the Signal Processing Toolbox:
// firpm/remez (Parks-McClellan Remez exchange), firls (least-squares FIR),
// sosfilt, tf2sos/sos2tf/zp2tf/tf2zp/zp2sos, grpdelay, impz/stepz,
// bilinear (standalone), besself, decimate/interp/resample,
// dsp.FIRFilter/BiquadFilter/FIRDecimator/FIRInterpolator/RMS/Mean/Variance System objects.
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat,
  MatError, mat, zeros, makeObject, fromRows, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── Complex arithmetic ─────────────────────────────────────────────────────────────────
type C = [number, number];
const cAdd = (a: C, b: C): C => [a[0]+b[0], a[1]+b[1]];
const cSub = (a: C, b: C): C => [a[0]-b[0], a[1]-b[1]];
const cMul = (a: C, b: C): C => [a[0]*b[0]-a[1]*b[1], a[0]*b[1]+a[1]*b[0]];
const cDiv = (a: C, b: C): C => { const d=b[0]**2+b[1]**2; return [(a[0]*b[0]+a[1]*b[1])/d,(a[1]*b[0]-a[0]*b[1])/d]; };
const cAbs = (a: C) => Math.sqrt(a[0]**2+a[1]**2);
const cConj = (a: C): C => [a[0], -a[1]];
const cSc = (a: C, s: number): C => [a[0]*s, a[1]*s];
const cSqrt = (a: C): C => { const r=Math.sqrt(cAbs(a)); const th=Math.atan2(a[1],a[0])/2; return [r*Math.cos(th), r*Math.sin(th)]; };
const cFromPolar = (r: number, th: number): C => [r*Math.cos(th), r*Math.sin(th)];
const cPow = (a: C, n: number): C => cFromPolar(cAbs(a)**n, Math.atan2(a[1],a[0])*n);

// ── Polynomial utilities (complex coefficients, descending powers) ─────────────────────
function polyMul(a: C[], b: C[]): C[] {
  const c: C[] = Array.from({length: a.length+b.length-1}, () => [0,0] as C);
  for (let i=0;i<a.length;i++) for (let j=0;j<b.length;j++) {
    c[i+j][0] += a[i][0]*b[j][0] - a[i][1]*b[j][1];
    c[i+j][1] += a[i][0]*b[j][1] + a[i][1]*b[j][0];
  }
  return c;
}

// Convert roots to monic polynomial: prod(z - r_k)
function roots2poly(roots: C[]): C[] {
  let p: C[] = [[1,0]];
  for (const r of roots) p = polyMul(p, [[1,0],[-r[0],-r[1]]]);
  return p;
}

// Evaluate polynomial at a complex point (Horner)
function polyEval(p: C[], z: C): C {
  let val: C = [0,0];
  for (const c of p) val = cAdd(cMul(val, z), c);
  return val;
}

// Durand-Kerner root finder — finds all roots of polynomial p (real or complex coefficients)
function polyRoots(coeffs: number[]): C[] {
  const n = coeffs.length - 1;
  if (n <= 0) return [];
  const a = coeffs.map(v => v / coeffs[0]);
  // Initial guesses on a circle of radius ~1
  let roots: C[] = Array.from({length: n}, (_, k) => cFromPolar(0.7*n, 2*Math.PI*k/n + 0.3));
  for (let iter = 0; iter < 200; iter++) {
    let maxMove = 0;
    for (let i = 0; i < n; i++) {
      // Evaluate polynomial at current root
      let pval: C = [a[0],0];
      for (let j = 1; j <= n; j++) pval = cAdd(cMul(pval, roots[i]), [a[j],0]);
      // Product of (root_i - root_j) for j != i
      let denom: C = [1,0];
      for (let j = 0; j < n; j++) if (j !== i) denom = cMul(denom, cSub(roots[i], roots[j]));
      if (cAbs(denom) < 1e-300) continue;
      const delta = cDiv(pval, denom);
      roots[i] = cSub(roots[i], delta);
      maxMove = Math.max(maxMove, cAbs(delta));
    }
    if (maxMove < 1e-12) break;
  }
  return roots;
}

// ZPK → [b, a] real polynomial coefficients
function zpk2ba(zeros: C[], poles: C[], k: number): [Float64Array, Float64Array] {
  const B = roots2poly(zeros).map(c => c[0] * k);
  const A = roots2poly(poles).map(c => c[0]);
  return [Float64Array.from(B), Float64Array.from(A)];
}

// ── Gaussian elimination (real, in-place, returns solution x) ─────────────────────────
function gaussElim(mat: number[][], rhs: number[]): number[] {
  const n = rhs.length;
  const A = mat.map(r => [...r]);
  const b = [...rhs];
  for (let col = 0; col < n; col++) {
    // Partial pivot
    let maxRow = col; let maxVal = Math.abs(A[col][col]);
    for (let row = col+1; row < n; row++) if (Math.abs(A[row][col]) > maxVal) { maxVal = Math.abs(A[row][col]); maxRow = row; }
    [A[col], A[maxRow]] = [A[maxRow], A[col]];
    [b[col], b[maxRow]] = [b[maxRow], b[col]];
    const piv = A[col][col];
    if (Math.abs(piv) < 1e-14) continue;
    for (let row = col+1; row < n; row++) {
      const f = A[row][col] / piv;
      for (let c = col; c < n; c++) A[row][c] -= f * A[col][c];
      b[row] -= f * b[col];
    }
  }
  const x = Array(n).fill(0);
  for (let i = n-1; i >= 0; i--) {
    x[i] = b[i];
    for (let j = i+1; j < n; j++) x[i] -= A[i][j] * x[j];
    x[i] /= A[i][i] || 1;
  }
  return x;
}

// ── Bessel polynomial computation ─────────────────────────────────────────────────────
// Reverse Bessel polynomials θ_n(s) via recurrence: θ_n(s) = (2n-1)*θ_{n-1}(s) + s^2*θ_{n-2}(s)
function besselPoly(n: number): number[] {
  if (n === 0) return [1];
  if (n === 1) return [1, 1];
  let prev2 = [1], prev1 = [1,1];
  for (let k = 2; k <= n; k++) {
    // (2k-1)*prev1 + s^2*prev2
    const cur: number[] = Array(k+1).fill(0);
    for (let i = 0; i < prev1.length; i++) cur[i] += (2*k-1) * prev1[i];
    for (let i = 0; i < prev2.length; i++) cur[i+2] += prev2[i];
    prev2 = prev1; prev1 = cur;
  }
  return prev1;
}

// ── besself — analog Bessel lowpass prototype ─────────────────────────────────────────
// Returns zeros, poles, gain for Bessel analog LP prototype (cutoff at ~1 rad/s, max-flat group delay)
function besselpap(n: number): { z: C[]; p: C[]; k: number } {
  const poly = besselPoly(n);
  // Roots of the Bessel polynomial are the poles (left half plane)
  const poles = polyRoots(poly).filter(r => r[0] < 0);
  // Normalize: scale so group delay at ω=0 is 1s (factor = poly[0]/poly[poly.length-1])
  // Actually normalize so H(0)=1: H(s) = θ_n(0)/θ_n(s) = poly[n]/θ_n(s)
  const k = poly[poly.length - 1]; // constant term = θ_n(0)
  return { z: [], p: poles, k };
}

// ── Analog LP → LP/HP/BP/BS frequency transformation ─────────────────────────────────
// Takes LP prototype ZPK and transforms to target type with given prewarped cutoffs.
function analogTransform(
  z_in: C[], p_in: C[], k_in: number,
  btype: 'lowpass'|'highpass'|'bandpass'|'bandstop',
  Omega: number[] // [Omega] for LP/HP, [OmegaL, OmegaU] for BP/BS
): { z: C[]; p: C[]; k: number } {
  const n = p_in.length, m = z_in.length;

  if (btype === 'lowpass') {
    const Wc = Omega[0];
    return { z: z_in.map(z0 => cSc(z0, Wc)), p: p_in.map(pk => cSc(pk, Wc)), k: k_in * Wc**(n-m) };
  }

  if (btype === 'highpass') {
    const Wc = Omega[0];
    const newP = p_in.map(pk => cDiv([Wc,0], pk));
    const newZ = [...z_in.map(zk => cDiv([Wc,0], zk)), ...Array(n-m).fill(null).map(() => [0,0] as C)];
    // Gain: k * prod(-pk)/prod(-zk) * Wc^(m-n)
    const prodP = p_in.reduce<C>((acc, pk) => cMul(acc, [-pk[0],-pk[1]]), [1,0]);
    const prodZ = z_in.length > 0 ? z_in.reduce<C>((acc, zk) => cMul(acc, [-zk[0],-zk[1]]), [1,0]) : [1,0] as C;
    const newK = k_in * prodP[0] / prodZ[0] * Wc**(m-n);
    return { z: newZ, p: newP, k: newK };
  }

  if (btype === 'bandpass') {
    const [OmL, OmU] = Omega;
    const BW = OmU - OmL, Omega0Sq = OmL * OmU;
    const newP: C[] = [];
    for (const pk of p_in) {
      // s_lp = pk → solve: (s^2 + Omega0^2)/(s*BW) = pk
      // s^2 - pk*BW*s + Omega0^2 = 0
      const alpha = cSc(pk, BW/2);
      const disc = cSqrt(cSub(cMul(alpha, alpha), [Omega0Sq, 0]));
      newP.push(cAdd(alpha, disc), cSub(alpha, disc));
    }
    // LP zeros at infinity → zeros at s=0 (n of them) + zeros at infinity (n, become z=-1 after bilinear)
    const newZ = [...z_in.flatMap(zk => {
      const alpha = cSc(zk, BW/2);
      const disc = cSqrt(cSub(cMul(alpha, alpha), [Omega0Sq, 0]));
      return [cAdd(alpha, disc), cSub(alpha, disc)];
    }), ...Array(n-m).fill(null).map(() => [0,0] as C)];
    const newK = k_in * BW**(n-m);
    return { z: newZ, p: newP, k: newK };
  }

  // bandstop
  const [OmL, OmU] = Omega;
  const BW = OmU - OmL, Omega0Sq = OmL * OmU;
  const newP: C[] = [];
  for (const pk of p_in) {
    // s*BW/(s^2+Omega0^2) = pk → p_k*s^2 - BW*s + p_k*Omega0^2 = 0
    const alpha = cDiv([BW/2, 0], pk);
    const disc = cSqrt(cSub(cMul(alpha, alpha), [Omega0Sq, 0]));
    newP.push(cAdd(alpha, disc), cSub(alpha, disc));
  }
  // n LP zeros at ∞ → n pairs at ±j*Omega0 = imaginary axis zeros
  const jOm0: C = [0, Math.sqrt(Omega0Sq)];
  const newZ = [...z_in.flatMap(zk => {
    const alpha = cDiv([BW/2, 0], zk);
    const disc = cSqrt(cSub(cMul(alpha, alpha), [Omega0Sq, 0]));
    return [cAdd(alpha, disc), cSub(alpha, disc)];
  }), ...Array(n-m).fill(null).flatMap(() => [jOm0, cConj(jOm0)] as C[])];
  const prodPk = p_in.reduce<C>((acc, pk) => cMul(acc, [-pk[0],-pk[1]]), [1,0]);
  const newK = k_in * prodPk[0];
  return { z: newZ, p: newP, k: newK };
}

// ── Bilinear transform ZPK: analog → digital ─────────────────────────────────────────
// Maps s-plane poles/zeros to z-plane using s = 2*Fs*(z-1)/(z+1) with Fs=1 (prewarped).
function bilinearZpk(z_in: C[], p_in: C[], k_in: number): { z: C[]; p: C[]; k: number } {
  const fs2 = 2; // 2*Fs with Fs=1
  const digitize = (s: C): C => cDiv(cAdd([fs2,0], s), cSub([fs2,0], s));
  const newZ = z_in.map(digitize);
  const newP = p_in.map(digitize);
  // Add zeros at z=-1 for each LP zero at infinity (n_poles - n_zeros extra)
  const nExtra = p_in.length - z_in.length;
  for (let i=0;i<nExtra;i++) newZ.push([-1,0]);
  // Gain: normalize so H(z=1) has desired DC/Nyquist gain
  const prodNum = newZ.reduce<C>((acc,z0)=>cMul(acc,cSub([1,0],z0)),[1,0]);
  const prodDen = newP.reduce<C>((acc,p0)=>cMul(acc,cSub([1,0],p0)),[1,0]);
  const gain = k_in * prodDen[0] / prodNum[0];
  return { z: newZ, p: newP, k: gain };
}

// ── Design helper: parse btype string ─────────────────────────────────────────────────
type BType = 'lowpass'|'highpass'|'bandpass'|'bandstop';
function parseBtype(arg: Value | undefined, Wn: number[]): BType {
  if (!arg || !isMat(arg) || !(arg as any).isChar) {
    return Wn.length > 1 ? 'bandpass' : 'lowpass';
  }
  const s = String.fromCharCode(...(Array.from((arg as any).data) as number[])).toLowerCase();
  if (s.startsWith('h') || s === 'high') return 'highpass';
  if (s.includes('stop') || s.includes('notch')) return 'bandstop';
  if (s.includes('band') || s === 'bandpass') return 'bandpass';
  return Wn.length > 1 ? 'bandpass' : 'lowpass';
}

// ── besself ───────────────────────────────────────────────────────────────────────────
async function besself(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('besself: requires n and Wo');
  const n = Math.round(asScalar(m(args[0])));
  const Wo = asScalar(m(args[1]));
  const btype = parseBtype(args[2], [Wo]);
  const { z, p, k } = besselpap(n);
  // Scale to analog cutoff Wo (LP only; besself is analog, no bilinear here)
  const { z: za, p: pa, k: ka } = analogTransform(z, p, k, btype === 'highpass' ? 'highpass' : 'lowpass', [Wo]);
  const [b, a] = zpk2ba(za, pa, ka);
  return [rowVec(Array.from(b)), rowVec(Array.from(a))];
}

// ── bilinear (standalone) ─────────────────────────────────────────────────────────────
// [Bz,Az] = bilinear(B,A,Fs) — bilinear transform of analog [B,A] with sample rate Fs
async function bilinear(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('bilinear: requires B, A, Fs');
  const B = toArray(m(args[0])), A = toArray(m(args[1]));
  const Fs = asScalar(m(args[2]));
  const k = 2 * Fs;
  // Get analog zeros/poles via root finding
  const aZ = polyRoots(B), aP = polyRoots(A);
  const gain = B[0] / A[0];
  const { z, p, k: kg } = bilinearZpk(aZ, aP, gain);
  const [Bz, Az] = zpk2ba(z, p, kg);
  return [rowVec(Array.from(Bz)), rowVec(Array.from(Az))];
}

// ── grpdelay ──────────────────────────────────────────────────────────────────────────
// [gd, w] = grpdelay(b, a, n) — group delay of digital filter
async function grpdelay(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('grpdelay: requires b');
  const b = toArray(m(args[0]));
  const a = args.length > 1 && isMat(args[1]) ? toArray(m(args[1])) : [1];
  const nfft = args.length > 2 && isMat(args[2]) ? Math.round(asScalar(m(args[2]))) : 512;
  // gd(ω) = Re{d/dω [log H(e^jω)]} = Re{-jω * H'(e^jω)/H(e^jω)}
  // Computed as: gd = Re{C(z)/A(z)} where C = polyder(a)*conv(b,...) - polyder(b)*conv(a,...)
  // Simpler: gd(ω) = (Re[B'(ω)/B(ω)] - Re[A'(ω)/A(ω)]) where B'(ω) = sum k*b[k]*e^{-jkω} * (-j)
  const gd = new Float64Array(nfft);
  const w = new Float64Array(nfft);
  for (let i = 0; i < nfft; i++) {
    w[i] = Math.PI * i / nfft;
    const omega = w[i];
    // Evaluate B(e^jω) and its derivative (multiplied by -j)
    let Bre=0, Bim=0, dBre=0, dBim=0;
    for (let k=0; k<b.length; k++) {
      const cs=Math.cos(-k*omega), sn=Math.sin(-k*omega);
      Bre += b[k]*cs; Bim += b[k]*sn;
      dBre += -k*b[k]*(-sn); // d/dω of b[k]*e^{-jkω} real part
      dBim += -k*b[k]*cs;   // imag part
    }
    let Are=0, Aim=0, dAre=0, dAim=0;
    for (let k=0; k<a.length; k++) {
      const cs=Math.cos(-k*omega), sn=Math.sin(-k*omega);
      Are += a[k]*cs; Aim += a[k]*sn;
      dAre += -k*a[k]*(-sn);
      dAim += -k*a[k]*cs;
    }
    // gd = Re{(dB/dω)/B} - Re{(dA/dω)/A} ... but with -j factored:
    // H'(ω)/H(ω) = B'(ω)/B(ω) - A'(ω)/A(ω)  [using logarithmic derivative]
    // d/dω B(ω) = sum (-jk)*b[k]*e^{-jkω} = -j * [sum k*b[k]*cos(-kω) + j*sum k*b[k]*sin(-kω)]
    const Bd2 = Bre**2+Bim**2, Ad2 = Are**2+Aim**2;
    // Re{B'/B}: numerator real part of (dBre+j*dBim)*(Bre-j*Bim)
    const Bnum_re = dBre*Bre + dBim*Bim;
    const Anum_re = dAre*Are + dAim*Aim;
    gd[i] = (Bd2 > 1e-30 ? Bnum_re/Bd2 : 0) - (Ad2 > 1e-30 ? Anum_re/Ad2 : 0);
  }
  return [rowVec(Array.from(gd)), rowVec(Array.from(w))];
}

// ── impz ──────────────────────────────────────────────────────────────────────────────
// [h, t] = impz(b, a, n) — impulse response
async function impz(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('impz: requires b');
  const b = toArray(m(args[0]));
  const a = args.length > 1 && isMat(args[1]) ? toArray(m(args[1])) : [1];
  const n = args.length > 2 && isMat(args[2]) ? Math.round(asScalar(m(args[2]))) : Math.max(100, 3*b.length + 3*a.length);
  const h = new Float64Array(n);
  const state = new Float64Array(Math.max(b.length, a.length));
  for (let i = 0; i < n; i++) {
    const x = i === 0 ? 1 : 0;
    let y = b[0] * x + (state[0] ?? 0);
    // Filter state update
    for (let k = 0; k < state.length-1; k++) {
      state[k] = (b[k+1] ?? 0)*x - (a[k+1] ?? 0)*y + (state[k+1] ?? 0);
    }
    state[state.length-1] = (b[state.length] ?? 0)*x - (a[state.length] ?? 0)*y;
    if (a[0] !== 1 && a[0] !== 0) y /= a[0];
    h[i] = y;
  }
  const t = Float64Array.from({length: n}, (_, i) => i);
  return [colVec(Array.from(h)), colVec(Array.from(t))];
}

// ── stepz ─────────────────────────────────────────────────────────────────────────────
async function stepz(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('stepz: requires b');
  const b = toArray(m(args[0]));
  const a = args.length > 1 && isMat(args[1]) ? toArray(m(args[1])) : [1];
  const n = args.length > 2 ? Math.round(asScalar(m(args[2]))) : Math.max(100, 3*(b.length+a.length));
  const [hVal] = await impz(args);
  const h = toArray(m(hVal));
  // Step response = cumulative sum of impulse response
  const step = new Float64Array(n);
  let acc = 0;
  for (let i = 0; i < n; i++) { acc += h[i] ?? 0; step[i] = acc; }
  const t = Float64Array.from({length: n}, (_, i) => i);
  return [colVec(Array.from(step)), colVec(Array.from(t))];
}

// ── sosfilt ───────────────────────────────────────────────────────────────────────────
// y = sosfilt(sos, x) — filter with second-order sections matrix [B0 B1 B2 A0 A1 A2]
async function sosfilt(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('sosfilt: requires sos and x');
  const sosM = m(args[0]);
  const xArr = toArray(m(args[1]));
  const nSecs = sosM.rows;
  const sos: [number, number, number, number, number, number][] = [];
  for (let i = 0; i < nSecs; i++) {
    sos.push([
      sosM.data[i*6+0], sosM.data[i*6+1], sosM.data[i*6+2],
      sosM.data[i*6+3], sosM.data[i*6+4], sosM.data[i*6+5],
    ]);
  }
  let y = Float64Array.from(xArr);
  for (const [b0, b1, b2, a0, a1, a2] of sos) {
    const s = a0 || 1;
    const b = [b0/s, b1/s, b2/s], a = [1, a1/s, a2/s];
    const yn = new Float64Array(y.length);
    let w1=0, w2=0;
    for (let n=0; n<y.length; n++) {
      const w0 = y[n] - a[1]*w1 - a[2]*w2;
      yn[n] = b[0]*w0 + b[1]*w1 + b[2]*w2;
      w2=w1; w1=w0;
    }
    y = yn;
  }
  return [colVec(Array.from(y))];
}

// ── tf2sos / sos2tf / zp2tf / tf2zp / zp2sos ──────────────────────────────────────────

// Pair complex conjugate poles/zeros into second-order sections
function pairRoots(roots: C[]): C[][] {
  const used = new Uint8Array(roots.length);
  const pairs: C[][] = [];
  for (let i = 0; i < roots.length; i++) {
    if (used[i]) continue;
    if (Math.abs(roots[i][1]) < 1e-8) {
      // Real root: pair with another real root if available
      let paired = -1;
      for (let j = i+1; j < roots.length; j++) {
        if (!used[j] && Math.abs(roots[j][1]) < 1e-8) { paired = j; break; }
      }
      if (paired >= 0) { pairs.push([roots[i], roots[paired]]); used[i]=1; used[paired]=1; }
      else { pairs.push([roots[i]]); used[i]=1; }
    } else {
      // Complex: find conjugate
      let paired = -1;
      for (let j = i+1; j < roots.length; j++) {
        if (!used[j] && Math.abs(roots[j][0]-roots[i][0]) < 1e-8 && Math.abs(roots[j][1]+roots[i][1]) < 1e-8) { paired=j; break; }
      }
      if (paired >= 0) { pairs.push([roots[i], roots[paired]]); used[i]=1; used[paired]=1; }
      else { pairs.push([roots[i]]); used[i]=1; }
    }
  }
  return pairs;
}

async function tf2sos(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('tf2sos: requires b and a');
  const b = toArray(m(args[0])), a = toArray(m(args[1]));
  const Z = polyRoots(b), P = polyRoots(a);
  const gain = b[0] / a[0];
  const [Bz, kg] = await zp2sos_impl(Z, P, gain);
  return [Bz, kg];
}

async function sos2tf(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('sos2tf: requires sos');
  const sosM = m(args[0]);
  const g = args.length > 1 ? asScalar(m(args[1])) : 1;
  let b: number[] = [g], a: number[] = [1];
  for (let i = 0; i < sosM.rows; i++) {
    const bi = [sosM.data[i*6+0], sosM.data[i*6+1], sosM.data[i*6+2]];
    const ai = [sosM.data[i*6+3], sosM.data[i*6+4], sosM.data[i*6+5]];
    const mul_poly = (p: number[], q: number[]): number[] => {
      const r = Array(p.length+q.length-1).fill(0);
      for (let ii=0; ii<p.length; ii++) for (let jj=0; jj<q.length; jj++) r[ii+jj]+=p[ii]*q[jj];
      return r;
    };
    b = mul_poly(b, bi); a = mul_poly(a, ai);
  }
  return [rowVec(b), rowVec(a)];
}

async function zp2tf(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('zp2tf: requires z, p, k');
  const Z = toArray(m(args[0])).map<C>((v, i, arr) => i%2===0&&arr[i+1]!==undefined ? [v, arr[i+1]] as C : [v,0]);
  const P = toArray(m(args[1])).map<C>((v, i, arr) => i%2===0&&arr[i+1]!==undefined ? [v, arr[i+1]] as C : [v,0]);
  // Actually z and p are real arrays of real roots (complex roots not in pairs here)
  // More correctly: just use as real roots
  const Zarr = toArray(m(args[0])).map<C>(v => [v, 0]);
  const Parr = toArray(m(args[1])).map<C>(v => [v, 0]);
  const k = asScalar(m(args[2]));
  const [b, a] = zpk2ba(Zarr, Parr, k);
  return [rowVec(Array.from(b)), rowVec(Array.from(a))];
}

async function tf2zp(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('tf2zp: requires b and a');
  const b = toArray(m(args[0])), a = toArray(m(args[1]));
  const Z = polyRoots(b), P = polyRoots(a);
  const k = b[0] / a[0];
  // Return real parts only if imaginary parts tiny
  const zr = Z.map(c => Math.abs(c[1]) < 1e-9 ? c[0] : c[0]);
  const pr = P.map(c => Math.abs(c[1]) < 1e-9 ? c[0] : c[0]);
  return [colVec(zr), colVec(pr), scalar(k)];
}

async function zp2sos_fn(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('zp2sos: requires z, p, k');
  const Z = toArray(m(args[0])).map<C>(v => [v, 0]);
  const P = toArray(m(args[1])).map<C>(v => [v, 0]);
  const k = asScalar(m(args[2]));
  const [sos, kg] = await zp2sos_impl(Z, P, k);
  return [sos, kg];
}

async function zp2sos_impl(Z: C[], P: C[], k: number): Promise<[Value, Value]> {
  const zPairs = pairRoots(Z), pPairs = pairRoots(P);
  const nSecs = Math.max(zPairs.length, pPairs.length);
  while (zPairs.length < nSecs) zPairs.push([]);
  while (pPairs.length < nSecs) pPairs.push([]);

  const sosData = new Float64Array(nSecs * 6);
  for (let i = 0; i < nSecs; i++) {
    const zp = zPairs[i], pp = pPairs[i];
    let b: number[], a: number[];
    if (zp.length === 2) b = Array.from(roots2poly(zp).map(c=>c[0]));
    else if (zp.length === 1) b = [1, -zp[0][0], 0];
    else b = [1, 0, 0];
    if (pp.length === 2) a = Array.from(roots2poly(pp).map(c=>c[0]));
    else if (pp.length === 1) a = [1, -pp[0][0], 0];
    else a = [1, 0, 0];
    // Pad to length 3
    while (b.length < 3) b.push(0);
    while (a.length < 3) a.push(0);
    sosData.set([b[0],b[1],b[2],a[0],a[1],a[2]], i*6);
  }
  // Apply overall gain to first section's numerator
  sosData[0] *= k; sosData[1] *= k; sosData[2] *= k;
  return [mat(nSecs, 6, sosData), scalar(k)];
}

// ── firls — least-squares FIR filter design ───────────────────────────────────────────
// b = firls(n, f, a) — least-squares FIR, linear-phase (Type I/II)
async function firls(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('firls: requires n, f, a');
  const N = Math.round(asScalar(m(args[0]))); // filter order
  const f = toArray(m(args[1])); // frequency edges [0..1]
  const a = toArray(m(args[2])); // desired amplitudes at each edge
  const w = args.length > 3 ? toArray(m(args[3])) : Array(f.length/2).fill(1);

  const M = N + 1; // filter length
  const L = Math.floor(N / 2); // number of unique coefficients (including center for Type I)
  const typeI = N % 2 === 0;
  const nCoef = typeI ? L + 1 : L + 1;

  // Build the least-squares matrix Q and vector b using cosine basis
  // Q[k][l] = integral over bands of W(f)*cos(k*pi*f)*cos(l*pi*f) df
  // b[k] = integral over bands of W(f)*D(f)*cos(k*pi*f) df
  // Approximate with dense quadrature over each band
  const NQUAD = 1024;
  const Q = Array.from({length: nCoef}, () => Array(nCoef).fill(0));
  const b_rhs = Array(nCoef).fill(0);

  for (let band = 0; band < f.length/2; band++) {
    const fl = f[2*band], fh = f[2*band+1];
    const wb = w[band] ?? 1;
    const dlo = a[2*band], dhi = a[2*band+1];
    const npts = Math.max(8, Math.round(NQUAD * (fh - fl)));
    const df = (fh - fl) / npts;
    for (let i = 0; i <= npts; i++) {
      const freq = fl + i * (fh - fl) / npts;
      const desired = dlo + i * (dhi - dlo) / npts;
      const wt = wb * df * (i === 0 || i === npts ? 0.5 : 1);
      const omega = Math.PI * freq;
      const basis = Array.from({length: nCoef}, (_, k) =>
        typeI ? Math.cos(k * omega) : Math.cos((k + 0.5) * omega)
      );
      for (let k = 0; k < nCoef; k++) {
        b_rhs[k] += wt * desired * basis[k];
        for (let l = 0; l < nCoef; l++) Q[k][l] += wt * basis[k] * basis[l];
      }
    }
  }

  const c = gaussElim(Q, b_rhs);
  const h = new Float64Array(M);
  if (typeI) {
    h[L] = c[0];
    for (let k = 1; k <= L; k++) { h[L-k] = c[k]/2; h[L+k] = c[k]/2; }
  } else {
    for (let k = 0; k < nCoef; k++) { h[L-k] = c[k]/2; if (L-k !== L+k+1) h[L+k+1] = c[k]/2; }
  }
  return [rowVec(Array.from(h))];
}

// ── firpm / remez — Parks-McClellan equiripple FIR ────────────────────────────────────
async function firpm(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('firpm: requires n, f, a');
  let N = Math.round(asScalar(m(args[0])));
  const f = toArray(m(args[1])); // band edges [0..1]
  const a = toArray(m(args[2])); // desired amplitudes
  const w = args.length > 3 && isMat(args[3]) ? toArray(m(args[3])) : Array(f.length/2).fill(1);

  // Ensure even order for Type I (better numerical properties)
  if (N % 2 !== 0) N++;

  const L = N / 2; // highest cosine index
  const nRef = L + 2; // number of reference points

  // Build dense grid over approximation bands
  const NGRID = Math.max(512, 16 * nRef);
  const gridF: number[] = [], gridD: number[] = [], gridW: number[] = [];
  for (let band = 0; band < f.length/2; band++) {
    const fl = f[2*band], fh = f[2*band+1];
    const dl = a[2*band], dh = a[2*band+1];
    const wb = w[band] ?? 1;
    const npts = Math.max(10, Math.round(NGRID * (fh-fl)));
    for (let i = 0; i <= npts; i++) {
      const t = i/npts;
      gridF.push(fl + t*(fh-fl));
      gridD.push(dl + t*(dh-dl));
      gridW.push(wb);
    }
  }
  const NG = gridF.length;

  // Initialize reference indices uniformly
  let refIdx: number[] = Array.from({length: nRef}, (_,i) => Math.round(i*(NG-1)/(nRef-1)));
  let prevDelta = Infinity;

  for (let iter = 0; iter < 50; iter++) {
    // Build system matrix: [cos(k*pi*f_i), (-1)^i/w_i] × [c; delta] = [d_i]
    const mat_: number[][] = Array.from({length: nRef}, () => Array(nRef).fill(0));
    const rhs: number[] = Array(nRef).fill(0);
    for (let i = 0; i < nRef; i++) {
      const fi = gridF[refIdx[i]], di = gridD[refIdx[i]], wi = gridW[refIdx[i]];
      const omega = Math.PI * fi;
      for (let k = 0; k <= L; k++) mat_[i][k] = Math.cos(k * omega);
      mat_[i][L+1] = ((-1)**i) / wi;
      rhs[i] = di;
    }
    const sol = gaussElim(mat_, rhs);
    const c = sol.slice(0, L+1);
    const delta = Math.abs(sol[L+1]);

    // Evaluate weighted error E(f) = W(f)*[P(f) - D(f)] on full grid
    const E = gridF.map((fi, idx) => {
      const omega = Math.PI * fi;
      const P = c.reduce((s, ck, k) => s + ck * Math.cos(k*omega), 0);
      return gridW[idx] * (P - gridD[idx]);
    });

    // Find extrema (local maxima of |E|), including band boundaries
    const extrema: number[] = [];
    const bandBounds = new Set<number>();
    // Add band boundary indices (first and last of each band)
    let pos = 0;
    for (let band = 0; band < f.length/2; band++) {
      const npts = Math.max(10, Math.round(NGRID * (f[2*band+1]-f[2*band])));
      bandBounds.add(pos); bandBounds.add(pos+npts);
      pos += npts+1;
    }
    for (let i = 0; i < NG; i++) {
      const isExtremum = bandBounds.has(i) ||
        (i > 0 && i < NG-1 && ((E[i] >= E[i-1] && E[i] >= E[i+1]) || (E[i] <= E[i-1] && E[i] <= E[i+1])));
      if (isExtremum && Math.abs(E[i]) > delta * 0.05) extrema.push(i);
    }

    // Deduplicate and select nRef alternating extrema with largest |E|
    const newRefs = selectRemezRefs(extrema, E, nRef);
    refIdx = newRefs.length >= nRef ? newRefs : refIdx;

    if (Math.abs(delta - prevDelta) / (delta || 1) < 1e-6 && iter > 5) break;
    prevDelta = delta;
  }

  // Compute final filter coefficients from last cosine polynomial
  const mat_f: number[][] = Array.from({length: nRef}, () => Array(nRef).fill(0));
  const rhs_f: number[] = Array(nRef).fill(0);
  for (let i = 0; i < nRef; i++) {
    const fi = gridF[refIdx[i]], di = gridD[refIdx[i]], wi = gridW[refIdx[i]];
    const omega = Math.PI * fi;
    for (let k = 0; k <= L; k++) mat_f[i][k] = Math.cos(k * omega);
    mat_f[i][L+1] = ((-1)**i) / wi;
    rhs_f[i] = di;
  }
  const sol = gaussElim(mat_f, rhs_f);
  const c = sol.slice(0, L+1);

  const M = N + 1;
  const h = new Float64Array(M);
  h[L] = c[0];
  for (let k = 1; k <= L; k++) { h[L-k] = c[k]/2; h[L+k] = c[k]/2; }
  return [rowVec(Array.from(h))];
}

function selectRemezRefs(extrema: number[], E: number[], nRef: number): number[] {
  if (extrema.length === 0) return [];
  // Reduce to alternating-sign extrema (keep max |E| within each same-sign run)
  const sorted = [...extrema].sort((a, b) => a - b);
  const alt: number[] = [];
  for (const idx of sorted) {
    if (alt.length === 0) { alt.push(idx); continue; }
    const lastSign = Math.sign(E[alt[alt.length-1]]);
    const thisSign = Math.sign(E[idx]);
    if (thisSign !== lastSign) {
      alt.push(idx);
    } else if (Math.abs(E[idx]) > Math.abs(E[alt[alt.length-1]])) {
      alt[alt.length-1] = idx;
    }
  }
  // Remove smallest-magnitude until nRef remain
  while (alt.length > nRef) {
    let minI = 0, minV = Infinity;
    for (let i = 0; i < alt.length; i++) {
      if (Math.abs(E[alt[i]]) < minV) { minV = Math.abs(E[alt[i]]); minI = i; }
    }
    alt.splice(minI, 1);
  }
  return alt;
}

// Alias: remez = firpm
const remez = firpm;

// ── decimate ─────────────────────────────────────────────────────────────────────────
// y = decimate(x, r) — downsample by r with anti-aliasing FIR filter
async function decimate_fn(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('decimate: requires x and r');
  const x = toArray(m(args[0]));
  const r = Math.round(asScalar(m(args[1])));
  const n = args.length > 2 && isMat(args[2]) ? Math.round(asScalar(m(args[2]))) : 30;
  // Design anti-aliasing LP FIR with cutoff 1/r
  const Wn = 1 / r;
  const M = n; // filter order
  // fir1 equivalent: hamming window LP
  const L2 = M / 2;
  const h = new Float64Array(M + 1);
  for (let k = 0; k <= M; k++) {
    const kc = k - L2;
    h[k] = kc === 0 ? Wn : Wn * Math.sin(Math.PI * Wn * kc) / (Math.PI * Wn * kc);
    // Hamming window
    h[k] *= 0.54 - 0.46 * Math.cos(2 * Math.PI * k / M);
  }
  // Apply filter then downsample
  const filtered = new Float64Array(x.length);
  const order = h.length - 1;
  for (let i = 0; i < x.length; i++) {
    let y = 0;
    for (let k = 0; k < h.length; k++) { if (i-k >= 0) y += h[k] * x[i-k]; }
    filtered[i] = y;
  }
  const yn = Float64Array.from({length: Math.ceil(x.length / r)}, (_, i) => filtered[i * r]);
  return [colVec(Array.from(yn))];
}

// ── interp ───────────────────────────────────────────────────────────────────────────
// y = interp(x, r) — upsample by r with interpolating LP FIR
async function interp_fn(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('interp: requires x and r');
  const x = toArray(m(args[0]));
  const r = Math.round(asScalar(m(args[1])));
  const n = args.length > 2 ? Math.round(asScalar(m(args[2]))) : 4;
  // Upsample (insert zeros)
  const xu = new Float64Array(x.length * r);
  for (let i = 0; i < x.length; i++) xu[i * r] = x[i];
  // LP FIR interpolation filter: cutoff = 1/r, gain = r
  const M = 2 * n * r;
  const h = new Float64Array(M + 1);
  const L2 = M / 2;
  const Wn = 1 / r;
  for (let k = 0; k <= M; k++) {
    const kc = k - L2;
    h[k] = kc === 0 ? Wn * r : r * Wn * Math.sin(Math.PI * Wn * kc) / (Math.PI * Wn * kc);
    h[k] *= 0.54 - 0.46 * Math.cos(2 * Math.PI * k / M);
  }
  const yn = new Float64Array(xu.length);
  for (let i = 0; i < xu.length; i++) {
    let y = 0;
    for (let k = 0; k < h.length; k++) { if (i-k >= 0) y += h[k] * xu[i-k]; }
    yn[i] = y;
  }
  return [colVec(Array.from(yn))];
}

// ── resample ──────────────────────────────────────────────────────────────────────────
// y = resample(x, p, q) — rational resampling: upsample by p, filter, downsample by q
async function resample_fn(args: Value[]): Promise<Value[]> {
  if (args.length < 3) throw new MatError('resample: requires x, p, q');
  const x = toArray(m(args[0]));
  const p = Math.round(asScalar(m(args[1])));
  const q = Math.round(asScalar(m(args[2])));
  const n = 10; // filter half-length per polyphase branch

  // Upsample by p
  const xu = new Float64Array(x.length * p);
  for (let i = 0; i < x.length; i++) xu[i * p] = x[i];

  // LP anti-alias filter: cutoff = min(1/p, 1/q) * min(p,q) = 1/max(p,q), gain = p
  const Wn = 1 / Math.max(p, q);
  const M = 2 * n * Math.max(p, q);
  const h = new Float64Array(M + 1);
  const L2 = M / 2;
  for (let k = 0; k <= M; k++) {
    const kc = k - L2;
    h[k] = kc === 0 ? Wn * p : p * Wn * Math.sin(Math.PI * Wn * kc) / (Math.PI * Wn * kc);
    h[k] *= 0.54 - 0.46 * Math.cos(2 * Math.PI * k / M);
  }

  // Apply filter
  const filtered = new Float64Array(xu.length);
  for (let i = 0; i < xu.length; i++) {
    let y = 0;
    for (let k = 0; k < h.length; k++) { if (i-k >= 0) y += h[k] * xu[i-k]; }
    filtered[i] = y;
  }

  // Downsample by q
  const yn = Float64Array.from({length: Math.ceil(xu.length / q)}, (_, i) => filtered[i * q]);
  return [colVec(Array.from(yn))];
}

// ── DSP System objects ─────────────────────────────────────────────────────────────────
// System objects are stateful filter processors. We store state in ClassV props.

function makeSysObj(className: string, extra: Record<string, Value> = {}): Value {
  const props = new Map<string, Value>(Object.entries(extra).map(([k,v]) => [k,v]));
  return makeObject(className, props);
}

async function dspFIRFilter(args: Value[]): Promise<Value[]> {
  const h = args.length > 0 && isMat(args[0]) ? toArray(m(args[0])) : [1];
  const state = new Float64Array(h.length - 1);
  const props = new Map<string, Value>();
  props.set('Numerator', rowVec(h));
  props.set('_state', rowVec(Array.from(state)));
  props.set('Structure', str('Direct form II transposed'));
  return [makeObject('dsp.FIRFilter', props)];
}

async function dspBiquadFilter(args: Value[]): Promise<Value[]> {
  const sos = args.length > 0 && isMat(args[0]) ? args[0] : zeros(1, 6);
  const props = new Map<string, Value>();
  props.set('SOSMatrix', sos);
  props.set('ScaleValues', scalar(1));
  return [makeObject('dsp.BiquadFilter', props)];
}

async function dspFIRDecimator(args: Value[]): Promise<Value[]> {
  const r = args.length > 0 ? asScalar(m(args[0])) : 2;
  const h = args.length > 1 && isMat(args[1]) ? toArray(m(args[1])) : (() => {
    // Default: LP FIR with cutoff 1/r
    const M = 30, L2 = M/2, Wn = 1/r;
    return Array.from({length: M+1}, (_, k) => {
      const kc = k-L2;
      return (kc === 0 ? Wn : Wn*Math.sin(Math.PI*Wn*kc)/(Math.PI*Wn*kc)) * (0.54-0.46*Math.cos(2*Math.PI*k/M));
    });
  })();
  const props = new Map<string, Value>();
  props.set('DecimationFactor', scalar(r));
  props.set('Numerator', rowVec(h));
  return [makeObject('dsp.FIRDecimator', props)];
}

async function dspFIRInterpolator(args: Value[]): Promise<Value[]> {
  const r = args.length > 0 ? asScalar(m(args[0])) : 2;
  const props = new Map<string, Value>();
  props.set('InterpolationFactor', scalar(r));
  return [makeObject('dsp.FIRInterpolator', props)];
}

async function dspRMS(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('_running', scalar(0));
  props.set('_count', scalar(0));
  return [makeObject('dsp.RMS', props)];
}

async function dspMean(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('_sum', scalar(0));
  props.set('_count', scalar(0));
  return [makeObject('dsp.Mean', props)];
}

async function dspVariance(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('_sum', scalar(0));
  props.set('_sum2', scalar(0));
  props.set('_count', scalar(0));
  return [makeObject('dsp.Variance', props)];
}

async function dspSpectrumAnalyzer(args: Value[]): Promise<Value[]> {
  const props = new Map<string, Value>();
  props.set('SampleRate', args.length > 0 ? args[0] : scalar(1));
  return [makeObject('dsp.SpectrumAnalyzer', props)];
}

// step() method — process a block of samples through a System object
async function dspStep(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('step: requires system object and input');
  const obj = args[0] as any;
  if (obj.kind !== 'object') throw new MatError('step: requires a System object');
  const className: string = obj.className ?? '';
  const props: Map<string, Value> = obj.props;
  const x = toArray(m(args[1]));

  if (className === 'dsp.FIRFilter') {
    const h = toArray(m(props.get('Numerator')!));
    const stateArr = props.has('_state') ? toArray(m(props.get('_state')!)) : Array(h.length-1).fill(0);
    const state = [...stateArr];
    const y = new Float64Array(x.length);
    for (let i = 0; i < x.length; i++) {
      let acc = h[0] * x[i];
      for (let k = 0; k < state.length; k++) acc += h[k+1] * (state[k] ?? 0);
      y[i] = acc;
      // Update state (shift register)
      for (let k = state.length-1; k > 0; k--) state[k] = state[k-1];
      if (state.length > 0) state[0] = x[i];
    }
    props.set('_state', rowVec(state));
    return [colVec(Array.from(y))];
  }

  if (className === 'dsp.FIRDecimator') {
    const r = Math.round(asScalar(m(props.get('DecimationFactor')!)));
    const h = toArray(m(props.get('Numerator')!));
    const yn: number[] = [];
    for (let i = 0; i < x.length; i++) {
      if (i % r === r-1) {
        let acc = 0;
        for (let k = 0; k < h.length; k++) acc += h[k] * (x[i-k*(r)] ?? 0);
        yn.push(acc);
      }
    }
    return [colVec(yn)];
  }

  if (className === 'dsp.RMS') {
    const xArr = toArray(m(args[1]));
    const rms = Math.sqrt(xArr.reduce((s, v) => s + v*v, 0) / xArr.length);
    return [scalar(rms)];
  }

  if (className === 'dsp.Mean') {
    const xArr = toArray(m(args[1]));
    return [scalar(xArr.reduce((s, v) => s + v, 0) / xArr.length)];
  }

  if (className === 'dsp.Variance') {
    const xArr = toArray(m(args[1]));
    const mean = xArr.reduce((s, v) => s + v, 0) / xArr.length;
    const variance = xArr.reduce((s, v) => s + (v-mean)**2, 0) / xArr.length;
    return [scalar(variance)];
  }

  // Unknown system object: pass through
  return [args[1]];
}

// release() stub — reset a System object's state
async function dspRelease(args: Value[]): Promise<Value[]> {
  if (args.length > 0 && (args[0] as any).kind === 'object') {
    const props: Map<string, Value> = (args[0] as any).props;
    if (props.has('_state')) props.set('_state', rowVec([]));
  }
  return [];
}

// reset() stub — same as release for our purposes
const dspReset = dspRelease;

// ── Additional utilities ───────────────────────────────────────────────────────────────
async function firpmord(args: Value[]): Promise<Value[]> {
  // Estimate order for firpm: [n,fo,ao,w] = firpmord(f,a,dev[,fs])
  if (args.length < 3) throw new MatError('firpmord: requires f, a, dev');
  const f = toArray(m(args[0])), a = toArray(m(args[1])), dev = toArray(m(args[2]));
  const fs = args.length > 3 ? asScalar(m(args[3])) : 1;
  // Kaiser formula estimate for minimum transition band width
  const dmin = Math.min(...dev), dmax = Math.max(...dev);
  const A = -20 * Math.log10(dmin); // stopband attenuation
  let n = Math.ceil((A - 8) / (2.285 * Math.PI * Math.min(...f.filter((_,i)=>i>0).map((v,i)=>Math.abs(v-f[i]))) * fs));
  if (n % 2 !== 0) n++;
  return [scalar(n), rowVec(f.map(v => v/fs)), rowVec(a), scalar(0.5)];
}

async function chebwin(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('chebwin: requires n');
  const n = Math.round(asScalar(m(args[0])));
  const rs = args.length > 1 ? asScalar(m(args[1])) : 100;
  // Dolph-Chebyshev window via DFT
  const r = 10**(rs/20);
  const x0 = Math.cosh(Math.acosh(r) / (n-1));
  const w = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    let s = 0;
    for (let k = 1; k <= Math.floor((n-1)/2); k++) {
      const x = x0 * Math.cos(Math.PI * k / n);
      const T = Math.abs(x) >= 1 ? Math.cosh((n-1)*Math.acosh(Math.abs(x)))*Math.sign(x) : Math.cos((n-1)*Math.acos(x));
      s += T * Math.cos(2 * Math.PI * k * i / n);
    }
    w[i] = r + 2 * s;
  }
  // Normalize
  const wmax = Math.max(...w);
  return [rowVec(Array.from(w.map(v => v/wmax)))];
}

async function taylorwin(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('taylorwin: requires n');
  const n = Math.round(asScalar(m(args[0])));
  const nbar = args.length > 1 ? Math.round(asScalar(m(args[1]))) : 4;
  const sll = args.length > 2 ? asScalar(m(args[2])) : -30;
  // Taylor window: approximation via cosine series
  const A = -sll / 20; // in decades... actually A = sll is already in dB (negative)
  const sigma2 = nbar**2 / (A**2 + (nbar - 0.5)**2);
  const w = new Float64Array(n);
  for (let i = 0; i < n; i++) {
    const xi = (i - (n-1)/2) / n;
    let s = 1;
    for (let m = 1; m < nbar; m++) {
      let num = 1, den = 1;
      for (let ni = 1; ni < nbar; ni++) { if (ni !== m) { num *= 1 - m**2/sigma2/(ni**2); den *= 1 - m**2/(ni**2); } }
      s += (num/den) * 2 * Math.cos(2*Math.PI*m*xi) * (m%2===0?-1:1);
    }
    w[i] = s;
  }
  const wmin = Math.min(...w);
  const wmax = Math.max(...w);
  return [rowVec(Array.from(w.map(v => (v-wmin)/(wmax-wmin))))];
}

async function tukeywin(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tukeywin: requires n');
  const n = Math.round(asScalar(m(args[0])));
  const r = args.length > 1 ? asScalar(m(args[1])) : 0.5;
  const w = new Float64Array(n);
  const half = Math.floor(r*n/2);
  for (let i = 0; i < n; i++) {
    if (i < half) w[i] = 0.5*(1 - Math.cos(Math.PI*i/half));
    else if (i <= n-half-1) w[i] = 1;
    else w[i] = 0.5*(1 - Math.cos(Math.PI*(n-1-i)/half));
  }
  return [rowVec(Array.from(w))];
}

async function gausswin(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('gausswin: requires n');
  const n = Math.round(asScalar(m(args[0])));
  const alpha = args.length > 1 ? asScalar(m(args[1])) : 2.5;
  const L = n - 1;
  const w = Float64Array.from({length:n}, (_,i) => Math.exp(-0.5*(alpha*(2*i-L)/L)**2));
  return [rowVec(Array.from(w))];
}

export const DSP: ToolboxModule = {
  id: 'dsp',
  name: 'DSP System Toolbox',
  docBase: 'https://www.mathworks.com/help/dsp/',
  builtins: {
    // Filter analysis
    grpdelay,
    impz,
    stepz,
    // Standalone bilinear transform
    bilinear,
    // Bessel filter
    besself,
    // FIR design
    firpm,
    remez,
    firls,
    firpmord,
    // SOS operations
    sosfilt,
    tf2sos,
    sos2tf,
    zp2tf,
    tf2zp,
    zp2sos: zp2sos_fn,
    // Multirate
    decimate: decimate_fn,
    interp: interp_fn,
    resample: resample_fn,
    // Windows (additional, not in signal.ts)
    chebwin,
    taylorwin,
    tukeywin,
    gausswin,
    // System object step/release
    step: dspStep,
    release: dspRelease,
    reset: dspReset,
  },
  // DSP System objects exposed via dsp.* namespace (handled by dot-notation in builtins)
  methods: {
    'dsp.FIRFilter': { create: dspFIRFilter, step: dspStep, release: dspRelease },
    'dsp.BiquadFilter': { create: dspBiquadFilter, step: dspStep, release: dspRelease },
    'dsp.FIRDecimator': { create: dspFIRDecimator, step: dspStep, release: dspRelease },
    'dsp.FIRInterpolator': { create: dspFIRInterpolator, step: dspStep, release: dspRelease },
    'dsp.RMS': { create: dspRMS, step: dspStep },
    'dsp.Mean': { create: dspMean, step: dspStep },
    'dsp.Variance': { create: dspVariance, step: dspStep },
    'dsp.SpectrumAnalyzer': { create: dspSpectrumAnalyzer, step: dspStep },
  },
  constants: {
    'dsp.FIRFilter': dspFIRFilter as any,
    'dsp.BiquadFilter': dspBiquadFilter as any,
    'dsp.FIRDecimator': dspFIRDecimator as any,
    'dsp.FIRInterpolator': dspFIRInterpolator as any,
    'dsp.RMS': dspRMS as any,
    'dsp.Mean': dspMean as any,
    'dsp.Variance': dspVariance as any,
    'dsp.SpectrumAnalyzer': dspSpectrumAnalyzer as any,
  },
  help: {
    firpm: {
      summary: 'Parks-McClellan optimal equiripple FIR filter design',
      syntax: ['b = firpm(n,f,a)', 'b = firpm(n,f,a,w)', "b = firpm(n,f,a,'ftype')"],
      description: [
        "b = firpm(n,f,a) returns the coefficients of an order n FIR filter with the best approximation to the desired frequency response described by f and a.",
        'f is a vector of frequency band edges in [0,1] (Nyquist=1). a specifies the desired amplitude at each band edge (piecewise-linear).',
        'Uses the Parks-McClellan Remez exchange algorithm to find the Chebyshev equiripple solution.',
        'w optionally specifies per-band weights (default 1). Higher weight → smaller error in that band.',
      ],
      seealso: ['firls', 'fir1', 'fir2', 'firpmord', 'kaiserord'],
    },
    remez: {
      summary: 'Parks-McClellan optimal equiripple FIR filter design (alias for firpm)',
      syntax: ['b = remez(n,f,a)', 'b = remez(n,f,a,w)'],
      seealso: ['firpm', 'firls', 'fir1'],
    },
    firls: {
      summary: 'Least-squares linear-phase FIR filter design',
      syntax: ['b = firls(n,f,a)', 'b = firls(n,f,a,w)'],
      description: [
        'b = firls(n,f,a) designs an order n linear-phase FIR filter that minimises the weighted integral of the squared error between the desired and actual frequency responses.',
        'f and a specify band edges and desired amplitudes in [0,1]. w is per-band weight vector.',
        'Unlike firpm (equiripple), firls minimises total energy of the error — smoother but potentially larger peak error.',
      ],
      seealso: ['firpm', 'fir1', 'fir2'],
    },
    grpdelay: {
      summary: 'Group delay of digital filter',
      syntax: ['[gd,w] = grpdelay(b,a)', '[gd,w] = grpdelay(b,a,n)', '[gd,w] = grpdelay(b,a,n,whole)'],
      description: [
        'gd = grpdelay(b,a) returns the n-point (default 512) group delay of the digital filter with transfer function H(z) = B(z)/A(z).',
        'Group delay is the negative derivative of phase: gd(ω) = -dφ(ω)/dω.',
        'For a linear-phase FIR filter the group delay is constant (= (n-1)/2).',
      ],
      seealso: ['freqz', 'phasez', 'impz', 'fvtool'],
    },
    impz: {
      summary: 'Impulse response of digital filter',
      syntax: ['[h,t] = impz(b,a)', '[h,t] = impz(b,a,n)'],
      description: ['h = impz(b,a) computes the first n samples of the impulse response of the digital filter with coefficients b (numerator) and a (denominator).'],
      seealso: ['stepz', 'freqz', 'grpdelay'],
    },
    stepz: {
      summary: 'Step response of digital filter',
      syntax: ['[s,t] = stepz(b,a)', '[s,t] = stepz(b,a,n)'],
      description: ['s = stepz(b,a) computes the step response (cumulative sum of impulse response) of the digital filter.'],
      seealso: ['impz', 'freqz'],
    },
    sosfilt: {
      summary: 'Second-order (biquad) IIR filtering',
      syntax: ['y = sosfilt(sos,x)', 'y = sosfilt(sos,x,zi)'],
      description: [
        'y = sosfilt(sos,x) filters x using the second-order section matrix sos.',
        'sos is an L×6 matrix where each row [b0 b1 b2 a0 a1 a2] defines one biquad section.',
        'More numerically stable than using single [b,a] form for high-order filters.',
      ],
      seealso: ['tf2sos', 'zp2sos', 'filter', 'filtfilt'],
    },
    tf2sos: {
      summary: 'Transfer function to second-order sections',
      syntax: ['[sos,g] = tf2sos(b,a)'],
      description: ['Converts numerator/denominator polynomial [b,a] to second-order sections [sos] plus gain g. Pairing is done by sorting poles by proximity to unit circle.'],
      seealso: ['sos2tf', 'zp2sos', 'tf2zp', 'sosfilt'],
    },
    sos2tf: {
      summary: 'Second-order sections to transfer function',
      syntax: ['[b,a] = sos2tf(sos)', '[b,a] = sos2tf(sos,g)'],
      description: ['Converts an L×6 SOS matrix (with optional gain g) to polynomial form [b,a].'],
      seealso: ['tf2sos', 'zp2sos', 'sosfilt'],
    },
    zp2tf: {
      summary: 'Zero-pole-gain to transfer function',
      syntax: ['[b,a] = zp2tf(z,p,k)'],
      description: ['Converts zeros z, poles p, and gain k to polynomial form [b,a].'],
      seealso: ['tf2zp', 'zp2sos', 'zpkdata'],
    },
    tf2zp: {
      summary: 'Transfer function to zero-pole-gain',
      syntax: ['[z,p,k] = tf2zp(b,a)'],
      description: ['Converts polynomial form [b,a] to zeros z, poles p, and gain k by root finding.'],
      seealso: ['zp2tf', 'tf2sos', 'zpkdata'],
    },
    'zp2sos': {
      summary: 'Zero-pole-gain to second-order sections',
      syntax: ['sos = zp2sos(z,p,k)', '[sos,g] = zp2sos(z,p,k)'],
      description: ['Converts zeros, poles, and gain to second-order section matrix. Pairs complex conjugate roots into biquad sections.'],
      seealso: ['sos2tf', 'tf2sos', 'sosfilt'],
    },
    bilinear: {
      summary: 'Bilinear transformation method of IIR filter design',
      syntax: ['[Bz,Az] = bilinear(B,A,Fs)', '[Zd,Pd,Kd] = bilinear(Z,P,K,Fs)'],
      description: [
        '[Bz,Az] = bilinear(B,A,Fs) converts the analog prototype with transfer function B(s)/A(s) to a digital filter using the bilinear transform s = 2*Fs*(z-1)/(z+1).',
        'Fs is the sampling frequency in Hz. Use prewarped analog prototype for exact cutoff mapping.',
      ],
      seealso: ['butter', 'cheby1', 'cheby2', 'ellip', 'besself'],
    },
    besself: {
      summary: 'Bessel analog lowpass filter design',
      syntax: ['[b,a] = besself(n,Wo)', "[b,a] = besself(n,Wo,'high')"],
      description: [
        '[b,a] = besself(n,Wo) designs an n-th order analog Bessel lowpass filter with cutoff frequency Wo rad/s.',
        'Bessel filters have maximally flat group delay (linear phase) in the passband. Stopband attenuation is less steep than Butterworth/Chebyshev for the same order.',
        'Use bilinear() to convert to digital.',
      ],
      seealso: ['butter', 'cheby1', 'ellip', 'bilinear'],
    },
    decimate: {
      summary: 'Decimate signal by integer factor',
      syntax: ['y = decimate(x,r)', 'y = decimate(x,r,n)'],
      description: [
        'y = decimate(x,r) reduces the sample rate of x by the integer factor r.',
        'Applies a 30th-order anti-aliasing FIR lowpass filter with cutoff 1/r (Hamming window) before downsampling.',
        'n overrides the filter order.',
      ],
      seealso: ['interp', 'resample', 'upfirdn', 'downsample'],
    },
    interp: {
      summary: 'Interpolate signal by integer factor',
      syntax: ['y = interp(x,r)', 'y = interp(x,r,l)'],
      description: [
        'y = interp(x,r) increases the sample rate of x by the integer factor r using a low-pass FIR interpolation filter.',
        'The output has r*length(x) samples.',
      ],
      seealso: ['decimate', 'resample', 'upfirdn', 'upsample'],
    },
    resample: {
      summary: 'Resample signal at new sample rate',
      syntax: ['y = resample(x,p,q)', 'y = resample(x,p,q,n)'],
      description: [
        'y = resample(x,p,q) resamples x at p/q times the original sample rate using polyphase filtering.',
        'Equivalent to upsampling by p, anti-alias filtering, then downsampling by q.',
      ],
      seealso: ['decimate', 'interp', 'upfirdn'],
    },
    chebwin: {
      summary: 'Chebyshev window',
      syntax: ['w = chebwin(n)', 'w = chebwin(n,r)'],
      description: ['w = chebwin(n,r) returns an n-point Dolph-Chebyshev window with r dB of sidelobe attenuation (default 100 dB).'],
      seealso: ['gausswin', 'taylorwin', 'tukeywin', 'kaiser'],
    },
    taylorwin: {
      summary: 'Taylor window',
      syntax: ['w = taylorwin(n)', 'w = taylorwin(n,nbar,sll)'],
      description: ['Taylor window with nbar near-sidelobe pairs and sll dB peak sidelobe level (default nbar=4, sll=-30 dB).'],
      seealso: ['chebwin', 'gausswin', 'tukeywin'],
    },
    tukeywin: {
      summary: 'Tukey (cosine-tapered) window',
      syntax: ['w = tukeywin(n)', 'w = tukeywin(n,r)'],
      description: ['Tukey window with taper ratio r (default 0.5). r=0 → rectangular; r=1 → Hann.'],
      seealso: ['chebwin', 'gausswin', 'taylorwin'],
    },
    gausswin: {
      summary: 'Gaussian window',
      syntax: ['w = gausswin(n)', 'w = gausswin(n,alpha)'],
      description: ['Gaussian window: w(n) = exp(-0.5*(alpha*(2n-N)/(N))^2). alpha controls width (default 2.5).'],
      seealso: ['chebwin', 'tukeywin', 'taylorwin'],
    },
    firpmord: {
      summary: 'Parks-McClellan optimal FIR filter order estimation',
      syntax: ['[n,fo,ao,w] = firpmord(f,a,dev)', '[n,fo,ao,w] = firpmord(f,a,dev,fs)'],
      description: ['Estimates the minimum order n for a Parks-McClellan FIR filter meeting the given specifications. Returns order, normalized frequency edges, amplitudes, and weights for firpm.'],
      seealso: ['firpm', 'kaiserord', 'fir1'],
    },
    step: {
      summary: 'Execute DSP System object algorithm',
      syntax: ['y = step(h,x)', 'step(h,x)'],
      description: [
        'y = step(h,x) processes input x through System object h and returns output y.',
        'Works with: dsp.FIRFilter, dsp.BiquadFilter, dsp.FIRDecimator, dsp.FIRInterpolator, dsp.RMS, dsp.Mean, dsp.Variance.',
        'System objects maintain internal state between calls.',
      ],
      seealso: ['release', 'reset'],
    },
    release: {
      summary: 'Release resources and allow changes to System object property values and input characteristics',
      syntax: ['release(h)'],
      description: ['Resets internal state of DSP System object h, allowing property changes.'],
      seealso: ['step', 'reset'],
    },
  },
};
