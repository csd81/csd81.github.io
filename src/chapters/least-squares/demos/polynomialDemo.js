// Interactive polynomial-fitting demo: degree slider, live fit + SSE.
import Plotly from 'plotly.js-dist-min';
import { fitPolynomial, evalPoly, sse } from '../math/lsq.js';
import { t, UI } from '../state/i18n.js';
import { onThemeChange } from '../state/theme.js';
import { renderMath } from '../ui/katex.js';
import { themedLayout, accent, pointColor, config, autoResize } from './plotlyTheme.js';

const PRESET = {
  xs: [-1.0, 0.0, 0.5, 1.0, 2.0, 2.5, 3.0],
  ys: [1.4, 1.9, 1.6, 1.7, 0.2, -0.1, -2.0],
};

export function mountPolynomialDemo(host) {
  let xs = [...PRESET.xs];
  let ys = [...PRESET.ys];
  let m = 2;
  const maxDeg = Math.min(6, xs.length - 1);

  host.innerHTML = `
    <div class="demo">
      <div class="demo-sliders">
        <label>${t(UI.degree)} $m$ (<span data-deg></span>)
          <input type="range" min="1" max="${maxDeg}" step="1" value="${m}" data-slider="m">
        </label>
      </div>
      <div class="demo-plot" data-plot></div>
      <div class="demo-readout" data-readout></div>
    </div>`;

  const plotEl = host.querySelector('[data-plot]');
  const readout = host.querySelector('[data-readout]');
  host.querySelector('[data-deg]').textContent = m;

  function draw() {
    const coeffs = fitPolynomial(xs, ys, m);
    const lo = Math.min(...xs) - 0.4;
    const hi = Math.max(...xs) + 0.4;
    const cx = [];
    const cy = [];
    const N = 120;
    for (let i = 0; i <= N; i++) {
      const x = lo + ((hi - lo) * i) / N;
      cx.push(x);
      cy.push(evalPoly(coeffs, x));
    }

    Plotly.react(
      plotEl,
      [
        { x: xs, y: ys, mode: 'markers', type: 'scatter', name: t({ hu: 'adatok', en: 'data' }), marker: { size: 11, color: pointColor() } },
        { x: cx, y: cy, mode: 'lines', name: `${t({ hu: 'fokszám', en: 'degree' })} ${m}`, line: { color: accent(), width: 3 } },
      ],
      themedLayout({ xaxis: { range: [lo, hi] } }),
      config
    );

    const err = sse((x) => evalPoly(coeffs, x), xs, ys);
    // Build ascending polynomial string.
    const terms = coeffs.map((c, k) => (k === 0 ? c.toFixed(4) : `${c >= 0 ? '+' : ''}${c.toFixed(4)}x^{${k}}`));
    let html = `<div class="ro-row">$p(x) = ${terms.join(' ')}$</div>`;
    html += `<div class="ro-row"><span class="ro-label">${t(UI.error)}:</span> $F = ${err.toFixed(6)}$</div>`;
    if (m >= xs.length - 1) {
      html += `<div class="ro-row ro-warn">${t({ hu: '⚠ $m \\ge n$: interpoláció, a hiba ≈ 0.', en: '⚠ $m \\ge n$: interpolation, error ≈ 0.' })}</div>`;
    }
    readout.innerHTML = html;
    renderMath(readout);
  }

  host.querySelector('[data-slider="m"]').addEventListener('input', (e) => {
    m = parseInt(e.target.value, 10);
    host.querySelector('[data-deg]').textContent = m;
    draw();
  });

  draw();
  const offTheme = onThemeChange(() => draw());
  const stopResize = autoResize(host, [plotEl]);
  return () => { offTheme(); stopResize(); };
}
