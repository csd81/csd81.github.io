// Composite trapezoidal rule for the integral of f on [a, b].
function trapezoid(f, a, b, n = 100) {
  const h = (b - a) / n;
  let s = (f(a) + f(b)) / 2;
  for (let i = 1; i < n; i++) s += f(a + i * h);
  return h * s;
}

console.log("int_0^1 e^x dx ~", trapezoid(Math.exp, 0, 1, 100), " exact =", Math.E - 1);
