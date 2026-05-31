import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

/* ─────────────────── Widget 1: interactive arrow diagram (tab 4) ─────────────────── */
const CW = 430, CH = 290, RN = 15;
const Y4 = [55, 108, 172, 225];
const Y5 = [40, 90, 143, 196, 246];
const getY = (n: number, i: number) => (n === 5 ? Y5[i] : Y4[i]);

type MapMode = 'inj' | 'sur' | 'bij' | 'none';
const TYPE_META: Record<MapMode, { nA: number; nB: number; arrows: [number, number][]; title: string; def: string }> = {
  inj: { nA: 4, nB: 5, arrows: [[0, 1], [1, 4], [2, 0], [3, 2]], title: 'Injektív (nem szürjektív)', def: 'Minden \\(B\\)-beli elemnek <strong>legfeljebb egy</strong> őse van. A \\(d\\) elemnek nincs őse → nem szürjektív.' },
  sur: { nA: 5, nB: 4, arrows: [[0, 1], [1, 3], [2, 0], [3, 2], [4, 0]], title: 'Szürjektív (nem injektív)', def: 'Minden \\(B\\)-beli elemnek van őse. Az \\(a\\) elemnek két őse van (3 és 5) → nem injektív.' },
  bij: { nA: 5, nB: 5, arrows: [[0, 1], [1, 3], [2, 0], [3, 2], [4, 4]], title: 'Bijektív leképezés', def: 'Minden \\(B\\)-beli elemnek <strong>pontosan egy</strong> őse van. Injektív és szürjektív egyszerre.' },
  none: { nA: 4, nB: 5, arrows: [[0, 1], [1, 4], [2, 1], [3, 2]], title: 'Sem injektív, sem szürjektív', def: 'A \\(b\\) elemnek két őse van (1 és 3) → nem injektív. Az \\(a\\) és \\(d\\) elemeknek nincs őse → nem szürjektív.' },
};

function drawOval(ctx: CanvasRenderingContext2D, cx: number, cy: number, rx: number, ry: number) {
  ctx.save(); ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = '#374151'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
}
function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number, label: string, border: string, fill: string) {
  ctx.beginPath(); ctx.arc(x, y, RN, 0, Math.PI * 2); ctx.fillStyle = fill; ctx.fill();
  ctx.strokeStyle = border; ctx.lineWidth = 2; ctx.stroke();
  ctx.font = 'bold 13px sans-serif'; ctx.fillStyle = border; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(label, x, y); ctx.textBaseline = 'alphabetic';
}
function drawArrow(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number, color: string, perp: number) {
  const dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy);
  const ux = dx / len, uy = dy / len;
  const sx = x1 + ux * RN, sy = y1 + uy * RN, ex = x2 - ux * RN, ey = y2 - uy * RN;
  const mx = (sx + ex) / 2 - uy * perp, my = (sy + ey) / 2 + ux * perp;
  ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(mx, my, ex, ey);
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
  const tdx = ex - mx, tdy = ey - my, tlen = Math.sqrt(tdx * tdx + tdy * tdy);
  const ang = Math.atan2(tdy / tlen, tdx / tlen);
  ctx.beginPath(); ctx.moveTo(ex, ey);
  ctx.lineTo(ex - 9 * Math.cos(ang - 0.42), ey - 9 * Math.sin(ang - 0.42));
  ctx.lineTo(ex - 9 * Math.cos(ang + 0.42), ey - 9 * Math.sin(ang + 0.42));
  ctx.closePath(); ctx.fillStyle = color; ctx.fill();
}
function drawMap(ctx: CanvasRenderingContext2D, mode: MapMode) {
  const cfg = TYPE_META[mode];
  ctx.clearRect(0, 0, CW, CH);
  const hits = new Array(cfg.nB).fill(0);
  cfg.arrows.forEach(([, bi]) => hits[bi]++);
  const hitIdx = new Array(cfg.nB).fill(0);
  cfg.arrows.forEach(([ai, bi]) => {
    const ax = 108, ay = getY(cfg.nA, ai), bx = 322, by = getY(cfg.nB, bi);
    const multi = hits[bi] > 1, color = multi ? '#f87171' : '#a78bfa';
    const idx = hitIdx[bi]++;
    const perp = multi ? (idx === 0 ? 24 : -24) : 7;
    drawArrow(ctx, ax, ay, bx, by, color, perp);
  });
  drawOval(ctx, 108, CH / 2, 52, CH * 0.46);
  drawOval(ctx, 322, CH / 2, 52, CH * 0.46);
  const labA = ['1', '2', '3', '4', '5'];
  for (let i = 0; i < cfg.nA; i++) drawNode(ctx, 108, getY(cfg.nA, i), labA[i], '#a78bfa', '#1a0f2e');
  const labB = ['a', 'b', 'c', 'd', 'e'];
  for (let j = 0; j < cfg.nB; j++) {
    const col = hits[j] > 1 ? '#f87171' : hits[j] === 1 ? '#34d399' : '#4b5563';
    drawNode(ctx, 322, getY(cfg.nB, j), labB[j], col, '#0d1117');
  }
  ctx.font = 'bold 15px Georgia,serif'; ctx.fillStyle = '#e2e8f0'; ctx.textAlign = 'center';
  ctx.fillText('A', 108, 22); ctx.fillText('B', 322, 22);
}

