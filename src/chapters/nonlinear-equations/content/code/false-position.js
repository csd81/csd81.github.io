// Regula falsi (false position) for f on a bracket [a, b].
function falsePosition(f, a, b, tol = 1e-12, maxIter = 200) {
  let fa = f(a), fb = f(b), c = a;
  for (let k = 0; k < maxIter; k++) {
    c = (a * fb - b * fa) / (fb - fa);
    const fc = f(c);
    if (Math.abs(fc) < tol) return c;
    if (fa * fc < 0) { b = c; fb = fc; } else { a = c; fa = fc; }
  }
  return c;
}
console.log(falsePosition((x) => x * x - 2, 1, 2));
