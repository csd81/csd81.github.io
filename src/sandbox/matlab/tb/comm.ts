// Communications Toolbox — computable, exactly-validatable subset: integer↔binary conversion
// (de2bi/bi2de), error counting (symerr/biterr), and Gray code (bin2gray/gray2bin, integer form).
// Constellation modulators (qammod/pskmod) are deferred — their Gray symbol mapping is hard to
// match without the toolbox. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isMat, scalar, colVec, zeros, toArray, asScalar, asString, toMat as m, map, mat,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
// ── special functions for the Q-function (Numerical Recipes erfcc ~1.2e-7; erfinv via Newton) ──
function erfc(x: number): number {
  const z = Math.abs(x), t = 1 / (1 + 0.5 * z);
  const ans = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806 + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
  return x >= 0 ? ans : 2 - ans;
}
const erf = (x: number) => 1 - erfc(x);
function erfinv(y: number): number {
  if (y <= -1) return -Infinity; if (y >= 1) return Infinity; if (y === 0) return 0;
  const a = 0.147, ln = Math.log(1 - y * y), t1 = 2 / (Math.PI * a) + ln / 2;
  let w = Math.sign(y) * Math.sqrt(Math.sqrt(t1 * t1 - ln / a) - t1);
  for (let i = 0; i < 4; i++) w -= (erf(w) - y) / (2 / Math.sqrt(Math.PI) * Math.exp(-w * w)); // Newton refine
  return w;
}
const SQRT2 = Math.sqrt(2);
/** Rows of a matrix as number[][]. */
function rows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }
const bitWidth = (v: number) => Math.max(1, Math.floor(Math.log2(Math.max(1, v))) + 1);
const bin2gray = (v: number) => v ^ (v >>> 1);
const gray2bin = (v: number) => { let b = 0; for (let t = v; t > 0; t >>>= 1) b ^= t; return b; };
/** Build a complex Mat (re+im) matching the orientation of src. */
function cplx(src: Mat, re: number[], im: number[]): Mat { const col = src.cols === 1 && src.rows !== 1; const n = re.length; const o = { kind: 'num' as const, rows: col ? n : 1, cols: col ? 1 : n, data: Float64Array.from(re), idata: Float64Array.from(im) }; return o as Mat; }
function sameShape(src: Mat, vals: number[]): Mat { const col = src.cols === 1 && src.rows !== 1; const n = vals.length; return { kind: 'num' as const, rows: col ? n : 1, cols: col ? 1 : n, data: Float64Array.from(vals) } as Mat; }
/** Square-QAM constellation point (I,Q) for symbol s (MATLAB Gray, no UnitAveragePower). */
function qamPoint(s: number, side: number, kHalf: number): [number, number] { const iIdx = s >>> kHalf, qIdx = s & (side - 1); return [-(side - 1) + 2 * bin2gray(iIdx), (side - 1) - 2 * bin2gray(qIdx)]; }
/** Modified Bessel I0 (series). */
function besselI0(x: number): number { let s = 1, t = 1; for (let k = 1; k < 80; k++) { t *= (x / (2 * k)) ** 2; s += t; if (t < s * 1e-16) break; } return s; }
/** Modified Bessel I_n (series, integer n≥0). */
function besselIn(n: number, x: number): number { if (n === 0) return besselI0(x); let nf = 1; for (let i = 2; i <= n; i++) nf *= i; let t = (x / 2) ** n / nf, s = t; for (let k = 1; k < 100; k++) { t *= (x * x / 4) / (k * (n + k)); s += t; if (Math.abs(t) < Math.abs(s) * 1e-16) break; } return s; }