function ArrowDiagram() {
  const ref = useRef<HTMLCanvasElement>(null);
  const [mode, setMode] = useState<MapMode>('inj');
  useEffect(() => {
    const ctx = ref.current?.getContext('2d');
    if (ctx) drawMap(ctx, mode);
  }, [mode]);
  const cfg = TYPE_META[mode];
  return (
    <div>
      <span className="lbl">Interaktív nyíldiagramm</span>
      <div className="op-row">
        {([['inj', 'Injektív'], ['sur', 'Szürjektív'], ['bij', 'Bijektív'], ['none', 'Sem-sem']] as [MapMode, string][]).map(
          ([m, label]) => (
            <button key={m} className={`op-btn${mode === m ? ' is-active' : ''}`} onClick={() => setMode(m)}>{label}</button>
          ),
        )}
      </div>
      <canvas ref={ref} width={CW} height={CH} />
      <div style={{ display: 'flex', gap: '1.4rem', marginTop: '0.4rem', fontSize: '0.72rem' }}>
        <span style={{ color: '#34d399' }}>● pontosan 1 ős</span>
        <span style={{ color: '#f87171' }}>● 2+ ős (nem inj.)</span>
        <span style={{ color: '#4b5563' }}>● nincs ős (nem szürj.)</span>
      </div>
      <div className="def-box" style={{ marginTop: '0.75rem' }}>
        <span className="lbl">{cfg.title}</span>
        <RichTex className="box-body" html={cfg.def} />
      </div>
    </div>
  );
}

