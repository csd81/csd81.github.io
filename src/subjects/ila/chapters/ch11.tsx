import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../components/kit';

/* ── math helpers ── */
const fact = (n: number): number => { if (n < 0) return Infinity; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; };
const C = (n: number, k: number) => { if (k < 0 || k > n) return 0; if (k === 0 || k === n) return 1; k = Math.min(k, n - k); let r = 1; for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1); return Math.round(r); };
const multinomial = (ks: number[]) => { const n = ks.reduce((a, b) => a + b, 0); return Math.round(fact(n) / ks.reduce((a, b) => a * fact(b), 1)); };
const Dn = (n: number) => { let s = 0; for (let k = 0; k <= n; k++) s += Math.pow(-1, k) / fact(k); return Math.round(fact(n) * s); };
const TERM_COLS = ['#f87171', '#fb923c', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa', '#f472b6', '#e2e8f0', '#94a3b8'];

/* ════ Tab 1: multinomial + word ════ */
function MultiCalc() {
  const [raw, setRaw] = useState('2,3,1');
  const ks = raw.split(',').map((s) => parseInt(s.trim(), 10)).filter((v) => !isNaN(v) && v >= 0);
  const n = ks.reduce((a, b) => a + b, 0);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Multinomiális együttható-kalkulátor</span>
      <p style={{ fontSize: '.78rem', color: '#8892a4', margin: '.3rem 0' }}>Add meg a kᵢ értékeket vesszővel (pl. 2,3,1):</p>
      <input type="text" className="ila-text" value={raw} onChange={(e) => setRaw(e.target.value)} style={{ maxWidth: 200 }} />
      <RichTex key={raw} className="box-body" style={{ marginTop: '.5rem' }}
        html={String.raw`\(\displaystyle\frac{${n}!}{${ks.map((k) => k + '!').join('\\cdot') || '1'}} = ${multinomial(ks).toLocaleString()}\)`} />
    </div>
  );
}
function WordCalc() {
  const [raw, setRaw] = useState('MATEMATIKA');
  const word = raw.toUpperCase().replace(/[^A-Z]/g, '');
  const freq: Record<string, number> = {};
  for (const c of word) freq[c] = (freq[c] || 0) + 1;
  const n = word.length;
  const den = Object.values(freq).map((k) => `${k}!`).join('\\cdot') || '1';
  const breakdown = Object.entries(freq).map(([c, k]) => `${c}:${k}`).join(', ');
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Szó-anagram számoló</span>
      <div style={{ margin: '.4rem 0' }}>
        <input type="text" maxLength={16} className="ila-text" value={raw} onChange={(e) => setRaw(e.target.value)} style={{ maxWidth: 180, textTransform: 'uppercase' }} />
      </div>
      {word ? (
        <RichTex key={word} className="box-body"
          html={String.raw`<div style="font-size:.78rem;color:#8892a4;margin-bottom:.25rem">Betűk: ${breakdown} (összesen ${n})</div>\(\frac{${n}!}{${den}} = ${multinomial(Object.values(freq)).toLocaleString()}\) anagram`} />
      ) : null}
    </div>
  );
}