// ── convolutional-code (trellis) helpers ──
const octDigitsToDec = (o: number) => parseInt(String(Math.round(o)), 8);
const bitParity = (x: number) => { let p = 0; while (x) { p ^= x & 1; x >>>= 1; } return p; };
/** Build a rate-1/n trellis struct from constraint length K and octal code generators. */
function buildTrellis(K: number, codeGen: number[]): { numIn: number; numOut: number; numStates: number; outputs: number[][]; nextStates: number[][] } {
  const n = codeGen.length, g = codeGen.map(octDigitsToDec), nStates = 1 << (K - 1);
  const outputs: number[][] = [], nextStates: number[][] = [];
  for (let s = 0; s < nStates; s++) {
    const orow: number[] = [], nrow: number[] = [];
    for (let u = 0; u < 2; u++) {
      const reg = (u << (K - 1)) | s;                  // current input (MSB) + previous K-1 inputs
      let outv = 0; for (let i = 0; i < n; i++) outv = (outv << 1) | bitParity(reg & g[i]); // MSB = first generator
      orow.push(outv); nrow.push((reg >> 1) & (nStates - 1));
    }
    outputs.push(orow); nextStates.push(nrow);
  }
  return { numIn: 2, numOut: 1 << n, numStates: nStates, outputs, nextStates };
}
/** Pack a numStates×2 number matrix (column-major) as a Mat. */
function intMat(M: number[][]): Mat { const r = M.length, c = M[0].length, d = new Float64Array(r * c); for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) d[i + j * r] = M[i][j]; return mat(r, c, d); }
/** Read a numStates×2 matrix from a Mat (column-major). */
function readMat(M: Mat): number[][] { const out: number[][] = []; for (let i = 0; i < M.rows; i++) { const row: number[] = []; for (let j = 0; j < M.cols; j++) row.push(Math.round(M.data[i + j * M.rows])); out.push(row); } return out; }
/** GF(2) Hamming generator: H=[I_m|P], G=[P'|I_k]. */
const HAMM_PRIM: Record<number, number[]> = { 2: [0, 1, 2], 3: [0, 1, 3], 4: [0, 1, 4], 5: [0, 2, 5], 6: [0, 1, 6], 7: [0, 3, 7], 8: [0, 2, 3, 4, 8], 9: [0, 4, 9], 10: [0, 3, 10], 11: [0, 2, 11], 12: [0, 1, 4, 6, 12], 13: [0, 1, 3, 4, 13], 14: [0, 1, 6, 10, 14], 15: [0, 1, 15], 16: [0, 1, 3, 12, 16] };
function hammHG(mm: number): { H: number[][]; G: number[][]; n: number; k: number } {
  const n = (1 << mm) - 1, k = n - mm, primMask = HAMM_PRIM[mm].reduce((a, e) => a | (1 << e), 0);
  const cols: number[] = []; let poly = 1;
  for (let j = 0; j < n; j++) { cols.push(poly); poly <<= 1; if (poly & (1 << mm)) poly ^= primMask; }
  const H: number[][] = []; for (let i = 0; i < mm; i++) { const row: number[] = []; for (let j = 0; j < n; j++) row.push((cols[j] >> i) & 1); H.push(row); }
  const G: number[][] = []; for (let r = 0; r < k; r++) { const row: number[] = []; for (let cc = 0; cc < mm; cc++) row.push(H[cc][mm + r]); for (let cc = 0; cc < k; cc++) row.push(cc === r ? 1 : 0); G.push(row); }
  return { H, G, n, k };
}

