// Gaussian elimination with complete (row + column) pivoting.
function gaussCompletePivot(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]);
  const r = [...b];
  const col = Array.from({ length: n }, (_, i) => i);
  for (let k = 0; k < n; k++) {
    let pi = k, pj = k;
    for (let i = k; i < n; i++)
      for (let j = k; j < n; j++)
        if (Math.abs(m[i][j]) > Math.abs(m[pi][pj])) { pi = i; pj = j; }
    [m[k], m[pi]] = [m[pi], m[k]];
    [r[k], r[pi]] = [r[pi], r[k]];
    for (const row of m) [row[k], row[pj]] = [row[pj], row[k]];
    [col[k], col[pj]] = [col[pj], col[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const y = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * y[j];
    y[i] = s / m[i][i];
  }
  const x = new Array(n).fill(0);
  for (let i = 0; i < n; i++) x[col[i]] = y[i];
  return x;
}
console.log(gaussCompletePivot([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
