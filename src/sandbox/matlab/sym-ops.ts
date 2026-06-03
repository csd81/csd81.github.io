/**
 * Symbolic Math helpers — the CAS-level operations that back the symbolic builtins
 * (`sym-builtins.ts`) and the symbolic branch of the polymorphic builtins in
 * `builtins.ts`. Pure functions over `SymExpr`/`Sym`; no dependency on the builtin
 * registry, so numeric and symbolic worlds stay decoupled.
 */
import {
  type Value, type Mat, type Sym, isSym, isStr, isMat, isCell,
  makeSym, asString, asScalar, toMat as m, factorialN,
} from './values';
import {
  type SymExpr, sN, sV, sAdd, sSub, sMul, sPow, sFn, sNeg, sDiv,
  simplifyExpr, diffExpr, subsExpr, evalExpr as symEval, symVars,
} from './sym';
import { durandKerner } from './linalg';

export function polyCoeffs(e: SymExpr, v: string): number[] {
  const c: number[] = []; let term = e; let fact = 1; let deg = 0;
  for (let k = 0; k <= 12; k++) { const cv = symEval(term, new Map([[v, 0]])); c[k] = cv / fact; if (Math.abs(c[k]) > 1e-12) deg = k; term = simplifyExpr(diffExpr(term, v)); fact *= (k + 1); }
  return c.slice(0, deg + 1);
}
/** Split an expression into numerator / denominator (denominator = product of negative powers). */
export function numDen(e: SymExpr): { num: SymExpr; den: SymExpr } {
  const s = simplifyExpr(e);
  if (s.t === 'mul') { const num: SymExpr[] = [], den: SymExpr[] = []; for (const f of s.args) { if (f.t === 'pow' && f.exp.t === 'n' && f.exp.v < 0) den.push(sPow(f.base, sN(-f.exp.v))); else num.push(f); } return { num: num.length ? sMul(...num) : sN(1), den: den.length ? sMul(...den) : sN(1) }; }
  if (s.t === 'pow' && s.exp.t === 'n' && s.exp.v < 0) return { num: sN(1), den: sPow(s.base, sN(-s.exp.v)) };
  return { num: s, den: sN(1) };
}

export function symDet(e: SymExpr[], n: number): SymExpr {
  if (n === 1) return e[0];
  if (n === 2) return sSub(sMul(e[0], e[3]), sMul(e[2], e[1]));
  let acc: SymExpr = sN(0);
  for (let j = 0; j < n; j++) {
    const minor: SymExpr[] = new Array((n - 1) * (n - 1)); let nc = 0;
    for (let c = 0; c < n; c++) { if (c === j) continue; for (let r = 1; r < n; r++) minor[(r - 1) + nc * (n - 1)] = e[r + c * n]; nc++; }
    acc = sAdd(acc, sMul(sN(j % 2 === 0 ? 1 : -1), e[0 + j * n], symDet(minor, n - 1)));
  }
  return acc;
}
/** Symbolic matrix inverse via adjugate / determinant. */
export function symInv(s: Sym): Sym {
  const n = s.rows; const d = symDet(s.exprs, n); const out: SymExpr[] = new Array(n * n);
  const minorDet = (ri: number, ci: number): SymExpr => { const minor: SymExpr[] = new Array((n - 1) * (n - 1)); let nc = 0; for (let c = 0; c < n; c++) { if (c === ci) continue; let nr = 0; for (let r = 0; r < n; r++) { if (r === ri) continue; minor[nr + nc * (n - 1)] = s.exprs[r + c * n]; nr++; } nc++; } return symDet(minor, n - 1); };
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) out[i + j * n] = simplifyExpr(sMul(sN((i + j) % 2 === 0 ? 1 : -1), minorDet(j, i), sPow(d, sN(-1))));   // adjugate transpose / det
  return makeSym(n, n, out);
}
/** Characteristic-polynomial coefficients (highest power first) of a symbolic matrix. */
export function symCharpolyCoeffs(e: SymExpr[], n: number): SymExpr[] {
  const L = '__l'; const M: SymExpr[] = e.map((x, i) => { const r = i % n, c = Math.floor(i / n); return r === c ? sSub(sV(L), x) : sNeg(x); });
  const detL = simplifyExpr(symDet(M, n));
  const c = polyCoeffs(detL, L);   // ascending numeric coeffs (works for numeric matrices)
  if (c.some((x) => !Number.isFinite(x))) return [detL];   // symbolic entries → return the polynomial expression
  return c.slice().reverse().map(sN);
}
export function symArg(v: Value): Sym { if (isSym(v)) return v; const M = m(v); return makeSym(M.rows, M.cols, Array.from(M.data, (x) => sN(x))); }
export function symToExpr(v: Value): SymExpr { if (isSym(v)) return v.exprs[0]; if (isStr(v) || (isMat(v) && (v as Mat).isChar)) { const t = asString(v).trim(); const num = Number(t); return Number.isFinite(num) && /^[-\d.]+$/.test(t) ? sN(num) : sV(t); } return sN(asScalar(v)); }
export function symVarsOf(s: Sym): string[] { const set = new Set<string>(); for (const e of s.exprs) symVars(e).forEach((x) => set.add(x)); return [...set].sort(); }
/** Resolve (independent, transform) variables for an integral-transform call.
 *  f(a)→default vars; f(a,trans); f(a,indep,trans). */
