import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cols, Tabs, RichTex, type Tab } from '../components/kit';

/* ════════ Tab 1: truth table ════════ */
interface TTF { label: string; fn: (...v: boolean[]) => boolean; vars: string[]; }
const TT_FORMULAS: Record<string, TTF> = {
  imp: { label: 'A → B', fn: (a, b) => !a || b, vars: ['A', 'B'] },
  eqv: { label: 'A ↔ B', fn: (a, b) => a === b, vars: ['A', 'B'] },
  nand: { label: '¬(A ∧ B)', fn: (a, b) => !(a && b), vars: ['A', 'B'] },
  xor: { label: 'A ⊕ B', fn: (a, b) => a !== b, vars: ['A', 'B'] },
  ab3: { label: 'A ∧ (B ∨ C)', fn: (a, b, c) => a && (b || c), vars: ['A', 'B', 'C'] },
  imp3: { label: 'A → (B → C)', fn: (a, b, c) => !a || (!b || c), vars: ['A', 'B', 'C'] },
};

function TruthCell({ v, on }: { v: boolean; on?: () => void }) {
  return (
    <td className={v ? 'T-cell' : 'F-cell'} onClick={on} style={on ? { cursor: 'pointer' } : undefined}>
      {v ? 'i' : 'h'}
    </td>
  );
}

function TruthTable() {
  const [key, setKey] = useState('imp');
  const f = TT_FORMULAS[key];
  const v = f.vars, n = v.length, rows = 1 << n;
  const data = [];
  let allTrue = true, allFalse = true;
  for (let r = 0; r < rows; r++) {
    const vals = v.map((_, i) => !!(r & (1 << (n - 1 - i))));
    const res = f.fn(...vals);
    if (!res) allTrue = false; else allFalse = false;
    data.push({ vals, res });
  }
  const type = allTrue
    ? <span style={{ color: '#4ade80' }}>⊨ Tautológia</span>
    : allFalse
      ? <span style={{ color: '#f87171' }}>Ellentmondás (azonosan hamis)</span>
      : <span style={{ color: '#fbbf24' }}>Kielégíthető (sem tautológia, sem ellentmondás)</span>;
  return (
    <div className="info-box">
      <span className="lbl">Interaktív igazságtábla</span>
      <div style={{ margin: '.5rem 0' }}>
        <select className="ila-select" value={key} onChange={(e) => setKey(e.target.value)}>
          {Object.entries(TT_FORMULAS).map(([k, ff]) => <option key={k} value={k}>{ff.label}</option>)}
        </select>
      </div>
      <table className="truth-tbl">
        <thead><tr>{v.map((x) => <th key={x}>{x}</th>)}<th style={{ color: '#f9a8d4' }}>{f.label}</th></tr></thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>{row.vals.map((b, j) => <TruthCell key={j} v={b} />)}<TruthCell v={row.res} /></tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: '.82rem', marginTop: '.5rem' }}>{type}</div>
    </div>
  );
}

/* ════════ Tab 2: NNF presets ════════ */
const NNF_DATA: Record<string, { label: string; F: string; negF: string; Fstar: string; note: string }> = {
  'A and (not B)': {
    label: 'A ∧ (¬B)',
    F: String.raw`F = A \wedge (\neg B)`, negF: String.raw`\neg F \equiv (\neg A) \vee B`,
    Fstar: String.raw`F^* = (\neg A) \vee B`, note: 'De Morgan: negáció befele tolva, ∧ → ∨',
  },
  '(A and (not B)) or (B and (not C))': {
    label: '(A ∧ ¬B) ∨ (B ∧ ¬C)',
    F: String.raw`F = (A \wedge \neg B) \vee (B \wedge \neg C)`, negF: String.raw`\neg F \equiv (\neg A \vee B) \wedge (\neg B \vee C)`,
    Fstar: String.raw`F^* = (\neg A \vee B) \wedge (\neg B \vee C)`, note: 'Kétszeres De Morgan alkalmazása',
  },
  '(not A) and (B or (not C))': {
    label: '(¬A) ∧ (B ∨ ¬C)',
    F: String.raw`F = (\neg A) \wedge (B \vee \neg C)`, negF: String.raw`\neg F \equiv A \vee ((\neg B) \wedge C)`,
    Fstar: String.raw`F^* = A \vee (\neg B \wedge C)`, note: 'Előadás példa: ¬¬A = A; De Morgan alkalmazva',
  },
};

