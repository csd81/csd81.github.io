import type { Vec, Mat } from "./linalg";

/** A 2D test function with analytic gradient + Hessian and a plotting window. */
export interface Fn2D {
  id: string;
  label: string;
  /** KaTeX source of the formula */
  tex: string;
  f: (x: number, y: number) => number;
  grad: (x: number, y: number) => Vec; // [df/dx, df/dy]
  hess: (x: number, y: number) => Mat; // 2x2
  domain: { xmin: number; xmax: number; ymin: number; ymax: number };
  /** known global minimizer (for error tracking / display) */
  min?: Vec;
  /** suggested contour levels; if omitted the plot auto-picks */
  levels?: number[];
}

/** The recurring example throughout the chapter: min at (1, 0.5), value 0. */
export const rosen2y: Fn2D = {
  id: "rosen2y",
  label: "f(x,y) = (x²−2y)² + 2(x−1)²",
  tex: "f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2",
  f: (x, y) => (x * x - 2 * y) ** 2 + 2 * (x - 1) ** 2,
  grad: (x, y) => {
    const u = x * x - 2 * y;
    return [4 * x * u + 4 * (x - 1), -4 * u];
  },
  hess: (x, y) => {
    return [
      [12 * x * x - 8 * y + 4, -8 * x],
      [-8 * x, 8],
    ];
  },
  domain: { xmin: -2.6, xmax: 2.2, ymin: -1.2, ymax: 5.1 },
  min: [1, 0.5],
};

/** Concave dome used for the surface / "gradient ⊥ contour" demos: max at origin. */
export const dome: Fn2D = {
  id: "dome",
  label: "f(x,y) = 4 − 3x² − y²",
  tex: "f(x,y) = 4 - 3x^2 - y^2",
  f: (x, y) => 4 - 3 * x * x - y * y,
  grad: (x, y) => [-6 * x, -2 * y],
  hess: () => [
    [-6, 0],
    [0, -2],
  ],
  domain: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 },
  min: [0, 0], // actually a maximum; flagged in the section
};

/** A simple bowl with an elongated valley (slow gradient descent). */
export const bowl: Fn2D = {
  id: "bowl",
  label: "f(x,y) = ½x² + 9⁄2 y²",
  tex: "f(x,y) = \\tfrac12 x^2 + \\tfrac92 y^2",
  f: (x, y) => 0.5 * x * x + 4.5 * y * y,
  grad: (x, y) => [x, 9 * y],
  hess: () => [
    [1, 0],
    [0, 9],
  ],
  domain: { xmin: -10, xmax: 10, ymin: -3, ymax: 3 },
  min: [0, 0],
};

/** A saddle, for the calculus-review classifier. */
export const saddle: Fn2D = {
  id: "saddle",
  label: "f(x,y) = x² − y²",
  tex: "f(x,y) = x^2 - y^2",
  f: (x, y) => x * x - y * y,
  grad: (x, y) => [2 * x, -2 * y],
  hess: () => [
    [2, 0],
    [0, -2],
  ],
  domain: { xmin: -2, xmax: 2, ymin: -2, ymax: 2 },
  min: [0, 0], // a saddle
};

/** A two-well surface for the "many local minima" illustration. */
export const wells: Fn2D = {
  id: "wells",
  label: "f(x,y) = sin·cos ripples",
  tex: "f(x,y) = \\sin x \\,\\cos y + 0.1(x^2+y^2)",
  f: (x, y) => Math.sin(x) * Math.cos(y) + 0.1 * (x * x + y * y),
  grad: (x, y) => [
    Math.cos(x) * Math.cos(y) + 0.2 * x,
    -Math.sin(x) * Math.sin(y) + 0.2 * y,
  ],
  hess: (x, y) => [
    [-Math.sin(x) * Math.cos(y) + 0.2, -Math.cos(x) * Math.sin(y)],
    [-Math.cos(x) * Math.sin(y), -Math.sin(x) * Math.cos(y) + 0.2],
  ],
  domain: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 },
};

export const FN2D_PRESETS: Fn2D[] = [rosen2y, dome, bowl, saddle, wells];

/* ---------------- 1D functions for golden-section ---------------- */

export interface Fn1D {
  id: string;
  label: string;
  tex: string;
  f: (x: number) => number;
  domain: { a: number; b: number };
  min?: number;
}

export const quad1d: Fn1D = {
  id: "quad1d",
  label: "f(x) = x² − 0.8x + 1",
  tex: "f(x) = x^2 - 0.8x + 1",
  f: (x) => x * x - 0.8 * x + 1,
  domain: { a: -1, b: 2 },
  min: 0.4,
};

export const cubic1d: Fn1D = {
  id: "cubic1d",
  label: "f(x) = x³ − 3x + 1",
  tex: "f(x) = x^3 - 3x + 1",
  f: (x) => x ** 3 - 3 * x + 1,
  domain: { a: 0, b: 2 }, // unimodal on [0,2], min at x=1
  min: 1,
};

export const expBump: Fn1D = {
  id: "expbump",
  label: "f(x) = 1 − 10x·e^(−x)",
  tex: "f(x) = 1 - 10x e^{-x}",
  f: (x) => 1 - 10 * x * Math.exp(-x),
  domain: { a: 0, b: 2 },
  min: 1,
};

export const FN1D_PRESETS: Fn1D[] = [quad1d, cubic1d, expBump];
