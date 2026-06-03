/**
 * Minimal computer-algebra core for the Symbolic Math Toolbox overloads.
 * Expressions are n-ary trees; `simplifyExpr` is the normaliser that constant-folds,
 * flattens, and combines like terms. `diffExpr` is exact symbolic differentiation.
 */
export type SymExpr =
  | { t: 'n'; v: number }
  | { t: 'v'; name: string }
  | { t: 'add'; args: SymExpr[] }
  | { t: 'mul'; args: SymExpr[] }
  | { t: 'pow'; base: SymExpr; exp: SymExpr }
  | { t: 'fn'; name: string; args: SymExpr[] };

export const sN = (v: number): SymExpr => ({ t: 'n', v });
export const sV = (name: string): SymExpr => ({ t: 'v', name });
export const sAdd = (...args: SymExpr[]): SymExpr => ({ t: 'add', args });
export const sMul = (...args: SymExpr[]): SymExpr => ({ t: 'mul', args });
export const sPow = (base: SymExpr, exp: SymExpr): SymExpr => ({ t: 'pow', base, exp });
export const sFn = (name: string, ...args: SymExpr[]): SymExpr => ({ t: 'fn', name, args });
export const sNeg = (a: SymExpr): SymExpr => sMul(sN(-1), a);
export const sSub = (a: SymExpr, b: SymExpr): SymExpr => sAdd(a, sNeg(b));
export const sDiv = (a: SymExpr, b: SymExpr): SymExpr => sMul(a, sPow(b, sN(-1)));

const isN = (e: SymExpr, v?: number): boolean => e.t === 'n' && (v === undefined || (e as { v: number }).v === v);

/** Free variables of an expression (sorted, alphabetical). */
export function symVars(e: SymExpr, into = new Set<string>()): string[] {
  if (e.t === 'v') into.add(e.name);
  else if (e.t === 'add' || e.t === 'mul' || e.t === 'fn') e.args.forEach((a) => symVars(a, into));
  else if (e.t === 'pow') { symVars(e.base, into); symVars(e.exp, into); }
  return [...into].sort();
}

/** A stable canonical key for combining like terms. */
function key(e: SymExpr): string {
  switch (e.t) {
    case 'n': return `n:${e.v}`;
    case 'v': return `v:${e.name}`;
    case 'add': return `+(${e.args.map(key).sort().join(',')})`;
    case 'mul': return `*(${e.args.map(key).sort().join(',')})`;
    case 'pow': return `^(${key(e.base)},${key(e.exp)})`;
    case 'fn': return `${e.name}(${e.args.map(key).join(',')})`;
  }
}

