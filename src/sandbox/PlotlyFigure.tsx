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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any[] = fig.series.map((s, i) => ({
    x: s.x, y: s.y, type: 'scatter', mode: s.mode,
    line: { color: s.color, dash: s.dash, width: 2 },
    marker: { color: s.color, symbol: s.symbol ?? 'circle', size: 7 },
    name: fig.legend?.[i] ?? `data${i + 1}`,
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const axis = (range?: [number, number], origin?: boolean, title?: string): any => ({
    range, title: title ? { text: title } : undefined,
    gridcolor: grid, zeroline: true, zerolinecolor: origin ? fg : zero, zerolinewidth: origin ? 2 : 1,
    showline: !origin, linecolor: grid, color: fg, automargin: true,
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const layout: any = {
    autosize: true,
    margin: { l: 44, r: 16, t: fig.title ? 32 : 12, b: 36 },
    paper_bgcolor: 'rgba(0,0,0,0)', plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: fg, size: 12 },
    xaxis: axis(fig.xRange, fig.xOrigin, fig.xlabel),
    yaxis: axis(fig.yRange, fig.yOrigin, fig.ylabel),
    showlegend: !!(fig.legend && fig.legend.length) || fig.series.length > 1,
    legend: { orientation: 'h', y: -0.18, font: { color: fg } },
    title: fig.title ? { text: fig.title, font: { color: fg, size: 14 } } : undefined,
  };

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
