import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../components/kit';

/* ════ Tab 1: solution generator ════ */
function SolGen() {
  const [c1, setC1] = useState(-4), [r1, setR1] = useState(3);
  const [c2, setC2] = useState(0), [r2, setR2] = useState(-2);
  const [A, setA] = useState(7), [b, setB] = useState(2);
  const ref = useRef<HTMLCanvasElement>(null);
  const vals = Array.from({ length: 11 }, (_, n) => c1 * Math.pow(r1, n) + c2 * Math.pow(r2, n) + A * Math.pow(b, n));
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const mx = Math.max(...vals.map(Math.abs), 1), pad = 28, bw = (W - pad * 2) / vals.length;
    ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pad, H / 2); ctx.lineTo(W - pad, H / 2); ctx.stroke();
    vals.forEach((v, i) => {
      const x = pad + i * bw + bw / 2, y = Math.max(6, Math.min(H - 6, H / 2 - (v / mx) * (H / 2 - 10)));
      if (i > 0) {
        const px = pad + (i - 1) * bw + bw / 2, py = Math.max(6, Math.min(H - 6, H / 2 - (vals[i - 1] / mx) * (H / 2 - 10)));
        ctx.strokeStyle = '#f43f5e66'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
      }
      ctx.fillStyle = v >= 0 ? '#f43f5e' : '#60a5fa'; ctx.beginPath(); ctx.arc(x, y, 4, 0, 2 * Math.PI); ctx.fill();
      ctx.fillStyle = '#6b7280'; ctx.font = '9px monospace'; ctx.textAlign = 'center'; ctx.fillText(String(i), x, H - 3);
    });
  }, [c1, r1, c2, r2, A, b]);
  const num = (v: number, set: (n: number) => void, label: string) => (
    <span>{label} = <input type="number" className="ila-num" value={v} onChange={(e) => set(+e.target.value)} /></span>
  );
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#f43f5e' }}>Interaktív sorozatellenőrző</span>
      <p style={{ fontSize: '.8rem', margin: '.3rem 0' }}>xₙ = c₁r₁ⁿ + c₂r₂ⁿ + A·bⁿ paraméterei:</p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '.3rem 0', fontSize: '.85rem' }}>
        {num(c1, setC1, 'c₁')}{num(r1, setR1, 'r₁')}{num(c2, setC2, 'c₂')}{num(r2, setR2, 'r₂')}{num(A, setA, 'A')}{num(b, setB, 'b')}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '.76rem', color: '#c9d1d9', lineHeight: 1.8 }}>
        {vals.map((v, i) => <span key={i}>x{i}=<span style={{ color: '#fda4af' }}>{v.toFixed(2)}</span>&nbsp;&nbsp;</span>)}
      </div>
      <canvas ref={ref} width={620} height={130} style={{ width: '100%', maxWidth: 620, background: '#0a0c10', borderRadius: '.3rem', display: 'block', marginTop: '.5rem' }} />
    </div>
  );
}

