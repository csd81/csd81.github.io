// Interactive line-fitting demo: draggable points, live best-fit + a guess mode.
import Plotly from 'plotly.js-dist-min';
import { fitLine, sse } from '../math/lsq.js';
import { t, UI } from '../state/i18n.js';
import { onThemeChange } from '../state/theme.js';
import { renderMath } from '../ui/katex.js';
import { themedLayout, accent, pointColor, config } from './plotlyTheme.js';

const PRESET = {
  xs: [-1.0, 1.0, 2.5, 3.0, 4.0, 4.5, 6.0],
  ys: [0.0, 1.2, 1.9, 2.5, 3.1, 3.2, 4.5],
};

export function mountLineDemo(host) {
  let xs = [...PRESET.xs];
  let ys = [...PRESET.ys];
  let guessMode = false;
  let gA = 0.5;
  let gB = 0.5;

  host.innerHTML = `
    <div class="demo">
      <p class="demo-hint">${t(UI.dragHint)}</p>
      <div class="demo-plot" data-plot></div>
      <div class="demo-controls">
        <button class="btn" data-act="best">${t(UI.demoBestFit)}</button>
        <button class="btn" data-act="guess" aria-pressed="false">${t(UI.demoGuess)}</button>
        <button class="btn" data-act="add">${t(UI.demoAddPoint)}</button>
        <button class="btn" data-act="reset">${t(UI.demoReset)}</button>
      </div>
      <div class="demo-sliders" data-sliders hidden>
        <label>${t(UI.slope)} (<span data-ga></span>)<input type="range" min="-2" max="3" step="0.01" data-slider="a"></label>
        <label>${t(UI.intercept)} (<span data-gb></span>)<input type="range" min="-3" max="4" step="0.01" data-slider="b"></label>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;

  const plotEl = host.querySelector('[data-plot]');
  const readout = host.querySelector('[data-readout]');
  const sliders = host.querySelector('[data-sliders]');

  function span(x0, x1) {
    const pad = (x1 - x0) * 0.1 || 1;
    return [x0 - pad, x1 + pad];
  }

  function draw() {
    const { a, b } = fitLine(xs, ys);
    const [lo, hi] = span(Math.min(...xs), Math.max(...xs));

    const traces = [
      {
        x: xs, y: ys, mode: 'markers', type: 'scatter',
        name: t({ hu: 'adatok', en: 'data' }),
        marker: { size: 11, color: pointColor() },
      },
      {
        x: [lo, hi], y: [a * lo + b, a * hi + b], mode: 'lines',
        name: t(UI.demoBestFit), line: { color: accent(), width: 3 },
      },
    ];
    if (guessMode) {
      traces.push({
        x: [lo, hi], y: [gA * lo + gB, gA * hi + gB], mode: 'lines',
        name: t(UI.demoGuess), line: { color: '#f4a261', width: 2, dash: 'dash' },
      });
    }

    Plotly.react(plotEl, traces, themedLayout({ xaxis: { range: [lo, hi] } }), config);

    const optErr = sse((x) => a * x + b, xs, ys);
    let html = `<div class="ro-row">$\\bar a = ${a.toFixed(6)},\\quad \\bar b = ${b.toFixed(6)}$</div>`;
    html += `<div class="ro-row"><span class="ro-label">${t(UI.optimalError)}:</span> $F = ${optErr.toFixed(6)}$</div>`;
    if (guessMode) {
      const yourErr = sse((x) => gA * x + gB, xs, ys);
      const ratio = yourErr > 0 ? optErr / yourErr : 1;
      const stars = ratio > 0.98 ? '★★★' : ratio > 0.85 ? '★★☆' : ratio > 0.6 ? '★☆☆' : '☆☆☆';
      html += `<div class="ro-row"><span class="ro-label">${t(UI.yourError)}:</span> $F = ${yourErr.toFixed(6)}$ <span class="ro-stars">${stars}</span></div>`;
    }
    readout.innerHTML = html;
    renderMath(readout);
  }

  // Native point dragging via Plotly's drag layer + pixel→data conversion.
  function enableDrag() {
    const drag = plotEl.querySelector('.nsewdrag');
    if (!drag) return;
    let dragIdx = -1;

    const toData = (evt) => {
      const bb = drag.getBoundingClientRect();
      const xa = plotEl._fullLayout.xaxis;
      const ya = plotEl._fullLayout.yaxis;
      return { x: xa.p2d(evt.clientX - bb.left), y: ya.p2d(evt.clientY - bb.top) };
    };

    drag.addEventListener('mousedown', (evt) => {
      const pt = toData(evt);
      const xa = plotEl._fullLayout.xaxis;
      const ya = plotEl._fullLayout.yaxis;
      const xspan = xa.range[1] - xa.range[0];
      const yspan = ya.range[1] - ya.range[0];
      let best = -1, bestD = Infinity;
      for (let i = 0; i < xs.length; i++) {
        const dx = (xs[i] - pt.x) / xspan;
        const dy = (ys[i] - pt.y) / yspan;
        const d = dx * dx + dy * dy;
        if (d < bestD) { bestD = d; best = i; }
      }
      if (best >= 0 && bestD < 0.0025) { dragIdx = best; evt.preventDefault(); }
    });
    window.addEventListener('mousemove', (evt) => {
      if (dragIdx < 0) return;
      ys[dragIdx] = toData(evt).y;
      draw();
    });
    window.addEventListener('mouseup', () => { dragIdx = -1; });
  }

  host.querySelector('[data-act="best"]').addEventListener('click', () => {
    guessMode = false; sliders.hidden = true;
    host.querySelector('[data-act="guess"]').setAttribute('aria-pressed', 'false');
    draw();
  });
  host.querySelector('[data-act="guess"]').addEventListener('click', (e) => {
    guessMode = !guessMode;
    sliders.hidden = !guessMode;
    e.currentTarget.setAttribute('aria-pressed', String(guessMode));
    draw();
  });
  host.querySelector('[data-act="add"]').addEventListener('click', () => {
    const fit = fitLine(xs, ys);
    const nx = Math.max(...xs) + 1;
    xs.push(nx); ys.push(fit.a * nx + fit.b);
    draw(); setTimeout(enableDrag, 60);
  });
  host.querySelector('[data-act="reset"]').addEventListener('click', () => {
    xs = [...PRESET.xs]; ys = [...PRESET.ys]; draw(); setTimeout(enableDrag, 60);
  });
  host.querySelectorAll('[data-slider]').forEach((sl) => {
    sl.value = sl.dataset.slider === 'a' ? gA : gB;
    sl.addEventListener('input', () => {
      if (sl.dataset.slider === 'a') gA = parseFloat(sl.value);
      else gB = parseFloat(sl.value);
      host.querySelector('[data-ga]').textContent = gA.toFixed(2);
      host.querySelector('[data-gb]').textContent = gB.toFixed(2);
      draw();
    });
  });
  host.querySelector('[data-ga]').textContent = gA.toFixed(2);
  host.querySelector('[data-gb]').textContent = gB.toFixed(2);

  draw();
  setTimeout(enableDrag, 80);

  const offTheme = onThemeChange(() => draw());
  return () => offTheme();
}
