// Radar Toolbox — computable, exactly-validatable subset.
//
// Range/time/Doppler converters and the radar-range-equation family (closed-form, validated to
// 1e-6 against live MATLAB R2026a), plus the ULA/array steering vector `steervec` (complex).
//
// Validated oracle values (MATLAB R2026a):
//   dop2speed(1000,0.03)        = 30
//   speed2dop(15,0.03)          = 500
//   range2time(1000)            = 6.67128190396304e-06
//   time2range(1e-5)            = 1498.96229
//   range2bw(1)                 = 149896229          (== rangeres2bw(1))
//   radareqsnr(0.03,1000,1000,1e-6) = 30.5413163679585
//   radareqpow(0.03,1000,10,1e-6)   = 8.82812275113955
//   radareqrng(0.03,10,1000,1e-6)   = 3262.36770450521
//   steervec([0 .5 1 1.5],[30;20]) imag = [0; .995516410229549; .188329782854213; -.959888562465857]
//
// Discarded (hallucinated, do not exist in MATLAB): range2tof, dopplerFreq, radarEquation, cfar1d,
// phased_steeringVector. The radareq* functions accept name/value options (RCS, Ts, Gain, Loss,
// CustomFactor, ...) — here we implement the basic positional form with MATLAB's documented
// defaults (RCS=1, Ts=290 K, Gain=20 dB, Loss=0, CustomFactor=0, AtmosphericLoss=0,
// PropagationFactor=0) since those are the only ones we can validate exactly closed-form.

import { type Value, type Mat, scalar, asScalar, toMat as m } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

const C = 299792458;        // physconst('lightspeed'), m/s
const K_BOLTZ = 1.380649e-23; // physconst('Boltzmann'), J/K
const db2pow = (x: number) => 10 ** (x / 10);
const pow2db = (x: number) => 10 * Math.log10(x);
const FOURPI3 = (4 * Math.PI) ** 3;

const num = (v: Value, ctx: string) => asScalar(m(v, ctx), ctx);
const optC = (args: Value[], i: number) => (args[i] != null ? num(args[i], 'C') : C);

// ── range/time/Doppler converters (all scalar closed-form; element-wise on the first arg) ──
function elementwise(v: Value, f: (x: number) => number): Mat {
  const M = m(v, 'arg');
  const out = Float64Array.from(M.data, f);
  return { kind: 'num', rows: M.rows, cols: M.cols, data: out };
}

// dop2speed(dp,lambda) = dp*lambda
const dop2speed = (a: Value[]) => { const lam = num(a[1], 'LAMBDA'); return ret(elementwise(a[0], (x) => x * lam)); };
// speed2dop(sp,lambda) = sp/lambda
const speed2dop = (a: Value[]) => { const lam = num(a[1], 'LAMBDA'); return ret(elementwise(a[0], (x) => x / lam)); };
// range2time(r,c) = 2*r/c
const range2time = (a: Value[]) => { const c = optC(a, 1); return ret(elementwise(a[0], (r) => (2 * r) / c)); };
// time2range(t,c) = t*c/2
const time2range = (a: Value[]) => { const c = optC(a, 1); return ret(elementwise(a[0], (t) => (t * c) / 2)); };
// range2bw(r,c) == rangeres2bw(r,c) = c/(2*r)  (RangeBroadening default 1)
const range2bw = (a: Value[]) => { const c = optC(a, 1); return ret(elementwise(a[0], (r) => c / (2 * r))); };

// ── radar range equation (basic positional form, MATLAB defaults) ──
// Scalar RNG ⇒ transmit==receive range, so (RNG1*RNG2)^2 = R^4. Gain scalar ⇒ Gain(1)=Gain(2)=20.
const DEF = { RCS: 1, Ts: 290, GAIN: 20, LOSS: 0, FC: 0 } as const;

// radareqsnr(lambda,RNG,Pt,tau) → SNR in dB
function radareqsnr(a: Value[]): Promise<Value[]> {
  const lambda = num(a[0], 'lambda'), RNG = num(a[1], 'RNG'), Pt = num(a[2], 'Pt'), tau = num(a[3], 'tau');
  const snr = (Pt * tau * DEF.RCS * lambda ** 2) / (FOURPI3 * K_BOLTZ * DEF.Ts * (RNG * RNG) ** 2);
  const SNRdb = pow2db(snr) + DEF.GAIN + DEF.GAIN + DEF.FC - DEF.LOSS;
  return ret(scalar(SNRdb));
}

// radareqpow(lambda,RNG,SNR,tau) → transmit power Pt in Watts
function radareqpow(a: Value[]): Promise<Value[]> {
  const lambda = num(a[0], 'lambda'), RNG = num(a[1], 'RNG'), SNR = num(a[2], 'SNR'), tau = num(a[3], 'tau');
  const dBTerms = db2pow(SNR - DEF.GAIN - DEF.GAIN + DEF.LOSS - DEF.FC);
  const Pt = (FOURPI3 * K_BOLTZ * DEF.Ts * dBTerms * (RNG * RNG) ** 2) / (tau * DEF.RCS * lambda ** 2);
  return ret(scalar(Pt));
}

