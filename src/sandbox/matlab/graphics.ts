/**
 * Collects `plot`/`fplot`/`hold`/`gca`/axis-property calls into a serialisable
 * figure spec that the React Plotly pane renders.
 */
import { type Value, type Mat, isMat, isHandle, toArray, asString, numel, MatError } from './values';

export interface Series {
  x: number[];
  y: number[];
  mode: 'lines' | 'markers' | 'lines+markers';
  symbol?: string;
  dash?: string;
  color?: string;
  name?: string;
  type?: 'line' | 'bar' | 'barh' | 'area' | 'stem' | 'stairs' | 'pie';
  z?: number[];        // present → 3-D line/scatter
  error?: number[];    // symmetric y error-bar half-widths
  sizes?: number[];    // per-point marker areas (scatter)
  theta?: number[];    // polar angle (radians) — present → polar series
  r?: number[];        // polar radius
  polarType?: 'line' | 'markers' | 'bar';
}
/** A 3-D triangulated mesh (trisurf/trimesh/tetramesh): node coords + 0-based triangle indices. */
export interface Mesh3D {
  x: number[];
  y: number[];
  z: number[];
  i: number[];
  j: number[];
  k: number[];
  wire?: boolean;      // trimesh → wireframe (edges only)
}
/** A 3-D gridded surface (surf/mesh/contour). z[r][c] sits at (x[c], y[r]). */
export interface Surface {
  x: number[];
  y: number[];
  z: number[][];
  kind: 'surf' | 'mesh' | 'contour' | 'contour3';
  shading: 'faceted' | 'flat' | 'interp';
}
/** A constant reference line drawn across the axes (xline/yline). */
export interface RefLine {
  axis: 'x' | 'y';
  value: number;
  color?: string;
  dash?: string;
  label?: string;
}
/** One axes panel (the drawable content of a single subplot/tile). */
export interface Panel {
  series: Series[];
  surfaces?: Surface[];
  meshes?: Mesh3D[];
  reflines?: RefLine[];
  polar?: boolean;
  rRange?: [number, number];
  thetaRange?: [number, number];
  rticks?: number[];
  thetaticks?: number[];
  title?: string;
  xlabel?: string;
  ylabel?: string;
  zlabel?: string;
  xRange?: [number, number];
  yRange?: [number, number];
  xOrigin?: boolean;
  yOrigin?: boolean;
  grid?: boolean;
  legend?: string[];
  colorbar?: boolean;
  colormap?: string;
  xScale?: 'linear' | 'log';
  yScale?: 'linear' | 'log';
  subtitle?: string;
}
export interface FigureSpec {
  version: number;
  rows: number;          // tile-layout rows
  cols: number;          // tile-layout cols
  current: number;       // active panel index (row-major: r*cols + c)
  panels: Panel[];
  sgtitle?: string;      // overall title across all tiles
}

const COLOR_MAP: Record<string, string> = {
  r: '#e2483d', g: '#2e9e4f', b: '#2f6fed', c: '#16a0c0', m: '#c542b5',
  y: '#d6b800', k: '#222222', w: '#ffffff',
};
const MARKERS: Record<string, string> = {
  '*': 'star', o: 'circle', '+': 'cross', '.': 'circle', x: 'x',
  s: 'square', d: 'diamond', '^': 'triangle-up', v: 'triangle-down', p: 'pentagon',
};

function parseLineSpec(spec: string): Partial<Series> {
  const out: Partial<Series> = {};
  let s = spec;
  // line style (longest first)
  const styles: [string, string][] = [['--', 'dash'], ['-.', 'dashdot'], [':', 'dot'], ['-', 'solid']];
  let hasLine = false;
  for (const [tok, dash] of styles) { if (s.includes(tok)) { out.dash = dash; hasLine = true; s = s.replace(tok, ''); break; } }
  let hasMarker = false;
  for (const ch of s) {
    if (MARKERS[ch]) { out.symbol = MARKERS[ch]; hasMarker = true; }
    else if (COLOR_MAP[ch]) out.color = COLOR_MAP[ch];
  }
  out.mode = hasMarker && hasLine ? 'lines+markers' : hasMarker ? 'markers' : 'lines';
  return out;
}

const emptyPanel = (): Panel => ({ series: [] });

