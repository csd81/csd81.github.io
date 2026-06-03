/** Figure pane: lazily loads Plotly only once a plot exists. */
import { Suspense, lazy } from 'react';
import { useTheme } from '../shared/providers/ThemeProvider';
import type { FigureSpec } from './matlab/graphics';

const PlotlyFigure = lazy(() => import('./PlotlyFigure'));

export default function FigurePane({ fig }: { fig: FigureSpec }) {
  const { theme } = useTheme();
  if (!fig.series.length && !fig.surfaces?.length) {
    return <div className="mlab__fig-empty">No figure yet — call <code>plot</code>, <code>surf</code>, <code>fplot</code>…</div>;
  }
  return (
    <Suspense fallback={<div className="mlab__fig-empty">Loading figure…</div>}>
      <PlotlyFigure fig={fig} dark={theme === 'dark'} />
    </Suspense>
  );
}
