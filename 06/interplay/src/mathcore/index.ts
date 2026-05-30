// TypeScript surface over the canonical JS core in ./core.mjs.
// @ts-ignore — core.mjs is plain JS; types are declared below.
import * as core from "./core.mjs";

export interface Pt {
  x: number;
  y: number;
}

export interface SplineSegment {
  x: number;
  a: number;
  b: number;
  c: number;
  d: number;
}

export interface HermiteResult {
  z: number[];
  table: number[][];
  coeffs: number[];
}

export type Method = "lagrange" | "newton" | "hermite" | "spline";

export const lagrangeBasis = core.lagrangeBasis as (xs: number[], k: number, x: number) => number;
export const lagrangeEval = core.lagrangeEval as (points: Pt[], x: number) => number;
export const dividedDifferenceTable = core.dividedDifferenceTable as (
  xs: number[],
  ys: number[]
) => number[][];
export const newtonCoefficients = core.newtonCoefficients as (xs: number[], ys: number[]) => number[];
export const newtonEval = core.newtonEval as (xs: number[], coeffs: number[], x: number) => number;
export const hermiteTable = core.hermiteTable as (
  xs: number[],
  ys: number[],
  dys: number[]
) => HermiteResult;
export const hermiteEval = core.hermiteEval as (h: HermiteResult, x: number) => number;
export const naturalCubicSpline = core.naturalCubicSpline as (
  xs: number[],
  ys: number[]
) => SplineSegment[];
export const splineEval = core.splineEval as (
  segs: SplineSegment[],
  xs: number[],
  x: number
) => number;
export const makeEvaluator = core.makeEvaluator as (
  method: Method,
  points: Pt[],
  derivatives?: number[]
) => (x: number) => number;