export class Graphics {
  fig: FigureSpec = { version: 0, rows: 1, cols: 1, current: 0, panels: [emptyPanel()] };
  private holding = false;
  private colorIdx = 0;
  private palette = ['#2f6fed', '#e2483d', '#2e9e4f', '#c542b5', '#d6b800', '#16a0c0'];

  /** The active axes panel — every drawing command targets it. */
  private cur(): Panel { return this.fig.panels[this.fig.current] ?? (this.fig.panels[this.fig.current] = emptyPanel()); }

  reset() { this.fig = { version: this.fig.version + 1, rows: 1, cols: 1, current: 0, panels: [emptyPanel()] }; this.colorIdx = 0; this.holding = false; }
  private touch() { this.fig = { ...this.fig, version: this.fig.version + 1 }; }
  private nextColor() { return this.palette[this.colorIdx++ % this.palette.length]; }

  hold(on?: boolean) { this.holding = on === undefined ? !this.holding : on; }

  /** subplot(m,n,p): m×n grid, activate panel p (row-major, 1-based). */
  subplot(m: number, n: number, p: number) {
    if (this.fig.rows !== m || this.fig.cols !== n) { this.fig.rows = m; this.fig.cols = n; this.fig.panels = Array.from({ length: m * n }, () => emptyPanel()); }
    this.fig.current = Math.max(0, Math.min(m * n - 1, p - 1)); this.colorIdx = 0; this.touch();
  }
  /** tiledlayout(m,n): set up the grid; nexttile selects panels in turn. */
  tiledlayout(m: number, n: number) { this.fig.rows = m; this.fig.cols = n; this.fig.panels = Array.from({ length: m * n }, () => emptyPanel()); this.fig.current = -1; this.touch(); }
  nexttile(p?: number) { this.fig.current = p !== undefined ? p - 1 : this.fig.current + 1; if (this.fig.current >= this.fig.panels.length) this.fig.panels.push(emptyPanel()); if (this.fig.current < 0) this.fig.current = 0; this.colorIdx = 0; this.touch(); }
  sgtitle(s: string) { this.fig.sgtitle = s; this.touch(); }

  private startPlot() { const c = this.cur(); if (!this.holding) { c.series = []; c.surfaces = []; this.colorIdx = 0; c.xScale = undefined; c.yScale = undefined; } }
  /** Parse a single (x,y) or (y) chart argument list into plain arrays. */
  private xyVec(args: Value[]): { x: number[]; y: number[] } {
    const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    if (mats.length >= 2) return { x: toArray(mats[0]), y: toArray(mats[1]) };
    const y = mats.length ? toArray(mats[0]) : []; return { x: y.map((_, i) => i + 1), y };
  }
  setScale(which: 'x' | 'y', scale: 'linear' | 'log') { if (which === 'x') this.cur().xScale = scale; else this.cur().yScale = scale; this.touch(); }

  /** bar/barh/area/stem/stairs — single-series 2-D charts. */
  chart2d(args: Value[], type: NonNullable<Series['type']>) {
    this.startPlot(); const { x, y } = this.xyVec(args);
    const mode = type === 'stem' ? 'markers' : 'lines';
    this.cur().series.push({ x, y, mode, type, color: this.nextColor() });
    this.touch();
  }
  scatter(args: Value[]) {
    this.startPlot(); const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    const x = toArray(mats[0]), y = toArray(mats[1]);
    const sizes = mats.length >= 3 && numel(mats[2]) > 1 ? toArray(mats[2]) : undefined;
    this.cur().series.push({ x, y, mode: 'markers', symbol: 'circle', sizes, color: this.nextColor() });
    this.touch();
  }
  errorbar(args: Value[]) {
    this.startPlot(); const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    let x: number[], y: number[], e: number[];
    if (mats.length >= 3) { x = toArray(mats[0]); y = toArray(mats[1]); e = toArray(mats[2]); }
    else { y = toArray(mats[0]); e = toArray(mats[1]); x = y.map((_, i) => i + 1); }
    this.cur().series.push({ x, y, error: e, mode: 'lines+markers', symbol: 'circle', color: this.nextColor() });
    this.touch();
  }
  pie(args: Value[]) { this.startPlot(); const v = toArray((args.find((a) => isMat(a)) as Mat)); this.cur().series.push({ x: [], y: v, type: 'pie', mode: 'markers', color: this.nextColor() }); this.touch(); }
  /** plot3/scatter3 — a 3-D line or scatter. */
  line3(args: Value[], mode: 'lines' | 'markers') {
    this.startPlot(); const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    const spec = args.find((a) => isMat(a) && (a as Mat).isChar);
    const s = spec ? parseLineSpec(asString(spec as Mat)) : {};
    this.cur().series.push({ x: toArray(mats[0]), y: toArray(mats[1]), z: toArray(mats[2]), mode: spec ? (s.mode ?? mode) : mode, symbol: s.symbol, dash: s.dash, color: s.color ?? this.nextColor() });
    this.touch();
  }