function NnfCalc() {
  const [key, setKey] = useState('');
  const e = NNF_DATA[key];
  return (
    <div className="info-box">
      <span className="lbl">Interaktív NNF kalkulátor</span>
      <div style={{ margin: '.5rem 0' }}>
        <select className="ila-select" value={key} onChange={(ev) => setKey(ev.target.value)}>
          <option value="">— Előbeállítás —</option>
          {Object.entries(NNF_DATA).map(([k, d]) => <option key={k} value={k}>{d.label}</option>)}
        </select>
      </div>
      {e ? (
        <RichTex
          key={key}
          html={String.raw`<div style="font-size:.85rem;line-height:1.9"><div><span style="color:#a78bfa">F:</span> \(${e.F}\)</div><div><span style="color:#a78bfa">¬F:</span> \(${e.negF}\)</div><div><span style="color:#4ade80">F* =</span> \(${e.Fstar}\)</div><div style="color:#8892a4;margin-top:.25rem">${e.note}</div></div>`}
        />
      ) : <em style={{ color: '#8892a4' }}>Válassz előbeállítást fent.</em>}
    </div>
  );
}

/* ════════ Tab 3: DNF/KNF generator ════════ */
const COMBOS: [string, string][] = [['i', 'i'], ['i', 'h'], ['h', 'i'], ['h', 'h']];
function DnfGen() {
  const [fVals, setFVals] = useState([false, false, false, false]);
  const toggle = (i: number) => setFVals((p) => p.map((v, j) => (j === i ? !v : v)));
  const trueRows: number[] = [], falseRows: number[] = [];
  fVals.forEach((v, i) => (v ? trueRows : falseRows).push(i));
  const tdnf = trueRows.length === 0
    ? null
    : String.raw`\(` + trueRows.map((i) => {
      const a = COMBOS[i][0] === 'i', b = COMBOS[i][1] === 'i';
      return `(${a ? 'A' : '\\neg A'} \\wedge ${b ? 'B' : '\\neg B'})`;
    }).join(' \\vee ') + String.raw`\)`;
  const tknf = falseRows.length === 0
    ? null
    : String.raw`\(` + falseRows.map((i) => {
      const a = COMBOS[i][0] === 'i', b = COMBOS[i][1] === 'i';
      return `(${a ? '\\neg A' : 'A'} \\vee ${b ? '\\neg B' : 'B'})`;
    }).join(' \\wedge ') + String.raw`\)`;
  return (
    <div className="info-box">
      <span className="lbl">Igazságtábla → TDNF/TKNF (A, B)</span>
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0' }}>Kattints az F oszlop celláira az igazságértékek beállításához:</p>
      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <table className="truth-tbl">
          <thead><tr><th>A</th><th>B</th><th>F (kattints)</th></tr></thead>
          <tbody>
            {COMBOS.map(([a, b], i) => (
              <tr key={i}>
                <td>{a}</td><td>{b}</td>
                <TruthCell v={fVals[i]} on={() => toggle(i)} />
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ flex: 1, minWidth: 200, fontSize: '.85rem' }}>
          <div style={{ marginBottom: '.5rem' }}>
            <span style={{ color: '#a78bfa', fontWeight: 700 }}>T.d.n.f.:</span><br />
            {tdnf ? <RichTex html={tdnf} key={tdnf} /> : <span style={{ color: '#f87171' }}>Azonosan hamis — nincs t.d.n.f.</span>}
          </div>
          <div>
            <span style={{ color: '#22d3ee', fontWeight: 700 }}>T.k.n.f.:</span><br />
            {tknf ? <RichTex html={tknf} key={tknf} /> : <span style={{ color: '#4ade80' }}>Azonosan igaz — nincs t.k.n.f.</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════ Tab 4: circuit canvas ════════ */
function Circuit() {
  const [A, setA] = useState(false), [B, setB] = useState(false), [C, setC] = useState(false);
  const ref = useRef<HTMLCanvasElement>(null);
  const nB = !B, nC = !C, g1 = A && nB, g2 = B && nC, F = g1 || g2;
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const line = (x1: number, y1: number, x2: number, y2: number, on: boolean) => {
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
      ctx.strokeStyle = on ? '#a78bfa' : '#30363d'; ctx.lineWidth = 2; ctx.stroke();
    };
    const gate = (x: number, y: number, type: string, val: boolean, label: string) => {
      ctx.beginPath(); ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fillStyle = val ? (type === 'not' ? '#f87171' : '#a78bfa') : '#1e1e2e';
      ctx.fill(); ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillStyle = '#e6edf3'; ctx.font = 'bold 10px monospace'; ctx.textAlign = 'center';
      ctx.fillText(label, x, y + 4);
    };
    const lbl = (x: number, y: number, txt: string, clr = '#8b949e') => {
      ctx.fillStyle = clr; ctx.font = '11px monospace'; ctx.textAlign = 'center'; ctx.fillText(txt, x, y);
    };
    lbl(30, 50, 'A', A ? '#a78bfa' : '#484f58');
    lbl(30, 100, 'B', B ? '#a78bfa' : '#484f58');
    lbl(30, 150, 'C', C ? '#a78bfa' : '#484f58');
    line(50, 100, 110, 100, B); gate(128, 100, 'not', nB, '¬B'); line(146, 100, 170, 100, nB);
    line(50, 150, 110, 150, C); gate(128, 150, 'not', nC, '¬C'); line(146, 150, 170, 150, nC);
    line(50, 50, 170, 50, A);
    line(170, 50, 220, 50, A); line(170, 100, 220, 100, nB);
    ctx.beginPath(); ctx.moveTo(220, 55); ctx.lineTo(220, 95); ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1; ctx.stroke();
    gate(240, 75, 'and', g1, 'AND'); line(258, 75, 300, 75, g1);
    line(170, 100, 220, 115, nB); line(170, 150, 220, 135, nC);
    ctx.beginPath(); ctx.moveTo(220, 115); ctx.lineTo(220, 135); ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1; ctx.stroke();
    gate(240, 125, 'and', g2, 'AND'); line(258, 125, 300, 125, g2);
    line(300, 75, 380, 75, g1); line(300, 125, 380, 125, g2);
    ctx.beginPath(); ctx.moveTo(380, 75); ctx.lineTo(380, 125); ctx.strokeStyle = '#30363d'; ctx.lineWidth = 1; ctx.stroke();
    gate(400, 100, 'or', F, 'OR'); line(418, 100, 480, 100, F);
    ctx.beginPath(); ctx.arc(490, 100, 12, 0, Math.PI * 2);
    ctx.fillStyle = F ? '#fbbf24' : '#1e1e2e'; ctx.fill(); ctx.strokeStyle = '#484f58'; ctx.lineWidth = 1.5; ctx.stroke();
    lbl(490, 104, 'F', F ? '#0d1117' : '#484f58');
    lbl(30, 62, A ? 'i' : 'h', A ? '#4ade80' : '#f87171');
    lbl(30, 112, B ? 'i' : 'h', B ? '#4ade80' : '#f87171');
    lbl(30, 162, C ? 'i' : 'h', C ? '#4ade80' : '#f87171');
  }, [A, B, C, nB, nC, g1, g2, F]);
  return (
    <div className="info-box">
      <RichTex html={String.raw`<span class="lbl">Interaktív kapuhálózat — \(F = (A \wedge \neg B) \vee (B \wedge \neg C)\)</span>`} />
      <p style={{ fontSize: '.77rem', color: '#8892a4', margin: '.4rem 0' }}>Állítsd be A, B, C értékét — a hálózat kiszámolja F értékét:</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '.5rem', fontSize: '.85rem' }}>
        <label><input type="checkbox" checked={A} onChange={(e) => setA(e.target.checked)} /> A = i</label>
        <label><input type="checkbox" checked={B} onChange={(e) => setB(e.target.checked)} /> B = i</label>
        <label><input type="checkbox" checked={C} onChange={(e) => setC(e.target.checked)} /> C = i</label>
      </div>
      <canvas ref={ref} width={560} height={200} style={{ background: '#0d1117', border: '1px solid #21262d', borderRadius: 6, maxWidth: '100%' }} />
      <div style={{ marginTop: '.5rem', fontSize: '.85rem' }}>
        A={A ? 'i' : 'h'}, B={B ? 'i' : 'h'}, C={C ? 'i' : 'h'} → <strong style={{ color: F ? '#4ade80' : '#f87171', fontSize: '1rem' }}>F = {F ? 'i' : 'h'}</strong>
        {F ? <span style={{ color: '#fbbf24' }}> ⚡ áram folyik</span> : <span style={{ color: '#8892a4' }}> nincs áram</span>}
      </div>
    </div>
  );
}

