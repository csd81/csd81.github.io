// Phased Array System Toolbox — angle-space conversions and conventional beamformer weights.
//
// Validated oracle values (MATLAB R2026a):
//   az2broadside(30,0)         = 30
//   az2broadside(30,20)        = 28.0243206736047
//   az2broadside(45,0)         = 45
//   az2broadside(-60,30)       = -48.5903778907291
//   broadside2az(30,0)         = 30
//   broadside2az(30,20)        = 32.1467014004801
//   broadside2az(-20,45)       = -28.9266492997599
//   azel2uv([30;0])            = [0.5; 0]
//   azel2uv([0;45])            = [0; 0.707106781186547]
//   azel2uv([-30;20])          = [-0.469846310392954; 0.342020143325669]
//   uv2azel([0.5;0])           = [30; 0]
//   uv2azel([-0.3;0.4])        = [-19.1066053508691; 23.5781784782018]
//   cbfweights((0:4)*0.5,30)   → w = [0.2; 0.2i; -0.2; -0.2i; 0.2]  (to 1e-12)
//   cbfweights((0:3)*0.5,[30 45]) col2 w(2) = -0.151424966769703+0.19892330039187i

import { type Value, type Mat, scalar, toMat as m, asScalar, asString, MatError } from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

const D2R = Math.PI / 180;
const sind  = (x: number) => Math.sin(x * D2R);
const cosd  = (x: number) => Math.cos(x * D2R);
const asind = (x: number) => Math.asin(Math.max(-1, Math.min(1, x))) / D2R;

// element-wise map over a real Mat (scalar or row/col vector)
function ew(v: Value, f: (x: number) => number): Mat {
  const M = m(v, 'arg');
  return { kind: 'num', rows: M.rows, cols: M.cols, data: Float64Array.from(M.data, f) };
}

// element-wise over two Mats, broadcasting a scalar against a vector/matrix
function ew2(a: Value, b: Value, f: (x: number, y: number) => number): Mat {
  const A = m(a, 'arg'), B = m(b, 'arg');
  const big = A.data.length >= B.data.length ? A : B;
  const d = new Float64Array(big.data.length);
  for (let i = 0; i < d.length; i++) d[i] = f(A.data[A.data.length === 1 ? 0 : i], B.data[B.data.length === 1 ? 0 : i]);
  return { kind: 'num', rows: big.rows, cols: big.cols, data: d };
}

const LIGHTSPEED = 299792458;

// ── physconst(name): physical constants (MATLAB R2026a values) ──────────────────────────
function physconst(args: Value[]): Promise<Value[]> {
  const raw = asString(args[0]);
  const key = raw.toLowerCase().replace(/\s+/g, '');
  const table: Record<string, number> = {
    lightspeed: LIGHTSPEED,        // m/s (exact)
    boltzmann: 1.380649e-23,       // J/K (2019 SI exact)
    earthradius: 6371000,          // m (mean)
  };
  const v = table[key];
  if (v === undefined) throw new MatError(`physconst: unknown constant '${raw}'`);
  return ret(scalar(v));
}

// ── freq2wavelen(freq[,c]): wavelength = c/freq (element-wise) ───────────────────────────
function freq2wavelen(args: Value[]): Promise<Value[]> {
  const c = args[1] != null ? asScalar(m(args[1], 'c')) : LIGHTSPEED;
  return ret(ew(args[0], (f) => c / f));
}

// ── wavelen2freq(lambda[,c]): freq = c/lambda (element-wise) ─────────────────────────────
function wavelen2freq(args: Value[]): Promise<Value[]> {
  const c = args[1] != null ? asScalar(m(args[1], 'c')) : LIGHTSPEED;
  return ret(ew(args[0], (lambda) => c / lambda));
}

// ── gain2aperture(G,lambda): A = lambda^2 * 10^(G/10) / (4*pi) (G in dBi) ─────────────────
function gain2aperture(args: Value[]): Promise<Value[]> {
  return ret(ew2(args[0], args[1], (G, lambda) => (lambda * lambda * 10 ** (G / 10)) / (4 * Math.PI)));
}

