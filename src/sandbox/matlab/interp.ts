/** Tree-walking evaluator for the MATLAB subset. */
import { parse } from './parser';
import type { Expr, LValue, Stmt, FuncDef } from './ast';
import {
  type Value, type Mat, type Handle, MatError,
  isMat, isHandle, mat, zeros, scalar, cscalar, bool, str, empty,
  numel, asScalar, asString, truthy, map, elementwise, matmul, transpose, ctranspose,
  horzcat, vertcat, range as makeRange, indexGet, indexSet, indexDelete, isEmpty, toArray, type Sub,
  isComplex, cmap, ewAdd, ewSub, ewMul, ewRDiv, ewLDiv, ewPow, ewEq, cmatmul,
  type Cell, type StructV, isCell, isStruct, makeCell, sparseToDense,
  type Str, isStr, makeStr, makeStrArr,
  type Graph, type Geom,
} from './values';
import { det, inv, mldivide } from './linalg';
import { BUILTINS, CONSTANTS, builtinHelp, docUrl, type Env } from './builtins';
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
  onClearConsole?: () => void;
  /**
   * Cooperative-yield hook, called periodically from inside loops. When the
   * interpreter runs in a Web Worker this returns to the event loop (so the
   * worker can process an incoming "abort" message) and throws to abort the run.
   */
  onTick?: () => void | Promise<void>;
}

export class Interpreter implements Env {
  private funcs = new Map<string, FuncDef>();
  private helpDocs = new Map<string, string>();
  graphics = new Graphics();
  private endStack: number[] = [];
  private onOutputCb: (text: string) => void;
  private requestInputCb: (prompt: string) => Promise<string>;
  private clearConsoleCb: () => void;
  private onTickCb: () => void | Promise<void>;
  private ticks = 0;
  base = new Scope();

  constructor(opts: InterpOptions) {
    this.onOutputCb = opts.onOutput;
    this.requestInputCb = opts.requestInput ?? (async () => '');
    this.clearConsoleCb = opts.onClearConsole ?? (() => {});
    this.onTickCb = opts.onTick ?? (() => {});
  }

  /** Periodic cooperative yield from loop bodies (no-op unless an onTick hook is set). */
  private maybeTick(): void | Promise<void> {
    if ((++this.ticks & 0x7ff) === 0) return this.onTickCb();
  }

