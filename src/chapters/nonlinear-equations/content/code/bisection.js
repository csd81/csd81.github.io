// Bisection root of f on a bracket [a, b] (requires f(a)*f(b) < 0).
function bisection(f, a, b, tol = 1e-12, maxIter = 200) {
  let fa = f(a), c = a;
  for (let k = 0; k < maxIter; k++) {
    c = (a + b) / 2;
    const fc = f(c);
    if (fc === 0 || (b - a) / 2 < tol) return c;
    if (fa * fc < 0) { b = c; } else { a = c; fa = fc; }
  }
  return (a + b) / 2;
}
console.log(bisection((x) => x * x - 2, 1, 2));
