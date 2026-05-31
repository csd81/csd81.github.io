import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ── Math helpers ──
function gcd(a: number, b: number): number {
  while (b) { const t = b; b = a % b; a = t; } return a;
}
function C(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
function factorial(n: number): number {
  let r = 1; for (let i = 2; i <= n; i++) r *= i; return r;
}
function derangement(n: number): number {
  if (n === 0) return 1;
  if (n === 1) return 0;
  let prev2 = 1, prev1 = 0;
  for (let i = 2; i <= n; i++) { const cur = (i - 1) * (prev1 + prev2); prev2 = prev1; prev1 = cur; }
  return prev1;
}
function primeFactors(n: number): Map<number, number> {
  const f = new Map<number, number>();
  for (let p = 2; p * p <= n; p++) {
    while (n % p === 0) { f.set(p, (f.get(p) ?? 0) + 1); n = Math.floor(n / p); }
  }
  if (n > 1) f.set(n, (f.get(n) ?? 0) + 1);
  return f;
}
function eulerPhi(n: number): number {
  const f = primeFactors(n);
  let r = n;
  f.forEach((_, p) => { r = (r / p) * (p - 1); });
  return Math.round(r);
}
function surjections(n: number, m: number): number {
  let s = 0;
  for (let k = 0; k <= m; k++) s += (k % 2 === 0 ? 1 : -1) * C(m, k) * Math.pow(m - k, n);
  return Math.round(s);
}

// ── Tab 1: Szitaformula calculators ──
function SitaCalc() {
  const [a2, setA2] = useState(18); const [b2, setB2] = useState(15); const [ab2, setAb2] = useState(10);
  const [a3, setA3] = useState(20); const [b3, setB3] = useState(25); const [c3, setC3] = useState(15);
  const [ab3, setAb3] = useState(8); const [ac3, setAc3] = useState(5); const [bc3, setBc3] = useState(7); const [abc3, setAbc3] = useState(3);

  const union2 = a2 + b2 - ab2;
  const union3 = a3 + b3 + c3 - ab3 - ac3 - bc3 + abc3;

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.75rem' }}>
        <span className="lbl" style={{ color: '#10b981' }}>2 halmazos számológép</span>
        <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.84rem' }}>
          <span>|A| = <input type="number" min={0} max={100} className="ila-num" value={a2} onChange={(e) => setA2(+e.target.value)} /></span>
          <span>|B| = <input type="number" min={0} max={100} className="ila-num" value={b2} onChange={(e) => setB2(+e.target.value)} /></span>
          <span>|A∩B| = <input type="number" min={0} max={100} className="ila-num" value={ab2} onChange={(e) => setAb2(+e.target.value)} /></span>
        </div>
        <div className="def-box" style={{ fontSize: '.83rem' }}>
          |A∪B| = {a2} + {b2} − {ab2} = <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '1.05rem' }}>{union2}</strong>
        </div>
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>3 halmazos számológép</span>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.84rem' }}>
          <span>|A| <input type="number" min={0} max={200} className="ila-num" value={a3} onChange={(e) => setA3(+e.target.value)} /></span>
          <span>|B| <input type="number" min={0} max={200} className="ila-num" value={b3} onChange={(e) => setB3(+e.target.value)} /></span>
          <span>|C| <input type="number" min={0} max={200} className="ila-num" value={c3} onChange={(e) => setC3(+e.target.value)} /></span>
        </div>
        <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.84rem' }}>
          <span>|A∩B| <input type="number" min={0} max={200} className="ila-num" value={ab3} onChange={(e) => setAb3(+e.target.value)} /></span>
          <span>|A∩C| <input type="number" min={0} max={200} className="ila-num" value={ac3} onChange={(e) => setAc3(+e.target.value)} /></span>
          <span>|B∩C| <input type="number" min={0} max={200} className="ila-num" value={bc3} onChange={(e) => setBc3(+e.target.value)} /></span>
          <span>|A∩B∩C| <input type="number" min={0} max={200} className="ila-num" value={abc3} onChange={(e) => setAbc3(+e.target.value)} /></span>
        </div>
        <div className="def-box" style={{ fontSize: '.83rem' }}>
          |A∪B∪C| = {a3}+{b3}+{c3} − {ab3} − {ac3} − {bc3} + {abc3} = <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '1.05rem' }}>{union3}</strong>
        </div>
      </div>
    </div>
  );
}

