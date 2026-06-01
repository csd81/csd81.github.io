/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Live, computed reproductions of the Győri–Pituk calculus figures.
 * Genuine plots use Plotly (lazy-loaded via CalcPlot); the set-theory
 * schematics are hand-drawn SVG. Figure numbers match the printed books;
 * the dispatch is keyed by book id + "N.N". Lazily imported by calc/index.tsx,
 * so Plotly only loads when a figure is on screen.
 */
import { CalcPlot, palette } from './CalcPlot';

const lin = (a: number, b: number, n: number) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);
const PI = Math.PI;

// ── kalkulus1 ───────────────────────────────────────────────────────────────

/** Shared layout for the arc-function plots: clean axes through the origin. */
function arcLayout(xr: [number, number], yr: [number, number], yTickVals: number[], yTickText: string[], xTickVals: number[], label: string, lx: number, ly: number): any {
  return {
    height: 300,
    xaxis: { range: xr, showgrid: false, zeroline: true, tickvals: xTickVals },
    yaxis: { range: yr, showgrid: false, zeroline: true, tickvals: yTickVals, ticktext: yTickText },
    annotations: [{ x: lx, y: ly, text: label, showarrow: false, font: { color: palette().accent, size: 15 } }],
  };
}
const curve = (xs: number[], f: (x: number) => number) => ({
  x: xs, y: xs.map(f), type: 'scatter', mode: 'lines', line: { color: palette().accent, width: 3 },
});

function arcsinFig() {
  const xs = lin(-1, 1, 240);
  return <CalcPlot height={300} caption="2.1. ábra. y = arcsin x"
    data={[curve(xs, Math.asin)]}
    layout={arcLayout([-1.3, 1.3], [-1.85, 1.85], [-PI / 2, PI / 2], ['−π/2', 'π/2'], [-1, 1], 'y = arcsin x', 0.55, 1.35)} />;
}
function arccosFig() {
  const xs = lin(-1, 1, 240);
  return <CalcPlot height={300} caption="2.2. ábra. y = arccos x"
    data={[curve(xs, Math.acos)]}
    layout={arcLayout([-1.3, 1.3], [-0.25, 3.4], [PI / 2, PI], ['π/2', 'π'], [-1, 1], 'y = arccos x', 0.55, 2.6)} />;
}
function asymptotes(xr: [number, number], ys: number[]) {
  const p = palette();
  return ys.map((y) => ({ x: xr, y: [y, y], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1.4, dash: 'dash' } }));
}
function arctgFig() {
  const xs = lin(-6.5, 6.5, 320);
  return <CalcPlot height={300} caption="2.3. ábra. y = arctg x"
    data={[...asymptotes([-6.5, 6.5], [-PI / 2, PI / 2]), curve(xs, Math.atan)]}
    layout={arcLayout([-6.5, 6.5], [-1.95, 1.95], [-PI / 2, PI / 2], ['−π/2', 'π/2'], [], 'y = arctg x', 3.3, 1.0)} />;
}
function arcctgFig() {
  const xs = lin(-6.5, 6.5, 320);
  return <CalcPlot height={300} caption="2.4. ábra. y = arcctg x"
    data={[...asymptotes([-6.5, 6.5], [0, PI]), curve(xs, (x) => PI / 2 - Math.atan(x))]}
    layout={arcLayout([-6.5, 6.5], [-0.4, 3.55], [PI / 2, PI], ['π/2', 'π'], [], 'y = arcctg x', 3.0, 0.55)} />;
}

// difference-quotient (secant) and tangent share the same demo curve
const fDemo = (x: number) => 2.6 - 2.2 * Math.exp(-0.5 * x);
const fDemoD = (x: number) => 1.1 * Math.exp(-0.5 * x);

