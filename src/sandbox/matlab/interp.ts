/** Tree-walking evaluator for the MATLAB subset. */
import { parse } from './parser';
import type { Expr, LValue, Stmt, FuncDef } from './ast';
import {
  type Value, type Mat, type Handle, MatError,
  isMat, isHandle, mat, zeros, scalar, bool, str, empty,
  numel, asScalar, asString, truthy, map, elementwise, matmul, transpose,
  horzcat, vertcat, range as makeRange, indexGet, indexSet, toArray, type Sub,
} from './values';
import { det, inv, mldivide } from './linalg';
import { BUILTINS, CONSTANTS, type Env } from './builtins';
import { displayValue, dispValue } from './format';
import { Graphics } from './graphics';

class ReturnSignal {}
class BreakSignal {}
class ContinueSignal {}

class Scope {
  vars = new Map<string, Value>();
  nargin = 0;
  nargout = 0;
}

export interface InterpOptions {
  onOutput: (text: string) => void;
  requestInput?: (prompt: string) => Promise<string>;
}

export class Interpreter implements Env {
  private funcs = new Map<string, FuncDef>();
  graphics = new Graphics();
  private endStack: number[] = [];
  private onOutputCb: (text: string) => void;
  private requestInputCb: (prompt: string) => Promise<string>;
  base = new Scope();

  constructor(opts: InterpOptions) {
    this.onOutputCb = opts.onOutput;
    this.requestInputCb = opts.requestInput ?? (async () => '');
  }

  output(text: string) { this.onOutputCb(text); }
  requestInput(prompt: string) { return this.requestInputCb(prompt); }
  callHandle(h: Handle, args: Value[], nargout: number) { return h.call(args, nargout); }
  async evalInput(text: string): Promise<Value> {
    const prog = parse(text);
    const stmt = prog.stmts[0];
    if (stmt && stmt.t === 'expr') return this.evalExpr(stmt.e, this.base);
    return empty();
  }

  /** Register the function definitions in `src` without running its statements. */
  loadFunctions(src: string) {
    const prog = parse(src);
    for (const f of prog.functions) this.funcs.set(f.name, f);
  }
  defineFunction(def: FuncDef) { this.funcs.set(def.name, def); }
  hasCallable(name: string): boolean { return this.funcs.has(name) || name in BUILTINS || name in CONSTANTS; }
  listFunctions(): string[] { return [...this.funcs.keys()]; }

  /** Run a script: register its functions, then execute its statements. */
  async run(src: string): Promise<void> {
    const prog = parse(src);
    for (const f of prog.functions) this.funcs.set(f.name, f);
    try {
      await this.runStmts(prog.stmts, this.base);
    } catch (e) {
      if (e instanceof ReturnSignal) return;
      throw e;
    }
  }

  /** Workspace snapshot for the UI. */
  workspaceSnapshot(): { name: string; size: string; klass: string; preview: string }[] {
    const out: { name: string; size: string; klass: string; preview: string }[] = [];
    for (const [name, v] of this.base.vars) {
      if (name === 'ans' && this.base.vars.size > 1) { /* still include ans */ }
      if (isHandle(v)) { out.push({ name, size: '1x1', klass: 'function_handle', preview: '@' + (v.name ?? 'fn') }); continue; }
      if (v.kind === 'gobj') { out.push({ name, size: '1x1', klass: v.gtype, preview: `<${v.gtype}>` }); continue; }
      const klass = v.isChar ? 'char' : 'double';
      const preview = numel(v) <= 12 ? dispValue(v).replace(/\s+/g, ' ').trim().slice(0, 40) : '…';
      out.push({ name, size: `${v.rows}x${v.cols}`, klass, preview });
    }
    return out.sort((a, b) => a.name.localeCompare(b.name));
  }

  // ── Statements ─────────────────────────────────────────────────────
  private async runStmts(stmts: Stmt[], scope: Scope) {
    for (const s of stmts) await this.execStmt(s, scope);
  }

