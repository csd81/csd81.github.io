// Hermite interpolation via divided differences with doubled nodes.
function hermiteCoeffs(x, y, dy) {
  const n = x.length, m = 2 * n;
  const z = new Array(m).fill(0);
  const Q = Array.from({ length: m }, () => new Array(m).fill(0));
  for (let i = 0; i < n; i++) {
    z[2 * i] = x[i]; z[2 * i + 1] = x[i];
    Q[2 * i][0] = y[i]; Q[2 * i + 1][0] = y[i];
    Q[2 * i + 1][1] = dy[i];
    if (i > 0) Q[2 * i][1] = (Q[2 * i][0] - Q[2 * i - 1][0]) / (z[2 * i] - z[2 * i - 1]);
  }
  for (let j = 2; j < m; j++)
    for (let i = j; i < m; i++)
      Q[i][j] = (Q[i][j - 1] - Q[i - 1][j - 1]) / (z[i] - z[i - j]);
  return Array.from({ length: m }, (_, i) => Q[i][i]);
}
console.log(hermiteCoeffs([0, 1], [1, 0], [0, 0])); // [1, 0, -1, 2]
