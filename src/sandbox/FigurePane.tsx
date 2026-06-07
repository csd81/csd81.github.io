/** Figure pane: lazily loads Plotly only once a plot exists. */
import { Suspense, lazy, useState } from 'react';
import { useTheme } from '../shared/providers/ThemeProvider';
import type { FigureSpec } from './matlab/graphics';
import type { ScaleOverride } from './PlotlyFigure';

const PlotlyFigure = lazy(() => import('./PlotlyFigure'));

export default function FigurePane({ fig }: { fig: FigureSpec }) {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  // GUI axis-scale overrides (linear ⇄ log); 'auto' respects whatever the code set.
  const [xLog, setXLog] = useState(false);
  const [yLog, setYLog] = useState(false);

  const panels = fig.panels ?? [];
  const hasContent = panels.some((p) => p && (p.series?.length || p.surfaces?.length || p.reflines?.length || p.meshes?.length));
  if (!hasContent) {
    return <div className="mlab__fig-empty">No figure yet — call <code>plot</code>, <code>surf</code>, <code>fplot</code>…</div>;
  }
  // Log scaling only applies to 2-D Cartesian axes — hide the toggles for 3-D/polar figures.
  const is2D = !panels.some((p) => p && (p.polar || p.meshes?.length || p.surfaces?.some((s) => s.kind !== 'contour') || p.series?.some((s) => s.z)));

  const btn = (on: boolean): React.CSSProperties => ({
    cursor: 'pointer', fontSize: '0.72rem', lineHeight: 1, padding: '3px 7px', borderRadius: 5,
    border: `1px solid ${on ? '#2f6fed' : (dark ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)')}`,
    background: on ? '#2f6fed' : 'transparent', color: on ? '#fff' : (dark ? '#d8dee9' : '#1f2733'),
    fontWeight: on ? 600 : 400,
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {is2D && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '2px 4px 4px', flex: '0 0 auto' }}>
          <span style={{ fontSize: '0.7rem', opacity: 0.7, marginRight: 2 }}>Scale</span>
          <button type="button" style={btn(xLog)} onClick={() => setXLog((v) => !v)} title="Toggle X-axis log scale">X: {xLog ? 'log' : 'lin'}</button>
          <button type="button" style={btn(yLog)} onClick={() => setYLog((v) => !v)} title="Toggle Y-axis log scale">Y: {yLog ? 'log' : 'lin'}</button>
        </div>
      )}
      <div style={{ flex: '1 1 auto', minHeight: 0, position: 'relative' }}>
        <Suspense fallback={<div className="mlab__fig-empty">Loading figure…</div>}>
          <PlotlyFigure fig={fig} dark={dark} xScale={(xLog ? 'log' : 'auto') as ScaleOverride} yScale={(yLog ? 'log' : 'auto') as ScaleOverride} />
        </Suspense>
      </div>
    </div>
  );
}