function secantFig() {
  const p = palette();
  const xs = lin(0.15, 4.4, 200);
  const a = 1.1, x2 = 3.6;
  const fa = fDemo(a), fx = fDemo(x2);
  const m = (fx - fa) / (x2 - a);
  const sec = (x: number) => fa + m * (x - a);
  return <CalcPlot height={330} caption="3.1. ábra. Különbségi hányados és szelő"
    data={[
      { x: xs, y: xs.map(fDemo), type: 'scatter', mode: 'lines', line: { color: p.accent, width: 3 } },
      { x: [0.3, 4.3], y: [sec(0.3), sec(4.3)], type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2 } },
      { x: [a, a], y: [0, fa], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
      { x: [x2, x2], y: [0, fx], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
      { x: [a, x2], y: [fa, fx], type: 'scatter', mode: 'markers', marker: { color: p.accent2, size: 8 } },
    ]}
    layout={{
      xaxis: { range: [0, 4.7], showgrid: false, zeroline: true, tickvals: [a, x2], ticktext: ['a', 'x'] },
      yaxis: { range: [0, 3], showgrid: false, zeroline: true, tickvals: [fa, fx], ticktext: ['f(a)', 'f(x)'] },
      annotations: [{ x: 4.05, y: fDemo(4.05) + 0.18, text: 'y = f(x)', showarrow: false, font: { color: p.accent } }],
    }} />;
}
function tangentFig() {
  const p = palette();
  const xs = lin(0.15, 4.4, 200);
  const a = 2.0, fa = fDemo(a), m = fDemoD(a);
  const tan = (x: number) => fa + m * (x - a);
  return <CalcPlot height={330} caption="3.2. ábra. Érintő egyenes"
    data={[
      { x: xs, y: xs.map(fDemo), type: 'scatter', mode: 'lines', line: { color: p.accent, width: 3 } },
      { x: [0.4, 3.9], y: [tan(0.4), tan(3.9)], type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2 } },
      { x: [a, a], y: [0, fa], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
      { x: [a], y: [fa], type: 'scatter', mode: 'markers', marker: { color: p.accent2, size: 8 } },
    ]}
    layout={{
      xaxis: { range: [0, 4.7], showgrid: false, zeroline: true, tickvals: [a], ticktext: ['a'] },
      yaxis: { range: [0, 3], showgrid: false, zeroline: true, tickvals: [fa], ticktext: ['f(a)'] },
      annotations: [{ x: 4.05, y: fDemo(4.05) + 0.18, text: 'y = f(x)', showarrow: false, font: { color: p.accent } }],
    }} />;
}

function riemannFig() {
  const p = palette();
  const a = 0.6, b = 5.1, k = 6;
  const f = (x: number) => 1.9 + 0.85 * Math.sin(1.05 * x - 0.3);
  const xs = lin(a, b, 240);
  // upper-sum rectangles: height = max of f over each subinterval (sampled)
  const edges = lin(a, b, k);
  const rects: any[] = [];
  for (let i = 0; i < k; i++) {
    const l = edges[i], r = edges[i + 1];
    const samp = lin(l, r, 12).map(f);
    const M = Math.max(...samp);
    rects.push({ x: [l, r, r, l, l], y: [0, 0, M, M, 0], type: 'scatter', mode: 'lines', fill: 'toself', fillcolor: p.fill, line: { color: p.grid, width: 1 } });
  }
  return <CalcPlot height={320} caption="4.1. ábra. Alsó és felső összeg (felső közelítés)"
    data={[
      ...rects,
      { x: xs, y: xs.map(f), type: 'scatter', mode: 'lines', line: { color: p.accent, width: 3 } },
    ]}
    layout={{
      xaxis: { range: [0, b + 0.4], showgrid: false, zeroline: true, tickvals: [a, edges[2], edges[3], b], ticktext: ['a=x₀', 'xᵢ₋₁', 'xᵢ', 'xₖ=b'] },
      yaxis: { range: [0, 3.1], showgrid: false, zeroline: true },
    }} />;
}

function areaFig() {
  const p = palette();
  const a = 0.8, b = 4.6;
  const xs = lin(a, b, 200);
  const f = (x: number) => 2.5 + 0.45 * Math.sin(1.15 * x + 0.2);
  const g = (x: number) => 0.7 + 0.4 * Math.sin(1.0 * x + 1.2);
  return <CalcPlot height={320} caption="4.2. ábra. Két görbe közötti terület"
    data={[
      { x: xs, y: xs.map(g), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2.5 } },
      { x: xs, y: xs.map(f), type: 'scatter', mode: 'lines', fill: 'tonexty', fillcolor: p.fill, line: { color: p.accent, width: 2.5 } },
      { x: [a, a], y: [g(a), f(a)], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
      { x: [b, b], y: [g(b), f(b)], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
    ]}
    layout={{
      xaxis: { range: [0, 5.2], showgrid: false, zeroline: true, tickvals: [a, b], ticktext: ['a', 'b'] },
      yaxis: { range: [0, 3.2], showgrid: false, zeroline: true },
      annotations: [
        { x: 4.05, y: f(4.05) + 0.2, text: 'y = f(x)', showarrow: false, font: { color: p.accent } },
        { x: 4.1, y: g(4.1) - 0.25, text: 'y = g(x)', showarrow: false, font: { color: p.accent2 } },
        { x: (a + b) / 2, y: 1.55, text: 'T', showarrow: false, font: { color: p.fg, size: 16 } },
      ],
    }} />;
}

function solidOfRevolutionFig() {
  const a = 0, b = 6.2;
  const f = (x: number) => 1.0 + 0.45 * Math.sin(1.0 * x);
  const xs = lin(a, b, 50), th = lin(0, 2 * PI, 44);
  const X: number[][] = [], Y: number[][] = [], Z: number[][] = [];
  for (let i = 0; i < th.length; i++) {
    const rx: number[] = [], ry: number[] = [], rz: number[] = [];
    for (let j = 0; j < xs.length; j++) { rx.push(xs[j]); ry.push(f(xs[j]) * Math.cos(th[i])); rz.push(f(xs[j]) * Math.sin(th[i])); }
    X.push(rx); Y.push(ry); Z.push(rz);
  }
  return <CalcPlot height={380} caption="4.3. ábra. Forgástest: y = f(x) az x-tengely körül"
    data={[
      { type: 'surface', x: X, y: Y, z: Z, showscale: false, opacity: 0.92, colorscale: [[0, '#6d28d9'], [1, '#a78bfa']] },
      { type: 'scatter3d', mode: 'lines', x: xs, y: xs.map(f), z: xs.map(() => 0), line: { color: '#38bdf8', width: 5 } },
    ]}
    layout={{ scene: {} }} />;
}

function beatFig() {
  const p = palette();
  const E0 = 1, L = 2, w0 = 2, w = 2.1;
  const A = (2 * E0) / (L * (w0 * w0 - w * w)); // ≈ −2.439
  const ts = lin(0, 150, 1600);
  const Q = (t: number) => A * Math.sin(((w0 - w) * t) / 2) * Math.sin(((w0 + w) * t) / 2);
  const env = (t: number) => Math.abs(A * Math.sin(((w0 - w) * t) / 2));
  return <CalcPlot height={300} caption="5.3. ábra. Lebegés (L=2, C=1/8, E₀=1, ω₀=2, ω=2.1)"
    data={[
      { x: ts, y: ts.map((t) => env(t)), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 1.3, dash: 'dash' } },
      { x: ts, y: ts.map((t) => -env(t)), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 1.3, dash: 'dash' } },
      { x: ts, y: ts.map(Q), type: 'scatter', mode: 'lines', line: { color: p.accent, width: 1.4 } },
    ]}
    layout={{ xaxis: { range: [0, 150], zeroline: true, title: { text: 't' } }, yaxis: { range: [-3, 3], zeroline: true } }} />;
}