export function transformVars(a: Value[], defIndep: string, defTrans: string): { s: Sym; indep: string; trans: string } {
  const s = symArg(a[0]); const vars = symVarsOf(s);
  const nameOf = (v: Value): string => isSym(v) ? (symVarsOf(v)[0] ?? defIndep) : asString(v);
  let indep = vars.includes(defIndep) ? defIndep : (vars[0] ?? defIndep);
  let trans = defTrans;
  if (a.length === 2) trans = nameOf(a[1]);
  else if (a.length >= 3) { indep = nameOf(a[1]); trans = nameOf(a[2]); }
  return { s, indep, trans };
}
export function symNames(v: Value): string[] { if (isSym(v)) return v.exprs.map((e) => (e.t === 'v' ? e.name : symVars(e)[0] ?? 'x')); if (isCell(v)) return v.items.map((x) => asString(x)); if (isStr(v)) return v.items.slice(); return [asString(v)]; }
/** Basic symbolic integration: linearity + xⁿ, 1/x, sin/cos/exp of the variable. */
export function integrate(e: SymExpr, x: string): SymExpr {
  e = simplifyExpr(e);
  if (e.t === 'add') return sAdd(...e.args.map((a) => integrate(a, x)));
  if (e.t === 'mul') { const consts = e.args.filter((a) => symVars(a).indexOf(x) < 0); const rest = e.args.filter((a) => symVars(a).indexOf(x) >= 0); if (consts.length && rest.length) return sMul(sMul(...consts), integrate(rest.length === 1 ? rest[0] : sMul(...rest), x)); }
  if (symVars(e).indexOf(x) < 0) return sMul(e, sV(x));                                  // constant → c·x
  if (e.t === 'v' && e.name === x) return sMul(sN(0.5), sPow(sV(x), sN(2)));
  if (e.t === 'pow' && e.base.t === 'v' && e.base.name === x && e.exp.t === 'n') { const n = e.exp.v; return n === -1 ? sFn('log', sV(x)) : sMul(sN(1 / (n + 1)), sPow(sV(x), sN(n + 1))); }
  if (e.t === 'fn' && e.args[0].t === 'v' && e.args[0].name === x) {
    if (e.name === 'sin') return sNeg(sFn('cos', sV(x)));
    if (e.name === 'cos') return sFn('sin', sV(x));
    if (e.name === 'exp') return sFn('exp', sV(x));
  }
  return sFn('int', e);   // unevaluated
}
/** Limit by substitution; one round of L'Hôpital for 0/0. */
export function limitAt(e: SymExpr, x: string, pt: SymExpr): SymExpr {
  const p = symEval(pt, new Map()); const env = new Map([[x, p]]);
  const v = symEval(e, env); if (Number.isFinite(v)) return sN(v);
  // L'Hôpital for f/g → f'/g' if both → 0
  if (e.t === 'mul') { const inv = e.args.find((a) => a.t === 'pow' && a.exp.t === 'n' && a.exp.v < 0); const num = e.args.filter((a) => a !== inv); if (inv) { const g = (inv as { base: SymExpr }).base; const f = num.length === 1 ? num[0] : sMul(...num); const fp = symEval(f, env), gp = symEval(g, env); if (Math.abs(fp) < 1e-9 && Math.abs(gp) < 1e-9) { const lv = symEval(sMul(diffExpr(f, x), sPow(diffExpr(g, x), sN(-1))), env); if (Number.isFinite(lv)) return sN(lv); } } }
  return sFn('limit', e);
}
/** Solve p(x)=0 for polynomials up to degree 4 (numeric roots → symbolic numbers). */
export function solveExpr(e: SymExpr, x: string): SymExpr[] {
  // extract polynomial coefficients via Taylor at 0: c_k = p^(k)(0)/k!
  const coeffs: number[] = []; let term = e; let fact = 1; let deg = -1;
  for (let k = 0; k <= 8; k++) { const c = symEval(term, new Map([[x, 0]])); if (!Number.isFinite(c)) return [sFn('solve', e)]; coeffs[k] = c / fact; if (Math.abs(coeffs[k]) > 1e-12) deg = k; term = simplifyExpr(diffExpr(term, x)); fact *= (k + 1); }
  if (deg < 0) return [];
  const p = coeffs.slice(0, deg + 1).reverse();   // highest power first
  const { re, im } = durandKerner(p);
  return re.map((r, i) => (Math.abs(im[i]) < 1e-9 ? sN(Math.abs(r - Math.round(r)) < 1e-9 ? Math.round(r) : r) : sFn('complex', sN(r), sN(im[i]))));
}
/** Distribute products over sums (expand). */
export function expandExpr(e: SymExpr): SymExpr {
  if (e.t === 'n' || e.t === 'v') return e;
  if (e.t === 'fn') return sFn(e.name, ...e.args.map(expandExpr));
  if (e.t === 'add') return sAdd(...e.args.map(expandExpr));
  if (e.t === 'pow') { const base = expandExpr(e.base); if (e.exp.t === 'n' && Number.isInteger(e.exp.v) && e.exp.v > 1 && e.exp.v <= 8) { let acc: SymExpr = base; for (let k = 1; k < e.exp.v; k++) acc = expandExpr(sMul(acc, base)); return acc; } return sPow(base, e.exp); }
  // mul: distribute
  const factors = e.args.map(expandExpr); let terms: SymExpr[] = [sN(1)];
  for (const f of factors) { const fterms = f.t === 'add' ? f.args : [f]; const next: SymExpr[] = []; for (const t of terms) for (const ft of fterms) next.push(sMul(t, ft)); terms = next; }
  return sAdd(...terms);
}

