import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../../ila/components/kit';

// ── Math helpers ──
function C(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  k = Math.min(k, n - k);
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}

const PASCAL: number[][] = [];
for (let i = 0; i <= 12; i++) {
  PASCAL.push([]);
  for (let j = 0; j <= i; j++) PASCAL[i].push(C(i, j));
}

// ── Tab 1: Binomiális kifejtő ──
function BinomExpander() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [n, setN] = useState(4);

  const nn = Math.min(8, Math.max(1, n));
  const terms: { coef: number; ap: number; bp: number; val: number }[] = [];
  let total = 0;
  for (let i = 0; i <= nn; i++) {
    const coef = C(nn, i);
    const ap = Math.pow(a, nn - i);
    const bp = Math.pow(b, i);
    const val = coef * ap * bp;
    total += val;
    terms.push({ coef, ap, bp, val });
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#10b981' }}>Binomiális kifejtés kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" min={-9} max={9} className="ila-num" value={a} onChange={(e) => setA(+e.target.value)} /></span>
        <span>b = <input type="number" min={-9} max={9} className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
        <span>n = <input type="number" min={1} max={8} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', marginBottom: '.5rem' }}>
        {terms.map((t, i) => (
          <div key={i} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: '.35rem', padding: '.2rem .55rem', fontSize: '.78rem', fontFamily: 'monospace', color: '#94a3b8' }}>
            <span style={{ color: '#38bdf8' }}>C({nn},{i})</span>·{t.ap}·{t.bp} = <span style={{ color: '#34d399' }}>{t.val}</span>
          </div>
        ))}
      </div>
      <RichTex key={`${a}${b}${n}`} className="def-box" html={String.raw`\((${a}+${b})^{${nn}} = ${total.toLocaleString('hu-HU')}\)`} />
    </div>
  );
}

