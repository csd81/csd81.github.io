import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, Cols, type Tab } from '../components/kit';

const ACC = '#22d3ee';

/* ── shared node draw ── */
function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number, label: string, fill: string, stroke: string, r = 14) {
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = fill; ctx.fill();
  ctx.strokeStyle = stroke; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#e2e8f0'; ctx.font = `bold ${r < 12 ? 9 : 11}px monospace`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(label, x, y);
}

/* ════ TAB 1: Páros gráf canvas ════ */
const PR_POS = [
  { x: 70, y: 60 }, { x: 160, y: 60 }, { x: 250, y: 60 }, { x: 340, y: 60 },
  { x: 70, y: 150 }, { x: 160, y: 150 }, { x: 250, y: 150 }, { x: 340, y: 150 },
];
const DEFAULT_EDGES: [number, number][] = [[0, 4], [0, 5], [1, 5], [1, 6], [2, 6], [2, 7], [3, 7]];

function checkBipartite(n: number, edges: [number, number][]) {
  const adj: number[][] = Array.from({ length: n }, () => []);
  edges.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  const color = new Array(n).fill(-1);
  let conflict: [number, number] | null = null;
  for (let s = 0; s < n; s++) {
    if (color[s] !== -1) continue;
    color[s] = 0; const q = [s];
    outer: while (q.length) {
      const v = q.shift()!;
      for (const u of adj[v]) {
        if (color[u] === -1) { color[u] = 1 - color[v]; q.push(u); }
        else if (color[u] === color[v]) { conflict = [v, u]; break outer; }
      }
    }
    if (conflict) break;
  }
  return { bipartite: !conflict, color, conflict };
}