// ── Integral transforms (table-based symbolic Laplace / Fourier / Z) ──────────
const symHasVar = (e: SymExpr, t: string): boolean => symVars(e).includes(t);
const isZeroE = (e: SymExpr): boolean => { const s = simplifyExpr(e); return s.t === 'n' && Math.abs(s.v) < 1e-12; };
const round0 = (x: number): number => (Math.abs(x - Math.round(x)) < 1e-9 ? Math.round(x) : x);
/** If e is linear in t (e = a·t + b, a,b free of t) return {a,b}; else null. */
function linearInT(e: SymExpr, t: string): { a: SymExpr; b: SymExpr } | null {
  const a = simplifyExpr(diffExpr(e, t));
  if (symHasVar(a, t)) return null;
  return { a, b: simplifyExpr(subsExpr(e, t, sN(0))) };
}

/** Laplace transform of a single product term (no top-level sum). */
function laplaceTerm(e: SymExpr, t: string, s: string): SymExpr {
  e = simplifyExpr(e);
  const factors = e.t === 'mul' ? e.args : [e];
  const coef: SymExpr[] = []; let tpow = 0; let expA: SymExpr | null = null; const core: SymExpr[] = [];
  for (const f of factors) {
    if (!symHasVar(f, t)) { coef.push(f); continue; }
    if (f.t === 'v' && f.name === t) { tpow += 1; continue; }
    if (f.t === 'pow' && f.base.t === 'v' && f.base.name === t && f.exp.t === 'n' && Number.isInteger(f.exp.v) && f.exp.v > 0) { tpow += f.exp.v; continue; }
    if (f.t === 'fn' && f.name === 'exp' && f.args.length === 1) { const lin = linearInT(f.args[0], t); if (lin) { expA = expA ? simplifyExpr(sAdd(expA, lin.a)) : lin.a; if (!isZeroE(lin.b)) coef.push(sFn('exp', lin.b)); continue; } }
    core.push(f);
  }
  let F = laplaceCore(core.length ? simplifyExpr(sMul(...core)) : sN(1), t, s);
  if (expA && !isZeroE(expA)) F = subsExpr(F, s, sSub(sV(s), expA));
  for (let i = 0; i < tpow; i++) F = sNeg(diffExpr(F, s));
  F = simplifyExpr(F);
  return coef.length ? simplifyExpr(sMul(sMul(...coef), F)) : F;
}
/** Laplace transform table for a "core" factor (1, trig, hyperbolic, dirac, heaviside). */
function laplaceCore(core: SymExpr, t: string, s: string): SymExpr {
  const S = sV(s); core = simplifyExpr(core);
  if (!symHasVar(core, t)) return sMul(core, sPow(S, sN(-1)));   // L{c} = c/s
  if (core.t === 'fn' && core.args.length === 1) {
    const lin = linearInT(core.args[0], t); const s2 = sMul(S, S);
    if (lin && isZeroE(lin.b)) { const a = lin.a, a2 = sMul(a, a);
      if (core.name === 'sin') return sDiv(a, sAdd(s2, a2));
      if (core.name === 'cos') return sDiv(S, sAdd(s2, a2));
      if (core.name === 'sinh') return sDiv(a, sSub(s2, a2));
      if (core.name === 'cosh') return sDiv(S, sSub(s2, a2));
    }
    if (core.name === 'dirac' && lin && isZeroE(lin.b)) return sN(1);
    if (core.name === 'heaviside' && lin && isZeroE(lin.b)) return sPow(S, sN(-1));
  }
  return sFn('laplace', core, sV(t), S);   // unevaluated
}
export function laplaceExpr(e: SymExpr, t: string, s: string): SymExpr {
  e = simplifyExpr(expandExpr(e));
  if (e.t === 'add') return simplifyExpr(sAdd(...e.args.map((a) => laplaceTerm(a, t, s))));
  return laplaceTerm(e, t, s);
}

