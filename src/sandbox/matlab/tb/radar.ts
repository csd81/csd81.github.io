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
//   aperture2gain(3,0.1)              = 35.7633111874176
//   grnd2slantrange(1000,30)          = 1154.70053837925
//   mtifactor(4,300e6,200)            = 55.398613519649
//   mtifactor(2,300e6,200)            = 21.0372493339378
//   mtifactor(3,1e9,1000)             = 46.0735336863138  (small-sigmaz branch)
//   sarnoiserefl(16e9,16.7e9,30,db2pow(-25)) = -55.1859648849166
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
// ── aperture/gain, SAR & MTI converters (closed-form, MATLAB defaults) ──

// aperture2gain(A,lambda) = pow2db(4*pi*A/lambda^2)  → gain in dBi (A vector, lambda scalar).
const aperture2gain = (a: Value[]) => {
  const lam = num(a[1], 'LAMBDA');
  return ret(elementwise(a[0], (Ae) => pow2db((4 * Math.PI * Ae) / (lam * lam))));
};

// grnd2slantrange(grndrng,grazang) = grndrng./cosd(grazang)  (grazang scalar deg, in [0,90)).
const grnd2slantrange = (a: Value[]) => {
  const grazDeg = num(a[1], 'GRAZANG');
  const cg = Math.cos((grazDeg * Math.PI) / 180);
  return ret(elementwise(a[0], (g) => g / cg));
};

// sarnoiserefl(freq,freqref,imgsnr,sigmaref[,n]) → noise-equiv reflectivity (dB).
// neq = pow2db(sigmaref*(freq/freqref).^n / db2pow(imgsnr)). freq (J×1) × imgsnr (1×K) → J×K.
function sarnoiserefl(a: Value[]): Promise<Value[]> {
  const freqM = m(a[0], 'FREQ');
  const freqref = num(a[1], 'FREQREF');
  const snrM = m(a[2], 'IMGSNR');
  const sigmaref = num(a[3], 'SIGMAREF');
  const n = a[4] != null ? num(a[4], 'N') : 1;
  const freq = Array.from(freqM.data);          // J entries (vector, any orientation)
  const snr = Array.from(snrM.data);            // K entries
  const J = freq.length, K = snr.length;
  const out = new Float64Array(J * K);          // J×K, column-major
  for (let k = 0; k < K; k++) {
    const snrInv = 1 / db2pow(snr[k]);
    for (let j = 0; j < J; j++) {
      const ratio = (freq[j] / freqref) ** n;
      out[j + k * J] = pow2db(sigmaref * ratio * snrInv);
    }
  }
  return ret({ kind: 'num', rows: J, cols: K, data: out });
}

// mtifactor(M,FREQ,PRF[,name/value]) → MTI improvement factor (dB), 1×K.
// Basic positional form: coherent, ClutterStandardDeviation=2, NullVelocity=0, ClutterVelocity=0.
function mtifactor(a: Value[]): Promise<Value[]> {
  const mM = Math.round(num(a[0], 'M'));        // 2..4
  const freqM = m(a[1], 'FREQ'), prfM = m(a[2], 'PRF');
  const freq = Array.from(freqM.data), prf = Array.from(prfM.data);
  const sigmaV = 2, v0f = 0, v0 = 0;            // defaults (coherent)
  const K = Math.max(freq.length, prf.length);
  const fAt = (i: number) => (freq.length === 1 ? freq[0] : freq[i]);
  const pAt = (i: number) => (prf.length === 1 ? prf[0] : prf[i]);
  const sigmazSmall = 0.1;
  const out = new Float64Array(K);
  for (let i = 0; i < K; i++) {
    const vb = (C * pAt(i)) / (2 * fAt(i));      // blind speed (monostatic)
    const vzf = (2 * Math.PI * v0f) / vb;
    const vz = (2 * Math.PI * v0) / vb;
    const sigmaz = (2 * Math.PI * sigmaV) / vb;
    const aboutEqual = Math.abs(vz - vzf) <= Math.sqrt(Number.EPSILON);
    const d = vz - vzf;
    let Im: number;
    if (mM === 4) {
      Im = 1 / (1 - (3 / 2) * Math.exp(-(sigmaz ** 2) / 2) * Math.cos(d)
        + (3 / 5) * Math.exp(-2 * sigmaz ** 2) * Math.cos(2 * d)
        - (1 / 10) * Math.exp(-(9 / 2) * sigmaz ** 2) * Math.cos(3 * d));
      if (sigmaz < sigmazSmall && aboutEqual) Im = 4 / (3 * sigmaz ** 6);
    } else if (mM === 3) {
      Im = 1 / (1 - (4 / 3) * Math.exp(-(sigmaz ** 2) / 2) * Math.cos(d)
        + (1 / 3) * Math.exp(-2 * sigmaz ** 2) * Math.cos(2 * d));
      if (sigmaz < sigmazSmall && aboutEqual) Im = 2 / sigmaz ** 4;
    } else { // m = 2 (single delay canceler)
      Im = 1 / (1 - Math.exp(-(sigmaz ** 2) / 2) * Math.cos(d));
      if (sigmaz < sigmazSmall) Im = 2 / sigmaz ** 2;
    }
    if (Im <= 0) Im = 1e30;
    out[i] = pow2db(Im);
  }
  return ret({ kind: 'num', rows: 1, cols: K, data: out });
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
    aperture2gain,
    grnd2slantrange,
    sarnoiserefl,
    mtifactor,
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
    aperture2gain: 'aperture2gain(A,lambda): convert effective aperture A (m^2) to gain (dBi) = pow2db(4*pi*A/lambda^2).',
    grnd2slantrange: 'grnd2slantrange(grndrng,grazang): slant range (m) from ground range and grazing angle (deg) = grndrng/cosd(grazang).',
    sarnoiserefl: 'sarnoiserefl(freq,freqref,imgsnr,sigmaref[,n]): SAR noise-equivalent reflectivity (dB) = pow2db(sigmaref*(freq/freqref)^n/db2pow(imgsnr)).',
    mtifactor: 'mtifactor(M,freq,prf): MTI improvement factor (dB) for an (M-1)-delay canceler (coherent, sigmaV=2, v0=0 defaults).',
    steervec: 'steervec(pos,ang): array steering vector exp(1i*2*pi*pos·u) for sensor positions (in wavelengths) and az/el angles (deg).',
  },
};
