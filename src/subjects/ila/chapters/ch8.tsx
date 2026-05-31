import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

const Yes = () => <span style={{ color: '#4ade80', fontWeight: 700 }}>✓</span>;
const No = () => <span style={{ color: '#f87171', fontWeight: 700 }}>✗</span>;

/* ════ Tab 1: algebra table + op checker ════ */
const ALG_DATA = [
  { name: String.raw`\((\mathbb{C},+)\)`, assoc: true, comm: true, closed: true },
  { name: String.raw`\((\mathbb{R},+)\)`, assoc: true, comm: true, closed: true },
  { name: String.raw`\((\mathbb{R},-)\)`, assoc: false, comm: false, closed: true },
  { name: String.raw`\((\mathbb{R},\cdot)\)`, assoc: true, comm: true, closed: true },
  { name: String.raw`\((\mathbb{R}\setminus\{0\},/)\)`, assoc: false, comm: false, closed: true },
  { name: String.raw`\((\mathbb{R}^{n\times n},\cdot)\)`, assoc: true, comm: false, closed: true },
  { name: String.raw`\((S_n,\cdot)\)`, assoc: true, comm: false, closed: true },
  { name: String.raw`\((\mathcal{P}(U),\cap)\)`, assoc: true, comm: true, closed: true },
  { name: String.raw`\(([0,1],+)\)`, assoc: true, comm: true, closed: false },
];
const OPS: Record<string, { fn: (a: number, b: number) => number; label: string }> = {
  add: { fn: (a, b) => a + b, label: 'a ∘ b = a + b' },
  sub: { fn: (a, b) => a - b, label: 'a ∘ b = a − b' },
  mul: { fn: (a, b) => a * b, label: 'a ∘ b = a · b' },
  custom1: { fn: (a, b) => a + b + 1, label: 'a ∘ b = a + b + 1' },
  max: { fn: (a, b) => Math.max(a, b), label: 'a ∘ b = max(a,b)' },
};
function OpChecker() {
  const [key, setKey] = useState('add');
  const op = OPS[key];
  const samples = [-2, -1, 0, 1, 2, 3];
  let assoc = true, comm = true;
  for (const a of samples) for (const b of samples) {
    if (Math.abs(op.fn(a, b) - op.fn(b, a)) > 1e-9) comm = false;
    for (const c of samples) if (Math.abs(op.fn(op.fn(a, b), c) - op.fn(a, op.fn(b, c))) > 1e-9) assoc = false;
  }
  return (
    <div className="info-box">
      <span className="lbl">Ismert algebrák tulajdonságai</span>
      <table className="cayley" style={{ width: '100%', marginBottom: '.75rem' }}>
        <thead><tr><th style={{ textAlign: 'left' }}>Algebra</th><th>Asszoc.</th><th>Komm.</th><th>Zárva?</th></tr></thead>
        <tbody>
          {ALG_DATA.map((r, i) => (
            <tr key={i}>
              <td style={{ textAlign: 'left' }}><RichTex html={r.name} /></td>
              <td>{r.assoc ? <Yes /> : <No />}</td>
              <td>{r.comm ? <Yes /> : <No />}</td>
              <td>{r.closed ? <Yes /> : <No />}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <span className="lbl">Interaktív tulajdonság-ellenőrző</span>
      <div style={{ margin: '.4rem 0' }}>
        <select className="ila-select" value={key} onChange={(e) => setKey(e.target.value)}>
          <option value="add">a ∘ b = a + b (ℝ-en)</option>
          <option value="sub">a ∘ b = a − b (ℝ-en)</option>
          <option value="mul">a ∘ b = a · b (ℝ-en)</option>
          <option value="custom1">a ∘ b = a + b + 1 (ℝ-en)</option>
          <option value="max">a ∘ b = max(a,b) (ℝ-en)</option>
        </select>
      </div>
      <div style={{ fontSize: '.85rem' }}>
        <strong>{op.label}</strong><br />
        Asszociatív: {assoc ? <Yes /> : <No />} &nbsp; Kommutatív: {comm ? <Yes /> : <No />}
      </div>
    </div>
  );
}

/* ════ Tab 2: Cayley table for Z_n ════ */
const COLORS8 = ['#f59e0b', '#d97706', '#fbbf24', '#78350f', '#fde68a', '#92400e', '#fef3c7', '#b45309'];
function Cayley() {
  const [n, setN] = useState(4);
  return (
    <div className="info-box">
      <span className="lbl">Cayley-tábla — ℤₙ additív csoport</span>
      <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="range" min={2} max={8} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 100 }} /> {n}</span>
        <span style={{ color: '#8892a4' }}>(ℤₙ mod n összeadás)</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley">
          <thead><tr><th>+</th>{Array.from({ length: n }, (_, j) => <th key={j}>{j}</th>)}</tr></thead>
          <tbody>
            {Array.from({ length: n }, (_, i) => (
              <tr key={i}>
                <th>{i}</th>
                {Array.from({ length: n }, (_, j) => {
                  const v = (i + j) % n;
                  return <td key={j} style={{ color: COLORS8[v % COLORS8.length] }}>{v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <RichTex
        key={n}
        className="box-body"
        html={String.raw`<div style="margin-top:.5rem">\(\mathbb{Z}_{${n}} = \{0, 1, \ldots, ${n - 1}\}\) mod ${n} összeadással: Abel-csoport ✓ &nbsp; Ciklikus ✓ &nbsp; Rend: ${n} &nbsp; Generátor: \(g=1\)</div>`}
      />
    </div>
  );
}

/* ════ Tab 4: log homomorphism checker ════ */
function HomChecker() {
  const [x, setX] = useState(2), [y, setY] = useState(8), [b, setB] = useState(2);
  const valid = x > 0 && y > 0 && b > 1;
  let body = '';
  if (!valid) body = '<span style="color:#f87171">Adj meg x,y &gt; 0 és alap &gt; 1 értéket.</span>';
  else {
    const log = (v: number) => Math.log(v) / Math.log(b);
    const lhs = log(x * y), rhs = log(x) + log(y), ok = Math.abs(lhs - rhs) < 1e-9;
    body = String.raw`\(\log_{${b.toFixed(2)}}(${x} \cdot ${y}) = \log_{${b.toFixed(2)}}(${x * y}) = ${lhs.toFixed(6)}\)<br>\(\log_{${b.toFixed(2)}} ${x} + \log_{${b.toFixed(2)}} ${y} = ${log(x).toFixed(6)} + ${log(y).toFixed(6)} = ${rhs.toFixed(6)}\)<br>Egyenlők: ${ok ? '<span style="color:#4ade80;font-weight:700">✓</span> Homomorfizmus teljesül' : '<span style="color:#f87171;font-weight:700">✗</span> nem teljesül'} (diff = ${Math.abs(lhs - rhs).toExponential(2)})`;
  }
  return (
    <div className="info-box">
      <span className="lbl">Interaktív: log homomorfizmus ellenőrző</span>
      <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>x = <input type="number" min={0.01} step={0.5} className="ila-num" value={x} onChange={(e) => setX(+e.target.value)} /></span>
        <span>y = <input type="number" min={0.01} step={0.5} className="ila-num" value={y} onChange={(e) => setY(+e.target.value)} /></span>
        <span>alap = <input type="number" min={1.01} step={0.5} className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
      </div>
      <RichTex key={`${x},${y},${b}`} className="box-body" html={body} />
    </div>
  );
}

/* ════ Tab 5: cyclic group E_n canvas ════ */
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
function EnViz() {
  const [n, setN] = useState(6);
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cvs = ref.current; if (!cvs) return;
    const ctx = cvs.getContext('2d'); if (!ctx) return;
    const W = cvs.width, H = cvs.height, cx = W / 2, cy = H / 2, R = W * 0.42;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = '#1e2830'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.strokeStyle = '#f59e0b33'; ctx.lineWidth = 1.5; ctx.stroke();
    const pts: { x: number; y: number; k: number }[] = [];
    for (let k = 0; k < n; k++) {
      const ang = -Math.PI / 2 + 2 * Math.PI * k / n;
      pts.push({ x: cx + R * Math.cos(ang), y: cy + R * Math.sin(ang), k });
    }
    ctx.beginPath();
    pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath(); ctx.strokeStyle = '#f59e0b55'; ctx.lineWidth = 1; ctx.stroke();
    pts.forEach((p) => {
      const col = p.k === 0 ? '#f59e0b' : ['#22d3ee', '#4ade80', '#f472b6', '#a78bfa', '#fb923c'][p.k % 5];
      ctx.beginPath(); ctx.arc(p.x, p.y, 6, 0, Math.PI * 2); ctx.fillStyle = col; ctx.fill();
      ctx.strokeStyle = '#0d1117'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = col; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center';
      ctx.fillText('ε' + p.k, p.x + (p.x - cx) * 0.18, p.y + (p.y - cy) * 0.18 + 3);
    });
  }, [n]);
  const divs: number[] = [];
  for (let d = 1; d <= n; d++) if (n % d === 0) divs.push(d);
  const orders = Array.from({ length: n }, (_, k) => {
    const ord = n / gcd(n, k === 0 ? n : k);
    return { k, ord: k === 0 ? 1 : ord, isGen: k === 0 ? false : ord === n };
  });
  return (
    <div className="info-box">
      <span className="lbl">Interaktív: 𝓔ₙ ciklikus csoport és részcsoportjai</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>
        n = <input type="range" min={2} max={12} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 120 }} /> {n}
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <canvas ref={ref} width={320} height={320} style={{ background: '#0d1117', border: '1px solid #21262d', maxWidth: '100%' }} />
        <div style={{ flex: 1, minWidth: 200, fontSize: '.8rem' }}>
          <RichTex html={String.raw`<div style="color:#f59e0b;font-weight:700;margin-bottom:.3rem">\(\mathcal{E}_{${n}}\) — ${n}-edik egységgyökök</div>`} key={'h' + n} />
          <div style={{ color: '#fbbf24', marginBottom: '.25rem' }}>Elemek rendje:</div>
          <table className="cayley" style={{ width: '100%', fontSize: '.75rem' }}>
            <thead><tr><th>ε_k</th><th>o(ε_k)</th><th>Generátor?</th></tr></thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.k}><td>ε{o.k}</td><td>{o.ord}</td><td>{o.isGen ? <Yes /> : <No />}</td></tr>
              ))}
            </tbody>
          </table>
          <div style={{ color: '#fbbf24', margin: '.5rem 0 .25rem' }}>Részcsoportok (Lagrange: |H| | {n}):</div>
          {divs.map((d) => {
            const members: string[] = [];
            for (let k = 0; k < n; k++) if (k % (n / d) === 0) members.push('ε' + k);
            return <div key={d} style={{ color: '#8b949e' }}>|H|={d}: {`{${members.join(', ')}}`}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

/* ════ Static theory ════ */
const t1a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Műveletek és algebrák</h5>
<div class="def-box"><div class="box-body"><strong>n-változós művelet:</strong> egy \(A^n \to A\) leképezés. <strong>Bináris művelet:</strong> \(n=2\), azaz \(A \times A \to A\). <strong>Algebra:</strong> az \((A,\mathcal{F})\) pár, ahol \(\mathcal{F}\) az \(A\)-n definiált műveletek véges halmaza.</div></div>
<div class="info-box"><div style="color:#f59e0b;font-weight:700">Asszociativitás:</div>\((a \circ b) \circ c = a \circ (b \circ c)\) minden \(a,b,c \in A\)-ra.</div>
<div class="info-box"><div style="color:#f59e0b;font-weight:700">Kommutativitás:</div>\(a \circ b = b \circ a\) minden \(a,b \in A\)-ra.</div>`;

const t2a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Félcsoport, monoid és csoport</h5>
<div class="def-box"><div class="box-body"><strong>Félcsoport</strong> \((A,\circ)\): asszociatív bináris művelet. Kommutatív, ha \(\circ\) is az.</div></div>
<div class="def-box"><div class="box-body"><strong>Monoid (egységelemes félcsoport):</strong> létezik \(e\), hogy \(a \circ e = e \circ a = a\) minden \(a\)-ra. Az egységelem egyértelmű.</div></div>
<div class="def-box"><div class="box-body"><strong>Csoport \((G,\cdot)\):</strong> monoid, ahol minden elemnek van inverze: \(ab = ba = e\). <em>Abel-csoport:</em> kommutatív csoport.</div></div>
<div class="thm-box"><div class="box-body"><strong>Zéruselem:</strong> \(a \circ z = z \circ a = z\) minden \(a\)-ra. <strong>Inverz:</strong> \(b = a^{-1}\) ha \(ab = ba = e\); egyértelmű, \((ab)^{-1} = b^{-1}a^{-1}\).</div></div>`;

const t3a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Gyűrű és test</h5>
<div class="def-box"><div class="box-body">Az \((A,+,\cdot)\) <strong>gyűrű</strong>, ha: ① \((A,+)\) kommutatív csoport, ② \((A,\cdot)\) félcsoport, ③ a \(\cdot\) disztributív a \(+\)-ra. <em>Kommutatív gyűrű:</em> ha \(\cdot\) is kommutatív.</div></div>
<div class="def-box"><div class="box-body"><strong>Test \((A,+,\cdot)\):</strong> kommutatív gyűrű, ahol \((A \setminus \{0\},\cdot)\) kommutatív csoport.</div></div>
<div class="thm-box"><div class="box-body">Gyűrűben: \(a \cdot 0 = 0 \cdot a = 0\) és \((-a)b = a(-b) = -(ab)\).</div></div>`;
const t3b = String.raw`
<div class="info-box" style="overflow-x:auto"><table class="cayley" style="width:100%"><thead><tr><th style="text-align:left">Struktúra</th><th>Assz.</th><th>Komm.</th><th>Egys.</th><th>Inv.</th><th>Diszt.</th></tr></thead><tbody>
<tr><td style="text-align:left">Félcsoport</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td><td style="color:#f87171">—</td><td style="color:#f87171">—</td><td style="color:#f87171">—</td></tr>
<tr><td style="text-align:left">Monoid</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td><td style="color:#f87171">—</td></tr>
<tr><td style="text-align:left">Csoport</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td></tr>
<tr><td style="text-align:left">Abel-csoport</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#f87171">—</td></tr>
<tr><td style="text-align:left;color:#f59e0b">Gyűrű</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓(+)</td><td style="color:#4ade80">✓(+)</td><td style="color:#4ade80">✓(+)</td><td style="color:#4ade80">✓</td></tr>
<tr><td style="text-align:left;color:#f59e0b">Test</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td><td style="color:#4ade80">✓</td></tr>
</tbody></table></div>
<div class="ex-box"><div class="box-body">\((\mathbb{R},+,\cdot)\), \((\mathbb{C},+,\cdot)\) — test; \((\mathbb{Z},+,\cdot)\) — gyűrű, nem test; \((\mathbb{R}^{n\times n},+,\cdot)\) — gyűrű, nem komm.; \((\mathcal{P}(U),\triangle,\cap)\) — gyűrű; \((\{i,h\},\leftrightarrow,\vee)\) — test.</div></div>`;

const t4a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Homomorfizmus és izomorfizmus</h5>
<div class="def-box"><div class="box-body">\(\varphi : (A,\circ) \to (B,\ast)\) <strong>homomorfizmus</strong>, ha \[\varphi(a_1 \circ a_2) = \varphi(a_1) \ast \varphi(a_2).\] Ha \(\varphi\) bijekció is → <strong>izomorfizmus</strong>; \((A,\circ) \cong (B,\ast)\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Tétel:</strong> Ha \(\varphi\) szürjektív homomorfizmus: ① \(\circ\) asszociatív → \(\ast\) is; ② félcsoport/csoport megőrződik; ③ \(\varphi(e_A) = e_B\); ④ \(\varphi(a^{-1}) = (\varphi(a))^{-1}\).</div></div>
<div class="info-box"><div style="color:#f59e0b;font-weight:700">\((\mathbb{R}_+,\cdot) \cong (\mathbb{R},+)\)</div>\(\varphi = \log_a\), mivel \(\log(xy) = \log x + \log y\). Bijekció.</div>
<div class="info-box"><div style="color:#f59e0b;font-weight:700">\(\mathbb{C} \cong (\mathbb{R}^2,+,\cdot)\)</div>\(\varphi(a+bi) = (a,b)\), szorzás \((a_1,a_2)(b_1,b_2) = (a_1b_1-a_2b_2,a_1b_2+a_2b_1)\).</div>`;

const t5a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Részcsoport, ciklikus csoport, Lagrange</h5>
<div class="def-box"><div class="box-body"><strong>Részcsoport:</strong> \((H,\cdot)\) részcsoport \((G,\cdot)\)-ban, ha \(H \subseteq G\) és \((H,\cdot)\) maga is csoport.</div></div>
<div class="def-box"><div class="box-body"><strong>Generált csoport:</strong> \([H]\) a legszűkebb \(H\)-t tartalmazó részcsoport. Egyelemű \(H=\{a\}\): \([a]\) az \(a\) által generált csoport.</div></div>
<div class="def-box"><div class="box-body"><strong>Ciklikus csoport:</strong> \(G = [a]\) valamely \(a\)-ra. <strong>Elem rendje:</strong> \(o(a) = k\), a legkisebb pozitív \(k\), amelyre \(a^k = e\).</div></div>
<div class="thm-box"><div class="box-body"><strong>Lagrange-tétel:</strong> egy részcsoport rendje osztója \(|G|\)-nek. <strong>Következmény:</strong> egy elem rendje is osztója \(|G|\)-nek. Minden ciklikus csoport izomorf \((\mathbb{Z},+)\)-vel vagy valamely \((\mathcal{E}_n,\cdot)\)-vel.</div></div>`;

const t6a = String.raw`
<h5 style="color:#f59e0b;font-weight:700;margin:0 0 .75rem">Előadás+ — Mélyebb betekintések</h5>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">1. Zárt és bináris műveletek</div><div class="box-body">Az \(n\)-változós művelet egy \(A^n \to A\) leképezés. A <em>zárt</em> jelző: az eredmény mindig \(A\)-beli. <strong>Példa:</strong> \((\mathbb{N}, -)\) nem zárt (\(3-5 \notin \mathbb{N}\)); \((\mathbb{Z}, -)\) zárt, de nem asszociatív (\((5-3)-2 = 0 \ne 5-(3-2) = 4\)).</div></div>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">2. \(a \circ b = a + b + 1\) — Abel-csoport</div><div class="box-body">Asszoc.: \((a\circ b)\circ c = a+b+c+2 = a\circ(b\circ c)\). Komm.: \(a+b+1 = b+a+1\). Egységelem \(e=-1\); inverz \(a^{-1} = -a-2\). Tehát \((\mathbb{R},\circ)\) Abel-csoport.</div></div>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">3. A csoport axiómái</div><div class="box-body">① asszociativitás, ② egységelem \(e\), ③ minden \(a\)-nak inverze \(a^{-1}\). Nem köteles kommutatív lenni; ha az, Abel-csoport. <strong>Példák:</strong> Abel: \((\mathbb{Z},+)\), \((\mathbb{R}\setminus\{0\},\cdot)\), \(\mathcal{E}_n\). Nem Abel: \((S_n,\cdot)\), \(n \ge 3\).</div></div>`;
const t6b = String.raw`
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">4. \((ab)^n = a^n b^n\) — mikor?</div><div class="box-body"><strong>Tétel:</strong> pontosan akkor minden \(n\)-re, ha \(ab = ba\). \(n=2\): \((ab)^2 = abab\), \(a^2b^2 = aabb\); egyenlők ⟺ \(ba = ab\). Az \(S_n\)-ben \((\sigma\tau)^2 \ne \sigma^2\tau^2\) általában.</div></div>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">5. Gyűrű: miért csak félcsoport \((A,\cdot)\)?</div><div class="box-body">A \(0\) sosem invertálható szorzásra: ha lenne \(0^{-1}\), akkor \(1 = 0\cdot 0^{-1} = 0\). Testben \((A\setminus\{0\},\cdot)\) kommutatív csoport. Gyűrűben \(a\cdot 0 = 0\), \((-a)b = -(ab)\) — következmények.</div></div>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">6. Gyűrű-homomorfizmus — mindkét művelet</div><div class="box-body">\(\varphi(a_1 + a_2) = \varphi(a_1) + \varphi(a_2)\) és \(\varphi(a_1 \cdot a_2) = \varphi(a_1) \cdot \varphi(a_2)\). <strong>Példa:</strong> \(\varphi:\mathbb{Z}\to\mathbb{Z}_n\), \(\varphi(k) = k \bmod n\).</div></div>
<div class="info-box"><div style="color:#fbbf24;font-weight:700;margin-bottom:.25rem">7. Részcsoport-példák</div><div class="box-body">\(\mathcal{E}_n \le (\mathbb{C}\setminus\{0\},\cdot)\) — egységgyökök. \(2\mathbb{Z} \le (\mathbb{Z},+)\), index \([\mathbb{Z}:2\mathbb{Z}] = 2\). \(n\mathbb{Z} \le (\mathbb{Z},+)\) minden \(n\ge 1\)-re. Triviális részcsoportok: \(\{e\}\) és \(G\).</div></div>`;

const TABS: Tab[] = [
  { id: 'mu', label: 'Műveletek & algebrák', content: <Cols variant="7-5"><RichTex html={t1a} /><OpChecker /></Cols> },
  { id: 'cs', label: 'Félcsoport & csoport', content: <Cols variant="7-5"><RichTex html={t2a} /><Cayley /></Cols> },
  { id: 'gy', label: 'Gyűrű & test', content: <Cols><RichTex html={t3a} /><RichTex html={t3b} /></Cols> },
  { id: 'ho', label: 'Homomorfizmus', content: <Cols variant="7-5"><RichTex html={t4a} /><HomChecker /></Cols> },
  { id: 're', label: 'Részcsoport & ciklikus', content: <Cols variant="7-5"><RichTex html={t5a} /><EnViz /></Cols> },
  { id: 'ex', label: 'Előadás+', content: <Cols><RichTex html={t6a} /><RichTex html={t6b} /></Cols> },
];

export default function Ch8() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 8. fejezet</p>
      <h1 className="ila__title">Absztrakt algebra</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
