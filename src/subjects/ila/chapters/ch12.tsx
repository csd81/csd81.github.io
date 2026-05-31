import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../components/kit';

const PHI = (1 + Math.sqrt(5)) / 2;

/** Line plot of a numeric sequence on a canvas. */
function plotSeq(ctx: CanvasRenderingContext2D, W: number, H: number, vals: number[], color = '#fbbf24') {
  ctx.clearRect(0, 0, W, H);
  const mx = Math.max(...vals.map(Math.abs), 1);
  const pad = 30, bw = (W - pad * 2) / vals.length;
  ctx.strokeStyle = '#21262d'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad, H / 2); ctx.lineTo(W - pad, H / 2); ctx.stroke();
  vals.forEach((v, i) => {
    const x = pad + i * bw + bw / 2;
    const y = Math.max(6, Math.min(H - 6, H / 2 - (v / mx) * (H / 2 - 12)));
    if (i > 0) {
      const px = pad + (i - 1) * bw + bw / 2;
      const py = Math.max(6, Math.min(H - 6, H / 2 - (vals[i - 1] / mx) * (H / 2 - 12)));
      ctx.strokeStyle = color + '88'; ctx.lineWidth = 1.3; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
    }
    ctx.fillStyle = v >= 0 ? color : '#f87171';
    ctx.beginPath(); ctx.arc(x, y, 4, 0, 2 * Math.PI); ctx.fill();
    ctx.fillStyle = '#8892a4'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
    ctx.fillText(String(i), x, H - 3);
  });
}

/* ════ Tab 1: sequence generator ════ */
const SEQ_TYPES: Record<string, { label: string; fn: (n: number) => number[] }> = {
  fib: { label: 'Fibonacci', fn: (n) => { const s = [1, 1]; for (let i = 2; i < n; i++) s[i] = s[i - 1] + s[i - 2]; return s.slice(0, n); } },
  pow2: { label: 'Részhalmazok (2ⁿ)', fn: (n) => Array.from({ length: n }, (_, i) => Math.pow(2, i)) },
  hanoi: { label: 'Hanoi', fn: (n) => { const s = [0, 1]; for (let i = 2; i < n; i++) s[i] = 2 * s[i - 1] + 1; return s.slice(0, n); } },
  lines: { label: 'Egyenesek', fn: (n) => { const s = [1, 2]; for (let i = 2; i < n; i++) s[i] = s[i - 1] + (i + 1); return s.slice(0, n); } },
  bin00: { label: 'Bináris (nincs 00)', fn: (n) => { const s = [1, 2]; for (let i = 2; i < n; i++) s[i] = s[i - 1] + s[i - 2]; return s.slice(0, n); } },
  bin001: { label: 'Bináris (nincs 001)', fn: (n) => { const s = [1, 2]; for (let i = 2; i < n; i++) s[i] = s[i - 1] + s[i - 2] + 1; return s.slice(0, n); } },
};
function SeqGen() {
  const [type, setType] = useState('fib');
  const [n, setN] = useState(12);
  const ref = useRef<HTMLCanvasElement>(null);
  const s = SEQ_TYPES[type].fn(Math.min(25, Math.max(2, n)));
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    plotSeq(ctx, cv.width, cv.height, s);
  }, [type, n]);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fbbf24' }}>Interaktív sorozatgenerátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <select className="ila-select" value={type} onChange={(e) => setType(e.target.value)}>
          {Object.entries(SEQ_TYPES).map(([k, t]) => <option key={k} value={k}>{t.label}</option>)}
        </select>
        <span>n = <input type="number" min={2} max={25} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
      </div>
      <div style={{ marginBottom: '.5rem' }}>
        {s.map((v, i) => <span key={i} className="seq-chip">s{i}={v}</span>)}
      </div>
      <canvas ref={ref} width={700} height={140} style={{ width: '100%', maxWidth: 700, borderRadius: '.3rem', background: '#0a0c10', display: 'block' }} />
    </div>
  );
}