/** Z-transform of a single product term. */
function ztransTerm(e: SymExpr, n: string, z: string): SymExpr {
  e = simplifyExpr(e);
  const factors = e.t === 'mul' ? e.args : [e];
  const coef: SymExpr[] = []; let npow = 0; let aBase: SymExpr | null = null; const core: SymExpr[] = [];
  for (const f of factors) {
    if (!symHasVar(f, n)) { coef.push(f); continue; }
    if (f.t === 'v' && f.name === n) { npow += 1; continue; }
    if (f.t === 'pow' && f.base.t === 'v' && f.base.name === n && f.exp.t === 'n' && Number.isInteger(f.exp.v) && f.exp.v > 0) { npow += f.exp.v; continue; }
    if (f.t === 'pow' && !symHasVar(f.base, n)) { const lin = linearInT(f.exp, n); if (lin) { aBase = aBase ? simplifyExpr(sMul(aBase, sPow(f.base, lin.a))) : sPow(f.base, lin.a); if (!isZeroE(lin.b)) coef.push(sPow(f.base, lin.b)); continue; } }
    if (f.t === 'fn' && f.name === 'exp' && f.args.length === 1) { const lin = linearInT(f.args[0], n); if (lin) { aBase = aBase ? simplifyExpr(sMul(aBase, sFn('exp', lin.a))) : sFn('exp', lin.a); if (!isZeroE(lin.b)) coef.push(sFn('exp', lin.b)); continue; } }
    core.push(f);
  }
  let F = ztransCore(core.length ? simplifyExpr(sMul(...core)) : sN(1), n, z);
  if (aBase && !isZeroE(sSub(aBase, sN(1)))) F = subsExpr(F, z, sDiv(sV(z), aBase));   // Z{aⁿf} = F(z/a)
  for (let i = 0; i < npow; i++) F = sNeg(sMul(sV(z), diffExpr(F, z)));                 // Z{n·f} = -z F'(z)
  F = simplifyExpr(F);
  return coef.length ? simplifyExpr(sMul(sMul(...coef), F)) : F;
}
function ztransCore(core: SymExpr, n: string, z: string): SymExpr {
  const Z = sV(z); core = simplifyExpr(core);
  if (!symHasVar(core, n)) return sMul(core, sDiv(Z, sSub(Z, sN(1))));   // Z{c} = c·z/(z-1)
  if (core.t === 'fn' && core.args.length === 1) {
    const lin = linearInT(core.args[0], n);
    if (lin && isZeroE(lin.b)) { const a = lin.a; const den = sAdd(sMul(Z, Z), sMul(sN(-2), Z, sFn('cos', a)), sN(1));
      if (core.name === 'sin') return sDiv(sMul(Z, sFn('sin', a)), den);
      if (core.name === 'cos') return sDiv(sMul(Z, sSub(Z, sFn('cos', a))), den);
    }
    if (core.name === 'kroneckerDelta' && lin && isZeroE(lin.b)) return sN(1);
  }
  return sFn('ztrans', core, sV(n), Z);
}
export function ztransExpr(e: SymExpr, n: string, z: string): SymExpr {
  e = simplifyExpr(expandExpr(e));
  if (e.t === 'add') return simplifyExpr(sAdd(...e.args.map((a) => ztransTerm(a, n, z))));
  return ztransTerm(e, n, z);
}

