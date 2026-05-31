import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../components/kit';

/* ── math helpers ── */
const fact = (n: number) => { let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
const C = (n: number, k: number) => { if (k < 0 || k > n) return 0; if (k === 0 || k === n) return 1; k = Math.min(k, n - k); let r = 1; for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1); return Math.round(r); };
const Prep = (n: number, k: number) => Math.pow(n, k);
const Pnorep = (n: number, k: number) => { if (k > n) return 0; let r = 1; for (let i = 0; i < k; i++) r *= (n - i); return r; };
const RC = (n: number, k: number) => C(n + k - 1, k);
const PT_COLS = ['#f87171', '#60a5fa', '#4ade80', '#fbbf24', '#c084fc', '#fb923c'];

/* ════ Tab 1: pigeonhole ════ */
function Pigeonhole() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [pts, setPts] = useState<{ x: number; y: number }[]>([]);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = '#1a3a2a'; ctx.lineWidth = 1; ctx.strokeRect(0, 0, W, H);
    ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
    ctx.strokeStyle = '#34d39966'; ctx.lineWidth = 1; ctx.setLineDash([4, 4]);
    const r = Math.sqrt(2) / 2 * W / 2;
    [0, 1, 2, 3].forEach((q) => {
      const cx = ((q % 2) + 0.5) * W / 2, cy = (Math.floor(q / 2) + 0.5) * H / 2;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    });
    ctx.setLineDash([]);
    const scale = W / 2;
    pts.forEach((p, i) => {
      ctx.beginPath(); ctx.arc(p.x * scale, p.y * scale, 5, 0, Math.PI * 2);
      ctx.fillStyle = ['#f87171', '#60a5fa', '#4ade80', '#fbbf24', '#c084fc'][i]; ctx.fill();
    });
  }, [pts]);
  let info = `${pts.length}/5 pont. ${5 - pts.length} pont hiányzik még.`;
  let infoColor = '#8892a4';
  for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
    const qi = Math.floor(pts[i].x) + 2 * Math.floor(pts[i].y);
    const qj = Math.floor(pts[j].x) + 2 * Math.floor(pts[j].y);
    if (qi === qj) {
      const dx = (pts[i].x - pts[j].x), dy = (pts[i].y - pts[j].y);
      const d = Math.sqrt(dx * dx + dy * dy);
      info = `✓ Pont ${i + 1} és ${j + 1} azonos negyedben van! Távolságuk: ${d.toFixed(3)} cm ≤ √2 ≈ 1.414 cm`;
      infoColor = '#34d399';
    }
  }
  const add = (e: React.MouseEvent) => {
    if (pts.length >= 5) return;
    const cv = ref.current; if (!cv) return;
    const rect = cv.getBoundingClientRect();
    setPts((p) => [...p, { x: (e.clientX - rect.left) / rect.width * 2, y: (e.clientY - rect.top) / rect.height * 2 }]);
  };
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#34d399' }}>3. példa — Skatulya-elv vizualizátor</span>
      <p style={{ fontSize: '.78rem', color: '#8892a4', margin: '.3rem 0 .5rem' }}>2 cm × 2 cm négyzet 4 részre osztva. 5 pont közül lesz kettő ≤√2 cm távolságra:</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <canvas ref={ref} width={200} height={200} onClick={add} style={{ background: '#0c1a10', borderRadius: '.4rem', border: '1px solid #21262d', cursor: 'crosshair' }} />
        <div style={{ flex: 1, minWidth: 180 }}>
          <div style={{ fontSize: '.82rem', color: infoColor }}>{info}</div>
          <button className="op-btn" style={{ marginTop: '.5rem' }} onClick={() => setPts([])}>↺ Reset</button>
        </div>
      </div>
    </div>
  );
}