function resonanceFig() {
  const p = palette();
  const E0 = 1, L = 1, w0 = 5;
  const c = E0 / (2 * L * w0); // 0.1
  const ts = lin(0, 80, 2600);
  const Q = (t: number) => c * t * Math.sin(w0 * t);
  return <CalcPlot height={300} caption="5.4. ábra. Rezonancia (L=1, C=1/25, E₀=1, ω₀=5)"
    data={[
      { x: ts, y: ts.map((t) => c * t), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 1.3, dash: 'dash' } },
      { x: ts, y: ts.map((t) => -c * t), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 1.3, dash: 'dash' } },
      { x: ts, y: ts.map(Q), type: 'scatter', mode: 'lines', line: { color: p.accent, width: 1.1 } },
    ]}
    layout={{ xaxis: { range: [0, 80], zeroline: true, title: { text: 't' } }, yaxis: { range: [-8.5, 8.5], zeroline: true } }} />;
}

// ── kalkulus2 ───────────────────────────────────────────────────────────────

function partialDerivSurfaceFig() {
  // z = f(x,y) bump with the x=a and y=b slice curves + tangent directions
  const f = (x: number, y: number) => 2 * Math.exp(-(x * x + y * y) / 8);
  const xs = lin(-3, 3, 40), ys = lin(-3, 3, 40);
  const Z = ys.map((y) => xs.map((x) => f(x, y)));
  const a = 1, b = -1, f0 = f(a, b);
  const dfx = (-a / 4) * f0, dfy = (-b / 4) * f0;
  const sliceX = ys.map((y) => f(a, y));   // x = a fixed
  const sliceY = xs.map((x) => f(x, b));   // y = b fixed
  return <CalcPlot height={400} caption="3.2. ábra. z = f(x,y); az x=a és y=b metszetek és érintőik"
    data={[
      { type: 'surface', x: xs, y: ys, z: Z, showscale: false, opacity: 0.82, colorscale: [[0, '#312e81'], [1, '#a78bfa']] },
      { type: 'scatter3d', mode: 'lines', x: ys.map(() => a), y: ys, z: sliceX, line: { color: '#38bdf8', width: 5 } },
      { type: 'scatter3d', mode: 'lines', x: xs, y: xs.map(() => b), z: sliceY, line: { color: '#f472b6', width: 5 } },
      { type: 'scatter3d', mode: 'lines', x: [a - 1.4, a + 1.4], y: [b, b], z: [f0 - 1.4 * dfx, f0 + 1.4 * dfx], line: { color: '#fbbf24', width: 4 } },
      { type: 'scatter3d', mode: 'lines', x: [a, a], y: [b - 1.4, b + 1.4], z: [f0 - 1.4 * dfy, f0 + 1.4 * dfy], line: { color: '#34d399', width: 4 } },
      { type: 'scatter3d', mode: 'markers', x: [a], y: [b], z: [f0], marker: { color: '#fbbf24', size: 4 } },
    ]}
    layout={{ scene: { zaxis: { range: [0, 2.3] } } }} />;
}

