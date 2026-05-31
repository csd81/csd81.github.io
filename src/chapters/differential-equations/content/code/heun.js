// Heun's method (RK2, explicit trapezoidal rule).
function heun(f, t0, y0, h, n) {
  let t = t0, y = y0;
  for (let i = 0; i < n; i++) {
    const k1 = f(t, y);
    const k2 = f(t + h, y + h * k1);
    y += h * (k1 + k2) / 2;
    t += h;
  }
  return [t, y];
}

const f = (t, y) => 2 * y - 10 * t ** 2 + 2 * t;
console.log("y(1) =", heun(f, 0.0, 1.0, 0.1, 10)[1]);