// radareqrng(lambda,SNR,Pt,tau) → maximum range in meters
function radareqrng(a: Value[]): Promise<Value[]> {
  const lambda = num(a[0], 'lambda'), SNR = num(a[1], 'SNR'), Pt = num(a[2], 'Pt'), tau = num(a[3], 'tau');
  const dBTerms = db2pow(SNR - DEF.GAIN - DEF.GAIN + DEF.LOSS - DEF.FC);
  const rng = ((Pt * tau * DEF.RCS * lambda ** 2) / (FOURPI3 * K_BOLTZ * DEF.Ts * dBTerms)) ** (1 / 4);
  return ret(scalar(rng));
}

// ── steervec(pos,ang) : array steering vector ──
// pos: 1×N (y-coords), 2×N (x,y) or 3×N (x,y,z) sensor positions in wavelengths.
// ang: 1×M azimuth (el=0) or 2×M [az;el] in degrees.
// sv(n,m) = exp(1i*2*pi * pos(:,n) · u(:,m)),  u = [cos(el)cos(az); cos(el)sin(az); sin(el)].
function colVecToXYZ(M: Mat): number[][] {
  // returns N triples [x,y,z], column-major source.
  const N = M.cols, rows = M.rows;
  const out: number[][] = [];
  for (let c = 0; c < N; c++) {
    let x = 0, y = 0, z = 0;
    if (rows === 1) { y = M.data[c]; }                 // 1×N ⇒ y only
    else if (rows === 2) { x = M.data[0 + c * 2]; y = M.data[1 + c * 2]; }
    else { x = M.data[0 + c * 3]; y = M.data[1 + c * 3]; z = M.data[2 + c * 3]; }
    out.push([x, y, z]);
  }
  return out;
}
function angToAzEl(M: Mat): [number, number][] {
  const Mn = M.cols, rows = M.rows;
  const out: [number, number][] = [];
  for (let c = 0; c < Mn; c++) {
    const az = M.data[0 + c * rows];
    const el = rows >= 2 ? M.data[1 + c * rows] : 0;
    out.push([az, el]);
  }
  return out;
}
function steervec(args: Value[]): Promise<Value[]> {
  const posM = m(args[0], 'POS'), angM = m(args[1], 'ANG');
  const pts = colVecToXYZ(posM);
  const angs = angToAzEl(angM);
  const N = pts.length, Mn = angs.length;
  const re = new Float64Array(N * Mn), im = new Float64Array(N * Mn);
  const d2r = Math.PI / 180;
  for (let mi = 0; mi < Mn; mi++) {
    const [azDeg, elDeg] = angs[mi];
    const az = azDeg * d2r, el = elDeg * d2r;
    const ux = Math.cos(el) * Math.cos(az), uy = Math.cos(el) * Math.sin(az), uz = Math.sin(el);
    for (let n = 0; n < N; n++) {
      const [px, py, pz] = pts[n];
      const phase = 2 * Math.PI * (px * ux + py * uy + pz * uz);
      const idx = n + mi * N; // column-major (N rows, M cols)
      re[idx] = Math.cos(phase);
      im[idx] = Math.sin(phase);
    }
  }
  const out: Mat = { kind: 'num', rows: N, cols: Mn, data: re, idata: im };
  return ret(out);
}

export const RADAR: ToolboxModule = {
  id: 'radar',
  name: 'Radar Toolbox',
  docBase: 'https://www.mathworks.com/help/radar/',
  docPath: (name) => `${name}.html`,
  builtins: {
    dop2speed,
    speed2dop,
    range2time,
    time2range,
    range2bw,
    radareqsnr,
    radareqpow,
    radareqrng,
    steervec,
  },
  help: {
    dop2speed: 'dop2speed(dp,lambda): convert Doppler shift (Hz) to radial speed (m/s) = dp*lambda.',
    speed2dop: 'speed2dop(sp,lambda): convert radial speed (m/s) to Doppler shift (Hz) = sp/lambda.',
    range2time: 'range2time(r[,c]): round-trip propagation time (s) for range r = 2*r/c.',
    time2range: 'time2range(t[,c]): range (m) for round-trip time t = t*c/2.',
    range2bw: 'range2bw(r[,c]): pulse bandwidth (Hz) for range resolution r = c/(2*r).',
    radareqsnr: 'radareqsnr(lambda,RNG,Pt,tau): SNR (dB) from the radar range equation (defaults RCS=1, Ts=290, Gain=20).',
    radareqpow: 'radareqpow(lambda,RNG,SNR,tau): peak transmit power (W) from the radar range equation.',
    radareqrng: 'radareqrng(lambda,SNR,Pt,tau): maximum detection range (m) from the radar range equation.',
    steervec: 'steervec(pos,ang): array steering vector exp(1i*2*pi*pos·u) for sensor positions (in wavelengths) and az/el angles (deg).',
  },
};
