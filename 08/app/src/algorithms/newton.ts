import type { Fn2D } from "../math/functions";
import { dist, norm, solve, sub, type Vec } from "../math/linalg";
import type { PathFrame, PathResult } from "./types";

/** Newton's method for minimization: pₖ₊₁ = pₖ − H(pₖ)⁻¹ ∇f(pₖ). */
export function newton(fn: Fn2D, start: Vec, steps = 8): PathResult {
  const pts: Vec[] = [start];
  let p = start;
  for (let i = 0; i < steps; i++) {
    const g = fn.grad(p[0], p[1]);
    if (norm(g) < 1e-10) break;
    const H = fn.hess(p[0], p[1]);
    const dp = solve(H, g); // solve H · dp = g
    if (!dp) break;
    p = sub(p, dp);
    pts.push(p);
  }
  const frames: PathFrame[] = pts.map((q, k) => ({
    k,
    p: q,
    fval: fn.f(q[0], q[1]),
    grad: fn.grad(q[0], q[1]),
    err: fn.min ? dist(q, fn.min) : undefined,
  }));
  return { frames, points: pts };
}