/* ════ Tab 3: characteristic equation analyzer ════ */
function CharAnalyzer() {
  const [a, setA] = useState(1), [b, setB] = useState(3), [c, setC] = useState(2);
  const D = b * b - 4 * a * c;
  const active = D > 1e-9 ? 1 : Math.abs(D) <= 1e-9 ? 2 : 3;
  let result = '';
  if (active === 1) {
    const r1 = (-b + Math.sqrt(D)) / (2 * a), r2 = (-b - Math.sqrt(D)) / (2 * a);
    result = `1. eset (Δ>0): két különböző valós gyök — r₁ = ${r1.toFixed(5)}, r₂ = ${r2.toFixed(5)}. Általános megoldás: yₙ = α·(${r1.toFixed(4)})ⁿ + β·(${r2.toFixed(4)})ⁿ`;
  } else if (active === 2) {
    const r = -b / (2 * a);
    result = `2. eset (Δ=0): kétszeres valós gyök — r = ${r.toFixed(5)}. Általános megoldás: yₙ = (α + β·n)·(${r.toFixed(4)})ⁿ`;
  } else {
    const re = -b / (2 * a), im = Math.sqrt(-D) / (2 * a), rho = Math.sqrt(re * re + im * im), phi = Math.atan2(im, re);
    result = `3. eset (Δ<0): komplex gyökök — r = ${re.toFixed(4)} ± ${im.toFixed(4)}i, ρ = ${rho.toFixed(5)}, φ = ${phi.toFixed(5)} rad (${(phi * 180 / Math.PI).toFixed(2)}°). Általános megoldás: yₙ = ${rho.toFixed(4)}ⁿ·(α·cos(${phi.toFixed(4)}n) + β·sin(${phi.toFixed(4)}n))`;
  }
  const cards: { title: string; sub: string; chip: string; note: string }[] = [
    { title: '1. eset — Δ > 0', sub: 'Két különböző valós gyök', chip: String.raw`\(y_n = \alpha r_1^n + \beta r_2^n\)`, note: 'r₁ ≠ r₂ valós, lineárisan függetlenek.' },
    { title: '2. eset — Δ = 0', sub: 'Kétszeres valós gyök', chip: String.raw`\(y_n = (\alpha + \beta n)\,r^n\)`, note: 'Az nrⁿ is megoldás.' },
    { title: '3. eset — Δ < 0', sub: 'Komplex konjugált gyökök', chip: String.raw`\(y_n = \rho^n(\alpha\cos n\varphi + \beta\sin n\varphi)\)`, note: 'Valós és képzetes rész külön megoldás.' },
  ];
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.5rem' }}>
        {cards.map((cd, i) => (
          <div key={i} className={`case-card${active === i + 1 ? ' is-active' : ''}`}>
            <div className="lbl" style={{ color: '#fbbf24' }}>{cd.title}</div>
            <div style={{ fontWeight: 700, fontSize: '.82rem', margin: '.2rem 0' }}>{cd.sub}</div>
            <RichTex html={String.raw`<span class="formula-chip">${cd.chip}</span>`} />
            <div style={{ fontSize: '.74rem', color: '#8892a4', marginTop: '.4rem' }}>{cd.note}</div>
          </div>
        ))}
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#fbbf24' }}>Interaktív karakterisztikus egyenlet vizsgáló</span>
        <p style={{ fontSize: '.8rem', margin: '.3rem 0' }}>ayₙ + byₙ₋₁ + cyₙ₋₂ = 0 együtthatói:</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.3rem 0', fontSize: '.85rem' }}>
          <span>a = <input type="number" className="ila-num" value={a} onChange={(e) => setA(+e.target.value)} /></span>
          <span>b = <input type="number" className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
          <span>c = <input type="number" className="ila-num" value={c} onChange={(e) => setC(+e.target.value)} /></span>
        </div>
        <div style={{ fontSize: '.82rem', color: '#8892a4', marginBottom: '.4rem' }}>
          {a}r² + {b}r + {c} = 0, Δ = <strong style={{ color: '#fbbf24' }}>{D.toFixed(4)}</strong>
        </div>
        <div className="warn-box" style={{ borderLeftColor: '#fbbf24' }}>{result}</div>
      </div>
    </div>
  );
}

