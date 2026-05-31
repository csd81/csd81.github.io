import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../components/kit';

const ACC = '#f59e0b';

/* ── Math helpers ── */
function gcdExtended(a: number, b: number): { g: number; x: number; y: number; steps: { a: number; b: number; q: number; r: number }[] } {
  if (b === 0) return { g: a, x: 1, y: 0, steps: [] };
  const steps: { a: number; b: number; q: number; r: number }[] = [];
  let r0 = a, r1 = b, s0 = 1, s1 = 0, t0 = 0, t1 = 1;
  while (r1 !== 0) {
    const q = Math.floor(r0 / r1), r2 = r0 - q * r1;
    const s2 = s0 - q * s1, t2 = t0 - q * t1;
    steps.push({ a: r0, b: r1, q, r: r2 });
    r0 = r1; r1 = r2; s0 = s1; s1 = s2; t0 = t1; t1 = t2;
  }
  return { g: r0, x: s0, y: t0, steps };
}

function factorize(n: number): Record<number, number> {
  const f: Record<number, number> = {};
  for (let p = 2; p * p <= n; p++) { while (n % p === 0) { f[p] = (f[p] || 0) + 1; n = Math.floor(n / p); } }
  if (n > 1) f[n] = (f[n] || 0) + 1;
  return f;
}
function formatFactors(f: Record<number, number>): string {
  return Object.entries(f).map(([p, e]) => e > 1 ? `${p}^${e}` : p).join('·') || '1';
}
function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; }