/* ════ small calculators ════ */
function VarCalc() {
  const [n, setN] = useState(5), [k, setK] = useState(2);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Variáció-kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={1} max={20} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" min={0} max={20} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <RichTex key={`${n},${k}`} html={String.raw`<div style="display:flex;gap:.5rem;flex-wrap:wrap"><span class="formula-chip">ismétléses: \(${n}^{${k}} = ${Prep(n, k)}\)</span><span class="formula-chip">ismétlés nélküli: \(\frac{${n}!}{(${n}-${k})!} = ${Pnorep(n, k)}\)</span>${k > n ? '<span style="color:#f87171;font-size:.8rem">k &gt; n, nincs ilyen sorozat!</span>' : ''}</div>`} />
    </div>
  );
}
function PermCalc() {
  const [n, setN] = useState(4);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>n! és körpermutáció kalkulátor</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
        n = <input type="range" min={1} max={10} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 120 }} /> <span style={{ color: '#34d399' }}>{n}</span>
      </div>
      <RichTex key={n} html={String.raw`<div style="display:flex;gap:.5rem;flex-wrap:wrap"><span class="formula-chip">\(${n}! = ${fact(n)}\) (sorrend)</span><span class="formula-chip">\((${n}-1)! = ${fact(Math.max(1, n - 1))}\) (körpermutáció)</span></div>`} />
    </div>
  );
}
function PermList() {
  const [n, setN] = useState(4);
  const items = Array.from({ length: n }, (_, i) => i + 1);
  const all: number[][] = [];
  const perm = (arr: number[], cur: number[] = []) => {
    if (arr.length === 0) { all.push([...cur]); return; }
    arr.forEach((v, i) => perm([...arr.slice(0, i), ...arr.slice(i + 1)], [...cur, v]));
  };
  perm(items);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Vizuális permutáció-generátor</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
        Elemek: <input type="number" min={2} max={6} className="ila-num" value={n} onChange={(e) => setN(Math.min(6, Math.max(2, +e.target.value)))} /> <span style={{ color: '#8892a4' }}>({all.length} permutáció)</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', maxHeight: 200, overflowY: 'auto' }}>
        {all.map((p, i) => (
          <span key={i} className="combo-chip">{p.map((v, j) => <span key={j} style={{ color: PT_COLS[(v - 1) % PT_COLS.length] }}>{v}</span>)}</span>
        ))}
      </div>
    </div>
  );
}
function CombCalc() {
  const [n, setN] = useState(5), [k, setK] = useState(2);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Kombináció-kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={0} max={20} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" min={0} max={20} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <RichTex key={`${n},${k}`} html={String.raw`<span class="formula-chip">\(\binom{${n}}{${k}} = \frac{${n}!}{${k}!\cdot${n - k}!} = ${C(n, k)}\)</span>`} />
    </div>
  );
}
function SubsetVis() {
  const [n, setN] = useState(4), [k, setK] = useState(2);
  const nn = Math.min(5, n), kk = Math.min(4, k);
  const items = 'ABCDE'.slice(0, nn).split('');
  const subs: string[][] = [];
  const pick = (start: number, cur: string[]) => {
    if (cur.length === kk) { subs.push([...cur]); return; }
    for (let i = start; i < nn; i++) pick(i + 1, [...cur, items[i]]);
  };
  pick(0, []);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Részhalmazok vizualizálva (n ≤ 5, k ≤ 4)</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={1} max={5} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" min={0} max={4} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.3rem', maxHeight: 160, overflowY: 'auto' }}>
        {subs.map((s, i) => (
          <span key={i} className="combo-chip">{'{'}{s.map((v, j) => <span key={j} style={{ color: PT_COLS['ABCDE'.indexOf(v)] }}>{j > 0 ? ',' : ''}{v}</span>)}{'}'}</span>
        ))}
      </div>
    </div>
  );
}
function RCombCalc() {
  const [n, setN] = useState(5), [k, setK] = useState(3);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Ismétléses kombináció-kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={1} max={15} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" min={0} max={15} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <RichTex key={`${n},${k}`} html={String.raw`<span class="formula-chip">\(\binom{${n}+${k}-1}{${k}} = \binom{${n + k - 1}}{${k}} = ${RC(n, k)}\)</span>`} />
    </div>
  );
}