/* ════════ Tab 5: tautology checker ════════ */
const TAUT_DATA: Record<string, { label: string; fn: (a: boolean, b: boolean) => boolean }> = {
  taut_excl: { label: 'A ∨ ¬A', fn: (a) => a || !a },
  taut_imp: { label: 'A → A', fn: (a) => !a || a },
  taut_mp: { label: 'A ∧ (A→B) → B', fn: (a, b) => !(a && (!a || b)) || b },
  not_taut_ab: { label: 'A → B', fn: (a, b) => !a || b },
  not_taut_and: { label: 'A ∧ B', fn: (a, b) => a && b },
};
function TautChecker() {
  const [key, setKey] = useState('taut_excl');
  const f = TAUT_DATA[key];
  const rows: { av: boolean; bv: boolean; res: boolean }[] = [];
  let taut = true;
  for (let a = 1; a >= 0; a--) for (let b = 1; b >= 0; b--) {
    const av = !!a, bv = !!b, res = f.fn(av, bv);
    if (!res) taut = false;
    rows.push({ av, bv, res });
  }
  return (
    <div className="info-box">
      <span className="lbl">Tautológia-ellenőrző (2 változó)</span>
      <div style={{ margin: '.5rem 0' }}>
        <select className="ila-select" value={key} onChange={(e) => setKey(e.target.value)}>
          {Object.entries(TAUT_DATA).map(([k, d]) => <option key={k} value={k}>{d.label}</option>)}
        </select>
      </div>
      <table className="truth-tbl">
        <thead><tr><th>A</th><th>B</th><th>{f.label}</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={!r.res ? 'highlight-row' : undefined}>
              <TruthCell v={r.av} /><TruthCell v={r.bv} /><TruthCell v={r.res} />
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ fontSize: '.82rem', marginTop: '.5rem' }}>
        {taut
          ? <span style={{ color: '#4ade80', fontWeight: 700 }}>⊨ Tautológia — minden sorban igaz</span>
          : <span style={{ color: '#f87171', fontWeight: 700 }}>Nem tautológia — piros sor mutatja az ellenpéldát</span>}
      </div>
    </div>
  );
}

