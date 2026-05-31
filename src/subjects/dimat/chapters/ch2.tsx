import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

const ACC = '#10b981';

/* ════ Tab 1: Alapelvek ════ */
const t1theory = String.raw`
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.75rem">
<div class="def-box">
  <span class="lbl" style="color:#10b981">Összeadási elv</span>
  <p style="font-size:.83rem;margin:.4rem 0">Ha egy esemény \(A_1, A_2, \ldots, A_k\) kizáró eseteken belül összesen \(n_1, n_2, \ldots, n_k\) féleképpen valósulhat meg, akkor az összes lehetőség száma \(n_1+n_2+\cdots+n_k\).</p>
  <div class="ex-box"><strong>Példa:</strong> Hányféle 2-jegyű szám osztható 3-mal <em>vagy</em> 5-tel?<br>3-mal osztható: 30 db, 5-tel osztható: 18 db, mindkettővel: 6 db → \(30+18-6=42\).</div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#10b981">Szorzási elv</span>
  <p style="font-size:.83rem;margin:.4rem 0">Ha egy összetett eseményt \(k\) egymástól független lépésben lehet végrehajtani, és az \(i\)-edik lépés \(n_i\) féleképpen lehetséges, akkor az összes lehetőség \(n_1 \cdot n_2 \cdots n_k\).</p>
  <div class="ex-box"><strong>Példa:</strong> Hányféle 4-jegyű PIN-kód létezik? Minden pozícióban 0–9, tehát \(10^4 = 10\,000\) lehetőség.</div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#10b981">Bijekció elv</span>
  <p style="font-size:.83rem;margin:.4rem 0">Ha \(A\) és \(B\) halmazok között bijekció létezik, akkor \(|A|=|B|\). Így nehezebb halmazt könnyebbre képezhetünk.</p>
  <div class="ex-box"><strong>Példa:</strong> Hányféle \(n\)-elemű részhalmaza van egy \(n\)-elemű halmaznak? Minden részhalmaz ↔ bináris sorozat, tehát \(2^n\) db.</div>
</div>
</div>`;

function MultCalc() {
  const [steps, setSteps] = useState(4);
  const [vals, setVals] = useState<number[]>([10, 10, 10, 10]);

  const updateVal = (i: number, v: number) => {
    const next = [...vals];
    next[i] = v;
    setVals(next);
  };

  const changeSteps = (k: number) => {
    setSteps(k);
    setVals(prev => {
      const n = [...prev];
      while (n.length < k) n.push(10);
      return n.slice(0, k);
    });
  };

  const result = vals.slice(0, steps).reduce((a, b) => a * b, 1);

  return (
    <div className="info-box" style={{ marginTop: '.75rem' }}>
      <span className="lbl" style={{ color: ACC }}>Interaktív — szorzási elv számológép</span>
      <p style={{ fontSize: '.83rem', color: '#94a3b8', margin: '.4rem 0' }}>Adj meg legfeljebb 6 lépést (hány lehetőség van az egyes lépéseknél), és a szorzási elv szerint kiszámítja az összes lehetőséget.</p>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap', marginBottom: '.5rem', fontSize: '.83rem', color: '#94a3b8' }}>
        <span>Lépések száma:</span>
        <select className="ila-select" value={steps} onChange={e => changeSteps(+e.target.value)}>
          {[2, 3, 4, 5, 6].map(k => <option key={k} value={k}>{k}</option>)}
        </select>
      </div>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '.5rem' }}>
        {Array.from({ length: steps }, (_, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '.25rem' }}>
            <input type="number" className="ila-num" min={1} max={10000} value={vals[i] ?? 10}
              onChange={e => updateVal(i, Math.max(1, +e.target.value))} style={{ width: '60px' }} />
            {i < steps - 1 && <span style={{ color: '#94a3b8', fontSize: '.9rem' }}>×</span>}
          </span>
        ))}
      </div>
      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>
        {vals.slice(0, steps).join(' × ')} = {result.toLocaleString('hu-HU')}
      </div>
    </div>
  );
}

