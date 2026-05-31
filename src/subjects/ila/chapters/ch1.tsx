import { Link } from 'react-router-dom';
import { Box, Cols, Tabs, ProofSteps, LawGrid, RichTex, type Tab } from '../components/kit';
import { VennLab } from '../components/Venn';

const numberSetsHtml = `
<div style="display:flex;flex-direction:column;gap:.55rem">
  <div style="display:flex;gap:1rem;align-items:center"><span style="min-width:44px;font-size:1rem;color:#a78bfa;font-weight:700">\\(\\mathbb{R}\\)</span><span>valós számok halmaza</span></div>
  <div style="display:flex;gap:1rem;align-items:center"><span style="min-width:44px;font-size:1rem;color:#a78bfa;font-weight:700">\\(\\mathbb{Q}\\)</span><span>racionális számok — két egész szám hányadosaként felírható valós számok</span></div>
  <div style="display:flex;gap:1rem;align-items:center"><span style="min-width:44px;font-size:1rem;color:#a78bfa;font-weight:700">\\(\\mathbb{Z}\\)</span><span>egész számok halmaza</span></div>
  <div style="display:flex;gap:1rem;align-items:center"><span style="min-width:44px;font-size:1rem;color:#a78bfa;font-weight:700">\\(\\mathbb{N}\\)</span><span>pozitív egész számok: \\(\\mathbb{N} = \\{1, 2, 3, 4, \\ldots\\}\\)</span></div>
  <div style="display:flex;gap:1rem;align-items:center"><span style="min-width:44px;font-size:1rem;color:#a78bfa;font-weight:700">\\(\\mathbb{N}_0\\)</span><span>nemnegatív egész számok: \\(\\mathbb{N}_0 = \\{0, 1, 2, 3, \\ldots\\}\\)</span></div>
  <div style="margin-top:.6rem;padding-top:.6rem;border-top:1px solid rgba(167,139,250,.15);color:#8892a4">Összefüggés: \\(\\mathbb{N} \\subset \\mathbb{N}_0 \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}\\)</div>
</div>`;

const vennAinU = `
<div style="display:flex;justify-content:center">
  <svg width="260" height="155" viewBox="0 0 260 155">
    <rect x="5" y="5" width="250" height="145" rx="6" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="238" y="22" fill="#6b7280" font-size="13" font-family="Georgia,serif">U</text>
    <circle cx="125" cy="80" r="52" fill="rgba(167,139,250,.18)" stroke="#a78bfa" stroke-width="2"/>
    <text x="115" y="86" fill="#e2e8f0" font-size="19" font-family="Georgia,serif" font-weight="bold">A</text>
  </svg>
</div>
<div style="font-size:.72rem;color:#6b7280;text-align:center;margin-top:.3rem">Minden halmaz az \\(U\\) univerzális halmazban ábrázolható</div>`;

const vennAsubB = `
<div style="display:flex;justify-content:center">
  <svg width="260" height="165" viewBox="0 0 260 165">
    <rect x="5" y="5" width="250" height="155" rx="6" fill="none" stroke="#374151" stroke-width="1.5"/>
    <text x="238" y="22" fill="#6b7280" font-size="13" font-family="Georgia,serif">U</text>
    <circle cx="138" cy="88" r="63" fill="rgba(124,58,237,.15)" stroke="#7c3aed" stroke-width="2"/>
    <circle cx="125" cy="88" r="36" fill="rgba(167,139,250,.28)" stroke="#a78bfa" stroke-width="2"/>
    <text x="113" y="94" fill="#e2e8f0" font-size="16" font-family="Georgia,serif" font-weight="bold">A</text>
    <text x="170" y="72" fill="#c4b5fd" font-size="18" font-family="Georgia,serif" font-weight="bold">B</text>
  </svg>
</div>
<div style="font-size:.72rem;color:#6b7280;text-align:center;margin-top:.3rem">Ha \\(A \\subseteq B\\), akkor \\(A\\) belül van \\(B\\)-ben</div>`;

