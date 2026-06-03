/**
 * Collects `plot`/`fplot`/`hold`/`gca`/axis-property calls into a serialisable
 * figure spec that the React Plotly pane renders.
 */
import { type Value, type Mat, isMat, isHandle, toArray, asString, MatError } from './values';

export interface Series {
  x: number[];
  y: number[];
  mode: 'lines' | 'markers' | 'lines+markers';
  symbol?: string;
  dash?: string;
  color?: string;
  name?: string;
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
export interface FigureSpec {
  version: number;
  series: Series[];
  surfaces?: Surface[];
  reflines?: RefLine[];
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

export class Graphics {
  fig: FigureSpec = { version: 0, series: [] };
  private holding = false;
  private colorIdx = 0;
  private palette = ['#2f6fed', '#e2483d', '#2e9e4f', '#c542b5', '#d6b800', '#16a0c0'];

  reset() { this.fig = { version: this.fig.version + 1, series: [] }; this.colorIdx = 0; this.holding = false; }
  private touch() { this.fig = { ...this.fig, version: this.fig.version + 1 }; }
  private nextColor() { return this.palette[this.colorIdx++ % this.palette.length]; }

  hold(on?: boolean) { this.holding = on === undefined ? !this.holding : on; }

  /** plot(x, y, x2, y2, 'spec', ...) — also plot(y) and plot(x, Ymatrix). */
  plot(args: Value[]) {
    if (!this.holding) { this.fig.series = []; this.colorIdx = 0; }
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
        this.fig.series.push({
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
    if (!this.holding) { this.fig.series = []; this.fig.surfaces = []; this.colorIdx = 0; }
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
    this.fig.surfaces = this.fig.surfaces ?? [];
    this.fig.surfaces.push({ x: xv, y: yv, z, kind, shading: kind === 'surf' ? 'faceted' : 'faceted' });
    this.touch();
  }

  /** quiver(x,y,u,v): a 2-D vector field drawn as line segments (NaN-separated). */
  quiver(xs: number[], ys: number[], us: number[], vs: number[], scale = 0.9) {
    if (!this.holding) { this.fig.series = []; this.fig.surfaces = []; this.colorIdx = 0; }
    const X: number[] = [], Y: number[] = [];
    for (let i = 0; i < xs.length; i++) { X.push(xs[i], xs[i] + scale * us[i], NaN); Y.push(ys[i], ys[i] + scale * vs[i], NaN); }
    this.fig.series.push({ x: X, y: Y, mode: 'lines', color: this.nextColor() });
    this.touch();
  }

  /** xline/yline: a constant reference line (overlays without clearing the plot). */
  refline(axis: 'x' | 'y', values: number[], spec?: string, label?: string) {
    const s = spec ? parseLineSpec(spec) : {};
    this.fig.reflines = this.fig.reflines ?? [];
    for (const v of values) this.fig.reflines.push({ axis, value: v, color: s.color, dash: s.dash, label });
    this.touch();
  }

  /** fplot adds a sampled series; the caller supplies already-sampled points. */
  addSeries(x: number[], y: number[], spec?: string) {
    if (!this.holding) { this.fig.series = []; this.colorIdx = 0; }
    const s = spec ? parseLineSpec(spec) : {};
    this.fig.series.push({ x, y, mode: s.mode ?? 'lines', symbol: s.symbol, dash: s.dash, color: s.color ?? this.nextColor() });
    this.touch();
  }

  setAxesProp(name: string, value: Value) {
    const lower = name.toLowerCase();
    const range = (): [number, number] => {
      if (!isMat(value)) throw new MatError(`${name} expects a 2-element vector`);
      const a = toArray(value); return [a[0], a[1]];
    };
    switch (lower) {
      case 'xlim': this.fig.xRange = range(); break;
      case 'ylim': this.fig.yRange = range(); break;
      case 'xaxislocation': this.fig.xOrigin = isMat(value) && value.isChar ? asString(value) === 'origin' : false; break;
      case 'yaxislocation': this.fig.yOrigin = isMat(value) && value.isChar ? asString(value) === 'origin' : false; break;
      case 'title': if (isMat(value) && value.isChar) this.fig.title = asString(value); break;
      default: break; // ignore unknown axes properties
    }
    this.touch();
  }

  // ── Axis limits (used by xlim/ylim/axis) ──
  /** Data extent of the current series along one axis (fallback when no limit is set). */
  private dataRange(which: 'x' | 'y'): [number, number] {
    let lo = Infinity, hi = -Infinity;
    for (const s of this.fig.series) for (const v of which === 'x' ? s.x : s.y) { if (Number.isFinite(v)) { if (v < lo) lo = v; if (v > hi) hi = v; } }
    if (!Number.isFinite(lo)) return [0, 1];
    if (lo === hi) return [lo - 1, hi + 1];
    return [lo, hi];
  }
  getXLim(): [number, number] { return this.fig.xRange ?? this.dataRange('x'); }
  getYLim(): [number, number] { return this.fig.yRange ?? this.dataRange('y'); }
  setXLim(r?: [number, number]) { this.fig.xRange = r; this.touch(); }
  setYLim(r?: [number, number]) { this.fig.yRange = r; this.touch(); }

  command(name: string, args: Value[]) {
    const arg0 = args[0] && isMat(args[0]) && (args[0] as Mat).isChar ? asString(args[0]) : '';
    switch (name) {
      case 'hold': this.hold(arg0 === '' ? undefined : arg0 === 'on'); break;
      case 'grid': this.fig.grid = arg0 !== 'off'; this.touch(); break;
      case 'title': if (arg0) { this.fig.title = arg0; this.touch(); } break;
      case 'xlabel': if (arg0) { this.fig.xlabel = arg0; this.touch(); } break;
      case 'ylabel': if (arg0) { this.fig.ylabel = arg0; this.touch(); } break;
      case 'legend': this.fig.legend = args.filter((a) => isMat(a) && (a as Mat).isChar).map((a) => asString(a as Mat)); this.touch(); break;
      case 'axis': {
        // axis([xmin xmax ymin ymax]) | axis auto | axis (equal/tight/… ignored visually)
        if (args[0] && isMat(args[0]) && !(args[0] as Mat).isChar) {
          const v = toArray(args[0] as Mat);
          if (v.length >= 2) this.fig.xRange = [v[0], v[1]];
          if (v.length >= 4) this.fig.yRange = [v[2], v[3]];
          this.touch();
        } else if (arg0.toLowerCase() === 'auto') { this.fig.xRange = undefined; this.fig.yRange = undefined; this.touch(); }
        break;
      }
      case 'zlabel': if (arg0) { this.fig.zlabel = arg0; this.touch(); } break;
      case 'shading': if (arg0 && this.fig.surfaces) { for (const s of this.fig.surfaces) s.shading = (arg0 as Surface['shading']); this.touch(); } break;
      case 'colorbar': this.fig.colorbar = arg0 !== 'off'; this.touch(); break;
      case 'colormap': if (arg0) { this.fig.colormap = arg0; this.touch(); } break;
      case 'view': /* camera angle — Plotly default; ignored */ break;
      case 'clf': case 'cla': case 'close': this.reset(); break;
      case 'figure': this.reset(); break;
      default: break;
    }
  }
}