/* ════════ Static theory ════════ */
const t1a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Ítéletek és logikai műveletek</h5>
<div class="def-box"><div class="box-body"><strong>Ítélet (propozíció):</strong> Olyan kijelentő mondat, amely igaz (<strong style="color:#4ade80">i</strong>) vagy hamis (<strong style="color:#f87171">h</strong>), de nem mindkettő.</div></div>
<div class="info-box"><table class="truth-tbl" style="width:100%;text-align:left"><thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Neve</th><th style="text-align:left">Olvasás</th><th style="text-align:left">Igaz, ha…</th></tr></thead><tbody>
<tr><td>\(\neg A\)</td><td>negáció</td><td>nem A</td><td>A hamis</td></tr>
<tr><td>\(A \wedge B\)</td><td>konjunkció</td><td>A és B</td><td>mindkettő igaz</td></tr>
<tr><td>\(A \vee B\)</td><td>diszjunkció</td><td>A vagy B</td><td>legalább egy igaz</td></tr>
<tr><td>\(A \to B\)</td><td>implikáció</td><td>ha A, akkor B</td><td>A=i és B=h esetén hamis</td></tr>
<tr><td>\(A \leftrightarrow B\)</td><td>ekvivalencia</td><td>A akkor és csak akkor, ha B</td><td>azonos értékűek</td></tr>
</tbody></table></div>`;

const t2a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Logikai ekvivalenciák &amp; NNF</h5>
<div class="def-box"><div class="box-body">\(F \equiv G\) jelöli, hogy \(F\) és \(G\) logikailag ekvivalensek — minden értékadásnál azonos igazságértékűek.</div></div>
<div class="info-box"><div style="color:#a78bfa;font-size:.75rem;font-weight:700;margin-bottom:.25rem">Implikáció / Ekvivalencia felváltása</div>\(A \to B \equiv (\neg A) \vee B\)<br>\(A \leftrightarrow B \equiv (A \to B) \wedge (B \to A)\)</div>
<div class="info-box"><div style="color:#a78bfa;font-size:.75rem;font-weight:700;margin-bottom:.25rem">De Morgan-törvények</div>\(\neg(A \wedge B) \equiv (\neg A) \vee (\neg B)\)<br>\(\neg(A \vee B) \equiv (\neg A) \wedge (\neg B)\)</div>
<div class="info-box"><div style="color:#a78bfa;font-size:.75rem;font-weight:700;margin-bottom:.25rem">Dupla negáció &amp; konstansok</div>\(\neg\neg A \equiv A\)<br>\(A \wedge \mathbf{i} \equiv A,\quad A \vee \mathbf{h} \equiv A\)<br>\(A \wedge \mathbf{h} \equiv \mathbf{h},\quad A \vee \mathbf{i} \equiv \mathbf{i}\)</div>
<div class="info-box"><div style="color:#a78bfa;font-size:.75rem;font-weight:700;margin-bottom:.25rem">Disztributivitás</div>\(A \wedge (B \vee C) \equiv (A \wedge B) \vee (A \wedge C)\)<br>\(A \vee (B \wedge C) \equiv (A \vee B) \wedge (A \vee C)\)</div>
<div class="thm-box"><div class="box-body"><strong>Negáció normálforma (NNF / F*):</strong> Ha \(F\) nem tartalmaz \(\to\) és \(\leftrightarrow\) jeleket, az \(F^*\) formulát úgy kapjuk: ① minden \(\wedge\)→\(\vee\), \(\vee\)→\(\wedge\); ② minden \(A_i\)→\(\neg A_i\), \(\neg A_i\)→\(A_i\). Ekkor \(\neg F \equiv F^*\).</div></div>`;

