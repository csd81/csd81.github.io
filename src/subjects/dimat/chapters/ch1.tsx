import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

const ACC = '#10b981';

/* ════ Tab 1: Halmazok definíciója + Cantor ════ */
const CANTOR_STEPS: { text: string; cls: 'active' | 'contra' | 'done' }[] = [
  { text: '<strong>Feltevés (indirekt):</strong> Tegyük fel, hogy létezik olyan <em>Z</em> halmaz, amely a világ minden elemét tartalmazza. Minden "dolog" ∈ Z.', cls: 'active' },
  { text: '<strong>Definíció:</strong> Tekintsük az Y := {x ∈ Z | x ∉ x} objektumot — az összes olyan elem, amely <em>nem eleme önmagának</em>. Mivel Z mindent tartalmaz és x∉x értelmes tulajdonság, Y is halmaz kell, hogy legyen.', cls: 'active' },
  { text: '<strong>Következmény:</strong> Mivel Z mindent tartalmaz, ezért Y ∈ Z is teljesül. Most eldöntjük: Y ∈ Y, vagy Y ∉ Y?', cls: 'active' },
  { text: '<strong>I. eset: Y ∉ Y.</strong> Ekkor Y kielégíti az "x ∉ x" feltételt, tehát Y eleme kell legyen Y-nak (a definíció szerint). De ez pontosan Y ∈ Y — <strong>ellentmondás!</strong>', cls: 'contra' },
  { text: '<strong>II. eset: Y ∈ Y.</strong> Ekkor Y NEM elégíti ki az "x ∉ x" feltételt (hiszen Y ∈ Y). Tehát Y ∉ Y — <strong>ellentmondás!</strong>', cls: 'contra' },
  { text: '<strong>Mindkét eset</strong> (Y ∈ Y és Y ∉ Y) ellentmondáshoz vezet. Az indirekt feltétel hamis.', cls: 'active' },
  { text: '<strong>Következtetés (Q.E.D.):</strong> Z "túl nagy" ahhoz, hogy halmaz legyen — csupán egy <em>osztály</em>. Nem létezik mindent tartalmazó halmaz. □', cls: 'done' },
];

function CantorStepper() {
  const [step, setStep] = useState(0);
  const visSteps = CANTOR_STEPS.slice(0, step);
  const clsColor = (cls: typeof CANTOR_STEPS[0]['cls']) =>
    cls === 'contra' ? { background: 'rgba(239,68,68,.12)', borderLeft: '3px solid #ef4444', color: '#fca5a5' }
    : cls === 'done' ? { background: 'rgba(52,211,153,.08)', borderLeft: '3px solid #059669', color: '#6ee7b7' }
    : { background: 'rgba(16,185,129,.12)', borderLeft: '3px solid #10b981', color: '#c4cdd8' };
  const done = step >= CANTOR_STEPS.length;
  return (
    <div>
      {visSteps.map((s, i) => (
        <div key={i} style={{ borderRadius: 8, padding: '.75rem 1rem', margin: '.4rem 0', fontSize: '.84rem', ...clsColor(s.cls) }}>
          <RichTex html={`${i + 1}. ${s.text}`} />
        </div>
      ))}
      {!done && (
        <div style={{ borderRadius: 8, padding: '.75rem 1rem', margin: '.4rem 0', fontSize: '.84rem', background: '#0e1014', borderLeft: '3px solid #1e2533', color: '#475569' }}>
          {step + 1}. ???
        </div>
      )}
      <div style={{ display: 'flex', gap: '.5rem', marginTop: '.75rem', alignItems: 'center' }}>
        <button className="op-btn" style={{ background: ACC, color: '#000', fontWeight: 700 }}
          disabled={done} onClick={() => setStep(s => Math.min(s + 1, CANTOR_STEPS.length))}>
          {done ? 'Kész ✓' : 'Következő lépés →'}
        </button>
        <button className="op-btn" onClick={() => setStep(0)}>Újra</button>
        <span style={{ fontSize: '.75rem', color: '#64748b', marginLeft: '.5rem' }}>{step} / {CANTOR_STEPS.length} lépés</span>
      </div>
    </div>
  );
}

const t1right = String.raw`
<div class="thm-box"><em>Nem létezik olyan halmaz, amely a „világ" minden elemét tartalmazza.</em></div>
<div class="info-box" style="margin-top:.75rem">
  <span class="lbl" style="color:#10b981">1.2. Definíció (ZFC Axiómák)</span>
  <p style="font-size:.8rem;color:#94a3b8;line-height:1.7;margin:.5rem 0">A halmazt és elemet <strong style="color:#c4cdd8">nem definiáljuk</strong> (alapfogalmak). Az axiómák rögzítik, hogyan viselkednek:</p>
  <table style="width:100%;border-collapse:collapse;font-size:.83rem">
  <thead><tr>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Axióma</th>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Tartalom</th>
  </tr></thead>
  <tbody>
  <tr><td style="padding:.35rem .5rem;color:#a78bfa;border-bottom:1px solid #161b28">∈-reláció</td><td style="padding:.35rem .5rem;color:#c4cdd8;border-bottom:1px solid #161b28">Minden <em>x</em>-re: <em>x ∈ A</em> vagy <em>x ∉ A</em> — pontosan az egyik teljesül</td></tr>
  <tr><td style="padding:.35rem .5rem;color:#a78bfa;border-bottom:1px solid #161b28">Egyenlőség</td><td style="padding:.35rem .5rem;color:#c4cdd8;border-bottom:1px solid #161b28">A = B ⟺ (∀x: x∈A ⟺ x∈B)</td></tr>
  <tr><td style="padding:.35rem .5rem;color:#a78bfa;border-bottom:1px solid #161b28">Üres halmaz</td><td style="padding:.35rem .5rem;color:#c4cdd8;border-bottom:1px solid #161b28">∃! üres halmaz ∅: minden x-re x ∉ ∅</td></tr>
  <tr><td style="padding:.35rem .5rem;color:#a78bfa">ZFC</td><td style="padding:.35rem .5rem;color:#c4cdd8">Zermelo–Fraenkel + Választási axióma — a modern halmazelmélet alapja (1903/1921)</td></tr>
  </tbody></table>
</div>
<div class="info-box" style="margin-top:.75rem">
  <span class="lbl" style="color:#10b981">Halmazelméleti terminológia</span>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:.2rem .75rem;font-size:.78rem;margin-top:.5rem">
    <div><span style="color:#38bdf8">set</span> = halmaz</div>
    <div><span style="color:#38bdf8">ground set</span> = alaphalmaz</div>
    <div><span style="color:#38bdf8">subset</span> = részhalmaz</div>
    <div><span style="color:#38bdf8">empty set</span> = üres halmaz</div>
    <div><span style="color:#38bdf8">power set</span> = hatványhalmaz</div>
    <div><span style="color:#38bdf8">intersection</span> = metszet</div>
    <div><span style="color:#38bdf8">union</span> = unió</div>
    <div><span style="color:#38bdf8">complement</span> = komplemens</div>
    <div><span style="color:#38bdf8">cardinality</span> = számosság</div>
    <div><span style="color:#38bdf8">class</span> = osztály (nem halmaz!)</div>
  </div>
  <div class="warn-box" style="margin-top:.5rem"><strong>Figyelem:</strong> Russell/Cantor paradoxona miatt a "minden halmaz halmaza" csupán egy <strong>osztály</strong>, nem halmaz.</div>
</div>`;