/* ─────────────────── Widget 2: √x partial-vs-total diagram (tab 6) ─────────────────── */
function SqrtCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = 430, H = 200;
    ctx.clearRect(0, 0, W, H);
    ([[105, 100, 56, 84], [325, 100, 56, 84]] as number[][]).forEach(([cx, cy, rx, ry]) => {
      ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = '#374151'; ctx.lineWidth = 1.5; ctx.stroke();
    });
    ctx.font = 'bold 12px Georgia,serif'; ctx.fillStyle = '#8892a4'; ctx.textAlign = 'center';
    ctx.fillText('ℝ', 105, 12); ctx.fillText('ℝ', 325, 12);
    const LA = [
      { y: 28, t: '-4', ok: false }, { y: 63, t: '-1', ok: false }, { y: 100, t: '0', ok: true },
      { y: 137, t: '1', ok: true }, { y: 172, t: '4', ok: true },
    ];
    const LB = [{ y: 65, t: '0' }, { y: 100, t: '1' }, { y: 135, t: '2' }];
    const arrows: [number, number][] = [[2, 0], [3, 1], [4, 2]];
    arrows.forEach(([ai, bi]) => {
      const x1 = 117, y1 = LA[ai].y, x2 = 313, y2 = LB[bi].y;
      const ang = Math.atan2(y2 - y1, x2 - x1);
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = '#a78bfa'; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - 8 * Math.cos(ang - 0.42), y2 - 8 * Math.sin(ang - 0.42));
      ctx.lineTo(x2 - 8 * Math.cos(ang + 0.42), y2 - 8 * Math.sin(ang + 0.42));
      ctx.closePath(); ctx.fillStyle = '#a78bfa'; ctx.fill();
    });
    ctx.setLineDash([3, 3]);
    [0, 1].forEach((i) => {
      ctx.beginPath(); ctx.moveTo(117, LA[i].y); ctx.lineTo(162, LA[i].y);
      ctx.strokeStyle = '#f87171'; ctx.lineWidth = 1.2; ctx.stroke();
    });
    ctx.setLineDash([]);
    ctx.font = '12px sans-serif'; ctx.fillStyle = '#f87171'; ctx.textBaseline = 'middle';
    [0, 1].forEach((i) => ctx.fillText('✗', 168, LA[i].y));
    ctx.textBaseline = 'alphabetic';
    const drawN = (x: number, y: number, t: string, stroke: string, bg: string) => {
      ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.fillStyle = bg; ctx.fill();
      ctx.strokeStyle = stroke; ctx.lineWidth = 1.8; ctx.stroke();
      ctx.font = '10px monospace'; ctx.fillStyle = stroke; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(t, x, y); ctx.textBaseline = 'alphabetic';
    };
    LA.forEach((n) => drawN(105, n.y, n.t, n.ok ? '#a78bfa' : '#f87171', n.ok ? '#1a0f2e' : '#1a0808'));
    LB.forEach((n) => drawN(325, n.y, n.t, '#34d399', '#0f1a0f'));
    ctx.font = '10px monospace'; ctx.fillStyle = '#6b7280'; ctx.textAlign = 'left';
    ctx.fillText('D(f) = [0,∞)', 10, H - 6);
    ctx.fillStyle = '#f87171'; ctx.textAlign = 'right';
    ctx.fillText('negatív x → nincs kép', W - 10, H - 6);
  }, []);
  return <canvas ref={ref} width={430} height={200} style={{ margin: '0.5rem 0 0.65rem' }} />;
}