  output(text: string) { this.onOutputCb(text); }
  requestInput(prompt: string) { return this.requestInputCb(prompt); }
  clearConsole() { this.clearConsoleCb(); }
  callHandle(h: Handle, args: Value[], nargout: number) { return h.call(args, nargout); }
  help(name: string): string {
    const def = this.funcs.get(name);
    const doc = this.helpDocs.get(name);
    // User-defined .m function: show its comment block + a synthesized Syntax.
    if (def || doc) {
      const parts: string[] = [];
      parts.push(doc ?? ` ${name}`);
      if (def) {
        const outs = def.outputs.length ? (def.outputs.length === 1 ? def.outputs[0] : `[${def.outputs.join(', ')}]`) + ' = ' : '';
        parts.push(`    Syntax\n      ${outs}${name}(${def.params.join(', ')})`);
      }
      return parts.join('\n\n');
    }
    const b = builtinHelp(name);
    if (b) return b;
    if (name in BUILTINS) return ` ${name} - built-in function\n\n    Documentation for ${name}\n      ${docUrl(name)}`;
    if (name in CONSTANTS) return ` ${name} - built-in constant`;
    return `'${name}' not found. Type 'help' for an overview.`;
  }
  clearWorkspace(names: string[]) {
    if (!names.length || names.includes('all')) { this.base.vars.clear(); return; }
    for (const n of names) this.base.vars.delete(n);
  }
  workspaceVars() { return this.workspaceSnapshot().map(({ name, size, klass }) => ({ name, size, klass })); }
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
    this.extractHelp(src);
  }

  /** Capture the help comment block immediately following each `function` line. */
  private extractHelp(src: string) {
    const lines = src.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (!/^\s*function\b/.test(lines[i])) continue;
      const line = lines[i];
      const name =
        /=\s*([A-Za-z_]\w*)\s*\(/.exec(line)?.[1] ??
        /function\s+([A-Za-z_]\w*)\s*\(/.exec(line)?.[1] ??
        /=\s*([A-Za-z_]\w*)\s*$/.exec(line)?.[1] ??
        /function\s+([A-Za-z_]\w*)/.exec(line)?.[1];
      if (!name) continue;
      const doc: string[] = [];
      for (let j = i + 1; j < lines.length; j++) {
        if (/^\s*%/.test(lines[j])) doc.push(lines[j].replace(/^\s*%+ ?/, ''));
        else break;
      }
      if (doc.length) this.helpDocs.set(name, `${name}:\n  ` + doc.join('\n  '));
    }
  }
  defineFunction(def: FuncDef) { this.funcs.set(def.name, def); }
  hasCallable(name: string): boolean { return this.funcs.has(name) || name in BUILTINS || name in CONSTANTS; }
  listFunctions(): string[] { return [...this.funcs.keys()]; }

  /** Run a script: register its functions, then execute its statements. */
  async run(src: string): Promise<void> {
    const prog = parse(src);
    for (const f of prog.functions) this.funcs.set(f.name, f);
    this.extractHelp(src);
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
      if (v.kind === 'cell') { out.push({ name, size: `${v.rows}x${v.cols}`, klass: 'cell', preview: dispValue(v).replace(/\s+/g, ' ').trim().slice(0, 40) }); continue; }
      if (v.kind === 'struct') { out.push({ name, size: `${v.rows}x${v.cols}`, klass: 'struct', preview: dispValue(v).replace(/\s+/g, ' ').trim().slice(0, 40) }); continue; }
      if (v.kind === 'sparse') { out.push({ name, size: `${v.rows}x${v.cols}`, klass: 'sparse double', preview: `${v.values.length} nonzeros` }); continue; }
      if (v.kind === 'str') { out.push({ name, size: `${v.rows}x${v.cols}`, klass: 'string', preview: dispValue(v).replace(/\s+/g, ' ').trim().slice(0, 40) }); continue; }
      if (v.kind === 'graph') { out.push({ name, size: '1x1', klass: v.directed ? 'digraph' : 'graph', preview: `${v.n} nodes, ${v.edges.length} edges` }); continue; }
      if (v.kind === 'geom') { out.push({ name, size: '1x1', klass: v.gkind, preview: `${v.points.length} pts${v.conn ? `, ${v.conn.length} simplices` : ''}` }); continue; }
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
          const t = this.maybeTick(); if (t) await t;
          try { await this.runStmts(stmt.body, scope); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return;
      }
      case 'while': {
        let guard = 0;
        while (truthy(await this.evalExpr(stmt.cond, scope))) {
          if (++guard > 1e8) throw new MatError('while loop exceeded 100,000,000 iterations (aborted)');
          const t = this.maybeTick(); if (t) await t;
          try { await this.runStmts(stmt.body, scope); }
          catch (e) { if (e instanceof BreakSignal) break; if (e instanceof ContinueSignal) continue; throw e; }
        }
        return;
      }
      case 'switch': {
        const subj = await this.evalExpr(stmt.subject, scope);
        const eq = (x: Value, y: Value): boolean => {
          if (isMat(x) && isMat(y) && x.isChar && y.isChar) return asString(x) === asString(y);
          if (isMat(x) && isMat(y)) { if (x.rows !== y.rows || x.cols !== y.cols) return false; for (let i = 0; i < x.data.length; i++) if (x.data[i] !== y.data[i]) return false; return true; }
          return false;
        };
        for (const cl of stmt.clauses) {
          for (const ve of cl.vals) {
            if (eq(subj, await this.evalExpr(ve, scope))) { await this.runStmts(cl.body, scope); return; }
          }
        }
        if (stmt.elseBody) await this.runStmts(stmt.elseBody, scope);
        return;
      }
      case 'try': {
        try { await this.runStmts(stmt.body, scope); }
        catch (e) {
          if (e instanceof ReturnSignal || e instanceof BreakSignal || e instanceof ContinueSignal) throw e;
          if (stmt.catchVar) {
            const msg = e instanceof MatError ? e.message : (e as Error)?.message ?? String(e);
            const fields = new Map<string, Value[]>([['identifier', [str('')]], ['message', [str(msg)]], ['stack', [empty()]]]);
            scope.vars.set(stmt.catchVar, { kind: 'struct', rows: 1, cols: 1, fields });
          }
          await this.runStmts(stmt.catchBody, scope);
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
        if (lv.target.t === 'ident') {
          const cur = scope.vars.get(lv.target.name);
          if (cur && cur.kind === 'gobj') { this.graphics.setAxesProp(lv.name, val); return; }
          const fields = cur && isStruct(cur) ? new Map(cur.fields) : new Map<string, Value[]>();
          fields.set(lv.name, [val]);
          scope.vars.set(lv.target.name, { kind: 'struct', rows: 1, cols: 1, fields });
          return;
        }
        const t = await this.evalExpr(lv.target, scope);
        if (t.kind === 'gobj') { this.graphics.setAxesProp(lv.name, val); return; }
        throw new MatError(`cannot assign field '.${lv.name}'`);
      }
      case 'cell': {
        // c{subs} = val : content assignment (grows the cell as needed)
        const curC = lv.target.t === 'ident' ? scope.vars.get(lv.target.name) : undefined;
        let cell: Cell = curC && isCell(curC) ? makeCell(curC.rows, curC.cols, curC.items.slice()) : makeCell(0, 0, []);
        const subs = await this.evalSubsN(lv.args, cell.rows, cell.cols, cell.items.length, scope);
        const lin = this.cellLinear(subs, cell.rows, cell.cols, cell.items.length);
        const need = lin.length ? Math.max(...lin) : 0;
        if (need > cell.items.length) { const items = cell.items.slice(); while (items.length < need) items.push(empty()); cell = cell.rows > 1 ? makeCell(need, 1, items) : makeCell(1, need, items); }
        for (const idx of lin) cell.items[idx - 1] = val;
        await this.assignLValue(lv.target, cell, scope);
        return;
      }
      case 'index': {
        const cur = lv.target.t === 'ident' ? scope.vars.get(lv.target.name) : undefined;
        if (cur && isCell(cur)) {
          // c(subs) = rhsCell : sub-cell assignment
          const subs = await this.evalSubsN(lv.args, cur.rows, cur.cols, cur.items.length, scope);
          const lin = this.cellLinear(subs, cur.rows, cur.cols, cur.items.length);
          const items = cur.items.slice(); const rhsItems = isCell(val) ? val.items : [val];
          lin.forEach((idx, k) => { items[idx - 1] = rhsItems.length === 1 ? rhsItems[0] : rhsItems[k]; });
          scope.vars.set((lv.target as { name: string }).name, makeCell(cur.rows, cur.cols, items));
          return;
        }
        const container = asMat(await this.readContainer(lv.target, scope));
        const rhs = asMat(val);
        const subs = await this.evalSubs(lv.args, container, scope);
        // `A(...) = []` deletes rows/columns/elements; otherwise it's a write.
        const updated = isEmpty(rhs) ? indexDelete(container, subs) : indexSet(container, subs, rhs);
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
  private evalSubs(args: Expr[], container: Mat, scope: Scope): Promise<Sub[]> {
    return this.evalSubsN(args, container.rows, container.cols, numel(container), scope, container.nd);
  }
  private async evalSubsN(args: Expr[], rows: number, cols: number, total: number, scope: Scope, nd?: number[]): Promise<Sub[]> {
    const n = args.length;
    // `end` per dimension: for n subscripts, the last absorbs the product of the remaining dims.
    const dims = nd ?? [rows, cols];
    const endFor = (i: number): number => {
      if (n === 1) return total;
      if (i < n - 1) return dims[i] ?? 1;
      return dims.slice(i).reduce((p, x) => p * x, 1) || 1;
    };
    const subs: Sub[] = [];
    for (let i = 0; i < args.length; i++) {
      const a = args[i];
      if (a.t === 'colon') { subs.push('colon'); continue; }
      const endVal = endFor(i);
      this.endStack.push(endVal);
      let v: Value;
      try { v = await this.evalExpr(a, scope); } finally { this.endStack.pop(); }
      const mv = asMat(v);
      if (mv.isBool) {
        const idx: number[] = [];
        for (let k = 0; k < mv.data.length; k++) if (mv.data[k] !== 0) idx.push(k + 1);
        subs.push(idx);
      } else {
        subs.push(toArray(mv).map((x) => Math.round(x)));
      }
    }
    return subs;
  }

  /** Linear 1-based indices selected from a cell/struct by subscripts. */
  private cellLinear(subs: Sub[], rows: number, cols: number, total: number): number[] {
    if (subs.length === 1) { const s = subs[0]; return s === 'colon' ? Array.from({ length: total }, (_, i) => i + 1) : s; }
    const rs = subs[0] === 'colon' ? Array.from({ length: rows }, (_, i) => i + 1) : subs[0];
    const cs = subs[1] === 'colon' ? Array.from({ length: cols }, (_, i) => i + 1) : subs[1];
    const out: number[] = []; for (const c of cs) for (const r of rs) out.push((c - 1) * rows + r);
    return out;
  }

  /** Content extraction `c{...}` → the selected values (a comma-separated list). */
  private async evalCellContent(target: Expr, args: Expr[], scope: Scope): Promise<Value[]> {
    const base = target.t === 'ident' && scope.vars.has(target.name) ? scope.vars.get(target.name)! : await this.evalExpr(target, scope);
    if (!isCell(base)) throw new MatError("'{}' indexing requires a cell array");
    const subs = await this.evalSubsN(args, base.rows, base.cols, base.items.length, scope);
    return this.cellLinear(subs, base.rows, base.cols, base.items.length).map((i) => {
      if (i < 1 || i > base.items.length) throw new MatError(`cell index ${i} out of bounds`);
      return base.items[i - 1];
    });
  }

  // ── Expressions ────────────────────────────────────────────────────
  async evalExpr(e: Expr, scope: Scope): Promise<Value> {
    const vs = await this.evalValues(e, scope, 1);
    if (!vs.length) throw new MatError('expression produced no value');
    return vs[0];
  }

  private async evalValues(e: Expr, scope: Scope, nargout: number): Promise<Value[]> {
    switch (e.t) {
      case 'num': return [e.imag ? cscalar(0, e.v) : scalar(e.v)];
      case 'str': return [str(e.v)];
      case 'string': return [makeStr(e.v)];
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
        if (e.op === '-') return [isComplex(v) ? cmap(v, (re, im) => [-re, -im]) : map(v, (x) => -x)];
        if (e.op === '+') return [v];
        return [{ ...map(v, (x) => (x === 0 ? 1 : 0)), isBool: true, idata: undefined }];
      }
      case 'postfix': {
        const v = asMat(await this.evalExpr(e.e, scope));
        return [e.op === "'" ? ctranspose(v) : transpose(v)];
      }
      case 'binary': return [await this.evalBinary(e.op, e.a, e.b, scope)];
      case 'matrix': return [await this.evalMatrix(e.rows, scope)];
      case 'celllit': return [await this.evalCellLit(e.rows, scope)];
      case 'anon': return [this.makeAnon(e.params, e.body, scope)];
      case 'handle': return [this.makeHandle(e.name)];
      case 'field': {
        const t = await this.evalExpr(e.target, scope);
        if (t.kind === 'gobj') return [scalar(0)];
        if (isStruct(t)) { const vals = t.fields.get(e.name); if (!vals) throw new MatError(`reference to non-existent field '${e.name}'`); return vals.length ? vals : []; }
        if (t.kind === 'graph') return [graphProperty(t, e.name)];
        if (t.kind === 'geom') return [geomProperty(t, e.name)];
        throw new MatError(`cannot read field '.${e.name}'`);
      }
      case 'cell': return this.evalCellContent(e.target, e.args, scope);
      case 'index': return this.evalIndexOrCall(e, scope, nargout);
    }
  }

  private async evalIndexOrCall(e: Expr & { t: 'index' }, scope: Scope, nargout: number): Promise<Value[]> {
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
    if (isCell(base)) {
      // c(...) → a sub-cell
      const subs = await this.evalSubsN(e.args, base.rows, base.cols, base.items.length, scope);
      const lin = this.cellLinear(subs, base.rows, base.cols, base.items.length);
      const items = lin.map((i) => base.items[i - 1]);
      const r = subs.length === 2 && subs[0] !== 'colon' ? (subs[0] as number[]).length : (base.cols === 1 ? items.length : 1);
      const c = items.length / (r || 1);
      return [makeCell(r, c, items)];
    }
    if (isStr(base)) {
      // s(...) → a sub-string-array (same column-major linear-index logic as cells)
      const subs = await this.evalSubsN(e.args, base.rows, base.cols, base.items.length, scope);
      const lin = this.cellLinear(subs, base.rows, base.cols, base.items.length);
      const items = lin.map((i) => base.items[i - 1]);
      const r = subs.length === 2 && subs[0] !== 'colon' ? (subs[0] as number[]).length : (base.cols === 1 ? items.length : 1);
      return [makeStrArr(r, items.length / (r || 1), items)];
    }
    const mbase = asMat(base);
    const subs = await this.evalSubs(e.args, mbase, scope);
    return [indexGet(mbase, subs)];
  }

  private async evalCellLit(rows: Expr[][], scope: Scope): Promise<Cell> {
    if (rows.length === 0) return makeCell(0, 0, []);
    const nr = rows.length, nc = rows[0].length;
    const items: Value[] = new Array(nr * nc);
    for (let r = 0; r < nr; r++) for (let c = 0; c < nc; c++) items[r + c * nr] = await this.evalExpr(rows[r][c], scope);
    return makeCell(nr, nc, items);
  }

  private async evalArgs(args: Expr[], scope: Scope): Promise<Value[]> {
    const out: Value[] = [];
    for (const a of args) {
      if (a.t === 'colon') throw new MatError("':' is not a valid function argument here");
      // `c{...}` expands to a comma-separated list of arguments.
      if (a.t === 'cell') { out.push(...(await this.evalCellContent(a.target, a.args, scope))); continue; }
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

  makeHandle(name: string): Handle {
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

  private async evalMatrix(rows: Expr[][], scope: Scope): Promise<Value> {
    if (rows.length === 0) return empty();
    const grid: Value[][] = []; let anyStr = false;
    for (const row of rows) {
      const vals: Value[] = [];
      for (const el of row) {
        if (el.t === 'cell') { for (const v of await this.evalCellContent(el.target, el.args, scope)) vals.push(v); continue; }
        vals.push(await this.evalExpr(el, scope));
      }
      for (const v of vals) if (isStr(v)) anyStr = true;
      grid.push(vals);
    }
    if (anyStr) return buildStrMatrix(grid);
    const rowMats: Mat[] = [];
    for (const vals of grid) { const parts = vals.map(asMat); rowMats.push(parts.length === 0 ? empty() : parts.length === 1 ? parts[0] : horzcat(parts)); }
    return rowMats.length === 1 ? rowMats[0] : vertcat(rowMats);
  }

  private async evalBinary(op: string, ae: Expr, be: Expr, scope: Scope): Promise<Value> {
    if (op === '&&') return bool(truthy(await this.evalExpr(ae, scope)) && truthy(await this.evalExpr(be, scope)));
    if (op === '||') return bool(truthy(await this.evalExpr(ae, scope)) || truthy(await this.evalExpr(be, scope)));
    // String-class operators: `+` concatenates, `==`/`~=` compare element-wise.
    if (op === '+' || op === '==' || op === '~=') {
      const av = await this.evalExpr(ae, scope), bv = await this.evalExpr(be, scope);
      if (isStr(av) || isStr(bv)) return strBinary(op, av, bv);
    }
    const a = asMat(await this.evalExpr(ae, scope));
    const b = asMat(await this.evalExpr(be, scope));
    switch (op) {
      case '+': return ewAdd(a, b);
      case '-': return ewSub(a, b);
      case '.*': return ewMul(a, b);
      case './': return ewRDiv(a, b);
      case '.\\': return ewLDiv(a, b);
      case '.^': return ewPow(a, b);
      case '*': return cmatmul(a, b);
      case '/': return rdivide(a, b);
      case '\\': return mldivide(a, b);
      case '^': return mpower(a, b);
      case '==': return ewEq(a, b, true);
      case '~=': return ewEq(a, b, false);
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
  if (b.rows === 1 && b.cols === 1) return ewRDiv(a, b);
  // A / B = (B' \ A')'
  return ctranspose(mldivide(ctranspose(b), ctranspose(a)));
}
function mpower(a: Mat, b: Mat): Mat {
  if (a.rows === 1 && a.cols === 1 && b.rows === 1 && b.cols === 1) return ewPow(a, b);
  if (b.rows === 1 && b.cols === 1) {
    let p = Math.round(b.data[0]);
    if (a.rows !== a.cols) throw new MatError('^: matrix must be square');
    if (p < 0) { return mpower(inv(a), scalar(-p)); }
    let acc = identity(a.rows); let base = a;
    while (p > 0) { if (p & 1) acc = cmatmul(acc, base); base = cmatmul(base, base); p >>= 1; }
    return acc;
  }
  throw new MatError('^: unsupported operands');
}
function identity(n: number): Mat {
  const o = zeros(n, n); for (let i = 0; i < n; i++) o.data[i + i * n] = 1; return o;
}
/** Build a string array from a literal `["a","b"; ...]` (horzcat rows, then vertcat). */
function buildStrMatrix(grid: Value[][]): Str {
  const blocks = grid.map((vals) => {
    const parts = vals.map(toStrArr);
    if (parts.length === 0) return makeStrArr(0, 0, []);
    let items: string[] = [], cols = 0; const r = parts[0].rows;
    for (const p of parts) { items = items.concat(p.items); cols += p.cols; }
    return makeStrArr(r, cols, items);
  });
  if (blocks.length === 1) return blocks[0];
  const cols = blocks[0].cols; let R = 0; for (const b of blocks) R += b.rows;
  const out = new Array<string>(R * cols); let off = 0;
  for (const b of blocks) { for (let c = 0; c < cols; c++) for (let r = 0; r < b.rows; r++) out[(off + r) + c * R] = b.items[r + c * b.rows]; off += b.rows; }
  return makeStrArr(R, cols, out);
}
/** Coerce a value to a string array (char→1×1 text, numeric→element-wise num2str). */
function toStrArr(v: Value): Str {
  if (isStr(v)) return v;
  if (isMat(v) && v.isChar) return makeStr(asString(v));
  if (isMat(v)) { const fmt = (x: number) => (Number.isInteger(x) ? String(x) : String(+x.toPrecision(5))); return makeStrArr(v.rows, v.cols, Array.from(v.data, fmt)); }
  return makeStr(String(v));
}
/** `+` (concat), `==`/`~=` (element-wise compare) for the string class. */
function strBinary(op: string, av: Value, bv: Value): Value {
  const a = toStrArr(av), b = toStrArr(bv);
  const scalarA = a.rows * a.cols === 1, scalarB = b.rows * b.cols === 1;
  const rows = scalarA ? b.rows : a.rows, cols = scalarA ? b.cols : a.cols;
  if (!scalarA && !scalarB && (a.rows !== b.rows || a.cols !== b.cols)) throw new MatError('string operands must match in size');
  const n = rows * cols; const get = (s: Str, i: number) => (s.rows * s.cols === 1 ? s.items[0] : s.items[i]);
  if (op === '+') { const items = new Array<string>(n); for (let i = 0; i < n; i++) items[i] = get(a, i) + get(b, i); return makeStrArr(rows, cols, items); }
  const out: Mat = { kind: 'num', rows, cols, data: new Float64Array(n), isBool: true };
  for (let i = 0; i < n; i++) out.data[i] = (get(a, i) === get(b, i)) === (op === '==') ? 1 : 0;
  return out;
}

function asMat(v: Value): Mat {
  if (isMat(v)) return v;
  if (v.kind === 'sparse') return sparseToDense(v);   // sparse densifies on arithmetic/indexing
  if (v.kind === 'gobj') throw new MatError('expected a numeric value, got a graphics handle');
  if (v.kind === 'graph') throw new MatError('expected a numeric value, got a graph (use adjacency(G) etc.)');
  if (v.kind === 'geom') throw new MatError(`expected a numeric value, got a ${v.gkind}`);
  throw new MatError('expected a numeric value, got a function handle');
}
/** Read a geometry-object property via dot syntax (TR.Points, pgon.Vertices, shp.Alpha, …). */
function geomProperty(g: Geom, name: string): Value {
  const low = name.toLowerCase();
  const rows = (m: number[][]) => fromRows2(m);
  if (low === 'points') return rows(g.points);
  if (low === 'vertices') return rows(g.points);
  if (low === 'connectivitylist') return rows((g.conn ?? []).map((r) => r.map((v) => v + 1)));
  if (low === 'alpha') return scalar(g.alpha ?? 0);
  throw new MatError(`${g.gkind} has no property '${name}'`);
}
function fromRows2(m: number[][]): Mat {
  const r = m.length, c = r ? m[0].length : 0; const out = zeros(r, c);
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) out.data[i + j * r] = m[i][j];
  return out;
}
/** Read a graph "property" via dot syntax (G.Edges, G.Nodes, G.numnodes, …). */
function graphProperty(g: Graph, name: string): Value {
  const low = name.toLowerCase();
  if (low === 'numnodes') return scalar(g.n);
  if (low === 'numedges') return scalar(g.edges.length);
  if (low === 'edges') {
    // a struct with EndNodes (m×2) and Weight (m×1) — our stand-in for the Edges table
    const m = g.edges.length; const en = zeros(m, 2); const w = zeros(m, 1);
    g.edges.forEach((e, i) => { en.data[i] = e.s + 1; en.data[i + m] = e.t + 1; w.data[i] = e.w; });
    return { kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['EndNodes', [en]], ['Weight', [w]]]) };
  }
  if (low === 'nodes') {
    const names = g.names ?? Array.from({ length: g.n }, (_, i) => String(i + 1));
    return { kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>([['Name', [makeStrArr(g.n, 1, names)]]]) };
  }
  throw new MatError(`graph has no property '${name}'`);
}
function rootName(lv: LValue): string {
  let cur: LValue = lv;
  while (cur.t !== 'ident') cur = cur.target;
  return cur.name;
}

// silence unused import warnings for tree-shaken helpers
void det; void dispValue; void mat; void Graphics;