/* ════ Tab 2: Boole-algebrák ════ */
const AX_DETAIL: Record<string, string> = {
  ba1:  'Kommutativitás: ∪ sorrendje nem számít. A∪B és B∪A ugyanazt a területet takarja.',
  ba2:  'Kommutativitás: ∩ sorrendje nem számít. x∈A∩B ⟺ x∈B∩A.',
  ba3:  'Asszociativitás: a zárójelezés irreleváns unióban. A∪(B∪C) = (A∪B)∪C — mindkettő az A, B, C bármelyikébe eső elemek halmaza.',
  ba4:  'Asszociativitás: a zárójelezés irreleváns metszetben. A∩(B∩C) = (A∩B)∩C — mindkettő az A, B, C mindháromba eső elemek.',
  ba5:  'Disztributivitás: ∪ "szétosztható" ∩ felett. A∪(B∩C) — ami A-ban van, VAGY ami B-ben és C-ben is.',
  ba6:  'Disztributivitás: ∩ "szétosztható" ∪ felett. Ez a BA5 duálisa.',
  ba7:  'Elnyelési tulajdonság: A∪(A∩B)=A. Az A∩B⊆A miatt A∪(A∩B) nem tud A-nál nagyobb lenni.',
  ba8:  'Elnyelési tulajdonság: A∩(A∪B)=A. Ez BA7 duálisa.',
  ba9:  'Kizárt harmadik elve: minden elem vagy A-ban van, vagy a komplementerében. A∪Ā = I.',
  ba10: 'Ellentmondás elve: semmi sem lehet egyszerre A-ban és Ā-ban. A∩Ā = ∅.',
  ba11: 'Az üres halmaz ∅ az ∪ nulleleme: A-hoz semmit hozzáadni A-t adja.',
  ba12: 'Az üres halmaz ∅ az ∩ nulleleme: bármivel vett metszete ∅.',
  ba13: 'Az alaphalmaz I az ∪ egységeleme: A∪I=I, mert minden elem I-ben van.',
  ba14: 'Az alaphalmaz I az ∩ egységeleme: A∩I=A, mert I mindent tartalmaz.',
};
type AxRow = { id: string; name: string; setForm: string; logForm: string };
const AX_ROWS: AxRow[] = [
  { id: 'ba1',  name: 'Kommutativitás ∪',           setForm: 'A∪B = B∪A',               logForm: 'a∨b = b∨a' },
  { id: 'ba2',  name: 'Kommutativitás ∩',           setForm: 'A∩B = B∩A',               logForm: 'a∧b = b∧a' },
  { id: 'ba3',  name: 'Asszociativitás ∪',          setForm: 'A∪(B∪C) = (A∪B)∪C',      logForm: 'a∨(b∨c) = (a∨b)∨c' },
  { id: 'ba4',  name: 'Asszociativitás ∩',          setForm: 'A∩(B∩C) = (A∩B)∩C',      logForm: 'a∧(b∧c) = (a∧b)∧c' },
  { id: 'ba5',  name: 'Disztributivitás ∪ felett ∩', setForm: 'A∪(B∩C) = (A∪B)∩(A∪C)', logForm: 'a∨(b∧c) = (a∨b)∧(a∨c)' },
  { id: 'ba6',  name: 'Disztributivitás ∩ felett ∪', setForm: 'A∩(B∪C) = (A∩B)∪(A∩C)', logForm: 'a∧(b∨c) = (a∧b)∨(a∧c)' },
  { id: 'ba7',  name: 'Elnyelés (∪ nyeli ∩-t)',      setForm: 'A∪(A∩B) = A',             logForm: 'a∨(a∧b) = a' },
  { id: 'ba8',  name: 'Elnyelés (∩ nyeli ∪-t)',      setForm: 'A∩(A∪B) = A',             logForm: 'a∧(a∨b) = a' },
  { id: 'ba9',  name: 'Komplemens + I',              setForm: 'A∪Ā = I',                 logForm: 'a∨¬a = |' },
  { id: 'ba10', name: 'Komplemens + ∅',              setForm: 'A∩Ā = ∅',                 logForm: 'a∧¬a = ○' },
  { id: 'ba11', name: 'Nullelem ∪-ban',              setForm: 'A∪∅ = A',                 logForm: 'a∨○ = a' },
  { id: 'ba12', name: 'Nullelem ∩-ban',              setForm: 'A∩∅ = ∅',                 logForm: 'a∧○ = ○' },
  { id: 'ba13', name: 'Egységelem ∪-ban',            setForm: 'A∪I = I',                 logForm: 'a∨| = |' },
  { id: 'ba14', name: 'Egységelem ∩-ban',            setForm: 'A∩I = A',                 logForm: 'a∧| = a' },
];