function volumeUnderSurfaceFig() {
  const f = (x: number, y: number) => 1.2 + 0.4 * Math.sin(x) + 0.4 * Math.cos(y);
  const xs = lin(0, 3, 36), ys = lin(0, 3, 36);
  const Z = ys.map((y) => xs.map((x) => f(x, y)));
  const Z0 = ys.map(() => xs.map(() => 0));
  return <CalcPlot height={400} caption="4.4. ábra. A z = f(x,y) felület alatti V térfogat a H tartomány felett"
    data={[
      { type: 'surface', x: xs, y: ys, z: Z, showscale: false, opacity: 0.9, colorscale: [[0, '#4c1d95'], [1, '#a78bfa']] },
      { type: 'surface', x: xs, y: ys, z: Z0, showscale: false, opacity: 0.25, colorscale: [[0, '#38bdf8'], [1, '#38bdf8']] },
    ]}
    layout={{ scene: { annotations: [{ x: 1.5, y: 1.5, z: 0, text: 'H', showarrow: false, font: { color: '#e2e8f0', size: 16 } }] } }} />;
}

function normalDomainNFig() {
  const p = palette();
  const a = 0.6, b = 4.4;
  const xs = lin(a, b, 160);
  const phi = (x: number) => 0.6 + 0.28 * Math.sin(1.15 * x);
  const psi = (x: number) => 2.4 + 0.42 * Math.sin(0.85 * x + 0.6);
  return <CalcPlot height={320} caption="4.5. ábra. N normáltartomány (y-ra nézve)"
    data={[
      { x: xs, y: xs.map(phi), type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2.5 } },
      { x: xs, y: xs.map(psi), type: 'scatter', mode: 'lines', fill: 'tonexty', fillcolor: p.fill, line: { color: p.accent, width: 2.5 } },
      { x: [a, a], y: [phi(a), psi(a)], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
      { x: [b, b], y: [phi(b), psi(b)], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dot' } },
    ]}
    layout={{
      xaxis: { range: [0, 5], showgrid: false, zeroline: true, tickvals: [a, b], ticktext: ['a', 'b'] },
      yaxis: { range: [0, 3.2], showgrid: false, zeroline: true },
      annotations: [
        { x: 3.9, y: psi(3.9) + 0.22, text: 'y = ψ(x)', showarrow: false, font: { color: p.accent } },
        { x: 3.9, y: phi(3.9) - 0.25, text: 'y = φ(x)', showarrow: false, font: { color: p.accent2 } },
        { x: (a + b) / 2, y: 1.5, text: 'N', showarrow: false, font: { color: p.fg, size: 16 } },
      ],
    }} />;
}

function normalDomainMFig() {
  const p = palette();
  const a = 0.6, b = 4.4; // y-range
  const ys = lin(a, b, 160);
  const phi = (y: number) => 0.7 + 0.3 * Math.sin(1.1 * y);          // left boundary x=φ(y)
  const psi = (y: number) => 2.6 + 0.45 * Math.sin(0.9 * y + 0.5);   // right boundary x=ψ(y)
  const xPoly = [...ys.map(phi), ...ys.slice().reverse().map(psi)];
  const yPoly = [...ys, ...ys.slice().reverse()];
  return <CalcPlot height={330} caption="4.6. ábra. M normáltartomány (x-re nézve)"
    data={[
      { x: xPoly, y: yPoly, type: 'scatter', mode: 'lines', fill: 'toself', fillcolor: p.fill, line: { color: p.accent, width: 2.5 } },
      { x: ys.map(phi), y: ys, type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2.5 } },
    ]}
    layout={{
      xaxis: { range: [0, 3.6], showgrid: false, zeroline: true },
      yaxis: { range: [0, 5], showgrid: false, zeroline: true, tickvals: [a, b], ticktext: ['a', 'b'] },
      annotations: [
        { x: phi(2.5) - 0.4, y: 2.5, text: 'x = φ(y)', showarrow: false, font: { color: p.accent2 } },
        { x: psi(2.5) + 0.4, y: 2.5, text: 'x = ψ(y)', showarrow: false, font: { color: p.accent } },
        { x: 1.6, y: 2.5, text: 'M', showarrow: false, font: { color: p.fg, size: 16 } },
      ],
    }} />;
}