/* ════ Tab 2: binomial + trinomial expansion ════ */
function binTerm(c: number, ak: number, bk: number) {
  let t = '';
  if (c > 1) t += c;
  if (ak > 0) t += ak === 1 ? 'a' : `a^{${ak}}`;
  if (bk > 0) t += bk === 1 ? 'b' : `b^{${bk}}`;
  return t || '1';
}
function BinExp() {
  const [n, setN] = useState(4);
  const terms = Array.from({ length: n + 1 }, (_, k) => ({ label: binTerm(C(n, k), k, n - k) }));
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Binomiális kifejtés</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>n = <input type="range" min={0} max={8} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 110 }} /> <span style={{ color: '#fb923c' }}>{n}</span></div>
      <RichTex key={n} className="box-body" html={String.raw`\((a+b)^{${n}} = ${terms.map((t) => t.label).join(' + ')}\)`} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.5rem' }}>
        {terms.map((t, i) => (
          <RichTex key={i} html={String.raw`<span class="formula-chip" style="border-color:${TERM_COLS[i % TERM_COLS.length]};color:${TERM_COLS[i % TERM_COLS.length]}">\(${t.label}\)</span>`} />
        ))}
      </div>
    </div>
  );
}
function TriExp() {
  const [n, setN] = useState(2);
  const parts: string[] = [];
  for (let i = n; i >= 0; i--) for (let j = n - i; j >= 0; j--) {
    const k = n - i - j;
    const c = Math.round(fact(n) / (fact(i) * fact(j) * fact(k)));
    let t = '';
    if (c > 1) t += c;
    if (i > 0) t += i === 1 ? 'a' : `a^{${i}}`;
    if (j > 0) t += j === 1 ? 'b' : `b^{${j}}`;
    if (k > 0) t += k === 1 ? 'c' : `c^{${k}}`;
    parts.push(t || '1');
  }
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Polinomiális (trinomiális) kifejtés (a+b+c)ⁿ</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>n = <input type="range" min={1} max={5} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 100 }} /> <span style={{ color: '#fb923c' }}>{n}</span></div>
      <RichTex key={n} className="box-body" html={String.raw`\((a+b+c)^{${n}} = ${parts.join(' + ')}\)`} />
    </div>
  );
}

/* ════ Tab 3: restricted combination ════ */
function RKCalc() {
  const [n, setN] = useState(6), [k, setK] = useState(12), [sraw, setSraw] = useState('3,4,0,0,0,0');
  const ss = sraw.split(',').map((s) => parseInt(s.trim(), 10) || 0).slice(0, n);
  while (ss.length < n) ss.push(0);
  const sumS = ss.reduce((a, b) => a + b, 0), kp = k - sumS;
  const val = kp >= 0 ? C(n + kp - 1, kp) : 0;
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Korlátozott kombináció-kalkulátor</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n (fajták) = <input type="number" min={1} max={10} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k (összesen) = <input type="number" min={0} max={30} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <div style={{ fontSize: '.85rem', marginBottom: '.4rem' }}>Alsó korlátok (s₁,s₂,…): <input type="text" className="ila-text" value={sraw} onChange={(e) => setSraw(e.target.value)} style={{ maxWidth: 200 }} /></div>
      <RichTex key={`${n},${k},${sraw}`} className="box-body" html={String.raw`\(\binom{${n}+(${k}-${sumS})-1}{${k}-${sumS}} = \binom{${n + kp - 1}}{${kp}} = ${val}\)`} />
    </div>
  );
}

/* ════ Tab 4: linear equations + stars and bars ════ */
function LECalc() {
  const [n, setN] = useState(3), [k, setK] = useState(10);
  const nonneg = C(n + k - 1, k), pos = n <= k ? C(k - 1, n - 1) : 0;
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Lineáris egyenlet megoldás-számláló</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.4rem 0', fontSize: '.85rem' }}>
        <span>n = <input type="number" min={1} max={10} className="ila-num" value={n} onChange={(e) => setN(+e.target.value)} /></span>
        <span>k = <input type="number" min={0} max={50} className="ila-num" value={k} onChange={(e) => setK(+e.target.value)} /></span>
      </div>
      <RichTex key={`${n},${k}`} className="box-body"
        html={String.raw`<div style="line-height:2">Nemnegatív (\(x_i\ge0\)): \(\binom{${n + k - 1}}{${k}} = ${nonneg}\)<br>Pozitív (\(x_i\ge1\)): ${n <= k ? `\\(\\binom{${k - 1}}{${n - 1}} = ${pos}\\)` : '<span style="color:#f87171">n &gt; k, nincs megoldás</span>'}</div>`} />
    </div>
  );
}
function StarsBars() {
  const [k, setK] = useState(5);
  const ref = useRef<HTMLCanvasElement>(null);
  const n = 3;
  const parts = [Math.floor(k / 3), Math.floor(k / 3), k - 2 * Math.floor(k / 3)];
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const pad = 20, total = k + n - 1, step = (W - 2 * pad) / Math.max(total, 1), cy = H / 2;
    const COLS = ['#f87171', '#60a5fa', '#4ade80'];
    let idx = 0;
    for (let p = 0; p < n; p++) {
      for (let s = 0; s < parts[p]; s++) {
        const x = pad + idx * step + step / 2;
        ctx.beginPath(); ctx.arc(x, cy, 8, 0, Math.PI * 2); ctx.fillStyle = COLS[p]; ctx.fill();
        idx++;
      }
      if (p < n - 1) {
        const x = pad + idx * step + step / 2;
        ctx.fillStyle = '#8892a4'; ctx.font = 'bold 16px monospace'; ctx.textAlign = 'center';
        ctx.fillText('|', x, cy + 6); idx++;
      }
    }
  }, [k]);
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Stars &amp; Bars vizualizáció (n=3)</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>k = <input type="range" min={0} max={10} value={k} onChange={(e) => setK(+e.target.value)} style={{ width: 120 }} /> <span style={{ color: '#fb923c' }}>{k}</span></div>
      <canvas ref={ref} width={520} height={100} style={{ background: '#0c1408', borderRadius: '.4rem', maxWidth: '100%' }} />
      <div style={{ fontSize: '.8rem', color: '#8892a4', marginTop: '.5rem' }}>
        Egy felosztás: x₁={parts[0]}, x₂={parts[1]}, x₃={parts[2]} | Összes: C({n + k - 1},{k}) = {C(n + k - 1, k)}
      </div>
    </div>
  );
}

