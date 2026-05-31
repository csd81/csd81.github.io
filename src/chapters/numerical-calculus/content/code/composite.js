// Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
function composite(f, a, b, n = 10) {
  if (n % 2) n += 1; // Simpson needs even n
  const h = (b - a) / n;
  let T = (f(a) + f(b)) / 2;
  let S = f(a) + f(b);
  for (let i = 1; i < n; i++) {
    const yi = f(a + i * h);
    T += yi;
    S += (i % 2 ? 4 : 2) * yi;
  }
  return [h * T, (h / 3) * S];
}

const [T, S] = composite(Math.exp, 0, 1, 10);
console.log("trapezoid ~", T);
console.log("Simpson   ~", S);
// -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
