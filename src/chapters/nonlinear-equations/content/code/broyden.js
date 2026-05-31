// Broyden's (good) method for F(x) = 0.
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
function broyden(F, x0, tol = 1e-12, maxIter = 100) {
  const n = x0.length;
  let x = [...x0];
  let B = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let Fx = F(x);
  for (let k = 0; k < maxIter; k++) {
    if (Math.max(...Fx.map(Math.abs)) < tol) return x;
    const dx = solve(B, Fx.map((v) => -v));
    x = x.map((v, i) => v + dx[i]);
    const Fn = F(x), y = Fn.map((v, i) => v - Fx[i]);
    const Bdx = B.map((row) => row.reduce((s, v, j) => s + v * dx[j], 0));
    const dd = dx.reduce((s, v) => s + v * v, 0);
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) B[i][j] += ((y[i] - Bdx[i]) * dx[j]) / dd;
    Fx = Fn;
  }
  return x;
}
console.log(broyden((v) => [v[0] ** 2 + v[1] ** 2 - 4, v[0] * v[1] - 1], [2, 0.5]));
