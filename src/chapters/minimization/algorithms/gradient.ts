import type { Fn2D } from "../math/functions";
import { add, dist, norm, scale, sub, type Vec } from "../math/linalg";
import type { PathFrame, PathResult } from "./types";

function buildResult(fn: Fn2D, points: Vec[]): PathResult {
  const frames: PathFrame[] = points.map((p, k) => {
    const g = fn.grad(p[0], p[1]);
    return {
      k,
      p,
      fval: fn.f(p[0], p[1]),
      grad: g,
      err: fn.min ? dist(p, fn.min) : undefined,
    };
  });
  return { frames, points };
}

/** Gradient descent with a constant step h (normalized direction). */
export function gradientConstant(
  fn: Fn2D,
  start: Vec,
  h = 0.3,
  steps = 24
): PathResult {
  const pts: Vec[] = [start];
  let p = start;
  for (let i = 0; i < steps; i++) {
    const g = fn.grad(p[0], p[1]);
    const gn = norm(g);
    if (gn < 1e-9) break;
    p = sub(p, scale(g, h / gn));
    pts.push(p);
  }
  return buildResult(fn, pts);
}

/** Exact line search along −∇f via golden section on t ∈ [0, tMax]. */
function lineMin(
  fn: Fn2D,
  p: Vec,
  dir: Vec,
  tMax = 3,
  iters = 40
): number {
  const r = (Math.sqrt(5) - 1) / 2;
  let a = 0,
    b = tMax;
  const phi = (t: number) => {
    const q = add(p, scale(dir, t));
    return fn.f(q[0], q[1]);
  };
  let x = a + r * (b - a),
    y = a + (1 - r) * (b - a);
  let fx = phi(x),
    fy = phi(y);
  for (let i = 0; i < iters && b - a > 1e-6; i++) {
    if (fx > fy) {
      b = x;
      x = y;
      fx = fy;
      y = a + (1 - r) * (b - a);
      fy = phi(y);
    } else {
      a = y;
      y = x;
      fy = fx;
      x = a + r * (b - a);
      fx = phi(x);
    }
  }
  return (a + b) / 2;
}

/** Optimal (steepest-descent w/ exact line search) gradient method. */
export function gradientOptimal(
  fn: Fn2D,
  start: Vec,
  steps = 14
): PathResult {
  const pts: Vec[] = [start];
  let p = start;
  for (let i = 0; i < steps; i++) {
    const g = fn.grad(p[0], p[1]);
    if (norm(g) < 1e-8) break;
    const dir = scale(g, -1);
    const t = lineMin(fn, p, dir);
    p = add(p, scale(dir, t));
    pts.push(p);
  }
  return buildResult(fn, pts);
}
