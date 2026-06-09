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
  bandwidth, cond, decomposition, decompositionSolve, expm, generalEig, ldl, linsolveWithOptions, mldivide, mldividePlan, nullspace, orth, pinv, qrPivotOutputs, qrRankWarning, rankOf, svd,
} from './src/sandbox/matlab/linalg';
import {
  cmatmul, ctranspose, finishComplex, fromRows, isComplex, matRows, matmul, sparseToDense, zeros, type Mat,
} from './src/sandbox/matlab/values';
import { createSession } from './src/sandbox/matlab/index';
import { BUILTINS } from './src/sandbox/matlab/builtins';

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

function complexDiag(re: number[], im: number[]): Mat {
  const n = re.length;
  const dr = new Float64Array(n * n), di = new Float64Array(n * n);
  for (let i = 0; i < n; i++) { dr[i + i * n] = re[i]; di[i + i * n] = im[i]; }
  return finishComplex(n, n, dr, di);
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

function svdSigma(rows: number, cols: number, s: number[]): Mat {
  const S = zeros(rows, cols);
  for (let i = 0; i < Math.min(rows, cols, s.length); i++) S.data[i + i * rows] = s[i];
  return S;
}

function assertOrthonormal(name: string, Q: Mat, tol = 1e-9): void {
  const I = zeros(Q.cols, Q.cols);
  for (let i = 0; i < Q.cols; i++) I.data[i + i * Q.cols] = 1;
  const gram = isComplex(Q) ? cmatmul(ctranspose(Q), Q) : matmul(ctranspose(Q), Q);
  const err = maxAbs(sub(gram, I));
  assert(err <= tol, name + ': orthogonality error ' + err + ' exceeded ' + tol);
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

const expmTaylorFailure = expm(fromRows([[-147, 72], [-192, 93]]));
assert(maxAbs(sub(expmTaylorFailure, fromRows([
  [-0.0995741367357243, 0.0746806025517932],
  [-0.199148273471448, 0.149361205103586],
]))) <= 1e-11, 'expm Pade should handle the MathWorks Taylor-failure example');

const expmDefective = expm(fromRows([[-1, 1], [0, -1]]));
assert(maxAbs(sub(expmDefective, fromRows([
  [0.367879441171442, 0.367879441171442],
  [0, 0.367879441171442],
]))) <= 1e-13, 'expm Pade should handle the defective Jordan example');

const expmDocSample = expm(fromRows([[0, 1, 2], [0.5, 0, 1], [2, 1, 0]]));
assert(maxAbs(sub(expmDocSample, fromRows([
  [5.30908128521068, 4.00120301823993, 5.57784029261775],
  [2.80879009040734, 2.88451554134857, 3.19301443695256],
  [5.17374600197406, 4.00120301823993, 5.71317557585436],
]))) <= 1e-12, 'expm Pade should match the MathWorks 3-by-3 sample');

const eigDocA = fromRows([[0, -6, -1], [6, 2, -16], [-5, 20, -10]]);
const eigDoc = generalEig(eigDocA, true);
const eigDocVals = eigDoc.D.re.map((re, i) => [re, eigDoc.D.im[i]]);
assert(eigDocVals.some(([re, im]) => approx(re, -3.07095035124829, 1e-8) && approx(im, 0, 1e-8)),
  'general eig should find the real eigenvalue in the MathWorks example');
assert(eigDocVals.some(([re, im]) => approx(re, -2.46452482437585, 1e-8) && approx(im, 17.600830964471, 1e-8)),
  'general eig should find the positive complex eigenvalue in the MathWorks example');
assert(eigDocVals.some(([re, im]) => approx(re, -2.46452482437585, 1e-8) && approx(im, -17.600830964471, 1e-8)),
  'general eig should find the negative complex eigenvalue in the MathWorks example');
assert(maxAbs(sub(cmatmul(eigDocA, eigDoc.V!), cmatmul(eigDoc.V!, complexDiag(eigDoc.D.re, eigDoc.D.im)))) <= 1e-6,
  'general eig eigenvectors should satisfy A*V = V*D for the MathWorks example');

const eigDefective = generalEig(fromRows([[1, -2, 1], [0, 1, 4], [0, 0, 3]]), false);
assert(eigDefective.D.re.filter((x) => approx(x, 1, 1e-10)).length === 2 && eigDefective.D.re.some((x) => approx(x, 3, 1e-10)),
  'general eig should preserve repeated eigenvalues in the defective triangular example');

const svdDocA = fromRows([[9, 4], [6, 8], [2, 7]]);
const svdDoc = svd(svdDocA);
assert(svdDoc.U.rows === 3 && svdDoc.U.cols === 3 && svdDoc.V.rows === 2 && svdDoc.V.cols === 2,
  'full svd should return full-sized U and V for the MathWorks 3-by-2 example');
assert(approx(svdDoc.s[0], 14.9359163991338, 1e-10) && approx(svdDoc.s[1], 5.1882946444941, 1e-10),
  'full svd singular values should match the MathWorks 3-by-2 example, got ' + JSON.stringify(svdDoc.s));
assert(maxAbs(sub(cmatmul(cmatmul(svdDoc.U, svdSigma(3, 2, svdDoc.s)), ctranspose(svdDoc.V)), svdDocA)) <= 1e-9,
  'full svd should reconstruct the MathWorks 3-by-2 example');
assertOrthonormal('full svd U for MathWorks 3-by-2 example', svdDoc.U);
assertOrthonormal('full svd V for MathWorks 3-by-2 example', svdDoc.V);

const svdWideRankDefA = fromRows([[1, 1, 0], [0, 0, 0]]);
const svdWideRankDef = svd(svdWideRankDefA);
assert(svdWideRankDef.U.rows === 2 && svdWideRankDef.U.cols === 2 && svdWideRankDef.V.rows === 3 && svdWideRankDef.V.cols === 3,
  'full svd should return full-sized U and V for a wide rank-deficient matrix');
assert(maxAbs(sub(cmatmul(cmatmul(svdWideRankDef.U, svdSigma(2, 3, svdWideRankDef.s)), ctranspose(svdWideRankDef.V)), svdWideRankDefA)) <= 1e-9,
  'full svd should reconstruct a wide rank-deficient matrix');
assertOrthonormal('full svd U for wide rank-deficient matrix', svdWideRankDef.U);
assertOrthonormal('full svd V for wide rank-deficient matrix', svdWideRankDef.V);

const normestDiag = (await BUILTINS.normest([fromRows([[3, 0], [0, 4]])], 1, {} as any))[0] as Mat;
assert(approx(normestDiag.data[0], 4, 1e-8), 'normest should estimate the dominant 2-norm without exact SVD, got ' + normestDiag.data[0]);
const condestDiag = (await BUILTINS.condest([fromRows([[2, 0], [0, 4]])], 1, {} as any))[0] as Mat;
assert(approx(condestDiag.data[0], 2, 1e-12), 'condest should estimate the 1-norm condition without explicit inverse, got ' + condestDiag.data[0]);
const condest1Diag = (await BUILTINS.condest1([fromRows([[2, 0], [0, 4]])], 1, {} as any))[0] as Mat;
assert(approx(condest1Diag.data[0], 2, 1e-12), 'condest1 should share the condest estimator, got ' + condest1Diag.data[0]);

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

const decompLuA = fromRows([[1, 2, 3], [4, 7, 5], [6, 8, 10]]);
const decompLuB = fromRows([[1, 2], [3, 4], [5, 6]]);
assert(maxAbs(sub(decompositionSolve(decomposition(decompLuA, 'lu'), decompLuB), mldivide(decompLuA, decompLuB))) <= 1e-10,
  'decomposition(A,"lu") should reuse LU factors for left division');
assert(maxAbs(sub(decompositionSolve(decomposition(spdForOpts), spdB), mldivide(spdForOpts, spdB))) <= 1e-10,
  'decomposition(A) should reuse Cholesky factors for SPD left division');
assert(maxAbs(sub(decompositionSolve(decomposition(symForOpts), symB), mldivide(symForOpts, symB))) <= 1e-10,
  'decomposition(A) should reuse LDL factors for symmetric-indefinite left division');
assert(maxAbs(sub(decompositionSolve(decomposition(fromRows([[1, 0], [0, 1], [1, 1]]), 'qr'), fromRows([[1], [2], [3]])), mldivide(fromRows([[1, 0], [0, 1], [1, 1]]), fromRows([[1], [2], [3]])))) <= 1e-10,
  'decomposition(A,"qr") should reuse QRCP factors for rectangular left division');

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

const decompositionSmoke = await session.run('A = [4 1; 1 3]; b = [1; 2]; dA = decomposition(A); z = dA\\b; w = A\\b;');
assert(!decompositionSmoke.error, 'decomposition object mldivide smoke failed: ' + decompositionSmoke.error);

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
