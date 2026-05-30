// Pure numerical methods from Chapter 7 (no external deps so they are easy to test).
// A real-valued function is just (x: number) => number.

export type Fn = (x: number) => number;

// ---------------------------------------------------------------------------
// Differentiation
// ---------------------------------------------------------------------------

export type DiffMethodId = 'forward' | 'backward' | 'central' | 'second' | 'five-point';

export const forwardDiff = (f: Fn, x0: number, h: number): number =>
  (f(x0 + h) - f(x0)) / h;

export const backwardDiff = (f: Fn, x0: number, h: number): number =>
  (f(x0) - f(x0 - h)) / h;

export const centralDiff = (f: Fn, x0: number, h: number): number =>
  (f(x0 + h) - f(x0 - h)) / (2 * h);

export const secondDerivative = (f: Fn, x0: number, h: number): number =>
  (f(x0 - h) - 2 * f(x0) + f(x0 + h)) / (h * h);

// 5-point central difference for f'(x0), fourth-order (formula 7.11).
export const fivePointCentral = (f: Fn, x0: number, h: number): number =>
  (f(x0 - 2 * h) - 8 * f(x0 - h) + 8 * f(x0 + h) - f(x0 + 2 * h)) / (12 * h);

export interface DiffMethod {
  id: DiffMethodId;
  /** derivative order this method approximates (1 or 2) */
  order: 1 | 2;
  apply: (f: Fn, x0: number, h: number) => number;
}

export const DIFF_METHODS: Record<DiffMethodId, DiffMethod> = {
  forward: { id: 'forward', order: 1, apply: forwardDiff },
  backward: { id: 'backward', order: 1, apply: backwardDiff },
  central: { id: 'central', order: 1, apply: centralDiff },
  'five-point': { id: 'five-point', order: 1, apply: fivePointCentral },
  second: { id: 'second', order: 2, apply: secondDerivative },
};

// ---------------------------------------------------------------------------
// Integration
// ---------------------------------------------------------------------------

export type IntMethodId =
  | 'trapezoid'
  | 'simpson'
  | 'gauss2'
  | 'gauss3'
  | 'gauss4'
  | 'gauss5';

/** Composite trapezoidal rule over [a, b] with n subintervals (7.32). */
export function trapezoidComposite(f: Fn, a: number, b: number, n: number): number {
  const h = (b - a) / n;
  let sum = 0.5 * (f(a) + f(b));
  for (let i = 1; i < n; i++) sum += f(a + i * h);
  return sum * h;
}

/** Composite Simpson's rule over [a, b] with n subintervals (n even) (7.34). */
export function simpsonComposite(f: Fn, a: number, b: number, n: number): number {
  const m = n % 2 === 0 ? n : n + 1; // Simpson needs an even count of subintervals
  const h = (b - a) / m;
  let sum = f(a) + f(b);
  for (let i = 1; i < m; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
  }
  return (sum * h) / 3;
}

// Legendre nodes/weights on [-1, 1] (Table 7.6).
export const GAUSS_TABLE: Record<2 | 3 | 4 | 5, { nodes: number[]; weights: number[] }> = {
  2: {
    nodes: [-0.5773502692, 0.5773502692],
    weights: [1.0, 1.0],
  },
  3: {
    nodes: [-0.7745966692, 0.0, 0.7745966692],
    weights: [0.5555555556, 0.8888888889, 0.5555555556],
  },
  4: {
    nodes: [-0.8611363116, -0.3399810436, 0.3399810436, 0.8611363116],
    weights: [0.3478548451, 0.6521451549, 0.6521451549, 0.3478548451],
  },
  5: {
    nodes: [-0.9061798459, -0.5384693101, 0.0, 0.5384693101, 0.9061798459],
    weights: [0.2369268850, 0.4786286705, 0.5688888889, 0.4786286705, 0.2369268850],
  },
};

/** n-point Gaussian quadrature over [a, b] via the [-1,1] transform (7.4). */
export function gauss(f: Fn, a: number, b: number, points: 2 | 3 | 4 | 5): number {
  const { nodes, weights } = GAUSS_TABLE[points];
  const half = (b - a) / 2;
  const mid = (a + b) / 2;
  let sum = 0;
  for (let i = 0; i < nodes.length; i++) {
    sum += weights[i] * f(half * nodes[i] + mid);
  }
  return half * sum;
}

export interface IntMethod {
  id: IntMethodId;
  /** whether the `n` (subintervals) control applies; Gauss uses fixed node counts */
  usesN: boolean;
  apply: (f: Fn, a: number, b: number, n: number) => number;
}

export const INT_METHODS: Record<IntMethodId, IntMethod> = {
  trapezoid: { id: 'trapezoid', usesN: true, apply: trapezoidComposite },
  simpson: { id: 'simpson', usesN: true, apply: simpsonComposite },
  gauss2: { id: 'gauss2', usesN: false, apply: (f, a, b) => gauss(f, a, b, 2) },
  gauss3: { id: 'gauss3', usesN: false, apply: (f, a, b) => gauss(f, a, b, 3) },
  gauss4: { id: 'gauss4', usesN: false, apply: (f, a, b) => gauss(f, a, b, 4) },
  gauss5: { id: 'gauss5', usesN: false, apply: (f, a, b) => gauss(f, a, b, 5) },
};

/** High-accuracy reference integral (composite Simpson with many subintervals). */
export function referenceIntegral(f: Fn, a: number, b: number, n = 4000): number {
  return simpsonComposite(f, a, b, n);
}

export const absError = (approx: number, exact: number): number => Math.abs(approx - exact);
