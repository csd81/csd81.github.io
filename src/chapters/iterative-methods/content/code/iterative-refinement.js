// Iterative refinement of the solution of A x = b.
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
function iterativeRefinement(A, b, tol = 1e-12, maxIter = 20) {
  const n = b.length;
  let x = solve(A, b);
  for (let k = 0; k < maxIter; k++) {
    const r = b.map((bi, i) => bi - A[i].reduce((s, aij, j) => s + aij * x[j], 0));
    const d = solve(A, r);
    let nd = 0;
    x = x.map((xi, i) => { nd = Math.max(nd, Math.abs(d[i])); return xi + d[i]; });
    if (nd < tol) break;
  }
  return x;
}
console.log(iterativeRefinement([[2, 1, -1], [-3, -1, 2], [-2, 1, 2]], [8, -11, -3]));