/* ════ Tab 4: example viewer ════ */
const EXAMPLES: Record<number, { label: string; task: string; steps: string; check: string; vals: () => number[] }> = {
  15: {
    label: '15. Példa', task: String.raw`\(y_n + 3y_{n-1} + 2y_{n-2} = 0,\quad y_0=4,\quad y_1=-2\)`,
    steps: String.raw`
<div class="step-row"><div class="step-eq"><strong>1.</strong> Karakterisztikus: \(r^2+3r+2=0\)</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> Gyökök: \(r_1=-2,\;r_2=-1\)</div><div class="step-why">\(\Delta=1>0\)</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> \(y_n=\alpha(-2)^n+\beta(-1)^n\)</div></div>
<div class="step-row"><div class="step-eq"><strong>4-6.</strong> \(\alpha+\beta=4,\;-2\alpha-\beta=-2 \Rightarrow \alpha=-2,\beta=6\)</div></div>
<div class="step-row"><div class="step-eq"><strong style="color:#fbbf24">Eredmény:</strong> \(\boxed{y_n=-2(-2)^n+6(-1)^n}\)</div></div>`,
    check: String.raw`Ellenőrzés: \(y_0=4\checkmark,\;y_1=-2\checkmark,\;y_2=-2\) és \(-3y_1-2y_0=-2\checkmark\)`,
    vals: () => Array.from({ length: 12 }, (_, n) => -2 * Math.pow(-2, n) + 6 * Math.pow(-1, n)),
  },
  16: {
    label: '16. Példa (Fibonacci)', task: String.raw`\(y_n=y_{n-1}+y_{n-2},\quad y_0=1,\quad y_1=1\)`,
    steps: String.raw`
<div class="step-row"><div class="step-eq"><strong>1.</strong> Karakterisztikus: \(r^2-r-1=0\)</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(r_{1,2}=\frac{1\pm\sqrt5}{2}\)</div><div class="step-why">arany arány!</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> \(\varphi\approx1.618,\;\hat\varphi\approx-0.618\)</div></div>
<div class="step-row"><div class="step-eq"><strong style="color:#fbbf24">Binet:</strong> \(F_n=\frac{1}{\sqrt5}\!\left(\varphi^{n+1}-\hat\varphi^{n+1}\right)\)</div></div>`,
    check: String.raw`\(|\hat\varphi|<1\Rightarrow\hat\varphi^n\to0\), így \(\frac{F_{n+1}}{F_n}\to\varphi\approx1.61803\).`,
    vals: () => { const v = [1, 1]; for (let i = 2; i < 16; i++) v.push(v[i - 1] + v[i - 2]); return v; },
  },
  17: {
    label: '17. Példa', task: String.raw`\(y_n - 6y_{n-1} + 9y_{n-2} = 0,\quad y_0=1,\quad y_1=0\)`,
    steps: String.raw`
<div class="step-row"><div class="step-eq"><strong>1.</strong> \(r^2-6r+9=0\)</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(\Delta=0\Rightarrow\) kétszeres \(r=3\)</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> \(y_n=(\alpha+\beta n)3^n\)</div></div>
<div class="step-row"><div class="step-eq"><strong>4-5.</strong> \(\alpha=1,\;\beta=-1\)</div></div>
<div class="step-row"><div class="step-eq"><strong style="color:#fbbf24">Eredmény:</strong> \(\boxed{y_n=(1-n)3^n}\)</div></div>`,
    check: String.raw`Ellenőrzés: \(y_0=1,\;y_1=0,\;y_2=-9\) és \(6y_1-9y_0=-9\checkmark\)`,
    vals: () => Array.from({ length: 9 }, (_, n) => (1 - n) * Math.pow(3, n)),
  },
  18: {
    label: '18. Példa', task: String.raw`\(y_n + 4y_{n-2} = 0,\quad y_0=-1,\quad y_1=0\)`,
    steps: String.raw`
<div class="step-row"><div class="step-eq"><strong>1.</strong> \(r^2+4=0\)</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(\Delta<0\Rightarrow r=\pm2i\)</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> \(\rho=2,\;\varphi=\pi/2\)</div></div>
<div class="step-row"><div class="step-eq"><strong>4-6.</strong> \(\alpha=-1,\;\beta=0\)</div></div>
<div class="step-row"><div class="step-eq"><strong style="color:#fbbf24">Eredmény:</strong> \(\boxed{y_n=-2^n\cos\frac{\pi n}{2}}\)</div></div>`,
    check: String.raw`Értékek: \(-1,0,4,0,-16,\ldots\) — rezgő, exponenciálisan növő.`,
    vals: () => Array.from({ length: 12 }, (_, n) => -Math.pow(2, n) * Math.cos(Math.PI * n / 2)),
  },
  19: {
    label: '19. Példa', task: String.raw`\(y_n + 5y_{n-1} = 0,\quad y_0=4\) (elsőrendű)`,
    steps: String.raw`
<div class="step-row"><div class="step-eq"><strong>1.</strong> \(r+5=0\Rightarrow r=-5\)</div></div>
<div class="step-row"><div class="step-eq"><strong>2.</strong> \(y_n=c(-5)^n\)</div></div>
<div class="step-row"><div class="step-eq"><strong>3.</strong> \(c=4\)</div></div>
<div class="step-row"><div class="step-eq"><strong style="color:#fbbf24">Eredmény:</strong> \(\boxed{y_n=4(-5)^n}\)</div></div>`,
    check: String.raw`Geometriai sorozat, \(|r|=5>1\) → exp. nő, előjel váltakozik.`,
    vals: () => Array.from({ length: 8 }, (_, n) => 4 * Math.pow(-5, n)),
  },
};
function ExampleViewer() {
  const [ex, setEx] = useState(15);
  const ref = useRef<HTMLCanvasElement>(null);
  const e = EXAMPLES[ex];
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    plotSeq(ctx, cv.width, cv.height, e.vals());
  }, [ex]);
  return (
    <div>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
        {Object.entries(EXAMPLES).map(([k, v]) => (
          <button key={k} className={`ex-btn${+k === ex ? ' is-active' : ''}`} onClick={() => setEx(+k)}>{v.label}</button>
        ))}
      </div>
      <RichTex key={`task${ex}`} className="ex-box" html={String.raw`<div class="box-body"><strong>Feladat:</strong> ${e.task}</div>`} />
      <RichTex key={`steps${ex}`} html={e.steps} />
      <RichTex key={`check${ex}`} className="info-box" style={{ fontSize: '.82rem', marginTop: '.5rem' }} html={e.check} />
      <canvas ref={ref} width={600} height={130} style={{ width: '100%', maxWidth: 600, background: '#0a0c10', borderRadius: '.3rem', marginTop: '.5rem' }} />
    </div>
  );
}

