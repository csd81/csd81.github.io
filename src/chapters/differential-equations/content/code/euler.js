// Forward Euler for y' = f(t, y). Returns trajectories [t, y].
function euler(f, t0, y0, h, n) {
  const t = [t0], y = [y0];
  for (let i = 0; i < n; i++) {
    y.push(y[y.length - 1] + h * f(t[t.length - 1], y[y.length - 1]));
    t.push(t0 + (i + 1) * h);
  }
  return [t, y];
}

const f = (t, y) => 2 * y - 10 * t ** 2 + 2 * t; // y(0)=1 on [0,1]
const [t, y] = euler(f, 0.0, 1.0, 0.1, 10);
console.log("y(1) =", y[y.length - 1]);