const t2right = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#10b981">1.7. Példák Boole-algebrákra</span>
  <div class="ex-box" style="margin-top:.5rem"><strong style="color:#fcd34d">(a) Halmazalgebra \(\mathcal{P}_I\):</strong> Az \(I\) halmaz összes részhalmazának halmaza \(\mathcal{P}(I)\) az \(\cup,\cap,\overline{\phantom{x}},I,\emptyset\) műveletekkel.</div>
  <div class="ex-box"><strong style="color:#fcd34d">(b) Rész-Boole-algebra:</strong> Ha \(\mathbf{X}\subseteq\mathcal{P}(I)\) zárt a halmazműveletekre és \(I\in\mathbf{X}\), akkor \(\mathcal{X}\) is Boole-algebra.</div>
  <div class="ex-box"><strong style="color:#fcd34d">(c) Logikai műveletek:</strong> \(H=\{h,i\}\) ahol \(h\)=hamis, \(i\)=igaz; \(\vee\)="vagy", \(\wedge\)="és", \(\neg\)="nem".</div>
  <div class="ex-box"><strong style="color:#fcd34d">(d) Háromérték logika:</strong> \(H=\{0,\tfrac{1}{2},1\}\) ahol \(k\) a kvázi-igazság. Műveletek: \(a\vee b:=\max(a,b)\), \(a\wedge b:=\min(a,b)\), \(\neg a:=1-a\). <em>Csak kvázi-BA</em> — BA9 és BA10 <strong>nem teljesül</strong> \(k\)-ra.</div>
  <div class="ex-box"><strong style="color:#fcd34d">(e) Számelmélet:</strong> Egy négyzetmentes \(N\) szám osztóinak halmaza, ahol \(a\vee b:=\text{lkkt}(a,b)\), \(a\wedge b:=\text{lnko}(a,b)\), \(\neg a:=N/a\). Pl. \(N=30\).</div>
  <div class="ex-box"><strong style="color:#fcd34d">(f) Eseményalgebra:</strong> \(\Omega\) eseménytér, \(\mathcal{P}(\Omega)\) az események. \(\vee\)=unió, \(\wedge\)=metszet, \(\neg\)=ellentett, \(I=\Omega\).</div>
  <div class="ex-box"><strong style="color:#fcd34d">(g) Kapcsoló-algebra:</strong> Villanykapcsolók soros és párhuzamos kapcsolása. \(\vee\)=párhuzamos, \(\wedge\)=soros. Izomorf a (c)-vel.</div>
  <div class="ex-box"><strong style="color:#fcd34d">(h) Színkeverés:</strong> \(\vee\)=additív keverés (RGB), \(\wedge\)=szubtraktív (CMY), \(\neg\)=komplementer szín.</div>
  <div class="warn-box"><strong style="color:#fcd34d">(i) Ellenpélda:</strong> \((\mathbb{R},+,\cdot)\) <strong>nem</strong> Boole-algebra! BA1–BA8 teljesülnek, de nincs \(\neg a\) amelyre \(a+\neg a=1\) és \(a\cdot\neg a=0\) egyszerre.</div>
</div>
<div class="info-box" style="margin-top:.75rem">
  <span class="lbl" style="color:#10b981">Következmények (1.8. Állítás)</span>
  <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
  <thead><tr>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Jelölés</th>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Azonosság</th>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Neve</th>
  </tr></thead>
  <tbody>
  <tr><td style="color:#64748b;padding:.3rem .5rem;border-bottom:1px solid #161b28">(a)</td><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪A = A, A∩A = A</td><td style="color:#8b949e;font-style:italic;padding:.3rem .5rem;border-bottom:1px solid #161b28">Idempotencia</td></tr>
  <tr><td style="color:#64748b;padding:.3rem .5rem;border-bottom:1px solid #161b28">(b)</td><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">Ā̄ = A</td><td style="color:#8b949e;font-style:italic;padding:.3rem .5rem;border-bottom:1px solid #161b28">¬-involúció</td></tr>
  <tr><td style="color:#64748b;padding:.3rem .5rem;border-bottom:1px solid #161b28">(d)</td><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪B = Ā∩B̄</td><td style="color:#8b949e;font-style:italic;padding:.3rem .5rem;border-bottom:1px solid #161b28">De Morgan 1.</td></tr>
  <tr><td style="color:#64748b;padding:.3rem .5rem">(e)</td><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem">A∩B = Ā∪B̄</td><td style="color:#8b949e;font-style:italic;padding:.3rem .5rem">De Morgan 2.</td></tr>
  </tbody></table>
  <div class="thm-box" style="margin-top:.5rem">
    <strong>1.11. Stone-tétel (1936):</strong> Tetszőleges Boole-algebra <em>izomorf</em> egy halmazalgebra valamely rész-Boole-algebrájával.<br>
    <span style="font-size:.74rem;color:#64748b">Marshall Harvey Stone (1903–1989) amerikai matematikus.</span>
  </div>
  <div class="def-box" style="margin-top:.5rem;font-size:.84rem">
    <strong>Steinitz izomorfia-elve (1910):</strong> A matematika minden ágában az <em>izomorfnak</em> deklarált objektumokat <strong>azonosnak</strong> kell tekintenünk. <span style="color:#64748b">(Ernst Steinitz, 1871–1928)</span>
  </div>