function triangleFig() {
  const p = palette();
  // H bounded by y=x, y=0, x=1, x=2  →  { 1≤x≤2, 0≤y≤x }
  return <CalcPlot height={330} caption="4.7. ábra. H: y=x, y=0, x=1, x=2 által határolt tartomány"
    data={[
      { x: [1, 2, 2, 1, 1], y: [0, 0, 2, 1, 0], type: 'scatter', mode: 'lines', fill: 'toself', fillcolor: p.fill, line: { color: p.accent, width: 2 } },
      { x: [0, 2.6], y: [0, 2.6], type: 'scatter', mode: 'lines', line: { color: p.accent2, width: 2 } },
      { x: [1, 1], y: [0, 2.6], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dash' } },
      { x: [2, 2], y: [0, 2.6], type: 'scatter', mode: 'lines', line: { color: p.grid, width: 1, dash: 'dash' } },
    ]}
    layout={{
      xaxis: { range: [0, 3], showgrid: false, zeroline: true, tickvals: [1, 2] },
      yaxis: { range: [0, 2.8], showgrid: false, zeroline: true },
      annotations: [
        { x: 2.35, y: 2.45, text: 'y = x', showarrow: false, font: { color: p.accent2 } },
        { x: 1.6, y: 0.55, text: 'H', showarrow: false, font: { color: p.fg, size: 16 } },
        { x: 1, y: 2.7, text: 'x=1', showarrow: false, font: { color: p.fg, size: 11 } },
        { x: 2, y: 2.7, text: 'x=2', showarrow: false, font: { color: p.fg, size: 11 } },
      ],
    }} />;
}

// ── kalkulus2 SVG schematics ─────────────────────────────────────────────────

const BLOB = 'M 250 70 C 320 60 380 110 378 170 C 376 230 340 280 270 282 C 200 284 120 270 110 205 C 102 150 130 90 250 70 Z';

function FigFrame({ caption, children, w = 420, h = 300 }: { caption: string; children: any; w?: number; h?: number }) {
  const p = palette();
  return (
    <span className="calc-fig" style={{ display: 'block', margin: '1.5rem auto', maxWidth: 460 }}>
      <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: 'auto' }} role="img">{children}</svg>
      <span className="calc-fig__cap" style={{ display: 'block', textAlign: 'center', color: p.fg, opacity: 0.7, fontSize: '.82rem', marginTop: '.35rem', fontStyle: 'italic' }}>{caption}</span>
    </span>
  );
}