/* ════ Tab 2: Teljes indukció ════ */
type IndKey = 'sum1' | 'sum2' | 'pow';
const IND_FORMULAS: Record<IndKey, { stmt: string; base: string; step: string; lhs: (n: number) => number; rhs: (n: number) => number }> = {
  sum1: {
    stmt: String.raw`\( \displaystyle\sum_{i=1}^{n} i = \frac{n(n+1)}{2} \)`,
    base: 'n=1: bal = 1, jobb = 1·2/2 = 1. ✓',
    step: String.raw`Tegyük fel, hogy igaz n-re. Ekkor \(\sum_{i=1}^{n+1}i = \frac{n(n+1)}{2}+(n+1) = \frac{(n+1)(n+2)}{2}\). ✓`,
    lhs: n => n * (n + 1) / 2, rhs: n => n * (n + 1) / 2,
  },
  sum2: {
    stmt: String.raw`\( \displaystyle\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6} \)`,
    base: 'n=1: bal = 1, jobb = 1·2·3/6 = 1. ✓',
    step: 'Tegyük fel, hogy igaz n-re. Hozzáadjuk (n+1)²-t mindkét oldalhoz, és algebrai átalakítással igazoljuk az n+1-re vonatkozó alakot.',
    lhs: n => { let s = 0; for (let i = 1; i <= n; i++) s += i * i; return s; },
    rhs: n => n * (n + 1) * (2 * n + 1) / 6,
  },
  pow: {
    stmt: String.raw`\( 2^n > n \) minden \( n \geq 1 \)-re.`,
    base: 'n=1: bal = 2, jobb = 1. 2 > 1 ✓',
    step: 'Tegyük fel 2ⁿ > n. Ekkor 2ⁿ⁺¹ = 2·2ⁿ > 2n ≥ n+1 (ha n≥1). ✓',
    lhs: n => Math.pow(2, n), rhs: n => n,
  },
};