/* ════ Tab 5: golden ratio convergence ════ */
function RatioConvergence() {
  const [n, setN] = useState(15);
  const ref = useRef<HTMLCanvasElement>(null);
  const nn = Math.min(30, Math.max(5, n));
  const s = (() => { const a = [1, 1]; for (let i = 2; i < nn + 1; i++) a.push(a[i - 1] + a[i - 2]); return a; })();
  const ratios = s.slice(1).map((v, i) => v / s[i]);
  useEffect(() => {
    const cv = ref.current; if (!cv) return; const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height; ctx.clearRect(0, 0, W, H);
    const mn = 1, mx = 3, pad = 30, bw = (W - pad * 2) / ratios.length;
    const phiY = H - pad - ((PHI - mn) / (mx - mn)) * (H - pad * 2);
    ctx.strokeStyle = '#fbbf2444'; ctx.lineWidth = 1; ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(pad, phiY); ctx.lineTo(W - pad, phiY); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#fbbf24'; ctx.font = '8px monospace'; ctx.textAlign = 'left'; ctx.fillText('φ', 4, phiY + 3);
    ratios.forEach((r, i) => {
      const x = pad + i * bw + bw / 2;
      const y = Math.max(6, Math.min(H - 6, H - pad - ((r - mn) / (mx - mn)) * (H - pad * 2)));
      if (i > 0) {
        const px = pad + (i - 1) * bw + bw / 2;
        const py = Math.max(6, Math.min(H - 6, H - pad - ((ratios[i - 1] - mn) / (mx - mn)) * (H - pad * 2)));
        ctx.strokeStyle = '#fbbf2488'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y); ctx.stroke();
      }
      ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(x, y, 3, 0, 2 * Math.PI); ctx.fill();
    });
  }, [n]);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fbbf24' }}>Arany arány konvergencia: Fₙ₊₁/Fₙ → φ</span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.25rem', margin: '.4rem 0' }}>
        {ratios.slice(0, 15).map((r, i) => {
          const err = Math.abs(r - PHI);
          const col = err < 0.001 ? '#34d399' : err < 0.01 ? '#fbbf24' : '#f87171';
          return <span key={i} style={{ background: '#0d1117', border: `1px solid ${col}`, borderRadius: '.25rem', padding: '.1rem .5rem', fontSize: '.72rem', fontFamily: 'monospace', color: col }}>F{i + 2}/F{i + 1}={r.toFixed(5)}</span>;
        })}
      </div>
      <div style={{ fontSize: '.85rem', marginBottom: '.4rem' }}>Fibonacci tagok: <input type="number" min={5} max={30} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></div>
      <canvas ref={ref} width={650} height={110} style={{ width: '100%', maxWidth: 650, background: '#0a0c10', borderRadius: '.3rem', display: 'block' }} />
      <div style={{ fontSize: '.78rem', color: '#fbbf24', marginTop: '.4rem', fontFamily: 'monospace' }}>φ = {PHI.toFixed(10)}</div>
    </div>
  );
}