/* ════ Tab 5: Pascal triangle ════ */
const HEAT = ['#052e16', '#064e3b', '#065f46', '#047857', '#059669', '#10b981', '#34d399', '#6ee7b7', '#a7f3d0', '#d1fae5'];
function PascalTri() {
  const ROWS = 10;
  const [sel, setSel] = useState<{ r: number; c: number; v: number } | null>(null);
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#6ee7b7' }}>Pascal-háromszög (kattints egy cellára)</span>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginTop: '.5rem' }}>
        {Array.from({ length: ROWS + 1 }, (_, r) => (
          <div key={r} style={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
            {Array.from({ length: r + 1 }, (_, c) => {
              const v = C(r, c), maxV = C(r, Math.floor(r / 2)) || 1;
              const heat = Math.min(9, Math.floor(v / maxV * 9));
              const sz = Math.max(28, 34 - r * 1.5);
              return (
                <div key={c} className="pascal-cell" title={`C(${r},${c}) = ${v}`}
                  style={{ background: HEAT[heat], color: heat > 5 ? '#052e16' : '#6ee7b7', width: sz, height: sz, fontSize: `${Math.max(0.55, 0.78 - r * 0.025)}rem` }}
                  onClick={() => setSel({ r, c, v })}>{v}</div>
              );
            })}
          </div>
        ))}
      </div>
      {sel && (
        <RichTex key={`${sel.r},${sel.c}`} className="box-body" style={{ marginTop: '.75rem' }}
          html={String.raw`Kiválasztva: \(\binom{${sel.r}}{${sel.c}} = ${sel.v}\) | Pascal-azonosság: \(\binom{${sel.r}}{${sel.c}} = \binom{${sel.r - 1}}{${sel.c - 1}} + \binom{${sel.r - 1}}{${sel.c}} = ${C(sel.r - 1, sel.c - 1)} + ${C(sel.r - 1, sel.c)}\)`} />
      )}
    </div>
  );
}
function RowSum() {
  const [n, setN] = useState(4);
  const terms = Array.from({ length: n + 1 }, (_, k) => C(n, k));
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Sor-összeg ellenőrzés</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
        n = <input type="range" min={0} max={10} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 120 }} /> <span style={{ color: '#34d399' }}>{n}</span>
      </div>
      <RichTex key={n} className="box-body" html={String.raw`\(\displaystyle\sum_{k=0}^{${n}}\binom{${n}}{k} = ${terms.join('+')} = ${terms.reduce((a, b) => a + b, 0)} = 2^{${n}} = ${Math.pow(2, n)}\)`} />
    </div>
  );
}

/* ════ Tab 7: summary + all calc + binom ════ */
const SUMMARY = [
  { name: 'Ismétléses variáció', sorrend: true, ismetl: true, formula: 'nᵏ', fn: Prep },
  { name: 'Ismétlés nélküli var.', sorrend: true, ismetl: false, formula: 'n!/(n−k)!', fn: Pnorep },
  { name: 'Permutáció', sorrend: true, ismetl: false, formula: 'n!', fn: (n: number) => fact(n) },
  { name: 'Kombináció', sorrend: false, ismetl: false, formula: 'C(n,k)', fn: C },
  { name: 'Ismétléses kombináció', sorrend: false, ismetl: true, formula: 'C(n+k−1,k)', fn: RC },
];
const Yes = () => <span style={{ color: '#4ade80', fontWeight: 700 }}>✓</span>;
const No = () => <span style={{ color: '#f87171', fontWeight: 700 }}>✗</span>;
function SummaryAll() {
  const [n, setN] = useState(5), [k, setK] = useState(2);
  return (
    <div>
      <div className="info-box" style={{ overflowX: 'auto' }}>
        <table className="sum-tbl">
          <thead><tr style={{ borderBottom: '2px solid rgba(52,211,153,.3)' }}>
            <th style={{ textAlign: 'left' }}>Fogalom</th><th>Sorrend?</th><th>Ismétlés?</th><th>Képlet</th><th style={{ textAlign: 'left' }}>n=5, k=2</th>
          </tr></thead>
          <tbody>
            {SUMMARY.map((r) => (
              <tr key={r.name}>
                <td style={{ color: '#e2e8f0' }}>{r.name}</td>
                <td style={{ textAlign: 'center' }}>{r.sorrend ? <Yes /> : <No />}</td>
                <td style={{ textAlign: 'center' }}>{r.ismetl ? <Yes /> : <No />}</td>
                <td style={{ color: '#6ee7b7', fontFamily: 'monospace' }}>{r.formula}</td>
                <td style={{ color: '#34d399', fontWeight: 700 }}>{r.fn(5, 2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="info-box">
        <span className="lbl" style={{ color: '#6ee7b7' }}>Összehasonlító kalkulátor</span>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
          <span>n = <input type="number" min={1} max={12} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
          <span>k = <input type="number" min={0} max={12} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '.5rem' }}>
          {SUMMARY.map((r) => (
            <div key={r.name} className="def-box" style={{ margin: 0 }}>
              <div style={{ color: '#6ee7b7', fontSize: '.68rem', fontWeight: 700 }}>{r.name}</div>
              <div style={{ fontSize: '1.1rem', color: '#34d399', fontWeight: 700 }}>{r.fn(n, k)}</div>
            </div>
          ))}
        </div>
      </div>
      <BinomExpand />
    </div>
  );
}
function BinomExpand() {
  const [n, setN] = useState(3);
  const terms = Array.from({ length: n + 1 }, (_, k) => {
    const c = C(n, k), ap = k, bp = n - k;
    let t = '';
    if (c !== 1) t += c;
    if (ap === 1) t += 'a'; else if (ap > 1) t += `a^${ap}`;
    if (bp === 1) t += 'b'; else if (bp > 1) t += `b^${bp}`;
    if (t === '') t = '1';
    return t;
  });
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#6ee7b7' }}>Bónusz — Binomiális tétel</span>
      <RichTex html={String.raw`<div style="font-size:.84rem;color:#c4cdd8;margin:.3rem 0">\[(a+b)^n = \sum_{k=0}^{n} \binom{n}{k} a^k b^{n-k}\]</div>`} />
      <div style={{ fontSize: '.85rem' }}>
        n = <input type="range" min={0} max={6} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 100 }} /> <span style={{ color: '#34d399' }}>{n}</span>
      </div>
      <div style={{ fontSize: '.85rem', marginTop: '.4rem', color: '#6ee7b7', fontFamily: 'monospace' }}>(a+b)^{n} = {terms.join(' + ')}</div>
    </div>
  );
}

