// Grid evaluation + marching-squares iso-line extraction for 2D fields.

export interface Grid {
  nx: number;
  ny: number;
  xmin: number;
  xmax: number;
  ymin: number;
  ymax: number;
  vals: Float64Array; // row-major, length nx*ny; index = j*nx + i
  vmin: number;
  vmax: number;
}

export function sampleGrid(
  f: (x: number, y: number) => number,
  dom: { xmin: number; xmax: number; ymin: number; ymax: number },
  nx = 130,
  ny = 130
): Grid {
  const vals = new Float64Array(nx * ny);
  let vmin = Infinity,
    vmax = -Infinity;
  for (let j = 0; j < ny; j++) {
    const y = dom.ymin + ((dom.ymax - dom.ymin) * j) / (ny - 1);
    for (let i = 0; i < nx; i++) {
      const x = dom.xmin + ((dom.xmax - dom.xmin) * i) / (nx - 1);
      const v = f(x, y);
      vals[j * nx + i] = v;
      if (v < vmin) vmin = v;
      if (v > vmax) vmax = v;
    }
  }
  return { nx, ny, ...dom, vals, vmin, vmax };
}

/** Choose pleasant iso levels. Uses sqrt spacing so basins read well. */
export function autoLevels(g: Grid, n = 14): number[] {
  const lo = g.vmin,
    hi = g.vmax;
  if (!(hi > lo)) return [];
  const levels: number[] = [];
  for (let k = 1; k <= n; k++) {
    const t = k / (n + 1);
    levels.push(lo + (hi - lo) * t * t); // denser near the minimum
  }
  return levels;
}

export interface Segment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

/** Marching squares for a single iso level → world-space line segments. */
export function isoSegments(g: Grid, level: number): Segment[] {
  const segs: Segment[] = [];
  const { nx, ny, vals } = g;
  const dx = (g.xmax - g.xmin) / (nx - 1);
  const dy = (g.ymax - g.ymin) / (ny - 1);
  const X = (i: number) => g.xmin + i * dx;
  const Y = (j: number) => g.ymin + j * dy;
  const interp = (va: number, vb: number) => (level - va) / (vb - va);

  for (let j = 0; j < ny - 1; j++) {
    for (let i = 0; i < nx - 1; i++) {
      const v0 = vals[j * nx + i]; // bottom-left
      const v1 = vals[j * nx + i + 1]; // bottom-right
      const v2 = vals[(j + 1) * nx + i + 1]; // top-right
      const v3 = vals[(j + 1) * nx + i]; // top-left
      let idx = 0;
      if (v0 > level) idx |= 1;
      if (v1 > level) idx |= 2;
      if (v2 > level) idx |= 4;
      if (v3 > level) idx |= 8;
      if (idx === 0 || idx === 15) continue;

      const x0 = X(i),
        x1 = X(i + 1),
        y0 = Y(j),
        y1 = Y(j + 1);
      // edge crossing points
      const eB = () => ({ x: x0 + interp(v0, v1) * dx, y: y0 }); // bottom
      const eR = () => ({ x: x1, y: y0 + interp(v1, v2) * dy }); // right
      const eT = () => ({ x: x0 + interp(v3, v2) * dx, y: y1 }); // top
      const eL = () => ({ x: x0, y: y0 + interp(v0, v3) * dy }); // left

      const push = (
        a: { x: number; y: number },
        b: { x: number; y: number }
      ) => segs.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y });

      switch (idx) {
        case 1:
        case 14:
          push(eL(), eB());
          break;
        case 2:
        case 13:
          push(eB(), eR());
          break;
        case 3:
        case 12:
          push(eL(), eR());
          break;
        case 4:
        case 11:
          push(eR(), eT());
          break;
        case 5:
          push(eL(), eT());
          push(eB(), eR());
          break;
        case 6:
        case 9:
          push(eB(), eT());
          break;
        case 7:
        case 8:
          push(eL(), eT());
          break;
        case 10:
          push(eL(), eB());
          push(eR(), eT());
          break;
      }
    }
  }
  return segs;
}