function ParosTab() {
  const [edges, setEdges] = useState<[number, number][]>(DEFAULT_EDGES);
  const [sel, setSel] = useState(-1);
  const ref = useRef<HTMLCanvasElement>(null);
  const { bipartite } = checkBipartite(PR_POS.length, edges);

  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    const { bipartite: bip, color: col, conflict } = checkBipartite(PR_POS.length, edges);
    edges.forEach(([a, b]) => {
      const isConflict = conflict && ((a === conflict[0] && b === conflict[1]) || (a === conflict[1] && b === conflict[0]));
      ctx.beginPath(); ctx.moveTo(PR_POS[a].x, PR_POS[a].y); ctx.lineTo(PR_POS[b].x, PR_POS[b].y);
      ctx.strokeStyle = isConflict ? '#ef4444' : '#0e7490'; ctx.lineWidth = isConflict ? 2.5 : 1.5; ctx.stroke();
    });
    PR_POS.forEach((p, i) => {
      const c = col[i];
      const fill = c === 0 ? '#071f26' : c === 1 ? '#1f0a00' : '#161b22';
      const stroke = c === 0 ? ACC : c === 1 ? '#f97316' : '#374151';
      drawNode(ctx, p.x, p.y, String(i + 1), fill, stroke);
      if (i === sel) { ctx.beginPath(); ctx.arc(p.x, p.y, 18, 0, Math.PI * 2); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }
    });
    ctx.font = '10px monospace'; ctx.textAlign = 'center';
    if (bip) {
      const aNodes = col.map((c: number, i: number) => c === 0 ? i + 1 : -1).filter((x: number) => x > 0);
      const bNodes = col.map((c: number, i: number) => c === 1 ? i + 1 : -1).filter((x: number) => x > 0);
      ctx.fillStyle = ACC; ctx.fillText('A = {' + aNodes.join(',') + '}', 200, 185);
      ctx.fillStyle = '#f97316'; ctx.fillText('B = {' + bNodes.join(',') + '}', 200, 198);
    }
  }, [edges, sel]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const cv = e.currentTarget;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (cv.width / r.width);
    const my = (e.clientY - r.top) * (cv.height / r.height);
    let hit = -1;
    PR_POS.forEach((p, i) => { if (Math.hypot(p.x - mx, p.y - my) < 18) hit = i; });
    if (hit < 0) { setSel(-1); return; }
    if (sel < 0) { setSel(hit); return; }
    if (sel === hit) { setSel(-1); return; }
    const a = Math.min(sel, hit), b = Math.max(sel, hit);
    const idx = edges.findIndex(([x, y]) => x === a && y === b);
    if (idx >= 0) setEdges(edges.filter((_, i) => i !== idx)); else setEdges([...edges, [a, b]]);
    setSel(-1);
  };

  return (
    <Cols>
      <div>
        <RichTex html={String.raw`
<div class="def-box"><div class="lbl" style="color:#22d3ee">1. Definíció — Páros gráf</div><div class="box-body">Egy \(G\) gráf <strong>páros gráf</strong> az \(A\) és \(B\) pontosztályokkal, ha \(A\cup B=V(G)\), \(A\cap B=\emptyset\), és minden él egyik végpontja \(A\)-ban, másik \(B\)-ben van. Az izolált pont bármely osztályhoz sorolható.</div></div>
<div class="thm-box"><div class="lbl lbl--thm">3. Tétel — Jellemzés</div><div class="box-body">Egy \(G\) gráf páros \(\iff\) \(G\)-ben nincs <strong>páratlan hosszú kör</strong> (beleértve a hurokélt).<br><br><em>Bizonyítás (⇒):</em> Páros gráfban a körön felváltva vannak A- és B-beli pontok → a kör páros.<br><em>Bizonyítás (⇐):</em> Ha nincs páratlan kör, BFS-sel 2-színezhető → páros.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">4. Példa — gép–munkafolyamat párosítás</div><div class="box-body">Egy gyárban \(A=\{a_1,\ldots,a_n\}\) gép és \(B=\{b_1,\ldots,b_m\}\) munkafolyamat van. Él \((a_i,b_j)\) jelzi, hogy \(a_i\) géppel végrehajtható \(b_j\). Cél: minél több kiosztás (páronként független élek maximuma). Ez a <strong>maximális párosítás</strong> problémája.</div></div>`} />
      </div>
      <div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Interaktív — páros gráf ellenőrző</span>
          <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Kattints két csúcsra él hozzáadásához/törléséhez. A BFS 2-színezés automatikusan megmutatja a particionálást.</p>
          <canvas
            ref={ref}
            width={400} height={210}
            onClick={handleClick}
            style={{ width: '100%', maxWidth: 400, borderRadius: '.4rem', background: '#071f26', cursor: 'crosshair', display: 'block' }}
          />
          <div style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
            {bipartite
              ? <span style={{ color: '#34d399', fontWeight: 700 }}>✓ Páros gráf — nincs páratlan kör. Kék=A osztály, narancs=B osztály.</span>
              : <span style={{ color: '#ef4444', fontWeight: 700 }}>✗ Nem páros — páratlan kör található (piros él).</span>}
          </div>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '.5rem' }}>
            <button className="op-btn" onClick={() => { setEdges(DEFAULT_EDGES); setSel(-1); }}>Reset (páros)</button>
            <button className="op-btn" onClick={() => { if (!edges.find(([a, b]) => a === 4 && b === 5)) setEdges(e => [...e, [4, 5]]); }}>+ Páratlan kör</button>
            <button className="op-btn" onClick={() => { setEdges([]); setSel(-1); }}>Töröl</button>
          </div>
          <div style={{ fontSize: '.7rem', color: '#8892a4', marginTop: '.4rem' }}>Kattints két csúcsra él hozzáadásához / törléséhez.</div>
        </div>
        <RichTex html={String.raw`<div class="info-box" style="font-size:.8rem;color:#8892a4;margin-top:.5rem">A <strong>BFS 2-színezési</strong> algoritmus: indíts minden összefüggő komponensből, váltakozva színezd A-ra és B-re. Ha ütközés (azonos színű szomszéd), páratlan kör van.</div>`} />
      </div>
    </Cols>
  );
}


/* ════ TAB 2: Párosítás canvas ════ */
const MT_A = [{ x: 60, y: 55, l: 'g₁' }, { x: 140, y: 55, l: 'g₂' }, { x: 220, y: 55, l: 'g₃' }, { x: 300, y: 55, l: 'g₄' }];
const MT_B = [{ x: 60, y: 165, l: 'm₁' }, { x: 140, y: 165, l: 'm₂' }, { x: 220, y: 165, l: 'm₃' }, { x: 300, y: 165, l: 'm₄' }];
const MT_EDGES: [number, number][] = [[0, 0], [0, 1], [1, 1], [1, 2], [2, 1], [2, 2], [2, 3], [3, 2], [3, 3], [0, 3], [1, 3], [3, 0]];

function matchCheck(set: Set<number>) {
  const usedA = new Set<number>(), usedB = new Set<number>();
  let valid = true;
  for (const i of set) {
    const [a, b] = MT_EDGES[i];
    if (usedA.has(a) || usedB.has(b)) valid = false;
    usedA.add(a); usedB.add(b);
  }
  return valid;
}