/* ════ static theory ════ */
const t1a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Leszámlálási alapelvek</h5>
<div class="def-box"><div class="lbl mb-2">Összeadási szabály</div><div class="box-body">Ha az \(E\) esemény \(k\) <strong>diszjunkt</strong> részesemény egyikeként állhat elő (az \(i\)-edik \(n_i\)-féleképpen), akkor \[n = n_1 + n_2 + \cdots + n_k\]</div></div>
<div class="def-box"><div class="lbl mb-2">Szorzás-szabály</div><div class="box-body">Ha az \(E\) esemény \(k\) <strong>egymást követő</strong> lépésből áll (az \(i\)-edik \(n_i\)-féleképpen), akkor \[n = n_1 \cdot n_2 \cdots n_k\]</div></div>
<div class="def-box"><div class="lbl mb-2">Skatulya-elv</div><div class="box-body">Ha \(m\) golyót \(n\) dobozba helyezünk és \(m > n\), legalább egy dobozba egynél több golyó kerül. Általánosan: \(m > kn\) esetén van doboz \(\ge k+1\) golyóval.</div></div>
<div class="ex-box"><div class="box-body"><strong>1. példa (összeadás):</strong> 4- vagy 6-hosszú PIN: \(10^4 + 10^6 = 1\,010\,000\). <strong>2. példa (szorzás):</strong> 3 dobozból (4,3,6 tárgy) egyet-egyet: \(4 \cdot 3 \cdot 6 = 72\).</div></div>`;

const t2a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Variációk</h5>
<div class="def-box"><div class="lbl mb-2">Ismétléses variáció</div><div class="box-body">\(k\)-hosszú sorozat \(n\) elemből, ismétlés megengedett: \[\boxed{n^k}\]</div></div>
<div class="def-box"><div class="lbl mb-2">Ismétlés nélküli variáció</div><div class="box-body">\(k\)-hosszú sorozat \(n\) elemből, ismétlés nélkül (\(k \le n\)): \[\boxed{\frac{n!}{(n-k)!} = n(n-1)\cdots(n-k+1)}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>Bizonyítás:</strong> ismétléses — minden tagot \(n\)-féleképpen → \(n^k\). Ismétlés nélkül — \(n, n-1, \ldots, n-k+1\) → \(\frac{n!}{(n-k)!}\). \(\square\)</div></div>
<div class="ex-box"><div class="box-body"><strong>7. példa:</strong> 5 színből 2 visszatevéssel, sorrend számít: \(5^2 = 25\). <strong>11. példa:</strong> visszatevés nélkül: \(5 \cdot 4 = 20\).</div></div>`;