  /** plot(x, y, x2, y2, 'spec', ...) — also plot(y) and plot(x, Ymatrix). */
  plot(args: Value[]) {
    if (!this.holding) { this.cur().series = []; this.colorIdx = 0; this.cur().xScale = undefined; this.cur().yScale = undefined; }
    let i = 0;
    const nums = args.map((a) => (isMat(a) ? a : null));
    while (i < args.length) {
      const a = nums[i];
      if (!a) { i++; continue; }
      let xs: number[];
      let ymat: Mat;
      const b = nums[i + 1];
      if (b && isMat(args[i + 1]) && !(args[i + 1] as Mat).isChar) {
        xs = toArray(a as Mat);
        ymat = b as Mat;
        i += 2;
      } else {
        ymat = a as Mat;
        xs = Array.from({ length: ymat.rows === 1 ? ymat.cols : ymat.rows }, (_, k) => k + 1);
        i += 1;
      }
      let spec: Partial<Series> = {};
      if (i < args.length && isMat(args[i]) && (args[i] as Mat).isChar) { spec = parseLineSpec(asString(args[i])); i++; }
      // Treat a row/column vector as a single series; a true matrix → one series per column.
      const asColumns = ymat.rows > 1 && ymat.cols > 1;
      const ncols = asColumns ? ymat.cols : 1;
      const colLen = asColumns ? ymat.rows : Math.max(ymat.rows, ymat.cols);
      for (let c = 0; c < ncols; c++) {
        const ys: number[] = [];
        for (let r = 0; r < colLen; r++) ys.push(asColumns ? ymat.data[r + c * ymat.rows] : ymat.data[r]);
        this.cur().series.push({
          x: xs.slice(0, ys.length),
          y: ys,
          mode: spec.mode ?? 'lines',
          symbol: spec.symbol, dash: spec.dash,
          color: spec.color ?? this.nextColor(),
        });
      }
    }
    this.touch();
  }

  /** surf/mesh/contour(X,Y,Z) — also surf(Z). X/Y may be meshgrid matrices or vectors. */
  surface(args: Value[], kind: Surface['kind']) {
    if (!this.holding) { this.cur().series = []; this.cur().surfaces = []; this.colorIdx = 0; }
    const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    let X: Mat | null, Y: Mat | null, Z: Mat;
    if (mats.length >= 3) { X = mats[0]; Y = mats[1]; Z = mats[2]; }
    else { Z = mats[0]; X = null; Y = null; }
    const nr = Z.rows, nc = Z.cols;
    const vecFrom = (M: Mat | null, len: number, dim: 'row' | 'col'): number[] => {
      if (!M) return Array.from({ length: len }, (_, i) => i + 1);
      if (M.rows > 1 && M.cols > 1) return dim === 'row'
        ? Array.from({ length: M.cols }, (_, c) => M.data[0 + c * M.rows])   // meshgrid X: first row
        : Array.from({ length: M.rows }, (_, r) => M.data[r]);              // meshgrid Y: first col
      return toArray(M);
    };
    const xv = vecFrom(X, nc, 'row'), yv = vecFrom(Y, nr, 'col');
    const z: number[][] = [];
    for (let r = 0; r < nr; r++) { const row: number[] = []; for (let c = 0; c < nc; c++) row.push(Z.data[r + c * nr]); z.push(row); }
    const cp = this.cur(); cp.surfaces = cp.surfaces ?? []; cp.surfaces.push({ x: xv, y: yv, z, kind, shading: 'faceted' });
    this.touch();
  }

