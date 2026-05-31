// Fit y ~ b*t^a by linear least squares on log-log data. Returns [a, b].
// Fits the line ln y = a*ln t + ln b via the slope/intercept formulas.
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

function powerFit(t, y) {
  const lt = t.map(Math.log);
  const ly = y.map(Math.log);
  const [a, lnb] = linFit(lt, ly);
  return [a, Math.exp(lnb)];
}

const t = [1, 2, 3, 4];
const y = [2.0, 5.6, 9.7, 16.0];
const [a, b] = powerFit(t, y);
console.log(`a = ${a.toFixed(4)}, b = ${b.toFixed(4)}`);