/* ════ Tab 5: Venn + divisibility sieve ════ */
function VennCalc() {
  const [U, setU] = useState(100), [A, setA] = useState(40), [B, setB] = useState(30), [AB, setAB] = useState(12);
  const ref = useRef<HTMLCanvasElement>(null);
  const AuB = A + B - AB;
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1; ctx.strokeRect(2, 2, W - 4, H - 4);
    ctx.fillStyle = '#8892a4'; ctx.font = '10px monospace'; ctx.textAlign = 'left'; ctx.fillText(`U = ${U}`, 6, 14);
    const r = 62, cy = H / 2, cx1 = W / 2 - 40, cx2 = W / 2 + 40;
    ctx.globalAlpha = 0.35;
    ctx.beginPath(); ctx.arc(cx1, cy, r, 0, Math.PI * 2); ctx.fillStyle = '#f87171'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx2, cy, r, 0, Math.PI * 2); ctx.fillStyle = '#60a5fa'; ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = '#f87171'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(cx1, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = '#60a5fa'; ctx.beginPath(); ctx.arc(cx2, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#e2e8f0'; ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center';
    ctx.fillText(`A=${A}`, cx1 - 28, cy + 4); ctx.fillText(`∩=${AB}`, (cx1 + cx2) / 2, cy + 4); ctx.fillText(`B=${B}`, cx2 + 28, cy + 4);
  }, [U, A, B, AB]);
  const inp = (v: number, set: (n: number) => void) => <input type="number" min={0} className="ila-num" value={v} onChange={(e) => set(+e.target.value)} />;
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Interaktív Venn-diagram (2 halmaz)</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'flex-start', marginTop: '.4rem' }}>
        <canvas ref={ref} width={300} height={180} style={{ background: '#0c0e14', borderRadius: '.4rem', maxWidth: '100%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.4rem', fontSize: '.85rem' }}>
          <span>|U| = {inp(U, setU)}</span>
          <span>|A| = {inp(A, setA)}</span>
          <span>|B| = {inp(B, setB)}</span>
          <span>|A∩B| = {inp(AB, setAB)}</span>
          <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: '.3rem' }}>
            <span className="formula-chip">|A∪B| = {AuB}</span>
            <span className="formula-chip">|A̅∩B̅| = {U - AuB}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function DivSieve() {
  const [N, setN] = useState(3000);
  const A = [Math.floor(N / 2), Math.floor(N / 3), Math.floor(N / 5)];
  const AB = [Math.floor(N / 6), Math.floor(N / 10), Math.floor(N / 15)];
  const ABC = Math.floor(N / 30);
  const AuBC = A[0] + A[1] + A[2] - AB[0] - AB[1] - AB[2] + ABC;
  const result = N - AuBC;
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>27. példa — oszthatóság szita-formulával</span>
      <p style={{ fontSize: '.78rem', color: '#8892a4', margin: '.3rem 0' }}>Hány 1–N közötti egész nem osztható 2-vel, 3-mal, 5-tel?</p>
      <div style={{ fontSize: '.85rem', marginBottom: '.4rem' }}>N = <input type="number" min={1} className="ila-num" value={N} onChange={(e) => setN(+e.target.value)} style={{ width: 80 }} /></div>
      <RichTex key={N} html={String.raw`
        <div class="step-row"><div class="step-eq">\(|A|=\lfloor${N}/2\rfloor=${A[0]},\;|B|=\lfloor${N}/3\rfloor=${A[1]},\;|C|=\lfloor${N}/5\rfloor=${A[2]}\)</div></div>
        <div class="step-row"><div class="step-eq">\(|A\cap B|=${AB[0]},\;|A\cap C|=${AB[1]},\;|B\cap C|=${AB[2]},\;|A\cap B\cap C|=${ABC}\)</div></div>
        <div class="step-row"><div class="step-eq">\(|\overline{A\cup B\cup C}|=${N}-${A[0]}-${A[1]}-${A[2]}+${AB[0]}+${AB[1]}+${AB[2]}-${ABC}=\mathbf{${result}}\)</div></div>`} />
    </div>
  );
}