</div>`;

function BoolTab() {
  const [sel, setSel] = useState<string | null>(null);
  const [showLogic, setShowLogic] = useState(false);

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '.5rem' }}>
          <span className="lbl" style={{ color: ACC }}>1.4. Állítás — Boole-axiómák (BA1–BA14)</span>
          <button className="op-btn" style={{ marginLeft: 'auto', fontSize: '.75rem' }} onClick={() => setShowLogic(v => !v)}>
            {showLogic ? 'Logika → Halmazok' : 'Halmazok ↔ Logika'}
          </button>
        </div>
        <p style={{ fontSize: '.79rem', color: '#64748b', marginBottom: '.5rem' }}>Kattints egy sorra a részletesebb magyarázatért.</p>
        {sel && (
          <div className="thm-box" style={{ fontSize: '.83rem', color: '#c4cdd8', lineHeight: 1.8, marginBottom: '.5rem' }}>
            {AX_DETAIL[sel] ?? ''}
          </div>
        )}
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.82rem' }}>
            <thead>
              <tr>
                {(['ID', 'Neve', 'Halmazalgebra', 'Logika']).map(h => (
                  <th key={h} style={{ background: '#1a1f2e', color: '#64748b', padding: '.45rem .7rem', textAlign: 'left', borderBottom: '1px solid #1e2533', fontSize: '.73rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AX_ROWS.map(r => (
                <tr key={r.id} style={{ cursor: 'pointer', background: sel === r.id ? 'rgba(16,185,129,.12)' : '' }}
                  onClick={() => setSel(sel === r.id ? null : r.id)}>
                  <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', fontSize: '.72rem', color: '#64748b', fontWeight: 700 }}>{r.id.toUpperCase()}</td>
                  <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', color: '#8b949e', fontStyle: 'italic' }}>{r.name}</td>
                  <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', fontFamily: 'monospace', color: '#34d399', display: showLogic ? 'none' : '' }}>{r.setForm}</td>
                  <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', fontFamily: 'monospace', color: '#38bdf8', display: showLogic ? '' : 'none' }}>{r.logForm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <RichTex html={t2right} />
    </div>
  );
}

/* ════ Tab 3: Venn-diagramok ════ */
const UNI = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
type VennOp = 'AuB' | 'AnB' | 'AdB' | 'BdA' | 'sym' | 'compA' | 'compB' | 'none' | 'all';

function VennTab() {
  const [setA, setSetA] = useState<Set<number>>(new Set([1, 2, 3, 5, 7]));
  const [setB, setSetB] = useState<Set<number>>(new Set([2, 3, 4, 6, 7]));
  const [op, setOp] = useState<VennOp>('AuB');
  const mainRef = useRef<HTMLCanvasElement>(null);
  const triRef = useRef<HTMLCanvasElement>(null);

  const opLabels: Record<VennOp, string> = {
    AuB: 'A ∪ B', AnB: 'A ∩ B', AdB: 'A \\ B', BdA: 'B \\ A',
    sym: 'A △ B', compA: 'Ā (komplemens)', compB: 'B̄ (komplemens)', none: '∅', all: 'I',
  };
  const opButtons: { op: VennOp; label: string }[] = [
    { op: 'AuB', label: 'A∪B' }, { op: 'AnB', label: 'A∩B' }, { op: 'AdB', label: 'A\\B' },
    { op: 'BdA', label: 'B\\A' }, { op: 'sym', label: 'A△B' }, { op: 'compA', label: 'Ā' },
    { op: 'compB', label: 'B̄' }, { op: 'none', label: '∅' }, { op: 'all', label: 'I' },
  ];

  function getRes(o: VennOp, a: Set<number>, b: Set<number>): Set<number> {
    const cA = new Set(UNI.filter(e => !a.has(e)));
    const cB = new Set(UNI.filter(e => !b.has(e)));
    switch (o) {
      case 'AuB':  return new Set([...a, ...b]);
      case 'AnB':  return new Set(UNI.filter(e => a.has(e) && b.has(e)));
      case 'AdB':  return new Set(UNI.filter(e => a.has(e) && !b.has(e)));
      case 'BdA':  return new Set(UNI.filter(e => b.has(e) && !a.has(e)));
      case 'sym':  return new Set(UNI.filter(e => a.has(e) !== b.has(e)));
      case 'compA': return cA;
      case 'compB': return cB;
      case 'none': return new Set();
      case 'all':  return new Set(UNI);
    }
  }

  const res = getRes(op, setA, setB);

  useEffect(() => {
    const cv = mainRef.current; if (!cv) return;
    const ctx = cv.getContext('2d')!; if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const cAx = W * 0.38, cBx = W * 0.62, cy = H * 0.5, r = 80;

    const regions = { onlyA: false, both: false, onlyB: false, neither: false };
    switch (op) {
      case 'AuB':   regions.onlyA = regions.both = regions.onlyB = true; break;
      case 'AnB':   regions.both = true; break;
      case 'AdB':   regions.onlyA = true; break;
      case 'BdA':   regions.onlyB = true; break;
      case 'sym':   regions.onlyA = regions.onlyB = true; break;
      case 'compA': regions.onlyB = regions.neither = true; break;
      case 'compB': regions.onlyA = regions.neither = true; break;
      case 'none':  break;
      case 'all':   regions.onlyA = regions.both = regions.onlyB = regions.neither = true; break;
    }

    function fillOnlyA(color: string) {
      const tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H;
      const tc = tmp.getContext('2d')!;
      tc.fillStyle = color;
      tc.beginPath(); tc.arc(cAx, cy, r, 0, Math.PI * 2); tc.fill();
      tc.globalCompositeOperation = 'destination-out';
      tc.beginPath(); tc.arc(cBx, cy, r, 0, Math.PI * 2); tc.fill();
      ctx.drawImage(tmp, 0, 0);
    }
    function fillBoth(color: string) {
      const tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H;
      const tc = tmp.getContext('2d')!;
      tc.save();
      tc.beginPath(); tc.arc(cAx, cy, r, 0, Math.PI * 2); tc.clip();
      tc.beginPath(); tc.arc(cBx, cy, r, 0, Math.PI * 2); tc.clip();
      tc.fillStyle = color; tc.fillRect(0, 0, W, H);
      tc.restore();
      ctx.drawImage(tmp, 0, 0);
    }
    function fillOnlyB(color: string) {
      const tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H;
      const tc = tmp.getContext('2d')!;
      tc.fillStyle = color;
      tc.beginPath(); tc.arc(cBx, cy, r, 0, Math.PI * 2); tc.fill();
      tc.globalCompositeOperation = 'destination-out';
      tc.beginPath(); tc.arc(cAx, cy, r, 0, Math.PI * 2); tc.fill();
      ctx.drawImage(tmp, 0, 0);
    }
    function fillNeither(color: string) {
      const tmp = document.createElement('canvas'); tmp.width = W; tmp.height = H;
      const tc = tmp.getContext('2d')!;
      tc.fillStyle = color; tc.fillRect(0, 0, W, H);
      tc.globalCompositeOperation = 'destination-out';
      tc.beginPath(); tc.arc(cAx, cy, r, 0, Math.PI * 2); tc.fill();
      tc.beginPath(); tc.arc(cBx, cy, r, 0, Math.PI * 2); tc.fill();
      ctx.drawImage(tmp, 0, 0);
    }

    ctx.strokeStyle = '#2d3748'; ctx.lineWidth = 1.5;
    ctx.strokeRect(20, 20, W - 40, H - 40);
    ctx.fillStyle = '#64748b'; ctx.font = '12px monospace'; ctx.fillText('I', 30, 40);

    if (regions.neither) fillNeither('rgba(16,185,129,0.18)');
    if (regions.onlyA)   fillOnlyA('rgba(16,185,129,0.35)');
    if (regions.both)    fillBoth('rgba(16,185,129,0.55)');
    if (regions.onlyB)   fillOnlyB('rgba(16,185,129,0.35)');

    ctx.strokeStyle = '#34d399'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cAx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = '#38bdf8';
    ctx.beginPath(); ctx.arc(cBx, cy, r, 0, Math.PI * 2); ctx.stroke();

    ctx.fillStyle = '#34d399'; ctx.font = 'bold 16px monospace';
    ctx.fillText('A', cAx - r + 10, cy - r + 22);
    ctx.fillStyle = '#38bdf8';
    ctx.fillText('B', cBx + r - 20, cy - r + 22);

    const positions: [number, number][] = [
      [cAx - r * 0.65, cy - 18], [cAx - r * 0.5, cy + 15], [cAx - r * 0.7, cy + 40],
      [(cAx + cBx) / 2, cy - 18], [(cAx + cBx) / 2, cy + 18],
      [cBx + r * 0.5, cy - 18], [cBx + r * 0.4, cy + 20], [cBx + r * 0.6, cy + 5],
      [40, H - 40], [W - 55, H - 40],
    ];
    const elemOrder = [1, 2, 5, 3, 7, 4, 6, 9, 0, 8];
    positions.forEach(([px, py], i) => {
      if (i >= elemOrder.length) return;
      const e = elemOrder[i];
      ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2);
      ctx.fillStyle = res.has(e) ? 'rgba(16,185,129,0.8)' : 'rgba(45,55,72,0.8)';
      ctx.fill();
      ctx.fillStyle = res.has(e) ? '#000' : '#94a3b8';
      ctx.font = 'bold 11px monospace'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(String(e), px, py);
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    });
  }, [op, setA, setB, res]);

  useEffect(() => {
    const cv = triRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    const r = 58, cx = W / 2, cy = H / 2;
    const centers: [number, number][] = [[cx, cy - 34], [cx - 30, cy + 20], [cx + 30, cy + 20]];
    const colors = ['rgba(16,185,129,0.25)', 'rgba(56,189,248,0.25)', 'rgba(245,158,11,0.25)'];
    const strokes = ['#34d399', '#38bdf8', '#fbbf24'];
    const labels = ['A', 'B', 'C'];
    centers.forEach(([x, y], i) => {
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = colors[i]; ctx.fill();
      ctx.strokeStyle = strokes[i]; ctx.lineWidth = 1.5; ctx.stroke();
    });
    centers.forEach(([x, y], i) => {
      const lx = x + (x - cx) * 0.6, ly = y + (y - cy) * 0.6 - 4;
      ctx.fillStyle = strokes[i]; ctx.font = 'bold 14px monospace';
      ctx.textAlign = 'center'; ctx.fillText(labels[i], lx, ly);
    });
    ctx.fillStyle = '#64748b'; ctx.font = '10px monospace'; ctx.textAlign = 'center';
    ctx.fillText('8 régió', cx, H - 6);
  }, []);

  const toggleA = (e: number) => setSetA(prev => { const n = new Set(prev); n.has(e) ? n.delete(e) : n.add(e); return n; });
  const toggleB = (e: number) => setSetB(prev => { const n = new Set(prev); n.has(e) ? n.delete(e) : n.add(e); return n; });

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '2', minWidth: '300px' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Interaktív Venn-diagram</span>
          <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap', margin: '.5rem 0' }}>
            {opButtons.map(b => (
              <button key={b.op} className={`op-btn${op === b.op ? ' is-active' : ''}`}
                style={op === b.op ? { background: 'rgba(16,185,129,.2)', color: '#34d399', borderColor: ACC } : {}}
                onClick={() => setOp(b.op)}>{b.label}</button>
            ))}
          </div>
          <canvas ref={mainRef} width={520} height={240} style={{ width: '100%', background: '#0d0e14', borderRadius: '.3rem', display: 'block' }} />
          <div className="def-box" style={{ textAlign: 'center', fontSize: '.95rem', fontFamily: 'monospace', marginTop: '.5rem' }}>
            {opLabels[op]} = {`{`}{[...res].sort((a, b) => a - b).join(', ')}{`}`} ({res.size} elem)
          </div>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '220px' }}>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>Halmazban lévő elemek</span>
          <p style={{ fontSize: '.75rem', color: '#64748b', margin: '.4rem 0 .5rem' }}>Alaphalmaz I = {'{'}0…9{'}'}. Kattints az elemekre A-ba / B-be helyezéshez.</p>
          {([['A', setA, setB, toggleA], ['B', setB, setA, toggleB]] as const).map(([lbl, cur, other, tog]) => (
            <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', flexWrap: 'wrap', margin: '.35rem 0' }}>
              <span style={{ fontSize: '.8rem', fontFamily: 'monospace', color: '#64748b', minWidth: '1.5rem' }}>{lbl}:</span>
              {UNI.map(e => {
                const inThis = (cur as Set<number>).has(e);
                const inOther = (other as Set<number>).has(e);
                return (
                  <span key={e} onClick={() => (tog as (e: number) => void)(e)} style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 28, height: 28, borderRadius: '50%', fontSize: '.78rem', fontWeight: 700,
                    cursor: 'pointer', userSelect: 'none',
                    background: inThis && inOther ? '#10b981' : inThis ? '#059669' : '#1e2533',
                    color: inThis ? '#000' : '#64748b',
                    border: `2px solid ${inOther ? '#38bdf8' : 'transparent'}`,
                  }}>{e}</span>
                );
              })}
            </div>
          ))}
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>3 halmazos Venn</span>
          <RichTex html={String.raw`3 halmazhoz \(2^3=8\) különböző régió kell. Grünbaum (1975) megmutatta, hogy tetszőleges \(n\)-re léteznek konvex sokszögekkel rajzolt Venn-diagramok.`} style={{ fontSize: '.77rem', color: '#64748b', lineHeight: 1.6, margin: '.4rem 0' }} />
          <canvas ref={triRef} width={220} height={180} style={{ width: '100%', background: '#0d0e14', borderRadius: '.3rem', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 4: Dualitás & De Morgan ════ */
const DM_UNI = [0, 1, 2, 3, 4, 5, 6, 7];

function DualTab() {
  const [dmA, setDmA] = useState<Set<number>>(new Set([1, 2, 3, 5]));
  const [dmB, setDmB] = useState<Set<number>>(new Set([2, 3, 4, 6]));

  const AuB  = new Set(DM_UNI.filter(e => dmA.has(e) || dmB.has(e)));
  const AnB  = new Set(DM_UNI.filter(e => dmA.has(e) && dmB.has(e)));
  const cAuB = new Set(DM_UNI.filter(e => !AuB.has(e)));
  const cA   = new Set(DM_UNI.filter(e => !dmA.has(e)));
  const cB   = new Set(DM_UNI.filter(e => !dmB.has(e)));
  const cAcB = new Set(DM_UNI.filter(e => cA.has(e) && cB.has(e)));
  const cAnB = new Set(DM_UNI.filter(e => !AnB.has(e)));
  const cAcB2= new Set(DM_UNI.filter(e => cA.has(e) || cB.has(e)));
  const fmt  = (s: Set<number>) => `{${[...s].sort((a, b) => a - b).join(',')}}`;
  const eq1  = fmt(cAuB) === fmt(cAcB);
  const eq2  = fmt(cAnB) === fmt(cAcB2);

  const toggle = (which: 'A' | 'B', e: number) => {
    if (which === 'A') setDmA(prev => { const n = new Set(prev); n.has(e) ? n.delete(e) : n.add(e); return n; });
    else setDmB(prev => { const n = new Set(prev); n.has(e) ? n.delete(e) : n.add(e); return n; });
  };

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <RichTex className="thm-box" html={String.raw`<strong>1.9. Tétel — Dualitás Elve:</strong> Ha \(\Phi\) azonosság igaz minden Boole-algebrában, akkor a duálisa \(\Phi^*\) is azonosság — ahol \(\vee\leftrightarrow\wedge\) és \(|\leftrightarrow\circ\).`} />
        <RichTex className="info-box" style={{ marginTop: '.5rem' }} html={String.raw`
