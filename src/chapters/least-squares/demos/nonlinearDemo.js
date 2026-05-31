// Interactive nonlinear-fitting demo: exp / power models via linearization,
// shown in both the linearized space and the original space, with both errors.
import Plotly from 'plotly.js-dist-min';
import { fitExpLinearized, fitPowerLinearized, fitLine, sse } from '../math/lsq.js';
import { t, UI } from '../state/i18n.js';
import { onThemeChange } from '../state/theme.js';
import { renderMath } from '../ui/katex.js';
import { themedLayout, accent, pointColor, config, autoResize } from './plotlyTheme.js';

const PRESETS = {
  exp: { xs: [0.0, 1.0, 1.5, 2.0, 3.0, 4.0], ys: [0.3, 0.7, 0.9, 1.2, 1.8, 2.7] },
  power: { xs: [0.5, 1.0, 1.5, 2.5, 3.0], ys: [0.7, 1.1, 1.6, 2.1, 2.3] },
};

export function mountNonlinearDemo(host) {
  let model = 'exp';

  host.innerHTML = `
    <div class="demo">
      <div class="demo-controls">
        <button class="btn" data-model="exp" aria-pressed="true">${t(UI.expModel)}</button>
        <button class="btn" data-model="power" aria-pressed="false">${t(UI.powerModel)}</button>
      </div>
      <div class="demo-twoplots">
        <figure><figcaption data-cap1></figcaption><div class="demo-plot" data-plot1></div></figure>
        <figure><figcaption data-cap2></figcaption><div class="demo-plot" data-plot2></div></figure>
      </div>
      <div class="demo-readout" data-readout></div>
    </div>`;

  const plot1 = host.querySelector('[data-plot1]');
  const plot2 = host.querySelector('[data-plot2]');
  const cap1 = host.querySelector('[data-cap1]');
  const cap2 = host.querySelector('[data-cap2]');
  const readout = host.querySelector('[data-readout]');

  function draw() {
    const { xs, ys } = PRESETS[model];
    cap1.textContent = t(UI.linearizedSpace);
    cap2.textContent = t(UI.originalSpace);

    let a, b, lx, ly, A, B, predOrig, linErr, origErr, formula;

    if (model === 'exp') {
      lx = xs.slice();
      ly = ys.map((y) => Math.log(y));
      const line = fitLine(lx, ly);
      A = line.a; B = line.b;
      ({ a, b } = fitExpLinearized(xs, ys));
      predOrig = (x) => b * Math.exp(a * x);
      linErr = sse((x) => A * x + B, lx, ly);
      origErr = sse(predOrig, xs, ys);
      formula = `y = ${b.toFixed(6)}\\, e^{${a.toFixed(6)} x}`;
    } else {
      lx = xs.map((x) => Math.log(x));
      ly = ys.map((y) => Math.log(y));
      const line = fitLine(lx, ly);
      A = line.a; B = line.b;
      ({ a, b } = fitPowerLinearized(xs, ys));
      predOrig = (x) => b * Math.pow(x, a);
      linErr = sse((xv) => A * xv + B, lx, ly);
      origErr = sse(predOrig, xs, ys);
      formula = `y = ${b.toFixed(6)}\\, x^{${a.toFixed(6)}}`;
    }

    // Linearized space plot.
    const loX = Math.min(...lx), hiX = Math.max(...lx);
    const lpad = (hiX - loX) * 0.1 || 1;
    Plotly.react(
      plot1,
      [
        { x: lx, y: ly, mode: 'markers', type: 'scatter', name: model === 'exp' ? t({ hu: '(x, ln y)', en: '(x, ln y)' }) : t({ hu: '(ln x, ln y)', en: '(ln x, ln y)' }), marker: { size: 10, color: pointColor() } },
        { x: [loX - lpad, hiX + lpad], y: [A * (loX - lpad) + B, A * (hiX + lpad) + B], mode: 'lines', name: t({ hu: 'illesztett egyenes', en: 'fitted line' }), line: { color: accent(), width: 3 } },
      ],
      themedLayout(),
      config
    );

    // Original space plot.
    const lo = Math.min(...xs), hi = Math.max(...xs);
    const cx = [], cy = [];
    const N = 120;
    for (let i = 0; i <= N; i++) {
      const x = lo + ((hi - lo) * i) / N;
      cx.push(x); cy.push(predOrig(x));
    }
    Plotly.react(
      plot2,
      [
        { x: xs, y: ys, mode: 'markers', type: 'scatter', name: t({ hu: 'adatok', en: 'data' }), marker: { size: 10, color: pointColor() } },
        { x: cx, y: cy, mode: 'lines', name: t({ hu: 'illesztett görbe', en: 'fitted curve' }), line: { color: accent(), width: 3 } },
      ],
      themedLayout(),
      config
    );

    readout.innerHTML =
      `<div class="ro-row">$${formula}$</div>` +
      `<div class="ro-row">$A = ${A.toFixed(6)},\\quad B = ${B.toFixed(6)}$</div>` +
      `<div class="ro-row"><span class="ro-label">${t(UI.linearError)}:</span> $${linErr.toFixed(6)}$</div>` +
      `<div class="ro-row"><span class="ro-label">${t(UI.nonlinearError)}:</span> $${origErr.toFixed(6)}$</div>`;
    renderMath(readout);
  }

  host.querySelectorAll('[data-model]').forEach((btn) => {
    btn.addEventListener('click', () => {
      model = btn.dataset.model;
      host.querySelectorAll('[data-model]').forEach((b) =>
        b.setAttribute('aria-pressed', String(b.dataset.model === model))
      );
      draw();
    });
  });

  draw();
  const offTheme = onThemeChange(() => draw());
  const stopResize = autoResize(host, [plot1, plot2]);
  return () => { offTheme(); stopResize(); };
}
