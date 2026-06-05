/** Built-in functions for the MATLAB subset. */
import {
  type Value, type Mat, type Handle, MatError, isMat, isHandle,
  mat, zeros, scalar, cscalar, bool, str, rowVec, colVec, fromRows, numel, isScalar, isEmpty,
  asScalar, asString, map, elementwise, matmul, transpose, horzcat, vertcat, toArray, truthy,
  isComplex, cmap, cmapReal, conj as conjFn, realPart, imagPart, csqrt, cexp, clog, ewPow, finishComplex,
  ewAdd, ewSub, ewMul, ewRDiv, ewLDiv, ewEq, cmatmul, ctranspose as ctransposeFn, cmul, cdiv,
  type Cell, type StructV, isCell, isStruct, makeCell, dimsOf, numelOf,
  type Sparse, isSparse, sparseToDense, denseToSparse, sparseFromTriplets, sparseFromMap,
  makeND, ndSize, ndimsOf,
  type Str, isStr, makeStr, makeStrArr,
  type Graph, isGraph, makeGraph,
  type Geom, isGeom,
  type Quantum, isQuantum,
  type Temporal, isTemporal, makeTemporal,
  type Table, isTable,
  type Sym, isSym, makeSym,
  type Categorical, isCategorical, makeCategorical,
  type MapV, isMap, makeMap, mapNormKey, type DictV, isDict, makeDict, cloneDict,
  toMat as m, factorialN, INT_LIMITS, applyClass,
} from './values';
import { type SymExpr, sN, sV, sAdd, sSub, sMul, sPow, sFn, sNeg, sDiv, simplifyExpr, diffExpr, subsExpr, evalExpr as symEval, exprToStr, symVars } from './sym';
import {
  det, inv, mldivide, diag, norm, eye,
  qr as qrDecomp, chol as cholFn, luOutputs, jacobiEigSym, svd as svdReal,
  rankOf, cond as condFn, pinv as pinvFn, orth as orthFn, nullspace, rref as rrefFn, vecnorm as vecnormFn, isSymmetric, cDet, svdC as svdCplx,
  generalEig, durandKerner, hess as hessFn, schur as schurFn, expm as expmFn, logm as logmFn, sqrtm as sqrtmFn, ldl as ldlFn, lsqnonneg as lsqnonnegFn,
  balance as balanceFn, rsf2csf as rsf2csfFn, qz as qzFn, ordschur as ordschurFn, ordqz as ordqzFn, schurEig as schurEigFn,
  hermiteFormInt, smithFormInt,
} from './linalg';
import { dispValue, sprintf, symTexLines, setFormatMode } from './format';
import { parseCsv, csvToTable, csvToMatrix, matrixToCsv, xlsxToCsv, parseMat, type Csv } from './io';
import type { Graphics } from './graphics';
import {
  polyCoeffs, numDen, symDet, symInv, symCharpolyCoeffs, symArg, symToExpr, symVarsOf,
  transformVars, symNames, integrate, limitAt, solveExpr, expandExpr,
  laplaceExpr, ztransExpr, ilaplaceExpr, iztransExpr, fourierExpr, ifourierExpr,
  simplifyAssume,
} from './sym-ops';
import { SYM_BUILTINS } from './sym-builtins';

/** Services the interpreter exposes to builtins. */
export interface Env {
  output(text: string): void;
  requestInput(prompt: string): Promise<string>;
  evalInput(text: string): Promise<Value>;
  graphics: Graphics;
  callHandle(h: Handle, args: Value[], nargout: number): Promise<Value[]>;
  makeHandle(name: string): Handle;
  help(name: string): string;
  clearWorkspace(names: string[]): void;
  workspaceVars(): { name: string; size: string; klass: string }[];
  saveMat(filename: string, names: string[]): void;
  loadMat(filename: string, names: string[]): void;
  readMatFile(filename: string, names: string[]): [string, Value][];
  assignVars(pairs: [string, Value][]): void;
  hasFile(name: string): boolean;
  readFileBytes(name: string): Uint8Array | null;
  readFileText(name: string): string | null;
  writeFileBytes(name: string, bytes: Uint8Array): void;
  writeFileText(name: string, text: string): void;
  listFiles(): string[];
  deleteFile(name: string): void;
  clearConsole(): void;
}

export type Builtin = (args: Value[], nargout: number, env: Env) => Promise<Value[]>;

// ── Seedable PRNG (mulberry32): rng(seed) makes rand/randn/… reproducible ──
function mulberry32(seed: number): () => number {
  let s = seed >>> 0;
  return () => { s = (s + 0x6d2b79f5) | 0; let t = Math.imul(s ^ (s >>> 15), 1 | s); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
let rngGen: (() => number) | null = null;   // null ⇒ fall back to Math.random
const rngNext = (): number => (rngGen ? rngGen() : Math.random());

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
/** Chart builtins return a graphics-object handle when an output is requested (`p = plot(...)`),
 *  and nothing otherwise (so a bare `plot(x,y)` doesn't echo to the command window). */
const gret = (n: number): Value[] => (n >= 1 ? [{ kind: 'gobj', gtype: 'line' as const }] : []);

// ── VFS read/write helpers for the data-import builtins ──
function readText(name: string, env: Env): string { const t = env.readFileText(name); if (t == null) throw new MatError(`Unable to read file '${name}'. No such file or directory.`); return t; }
function readBytes(name: string, env: Env): Uint8Array { const b = env.readFileBytes(name); if (!b) throw new MatError(`Unable to read file '${name}'. No such file or directory.`); return b; }
function readCsvFile(name: string, env: Env): Csv { return /\.xlsx?$/i.test(name) ? xlsxToCsv(readBytes(name, env)) : parseCsv(readText(name, env)); }
/** One CSV cell from a Value (scalar number, char/string, else first element). */
function csvCell(v: Value): string { if (isStr(v) || (isMat(v) && (v as Mat).isChar)) { const s = asString(v); return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s; } if (isMat(v)) return String((v as Mat).data[0]); return ''; }
/** Serialize a Table to CSV: header row of variable names, then one row per observation. */
function tableToCsv(t: Table): string {
  const lines = [t.vars.map((h) => (/[",\n]/.test(h) ? `"${h.replace(/"/g, '""')}"` : h)).join(',')];
  for (let r = 0; r < t.nrows; r++) {
    const row = t.cols.map((col) => {
      if (isStr(col)) return csvCell(str(col.items[r] ?? ''));
      if (isMat(col)) return (col as Mat).isChar ? asString(col) : String((col as Mat).data[r]);
      if (isCell(col)) return csvCell(col.items[r]);
      return '';
    });
    lines.push(row.join(','));
  }
  return lines.join('\n') + '\n';
}
const ew = (f: (x: number) => number): Builtin => async (a) => ret(map(m(a[0]), f));

/** Build a char matrix whose rows are the given strings, left-padded with '0' to equal width. */
function charRowsZ(strs: string[], minW = 0): Mat {
  const w = Math.max(minW, ...strs.map((s) => s.length), 1);
  const padded = strs.map((s) => s.padStart(w, '0'));
  const rows = padded.length, M = zeros(rows, w); M.isChar = true;
  padded.forEach((s, r) => { for (let c = 0; c < w; c++) M.data[r + c * rows] = s.charCodeAt(c); });
  return M;
}
/** Wrap a number into a named integer type (uint8/int16/…), MATLAB bit-op semantics. */
const INT_BITS: Record<string, number> = { int8: 8, uint8: 8, int16: 16, uint16: 16, int32: 32, uint32: 32, int64: 64, uint64: 64 };
function intMask(x: number, t: string): number {
  const bits = INT_BITS[t.toLowerCase()] ?? 64; const signed = t.toLowerCase().startsWith('int');
  if (bits >= 53) return signed ? x : Math.max(0, x);          // can't safely mask 64-bit in doubles
  const mod = 2 ** bits; let v = ((x % mod) + mod) % mod;
  if (signed && v >= mod / 2) v -= mod;
  return v;
}
/** Extract a trailing integer-type-name string argument (e.g. 'uint8'), if present. */
function typeArg(args: Value[]): string | null {
  for (const v of args) if ((isStr(v) || (isMat(v) && (v as Mat).isChar)) && INT_BITS[asString(v).toLowerCase()] !== undefined) return asString(v).toLowerCase();
  return null;
}

// Complex inverse trig (principal branch, MATLAB-compatible). Used when the input is
// complex or a real argument falls outside the real domain (|x|>1 for asin/acos).
const cAsin = (re: number, im: number): [number, number] => {
  const [z2r, z2i] = cmul(re, im, re, im);          // z^2
  const [sr, si] = csqrt(1 - z2r, -z2i);            // sqrt(1 - z^2)
  const [lr, li] = clog(-im + sr, re + si);         // log(iz + sqrt(1-z^2)),  iz = (-im, re)
  return [li, -lr];                                  // -i * log(...)
};
const cAcos = (re: number, im: number): [number, number] => {
  const [ar, ai] = cAsin(re, im);
  return [Math.PI / 2 - ar, -ai];                    // pi/2 - asin(z)
};
const cAtan = (re: number, im: number): [number, number] => {
  const [l1r, l1i] = clog(1 + im, -re);              // log(1 - iz)
  const [l2r, l2i] = clog(1 - im, re);               // log(1 + iz)
  return [-(l1i - l2i) / 2, (l1r - l2r) / 2];        // (i/2)(log(1-iz) - log(1+iz))
};
const cAsinh = (re: number, im: number): [number, number] => {
  const [z2r, z2i] = cmul(re, im, re, im);
  const [sr, si] = csqrt(z2r + 1, z2i);              // sqrt(z^2 + 1)
  return clog(re + sr, im + si);
};
const cAcosh = (re: number, im: number): [number, number] => {
  const [s1r, s1i] = csqrt(re - 1, im), [s2r, s2i] = csqrt(re + 1, im);
  const [pr, pi] = cmul(s1r, s1i, s2r, s2i);          // sqrt(z-1)·sqrt(z+1) (MATLAB branch, Re≥0)
  return clog(re + pr, im + pi);
};
const cAtanh = (re: number, im: number): [number, number] => {
  // Real input: pick MATLAB's branch on the cut |x|>1 (Im = -sign(x)·π/2); the general
  // complex formula loses the sign of the zero imaginary part there.
  if (im === 0) {
    if (re > 1) return [Math.atanh(1 / re), Math.PI / 2];
    if (re < -1) return [Math.atanh(1 / re), -Math.PI / 2];
    return [Math.atanh(re), 0];
  }
  const [qr, qi] = cdiv(1 + re, im, 1 - re, -im);     // (1+z)/(1-z)
  const [lr, li] = clog(qr, qi);
  return [lr / 2, li / 2];
};
const crecip = (re: number, im: number): [number, number] => cdiv(1, 0, re, im);
const cAcot = (re: number, im: number): [number, number] => { const [r, i] = cAtan(...crecip(re, im)); return [r < -Math.PI / 2 + 1e-12 ? r + Math.PI : r, i]; };
const cAcsc = (re: number, im: number): [number, number] => cAsin(...crecip(re, im));
const cAsec = (re: number, im: number): [number, number] => cAcos(...crecip(re, im));
const cAcoth = (re: number, im: number): [number, number] => cAtanh(...crecip(re, im));
const cAcsch = (re: number, im: number): [number, number] => cAsinh(...crecip(re, im));
const cAsech = (re: number, im: number): [number, number] => cAcosh(...crecip(re, im));
// Complex-aware elementwise builtin: real fn `rf`, complex fn `cf`; switch to the
// complex branch when the input is complex or any real element triggers `cw`.
const ewc = (rf: (x: number) => number, cf: (re: number, im: number) => [number, number], cw?: (x: number) => boolean): Builtin =>
  async (a) => { const A = m(a[0]); return ret(isComplex(A) || (cw ? toArray(A).some(cw) : false) ? cmap(A, cf) : map(A, rf)); };
const degOf = (cf: (re: number, im: number) => [number, number]) => (re: number, im: number): [number, number] => { const [r, i] = cf(re, im); return [r / DEG, i / DEG]; };

/** Factor a univariate polynomial (ascending coeffs) over ℚ into a list of sym factors:
 *  peel rational roots via synthetic division, leaving any irreducible part as one factor.
 *  Mirrors MATLAB's `factor(sym)` for the common integer/rational-root cases. */
function factorPolySym(cAsc: number[], v: string): SymExpr[] {
  let p = cAsc.slice().reverse();                       // descending coeffs (highest first)
  const evalP = (x: number) => p.reduce((acc, co) => acc * x + co, 0);
  const deflate = (r: number) => { const q: number[] = []; let carry = 0; for (let i = 0; i < p.length; i++) { const t = p[i] + carry * r; q.push(t); carry = t; } q.pop(); return q; };
  const nearRat = (x: number): number | null => { for (let q = 1; q <= 12; q++) { const pn = Math.round(x * q); if (Math.abs(x - pn / q) < 1e-7) return pn / q; } return null; };
  const factors: SymExpr[] = []; let guard = 0;
  while (p.length > 2 && guard++ < 64) {
    const { re, im } = durandKerner(p); const scale = Math.max(1, ...p.map(Math.abs)); let peeled = false;
    for (let i = 0; i < re.length; i++) {
      if (Math.abs(im[i]) > 1e-7) continue; const r = nearRat(re[i]); if (r === null) continue;
      if (Math.abs(evalP(r)) / scale < 1e-6) { factors.push(sAdd(sV(v), sN(-r))); p = deflate(r); peeled = true; break; }
    }
    if (!peeled) break;
  }
  if (p.length === 2) { const r = nearRat(-p[1] / p[0]); if (r !== null) { factors.push(sAdd(sV(v), sN(-r))); p = [p[0]]; } }
  if (p.length >= 2) { const deg = p.length - 1; let e: SymExpr = sN(0); for (let i = 0; i < p.length; i++) if (Math.abs(p[i]) > 1e-12) e = sAdd(e, sMul(sN(p[i]), sPow(sV(v), sN(deg - i)))); factors.push(simplifyExpr(e)); }
  else if (Math.abs(p[0] - 1) > 1e-9) factors.unshift(sN(p[0]));
  return factors.length ? factors : [sN(cAsc[cAsc.length - 1] ?? 0)];
}

/** Fold a symbolic array along its first non-singleton dim (sum→sAdd, prod→sMul). */
function symVecReduce(s: Sym, op: (a: SymExpr, b: SymExpr) => SymExpr, id: SymExpr): Sym {
  if (s.rows === 1 || s.cols === 1) { let acc = id; for (const e of s.exprs) acc = op(acc, e); return makeSym(1, 1, [simplifyExpr(acc)]); }
  const out: SymExpr[] = []; for (let c = 0; c < s.cols; c++) { let acc = id; for (let r = 0; r < s.rows; r++) acc = op(acc, s.exprs[r + c * s.rows]); out.push(simplifyExpr(acc)); }
  return makeSym(1, s.cols, out);
}
const gcdI = (a: number, b: number): number => { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; };
/** Decompose an expanded polynomial into monomials {coef, var→power}; null if non-polynomial. */
function monomialsOf(e: SymExpr): { coef: number; pow: Map<string, number> }[] | null {
  const flatTerms: SymExpr[] = []; const flat = (n: SymExpr, op: 'add' | 'mul', acc: SymExpr[]) => { if (n.t === op) n.args.forEach((x) => flat(x, op, acc)); else acc.push(n); };
  flat(e, 'add', flatTerms); const out: { coef: number; pow: Map<string, number> }[] = [];
  for (const t of flatTerms) {
    const facs: SymExpr[] = []; flat(t, 'mul', facs); let coef = 1; const pow = new Map<string, number>();
    for (const f of facs) {
      if (f.t === 'n') coef *= f.v;
      else if (f.t === 'v') pow.set(f.name, (pow.get(f.name) || 0) + 1);
      else if (f.t === 'pow' && f.base.t === 'v' && f.exp.t === 'n' && Number.isInteger(f.exp.v) && f.exp.v > 0) pow.set(f.base.name, (pow.get(f.base.name) || 0) + f.exp.v);
      else return null;
    }
    out.push({ coef, pow });
  }
  return out;
}
/** Factor a (multivariate) polynomial: pull out the integer + monomial content, then
 *  factor the remaining univariate quotient over ℚ. Returns a list of sym factors. */
function factorSymExpr(e0: SymExpr): SymExpr[] {
  const e = simplifyExpr(expandExpr(e0)); const monos = monomialsOf(e);
  if (!monos || monos.length === 0) return [e0];
  const allInt = monos.every((t) => Number.isInteger(t.coef));
  let g = allInt ? Math.abs(monos[0].coef) : 1; if (allInt) for (const t of monos) g = gcdI(g, t.coef); if (!g) g = 1;
  const vars = new Set<string>(); monos.forEach((t) => t.pow.forEach((_, v) => vars.add(v)));
  const minPow = new Map<string, number>(); for (const v of vars) { let mn = Infinity; for (const t of monos) mn = Math.min(mn, t.pow.get(v) || 0); minPow.set(v, mn); }
  const content: SymExpr[] = []; if (allInt && g !== 1) content.push(sN(g)); for (const [v, p] of minPow) if (p > 0) content.push(p === 1 ? sV(v) : sPow(sV(v), sN(p)));
  const qTerms = monos.map((t) => { const c = allInt ? t.coef / g : t.coef; const fs: SymExpr[] = [sN(c)]; t.pow.forEach((p, v) => { const rp = p - (minPow.get(v) || 0); if (rp > 0) fs.push(rp === 1 ? sV(v) : sPow(sV(v), sN(rp))); }); return fs.length === 1 ? sN(c) : sMul(...fs); });
  const quotient = simplifyExpr(qTerms.length === 1 ? qTerms[0] : sAdd(...qTerms));
  const qVars = symVars(quotient);
  const qFacs = qVars.length === 1 ? ((c) => (c.length >= 2 ? factorPolySym(c, qVars[0]) : [quotient]))(polyCoeffs(quotient, qVars[0])) : [quotient];
  const all = [...content, ...qFacs].filter((f) => !(f.t === 'n' && f.v === 1));
  return all.length ? all : [sN(1)];
}

const prodOf = (a: number[]): number => a.reduce((p, x) => p * x, 1);
/** First dimension whose size is > 1 (MATLAB's default reduction dim), 1-based. */
function firstNonSingleton(dims: number[]): number { for (let k = 0; k < dims.length; k++) if (dims[k] > 1) return k + 1; return 1; }
/** Apply `f` to every 1-D fiber of A along `dim` (1-based), collapsing that dim to 1.
 *  `f` returns the reduced value, or `[value, index]` (1-based) for min/max. Works for
 *  any rank via the `nd` layout; returns both the value array and a matching index array. */
function reduceAlongDim(A: Mat, dim: number, f: (fiber: number[]) => number | [number, number]): { v: Mat; idx: Mat } {
  const dims = ndSize(A);
  if (dim > dims.length || dims[dim - 1] === 1) {
    const v = makeND(dims, Float64Array.from(A.data), { idata: A.idata ? Float64Array.from(A.idata) : null, isChar: A.isChar });
    return { v, idx: makeND(dims, new Float64Array(A.data.length).fill(1)) };
  }
  const n = dims[dim - 1];
  const outDims = dims.slice(); outDims[dim - 1] = 1;
  const stride: number[] = []; { let s = 1; for (let k = 0; k < dims.length; k++) { stride.push(s); s *= dims[k]; } }
  const ostride: number[] = []; { let s = 1; for (let k = 0; k < dims.length; k++) { ostride.push(s); s *= outDims[k]; } }
  const outTotal = prodOf(outDims);
  const vd = new Float64Array(outTotal), id = new Float64Array(outTotal);
  for (let o = 0; o < outTotal; o++) {
    let base = 0; for (let k = 0; k < dims.length; k++) base += (Math.floor(o / ostride[k]) % outDims[k]) * stride[k];
    const fiber: number[] = []; for (let t = 0; t < n; t++) fiber.push(A.data[base + t * stride[dim - 1]]);
    const r = f(fiber);
    if (Array.isArray(r)) { vd[o] = r[0]; id[o] = r[1]; } else vd[o] = r;
  }
  return { v: makeND(outDims, vd), idx: makeND(outDims, id) };
}
/** Cumulative scan (cumsum/cumprod) along `dim`, preserving shape. */
function scanAlongDim(A: Mat, dim: number, init: number, f: (acc: number, x: number) => number): Mat {
  const dims = ndSize(A);
  const out = makeND(dims, new Float64Array(A.data.length), { isChar: A.isChar });
  if (dim > dims.length) { out.data.set(A.data); return out; }
  const n = dims[dim - 1];
  const stride: number[] = []; { let s = 1; for (let k = 0; k < dims.length; k++) { stride.push(s); s *= dims[k]; } }
  const outerDims = dims.slice(); outerDims[dim - 1] = 1; const outer = prodOf(outerDims);
  const ostride: number[] = []; { let s = 1; for (let k = 0; k < dims.length; k++) { ostride.push(s); s *= outerDims[k]; } }
  for (let o = 0; o < outer; o++) {
    let base = 0; for (let k = 0; k < dims.length; k++) base += (Math.floor(o / ostride[k]) % outerDims[k]) * stride[k];
    let acc = init; for (let t = 0; t < n; t++) { const i = base + t * stride[dim - 1]; acc = f(acc, A.data[i]); out.data[i] = acc; }
  }
  return out;
}

/** Complex reduction along a dim (vector / dim-1 / dim-2), carrying real+imag parts.
 *  `fin` post-processes the accumulated (re,im) with the element count (e.g. /n for mean). */
function creduce(a: Mat, dim: number | undefined, initR: number, initI: number, f: (ar: number, ai: number, xr: number, xi: number) => [number, number], fin: (r: number, i: number, n: number) => [number, number] = (r, i) => [r, i]): Mat {
  const ai = a.idata ?? new Float64Array(a.data.length); const vector = a.rows === 1 || a.cols === 1;
  if (dim === undefined && vector) { let r = initR, im = initI; for (let k = 0; k < a.data.length; k++) [r, im] = f(r, im, a.data[k], ai[k]); [r, im] = fin(r, im, numel(a)); return cscalar(r, im); }
  const d = dim ?? 1;
  if (d === 1) { const R = new Float64Array(a.cols), I = new Float64Array(a.cols); for (let c = 0; c < a.cols; c++) { let r = initR, im = initI; for (let row = 0; row < a.rows; row++) { const idx = row + c * a.rows; [r, im] = f(r, im, a.data[idx], ai[idx]); } [R[c], I[c]] = fin(r, im, a.rows); } return finishComplex(1, a.cols, R, I); }
  const R = new Float64Array(a.rows), I = new Float64Array(a.rows); for (let row = 0; row < a.rows; row++) { let r = initR, im = initI; for (let c = 0; c < a.cols; c++) { const idx = row + c * a.rows; [r, im] = f(r, im, a.data[idx], ai[idx]); } [R[row], I[row]] = fin(r, im, a.cols); } return finishComplex(a.rows, 1, R, I);
}
/** Complex cumulative scan (cumsum/cumprod) along a dim (vector / dim-1 / dim-2). */
function ccum(A: Mat, dim: number | undefined, mult: boolean): Mat {
  const ai = A.idata ?? new Float64Array(A.data.length); const o = zeros(A.rows, A.cols); o.idata = new Float64Array(o.data.length);
  const step = (sr: number, si: number, xr: number, xi: number): [number, number] => (mult ? cmul(sr, si, xr, xi) : [sr + xr, si + xi]);
  const initR = mult ? 1 : 0; const vector = A.rows === 1 || A.cols === 1; const d = dim ?? (vector ? (A.rows === 1 ? 2 : 1) : 1);
  if (vector && dim === undefined) { let sr = initR, si = 0; for (let i = 0; i < A.data.length; i++) { [sr, si] = step(sr, si, A.data[i], ai[i]); o.data[i] = sr; o.idata![i] = si; } return o; }
  if (d === 1) { for (let c = 0; c < A.cols; c++) { let sr = initR, si = 0; for (let r = 0; r < A.rows; r++) { const idx = r + c * A.rows; [sr, si] = step(sr, si, A.data[idx], ai[idx]); o.data[idx] = sr; o.idata![idx] = si; } } return o; }
  for (let r = 0; r < A.rows; r++) { let sr = initR, si = 0; for (let c = 0; c < A.cols; c++) { const idx = r + c * A.rows; [sr, si] = step(sr, si, A.data[idx], ai[idx]); o.data[idx] = sr; o.idata![idx] = si; } } return o;
}
function reduce(a: Mat, dim: number | undefined, init: number, f: (acc: number, x: number) => number, fin: (acc: number, count: number) => number = (x) => x): Mat {
  if (dim === undefined && a.rows === 0 && a.cols === 0) return scalar(fin(init, 0));   // sum([])=0, prod([])=1, mean([])=NaN
  if (a.nd) { const d = dim ?? firstNonSingleton(ndSize(a)); return reduceAlongDim(a, d, (fib) => fin(fib.reduce((acc, x) => f(acc, x), init), fib.length)).v; }
  const vector = a.rows === 1 || a.cols === 1;
  if (dim === undefined && vector) {
    let acc = init; for (let i = 0; i < a.data.length; i++) acc = f(acc, a.data[i]);
    return scalar(fin(acc, numel(a)));
  }
  const d = dim ?? 1;
  if (d === 1) {
    const out = zeros(1, a.cols);
    for (let c = 0; c < a.cols; c++) { let acc = init; for (let r = 0; r < a.rows; r++) acc = f(acc, a.data[r + c * a.rows]); out.data[c] = fin(acc, a.rows); }
    return out;
  }
  const out = zeros(a.rows, 1);
  for (let r = 0; r < a.rows; r++) { let acc = init; for (let c = 0; c < a.cols; c++) acc = f(acc, a.data[r + c * a.rows]); out.data[r] = fin(acc, a.cols); }
  return out;
}

function minmax(args: Value[], nargout: number, pick: (a: number, b: number) => boolean): Value[] {
  const A = m(args[0]);
  if (args.length >= 2 && isMat(args[1]) && numel(args[1]) > 0) {
    // element-wise max/min of two arrays
    return [elementwise(A, args[1] as Mat, (x, y) => (pick(x, y) ? x : y))];
  }
  const reduceVec = (vals: number[]): [number, number] => {
    let bi = 0; for (let i = 1; i < vals.length; i++) if (pick(vals[i], vals[bi])) bi = i;
    return [vals[bi], bi + 1];
  };
  if (A.nd) {
    const dimGiven = args.length >= 3 && isMat(args[2]) && numel(args[2]) > 0 ? Math.round(asScalar(args[2])) : undefined;
    const { v, idx } = reduceAlongDim(A, dimGiven ?? firstNonSingleton(ndSize(A)), reduceVec);
    return nargout >= 2 ? [v, idx] : [v];
  }
  if (A.rows === 1 || A.cols === 1) {
    if (numel(A) === 0) return [zeros(0, 0), zeros(0, 0)];
    const [v, idx] = reduceVec(toArray(A));
    return nargout >= 2 ? [scalar(v), scalar(idx)] : [scalar(v)];
  }
  const vals = zeros(1, A.cols), idxs = zeros(1, A.cols);
  for (let c = 0; c < A.cols; c++) {
    const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]);
    const [v, idx] = reduceVec(col); vals.data[c] = v; idxs.data[c] = idx;
  }
  return nargout >= 2 ? [vals, idxs] : [vals];
}

function dimArg(args: Value[], i: number): number | undefined {
  return args.length > i && isMat(args[i]) && !(args[i] as Mat).isChar ? asScalar(args[i]) : undefined;   // a char/string arg (e.g. 'omitnan') is not a dim
}
/** all/any: honor a dimension scalar, a vector of dimensions, or the 'all' option; returns logical. */
function boolReduce(args: Value[], init: number, f: (acc: number, x: number) => number): Value[] {
  const A = m(args[0]);
  const opt = args.length >= 2 && (isStr(args[1]) || (isMat(args[1]) && (args[1] as Mat).isChar)) ? asString(args[1]).toLowerCase() : null;
  let out: Mat;
  if (opt === 'all') out = scalar(toArray(A).reduce((s, x) => f(s, x), init));
  else if (args.length >= 2 && isMat(args[1]) && !(args[1] as Mat).isChar && numel(args[1]) > 0) {
    out = toArray(args[1]).map((x) => Math.round(x)).reduce((acc, d) => reduce(acc, d, init, f), A);
  } else out = reduce(A, undefined, init, f);
  out.isBool = true;
  return [out];
}
/** True if any argument is the given option keyword (char or string type). */
function hasFlag(args: Value[], flag: string): boolean { return args.some((x) => (isStr(x) || (isMat(x) && (x as Mat).isChar)) && asString(x).toLowerCase() === flag); }

function sizeOf(args: Value[], nargout: number): Value[] {
  const v = args[0];
  const dims = isMat(v) && v.nd ? v.nd.slice() : dimsOf(v);
  if (args.length >= 2) { const d = Math.round(asScalar(args[1])); return [scalar(dims[d - 1] ?? 1)]; }
  if (nargout >= 2) {
    // [a,b,c]=size(A): last requested output absorbs the product of remaining dims.
    const out: Value[] = [];
    for (let i = 0; i < nargout; i++) out.push(scalar(i === nargout - 1 ? dims.slice(i).reduce((p, x) => p * x, 1) || (i < dims.length ? 0 : 1) : (dims[i] ?? 1)));
    return out;
  }
  return [rowVec(dims)];
}
/** zeros/ones/rand argument handling extended to N-D: (), (n), (r,c,...), ([d1 d2 ...]). */
function dimsN(args: Value[]): number[] {
  if (args.length === 0) return [1, 1];
  if (args.length === 1) { const a = m(args[0]); if (numel(a) >= 2) return toArray(a).map((x) => Math.round(x)); const n = Math.round(asScalar(a)); return [n, n]; }
  return args.map((x) => Math.round(asScalar(x)));
}
/** Coerce char/string/cellstr/numeric to a string-array view (dims + items). */
function asStrArr(v: Value): { rows: number; cols: number; items: string[] } {
  if (isStr(v)) return { rows: v.rows, cols: v.cols, items: v.items };
  if (isCell(v)) return { rows: v.rows, cols: v.cols, items: v.items.map((x) => asString(x)) };
  if (isMat(v) && v.isChar) return { rows: 1, cols: 1, items: [asString(v)] };
  if (isMat(v)) return { rows: v.rows, cols: v.cols, items: Array.from(v.data, (x) => String(x)) };
  return { rows: 1, cols: 1, items: [asString(v)] };
}
const mapStrArr = (v: Value, f: (s: string) => string): Str => { const s = asStrArr(v); return makeStrArr(s.rows, s.cols, s.items.map(f)); };
const prodA = (a: number[]): number => a.reduce((p, x) => p * x, 1);
/** Concatenate N-D arrays along `dim` (1-based). */
function catND(dim: number, parts: Mat[]): Mat {
  const d = dim - 1;
  const outDims = ndSize(parts[0]).slice(); while (outDims.length <= d) outDims.push(1);
  outDims[d] = parts.reduce((s, p) => { const pd = ndSize(p); return s + (pd[d] ?? 1); }, 0);
  const ostride = [1]; for (let i = 1; i < outDims.length; i++) ostride[i] = ostride[i - 1] * outDims[i - 1];
  const data = new Float64Array(prodA(outDims)); let offset = 0;
  for (const p of parts) {
    const PD = ndSize(p).slice(); while (PD.length < outDims.length) PD.push(1);
    const pstride = [1]; for (let i = 1; i < PD.length; i++) pstride[i] = pstride[i - 1] * PD[i - 1];
    const ptot = numel(p);
    for (let o = 0; o < ptot; o++) { let lin = 0; for (let k = 0; k < PD.length; k++) { const idx = Math.floor(o / pstride[k]) % PD[k]; lin += (k === d ? idx + offset : idx) * ostride[k]; } data[lin] = p.data[o]; }
    offset += PD[d];
  }
  return makeND(outDims, data, { isChar: parts[0].isChar });
}
/** Permute the dimensions of an array (1-based order). */
function permuteND(A: Mat, order: number[]): Mat {
  const D = ndSize(A).slice(); while (D.length < order.length) D.push(1);
  const outDims = order.map((o) => D[o - 1]);
  const istride = [1]; for (let i = 1; i < D.length; i++) istride[i] = istride[i - 1] * D[i - 1];
  const ostride = [1]; for (let i = 1; i < outDims.length; i++) ostride[i] = ostride[i - 1] * outDims[i - 1];
  const total = prodA(D); const data = new Float64Array(total); const im = A.idata ? new Float64Array(total) : null;
  for (let o = 0; o < total; o++) { let lin = 0; for (let k = 0; k < outDims.length; k++) { const oi = Math.floor(o / ostride[k]) % outDims[k]; lin += oi * istride[order[k] - 1]; } data[o] = A.data[lin]; if (im) im[o] = A.idata![lin]; }
  return makeND(outDims, data, { idata: im, isChar: A.isChar });
}

function dims2(args: Value[], def = 0): [number, number] {
  // zeros/ones/eye argument handling: (), (n), (r,c), ([r c])
  if (args.length === 0) return [1, 1];
  if (args.length === 1) {
    const a = m(args[0]);
    if (numel(a) >= 2) return [a.data[0], a.data[1]];
    const n = asScalar(a); return [n, n];
  }
  return [asScalar(args[0]), asScalar(args[1])];
}

function nthroot(x: number, n: number): number {
  if (x < 0) { if (Math.round(n) % 2 !== 0) return -Math.pow(-x, 1 / n); return NaN; }
  return Math.pow(x, 1 / n);
}

export const BUILTINS: Record<string, Builtin> = {
  ...SYM_BUILTINS,
  // ═══════════════════════════ ELEMENTARY MATH ═══════════════════════════
  sin: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [Math.sin(re) * Math.cosh(im), Math.cos(re) * Math.sinh(im)]) : map(A, Math.sin)); },
  cos: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [Math.cos(re) * Math.cosh(im), -Math.sin(re) * Math.sinh(im)]) : map(A, Math.cos)); },
  tan: async (a) => { const A = m(a[0]); if (!isComplex(A)) return ret(map(A, Math.tan)); return ret(cmap(A, (re, im) => { const sr = Math.sin(re) * Math.cosh(im), si = Math.cos(re) * Math.sinh(im); const cr = Math.cos(re) * Math.cosh(im), ci = -Math.sin(re) * Math.sinh(im); const d = cr * cr + ci * ci; return [(sr * cr + si * ci) / d, (si * cr - sr * ci) / d]; })); },
  asin: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => Math.abs(x) > 1) ? cmap(A, (re, im) => cAsin(re, im)) : map(A, Math.asin)); },
  acos: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => Math.abs(x) > 1) ? cmap(A, (re, im) => cAcos(re, im)) : map(A, Math.acos)); },
  atan: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => cAtan(re, im)) : map(A, Math.atan)); },
  sinh: ew(Math.sinh), cosh: ew(Math.cosh), tanh: ew(Math.tanh),
  cot: ew((x) => 1 / Math.tan(x)),
  exp: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => cexp(re, im)) : map(A, Math.exp)); },
  log: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => clog(re, im)) : map(A, Math.log)); },
  log10: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => { const [lr, li] = clog(re, im); return [lr / Math.LN10, li / Math.LN10]; }) : map(A, Math.log10)); },
  log2: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => { const [lr, li] = clog(re, im); return [lr / Math.LN2, li / Math.LN2]; }) : map(A, Math.log2)); },
  sqrt: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => csqrt(re, im)) : map(A, Math.sqrt)); },
  abs: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmapReal(A, (re, im) => Math.hypot(re, im)) : map(A, Math.abs)); },
  sign: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => { const mg = Math.hypot(re, im); return mg === 0 ? [0, 0] : [re / mg, im / mg]; }) : map(A, Math.sign)); },
  conj: async (a) => ret(conjFn(m(a[0]))),
  real: async (a) => ret(realPart(m(a[0]))),
  imag: async (a) => ret(imagPart(m(a[0]))),
  angle: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmapReal(A, (re, im) => Math.atan2(im, re)) : map(A, (x) => (x < 0 ? Math.PI : 0))); },
  complex: async (a) => { const A = m(a[0]); const B = a.length >= 2 ? m(a[1]) : zeros(A.rows, A.cols); const re = new Float64Array(A.data); const im = new Float64Array(A.data.length); for (let i = 0; i < im.length; i++) im[i] = B.data.length === 1 ? B.data[0] : B.data[i]; return ret({ kind: 'num', rows: A.rows, cols: A.cols, data: re, idata: im }); },
  iscomplex: async (a) => ret(bool(isComplex(m(a[0])))),
  floor: ew(Math.floor), ceil: ew(Math.ceil),
  round: async (a) => { const A = m(a[0]); const nd = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? Math.round(asScalar(a[1])) : 0; const f = Math.pow(10, nd); const r = (x: number) => Math.sign(x) * Math.round(Math.abs(x) * f) / f; const o = map(A, r); if (A.idata) o.idata = A.idata.map(r); return ret(o); },
  fix: ew(Math.trunc),
  atan2: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.atan2)),
  mod: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? x : ((x % y) + y) % y))),
  rem: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? NaN : x % y))),
  power: async (a) => ret(ewPow(m(a[0]), m(a[1]))),
  nthroot: async (a) => ret(elementwise(m(a[0]), m(a[1]), nthroot)),
  hypot: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.hypot)),

  // trig / hyperbolic completion (radians)
  sec: ew((x) => 1 / Math.cos(x)), csc: ew((x) => 1 / Math.sin(x)),
  coth: ew((x) => 1 / Math.tanh(x)), sech: ew((x) => 1 / Math.cosh(x)), csch: ew((x) => 1 / Math.sinh(x)),
  acot: ewc((x) => Math.atan(1 / x), cAcot), asec: ewc((x) => Math.acos(1 / x), cAsec, (x) => Math.abs(x) < 1), acsc: ewc((x) => Math.asin(1 / x), cAcsc, (x) => Math.abs(x) < 1),
  asinh: ewc(Math.asinh, cAsinh), acosh: ewc(Math.acosh, cAcosh, (x) => x < 1), atanh: ewc(Math.atanh, cAtanh, (x) => Math.abs(x) > 1),
  acoth: ewc((x) => Math.atanh(1 / x), cAcoth, (x) => Math.abs(x) < 1), asech: ewc((x) => Math.acosh(1 / x), cAsech, (x) => x < 0 || x > 1), acsch: ewc((x) => Math.asinh(1 / x), cAcsch),
  // degree-valued trig
  sind: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => { const r = re * DEG, i = im * DEG; return [Math.sin(r) * Math.cosh(i), Math.cos(r) * Math.sinh(i)]; }) : map(A, (x) => Math.sin(x * DEG))); },
  cosd: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => { const r = re * DEG, i = im * DEG; return [Math.cos(r) * Math.cosh(i), -Math.sin(r) * Math.sinh(i)]; }) : map(A, (x) => Math.cos(x * DEG))); },
  tand: ew((x) => Math.tan(x * DEG)),
  cotd: ew((x) => 1 / Math.tan(x * DEG)), secd: ew((x) => 1 / Math.cos(x * DEG)), cscd: ew((x) => 1 / Math.sin(x * DEG)),
  asind: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => Math.abs(x) > 1) ? cmap(A, (re, im) => { const [r, i] = cAsin(re, im); return [r / DEG, i / DEG]; }) : map(A, (x) => Math.asin(x) / DEG)); },
  acosd: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => Math.abs(x) > 1) ? cmap(A, (re, im) => { const [r, i] = cAcos(re, im); return [r / DEG, i / DEG]; }) : map(A, (x) => Math.acos(x) / DEG)); },
  atand: ewc((x) => Math.atan(x) / DEG, degOf(cAtan)),
  acotd: ewc((x) => Math.atan(1 / x) / DEG, degOf(cAcot)),
  atan2d: async (a) => ret(elementwise(m(a[0]), m(a[1]), (y, x) => Math.atan2(y, x) / DEG)),
  deg2rad: ew((x) => x * DEG), rad2deg: ew((x) => x / DEG),
  // elementary extras
  cumprod: async (a) => {
    const A = m(a[0]); const dim = dimArg(a, 1);
    if (isComplex(A)) return ret(ccum(A, dim, true));
    if (A.nd || dim !== undefined) return ret(scanAlongDim(A, dim ?? firstNonSingleton(ndSize(A)), 1, (p, x) => p * x));
    const o = zeros(A.rows, A.cols);
    if (A.rows === 1 || A.cols === 1) { let p = 1; for (let i = 0; i < A.data.length; i++) { p *= A.data[i]; o.data[i] = p; } }
    else for (let c = 0; c < A.cols; c++) { let p = 1; for (let r = 0; r < A.rows; r++) { p *= A.data[r + c * A.rows]; o.data[r + c * A.rows] = p; } }
    return ret(o);
  },
  expm1: ew(Math.expm1), log1p: ew(Math.log1p),
  sinpi: ew((x) => Math.sin(Math.PI * x)), cospi: ew((x) => Math.cos(Math.PI * x)),
  pow2: ew((x) => Math.pow(2, x)),
  nextpow2: ew((x) => { const a = Math.abs(x); return a === 0 ? 0 : Math.ceil(Math.log2(a)); }),
  realsqrt: ew((x) => { if (x < 0) throw new MatError('realsqrt: argument must be nonnegative'); return Math.sqrt(x); }),
  reallog: ew((x) => { if (x < 0) throw new MatError('reallog: argument must be nonnegative'); return Math.log(x); }),
  realpow: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.pow)),
  // value queries
  isreal: async (a) => ret(bool(!isComplex(m(a[0])))),
  allfinite: async (a) => ret(bool(toArray(m(a[0])).every(Number.isFinite))),
  anynan: async (a) => ret(bool(toArray(m(a[0])).some(Number.isNaN))),
  // number theory
  gcd: async (a) => ret(elementwise(m(a[0]), m(a[1]), gcd2)),
  lcm: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (x === 0 || y === 0 ? 0 : Math.abs(x * y) / gcd2(x, y)))),
  factorial: ew((x) => factorialN(Math.round(x))),
  nchoosek: async (a) => {
    const n = Math.round(asScalar(a[0])); const k = Math.round(asScalar(a[1]));
    if (k < 0 || k > n) return ret(scalar(0));
    let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
    return ret(scalar(Math.round(r)));
  },
  primes: async (a) => {
    const n = Math.floor(asScalar(a[0])); if (n < 2) return ret(zeros(1, 0));
    const sieve = new Array(n + 1).fill(true); sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= n; i++) if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
    const out: number[] = []; for (let i = 2; i <= n; i++) if (sieve[i]) out.push(i);
    return ret(rowVec(out));
  },
  isprime: async (a) => {
    const r = map(m(a[0]), (x) => { const v = Math.round(x); if (v < 2) return 0; for (let i = 2; i * i <= v; i++) if (v % i === 0) return 0; return 1; });
    r.isBool = true; return [r];
  },
  factor: async (a) => {
    if (isSym(a[0])) {
      const s = a[0] as Sym; const vars = symVarsOf(s);
      if (vars.length === 0) {                          // constant sym → integer factorization
        const nval = Math.round(symEval(s.exprs[0], new Map())); if (!Number.isFinite(nval) || Math.abs(nval) < 2) return ret(s);
        let nn = Math.abs(nval); const primes: number[] = []; for (let d = 2; d * d <= nn; d++) while (nn % d === 0) { primes.push(d); nn /= d; } if (nn > 1) primes.push(nn);
        return ret(makeSym(1, primes.length, primes.map((p) => sN(p))));
      }
      const fac = factorSymExpr(s.exprs[0]);            // univariate + multivariate (content + quotient)
      return ret(makeSym(1, fac.length, fac));
    }
    let n = Math.round(asScalar(a[0])); const orig = n; const out: number[] = [];
    for (let d = 2; d * d <= n; d++) while (n % d === 0) { out.push(d); n /= d; }
    if (n > 1) out.push(n);
    return ret(rowVec(out.length ? out : [orig]));
  },
  // ═══════════════════ SPECIAL FUNCTIONS & NUMBER THEORY ═══════════════════
  gamma: ew(gammaFn), gammaln: ew(logGamma),
  erf: ew(erfFn), erfc: ew((x) => 1 - erfFn(x)),
  beta: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => gammaFn(x) * gammaFn(y) / gammaFn(x + y))),
  betaln: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => logGamma(x) + logGamma(y) - logGamma(x + y))),
  psi: ew(digamma),
  expint: ew(expintE1),
  sinint: ew((x) => cisi(x)[0]),
  cosint: ew((x) => cisi(x)[1]),
  legendre: async (a) => {
    const n = Math.round(asScalar(a[0])); const X = toArray(m(a[1]));
    const out = zeros(n + 1, X.length);
    for (let j = 0; j < X.length; j++) for (let mm = 0; mm <= n; mm++) out.data[mm + j * (n + 1)] = plgndr(n, mm, X[j]);
    return ret(out);
  },
  besselj: async (a) => ret(bzip(a, besseljFn)),
  bessely: async (a) => ret(bzip(a, besselyFn)),
  besseli: async (a) => ret(bzip(a, besseliFn)),
  besselk: async (a) => ret(bzip(a, besselkFn)),
  besselh: async (a) => {
    const nu = asScalar(a[0]); const k = a.length >= 3 ? Math.round(asScalar(a[1])) : 1; const X = m(a[a.length >= 3 ? 2 : 1]);
    const re = new Float64Array(X.data.length), im = new Float64Array(X.data.length);
    for (let i = 0; i < X.data.length; i++) { re[i] = besseljFn(nu, X.data[i]); im[i] = (k === 2 ? -1 : 1) * besselyFn(nu, X.data[i]); }
    return ret(finishComplex(X.rows, X.cols, re, im));
  },
  airy: async (a) => { const hasK = a.length >= 2; const kind = hasK ? Math.round(asScalar(a[0])) : 0; const X = m(a[hasK ? 1 : 0]); return ret(map(X, (x) => airyFn(kind, x))); },
  ellipke: async (a, n) => { const M = m(a[0]); const K = zeros(M.rows, M.cols), E = zeros(M.rows, M.cols); for (let i = 0; i < M.data.length; i++) { const [k, e] = ellipkeFn(M.data[i]); K.data[i] = k; E.data[i] = e; } return n >= 2 ? [K, E] : [K]; },
  ellipj: async (a, n) => { const U = m(a[0]); const mm = asScalar(a[1]); const SN = zeros(U.rows, U.cols), CN = zeros(U.rows, U.cols), DN = zeros(U.rows, U.cols); for (let i = 0; i < U.data.length; i++) { const [sn, cn, dn] = sncndn(U.data[i], 1 - mm); SN.data[i] = sn; CN.data[i] = cn; DN.data[i] = dn; } return n >= 2 ? [SN, CN, DN] : [SN]; },
  erfi: ew(erfiFn),
  dawson: ew(dawsonFn),
  fresnelc: ew((x) => fresnelCS(x)[0]),
  fresnels: ew((x) => fresnelCS(x)[1]),
  zeta: ew(zetaFn),
  igamma: async (a) => ret(elementwise(m(a[0]), m(a[1]), igammaFn)),
  pochhammer: async (a) => ret(elementwise(m(a[0]), m(a[1]), pochhammerFn)),
  lambertw: async (a) => { const hasB = a.length >= 2; const branch = hasB ? Math.round(asScalar(a[0])) : 0; const X = m(a[hasB ? 1 : 0]); return ret(map(X, (x) => lambertwFn(x, branch))); },
  chebyshevT: async (a) => { const nn = Math.round(asScalar(a[0])); return ret(map(m(a[1]), (x) => orthoPoly('T', nn, x))); },
  chebyshevU: async (a) => { const nn = Math.round(asScalar(a[0])); return ret(map(m(a[1]), (x) => orthoPoly('U', nn, x))); },
  legendreP: async (a) => { const nn = Math.round(asScalar(a[0])); return ret(map(m(a[1]), (x) => orthoPoly('P', nn, x))); },
  hermiteH: async (a) => { const nn = Math.round(asScalar(a[0])); return ret(map(m(a[1]), (x) => orthoPoly('H', nn, x))); },
  laguerreL: async (a) => { const nn = Math.round(asScalar(a[0])); return ret(map(m(a[1]), (x) => orthoPoly('L', nn, x))); },
  divisors: async (a) => { const N = Math.abs(Math.round(asScalar(a[0]))); const d: number[] = []; for (let i = 1; i <= N; i++) if (N % i === 0) d.push(i); return ret(rowVec(d.length ? d : [N === 0 ? 0 : 1])); },
  frac: ew((x) => x - Math.trunc(x)),
  kroneckerDelta: async (a) => { const M = m(a[0]); const N = a.length >= 2 ? m(a[1]) : scalar(0); return ret(elementwise(M, N, (x, y) => x === y ? 1 : 0)); },
  rectangularPulse: async (a) => { const X = m(a[a.length >= 3 ? 2 : 0]); const lo = a.length >= 3 ? asScalar(a[0]) : -0.5; const hi = a.length >= 3 ? asScalar(a[1]) : 0.5; return ret(map(X, (x) => x > lo && x < hi ? 1 : (x === lo || x === hi ? 0.5 : 0))); },
  triangularPulse: async (a) => {
    let lo: number, mid: number, hi: number, X: Mat;
    if (a.length >= 4) { lo = asScalar(a[0]); mid = asScalar(a[1]); hi = asScalar(a[2]); X = m(a[3]); }
    else if (a.length === 3) { lo = asScalar(a[0]); hi = asScalar(a[1]); mid = (lo + hi) / 2; X = m(a[2]); }
    else { lo = -1; mid = 0; hi = 1; X = m(a[0]); }
    return ret(map(X, (x) => { if (x <= lo || x >= hi) return 0; if (x === mid) return 1; return x < mid ? (x - lo) / (mid - lo) : (hi - x) / (hi - mid); }));
  },
  signIm: async (a) => { const X = m(a[0]); const o = zeros(X.rows, X.cols); for (let i = 0; i < X.data.length; i++) { const im = X.idata ? X.idata[i] : 0; o.data[i] = im !== 0 ? Math.sign(im) : -Math.sign(X.data[i]); } return ret(o); },
  adjoint: async (a) => { const A = m(a[0]); if (A.rows !== A.cols) throw new MatError('adjoint: matrix must be square'); const d = det(A); if (Math.abs(d) > 1e-300 && Number.isFinite(d)) { const I = inv(A); return ret(map(I, (v) => v * d)); } return ret(adjugateCofactor(A)); },
  ei: ew(eiFn),
  logint: ew(logintFn),
  sinhint: ew(shiFn),
  coshint: ew(chiFn),
  ssinint: ew((x) => cisi(x)[0] - Math.PI / 2),
  hurwitzZeta: async (a) => ret(elementwise(m(a[0]), m(a[1]), hurwitzZetaFn)),
  polylog: async (a) => { const nn = asScalar(a[0]); return ret(map(m(a[1]), (x) => polylogFn(nn, x))); },
  dilog: ew(dilogFn),
  wrightOmega: ew(wrightOmegaFn),
  jacobiP: async (a) => { const nn = Math.round(asScalar(a[0])); const al = asScalar(a[1]), be = asScalar(a[2]); return ret(map(m(a[3]), (x) => jacobiPFn(nn, al, be, x))); },
  gegenbauerC: async (a) => { const nn = Math.round(asScalar(a[0])); const al = asScalar(a[1]); return ret(map(m(a[2]), (x) => gegenbauerCFn(nn, al, x))); },
  bernsteinMatrix: async (a) => { const nn = Math.round(asScalar(a[0])); const T = toArray(m(a[1])); const o = zeros(T.length, nn + 1); for (let i = 0; i < T.length; i++) { const t = T[i]; for (let k = 0; k <= nn; k++) o.data[i + k * T.length] = binomN(nn, k) * Math.pow(t, k) * Math.pow(1 - t, nn - k); } return ret(o); },
  ellipticK: ew((mm) => ellipkeFn(mm)[0]),
  ellipticCK: ew((mm) => ellipkeFn(1 - mm)[0]),
  ellipticCE: ew((mm) => ellipkeFn(1 - mm)[1]),
  ellipticE: async (a) => { if (a.length >= 2) return ret(elementwise(m(a[0]), m(a[1]), (phi, mm) => simpsonInt((t) => Math.sqrt(1 - mm * Math.sin(t) ** 2), 0, phi, 2000))); return ret(map(m(a[0]), (mm) => ellipkeFn(mm)[1])); },
  ellipticF: async (a) => ret(elementwise(m(a[0]), m(a[1]), (phi, mm) => simpsonInt((t) => 1 / Math.sqrt(1 - mm * Math.sin(t) ** 2), 0, phi, 2000))),
  hypergeom: async (a) => { const as = toArray(m(a[0])); const bs = toArray(m(a[1])); return ret(map(m(a[2]), (x) => hyperPFQ(as, bs, x))); },
  jacobiSN: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => sncndn(u, 1 - mm)[0])); },
  jacobiCN: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => sncndn(u, 1 - mm)[1])); },
  jacobiDN: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => sncndn(u, 1 - mm)[2])); },
  jacobiAM: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [sn, cn] = sncndn(u, 1 - mm); return Math.atan2(sn, cn); })); },
  jacobiZeta: async (a) => { const mm = asScalar(a[1]); const [K, E] = ellipkeFn(mm); return ret(map(m(a[0]), (u) => { const [sn, cn] = sncndn(u, 1 - mm); const phi = Math.atan2(sn, cn); const Einc = simpsonInt((t) => Math.sqrt(1 - mm * Math.sin(t) ** 2), 0, phi, 2000); return Einc - E / K * u; })); },
  // the 9 remaining Jacobi elliptic functions are ratios of sn/cn/dn (Glaisher notation)
  jacobiSC: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [sn, cn] = sncndn(u, 1 - mm); return sn / cn; })); },
  jacobiSD: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [sn, , dn] = sncndn(u, 1 - mm); return sn / dn; })); },
  jacobiCD: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [, cn, dn] = sncndn(u, 1 - mm); return cn / dn; })); },
  jacobiCS: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [sn, cn] = sncndn(u, 1 - mm); return cn / sn; })); },
  jacobiDC: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [, cn, dn] = sncndn(u, 1 - mm); return dn / cn; })); },
  jacobiDS: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => { const [sn, , dn] = sncndn(u, 1 - mm); return dn / sn; })); },
  jacobiNC: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => 1 / sncndn(u, 1 - mm)[1])); },
  jacobiND: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => 1 / sncndn(u, 1 - mm)[2])); },
  jacobiNS: async (a) => { const mm = asScalar(a[1]); return ret(map(m(a[0]), (u) => 1 / sncndn(u, 1 - mm)[0])); },
  kummerU: async (a) => { const aa = asScalar(a[0]), bb = asScalar(a[1]); return ret(map(m(a[2]), (z) => kummerUFn(aa, bb, z))); },
  whittakerM: async (a) => { const k = asScalar(a[0]), mu = asScalar(a[1]); return ret(map(m(a[2]), (z) => Math.exp(-z / 2) * Math.pow(z, mu + 0.5) * hyperPFQ([mu - k + 0.5], [1 + 2 * mu], z))); },
  whittakerW: async (a) => { const k = asScalar(a[0]), mu = asScalar(a[1]); return ret(map(m(a[2]), (z) => Math.exp(-z / 2) * Math.pow(z, mu + 0.5) * kummerUFn(mu - k + 0.5, 1 + 2 * mu, z))); },
  ellipticPi: async (a) => { if (a.length >= 3) return ret(elementwise(m(a[0]), m(a[2]), (nch, mm) => ellipticPiFn(nch, asScalar(a[1]), mm))); return ret(elementwise(m(a[0]), m(a[1]), (nch, mm) => ellipticPiFn(nch, Math.PI / 2, mm))); },
  ellipticCPi: async (a) => ret(elementwise(m(a[0]), m(a[1]), (nch, mm) => ellipticPiFn(nch, Math.PI / 2, 1 - mm))),
  ellipticNome: async (a) => ret(map(m(a[0]), (mm) => { const [K] = ellipkeFn(mm); const [Kp] = ellipkeFn(1 - mm); return Math.exp(-Math.PI * Kp / K); })),
  bernoulli: async (a) => { const nn = Math.round(asScalar(a[0])); if (a.length >= 2) return ret(map(m(a[1]), (x) => bernoulliPoly(nn, x))); return ret(scalar(bernoulliNum(nn))); },
  euler: async (a) => { const nn = Math.round(asScalar(a[0])); if (a.length >= 2) return ret(map(m(a[1]), (x) => eulerPoly(nn, x))); return ret(scalar(eulerNum(nn))); },
  jacobiSymbol: async (a) => ret(elementwise(m(a[0]), m(a[1]), jacobiSym)),
  factorIntegerPower: async (a, n) => { let N = Math.round(asScalar(a[0])); let bestB = N, bestE = 1; if (N > 1) { for (let e = Math.floor(Math.log2(N)); e >= 2; e--) { const b = Math.round(Math.pow(N, 1 / e)); for (const cand of [b - 1, b, b + 1]) { if (cand >= 2 && Math.pow(cand, e) === N) { bestB = cand; bestE = e; e = 1; break; } } } } return n >= 2 ? [scalar(bestB), scalar(bestE)] : [rowVec([bestB, bestE])]; },
  isPrimitiveRoot: async (a) => { const N = Math.round(asScalar(a[1])); const phi = N <= 1 ? 0 : (() => { let n = N, r = N; for (let p = 2; p * p <= n; p++) if (n % p === 0) { while (n % p === 0) n /= p; r -= r / p; } if (n > 1) r -= r / n; return r; })(); const pf = (() => { const s = new Set<number>(); let n = phi; for (let p = 2; p * p <= n; p++) if (n % p === 0) { s.add(p); while (n % p === 0) n /= p; } if (n > 1) s.add(n); return s; })(); const powmod = (b: number, e: number, mo: number) => { b = ((b % mo) + mo) % mo; let r = 1; while (e > 0) { if (e & 1) r = (r * b) % mo; b = (b * b) % mo; e = Math.floor(e / 2); } return r; }; return ret(map(m(a[0]), (av) => { const x = Math.round(av); if (N <= 1 || gcd2(x, N) !== 1) return 0; for (const q of pf) if (powmod(x, phi / q, N) === 1) return 0; return 1; })); },
  // ═══════════════════ SPECIAL MATRICES & POLYNOMIALS ═══════════════════
  magic: async (a) => ret(magicFn(Math.round(asScalar(a[0])))),
  hilb: async (a) => { const n = Math.round(asScalar(a[0])); const o = zeros(n, n); for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) o.data[r + c * n] = 1 / (r + c + 1); return ret(o); },
  vander: async (a) => { const v = toArray(m(a[0])); const n = v.length; const o = zeros(n, n); for (let r = 0; r < n; r++) for (let j = 0; j < n; j++) o.data[r + j * n] = Math.pow(v[r], n - 1 - j); return ret(o); },
  pascal: async (a) => {
    const n = Math.round(asScalar(a[0])); const o = zeros(n, n);
    for (let i = 0; i < n; i++) { o.data[i] = 1; o.data[i * n] = 1; }
    for (let i = 1; i < n; i++) for (let j = 1; j < n; j++) o.data[i + j * n] = o.data[(i - 1) + j * n] + o.data[i + (j - 1) * n];
    return ret(o);
  },
  toeplitz: async (a) => {
    const c = toArray(m(a[0])); const r = a.length >= 2 ? toArray(m(a[1])) : c;
    const o = zeros(c.length, r.length);
    for (let i = 0; i < c.length; i++) for (let j = 0; j < r.length; j++) o.data[i + j * c.length] = i >= j ? c[i - j] : r[j - i];
    return ret(o);
  },
  // polynomials
  polyval: async (a) => {
    const P = m(a[0]), X = m(a[1]);
    if (!isComplex(P) && !isComplex(X)) { const p = toArray(P); return ret(map(X, (x) => { let s = 0; for (const cf of p) s = s * x + cf; return s; })); }
    const pr = P.data, pi = P.idata ?? new Float64Array(P.data.length), xr = X.data, xi = X.idata ?? new Float64Array(X.data.length);
    const Rr = new Float64Array(X.data.length), Ri = new Float64Array(X.data.length);
    for (let k = 0; k < X.data.length; k++) { let sr = 0, si = 0; for (let j = 0; j < pr.length; j++) { [sr, si] = cmul(sr, si, xr[k], xi[k]); sr += pr[j]; si += pi[j]; } Rr[k] = sr; Ri[k] = si; }
    return ret(finishComplex(X.rows, X.cols, Rr, Ri));
  },
  polyfit: async (a) => {
    const X = m(a[0]), Y = m(a[1]); const deg = Math.round(asScalar(a[2])); const M = X.data.length;
    const cplx = isComplex(X) || isComplex(Y); const xr = X.data, xi = X.idata ?? new Float64Array(M);
    const A = zeros(M, deg + 1); if (cplx) A.idata = new Float64Array(M * (deg + 1));
    for (let i = 0; i < M; i++) { // Vandermonde row: x[i]^(deg-j); build powers via complex multiply
      const pr: number[] = [], pim: number[] = []; let ar = 1, ai = 0;
      for (let k = 0; k <= deg; k++) { pr[k] = ar; pim[k] = ai; [ar, ai] = cmul(ar, ai, xr[i], xi[i]); }
      for (let j = 0; j <= deg; j++) { const k = deg - j; A.data[i + j * M] = pr[k]; if (cplx) A.idata![i + j * M] = pim[k]; }
    }
    const yv = cplx ? finishComplex(M, 1, Float64Array.from(Y.data), Float64Array.from(Y.idata ?? new Float64Array(M))) : colVec(toArray(Y));
    return ret(transpose(mldivide(A, yv)));
  },
  conv: async (a) => { const u = toArray(m(a[0])); const v = toArray(m(a[1])); const w = new Array(Math.max(0, u.length + v.length - 1)).fill(0); for (let i = 0; i < u.length; i++) for (let j = 0; j < v.length; j++) w[i + j] += u[i] * v[j]; return ret(rowVec(w)); },
  polyder: async (a) => { const p = toArray(m(a[0])); const n = p.length - 1; if (n <= 0) return ret(scalar(0)); const d: number[] = []; for (let i = 0; i < n; i++) d.push(p[i] * (n - i)); return ret(rowVec(d)); },
  polyint: async (a) => { const p = toArray(m(a[0])); const k = a.length >= 2 ? asScalar(a[1]) : 0; const n = p.length; const out: number[] = []; for (let i = 0; i < n; i++) out.push(p[i] / (n - i)); out.push(k); return ret(rowVec(out)); },

  // ═══════════════════════ REDUCTIONS & SHAPE ═══════════════════════
  sum: async (a) => {
    if (isSym(a[0])) return ret(symVecReduce(a[0] as Sym, (x, y) => sAdd(x, y), sN(0)));
    const A = m(a[0]); const dim = dimArg(a, 1); const omit = hasFlag(a, 'omitnan');
    if (!isComplex(A)) return ret(reduce(A, dim, 0, omit ? (s, x) => s + (Number.isNaN(x) ? 0 : x) : (s, x) => s + x));
    const re = reduce(A, dim, 0, (s, x) => s + x);
    const im = reduce({ kind: 'num', rows: A.rows, cols: A.cols, data: A.idata!, nd: A.nd }, dim, 0, (s, x) => s + x);
    return ret({ kind: 'num', rows: re.rows, cols: re.cols, data: re.data, idata: im.data, nd: re.nd });
  },
  prod: async (a) => { if (isSym(a[0])) return ret(symVecReduce(a[0] as Sym, (x, y) => sMul(x, y), sN(1))); const A = m(a[0]); const dim = dimArg(a, 1); if (!isComplex(A)) return ret(reduce(A, dim, 1, (s, x) => s * x)); return ret(creduce(A, dim, 1, 0, (ar, aii, xr, xi) => cmul(ar, aii, xr, xi))); },
  mean: async (a) => {
    const A = m(a[0]); const dim = dimArg(a, 1);
    if (!isComplex(A)) {
      if (hasFlag(a, 'omitnan')) { const s = reduce(A, dim, 0, (acc, x) => acc + (Number.isNaN(x) ? 0 : x)); const c = reduce(A, dim, 0, (acc, x) => acc + (Number.isNaN(x) ? 0 : 1)); return ret(elementwise(s, c, (sv, cv) => (cv === 0 ? NaN : sv / cv))); }
      return ret(reduce(A, dim, 0, (s, x) => s + x, (s, n) => s / n));
    }
    return ret(creduce(A, dim, 0, 0, (ar, aii, xr, xi) => [ar + xr, aii + xi], (r, i, n) => [r / n, i / n]));
  },
  cumsum: async (a) => {
    const A = m(a[0]); const dim = dimArg(a, 1);
    if (isComplex(A)) return ret(ccum(A, dim, false));
    if (A.nd || dim !== undefined) return ret(scanAlongDim(A, dim ?? firstNonSingleton(ndSize(A)), 0, (s, x) => s + x));
    const out = zeros(A.rows, A.cols);
    if (A.rows === 1 || A.cols === 1) { let s = 0; for (let i = 0; i < A.data.length; i++) { s += A.data[i]; out.data[i] = s; } }
    else for (let c = 0; c < A.cols; c++) { let s = 0; for (let r = 0; r < A.rows; r++) { s += A.data[r + c * A.rows]; out.data[r + c * A.rows] = s; } }
    return ret(out);
  },
  max: async (a, n) => minmax(a, n, (x, y) => x > y || Number.isNaN(y)),
  min: async (a, n) => minmax(a, n, (x, y) => x < y || Number.isNaN(y)),
  norm: async (a) => {
    let pp: number | 'inf' | 'fro' = 2;
    if (a.length >= 2) {
      const a1 = a[1];
      if (isStr(a1) || (isMat(a1) && (a1 as Mat).isChar)) { const sk = asString(a1).toLowerCase(); pp = sk === 'inf' ? 'inf' : 'fro'; }
      else { const v = asScalar(a1); pp = v === Infinity ? 'inf' : v; }
    }
    return ret(scalar(norm(m(a[0]), pp)));
  },

  // shape / construction
  size: async (a, n) => {
    if (a.length && isGeom(a[0])) { const g = a[0]; const c = g.conn ?? []; const dims = [c.length, c[0]?.length ?? g.dim + 1]; if (a.length >= 2) return ret(scalar(dims[Math.round(asScalar(a[1])) - 1] ?? 1)); return n >= 2 ? [scalar(dims[0]), scalar(dims[1])] : [rowVec(dims)]; }
    return sizeOf(a, n);
  },
  numel: async (a) => ret(scalar(isMap(a[0]) ? 1 : numelOf(a[0]))),
  length: async (a) => { if (isMap(a[0])) return ret(scalar((a[0] as MapV).store.size)); if (isDict(a[0])) return ret(scalar((a[0] as DictV).store.size)); const [r, c] = dimsOf(a[0]); return ret(scalar(r === 0 || c === 0 ? 0 : Math.max(r, c))); },
  ndims: async (a) => ret(scalar(isMat(a[0]) ? ndimsOf(a[0]) : 2)),
  isempty: async (a) => ret(bool(isMap(a[0]) ? (a[0] as MapV).store.size === 0 : isDict(a[0]) ? (a[0] as DictV).store.size === 0 : numelOf(a[0]) === 0)),
  isscalar: async (a) => ret(bool(numelOf(a[0]) === 1)),
  zeros: async (a) => { const d = dimsN(a); return ret(makeND(d, new Float64Array(d.reduce((p, x) => p * x, 1)))); },
  ones: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); data.fill(1); return ret(makeND(d, data)); },
  true: async (a) => { const d = dimsN(a); const M = makeND(d, new Float64Array(d.reduce((p, x) => p * x, 1)).fill(1)); M.isBool = true; return ret(M); },
  false: async (a) => { const d = dimsN(a); const M = makeND(d, new Float64Array(d.reduce((p, x) => p * x, 1))); M.isBool = true; return ret(M); },
  eye: async (a) => { const [r, c] = dims2(a); return ret(eye(r, c)); },
  rand: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); for (let i = 0; i < data.length; i++) data[i] = rngNext(); return ret(makeND(d, data)); },
  linspace: async (a) => {
    const A = m(a[0]), Bm = m(a[1]); const n = a.length >= 3 ? Math.round(asScalar(a[2])) : 100;
    const lo = A.data[0], hi = Bm.data[0];
    if (isComplex(A) || isComplex(Bm)) {
      const loi = A.idata ? A.idata[0] : 0, hii = Bm.idata ? Bm.idata[0] : 0;
      if (n < 2) return ret(cscalar(hi, hii));
      const re = new Float64Array(n), im = new Float64Array(n);
      for (let i = 0; i < n; i++) { const t = i / (n - 1); re[i] = lo + (hi - lo) * t; im[i] = loi + (hii - loi) * t; }
      return ret(finishComplex(1, n, re, im));
    }
    if (n < 2) return ret(rowVec([hi]));
    const out: number[] = []; for (let i = 0; i < n; i++) out.push(lo + (hi - lo) * i / (n - 1));
    return ret(rowVec(out));
  },
  repmat: async (a) => {
    const A = m(a[0]); const mr = asScalar(a[1]); const nc = a.length >= 3 ? asScalar(a[2]) : mr;
    const out = zeros(A.rows * mr, A.cols * nc); if (A.idata) out.idata = new Float64Array(out.data.length); out.isChar = A.isChar;
    for (let br = 0; br < mr; br++) for (let bc = 0; bc < nc; bc++)
      for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const dst = (br * A.rows + r) + (bc * A.cols + c) * out.rows, src = r + c * A.rows; out.data[dst] = A.data[src]; if (A.idata) out.idata![dst] = A.idata[src]; }
    return ret(out);
  },
  reshape: async (a) => {
    const A = m(a[0]);
    // reshape(A, d1, d2, ...) or reshape(A, [d1 d2 ...]); one [] dim is inferred.
    let dims: number[];
    if (a.length === 2 && numelOf(a[1]) >= 2) dims = toArray(m(a[1])).map((x) => Math.round(x));
    else dims = a.slice(1).map((v) => (isMat(v) && numel(v) === 0 ? NaN : Math.round(asScalar(v))));
    const known = dims.filter((d) => !Number.isNaN(d)).reduce((p, x) => p * x, 1);
    dims = dims.map((d) => (Number.isNaN(d) ? numel(A) / (known || 1) : d));
    if (dims.reduce((p, x) => p * x, 1) !== numel(A)) throw new MatError('reshape: element count must not change');
    return ret(makeND(dims, Float64Array.from(A.data), { idata: A.idata ? Float64Array.from(A.idata) : null, isChar: A.isChar }));
  },
  diff: async (a) => {
    if (isSym(a[0])) { const s = a[0]; const vr = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) ? asString(a[1]) : (symVarsOf(s)[0] ?? 'x'); const order = a.length >= 3 ? Math.round(asScalar(a[2])) : (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? Math.round(asScalar(a[1])) : 1); const out = makeSym(s.rows, s.cols, s.exprs.map((e) => { let d = e; for (let k = 0; k < order; k++) d = simplifyExpr(diffExpr(d, vr)); return d; })); if (s.fnArgs) out.fnArgs = s.fnArgs; return ret(out); }
    const A = m(a[0]); const di = A.idata;
    if (A.rows === 1 || A.cols === 1) {
      const v = toArray(A); const out: number[] = []; const oi: number[] = [];
      for (let i = 1; i < v.length; i++) { out.push(v[i] - v[i - 1]); if (di) oi.push(di[i] - di[i - 1]); }
      const M = A.cols === 1 ? colVec(out) : rowVec(out); if (di) M.idata = Float64Array.from(oi); return ret(M);
    }
    const out = zeros(A.rows - 1, A.cols); if (di) out.idata = new Float64Array(out.data.length);
    for (let c = 0; c < A.cols; c++) for (let r = 1; r < A.rows; r++) { const d = (r - 1) + c * out.rows; out.data[d] = A.data[r + c * A.rows] - A.data[(r - 1) + c * A.rows]; if (di) out.idata![d] = di[r + c * A.rows] - di[(r - 1) + c * A.rows]; }
    return ret(out);
  },
  sort: async (a, n) => {
    if (isStr(a[0])) { const items = (a[0] as Str).items.slice(); const desc = a.some((x) => (isStr(x) || (isMat(x) && (x as Mat).isChar)) && asString(x).toLowerCase() === 'descend'); const idx = items.map((_, i) => i + 1); idx.sort((i, j) => items[i - 1] < items[j - 1] ? -1 : items[i - 1] > items[j - 1] ? 1 : 0); if (desc) idx.reverse(); const sorted = makeStrArr((a[0] as Str).rows, (a[0] as Str).cols, idx.map((i) => items[i - 1])); return n >= 2 ? [sorted, rowVec(idx)] : [sorted]; }
    const A = m(a[0]); let dim = 0, descend = false;
    for (let k = 1; k < a.length; k++) { const ak = a[k]; if (isMat(ak) && !(ak as Mat).isChar) dim = Math.round(asScalar(ak)); else { const s = asString(ak).toLowerCase(); if (s === 'descend') descend = true; else if (s === 'ascend') descend = false; } }
    const rows = A.rows, cols = A.cols; const vector = rows === 1 || cols === 1;
    const d = dim || (vector ? (rows === 1 ? 2 : 1) : 1);
    const cplx = isComplex(A); const ai = A.idata;
    // complex sort key: magnitude, tie-broken by phase angle (MATLAB)
    const key = cplx ? (i: number) => Math.hypot(A.data[i], ai![i]) : (i: number) => A.data[i];
    const cmp = (i: number, j: number) => { const x = key(i), y = key(j); if (Number.isNaN(x)) return Number.isNaN(y) ? 0 : 1; if (Number.isNaN(y)) return -1; let dd = x - y; if (cplx && dd === 0) dd = Math.atan2(ai![i], A.data[i]) - Math.atan2(ai![j], A.data[j]); return descend ? -dd : dd; };
    const out = zeros(rows, cols); out.isChar = A.isChar; out.isBool = A.isBool; out.itype = A.itype; if (cplx) out.idata = new Float64Array(out.data.length); const idx = zeros(rows, cols);
    const place = (dst: number, src: number) => { out.data[dst] = A.data[src]; if (cplx) out.idata![dst] = ai![src]; };
    if (d === 1) { for (let c = 0; c < cols; c++) { const ord = Array.from({ length: rows }, (_, r) => r + c * rows); ord.sort(cmp); for (let r = 0; r < rows; r++) { place(r + c * rows, ord[r]); idx.data[r + c * rows] = (ord[r] - c * rows) + 1; } } }
    else { for (let r = 0; r < rows; r++) { const ord = Array.from({ length: cols }, (_, c) => r + c * rows); ord.sort(cmp); for (let c = 0; c < cols; c++) { place(r + c * rows, ord[c]); idx.data[r + c * rows] = Math.floor(ord[c] / rows) + 1; } } }
    return n >= 2 ? [out, idx] : [out];
  },
  find: async (a, n) => {
    const A = m(a[0]); const ai = A.idata;
    const all: number[] = [];
    for (let i = 0; i < A.data.length; i++) if (A.data[i] !== 0 || (ai && ai[i] !== 0)) all.push(i); // 0-based linear; nonzero incl. complex
    const last = a.some((x) => (isStr(x) || (isMat(x) && (x as Mat).isChar)) && asString(x).toLowerCase() === 'last');
    const k = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? Math.round(asScalar(a[1])) : all.length;
    const sel = last ? all.slice(Math.max(0, all.length - k)) : all.slice(0, Math.max(0, k));
    const orient = (arr: number[]) => (A.rows === 1 ? rowVec(arr) : colVec(arr));
    if (n >= 2) {
      const rows = sel.map((i) => (i % A.rows) + 1);
      const cols = sel.map((i) => Math.floor(i / A.rows) + 1);
      if (n >= 3) return [orient(rows), orient(cols), orient(sel.map((i) => A.data[i]))];
      return [orient(rows), orient(cols)];
    }
    return [orient(sel.map((i) => i + 1))];
  },
  isequal: async (a) => {
    const eq = (x: Value, y: Value): boolean => {
      if (!isMat(x) || !isMat(y)) return x === y;
      if (x.rows !== y.rows || x.cols !== y.cols) return false;
      for (let i = 0; i < x.data.length; i++) if (x.data[i] !== y.data[i]) return false;
      return true;
    };
    for (let i = 1; i < a.length; i++) if (!eq(a[0], a[i])) return ret(bool(false));
    return ret(bool(true));
  },
  unique: async (a, n) => {
    const flags = a.slice(1).filter((x) => isStr(x) || (isMat(x) && (x as Mat).isChar)).map((x) => asString(x).toLowerCase());
    const stable = flags.includes('stable'), last = flags.includes('last'), rowsMode = flags.includes('rows');
    if (isStr(a[0]) && !rowsMode) { const items = (a[0] as Str).items; const order: string[] = []; const firstIdx = new Map<string, number>(); items.forEach((v, i) => { if (!firstIdx.has(v)) { firstIdx.set(v, i); order.push(v); } else if (last) firstIdx.set(v, i); }); const uniq = stable ? order.slice() : order.slice().sort(); const col = (a[0] as Str).cols === 1 && (a[0] as Str).rows !== 1; const out = makeStrArr(col ? uniq.length : 1, col ? 1 : uniq.length, uniq); const pos = new Map(uniq.map((v, i) => [v, i])); const ia = uniq.map((v) => firstIdx.get(v)! + 1); const ic = items.map((v) => pos.get(v)! + 1); return n >= 3 ? [out, colVec(ia), colVec(ic)] : n >= 2 ? [out, colVec(ia)] : [out]; }
    const A = m(a[0]);
    if (rowsMode) {
      const order: number[] = []; const firstIdx = new Map<string, number>(); const keyOf = (r: number) => Array.from({ length: A.cols }, (_, c) => A.data[r + c * A.rows]).join(',');
      for (let r = 0; r < A.rows; r++) { const k = keyOf(r); if (!firstIdx.has(k)) { firstIdx.set(k, r); order.push(r); } else if (last) firstIdx.set(k, r); }
      let rowsOut = order.slice(); if (!stable) rowsOut.sort((x, y) => { for (let c = 0; c < A.cols; c++) { const d = A.data[x + c * A.rows] - A.data[y + c * A.rows]; if (d) return d; } return 0; });
      const out = zeros(rowsOut.length, A.cols); rowsOut.forEach((r, i) => { for (let c = 0; c < A.cols; c++) out.data[i + c * rowsOut.length] = A.data[r + c * A.rows]; });
      const ia = rowsOut.map((r) => firstIdx.get(keyOf(r))! + 1);
      return n >= 2 ? [out, colVec(ia)] : [out];
    }
    const arr = toArray(A); const order: number[] = []; const firstIdx = new Map<number, number>();
    arr.forEach((v, i) => { if (!firstIdx.has(v)) { firstIdx.set(v, i); order.push(v); } else if (last) firstIdx.set(v, i); });
    const uniq = stable ? order.slice() : order.slice().sort((x, y) => x - y);
    const pos = new Map(uniq.map((v, i) => [v, i]));
    const ia = uniq.map((v) => firstIdx.get(v)! + 1); const ic = arr.map((v) => pos.get(v)! + 1);
    const colOut = A.rows !== 1; const wrap = (xs: number[]) => { const w = colOut ? colVec(xs) : rowVec(xs); w.isChar = A.isChar; w.itype = A.itype; return w; };
    return n >= 3 ? [wrap(uniq), colVec(ia), colVec(ic)] : n >= 2 ? [wrap(uniq), colVec(ia)] : [wrap(uniq)];
  },
  ismember: async (a, n) => {
    const A = m(a[0]); const bArr = toArray(m(a[1]));
    const tf = zeros(A.rows, A.cols); const loc = zeros(A.rows, A.cols);
    for (let i = 0; i < A.data.length; i++) { const j = bArr.lastIndexOf(A.data[i]); if (j >= 0) { tf.data[i] = 1; loc.data[i] = j + 1; } }
    tf.isBool = true;
    return n >= 2 ? [tf, loc] : [tf];
  },
  fliplr: async (a) => {
    const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.idata) o.idata = new Float64Array(o.data.length);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const dst = r + (A.cols - 1 - c) * A.rows, src = r + c * A.rows; o.data[dst] = A.data[src]; if (A.idata) o.idata![dst] = A.idata[src]; }
    o.isChar = A.isChar; return ret(o);
  },
  flipud: async (a) => {
    const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.idata) o.idata = new Float64Array(o.data.length);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const dst = (A.rows - 1 - r) + c * A.rows, src = r + c * A.rows; o.data[dst] = A.data[src]; if (A.idata) o.idata![dst] = A.idata[src]; }
    o.isChar = A.isChar; return ret(o);
  },
  flip: async (a) => {
    const A = m(a[0]); const dim = a.length >= 2 ? Math.round(asScalar(a[1])) : (A.rows > 1 ? 1 : 2);
    const o = zeros(A.rows, A.cols); if (A.idata) o.idata = new Float64Array(o.data.length);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) {
      const rr = dim === 1 ? A.rows - 1 - r : r; const cc = dim === 2 ? A.cols - 1 - c : c;
      o.data[rr + cc * A.rows] = A.data[r + c * A.rows]; if (A.idata) o.idata![rr + cc * A.rows] = A.idata[r + c * A.rows];
    }
    o.isChar = A.isChar; return ret(o);
  },
  cat: async (a) => {
    const dim = Math.round(asScalar(a[0])); const parts = a.slice(1).map((v) => m(v));
    if (dim <= 2 && !parts.some((p) => p.nd)) return ret(dim === 1 ? vertcat(parts) : horzcat(parts));
    return ret(catND(dim, parts));
  },
  isvector: async (a) => { const [r, c] = dimsOf(a[0]); return ret(bool(r === 1 || c === 1)); },
  isrow: async (a) => ret(bool(dimsOf(a[0])[0] === 1)),
  iscolumn: async (a) => ret(bool(dimsOf(a[0])[1] === 1)),
  ismatrix: async () => ret(bool(true)),

  // ═══════════════════════════ LINEAR ALGEBRA ═══════════════════════════
  det: async (a) => { if (isSym(a[0])) return ret(makeSym(1, 1, [simplifyExpr(symDet(a[0].exprs, a[0].rows))])); const A = m(a[0]); if (isComplex(A)) { const [re, im] = cDet(A); return ret(cscalar(re, im)); } return ret(scalar(det(A))); },
  inv: async (a) => { if (isSym(a[0])) return ret(symInv(a[0])); return ret(inv(m(a[0]))); },
  charpoly: async (a) => { if (isSym(a[0])) { const c = symCharpolyCoeffs(a[0].exprs, a[0].rows); return ret(makeSym(1, c.length, c)); } const A = m(a[0]); return ret(rowVec(charpolyC(A))); },
  minpoly: async (a) => {
    // Minimal polynomial = monic product over DISTINCT eigenvalues (exact for diagonalizable A).
    const A = m(a[0]); const { D } = generalEig(A, false);
    const uniq: [number, number][] = [];
    for (let i = 0; i < D.re.length; i++) { if (!uniq.some(([r, im]) => Math.hypot(r - D.re[i], im - D.im[i]) < 1e-6)) uniq.push([D.re[i], D.im[i]]); }
    let cr = [1], ci = [0];                       // poly coeffs (high→low) in complex
    for (const [r, im] of uniq) { const nr = [0], ni = [0]; for (let k = 0; k < cr.length; k++) { nr[k] = (nr[k] ?? 0) + cr[k]; ni[k] = (ni[k] ?? 0) + ci[k]; nr[k + 1] = (nr[k + 1] ?? 0) - (cr[k] * r - ci[k] * im); ni[k + 1] = (ni[k + 1] ?? 0) - (cr[k] * im + ci[k] * r); } cr = nr; ci = ni; }
    return ret(makeSym(1, cr.length, cr.map((x) => sN(Math.abs(x - Math.round(x)) < 1e-9 ? Math.round(x) : x))));
  },
  jordan: async (a, n) => {
    const A = m(a[0]); const N = A.rows;
    // Cluster eigenvalues into distinct values with algebraic multiplicity. A repeated
    // real root splits into a near-conjugate cluster (spread ~eps^(1/m)), so snap each
    // eigenvalue to a nearby integer / merge near-equal values before clustering.
    const { D } = generalEig(A, false); const scale = norm(A, 'inf') || 1; const snapTol = 1e-4 * scale;
    const snap = (x: number) => { const r = Math.round(x); return Math.abs(x - r) < snapTol ? r : x; };
    const clusters: { re: number; im: number; mult: number }[] = [];
    for (let i = 0; i < N; i++) { const re = snap(D.re[i]); const im = Math.abs(D.im[i]) < snapTol ? 0 : snap(D.im[i]); const c = clusters.find((cc) => Math.abs(cc.re - re) < snapTol && Math.abs(cc.im - im) < snapTol); if (c) c.mult++; else clusters.push({ re, im, mult: 1 }); }
    // Block sizes per eigenvalue from the null-space dimensions of (A−λI)^k.
    const eye2 = (k: number) => { const I = zeros(k, k); for (let i = 0; i < k; i++) I.data[i + i * k] = 1; return I; };
    const diag: { re: number; im: number; one: boolean }[] = [];   // diagonal entries + super-diagonal 1 flags
    for (const cl of clusters) {
      if (Math.abs(cl.im) > 1e-9) { for (let j = 0; j < cl.mult; j++) diag.push({ re: cl.re, im: cl.im, one: false }); continue; }
      const Am = zeros(N, N); for (let i = 0; i < N * N; i++) Am.data[i] = A.data[i]; for (let i = 0; i < N; i++) Am.data[i + i * N] -= cl.re;
      const tol = 1e-9 * N * (norm(A, 'inf') || 1);
      const d: number[] = [0]; let P = eye2(N);   // P = (A−λI)^k, k from 1
      for (let k = 1; k <= cl.mult; k++) { P = matmul(P, Am); d[k] = N - rankOf(P, tol); if (d[k] === d[k - 1]) break; }
      const kmax = d.length - 1; d[kmax + 1] = d[kmax];
      const blocks: number[] = [];
      for (let s = 1; s <= kmax; s++) { const cnt = Math.round(2 * d[s] - d[s - 1] - (d[s + 1] ?? d[kmax])); for (let b = 0; b < cnt; b++) blocks.push(s); }
      blocks.sort((x, y) => y - x);                 // larger blocks first (MATLAB convention)
      for (const s of blocks) for (let p = 0; p < s; p++) diag.push({ re: cl.re, im: 0, one: p < s - 1 });
    }
    const J = makeSym(N, N, Array.from({ length: N * N }, () => sN(0)));
    for (let i = 0; i < N; i++) { const e = diag[i] ?? { re: 0, im: 0, one: false }; J.exprs[i + i * N] = Math.abs(e.im) < 1e-9 ? sN(e.re) : sFn('complex', sN(e.re), sN(e.im)); if (e.one && i + 1 < N) J.exprs[i + (i + 1) * N] = sN(1); }
    if (n >= 2) { const { V } = generalEig(A, true); return [makeSym(N, N, Array.from(V!.data, (x) => sN(x))), J]; }
    return ret(J);
  },
  colspace: async (a) => {
    const A = isSym(a[0]) ? mat((a[0] as Sym).rows, (a[0] as Sym).cols, Float64Array.from((a[0] as Sym).exprs, (e) => symEval(e, new Map()))) : m(a[0]);
    const R = rrefFn(A); const piv: number[] = []; let pr = 0;
    for (let i = 0; i < R.rows && pr < R.cols; i++) { let c = -1; for (let j = pr; j < R.cols; j++) if (Math.abs(R.data[i + j * R.rows]) > 1e-9) { c = j; break; } if (c >= 0) { piv.push(c); pr = c + 1; } }
    const out = zeros(A.rows, piv.length); piv.forEach((c, k) => { for (let r = 0; r < A.rows; r++) out.data[r + k * A.rows] = A.data[r + c * A.rows]; });
    return ret(makeSym(out.rows, out.cols, Array.from(out.data, (x) => sN(x))));
  },
  hermiteForm: async (a, n) => { const A = isSym(a[0]) ? mat((a[0] as Sym).rows, (a[0] as Sym).cols, Float64Array.from((a[0] as Sym).exprs, (e) => symEval(e, new Map()))) : m(a[0]); const { H, U } = hermiteFormInt(A); const sm = (M: Mat) => makeSym(M.rows, M.cols, Array.from(M.data, (x) => sN(x))); return n >= 2 ? [sm(H), sm(U)] : [sm(H)]; },
  smithForm: async (a, n) => { const A = isSym(a[0]) ? mat((a[0] as Sym).rows, (a[0] as Sym).cols, Float64Array.from((a[0] as Sym).exprs, (e) => symEval(e, new Map()))) : m(a[0]); const { U, S, V } = smithFormInt(A); const sm = (M: Mat) => makeSym(M.rows, M.cols, Array.from(M.data, (x) => sN(x))); return n >= 3 ? [sm(U), sm(V), sm(S)] : [sm(S)]; },
  resultant: async (a) => {
    const p = symArg(a[0]), q = symArg(a[1]);
    const v = a.length >= 3 ? (isSym(a[2]) ? symVarsOf(a[2])[0] : asString(a[2])) : (symVarsOf(p)[0] ?? symVarsOf(q)[0] ?? 'x');
    const pc = polyCoeffs(p.exprs[0], v).slice().reverse(), qc = polyCoeffs(q.exprs[0], v).slice().reverse();   // high→low
    const dp = pc.length - 1, dq = qc.length - 1; const sz = dp + dq; if (sz <= 0) return ret(scalar(1));
    const S = zeros(sz, sz);
    for (let r = 0; r < dq; r++) for (let i = 0; i < pc.length; i++) S.data[r + (r + i) * sz] = pc[i];
    for (let r = 0; r < dp; r++) for (let i = 0; i < qc.length; i++) S.data[(dq + r) + (r + i) * sz] = qc[i];
    return ret(scalar(det(S)));
  },
  // number theory
  nextprime: async (a) => ret(map(m(a[0]), (x) => { let n = Math.floor(x) + 1; while (!isPrimeN(n)) n++; return n; })),
  prevprime: async (a) => ret(map(m(a[0]), (x) => { let n = Math.ceil(x) - 1; while (n > 1 && !isPrimeN(n)) n--; return n >= 2 ? n : NaN; })),
  nthprime: async (a) => ret(map(m(a[0]), (x) => { let cnt = 0, n = 1; while (cnt < Math.round(x)) { n++; if (isPrimeN(n)) cnt++; } return n; })),
  fibonacci: async (a) => ret(map(m(a[0]), (x) => { const k = Math.round(x); let p = 0, q = 1; for (let i = 0; i < k; i++) { [p, q] = [q, p + q]; } return p; })),
  eulerPhi: async (a) => ret(map(m(a[0]), (x) => { let n = Math.round(x), r = n; for (let p = 2; p * p <= n; p++) if (n % p === 0) { while (n % p === 0) n /= p; r -= r / p; } if (n > 1) r -= r / n; return r; })),
  powermod: async (a) => { const base = asScalar(a[0]); let e = asScalar(a[1]); const mod = asScalar(a[2]); let b = ((base % mod) + mod) % mod, r = 1; while (e > 0) { if (e & 1) r = (r * b) % mod; b = (b * b) % mod; e = Math.floor(e / 2); } return ret(scalar(r)); },
  harmonic: async (a) => ret(map(m(a[0]), (x) => { let s = 0; for (let k = 1; k <= Math.round(x); k++) s += 1 / k; return s; })),
  heaviside: async (a) => { if (isSym(a[0])) return ret(makeSym(a[0].rows, a[0].cols, a[0].exprs.map((e) => simplifyExpr(sFn('heaviside', e))))); return ret(map(m(a[0]), (x) => (x > 0 ? 1 : x < 0 ? 0 : 0.5))); },
  dirac: async (a) => { if (isSym(a[0])) return ret(makeSym(a[0].rows, a[0].cols, a[0].exprs.map((e) => simplifyExpr(sFn('dirac', e))))); return ret(map(m(a[0]), (x) => (x === 0 ? Infinity : 0))); },
  mldivide: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  diag: async (a) => ret(diag(m(a[0]))),
  trace: async (a) => { const A = m(a[0]); let sr = 0, si = 0; const n = Math.min(A.rows, A.cols); for (let i = 0; i < n; i++) { sr += A.data[i + i * A.rows]; if (A.idata) si += A.idata[i + i * A.rows]; } return ret(A.idata ? cscalar(sr, si) : scalar(sr)); },
  transpose: async (a) => ret(transpose(m(a[0]))),
  dot: async (a) => {
    const X = m(a[0]), Y = m(a[1]);
    if (isComplex(X) || isComplex(Y)) { const xr = toArray(X), xi = X.idata ? Array.from(X.idata) : xr.map(() => 0), yr = toArray(Y), yi = Y.idata ? Array.from(Y.idata) : yr.map(() => 0); let sr = 0, si = 0; for (let i = 0; i < xr.length; i++) { sr += xr[i] * yr[i] + xi[i] * yi[i]; si += xr[i] * yi[i] - xi[i] * yr[i]; } return ret(cscalar(sr, si)); }   // conj(x)·y
    const x = toArray(X), y = toArray(Y); let s = 0; for (let i = 0; i < x.length; i++) s += x[i] * y[i]; return ret(scalar(s));
  },
  cross: async (a) => {
    const A = m(a[0]), Bv = m(a[1]); const x = toArray(A), y = toArray(Bv);
    if (x.length !== 3 || y.length !== 3) throw new MatError('cross: inputs must be 3-element vectors');
    if (isComplex(A) || isComplex(Bv)) {
      const xr = A.data, xi = A.idata ?? new Float64Array(3), yr = Bv.data, yi = Bv.idata ?? new Float64Array(3);
      const sub = (p: [number, number], q: [number, number]): [number, number] => [p[0] - q[0], p[1] - q[1]];
      const c0 = sub(cmul(xr[1], xi[1], yr[2], yi[2]), cmul(xr[2], xi[2], yr[1], yi[1]));
      const c1 = sub(cmul(xr[2], xi[2], yr[0], yi[0]), cmul(xr[0], xi[0], yr[2], yi[2]));
      const c2 = sub(cmul(xr[0], xi[0], yr[1], yi[1]), cmul(xr[1], xi[1], yr[0], yi[0]));
      return ret(finishComplex(A.cols === 1 ? 3 : 1, A.cols === 1 ? 1 : 3, Float64Array.of(c0[0], c1[0], c2[0]), Float64Array.of(c0[1], c1[1], c2[1])));
    }
    const out = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]];
    return ret(A.cols === 1 ? colVec(out) : rowVec(out));
  },
  kron: async (a) => {
    const A = m(a[0]), B = m(a[1]); const o = zeros(A.rows * B.rows, A.cols * B.cols); const cplx = isComplex(A) || isComplex(B); if (cplx) o.idata = new Float64Array(o.data.length);
    const ai = A.idata, bi = B.idata;
    for (let ar = 0; ar < A.rows; ar++) for (let ac = 0; ac < A.cols; ac++) { const avr = A.data[ar + ac * A.rows], avi = ai ? ai[ar + ac * A.rows] : 0; for (let br = 0; br < B.rows; br++) for (let bc = 0; bc < B.cols; bc++) { const bvr = B.data[br + bc * B.rows], bvi = bi ? bi[br + bc * B.rows] : 0; const dst = (ar * B.rows + br) + (ac * B.cols + bc) * o.rows; o.data[dst] = avr * bvr - avi * bvi; if (cplx) o.idata![dst] = avr * bvi + avi * bvr; } }
    return ret(o);
  },
  tril: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; const o = zeros(A.rows, A.cols); if (A.idata) o.idata = new Float64Array(o.data.length); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (c - r <= k) { o.data[r + c * A.rows] = A.data[r + c * A.rows]; if (A.idata) o.idata![r + c * A.rows] = A.idata[r + c * A.rows]; } o.isChar = A.isChar; return ret(o); },
  triu: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; const o = zeros(A.rows, A.cols); if (A.idata) o.idata = new Float64Array(o.data.length); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (c - r >= k) { o.data[r + c * A.rows] = A.data[r + c * A.rows]; if (A.idata) o.idata![r + c * A.rows] = A.idata[r + c * A.rows]; } o.isChar = A.isChar; return ret(o); },
  linsolve: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  mrdivide: async (a) => ret(transpose(mldivide(transpose(m(a[1])), transpose(m(a[0]))))),
  pinv: async (a) => ret(pinvFn(m(a[0]))),
  rank: async (a) => ret(scalar(rankOf(m(a[0]), a.length >= 2 ? asScalar(a[1]) : undefined))),
  rref: async (a) => ret(rrefFn(m(a[0]))),
  cond: async (a) => ret(scalar(condFn(m(a[0])))),
  rcond: async (a) => { const c = condFn(m(a[0])); return ret(scalar(c === Infinity ? 0 : 1 / c)); },
  orth: async (a) => ret(orthFn(m(a[0]))),
  null: async (a) => ret(nullspace(m(a[0]))),
  vecnorm: async (a) => {
    const p = a.length >= 2 ? asScalar(a[1]) : 2; const dim = a.length >= 3 ? Math.round(asScalar(a[2])) : 1;
    return ret(vecnormFn(m(a[0]), p === Infinity ? 'inf' : p, dim));
  },
  chol: async (a) => ret(cholFn(m(a[0]))),
  qr: async (a, n) => { const { Q, R } = qrDecomp(m(a[0])); return n >= 2 ? [Q, R] : [R]; },
  lu: async (a, n) => {
    const { L, U, P } = luOutputs(m(a[0]));
    if (n >= 3) return [L, U, P];
    return [matmul(transpose(P), L), U]; // [L,U] with A = L*U (psychologically-lower L)
  },
  svd: async (a, n) => {
    const A = m(a[0]);
    if (isComplex(A)) { const { U, s, V } = svdCplx(A); const k = s.length; if (n >= 3) { const S = zeros(k, k); for (let i = 0; i < k; i++) S.data[i + i * k] = s[i]; return [U, S, V]; } return [colVec(s)]; }
    const { U, s, V } = svdReal(A);
    if (n >= 3) { const S = zeros(A.rows, A.cols); for (let i = 0; i < Math.min(A.rows, A.cols); i++) S.data[i + i * A.rows] = s[i] ?? 0; return [U, S, V]; }
    return [colVec(s)];
  },
  eig: async (a, n) => {
    let A = m(a[0]);
    // Generalized problem eig(A,B): eigenvalues of B⁻¹A (B given as a non-char matrix).
    if (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar && numel(a[1]) > 1) A = mldivide(m(a[1]), A);
    // Symmetric real → Jacobi (accurate, ascending). Otherwise charpoly + Durand-Kerner.
    if (isSymmetric(A) && !isComplex(A)) {
      const { values, V } = jacobiEigSym(A);
      const order = values.map((_, i) => i).sort((i, j) => values[i] - values[j]);
      const ev = order.map((i) => values[i]);
      if (n >= 2) {
        const Vs = zeros(A.rows, A.rows); order.forEach((src, dst) => { for (let r = 0; r < A.rows; r++) Vs.data[r + dst * A.rows] = V.data[r + src * A.rows]; });
        const D = zeros(A.rows, A.rows); ev.forEach((v, i) => { D.data[i + i * A.rows] = v; });
        return [Vs, D];
      }
      return [colVec(ev)];
    }
    const N = A.rows; const { D, V } = generalEig(A, n >= 2);
    if (n >= 2) {
      const Dre = new Float64Array(N * N), Dim = new Float64Array(N * N);
      for (let i = 0; i < N; i++) { Dre[i + i * N] = D.re[i]; Dim[i + i * N] = D.im[i]; }
      return [V!, finishComplex(N, N, Dre, Dim)];
    }
    return [finishComplex(N, 1, Float64Array.from(D.re), Float64Array.from(D.im))];
  },
  // structure predicates
  issymmetric: async (a) => ret(bool(isSymmetric(m(a[0])))),
  ishermitian: async (a) => ret(bool(isSymmetric(m(a[0])))),
  isdiag: async (a) => { const A = m(a[0]); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (r !== c && A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  istriu: async (a) => { const A = m(a[0]); for (let c = 0; c < A.cols; c++) for (let r = c + 1; r < A.rows; r++) if (A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  istril: async (a) => { const A = m(a[0]); for (let r = 0; r < A.rows; r++) for (let c = r + 1; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  bandwidth: async (a, n) => {
    const A = m(a[0]); let lower = 0, upper = 0;
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0) { if (r > c) lower = Math.max(lower, r - c); else if (c > r) upper = Math.max(upper, c - r); }
    // bandwidth(A,'lower'|'upper') selects one; otherwise [lower,upper] (or just lower).
    if (a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar))) return ret(asString(a[1]).toLowerCase() === 'upper' ? scalar(upper) : scalar(lower));
    return n >= 2 ? [scalar(lower), scalar(upper)] : [scalar(lower)];
  },
  isbanded: async (a) => {
    const A = m(a[0]); const lo = Math.round(asScalar(a[1])); const up = Math.round(asScalar(a[2]));
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0 && (r - c > lo || c - r > up)) return ret(bool(false));
    return ret(bool(true));
  },
  // ── more decompositions / matrix functions ──
  expm: async (a) => ret(expmFn(m(a[0]))),
  logm: async (a) => ret(logmFn(m(a[0]))),
  sqrtm: async (a) => ret(sqrtmFn(m(a[0]))),
  hess: async (a, n) => { const { P, H } = hessFn(m(a[0])); return n >= 2 ? [P, H] : [H]; },
  schur: async (a, n) => {
    const A = m(a[0]);
    const wantComplex = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar && asString(a[1]).toLowerCase().startsWith('c');
    if (!wantComplex && isSymmetric(A) && !isComplex(A)) { const { values, V } = jacobiEigSym(A); const D = zeros(A.rows, A.rows); values.forEach((v, i) => { D.data[i + i * A.rows] = v; }); return n >= 2 ? [V, D] : [D]; }
    let { U, T } = schurFn(A);
    if (wantComplex) { const r = rsf2csfFn(U, T); U = r.U; T = r.T; }
    return n >= 2 ? [U, T] : [T];
  },
  rsf2csf: async (a, n) => { const { U, T } = rsf2csfFn(m(a[0]), m(a[1])); return n >= 2 ? [U, T] : [T]; },
  balance: async (a, n) => {
    const { D, B } = balanceFn(m(a[0])); const nn = D.length; const Tm = zeros(nn, nn); for (let i = 0; i < nn; i++) Tm.data[i + i * nn] = D[i];
    return n >= 2 ? [Tm, B] : [B];
  },
  qz: async (a, n) => { const { AA, BB, Q, Z } = qzFn(m(a[0]), m(a[1])); return n >= 4 ? [AA, BB, Q, Z] : n >= 2 ? [AA, BB] : [AA]; },
  // rank-1 / column QR updates (recompute factorization of the modified matrix)
  qrupdate: async (a, n) => { const Q = m(a[0]), R = m(a[1]), u = m(a[2]), v = m(a[3]); const A1 = ewAdd(matmul(Q, R), matmul(u, transpose(v))); const r = qrDecomp(A1); return n >= 2 ? [r.Q, r.R] : [r.R]; },
  qrinsert: async (a, n) => { const A = matmul(m(a[0]), m(a[1])); const j = Math.round(asScalar(a[2])) - 1; const x = m(a[3]); const orient = a.length >= 5 && asString(a[4]).startsWith('r') ? 'row' : 'col'; const r = qrDecomp(insertVec(A, j, x, orient)); return n >= 2 ? [r.Q, r.R] : [r.R]; },
  qrdelete: async (a, n) => { const A = matmul(m(a[0]), m(a[1])); const j = Math.round(asScalar(a[2])) - 1; const orient = a.length >= 4 && asString(a[3]).startsWith('r') ? 'row' : 'col'; const r = qrDecomp(deleteVec(A, j, orient)); return n >= 2 ? [r.Q, r.R] : [r.R]; },
  cdf2rdf: async (a, n) => { const { V, D } = cdf2rdfFn(m(a[0]), m(a[1])); return n >= 2 ? [V, D] : [D]; },
  pageeig: async (a) => {
    const A = m(a[0]); const dims = ndSize(A); const d0 = dims[0], psz = d0 * d0; const np = A.data.length / psz; const rest = dims.slice(2);
    const re = new Float64Array(d0 * np); const im = new Float64Array(d0 * np); let anyC = false;
    for (let p = 0; p < np; p++) { const { D } = generalEig(mat(d0, d0, A.data.slice(p * psz, p * psz + psz)), false); for (let i = 0; i < d0; i++) { re[p * d0 + i] = D.re[i]; im[p * d0 + i] = D.im[i]; if (D.im[i] !== 0) anyC = true; } }
    const ndims = [d0, 1, ...rest];
    return ret(rest.length ? makeND(ndims, re, { idata: anyC ? im : null }) : (anyC ? { kind: 'num', rows: d0, cols: np, data: re, idata: im } : mat(d0, np, re)));
  },
  ordqz: async (a, n) => {
    const AA0 = m(a[0]), BB0 = m(a[1]), Q0 = m(a[2]), Z0 = m(a[3]); const N = AA0.rows;
    const lam = (i: number): number => { const aii = AA0.data[i + i * N], bii = BB0.data[i + i * N]; return bii !== 0 ? aii / bii : (aii >= 0 ? Infinity : -Infinity); };
    const selArg = a[4]; let sel: boolean[];
    if (selArg && (isStr(selArg) || (isMat(selArg) && (selArg as Mat).isChar))) {
      const kw = asString(selArg).toLowerCase();
      sel = Array.from({ length: N }, (_, i) => { const l = lam(i); return kw === 'lhp' ? l < 0 : kw === 'rhp' ? l > 0 : kw === 'udi' ? Math.abs(l) < 1 : kw === 'udo' ? Math.abs(l) > 1 : false; });
    } else if (selArg && isMat(selArg)) { const sv = toArray(selArg as Mat); sel = Array.from({ length: N }, (_, i) => !!sv[i]); }
    else sel = new Array(N).fill(false);
    const { AA, BB, Q, Z } = ordqzFn(AA0, BB0, Q0, Z0, sel);
    return n >= 4 ? [AA, BB, Q, Z] : n >= 2 ? [AA, BB] : [AA];
  },
  gsvd: async (a) => { const A = m(a[0]), B = m(a[1]); const ata = matmul(transpose(A), A), btb = matmul(transpose(B), B); const { values } = jacobiEigSym(mldivide(btb, ata)); return ret(colVec(values.map((v) => Math.sqrt(Math.max(0, v))).sort((x, y) => x - y))); },
  svdsketch: async (a, n) => { const A = m(a[0]); const { U, s, V } = svdReal(A); const tol = a.length >= 2 ? asScalar(a[1]) : 1e-3; const smax = s[0] ?? 0; const k = Math.max(1, s.filter((x) => x > tol * smax).length); const Uk = subcols(U, k), Vk = subcols(V, k); const S = zeros(k, k); for (let i = 0; i < k; i++) S.data[i + i * k] = s[i]; return n >= 3 ? [Uk, S, Vk] : [colVec(s.slice(0, k))]; },
  padecoef: async (a, n) => { const T = asScalar(a[0]); const N = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const c: number[] = []; for (let k = 0; k <= N; k++) c.push(factorialN(2 * N - k) * factorialN(N) / (factorialN(2 * N) * factorialN(k) * factorialN(N - k))); const num: number[] = [], den: number[] = []; for (let k = 0; k <= N; k++) { num[N - k] = c[k] * Math.pow(-T, k); den[N - k] = c[k] * Math.pow(T, k); } return n >= 2 ? [rowVec(num), rowVec(den)] : [rowVec(num)]; },
  ss2tf: async (a, n) => { const A = m(a[0]), B = m(a[1]), C = m(a[2]), D = m(a[3]); const iu = (a.length >= 5 ? Math.round(asScalar(a[4])) : 1) - 1; const den = A.rows ? charpolyC(A) : [1]; const bcol = colOf(B, iu); const ny = C.rows; const num = zeros(ny, den.length); for (let i = 0; i < ny; i++) { const crow = Array.from({ length: C.cols }, (_, c) => C.data[i + c * C.rows]); const Acl = ewSub(A, matmul(bcol, rowVec(crow))); const pc = A.rows ? charpolyC(Acl) : [1]; const di = D.data[i + iu * D.rows] ?? 0; for (let k = 0; k < den.length; k++) num.data[i + k * ny] = pc[k] + (di - 1) * den[k]; } return n >= 2 ? [num, rowVec(den)] : [num]; },
  tensorprod: async (a) => ret(tensorProd(m(a[0]), m(a[1]), a.slice(2))),
  nufft: async (a) => { const x = m(a[0]); const t = a.length >= 2 && isMat(a[1]) ? toArray(m(a[1])) : toArray(x).map((_, i) => i); const N = numel(x); const f = a.length >= 3 && isMat(a[2]) ? toArray(m(a[2])) : Array.from({ length: N }, (_, i) => i); return ret(nudft(toArray(x), x.idata ? Array.from(x.idata) : toArray(x).map(() => 0), t, f)); },
  nufftn: async (a) => { const x = m(a[0]); const t = a.length >= 2 && isMat(a[1]) ? toArray(m(a[1])) : toArray(x).map((_, i) => i); const N = numel(x); const f = a.length >= 3 && isMat(a[2]) ? toArray(m(a[2])) : Array.from({ length: N }, (_, i) => i); return ret(nudft(toArray(x), x.idata ? Array.from(x.idata) : toArray(x).map(() => 0), t, f)); },
  ordschur: async (a, n) => {
    const U = m(a[0]), T = m(a[1]); const sel = toArray(m(a[2])).map((x) => x !== 0);
    const { U: U2, T: T2 } = ordschurFn(U, T, sel); return n >= 2 ? [U2, T2] : [U2];
  },
  ldl: async (a, n) => { const { L, D } = ldlFn(m(a[0])); return n >= 2 ? [L, D] : [L]; },
  lsqnonneg: async (a) => ret(lsqnonnegFn(m(a[0]), m(a[1]))),
  'containers.Map': async (a) => ret(buildMap(a)),
  keys: async (a) => { const mp = a[0] as MapV | DictV; if (!isMap(mp) && !isDict(mp)) throw new MatError('keys: expected a containers.Map or dictionary'); const ks = mapKeysSorted(mp); return ret(makeCell(1, ks.length, ks.map((k) => (mp.keyKind === 'char' ? str(k as string) : scalar(k as number))))); },
  values: async (a) => { const mp = a[0] as MapV | DictV; if (!isMap(mp) && !isDict(mp)) throw new MatError('values: expected a containers.Map or dictionary'); const ks = mapKeysSorted(mp); return ret(makeCell(1, ks.length, ks.map((k) => mp.store.get(k)!))); },
  isKey: async (a) => { const mp = a[0] as MapV | DictV; if (!isMap(mp) && !isDict(mp)) throw new MatError('isKey: expected a containers.Map or dictionary'); if (isCell(a[1])) return ret({ kind: 'num', rows: 1, cols: a[1].items.length, data: Float64Array.from(a[1].items.map((it) => (mp.store.has(mapNormKey(mp, it)) ? 1 : 0))), isBool: true }); return ret(bool(mp.store.has(mapNormKey(mp, a[1])))); },
  remove: async (a) => { const mp = a[0] as MapV | DictV; if (isDict(mp)) { const nd = cloneDict(mp); const ks = isCell(a[1]) ? a[1].items : [a[1]]; for (const k of ks) nd.store.delete(mapNormKey(mp, k)); return ret(nd); } if (!isMap(mp)) throw new MatError('remove: expected a containers.Map or dictionary'); const ks = isCell(a[1]) ? a[1].items : [a[1]]; for (const k of ks) mp.store.delete(mapNormKey(mp, k)); return ret(mp); },
  dictionary: async (a) => ret(buildDict(a)),
  entries: async (a) => { const d = a[0] as DictV; if (!isDict(d)) throw new MatError('entries: expected a dictionary'); const ks = mapKeysSorted(d); const n = ks.length; const items: Value[] = new Array(n * 2); for (let i = 0; i < n; i++) { items[i] = d.keyKind === 'char' ? str(ks[i] as string) : scalar(ks[i] as number); items[i + n] = d.store.get(ks[i])!; } return ret(makeCell(n, 2, items)); },
  lookup: async (a) => { const d = a[0] as DictV; if (!isDict(d)) throw new MatError('lookup: expected a dictionary'); const k = mapNormKey(d, a[1]); if (!d.store.has(k)) throw new MatError('lookup: key not found'); return ret(d.store.get(k)!); },
  insert: async (a) => { const d = a[0] as DictV; if (!isDict(d)) throw new MatError('insert: expected a dictionary'); const nd = cloneDict(d); nd.store.set(mapNormKey(d, a[1]), a[2]); return ret(nd); },
  numEntries: async (a) => ret(scalar(isDict(a[0]) ? (a[0] as DictV).store.size : 0)),
  isConfigured: async (a) => ret(bool(isDict(a[0]) && (a[0] as DictV).valType !== 'unconfigured')),
  lyap: async (a) => { const A = m(a[0]); if (a.length >= 3) return ret(sylvesterSolve(A, m(a[1]), negMat(m(a[2])))); return ret(sylvesterSolve(A, transMat(A), negMat(m(a[1])))); },
  dlyap: async (a) => ret(dlyapSolve(m(a[0]), m(a[1]))),
  optimoptions: async (a) => { const f = new Map<string, Value[]>(); for (let i = 1; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  linprog: async (a, n) => {
    const f = toArray(m(a[0]));
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const r = linprogSolve(f, mat2(1), vec2(2), mat2(3), vec2(4), vec2(5), vec2(6));
    const x = colVec(r.x);
    return n >= 3 ? [x, scalar(r.fval), scalar(r.status)] : n >= 2 ? [x, scalar(r.fval)] : [x];
  },
  intlinprog: async (a, n) => {
    const f = toArray(m(a[0])); const intcon = (a.length > 1 && isMat(a[1]) && numel(a[1]) > 0 ? toArray(m(a[1])) : []).map((v) => Math.round(v) - 1);
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const r = intlinprogSolve(f, intcon, mat2(2), vec2(3), mat2(4), vec2(5), vec2(6), vec2(7));
    const x = colVec(r.x);
    return n >= 3 ? [x, scalar(r.fval), scalar(r.status)] : n >= 2 ? [x, scalar(r.fval)] : [x];
  },
  lsqnonlin: async (a, n, env) => {
    const f = handle(a[0], 'lsqnonlin'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1]));
    const resid = async (x: number[]) => toArray(m((await env.callHandle(f, [col ? colVec(x) : rowVec(x)], 1))[0]));
    const x = await levMar(resid, x0); const r = await resid(x); const rn = r.reduce((s, v) => s + v * v, 0);
    const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(rn)] : [xo];
  },
  lsqcurvefit: async (a, n, env) => {
    const f = handle(a[0], 'lsqcurvefit'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1])); const xdata = a[2]; const ydata = toArray(m(a[3]));
    const resid = async (x: number[]) => { const fx = toArray(m((await env.callHandle(f, [col ? colVec(x) : rowVec(x), xdata], 1))[0])); return fx.map((v, i) => v - (ydata[i] ?? 0)); };
    const x = await levMar(resid, x0); const r = await resid(x); const rn = r.reduce((s, v) => s + v * v, 0);
    const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(rn)] : [xo];
  },
  fmincon: async (a, n, env) => {
    const f = handle(a[0], 'fmincon'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1]));
    const F = async (x: number[]) => asScalar((await env.callHandle(f, [col ? colVec(x) : rowVec(x)], 1))[0]);
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const nlc = a.length > 8 && isHandle(a[8]) ? async (x: number[]): Promise<[number[], number[]]> => { const r = await env.callHandle(a[8] as Handle, [col ? colVec(x) : rowVec(x)], 2); return [r[0] && isMat(r[0]) ? toArray(m(r[0])) : [], r[1] && isMat(r[1]) ? toArray(m(r[1])) : []]; } : null;
    const x = await fminconSolve(F, x0, mat2(2), vec2(3), mat2(4), vec2(5), vec2(6), vec2(7), nlc);
    const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(await F(x))] : [xo];
  },
  fminunc: async (a, n, env) => {
    const f = handle(a[0], 'fminunc'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1]));
    const F = async (x: number[]) => asScalar((await env.callHandle(f, [col ? colVec(x) : rowVec(x)], 1))[0]);
    const x = await bfgsMin(F, x0); const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(await F(x))] : [xo];
  },
  quadprog: async (a, n) => {
    const H = matRows(m(a[0])); const f = toArray(m(a[1]));
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const x = await quadprogSolve(H, f, mat2(2), vec2(3), mat2(4), vec2(5), vec2(6), vec2(7), vec2(8));
    let fval = 0; for (let i = 0; i < f.length; i++) { fval += f[i] * x[i]; for (let j = 0; j < f.length; j++) fval += 0.5 * H[i][j] * x[i] * x[j]; }
    const xo = colVec(x); return n >= 2 ? [xo, scalar(fval)] : [xo];
  },
  lsqlin: async (a, n) => {
    const C = m(a[0]); const Cr = matRows(C); const d = toArray(m(a[1])); const nn = C.cols;
    const H: number[][] = Array.from({ length: nn }, () => new Array(nn).fill(0)); const f = new Array(nn).fill(0);
    for (let i = 0; i < C.rows; i++) for (let p = 0; p < nn; p++) { f[p] -= Cr[i][p] * d[i]; for (let q = 0; q < nn; q++) H[p][q] += Cr[i][p] * Cr[i][q]; }
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const x = await quadprogSolve(H, f, mat2(2), vec2(3), mat2(4), vec2(5), vec2(6), vec2(7), vec2(8));
    let rn = 0; for (let i = 0; i < C.rows; i++) { let r = -d[i]; for (let p = 0; p < nn; p++) r += Cr[i][p] * x[p]; rn += r * r; }
    const xo = colVec(x); return n >= 2 ? [xo, scalar(rn)] : [xo];
  },
  ga: async (a, n, env) => {
    const f = handle(a[0], 'ga'); const nv = Math.round(asScalar(a[1]));
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const Aub = mat2(2), bub = vec2(3), Aeq = mat2(4), beq = vec2(5), lb = vec2(6), ub = vec2(7);
    const base = async (x: number[]) => asScalar((await env.callHandle(f, [rowVec(x)], 1))[0]);
    const F = async (x: number[]) => (await base(x)) + optLinPen(x, Aub, bub, Aeq, beq);
    const x = await gaSolve(F, nv, lb, ub); return n >= 2 ? [rowVec(x), scalar(await base(x))] : [rowVec(x)];
  },
  particleswarm: async (a, n, env) => {
    const f = handle(a[0], 'particleswarm'); const nv = Math.round(asScalar(a[1]));
    const lb = a.length > 2 && isMat(a[2]) && numel(a[2]) > 0 ? toArray(m(a[2])) : null;
    const ub = a.length > 3 && isMat(a[3]) && numel(a[3]) > 0 ? toArray(m(a[3])) : null;
    const F = async (x: number[]) => asScalar((await env.callHandle(f, [rowVec(x)], 1))[0]);
    const x = await psoSolve(F, nv, lb, ub); return n >= 2 ? [rowVec(x), scalar(await F(x))] : [rowVec(x)];
  },
  simulannealbnd: async (a, n, env) => {
    const f = handle(a[0], 'simulannealbnd'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1]));
    const lb = a.length > 2 && isMat(a[2]) && numel(a[2]) > 0 ? toArray(m(a[2])) : null;
    const ub = a.length > 3 && isMat(a[3]) && numel(a[3]) > 0 ? toArray(m(a[3])) : null;
    const F = async (x: number[]) => asScalar((await env.callHandle(f, [col ? colVec(x) : rowVec(x)], 1))[0]);
    const x = await saSolve(F, x0, lb, ub); const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(await F(x))] : [xo];
  },
  patternsearch: async (a, n, env) => {
    const f = handle(a[0], 'patternsearch'); const col = m(a[1]).rows !== 1; const x0 = toArray(m(a[1]));
    const mat2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? matRows(m(a[i])) : null);
    const vec2 = (i: number) => (a.length > i && isMat(a[i]) && numel(a[i]) > 0 ? toArray(m(a[i])) : null);
    const Aub = mat2(2), bub = vec2(3), Aeq = mat2(4), beq = vec2(5), lb = vec2(6), ub = vec2(7);
    const base = async (x: number[]) => asScalar((await env.callHandle(f, [col ? colVec(x) : rowVec(x)], 1))[0]);
    const F = async (x: number[]) => (await base(x)) + optLinPen(x, Aub, bub, Aeq, beq);
    const x = await patternSearchSolve(F, x0, lb, ub); const xo = col ? colVec(x) : rowVec(x);
    return n >= 2 ? [xo, scalar(await base(x))] : [xo];
  },
  condest: async (a) => { const A = m(a[0]); return ret(scalar(norm(A, 1) * norm(inv(A), 1))); },
  lscov: async (a) => { const A = m(a[0]), b = m(a[1]); if (a.length >= 3) { const W = inv(m(a[2])); const At = transpose(A); return ret(mldivide(matmul(At, matmul(W, A)), matmul(At, matmul(W, b)))); } return ret(mldivide(A, b)); },
  subspace: async (a) => {
    let Qa = orthFn(m(a[0])), Qb = orthFn(m(a[1])); if (Qa.cols < Qb.cols) { const t = Qa; Qa = Qb; Qb = t; }
    const proj = matmul(Qa, matmul(transpose(Qa), Qb)); const diff = zeros(Qb.rows, Qb.cols); for (let i = 0; i < diff.data.length; i++) diff.data[i] = Qb.data[i] - proj.data[i];
    return ret(scalar(Math.asin(Math.min(1, norm(diff, 2)))));
  },
  eigs: async (a) => {
    const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : Math.min(A.rows, 6);
    let re: number[], im: number[];
    if (isSymmetric(A) && !isComplex(A)) { re = jacobiEigSym(A).values; im = re.map(() => 0); } else { const { D } = generalEig(A, false); re = D.re; im = D.im; }
    const idx = re.map((_, i) => i).sort((i, j) => Math.hypot(re[j], im[j]) - Math.hypot(re[i], im[i])).slice(0, k);
    return ret(finishComplex(idx.length, 1, Float64Array.from(idx.map((i) => re[i])), Float64Array.from(idx.map((i) => im[i]))));
  },
  svds: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : Math.min(A.rows, A.cols, 6); const { s } = svdReal(A); return ret(colVec(s.slice(0, k))); },
  // ═══════════════ SIGNAL · STATS · SETS · TYPE TESTS ═══════════════
  // ── digital filtering & signal math ──
  filter: async (a) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1])), x = m(a[2]); const xs = toArray(x); const a0 = aa[0]; const y = new Array(xs.length).fill(0);
    for (let n = 0; n < xs.length; n++) { let acc = 0; for (let k = 0; k < b.length; k++) if (n - k >= 0) acc += b[k] * xs[n - k]; for (let k = 1; k < aa.length; k++) if (n - k >= 0) acc -= aa[k] * y[n - k]; y[n] = acc / a0; }
    return ret(x.cols === 1 ? colVec(y) : rowVec(y));
  },
  conv2: async (a) => { const shape = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : 'full'; return ret(conv2Shape(m(a[0]), m(a[1]), shape)); },
  filter2: async (a) => { const shape = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : 'same'; return ret(conv2Shape(m(a[1]), rot90n(m(a[0]), 2), shape)); },
  xcorr: async (a) => { const x = toArray(m(a[0])); const y = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? toArray(m(a[1])) : x; return ret(rowVec(xcorrFn(x, y))); },
  xcov: async (a) => { const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x; const mx = x.reduce((s, v) => s + v, 0) / x.length, my = y.reduce((s, v) => s + v, 0) / y.length; return ret(rowVec(xcorrFn(x.map((v) => v - mx), y.map((v) => v - my)))); },
  detrend: async (a) => { const type = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'linear'; return ret(colMap(m(a[0]), (c) => detrendVec(c, type))); },
  fftn: async (a) => { const A = m(a[0]); return ret(A.rows === 1 || A.cols === 1 ? fftApply(A, -1) : transpose(fftApply(transpose(fftApply(A, -1)), -1))); },
  ifftn: async (a) => { const A = m(a[0]); return ret(A.rows === 1 || A.cols === 1 ? fftApply(A, 1) : transpose(fftApply(transpose(fftApply(A, 1)), 1))); },
  // ── data preprocessing & smoothing ──
  smoothdata: async (a) => { const A = m(a[0]); const win = a.find((v, i) => i > 0 && isMat(v) && !(v as Mat).isChar); const k = win ? Math.round(asScalar(win)) : Math.max(3, Math.round((A.rows === 1 || A.cols === 1 ? numel(A) : A.rows) * 0.1)); const method = a.find((v) => isMat(v) && (v as Mat).isChar); const med = !!(method && asString(method as Mat) === 'movmedian'); return ret(colMap(A, (c) => movVec(c, k, med))); },
  smoothdata2: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 3; return ret(smooth2(A, k)); },
  normalize: async (a) => { const method = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'zscore'; return ret(colMap(m(a[0]), (c) => normalizeVec(c, method))); },
  rescale: async (a) => { const A = m(a[0]); const lo = a.length >= 2 ? asScalar(a[1]) : 0, hi = a.length >= 3 ? asScalar(a[2]) : 1; const mn = Math.min(...toArray(A)), mx = Math.max(...toArray(A)); const d = mx - mn || 1; return ret(map(A, (x) => lo + (hi - lo) * (x - mn) / d)); },
  clip: async (a) => { const lo = asScalar(a[1]), hi = asScalar(a[2]); return ret(map(m(a[0]), (x) => Math.min(hi, Math.max(lo, x)))); },
  isoutlier: async (a) => { const A = m(a[0]); const r = colMap(A, (c) => outlierMask(c)); r.isBool = true; return [r]; },
  filloutliers: async (a) => { const A = m(a[0]); const fillNum = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? asScalar(a[1]) : null; return ret(colMap(A, (c) => fillOutliersVec(c, fillNum))); },
  rmoutliers: async (a) => { const c = toArray(m(a[0])); const mask = outlierMask(c); const kept = c.filter((_, i) => mask[i] === 0); return ret(m(a[0]).cols === 1 ? colVec(kept) : rowVec(kept)); },
  islocalmax: async (a) => { const A = m(a[0]); const v = toArray(A); const o = v.map((_, i) => (i > 0 && i < v.length - 1 && v[i] > v[i - 1] && v[i] > v[i + 1] ? 1 : 0)); const out = A.cols === 1 ? colVec(o) : rowVec(o); out.isBool = true; return [out]; },
  islocalmin: async (a) => { const A = m(a[0]); const v = toArray(A); const o = v.map((_, i) => (i > 0 && i < v.length - 1 && v[i] < v[i - 1] && v[i] < v[i + 1] ? 1 : 0)); const out = A.cols === 1 ? colVec(o) : rowVec(o); out.isBool = true; return [out]; },
  isapprox: async (a) => { const tol = a.length >= 3 ? asScalar(a[2]) : 1e-6; const r = elementwise(m(a[0]), m(a[1]), (x, y) => (Math.abs(x - y) <= tol + tol * Math.max(Math.abs(x), Math.abs(y)) ? 1 : 0)); return ret({ ...r, isBool: true }); },
  erfinv: async (a) => ret(map(m(a[0]), erfinvFn)),
  // ── set operations ──
  intersect: async (a) => { if (isGeom(a[0]) && isGeom(a[1])) return ret(polyResultGeom(polyClip(polyVerts(a[0]), polyVerts(a[1]), 'and'))); const A = m(a[0]); const sb = new Set(toArray(m(a[1]))); const r = setUniq(toArray(A).filter((x) => sb.has(x))); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  union: async (a) => { if (isGeom(a[0]) && isGeom(a[1])) return ret(polyResultGeom(polyClip(polyVerts(a[0]), polyVerts(a[1]), 'or'))); const A = m(a[0]); const r = setUniq([...toArray(A), ...toArray(m(a[1]))]); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  subtract: async (a) => ret(polyResultGeom(polyClip(polyVerts(gGeom(a[0])), polyVerts(gGeom(a[1])), 'minus'))),
  polybuffer: async (a) => {
    if (isGeom(a[0])) { const d = asScalar(a[1]); return ret(polyResultGeom([bufferLoop(polyVerts(a[0]), d)])); }
    const P = matRows(m(a[0])); const kind = asString(a[1]).toLowerCase(); const d = asScalar(a[2]);
    if (kind === 'points') return ret(polyResultGeom(P.map((p) => discLoop(p[0], p[1], d))));
    // 'lines': buffer a polyline into a capsule chain (round joins + end caps)
    const segs: number[][][] = [];
    for (let i = 0; i + 1 < P.length; i++) segs.push(bufferLoop([P[i], P[i + 1]], d));
    P.forEach((p) => segs.push(discLoop(p[0], p[1], d)));
    return ret(polyResultGeom(segs));
  },
  setdiff: async (a) => { const A = m(a[0]); const sb = new Set(toArray(m(a[1]))); const r = setUniq(toArray(A).filter((x) => !sb.has(x))); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  setxor: async (a) => { const A = m(a[0]), B = m(a[1]); const sa = new Set(toArray(A)), sb = new Set(toArray(B)); const r = setUniq([...toArray(A).filter((x) => !sb.has(x)), ...toArray(B).filter((x) => !sa.has(x))]); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  // ── more statistics ──
  missing: async () => ret(scalar(NaN)),
  kde: async (a, n) => {
    const x = toArray(m(a[0])).filter(Number.isFinite); const N = x.length || 1;
    const sd = Math.sqrt(variance(x)) || 1; const h = 1.06 * sd * Math.pow(N, -0.2) || 1;
    const lo = Math.min(...x) - 3 * h, hi = Math.max(...x) + 3 * h; const npts = 100; const xi: number[] = [], f: number[] = [];
    for (let i = 0; i < npts; i++) { const xx = lo + (hi - lo) * i / (npts - 1); xi.push(xx); let s = 0; for (const xj of x) s += Math.exp(-0.5 * ((xx - xj) / h) ** 2); f.push(s / (N * h * Math.sqrt(2 * Math.PI))); }
    return n >= 2 ? [colVec(f), colVec(xi)] : [colVec(f)];
  },
  histcounts2: async (a, n) => {
    const x = toArray(m(a[0])), y = toArray(m(a[1])); const nbx = Math.max(1, Math.ceil(Math.sqrt(x.length))), nby = nbx;
    const xlo = Math.min(...x), xhi = Math.max(...x), ylo = Math.min(...y), yhi = Math.max(...y);
    const xe: number[] = [], ye: number[] = []; for (let i = 0; i <= nbx; i++) xe.push(xlo + (xhi - xlo) * i / nbx); for (let j = 0; j <= nby; j++) ye.push(ylo + (yhi - ylo) * j / nby);
    const Nc = zeros(nbx, nby);
    for (let k = 0; k < x.length; k++) { if (x[k] < xe[0] || x[k] > xe[nbx] || y[k] < ye[0] || y[k] > ye[nby]) continue; let bi = nbx - 1; for (let i = 0; i < nbx; i++) if (x[k] < xe[i + 1]) { bi = i; break; } let bj = nby - 1; for (let j = 0; j < nby; j++) if (y[k] < ye[j + 1]) { bj = j; break; } Nc.data[bi + bj * nbx]++; }
    return n >= 2 ? [Nc, rowVec(xe), rowVec(ye)] : [Nc];
  },
  extract: async (a) => { const s = asString(a[0]); const pat = asString(a[1]); let re: RegExp; try { re = new RegExp(pat, 'g'); } catch { re = new RegExp(pat.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'); } const out: string[] = []; let mt: RegExpExecArray | null; while ((mt = re.exec(s)) !== null) { out.push(mt[0]); if (mt.index === re.lastIndex) re.lastIndex++; } return ret(makeStrArr(out.length, 1, out)); },
  histcounts: async (a, n) => {
    const x = toArray(m(a[0]));
    // name-value options
    const opt = (name: string): Value | undefined => { for (let i = 1; i + 1 < a.length; i++) if ((isStr(a[i]) || (isMat(a[i]) && (a[i] as Mat).isChar)) && asString(a[i]).toLowerCase() === name) return a[i + 1]; return undefined; };
    const norm = opt('normalization') ? asString(opt('normalization')!).toLowerCase() : 'count';
    const binWidth = opt('binwidth') ? asScalar(opt('binwidth')!) : undefined;
    const binLimits = opt('binlimits') ? toArray(m(opt('binlimits')!)) : undefined;
    let edges: number[];
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) > 1) edges = toArray(m(a[1]));
    else {
      const mn = binLimits ? binLimits[0] : Math.min(...x), mx = binLimits ? binLimits[1] : Math.max(...x);
      if (binWidth) { edges = []; for (let e = mn; e <= mx + binWidth / 2; e += binWidth) edges.push(e); if (edges.length < 2) edges = [mn, mn + (binWidth || 1)]; }
      else { const nb = a.length >= 2 && isMat(a[1]) && numel(a[1]) === 1 ? Math.round(asScalar(a[1])) : 10; const w = (mx - mn) / nb || 1; edges = Array.from({ length: nb + 1 }, (_, i) => mn + i * w); }
    }
    const counts = new Array(edges.length - 1).fill(0);
    for (const v of x) { for (let b = 0; b < counts.length; b++) { if (v >= edges[b] && (v < edges[b + 1] || (b === counts.length - 1 && v <= edges[b + 1]))) { counts[b]++; break; } } }
    const total = x.length || 1;
    let vals = counts as number[];
    if (norm === 'probability') vals = counts.map((c) => c / total);
    else if (norm === 'pdf') vals = counts.map((c, b) => c / (total * (edges[b + 1] - edges[b])));
    else if (norm === 'countdensity') vals = counts.map((c, b) => c / (edges[b + 1] - edges[b]));
    else if (norm === 'cumcount') { let s = 0; vals = counts.map((c) => (s += c)); }
    else if (norm === 'cdf') { let s = 0; vals = counts.map((c) => (s += c) / total); }
    return n >= 2 ? [rowVec(vals), rowVec(edges)] : [rowVec(vals)];
  },
  randperm: async (a) => { const nn = Math.round(asScalar(a[0])); const p = Array.from({ length: nn }, (_, i) => i + 1); for (let i = nn - 1; i > 0; i--) { const j = Math.floor(rngNext() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } const k = a.length >= 2 ? Math.round(asScalar(a[1])) : nn; return ret(rowVec(p.slice(0, k))); },
  mad: async (a) => { const flag = a.length >= 2 ? asScalar(a[1]) : 0; return ret(colReduce(m(a[0]), (c) => { if (flag === 1) { const s = [...c].sort((x, y) => x - y); const md = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2; const d = c.map((x) => Math.abs(x - md)).sort((x, y) => x - y); return d.length % 2 ? d[(d.length - 1) / 2] : (d[d.length / 2 - 1] + d[d.length / 2]) / 2; } const mu = c.reduce((s2, x) => s2 + x, 0) / c.length; return c.reduce((s2, x) => s2 + Math.abs(x - mu), 0) / c.length; })); },
  poly: async (a) => { const A = m(a[0]); if (A.rows > 1 && A.cols > 1) return ret(rowVec(charpolyC(A))); let c = [1]; for (const r of toArray(A)) { const nc = new Array(c.length + 1).fill(0); for (let i = 0; i < c.length; i++) { nc[i] += c[i]; nc[i + 1] -= c[i] * r; } c = nc; } return ret(rowVec(c)); },
  // ── type tests / conversions ──
  isnumeric: async (a) => ret(bool(isMat(a[0]) && !(a[0] as Mat).isChar)),
  ischar: async (a) => ret(bool(isMat(a[0]) && !!(a[0] as Mat).isChar)),
  isfloat: async (a) => ret(bool(isMat(a[0]) && !(a[0] as Mat).isChar && !(a[0] as Mat).isBool && (!(a[0] as Mat).itype || (a[0] as Mat).itype === 'single'))),
  double: async (a) => { if (isSym(a[0])) { const s = a[0]; const M = zeros(s.rows, s.cols); s.exprs.forEach((e, i) => { M.data[i] = symEval(e, new Map()); }); return ret(M); } const A = m(a[0]); return ret({ kind: 'num', rows: A.rows, cols: A.cols, data: Float64Array.from(A.data), idata: A.idata ? Float64Array.from(A.idata) : undefined }); },
  single: async (a) => ret(applyClass(m(a[0]), 'single')),
  char: async (a) => { const A = m(a[0]); if (A.isChar) return ret(A); return ret(str(toArray(A).map((x) => String.fromCharCode(Math.round(x))).join(''))); },
  int8: async (a) => ret(applyClass(m(a[0]), 'int8')), uint8: async (a) => ret(applyClass(m(a[0]), 'uint8')),
  int16: async (a) => ret(applyClass(m(a[0]), 'int16')), uint16: async (a) => ret(applyClass(m(a[0]), 'uint16')),
  int32: async (a) => ret(applyClass(m(a[0]), 'int32')), uint32: async (a) => ret(applyClass(m(a[0]), 'uint32')),
  int64: async (a) => ret(applyClass(m(a[0]), 'int64')), uint64: async (a) => ret(applyClass(m(a[0]), 'uint64')),
  cast: async (a) => { const A = m(a[0]); const ty = asString(a[1]); if (ty in INT_LIMITS || ty === 'single') return ret(applyClass(A, ty)); if (ty === 'char') return ret(A.isChar ? A : str(toArray(A).map((x) => String.fromCharCode(Math.round(x))).join(''))); return ret(mat(A.rows, A.cols, Float64Array.from(A.data))); },
  // ── special matrices / index conversion ──
  invhilb: async (a) => { const n = Math.round(asScalar(a[0])); const H = zeros(n, n); for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) H.data[r + c * n] = 1 / (r + c + 1); return ret(map(inv(H), (x) => Math.round(x))); },
  hadamard: async (a) => { let n = Math.round(asScalar(a[0])); let H = mat(1, 1, Float64Array.of(1)); while (H.rows < n) { const k = H.rows; const o = zeros(2 * k, 2 * k); for (let r = 0; r < k; r++) for (let c = 0; c < k; c++) { const v = H.data[r + c * k]; o.data[r + c * 2 * k] = v; o.data[r + (c + k) * 2 * k] = v; o.data[(r + k) + c * 2 * k] = v; o.data[(r + k) + (c + k) * 2 * k] = -v; } H = o; } return ret(H); },
  hankel: async (a) => { const c = toArray(m(a[0])); const r = a.length >= 2 ? toArray(m(a[1])) : c.map((_, i) => (i === 0 ? c[c.length - 1] : 0)); const nr = c.length, nc = r.length; const o = zeros(nr, nc); for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) { const k = i + j; o.data[i + j * nr] = k < nr ? c[k] : (k - nr + 1 < nc ? r[k - nr + 1] : 0); } return ret(o); },
  compan: async (a) => { const p = toArray(m(a[0])); const n = p.length - 1; if (n < 1) return ret(zeros(0, 0)); const o = zeros(n, n); for (let j = 0; j < n; j++) o.data[0 + j * n] = -p[j + 1] / p[0]; for (let i = 1; i < n; i++) o.data[i + (i - 1) * n] = 1; return ret(o); },
  sub2ind: async (a) => { const sz = toArray(m(a[0])); const rows = sz[0]; const R = m(a[1]), C = a.length >= 3 ? m(a[2]) : null; return ret(C ? elementwise(R, C, (r, c) => (c - 1) * rows + r) : R); },
  ind2sub: async (a, n) => { const sz = toArray(m(a[0])); const rows = sz[0]; const I = m(a[1]); const rr = map(I, (k) => ((k - 1) % rows) + 1); const cc = map(I, (k) => Math.floor((k - 1) / rows) + 1); return n >= 2 ? [rr, cc] : [rr]; },
  rats: async (a) => { const [n2, d] = ratApprox(asScalar(a[0])); return ret(str(d === 1 ? `${n2}` : `${n2}/${d}`)); },
  acscd: ewc((x) => Math.asin(1 / x) / DEG, degOf(cAcsc), (x) => Math.abs(x) < 1), asecd: ewc((x) => Math.acos(1 / x) / DEG, degOf(cAsec), (x) => Math.abs(x) < 1),
  cummax: async (a) => { const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.rows === 1 || A.cols === 1) { let mx = -Infinity; for (let i = 0; i < A.data.length; i++) { mx = Math.max(mx, A.data[i]); o.data[i] = mx; } } else for (let c = 0; c < A.cols; c++) { let mx = -Infinity; for (let r = 0; r < A.rows; r++) { mx = Math.max(mx, A.data[r + c * A.rows]); o.data[r + c * A.rows] = mx; } } return ret(o); },
  cummin: async (a) => { const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.rows === 1 || A.cols === 1) { let mn = Infinity; for (let i = 0; i < A.data.length; i++) { mn = Math.min(mn, A.data[i]); o.data[i] = mn; } } else for (let c = 0; c < A.cols; c++) { let mn = Infinity; for (let r = 0; r < A.rows; r++) { mn = Math.min(mn, A.data[r + c * A.rows]); o.data[r + c * A.rows] = mn; } } return ret(o); },
  // ── matrix algebra extras ──
  polyvalm: async (a) => { const p = toArray(m(a[0])); const A = m(a[1]); const n = A.rows; let R = zeros(n, n); for (const c of p) { R = matmul(A, R); R.data[0] += 0; for (let i = 0; i < n; i++) R.data[i + i * n] += c; } return ret(R); },
  isposdef: async (a) => { const A = m(a[0]); if (!isSymmetric(A)) return ret(bool(false)); const { values } = jacobiEigSym(A); return ret(bool(values.every((v) => v > 1e-12))); },
  planerot: async (a, n) => { const v = toArray(m(a[0])); const [x, y] = v; const r = Math.hypot(x, y); const c = r === 0 ? 1 : x / r, s = r === 0 ? 0 : y / r; const G = fromRows([[c, s], [-s, c]]); return n >= 2 ? [G, colVec([r, 0])] : [G]; },
  house: async (a, n) => { const x = toArray(m(a[0])); const nrm = Math.hypot(...x); const alpha = -Math.sign(x[0] || 1) * nrm; const v = x.slice(); v[0] -= alpha; let vn = 0; for (const e of v) vn += e * e; const beta = vn === 0 ? 0 : 2 / vn; return n >= 2 ? [colVec(v), scalar(beta)] : [colVec(v)]; },
  funm: async (a, _n, env) => {
    const A = m(a[0]); const f = handle(a[1], 'funm'); const nn = A.rows; if (nn === 0) return ret(A);
    const sc = schurFn(A); const cs = rsf2csfFn(sc.U, sc.T);
    const Tre = cs.T.data, Tim = cs.T.idata ?? new Float64Array(nn * nn);
    const tr = (i: number, j: number) => Tre[i + j * nn], ti = (i: number, j: number) => Tim[i + j * nn];
    const Fre = new Float64Array(nn * nn), Fim = new Float64Array(nn * nn);
    const fcall = async (re: number, im: number): Promise<[number, number]> => { const r = await env.callHandle(f, [im === 0 ? scalar(re) : finishComplex(1, 1, Float64Array.of(re), Float64Array.of(im))], 1); const z = m(r[0]); return [z.data[0], z.idata ? z.idata[0] : 0]; };
    for (let i = 0; i < nn; i++) { const [pr, pi] = await fcall(tr(i, i), ti(i, i)); Fre[i + i * nn] = pr; Fim[i + i * nn] = pi; }
    for (let d = 1; d < nn; d++) for (let i = 0; i + d < nn; i++) {
      const j = i + d; let nr = 0, ni = 0;
      { const [r, mm] = cmul(tr(i, j), ti(i, j), Fre[j + j * nn] - Fre[i + i * nn], Fim[j + j * nn] - Fim[i + i * nn]); nr += r; ni += mm; }
      for (let k = i + 1; k < j; k++) { const [r1, m1] = cmul(Fre[i + k * nn], Fim[i + k * nn], tr(k, j), ti(k, j)); const [r2, m2] = cmul(tr(i, k), ti(i, k), Fre[k + j * nn], Fim[k + j * nn]); nr += r1 - r2; ni += m1 - m2; }
      const dr = tr(j, j) - tr(i, i), di = ti(j, j) - ti(i, i);
      if (Math.hypot(dr, di) < 1e-11) { const h = 1e-6; const lr = (tr(i, i) + tr(j, j)) / 2, li = (ti(i, i) + ti(j, j)) / 2; const [pr, pi] = await fcall(lr + h, li); const [mr, mi] = await fcall(lr - h, li); const [r, mm] = cmul(tr(i, j), ti(i, j), (pr - mr) / (2 * h), (pi - mi) / (2 * h)); Fre[i + j * nn] = r; Fim[i + j * nn] = mm; }
      else { const [r, mm] = cdiv(nr, ni, dr, di); Fre[i + j * nn] = r; Fim[i + j * nn] = mm; }
    }
    return ret(cmatmul(cmatmul(cs.U, finishComplex(nn, nn, Fre, Fim)), ctransposeFn(cs.U)));
  },
  // ── quadrature aliases / ODE alias ──
  quad: async (a, n, env) => BUILTINS.integral(a, n, env),
  quadl: async (a, n, env) => BUILTINS.integral(a, n, env),
  quadgk: async (a, n, env) => BUILTINS.integral(a, n, env),
  odeset: async (a) => {
    const fields = new Map<string, Value[]>();
    if (a.length && isStruct(a[0])) for (const [k, v] of a[0].fields) fields.set(k, v.slice());
    const start = a.length && isStruct(a[0]) ? 1 : 0;
    for (let i = start; i + 1 < a.length; i += 2) fields.set(asString(a[i]), [a[i + 1]]);
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  odeget: async () => ret(zeros(0, 0)),
  // ── special functions ──
  erfcx: async (a) => ret(map(m(a[0]), (x) => Math.exp(x * x) * (1 - erfFn(x)))),
  erfcinv: async (a) => ret(map(m(a[0]), (y) => erfinvFn(1 - y))),
  gammainc: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, p) => gammainc(x, p))),
  betainc: async (a) => {
    // Vectorize over all three arguments (scalars broadcast); optional 'upper'/'lower' tail.
    const tail = a.length >= 4 && (isStr(a[3]) || (isMat(a[3]) && (a[3] as Mat).isChar)) ? asString(a[3]).toLowerCase() : 'lower';
    const f = (x: number, p: number, q: number) => { const v = betainc(x, p, q); return tail === 'upper' ? 1 - v : v; };
    return ret(broadcast3(m(a[0]), m(a[1]), m(a[2]), f));
  },
  // ── coordinate transforms ──
  cart2pol: async (a, n) => { const X = m(a[0]), Y = m(a[1]); const th = elementwise(Y, X, (y, x) => Math.atan2(y, x)); const r = elementwise(X, Y, (x, y) => Math.hypot(x, y)); return n >= 2 ? [th, r] : [th]; },
  pol2cart: async (a, n) => { const TH = m(a[0]), R = m(a[1]); const x = elementwise(R, TH, (r, t) => r * Math.cos(t)); const y = elementwise(R, TH, (r, t) => r * Math.sin(t)); return n >= 2 ? [x, y] : [x]; },
  cart2sph: async (a, n) => { const X = m(a[0]), Y = m(a[1]), Z = m(a[2]); const az = elementwise(Y, X, (y, x) => Math.atan2(y, x)); const el = zeros(X.rows, X.cols), r = zeros(X.rows, X.cols); for (let i = 0; i < el.data.length; i++) { el.data[i] = Math.atan2(Z.data[i], Math.hypot(X.data[i], Y.data[i])); r.data[i] = Math.sqrt(X.data[i] ** 2 + Y.data[i] ** 2 + Z.data[i] ** 2); } return n >= 3 ? [az, el, r] : n >= 2 ? [az, el] : [az]; },
  sph2cart: async (a, n) => { const AZ = m(a[0]), EL = m(a[1]), R = m(a[2]); const x = zeros(AZ.rows, AZ.cols), y = zeros(AZ.rows, AZ.cols), z = zeros(AZ.rows, AZ.cols); for (let i = 0; i < x.data.length; i++) { const az = AZ.data[i], el = EL.data[i], r = R.data[i]; x.data[i] = r * Math.cos(el) * Math.cos(az); y.data[i] = r * Math.cos(el) * Math.sin(az); z.data[i] = r * Math.sin(el); } return n >= 3 ? [x, y, z] : n >= 2 ? [x, y] : [x]; },
  // ── geometry ──
  polyarea: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); let s = 0; const n = x.length; for (let i = 0; i < n; i++) { const j = (i + 1) % n; s += x[i] * y[j] - x[j] * y[i]; } return ret(scalar(Math.abs(s) / 2)); },
  inpolygon: async (a) => { const xq = m(a[0]), yq = m(a[1]); const xv = toArray(m(a[2])), yv = toArray(m(a[3])); const o = zeros(xq.rows, xq.cols); for (let k = 0; k < xq.data.length; k++) o.data[k] = pointInPoly(xq.data[k], yq.data[k], xv, yv) ? 1 : 0; o.isBool = true; return [o]; },
  convhull: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); return ret(colVec(convHull2D(x, y))); },
  rectint: async (a) => { const A = m(a[0]), B = m(a[1]); const o = zeros(A.rows, B.rows); for (let i = 0; i < A.rows; i++) for (let j = 0; j < B.rows; j++) { const ax = A.data[i], ay = A.data[i + A.rows], aw = A.data[i + 2 * A.rows], ah = A.data[i + 3 * A.rows]; const bx = B.data[j], by = B.data[j + B.rows], bw = B.data[j + 2 * B.rows], bh = B.data[j + 3 * B.rows]; const ix = Math.max(0, Math.min(ax + aw, bx + bw) - Math.max(ax, bx)); const iy = Math.max(0, Math.min(ay + ah, by + bh) - Math.max(ay, by)); o.data[i + j * A.rows] = ix * iy; } return ret(o); },
  // ── distances ──
  pdist: async (a) => { const X = m(a[0]); const out: number[] = []; for (let i = 0; i < X.rows; i++) for (let j = i + 1; j < X.rows; j++) { let s = 0; for (let c = 0; c < X.cols; c++) s += (X.data[i + c * X.rows] - X.data[j + c * X.rows]) ** 2; out.push(Math.sqrt(s)); } return ret(rowVec(out)); },
  pdist2: async (a) => { const X = m(a[0]), Y = m(a[1]); const o = zeros(X.rows, Y.rows); for (let i = 0; i < X.rows; i++) for (let j = 0; j < Y.rows; j++) { let s = 0; for (let c = 0; c < X.cols; c++) s += (X.data[i + c * X.rows] - Y.data[j + c * Y.rows]) ** 2; o.data[i + j * X.rows] = Math.sqrt(s); } return ret(o); },
  squareform: async (a) => { const V = m(a[0]); if (V.rows === 1 || V.cols === 1) { const v = toArray(V); const n = Math.round((1 + Math.sqrt(1 + 8 * v.length)) / 2); const o = zeros(n, n); let k = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { o.data[i + j * n] = v[k]; o.data[j + i * n] = v[k]; k++; } return ret(o); } const n = V.rows; const out: number[] = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) out.push(V.data[i + j * n]); return ret(rowVec(out)); },
  // ── residue ──
  residue: async (a, n) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1]));
    const { re, im } = durandKerner(aa);
    const dp = aa.slice(0, -1).map((c, i) => c * (aa.length - 1 - i)); // a'(s)
    const pevC = (coef: number[], xr: number, xi: number) => { let sr = coef[0], si = 0; for (let k = 1; k < coef.length; k++) { const [tr, ti] = cmul(sr, si, xr, xi); sr = tr + coef[k]; si = ti; } return [sr, si]; };
    const rr = new Float64Array(re.length), ri = new Float64Array(re.length);
    for (let k = 0; k < re.length; k++) { const [nbr, nbi] = pevC(b, re[k], im[k]); const [dar, dai] = pevC(dp, re[k], im[k]); const [qr, qi] = cdiv(nbr, nbi, dar, dai); rr[k] = qr; ri[k] = qi; }
    const R = finishComplex(re.length, 1, rr, ri); const P = finishComplex(re.length, 1, Float64Array.from(re), Float64Array.from(im));
    return n >= 2 ? [R, P, zeros(0, 0)] : [R];
  },
  // ── dense equivalents of sparse routines ──
  sparse: async (a) => {
    if (a.length === 1) return ret(isSparse(a[0]) ? a[0] : denseToSparse(m(a[0])));
    if (a.length === 2) return ret(sparseFromMap(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), new Map())); // all-zero m×n
    const ii = toArray(m(a[0])).map((x) => Math.round(x)), jj = toArray(m(a[1])).map((x) => Math.round(x)), vv = toArray(m(a[2]));
    const rows = a.length >= 4 ? Math.round(asScalar(a[3])) : Math.max(...ii), cols = a.length >= 5 ? Math.round(asScalar(a[4])) : Math.max(...jj);
    return ret(sparseFromTriplets(rows, cols, ii, jj, vv));
  },
  full: async (a) => ret(m(a[0])),
  issparse: async (a) => ret(bool(isSparse(a[0]))),
  speye: async (a) => { const [r, c] = dims2(a); const acc = new Map<number, number>(); for (let i = 0; i < Math.min(r, c); i++) acc.set(i * r + i, 1); return ret(sparseFromMap(r, c, acc)); },
  spalloc: async (a) => ret(sparseFromMap(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), new Map())),
  nzmax: async (a) => ret(scalar(isSparse(a[0]) ? a[0].values.length : toArray(m(a[0])).filter((x) => x !== 0).length)),
  sprand: async (a) => ret(sprandGen(a, false)),
  sprandn: async (a) => ret(sprandGen(a, true)),
  sprandsym: async (a) => {
    const n = Math.round(asScalar(a[0])); const dens = a.length >= 2 ? asScalar(a[1]) : 0.2;
    const acc = new Map<number, number>(); const k = Math.round(dens * n * n / 2);
    for (let t = 0; t < k; t++) { const i = Math.floor(Math.random() * n), j = Math.floor(Math.random() * n); const v = Math.random() * 2 - 1; acc.set(j * n + i, v); acc.set(i * n + j, v); }
    for (let i = 0; i < n; i++) acc.set(i * n + i, n); // diagonally dominant
    return ret(sparseFromMap(n, n, acc));
  },
  spdiags: async (a) => { const B = m(a[0]); const d = toArray(m(a[1])).map((x) => Math.round(x)); const mm = Math.round(asScalar(a[2])), nn = Math.round(asScalar(a[3])); const acc = new Map<number, number>(); for (let di = 0; di < d.length; di++) { const diag = d[di]; for (let r = 0; r < mm; r++) { const c = r + diag; if (c >= 0 && c < nn) { const v = B.data[Math.min(r, B.rows - 1) + di * B.rows]; if (v !== 0) acc.set(c * mm + r, v); } } } return ret(sparseFromMap(mm, nn, acc)); },
  spones: async (a) => isSparse(a[0]) ? ret(sparseFromMap(a[0].rows, a[0].cols, new Map([...sparseEntries(a[0])].map(([k]) => [k, 1])))) : ret(map(m(a[0]), (x) => (x !== 0 ? 1 : 0))),
  spy: async (a, _n, env) => { const S = asSparse(a[0]); const xs: number[] = [], ys: number[] = []; for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { xs.push(j + 1); ys.push(S.rows - S.rowind[p]); } env.graphics.addSeries(xs, ys, 'o'); return []; },
  etree: async (a) => ret(rowVec(etreeOf(asSparse(a[0])))),
  symrcm: async (a) => ret(rowVec(symrcmOf(asSparse(a[0])))),
  amd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  symamd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  colamd: async (a) => ret(rowVec(minDegreeOrder(colAdjacency(asSparse(a[0]))))),
  ichol: async (a) => ret(ichol0(asSparse(a[0]))),
  ilu: async (a, n) => { const { L, U } = ilu0(asSparse(a[0])); return n >= 2 ? [L, U] : [U]; },
  // deprecated orderings/factorizations → modern equivalents (Gilbert–Moler–Schreiber compatibility)
  colmmd: async (a) => ret(rowVec(minDegreeOrder(colAdjacency(asSparse(a[0]))))),
  symmmd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  luinc: async (a, n) => { const { L, U } = ilu0(asSparse(a[0])); return n >= 2 ? [L, U] : [U]; },
  cholinc: async (a) => ret(ichol0(asSparse(a[0]))),
  // sparse utilities
  spconvert: async (a) => { const D = m(a[0]); const r = D.rows, c = D.cols; const ii: number[] = [], jj: number[] = [], vv: number[] = []; for (let k = 0; k < r; k++) { ii.push(D.data[k]); jj.push(D.data[k + r]); vv.push(c >= 3 ? D.data[k + 2 * r] : 1); } const mm = ii.length ? Math.max(...ii) : 0, nn = jj.length ? Math.max(...jj) : 0; return ret(sparseFromTriplets(mm, nn, ii, jj, vv)); },
  spaugment: async (a) => { const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]); const mm = A.rows, nn = A.cols; const c = a.length >= 2 ? asScalar(a[1]) : Math.max(...toArray(A).map(Math.abs)) || 1; const S = zeros(mm + nn, mm + nn); for (let i = 0; i < mm; i++) S.data[i + i * (mm + nn)] = c; for (let i = 0; i < mm; i++) for (let j = 0; j < nn; j++) { const v = A.data[i + j * mm]; S.data[i + (mm + j) * (mm + nn)] = v; S.data[(mm + j) + i * (mm + nn)] = v; } return ret(denseToSparse(S)); },
  spparms: async () => [],   // sparse algorithm tuning params: accept and ignore (use defaults)
  dmperm: async (a, n) => {
    const S = asSparse(a[0]); const match = bipartiteMatch(S);   // match[col] = matched row, or -1
    // single output: the maximum matching p(j)=row matched to column j (0 if unmatched) → zero-free diagonal
    if (n < 2) return ret(rowVec(match.map((r) => r + 1)));
    // [p,q]: row & column permutations placing the matched structure in the leading block
    const matchedRow = new Array(S.rows).fill(false); const p: number[] = [], q: number[] = [];
    for (let j = 0; j < S.cols; j++) if (match[j] >= 0) { p.push(match[j] + 1); matchedRow[match[j]] = true; q.push(j + 1); }
    for (let i = 0; i < S.rows; i++) if (!matchedRow[i]) p.push(i + 1);
    for (let j = 0; j < S.cols; j++) if (match[j] < 0) q.push(j + 1);
    return [rowVec(p), rowVec(q)];
  },
  gplot: async (a, _n, env) => {
    const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]); const XY = m(a[1]); const nn = A.rows;
    const xs: number[] = [], ys: number[] = [];
    for (let i = 0; i < nn; i++) for (let j = 0; j < nn; j++) if (A.data[i + j * nn] !== 0) { xs.push(XY.data[i], XY.data[j], NaN); ys.push(XY.data[i + nn], XY.data[j + nn], NaN); }
    env.graphics.addSeries(xs, ys); return [];
  },
  treelayout: async (a, n) => { const par = toArray(m(a[0])).map((x) => Math.round(x)); const { x, y, h } = treeLayout(par); return n >= 3 ? [rowVec(x), rowVec(y), scalar(h)] : n >= 2 ? [rowVec(x), rowVec(y)] : [rowVec(x)]; },
  treeplot: async (a, _n, env) => { const par = toArray(m(a[0])).map((x) => Math.round(x)); const { x, y } = treeLayout(par); const px: number[] = [], py: number[] = []; par.forEach((p, i) => { if (p > 0) { px.push(x[i], x[p - 1], NaN); py.push(y[i], y[p - 1], NaN); } }); env.graphics.addSeries(px, py); env.graphics.hold(true); env.graphics.scatter([rowVec(x), rowVec(y)]); env.graphics.hold(false); return []; },
  etreeplot: async (a, _n, env) => { const par = etreeOf(asSparse(a[0])); const { x, y } = treeLayout(par); const px: number[] = [], py: number[] = []; par.forEach((p, i) => { if (p > 0) { px.push(x[i], x[p - 1], NaN); py.push(y[i], y[p - 1], NaN); } }); env.graphics.addSeries(px, py); env.graphics.hold(true); env.graphics.scatter([rowVec(x), rowVec(y)]); env.graphics.hold(false); return []; },
  decomposition: async (a) => ret(mat(m(a[0]).rows, m(a[0]).cols, new Float64Array(m(a[0]).data))),
  RandStream: async (a) => { const type = a.length ? asString(a[0]) : 'mt19937ar'; const seed = a.length >= 3 && isMat(a[2]) ? asScalar(a[2]) : (a.length >= 2 && isMat(a[1]) ? asScalar(a[1]) : 0); return ret({ kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['Type', [str(type)]], ['Seed', [scalar(seed)]], ['NormalTransform', [str('Ziggurat')]]]) } as StructV); },
  GraphPlot: async () => [], layout: async () => [], layoutcoords: async () => [],
  // ── more scalar math / reductions ──
  cbrt: ew(Math.cbrt),
  sinc: ew((x) => (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x))),
  sumsq: async (a) => ret(colReduce(m(a[0]), (c) => c.reduce((s, x) => s + x * x, 0))),
  range: async (a) => ret(colReduce(m(a[0]), (c) => Math.max(...c) - Math.min(...c))),
  zscore: async (a) => ret(colMap(m(a[0]), (c) => normalizeVec(c, 'zscore'))),
  center: async (a) => ret(colMap(m(a[0]), (c) => normalizeVec(c, 'center'))),
  meansq: async (a) => ret(colReduce(m(a[0]), (c) => c.reduce((s, x) => s + x * x, 0) / c.length)),
  issorted: async (a) => { const v = toArray(m(a[0])); let ok = true; for (let i = 1; i < v.length; i++) if (v[i] < v[i - 1]) { ok = false; break; } return ret(bool(ok)); },
  normest: async (a) => ret(scalar(norm(m(a[0]), 2))),
  // ── type predicates ──
  islogical: async (a) => ret(bool(isMat(a[0]) && !!(a[0] as Mat).isBool)),
  isinteger: async (a) => ret(bool(isMat(a[0]) && !!(a[0] as Mat).itype && (a[0] as Mat).itype !== 'single')),
  issquare: async (a) => { const A = m(a[0]); return ret(bool(A.rows === A.cols)); },
  // ═══════════ SOLVERS · STRINGS · BASE CONVERSION · REGEXP ═══════════
  // ── nonlinear system + iterative solvers (dense direct fallback) ──
  fsolve: async (a, _n, env) => {
    const f = handle(a[0], 'fsolve'); let x = toArray(m(a[1])); const n = x.length;
    const F = async (v: number[]) => { const r = await env.callHandle(f, [m(a[1]).rows === 1 ? rowVec(v) : colVec(v)], 1); return toArray(m(r[0])); };
    for (let it = 0; it < 100; it++) {
      const fx = await F(x); if (Math.hypot(...fx) < 1e-12) break;
      const J = zeros(n, n); const h = 1e-7;
      for (let j = 0; j < n; j++) { const xj = x.slice(); xj[j] += h; const fj = await F(xj); for (let i = 0; i < n; i++) J.data[i + j * n] = (fj[i] - fx[i]) / h; }
      const dx = mldivide(J, colVec(fx)); for (let i = 0; i < n; i++) x[i] -= dx.data[i];
    }
    return ret(m(a[1]).rows === 1 ? rowVec(x) : colVec(x));
  },
  bicg: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  bicgstab: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  cgs: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  gmres: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  pcg: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  // ── string functions (operate on char arrays) ──
  lower: async (a) => ret(str(asString(a[0]).toLowerCase())),
  upper: async (a) => ret(str(asString(a[0]).toUpperCase())),
  strtrim: async (a) => ret(str(asString(a[0]).trim())),
  deblank: async (a) => ret(str(asString(a[0]).replace(/\s+$/, ''))),
  strcmp: async (a) => ret(bool(getStr(a[0]) !== null && getStr(a[0]) === getStr(a[1]))),
  strcmpi: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); return ret(bool(x !== null && y !== null && x.toLowerCase() === y.toLowerCase())); },
  strncmp: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); const k = Math.round(asScalar(a[2])); return ret(bool(x !== null && y !== null && x.slice(0, k) === y.slice(0, k) && x.length >= k && y.length >= k)); },
  strncmpi: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); const k = Math.round(asScalar(a[2])); return ret(bool(x !== null && y !== null && x.slice(0, k).toLowerCase() === y.slice(0, k).toLowerCase() && x.length >= k && y.length >= k)); },
  strrep: async (a) => ret(str(asString(a[0]).split(asString(a[1])).join(asString(a[2])))),
  strcat: async (a) => ret(str(a.map((v) => (isMat(v) && (v as Mat).isChar ? asString(v).replace(/\s+$/, '') : asString(v))).join(''))),
  strfind: async (a) => { const s = asString(a[0]), p = asString(a[1]); const out: number[] = []; if (p.length) { let i = s.indexOf(p); while (i >= 0) { out.push(i + 1); i = s.indexOf(p, i + 1); } } return ret(rowVec(out)); },
  strtok: async (a, n) => { const s = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' \t\n'; let i = 0; while (i < s.length && delim.includes(s[i])) i++; let j = i; while (j < s.length && !delim.includes(s[j])) j++; return n >= 2 ? [str(s.slice(i, j)), str(s.slice(j))] : [str(s.slice(i, j))]; },
  regexprep: async (a) => { try { return ret(str(asString(a[0]).replace(new RegExp(asString(a[1]), 'g'), asString(a[2]).replace(/\$(\d)/g, '$$$1')))); } catch { return ret(a[0]); } },
  // ── base conversions ──
  dec2bin: async (a) => { const vals = toArray(m(a[0])).map((x) => Math.round(x)); const minW = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; return ret(charRowsZ(vals.map((d) => (d >>> 0).toString(2)), minW)); },
  bin2dec: async (a) => {
    const conv = (s: string) => parseInt(s.replace(/\s/g, ''), 2);
    if (isStr(a[0])) { const s = a[0]; return ret(mat(s.rows, s.cols, Float64Array.from(s.items, conv))); }
    const M = m(a[0]);
    if (M.isChar && M.rows > 1) { const out = new Float64Array(M.rows); for (let r = 0; r < M.rows; r++) { let str = ''; for (let c = 0; c < M.cols; c++) str += String.fromCharCode(M.data[r + c * M.rows]); out[r] = conv(str); } return ret(mat(M.rows, 1, out)); }
    return ret(scalar(conv(asString(a[0]))));
  },
  dec2hex: async (a) => { const vals = toArray(m(a[0])).map((x) => Math.round(x)); const minW = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; return ret(charRowsZ(vals.map((d) => d.toString(16).toUpperCase()), minW)); },
  hex2dec: async (a) => ret(scalar(parseInt(asString(a[0]).replace(/\s/g, ''), 16))),
  dec2base: async (a) => { const vals = toArray(m(a[0])).map((x) => Math.round(x)); const b = Math.round(asScalar(a[1])); const minW = a.length >= 3 ? Math.round(asScalar(a[2])) : 0; return ret(charRowsZ(vals.map((d) => d.toString(b).toUpperCase()), minW)); },
  base2dec: async (a) => {
    const base = Math.round(asScalar(a[1]));
    const conv = (s: string) => parseInt(s.replace(/\s/g, ''), base);
    if (isStr(a[0])) { const s = a[0]; return ret(mat(s.rows, s.cols, Float64Array.from(s.items, conv))); }
    const M = m(a[0]);
    if (M.isChar && M.rows > 1) { const out = new Float64Array(M.rows); for (let r = 0; r < M.rows; r++) { let str = ''; for (let c = 0; c < M.cols; c++) str += String.fromCharCode(M.data[r + c * M.rows]); out[r] = conv(str); } return ret(mat(M.rows, 1, out)); }
    return ret(scalar(conv(asString(a[0]))));
  },
  // ── class / regexp / sscanf ──
  class: async (a) => { const v = a[0]; if (isMap(v)) return ret(str('containers.Map')); if (isDict(v)) return ret(str('dictionary')); if (isHandle(v)) return ret(str('function_handle')); if (v.kind === 'gobj') return ret(str(v.gtype)); if (isStr(v)) return ret(str('string')); if (isCell(v)) return ret(str('cell')); if (isStruct(v)) return ret(str('struct')); if (isTable(v)) return ret(str(v.isTimetable ? 'timetable' : 'table')); if (isCategorical(v)) return ret(str('categorical')); if (isSym(v)) return ret(str('sym')); if ((v as Mat).isChar) return ret(str('char')); if ((v as Mat).isBool) return ret(str('logical')); return ret(str((v as Mat).itype ?? 'double')); },
  isa: async (a) => { const v = a[0]; const ty = asString(a[1]); const M = v as Mat; const cls = isHandle(v) ? 'function_handle' : M.isChar ? 'char' : M.isBool ? 'logical' : (M.itype ?? 'double'); if (ty === cls) return ret(bool(true)); const isInt = isMat(v) && !!M.itype && M.itype !== 'single'; const isFlt = isMat(v) && !M.isChar && !M.isBool && (!M.itype || M.itype === 'single'); if (ty === 'numeric' && isMat(v) && !M.isChar && !M.isBool) return ret(bool(true)); if (ty === 'float' && isFlt) return ret(bool(true)); if (ty === 'integer' && isInt) return ret(bool(true)); return ret(bool(false)); },
  regexp: async (a, n) => {
    const s = asString(a[0]); const pat = asString(a[1]); const opts = a.slice(2).map((x) => asString(x).toLowerCase());
    const once = opts.includes('once'); const re = new RegExp(pat, 'g' + (opts.includes('ignorecase') ? 'i' : ''));
    const ms: RegExpExecArray[] = []; let mt: RegExpExecArray | null; while ((mt = re.exec(s)) !== null) { ms.push(mt); if (mt.index === re.lastIndex) re.lastIndex++; }
    const splitParts = () => { const parts: string[] = []; let last = 0; for (const mm of ms) { parts.push(s.slice(last, mm.index)); last = mm.index + mm[0].length; } parts.push(s.slice(last)); return parts; };
    const build = (which: string): Value => {
      if (which === 'end') return rowVec(ms.map((mm) => mm.index + mm[0].length));
      if (which === 'match') return makeCell(1, ms.length, ms.map((mm) => str(mm[0])));
      if (which === 'tokens') return makeCell(1, ms.length, ms.map((mm) => makeCell(1, Math.max(0, mm.length - 1), mm.slice(1).map((t) => str(t ?? ''))) as Value));
      if (which === 'split') { const p = splitParts(); return makeCell(1, p.length, p.map((x) => str(x))); }
      return rowVec(ms.map((mm) => mm.index + 1));   // 'start' (default)
    };
    const want = opts.filter((o) => ['start', 'end', 'match', 'tokens', 'split'].includes(o));
    if (once) {
      const w = want[0] ?? 'start'; const m0 = ms[0];
      if (w === 'match') return ret(str(m0 ? m0[0] : ''));
      if (w === 'tokens') return ret(makeCell(1, m0 ? m0.length - 1 : 0, m0 ? m0.slice(1).map((t) => str(t ?? '')) : []));
      if (w === 'split') { const p = splitParts(); return ret(makeCell(1, p.length, p.map((x) => str(x)))); }
      if (w === 'end') return ret(m0 ? scalar(m0.index + m0[0].length) : zeros(1, 0));
      return ret(m0 ? scalar(m0.index + 1) : zeros(1, 0));
    }
    if (want.length === 0) return [build('start')];
    return want.slice(0, Math.max(1, n)).map(build);
  },
  regexpi: async (a) => { const s = asString(a[0]); const re = new RegExp(asString(a[1]), 'gi'); const idx: number[] = []; let mt: RegExpExecArray | null; while ((mt = re.exec(s)) !== null) { idx.push(mt.index + 1); if (mt.index === re.lastIndex) re.lastIndex++; } return ret(rowVec(idx)); },
  regexptranslate: async (a) => { const op = asString(a[0]).toLowerCase(); const s = asString(a[1]); if (op === 'wildcard') return ret(str(s.replace(/[.+^$|()[\]{}\\]/g, '\\$&').replace(/\*/g, '.*').replace(/\?/g, '.'))); return ret(str(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))); },
  iskeyword: async (a) => { const kw = ['break', 'case', 'catch', 'classdef', 'continue', 'else', 'elseif', 'end', 'for', 'function', 'global', 'if', 'otherwise', 'parfor', 'persistent', 'return', 'spmd', 'switch', 'try', 'while']; if (a.length === 0) return ret(makeCell(kw.length, 1, kw.map((k) => str(k)))); return ret(bool(kw.includes(asString(a[0])))); },
  sscanf: async (a) => { const s = asString(a[0]); const nums = (s.match(/-?\d+\.?\d*(e[+-]?\d+)?/gi) ?? []).map(Number); return ret(colVec(nums)); },
  // ═══════════════ CELLS · STRUCTS · STRING CLASS · MISC ═══════════════
  // ── cell arrays ──
  cell: async (a) => { const [r, c] = dims2(a); const items: Value[] = []; for (let i = 0; i < r * c; i++) items.push(zeros(0, 0)); return ret(makeCell(r, c, items)); },
  iscell: async (a) => ret(bool(isCell(a[0]))),
  iscellstr: async (a) => ret(bool(isCell(a[0]) && (a[0] as Cell).items.every((it) => isMat(it) && !!(it as Mat).isChar))),
  num2cell: async (a) => { const A = m(a[0]); const items: Value[] = []; for (let i = 0; i < A.data.length; i++) items.push(A.idata ? finishComplex(1, 1, Float64Array.of(A.data[i]), Float64Array.of(A.idata[i])) : scalar(A.data[i])); return ret(makeCell(A.rows, A.cols, items)); },
  cell2mat: async (a) => {
    const C = a[0]; if (!isCell(C)) return ret(m(a[0]));
    const rowMats: Mat[] = [];
    for (let r = 0; r < C.rows; r++) { const parts: Mat[] = []; for (let c = 0; c < C.cols; c++) parts.push(m(C.items[r + c * C.rows])); rowMats.push(parts.length === 1 ? parts[0] : horzcat(parts)); }
    return ret(rowMats.length === 1 ? rowMats[0] : vertcat(rowMats));
  },
  celldisp: async (a, _n, env) => { const C = a[0]; if (!isCell(C)) return []; for (let i = 0; i < C.items.length; i++) env.output(`{${i + 1}} = ${dispValue(C.items[i])}\n`); return []; },
  cellfun: async (a, _n, env) => {
    const f = handle(a[0], 'cellfun'); const C = a[1]; if (!isCell(C)) throw new MatError('cellfun: second argument must be a cell array');
    let uniform = true; for (let i = 2; i + 1 < a.length; i += 2) if (isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'uniformoutput') uniform = truthyArg(a[i + 1]);
    const results: Value[] = [];
    for (let i = 0; i < C.items.length; i++) { const r = await env.callHandle(f, [C.items[i]], 1); results.push(r[0] ?? zeros(0, 0)); }
    if (uniform) { const o = zeros(C.rows, C.cols); for (let i = 0; i < results.length; i++) o.data[i] = asScalar(results[i]); return ret(o); }
    return ret(makeCell(C.rows, C.cols, results));
  },
  strsplit: async (a) => {
    const s = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' ';
    const parts = a.length >= 2 ? s.split(delim) : s.split(/\s+/).filter((x) => x.length);
    return ret(makeCell(1, parts.length, parts.map((p) => str(p))));
  },
  strjoin: async (a) => { const C = a[0]; if (!isCell(C)) throw new MatError('strjoin: first argument must be a cell array of strings'); const delim = a.length >= 2 ? asString(a[1]) : ' '; return ret(str(C.items.map((it) => asString(it)).join(delim))); },

  // ── Structs ──
  struct: async (a) => {
    const fields = new Map<string, Value[]>();
    for (let i = 0; i + 1 < a.length; i += 2) {
      const name = asString(a[i]); const v = a[i + 1];
      // struct('f', {…}) would build a struct array; we support scalar structs (cell value → first element)
      fields.set(name, [isCell(v) ? (v.items[0] ?? zeros(0, 0)) : v]);
    }
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  isstruct: async (a) => ret(bool(isStruct(a[0]))),
  isfield: async (a) => {
    const S = a[0]; if (!isStruct(S)) return ret(bool(false));
    if (isCell(a[1])) return ret(makeCell(a[1].rows, a[1].cols, a[1].items.map((it) => bool(S.fields.has(asString(it))))));
    return ret(bool(S.fields.has(asString(a[1]))));
  },
  fieldnames: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('fieldnames: argument must be a struct'); const names = [...S.fields.keys()]; return ret(makeCell(names.length, 1, names.map((nm) => str(nm)))); },
  numfields: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('numfields: argument must be a struct'); return ret(scalar(S.fields.size)); },
  rmfield: async (a) => {
    const S = a[0]; if (!isStruct(S)) throw new MatError('rmfield: first argument must be a struct');
    const fields = new Map(S.fields); const names = isCell(a[1]) ? a[1].items.map((it) => asString(it)) : [asString(a[1])];
    for (const nm of names) { if (!fields.has(nm)) throw new MatError(`rmfield: field '${nm}' not found`); fields.delete(nm); }
    return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV);
  },
  setfield: async (a) => {
    const S = isStruct(a[0]) ? a[0] : ({ kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>() } as StructV);
    const fields = new Map(S.fields); fields.set(asString(a[1]), [a[2]]);
    return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV);
  },
  getfield: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('getfield: first argument must be a struct'); const nm = asString(a[1]); const v = S.fields.get(nm); if (!v) throw new MatError(`getfield: field '${nm}' not found`); return ret(v[0] ?? zeros(0, 0)); },
  orderfields: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('orderfields: argument must be a struct'); const fields = new Map<string, Value[]>(); for (const k of [...S.fields.keys()].sort()) fields.set(k, S.fields.get(k)!); return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV); },
  struct2cell: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('struct2cell: argument must be a struct'); const vals = [...S.fields.values()].map((v) => v[0] ?? zeros(0, 0)); return ret(makeCell(vals.length, 1, vals)); },
  cell2struct: async (a) => {
    const C = a[0]; const F = a[1]; if (!isCell(C) || !isCell(F)) throw new MatError('cell2struct: arguments must be cell arrays');
    const names = F.items.map((it) => asString(it)); const fields = new Map<string, Value[]>();
    for (let i = 0; i < names.length; i++) fields.set(names[i], [C.items[i] ?? zeros(0, 0)]);
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  structfun: async (a, n, env) => {
    const f = handle(a[0], 'structfun'); const S = a[1]; if (!isStruct(S)) throw new MatError('structfun: second argument must be a struct');
    let uniform = true; for (let i = 2; i + 1 < a.length; i += 2) if (isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'uniformoutput') uniform = truthyArg(a[i + 1]);
    const keys = [...S.fields.keys()]; const results: Value[] = [];
    for (const k of keys) { const r = await env.callHandle(f, [S.fields.get(k)![0] ?? zeros(0, 0)], 1); results.push(r[0] ?? zeros(0, 0)); }
    if (uniform) { const o = zeros(keys.length, 1); for (let i = 0; i < results.length; i++) o.data[i] = asScalar(results[i]); return ret(o); }
    const fields = new Map<string, Value[]>(); keys.forEach((k, i) => fields.set(k, [results[i]])); void n;
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },

  // ── Concatenation / equality / misc (batch A) ──
  horzcat: async (a) => ret(horzcat(a.map((v) => m(v)))),
  vertcat: async (a) => ret(vertcat(a.map((v) => m(v)))),
  isequaln: async (a) => {
    const eq = (x: Value, y: Value): boolean => {
      if (!isMat(x) || !isMat(y)) return x === y;
      if (x.rows !== y.rows || x.cols !== y.cols) return false;
      for (let i = 0; i < x.data.length; i++) { const u = x.data[i], v = y.data[i]; if (u !== v && !(Number.isNaN(u) && Number.isNaN(v))) return false; }
      return true;
    };
    for (let i = 1; i < a.length; i++) if (!eq(a[0], a[i])) return ret(bool(false));
    return ret(bool(true));
  },
  size_equal: async (a) => {
    if (!a.length) return ret(bool(true));
    const [r, c] = dimsOf(a[0]);
    for (let i = 1; i < a.length; i++) { const [ri, ci] = dimsOf(a[i]); if (ri !== r || ci !== c) return ret(bool(false)); }
    return ret(bool(true));
  },
  corr: async (a) => {
    let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]);
    const C = covMatrix(X); const p = C.rows; const R = zeros(p, p);
    for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / Math.sqrt(C.data[i + i * p] * C.data[j + j * p]);
    return ret(R);
  },
  qmr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  condest1: async (a) => { const A = m(a[0]); return ret(scalar(norm(A, 1) * norm(inv(A), 1))); },
  wilkinson: async (a) => {
    const n = Math.round(asScalar(a[0])); const W = zeros(n, n); const mid = (n - 1) / 2;
    for (let i = 0; i < n; i++) { W.data[i + i * n] = Math.abs(mid - i); if (i + 1 < n) { W.data[i + (i + 1) * n] = 1; W.data[(i + 1) + i * n] = 1; } }
    return ret(W);
  },
  gallery: async (a) => {
    if (!a.length || !(isMat(a[0]) && (a[0] as Mat).isChar)) throw new MatError("gallery: first argument must be a name, e.g. gallery('minij',5)");
    return ret(galleryMatrix(asString(a[0]).toLowerCase(), a.slice(1)));
  },
  nonzeros: async (a) => { if (isSparse(a[0])) return ret(colVec(Array.from(a[0].values))); return ret(colVec(toArray(m(a[0])).filter((x) => x !== 0))); },
  // Window functions (column vectors, like MATLAB).
  bartlett: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 1 - Math.abs((n - (N - 1) / 2) / ((N - 1) / 2))); return ret(colVec(w)); },
  blackman: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.42 - 0.5 * Math.cos((2 * Math.PI * n) / (N - 1)) + 0.08 * Math.cos((4 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hamming: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.54 - 0.46 * Math.cos((2 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hanning: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 1; n <= N; n++) w.push(0.5 * (1 - Math.cos((2 * Math.PI * n) / (N + 1)))); return ret(colVec(w)); },
  hann: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.5 * (1 - Math.cos((2 * Math.PI * n) / (N - 1)))); return ret(colVec(w)); },
  // Bit-reinterpretation: source storage is IEEE double (the only class this engine tracks).
  typecast: async (a) => { const A = m(a[0]); const buf = new Float64Array(A.data).buffer; return ret(rowVec(readAs(buf, asString(a[1])))); },
  swapbytes: async (a) => { const A = m(a[0]); const u = new Uint8Array(new Float64Array(A.data).buffer); for (let i = 0; i < u.length; i += 8) u.subarray(i, i + 8).reverse(); return ret(mat(A.rows, A.cols, new Float64Array(u.buffer))); },

  // ── String class ("…") ──
  string: async (a) => { const v = a[0]; if (isStr(v)) return ret(v); if (isCell(v)) return ret(makeStrArr(v.rows, v.cols, v.items.map((x) => asString(x)))); if (isMat(v) && v.isChar) return ret(makeStr(asString(v))); if (isMat(v)) { const f = (x: number) => (Number.isInteger(x) ? String(x) : String(+x.toPrecision(5))); return ret(makeStrArr(v.rows, v.cols, Array.from(v.data, f))); } return ret(makeStr(String(v))); },
  strings: async (a) => { const [r, c] = dims2(a); return ret(makeStrArr(r, c, new Array(r * c).fill(''))); },
  isstring: async (a) => ret(bool(isStr(a[0]))),
  isStringScalar: async (a) => ret(bool(isStr(a[0]) && a[0].rows * a[0].cols === 1)),
  strlength: async (a) => { const s = asStrArr(a[0]); const o = zeros(s.rows, s.cols); s.items.forEach((x, i) => { o.data[i] = x.length; }); return ret(o); },
  contains: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.includes(p) ? 1 : 0; }); return [o]; },
  startsWith: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.startsWith(p) ? 1 : 0; }); return [o]; },
  endsWith: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.endsWith(p) ? 1 : 0; }); return [o]; },
  count: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); s.items.forEach((x, i) => { o.data[i] = p ? x.split(p).length - 1 : 0; }); return ret(o); },
  erase: async (a) => ret(mapStrArr(a[0], (x) => x.split(asString(a[1])).join(''))),
  replace: async (a) => ret(mapStrArr(a[0], (x) => x.split(asString(a[1])).join(asString(a[2])))),
  strip: async (a) => { const side = a.length >= 2 ? asString(a[1]).toLowerCase() : 'both'; return ret(mapStrArr(a[0], (x) => (side === 'left' ? x.replace(/^\s+/, '') : side === 'right' ? x.replace(/\s+$/, '') : x.trim()))); },
  reverse: async (a) => ret(mapStrArr(a[0], (x) => [...x].reverse().join(''))),
  pad: async (a) => { const n = Math.round(asScalar(a[1])); const side = a.length >= 3 ? asString(a[2]).toLowerCase() : 'right'; return ret(mapStrArr(a[0], (x) => (side === 'left' ? x.padStart(n) : side === 'both' ? x.padStart(Math.floor((n + x.length) / 2)).padEnd(n) : x.padEnd(n)))); },
  split: async (a) => { const str = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' '; const parts = a.length >= 2 ? str.split(delim) : str.split(/\s+/).filter((x) => x.length); return ret(makeStrArr(parts.length, 1, parts)); },
  splitlines: async (a) => { const parts = asString(a[0]).split(/\r\n|\r|\n/); return ret(makeStrArr(parts.length, 1, parts)); },
  join: async (a) => { const s = asStrArr(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' '; return ret(makeStr(s.items.join(delim))); },
  append: async (a) => {
    // String arrays concatenate element-wise (scalars broadcast); otherwise join as text.
    if (a.some(isStr)) {
      let rows = 1, cols = 1, total = 1;
      for (const v of a) if (isStr(v) && v.items.length > total) { rows = v.rows; cols = v.cols; total = v.items.length; }
      const items: string[] = [];
      for (let i = 0; i < total; i++) { let s = ''; for (const v of a) s += isStr(v) ? (v.items.length === 1 ? v.items[0] : v.items[i]) : asString(v); items.push(s); }
      return ret(makeStrArr(rows, cols, items));
    }
    return ret(makeStr(a.map((v) => asString(v)).join('')));
  },
  extractBefore: async (a) => ret(mapStrArr(a[0], (x) => { const i = x.indexOf(asString(a[1])); return i < 0 ? '' : x.slice(0, i); })),
  extractAfter: async (a) => ret(mapStrArr(a[0], (x) => { const p = asString(a[1]); const i = x.indexOf(p); return i < 0 ? '' : x.slice(i + p.length); })),
  extractBetween: async (a) => { const str = asString(a[0]); const l = asString(a[1]), r = asString(a[2]); const i = str.indexOf(l); if (i < 0) return ret(makeStr('')); const j = str.indexOf(r, i + l.length); return ret(makeStr(j < 0 ? '' : str.slice(i + l.length, j))); },
  matches: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x === p ? 1 : 0; }); return [o]; },

  // ── Batch H: bitwise + legacy string/data (MATLAB v6 reference) ──
  bitand: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) & BigInt(Math.round(y))))),
  bitor: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) | BigInt(Math.round(y))))),
  bitxor: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) ^ BigInt(Math.round(y))))),
  bitshift: async (a) => { const t = typeArg(a.slice(2)); return ret(elementwise(m(a[0]), m(a[1]), (x, k) => { const b = BigInt(Math.round(x)), kk = Math.round(k); const r = Number(kk >= 0 ? b << BigInt(kk) : b >> BigInt(-kk)); return t ? intMask(r, t) : r; })); },
  bitget: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, p) => Number((BigInt(Math.round(x)) >> BigInt(Math.round(p) - 1)) & 1n))),
  bitset: async (a) => {
    const t = typeArg(a.slice(2));
    const valArg = a.slice(2).find((v) => isMat(v) && !(v as Mat).isChar);   // bit value (default 1); a type string is not it
    const V = valArg ? m(valArg) : scalar(1);
    const f = (x: number, p: number, v: number) => { const b = BigInt(Math.round(x)), bit = 1n << BigInt(Math.round(p) - 1); const r = Number(v ? (b | bit) : (b & ~bit)); return t ? intMask(r, t) : r; };
    return ret(broadcast3(m(a[0]), m(a[1]), V, f));
  },
  bitcmp: async (a) => { const ty = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'uint64'; const bits = { uint8: 8, int8: 8, uint16: 16, int16: 16, uint32: 32, int32: 32, uint64: 64, int64: 64 }[ty] ?? 64; const mask = (1n << BigInt(bits)) - 1n; return ret(map(m(a[0]), (x) => Number((~BigInt(Math.round(x))) & mask))); },
  blanks: async (a) => ret(str(' '.repeat(Math.max(0, Math.round(asScalar(a[0])))))),
  findstr: async (a) => { const s1 = asString(a[0]), s2 = asString(a[1]); const [hay, ndl] = s1.length >= s2.length ? [s1, s2] : [s2, s1]; const out: number[] = []; if (ndl.length) { let i = hay.indexOf(ndl); while (i >= 0) { out.push(i + 1); i = hay.indexOf(ndl, i + 1); } } return ret(rowVec(out)); },
  strjust: async (a) => { const s = asString(a[0]); const mode = a.length >= 2 ? asString(a[1]).toLowerCase() : 'right'; const t = s.trim(); const pad = s.length - t.length; if (pad <= 0) return ret(str(t)); if (mode === 'left') return ret(str(t + ' '.repeat(pad))); if (mode === 'center') { const l = Math.floor(pad / 2); return ret(str(' '.repeat(l) + t + ' '.repeat(pad - l))); } return ret(str(' '.repeat(pad) + t)); },
  strvcat: async (a) => { const ss = a.filter((v) => isMat(v) && (v as Mat).isChar).map((v) => asString(v)).filter((s) => s.length > 0); const w = ss.reduce((mx, s) => Math.max(mx, s.length), 0); const rows = ss.length; const M = zeros(rows, w); M.isChar = true; ss.forEach((s, r) => { for (let c = 0; c < w; c++) M.data[r + c * rows] = c < s.length ? s.charCodeAt(c) : 32; }); return ret(M); },
  hist: async (a, n, env) => {
    const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)); const nb = a.length >= 2 && isMat(a[1]) && numel(a[1]) === 1 ? Math.round(asScalar(a[1])) : 10;
    let lo = Math.min(...x), hi = Math.max(...x); if (!Number.isFinite(lo) || lo === hi) { lo = (lo || 0) - 0.5; hi = (hi || 0) + 0.5; }
    const w = (hi - lo) / nb; const centers: number[] = [], counts = new Array(nb).fill(0);
    for (let i = 0; i < nb; i++) centers.push(lo + w * (i + 0.5));
    for (const v of x) { let b = Math.floor((v - lo) / w); if (b < 0) b = 0; if (b >= nb) b = nb - 1; counts[b]++; }
    if (n >= 1) return n >= 2 ? [rowVec(counts), rowVec(centers)] : [rowVec(counts)];
    env.graphics.chart2d([rowVec(centers), rowVec(counts)], 'bar'); return [];
  },
  histc: async (a) => { const x = toArray(m(a[0])); const e = toArray(m(a[1])); const counts = new Array(e.length).fill(0); for (const v of x) { for (let i = 0; i < e.length - 1; i++) if (v >= e[i] && v < e[i + 1]) { counts[i]++; break; } if (v === e[e.length - 1]) counts[e.length - 1]++; } return ret(rowVec(counts)); },
  exist: async (a, _n, env) => { const nm = asString(a[0]); const kind = a.length >= 2 ? asString(a[1]).toLowerCase() : ''; if (kind === 'file' || kind === 'dir') return ret(scalar(env.hasFile(nm) ? 2 : 0)); if (env.workspaceVars().some((v) => v.name === nm)) return ret(scalar(1)); if (nm in BUILTINS || nm in CONSTANTS) return ret(scalar(5)); if (env.hasFile(nm)) return ret(scalar(2)); return ret(scalar(0)); },
  // Error/exception helpers (work with try/catch).
  MException: async (a) => { const id = a.length ? asString(a[0]) : ''; const msg = a.length >= 2 ? sprintf(asString(a[1]), a.slice(2)) : ''; const fields = new Map<string, Value[]>([['identifier', [str(id)]], ['message', [str(msg)]], ['stack', [zeros(0, 0)]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  rethrow: async (a) => { const e = a[0]; const msg = isStruct(e) && e.fields.get('message')?.[0] && isMat(e.fields.get('message')![0]) ? asString(e.fields.get('message')![0]) : 'rethrow: not an error struct'; throw new MatError(msg); },
  throw: async (a) => { const e = a[0]; const msg = isStruct(e) && e.fields.get('message')?.[0] && isMat(e.fields.get('message')![0]) ? asString(e.fields.get('message')![0]) : String(e); throw new MatError(msg); },
  lasterr: async () => ret(str('')),
  lasterror: async () => { const fields = new Map<string, Value[]>([['identifier', [str('')]], ['message', [str('')]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },

  // ── Batch J: language fundamentals (array/char/page/string) ──
  repelem: async (a) => {
    const A = m(a[0]);
    if (a.length === 2 && (A.rows === 1 || A.cols === 1)) {
      const reps = m(a[1]); const v = toArray(A); const out: number[] = [];
      for (let i = 0; i < v.length; i++) { const k = reps.data.length === 1 ? reps.data[0] : reps.data[i]; for (let j = 0; j < k; j++) out.push(v[i]); }
      return ret(A.cols === 1 ? colVec(out) : rowVec(out));
    }
    const rr = Math.round(asScalar(a[1])), cc = a.length >= 3 ? Math.round(asScalar(a[2])) : 1;
    const o = zeros(A.rows * rr, A.cols * cc);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const v = A.data[r + c * A.rows]; for (let dc = 0; dc < cc; dc++) for (let dr = 0; dr < rr; dr++) o.data[(r * rr + dr) + (c * cc + dc) * o.rows] = v; }
    return ret(o);
  },
  topkrows: async (a, n) => {
    const A = m(a[0]); const k = Math.round(asScalar(a[1])); const idx = [...Array(A.rows).keys()];
    idx.sort((p, q) => { for (let c = 0; c < A.cols; c++) { const d = A.data[q + c * A.rows] - A.data[p + c * A.rows]; if (d) return d; } return 0; });
    const sel = idx.slice(0, k); const B = zeros(sel.length, A.cols);
    sel.forEach((src, d) => { for (let c = 0; c < A.cols; c++) B.data[d + c * sel.length] = A.data[src + c * A.rows]; });
    return n >= 2 ? [B, colVec(sel.map((x) => x + 1))] : [B];
  },
  mat2cell: async (a) => {
    const A = m(a[0]); const rs = toArray(m(a[1])).map((x) => Math.round(x)); const cs = a.length >= 3 ? toArray(m(a[2])).map((x) => Math.round(x)) : [A.cols];
    const grid: Mat[][] = []; let r0 = 0;
    for (const rb of rs) { const rowBlocks: Mat[] = []; let c0 = 0; for (const cb of cs) { const blk = zeros(rb, cb); for (let c = 0; c < cb; c++) for (let r = 0; r < rb; r++) blk.data[r + c * rb] = A.data[(r0 + r) + (c0 + c) * A.rows]; rowBlocks.push(blk); c0 += cb; } grid.push(rowBlocks); r0 += rb; }
    const out: Value[] = []; for (let c = 0; c < cs.length; c++) for (let r = 0; r < rs.length; r++) out.push(grid[r][c]);
    return ret(makeCell(rs.length, cs.length, out));
  },
  isletter: async (a) => charPred(a[0], (ch) => /[A-Za-z]/.test(ch)),
  isspace: async (a) => charPred(a[0], (ch) => /\s/.test(ch)),
  isstrprop: async (a) => { const p = asString(a[1]).toLowerCase(); const re: Record<string, RegExp> = { alpha: /[A-Za-z]/, digit: /[0-9]/, alphanum: /[A-Za-z0-9]/, wspace: /\s/, upper: /[A-Z]/, lower: /[a-z]/, punct: /[!-/:-@[-`{-~]/, xdigit: /[0-9A-Fa-f]/ }; const r = re[p] ?? /$^/; return charPred(a[0], (ch) => r.test(ch)); },
  hex2num: async (a) => { const h = asString(a[0]).replace(/\s/g, '').padEnd(16, '0').slice(0, 16); const dv = new DataView(new ArrayBuffer(8)); dv.setBigUint64(0, BigInt('0x' + h)); return ret(scalar(dv.getFloat64(0))); },
  num2hex: async (a) => { const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, asScalar(a[0])); return ret(str(dv.getBigUint64(0).toString(16).padStart(16, '0'))); },
  native2unicode: async (a) => ret(str(toArray(m(a[0])).map((x) => String.fromCharCode(Math.round(x))).join(''))),
  unicode2native: async (a) => ret(rowVec(asString(a[0]).split('').map((c) => c.charCodeAt(0)))),
  // type predicates / introspection
  isobject: async () => ret(bool(false)),
  isjava: async () => ret(bool(false)),
  isenum: async () => ret(bool(false)),
  isgraphics: async (a) => ret(bool(!isMat(a[0]) && (a[0] as { kind?: string }).kind === 'gobj')),
  underlyingType: async (a, n, env) => BUILTINS.class(a, n, env),
  isUnderlyingType: async (a, _n, env) => { const c = await BUILTINS.class([a[0]], 1, env); return ret(bool(asString(c[0]) === asString(a[1]))); },
  function_handle: async (a) => ret(a[0]),
  functions: async (a) => { const h = handle(a[0], 'functions'); const fields = new Map<string, Value[]>([['function', [str(h.name ?? 'anonymous')]], ['type', [str(h.name === 'anonymous' ? 'anonymous' : 'simple')]], ['file', [str('')]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  // page-wise ops (each 2-D page of an N-D array)
  pagetranspose: async (a) => ret(pageTranspose(m(a[0]), false)),
  pagectranspose: async (a) => ret(pageTranspose(m(a[0]), true)),
  pagemtimes: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => matmul(X, Y))),
  pagemldivide: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => mldivide(X, Y))),
  pagemrdivide: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => transpose(mldivide(transpose(Y), transpose(X))))),
  pagesvd: async (a) => {
    const A = m(a[0]); const dims = ndSize(A); const d0 = dims[0], d1 = dims[1], psz = d0 * d1; const np = A.data.length / psz; const k = Math.min(d0, d1);
    const out = new Float64Array(k * np);
    for (let p = 0; p < np; p++) { const { s } = svdReal(mat(d0, d1, A.data.slice(p * psz, p * psz + psz))); for (let i = 0; i < k; i++) out[p * k + i] = s[i]; }
    const rest = dims.slice(2);
    return ret(rest.length ? makeND([k, 1, ...rest], out) : mat(k, 1, out));
  },
  pageinv: async (a) => ret(pageUnary(m(a[0]), (X) => inv(X))),
  pagepinv: async (a) => ret(pageUnary(m(a[0]), (X) => pinvFn(X))),
  pagenorm: async (a) => { const p = a.length >= 2 ? (isMat(a[1]) ? asScalar(a[1]) : (asString(a[1]) === 'fro' ? 'fro' : 2)) : 2; return ret(pageUnary(m(a[0]), (X) => mat(1, 1, new Float64Array([norm(X, p as number | 'fro')])))); },
  pagelsqminnorm: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => matmul(pinvFn(X), Y))),
  linkaxes: async () => [], alpha: async () => [], alphamap: async () => [],
  // string edits
  insertAfter: async (a) => ret(mapStrArr(a[0], (x) => { const p = asString(a[1]); const i = x.indexOf(p); return i < 0 ? x : x.slice(0, i + p.length) + asString(a[2]) + x.slice(i + p.length); })),
  insertBefore: async (a) => ret(mapStrArr(a[0], (x) => { const i = x.indexOf(asString(a[1])); return i < 0 ? x : x.slice(0, i) + asString(a[2]) + x.slice(i); })),
  eraseBetween: async (a) => ret(mapStrArr(a[0], (x) => { const l = asString(a[1]), r = asString(a[2]); const i = x.indexOf(l); if (i < 0) return x; const j = x.indexOf(r, i + l.length); return j < 0 ? x : x.slice(0, i + l.length) + x.slice(j); })),
  replaceBetween: async (a) => ret(mapStrArr(a[0], (x) => { const l = asString(a[1]), r = asString(a[2]); const i = x.indexOf(l); if (i < 0) return x; const j = x.indexOf(r, i + l.length); return j < 0 ? x : x.slice(0, i + l.length) + asString(a[3]) + x.slice(j); })),
  convertStringsToChars: async (a) => ret(isStr(a[0]) ? str(asString(a[0])) : a[0]),
  convertCharsToStrings: async (a) => ret(isMat(a[0]) && (a[0] as Mat).isChar ? makeStr(asString(a[0])) : a[0]),

  // ── Batch I: language utilities (MATLAB v7 reference) ──
  deal: async (a, n) => { const k = Math.max(1, n); if (a.length === 1) return new Array(k).fill(a[0]); return a.slice(0, k); },
  func2str: async (a) => { const h = handle(a[0], 'func2str'); return ret(str(h.name && h.name !== 'anonymous' ? h.name : '@anonymous')); },
  str2func: async (a, _n, env) => { const sstr = asString(a[0]).trim(); return sstr.startsWith('@') ? ret(await env.evalInput(sstr)) : ret(env.makeHandle(sstr.replace(/^@/, ''))); },
  eval: async (a, _n, env) => { const v = await env.evalInput(asString(a[0])); return v === undefined ? [] : ret(v); },
  evalc: async (a, _n, env) => { let buf = ''; const orig = env.output; (env as { output: (t: string) => void }).output = (t) => { buf += t; }; try { await env.evalInput(asString(a[0])); } finally { (env as { output: (t: string) => void }).output = orig; } return ret(str(buf)); },
  inline: async (a, _n, env) => { const expr = asString(a[0]); const vars = a.length >= 2 ? a.slice(1).map((v) => asString(v)) : guessVars(expr); return ret(await env.evalInput(`@(${vars.join(',')}) ${expr}`)); },
  symvar: async (a) => { const vars = isHandle(a[0]) ? [] : guessVars(asString(a[0])); return ret(makeStrArr(vars.length, 1, vars)); },
  vectorize: async (a) => ret(str(asString(a[0]).replace(/(?<![.\\])([*/^])/g, '.$1'))),
  quadv: async (a, n, env) => BUILTINS.quad(a, n, env),
  ldexp: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, e) => x * 2 ** e)),
  scalbn: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, e) => x * 2 ** e)),
  cholupdate: async (a) => {
    const R = m(a[0]); const n = R.rows; const Rd = new Float64Array(R.data); const x = toArray(m(a[1])).slice();
    const sign = a.length >= 3 && asString(a[2]) === '-' ? -1 : 1;
    const at = (i: number, j: number) => Rd[i + j * n]; const set = (i: number, j: number, v: number) => { Rd[i + j * n] = v; };
    for (let k = 0; k < n; k++) {
      const rkk = at(k, k); const r2 = rkk * rkk + sign * x[k] * x[k]; if (r2 < 0) throw new MatError('cholupdate: downdate would make the matrix not positive definite');
      const r = Math.sqrt(r2); const c = r / rkk, s = x[k] / rkk; set(k, k, r);
      for (let j = k + 1; j < n; j++) { const nv = (at(k, j) + sign * s * x[j]) / c; set(k, j, nv); x[j] = c * x[j] - s * nv; }
    }
    return ret(mat(n, n, Rd));
  },
  stream2: async (a) => { const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar); const seg = streamlines2(ms[0], ms[1], ms[2], ms[3], toArray(ms[4]), toArray(ms[5])); return ret(splitStreamCell(seg.x, seg.y)); },
  stream3: async (a) => { const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar); const seg = streamlines3(ms[0], ms[1], ms[2], ms[3], ms[4], ms[5], toArray(ms[6]), toArray(ms[7]), toArray(ms[8])); return ret(splitStreamCell(seg.x, seg.y, seg.z)); },
  assert: async (a) => {
    if (truthy(a[0])) return [];
    // assert(cond, msg, A1, A2, ...) → message is sprintf-formatted with the extra args.
    if (a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar))) {
      throw new MatError(a.length > 2 ? sprintf(asString(a[1]), a.slice(2)) : asString(a[1]));
    }
    throw new MatError('Assertion failed.');
  },
  narginchk: async () => [], nargoutchk: async () => [], nargchk: async () => ret(str('')),
  validateattributes: async () => [],
  // ── arguments-block validators (mustBe*) — error on violation, else no output ──
  mustBePositive: async (a) => mustBeNum(a[0], (x) => x > 0, 'must be positive'),
  mustBeNonnegative: async (a) => mustBeNum(a[0], (x) => x >= 0, 'must be nonnegative'),
  mustBeNegative: async (a) => mustBeNum(a[0], (x) => x < 0, 'must be negative'),
  mustBeNonpositive: async (a) => mustBeNum(a[0], (x) => x <= 0, 'must be nonpositive'),
  mustBeNonzero: async (a) => mustBeNum(a[0], (x) => x !== 0, 'must be nonzero'),
  mustBeFinite: async (a) => mustBeNum(a[0], (x) => Number.isFinite(x), 'must be finite'),
  mustBeNonNan: async (a) => mustBeNum(a[0], (x) => !Number.isNaN(x), 'must be non-NaN'),
  mustBeInteger: async (a) => mustBeNum(a[0], (x) => Number.isInteger(x), 'must be integer'),
  mustBeReal: async (a) => { const M = m(a[0]); if (M.idata && M.idata.some((v) => v !== 0)) throw new MatError('Value must be real.'); return []; },
  mustBeNumeric: async (a) => { if (!isMat(a[0])) throw new MatError('Value must be numeric.'); return []; },
  mustBeNumericOrLogical: async (a) => { if (!isMat(a[0])) throw new MatError('Value must be numeric or logical.'); return []; },
  mustBeFloat: async (a) => { if (!isMat(a[0])) throw new MatError('Value must be a float.'); return []; },
  mustBeNonempty: async (a) => { if (isEmpty(a[0] as Mat)) throw new MatError('Value must not be empty.'); return []; },
  mustBeGreaterThan: async (a) => mustBeNum(a[0], (x) => x > asScalar(a[1]), `must be greater than ${asScalar(a[1])}`),
  mustBeLessThan: async (a) => mustBeNum(a[0], (x) => x < asScalar(a[1]), `must be less than ${asScalar(a[1])}`),
  mustBeGreaterThanOrEqual: async (a) => mustBeNum(a[0], (x) => x >= asScalar(a[1]), `must be >= ${asScalar(a[1])}`),
  mustBeLessThanOrEqual: async (a) => mustBeNum(a[0], (x) => x <= asScalar(a[1]), `must be <= ${asScalar(a[1])}`),
  mustBeInRange: async (a) => { const lo = asScalar(a[1]), hi = asScalar(a[2]); return mustBeNum(a[0], (x) => x >= lo && x <= hi, `must be in range [${lo}, ${hi}]`); },
  mustBeMember: async (a) => { const set = new Set(toArray(m(a[1]))); return mustBeNum(a[0], (x) => set.has(x), 'must be a member of the allowed set'); },
  mustBeVector: async (a) => { const M = m(a[0]); if (M.rows !== 1 && M.cols !== 1) throw new MatError('Value must be a vector.'); return []; },
  mustBeMatrix: async (a) => { dimsOf(a[0]); return []; },
  mustBeScalarOrEmpty: async (a) => { const M = m(a[0]); if (!isEmpty(M) && numel(M) !== 1) throw new MatError('Value must be scalar or empty.'); return []; },
  mustBeColumn: async (a) => { const M = m(a[0]); if (M.cols !== 1) throw new MatError('Value must be a column vector.'); return []; },
  mustBeRow: async (a) => { const M = m(a[0]); if (M.rows !== 1) throw new MatError('Value must be a row vector.'); return []; },
  mustBeSorted: async (a) => { const v = toArray(m(a[0])); for (let i = 1; i < v.length; i++) if (v[i] < v[i - 1]) throw new MatError('Value must be sorted in ascending order.'); return []; },
  mustBeText: async (a) => { if (!isStr(a[0]) && !isCell(a[0]) && !(isMat(a[0]) && (a[0] as Mat).isChar)) throw new MatError('Value must be text.'); return []; },
  mustBeTextScalar: async (a) => { if (!(isStr(a[0]) || (isMat(a[0]) && (a[0] as Mat).isChar))) throw new MatError('Value must be a single piece of text.'); return []; },
  mustBeNonzeroLengthText: async (a) => { const s = asString(a[0]); if (s.length === 0) throw new MatError('Value must be text with one or more characters.'); return []; },
  // ── path-string utilities (no real filesystem; pure string manipulation) ──
  filesep: async () => ret(str('/')),
  pathsep: async () => ret(str(':')),
  fullfile: async (a) => ret(str(a.map((x) => asString(x)).filter((s) => s.length).join('/').replace(/\/+/g, '/'))),
  fileparts: async (a, n) => { const p = asString(a[0]); const slash = p.lastIndexOf('/'); const dir = slash >= 0 ? p.slice(0, slash) : ''; const base = slash >= 0 ? p.slice(slash + 1) : p; const dot = base.lastIndexOf('.'); const name = dot > 0 ? base.slice(0, dot) : base; const ext = dot > 0 ? base.slice(dot) : ''; return n >= 2 ? [str(dir), str(name), str(ext)] : [str(dir)]; },
  cputime: async () => ret(scalar((typeof performance !== 'undefined' ? performance.now() : Date.now()) / 1000)),
  beep: async () => [],
  inputname: async () => ret(str('')),
  isvarname: async (a) => { const s = isMat(a[0]) && (a[0] as Mat).isChar ? asString(a[0]) : ''; const KW = new Set(['for', 'while', 'if', 'else', 'elseif', 'end', 'switch', 'case', 'otherwise', 'function', 'return', 'break', 'continue', 'global', 'persistent', 'try', 'catch']); return ret(bool(/^[A-Za-z][A-Za-z0-9_]*$/.test(s) && s.length <= 63 && !KW.has(s))); },
  genvarname: async (a) => { let s = asString(a[0]).replace(/[^A-Za-z0-9_]/g, '_'); if (!/^[A-Za-z]/.test(s)) s = 'x' + s; return ret(str(s || 'x')); },
  colon: async (a) => { const from = asScalar(a[0]); const step = a.length >= 3 ? asScalar(a[1]) : 1; const to = a.length >= 3 ? asScalar(a[2]) : asScalar(a[1]); const out: number[] = []; if (step > 0) for (let v = from; v <= to + 1e-12; v += step) out.push(v); else if (step < 0) for (let v = from; v >= to - 1e-12; v += step) out.push(v); return ret(rowVec(out)); },
  flipdim: async (a) => { const A = m(a[0]); const dim = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const o = zeros(A.rows, A.cols); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) o.data[r + c * A.rows] = dim === 1 ? A.data[(A.rows - 1 - r) + c * A.rows] : A.data[r + (A.cols - 1 - c) * A.rows]; if (A.isChar) o.isChar = true; return ret(o); },
  condeig: async (a) => {
    const A = m(a[0]); const N = A.rows; const { D, V } = generalEig(A, true); const Vm = V!;
    // normalize eigenvector columns, then c_i = ||row i of inv(V)||
    const Vn = mat(N, N, Float64Array.from(Vm.data)); if (Vm.idata) Vn.idata = Float64Array.from(Vm.idata);
    for (let c = 0; c < N; c++) { let nr = 0; for (let r = 0; r < N; r++) nr += Vn.data[r + c * N] ** 2 + (Vn.idata ? Vn.idata[r + c * N] ** 2 : 0); nr = Math.sqrt(nr) || 1; for (let r = 0; r < N; r++) { Vn.data[r + c * N] /= nr; if (Vn.idata) Vn.idata[r + c * N] /= nr; } }
    const W = inv(Vn); const s = zeros(N, 1);
    for (let i = 0; i < N; i++) { let nr = 0; for (let j = 0; j < N; j++) nr += W.data[i + j * N] ** 2 + (W.idata ? W.idata[i + j * N] ** 2 : 0); s.data[i] = Math.sqrt(nr); }
    void D; return ret(s);
  },
  polyeig: async (a, n) => {
    // (A0 + λ A1 + ... + λ^p Ap) x = 0 via block-companion linearization → generalized eig.
    const mats = a.map((v) => m(v)); const p = mats.length - 1; const N = mats[0].rows;
    if (p === 0) throw new MatError('polyeig: need at least two coefficient matrices');
    const Ap = mats[p]; const np = N * p;
    const Acomp = zeros(np, np), Bcomp = zeros(np, np);
    // First block row: [-A0 -A1 ... -A_{p-1}]; identity sub-diagonal blocks.
    for (let j = 0; j < p; j++) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) Acomp.data[r + (j * N + c) * np] = -mats[p - 1 - j].data[r + c * N];
    for (let b = 1; b < p; b++) for (let r = 0; r < N; r++) Acomp.data[(b * N + r) + ((b - 1) * N + r) * np] = 1;
    // B: top-left block = Ap; identity on the lower diagonal blocks.
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) Bcomp.data[r + c * np] = Ap.data[r + c * N];
    for (let b = 1; b < p; b++) for (let r = 0; r < N; r++) Bcomp.data[(b * N + r) + (b * N + r) * np] = 1;
    const C = mldivide(Bcomp, Acomp); const { D } = generalEig(C, false);
    void n; return ret(finishComplex(np, 1, Float64Array.from(D.re), Float64Array.from(D.im)));
  },

  // ── Batch G: stats / preprocessing / misc numeric ──
  rms: async (a) => ret(colReduce(m(a[0]), (c) => Math.sqrt(c.reduce((s, x) => s + x * x, 0) / c.length))),
  geomean: async (a) => ret(colReduce(m(a[0]), (c) => Math.exp(c.reduce((s, x) => s + Math.log(x), 0) / c.length))),
  harmmean: async (a) => ret(colReduce(m(a[0]), (c) => c.length / c.reduce((s, x) => s + 1 / x, 0))),
  movmad: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => { const med = medianOf(w); return medianOf(w.map((x) => Math.abs(x - med))); })),
  movprod: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s * x, 1))),
  movstd: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.sqrt(variance(w)))),
  movvar: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), variance)),
  mape: async (a) => { const F = toArray(m(a[0])), A = toArray(m(a[1])); let s = 0; for (let i = 0; i < F.length; i++) s += Math.abs((F[i] - A[i]) / A[i]); return ret(scalar(100 * s / F.length)); },
  rmse: async (a) => { const F = toArray(m(a[0])), A = toArray(m(a[1])); let s = 0; for (let i = 0; i < F.length; i++) s += (F[i] - A[i]) ** 2; return ret(scalar(Math.sqrt(s / F.length))); },

  // missing-value handling (NaN convention)
  ismissing: async (a) => { const A = m(a[0]); return [{ ...map(A, (x) => (Number.isNaN(x) ? 1 : 0)), isBool: true }]; },
  anymissing: async (a) => {
    const v = a[0];
    // Missing value depends on type: NaN/NaT (numeric/datetime), "" / <missing> (string),
    // <undefined> (categorical), and any missing in a cell's contents or a table's variables.
    if (isStr(v)) return ret(bool(v.items.some((s) => s === '')));
    if (v.kind === 'categorical') return ret(bool(Array.from(v.codes).some((c) => c === 0)));
    if (isCell(v)) return ret(bool(v.items.some((it) => (isMat(it) && it.isChar ? asString(it) === '' : isMat(it) && toArray(it).some(Number.isNaN)))));
    if (v.kind === 'table') return ret(bool(v.cols.some((col) => (isStr(col) ? col.items.some((s) => s === '') : isMat(col) ? toArray(col).some(Number.isNaN) : false))));
    if (isTemporal(v)) return ret(bool(Array.from(v.data).some(Number.isNaN)));
    return ret(bool(toArray(m(v)).some((x) => Number.isNaN(x))));
  },
  standardizeMissing: async (a) => { const A = m(a[0]); const vals = new Set(toArray(m(a[1]))); return ret(map(A, (x) => (vals.has(x) ? NaN : x))); },
  rmmissing: async (a) => {
    const A = m(a[0]);
    if (A.rows === 1 || A.cols === 1) return ret(A.rows === 1 ? rowVec(toArray(A).filter((x) => !Number.isNaN(x))) : colVec(toArray(A).filter((x) => !Number.isNaN(x))));
    const keep: number[] = []; for (let r = 0; r < A.rows; r++) { let ok = true; for (let c = 0; c < A.cols; c++) if (Number.isNaN(A.data[r + c * A.rows])) { ok = false; break; } if (ok) keep.push(r); }
    const o = zeros(keep.length, A.cols); keep.forEach((r, i) => { for (let c = 0; c < A.cols; c++) o.data[i + c * keep.length] = A.data[r + c * A.rows]; }); return ret(o);
  },
  fillmissing: async (a) => {
    const A = m(a[0]); const method = isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]).toLowerCase() : 'constant';
    const fill = method === 'constant' ? asScalar(a[a.length - 1]) : 0;
    return ret(colMap(A, (c) => fillVec(c, method, fill)));
  },
  isbetween: async (a) => { const A = m(a[0]); const lo = asScalar(a[1]), hi = asScalar(a[2]); return [{ ...map(A, (x) => (x >= lo && x <= hi ? 1 : 0)), isBool: true }]; },
  isuniform: async (a, n) => { const v = toArray(m(a[0])); if (v.length < 2) return n >= 2 ? [bool(true), scalar(0)] : [bool(true)]; const step = v[1] - v[0]; let ok = true; for (let i = 2; i < v.length; i++) if (Math.abs((v[i] - v[i - 1]) - step) > 1e-12 * (1 + Math.abs(step))) { ok = false; break; } return n >= 2 ? [bool(ok), scalar(ok ? step : NaN)] : [bool(ok)]; },
  allunique: async (a) => {
    // String arrays: compare by text. NaN/missing are each treated as unique.
    if (isStr(a[0])) { const items = a[0].items; const seen = new Set<string>(); for (const s of items) { if (seen.has(s)) return ret(bool(false)); seen.add(s); } return ret(bool(true)); }
    const M = m(a[0]);
    const byRows = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) && asString(a[1]).toLowerCase() === 'rows';
    if (byRows) { const seen = new Set<string>(); for (const r of matRows(M)) { const k = r.join(','); if (k.includes('NaN')) continue; if (seen.has(k)) return ret(bool(false)); seen.add(k); } return ret(bool(true)); }
    const v = toArray(M); const seen = new Set<number>();
    for (const x of v) { if (Number.isNaN(x)) continue; if (seen.has(x)) return ret(bool(false)); seen.add(x); }
    return ret(bool(true));
  },
  numunique: async (a) => ret(scalar(new Set(toArray(m(a[0]))).size)),
  uniquetol: async (a) => {
    const v = [...toArray(m(a[0]))].sort((x, y) => x - y); const tol = a.length >= 2 ? asScalar(a[1]) : 1e-6;
    const scale = Math.max(1, ...v.map(Math.abs)); const out: number[] = [];
    for (const x of v) if (!out.length || Math.abs(x - out[out.length - 1]) > tol * scale) out.push(x);
    return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out));
  },
  ismembertol: async (a) => { const A = m(a[0]); const B = toArray(m(a[1])); const tol = a.length >= 3 ? asScalar(a[2]) : 1e-6; const scale = Math.max(1, ...B.map(Math.abs), ...toArray(A).map(Math.abs)); return [{ ...map(A, (x) => (B.some((b) => Math.abs(x - b) <= tol * scale) ? 1 : 0)), isBool: true }]; },
  issortedrows: async (a) => { const A = m(a[0]); for (let r = 1; r < A.rows; r++) { for (let c = 0; c < A.cols; c++) { const prev = A.data[(r - 1) + c * A.rows], cur = A.data[r + c * A.rows]; if (cur > prev) break; if (cur < prev) return ret(bool(false)); } } return ret(bool(true)); },
  paddata: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); const out = v.slice(); while (out.length < nn) out.push(0); return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out)); },
  trimdata: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); return ret(m(a[0]).rows === 1 ? rowVec(v.slice(0, nn)) : colVec(v.slice(0, nn))); },
  resize: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); const out = v.slice(0, nn); while (out.length < nn) out.push(0); return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out)); },
  discretize: async (a) => { const A = m(a[0]); const edges = toArray(m(a[1])); return ret(map(A, (x) => { if (x < edges[0] || x > edges[edges.length - 1]) return NaN; for (let i = 0; i < edges.length - 1; i++) if (x >= edges[i] && (x < edges[i + 1] || (i === edges.length - 2 && x === edges[i + 1]))) return i + 1; return NaN; })); },

  // linear algebra / math additions
  sylvester: async (a) => ret(sylvesterSolve(m(a[0]), m(a[1]), m(a[2]))),
  lsqminnorm: async (a) => ret(matmul(pinvFn(m(a[0])), m(a[1]))),
  expmv: async (a) => ret(matmul(expmFn(m(a[0])), m(a[1]))),
  idivide: async (a) => { const op = a.length >= 3 ? asString(a[2]).toLowerCase() : 'fix'; const rnd = op === 'floor' ? Math.floor : op === 'ceil' ? Math.ceil : op === 'round' ? Math.round : Math.trunc; return ret(elementwise(m(a[0]), m(a[1]), (x, y) => rnd(x / y))); },
  polydiv: async (a, n) => { const [q, r] = polyDivide(toArray(m(a[0])), toArray(m(a[1]))); return n >= 2 ? [rowVec(q), rowVec(r)] : [rowVec(q)]; },
  ordeig: async (a) => { const e = schurEigFn(m(a[0])); return ret(finishComplex(e.re.length, 1, Float64Array.from(e.re), Float64Array.from(e.im))); },
  betaincinv: async (a) => { const p = asScalar(a[0]), aa = asScalar(a[1]), bb = asScalar(a[2]); return ret(scalar(invMonotone((x) => betainc(x, aa, bb), p, 0, 1))); },
  gammaincinv: async (a) => { const p = asScalar(a[0]), aa = asScalar(a[1]); return ret(scalar(invMonotone((x) => gammainc(x, aa), p, 0, aa + 10 * Math.sqrt(aa) + 20))); },
  rosser: async () => ret(rosserMat()),
  rng: async (a) => { if (!a.length) { rngGen = null; return []; } const x = a[0]; if (isMat(x) && !(x as Mat).isChar) rngGen = mulberry32(Math.round(asScalar(x))); else { const s = asString(x); rngGen = s === 'shuffle' ? mulberry32(Date.now() >>> 0) : mulberry32(0); } return []; },
  convn: async (a) => { const A = m(a[0]), B = m(a[1]); if ((A.rows === 1 || A.cols === 1) && (B.rows === 1 || B.cols === 1)) { const u = toArray(A), v = toArray(B); const w = new Array(Math.max(0, u.length + v.length - 1)).fill(0); for (let i = 0; i < u.length; i++) for (let j = 0; j < v.length; j++) w[i + j] += u[i] * v[j]; return ret(A.cols === 1 ? colVec(w) : rowVec(w)); } return ret(conv2Shape(A, B, 'full')); },
  optimset: async (a) => { const fields = new Map<string, Value[]>(); const start = a.length && isStruct(a[0]) ? 1 : 0; if (start) for (const [k, v] of (a[0] as StructV).fields) fields.set(k, v.slice()); for (let i = start; i + 1 < a.length; i += 2) fields.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  optimget: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('optimget: first argument must be an options struct'); const v = S.fields.get(asString(a[1])); return ret(v && v.length ? v[0] : zeros(0, 0)); },
  quad2d: async (a, _n, env) => BUILTINS.integral2(a, 1, env),

  // sparse / iterative aliases
  lsqr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  minres: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  tfqmr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  bicgstabl: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  symmlq: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  spfun: async (a, _n, env) => { const f = handle(a[0], 'spfun'); const S = asSparse(a[1]); const out = new Float64Array(S.values.length); for (let i = 0; i < S.values.length; i++) { const r = await env.callHandle(f, [scalar(S.values[i])], 1); out[i] = asScalar(r[0]); } return ret({ kind: 'sparse', rows: S.rows, cols: S.cols, colptr: S.colptr.slice(), rowind: S.rowind.slice(), values: out } as Sparse); },
  sprank: async (a) => ret(scalar(rankOf(sparseToDense(asSparse(a[0]))))),
  colperm: async (a) => { const S = asSparse(a[0]); const cnt = Array.from({ length: S.cols }, (_, j) => ({ j, n: S.colptr[j + 1] - S.colptr[j] })); cnt.sort((x, y) => x.n - y.n); return ret(rowVec(cnt.map((c) => c.j + 1))); },

  // ═════════ NUMERICAL METHODS — ODE · BVP · INTERP · OPTIMIZATION ═════════
  trapz: async (a) => {
    let x: number[], y: number[];
    if (a.length >= 2) { x = toArray(m(a[0])); y = toArray(m(a[1])); } else { y = toArray(m(a[0])); x = y.map((_, i) => i + 1); }
    let s = 0; for (let i = 1; i < y.length; i++) s += (x[i] - x[i - 1]) * (y[i] + y[i - 1]) / 2;
    return ret(scalar(s));
  },
  gradient: async (a) => {
    if (isSym(a[0])) { const s = a[0]; const vars = a.length >= 2 ? symNames(a[1]) : symVarsOf(s); return ret(makeSym(vars.length, 1, vars.map((vn) => simplifyExpr(diffExpr(s.exprs[0], vn))))); }
    const y = toArray(m(a[0])); const h = a.length >= 2 ? asScalar(a[1]) : 1; const n = y.length; const g: number[] = [];
    for (let i = 0; i < n; i++) { if (i === 0) g.push((y[1] - y[0]) / h); else if (i === n - 1) g.push((y[n - 1] - y[n - 2]) / h); else g.push((y[i + 1] - y[i - 1]) / (2 * h)); }
    return ret(m(a[0]).cols === 1 ? colVec(g) : rowVec(g));
  },
  integral: async (a, _n, env) => {
    const f = handle(a[0], 'integral'); const lo = asScalar(a[1]), hi = asScalar(a[2]);
    const F = async (x: number) => callScalar(env, f, x);
    const simpson = async (x0: number, x2: number, f0: number, f1: number, f2: number, whole: number, depth: number): Promise<number> => {
      const x1 = (x0 + x2) / 2; const xa = (x0 + x1) / 2, xb = (x1 + x2) / 2;
      const fa = await F(xa), fb = await F(xb);
      const left = (x1 - x0) / 6 * (f0 + 4 * fa + f1), right = (x2 - x1) / 6 * (f1 + 4 * fb + f2);
      if (depth <= 0 || Math.abs(left + right - whole) < 1e-10) return left + right + (left + right - whole) / 15;
      return (await simpson(x0, x1, f0, fa, f1, left, depth - 1)) + (await simpson(x1, x2, f1, fb, f2, right, depth - 1));
    };
    const f0 = await F(lo), f2 = await F(hi), fm = await F((lo + hi) / 2);
    const whole = (hi - lo) / 6 * (f0 + 4 * fm + f2);
    return ret(scalar(await simpson(lo, hi, f0, fm, f2, whole, 50)));
  },
  fzero: async (a, _n, env) => {
    const f = handle(a[0], 'fzero'); const F = (x: number) => callScalar(env, f, x);
    let alo: number, ahi: number;
    const x0 = m(a[1]);
    if (numel(x0) >= 2) { alo = x0.data[0]; ahi = x0.data[1]; }
    else { const x = x0.data[0]; const f0 = await F(x); if (f0 === 0) return ret(scalar(x)); let dx = Math.abs(x) * 0.02 || 0.02; alo = x; ahi = x; let found = false; for (let i = 0; i < 60; i++) { dx *= 1.6; if (await F(x - dx) * f0 < 0) { alo = x - dx; ahi = x; found = true; break; } if (await F(x + dx) * f0 < 0) { alo = x; ahi = x + dx; found = true; break; } } if (!found) throw new MatError('fzero: could not bracket a sign change'); }
    let flo = await F(alo), fhi = await F(ahi);
    if (flo * fhi > 0) throw new MatError('fzero: function values at interval endpoints must differ in sign');
    for (let i = 0; i < 200; i++) { const mid = (alo + ahi) / 2; const fm = await F(mid); if (Math.abs(fm) < 1e-14 || (ahi - alo) / 2 < 1e-14) return ret(scalar(mid)); if (flo * fm < 0) { ahi = mid; fhi = fm; } else { alo = mid; flo = fm; } }
    return ret(scalar((alo + ahi) / 2));
  },
  fminbnd: async (a, _n, env) => {
    const f = handle(a[0], 'fminbnd'); const F = (x: number) => callScalar(env, f, x);
    let lo = asScalar(a[1]), hi = asScalar(a[2]); const gr = (Math.sqrt(5) - 1) / 2;
    let x1 = hi - gr * (hi - lo), x2 = lo + gr * (hi - lo); let f1 = await F(x1), f2 = await F(x2);
    for (let i = 0; i < 200 && hi - lo > 1e-10; i++) { if (f1 < f2) { hi = x2; x2 = x1; f2 = f1; x1 = hi - gr * (hi - lo); f1 = await F(x1); } else { lo = x1; x1 = x2; f1 = f2; x2 = lo + gr * (hi - lo); f2 = await F(x2); } }
    return ret(scalar((lo + hi) / 2));
  },
  fminsearch: async (a, _n, env) => {
    const f = handle(a[0], 'fminsearch'); const x0 = toArray(m(a[1])); const n = x0.length;
    const F = async (v: number[]) => { const r = await env.callHandle(f, [colVec(v)], 1); return r.length && isMat(r[0]) ? asScalar(r[0]) : NaN; };
    const simplex: number[][] = [x0.slice()]; for (let i = 0; i < n; i++) { const p = x0.slice(); p[i] += (p[i] !== 0 ? 0.05 * p[i] : 0.00025); simplex.push(p); }
    let fv = await Promise.all(simplex.map(F));
    const add = (p: number[], q: number[], s: number) => p.map((v, i) => v + s * q[i]);
    const sub = (p: number[], q: number[]) => p.map((v, i) => v - q[i]);
    for (let iter = 0; iter < 200 * n; iter++) {
      const ord = fv.map((_, i) => i).sort((i, j) => fv[i] - fv[j]);
      const s2 = ord.map((i) => simplex[i]); const fv2 = ord.map((i) => fv[i]);
      for (let i = 0; i <= n; i++) { simplex[i] = s2[i]; fv[i] = fv2[i]; }
      if (Math.abs(fv[n] - fv[0]) < 1e-10) break;
      const cen = new Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) cen[j] += simplex[i][j] / n;
      const xr = add(cen, sub(cen, simplex[n]), 1); const fr = await F(xr);
      if (fr < fv[0]) { const xe = add(cen, sub(cen, simplex[n]), 2); const fe = await F(xe); if (fe < fr) { simplex[n] = xe; fv[n] = fe; } else { simplex[n] = xr; fv[n] = fr; } }
      else if (fr < fv[n - 1]) { simplex[n] = xr; fv[n] = fr; }
      else { const xc = add(cen, sub(simplex[n], cen), 0.5); const fc = await F(xc); if (fc < fv[n]) { simplex[n] = xc; fv[n] = fc; } else { for (let i = 1; i <= n; i++) { simplex[i] = add(simplex[0], sub(simplex[i], simplex[0]), 0.5); fv[i] = await F(simplex[i]); } } }
    }
    let bi = 0; for (let i = 1; i <= n; i++) if (fv[i] < fv[bi]) bi = i;
    return ret(m(a[1]).rows === 1 ? rowVec(simplex[bi]) : colVec(simplex[bi]));
  },
  interp1: async (a) => {
    const x = toArray(m(a[0])), v = toArray(m(a[1])), xq = m(a[2]); const method = a.length >= 4 ? asString(a[3]) : 'linear';
    const interp = (q: number) => {
      if (q <= x[0]) return method === 'nearest' ? v[0] : v[0] + (v[1] - v[0]) * (q - x[0]) / (x[1] - x[0]);
      let i = 0; while (i < x.length - 2 && q > x[i + 1]) i++;
      if (method === 'nearest') return Math.abs(q - x[i]) <= Math.abs(q - x[i + 1]) ? v[i] : v[i + 1];
      return v[i] + (v[i + 1] - v[i]) * (q - x[i]) / (x[i + 1] - x[i]);
    };
    return ret(map(xq, interp));
  },
  spline: async (a) => {
    const x = toArray(m(a[0])), y = toArray(m(a[1])); const C = splineCoefs(x, y); const L = x.length - 1;
    if (a.length < 3) return ret(makePP(x, C));
    const at = (q: number) => { let i = 0; while (i < L - 1 && q >= x[i + 1]) i++; const t = q - x[i]; let v = 0; for (let j = 0; j < 4; j++) v = v * t + C.data[i + j * L]; return v; };
    return ret(map(m(a[2]), at));
  },
  roots: async (a) => { const { re, im } = durandKerner(toArray(m(a[0]))); return ret(finishComplex(re.length, 1, Float64Array.from(re), Float64Array.from(im))); },
  ode45: async (a, n, env) => odeSolve(a, n, env),
  ode78: async (a, n, env) => odeSolve(a, n, env),
  ode89: async (a, n, env) => odeSolve(a, n, env),
  ode113: async (a, n, env) => odeSolve(a, n, env),
  ode23: async (a, n, env) => odeSolveBS23(a, n, env),
  ode15s: async (a, n, env) => odeSolveNDF(a, n, env),
  ode23s: async (a, n, env) => odeSolveRos23(a, n, env),
  ode23t: async (a, n, env) => odeSolveNDF(a, n, env),
  ode23tb: async (a, n, env) => odeSolveRos23(a, n, env),
  pdepe: async (a, _n, env) => pdepeSolve(a, env),
  bvp4c: async (a, _n, env) => bvp4cSolve(a, env),
  bvp5c: async (a, _n, env) => bvp4cSolve(a, env),
  bvpinit: async (a, _n, env) => {
    const x = toArray(m(a[0]));
    let Y: Mat;
    if (isHandle(a[1])) { const rows: number[][] = []; for (const xi of x) rows.push(toArray(m((await env.callHandle(a[1] as Handle, [scalar(xi)], 1))[0]))); const neq = rows[0].length; Y = zeros(neq, x.length); for (let i = 0; i < x.length; i++) for (let k = 0; k < neq; k++) Y.data[k + i * neq] = rows[i][k]; }
    else { const yc = toArray(m(a[1])); const neq = yc.length; Y = zeros(neq, x.length); for (let i = 0; i < x.length; i++) for (let k = 0; k < neq; k++) Y.data[k + i * neq] = yc[k]; }
    return ret(mkStruct([['x', rowVec(x)], ['y', Y]]));
  },
  bvpset: async (a) => { const f = new Map<string, Value[]>(); for (let i = 0; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  bvpget: async (a) => { const s = a[0] as StructV; const v = isStruct(s) ? s.fields.get(asString(a[1])) : undefined; return ret(v && v.length ? v[0] : zeros(0, 0)); },
  ode15i: async (a, n, env) => ode15iSolve(a, n, env),
  decic: async (a, n, env) => {
    const odefun = handle(a[0], 'decic'); const t0 = asScalar(a[1]); const y0 = toArray(m(a[2])); const yp0 = a.length >= 5 ? toArray(m(a[4])) : new Array(y0.length).fill(0);
    const neq = y0.length; const yp = yp0.slice();
    const F = async (p: number[]) => toArray(m((await env.callHandle(odefun, [scalar(t0), colVec(y0), colVec(p)], 1))[0]));
    for (let it = 0; it < 20; it++) { const G = await F(yp); let nrm = 0; for (const v of G) nrm += v * v; if (Math.sqrt(nrm) < 1e-12) break; const J = zeros(neq, neq); for (let j = 0; j < neq; j++) { const pp = yp.slice(); const dd = 1e-7 * Math.max(1, Math.abs(yp[j])); pp[j] += dd; const Gp = await F(pp); for (let i = 0; i < neq; i++) J.data[i + j * neq] = (Gp[i] - G[i]) / dd; } const dq = mldivide(J, colVec(G)); for (let i = 0; i < neq; i++) yp[i] -= dq.data[i]; }
    return n >= 2 ? [colVec(y0), colVec(yp)] : [colVec(y0)];
  },
  odextend: async (a) => ret(a[0]),
  bvpxtend: async (a) => { const sol = a[0] as StructV; const xnew = asScalar(a[1]); const xs = toArray(m(sol.fields.get('x')![0])); const Y = m(sol.fields.get('y')![0]); const neq = Y.rows; const ynew = a.length >= 3 ? toArray(m(a[2])) : Array.from({ length: neq }, (_, k) => Y.data[k + (Y.cols - 1) * neq]); const nx = [...xs, xnew]; const Y2 = zeros(neq, nx.length); for (let c = 0; c < Y.cols; c++) for (let r = 0; r < neq; r++) Y2.data[r + c * neq] = Y.data[r + c * neq]; for (let r = 0; r < neq; r++) Y2.data[r + (nx.length - 1) * neq] = ynew[r]; return ret(mkStruct([['x', rowVec(nx)], ['y', Y2]])); },
  equilibrate: async (a, n) => {
    const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]); const nn = A.rows; const R = zeros(nn, nn), C = zeros(nn, nn), P = zeros(nn, nn);
    for (let i = 0; i < nn; i++) { let rn = 0; for (let j = 0; j < nn; j++) rn = Math.max(rn, Math.abs(A.data[i + j * nn])); R.data[i + i * nn] = rn ? 1 / Math.sqrt(rn) : 1; P.data[i + i * nn] = 1; }
    for (let j = 0; j < nn; j++) { let cn = 0; for (let i = 0; i < nn; i++) cn = Math.max(cn, Math.abs(A.data[i + j * nn]) * R.data[i + i * nn]); C.data[j + j * nn] = cn ? 1 / Math.sqrt(cn) : 1; }
    return n >= 3 ? [denseToSparse(P), denseToSparse(R), denseToSparse(C)] : n >= 2 ? [denseToSparse(P), denseToSparse(R)] : [denseToSparse(R)];
  },
  dissect: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  symbfact: async (a) => ret(colVec(symbolicCholCounts(asSparse(a[0])))),
  dde23: async (a, _n, env) => dde23Solve(a, env),
  ddesd: async (a, _n, env) => dde23Solve(a, env),
  ddensd: async (a, _n, env) => dde23Solve(a, env),
  ddeset: async (a) => { const f = new Map<string, Value[]>(); for (let i = 0; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  ddeget: async (a) => { const s = a[0] as StructV; const v = isStruct(s) ? s.fields.get(asString(a[1])) : undefined; return ret(v && v.length ? v[0] : zeros(0, 0)); },
  // ── Dates & times (serial date numbers) ──
  datenum: async (a) => {
    if (isTemporal(a[0])) { const t = a[0]; return ret(mat(t.rows, t.cols, new Float64Array(t.data))); }
    // datenum("2022-01-01") / datenum('01-Jan-2022 12:00:00'): parse a date string.
    if ((isStr(a[0]) || (isMat(a[0]) && (a[0] as Mat).isChar)) && a.length <= 2) {
      const parse1 = (s: string) => { const d = new Date(s.trim()); if (Number.isNaN(+d)) throw new MatError(`datenum: could not parse date "${s}"`); return d.getTime() / 86400000 + 719529; };
      if (isStr(a[0]) && a[0].items.length > 1) return ret(colVec(a[0].items.map(parse1)));
      return ret(scalar(parse1(asString(a[0]))));
    }
    if (a.length === 1) { const M = m(a[0]); if (M.cols >= 3 && M.rows >= 1) { const o = zeros(M.rows, 1); for (let r = 0; r < M.rows; r++) { const v = Array.from({ length: M.cols }, (_, c) => M.data[r + c * M.rows]); o.data[r] = dnum(v[0], v[1], v[2], v[3] ?? 0, v[4] ?? 0, v[5] ?? 0); } return ret(o); } const v = toArray(M); return ret(scalar(dnum(v[0], v[1], v[2], v[3] ?? 0, v[4] ?? 0, v[5] ?? 0))); }
    const g = a.map((x) => toArray(m(x))); const n = Math.max(...g.map((x) => x.length)); const at = (gi: number, i: number) => g[gi] ? (g[gi].length === 1 ? g[gi][0] : g[gi][i]) : 0;
    const o = zeros(n, 1); for (let i = 0; i < n; i++) o.data[i] = dnum(at(0, i), at(1, i), at(2, i), at(3, i), at(4, i), at(5, i)); return ret(numel(o) === 1 ? scalar(o.data[0]) : o);
  },
  datevec: async (a) => { const n = isTemporal(a[0]) ? a[0].data[0] : asScalar(m(a[0])); const v = dvec(n); return ret(rowVec(v)); },
  datestr: async (a) => { const n = isTemporal(a[0]) ? a[0].data[0] : asScalar(m(a[0])); const fmt = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : null; return ret(str(dstr(n, fmt))); },
  now: async () => ret(scalar(Date.now() / 86400000 + 719529)),
  today: async () => ret(scalar(Math.floor(Date.now() / 86400000) + 719529)),
  clock: async () => { const v = dvec(Date.now() / 86400000 + 719529); return ret(rowVec(v)); },
  date: async () => ret(str(dstr(Math.floor(Date.now() / 86400000) + 719529, 'dd-mmm-yyyy'))),
  weekday: async (a) => { const n = m(a[0]); const o = map(n, (x) => (new Date((x - 719529) * 86400000).getUTCDay()) + 1); return ret(o); },
  eomday: async (a) => ret(elementwise(m(a[0]), m(a[1]), (y, mo) => [31, (y % 4 === 0 && (y % 100 !== 0 || y % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mo - 1] ?? NaN)),
  etime: async (a) => { const t2 = toArray(m(a[0])), t1 = toArray(m(a[1])); return ret(scalar((dnum(t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]) - dnum(t1[0], t1[1], t1[2], t1[3], t1[4], t1[5])) * 86400)); },
  addtodate: async (a) => { const n = asScalar(m(a[0])), q = asScalar(m(a[1])), unit = asString(a[2]); const v = dvec(n); const idx = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }[unit] ?? 2; v[idx] += q; return ret(scalar(dnum(v[0], v[1], v[2], v[3], v[4], v[5]))); },
  // ═══════════════════ SYMBOLIC MATH (polymorphic dispatch) ═══════════════════
  solve: async (a, _n, env) => {
    if (a.length && isStruct(a[0]) && (a[0] as StructV).fields.has('Q')) return ret(quboSolveResult(a[0] as StructV));
    if (a.length && isStruct(a[0]) && (a[0] as StructV).fields.has('ODEFcn')) return solveOde(a, env);   // OO ode object
    const s = symArg(a[0]); const v = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) ? asString(a[1]) : (symVarsOf(s)[0] ?? 'x'); const roots = solveExpr(s.exprs[0], v); return ret(makeSym(roots.length, 1, roots));
  },
  ode: async (a) => {
    const f = new Map<string, Value[]>([['Solver', [str('ode45')]], ['InitialTime', [scalar(0)]]]);
    for (let i = 0; i + 1 < a.length; i += 2) { let k = asString(a[i]); if (k === 'F') k = 'ODEFcn'; if (k === 'y0') k = 'InitialValue'; if (k === 't0') k = 'InitialTime'; f.set(k, [a[i + 1]]); }
    return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV);
  },
  odeEvent: async (a) => { const f = new Map<string, Value[]>(); for (let i = 0; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  odeJacobian: async (a) => ret(a[0] ?? makeSym(0, 0, [])),
  odeMassMatrix: async (a) => ret(a[0] ?? makeSym(0, 0, [])),
  odeSensitivity: async (a) => { const f = new Map<string, Value[]>(); for (let i = 0; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  odeDelay: async (a) => { const f = new Map<string, Value[]>(); for (let i = 0; i + 1 < a.length; i += 2) f.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields: f } as StructV); },
  simplify: async (a) => { if (isGraph(a[0])) { const g = a[0]; const seen = new Set<string>(); const edges: typeof g.edges = []; for (const e of g.edges) { if (e.s === e.t) continue; const k = g.directed ? `${e.s}_${e.t}` : `${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`; if (seen.has(k)) continue; seen.add(k); edges.push(e); } return ret(makeGraph(g.directed, g.n, edges, g.names)); } const s = symArg(a[0]); return ret(makeSym(s.rows, s.cols, s.exprs.map((e) => simplifyAssume(e)))); },
  logical: async (a) => { if (!isSym(a[0])) return ret({ ...map(m(a[0]), (x) => (x !== 0 ? 1 : 0)), isBool: true }); const s = a[0]; const o = zeros(s.rows, s.cols); o.isBool = true; s.exprs.forEach((e, i) => { o.data[i] = Math.abs(symEval(e, new Map())) > 1e-12 ? 1 : 0; }); return ret(o); },
  curl: async (a, n) => { if (isSym(a[0])) { const F = a[0].exprs; const v = symNames(a[1]); const c = [sAdd(diffExpr(F[2], v[1]), sNeg(diffExpr(F[1], v[2]))), sAdd(diffExpr(F[0], v[2]), sNeg(diffExpr(F[2], v[0]))), sAdd(diffExpr(F[1], v[0]), sNeg(diffExpr(F[0], v[1])))]; return ret(makeSym(3, 1, c.map(simplifyExpr))); } return curlNumeric(a, n); },
  divergence: async (a, n, env) => { if (isSym(a[0])) { const F = a[0].exprs; const v = symNames(a[1]); let d: SymExpr = sN(0); for (let i = 0; i < F.length; i++) d = sAdd(d, diffExpr(F[i], v[i])); return ret(makeSym(1, 1, [simplifyExpr(d)])); } void env; return divergenceNumeric(a, n); },
  laplacian: async (a) => { if (isGraph(a[0])) { const g = a[0]; const A = adjacencyMat(g); const L = zeros(g.n, g.n); for (let i = 0; i < g.n; i++) { let d = 0; for (let j = 0; j < g.n; j++) { d += A.data[i + j * g.n]; L.data[i + j * g.n] = -A.data[i + j * g.n]; } L.data[i + i * g.n] = d - A.data[i + i * g.n]; } return ret(denseToSparse(L)); } const s = symArg(a[0]); const v = a.length >= 2 ? symNames(a[1]) : symVarsOf(s); let L: SymExpr = sN(0); for (const vn of v) L = sAdd(L, diffExpr(diffExpr(s.exprs[0], vn), vn)); return ret(makeSym(1, 1, [simplifyExpr(L)])); },
  compose: async (a) => { if (!isSym(a[0])) return ret(makeStr(sprintf(asString(a[0]), a.slice(1)))); const f = a[0]; const g = symArg(a[1]); const v = symVarsOf(f)[0] ?? 'x'; return ret(makeSym(1, 1, [simplifyExpr(subsExpr(f.exprs[0], v, g.exprs[0]))])); },
  // ═════════════ DATES · TABLES · GROUPING · CATEGORICAL ═════════════
  // ── datetime / duration objects ──
  datetime: async (a) => {
    // datetime(X,'ConvertFrom',type): X is a numeric serial date in some epoch.
    const cfIdx = a.findIndex((x) => (isStr(x) || (isMat(x) && (x as Mat).isChar)) && asString(x).toLowerCase() === 'convertfrom');
    if (cfIdx >= 0 && a.length > cfIdx + 1 && isMat(a[0])) {
      const kind = asString(a[cfIdx + 1]).toLowerCase();
      const X = m(a[0]);
      // offset added to the source value to reach datenum (days since year 0).
      const conv = (x: number): number => {
        if (kind === 'datenum') return x;
        if (kind === 'excel' || kind === 'excel1904') return x + (kind === 'excel1904' ? 695422 : 693960);
        if (kind === 'posixtime') return x / 86400 + 719529;
        if (kind === 'epochtime') return x / 86400 + 719529;
        if (kind === 'juliandate') return x - 1721058.5 + 0;
        if (kind === 'modifiedjuliandate') return x + 678941 + 0;
        return x;
      };
      return ret(makeTemporal('datetime', X.rows, X.cols, Float64Array.from(X.data, conv)));
    }
    if (a.length >= 1 && (isStr(a[0]) || (isMat(a[0]) && (a[0] as Mat).isChar))) { const w = asString(a[0]).toLowerCase(); const s = asString(a[0]); let n: number; if (w === 'today') n = Math.floor(Date.now() / 86400000) + 719529; else if (w === 'now') n = Date.now() / 86400000 + 719529; else { const d = new Date(s.trim()); n = Number.isNaN(+d) ? Date.now() / 86400000 + 719529 : d.getTime() / 86400000 + 719529; } return ret(makeTemporal('datetime', 1, 1, Float64Array.of(n))); }
    if (a.length === 1 && isMat(a[0])) { const M = m(a[0]); if (M.cols >= 3) { const out = new Float64Array(M.rows); for (let r = 0; r < M.rows; r++) { const v = Array.from({ length: M.cols }, (_, c) => M.data[r + c * M.rows]); out[r] = dnum(v[0], v[1], v[2], v[3] ?? 0, v[4] ?? 0, v[5] ?? 0); } return ret(makeTemporal('datetime', M.rows, 1, out)); } }
    const g = a.map((x) => toArray(m(x))); const n = Math.max(1, ...g.map((x) => x.length)); const at = (gi: number, i: number) => g[gi] ? (g[gi].length === 1 ? g[gi][0] : g[gi][i]) : 0;
    const out = new Float64Array(n); for (let i = 0; i < n; i++) out[i] = dnum(at(0, i), at(1, i), at(2, i), at(3, i), at(4, i), at(5, i));
    return ret(makeTemporal('datetime', n, 1, out));
  },
  NaT: async () => ret(makeTemporal('datetime', 1, 1, Float64Array.of(NaN))),
  duration: async (a) => { const M = m(a[0]); if (M.cols >= 3) { const out = new Float64Array(M.rows); for (let r = 0; r < M.rows; r++) out[r] = (M.data[r] + M.data[r + M.rows] / 60 + M.data[r + 2 * M.rows] / 3600) / 24; return ret(makeTemporal('duration', M.rows, 1, out)); } return ret(makeTemporal('duration', M.rows, M.cols, new Float64Array(M.data))); },
  years: async (a) => ret(durUnit(a[0], 365.2425)),
  days: async (a) => ret(durUnit(a[0], 1)),
  hours: async (a) => ret(durUnit(a[0], 1 / 24)),
  minutes: async (a) => ret(durUnit(a[0], 1 / 1440)),
  seconds: async (a) => ret(durUnit(a[0], 1 / 86400)),
  milliseconds: async (a) => ret(durUnit(a[0], 1 / 86400000)),
  year: async (a) => ret(dtCompMat(a[0], 0)),
  month: async (a) => ret(dtCompMat(a[0], 1)),
  day: async (a) => ret(dtCompMat(a[0], 2)),
  hour: async (a) => ret(dtCompMat(a[0], 3)),
  minute: async (a) => ret(dtCompMat(a[0], 4)),
  second: async (a) => ret(dtCompMat(a[0], 5)),
  ymd: async (a, n) => { const Y = dtCompMat(a[0], 0), M2 = dtCompMat(a[0], 1), D = dtCompMat(a[0], 2); return n >= 2 ? [Y, M2, D] : [Y]; },
  isdatetime: async (a) => ret(bool(isTemporal(a[0]) && a[0].tkind === 'datetime')),
  isduration: async (a) => ret(bool(isTemporal(a[0]) && a[0].tkind === 'duration')),
  isnat: async (a) => { const t = a[0] as Temporal; const o = zeros(t.rows, t.cols); o.isBool = true; for (let i = 0; i < t.data.length; i++) o.data[i] = Number.isNaN(t.data[i]) ? 1 : 0; return ret(o); },
  // ── table / timetable ──
  table: async (a) => {
    const { cols, names } = parseTableArgs(a, 0);
    const nrows = cols.length ? tblRows(cols[0]) : 0;
    return ret({ kind: 'table', vars: names, cols, nrows } as Table);
  },
  timetable: async (a) => {
    const rt = a[0] as Temporal; if (!isTemporal(rt)) throw new MatError('timetable: first argument must be a datetime/duration row-time vector');
    const { cols, names } = parseTableArgs(a, 1);
    return ret({ kind: 'table', vars: names, cols, nrows: rt.rows * rt.cols, isTimetable: true, rowTimes: rt, rowDimName: 'Time' } as Table);
  },
  array2table: async (a) => { const A = m(a[0]); const names = parseNameOpt(a) ?? Array.from({ length: A.cols }, (_, i) => `Var${i + 1}`); const cols = Array.from({ length: A.cols }, (_, j) => colOf(A, j)); return ret({ kind: 'table', vars: names, cols, nrows: A.rows } as Table); },
  cell2table: async (a) => { const C = a[0] as Cell; const names = parseNameOpt(a) ?? Array.from({ length: C.cols }, (_, i) => `Var${i + 1}`); const cols: Value[] = []; for (let j = 0; j < C.cols; j++) { const colItems: Value[] = []; for (let r = 0; r < C.rows; r++) colItems.push(C.items[r + j * C.rows]); cols.push(stackColumn(colItems)); } return ret({ kind: 'table', vars: names, cols, nrows: C.rows } as Table); },
  struct2table: async (a) => { const s = a[0] as StructV; const names = [...s.fields.keys()]; const cols = names.map((k) => { const vals = s.fields.get(k)!; return vals.length === 1 ? vals[0] : stackColumn(vals); }); return ret({ kind: 'table', vars: names, cols, nrows: cols.length ? tblRows(cols[0]) : 0 } as Table); },
  table2array: async (a) => { const t = gTbl(a[0]); return ret(horzcat(t.cols.map((c) => m(c)))); },
  table2cell: async (a) => { const t = gTbl(a[0]); const items: Value[] = []; for (let j = 0; j < t.vars.length; j++) for (let r = 0; r < t.nrows; r++) items[r + j * t.nrows] = tblCellValue(t.cols[j], r); return ret(makeCell(t.nrows, t.vars.length, items)); },
  table2struct: async (a) => { const t = gTbl(a[0]); const f = new Map<string, Value[]>(); for (let j = 0; j < t.vars.length; j++) { const arr: Value[] = []; for (let r = 0; r < t.nrows; r++) arr.push(tblCellValue(t.cols[j], r)); f.set(t.vars[j], arr); } return ret({ kind: 'struct', rows: t.nrows, cols: 1, fields: f } as StructV); },
  istable: async (a) => ret(bool(isTable(a[0]) && !a[0].isTimetable)),
  istimetable: async (a) => ret(bool(isTable(a[0]) && !!a[0].isTimetable)),
  istabular: async (a) => ret(bool(isTable(a[0]))),
  height: async (a) => ret(scalar(isTable(a[0]) ? a[0].nrows : m(a[0]).rows)),
  width: async (a) => ret(scalar(isTable(a[0]) ? a[0].vars.length : m(a[0]).cols)),
  head: async (a) => { const t = gTbl(a[0]); const k = Math.min(t.nrows, a.length >= 2 ? Math.round(asScalar(a[1])) : 8); return ret(tblSlice(t, Array.from({ length: k }, (_, i) => i))); },
  tail: async (a) => { const t = gTbl(a[0]); const k = Math.min(t.nrows, a.length >= 2 ? Math.round(asScalar(a[1])) : 8); return ret(tblSlice(t, Array.from({ length: k }, (_, i) => t.nrows - k + i))); },
  summary: async (a, _n, env) => { const t = gTbl(a[0]); let s = `Table with ${t.nrows} rows and ${t.vars.length} variables:\n`; for (let j = 0; j < t.vars.length; j++) { const c = t.cols[j]; if (isMat(c) && !c.isChar) { const v = toArray(c); s += `  ${t.vars[j]}: min ${trimNum(Math.min(...v))}, median ${trimNum(median1(v))}, max ${trimNum(Math.max(...v))}, mean ${trimNum(v.reduce((x, y) => x + y, 0) / v.length)}\n`; } else s += `  ${t.vars[j]}: ${c.kind}\n`; } env.output(s); return []; },
  // ── grouping ──
  findgroups: async (a, n) => {
    const gvars: Value[] = isTable(a[0]) ? (a[0] as Table).cols : a; const cols = gvars.map(colPrim); const nrows = cols[0]?.length ?? 0;
    const { G, tuples } = makeGroups(cols, nrows);
    if (n < 2) return [colVec(G)];
    const outs: Value[] = [colVec(G)];
    if (isTable(a[0])) { const t = a[0] as Table; outs.push({ kind: 'table', vars: t.vars.slice(), cols: cols.map((c, ci) => typeof tuples[0]?.[ci] === 'string' ? makeStrArr(tuples.length, 1, tuples.map((tp) => tp[ci] as string)) : colVec(tuples.map((tp) => tp[ci] as number))), nrows: tuples.length } as Table); }
    else for (let ci = 0; ci < cols.length; ci++) { const vals = tuples.map((tp) => tp[ci]); outs.push(typeof vals[0] === 'string' ? makeStrArr(vals.length, 1, vals as string[]) : colVec(vals as number[])); }
    return outs;
  },
  splitapply: async (a, _n, env) => {
    const fn = handle(a[0], 'splitapply'); const G = toArray(m(a[a.length - 1])).map((x) => Math.round(x));
    const datas = a.slice(1, a.length - 1); const ng = G.length ? Math.max(...G) : 0; const results: Mat[] = [];
    for (let g = 1; g <= ng; g++) { const rows: number[] = []; for (let r = 0; r < G.length; r++) if (G[r] === g) rows.push(r); const args = datas.map((d) => sliceRows(d, rows)); const r = await env.callHandle(fn, args, 1); results.push(m(r[0])); }
    return [results.length ? vertcat(results) : zeros(0, 1)];
  },
  groupcounts: async (a) => {
    const gvars: Value[] = isTable(a[0]) ? (() => { const t = a[0] as Table; const names = a.length >= 2 ? (strList(a[1])) : t.vars; return names.map((nm) => t.cols[t.vars.indexOf(nm)]); })() : [a[0]];
    const cols = gvars.map(colPrim); const nrows = cols[0]?.length ?? 0; const { G, tuples } = makeGroups(cols, nrows);
    const counts = new Array(tuples.length).fill(0); for (const g of G) counts[g - 1]++;
    const names = isTable(a[0]) ? (a.length >= 2 ? (strList(a[1])) : (a[0] as Table).vars) : ['Var1'];
    const gcols: Value[] = cols.map((_, ci) => typeof tuples[0]?.[ci] === 'string' ? makeStrArr(tuples.length, 1, tuples.map((tp) => tp[ci] as string)) : colVec(tuples.map((tp) => tp[ci] as number)));
    return ret({ kind: 'table', vars: [...names, 'GroupCount'], cols: [...gcols, colVec(counts)], nrows: tuples.length } as Table);
  },
  groupsummary: async (a) => {
    const t = gTbl(a[0]); const gnames = strList(a[1]);
    const method = a.length >= 3 ? asString(a[2]).toLowerCase() : 'sum'; const agg = GROUP_AGG[method] ?? GROUP_AGG.sum;
    const gcolsSrc = gnames.map((nm) => t.cols[t.vars.indexOf(nm)]); const { G, tuples } = makeGroups(gcolsSrc.map(colPrim), t.nrows);
    const dataVars = t.vars.filter((nm) => !gnames.includes(nm) && isMat(t.cols[t.vars.indexOf(nm)]) && !(t.cols[t.vars.indexOf(nm)] as Mat).isChar);
    const counts = new Array(tuples.length).fill(0); for (const g of G) counts[g - 1]++;
    const gcols: Value[] = gnames.map((_, ci) => typeof tuples[0]?.[ci] === 'string' ? makeStrArr(tuples.length, 1, tuples.map((tp) => tp[ci] as string)) : colVec(tuples.map((tp) => tp[ci] as number)));
    const aggCols = dataVars.map((nm) => { const data = toArray(m(t.cols[t.vars.indexOf(nm)])); const out: number[] = []; for (let g = 1; g <= tuples.length; g++) { const vals: number[] = []; for (let r = 0; r < G.length; r++) if (G[r] === g) vals.push(data[r]); out.push(agg(vals)); } return colVec(out); });
    return ret({ kind: 'table', vars: [...gnames, 'GroupCount', ...dataVars.map((nm) => `${method}_${nm}`)], cols: [...gcols, colVec(counts), ...aggCols], nrows: tuples.length } as Table);
  },
  // ── joins ──
  innerjoin: async (a) => joinTables(gTbl(a[0]), gTbl(a[1]), 'inner'),
  outerjoin: async (a) => joinTables(gTbl(a[0]), gTbl(a[1]), 'outer'),
  // ── per-variable / per-row apply ──
  varfun: async (a, _n, env) => { const fn = handle(a[0], 'varfun'); const t = gTbl(a[1]); const cols: Value[] = []; const vars: string[] = []; for (let j = 0; j < t.vars.length; j++) { if (!isMat(t.cols[j]) || (t.cols[j] as Mat).isChar) continue; const r = await env.callHandle(fn, [t.cols[j]], 1); cols.push(r[0]); vars.push(`Fun_${t.vars[j]}`); } return ret({ kind: 'table', vars, cols, nrows: cols.length ? tblRows(cols[0]) : 0 } as Table); },
  rowfun: async (a, _n, env) => { const fn = handle(a[0], 'rowfun'); const t = gTbl(a[1]); const out: number[] = []; for (let r = 0; r < t.nrows; r++) { const args = t.cols.filter((c) => isMat(c) && !(c as Mat).isChar).map((c) => scalar((c as Mat).data[r])); const rr = await env.callHandle(fn, args, 1); out.push(asScalar(rr[0])); } return ret({ kind: 'table', vars: ['Var1'], cols: [colVec(out)], nrows: t.nrows } as Table); },
  // ── column manipulation ──
  addvars: async (a) => { const t = gTbl(a[0]); const newCols: Value[] = []; const newNames: string[] = []; let i = 1; for (; i < a.length; i++) { if ((isStr(a[i]) || (isMat(a[i]) && (a[i] as Mat).isChar)) && asString(a[i]).toLowerCase() === 'newvariablenames') break; newCols.push(a[i]); } const names = i + 1 < a.length ? (strList(a[i + 1])) : newCols.map((_, k) => `Var${t.vars.length + k + 1}`); for (let k = 0; k < newCols.length; k++) newNames.push(names[k] ?? `Var${t.vars.length + k + 1}`); return ret({ ...t, vars: [...t.vars, ...newNames], cols: [...t.cols, ...newCols] } as Table); },
  removevars: async (a) => { const t = gTbl(a[0]); const drop = isMat(a[1]) && !(a[1] as Mat).isChar ? toArray(m(a[1])).map((i) => t.vars[i - 1]) : strList(a[1]); const keep = t.vars.map((v, j) => [v, j] as [string, number]).filter(([v]) => !drop.includes(v)); return ret({ ...t, vars: keep.map(([v]) => v), cols: keep.map(([, j]) => t.cols[j]) } as Table); },
  renamevars: async (a) => { const t = gTbl(a[0]); const olds = strList(a[1]); const news = strList(a[2]); const vars = t.vars.map((v) => { const k = olds.indexOf(v); return k >= 0 ? news[k] : v; }); return ret({ ...t, vars } as Table); },
  movevars: async (a) => { const t = gTbl(a[0]); const which = asString(a[1]); const j = t.vars.indexOf(which); if (j < 0) return ret(t); const order = t.vars.map((_, k) => k).filter((k) => k !== j); const where = a.length >= 3 ? asString(a[2]).toLowerCase() : 'after'; const ref = a.length >= 4 ? t.vars.indexOf(asString(a[3])) : (where === 'before' ? 0 : t.vars.length - 1); let pos = order.indexOf(ref); pos = where === 'before' ? pos : pos + 1; order.splice(pos, 0, j); return ret({ ...t, vars: order.map((k) => t.vars[k]), cols: order.map((k) => t.cols[k]) } as Table); },
  mergevars: async (a) => { const t = gTbl(a[0]); const names = strList(a[1]); const idx = names.map((nm) => t.vars.indexOf(nm)).filter((k) => k >= 0); const merged = horzcat(idx.map((k) => m(t.cols[k]))); const newName = a.length >= 3 && (isStr(a[2]) || (isMat(a[2]) && (a[2] as Mat).isChar)) ? asString(a[a.length - 1]) : 'Var1'; const keep: { v: string; c: Value }[] = []; let inserted = false; t.vars.forEach((v, k) => { if (idx.includes(k)) { if (!inserted) { keep.push({ v: newName, c: merged }); inserted = true; } } else keep.push({ v, c: t.cols[k] }); }); return ret({ ...t, vars: keep.map((x) => x.v), cols: keep.map((x) => x.c) } as Table); },
  // ── categorical ──
  categorical: async (a) => {
    let labels: string[];
    if (isStr(a[0])) labels = (a[0] as Str).items.slice();
    else if (isCell(a[0])) labels = (a[0] as Cell).items.map((x) => asString(x));
    else if (isCategorical(a[0])) return ret(a[0]);
    else { const v = m(a[0]); labels = toArray(v).map((x) => String(x)); }
    const given = a.length >= 2 && isCell(a[1]) ? (a[1] as Cell).items.map((x) => asString(x)) : null;
    const cats = given ?? [...new Set(labels)].sort();
    const idx = new Map(cats.map((c, i) => [c, i + 1]));
    const rows = isStr(a[0]) ? (a[0] as Str).rows : isCell(a[0]) ? (a[0] as Cell).rows : m(a[0]).rows;
    const cols = isStr(a[0]) ? (a[0] as Str).cols : isCell(a[0]) ? (a[0] as Cell).cols : m(a[0]).cols;
    const codes = Int32Array.from(labels, (l) => idx.get(l) ?? 0);
    return ret(makeCategorical(rows * cols === labels.length ? rows : labels.length, rows * cols === labels.length ? cols : 1, codes, cats, a.length >= 3 && asString(a[a.length - 1]).toLowerCase() === 'ordinal'));
  },
  categories: async (a) => { const c = a[0] as Categorical; return ret(makeStrArr(c.categories.length, 1, c.categories.slice())); },
  iscategorical: async (a) => ret(bool(isCategorical(a[0]))),
  iscategory: async (a) => { const c = a[0] as Categorical; const q = strList(a[1]); const o = zeros(q.length, 1); o.isBool = true; q.forEach((x, i) => { o.data[i] = c.categories.includes(x) ? 1 : 0; }); return ret(o); },
  countcats: async (a) => { const c = a[0] as Categorical; const counts = new Array(c.categories.length).fill(0); for (const code of c.codes) if (code > 0) counts[code - 1]++; return ret(colVec(counts)); },
  addcats: async (a) => { const c = a[0] as Categorical; const add = strList(a[1]); const cats = [...c.categories, ...add.filter((x) => !c.categories.includes(x))]; return ret(makeCategorical(c.rows, c.cols, Int32Array.from(c.codes), cats, c.ordinal)); },
  removecats: async (a) => { const c = a[0] as Categorical; if (a.length < 2) { const used = new Set(Array.from(c.codes).filter((x) => x > 0)); const keep = c.categories.filter((_, i) => used.has(i + 1)); return ret(recodeCategorical(c, keep)); } const drop = strList(a[1]); return ret(recodeCategorical(c, c.categories.filter((x) => !drop.includes(x)))); },
  renamecats: async (a) => { const c = a[0] as Categorical; const olds = a.length >= 3 ? (strList(a[1])) : c.categories; const news = strList(a[a.length - 1]); const cats = c.categories.map((x) => { const k = olds.indexOf(x); return k >= 0 ? news[k] : x; }); return ret(makeCategorical(c.rows, c.cols, Int32Array.from(c.codes), cats, c.ordinal)); },
  reordercats: async (a) => { const c = a[0] as Categorical; const order = a.length >= 2 ? (strList(a[1])) : c.categories.slice().sort(); return ret(recodeCategorical(c, order)); },
  mergecats: async (a) => { const c = a[0] as Categorical; const merge = strList(a[1]); const newName = a.length >= 3 ? asString(a[2]) : merge[0]; const cats = [newName, ...c.categories.filter((x) => !merge.includes(x))]; const remap = new Map<number, number>(); c.categories.forEach((x, i) => remap.set(i + 1, merge.includes(x) ? 1 : cats.indexOf(x) + 1)); const codes = Int32Array.from(c.codes, (code) => code > 0 ? remap.get(code)! : 0); return ret(makeCategorical(c.rows, c.cols, codes, cats, c.ordinal)); },
  deval: async (a) => {
    // deval(sol, xq) | deval(xq, sol) → evaluate the solution. Uses the C¹ cubic-Hermite
    // interpolant when node derivatives (sol.yp) are present (bvp4c/ode), else linear.
    const sol = (isStruct(a[0]) ? a[0] : a[1]) as StructV; const xq = toArray(m(isStruct(a[0]) ? a[1] : a[0]));
    const xs = toArray(m(sol.fields.get('x')![0])); const Y = m(sol.fields.get('y')![0]); const neq = Y.rows;
    const ypF = sol.fields.get('yp'); const Yp = ypF && ypF.length && isMat(ypF[0]) ? (ypF[0] as Mat) : null;
    const out = zeros(neq, xq.length);
    for (let q = 0; q < xq.length; q++) {
      const t = xq[q]; let i = 0; while (i < xs.length - 2 && t > xs[i + 1]) i++;
      const h = xs[i + 1] - xs[i] || 1; const s = (t - xs[i]) / h;
      for (let k = 0; k < neq; k++) {
        const y0 = Y.data[k + i * neq], y1 = Y.data[k + (i + 1) * neq];
        if (Yp) {
          // cubic Hermite basis on [0,1]
          const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
          out.data[k + q * neq] = h00 * y0 + h10 * h * Yp.data[k + i * neq] + h01 * y1 + h11 * h * Yp.data[k + (i + 1) * neq];
        } else out.data[k + q * neq] = y0 + s * (y1 - y0);
      }
    }
    return ret(out);
  },
  pdeval: async (a) => {
    // [uout,duoutdx] = pdeval(m, xmesh, ui, xout) — piecewise-linear value + slope of one PDE component.
    const xmesh = toArray(m(a[1])), ui = toArray(m(a[2])), xout = toArray(m(a[3]));
    const uo: number[] = [], du: number[] = [];
    for (const xq of xout) { let i = 0; while (i < xmesh.length - 2 && xq > xmesh[i + 1]) i++; const h = xmesh[i + 1] - xmesh[i] || 1; const t = (xq - xmesh[i]) / h; uo.push(ui[i] + t * (ui[i + 1] - ui[i])); du.push((ui[i + 1] - ui[i]) / h); }
    return [rowVec(uo), rowVec(du)];
  },
  cumtrapz: async (a) => {
    let x: number[], y: number[];
    if (a.length >= 2) { x = toArray(m(a[0])); y = toArray(m(a[1])); } else { y = toArray(m(a[0])); x = y.map((_, i) => i + 1); }
    const out = [0]; for (let i = 1; i < y.length; i++) out.push(out[i - 1] + (x[i] - x[i - 1]) * (y[i] + y[i - 1]) / 2);
    return ret(m(a[0]).cols === 1 && a.length < 2 ? colVec(out) : (m(a.length >= 2 ? a[1] : a[0]).cols === 1 ? colVec(out) : rowVec(out)));
  },
  del2: async (a) => {
    const U = m(a[0]);
    if (U.rows === 1 || U.cols === 1) { const v = toArray(U); const n = v.length; const o = new Array(n).fill(0); for (let i = 1; i < n - 1; i++) o[i] = (v[i + 1] - 2 * v[i] + v[i - 1]) / 4 * 2; for (let i = 1; i < n - 1; i++) o[i] = (v[i - 1] - 2 * v[i] + v[i + 1]) / 4; o[0] = o[1]; o[n - 1] = o[n - 2]; return ret(U.cols === 1 ? colVec(o) : rowVec(o)); }
    const R = U.rows, C = U.cols; const o = zeros(R, C); const at = (r: number, c: number) => U.data[r + c * R];
    for (let r = 1; r < R - 1; r++) for (let c = 1; c < C - 1; c++) o.data[r + c * R] = (at(r - 1, c) + at(r + 1, c) + at(r, c - 1) + at(r, c + 1) - 4 * at(r, c)) / 4;
    for (let r = 0; r < R; r++) { o.data[r + 0 * R] = o.data[r + 1 * R]; o.data[r + (C - 1) * R] = o.data[r + (C - 2) * R]; }
    for (let c = 0; c < C; c++) { o.data[0 + c * R] = o.data[1 + c * R]; o.data[(R - 1) + c * R] = o.data[(R - 2) + c * R]; }
    return ret(o);
  },
  deconv: async (a, n) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1]));
    const nq = b.length - aa.length + 1;
    if (nq <= 0) return n >= 2 ? [rowVec([0]), m(a[0])] : [rowVec([0])];
    const r = b.slice(); const q = new Array(nq).fill(0);
    for (let i = 0; i < nq; i++) { q[i] = r[i] / aa[0]; for (let j = 0; j < aa.length; j++) r[i + j] -= q[i] * aa[j]; }
    return n >= 2 ? [rowVec(q), rowVec(r)] : [rowVec(q)];
  },
  interp2: async (a) => {
    // interp2(V,Xq,Yq) or interp2(X,Y,V,Xq,Yq)
    let V: Mat, xq: Mat, yq: Mat, xv: number[], yv: number[];
    if (a.length >= 5) { const X = m(a[0]), Y = m(a[1]); V = m(a[2]); xq = m(a[3]); yq = m(a[4]); xv = []; for (let c = 0; c < X.cols; c++) xv.push(X.data[0 + c * X.rows]); yv = []; for (let r = 0; r < Y.rows; r++) yv.push(Y.data[r]); }
    else { V = m(a[0]); xq = m(a[1]); yq = m(a[2]); xv = Array.from({ length: V.cols }, (_, i) => i + 1); yv = Array.from({ length: V.rows }, (_, i) => i + 1); }
    const bilerp = (X: number, Y: number) => {
      let i = 0; while (i < xv.length - 2 && X > xv[i + 1]) i++; let j = 0; while (j < yv.length - 2 && Y > yv[j + 1]) j++;
      const tx = (X - xv[i]) / (xv[i + 1] - xv[i]), ty = (Y - yv[j]) / (yv[j + 1] - yv[j]);
      const v00 = V.data[j + i * V.rows], v01 = V.data[j + (i + 1) * V.rows], v10 = V.data[(j + 1) + i * V.rows], v11 = V.data[(j + 1) + (i + 1) * V.rows];
      return v00 * (1 - tx) * (1 - ty) + v01 * tx * (1 - ty) + v10 * (1 - tx) * ty + v11 * tx * ty;
    };
    const out = zeros(xq.rows, xq.cols); for (let k = 0; k < out.data.length; k++) out.data[k] = bilerp(xq.data[k], yq.data[k]); return ret(out);
  },
  delaunay: async (a) => {
    const xs = toArray(m(a[0])), ys = toArray(m(a[1]));
    const tris = delaunayTri(xs, ys);
    const T = zeros(tris.length, 3);
    for (let i = 0; i < tris.length; i++) for (let j = 0; j < 3; j++) T.data[i + j * tris.length] = tris[i][j] + 1;
    return ret(T);
  },
  griddata: async (a) => {
    // griddata(x,y,v,xq,yq[,method]) — scattered linear (default) or nearest interpolation.
    const xs = toArray(m(a[0])), ys = toArray(m(a[1])), vs = toArray(m(a[2]));
    const XQ = m(a[3]), YQ = m(a[4]);
    const method = a.length >= 6 && (isStr(a[5]) || (isMat(a[5]) && (a[5] as Mat).isChar)) ? asString(a[5]).toLowerCase() : 'linear';
    const out = zeros(XQ.rows, XQ.cols);
    if (method === 'nearest') {
      for (let k = 0; k < out.data.length; k++) { const qx = XQ.data[k], qy = YQ.data[k]; let best = 0, bd = Infinity; for (let i = 0; i < xs.length; i++) { const d = (xs[i] - qx) ** 2 + (ys[i] - qy) ** 2; if (d < bd) { bd = d; best = i; } } out.data[k] = vs[best]; }
      return ret(out);
    }
    const tris = delaunayTri(xs, ys);
    for (let k = 0; k < out.data.length; k++) {
      const qx = XQ.data[k], qy = YQ.data[k]; let val = NaN;
      for (const t of tris) {
        const [l1, l2, l3] = bary(xs[t[0]], ys[t[0]], xs[t[1]], ys[t[1]], xs[t[2]], ys[t[2]], qx, qy);
        if (l1 >= -1e-9 && l2 >= -1e-9 && l3 >= -1e-9) { val = l1 * vs[t[0]] + l2 * vs[t[1]] + l3 * vs[t[2]]; break; }
      }
      out.data[k] = val;
    }
    return ret(out);
  },
  boundary: async (a, n) => {
    // Accept boundary(x,y[,z]) or boundary(P) (P is N×2 or N×3); a trailing scalar is the
    // shrink factor (only the convex hull, shrink≈0, is modeled here).
    const mats = a.filter((v): v is Mat => isMat(v) && !(v as Mat).isChar);
    let pts: number[][];
    if (mats.length === 1 && mats[0].cols >= 2) pts = matRows(mats[0]);
    else { const cols = mats.filter((mm) => numel(mm) > 1).map((mm) => toArray(mm)); const L = cols[0]?.length ?? 0; pts = Array.from({ length: L }, (_, i) => cols.map((c) => c[i])); }
    const dim = pts[0]?.length ?? 2;
    if (dim >= 3) {
      const facets = convhullnd(pts);                       // 3-D convex-hull boundary (triangles)
      const tri = zeros(facets.length, 3); facets.forEach((f, r) => f.verts.slice(0, 3).forEach((vi, c) => { tri.data[r + c * facets.length] = vi + 1; }));
      if (n < 2) return ret(tri);
      const c0 = pts.reduce((s, p) => s.map((v, j) => v + p[j] / pts.length), [0, 0, 0]);
      let vol = 0; for (const f of facets) { const [p, q, r] = f.verts.slice(0, 3).map((vi) => pts[vi]); const a3 = p.map((v, j) => v - c0[j]), b3 = q.map((v, j) => v - c0[j]), c3 = r.map((v, j) => v - c0[j]); vol += Math.abs(a3[0] * (b3[1] * c3[2] - b3[2] * c3[1]) - a3[1] * (b3[0] * c3[2] - b3[2] * c3[0]) + a3[2] * (b3[0] * c3[1] - b3[1] * c3[0])) / 6; }
      return [tri, scalar(vol)];
    }
    const xs = pts.map((p) => p[0]), ys = pts.map((p) => p[1]); const k = convHull2D(xs, ys);
    if (n >= 2) { const px = k.map((i) => xs[i - 1]), py = k.map((i) => ys[i - 1]); let s = 0; for (let i = 0; i < px.length; i++) { const j = (i + 1) % px.length; s += px[i] * py[j] - px[j] * py[i]; } return [colVec(k), scalar(Math.abs(s) / 2)]; }
    return ret(colVec(k));
  },
  voronoi: async (a, n, env) => {
    const xs = toArray(m(a[0])), ys = toArray(m(a[1])); const tris = delaunayTri(xs, ys);
    const cc = tris.map((t) => circumcenter(xs[t[0]], ys[t[0]], xs[t[1]], ys[t[1]], xs[t[2]], ys[t[2]]));
    const edgeMap = new Map<string, number[]>();
    tris.forEach((t, ti) => { for (const [u, v] of [[t[0], t[1]], [t[1], t[2]], [t[2], t[0]]]) { const key = u < v ? `${u}_${v}` : `${v}_${u}`; (edgeMap.get(key) ?? edgeMap.set(key, []).get(key)!).push(ti); } });
    const segs: [number, number, number, number][] = [];
    for (const tl of edgeMap.values()) if (tl.length === 2) segs.push([cc[tl[0]][0], cc[tl[0]][1], cc[tl[1]][0], cc[tl[1]][1]]);
    if (n >= 1) { const VX = zeros(2, segs.length), VY = zeros(2, segs.length); segs.forEach((s, j) => { VX.data[0 + j * 2] = s[0]; VX.data[1 + j * 2] = s[2]; VY.data[0 + j * 2] = s[1]; VY.data[1 + j * 2] = s[3]; }); return [VX, VY]; }
    const px: number[] = [], py: number[] = []; for (const s of segs) { px.push(s[0], s[2], NaN); py.push(s[1], s[3], NaN); }
    env.graphics.addSeries(px, py); return [];
  },
  convhulln: async (a, n) => {
    const P = m(a[0]); const pts = matRows(P); const facets = convhullnd(pts); const d = pts[0]?.length ?? 0;
    const K = zeros(facets.length, d);
    facets.forEach((f, i) => f.verts.forEach((v, j) => { K.data[i + j * facets.length] = v + 1; }));
    if (n >= 2) { // hull volume: sum over facet simplices from an interior point
      const c = pts[0].map((_, j) => pts.reduce((s, p) => s + p[j], 0) / pts.length);
      let vol = 0; const fac = factorialN(d);
      for (const f of facets) { const rows = f.verts.map((v) => pts[v].map((x, j) => x - c[j])); vol += Math.abs(detRows(rows)) / fac; }
      return [K, scalar(vol)];
    }
    return ret(K);
  },
  delaunayn: async (a) => {
    const P = m(a[0]); const pts = matRows(P); const simplices = delaunaynd(pts); const d = pts[0]?.length ?? 0;
    const T = zeros(simplices.length, d + 1);
    simplices.forEach((s, i) => s.forEach((v, j) => { T.data[i + j * simplices.length] = v + 1; }));
    return ret(T);
  },
  voronoin: async (a, n) => {
    const P = m(a[0]); const pts = matRows(P); const d = pts[0]?.length ?? 0; const simplices = delaunaynd(pts);
    // Voronoi vertices = circumcenters of the Delaunay simplices; index 1 is the point at infinity.
    const cc = simplices.map((s) => circumcenterND(s.map((v) => pts[v])));
    const V = zeros(cc.length + 1, d); for (let j = 0; j < d; j++) V.data[0 + j * (cc.length + 1)] = Infinity;
    cc.forEach((c, i) => c.forEach((x, j) => { V.data[(i + 1) + j * (cc.length + 1)] = x; }));
    // C{i}: circumcenters of simplices incident to point i (+ the ∞ vertex for hull points).
    const onHull = new Set<number>(); for (const f of convhullnd(pts)) f.verts.forEach((v) => onHull.add(v));
    const cells: Value[] = [];
    for (let i = 0; i < pts.length; i++) {
      const inc: number[] = []; simplices.forEach((s, si) => { if (s.includes(i)) inc.push(si + 2); });
      const list = onHull.has(i) ? [1, ...inc] : inc;
      cells.push(rowVec(list));
    }
    return n >= 2 ? [V, makeCell(pts.length, 1, cells)] : [V];
  },
  tsearchn: async (a, n) => {
    // tsearchn(P,T,PQ): index (into T) of the simplex enclosing each query point, + barycentric coords.
    const pts = matRows(m(a[0])); const T = matRows(m(a[1])).map((r) => r.map((v) => Math.round(v) - 1)); const Q = matRows(m(a[2]));
    const d = pts[0].length; const idx = zeros(Q.length, 1); const BC = zeros(Q.length, d + 1);
    Q.forEach((q, qi) => {
      let found = NaN, bc: number[] | null = null;
      for (let ti = 0; ti < T.length; ti++) { const w = barycentricND(T[ti].map((v) => pts[v]), q); if (w.every((x) => x >= -1e-9)) { found = ti + 1; bc = w; break; } }
      idx.data[qi] = found;
      if (bc) bc.forEach((x, j) => { BC.data[qi + j * Q.length] = x; });
      else for (let j = 0; j <= d; j++) BC.data[qi + j * Q.length] = NaN;
    });
    return n >= 2 ? [idx, BC] : [idx];
  },
  griddatan: async (a) => {
    // griddatan(P,v,PQ[,method]): scattered N-D interpolation (linear default, or nearest).
    const pts = matRows(m(a[0])); const vs = toArray(m(a[1])); const Q = matRows(m(a[2]));
    const method = a.length >= 4 && isMat(a[3]) && (a[3] as Mat).isChar ? asString(a[3]).toLowerCase() : 'linear';
    const out = zeros(m(a[2]).rows, 1);
    if (method === 'nearest') {
      Q.forEach((q, qi) => { let best = 0, bd = Infinity; pts.forEach((p, i) => { const dd = p.reduce((s, x, j) => s + (x - q[j]) ** 2, 0); if (dd < bd) { bd = dd; best = i; } }); out.data[qi] = vs[best]; });
      return ret(out);
    }
    const T = delaunaynd(pts);
    Q.forEach((q, qi) => {
      let val = NaN;
      for (const s of T) { const w = barycentricND(s.map((v) => pts[v]), q); if (w.every((x) => x >= -1e-9)) { val = w.reduce((acc, x, j) => acc + x * vs[s[j]], 0); break; } }
      out.data[qi] = val;
    });
    return ret(out);
  },

  // ═══════════ GRAPHS · GEOMETRY · TRIANGULATION · INTERPOLANTS ═══════════
  // ── Graph / network ──
  graph: async (a) => ret(buildGraph(false, a)),
  digraph: async (a) => ret(buildGraph(true, a)),
  numnodes: async (a) => ret(scalar(gArg(a[0]).n)),
  numedges: async (a) => ret(scalar(gArg(a[0]).edges.length)),
  addnode: async (a) => { const g = gArg(a[0]); const names = g.names ? g.names.slice() : undefined; let add = 0; if (isMat(a[1]) && !(a[1] as Mat).isChar) add = Math.round(asScalar(a[1])); else { const nn = nodeNameList(a[1]); add = nn.length; if (names) names.push(...nn); } return ret(makeGraph(g.directed, g.n + add, g.edges.map((e) => ({ ...e })), names)); },
  rmnode: async (a) => {
    const g = gArg(a[0]); const rm = new Set(nodeIds(g, a[1])); const keep: number[] = []; for (let i = 0; i < g.n; i++) if (!rm.has(i)) keep.push(i);
    const remap = new Map(keep.map((old, ni) => [old, ni]));
    const edges = g.edges.filter((e) => !rm.has(e.s) && !rm.has(e.t)).map((e) => ({ s: remap.get(e.s)!, t: remap.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, keep.length, edges, g.names ? keep.map((i) => g.names![i]) : undefined));
  },
  addedge: async (a) => {
    const g = gArg(a[0]);
    // Named endpoints that don't exist yet are auto-added (MATLAB semantics).
    const named = !!g.names && (isStr(a[1]) || isCell(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar));
    const names = g.names ? g.names.slice() : null;
    const grow = (v: Value): number[] => {
      const r = (nm: string) => { let i = names!.indexOf(nm); if (i < 0) { i = names!.length; names!.push(nm); } return i; };
      if (isStr(v)) return v.items.map(r);
      if (isMat(v) && v.isChar) return [r(asString(v))];
      if (isCell(v)) return v.items.map((it) => r(asString(it)));
      return toArray(m(v)).map((x) => Math.round(x) - 1);
    };
    const s = named ? grow(a[1]) : nodeIds(g, a[1]);
    const t = named ? grow(a[2]) : nodeIds(g, a[2]);
    const wv = a.length >= 4 && isMat(a[3]) ? toArray(m(a[3])) : null;
    const ne = s.map((si, i) => ({ s: si, t: t[i], w: wv ? (wv.length === 1 ? wv[0] : wv[i]) : 1 }));
    const newN = Math.max(g.n, ...s.map((x) => x + 1), ...t.map((x) => x + 1), named ? names!.length : 0);
    return ret(makeGraph(g.directed, newN, [...g.edges, ...ne], named ? names! : g.names));
  },
  rmedge: async (a) => { const g = gArg(a[0]); const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); const drop = new Set(s.map((si, i) => `${Math.min(si, t[i])}_${Math.max(si, t[i])}`)); const edges = g.edges.filter((e) => !drop.has(`${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`)); return ret(makeGraph(g.directed, g.n, edges, g.names)); },
  neighbors: async (a) => {
    if (isGeom(a[0])) { const g = a[0]; const ti = Math.round(asScalar(a[1])) - 1; const T = g.conn ?? []; const k = T[0]?.length ?? 3; const shares = (x: number[], y: number[]) => x.filter((v) => y.includes(v)).length >= k - 1; const ns: number[] = []; T.forEach((t, j) => { if (j !== ti && shares(t, T[ti])) ns.push(j + 1); }); return ret(rowVec(ns)); }
    const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'out')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1)));
  },
  successors: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'out')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1))); },
  predecessors: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'in')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1))); },
  degree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'all'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  outdegree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'out'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  indegree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'in'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  findnode: async (a) => { const g = gArg(a[0]); return ret(colVec(nodeIds(g, a[1]).map((i) => i + 1))); },
  findedge: async (a, n) => {
    const g = gArg(a[0]);
    if (a.length === 1) { const m2 = g.edges.length; const S = zeros(m2, 1), T = zeros(m2, 1); g.edges.forEach((e, i) => { S.data[i] = e.s + 1; T.data[i] = e.t + 1; }); return n >= 2 ? [S, T] : [S]; }
    const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); const out = s.map((si, i) => { const ti = t[i]; const idx = g.edges.findIndex((e) => (e.s === si && e.t === ti) || (!g.directed && e.s === ti && e.t === si)); return idx + 1; }); return ret(colVec(out));
  },
  adjacency: async (a) => ret(denseToSparse(adjacencyMat(gArg(a[0])))),
  incidence: async (a) => { const g = gArg(a[0]); const I = zeros(g.n, g.edges.length); g.edges.forEach((e, j) => { I.data[e.s + j * g.n] += -1; I.data[e.t + j * g.n] += 1; }); return ret(denseToSparse(I)); },
  shortestpath: async (a, n) => {
    const g = gArg(a[0]); const src = nodeIds(g, a[1])[0], dst = nodeIds(g, a[2])[0]; const { dist, prev } = dijkstra(g, src);
    if (!isFinite(dist[dst])) return n >= 2 ? [zeros(1, 0), scalar(Infinity)] : [zeros(1, 0)];
    const path: number[] = []; for (let u = dst; u >= 0; u = prev[u]) { path.unshift(u + 1); if (u === src) break; }
    return n >= 2 ? [rowVec(path), scalar(dist[dst])] : [rowVec(path)];
  },
  distances: async (a) => {
    const g = gArg(a[0]); const srcs = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); const dsts = a.length >= 3 ? nodeIds(g, a[2]) : Array.from({ length: g.n }, (_, i) => i);
    const D = zeros(srcs.length, dsts.length); srcs.forEach((s, i) => { const { dist } = dijkstra(g, s); dsts.forEach((t, j) => { D.data[i + j * srcs.length] = dist[t]; }); }); return ret(D);
  },
  bfsearch: async (a) => ret(colVec(bfsOrder(gArg(a[0]), nodeIds(gArg(a[0]), a[1])[0]).map((x) => x + 1))),
  dfsearch: async (a) => ret(colVec(dfsOrder(gArg(a[0]), nodeIds(gArg(a[0]), a[1])[0]).map((x) => x + 1))),
  conncomp: async (a) => ret(rowVec(connComp(gArg(a[0])))),
  toposort: async (a) => { const o = topoSort(gArg(a[0])); if (!o) throw new MatError('toposort: graph is not acyclic'); return ret(rowVec(o.map((x) => x + 1))); },
  isdag: async (a) => ret(bool(gArg(a[0]).directed && topoSort(gArg(a[0])) !== null)),
  ismultigraph: async (a) => { const g = gArg(a[0]); const seen = new Set<string>(); for (const e of g.edges) { const k = g.directed ? `${e.s}_${e.t}` : `${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`; if (seen.has(k)) return ret(bool(true)); seen.add(k); } return ret(bool(false)); },
  minspantree: async (a) => { const g = gArg(a[0]); const tree = primMST(g); return ret(makeGraph(false, g.n, tree, g.names)); },
  maxflow: async (a) => { const g = gArg(a[0]); return ret(scalar(maxFlow(g, nodeIds(g, a[1])[0], nodeIds(g, a[2])[0]))); },
  subgraph: async (a) => {
    const g = gArg(a[0]); const keep = nodeIds(g, a[1]); const remap = new Map(keep.map((old, ni) => [old, ni]));
    const edges = g.edges.filter((e) => remap.has(e.s) && remap.has(e.t)).map((e) => ({ s: remap.get(e.s)!, t: remap.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, keep.length, edges, g.names ? keep.map((i) => g.names![i]) : undefined));
  },
  reordernodes: async (a) => {
    const g = gArg(a[0]); const order = nodeIds(g, a[1]); const pos = new Map(order.map((old, ni) => [old, ni]));
    const edges = g.edges.map((e) => ({ s: pos.get(e.s)!, t: pos.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, g.n, edges, g.names ? order.map((i) => g.names![i]) : undefined));
  },
  centrality: async (a) => {
    const g = gArg(a[0]); const type = (a.length >= 2 ? asString(a[1]) : 'degree').toLowerCase();
    if (type === 'degree') return ret(colVec(adjList(g, 'all').map((l) => l.length)));
    if (type === 'outdegree') return ret(colVec(adjList(g, 'out').map((l) => l.length)));
    if (type === 'indegree') return ret(colVec(adjList(g, 'in').map((l) => l.length)));
    if (type === 'closeness') return ret(colVec(Array.from({ length: g.n }, (_, i) => { const { dist } = dijkstra(g, i); const reach = dist.filter((d) => isFinite(d) && d > 0); const sum = reach.reduce((s, d) => s + d, 0); return sum > 0 ? reach.length / sum * (reach.length / Math.max(1, g.n - 1)) : 0; })));
    if (type === 'betweenness') return ret(colVec(betweenness(g)));
    if (type === 'pagerank') return ret(colVec(pagerank(g)));
    throw new MatError(`centrality: unsupported type '${type}'`);
  },
  flipedge: async (a) => { const g = gArg(a[0]); return ret(makeGraph(g.directed, g.n, g.edges.map((e) => ({ s: e.t, t: e.s, w: e.w })), g.names)); },
  edgecount: async (a) => { const g = gArg(a[0]); const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); return ret(colVec(s.map((si, i) => { const ti = t[i]; return g.edges.filter((e) => (e.s === si && e.t === ti) || (!g.directed && e.s === ti && e.t === si)).length; }))); },
  outedges: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const idx: number[] = []; g.edges.forEach((e, k) => { if (e.s === i || (!g.directed && e.t === i)) idx.push(k + 1); }); return ret(colVec(idx)); },
  inedges: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const idx: number[] = []; g.edges.forEach((e, k) => { if (e.t === i || (!g.directed && e.s === i)) idx.push(k + 1); }); return ret(colVec(idx)); },
  nearest: async (a, n) => { const g = gArg(a[0]); const src = nodeIds(g, a[1])[0]; const d = asScalar(a[2]); const { dist } = dijkstra(g, src); const nodes: number[] = [], ds: number[] = []; for (let i = 0; i < g.n; i++) if (i !== src && dist[i] <= d + 1e-12) { nodes.push(i + 1); ds.push(dist[i]); } return n >= 2 ? [colVec(nodes), colVec(ds)] : [colVec(nodes)]; },
  hascycles: async (a) => { const g = gArg(a[0]); if (g.directed) return ret(bool(topoSort(g) === null)); const comps = new Set(connComp(g)).size; return ret(bool(g.edges.length >= g.n - comps + 1)); },
  shortestpathtree: async (a) => { const g = gArg(a[0]); const src = nodeIds(g, a[1])[0]; const { prev } = dijkstra(g, src); const edges: { s: number; t: number; w: number }[] = []; for (let i = 0; i < g.n; i++) if (prev[i] >= 0) edges.push({ s: prev[i], t: i, w: 1 }); return ret(makeGraph(true, g.n, edges, g.names)); },
  condensation: async (a) => { const g = gArg(a[0]); const { comp, count } = sccKosaraju(g); const seen = new Set<string>(); const edges: { s: number; t: number; w: number }[] = []; for (const e of g.edges) if (comp[e.s] !== comp[e.t]) { const k = `${comp[e.s]}_${comp[e.t]}`; if (!seen.has(k)) { seen.add(k); edges.push({ s: comp[e.s], t: comp[e.t], w: 1 }); } } return ret(makeGraph(true, count, edges)); },
  transclosure: async (a) => { const g = gArg(a[0]); const R = reachMatrix(g); const edges: { s: number; t: number; w: number }[] = []; for (let i = 0; i < g.n; i++) for (let j = 0; j < g.n; j++) if (i !== j && R[i][j] && (g.directed || i < j)) edges.push({ s: i, t: j, w: 1 }); return ret(makeGraph(g.directed, g.n, edges, g.names)); },
  transreduction: async (a) => { const g = gArg(a[0]); const R = reachMatrix(g); const keep: { s: number; t: number; w: number }[] = []; for (const e of g.edges) { let redundant = false; for (let k = 0; k < g.n; k++) if (k !== e.s && k !== e.t && R[e.s][k] && R[k][e.t]) { redundant = true; break; } if (!redundant) keep.push(e); } return ret(makeGraph(g.directed, g.n, keep, g.names)); },
  biconncomp: async (a) => ret(rowVec(biconnected(gArg(a[0])))),
  bctree: async (a) => {
    const g = gArg(a[0]); const bin = biconnected(g); const nbc = Math.max(0, ...bin);
    // vertices in each block
    const blockVerts: Set<number>[] = Array.from({ length: nbc + 1 }, () => new Set<number>());
    g.edges.forEach((e, i) => { blockVerts[bin[i]].add(e.s); blockVerts[bin[i]].add(e.t); });
    const inBlocks = new Map<number, number[]>();
    for (let b = 1; b <= nbc; b++) for (const v of blockVerts[b]) (inBlocks.get(v) ?? inBlocks.set(v, []).get(v)!).push(b);
    // cut vertices: in ≥2 blocks. Tree: blocks 1..nbc, then one node per cut vertex.
    const cut = [...inBlocks.entries()].filter(([, bs]) => bs.length >= 2).map(([v]) => v);
    const cutNode = new Map(cut.map((v, i) => [v, nbc + 1 + i]));
    const edges: { s: number; t: number; w: number }[] = [];
    for (const [v, node] of cutNode) for (const b of inBlocks.get(v)!) edges.push({ s: node - 1, t: b - 1, w: 1 });
    return ret(makeGraph(false, nbc + cut.length, edges));
  },
  allpaths: async (a, nargout) => {
    const g = gArg(a[0]); const s = nodeIds(g, a[1])[0], t = nodeIds(g, a[2])[0];
    const opt = graphLimitOpts(a, 3, 'Path');
    let paths = enumeratePaths(g, s, t).filter((p) => p.length - 1 >= opt.minLen && p.length - 1 <= opt.maxLen);
    if (opt.maxNum < paths.length) paths = paths.slice(0, opt.maxNum);
    const nodes = makeCell(paths.length, 1, paths.map((p) => rowVec(p.map((x) => x + 1))));
    if (nargout < 2) return [nodes];
    const find = edgeFinder(g);
    const edges = makeCell(paths.length, 1, paths.map((p) => rowVec(p.slice(1).map((v, i) => find(p[i], v)))));
    return [nodes, edges];
  },
  allcycles: async (a, nargout) => {
    const g = gArg(a[0]); const opt = graphLimitOpts(a, 1, 'Cycle');
    let cyc = enumerateCycles(g).filter((c) => c.length >= opt.minLen && c.length <= opt.maxLen);
    if (opt.maxNum < cyc.length) cyc = cyc.slice(0, opt.maxNum);
    const nodes = makeCell(cyc.length, 1, cyc.map((p) => rowVec(p.map((x) => x + 1))));
    if (nargout < 2) return [nodes];
    const find = edgeFinder(g);
    const edges = makeCell(cyc.length, 1, cyc.map((p) => rowVec(p.map((v, i) => find(p[i], p[(i + 1) % p.length])))));
    return [nodes, edges];
  },
  cyclebasis: async (a) => { const g = gArg(a[0]); const cyc = cycleBasisOf(g); return ret(makeCell(cyc.length, 1, cyc.map((p) => rowVec(p.map((x) => x + 1))))); },
  isisomorphic: async (a) => ret(bool(graphIsomorphism(gArg(a[0]), gArg(a[1])) !== null)),
  isomorphism: async (a) => { const p = graphIsomorphism(gArg(a[0]), gArg(a[1])); return ret(p ? colVec(p.map((x) => x + 1)) : zeros(0, 1)); },
  matchpairs: async (a, n) => { const C = m(a[0]); const big = a.length >= 2 ? asScalar(a[1]) : 1e6; const { assign, cost } = hungarian(C, big); const M = zeros(assign.length, 2); assign.forEach(([r, c], i) => { M.data[i] = r + 1; M.data[i + assign.length] = c + 1; }); return n >= 2 ? [M, scalar(cost)] : [M]; },
  labeledge: async () => [], labelnode: async () => [], highlight: async () => [],

  // ── Geometry objects: triangulation / delaunayTriangulation / polyshape / alphaShape ──
  triangulation: async (a) => { const T = matRows(m(a[0])).map((r) => r.map((v) => Math.round(v) - 1)); const P = matRows(m(a[1])); return ret({ kind: 'geom', gkind: 'triangulation', points: P, conn: T, dim: P[0]?.length ?? 2 } as Geom); },
  delaunayTriangulation: async (a) => {
    const P = a.length >= 2 && isMat(a[0]) && isMat(a[1]) && numel(a[0]) === numel(a[1]) ? toArray(m(a[0])).map((x, i) => [x, toArray(m(a[1]))[i]]) : matRows(m(a[0]));
    const conn = P[0].length === 2 ? delaunayTri(P.map((p) => p[0]), P.map((p) => p[1])) : delaunaynd(P);
    return ret({ kind: 'geom', gkind: 'delaunayTriangulation', points: P, conn, dim: P[0]?.length ?? 2 } as Geom);
  },
  polyshape: async (a) => {
    let verts: number[][];
    if (a.length >= 2 && isMat(a[0]) && isMat(a[1])) { const x = toArray(m(a[0])), y = toArray(m(a[1])); verts = x.map((xi, i) => [xi, y[i]]); }
    else { verts = matRows(m(a[0])); }
    return ret({ kind: 'geom', gkind: 'polyshape', points: verts, dim: 2 } as Geom);
  },
  nsidedpoly: async (a) => { const n = Math.round(asScalar(a[0])); const cx = 0, cy = 0, rad = 1; const verts: number[][] = []; for (let i = 0; i < n; i++) { const th = Math.PI / 2 + 2 * Math.PI * i / n; verts.push([cx + rad * Math.cos(th), cy + rad * Math.sin(th)]); } return ret({ kind: 'geom', gkind: 'polyshape', points: verts, dim: 2 } as Geom); },
  alphaShape: async (a) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let pts: number[][], alpha: number | undefined;
    if (ms.length >= 3 && numel(ms[0]) === numel(ms[1]) && numel(ms[1]) === numel(ms[2]) && (ms.length < 4 ? true : numel(ms[2]) > 1)) { const x = toArray(ms[0]), y = toArray(ms[1]), z = toArray(ms[2]); pts = x.map((xi, i) => [xi, y[i], z[i]]); alpha = ms.length >= 4 ? asScalar(ms[3]) : undefined; }
    else if (ms.length >= 2 && numel(ms[0]) === numel(ms[1])) { const x = toArray(ms[0]), y = toArray(ms[1]); pts = x.map((xi, i) => [xi, y[i]]); alpha = ms.length >= 3 ? asScalar(ms[2]) : undefined; }
    else { pts = matRows(ms[0]); alpha = ms.length >= 2 ? asScalar(ms[1]) : undefined; }
    const dim = pts[0]?.length ?? 2;
    return ret({ kind: 'geom', gkind: 'alphaShape', points: pts, alpha: alpha ?? alphaCritical(pts, dim) * 1.5, dim } as Geom);
  },

  // triangulation methods
  freeBoundary: async (a) => { const g = gGeom(a[0]); const fb = freeBoundaryOf(g); const out = zeros(fb.length, g.dim); fb.forEach((e, i) => e.forEach((v, j) => { out.data[i + j * fb.length] = v + 1; })); return ret(out); },
  edges: async (a) => { const g = gGeom(a[0]); const set = new Map<string, [number, number]>(); for (const t of g.conn ?? []) for (let i = 0; i < t.length; i++) for (let j = i + 1; j < t.length; j++) { const u = Math.min(t[i], t[j]), v = Math.max(t[i], t[j]); set.set(`${u}_${v}`, [u, v]); } const E = [...set.values()]; const out = zeros(E.length, 2); E.forEach((e, i) => { out.data[i] = e[0] + 1; out.data[i + E.length] = e[1] + 1; }); return ret(out); },
  incenter: async (a) => ret(perSimplex(gGeom(a[0]), (pts) => pts[0].map((_, j) => pts.reduce((s, p) => s + p[j], 0) / pts.length))),
  circumcenter: async (a) => { if (isGeom(a[0])) return ret(perSimplex(a[0], (pts) => pts.length === 3 && pts[0].length === 2 ? circumcenter(pts[0][0], pts[0][1], pts[1][0], pts[1][1], pts[2][0], pts[2][1]) : circumcenterND(pts))); const [ax, ay, bx, by, cx, cy] = [0, 1, 2, 3, 4, 5].map((i) => asScalar(a[i])); const cc = circumcenter(ax, ay, bx, by, cx, cy); return ret(rowVec(cc)); },
  faceNormal: async (a) => { const g = gGeom(a[0]); return ret(perSimplex(g, (pts) => { const u = pts[1].map((v, j) => v - pts[0][j]), v2 = pts[2].map((v, j) => v - pts[0][j]); const n = [u[1] * v2[2] - u[2] * v2[1], u[2] * v2[0] - u[0] * v2[2], u[0] * v2[1] - u[1] * v2[0]]; const L = Math.hypot(...n) || 1; return n.map((x) => x / L); })); },
  nearestNeighbor: async (a) => { const g = gGeom(a[0]); const Q = matRows(m(a[1])); const out = Q.map((q) => { let best = 0, bd = Infinity; g.points.forEach((p, i) => { const d = p.reduce((s, x, j) => s + (x - q[j]) ** 2, 0); if (d < bd) { bd = d; best = i; } }); return best + 1; }); return ret(colVec(out)); },
  pointLocation: async (a) => { const g = gGeom(a[0]); const Q = matRows(m(a[1])); const T = g.conn ?? []; const out = Q.map((q) => { for (let ti = 0; ti < T.length; ti++) { const w = barycentricND(T[ti].map((v) => g.points[v]), q); if (w.every((x) => x >= -1e-9)) return ti + 1; } return NaN; }); return ret(colVec(out)); },
  barycentricToCartesian: async (a) => { const g = gGeom(a[0]); const ti = Math.round(asScalar(a[1])) - 1; const B = matRows(m(a[2])); const simplex = (g.conn ?? [])[ti].map((v) => g.points[v]); const out = B.map((w) => simplex[0].map((_, j) => w.reduce((s, wi, k) => s + wi * simplex[k][j], 0))); return ret(fromRows(out)); },
  cartesianToBarycentric: async (a) => { const g = gGeom(a[0]); const ti = Math.round(asScalar(a[1])) - 1; const Q = matRows(m(a[2])); const simplex = (g.conn ?? [])[ti].map((v) => g.points[v]); return ret(fromRows(Q.map((q) => barycentricND(simplex, q)))); },
  isConnected: async (a) => { const g = gGeom(a[0]); return ret(bool((g.conn ?? []).length > 0)); },
  convexHull: async (a, n) => { const g = gGeom(a[0]); const P = g.points; if (g.dim === 2) { const k = convHull2D(P.map((p) => p[0]), P.map((p) => p[1])); return n >= 2 ? [colVec(k), scalar(polyAreaOf(k.map((i) => P[i - 1])))] : [colVec(k)]; } const f = convhullnd(P); const K = zeros(f.length, 3); f.forEach((fc, i) => fc.verts.forEach((v, j) => { K.data[i + j * f.length] = v + 1; })); return ret(K); },
  voronoiDiagram: async (a, n) => { const g = gGeom(a[0]); const simplices = g.conn ?? []; const cc = simplices.map((s) => circumcenterND(s.map((v) => g.points[v]))); const V = zeros(cc.length + 1, g.dim); for (let j = 0; j < g.dim; j++) V.data[0 + j * (cc.length + 1)] = Infinity; cc.forEach((c, i) => c.forEach((x, j) => { V.data[(i + 1) + j * (cc.length + 1)] = x; })); const cells: Value[] = g.points.map((_, i) => rowVec(simplices.map((s, si) => (s.includes(i) ? si + 2 : 0)).filter((x) => x))); return n >= 2 ? [V, makeCell(g.points.length, 1, cells)] : [V]; },

  // polyshape methods
  perimeter: async (a) => ret(scalar(polyPerim(gGeom(a[0]).points))),
  centroid: async (a) => { const c = polyCentroid(gGeom(a[0]).points); return ret(rowVec(c)); },
  isinterior: async (a) => { const g = gGeom(a[0]); const Q = a.length >= 3 ? toArray(m(a[1])).map((x, i) => [x, toArray(m(a[2]))[i]]) : matRows(m(a[1])); const o = colVec(Q.map((q) => (pointInPolyV(g.points, q[0], q[1]) ? 1 : 0))); o.isBool = true; return ret(o); },
  numsides: async (a) => ret(scalar(gGeom(a[0]).points.filter((p) => !Number.isNaN(p[0])).length)),
  numboundaries: async (a) => { const pts = gGeom(a[0]).points; let n = pts.length ? 1 : 0; for (const p of pts) if (Number.isNaN(p[0])) n++; return ret(scalar(n)); },
  translate: async (a) => { const g = gGeom(a[0]); const d = a.length >= 3 ? [asScalar(a[1]), asScalar(a[2])] : toArray(m(a[1])); return ret({ ...g, points: g.points.map((p) => p.map((x, j) => x + (d[j] ?? 0))) } as Geom); },
  scale: async (a) => { const g = gGeom(a[0]); const s = asScalar(a[1]); const c = a.length >= 3 ? toArray(m(a[2])) : [0, 0]; return ret({ ...g, points: g.points.map((p) => p.map((x, j) => c[j] + (x - c[j]) * s)) } as Geom); },
  rotate: async (a) => { const g = gGeom(a[0]); const th = asScalar(a[1]) * Math.PI / 180; const c = a.length >= 3 ? toArray(m(a[2])) : [0, 0]; const ct = Math.cos(th), st = Math.sin(th); return ret({ ...g, points: g.points.map((p) => Number.isNaN(p[0]) ? p : [c[0] + (p[0] - c[0]) * ct - (p[1] - c[1]) * st, c[1] + (p[0] - c[0]) * st + (p[1] - c[1]) * ct]) } as Geom); },

  // alphaShape methods
  volume: async (a) => ret(scalar(geomArea(gGeom(a[0])))),
  surfaceArea: async (a) => ret(scalar(alphaBoundaryMeasure(gGeom(a[0])))),
  inShape: async (a) => { const g = gGeom(a[0]); const Q = a.length >= (g.dim + 1) + 1 ? toArray(m(a[1])).map((x, i) => g.dim === 3 ? [x, toArray(m(a[2]))[i], toArray(m(a[3]))[i]] : [x, toArray(m(a[2]))[i]]) : matRows(m(a[1])); const tets = alphaSimplices(g); return ret(colVec(Q.map((q) => { for (const s of tets) { const w = barycentricND(s.map((v) => g.points[v]), q); if (w.every((x) => x >= -1e-9)) return 1; } return 0; }))); },
  boundaryFacets: async (a) => { const g = gGeom(a[0]); const fb = alphaBoundary(g); const out = zeros(fb.length, g.dim); fb.forEach((e, i) => e.forEach((v, j) => { out.data[i + j * fb.length] = v + 1; })); return ret(out); },
  criticalAlpha: async (a) => ret(scalar(alphaCritical(gGeom(a[0]).points, gGeom(a[0]).dim))),
  alphaSpectrum: async (a) => { const g = gGeom(a[0]); const radii = alphaSimplicesAll(g).map((s) => circumRadius(s.map((v) => g.points[v]))).sort((x, y) => x - y); return ret(colVec([...new Set(radii)])); },
  numRegions: async (a) => ret(scalar(gGeom(a[0]).points.length ? 1 : 0)),
  triplot: async (a, _n, env) => {
    let T: number[][], x: number[], y: number[];
    if (isGeom(a[0])) { const g = a[0]; T = g.conn ?? []; x = g.points.map((p) => p[0]); y = g.points.map((p) => p[1]); }
    else { T = matRows(m(a[0])).map((r) => r.map((v) => Math.round(v) - 1)); x = toArray(m(a[1])); y = toArray(m(a[2])); }
    const px: number[] = [], py: number[] = [];
    for (const t of T) { for (let i = 0; i <= t.length; i++) { const v = t[i % t.length]; px.push(x[v]); py.push(y[v]); } px.push(NaN); py.push(NaN); }
    env.graphics.addSeries(px, py); return [];
  },
  rgbplot: async (a, _n, env) => { const C = m(a[0]); const idx = Array.from({ length: C.rows }, (_, i) => i + 1); env.graphics.hold(false); for (let col = 0; col < 3; col++) { if (col === 1) env.graphics.hold(true); env.graphics.addSeries(idx, Array.from({ length: C.rows }, (_, i) => C.data[i + col * C.rows]), ['r', 'g', 'b'][col]); } env.graphics.hold(false); return []; },
  // interpolant objects (returned as callable handles: F(xq,yq))
  scatteredInterpolant: async (a) => {
    const cols = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    const d = cols.length - 1; const P = cols.slice(0, d).map((c) => toArray(c)); const v = toArray(cols[d]);
    const pts = P[0].map((_, i) => P.map((col) => col[i]));
    const tri = d === 2 ? delaunayTri(pts.map((p) => p[0]), pts.map((p) => p[1])) : delaunaynd(pts);
    const call = async (args: Value[]): Promise<Value[]> => {
      const qc = args.filter((x): x is Mat => isMat(x)); const Q = qc.length >= d ? toArray(qc[0]).map((_, i) => qc.slice(0, d).map((c) => toArray(c)[i])) : matRows(qc[0]);
      const out = Q.map((q) => { for (const sx of tri) { const w = barycentricND(sx.map((vi) => pts[vi]), q); if (w.every((x) => x >= -1e-9)) return w.reduce((acc, wi, k) => acc + wi * v[sx[k]], 0); } let best = 0, bd = Infinity; pts.forEach((p, i) => { const dd = p.reduce((s, x, j) => s + (x - q[j]) ** 2, 0); if (dd < bd) { bd = dd; best = i; } }); return v[best]; });
      return [colVec(out)];
    };
    return ret({ kind: 'handle', name: 'scatteredInterpolant', call } as Handle);
  },
  griddedInterpolant: async (a, _n, env) => {
    const call = async (args: Value[]): Promise<Value[]> => {
      if (a.length >= 3) return BUILTINS.interp2([a[0], a[1], a[2], ...args], 1, env);
      return BUILTINS.interp1([Array.from({ length: numel(m(a[0])) }, (_, i) => i + 1) as unknown as Value, a[0], ...args].map((x, i) => (i === 0 ? rowVec(toArray(m(a[0])).map((_, k) => k + 1)) : x)), 1, env);
    };
    return ret({ kind: 'handle', name: 'griddedInterpolant', call } as Handle);
  },
  // triangulation incidence / normals
  edgeAttachments: async (a) => { const g = gGeom(a[0]); const u = Math.round(asScalar(a[1])) - 1, v = Math.round(asScalar(a[2])) - 1; const idx: number[] = []; (g.conn ?? []).forEach((t, i) => { if (t.includes(u) && t.includes(v)) idx.push(i + 1); }); return ret(makeCell(1, 1, [rowVec(idx)])); },
  vertexAttachments: async (a) => { const g = gGeom(a[0]); const v = a.length >= 2 ? toArray(m(a[1])).map((x) => Math.round(x) - 1) : g.points.map((_, i) => i); const cells = v.map((vi) => { const idx: number[] = []; (g.conn ?? []).forEach((t, i) => { if (t.includes(vi)) idx.push(i + 1); }); return rowVec(idx) as Value; }); return ret(makeCell(cells.length, 1, cells)); },
  vertexNormal: async (a) => { const g = gGeom(a[0]); const acc = g.points.map(() => [0, 0, 0]); for (const t of g.conn ?? []) { const p = t.map((vi) => g.points[vi]); const u = p[1].map((x, j) => x - p[0][j]), w = p[2].map((x, j) => x - p[0][j]); const nrm = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; for (const vi of t) for (let j = 0; j < 3; j++) acc[vi][j] += nrm[j]; } return ret(fromRows(acc.map((n) => { const L = Math.hypot(...n) || 1; return n.map((x) => x / L); }))); },
  featureEdges: async (a) => { const g = gGeom(a[0]); const thr = a.length >= 2 ? asScalar(a[1]) : Math.PI / 6; const faceN = (t: number[]) => { const p = t.map((vi) => g.points[vi]); const u = p[1].map((x, j) => x - p[0][j]), w = p[2].map((x, j) => x - p[0][j]); const nn = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]]; const L = Math.hypot(...nn) || 1; return nn.map((x) => x / L); }; const edgeFaces = new Map<string, { e: number[]; faces: number[] }>(); (g.conn ?? []).forEach((t, ti) => { for (let k = 0; k < t.length; k++) { const e = [t[k], t[(k + 1) % t.length]].sort((x, y) => x - y); const key = e.join('_'); const en = edgeFaces.get(key) ?? edgeFaces.set(key, { e, faces: [] }).get(key)!; en.faces.push(ti); } }); const feat: number[][] = []; for (const { e, faces } of edgeFaces.values()) { if (faces.length === 1) { feat.push(e); continue; } if (faces.length === 2) { const n1 = faceN(g.conn![faces[0]]), n2 = faceN(g.conn![faces[1]]); const dot = Math.max(-1, Math.min(1, n1[0] * n2[0] + n1[1] * n2[1] + n1[2] * n2[2])); if (Math.acos(Math.abs(dot)) > thr) feat.push(e); } } const out = zeros(feat.length, 2); feat.forEach((e, i) => { out.data[i] = e[0] + 1; out.data[i + feat.length] = e[1] + 1; }); return ret(out); },
  overlaps: async (a) => { const g1 = gGeom(a[0]), g2 = gGeom(a[1]); const bb = (g: Geom) => { const xs = g.points.filter((p) => !Number.isNaN(p[0])).map((p) => p[0]), ys = g.points.filter((p) => !Number.isNaN(p[0])).map((p) => p[1]); return [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)]; }; const b1 = bb(g1), b2 = bb(g2); const o = bool(b1[0] <= b2[1] && b2[0] <= b1[1] && b1[2] <= b2[3] && b2[2] <= b1[3]); return ret(o); },
  holes: async (a) => { gGeom(a[0]); return ret({ kind: 'geom', gkind: 'polyshape', points: [], dim: 2 } as Geom); },
  ishole: async (a) => { const g = gGeom(a[0]); let nb = g.points.length ? 1 : 0; for (const p of g.points) if (Number.isNaN(p[0])) nb++; const o = zeros(nb, 1); o.isBool = true; return ret(o); },
  issimplified: async () => ret(bool(true)),
  isInterior: async (a) => { const g = gGeom(a[0]); const o = zeros((g.conn ?? []).length, 1); o.isBool = true; for (let i = 0; i < o.data.length; i++) o.data[i] = 1; return ret(o); },
  sortboundaries: async (a) => ret(a[0]), rmholes: async (a) => ret(a[0]), rmslivers: async (a) => ret(a[0]), sortregions: async (a) => ret(a[0]),
  boundaryshape: async (a) => { const g = gGeom(a[0]); if (g.gkind === 'polyshape') return ret(g); const pts = g.points; const k = pts[0]?.length === 2 ? convHull2D(pts.map((p) => p[0]), pts.map((p) => p[1])) : []; return ret({ kind: 'geom', gkind: 'polyshape', points: k.map((i) => pts[i - 1]), dim: 2 } as Geom); },
  unmesh: async (a, n) => { const g = gGeom(a[0]); const P = fromRows(g.points); const T = zeros((g.conn ?? []).length, g.dim + 1); (g.conn ?? []).forEach((s, i) => s.forEach((v, j) => { T.data[i + j * (g.conn ?? []).length] = v + 1; })); return n >= 2 ? [P, T] : [P]; },
  regions: async (a) => ret(makeCell(1, 1, [a[0]])),
  addboundary: async (a) => { const g = gGeom(a[0]); const x = a.length >= 3 ? toArray(m(a[1])) : matRows(m(a[1])).map((p) => p[0]); const y = a.length >= 3 ? toArray(m(a[2])) : matRows(m(a[1])).map((p) => p[1]); const pts = g.points.slice(); if (pts.length) pts.push([NaN, NaN]); x.forEach((xi, i) => pts.push([xi, y[i]])); return ret({ ...g, points: pts } as Geom); },
  rmboundary: async (a) => { const g = gGeom(a[0]); const k = Math.round(asScalar(a[1])); const bnds: number[][][] = [[]]; for (const p of g.points) { if (Number.isNaN(p[0])) bnds.push([]); else bnds[bnds.length - 1].push(p); } bnds.splice(k - 1, 1); const pts: number[][] = []; bnds.forEach((b, i) => { if (i > 0) pts.push([NaN, NaN]); pts.push(...b); }); return ret({ ...g, points: pts } as Geom); },
  nearestvertex: async (a) => { const g = gGeom(a[0]); const qx = asScalar(a[1]), qy = a.length >= 3 ? asScalar(a[2]) : 0; let best = 0, bd = Infinity; g.points.forEach((p, i) => { if (Number.isNaN(p[0])) return; const d = (p[0] - qx) ** 2 + (p[1] - qy) ** 2; if (d < bd) { bd = d; best = i; } }); return ret(scalar(best + 1)); },
  boundingbox: async (a) => { const g = gGeom(a[0]); const v = g.points.filter((p) => !Number.isNaN(p[0])); const xs = v.map((p) => p[0]), ys = v.map((p) => p[1]); return ret(fromRows([[Math.min(...xs), Math.min(...ys)], [Math.max(...xs), Math.max(...ys)]])); },
  alphaTriangulation: async (a) => { const g = gGeom(a[0]); const tris = alphaSimplices(g); const T = zeros(tris.length, g.dim + 1); tris.forEach((s, i) => s.forEach((v, j) => { T.data[i + j * tris.length] = v + 1; })); return ret(T); },
  cr1Gate: async (a) => ret(mkGate('r1', qList(a[1]), qList(a[0]), [asScalar(a[2])])),
  initGate: async (a) => ret(mkGate('id', qList(a[0]))),
  fftw: async () => ret(str('estimate')),
  svdappend: async (a, n) => { const A = m(a[0]); const { U, s, V } = svdReal(A); const S = zeros(s.length, s.length); s.forEach((x, i) => { S.data[i + i * s.length] = x; }); return n >= 3 ? [U, S, V] : [colVec(s)]; },

  // ═══════════════════════ QUANTUM · QUBO / QAOA ═══════════════════════
  // ── Quantum computing: gates, circuits, simulation ──
  hGate: async (a) => ret(mkGate('h', qList(a[0]))),
  xGate: async (a) => ret(mkGate('x', qList(a[0]))),
  yGate: async (a) => ret(mkGate('y', qList(a[0]))),
  zGate: async (a) => ret(mkGate('z', qList(a[0]))),
  sGate: async (a) => ret(mkGate('s', qList(a[0]))),
  siGate: async (a) => ret(mkGate('si', qList(a[0]))),
  tGate: async (a) => ret(mkGate('t', qList(a[0]))),
  tiGate: async (a) => ret(mkGate('ti', qList(a[0]))),
  idGate: async (a) => ret(mkGate('id', qList(a[0]))),
  rxGate: async (a) => ret(mkGate('rx', qList(a[0]), [], [asScalar(a[1])])),
  ryGate: async (a) => ret(mkGate('ry', qList(a[0]), [], [asScalar(a[1])])),
  rzGate: async (a) => ret(mkGate('rz', qList(a[0]), [], [asScalar(a[1])])),
  cxGate: async (a) => ret(mkGate('x', qList(a[1]), qList(a[0]))),
  cnotGate: async (a) => ret(mkGate('x', qList(a[1]), qList(a[0]))),
  cyGate: async (a) => ret(mkGate('y', qList(a[1]), qList(a[0]))),
  czGate: async (a) => ret(mkGate('z', qList(a[1]), qList(a[0]))),
  chGate: async (a) => ret(mkGate('h', qList(a[1]), qList(a[0]))),
  crxGate: async (a) => ret(mkGate('rx', qList(a[1]), qList(a[0]), [asScalar(a[2])])),
  cryGate: async (a) => ret(mkGate('ry', qList(a[1]), qList(a[0]), [asScalar(a[2])])),
  crzGate: async (a) => ret(mkGate('rz', qList(a[1]), qList(a[0]), [asScalar(a[2])])),
  swapGate: async (a) => ret(mkGate('swap', [qList(a[0])[0], qList(a[1])[0]])),
  ccxGate: async (a) => ret(mkGate('x', qList(a[2]), [qList(a[0])[0], qList(a[1])[0]])),
  mcxGate: async (a) => ret(mkGate('x', qList(a[1]), qList(a[0]))),
  r1Gate: async (a) => ret(mkGate('r1', qList(a[0]), [], [asScalar(a[1])])),
  rxxGate: async (a) => ret(mkGate('rxx', [qList(a[0])[0], qList(a[1])[0]], [], [asScalar(a[2])])),
  ryyGate: async (a) => ret(mkGate('ryy', [qList(a[0])[0], qList(a[1])[0]], [], [asScalar(a[2])])),
  rzzGate: async (a) => ret(mkGate('rzz', [qList(a[0])[0], qList(a[1])[0]], [], [asScalar(a[2])])),
  qftGate: async (a) => ret(mkGate('qft', qList(a[0]))),
  ucrxGate: async (a) => ret(mkGate('rx', qList(a[1]), qList(a[0]), [toArray(m(a[2]))[0]])),
  ucryGate: async (a) => ret(mkGate('ry', qList(a[1]), qList(a[0]), [toArray(m(a[2]))[0]])),
  ucrzGate: async (a) => ret(mkGate('rz', qList(a[1]), qList(a[0]), [toArray(m(a[2]))[0]])),
  unitaryGate: async (a) => { const q = qList(a[0]); const U = m(a[1]); const flat: number[] = []; for (let r = 0; r < U.rows; r++) for (let c = 0; c < U.cols; c++) flat.push(U.data[r + c * U.rows], U.idata ? U.idata[r + c * U.rows] : 0); const g = mkGate('unitary', q); g.umat = flat; return ret(g); },
  compositeGate: async (a) => { const subs: Quantum[] = []; const collect = (v: Value) => { if (isQuantum(v) && v.qkind === 'gate') subs.push(v); else if (isCell(v)) v.items.forEach(collect); }; collect(a[0]); const g = mkGate('composite', a.length >= 2 ? qList(a[1]) : []); g.subgates = subs; return ret(g); },
  observable: async (a) => ret(mkGate('observable', a.length >= 2 ? qList(a[1]) : [])),
  // ── QUBO / QAOA optimization ──
  qubo: async (a) => { const Q = m(a[0]); const c = a.length >= 2 && isMat(a[1]) ? colVec(toArray(m(a[1]))) : zeros(Q.rows, 1); const d = a.length >= 3 ? asScalar(a[2]) : 0; return ret(makeQubo(Q, c, d)); },
  evaluateObjective: async (a) => { const q = a[0] as StructV; const x = toArray(m(a[1])); return ret(scalar(quboEnergy(m(q.fields.get('Q')![0]), toArray(m(q.fields.get('c')![0])), asScalar(q.fields.get('d')![0]), x))); },
  tabuSearch: async (a) => ret(quboSolveResult(a[0] as StructV)),
  qaoa: async (a) => { const qi = a.find((x) => isStruct(x) && (x as StructV).fields.has('Q')) as StructV; return ret(quboSolveResult(qi, 'qaoa')); },
  qubo2ising: async (a, n) => {
    const q = a[0] as StructV; const Q = m(q.fields.get('Q')![0]); const cc = toArray(m(q.fields.get('c')![0])); const d = asScalar(q.fields.get('d')![0]); const nv = Q.rows;
    // x = (1 - s)/2 (s = ±1). Build h, J, offset.
    const J = zeros(nv, nv); const h = new Array(nv).fill(0); let off = d;
    for (let i = 0; i < nv; i++) { off += 0.5 * cc[i]; h[i] -= 0.5 * cc[i]; for (let j = 0; j < nv; j++) { const qij = Q.data[i + j * nv]; if (i === j) { off += 0.5 * qij; h[i] -= 0.5 * qij; } else { J.data[i + j * nv] += 0.25 * qij; h[i] -= 0.25 * qij; h[j] -= 0.25 * qij; off += 0.25 * qij; } } }
    return n >= 3 ? [colVec(h), J, scalar(off)] : n >= 2 ? [colVec(h), J] : [colVec(h)];
  },
  maxcut2qubo: async (a) => { const W = isGraph(a[0]) ? adjacencyMat(a[0]) : m(a[0]); const nv = W.rows; const Q = zeros(nv, nv); for (let i = 0; i < nv; i++) { let deg = 0; for (let j = 0; j < nv; j++) { deg += W.data[i + j * nv]; if (i !== j) Q.data[i + j * nv] = W.data[i + j * nv]; } Q.data[i + i * nv] = -deg; } return ret(makeQubo(Q, zeros(nv, 1), 0)); },
  knapsack2qubo: async (a) => { const w = toArray(m(a[0])), v = toArray(m(a[1])), cap = asScalar(a[2]); const nv = w.length; const P = (v.reduce((s, x) => s + Math.abs(x), 0)) + 1; const Q = zeros(nv, nv); const c = new Array(nv).fill(0); for (let i = 0; i < nv; i++) { c[i] = -v[i] + P * (w[i] * w[i] - 2 * cap * w[i]); for (let j = 0; j < nv; j++) if (i !== j) Q.data[i + j * nv] = P * w[i] * w[j]; } return ret(makeQubo(Q, colVec(c), P * cap * cap)); },
  tsp2qubo: async (a) => { const D = m(a[0]); const ncity = D.rows; const nv = ncity * ncity; const Q = zeros(nv, nv); const idx = (i: number, p: number) => i * ncity + p; const P = (toArray(D).reduce((s, x) => s + x, 0)) + 1; for (let i = 0; i < ncity; i++) for (let p = 0; p < ncity; p++) { Q.data[idx(i, p) + idx(i, p) * nv] -= 2 * P; for (let q = 0; q < ncity; q++) if (q !== p) Q.data[idx(i, p) + idx(i, q) * nv] += P; for (let j = 0; j < ncity; j++) if (j !== i) Q.data[idx(i, p) + idx(j, p) * nv] += P; } for (let i = 0; i < ncity; i++) for (let j = 0; j < ncity; j++) if (i !== j) for (let p = 0; p < ncity; p++) { const pn = (p + 1) % ncity; Q.data[idx(i, p) + idx(j, pn) * nv] += D.data[i + j * ncity] / 2; Q.data[idx(j, pn) + idx(i, p) * nv] += D.data[i + j * ncity] / 2; } return ret(makeQubo(Q, zeros(nv, 1), 2 * P * ncity)); },
  quboResult2knapsack: async (a) => { const res = a[0] as StructV; return ret(res.fields.get('BestX')![0]); },
  quboResult2tsp: async (a) => { const res = a[0] as StructV; return ret(res.fields.get('BestX')![0]); },
  quantumCircuit: async (a) => {
    let nq = 0; const gates: Quantum[] = [];
    const collect = (v: Value) => { if (isQuantum(v) && v.qkind === 'gate') gates.push(v); else if (isCell(v)) v.items.forEach(collect); else if (isMat(v) && numel(v) === 1) nq = Math.max(nq, Math.round(asScalar(v))); };
    for (const arg of a) collect(arg);
    const maxQ = (g: Quantum): number => Math.max(0, ...(g.targets ?? []), ...(g.controls ?? []), ...(g.subgates ?? []).map(maxQ));
    for (const g of gates) nq = Math.max(nq, maxQ(g));
    return ret({ kind: 'quantum', qkind: 'circuit', numQubits: nq, gates } as Quantum);
  },
  simulate: async (a) => { const c = qArg(a[0]); if (c.qkind !== 'circuit') throw new MatError('simulate: expected a quantumCircuit'); return ret(simulateCircuit(c)); },
  probability: async (a) => { const st = qArg(a[0]); const n = st.re!.length; const p = zeros(n, 1); for (let i = 0; i < n; i++) p.data[i] = st.re![i] ** 2 + st.im![i] ** 2; return ret(p); },
  querystates: async (a) => { const st = qArg(a[0]); const nq = st.numQubits!; const labels = Array.from({ length: st.re!.length }, (_, i) => '|' + i.toString(2).padStart(nq, '0') + '⟩'); return ret(makeStrArr(labels.length, 1, labels)); },
  formula: async (a) => ret(str(stateFormula(qArg(a[0])))),
  interp3: async (a) => {
    // interp3(V,Xq,Yq,Zq) or interp3(X,Y,Z,V,Xq,Yq,Zq) — trilinear on a regular grid.
    let V: Mat, Xq: Mat, Yq: Mat, Zq: Mat, xv: number[], yv: number[], zv: number[];
    const gridVec = (M: Mat, axis: 1 | 2 | 3, d: number[]): number[] => {
      if (M.nd || M.rows > 1 && M.cols > 1) { const dd = ndSize(M); const r = dd[0], rc = r * (dd[1] ?? 1); if (axis === 1) return Array.from({ length: dd[0] }, (_, i) => M.data[i]); if (axis === 2) return Array.from({ length: dd[1] ?? 1 }, (_, j) => M.data[j * r]); return Array.from({ length: dd[2] ?? 1 }, (_, k) => M.data[k * rc]); }
      return toArray(M); void d;
    };
    if (a.length >= 7) { const X = m(a[0]), Y = m(a[1]), Z = m(a[2]); V = m(a[3]); Xq = m(a[4]); Yq = m(a[5]); Zq = m(a[6]); const d = ndSize(V); xv = gridVec(X, 2, d); yv = gridVec(Y, 1, d); zv = gridVec(Z, 3, d); }
    else { V = m(a[0]); Xq = m(a[1]); Yq = m(a[2]); Zq = m(a[3]); const d = ndSize(V); xv = Array.from({ length: d[1] ?? 1 }, (_, i) => i + 1); yv = Array.from({ length: d[0] }, (_, i) => i + 1); zv = Array.from({ length: d[2] ?? 1 }, (_, i) => i + 1); }
    const d = ndSize(V); const d0 = d[0], d1 = d[1] ?? 1;
    const at = (i: number, j: number, k: number) => V.data[i + j * d0 + k * d0 * d1];
    const loc = (g: number[], q: number): [number, number] => { let i = 0; while (i < g.length - 2 && q > g[i + 1]) i++; const t = (g[i + 1] === g[i]) ? 0 : (q - g[i]) / (g[i + 1] - g[i]); return [i, t]; };
    const out = makeND(ndSize(Xq), new Float64Array(numel(Xq)), { isChar: false });
    for (let p = 0; p < numel(Xq); p++) {
      const [i, ty] = loc(yv, Yq.data[p]), [j, tx] = loc(xv, Xq.data[p]), [k, tz] = loc(zv, Zq.data[p]);
      const c000 = at(i, j, k), c100 = at(i + 1, j, k), c010 = at(i, j + 1, k), c110 = at(i + 1, j + 1, k);
      const c001 = at(i, j, k + 1), c101 = at(i + 1, j, k + 1), c011 = at(i, j + 1, k + 1), c111 = at(i + 1, j + 1, k + 1);
      const c00 = c000 * (1 - ty) + c100 * ty, c10 = c010 * (1 - ty) + c110 * ty, c01 = c001 * (1 - ty) + c101 * ty, c11 = c011 * (1 - ty) + c111 * ty;
      const c0 = c00 * (1 - tx) + c10 * tx, c1 = c01 * (1 - tx) + c11 * tx;
      out.data[p] = c0 * (1 - tz) + c1 * tz;
    }
    if (Xq.nd) out.nd = Xq.nd.slice();
    return ret(out);
  },
  interpn: async (a) => {
    // ndgrid-convention multilinear interpolation (dim k ↔ query k), unlike interp2/3
    // which use meshgrid (dims 1,2 swapped). Two layouts:
    //   compact: interpn(V, q1…qd)        → d+1 args  (grids default to 1:n_k)
    //   gridded: interpn(X1…Xd, V, q1…qd) → 2d+1 args
    const L = a.length;
    const layout: Record<number, [number, boolean]> = { 2: [1, false], 3: [2, false], 4: [3, false], 5: [2, true], 7: [3, true] };
    if (!layout[L]) throw new MatError('interpn: only 1-D, 2-D and 3-D gridded interpolation are supported');
    const [D, gridded] = layout[L];
    const V = m(a[gridded ? D : 0]);
    // For 1-D, a row/col vector reports ndSize [1,n] or [n,1]; use its length as the axis.
    const ed = D === 1 ? [numel(V)] : ndSize(V);
    const stride: number[] = []; { let s = 1; for (let k = 0; k < D; k++) { stride.push(s); s *= (ed[k] ?? 1); } }
    const grids: number[][] = [];
    for (let k = 0; k < D; k++) {
      const nk = ed[k] ?? 1;
      grids.push(gridded ? Array.from({ length: nk }, (_, t) => m(a[k]).data[t * stride[k]]) : Array.from({ length: nk }, (_, t) => t + 1));
    }
    const qStart = gridded ? D + 1 : 1; const qs = Array.from({ length: D }, (_, k) => m(a[qStart + k]));
    const loc = (g: number[], q: number): [number, number] => { let i = 0; while (i < g.length - 2 && q > g[i + 1]) i++; const t = g[i + 1] === g[i] ? 0 : (q - g[i]) / (g[i + 1] - g[i]); return [i, t]; };
    const out = makeND(ndSize(qs[0]), new Float64Array(numel(qs[0])));
    for (let p = 0; p < out.data.length; p++) {
      const idx: number[] = [], ts: number[] = [];
      for (let k = 0; k < D; k++) { const [i, t] = loc(grids[k], qs[k].data[p]); idx.push(i); ts.push(t); }
      let val = 0;
      for (let c = 0; c < (1 << D); c++) { let w = 1, off = 0; for (let k = 0; k < D; k++) { const bit = (c >> k) & 1; w *= bit ? ts[k] : 1 - ts[k]; off += (idx[k] + bit) * stride[k]; } if (w !== 0) val += w * V.data[off]; }
      out.data[p] = val;
    }
    return ret(out);
  },
  pchip: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const d = pchipSlopes(x, y); if (a.length < 3) return ret(makePP(x, hermiteCoefs(x, y, d))); return ret(map(m(a[2]), (q) => hermiteEval(x, y, d, q))); },
  makima: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const d = akimaSlopes(x, y); if (a.length < 3) return ret(makePP(x, hermiteCoefs(x, y, d))); return ret(map(m(a[2]), (q) => hermiteEval(x, y, d, q))); },
  mkpp: async (a) => { const breaks = toArray(m(a[0])); const coefs = m(a[1]); return ret(makePP(breaks, coefs)); },
  unmkpp: async (a, n) => { const { breaks, coefs, L, k } = readPP(a[0]); const out: Value[] = [rowVec(breaks), coefs, scalar(L), scalar(k), scalar(1)]; return out.slice(0, Math.max(1, n)); },
  ppval: async (a) => { const pp = readPP(a[0]); const xq = m(a[1]); return ret(map(xq, (q) => ppEval(pp, q))); },
  fnval: async (a) => { const pp = readPP(a[0]); const xq = m(a[1]); return ret(map(xq, (q) => ppEval(pp, q))); },
  fnder: async (a) => ret(ppDer(readPP(a[0]))),
  fnint: async (a) => ret(ppInt(readPP(a[0]))),
  fnbrk: async (a, n) => { const pp = readPP(a[0]); const part = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) ? asString(a[1]).toLowerCase() : ''; if (part.startsWith('c')) return ret(pp.coefs); if (part.startsWith('p') || part === 'l') return ret(scalar(pp.L)); if (part.startsWith('o') || part === 'k') return ret(scalar(pp.k)); if (part.startsWith('i')) return ret(rowVec([pp.breaks[0], pp.breaks[pp.breaks.length - 1]])); void n; return ret(rowVec(pp.breaks)); },
  fnplt: async (a, _n, env) => { const pp = readPP(a[0]); const lo = pp.breaks[0], hi = pp.breaks[pp.breaks.length - 1]; const N = 400; const xs: number[] = [], ys: number[] = []; for (let i = 0; i < N; i++) { const x = lo + (hi - lo) * i / (N - 1); xs.push(x); ys.push(ppEval(pp, x)); } env.graphics.addSeries(xs, ys); return []; },
  fnmin: async (a, n) => { const pp = readPP(a[0]); let lo = pp.breaks[0], hi = pp.breaks[pp.breaks.length - 1]; if (a.length >= 2 && isMat(a[1]) && numel(a[1]) >= 2) { const r = toArray(m(a[1])); lo = r[0]; hi = r[1]; } let best = Infinity, bx = lo; const N = 2000; for (let i = 0; i <= N; i++) { const x = lo + (hi - lo) * i / N; const v = ppEval(pp, x); if (v < best) { best = v; bx = x; } } return n >= 2 ? [scalar(best), scalar(bx)] : [scalar(best)]; },
  fnzeros: async (a) => { const pp = readPP(a[0]); const roots: number[] = []; for (let i = 0; i < pp.L; i++) { const c: number[] = []; for (let j = 0; j < pp.k; j++) c.push(pp.coefs.data[i + j * pp.L]); const { re, im } = durandKerner(c); const h = pp.breaks[i + 1] - pp.breaks[i]; for (let r = 0; r < re.length; r++) if (Math.abs(im[r]) < 1e-9 && re[r] >= -1e-9 && re[r] <= h + 1e-9) { const x = pp.breaks[i] + re[r]; if (!roots.some((rr) => Math.abs(rr - x) < 1e-9)) roots.push(x); } } roots.sort((x, y) => x - y); return ret(rowVec(roots)); },
  csapi: async (a, n, env) => BUILTINS.spline([a[0], a[1]], n, env),
  csape: async (a, n, env) => BUILTINS.spline([a[0], a[1]], n, env),
  fittype: async (a) => { const { formula, coeffs, indep } = fittypeOf(asString(a[0])); return ret(mkStruct([['type', str('fittype')], ['formula', str(formula)], ['coefficients', makeCell(coeffs.length, 1, coeffs.map((c) => str(c)))], ['independentVar', str(indep)]])); },
  fit: async (a, n, env) => {
    const x = toArray(m(a[0])), y = toArray(m(a[1])); const ftv = a[2];
    let formula: string, coeffs: string[], indep: string;
    if (isStruct(ftv) && asString(ftv.fields.get('type')?.[0] ?? str('')) === 'fittype') { formula = asString(ftv.fields.get('formula')![0]); coeffs = (ftv.fields.get('coefficients')![0] as Cell).items.map((c) => asString(c)); indep = asString(ftv.fields.get('independentVar')![0]); }
    else ({ formula, coeffs, indep } = fittypeOf(asString(ftv)));
    const body = formula.replace(/\^/g, '.^').replace(/\*/g, '.*').replace(/\//g, './');
    const modelH = await env.evalInput(`@(${[...coeffs, indep].join(',')}) ${body}`) as Handle;
    const xcol = colVec(x);
    const resid = async (c: number[]) => { const mv = toArray(m((await env.callHandle(modelH, [...c.map((v) => scalar(v)), xcol], 1))[0])); return mv.map((v, i) => v - y[i]); };
    const cv = await levMar(resid, coeffs.map(() => 1));
    let fbody = body; coeffs.forEach((cn, i) => { fbody = fbody.replace(new RegExp('\\b' + cn + '\\b', 'g'), `(${cv[i]})`); });
    const fitH = await env.evalInput(`@(${indep}) ${fbody}`) as Handle;
    (fitH as unknown as { coeffNames: string[]; coeffValues: number[] }).coeffNames = coeffs;
    (fitH as unknown as { coeffNames: string[]; coeffValues: number[] }).coeffValues = cv;
    if (n >= 2) { const r = await resid(cv); const sse = r.reduce((s, v) => s + v * v, 0); const ybar = y.reduce((s, v) => s + v, 0) / (y.length || 1); const sst = y.reduce((s, v) => s + (v - ybar) ** 2, 0) || 1; const gof = mkStruct([['sse', scalar(sse)], ['rsquare', scalar(1 - sse / sst)], ['dfe', scalar(Math.max(0, y.length - coeffs.length))], ['rmse', scalar(Math.sqrt(sse / Math.max(1, y.length - coeffs.length)))]]); return [fitH, gof]; }
    return ret(fitH);
  },
  coeffvalues: async (a) => ret(rowVec((a[0] as unknown as { coeffValues?: number[] }).coeffValues ?? [])),
  coeffnames: async (a) => { const ns = (a[0] as unknown as { coeffNames?: string[] }).coeffNames ?? (isStruct(a[0]) && (a[0] as StructV).fields.get('coefficients') ? ((a[0] as StructV).fields.get('coefficients')![0] as Cell).items.map((c) => asString(c)) : []); return ret(makeCell(ns.length, 1, ns.map((c) => str(c)))); },
  interpft: async (a) => {
    // FFT resample x to length ny: insert zero high-frequencies, inverse transform.
    const x = toArray(m(a[0])); const ny = Math.round(asScalar(a[1])); const nx = x.length;
    const F = fftVec(x, new Array(nx).fill(0), -1);
    const Re = new Array(ny).fill(0), Im = new Array(ny).fill(0);
    const half = Math.floor(nx / 2);
    for (let k = 0; k <= half; k++) { Re[k] = F.re[k]; Im[k] = F.im[k]; }
    for (let k = 1; k < nx - half; k++) { Re[ny - k] = F.re[nx - k]; Im[ny - k] = F.im[nx - k]; }
    const inv = fftVec(Re, Im, 1);          // unscaled inverse
    const res = inv.re.map((v) => v / nx);  // = (inv/ny)*(ny/nx)
    return ret(m(a[0]).cols === 1 ? colVec(res) : rowVec(res));
  },
  integral2: async (a, _n, env) => {
    const f = handle(a[0], 'integral2'); const ax = asScalar(a[1]), bx = asScalar(a[2]), ay = asScalar(a[3]), by = asScalar(a[4]);
    const F = async (x: number, y: number) => { const r = await env.callHandle(f, [scalar(x), scalar(y)], 1); return isMat(r[0]) ? asScalar(r[0]) : NaN; };
    return ret(scalar(await simpson2(F, ax, bx, ay, by, 48)));
  },
  integral3: async (a, _n, env) => {
    const f = handle(a[0], 'integral3'); const v = a.slice(1).map((x) => asScalar(x));
    const F = async (x: number, y: number, z: number) => { const r = await env.callHandle(f, [scalar(x), scalar(y), scalar(z)], 1); return isMat(r[0]) ? asScalar(r[0]) : NaN; };
    return ret(scalar(await simpson3(F, v[0], v[1], v[2], v[3], v[4], v[5], 16)));
  },

  // ═══════ ARRAY OPS · OPERATOR FNS · DESCRIPTIVE STATS · TRANSFORMS ═══════
  // ── supporting array constructors ──
  logspace: async (a) => { const lo = asScalar(a[0]), hi = asScalar(a[1]); const k = a.length >= 3 ? Math.round(asScalar(a[2])) : 50; const out: number[] = []; for (let i = 0; i < k; i++) out.push(Math.pow(10, lo + (hi - lo) * i / (k - 1))); return ret(rowVec(out)); },
  meshgrid: async (a, n) => {
    const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x;
    if (n >= 3 || a.length >= 3) {   // 3-D grid: [X,Y,Z] = meshgrid(x,y,z)
      const z = a.length >= 3 ? toArray(m(a[2])) : x; const ny = y.length, nx = x.length, nz = z.length; const sz = ny * nx * nz;
      const X = new Float64Array(sz), Y = new Float64Array(sz), Z = new Float64Array(sz);
      for (let k = 0; k < nz; k++) for (let c = 0; c < nx; c++) for (let r = 0; r < ny; r++) { const idx = r + c * ny + k * ny * nx; X[idx] = x[c]; Y[idx] = y[r]; Z[idx] = z[k]; }
      return [makeND([ny, nx, nz], X), makeND([ny, nx, nz], Y), makeND([ny, nx, nz], Z)];
    }
    const X = zeros(y.length, x.length), Y = zeros(y.length, x.length);
    for (let r = 0; r < y.length; r++) for (let c = 0; c < x.length; c++) { X.data[r + c * y.length] = x[c]; Y.data[r + c * y.length] = y[r]; }
    return n >= 2 ? [X, Y] : [X];
  },
  randn: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); for (let i = 0; i < data.length; i++) { const u = rngNext() || 1e-12, w = rngNext(); data[i] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w); } return ret(makeND(d, data)); },
  randi: async (a) => { const hi = Math.round(asScalar(a[0])); const r = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const c = a.length >= 3 ? Math.round(asScalar(a[2])) : r; const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = 1 + Math.floor(rngNext() * hi); return ret(o); },
  nnz: async (a) => ret(scalar(isSparse(a[0]) ? a[0].values.length : toArray(m(a[0])).filter((x) => x !== 0).length)),
  // ── array rearrangement ──
  blkdiag: async (a) => {
    const ps = a.map((v) => m(v)); const R = ps.reduce((s, p) => s + p.rows, 0), C = ps.reduce((s, p) => s + p.cols, 0);
    const o = zeros(R, C); let ro = 0, co = 0;
    for (const p of ps) { for (let c = 0; c < p.cols; c++) for (let r = 0; r < p.rows; r++) o.data[(ro + r) + (co + c) * R] = p.data[r + c * p.rows]; ro += p.rows; co += p.cols; }
    return ret(o);
  },
  ndgrid: async (a, n) => {
    const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x;
    if (n >= 3 || a.length >= 3) {   // 3-D: [X,Y,Z] = ndgrid(x,y,z)
      const z = a.length >= 3 ? toArray(m(a[2])) : x; const nx = x.length, ny = y.length, nz = z.length; const sz = nx * ny * nz;
      const X = new Float64Array(sz), Y = new Float64Array(sz), Z = new Float64Array(sz);
      for (let k = 0; k < nz; k++) for (let c = 0; c < ny; c++) for (let r = 0; r < nx; r++) { const idx = r + c * nx + k * nx * ny; X[idx] = x[r]; Y[idx] = y[c]; Z[idx] = z[k]; }
      return [makeND([nx, ny, nz], X), makeND([nx, ny, nz], Y), makeND([nx, ny, nz], Z)];
    }
    const X = zeros(x.length, y.length), Y = zeros(x.length, y.length);
    for (let r = 0; r < x.length; r++) for (let c = 0; c < y.length; c++) { X.data[r + c * x.length] = x[r]; Y.data[r + c * x.length] = y[c]; }
    return n >= 2 ? [X, Y] : [X];
  },
  permute: async (a) => ret(permuteND(m(a[0]), toArray(m(a[1])).map((x) => Math.round(x)))),
  ipermute: async (a) => { const ord = toArray(m(a[1])).map((x) => Math.round(x)); const inv = new Array(ord.length); ord.forEach((p, i) => { inv[p - 1] = i + 1; }); return ret(permuteND(m(a[0]), inv)); },
  shiftdim: async (a) => { const A = m(a[0]); const n = a.length >= 2 ? Math.round(asScalar(a[1])) : (A.rows === 1 ? 1 : 0); return ret(n % 2 !== 0 ? transpose(A) : A); },
  rot90: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; return ret(rot90n(A, k)); },
  circshift: async (a) => {
    const A = m(a[0]); const k = m(a[1]); const isVec = A.rows === 1 || A.cols === 1;
    let sr = 0, sc = 0;
    if (numel(k) >= 2) { sr = Math.round(k.data[0]); sc = Math.round(k.data[1]); }
    else if (isVec && A.rows === 1) sc = Math.round(k.data[0]); else sr = Math.round(k.data[0]);
    const o = zeros(A.rows, A.cols); o.isChar = A.isChar; const im = A.idata ? new Float64Array(A.rows * A.cols) : null;
    const mod = (x: number, n: number) => ((x % n) + n) % n;
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { const nr = mod(r + sr, A.rows), nc = mod(c + sc, A.cols); o.data[nr + nc * A.rows] = A.data[r + c * A.rows]; if (im) im[nr + nc * A.rows] = A.idata![r + c * A.rows]; }
    if (im) o.idata = im; return ret(o);
  },
  bsxfun: async (a, _n, env) => { const f = handle(a[0], 'bsxfun'); return env.callHandle(f, [a[1], a[2]], 1); },
  // ── operator functions (named forms, for feval/arrayfun/bsxfun) ──
  plus: async (a) => ret(ewAdd(m(a[0]), m(a[1]))),
  minus: async (a) => ret(ewSub(m(a[0]), m(a[1]))),
  uminus: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [-re, -im]) : map(A, (x) => -x)); },
  uplus: async (a) => ret(m(a[0])),
  times: async (a) => ret(ewMul(m(a[0]), m(a[1]))),
  mtimes: async (a) => ret(cmatmul(m(a[0]), m(a[1]))),
  rdivide: async (a) => ret(ewRDiv(m(a[0]), m(a[1]))),
  ldivide: async (a) => ret(ewLDiv(m(a[0]), m(a[1]))),
  mpower: async (a) => {
    const A = m(a[0]), B = m(a[1]);
    if (isScalar(A) && isScalar(B)) return ret(ewPow(A, B));
    if (isScalar(B)) { const p = asScalar(B); if (!Number.isInteger(p)) throw new MatError('mpower: non-integer matrix powers are not supported'); if (A.rows !== A.cols) throw new MatError('mpower: matrix must be square'); let base = p < 0 ? inv(A) : A; let acc = eye(A.rows); for (let k = 0; k < Math.abs(p); k++) acc = matmul(acc, base); void base; return ret(acc); }
    throw new MatError('mpower: at least one operand must be a scalar');
  },
  ctranspose: async (a) => ret(ctransposeFn(m(a[0]))),
  eq: async (a) => ret(ewEq(m(a[0]), m(a[1]), true)),
  ne: async (a) => ret(ewEq(m(a[0]), m(a[1]), false)),
  lt: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x < y ? 1 : 0)), isBool: true }),
  gt: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x > y ? 1 : 0)), isBool: true }),
  le: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x <= y ? 1 : 0)), isBool: true }),
  ge: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x >= y ? 1 : 0)), isBool: true }),
  and: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x !== 0 && y !== 0 ? 1 : 0)), isBool: true }),
  or: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x !== 0 || y !== 0 ? 1 : 0)), isBool: true }),
  not: async (a) => ret({ ...map(m(a[0]), (x) => (x === 0 ? 1 : 0)), isBool: true }),
  xor: async (a) => { if (isGeom(a[0]) && isGeom(a[1])) { const A = polyVerts(a[0]), B = polyVerts(a[1]); const parts = [...polyClip(A, B, 'minus'), ...polyClip(B, A, 'minus')].map((b) => (loopSignedArea(b) < 0 ? b.slice().reverse() : b)); return ret(polyResultGeom(parts)); } return ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => ((x !== 0) !== (y !== 0) ? 1 : 0)), isBool: true }); },
  // ── descriptive statistics ──
  median: async (a) => ret(colReduce(m(a[0]), (c) => { const s = [...c].sort((x, y) => x - y); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; })),
  std: async (a) => { const w = a.length >= 2 && isMat(a[1]) && toArray(a[1]).length === 1 ? asScalar(a[1]) : 0; return ret(colReduce(m(a[0]), (c) => Math.sqrt(variance(c, w)))); },
  var: async (a) => { const w = a.length >= 2 && isMat(a[1]) && toArray(a[1]).length === 1 ? asScalar(a[1]) : 0; return ret(colReduce(m(a[0]), (c) => variance(c, w))); },
  mode: async (a) => ret(colReduce(m(a[0]), modeOf)),
  iqr: async (a) => ret(colReduce(m(a[0]), (c) => { const s = [...c].sort((x, y) => x - y); return pctile(s, 75) - pctile(s, 25); })),
  bounds: async (a, n) => {
    const A = m(a[0]);
    const opt = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) ? asString(a[1]).toLowerCase() : null;
    const fmin = (s: number, x: number) => Math.min(s, x), fmax = (s: number, x: number) => Math.max(s, x);
    let lo: Mat, hi: Mat;
    if (opt === 'all') { const arr = toArray(A); lo = scalar(Math.min(...arr)); hi = scalar(Math.max(...arr)); }
    else if (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar && numel(a[1]) > 0) {
      const dims = toArray(a[1]).map((x) => Math.round(x));
      lo = dims.reduce((acc, d) => reduce(acc, d, Infinity, fmin), A);
      hi = dims.reduce((acc, d) => reduce(acc, d, -Infinity, fmax), A);
    } else { lo = reduce(A, undefined, Infinity, fmin); hi = reduce(A, undefined, -Infinity, fmax); }
    return n >= 2 ? [lo, hi] : [lo];
  },
  mink: async (a) => { const A = m(a[0]); const k = Math.round(asScalar(a[1])); const s = toArray(A).sort((x, y) => x - y).slice(0, k); return ret(A.rows === 1 ? rowVec(s) : colVec(s)); },
  maxk: async (a) => { const A = m(a[0]); const k = Math.round(asScalar(a[1])); const s = toArray(A).sort((x, y) => y - x).slice(0, k); return ret(A.rows === 1 ? rowVec(s) : colVec(s)); },
  prctile: async (a) => { const A = m(a[0]); const s = toArray(A).sort((x, y) => x - y); const P = m(a[1]); const out = map(P, (p) => pctile(s, p)); return ret(out); },
  quantile: async (a) => { const A = m(a[0]); const s = toArray(A).sort((x, y) => x - y); const Q = m(a[1]); const out = map(Q, (q) => pctile(s, q * 100)); return ret(out); },
  cov: async (a) => { let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]); else if (X.rows === 1 || X.cols === 1) return ret(scalar(variance(toArray(X)))); return ret(covMatrix(X)); },
  corrcoef: async (a) => { let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]); const C = covMatrix(X); const p = C.rows; const R = zeros(p, p); for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / Math.sqrt(C.data[i + i * p] * C.data[j + j * p]); return ret(R); },
  corrcov: async (a) => { const C = m(a[0]); const p = C.rows; const sd = Array.from({ length: p }, (_, i) => Math.sqrt(C.data[i + i * p])); const R = zeros(p, p); for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / (sd[i] * sd[j]); return ret(R); },
  humps: async (a) => { const x = a.length ? toArray(m(a[0])) : Array.from({ length: 101 }, (_, i) => i / 100); return ret(rowVec(x.map((t) => 1 / ((t - 0.3) ** 2 + 0.01) + 1 / ((t - 0.9) ** 2 + 0.04) - 6))); },
  normpdf: async (a) => { const x = m(a[0]); const mu = a.length >= 2 ? asScalar(a[1]) : 0, sg = a.length >= 3 ? asScalar(a[2]) : 1; return ret(map(x, (t) => Math.exp(-((t - mu) ** 2) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI)))); },
  normcdf: async (a) => { const x = m(a[0]); const mu = a.length >= 2 ? asScalar(a[1]) : 0, sg = a.length >= 3 ? asScalar(a[2]) : 1; return ret(map(x, (t) => 0.5 * (1 + erfFn((t - mu) / (sg * Math.SQRT2))))); },
  randsample: async (a) => {
    const first = m(a[0]); const pop = numel(first) === 1 ? Array.from({ length: Math.round(first.data[0]) }, (_, i) => i + 1) : toArray(first);
    const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const replace = a.length >= 3 && truthy(a[2]);
    const out: number[] = [];
    if (replace) { for (let i = 0; i < k; i++) out.push(pop[Math.floor(rngNext() * pop.length)]); }
    else { const idx = pop.map((_, i) => i); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rngNext() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } for (let i = 0; i < k; i++) out.push(pop[idx[i]]); }
    return ret(numel(first) === 1 || first.rows === 1 ? rowVec(out) : colVec(out));
  },
  timeit: async (a, _n, env) => {
    const f = handle(a[0], 'timeit'); const t0 = performance.now(); await env.callHandle(f, [], a.length >= 2 ? Math.round(asScalar(a[1])) : 0);
    const warm = performance.now() - t0; const reps = warm > 50 ? 3 : warm > 1 ? 20 : 100;
    const times: number[] = [];
    for (let i = 0; i < reps; i++) { const s = performance.now(); await env.callHandle(f, [], a.length >= 2 ? Math.round(asScalar(a[1])) : 0); times.push((performance.now() - s) / 1000); }
    times.sort((x, y) => x - y); return ret(scalar(times[Math.floor(times.length / 2)]));
  },
  jsonencode: async (a) => ret(str(jsonEncode(a[0]))),
  jsondecode: async (a) => ret(jsonDecode(JSON.parse(asString(a[0])))),
  movsum: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s + x, 0))),
  movmean: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s + x, 0) / w.length)),
  movmedian: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => { const s = [...w].sort((x, y) => x - y); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; })),
  movmax: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.max(...w))),
  movmin: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.min(...w))),
  accumarray: async (a, _n, env) => {
    const subsM = m(a[0]);
    const N = subsM.rows, K = subsM.cols || 1;
    const sub = (i: number, k: number) => Math.round(subsM.data[i + k * N]); // column-major
    const valsM = m(a[1]);
    const valAt = (i: number) => (valsM.data.length === 1 ? valsM.data[0] : valsM.data[i]);
    // output size: explicit sz arg, else max along each subscript column
    let sz: number[];
    if (a.length >= 3 && isMat(a[2]) && toArray(a[2]).length) sz = toArray(a[2]).map((x) => Math.round(x));
    else { sz = []; for (let k = 0; k < K; k++) { let mx = 0; for (let i = 0; i < N; i++) mx = Math.max(mx, sub(i, k)); sz.push(mx); } }
    if (sz.length < 2) sz = [sz[0] ?? 0, 1];          // K==1 -> column vector
    const fun = a.length >= 4 && isHandle(a[3]) ? (a[3] as Handle) : null;
    const fillval = a.length >= 5 && isMat(a[4]) && toArray(a[4]).length ? asScalar(a[4]) : 0;
    const wantSparse = a.length >= 6 && truthy(a[5]);
    const total = sz.reduce((x, y) => x * y, 1);
    const lin = (i: number) => { let idx = 0, stride = 1; for (let k = 0; k < K; k++) { idx += (sub(i, k) - 1) * stride; stride *= sz[k]; } return idx; };
    // group value indices by output linear index
    const groups = new Map<number, number[]>();
    for (let i = 0; i < N; i++) { const li = lin(i); const g = groups.get(li); if (g) g.push(i); else groups.set(li, [i]); }
    // reduce each group to a scalar (default sum) — fun receives a column vector
    const reduceGroup = async (idxs: number[]): Promise<number> => {
      if (!fun) { let s = 0; for (const i of idxs) s += valAt(i); return s; }
      const col = colVec(idxs.map(valAt));
      return asScalar((await env.callHandle(fun, [col], 1))[0]);
    };
    if (wantSparse) {
      const ii: number[] = [], jj: number[] = [], vs: number[] = [];
      for (const [li, idxs] of groups) { const v = await reduceGroup(idxs); if (v !== 0) { ii.push((li % sz[0]) + 1); jj.push(Math.floor(li / sz[0]) + 1); vs.push(v); } }
      return ret(sparseFromTriplets(sz[0], sz[1], ii, jj, vs));
    }
    const data = new Float64Array(total).fill(fillval);
    for (const [li, idxs] of groups) data[li] = await reduceGroup(idxs);
    return ret(sz.length > 2 ? makeND(sz, data) : { kind: 'num', rows: sz[0], cols: sz[1], data });
  },
  // ── discrete maths / float limits ──
  perms: async (a) => {
    const v = toArray(m(a[0])); const acc: number[][] = [];
    const rec = (cur: number[], rest: number[]) => { if (!rest.length) { acc.push(cur); return; } for (let i = 0; i < rest.length; i++) rec([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]); };
    rec([], v); acc.sort((x, y) => { for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return y[i] - x[i]; return 0; });
    return ret(fromRows(acc));
  },
  rat: async (a) => { const [n, d] = ratApprox(asScalar(a[0])); return ret(str(d === 1 ? `${n}` : `${n}/${d}`)); },
  flintmax: async () => ret(scalar(2 ** 53)),
  intmax: async (a) => ret(scalar(INT_LIMITS[a.length ? asString(a[0]) : 'int32']?.[1] ?? 2147483647)),
  intmin: async (a) => ret(scalar(INT_LIMITS[a.length ? asString(a[0]) : 'int32']?.[0] ?? -2147483648)),
  // ── transforms ──
  fft: async (a) => ret(fftApply(m(a[0]), -1)),
  ifft: async (a) => ret(fftApply(m(a[0]), 1)),
  fft2: async (a) => ret(transpose(fftApply(transpose(fftApply(m(a[0]), -1)), -1))),
  ifft2: async (a) => ret(transpose(fftApply(transpose(fftApply(m(a[0]), 1)), 1))),
  fftshift: async (a) => ret(fftShift(m(a[0]), false)),
  ifftshift: async (a) => ret(fftShift(m(a[0]), true)),
  unwrap: async (a) => { const A = m(a[0]); const v = toArray(A); const out = [v[0] ?? 0]; let off = 0; for (let i = 1; i < v.length; i++) { off += -2 * Math.PI * Math.round((v[i] - v[i - 1]) / (2 * Math.PI)); out.push(v[i] + off); } return ret(A.cols === 1 ? colVec(out) : rowVec(out)); },
  cplxpair: async (a) => {
    const A = m(a[0]); const n = numel(A); const tol = 1e-6;
    const items = Array.from({ length: n }, (_, i) => ({ re: A.data[i], im: A.idata ? A.idata[i] : 0 }));
    const reals = items.filter((z) => Math.abs(z.im) <= tol * (1 + Math.abs(z.re))).sort((x, y) => x.re - y.re);
    const cplx = items.filter((z) => Math.abs(z.im) > tol * (1 + Math.abs(z.re))).sort((x, y) => x.re - y.re || x.im - y.im);
    const ordered = [...cplx, ...reals];
    return ret(finishComplex(A.rows === 1 ? 1 : n, A.rows === 1 ? n : 1, Float64Array.from(ordered.map((z) => z.re)), Float64Array.from(ordered.map((z) => z.im))));
  },
  squeeze: async (a) => { const A = m(a[0]); if (!A.nd) return ret(A); const d = A.nd.filter((x) => x !== 1); while (d.length < 2) d.push(1); return ret(makeND(d, Float64Array.from(A.data), { idata: A.idata ? Float64Array.from(A.idata) : null, isChar: A.isChar })); },
  sortrows: async (a, n) => {
    if (isTable(a[0])) { const t = a[0]; let vi = 0; if (a.length >= 2) { vi = (isMat(a[1]) && (a[1] as Mat).isChar) || isStr(a[1]) ? t.vars.indexOf(asString(a[1])) : Math.round(asScalar(a[1])) - 1; } const key = m(t.cols[vi]); const idx = Array.from({ length: t.nrows }, (_, i) => i).sort((p, q) => key.data[p] - key.data[q]); return ret(tblSlice(t, idx)); }
    const A = m(a[0]); const rows: number[][] = [];
    for (let r = 0; r < A.rows; r++) { const row: number[] = []; for (let c = 0; c < A.cols; c++) row.push(A.data[r + c * A.rows]); rows.push(row); }
    const idx = rows.map((_, i) => i).sort((i, j) => { for (let c = 0; c < A.cols; c++) { if (rows[i][c] !== rows[j][c]) return rows[i][c] - rows[j][c]; } return 0; });
    const o = zeros(A.rows, A.cols); idx.forEach((src, dst) => { for (let c = 0; c < A.cols; c++) o.data[dst + c * A.rows] = rows[src][c]; });
    return n >= 2 ? [o, colVec(idx.map((i) => i + 1))] : [o];
  },

  // strings / conversion
  num2str: async (a) => {
    const A = m(a[0]); const hasArg = a.length >= 2 && isMat(a[1]);
    const fmt = hasArg && (a[1] as Mat).isChar ? asString(a[1]) : null;
    const prec = hasArg && !(a[1] as Mat).isChar ? Math.round(asScalar(a[1])) : null;
    const one = (x: number) => (fmt ? sprintf(fmt, [scalar(x)]) : prec !== null ? sprintf(`%.${prec}g`, [scalar(x)]) : trimNum(x));
    if (isScalar(A)) return ret(str(one(A.data[0])));
    if (fmt === null && prec === null) return ret(str(matToStr(A)));
    const rows: string[] = []; for (let r = 0; r < A.rows; r++) { const cells: string[] = []; for (let c = 0; c < A.cols; c++) cells.push(one(A.data[r + c * A.rows])); rows.push(cells.join('  ')); }
    return ret(str(rows.join('\n')));
  },
  int2str: async (a) => ret(str(String(Math.round(asScalar(a[0]))))),
  mat2str: async (a) => ret(str(matToStr(m(a[0])))),
  str2num: async (a, _n, env) => ret(await env.evalInput(asString(a[0]))),
  str2double: async (a) => ret(scalar(parseFloat(asString(a[0])))),

  // logical helpers
  isnan: async (a) => ret(map(m(a[0]), (x) => (Number.isNaN(x) ? 1 : 0))),
  isinf: async (a) => ret(map(m(a[0]), (x) => (!Number.isFinite(x) && !Number.isNaN(x) ? 1 : 0))),
  isfinite: async (a) => ret(map(m(a[0]), (x) => (Number.isFinite(x) ? 1 : 0))),
  any: async (a) => boolReduce(a, 0, (s, x) => (s || x !== 0 ? 1 : 0)),
  all: async (a) => boolReduce(a, 1, (s, x) => (s && x !== 0 ? 1 : 0)),

  // I/O
  disp: async (a, _n, env) => { env.output((isSym(a[0]) ? symTexLines(a[0] as Sym).join('\n') : dispValue(a[0])) + '\n'); return []; },
  display: async (a, _n, env) => { env.output((isSym(a[0]) ? symTexLines(a[0] as Sym).join('\n') : dispValue(a[0])) + '\n'); return []; },
  fprintf: async (a, _n, env) => {
    let fmtIdx = 0;
    if (isMat(a[0]) && !(a[0] as Mat).isChar) fmtIdx = 1; // leading fid (1=stdout, 2=stderr)
    const text = sprintf(asString(a[fmtIdx]), a.slice(fmtIdx + 1));
    env.output(text);
    return [];
  },
  printf: async (a, _n, env) => { env.output(sprintf(asString(a[0]), a.slice(1))); return []; },
  sprintf: async (a) => ret(str(sprintf(asString(a[0]), a.slice(1)))),
  error: async (a) => { throw new MatError(a.length ? sprintf(asString(a[0]), a.slice(1)) : 'error'); },
  warning: async (a, _n, env) => { if (a.length && isMat(a[0]) && (a[0] as Mat).isChar) env.output('Warning: ' + sprintf(asString(a[0]), a.slice(1)) + '\n'); return []; },
  abort: async () => { throw new MatError('aborted'); },
  input: async (a, _n, env) => {
    const prompt = a.length ? asString(a[0]) : '';
    const asStr = a.length >= 2 && asString(a[1]) === 's';
    const text = await env.requestInput(prompt);
    if (asStr) return ret(str(text));
    if (text.trim() === '') return ret(zeros(0, 0));
    return ret(await env.evalInput(text));
  },

  // functional
  feval: async (a, n, env) => {
    const f = a[0];
    if (isHandle(f)) return env.callHandle(f, a.slice(1), n);
    throw new MatError('feval: first argument must be a function handle');
  },
  arrayfun: async (a, n, env) => {
    const f = a[0];
    if (!isHandle(f)) throw new MatError('arrayfun: first argument must be a function handle');
    let uniform = true; const inputs: Value[] = [];
    for (let i = 1; i < a.length; i++) {
      if (isMat(a[i]) && (a[i] as Mat).isChar && i + 1 < a.length && asString(a[i]).toLowerCase() === 'uniformoutput') { uniform = truthyArg(a[i + 1]); i++; continue; }
      inputs.push(a[i]);
    }
    const shapeOf = (v: Value): [number, number] => (isStruct(v) || isCell(v) ? [v.rows, v.cols] : [m(v).rows, m(v).cols]);
    const [rows, cols] = shapeOf(inputs[0]); const total = rows * cols;
    // element i of an input: a 1×1 struct from a struct array, a cell's content, or a scalar.
    const elemAt = (v: Value, i: number): Value => {
      if (isStruct(v)) { const fields = new Map<string, Value[]>(); for (const [k, arr] of v.fields) fields.set(k, [arr[i] ?? zeros(0, 0)]); return { kind: 'struct', rows: 1, cols: 1, fields }; }
      if (isCell(v)) return v.items[i];
      const M = m(v); const sc = scalar(M.data[i]); if (M.idata) sc.idata = Float64Array.of(M.idata[i]); sc.isChar = M.isChar; sc.isBool = M.isBool; return sc;
    };
    const nout = Math.max(1, n);
    const slots: Value[][] = Array.from({ length: nout }, () => []);
    for (let i = 0; i < total; i++) {
      const r = await env.callHandle(f, inputs.map((v) => elemAt(v, i)), nout);
      for (let k = 0; k < nout; k++) slots[k].push(r[k] ?? zeros(0, 0));
    }
    const assemble = (vals: Value[]): Value => {
      if (!uniform) return makeCell(rows, cols, vals);
      const out = zeros(rows, cols); let anyC = false, isB = vals.length > 0, isCh = vals.length > 0;
      for (const v of vals) if (isMat(v) && isComplex(v)) anyC = true;
      const im = anyC ? new Float64Array(total) : null;
      for (let i = 0; i < vals.length; i++) { const M = m(vals[i]); out.data[i] = M.data[0]; if (im) im[i] = M.idata ? M.idata[0] : 0; if (!M.isBool) isB = false; if (!M.isChar) isCh = false; }
      if (im) out.idata = im; if (isB) out.isBool = true; if (isCh) out.isChar = true;
      return out;
    };
    return slots.map(assemble);
  },

  // ═══════════════════════ GRAPHICS · I/O · STRINGS ═══════════════════════
  plot: async (a, n, env) => { if (a.length && isGraph(a[0])) { plotGraph(env, a[0]); return gret(n); } if (a.length && isGeom(a[0])) { plotGeom(env, a[0]); return gret(n); } env.graphics.plot(a); return gret(n); },
  fplot: async (a, n, env) => {
    let label: string | undefined;
    let f = a[0];
    if (isSym(f)) { label = exprToStr((f as Sym).exprs[0]); f = await symToFn(f as Sym, env); }
    // fplot(xt, yt, ...): two parametric function handles → sample both over the same t-range.
    const g = a.length >= 2 && isHandle(a[1]) ? a[1] : null;
    if (!isHandle(f)) throw new MatError('fplot: expected a function handle');
    let lo = -5, hi = 5;
    const rgArg = a.find((v, i) => i >= (g ? 2 : 1) && isMat(v) && !(v as Mat).isChar && numel(v) >= 2);
    if (rgArg) { const rg = toArray(rgArg as Mat); lo = rg[0]; hi = rg[1]; }
    const N = 400; const xs: number[] = []; const ys: number[] = [];
    for (let i = 0; i < N; i++) {
      const t = lo + (hi - lo) * i / (N - 1);
      const rx = await env.callHandle(f, [scalar(t)], 1);
      const ry = g ? await env.callHandle(g, [scalar(t)], 1) : null;
      xs.push(g ? (rx.length && isMat(rx[0]) ? asScalar(rx[0]) : NaN) : t);
      ys.push(ry ? (ry.length && isMat(ry[0]) ? asScalar(ry[0]) : NaN) : (rx.length && isMat(rx[0]) ? asScalar(rx[0]) : NaN));
    }
    const specArg = a.find((v) => isMat(v) && (v as Mat).isChar);
    env.graphics.plot(specArg ? [colVec(xs), colVec(ys), specArg] : [colVec(xs), colVec(ys)]);
    if (label) env.graphics.command('title', [str(label)]);
    return gret(n);
  },
  hold: async (a, _n, env) => { env.graphics.command('hold', a); return []; },
  grid: async (a, _n, env) => { env.graphics.command('grid', a); return []; },
  title: async (a, _n, env) => { env.graphics.command('title', a); return []; },
  xlabel: async (a, _n, env) => { env.graphics.command('xlabel', a); return []; },
  ylabel: async (a, _n, env) => { env.graphics.command('ylabel', a); return []; },
  legend: async (a, _n, env) => { env.graphics.command('legend', a); return []; },
  axis: async (a, _n, env) => { env.graphics.command('axis', a); return []; },
  xlim: async (a, _n, env) => {
    if (!a.length) return ret(rowVec(env.graphics.getXLim()));
    if (isMat(a[0]) && (a[0] as Mat).isChar) { if (asString(a[0]).toLowerCase() === 'auto') env.graphics.setXLim(undefined); return []; }
    const v = toArray(m(a[0])); env.graphics.setXLim([v[0], v[1]]); return [];
  },
  ylim: async (a, _n, env) => {
    if (!a.length) return ret(rowVec(env.graphics.getYLim()));
    if (isMat(a[0]) && (a[0] as Mat).isChar) { if (asString(a[0]).toLowerCase() === 'auto') env.graphics.setYLim(undefined); return []; }
    const v = toArray(m(a[0])); env.graphics.setYLim([v[0], v[1]]); return [];
  },
  zlabel: async (a, _n, env) => { env.graphics.command('zlabel', a); return []; },
  subtitle: async (a, _n, env) => { env.graphics.command('subtitle', a); return []; },
  sgtitle: async (a, _n, env) => { if (a.length && isMat(a[0]) && (a[0] as Mat).isChar) env.graphics.sgtitle(asString(a[0])); return []; },
  subplot: async (a, _n, env) => {
    // subplot(m,n,p) or subplot(mnp) e.g. subplot(221)
    if (a.length === 1) { const v = Math.round(asScalar(a[0])); env.graphics.subplot(Math.floor(v / 100), Math.floor((v % 100) / 10), v % 10); }
    else env.graphics.subplot(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), Math.round(asScalar(a[2])));
    return [{ kind: 'gobj', gtype: 'axes' }];
  },
  tiledlayout: async (a, _n, env) => { const numeric = (v: Value) => isMat(v) && !(v as Mat).isChar; const m = a.length >= 1 && numeric(a[0]) ? Math.round(asScalar(a[0])) : 1; const n = a.length >= 2 && numeric(a[1]) ? Math.round(asScalar(a[1])) : 1; env.graphics.tiledlayout(m, n); return [{ kind: 'gobj', gtype: 'axes' as const }]; },
  nexttile: async (a, _n, env) => { env.graphics.nexttile(a.length && isMat(a[0]) ? Math.round(asScalar(a[0])) : undefined); return [{ kind: 'gobj', gtype: 'axes' }]; },
  bar: async (a, n, env) => { env.graphics.chart2d(a, 'bar'); return gret(n); },
  barh: async (a, n, env) => { env.graphics.chart2d(a, 'barh'); return gret(n); },
  area: async (a, n, env) => { if (a.length && isGeom(a[0])) return ret(scalar(geomArea(a[0]))); env.graphics.chart2d(a, 'area'); return gret(n); },
  stem: async (a, n, env) => { env.graphics.chart2d(a, 'stem'); return gret(n); },
  stairs: async (a, n, env) => { env.graphics.chart2d(a, 'stairs'); return gret(n); },
  scatter: async (a, n, env) => { env.graphics.scatter(a); return gret(n); },
  errorbar: async (a, n, env) => { env.graphics.errorbar(a); return gret(n); },
  pie: async (a, n, env) => { env.graphics.pie(a); return gret(n); },
  plot3: async (a, n, env) => { env.graphics.line3(a, 'lines'); return gret(n); },
  scatter3: async (a, n, env) => { env.graphics.line3(a, 'markers'); return gret(n); },
  stem3: async (a, n, env) => { env.graphics.line3(a, 'markers'); return gret(n); },
  loglog: async (a, n, env) => { env.graphics.plot(a); env.graphics.setScale('x', 'log'); env.graphics.setScale('y', 'log'); return gret(n); },
  semilogx: async (a, n, env) => { env.graphics.plot(a); env.graphics.setScale('x', 'log'); return gret(n); },
  semilogy: async (a, n, env) => { env.graphics.plot(a); env.graphics.setScale('y', 'log'); return gret(n); },
  histogram: async (a, hn, env) => {
    const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v));
    let edges: number[];
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) > 1) edges = toArray(m(a[1]));
    else { const nb = a.length >= 2 && isMat(a[1]) && numel(a[1]) === 1 ? Math.round(asScalar(a[1])) : Math.max(1, Math.ceil(Math.sqrt(x.length))); let lo = Math.min(...x), hi = Math.max(...x); if (!Number.isFinite(lo) || lo === hi) { lo = (lo || 0) - 0.5; hi = (hi || 0) + 0.5; } edges = []; for (let i = 0; i <= nb; i++) edges.push(lo + (hi - lo) * i / nb); }
    const N = new Array(edges.length - 1).fill(0); const last = edges.length - 1;
    for (const v of x) { if (v < edges[0] || v > edges[last]) continue; let b = last - 1; for (let i = 0; i < last; i++) if (v < edges[i + 1]) { b = i; break; } N[b]++; }
    const centers = N.map((_, i) => (edges[i] + edges[i + 1]) / 2);
    env.graphics.chart2d([rowVec(centers), rowVec(N)], 'bar'); return gret(hn);
  },
  zlim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.command('zlim', a); return []; },
  xticks: async () => [],
  yticks: async () => [],
  zticks: async () => [],
  text: async () => [],
  xline: async (a, _n, env) => { const vals = toArray(m(a[0])); const spec = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : undefined; const label = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : undefined; env.graphics.refline('x', vals, spec, label); return []; },
  yline: async (a, _n, env) => { const vals = toArray(m(a[0])); const spec = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : undefined; const label = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : undefined; env.graphics.refline('y', vals, spec, label); return []; },
  peaks: async (a, nargout, env) => {
    // peaks(n) → the classic n×n sample surface; with no output, plots it.
    const n = a.length && isMat(a[0]) && numel(a[0]) === 1 ? Math.round(asScalar(a[0])) : 49;
    const lin = (k: number) => Array.from({ length: k }, (_, i) => -3 + (6 * i) / (k - 1));
    const xs = lin(n); const Z = zeros(n, n), X = zeros(n, n), Y = zeros(n, n);
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      const x = xs[c], y = xs[r];
      const z = 3 * (1 - x) ** 2 * Math.exp(-(x ** 2) - (y + 1) ** 2)
        - 10 * (x / 5 - x ** 3 - y ** 5) * Math.exp(-(x ** 2) - y ** 2)
        - (1 / 3) * Math.exp(-((x + 1) ** 2) - y ** 2);
      Z.data[r + c * n] = z; X.data[r + c * n] = x; Y.data[r + c * n] = y;
    }
    if (nargout >= 1) return nargout >= 3 ? [X, Y, Z] : nargout >= 2 ? [X, Z] : [Z];
    env.graphics.surface([X, Y, Z], 'surf'); return [];
  },
  sphere: async (a, n, env) => { const N = a.length && isMat(a[0]) && numel(a[0]) === 1 ? Math.round(asScalar(a[0])) : 20; const { X, Y, Z } = sphereCoords(N); if (n >= 1) return [X, Y, Z].slice(0, Math.max(1, n)); env.graphics.surface([X, Y, Z], 'surf'); return []; },
  cylinder: async (a, n, env) => { const r = a.length && isMat(a[0]) && numel(a[0]) > 1 ? toArray(m(a[0])) : a.length && isMat(a[0]) && numel(a[0]) === 1 && a.length === 1 ? [asScalar(a[0]), asScalar(a[0])] : [1, 1]; const N = a.length >= 2 ? Math.round(asScalar(a[1])) : 20; const { X, Y, Z } = cylinderCoords(r, N); if (n >= 1) return [X, Y, Z].slice(0, Math.max(1, n)); env.graphics.surface([X, Y, Z], 'surf'); return []; },
  ellipsoid: async (a, n, env) => { const [xc, yc, zc, xr, yr, zr] = [0, 1, 2, 3, 4, 5].map((i) => asScalar(a[i])); const N = a.length >= 7 ? Math.round(asScalar(a[6])) : 20; const { X, Y, Z } = sphereCoords(N); const sx = map(X, (v) => v * xr + xc), sy = map(Y, (v) => v * yr + yc), sz = map(Z, (v) => v * zr + zc); if (n >= 1) return [sx, sy, sz].slice(0, Math.max(1, n)); env.graphics.surface([sx, sy, sz], 'surf'); return []; },
  bucky: async (_a, n) => {
    // Adjacency of a 60-node 3-regular graph (a stand-in for the truncated-icosahedron buckyball)
    // so spy(bucky) renders a structured pattern; second output is placeholder 3-D coordinates.
    const N = 60; const B = zeros(N, N);
    const link = (i: number, j: number) => { B.data[i + j * N] = 1; B.data[j + i * N] = 1; };
    for (let i = 0; i < N; i++) { link(i, (i + 1) % N); link(i, (i + 30) % N); }
    if (n >= 2) { const V = zeros(N, 3); for (let i = 0; i < N; i++) { const t = 2 * Math.PI * i / N; V.data[i] = Math.cos(t); V.data[i + N] = Math.sin(t); V.data[i + 2 * N] = (i % 2) ? 1 : -1; } return [B, V]; }
    return ret(B);
  },
  contourslice: async (a, n, env) => {   // contour lines on slice planes through a volume — approximated as a flat contour
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    if (ms.length >= 4) { const V = ms[3]; const d = ndSize(V); const face = zeros(d[0], d[1] ?? 1); for (let i = 0; i < face.data.length; i++) face.data[i] = V.data[i]; env.graphics.surface([face], 'contour'); }
    return gret(n);
  },
  fimplicit3: async (a, n, env) => {   // implicit surface f(x,y,z)=0 — approximated by an isosurface of a sampled volume
    const f = isHandle(a[0]) ? a[0] : null;
    if (f) {
      const G = 24, lo = -5, hi = 5, lin = Array.from({ length: G }, (_, i) => lo + (hi - lo) * i / (G - 1));
      const verts: [number, number, number][] = []; const faces: number[][] = [];
      // coarse marching over the grid: emit a point wherever f changes sign along an edge (point cloud surface)
      const fval = async (x: number, y: number, z: number) => asScalar((await env.callHandle(f, [scalar(x), scalar(y), scalar(z)], 1))[0]);
      for (let i = 0; i < G - 1; i++) for (let j = 0; j < G; j++) for (let k = 0; k < G; k++) {
        const a0 = await fval(lin[i], lin[j], lin[k]), a1 = await fval(lin[i + 1], lin[j], lin[k]);
        if ((a0 < 0) !== (a1 < 0)) { const t = a0 / (a0 - a1); verts.push([lin[i] + t * (lin[i + 1] - lin[i]), lin[j], lin[k]]); }
      }
      if (verts.length) env.graphics.line3([colVec(verts.map((p) => p[0])), colVec(verts.map((p) => p[1])), colVec(verts.map((p) => p[2]))], 'markers');
      void faces;
    }
    return gret(n);
  },
  meshz: async (a, n, env) => { env.graphics.surface(a, 'mesh'); return gret(n); },
  waterfall: async (a, n, env) => { env.graphics.surface(a, 'mesh'); return gret(n); },
  ribbon: async (a, n, env) => { env.graphics.surface(a, 'surf'); return gret(n); },
  comet: async (a, n, env) => { env.graphics.plot(a); return gret(n); },
  comet3: async (a, n, env) => { env.graphics.line3(a, 'lines'); return gret(n); },
  lighting: async () => [],   // surface lighting mode — no visual effect in the 2-D renderer
  camlight: async () => [], material: async () => [], geobasemap: async () => [],
  geolimits: async (a, n) => n >= 2 && a.length >= 2 ? [m(a[0]), m(a[1])] : [],
  get: async (a) => {   // get(h) / get(h,'Prop') — minimal: unknown property → empty
    if (a.length >= 2 && (isMat(a[1]) || isStr(a[1]))) return ret(zeros(0, 0));
    return ret(mkStruct([['Type', str('line')]]));
  },
  feather: async (a, n, env) => { const u = toArray(m(a[0])), v = toArray(m(a[1])); env.graphics.quiver(u.map((_, i) => i + 1), u.map(() => 0), u, v); return gret(n); },
  geoplot: async (a, n, env) => { const lat = a[0], lon = a[1]; env.graphics.plot([lon, lat, ...a.slice(2)]); return gret(n); },
  geoscatter: async (a, n, env) => { env.graphics.scatter([a[1], a[0], ...a.slice(2)]); return gret(n); },
  animatedline: async (a, n, env) => { env.graphics.animatedline(); return gret(n); },
  addpoints: async (a, _n, env) => { env.graphics.addpoints(toArray(m(a[1])), toArray(m(a[2]))); return []; },
  clearpoints: async (_a, _n, env) => { env.graphics.clearpoints(); return []; },
  membrane: async (a, n, env) => {
    // MathWorks L-shaped-membrane sample data: positive eigenfunction on the unit square
    // minus its upper-right quadrant (an L). Synthesized — not the exact logo, but a valid surface.
    const N = a.length >= 2 && isMat(a[1]) ? Math.max(2, Math.round(asScalar(a[1])) * 2 + 1) : 31;
    const M = zeros(N, N);
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) { const x = c / (N - 1), y = r / (N - 1); M.data[r + c * N] = (x > 0.5 && y > 0.5) ? 0 : Math.sin(Math.PI * x) * Math.sin(Math.PI * y); }
    if (n >= 1) return ret(M);
    env.graphics.surface([M], 'surf'); return [];
  },
  surfnorm: async (a, n, env) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let X: Mat, Y: Mat, Z: Mat;
    if (ms.length >= 3) { X = ms[0]; Y = ms[1]; Z = ms[2]; } else { Z = ms[0]; const [mr, mc] = [Z.rows, Z.cols]; X = zeros(mr, mc); Y = zeros(mr, mc); for (let r = 0; r < mr; r++) for (let c = 0; c < mc; c++) { X.data[r + c * mr] = c + 1; Y.data[r + c * mr] = r + 1; } }
    const R = Z.rows, C = Z.cols; const zat = (r: number, c: number) => Z.data[r + c * R];
    const Nx = zeros(R, C), Ny = zeros(R, C), Nz = zeros(R, C);
    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
      const dzc = (zat(r, Math.min(c + 1, C - 1)) - zat(r, Math.max(c - 1, 0))) / (c > 0 && c < C - 1 ? 2 : 1);
      const dzr = (zat(Math.min(r + 1, R - 1), c) - zat(Math.max(r - 1, 0), c)) / (r > 0 && r < R - 1 ? 2 : 1);
      const nx = -dzc, ny = -dzr, nz = 1; const len = Math.hypot(nx, ny, nz) || 1;
      Nx.data[r + c * R] = nx / len; Ny.data[r + c * R] = ny / len; Nz.data[r + c * R] = nz / len;
    }
    if (n >= 3) return [Nx, Ny, Nz];
    env.graphics.surface([X, Y, Z], 'surf'); return gret(n);
  },
  fsurf: async (a, n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'surf'); return gret(n); },
  fmesh: async (a, n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'mesh'); return gret(n); },
  fcontour: async (a, n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'contour'); return gret(n); },
  // ez* easy-plotters (v6 reference) → delegate to the f* samplers; accept string expressions
  ezplot: async (a, n, env) => BUILTINS.fplot([await ezFn(a[0], env, 'x'), ...a.slice(1)], n, env),
  ezsurf: async (a, n, env) => BUILTINS.fsurf([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezsurfc: async (a, n, env) => BUILTINS.fsurf([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezmesh: async (a, n, env) => BUILTINS.fmesh([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezmeshc: async (a, n, env) => BUILTINS.fmesh([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezcontour: async (a, n, env) => BUILTINS.fcontour([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezcontourf: async (a, n, env) => BUILTINS.fcontour([await ezFn(a[0], env, 'x,y'), ...a.slice(1)], n, env),
  ezplot3: async (a, n, env) => BUILTINS.fplot3([await ezFn(a[0], env, 't'), await ezFn(a[1], env, 't'), await ezFn(a[2], env, 't'), ...a.slice(3)], n, env),
  ezpolar: async (a, n, env) => {
    const f = await ezFn(a[0], env, 't'); const lo = 0, hi = 2 * Math.PI; const N = 200;
    const th: number[] = [], r: number[] = [];
    for (let i = 0; i < N; i++) { const t = lo + (hi - lo) * i / (N - 1); th.push(t); r.push(asScalar((await env.callHandle(f as Handle, [scalar(t)], 1))[0])); }
    env.graphics.polar([rowVec(th), rowVec(r)], 'lines'); return gret(n);
  },
  // deprecated aliases (v6)
  dblquad: async (a, n, env) => BUILTINS.integral2(a, n, env),
  triplequad: async (a, n, env) => BUILTINS.integral3(a, n, env),
  delaunay3: async (a, n, env) => BUILTINS.delaunayn([horzcat([colvecOf(m(a[0])), colvecOf(m(a[1])), colvecOf(m(a[2]))])], n, env),
  dsearch: async (a, n, env) => BUILTINS.dsearchn([horzcat([colvecOf(m(a[0])), colvecOf(m(a[1]))]), horzcat([colvecOf(m(a[3])), colvecOf(m(a[4]))])], n, env),
  // vector calculus (finite differences on a meshgrid)
  // classic sparse-Laplacian demo (Gilbert–Moler–Schreiber)
  numgrid: async (a) => ret(numgridOf(asString(a[0]), Math.round(asScalar(a[1])))),
  delsq: async (a) => ret(delsqOf(m(a[0]))),
  contour3: async (a, n, env) => { env.graphics.surface(a, 'contour3'); return n >= 2 ? [contourMatrixFor(a), { kind: 'gobj', gtype: 'line' as const }] : gret(n); },
  quiver: async (a, n, env) => {
    let xs: number[], ys: number[], us: number[], vs: number[];
    if (a.length >= 4) { xs = toArray(m(a[0])); ys = toArray(m(a[1])); us = toArray(m(a[2])); vs = toArray(m(a[3])); }
    else { us = toArray(m(a[0])); vs = toArray(m(a[1])); xs = us.map((_, i) => i + 1); ys = us.map(() => 0); }
    env.graphics.quiver(xs, ys, us, vs); return gret(n);
  },
  surf: async (a, n, env) => { env.graphics.surface(a, 'surf'); return gret(n); },
  surfc: async (a, n, env) => { env.graphics.surface(a, 'surf'); return gret(n); },
  surfl: async (a, n, env) => { env.graphics.surface(a, 'surf'); return gret(n); },
  mesh: async (a, n, env) => { env.graphics.surface(a, 'mesh'); return gret(n); },
  bar3: async (a, n, env) => { env.graphics.bar3(matToGrid(m(a[a.length - 1])), false); return gret(n); },
  bar3h: async (a, n, env) => { env.graphics.bar3(matToGrid(m(a[a.length - 1])), true); return gret(n); },
  quiver3: async (a, n, env) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar).map((x) => toArray(x));
    if (ms.length >= 6) env.graphics.quiver3(ms[0], ms[1], ms[2], ms[3], ms[4], ms[5]);
    else env.graphics.quiver3(ms[0].map((_, i) => i + 1), ms[0].map(() => 0), ms[0].map(() => 0), ms[0], ms[1] ?? ms[0].map(() => 0), ms[2] ?? ms[0].map(() => 0));
    return gret(n);
  },
  histogram2: async (a, n, env) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const nb = a.length >= 3 && isMat(a[2]) ? toArray(m(a[2])) : [10, 10]; env.graphics.histogram2(x, y, nb[0], nb[1] ?? nb[0]); return gret(n); },
  slice: async (a, sn, env) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let V: Mat, xv: number[], yv: number[], zv: number[], sx: number[], sy: number[], sz: number[];
    if (ms.length >= 7) { V = ms[3]; const d = ndSize(V); xv = gridAxis(ms[0], 2, d); yv = gridAxis(ms[1], 1, d); zv = gridAxis(ms[2], 3, d); sx = toArray(ms[4]); sy = toArray(ms[5]); sz = toArray(ms[6]); }
    else { V = ms[0]; const d = ndSize(V); xv = ax(d[1] ?? 1); yv = ax(d[0]); zv = ax(d[2] ?? 1); sx = ms[1] ? toArray(ms[1]) : []; sy = ms[2] ? toArray(ms[2]) : []; sz = ms[3] ? toArray(ms[3]) : []; }
    const samp = (px: number, py: number, pz: number) => trilinearV(V, xv, yv, zv, px, py, pz);
    env.graphics.hold(false); let first = true;
    const plane = (xm: number[][], ym: number[][], zm: number[][], cd: number[][]) => { if (!first) env.graphics.hold(true); env.graphics.slicePlane(xm, ym, zm, cd); first = false; };
    for (const xc of sx) plane(yv.map(() => zv.map(() => xc)), yv.map((y) => zv.map(() => y)), yv.map(() => zv.map((z) => z)), yv.map((y) => zv.map((z) => samp(xc, y, z))));
    for (const yc of sy) plane(xv.map((x) => zv.map(() => x)), xv.map(() => zv.map(() => yc)), xv.map(() => zv.map((z) => z)), xv.map((x) => zv.map((z) => samp(x, yc, z))));
    for (const zc of sz) plane(yv.map(() => xv.map((x) => x)), yv.map((y) => xv.map(() => y)), yv.map(() => xv.map(() => zc)), yv.map((y) => xv.map((x) => samp(x, y, zc))));
    env.graphics.hold(false); return gret(sn);
  },
  // 3-D triangulated surfaces
  trisurf: async (a, n, env) => { const T = matRows(m(a[0])).map((r) => r.map((v) => Math.round(v) - 1)); env.graphics.trimesh(T, toArray(m(a[1])), toArray(m(a[2])), toArray(m(a[3])), false); return gret(n); },
  trimesh: async (a, n, env) => { const T = matRows(m(a[0])).map((r) => r.map((v) => Math.round(v) - 1)); env.graphics.trimesh(T, toArray(m(a[1])), toArray(m(a[2])), toArray(m(a[3])), true); return gret(n); },
  tetramesh: async (a, _n, env) => {
    const T = matRows(m(a[0])).map((r) => r.map((v) => Math.round(v) - 1)); const X = m(a[1]);
    const faces: number[][] = []; for (const t of T) faces.push([t[0], t[1], t[2]], [t[0], t[1], t[3]], [t[0], t[2], t[3]], [t[1], t[2], t[3]]);
    env.graphics.trimesh(faces, toArray(colOf(X, 0)), toArray(colOf(X, 1)), toArray(colOf(X, 2)), true); return [];
  },
  coneplot: async (a, _n, env) => {   // approximated by 3-D arrows
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar).map((x) => toArray(x));
    if (ms.length >= 6) env.graphics.quiver3(ms[0], ms[1], ms[2], ms[3], ms[4], ms[5]); return [];
  },
  streamline: async (a, _n, env) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    if (ms.length >= 9) {   // 3-D: X,Y,Z,U,V,W,sx,sy,sz
      const seg = streamlines3(ms[0], ms[1], ms[2], ms[3], ms[4], ms[5], toArray(ms[6]), toArray(ms[7]), toArray(ms[8]));
      env.graphics.line3([rowVec(seg.x), rowVec(seg.y), rowVec(seg.z)], 'lines'); return [];
    }
    // 2-D: X,Y,U,V,sx,sy
    const seg = streamlines2(ms[0], ms[1], ms[2], ms[3], toArray(ms[4]), toArray(ms[5]));
    env.graphics.addSeries(seg.x, seg.y); return [];
  },
  isosurface: async (a, n, env) => {
    // isosurface(X,Y,Z,V,isoval) | isosurface(V,isoval) → [F,V] or plot
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let V: Mat, xv: number[], yv: number[], zv: number[], iso: number;
    if (ms.length >= 5) { V = ms[3]; iso = asScalar(ms[4]); const d = ndSize(V); xv = gridAxis(ms[0], 2, d); yv = gridAxis(ms[1], 1, d); zv = gridAxis(ms[2], 3, d); }
    else { V = ms[0]; iso = asScalar(ms[1]); const d = ndSize(V); xv = ax(d[1] ?? 1); yv = ax(d[0]); zv = ax(d[2] ?? 1); }
    const { verts, faces } = marchingTets(V, xv, yv, zv, iso);
    if (n >= 2) { const F = zeros(faces.length, 3); faces.forEach((f, i) => f.forEach((v, j) => { F.data[i + j * faces.length] = v + 1; })); const Vm = zeros(verts.length, 3); verts.forEach((p, i) => { Vm.data[i] = p[0]; Vm.data[i + verts.length] = p[1]; Vm.data[i + 2 * verts.length] = p[2]; }); return [F, Vm]; }
    env.graphics.trimesh(faces, verts.map((p) => p[0]), verts.map((p) => p[1]), verts.map((p) => p[2]), false); return [];
  },
  plotmatrix: async (a, pn, env) => {
    const X = m(a[0]); const Y = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? m(a[1]) : X;
    const col = (M: Mat, j: number) => Array.from({ length: M.rows }, (_, r) => M.data[r + j * M.rows]);
    const px = X.cols, py = Y.cols;
    for (let i = 0; i < py; i++) for (let j = 0; j < px; j++) {
      env.graphics.subplot(py, px, i * px + j + 1);
      if (X === Y && i === j) { const v = col(X, j); const nb = 10; const lo = Math.min(...v), hi = Math.max(...v); const d = (hi - lo) / nb || 1; const cnt = new Array(nb).fill(0); for (const t of v) cnt[Math.min(nb - 1, Math.floor((t - lo) / d))]++; env.graphics.chart2d([rowVec(cnt.map((_, k) => lo + (k + 0.5) * d)), rowVec(cnt)], 'bar'); }
      else env.graphics.scatter([colVec(col(X, j)), colVec(col(Y, i))]);
    }
    return gret(pn);
  },
  contourc: async (a) => {
    const mats = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let Z: Mat, xv: number[], yv: number[]; let levelArg: Mat | null = null;
    if (mats.length >= 3) { xv = toArray(mats[0]); yv = toArray(mats[1]); Z = mats[2]; levelArg = mats[3] ?? null; }
    else { Z = mats[0]; xv = Array.from({ length: Z.cols }, (_, i) => i + 1); yv = Array.from({ length: Z.rows }, (_, i) => i + 1); levelArg = mats[1] ?? null; }
    const grid = matToGrid(Z);
    let levels: number[] | null = null;
    if (levelArg) {
      if (numel(levelArg) === 1) { const n = Math.round(levelArg.data[0]); let lo = Infinity, hi = -Infinity; for (const row of grid) for (const v of row) { if (v < lo) lo = v; if (v > hi) hi = v; } levels = Array.from({ length: n }, (_, i) => lo + (i + 1) * (hi - lo) / (n + 1)); }
      else levels = toArray(levelArg);
    }
    return ret(marchingSquares(xv, yv, grid, levels));
  },
  // polar plots
  polarplot: async (a, n, env) => { env.graphics.polar(a, 'lines'); return gret(n); },
  polarscatter: async (a, n, env) => { env.graphics.polar(a, 'markers'); return gret(n); },
  polarhistogram: async (a, n, env) => { env.graphics.polar(a, 'bar'); return gret(n); },
  polaraxes: async (_a, _n, env) => { env.graphics.setPolarProp('rticks', []); return []; },
  compass: async (a, n, env) => { let us: number[], vs: number[]; if (a.length >= 2) { us = toArray(m(a[0])); vs = toArray(m(a[1])); } else { const z = m(a[0]); us = z.idata ? toArray(z) : toArray(z); vs = z.idata ? Array.from(z.idata) : us.map(() => 0); } env.graphics.compass(us, vs); return gret(n); },
  rlim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('rlim', toArray(m(a[0]))); return []; },
  thetalim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('thetalim', toArray(m(a[0])).map((d) => d * Math.PI / 180)); return []; },
  rticks: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('rticks', toArray(m(a[0]))); return []; },
  thetaticks: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('thetaticks', toArray(m(a[0])).map((d) => d * Math.PI / 180)); return []; },
  rticklabels: async () => [], thetaticklabels: async () => [], rtickangle: async () => [],
  meshc: async (a, n, env) => { env.graphics.surface(a, 'mesh'); return gret(n); },
  surface: async (a, n, env) => { env.graphics.surface(a, 'surf'); return gret(n); },
  contour: async (a, n, env) => { env.graphics.surface(a, 'contour'); return n >= 2 ? [contourMatrixFor(a), { kind: 'gobj', gtype: 'line' as const }] : gret(n); },
  contourf: async (a, n, env) => { env.graphics.surface(a, 'contour'); return n >= 2 ? [contourMatrixFor(a), { kind: 'gobj', gtype: 'line' as const }] : gret(n); },
  pcolor: async (a, n, env) => { env.graphics.surface(a, 'contour'); return gret(n); },
  shading: async (a, _n, env) => { env.graphics.command('shading', a); return []; },
  colorbar: async (a, n, env) => { env.graphics.command('colorbar', a); return n >= 1 ? [{ kind: 'gobj', gtype: 'axes' as const }] : []; },
  colormap: async (a, n, env) => { env.graphics.command('colormap', a); return n >= 1 && a.length && isMat(a[0]) && !(a[0] as Mat).isChar ? ret(m(a[0])) : []; },
  // Colormap array generators (n×3 RGB).
  parula: async (a) => ret(cmapGen(a, (t) => lerpAnchors(PARULA, t))),
  turbo: async (a) => ret(cmapGen(a, (t) => lerpAnchors(TURBO, t))),
  jet: async (a) => ret(cmapGen(a, jetColor)),
  hot: async (a) => ret(cmapGen(a, hotColor)),
  gray: async (a) => ret(cmapGen(a, (t) => [t, t, t])),
  bone: async (a) => ret(cmapGen(a, (t) => [(7 * t) / 8 + clamp01((t - 0.75) / 0.25) / 8, (7 * t) / 8 + clamp01((t - 0.375) / 0.375) / 8, (7 * t) / 8 + clamp01(t / 0.375) / 8])),
  copper: async (a) => ret(cmapGen(a, (t) => [clamp01(1.25 * t), 0.7812 * t, 0.4975 * t])),
  pink: async (a) => ret(cmapGen(a, (t) => { const h = hotColor(t); return [Math.sqrt((2 * t + h[0]) / 3), Math.sqrt((2 * t + h[1]) / 3), Math.sqrt((2 * t + h[2]) / 3)]; })),
  cool: async (a) => ret(cmapGen(a, (t) => [t, 1 - t, 1])),
  spring: async (a) => ret(cmapGen(a, (t) => [1, t, 1 - t])),
  summer: async (a) => ret(cmapGen(a, (t) => [t, 0.5 + 0.5 * t, 0.4])),
  autumn: async (a) => ret(cmapGen(a, (t) => [1, t, 0])),
  winter: async (a) => ret(cmapGen(a, (t) => [0, t, 1 - 0.5 * t])),
  hsv: async (a) => ret(cmapGen(a, (t) => hsv2rgb(t, 1, 1))),
  lines: async (a) => ret(cmapGen(a, (_t, i) => LINES7[i % 7] as [number, number, number])),
  colorcube: async (a) => ret(cmapGen(a, (t) => hsv2rgb(t, 1, 0.6 + 0.4 * (t % 0.25) * 4))),
  flag: async (a) => ret(cmapGen(a, (_t, i) => ([[1, 0, 0], [1, 1, 1], [0, 0, 1], [0, 0, 0]] as [number, number, number][])[i % 4])),
  prism: async (a) => ret(cmapGen(a, (_t, i) => ([[1, 0, 0], [1, 0.5, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [0.667, 0, 1]] as [number, number, number][])[i % 6])),
  sky: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0.07, 0.04, 0.2], [0.2, 0.5, 0.85], [0.7, 0.9, 0.98]], t))),
  abyss: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0, 0, 0], [0.0, 0.1, 0.4], [0.0, 0.45, 0.7], [0.85, 0.95, 1]], t))),
  nebula: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0.02, 0.05, 0.2], [0.4, 0.1, 0.5], [0.9, 0.4, 0.5], [1, 0.9, 0.7]], t))),
  // colour-space conversions
  hsv2rgb: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const [R, G, B] = hsv2rgb(M.data[r], M.data[r + M.rows], M.data[r + 2 * M.rows]); o.data[r] = R; o.data[r + M.rows] = G; o.data[r + 2 * M.rows] = B; } return ret(o); },
  rgb2hsv: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const [H, S, V] = rgb2hsvFn(M.data[r], M.data[r + M.rows], M.data[r + 2 * M.rows]); o.data[r] = H; o.data[r + M.rows] = S; o.data[r + 2 * M.rows] = V; } return ret(o); },
  rgb2gray: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const g = 0.2989 * M.data[r] + 0.587 * M.data[r + M.rows] + 0.114 * M.data[r + 2 * M.rows]; o.data[r] = g; o.data[r + M.rows] = g; o.data[r + 2 * M.rows] = g; } return ret(o); },
  cmap2gray: async (a, n, env) => BUILTINS.rgb2gray(a, n, env),
  im2gray: async (a, n, env) => BUILTINS.rgb2gray(a, n, env),
  hex2rgb: async (a) => { const h = asString(a[0]).replace(/^#/, ''); return ret(rowVec([parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255])); },
  rgb2hex: async (a) => {
    const M = m(a[0]); const rows = M.rows;
    const hx = (r: number) => '#' + [0, 1, 2].map((c) => Math.round(Math.max(0, Math.min(1, M.data[r + c * rows])) * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
    if (rows > 1) return ret(makeStrArr(rows, 1, Array.from({ length: rows }, (_, r) => hx(r))));
    return ret(str(hx(0)));
  },
  orderedcolors: async (a) => {
    // Named color-order palettes. 'gem' is MATLAB's default 7-color order.
    const palettes: Record<string, number[][]> = {
      gem: [[0, 0.4470, 0.7410], [0.8500, 0.3250, 0.0980], [0.9290, 0.6940, 0.1250], [0.4940, 0.1840, 0.5560], [0.4660, 0.6740, 0.1880], [0.3010, 0.7450, 0.9330], [0.6350, 0.0780, 0.1840]],
      glow: [[0.2510, 0.4902, 1], [1, 0.2510, 0.2510], [0.2510, 0.7843, 0.2510], [1, 0.7529, 0.2510], [0.6275, 0.2510, 1], [0.2510, 0.8784, 0.8157], [1, 0.4392, 0.7059]],
    };
    const name = a.length ? asString(a[0]).toLowerCase() : 'gem';
    return ret(fromRows(palettes[name] ?? palettes.gem));
  },
  // axis scale + tick/aspect settings
  xscale: async (a, _n, env) => { env.graphics.setScale('x', a.length && asString(a[0]).toLowerCase().startsWith('log') ? 'log' : 'linear'); return []; },
  yscale: async (a, _n, env) => { env.graphics.setScale('y', a.length && asString(a[0]).toLowerCase().startsWith('log') ? 'log' : 'linear'); return []; },
  zscale: async () => [],
  yyaxis: async () => [],
  caxis: async () => [], clim: async () => [], colororder: async () => [], daspect: async () => [], pbaspect: async () => [],
  xtickangle: async () => [], ytickangle: async () => [], ztickangle: async () => [],
  xtickformat: async () => [], ytickformat: async () => [], ztickformat: async () => [],
  xticklabels: async () => [], yticklabels: async () => [], zticklabels: async () => [],
  fontname: async () => [], fontsize: async () => [], gtext: async () => [], annotation: async () => [], line: async () => [], rectangle: async () => [],
  // renderable plot variants
  imagesc: async (a, n, env) => { env.graphics.surface([m(a[a.length - 1])], 'contour'); env.graphics.command('colorbar', []); return gret(n); },
  image: async (a, n, env) => { env.graphics.surface([m(a[a.length - 1])], 'contour'); return gret(n); },
  pie3: async (a, n, env) => { env.graphics.pie(a); return gret(n); },
  piechart: async (a, n, env) => { env.graphics.pie(a); return gret(n); },
  donutchart: async (a, _n, env) => { env.graphics.pie(a); return []; },
  pareto: async (a, _n, env) => { const v = toArray(m(a[0])).slice().sort((x, y) => y - x); env.graphics.chart2d([rowVec(v.map((_, i) => i + 1)), rowVec(v)], 'bar'); return []; },
  fimplicit: async (a, n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'contour'); return gret(n); },
  fplot3: async (a, n, env) => {
    const fx = handle(a[0], 'fplot3'), fy = handle(a[1], 'fplot3'), fz = handle(a[2], 'fplot3');
    let lo = 0, hi = 2 * Math.PI; if (a.length >= 4 && isMat(a[3])) { const r = toArray(a[3] as Mat); lo = r[0]; hi = r[1]; }
    const N = 200; const xs: number[] = [], ys: number[] = [], zs: number[] = [];
    for (let i = 0; i < N; i++) { const t = lo + (hi - lo) * i / (N - 1); const ex = await env.callHandle(fx, [scalar(t)], 1), ey = await env.callHandle(fy, [scalar(t)], 1), ez = await env.callHandle(fz, [scalar(t)], 1); xs.push(asScalar(ex[0])); ys.push(asScalar(ey[0])); zs.push(asScalar(ez[0])); }
    env.graphics.line3([rowVec(xs), rowVec(ys), rowVec(zs)], 'lines'); return gret(n);
  },
  brighten: async (a) => {
    // brighten(map, beta): map.^gamma, gamma = 1-beta (beta>0 brighter).
    const M = m(a[0]); const beta = a.length >= 2 ? asScalar(a[1]) : asScalar(a[0]);
    if (numel(M) === 1) return []; // brighten(beta) on current map — no current-map state here
    const gamma = beta > 0 ? 1 - beta : 1 / (1 + beta);
    return ret(map(M, (x) => Math.pow(Math.max(0, Math.min(1, x)), gamma)));
  },
  cellstr: async (a) => {
    const v = a[0];
    if (isCell(v)) return ret(v);
    const A = m(v);
    if (A.rows <= 1) return ret(makeCell(1, 1, [str(asString(A).replace(/\s+$/, ''))]));
    const items: Value[] = [];
    for (let r = 0; r < A.rows; r++) { let s = ''; for (let c = 0; c < A.cols; c++) s += String.fromCharCode(A.data[r + c * A.rows]); items.push(str(s.replace(/\s+$/, ''))); }
    return ret(makeCell(A.rows, 1, items));
  },
  dsearchn: async (a) => {
    // dsearchn(P, PQ) or dsearchn(P, T, PQ): nearest point in P to each query row.
    const P = m(a[0]); const PQ = m(a[a.length >= 3 ? 2 : 1]); const dcols = P.cols;
    const idx = new Float64Array(PQ.rows);
    for (let q = 0; q < PQ.rows; q++) { let best = 0, bd = Infinity; for (let p = 0; p < P.rows; p++) { let d = 0; for (let c = 0; c < dcols; c++) { const diff = PQ.data[q + c * PQ.rows] - P.data[p + c * P.rows]; d += diff * diff; } if (d < bd) { bd = d; best = p; } } idx[q] = best + 1; }
    return ret(mat(PQ.rows, 1, idx));
  },
  box: async () => [],
  view: async (a, _n, env) => { env.graphics.command('view', a); return []; },
  clf: async (_a, _n, env) => { env.graphics.command('clf', []); return []; },
  cla: async (_a, _n, env) => { env.graphics.command('cla', []); return []; },
  close: async (_a, _n, env) => { env.graphics.command('close', []); return []; },
  figure: async (_a, _n, env) => { env.graphics.command('figure', []); return [{ kind: 'gobj', gtype: 'figure' }]; },
  gca: async () => ret({ kind: 'gobj', gtype: 'axes' }),
  gcf: async () => ret({ kind: 'gobj', gtype: 'figure' }),
  set: async (a, _n, env) => {
    // set(handle, 'Prop', val, ...) — apply to current axes; skip non-string property forms
    // like set(h,{'CData'},vals) which we don't model.
    for (let i = 1; i + 1 < a.length; i += 2) { const name = a[i]; if (isStr(name) || (isMat(name) && (name as Mat).isChar)) env.graphics.setAxesProp(asString(name), a[i + 1]); }
    return [];
  },
  drawnow: async () => [],
  pause: async () => [],
  clc: async (_a, _n, env) => { env.clearConsole(); return []; },
  tic: async (_a, n) => (n >= 1 ? ret(scalar(Date.now())) : []),   // a = tic → opaque timer id
  toc: async () => ret(scalar(0)),

  // ═══════════════════════ HELP · WORKSPACE ═══════════════════════
  help: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  doc: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  lookfor: async (a, _n, env) => { env.output(a.length ? env.help(asString(a[0])) + '\n' : GENERAL_HELP + '\n'); return []; },
  clear: async (a, _n, env) => { env.clearWorkspace(a.map((v) => asString(v))); return []; },
  format: async (a) => { setFormatMode(a.map((v) => asString(v)).join('')); return []; },
  save: async (a, _n, env) => {
    const words = a.map((v) => asString(v)).filter((w) => !w.startsWith('-'));   // ignore -mat/-ascii/-append flags
    const file = words[0] || 'matlab';
    env.saveMat(file, words.slice(1));
    return [];
  },
  load: async (a, n, env) => {
    const words = a.map((v) => asString(v)).filter((w) => !w.startsWith('-'));
    const file = words[0];
    if (!file) throw new MatError('load: filename required');
    const wanted = words.slice(1);
    // Prefer a real MAT-file in the VFS (binary Level-5); else fall back to the in-memory save() store.
    const bytes = env.readFileBytes(file) ?? env.readFileBytes(/\.mat$/i.test(file) ? file : file + '.mat');
    if (bytes && bytes.length > 4 && String.fromCharCode(bytes[0], bytes[1], bytes[2], bytes[3], bytes[4], bytes[5]) === 'MATLAB') {
      let pairs = parseMat(bytes).map(({ name, value }) => [name, value] as [string, Value]);
      if (wanted.length) pairs = pairs.filter(([nm]) => wanted.includes(nm));
      if (n >= 1) return ret({ kind: 'struct', rows: 1, cols: 1, fields: new Map(pairs.map(([nm, v]) => [nm, [v]])) } as StructV);
      env.assignVars(pairs);
      return [];
    }
    if (n >= 1) {   // S = load(...) → struct of the loaded variables
      const pairs = env.readMatFile(file, wanted);
      return ret({ kind: 'struct', rows: 1, cols: 1, fields: new Map(pairs.map(([nm, v]) => [nm, [v]])) } as StructV);
    }
    env.loadMat(file, wanted);
    return [];
  },
  // ── Data import (CSV / Excel) and file utilities, backed by the VFS ──
  readtable: async (a, _n, env) => ret(csvToTable(readCsvFile(asString(a[0]), env))),
  readtimetable: async (a, _n, env) => ret(csvToTable(readCsvFile(asString(a[0]), env))),
  readmatrix: async (a, _n, env) => ret(csvToMatrix(readCsvFile(asString(a[0]), env))),
  readcell: async (a, _n, env) => {
    const csv = readCsvFile(asString(a[0]), env); const body = csv.headers ? [csv.headers, ...csv.rows] : csv.rows;
    const R = body.length, C = Math.max(0, ...body.map((r) => r.length)); const items: Value[] = [];
    for (let c = 0; c < C; c++) for (let r = 0; r < R; r++) { const v = body[r]?.[c]; items.push(typeof v === 'number' ? scalar(v) : str(v == null ? '' : String(v))); }
    return ret(makeCell(R, C, items));
  },
  readvars: async (a, n, env) => { const t = csvToTable(readCsvFile(asString(a[0]), env)); return t.cols.slice(0, Math.max(1, n)); },
  csvread: async (a, _n, env) => ret(csvToMatrix({ headers: null, rows: readCsvFile(asString(a[0]), env).rows })),
  dlmread: async (a, _n, env) => { const delim = a.length >= 2 && (isStr(a[1]) || (isMat(a[1]) && (a[1] as Mat).isChar)) ? asString(a[1]) : ','; return ret(csvToMatrix({ headers: null, rows: parseCsv(readText(asString(a[0]), env), delim).rows })); },
  importdata: async (a, _n, env) => {
    const name = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ',';
    const csv = /\.xlsx?$/i.test(name) ? xlsxToCsv(readBytes(name, env)) : parseCsv(readText(name, env), delim);
    const M = csvToMatrix({ headers: null, rows: csv.rows });
    if (!csv.headers) return ret(M);
    return ret({ kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['data', [M]], ['colheaders', [makeCell(1, csv.headers.length, csv.headers.map((h) => str(h)))]]]) } as StructV);
  },
  xlsread: async (a, n, env) => {
    const csv = xlsxToCsv(readBytes(asString(a[0]), env)); const num = csvToMatrix({ headers: null, rows: csv.rows });
    if (n <= 1) return ret(num);
    const txt = makeCell((csv.headers ? 1 : 0) + csv.rows.length, csv.headers?.length ?? 0, []);   // headers as text
    const hdr = csv.headers ? makeCell(1, csv.headers.length, csv.headers.map((h) => str(h))) : makeCell(0, 0, []);
    return [num, hdr, txt];
  },
  writematrix: async (a, _n, env) => { const M = m(a[0]); const name = a.length >= 2 ? asString(a[1]) : 'matrix.csv'; env.writeFileText(name, matrixToCsv(M)); return []; },
  csvwrite: async (a, _n, env) => { const name = asString(a[0]); env.writeFileText(name, matrixToCsv(m(a[1]))); return []; },
  dlmwrite: async (a, _n, env) => { const name = asString(a[0]); const delim = a.length >= 3 && (isStr(a[2]) || (isMat(a[2]) && (a[2] as Mat).isChar)) ? asString(a[2]) : ','; env.writeFileText(name, matrixToCsv(m(a[1])).replace(/,/g, delim)); return []; },
  writetable: async (a, _n, env) => { const name = a.length >= 2 ? asString(a[1]) : 'table.csv'; env.writeFileText(name, tableToCsv(a[0] as Table)); return []; },
  writecell: async (a, _n, env) => { const C = a[0] as Cell; const name = a.length >= 2 ? asString(a[1]) : 'cell.csv'; const rows: string[] = []; for (let r = 0; r < C.rows; r++) { const row: string[] = []; for (let c = 0; c < C.cols; c++) { const v = C.items[r + c * C.rows]; row.push(csvCell(v)); } rows.push(row.join(',')); } env.writeFileText(name, rows.join('\n') + '\n'); return []; },
  type: async (a, _n, env) => { const txt = env.readFileText(asString(a[0])); if (txt == null) throw new MatError(`'${asString(a[0])}' not found.`); env.output(txt.endsWith('\n') ? txt : txt + '\n'); return []; },
  edit: async (a, _n, env) => { const name = asString(a[0]); const txt = env.readFileText(name); env.output(txt == null ? `'${name}' is a new file.\n` : txt + (txt.endsWith('\n') ? '' : '\n')); return []; },
  dir: async (_a, _n, env) => { const f = env.listFiles(); env.output(f.length ? f.join('\n') + '\n' : ''); return []; },
  ls: async (_a, _n, env) => { const f = env.listFiles(); env.output(f.length ? f.join('   ') + '\n' : ''); return []; },
  delete: async (a, _n, env) => { for (const v of a) env.deleteFile(asString(v)); return []; },
  who: async (_a, _n, env) => {
    const names = env.workspaceVars().map((v) => v.name);
    env.output(names.length ? 'Your variables are:\n\n' + names.join('   ') + '\n' : '');
    return [];
  },
  whos: async (_a, _n, env) => {
    const vars = env.workspaceVars();
    if (!vars.length) return [];
    const rows = vars.map((v) => `  ${v.name.padEnd(14)}${v.size.padEnd(12)}${v.klass}`);
    env.output('  Name          Size        Class\n' + rows.join('\n') + '\n');
    return [];
  },
};

const GENERAL_HELP =
  'MATLAB sandbox — a browser MATLAB/Octave runner.\n' +
  '  help <name>   description of a function (e.g. help plot)\n' +
  '  who / whos    list workspace variables\n' +
  '  clear [name]  clear all or named variables\n' +
  'Pick a file on the left and press Run, or type commands here.';


// Help text, doc links, and the HELP/EXTRA_HELP/EXTRA_SYNTAX tables live in help.ts.
export { docUrl, builtinHelp } from './help';

function trimNum(x: number): string {
  if (Number.isInteger(x)) return String(x);
  return parseFloat(x.toPrecision(5)).toString();
}
function matToStr(A: Mat): string {
  if (A.rows === 1 && A.cols === 1) return trimNum(A.data[0]);   // scalar → no brackets
  const rows: string[] = [];
  for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(trimNum(A.data[r + c * A.rows])); rows.push(row.join(' ')); }
  return `[${rows.join(';')}]`;   // MATLAB brackets vectors/matrices
}

/** Encode a Value as a JSON string (jsonencode). */
function jsonEncode(v: Value): string {
  if (isStr(v)) return v.rows * v.cols === 1 ? JSON.stringify(v.items[0]) : JSON.stringify(v.items);
  if (isCell(v)) return '[' + v.items.map((x) => jsonEncode(x)).join(',') + ']';
  if (isStruct(v)) { const o: string[] = []; for (const [k, vals] of v.fields) o.push(JSON.stringify(k) + ':' + jsonEncode(vals[0])); return '{' + o.join(',') + '}'; }
  const A = m(v);
  if (A.isChar) return JSON.stringify(asString(A));
  if (numel(A) === 1) return jsonNum(A.data[0]);
  if (A.rows === 1 || A.cols === 1) return '[' + toArray(A).map(jsonNum).join(',') + ']';
  const rows: string[] = []; for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(jsonNum(A.data[r + c * A.rows])); rows.push('[' + row.join(',') + ']'); }
  return '[' + rows.join(',') + ']';
}
const jsonNum = (x: number) => (Number.isFinite(x) ? String(x) : 'null');
/** Decode a parsed JSON value into a MATLAB Value (jsondecode). */
function jsonDecode(j: unknown): Value {
  if (typeof j === 'number') return scalar(j);
  if (typeof j === 'boolean') return bool(j);
  if (j === null) return scalar(NaN);
  if (typeof j === 'string') return makeStr(j);
  if (Array.isArray(j)) {
    if (j.every((x) => typeof x === 'number')) return colVec(j as number[]);            // numeric array → column vector
    if (j.length && j.every((x) => Array.isArray(x) && (x as unknown[]).every((y) => typeof y === 'number') && (x as unknown[]).length === (j[0] as unknown[]).length))
      return fromRows(j as number[][]);                                                  // rectangular numeric → matrix
    return makeCell(j.length, 1, j.map((x) => jsonDecode(x)));                            // otherwise → cell column
  }
  const o = j as Record<string, unknown>; const fields = new Map<string, Value[]>();
  for (const k of Object.keys(o)) fields.set(k, [jsonDecode(o[k])]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}

// ── table / timetable helpers ──────────────────────────────────────────
function gTbl(v: Value, name = 'argument'): Table { if (!isTable(v)) throw new MatError(`${name}: expected a table`); return v; }
function tblRows(c: Value): number { return isTemporal(c) ? c.rows * c.cols : isStr(c) ? c.rows : isMat(c) ? c.rows : numelOf(c); }
function median1(v: number[]): number { const s = [...v].sort((a, b) => a - b); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }
/** Read the 'VariableNames' option from a table arg list, if present. */
function parseNameOpt(a: Value[]): string[] | null {
  for (let i = 0; i < a.length - 1; i++) if ((isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'variablenames') || (isStr(a[i]) && asString(a[i]).toLowerCase() === 'variablenames')) { const nv = a[i + 1]; return isCell(nv) ? nv.items.map((x) => asString(x)) : isStr(nv) ? nv.items.slice() : [asString(nv)]; }
  return null;
}
/** Split a table(...) / timetable(...) arg list (after `start`) into columns + variable names. */
function parseTableArgs(a: Value[], start: number): { cols: Value[]; names: string[] } {
  const cols: Value[] = []; for (let i = start; i < a.length; i++) { if ((isMat(a[i]) && (a[i] as Mat).isChar && /^(variablenames|rownames|rowtimes)$/i.test(asString(a[i]))) || (isStr(a[i]) && /^(variablenames|rownames|rowtimes)$/i.test(asString(a[i])))) break; cols.push(a[i]); }
  const names = parseNameOpt(a) ?? cols.map((_, i) => `Var${i + 1}`);
  return { cols, names };
}
/** Stack a list of per-row values into a single column (Mat, Str, or temporal). */
function stackColumn(items: Value[]): Value {
  if (items.every((x) => isMat(x) && (x as Mat).isChar)) return makeStrArr(items.length, 1, items.map((x) => asString(x)));
  if (items.every((x) => isStr(x))) return makeStrArr(items.length, 1, items.map((x) => asString(x)));
  return colVec(items.map((x) => asScalar(x)));
}
/** One table cell as a standalone value. */
function tblCellValue(col: Value, r: number): Value {
  if (isStr(col)) return makeStr(col.items[r] ?? '');
  if (isTemporal(col)) return makeTemporal(col.tkind, 1, 1, Float64Array.of(col.data[r]));
  const M = m(col); return M.cols <= 1 ? scalar(M.data[r]) : rowVec(Array.from({ length: M.cols }, (_, c) => M.data[r + c * M.rows]));
}
/** Select rows (0-based indices) of every column → a new table. */
function tblSlice(t: Table, idx: number[]): Table {
  const pick = (col: Value): Value => {
    if (isStr(col)) return makeStrArr(idx.length, 1, idx.map((i) => col.items[i]));
    if (isTemporal(col)) return makeTemporal(col.tkind, idx.length, 1, Float64Array.from(idx, (i) => col.data[i]), col.fmt);
    const M = m(col); const o = zeros(idx.length, M.cols); idx.forEach((src, dst) => { for (let c = 0; c < M.cols; c++) o.data[dst + c * idx.length] = M.data[src + c * M.rows]; }); return o;
  };
  return { kind: 'table', vars: t.vars.slice(), cols: t.cols.map(pick), nrows: idx.length, isTimetable: t.isTimetable, rowTimes: t.rowTimes ? makeTemporal(t.rowTimes.tkind, idx.length, 1, Float64Array.from(idx, (i) => t.rowTimes!.data[i])) : undefined, rowDimName: t.rowDimName };
}

// ── Grouping / join helpers (findgroups, splitapply, groupsummary, joins) ──
/** Per-row primitive values of a grouping variable (numbers or strings). */
function colPrim(v: Value): (number | string)[] {
  if (isStr(v)) return v.items.slice();
  if (isCategorical(v)) return Array.from(v.codes, (c) => (c > 0 ? v.categories[c - 1] : '<undefined>'));
  if (isMat(v) && v.isChar) return [asString(v)];
  if (isMat(v)) return toArray(v);
  return [asScalar(v)];
}
function cmpTuple(a: (number | string)[], b: (number | string)[]): number { for (let i = 0; i < a.length; i++) { if (a[i] < b[i]) return -1; if (a[i] > b[i]) return 1; } return 0; }
/** Coerce a value to a list of strings (string array, cellstr, or single char/string). */
function strList(v: Value): string[] { if (isCell(v)) return v.items.map((x) => asString(x)); if (isStr(v)) return v.items.slice(); return [asString(v)]; }
/** Assign sorted group numbers (1-based) to each row from one or more grouping columns. */
function makeGroups(cols: (number | string)[][], nrows: number): { G: number[]; tuples: (number | string)[][] } {
  const tupleOf = (r: number) => cols.map((c) => c[r]);
  const seen = new Map<string, number>(); const tuples: (number | string)[][] = [];
  for (let r = 0; r < nrows; r++) { const t = tupleOf(r); const k = t.join(''); if (!seen.has(k)) { seen.set(k, tuples.length); tuples.push(t); } }
  const order = tuples.map((_, i) => i).sort((i, j) => cmpTuple(tuples[i], tuples[j]));
  const keyToSorted = new Map<string, number>(); order.forEach((ti, pos) => keyToSorted.set(tuples[ti].join(''), pos + 1));
  const G = Array.from({ length: nrows }, (_, r) => keyToSorted.get(tupleOf(r).join(''))!);
  return { G, tuples: order.map((ti) => tuples[ti]) };
}
/** Slice the rows of a table column / matrix / string to the given row indices. */
function sliceRows(v: Value, rows: number[]): Value {
  if (isStr(v)) return makeStrArr(rows.length, 1, rows.map((i) => v.items[i]));
  const M = m(v); const o = zeros(rows.length, M.cols); o.isChar = M.isChar; o.itype = M.itype; rows.forEach((src, dst) => { for (let c = 0; c < M.cols; c++) o.data[dst + c * rows.length] = M.data[src + c * M.rows]; }); return o;
}
const GROUP_AGG: Record<string, (v: number[]) => number> = {
  mean: (v) => v.reduce((s, x) => s + x, 0) / (v.length || 1), sum: (v) => v.reduce((s, x) => s + x, 0),
  median: (v) => median1(v), max: (v) => Math.max(...v), min: (v) => Math.min(...v),
  std: (v) => { const mn = v.reduce((s, x) => s + x, 0) / v.length; return Math.sqrt(v.reduce((s, x) => s + (x - mn) ** 2, 0) / (v.length - 1 || 1)); },
  var: (v) => { const mn = v.reduce((s, x) => s + x, 0) / v.length; return v.reduce((s, x) => s + (x - mn) ** 2, 0) / (v.length - 1 || 1); },
  numel: (v) => v.length, nnz: (v) => v.filter((x) => x !== 0).length, range: (v) => Math.max(...v) - Math.min(...v),
};
/** Inner/full-outer join of two tables on their shared variable names. */
function joinTables(t1: Table, t2: Table, kind: 'inner' | 'outer'): Value[] {
  const keys = t1.vars.filter((v) => t2.vars.includes(v));
  if (!keys.length) throw new MatError('join: the tables must share at least one variable name');
  const kc1 = keys.map((nm) => colPrim(t1.cols[t1.vars.indexOf(nm)])), kc2 = keys.map((nm) => colPrim(t2.cols[t2.vars.indexOf(nm)]));
  const key = (cols: (number | string)[][], r: number) => cols.map((c) => c[r]).join('');
  const t2by = new Map<string, number[]>(); for (let r = 0; r < t2.nrows; r++) { const k = key(kc2, r); if (!t2by.has(k)) t2by.set(k, []); t2by.get(k)!.push(r); }
  const L: number[] = [], R: number[] = [], usedT2 = new Set<number>();
  for (let r = 0; r < t1.nrows; r++) { const mm = t2by.get(key(kc1, r)); if (mm) { for (const j of mm) { L.push(r); R.push(j); usedT2.add(j); } } else if (kind === 'outer') { L.push(r); R.push(-1); } }
  if (kind === 'outer') for (let r = 0; r < t2.nrows; r++) if (!usedT2.has(r)) { L.push(-1); R.push(r); }
  const t2extra = t2.vars.filter((v) => !keys.includes(v));
  const gather = (src: Value, idx: number[]): Value => { if (isStr(src)) return makeStrArr(idx.length, 1, idx.map((i) => (i >= 0 ? src.items[i] : ''))); const M = m(src); const o = zeros(idx.length, M.cols); o.isChar = M.isChar; idx.forEach((s, d) => { for (let c = 0; c < M.cols; c++) o.data[d + c * idx.length] = s >= 0 ? M.data[s + c * M.rows] : NaN; }); return o; };
  const outCols: Value[] = [];
  for (const nm of t1.vars) {
    const src = t1.cols[t1.vars.indexOf(nm)];
    if (keys.includes(nm)) { const src2 = t2.cols[t2.vars.indexOf(nm)]; if (isStr(src)) outCols.push(makeStrArr(L.length, 1, L.map((li, k) => (li >= 0 ? src.items[li] : (src2 as Str).items[R[k]])))); else { const M = m(src), M2 = m(src2); const o = zeros(L.length, 1); L.forEach((li, k) => { o.data[k] = li >= 0 ? M.data[li] : M2.data[R[k]]; }); outCols.push(o); } }
    else outCols.push(gather(src, L));
  }
  for (const nm of t2extra) outCols.push(gather(t2.cols[t2.vars.indexOf(nm)], R));
  return [{ kind: 'table', vars: [...t1.vars, ...t2extra], cols: outCols, nrows: L.length } as Table];
}
/** Recode a categorical to a new ordered category list (codes outside it → <undefined>). */
function recodeCategorical(c: Categorical, newCats: string[]): Categorical {
  const remap = new Map<number, number>(); c.categories.forEach((x, i) => { const ni = newCats.indexOf(x); remap.set(i + 1, ni >= 0 ? ni + 1 : 0); });
  return makeCategorical(c.rows, c.cols, Int32Array.from(c.codes, (code) => (code > 0 ? remap.get(code)! : 0)), newCats, c.ordinal);
}

// ── Serial date-number helpers (MATLAB epoch: datenum=719529 at 1970-01-01) ──
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function dnum(y: number, mo: number, d: number, h = 0, mi = 0, s = 0): number {
  const dt = new Date(0); dt.setUTCFullYear(y, mo - 1, d); dt.setUTCHours(h, mi, Math.floor(s), Math.round((s % 1) * 1000));
  return dt.getTime() / 86400000 + 719529;
}
/** duration unit helper: numeric → duration (days); duration → count in that unit. */
function durUnit(v: Value, daysPerUnit: number): Value {
  if (isTemporal(v) && v.tkind === 'duration') { const o = zeros(v.rows, v.cols); for (let i = 0; i < v.data.length; i++) o.data[i] = v.data[i] / daysPerUnit; return o; }
  const M = m(v); return makeTemporal('duration', M.rows, M.cols, Float64Array.from(M.data, (x) => x * daysPerUnit));
}
/** datetime component (0=Y..5=S) of a datetime (or serial-number Mat). */
function dtCompMat(v: Value, idx: number): Mat {
  const data = isTemporal(v) ? v.data : m(v).data; const [r, c] = isTemporal(v) ? [v.rows, v.cols] : [m(v).rows, m(v).cols];
  const o = zeros(r, c); for (let i = 0; i < data.length; i++) o.data[i] = dvec(data[i])[idx]; return o;
}
function dvec(n: number): number[] {
  const ms = Math.round((n - 719529) * 86400000); const dt = new Date(ms);
  return [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate(), dt.getUTCHours(), dt.getUTCMinutes(), dt.getUTCSeconds() + dt.getUTCMilliseconds() / 1000];
}
function dstr(n: number, fmt: string | null): string {
  const [y, mo, d, h, mi, s] = dvec(n); const p2 = (x: number) => String(Math.floor(x)).padStart(2, '0');
  if (fmt) return fmt
    .replace(/yyyy/g, String(y)).replace(/yy/g, String(y % 100).padStart(2, '0'))
    .replace(/mmm/g, MONTHS[mo - 1]).replace(/mm/g, p2(mo))
    .replace(/dd/g, p2(d)).replace(/HH/g, p2(h)).replace(/MM/g, p2(mi)).replace(/SS/g, p2(s));
  const date = `${p2(d)}-${MONTHS[mo - 1]}-${y}`;
  return (h || mi || s) ? `${date} ${p2(h)}:${p2(mi)}:${p2(s)}` : date;
}

// ── Math helpers for the elementary-math builtins ─────────────────────────
const DEG = Math.PI / 180;
function gcd2(a: number, b: number): number { a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b)); while (b) { [a, b] = [b, a % b]; } return a; }

/** Lanczos approximation of the gamma function. */
/** Reinterpret a raw byte buffer as the named numeric class (for typecast). */
function readAs(buf: ArrayBuffer, ty: string): number[] {
  switch (ty) {
    case 'double': return Array.from(new Float64Array(buf));
    case 'single': return Array.from(new Float32Array(buf));
    case 'int8': return Array.from(new Int8Array(buf));
    case 'uint8': return Array.from(new Uint8Array(buf));
    case 'int16': return Array.from(new Int16Array(buf));
    case 'uint16': return Array.from(new Uint16Array(buf));
    case 'int32': return Array.from(new Int32Array(buf));
    case 'uint32': return Array.from(new Uint32Array(buf));
    case 'int64': return Array.from(new BigInt64Array(buf), (b) => Number(b));
    case 'uint64': return Array.from(new BigUint64Array(buf), (b) => Number(b));
    default: throw new MatError(`typecast: unsupported class '${ty}'`);
  }
}

function gammaFn(x: number): number {
  const g = 7;
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gammaFn(1 - x));
  x -= 1; let a = c[0]; const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
}
/** Element-wise function of three arrays, with scalar broadcasting (shape from the largest). */
function broadcast3(A: Mat, B: Mat, C: Mat, f: (x: number, y: number, z: number) => number): Mat {
  const shape = [A, B, C].reduce((s, M) => (numel(M) > numel(s) ? M : s), A);
  const n = numel(shape);
  const at = (M: Mat, i: number) => (M.data.length === 1 ? M.data[0] : M.data[i]);
  const out = zeros(shape.rows, shape.cols); if (shape.nd) out.nd = shape.nd.slice();
  for (let i = 0; i < n; i++) out.data[i] = f(at(A, i), at(B, i), at(C, i));
  return out;
}
// Log-gamma computed directly (Lanczos) so it doesn't overflow the way log(gamma(x))
// does for x ≳ 171 — fixes gammaln/betaln/etc. on large arguments.
const LGAMMA_C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
function logGamma(x: number): number {
  if (Number.isNaN(x)) return NaN;
  if (x <= 0 && x === Math.floor(x)) return Infinity;              // poles at 0, -1, -2, ...
  if (x < 0.5) return Math.log(Math.abs(Math.PI / Math.sin(Math.PI * x))) - logGamma(1 - x);  // reflection
  x -= 1;
  let a = LGAMMA_C[0];
  const t = x + 7.5;
  for (let i = 1; i < 9; i++) a += LGAMMA_C[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

/** Error function (Abramowitz & Stegun 7.1.26). */
function erfFn(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  if (x === 0) return 0;
  // Maclaurin series (no cancellation for |x|≤2) → full double precision incl. erf(0)=0.
  if (x <= 2) {
    let term = x, sum = x;                              // n=0: x^1/0!/1
    for (let n = 1; n < 200; n++) { term *= -(x * x) / n; const t = term / (2 * n + 1); sum += t; if (Math.abs(t) < 1e-17 * Math.abs(sum)) break; }
    return s * (2 / Math.sqrt(Math.PI)) * sum;
  }
  // |x|>2: Abramowitz–Stegun 7.1.26 (≤1e-7, where erf≈±1 anyway).
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}

const EULER_GAMMA = 0.5772156649015328606;

/** Digamma ψ(x) = Γ'(x)/Γ(x): recurrence up to x≥6 then asymptotic series. */
function digamma(x: number): number {
  if (x <= 0 && x === Math.floor(x)) return NaN; // poles at non-positive integers
  if (x < 0) return digamma(1 - x) - Math.PI / Math.tan(Math.PI * x); // reflection
  let r = 0;
  while (x < 6) { r -= 1 / x; x += 1; }
  const f = 1 / (x * x);
  r += Math.log(x) - 1 / (2 * x) - f * (1 / 12 - f * (1 / 120 - f * (1 / 252 - f / 240)));
  return r;
}

/** Exponential integral E₁(x) for x>0 (series for x≤1, continued fraction for x>1). */
function expintE1(x: number): number {
  if (x <= 0) return x === 0 ? Infinity : NaN;
  if (x > 1) {
    let b = x + 1, c = 1e300, d = 1 / b, h = d;
    for (let i = 1; i <= 200; i++) { const a = -i * i; b += 2; d = 1 / (a * d + b); c = b + a / c; const del = c * d; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
    return h * Math.exp(-x);
  }
  let sum = -EULER_GAMMA - Math.log(x), xk = 1, kfact = 1;
  for (let k = 1; k <= 200; k++) { xk *= x; kfact *= k; const term = (k % 2 ? 1 : -1) * xk / (k * kfact); sum += term; if (Math.abs(term) < 1e-16 * Math.abs(sum)) break; }
  return sum;
}

/** Sine and cosine integrals [Si(x), Ci(x)] (Numerical Recipes cisi). */
function cisi(x: number): [number, number] {
  const t = Math.abs(x);
  if (t === 0) return [0, -Infinity];
  let si: number, ci: number;
  if (t > 2) {
    // Complex continued fraction (Lentz) for the auxiliary integral.
    let br = 1, bi = t, cr = 1e300, cii = 0, dr = 0, di = 0, hr = 0, hi = 0;
    { const den = br * br + bi * bi; dr = br / den; di = -bi / den; } hr = dr; hi = di;
    for (let i = 2; i <= 200; i++) {
      const a = -(i - 1) * (i - 1); br += 2;
      // d = 1/(a*d + b)
      let tr = a * dr + br, ti = a * di + bi; let den = tr * tr + ti * ti; dr = tr / den; di = -ti / den;
      // c = b + a/c
      den = cr * cr + cii * cii; cr = br + a * cr / den; cii = bi - a * cii / den;
      // del = c*d ; h *= del
      const delr = cr * dr - cii * di, deli = cr * di + cii * dr;
      const nhr = hr * delr - hi * deli, nhi = hr * deli + hi * delr; hr = nhr; hi = nhi;
      if (Math.abs(delr - 1) + Math.abs(deli) < 1e-14) break;
    }
    // h *= (cos t - i sin t)
    const ct = Math.cos(t), st = Math.sin(t);
    const fr = hr * ct + hi * st, fi = -hr * st + hi * ct;
    ci = -fr; si = Math.PI / 2 + fi;
  } else {
    let sum = 0, sums = 0, sumc = 0, sign = 1, fact = 1, odd = true;
    for (let k = 1; k <= 200; k++) {
      fact *= t / k; const term = fact / k; sum += sign * term;
      if (odd) { sign = -sign; sums = sum; sum = sumc; } else { sumc = sum; sum = sums; }
      if (term < 1e-16 * Math.abs(sum || 1) && k > 1) break; odd = !odd;
    }
    si = sums; ci = sumc + Math.log(t) + EULER_GAMMA;
  }
  if (x < 0) si = -si;
  return [si, ci];
}

/** Dawson integral D(x) = e^{-x²}∫₀ˣ e^{t²}dt (series for small x, asymptotic for large). */
function dawsonFn(x: number): number {
  if (x === 0) return 0;
  if (Math.abs(x) < 3) {
    let term = x, sum = x; // D(x) = Σ (-2)^n/(2n+1)!! x^{2n+1}
    for (let n = 1; n <= 200; n++) { term *= -2 * x * x / (2 * n + 1); sum += term; if (Math.abs(term) < 1e-17 * Math.abs(sum)) break; }
    return sum;
  }
  let term = 1, sum = 1; // D(x) ~ (1/2x) Σ (2k-1)!!/(2x²)^k
  for (let k = 1; k <= 40; k++) { term *= (2 * k - 1) / (2 * x * x); sum += term; if (Math.abs(term) < 1e-16) break; }
  return sum / (2 * x);
}

/** Imaginary error function erfi(x) = (2/√π)∫₀ˣ e^{t²}dt = (2/√π)e^{x²}D(x). */
function erfiFn(x: number): number {
  if (x === 0) return 0;
  return (2 / Math.sqrt(Math.PI)) * Math.exp(x * x) * dawsonFn(x);
}

/** Fresnel integrals [C(x), S(x)] = ∫₀ˣ cos/sin(πt²/2)dt (Numerical Recipes frenel). */
function fresnelCS(x: number): [number, number] {
  const EPS = 1e-13, FPMIN = 1e-30, XMIN = 1.5, PIBY2 = Math.PI / 2;
  const ax = Math.abs(x);
  let c: number, s: number;
  if (ax < Math.sqrt(FPMIN)) { c = ax; s = 0; }
  else if (ax <= XMIN) {
    let sum = 0, sums = 0, sumc = ax, sign = 1, fact = PIBY2 * ax * ax, odd = true, term = ax, n = 3;
    for (let k = 1; k <= 200; k++) {
      term *= fact / k; sum += sign * term / n; const test = Math.abs(sum) * EPS;
      if (odd) { sign = -sign; sums = sum; sum = sumc; } else { sumc = sum; sum = sums; }
      if (term < test) break; odd = !odd; n += 2;
    }
    s = sums; c = sumc;
  } else {
    const pix2 = Math.PI * ax * ax;
    let br = 1, bi = -pix2, ccr = 1 / FPMIN, cci = 0;
    let den = br * br + bi * bi, dr = br / den, di = -bi / den, hr = dr, hi = di, nn = -1;
    for (let k = 2; k <= 200; k++) {
      nn += 2; const a = -nn * (nn + 1); br += 4;
      let tr = a * dr + br, ti = a * di + bi; den = tr * tr + ti * ti; dr = tr / den; di = -ti / den;
      den = ccr * ccr + cci * cci; ccr = br + a * ccr / den; cci = bi - a * cci / den;
      const delr = ccr * dr - cci * di, deli = ccr * di + cci * dr;
      const nhr = hr * delr - hi * deli, nhi = hr * deli + hi * delr; hr = nhr; hi = nhi;
      if (Math.abs(delr - 1) + Math.abs(deli) < EPS) break;
    }
    const thr = ax * hr + ax * hi, thi = ax * hi - ax * hr; hr = thr; hi = thi; // (ax,-ax)*h
    const co = Math.cos(0.5 * pix2), si2 = Math.sin(0.5 * pix2);
    const mr = co * hr - si2 * hi, mi = co * hi + si2 * hr; // (cos+isin)*h
    const onemr = 1 - mr, onemi = -mi;
    c = 0.5 * onemr - 0.5 * onemi; s = 0.5 * onemi + 0.5 * onemr; // (0.5+0.5i)*(1-...)
  }
  if (x < 0) { c = -c; s = -s; }
  return [c, s];
}

/** Lambert W (real branches 0 and -1) via Halley iteration. */
function lambertwFn(x: number, branch = 0): number {
  const EM = -1 / Math.E;
  if (branch !== 0 && branch !== -1) return NaN;
  if (x < EM) return NaN; // complex
  if (x === EM) return -1;
  if (branch === 0 && x === 0) return 0;
  let w: number;
  if (branch === 0) {
    if (x < 1) { const p = Math.sqrt(2 * (Math.E * x + 1)); w = -1 + p - p * p / 3 + 11 / 72 * p * p * p; }
    else if (x > 3) w = Math.log(x) - Math.log(Math.log(x));
    else w = Math.log(x);
  } else {
    if (x >= 0) return NaN;
    const L1 = Math.log(-x), L2 = Math.log(-Math.log(-x)); w = L1 - L2 + L2 / L1;
  }
  for (let i = 0; i < 100; i++) {
    const ew = Math.exp(w), f = w * ew - x;
    const wn = w - f / (ew * (w + 1) - (w + 2) * f / (2 * w + 2));
    if (Math.abs(wn - w) < 1e-15 * (Math.abs(wn) + 1)) { w = wn; break; }
    w = wn;
  }
  return w;
}

/** Riemann zeta ζ(s) for real s (Euler–Maclaurin; reflection for s<0.5). */
function zetaFn(s: number): number {
  if (s === 1) return Infinity;
  if (s === 0) return -0.5;
  if (s < 0 && s % 2 === 0 && Number.isInteger(s)) return 0; // trivial zeros
  if (s < 0.5) return Math.pow(2, s) * Math.pow(Math.PI, s - 1) * Math.sin(Math.PI * s / 2) * gammaFn(1 - s) * zetaFn(1 - s);
  const N = 12, M = 6, Bern = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730];
  let sum = 0;
  for (let n = 1; n < N; n++) sum += Math.pow(n, -s);
  sum += Math.pow(N, 1 - s) / (s - 1) + Math.pow(N, -s) / 2;
  for (let k = 1; k <= M; k++) {
    let poch = 1; for (let j = 0; j < 2 * k - 1; j++) poch *= (s + j);
    let f2k = 1; for (let j = 1; j <= 2 * k; j++) f2k *= j;
    sum += Bern[k - 1] / f2k * poch * Math.pow(N, -s - 2 * k + 1);
  }
  return sum;
}

/** Upper incomplete gamma Γ(a,x) = ∫ₓ^∞ t^{a-1}e^{-t}dt (unregularized). */
function igammaFn(a: number, x: number): number {
  if (x < 0 || a <= 0) return NaN;
  if (x === 0) return gammaFn(a);
  if (x < a + 1) {
    let ap = a, sum = 1 / a, del = 1 / a;
    for (let i = 0; i < 400; i++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-16) break; }
    const P = sum * Math.exp(-x + a * Math.log(x) - logGamma(a));
    return (1 - P) * gammaFn(a);
  }
  let b = x + 1 - a, c = 1e300, d = 1 / b, h = d;
  for (let i = 1; i <= 400; i++) { const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300; c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-16) break; }
  return Math.exp(-x + a * Math.log(x) - logGamma(a)) * h * gammaFn(a);
}

/** Pochhammer (rising factorial) (x)_n = Γ(x+n)/Γ(x). */
function pochhammerFn(x: number, n: number): number {
  if (Number.isInteger(n) && n >= 0) { let p = 1; for (let i = 0; i < n; i++) p *= (x + i); return p; }
  return gammaFn(x + n) / gammaFn(x);
}

/** Classical orthogonal polynomials by three-term recurrence. kind T,U,P,H,L. */
function orthoPoly(kind: string, n: number, x: number): number {
  if (n <= 0) return 1;
  let p0 = 1, p1: number;
  switch (kind) {
    case 'T': p1 = x; break;
    case 'U': p1 = 2 * x; break;
    case 'P': p1 = x; break;
    case 'H': p1 = 2 * x; break;
    case 'L': p1 = 1 - x; break;
    default: return NaN;
  }
  for (let k = 2; k <= n; k++) {
    let pk: number;
    switch (kind) {
      case 'T': case 'U': pk = 2 * x * p1 - p0; break;
      case 'P': pk = ((2 * k - 1) * x * p1 - (k - 1) * p0) / k; break;
      case 'H': pk = 2 * x * p1 - 2 * (k - 1) * p0; break;
      default: pk = ((2 * k - 1 - x) * p1 - (k - 1) * p0) / k; break; // L
    }
    p0 = p1; p1 = pk;
  }
  return p1;
}

/** Binomial coefficient C(n,k) via multiplicative formula (exact for moderate n). */
function binomN(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k); let r = 1;
  for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
  return Math.round(r);
}

/** Exponential integral Ei(x) (series, asymptotic for large x, reflection for x<0). */
function eiFn(x: number): number {
  if (x === 0) return -Infinity;
  if (x < 0) return -expintE1(-x);
  if (x > 40) { let term = 1, sum = 1; for (let k = 1; k <= 60; k++) { term *= k / x; sum += term; if (term < 1e-16) break; } return Math.exp(x) / x * sum; }
  let sum = EULER_GAMMA + Math.log(x), term = 1;
  for (let k = 1; k <= 500; k++) { term *= x / k; const add = term / k; sum += add; if (Math.abs(add) < 1e-17 * Math.abs(sum)) break; }
  return sum;
}
/** Logarithmic integral li(x) = Ei(ln x). */
function logintFn(x: number): number { if (x <= 0) return x === 0 ? 0 : NaN; if (x === 1) return -Infinity; return eiFn(Math.log(x)); }
/** Hyperbolic sine integral Shi(x). */
function shiFn(x: number): number { if (x === 0) return 0; let term = x, sum = x; for (let k = 1; k <= 300; k++) { term *= x * x / ((2 * k) * (2 * k + 1)); const add = term / (2 * k + 1); sum += add; if (Math.abs(add) < 1e-18 * Math.abs(sum)) break; } return sum; }
/** Hyperbolic cosine integral Chi(x). */
function chiFn(x: number): number { if (x === 0) return -Infinity; let sum = EULER_GAMMA + Math.log(Math.abs(x)), term = 1; for (let k = 1; k <= 300; k++) { term *= x * x / ((2 * k - 1) * (2 * k)); const add = term / (2 * k); sum += add; if (Math.abs(add) < 1e-18 * Math.abs(sum)) break; } return sum; }
/** Hurwitz zeta ζ(s,a) for real s≠1, a>0 (Euler–Maclaurin). */
function hurwitzZetaFn(s: number, a: number): number {
  if (s === 1) return Infinity;
  const N = 12, M = 6, Bern = [1 / 6, -1 / 30, 1 / 42, -1 / 30, 5 / 66, -691 / 2730];
  let sum = 0; for (let n = 0; n < N; n++) sum += Math.pow(n + a, -s);
  const Na = N + a; sum += Math.pow(Na, 1 - s) / (s - 1) + Math.pow(Na, -s) / 2;
  for (let k = 1; k <= M; k++) { let poch = 1; for (let j = 0; j < 2 * k - 1; j++) poch *= (s + j); let f2k = 1; for (let j = 1; j <= 2 * k; j++) f2k *= j; sum += Bern[k - 1] / f2k * poch * Math.pow(Na, -s - 2 * k + 1); }
  return sum;
}
/** Polylogarithm Li_n(x) (series for |x|<1; special values at x=0,1,-1). */
function polylogFn(n: number, x: number): number {
  if (x === 0) return 0;
  if (x === 1) return zetaFn(n);
  if (x === -1) return -(1 - Math.pow(2, 1 - n)) * zetaFn(n);
  if (Math.abs(x) < 1) { let sum = 0, xp = 1; for (let k = 1; k <= 20000; k++) { xp *= x; const add = xp / Math.pow(k, n); sum += add; if (Math.abs(add) < 1e-17 * Math.abs(sum || 1)) break; } return sum; }
  return NaN; // outside the real domain (would be complex)
}
/** Dawson's MATLAB dilog(x) = Li₂(1−x). */
function dilogFn(x: number): number { return polylogFn(2, 1 - x); }
/** Wright omega ω(x): the unique real solution of ω + ln ω = x. */
function wrightOmegaFn(x: number): number {
  if (!Number.isFinite(x)) return x;
  let w = x <= 0 ? Math.exp(x) : (x < 1 ? Math.max(x, 1e-12) : x - Math.log(x));
  for (let i = 0; i < 100; i++) { const f = w + Math.log(w) - x, wn = w - f / (1 + 1 / w); if (Math.abs(wn - w) < 1e-15 * (Math.abs(wn) + 1)) { w = wn; break; } w = wn <= 0 ? w / 2 : wn; }
  return w;
}
/** Jacobi polynomial P_n^{(a,b)}(x) by recurrence. */
function jacobiPFn(n: number, a: number, b: number, x: number): number {
  if (n === 0) return 1;
  let p0 = 1, p1 = (a - b) / 2 + (a + b + 2) / 2 * x;
  for (let k = 2; k <= n; k++) {
    const c1 = 2 * k * (k + a + b) * (2 * k + a + b - 2);
    const c2 = (2 * k + a + b - 1) * (a * a - b * b);
    const c3 = (2 * k + a + b - 1) * (2 * k + a + b) * (2 * k + a + b - 2);
    const c4 = 2 * (k + a - 1) * (k + b - 1) * (2 * k + a + b);
    const pk = ((c2 + c3 * x) * p1 - c4 * p0) / c1; p0 = p1; p1 = pk;
  }
  return p1;
}
/** Gegenbauer (ultraspherical) polynomial C_n^{(a)}(x) by recurrence. */
function gegenbauerCFn(n: number, a: number, x: number): number {
  if (n === 0) return 1;
  let c0 = 1, c1 = 2 * a * x;
  for (let k = 2; k <= n; k++) { const ck = (2 * x * (k + a - 1) * c1 - (k + 2 * a - 2) * c0) / k; c0 = c1; c1 = ck; }
  return c1;
}
/** Bernoulli number B_n (B₁ = −½ convention). */
function bernoulliNum(n: number): number { const B = [1]; for (let m = 1; m <= n; m++) { let s = 0; for (let k = 0; k < m; k++) s += binomN(m + 1, k) * B[k]; B[m] = -s / (m + 1); } return B[n]; }
/** Bernoulli polynomial B_n(x). */
function bernoulliPoly(n: number, x: number): number { let s = 0; for (let k = 0; k <= n; k++) s += binomN(n, k) * bernoulliNum(k) * Math.pow(x, n - k); return s; }
/** Euler number E_n (odd → 0). */
function eulerNum(n: number): number { if (n % 2 === 1) return 0; const E: number[] = []; for (let m = 0; m <= n; m += 2) { if (m === 0) { E[0] = 1; continue; } let s = 0; for (let k = 0; k < m / 2; k++) s += binomN(m, 2 * k) * E[2 * k]; E[m] = -s; } return E[n]; }
/** Euler polynomial E_n(x). */
function eulerPoly(n: number, x: number): number { let sum = 0; for (let k = 0; k <= n; k++) { let inner = 0; for (let i = 0; i <= k; i++) inner += (i % 2 ? -1 : 1) * binomN(k, i) * Math.pow(x + i, n); sum += inner / Math.pow(2, k); } return sum; }
/** Jacobi symbol (a/n) for odd n>0. */
function jacobiSym(a: number, n: number): number {
  if (n <= 0 || n % 2 === 0) return NaN;
  a = ((Math.round(a) % n) + n) % n; let result = 1;
  while (a !== 0) {
    while (a % 2 === 0) { a /= 2; const r = n % 8; if (r === 3 || r === 5) result = -result; }
    [a, n] = [n, a]; if (a % 4 === 3 && n % 4 === 3) result = -result; a %= n;
  }
  return n === 1 ? result : 0;
}
/** Composite-Simpson integral on [a,b] with even nn panels. */
function simpsonInt(f: (t: number) => number, a: number, b: number, nn: number): number {
  if (a === b) return 0; const h = (b - a) / nn; let s = f(a) + f(b);
  for (let i = 1; i < nn; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return s * h / 3;
}
/** Generalized hypergeometric ₚFq(a;b;z) = Σ_k [∏(aᵢ)_k / ∏(bⱼ)_k] zᵏ/k!. */
function hyperPFQ(as: number[], bs: number[], z: number): number {
  let term = 1, sum = 1;
  for (let k = 0; k < 500; k++) {
    let f = z / (k + 1);
    for (const a of as) f *= (a + k);
    for (const b of bs) f /= (b + k);
    term *= f; sum += term;
    if (Math.abs(term) < 1e-16 * Math.abs(sum)) break;
  }
  return sum;
}
/** Confluent hypergeometric M(a,b,z) = ₁F₁. */
const kummerM = (a: number, b: number, z: number): number => hyperPFQ([a], [b], z);
/** Confluent hypergeometric U(a,b,z) (non-integer b: two-M combination; integer b → limit). */
function kummerUFn(a: number, b: number, z: number): number {
  if (Math.abs(b - Math.round(b)) < 1e-9) b += 1e-7;   // nudge off integer (use the limit)
  return gammaFn(1 - b) / gammaFn(a - b + 1) * kummerM(a, b, z)
    + gammaFn(b - 1) / gammaFn(a) * Math.pow(z, 1 - b) * kummerM(a - b + 1, 2 - b, z);
}
/** Complete/incomplete elliptic integral of the third kind Π(n;φ|m). */
function ellipticPiFn(nch: number, phi: number, mm: number): number {
  return simpsonInt((t) => 1 / ((1 - nch * Math.sin(t) ** 2) * Math.sqrt(1 - mm * Math.sin(t) ** 2)), 0, phi, 4000);
}

/** Shared check for the mustBe* numeric validators: every element must satisfy pred. */
function mustBeNum(v: Value, pred: (x: number) => boolean, msg: string): Value[] {
  if (!isMat(v)) throw new MatError(`Value ${msg}.`);
  for (const x of (v as Mat).data) if (!pred(x)) throw new MatError(`Value ${msg}.`);
  return [];
}

/** Adjugate (classical adjoint) via cofactors — works for singular matrices too. */
function adjugateCofactor(A: Mat): Mat {
  const n = A.rows;
  if (n === 1) return scalar(1);
  const o = zeros(n, n);
  const minor = (skipR: number, skipC: number): Mat => {
    const sub = zeros(n - 1, n - 1); let rr = 0;
    for (let r = 0; r < n; r++) { if (r === skipR) continue; let cc = 0; for (let c = 0; c < n; c++) { if (c === skipC) continue; sub.data[rr + cc * (n - 1)] = A.data[r + c * n]; cc++; } rr++; }
    return sub;
  };
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const cof = ((i + j) % 2 ? -1 : 1) * det(minor(i, j));
    o.data[j + i * n] = cof; // transpose of cofactor matrix
  }
  return o;
}

/** Associated Legendre function P_l^m(x), 0≤m≤l, |x|≤1 (with Condon–Shortley phase). */
function plgndr(l: number, mm: number, x: number): number {
  let pmm = 1;
  if (mm > 0) { const somx2 = Math.sqrt((1 - x) * (1 + x)); let fact = 1; for (let i = 1; i <= mm; i++) { pmm *= -fact * somx2; fact += 2; } }
  if (l === mm) return pmm;
  let pmmp1 = x * (2 * mm + 1) * pmm;
  if (l === mm + 1) return pmmp1;
  let pll = 0;
  for (let ll = mm + 2; ll <= l; ll++) { pll = (x * (2 * ll - 1) * pmmp1 - (ll + mm - 1) * pmm) / (ll - mm); pmm = pmmp1; pmmp1 = pll; }
  return pll;
}

/** J_ν / I_ν power series (good for moderate x≥0): Σ (∓1)^k/(k! Γ(ν+k+1)) (x/2)^{2k+ν}. */
function besselSeries(nu: number, x: number, alt: boolean): number {
  if (x === 0) return nu === 0 ? 1 : 0;
  const hx = x / 2; let term = Math.pow(hx, nu) / gammaFn(nu + 1); let sum = term;
  for (let k = 1; k <= 400; k++) { term *= (alt ? -1 : 1) * (hx * hx) / (k * (nu + k)); sum += term; if (Math.abs(term) < 1e-17 * Math.abs(sum)) break; }
  return sum;
}
const besseljFn = (nu: number, x: number) => besselSeries(nu, x, true);
const besseliFn = (nu: number, x: number) => besselSeries(nu, x, false);
/** Bessel arg broadcasting: bessel(nu, X) — scalar nu over array X, or elementwise same-size. */
function bzip(a: Value[], fn: (nu: number, x: number) => number): Mat {
  const NU = m(a[0]), X = m(a[1]);
  if (numel(NU) === 1) return map(X, (x) => fn(NU.data[0], x));
  if (numel(X) === 1) return map(NU, (nu) => fn(nu, X.data[0]));
  return elementwise(NU, X, (nu, x) => fn(nu, x));
}
/** Y_ν via reflection; integer order uses a tiny offset (limit). */
function besselyFn(nu: number, x: number): number {
  if (nu === Math.floor(nu)) nu += 1e-8;
  return (besseljFn(nu, x) * Math.cos(nu * Math.PI) - besseljFn(-nu, x)) / Math.sin(nu * Math.PI);
}
/** K_ν via reflection; integer order uses a tiny offset (limit). */
function besselkFn(nu: number, x: number): number {
  if (nu === Math.floor(nu)) nu += 1e-8;
  return (Math.PI / 2) * (besseliFn(-nu, x) - besseliFn(nu, x)) / Math.sin(nu * Math.PI);
}
/** Airy functions via Bessel relations. kind: 0=Ai,1=Ai',2=Bi,3=Bi'. */
function airyFn(kind: number, x: number): number {
  const r3 = Math.sqrt(3);
  if (x === 0) {
    const g13 = gammaFn(1 / 3), g23 = gammaFn(2 / 3);
    if (kind === 0) return 1 / (Math.pow(3, 2 / 3) * g23);
    if (kind === 1) return -1 / (Math.pow(3, 1 / 3) * g13);
    if (kind === 2) return 1 / (Math.pow(3, 1 / 6) * g23);
    return Math.pow(3, 1 / 6) / g13;
  }
  if (x > 0) {
    const z = (2 / 3) * Math.pow(x, 1.5);
    if (kind === 0) return (1 / Math.PI) * Math.sqrt(x / 3) * besselkFn(1 / 3, z);
    if (kind === 1) return -(x / (Math.PI * r3)) * besselkFn(2 / 3, z);
    if (kind === 2) return Math.sqrt(x / 3) * (besseliFn(-1 / 3, z) + besseliFn(1 / 3, z));
    return (x / r3) * (besseliFn(-2 / 3, z) + besseliFn(2 / 3, z));
  }
  const ax = -x, z = (2 / 3) * Math.pow(ax, 1.5);
  if (kind === 0) return (Math.sqrt(ax) / 3) * (besseljFn(1 / 3, z) + besseljFn(-1 / 3, z));
  if (kind === 1) return (ax / 3) * (besseljFn(2 / 3, z) - besseljFn(-2 / 3, z));
  if (kind === 2) return Math.sqrt(ax / 3) * (besseljFn(-1 / 3, z) - besseljFn(1 / 3, z));
  return (ax / r3) * (besseljFn(-2 / 3, z) + besseljFn(2 / 3, z));
}
/** Complete elliptic integrals [K(m), E(m)] via the AGM. */
function ellipkeFn(mm: number): [number, number] {
  if (mm === 1) return [Infinity, 1];
  let a = 1, b = Math.sqrt(1 - mm), c = Math.sqrt(mm);
  let sum = 0.5 * c * c, pw = 1;
  for (let i = 0; i < 60 && Math.abs(c) > 1e-15; i++) { const an = (a + b) / 2, bn = Math.sqrt(a * b); c = (a - b) / 2; a = an; b = bn; sum += pw * c * c; pw *= 2; }
  const K = Math.PI / (2 * a);
  return [K, K * (1 - sum)];
}
/** Jacobi elliptic functions [sn, cn, dn] (Numerical Recipes sncndn); emmc = 1−m. */
function sncndn(uu: number, emmc: number): [number, number, number] {
  const CA = 1e-12; let emc = emmc, u = uu, sn: number, cn = 0, dn = 1;
  if (emc !== 0) {
    let bo = emc < 0, d = 1;
    if (bo) { d = 1 - emc; emc = -emc / d; d = Math.sqrt(d); u = d * u; }
    let a = 1, c = 0, l = 0; const em: number[] = [], en: number[] = [];
    for (let i = 0; i < 14; i++) { l = i; em[i] = a; emc = Math.sqrt(emc); en[i] = emc; c = (a + emc) / 2; if (Math.abs(a - emc) <= CA * a) break; emc = a * emc; a = c; }
    u = c * u; sn = Math.sin(u); cn = Math.cos(u);
    if (sn !== 0) {
      a = cn / sn; c = a * c;
      for (let ii = l; ii >= 0; ii--) { const b = em[ii]; a = c * a; c = dn * c; dn = (en[ii] + a) / (b + a); a = c / b; }
      a = 1 / Math.sqrt(c * c + 1); sn = sn >= 0 ? a : -a; cn = c * sn;
    }
    if (bo) { a = dn; dn = cn; cn = a; sn = sn / d; }
  } else { cn = 1 / Math.cosh(u); dn = cn; sn = Math.tanh(u); }
  return [sn, cn, dn];
}

/** Magic square (Siamese for odd, doubly-even rule, Strachey for singly-even). */
/** Unit-sphere surface coordinates, (n+1)×(n+1). */
function sphereCoords(n: number): { X: Mat; Y: Mat; Z: Mat } {
  const m1 = n + 1; const X = zeros(m1, m1), Y = zeros(m1, m1), Z = zeros(m1, m1);
  for (let i = 0; i <= n; i++) { const phi = -Math.PI / 2 + Math.PI * i / n; for (let j = 0; j <= n; j++) { const th = -Math.PI + 2 * Math.PI * j / n; X.data[i + j * m1] = Math.cos(phi) * Math.cos(th); Y.data[i + j * m1] = Math.cos(phi) * Math.sin(th); Z.data[i + j * m1] = Math.sin(phi); } }
  return { X, Y, Z };
}
/** Cylinder surface coordinates from a radius profile r (length m) and n facets. */
function cylinderCoords(r: number[], n: number): { X: Mat; Y: Mat; Z: Mat } {
  const mm = r.length, X = zeros(mm, n + 1), Y = zeros(mm, n + 1), Z = zeros(mm, n + 1);
  for (let i = 0; i < mm; i++) for (let j = 0; j <= n; j++) { const th = 2 * Math.PI * j / n; X.data[i + j * mm] = r[i] * Math.cos(th); Y.data[i + j * mm] = r[i] * Math.sin(th); Z.data[i + j * mm] = mm > 1 ? i / (mm - 1) : 0; }
  return { X, Y, Z };
}
/** Sample f(x,y) over a grid (fsurf/fmesh/fcontour). Default domain [-5,5]². */
async function sampleFn2(a: Value[], env: Env): Promise<{ X: Mat; Y: Mat; Z: Mat }> {
  const f = isSym(a[0]) ? await symToFn(a[0] as Sym, env) : handle(a[0], 'fsurf');
  let ax = -5, bx = 5, ay = -5, by = 5;
  if (a.length >= 2 && isMat(a[1])) { const v = toArray(a[1] as Mat); if (v.length === 2) { ax = v[0]; bx = v[1]; ay = v[0]; by = v[1]; } else if (v.length >= 4) { ax = v[0]; bx = v[1]; ay = v[2]; by = v[3]; } }
  const np = 41; const m1 = np;
  const X = zeros(m1, m1), Y = zeros(m1, m1);
  for (let i = 0; i < np; i++) for (let j = 0; j < np; j++) { X.data[i + j * m1] = ax + (bx - ax) * j / (np - 1); Y.data[i + j * m1] = ay + (by - ay) * i / (np - 1); }
  const r = await env.callHandle(f, [X, Y], 1);
  const Z = isMat(r[0]) && numel(r[0]) === m1 * m1 ? (r[0] as Mat) : zeros(m1, m1);
  return { X, Y, Z };
}

// ── Colormap generators (return an n×3 RGB matrix) ───────────────────────
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
function cmapGen(args: Value[], f: (t: number, i: number, n: number) => [number, number, number]): Mat {
  const n = args.length && isMat(args[0]) ? Math.round(asScalar(args[0])) : 256;
  const M = zeros(n, 3);
  for (let i = 0; i < n; i++) { const t = n > 1 ? i / (n - 1) : 0; const [r, g, b] = f(t, i, n); M.data[i] = r; M.data[i + n] = g; M.data[i + 2 * n] = b; }
  return M;
}
const jetColor = (t: number): [number, number, number] => [clamp01(1.5 - Math.abs(4 * t - 3)), clamp01(1.5 - Math.abs(4 * t - 2)), clamp01(1.5 - Math.abs(4 * t - 1))];
const hotColor = (t: number): [number, number, number] => [clamp01(t / 0.375), clamp01((t - 0.375) / 0.375), clamp01((t - 0.75) / 0.25)];
function hsv2rgb(h: number, s: number, v: number): [number, number, number] {
  const i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), u = v * (1 - (1 - f) * s);
  switch (((i % 6) + 6) % 6) { case 0: return [v, u, p]; case 1: return [q, v, p]; case 2: return [p, v, u]; case 3: return [p, q, v]; case 4: return [u, p, v]; default: return [v, p, q]; }
}
function charPred(v: Value, test: (ch: string) => boolean): Value[] {
  const s = asString(v); const o = zeros(1, s.length); o.isBool = true;
  for (let i = 0; i < s.length; i++) o.data[i] = test(s[i]) ? 1 : 0;
  return [o];
}
/** Transpose every 2-D page of an N-D array (dims ≥3 preserved after the first two). */
function pageTranspose(A: Mat, conj: boolean): Mat {
  const dims = ndSize(A); const d0 = dims[0], d1 = dims[1]; const psz = d0 * d1; const npage = A.data.length / psz;
  const out = new Float64Array(A.data.length); const oi = A.idata ? new Float64Array(A.data.length) : null;
  for (let p = 0; p < npage; p++) for (let i = 0; i < d0; i++) for (let j = 0; j < d1; j++) {
    const src = p * psz + i + j * d0, dst = p * psz + j + i * d1;
    out[dst] = A.data[src]; if (oi && A.idata) oi[dst] = (conj ? -1 : 1) * A.idata[src];
  }
  const ndims = dims.slice(); ndims[0] = d1; ndims[1] = d0;
  if (ndims.length > 2) return makeND(ndims, out, { idata: oi });
  const r = mat(d1, d0, out); if (oi) r.idata = oi; return r;
}
/** Apply a 2-D op to each page of an N-D array, stacking the (uniformly-sized) results. */
function pageUnary(A: Mat, op: (X: Mat) => Mat): Mat {
  const dims = ndSize(A); const d0 = dims[0], d1 = dims[1], psz = d0 * d1; const np = A.data.length / psz;
  const pages: Mat[] = [];
  for (let p = 0; p < np; p++) pages.push(op(mat(d0, d1, A.data.slice(p * psz, p * psz + psz))));
  const r = pages[0].rows, c = pages[0].cols; const out = new Float64Array(r * c * np);
  pages.forEach((pg, p) => out.set(pg.data, p * r * c));
  const rest = dims.slice(2);
  return rest.length ? makeND([r, c, ...rest], out) : mat(r, c, out);
}
/** Apply a 2-D matrix op page-by-page across two N-D arrays (broadcasting a single page). */
function pageBinary(A: Mat, B: Mat, op: (X: Mat, Y: Mat) => Mat): Mat {
  const da = ndSize(A), db = ndSize(B);
  const ap = da[0] * da[1], bp = db[0] * db[1];
  const na = A.data.length / ap, nb = B.data.length / bp; const np = Math.max(na, nb);
  const pages: Mat[] = [];
  for (let p = 0; p < np; p++) {
    const X = mat(da[0], da[1], A.data.slice((p % na) * ap, (p % na) * ap + ap));
    const Y = mat(db[0], db[1], B.data.slice((p % nb) * bp, (p % nb) * bp + bp));
    pages.push(op(X, Y));
  }
  const r = pages[0].rows, c = pages[0].cols; const out = new Float64Array(r * c * np);
  pages.forEach((pg, p) => out.set(pg.data, p * r * c));
  const rest = (na >= nb ? da : db).slice(2);
  return rest.length ? makeND([r, c, ...rest], out) : mat(r, c, out);
}
function rgb2hsvFn(r: number, g: number, b: number): [number, number, number] {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0; if (d !== 0) { if (mx === r) h = ((g - b) / d) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h /= 6; if (h < 0) h += 1; }
  return [h, mx === 0 ? 0 : d / mx, mx];
}
function lerpAnchors(A: number[][], t: number): [number, number, number] {
  const pos = clamp01(t) * (A.length - 1); const i = Math.min(A.length - 2, Math.floor(pos)); const f = pos - i;
  return [A[i][0] + f * (A[i + 1][0] - A[i][0]), A[i][1] + f * (A[i + 1][1] - A[i][1]), A[i][2] + f * (A[i + 1][2] - A[i][2])];
}
const PARULA = [[0.2081, 0.1663, 0.5292], [0.0779, 0.5040, 0.8384], [0.0265, 0.6137, 0.8135], [0.4668, 0.6753, 0.5226], [0.9856, 0.7572, 0.2347], [0.9763, 0.9831, 0.0538]];
const TURBO = [[0.19, 0.07, 0.23], [0.27, 0.48, 0.99], [0.11, 0.92, 0.62], [0.86, 0.99, 0.10], [0.99, 0.45, 0.05], [0.48, 0.01, 0.01]];
const LINES7 = [[0, 0.447, 0.741], [0.85, 0.325, 0.098], [0.929, 0.694, 0.125], [0.494, 0.184, 0.556], [0.466, 0.674, 0.188], [0.301, 0.745, 0.933], [0.635, 0.078, 0.184]];

/** Chebyshev spectral differentiation matrix (Trefethen), n×n with N=n-1 points. */
function chebspecMat(n: number): Mat {
  const N = n - 1; const D = zeros(n, n); if (N < 1) return D;
  const x: number[] = [], c: number[] = [];
  for (let k = 0; k <= N; k++) { x.push(Math.cos(Math.PI * k / N)); c.push((k === 0 || k === N ? 2 : 1) * (k % 2 ? -1 : 1)); }
  for (let i = 0; i < n; i++) { let sum = 0; for (let j = 0; j < n; j++) if (i !== j) { const v = c[i] / c[j] / (x[i] - x[j]); D.data[i + j * n] = v; sum += v; } D.data[i + i * n] = -sum; }
  return D;
}
/** Wilkinson test matrices wilk(n) for n = 3, 4, 21 (Higham). */
function wilkMat(n: number): Mat {
  if (n === 21) { const W = zeros(21, 21); for (let i = 0; i < 21; i++) { W.data[i + i * 21] = Math.abs(10 - i); if (i + 1 < 21) { W.data[i + (i + 1) * 21] = 1; W.data[(i + 1) + i * 21] = 1; } } return W; }
  if (n === 3) return mat(3, 3, Float64Array.of(1e-10, 0, 0, 0.9, 0.9, 0, -0.4, -0.4, 1e-10));
  if (n === 4) return mat(4, 4, Float64Array.of(0.9143e-4, 0.8762, 0.7943, 0.8017, 0, 0.7156e-4, 0.8143, 0.6123, 0, 0, 0.9504e-4, 0.7165, 0, 0, 0, 0.7123e-4));
  throw new MatError("gallery('wilk',n): only n = 3, 4, 21 are defined");
}
/** Famous test matrices: gallery(name, n, ...). */
function galleryMatrix(name: string, a: Value[]): Value {
  const n = a.length ? Math.round(asScalar(a[0])) : 0;
  const gb = (f: (I: number, J: number) => number): Mat => { const A = zeros(n, n); for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) A.data[i + j * n] = f(i + 1, j + 1); return A; };
  switch (name) {
    case 'minij': return gb((I, J) => Math.min(I, J));
    case 'moler': return gb((I, J) => (I === J ? I : Math.min(I, J) - 2));
    case 'lehmer': return gb((I, J) => Math.min(I, J) / Math.max(I, J));
    case 'frank': return gb((I, J) => (I <= J ? n + 1 - J : (I === J + 1 ? n - J : 0)));
    case 'cauchy': return gb((I, J) => 1 / (I + J));
    case 'clement': return gb((I, J) => (I === J + 1 ? n - J : (J === I + 1 ? I : 0)));
    case 'kms': { const rho = a.length >= 2 ? asScalar(a[1]) : 0.5; return gb((I, J) => Math.pow(rho, Math.abs(I - J))); }
    case 'parter': return gb((I, J) => 1 / (I - J + 0.5));
    case 'fiedler': return gb((I, J) => Math.abs(I - J));
    case 'gcdmat': return gb((I, J) => gcd2(I, J));
    case 'grcar': { const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 3; return gb((I, J) => (I === J + 1 ? -1 : (J >= I && J <= I + k ? 1 : 0))); }
    case 'tridiag': return gb((I, J) => (I === J ? 2 : (Math.abs(I - J) === 1 ? -1 : 0)));
    case 'riemann': return gb((I, J) => ((J + 1) % (I + 1) === 0 ? I : -1));
    case 'chebspec': return chebspecMat(n);
    case 'wilk': return wilkMat(n);
    case 'toeppen': {
      const d = [a.length >= 2 ? asScalar(a[1]) : 1, a.length >= 3 ? asScalar(a[2]) : -10, a.length >= 4 ? asScalar(a[3]) : 0, a.length >= 5 ? asScalar(a[4]) : 10, a.length >= 6 ? asScalar(a[5]) : 1];
      const offs = [-2, -1, 0, 1, 2]; const acc = new Map<number, number>();
      for (let o = 0; o < 5; o++) { if (d[o] === 0) continue; for (let I = 1; I <= n; I++) { const J = I + offs[o]; if (J >= 1 && J <= n) acc.set((J - 1) * n + (I - 1), d[o]); } }
      return sparseFromMap(n, n, acc);
    }
    default: throw new MatError(`gallery: matrix type '${name}' is not implemented in this build`);
  }
}

function magicFn(n: number): Mat {
  const M = zeros(n, n); const at = (r: number, c: number) => M.data[r + c * n]; const set = (r: number, c: number, v: number) => { M.data[r + c * n] = v; };
  if (n < 1) return M;
  if (n % 2 === 1) {
    let i = 0, j = (n - 1) / 2;
    for (let k = 1; k <= n * n; k++) { set(i, j, k); const ni = (i - 1 + n) % n, nj = (j + 1) % n; if (at(ni, nj) !== 0) i = (i + 1) % n; else { i = ni; j = nj; } }
  } else if (n % 4 === 0) {
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) { const v = r * n + c + 1; set(r, c, (r % 4 === c % 4) || ((r % 4 + c % 4) === 3) ? n * n + 1 - v : v); }
  } else {
    const h = n / 2; const sub = magicFn(h); const f = h * h;
    for (let r = 0; r < h; r++) for (let c = 0; c < h; c++) {
      const a = sub.data[r + c * h];
      set(r, c, a); set(r + h, c + h, a + f); set(r, c + h, a + 2 * f); set(r + h, c, a + 3 * f);
    }
    const k = (n - 2) / 4; const center = (h - 1) / 2;
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < k; c++) { const col = r === center ? c + 1 : c; const t = at(r, col); set(r, col, at(r + h, col)); set(r + h, col, t); }
      for (let c = 0; c < k - 1; c++) { const col = n - 1 - c; const t = at(r, col); set(r, col, at(r + h, col)); set(r + h, col, t); }
    }
  }
  return M;
}

// ── Discrete / transform helpers ──────────────────────────────────────────
function ratApprox(x: number): [number, number] {
  if (Number.isInteger(x)) return [x, 1];
  const sgn = x < 0 ? -1 : 1; x = Math.abs(x);
  let h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = x;
  for (let i = 0; i < 20; i++) { const aa = Math.floor(b); const h2 = aa * h1 + h0, k2 = aa * k1 + k0; h0 = h1; h1 = h2; k0 = k1; k1 = k2; if (Math.abs(x - h1 / k1) < 1e-6 * x || b === aa) break; b = 1 / (b - aa); }
  return [sgn * h1, k1];
}
/** Unscaled DFT (radix-2 when n is a power of two, else O(n²)). sign=-1 forward, +1 inverse. */
function fftVec(re: number[], im: number[], sign: number): { re: number[]; im: number[] } {
  const n = re.length; if (n <= 1) return { re: re.slice(), im: im.slice() };
  if ((n & (n - 1)) === 0) {
    const er: number[] = [], ei: number[] = [], or2: number[] = [], oi: number[] = [];
    for (let i = 0; i < n; i += 2) { er.push(re[i]); ei.push(im[i]); or2.push(re[i + 1]); oi.push(im[i + 1]); }
    const E = fftVec(er, ei, sign), O = fftVec(or2, oi, sign);
    const R = new Array(n), I = new Array(n);
    for (let k = 0; k < n / 2; k++) { const ang = sign * 2 * Math.PI * k / n; const c = Math.cos(ang), s = Math.sin(ang); const tr = c * O.re[k] - s * O.im[k], ti = c * O.im[k] + s * O.re[k]; R[k] = E.re[k] + tr; I[k] = E.im[k] + ti; R[k + n / 2] = E.re[k] - tr; I[k + n / 2] = E.im[k] - ti; }
    return { re: R, im: I };
  }
  const R = new Array(n).fill(0), I = new Array(n).fill(0);
  for (let k = 0; k < n; k++) { let sr = 0, si = 0; for (let t = 0; t < n; t++) { const ang = sign * 2 * Math.PI * k * t / n; const c = Math.cos(ang), s = Math.sin(ang); sr += re[t] * c - im[t] * s; si += re[t] * s + im[t] * c; } R[k] = sr; I[k] = si; }
  return { re: R, im: I };
}
/** Apply 1-D FFT to a vector (whole) or each column of a matrix. sign=-1 fft, +1 ifft. */
function fftApply(A: Mat, sign: number): Mat {
  const inv = sign > 0;
  if (A.rows === 1 || A.cols === 1) {
    const n = numel(A); const re = Array.from(A.data); const im = A.idata ? Array.from(A.idata) : new Array(n).fill(0);
    const R = fftVec(re, im, sign); if (inv) for (let i = 0; i < n; i++) { R.re[i] /= n; R.im[i] /= n; }
    const Re = Float64Array.from(R.re), Im = Float64Array.from(R.im);
    return A.rows === 1 ? finishComplex(1, n, Re, Im) : finishComplex(n, 1, Re, Im);
  }
  const rows = A.rows, cols = A.cols; const Re = new Float64Array(rows * cols), Im = new Float64Array(rows * cols);
  for (let c = 0; c < cols; c++) { const re: number[] = [], im: number[] = []; for (let r = 0; r < rows; r++) { re.push(A.data[r + c * rows]); im.push(A.idata ? A.idata[r + c * rows] : 0); } const R = fftVec(re, im, sign); if (inv) for (let i = 0; i < rows; i++) { R.re[i] /= rows; R.im[i] /= rows; } for (let r = 0; r < rows; r++) { Re[r + c * rows] = R.re[r]; Im[r + c * rows] = R.im[r]; } }
  return finishComplex(rows, cols, Re, Im);
}
function fftShift(A: Mat, inverse: boolean): Mat {
  const shift = (len: number) => (inverse ? Math.floor(len / 2) : Math.ceil(len / 2));
  const o = zeros(A.rows, A.cols); const im = A.idata ? new Float64Array(A.data.length) : null;
  const sr = A.rows === 1 ? 0 : shift(A.rows), sc = A.cols === 1 ? 0 : (A.rows === 1 ? shift(A.cols) : shift(A.cols));
  const scol = A.rows === 1 ? shift(A.cols) : sc;
  for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { const nr = (r + sr) % A.rows, nc = (c + scol) % A.cols; o.data[nr + nc * A.rows] = A.data[r + c * A.rows]; if (im) im[nr + nc * A.rows] = A.idata![r + c * A.rows]; }
  if (im) o.idata = im; return o;
}

// ── Geometry / special-function helpers ───────────────────────────────────
function pointInPoly(px: number, py: number, xv: number[], yv: number[]): boolean {
  let inside = false; const n = xv.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    if (((yv[i] > py) !== (yv[j] > py)) && (px < (xv[j] - xv[i]) * (py - yv[i]) / (yv[j] - yv[i] || 1e-300) + xv[i])) inside = !inside;
  }
  return inside;
}
/** 2-D convex hull (monotonic chain); returns 1-based vertex indices, closed. */
function convHull2D(x: number[], y: number[]): number[] {
  const idx = x.map((_, i) => i).sort((a, b) => x[a] - x[b] || y[a] - y[b]);
  const cross = (o: number, a: number, b: number) => (x[a] - x[o]) * (y[b] - y[o]) - (y[a] - y[o]) * (x[b] - x[o]);
  const lower: number[] = []; for (const p of idx) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); }
  const upper: number[] = []; for (let i = idx.length - 1; i >= 0; i--) { const p = idx[i]; while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p); }
  const hull = [...lower.slice(0, -1), ...upper.slice(0, -1)];
  return [...hull, hull[0]].map((i) => i + 1);
}
/** Regularised lower incomplete gamma P(a,x) (Numerical Recipes gammp). */
function medianOf(w: number[]): number { const s = [...w].sort((a, b) => a - b); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }
/** Fill NaNs in a column by the named method. */
function fillVec(c: number[], method: string, fill: number): number[] {
  const out = c.slice(); const n = out.length;
  const prevFill = () => { let last = NaN; for (let i = 0; i < n; i++) { if (Number.isNaN(out[i])) out[i] = last; else last = out[i]; } };
  const nextFill = () => { let nxt = NaN; for (let i = n - 1; i >= 0; i--) { if (Number.isNaN(out[i])) out[i] = nxt; else nxt = out[i]; } };
  if (method === 'previous') prevFill();
  else if (method === 'next') nextFill();
  else if (method === 'nearest') { prevFill(); const back = c.slice(); let nxt = NaN; for (let i = n - 1; i >= 0; i--) { if (Number.isNaN(back[i])) back[i] = nxt; else nxt = back[i]; } for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) out[i] = back[i]; }
  else if (method === 'linear') { for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) { let lo = i - 1; while (lo >= 0 && Number.isNaN(out[lo])) lo--; let hi = i + 1; while (hi < n && Number.isNaN(c[hi])) hi++; if (lo >= 0 && hi < n) out[i] = out[lo] + (c[hi] - out[lo]) * (i - lo) / (hi - lo); } }
  else for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) out[i] = fill; // constant
  return out;
}
/** Polynomial long division u/v → [quotient, remainder] (high→low coefficients). */
function polyDivide(u: number[], v: number[]): [number[], number[]] {
  v = v.slice(); while (v.length > 1 && v[0] === 0) v = v.slice(1);   // drop leading-zero coeffs
  const r = u.slice(); const nq = u.length - v.length + 1;
  if (nq <= 0) return [[0], u.slice()];
  const q = new Array(nq).fill(0);
  for (let k = 0; k < nq; k++) { const c = r[k] / v[0]; q[k] = c; for (let j = 0; j < v.length; j++) r[k + j] -= c * v[j]; }
  return [q, r.slice(nq)];
}
/** Solve the Sylvester equation A X + X B = C via the Kronecker system. */
function sylvesterSolve(A: Mat, B: Mat, C: Mat): Mat {
  const p = A.rows, q = B.cols, pq = p * q;
  const K = zeros(pq, pq); const rhs = zeros(pq, 1);
  for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) {
    const row = i + k * p; rhs.data[row] = C.data[i + k * p];
    for (let ii = 0; ii < p; ii++) K.data[row + (ii + k * p) * pq] += A.data[i + ii * p];      // (I⊗A)
    for (let kk = 0; kk < q; kk++) K.data[row + (i + kk * p) * pq] += B.data[kk + k * q];       // (Bᵀ⊗I)
  }
  const x = mldivide(K, rhs); const X = zeros(p, q);
  for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) X.data[i + k * p] = x.data[i + k * p];
  return X;
}
/** Map/dictionary keys in MATLAB's sorted order (ascending numbers / lexicographic chars). */
function mapKeysSorted(mp: MapV | DictV): (string | number)[] { const ks = [...mp.store.keys()]; return mp.keyKind === 'char' ? (ks as string[]).sort() : (ks as number[]).sort((a, b) => a - b); }
/** Construct a dictionary (value type) from () / (keys,values). */
function buildDict(a: Value[]): DictV {
  if (a.length < 2) return makeDict('char', 'unconfigured');
  const expand = (v: Value): Value[] => (isCell(v) ? v.items : isStr(v) ? v.items.map((s) => str(s)) : (isMat(v) && !(v as Mat).isChar && numel(v) > 1) ? toArray(v as Mat).map((x) => scalar(x) as Value) : [v]);
  const keyList = expand(a[0]); const valList = expand(a[1]);
  const keyKind: 'char' | 'double' = isStr(keyList[0]) || (isMat(keyList[0]) && (keyList[0] as Mat).isChar) ? 'char' : 'double';
  const d = makeDict(keyKind, 'any');
  for (let i = 0; i < keyList.length; i++) d.store.set(mapNormKey(d, keyList[i]), valList[i] ?? valList[valList.length - 1] ?? scalar(0));
  return d;
}
/** Construct a containers.Map from constructor args: (), (keys,values), or name/value options. */
function buildMap(a: Value[]): MapV {
  const isText = (x: Value) => isStr(x) || (isMat(x) && (x as Mat).isChar);
  // option form: containers.Map('KeyType','char','ValueType','any', ...)
  const isOpt = a.length >= 2 && isText(a[0]) && ['keytype', 'valuetype', 'uniformvalues'].includes(asString(a[0]).toLowerCase());
  if (a.length === 0 || isOpt) {
    let kt = 'char', vt = 'any';
    for (let i = 0; i + 1 < a.length; i += 2) { const key = asString(a[i]).toLowerCase(); if (key === 'keytype') kt = asString(a[i + 1]); else if (key === 'valuetype') vt = asString(a[i + 1]); }
    return makeMap(kt === 'char' ? 'char' : 'double', vt);
  }
  // (keySet, valueSet): keys/values may be a cell or a single key/value
  const keyList = isCell(a[0]) ? a[0].items : [a[0]];
  const valList = a.length >= 2 ? (isCell(a[1]) ? a[1].items : [a[1]]) : [];
  const keyKind: 'char' | 'double' = isText(keyList[0]) ? 'char' : 'double';
  const mp = makeMap(keyKind, 'any');
  for (let i = 0; i < keyList.length; i++) mp.store.set(mapNormKey(mp, keyList[i]), valList[i] ?? scalar(0));
  return mp;
}
function transMat(M: Mat): Mat { const T = zeros(M.cols, M.rows); for (let i = 0; i < M.rows; i++) for (let j = 0; j < M.cols; j++) T.data[j + i * M.cols] = M.data[i + j * M.rows]; return T; }
function negMat(M: Mat): Mat { const N = zeros(M.rows, M.cols); for (let i = 0; i < M.data.length; i++) N.data[i] = -M.data[i]; return N; }
/** Discrete Lyapunov A·X·Aᵀ − X + Q = 0  ⇔  (A⊗A − I)·vec(X) = −vec(Q). */
function dlyapSolve(A: Mat, Q: Mat): Mat {
  const n = A.rows, n2 = n * n; const K = zeros(n2, n2); const rhs = zeros(n2, 1);
  for (let k = 0; k < n; k++) for (let i = 0; i < n; i++) {
    const row = i + k * n; rhs.data[row] = -Q.data[i + k * n];
    for (let q = 0; q < n; q++) for (let p = 0; p < n; p++) K.data[row + (p + q * n) * n2] += A.data[i + p * n] * A.data[k + q * n];
    K.data[row + row * n2] -= 1;
  }
  const x = mldivide(K, rhs); const X = zeros(n, n); for (let i = 0; i < n2; i++) X.data[i] = x.data[i]; return X;
}

// ── Linear programming: two-phase primal simplex (Bland's rule) on standard form
//    min cᵀx  s.t.  A x = b, x ≥ 0  (returns status 1 optimal, −2 infeasible, −3 unbounded). ──
function simplexTwoPhase(A: number[][], b: number[], c: number[]): { x: number[]; status: number } {
  const mm = A.length; const N = c.length;
  if (mm === 0) { const x = new Array(N).fill(0); return c.every((v) => v > -1e-12) ? { x, status: 1 } : { x, status: -3 }; }
  const total = N + mm;
  const rows: number[][] = A.map((r, i) => { const sgn = b[i] < 0 ? -1 : 1; const row = r.map((v) => sgn * v); for (let a = 0; a < mm; a++) row.push(a === i ? 1 : 0); return row; });
  const rhs = b.map((v) => Math.abs(v));
  const basis = Array.from({ length: mm }, (_, i) => N + i);
  const run = (cost: number[]) => {
    for (let iter = 0; iter < 8000; iter++) {
      const cB = basis.map((bi) => cost[bi]);
      let enter = -1;
      for (let j = 0; j < total; j++) { let rc = cost[j]; for (let i = 0; i < mm; i++) rc -= cB[i] * rows[i][j]; if (rc < -1e-9) { enter = j; break; } }
      if (enter < 0) return 'ok';
      let leave = -1, best = Infinity;
      for (let i = 0; i < mm; i++) if (rows[i][enter] > 1e-9) { const ratio = rhs[i] / rows[i][enter]; if (ratio < best - 1e-12 || (Math.abs(ratio - best) < 1e-12 && (leave < 0 || basis[i] < basis[leave]))) { best = ratio; leave = i; } }
      if (leave < 0) return 'unbounded';
      const piv = rows[leave][enter];
      for (let j = 0; j < total; j++) rows[leave][j] /= piv; rhs[leave] /= piv;
      for (let i = 0; i < mm; i++) { if (i === leave) continue; const f = rows[i][enter]; if (f !== 0) { for (let j = 0; j < total; j++) rows[i][j] -= f * rows[leave][j]; rhs[i] -= f * rhs[leave]; } }
      basis[leave] = enter;
    }
    return 'ok';
  };
  const c1 = new Array(total).fill(0); for (let a = 0; a < mm; a++) c1[N + a] = 1; run(c1);
  let p1 = 0; for (let i = 0; i < mm; i++) p1 += c1[basis[i]] * rhs[i];
  if (p1 > 1e-6) return { x: new Array(N).fill(0), status: -2 };
  for (let i = 0; i < mm; i++) if (basis[i] >= N) { let pc = -1; for (let j = 0; j < N; j++) if (Math.abs(rows[i][j]) > 1e-9) { pc = j; break; } if (pc >= 0) { const piv = rows[i][pc]; for (let j = 0; j < total; j++) rows[i][j] /= piv; rhs[i] /= piv; for (let k = 0; k < mm; k++) { if (k === i) continue; const f = rows[k][pc]; if (f !== 0) { for (let j = 0; j < total; j++) rows[k][j] -= f * rows[i][j]; rhs[k] -= f * rhs[i]; } } basis[i] = pc; } }
  const c2 = new Array(total).fill(0); for (let j = 0; j < N; j++) c2[j] = c[j]; for (let a = 0; a < mm; a++) c2[N + a] = 1e9;
  if (run(c2) === 'unbounded') return { x: new Array(N).fill(0), status: -3 };
  const x = new Array(N).fill(0); for (let i = 0; i < mm; i++) if (basis[i] < N) x[basis[i]] = rhs[i];
  return { x, status: 1 };
}
/** linprog: min fᵀx  s.t. A·x ≤ b, Aeq·x = beq, lb ≤ x ≤ ub (default bounds ±∞). */
function linprogSolve(f: number[], Aub: number[][] | null, bub: number[] | null, Aeq: number[][] | null, beq: number[] | null, lb: number[] | null, ub: number[] | null): { x: number[]; fval: number; status: number } {
  const n = f.length; const lo = (j: number) => (lb && lb[j] !== undefined ? lb[j] : -Infinity); const hi = (j: number) => (ub && ub[j] !== undefined ? ub[j] : Infinity);
  const contrib: { v: number; c: number }[][] = []; const shift: number[] = []; let nv = 0; const ubRows: { v: number; lim: number }[] = [];
  for (let j = 0; j < n; j++) {
    const L = lo(j), H = hi(j);
    if (L > -Infinity) { contrib[j] = [{ v: nv, c: 1 }]; shift[j] = L; if (H < Infinity) ubRows.push({ v: nv, lim: H - L }); nv++; }
    else if (H < Infinity) { contrib[j] = [{ v: nv, c: -1 }]; shift[j] = H; nv++; }
    else { contrib[j] = [{ v: nv, c: 1 }, { v: nv + 1, c: -1 }]; shift[j] = 0; nv += 2; }
  }
  const ineq: { row: number[]; rhs: number }[] = [];
  (Aub ?? []).forEach((rowJ, i) => { const row = new Array(nv).fill(0); let rc = 0; for (let j = 0; j < n; j++) { const aij = rowJ[j] || 0; rc += aij * shift[j]; for (const ct of contrib[j]) row[ct.v] += aij * ct.c; } ineq.push({ row, rhs: (bub![i]) - rc }); });
  ubRows.forEach((u) => { const row = new Array(nv).fill(0); row[u.v] = 1; ineq.push({ row, rhs: u.lim }); });
  const eqs: { row: number[]; rhs: number }[] = [];
  (Aeq ?? []).forEach((rowJ, i) => { const row = new Array(nv).fill(0); let rc = 0; for (let j = 0; j < n; j++) { const aij = rowJ[j] || 0; rc += aij * shift[j]; for (const ct of contrib[j]) row[ct.v] += aij * ct.c; } eqs.push({ row, rhs: (beq![i]) - rc }); });
  const nslack = ineq.length; const total = nv + nslack; const A: number[][] = []; const b: number[] = [];
  ineq.forEach((q, si) => { const row = new Array(total).fill(0); for (let k = 0; k < nv; k++) row[k] = q.row[k]; row[nv + si] = 1; A.push(row); b.push(q.rhs); });
  eqs.forEach((q) => { const row = new Array(total).fill(0); for (let k = 0; k < nv; k++) row[k] = q.row[k]; A.push(row); b.push(q.rhs); });
  const c = new Array(total).fill(0); for (let j = 0; j < n; j++) for (const ct of contrib[j]) c[ct.v] += f[j] * ct.c;
  const sol = simplexTwoPhase(A, b, c);
  if (sol.status < 0) return { x: new Array(n).fill(NaN), fval: NaN, status: sol.status };
  const x = new Array(n).fill(0); for (let j = 0; j < n; j++) { let v = shift[j]; for (const ct of contrib[j]) v += ct.c * (sol.x[ct.v] || 0); x[j] = v; }
  let fval = 0; for (let j = 0; j < n; j++) fval += f[j] * x[j];
  return { x, fval, status: 1 };
}
/** intlinprog: branch & bound over linprogSolve on the integer-constrained variables. */
function intlinprogSolve(f: number[], intcon: number[], Aub: number[][] | null, bub: number[] | null, Aeq: number[][] | null, beq: number[] | null, lb: number[] | null, ub: number[] | null): { x: number[]; fval: number; status: number } {
  const n = f.length; const baseLb = (lb ?? new Array(n).fill(-Infinity)).slice(); const baseUb = (ub ?? new Array(n).fill(Infinity)).slice();
  let best: number[] | null = null; let bestVal = Infinity; let guard = 0;
  const stack: { lb: number[]; ub: number[] }[] = [{ lb: baseLb, ub: baseUb }];
  while (stack.length && guard++ < 4000) {
    const node = stack.pop()!; const r = linprogSolve(f, Aub, bub, Aeq, beq, node.lb, node.ub);
    if (r.status < 0 || r.fval >= bestVal - 1e-9) continue;
    let frac = -1; for (const j of intcon) if (Math.abs(r.x[j] - Math.round(r.x[j])) > 1e-6) { frac = j; break; }
    if (frac < 0) { if (r.fval < bestVal) { bestVal = r.fval; best = r.x.map((v, j) => (intcon.includes(j) ? Math.round(v) : v)); } continue; }
    const fv = r.x[frac];
    const ubL = node.ub.slice(); ubL[frac] = Math.floor(fv); stack.push({ lb: node.lb.slice(), ub: ubL });
    const lbH = node.lb.slice(); lbH[frac] = Math.ceil(fv); stack.push({ lb: lbH, ub: node.ub.slice() });
  }
  return best ? { x: best, fval: bestVal, status: 1 } : { x: new Array(n).fill(NaN), fval: NaN, status: -2 };
}
/** Levenberg–Marquardt least-squares: minimize ‖resid(x)‖². */
async function levMar(resid: (x: number[]) => Promise<number[]>, x0: number[]): Promise<number[]> {
  const dot = (a: number[], b: number[]) => a.reduce((s, v, i) => s + v * b[i], 0);
  let x = x0.slice(); let lambda = 1e-3; let r = await resid(x); let cost = dot(r, r); const n = x.length;
  for (let it = 0; it < 200; it++) {
    const mres = r.length; const J: number[][] = Array.from({ length: mres }, () => new Array(n).fill(0));
    for (let j = 0; j < n; j++) { const h = 1e-7 * Math.max(1, Math.abs(x[j])); const xj = x.slice(); xj[j] += h; const rj = await resid(xj); for (let i = 0; i < mres; i++) J[i][j] = (rj[i] - r[i]) / h; }
    const JtJ = zeros(n, n); const Jtr = new Array(n).fill(0);
    for (let i = 0; i < mres; i++) for (let a = 0; a < n; a++) { Jtr[a] += J[i][a] * r[i]; for (let bb = 0; bb < n; bb++) JtJ.data[a + bb * n] += J[i][a] * J[i][bb]; }
    let solved = false, xnew = x, rnew = r, costnew = cost;
    for (let tries = 0; tries < 12; tries++) {
      const Aug = zeros(n, n); for (let a = 0; a < n; a++) for (let bb = 0; bb < n; bb++) Aug.data[a + bb * n] = JtJ.data[a + bb * n] + (a === bb ? lambda * (JtJ.data[a + a * n] || 1) + 1e-12 : 0);
      const dx = mldivide(Aug, colVec(Jtr.map((v) => -v)));
      xnew = x.map((v, i) => v + dx.data[i]); rnew = await resid(xnew); costnew = dot(rnew, rnew);
      if (costnew < cost) { lambda = Math.max(lambda * 0.4, 1e-12); solved = true; break; } else lambda = Math.min(lambda * 4, 1e12);
    }
    if (!solved) break; const improve = cost - costnew; x = xnew; r = rnew; cost = costnew; if (improve < 1e-14) break;
  }
  return x;
}
/** Nelder–Mead for an async scalar objective (used by fmincon's penalty wrapper). */
async function nmMin(F: (x: number[]) => Promise<number>, x0: number[], maxIter: number): Promise<number[]> {
  const n = x0.length; if (n === 0) return x0.slice();
  const simplex = [x0.slice()]; for (let i = 0; i < n; i++) { const p = x0.slice(); p[i] += (p[i] !== 0 ? 0.05 * p[i] : 0.00025); simplex.push(p); }
  let fv = await Promise.all(simplex.map(F));
  const add = (p: number[], q: number[], s: number) => p.map((v, i) => v + s * q[i]); const sub = (p: number[], q: number[]) => p.map((v, i) => v - q[i]);
  for (let iter = 0; iter < maxIter; iter++) {
    const ord = fv.map((_, i) => i).sort((i, j) => fv[i] - fv[j]); const s2 = ord.map((i) => simplex[i]); const f2 = ord.map((i) => fv[i]);
    for (let i = 0; i <= n; i++) { simplex[i] = s2[i]; fv[i] = f2[i]; }
    if (Math.abs(fv[n] - fv[0]) < 1e-12) break;
    const cen = new Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) cen[j] += simplex[i][j] / n;
    const xr = add(cen, sub(cen, simplex[n]), 1); const fr = await F(xr);
    if (fr < fv[0]) { const xe = add(cen, sub(cen, simplex[n]), 2); const fe = await F(xe); if (fe < fr) { simplex[n] = xe; fv[n] = fe; } else { simplex[n] = xr; fv[n] = fr; } }
    else if (fr < fv[n - 1]) { simplex[n] = xr; fv[n] = fr; }
    else { const xc = add(cen, sub(simplex[n], cen), 0.5); const fc = await F(xc); if (fc < fv[n]) { simplex[n] = xc; fv[n] = fc; } else { for (let i = 1; i <= n; i++) { simplex[i] = add(simplex[0], sub(simplex[i], simplex[0]), 0.5); fv[i] = await F(simplex[i]); } } }
  }
  let bi = 0; for (let i = 1; i <= n; i++) if (fv[i] < fv[bi]) bi = i; return simplex[bi];
}
/** fmincon via a quadratic-penalty wrapper around Nelder–Mead (teaching-grade). */
async function fminconSolve(F: (x: number[]) => Promise<number>, x0: number[], Aub: number[][] | null, bub: number[] | null, Aeq: number[][] | null, beq: number[] | null, lb: number[] | null, ub: number[] | null, nlc: ((x: number[]) => Promise<[number[], number[]]>) | null): Promise<number[]> {
  let mu = 10; let x = x0.slice();
  const pen = async (xx: number[]) => {
    let p = 0;
    if (Aub) for (let i = 0; i < Aub.length; i++) { let s = -(bub![i]); for (let j = 0; j < xx.length; j++) s += Aub[i][j] * xx[j]; if (s > 0) p += s * s; }
    if (Aeq) for (let i = 0; i < Aeq.length; i++) { let s = -(beq![i]); for (let j = 0; j < xx.length; j++) s += Aeq[i][j] * xx[j]; p += s * s; }
    for (let j = 0; j < xx.length; j++) { if (lb && xx[j] < lb[j]) p += (lb[j] - xx[j]) ** 2; if (ub && xx[j] > ub[j]) p += (xx[j] - ub[j]) ** 2; }
    if (nlc) { const [c, ceq] = await nlc(xx); for (const ci of c) if (ci > 0) p += ci * ci; for (const e of ceq) p += e * e; }
    return p;
  };
  for (let outer = 0; outer < 14; outer++) { const obj = async (xx: number[]) => (await F(xx)) + mu * (await pen(xx)); x = await nmMin(obj, x, 200 * Math.max(1, x.length)); mu *= 8; }
  for (let j = 0; j < x.length; j++) { if (lb && x[j] < lb[j]) x[j] = lb[j]; if (ub && x[j] > ub[j]) x[j] = ub[j]; }
  return x;
}
/** Unconstrained minimization: BFGS with backtracking line search (finite-diff gradient). */
async function bfgsMin(F: (x: number[]) => Promise<number>, x0: number[]): Promise<number[]> {
  const n = x0.length; if (n === 0) return x0.slice();
  let x = x0.slice();
  const grad = async (xx: number[], f0: number) => { const g: number[] = []; for (let j = 0; j < n; j++) { const h = 1e-7 * Math.max(1, Math.abs(xx[j])); const xp = xx.slice(); xp[j] += h; g.push(((await F(xp)) - f0) / h); } return g; };
  const H: number[][] = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let fx = await F(x); let g = await grad(x, fx);
  for (let it = 0; it < 300; it++) {
    let p = g.map((_, i) => -H[i].reduce((s, hij, j) => s + hij * g[j], 0));
    let gp = g.reduce((s, gi, i) => s + gi * p[i], 0);
    if (gp >= 0) { for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) H[i][j] = i === j ? 1 : 0; p = g.map((gi) => -gi); gp = -g.reduce((s, gi) => s + gi * gi, 0); }
    let alpha = 1, xn = x, fn = fx;
    for (let ls = 0; ls < 50; ls++) { xn = x.map((xi, i) => xi + alpha * p[i]); fn = await F(xn); if (Number.isFinite(fn) && fn <= fx + 1e-4 * alpha * gp) break; alpha *= 0.5; }
    if (alpha < 1e-14) break;
    const gn = await grad(xn, fn); const sVec = xn.map((xi, i) => xi - x[i]); const yVec = gn.map((gi, i) => gi - g[i]);
    const sy = sVec.reduce((s, si, i) => s + si * yVec[i], 0);
    if (sy > 1e-12) { const Hy = yVec.map((_, i) => H[i].reduce((s, hij, j) => s + hij * yVec[j], 0)); const yHy = yVec.reduce((s, yi, i) => s + yi * Hy[i], 0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) H[i][j] += ((sy + yHy) / (sy * sy)) * sVec[i] * sVec[j] - (Hy[i] * sVec[j] + sVec[i] * Hy[j]) / sy; }
    const step = Math.hypot(...sVec); x = xn; g = gn; fx = fn;
    if (Math.hypot(...g) < 1e-9 || step < 1e-13) break;
  }
  return x;
}
/** Convex QP: minimize ½xᵀHx + fᵀx s.t. A·x≤b, Aeq·x=beq, lb≤x≤ub (penalty + BFGS). */
async function quadprogSolve(H: number[][], f: number[], Aub: number[][] | null, bub: number[] | null, Aeq: number[][] | null, beq: number[] | null, lb: number[] | null, ub: number[] | null, x0: number[] | null): Promise<number[]> {
  const n = f.length;
  const Q = (x: number[]) => { let v = 0; for (let i = 0; i < n; i++) { v += f[i] * x[i]; for (let j = 0; j < n; j++) v += 0.5 * H[i][j] * x[i] * x[j]; } return v; };
  const pen = (x: number[]) => { let p = 0; if (Aub) for (let i = 0; i < Aub.length; i++) { let s = -(bub![i]); for (let j = 0; j < n; j++) s += Aub[i][j] * x[j]; if (s > 0) p += s * s; } if (Aeq) for (let i = 0; i < Aeq.length; i++) { let s = -(beq![i]); for (let j = 0; j < n; j++) s += Aeq[i][j] * x[j]; p += s * s; } for (let j = 0; j < n; j++) { if (lb && x[j] < lb[j]) p += (lb[j] - x[j]) ** 2; if (ub && x[j] > ub[j]) p += (x[j] - ub[j]) ** 2; } return p; };
  let x = x0 ? x0.slice() : new Array(n).fill(0); let mu = 1;
  for (let outer = 0; outer < 18; outer++) { const obj = async (xx: number[]) => Q(xx) + mu * pen(xx); x = await bfgsMin(obj, x); mu *= 10; }
  for (let j = 0; j < n; j++) { if (lb && x[j] < lb[j]) x[j] = lb[j]; if (ub && x[j] > ub[j]) x[j] = ub[j]; }
  return x;
}
const optLinPen = (x: number[], Aub: number[][] | null, bub: number[] | null, Aeq: number[][] | null, beq: number[] | null): number => { let p = 0; if (Aub) for (let i = 0; i < Aub.length; i++) { let s = -(bub![i]); for (let j = 0; j < x.length; j++) s += Aub[i][j] * x[j]; if (s > 0) p += 1e6 * s * s; } if (Aeq) for (let i = 0; i < Aeq.length; i++) { let s = -(beq![i]); for (let j = 0; j < x.length; j++) s += Aeq[i][j] * x[j]; p += 1e6 * s * s; } return p; };
/** Genetic algorithm (real-coded, tournament selection, uniform crossover, box bounds). */
async function gaSolve(F: (x: number[]) => Promise<number>, nv: number, lb: number[] | null, ub: number[] | null): Promise<number[]> {
  const lo = lb ?? new Array(nv).fill(-10), hi = ub ?? new Array(nv).fill(10);
  const pop = Math.min(200, 20 + 10 * nv); const gens = 150;
  let P = Array.from({ length: pop }, () => lo.map((l, i) => l + rngNext() * (hi[i] - l)));
  let fit = await Promise.all(P.map(F));
  for (let gI = 0; gI < gens; gI++) {
    const ord = fit.map((_, i) => i).sort((a, b) => fit[a] - fit[b]); P = ord.map((i) => P[i]); fit = ord.map((i) => fit[i]);
    const next: number[][] = [P[0].slice(), P[1].slice()];
    const sel = () => { const a = Math.floor(rngNext() * pop), b = Math.floor(rngNext() * pop); return fit[a] < fit[b] ? P[a] : P[b]; };
    while (next.length < pop) { const p1 = sel(), p2 = sel(); const c = p1.map((v, i) => (rngNext() < 0.5 ? v : p2[i])); for (let i = 0; i < nv; i++) if (rngNext() < 0.12) c[i] = lo[i] + rngNext() * (hi[i] - lo[i]); next.push(c); }
    P = next; fit = await Promise.all(P.map(F));
  }
  let bi = 0; for (let i = 1; i < pop; i++) if (fit[i] < fit[bi]) bi = i; return P[bi];
}
/** Particle swarm optimization (box bounds). */
async function psoSolve(F: (x: number[]) => Promise<number>, nv: number, lb: number[] | null, ub: number[] | null): Promise<number[]> {
  const lo = lb ?? new Array(nv).fill(-10), hi = ub ?? new Array(nv).fill(10);
  const np = Math.min(120, 10 + 10 * nv); const iters = 200; const w = 0.72, c1 = 1.49, c2 = 1.49;
  const X = Array.from({ length: np }, () => lo.map((l, i) => l + rngNext() * (hi[i] - l)));
  const Vel = Array.from({ length: np }, () => lo.map((l, i) => (rngNext() - 0.5) * (hi[i] - l)));
  const pbest = X.map((x) => x.slice()); const pf = await Promise.all(X.map(F));
  let gi = 0; for (let i = 1; i < np; i++) if (pf[i] < pf[gi]) gi = i; let gbest = pbest[gi].slice();
  for (let it = 0; it < iters; it++) for (let i = 0; i < np; i++) { for (let d = 0; d < nv; d++) { Vel[i][d] = w * Vel[i][d] + c1 * rngNext() * (pbest[i][d] - X[i][d]) + c2 * rngNext() * (gbest[d] - X[i][d]); X[i][d] = Math.max(lo[d], Math.min(hi[d], X[i][d] + Vel[i][d])); } const fi = await F(X[i]); if (fi < pf[i]) { pf[i] = fi; pbest[i] = X[i].slice(); if (fi < pf[gi]) { gi = i; gbest = X[i].slice(); } } }
  return gbest;
}
/** Simulated annealing with bounds. */
async function saSolve(F: (x: number[]) => Promise<number>, x0: number[], lb: number[] | null, ub: number[] | null): Promise<number[]> {
  const n = x0.length; const lo = lb ?? new Array(n).fill(-Infinity), hi = ub ?? new Array(n).fill(Infinity);
  const scale = x0.map((v, i) => (Number.isFinite(lo[i]) && Number.isFinite(hi[i]) ? (hi[i] - lo[i]) / 8 : Math.max(1, Math.abs(v))));
  let x = x0.slice(); let fx = await F(x); let best = x.slice(), fbest = fx;
  for (let it = 0; it < 4000; it++) {
    const T = Math.exp(-it / 600);
    const xn = x.map((v, i) => { let nv = v + (rngNext() - 0.5) * scale[i] * (0.2 + T); if (Number.isFinite(lo[i])) nv = Math.max(lo[i], nv); if (Number.isFinite(hi[i])) nv = Math.min(hi[i], nv); return nv; });
    const fn = await F(xn); const d = fn - fx;
    if (d < 0 || rngNext() < Math.exp(-d / (T + 1e-12))) { x = xn; fx = fn; if (fx < fbest) { fbest = fx; best = x.slice(); } }
  }
  return best;
}
/** Generalized pattern (direct) search with bounds. */
async function patternSearchSolve(F: (x: number[]) => Promise<number>, x0: number[], lb: number[] | null, ub: number[] | null): Promise<number[]> {
  const n = x0.length; const lo = lb ?? new Array(n).fill(-Infinity), hi = ub ?? new Array(n).fill(Infinity);
  const clip = (v: number[]) => v.map((vi, i) => { let r = vi; if (Number.isFinite(lo[i])) r = Math.max(lo[i], r); if (Number.isFinite(hi[i])) r = Math.min(hi[i], r); return r; });
  let x = clip(x0.slice()); let fx = await F(x); let mesh = 1;
  for (let it = 0; it < 2000 && mesh > 1e-11; it++) {
    let improved = false;
    for (let d = 0; d < n && !improved; d++) for (const s of [1, -1]) { const xn = clip(x.map((v, i) => (i === d ? v + s * mesh : v))); const fn = await F(xn); if (fn < fx - 1e-15) { x = xn; fx = fn; improved = true; break; } }
    mesh = improved ? mesh * 2 : mesh * 0.5;
  }
  return x;
}
/** Invert a monotone-increasing function on [lo,hi] to value p (bisection). */
function invMonotone(f: (x: number) => number, p: number, lo: number, hi: number): number {
  for (let it = 0; it < 200; it++) { const mid = (lo + hi) / 2; if (f(mid) < p) lo = mid; else hi = mid; if (hi - lo < 1e-14 * (1 + Math.abs(hi))) break; }
  return (lo + hi) / 2;
}
/** The 8×8 Rosser symmetric eigenvalue test matrix. */
function rosserMat(): Mat {
  const rows = [
    [611, 196, -192, 407, -8, -52, -49, 29],
    [196, 899, 113, -192, -71, -43, -8, -44],
    [-192, 113, 899, 196, 61, 49, 8, 52],
    [407, -192, 196, 611, 8, 44, 59, -23],
    [-8, -71, 61, 8, 411, -599, 208, 208],
    [-52, -43, 49, 44, -599, 411, 208, 208],
    [-49, -8, 8, 59, 208, 208, 99, -911],
    [29, -44, 52, -23, 208, 208, -911, 99],
  ];
  return fromRows(rows);
}

function gammainc(x: number, a: number): number {
  if (x < 0 || a <= 0) return NaN; if (x === 0) return 0;
  const gln = logGamma(a);
  if (x < a + 1) { let ap = a, sum = 1 / a, del = sum; for (let i = 0; i < 200; i++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-14) break; } return sum * Math.exp(-x + a * Math.log(x) - gln); }
  let b = x + 1 - a, c = 1e300, d = 1 / b, h = d;
  for (let i = 1; i < 200; i++) { const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300; c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
  return 1 - Math.exp(-x + a * Math.log(x) - gln) * h;
}
/** Regularised incomplete beta I_x(a,b) (continued fraction). */
function betainc(x: number, a: number, b: number): number {
  if (x <= 0) return 0; if (x >= 1) return 1;
  const bt = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  const cf = (xx: number, aa: number, bb: number) => {
    let c = 1, d = 1 - (aa + bb) * xx / (aa + 1); if (Math.abs(d) < 1e-300) d = 1e-300; d = 1 / d; let h = d;
    for (let mI = 1; mI < 200; mI++) { const m2 = 2 * mI; let aa2 = mI * (bb - mI) * xx / ((aa + m2 - 1) * (aa + m2)); d = 1 + aa2 * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa2 / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; h *= d * c; aa2 = -(aa + mI) * (aa + bb + mI) * xx / ((aa + m2) * (aa + m2 + 1)); d = 1 + aa2 * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa2 / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
    return h;
  };
  return x < (a + 1) / (a + b + 2) ? bt * cf(x, a, b) / a : 1 - bt * cf(1 - x, b, a) / b;
}

// ── String helper ─────────────────────────────────────────────────────────
function getStr(v: Value): string | null { if (isMat(v) && v.isChar) return asString(v); if (isMat(v) && numel(v) === 0) return ''; return null; }
function truthyArg(v: Value): boolean { if (isMat(v) && v.isChar) { const s = asString(v).toLowerCase(); return s !== 'false' && s !== '0' && s !== ''; } return isMat(v) ? v.data[0] !== 0 : true; }

// ── Set / conversion helpers ──────────────────────────────────────────────
function setUniq(arr: number[]): number[] { const s = new Set<number>(); const o: number[] = []; for (const x of arr) if (!s.has(x)) { s.add(x); o.push(x); } return o.sort((a, b) => a - b); }
/** Characteristic polynomial coefficients (monic, high→low) for poly(matrix). */
function charpolyC(A: Mat): number[] {
  const n = A.rows; const c = [1]; let M = zeros(n, n); for (let i = 0; i < n; i++) M.data[i + i * n] = 1;
  for (let k = 1; k <= n; k++) { const AM = matmul(A, M); let tr = 0; for (let i = 0; i < n; i++) tr += AM.data[i + i * n]; const ck = -tr / k; c.push(ck); M = mat(n, n, Float64Array.from(AM.data)); for (let i = 0; i < n; i++) M.data[i + i * n] += ck; }
  return c;
}

// ── Signal / preprocessing helpers ────────────────────────────────────────
function conv2Full(A: Mat, B: Mat): Mat {
  const r = A.rows + B.rows - 1, c = A.cols + B.cols - 1; const o = zeros(r, c);
  for (let ac = 0; ac < A.cols; ac++) for (let ar = 0; ar < A.rows; ar++) { const av = A.data[ar + ac * A.rows]; if (av === 0) continue; for (let bc = 0; bc < B.cols; bc++) for (let br = 0; br < B.rows; br++) o.data[(ar + br) + (ac + bc) * r] += av * B.data[br + bc * B.rows]; }
  return o;
}
function conv2Shape(A: Mat, B: Mat, shape: string): Mat {
  const full = conv2Full(A, B);
  if (shape === 'full') return full;
  if (shape === 'valid') { const r = Math.max(0, A.rows - B.rows + 1), c = Math.max(0, A.cols - B.cols + 1); const o = zeros(r, c); const sr = B.rows - 1, sc = B.cols - 1; for (let cc = 0; cc < c; cc++) for (let rr = 0; rr < r; rr++) o.data[rr + cc * r] = full.data[(rr + sr) + (cc + sc) * full.rows]; return o; }
  // 'same' — centred A-sized window
  const sr = Math.floor(B.rows / 2), sc = Math.floor(B.cols / 2); const o = zeros(A.rows, A.cols);
  for (let cc = 0; cc < A.cols; cc++) for (let rr = 0; rr < A.rows; rr++) o.data[rr + cc * A.rows] = full.data[(rr + sr) + (cc + sc) * full.rows];
  return o;
}
function xcorrFn(x: number[], y: number[]): number[] {
  const N = Math.max(x.length, y.length); const xp = [...x, ...new Array(N - x.length).fill(0)]; const yp = [...y, ...new Array(N - y.length).fill(0)];
  const out: number[] = []; for (let lag = -(N - 1); lag <= N - 1; lag++) { let s = 0; for (let n = 0; n < N; n++) { const mm = n - lag; if (mm >= 0 && mm < N) s += xp[n] * yp[mm]; } out.push(s); } return out;
}
function detrendVec(c: number[], type: string): number[] {
  const n = c.length; if (type === 'constant' || type === '0') { const mu = c.reduce((s, x) => s + x, 0) / n; return c.map((x) => x - mu); }
  let sx = 0, sy = 0, sxx = 0, sxy = 0; for (let i = 0; i < n; i++) { sx += i; sy += c[i]; sxx += i * i; sxy += i * c[i]; }
  const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx || 1); const intercept = (sy - slope * sx) / n;
  return c.map((x, i) => x - (slope * i + intercept));
}
/** Apply a vector→vector transform to a vector, or per column of a matrix. */
function colMap(A: Mat, f: (col: number[]) => number[]): Mat {
  if (A.rows === 1 || A.cols === 1) { const r = f(toArray(A)); return A.cols === 1 ? colVec(r) : rowVec(r); }
  const o = zeros(A.rows, A.cols); for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); const rr = f(col); for (let r = 0; r < A.rows; r++) o.data[r + c * A.rows] = rr[r]; } return o;
}
function movVec(v: number[], k: number, median: boolean): number[] {
  const n = v.length; const before = Math.floor((k - 1) / 2); const out: number[] = [];
  for (let i = 0; i < n; i++) { const w = v.slice(Math.max(0, i - before), Math.min(n, i - before + k)); if (median) { const s = [...w].sort((a, b) => a - b); out.push(s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2); } else out.push(w.reduce((a, b) => a + b, 0) / w.length); }
  return out;
}
function smooth2(A: Mat, k: number): Mat {
  const b = Math.floor((k - 1) / 2); const o = zeros(A.rows, A.cols);
  for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { let s = 0, cnt = 0; for (let dr = -b; dr <= k - 1 - b; dr++) for (let dc = -b; dc <= k - 1 - b; dc++) { const rr = r + dr, cc = c + dc; if (rr >= 0 && rr < A.rows && cc >= 0 && cc < A.cols) { s += A.data[rr + cc * A.rows]; cnt++; } } o.data[r + c * A.rows] = s / cnt; }
  return o;
}
function normalizeVec(c: number[], method: string): number[] {
  const n = c.length; const mu = c.reduce((s, x) => s + x, 0) / n;
  if (method === 'center') return c.map((x) => x - mu);
  if (method === 'range') { const mn = Math.min(...c), mx = Math.max(...c); const d = mx - mn || 1; return c.map((x) => (x - mn) / d); }
  if (method === 'norm') { const nr = Math.hypot(...c) || 1; return c.map((x) => x / nr); }
  if (method === 'scale') { const sd = Math.sqrt(c.reduce((s, x) => s + (x - mu) ** 2, 0) / (n - 1 || 1)) || 1; return c.map((x) => x / sd); }
  const sd = Math.sqrt(c.reduce((s, x) => s + (x - mu) ** 2, 0) / (n - 1 || 1)) || 1; return c.map((x) => (x - mu) / sd); // zscore
}
function outlierMask(c: number[]): number[] {
  const s = [...c].sort((a, b) => a - b); const n = s.length; const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  const dev = c.map((x) => Math.abs(x - med)).sort((a, b) => a - b); const mad = dev.length % 2 ? dev[(dev.length - 1) / 2] : (dev[dev.length / 2 - 1] + dev[dev.length / 2]) / 2;
  const thr = 3 * 1.4826 * mad; return c.map((x) => (Math.abs(x - med) > thr && thr > 0 ? 1 : 0));
}
function fillOutliersVec(c: number[], fillNum: number | null): number[] {
  const mask = outlierMask(c); const s = [...c].sort((a, b) => a - b); const n = s.length; const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  return c.map((x, i) => (mask[i] ? (fillNum ?? med) : x));
}
/** Inverse error function (Winitzki approximation + one Newton step). */
function erfinvFn(y: number): number {
  if (y <= -1) return -Infinity; if (y >= 1) return Infinity; if (y === 0) return 0;
  const a = 0.147; const ln = Math.log(1 - y * y); const t1 = 2 / (Math.PI * a) + ln / 2;
  let x = Math.sign(y) * Math.sqrt(Math.sqrt(t1 * t1 - ln / a) - t1);
  x -= (erfFn(x) - y) / (2 / Math.sqrt(Math.PI) * Math.exp(-x * x)); // Newton refine
  return x;
}

// ── Statistics helpers ────────────────────────────────────────────────────
/** Apply f to a vector, or per-column (→ row vector) for a matrix. */
function colReduce(A: Mat, f: (col: number[]) => number): Mat {
  if (A.nd) return reduceAlongDim(A, firstNonSingleton(ndSize(A)), (fib) => f(fib)).v;
  if (A.rows === 1 || A.cols === 1) return scalar(f(toArray(A)));
  const out = zeros(1, A.cols);
  for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); out.data[c] = f(col); }
  return out;
}
function variance(c: number[], w = 0): number { const n = c.length; if (n < 1) return 0; const denom = w === 1 ? n : (n - 1 || 1); const mu = c.reduce((s, x) => s + x, 0) / n; return c.reduce((s, x) => s + (x - mu) ** 2, 0) / denom; }
function modeOf(c: number[]): number { const m = new Map<number, number>(); for (const x of c) m.set(x, (m.get(x) ?? 0) + 1); let best = NaN, bc = -1; for (const [v, k] of [...m].sort((a, b) => a[0] - b[0])) if (k > bc) { bc = k; best = v; } return best; }
/** MATLAB-style percentile (positions at (k-0.5)/n, linear interpolation). */
function pctile(sorted: number[], p: number): number { const n = sorted.length; if (n === 0) return NaN; if (n === 1) return sorted[0]; const pos = (p / 100) * n - 0.5; if (pos <= 0) return sorted[0]; if (pos >= n - 1) return sorted[n - 1]; const lo = Math.floor(pos), fr = pos - lo; return sorted[lo] * (1 - fr) + sorted[lo + 1] * fr; }
const colvecOf = (A: Mat): Mat => (A.cols === 1 ? A : (A.rows === 1 ? transpose(A) : A));
/** Covariance matrix with columns as variables (normalised by n-1). */
function covMatrix(X: Mat): Mat {
  const n = X.rows, p = X.cols; const mu = new Float64Array(p);
  for (let c = 0; c < p; c++) { let s = 0; for (let r = 0; r < n; r++) s += X.data[r + c * n]; mu[c] = s / n; }
  const C = zeros(p, p);
  for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) { let s = 0; for (let r = 0; r < n; r++) s += (X.data[r + i * n] - mu[i]) * (X.data[r + j * n] - mu[j]); C.data[i + j * p] = s / (n - 1); }
  return C;
}
/** Centred truncated moving window of length k over a vector. */
function movWindow(A: Mat, k: number, f: (w: number[]) => number): Mat {
  const v = toArray(A); const n = v.length; const before = Math.floor(k / 2); const out: number[] = [];   // MATLAB: even windows lean on current+previous
  for (let i = 0; i < n; i++) { const lo = Math.max(0, i - before), hi = Math.min(n - 1, i - before + k - 1); out.push(f(v.slice(lo, hi + 1))); }
  return A.cols === 1 ? colVec(out) : rowVec(out);
}

/** Rotate a matrix 90° counter-clockwise k times. */
function rot90n(A: Mat, kk: number): Mat {
  let R = A; const k = ((kk % 4) + 4) % 4;
  for (let t = 0; t < k; t++) { const T = transpose(R); const o = zeros(T.rows, T.cols); o.isChar = T.isChar; const im = T.idata ? new Float64Array(T.data.length) : null; for (let c = 0; c < T.cols; c++) for (let r = 0; r < T.rows; r++) { o.data[(T.rows - 1 - r) + c * T.rows] = T.data[r + c * T.rows]; if (im) im[(T.rows - 1 - r) + c * T.rows] = T.idata![r + c * T.rows]; } if (im) o.idata = im; R = o; }
  return R;
}

// ── Numerical-methods helpers ─────────────────────────────────────────────
function handle(v: Value, name: string): Handle { if (!isHandle(v)) throw new MatError(`${name}: first argument must be a function handle`); return v; }
async function callScalar(env: Env, f: Handle, x: number): Promise<number> { const r = await env.callHandle(f, [scalar(x)], 1); return r.length && isMat(r[0]) ? asScalar(r[0] as Mat) : NaN; }

// ── Sparse (CSC) helpers + structural algorithms ─────────────────────────
const asSparse = (v: Value): Sparse => (isSparse(v) ? v : denseToSparse(m(v)));
/** Iterate (linearKey, value) of a CSC matrix (column-major key = j*rows+i). */
function* sparseEntries(S: Sparse): Generator<[number, number]> {
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) yield [j * S.rows + S.rowind[p], S.values[p]];
}
/** sprand/sprandn(m,n,density) or sprand(A): random sparse pattern. */
function sprandGen(a: Value[], normal: boolean): Sparse {
  const rnd = () => (normal ? Math.sqrt(-2 * Math.log(Math.random() || 1e-12)) * Math.cos(2 * Math.PI * Math.random()) : Math.random());
  if (a.length === 1) { const S = asSparse(a[0]); const acc = new Map<number, number>(); for (const [k] of sparseEntries(S)) acc.set(k, rnd()); return sparseFromMap(S.rows, S.cols, acc); }
  const r = Math.round(asScalar(a[0])), c = Math.round(asScalar(a[1])), dens = a.length >= 3 ? asScalar(a[2]) : 0.1;
  const acc = new Map<number, number>(); const k = Math.round(dens * r * c);
  for (let t = 0; t < k; t++) acc.set(Math.floor(Math.random() * c) * r + Math.floor(Math.random() * r), rnd());
  return sparseFromMap(r, c, acc);
}
/** Symmetric adjacency list of the nonzero pattern of A+Aᵀ (no self-loops). */
function symAdjacency(S: Sparse): Set<number>[] {
  const n = S.rows; const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { const i = S.rowind[p]; if (i !== j) { adj[i].add(j); adj[j].add(i); } }
  return adj;
}
/** Symbolic Cholesky column counts: nonzeros per column of the L factor (symbfact). */
function symbolicCholCounts(S: Sparse): number[] {
  const n = S.rows; const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { const i = S.rowind[p]; if (i >= j) { adj[j].add(i); adj[i].add(j); } }
  const counts = new Array(n).fill(0);
  for (let k = 0; k < n; k++) {
    const reach = [...adj[k]].filter((i) => i >= k); counts[k] = reach.length;   // diagonal + sub-diagonal fill
    // fill-in: neighbors > k become mutually adjacent (elimination)
    const hi = reach.filter((i) => i > k);
    for (let a = 0; a < hi.length; a++) for (let b = a + 1; b < hi.length; b++) { adj[hi[a]].add(hi[b]); adj[hi[b]].add(hi[a]); }
  }
  return counts;
}
/** Maximum bipartite matching (columns→rows) on a sparse pattern, via augmenting paths.
 *  Returns match[col] = matched row index, or -1 (basis of dmperm / structural rank). */
function bipartiteMatch(S: Sparse): number[] {
  const matchCol = new Array(S.cols).fill(-1);   // col → row
  const matchRow = new Array(S.rows).fill(-1);   // row → col
  const colRows: number[][] = Array.from({ length: S.cols }, (_, j) => { const rs: number[] = []; for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) rs.push(S.rowind[p]); return rs; });
  const tryAug = (j: number, seen: boolean[]): boolean => {
    for (const i of colRows[j]) if (!seen[i]) { seen[i] = true; if (matchRow[i] < 0 || tryAug(matchRow[i], seen)) { matchRow[i] = j; matchCol[j] = i; return true; } }
    return false;
  };
  for (let j = 0; j < S.cols; j++) tryAug(j, new Array(S.rows).fill(false));
  return matchCol;
}
/** Column-intersection adjacency (pattern of AᵀA) for colamd. */
function colAdjacency(S: Sparse): Set<number>[] {
  const n = S.cols; const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  const rowCols = new Map<number, number[]>();
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { const i = S.rowind[p]; (rowCols.get(i) ?? rowCols.set(i, []).get(i)!).push(j); }
  for (const cols of rowCols.values()) for (let x = 0; x < cols.length; x++) for (let y = x + 1; y < cols.length; y++) { adj[cols[x]].add(cols[y]); adj[cols[y]].add(cols[x]); }
  return adj;
}
/** Greedy minimum-degree elimination ordering (1-based permutation). */
function minDegreeOrder(adj0: Set<number>[]): number[] {
  const n = adj0.length; const adj = adj0.map((s) => new Set(s)); const elim = new Array(n).fill(false); const order: number[] = [];
  for (let step = 0; step < n; step++) {
    let v = -1; for (let i = 0; i < n; i++) if (!elim[i] && (v < 0 || adj[i].size < adj[v].size)) v = i;
    order.push(v + 1); elim[v] = true;
    const nb = [...adj[v]].filter((u) => !elim[u]);
    for (const x of nb) { adj[x].delete(v); for (const y of nb) if (x !== y) adj[x].add(y); }
  }
  return order;
}
/** Reverse Cuthill–McKee ordering (1-based permutation). */
function symrcmOf(S: Sparse): number[] {
  const n = S.rows; const adj = symAdjacency(S).map((s) => [...s]); const deg = adj.map((a) => a.length);
  const visited = new Array(n).fill(false); const order: number[] = [];
  while (order.length < n) {
    let start = -1; for (let i = 0; i < n; i++) if (!visited[i] && (start < 0 || deg[i] < deg[start])) start = i;
    const queue = [start]; visited[start] = true;
    while (queue.length) { const v = queue.shift()!; order.push(v); const nb = adj[v].filter((u) => !visited[u]).sort((x, y) => deg[x] - deg[y]); for (const u of nb) { visited[u] = true; queue.push(u); } }
  }
  order.reverse();
  return order.map((i) => i + 1);
}
/** Elimination tree parent vector (1-based; 0 = root), from the upper structure. */
/** Layered layout of a tree from a parent-pointer vector (1-based, 0=root); MATLAB treelayout. */
function treeLayout(parent: number[]): { x: number[]; y: number[]; h: number } {
  const n = parent.length; const children: number[][] = Array.from({ length: n }, () => []); const roots: number[] = [];
  for (let i = 0; i < n; i++) { if (parent[i] > 0) children[parent[i] - 1].push(i); else roots.push(i); }
  const depth = new Array(n).fill(0); const setDepth = (i: number, d: number) => { depth[i] = d; for (const c of children[i]) setDepth(c, d + 1); };
  roots.forEach((r) => setDepth(r, 0)); const maxd = Math.max(0, ...depth);
  const x = new Array(n).fill(0); let leafPos = 0;
  const assignX = (i: number): number => { if (!children[i].length) { x[i] = leafPos++; return x[i]; } const cs = children[i].map(assignX); x[i] = (Math.min(...cs) + Math.max(...cs)) / 2; return x[i]; };
  roots.forEach(assignX); const nx = Math.max(1, leafPos);
  const xn = x.map((v) => (v + 0.5) / nx); const y = depth.map((d) => 1 - (d + 0.5) / (maxd + 1));
  return { x: xn, y, h: maxd + 1 };
}
function etreeOf(S: Sparse): number[] {
  const n = S.cols; const parent = new Array(n).fill(-1); const ancestor = new Array(n).fill(-1);
  for (let j = 0; j < n; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) {
    let i = S.rowind[p];
    while (i !== -1 && i < j) { const next = ancestor[i]; ancestor[i] = j; if (next === -1) parent[i] = j; i = next; }
  }
  return parent.map((x) => x + 1);
}
/** Incomplete Cholesky IC(0): lower factor on the pattern of A (A assumed SPD). */
function ichol0(S: Sparse): Sparse {
  const n = S.rows; const A = sparseToDense(S); const inP = (i: number, j: number) => A.data[i + j * n] !== 0;
  const L = zeros(n, n);
  for (let k = 0; k < n; k++) {
    let d = A.data[k + k * n]; for (let j = 0; j < k; j++) if (inP(k, j)) d -= L.data[k + j * n] ** 2;
    L.data[k + k * n] = Math.sqrt(Math.max(d, 0));
    for (let i = k + 1; i < n; i++) if (inP(i, k)) { let s = A.data[i + k * n]; for (let j = 0; j < k; j++) if (inP(i, j) && inP(k, j)) s -= L.data[i + j * n] * L.data[k + j * n]; L.data[i + k * n] = L.data[k + k * n] ? s / L.data[k + k * n] : 0; }
  }
  return denseToSparse(L);
}
/** Incomplete LU ILU(0): unit-lower L and upper U on the pattern of A (IKJ variant). */
function ilu0(S: Sparse): { L: Sparse; U: Sparse } {
  const n = S.rows; const A = sparseToDense(S); const inP = (i: number, j: number) => A.data[i + j * n] !== 0;
  const w = Float64Array.from(A.data);
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) if (inP(i, k)) { w[i + k * n] /= w[k + k * n]; const lik = w[i + k * n]; for (let j = k + 1; j < n; j++) if (inP(i, j)) w[i + j * n] -= lik * w[k + j * n]; }
  }
  const L = zeros(n, n), U = zeros(n, n);
  for (let i = 0; i < n; i++) { L.data[i + i * n] = 1; for (let j = 0; j < n; j++) if (inP(i, j)) { if (j < i) L.data[i + j * n] = w[i + j * n]; else U.data[i + j * n] = w[i + j * n]; } }
  return { L: denseToSparse(L), U: denseToSparse(U) };
}

// ── 2-D Delaunay triangulation (Bowyer–Watson) + scattered interpolation ──
function orient2(ax: number, ay: number, bx: number, by: number, cx: number, cy: number): number {
  return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
}
/** True if (px,py) lies strictly inside the circumcircle of triangle a,b,c. */
function inCircle(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, px: number, py: number): boolean {
  if (orient2(ax, ay, bx, by, cx, cy) < 0) { const tx = bx, ty = by; bx = cx; by = cy; cx = tx; cy = ty; }
  const adx = ax - px, ady = ay - py, bdx = bx - px, bdy = by - py, cdx = cx - px, cdy = cy - py;
  const a2 = adx * adx + ady * ady, b2 = bdx * bdx + bdy * bdy, c2 = cdx * cdx + cdy * cdy;
  const det = adx * (bdy * c2 - b2 * cdy) - ady * (bdx * c2 - b2 * cdx) + a2 * (bdx * cdy - bdy * cdx);
  return det > 1e-12;
}
/** Delaunay triangulation of 2-D points; returns 0-based vertex-index triples. */
function delaunayTri(xs: number[], ys: number[]): number[][] {
  const n = xs.length; if (n < 3) return [];
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  for (let i = 0; i < n; i++) { minx = Math.min(minx, xs[i]); miny = Math.min(miny, ys[i]); maxx = Math.max(maxx, xs[i]); maxy = Math.max(maxy, ys[i]); }
  const dmax = Math.max(maxx - minx, maxy - miny) || 1, midx = (minx + maxx) / 2, midy = (miny + maxy) / 2;
  const px = [...xs, midx - 20 * dmax, midx, midx + 20 * dmax];
  const py = [...ys, midy - dmax, midy + 20 * dmax, midy - dmax];
  let tris: number[][] = [[n, n + 1, n + 2]];
  for (let i = 0; i < n; i++) {
    const bad: number[][] = [], good: number[][] = [];
    for (const t of tris) (inCircle(px[t[0]], py[t[0]], px[t[1]], py[t[1]], px[t[2]], py[t[2]], px[i], py[i]) ? bad : good).push(t);
    const edges: number[][] = [];
    for (const t of bad) edges.push([t[0], t[1]], [t[1], t[2]], [t[2], t[0]]);
    tris = good;
    for (let a = 0; a < edges.length; a++) {
      let shared = false;
      for (let b = 0; b < edges.length; b++) if (a !== b && ((edges[a][0] === edges[b][0] && edges[a][1] === edges[b][1]) || (edges[a][0] === edges[b][1] && edges[a][1] === edges[b][0]))) { shared = true; break; }
      if (!shared) tris.push([edges[a][0], edges[a][1], i]);
    }
  }
  return tris.filter((t) => t.every((v) => v < n));
}
/** Circumcenter of a triangle (Voronoi vertex). */
function circumcenter(ax: number, ay: number, bx: number, by: number, cx: number, cy: number): [number, number] {
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(d) < 1e-300) return [(ax + bx + cx) / 3, (ay + by + cy) / 3];
  const a2 = ax * ax + ay * ay, b2 = bx * bx + by * by, c2 = cx * cx + cy * cy;
  return [(a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / d, (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / d];
}
/** Barycentric coordinates of (px,py) in triangle a,b,c. */
function bary(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, px: number, py: number): [number, number, number] {
  const d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
  const l1 = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) / d;
  const l2 = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) / d;
  return [l1, l2, 1 - l1 - l2];
}

/** ez*-plotter argument → function handle (handle as-is, or build an anon from a string expr). */
async function ezFn(v: Value, env: Env, vars: string): Promise<Value> { return isHandle(v) || isSym(v) ? v : env.evalInput(`@(${vars}) ${asString(v)}`); }
/** Turn a scalar `sym` into a callable handle by vectorising its operators
 *  (`^ * /` → `.^ .* ./`) and binding its free variables. */
async function symToFn(s: Sym, env: Env): Promise<Handle> {
  const vs = symVars(s.exprs[0]); const args = vs.length ? vs : ['x'];
  const body = exprToStr(s.exprs[0]).replace(/\^/g, '.^').replace(/\*/g, '.*').replace(/\//g, './');
  return (await env.evalInput(`@(${args.join(',')}) ${body}`)) as Handle;
}
/** symvar-like: the free variables of an expression (identifiers not followed by '(' and
 *  not builtins/constants), alphabetical. */
function guessVars(expr: string): string[] {
  const found = new Set<string>(); const re = /[A-Za-z_]\w*/g; let mm: RegExpExecArray | null;
  while ((mm = re.exec(expr))) { const name = mm[0]; const after = expr[re.lastIndex]; if (after === '(') continue; if (name in BUILTINS || name in CONSTANTS) continue; found.add(name); }
  const vars = [...found].sort(); return vars.length ? vars : ['x'];
}
/** Library model specs for fittype/fit (formula + coefficient names + independent var). */
function libraryModel(spec: string): { formula: string; coeffs: string[]; indep: string } | null {
  const pm = spec.match(/^poly(\d)$/); if (pm) { const d = +pm[1]; const coeffs: string[] = []; const terms: string[] = []; for (let i = 0; i <= d; i++) { const c = 'p' + (i + 1); coeffs.push(c); const pw = d - i; terms.push(pw === 0 ? c : pw === 1 ? `${c}*x` : `${c}*x^${pw}`); } return { formula: terms.join('+'), coeffs, indep: 'x' }; }
  const tbl: Record<string, [string, string[]]> = {
    exp1: ['a*exp(b*x)', ['a', 'b']], exp2: ['a*exp(b*x)+c*exp(d*x)', ['a', 'b', 'c', 'd']],
    power1: ['a*x^b', ['a', 'b']], power2: ['a*x^b+c', ['a', 'b', 'c']],
    sin1: ['a1*sin(b1*x+c1)', ['a1', 'b1', 'c1']], gauss1: ['a1*exp(-((x-b1)/c1)^2)', ['a1', 'b1', 'c1']],
    fourier1: ['a0+a1*cos(w*x)+b1*sin(w*x)', ['a0', 'a1', 'b1', 'w']],
  };
  return tbl[spec] ? { formula: tbl[spec][0], coeffs: tbl[spec][1], indep: 'x' } : null;
}
function fittypeOf(spec: string): { formula: string; coeffs: string[]; indep: string } { const lib = libraryModel(spec); if (lib) return lib; const indep = 'x'; return { formula: spec, coeffs: guessVars(spec).filter((v) => v !== indep), indep }; }
/** Central-difference gradient of a 2-D field; fx along columns (x), fy along rows (y). */
function grad2(F: Mat, hx: number, hy: number): { fx: Float64Array; fy: Float64Array } {
  const R = F.rows, C = F.cols; const fx = new Float64Array(R * C), fy = new Float64Array(R * C);
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
    fx[r + c * R] = C === 1 ? 0 : c === 0 ? (F.data[r + R] - F.data[r]) / hx : c === C - 1 ? (F.data[r + c * R] - F.data[r + (c - 1) * R]) / hx : (F.data[r + (c + 1) * R] - F.data[r + (c - 1) * R]) / (2 * hx);
    fy[r + c * R] = R === 1 ? 0 : r === 0 ? (F.data[1 + c * R] - F.data[c * R]) / hy : r === R - 1 ? (F.data[r + c * R] - F.data[(r - 1) + c * R]) / hy : (F.data[(r + 1) + c * R] - F.data[(r - 1) + c * R]) / (2 * hy);
  }
  return { fx, fy };
}
function gridStep(M: Mat, dir: 'x' | 'y'): number { return dir === 'x' ? (M.data[M.rows] - M.data[0]) || 1 : (M.data[1] - M.data[0]) || 1; }
function divergenceNumeric(a: Value[], _n: number): Value[] {
  const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
  if (ms.length >= 6) { const U = ms[3], V = ms[4], W = ms[5]; const du = grad3(U, ms[0], 'x'), dv = grad3(V, ms[1], 'y'), dw = grad3(W, ms[2], 'z'); const o = makeND(ndSize(U), new Float64Array(numel(U))); for (let i = 0; i < o.data.length; i++) o.data[i] = du[i] + dv[i] + dw[i]; return [o]; }
  const U = ms.length >= 4 ? ms[2] : ms[0], V = ms.length >= 4 ? ms[3] : ms[1];
  const hx = ms.length >= 4 ? gridStep(ms[0], 'x') : 1, hy = ms.length >= 4 ? gridStep(ms[1], 'y') : 1;
  const { fx } = grad2(U, hx, hy), gy = grad2(V, hx, hy).fy; const o = zeros(U.rows, U.cols); for (let i = 0; i < o.data.length; i++) o.data[i] = fx[i] + gy[i]; return [o];
}
function curlNumeric(a: Value[], n: number): Value[] {
  const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
  const U = ms.length >= 4 ? ms[2] : ms[0], V = ms.length >= 4 ? ms[3] : ms[1];
  const hx = ms.length >= 4 ? gridStep(ms[0], 'x') : 1, hy = ms.length >= 4 ? gridStep(ms[1], 'y') : 1;
  const dVdx = grad2(V, hx, hy).fx, dUdy = grad2(U, hx, hy).fy;
  const cz = zeros(U.rows, U.cols), av = zeros(U.rows, U.cols); for (let i = 0; i < cz.data.length; i++) { cz.data[i] = dVdx[i] - dUdy[i]; av.data[i] = cz.data[i] / 2; }
  return n >= 2 ? [cz, av] : [cz];
}
/** Polynomial coefficients of a symbolic expression in variable v (ascending; via Taylor at 0). */
/** Central-difference derivative of a 3-D field along x (cols), y (rows), or z (pages). */
function grad3(F: Mat, C: Mat, dir: 'x' | 'y' | 'z'): Float64Array {
  const d = ndSize(F); const d0 = d[0], d1 = d[1] ?? 1, d2 = d[2] ?? 1;
  const stride = dir === 'y' ? 1 : dir === 'x' ? d0 : d0 * d1; const n = dir === 'y' ? d0 : dir === 'x' ? d1 : d2;
  const h = (dir === 'y' ? C.data[1] - C.data[0] : dir === 'x' ? C.data[d0] - C.data[0] : C.data[d0 * d1] - C.data[0]) || 1;
  const out = new Float64Array(F.data.length);
  const idxAlong = (base: number, p: number) => base + p * stride;
  for (let k = 0; k < d2; k++) for (let i = 0; i < d1; i++) for (let j = 0; j < d0; j++) {
    const lin = j + i * d0 + k * d0 * d1; const p = dir === 'y' ? j : dir === 'x' ? i : k; const base = lin - p * stride;
    out[lin] = n === 1 ? 0 : p === 0 ? (F.data[idxAlong(base, 1)] - F.data[lin]) / h : p === n - 1 ? (F.data[lin] - F.data[idxAlong(base, p - 1)]) / h : (F.data[idxAlong(base, p + 1)] - F.data[idxAlong(base, p - 1)]) / (2 * h);
  }
  return out;
}
/** numgrid(R,n): grid-point numbering for a region ('S' square, 'L' L-shape, 'D' disc). */
function numgridOf(R: string, n: number): Mat {
  const G = zeros(n, n); const half = (n - 1) / 2;
  const inside = (r: number, c: number): boolean => {
    const interior = r > 0 && r < n - 1 && c > 0 && c < n - 1; if (!interior) return false;
    const xc = (c - half) / half, yc = (half - r) / half;
    if (R === 'L') return !(xc > 0 && yc > 0);
    if (R === 'D' || R === 'C') return xc * xc + yc * yc < 1;
    return true;   // 'S' and default
  };
  let k = 0; for (let c = 0; c < n; c++) for (let r = 0; r < n; r++) if (inside(r, c)) G.data[r + c * n] = ++k;
  return G;
}
/** delsq(G): the 5-point discrete negative-Laplacian on the numbered grid points (sparse). */
function delsqOf(G: Mat): Sparse {
  const n = G.rows; const ii: number[] = [], jj: number[] = [], vv: number[] = []; let kmax = 0;
  for (let c = 0; c < G.cols; c++) for (let r = 0; r < n; r++) {
    const p = G.data[r + c * n]; if (p === 0) continue; kmax = Math.max(kmax, p);
    ii.push(p); jj.push(p); vv.push(4);
    for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) { const nr = r + dr, nc = c + dc; if (nr < 0 || nr >= n || nc < 0 || nc >= G.cols) continue; const q = G.data[nr + nc * n]; if (q > 0) { ii.push(p); jj.push(q); vv.push(-1); } }
  }
  return sparseFromTriplets(kmax, kmax, ii, jj, vv);
}
/** Column-major Mat → row-major number[][] grid (z[r][c]). */
function matToGrid(Z: Mat): number[][] {
  const g: number[][] = []; for (let r = 0; r < Z.rows; r++) { const row: number[] = []; for (let c = 0; c < Z.cols; c++) row.push(Z.data[r + c * Z.rows]); g.push(row); }
  return g;
}
/** Marching-squares contour segments packed into MATLAB's contour-matrix format. */
function marchingSquares(xv: number[], yv: number[], z: number[][], levels: number[] | null): Mat {
  const nr = z.length, nc = z[0]?.length ?? 0;
  let zmin = Infinity, zmax = -Infinity; for (const row of z) for (const v of row) { if (v < zmin) zmin = v; if (v > zmax) zmax = v; }
  const lv = levels ?? Array.from({ length: 6 }, (_, i) => zmin + (i + 1) * (zmax - zmin) / 7);
  const cols: number[][] = [];   // each entry is a 2-element column [x;y] for the contour matrix
  const interp = (lo: number, hi: number, t: number, a: number, b: number) => a + (b - a) * (t - lo) / (hi - lo || 1);
  for (const L of lv) {
    for (let r = 0; r < nr - 1; r++) for (let c = 0; c < nc - 1; c++) {
      const tl = z[r][c], tr = z[r][c + 1], br = z[r + 1][c + 1], bl = z[r + 1][c];
      const pts: [number, number][] = [];
      const edge = (va: number, vb: number, xa: number, ya: number, xb: number, yb: number) => { if ((va < L) !== (vb < L)) pts.push([interp(va, vb, L, xa, xb), interp(va, vb, L, ya, yb)]); };
      edge(tl, tr, xv[c], yv[r], xv[c + 1], yv[r]);          // top
      edge(tr, br, xv[c + 1], yv[r], xv[c + 1], yv[r + 1]);  // right
      edge(br, bl, xv[c + 1], yv[r + 1], xv[c], yv[r + 1]);  // bottom
      edge(bl, tl, xv[c], yv[r + 1], xv[c], yv[r]);          // left
      for (let k = 0; k + 1 < pts.length; k += 2) {
        cols.push([L, 2]);                                    // header: level, #points
        cols.push([pts[k][0], pts[k][1]], [pts[k + 1][0], pts[k + 1][1]]);
      }
    }
  }
  const out = zeros(2, cols.length); cols.forEach((cc, j) => { out.data[0 + j * 2] = cc[0]; out.data[1 + j * 2] = cc[1]; });
  return out;
}

/** Build the MATLAB contour matrix C for `[C,h] = contour(...)` from (Z) or (X,Y,Z[,levels]) args. */
function contourMatrixFor(a: Value[]): Mat {
  const mats = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
  let X: Mat | null = null, Y: Mat | null = null, Z: Mat, lvArg: Mat | null = null;
  if (mats.length >= 3) { X = mats[0]; Y = mats[1]; Z = mats[2]; lvArg = mats[3] ?? null; }
  else { Z = mats[0]; lvArg = mats[1] ?? null; }
  const z = matRows(Z);
  const firstRow = (M: Mat) => Array.from({ length: M.cols }, (_, c) => M.data[0 + c * M.rows]);
  const firstCol = (M: Mat) => Array.from({ length: M.rows }, (_, r) => M.data[r + 0 * M.rows]);
  const xv = X ? (X.rows === 1 || X.cols === 1 ? toArray(X) : firstRow(X)) : ax(Z.cols);
  const yv = Y ? (Y.rows === 1 || Y.cols === 1 ? toArray(Y) : firstCol(Y)) : ax(Z.rows);
  const levels = lvArg && numel(lvArg) > 1 ? toArray(lvArg) : null;
  return marchingSquares(xv, yv, z, levels);
}
function colOf(M: Mat, j: number): Mat { return colVec(Array.from({ length: M.rows }, (_, r) => M.data[r + j * M.rows])); }
const ax = (n: number): number[] => Array.from({ length: n }, (_, i) => i + 1);
/** Extract a 1-D axis vector from a meshgrid matrix or vector (cf. interp3). */
function gridAxis(M: Mat, axis: 1 | 2 | 3, d: number[]): number[] {
  if (M.nd || (M.rows > 1 && M.cols > 1)) { const r = d[0]; if (axis === 1) return Array.from({ length: d[0] }, (_, i) => M.data[i]); if (axis === 2) return Array.from({ length: d[1] ?? 1 }, (_, j) => M.data[j * r]); return Array.from({ length: d[2] ?? 1 }, (_, k) => M.data[k * r * (d[1] ?? 1)]); }
  return toArray(M);
}
/** Bilinear sample of a grid (rows=y, cols=x) at (px,py); returns 0 outside. */
function bilin(xv: number[], yv: number[], G: number[][], px: number, py: number): number {
  if (px < xv[0] || px > xv[xv.length - 1] || py < yv[0] || py > yv[yv.length - 1]) return NaN;
  let i = 0; while (i < xv.length - 2 && px > xv[i + 1]) i++; let j = 0; while (j < yv.length - 2 && py > yv[j + 1]) j++;
  const tx = (px - xv[i]) / (xv[i + 1] - xv[i] || 1), ty = (py - yv[j]) / (yv[j + 1] - yv[j] || 1);
  return G[j][i] * (1 - tx) * (1 - ty) + G[j][i + 1] * tx * (1 - ty) + G[j + 1][i] * (1 - tx) * ty + G[j + 1][i + 1] * tx * ty;
}
function streamlines2(X: Mat, Y: Mat, U: Mat, V: Mat, sx: number[], sy: number[]): { x: number[]; y: number[] } {
  const xv = X.rows > 1 && X.cols > 1 ? Array.from({ length: X.cols }, (_, c) => X.data[0 + c * X.rows]) : toArray(X);
  const yv = Y.rows > 1 && Y.cols > 1 ? Array.from({ length: Y.rows }, (_, r) => Y.data[r]) : toArray(Y);
  const Ug = matToGrid(U), Vg = matToGrid(V);
  const span = Math.max(xv[xv.length - 1] - xv[0], yv[yv.length - 1] - yv[0]); const h = span / 200;
  const X2: number[] = [], Y2: number[] = [];
  for (let s = 0; s < sx.length; s++) {
    let px = sx[s], py = sy[s];
    for (let step = 0; step < 1000; step++) {
      const u = bilin(xv, yv, Ug, px, py), v = bilin(xv, yv, Vg, px, py); if (!isFinite(u) || !isFinite(v)) break;
      const mag = Math.hypot(u, v); if (mag < 1e-9) break;
      X2.push(px); Y2.push(py); px += h * u / mag; py += h * v / mag;
    }
    X2.push(NaN); Y2.push(NaN);
  }
  return { x: X2, y: Y2 };
}
/** Split NaN-separated streamline coordinates into a cell array of per-seed vertex matrices. */
function splitStreamCell(xs: number[], ys: number[], zs?: number[]): Cell {
  const items: Value[] = []; let run: number[][] = [];
  const flush = () => { if (run.length) items.push(fromRows(run)); run = []; };
  for (let i = 0; i < xs.length; i++) { if (Number.isNaN(xs[i])) { flush(); continue; } run.push(zs ? [xs[i], ys[i], zs[i]] : [xs[i], ys[i]]); }
  flush();
  return makeCell(1, items.length, items);
}
function streamlines3(X: Mat, Y: Mat, Z: Mat, U: Mat, V: Mat, W: Mat, sx: number[], sy: number[], sz: number[]): { x: number[]; y: number[]; z: number[] } {
  const d = ndSize(U); const xv = gridAxis(X, 2, d), yv = gridAxis(Y, 1, d), zv = gridAxis(Z, 3, d);
  const d0 = d[0], d1 = d[1] ?? 1;
  const samp = (G: Mat, px: number, py: number, pz: number) => {
    const loc = (g: number[], q: number): [number, number] => { if (q < g[0] || q > g[g.length - 1]) return [-1, 0]; let i = 0; while (i < g.length - 2 && q > g[i + 1]) i++; return [i, (q - g[i]) / (g[i + 1] - g[i] || 1)]; };
    const [i, tx] = loc(xv, px), [j, ty] = loc(yv, py), [k, tz] = loc(zv, pz); if (i < 0 || j < 0 || k < 0) return NaN;
    const at = (a: number, b: number, cc: number) => G.data[b + a * d0 + cc * d0 * d1];   // (yj, xi, zk)
    const c00 = at(j, i, k) * (1 - tx) + at(j, i + 1, k) * tx, c10 = at(j + 1, i, k) * (1 - tx) + at(j + 1, i + 1, k) * tx;
    const c01 = at(j, i, k + 1) * (1 - tx) + at(j, i + 1, k + 1) * tx, c11 = at(j + 1, i, k + 1) * (1 - tx) + at(j + 1, i + 1, k + 1) * tx;
    return (c00 * (1 - ty) + c10 * ty) * (1 - tz) + (c01 * (1 - ty) + c11 * ty) * tz;
  };
  const span = Math.max(xv[xv.length - 1] - xv[0], yv[yv.length - 1] - yv[0], zv[zv.length - 1] - zv[0]); const h = span / 200;
  const X2: number[] = [], Y2: number[] = [], Z2: number[] = [];
  for (let s = 0; s < sx.length; s++) {
    let px = sx[s], py = sy[s], pz = sz[s];
    for (let step = 0; step < 1000; step++) {
      const u = samp(U, px, py, pz), v = samp(V, px, py, pz), w = samp(W, px, py, pz); if (!isFinite(u) || !isFinite(v) || !isFinite(w)) break;
      const mag = Math.hypot(u, v, w); if (mag < 1e-9) break;
      X2.push(px); Y2.push(py); Z2.push(pz); px += h * u / mag; py += h * v / mag; pz += h * w / mag;
    }
    X2.push(NaN); Y2.push(NaN); Z2.push(NaN);
  }
  return { x: X2, y: Y2, z: Z2 };
}
/** Trilinear sample of a 3-D volume V on grid vectors (xv=cols, yv=rows, zv=pages); NaN outside. */
function trilinearV(V: Mat, xv: number[], yv: number[], zv: number[], px: number, py: number, pz: number): number {
  const d = ndSize(V); const d0 = d[0], d1 = d[1] ?? 1;
  const loc = (g: number[], q: number): [number, number] => { if (q < g[0] - 1e-9 || q > g[g.length - 1] + 1e-9) return [-1, 0]; let i = 0; while (i < g.length - 2 && q > g[i + 1]) i++; return [i, (q - g[i]) / (g[i + 1] - g[i] || 1)]; };
  const [i, tx] = loc(xv, px), [j, ty] = loc(yv, py), [k, tz] = loc(zv, pz); if (i < 0 || j < 0 || k < 0) return NaN;
  const at = (a: number, b: number, cc: number) => V.data[b + a * d0 + cc * d0 * d1];   // (yj rows, xi cols, zk pages)
  const c00 = at(j, i, k) * (1 - tx) + at(j, i + 1, k) * tx, c10 = at(j + 1, i, k) * (1 - tx) + at(j + 1, i + 1, k) * tx;
  const c01 = at(j, i, k + 1) * (1 - tx) + at(j, i + 1, k + 1) * tx, c11 = at(j + 1, i, k + 1) * (1 - tx) + at(j + 1, i + 1, k + 1) * tx;
  return (c00 * (1 - ty) + c10 * ty) * (1 - tz) + (c01 * (1 - ty) + c11 * ty) * tz;
}
/** Isosurface via marching tetrahedra (each cube split into 6 tets). Per-triangle vertices. */
function marchingTets(V: Mat, xv: number[], yv: number[], zv: number[], iso: number): { verts: [number, number, number][]; faces: number[][] } {
  const d = ndSize(V); const d0 = d[0], d1 = d[1] ?? 1, d2 = d[2] ?? 1;
  const val = (i: number, j: number, k: number) => V.data[j + i * d0 + k * d0 * d1];   // i=x col, j=y row, k=z page
  const corner = (i: number, j: number, k: number): [[number, number, number], number] => [[xv[i], yv[j], zv[k]], val(i, j, k)];
  const verts: [number, number, number][] = []; const faces: number[][] = [];
  const TETS = [[0, 5, 1, 6], [0, 1, 2, 6], [0, 2, 3, 6], [0, 3, 7, 6], [0, 7, 4, 6], [0, 4, 5, 6]];
  const emit = (tet: [[number, number, number], number][]) => {
    const below = tet.filter(([, v]) => v < iso); const above = tet.filter(([, v]) => v >= iso);
    if (!below.length || !above.length) return;
    const cross = (A: [[number, number, number], number], B: [[number, number, number], number]): [number, number, number] => { const t = (iso - A[1]) / (B[1] - A[1] || 1); return [A[0][0] + t * (B[0][0] - A[0][0]), A[0][1] + t * (B[0][1] - A[0][1]), A[0][2] + t * (B[0][2] - A[0][2])]; };
    const tri = (a: [number, number, number], b: [number, number, number], c: [number, number, number]) => { const n = verts.length; verts.push(a, b, c); faces.push([n, n + 1, n + 2]); };
    if (below.length === 1 || above.length === 1) { const solo = below.length === 1 ? below[0] : above[0]; const others = below.length === 1 ? above : below; tri(cross(solo, others[0]), cross(solo, others[1]), cross(solo, others[2])); }
    else { const p = below, q = above; const a = cross(p[0], q[0]), b = cross(p[0], q[1]), c = cross(p[1], q[0]), dd = cross(p[1], q[1]); tri(a, b, c); tri(b, dd, c); }
  };
  for (let k = 0; k < d2 - 1; k++) for (let j = 0; j < d0 - 1; j++) for (let i = 0; i < d1 - 1; i++) {
    const cube = [corner(i, j, k), corner(i + 1, j, k), corner(i + 1, j + 1, k), corner(i, j + 1, k), corner(i, j, k + 1), corner(i + 1, j, k + 1), corner(i + 1, j + 1, k + 1), corner(i, j + 1, k + 1)];
    for (const t of TETS) emit([cube[t[0]], cube[t[1]], cube[t[2]], cube[t[3]]]);
  }
  return { verts, faces };
}

// ── General n-dimensional geometry (convhulln / delaunayn / voronoin) ──────
/** A column-major m×n Mat → array of m row-vectors. */
function matRows(P: Mat): number[][] {
  const rows: number[][] = [];
  for (let i = 0; i < P.rows; i++) { const r: number[] = []; for (let j = 0; j < P.cols; j++) r.push(P.data[i + j * P.rows]); rows.push(r); }
  return rows;
}
/** Determinant of a square matrix given as rows (Gaussian elimination). */
function detRows(rows: number[][]): number {
  const n = rows.length; const M = rows.map((r) => r.slice()); let det = 1;
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-300) return 0;
    if (piv !== c) { [M[c], M[piv]] = [M[piv], M[c]]; det = -det; }
    det *= M[c][c];
    for (let r = c + 1; r < n; r++) { const f = M[r][c] / M[c][c]; for (let k = c; k < n; k++) M[r][k] -= f * M[c][k]; }
  }
  return det;
}
/** Solve the n×n system Ax=b by Gaussian elimination with partial pivoting. Returns null if singular. */
function solveLin(A: number[][], b: number[]): number[] | null {
  const n = b.length; const M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-12) return null;
    [M[c], M[piv]] = [M[piv], M[c]];
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  return M.map((r, i) => r[n] / r[i]);
}
/** Outward-oriented (d-1)-simplex facet of a d-dimensional hull. */
interface Facet { verts: number[]; normal: number[]; offset: number }
/** Hyperplane through d points (P[idx]); orient its normal so `interior` is on the negative side. */
function makeFacet(P: number[][], idx: number[], interior: number[]): Facet | null {
  const d = P[0].length; const base = P[idx[0]];
  // normal ⟂ all edge vectors (idx[k]-idx[0]); solve the (d-1) constraints + a normalisation.
  const A: number[][] = []; const rhs: number[] = [];
  for (let k = 1; k < d; k++) { A.push(P[idx[k]].map((v, j) => v - base[j])); rhs.push(0); }
  A.push(P[idx[0]].slice()); rhs.push(1); // arbitrary scaling row to avoid the trivial solution
  let nrm = solveLin(A, rhs);
  if (!nrm) { A[d - 1] = A[d - 1].map(() => Math.random()); nrm = solveLin(A, rhs); if (!nrm) return null; }
  let offset = nrm.reduce((s, v, j) => s + v * base[j], 0);
  if (nrm.reduce((s, v, j) => s + v * interior[j], 0) - offset > 0) { nrm = nrm.map((v) => -v); offset = -offset; }
  return { verts: idx.slice(), normal: nrm, offset };
}
/** Incremental (beneath–beyond) convex hull of m points in d dimensions → facets of (d-1)-simplices. */
function convhullnd(P: number[][]): Facet[] {
  const m = P.length, d = P[0].length;
  // Seed: find d+1 affinely-independent points.
  const seed = [0]; const interiorPts: number[][] = [P[0]];
  for (let i = 1; i < m && seed.length <= d; i++) {
    const cand = [...seed, i];
    if (cand.length === 1) { seed.push(i); continue; }
    // rank check: edge vectors from cand[0] must be independent
    const edges = cand.slice(1).map((idx) => P[idx].map((v, j) => v - P[cand[0]][j]));
    if (matRank(edges) === edges.length) { seed.push(i); interiorPts.push(P[i]); }
  }
  if (seed.length < d + 1) return []; // degenerate (points lie in a lower-dim flat)
  const interior = P[0].map((_, j) => seed.reduce((s, idx) => s + P[idx][j], 0) / seed.length);
  let facets: Facet[] = [];
  for (let omit = 0; omit < seed.length; omit++) { const f = makeFacet(P, seed.filter((_, k) => k !== omit), interior); if (f) facets.push(f); }
  const inHull = new Set(seed);
  for (let p = 0; p < m; p++) {
    if (inHull.has(p)) continue;
    const visible = facets.filter((f) => f.normal.reduce((s, v, j) => s + v * P[p][j], 0) - f.offset > 1e-9);
    if (!visible.length) continue;
    // Horizon: ridges (d-1 verts) shared by exactly one visible facet.
    const ridgeCount = new Map<string, { verts: number[]; n: number }>();
    for (const f of visible) for (let k = 0; k < d; k++) { const r = f.verts.filter((_, q) => q !== k); const key = r.slice().sort((a, b) => a - b).join(','); const e = ridgeCount.get(key); if (e) e.n++; else ridgeCount.set(key, { verts: r, n: 1 }); }
    const vis = new Set(visible); facets = facets.filter((f) => !vis.has(f));
    for (const { verts, n } of ridgeCount.values()) if (n === 1) { const f = makeFacet(P, [...verts, p], interior); if (f) facets.push(f); }
    inHull.add(p);
  }
  return facets;
}
/** Rank of a small matrix (rows of equal length) by Gaussian elimination. */
function matRank(rows: number[][]): number {
  const R = rows.map((r) => r.slice()); const m = R.length, n = R[0]?.length ?? 0; let rank = 0;
  for (let c = 0; c < n && rank < m; c++) {
    let piv = -1; for (let r = rank; r < m; r++) if (Math.abs(R[r][c]) > 1e-10) { piv = r; break; }
    if (piv < 0) continue;
    [R[rank], R[piv]] = [R[piv], R[rank]];
    for (let r = 0; r < m; r++) if (r !== rank) { const f = R[r][c] / R[rank][c]; for (let k = c; k < n; k++) R[r][k] -= f * R[rank][k]; }
    rank++;
  }
  return rank;
}
/** Delaunay simplices of m points in d-D, via the lower convex hull of the paraboloid lift.
 *  A tiny deterministic joggle breaks exact cocircular/cospherical degeneracies (cf. Qhull 'QJ'). */
function delaunaynd(P: number[][]): number[][] {
  const d = P[0].length;
  // The pure-JS incremental hull is O(points × facets); above this size it would
  // effectively hang (MATLAB uses Qhull). Bail gracefully on very large 3-D+ sets.
  if (P.length > 600 && d >= 3) return [];
  const jit = (i: number, j: number) => 1e-9 * ((((i + 1) * 2654435761 + (j + 1) * 40503) >>> 0) / 2 ** 32 - 0.5);
  const lifted = P.map((pt, i) => { const q = pt.map((v, j) => v + jit(i, j)); return [...q, q.reduce((s, v) => s + v * v, 0)]; });
  const facets = convhullnd(lifted);
  // Lower facets: outward normal points "down" in the lift dimension (negative last component).
  return facets.filter((f) => f.normal[d] < -1e-12).map((f) => f.verts.slice());
}
/** Barycentric weights of q within the d-simplex `pts` (d+1 points in d-D); w0 first. */
function barycentricND(pts: number[][], q: number[]): number[] {
  const d = q.length; const v0 = pts[0];
  const A: number[][] = []; const b: number[] = [];
  for (let i = 0; i < d; i++) { A.push(pts.slice(1).map((p) => p[i] - v0[i])); b.push(q[i] - v0[i]); }
  const w = solveLin(A, b); if (!w) return new Array(d + 1).fill(NaN);
  return [1 - w.reduce((s, x) => s + x, 0), ...w];
}
/** Circumcenter of a d-simplex (d+1 points in d-D). */
function circumcenterND(pts: number[][]): number[] {
  const d = pts[0].length; const v0 = pts[0];
  const A: number[][] = []; const b: number[] = [];
  for (let i = 1; i <= d; i++) { A.push(pts[i].map((v, j) => 2 * (v - v0[j]))); b.push(pts[i].reduce((s, v) => s + v * v, 0) - v0.reduce((s, v) => s + v * v, 0)); }
  return solveLin(A, b) ?? v0.map((_, j) => pts.reduce((s, p) => s + p[j], 0) / pts.length);
}

// ── extra linear-algebra / transform helpers ───────────────────────────
function subcols(M: Mat, k: number): Mat { const o = zeros(M.rows, k); for (let c = 0; c < k; c++) for (let r = 0; r < M.rows; r++) o.data[r + c * M.rows] = M.data[r + c * M.rows]; return o; }
function insertVec(A: Mat, j: number, x: Mat, orient: 'col' | 'row'): Mat {
  if (orient === 'row') return transpose(insertVec(transpose(A), j, transpose(x), 'col'));
  const o = zeros(A.rows, A.cols + 1); let cc = 0;
  for (let c = 0; c <= A.cols; c++) { if (c === j) { for (let r = 0; r < A.rows; r++) o.data[r + cc * A.rows] = x.data[r]; cc++; } if (c < A.cols) { for (let r = 0; r < A.rows; r++) o.data[r + cc * A.rows] = A.data[r + c * A.rows]; cc++; } }
  return o;
}
function deleteVec(A: Mat, j: number, orient: 'col' | 'row'): Mat {
  if (orient === 'row') return transpose(deleteVec(transpose(A), j, 'col'));
  const o = zeros(A.rows, A.cols - 1); let cc = 0;
  for (let c = 0; c < A.cols; c++) { if (c === j) continue; for (let r = 0; r < A.rows; r++) o.data[r + cc * A.rows] = A.data[r + c * A.rows]; cc++; }
  return o;
}
/** Complex eigen-decomposition (V,D) → real block-diagonal form (cdf2rdf). */
function cdf2rdfFn(V: Mat, D: Mat): { V: Mat; D: Mat } {
  const n = D.rows; const Vr = zeros(n, n), Dr = zeros(n, n);
  const di = D.idata, vi = V.idata;
  for (let k = 0; k < n; k++) {
    const lim = di ? di[k + k * n] : 0;
    if (Math.abs(lim) > 1e-12 && k + 1 < n) {
      const a = D.data[k + k * n], b = lim;
      Dr.data[k + k * n] = a; Dr.data[k + (k + 1) * n] = b; Dr.data[(k + 1) + k * n] = -b; Dr.data[(k + 1) + (k + 1) * n] = a;
      for (let r = 0; r < n; r++) { Vr.data[r + k * n] = V.data[r + k * n]; Vr.data[r + (k + 1) * n] = vi ? vi[r + k * n] : 0; }
      k++;
    } else { Dr.data[k + k * n] = D.data[k + k * n]; for (let r = 0; r < n; r++) Vr.data[r + k * n] = V.data[r + k * n]; }
  }
  return { V: Vr, D: Dr };
}
/** Non-uniform DFT: F(k) = Σ_j x_j exp(-2πi t_j f_k). */
function nudft(xr: number[], xi: number[], t: number[], f: number[]): Mat {
  const M = f.length, N = xr.length; const Fr = new Float64Array(M), Fi = new Float64Array(M);
  for (let k = 0; k < M; k++) { let sr = 0, si = 0; for (let j = 0; j < N; j++) { const ph = -2 * Math.PI * t[j] * f[k] / N; const c = Math.cos(ph), s = Math.sin(ph); sr += xr[j] * c - xi[j] * s; si += xr[j] * s + xi[j] * c; } Fr[k] = sr; Fi[k] = si; }
  return { kind: 'num', rows: M, cols: 1, data: Fr, idata: Fi };
}
/** Tensor product / contraction (tensorprod). */
function tensorProd(A: Mat, B: Mat, opts: Value[]): Mat {
  const da = ndSize(A), db = ndSize(B);
  if (opts.length && isMat(opts[0]) && (opts[0] as Mat).isChar && asString(opts[0]) === 'all') {
    let s = 0; for (let i = 0; i < A.data.length; i++) s += A.data[i] * B.data[i]; return scalar(s);
  }
  if (opts.length >= 2) {
    // contract dimension dimA of A with dimB of B
    const dimA = Math.round(asScalar(opts[0])) - 1, dimB = Math.round(asScalar(opts[1])) - 1;
    const K = da[dimA]; const restA = da.filter((_, i) => i !== dimA), restB = db.filter((_, i) => i !== dimB);
    const na = restA.reduce((p, x) => p * x, 1), nb = restB.reduce((p, x) => p * x, 1);
    const strideA = (idx: number, dim: number) => { let s = 1; for (let i = 0; i < dim; i++) s *= da[i]; return s * idx; };
    const strideB = (idx: number, dim: number) => { let s = 1; for (let i = 0; i < dim; i++) s *= db[i]; return s * idx; };
    const out = new Float64Array(na * nb);
    const idxFromFlat = (flat: number, dims: number[]) => { const sub: number[] = []; for (const d of dims) { sub.push(flat % d); flat = Math.floor(flat / d); } return sub; };
    for (let ia = 0; ia < na; ia++) { const subA = idxFromFlat(ia, restA);
      for (let ib = 0; ib < nb; ib++) { const subB = idxFromFlat(ib, restB); let acc = 0;
        for (let kk = 0; kk < K; kk++) {
          let offA = strideA(kk, dimA); restA.forEach((_, q) => { const realDim = q < dimA ? q : q + 1; offA += strideA(subA[q], realDim); });
          let offB = strideB(kk, dimB); restB.forEach((_, q) => { const realDim = q < dimB ? q : q + 1; offB += strideB(subB[q], realDim); });
          acc += A.data[offA] * B.data[offB];
        }
        out[ia + ib * na] = acc;
      }
    }
    return na === 1 || nb === 1 ? mat(na * nb, 1, out) : mat(na, nb, out);
  }
  // outer product: vec(A) ⊗ vec(B) → (numelA × numelB)
  const out = new Float64Array(A.data.length * B.data.length);
  for (let j = 0; j < B.data.length; j++) for (let i = 0; i < A.data.length; i++) out[i + j * A.data.length] = A.data[i] * B.data[j];
  return mat(A.data.length, B.data.length, out);
}

// ── Symbolic Math helpers ───────────────────────────────────────────────
function isPrimeN(n: number): boolean { if (n < 2) return false; if (n < 4) return true; if (n % 2 === 0) return false; for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false; return true; }
/** Determinant of an n×n symbolic matrix (column-major exprs) by cofactor expansion. */

// ── Quantum computing ──────────────────────────────────────────────────
function qArg(v: Value, name = 'argument'): Quantum { if (!isQuantum(v)) throw new MatError(`${name}: expected a quantum object`); return v; }
function qList(v: Value): number[] { return toArray(m(v)).map((x) => Math.round(x)); }
function mkGate(gate: string, targets: number[], controls: number[] = [], angles: number[] = []): Quantum { return { kind: 'quantum', qkind: 'gate', gate, targets, controls, angles }; }
/** 2×2 unitary (as [re,im] pairs, row-major) for a named single-qubit gate. */
function gateMatrix(name: string, theta = 0): [number, number][] {
  const r2 = 1 / Math.SQRT2;
  switch (name) {
    case 'id': return [[1, 0], [0, 0], [0, 0], [1, 0]];
    case 'x': return [[0, 0], [1, 0], [1, 0], [0, 0]];
    case 'y': return [[0, 0], [0, -1], [0, 1], [0, 0]];
    case 'z': return [[1, 0], [0, 0], [0, 0], [-1, 0]];
    case 'h': return [[r2, 0], [r2, 0], [r2, 0], [-r2, 0]];
    case 's': return [[1, 0], [0, 0], [0, 0], [0, 1]];
    case 'si': return [[1, 0], [0, 0], [0, 0], [0, -1]];
    case 't': return [[1, 0], [0, 0], [0, 0], [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4)]];
    case 'ti': return [[1, 0], [0, 0], [0, 0], [Math.cos(Math.PI / 4), -Math.sin(Math.PI / 4)]];
    case 'rx': { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [[c, 0], [0, -s], [0, -s], [c, 0]]; }
    case 'ry': { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [[c, 0], [-s, 0], [s, 0], [c, 0]]; }
    case 'rz': { const c = Math.cos(theta / 2), s = Math.sin(theta / 2); return [[c, -s], [0, 0], [0, 0], [c, s]]; }
    case 'r1': return [[1, 0], [0, 0], [0, 0], [Math.cos(theta), Math.sin(theta)]];
    default: return [[1, 0], [0, 0], [0, 0], [1, 0]];
  }
}
/** Simulate a circuit on |0…0⟩; qubit 1 is the most-significant bit. */
function simulateCircuit(c: Quantum): Quantum {
  const n = c.numQubits ?? 1; const dim = 1 << n;
  const re = new Float64Array(dim), im = new Float64Array(dim); re[0] = 1;
  const bitOf = (q: number) => n - q;   // qubit q (1-based) → bit position (MSB=qubit 1)
  const apply = (gates: Quantum[]) => { for (const g of gates) applyGate(g); };
  const applyKUnitary = (Ure: Float64Array, Uim: Float64Array, qubits: number[]) => {
    const k = qubits.length; const dimK = 1 << k; const bits = qubits.map(bitOf);
    const others: number[] = []; for (let b = 0; b < n; b++) if (!bits.includes(b)) others.push(b);
    for (let oc = 0; oc < (1 << others.length); oc++) {
      let base = 0; for (let b = 0; b < others.length; b++) if ((oc >> b) & 1) base |= 1 << others[b];
      const idx = new Array(dimK); for (let m2 = 0; m2 < dimK; m2++) { let bi = base; for (let b = 0; b < k; b++) if ((m2 >> (k - 1 - b)) & 1) bi |= 1 << bits[b]; idx[m2] = bi; }
      const ar = idx.map((ix) => re[ix]), ai = idx.map((ix) => im[ix]);
      for (let row = 0; row < dimK; row++) { let sr = 0, si = 0; for (let col = 0; col < dimK; col++) { const ur = Ure[row * dimK + col], ui = Uim[row * dimK + col]; sr += ur * ar[col] - ui * ai[col]; si += ur * ai[col] + ui * ar[col]; } re[idx[row]] = sr; im[idx[row]] = si; }
    }
  };
  const applyGate = (g: Quantum) => {
    if (g.gate === 'composite') { apply(g.subgates ?? []); return; }
    if (g.gate === 'observable') return;
    if (g.gate === 'unitary' && g.umat) { const k = g.targets!.length; const d = 1 << k; const Ure = new Float64Array(d * d), Uim = new Float64Array(d * d); for (let i = 0; i < d * d; i++) { Ure[i] = g.umat[2 * i]; Uim[i] = g.umat[2 * i + 1]; } applyKUnitary(Ure, Uim, g.targets!); return; }
    if (g.gate === 'qft') { const k = g.targets!.length; const d = 1 << k; const Ure = new Float64Array(d * d), Uim = new Float64Array(d * d); const norm = 1 / Math.sqrt(d); for (let r = 0; r < d; r++) for (let cc = 0; cc < d; cc++) { const ph = 2 * Math.PI * r * cc / d; Ure[r * d + cc] = norm * Math.cos(ph); Uim[r * d + cc] = norm * Math.sin(ph); } applyKUnitary(Ure, Uim, g.targets!); return; }
    if (g.gate === 'rxx' || g.gate === 'ryy' || g.gate === 'rzz') { const { Ure, Uim } = twoQubitRot(g.gate, g.angles?.[0] ?? 0); applyKUnitary(Ure, Uim, g.targets!); return; }
    if (g.gate === 'swap') { const [q1, q2] = g.targets!; const b1 = bitOf(q1), b2 = bitOf(q2); for (let i = 0; i < dim; i++) { const x1 = (i >> b1) & 1, x2 = (i >> b2) & 1; if (x1 < x2) { const j = i ^ (1 << b1) ^ (1 << b2); [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; } } return; }
    const U = gateMatrix(g.gate!, g.angles?.[0] ?? 0); const ctrlMask = (g.controls ?? []).reduce((mk, q) => mk | (1 << bitOf(q)), 0);
    for (const tq of g.targets!) {
      const tb = bitOf(tq);
      for (let i = 0; i < dim; i++) {
        if (((i >> tb) & 1) !== 0) continue;             // process each 0/1 pair once
        if ((i & ctrlMask) !== ctrlMask) continue;        // controls must all be 1
        const j = i | (1 << tb);
        const a0r = re[i], a0i = im[i], a1r = re[j], a1i = im[j];
        re[i] = U[0][0] * a0r - U[0][1] * a0i + U[1][0] * a1r - U[1][1] * a1i;
        im[i] = U[0][0] * a0i + U[0][1] * a0r + U[1][0] * a1i + U[1][1] * a1r;
        re[j] = U[2][0] * a0r - U[2][1] * a0i + U[3][0] * a1r - U[3][1] * a1i;
        im[j] = U[2][0] * a0i + U[2][1] * a0r + U[3][0] * a1i + U[3][1] * a1r;
      }
    }
  };
  apply(c.gates ?? []);
  return { kind: 'quantum', qkind: 'state', numQubits: n, re, im };
}
function makeQubo(Q: Mat, c: Mat, d: number): StructV { return { kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['Type', [str('qubo')]], ['Q', [Q]], ['c', [c]], ['d', [scalar(d)]], ['NumVariables', [scalar(Q.rows)]]]) }; }
function quboEnergy(Q: Mat, c: number[], d: number, x: number[]): number {
  const n = Q.rows; let e = d; for (let i = 0; i < n; i++) { e += c[i] * x[i]; for (let j = 0; j < n; j++) e += Q.data[i + j * n] * x[i] * x[j]; } return e;
}
/** Minimize x'Qx + c'x + d over x∈{0,1}ⁿ: brute force for small n, else greedy local search. */
function quboMinimize(Q: Mat, c: number[], d: number): { x: number[]; val: number } {
  const n = Q.rows;
  if (n <= 18) { let best: number[] = new Array(n).fill(0), bv = Infinity; for (let m2 = 0; m2 < (1 << n); m2++) { const x = Array.from({ length: n }, (_, i) => (m2 >> i) & 1); const e = quboEnergy(Q, c, d, x); if (e < bv) { bv = e; best = x; } } return { x: best, val: bv }; }
  let best: number[] = [], bv = Infinity;
  for (let restart = 0; restart < 30; restart++) {
    const x = Array.from({ length: n }, () => (Math.random() < 0.5 ? 0 : 1)); let cur = quboEnergy(Q, c, d, x);
    let improved = true; while (improved) { improved = false; for (let i = 0; i < n; i++) { x[i] ^= 1; const e = quboEnergy(Q, c, d, x); if (e < cur - 1e-12) { cur = e; improved = true; } else x[i] ^= 1; } }
    if (cur < bv) { bv = cur; best = x.slice(); }
  }
  return { x: best, val: bv };
}
function quboSolveResult(q: StructV, algo = 'tabuSearch'): StructV {
  const Q = m(q.fields.get('Q')![0]); const c = toArray(m(q.fields.get('c')![0])); const d = asScalar(q.fields.get('d')![0]);
  const { x, val } = quboMinimize(Q, c, d);
  return { kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['BestX', [colVec(x)]], ['BestFunctionValue', [scalar(val)]], ['Algorithm', [str(algo)]]]) };
}
/** 4×4 unitary for the rxx/ryy/rzz two-qubit rotation gates (flat row-major [re,im]). */
function twoQubitRot(name: string, theta: number): { Ure: Float64Array; Uim: Float64Array } {
  const c = Math.cos(theta / 2), s = Math.sin(theta / 2); const Ure = new Float64Array(16), Uim = new Float64Array(16);
  const set = (r: number, cc: number, re: number, im: number) => { Ure[r * 4 + cc] = re; Uim[r * 4 + cc] = im; };
  if (name === 'rzz') { // diag(e^{-iθ/2}, e^{iθ/2}, e^{iθ/2}, e^{-iθ/2})
    const ph = [-theta / 2, theta / 2, theta / 2, -theta / 2]; for (let i = 0; i < 4; i++) set(i, i, Math.cos(ph[i]), Math.sin(ph[i]));
  } else if (name === 'rxx') { // cos I − i sin XX (XX is anti-diagonal)
    for (let i = 0; i < 4; i++) set(i, i, c, 0); for (const [i, j] of [[0, 3], [1, 2], [2, 1], [3, 0]]) set(i, j, 0, -s);
  } else { // ryy: cos I − i sin YY ; YY anti-diagonal with signs (+,−,−,+)
    for (let i = 0; i < 4; i++) set(i, i, c, 0); const sg = [1, -1, -1, 1]; const pairs = [[0, 3], [1, 2], [2, 1], [3, 0]]; pairs.forEach(([i, j], k) => set(i, j, 0, sg[k] * s)); // -i*(±1)*s → imag = ∓s? use YY signs
    // YY = [[0,0,0,-1],[0,0,1,0],[0,1,0,0],[-1,0,0,0]]; exp(-iθ/2 YY) off-diag = -i sin * YY entry
    set(0, 3, 0, s); set(1, 2, 0, -s); set(2, 1, 0, -s); set(3, 0, 0, s);
  }
  return { Ure, Uim };
}
function stateFormula(st: Quantum): string {
  const n = st.numQubits!; const parts: string[] = [];
  for (let i = 0; i < st.re!.length; i++) { const r = st.re![i], im = st.im![i]; if (Math.hypot(r, im) < 1e-6) continue; const amp = Math.abs(im) < 1e-9 ? r.toFixed(4) : `(${r.toFixed(4)}${im >= 0 ? '+' : ''}${im.toFixed(4)}i)`; parts.push(`${amp} |${i.toString(2).padStart(n, '0')}⟩`); }
  return parts.length ? parts.join(' + ') : '0';
}

// ── Graph / network ────────────────────────────────────────────────────
function gArg(v: Value, name = 'G'): Graph { if (!isGraph(v)) throw new MatError(`${name}: expected a graph or digraph`); return v; }
/** Resolve a node selector (numeric indices, a name, or a cellstr/string array) to 0-based indices. */
function nodeIds(g: Graph, v: Value): number[] {
  if (isStr(v)) return v.items.map((nm) => resolveName(g, nm));
  if (isMat(v) && v.isChar) return [resolveName(g, asString(v))];
  if (isCell(v)) return v.items.map((it) => resolveName(g, asString(it)));
  return toArray(m(v)).map((x) => Math.round(x) - 1);
}
function resolveName(g: Graph, nm: string): number { const i = (g.names ?? []).indexOf(nm); if (i < 0) throw new MatError(`node '${nm}' not found`); return i; }
/** Adjacency list. For digraphs, `mode` selects out-edges, in-edges, or both. */
function adjList(g: Graph, mode: 'out' | 'in' | 'all'): { to: number; w: number; e: number }[][] {
  const adj: { to: number; w: number; e: number }[][] = Array.from({ length: g.n }, () => []);
  g.edges.forEach((e, ei) => {
    if (!g.directed) { adj[e.s].push({ to: e.t, w: e.w, e: ei }); if (e.s !== e.t) adj[e.t].push({ to: e.s, w: e.w, e: ei }); return; }
    if (mode === 'out' || mode === 'all') adj[e.s].push({ to: e.t, w: e.w, e: ei });
    if (mode === 'in' || mode === 'all') adj[e.t].push({ to: e.s, w: e.w, e: ei });
  });
  return adj;
}
/** Build a graph/digraph from graph(A) | graph(s,t[,w[,n|names]]). */
function buildGraph(directed: boolean, a: Value[]): Graph {
  // graph(A) or graph(A, names): square (weighted) adjacency matrix.
  if (a.length >= 1 && (isMat(a[0]) || isSparse(a[0])) && !(isMat(a[0]) && (a[0] as Mat).isChar)) {
    const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]);
    if (A.rows === A.cols && (A.rows > 1 || a.length >= 2)) {
      const n = A.rows; const edges: { s: number; t: number; w: number }[] = [];
      for (let i = 0; i < n; i++) for (let j = directed ? 0 : i; j < n; j++) { const w = A.data[i + j * n]; if (w !== 0 && (directed || j >= i)) edges.push({ s: i, t: j, w }); }
      const names = a.length >= 2 ? nodeNameList(a[1]) : undefined;
      return makeGraph(directed, n, edges, names);
    }
  }
  // edge-list form: graph(s, t [, w [, n | nodenames]])
  let names: string[] | undefined;
  const resolveEnd = (v: Value): number[] => {
    if (isStr(v) || (isMat(v) && (v as Mat).isChar) || isCell(v)) { const list = nodeNameList(v); names = names ?? []; return list.map((nm) => { let k = names!.indexOf(nm); if (k < 0) { k = names!.length; names!.push(nm); } return k; }); }
    return toArray(m(v)).map((x) => Math.round(x) - 1);
  };
  const s = resolveEnd(a[0]), t = resolveEnd(a[1]);
  const wv = a.length >= 3 && isMat(a[2]) && !(a[2] as Mat).isChar ? toArray(a[2] as Mat) : null;
  const edges = s.map((si, i) => ({ s: si, t: t[i], w: wv ? (wv.length === 1 ? wv[0] : wv[i]) : 1 }));
  let n = Math.max(0, ...s, ...t) + 1;
  if (a.length >= 4) { if (isMat(a[3]) && !(a[3] as Mat).isChar) n = Math.max(n, Math.round(asScalar(a[3]))); else { names = nodeNameList(a[3]); n = names.length; } }
  if (names && names.length > n) n = names.length;
  return makeGraph(directed, n, edges, names);
}
function nodeNameList(v: Value): string[] {
  if (isStr(v)) return v.items.slice();
  if (isCell(v)) return v.items.map((it) => asString(it));
  if (isMat(v) && v.isChar) return [asString(v)];
  // numeric scalar = node count → default names
  const n = Math.round(asScalar(v as Mat)); return Array.from({ length: n }, (_, i) => String(i + 1));
}
function adjacencyMat(g: Graph): Mat {
  const A = zeros(g.n, g.n);
  for (const e of g.edges) { A.data[e.s + e.t * g.n] += e.w; if (!g.directed && e.s !== e.t) A.data[e.t + e.s * g.n] += e.w; }
  return A;
}
function dijkstra(g: Graph, src: number): { dist: number[]; prev: number[] } {
  const adj = adjList(g, 'out'); const dist = new Array(g.n).fill(Infinity); const prev = new Array(g.n).fill(-1); const done = new Array(g.n).fill(false);
  dist[src] = 0;
  for (let it = 0; it < g.n; it++) {
    let u = -1, bd = Infinity; for (let i = 0; i < g.n; i++) if (!done[i] && dist[i] < bd) { bd = dist[i]; u = i; }
    if (u < 0) break; done[u] = true;
    for (const { to, w } of adj[u]) { const nd = dist[u] + (w === 0 ? 0 : w); if (nd < dist[to]) { dist[to] = nd; prev[to] = u; } }
  }
  return { dist, prev };
}
function bfsOrder(g: Graph, src: number): number[] {
  const adj = adjList(g, 'out'); const seen = new Array(g.n).fill(false); const order: number[] = []; const q = [src]; seen[src] = true;
  while (q.length) { const u = q.shift()!; order.push(u); for (const { to } of adj[u].slice().sort((x, y) => x.to - y.to)) if (!seen[to]) { seen[to] = true; q.push(to); } }
  return order;
}
function dfsOrder(g: Graph, src: number): number[] {
  const adj = adjList(g, 'out'); const seen = new Array(g.n).fill(false); const order: number[] = [];
  const stack = [src];
  const visit = (u: number) => { seen[u] = true; order.push(u); for (const { to } of adj[u].slice().sort((x, y) => x.to - y.to)) if (!seen[to]) visit(to); };
  visit(src); void stack;
  return order;
}
/** Weakly-connected components (treat edges as undirected); returns 1-based component label per node. */
function connComp(g: Graph): number[] {
  const par = Array.from({ length: g.n }, (_, i) => i);
  const find = (x: number): number => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
  for (const e of g.edges) { par[find(e.s)] = find(e.t); }
  const label = new Array(g.n).fill(0); let next = 0; const seen = new Map<number, number>();
  for (let i = 0; i < g.n; i++) { const r = find(i); if (!seen.has(r)) seen.set(r, ++next); label[i] = seen.get(r)!; }
  return label;
}
/** Kahn topological order (digraph); returns null if a cycle exists. */
function topoSort(g: Graph): number[] | null {
  const indeg = new Array(g.n).fill(0); const adj = adjList(g, 'out');
  for (const e of g.edges) indeg[e.t]++;
  const q: number[] = []; for (let i = 0; i < g.n; i++) if (indeg[i] === 0) q.push(i); q.sort((x, y) => x - y);
  const order: number[] = [];
  while (q.length) { const u = q.shift()!; order.push(u); for (const { to } of adj[u]) if (--indeg[to] === 0) { q.push(to); q.sort((x, y) => x - y); } }
  return order.length === g.n ? order : null;
}
/** Prim minimum spanning tree (undirected, connected component of node 0); returns the tree edges. */
function primMST(g: Graph): { s: number; t: number; w: number }[] {
  const adj = adjList(g, 'all'); const inT = new Array(g.n).fill(false); const tree: { s: number; t: number; w: number }[] = [];
  if (!g.n) return tree; inT[0] = true; let cnt = 1;
  while (cnt < g.n) {
    let be: { s: number; t: number; w: number } | null = null;
    for (let u = 0; u < g.n; u++) if (inT[u]) for (const { to, w } of adj[u]) if (!inT[to] && (!be || w < be.w)) be = { s: u, t: to, w };
    if (!be) break; inT[be.t] = true; tree.push(be); cnt++;
  }
  return tree;
}
/** Edmonds–Karp max flow from src to sink. */
function maxFlow(g: Graph, src: number, sink: number): number {
  const cap: number[][] = Array.from({ length: g.n }, () => new Array(g.n).fill(0));
  for (const e of g.edges) { cap[e.s][e.t] += e.w; if (!g.directed) cap[e.t][e.s] += e.w; }
  let flow = 0;
  for (;;) {
    const prev = new Array(g.n).fill(-1); prev[src] = src; const q = [src];
    while (q.length) { const u = q.shift()!; for (let v = 0; v < g.n; v++) if (prev[v] < 0 && cap[u][v] > 1e-12) { prev[v] = u; q.push(v); } }
    if (prev[sink] < 0) break;
    let aug = Infinity; for (let v = sink; v !== src; v = prev[v]) aug = Math.min(aug, cap[prev[v]][v]);
    for (let v = sink; v !== src; v = prev[v]) { cap[prev[v]][v] -= aug; cap[v][prev[v]] += aug; }
    flow += aug;
  }
  return flow;
}
/** Brandes betweenness centrality (unweighted, BFS-based). */
function betweenness(g: Graph): number[] {
  const adj = adjList(g, 'out'); const CB = new Array(g.n).fill(0);
  for (let s = 0; s < g.n; s++) {
    const stack: number[] = []; const pred: number[][] = Array.from({ length: g.n }, () => []);
    const sigma = new Array(g.n).fill(0); sigma[s] = 1; const dist = new Array(g.n).fill(-1); dist[s] = 0; const q = [s];
    while (q.length) { const v = q.shift()!; stack.push(v); for (const { to: w } of adj[v]) { if (dist[w] < 0) { dist[w] = dist[v] + 1; q.push(w); } if (dist[w] === dist[v] + 1) { sigma[w] += sigma[v]; pred[w].push(v); } } }
    const delta = new Array(g.n).fill(0);
    while (stack.length) { const w = stack.pop()!; for (const v of pred[w]) delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]); if (w !== s) CB[w] += delta[w]; }
  }
  if (!g.directed) for (let i = 0; i < g.n; i++) CB[i] /= 2;
  return CB;
}
/** PageRank via power iteration. */
function pagerank(g: Graph, damp = 0.85): number[] {
  const adj = adjList(g, 'out'); const out = adj.map((l) => l.length); let pr = new Array(g.n).fill(1 / g.n);
  for (let it = 0; it < 200; it++) {
    const next = new Array(g.n).fill((1 - damp) / g.n);
    let dangling = 0; for (let i = 0; i < g.n; i++) if (out[i] === 0) dangling += damp * pr[i] / g.n;
    for (let u = 0; u < g.n; u++) if (out[u]) for (const { to } of adj[u]) next[to] += damp * pr[u] / out[u];
    for (let i = 0; i < g.n; i++) next[i] += dangling;
    let diff = 0; for (let i = 0; i < g.n; i++) diff += Math.abs(next[i] - pr[i]); pr = next; if (diff < 1e-12) break;
  }
  return pr;
}
/** Strongly-connected components (Kosaraju); comp[node] = 0-based component id. */
function sccKosaraju(g: Graph): { comp: number[]; count: number } {
  const out = adjList(g, 'out'); const order: number[] = []; const seen = new Array(g.n).fill(false);
  const dfs1 = (u: number) => { seen[u] = true; for (const { to } of out[u]) if (!seen[to]) dfs1(to); order.push(u); };
  for (let i = 0; i < g.n; i++) if (!seen[i]) dfs1(i);
  const inn = adjList(g, 'in'); const comp = new Array(g.n).fill(-1); let c = 0;
  const dfs2 = (u: number) => { comp[u] = c; for (const { to } of inn[u]) if (comp[to] < 0) dfs2(to); };
  for (let i = order.length - 1; i >= 0; i--) { const u = order[i]; if (comp[u] < 0) { dfs2(u); c++; } }
  return { comp, count: c };
}
/** Reachability matrix (BFS from each node over directed edges). */
function reachMatrix(g: Graph): boolean[][] {
  const adj = adjList(g, 'out'); const R: boolean[][] = Array.from({ length: g.n }, () => new Array(g.n).fill(false));
  for (let s = 0; s < g.n; s++) { const q = [s]; const seen = new Array(g.n).fill(false); seen[s] = true; while (q.length) { const u = q.shift()!; for (const { to } of adj[u]) if (!seen[to]) { seen[to] = true; R[s][to] = true; q.push(to); } } }
  return R;
}
/** Biconnected-component id per edge (undirected), via DFS low-link + edge stack. */
function biconnected(g: Graph): number[] {
  const adj: { to: number; e: number }[][] = Array.from({ length: g.n }, () => []);
  g.edges.forEach((e, i) => { adj[e.s].push({ to: e.t, e: i }); if (e.s !== e.t) adj[e.t].push({ to: e.s, e: i }); });
  const disc = new Array(g.n).fill(-1), low = new Array(g.n).fill(0); const bin = new Array(g.edges.length).fill(0);
  let timer = 0, bc = 0; const stack: number[] = [];
  const dfs = (u: number, pe: number) => {
    disc[u] = low[u] = timer++;
    for (const { to, e } of adj[u]) { if (e === pe) continue;
      if (disc[to] < 0) { stack.push(e); dfs(to, e); low[u] = Math.min(low[u], low[to]); if (low[to] >= disc[u]) { bc++; let x; do { x = stack.pop()!; bin[x] = bc; } while (x !== e); } }
      else if (disc[to] < disc[u]) { stack.push(e); low[u] = Math.min(low[u], disc[to]); }
    }
  };
  for (let i = 0; i < g.n; i++) if (disc[i] < 0) dfs(i, -1);
  return bin;
}
/** All simple paths s→t (bounded to avoid blow-up). */
/** Parse MaxNum<X>/Min<X>Length/Max<X>Length name-value options for allpaths/allcycles. */
function graphLimitOpts(args: Value[], from: number, kind: 'Path' | 'Cycle'): { maxNum: number; minLen: number; maxLen: number } {
  const o = { maxNum: Infinity, minLen: 0, maxLen: Infinity };
  for (let i = from; i + 1 < args.length; i += 2) {
    const key = (isStr(args[i]) || (isMat(args[i]) && (args[i] as Mat).isChar)) ? asString(args[i]).toLowerCase() : '';
    const val = asScalar(m(args[i + 1]));
    if (key === `maxnum${kind.toLowerCase()}s`) o.maxNum = val;
    else if (key === `min${kind.toLowerCase()}length`) o.minLen = val;
    else if (key === `max${kind.toLowerCase()}length`) o.maxLen = val;
  }
  return o;
}
/** Map a node pair to a 1-based edge index in g.edges (first matching edge). */
function edgeFinder(g: Graph): (u: number, v: number) => number {
  const map = new Map<string, number>();
  g.edges.forEach((e, i) => { const k = g.directed ? `${e.s}>${e.t}` : `${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`; if (!map.has(k)) map.set(k, i + 1); });
  return (u, v) => map.get(g.directed ? `${u}>${v}` : `${Math.min(u, v)}_${Math.max(u, v)}`) ?? 0;
}
function enumeratePaths(g: Graph, s: number, t: number, cap = 2000): number[][] {
  const adj = adjList(g, 'out'); const paths: number[][] = []; const onPath = new Array(g.n).fill(false);
  const dfs = (u: number, path: number[]) => { if (paths.length >= cap) return; if (u === t) { paths.push(path.slice()); return; } onPath[u] = true; for (const { to } of adj[u]) if (!onPath[to]) { path.push(to); dfs(to, path); path.pop(); } onPath[u] = false; };
  dfs(s, [s]); return paths;
}
/** All simple cycles (bounded), each listed once with its smallest start node. */
function enumerateCycles(g: Graph, cap = 2000): number[][] {
  const adj = adjList(g, 'out'); const cycles: number[][] = [];
  for (let start = 0; start < g.n && cycles.length < cap; start++) {
    const onPath = new Array(g.n).fill(false);
    const dfs = (u: number, path: number[]) => { if (cycles.length >= cap) return; onPath[u] = true; for (const { to } of adj[u]) { if (to === start && path.length >= (g.directed ? 1 : 2)) cycles.push(path.slice()); else if (to > start && !onPath[to]) { path.push(to); dfs(to, path); path.pop(); } } onPath[u] = false; };
    dfs(start, [start]);
  }
  // de-dup undirected cycles (each found in 2 directions)
  if (!g.directed) { const seen = new Set<string>(); return cycles.filter((c) => { const k = [...c].sort((a, b) => a - b).join(','); if (seen.has(k)) return false; seen.add(k); return true; }); }
  return cycles;
}
/** Fundamental cycle basis (undirected): non-tree edge + its tree path. */
function cycleBasisOf(g: Graph): number[][] {
  const par = new Array(g.n).fill(-1); const seen = new Array(g.n).fill(false); const adj = adjList(g, 'all');
  const treeEdge = new Set<string>();
  for (let s = 0; s < g.n; s++) if (!seen[s]) { seen[s] = true; const q = [s]; while (q.length) { const u = q.shift()!; for (const { to } of adj[u]) if (!seen[to]) { seen[to] = true; par[to] = u; treeEdge.add(`${Math.min(u, to)}_${Math.max(u, to)}`); q.push(to); } } }
  const cyc: number[][] = []; const used = new Set<string>();
  for (const e of g.edges) { if (e.s === e.t) continue; const k = `${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`; if (treeEdge.has(k) || used.has(k)) continue; used.add(k);
    const pathUp = (x: number) => { const p = [x]; while (par[x] >= 0) { x = par[x]; p.push(x); } return p; };
    const pa = pathUp(e.s), pb = pathUp(e.t); const setB = new Map(pb.map((v, i) => [v, i])); let lca = -1, ai = 0; for (let i = 0; i < pa.length; i++) if (setB.has(pa[i])) { lca = pa[i]; ai = i; break; }
    const cycle = pa.slice(0, ai + 1).concat(pb.slice(0, setB.get(lca)!).reverse()); cyc.push(cycle);
  }
  return cyc;
}
/** Graph isomorphism via degree-pruned backtracking; returns a permutation (g2→g1) or null. */
function graphIsomorphism(g1: Graph, g2: Graph): number[] | null {
  if (g1.n !== g2.n || g1.edges.length !== g2.edges.length) return null;
  const adjSet = (g: Graph) => { const A = Array.from({ length: g.n }, () => new Set<number>()); for (const e of g.edges) { A[e.s].add(e.t); if (!g.directed) A[e.t].add(e.s); } return A; };
  const A1 = adjSet(g1), A2 = adjSet(g2); const deg = (A: Set<number>[]) => A.map((s) => s.size);
  const d1 = deg(A1), d2 = deg(A2); if ([...d1].sort().join() !== [...d2].sort().join()) return null;
  const map = new Array(g1.n).fill(-1); const used = new Array(g2.n).fill(false);
  const bt = (i: number): boolean => {
    if (i === g1.n) return true;
    for (let j = 0; j < g2.n; j++) { if (used[j] || d2[j] !== d1[i]) continue;
      let ok = true; for (let k = 0; k < i; k++) { if (A1[i].has(k) !== A2[j].has(map[k]) || A1[k].has(i) !== A2[map[k]].has(j)) { ok = false; break; } }
      if (ok) { map[i] = j; used[j] = true; if (bt(i + 1)) return true; used[j] = false; map[i] = -1; }
    }
    return false;
  };
  return bt(0) ? map.slice() : null;
}
/** Hungarian algorithm: min-cost assignment of a cost matrix → pairs + total cost. */
function hungarian(C: Mat, _big: number): { assign: [number, number][]; cost: number } {
  const nr = C.rows, nc = C.cols; const n = Math.max(nr, nc); const INF = 1e15;
  const a: number[][] = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i < nr && j < nc ? C.data[i + j * nr] : 0)));
  const u = new Array(n + 1).fill(0), v = new Array(n + 1).fill(0), p = new Array(n + 1).fill(0), way = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    p[0] = i; let j0 = 0; const minv = new Array(n + 1).fill(INF); const usedc = new Array(n + 1).fill(false);
    do { usedc[j0] = true; const i0 = p[j0]; let delta = INF, j1 = -1;
      for (let j = 1; j <= n; j++) if (!usedc[j]) { const cur = a[i0 - 1][j - 1] - u[i0] - v[j]; if (cur < minv[j]) { minv[j] = cur; way[j] = j0; } if (minv[j] < delta) { delta = minv[j]; j1 = j; } }
      for (let j = 0; j <= n; j++) if (usedc[j]) { u[p[j]] += delta; v[j] -= delta; } else minv[j] -= delta;
      j0 = j1;
    } while (p[j0] !== 0);
    do { const j1 = way[j0]; p[j0] = p[j1]; j0 = j1; } while (j0);
  }
  const assign: [number, number][] = []; let cost = 0;
  for (let j = 1; j <= n; j++) { const i = p[j]; if (i >= 1 && i <= nr && j <= nc) { assign.push([i - 1, j - 1]); cost += C.data[(i - 1) + (j - 1) * nr]; } }
  assign.sort((x, y) => x[0] - y[0]);
  return { assign, cost };
}

/** Draw a graph with a simple circular layout: edges as line segments, nodes as markers. */
function plotGraph(env: Env, g: Graph): void {
  const pos = Array.from({ length: g.n }, (_, i) => { const th = 2 * Math.PI * i / Math.max(1, g.n) - Math.PI / 2; return [Math.cos(th), Math.sin(th)] as [number, number]; });
  const ex: number[] = [], ey: number[] = [];
  for (const e of g.edges) { ex.push(pos[e.s][0], pos[e.t][0], NaN); ey.push(pos[e.s][1], pos[e.t][1], NaN); }
  env.graphics.addSeries(ex, ey);
  env.graphics.hold(true);
  env.graphics.scatter([rowVec(pos.map((p) => p[0])), rowVec(pos.map((p) => p[1]))]);
  env.graphics.hold(false);
}

// ── Geometry-object helpers (triangulation / polyshape / alphaShape) ──────
function gGeom(v: Value, name = 'argument'): Geom { if (!isGeom(v)) throw new MatError(`${name}: expected a geometry object`); return v; }
// ── Greiner–Hormann polygon clipping (union / intersect / difference) ──
interface GHv { x: number; y: number; next: GHv; prev: GHv; inter: boolean; entry: boolean; visited: boolean; neighbor: GHv | null; alpha: number; }
function ghBuild(poly: number[][]): GHv {
  const verts: GHv[] = poly.map((p) => ({ x: p[0], y: p[1], next: null!, prev: null!, inter: false, entry: false, visited: false, neighbor: null, alpha: 0 }));
  for (let i = 0; i < verts.length; i++) { verts[i].next = verts[(i + 1) % verts.length]; verts[i].prev = verts[(i - 1 + verts.length) % verts.length]; }
  return verts[0];
}
function ghPointInside(x: number, y: number, poly: number[][]): boolean {
  let inside = false; for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) { if ((poly[i][1] > y) !== (poly[j][1] > y) && x < (poly[j][0] - poly[i][0]) * (y - poly[i][1]) / (poly[j][1] - poly[i][1]) + poly[i][0]) inside = !inside; } return inside;
}
/** Clip subject by clip polygon. op: 'and' (∩), 'or' (∪), 'minus' (S−C). Returns result boundaries. */
function polyClip(subj0: number[][], clip0: number[][], op: 'and' | 'or' | 'minus'): number[][][] {
  // tiny deterministic joggle of the clip to avoid degenerate (shared vertex/edge) intersections
  const clip = clip0.map((p, i) => [p[0] + 1e-9 * (((i * 2654435761) >>> 0) / 2 ** 32 - 0.5), p[1] + 1e-9 * (((i * 40503 + 7) >>> 0) / 2 ** 32 - 0.5)]);
  const subj = subj0.map((p) => [p[0], p[1]]);
  const S = ghBuild(subj), C = ghBuild(clip);
  const list = (h: GHv): GHv[] => { const r: GHv[] = []; let v = h; do { r.push(v); v = v.next; } while (v !== h); return r; };
  const sVerts = list(S), cVerts = list(C); let nInter = 0;
  // phase 1: intersections
  for (const si of sVerts) {
    const s1 = si, s2 = si.next; if (s1.inter) continue;
    for (const ci of cVerts) {
      const c1 = ci, c2 = ci.next; if (c1.inter) continue;
      const dx1 = s2.x - s1.x, dy1 = s2.y - s1.y, dx2 = c2.x - c1.x, dy2 = c2.y - c1.y;
      const den = dx1 * dy2 - dy1 * dx2; if (Math.abs(den) < 1e-14) continue;
      const a = ((c1.x - s1.x) * dy2 - (c1.y - s1.y) * dx2) / den;
      const b = ((c1.x - s1.x) * dy1 - (c1.y - s1.y) * dx1) / den;
      if (a <= 1e-12 || a >= 1 - 1e-12 || b <= 1e-12 || b >= 1 - 1e-12) continue;
      const x = s1.x + a * dx1, y = s1.y + a * dy1;
      const is: GHv = { x, y, next: null!, prev: null!, inter: true, entry: false, visited: false, neighbor: null, alpha: a };
      const ic: GHv = { x, y, next: null!, prev: null!, inter: true, entry: false, visited: false, neighbor: null, alpha: b };
      is.neighbor = ic; ic.neighbor = is;
      // insert is between s1..s2 sorted by alpha; ic between c1..c2
      let p = s1; while (p.next !== s2 && p.next.inter && p.next.alpha < a) p = p.next; is.next = p.next; is.prev = p; p.next.prev = is; p.next = is;
      let q = c1; while (q.next !== c2 && q.next.inter && q.next.alpha < b) q = q.next; ic.next = q.next; ic.prev = q; q.next.prev = ic; q.next = ic;
      nInter++;
    }
  }
  if (nInter === 0) {   // disjoint / nested cases
    const sIn = ghPointInside(subj[0][0], subj[0][1], clip), cIn = ghPointInside(clip[0][0], clip[0][1], subj);
    if (op === 'and') return sIn ? [subj0] : cIn ? [clip0] : [];
    if (op === 'or') return sIn ? [clip0] : cIn ? [subj0] : [subj0, clip0];
    return cIn ? [subj0, clip0.slice().reverse()] : sIn ? [] : [subj0];   // minus: subject with hole, or empty, or subject
  }
  // phase 2: entry/exit
  let e = ghPointInside(S.x, S.y, clip); for (const v of list(S)) if (v.inter) { v.entry = !e; e = !e; }
  e = ghPointInside(C.x, C.y, subj); for (const v of list(C)) if (v.inter) { v.entry = !e; e = !e; }
  // operation relabel: union flips both; minus flips clip only
  if (op === 'or') { for (const v of list(S)) if (v.inter) v.entry = !v.entry; for (const v of list(C)) if (v.inter) v.entry = !v.entry; }
  if (op === 'minus') { for (const v of list(C)) if (v.inter) v.entry = !v.entry; }
  // phase 3: trace
  const result: number[][][] = [];
  for (const start of list(S)) {
    if (!start.inter || start.visited) continue;
    const poly: number[][] = []; let cur = start;
    do {
      cur.visited = true; if (cur.neighbor) cur.neighbor.visited = true;
      if (cur.entry) { do { cur = cur.next; poly.push([cur.x, cur.y]); } while (!cur.inter); }
      else { do { cur = cur.prev; poly.push([cur.x, cur.y]); } while (!cur.inter); }
      cur = cur.neighbor!;
    } while (cur !== start && poly.length < 100000);
    if (poly.length >= 3) result.push(poly);
  }
  return result;
}
function polyResultGeom(boundaries: number[][][]): Geom {
  const pts: number[][] = []; boundaries.forEach((b, i) => { if (i > 0) pts.push([NaN, NaN]); pts.push(...b); });
  return { kind: 'geom', gkind: 'polyshape', points: pts, dim: 2 };
}
function polyVerts(g: Geom): number[][] { return g.points.filter((p) => !Number.isNaN(p[0])); }
function discLoop(cx: number, cy: number, r: number, n = 48): number[][] { const o: number[][] = []; for (let i = 0; i < n; i++) { const t = 2 * Math.PI * i / n; o.push([cx + r * Math.cos(t), cy + r * Math.sin(t)]); } return o; }
/** Rounded offset (buffer) of a polygon loop by distance d (d>0 dilates). */
function bufferLoop(verts0: number[][], d: number): number[][] {
  let v = verts0.filter((p) => !Number.isNaN(p[0])); if (v.length < 2) return v;
  if (loopSignedArea(v) < 0) v = v.slice().reverse();   // make CCW so outward normal = (dy,−dx)
  const n = v.length; const out: number[][] = [];
  const edgeNormal = (i: number): [number, number] => { const a = v[i], b = v[(i + 1) % n]; const dx = b[0] - a[0], dy = b[1] - a[1]; const L = Math.hypot(dx, dy) || 1; return [dy / L, -dx / L]; };
  for (let i = 0; i < n; i++) {
    const np = edgeNormal((i - 1 + n) % n), nn = edgeNormal(i);
    const a0 = Math.atan2(np[1], np[0]); let da = Math.atan2(nn[1], nn[0]) - a0;
    while (da <= -Math.PI) da += 2 * Math.PI; while (da > Math.PI) da -= 2 * Math.PI;
    if (d > 0 && da > 1e-9) {   // convex corner → round arc of radius d
      const steps = Math.max(1, Math.ceil(Math.abs(da) / (Math.PI / 16)));
      for (let st = 0; st <= steps; st++) { const ang = a0 + da * st / steps; out.push([v[i][0] + d * Math.cos(ang), v[i][1] + d * Math.sin(ang)]); }
    } else { out.push([v[i][0] + d * np[0], v[i][1] + d * np[1]], [v[i][0] + d * nn[0], v[i][1] + d * nn[1]]); }
  }
  return out;
}
/** Map a per-simplex computation over a triangulation's connectivity → rows. */
function perSimplex(g: Geom, fn: (pts: number[][]) => number[]): Mat {
  const T = g.conn ?? []; const rows = T.map((t) => fn(t.map((v) => g.points[v]))); return fromRows(rows.length ? rows : [[]]);
}
/** Free boundary: facets (edges in 2-D, triangles in 3-D) belonging to exactly one simplex. */
function freeBoundaryOf(g: Geom): number[][] {
  const count = new Map<string, { f: number[]; n: number }>(); const d = g.dim;
  for (const t of g.conn ?? []) for (let omit = 0; omit < t.length; omit++) { const facet = t.filter((_, k) => k !== omit); const key = facet.slice().sort((a, b) => a - b).join(','); const e = count.get(key); if (e) e.n++; else count.set(key, { f: facet, n: 1 }); }
  void d; return [...count.values()].filter((e) => e.n === 1).map((e) => e.f);
}
/** Split a NaN-separated vertex list into its individual boundaries. */
function polyBoundaries(verts: number[][]): number[][][] {
  const out: number[][][] = []; let cur: number[][] = [];
  for (const p of verts) { if (Number.isNaN(p[0])) { if (cur.length) out.push(cur); cur = []; } else cur.push(p); }
  if (cur.length) out.push(cur);
  return out;
}
function geomArea(g: Geom): number {
  if (g.gkind === 'polyshape') { let total = 0; for (const b of polyBoundaries(g.points)) total += loopSignedArea(b); return Math.abs(total); }   // regions +, holes −
  // triangulation/alphaShape: sum of simplex measures
  const simplices = g.gkind === 'alphaShape' ? alphaSimplices(g) : (g.conn ?? []);
  const fac = factorialN(g.dim); let total = 0;
  for (const s of simplices) { const pts = s.map((v) => g.points[v]); const rows = pts.slice(1).map((p) => p.map((x, j) => x - pts[0][j])); total += Math.abs(detRows(rows)) / fac; }
  return total;
}
function loopSignedArea(v: number[][]): number { let s = 0; for (let i = 0; i < v.length; i++) { const j = (i + 1) % v.length; s += v[i][0] * v[j][1] - v[j][0] * v[i][1]; } return s / 2; }
function polySignedArea(verts: number[][]): number { let s = 0; for (const b of polyBoundaries(verts)) s += loopSignedArea(b); return s; }
function polyAreaOf(pts: number[][]): number { return Math.abs(loopSignedArea(pts.filter((p) => !Number.isNaN(p[0])))); }
function polyPerim(verts: number[][]): number { let s = 0; for (const v of polyBoundaries(verts)) for (let i = 0; i < v.length; i++) { const j = (i + 1) % v.length; s += Math.hypot(v[j][0] - v[i][0], v[j][1] - v[i][1]); } return s; }
function polyCentroid(verts: number[][]): number[] {
  const v = verts.filter((p) => !Number.isNaN(p[0])); let cx = 0, cy = 0, A = 0;
  for (let i = 0; i < v.length; i++) { const j = (i + 1) % v.length; const cr = v[i][0] * v[j][1] - v[j][0] * v[i][1]; A += cr; cx += (v[i][0] + v[j][0]) * cr; cy += (v[i][1] + v[j][1]) * cr; }
  A /= 2; return Math.abs(A) < 1e-30 ? [v.reduce((s, p) => s + p[0], 0) / v.length, v.reduce((s, p) => s + p[1], 0) / v.length] : [cx / (6 * A), cy / (6 * A)];
}
function pointInPolyV(verts: number[][], px: number, py: number): boolean {
  const v = verts.filter((p) => !Number.isNaN(p[0])); let inside = false;
  for (let i = 0, j = v.length - 1; i < v.length; j = i++) { if ((v[i][1] > py) !== (v[j][1] > py) && px < (v[j][0] - v[i][0]) * (py - v[i][1]) / (v[j][1] - v[i][1]) + v[i][0]) inside = !inside; }
  return inside;
}
/** Circumradius of a d-simplex (d+1 points). */
function circumRadius(pts: number[][]): number { const c = pts.length === 3 && pts[0].length === 2 ? circumcenter(pts[0][0], pts[0][1], pts[1][0], pts[1][1], pts[2][0], pts[2][1]) : circumcenterND(pts); return Math.hypot(...pts[0].map((x, j) => x - c[j])); }
/** The full Delaunay triangulation underlying an alphaShape. */
function alphaSimplicesAll(g: Geom): number[][] { return g.dim === 2 ? delaunayTri(g.points.map((p) => p[0]), g.points.map((p) => p[1])) : delaunaynd(g.points); }
/** Delaunay simplices kept in the alpha complex (circumradius ≤ alpha). */
function alphaSimplices(g: Geom): number[][] { const al = g.alpha ?? Infinity; return alphaSimplicesAll(g).filter((s) => circumRadius(s.map((v) => g.points[v])) <= al); }
/** Boundary facets of the alpha complex (facets on exactly one kept simplex). */
function alphaBoundary(g: Geom): number[][] {
  const count = new Map<string, { f: number[]; n: number }>();
  for (const t of alphaSimplices(g)) for (let omit = 0; omit < t.length; omit++) { const facet = t.filter((_, k) => k !== omit); const key = facet.slice().sort((a, b) => a - b).join(','); const e = count.get(key); if (e) e.n++; else count.set(key, { f: facet, n: 1 }); }
  return [...count.values()].filter((e) => e.n === 1).map((e) => e.f);
}
function alphaBoundaryMeasure(g: Geom): number { let s = 0; for (const f of alphaBoundary(g)) { if (g.dim === 2) s += Math.hypot(g.points[f[0]][0] - g.points[f[1]][0], g.points[f[0]][1] - g.points[f[1]][1]); else { const p = f.map((v) => g.points[v]); const u = p[1].map((x, j) => x - p[0][j]), w = p[2].map((x, j) => x - p[0][j]); s += 0.5 * Math.hypot(u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]); } } return s; }
/** A reasonable default alpha: largest Delaunay circumradius (so the full shape is connected). */
function alphaCritical(pts: number[][], dim: number): number { const conn = dim === 2 ? delaunayTri(pts.map((p) => p[0]), pts.map((p) => p[1])) : delaunaynd(pts); let r = 0; for (const s of conn) r = Math.max(r, circumRadius(s.map((v) => pts[v]))); return r || 1; }
/** Draw a geometry object: polyshape filled, triangulation/alphaShape as edges. */
function plotGeom(env: Env, g: Geom): void {
  if (g.gkind === 'polyshape') { const v = g.points.filter((p) => !Number.isNaN(p[0])); const px = v.map((p) => p[0]), py = v.map((p) => p[1]); if (v.length) { px.push(v[0][0]); py.push(v[0][1]); } env.graphics.chart2d([rowVec(px), rowVec(py)], 'area'); return; }
  const facets = g.gkind === 'alphaShape' ? alphaBoundary(g) : (g.conn ?? []);
  if (g.dim === 3) { env.graphics.trimesh(g.gkind === 'alphaShape' ? facets : facets, g.points.map((p) => p[0]), g.points.map((p) => p[1]), g.points.map((p) => p[2]), true); return; }
  const px: number[] = [], py: number[] = [];
  for (const f of facets) { for (let i = 0; i <= f.length; i++) { const v = f[i % f.length]; px.push(g.points[v][0]); py.push(g.points[v][1]); } px.push(NaN); py.push(NaN); }
  env.graphics.addSeries(px, py);
}

// ── Piecewise-polynomial (pp) form ───────────────────────────────────────
interface PP { breaks: number[]; coefs: Mat; L: number; k: number }
/** Build a MATLAB pp struct from breaks (length L+1) and an L×k coefficient matrix. */
function makePP(breaks: number[], coefs: Mat): StructV {
  const L = coefs.rows, k = coefs.cols;
  const fields = new Map<string, Value[]>([
    ['form', [str('pp')]], ['breaks', [rowVec(breaks)]], ['coefs', [coefs]],
    ['pieces', [scalar(L)]], ['order', [scalar(k)]], ['dim', [scalar(1)]],
  ]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}
/** Derivative of a pp (order k → k−1). */
function ppDer(pp: PP): StructV { const { breaks, coefs, L, k } = pp; if (k <= 1) return makePP(breaks, zeros(L, 1)); const nc = zeros(L, k - 1); for (let i = 0; i < L; i++) for (let j = 0; j < k - 1; j++) nc.data[i + j * L] = coefs.data[i + j * L] * (k - 1 - j); return makePP(breaks, nc); }
/** Antiderivative of a pp (order k → k+1), continuous across breaks. */
function ppInt(pp: PP): StructV { const { breaks, coefs, L, k } = pp; const nc = zeros(L, k + 1); let carry = 0; for (let i = 0; i < L; i++) { for (let j = 0; j < k; j++) nc.data[i + j * L] = coefs.data[i + j * L] / (k - j); nc.data[i + k * L] = carry; const h = breaks[i + 1] - breaks[i]; let v = 0; for (let j = 0; j <= k; j++) v = v * h + nc.data[i + j * L]; carry = v; } return makePP(breaks, nc); }
/** Read a pp struct back into plain data. */
function readPP(v: Value): PP {
  if (!isStruct(v) || asString(v.fields.get('form')?.[0] ?? str('')) !== 'pp') throw new MatError('expected a piecewise-polynomial (pp) struct from mkpp/spline/pchip');
  const breaks = toArray(m(v.fields.get('breaks')![0]));
  const coefs = m(v.fields.get('coefs')![0]);
  return { breaks, coefs, L: coefs.rows, k: coefs.cols };
}
/** Evaluate a pp at q: locate the piece, then Horner in the local variable (q - breaks[i]). */
function ppEval(pp: PP, q: number): number {
  let i = 0; while (i < pp.L - 1 && q >= pp.breaks[i + 1]) i++;
  const t = q - pp.breaks[i]; let v = 0;
  for (let j = 0; j < pp.k; j++) v = v * t + pp.coefs.data[i + j * pp.L];
  return v;
}
/** Natural cubic-spline pp coefficients (L×4, highest power first). */
function splineCoefs(x: number[], y: number[]): Mat {
  const n = x.length, L = n - 1;
  const h: number[] = []; for (let i = 0; i < L; i++) h.push(x[i + 1] - x[i]);
  let M = new Array(n).fill(0);
  if (n >= 3) {
    // Solve for the second derivatives M with MATLAB's not-a-knot end conditions
    // (n≥4) — the first/last two pieces share one cubic, so cubics interpolate exactly.
    const A = zeros(n, n); const rhs = zeros(n, 1);
    for (let i = 1; i < n - 1; i++) { A.data[i + (i - 1) * n] = h[i - 1]; A.data[i + i * n] = 2 * (h[i - 1] + h[i]); A.data[i + (i + 1) * n] = h[i]; rhs.data[i] = 6 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]); }
    if (n >= 4) {
      A.data[0 + 0 * n] = h[1]; A.data[0 + 1 * n] = -(h[0] + h[1]); A.data[0 + 2 * n] = h[0];                            // left not-a-knot
      A.data[(n - 1) + (n - 3) * n] = h[n - 2]; A.data[(n - 1) + (n - 2) * n] = -(h[n - 3] + h[n - 2]); A.data[(n - 1) + (n - 1) * n] = h[n - 3];   // right not-a-knot
    } else { A.data[0] = 1; A.data[(n - 1) + (n - 1) * n] = 1; }                                                          // n=3: natural
    M = toArray(mldivide(A, rhs));
  }
  const C = zeros(L, 4);
  for (let i = 0; i < L; i++) {
    const hi = h[i];
    const a = y[i], b = (y[i + 1] - y[i]) / hi - hi * (2 * M[i] + M[i + 1]) / 6, c = M[i] / 2, d = (M[i + 1] - M[i]) / (6 * hi);
    C.data[i + 0 * L] = d; C.data[i + 1 * L] = c; C.data[i + 2 * L] = b; C.data[i + 3 * L] = a;
  }
  return C;
}
/** Cubic-Hermite pp coefficients (L×4) from node slopes d. */
function hermiteCoefs(x: number[], y: number[], d: number[]): Mat {
  const L = x.length - 1; const C = zeros(L, 4);
  for (let i = 0; i < L; i++) {
    const h = x[i + 1] - x[i], y0 = y[i], y1 = y[i + 1], m0 = d[i], m1 = d[i + 1];
    const c0 = y0, c1 = m0, c2 = (3 * (y1 - y0) / h - 2 * m0 - m1) / h, c3 = (m0 + m1 - 2 * (y1 - y0) / h) / (h * h);
    C.data[i + 0 * L] = c3; C.data[i + 1 * L] = c2; C.data[i + 2 * L] = c1; C.data[i + 3 * L] = c0;
  }
  return C;
}

// ── Interpolation / quadrature helpers ───────────────────────────────────
/** Evaluate a piecewise cubic Hermite with given node slopes d at q. */
function hermiteEval(x: number[], y: number[], d: number[], q: number): number {
  const n = x.length; let i = 0; while (i < n - 2 && q > x[i + 1]) i++;
  const h = x[i + 1] - x[i], t = (q - x[i]) / h;
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2;
  return h00 * y[i] + h10 * h * d[i] + h01 * y[i + 1] + h11 * h * d[i + 1];
}
/** Fritsch–Carlson monotone (pchip) slopes. */
function pchipSlopes(x: number[], y: number[]): number[] {
  const n = x.length; const h: number[] = [], del: number[] = [];
  for (let i = 0; i < n - 1; i++) { h.push(x[i + 1] - x[i]); del.push((y[i + 1] - y[i]) / (x[i + 1] - x[i])); }
  const d = new Array(n).fill(0);
  for (let i = 1; i < n - 1; i++) { if (del[i - 1] * del[i] > 0) { const w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1]; d[i] = (w1 + w2) / (w1 / del[i - 1] + w2 / del[i]); } }
  d[0] = del[0]; d[n - 1] = del[n - 2];
  return d;
}
/** Modified Akima (makima) slopes. */
function akimaSlopes(x: number[], y: number[]): number[] {
  const n = x.length; const del: number[] = []; for (let i = 0; i < n - 1; i++) del.push((y[i + 1] - y[i]) / (x[i + 1] - x[i]));
  const s = new Array(n + 3).fill(0); for (let k = 0; k < n - 1; k++) s[k + 2] = del[k];
  s[1] = 2 * s[2] - s[3]; s[0] = 2 * s[1] - s[2]; s[n + 1] = 2 * s[n] - s[n - 1]; s[n + 2] = 2 * s[n + 1] - s[n];
  const d = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const w1 = Math.abs(s[i + 3] - s[i + 2]) + Math.abs(s[i + 3] + s[i + 2]) / 2;
    const w2 = Math.abs(s[i + 1] - s[i]) + Math.abs(s[i + 1] + s[i]) / 2;
    d[i] = (w1 + w2) === 0 ? 0 : (w1 * s[i + 1] + w2 * s[i + 2]) / (w1 + w2);
  }
  return d;
}
/** Composite Simpson over a rectangle (n even per axis). */
async function simpson2(F: (x: number, y: number) => Promise<number>, ax: number, bx: number, ay: number, by: number, nn: number): Promise<number> {
  const n = nn % 2 ? nn + 1 : nn; const hx = (bx - ax) / n, hy = (by - ay) / n; const w = (i: number) => (i === 0 || i === n ? 1 : (i % 2 ? 4 : 2));
  let s = 0; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) s += w(i) * w(j) * await F(ax + i * hx, ay + j * hy);
  return s * hx * hy / 9;
}
async function simpson3(F: (x: number, y: number, z: number) => Promise<number>, ax: number, bx: number, ay: number, by: number, az: number, bz: number, nn: number): Promise<number> {
  const n = nn % 2 ? nn + 1 : nn; const hx = (bx - ax) / n, hy = (by - ay) / n, hz = (bz - az) / n; const w = (i: number) => (i === 0 || i === n ? 1 : (i % 2 ? 4 : 2));
  let s = 0; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) for (let k = 0; k <= n; k++) s += w(i) * w(j) * w(k) * await F(ax + i * hx, ay + j * hy, az + k * hz);
  return s * hx * hy * hz / 27;
}

/** Real roots of a polynomial (coeffs high→low). Complex roots are omitted. */
function realRoots(coef: number[]): number[] {
  const p = coef.slice(); while (p.length > 1 && Math.abs(p[0]) < 1e-14) p.shift();
  const n = p.length - 1;
  if (n <= 0) return [];
  if (n === 1) return [-p[1] / p[0]];
  if (n === 2) { const [a, b, c] = p; const d = b * b - 4 * a * c; if (d < 0) return []; const sq = Math.sqrt(d); return [(-b + sq) / (2 * a), (-b - sq) / (2 * a)].sort((x, y) => y - x); }
  const pv = (x: number) => { let s = 0; for (const c of p) s = s * x + c; return s; };
  const R = 1 + Math.max(...p.slice(1).map((c) => Math.abs(c / p[0])));
  const steps = 4000; let prev = pv(-R), prevx = -R; const roots: number[] = [];
  for (let i = 1; i <= steps; i++) {
    const x = -R + 2 * R * i / steps; const f = pv(x);
    if (prev === 0) roots.push(prevx);
    else if (prev * f < 0) { let lo = prevx, hi = x, flo = prev; for (let k = 0; k < 80; k++) { const mid = (lo + hi) / 2, fm = pv(mid); if (Math.abs(fm) < 1e-13) { lo = hi = mid; break; } if (flo * fm < 0) hi = mid; else { lo = mid; flo = fm; } } roots.push((lo + hi) / 2); }
    prev = f; prevx = x;
  }
  roots.sort((a, b) => b - a); const out: number[] = [];
  for (const r of roots) if (!out.some((o) => Math.abs(o - r) < 1e-6)) out.push(r);
  return out;
}

// Dormand–Prince 5(4) Butcher tableau (the method behind MATLAB's ode45).
const DP_C = [0, 1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1];
const DP_A: number[][] = [
  [],
  [1 / 5],
  [3 / 40, 9 / 40],
  [44 / 45, -56 / 15, 32 / 9],
  [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
  [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
  [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
];
// 5th-order solution weights (== DP_A[6] by FSAL) and 4th-order error-estimate weights.
const DP_B5 = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0];
const DP_B4 = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40];
// Dense-output coefficients (MATLAB's ntrp45 4th-order interpolant): 7 stages × powers s..s⁴.
const DP_BI: number[][] = [
  [1, -183 / 64, 37 / 12, -145 / 128],
  [0, 0, 0, 0],
  [0, 1500 / 371, -1000 / 159, 1000 / 371],
  [0, -125 / 32, 125 / 12, -375 / 64],
  [0, 9477 / 3392, -729 / 106, 25515 / 6784],
  [0, -11 / 7, 11 / 3, -55 / 28],
  [0, 3 / 2, -4, 5 / 2],
];

/** Read RelTol/AbsTol/InitialStep/MaxStep from an odeset struct argument (if any). */
function odeOpts(opt: Value | undefined): { relTol: number; absTol: number; h0: number; hMax: number } {
  let relTol = 1e-3, absTol = 1e-6, h0 = 0, hMax = Infinity;
  if (opt && isStruct(opt)) {
    const get = (k: string) => { const v = opt.fields.get(k); return v && v.length && isMat(v[0]) ? asScalar(v[0]) : undefined; };
    relTol = get('RelTol') ?? relTol; absTol = get('AbsTol') ?? absTol;
    h0 = get('InitialStep') ?? h0; hMax = get('MaxStep') ?? hMax;
  }
  return { relTol, absTol, h0, hMax };
}

/**
 * Adaptive Dormand–Prince RK45 ODE integrator backing ode45 (and aliases).
 * Embedded 5(4) error estimate drives PI-free step-size control; cubic-Hermite
 * dense output evaluates the solution at user-requested tspan points.
 * Returns [t, y] (or just y) — y is one row per output time.
 */
async function odeSolve(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode45'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  // Optional event detection (odeset('Events', @(t,y) [value,isterminal,direction])).
  const eventsH = (a[3] && isStruct(a[3]) && a[3].fields.get('Events')?.[0] && isHandle(a[3].fields.get('Events')![0])) ? a[3].fields.get('Events')![0] as Handle : undefined;
  const TE: number[] = [], YE: number[][] = [], IE: number[] = [];
  const evalEvents = async (t: number, y: number[]): Promise<{ value: number[]; isterminal: number[]; direction: number[] }> => {
    const r = await env.callHandle(eventsH!, [scalar(t), colVec(y)], 3);
    return { value: toArray(m(r[0])), isterminal: r[1] ? toArray(m(r[1])) : [], direction: r[2] ? toArray(m(r[2])) : [] };
  };
  const evalF = async (t: number, y: number[]): Promise<number[]> => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const axpy = (y: number[], terms: Array<[number, number[]]>) => y.map((v, j) => v + terms.reduce((s, [c, k]) => s + c * k[j], 0));

  const t0 = tspan[0], tEnd = tspan[tspan.length - 1];
  const dir = tEnd >= t0 ? 1 : -1;
  // Output points: explicit tspan list (>2 points) → those; otherwise the solver's own steps.
  const wantPoints = tspan.length > 2 ? tspan.slice() : null;
  const T: number[] = [t0]; const Y: number[][] = [y0.slice()];
  let nextWant = 1; // index into wantPoints for the next point to emit

  let t = t0; let y = y0.slice();
  let f0 = await evalF(t, y);
  let gPrev = eventsH ? (await evalEvents(t, y)).value : []; let terminal = false;
  // Initial step guess (Hairer): based on scaled norms of y and f.
  let h: number;
  if (h0 > 0) h = h0 * dir;
  else {
    const sc = y.map((yi) => absTol + relTol * Math.abs(yi));
    const d0 = Math.hypot(...y.map((yi, j) => yi / sc[j])) / Math.sqrt(neq || 1);
    const d1 = Math.hypot(...f0.map((fi, j) => fi / sc[j])) / Math.sqrt(neq || 1);
    h = (d0 < 1e-5 || d1 < 1e-5 ? 1e-6 : 0.01 * (d0 / d1)) * dir;
  }
  const span = Math.abs(tEnd - t0);
  h = dir * Math.min(Math.abs(h), hMax, span);

  const SAFETY = 0.9, MINFAC = 0.2, MAXFAC = 5, EXP = 1 / 5;
  let steps = 0; const MAXSTEPS = 1e6;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > MAXSTEPS) throw new MatError('ode45: too many steps (RelTol too small or integration failed)');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t; // don't overshoot the endpoint
    // Seven RK stages (FSAL: stage 1 reuses the previous accepted derivative).
    const k: number[][] = new Array(7);
    k[0] = f0;
    for (let s = 1; s < 7; s++) {
      const terms: Array<[number, number[]]> = DP_A[s].map((c, j) => [h * c, k[j]] as [number, number[]]);
      k[s] = await evalF(t + DP_C[s] * h, axpy(y, terms));
    }
    const y5 = axpy(y, DP_B5.map((b, s) => [h * b, k[s]] as [number, number[]]));
    // Error = (b5 - b4)·k, scaled by atol + rtol·max(|y|,|y5|).
    let errNorm = 0;
    for (let j = 0; j < neq; j++) {
      let e = 0; for (let s = 0; s < 7; s++) e += (DP_B5[s] - DP_B4[s]) * k[s][j];
      const sc = absTol + relTol * Math.max(Math.abs(y[j]), Math.abs(y5[j]));
      const r = (h * e) / sc; errNorm += r * r;
    }
    errNorm = Math.sqrt(errNorm / (neq || 1));

    if (errNorm <= 1) {
      // Accept. Record dense-output endpoints for cubic-Hermite interpolation.
      const tNew = t + h; const fNew = k[6]; // FSAL: derivative at t+h
      if (wantPoints) {
        while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) {
          const tq = wantPoints[nextWant]; const s = (tq - t) / h;
          const sp = [s, s * s, s * s * s, s * s * s * s];
          const coeff = DP_BI.map((bi) => bi[0] * sp[0] + bi[1] * sp[1] + bi[2] * sp[2] + bi[3] * sp[3]);
          Y.push(y.map((yi, j) => yi + h * coeff.reduce((acc, c, st) => acc + c * k[st][j], 0)));
          T.push(tq); nextWant++;
        }
      } else { T.push(tNew); Y.push(y5.slice()); }
      // Event detection using the step's cubic-Hermite dense output (k still in scope).
      let termT = 0, termY: number[] | null = null;
      if (eventsH) {
        const denseAt = (s: number) => { const sp = [s, s * s, s * s * s, s * s * s * s]; const coeff = DP_BI.map((bi) => bi[0] * sp[0] + bi[1] * sp[1] + bi[2] * sp[2] + bi[3] * sp[3]); return y.map((yi, j) => yi + h * coeff.reduce((acc, c, st) => acc + c * k[st][j], 0)); };
        const ev = await evalEvents(tNew, y5);
        for (let i = 0; i < ev.value.length; i++) {
          const ga = gPrev[i] ?? 0, gb = ev.value[i], d = ev.direction[i] ?? 0;
          if (!(ga * gb < 0 && (d === 0 || (d > 0 && gb > ga) || (d < 0 && gb < ga)))) continue;
          let lo = 0, hi = 1, glo = ga;
          for (let it = 0; it < 60; it++) { const mid = (lo + hi) / 2; const gm = (await evalEvents(t + mid * h, denseAt(mid))).value[i]; if (glo * gm <= 0) hi = mid; else { lo = mid; glo = gm; } }
          const s = (lo + hi) / 2, tc = t + s * h, yc = denseAt(s);
          TE.push(tc); YE.push(yc); IE.push(i + 1);
          if (ev.isterminal[i] && (termY === null || dir * (tc - termT) < 0)) { terminal = true; termT = tc; termY = yc; }
        }
        gPrev = ev.value;
      }
      t = tNew; y = y5; f0 = fNew; // advance (FSAL reuse)
      if (terminal) { if (termY) { if (!wantPoints) { T.pop(); Y.pop(); } T.push(termT); Y.push(termY); } break; }
    }
    // Step-size update (used after both accept and reject).
    const fac = errNorm === 0 ? MAXFAC : Math.min(MAXFAC, Math.max(MINFAC, SAFETY * errNorm ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode45: step size underflow (problem may be stiff — try ode15s)');
  }

  const Ymat = zeros(T.length, neq); for (let r = 0; r < T.length; r++) for (let c = 0; c < neq; c++) Ymat.data[r + c * T.length] = Y[r][c];
  if (eventsH && nargout >= 3) {
    const Ye = zeros(TE.length, neq); for (let r = 0; r < TE.length; r++) for (let c = 0; c < neq; c++) Ye.data[r + c * TE.length] = YE[r][c];
    return [colVec(T), Ymat, colVec(TE), Ye, colVec(IE)];
  }
  return nargout >= 2 ? [colVec(T), Ymat] : [Ymat];
}

// ── Shared ODE helpers (Shampine–Reichelt "The MATLAB ODE Suite") ──
/** Assemble the [t,y] (or y) output from collected times/states. */
/** pdepe(m, pdefun, icfun, bcfun, xmesh, tspan): 1-D parabolic/elliptic PDE solver.
 *  Skeel–Berzins control-volume method of lines + Crank–Nicolson (implicit, A-stable) in time. */
async function pdepeSolve(a: Value[], env: Env): Promise<Value[]> {
  const msym = Math.round(asScalar(a[0]));
  const pdefun = handle(a[1], 'pdepe'), icfun = handle(a[2], 'pdepe'), bcfun = handle(a[3], 'pdepe');
  const x = toArray(m(a[4])), tspan = toArray(m(a[5])); const N = x.length;
  const xm = (v: number) => (msym === 0 ? 1 : Math.pow(Math.max(v, 0), msym));
  // initial condition → neq, U0
  const u0row = await env.callHandle(icfun, [scalar(x[0])], 1); const neq = numel(m(u0row[0]));
  const M = N * neq; const U0 = new Float64Array(M);
  for (let i = 0; i < N; i++) { const ui = toArray(m((await env.callHandle(icfun, [scalar(x[i])], 1))[0])); for (let k = 0; k < neq; k++) U0[i * neq + k] = ui[k]; }
  const callPde = async (xx: number, t: number, u: number[], ux: number[]) => { const r = await env.callHandle(pdefun, [scalar(xx), scalar(t), colVec(u), colVec(ux)], 3); return { c: toArray(m(r[0])), f: toArray(m(r[1])), s: toArray(m(r[2])) }; };
  /** Mass coefficients c[row], spatial RHS Rhat[row], and algebraic-BC info at (t,U). */
  const evalState = async (t: number, U: Float64Array) => {
    const node = (i: number) => Array.from({ length: neq }, (_, k) => U[i * neq + k]);
    const cN = new Float64Array(M), Rhat = new Float64Array(M);
    // interface fluxes
    const interfaceF = async (i: number) => { const xi = (x[i] + x[i + 1]) / 2; const uL = node(i), uR = node(i + 1); const um = uL.map((v, k) => (v + uR[k]) / 2); const ux = uL.map((v, k) => (uR[k] - v) / (x[i + 1] - x[i])); return (await callPde(xi, t, um, ux)).f; };
    const fInt: number[][] = []; for (let i = 0; i < N - 1; i++) fInt.push(await interfaceF(i));
    // boundary conditions
    const ul = node(0), ur = node(N - 1);
    const bc = await env.callHandle(bcfun, [scalar(x[0]), colVec(ul), scalar(x[N - 1]), colVec(ur), scalar(t)], 4);
    const pl = toArray(m(bc[0])), ql = toArray(m(bc[1])), pr = toArray(m(bc[2])), qr = toArray(m(bc[3]));
    const algL: boolean[] = [], algR: boolean[] = [], algLval: number[] = [], algRval: number[] = [];
    for (let i = 0; i < N; i++) {
      const ui = node(i); const uxC = i === 0 ? node(1).map((v, k) => (v - ui[k]) / (x[1] - x[0])) : i === N - 1 ? ui.map((v, k) => (v - node(N - 2)[k]) / (x[N - 1] - x[N - 2])) : node(i + 1).map((v, k) => (v - node(i - 1)[k]) / (x[i + 1] - x[i - 1]));
      const { c, s } = await callPde(x[i], t, ui, uxC);
      for (let k = 0; k < neq; k++) cN[i * neq + k] = c[k];
      if (i > 0 && i < N - 1) { const xiL = (x[i - 1] + x[i]) / 2, xiR = (x[i] + x[i + 1]) / 2; const w = xm(x[i]) * (xiR - xiL); for (let k = 0; k < neq; k++) Rhat[i * neq + k] = (xm(xiR) * fInt[i][k] - xm(xiL) * fInt[i - 1][k]) / w + s[k]; }
      else if (i === 0) { const xiR = (x[0] + x[1]) / 2; const w = xm(x[0]) * (xiR - x[0]); for (let k = 0; k < neq; k++) { if (Math.abs(ql[k]) < 1e-12) { algL[k] = true; algLval[k] = pl[k]; } else { const fL = -pl[k] / ql[k]; Rhat[k] = (xm(xiR) * fInt[0][k] - xm(x[0]) * fL) / w + s[k]; } } }
      else { const xiL = (x[N - 2] + x[N - 1]) / 2; const w = xm(x[N - 1]) * (x[N - 1] - xiL); for (let k = 0; k < neq; k++) { if (Math.abs(qr[k]) < 1e-12) { algR[k] = true; algRval[k] = pr[k]; } else { const fR = -pr[k] / qr[k]; Rhat[(N - 1) * neq + k] = (xm(x[N - 1]) * fR - xm(xiL) * fInt[N - 2][k]) / w + s[k]; } } }
    }
    return { cN, Rhat, algL, algR, algLval, algRval };
  };
  // Crank–Nicolson with Newton; output at each tspan point.
  let U = U0.slice(); const sol: Float64Array[] = [U.slice()];
  let st0 = await evalState(tspan[0], U);
  for (let ti = 1; ti < tspan.length; ti++) {
    const nsub = 10; const dt = (tspan[ti] - tspan[ti - 1]) / nsub;
    for (let sub = 0; sub < nsub; sub++) {
      const told = tspan[ti - 1] + sub * dt, tnew = told + dt; const Uold = U.slice(); const stOld = st0;
      const resid = async (Un: Float64Array, st: { cN: Float64Array; Rhat: Float64Array; algL: boolean[]; algR: boolean[]; algLval: number[]; algRval: number[] }) => {
        const Phi = new Float64Array(M);
        for (let i = 0; i < N; i++) for (let k = 0; k < neq; k++) { const r = i * neq + k; const isAlg = (i === 0 && st.algL[k]) || (i === N - 1 && st.algR[k]); if (isAlg) Phi[r] = i === 0 ? st.algLval[k] : st.algRval[k]; else Phi[r] = st.cN[r] * (Un[r] - Uold[r]) / dt - 0.5 * (st.Rhat[r] + stOld.Rhat[r]); }
        return Phi;
      };
      for (let it = 0; it < 8; it++) {
        const stN = await evalState(tnew, U); const Phi = await resid(U, stN);
        let nrm = 0; for (const v of Phi) nrm += v * v; if (Math.sqrt(nrm) < 1e-10) break;
        // numerical Jacobian (dense)
        const J = zeros(M, M);
        for (let j = 0; j < M; j++) { const dU = U.slice(); const h = 1e-7 * Math.max(1, Math.abs(U[j])); dU[j] += h; const stJ = await evalState(tnew, dU); const Pj = await resid(dU, stJ); for (let i = 0; i < M; i++) J.data[i + j * M] = (Pj[i] - Phi[i]) / h; }
        const delta = mldivide(J, colVec(Array.from(Phi))); for (let i = 0; i < M; i++) U[i] -= delta.data[i];
      }
      st0 = await evalState(tnew, U);
    }
    sol.push(U.slice());
  }
  // assemble: nt × nx (neq=1) or nt × nx × neq
  const nt = tspan.length;
  if (neq === 1) { const out = zeros(nt, N); for (let t = 0; t < nt; t++) for (let i = 0; i < N; i++) out.data[t + i * nt] = sol[t][i]; return [out]; }
  const data = new Float64Array(nt * N * neq); for (let t = 0; t < nt; t++) for (let i = 0; i < N; i++) for (let k = 0; k < neq; k++) data[t + i * nt + k * nt * N] = sol[t][i * neq + k];
  return [makeND([nt, N, neq], data)];
}
function mkStruct(fields: [string, Value][]): StructV { return { kind: 'struct', rows: 1, cols: 1, fields: new Map(fields.map(([k, v]) => [k, [v]])) }; }
/** Object-oriented ode solve: solve(F, t0, tf) | solve(F, tspan) → ODEResults {Time, Solution}. */
async function solveOde(a: Value[], env: Env): Promise<Value[]> {
  const F = a[0] as StructV; const fcn = F.fields.get('ODEFcn')![0]; const y0 = F.fields.get('InitialValue')![0];
  const t0v = F.fields.has('InitialTime') ? asScalar(F.fields.get('InitialTime')![0]) : 0;
  const solver = F.fields.has('Solver') ? asString(F.fields.get('Solver')![0]) : 'ode45';
  let tspan: Value;
  if (a.length >= 3) tspan = rowVec([asScalar(a[1]), asScalar(a[2])]);
  else if (a.length >= 2) tspan = isMat(a[1]) && numel(a[1]) >= 2 ? a[1] : rowVec([t0v, asScalar(a[1])]);
  else throw new MatError('solve: a time span (t0,tf) is required');
  const fn = (BUILTINS[solver] ?? BUILTINS.ode45);
  const [T, Y] = await fn([fcn, tspan, y0], 2, env);   // T: nt×1, Y: nt×neq
  const Ym = m(Y); const sol = zeros(Ym.cols, Ym.rows);   // Solution = neq×nt
  for (let r = 0; r < Ym.rows; r++) for (let c = 0; c < Ym.cols; c++) sol.data[c + r * Ym.cols] = Ym.data[r + c * Ym.rows];
  return [mkStruct([['Time', rowVec(toArray(m(T)))], ['Solution', sol]])];
}
/** bvp4c(odefun, bcfun, solinit): two-point BVP via trapezoidal collocation + Newton. */
/** ode15i(odefun, tspan, y0, yp0): fully-implicit ODE F(t,y,y')=0 via implicit Euler + Newton. */
async function ode15iSolve(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const odefun = handle(a[0], 'ode15i'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const yp0 = toArray(m(a[3])); void yp0;
  const neq = y0.length; const t0 = tspan[0], tf = tspan[tspan.length - 1]; const N = 300; const h = (tf - t0) / N;
  const F = async (t: number, y: number[], yp: number[]) => toArray(m((await env.callHandle(odefun, [scalar(t), colVec(y), colVec(yp)], 1))[0]));
  const T: number[] = [t0]; const Y: number[][] = [y0.slice()]; let y = y0.slice(); let t = t0;
  for (let step = 0; step < N; step++) {
    const t1 = t + h; const y1 = y.slice();
    for (let it = 0; it < 12; it++) {
      const G = await F(t1, y1, y1.map((v, i) => (v - y[i]) / h)); let nrm = 0; for (const v of G) nrm += v * v; if (Math.sqrt(nrm) < 1e-11) break;
      const J = zeros(neq, neq);
      for (let j = 0; j < neq; j++) { const yp = y1.slice(); const dd = 1e-7 * Math.max(1, Math.abs(y1[j])); yp[j] += dd; const Gp = await F(t1, yp, yp.map((v, i) => (v - y[i]) / h)); for (let i = 0; i < neq; i++) J.data[i + j * neq] = (Gp[i] - G[i]) / dd; }
      const dy = mldivide(J, colVec(G)); for (let i = 0; i < neq; i++) y1[i] -= dy.data[i];
    }
    y = y1; t = t1; T.push(t); Y.push(y.slice());
  }
  return odeOut(T, Y, neq, nargout);
}
async function bvp4cSolve(a: Value[], env: Env): Promise<Value[]> {
  const ode = handle(a[0], 'bvp4c'), bc = handle(a[1], 'bvp4c'); const init = a[2] as StructV;
  const opts = a.length >= 4 && isStruct(a[3]) ? (a[3] as StructV) : null;
  const optNum = (k: string, d: number): number => { const v = opts?.fields.get(k); return v && v.length && isMat(v[0]) ? asScalar(v[0]) : d; };
  const reltol = optNum('RelTol', 1e-3); const Nmax = Math.max(10, optNum('NMax', 2000));
  let x = toArray(m(init.fields.get('x')![0])); const Y0 = m(init.fields.get('y')![0]); const neq = Y0.rows;
  let U: Float64Array = new Float64Array(x.length * neq); for (let i = 0; i < x.length; i++) for (let k = 0; k < neq; k++) U[i * neq + k] = Y0.data[k + i * neq];
  const fAt = async (xi: number, y: number[]) => toArray(m((await env.callHandle(ode, [scalar(xi), colVec(y)], 1))[0]));

  // 4th-order Lobatto IIIa (Simpson) collocation Newton solve on a fixed mesh `xm`.
  const newton = async (xm: number[], V0: Float64Array): Promise<Float64Array> => {
    const M = xm.length; const sz = M * neq; const V = V0.slice();
    const residual = async (W: Float64Array) => {
      const F = new Float64Array(sz); const yv = (i: number) => Array.from({ length: neq }, (_, k) => W[i * neq + k]);
      const fs: number[][] = []; for (let i = 0; i < M; i++) fs.push(await fAt(xm[i], yv(i)));
      for (let i = 0; i < M - 1; i++) {
        const h = xm[i + 1] - xm[i]; const xc = (xm[i] + xm[i + 1]) / 2;
        const ym = Array.from({ length: neq }, (_, k) => 0.5 * (W[i * neq + k] + W[(i + 1) * neq + k]) + h / 8 * (fs[i][k] - fs[i + 1][k]));
        const fm = await fAt(xc, ym);
        for (let k = 0; k < neq; k++) F[i * neq + k] = W[(i + 1) * neq + k] - W[i * neq + k] - h / 6 * (fs[i][k] + 4 * fm[k] + fs[i + 1][k]);
      }
      const res = toArray(m((await env.callHandle(bc, [colVec(yv(0)), colVec(yv(M - 1))], 1))[0]));
      for (let k = 0; k < neq; k++) F[(M - 1) * neq + k] = res[k];
      return F;
    };
    for (let it = 0; it < 60; it++) {
      const F = await residual(V); let nrm = 0; for (const v of F) nrm += v * v; if (Math.sqrt(nrm) < 1e-10) break;
      const J = zeros(sz, sz);
      for (let j = 0; j < sz; j++) { const Vp = V.slice(); const h = 1e-7 * Math.max(1, Math.abs(V[j])); Vp[j] += h; const Fp = await residual(Vp); for (let i = 0; i < sz; i++) J.data[i + j * sz] = (Fp[i] - F[i]) / h; }
      const d = mldivide(J, colVec(Array.from(F))); for (let i = 0; i < sz; i++) V[i] -= d.data[i];
    }
    return V;
  };
  // Cubic-Hermite value of the current solution at xq (uses node derivatives fs).
  const hermite = (xm: number[], V: Float64Array, fs: number[][], xq: number): number[] => {
    let i = 0; while (i < xm.length - 2 && xq > xm[i + 1]) i++;
    const h = xm[i + 1] - xm[i] || 1; const s = (xq - xm[i]) / h;
    const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
    return Array.from({ length: neq }, (_, k) => h00 * V[i * neq + k] + h10 * h * fs[i][k] + h01 * V[(i + 1) * neq + k] + h11 * h * fs[(i + 1)][k]);
  };

  // Adaptive loop: solve, estimate per-interval defect via the cubic interpolant, bisect
  // intervals whose scaled defect exceeds RelTol, re-interpolate as the next guess.
  for (let pass = 0; pass < 12; pass++) {
    U = await newton(x, U);
    const fs: number[][] = []; for (let i = 0; i < x.length; i++) fs.push(await fAt(x[i], Array.from({ length: neq }, (_, k) => U[i * neq + k])));
    if (x.length * 2 - 1 > Nmax) break;
    const flag: boolean[] = new Array(x.length - 1).fill(false); let any = false;
    // Sample the collocation defect r = S' − f(x,S) at the 2-point Gauss nodes (NOT the
    // midpoint — Simpson collocation forces the defect to zero there by construction).
    const g = 1 / (2 * Math.sqrt(3)); const SS = [0.5 - g, 0.5 + g];
    for (let i = 0; i < x.length - 1; i++) {
      const h = x[i + 1] - x[i];
      for (const s of SS) {
        const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
        const d00 = 6 * s ** 2 - 6 * s, d10 = 3 * s ** 2 - 4 * s + 1, d01 = -6 * s ** 2 + 6 * s, d11 = 3 * s ** 2 - 2 * s;
        const yv: number[] = [], yd: number[] = [];
        for (let k = 0; k < neq; k++) {
          const y0 = U[i * neq + k], y1 = U[(i + 1) * neq + k], f0 = fs[i][k], f1 = fs[i + 1][k];
          yv.push(h00 * y0 + h10 * h * f0 + h01 * y1 + h11 * h * f1);
          yd.push((d00 * y0 + d01 * y1) / h + d10 * f0 + d11 * f1);
        }
        const fc = await fAt(x[i] + s * h, yv);
        let d = 0, scale = 1; for (let k = 0; k < neq; k++) { d = Math.max(d, Math.abs(yd[k] - fc[k])); scale = Math.max(scale, Math.abs(fc[k])); }
        if (d / scale > reltol) { flag[i] = true; any = true; }
      }
    }
    if (!any) break;
    const nx: number[] = [x[0]];
    for (let i = 0; i < x.length - 1; i++) { if (flag[i] && nx.length < Nmax - 1) nx.push((x[i] + x[i + 1]) / 2); nx.push(x[i + 1]); }
    const newU = new Float64Array(nx.length * neq);
    for (let p = 0; p < nx.length; p++) { const yv = hermite(x, U, fs, nx[p]); for (let k = 0; k < neq; k++) newU[p * neq + k] = yv[k]; }
    x = nx; U = newU;
  }

  const M = x.length; const Yout = zeros(neq, M), Ypout = zeros(neq, M);
  for (let i = 0; i < M; i++) { const yi = Array.from({ length: neq }, (_, k) => U[i * neq + k]); const fi = await fAt(x[i], yi); for (let k = 0; k < neq; k++) { Yout.data[k + i * neq] = yi[k]; Ypout.data[k + i * neq] = fi[k]; } }
  return [mkStruct([['solver', str('bvp4c')], ['x', rowVec(x)], ['y', Yout], ['yp', Ypout]])];
}
/** dde23(ddefun, lags, history, tspan): delay ODEs via fixed-step RK4 with dense interpolation. */
async function dde23Solve(a: Value[], env: Env): Promise<Value[]> {
  const ddefun = handle(a[0], 'dde23'); const lags = toArray(m(a[1])); const histArg = a[2]; const tspan = toArray(m(a[3]));
  const t0 = tspan[0], tf = tspan[tspan.length - 1];
  const histAt = async (t: number) => isHandle(histArg) ? toArray(m((await env.callHandle(histArg as Handle, [scalar(t)], 1))[0])) : toArray(m(histArg));
  const neq = (await histAt(t0)).length;
  const ts: number[] = [t0]; const ys: number[][] = [await histAt(t0)];
  const yAt = async (t: number): Promise<number[]> => {
    if (t <= t0) return histAt(t);
    if (t >= ts[ts.length - 1]) return ys[ys.length - 1];
    let i = 0; while (i < ts.length - 1 && ts[i + 1] < t) i++; const h = ts[i + 1] - ts[i] || 1; const r = (t - ts[i]) / h;
    return ys[i].map((v, k) => v + r * (ys[i + 1][k] - v));
  };
  const f = async (t: number, y: number[]): Promise<number[]> => {
    const Z = zeros(neq, lags.length); for (let j = 0; j < lags.length; j++) { const zc = await yAt(t - lags[j]); for (let k = 0; k < neq; k++) Z.data[k + j * neq] = zc[k]; }
    return toArray(m((await env.callHandle(ddefun, [scalar(t), colVec(y), Z], 1))[0]));
  };
  const N = 500; const dt = (tf - t0) / N; let y = ys[0].slice(); let t = t0;
  for (let step = 0; step < N; step++) {
    const k1 = await f(t, y); const k2 = await f(t + dt / 2, y.map((v, i) => v + dt / 2 * k1[i]));
    const k3 = await f(t + dt / 2, y.map((v, i) => v + dt / 2 * k2[i])); const k4 = await f(t + dt, y.map((v, i) => v + dt * k3[i]));
    y = y.map((v, i) => v + dt / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])); t += dt; ts.push(t); ys.push(y.slice());
  }
  const Yout = zeros(neq, ts.length); for (let i = 0; i < ts.length; i++) for (let k = 0; k < neq; k++) Yout.data[k + i * neq] = ys[i][k];
  return [mkStruct([['solver', str('dde23')], ['x', rowVec(ts)], ['y', Yout]])];
}
function odeOut(T: number[], Y: number[][], neq: number, nargout: number): Value[] {
  const Ymat = zeros(T.length, neq); for (let r = 0; r < T.length; r++) for (let c = 0; c < neq; c++) Ymat.data[r + c * T.length] = Y[r][c];
  return nargout >= 2 ? [colVec(T), Ymat] : [Ymat];
}
/** Numerical Jacobian ∂f/∂y by forward differences. */
async function numJac(evalF: (t: number, y: number[]) => Promise<number[]>, t: number, y: number[], f0: number[], neq: number): Promise<Mat> {
  const J = zeros(neq, neq);
  for (let j = 0; j < neq; j++) {
    const dy = Math.sqrt(2.220446049250313e-16) * Math.max(Math.abs(y[j]), 1e-3);
    const yp = y.slice(); yp[j] += dy;
    const fp = await evalF(t, yp);
    for (let i = 0; i < neq; i++) J.data[i + j * neq] = (fp[i] - f0[i]) / dy;
  }
  return J;
}
const vsolve = (W: Mat, rhs: number[]): number[] => toArray(mldivide(W, colVec(rhs)));

/** ode23 — Bogacki–Shampine (2,3) explicit RK pair (FSAL), nonstiff. */
async function odeSolveBS23(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode23'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let k1 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, k1, relTol, absTol, neq, dir, hMax, span);
  const SAFE = 0.9, EXP = 1 / 3; let steps = 0;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 1e6) throw new MatError('ode23: too many steps');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t;
    const k2 = await evalF(t + 0.5 * h, y.map((v, i) => v + 0.5 * h * k1[i]));
    const k3 = await evalF(t + 0.75 * h, y.map((v, i) => v + 0.75 * h * k2[i]));
    const ynew = y.map((v, i) => v + h * (2 / 9 * k1[i] + 1 / 3 * k2[i] + 4 / 9 * k3[i]));
    const k4 = await evalF(t + h, ynew);
    let err = 0;
    for (let i = 0; i < neq; i++) { const e = h * (-5 / 72 * k1[i] + 1 / 12 * k2[i] + 1 / 9 * k3[i] - 1 / 8 * k4[i]); const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (e / sc) ** 2; }
    err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) { const s = (wantPoints[nextWant] - t) / h; Y.push(hermiteStep(y, ynew, k1, k4, h, s)); T.push(wantPoints[nextWant]); nextWant++; }
      else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; k1 = k4; // FSAL
    }
    const fac = err === 0 ? 5 : Math.min(5, Math.max(0.2, SAFE * err ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode23: step size underflow (problem may be stiff — try ode15s/ode23s)');
  }
  return odeOut(T, Y, neq, nargout);
}

/** ode23s — modified Rosenbrock (2,3) pair, L-stable, for stiff problems. */
async function odeSolveRos23(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode23s'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const d = 1 / (2 + Math.SQRT2), e32 = 6 + Math.SQRT2;
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let F0 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, F0, relTol, absTol, neq, dir, hMax, span);
  let steps = 0; const SAFE = 0.9, EXP = 1 / 3;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 1e6) throw new MatError('ode23s: too many steps');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t;
    const J = await numJac(evalF, t, y, F0, neq);
    const dt = Math.sqrt(2.220446049250313e-16) * (Math.abs(t) + 1) * dir;
    const Ft = await evalF(t + dt, y); const Tt = F0.map((v, i) => (Ft[i] - v) / dt); // ∂f/∂t
    const W = zeros(neq, neq); for (let c = 0; c < neq; c++) for (let r = 0; r < neq; r++) W.data[r + c * neq] = (r === c ? 1 : 0) - h * d * J.data[r + c * neq];
    const k1 = vsolve(W, F0.map((v, i) => v + h * d * Tt[i]));
    const F1 = await evalF(t + 0.5 * h, y.map((v, i) => v + 0.5 * h * k1[i]));
    const k2raw = vsolve(W, F1.map((v, i) => v - k1[i])); const k2 = k2raw.map((v, i) => v + k1[i]);
    const ynew = y.map((v, i) => v + h * k2[i]);
    const F2 = await evalF(t + h, ynew);
    const k3 = vsolve(W, F2.map((v, i) => v - e32 * (k2[i] - F1[i]) - 2 * (k1[i] - F0[i]) + h * d * Tt[i]));
    let err = 0;
    for (let i = 0; i < neq; i++) { const e = (h / 6) * (k1[i] - 2 * k2[i] + k3[i]); const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (e / sc) ** 2; }
    err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) { const s = (wantPoints[nextWant] - t) / h; Y.push(y.map((yi, i) => yi + h * (s * (1 - s) / (1 - 2 * d) * k1[i] + s * (s - 2 * d) / (1 - 2 * d) * k2[i]))); T.push(wantPoints[nextWant]); nextWant++; }
      else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; F0 = F2; // FSAL
    }
    const fac = err === 0 ? 5 : Math.min(5, Math.max(0.2, SAFE * err ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode23s: step size underflow');
  }
  return odeOut(T, Y, neq, nargout);
}

const NDF_KAPPA = [0, -0.1850, -1 / 9, -0.0823, -0.0415, 0];
/** ode15s — variable-order (1–5) NDF stiff solver in backward-difference form. */
async function odeSolveNDF(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode15s'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const maxk = Math.min(5, (a[3] && isStruct(a[3]) && a[3].fields.get('MaxOrder')?.[0] && isMat(a[3].fields.get('MaxOrder')![0]) ? Math.round(asScalar(a[3].fields.get('MaxOrder')![0])) : 5));
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const G = [0, 1, 1.5, 1 + 1 / 2 + 1 / 3, 0, 0]; G[4] = G[3] + 1 / 4; G[5] = G[4] + 1 / 5; // γ_k
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let f0 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, f0, relTol, absTol, neq, dir, hMax, span);
  let k = 1;
  // dif[j] = ∇^j y (j = 1..k+1); seed first difference ≈ h·y'.
  const dif: number[][] = Array.from({ length: maxk + 2 }, () => new Array(neq).fill(0));
  dif[1] = f0.map((v) => v * h);
  let J = await numJac(evalF, t, y, f0, neq);
  let steps = 0, nReject = 0, nAccept = 0;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 2e6) throw new MatError('ode15s: too many steps');
    let hStep = h; if (dir * (t + hStep - tEnd) > 0) hStep = tEnd - t;
    if (hStep !== h) { rescaleDif(dif, k, hStep / h, neq); h = hStep; }
    const alpha = (1 - NDF_KAPPA[k]) * G[k];
    const c = h / alpha;
    // predictor y^(0) = Σ_{m=0}^k ∇^m y_n ; Ψ = (1/alpha) Σ γ_m ∇^m
    const ypred = y.slice(); const psi = new Array(neq).fill(0);
    for (let j = 1; j <= k; j++) for (let i = 0; i < neq; i++) { ypred[i] += dif[j][i]; psi[i] += G[j] * dif[j][i] / alpha; }
    // Iteration matrix M = I - c J
    const M = zeros(neq, neq); for (let cc = 0; cc < neq; cc++) for (let rr = 0; rr < neq; rr++) M.data[rr + cc * neq] = (rr === cc ? 1 : 0) - c * J.data[rr + cc * neq];
    // Simplified Newton for ynew; d accumulates ∇^{k+1} y_{n+1}
    let ynew = ypred.slice(); const dacc = new Array(neq).fill(0); let converged = false, prevNorm = Infinity;
    for (let it = 0; it < 12; it++) {
      const Fv = await evalF(t + h, ynew);
      const rhs = new Array(neq); for (let i = 0; i < neq; i++) rhs[i] = c * Fv[i] - psi[i] - (ynew[i] - ypred[i]);
      const delta = vsolve(M, rhs);
      let dn = 0; for (let i = 0; i < neq; i++) { ynew[i] += delta[i]; dacc[i] += delta[i]; const sc = absTol + relTol * Math.abs(ynew[i]); dn += (delta[i] / sc) ** 2; }
      dn = Math.sqrt(dn / (neq || 1));
      if (dn < 1e-3) { converged = true; break; }
      if (it > 0 && dn > prevNorm) break; // diverging
      prevNorm = dn;
    }
    if (!converged) { nAccept = 0; if (k > 1) k--; rescaleDif(dif, k, 0.5, neq); h *= 0.5; if (Math.abs(h) < 1e-13 * Math.max(1, Math.abs(t))) throw new MatError('ode15s: step size underflow'); continue; }
    // Local error ∝ (κγ_k + 1/(k+1)) ∇^{k+1}y
    const errc = NDF_KAPPA[k] * G[k] + 1 / (k + 1);
    let err = 0; for (let i = 0; i < neq; i++) { const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (errc * dacc[i] / sc) ** 2; } err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      // commit difference table: ∇^{k+1}=dacc, then ∇^j += ∇^{j+1}
      dif[k + 1] = dacc.slice(); for (let j = k; j >= 1; j--) for (let i = 0; i < neq; i++) dif[j][i] += dif[j + 1][i];
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) {
        // Newton backward-difference interpolant about t_{n+1}: y(t_{n+1}+sh)=Σ C(s) ∇^j y_{n+1}.
        const s = (wantPoints[nextWant] - tNew) / h; const yi = ynew.slice(); let coef = 1;
        for (let j = 1; j <= k; j++) { coef *= (s + j - 1) / j; for (let i = 0; i < neq; i++) yi[i] += coef * dif[j][i]; }
        Y.push(yi); T.push(wantPoints[nextWant]); nextWant++;
      } else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; f0 = await evalF(t, y);
      nReject = 0; nAccept++;
      // Step growth from the order-(k) error estimate.
      const fac = err === 0 ? 10 : Math.min(10, Math.max(0.2, 0.9 * err ** (-1 / (k + 1))));
      // Ramp the order up to maxk on smooth progress (cold-start ramp); rejects pull it back.
      if (k < maxk && nAccept >= 1) k++;
      const hNew = dir * Math.min(Math.abs(h * fac), hMax, span);
      rescaleDif(dif, k, hNew / h, neq); // differences must follow every step-size change (D*=D·R·U)
      h = hNew;
      J = await numJac(evalF, t, y, f0, neq); // ode15s here refreshes the Jacobian each step
    } else {
      nReject++; nAccept = 0; const fac = Math.max(0.25, 0.9 * err ** (-1 / (k + 1)));
      if (nReject >= 2 && k > 1) { k--; }
      rescaleDif(dif, k, fac, neq); h = dir * Math.min(Math.abs(h * fac), hMax, span);
      if (Math.abs(h) < 1e-13 * Math.max(1, Math.abs(t))) throw new MatError('ode15s: step size underflow');
    }
  }
  return odeOut(T, Y, neq, nargout);
}
/** Rescale the backward-difference table for a step-size ratio rho = hnew/h (D* = D·R·U). */
function rescaleDif(dif: number[][], k: number, rho: number, neq: number): void {
  if (rho === 1 || k < 1) return;
  // U: U[m][r] = (-1)? integer matrix with U²=I; R[m][r] from products. Build (k×k) M = R·U.
  const R = mat2d(k, k), U = mat2d(k, k);
  for (let r = 1; r <= k; r++) { let pr = 1, pu = 1; for (let j = 1; j <= k; j++) { pr *= (j - 1 - r * rho); pu *= (j - 1 - r); R[j - 1][r - 1] = pr / fact(j); U[j - 1][r - 1] = pu / fact(j); } }
  // RU[j][r] = Σ_m R[j][m] U[m][r]
  const RU = mat2d(k, k); for (let j = 0; j < k; j++) for (let r = 0; r < k; r++) { let s = 0; for (let mm = 0; mm < k; mm++) s += R[j][mm] * U[mm][r]; RU[j][r] = s; }
  const old = dif.map((col) => col.slice());
  for (let r = 1; r <= k; r++) for (let i = 0; i < neq; i++) { let s = 0; for (let j = 1; j <= k; j++) s += old[j][i] * RU[j - 1][r - 1]; dif[r][i] = s; }
}
const mat2d = (r: number, c: number): number[][] => Array.from({ length: r }, () => new Array(c).fill(0));
const fact = (n: number): number => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; };
/** Hairer initial-step heuristic (shared by the new solvers). */
function initStep(y: number[], f0: number[], relTol: number, absTol: number, neq: number, dir: number, hMax: number, span: number): number {
  const sc = y.map((yi) => absTol + relTol * Math.abs(yi));
  const d0 = Math.hypot(...y.map((yi, j) => yi / sc[j])) / Math.sqrt(neq || 1);
  const d1 = Math.hypot(...f0.map((fi, j) => fi / sc[j])) / Math.sqrt(neq || 1);
  const h = (d0 < 1e-5 || d1 < 1e-5 ? 1e-6 : 0.01 * (d0 / d1)) * dir;
  return dir * Math.min(Math.abs(h), hMax, span);
}
/** Cubic-Hermite value at fraction s using endpoint values/slopes (for BS23 dense output). */
function hermiteStep(y0: number[], y1: number[], f0: number[], f1: number[], h: number, s: number): number[] {
  const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
  return y0.map((_, i) => h00 * y0[i] + h10 * h * f0[i] + h01 * y1[i] + h11 * h * f1[i]);
}

/** Numeric constants exposed as bare identifiers. */
export const CONSTANTS: Record<string, () => Value> = {
  pi: () => scalar(Math.PI),
  e: () => scalar(Math.E),
  eps: () => scalar(Number.EPSILON),
  Inf: () => scalar(Infinity), inf: () => scalar(Infinity),
  NaN: () => scalar(NaN), nan: () => scalar(NaN),
  true: () => bool(true), false: () => bool(false),
  realmax: () => scalar(Number.MAX_VALUE), realmin: () => scalar(Number.MIN_VALUE),
  i: () => cscalar(0, 1), j: () => cscalar(0, 1),
  newline: () => str('\n'),
  eulergamma: () => scalar(0.5772156649015329),
  catalan: () => scalar(0.915965594177219),
};