<span class="lbl" style="color:#10b981">Duális párok</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
<thead><tr>
  <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Azonosság</th>
  <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Duálisa</th>
</tr></thead>
<tbody>
<tr><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪∅ = A</td><td style="color:#38bdf8;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∩I = A</td></tr>
<tr><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪I = I</td><td style="color:#38bdf8;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∩∅ = ∅</td></tr>
<tr><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪(A∩B) = A</td><td style="color:#38bdf8;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∩(A∪B) = A</td></tr>
<tr><td style="color:#34d399;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∪Ā = I</td><td style="color:#38bdf8;font-family:monospace;padding:.3rem .5rem;border-bottom:1px solid #161b28">A∩Ā = ∅</td></tr>
</tbody></table>
<div class="ex-box" style="margin-top:.5rem"><strong>Következmény:</strong> Elég bebizonyítani az egyik De Morgan-azonosságot, a másik automatikusan következik a Dualitás elvéből!</div>`} />
        <div className="info-box" style={{ marginTop: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>De Morgan — interaktív ellenőrzés</span>
          <p style={{ fontSize: '.8rem', color: '#94a3b8', margin: '.4rem 0' }}>Válassz elemeket A-ba és B-be (I={'{'}0…7{'}'}):</p>
          {(['A', 'B'] as const).map(lbl => (
            <div key={lbl} style={{ display: 'flex', alignItems: 'center', gap: '.35rem', flexWrap: 'wrap', margin: '.35rem 0' }}>
              <span style={{ fontSize: '.8rem', fontFamily: 'monospace', color: '#64748b', minWidth: '1.5rem' }}>{lbl}:</span>
              {DM_UNI.map(e => {
                const cur = lbl === 'A' ? dmA : dmB;
                const oth = lbl === 'A' ? dmB : dmA;
                const inT = cur.has(e);
                return (
                  <span key={e} onClick={() => toggle(lbl, e)} style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 28, height: 28, borderRadius: '50%', fontSize: '.78rem', fontWeight: 700,
                    cursor: 'pointer', userSelect: 'none',
                    background: inT ? 'rgba(16,185,129,0.7)' : '#1e2533',
                    color: inT ? '#000' : '#64748b',
                    border: `2px solid ${oth.has(e) ? '#38bdf8' : 'transparent'}`,
                  }}>{e}</span>
                );
              })}
            </div>
          ))}
          <div className="def-box" style={{ fontFamily: 'monospace', fontSize: '.82rem', lineHeight: 2, marginTop: '.5rem' }}>
            <span style={{ color: '#64748b' }}>A∪B = {fmt(AuB)}</span><br />
            <strong>overline(A∪B)</strong> = <span style={{ color: '#34d399' }}>{fmt(cAuB)}</span><br />
            <strong>Ā∩B̄</strong> = <span style={{ color: '#34d399' }}>{fmt(cAcB)}</span>{' '}
            <span style={{ color: eq1 ? '#10b981' : '#ef4444' }}>{eq1 ? '✓ Egyenlők' : '✗ Nem egyenlők?!'}</span><br />
            <hr style={{ borderColor: '#1e2533', margin: '.4rem 0' }} />
            <strong>overline(A∩B)</strong> = <span style={{ color: '#38bdf8' }}>{fmt(cAnB)}</span><br />
            <strong>Ā∪B̄</strong> = <span style={{ color: '#38bdf8' }}>{fmt(cAcB2)}</span>{' '}
            <span style={{ color: eq2 ? '#10b981' : '#ef4444' }}>{eq2 ? '✓ Egyenlők' : '✗ Nem egyenlők?!'}</span>
          </div>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <RichTex className="thm-box" html={String.raw`<strong>De Morgan-azonosságok:</strong>
