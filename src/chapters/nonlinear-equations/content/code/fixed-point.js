// Fixed-point iteration x_{k+1} = g(x_k).
function fixedPoint(g, x0, tol = 1e-12, maxIter = 200) {
  let x = x0;
  for (let k = 0; k < maxIter; k++) {
    const xn = g(x);
    if (Math.abs(xn - x) < tol) return xn;
    x = xn;
  }
  return x;
}
console.log(fixedPoint(Math.cos, 1.0)); // Dottie number ~0.739085