/* ════ Tab 2: resonance canvas ════ */
function RezCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const N = 9;
    const series: Record<string, (n: number) => number> = {
      part: (n) => 4 * n * Math.pow(-2, n),
      hom1: (n) => 2 * Math.pow(3, n),
      hom2: (n) => -2 * Math.pow(-2, n),
      full: (n) => 2 * Math.pow(3, n) - 2 * Math.pow(-2, n) + 4 * n * Math.pow(-2, n),
    };
    const colors: Record<string, string> = { part: '#fb923c', hom1: '#60a5fa', hom2: '#34d399', full: '#f43f5e' };
    const labels: Record<string, string> = { part: '4n(−2)ⁿ', hom1: '2·3ⁿ', hom2: '−2(−2)ⁿ', full: 'xₙ (teljes)' };
    const allVals = Object.values(series).flatMap((f) => Array.from({ length: N }, (_, i) => f(i))).map(Math.abs);
    const mx = Math.max(...allVals, 1), pad = 32, bw = (W - pad * 2) / N;
    ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(pad, H / 2); ctx.lineTo(W - pad, H / 2); ctx.stroke();
    (Object.keys(series) as string[]).forEach((key) => {
      const f = series[key], col = colors[key];
      ctx.strokeStyle = col; ctx.lineWidth = key === 'full' ? 2 : 1;
      for (let i = 0; i < N; i++) {
        const x = pad + i * bw + bw / 2, v = f(i);
        const y = Math.max(4, Math.min(H - 4, H / 2 - (v / mx) * (H / 2 - 10)));
        ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, key === 'full' ? 4 : 3, 0, 2 * Math.PI); ctx.fill();
        if (i > 0) {
          const pv = f(i - 1), py = Math.max(4, Math.min(H - 4, H / 2 - (pv / mx) * (H / 2 - 10)));
          ctx.beginPath(); ctx.moveTo(pad + (i - 1) * bw + bw / 2, py); ctx.lineTo(x, y); ctx.stroke();
        }
      }
    });
    let lx = pad;
    (Object.keys(labels) as string[]).forEach((key) => {
      ctx.fillStyle = colors[key]; ctx.font = 'bold 9px monospace'; ctx.textAlign = 'left';
      ctx.fillText('● ' + labels[key], lx, H - 3); lx += 120;
    });
  }, []);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#f43f5e' }}>Rezonancia vizualizáció</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>A pₙ = A·bⁿ próba kiesik a homogén egyenletből, ezért pₙ = A·n·bⁿ kell:</p>
      <canvas ref={ref} width={620} height={150} style={{ width: '100%', maxWidth: 620, background: '#0a0c10', borderRadius: '.3rem', display: 'block' }} />
    </div>
  );
}

/* ════ Tab 3: polynomial check ════ */
function PolCheck() {
  const rows = [];
  for (let n = 2; n <= 6; n++) {
    const pn = -2 * n - 5, pn2 = -2 * (n - 2) - 5, lhs = pn - 4 * pn2, rhs = 6 * n - 1, ok = lhs === rhs;
    rows.push({ n, pn, pn2, lhs, rhs, ok });
  }
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#f43f5e' }}>Polinom próbafüggvény ellenőrző</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>pₙ = −2n−5 az xₙ − 4xₙ₋₂ = 6n−1 egyenletben (n=2..6):</p>
      <div style={{ fontFamily: 'monospace', fontSize: '.8rem', lineHeight: 2 }}>
        {rows.map((r) => (
          <div key={r.n}>n={r.n}: lhs={r.pn}−4·{r.pn2}=<strong style={{ color: r.ok ? '#34d399' : '#f87171' }}>{r.lhs}</strong> = rhs={r.rhs} {r.ok ? '✓' : '✗'}</div>
        ))}
      </div>
    </div>
  );
}

/* ════ Tab 4: generating function table ════ */
const GEN_ROWS: [string, string, string][] = [
  ['\\(1\\)', '\\(\\dfrac{1}{1-x}\\)', '\\(s_n=1\\)'],
  ['\\(a^n\\)', '\\(\\dfrac{1}{1-ax}\\)', '\\(s_n=as_{n-1},\\; s_0=1\\)'],
  ['\\(n+1\\)', '\\(\\dfrac{1}{(1-x)^2}\\)', '—'],
  ['\\(\\binom{m+n-1}{n}\\)', '\\(\\dfrac{1}{(1-x)^m}\\)', '—'],
  ['\\(2^n-1\\)', '\\(\\dfrac{x}{(1-x)(1-2x)}\\)', '\\(s_n=2s_{n-1}+1,\\;s_0=0\\)'],
  ['\\(n(-3)^{n-1}\\)', '\\(\\dfrac{x}{(1+3x)^2}\\)', '\\(s_n=-6s_{n-1}-9s_{n-2}\\)'],
  ['\\(5n+2\\)', '\\(\\dfrac{3x+2}{(1-x)^2}\\)', '—'],
  ['\\(6(-3)^n\\)', '\\(\\dfrac{6}{1+3x}\\)', '—'],
];
function GenTable() {
  const html = `<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">Sorozat sₙ</th><th style="text-align:left">Generátorfüggvény g(x)</th><th style="text-align:left">Rekurzió</th></tr></thead><tbody>${GEN_ROWS.map(([s, g, r]) => `<tr><td style="color:#fda4af">${s}</td><td style="color:#c9d1d9">${g}</td><td style="color:#6b7280;font-size:.72rem">${r}</td></tr>`).join('')}</tbody></table>`;
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#f43f5e' }}>Generátorfüggvény táblázat</span>
      <RichTex html={html} />
    </div>
  );
}

