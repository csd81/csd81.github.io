import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../components/kit';

/* ════ Tab 1: induction stepper ════ */
interface Step { phase: string; eq: string; why: string; }
const IND_STEPS: Record<string, Step[]> = {
  sum: [
    { phase: 'Alaplépés (n=1)', eq: '1 = \\dfrac{1\\cdot2}{2} = 1', why: 'Igaz ✓' },
    { phase: 'Ind. hipotézis', eq: '1+2+\\cdots+k = \\dfrac{k(k+1)}{2}', why: 'Feltételezzük.' },
    { phase: 'Ind. lépés — bal oldal', eq: '1+2+\\cdots+k+(k+1)', why: 'Az (n=k+1) eset bal oldala.' },
    { phase: 'Ind. hipotézis alkalmazása', eq: '= \\dfrac{k(k+1)}{2} + (k+1)', why: 'Behelyettesítés.' },
    { phase: 'Algebrai lépés', eq: '= \\dfrac{k(k+1)+2(k+1)}{2}', why: 'Közös nevező.' },
    { phase: 'Eredmény', eq: '= \\dfrac{(k+1)(k+2)}{2}', why: 'Ez a (k+1)-re vonatkozó állítás. □' },
  ],
  pow: [
    { phase: 'Alaplépés (n=5)', eq: '2^5=32>25=5^2', why: 'Igaz ✓' },
    { phase: 'Ind. hipotézis', eq: '2^k > k^2', why: 'Feltételezzük k≥5-re.' },
    { phase: 'Ind. lépés — bal oldal', eq: '2^{k+1}=2\\cdot2^k > 2k^2', why: 'Ind. hip. kétszeresezve.' },
    { phase: 'Kell még mutatni', eq: '2k^2 \\ge (k+1)^2 = k^2+2k+1', why: 'Elegendő ezt belátni.' },
    { phase: 'Átrendezve', eq: 'k^2-2k-1 \\ge 0', why: '' },
    { phase: 'Eredmény', eq: 'k(k-2) \\ge 1', why: 'Teljesül k≥3-ra, tehát k≥5-re is. □' },
  ],
  div: [
    { phase: 'Alaplépés (n=0)', eq: 'a_0 = 4^0+0-1=0', why: '9∣0 ✓' },
    { phase: 'Ind. hipotézis', eq: '9 \\mid a_k = 4^k+15k-1', why: 'Feltételezzük.' },
    { phase: 'Kiírjuk a_{k+1}-et', eq: 'a_{k+1} = 4^{k+1}+15(k+1)-1', why: 'Definíció.' },
    { phase: 'Kifejtés', eq: '= 4\\cdot4^k+15k+14', why: '' },
    { phase: 'Ind. hipotézis megjelenik', eq: '= 4(4^k+15k-1)-45k+18', why: '= 4a_k − 45k + 18' },
    { phase: 'Ind. hip. behelyettesítve', eq: '= 4\\cdot9\\ell - 9(5k-2)', why: 'Ind. hip.: a_k=9ℓ' },
    { phase: 'Eredmény', eq: '= 9(4\\ell-5k+2)', why: '9 ∣ a_{k+1}. □' },
  ],
};
function InductionStepper() {
  const [key, setKey] = useState('sum');
  const steps = IND_STEPS[key];
  const [revealed, setRevealed] = useState(steps.length);
  const timer = useRef<number | null>(null);
  const stop = () => { if (timer.current) { clearInterval(timer.current); timer.current = null; } };
  useEffect(() => () => stop(), []);
  const onSelect = (k: string) => { stop(); setKey(k); setRevealed(IND_STEPS[k].length); };
  const animate = () => {
    stop();
    setRevealed(0);
    let idx = 0;
    const tick = () => {
      idx += 1;
      setRevealed(idx);
      if (idx >= steps.length) stop();
    };
    tick();
    timer.current = window.setInterval(tick, 1100);
  };
  const reset = () => { stop(); setRevealed(steps.length); };
  return (
    <div className="info-box">
      <span className="lbl">Interaktív: lépések megjelenítése</span>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap', margin: '.4rem 0 .75rem' }}>
        <span style={{ fontSize: '.85rem' }}>Állítás:</span>
        <select className="ila-select" value={key} onChange={(e) => onSelect(e.target.value)}>
          <option value="sum">1+2+⋯+n = n(n+1)/2</option>
          <option value="pow">2ⁿ &gt; n² (n ≥ 5)</option>
          <option value="div">9 | (4ⁿ + 15n − 1)</option>
        </select>
        <button className="op-btn" onClick={animate}>▶ Animálás</button>
        <button className="op-btn" onClick={reset}>↺ Reset</button>
      </div>
      {steps.map((s, i) => (
        <div key={i} className={`ind-step${i < revealed ? ' is-active' : ''}`} style={{ opacity: i < revealed ? 1 : 0.25 }}>
          <span className="badge-phase">{s.phase}</span>{' '}
          <RichTex html={String.raw`\(${s.eq}\)`} style={{ display: 'inline' }} />
          {s.why && <span style={{ fontSize: '.78rem', color: '#8892a4', marginLeft: '.5rem' }}>— {s.why}</span>}
        </div>
      ))}
    </div>
  );
}