/** Normalise: constant-fold, flatten, combine like terms, drop identities. */
export function simplifyExpr(e: SymExpr): SymExpr {
  switch (e.t) {
    case 'n': case 'v': return e;
    case 'fn': {
      const args = e.args.map(simplifyExpr);
      if (args.every(isNum)) { const val = evalFn(e.name, args.map((a) => (a as { v: number }).v)); if (val !== null && Number.isFinite(val)) return sN(val); }
      return { t: 'fn', name: e.name, args };
    }
    case 'pow': {
      const base = simplifyExpr(e.base), exp = simplifyExpr(e.exp);
      if (isN(exp, 0)) return sN(1);
      if (isN(exp, 1)) return base;
      if (isN(base, 0)) return sN(0);
      if (isN(base, 1)) return sN(1);
      if (base.t === 'n' && exp.t === 'n') return sN(Math.pow(base.v, exp.v));
      if (base.t === 'pow') return simplifyExpr(sPow(base.base, sMul(base.exp, exp)));   // (a^b)^c → a^(b*c)
      return sPow(base, exp);
    }
    case 'add': {
      const flat: SymExpr[] = []; const push = (x: SymExpr) => { const s = simplifyExpr(x); if (s.t === 'add') s.args.forEach(push); else flat.push(s); };
      e.args.forEach(push);
      let constSum = 0; const terms = new Map<string, { coef: number; base: SymExpr }>();
      for (const term of flat) {
        if (isNum(term)) { constSum += term.v; continue; }
        const { coef, base } = splitCoef(term); const k = key(base); const ex = terms.get(k);
        if (ex) ex.coef += coef; else terms.set(k, { coef, base });
      }
      const out: SymExpr[] = [];
      for (const { coef, base } of terms.values()) { if (coef === 0) continue; out.push(coef === 1 ? base : sMul(sN(coef), base)); }
      if (constSum !== 0 || out.length === 0) out.push(sN(constSum));
      return out.length === 1 ? out[0] : { t: 'add', args: out.sort((a, b) => key(a).localeCompare(key(b))) };
    }
    case 'mul': {
      const flat: SymExpr[] = []; const push = (x: SymExpr) => { const s = simplifyExpr(x); if (s.t === 'mul') s.args.forEach(push); else flat.push(s); };
      e.args.forEach(push);
      let constProd = 1; const factors = new Map<string, { exp: SymExpr; base: SymExpr }>();
      for (const f of flat) {
        if (isNum(f)) { constProd *= f.v; continue; }
        const base = f.t === 'pow' ? f.base : f; const exp = f.t === 'pow' ? f.exp : sN(1); const k = key(base); const ex = factors.get(k);
        if (ex) ex.exp = simplifyExpr(sAdd(ex.exp, exp)); else factors.set(k, { exp, base });
      }
      if (constProd === 0) return sN(0);
      const out: SymExpr[] = [];
      for (const { exp, base } of factors.values()) { if (isN(exp, 0)) continue; out.push(isN(exp, 1) ? base : sPow(base, exp)); }
      if (constProd !== 1 || out.length === 0) out.unshift(sN(constProd));
      return out.length === 1 ? out[0] : { t: 'mul', args: out };
    }
  }
}
const isNum = (e: SymExpr): e is { t: 'n'; v: number } => e.t === 'n';
/** Pull a leading numeric coefficient out of a product term. */
function splitCoef(e: SymExpr): { coef: number; base: SymExpr } {
  if (e.t === 'mul') { let c = 1; const rest: SymExpr[] = []; for (const f of e.args) { if (isNum(f)) c *= f.v; else rest.push(f); } return { coef: c, base: rest.length === 1 ? rest[0] : { t: 'mul', args: rest } }; }
  return { coef: 1, base: e };
}

/** Exact derivative of e with respect to variable `x`. */
export function diffExpr(e: SymExpr, x: string): SymExpr {
  switch (e.t) {
    case 'n': return sN(0);
    case 'v': return sN(e.name === x ? 1 : 0);
    case 'add': return sAdd(...e.args.map((a) => diffExpr(a, x)));
    case 'mul': return sAdd(...e.args.map((_, i) => sMul(diffExpr(e.args[i], x), ...e.args.filter((_, j) => j !== i))));
    case 'pow': {
      const { base, exp } = e;
      if (isNum(exp)) return sMul(exp, sPow(base, sN(exp.v - 1)), diffExpr(base, x));   // c·b^(c-1)·b'
      // d(b^e) = b^e (e'·ln b + e·b'/b)
      return sMul(sPow(base, exp), sAdd(sMul(diffExpr(exp, x), sFn('log', base)), sMul(exp, sDiv(diffExpr(base, x), base))));
    }
    case 'fn': {
      const u = e.args[0]; const du = diffExpr(u, x); const dd = fnDeriv(e.name, u);
      return dd ? sMul(dd, du) : sFn(`diff_${e.name}`, u);
    }
  }
}
/** Outer derivative f'(u) for a named function. */
function fnDeriv(name: string, u: SymExpr): SymExpr | null {
  switch (name) {
    case 'sin': return sFn('cos', u);
    case 'cos': return sNeg(sFn('sin', u));
    case 'tan': return sPow(sFn('sec', u), sN(2));
    case 'exp': return sFn('exp', u);
    case 'log': return sPow(u, sN(-1));
    case 'log10': return sDiv(sN(1), sMul(u, sFn('log', sN(10))));
    case 'log2': return sDiv(sN(1), sMul(u, sFn('log', sN(2))));
    case 'sqrt': return sDiv(sN(1), sMul(sN(2), sFn('sqrt', u)));
    case 'sinh': return sFn('cosh', u);
    case 'cosh': return sFn('sinh', u);
    case 'tanh': return sPow(sFn('sech', u), sN(2));
    case 'asin': return sPow(sSub(sN(1), sPow(u, sN(2))), sN(-0.5));
    case 'acos': return sNeg(sPow(sSub(sN(1), sPow(u, sN(2))), sN(-0.5)));
    case 'atan': return sDiv(sN(1), sAdd(sN(1), sPow(u, sN(2))));
    case 'cot': return sNeg(sPow(sFn('csc', u), sN(2)));
    case 'sec': return sMul(sFn('sec', u), sFn('tan', u));
    case 'csc': return sNeg(sMul(sFn('csc', u), sFn('cot', u)));
    case 'abs': return sFn('sign', u);
    case 'sign': return sN(0);
    default: return null;
  }
}
/** Numeric value of a named function (for constant folding). */
function evalFn(name: string, a: number[]): number | null {
  const f: Record<string, (x: number) => number> = { sin: Math.sin, cos: Math.cos, tan: Math.tan, exp: Math.exp, log: Math.log, log10: Math.log10, log2: Math.log2, sqrt: Math.sqrt, sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh, asin: Math.asin, acos: Math.acos, atan: Math.atan, abs: Math.abs, sign: Math.sign, cbrt: Math.cbrt, sec: (x) => 1 / Math.cos(x), csc: (x) => 1 / Math.sin(x), cot: (x) => 1 / Math.tan(x), sech: (x) => 1 / Math.cosh(x) };
  return f[name] ? f[name](a[0]) : null;
}

