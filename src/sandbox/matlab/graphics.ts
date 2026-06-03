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
export interface FigureSpec {
  version: number;
  series: Series[];
  title?: string;
  xlabel?: string;
  ylabel?: string;
  xRange?: [number, number];
  yRange?: [number, number];
  xOrigin?: boolean;
  yOrigin?: boolean;
  grid?: boolean;
  legend?: string[];
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

  command(name: string, args: Value[]) {
    const arg0 = args[0] && isMat(args[0]) && (args[0] as Mat).isChar ? asString(args[0]) : '';
    switch (name) {
      case 'hold': this.hold(arg0 === '' ? undefined : arg0 === 'on'); break;
      case 'grid': this.fig.grid = arg0 !== 'off'; this.touch(); break;
      case 'title': if (arg0) { this.fig.title = arg0; this.touch(); } break;
      case 'xlabel': if (arg0) { this.fig.xlabel = arg0; this.touch(); } break;
      case 'ylabel': if (arg0) { this.fig.ylabel = arg0; this.touch(); } break;
      case 'legend': this.fig.legend = args.filter((a) => isMat(a) && (a as Mat).isChar).map((a) => asString(a as Mat)); this.touch(); break;
      case 'axis': /* axis equal/tight — ignored visually */ break;
      case 'clf': case 'cla': case 'close': this.reset(); break;
      case 'figure': this.reset(); break;
      default: break;
    }
  }
}
