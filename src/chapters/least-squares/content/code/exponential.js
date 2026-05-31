// Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns [a, b].
// Fits the line ln y = a*t + ln b via the slope/intercept formulas.
function linFit(x, z) {
  const n = x.length;
  let sx = 0, sz = 0, sxx = 0, sxz = 0;
  for (let i = 0; i < n; i++) {
    sx += x[i]; sz += z[i]; sxx += x[i] * x[i]; sxz += x[i] * z[i];
  }
  const slope = (n * sxz - sx * sz) / (n * sxx - sx * sx);
  const intercept = (sz - slope * sx) / n;
  return [slope, intercept];
}

function expFit(t, y) {
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(t, ly);
  return [a, Math.exp(lnb)];
}

const t = [0, 1, 2, 3];
const y = [2.0, 4.1, 8.2, 15.9];
const [a, b] = expFit(t, y);
console.log(`a = ${a.toFixed(4)}, b = ${b.toFixed(4)}`);