const t3a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Diszjunktív és konjunktív normálforma</h5>
<div class="def-box"><div class="box-body"><strong>Diszjunktív normálforma (d.n.f.)</strong>: \(K_1 \vee K_2 \vee \cdots \vee K_n\), ahol minden \(K_i\) literálok konjunkciója.</div></div>
<div class="def-box"><div class="box-body"><strong>Konjunktív normálforma (k.n.f.)</strong>: \(D_1 \wedge D_2 \wedge \cdots \wedge D_n\), ahol minden \(D_i\) literálok diszjunkciója.</div></div>
<div class="thm-box"><div class="box-body"><strong>Teljes d.n.f.</strong>: minden konjunkcióban <em>az összes</em> változó szerepel. <em>Tétel:</em> minden nem azonosan hamis formula ekvivalens egy t.d.n.f.-vel.</div></div>
<div class="thm-box"><div class="box-body"><strong>Teljes k.n.f.</strong>: minden diszjunkcióban az összes változó szerepel. <em>Tétel:</em> minden nem azonosan igaz formula ekvivalens egy t.k.n.f.-vel.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> \(F = (A \leftrightarrow B) \vee ((\neg B) \wedge C)\). Az igazságtábla igaz sorai adják a t.d.n.f. mintermjeit, a hamis sorok a t.k.n.f. maxtermjeit.</div></div>`;

const t4a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Logikai áramkörök</h5>
<div class="info-box"><div class="box-body">Kapcsolók sorba kötve → <strong>konjunkció</strong>; párhuzamosan → <strong>diszjunkció</strong>. Szinkronizált kapcsolók ugyanazzal a betűjellel, fordított kapcsolók negált jelöléssel.</div></div>
<div style="display:flex;gap:.75rem;flex-wrap:wrap;margin:.7rem 0">
<div class="info-box" style="text-align:center;min-width:90px"><div style="color:#a78bfa;font-weight:700">ÉS</div>\(A \wedge B\)</div>
<div class="info-box" style="text-align:center;min-width:90px"><div style="color:#22d3ee;font-weight:700">VAGY</div>\(A \vee B\)</div>
<div class="info-box" style="text-align:center;min-width:90px"><div style="color:#f87171;font-weight:700">NEM</div>\(\neg A\)</div></div>
<div class="ex-box"><div class="box-body"><strong>Összetettebb példa:</strong> \(F = (A \wedge \neg B) \vee ((\neg A) \wedge C) \vee (B \wedge C)\) — három AND-kapu kimenete OR-kapuba fut, NOT-kapuk adják a negált jeleket.</div></div>`;

