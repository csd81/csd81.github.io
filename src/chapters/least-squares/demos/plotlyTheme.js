// Shared Plotly layout that follows the app's CSS theme variables.
import Plotly from 'plotly.js-dist-min';
import { cssVar } from '../state/theme.js';

/**
 * Keep Plotly charts fitted to their (responsive) container. Plotly only sizes
 * to the container at mount and on window resize, so a chart mounted before the
 * layout settles can keep a stale, too-wide size and overflow. This re-fits on
 * the next frame and whenever the host element resizes. Returns a teardown.
 */
export function autoResize(host, els) {
  const fit = () => els.forEach((el) => { if (el && el.offsetParent !== null) { try { Plotly.Plots.resize(el); } catch {} } });
  requestAnimationFrame(fit);
  setTimeout(fit, 60);
  let ro;
  if (typeof ResizeObserver !== 'undefined') { ro = new ResizeObserver(fit); ro.observe(host); }
  return () => { if (ro) ro.disconnect(); };
}

export function themedLayout(extra = {}) {
  const fg = cssVar('--fg') || '#1a1a2e';
  const grid = cssVar('--grid') || '#d8d8e0';
  const paper = cssVar('--surface') || '#ffffff';
  return {
    paper_bgcolor: paper,
    plot_bgcolor: paper,
    font: { color: fg, family: 'system-ui, sans-serif' },
    margin: { l: 44, r: 16, t: 28, b: 40 },
    xaxis: { gridcolor: grid, zerolinecolor: grid },
    yaxis: { gridcolor: grid, zerolinecolor: grid },
    showlegend: true,
    legend: { orientation: 'h', y: 1.12, x: 0 },
    ...extra,
  };
}

export const accent = () => cssVar('--accent') || '#e63946';
export const pointColor = () => cssVar('--point') || '#3a6ea5';

export const config = { displayModeBar: false, responsive: true };
