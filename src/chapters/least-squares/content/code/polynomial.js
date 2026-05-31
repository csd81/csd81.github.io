// Least-squares polynomial fit via the normal equations.
// Returns coefficients (low -> high).
function solve(A, b) {
  const n = b.length;
  const m = A.map((r) => [...r]), r = [...b];
  for (let k = 0; k < n; k++) {
    let p = k;
    for (let i = k + 1; i < n; i++) if (Math.abs(m[i][k]) > Math.abs(m[p][k])) p = i;
    [m[k], m[p]] = [m[p], m[k]]; [r[k], r[p]] = [r[p], r[k]];
    for (let i = k + 1; i < n; i++) {
      const f = m[i][k] / m[k][k];
      for (let j = k; j < n; j++) m[i][j] -= f * m[k][j];
      r[i] -= f * r[k];
    }
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = r[i];
    for (let j = i + 1; j < n; j++) s -= m[i][j] * x[j];
    x[i] = s / m[i][i];
  }
  return x;
}

function polyFit(t, y, degree = 2) {
  const m = degree + 1;
  // Vandermonde columns 1, t, t^2, ...
  const V = t.map((ti) => Array.from({ length: m }, (_, j) => ti ** j));
  // Normal equations (V^T V) c = V^T y.
  const ATA = Array.from({ length: m }, () => new Array(m).fill(0));
  const ATy = new Array(m).fill(0);
  for (let r = 0; r < t.length; r++) {
    for (let i = 0; i < m; i++) {
      ATy[i] += V[r][i] * y[r];
      for (let j = 0; j < m; j++) ATA[i][j] += V[r][i] * V[r][j];
    }
  }
  return solve(ATA, ATy);
}

const t = [0, 1, 2, 3, 4];
const y = [1.0, 1.8, 3.3, 4.5, 6.3];
console.log("coeffs (low->high):", polyFit(t, y, 2));
