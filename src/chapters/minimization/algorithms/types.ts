import type { Vec } from "../math/linalg";

/** One iteration state of a 2D path-following method (gradient / Newton / quasi-Newton). */
export interface PathFrame {
  k: number;
  p: Vec; // current point
  fval: number; // f at current point
  grad?: Vec; // gradient at current point (for arrow drawing)
  err?: number; // ||p - min||
  /** label describing what happens to reach the NEXT point */
  note?: { en: string; hu: string };
}

/** A full path result: the sequence of points plus per-frame info. */
export interface PathResult {
  frames: PathFrame[];
  points: Vec[]; // convenience: all visited points in order
}

/** One state of the golden-section search. */
export interface GoldenFrame {
  k: number;
  a: number;
  b: number;
  x: number;
  y: number;
  fx: number;
  fy: number;
  evals: number; // cumulative function evaluations
  keep: "left" | "right" | "init";
}

/** One state of a simplex / Nelder–Mead iteration: a triangle (n=2 → 3 vertices). */
export interface SimplexFrame {
  k: number;
  verts: Vec[]; // ordered best→worst (after sort)
  fvals: number[];
  centroid?: Vec;
  trial?: { kind: string; point: Vec }; // reflected/expanded/contracted candidate
  action: { en: string; hu: string };
}