/* ════ Tab 2: sum checker ════ */
function SumChecker() {
  const [n, setN] = useState(5);
  const lhs = n * (n + 1) / 2;
  const rhs = Array.from({ length: n }, (_, i) => i + 1).reduce((a, b) => a + b, 0);
  return (
    <div style={{ marginTop: '.5rem' }}>
      <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.3rem' }}>Ellenőrzés: adj meg egy n értéket</div>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <input type="range" min={1} max={20} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 120 }} />
        <span style={{ fontSize: '.85rem' }}>
          n = <strong style={{ color: '#67e8f9' }}>{n}</strong> | 1+…+{n} = <strong style={{ color: '#34d399' }}>{rhs}</strong> | n(n+1)/2 = <strong style={{ color: '#34d399' }}>{lhs}</strong>{' '}
          {lhs === rhs ? <span style={{ color: '#34d399' }}>✓ egyeznek</span> : <span style={{ color: '#f87171' }}>✗</span>}
        </span>
      </div>
    </div>
  );
}

/* ════ Tab 2: 2^n vs n² chart ════ */
function PowChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const maxN = 12, pad = 36;
    const vals2n: number[] = [], valsN2: number[] = [];
    for (let n = 1; n <= maxN; n++) { vals2n.push(Math.pow(2, n)); valsN2.push(n * n); }
    const maxY = Math.max(...vals2n, 144);
    const sx = (n: number) => pad + (n - 1) / (maxN - 1) * (W - 2 * pad);
    const sy = (v: number) => H - pad - (v / maxY) * (H - 2 * pad);
    ctx.strokeStyle = '#1e2830'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(pad, pad); ctx.lineTo(pad, H - pad); ctx.lineTo(W - pad, H - pad); ctx.stroke();
    ctx.beginPath(); ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2;
    valsN2.forEach((v, i) => { const x = sx(i + 1), y = sy(v); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
    ctx.stroke();
    ctx.beginPath(); ctx.strokeStyle = '#67e8f9'; ctx.lineWidth = 2;
    vals2n.forEach((v, i) => { const x = sx(i + 1), y = sy(v); i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y); });
    ctx.stroke();
    [4, 5].forEach((n) => {
      const x = sx(n);
      ctx.strokeStyle = n === 5 ? '#34d399' : '#f87171'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(x, pad); ctx.lineTo(x, H - pad); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = n === 5 ? '#34d399' : '#f87171'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center';
      ctx.fillText(n === 5 ? 'n=5 ✓' : 'n=4 =', x, pad - 4);
    });
    for (let i = 0; i < maxN; i++) {
      ctx.fillStyle = '#67e8f9'; ctx.beginPath(); ctx.arc(sx(i + 1), sy(vals2n[i]), 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#f59e0b'; ctx.beginPath(); ctx.arc(sx(i + 1), sy(valsN2[i]), 3, 0, Math.PI * 2); ctx.fill();
    }
    ctx.font = '11px monospace'; ctx.textAlign = 'left';
    ctx.fillStyle = '#67e8f9'; ctx.fillText('2ⁿ', W - pad + 4, pad + 6);
    ctx.fillStyle = '#f59e0b'; ctx.fillText('n²', W - pad + 4, pad + 20);
    ctx.fillStyle = '#6b7280'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
    for (let n = 1; n <= maxN; n += 2) ctx.fillText(String(n), sx(n), H - 8);
  }, []);
  return (
    <div style={{ marginTop: '.5rem' }}>
      <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.3rem' }}>Vizuális ellenőrzés:</div>
      <canvas ref={ref} width={480} height={140} style={{ background: '#0c1a2e', borderRadius: '.4rem', maxWidth: '100%' }} />
    </div>
  );
}

