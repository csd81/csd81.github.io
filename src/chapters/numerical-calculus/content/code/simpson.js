// Composite Simpson's rule (n forced even) on [a, b].
function simpson(f, a, b, n = 100) {
  if (n % 2) n += 1;
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (h / 3) * s;
}

console.log("int_0^1 e^x dx ~", simpson(Math.exp, 0, 1, 100), " exact =", Math.E - 1);
