// Third-order Taylor method (uses the first two total derivatives of f).
function taylor3(f, df, d2f, t0, y0, h, n) {
  let t = t0, y = y0;
  for (let i = 0; i < n; i++) {
    y += h * f(t, y) + (h ** 2 / 2) * df(t, y) + (h ** 3 / 6) * d2f(t, y);
    t += h;
  }
  return [t, y];
}

const f = (t, y) => 2 * y - 10 * t ** 2 + 2 * t;
const df = (t, y) => 4 * y - 20 * t ** 2 - 16 * t + 2;
const d2f = (t, y) => 8 * y - 40 * t ** 2 - 32 * t - 16;
console.log("y(1) =", taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10)[1]);