/* ─────────────────── Static tab content (verbatim HTML, KaTeX preserved via String.raw) ─────────────────── */
const t1a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Megfeleltetés</div><div class="box-body">Legyenek \(A\) és \(B\) halmazok. Az \(A \times B\) Descartes-szorzat részhalmazait <strong style="color:#a78bfa">A-ból B-be történő megfeleltetésnek</strong> nevezzük.<br><br>\(A\) a megfeleltetés <strong style="color:#a78bfa">indulási halmaza</strong>, \(B\) az <strong style="color:#a78bfa">érkezési halmaza</strong>.<br><br>Ha \(\rho \subseteq A \times B\) és \((a,b) \in \rho\), ezt \(a\,\rho\,b\) jelöléssel is írjuk.</div></div>
<div class="def-box"><div class="lbl mb-2">Értelmezési tartomány & Értékkészlet</div><div class="box-body">\[\,D(\rho) = \{a \in A : \exists\, b \in B,\; (a,b) \in \rho\}\] az \(A\)-beli elemek halmaza, amelyhez van B-beli pár — az <strong style="color:#a78bfa">értelmezési tartomány</strong>.<br><br>\[R(\rho) = \{b \in B : \exists\, a \in A,\; (a,b) \in \rho\}\] a B-beli elemek halmaza, amelyhez van A-beli pár — az <strong style="color:#a78bfa">értékkészlet</strong>.</div></div>
<div class="def-box"><div class="lbl mb-2">Identikus megfeleltetés & Reláció</div><div class="box-body">Az \(A\) halmaz <strong style="color:#a78bfa">identikus megfeleltetése</strong>: \[\omega_A = \{(a,a) : a \in A\}\] Az <strong style="color:#a78bfa">reláció</strong>: \(A\)-ból \(A\)-ba történő megfeleltetés (\(\rho \subseteq A \times A\)).</div></div>`;
const t1b = String.raw`
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példák — \(X = \{1,2\},\; Y = \{a,b,c\}\)</div><div class="box-body">\(\rho_1 = \{(1,a),(1,b),(2,a),(2,c)\}\) — egy elemnek több megfelelője<br>\(\rho_2 = \{(2,a),(2,b)\}\) — \(1\)-esnek nincs megfelelője<br>\(\rho_3 = \emptyset\) — üres megfeleltetés<br>\(\rho_4 = X \times Y\) — teljes megfeleltetés<br><br>\(D(\rho_1) = \{1,2\},\quad R(\rho_1) = \{a,b,c\}\)<br>\(D(\rho_2) = \{2\},\quad R(\rho_2) = \{a,b\}\)</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — Identikus megfeleltetés</div><div class="box-body">Legyen \(A = \{1,2,3,4\}\). Ekkor: \[\omega_A = \{(1,1),(2,2),(3,3),(4,4)\}\] Minden elem pontosan önmagához van rendelve.</div></div>
<div class="info-box"><div class="lbl mb-2">Nyíldiagramm értelmezése</div><div class="box-body">Az \(A\)-beli elemeket a bal oválisban, a \(B\)-belieket a jobb oválisban lévő körök jelölik. Egy \((a,b) \in \rho\) párt nyíl ábrázol \(a\)-tól \(b\)-hez.<br><br><span style="color:#6b7280;font-size:.78rem">Egy elemből több nyíl is indulhat. Elem nyíl nélkül is maradhat (ha \(a \notin D(\rho)\)).</span></div></div>`;
const t2a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Szorzat (kompozíció)</div><div class="box-body">Legyenek \(\rho \subseteq A \times B\) és \(\sigma \subseteq B \times C\). Szorzatuk: \[\rho\sigma = \{(a,c) \in A \times C : \exists\, b \in B,\; (a,b)\in\rho \;\text{és}\; (b,c)\in\sigma\}\] Feltétel: \(\rho\) érkezési halmaza = \(\sigma\) indulási halmaza.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — szorzat kiszámítása</div><div class="box-body">\(X=\{1,2,3\},\; Y=\{a,b,c,d\},\; Z=\{+,-,\circ\}\)<br>\(\rho = \{(1,a),(1,b),(2,a),(2,c),(3,d)\}\)<br>\(\sigma = \{(a,-),(b,\circ),(c,+),(c,-)\}\)<br><br>\(\rho\sigma = \{(1,-),(1,\circ),(2,+),(2,-)\}\)<br><span style="color:#6b7280;font-size:.77rem">A \(\sigma\rho\) szorzat nem definiált.</span></div></div>
<div class="def-box"><div class="lbl mb-2">Definíció — Inverz</div><div class="box-body">A \(\rho \subseteq A \times B\) megfeleltetés <strong style="color:#a78bfa">inverzén</strong>: \[\rho^{-1} = \{(b,a) \in B \times A : (a,b) \in \rho\}\] B-ből A-ba mutató megfeleltetés — a nyilak iránya megfordul.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példa — inverz</div><div class="box-body">\(X=\{1,2,3\},\; Y=\{a,b,c,d\}\)<br>\(\rho = \{(1,a),(1,b),(2,a),(2,c),(3,d)\}\)<br>\(\rho^{-1} = \{(a,1),(b,1),(a,2),(c,2),(d,3)\}\)</div></div>`;
const t2b = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Megfeleltetések azonosságai</div><div class="box-body">Legyenek \(\rho \subseteq A\times B\), \(\sigma \subseteq B\times C\), \(\tau \subseteq C\times D\):<ol style="margin:.5rem 0 0 1.1rem;padding:0;line-height:2.2"><li>\(\rho(\sigma\tau) = (\rho\sigma)\tau\) (asszociativitás)</li><li>\(\omega_A\,\rho = \rho\)</li><li>\(\rho\,\omega_B = \rho\)</li><li>\((\rho^{-1})^{-1} = \rho\)</li><li>\((\rho\sigma)^{-1} = \sigma^{-1}\rho^{-1}\)</li></ol></div></div>
<div class="info-box"><div class="lbl mb-2">Bizonyítás — asszociativitás</div><div class="box-body"><div class="pf-step"><div class="pf-eq">\((a,d) \in \rho(\sigma\tau)\)</div></div><div class="pf-step"><div class="pf-eq">\(\Leftrightarrow \exists\,b:(a,b)\in\rho,\,(b,d)\in\sigma\tau\)</div><div class="pf-why">\(\sigma\tau\) def.</div></div><div class="pf-step"><div class="pf-eq">\(\Leftrightarrow \exists\,b,c:(a,b)\in\rho,\,(b,c)\in\sigma,\,(c,d)\in\tau\)</div></div><div class="pf-step"><div class="pf-eq" style="color:#a78bfa">\(\Leftrightarrow (a,d)\in(\rho\sigma)\tau \quad\blacksquare\)</div></div></div></div>
<div class="info-box"><div class="lbl mb-2">Bizonyítás — \((\rho\sigma)^{-1} = \sigma^{-1}\rho^{-1}\)</div><div class="box-body"><div class="pf-step"><div class="pf-eq">\((c,a)\in(\rho\sigma)^{-1} \Leftrightarrow (a,c)\in\rho\sigma\)</div></div><div class="pf-step"><div class="pf-eq">\(\Leftrightarrow \exists\,b:(a,b)\in\rho,\,(b,c)\in\sigma\)</div></div><div class="pf-step"><div class="pf-eq">\(\Leftrightarrow \exists\,b:(b,a)\in\rho^{-1},\,(c,b)\in\sigma^{-1}\)</div></div><div class="pf-step"><div class="pf-eq" style="color:#a78bfa">\(\Leftrightarrow (c,a)\in\sigma^{-1}\rho^{-1} \quad\blacksquare\)</div></div></div></div>`;
const t3a = String.raw`
<div class="def-box"><div class="lbl mb-2">Definíció — Parciális leképezés</div><div class="box-body">A \(\varphi \subseteq A \times B\) megfeleltetés <strong style="color:#a78bfa">parciális leképezés</strong>, ha bármely \(a \in A\) elemhez <strong>legfeljebb egy</strong> \(b \in B\) létezik, amelyre \((a,b)\in\varphi\).<br><br>Jelölés: \(\varphi : A \to B\). Ha \(b = \varphi(a)\), akkor \(b\) az \(a\) <strong style="color:#a78bfa">képe</strong>, \(a\) a \(b\) <strong style="color:#a78bfa">őse</strong>.</div></div>
<div class="def-box"><div class="lbl mb-2">Definíció — Leképezés (függvény)</div><div class="box-body">A \(\varphi : A \to B\) parciális leképezés <strong style="color:#a78bfa">leképezés</strong>, ha bármely \(a \in A\) elemhez <strong>pontosan egy</strong> \(b \in B\) létezik.<br><br>Ekvivalensen: \(D(\varphi) = A\).<br><br>Parciális leképezések szorzata parciális leképezés; leképezések szorzata leképezés.</div></div>
<div class="def-box"><div class="lbl mb-2">Identikus leképezés & Sorozatok</div><div class="box-body">Az \(A \to A,\; a \mapsto a\) leképezés az <strong style="color:#a78bfa">identikus leképezés</strong>: \(\mathrm{id}_A\), \(\mathrm{id}_A(x) = x\).<br><br><strong style="color:#a78bfa">Végtelen sorozat:</strong> \(\mathbb{N} \to \mathbb{R}\): \(a_1,a_2,a_3,\ldots\)<br><strong style="color:#a78bfa">Véges sorozat:</strong> \(\{1,\ldots,n\} \to \mathbb{R}\): \(a_1,\ldots,a_n\)</div></div>`;
const t3b = String.raw`
<div class="def-box"><div class="lbl mb-2">Kompozíció (szorzat)</div><div class="box-body">Ha \(\varphi : A \to B\) és \(\psi : B \to C\) leképezések: \[\psi \circ \varphi : A \to C, \quad (\psi\circ\varphi)(x) = \psi(\varphi(x))\] \(\varphi\) a <strong style="color:#a78bfa">belső</strong>, \(\psi\) a <strong style="color:#a78bfa">külső</strong> függvény.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Kompozíció tulajdonságai</div><div class="box-body">Ha \(\varphi:A\to B\), \(\psi:B\to C\), \(\eta:C\to D\): \[(\varphi\psi)\eta = \varphi(\psi\eta)\] \[\mathrm{id}_A\,\varphi = \varphi, \qquad \varphi\,\mathrm{id}_B = \varphi\] Általában \(\varphi\psi \neq \psi\varphi\) — a szorzás <strong>nem kommutatív</strong>.</div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Példák — függvény azonossága</div><div class="box-body">\(f:\mathbb{R}\to\mathbb{R},\; f(x)=\sqrt{x}\) — parciális leképezés (\(D(f)=[0,\infty)\))<br>\(g:[0,\infty)\to[0,\infty),\; g(x)=\sqrt{x}\) — teljes leképezés<br><br>Két leképezés <strong style="color:#a78bfa">azonos</strong>, ha azonos az indulási halmazuk, érkezési halmazuk és szabályuk. Tehát \(f \neq g\).</div></div>`;
const t4right = String.raw`
<div class="def-box"><div class="lbl mb-2">Injektív (injekció)</div><div class="box-body">\(\varphi:A\to B\) <strong style="color:#a78bfa">injektív</strong>, ha minden \(B\)-beli elemnek legfeljebb egy őse van: \[a_1 \neq a_2 \;\Rightarrow\; \varphi(a_1) \neq \varphi(a_2)\] Nyíldiagrammban: minden B-pontba legfeljebb egy nyíl mutat.</div></div>
<div class="def-box"><div class="lbl mb-2">Szürjektív (ráképezés)</div><div class="box-body">\(\varphi:A\to B\) <strong style="color:#a78bfa">szürjektív</strong>, ha \(R(\varphi)=B\): \[\forall\,b\in B\;\exists\,a\in A:\varphi(a)=b\] Nyíldiagrammban: minden B-pontba legalább egy nyíl mutat.</div></div>
<div class="def-box"><div class="lbl mb-2">Bijektív (kölcsönösen egyértelmű)</div><div class="box-body">\(\varphi:A\to B\) <strong style="color:#a78bfa">bijektív</strong>, ha injektív és szürjektív: \[\forall\,b\in B\;\exists!\,a\in A:\varphi(a)=b\] Nyíldiagrammban: minden B-pontba pontosan egy nyíl mutat.</div></div>`;
const t5a = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Szorzat és leképezés-típus</div><div class="box-body">Legyenek \(\varphi:A\to B\), \(\psi:B\to C\) leképezések:<ol style="margin:.4rem 0 0 1.1rem;padding:0;line-height:2.2"><li>ha \(\varphi,\psi\) injektív \(\Rightarrow\) \(\varphi\psi\) injektív</li><li>ha \(\varphi,\psi\) szürjektív \(\Rightarrow\) \(\varphi\psi\) szürjektív</li><li>ha \(\varphi,\psi\) bijektív \(\Rightarrow\) \(\varphi\psi\) bijektív</li><li>ha \(\varphi\psi\) injektív \(\Rightarrow\) \(\varphi\) injektív</li><li>ha \(\varphi\psi\) szürjektív \(\Rightarrow\) \(\psi\) szürjektív</li><li>ha \(\varphi\psi\) bijektív \(\Rightarrow\) \(\varphi\) injektív és \(\psi\) szürjektív</li></ol></div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Inverz és bijekció</div><div class="box-body">Legyen \(\varphi:A\to B\) leképezés. A \(\varphi^{-1}\) megfeleltetés <strong>pontosan akkor leképezés</strong>, ha \(\varphi\) bijektív.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Tétel — Bijektív leképezés tételei</div><div class="box-body">Ha \(\varphi:A\to B\) és \(\psi:B\to C\) bijektívek:<ol style="margin:.4rem 0 0 1.1rem;padding:0;line-height:2.2"><li>\(\varphi^{-1}\) bijektív leképezés</li><li>\(\varphi\varphi^{-1} = \mathrm{id}_A\) és \(\varphi^{-1}\varphi = \mathrm{id}_B\)</li><li>\((\varphi^{-1})^{-1} = \varphi\) és \((\varphi\psi)^{-1} = \psi^{-1}\varphi^{-1}\)</li></ol></div></div>`;
const t5b = String.raw`
<div class="info-box"><div class="lbl mb-3">Fogalmak kapcsolata</div><div style="display:flex;justify-content:center"><svg width="310" height="195" viewBox="0 0 310 195"><ellipse cx="155" cy="98" rx="151" ry="91" fill="rgba(167,139,250,.04)" stroke="#a78bfa" stroke-width="1.2" stroke-dasharray="6,3"/><text x="6" y="28" fill="#a78bfa" font-size="10.5">megfeleltetések</text><ellipse cx="158" cy="104" rx="124" ry="73" fill="rgba(124,58,237,.06)" stroke="#7c3aed" stroke-width="1.2" stroke-dasharray="4,3"/><text x="20" y="56" fill="#7c3aed" font-size="10">parciális leképezések</text><ellipse cx="170" cy="110" rx="99" ry="56" fill="rgba(196,181,253,.05)" stroke="#c4b5fd" stroke-width="1.2"/><text x="68" y="84" fill="#c4b5fd" font-size="10">leképezések</text><ellipse cx="206" cy="100" rx="63" ry="42" fill="rgba(52,211,153,.07)" stroke="#34d399" stroke-width="1.3"/><text x="172" y="74" fill="#34d399" font-size="9.5">injektív</text><ellipse cx="195" cy="124" rx="63" ry="34" fill="rgba(251,191,36,.07)" stroke="#fbbf24" stroke-width="1.3"/><text x="144" y="153" fill="#fbbf24" font-size="9.5">szürjektív</text><ellipse cx="205" cy="112" rx="33" ry="20" fill="rgba(248,113,113,.15)" stroke="#f87171" stroke-width="1.5"/><text x="183" y="115" fill="#f87171" font-size="8.5" font-weight="bold">bijektív</text></svg></div><div style="font-size:.73rem;color:#6b7280;text-align:center">\(\text{bijektív} = \text{injektív} \cap \text{szürjektív} \subset \text{leképezések} \subset \text{parciális} \subset \text{megfeleltetések}\)</div></div>
<div class="def-box"><div class="lbl mb-2">Descartes-szorzat & Kiválasztási függvény</div><div class="box-body">Legyen \(I\) indexhalmaz, \(A_i\) adott halmazok minden \(i\in I\)-re.<br><br><strong style="color:#a78bfa">Kiválasztási függvény:</strong> \[\varphi : I \to \bigcup_{i\in I} A_i, \qquad \varphi(i) \in A_i\] <strong style="color:#a78bfa">Descartes-szorzat:</strong> \[\prod_{i\in I} A_i = \text{az összes kiválasztási függvény halmaza}\]</div></div>`;
const t6a = String.raw`
<div class="info-box"><div class="lbl mb-2">Dom és Ran: jelölések eredete</div><div class="box-body">A <strong style="color:#a78bfa">Dom</strong> rövidítés az angol <em>domain</em>, a <strong style="color:#a78bfa">Ran</strong> az angol <em>range</em> szóból ered. A jelölési konvenciók forrása a <strong style="color:#c4b5fd">Szendrei-féle jegyzetek</strong> — ezért szerepel \(D(\rho)\) és \(R(\rho)\).</div></div>
<div class="def-box" style="border-left-color:#fbbf24"><div class="lbl mb-2" style="color:#fbbf24">⚠ Terminológiai különbség más könyvekben</div><div class="box-body">Sok más tankönyv az általános \(A \times B\) részhalmaz esetet is <em>relációnak</em> hívja. A mi kurzusunkon: <ul style="margin:.4rem 0 0 1rem;padding:0;line-height:2.1"><li><strong style="color:#a78bfa">megfeleltetés</strong> — általános \(\rho \subseteq A \times B\)</li><li><strong style="color:#a78bfa">reláció</strong> — csak \(\rho \subseteq A \times A\)</li></ul></div></div>
<div class="ex-box"><div class="lbl lbl--ex mb-2">Leképezések a mindennapi életből</div><div class="box-body">hallgató \(\mapsto\) kora; tantárgy \(\mapsto\) beiratkozottak száma; alkalmazott \(\mapsto\) anyja neve — mind teljes leképezés (\(D(\varphi) = A\)).</div></div>`;
const t6b1 = String.raw`<div class="box-body">\(f:\mathbb{R}\to\mathbb{R},\; f(x)=\sqrt{x}\) — <strong style="color:#f87171">parciális</strong> leképezés, mert \(D(f) = [0,\infty) \subsetneq \mathbb{R}\).<br><br>\(g:[0,\infty)\to[0,\infty),\; g(x)=\sqrt{x}\) — <strong style="color:#34d399">teljes</strong> leképezés.<br><br><span style="color:#fbbf24;font-size:.77rem">▶ Azonos szabály, de \(f \neq g\): eltér az indulási és érkezési halmazuk.</span></div>`;
const t6b2 = String.raw`
<div class="thm-box"><div class="lbl lbl--thm mb-2">Miért kell bijekció az inverzhez?</div><div class="box-body"><ul style="margin:.5rem 0 0 1rem;padding:0;line-height:2.1"><li><strong style="color:#f87171">Nem szürjektív</strong> → van \(b\) ős nélkül → \(\varphi^{-1}\) nem leképezés.</li><li><strong style="color:#f87171">Nem injektív</strong> → van \(b\) két őssel → \(\varphi^{-1}\) nem egyértékű.</li></ul>Csak bijekcióra garantált, hogy \(\varphi^{-1}\) is leképezés.</div></div>
<div class="thm-box"><div class="lbl lbl--thm mb-2">Kompozíció: visszafelé irányú tételek</div><div class="box-body"><div class="pf-step"><div class="pf-eq">\(\varphi\psi\) injektív</div><div class="pf-why">\(\Rightarrow\; \varphi\) injektív</div></div><div class="pf-step"><div class="pf-eq">\(\varphi\psi\) szürjektív</div><div class="pf-why">\(\Rightarrow\; \psi\) szürjektív</div></div></div></div>`;

