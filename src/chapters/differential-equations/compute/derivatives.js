// Symbolic / compiled function builders for the ODE right-hand side f(t, y).
// Taylor's method needs the total derivatives of f along solutions:
//   f^(1) = f_t + f_y * f          (eq. 10.16)
//   f^(2) = d/dt f^(1) = f1_t + f1_y * f
// We build these with mathjs symbolic differentiation so they work for ANY
// user-entered f(t,y), not just the textbook presets.
import { parse, derivative } from 'mathjs';

// Compile a mathjs node into a fast (t, y) => number function.
function toFn(node) {
  const code = node.compile();
  return (t, y) => code.evaluate({ t, y });
}

// Given the right-hand side expression string (in variables t and y),
// return { f, f1, f2, exprs } where f/f1/f2 are (t,y)=>number.
// Throws if the expression cannot be parsed.
export function buildFuncs(fExpr) {
  const fNode = parse(fExpr);

  const f_t = derivative(fNode, 't');
  const f_y = derivative(fNode, 'y');

  // f1 = f_t + f_y * f
  const f1Node = parse(
    `(${f_t.toString()}) + (${f_y.toString()}) * (${fNode.toString()})`
  );

  const f1_t = derivative(f1Node, 't');
  const f1_y = derivative(f1Node, 'y');

  // f2 = f1_t + f1_y * f
  const f2Node = parse(
    `(${f1_t.toString()}) + (${f1_y.toString()}) * (${fNode.toString()})`
  );

  return {
    f: toFn(fNode),
    f1: toFn(f1Node),
    f2: toFn(f2Node),
    exprs: {
      f: fNode.toString(),
      f1: f1Node.toString(),
      f2: f2Node.toString(),
    },
  };
}

// Compile a closed-form exact solution y(t) into a (t) => number function.
export function buildExact(exactExpr) {
  if (!exactExpr) return null;
  const code = parse(exactExpr).compile();
  return (t) => code.evaluate({ t });
}
