// Matrix inverse via Gauss-Jordan on the augmented matrix [A | I].
function inverse(A) {
  const n = A.length;
  const m = A.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]];
    const d = m[k][k];
    for (let j = 0; j < 2 * n; j++) m[k][j] /= d;
    for (let i = 0; i < n; i++) {
      if (i !== k) {
        const f = m[i][k];
        for (let j = 0; j < 2 * n; j++) m[i][j] -= f * m[k][j];
      }
    }
  }
  return m.map((row) => row.slice(n));
}
console.log(inverse([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]));