const t5a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Tautológiák, következmény, szabályok</h5>
<div class="def-box"><div class="box-body"><strong>Tautológia:</strong> \(F\) azonosan igaz (minden értékadásnál igaz). Jelölés: \(\models F\).</div></div>
<div class="ex-box"><div class="box-body">\(\models A \vee (\neg A)\) (kizárt közép), \(\models A \to A\) (identitás), \(\models A \to (B \to A)\) (gyengítés).</div></div>
<div class="thm-box"><div class="box-body"><strong>Tétel:</strong> \(F \models G \iff \models F \to G\). <br><strong>Logikai következmény:</strong> \(F_1,\ldots,F_n \models G\) ⟺ \(\models (F_1 \wedge \cdots \wedge F_n) \to G\).</div></div>
<div class="info-box"><div style="color:#a78bfa;font-weight:700">Következtetési szabályok</div>
<div style="line-height:2.1">Modus ponens: \(A,\; A \to B \models B\)<br>Kontrapozíció: \(A \to B \models (\neg B) \to (\neg A)\)<br>Hipotetikus szillogizmus: \(A \to B,\; B \to C \models A \to C\)<br>Reductio ad absurdum: \((\neg A) \to B,\; (\neg A) \to (\neg B) \models A\)</div></div>
<div class="def-box"><div class="box-body"><strong>Kvantorok:</strong> \((\forall x)P(x)\) „minden x-re", \((\exists x)P(x)\) „létezik x". \(\neg((\forall x)P(x)) \equiv (\exists x)\neg P(x)\), \(\neg((\exists x)P(x)) \equiv (\forall x)\neg P(x)\).</div></div>`;

const t6a = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">Előadás+ — Kiegészítések</h5>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin-bottom:.3rem">1. Implikáció — a meglepő esetek</div>
<div class="def-box"><div class="box-body">Az <strong>implikáció \(A \to B\)</strong> csak akkor <span style="color:#f87171">hamis</span>, ha a premissza igaz és a konklúzió hamis. Minden más esetben — ideértve a hamis premisszát — <span style="color:#4ade80">igaz</span>.</div></div>
<div class="ex-box"><div class="box-body"><strong>Példa:</strong> „Ha süt a nap, elmegyünk ebédelni." (\(A \to B\)) — ha a premissza hamis (nem süt), az ígéretet nem lehet megszegni, így az implikáció igaz.</div></div>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">2. Megengedő vs. kizáró VAGY</div>
<div class="info-box"><div class="box-body"><strong style="color:#22d3ee">Megengedő ∨</strong>: igaz, ha legalább egy tag igaz (a matematikai logikában mindig ezt használjuk). <strong style="color:#f97316">Kizáró ⊕ (XOR)</strong>: igaz, ha pontosan egy tag igaz. \(A \oplus B \equiv (A \vee B) \wedge \neg(A \wedge B)\).</div></div>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">3. Formulák rekurzív felépítése</div>
<div class="thm-box"><div class="box-body">① Elemi ítélet \(A_1, A_2, \ldots\) formula. ② Ha \(F\) formula → \((\neg F)\) formula. ③ Ha \(F, G\) formula → \((F \wedge G)\), \((F \vee G)\), \((F \to G)\), \((F \leftrightarrow G)\) formula. A legkülső zárójeleket elhagyjuk.</div></div>`;
const t6b = String.raw`
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin-bottom:.3rem">4. Modus tollens</div>
<div class="info-box"><div class="box-body"><div style="color:#a78bfa;font-weight:700">Modus tollens</div>\(A \to B,\;\; \neg B \;\models\; \neg A\)<br><span style="color:#8892a4">„Ha esik, nedves az utca." + „Nem nedves." → „Nem esik."</span></div></div>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">5. Kielégíthetőség</div>
<div class="def-box"><div class="box-body">Egy \(\{F_1, \ldots, F_n\}\) formulahalmaz <em>kielégíthető</em>, ha van olyan kiértékelés, amelyre <strong>minden</strong> \(F_i\) igaz.</div></div>
<div class="ex-box"><div class="box-body"><strong>Kielégíthető:</strong> \(\{A \vee B,\; B \wedge C,\; \neg A\}\) — \(A=h, B=i, C=i\). <strong>Nem:</strong> \(\{A \vee B,\; B \wedge C,\; \neg B\}\) — \(\neg B\) és \(B \wedge C\) ellentmond.</div></div>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">6. Következmény ↔ tautológia</div>
<div class="thm-box"><div class="box-body">\[F_1, \ldots, F_n \models G \;\Longleftrightarrow\; \models (F_1 \wedge \cdots \wedge F_n) \to G\] Pl. modus ponens tautológiaként: \(\models (A \wedge (A \to B)) \to B\).</div></div>
<div style="color:#c4b5fd;font-weight:700;font-size:.85rem;margin:.7rem 0 .3rem">7. Tautológia / ellentmondás / kielégíthető</div>
<div class="info-box"><div class="box-body"><span style="color:#4ade80;font-weight:700">Tautológia</span> minden értékelésnél igaz (\(A \vee \neg A\)); <span style="color:#f87171;font-weight:700">ellentmondás</span> minden értékelésnél hamis (\(A \wedge \neg A\)); <span style="color:#fbbf24;font-weight:700">kielégíthető</span> van igaz értékelés (\(A \wedge B\)).</div></div>`;

const TABS: Tab[] = [
  { id: 'it', label: 'Ítéletek & műveletek', content: <Cols variant="7-5"><RichTex html={t1a} /><TruthTable /></Cols> },
  { id: 'ek', label: 'Ekvivalenciák & NNF', content: <Cols variant="7-5"><RichTex html={t2a} /><NnfCalc /></Cols> },
  { id: 'dnf', label: 'DNF / KNF', content: <Cols variant="7-5"><RichTex html={t3a} /><DnfGen /></Cols> },
  { id: 'ar', label: 'Logikai áramkörök', content: <Cols variant="7-5"><RichTex html={t4a} /><Circuit /></Cols> },
  { id: 'ta', label: 'Tautológiák', content: <Cols variant="7-5"><RichTex html={t5a} /><TautChecker /></Cols> },
  { id: 'ex', label: 'Előadás+', content: <Cols><RichTex html={t6a} /><RichTex html={t6b} /></Cols> },
];

export default function Ch6() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 6. fejezet</p>
      <h1 className="ila__title">Matematikai logika alapjai</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
