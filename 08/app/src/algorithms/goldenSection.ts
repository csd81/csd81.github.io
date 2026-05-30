import type { Fn1D } from "../math/functions";
import type { GoldenFrame } from "./types";

export const R = (Math.sqrt(5) - 1) / 2; // ≈ 0.618034

/** Golden-section search, recording each nested interval as a frame.
 *  Mirrors the textbook algorithm: reuse one mesh point per step. */
export function goldenSection(
  fn: Fn1D,
  eps = 0.01,
  maxSteps = 40
): GoldenFrame[] {
  let a = fn.domain.a;
  let b = fn.domain.b;
  let x = a + R * (b - a);
  let y = a + (1 - R) * (b - a);
  let fx = fn.f(x);
  let fy = fn.f(y);
  let evals = 2;

  const frames: GoldenFrame[] = [
    { k: 0, a, b, x, y, fx, fy, evals, keep: "init" },
  ];

  let k = 0;
  while (b - a > eps && k < maxSteps) {
    k++;
    if (fx > fy) {
      // minimum in [a, x]; reuse y as the new x
      b = x;
      x = y;
      fx = fy;
      y = a + (1 - R) * (b - a);
      fy = fn.f(y);
      evals++;
      frames.push({ k, a, b, x, y, fx, fy, evals, keep: "left" });
    } else {
      // minimum in [y, b]; reuse x as the new y
      a = y;
      y = x;
      fy = fx;
      x = a + R * (b - a);
      fx = fn.f(x);
      evals++;
      frames.push({ k, a, b, x, y, fx, fy, evals, keep: "right" });
    }
  }
  return frames;
}

export const goldenMid = (fr: GoldenFrame) => (fr.a + fr.b) / 2;
