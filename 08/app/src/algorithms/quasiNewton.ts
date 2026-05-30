import type { Fn2D } from "../math/functions";
import {
  dist,
  dot,
  norm,
  scale,
  solve,
  sub,
  type Mat,
  type Vec,
} from "../math/linalg";
import type { PathResult, PathFrame } from "./types";

export type QNUpdate = "broyden" | "psb" | "bfgs" | "dfp";

const n = 2;

const outer = (a: Vec, b: Vec): Mat =>
  a.map((ai) => b.map((bj) => ai * bj));
const matAdd = (A: Mat, B: Mat): Mat =>
  A.map((row, i) => row.map((v, j) => v + B[i][j]));
const matScale = (A: Mat, s: number): Mat =>
  A.map((row) => row.map((v) => v * s));
const matVec = (A: Mat, x: Vec): Vec => A.map((row) => dot(row, x));

/** Second-order finite-difference Hessian approximation at p (step h). */
function fdHessian(fn: Fn2D, p: Vec, h = 0.05): Mat {
  const e = [
    [h, 0],
    [0, h],
  ];
  const fp = fn.f(p[0], p[1]);
  const A: Mat = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) {
      const fij = fn.f(p[0] + e[i][0] + e[j][0], p[1] + e[i][1] + e[j][1]);
      const fi = fn.f(p[0] + e[i][0], p[1] + e[i][1]);
      const fj = fn.f(p[0] + e[j][0], p[1] + e[j][1]);
      A[i][j] = (fij - fi - fj + fp) / (h * h);
    }
  // symmetrize
  return [
    [A[0][0], (A[0][1] + A[1][0]) / 2],
    [(A[0][1] + A[1][0]) / 2, A[1][1]],
  ];
}

function updateMatrix(
  kind: QNUpdate,
  A: Mat,
  s: Vec,
  y: Vec
): Mat {
  const As = matVec(A, s);
  const yMinusAs = sub(y, As);
  const ss = dot(s, s);

  if (kind === "broyden") {
    // A + (y − As) sᵀ / ‖s‖²
    return matAdd(A, matScale(outer(yMinusAs, s), 1 / ss));
  }
  if (kind === "psb") {
    const sym = matAdd(outer(yMinusAs, s), outer(s, yMinusAs));
    const t1 = matScale(sym, 1 / ss);
    const c = dot(yMinusAs, s) / (ss * ss);
    const t2 = matScale(outer(s, s), -c);
    return matAdd(A, matAdd(t1, t2));
  }
  const ys = dot(y, s);
  const sAs = dot(s, As);
  if (kind === "bfgs") {
    // A + yyᵀ/(yᵀs) − (As)(As)ᵀ/(sᵀAs)
    const t1 = matScale(outer(y, y), 1 / ys);
    const t2 = matScale(outer(As, As), -1 / sAs);
    return matAdd(A, matAdd(t1, t2));
  }
  // dfp
  const t1 = matScale(
    matAdd(outer(yMinusAs, y), outer(y, yMinusAs)),
    1 / ys
  );
  const c = dot(yMinusAs, s) / (ys * ys);
  const t2 = matScale(outer(y, y), -c);
  return matAdd(A, matAdd(t1, t2));
}

/** Quasi-Newton minimization with the given Hessian-approximation update. */
export function quasiNewton(
  fn: Fn2D,
  start: Vec,
  kind: QNUpdate,
  steps = 12,
  h = 0.05
): PathResult {
  let p = start;
  let A = fdHessian(fn, p, h);
  const pts: Vec[] = [p];

  for (let i = 0; i < steps; i++) {
    const g = fn.grad(p[0], p[1]);
    if (norm(g) < 1e-12) break;
    const s = solve(A, scale(g, -1)); // A s = −∇f
    if (!s) break;
    const pNext = [p[0] + s[0], p[1] + s[1]];
    const gNext = fn.grad(pNext[0], pNext[1]);
    const y = sub(gNext, g);
    A = updateMatrix(kind, A, s, y);
    p = pNext;
    pts.push(p);
    if (norm(s) < 1e-12) break;
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

export const QN_LABELS: Record<QNUpdate, string> = {
  broyden: "Broyden",
  psb: "PSB",
  bfgs: "BFGS",
  dfp: "DFP",
};
