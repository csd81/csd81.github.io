// Secant method (derivative-free, uses two previous iterates).
function secant(f, x0, x1, tol = 1e-12, maxIter = 100) {
  let f0 = f(x0), f1 = f(x1);
  for (let k = 0; k < maxIter; k++) {
    const x2 = x1 - (f1 * (x1 - x0)) / (f1 - f0);
    if (Math.abs(x2 - x1) < tol) return x2;
    x0 = x1; f0 = f1; x1 = x2; f1 = f(x2);
  }
  return x1;
}
console.log(secant((x) => x * x - 2, 1.0, 2.0)); // sqrt(2)
