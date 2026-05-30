import { dot, matVec, sub, norm, type Mat, type Vec } from "../math/linalg";

export interface LinFrame {
  k: number;
  p: Vec;
  err: number; // ‖pₖ − x*‖
  res: number; // ‖rₖ‖ = ‖b − A pₖ‖
}

/** Steepest-descent solution of a symmetric positive-definite A x = b,
 *  minimizing g(x) = ½xᵀAx − bᵀx. Eqs (11)–(13) of the chapter. */
export function gradientSolve(
  A: Mat,
  b: Vec,
  x0: Vec,
  xStar: Vec,
  steps = 14
): LinFrame[] {
  let p = x0.slice();
  const frames: LinFrame[] = [];
  const record = (k: number) => {
    const r = sub(b, matVec(A, p));
    frames.push({ k, p: p.slice(), err: norm(sub(p, xStar)), res: norm(r) });
    return r;
  };
  let r = record(0);
  for (let k = 1; k <= steps; k++) {
    const Ar = matVec(A, r);
    const denom = dot(r, Ar);
    if (Math.abs(denom) < 1e-18) break;
    const alpha = dot(r, r) / denom; // (rᵀr)/(rᵀAr)
    p = p.map((pi, i) => pi + alpha * r[i]);
    r = record(k);
    if (norm(r) < 1e-12) break;
  }
  return frames;
}