  /** quiver(x,y,u,v): a 2-D vector field drawn as line segments (NaN-separated). */
  quiver(xs: number[], ys: number[], us: number[], vs: number[], scale = 0.9) {
    if (!this.holding) { this.cur().series = []; this.cur().surfaces = []; this.colorIdx = 0; }
    const X: number[] = [], Y: number[] = [];
    for (let i = 0; i < xs.length; i++) { X.push(xs[i], xs[i] + scale * us[i], NaN); Y.push(ys[i], ys[i] + scale * vs[i], NaN); }
    this.cur().series.push({ x: X, y: Y, mode: 'lines', color: this.nextColor() });
    this.touch();
  }

  /** polarplot/polarscatter(theta,r) and polarhistogram/compass — a polar-axes series. */
  polar(args: Value[], mode: 'lines' | 'markers' | 'bar') {
    if (!this.holding) { this.cur().series = []; this.colorIdx = 0; }
    const c = this.cur(); c.polar = true;
    const mats = args.filter((a): a is Mat => isMat(a) && !(a as Mat).isChar);
    let theta: number[], r: number[];
    if (mode === 'bar') {                                  // polarhistogram(theta[, nbins])
      const data = toArray(mats[0]); const nb = mats.length >= 2 && numel(mats[1]) === 1 ? toArray(mats[1])[0] : 20;
      const counts = new Array(nb).fill(0); for (const t of data) { let a = t % (2 * Math.PI); if (a < 0) a += 2 * Math.PI; counts[Math.min(nb - 1, Math.floor(a / (2 * Math.PI) * nb))]++; }
      theta = counts.map((_, i) => (i + 0.5) * 2 * Math.PI / nb); r = counts;
    } else if (mats.length >= 2) { theta = toArray(mats[0]); r = toArray(mats[1]); }
    else { r = toArray(mats[0]); theta = r.map((_, i) => 2 * Math.PI * i / r.length); }
    c.series.push({ x: [], y: [], theta, r, polarType: mode === 'bar' ? 'bar' : undefined, mode: mode === 'bar' ? 'lines' : mode, symbol: mode === 'markers' ? 'circle' : undefined, color: this.nextColor() });
    this.touch();
  }
  /** compass(u,v): arrows from the origin in polar axes. */
  compass(us: number[], vs: number[]) {
    if (!this.holding) { this.cur().series = []; this.colorIdx = 0; }
    const c = this.cur(); c.polar = true; const theta: number[] = [], r: number[] = [];
    for (let i = 0; i < us.length; i++) { theta.push(Math.atan2(vs[i], us[i]), Math.atan2(vs[i], us[i]), NaN); r.push(0, Math.hypot(us[i], vs[i]), NaN); }
    c.series.push({ x: [], y: [], theta, r, mode: 'lines', color: this.nextColor() });
    this.touch();
  }
  /** trisurf/trimesh(T,x,y,z): a triangulated 3-D surface. */
  trimesh(tri: number[][], x: number[], y: number[], z: number[], wire: boolean) {
    if (!this.holding) { this.cur().series = []; this.cur().surfaces = []; this.cur().meshes = []; this.colorIdx = 0; }
    const cp = this.cur(); cp.meshes = cp.meshes ?? [];
    cp.meshes.push({ x, y, z, i: tri.map((t) => t[0]), j: tri.map((t) => t[1]), k: tri.map((t) => t[2]), wire });
    this.touch();
  }
  setPolarProp(name: 'rlim' | 'thetalim' | 'rticks' | 'thetaticks', v: number[]) {
    const c = this.cur(); c.polar = true;
    if (name === 'rlim') c.rRange = [v[0], v[1]];
    else if (name === 'thetalim') c.thetaRange = [v[0], v[1]];
    else if (name === 'rticks') c.rticks = v;
    else c.thetaticks = v;
    this.touch();
  }

  /** xline/yline: a constant reference line (overlays without clearing the plot). */
  refline(axis: 'x' | 'y', values: number[], spec?: string, label?: string) {
    const s = spec ? parseLineSpec(spec) : {};
    const cp = this.cur(); cp.reflines = cp.reflines ?? [];
    for (const v of values) cp.reflines.push({ axis, value: v, color: s.color, dash: s.dash, label });
    this.touch();
  }