/* ════ Tab 2: div9 checker ════ */
function Div9Checker() {
  const [n, setN] = useState(3);
  const val = Math.pow(4, n) + 15 * n - 1;
  const ok = val % 9 === 0;
  return (
    <div style={{ marginTop: '.5rem' }}>
      <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.3rem' }}>Ellenőrizd tetszőleges n-re:</div>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <input type="range" min={0} max={12} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 120 }} />
        <span style={{ fontSize: '.85rem' }}>
          n = <strong style={{ color: '#67e8f9' }}>{n}</strong> | 4ⁿ+15n−1 = <strong style={{ color: '#a5f3fc' }}>{val}</strong> | {val} mod 9 = <strong style={{ color: ok ? '#34d399' : '#f87171' }}>{val % 9}</strong>{' '}
          {ok ? <span style={{ color: '#34d399' }}>✓ osztható 9-cel</span> : <span style={{ color: '#f87171' }}>✗</span>}
        </span>
      </div>
    </div>
  );
}

/* ════ Tab 3: sqrt(2) stepper ════ */
const SQ2: { badge: string; badgeBad?: boolean; html: string }[] = [
  { badge: 'Ind. feltétel', html: String.raw`Tegyük fel, hogy \(\sqrt{2} \in \mathbb{Q}\).` },
  { badge: 'Következmény', html: String.raw`Ekkor \(\sqrt{2} = p/q\) ahol \(p,q \in \mathbb{Z}\), \(q \ne 0\), és \(\gcd(p,q)=1\) (irreducibilis).` },
  { badge: 'Levezetés', html: String.raw`\(2 = p^2/q^2 \Rightarrow p^2 = 2q^2 \Rightarrow p^2\) páros \(\Rightarrow p\) páros \(\Rightarrow p=2m\).` },
  { badge: 'Levezetés', html: String.raw`\(4m^2 = 2q^2 \Rightarrow q^2 = 2m^2 \Rightarrow q^2\) páros \(\Rightarrow q\) páros.` },
  { badge: 'Ellentmondás!', badgeBad: true, html: String.raw`\(p\) és \(q\) mindkettő páros — de \(\gcd(p,q)=1\)-et feltettük. Ellentmondás! Tehát \(\sqrt{2} \notin \mathbb{Q}\). \(\square\)` },
];
function Sqrt2Stepper() {
  const [cur, setCur] = useState(1);
  const done = cur >= SQ2.length;
  return (
    <div className="info-box">
      <span className="lbl">Interaktív: √2 irracionális — indirekt bizonyítás</span>
      <div style={{ fontSize: '.78rem', color: '#8892a4', margin: '.3rem 0 .5rem' }}>A klasszikus példa. Kattints a lépésekre sorban:</div>
      {SQ2.slice(0, cur).map((s, i) => (
        <div key={i} className="ind-step is-active">
          <span className="badge-phase" style={s.badgeBad ? { background: '#f87171', color: '#fff' } : undefined}>{s.badge}</span>{' '}
          <RichTex html={s.html} style={{ display: 'inline' }} />
        </div>
      ))}
      <div style={{ marginTop: '.5rem' }}>
        {done
          ? <span style={{ fontSize: '.85rem', color: '#34d399' }}>Bizonyítás kész! ✓</span>
          : <button className="op-btn" onClick={() => setCur((c) => Math.min(c + 1, SQ2.length))}>Következő lépés →</button>}
      </div>
    </div>
  );
}

