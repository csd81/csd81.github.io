import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

const ACC = '#10b981';

/* ════ Tab 1: Bevezetés ════ */
const t1 = String.raw`
<h5 style="color:#10b981;font-weight:700;margin:0 0 .75rem">A „diszkrét" fogalma</h5>
<p style="font-size:.88rem;color:#c4cdd8;line-height:1.8">
  A <strong style="color:#34d399">"diszkrét"</strong> jelző latin eredetű: <em>discretus</em> = <strong>"elkülönült", "különálló"</strong>. A diszkrét matematika elsősorban <strong>véges halmazokkal</strong> foglalkozik, amelyek elemei jól elkülöníthetők egymástól — szemben az analízis és valószínűségszámítás <em>folytonos</em> szemléletével. Véges halmaz mérete akár \(10^{10^{10}}\) is lehet és még "kicsi"…
</p>
<div class="def-box"><strong>Diszkrét matematika</strong> = véges (vagy megszámlálható) struktúrák matematikája. Két fő ága: <strong>Kombinatorika</strong> és <strong>Gráfelmélet</strong>.</div>
<div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0">
  <div class="def-box" style="flex:1;min-width:220px;border-left-color:#10b981">
    <div style="font-size:.95rem;font-weight:700;color:#10b981;margin-bottom:.35rem">Kombinatorika</div>
    <p style="font-size:.8rem;color:#94a3b8;line-height:1.7;margin:0">Véges halmazok <strong style="color:#c4cdd8">megszámlálásának, leszámlálásának</strong> tudománya. A "kombináció" latin szó: <em>csoportosítás, rendezgetés</em>.</p>
    <div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.3rem">
      <span class="seq-chip">Permutációk</span><span class="seq-chip">Kombinációk</span><span class="seq-chip">Generátorfüggvények</span><span class="seq-chip">Rekurziók</span><span class="seq-chip">Szitaformula</span>
    </div>
  </div>
  <div class="def-box" style="flex:1;min-width:220px;border-left-color:#38bdf8">
    <div style="font-size:.95rem;font-weight:700;color:#38bdf8;margin-bottom:.35rem">Gráfelmélet</div>
    <p style="font-size:.8rem;color:#94a3b8;line-height:1.7;margin:0">Nem csak pontok és vonalak rajza — egy <strong style="color:#c4cdd8">tetszőleges halmaz elemei közötti kapcsolatok</strong> vizsgálata. 15 fejezet foglalkozik vele!</p>
    <div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.3rem">
      <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Euler-körök</span><span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Fák</span><span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Síkgráfok</span><span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Hálózati folyamok</span>
    </div>
  </div>
</div>
<h5 style="color:#10b981;font-weight:700;margin:.75rem 0">Motiváló példák — a kombinatorikai robbanás</h5>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem">
  <div class="ex-box">
    <div style="font-size:.95rem;font-weight:700;color:#fcd34d;margin-bottom:.3rem">Sakktábla</div>
    <div style="font-size:.8rem;color:#c4cdd8;line-height:1.7">A feltaláló az \(n\)-edik mezőre az előző kétszerese búzát kért. Az összeg:\[2^{64}-1 \approx 1{,}8 \times 10^{19}\]búzaszem — <em>teljesíthetetlen</em>.</div>
  </div>
  <div class="ex-box">
    <div style="font-size:.95rem;font-weight:700;color:#fcd34d;margin-bottom:.3rem">DNS molekula</div>
    <div style="font-size:.8rem;color:#c4cdd8;line-height:1.7">Alig egymillió atomból álló DNS molekulát alkotó <strong>két</strong> atomcsoport-pár hányféle változatos élőlényt tud kódolni? A szám csillagászatilag nagy.</div>
  </div>
  <div class="ex-box">
    <div style="font-size:.95rem;font-weight:700;color:#fcd34d;margin-bottom:.3rem">ABC-könyv</div>
    <div style="font-size:.8rem;color:#c4cdd8;line-height:1.7">Az ABC 24 betűjéből hányféle változatos, legfeljebb 1000 oldalas könyvet lehet megírni? Véges, de astronomikusan nagy szám.</div>
  </div>
</div>
<div class="thm-box mt-3" style="margin-top:.75rem">
  <strong style="color:#38bdf8">Előfeltételek:</strong>
  <p style="font-size:.83rem;color:#94a3b8;line-height:1.75;margin:.5rem 0 0">
    I. éves szintű <strong style="color:#c4cdd8">analízis</strong> (komplex számok, deriválás, integrálás, végtelen sorok, parciális törtekre bontás) és <strong style="color:#c4cdd8">lineáris algebra</strong> (absztrakt vektorterek, sajátértékek, mátrixok diagonalizálása).
  </p>
  <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.5rem">
    <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Deriválás/integrálás</span>
    <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Végtelen sorok</span>
    <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Vektorterek</span>
    <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Mátrixok</span>
    <span class="seq-chip" style="border-color:#38bdf8;color:#7dd3fc">Sajátértékek</span>
  </div>
</div>
`;

