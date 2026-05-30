/**
 * math.js wrappers used by the interactive widgets.
 *
 * Goal: turn a user-typed expression string into:
 *   - a fast `(x: number) => number` evaluator
 *   - its symbolic derivative compiled the same way
 *
 * We compile once and reuse the result, since iterative widgets evaluate the
 * function thousands of times per step (animation + plotting).
 */
import { create, all, type MathJsInstance } from 'mathjs'

const math: MathJsInstance = create(all, {})

export interface CompiledScalar {
  expr: string
  eval: (x: number) => number
}

export interface CompiledWithDerivative extends CompiledScalar {
  derivExpr: string
  derivEval: (x: number) => number
}

export function compileScalar(expr: string, varName = 'x'): CompiledScalar {
  const node = math.parse(expr)
  const code = node.compile()
  return {
    expr,
    eval: (x: number) => Number(code.evaluate({ [varName]: x })),
  }
}

export function compileWithDerivative(
  expr: string,
  varName = 'x',
): CompiledWithDerivative {
  const node = math.parse(expr)
  const deriv = math.derivative(node, varName)
  const code = node.compile()
  const dcode = deriv.compile()
  return {
    expr,
    derivExpr: deriv.toString(),
    eval: (x: number) => Number(code.evaluate({ [varName]: x })),
    derivEval: (x: number) => Number(dcode.evaluate({ [varName]: x })),
  }
}

/** Light validation: returns null on success, or a human-readable error message. */
export function validateScalar(expr: string, varName = 'x'): string | null {
  try {
    const node = math.parse(expr)
    const code = node.compile()
    const v = code.evaluate({ [varName]: 1 })
    if (typeof v !== 'number' || !Number.isFinite(v)) {
      return 'Expression must evaluate to a finite number'
    }
    return null
  } catch (e) {
    return e instanceof Error ? e.message : 'Parse error'
  }
}

/** Compile a vector-valued function R² → R² from two scalar expressions. */
export function compileVec2(
  f1: string,
  f2: string,
  vars: [string, string] = ['x', 'y'],
) {
  const [a, b] = vars
  const c1 = math.parse(f1).compile()
  const c2 = math.parse(f2).compile()
  return {
    f1,
    f2,
    eval: (p: readonly [number, number]) =>
      [
        Number(c1.evaluate({ [a]: p[0], [b]: p[1] })),
        Number(c2.evaluate({ [a]: p[0], [b]: p[1] })),
      ] as [number, number],
    /** Symbolic Jacobian, returned as a 2x2 array of compiled functions. */
    jacobian: () => {
      const J = [
        [math.derivative(f1, a), math.derivative(f1, b)],
        [math.derivative(f2, a), math.derivative(f2, b)],
      ].map((row) => row.map((n) => n.compile())) as {
        evaluate: (scope: Record<string, number>) => number;
      }[][];
      return (p: readonly [number, number]) =>
        [
          [
            Number(J[0][0].evaluate({ [a]: p[0], [b]: p[1] })),
            Number(J[0][1].evaluate({ [a]: p[0], [b]: p[1] })),
          ],
          [
            Number(J[1][0].evaluate({ [a]: p[0], [b]: p[1] })),
            Number(J[1][1].evaluate({ [a]: p[0], [b]: p[1] })),
          ],
        ] as [[number, number], [number, number]]
    },
  }
}
