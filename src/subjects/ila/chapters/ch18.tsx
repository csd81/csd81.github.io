import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../components/kit';

const ACC = '#a3e635';

/* ── Math helpers ── */
function gcd(a: number, b: number): number { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b]; } return a; }
function lcm(a: number, b: number): number { return Math.abs(a * b) / gcd(a, b); }

function gcdExt(a: number, b: number): { g: number; x: number; y: number } {
  if (b === 0) return { g: a, x: 1, y: 0 };
  const r = gcdExt(b, a % b);
  return { g: r.g, x: r.y, y: r.x - Math.floor(a / b) * r.y };
}

function factorize(n: number): Record<number, number> {
  const f: Record<number, number> = {};
  for (let p = 2; p * p <= n; p++) while (n % p === 0) { f[p] = (f[p] || 0) + 1; n = Math.floor(n / p); }
  if (n > 1) f[n] = (f[n] || 0) + 1;
  return f;
}

function eulerPhi(n: number): number {
  const f = factorize(n); let r = n;
  for (const p of Object.keys(f)) r = Math.round(r / parseInt(p) * (parseInt(p) - 1));
  return r;
}

function modPow(base: number, exp: number, mod: number): number {
  let b = BigInt(base), e = BigInt(exp), m = BigInt(mod);
  if (m === 1n) return 0;
  let result = 1n; b = b % m;
  while (e > 0n) { if (e % 2n === 1n) result = result * b % m; e = e / 2n; b = b * b % m; }
  return Number(result);
}

function modPowSteps(base: number, exp: number, mod: number) {
  const steps: { pw: number; bit: number; curr: number; res: number; oldRes: number }[] = [];
  let b = BigInt(base), e = BigInt(exp), m = BigInt(mod);
  let result = 1n, curr = b % m, pw = 0;
  while (e > 0n) {
    const bit = e % 2n, oldRes = result;
    if (bit === 1n) { result = result * curr % m; }
    steps.push({ pw, bit: Number(bit), curr: Number(curr), res: Number(result), oldRes: Number(oldRes) });
    curr = curr * curr % m; e = e / 2n; pw++;
  }
  return steps;
}

function formatFactors(f: Record<number, number>): string {
  return Object.entries(f).map(([p, e]) => e > 1 ? `${p}^${e}` : p).join('·') || '1';
}