/* ════ Tab 2: Jelölések ════ */
const JELOL_DETAIL: Record<string, string> = {
  szamhalmazok: String.raw`<strong>Számhalmazok:</strong> \(\mathbb{N}=\{0,1,2,\dots\}\) (ahol \(0\in\mathbb{N}\)), \(\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}\), \(\mathbb{Q}=\{p/q: p,q\in\mathbb{Z}, q\neq 0\}\), \(\mathbb{R}\) a valós számok, \(\mathbb{C}=\{a+bi: a,b\in\mathbb{R}\}\). Figyelem: a könyv \(0\in\mathbb{N}\) konvenciót használ.`,
  rplus: String.raw`\(\mathbb{R}_+ := \{x\in\mathbb{R}: x\geq 0\}\) a nemnegatív valós számok halmaza.`,
  nident: String.raw`Fontos konvenció: az \(n\in\mathbb{N}\) természetes számot azonosítjuk az \(\{1,\dots,n\}\) halmazzal. Tehát \(3 = \{1,2,3\}\). Ez megkönnyíti pl. az \(A^n = A^{\{1,\dots,n\}}\) jelölést.`,
  interval: String.raw`\([a,b] = \{x\in\mathbb{R}: a\leq x\leq b\}\) zárt intervallum, \((a,b) = \{x\in\mathbb{R}: a<x<b\}\) nyílt intervallum. Vegyes: \([a,b)\) és \((a,b]\). Ügyeljünk: \((a,b)\) jelölheti a rendezett párt is — a kontextusból derül ki!`,
  card: String.raw`\(|A|\) (vagy \(\#A\)) az \(A\) halmaz elemeinek száma (számossága). Véges halmazra ez egy nemnegatív egész. \(|\emptyset|=0\), \(|\{1,2,3\}|=3\).`,
  powerset: String.raw`\(\mathcal{P}(A) := \{X: X\subseteq A\}\) az összes részhalmaz halmaza. Kulcstétel: \(|\mathcal{P}(A)| = 2^{|A|}\). Ha \(|A|=3\): \(\mathcal{P}(\{a,b,c\})=\{\emptyset,\{a\},\{b\},\{c\},\{a,b\},\{a,c\},\{b,c\},\{a,b,c\}\}\) — 8 elem.`,
  ba: String.raw`\({}^AB := \{f: f:A\to B\text{ függvény}\}\) az összes \(A\)-ból \(B\)-be képező függvény halmaza. Száma: \(|{}^AB| = |B|^{|A|}\).`,
  ak: String.raw`\(A^k = A\times A\times\cdots\times A\) (\(k\)-szoros Descartes-szorzat): az összes \((a_1,\dots,a_k)\) rendezett \(k\)-es ahol minden \(a_i\in A\). \(|A^k|=|A|^k\).`,
  a0: String.raw`\(A^0 := \{\emptyset\}\) — az üres sorozat (üres szó) egyetlen elemű halmaza. Bármely \(A\)-ra \(|A^0|=1\).`,
  astar: String.raw`\(A^* := \bigcup_{i=0}^{\infty} A^i\) az összes véges sorozat ("szó") halmaza \(A\) ábécé felett. Fontos: \(A^*\) mindig végtelen halmaz (ha \(|A|\geq 1\)).`,
  an: String.raw`\(A^{\mathbb{N}} := {}^{\mathbb{N}}A\) az összes végtelen sorozat halmaza. Ez az analízisbeli sorozat fogalmának általánosítása.`,
  ak2: String.raw`\([A]^k := P_k(A) := \{X\subseteq A: |X|=k\}\) az \(A\) halmaz pontosan \(k\) elemű részhalmazainak halmaza. Száma: \(|[A]^k| = \binom{|A|}{k}\). Ez a kombinatorika alapja!`,
  akle: String.raw`\([A]^{\leq k} := P_{\leq k}(A) := \{X\subseteq A: |X|\leq k\}\) a legfeljebb \(k\) elemű részhalmazok. Száma: \(\sum_{i=0}^k \binom{|A|}{i}\).`,
  partial: String.raw`Parciális függvény \(f:A\hookrightarrow B\): ahol a definíciós tartomány \(\mathrm{Dom}(f)\subseteq A\) lehet valódi részhalmaz. Ha \(\mathrm{Dom}(f)=A\) akkor totális függvény.`,
  floor: String.raw`\(\lfloor x\rfloor\) = floor = alsó egészrész. Példák: \(\lfloor 3.7\rfloor=3\), \(\lfloor 3\rfloor=3\), \(\lfloor -1.3\rfloor=-2\) (nem -1!). Figyelem: negatívaknál a "lefelé kerekítés" nagyobb abszolút értéket ad.`,
  ceil: String.raw`\(\lceil x\rceil\) = ceiling = felső egészrész. Példák: \(\lceil 3.2\rceil=4\), \(\lceil 3\rceil=3\), \(\lceil -1.7\rceil=-1\) (nem -2!). Összefüggés: \(\lceil x\rceil = -\lfloor -x\rfloor\).`,
  bigoh: String.raw`Aszimptotikus felső korlát: \(g=\mathcal{O}(f)\) ha \(\exists C>0, n_0\) hogy \(\forall n\geq n_0: g(n)\leq C\cdot f(n)\). Példák: \(5n^2+3n=\mathcal{O}(n^2)\).`,
  asym: String.raw`\(f\sim g\) aszimptotikusan egyenlő: \(\lim_{x\to\infty}f(x)/g(x)=1\). Erősebb mint \(\mathcal{O}\). Pl. Stirling: \(n!\sim\sqrt{2\pi n}(n/e)^n\).`,
  qed: String.raw`Q.E.D. (Quod Erat Demonstrandum) = "amit bizonyítani kellett". A \(\square\) szimbólum ugyanezt jelöli definíciók, tételek, bizonyítások végén.`,
};

