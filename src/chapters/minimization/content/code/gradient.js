const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
// Gradient descent with constant step size alpha.
function gradientDescent(grad, x0, alpha = 0.1, tol = 1e-8, maxIter = 100000) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    x = x.map((xi, i) => xi - alpha * g[i]);
  }
  return x;
}
console.log(gradientDescent((v) => [2 * (v[0] - 1), 2 * (v[1] - 2)], [0, 0]));