\[\overline{A\cup B} = \overline{A}\cap\overline{B}\]
\[\overline{A\cap B} = \overline{A}\cup\overline{B}\]`} />
        <div className="ex-box" style={{ marginTop: '.5rem', fontSize: '.82rem' }}>
          <RichTex html={String.raw`<strong>Logikában:</strong> \(\neg(p\vee q) = \neg p\wedge\neg q\)<br>
<strong>Halmazokra:</strong> \(\overline{A\cup B} = \overline{A}\cap\overline{B}\)<br>
<strong>Áramkörökben:</strong> NOR ≡ AND-of-NOTs; NAND ≡ OR-of-NOTs`} />
        </div>
        <RichTex className="info-box" style={{ marginTop: '.75rem' }} html={String.raw`<span class="lbl" style="color:#10b981">Igazságtábla ellenőrző</span>
<p style="font-size:.78rem;color:#64748b;margin:.4rem 0">De Morgan-azonosság az összes lehetséges értékre:</p>
<table style="width:100%;border-collapse:collapse;font-size:.82rem">
<thead><tr>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">p</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">q</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">¬(p∨q)</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">¬p∧¬q</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">✓</th>
</tr></thead>
<tbody>
<tr><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem;color:#10b981">✓</td></tr>
<tr><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem;color:#10b981">✓</td></tr>
<tr><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem;color:#10b981">✓</td></tr>
<tr><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem">I</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem">H</td><td style="padding:.3rem .5rem;color:#10b981">✓</td></tr>
</tbody></table>
<div class="thm-box" style="margin-top:.5rem;font-size:.8rem">
  <strong>1.12. Tétel (Teljességi tétel):</strong> Boole-algebrák nyelvén felírt \(\Phi\) egyenlőség vagy <em>minden</em> BA-ban igaz, vagy <em>minden</em> BA-ban hamis. (\(\mathcal{O}(2^n)\) igazságtáblával eldönthető.)
