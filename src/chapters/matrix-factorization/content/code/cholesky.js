// Cholesky factorization A = L Lᵀ of a symmetric positive-definite A.
function cholesky(A) {
  const n = A.length;
  const L = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let j = 0; j < n; j++) {
    let s = A[j][j];
    for (let k = 0; k < j; k++) s -= L[j][k] ** 2;
    L[j][j] = Math.sqrt(s);
    for (let i = j + 1; i < n; i++) {
      let t = A[i][j];
      for (let k = 0; k < j; k++) t -= L[i][k] * L[j][k];
      L[i][j] = t / L[j][j];
    }
  }
  return L;
}
console.log(cholesky([[4, 2, -2], [2, 10, 2], [-2, 2, 5]]));