/* ════ TAB 1: Kongruenciák ════ */
function CongChecker() {
  const [a, setA] = useState(15);
  const [b, setB] = useState(19);
  const [n, setN] = useState(4);
  const [result, setResult] = useState<{ ok: boolean; diff: number; ra: number; rb: number } | null>(null);

  const check = (av = a, bv = b, nv = n) => {
    const diff = av - bv, ok = diff % nv === 0;
    const ra = ((av % nv) + nv) % nv, rb = ((bv % nv) + nv) % nv;
    setResult({ ok, diff, ra, rb });
  };

  const setQuick = (av: number, bv: number, nv: number) => { setA(av); setB(bv); setN(nv); check(av, bv, nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Interaktív kongruencia-ellenőrző</span>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" value={b} onChange={e => setB(+e.target.value)} /></span>
        <span>n = <input type="number" min={1} className="ila-num" value={n} onChange={e => setN(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => check()}>Ellenőriz</button>
      </div>
      {result && (
        <div>
          <span style={{ background: result.ok ? 'rgba(163,230,53,.15)' : 'rgba(239,68,68,.15)', color: result.ok ? ACC : '#ef4444', border: `1px solid ${result.ok ? ACC : '#ef4444'}`, borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>
            {a}≡{b} (mod {n}) — {result.ok ? 'IGAZ ✓' : 'HAMIS ✗'}
          </span>
          <div className="ex-box" style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
            {a}−{b}={result.diff} → {Math.abs(result.diff)} mod {n} = {Math.abs(result.diff) % n}
            {result.ok
              ? <><br /><span style={{ color: ACC }}>Osztható n-nel → kongruens ✓</span></>
              : <><br /><span style={{ color: '#ef4444' }}>Nem osztható n-nel ✗</span></>}
            <br />Maradékok: {a} mod {n} = <strong>{result.ra}</strong>, &nbsp;{b} mod {n} = <strong>{result.rb}</strong>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {([[15, 19, 4], [124, -6, 10], [7, 14, 3], [100, 0, 10]] as [number, number, number][]).map(([av, bv, nv]) => (
          <button key={`${av}-${bv}-${nv}`} className="op-btn" onClick={() => setQuick(av, bv, nv)}>{av}≡{bv}(mod{nv})?</button>
        ))}
      </div>
    </div>
  );
}

function ISBNChecker() {
  const [digits, setDigits] = useState<number[]>([0, 3, 0, 6, 4, 0, 6, 1, 5]);
  const [fullISBN, setFullISBN] = useState('');
  const [fullRes, setFullRes] = useState('');

  const sum = digits.reduce((s, v, i) => s + (i + 1) * v, 0);
  const x10 = ((sum % 11) + 11) % 11;

  const checkFull = () => {
    const s = fullISBN.replace(/[^0-9Xx]/g, '').toUpperCase();
    if (s.length !== 10) { setFullRes('Pontosan 10 karakter szükséges'); return; }
    let total = 0;
    for (let i = 0; i < 10; i++) total += (i + 1) * (s[i] === 'X' ? 10 : parseInt(s[i]));
    const ok = total % 11 === 0;
    setFullRes(`∑i·xᵢ = ${total} ≡ ${total % 11} (mod 11) → ${ok ? 'Érvényes ISBN-10 ✓' : 'Érvénytelen ✗'}`);
  };

  const setPreset = (arr: number[]) => { setDigits(arr); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>6. Példa — ISBN-10 ellenőrző számjegy</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Feltétel: ∑i·xᵢ ≡ 0 (mod 11). Add meg x₁,…,x₉-et; x₁₀ automatikus.</p>
      <div style={{ display: 'flex', gap: '.3rem', alignItems: 'flex-end', flexWrap: 'wrap', margin: '.4rem 0' }}>
        {digits.map((v, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <input
              type="text" maxLength={1}
              value={v}
              onChange={e => {
                const nv = parseInt(e.target.value.replace(/[^0-9]/g, ''));
                setDigits(prev => prev.map((d, j) => j === i ? (isNaN(nv) ? 0 : nv) : d));
              }}
              style={{ width: '2rem', height: '2rem', textAlign: 'center', background: '#1e2533', border: '1px solid #334155', color: '#e2e8f0', borderRadius: 5, fontFamily: 'monospace', fontSize: '.9rem' }}
            />
            <div style={{ fontSize: '.62rem', color: '#64748b', marginTop: 2 }}>x{i + 1}</div>
          </div>
        ))}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '2rem', height: '2rem', background: 'rgba(163,230,53,.12)', border: `1px solid ${ACC}`, borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', color: ACC, fontWeight: 700 }}>{x10 === 10 ? 'X' : x10}</div>
          <div style={{ fontSize: '.62rem', color: '#64748b', marginTop: 2 }}>x₁₀</div>
        </div>
      </div>
      <div className="ex-box" style={{ fontSize: '.82rem' }}>
        ∑i·xᵢ = {digits.map((v, i) => `${i + 1}·${v}`).join('+')} = <strong>{sum}</strong><br />
        x₁₀ ≡ {sum} mod 11 = <strong style={{ color: ACC }}>{x10 === 10 ? 'X (=10)' : x10}</strong><br />
        Ellenőrzés: {sum}+10·{x10}={sum + 10 * x10} ≡ {(sum + 10 * x10) % 11} (mod 11) {(sum + 10 * x10) % 11 === 0 ? '✓ Érvényes!' : '✗'}
      </div>
      <div style={{ display: 'flex', gap: '.4rem', margin: '.4rem 0' }}>
        <button className="op-btn" onClick={() => setPreset([0, 3, 0, 6, 4, 0, 6, 1, 5])}>030640615?</button>
        <button className="op-btn" onClick={() => setPreset([0, 1, 9, 5, 3, 5, 6, 5, 0])}>019535650?</button>
      </div>
      <div style={{ borderTop: '1px solid #1e2533', paddingTop: '.6rem', marginTop: '.4rem' }}>
        <p style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.4rem' }}>Teljes 10-jegyű kód validálása (X=10):</p>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <input className="ila-num" style={{ width: 120 }} placeholder="pl. 0306406152" value={fullISBN} onChange={e => setFullISBN(e.target.value)} />
          <button className="op-btn" onClick={checkFull}>Validál</button>
        </div>
        {fullRes && <div style={{ marginTop: '.4rem', fontSize: '.8rem', color: fullRes.includes('Érvényes') ? ACC : '#ef4444' }}>{fullRes}</div>}
      </div>
    </div>
  );
}

const t1_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#a3e635">1. Definíció</div><div class="box-body"><strong>\(a \equiv b \pmod{n}\)</strong> \(\Leftrightarrow\) \(n \mid (a - b)\)<br><span style="font-size:.8rem;color:#94a3b8">Ekvivalensen: \(a\) és \(b\) azonos maradékot adnak \(n\)-nel való osztáskor.</span><br><br>\(15 \equiv 19 \pmod{4}\) — \(15-19 = -4\), osztható \(4\)-gyel<br>\(124 \equiv -6 \pmod{10}\) — \(130\) osztható \(10\)-zel<br>\(a \equiv a + kn \pmod{n}\) minden \(k \in \mathbb{Z}\)-re</div></div>
<div class="thm-box"><div class="lbl lbl--thm">4. Tétel — Kongruencia-aritmetika</div><div class="box-body"><strong>1.</strong> A \(\bmod\, n\) kongruencia ekvivalenciareláció \(\mathbb{Z}\)-n.<br><strong>2.</strong> Ha \(a_1 \equiv b_1\) és \(a_2 \equiv b_2 \pmod{n}\), akkor:<br>&nbsp;&nbsp;\(a_1 + a_2 \equiv b_1 + b_2 \pmod{n}\)<br>&nbsp;&nbsp;\(a_1 a_2 \equiv b_1 b_2 \pmod{n}\)<br>&nbsp;&nbsp;\(c a_1 \equiv c b_1 \pmod{n}\) minden \(c \in \mathbb{Z}\)-re</div></div>
<div class="thm-box"><div class="lbl lbl--thm">5. Tétel — Egyszerűsítési szabályok</div><div class="box-body" style="font-size:.82rem">
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#a3e635;font-weight:600;width:1.5rem">1.</span><span>\(a \equiv b \pmod{n}\), \(m \mid n\) \(\Rightarrow\) \(a \equiv b \pmod{m}\)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span style="color:#a3e635;font-weight:600;width:1.5rem">2.</span><span>\(ac \equiv bc \pmod{n}\) \(\Rightarrow\) \(a \equiv b \pmod{n/(c,n)}\)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0"><span style="color:#a3e635;font-weight:600;width:1.5rem">3.</span><span>\(ac \equiv bc \pmod{n}\), (c,n)=1 \(\Rightarrow\) \(a \equiv b \pmod{n}\)</span></div>
</div></div>`;

/* ════ TAB 2: Kongruencia egyenletek ════ */
function LCSolver() {
  const [a, setA] = useState(18);
  const [b, setB] = useState(27);
  const [n, setN] = useState(21);
  const [result, setResult] = useState<{
    ok: boolean; g: number; xPart?: number; nDg?: number; sols?: number[]; check?: number
  } | null>(null);

  const solve = (av = a, bv = b, nv = n) => {
    const aN = ((av % nv) + nv) % nv;
    const { g, x: x0 } = gcdExt(aN, nv);
    if (bv % g !== 0) { setResult({ ok: false, g }); return; }
    const scale = bv / g, xPart = ((x0 * scale) % nv + nv) % nv;
    const nDg = nv / g;
    const sols = Array.from({ length: g }, (_, i) => (xPart + i * nDg) % nv);
    setResult({ ok: true, g, xPart, nDg, sols, check: ((av * xPart) % nv + nv) % nv });
  };

  const setQuick = (av: number, bv: number, nv: number) => { setA(av); setB(bv); setN(nv); solve(av, bv, nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Lineáris kongruencia megoldó — ax ≡ b (mod n)</span>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a=<input type="number" className="ila-num" value={a} onChange={e => setA(+e.target.value)} /></span>
        <span>b=<input type="number" className="ila-num" value={b} onChange={e => setB(+e.target.value)} /></span>
        <span>n=<input type="number" className="ila-num" value={n} onChange={e => setN(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => solve()}>Megold</button>
      </div>
      {result && (
        <div style={{ marginTop: '.4rem' }}>
          {result.ok
            ? <div>
              <span style={{ background: 'rgba(163,230,53,.15)', color: ACC, border: `1px solid ${ACC}`, borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>({a},{n})={result.g} ∣ {b} → MEGOLDHATÓ ✓</span>
              <div className="ex-box" style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
                Partikuláris megoldás: x₀ = <strong>{result.xPart}</strong><br />
                Egyértelmű mod n/d = mod <strong>{result.nDg}</strong>: x≡{result.xPart} (mod {result.nDg})<br />
                Összes megoldás mod {n} ({result.g} db):<br />
                <strong style={{ color: ACC }}>{result.sols!.map(s => `x ≡ ${s} (mod ${n})`).join(' | ')}</strong><br />
                Ellenőrzés: {a}·{result.xPart} = {a * result.xPart!} ≡ {result.check} (mod {n}) {result.check === ((b % n + n) % n) ? '✓' : '✗'}
              </div>
            </div>
            : <span style={{ background: 'rgba(239,68,68,.15)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>({a},{n})={result.g} ∤ {b} → NEM MEGOLDHATÓ</span>}
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {([[5, 3, 4], [18, 27, 21], [3, 5, 9], [7, 1, 11]] as [number, number, number][]).map(([av, bv, nv]) => (
          <button key={`${av}-${bv}-${nv}`} className="op-btn" onClick={() => setQuick(av, bv, nv)}>{av}x≡{bv}(mod{nv})</button>
        ))}
      </div>
    </div>
  );
}

function CRTSolver() {
  const [crtA, setCrtA] = useState(210);
  const [crtM, setCrtM] = useState(123);
  const [crtB, setCrtB] = useState(198);
  const [crtN, setCrtN] = useState(48);
  const [result, setResult] = useState<{ ok: boolean; d: number; L: number; xSol?: number } | null>(null);

  const solve = (av = crtA, m = crtM, bv = crtB, nv = crtN) => {
    const d = gcd(m, nv);
    if ((bv - av) % d !== 0) { setResult({ ok: false, d, L: 0 }); return; }
    const { x: y0 } = gcdExt(m, nv);
    const scale = (bv - av) / d;
    const ySol = y0 * scale;
    const L = lcm(m, nv);
    const xSol = ((av + m * ySol) % L + L) % L;
    setResult({ ok: true, d, L, xSol });
  };

  const setQ = (av: number, m: number, bv: number, nv: number) => { setCrtA(av); setCrtM(m); setCrtB(bv); setCrtN(nv); solve(av, m, bv, nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Kongruencia-rendszer megoldó — x≡a(mod m) & x≡b(mod n)</span>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.84rem' }}>
        <span>x≡</span>
        <input type="number" className="ila-num" value={crtA} onChange={e => setCrtA(+e.target.value)} />
        <span>(mod</span><input type="number" className="ila-num" value={crtM} onChange={e => setCrtM(+e.target.value)} /><span>)</span>
        <span>és x≡</span>
        <input type="number" className="ila-num" value={crtB} onChange={e => setCrtB(+e.target.value)} />
        <span>(mod</span><input type="number" className="ila-num" value={crtN} onChange={e => setCrtN(+e.target.value)} /><span>)</span>
        <button className="op-btn is-active" onClick={() => solve()}>Megold</button>
      </div>
      {result && (
        <div style={{ marginTop: '.4rem' }}>
          {result.ok
            ? <div>
              <span style={{ background: 'rgba(163,230,53,.15)', color: ACC, border: `1px solid ${ACC}`, borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>Megoldható: ({crtM},{crtN})={result.d} ∣ {crtB - crtA} ✓</span>
              <div className="ex-box" style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
                lkkt({crtM},{crtN}) = {result.L}<br />
                <strong>x ≡ <span style={{ color: ACC }}>{result.xSol}</span> (mod {result.L})</strong><br />
                Ellenőrzés: {result.xSol} mod {crtM} = {result.xSol! % crtM} {result.xSol! % crtM === ((crtA % crtM + crtM) % crtM) ? '✓' : '✗'}, &nbsp;
                {result.xSol} mod {crtN} = {result.xSol! % crtN} {result.xSol! % crtN === ((crtB % crtN + crtN) % crtN) ? '✓' : '✗'}
              </div>
            </div>
            : <span style={{ background: 'rgba(239,68,68,.15)', color: '#ef4444', border: '1px solid #ef4444', borderRadius: 4, padding: '.15rem .6rem', fontSize: '.78rem', fontWeight: 600 }}>({crtM},{crtN})={result.d} ∤ {crtB - crtA} → NEM MEGOLDHATÓ</span>}
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        <button className="op-btn" onClick={() => setQ(210, 123, 198, 48)}>10. Példa</button>
        <button className="op-btn" onClick={() => setQ(1, 3, 1, 5)}>x≡1(3), x≡1(5)</button>
        <button className="op-btn" onClick={() => setQ(2, 5, 3, 7)}>x≡2(5), x≡3(7)</button>
      </div>
    </div>
  );
}

const t2_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#a3e635">Lineáris kongruencia egyenlet</div><div class="box-body"><strong>\(ax \equiv b \pmod{n}\)</strong><br><span style="font-size:.8rem;color:#94a3b8">Megoldást modulo n keressük.</span></div></div>
<div class="thm-box"><div class="lbl lbl--thm">8. Tétel — Megoldhatóság</div><div class="box-body">Legyen d=(a,n).<br><strong>1.</strong> Megoldható ↔ \(d \mid b\)<br><strong>2.</strong> Ha megoldható: modulo n/d egyértelmű; modulo n pontosan d megoldás.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">9. Példa</div><div class="box-body">\(18x \equiv 27 \pmod{21}\)<br>\(d = (18, 21) = 3\), \(3 \mid 27\) ✓<br>\(21 - 18 = 3 \;\Rightarrow\; x_0 = -9\)<br>\(x \equiv -9 \equiv 5 \pmod{7}\)<br>Összes mod 21: <strong>\(x \equiv 5, 12, 19\)</strong></div></div>
<div class="thm-box"><div class="lbl lbl--thm">11. Tétel — Kínai maradéktétel</div><div class="box-body">Ha \(m_1, \ldots, m_k\) páronként relatív prímek, akkor az \(x \equiv a_1 \pmod{m_1}, \ldots, x \equiv a_k \pmod{m_k}\) rendszernek minden \(a_1, \ldots, a_k\) esetén van megoldása, és modulo \(m_1 \cdots m_k\) egyértelmű.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">10. Példa</div><div class="box-body">\(x \equiv 210 \pmod{123}\), \(x \equiv 198 \pmod{48}\)<br>\(d = (123, 48) = 3\), \(3 \mid (198 - 210) = -12\) ✓<br>Megoldás: <strong>\(x \equiv 1686 \pmod{1968}\)</strong></div></div>`;

/* ════ TAB 3: Euler & Fermat ════ */
function PhiCalc() {
  const [n, setN] = useState(100);
  const [result, setResult] = useState<{ phi: number; f: Record<number, number> } | null>(null);

  const calc = (nv = n) => {
    if (nv < 1) return;
    setResult({ phi: eulerPhi(nv), f: factorize(nv) });
  };

  const setQ = (nv: number) => { setN(nv); calc(nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Euler φ(n) kalkulátor</span>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" className="ila-num" style={{ width: 80 }} value={n} onChange={e => setN(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => calc()}>Számít</button>
      </div>
      {result && (
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b' }}>φ({n})</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>{result.phi}</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b' }}>Prímfelbontás</div>
              <div style={{ fontSize: '.9rem', fontWeight: 700, color: ACC }}>{formatFactors(result.f)}</div>
            </div>
          </div>
          <div className="ex-box" style={{ fontSize: '.82rem' }}>
            φ({n}) = {Object.entries(result.f).map(([p, k]) => +k > 1 ? `(${p}^${k}−${p}^${+k - 1})` : `(${p}−1)`).join('·')} = <strong>{result.phi}</strong>
            {n > 1 && <><br />Euler-tétel: ha (a,{n})=1, akkor a<sup>{result.phi}</sup>≡1 (mod {n})</>}
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {[8, 5, 100, 2537, 360].map(v => (
          <button key={v} className="op-btn" onClick={() => setQ(v)}>φ({v})</button>
        ))}
      </div>
    </div>
  );
}

function ModExpCalc() {
  const [ma, setMa] = useState(21);
  const [mk, setMk] = useState(362);
  const [mn, setMn] = useState(100);
  const [result, setResult] = useState<{ steps: ReturnType<typeof modPowSteps>; val: number } | null>(null);

  const calc = (av = ma, kv = mk, nv = mn) => {
    if (nv <= 0 || kv < 0) return;
    setResult({ steps: modPowSteps(av, kv, nv), val: modPow(av, kv, nv) });
  };

  const setQ = (av: number, kv: number, nv: number) => { setMa(av); setMk(kv); setMn(nv); calc(av, kv, nv); };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Moduláris hatványozás — ismételt négyzetre emelés</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>a^k mod n kiszámítása bináris módszerrel.</p>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>a=<input type="number" className="ila-num" value={ma} onChange={e => setMa(+e.target.value)} /></span>
        <span>k=<input type="number" className="ila-num" style={{ width: 70 }} value={mk} onChange={e => setMk(+e.target.value)} /></span>
        <span>n=<input type="number" className="ila-num" value={mn} onChange={e => setMn(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={() => calc()}>Számít</button>
      </div>
      {result && (
        <div>
          <div style={{ maxHeight: 160, overflowY: 'auto', marginBottom: '.4rem' }}>
            <div style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.3rem' }}>{ma}^{mk} binárisan: {mk.toString(2)}<sub>2</sub></div>
            {result.steps.slice(0, 10).map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', padding: '.35rem .7rem', borderRadius: 6, background: s.bit ? 'rgba(163,230,53,.12)' : 'transparent', color: s.bit ? '#d9f99d' : '#475569', fontFamily: 'monospace', fontSize: '.86rem', margin: '.1rem 0' }}>
                <span style={{ color: '#64748b', width: '4.5rem' }}>{ma}^{Math.pow(2, s.pw) | 0}:</span>
                <span style={{ width: '5rem' }}>{s.curr}</span>
                {s.bit
                  ? <span style={{ color: ACC }}>✓ eredmény: {s.oldRes}→{s.res}</span>
                  : <span style={{ color: '#334155' }}>— 0 bit, kihagyva</span>}
              </div>
            ))}
            {result.steps.length > 10 && <div style={{ fontSize: '.8rem', color: '#8892a4' }}>... ({result.steps.length - 10} lépés kihagyva)</div>}
          </div>
          <div className="thm-box">
            <strong>{ma}<sup>{mk}</sup> mod {mn} = <span style={{ color: ACC, fontSize: '1.15rem' }}>{result.val}</span></strong>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
        {([[21, 362, 100], [2, 10, 1000], [3, 100, 7], [1825, 13, 2537]] as [number, number, number][]).map(([av, kv, nv]) => (
          <button key={`${av}-${kv}-${nv}`} className="op-btn" onClick={() => setQ(av, kv, nv)}>{av}^{kv} mod {nv}</button>
        ))}
      </div>
    </div>
  );
}

const t3_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#a3e635">12–19. Definíciók &amp; Példák — Maradékosztályok és \(\varphi\)</div><div class="box-body"><strong>\(\mathbb{Z}_n\)</strong> = mod \(n\) maradékosztályok halmaza, \(|\mathbb{Z}_n| = n\)<br><strong>Redukált maradékosztály:</strong> \(\bar a\) ahol \((a, n) = 1\)<br><strong>\(\varphi(n)\)</strong> = redukált maradékosztályok száma (Euler-féle \(\varphi\))<br><br>\(\varphi(8) = 4\) (\(\{1, 3, 5, 7\}\) rel. prím \(8\)-hoz)<br>\(\varphi(5) = 4\) (\(\{1, 2, 3, 4\}\), \(p\) prím \(\Rightarrow \varphi(p) = p - 1\))<br><strong>27. Tétel:</strong> \(\varphi(p^k) = p^k - p^{k-1}\)<br><strong>28. Tétel:</strong> \(\varphi(n) = n \prod_{p \mid n}\left(1 - \dfrac{1}{p}\right)\)</div></div>
<div class="thm-box"><div class="lbl lbl--thm">22. Tétel — Euler tétele</div><div class="box-body">Ha \((a, n) = 1\), akkor: <strong style="font-size:1.1rem">\(a^{\varphi(n)} \equiv 1 \pmod{n}\)</strong></div></div>
<div class="thm-box"><div class="lbl lbl--thm">23–24. Tétel — Fermat tétele</div><div class="box-body">Ha \(p\) prím és \(p \nmid a\):<br><strong style="font-size:1.1rem">\(a^{p-1} \equiv 1 \pmod{p}\)</strong><br><strong>Következmény:</strong> \(a^p \equiv a \pmod{p}\) minden \(a \in \mathbb{Z}\)-re</div></div>
<div class="ex-box"><div class="lbl lbl--ex">29. Példa</div><div class="box-body">\(21^{362} \bmod 100 = ?\)<br>\(\varphi(100) = \varphi(4 \cdot 25) = (4-2)(25-5) = 40\)<br>\(21^{40} \equiv 1 \pmod{100} \Rightarrow 21^{360} \equiv 1\)<br>\(21^{362} \equiv 21^2 = 441 \equiv\) <strong>41</strong> \(\pmod{100}\)</div></div>`;

/* ════ TAB 4: Maradékosztályok ════ */
function ZnTableComp() {
  const [znVal, setZnVal] = useState(8);
  const [fullTable, setFullTable] = useState(false);

  // Z8 reduced table static
  const red8 = [1, 3, 5, 7];

  const buildFull = (n: number) => {
    const el = Array.from({ length: n }, (_, i) => i);
    return el;
  };

  const els = buildFull(znVal);

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>37. Példa — Z₈ szorzástábla (redukált)</span>
        <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>A = {'{'}1̄, 3̄, 5̄, 7̄{'}'} csoport a szorzásra (36. Tétel):</p>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ borderCollapse: 'collapse', fontSize: '.8rem' }}>
            <thead>
              <tr>
                <th style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533' }}>·</th>
                {red8.map(a => <th key={a} style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533', minWidth: '2.4rem', textAlign: 'center' }}>{a}</th>)}
              </tr>
            </thead>
            <tbody>
              {red8.map(a => (
                <tr key={a}>
                  <th style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533' }}>{a}</th>
                  {red8.map(b => {
                    const p = (a * b) % 8;
                    return <td key={b} style={{ padding: '.3rem .5rem', border: '1px solid #1e2533', textAlign: 'center', color: p === 1 ? ACC : '#e2e8f0', fontWeight: p === 1 ? 700 : undefined }}>{p}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="info-box" style={{ marginTop: '.5rem' }}>
        <span className="lbl" style={{ color: ACC }}>Zₙ szorzástábla</span>
        <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
          <span>n = <input type="number" min={2} max={13} className="ila-num" style={{ width: 50 }} value={znVal} onChange={e => setZnVal(Math.min(13, Math.max(2, +e.target.value)))} /></span>
          <button className="op-btn" onClick={() => setFullTable(!fullTable)}>{fullTable ? 'Elrejt' : 'Teljes tábla'}</button>
        </div>
        {fullTable && (
          <div style={{ overflowX: 'auto' }}>
            <p style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.4rem' }}>Z{znVal} szorzástábla (piros=zérusosztó, zöld=1):</p>
            <table style={{ borderCollapse: 'collapse', fontSize: '.8rem' }}>
              <thead>
                <tr>
                  <th style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533' }}>×</th>
                  {els.map(a => <th key={a} style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533', minWidth: '2rem', textAlign: 'center' }}>{a}</th>)}
                </tr>
              </thead>
              <tbody>
                {els.map(a => (
                  <tr key={a}>
                    <th style={{ background: '#1a1f2e', color: '#94a3b8', padding: '.3rem .5rem', border: '1px solid #1e2533' }}>{a}</th>
                    {els.map(b => {
                      const p = (a * b) % znVal;
                      const isZero = p === 0 && a !== 0 && b !== 0;
                      const isIdent = p === 1;
                      return <td key={b} style={{ padding: '.3rem .5rem', border: '1px solid #1e2533', textAlign: 'center', color: isZero ? '#ef4444' : isIdent ? ACC : '#e2e8f0', fontWeight: isZero || isIdent ? 600 : undefined }}>{p}</td>;
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function CaesarCipher() {
  const [msg, setMsg] = useState('SZIA');
  const [k, setK] = useState(7);
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');
  const [cipher, setCipher] = useState('');

  const encode = () => {
    const clean = msg.toUpperCase().replace(/[^A-Z]/g, '');
    const kk = ((k % 26) + 26) % 26;
    const enc = clean.split('').map(c => String.fromCharCode(((c.charCodeAt(0) - 65 + kk) % 26) + 65)).join('');
    setEncoded(enc); setCipher(enc);
  };

  const decode = () => {
    const kk = ((k % 26) + 26) % 26;
    const dec = cipher.toUpperCase().replace(/[^A-Z]/g, '').split('').map(c => String.fromCharCode(((c.charCodeAt(0) - 65 - kk + 26) % 26) + 65)).join('');
    setDecoded(dec);
  };

  const clean = msg.toUpperCase().replace(/[^A-Z]/g, '');
  const kk = ((k % 26) + 26) % 26;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>31. Példa — Caesar-titkosítás (Z₂₆)</span>
      <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>A=0, B=1, …, Z=25; titkosítás: (x+k) mod 26; visszafejtés: (x−k) mod 26.</p>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>Üzenet: <input className="ila-num" style={{ width: 90, textTransform: 'uppercase' }} value={msg} onChange={e => setMsg(e.target.value.toUpperCase())} /></span>
        <span>k=<input type="number" min={1} max={25} className="ila-num" value={k} onChange={e => setK(+e.target.value)} /></span>
        <button className="op-btn is-active" onClick={encode}>Titkosít</button>
      </div>
      {encoded && (
        <div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', margin: '.4rem 0' }}>
            {clean.split('').map((c, i) => {
              const ev = (c.charCodeAt(0) - 65 + kk) % 26;
              const ec = String.fromCharCode(ev + 65);
              return (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '1.6rem', height: '1.6rem', background: '#1e2533', borderRadius: 4, lineHeight: '1.6rem', fontFamily: 'monospace', fontSize: '.85rem', color: '#e2e8f0', textAlign: 'center' }}>{c}</div>
                  <div style={{ fontSize: '.6rem', color: '#475569' }}>+{kk}↓</div>
                  <div style={{ width: '1.6rem', height: '1.6rem', background: `rgba(163,230,53,.15)`, borderRadius: 4, lineHeight: '1.6rem', fontFamily: 'monospace', fontSize: '.85rem', color: ACC, textAlign: 'center' }}>{ec}</div>
                </div>
              );
            })}
          </div>
          <div className="ex-box" style={{ fontSize: '.82rem' }}>
            Eredeti: <strong>{clean}</strong> | Kulcs: k={kk}<br />
            Titkosított: <strong style={{ color: ACC, letterSpacing: '.08em' }}>{encoded}</strong>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', marginTop: '.5rem', fontSize: '.85rem' }}>
        <input className="ila-num" style={{ width: 100, textTransform: 'uppercase' }} placeholder="Kódolt szöveg" value={cipher} onChange={e => setCipher(e.target.value.toUpperCase())} />
        <button className="op-btn" onClick={decode}>Visszafejt</button>
      </div>
      {decoded && <div style={{ marginTop: '.3rem', fontSize: '.82rem', fontFamily: 'monospace', color: ACC }}>Visszafejtve (k={kk}): <strong>{decoded}</strong></div>}
    </div>
  );
}

function ZnArith() {
  const [za, setZa] = useState(3);
  const [zb, setZb] = useState(5);
  const [zn, setZn] = useState(8);
  const [op, setOp] = useState('×');
  const [result, setResult] = useState<{ val: number; note: string } | null>(null);

  const calc = () => {
    const aN = ((za % zn) + zn) % zn, bN = ((zb % zn) + zn) % zn;
    let val = 0, note = '';
    if (op === '+') val = (aN + bN) % zn;
    else if (op === '−') val = ((aN - bN) % zn + zn) % zn;
    else if (op === '×') val = (aN * bN) % zn;
    else {
      const { g, x } = gcdExt(bN, zn);
      if (g !== 1) { setResult({ val: -1, note: `${zb} nem invertálható mod ${zn} (${bN},${zn})=${g}≠1` }); return; }
      const inv = ((x % zn) + zn) % zn;
      val = (aN * inv) % zn;
      note = `${zb}⁻¹ ≡ ${inv} (mod ${zn})`;
    }
    setResult({ val, note });
  };

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Zₙ aritmetika kalkulátor</span>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', alignItems: 'center', margin: '.3rem 0', fontSize: '.85rem' }}>
        <input type="number" className="ila-num" value={za} onChange={e => setZa(+e.target.value)} />
        <select className="ila-select" value={op} onChange={e => setOp(e.target.value)}>
          {['+', '−', '×', '÷'].map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <input type="number" className="ila-num" value={zb} onChange={e => setZb(+e.target.value)} />
        <span>(mod</span>
        <input type="number" min={2} className="ila-num" value={zn} onChange={e => setZn(+e.target.value)} />
        <span>)</span>
        <button className="op-btn is-active" onClick={calc}>Számít</button>
      </div>
      {result && (
        <div className="ex-box" style={{ fontSize: '.82rem' }}>
          {result.val < 0
            ? <span style={{ color: '#ef4444' }}>{result.note}</span>
            : <>{((za % zn) + zn) % zn} {op} {((zb % zn) + zn) % zn} ≡ <strong style={{ color: ACC, fontSize: '1.05rem' }}>{result.val}</strong> (mod {zn}){result.note && <><br />{result.note}</>}</>}
        </div>
      )}
    </div>
  );
}

const t4_theory = String.raw`
<div class="thm-box"><div class="lbl lbl--thm">30–34. Tétel — Zₙ gyűrű és test</div><div class="box-body"><strong>30. Tétel:</strong> \((\mathbb{Z}_n, +, \cdot)\) kommutatív gyűrű; \(\bar a + \bar b = \overline{a+b}\), \(\bar a \cdot \bar b = \overline{a\cdot b}\)<br><strong>32. Tétel:</strong> \(p\) prím \(\Rightarrow \mathbb{Z}_p\) test (minden \(\neq \bar 0\) elem invertálható)<br><strong>34. Tétel:</strong> \(n\) összetett \(\Rightarrow \mathbb{Z}_n\)-ben van zérusosztó \(\Rightarrow\) nem test</div></div>
<div class="ex-box"><div class="lbl lbl--ex">35. Példa — Zérusosztók</div><div class="box-body">\(\mathbb{Z}_4\): \(\bar 2 \cdot \bar 2 = \bar 4 = \bar 0\) (\(\bar 2\) zérusosztó)<br>\(\mathbb{Z}_6\): \(\bar 2 \cdot \bar 3 = \bar 6 = \bar 0\) (\(\bar 2\) és \(\bar 3\) zérusosztók)</div></div>`;

/* ════ TAB 5: RSA titkosítás ════ */
interface RSAState { p: number; q: number; n: number; kphi: number; e: number; d: number }

function RSADemo() {
  const [rsaP, setRsaP] = useState(43);
  const [rsaQ, setRsaQ] = useState(59);
  const [eList, setEList] = useState<number[]>([]);
  const [selE, setSelE] = useState(13);
  const [rsaState, setRsaState] = useState<RSAState>({ p: 43, q: 59, n: 2537, kphi: 2436, e: 13, d: 937 });
  const [info1, setInfo1] = useState('n = 43×59 = 2537, k = φ(n) = 42×58 = 2436');
  const [info2, setInfo2] = useState('e=13, d=937  [ed = 13×937 ≡ 1 (mod 2436) ✓]');
  const [rsaMsg, setRsaMsg] = useState('SZIA');
  const [output, setOutput] = useState('');

  const initRSA = (p = rsaP, q = rsaQ) => {
    if (p === q) { setInfo1('p ≠ q szükséges!'); return; }
    const n = p * q, kphi = (p - 1) * (q - 1);
    const eListNew: number[] = [];
    for (let e = 2; e < Math.min(kphi, 150); e++) if (gcd(e, kphi) === 1) eListNew.push(e);
    const eListSlice = eListNew.slice(0, 30);
    setEList(eListSlice);
    setInfo1(`n = ${p}×${q} = ${n}, k = φ(n) = ${p - 1}×${q - 1} = ${kphi}`);
    const e2 = eListSlice.includes(selE) ? selE : eListSlice[0];
    setSelE(e2);
    const { x } = gcdExt(e2, kphi);
    const d = ((x % kphi) + kphi) % kphi;
    const edModK = (BigInt(e2) * BigInt(d)) % BigInt(kphi);
    setInfo2(`e=${e2}, d=${d}  [ed = ${e2}×${d} ≡ ${edModK} (mod ${kphi}) ✓]`);
    setRsaState({ p, q, n, kphi, e: e2, d });
  };

  const selectE = (ev: number) => {
    setSelE(ev);
    const { x } = gcdExt(ev, rsaState.kphi);
    const d = ((x % rsaState.kphi) + rsaState.kphi) % rsaState.kphi;
    const edModK = (BigInt(ev) * BigInt(d)) % BigInt(rsaState.kphi);
    setInfo2(`e=${ev}, d=${d}  [ed = ${ev}×${d} ≡ ${edModK} (mod ${rsaState.kphi}) ✓]`);
    setRsaState(prev => ({ ...prev, e: ev, d }));
  };

  useEffect(() => { initRSA(); }, []);

  const rsaRun = () => {
    const { n, e, d } = rsaState;
    if (!n || !e || !d) { setOutput('Állítsd be a paramétereket!'); return; }
    const msg = rsaMsg.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
    if (!msg) { setOutput('Írj be latin betűket!'); return; }
    const use2 = n > 2525;
    const blocks: { lbl: string; x: number }[] = [];
    if (use2) {
      for (let i = 0; i < msg.length; i += 2) {
        if (i + 1 < msg.length) blocks.push({ lbl: msg[i] + msg[i + 1], x: (msg.charCodeAt(i) - 65) * 100 + (msg.charCodeAt(i + 1) - 65) });
        else blocks.push({ lbl: msg[i], x: msg.charCodeAt(i) - 65 });
      }
    } else {
      for (let i = 0; i < msg.length; i++) blocks.push({ lbl: msg[i], x: msg.charCodeAt(i) - 65 });
    }
    const rows = blocks.map(({ lbl, x }) => {
      const c = modPow(x, e, n), xBack = modPow(c, d, n);
      return { lbl, x, c, xBack, ok: xBack === x };
    });
    const rowsHtml = rows.map(({ lbl, x, c, xBack, ok }) =>
      `<tr style="border-bottom:1px solid #1e2533"><td style="padding:.35rem;font-family:monospace;color:#e2e8f0">${lbl}</td><td style="padding:.35rem;text-align:center;color:#94a3b8">${x}</td><td style="padding:.35rem;text-align:center;color:${ACC};font-weight:700">${c}</td><td style="padding:.35rem;text-align:center;color:${ok ? '#34d399' : '#ef4444'}">${xBack} ${ok ? '✓' : '✗'}</td></tr>`
    ).join('');
    setOutput(`<div class="ex-box" style="font-size:.82rem;margin-bottom:.5rem">n=${n}, e=${e} (nyilvános) | d=${d} (titkos)<br>Blokkolás: ${use2 ? 'kétjegyű (n>2525)' : 'egyjegyű (n≤2525)'}</div><table style="width:100%;border-collapse:collapse;font-size:.8rem"><thead><tr style="border-bottom:1px solid #334155"><th style="padding:.35rem;color:#64748b;text-align:left">Blokk</th><th style="padding:.35rem;color:#64748b;text-align:center">x</th><th style="padding:.35rem;color:#64748b;text-align:center">c=x^e mod n</th><th style="padding:.35rem;color:#64748b;text-align:center">c^d mod n</th></tr></thead><tbody>${rowsHtml}</tbody></table><div class="thm-box" style="margin-top:.5rem;font-size:.82rem">Titkosított: <strong>${rows.map(r => String(r.c).padStart(use2 ? 4 : 2, '0')).join('')}</strong><br>Visszafejtve: ${rows.every(r => r.ok) ? '<span style="color:#34d399">✓ Helyes!</span>' : '<span style="color:#ef4444">✗ Hiba</span>'}</div>`);
  };

  const preset = () => {
    setRsaP(43); setRsaQ(59); setRsaMsg('SZIA');
    initRSA(43, 59);
    setTimeout(() => { selectE(13); setTimeout(rsaRun, 100); }, 100);
  };

  return (
    <div>
      <Cols>
        <RichTex html={String.raw`
<div class="info-box"><div class="lbl" style="color:#a3e635">RSA algoritmus (Rivest–Shamir–Adleman, 1977)</div><div class="box-body" style="font-size:.82rem">
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">1</div><div>Válasszunk két különböző nagy prímszámot: <strong>p</strong> és <strong>q</strong></div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">2</div><div><strong>n = pq</strong>, <strong>\(k = \varphi (n) = (p-1)(q-1)\)</strong></div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">3</div><div>Válasszunk <strong>\(e\)</strong>-t: \(1 &lt; e &lt; k\) és \((e, k) = 1\)</div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">4</div><div><strong>\(d\)</strong>: \(ed \equiv 1 \pmod{k}\) (e inverze \(\mathbb{Z}_k\)-ban)</div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">5</div><div><strong>Nyilvános kulcs:</strong> \((e, n)\) | <strong>Titkos kulcs:</strong> \(d\)</div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">6</div><div><strong>Titkosítás:</strong> \(c \equiv x^e \pmod{n}\)</div></div>
<div style="background:#12161f;border:1px solid #1e2533;border-radius:8px;padding:.65rem 1rem;display:flex;align-items:flex-start;gap:.65rem;margin:.3rem 0"><div style="background:#a3e635;color:#050a00;border-radius:50%;width:1.4rem;height:1.4rem;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:800;flex-shrink:0">7</div><div><strong>Visszafejtés:</strong> \(x \equiv c^d \pmod{n}\)</div></div>
</div></div>
<div class="thm-box"><div class="lbl lbl--thm">Helyesség és biztonság</div><div class="box-body" style="font-size:.82rem"><strong>Helyesség:</strong> \(ed - 1 = k\ell = (p-1)(q-1)\ell\)<br>Fermat tétele: \(x^{p-1} \equiv 1 \pmod{p} \Rightarrow c^d \equiv x \pmod{p}\)<br>Hasonlóan \(\bmod\, q\); Kínai maradéktétel: \(c^d \equiv x \pmod{n}\) ✓<br><strong>Biztonság:</strong> \(n = pq\) felbontása (nagy prímek esetén) computationally intractable.</div></div>`} />
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Mini-RSA demo — 38. Példa alapján</span>
          <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Kis prímekkel szemlélteti az RSA működését lépésről lépésre.</p>
          <div style={{ marginBottom: '.5rem' }}>
            <div style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.3rem' }}>① Prímek választása:</div>
            <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.85rem' }}>
              <span>p=</span>
              <select className="ila-select" value={rsaP} onChange={e => { setRsaP(+e.target.value); initRSA(+e.target.value, rsaQ); }}>
                {[43, 41, 37, 31, 29, 23].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <span>q=</span>
              <select className="ila-select" value={rsaQ} onChange={e => { setRsaQ(+e.target.value); initRSA(rsaP, +e.target.value); }}>
                {[59, 53, 47, 43, 41, 37].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div style={{ fontSize: '.8rem', color: '#7dd3fc', background: 'rgba(56,189,248,.08)', padding: '.35rem .7rem', borderRadius: 6, marginTop: '.3rem' }}>{info1}</div>
          </div>
          <div style={{ marginBottom: '.5rem' }}>
            <div style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.3rem' }}>② Nyilvános kitevő (e) választása:</div>
            <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.85rem' }}>
              <select className="ila-select" value={selE} onChange={e => selectE(+e.target.value)}>
                {eList.map(v => <option key={v} value={v}>{v}</option>)}
              </select>
              <span style={{ fontSize: '.78rem', color: '#8892a4' }}>(gcd(e,k)=1)</span>
            </div>
            <div style={{ fontSize: '.8rem', color: '#7dd3fc', background: 'rgba(56,189,248,.08)', padding: '.35rem .7rem', borderRadius: 6, marginTop: '.3rem' }}>{info2}</div>
          </div>
          <div style={{ marginBottom: '.5rem' }}>
            <div style={{ fontSize: '.8rem', color: '#8892a4', marginBottom: '.3rem' }}>③ Üzenet titkosítása (latin betűk, max 4):</div>
            <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', fontSize: '.85rem' }}>
              <input className="ila-num" style={{ width: 80, textTransform: 'uppercase' }} value={rsaMsg} onChange={e => setRsaMsg(e.target.value.toUpperCase())} placeholder="pl. SZIA" />
              <button className="op-btn is-active" onClick={rsaRun}>Titkosít & Visszafejt</button>
            </div>
          </div>
          {output && <RichTex key={output.slice(0, 30)} html={output} />}
          <button className="op-btn" style={{ marginTop: '.5rem' }} onClick={preset}>38. Példa (p=43,q=59,e=13,"SZIA")</button>
        </div>
      </Cols>
    </div>
  );
}

const TABS: Tab[] = [
  {
    id: 'kong', label: 'Kongruenciák',
    content: (
      <Cols>
        <RichTex html={t1_theory} />
        <div><CongChecker /><ISBNChecker /></div>
      </Cols>
    ),
  },
  {
    id: 'keq', label: 'Kongruencia egyenletek',
    content: (
      <Cols>
        <RichTex html={t2_theory} />
        <div><LCSolver /><CRTSolver /></div>
      </Cols>
    ),
  },
  {
    id: 'euler', label: 'Euler & Fermat',
    content: (
      <Cols>
        <RichTex html={t3_theory} />
        <div><PhiCalc /><ModExpCalc /></div>
      </Cols>
    ),
  },
  {
    id: 'mrad', label: 'Maradékosztályok',
    content: (
      <Cols>
        <div><RichTex html={t4_theory} /><ZnTableComp /></div>
        <div><CaesarCipher /><ZnArith /></div>
      </Cols>
    ),
  },
  {
    id: 'rsa', label: 'RSA titkosítás',
    content: <RSADemo />,
  },
];

export default function Ch18() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet 2. — fejezet</p>
      <h1 className="ila__title">Számelmélet 2.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