/* ════ Static theory ════ */
const t1a = String.raw`
<h5 style="color:#67e8f9;font-weight:700;margin:0 0 .75rem">Teljes indukció elve</h5>
<div class="def-box"><div class="lbl mb-2">1. Tétel — Teljes indukció elve</div><div class="box-body">Legyen \(A(n)\) egy állítás minden \(n \ge n_0\) egészre. Ha ① <strong>alaplépés:</strong> \(A(n_0)\) igaz, és ② <strong>indukciós lépés:</strong> \(A(k)\) igaz \(\Rightarrow A(k+1)\) igaz (\(k \ge n_0\)), akkor \(A(n)\) igaz minden \(n \ge n_0\)-ra.</div></div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin:.7rem 0">
<div class="info-box" style="text-align:center"><div style="font-size:1.6rem">🧱</div><div style="color:#67e8f9;font-weight:700;font-size:.8rem">1. Alaplépés</div><div style="color:#8892a4;font-size:.76rem">Igazoljuk \(A(n_0)\)-t.</div></div>
<div class="info-box" style="text-align:center"><div style="font-size:1.6rem">🔗</div><div style="color:#67e8f9;font-weight:700;font-size:.8rem">2. Ind. hipotézis</div><div style="color:#8892a4;font-size:.76rem">\(A(k)\) igaz \(k \ge n_0\)-ra.</div></div>
<div class="info-box" style="text-align:center"><div style="font-size:1.6rem">📐</div><div style="color:#67e8f9;font-weight:700;font-size:.8rem">3. Ind. lépés</div><div style="color:#8892a4;font-size:.76rem">Ebből \(A(k+1)\).</div></div>
</div>
<div class="thm-box"><div class="box-body"><strong>Intuitív kép:</strong> a természetes számok mint dominók. Ha az első eldől (alaplépés) és minden eldőlt dönti a következőt (ind. lépés), az összes elesik.</div></div>`;

const t2intro = String.raw`<h5 style="color:#67e8f9;font-weight:700;margin:0 0 .5rem">Indukciós példák — lépésről lépésre</h5>`;
const t2sum = String.raw`
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">2. példa — Összegképlet: \(1+2+\cdots+n = \dfrac{n(n+1)}{2}\)</div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Alaplépés (n=1)</span> \(1 = \dfrac{1 \cdot 2}{2} = 1\)</div><div class="step-why">Bal és jobb oldal egyenlő. ✓</div></div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Ind. hipotézis</span> \(1 + 2 + \cdots + k = \dfrac{k(k+1)}{2}\)</div><div class="step-why">Feltételezzük igaznak.</div></div>
<div class="step-row"><div class="step-eq">\(1+2+\cdots+k+(k+1) = \dfrac{k(k+1)}{2} + (k+1)\)</div><div class="step-why">Ind. hipotézis alkalmazva.</div></div>
<div class="step-row"><div class="step-eq">\(= \dfrac{k(k+1) + 2(k+1)}{2} = \dfrac{(k+1)(k+2)}{2}\)</div><div class="step-why">Kiemelve \((k+1)\). \(\square\)</div></div></div>`;
const t2pow = String.raw`
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">3. példa — Egyenlőtlenség: \(2^n > n^2\) (\(n \ge 5\))</div>
<div class="warn-box"><strong>Megjegyzés:</strong> \(n=4\)-re \(2^4=16=4^2\) — nem teljesül! Az alaplépés \(n_0=5\).</div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Alaplépés (n=5)</span> \(2^5 = 32 > 25 = 5^2\)</div><div class="step-why">Közvetlen ellenőrzés. ✓</div></div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Ind. lépés</span> \(2^{k+1} = 2 \cdot 2^k > 2k^2\)</div><div class="step-why">Ind. hip.: \(2^k > k^2\).</div></div>
<div class="step-row"><div class="step-eq">Kell: \(2k^2 \ge (k+1)^2 \Leftrightarrow k(k-2) \ge 1\)</div><div class="step-why">Teljesül \(k \ge 3\)-ra. \(\square\)</div></div></div>`;
const t2div = String.raw`
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">4. példa — Oszthatóság: \(9 \mid (4^n + 15n - 1)\) (\(n \ge 0\))</div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Alaplépés (n=0)</span> \(a_0 = 4^0 + 0 - 1 = 0\)</div><div class="step-why">\(9 \mid 0\) ✓</div></div>
<div class="step-row"><div class="step-eq">\(a_{k+1} = 4 \cdot 4^k + 15k + 14 = 4(4^k + 15k - 1) - 45k + 18\)</div><div class="step-why">Az ind. hipotézis megjelenik.</div></div>
<div class="step-row"><div class="step-eq">\(= 4 \cdot 9\ell - 45k + 18 = 9(4\ell - 5k + 2)\)</div><div class="step-why">\(9 \mid a_{k+1}\). \(\square\)</div></div></div>`;

