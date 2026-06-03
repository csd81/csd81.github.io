/** Renders a MATLAB FigureSpec via Plotly. Lazy-loaded (keeps Plotly out of the main bundle). */
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-dist-min';
import type { FigureSpec } from './matlab/graphics';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Plot = createPlotlyComponent(Plotly as any);

export default function PlotlyFigure({ fig, dark }: { fig: FigureSpec; dark: boolean }) {
  const fg = dark ? '#d8dee9' : '#1f2733';
  const grid = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)';
  const zero = dark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)';

  const CMAP: Record<string, string> = {
    parula: 'Viridis', jet: 'Jet', hsv: 'HSV', hot: 'Hot', cool: 'Bluered',
    gray: 'Greys', bone: 'Greys', autumn: 'YlOrRd', winter: 'Blues', spring: 'Pinkjet', summer: 'YlGn', copper: 'Hot', turbo: 'Turbo', viridis: 'Viridis',
  };
  const colorscale = CMAP[(fig.colormap ?? 'parula').toLowerCase()] ?? 'Viridis';
  const has3D = !!fig.surfaces?.some((s) => s.kind !== 'contour'); // only plain contour is a 2-D trace

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any[] = fig.series.map((s, i) => ({
    x: s.x, y: s.y, type: 'scatter', mode: s.mode,
    line: { color: s.color, dash: s.dash, width: 2 },
    marker: { color: s.color, symbol: s.symbol ?? 'circle', size: 7 },
    name: fig.legend?.[i] ?? `data${i + 1}`,
  }));
  for (const s of fig.surfaces ?? []) {
    if (s.kind === 'contour') {
      data.push({ type: 'contour', x: s.x, y: s.y, z: s.z, colorscale, showscale: !!fig.colorbar, contours: { coloring: 'fill' } });
    } else {
      data.push({
        type: 'surface', x: s.x, y: s.y, z: s.z, colorscale,
        showscale: !!fig.colorbar,
        opacity: s.kind === 'mesh' ? 0.55 : 1,
        contours: s.kind === 'contour3'
          ? { z: { show: true, usecolormap: true, width: 2 } }
          : s.shading === 'faceted'
            ? { x: { show: true, color: zero, width: 1 }, y: { show: true, color: zero, width: 1 } }
            : undefined,
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const axis = (range?: [number, number], origin?: boolean, title?: string): any => ({
    range, title: title ? { text: title } : undefined,
    gridcolor: grid, zeroline: true, zerolinecolor: origin ? fg : zero, zerolinewidth: origin ? 2 : 1,
    showline: !origin, linecolor: grid, color: fg, automargin: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layout: any = {
    autosize: true,
    margin: has3D ? { l: 0, r: 0, t: fig.title ? 32 : 0, b: 0 } : { l: 44, r: 16, t: fig.title ? 32 : 12, b: 36 },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: fg, size: 12 },
    showlegend: !has3D && (!!(fig.legend && fig.legend.length) || fig.series.length > 1),
    legend: { orientation: 'h', y: -0.18, font: { color: fg } },
    title: fig.title ? { text: fig.title, font: { color: fg, size: 14 } } : undefined,
  };
  if (!has3D && fig.reflines?.length) {
    layout.shapes = fig.reflines.map((r) => (r.axis === 'x'
      ? { type: 'line', x0: r.value, x1: r.value, yref: 'paper', y0: 0, y1: 1, line: { color: r.color ?? fg, dash: r.dash, width: 1.5 } }
      : { type: 'line', y0: r.value, y1: r.value, xref: 'paper', x0: 0, x1: 1, line: { color: r.color ?? fg, dash: r.dash, width: 1.5 } }));
    layout.annotations = fig.reflines.filter((r) => r.label).map((r) => (r.axis === 'x'
      ? { x: r.value, xref: 'x', yref: 'paper', y: 1, text: r.label, showarrow: false, font: { color: r.color ?? fg }, yanchor: 'bottom' }
      : { y: r.value, yref: 'y', xref: 'paper', x: 1, text: r.label, showarrow: false, font: { color: r.color ?? fg }, xanchor: 'right' }));
  }
  if (has3D) {
    layout.scene = {
      xaxis: { title: { text: fig.xlabel ?? 'x' }, gridcolor: grid, color: fg },
      yaxis: { title: { text: fig.ylabel ?? 'y' }, gridcolor: grid, color: fg },
      zaxis: { title: { text: fig.zlabel ?? 'z' }, gridcolor: grid, color: fg },
    };
  } else {
    layout.xaxis = axis(fig.xRange, fig.xOrigin, fig.xlabel);
    layout.yaxis = axis(fig.yRange, fig.yOrigin, fig.ylabel);
  }

  return (
    <Plot
      data={data}
      layout={layout}
      config={{ displaylogo: false, responsive: true, displayModeBar: false }}
      style={{ width: '100%', height: '100%' }}
      useResizeHandler
    />
  );
}
