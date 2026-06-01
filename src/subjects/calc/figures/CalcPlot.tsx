/* eslint-disable @typescript-eslint/no-explicit-any */
import Plot from './Plot.jsx';

/** Read a CSS custom property off :root, with a dark-theme fallback. */
function cssVar(name: string, fallback: string): string {
  if (typeof window === 'undefined') return fallback;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

/** Figure palette — follows the app theme vars, defaults to the dark calc skin. */
export function palette() {
  return {
    fg: cssVar('--fg', '#c9d1d9'),
    grid: cssVar('--grid', '#283042'),
    accent: '#a78bfa',
    accent2: '#38bdf8',
    fill: 'rgba(167,139,250,0.20)',
    fill2: 'rgba(56,189,248,0.16)',
  };
}

/** Themed Plotly layout. Axis objects are merged so callers keep grid styling. */
export function themedLayout(extra: any = {}): any {
  const p = palette();
  const baseAxis = { gridcolor: p.grid, zerolinecolor: p.fg, zerolinewidth: 1, linecolor: p.grid, color: p.fg };
  const { xaxis, yaxis, ...rest } = extra;
  return {
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: p.fg, family: 'system-ui, sans-serif', size: 13 },
    margin: { l: 46, r: 18, t: 14, b: 40 },
    showlegend: false,
    hovermode: false,
    ...rest,
    xaxis: { ...baseAxis, ...(xaxis || {}) },
    yaxis: { ...baseAxis, ...(yaxis || {}) },
  };
}

/** Plotly scene (3D) theming for surface figures. */
export function themedScene(extra: any = {}): any {
  const p = palette();
  const ax = { backgroundcolor: 'rgba(0,0,0,0)', gridcolor: p.grid, zerolinecolor: p.grid, color: p.fg, showspikes: false };
  const { xaxis, yaxis, zaxis, ...rest } = extra;
  return {
    aspectmode: 'data',
    xaxis: { ...ax, title: { text: 'x' }, ...(xaxis || {}) },
    yaxis: { ...ax, title: { text: 'y' }, ...(yaxis || {}) },
    zaxis: { ...ax, title: { text: 'z' }, ...(zaxis || {}) },
    camera: { eye: { x: 1.5, y: -1.7, z: 0.9 } },
    ...rest,
  };
}

const config = { displayModeBar: false, responsive: true };

/** A themed, responsive Plotly figure with an optional caption below it. */
export function CalcPlot({ data, layout, caption, height = 320 }: {
  data: any[];
  layout?: any;
  caption?: string;
  height?: number;
}) {
  const is3d = !!layout?.scene;
  const merged = is3d
    ? { autosize: true, height, ...layout, ...themedLayout(layout), scene: themedScene(layout.scene) }
    : { autosize: true, height, ...themedLayout(layout) };
  return (
    <span className="calc-fig" style={{ display: 'block', margin: '1.5rem auto', maxWidth: 560 }}>
      <Plot
        data={data}
        layout={merged}
        config={config}
        style={{ width: '100%' }}
        useResizeHandler
      />
      {caption && (
        <span className="calc-fig__cap" style={{ display: 'block', textAlign: 'center', color: palette().fg, opacity: 0.7, fontSize: '.82rem', marginTop: '.35rem', fontStyle: 'italic' }}>
          {caption}
        </span>
      )}
    </span>
  );
}