function setBlobFig() {
  const p = palette();
  return (
    <FigFrame caption="3.1. ábra. Belső (x), külső (y) és határpont (z)">
      {/* axes */}
      <line x1="40" y1="270" x2="400" y2="270" stroke={p.grid} strokeWidth="1.2" />
      <line x1="60" y1="290" x2="60" y2="40" stroke={p.grid} strokeWidth="1.2" />
      <path d={BLOB} fill="rgba(167,139,250,0.12)" stroke={p.accent} strokeWidth="2" />
      <text x="245" y="180" fill={p.fg} fontSize="18" fontStyle="italic" textAnchor="middle">A</text>
      {/* interior point x */}
      <circle cx="300" cy="150" r="26" fill="none" stroke={p.accent2} strokeWidth="1.2" strokeDasharray="4 3" />
      <circle cx="300" cy="150" r="3" fill={p.fg} />
      <text x="300" y="143" fill={p.fg} fontSize="13" textAnchor="middle">x</text>
      {/* boundary point z (on the curve) */}
      <circle cx="139" cy="247" r="24" fill="none" stroke={p.accent2} strokeWidth="1.2" strokeDasharray="4 3" />
      <circle cx="139" cy="247" r="3" fill={p.fg} />
      <text x="128" y="243" fill={p.fg} fontSize="13" textAnchor="middle">z</text>
      {/* exterior point y */}
      <circle cx="150" cy="120" r="22" fill="none" stroke={p.accent2} strokeWidth="1.2" strokeDasharray="4 3" />
      <circle cx="150" cy="120" r="3" fill={p.fg} />
      <text x="150" y="114" fill={p.fg} fontSize="13" textAnchor="middle">y</text>
    </FigFrame>
  );
}

/** Grid-covering schematic over an ellipse; `mode` picks inner vs outer cover. */
function gridCover(mode: 'inner' | 'outer', caption: string) {
  const p = palette();
  const cx = 220, cy = 155, rx = 130, ry = 95, g = 26;
  const inside = (x: number, y: number) => ((x - cx) ** 2) / (rx * rx) + ((y - cy) ** 2) / (ry * ry) <= 1;
  const cells: any[] = [];
  for (let x = cx - rx - g; x < cx + rx + g; x += g) {
    for (let y = cy - ry - g; y < cy + ry + g; y += g) {
      const corners = [[x, y], [x + g, y], [x + g, y + g], [x, y + g]] as const;
      const cnt = corners.filter(([cxr, cyr]) => inside(cxr, cyr)).length;
      const fill = mode === 'inner' ? cnt === 4 : cnt > 0;
      if (fill) cells.push(<rect key={`${x},${y}`} x={x} y={y} width={g} height={g} fill="rgba(167,139,250,0.18)" stroke={p.grid} strokeWidth="0.6" />);
    }
  }
  return (
    <FigFrame caption={caption}>
      {cells}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke={p.accent} strokeWidth="2" />
      <text x={cx + rx - 6} y={cy - ry + 2} fill={p.fg} fontSize="13" fontStyle="italic">H</text>
      <text x={cx} y={cy + 6} fill={p.fg} fontSize="13" fontStyle="italic" textAnchor="middle">Iⱼ</text>
    </FigFrame>
  );
}

// ── dispatch ─────────────────────────────────────────────────────────────────

type FigFn = () => any;
const K1: Record<string, FigFn> = {
  '2.1': arcsinFig, '2.2': arccosFig, '2.3': arctgFig, '2.4': arcctgFig,
  '3.1': secantFig, '3.2': tangentFig,
  '4.1': riemannFig, '4.2': areaFig, '4.3': solidOfRevolutionFig,
  '5.3': beatFig, '5.4': resonanceFig,
  // 5.1 / 5.2 (RLC / LC circuit schematics) intentionally omitted
};
const K2: Record<string, FigFn> = {
  '3.1': setBlobFig,
  '3.2': partialDerivSurfaceFig,
  '4.2': () => gridCover('inner', '4.2. ábra. Belső lefedés intervallumokkal'),
  '4.3': () => gridCover('outer', '4.3. ábra. Külső lefedés intervallumokkal'),
  '4.4': volumeUnderSurfaceFig,
  '4.5': normalDomainNFig, '4.6': normalDomainMFig, '4.7': triangleFig,
  // 4.1 (interval rectangle) intentionally omitted
};
const BOOKS: Record<string, Record<string, FigFn>> = { kalkulus1: K1, kalkulus2: K2 };

/** Render the figure for `book` + `id` (e.g. "4.3"), or null if none/skipped. */
export default function CalcFigure({ book, id }: { book: string; id: string }) {
  const fn = BOOKS[book]?.[id];
  return fn ? fn() : null;
}