/* ════ Tab 6: derangement + surjection ════ */
function DerangTable() {
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#fdba74' }}>Derangement tábla</span>
      <table className="cayley" style={{ width: '100%', marginTop: '.4rem' }}>
        <thead><tr><th>n</th><th>n!</th><th>Dₙ</th><th>Dₙ/n!</th><th>1/e</th></tr></thead>
        <tbody>
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => {
            const fn = fact(n), dn = Dn(n);
            return <tr key={n}><td style={{ color: '#fb923c' }}>{n}</td><td>{fn.toLocaleString()}</td><td style={{ color: '#fdba74', fontWeight: 700 }}>{dn.toLocaleString()}</td><td style={{ color: '#6ee7b7' }}>{(dn / fn).toFixed(4)}</td><td style={{ color: '#8892a4' }}>≈ 0.3679</td></tr>;
          })}
        </tbody>
      </table>
    </div>
  );
}
function DerangSurj() {
  const [n, setN] = useState(4);
  const [k2, setK2] = useState(6), [n2, setN2] = useState(3);
  const dn = Dn(n);
  let surjBody: string;
  if (n2 > k2) surjBody = '<span style="color:#f87171">n &gt; k: nincs szürjekció</span>';
  else {
    let total = 0; const terms: string[] = [];
    for (let r = 0; r <= n2; r++) {
      const t = Math.pow(-1, r) * C(n2, r) * Math.pow(n2 - r, k2);
      total += t;
      terms.push(`${r === 0 ? '' : t >= 0 ? '+' : '-'}\\binom{${n2}}{${r}}${n2 - r}^{${k2}}`);
    }
    surjBody = String.raw`\(${terms.join('')} = ${total}\)`;
  }
  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fdba74' }}>Interaktív kalkulátor</span>
      <div style={{ margin: '.4rem 0', fontSize: '.85rem' }}>n = <input type="range" min={1} max={10} value={n} onChange={(e) => setN(+e.target.value)} style={{ width: 110 }} /> <span style={{ color: '#fb923c' }}>{n}</span></div>
      <RichTex key={n} className="box-body" html={String.raw`<span class="formula-chip">\(D_{${n}} = ${n}!\displaystyle\sum_{k=0}^{${n}}\frac{(-1)^k}{k!} = ${dn}\)</span> <span style="font-size:.8rem;color:#8892a4">\(${n}! = ${fact(n)}\), arány: ${(dn / fact(n)).toFixed(4)}</span>`} />
      <hr style={{ borderColor: '#21262d', margin: '.75rem 0' }} />
      <div style={{ color: '#fdba74', fontWeight: 700, fontSize: '.85rem', marginBottom: '.4rem' }}>Szürjektív leképezések:</div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', margin: '.3rem 0', fontSize: '.85rem' }}>
        <span>|B|=k = <input type="number" min={1} max={10} className="ila-num" value={k2} onChange={(e) => setK2(+e.target.value)} /></span>
        <span>|C|=n = <input type="number" min={1} max={10} className="ila-num" value={n2} onChange={(e) => setN2(+e.target.value)} /></span>
      </div>
      <RichTex key={`${k2},${n2}`} className="box-body" html={surjBody} />
    </div>
  );
}