const t3a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Permutációk</h5>
<div class="def-box"><div class="lbl mb-2">Definíció</div><div class="box-body">Az \(\{1,\ldots,n\}\) önmagára való bijektív leképezése = permutáció. \(n\) különböző tárgy sorbarendezéseinek száma: \[\boxed{n! = 1 \cdot 2 \cdots n}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>Bizonyítás:</strong> az \(n\) elem \(n\)-tagú ismétlés nélküli variációja: \(\frac{n!}{0!} = n!\). \(\square\)</div></div>
<div class="ex-box"><div class="box-body"><strong>15. példa:</strong> 3 kocka (P,K,Z) sorba: \(3! = 6\). <strong>16. példa (körpermutáció):</strong> \(n\) ember kör alakú asztalnál, elforgatással azonosítva: \((n-1)!\); 4 embernél \(3! = 6\).</div></div>`;

const t4a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Kombinációk</h5>
<div class="def-box"><div class="lbl mb-2">Ismétlés nélküli kombináció</div><div class="box-body">Egy \(n\)-elemű halmaz \(k\)-elemű részhalmazai (sorrend nem számít): \[\boxed{\binom{n}{k} = \frac{n!}{k!(n-k)!}}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>Bizonyítás:</strong> az ismétlés nélküli variációk \((n!/(n-k)!)\) száma osztva a sorrend-ekvivalensek \((k!)\) számával: \(\binom{n}{k}\). \(\square\)</div></div>
<div class="ex-box"><div class="box-body"><strong>19. példa:</strong> \(\binom{5}{2} = \frac{120}{2 \cdot 6} = 10\).</div></div>`;

const t5a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Pascal-háromszög és binomiális együtthatók</h5>
<div class="thm-box"><div class="lbl lbl--thm mb-2">20. Tétel — Tulajdonságok</div><div class="box-body"><strong>1.</strong> \(\binom{n}{0} = \binom{n}{n} = 1\). <strong>2. Szimmetria:</strong> \(\binom{n}{k} = \binom{n}{n-k}\). <strong>3. Pascal:</strong> \(\binom{n+1}{k+1} = \binom{n}{k} + \binom{n}{k+1}\). <strong>4. Sor-összeg:</strong> \(\sum_{k=0}^{n}\binom{n}{k} = 2^n\).</div></div>
<div class="ex-box"><div class="box-body"><strong>Szimmetria:</strong> \(k\)-elemű részhalmazok = \((n-k)\)-elemű komplementerek. <strong>Sor-összeg:</strong> az összes részhalmaz száma \(2^n\), méret szerint osztályozva \(\sum_k \binom{n}{k} = 2^n\).</div></div>`;

const t6a = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Ismétléses kombinációk</h5>
<div class="def-box"><div class="lbl mb-2">21. Definíció</div><div class="box-body">\(n\)-elemű halmazból \(k\) elem, a sorrend nem számít, de egy elem többször is szerepelhet: \[\boxed{\binom{n+k-1}{k}}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>Bizonyítás (bijekció):</strong> monoton nemcsökkenő \(k\)-tagú sorozat \(\mapsto\) \(\{a_1, a_2+1, \ldots, a_k+k-1\}\) szigorúan növő \(\Rightarrow\) \(\binom{n+k-1}{k}\). \(\square\)</div></div>
<div class="ex-box"><div class="box-body"><strong>24. példa:</strong> 5 golyóból 3 visszatevéssel, sorrend nem számít: \(\binom{7}{3} = 35\).</div></div>
<div class="warn-box"><strong>Megjegyzés:</strong> \(\binom{n+k-1}{k} = \binom{n+k-1}{n-1}\) (szimmetria). Mindkét alak helyes.</div>`;

const t7a = String.raw`<h5 style="color:#34d399;font-weight:700;margin:0 0 .5rem">Összefoglaló táblázat</h5>`;

const TABS: Tab[] = [
  { id: 'al', label: 'Alapelvek', content: <div><RichTex html={t1a} /><Pigeonhole /></div> },
  { id: 'va', label: 'Variációk', content: <div><RichTex html={t2a} /><VarCalc /></div> },
  { id: 'pe', label: 'Permutációk', content: <div><RichTex html={t3a} /><PermCalc /><PermList /></div> },
  { id: 'ko', label: 'Kombinációk', content: <div><RichTex html={t4a} /><CombCalc /><SubsetVis /></div> },
  { id: 'pa', label: 'Pascal & Binom.', content: <div><RichTex html={t5a} /><PascalTri /><RowSum /></div> },
  { id: 'is', label: 'Ismétléses komb.', content: <div><RichTex html={t6a} /><RCombCalc /></div> },
  { id: 'os', label: 'Összefoglaló', content: <div><RichTex html={t7a} /><SummaryAll /></div> },
];

export default function Ch10() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika II — fejezet</p>
      <h1 className="ila__title">Kombinatorika 1.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
