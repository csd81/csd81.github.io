function gaussElimination(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);   // augmented [A | b]
  for (let k = 0; k < n; k++)
    for (let i = k + 1; i < n; i++) {
      const f = M[i][k] / M[k][k];
      for (let j = k; j <= n; j++) M[i][j] -= f * M[k][j];
    }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = M[i][n];
    for (let j = i + 1; j < n; j++) s -= M[i][j] * x[j];
    x[i] = s / M[i][i];
  }
  return x;
}
console.log(gaussElimination([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
