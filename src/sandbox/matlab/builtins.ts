/** Built-in functions for the MATLAB subset. */
import {
  type Value, type Mat, type Handle, MatError, isMat, isHandle,
  mat, zeros, scalar, str, rowVec, colVec, fromRows, numel, isScalar, isEmpty,
  asScalar, asString, map, elementwise, transpose, toArray,
} from './values';
import { det, inv, mldivide, diag, norm, eye } from './linalg';
import { dispValue, sprintf } from './format';
import type { Graphics } from './graphics';

/** Services the interpreter exposes to builtins. */
export interface Env {
  output(text: string): void;
  requestInput(prompt: string): Promise<string>;
  evalInput(text: string): Promise<Value>;
  graphics: Graphics;
  callHandle(h: Handle, args: Value[], nargout: number): Promise<Value[]>;
  help(name: string): string;
  clearWorkspace(names: string[]): void;
  workspaceVars(): { name: string; size: string; klass: string }[];
}

export type Builtin = (args: Value[], nargout: number, env: Env) => Promise<Value[]>;

function m(v: Value, name = 'argument'): Mat {
  if (!isMat(v)) throw new MatError(`${name}: expected a numeric value`);
  return v;
}
const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const ew = (f: (x: number) => number): Builtin => async (a) => ret(map(m(a[0]), f));

function reduce(a: Mat, dim: number | undefined, init: number, f: (acc: number, x: number) => number, fin: (acc: number, count: number) => number = (x) => x): Mat {
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
  return args.length > i && isMat(args[i]) ? asScalar(args[i]) : undefined;
}

