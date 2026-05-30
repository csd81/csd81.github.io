// Thin wrapper around mathjs: compile a user expression into a numeric function,
// and provide an exact (symbolic) reference derivative for error reporting.
import { create, all, type MathNode } from 'mathjs';
import type { Fn } from './numerics';
import { fivePointCentral } from './numerics';

const math = create(all, {});

export interface Preset {
  id: string;
  /** KaTeX label shown in the UI */
  latex: string;
  /** mathjs expression */
  expr: string;
}

// Functions taken straight from the chapter's worked examples.
export const PRESETS: Preset[] = [
  { id: 'exp_x2x', latex: 'e^{x^2+x}', expr: 'exp(x^2 + x)' },
  { id: 'exp_x', latex: 'e^{x}', expr: 'exp(x)' },
  { id: 'x2_exp_x', latex: 'x^2 e^{x}', expr: 'x^2 * exp(x)' },
  { id: 'sin', latex: '\\sin x', expr: 'sin(x)' },
  { id: 'poly', latex: 'x^4 - 6x^2 + 3x', expr: 'x^4 - 6*x^2 + 3*x' },
  { id: 'exp_sin', latex: 'e^{x}\\sin x', expr: 'exp(x) * sin(x)' },
];

export interface Compiled {
  f: Fn;
  ok: boolean;
  error?: string;
  node?: MathNode;
}

/** Compile an expression in variable `x` into a JS function. */
export function compile(expr: string): Compiled {
  try {
    const node = math.parse(expr);
    const code = node.compile();
    const f: Fn = (x: number) => {
      const v = code.evaluate({ x });
      return typeof v === 'number' ? v : Number(v);
    };
    // Probe once so obviously-broken expressions fail fast.
    const probe = f(0.123);
    if (!Number.isFinite(probe)) {
      // Non-finite at a point is fine for some functions; keep but mark ok.
    }
    return { f, ok: true, node };
  } catch (err) {
    return {
      f: () => NaN,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Exact derivative of `expr` at x0 (order 1 or 2), via symbolic differentiation.
 * Falls back to a high-accuracy finite difference if symbolic fails.
 */
export function referenceDerivative(expr: string, x0: number, order: 1 | 2): number {
  try {
    let node = math.parse(expr);
    for (let i = 0; i < order; i++) {
      node = math.derivative(node, 'x');
    }
    const code = node.compile();
    const v = code.evaluate({ x: x0 });
    const num = typeof v === 'number' ? v : Number(v);
    if (Number.isFinite(num)) return num;
  } catch {
    /* fall through to finite-difference fallback */
  }
  const { f } = compile(expr);
  const h = 1e-4;
  if (order === 1) return fivePointCentral(f, x0, h);
  return (f(x0 - h) - 2 * f(x0) + f(x0 + h)) / (h * h);
}