function ParTab() {
  const [matchSet, setMatchSet] = useState(new Set<number>([0, 2, 5, 8]));
  const valid = matchCheck(matchSet);
  const matchRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = matchRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#22d3ee99'; ctx.font = '9px monospace'; ctx.textAlign = 'center';
    ctx.fillText('Gépek (A)', 190, 18);
    ctx.fillStyle = '#f9741699'; ctx.fillText('Munkafolyamatok (B)', 190, 198);
    MT_EDGES.forEach(([a, b], i) => {
      const p1 = MT_A[a], p2 = MT_B[b], inM = matchSet.has(i);
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = inM ? ACC : '#2a3f4a'; ctx.lineWidth = inM ? 2.5 : 1; ctx.stroke();
    });
    MT_A.forEach(p => drawNode(ctx, p.x, p.y, p.l, '#0a1f26', ACC));
    MT_B.forEach(p => drawNode(ctx, p.x, p.y, p.l, '#1f0a00', '#f97316'));
  }, [matchSet]);

  const handleMatchClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const cv = e.currentTarget;
    const r = cv.getBoundingClientRect();
    const mx = (e.clientX - r.left) * (cv.width / r.width);
    const my = (e.clientY - r.top) * (cv.height / r.height);
    let closest = -1, minD = 20;
    MT_EDGES.forEach(([a, b], i) => {
      const p1 = MT_A[a], p2 = MT_B[b];
      const d = Math.hypot((p1.x + p2.x) / 2 - mx, (p1.y + p2.y) / 2 - my);
      if (d < minD) { minD = d; closest = i; }
    });
    if (closest < 0) return;
    setMatchSet(prev => {
      const next = new Set(prev);
      if (next.has(closest)) next.delete(closest); else next.add(closest);
      return next;
    });
  };

  return (
    <div>
      <Cols>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl" style="color:#22d3ee">5. Definíció — Párosítás</div><div class="box-body">Egy \(M\subseteq E(G)\) élhalmaz <strong>párosítás</strong>, ha bármelyik két \(M\)-beli élnek nincs közös végpontja. Az \(M\) <strong>teljes párosítás</strong>, ha \(G\) minden pontja valamely \(M\)-beli él végpontja.</div></div>
<div class="def-box"><div class="lbl" style="color:#22d3ee">8. Definíció — Lefogó ponthalmaz</div><div class="box-body">Az \(S\subseteq V(G)\) halmaz <strong>lefogó ponthalmaz</strong>, ha minden \(G\)-beli élnek tartalmazza legalább az egyik végpontját. \(\tau(G)\) = minimális lefogó ponthalmaz mérete. \(\nu(G)\) = maximális párosítás mérete.</div></div>
<div class="thm-box"><div class="lbl lbl--thm">10. Állítás</div><div class="box-body">Minden hurokélmentes \(G\)-re: \(\nu(G)\le\tau(G)\).</div></div>
<div class="thm-box"><div class="lbl lbl--thm">11. Tétel — Kőnig-tétel</div><div class="box-body">Bármely \(G\) <strong>páros gráfban</strong>: \[\nu(G)=\tau(G)\] <em>Módszer:</em> Ha létezik alternáló út \(A_1\)-ből \(B_1\)-be, akkor bővíthető a párosítás. Ha nem, akkor \((A_0\setminus U)\cup V\) minimális lefogó ponthalmaz.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">14. Algoritmus — Magyar-módszer</div><div class="box-body"><strong>1.</strong> Kezdj üres \(M_0\) párosítással.<br><strong>2.</strong> Határozd meg \(A_0,B_0,A_1,B_1,U,V\).<br><strong>3a.</strong> Ha van \(A_1\to B_1\) alternáló út → cserélj élt az úton, \(|\nu|\mathrel{+}=1\).<br><strong>3b.</strong> Ha nincs → \(M_i\) maximális, stop.</div></div>`} />
        </div>
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>Interaktív párosítás (4+4)</span>
            <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Kattints egy élre a párosításba való felvételhez/eltávolításhoz (kék = párosításban).</p>
            <canvas
              ref={matchRef}
              width={380} height={210}
              onClick={handleMatchClick}
              style={{ width: '100%', maxWidth: 380, borderRadius: '.4rem', background: '#071f26', cursor: 'pointer', display: 'block' }}
            />
            <div style={{ marginTop: '.4rem', fontSize: '.82rem' }}>
              ν (párosítás mérete): <strong style={{ color: ACC }}>{matchSet.size}</strong>
              {' '}{valid
                ? <span style={{ color: '#34d399' }}>✓ Érvényes párosítás</span>
                : <span style={{ color: '#ef4444' }}>✗ Ütközés! Egy csúcsba 2 él fut.</span>}
            </div>
            <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
              <button className="op-btn" onClick={() => setMatchSet(new Set([0, 2, 5, 8]))}>Reset</button>
              <button className="op-btn" onClick={() => setMatchSet(new Set())}>Töröl</button>
            </div>
          </div>
          <RichTex html={String.raw`<div class="ex-box"><div class="lbl lbl--ex">15. Példa — \(\nu(G)=\tau(G)=4\)</div><div class="box-body">A 15. Példa gráfjában 4 élből álló párosítás megtalálható (kék élek), és 4 pontos lefogó ponthalmaz is létezik (piros pontok). A Kőnig-tétel szerint \(\nu=\tau=4\). Ebből következik, hogy nincs teljes párosítás (az érintett csúcsok száma \(5+5=10\), de \(\nu=4&lt;5\)).</div></div>`} />
        </div>
      </Cols>
    </div>
  );
}