</div>`} />
      </div>
    </div>
  );
}

/* ════ Tab 5: Minőségi Függetlenség + DNF/CNF ════ */
const MINT_NAMES: Record<string, string> = {
  m11: 'a₁∩a₂', m10: 'a₁∩ā₂', m01: 'ā₁∩a₂', m00: 'ā₁∩ā₂',
};
const MINT_MEANINGS: Record<string, string> = {
  m11: 'Mindkét generátorban lévő elemek (a₁ ÉS a₂)',
  m10: 'Csak a₁-ben lévő elemek (a₁ ÉS nem a₂)',
  m01: 'Csak a₂-ben lévő elemek (nem a₁ ÉS a₂)',
  m00: 'Sem a₁-ben sem a₂-ben (sem a₁ sem a₂)',
};

function IndepTab() {
  const [mints, setMints] = useState<Record<string, boolean>>({ m11: false, m10: false, m01: false, m00: false });
  const toggle = (id: string) => setMints(prev => ({ ...prev, [id]: !prev[id] }));
  const selected = Object.entries(mints).filter(([, v]) => v).map(([k]) => k);

  let dnfExpr = '';
  let dnfMeaning = '';
  if (selected.length === 0) { dnfExpr = '∅ (üres halmaz — semmi sem teljesül)'; dnfMeaning = 'Egyetlen minterm sem kiválasztott.'; }
  else if (selected.length === 4) { dnfExpr = 'I (egységelem — minden elem teljesül)'; dnfMeaning = 'Mind a 4 minterm kiválasztva → DNF = I.'; }
  else { dnfExpr = selected.map(k => MINT_NAMES[k]).join(' ∪ '); dnfMeaning = selected.map(k => `• ${MINT_NAMES[k]}: ${MINT_MEANINGS[k]}`).join('\n'); }

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <RichTex className="def-box" html={String.raw`<strong>1.13. Definíció — Minőségi Függetlenség</strong><br>
Legyen \(A_1,\dots,A_n\subset I\). A rendszer <strong>minőségileg független</strong>, ha tetszőleges \(\varepsilon_i\in\{+1,-1\}\) esetén:
\[A_1^{\varepsilon_1}\cap\cdots\cap A_n^{\varepsilon_n}\neq\emptyset\]
ahol \(A^{+1}:=A\) és \(A^{-1}:=\overline{A}\).`} />
        <RichTex className="thm-box" style={{ marginTop: '.5rem' }} html={String.raw`<strong>1.14. Állítás (i):</strong> Ha \(A_1,\dots,A_n\subset I\) minőségileg független, akkor \(|I|\geq 2^n\).<br><br>
<strong>(ii):</strong> Minden \(2^n\) elemű halmazban léteznek \(n\) darab minőségileg független részhalmaz. A konstrukció: \(A_i = \{x\in I: x\text{ bináris alakjának }i\text{-edik bitje }=1\}\).`} />
        <RichTex className="ex-box" style={{ marginTop: '.5rem' }} html={String.raw`<strong>Példa n=2, I={0,1,2,3}:</strong><br>
\(A_1 = \{2,3\}\) (2-es bit = 1)<br>
\(A_2 = \{1,3\}\) (1-es bit = 1)<br>
Mind a 4 metszet \(\neq\emptyset\):<br>
\(A_1\cap A_2=\{3\},\; A_1\cap\overline{A_2}=\{2\},\; \overline{A_1}\cap A_2=\{1\},\; \overline{A_1}\cap\overline{A_2}=\{0\}\)`} />
        <RichTex className="thm-box" style={{ marginTop: '.5rem' }} html={String.raw`<strong>1.20. Következmény:</strong> Ha \(\mathcal{B}\) egy \(m\) elemmel generált Boole-algebra, akkor:
\[|\mathcal{B}|\leq 2^{2^m}\]
Egyenlőség pontosan akkor, ha a generátorelemek minőségileg függetlenek.`} />
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>1.19. DNF/CNF Normálformák — Mintermek</span>
          <p style={{ fontSize: '.79rem', color: '#64748b', margin: '.4rem 0' }}>Generátorrendszer: {`{a₁, a₂}`}. Kattints a mintermekre a DNF kiválasztásához:</p>
          <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginBottom: '.75rem', flexWrap: 'wrap' }}>
            {[
              { id: 'm11', label: String.raw`\(a_1\!\cap\! a_2\)`, sub: '(+1,+1)' },
              { id: 'm10', label: String.raw`\(a_1\!\cap\!\overline{a_2}\)`, sub: '(+1,−1)' },
              { id: 'm01', label: String.raw`\(\overline{a_1}\!\cap\! a_2\)`, sub: '(−1,+1)' },
              { id: 'm00', label: String.raw`\(\overline{a_1}\!\cap\!\overline{a_2}\)`, sub: '(−1,−1)' },
            ].map(m => (
              <div key={m.id} onClick={() => toggle(m.id)} style={{
                width: 80, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
                borderRadius: 8, cursor: 'pointer', fontSize: '.72rem', fontFamily: 'monospace', textAlign: 'center',
                border: `2px solid ${mints[m.id] ? ACC : '#1e2533'}`,
                background: mints[m.id] ? 'rgba(16,185,129,.2)' : 'transparent',
                color: mints[m.id] ? '#34d399' : '#94a3b8',
              }}>
                <RichTex html={m.label} />
                <div style={{ fontSize: '.65rem', color: '#64748b', marginTop: '.2rem' }}>{m.sub}</div>
              </div>
            ))}
          </div>
          <div className="def-box" style={{ fontFamily: 'monospace', fontSize: '.88rem', minHeight: '2.5rem', textAlign: 'center' }}>
            {dnfExpr}
          </div>
          {dnfMeaning && (
            <div className="ex-box" style={{ fontSize: '.79rem', marginTop: '.5rem', whiteSpace: 'pre-line' }}>
              {dnfMeaning}
            </div>
          )}
          <RichTex className="thm-box" style={{ marginTop: '.75rem', fontSize: '.82rem' }} html={String.raw`<strong>Minterm vs Maxterm (1.4 képlet)</strong><br>
