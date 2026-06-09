import { build } from 'esbuild';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const repoRoot = resolve(new URL('..', import.meta.url).pathname);
const outdir = mkdtempSync(join(tmpdir(), 'matlab-linalg-'));
const outfile = join(outdir, 'regression.mjs');

const source = String.raw`
import {
  bandwidth, cond, ldl, linsolveWithOptions, mldivide, mldividePlan, nullspace, orth, pinv, qrPivotOutputs, qrRankWarning, rankOf,
} from './src/sandbox/matlab/linalg';
import {
  cmatmul, ctranspose, fromRows, isComplex, matRows, matmul, sparseToDense, type Mat,
} from './src/sandbox/matlab/values';
import { createSession } from './src/sandbox/matlab/index';

function assert(cond: boolean, msg: string): void {
  if (!cond) throw new Error(msg);
}

function approx(a: number, b: number, tol = 1e-9): boolean {
  return Math.abs(a - b) <= tol;
}

function maxAbs(M: Mat): number {
  let out = 0;
  for (let i = 0; i < M.data.length; i++) out = Math.max(out, Math.hypot(M.data[i], M.idata ? M.idata[i] : 0));
  return out;
}

function sub(A: Mat, B: Mat): Mat {
  const C: Mat = { ...A, data: Float64Array.from(A.data) };
  for (let i = 0; i < C.data.length; i++) C.data[i] -= B.data[i];
  if (A.idata || B.idata) {
    C.idata = new Float64Array(C.data.length);
    for (let i = 0; i < C.idata.length; i++) C.idata[i] = (A.idata ? A.idata[i] : 0) - (B.idata ? B.idata[i] : 0);
  }
  return C;
}

function complexFromRows(re: number[][], im: number[][]): Mat {
  const A = fromRows(re);
  A.idata = fromRows(im).data;
  return A;
}

function assertPlan(name: string, rows: number[][], plan: ReturnType<typeof mldividePlan>): Mat {
  const A = fromRows(rows);
  const got = mldividePlan(A);
  assert(got === plan, name + ': expected plan ' + plan + ', got ' + got + ' with bandwidth ' + JSON.stringify(bandwidth(A)));
  return A;
}

function assertResidual(name: string, A: Mat, B: Mat, tol = 1e-8): Mat {
  const X = mldivide(A, B);
  const AX = isComplex(A) || isComplex(X) ? cmatmul(A, X) : matmul(A, X);
  const resid = maxAbs(sub(AX, B));
  assert(resid <= tol, name + ': residual ' + resid + ' exceeded ' + tol);
  return X;
}

function assertSolveResidual(name: string, A: Mat, X: Mat, B: Mat, tol = 1e-8): void {
  const AX = isComplex(A) || isComplex(X) ? cmatmul(A, X) : matmul(A, X);
  const resid = maxAbs(sub(AX, B));
  assert(resid <= tol, name + ': residual ' + resid + ' exceeded ' + tol);
}

assertPlan('diagonal', [[2, 0], [0, 4]], 'diagonal');
assertPlan('upper triangular', [[2, 1], [0, 4]], 'upper-triangular');
assertPlan('lower triangular', [[2, 0], [1, 4]], 'lower-triangular');
assertPlan('row-permuted triangular', [[0, 1], [2, 3]], 'permuted-upper-triangular');

const tri = assertPlan('tridiagonal no-pivot', [
  [4, 1, 0, 0],
  [1, 4, 1, 0],
  [0, 1, 4, 1],
  [0, 0, 1, 4],
], 'tridiagonal');
assertResidual('tridiagonal no-pivot', tri, fromRows([[1], [2], [3], [4]]));

const pivotTri = assertPlan('tridiagonal pivot fallback', [
  [0, 2, 0, 0],
  [4, 5, 1, 0],
  [0, 3, 6, 1],
  [0, 0, 2, 7],
], 'banded');
assertResidual('tridiagonal pivot fallback', pivotTri, fromRows([[1], [2], [3], [4]]));

const banded = assertPlan('pentadiagonal', [
  [6, 2, -1, 0, 0, 0, 0, 0],
  [1, 7, 2, -1, 0, 0, 0, 0],
  [-1, 1, 8, 2, -1, 0, 0, 0],
  [0, -1, 1, 9, 2, -1, 0, 0],
  [0, 0, -1, 1, 10, 2, -1, 0],
  [0, 0, 0, -1, 1, 11, 2, -1],
  [0, 0, 0, 0, -1, 1, 12, 2],
  [0, 0, 0, 0, 0, -1, 1, 13],
], 'banded');
assertResidual('pentadiagonal', banded, fromRows([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]]));

const hessenberg = assertPlan('upper Hessenberg', [
  [5, 1, 2, 3, 4, 5],
  [1, 6, 1, 2, 3, 4],
  [0, 2, 7, 1, 2, 3],
  [0, 0, 3, 8, 1, 2],
  [0, 0, 0, 4, 9, 1],
  [0, 0, 0, 0, 5, 10],
], 'hessenberg');
assertResidual('upper Hessenberg', hessenberg, fromRows([[1], [2], [3], [4], [5], [6]]));

const lowerForOpts = fromRows([[2, 0, 0], [1, 3, 0], [4, 5, 6]]);
const lowerB = fromRows([[2], [7], [32]]);
assertSolveResidual('linsolve LT option', lowerForOpts, linsolveWithOptions(lowerForOpts, lowerB, { LT: true }), lowerB);

const upperForOpts = fromRows([[2, 1, 4], [0, 3, 5], [0, 0, 6]]);
const upperB = fromRows([[16], [13], [12]]);
assertSolveResidual('linsolve UT option', upperForOpts, linsolveWithOptions(upperForOpts, upperB, { UT: true }), upperB);

const spdForOpts = fromRows([[4, 1, 1], [1, 3, 1], [1, 1, 2]]);
const spdB = fromRows([[6], [5], [4]]);
assertSolveResidual('linsolve POSDEF option', spdForOpts, linsolveWithOptions(spdForOpts, spdB, { POSDEF: true }), spdB);

const symForOpts = fromRows([[0, 1, 1], [1, 0, 1], [1, 1, 0]]);
const symB = fromRows([[2], [3], [4]]);
assertSolveResidual('linsolve SYM option', symForOpts, linsolveWithOptions(symForOpts, symB, { SYM: true }), symB);

const transA = fromRows([[2, 1], [0, 3]]);
const transB = fromRows([[2], [7]]);
assertSolveResidual('linsolve TRANSA option', ctranspose(transA), linsolveWithOptions(transA, transB, { TRANSA: true }), transB);

assertPlan('cholesky', [[4, 1, 1], [1, 3, 1], [1, 1, 2]], 'cholesky');
assertPlan('ldl', [[0, 1, 1], [1, 0, 1], [1, 1, 0]], 'ldl');
assertPlan('lu', [[1, 2, 3], [4, 7, 5], [6, 8, 10]], 'lu');
assertPlan('rectangular qrcp', [[1, 0], [0, 1], [1, 1]], 'qrcp');

const ldlA = fromRows([[0, 0, 2], [0, 3, 1], [2, 1, 4]]);
const ldlFac = ldl(ldlA);
assert(maxAbs(sub(matmul(matmul(ldlFac.P, ldlA), ctranspose(ldlFac.P)), matmul(matmul(ldlFac.L, ldlFac.D), ctranspose(ldlFac.L)))) <= 1e-8,
  'pivoted LDL reconstruction failed');
assert(maxAbs(sub(ldlFac.P, fromRows([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))) > 0,
  'pivoted LDL should expose a nontrivial permutation matrix');

const minNormA = assertPlan('rank-deficient underdetermined', [[1, 1, 0], [0, 0, 0]], 'qrcp');
const basicX = mldivide(minNormA, fromRows([[2], [0]]));
const basicRows = matRows(basicX);
assert(approx(basicRows[0][0], 2) && approx(basicRows[1][0], 0) && approx(basicRows[2][0], 0),
  'rank-deficient underdetermined backslash: expected MATLAB basic solution [2;0;0], got ' + JSON.stringify(basicRows));
assert((qrRankWarning(minNormA) ?? '').startsWith('Rank deficient, rank = 1, tol = '),
  'rank-deficient underdetermined: missing rank warning');

const nearRankDef = fromRows([[1, 1], [1, 1 + Number.EPSILON]]);
assert(rankOf(nearRankDef) === 1, 'near-rank-deficient matrix should have MATLAB rank 1');
assert(cond(nearRankDef) > 1e15 && Number.isFinite(cond(nearRankDef)), 'near-rank-deficient cond should be finite and large');
const nearPinvRows = matRows(pinv(nearRankDef));
for (const row of nearPinvRows) for (const v of row) assert(approx(v, 0.25, 1e-10), 'near-rank-deficient pinv should be approximately all 0.25, got ' + JSON.stringify(nearPinvRows));
assert(orth(nearRankDef).cols === 1, 'near-rank-deficient orth should have one basis vector');
const nearNull = nullspace(nearRankDef);
assert(nearNull.cols === 1, 'near-rank-deficient null should have one basis vector');
assert(maxAbs(matmul(nearRankDef, nearNull)) <= 1e-10, 'near-rank-deficient null residual too large');

const wideNull = nullspace(minNormA);
assert(wideNull.cols === 2, 'wide rank-deficient null should have two basis vectors');
assert(maxAbs(matmul(minNormA, wideNull)) <= 1e-10, 'wide rank-deficient null residual too large');
const widePinvX = matmul(pinv(minNormA), fromRows([[2], [0]]));
const widePinvRows = matRows(widePinvX);
assert(approx(widePinvRows[0][0], 1) && approx(widePinvRows[1][0], 1) && approx(widePinvRows[2][0], 0),
  'wide rank-deficient pinv: expected [1;1;0], got ' + JSON.stringify(widePinvRows));

const pivotQrA = fromRows([[1, 10], [0, 0], [0, 0]]);
const pivotQr = qrPivotOutputs(pivotQrA);
assert(maxAbs(sub(matmul(pivotQrA, pivotQr.E), matmul(pivotQr.Q, pivotQr.R))) <= 1e-8,
  'QRCP should satisfy A*E = Q*R');
assert(pivotQr.E.data[1] === 1 && pivotQr.E.data[2] === 1, 'QRCP should pivot the larger column first');

const complexDiagonal = complexFromRows([[2, 0], [0, 4]], [[1, 0], [0, -1]]);
assert(mldividePlan(complexDiagonal) === 'complex-diagonal', 'complex diagonal should use complex-diagonal plan');
assertResidual('complex diagonal', complexDiagonal, complexFromRows([[3], [5]], [[1], [-2]]));

const complexUpper = complexFromRows([[2, 1], [0, 4]], [[1, -1], [0, 2]]);
assert(mldividePlan(complexUpper) === 'complex-upper-triangular', 'complex upper should use complex-upper-triangular plan');
assertResidual('complex upper triangular', complexUpper, complexFromRows([[3], [5]], [[1], [-2]]));

const complexLower = complexFromRows([[2, 0], [1, 4]], [[1, 0], [-1, 2]]);
assert(mldividePlan(complexLower) === 'complex-lower-triangular', 'complex lower should use complex-lower-triangular plan');
assertResidual('complex lower triangular', complexLower, complexFromRows([[3], [5]], [[1], [-2]]));

const complexSquare = complexFromRows([[1, 2], [3, 5]], [[0, 1], [-1, 0]]);
assert(mldividePlan(complexSquare) === 'complex-lu', 'complex square should use complex-lu plan');

const complexMinNormA = complexFromRows([[1, 1, 0], [0, 0, 0]], [[1, -1, 0], [0, 0, 0]]);
assert(mldividePlan(complexMinNormA) === 'complex-qrcp', 'complex rank-deficient underdetermined should use complex-qrcp plan');
assertResidual('complex rank-deficient underdetermined', complexMinNormA, complexFromRows([[2], [0]], [[0], [0]]));

let out = '';
const session = createSession({ onOutput: (t: string) => { out += t; } });
await session.run('S = sparse([2 0; 0 4]); b = [2; 8]; x = S\\b; y = mldivide(S,b);');
const sparseWarnings = (out.match(/Sparse matrix left division is using a full dense fallback/g) || []).length;
assert(sparseWarnings === 2, 'expected two sparse fallback warnings, got ' + sparseWarnings + '\n' + out);

const linsolveSmoke = await session.run('A = [2 0 0; 1 3 0; 4 5 6]; b = [2; 7; 32]; opts = struct("LT",true); z = linsolve(A,b,opts);');
assert(!linsolveSmoke.error, 'linsolve builtin options smoke failed: ' + linsolveSmoke.error);

const denseSparse = sparseToDense({ kind: 'sparse', rows: 2, cols: 2, colptr: new Int32Array([0, 1, 2]), rowind: new Int32Array([0, 1]), values: new Float64Array([2, 4]) });
assert(mldividePlan(denseSparse) === 'diagonal', 'sparse dense fallback fixture should densify to diagonal plan');

console.log('matlab linalg regression: ok');
`;

try {
  await build({
    stdin: {
      contents: source,
      resolveDir: repoRoot,
      sourcefile: 'matlab-linalg-regression.ts',
      loader: 'ts',
    },
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile,
    logLevel: 'silent',
  });
  await import(pathToFileURL(outfile).href);
} finally {
  rmSync(outdir, { recursive: true, force: true });
}