function sizeOf(args: Value[], nargout: number): Value[] {
  const A = m(args[0]);
  if (args.length >= 2) { const d = asScalar(args[1]); return [scalar(d === 1 ? A.rows : d === 2 ? A.cols : 1)]; }
  if (nargout >= 2) return [scalar(A.rows), scalar(A.cols)];
  return [rowVec([A.rows, A.cols])];
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
  // elementwise math
  sin: ew(Math.sin), cos: ew(Math.cos), tan: ew(Math.tan),
  asin: ew(Math.asin), acos: ew(Math.acos), atan: ew(Math.atan),
  sinh: ew(Math.sinh), cosh: ew(Math.cosh), tanh: ew(Math.tanh),
  cot: ew((x) => 1 / Math.tan(x)), exp: ew(Math.exp),
  log: ew(Math.log), log2: ew(Math.log2), log10: ew(Math.log10),
  sqrt: ew(Math.sqrt), abs: ew(Math.abs), sign: ew(Math.sign),
  floor: ew(Math.floor), ceil: ew(Math.ceil), round: ew((x) => Math.round(x)),
  fix: ew(Math.trunc),
  atan2: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.atan2)),
  mod: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? x : ((x % y) + y) % y))),
  rem: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? NaN : x % y))),
  power: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.pow)),
  nthroot: async (a) => ret(elementwise(m(a[0]), m(a[1]), nthroot)),
  hypot: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.hypot)),

  // reductions
  sum: async (a) => ret(reduce(m(a[0]), dimArg(a, 1), 0, (s, x) => s + x)),
  prod: async (a) => ret(reduce(m(a[0]), dimArg(a, 1), 1, (s, x) => s * x)),
  mean: async (a) => ret(reduce(m(a[0]), dimArg(a, 1), 0, (s, x) => s + x, (s, n) => s / n)),
  cumsum: async (a) => {
    const A = m(a[0]); const out = zeros(A.rows, A.cols);
    if (A.rows === 1 || A.cols === 1) { let s = 0; for (let i = 0; i < A.data.length; i++) { s += A.data[i]; out.data[i] = s; } }
    else for (let c = 0; c < A.cols; c++) { let s = 0; for (let r = 0; r < A.rows; r++) { s += A.data[r + c * A.rows]; out.data[r + c * A.rows] = s; } }
    return ret(out);
  },
  max: async (a, n) => minmax(a, n, (x, y) => x > y || Number.isNaN(y)),
  min: async (a, n) => minmax(a, n, (x, y) => x < y || Number.isNaN(y)),
  norm: async (a) => {
    const p = a.length >= 2 ? (isMat(a[1]) && (a[1] as Mat).isChar ? 'fro' : asScalar(a[1])) : 2;
    const pp = p === Infinity ? 'inf' : p;
    return ret(scalar(norm(m(a[0]), pp as number | 'inf' | 'fro')));
  },

  // shape / construction
  size: async (a, n) => sizeOf(a, n),
  numel: async (a) => ret(scalar(numel(m(a[0])))),
  length: async (a) => { const A = m(a[0]); return ret(scalar(isEmpty(A) ? 0 : Math.max(A.rows, A.cols))); },
  ndims: async () => ret(scalar(2)),
  isempty: async (a) => ret(scalar(isEmpty(m(a[0])) ? 1 : 0)),
  isscalar: async (a) => ret(scalar(isScalar(m(a[0])) ? 1 : 0)),
  zeros: async (a) => { const [r, c] = dims2(a); return ret(zeros(r, c)); },
  ones: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); o.data.fill(1); return ret(o); },
  eye: async (a) => { const [r, c] = dims2(a); return ret(eye(r, c)); },
  rand: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = Math.random(); return ret(o); },
  linspace: async (a) => {
    const lo = asScalar(a[0]), hi = asScalar(a[1]); const n = a.length >= 3 ? Math.round(asScalar(a[2])) : 100;
    if (n < 2) return ret(rowVec([hi]));
    const out: number[] = []; for (let i = 0; i < n; i++) out.push(lo + (hi - lo) * i / (n - 1));
    return ret(rowVec(out));
  },
  repmat: async (a) => {
    const A = m(a[0]); const mr = asScalar(a[1]); const nc = a.length >= 3 ? asScalar(a[2]) : mr;
    const out = zeros(A.rows * mr, A.cols * nc);
    for (let br = 0; br < mr; br++) for (let bc = 0; bc < nc; bc++)
      for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++)
        out.data[(br * A.rows + r) + (bc * A.cols + c) * out.rows] = A.data[r + c * A.rows];
    return ret(out);
  },
  reshape: async (a) => {
    const A = m(a[0]); let r = asScalar(a[1]); let c = a.length >= 3 ? asScalar(a[2]) : 0;
    if (!c) c = numel(A) / r; if (!r) r = numel(A) / c;
    if (r * c !== numel(A)) throw new MatError('reshape: element count must not change');
    const out = mat(r, c, Float64Array.from(A.data)); out.isChar = A.isChar; return ret(out);
  },
  diff: async (a) => {
    const A = m(a[0]);
    if (A.rows === 1 || A.cols === 1) { const v = toArray(A); const out: number[] = []; for (let i = 1; i < v.length; i++) out.push(v[i] - v[i - 1]); return ret(A.cols === 1 ? colVec(out) : rowVec(out)); }
    const out = zeros(A.rows - 1, A.cols);
    for (let c = 0; c < A.cols; c++) for (let r = 1; r < A.rows; r++) out.data[(r - 1) + c * out.rows] = A.data[r + c * A.rows] - A.data[(r - 1) + c * A.rows];
    return ret(out);
  },
  sort: async (a, n) => {
    const A = m(a[0]); const vals = toArray(A).map((v, i) => [v, i + 1] as [number, number]);
    vals.sort((x, y) => x[0] - y[0]);
    const sorted = A.cols === 1 ? colVec(vals.map((v) => v[0])) : rowVec(vals.map((v) => v[0]));
    return n >= 2 ? [sorted, A.cols === 1 ? colVec(vals.map((v) => v[1])) : rowVec(vals.map((v) => v[1]))] : [sorted];
  },

  // linear algebra
  det: async (a) => ret(scalar(det(m(a[0])))),
  inv: async (a) => ret(inv(m(a[0]))),
  mldivide: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  diag: async (a) => ret(diag(m(a[0]))),
  trace: async (a) => { const A = m(a[0]); let s = 0; const n = Math.min(A.rows, A.cols); for (let i = 0; i < n; i++) s += A.data[i + i * A.rows]; return ret(scalar(s)); },
  transpose: async (a) => ret(transpose(m(a[0]))),
  dot: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); let s = 0; for (let i = 0; i < x.length; i++) s += x[i] * y[i]; return ret(scalar(s)); },

  // strings / conversion
  num2str: async (a) => ret(str(isScalar(m(a[0])) ? trimNum(asScalar(a[0])) : matToStr(m(a[0])))),
  int2str: async (a) => ret(str(String(Math.round(asScalar(a[0]))))),
  mat2str: async (a) => ret(str(matToStr(m(a[0])))),
  str2num: async (a, _n, env) => ret(await env.evalInput(asString(a[0]))),
  str2double: async (a) => ret(scalar(parseFloat(asString(a[0])))),

  // logical helpers
  isnan: async (a) => ret(map(m(a[0]), (x) => (Number.isNaN(x) ? 1 : 0))),
  isinf: async (a) => ret(map(m(a[0]), (x) => (!Number.isFinite(x) && !Number.isNaN(x) ? 1 : 0))),
  isfinite: async (a) => ret(map(m(a[0]), (x) => (Number.isFinite(x) ? 1 : 0))),
  any: async (a) => { const A = m(a[0]); if (A.rows === 1 || A.cols === 1) return ret(scalar(toArray(A).some((x) => x !== 0) ? 1 : 0)); return ret(reduce(A, 1, 0, (s, x) => (s || x !== 0 ? 1 : 0))); },
  all: async (a) => { const A = m(a[0]); if (A.rows === 1 || A.cols === 1) return ret(scalar(toArray(A).every((x) => x !== 0) ? 1 : 0)); return ret(reduce(A, 1, 1, (s, x) => (s && x !== 0 ? 1 : 0))); },
  mod2: async () => ret(scalar(0)),

  // I/O
  disp: async (a, _n, env) => { env.output(dispValue(a[0]) + '\n'); return []; },
  display: async (a, _n, env) => { env.output(dispValue(a[0]) + '\n'); return []; },
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
    const arrays = a.slice(1).map((v) => m(v));
    const A0 = arrays[0];
    const out = zeros(A0.rows, A0.cols);
    for (let i = 0; i < A0.data.length; i++) {
      const callArgs = arrays.map((arr) => scalar(arr.data[i]));
      const r = await env.callHandle(f, callArgs, 1);
      out.data[i] = r.length ? asScalar(r[0]) : NaN;
    }
    return ret(out);
  },

  // graphics
  plot: async (a, _n, env) => { env.graphics.plot(a); return []; },
  fplot: async (a, _n, env) => {
    const f = a[0];
    if (!isHandle(f)) throw new MatError('fplot: expected a function handle');
    let lo = -5, hi = 5;
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) >= 2) { const rg = toArray(a[1] as Mat); lo = rg[0]; hi = rg[1]; }
    else if (env.graphics.fig.xRange) { [lo, hi] = env.graphics.fig.xRange; }
    const N = 400; const xs: number[] = []; const ys: number[] = [];
    for (let i = 0; i < N; i++) {
      const x = lo + (hi - lo) * i / (N - 1);
      const r = await env.callHandle(f, [scalar(x)], 1);
      xs.push(x); ys.push(r.length && isMat(r[0]) ? asScalar(r[0]) : NaN);
    }
    env.graphics.addSeries(xs, ys);
    return [];
  },
  hold: async (a, _n, env) => { env.graphics.command('hold', a); return []; },
  grid: async (a, _n, env) => { env.graphics.command('grid', a); return []; },
  title: async (a, _n, env) => { env.graphics.command('title', a); return []; },
  xlabel: async (a, _n, env) => { env.graphics.command('xlabel', a); return []; },
  ylabel: async (a, _n, env) => { env.graphics.command('ylabel', a); return []; },
  legend: async (a, _n, env) => { env.graphics.command('legend', a); return []; },
  axis: async (a, _n, env) => { env.graphics.command('axis', a); return []; },
  clf: async (_a, _n, env) => { env.graphics.command('clf', []); return []; },
  cla: async (_a, _n, env) => { env.graphics.command('cla', []); return []; },
  close: async (_a, _n, env) => { env.graphics.command('close', []); return []; },
  figure: async (_a, _n, env) => { env.graphics.command('figure', []); return [{ kind: 'gobj', gtype: 'figure' }]; },
  gca: async () => ret({ kind: 'gobj', gtype: 'axes' }),
  gcf: async () => ret({ kind: 'gobj', gtype: 'figure' }),
  set: async (a, _n, env) => {
    // set(handle, 'Prop', val, ...) — apply to current axes.
    for (let i = 1; i + 1 < a.length; i += 2) env.graphics.setAxesProp(asString(a[i]), a[i + 1]);
    return [];
  },
  drawnow: async () => [],
  pause: async () => [],
  clc: async () => [],
  tic: async () => [],
  toc: async () => ret(scalar(0)),

  // help / workspace
  help: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  doc: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  lookfor: async (a, _n, env) => { env.output(a.length ? env.help(asString(a[0])) + '\n' : GENERAL_HELP + '\n'); return []; },
  clear: async (a, _n, env) => { env.clearWorkspace(a.map((v) => asString(v))); return []; },
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