// ── albersheim(Pd,Pfa[,N]): single-sample SNR (dB) to detect in white Gaussian noise ─────
// SNRdB = -5*log10(N) + (6.2 + 4.54/sqrt(N+0.44))*log10(A + 0.12*A*B + 1.7*B),
// with A = ln(0.62/Pfa), B = ln(Pd/(1-Pd)). N defaults to 1.
function albersheim(args: Value[]): Promise<Value[]> {
  const pd = asScalar(m(args[0], 'Pd')), pfa = asScalar(m(args[1], 'Pfa'));
  const N = args[2] != null ? asScalar(m(args[2], 'N')) : 1;
  const A = Math.log(0.62 / pfa);
  const B = Math.log(pd / (1 - pd));
  const snr = -5 * Math.log10(N) + (6.2 + 4.54 / Math.sqrt(N + 0.44)) * Math.log10(A + 0.12 * A * B + 1.7 * B);
  return ret(scalar(snr));
}

// ── aperture2gain(A,lambda): G(dBi) = 10*log10(4*pi*A/lambda^2) ──────────────────────────
// (Also owned by radar, which wins the default pick; reach this one via phased.aperture2gain
//  or useToolbox('phased').)
function aperture2gain(args: Value[]): Promise<Value[]> {
  return ret(ew2(args[0], args[1], (A, lambda) => 10 * Math.log10((4 * Math.PI * A) / (lambda * lambda))));
}

// ── steervec(pos,ang): N×M complex steering vectors, exp(+i*2*pi*(p·u)) ──────────────────
// pos: 1×N (y), 2×N ([y;z]) or 3×N ([x;y;z]) element positions in wavelengths.
// ang: 1×M azimuth or 2×M [az;el] in degrees. (cbfweights = steervec/N.) Correct for all
// position shapes — radar.steervec had a 2×N axis bug; this one is reachable via phased.steervec.
function steervec(args: Value[]): Promise<Value[]> {
  const posM = m(args[0], 'POS'), angM = m(args[1], 'ANG');
  const N = posM.cols, posRows = posM.rows;
  const xyz: [number, number, number][] = [];
  for (let c = 0; c < N; c++) {
    let x = 0, y = 0, z = 0;
    if (posRows === 1)      { y = posM.data[c]; }
    else if (posRows === 2) { y = posM.data[0 + c * 2]; z = posM.data[1 + c * 2]; }
    else                    { x = posM.data[0 + c * 3]; y = posM.data[1 + c * 3]; z = posM.data[2 + c * 3]; }
    xyz.push([x, y, z]);
  }
  const M2 = angM.cols, angRows = angM.rows;
  const re = new Float64Array(N * M2), im = new Float64Array(N * M2);
  for (let mi = 0; mi < M2; mi++) {
    const az = angM.data[0 + mi * angRows] * D2R;
    const el = (angRows >= 2 ? angM.data[1 + mi * angRows] : 0) * D2R;
    const ux = Math.cos(el) * Math.cos(az), uy = Math.cos(el) * Math.sin(az), uz = Math.sin(el);
    for (let n = 0; n < N; n++) {
      const [px, py, pz] = xyz[n];
      const phase = 2 * Math.PI * (px * ux + py * uy + pz * uz);
      const idx = n + mi * N;
      re[idx] = Math.cos(phase); im[idx] = Math.sin(phase);
    }
  }
  return ret({ kind: 'num', rows: N, cols: M2, data: re, idata: im });
}

// ── az2broadside(az, el=0) ─────────────────────────────────────────────────────────────
// BSANG = asind(sind(AZ) .* cosd(EL))
// AZ and EL can be scalars or same-size vectors. EL defaults to 0.
function az2broadside(args: Value[]): Promise<Value[]> {
  const azM = m(args[0], 'AZ');
  if (args[1] == null) {
    return ret(ew(azM, az => asind(sind(az))));
  }
  const elM = m(args[1], 'EL');
  if (azM.rows === elM.rows && azM.cols === elM.cols) {
    const out = new Float64Array(azM.data.length);
    for (let i = 0; i < azM.data.length; i++)
      out[i] = asind(sind(azM.data[i]) * cosd(elM.data[i]));
    return ret({ kind: 'num', rows: azM.rows, cols: azM.cols, data: out });
  }
  // scalar el broadcast over az vector
  const elVal = elM.data[0];
  return ret(ew(azM, az => asind(sind(az) * cosd(elVal))));
}