/** Complex Horner evaluation (coefficients highest-first). */
function cPolyval(c: number[], xr: number, xi: number): [number, number] { let r = 0, i = 0; for (const cc of c) { const nr = r * xr - i * xi + cc, ni = r * xi + i * xr; r = nr; i = ni; } return [r, i]; }
function polyDerivHi(c: number[]): number[] { const n = c.length - 1, d: number[] = []; for (let i = 0; i < n; i++) d.push(c[i] * (n - i)); return d.length ? d : [0]; }
/** Taylor coefficients b_k = N^{(k)}(r)/k! by repeated synthetic division (coeffs highest-first). */
function taylorAtReal(c: number[], r: number): number[] {
  let work = c.slice(); const b: number[] = [];
  while (work.length) { const out = [work[0]]; for (let i = 1; i < work.length; i++) out.push(work[i] + out[i - 1] * r); b.push(out[out.length - 1]); work = out.slice(0, out.length - 1); }
  return b;
}
/** Partial-fraction inverse of a proper rational F(v)=num/den (numeric coeffs only). */
function pfeInverse(F: SymExpr, v: string, mapReal: (A: number, r: number) => SymExpr, mapComplex: (p: number, q: number, ar: number, ai: number) => SymExpr, mapRepeated: ((A: number, r: number, pow: number) => SymExpr) | null): SymExpr | null {
  const { num, den } = numDen(simplifyExpr(F));
  if (symVars(num).some((x) => x !== v) || symVars(den).some((x) => x !== v)) return null;
  const N = polyCoeffs(num, v).slice().reverse(), D = polyCoeffs(den, v).slice().reverse();   // highest-first
  if (D.length < 2 || N.length >= D.length) return null;                                        // need proper rational
  const roots = durandKerner(D); const used = new Array(roots.re.length).fill(false);
  const groups: { re: number; im: number; mult: number }[] = [];
  for (let i = 0; i < roots.re.length; i++) { if (used[i]) continue; const g = { re: roots.re[i], im: roots.im[i], mult: 1 }; used[i] = true; for (let j = i + 1; j < roots.re.length; j++) if (!used[j] && Math.hypot(roots.re[j] - g.re, roots.im[j] - g.im) < 1e-4) { used[j] = true; g.mult++; } groups.push(g); }
  const lead = D[0]; const terms: SymExpr[] = [];
  if (groups.every((g) => g.mult === 1)) {
    const Dp = polyDerivHi(D);
    for (const g of groups) {
      const [nr, ni] = cPolyval(N, g.re, g.im); const [dr, di] = cPolyval(Dp, g.re, g.im); const dd = dr * dr + di * di;
      const pr = (nr * dr + ni * di) / dd, pi = (ni * dr - nr * di) / dd;   // residue N/D'
      if (Math.abs(g.im) < 1e-7) terms.push(mapReal(round0(pr), round0(g.re)));
      else if (g.im > 0) terms.push(mapComplex(pr, pi, g.re, g.im));
    }
  } else if (groups.length === 1 && Math.abs(groups[0].im) < 1e-7 && mapRepeated) {
    const r = groups[0].re, mlt = groups[0].mult, b = taylorAtReal(N, r);
    for (let j = 0; j < mlt; j++) { const A = (b[j] ?? 0) / lead; if (Math.abs(A) > 1e-12) terms.push(mapRepeated(round0(A), round0(r), mlt - j)); }
  } else return null;
  return terms.length ? simplifyExpr(sAdd(...terms)) : sN(0);
}
export function ilaplaceExpr(F: SymExpr, s: string, t: string): SymExpr {
  const T = sV(t);
  const expRT = (r: number): SymExpr => r === 0 ? sN(1) : sFn('exp', sMul(sN(r), T));
  const res = pfeInverse(F, s,
    (A, r) => sMul(sN(A), expRT(r)),
    (p, q, ar, ai) => sMul(expRT(ar), sAdd(sMul(sN(2 * p), sFn('cos', sMul(sN(ai), T))), sMul(sN(-2 * q), sFn('sin', sMul(sN(ai), T))))),
    (A, r, pow) => sMul(sN(A / factorialN(pow - 1)), pow > 1 ? sPow(T, sN(pow - 1)) : sN(1), expRT(r)));
  return res ? simplifyExpr(res) : sFn('ilaplace', F, sV(s), T);
}
export function iztransExpr(F: SymExpr, z: string, n: string): SymExpr {
  const Nn = sV(n); const G = simplifyExpr(sMul(F, sPow(sV(z), sN(-1))));   // residues of F/z
  const res = pfeInverse(G, z,
    (A, r) => r === 0 ? sMul(sN(A), sFn('kroneckerDelta', Nn)) : sMul(sN(A), sPow(sN(r), Nn)),
    (p, q, ar, ai) => { const rho = Math.hypot(ar, ai), th = Math.atan2(ai, ar); return sMul(sPow(sN(round0(rho)), Nn), sAdd(sMul(sN(2 * p), sFn('cos', sMul(sN(round0(th)), Nn))), sMul(sN(-2 * q), sFn('sin', sMul(sN(round0(th)), Nn))))); },
    null);
  return res ? simplifyExpr(res) : sFn('iztrans', F, sV(z), Nn);
}

