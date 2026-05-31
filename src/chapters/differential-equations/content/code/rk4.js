// Classical fourth-order Runge-Kutta for y' = f(t, y).
function rk4(f, t0, y0, h, n) {
  let t = t0, y = y0;
  for (let i = 0; i < n; i++) {
    const k1 = f(t, y);
    const k2 = f(t + h / 2, y + (h / 2) * k1);
    const k3 = f(t + h / 2, y + (h / 2) * k2);
    const k4 = f(t + h, y + h * k3);
    y += h * (k1 + 2 * k2 + 2 * k3 + k4) / 6;
    t += h;
  }
  return [t, y];
}

const f = (t, y) => 2 * y - 10 * t ** 2 + 2 * t;
console.log("y(1) =", rk4(f, 0.0, 1.0, 0.1, 10)[1]);