// ── Tab 2: Pascal-háromszög ──
function PascalTriangle() {
  const [selN, setSelN] = useState<number | null>(null);
  const [selK, setSelK] = useState<number | null>(null);
  const [hlMode, setHlMode] = useState<'none' | 'diag' | 'pow'>('none');

  const maxVal = Math.max(...PASCAL.flat());

  function getOutline(n: number, k: number): string {
    if (hlMode === 'diag') return (k === 3 || k === 4) ? '2px solid #f59e0b' : 'none';
    if (hlMode === 'pow') {
      const s = PASCAL[n].reduce((a, b) => a + b, 0);
      return `2px solid rgba(56,189,248,${Math.min(1, s / 512)})`;
    }
    return 'none';
  }

  const info =
    selN !== null && selK !== null
      ? (() => {
          const val = C(selN, selK);
          const p1 = selN > 0 && selK > 0 ? C(selN - 1, selK - 1) : 0;
          const p2 = selN > 0 && selK <= selN - 1 ? C(selN - 1, selK) : 0;
          return `C(${selN},${selK}) = ${val} | Pascal: ${p1} + ${p2} = ${p1 + p2} ${p1 + p2 === val && selN > 0 ? '✓' : ''}`;
        })()
      : 'Kattints egy cellára!';

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.75rem' }}>
              <button className={`op-btn${hlMode === 'diag' ? ' is-active' : ''}`} onClick={() => setHlMode(hlMode === 'diag' ? 'none' : 'diag')}>Átlók kiemelése</button>
              <button className={`op-btn${hlMode === 'pow' ? ' is-active' : ''}`} onClick={() => setHlMode(hlMode === 'pow' ? 'none' : 'pow')}>Sor összegek (2ⁿ)</button>
              <button className="op-btn" onClick={() => setHlMode('none')}>Törlés</button>
            </div>
            <div style={{ overflowX: 'auto' }}>
              {PASCAL.map((row, ni) => (
                <div key={ni} style={{ display: 'flex', justifyContent: 'center', margin: '1px 0' }}>
                  {row.map((val, ki) => {
                    const t = val / maxVal;
                    const bg = `rgba(16,185,129,${0.04 + t * 0.7})`;
                    const color = t > 0.4 ? '#fff' : '#94a3b8';
                    const isSel = selN === ni && selK === ki;
                    return (
                      <div
                        key={ki}
                        className="pascal-cell"
                        style={{
                          background: bg,
                          color,
                          width: 36,
                          height: 36,
                          outline: isSel ? '2px solid #10b981' : getOutline(ni, ki),
                          boxShadow: isSel ? '0 0 8px rgba(16,185,129,.6)' : undefined,
                          transform: isSel ? 'scale(1.2)' : undefined,
                          cursor: 'pointer',
                          fontSize: '.75rem',
                          fontWeight: 700,
                          fontFamily: 'monospace',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 6,
                          margin: 1,
                          transition: 'all .15s',
                        }}
                        title={`C(${ni},${ki}) = ${val}`}
                        onClick={() => { setSelN(ni); setSelK(ki); }}
                      >
                        {val > 999 ? '…' : val}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="def-box" style={{ fontSize: '.83rem', minHeight: 60, color: selN !== null ? undefined : '#64748b' }}>
            <span className="lbl" style={{ color: '#10b981' }}>Kiválasztott cella</span>
            {info}
          </div>
          <RichTex className="thm-box" html={String.raw`
<strong>Főbb azonosságok:</strong><br>
\(\binom{n}{0}=\binom{n}{n}=1\)<br>
\(\binom{n}{k}=\binom{n}{n-k}\) (szimmetria)<br>
\(\binom{n-1}{k-1}+\binom{n-1}{k}=\binom{n}{k}\) (Pascal-szabály)
          `} />
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 3: Összegzés azonosság-ellenőrző ──
type SumIdKey = 'all' | 'alt' | 'wt' | 'vdm' | 'upper';

function SumChecker() {
  const [idKey, setIdKey] = useState<SumIdKey>('all');
  const [n, setN] = useState(5);
  const [k, setK] = useState(3);
  const [m, setM] = useState(4);
  const [r, setR] = useState(3);

  let lhs = 0, rhs = 0, label = '';
  if (idKey === 'all') {
    for (let i = 0; i <= n; i++) lhs += C(n, i);
    rhs = Math.pow(2, n);
    label = `Σ C(${n},i) = ${lhs} | 2^${n} = ${rhs}`;
  } else if (idKey === 'alt') {
    for (let i = 0; i <= n; i++) lhs += Math.pow(-1, i) * C(n, i);
    rhs = 0;
    label = `Σ (-1)^i·C(${n},i) = ${lhs} | 0 = ${rhs}`;
  } else if (idKey === 'wt') {
    for (let i = 0; i <= n; i++) lhs += i * C(n, i);
    rhs = n * Math.pow(2, n - 1);
    label = `Σ i·C(${n},i) = ${lhs} | ${n}·2^${n - 1} = ${rhs}`;
  } else if (idKey === 'vdm') {
    for (let i = 0; i <= k; i++) lhs += C(n, i) * C(m, k - i);
    rhs = C(n + m, k);
    label = `Σ C(${n},i)·C(${m},${k}-i) = ${lhs} | C(${n + m},${k}) = ${rhs}`;
  } else {
    for (let i = 0; i <= r; i++) lhs += C(n + i, i);
    rhs = C(n + r + 1, r);
    label = `Σ C(${n}+i,i) i=0..${r} = ${lhs} | C(${n + r + 1},${r}) = ${rhs}`;
  }
  const ok = Math.abs(lhs - rhs) < 0.001;

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#10b981' }}>Összegzési azonosság numerikus ellenőrző</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.75rem', margin: '.5rem 0', fontSize: '.84rem', alignItems: 'center' }}>
          <span>
            Azonosság:{' '}
            <select className="ila-select" value={idKey} onChange={(e) => setIdKey(e.target.value as SumIdKey)}>
              <option value="all">Σ C(n,i) = 2ⁿ</option>
              <option value="alt">Σ (-1)ⁱ C(n,i) = 0</option>
              <option value="wt">Σ i·C(n,i) = n·2ⁿ⁻¹</option>
              <option value="vdm">Vandermonde</option>
              <option value="upper">Felső összegzés</option>
            </select>
          </span>
          <span>n = <input type="number" min={1} max={15} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
          <span>k = <input type="number" min={0} max={15} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
          <span>m = <input type="number" min={1} max={15} className="ila-num" value={m} onChange={(e) => setM(+e.target.value)} /></span>
          <span>r = <input type="number" min={0} max={15} className="ila-num" value={r} onChange={(e) => setR(+e.target.value)} /></span>
        </div>
        <div className="ex-box" style={{ fontSize: '.83rem' }}>
          {label}<br />
          <span style={{ color: ok ? '#34d399' : '#ef4444', fontWeight: 700 }}>{ok ? '✓ Igaz' : '✗ Eltérés!'}</span>
        </div>
      </div>
    </div>
  );
}

// ── Tab 4: Rugalmas pénzérmék (Stars & Bars + Coin sim) ──
function CoinAndStars() {
  const [sbN, setSbN] = useState(3);
  const [sbK, setSbK] = useState(4);
  const [coinResult, setCoinResult] = useState<string | null>(null);

  const val = C(sbN + sbK - 1, sbK);

  // generate a few examples
  const examples: string[] = [];
  if (sbK <= 8 && sbN <= 5) {
    function gen(rem: number, types: number, cur: number[]): void {
      if (examples.length >= 6) return;
      if (types === 1) { examples.push([...cur, rem].map((cnt, i) => '★'.repeat(cnt) + (i < sbN - 1 ? '|' : '')).join('')); return; }
      for (let i = 0; i <= rem && examples.length < 6; i++) gen(rem - i, types - 1, [...cur, i]);
    }
    gen(sbK, sbN, []);
  }

  function simCoin() {
    const p = (3 + Math.sqrt(3)) / 6;
    let heads = 0, tails = 0, total = 0;
    for (let i = 0; i < 200; i++) {
      const d1 = Math.random() < p;
      const d2 = Math.random() < p;
      if (d1 && !d2) { heads++; total++; }
      else if (!d1 && d2) { tails++; total++; }
    }
    setCoinResult(`200 dobáspár: Fej=${heads}, Írás=${tails}, Érvénytelen=${200 - total} | Fej arány: ${total > 0 ? (heads / total * 100).toFixed(1) : 0}% (várt: 50%)`);
  }

  return (
    <div>
      <Cols>
        <div>
          <RichTex className="thm-box" html={String.raw`
<strong>Ismétléses kombináció — csillagok és korlátok</strong><br>
\[C^{ism}(n,k) = \binom{n+k-1}{k}\]
\(n\) különböző típusból \(k\) darabot választunk visszatevéssel.
          `} />
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Stars and bars kalkulátor</span>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', fontSize: '.85rem', margin: '.4rem 0' }}>
              <span>n (típus) = <input type="number" min={1} max={8} className="ila-num" value={sbN} onChange={(e) => setSbN(+e.target.value)} /></span>
              <span>k (db) = <input type="number" min={0} max={10} className="ila-num" value={sbK} onChange={(e) => setSbK(+e.target.value)} /></span>
            </div>
            <div className="def-box" style={{ fontSize: '.83rem' }}>
              C({sbN}+{sbK}-1, {sbK}) = C({sbN + sbK - 1}, {sbK}) = <strong style={{ color: '#34d399', fontFamily: 'monospace', fontSize: '1.05rem' }}>{val}</strong>
            </div>
            {examples.length > 0 && (
              <div style={{ background: '#0d1117', border: '1px solid #1e2533', borderRadius: 8, padding: '.6rem 1rem', marginTop: '.5rem', fontFamily: 'monospace', fontSize: '.88rem', color: '#34d399', wordBreak: 'break-all', lineHeight: 2 }}>
                {examples.map((e, i) => <div key={i}>{e}</div>)}
              </div>
            )}
            {(sbK > 8 || sbN > 5) && (
              <div style={{ color: '#6b7280', fontSize: '.8rem', marginTop: '.4rem' }}>(Túl nagy a vizualizációhoz)</div>
            )}
          </div>
        </div>
        <div>
          <RichTex className="thm-box" html={String.raw`
<strong>Elfogult pénzérme</strong> — \(p = \dfrac{3+\sqrt{3}}{6} \approx 0.7887\)<br><br>
\(P(\text{első fej, második írás}) = p(1-p)\)<br>
\(P(\text{első írás, második fej}) = (1-p)p\)<br>
<strong>Von Neumann trükk:</strong> elfogult érme → igazságos döntés két dobással.
          `} />
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Von Neumann szimulálás</span>
            <button className="op-btn" style={{ marginBottom: '.5rem', borderColor: '#10b981', color: '#34d399' }} onClick={simCoin}>100 dobáspár szimulálása</button>
            {coinResult && <div style={{ fontSize: '.83rem', color: '#94a3b8' }}>{coinResult}</div>}
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Tab 5: Azonosság-ellenőrző + mini Pascal ──
function IdentityChecker() {
  const [n, setN] = useState(7);
  const [k, setK] = useState(3);

  const ids = [
    { label: `C(${n},${k}) = C(${n},${n}−${k}) (szimmetria)`, lhs: C(n, k), rhs: C(n, n - k) },
    { label: `C(${n},${k}) + C(${n},${k + 1}) = C(${n + 1},${k + 1}) (Pascal)`, lhs: C(n, k) + C(n, k + 1), rhs: C(n + 1, k + 1) },
    { label: `C(${n},${k}) = ${n}/${k}·C(${n - 1},${k - 1}) (rekurzió)`, lhs: C(n, k), rhs: k > 0 ? Math.round((n / k) * C(n - 1, k - 1)) : 0 },
    { label: `Σ C(${n},i) = 2^${n} (összes részhalmaz)`, lhs: (() => { let s = 0; for (let i = 0; i <= n; i++) s += C(n, i); return s; })(), rhs: Math.pow(2, n) },
  ];

  const tableRows: string[] = [];
  let tableHtml = '<table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">n\\k</th>';
  for (let ki = 0; ki <= 7; ki++) tableHtml += `<th>${ki}</th>`;
  tableHtml += '</tr></thead><tbody>';
  for (let ni = 0; ni <= 7; ni++) {
    tableHtml += `<tr><td style="color:#64748b;font-weight:700;">${ni}</td>`;
    for (let ki = 0; ki <= 7; ki++) {
      const v = ki > ni ? '' : C(ni, ki);
      tableHtml += `<td style="color:${ki <= ni ? '#34d399' : '#334155'};font-family:monospace;">${v}</td>`;
    }
    tableHtml += '</tr>';
    tableRows.push('');
  }
  tableHtml += '</tbody></table>';

  return (
    <div>
      <Cols>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: '#10b981' }}>Paraméterek</span>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
              <span>n = <input type="number" min={1} max={20} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
              <span>k = <input type="number" min={0} max={20} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
            </div>
            <div>
              {ids.map(({ label, lhs, rhs }, i) => {
                const ok = Math.abs(lhs - rhs) < 0.01;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.6rem', margin: '.5rem 0', fontSize: '.82rem' }}>
                    <span style={{ color: ok ? '#34d399' : '#ef4444', fontSize: '.9rem' }}>{ok ? '✓' : '✗'}</span>
                    <span style={{ color: '#94a3b8', flex: 1 }}>{label}</span>
                    <span style={{ marginLeft: 'auto', fontFamily: 'monospace', color: '#34d399', fontSize: '.82rem' }}>{lhs} = {rhs}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="info-box" style={{ overflowX: 'auto' }}>
            <span className="lbl" style={{ color: '#10b981' }}>Pascal-háromszög azonosság tábla</span>
            <p style={{ fontSize: '.82rem', color: '#64748b' }}>C(n,k) értékek n=0..7, k=0..7:</p>
            <RichTex html={tableHtml} />
          </div>
        </div>
      </Cols>
    </div>
  );
}

// ── Static theory ──
const t1theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Newton-féle binomiális tétel</h5>
<div class="thm-box"><div class="box-body">\[(a+b)^n = \sum_{i=0}^{n} \binom{n}{i} a^{n-i} b^{i}\]
Kombinatorikus bizonyítás: \(\binom{n}{i}\) az \(n\) zárójelből kiválasztott \(i\) db \(b\)-tényező száma.</div></div>
<div class="thm-box"><div class="box-body"><strong>Speciális esetek:</strong><br>
\((1+1)^n = 2^n\) — az összes részhalmaz száma<br>
\((1-1)^n = 0\) — pozitív és negatív tagok kioltják egymást<br>
\((1+x)^n = \sum \binom{n}{i}x^i\) — generátorfüggvény</div></div>`;

const t2theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Pascal-háromszög</h5>`;

const t3theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Főbb összegzési azonosságok</h5>
<div style="overflow-x:auto">
<table class="cayley" style="width:100%">
<thead><tr><th style="text-align:left">Azonosság</th><th style="text-align:left">Eredmény</th></tr></thead>
<tbody>
<tr><td>\(\sum_{i=0}^{n}\binom{n}{i}\)</td><td style="color:#34d399;">\(2^n\) (összes részhalmaz)</td></tr>
<tr><td>\(\sum_{i=0}^{n}(-1)^i\binom{n}{i}\)</td><td style="color:#34d399;">\(0\) (váltakozó)</td></tr>
<tr><td>\(\sum_{i=0}^{n}i\binom{n}{i}\)</td><td style="color:#34d399;">\(n\cdot 2^{n-1}\) (differenciálással)</td></tr>
<tr><td>\(\sum_{i=0}^{k}\binom{n}{i}\binom{m}{k-i}\)</td><td style="color:#34d399;">\(\binom{n+m}{k}\) (Vandermonde)</td></tr>
<tr><td>\(\sum_{i=0}^{r}\binom{n+i}{i}\)</td><td style="color:#34d399;">\(\binom{n+r+1}{r}\) (felső összegzés)</td></tr>
</tbody>
</table>
</div>`;

const t4theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Ismétléses kombináció — Rugalmas pénzérmék</h5>`;

const t5theory = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">Azonosságok ellenőrző</h5>`;

const TABS: Tab[] = [
  { id: 'binom', label: 'Binomiális tétel', content: <div><RichTex html={t1theory} /><BinomExpander /></div> },
  { id: 'pascal', label: 'Pascal-háromszög', content: <div><RichTex html={t2theory} /><PascalTriangle /></div> },
  { id: 'osszeg', label: 'Összegzések', content: <div><RichTex html={t3theory} /><SumChecker /></div> },
  { id: 'coin', label: 'Rugalmas pénzérmék', content: <div><RichTex html={t4theory} /><CoinAndStars /></div> },
  { id: 'azon', label: 'Azonosságok ellenőrző', content: <div><RichTex html={t5theory} /><IdentityChecker /></div> },
];

export default function DimatCh3() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika III — fejezet</p>
      <h1 className="ila__title">Binomiális és polinomiális együtthatók</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