function IndTab() {
  const [key, setKey] = useState<IndKey>('sum1');
  const [nmax, setNmax] = useState(10);
  const f = IND_FORMULAS[key];
  const rows = Array.from({ length: Math.min(20, Math.max(1, nmax)) }, (_, i) => {
    const n = i + 1;
    const l = f.lhs(n), r = f.rhs(n), ok = Math.abs(l - r) < 0.001;
    return { n, l, r, ok };
  });
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <RichTex className="def-box" html={String.raw`<strong>A teljes indukció elve:</strong><br>Legyen \(P(n)\) egy egész \(n\)-re vonatkozó állítás. Ha<br>
<strong>(B)</strong> \(P(n_0)\) igaz (alaplépés), és<br>
<strong>(I)</strong> \(P(n) \Rightarrow P(n+1)\) minden \(n \geq n_0\)-ra,<br>
akkor \(P(n)\) igaz minden \(n \geq n_0\)-ra.`} />
        <div className="thm-box" style={{ marginTop: '.5rem' }}>
          <strong>Bizonyítandó képlet kiválasztása:</strong>
          <div style={{ marginTop: '.35rem' }}>
            <select className="ila-select" value={key} onChange={e => setKey(e.target.value as IndKey)}>
              <option value="sum1">1+2+…+n = n(n+1)/2</option>
              <option value="sum2">1²+2²+…+n² = n(n+1)(2n+1)/6</option>
              <option value="pow">2ⁿ &gt; n (n ≥ 1)</option>
            </select>
          </div>
        </div>
        <RichTex key={`stmt-${key}`} className="thm-box" style={{ marginTop: '.5rem', fontSize: '.83rem' }} html={f.stmt} />
        <div style={{ fontSize: '.8rem', color: '#64748b', margin: '.5rem 0 .3rem' }}>Alaplépés ellenőrzés (n=1):</div>
        <RichTex key={`base-${key}`} className="ex-box" style={{ fontSize: '.83rem' }} html={f.base} />
        <div style={{ fontSize: '.8rem', color: '#64748b', margin: '.5rem 0 .3rem' }}>Indukciós lépés vázlata:</div>
        <RichTex key={`step-${key}`} className="def-box" style={{ fontSize: '.83rem' }} html={f.step} />
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Numerikus ellenőrzés</span>
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', margin: '.5rem 0', fontSize: '.83rem', color: '#94a3b8' }}>
            n max értéke: <input type="number" className="ila-num" value={nmax} min={1} max={20} style={{ width: 60 }} onChange={e => setNmax(+e.target.value)} />
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
              <thead>
                <tr>
                  {['n', 'Bal oldal', 'Jobb oldal', 'Egyenlő?'].map(h => (
                    <th key={h} style={{ background: '#1a1f2e', color: '#64748b', padding: '.4rem .5rem', textAlign: 'left', borderBottom: '1px solid #1e2533', fontSize: '.73rem' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map(r => (
                  <tr key={r.n}>
                    <td style={{ padding: '.35rem .5rem', borderBottom: '1px solid #161b28' }}>{r.n}</td>
                    <td style={{ padding: '.35rem .5rem', borderBottom: '1px solid #161b28' }}>{r.l.toLocaleString('hu-HU')}</td>
                    <td style={{ padding: '.35rem .5rem', borderBottom: '1px solid #161b28' }}>{r.r.toLocaleString('hu-HU')}</td>
                    <td style={{ padding: '.35rem .5rem', borderBottom: '1px solid #161b28', color: r.ok ? '#34d399' : '#ef4444' }}>{r.ok ? '✓' : '✗'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 3: P/V/C számológép ════ */
function factorial(n: number): bigint {
  if (n < 0) return BigInt(0);
  let r = BigInt(1);
  for (let i = 2; i <= n; i++) r *= BigInt(i);
  return r;
}

function PvcTab() {
  const [n, setN] = useState(5);
  const [k, setK] = useState(3);
  const [repStr, setRepStr] = useState('2,2,1');

  const warn = k > n ? 'Figyelem: k > n — ismétléses esetekben mindig érvényes, ismétlés nélküliekben nem.' : '';
  const repParts = repStr.trim() ? repStr.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x) && x > 0) : [];
  const sumRep = repParts.reduce((a, b) => a + b, 0);
  const mulFact = repParts.map(x => factorial(x)).reduce((a, b) => a * b, BigInt(1));
  const Multi = factorial(sumRep) / mulFact;
  const Pn = factorial(n);
  const Vnk = k <= n ? factorial(n) / factorial(n - k) : BigInt(0);
  const Vism = BigInt(Math.round(Math.pow(n, k)));
  const Cnk = k <= n ? factorial(n) / (factorial(k) * factorial(n - k)) : BigInt(0);
  const nk = n + k - 1;
  const Cism = k >= 0 ? factorial(nk) / (factorial(k) * factorial(nk - k)) : BigInt(0);

  const row = (label: string, mathLabel: string, val: bigint) => (
    <div key={label}>
      <div style={{ fontSize: '.82rem', color: '#64748b', marginBottom: '.2rem', fontFamily: 'monospace' }}>{label}</div>
      <div className="ex-box" style={{ marginBottom: '.5rem' }}>
        <RichTex html={mathLabel} />
        <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace', marginLeft: '.5rem' }}>{val.toLocaleString()}</span>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ minWidth: '220px' }}>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>Paraméterek</span>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.83rem', color: '#94a3b8' }}>
            <label>n = <input type="number" className="ila-num" value={n} min={1} max={20} style={{ width: 60 }} onChange={e => setN(Math.max(1, Math.min(20, +e.target.value)))} /></label>
            <label>k = <input type="number" className="ila-num" value={k} min={0} max={20} style={{ width: 60 }} onChange={e => setK(Math.max(0, Math.min(20, +e.target.value)))} /></label>
          </div>
          <div style={{ fontSize: '.8rem', color: '#64748b', marginBottom: '.3rem' }}>Ismétlések (multinomiálishoz), pl. "2,2,1":</div>
          <input className="ila-text" value={repStr} placeholder="pl. 2,2,1" style={{ width: '100%' }} onChange={e => setRepStr(e.target.value)} />
          {warn && <div style={{ fontSize: '.75rem', color: '#f59e0b', marginTop: '.3rem' }}>{warn}</div>}
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Gyors példák</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem', marginTop: '.4rem' }}>
            <button className="op-btn" style={{ fontSize: '.78rem' }} onClick={() => { setN(52); setK(5); setRepStr(''); }}>52 lapból 5 lap (C(52,5))</button>
            <button className="op-btn" style={{ fontSize: '.78rem' }} onClick={() => { setN(10); setK(3); setRepStr(''); }}>3-jegyű PIN (10³)</button>
            <button className="op-btn" style={{ fontSize: '.78rem' }} onClick={() => { setN(5); setK(5); setRepStr('3,1,1'); }}>ALMA betűi (ism.)</button>
          </div>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Eredmények</span>
          <div style={{ marginTop: '.5rem' }}>
            {row('P(n) = n!', String.raw`\(P(${n}) = ${n}! = \)`, Pn)}
            {row(`Multinomiális (${repStr || 'k₁,k₂,…'}): n!/(k₁!k₂!…)`,
              String.raw`\(P(${sumRep};\;${repParts.join(',')}) = ${sumRep}! / (${repParts.map(x => x + '!').join('\\cdot')}) = \)`, Multi)}
            {row('V(n,k) = n!/(n-k)! — ismétlés nélküli variáció',
              String.raw`\(V(${n},${k}) = ${n}!/(${n}-${k})! = \)`, Vnk)}
            {row('Vˢ(n,k) = nᵏ — ismétléses variáció',
              String.raw`\(V^{ism}(${n},${k}) = ${n}^{${k}} = \)`, Vism)}
            {row('C(n,k) = n!/(k!(n-k)!) — ismétlés nélküli kombináció',
              String.raw`\(\binom{${n}}{${k}} = \)`, Cnk)}
            {row('Cˢ(n,k) = C(n+k-1,k) — ismétléses kombináció',
              String.raw`\(C^{ism}(${n},${k}) = \binom{${n + k - 1}}{${k}} = \)`, Cism)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 4: Stirling ════ */
function stirling(n: number): number {
  return Math.sqrt(2 * Math.PI * n) * Math.pow(n / Math.E, n);
}

function StirlingTab() {
  const [sn, setSn] = useState(10);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const exact = sn <= 20 ? Number(factorial(sn)) : null;
  const approx = stirling(sn);
  const err = exact != null ? Math.abs(exact - approx) / exact * 100 : null;

  const tableRows = [5, 10, 20, 50, 100].map(n => {
    const app = stirling(n);
    const ex = n <= 20 ? Number(factorial(n)) : null;
    const e = ex != null ? Math.abs(ex - app) / ex * 100 : null;
    return { n, app, ex, e };
  });

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0e1117'; ctx.fillRect(0, 0, W, H);
    const pts: { n: number; v: number; s: number }[] = [];
    for (let n = 1; n <= 20; n++) {
      const v = Math.log10(Math.max(1, Number(factorial(n))));
      const s = Math.log10(Math.max(1, stirling(n)));
      pts.push({ n, v, s });
    }
    const maxV = pts[pts.length - 1].v;
    const pad = { l: 50, r: 20, t: 20, b: 30 };
    const gW = W - pad.l - pad.r, gH = H - pad.t - pad.b;
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, pad.t + gH); ctx.lineTo(pad.l + gW, pad.t + gH); ctx.stroke();
    ctx.fillStyle = '#64748b'; ctx.font = '11px monospace'; ctx.textAlign = 'left';
    ctx.fillText('log₁₀(n!)', 4, pad.t + 10);
    ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2.5;
    ctx.beginPath();
    pts.forEach((p, i) => {
      const x = pad.l + (p.n - 1) / 19 * gW;
      const y = pad.t + gH - (p.v / maxV) * gH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke();
    ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 1.8; ctx.setLineDash([5, 4]);
    ctx.beginPath();
    pts.forEach((p, i) => {
      const x = pad.l + (p.n - 1) / 19 * gW;
      const y = pad.t + gH - (p.s / maxV) * gH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#64748b'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
    [1, 5, 10, 15, 20].forEach(n => {
      const x = pad.l + (n - 1) / 19 * gW;
      ctx.fillText(String(n), x, pad.t + gH + 14);
    });
    ctx.fillStyle = '#34d399'; ctx.font = '11px monospace'; ctx.textAlign = 'left';
    ctx.fillText('── Pontos n!', pad.l + 10, pad.t + 16);
    ctx.fillStyle = '#f59e0b';
    ctx.fillText('--- Stirling', pad.l + 110, pad.t + 16);
  }, [sn]);

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ minWidth: '240px' }}>
        <RichTex className="thm-box" html={String.raw`<strong>Stirling-formula:</strong>
\[n! \approx \left(\frac{n}{e}\right)^n \sqrt{2\pi n}\]
A relatív hiba \(\to 0\) ahogy \(n\to\infty\). Nagyon hasznos aszimptotikus közelítés.`} />
        <div className="info-box" style={{ marginTop: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>Egyes érték</span>
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', margin: '.5rem 0', fontSize: '.83rem', color: '#94a3b8' }}>
            n = <input type="number" className="ila-num" value={sn} min={1} max={100} style={{ width: 70 }} onChange={e => setSn(Math.max(1, Math.min(100, +e.target.value)))} />
          </div>
          <div className="ex-box" style={{ fontSize: '.83rem' }}>
            <strong>n = {sn}</strong><br />
            Stirling ≈ <span style={{ fontSize: '1rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>{approx.toExponential(4)}</span><br />
            {exact != null ? <>Pontos: <span style={{ fontSize: '1rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>{exact.toLocaleString('hu-HU')}</span><br />Relatív hiba: <span style={{ color: '#f59e0b' }}>{err!.toFixed(4)}%</span></> : '(Pontos érték csak n≤20-ra)'}
          </div>
        </div>
        <div className="info-box" style={{ marginTop: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>Összehasonlító táblázat</span>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem', marginTop: '.4rem' }}>
            <thead>
              <tr>
                {['n', 'Pontos n!', 'Stirling', 'Hiba %'].map(h => (
                  <th key={h} style={{ background: '#1a1f2e', color: '#64748b', padding: '.4rem .5rem', textAlign: 'left', borderBottom: '1px solid #1e2533', fontSize: '.73rem' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(r => (
                <tr key={r.n}>
                  <td style={{ padding: '.3rem .5rem', borderBottom: '1px solid #161b28' }}>{r.n}</td>
                  <td style={{ padding: '.3rem .5rem', borderBottom: '1px solid #161b28' }}>{r.ex != null ? r.ex.toExponential(4) : '—'}</td>
                  <td style={{ padding: '.3rem .5rem', borderBottom: '1px solid #161b28' }}>{r.app.toExponential(4)}</td>
                  <td style={{ padding: '.3rem .5rem', borderBottom: '1px solid #161b28', color: '#f59e0b' }}>{r.e != null ? r.e.toFixed(4) + '%' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '280px' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Log-skálás diagram (n! vs Stirling)</span>
          <canvas ref={canvasRef} width={520} height={300} style={{ width: '100%', maxWidth: 520, display: 'block', marginTop: '.5rem', borderRadius: '.3rem' }} />
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 5: Feladatok ════ */
const PROBLEMS: { q: string; sol: string }[] = [
  { q: 'Hány 4-jegyű természetes szám létezik?', sol: String.raw`A 4-jegyű számok: 1000–9999. Az ezres helyiérték 9 féle lehet (1–9), a többi 10-10 féle. Tehát \(9 \cdot 10 \cdot 10 \cdot 10 = 9000\) db.` },
  { q: 'Hányféle sorrendbe lehet állítani 6 embert?', sol: String.raw`Ez 6 elem permutációja: \(P(6) = 6! = 720\) féleképpen.` },
  { q: '10 ember közül hányféleképpen választható 3 tagú bizottság?', sol: String.raw`A sorrend nem számít, tehát kombinációt számítunk: \(\binom{10}{3} = \frac{10!}{3!\,7!} = \frac{10\cdot9\cdot8}{6} = 120\) féleképpen.` },
  { q: 'A 26 betűs ABC-ből hányféle 3 betűs szó képezhető ismétléssel?', sol: String.raw`Ismétléses variáció: \(V^{ism}(26,3) = 26^3 = 17\,576\) féleképpen.` },
  { q: 'Hányféleképpen rendezhetők sorba a MATEMATIKA szó betűi?', sol: String.raw`A szó 10 betűből áll: M(2×), A(3×), T(2×), E, I, K. Multinomiális permutáció: \(\frac{10!}{3!\,2!\,2!\,1!\,1!\,1!} = \frac{3\,628\,800}{6\cdot2\cdot2} = 151\,200\) féleképpen.` },
];

function FeladatTab() {
  const [open, setOpen] = useState<boolean[]>(PROBLEMS.map(() => false));
  const toggle = (i: number) => setOpen(prev => { const n = [...prev]; n[i] = !n[i]; return n; });
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Klasszikus feladatok</span>
      <p style={{ fontSize: '.83rem', color: '#94a3b8', margin: '.4rem 0 .75rem' }}>Kattints a "Megoldás" gombra a részletes megoldás megtekintéséhez.</p>
      {PROBLEMS.map((p, i) => (
        <div key={i} style={{ background: '#0e1117', border: '1px solid #1e2533', borderRadius: 8, padding: '1rem', marginBottom: '.6rem' }}>
          <strong style={{ fontSize: '.88rem' }}>{i + 1}.</strong>{' '}
          <span style={{ fontSize: '.85rem' }}>{p.q}</span>
          <br />
          <button className="op-btn" style={{ marginTop: '.5rem', fontSize: '.78rem' }} onClick={() => toggle(i)}>
            {open[i] ? 'Megoldás elrejtése' : 'Megoldás mutatása'}
          </button>
          {open[i] && (
            <div style={{ marginTop: '.7rem', paddingTop: '.7rem', borderTop: '1px solid #1e2533' }}>
              <RichTex html={p.sol} style={{ color: '#6ee7b7', fontSize: '.83rem' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ════ TABS ════ */
const TABS: Tab[] = [
  { id: 'alap', label: 'Alapelvek', content: <div><RichTex html={t1theory} /><MultCalc /></div> },
  { id: 'ind', label: 'Teljes indukció', content: <IndTab /> },
  { id: 'pvc', label: 'P / V / C számológép', content: <PvcTab /> },
  { id: 'stir', label: 'Stirling-formula', content: <StirlingTab /> },
  { id: 'fel', label: 'Feladatok', content: <FeladatTab /> },
];

export default function DimatCh2() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — I.2. fejezet</p>
      <h1 className="ila__title">Elemi leszámlálások</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
