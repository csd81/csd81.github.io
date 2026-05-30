import { describe, it, expect } from "vitest";
import { rosen2y, quad1d } from "../math/functions";
import { gradientOptimal } from "./gradient";
import { newton } from "./newton";
import { quasiNewton } from "./quasiNewton";
import { goldenSection, goldenMid } from "./goldenSection";
import { nelderMead } from "./simplex";
import { dist } from "../math/linalg";

describe("golden section", () => {
  it("finds the minimum of x²−0.8x+1 near 0.4", () => {
    const frames = goldenSection(quad1d, 0.005);
    const last = frames[frames.length - 1];
    expect(Math.abs(goldenMid(last) - 0.4)).toBeLessThan(0.01);
  });
});

describe("gradient (optimal)", () => {
  it("approaches (1, 0.5)", () => {
    const r = gradientOptimal(rosen2y, [-1, 4], 30);
    const last = r.points[r.points.length - 1];
    expect(dist(last, [1, 0.5])).toBeLessThan(0.2);
  });
});

describe("newton", () => {
  it("converges fast to (1, 0.5)", () => {
    const r = newton(rosen2y, [-1, 4], 8);
    const last = r.points[r.points.length - 1];
    expect(dist(last, [1, 0.5])).toBeLessThan(1e-3);
  });
});

describe("quasi-Newton BFGS / DFP", () => {
  it("BFGS converges to (1, 0.5)", () => {
    const r = quasiNewton(rosen2y, [2, 2], "bfgs", 12);
    const last = r.points[r.points.length - 1];
    expect(dist(last, [1, 0.5])).toBeLessThan(1e-2);
  });
  it("DFP converges to (1, 0.5)", () => {
    const r = quasiNewton(rosen2y, [2, 2], "dfp", 12);
    const last = r.points[r.points.length - 1];
    expect(dist(last, [1, 0.5])).toBeLessThan(1e-2);
  });
});

describe("nelder-mead", () => {
  it("drives the simplex toward (1, 0.5)", () => {
    const frames = nelderMead(
      rosen2y,
      [
        [-2, 4],
        [-1, 4],
        [-1.5, 5],
      ],
      1.4,
      0.7,
      40
    );
    const last = frames[frames.length - 1];
    expect(dist(last.verts[0], [1, 0.5])).toBeLessThan(0.3);
  });
});
