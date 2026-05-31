// Solve A x = b by Jacobi iteration. Returns [x, iterations].
function jacobi(A, b, tol = 1e-10, maxIter = 200) {
  const n = b.length;
  let x = new Array(n).fill(0);
  for (let k = 1; k <= maxIter; k++) {
    const xNew = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      let s = b[i];
      for (let j = 0; j < n; j++) if (j !== i) s -= A[i][j] * x[j];
      xNew[i] = s / A[i][i];
    }
    let diff = 0;
    for (let i = 0; i < n; i++) diff = Math.max(diff, Math.abs(xNew[i] - x[i]));
    x = xNew;
    if (diff <= tol) return [x, k];
  }
  return [x, maxIter];
}

const A = [[4, 2, -1], [5, -10, 2], [-2, 3, -7]];
const b = [9, 8, 3];
const [x, it] = jacobi(A, b);
console.log("x =", x, " iterations =", it);
