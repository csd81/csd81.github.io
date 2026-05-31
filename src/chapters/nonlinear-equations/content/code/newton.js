// Newton's method using f and its derivative df.
function newton(f, df, x0, tol = 1e-12, maxIter = 100) {
  let x = x0;
  for (let k = 0; k < maxIter; k++) {
    const fx = f(x);
    if (Math.abs(fx) < tol) return x;
    x -= fx / df(x);
  }
  return x;
}
console.log(newton((x) => x * x - 2, (x) => 2 * x, 1.0)); // sqrt(2)