/* ════ TAB 1: Oszthatóság ════ */
function DivChecker() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(36);
  const [result, setResult] = useState<{ ok: boolean; q: number; r: number } | null>(null);

  const check = (av = a, bv = b) => {
    if (!av) return;
    const ok = bv % av === 0;
    const q = Math.trunc(bv / av), r = bv - av * q;
    setResult({ ok, q, r });
  };

  const setQuick = (av: number, bv: number) => { setA(av); setB(bv); check(av, bv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív oszthatóság-ellenőrző</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Ellenőrzés: a ∣ b?</p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" value={b} onChange={e => setB(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => check()}>Ellenőriz</button>
      </div>
      {result && (
        <div>
          <span style={{ background: result.ok ? 'rgba(52,211,153,.15)' : 'rgba(239,68,68,.15)', color: result.ok ? '#34d399' : '#ef4444', border: `1px solid ${result.ok ? '#34d399' : '#ef4444'}`, borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>
            {a}∣{b} — {result.ok ? 'IGEN ✓' : 'NEM ✗'}
          </span>
          <div className="ex-box" style={{ marginTop: '.5rem', fontSize: '.82rem' }}>
            Maradékos osztás: {b} = {a}·{result.q} + {result.r}
            {result.ok
              ? <><br /><span style={{ color: '#34d399' }}>r=0, tehát osztja!</span></>
              : <><br /><span style={{ color: '#ef4444' }}>r={result.r}≠0, nem osztja.</span></>}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {([[12, 18], [7, 49], [5, 37], [13, 0]] as [number, number][]).map(([av, bv]) => (
          <button key={`${av}-${bv}`} className="op-btn" onClick={() => setQuick(av, bv)}>{av}∣{bv}?</button>
        ))}
      </div>
    </div>
  );
}

const t1_theory = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Oszthatóság</h5>
<div class="def-box"><div class="lbl" style="color:#f59e0b">1. Definíció</div><div class="box-body"><strong>\(a\mid b\)</strong> (a osztja b-t), ha létezik olyan egész \(q\), hogy <strong>\(b = a\cdot q\)</strong>.<br>Jelölés: \(a\mid b\). Ha nem osztja: \(a\nmid b\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm">2. Tétel — Oszthatóság tulajdonságai</div><div class="box-body" style="font-size:.82rem">
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">1.</span><span>\(a \mid a\) (reflexív)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">2.</span><span>\(a \mid b\), \(b \mid c\) \(\Rightarrow\) \(a \mid c\) (tranzitív)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">3.</span><span>\(a \mid b\), \(b \mid a\) \(\Rightarrow\) a=±b (antiszimmetrikus)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">4.</span><span>\(a \mid b\), \(a \mid c\) \(\Rightarrow\) \(a \mid (bx+cy)\) (lin. kombináció)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">5.</span><span>\(a \mid b\) \(\Rightarrow\) \(ac \mid bc\)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">6.</span><span>\(ac \mid bc\), \(c \neq 0\) \(\Rightarrow\) \(a \mid b\)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#f59e0b;font-weight:600;width:1.5rem">7.</span><span>\(1 \mid a\) és \(a \mid 0\) mindig</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0"><span style="color:#f59e0b;font-weight:600;width:1.5rem">8.</span><span>\(a \mid b\), \(b \neq 0\) \(\Rightarrow\) \(|a| \leq |b|\)</span></div>
</div></div>
<div class="thm-box"><div class="lbl lbl--thm">3. Tétel — Maradékos osztás</div><div class="box-body">Minden egész \(b\)-hez és \(a>0\)-hoz egyértelműen léteznek \(q, r\), hogy: <strong>\(b = a\cdot q + r, \; 0 \leq r &lt; a\)</strong></div></div>
<div class="ex-box"><div class="box-body">\(38 = 12\cdot 3 + 2\) (q=3, r=2)<br>\(40 = (-7)\cdot (-5) + 5\) (q=−5, r=5≥0 ✓)</div></div>`;

/* ════ TAB 2: Euklideszi algoritmus ════ */
function EuclidAnim() {
  const [a, setA] = useState(528);
  const [b, setB] = useState(1020);
  const [rows, setRows] = useState<{ a: number; b: number; q: number; r: number }[]>([]);
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState<number[]>([]);
  const [bezout, setBezout] = useState<{ g: number; x: number; y: number } | null>(null);
  const [autoTimer, setAutoTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  const doReset = (av = a, bv = b) => {
    if (autoTimer) clearInterval(autoTimer); setAutoTimer(null);
    const { g, x, y, steps } = gcdExtended(Math.abs(av), Math.abs(bv));
    setRows(steps); setIdx(0); setShown([]); setBezout({ g, x, y });
  };

  const doStep = (currentIdx: number, currentRows: typeof rows, aVal: number, bVal: number) => {
    if (currentIdx >= currentRows.length) return currentIdx;
    setShown(prev => [...prev, currentIdx]);
    return currentIdx + 1;
  };

  const handleStep = () => {
    setIdx(prev => doStep(prev, rows, a, b));
  };

  const handleAuto = () => {
    if (autoTimer) { clearInterval(autoTimer); setAutoTimer(null); return; }
    const timer = setInterval(() => {
      setIdx(prev => {
        const next = prev + 1;
        setShown(p => [...p, prev]);
        if (next > rows.length) { clearInterval(timer); setAutoTimer(null); }
        return next;
      });
    }, 800);
    setAutoTimer(timer);
  };

  useEffect(() => { doReset(); }, []);

  const showBezout = idx > rows.length && bezout;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Euklideszi algoritmus — animáció</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>22. Példa: gcd(528, 1020) = 12; back-substitúció: 528·29 − 1020·15 = 12</p>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" style={{ width: 70 }} value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" style={{ width: 70 }} value={b} onChange={e => setB(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => doReset()}>Indít</button>
        <button className="op-btn" onClick={handleStep}>Lépés →</button>
        <button className="op-btn" onClick={handleAuto}>{autoTimer ? 'Stop ⏹' : '▶ Auto'}</button>
      </div>
      <div style={{ minHeight: 180 }}>
        {shown.length === 0 && <p style={{ color: '#8892a4', fontSize: '.8rem' }}>Kattints "Lépés →"-re vagy ▶ Auto-ra!</p>}
        {shown.map(i => {
          const { a: ra, b: rb, q, r } = rows[i] || {};
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.4rem .7rem', borderRadius: 6, background: 'rgba(56,189,248,.08)', color: '#7dd3fc', fontFamily: 'monospace', fontSize: '.9rem', margin: '.15rem 0' }}>
              <span style={{ color: '#64748b', width: '2rem' }}>{i + 1}.</span>
              {ra} = {rb}·{q} + <strong style={{ color: r === 0 ? '#34d399' : '#fcd34d' }}>{r}</strong>
            </div>
          );
        })}
      </div>
      {showBezout && bezout && (
        <div className="thm-box" style={{ marginTop: '.5rem' }}>
          <strong>lnko({a},{b}) = {bezout.g}</strong><br />
          Bézout: <strong>{a}·({bezout.x}) + {b}·({bezout.y}) = {bezout.g}</strong><br />
          Ellenőrzés: {a * bezout.x + b * bezout.y} = {bezout.g} ✓
        </div>
      )}
    </div>
  );
}

const t2_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#f59e0b">7. Definíció — lnko</div><div class="box-body"><strong>(a,b)</strong> = a és b legnagyobb közös osztója (lnko):<br><em>d = (a,b)</em> ahol \(d \mid a\), \(d \mid b\), és minden \(c \mid a\), \(c \mid b\) esetén \(c \mid d\).<br><br>\((12,18) = 6\) | \((12,20) = 4\) | \((14,33) = 1\)</div></div>
<div class="thm-box"><div class="lbl lbl--thm">11. Tétel — Bézout-azonosság</div><div class="box-body">Ha d=(a,b), akkor léteznek \(x_0, y_0\) egészek, hogy: <strong>\(a\cdot x_0 + b\cdot y_0 = d\)</strong><br><span style="font-size:.78rem;color:#8892a4">Az Euklideszi algoritmus visszahelyettesítéssel adja meg \(x_0, y_0\)-t.</span></div></div>
<div class="thm-box"><div class="lbl lbl--thm">14–15. Tétel — Tulajdonságok</div><div class="box-body">\((a,b) = (b,a) = (a,-b) = (|a|,|b|) = (a, b+ax)\)<br>\(m\cdot (a,b) = (ma, mb)\)<br>Ha \(g=(a,b)\): \((a/g, b/g) = 1\)</div></div>`;

/* ════ TAB 3: Diofantoszi egyenletek ════ */
function DiofSolver() {
  const [a, setA] = useState(20);
  const [b, setB] = useState(12);
  const [c, setC] = useState(16);
  const [k, setK] = useState(0);
  const [res, setRes] = useState<{
    ok: boolean; g: number; x0: number; y0: number; bOverG: number; aOverG: number
  } | null>(null);

  const solve = (av = a, bv = b, cv = c) => {
    const { g, x, y } = gcdExtended(Math.abs(av), Math.abs(bv));
    if (cv % g !== 0) { setRes({ ok: false, g, x0: 0, y0: 0, bOverG: 0, aOverG: 0 }); return; }
    const sx = av < 0 ? -x : x, sy = bv < 0 ? -y : y;
    const scale = cv / g;
    setRes({ ok: true, g, x0: sx * scale, y0: sy * scale, bOverG: bv / g, aOverG: av / g });
  };

  const setQuick = (av: number, bv: number, cv: number) => { setA(av); setB(bv); setC(cv); solve(av, bv, cv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív diofantoszi megoldó</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>ax + by = c egyenlet megoldása az Euklideszi algoritmussal</p>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" value={b} onChange={e => setB(+e.target.value)} /></span>
        <span>c = <input type="number" className="ila-num" value={c} onChange={e => setC(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => solve()}>Megold</button>
      </div>
      {res && (
        <div style={{ marginTop: '.4rem' }}>
          {res.ok
            ? <div>
              <span style={{ background: 'rgba(52,211,153,.15)', color: '#34d399', border: '1px solid #34d399', borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>({a},{b}) = {res.g} | {c} → MEGOLDHATÓ ✓</span>
              <div className="ex-box" style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
                <strong>lnko(|{a}|,|{b}|) = {res.g}</strong><br />
                Partikuláris: x₀ = {res.x0}, y₀ = {res.y0}<br />
                Ellenőrzés: {a}·({res.x0}) + {b}·({res.y0}) = <strong style={{ color: a * res.x0 + b * res.y0 === c ? '#34d399' : '#ef4444' }}>{a * res.x0 + b * res.y0}</strong> {a * res.x0 + b * res.y0 === c ? '✓' : '✗'}<br />
                <hr style={{ borderColor: '#334155', margin: '.4rem 0' }} />
                <strong>Általános megoldás:</strong><br />
                x = <strong>{res.x0} + {res.bOverG}·k</strong><br />
                y = <strong>{res.y0} − {res.aOverG}·k</strong> (k∈ℤ)
              </div>
              <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginTop: '.5rem', fontSize: '.84rem' }}>
                k = <input type="number" className="ila-num" value={k} onChange={e => setK(+e.target.value)} />
                <button className="op-btn" onClick={() => {
                  const xk = res.x0 + res.bOverG * k, yk = res.y0 - res.aOverG * k;
                  alert(`k=${k}: x=${xk}, y=${yk} → ${a}·${xk}+${b}·${yk} = ${a * xk + b * yk} ${a * xk + b * yk === c ? '✓' : '✗'}`);
                }}>Kiértékel k-t</button>
              </div>
            </div>
            : <div>
              <span style={{ background: 'rgba(239,68,68,.15)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>({a},{b}) = {res.g} ∤ {c} → NEM MEGOLDHATÓ</span>
              <div className="ex-box" style={{ marginTop: '.4rem', fontSize: '.82rem', color: '#8892a4' }}>A feltétel: (a,b)∣c, azaz {res.g}∣{c} kell. {c}/{res.g}={(c / res.g).toFixed(2)}, nem egész.</div>
            </div>}
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {([[20, 12, 16], [3, 5, 1], [6, 4, 3], [15, 25, 35]] as [number, number, number][]).map(([av, bv, cv]) => (
          <button key={`${av}-${bv}-${cv}`} className="op-btn" onClick={() => setQuick(av, bv, cv)}>{av}x+{bv}y={cv}</button>
        ))}
      </div>
    </div>
  );
}

const t3_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#f59e0b">Lineáris diofantoszi egyenlet</div><div class="box-body"><strong>ax + by = c</strong> (a,b,c egészek; x,y ismeretlen egészek)</div></div>
<div class="thm-box"><div class="lbl lbl--thm">Megoldhatóság</div><div class="box-body"><strong>Megoldhatóság:</strong> akkor és csak akkor megoldható, ha <strong>\((a,b) \mid c\)</strong></div></div>
<div class="thm-box"><div class="lbl lbl--thm">23. Tétel — Általános megoldás</div><div class="box-body">Ha \(x_0, y_0\) egy partikuláris megoldás, az összes megoldás:<br><strong>\(x = x_0 + k\cdot (b/g)\)</strong><br><strong>\(y = y_0 - k\cdot (a/g)\)</strong><br>ahol g=(a,b), \(k \in \mathbb{Z}\) tetszőleges.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">24. Példa</div><div class="box-body"><strong>20x + 12y = 16</strong><br>g = (20,12) = 4, és \(4 \mid 16\) ✓<br>Egyszerűsítve: 5x + 3y = 4<br>Partikuláris: \(x_0 = -4\), \(y_0 = 8\)<br>Általános: <strong>\(x = -4+3k, y = 8-5k\)</strong></div></div>`;

/* ════ TAB 4: lkkt & Prímfelbontás ════ */
function GcdLcmCalc() {
  const [a, setA] = useState(550);
  const [b, setB] = useState(6776);
  const [result, setResult] = useState<{ g: number; l: number; fa: Record<number, number>; fb: Record<number, number> } | null>(null);

  const calc = (av = a, bv = b) => {
    if (!av || !bv) return;
    const g = gcd(av, bv), l = Math.abs(av * bv) / g;
    setResult({ g, l, fa: factorize(Math.abs(av)), fb: factorize(Math.abs(bv)) });
  };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív lnko/lkkt számológép</span>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" style={{ width: 70 }} value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" style={{ width: 70 }} value={b} onChange={e => setB(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => calc()}>Számol</button>
      </div>
      {result && (
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>lnko({a},{b})</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>{result.g}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>lkkt({a},{b})</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>{result.l.toLocaleString()}</div>
            </div>
          </div>
          <div className="ex-box" style={{ fontSize: '.82rem' }}>
            {a} = {formatFactors(result.fa)}<br />
            {b} = {formatFactors(result.fb)}<br />
            lnko = min kitevők, lkkt = max kitevők<br />
            Ellenőrzés: lnko·lkkt = {result.g}·{result.l} = {result.g * result.l} = |{a}·{b}| = {Math.abs(a * b)} ✓
          </div>
        </div>
      )}
    </div>
  );
}

function PrimeFactorizer() {
  const [n, setN] = useState(550);
  const [steps, setSteps] = useState<{ n: number; p: number; q: number }[]>([]);
  const [fResult, setFResult] = useState<{ orig: number; f: Record<number, number> } | null>(null);

  const factorStep = (nv = n) => {
    if (nv < 2) return;
    const orig = nv;
    const s: { n: number; p: number; q: number }[] = [];
    let cur = nv;
    for (let p = 2; p * p <= cur; p++) {
      while (cur % p === 0) { s.push({ n: cur, p, q: Math.floor(cur / p) }); cur = Math.floor(cur / p); }
    }
    if (cur > 1) s.push({ n: cur, p: cur, q: 1 });
    setSteps(s);
    setFResult({ orig, f: factorize(orig) });
  };

  const setN2 = (nv: number) => { setN(nv); factorStep(nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Prímfelbontás lépésről lépésre</span>
      <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" className="ila-num" style={{ width: 80 }} value={n} onChange={e => setN(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => factorStep()}>Felbont</button>
      </div>
      {steps.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.35rem .7rem', borderRadius: 6, background: i === steps.length - 1 ? 'rgba(56,189,248,.08)' : 'transparent', color: i === steps.length - 1 ? '#7dd3fc' : '#475569', fontFamily: 'monospace', fontSize: '.86rem', margin: '.15rem 0', borderLeft: i === steps.length - 1 ? 'none' : '2px solid #1e2533', paddingLeft: '.7rem' }}>
          {s.n} = {s.p} × {s.q === 1 ? s.p : s.q}
        </div>
      ))}
      {fResult && <div className="ex-box" style={{ fontSize: '.82rem', marginTop: '.3rem' }}><strong>{fResult.orig} = {formatFactors(fResult.f)}</strong></div>}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {[550, 6776, 360, 1024, 2310].map(v => (
          <button key={v} className="op-btn" onClick={() => setN2(v)}>{v}</button>
        ))}
      </div>
    </div>
  );
}

const t4_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#f59e0b">25. Definíció — lkkt</div><div class="box-body"><strong>[a,b]</strong> = a és b legkisebb közös többszöröse (lkkt):<br><em>m = [a,b]</em> ahol \(a \mid m\), \(b \mid m\), és \(a \mid t\), \(b \mid t\) \(\Rightarrow\) \(m \mid t\).<br>[16,24] = <strong>48</strong> | [24,30] = <strong>120</strong></div></div>
<div class="thm-box"><div class="lbl lbl--thm">30. Tétel</div><div class="box-body"><strong>\((a,b) \cdot [a,b] = a \cdot b\)</strong></div></div>
<div class="thm-box"><div class="lbl lbl--thm">31. Tétel (asszociativitás)</div><div class="box-body">(a,b,c) = ((a,b),c)<br>[a,b,c] = [[a,b],c]</div></div>
<div class="thm-box"><div class="lbl lbl--thm">38. Tétel — Prímfelbontással</div><div class="box-body">Ha \(a = \prod p_i^{a_i}\), \(b = \prod p_i^{b_i}\), akkor:<br><strong>\((a,b) = \prod p_i^{\min(a_i, b_i)}\)</strong><br><strong>\([a,b] = \prod p_i^{\max(a_i, b_i)}\)</strong></div></div>
<div class="ex-box"><div class="lbl lbl--ex">39. Példa</div><div class="box-body">\(550 = 2^1 \cdot 5^2 \cdot 11^1\)<br>\(6776 = 2^3 \cdot 7^1 \cdot 11^2\)<br>\(\mathrm{lnko} = 2^1 \cdot 5^0 \cdot 7^0 \cdot 11^1\) = <strong>22</strong><br>\(\mathrm{lkkt} = 2^3 \cdot 5^2 \cdot 7^1 \cdot 11^2\) = <strong>169400</strong></div></div>`;

/* ════ TAB 5: Prímszámok+ ════ */
type SieveCell = { n: number; state: '' | 'one' | 'current' | 'prime' | 'removed' };

function SieveAnim() {
  const [cells, setCells] = useState<SieveCell[]>(
    Array.from({ length: 100 }, (_, i) => ({ n: i + 1, state: i === 0 ? 'one' : '' } as SieveCell))
  );
  const [curPrime, setCurPrime] = useState(2);
  const [phase, setPhase] = useState<'start' | 'mark' | 'done'>('start');
  const [status, setStatus] = useState('');
  const [autoTimer, setAutoTimer] = useState<ReturnType<typeof setInterval> | null>(null);

  const reset = () => {
    if (autoTimer) clearInterval(autoTimer); setAutoTimer(null);
    setCells(Array.from({ length: 100 }, (_, i) => ({ n: i + 1, state: i === 0 ? 'one' : '' } as SieveCell)));
    setCurPrime(2); setPhase('start'); setStatus('');
  };

  const stepOnce = (cs: SieveCell[], cp: number, ph: 'start' | 'mark' | 'done'): { cells: SieveCell[]; curPrime: number; phase: 'start' | 'mark' | 'done'; status: string } => {
    if (ph === 'done') return { cells: cs, curPrime: cp, phase: 'done', status: 'Kész!' };
    if (ph === 'start') {
      const nc = cs.map((c, i) => i === cp - 1 ? { ...c, state: 'current' as const } : c);
      return { cells: nc, curPrime: cp, phase: 'mark', status: `Aktuális prím: ${cp}` };
    }
    // mark phase
    const nc = cs.map((c, i) => {
      if (i === cp - 1) return { ...c, state: 'prime' as const };
      if (i + 1 > cp && (i + 1) % cp === 0 && c.state === '') return { ...c, state: 'removed' as const };
      return c;
    });
    let next = cp + 1;
    while (next <= 100 && nc[next - 1].state !== '') next++;
    if (next > Math.sqrt(100)) {
      const final = nc.map(c => c.state === '' ? { ...c, state: 'prime' as const } : c);
      return { cells: final, curPrime: cp, phase: 'done', status: 'Kész!' };
    }
    return { cells: nc, curPrime: next, phase: 'start', status: '' };
  };

  const handleStep = () => {
    const result = stepOnce(cells, curPrime, phase);
    setCells(result.cells); setCurPrime(result.curPrime); setPhase(result.phase); setStatus(result.status);
  };

  const handleAuto = () => {
    if (autoTimer) { clearInterval(autoTimer); setAutoTimer(null); return; }
    const timer = setInterval(() => {
      setCells(prevCells => {
        setCurPrime(prevCp => {
          setPhase(prevPh => {
            const result = stepOnce(prevCells, prevCp, prevPh);
            setCells(result.cells);
            setStatus(result.status);
            if (result.phase === 'done') { clearInterval(timer); setAutoTimer(null); }
            return result.phase;
          });
          return prevCp;
        });
        return prevCells;
      });
    }, 400);
    setAutoTimer(timer);
  };

  // Simpler auto approach - use a ref-based approach
  const cellsRef = useRef(cells);
  const curPrimeRef = useRef(curPrime);
  const phaseRef = useRef(phase);
  useEffect(() => { cellsRef.current = cells; }, [cells]);
  useEffect(() => { curPrimeRef.current = curPrime; }, [curPrime]);
  useEffect(() => { phaseRef.current = phase; }, [phase]);

  const handleAutoSimple = () => {
    if (autoTimer) { clearInterval(autoTimer); setAutoTimer(null); return; }
    const timer = setInterval(() => {
      const result = stepOnce(cellsRef.current, curPrimeRef.current, phaseRef.current);
      setCells(result.cells); setCurPrime(result.curPrime); setPhase(result.phase); setStatus(result.status);
      cellsRef.current = result.cells; curPrimeRef.current = result.curPrime; phaseRef.current = result.phase;
      if (result.phase === 'done') { clearInterval(timer); setAutoTimer(null); }
    }, 400);
    setAutoTimer(timer);
  };

  const primes = cells.filter(c => c.state === 'prime').map(c => c.n);

  const cellColor = (c: SieveCell) => {
    if (c.state === 'current') return { bg: ACC, color: '#000', fontWeight: 700 };
    if (c.state === 'prime') return { bg: 'rgba(245,158,11,.25)', color: '#fcd34d', fontWeight: 600 };
    if (c.state === 'removed') return { bg: '#0e1014', color: '#2d3748', textDecoration: 'line-through' as const };
    if (c.state === 'one') return { bg: '#12161f', color: '#475569' };
    return { bg: '#1e2533', color: '#94a3b8' };
  };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>40. Példa — Eratosztenész szitája (≤100)</span>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', margin: '.4rem 0', alignItems: 'center' }}>
        <button className="op-btn is-active" onClick={handleStep}>Lépés →</button>
        <button className="op-btn" onClick={handleAutoSimple}>{autoTimer ? 'Stop ⏹' : '▶ Auto'}</button>
        <button className="op-btn" onClick={reset}>Újra</button>
        {status && <span style={{ fontSize: '.8rem', color: '#8892a4' }}>{status}</span>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10,1fr)', gap: 4, maxWidth: 460 }}>
        {cells.map((c) => {
          const st = cellColor(c);
          return (
            <div key={c.n} style={{ background: st.bg, color: st.color, fontWeight: st.fontWeight, textDecoration: (st as { textDecoration?: string }).textDecoration, borderRadius: 5, textAlign: 'center', padding: '.35rem 0', fontSize: '.82rem', fontFamily: 'monospace' }}>
              {c.n}
            </div>
          );
        })}
      </div>
      {primes.length > 0 && <div style={{ marginTop: '.5rem', fontSize: '.8rem', color: '#fcd34d' }}>Prímek: {primes.join(', ')}</div>}
    </div>
  );
}

function GapCalc() {
  const [k, setK] = useState(4);
  const fact = (n: number) => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };

  const base = fact(k + 1);
  const rows = Array.from({ length: k }, (_, i) => ({ j: i + 2, v: base + (i + 2) }));

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>42. Tétel — Tetszőlegesen nagy prímhézagok</span>
      <div style={{ fontSize: '.84rem', margin: '.3rem 0' }}>
        k = <input type="number" min={1} max={8} className="ila-num" value={k} onChange={e => setK(Math.min(8, Math.max(1, +e.target.value)))} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#94a3b8', lineHeight: 1.8 }}>
        (k+1)! = ({k}+1)! = {base}<br />
        {rows.map(({ j, v }) => (
          <div key={j}>{base}+{j} = <strong style={{ color: '#fcd34d' }}>{v}</strong> — osztója: <strong>{j}</strong></div>
        ))}
      </div>
    </div>
  );
}

const t5_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#f59e0b">32–37. Tétel — Prímek alapjai</div><div class="box-body"><strong>32. Def:</strong> p>1 prímszám, ha osztói csak 1 és p.<br><strong>34. Tétel:</strong> Minden n>1 prímek szorzata.<br><strong>37. Tétel (Főtétel):</strong> Az n>1 prímfaktorizációja egyértelmű (sorrend eltekintve).</div></div>
<div class="thm-box"><div class="lbl lbl--thm">41. Tétel — Végtelen sok prím (Euklidész)</div><div class="box-body"><strong>Bizonyítás:</strong> Tegyük fel, véges sok prím van: \(p_1, p_2, \ldots, p_n\).<br>Legyen \(N = p_1 \cdot p_2 \cdots p_n + 1\).<br>\(N\)-t \(p_i\)-vel osztva \(r=1\) marad \(\Rightarrow p_i \nmid N\).<br>Tehát \(N\)-nek van egy új prímtényezője. \(\Rightarrow\) Ellentmondás. □</div></div>
<div class="ex-box"><div class="box-body">pl. \(2\cdot 3\cdot 5\cdot 7\cdot 11\cdot 13+1\) = 30031 = \(59\cdot 509\) (mindkettő új prím!)</div></div>
<div class="thm-box"><div class="lbl lbl--thm">43. Tétel — Prímszámtétel</div><div class="box-body">Ha \(\pi(n)\) = prímek száma \(1..n\) közt, akkor: \[\lim_{n\to\infty} \dfrac{\pi(n)}{n / \ln n} = 1\]</div></div>
<div class="info-box"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;text-align:center">
<div><div style="font-size:.72rem;color:#64748b">\(\pi(100)\)</div><div style="font-size:1.4rem;font-weight:700;color:#f59e0b">25</div><div style="font-size:.7rem;color:#6b7280">100/ln100≈21.7</div></div>
<div><div style="font-size:.72rem;color:#64748b">\(\pi(1000)\)</div><div style="font-size:1.4rem;font-weight:700;color:#f59e0b">168</div><div style="font-size:.7rem;color:#6b7280">1000/ln1000≈144.8</div></div>
<div><div style="font-size:.72rem;color:#64748b">\(\pi(10^6)\)</div><div style="font-size:1.4rem;font-weight:700;color:#f59e0b">78498</div><div style="font-size:.7rem;color:#6b7280">10⁶/ln10⁶≈72382</div></div>
</div></div>`;

const TABS: Tab[] = [
  {
    id: 'oszt', label: 'Oszthatóság',
    content: (
      <Cols>
        <RichTex html={t1_theory} />
        <DivChecker />
      </Cols>
    ),
  },
  {
    id: 'lnko', label: 'lnko & Euklideszi',
    content: (
      <Cols variant="7-5">
        <EuclidAnim />
        <RichTex html={t2_theory} />
      </Cols>
    ),
  },
  {
    id: 'diof', label: 'Diofantoszi egyenletek',
    content: (
      <Cols>
        <RichTex html={t3_theory} />
        <DiofSolver />
      </Cols>
    ),
  },
  {
    id: 'lkkt', label: 'lkkt & Prímfelbontás',
    content: (
      <div>
        <Cols>
          <RichTex html={t4_theory} />
          <div><GcdLcmCalc /><PrimeFactorizer /></div>
        </Cols>
      </div>
    ),
  },
  {
    id: 'prim', label: 'Prímszámok+',
    content: (
      <Cols variant="7-5">
        <div><SieveAnim /><RichTex html={t5_theory} /></div>
        <GapCalc />
      </Cols>
    ),
  },
];

export default function Ch17() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet 1. — fejezet</p>
      <h1 className="ila__title">Számelmélet 1.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
