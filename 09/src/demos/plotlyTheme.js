// Shared Plotly layout that follows the app's CSS theme variables.
import { cssVar } from '../state/theme.js';

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
