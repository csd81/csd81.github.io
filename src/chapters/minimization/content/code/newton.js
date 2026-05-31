const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
function solve(A, b) {
  const n = b.length, m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) { const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j]; r[i] -= f * r[k]; }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) { let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j]; x[i] = s / m[i][i]; }
  return x;
}
// Newton's method for unconstrained minimization.
function newtonMin(grad, hess, x0, tol = 1e-10, maxIter = 100) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    const p = solve(hess(x), g);
    x = x.map((xi, i) => xi - p[i]);
  }
  return x;
}
const g = (v) => [2 * (v[0] - 1), 2 * (v[1] - 2)];
const hess = () => [[2, 0], [0, 2]];
console.log(newtonMin(g, hess, [0, 0]));