/** Fourier transform F(w)=∫f(t)e^{-iwt}dt — small table; uses symbolic pi, 1i, dirac. */
export function fourierExpr(e: SymExpr, t: string, w: string): SymExpr {
  e = simplifyExpr(expandExpr(e));
  if (e.t === 'add') return simplifyExpr(sAdd(...e.args.map((a) => fourierTerm(a, t, w))));
  return fourierTerm(e, t, w);
}
function fourierTerm(e: SymExpr, t: string, w: string): SymExpr {
  const W = sV(w), PI = sV('pi'), I = sV('1i');
  e = simplifyExpr(e);
  if (!symHasVar(e, t)) return simplifyExpr(sMul(e, sN(2), PI, sFn('dirac', W)));   // c → 2πc·δ(w)
  const factors = e.t === 'mul' ? e.args : [e];
  const coef: SymExpr[] = []; let tpow = 0; const core: SymExpr[] = [];
  for (const f of factors) {
    if (!symHasVar(f, t)) { coef.push(f); continue; }
    if (f.t === 'v' && f.name === t) { tpow += 1; continue; }
    if (f.t === 'pow' && f.base.t === 'v' && f.base.name === t && f.exp.t === 'n' && Number.isInteger(f.exp.v) && f.exp.v > 0) { tpow += f.exp.v; continue; }
    core.push(f);
  }
  let F = fourierCore(core.length ? simplifyExpr(sMul(...core)) : sN(1), t, w, W, PI, I);
  for (let i = 0; i < tpow; i++) F = sMul(I, diffExpr(F, w));   // F{t·f} = i F'(w)
  F = simplifyExpr(F);
  return coef.length ? simplifyExpr(sMul(sMul(...coef), F)) : F;
}
function fourierCore(core: SymExpr, t: string, w: string, W: SymExpr, PI: SymExpr, I: SymExpr): SymExpr {
  core = simplifyExpr(core);
  if (!symHasVar(core, t)) return sMul(core, sN(2), PI, sFn('dirac', W));
  if (core.t === 'fn' && core.args.length === 1) {
    const lin = linearInT(core.args[0], t);
    if (core.name === 'dirac' && lin && isZeroE(lin.b)) return sN(1);   // F{δ(t)} = 1
    if (lin && isZeroE(lin.b)) { const a = lin.a; const dm = sFn('dirac', sSub(W, a)), dp = sFn('dirac', sAdd(W, a));
      if (core.name === 'cos') return sMul(PI, sAdd(dm, dp));
      if (core.name === 'sin') return sMul(sN(-1), I, PI, sSub(dm, dp));
    }
    if (core.name === 'exp') { const arg = simplifyExpr(core.args[0]);
      // Gaussian exp(-a t²): coefficient of t² must be negative
      const c2 = simplifyExpr(subsExpr(diffExpr(diffExpr(arg, t), t), t, sN(0)));   // 2·(t² coeff)
      if (!symHasVar(c2, t) && c2.t === 'n' && c2.v < 0 && isZeroE(simplifyExpr(subsExpr(arg, t, sN(0)))) && isZeroE(simplifyExpr(subsExpr(diffExpr(arg, t), t, sN(0))))) {
        const a = sN(-c2.v / 2);   // arg = -a t²
        return sMul(sPow(sDiv(PI, a), sN(0.5)), sFn('exp', sDiv(sNeg(sMul(W, W)), sMul(sN(4), a))));
      }
    }
  }
  // exp(-a|t|) → 2a/(a²+w²)
  if (core.t === 'mul' || (core.t === 'fn' && core.name === 'exp')) {
    const ex = core.t === 'fn' ? core : null;
    if (ex && ex.name === 'exp' && ex.args[0].t === 'mul') { const ab = ex.args[0].args; const absF = ab.find((x) => x.t === 'fn' && x.name === 'abs' && x.args[0].t === 'v' && x.args[0].name === t); if (absF) { const rest = ab.filter((x) => x !== absF); const aNeg = simplifyExpr(rest.length ? sMul(...rest) : sN(1)); const a = simplifyExpr(sNeg(aNeg)); if (!symHasVar(a, t)) return sDiv(sMul(sN(2), a), sAdd(sMul(a, a), sMul(W, W))); } }
  }
  return sFn('fourier', core, sV(t), W);
}
export function ifourierExpr(F: SymExpr, w: string, t: string): SymExpr {
  F = simplifyExpr(expandExpr(F));
  if (F.t === 'add') return simplifyExpr(sAdd(...F.args.map((a) => ifourierTerm(a, w, t))));
  return ifourierTerm(F, w, t);
}
function ifourierTerm(F: SymExpr, w: string, t: string): SymExpr {
  const T = sV(t), PI = sV('pi');
  F = simplifyExpr(F);
  if (!symHasVar(F, w)) return simplifyExpr(sMul(F, sFn('dirac', T)));   // c → c·δ(t)
  const factors = F.t === 'mul' ? F.args : [F];
  const coef: SymExpr[] = []; const core: SymExpr[] = [];
  for (const f of factors) { if (!symHasVar(f, w)) coef.push(f); else core.push(f); }
  const c = core.length ? simplifyExpr(sMul(...core)) : sN(1);
  let R: SymExpr | null = null;
  if (c.t === 'fn' && c.name === 'dirac') { const lin = linearInT(c.args[0], w); if (lin && isZeroE(lin.b)) R = sDiv(sN(1), sMul(sN(2), PI)); }   // δ(w) → 1/(2π)
  // 1/(w²+a²) → (π/a)·e^{-a|t|}
  if (!R) { const { num, den } = numDen(c); if (!symHasVar(num, w)) { const dc = polyCoeffs(den, w); if (dc.length === 3 && Math.abs(dc[2] - 1) < 1e-12 && Math.abs(dc[1]) < 1e-12 && dc[0] > 0) { const a = Math.sqrt(dc[0]); R = sMul(sDiv(PI, sN(a)), sFn('exp', sMul(sN(-a), sFn('abs', T))), sPow(num as SymExpr, sN(1))); } } }
  if (!R) return sFn('ifourier', F, sV(w), T);
  return coef.length ? simplifyExpr(sMul(sMul(...coef), R)) : simplifyExpr(R);
}