/* ════ TAB 3: Hall-feltétel ════ */
function HallChecker() {
  const [nbrs, setNbrs] = useState(['1,2', '2,3', '3,4', '4']);
  const [result, setResult] = useState<{ ok: boolean; failed?: { X: number[]; gamma: number[] }; rows?: { X: number[]; gamma: number[]; ok: boolean }[] } | null>(null);

  const parseNbrs = (arr: string[]) => arr.map(s => s.split(',').map(v => parseInt(v.trim())).filter(v => !isNaN(v) && v >= 1 && v <= 5).map(v => v - 1));

  const hallCheck = () => {
    const n = 4;
    const parsed = parseNbrs(nbrs);
    let failed: { X: number[]; gamma: number[] } | null = null;
    const allRows: { X: number[]; gamma: number[]; ok: boolean }[] = [];
    for (let mask = 1; mask < (1 << n); mask++) {
      const X: number[] = [], gammaSet = new Set<number>();
      for (let i = 0; i < n; i++) if (mask >> i & 1) { X.push(i); parsed[i].forEach(b => gammaSet.add(b)); }
      const ok = X.length <= gammaSet.size;
      allRows.push({ X, gamma: [...gammaSet], ok });
      if (!ok && !failed) failed = { X, gamma: [...gammaSet] };
    }
    setResult({ ok: !failed, failed: failed ?? undefined, rows: allRows.slice(0, 15) });
  };

  return (
    <div>
      <div className="info-box">
        <span className="lbl" style={{ color: ACC }}>Hall-feltétel ellenőrző</span>
        <p style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0' }}>Add meg az A-oldali csúcsok szomszédait (1–5 közötti számok, vesszővel). Az ellenőrző minden X⊆A részhalmazra megvizsgálja a Hall-feltételt.</p>
        {['a₁', 'a₂', 'a₃', 'a₄'].map((lbl, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem', fontSize: '.85rem' }}>
            <span style={{ color: ACC, fontWeight: 700, minWidth: '2rem' }}>{lbl}</span>
            <span style={{ color: '#8892a4', fontSize: '.75rem' }}>→ Γ =</span>
            <input
              className="ila-num"
              style={{ width: 100 }}
              value={nbrs[i]}
              onChange={e => setNbrs(prev => prev.map((v, j) => j === i ? e.target.value : v))}
            />
          </div>
        ))}
        <div style={{ display: 'flex', gap: '.5rem', marginTop: '.5rem' }}>
          <button className="op-btn is-active" onClick={hallCheck}>Ellenőriz</button>
          <button className="op-btn" onClick={() => { setNbrs(['1,2', '2,3', '3,4', '4']); setResult(null); }}>Reset</button>
        </div>
        {result && (
          <div style={{ marginTop: '.75rem' }}>
            {result.ok
              ? <div style={{ color: '#34d399', fontWeight: 700 }}>✓ Hall-feltétel teljesül minden X⊆A-ra → létezik A-t lefedő párosítás.</div>
              : <div>
                <span style={{ color: '#ef4444', fontWeight: 700 }}>✗ Hall-feltétel NEM teljesül</span><br />
                <span style={{ fontSize: '.8rem' }}>X = {'{' + result.failed!.X.map(i => 'a' + (i + 1)).join(',') + '}'}, |X|={result.failed!.X.length} {'>'} |Γ(X)|={result.failed!.gamma.length} = {'{'}{result.failed!.gamma.map(b => 'b' + (b + 1)).join(',')}{'}'}
                </span><br />
                <span style={{ fontSize: '.78rem', color: '#8892a4' }}>→ nincs A-t lefedő párosítás</span>
              </div>}
            {result.ok && result.rows && (
              <div style={{ marginTop: '.5rem', fontSize: '.78rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '80px 60px 60px 80px', fontWeight: 700, color: ACC, padding: '.3rem 0' }}>
                  <span>X⊆A</span><span>|X|</span><span>|Γ(X)|</span><span>OK?</span>
                </div>
                {result.rows.map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 60px 60px 80px', padding: '.2rem 0', borderBottom: '1px solid rgba(255,255,255,.05)', alignItems: 'center' }}>
                    <span>{'{' + row.X.map(j => 'a' + (j + 1)).join(',') + '}'}</span>
                    <span>{row.X.length}</span>
                    <span>{row.gamma.length}</span>
                    <span style={{ color: row.ok ? '#34d399' : '#ef4444' }}>{row.ok ? '✓' : '✗'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

const t3_theory = String.raw`
<div class="thm-box"><div class="lbl lbl--thm">17. Tétel — Kőnig–Hall-kritérium</div><div class="box-body">Legyen \(G\) páros gráf az \(A\) és \(B\) osztályokkal, \(\Gamma(X)\) az \(X\)-beli pontok szomszédainak halmaza. \(G\)-ben létezik \(A\)-t lefedő párosítás \(\iff\) \[\text{minden } X\subseteq A\text{-ra }|X|\le|\Gamma(X)|\] (Kőnig–Hall-feltétel).</div></div>
<div class="thm-box"><div class="lbl lbl--thm">18. Tétel — Teljes párosítás</div><div class="box-body">Páros \(G\)-ben teljes párosítás \(\iff |A|=|B|\) és teljesül a Kőnig–Hall-feltétel minden \(X\subseteq A\)-ra.</div></div>
<div class="thm-box"><div class="lbl lbl--thm">20–21. Tétel — Reguláris páros gráf</div><div class="box-body">Egy \(G\) gráf <strong>\(k\)-reguláris</strong>, ha minden pont fokszáma pontosan \(k\). Minden reguláris páros gráfban létezik teljes párosítás.</div></div>
<div class="ex-box"><div class="lbl lbl--ex">19. Példa — nincs teljes párosítás</div><div class="box-body">A 15. Példa gráfjában \(|A|=5,|B|=5\), de van \(X\subseteq A\), \(|X|=2\), amelyre \(|\Gamma(X)|=1\). \[2=|X|>|\Gamma(X)|=1\] Kőnig–Hall-feltétel sérül → nincs teljes párosítás.</div></div>`;

/* ════ TAB 4: Síkgráfok ════ */
function SikCalc() {
  const [c, setC] = useState(4);
  const [e, setE] = useState(6);
  const o = e + 2 - c;
  const maxE = 3 * c - 6;
  const planOk = c >= 3 ? e <= maxE : true;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: ACC }}>Euler-formula kalkulátor (c + o = e + 2)</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>Csúcsok (c) = <input type="number" min={1} className="ila-num" value={c} onChange={e => setC(+e.target.value)} /></span>
        <span>Élek (e) = <input type="number" min={0} className="ila-num" value={e} onChange={ev => setE(+ev.target.value)} /></span>
      </div>
      <div style={{ marginBottom: '.5rem', fontSize: '.84rem' }}>
        <strong style={{ color: ACC }}>o = e+2−c = {o}</strong>
        {c >= 3 && <span style={{ marginLeft: '.75rem', color: planOk ? '#34d399' : '#ef4444', fontWeight: 600 }}>
          {planOk ? '✓' : '✗'} e={e} {planOk ? '≤' : '>'} 3c−6={maxE}
          {!planOk && <span style={{ color: '#ef4444' }}> → nem síkbarajzolható!</span>}
        </span>}
      </div>
      <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap' }}>
        {([['K₅ (nem síkgráf)', 5, 10], ['K₃,₃ (nem síkgráf)', 6, 9], ['K₄ (síkgráf)', 4, 6], ['Kocka Q₃', 8, 12]] as [string, number, number][]).map(([lbl, cv, ev]) => (
          <button key={lbl} className="op-btn" onClick={() => { setC(cv); setE(ev); }}>{lbl}</button>
        ))}
      </div>
    </div>
  );
}

const t4_theory = String.raw`
<div class="def-box"><div class="lbl" style="color:#22d3ee">23. Definíció — Síkbarajzolható</div><div class="box-body">Egy \(G\) gráf <strong>síkbarajzolható</strong> (síkgráf), ha lerajzolható a síkban úgy, hogy élek csak csúcsoknál metszik egymást.</div></div>
<div class="def-box"><div class="lbl" style="color:#22d3ee">27. Definíció — Ország (Face)</div><div class="box-body">Egy síktérkép élei <strong>országokra</strong> osztják a síkot. Pontosan egy nem korlátos ország van. Ha \(h(C)\) az ország határán levő élek száma (vágóél kétszer), akkor: \(\sum_C h(C)=2|E|\) (28. Tétel).</div></div>
<div class="thm-box"><div class="lbl lbl--thm">30. Tétel — Euler-formula (síkgráf)</div><div class="box-body">Bármely összefüggő síktérképre: \[c + o = e + 2\] ahol \(c\) = csúcsok, \(o\) = országok, \(e\) = élek száma.</div></div>
<div class="thm-box"><div class="lbl lbl--thm">31. Következmény — Él-korlát</div><div class="box-body">Legalább hárompontú, összefüggő, egyszerű síkgráfra: \[e \le 3c - 6\] Bizonyítás: minden ország határán legalább 3 él → \(2e\ge3o=3(e+2-c)\) → \(e\le3c-6\).</div></div>
<div class="ex-box"><div class="lbl lbl--ex">32–33. Következmény</div><div class="box-body"><div style="display:flex;flex-direction:column;gap:.3rem"><div style="display:flex;gap:1rem"><span>\(K_5\) nem síkbarajzolható</span><span style="font-size:.7rem;color:#6b7280">\(e=10>3\cdot5-6=9\)</span></div><div style="display:flex;gap:1rem"><span>\(K_{3,3}\) nem síkbarajzolható</span><span style="font-size:.7rem;color:#6b7280">Euler: \(o=5\), min. 4 él/ország → \(20\le2\cdot9=18\) ✗</span></div></div></div></div>
<div class="thm-box"><div class="lbl lbl--thm">34. Tétel — Kuratowski</div><div class="box-body">Egy gráf akkor és csak akkor síkbarajzolható, ha részgráfjai között nincs \(K_5\)-ből vagy \(K_{3,3}\)-ból élosztással kapható gráf.</div></div>`;

/* ════ TAB 5: Színezés ════ */
const CHI_COLORS = ['#22d3ee', '#f43f5e', '#34d399', '#fbbf24', '#c084fc', '#f97316'];
const CHI_NAMES = ['kék', 'piros', 'zöld', 'sárga', 'lila', 'narancs'];

const DEFAULT_NODES: { x: number; y: number; l?: string }[] = [{ x: 120, y: 80 }, { x: 230, y: 50 }, { x: 330, y: 80 }, { x: 330, y: 170 }, { x: 230, y: 200 }, { x: 120, y: 170 }];
const DEFAULT_EDGES_SZ: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [0, 2], [1, 4]];
const EX40_NODES = [
  { x: 220, y: 50, l: 'P₁' }, { x: 360, y: 110, l: 'P₂' }, { x: 360, y: 180, l: 'P₃' },
  { x: 220, y: 215, l: 'P₄' }, { x: 80, y: 180, l: 'P₅' }, { x: 80, y: 110, l: 'P₆' },
];
const EX40_EDGES: [number, number][] = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [1, 2], [1, 3], [1, 5], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]];

function SzinCanvas({ nodes, edges, coloring, step, order }: {
  nodes: { x: number; y: number; l?: string }[];
  edges: [number, number][];
  coloring: number[];
  step: number;
  order: number[];
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    ctx.clearRect(0, 0, cv.width, cv.height);
    edges.forEach(([a, b]) => {
      ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y);
      ctx.strokeStyle = '#1a3040'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    nodes.forEach((p, i) => {
      const c = coloring[i];
      const fill = c >= 0 ? CHI_COLORS[c] + '33' : '#0a1f2a';
      const stroke = c >= 0 ? CHI_COLORS[c] : '#374151';
      const lbl = p.l ?? String(i + 1);
      drawNode(ctx, p.x, p.y, lbl, fill, stroke, 15);
      if (i === order[step + 1] && step < nodes.length - 1) {
        ctx.beginPath(); ctx.arc(p.x, p.y, 20, 0, Math.PI * 2); ctx.strokeStyle = '#ffffff88'; ctx.lineWidth = 1.5; ctx.stroke();
      }
    });
  }, [nodes, edges, coloring, step, order]);
  return <canvas ref={ref} width={440} height={230} style={{ width: '100%', maxWidth: 440, borderRadius: '.4rem', background: '#071f26', display: 'block' }} />;
}

function SzinTab() {
  const [nodes, setNodes] = useState<{ x: number; y: number; l?: string }[]>(DEFAULT_NODES);
  const [edgesSz, setEdgesSz] = useState(DEFAULT_EDGES_SZ);
  const [order, setOrder] = useState([0, 1, 2, 3, 4, 5]);
  const [step, setStep] = useState(-1);
  const [coloring, setColoring] = useState<number[]>(new Array(6).fill(-1));
  const [desc, setDesc] = useState('');
  const [verdict, setVerdict] = useState('');
  const [autoRef, setAutoRef] = useState<ReturnType<typeof setInterval> | null>(null);

  const reset = (ns = nodes, es = edgesSz, ord = order) => {
    if (autoRef) clearInterval(autoRef);
    setAutoRef(null);
    setNodes(ns); setEdgesSz(es); setOrder(ord);
    setStep(-1); setColoring(new Array(ns.length).fill(-1));
    setDesc(''); setVerdict('');
  };

  const doNext = (currentStep: number, currentColoring: number[], ns: { x: number; y: number; l?: string }[], es: [number, number][], ord: number[]) => {
    if (currentStep >= ns.length - 1) return { step: currentStep, coloring: currentColoring, done: true };
    const newStep = currentStep + 1;
    const v = ord[newStep];
    const usedColors = new Set<number>();
    es.forEach(([a, b]) => {
      if (a === v && currentColoring[b] >= 0) usedColors.add(currentColoring[b]);
      if (b === v && currentColoring[a] >= 0) usedColors.add(currentColoring[a]);
    });
    let c = 0; while (usedColors.has(c)) c++;
    const newColoring = [...currentColoring];
    newColoring[v] = c;
    return { step: newStep, coloring: newColoring, done: newStep === ns.length - 1, v, c };
  };

  const handleNext = () => {
    const res = doNext(step, coloring, nodes, edgesSz, order);
    setStep(res.step);
    setColoring(res.coloring);
    if (res.v !== undefined) {
      const lbl = nodes[res.v].l ?? String(res.v + 1);
      setDesc(`${res.step}. lépés: v${lbl} → ${CHI_NAMES[res.c!]} (szín ${res.c! + 1})`);
    }
    if (res.done) {
      const chi = Math.max(...res.coloring) + 1;
      setVerdict(`χ(G) ≤ ${chi} (mohó szín; lehet kevesebb is)`);
    }
  };

  const handleAuto = () => {
    if (autoRef) { clearInterval(autoRef); setAutoRef(null); return; }
    const timer = setInterval(() => {
      setStep(prev => {
        setColoring(prevC => {
          const res = doNext(prev, prevC, nodes, edgesSz, order);
          if (res.v !== undefined) {
            const lbl = nodes[res.v].l ?? String(res.v + 1);
            setDesc(`${res.step}. lépés: v${lbl} → ${CHI_NAMES[res.c!]} (szín ${res.c! + 1})`);
          }
          if (res.done) {
            const chi = Math.max(...res.coloring) + 1;
            setVerdict(`χ(G) ≤ ${chi} (mohó szín; lehet kevesebb is)`);
            clearInterval(timer); setAutoRef(null);
          }
          return res.coloring;
        });
        return prev + 1;
      });
    }, 700);
    setAutoRef(timer);
  };

  return (
    <div>
      <Cols variant="7-5">
        <div>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>Interaktív mohó színezés</span>
            <SzinCanvas nodes={nodes} edges={edgesSz} coloring={coloring} step={step} order={order} />
            <div style={{ fontSize: '.82rem', color: '#22d3ee', minHeight: '1.4em', margin: '.3rem 0' }}>{desc}</div>
            <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
              <button className="op-btn is-active" onClick={handleNext}>Következő ▶</button>
              <button className="op-btn" onClick={handleAuto}>{autoRef ? 'Stop ⏹' : 'Auto ⏩'}</button>
              <button className="op-btn" onClick={() => reset()}>Reset</button>
              <button className="op-btn" style={{ borderColor: '#fbbf24', color: '#fbbf24' }} onClick={() => reset(
                EX40_NODES.map(p => ({ x: p.x, y: p.y, l: p.l })),
                EX40_EDGES,
                [0, 1, 2, 3, 4, 5]
              )}>40. Példa</button>
            </div>
            {verdict && <div style={{ fontSize: '.9rem', fontWeight: 700, color: ACC, marginTop: '.4rem' }}>{verdict}</div>}
          </div>
        </div>
        <div>
          <RichTex html={String.raw`
<div class="def-box"><div class="lbl" style="color:#22d3ee">36. Definíció — Kromatikus szám</div><div class="box-body">A \(G\) gráf \(\chi(G)\) <strong>kromatikus száma</strong> a legkisebb \(k\), amivel \(k\)-színezhető: minden szomszédos csúcspár különböző színt kap.</div></div>
<div class="info-box"><div class="lbl" style="color:#22d3ee">Főbb tételek</div><div class="box-body" style="font-size:.82rem">
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>\(\chi(G)=1\)</span><span style="font-size:.7rem;color:#6b7280">nincs él</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>\(\chi(K_n)=n\)</span><span style="font-size:.7rem;color:#6b7280">teljes gráf</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>\(\chi(G)=2\iff G\) páros</span><span style="font-size:.7rem;color:#6b7280">41. Állítás</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>\(\chi(G)\ge3\iff\) páratlan kör</span><span style="font-size:.7rem;color:#6b7280">42. Következmény</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>\(\Delta(G)=k\Rightarrow\chi\le k+1\)</span><span style="font-size:.7rem;color:#6b7280">43. Tétel (mohó)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0;border-bottom:1px solid rgba(255,255,255,.05)"><span>Síkgráf: \(\chi\le5\)</span><span style="font-size:.7rem;color:#6b7280">45. Tétel (5-színtétel)</span></div>
<div style="display:flex;gap:.5rem;padding:.3rem 0"><span>Síkgráf: \(\chi\le4\)</span><span style="font-size:.7rem;color:#6b7280">Appel–Haken, 1976</span></div>
</div></div>`} />
        </div>
      </Cols>
      <RichTex html={String.raw`<div class="ex-box"><div class="lbl lbl--ex">40. Példa — megbeszélések ütemezése (\(\chi=4\))</div><div class="box-body">6 projekt (P₁–P₆), él jelzi az időütközést (közös résztvevő). Cél: min. hány idősáv. \(P_1,P_2,P_4,P_6\) teljes részgráfot (\(K_4\)) alkotnak → \(\chi\ge4\). Valóban: \(\chi(G)=4\), tehát <strong>4 idősáv elegendő</strong>.<br><span style="display:inline-flex;align-items:center;gap:.3rem;margin-top:.4rem"><span style="display:inline-block;width:1rem;height:1rem;border-radius:.2rem;background:#22d3ee"></span>P₁ (1. idősáv)</span>&nbsp; <span style="display:inline-flex;align-items:center;gap:.3rem"><span style="display:inline-block;width:1rem;height:1rem;border-radius:.2rem;background:#f43f5e"></span>P₂ (2. idősáv)</span>&nbsp; <span style="display:inline-flex;align-items:center;gap:.3rem"><span style="display:inline-block;width:1rem;height:1rem;border-radius:.2rem;background:#34d399"></span>P₃,P₄ (3. idősáv)</span>&nbsp; Töltsd be a 40. Példát a gombbal!</div></div>`} />
    </div>
  );
}

/* ════ TABS ════ */
const TABS: Tab[] = [
  {
    id: 'paros', label: 'Páros gráfok',
    content: <ParosTab />,
  },
  {
    id: 'par', label: 'Párosítás',
    content: <ParTab />,
  },
  {
    id: 'hall', label: 'Hall-feltétel',
    content: (
      <Cols>
        <RichTex html={t3_theory} />
        <HallChecker />
      </Cols>
    ),
  },
  {
    id: 'sik', label: 'Síkgráfok',
    content: (
      <div>
        <RichTex html={t4_theory} />
        <SikCalc />
      </div>
    ),
  },
  {
    id: 'szin', label: 'Színezés',
    content: <SzinTab />,
  },
];

export default function Ch16() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika VIII — fejezet</p>
      <h1 className="ila__title">Gráfelmélet 3.</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