const TABS: Tab[] = [
  { id: 'me', label: 'Megfeleltetések', content: <Cols><RichTex html={t1a} /><RichTex html={t1b} /></Cols> },
  { id: 'si', label: 'Szorzat & Inverz', content: <Cols><RichTex html={t2a} /><RichTex html={t2b} /></Cols> },
  { id: 'le', label: 'Leképezések', content: <Cols><RichTex html={t3a} /><RichTex html={t3b} /></Cols> },
  { id: 'ti', label: 'Inj / Szürj / Bij', content: <Cols variant="7-5"><ArrowDiagram /><RichTex html={t4right} /></Cols> },
  { id: 'te', label: 'Tételek', content: <Cols><RichTex html={t5a} /><RichTex html={t5b} /></Cols> },
  {
    id: 'ex',
    label: 'Előadás+',
    content: (
      <Cols>
        <RichTex html={t6a} />
        <div>
          <div className="ex-box">
            <span className="lbl lbl--ex">f(x) = √x — parciális vs. teljes leképezés</span>
            <SqrtCanvas />
            <RichTex html={t6b1} />
          </div>
          <RichTex html={t6b2} />
        </div>
      </Cols>
    ),
  },
];

export default function Ch2() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 2. fejezet</p>
      <h1 className="ila__title">Megfeleltetések és leképezések</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