export const COMM: ToolboxModule = {
  id: 'comm',
  name: 'Communications Toolbox',
  docBase: 'https://www.mathworks.com/help/comm/',
  builtins: {
    // ── Q-function (Gaussian tail) — qfunc(x)=0.5*erfc(x/√2), qfuncinv(p)=√2*erfinv(1−2p) ──
    qfunc: (a) => ret(map(m(a[0]), (x) => 0.5 * erfc(x / SQRT2))),
    qfuncinv: (a) => ret(map(m(a[0]), (p) => SQRT2 * erfinv(1 - 2 * p))),
    // ── oct2dec: interpret each value's decimal digits as octal ──
    oct2dec: (a) => ret(map(m(a[0]), (x) => parseInt(Math.round(x).toString(), 8))),
    // ── vec2mat(v,c[,pad]): row-major reshape into ceil(n/c)×c, padding the last row ──
    vec2mat: (a) => {
      const v = toArray(m(a[0])), c = Math.round(asScalar(a[1])), n = v.length, rows = Math.max(1, Math.ceil(n / c));
      const pad = a.length > 2 ? asScalar(a[2]) : 0, data = new Float64Array(rows * c).fill(pad);
      for (let i = 0; i < n; i++) data[Math.floor(i / c) + (i % c) * rows] = v[i];
      return ret(mat(rows, c, data));
    },
    // ── compand: μ-law / A-law companding (compressor & expander) ──
    compand: (a) => {
      const param = asScalar(a[1]), V = asScalar(a[2]), method = asString(a[3]).toLowerCase();
      const comp = method.includes('compressor'), isA = method.startsWith('a');
      const lnA = Math.log(param);
      return ret(map(m(a[0]), (x) => {
        const s = Math.sign(x), u = Math.abs(x) / V;
        if (!isA) { // μ-law
          return comp ? s * V * Math.log(1 + param * u) / Math.log(1 + param)
                      : s * (V / param) * ((1 + param) ** (Math.abs(x) / V) - 1);
        }
        if (comp) return s * V * (u < 1 / param ? param * u / (1 + lnA) : (1 + Math.log(param * u)) / (1 + lnA));
        return s * V * (u < 1 / (1 + lnA) ? u * (1 + lnA) / param : Math.exp(u * (1 + lnA) - 1) / param);
      }));
    },
    /** de2bi(d[,n][,base][,flag]) — decimal→binary digits, LSB-first ('right-msb', default). */
    de2bi: (a) => {
      const d = toArray(m(a[0])).map((x) => Math.round(x));
      const msb = a.slice(1).some((x) => isMat(x) && (x as Mat).isChar && asString(x).toLowerCase() === 'left-msb');
      const nums = a.slice(1).filter((x) => isMat(x) && !(x as Mat).isChar).map((x) => Math.round(asScalar(x)));
      const n = nums.length >= 1 ? nums[0] : -1;          // requested digit count
      const base = nums.length >= 2 ? nums[1] : 2;
      const need = Math.max(1, ...d.map((v) => (v <= 0 ? 1 : Math.floor(Math.log(v) / Math.log(base)) + 1)));
      const ncol = n > 0 ? n : need;
      const out = zeros(d.length, ncol);
      d.forEach((v, r) => { let x = v; for (let c = 0; c < ncol; c++) { const digit = x % base; x = Math.floor(x / base); out.data[r + (msb ? ncol - 1 - c : c) * d.length] = digit; } });
      return ret(out);
    },
    /** bi2de(b[,base][,flag]) — binary digits→decimal, LSB-first ('right-msb', default). */
    bi2de: (a) => {
      const B = m(a[0]); const R = (B.rows === 1) ? [toArray(B)] : rows(B);
      let base = 2, msb = false;
      for (const arg of a.slice(1)) { if (isMat(arg) && (arg as Mat).isChar) msb = asString(arg).toLowerCase() === 'left-msb'; else base = Math.round(asScalar(arg)); }
      const vals = R.map((row) => { const digits = msb ? [...row].reverse() : row; return digits.reduce((s, d, j) => s + d * base ** j, 0); });
      return ret(vals.length === 1 ? scalar(vals[0]) : colVec(vals));
    },
    /** [num,rate] = symerr(a,b) — symbol (element) error count and ratio. */
    symerr: (a, nargout) => {
      const x = toArray(m(a[0])), y = toArray(m(a[1])); const num = x.reduce((s, v, i) => s + (v !== y[i] ? 1 : 0), 0);
      return nargout >= 2 ? Promise.resolve([scalar(num), scalar(num / x.length)]) : ret(scalar(num));
    },
    /** [num,rate] = biterr(a,b) — bit error count and ratio (elements compared bitwise). */
    biterr: (a, nargout) => {
      const x = toArray(m(a[0])).map((v) => Math.round(v)), y = toArray(m(a[1])).map((v) => Math.round(v));
      const w = bitWidth(Math.max(1, ...x, ...y)); let num = 0;
      for (let i = 0; i < x.length; i++) { let diff = x[i] ^ y[i]; while (diff) { num += diff & 1; diff >>>= 1; } }
      return nargout >= 2 ? Promise.resolve([scalar(num), scalar(num / (x.length * w))]) : ret(scalar(num));
    },
    /** bin2gray(x) / gray2bin(x) — integer binary-reflected Gray code (element-wise). */
    bin2gray: (a) => ret(map2(m(a[0]), (v) => v ^ (v >>> 1))),
    gray2bin: (a) => ret(map2(m(a[0]), (v) => { let b = 0; for (let x = v; x; x >>>= 1) b ^= x; return b; })),

    // ── modulation (square QAM + PSK, MATLAB Gray mapping, default scaling) ──
    qammod: (a) => { const x = toArray(m(a[0])).map((v) => Math.round(v)); const M = Math.round(asScalar(a[1])); const side = Math.round(Math.sqrt(M)), kHalf = Math.round(Math.log2(side)); const re: number[] = [], im: number[] = []; for (const xi of x) { const [I, Q] = qamPoint(xi, side, kHalf); re.push(I); im.push(Q); } return ret(cplx(m(a[0]), re, im)); },
    pskmod: (a) => { const x = toArray(m(a[0])).map((v) => Math.round(v)); const M = Math.round(asScalar(a[1])); const off = a.length >= 3 && isMat(a[2]) && !(a[2] as Mat).isChar ? asScalar(a[2]) : 0; const re: number[] = [], im: number[] = []; for (const xi of x) { const th = (2 * Math.PI * gray2bin(xi)) / M + off; re.push(Math.cos(th)); im.push(Math.sin(th)); } return ret(cplx(m(a[0]), re, im)); },
    qamdemod: (a) => {
      const y = m(a[0]); const M = Math.round(asScalar(a[1])); const side = Math.round(Math.sqrt(M)), kHalf = Math.round(Math.log2(side));
      const cre: number[] = [], cim: number[] = []; for (let s = 0; s < M; s++) { const [I, Q] = qamPoint(s, side, kHalf); cre.push(I); cim.push(Q); }
      const yre = toArray(y), yim = y.idata ? Array.from(y.idata) : new Array(yre.length).fill(0);
      return ret(sameShape(y, yre.map((r, i) => { let best = 0, bd = Infinity; for (let s = 0; s < M; s++) { const d = (r - cre[s]) ** 2 + (yim[i] - cim[s]) ** 2; if (d < bd) { bd = d; best = s; } } return best; })));
    },
    pskdemod: (a) => {
      const y = m(a[0]); const M = Math.round(asScalar(a[1])); const off = a.length >= 3 && isMat(a[2]) && !(a[2] as Mat).isChar ? asScalar(a[2]) : 0;
      const cre: number[] = [], cim: number[] = []; for (let s = 0; s < M; s++) { const th = (2 * Math.PI * gray2bin(s)) / M + off; cre.push(Math.cos(th)); cim.push(Math.sin(th)); }
      const yre = toArray(y), yim = y.idata ? Array.from(y.idata) : new Array(yre.length).fill(0);
      return ret(sameShape(y, yre.map((r, i) => { let best = 0, bd = Infinity; for (let s = 0; s < M; s++) { const d = (r - cre[s]) ** 2 + (yim[i] - cim[s]) ** 2; if (d < bd) { bd = d; best = s; } } return best; })));
    },
    /** marcumq(a,b[,m]) — generalized Marcum Q-function (numerical integration). */
    marcumq: (a) => {
      const A = asScalar(a[0]), B = asScalar(a[1]); const mm = a.length >= 3 && isMat(a[2]) ? Math.round(asScalar(a[2])) : 1;
      // Q_m(a,b) = ∫_b^∞ x (x/a)^{m-1} exp(-(x²+a²)/2) I_{m-1}(a x) dx ; Simpson on [b, a+b+30].
      const lo = B, hi = A + B + 30, N = 4000, h = (hi - lo) / N;
      const f = (x: number) => x * (A > 0 ? (x / A) ** (mm - 1) : (mm === 1 ? 1 : 0)) * Math.exp(-(x * x + A * A) / 2) * (mm === 1 ? besselI0(A * x) : besselIn(mm - 1, A * x));
      let s = f(lo) + f(hi); for (let i = 1; i < N; i++) s += (i % 2 ? 4 : 2) * f(lo + i * h);
      return ret(scalar((h / 3) * s));
    },
    /** finddelay(x,y) — estimate the delay between signals via cross-correlation. */
    finddelay: (a) => {
      const x = toArray(m(a[0])), y = toArray(m(a[1])); const n = Math.max(x.length, y.length);
      let bestLag = 0, bestC = -Infinity;
      for (let lag = -(n - 1); lag <= n - 1; lag++) { let c = 0; for (let i = 0; i < x.length; i++) { const j = i - lag; if (j >= 0 && j < y.length) c += x[i] * y[j]; } if (c > bestC + 1e-12 || (Math.abs(c - bestC) <= 1e-12 && Math.abs(lag) < Math.abs(bestLag))) { bestC = c; bestLag = lag; } }
      return ret(scalar(-bestLag));   // MATLAB convention: delay of y relative to x
    },

    // ── convolutional codes ──
    /** poly2trellis(K, codeGen) — convert constraint length + octal generators to a trellis struct. */
    poly2trellis: (a) => {
      const K = Math.round(asScalar(a[0])); const codeGen = toArray(m(a[1]));
      const t = buildTrellis(K, codeGen);
      const fields = new Map<string, Value[]>([
        ['numInputSymbols', [scalar(t.numIn)]],
        ['numOutputSymbols', [scalar(t.numOut)]],
        ['numStates', [scalar(t.numStates)]],
        ['nextStates', [intMat(t.nextStates)]],
        ['outputs', [intMat(t.outputs)]],
      ]);
      return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
    },
    /** convenc(msg, trellis) — encode a binary message through a convolutional trellis. */
    convenc: (a) => {
      const msg = toArray(m(a[0])).map((v) => Math.round(v));
      const tr = a[1] as StructV;
      const outputs = readMat(m(tr.fields.get('outputs')![0]));
      const nextStates = readMat(m(tr.fields.get('nextStates')![0]));
      const numOut = Math.round(asScalar(tr.fields.get('numOutputSymbols')![0]));
      const n = Math.round(Math.log2(numOut));
      let state = 0; const out: number[] = [];
      for (const b of msg) { const ov = outputs[state][b]; for (let i = n - 1; i >= 0; i--) out.push((ov >> i) & 1); state = nextStates[state][b]; }
      return ret(m(a[0]).rows === 1 ? mat(1, out.length, Float64Array.from(out)) : colVec(out));
    },
    /** [ok,msg] = istrellis(t) — verify a struct is a valid trellis. */
    istrellis: (a, nargout) => {
      const v = a[0]; let ok = false;
      if (v && (v as StructV).kind === 'struct') {
        const f = (v as StructV).fields;
        const has = ['numInputSymbols', 'numOutputSymbols', 'numStates', 'nextStates', 'outputs'].every((k) => f.has(k));
        if (has) {
          const ns = Math.round(asScalar(f.get('numStates')![0]));
          const ni = Math.round(asScalar(f.get('numInputSymbols')![0]));
          const nx = m(f.get('nextStates')![0]), ou = m(f.get('outputs')![0]);
          ok = nx.rows === ns && nx.cols === ni && ou.rows === ns && ou.cols === ni;
        }
      }
      const b = { kind: 'num' as const, rows: 1, cols: 1, data: Float64Array.from([ok ? 1 : 0]), isBool: true } as Mat;
      return nargout >= 2 ? Promise.resolve([b, { kind: 'num', rows: ok ? 0 : 1, cols: 0, data: new Float64Array(0), isChar: true } as Mat]) : ret(b);
    },
    /** [H,G,n,k] = hammgen(m) — parity-check and generator matrices of a Hamming code over GF(2). */
    hammgen: (a, nargout) => {
      const mm = Math.round(asScalar(a[0])); const { H, G, n, k } = hammHG(mm);
      const HM = intMat(H), GM = intMat(G);
      if (nargout >= 4) return Promise.resolve([HM, GM, scalar(n), scalar(k)]);
      if (nargout === 3) return Promise.resolve([HM, GM, scalar(n)]);
      if (nargout === 2) return Promise.resolve([HM, GM]);
      return ret(HM);
    },
  },
  help: {
    qfunc: 'Q function (Gaussian tail probability)', qfuncinv: 'Inverse Q function',
    oct2dec: 'Convert octal to decimal numbers', vec2mat: 'Convert vector into matrix (row-major, padded)',
    compand: 'Source code mu-law or A-law compressor or expander',
    de2bi: 'Convert decimal numbers to binary digits', bi2de: 'Convert binary digits to decimal numbers',
    symerr: 'Count symbol errors and compute symbol error rate', biterr: 'Count bit errors and compute bit error rate',
    bin2gray: 'Convert positive integers to Gray-encoded integers', gray2bin: 'Convert Gray-encoded integers to positive integers',
    qammod: 'Quadrature amplitude modulation', qamdemod: 'Quadrature amplitude demodulation', pskmod: 'Phase shift keying modulation', pskdemod: 'Phase shift keying demodulation',
    marcumq: 'Generalized Marcum Q-function', finddelay: 'Estimate delay between signals',
    poly2trellis: 'Convert convolutional code polynomials to trellis description', convenc: 'Convolutionally encode binary data',
    istrellis: 'Check if input is a valid trellis structure', hammgen: 'Produce parity-check and generator matrices for Hamming code',
  },
};

function map2(M: Mat, f: (v: number) => number): Mat { const o = zeros(M.rows, M.cols); for (let i = 0; i < M.data.length; i++) o.data[i] = f(Math.round(M.data[i])); return o; }