  /** fplot adds a sampled series; the caller supplies already-sampled points. */
  addSeries(x: number[], y: number[], spec?: string) {
    if (!this.holding) { this.cur().series = []; this.colorIdx = 0; }
    const s = spec ? parseLineSpec(spec) : {};
    this.cur().series.push({ x, y, mode: s.mode ?? 'lines', symbol: s.symbol, dash: s.dash, color: s.color ?? this.nextColor() });
    this.touch();
  }

  setAxesProp(name: string, value: Value) {
    const lower = name.toLowerCase();
    const range = (): [number, number] => {
      if (!isMat(value)) throw new MatError(`${name} expects a 2-element vector`);
      const a = toArray(value); return [a[0], a[1]];
    };
    switch (lower) {
      case 'xlim': this.cur().xRange = range(); break;
      case 'ylim': this.cur().yRange = range(); break;
      case 'xaxislocation': this.cur().xOrigin = isMat(value) && value.isChar ? asString(value) === 'origin' : false; break;
      case 'yaxislocation': this.cur().yOrigin = isMat(value) && value.isChar ? asString(value) === 'origin' : false; break;
      case 'title': if (isMat(value) && value.isChar) this.cur().title = asString(value); break;
      default: break; // ignore unknown axes properties
    }
    this.touch();
  }

  // ── Axis limits (used by xlim/ylim/axis) ──
  /** Data extent of the current series along one axis (fallback when no limit is set). */
  private dataRange(which: 'x' | 'y'): [number, number] {
    let lo = Infinity, hi = -Infinity;
    for (const s of this.cur().series) for (const v of which === 'x' ? s.x : s.y) { if (Number.isFinite(v)) { if (v < lo) lo = v; if (v > hi) hi = v; } }
    if (!Number.isFinite(lo)) return [0, 1];
    if (lo === hi) return [lo - 1, hi + 1];
    return [lo, hi];
  }
  getXLim(): [number, number] { return this.cur().xRange ?? this.dataRange('x'); }
  getYLim(): [number, number] { return this.cur().yRange ?? this.dataRange('y'); }
  setXLim(r?: [number, number]) { this.cur().xRange = r; this.touch(); }
  setYLim(r?: [number, number]) { this.cur().yRange = r; this.touch(); }

  command(name: string, args: Value[]) {
    const arg0 = args[0] && isMat(args[0]) && (args[0] as Mat).isChar ? asString(args[0]) : '';
    switch (name) {
      case 'hold': this.hold(arg0 === '' ? undefined : arg0 === 'on'); break;
      case 'grid': this.cur().grid = arg0 !== 'off'; this.touch(); break;
      case 'title': if (arg0) { this.cur().title = arg0; this.touch(); } break;
      case 'xlabel': if (arg0) { this.cur().xlabel = arg0; this.touch(); } break;
      case 'ylabel': if (arg0) { this.cur().ylabel = arg0; this.touch(); } break;
      case 'legend': this.cur().legend = args.filter((a) => isMat(a) && (a as Mat).isChar).map((a) => asString(a as Mat)); this.touch(); break;
      case 'axis': {
        // axis([xmin xmax ymin ymax]) | axis auto | axis (equal/tight/… ignored visually)
        if (args[0] && isMat(args[0]) && !(args[0] as Mat).isChar) {
          const v = toArray(args[0] as Mat);
          if (v.length >= 2) this.cur().xRange = [v[0], v[1]];
          if (v.length >= 4) this.cur().yRange = [v[2], v[3]];
          this.touch();
        } else if (arg0.toLowerCase() === 'auto') { this.cur().xRange = undefined; this.cur().yRange = undefined; this.touch(); }
        break;
      }
      case 'zlabel': if (arg0) { this.cur().zlabel = arg0; this.touch(); } break;
      case 'subtitle': if (arg0) { this.cur().subtitle = arg0; this.touch(); } break;
      case 'shading': { const sf = this.cur().surfaces; if (arg0 && sf) { for (const s of sf) s.shading = (arg0 as Surface['shading']); this.touch(); } break; }
      case 'colorbar': this.cur().colorbar = arg0 !== 'off'; this.touch(); break;
      case 'colormap': if (arg0) { this.cur().colormap = arg0; this.touch(); } break;
      case 'view': /* camera angle — Plotly default; ignored */ break;
      case 'clf': case 'cla': case 'close': this.reset(); break;
      case 'figure': this.reset(); break;
      default: break;
    }
  }
}
