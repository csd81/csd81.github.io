// Solve A x = b by Gauss-Seidel iteration. Returns [x, iterations].
function gaussSeidel(A, b, tol = 1e-10, maxIter = 200) {
  const n = b.length;
  const x = new Array(n).fill(0);
  for (let k = 1; k <= maxIter; k++) {
    let diff = 0;
    for (let i = 0; i < n; i++) {
      let s = b[i];
      for (let j = 0; j < n; j++) if (j !== i) s -= A[i][j] * x[j];
      const xi = s / A[i][i];
      diff = Math.max(diff, Math.abs(xi - x[i]));
      x[i] = xi;
    }
    if (diff <= tol) return [x, k];
  }
  return [x, maxIter];
}

const A = [[4, 2, -1], [5, -10, 2], [-2, 3, -7]];
const b = [9, 8, 3];
const [x, it] = gaussSeidel(A, b);
console.log("x =", x, " iterations =", it);
