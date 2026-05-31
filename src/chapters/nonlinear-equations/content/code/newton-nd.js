// Newton's method for F(x) = 0 with Jacobian J(x).
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}
function newtonSystem(F, J, x0, tol = 1e-12, maxIter = 100) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const Fx = F(x);
    if (Math.max(...Fx.map(Math.abs)) < tol) return x;
    const dx = solve(J(x), Fx);
    x = x.map((v, i) => v - dx[i]);
  }
  return x;
}
const F = (v) => [v[0] ** 2 + v[1] ** 2 - 4, v[0] * v[1] - 1];
const J = (v) => [[2 * v[0], 2 * v[1]], [v[1], v[0]]];
console.log(newtonSystem(F, J, [2, 0.5]));
