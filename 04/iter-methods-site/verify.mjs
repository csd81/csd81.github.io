// Standalone verification of the numeric core (mirrors src/compute) against
// textbook results. Run with: node verify.mjs
import { Matrix, inverse, EigenvalueDecomposition, SingularValueDecomposition } from 'ml-matrix';

const normInf = (a) => a.reduce((m, r) => Math.max(m, r.reduce((s, v) => s + Math.abs(v), 0)), 0);
const norm1 = (a) => {
  const n = a.length, c = a[0].length;
  let max = 0;
  for (let j = 0; j < c; j++) { let s = 0; for (let i = 0; i < n; i++) s += Math.abs(a[i][j]); max = Math.max(max, s); }
  return max;
};
const norm2 = (a) => Math.max(...new SingularValueDecomposition(new Matrix(a)).diagonal);
const cond = (a, p) => {
  const inv = inverse(new Matrix(a)).to2DArray();
  const nrm = p === 'inf' ? normInf : p === '1' ? norm1 : norm2;
  return nrm(a) * nrm(inv);
};
const spectralRadius = (a) => {
  const e = new EigenvalueDecomposition(new Matrix(a));
  return Math.max(...e.realEigenvalues.map((r, i) => Math.hypot(r, e.imaginaryEigenvalues[i] ?? 0)));
};
const jacobiT = (a) => a.map((row, i) => row.map((v, j) => (i === j ? 0 : -v / a[i][i])));
const matVec = (a, x) => a.map((row) => row.reduce((s, v, j) => s + v * x[j], 0));

function iterate(a, b, x0, method, maxSteps, tol = 1e-7) {
  const n = a.length; let x = [...x0]; const out = [x];
  for (let k = 1; k <= maxSteps; k++) {
    const next = new Array(n);
    for (let i = 0; i < n; i++) {
      let s = b[i];
      for (let j = 0; j < n; j++) {
        if (j === i) continue;
        const xj = method === 'gs' && j < i ? next[j] : x[j];
        s -= a[i][j] * xj;
      }
      next[i] = s / a[i][i];
    }
    x = next; out.push(x);
    const r = b.map((bi, i) => bi - matVec(a, x)[i]);
    if (normInf([r]) < tol) return { x, k, out };
    if (!Number.isFinite(normInf([r])) || normInf([r]) > 1e12) return { x, k, diverged: true, out };
  }
  return { x, k: maxSteps, out };
}

const ok = (cond, msg) => console.log(`${cond ? '✓' : '✗ FAIL'}  ${msg}`);
const near = (a, b, tol) => Math.abs(a - b) <= tol;

// 1. Textbook system -> (1, -2, 3)
const A = [[5, 3, -1], [2, -10, 1], [-3, 4, -12]];
const b = [-4, 25, -47];
const jac = iterate(A, b, [0, 0, 0], 'jacobi', 100);
const gs = iterate(A, b, [0, 0, 0], 'gs', 100);
ok(near(jac.x[0], 1, 1e-4) && near(jac.x[1], -2, 1e-4) && near(jac.x[2], 3, 1e-4),
   `Jacobi -> (${jac.x.map((v) => v.toFixed(4)).join(', ')})  in ${jac.k} steps`);
ok(near(gs.x[0], 1, 1e-4) && near(gs.x[1], -2, 1e-4) && near(gs.x[2], 3, 1e-4),
   `Gauss-Seidel -> (${gs.x.map((v) => v.toFixed(4)).join(', ')})  in ${gs.k} steps`);
ok(gs.k < jac.k, `Gauss-Seidel faster than Jacobi (${gs.k} < ${jac.k})`);

// 2. ||T_J||_inf = 4/5 for the textbook matrix
const TJ = jacobiT(A);
ok(near(normInf(TJ), 0.8, 1e-9), `||T_J||_inf = ${normInf(TJ).toFixed(4)} (expect 0.8)`);
ok(spectralRadius(TJ) < 1, `rho(T_J) = ${spectralRadius(TJ).toFixed(4)} < 1`);

// 3. Divergent preset [[1,3],[2,1]]
const Ad = [[1, 3], [2, 1]];
const div = iterate(Ad, [4, 3], [0, 0], 'jacobi', 60);
ok(spectralRadius(jacobiT(Ad)) > 1, `rho(T_J) = ${spectralRadius(jacobiT(Ad)).toFixed(4)} > 1 (divergent)`);
ok(div.diverged === true, `divergent preset blows up (diverged=${!!div.diverged})`);

// 4. Ill-conditioned [[4,1],[4.03,1]] -> cond_inf ~ 1346
const cInf = cond([[4, 1], [4.03, 1]], 'inf');
ok(near(cInf, 1346, 60), `cond_inf([[4,1],[4.03,1]]) = ${cInf.toFixed(0)} (expect ~1346)`);

// 5. Hilbert cond_2 orders of magnitude (Table 4.3)
const hilbert = (n) => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => 1 / (i + j + 1)));
// Ground-truth values match MATLAB cond(hilb(n)): H5 ~ 4.77e5, H6 ~ 1.50e7.
// (The source Table 4.3 prints 1.50e6 for n=6, an off-by-one-decade typo.)
const h5 = cond(hilbert(5), '2'), h6 = cond(hilbert(6), '2');
ok(h5 > 1e5 && h5 < 1e6, `cond_2(H5) = ${h5.toExponential(2)} (expect ~4.77e5)`);
ok(h6 > 1e7 && h6 < 2e7, `cond_2(H6) = ${h6.toExponential(2)} (expect ~1.50e7, matches MATLAB)`);

// 6. Complex eigenvalues inside unit circle
const rot = [[0.4, -0.6], [0.6, 0.4]];
ok(near(spectralRadius(rot), Math.hypot(0.4, 0.6), 1e-9),
   `rho(rotation) = ${spectralRadius(rot).toFixed(4)} (expect ${Math.hypot(0.4, 0.6).toFixed(4)})`);

console.log('\nDone.');