// ── broadside2az(bsd, el=0) ────────────────────────────────────────────────────────────
// AZ = asind(sind(BSANG) ./ cosd(EL))   (clamp to ±1 before asin)
function broadside2az(args: Value[]): Promise<Value[]> {
  const bsdM = m(args[0], 'BSANG');
  if (args[1] == null) {
    return ret(ew(bsdM, b => asind(sind(b))));
  }
  const elM = m(args[1], 'EL');
  if (bsdM.rows === elM.rows && bsdM.cols === elM.cols) {
    const out = new Float64Array(bsdM.data.length);
    for (let i = 0; i < bsdM.data.length; i++)
      out[i] = asind(sind(bsdM.data[i]) / cosd(elM.data[i]));
    return ret({ kind: 'num', rows: bsdM.rows, cols: bsdM.cols, data: out });
  }
  const elVal = elM.data[0];
  return ret(ew(bsdM, b => asind(sind(b) / cosd(elVal))));
}

// ── azel2uv(azel) ─────────────────────────────────────────────────────────────────────
// Input: 2×N matrix [az; el] in degrees. Output: 2×N [u; v].
// u = cosd(el)*sind(az),  v = sind(el).
// Boresight = +X axis; az ∈ [-90,90], el ∈ [-90,90].
function azel2uv(args: Value[]): Promise<Value[]> {
  const M = m(args[0], 'AzEl');
  if (M.rows !== 2) throw new MatError('azel2uv: input must be a 2×N matrix [az; el]');
  const N = M.cols;
  const out = new Float64Array(2 * N);   // 2×N column-major
  for (let c = 0; c < N; c++) {
    const az = M.data[0 + c * 2];
    const el = M.data[1 + c * 2];
    out[0 + c * 2] = cosd(el) * sind(az);   // u
    out[1 + c * 2] = sind(el);              // v
  }
  return ret({ kind: 'num', rows: 2, cols: N, data: out });
}

// ── uv2azel(uv) ───────────────────────────────────────────────────────────────────────
// Input: 2×N [u; v] with u²+v² ≤ 1. Output: 2×N [az; el] in degrees.
// el = asind(v),  az = asind(u / sqrt(1 - v²)).
function uv2azel(args: Value[]): Promise<Value[]> {
  const M = m(args[0], 'UV');
  if (M.rows !== 2) throw new MatError('uv2azel: input must be a 2×N matrix [u; v]');
  const N = M.cols;
  const out = new Float64Array(2 * N);   // 2×N column-major
  for (let c = 0; c < N; c++) {
    const u = M.data[0 + c * 2];
    const v = M.data[1 + c * 2];
    const el = asind(v);
    const cosEl = Math.sqrt(Math.max(0, 1 - v * v));
    const az = cosEl < 1e-12 ? 0 : asind(u / cosEl);
    out[0 + c * 2] = az;
    out[1 + c * 2] = el;
  }
  return ret({ kind: 'num', rows: 2, cols: N, data: out });
}

// ── cbfweights(pos, ang) ───────────────────────────────────────────────────────────────
// Conventional (delay-and-sum) beamformer weights: w = steervec(pos,ang) / N_ele.
// pos: 1×N y-coords, 2×N [y;z], or 3×N [x;y;z] in wavelengths.
// ang: 1×M azimuth (el=0) or 2×M [az;el] in degrees.
// Output: complex N×M matrix.
function cbfweights(args: Value[]): Promise<Value[]> {
  const posM = m(args[0], 'POS');
  const angM = m(args[1], 'ANG');

  // Expand pos to 3×N_ele
  const N = posM.cols;
  const posRows = posM.rows;
  const xyz: [number, number, number][] = [];
  for (let c = 0; c < N; c++) {
    let x = 0, y = 0, z = 0;
    if (posRows === 1)      { y = posM.data[c]; }
    else if (posRows === 2) { y = posM.data[0 + c * 2]; z = posM.data[1 + c * 2]; }
    else                    { x = posM.data[0 + c * 3]; y = posM.data[1 + c * 3]; z = posM.data[2 + c * 3]; }
    xyz.push([x, y, z]);
  }

  // Parse angles to [az, el] pairs
  const M2 = angM.cols;
  const angRows = angM.rows;
  const angs: [number, number][] = [];
  for (let c = 0; c < M2; c++) {
    const az = angM.data[0 + c * angRows];
    const el = angRows >= 2 ? angM.data[1 + c * angRows] : 0;
    angs.push([az, el]);
  }

  const re = new Float64Array(N * M2);
  const im = new Float64Array(N * M2);
  for (let mi = 0; mi < M2; mi++) {
    const [azDeg, elDeg] = angs[mi];
    const az = azDeg * D2R, el = elDeg * D2R;
    const ux = Math.cos(el) * Math.cos(az);
    const uy = Math.cos(el) * Math.sin(az);
    const uz = Math.sin(el);
    for (let n = 0; n < N; n++) {
      const [px, py, pz] = xyz[n];
      const phase = 2 * Math.PI * (px * ux + py * uy + pz * uz);
      const idx = n + mi * N;
      re[idx] = Math.cos(phase) / N;
      im[idx] = Math.sin(phase) / N;
    }
  }
  return ret({ kind: 'num', rows: N, cols: M2, data: re, idata: im });
}

