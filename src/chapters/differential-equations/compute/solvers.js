// Numerical solvers for the scalar IVP  y' = f(t, y),  y(t0) = y0.
// Each solver takes (funcs, opts) where:
//   funcs = { f, f1, f2 }  (f1, f2 only needed by Taylor methods)
//   opts  = { t0, T, y0, h }
// and returns { ts: number[], zs: number[] } over the mesh t_i = t0 + i*h.
//
// Formulas follow Chapter 10 (Hartung): Euler (10.4), Taylor (10.21),
// midpoint (10.23), modified Euler (10.29), Heun (10.30), classic RK4 (10.31).

function meshCount(t0, T, h) {
  return Math.max(1, Math.round((T - t0) / h));
}

// --- Euler (10.4): z_{i+1} = z_i + h f(t_i, z_i) ---
export function euler({ f }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    z = z + h * f(t, z);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- 2nd-order Taylor (10.21): + h^2/2 f^(1) ---
export function taylor2({ f, f1 }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    z = z + h * f(t, z) + (h * h / 2) * f1(t, z);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- 3rd-order Taylor (10.21): + h^3/6 f^(2) ---
export function taylor3({ f, f1, f2 }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    z = z + h * f(t, z) + (h * h / 2) * f1(t, z) + (h * h * h / 6) * f2(t, z);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- Midpoint method (10.23) ---
export function midpoint({ f }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    const k = f(t, z);
    z = z + h * f(t + h / 2, z + (h / 2) * k);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- Modified Euler / Heun trapezoidal (10.29) ---
export function modifiedEuler({ f }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    const tn = t0 + (i + 1) * h;
    const k1 = f(t, z);
    const k2 = f(tn, z + h * k1);
    z = z + (h / 2) * (k1 + k2);
    t = tn;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- Heun's method (10.30) ---
export function heun({ f }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    const k1 = f(t, z);
    const k2 = f(t + (2 * h) / 3, z + (2 / 3) * h * k1);
    z = z + (h / 4) * (k1 + 3 * k2);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// --- Classic 4th-order Runge-Kutta (10.31) ---
export function rk4({ f }, { t0, T, y0, h }) {
  const n = meshCount(t0, T, h);
  const ts = [t0], zs = [y0];
  let t = t0, z = y0;
  for (let i = 0; i < n; i++) {
    const k1 = f(t, z);
    const k2 = f(t + h / 2, z + (h / 2) * k1);
    const k3 = f(t + h / 2, z + (h / 2) * k2);
    const k4 = f(t + h, z + h * k3);
    z = z + (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4);
    t = t0 + (i + 1) * h;
    ts.push(t); zs.push(z);
  }
  return { ts, zs };
}

// Registry: method key -> metadata + solver fn.
export const METHODS = {
  euler:         { fn: euler,         order: 1, needsDeriv: false, en: "Euler",          hu: "Euler" },
  taylor2:       { fn: taylor2,       order: 2, needsDeriv: true,  en: "Taylor (2nd)",   hu: "Taylor (2.)" },
  taylor3:       { fn: taylor3,       order: 3, needsDeriv: true,  en: "Taylor (3rd)",   hu: "Taylor (3.)" },
  midpoint:      { fn: midpoint,      order: 2, needsDeriv: false, en: "Midpoint",       hu: "Felezőpont" },
  modifiedEuler: { fn: modifiedEuler, order: 2, needsDeriv: false, en: "Modified Euler", hu: "Módosított Euler" },
  heun:          { fn: heun,          order: 2, needsDeriv: false, en: "Heun",           hu: "Heun" },
  rk4:           { fn: rk4,           order: 4, needsDeriv: false, en: "Classic RK4",    hu: "Klasszikus RK4" },
};

export const METHOD_KEYS = Object.keys(METHODS);

// High-resolution RK4 reference (used as "exact" when no closed form is known).
export function referenceSolution(funcs, { t0, T, y0 }, fineSteps = 4000) {
  const h = (T - t0) / fineSteps;
  const { ts, zs } = rk4(funcs, { t0, T, y0, h });
  // Return an interpolating lookup (linear) over the fine mesh.
  return (t) => {
    if (t <= ts[0]) return zs[0];
    if (t >= ts[ts.length - 1]) return zs[zs.length - 1];
    const idx = Math.min(ts.length - 2, Math.floor((t - t0) / h));
    const w = (t - ts[idx]) / (ts[idx + 1] - ts[idx]);
    return zs[idx] * (1 - w) + zs[idx + 1] * w;
  };
}

// Run one method and attach pointwise errors against a reference y(t).
export function solveWithError(key, funcs, opts, exactFn) {
  const { ts, zs } = METHODS[key].fn(funcs, opts);
  const ref = exactFn || referenceSolution(funcs, opts);
  const ys = ts.map(ref);
  const errors = zs.map((z, i) => Math.abs(ys[i] - z));
  const maxError = errors.reduce((m, e) => Math.max(m, e), 0);
  return { key, ts, zs, ys, errors, maxError };
}

// Order-of-convergence sweep: max error vs a sequence of step sizes.
export function convergenceSweep(key, funcs, opts, exactFn, hList) {
  return hList.map((h) => {
    const { maxError } = solveWithError(key, funcs, { ...opts, h }, exactFn);
    return { h, maxError };
  });
}