/* ════ static theory ════ */
const t1a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Rendezett osztályozás és ismétléses permutációk</h5>
<div class="def-box"><div class="lbl mb-2">1. Definíció — Rendezett osztályozás</div><div class="box-body">Az \(n\)-elemű \(A\) halmaz \((k_1,\ldots,k_r)\) típusú rendezett osztályozása a \((C_1,\ldots,C_r)\) rendezett \(r\)-es, ahol a \(C_i\) páronként diszjunktak, uniójuk \(A\), és \(|C_i|=k_i\).</div></div>
<div class="def-box"><div class="lbl mb-2">5. Definíció — Ismétléses permutáció</div><div class="box-body">Az \(a_1,\ldots,a_r\) elemekből álló \(n\)-hosszú sorozatok, amelyekben pontosan \(k_1\) db \(a_1,\ldots,k_r\) db \(a_r\) szerepel.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">3. &amp; 7. Tétel</div><div class="box-body">A rendezett osztályozások és ismétléses permutációk száma: \[\boxed{\frac{n!}{k_1!\cdot k_2!\cdots k_r!}}\] (\(n=k_1+\cdots+k_r\)) — <strong>multinomiális együttható</strong> \(\binom{n}{k_1,\ldots,k_r}\).</div></div>
<div class="ex-box"><div class="box-body"><strong>4. példa:</strong> 15 csoki (4,5,3,3): \(\frac{15!}{4!\cdot5!\cdot3!\cdot3!} = 12\,612\,600\). <strong>8. példa:</strong> 2 piros, 1 kék, 3 zöld kocka: \(\frac{6!}{2!\cdot1!\cdot3!} = 60\). <strong>10. példa (MATEMATIKA):</strong> \(\frac{10!}{3!2!2!} = 151200\).</div></div>`;

const t2a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Binomiális és Polinomiális tétel</h5>
<div class="thm-box"><div class="lbl lbl--thm mb-2">11. Tétel — Polinomiális tétel</div><div class="box-body">\[(a_1+\cdots+a_r)^n = \sum_{\substack{k_1,\ldots,k_r\ge 0\\k_1+\cdots+k_r=n}} \frac{n!}{k_1!\cdots k_r!}\,a_1^{k_1}\cdots a_r^{k_r}\]</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">12. Tétel — Binomiális tétel (r=2)</div><div class="box-body">\[(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^k b^{n-k}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>13. Következmény:</strong> \(a=b=1\): \(\sum_k\binom{n}{k} = 2^n\). \(a=1,b=-1\): \(\sum_k(-1)^k\binom{n}{k} = 0\).</div></div>`;

const t3a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Ismétléses kombinációk korlátozásokkal</h5>
<div class="thm-box"><div class="lbl lbl--thm mb-2">14. Tétel — alsó korlátok</div><div class="box-body">\(n\)-elemű halmazból \(k\)-tagú ismétléses kombináció, az \(i\)-edik elem legalább \(s_i\)-szer (\(\sum s_i\le k\)): \[\binom{n+(k-\sum s_i)-1}{k-\sum s_i}\]</div></div>
<div class="thm-box"><div class="box-body"><strong>16. Következmény</strong> — minden elem legalább egyszer (\(s_i=1\), \(n\le k\)): \[\binom{k-1}{n-1}\]</div></div>
<div class="ex-box"><div class="box-body"><strong>15. példa:</strong> 6 fajta, 12 db, \(s_1=3,s_2=4\): \(\binom{10}{5}=252\). <strong>17. példa:</strong> mind a 6-féléből ≥1: \(\binom{11}{5}=462\).</div></div>`;

const t4a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Lineáris egyenletek egységnyi együtthatóval</h5>
<div class="thm-box"><div class="box-body"><strong>18. Tétel (nemnegatív):</strong> \(x_1+\cdots+x_n=k\), \(x_i\ge0\): \(\binom{n+k-1}{k}\). <strong>20. Tétel (pozitív):</strong> \(x_i\ge1\): \(\binom{k-1}{n-1}\). <strong>22. Tétel (alsó korlát):</strong> \(x_i>c_i\): \(\binom{k-\sum c_i-1}{n-1}\) (helyettesítés \(y_i=x_i-c_i\)).</div></div>
<div class="ex-box"><div class="box-body"><strong>19. példa:</strong> számjegy-összeg 7, 6 jegy, \(x_i\ge0\): \(\binom{12}{7}=792\). <strong>21. példa:</strong> nincs 0, összeg 8: \(\binom{7}{5}=21\). <strong>23. példa:</strong> vegyes korlátok: \(\binom{8}{4}=70\).</div></div>`;