/* ════ static theory ════ */
const t1a = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">Rekurziók alkalmazásai — 6 alappélda</h5>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:.6rem">
<div class="def-box"><div class="lbl mb-1">1. Fibonacci</div><div class="box-body">\(s_{n+1}=s_n+s_{n-1}\), \(s_0=s_1=1\). Tagok: 1,1,2,3,5,8,13,…</div></div>
<div class="def-box"><div class="lbl mb-1">2. Részhalmazok</div><div class="box-body">\(s_n=2s_{n-1}\), \(s_0=1\) → \(s_n=2^n\).</div></div>
<div class="def-box"><div class="lbl mb-1">3. Hanoi tornyai</div><div class="box-body">\(s_n=2s_{n-1}+1\), \(s_1=1\) → \(s_n=2^n-1\).</div></div>
<div class="def-box"><div class="lbl mb-1">4. Egyenesek a síkban</div><div class="box-body">\(s_n=s_{n-1}+n\), \(s_1=2\) → \(s_n=\frac{n^2+n+2}{2}\).</div></div>
<div class="def-box"><div class="lbl mb-1">5. Bináris (nincs 00)</div><div class="box-body">\(s_n=s_{n-1}+s_{n-2}\), \(s_0=1,s_1=2\). Fibonacci-típusú!</div></div>
<div class="def-box"><div class="lbl mb-1">6. Bináris (nincs 001)</div><div class="box-body">\(s_n=s_{n-1}+s_{n-2}+1\), \(s_0=1,s_1=2\). Tagok: 1,2,4,7,12,20,…</div></div>
</div>`;

const t2a = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">Lineáris differenciaegyenletek — elmélet</h5>
<div class="def-box"><div class="lbl mb-2">k-adrendű konstans együtthatós lineáris differenciaegyenlet</div><div class="box-body">\[a_k x_n + a_{k-1}x_{n-1} + \cdots + a_0 x_{n-k} = f_n\] \(a_k\ne0\). \(f_n\not\equiv0\): inhomogén; \(f_n\equiv0\): homogén.</div></div>
<div class="def-box"><div class="lbl mb-2">Kezdeti érték feladat</div><div class="box-body">Kezdeti feltétel \(x_0=v_0,\ldots,x_{k-1}=v_{k-1}\). Egyenlet + feltétel = kezdeti érték feladat; mindig egyértelmű megoldás.</div></div>
<div class="thm-box"><div class="box-body"><strong>7-11. Tétel:</strong> homogén megoldások lineáris kombinációja is megoldás; a megoldások halmaza <strong>k-dimenziós lineáris tér</strong>.</div></div>
<div class="thm-box" style="border-left-color:#fbbf24"><div class="lbl lbl--thm mb-2">14. Tétel — Általános megoldás (★)</div><div class="box-body">\[\boxed{x_n = y_n + p_n}\] \(y_n\) = homogén általános megoldás, \(p_n\) = inhomogén partikuláris megoldás.</div></div>
<div class="info-box"><div class="box-body"><strong style="color:#fbbf24">Stratégia:</strong> ① homogén megoldás \(y_n\); ② partikuláris \(p_n\); ③ \(x_n=y_n+p_n\); ④ kezdeti feltételekből a paraméterek.</div></div>`;