\[\mathbf{m}_{\vec{\varepsilon}} := \bigwedge_{i=1}^m a_i^{\varepsilon_i} \quad\text{(minterm — egy }\wedge\text{-tag a DNF-ben)}\]
\[\mathbf{M}_{\vec{\eta}} := \bigvee_{i=1}^m a_i^{\eta_i} \quad\text{(maxterm — egy }\vee\text{-tag a CNF-ben)}\]`} />
        </div>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#10b981">Boole-algebrák mérete — \(2^{2^m}\) korlát</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
<thead><tr>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Generátorok (m)</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Max. elemszám \(2^{2^m}\)</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;border-bottom:1px solid #1e2533">Lehetséges DNF-ek</th>
</tr></thead>
<tbody>
<tr><td style="padding:.3rem .5rem">m = 1</td><td style="padding:.3rem .5rem;color:#34d399">4</td><td style="padding:.3rem .5rem">\(\{○, a, \neg a, |\}\)</td></tr>
<tr><td style="padding:.3rem .5rem">m = 2</td><td style="padding:.3rem .5rem;color:#34d399">16</td><td style="padding:.3rem .5rem">16 különböző logikai függvény</td></tr>
<tr><td style="padding:.3rem .5rem">m = 3</td><td style="padding:.3rem .5rem;color:#34d399">256</td><td style="padding:.3rem .5rem">256 lehetséges Boole-függ.</td></tr>
<tr><td style="padding:.3rem .5rem">m = 4</td><td style="padding:.3rem .5rem;color:#34d399">65 536</td><td style="padding:.3rem .5rem">—</td></tr>
<tr><td style="padding:.3rem .5rem">m = 5</td><td style="padding:.3rem .5rem;color:#34d399">4 294 967 296</td><td style="padding:.3rem .5rem">≈ 4 milliárd</td></tr>
</tbody></table>`} />
      </div>
    </div>
  );
}

/* ════ Tab 6: Történet & Irodalom ════ */
const t6 = String.raw`
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1rem">
<div class="info-box">
  <span class="lbl" style="color:#10b981">Matematikusok — kapcsolódó életrajzok</span>
  <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
  <thead><tr>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;border-bottom:1px solid #1e2533">Név</th>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;border-bottom:1px solid #1e2533">Évek · Nemzet</th>
    <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;border-bottom:1px solid #1e2533">Hozzájárulás</th>
  </tr></thead>
  <tbody>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Georg Cantor</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1845–1918 · német</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Halmazelmélet megteremtője; végtelen számosságok; nem létezik univerzális halmaz (1.1).</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Ernst Zermelo</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1871–1953 · német</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">1903: a halmazelmélet axiómarendszere.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Adolf Fraenkel</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1891–1965 · német</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">1921: kiválasztási axióma függetlensége → ZFC.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Bertrand Russell</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1872–1970 · angol</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Russell-paradoxon — naiv halmazelmélet ellentmondása.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Johann Venn</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1834–1923 · angol</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Angol lelkész; 1880: pedagógiai Venn-diagramok.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Georg Boole</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1815–1864 · angol</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Formális algebra; matematikai logika megalapozása.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Augustus De Morgan</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1806–1871 · angol</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">De Morgan-azonosságok (1.8 d, e).</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Ernst Steinitz</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1871–1928 · német</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">1910: izomorfia-elv általános megfogalmazása.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Marshall H. Stone</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1903–1989 · amerikai</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">1936: Stone-tétel (1.11).</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Kurt Gödel</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1906–1978 · osztrák</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Teljességi és nemteljességi tételek.</td></tr>
  <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>Paul J. Cohen</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28;color:#64748b">1934–2007 · amerikai</td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">1960: kontinuum-hipotézis eldönthetetlensége (forszolás).</td></tr>
  <tr><td style="padding:.3rem .5rem"><strong>Branko Grünbaum</strong></td><td style="padding:.3rem .5rem;color:#64748b">1929–2018 · amerikai</td><td style="padding:.3rem .5rem">1975: tetszőleges \(n\)-re konvex sokszögekkel rajzolt Venn-diagram (1.15).</td></tr>
  </tbody></table>
</div>
<div>
  <div class="info-box" style="margin-bottom:.75rem">
    <span class="lbl" style="color:#10b981">Kontinuum-hipotézis · Cohen 1960</span>
    <div class="def-box" style="font-size:.84rem;margin-top:.5rem">
      <strong>Kontinuum-hipotézis:</strong> Létezik-e \(\mathbb{R}\)-nek olyan \(X\subseteq\mathbb{R}\) részhalmaza, amelynek számossága \(\mathbb{N}\) és \(\mathbb{R}\) számossága között van?
    </div>
    <div class="thm-box" style="font-size:.84rem">
      <strong>Cohen 1960:</strong> A válasz ZFC-ben <em>nem adható meg</em>. Cohen kifejlesztette a <strong>forszolás-módszert</strong> — a XX. sz. egyik legmélyebb logikai eredménye. Fields-érem 1966.
    </div>
  </div>
  <div class="info-box">
    <span class="lbl" style="color:#10b981">Történeti idővonal</span>
    <table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
    <thead><tr>
      <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;border-bottom:1px solid #1e2533;width:5rem">Év</th>
      <th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;border-bottom:1px solid #1e2533">Esemény</th>
    </tr></thead>
    <tbody>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1854</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Boole: <em>The Laws of Thought</em>.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1880</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Venn pedagógiai cikke a Venn-diagramokról.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>~1880</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Cantor halmazelmélete; végtelen számosságok, diagonális érv.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1903</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Russell paradoxona · Zermelo axiómarendszere.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1910</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Steinitz izomorfia-elv.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1921</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Fraenkel — ZFC.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>~1930</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Gödel teljességi és nemteljességi tételei.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1936</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Stone-tétel.</td></tr>
    <tr><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28"><strong>1960</strong></td><td style="padding:.3rem .5rem;border-bottom:1px solid #161b28">Cohen — kontinuum-hipotézis eldönthetetlen ZFC-ben.</td></tr>
    <tr><td style="padding:.3rem .5rem"><strong>1975</strong></td><td style="padding:.3rem .5rem">Grünbaum — tetszőleges n-re konvex Venn-diagramok.</td></tr>
    </tbody></table>
  </div>
</div>
</div>`;

const TABS: Tab[] = [
  {
    id: 'def', label: 'Halmazok definíciója',
    content: (
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '260px' }}>
          <div className="info-box">
            <span className="lbl" style={{ color: ACC }}>1.1. Tétel — Cantor</span>
            <p style={{ fontSize: '.8rem', color: '#64748b', margin: '.5rem 0' }}>Lépésről-lépésre bizonyítás (indirekt):</p>
            <CantorStepper />
          </div>
        </div>
        <div style={{ flex: '1', minWidth: '260px' }}>
          <RichTex html={t1right} />
        </div>
      </div>
    ),
  },
  { id: 'bool', label: 'Boole-algebrák', content: <BoolTab /> },
  { id: 'venn', label: 'Venn-diagramok', content: <VennTab /> },
  { id: 'dual', label: 'Dualitás & De Morgan', content: <DualTab /> },
  { id: 'indep', label: 'Minőségi Függetlenség', content: <IndepTab /> },
  { id: 'hist', label: 'Történet & Irodalom', content: <RichTex html={t6} /> },
];

export default function DimatCh1() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — I.1. fejezet</p>
      <h1 className="ila__title">Halmazok</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