// ── Tab 2: Derangements ──
function DerangementWidget() {
  const [n, setN] = useState(5);
  const nn = Math.min(12, Math.max(1, n));
  const dn = derangement(nn);
  const fn = factorial(nn);
  const prob = (dn / fn * 100).toFixed(4);

  // generate all derangements for n<=4
  let derangements: string[] = [];
  if (nn <= 4) {
    const elems = Array.from({ length: nn }, (_, i) => i + 1);
    const perms: number[][] = [];
    function permute(arr: number[], cur: number[]) {
      if (cur.length === nn) { perms.push([...cur]); return; }
      arr.forEach((v, i) => { const rest = [...arr]; rest.splice(i, 1); permute(rest, [...cur, v]); });
    }
    permute(elems, []);
    derangements = perms.filter((p) => p.every((v, i) => v !== i + 1)).map((p) => '(' + p.join('') + ')');
  }

  const tableRows = Array.from({ length: 10 }, (_, i) => i + 1).map((ni) => ({
    n: ni, fn: factorial(ni), dn: derangement(ni), p: (derangement(ni) / factorial(ni) * 100).toFixed(4),
  }));

  const tableHtml = '<table class="cayley" style="width:100%"><thead><tr><th>n</th><th>n!</th><th>D_n</th><th>P(elcserélés)</th></tr></thead><tbody>' +
    tableRows.map((r) => `<tr><td>${r.n}</td><td>${r.fn.toLocaleString()}</td><td style="color:#34d399;font-family:monospace;">${r.dn.toLocaleString()}</td><td style="color:#f59e0b;">${r.p}%</td></tr>`).join('') +
    '</tbody></table>';

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Szubfaktoriális számológép</span>
            <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
              n = <input type="number" min={1} max={12} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} />
            </div>
            <div className="def-box" style={{ fontSize: '.83rem' }}>
              <strong>n = {nn}</strong><br />
              D_{nn} = <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '1.05rem' }}>{dn.toLocaleString()}</strong><br />
              {nn}! = {fn.toLocaleString()}<br />
              Valószínűség: <span style={{ color: '#f59e0b' }}>{prob}%</span> (határérték: 36.79%)
            </div>
          </div>
          {derangements.length > 0 && (
            <div className="info-box">
              <span className="lbl" style={{ color: '#10b981' }}>Összes derangement (n ≤ 4)</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginTop: '.4rem' }}>
                {derangements.map((d, i) => (
                  <span key={i} style={{ background: 'rgba(16,185,129,.1)', border: '1px solid #10b981', borderRadius: 5, padding: '.15rem .45rem', fontSize: '.78rem', fontFamily: 'monospace', color: '#34d399' }}>{d}</span>
                ))}
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="info-box" style={{ overflowX: 'auto' }}>
            <span className="lbl" style={{ color: '#10b981' }}>Táblázat D₁ … D₁₀</span>
            <RichTex html={tableHtml} />
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 3: Additív halmazfüggvény ──
const WEIGHTS = [3, 1, 4, 1, 5, 9, 2, 6];