const opSummary = [
  ['\\(A \\cup B\\) — Unió', '\\(\\{x \\in U : x \\in A \\;\\text{vagy}\\; x \\in B\\}\\)'],
  ['\\(A \\cap B\\) — Metszet', '\\(\\{x \\in U : x \\in A \\;\\text{és}\\; x \\in B\\}\\)'],
  ['\\(A \\setminus B\\) — Különbség', '\\(\\{x \\in U : x \\in A \\;\\text{és}\\; x \\notin B\\}\\)'],
  ['\\(A \\mathbin{\\triangle} B\\) — Szimmetrikus különbség', '\\(\\{x \\in A \\cup B : x \\notin A \\cap B\\}\\) \\(= (A \\setminus B) \\cup (B \\setminus A)\\)'],
  ['\\(\\overline{A}\\) — Komplemens', '\\(\\{x \\in U : x \\notin A\\}\\)'],
];

const TABS: Tab[] = [
  {
    id: 'al',
    label: 'Alapfogalmak',
    content: (
      <Cols>
        <div>
          <Box kind="def" label="Definíció — Halmaz" html={'A <strong style="color:#a78bfa">halmaz</strong> alapfogalom — <em>nem definiáljuk</em>. Intuitívan: jól meghatározott, egymástól megkülönböztethető dolgok összessége.<br><br>\\(a \\in A\\) : <strong>a</strong> eleme az <strong>A</strong> halmaznak — szintén alapfogalom.'} />
          <Box kind="ex" label="Példák" html={'\\(A = \\{1, 5, 7\\}\\) → \\(5 \\in A,\\quad 4 \\notin A\\)<br>\\(B = \\{x \\in \\mathbb{R} : x \\ge 3 \\text{ és } x < 10\\}\\) → \\(3 \\in B,\\; 10 \\notin B\\)<br>\\(C = \\{1, A, \\{4\\}\\}\\) → \\(4 \\notin C,\\quad \\{4\\} \\in C\\)<br>\\(D = \\{2, 4, 6, 8, \\ldots\\}\\) (páros pozitív egészek)'} />
          <Box kind="def" label="Egyenlőség & Üres halmaz" html={'Az <strong>A</strong> és <strong>B</strong> halmazok <strong style="color:#a78bfa">egyenlőek</strong>, ha ugyanazok az elemeik:<br>\\[\\{1,5,8\\} = \\{1,8,5\\} = \\{1,8,1,5\\} \\;\\neq\\; \\big\\{\\{1\\},\\{5\\},8\\big\\}\\]Azt a halmazt, amelynek nincs eleme, <strong style="color:#a78bfa">üres halmaznak</strong> hívjuk: \\(\\emptyset\\).<br>\\(U\\) — az univerzális halmaz (az összes vizsgált elem halmaza).'} />
        </div>
        <div>
          <Box kind="info" label="Számhalmazok jelölései" html={numberSetsHtml} />
          <Box kind="info" label="Venn-diagram — A az U-ban" html={vennAinU} />
        </div>
      </Cols>
    ),
  },
  {
    id: 're',
    label: 'Részhalmaz',
    content: (
      <Cols>
        <div>
          <Box kind="def" label="Definíció — Részhalmaz" html={'Azt mondjuk, hogy <strong>A</strong> <strong style="color:#a78bfa">részhalmaza</strong> B-nek, ha A minden eleme eleme B-nek is.<br>Jelölés: \\(A \\subseteq B\\) (vagy \\(B \\supseteq A\\))'} />
          <Box kind="def" label="Definíció — Valódi részhalmaz" html={'<strong>A</strong> <strong style="color:#a78bfa">valódi részhalmaza</strong> B-nek, ha \\(A \\subseteq B\\) és \\(A \\neq B\\).<br>Jelölés: \\(A \\subset B\\)<br><span style="color:#6b7280;font-size:.74rem">⚠ Néhány könyv az \\(A \\subset B\\) jelölést a részhalmaz (nem valódi) jelölésére is használja.</span>'} />
          <Box kind="ex" label="Példa" html={'\\(\\{1,3,5\\} \\subseteq \\{1,2,3,4,5\\}\\), sőt \\(\\{1,3,5\\} \\subset \\{1,2,3,4,5\\}\\)<br>De \\(\\{1,2,3,4,5\\} \\not\\subseteq \\{1,3,5\\}\\)'} />
          <Box kind="thm" label="Tétel — Részhalmaz tulajdonságai" html={'Tetszőleges \\(A, B, C\\) halmazokra:<ol style="margin:.4rem 0 0 1.1rem;padding:0"><li>\\(\\emptyset \\subseteq A\\) és \\(A \\subseteq A\\)</li><li>ha \\(A \\subseteq B\\) és \\(B \\subseteq C\\), akkor \\(A \\subseteq C\\) (tranzitivitás)</li><li>\\(A = B \\;\\Longleftrightarrow\\; A \\subseteq B \\text{ és } B \\subseteq A\\) (antiszimmetria)</li></ol>'} />
          <Box kind="def" label="Definíció — Diszjunkt halmazok" html={'Az <strong>A</strong> és <strong>B</strong> halmazok <strong style="color:#a78bfa">diszjunktak</strong>, ha \\(A \\cap B = \\emptyset\\).'} />
        </div>
        <div>
          <Box kind="info" label="A ⊆ B — Venn-diagram" html={vennAsubB} />
          <Box kind="def" label="Definíció — Hatványhalmaz" html={'Az <strong>A</strong> halmaz összes részhalmazainak halmazát <strong>A</strong> <strong style="color:#a78bfa">hatványhalmazának</strong> hívjuk.<br>Jelölés: \\(\\mathcal{P}(A)\\)'} />
          <Box kind="ex" label="Példa — Hatványhalmaz" html={'\\(A = \\{a, b, c\\}\\)<br>\\(\\mathcal{P}(A) = \\bigl\\{\\,\\emptyset,\\,\\{a\\},\\,\\{b\\},\\,\\{c\\},\\,\\{a,b\\},\\,\\{a,c\\},\\,\\{b,c\\},\\,\\{a,b,c\\}\\,\\bigr\\}\\)<br>Ha \\(|A| = n\\), akkor \\(|\\mathcal{P}(A)| = 2^n\\).<br><span style="color:#6b7280;font-size:.73rem">Jelen esetben: \\(2^3 = 8\\) elem ✓</span>'} />
        </div>
      </Cols>
    ),
  },
  {
    id: 'mu',
    label: 'Halmazműveletek',
    content: (
      <Cols variant="7-5">
        <div>
          <span className="lbl">Interaktív Venn-diagram</span>
          <VennLab />
        </div>
        <div>
          <span className="lbl">Összefoglalás</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {opSummary.map(([t, d], i) => (
              <div className="info-box" style={{ padding: '0.6rem 1rem' }} key={i}>
                <RichTex html={`<div style="font-size:.71rem;font-weight:700;color:#a78bfa;margin-bottom:.3rem">${t}</div><div>${d}</div>`} />
              </div>
            ))}
          </div>
        </div>
      </Cols>
    ),
  },
  {
    id: 'az',
    label: 'Azonosságok',
    content: (
      <Cols>
        <div>
          <span className="lbl">Halmaz-azonosságok (tetszőleges A, B, C-re)</span>
          <LawGrid
            head={['Azonosság', 'Tulajdonság']}
            rows={[
              { l: '\\(A \\cap A = A\\)', r: 'idempotencia' },
              { l: '\\(A \\cap B = B \\cap A\\)', r: 'kommutativitás' },
              { l: '\\((A \\cap B) \\cap C = A \\cap (B \\cap C)\\)', r: 'asszociativitás' },
              { l: '\\((A \\cup B) \\cap A = A\\)', r: 'abszorptivitás' },
              { l: '\\((A \\cup B) \\cap C = (A \\cap C) \\cup (B \\cap C)\\)', r: 'disztributivitás', hi: true },
              { l: '\\(A \\cup A = A\\)', r: 'idempotencia' },
              { l: '\\(A \\cup B = B \\cup A\\)', r: 'kommutativitás' },
              { l: '\\((A \\cup B) \\cup C = A \\cup (B \\cup C)\\)', r: 'asszociativitás' },
              { l: '\\((A \\cap B) \\cup A = A\\)', r: 'abszorptivitás' },
              { l: '\\((A \\cap B) \\cup C = (A \\cup C) \\cap (B \\cup C)\\)', r: 'disztributivitás', hi: true },
            ]}
          />
          <Box kind="thm" label="De Morgan azonosságok" html={'\\[\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}\\]\\[\\overline{A \\cup B} = \\overline{A} \\cap \\overline{B}\\]<span style="color:#6b7280;font-size:.76rem">A metszet komplementere = komplementek uniója, és fordítva.</span>'} />
        </div>
        <div>
          <Box kind="thm" label="Tétel — Különbség és szimm. különbség" html={'\\[A \\setminus B = A \\cap \\overline{B}\\]\\[A \\mathbin{\\triangle} B = (A \\cup B) \\setminus (A \\cap B) = (A \\setminus B) \\cup (B \\setminus A)\\]'} />
          <Box kind="info" label="Alaptulajdonságok" html={'<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem .8rem"><div>\\(\\overline{\\overline{A}} = A\\)</div><div></div><div>\\(A \\cap \\overline{A} = \\emptyset\\)</div><div>\\(A \\cup \\overline{A} = U\\)</div><div>\\(A \\cap U = A\\)</div><div>\\(A \\cup U = U\\)</div><div>\\(A \\cap \\emptyset = \\emptyset\\)</div><div>\\(A \\cup \\emptyset = A\\)</div></div>'} />
          <Box kind="thm" label="Részhalmaz-jellemzések" html={'\\(A \\subseteq B \\;\\Longleftrightarrow\\; A \\cup B = B\\)<br>\\(A \\subseteq B \\;\\Longleftrightarrow\\; A \\cap B = A\\)<br>\\(A \\subseteq B \\;\\Longleftrightarrow\\; A \\cap \\overline{B} = \\emptyset\\)'} />
          <Box kind="def" label="Indexelt halmazok" html={'Legyen \\(I\\) indexhalmaz, \\(A_i \\subseteq U\\) minden \\(i \\in I\\)-re. Ekkor:\\[\\bigcap_{i \\in I} A_i = \\{x \\in U : x \\in A_i \\text{ minden } i \\in I\\text{-re}\\}\\]\\[\\bigcup_{i \\in I} A_i = \\{x \\in U : x \\in A_i \\text{ valamely } i \\in I\\text{-re}\\}\\]'} />
        </div>
      </Cols>
    ),
  },
  {
    id: 'bi',
    label: 'Bizonyítások',
    content: (
      <Cols>
        <div>
          <span className="lbl">1. Bizonyítás — Venn-diagrammal</span>
          <Box kind="ex" html={'<div style="font-weight:700;margin-bottom:.5rem">Mutassuk meg: \\((A \\cap B) \\cup C = (A \\cup C) \\cap (B \\cup C)\\)</div><div style="color:#8892a4;line-height:1.75">1. Jelöljük be \\(A \\cap B\\)-t (a bal körök metszete)<br>2. Az \\((A \\cap B) \\cup C\\) területe = bal oldal<br>3. Jelöljük be \\(A \\cup C\\)-t<br>4. Jelöljük be \\(B \\cup C\\)-t<br>5. \\((A \\cup C) \\cap (B \\cup C)\\) metszete = azonos terület \\(\\blacksquare\\)</div>'} />
          <span className="lbl">2. Bizonyítás — Algebrai</span>
          <div className="info-box">
            <RichTex html={'<div style="font-weight:700;margin-bottom:.85rem">Mutassuk meg: \\((A \\cup B) \\setminus C = (A \\setminus C) \\cup (B \\setminus C)\\)</div>'} />
            <ProofSteps
              steps={[
                { eq: '\\((A \\cup B) \\setminus C\\)' },
                { eq: '\\(= (A \\cup B) \\cap \\overline{C}\\)', why: '\\(A \\setminus X = A \\cap \\overline{X}\\)' },
                { eq: '\\(= (A \\cap \\overline{C}) \\cup (B \\cap \\overline{C})\\)', why: 'disztributivitás' },
                { eq: '<span style="color:#a78bfa">\\(= (A \\setminus C) \\cup (B \\setminus C) \\quad\\blacksquare\\)</span>', why: 'visszaalakítva' },
              ]}
            />
          </div>
        </div>
        <div>
          <span className="lbl">3. Bizonyítás — Algebrai (hosszabb)</span>
          <div className="info-box">
            <RichTex html={'<div style="font-weight:700;margin-bottom:.5rem">Mutassuk meg: \\(A \\mathbin{\\triangle} (A \\mathbin{\\triangle} B) = B\\)</div><div style="font-size:.78rem;color:#6b7280;margin-bottom:.75rem">Felhasználjuk: \\(X \\mathbin{\\triangle} Y = (X \\cap \\overline{Y}) \\cup (\\overline{X} \\cap Y)\\)</div>'} />
            <ProofSteps
              steps={[
                { eq: 'Legyen \\(X = A \\mathbin{\\triangle} B\\)', why: 'rövidítés' },
                { eq: '\\(X = (A \\cap \\overline{B}) \\cup (\\overline{A} \\cap B)\\)', why: '\\(\\triangle\\) definíciója' },
                { eq: '\\(\\overline{X} = (\\overline{A} \\cup B) \\cap (A \\cup \\overline{B})\\)', why: 'de Morgan kétszer' },
                { eq: '\\(A \\cap \\overline{X} = \\emptyset \\cup (A \\cap \\overline{B}) = A \\cap \\overline{B}\\)', why: '\\(A \\cap \\overline{A} = \\emptyset\\)' },
                { eq: '\\(\\overline{A} \\cap X = \\emptyset \\cup (\\overline{A} \\cap B) = \\overline{A} \\cap B\\)', why: '\\(\\overline{A} \\cap A = \\emptyset\\)' },
                { eq: '\\(A \\mathbin{\\triangle} X = (A \\cap \\overline{B}) \\cup (\\overline{A} \\cap B)\\)', why: 'összegyűjtve' },
                { eq: '\\(\\phantom{A \\mathbin{\\triangle} X\\,}= (A \\cup \\overline{A}) \\cap B = U \\cap B\\)', why: 'disztributivitás' },
                { eq: '<span style="color:#a78bfa">\\(= B \\quad\\blacksquare\\)</span>', why: '\\(U \\cap B = B\\)' },
              ]}
            />
            <RichTex html={'<div style="margin-top:.75rem;padding-top:.6rem;border-top:1px solid rgba(167,139,250,.15);font-size:.78rem;color:#6b7280;line-height:1.6"><strong style="color:#a78bfa">Következmény:</strong> Ha \\(C = A \\mathbin{\\triangle} B\\), akkor \\(A \\mathbin{\\triangle} C = B\\) — azaz \\(\\triangle\\) "visszacsinálható". Minden elem saját inverze a \\((\\mathcal{P}(U),\\, \\triangle,\\, \\emptyset)\\) Abel-csoportban.</div>'} />
          </div>
        </div>
      </Cols>
    ),
  },
];

export default function Ch1() {
  return (
    <div className="ila">
      <Link to="/ila" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">ILA — 1. fejezet</p>
      <h1 className="ila__title">Halmazelmélet</h1>
      <p className="ila__cite">Hartung Ferenc · Pannon Egyetem Matematika Tanszék · 2025 | Szendrei Ágnes: Diszkrét matematika, Polygon, 2004</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