function JelolTab() {
  const [selected, setSelected] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const rows: { key: string; sym: string; read: string; ex: string }[] = [
    { key: 'szamhalmazok', sym: String.raw`\(\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R},\mathbb{C}\)`, read: 'Természetes, egész, racionális, valós, komplex számok', ex: String.raw`\(0\in\mathbb{N}\)` },
    { key: 'rplus', sym: String.raw`\(\mathbb{R}_+\)`, read: 'Nemnegatív valós számok', ex: String.raw`\(\mathbb{R}_+=\{x\in\mathbb{R}:x\geq 0\}\)` },
    { key: 'nident', sym: String.raw`\(n\in\mathbb{N}\)`, read: String.raw`Természetes számot azonosítjuk \(\{1,\dots,n\}\)-nel`, ex: String.raw`\(3 \equiv \{1,2,3\}\)` },
    { key: 'interval', sym: String.raw`\([a,b],\;(a,b)\)`, read: 'Zárt, ill. nyílt intervallum', ex: String.raw`\([1,3]=\{x:1\leq x\leq 3\}\)` },
  ];
  const setRows: { key: string; sym: string; read: string; ex: string }[] = [
    { key: 'card', sym: String.raw`\(|A|\) vagy \(\#A\)`, read: String.raw`Az \(A\) halmaz számossága`, ex: String.raw`\(|\{1,2,3\}|=3\)` },
    { key: 'powerset', sym: String.raw`\(\mathcal{P}(A)\)`, read: String.raw`Az \(A\) halmaz hatványhalmaza`, ex: String.raw`\(|\mathcal{P}(A)|=2^{|A|}\)` },
    { key: 'ba', sym: String.raw`\({}^AB\)`, read: String.raw`Az összes \(f:A\to B\) függvény halmaza`, ex: String.raw`\(|{}^AB|=|B|^{|A|}\)` },
    { key: 'ak', sym: String.raw`\(A^k\)`, read: String.raw`\(A\) halmaz \(k\)-adik Descartes-hatványa`, ex: String.raw`\(A^2=A\times A\)` },
    { key: 'a0', sym: String.raw`\(A^0\)`, read: String.raw`\(A\) halmaz 0-adik Descartes-hatványa`, ex: String.raw`\(A^0:=\{\emptyset\}\)` },
    { key: 'astar', sym: String.raw`\(A^*\)`, read: String.raw`Az \(A\)-ból képezhető összes véges sorozat halmaza`, ex: String.raw`\(A^*=\bigcup_{i=0}^{\infty}A^i\)` },
    { key: 'an', sym: String.raw`\(A^{\mathbb{N}}\)`, read: String.raw`Az \(A\)-ból képezhető összes végtelen sorozat halmaza`, ex: String.raw`\({}^{\mathbb{N}}A := \{f:\mathbb{N}\to A\}\)` },
    { key: 'ak2', sym: String.raw`\([A]^k\)`, read: String.raw`Az \(A\) halmaz pontosan \(k\) elemű részhalmazainak halmaza`, ex: String.raw`\([A]^k:=P_k(A)\)` },
    { key: 'akle', sym: String.raw`\([A]^{\leq k}\)`, read: String.raw`Az \(A\) halmaz legfeljebb \(k\) elemű részhalmazainak halmaza`, ex: String.raw`\(P_{\leq k}(A)\)` },
    { key: 'partial', sym: String.raw`\(f:A\hookrightarrow B\)`, read: String.raw`Parciális függvény`, ex: String.raw`\(\mathrm{Dom}(f)\subseteq A\)` },
  ];
  const asymRows: { key: string; sym: string; read: string; ex: string }[] = [
    { key: 'floor', sym: String.raw`\(\lfloor x\rfloor\)`, read: String.raw`Alsó egészrész (floor)`, ex: String.raw`\(\lfloor 3.7\rfloor=3\)` },
    { key: 'ceil', sym: String.raw`\(\lceil x\rceil\)`, read: String.raw`Felső egészrész (ceiling)`, ex: String.raw`\(\lceil 3.2\rceil=4\)` },
    { key: 'bigoh', sym: String.raw`\(\mathcal{O}(f)\)`, read: String.raw`"Nagy ordó f"`, ex: String.raw`\(5n^2+3n=\mathcal{O}(n^2)\)` },
    { key: 'asym', sym: String.raw`\(f\sim g\)`, read: 'Aszimptotikusan egyenlő', ex: String.raw`\(n!\sim\sqrt{2\pi n}\left(\frac{n}{e}\right)^n\)` },
    { key: 'qed', sym: String.raw`Q.E.D. / \(\square\)`, read: 'Bizonyítás vége', ex: String.raw`\(\square\) jelöli definíció, tétel vége` },
  ];

  const renderRow = (r: typeof rows[0]) => (
    <tr key={r.key} style={{ cursor: 'pointer', background: selected === r.key ? 'rgba(16,185,129,.12)' : '' }}
      onClick={() => setSelected(selected === r.key ? null : r.key)}>
      <td style={{ fontFamily: 'monospace', color: '#34d399', minWidth: '8rem', padding: '.4rem .7rem', borderBottom: '1px solid #161b28' }}>
        <RichTex html={r.sym} />
      </td>
      <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', fontSize: '.83rem' }}>
        <RichTex html={r.read} />
      </td>
      <td style={{ padding: '.4rem .7rem', borderBottom: '1px solid #161b28', fontSize: '.72rem', color: '#64748b' }}>
        <RichTex html={r.ex} />
      </td>
    </tr>
  );

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.75rem' }}>
        <span className="lbl" style={{ color: ACC }}>0.1. Általános jelölések — referencia</span>
        <p style={{ fontSize: '.8rem', color: '#64748b', margin: '.5rem 0' }}>Kattints egy sorra a részletes magyarázatért.</p>
        {selected && (
          <div ref={detailRef} className="thm-box" style={{ fontSize: '.84rem', color: '#c4cdd8', lineHeight: 1.8, marginBottom: '.75rem' }}>
            <RichTex html={JELOL_DETAIL[selected] ?? ''} />
          </div>
        )}
        <div style={{ fontSize: '.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '.08em', margin: '.75rem 0 .35rem', borderTop: '1px solid #1e2533', paddingTop: '.6rem' }}>Számhalmazok</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>{(['Jelölés', 'Olvasat', 'Példa / megjegyzés']).map(h => (
                <th key={h} style={{ background: '#1a1f2e', color: '#64748b', padding: '.45rem .7rem', textAlign: 'left', borderBottom: '1px solid #1e2533', fontSize: '.73rem', textTransform: 'uppercase', letterSpacing: '.06em' }}>{h}</th>
              ))}</tr>
            </thead>
            <tbody>{rows.map(renderRow)}</tbody>
          </table>
        </div>
        <div style={{ fontSize: '.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '.08em', margin: '.75rem 0 .35rem', borderTop: '1px solid #1e2533', paddingTop: '.6rem' }}>Halmazelméleti jelölések</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>{setRows.map(renderRow)}</tbody>
          </table>
        </div>
        <div style={{ fontSize: '.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '.08em', margin: '.75rem 0 .35rem', borderTop: '1px solid #1e2533', paddingTop: '.6rem' }}>Aszimptotikus és egyéb</div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>{asymRows.map(renderRow)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 3: Sakktábla ════ */
function ChessTab() {
  const [sq, setSq] = useState(1);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const grain = BigInt(1) << BigInt(Math.max(0, sq - 1));
  const total = (BigInt(1) << BigInt(sq)) - BigInt(1);

  function fmtBig(b: bigint): string {
    const s = b.toString();
    if (s.length <= 6) return s.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    const exp = s.length - 1;
    const mantissa = (s[0] + '.' + s.slice(1, 4)).replace(/\.?0+$/, '');
    return `${mantissa} × 10^${exp}`;
  }

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0d0e14'; ctx.fillRect(0, 0, W, H);
    const maxExp = 63;
    for (let i = 1; i <= sq; i++) {
      const x = (i / 64) * W * 0.9 + W * 0.05;
      const y = H - 20 - ((i - 1) / maxExp) * (H - 40);
      if (i > 1) {
        const px = ((i - 1) / 64) * W * 0.9 + W * 0.05;
        const py = H - 20 - ((i - 2) / maxExp) * (H - 40);
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(x, y);
        ctx.strokeStyle = '#10b981'; ctx.lineWidth = 2; ctx.stroke();
      }
      ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#34d399'; ctx.fill();
    }
    ctx.fillStyle = '#64748b'; ctx.font = '11px monospace'; ctx.textAlign = 'left';
    ctx.fillText('Exponenciális növekedés (log-lineáris skálán)', 8, H - 4);
  }, [sq]);

  // Build chess grid cells
  const cells: { n: number; isLight: boolean; isActive: boolean }[] = [];
  for (let i = 1; i <= 64; i++) {
    const row = Math.floor((i - 1) / 8), col = (i - 1) % 8;
    cells.push({ n: i, isLight: (row + col) % 2 === 0, isActive: i <= sq });
  }

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '280px' }}>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>A sakktábla-legenda</span>
          <RichTex className="def-box" html={String.raw`A sakk feltalálója minden \(n\)-edik mezőre az előző mező kétszeresét kérte búzában.
            Az 1. mezőre 1 szemet, a 2.-ra 2-t, …, a 64.-re \(2^{63}\) szemet. Összesen:
            \[S = 2^{64}-1 = 18\,446\,744\,073\,709\,551\,615\]`} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', margin: '.5rem 0', fontSize: '.82rem' }}>
            <span style={{ color: '#94a3b8', whiteSpace: 'nowrap' }}>Mező:</span>
            <input type="range" min={1} max={64} value={sq} style={{ flex: 1 }} onChange={e => setSq(+e.target.value)} />
            <span style={{ fontFamily: 'monospace', color: ACC, minWidth: '2rem' }}>{sq}</span>
          </div>
          <div id="chess-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 32px)', gap: '2px', margin: '.5rem 0' }}>
            {cells.map(c => (
              <div key={c.n} style={{
                width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '.6rem', fontFamily: 'monospace', borderRadius: 3,
                background: c.isActive ? ACC : c.isLight ? '#2d3748' : '#1e2533',
                color: c.isActive ? '#000' : '#64748b', fontWeight: c.isActive ? 700 : 400,
              }}>{c.n === sq ? sq : ''}</div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem', marginTop: '.5rem' }}>
            <div className="def-box" style={{ padding: '.7rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>Ezen a mezőn</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC, fontFamily: 'monospace' }}>{fmtBig(grain)}</div>
            </div>
            <div className="def-box" style={{ padding: '.7rem', textAlign: 'center' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>Összes eddig</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: ACC, fontFamily: 'monospace' }}>{fmtBig(total)}</div>
            </div>
          </div>
          <div className="def-box" style={{ marginTop: '.5rem', fontSize: '.78rem', color: '#94a3b8', lineHeight: 1.8 }}>
            🌾 <strong style={{ color: '#c4cdd8' }}>≈ 1,2 × 10¹² m³</strong> búza (64 mező esetén)<br />
            🌍 A világ éves búzatermése <strong style={{ color: '#c4cdd8' }}>≈ 780 × 10⁶ m³</strong><br />
            📐 Ez <strong style={{ color: '#fcd34d' }}>≈ 1540 évnyi</strong> világ-búzatermés
          </div>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <div className="info-box" style={{ marginBottom: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>A kétszereződés hatalma</span>
          <canvas ref={canvasRef} width={320} height={220} style={{ width: '100%', borderRadius: '.3rem', background: '#0d0e14', display: 'block' }} />
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>Összehasonlítások \(2^n\)-re</span>
          <RichTex html={String.raw`<table style="width:100%;font-size:.82rem;border-collapse:collapse">
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{10}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">1 024 ≈ ezer</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{20}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">1 048 576 ≈ millió</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{30}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">≈ milliárd (1 GB bit)</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{40}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">≈ billió (1 TB bit)</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{53}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">IEEE 754 double mantissza határ</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{64}\)</td><td style="color:#fcd34d;padding:.3rem .5rem">≈ 1,84 × 10¹⁹ (sakktábla total)</td></tr>
<tr><td style="color:#64748b;padding:.3rem .5rem">\(2^{80}\)</td><td style="color:#c4cdd8;padding:.3rem .5rem">≈ Föld atomjainak száma</td></tr>
</table>`} />
        </div>
      </div>
    </div>
  );
}

/* ════ Tab 4: Egészrészek ════ */
function EgeszrTab() {
  const [xVal, setXVal] = useState(3.7);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fl = Math.floor(xVal), ce = Math.ceil(xVal);

  useEffect(() => {
    const cv = canvasRef.current; if (!cv) return;
    const ctx = cv.getContext('2d'); if (!ctx) return;
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#0d0e14'; ctx.fillRect(0, 0, W, H);
    const range = Math.max(4, Math.abs(xVal) + 2);
    const lo = Math.floor(xVal - range / 2), hi = Math.ceil(xVal + range / 2);
    const toX = (v: number) => 20 + (v - lo) / (hi - lo) * (W - 40);
    const midY = H / 2;
    ctx.beginPath(); ctx.moveTo(10, midY); ctx.lineTo(W - 10, midY);
    ctx.strokeStyle = '#334155'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#475569'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
    for (let i = lo; i <= hi; i++) {
      const tx = toX(i);
      ctx.beginPath(); ctx.moveTo(tx, midY - 5); ctx.lineTo(tx, midY + 5);
      ctx.strokeStyle = '#334155'; ctx.lineWidth = 1; ctx.stroke();
      ctx.fillText(String(i), tx, midY + 18);
    }
    const flX = toX(fl);
    ctx.beginPath(); ctx.arc(flX, midY, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981'; ctx.fill();
    ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif'; ctx.textAlign = 'center';
    ctx.fillText('⌊⌋', flX, midY + 3);
    if (ce !== fl) {
      const ceX = toX(ce);
      ctx.beginPath(); ctx.arc(ceX, midY, 7, 0, Math.PI * 2);
      ctx.fillStyle = '#38bdf8'; ctx.fill();
      ctx.fillStyle = '#000'; ctx.font = 'bold 9px sans-serif';
      ctx.fillText('⌈⌉', ceX, midY + 3);
    }
    const xX = toX(xVal);
    ctx.beginPath(); ctx.moveTo(xX, midY - 18); ctx.lineTo(xX, midY + 18);
    ctx.strokeStyle = '#f59e0b'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#fcd34d'; ctx.font = '11px monospace'; ctx.textAlign = 'center';
    ctx.fillText('x=' + xVal, xX, midY - 22);
  }, [xVal, fl, ce]);

  const quickVals = [3.7, -1.3, 5, -3, 0.5, -0.5, 2.9999, -2.0001];

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <div className="def-box">
          <strong>Alsó egészrész:</strong> {String.raw`\(\lfloor x\rfloor := \max\{n\in\mathbb{Z}: n\leq x\}\)`}<br />
          a legnagyobb nem-nagyobb egész \(x\)-nél.
        </div>
        <div className="def-box">
          <strong>Felső egészrész:</strong> {String.raw`\(\lceil x\rceil := \min\{n\in\mathbb{Z}: n\geq x\}\)`}<br />
          a legkisebb nem-kisebb egész \(x\)-nél.
        </div>
        <RichTex className="thm-box" html={String.raw`<strong>Tulajdonságok:</strong><br>
\(\lfloor x\rfloor \leq x < \lfloor x\rfloor+1\)<br>
\(\lceil x\rceil-1 < x \leq \lceil x\rceil\)<br>
\(\lfloor x\rfloor + \lceil -x\rceil = 0\)<br>
\(\lfloor n/2\rfloor + \lceil n/2\rceil = n\) (egész \(n\)-re)`} />
        <div className="info-box" style={{ marginTop: '.75rem' }}>
          <span className="lbl" style={{ color: ACC }}>Interaktív egészrész-számító</span>
          <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center', margin: '.5rem 0', fontSize: '.82rem' }}>
            <span style={{ color: '#94a3b8' }}>x =</span>
            <input type="number" className="ila-num" value={xVal} step={0.1}
              onChange={e => { const v = parseFloat(e.target.value); if (!isNaN(v)) setXVal(v); }} style={{ width: '7rem' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.5rem', marginBottom: '.5rem' }}>
            <div className="def-box" style={{ textAlign: 'center', padding: '.6rem' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b' }}>⌊x⌋</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: ACC }}>{fl}</div>
            </div>
            <div className="def-box" style={{ textAlign: 'center', padding: '.6rem' }}>
              <div style={{ fontSize: '.72rem', color: '#64748b' }}>⌈x⌉</div>
              <div style={{ fontSize: '1.3rem', fontWeight: 700, color: '#38bdf8' }}>{ce}</div>
            </div>
          </div>
          <canvas ref={canvasRef} width={400} height={80} style={{ width: '100%', background: '#0d0e14', borderRadius: '.3rem' }} />
          <div style={{ marginTop: '.5rem', display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
            {quickVals.map(v => (
              <button key={v} className="op-btn" style={{ fontSize: '.75rem' }} onClick={() => setXVal(v)}>{v}</button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ flex: '1', minWidth: '260px' }}>
        <RichTex className="info-box" html={String.raw`<span class="lbl" style="color:#10b981">Alkalmazások</span>
<table style="width:100%;border-collapse:collapse;font-size:.82rem;margin-top:.5rem">
<thead><tr>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;font-size:.73rem;border-bottom:1px solid #1e2533">Kifejezés</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;font-size:.73rem;border-bottom:1px solid #1e2533">Jelentés</th>
<th style="background:#1a1f2e;color:#64748b;padding:.4rem .5rem;text-align:left;font-size:.73rem;border-bottom:1px solid #1e2533">Pl. n=7</th>
</tr></thead>
<tbody>
<tr><td style="padding:.35rem .5rem">\(\lfloor n/2 \rfloor\)</td><td style="padding:.35rem .5rem">n egészrész-fele (lefelé)</td><td style="padding:.35rem .5rem">3</td></tr>
<tr><td style="padding:.35rem .5rem">\(\lceil n/2 \rceil\)</td><td style="padding:.35rem .5rem">n egészrész-fele (felfelé)</td><td style="padding:.35rem .5rem">4</td></tr>
<tr><td style="padding:.35rem .5rem">\(\lfloor \log_2 n \rfloor\)</td><td style="padding:.35rem .5rem">Bináris fa mélysége</td><td style="padding:.35rem .5rem">2</td></tr>
<tr><td style="padding:.35rem .5rem">\(\lceil \log_2 n \rceil\)</td><td style="padding:.35rem .5rem">Szükséges bitek száma</td><td style="padding:.35rem .5rem">3</td></tr>
<tr><td style="padding:.35rem .5rem">\(\lfloor \sqrt{n} \rfloor\)</td><td style="padding:.35rem .5rem">Egész négyzetgyök</td><td style="padding:.35rem .5rem">2</td></tr>
</tbody></table>`} />
        <RichTex className="info-box" style={{ marginTop: '.75rem' }} html={String.raw`<span class="lbl" style="color:#10b981">Nagy-O és aszimptotika</span>
<div class="def-box" style="font-size:.82rem;margin-top:.5rem">
  \(g = \mathcal{O}(f)\) ha \(\exists C>0, n_0\) hogy minden \(n\geq n_0\)-ra:<br>
  \(g(n) \leq C \cdot f(n)\)
</div>
<div class="def-box" style="font-size:.82rem">
  \(f \sim g\) (aszimptotikusan egyenlő) ha \(\lim_{x\to\infty}\dfrac{f(x)}{g(x)} = 1\)
</div>
<div class="ex-box" style="font-size:.82rem">
  <strong>Stirling-formula:</strong>
  \[n! \;\sim\; \sqrt{2\pi n}\left(\frac{n}{e}\right)^n\]
  pl. \(10! = 3\,628\,800\), Stirling: \(\approx 3\,598\,696\) (hiba &lt;1%)
</div>`} />
      </div>
    </div>
  );
}

/* ════ Tab 5: Halmazjelölések (interaktív kalkulátor) ════ */
const CHIP_K_COLORS = ['#475569', '#7dd3fc', '#34d399', '#fcd34d', '#c4b5fd'];
const CHIP_K_BORDERS = ['#475569', '#38bdf8', '#10b981', '#f59e0b', '#a78bfa'];

function powerSet(A: string[]): string[][] {
  const res: string[][] = [[]];
  for (const e of A) {
    const len = res.length;
    for (let i = 0; i < len; i++) res.push([...res[i], e]);
  }
  return res;
}

function HalmazTab() {
  const [input, setInput] = useState('a,b,c');
  const A = [...new Set(input.split(',').map(s => s.trim()).filter(Boolean))];
  const n = A.length;
  const ps = n <= 5 ? powerSet(A) : [];

  const words: string[] = ['ε'];
  for (const a of A) words.push(a);
  if (A.length <= 3) {
    for (const a of A) for (const b of A) words.push(a + b);
    if (words.length < 25) for (const a of A) for (const b of A) for (const c of A) words.push(a + b + c);
  }
  const wordSlice = words.slice(0, 30);

  const cartPairs: string[] = [];
  if (n <= 5) for (const a of A) for (const b of A) cartPairs.push(`(${a},${b})`);

  return (
    <div>
      <div className="info-box" style={{ marginBottom: '.75rem' }}>
        <span className="lbl" style={{ color: ACC }}>Interaktív halmaz-kalkulátor</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap', margin: '.5rem 0', fontSize: '.82rem' }}>
          <span style={{ color: '#94a3b8' }}>A = {`{`}</span>
          <input className="ila-text" value={input} placeholder="a,b,c" style={{ width: '10rem' }} onChange={e => setInput(e.target.value)} />
          <span style={{ color: '#94a3b8' }}>{`}`}</span>
          {[['n=2', 'a,b'], ['n=3', 'a,b,c'], ['n=4', '0,1,2,3']].map(([lbl, val]) => (
            <button key={lbl} className="op-btn" style={{ fontSize: '.75rem' }} onClick={() => setInput(val)}>{lbl}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '.5rem', marginBottom: '.75rem' }}>
          <div className="def-box" style={{ padding: '.7rem' }}>
            <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>|A| számossága</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>{n}</div>
            <div style={{ fontSize: '.75rem', color: '#64748b' }}>|𝒫(A)| = <span style={{ color: ACC }}>{Math.pow(2, n)}</span></div>
          </div>
          <div className="def-box" style={{ padding: '.7rem' }}>
            <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>|A²| (Descartes-négyzet)</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>{n * n}</div>
            <div style={{ fontSize: '.75rem', color: '#64748b' }}>= |A|²</div>
          </div>
          <div className="def-box" style={{ padding: '.7rem' }}>
            <div style={{ fontSize: '.72rem', color: '#64748b', textTransform: 'uppercase' }}>|A*| első szavak</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: ACC }}>∞</div>
            <div style={{ fontSize: '.75rem', color: '#64748b' }}>A*=∪Aⁱ (végtelen)</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '.75rem' }}>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>𝒫(A) — hatványhalmaz</span>
          <p style={{ fontSize: '.78rem', color: '#64748b', margin: '.4rem 0' }}>
            Színek:{' '}
            {CHIP_K_COLORS.map((c, k) => <span key={k} style={{ color: c, marginRight: '.5rem' }}>k={k}</span>)}
          </p>
          {n > 5 ? (
            <div className="thm-box" style={{ fontSize: '.8rem' }}>A halmaz túl nagy a teljes megjelenítéshez (max 5 elem).</div>
          ) : (
            <div style={{ lineHeight: 2 }}>
              {ps.map((sub, i) => {
                const k = Math.min(sub.length, CHIP_K_COLORS.length - 1);
                const lbl = sub.length === 0 ? '∅' : `{${sub.join(',')}}`;
                return (
                  <span key={i} style={{ display: 'inline-block', padding: '.1rem .4rem', borderRadius: '4px', fontSize: '.78rem', fontFamily: 'monospace', margin: '.1rem', background: '#1a2035', color: CHIP_K_COLORS[k], border: `1px solid ${CHIP_K_BORDERS[k]}` }}>{lbl}</span>
                );
              })}
            </div>
          )}
        </div>
        <div className="info-box">
          <span className="lbl" style={{ color: ACC }}>[A]^k = P_k(A) — k-elemű részhalmazok</span>
          {Array.from({ length: Math.min(n, 4) + 1 }, (_, k) => {
            const subs = n <= 5 ? ps.filter(s => s.length === k) : [];
            const k2 = Math.min(k, CHIP_K_COLORS.length - 1);
            return (
              <div key={k} style={{ marginBottom: '.5rem' }}>
                <span style={{ color: ACC, fontSize: '.78rem', fontWeight: 600 }}>[A]^{k}</span>{' '}
                <span style={{ color: '#64748b', fontSize: '.72rem' }}>({n <= 5 ? subs.length : '?'} db)</span>
                <div>
                  {subs.map((s, i) => (
                    <span key={i} style={{ display: 'inline-block', padding: '.1rem .4rem', borderRadius: '4px', fontSize: '.78rem', fontFamily: 'monospace', margin: '.1rem', background: '#1a2035', color: CHIP_K_COLORS[k2], border: `1px solid ${CHIP_K_BORDERS[k2]}` }}>
                      {s.length === 0 ? '∅' : `{${s.join(',')}}`}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
          <hr style={{ borderColor: '#1e2533', margin: '.75rem 0' }} />
          <span className="lbl" style={{ color: ACC }}>A* — véges szavak (első néhány)</span>
          <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#94a3b8', lineHeight: 2, marginTop: '.3rem' }}>
            {wordSlice.map((w, i) => (
              <span key={i} style={{ display: 'inline-block', padding: '.1rem .4rem', borderRadius: '4px', fontSize: '.78rem', fontFamily: 'monospace', margin: '.1rem', background: '#1a2035', color: '#94a3b8', border: '1px solid #2d3748' }}>{w}</span>
            ))}
            {words.length >= 30 && <span style={{ display: 'inline-block', padding: '.1rem .4rem', borderRadius: '4px', fontSize: '.78rem', fontFamily: 'monospace', margin: '.1rem', background: '#1a2035', color: '#475569', border: '1px solid #2d3748' }}>…</span>}
          </div>
        </div>
      </div>
      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: ACC }}>A² = A×A — Descartes-szorzat (rendezett párok)</span>
        <div style={{ fontFamily: 'monospace', fontSize: '.8rem', color: '#94a3b8', lineHeight: 2.2, wordBreak: 'break-all', marginTop: '.3rem' }}>
          {n <= 5 ? cartPairs.map((p, i) => (
            <span key={i} style={{ display: 'inline-block', padding: '.1rem .4rem', borderRadius: '4px', fontSize: '.78rem', fontFamily: 'monospace', margin: '.1rem', background: '#1a2035', color: '#7dd3fc', border: '1px solid #38bdf8' }}>{p}</span>
          )) : <span style={{ color: '#64748b', fontSize: '.8rem' }}>Túl sok elem a megjelenítéshez.</span>}
        </div>
      </div>
    </div>
  );
}

/* ════ TABS ════ */
const TABS: Tab[] = [
  { id: 'intro', label: 'Bevezetés', content: <RichTex html={t1} /> },
  { id: 'jelol', label: 'Jelölések', content: <JelolTab /> },
  { id: 'sakk', label: 'Sakktábla-paradoxon', content: <ChessTab /> },
  { id: 'egeszr', label: 'Egészrészek', content: <EgeszrTab /> },
  { id: 'halmaz', label: 'Halmazjelölések', content: <HalmazTab /> },
];

export default function DimatCh0() {
  return (
    <div className="ila">
      <Link to="/dimat" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Diszkrét matematika — 0. fejezet</p>
      <h1 className="ila__title">Bevezetés — A diszkrét matematika fogalma · Általános jelölések</h1>
      <p className="ila__cite">Dr. Szalkai István · Pannon Egyetem Matematika Tanszék · 2026</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
