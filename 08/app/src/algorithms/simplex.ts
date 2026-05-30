import type { Fn2D } from "../math/functions";
import { add, scale, sub, type Vec } from "../math/linalg";
import type { SimplexFrame } from "./types";

type FV = { v: Vec; f: number };

const evalV = (fn: Fn2D, v: Vec): FV => ({ v, f: fn.f(v[0], v[1]) });

function sortVerts(fn: Fn2D, verts: Vec[]): FV[] {
  return verts.map((v) => evalV(fn, v)).sort((a, b) => a.f - b.f);
}

function frameOf(
  k: number,
  fvs: FV[],
  action: { en: string; hu: string },
  centroid?: Vec,
  trial?: { kind: string; point: Vec }
): SimplexFrame {
  return {
    k,
    verts: fvs.map((q) => q.v),
    fvals: fvs.map((q) => q.f),
    centroid,
    trial,
    action,
  };
}

/** Plain simplex method: reflect the worst over the centroid of the rest;
 *  if not better, shrink toward the best vertex. */
export function simplexMethod(
  fn: Fn2D,
  init: Vec[],
  steps = 26
): SimplexFrame[] {
  let fvs = sortVerts(fn, init);
  const frames: SimplexFrame[] = [
    frameOf(0, fvs, { en: "Starting simplex", hu: "Kezdő szimplex" }),
  ];

  for (let k = 1; k <= steps; k++) {
    const best = fvs[0];
    const worst = fvs[fvs.length - 1];
    const rest = fvs.slice(0, -1);
    const c = scale(
      rest.reduce((s, q) => add(s, q.v), [0, 0]),
      1 / rest.length
    );
    const r = sub(scale(c, 2), worst.v);
    const fr = fn.f(r[0], r[1]);

    if (fr < worst.f) {
      fvs = sortVerts(fn, [...rest.map((q) => q.v), r]);
      frames.push(
        frameOf(
          k,
          fvs,
          { en: "Reflection accepted", hu: "Tükrözés elfogadva" },
          c,
          { kind: "reflect", point: r }
        )
      );
    } else {
      // shrink toward best
      const nv = fvs.map((q) =>
        q === best ? q.v : add(best.v, scale(sub(q.v, best.v), 0.5))
      );
      fvs = sortVerts(fn, nv);
      frames.push(
        frameOf(
          k,
          fvs,
          { en: "Shrink toward best vertex", hu: "Zsugorítás a legjobb csúcs felé" },
          c
        )
      );
    }
  }
  return frames;
}

/** Nelder–Mead: reflect / expand / contract / shrink. */
export function nelderMead(
  fn: Fn2D,
  init: Vec[],
  alpha = 1.4,
  beta = 0.7,
  steps = 20
): SimplexFrame[] {
  let fvs = sortVerts(fn, init);
  const frames: SimplexFrame[] = [
    frameOf(0, fvs, { en: "Starting simplex", hu: "Kezdő szimplex" }),
  ];

  for (let k = 1; k <= steps; k++) {
    const best = fvs[0];
    const worst = fvs[fvs.length - 1];
    const secondWorst = fvs[fvs.length - 2];
    const rest = fvs.slice(0, -1);
    const c = scale(
      rest.reduce((s, q) => add(s, q.v), [0, 0]),
      1 / rest.length
    );
    const r = sub(scale(c, 2), worst.v);
    const fr = fn.f(r[0], r[1]);

    let action: { en: string; hu: string };
    let trial: { kind: string; point: Vec } | undefined;
    let nv: Vec[];

    if (fr < best.f) {
      // expand
      const e = add(c, scale(sub(r, c), alpha));
      const fe = fn.f(e[0], e[1]);
      if (fe < best.f) {
        nv = [...rest.map((q) => q.v), e];
        action = { en: "Expansion accepted", hu: "Megnyújtás elfogadva" };
        trial = { kind: "expand", point: e };
      } else {
        nv = [...rest.map((q) => q.v), r];
        action = { en: "Reflection (no expansion)", hu: "Tükrözés (nincs nyújtás)" };
        trial = { kind: "reflect", point: r };
      }
    } else if (fr < secondWorst.f) {
      nv = [...rest.map((q) => q.v), r];
      action = { en: "Reflection accepted", hu: "Tükrözés elfogadva" };
      trial = { kind: "reflect", point: r };
    } else {
      // contraction
      const z =
        worst.f < fr
          ? sub(c, scale(sub(r, c), beta))
          : add(c, scale(sub(r, c), beta));
      const fz = fn.f(z[0], z[1]);
      if (fz < Math.min(worst.f, fr)) {
        nv = [...rest.map((q) => q.v), z];
        action = { en: "Contraction accepted", hu: "Összehúzás elfogadva" };
        trial = { kind: "contract", point: z };
      } else {
        nv = fvs.map((q) =>
          q === best ? q.v : add(best.v, scale(sub(q.v, best.v), 0.5))
        );
        action = { en: "Shrink to best", hu: "Zsugorítás a legjobbhoz" };
      }
    }
    fvs = sortVerts(fn, nv);
    frames.push(frameOf(k, fvs, action, c, trial));
  }
  return frames;
}

export const centroidOf = (verts: Vec[]): Vec =>
  scale(
    verts.reduce((s, v) => add(s, v), [0, 0]),
    1 / verts.length
  );