const t3a = String.raw`
<h5 style="color:#67e8f9;font-weight:700;margin:0 0 .75rem">Indirekt bizonyítás</h5>
<div class="def-box"><div class="lbl mb-2">Az indirekt bizonyítás módszere</div><div class="box-body">Egy \(A\) állítás bizonyításához tegyük fel, hogy \(A\) <strong>nem</strong> teljesül (\(\neg A\)). Ha ebből <strong>ellentmondásra</strong> jutunk, akkor \(A\) igaz. \[\neg A \Rightarrow \text{ellentmondás} \implies A \text{ igaz}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>Kapcsolat a logikával:</strong> az indirekt bizonyítás az \(A \Rightarrow B\) kontrapozitívján alapul: \[(A \Rightarrow B) \;\Leftrightarrow\; (\neg B \Rightarrow \neg A)\]</div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.4rem">Indirekt bizonyítás sémája</div><div class="box-body"><strong>1.</strong> Indirekt feltétel: az állítás hamis. <strong>2.</strong> Következtetéseket vonunk le. <strong>3.</strong> Ellentmondáshoz jutunk. <strong>4.</strong> Tehát az állítás igaz. \(\square\)</div></div>`;

const t4a = String.raw`
<h5 style="color:#67e8f9;font-weight:700;margin:0 0 .75rem">Indirekt bizonyítás — példák</h5>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">5. példa — Direkt: két racionális szorzata racionális</div>
<div class="step-row"><div class="step-eq">\(r_1 = p_1/q_1,\; r_2 = p_2/q_2\)</div><div class="step-why">\(p_i,q_i \in \mathbb{Z},\; q_i \ne 0\)</div></div>
<div class="step-row"><div class="step-eq">\(r_1 r_2 = \dfrac{p_1 p_2}{q_1 q_2}\)</div><div class="step-why">\(\in \mathbb{Q}\). \(\square\)</div></div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">7. példa — Indirekt: \(r \ne 0\) rac., \(x\) irrac. \(\Rightarrow rx\) irrac.</div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Indirekt feltétel</span> \(rx \in \mathbb{Q}\)</div><div class="step-why">Az ellentett állítás.</div></div>
<div class="step-row"><div class="step-eq">\(\dfrac{p}{q} \cdot x = \dfrac{p_0}{q_0} \Rightarrow x = \dfrac{p_0 q}{q_0 p}\)</div><div class="step-why">Osztva \(p/q\)-val (\(p \ne 0\)).</div></div>
<div class="step-row"><div class="step-eq"><span class="badge-phase" style="background:#f87171;color:#fff">Ellentmondás</span> \(x \in \mathbb{Q}\)</div><div class="step-why">— de \(x\) irracionális! \(\square\)</div></div>
<div class="ex-box" style="margin-top:.5rem"><div class="box-body"><strong>8. példa:</strong> racionális + irracionális összege is irracionális: ha \(r + x \in \mathbb{Q}\), akkor \(x = (r+x)-r \in \mathbb{Q}\), ellentmondás.</div></div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.5rem">9. példa — A teljes indukció indirekt bizonyítása</div>
<div class="step-row"><div class="step-eq"><span class="badge-phase">Indirekt feltétel</span> \(\exists\, k \ge n_0\): \(A(k)\) hamis</div><div class="step-why">Az ellentett állítás.</div></div>
<div class="step-row"><div class="step-eq">Legyen \(k_0\) a legkisebb ilyen; \(k_0 > n_0\)</div><div class="step-why">Jól rendezettség; \(A(n_0)\) igaz.</div></div>
<div class="step-row"><div class="step-eq">\(A(k_0-1)\) igaz \(\Rightarrow A(k_0)\) is igaz</div><div class="step-why">Ellentmondás! \(\square\)</div></div>
<div class="thm-box" style="margin-top:.5rem"><div class="box-body">Kulcs: a <strong>természetes számok jól rendezettsége</strong> és az indukciós lépés együtt zárja ki az ellenpéldát.</div></div></div>`;

