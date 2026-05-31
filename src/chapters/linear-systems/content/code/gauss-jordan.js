// Solve A x = b by Gauss-Jordan elimination.
function gaussJordan(A, b) {
  const n = b.length;
  const m = A.map((r, i) => [...r, b[i]]);
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]];
    const d = m[k][k];
    for (let j = 0; j <= n; j++) m[k][j] /= d;
    for (let i = 0; i < n; i++) {
      if (i !== k) {
        const f = m[i][k];
        for (let j = 0; j <= n; j++) m[i][j] -= f * m[k][j];
      }
    }
  }
  return m.map((row) => row[n]);
}
console.log(gaussJordan([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