const t5a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Szita-formula (befoglalás-kizárás)</h5>
<div class="thm-box"><div class="lbl lbl--thm mb-2">26. Tétel — Szita-formula</div><div class="box-body">\[|A_1\cup\cdots\cup A_n| = \sum_{r=1}^{n}(-1)^{r-1}\!\!\sum_{i_1<\cdots<i_r}\!\!|A_{i_1}\cap\cdots\cap A_{i_r}|\]</div></div>
<div class="thm-box"><div class="box-body"><strong>28. Tétel (speciális):</strong> ha minden \(r\)-fős metszet azonos méretű: \[|\overline{A_1\cup\cdots\cup A_n}| = |U| + \sum_{r=1}^{n}(-1)^r\binom{n}{r}|A_1\cap\cdots\cap A_r|\]</div></div>
<div class="ex-box"><div class="box-body"><strong>2 halmaz:</strong> \(|A\cup B|=|A|+|B|-|A\cap B|\). <strong>3 halmaz:</strong> \(|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|A\cap C|-|B\cap C|+|A\cap B\cap C|\).</div></div>`;

const t6a = String.raw`
<h5 style="color:#fb923c;font-weight:700;margin:0 0 .75rem">Derangementek és szürjektív leképezések</h5>
<div class="def-box"><div class="lbl mb-2">Elcserélt levelek problémája</div><div class="box-body">\(n\) levél, \(n\) boríték — hányféleképpen nem kapja senki a saját levelét? Fixpont nélküli permutáció = derangement, \(D_n\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">29. Tétel — \(D_n\)</div><div class="box-body">\[D_n = n!\sum_{k=0}^{n}\frac{(-1)^k}{k!} \approx \frac{n!}{e}\] Biz.: \(A_i=\{\sigma:\sigma(i)=i\}\), \(|A_{i_1}\cap\cdots\cap A_{i_r}|=(n-r)!\), speciális szita.</div></div>
<div class="ex-box"><div class="box-body"><strong>30. példa:</strong> \(S_9\), pontosan 3 fixpont: \(\binom{9}{3}\cdot D_6 = 84\cdot265 = 22260\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">31. Tétel — Szürjektív leképezések</div><div class="box-body">\(|B|=k,\;|C|=n\): a \(B\to C\) szürjekciók száma \[\sum_{r=0}^{n}(-1)^r\binom{n}{r}(n-r)^k\]</div></div>
<div class="ex-box"><div class="box-body"><strong>32. példa:</strong> 6 versenyző, 3 ajándék, mind kiosztva: \(3^6 - 3\cdot2^6 + 3 = 540\).</div></div>`;

const TABS: Tab[] = [
  { id: 'mu', label: 'Ismétléses perm.', content: <div><RichTex html={t1a} /><MultiCalc /><WordCalc /></div> },
  { id: 'bi', label: 'Binom. & Polinom.', content: <div><RichTex html={t2a} /><BinExp /><TriExp /></div> },
  { id: 'ko', label: 'Korlátozott komb.', content: <div><RichTex html={t3a} /><RKCalc /></div> },
  { id: 'li', label: 'Lineáris egyenletek', content: <div><RichTex html={t4a} /><LECalc /><StarsBars /></div> },
  { id: 'sz', label: 'Szita-formula', content: <div><RichTex html={t5a} /><VennCalc /><DivSieve /></div> },
  { id: 'de', label: 'Derangement', content: <div><RichTex html={t6a} /><DerangTable /><DerangSurj /></div> },
];

export default function Ch11() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika III — fejezet</p>
      <h1 className="ila__title">Kombinatorika 2.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