/** Short descriptions for common built-ins (shown by `help`). */
export const BUILTIN_HELP: Record<string, string> = {
  sin: 'sin(X)  Sine of X (radians), element-wise.',
  cos: 'cos(X)  Cosine of X (radians), element-wise.',
  tan: 'tan(X)  Tangent of X (radians), element-wise.',
  atan: 'atan(X)  Inverse tangent, element-wise.',
  exp: 'exp(X)  Exponential e.^X, element-wise.',
  log: 'log(X)  Natural logarithm, element-wise.',
  log10: 'log10(X)  Base-10 logarithm, element-wise.',
  sqrt: 'sqrt(X)  Square root, element-wise.',
  abs: 'abs(X)  Absolute value, element-wise.',
  nthroot: 'nthroot(X,N)  Real N-th root of X (handles negative X for odd N).',
  mod: 'mod(A,B)  Modulus after division (sign of divisor).',
  rem: 'rem(A,B)  Remainder after division (sign of dividend).',
  round: 'round(X)  Round to nearest integer.',
  floor: 'floor(X)  Round towards minus infinity.',
  ceil: 'ceil(X)  Round towards plus infinity.',
  sum: 'sum(X)  Sum of elements (columns for a matrix). sum(X,DIM) along DIM.',
  prod: 'prod(X)  Product of elements.',
  mean: 'mean(X)  Average of elements.',
  max: '[M,I]=max(X)  Largest element and its index (per column for a matrix).',
  min: '[M,I]=min(X)  Smallest element and its index.',
  zeros: 'zeros(N) / zeros(R,C)  Matrix of zeros.',
  ones: 'ones(N) / ones(R,C)  Matrix of ones.',
  eye: 'eye(N)  Identity matrix.',
  linspace: 'linspace(A,B,N)  N points evenly spaced from A to B.',
  size: '[R,C]=size(X)  Dimensions of X. size(X,DIM) one dimension.',
  length: 'length(X)  Largest dimension of X.',
  numel: 'numel(X)  Number of elements.',
  diff: 'diff(X)  Differences between consecutive elements.',
  diag: 'diag(X)  Diagonal of a matrix, or a diagonal matrix from a vector.',
  inv: 'inv(A)  Inverse of a square matrix.',
  det: 'det(A)  Determinant of a square matrix.',
  norm: 'norm(X)  Vector/matrix norm. norm(X,P) for P = 1, 2, inf.',
  transpose: "transpose(X) or X'  Transpose.",
  plot: "plot(X,Y,...)  Line plot; pass a linespec like '*' or '--r'. plot(X,Y,X2,Y2) for several.",
  fplot: 'fplot(@f)  Plot a function handle over the current x-range.',
  hold: "hold on / hold off  Keep or replace existing plots.",
  gca: 'gca  Handle to the current axes (set .XLim, .YLim, .XAxisLocation, …).',
  disp: 'disp(X)  Display the value of X without its name.',
  fprintf: "fprintf(FMT,...)  Formatted output, e.g. fprintf('x = %.4f\\n', x).",
  sprintf: 'sprintf(FMT,...)  Like fprintf but returns the string.',
  input: "input(PROMPT)  Read a value typed into the command window. input(PROMPT,'s') for text.",
  arrayfun: 'arrayfun(@f,X)  Apply f to each element of X.',
};

function trimNum(x: number): string {
  if (Number.isInteger(x)) return String(x);
  return parseFloat(x.toPrecision(5)).toString();
}
function matToStr(A: Mat): string {
  const rows: string[] = [];
  for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(trimNum(A.data[r + c * A.rows])); rows.push(row.join(' ')); }
  return rows.join('; ');
}

/** Numeric constants exposed as bare identifiers. */
export const CONSTANTS: Record<string, () => Value> = {
  pi: () => scalar(Math.PI),
  e: () => scalar(Math.E),
  eps: () => scalar(Number.EPSILON),
  Inf: () => scalar(Infinity), inf: () => scalar(Infinity),
  NaN: () => scalar(NaN), nan: () => scalar(NaN),
  true: () => scalar(1), false: () => scalar(0),
  realmax: () => scalar(Number.MAX_VALUE), realmin: () => scalar(Number.MIN_VALUE),
};