export const PHASED: ToolboxModule = {
  id: 'phased',
  name: 'Phased Array System Toolbox',
  docBase: 'https://www.mathworks.com/help/phased/',
  builtins: {
    az2broadside,
    broadside2az,
    azel2uv,
    uv2azel,
    cbfweights,
    steervec,
    aperture2gain,
    physconst,
    freq2wavelen,
    wavelen2freq,
    gain2aperture,
    albersheim,
  },
  help: {
    az2broadside: {
      summary: 'Convert azimuth angle to broadside angle',
      syntax: ['bsang = az2broadside(az)', 'bsang = az2broadside(az,el)'],
      description: [
        'bsang = az2broadside(az,el) converts azimuth AZ and elevation EL (both in degrees) to the broadside angle of a ULA.',
        'Formula: bsang = asind(sind(az).*cosd(el)).',
        'AZ must be in [-180,180]; EL must be in [-90,90]. EL defaults to 0.',
        'Both inputs may be scalars or same-size vectors.',
      ],
      seealso: ['broadside2az', 'steervec', 'cbfweights'],
    },
    broadside2az: {
      summary: 'Convert broadside angle to azimuth angle',
      syntax: ['az = broadside2az(bsang)', 'az = broadside2az(bsang,el)'],
      description: [
        'az = broadside2az(bsang,el) converts broadside angle BSANG and elevation EL (degrees) to azimuth.',
        'Formula: az = asind(sind(bsang)./cosd(el)).',
        'BSANG and EL must satisfy |el| < 90 - |bsang|.',
        'EL defaults to 0.',
      ],
      seealso: ['az2broadside', 'steervec', 'cbfweights'],
    },
    azel2uv: {
      summary: 'Convert azimuth/elevation angles to u/v space',
      syntax: ['uv = azel2uv(azel)'],
      description: [
        'uv = azel2uv(azel) converts a 2×N [azimuth; elevation] matrix (degrees) to the corresponding 2×N [u; v] matrix.',
        'Boresight is the +X axis. Azimuth is from X toward Y; elevation is from the XY plane toward Z.',
        'u = cosd(el).*sind(az),  v = sind(el).',
        'Azimuth must be in [-90,90]; elevation in [-90,90].',
      ],
      seealso: ['uv2azel', 'az2broadside', 'steervec'],
    },
    uv2azel: {
      summary: 'Convert u/v coordinates to azimuth/elevation angles',
      syntax: ['azel = uv2azel(uv)'],
      description: [
        'azel = uv2azel(uv) converts a 2×N [u; v] matrix (u²+v²≤1) to the corresponding 2×N [azimuth; elevation] matrix in degrees.',
        'el = asind(v),  az = asind(u./sqrt(1-v.^2)).',
        'Both u and v must be in [-1,1] and satisfy u²+v² ≤ 1.',
      ],
      seealso: ['azel2uv', 'az2broadside', 'steervec'],
    },
    cbfweights: {
      summary: 'Conventional (delay-and-sum) beamformer weights',
      syntax: ['w = cbfweights(pos,ang)'],
      description: [
        'w = cbfweights(pos,ang) returns the N×M complex weight matrix for a sensor array.',
        'pos: 1×N (y-coords), 2×N ([y;z]), or 3×N ([x;y;z]) element positions in wavelengths.',
        'ang: 1×M azimuth angles or 2×M [azimuth;elevation] in degrees.',
        'Each column of w is the steering vector for the corresponding direction, divided by N.',
        'w = steervec(pos,ang) / N.',
      ],
      seealso: ['steervec', 'mvdrweights', 'az2broadside', 'azel2uv'],
    },
    steervec: {
      summary: 'Steering vector for a sensor array',
      syntax: ['sv = steervec(pos,ang)', 'sv = phased.steervec(pos,ang)'],
      description: [
        'sv = steervec(pos,ang) returns the N×M complex steering-vector matrix for a sensor array.',
        'pos: 1×N (y), 2×N ([y;z]) or 3×N ([x;y;z]) element positions in units of signal wavelength.',
        'ang: 1×M azimuth angles or 2×M [azimuth;elevation] in degrees. cbfweights = steervec/N.',
        'Note: the name is also owned by the radar toolbox (default pick). Use phased.steervec(...)',
        "or useToolbox('phased') to force this implementation.",
      ],
      seealso: ['cbfweights', 'az2broadside', 'azel2uv', 'useToolbox'],
    },
    aperture2gain: {
      summary: 'Convert effective aperture to antenna gain',
      syntax: ['g = aperture2gain(a,lambda)', 'g = phased.aperture2gain(a,lambda)'],
      description: [
        'g = aperture2gain(a,lambda) returns the antenna gain in dBi for effective aperture a (m^2):',
        'g = 10*log10(4*pi*a/lambda^2). Inputs may be vectors (a scalar broadcasts).',
      ],
      seealso: ['gain2aperture', 'freq2wavelen'],
    },
    physconst: {
      summary: 'Physical constants',
      syntax: ["c = physconst('LightSpeed')", "k = physconst('Boltzmann')", "re = physconst('EarthRadius')"],
      description: [
        'physconst(name) returns a physical constant in SI units. Supported names (case/space-insensitive):',
        "'LightSpeed' = 299792458 m/s, 'Boltzmann' = 1.380649e-23 J/K, 'EarthRadius' = 6371000 m.",
      ],
      seealso: ['freq2wavelen'],
    },
    freq2wavelen: {
      summary: 'Convert frequency to wavelength',
      syntax: ['lambda = freq2wavelen(freq)', 'lambda = freq2wavelen(freq,c)'],
      description: [
        'lambda = freq2wavelen(freq) returns the wavelength c/freq, with c the speed of light.',
        'lambda = freq2wavelen(freq,c) uses a custom propagation speed c. freq may be a vector.',
      ],
      seealso: ['wavelen2freq', 'physconst'],
    },
    wavelen2freq: {
      summary: 'Convert wavelength to frequency',
      syntax: ['freq = wavelen2freq(lambda)', 'freq = wavelen2freq(lambda,c)'],
      description: [
        'freq = wavelen2freq(lambda) returns the frequency c/lambda, with c the speed of light.',
        'freq = wavelen2freq(lambda,c) uses a custom propagation speed c. lambda may be a vector.',
      ],
      seealso: ['freq2wavelen', 'physconst'],
    },
    gain2aperture: {
      summary: 'Convert antenna gain to effective aperture',
      syntax: ['a = gain2aperture(g,lambda)'],
      description: [
        'a = gain2aperture(g,lambda) returns the effective aperture (m^2) for an antenna of gain g (dBi)',
        'at wavelength lambda (m): a = lambda^2 * 10^(g/10) / (4*pi). Inputs may be vectors (a scalar broadcasts).',
      ],
      seealso: ['freq2wavelen', 'physconst'],
    },
    albersheim: {
      summary: "Required SNR from Albersheim's equation",
      syntax: ['snr = albersheim(prob_det,prob_fa)', 'snr = albersheim(prob_det,prob_fa,N)'],
      description: [
        'snr = albersheim(Pd,Pfa,N) returns the single-sample SNR (dB) needed to achieve detection',
        'probability Pd at false-alarm probability Pfa, integrating N pulses noncoherently (default N=1),',
        'for a nonfluctuating target in white Gaussian noise (linear detector). Albersheim approximation.',
      ],
      seealso: ['shnidman', 'rocsnr'],
    },
  },
};