function MeasureWidget() {
  const [setA, setSetA] = useState<Set<number>>(new Set());
  const [setB, setSetB] = useState<Set<number>>(new Set());

  function toggleA(i: number) {
    setSetA((prev) => { const s = new Set(prev); if (s.has(i)) s.delete(i); else s.add(i); return s; });
  }
  function toggleB(i: number) {
    setSetB((prev) => { const s = new Set(prev); if (s.has(i)) s.delete(i); else s.add(i); return s; });
  }

  const mu = (arr: Set<number>) => [...arr].reduce((s, i) => s + WEIGHTS[i - 1], 0);
  const muA = mu(setA), muB = mu(setB);
  const AB = new Set([...setA].filter((x) => setB.has(x)));
  const AuB = new Set([...setA, ...setB]);
  const muAB = mu(AB), muAuB = mu(AuB);
  const formula = muA + muB - muAB;
  const match = formula === muAuB;

  return (
    <div>
      <Cols>
        <div>
          <RichTex className="def-box" html={String.raw`
Egy \(\mu: 2^X \to \mathbb{R}_{\ge 0}\) függvény <em>additív halmazfüggvény</em> (mérték), ha:<br>
(1) \(\mu(\emptyset)=0\)<br>
(2) Ha \(A \cap B = \emptyset\), akkor \(\mu(A\cup B)=\mu(A)+\mu(B)\)
          `} />
          <RichTex className="thm-box" html={String.raw`
<strong>Példák:</strong><br>
— Kardinalitás: \(\mu(A)=|A|\)<br>
— Valószínűség: \(\mu(A)=P(A)\)<br>
— Terület, súly, időtartam<br><br>
A szitaformula tetszőleges mértékre általánosítható:<br>
\(\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)\)
          `} />
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Interaktív mértékszámítás (X = {'{'}1,…,8{'}'})</span>
            <p style={{ fontSize: '.78rem', color: '#64748b', margin: '.3rem 0' }}>Kattints → A halmazhoz, jobb klikk → B halmazhoz</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem', margin: '.5rem 0', alignItems: 'center' }}>
              <span style={{ fontSize: '.78rem', color: '#64748b' }}>Elemek (súlyok: {WEIGHTS.join(', ')}):</span>
              {Array.from({ length: 8 }, (_, i) => i + 1).map((i) => {
                const inA = setA.has(i), inB = setB.has(i);
                let borderColor = '#334155', bg = 'transparent', color = '#94a3b8';
                if (inA && inB) { borderColor = '#10b981'; bg = 'rgba(16,185,129,.2)'; color = '#34d399'; }
                else if (inA) { borderColor = '#38bdf8'; bg = 'rgba(56,189,248,.15)'; color = '#38bdf8'; }
                else if (inB) { borderColor = '#f59e0b'; bg = 'rgba(245,158,11,.12)'; color = '#f59e0b'; }
                return (
                  <div
                    key={i}
                    title={`Súly: ${WEIGHTS[i - 1]}`}
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      width: 26, height: 26, borderRadius: '50%', fontSize: '.72rem', fontWeight: 700,
                      border: `2px solid ${borderColor}`, background: bg, color,
                      cursor: 'pointer', userSelect: 'none', transition: 'all .2s',
                    }}
                    onClick={() => toggleA(i)}
                    onContextMenu={(e) => { e.preventDefault(); toggleB(i); }}
                  >{i}</div>
                );
              })}
            </div>
            <div style={{ fontSize: '.78rem', margin: '.3rem 0', color: '#94a3b8' }}>
              <span style={{ color: '#38bdf8' }}>A = {'{' + [...setA].sort((a, b) => a - b).join(',') + '}'}</span>{' '}
              <span style={{ color: '#f59e0b' }}>B = {'{' + [...setB].sort((a, b) => a - b).join(',') + '}'}</span>
            </div>
            <div className="def-box" style={{ fontSize: '.83rem' }}>
              μ(A) = {muA}, μ(B) = {muB}, μ(A∩B) = {muAB}<br />
              μ(A∪B) = {muA}+{muB}−{muAB} = <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{formula}</strong><br />
              Közvetlen: μ({'{' + [...AuB].sort((a, b) => a - b).join(',') + '}'}) = <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{muAuB}</strong>{' '}
              <span style={{ color: match ? '#34d399' : '#ef4444' }}>{match ? '✓ Egyezik' : '✗ Nem egyezik'}</span>
            </div>
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 4: Euler-φ ──
function EulerPhiWidget() {
  const [n, setN] = useState(12);
  const nn = Math.max(1, Math.min(1000, n));
  const phi = eulerPhi(nn);
  const f = primeFactors(nn);
  const factStr = [...f.entries()].map(([p, e]) => e === 1 ? String(p) : `${p}^${e}`).join('·') || String(nn);
  const prodStr = [...f.keys()].map((p) => `(1−1/${p})`).join('·');
  const coprimes = Array.from({ length: nn }, (_, i) => i + 1).filter((k) => gcd(k, nn) === 1);

  const tableHtml = '<table class="cayley" style="width:100%"><thead><tr><th>n</th><th>φ(n)</th><th>Prímtényezők</th></tr></thead><tbody>' +
    Array.from({ length: 20 }, (_, i) => i + 1).map((ni) => {
      const phi = eulerPhi(ni);
      const factStr = [...primeFactors(ni).keys()].join(', ') || '—';
      return `<tr><td>${ni}</td><td style="color:#34d399;font-family:monospace;">${phi}</td><td style="color:#64748b;font-size:.78rem;">${factStr}</td></tr>`;
    }).join('') + '</tbody></table>';

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Euler-φ számológép</span>
            <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
              n = <input type="number" min={1} max={1000} className="ila-num" style={{ width: 80 }} value={n} onChange={(e) => setN(+e.target.value)} />
            </div>
            <div className="def-box" style={{ fontSize: '.83rem' }}>
              <strong>n = {nn}</strong>, φ({nn}) = <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '1.05rem' }}>{phi}</strong><br />
              Faktorizáció: {factStr}<br />
              Képlet: {nn} · {prodStr || '1'} = {phi}
            </div>
          </div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>k értékek, ahol gcd(k,{nn})=1</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginTop: '.4rem' }}>
              {Array.from({ length: nn }, (_, i) => i + 1).map((k) => {
                const ok = gcd(k, nn) === 1;
                return (
                  <span key={k} title={`gcd(${k},${nn})=${gcd(k, nn)}`} style={{
                    background: ok ? 'rgba(16,185,129,.1)' : '#0d1117',
                    border: `1px solid ${ok ? '#10b981' : '#334155'}`,
                    borderRadius: 5, padding: '.15rem .4rem', fontSize: '.78rem', fontFamily: 'monospace',
                    color: ok ? '#34d399' : '#64748b',
                  }}>{k}</span>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="info-box" style={{ overflowX: 'auto' }}>
            <span className="lbl" style={{ color: '#10b981' }}>φ(1)…φ(20) táblázat</span>
            <RichTex html={tableHtml} />
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 5: Szürjektív függvények ──
function SurjWidget() {
  const [sn, setSn] = useState(5);
  const [sm, setSm] = useState(3);
  const nn = Math.max(1, Math.min(10, sn));
  const mm = Math.max(1, Math.min(8, sm));
  const total = Math.pow(mm, nn);
  const surj = nn >= mm ? surjections(nn, mm) : 0;
  const pct = total > 0 ? (surj / total * 100).toFixed(2) : '0';

  const cases: [number, number][] = [[3, 2], [4, 2], [4, 3], [5, 3], [5, 4], [6, 3], [6, 4], [7, 3]];
  const tableHtml = '<table class="cayley" style="width:100%"><thead><tr><th>n</th><th>m</th><th>Összes (mⁿ)</th><th>Szürjektív</th><th>Arány %</th></tr></thead><tbody>' +
    cases.map(([n, m]) => {
      const tot = Math.pow(m, n);
      const s = surjections(n, m);
      const p = (s / tot * 100).toFixed(2);
      return `<tr><td>${n}</td><td>${m}</td><td>${tot.toLocaleString()}</td><td style="color:#34d399;font-family:monospace;">${s.toLocaleString()}</td><td style="color:#f59e0b;">${p}%</td></tr>`;
    }).join('') + '</tbody></table>';

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Szürjekciószámló</span>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>n (domain) = <input type="number" min={1} max={10} className="ila-num" value={sn} onChange={(e) => setSn(+e.target.value)} /></span>
              <span>m (kodomain) = <input type="number" min={1} max={8} className="ila-num" value={sm} onChange={(e) => setSm(+e.target.value)} /></span>
            </div>
            <div className="def-box" style={{ fontSize: '.83rem' }}>
              Összes függvény: <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{total.toLocaleString()}</strong><br />
              Szürjektív: <strong style={{ color: '#34d399', fontFamily: 'monospace' }}>{surj.toLocaleString()}</strong><br />
              Arány: <span style={{ color: '#f59e0b' }}>{pct}%</span>
            </div>
          </div>
          <RichTex className="ex-box" html={String.raw`
<strong>Stirling 2. számok kapcsolata:</strong><br>
A szürjekciók száma = \(m! \cdot S(n,m)\), ahol \(S(n,m)\) a Stirling 2. fajú száma.<br>
Pl. \(S(4,2)=7\), szürjekciók: \(2!\cdot7=14\).
          `} />
        </div>
        <div>
          <div className="info-box" style={{ overflowX: 'auto' }}>
            <span className="lbl" style={{ color: '#10b981' }}>Összehasonlítás: összes vs. szürjektív</span>
            <RichTex html={tableHtml} />
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Static theory ──
const t1theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Befoglalás-kizárás elve</h5>
<div class="thm-box"><div class="box-body">
<strong>2 halmazra:</strong><br>\(|A\cup B| = |A|+|B|-|A\cap B|\)<br><br>
<strong>3 halmazra:</strong><br>
\(|A\cup B\cup C| = |A|+|B|+|C|\)<br>
\(-|A\cap B|-|A\cap C|-|B\cap C|\)<br>
\(+|A\cap B\cap C|\)<br><br>
<strong>Általánosan:</strong><br>
\(\left|\bigcup_{i=1}^{n} A_i\right| = \sum_{k=1}^{n}(-1)^{k-1}\!\!\!\sum_{1\le i_1&lt;\cdots&lt;i_k\le n}\!\!\!\left|A_{i_1}\cap\cdots\cap A_{i_k}\right|\)
</div></div>
<div class="ex-box"><div class="box-body"><strong>Osztály példa:</strong> 30 tanuló, 18 tanul franciát, 15 németet, 10 mindkettőt.<br>
Legalább egyet tanul: \(18+15-10=23\).</div></div>`;

const t2theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Elcserélt levelek — Derangements</h5>
<div class="thm-box"><div class="box-body">
\[D_n = n!\sum_{i=0}^{n}\frac{(-1)^i}{i!}\]
Rekurzió: \(D_n = (n-1)(D_{n-1}+D_{n-2})\), \(D_1=0\), \(D_2=1\).
</div></div>
<div class="thm-box"><div class="box-body">Valószínűség: \(P(D_n) = D_n/n! \to 1/e \approx 0.3679\)</div></div>`;

const t3theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Additív halmazfüggvények</h5>`;

const t4theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Euler-féle φ (fi) függvény</h5>
<div class="thm-box"><div class="box-body">
\[\varphi(n) = \left|\{k \in \{1,\ldots,n\} : \gcd(k,n)=1\}\right|\]
Prímfaktorizáción át:<br>
\[\varphi(n) = n \prod_{p \mid n} \left(1-\frac{1}{p}\right)\]
</div></div>
<div class="thm-box"><div class="box-body">
<strong>Főbb tulajdonságok:</strong><br>
— Ha \(p\) prím: \(\varphi(p)=p-1\)<br>
— \(\sum_{d \mid n} \varphi(d) = n\)<br>
— Multiplikativitás: \(\gcd(a,b)=1 \Rightarrow \varphi(ab)=\varphi(a)\varphi(b)\)
</div></div>`;

const t5theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Szürjektív függvények számlálása</h5>
<div class="thm-box"><div class="box-body">
Szürjektív \(f:\{1,\ldots,n\}\to\{1,\ldots,m\}\) függvények száma:<br>
\[\sum_{k=0}^{m}(-1)^k\binom{m}{k}(m-k)^n\]
A befoglalás-kizárás elvével: kivonjuk az összes olyan függvényt, amely kihagyja legalább egy képelemet.
</div></div>
<div class="ex-box"><div class="box-body"><strong>Alkalmazás:</strong> hányféleképpen osztható el \(n\) különböző golyó \(m\) különböző urnában úgy, hogy minden urna kapjon legalább egyet?</div></div>`;

const TABS: Tab[] = [
  { id: 'sita', label: 'Szitaformula', content: <div><RichTex html={t1theory} /><SitaCalc /></div> },
  { id: 'dng', label: 'Elcserélt levelek', content: <div><RichTex html={t2theory} /><DerangementWidget /></div> },
  { id: 'meas', label: 'Additív halmazfv.', content: <div><RichTex html={t3theory} /><MeasureWidget /></div> },
  { id: 'phi', label: 'Euler-φ függvény', content: <div><RichTex html={t4theory} /><EulerPhiWidget /></div> },
  { id: 'surj', label: 'Szürjektív függvények', content: <div><RichTex html={t5theory} /><SurjWidget /></div> },
];

export default function DimatCh4() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika IV — fejezet</p>
      <h1 className="ila__title">A logikai szitaformula</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