  private async execStmt(stmt: Stmt, scope: Scope): Promise<void> {
    switch (stmt.t) {
      case 'expr': {
        const vals = await this.evalValues(stmt.e, scope, 0);
        if (vals.length) {
          scope.vars.set('ans', vals[0]);
          if (!stmt.suppressed) this.output(displayValue('ans', vals[0]) + '\n');
        }
        return;
      }
      case 'assign': {
        const val = await this.evalExpr(stmt.e, scope);
        await this.assignLValue(stmt.lhs, val, scope);
        if (!stmt.suppressed) this.displayAssigned(stmt.lhs, scope);
        return;
      }
      case 'multiassign': {
        const n = stmt.lhs.length;
        const vals = await this.evalValues(stmt.e, scope, n);
        for (let i = 0; i < stmt.lhs.length; i++) {
          const lv = stmt.lhs[i];
          if (!lv) continue;
          if (i >= vals.length) throw new MatError('not enough output arguments');
          await this.assignLValue(lv, vals[i], scope);
          if (!stmt.suppressed) this.displayAssigned(lv, scope);
        }
        return;
      }
      case 'if': {
        for (const cl of stmt.clauses) {
          if (truthy(await this.evalExpr(cl.cond, scope))) { await this.runStmts(cl.body, scope); return; }
        }
        if (stmt.elseBody) await this.runStmts(stmt.elseBody, scope);
        return;
      }
      case 'for': {
        const r = asMat(await this.evalExpr(stmt.range, scope));
        const cols = r.rows === 1 || r.cols === 1 ? numel(r) : r.cols;
        for (let c = 0; c < cols; c++) {
          let v: Value;
          if (r.rows === 1 || r.cols === 1) v = scalar(r.data[c]);
          else { const col = zeros(r.rows, 1); for (let rr = 0; rr < r.rows; rr++) col.data[rr] = r.data[rr + c * r.rows]; v = col; }
          scope.vars.set(stmt.varName, v);
          try { await this.runStmts(stmt.body, scope); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return;
      }
      case 'while': {
        let guard = 0;
        while (truthy(await this.evalExpr(stmt.cond, scope))) {
          if (++guard > 1e7) throw new MatError('while loop exceeded 10,000,000 iterations (aborted)');
          try { await this.runStmts(stmt.body, scope); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return;
      }
      case 'return': throw new ReturnSignal();
      case 'break': throw new BreakSignal();
      case 'continue': throw new ContinueSignal();
      case 'global': return; // minimal: treated as no-op (corpora don't rely on globals)
      case 'func': this.funcs.set(stmt.def.name, stmt.def); return;
    }
  }

  private displayAssigned(lv: LValue, scope: Scope) {
    const name = rootName(lv);
    const v = scope.vars.get(name);
    if (v === undefined) return;
    this.output(displayValue(name, v) + '\n');
  }

  // ── Assignment ─────────────────────────────────────────────────────
  private async assignLValue(lv: LValue, val: Value, scope: Scope): Promise<void> {
    switch (lv.t) {
      case 'ident': scope.vars.set(lv.name, val); return;
      case 'field': {
        const target = lv.target.t === 'ident' ? scope.vars.get(lv.target.name) : undefined;
        if (target && target.kind === 'gobj') { this.graphics.setAxesProp(lv.name, val); return; }
        throw new MatError(`cannot assign field '.${lv.name}' on a non-handle value`);
      }
      case 'index':
      case 'cell': {
        const container = asMat(await this.readContainer(lv.target, scope));
        const subs = await this.evalSubs(lv.args, container, scope);
        const updated = indexSet(container, subs, asMat(val));
        await this.assignLValue(lv.target, updated, scope);
        return;
      }
    }
  }

  /** Current value of an assignment target (empty matrix if undefined → grows). */
  private async readContainer(lv: LValue, scope: Scope): Promise<Value> {
    if (lv.t === 'ident') return scope.vars.get(lv.name) ?? empty();
    if (lv.t === 'index' || lv.t === 'cell') {
      const base = asMat(await this.readContainer(lv.target, scope));
      const subs = await this.evalSubs(lv.args, base, scope);
      return indexGet(base, subs);
    }
    throw new MatError('invalid assignment target');
  }

  // ── Subscripts ─────────────────────────────────────────────────────
  private async evalSubs(args: Expr[], container: Mat, scope: Scope): Promise<Sub[]> {
    const n = args.length;
    const subs: Sub[] = [];
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a.t === 'colon') { subs.push('colon'); continue; }
      const endVal = n === 1 ? numel(container) : (i === 0 ? container.rows : container.cols);
      this.endStack.push(endVal);
      let v: Value;
      try { v = await this.evalExpr(a, scope); } finally { this.endStack.pop(); }
      subs.push(toArray(asMat(v)).map((x) => Math.round(x)));
    }
    return subs;
  }

  // ── Expressions ────────────────────────────────────────────────────
  async evalExpr(e: Expr, scope: Scope): Promise<Value> {
    const vs = await this.evalValues(e, scope, 1);
    if (!vs.length) throw new MatError('expression produced no value');
    return vs[0];
  }

  private async evalValues(e: Expr, scope: Scope, nargout: number): Promise<Value[]> {
    switch (e.t) {
      case 'num': return [scalar(e.v)];
      case 'str': return [str(e.v)];
      case 'end': {
        if (!this.endStack.length) throw new MatError("'end' used outside an index");
        return [scalar(this.endStack[this.endStack.length - 1])];
      }
      case 'colon': throw new MatError("':' used outside an index");
      case 'ident': {
        if (scope.vars.has(e.name)) return [scope.vars.get(e.name)!];
        return this.resolveCall(e.name, [], nargout);
      }
      case 'range': {
        const from = asScalar(await this.evalExpr(e.from, scope), 'range start');
        const to = asScalar(await this.evalExpr(e.to, scope), 'range end');
        const step = e.step ? asScalar(await this.evalExpr(e.step, scope), 'range step') : 1;
        return [makeRange(from, step, to)];
      }
      case 'unary': {
        const v = asMat(await this.evalExpr(e.e, scope));
        if (e.op === '-') return [map(v, (x) => -x)];
        if (e.op === '+') return [v];
        return [{ ...map(v, (x) => (x === 0 ? 1 : 0)), isBool: true }];
      }
      case 'postfix': return [transpose(asMat(await this.evalExpr(e.e, scope)))];
      case 'binary': return [await this.evalBinary(e.op, e.a, e.b, scope)];
      case 'matrix': return [await this.evalMatrix(e.rows, scope)];
      case 'anon': return [this.makeAnon(e.params, e.body, scope)];
      case 'handle': return [this.makeHandle(e.name)];
      case 'field': {
        const t = await this.evalExpr(e.target, scope);
        if (t.kind === 'gobj') return [scalar(0)];
        throw new MatError(`cannot read field '.${e.name}'`);
      }
      case 'index':
      case 'cell': return this.evalIndexOrCall(e, scope, nargout);
    }
  }

  private async evalIndexOrCall(e: Expr & { t: 'index' | 'cell' }, scope: Scope, nargout: number): Promise<Value[]> {
    const target = e.target;
    if (target.t === 'ident' && !scope.vars.has(target.name)) {
      // function / builtin / constant call
      const args = await this.evalArgs(e.args, scope);
      return this.resolveCall(target.name, args, nargout);
    }
    // subscript a value (variable or sub-expression)
    const base = await this.evalExpr(target, scope);
    if (isHandle(base)) {
      const args = await this.evalArgs(e.args, scope);
      return this.callHandle(base, args, nargout);
    }
    const mbase = asMat(base);
    const subs = await this.evalSubs(e.args, mbase, scope);
    return [indexGet(mbase, subs)];
  }

  private async evalArgs(args: Expr[], scope: Scope): Promise<Value[]> {
    const out: Value[] = [];
    for (const a of args) {
      if (a.t === 'colon') throw new MatError("':' is not a valid function argument here");
      out.push(await this.evalExpr(a, scope));
    }
    return out;
  }

  private async resolveCall(name: string, args: Value[], nargout: number): Promise<Value[]> {
    const def = this.funcs.get(name);
    if (def) return this.callUserFunc(def, args, nargout);
    if (name in BUILTINS) return BUILTINS[name](args, nargout, this);
    if (args.length === 0 && name in CONSTANTS) return [CONSTANTS[name]()];
    throw new MatError(`undefined function or variable '${name}'`);
  }

  private async callUserFunc(def: FuncDef, args: Value[], nargout: number): Promise<Value[]> {
    const scope = new Scope();
    scope.nargin = args.length;
    scope.nargout = nargout;
    for (let i = 0; i < def.params.length; i++) {
      if (def.params[i] === '~') continue;
      if (i < args.length) scope.vars.set(def.params[i], args[i]);
    }
    scope.vars.set('nargin', scalar(args.length));
    scope.vars.set('nargout', scalar(nargout));
    try { await this.runStmts(def.body, scope); }
    catch (err) { if (!(err instanceof ReturnSignal)) throw err; }
    const results: Value[] = [];
    for (const o of def.outputs) {
      if (o === '~') { results.push(scalar(0)); continue; }
      if (scope.vars.has(o)) results.push(scope.vars.get(o)!);
      else break;
    }
    return results;
  }

  private makeHandle(name: string): Handle {
    return { kind: 'handle', name, call: (args, nargout) => this.resolveCall(name, args, nargout) };
  }
  private makeAnon(params: string[], body: Expr, scope: Scope): Handle {
    const snapshot = new Map(scope.vars);
    return {
      kind: 'handle', name: 'anonymous',
      call: async (args, nargout) => {
        const s = new Scope();
        s.vars = new Map(snapshot);
        s.nargin = args.length; s.nargout = nargout;
        for (let i = 0; i < params.length; i++) if (params[i] !== '~' && i < args.length) s.vars.set(params[i], args[i]);
        return [await this.evalExpr(body, s)];
      },
    };
  }

  private async evalMatrix(rows: Expr[][], scope: Scope): Promise<Mat> {
    if (rows.length === 0) return empty();
    const rowMats: Mat[] = [];
    for (const row of rows) {
      const parts: Mat[] = [];
      for (const el of row) parts.push(asMat(await this.evalExpr(el, scope)));
      rowMats.push(parts.length === 1 ? parts[0] : horzcat(parts));
    }
    return rowMats.length === 1 ? rowMats[0] : vertcat(rowMats);
  }

  private async evalBinary(op: string, ae: Expr, be: Expr, scope: Scope): Promise<Value> {
    if (op === '&&') return bool(truthy(await this.evalExpr(ae, scope)) && truthy(await this.evalExpr(be, scope)));
    if (op === '||') return bool(truthy(await this.evalExpr(ae, scope)) || truthy(await this.evalExpr(be, scope)));
    const a = asMat(await this.evalExpr(ae, scope));
    const b = asMat(await this.evalExpr(be, scope));
    switch (op) {
      case '+': return elementwise(a, b, (x, y) => x + y);
      case '-': return elementwise(a, b, (x, y) => x - y);
      case '.*': return elementwise(a, b, (x, y) => x * y);
      case './': return elementwise(a, b, (x, y) => x / y);
      case '.\\': return elementwise(a, b, (x, y) => y / x);
      case '.^': return elementwise(a, b, Math.pow);
      case '*': return matmul(a, b);
      case '/': return rdivide(a, b);
      case '\\': return mldivide(a, b);
      case '^': return mpower(a, b);
      case '==': return cmp(a, b, (x, y) => x === y);
      case '~=': return cmp(a, b, (x, y) => x !== y);
      case '<': return cmp(a, b, (x, y) => x < y);
      case '>': return cmp(a, b, (x, y) => x > y);
      case '<=': return cmp(a, b, (x, y) => x <= y);
      case '>=': return cmp(a, b, (x, y) => x >= y);
      case '&': return cmp(a, b, (x, y) => x !== 0 && y !== 0);
      case '|': return cmp(a, b, (x, y) => x !== 0 || y !== 0);
      default: throw new MatError(`unknown operator '${op}'`);
    }
  }
}

// ── Operator helpers ─────────────────────────────────────────────────
function cmp(a: Mat, b: Mat, f: (x: number, y: number) => boolean): Mat {
  return { ...elementwise(a, b, (x, y) => (f(x, y) ? 1 : 0)), isBool: true };
}
function rdivide(a: Mat, b: Mat): Mat {
  if (b.rows === 1 && b.cols === 1) return map(a, (x) => x / b.data[0]);
  // A / B = (B' \ A')'
  return transpose(mldivide(transpose(b), transpose(a)));
}
function mpower(a: Mat, b: Mat): Mat {
  if (a.rows === 1 && a.cols === 1 && b.rows === 1 && b.cols === 1) return scalar(Math.pow(a.data[0], b.data[0]));
  if (b.rows === 1 && b.cols === 1) {
    let p = Math.round(b.data[0]);
    if (a.rows !== a.cols) throw new MatError('^: matrix must be square');
    if (p < 0) { return mpower(inv(a), scalar(-p)); }
    let acc = identity(a.rows); let base = a;
    while (p > 0) { if (p & 1) acc = matmul(acc, base); base = matmul(base, base); p >>= 1; }
    return acc;
  }
  throw new MatError('^: unsupported operands');
}
function identity(n: number): Mat {
  const o = zeros(n, n); for (let i = 0; i < n; i++) o.data[i + i * n] = 1; return o;
}
function asMat(v: Value): Mat {
  if (isMat(v)) return v;
  if (v.kind === 'gobj') throw new MatError('expected a numeric value, got a graphics handle');
  throw new MatError('expected a numeric value, got a function handle');
}
function rootName(lv: LValue): string {
  let cur: LValue = lv;
  while (cur.t !== 'ident') cur = cur.target;
  return cur.name;
}

// silence unused import warnings for tree-shaken helpers
void det; void dispValue; void mat; void Graphics;