const t3a = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">Karakterisztikus egyenlet — 3 eset</h5>
<div class="info-box"><div class="box-body">A homogén megoldást \(y_n=r^n\) alakban keressük. \(ay_n+by_{n-1}+cy_{n-2}=0\)-ba helyettesítve: \[ar^2 + br + c = 0\] A megoldás típusa \(\Delta = b^2-4ac\) előjelétől függ.</div></div>
<div class="thm-box"><div class="box-body"><strong>k-adrendű (különböző valós gyökök):</strong> \(y_n = c_1 r_1^n + \cdots + c_k r_k^n\). <strong>Elsőrendű</strong> \(ay_n+by_{n-1}=0\): \(r=-b/a\), \(y_n=c\cdot r^n\) (geometriai sorozat).</div></div>`;

const t4a = String.raw`<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .5rem">Megoldott kezdeti érték feladatok</h5>`;

const t5a = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">Előadás+ — mélyebb összefüggések</h5>
<div class="def-box"><div class="lbl mb-2">Arany arány és Fibonacci</div><div class="box-body">A \(r^2-r-1=0\) pozitív gyöke \[\varphi=\frac{1+\sqrt5}{2}\approx1.618\] \(\varphi^2=\varphi+1\). Másik gyök \(\hat\varphi\approx-0.618\), \(|\hat\varphi|<1\Rightarrow\hat\varphi^n\to0\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Hanoi:</strong> \(s_n=2s_{n-1}+1\), partikuláris \(A=-1\), homogén \(c\cdot2^n\) → \(s_n=2^n-1\). <strong>Egyenesek:</strong> teleszkópos összeg \(s_n=2+\frac{n(n+1)}{2}-1=\frac{n^2+n+2}{2}\).</div></div>
<div class="warn-box"><strong>Csapdák:</strong> dupla gyöknél \(\alpha r^n+\beta n r^n\) (nem \(\beta r^n\)); komplex gyöknél \(\rho=|r|\), \(\varphi\) a szög; partikuláris megoldás formája az \(f_n\) típusától függ; kezdeti feltételeket az általános (nem a homogén) megoldásra alkalmazzuk.</div>`;

const TABS: Tab[] = [
  { id: 're', label: 'Rekurzió példák', content: <div><RichTex html={t1a} /><SeqGen /></div> },
  { id: 'li', label: 'Lineáris diff.egyenletek', content: <RichTex html={t2a} /> },
  { id: 'ka', label: 'Karakterisztikus egyenlet', content: <div><RichTex html={t3a} /><CharAnalyzer /></div> },
  { id: 'pe', label: 'Megoldott példák', content: <div><RichTex html={t4a} /><ExampleViewer /></div> },
  { id: 'ex', label: 'Előadás+', content: <div><RichTex html={t5a} /><RatioConvergence /></div> },
];

export default function Ch12() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika IV — fejezet</p>
      <h1 className="ila__title">Rekurziók 1.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