/* ════ Tab 5: verify all ════ */
const VERIFY: { label: string; check: (n: number) => boolean | null }[] = [
  { label: '1. xₙ = −4·3ⁿ + 7·2ⁿ', check: (n) => { const x = (m: number) => -4 * Math.pow(3, m) + 7 * Math.pow(2, m); return n < 2 ? null : Math.abs(x(n) - x(n - 1) - 6 * x(n - 2) + 7 * Math.pow(2, n)) < 1e-6; } },
  { label: '2. xₙ = 2·3ⁿ − 2(−2)ⁿ + 4n(−2)ⁿ', check: (n) => { const x = (m: number) => 2 * Math.pow(3, m) - 2 * Math.pow(-2, m) + 4 * m * Math.pow(-2, m); return n < 2 ? null : Math.abs(x(n) - x(n - 1) - 6 * x(n - 2) - 10 * Math.pow(-2, n)) < 1e-6; } },
  { label: '3. xₙ = 3·2ⁿ − (−2)ⁿ − 2n − 5', check: (n) => { const x = (m: number) => 3 * Math.pow(2, m) - Math.pow(-2, m) - 2 * m - 5; return n < 2 ? null : Math.abs(x(n) - 4 * x(n - 2) - (6 * n - 1)) < 1e-6; } },
  { label: '4. sₙ = (n²+n+2)/2', check: (n) => { const s = (m: number) => (m * m + m + 2) / 2; return n < 1 ? null : Math.abs(s(n) - s(n - 1) - n) < 1e-6; } },
  { label: '5. xₙ = 5·3ⁿ + 4(−4)ⁿ', check: (n) => { const x = (m: number) => 5 * Math.pow(3, m) + 4 * Math.pow(-4, m); return n < 1 ? null : Math.abs(x(n) - 3 * x(n - 1) - 7 * Math.pow(-4, n)) < 1e-6; } },
];
function VerifyAll() {
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#f43f5e' }}>Megoldás-ellenőrző (n=0..7)</span>
      <div style={{ fontFamily: 'monospace', fontSize: '.75rem', lineHeight: 1.9, color: '#c9d1d9' }}>
        {VERIFY.map((ex) => (
          <div key={ex.label}>
            <span style={{ color: '#fda4af', fontWeight: 700 }}>{ex.label}</span> —{' '}
            {Array.from({ length: 8 }, (_, n) => {
              const r = ex.check(n);
              return <span key={n} style={{ color: r === null ? '#8892a4' : r ? '#34d399' : '#f87171' }}>n={n}:{r === null ? 'IC' : r ? '✓' : '✗'} </span>;
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ════ static theory ════ */
const ROSE = (s: string) => s.replace(/class="formula-chip"/g, 'class="formula-chip" style="border-color:#f43f5e;color:#fda4af"');
const t1a = ROSE(String.raw`
<h5 style="color:#f43f5e;font-weight:700;margin:0 0 .75rem">Inhomogén egyenlet — próbafüggvény módszer</h5>
<div class="def-box"><div class="box-body">Az inhomogén megoldás \(x_n = y_n + p_n\): \(y_n\) homogén általános, \(p_n\) partikuláris. A <strong>próbafüggvény (határozatlan együtthatók) módszere</strong> az inhomogén tag alakját utánozza.</div></div>
<div class="thm-box"><div class="box-body"><strong>Fő eset:</strong> ha \(f_n = a\cdot b^n\) és \(b^n\) nem homogén megoldás: \[p_n = A\cdot b^n\] Behelyettesítve \(A\) meghatározható.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">1. Példa</div><div class="box-body">\(x_n - x_{n-1} - 6x_{n-2} = -7\cdot2^n,\;x_0=3,x_1=2\). Homogén gyökök \(r_1=3,r_2=-2\); próba \(p_n=A\cdot2^n\), \(A=7\). \[\boxed{x_n=-4\cdot3^n+7\cdot2^n}\]</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">5. Példa (elsőrendű)</div><div class="box-body">\(x_n - 3x_{n-1} = 7(-4)^n,\;x_0=9\). \(y_n=c\cdot3^n\), próba \(A(-4)^n\), \(A=4,c=5\). \[\boxed{x_n=5\cdot3^n+4(-4)^n}\]</div></div>`);

const t2a = ROSE(String.raw`
<h5 style="color:#f43f5e;font-weight:700;margin:0 0 .75rem">Rezonancia — bⁿ már homogén megoldás</h5>
<div class="warn-box"><strong>Probléma:</strong> ha \(b^n\) megoldása a homogén egyenletnek (\(b=r_i\)), a \(p_n=A\cdot b^n\) próba ellentmondáshoz vezet (bal oldal = 0).</div>
<div class="thm-box"><div class="box-body"><strong>Rezonancia-szabály:</strong> egyszerű gyöknél \(p_n = A\cdot n\cdot b^n\); kétszeres gyöknél \(p_n = A\cdot n^2\cdot b^n\).</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">2. Példa (rezonancia)</div><div class="box-body">\(x_n - x_{n-1} - 6x_{n-2} = 10(-2)^n\). \((-2)^n\) homogén (\(r_2=-2\)) → próba \(p_n=An(-2)^n\), \(A=4\). \[\boxed{x_n=2\cdot3^n-2(-2)^n+4n(-2)^n}\]</div></div>`);

const t3a = ROSE(String.raw`
<h5 style="color:#f43f5e;font-weight:700;margin:0 0 .75rem">Polinom inhomogén tag</h5>
<div class="thm-box"><div class="box-body"><strong>Polinom próba (k-adfokú \(f_n\)):</strong> ha 1 nem gyök: \(p_n=A_kn^k+\cdots+A_0\); ha 1 egyszerű gyök: \(p_n=n(A_kn^k+\cdots+A_0)\); ha kétszeres: \(n^2(\ldots)\).</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">3. Példa</div><div class="box-body">\(x_n - 4x_{n-2} = 6n-1,\;x_0=-3,x_1=1\). \(y_n=\alpha2^n+\beta(-2)^n\), próba \(p_n=An+B=-2n-5\). \[\boxed{x_n=3\cdot2^n-(-2)^n-2n-5}\]</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">4. Példa (rezonancia polinom — egyenesek)</div><div class="box-body">\(s_n=s_{n-1}+n,\;s_1=2\). \(r=1\) gyök, ezért \(p_n=An^2+Bn\), \(A=B=\tfrac12\). \[\boxed{s_n=\dfrac{n^2+n+2}{2}}\]</div></div>`);

const t4a = ROSE(String.raw`
<h5 style="color:#f43f5e;font-weight:700;margin:0 0 .75rem">Generátorfüggvény módszer</h5>
<div class="def-box"><div class="box-body"><strong>Generátorfüggvény:</strong> \[g(x) = \sum_{n=0}^{\infty} s_n x^n\] Egyértelműen meghatározza a sorozatot.</div></div>
<div class="thm-box"><div class="box-body"><strong>Alap azonosságok:</strong> \(\sum x^n = \frac{1}{1-x}\), \(\sum(n+1)x^n = \frac{1}{(1-x)^2}\), \(\sum\binom{m+n-1}{n}x^n = \frac{1}{(1-x)^m}\).</div></div>
<div class="thm-box"><div class="box-body"><strong>10. Tétel — parciális törtek:</strong> különböző \(x_i\) gyökökre \(\frac{p(x)}{\prod(x-x_i)} = \sum\frac{A_i}{x-x_i}\).</div></div>
<div class="ex-box"><div class="box-body"><strong>9. Példa:</strong> \(s_n=2s_{n-1},s_0=1\): \(g(x)=\frac{1}{1-2x}\Rightarrow s_n=2^n\). <strong>11. Példa (Hanoi):</strong> \(g(x)=\frac{x}{(1-x)(1-2x)}=\frac{-1}{1-x}+\frac{1}{1-2x}\Rightarrow s_n=2^n-1\). <strong>12. Példa (kétszeres gyök):</strong> \(g(x)=\frac{x}{(1+3x)^2}\Rightarrow s_n=n(-3)^{n-1}\).</div></div>`);

const t5a = ROSE(String.raw`
<h5 style="color:#f43f5e;font-weight:700;margin:0 0 .75rem">Szuperpozíció elve + Összefoglaló</h5>
<div class="thm-box"><div class="lbl lbl--thm mb-2">6. Tétel — Szuperpozíció</div><div class="box-body">Ha \(p_n\) megoldása \(\ldots=f_n\)-nek és \(q_n\) megoldása \(\ldots=g_n\)-nek, akkor \(p_n+q_n\) megoldása \(\ldots=f_n+g_n\)-nek. Összetett jobb oldalt darabonként oldunk meg.</div></div>
<div class="info-box" style="overflow-x:auto"><div class="lbl mb-2" style="color:#f43f5e">Próbafüggvény összefoglaló</div><table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">Inhomogén tag fₙ</th><th style="text-align:left">Feltétel</th><th style="text-align:left">Próba pₙ</th></tr></thead><tbody>
<tr><td>\(a\cdot b^n\)</td><td style="color:#8892a4">b nem gyök</td><td>\(A\cdot b^n\)</td></tr>
<tr><td>\(a\cdot b^n\)</td><td style="color:#8892a4">b egyszerű gyök</td><td>\(A\cdot n\cdot b^n\)</td></tr>
<tr><td>\(a\cdot b^n\)</td><td style="color:#8892a4">b kétszeres gyök</td><td>\(A\cdot n^2\cdot b^n\)</td></tr>
<tr><td>k-adfokú polinom</td><td style="color:#8892a4">1 nem gyök</td><td>\(A_kn^k+\cdots+A_0\)</td></tr>
<tr><td>k-adfokú polinom</td><td style="color:#8892a4">1 egyszerű gyök</td><td>\(n(A_kn^k+\cdots+A_0)\)</td></tr>
<tr><td>\(f_n^{(1)}+f_n^{(2)}\)</td><td style="color:#8892a4">szuperpozíció</td><td>\(p_n^{(1)}+p_n^{(2)}\)</td></tr>
</tbody></table></div>`);

const TABS: Tab[] = [
  { id: 'pr', label: 'Próbafüggvény', content: <div><RichTex html={t1a} /><SolGen /></div> },
  { id: 'rz', label: 'Rezonancia', content: <div><RichTex html={t2a} /><RezCanvas /></div> },
  { id: 'po', label: 'Polinom tag', content: <div><RichTex html={t3a} /><PolCheck /></div> },
  { id: 'ge', label: 'Generátorfüggvény', content: <div><RichTex html={t4a} /><GenTable /></div> },
  { id: 'ex', label: 'Szuperpozíció+', content: <div><RichTex html={t5a} /><VerifyAll /></div> },
];

export default function Ch13() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika V — fejezet</p>
      <h1 className="ila__title">Rekurziók 2.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
