// Second-order Taylor method. df is the total derivative f'(t,y) = f_t + f_y f.
function taylor2(f, df, t0, y0, h, n) {
  let t = t0, y = y0;
  for (let i = 0; i < n; i++) {
    y += h * f(t, y) + (h ** 2 / 2) * df(t, y);
    t += h;
  }
  return [t, y];
}

// y' = 2y - 10t^2 + 2t  ->  f' = 4y - 20t^2 - 16t + 2
const f = (t, y) => 2 * y - 10 * t ** 2 + 2 * t;
const df = (t, y) => 4 * y - 20 * t ** 2 - 16 * t + 2;
console.log("y(1) =", taylor2(f, df, 0.0, 1.0, 0.1, 10)[1]);