/** Substitute every occurrence of variable `name` with expression `repl`. */
export function subsExpr(e: SymExpr, name: string, repl: SymExpr): SymExpr {
  switch (e.t) {
    case 'n': return e;
    case 'v': return e.name === name ? repl : e;
    case 'add': return { t: 'add', args: e.args.map((a) => subsExpr(a, name, repl)) };
    case 'mul': return { t: 'mul', args: e.args.map((a) => subsExpr(a, name, repl)) };
    case 'pow': return sPow(subsExpr(e.base, name, repl), subsExpr(e.exp, name, repl));
    case 'fn': return { t: 'fn', name: e.name, args: e.args.map((a) => subsExpr(a, name, repl)) };
  }
}
/** Numerically evaluate (throws via returning NaN-bearing tree if free vars remain). */
export function evalExpr(e: SymExpr, env: Map<string, number>): number {
  switch (e.t) {
    case 'n': return e.v;
    case 'v': { const v = env.get(e.name); return v === undefined ? NaN : v; }
    case 'add': return e.args.reduce((s, a) => s + evalExpr(a, env), 0);
    case 'mul': return e.args.reduce((s, a) => s * evalExpr(a, env), 1);
    case 'pow': return Math.pow(evalExpr(e.base, env), evalExpr(e.exp, env));
    case 'fn': { const v = evalFn(e.name, e.args.map((a) => evalExpr(a, env))); return v === null ? NaN : v; }
  }
}

/** Render an expression as MATLAB-ish text. */
export function exprToStr(e: SymExpr): string { return render(simplifyExpr(e), 0); }
function render(e: SymExpr, prec: number): string {
  switch (e.t) {
    case 'n': return e.v < 0 ? `(${trim(e.v)})` : trim(e.v);
    case 'v': return e.name;
    case 'fn': return `${e.name}(${e.args.map((a) => render(a, 0)).join(', ')})`;
    case 'pow': { const s = `${render(e.base, 3)}^${render(e.exp, 3)}`; return prec > 2 ? `(${s})` : s; }
    case 'add': { const s = e.args.map((a, i) => { const r = render(a, 1); return i > 0 && !r.startsWith('-') ? `+ ${r}` : i > 0 ? `- ${r.slice(1)}` : r; }).join(' '); return prec > 1 ? `(${s})` : s; }
    case 'mul': {
      const { coef, base } = splitCoef(e); const parts = base.t === 'mul' ? base.args : [base];
      const inv = parts.filter((p) => p.t === 'pow' && isNum(p.exp) && (p.exp as { v: number }).v < 0);
      const num = parts.filter((p) => !(p.t === 'pow' && isNum(p.exp) && (p.exp as { v: number }).v < 0));
      const numStr = (coef === 1 && num.length ? num : [sN(coef) as SymExpr, ...num]).filter((p, i) => !(i === 0 && isN(p, 1) && num.length)).map((p) => render(p, 3)).join('*') || '1';
      let s = numStr;
      if (inv.length) s += '/' + inv.map((p) => render(sPow((p as { base: SymExpr }).base, sNeg((p as { exp: SymExpr }).exp)), 3)).join('/');
      return prec > 2 ? `(${s})` : s;
    }
  }
}
const trim = (x: number): string => (Number.isInteger(x) ? String(x) : parseFloat(x.toPrecision(6)).toString());