const t5a = String.raw`
<h5 style="color:#67e8f9;font-weight:700;margin:0 0 .75rem">Előadás+ — Mélyebb betekintések</h5>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.25rem">1. Erős indukció</div><div class="box-body">Ha \(A(n_0),\ldots,A(k)\) mind igazak \(\Rightarrow A(k+1)\) igaz, akkor \(A(n)\) igaz minden \(n \ge n_0\)-ra. Ekvivalens az alap változattal, de erősebb eszköz. <strong>Mikor?</strong> Ha korábbi értékek is kellenek, pl. Fibonacci: \(F_{k+1} = F_k + F_{k-1}\).</div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.25rem">2. Az alaplépés \(n_0\) megválasztása</div><div class="box-body">Az indukció csak \(n \ge n_0\)-ra bizonyít. \(2^n > n^2\) nem teljesül \(n=4\)-re → \(n_0=5\). Az alaplépést mindig számszerűen igazoljuk.</div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.25rem">3. Oszthatósági trükk</div><div class="box-body">\[a_{k+1} = 4a_k - 9(5k-2)\] Ha \(p \mid f(k)\), írjuk \(f(k+1) = c \cdot f(k) + g(k)\), ahol \(p \mid g(k)\). Ekkor \(p \mid f(k+1)\).</div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.25rem">4. Mire nem jó az indukció</div><div class="warn-box"><strong>Hamis tétel:</strong> „Minden lónak azonos a színe." A hibás bizonyítás \(k=1 \to 2\) lépése nem működik (két ló nem fed át közös elemet). Mindig ellenőrizzük az ind. lépést kis esetekre.</div></div>
<div class="info-box"><div style="color:#a5f3fc;font-weight:700;margin-bottom:.25rem">5. Indirekt vs. kontrapozitív</div><div class="box-body">\[(A \Rightarrow B) \;\equiv\; (\neg B \Rightarrow \neg A)\] <strong>Indirekt:</strong> \(\neg B\)-ből bármely ellentmondás. <strong>Kontrapozitív:</strong> \(\neg B\)-ből közvetlenül \(\neg A\) (direkt bizonyítás). Az indirekt kissé általánosabb.</div></div>`;

const TABS: Tab[] = [
  { id: 'in', label: 'Teljes indukció', content: <div><RichTex html={t1a} /><InductionStepper /></div> },
  {
    id: 'pe', label: 'Indukciós példák',
    content: <div><RichTex html={t2intro} /><RichTex html={t2sum} /><SumChecker /><RichTex html={t2pow} /><PowChart /><RichTex html={t2div} /><Div9Checker /></div>,
  },
  { id: 'id', label: 'Indirekt bizonyítás', content: <div><RichTex html={t3a} /><Sqrt2Stepper /></div> },
  { id: 'ip', label: 'Indirekt példák', content: <RichTex html={t4a} /> },
  { id: 'ex', label: 'Előadás+', content: <RichTex html={t5a} /> },
];

export default function Ch9() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika I — fejezet</p>
      <h1 className="ila__title">Matematikai bizonyítások</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
