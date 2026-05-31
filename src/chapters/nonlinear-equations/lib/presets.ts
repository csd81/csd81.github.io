/**
 * Built-in example functions referenced throughout the chapter,
 * keyed for each widget's dropdown.  Strings are math.js-compatible.
 */
export interface ScalarPreset {
  id: string
  label: string
  f: string
  /** A starting bracket [a, b] guaranteed to bracket a root, where applicable. */
  bracket?: [number, number]
  /** A "good" Newton/secant starting value */
  p0?: number
  /** For the secant method specifically, a second initial value */
  p1?: number
}

export const scalarPresets: ScalarPreset[] = [
  {
    id: 'exp-cos',
    label: 'e^x − 2·cos(x)   (§2.3 worked example)',
    f: 'exp(x) - 2*cos(x)',
    bracket: [0, 1],
    p0: 0.1,
    p1: 1,
  },
  {
    id: 'cubic',
    label: 'x³ + x² − 8x − 12   (double root at −2, simple root at 3)',
    f: 'x^3 + x^2 - 8*x - 12',
    bracket: [-3, 4],
    p0: 2,
    p1: 4,
  },
  {
    id: 'arctan',
    label: '½·arctan(x)   (pathological Newton example)',
    f: '0.5*atan(x)',
    bracket: [-1, 1],
    p0: 1.4,
    p1: 1.5,
  },
  {
    id: 'cube-root-2',
    label: 'x³ − 2   (Newton converges to ∛2)',
    f: 'x^3 - 2',
    bracket: [1, 2],
    p0: 2,
    p1: 3,
  },
  {
    id: 'sin-half',
    label: 'sin(x) − ½',
    f: 'sin(x) - 0.5',
    bracket: [0, 1],
    p0: 0.5,
    p1: 1,
  },
]

/** Fixed-point iteration presets: g such that solving g(x) = x is interesting. */
export interface FpiPreset {
  id: string
  label: string
  g: string
  /** range to plot */
  xRange: [number, number]
  p0: number
}

export const fpiPresets: FpiPreset[] = [
  {
    id: 'cubic-cobweb',
    label: 'g(x) = −x³/8 + x + 1   (Example 2.10, converges to 2)',
    g: '-x^3/8 + x + 1',
    xRange: [0, 2.6],
    p0: 0.4,
  },
  {
    id: 'cos',
    label: 'g(x) = cos(x)   (Dottie number, ≈ 0.7391)',
    g: 'cos(x)',
    xRange: [-0.5, 1.5],
    p0: 0.5,
  },
  {
    id: 'sqrt2',
    label: 'g(x) = ½·x + 1/x   (Babylonian, converges to √2 from any x > 0)',
    g: '0.5*x + 1/x',
    xRange: [0.5, 2.5],
    p0: 1,
  },
  {
    id: 'diverge',
    label: 'g(x) = 2x   (diverges)',
    g: '2*x',
    xRange: [-1, 4],
    p0: 0.3,
  },
]

/** The 2D example system from §2.10–§2.12. */
export const system226 = {
  label: '4x₁ − e^(x₁·x₂) − 3 = 0,   x₁ − x₂² − 3x₂ − 1 = 0   (Example 2.51)',
  f1: '4*x - exp(x*y) - 3',
  f2: 'x - y^2 - 3*y - 1',
  pStar: [1, 0] as [number, number],
}
