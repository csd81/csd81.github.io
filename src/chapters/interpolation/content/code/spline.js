// Natural cubic spline: per-interval coefficients (a, b, c, d).
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
function naturalCubicSpline(x, y) {
  const n = x.length;
  const h = Array.from({ length: n - 1 }, (_, i) => x[i + 1] - x[i]);
  const A = Array.from({ length: n }, () => new Array(n).fill(0));
  const rhs = new Array(n).fill(0);
  A[0][0] = 1; A[n - 1][n - 1] = 1;
  for (let i = 1; i < n - 1; i++) {
    A[i][i - 1] = h[i - 1]; A[i][i] = 2 * (h[i - 1] + h[i]); A[i][i + 1] = h[i];
    rhs[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1]);
  }
  const c = solve(A, rhs);
  const a = y.slice(0, n - 1);
  const b = a.map((_, i) => (y[i + 1] - y[i]) / h[i] - (h[i] * (2 * c[i] + c[i + 1])) / 3);
  const d = a.map((_, i) => (c[i + 1] - c[i]) / (3 * h[i]));
  return { a, b, c: c.slice(0, n - 1), d };
}
console.log('a =', naturalCubicSpline([0, 1, 2, 3], [0, 1, 0, 1]).a);
