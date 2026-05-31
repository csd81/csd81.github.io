import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Zero Knowledge Proof simulator
function ZKPSim() {
  const [rounds, setRounds] = useState(0);
  const [history, setHistory] = useState<{ w: number; e: number[]; b: number; check: boolean }[]>([]);
  const [knows, setKnows] = useState(true);
  const k = 5;
  const m = 7 * 11 * 13; // small composite for demo

  const runRound = () => {
    const v = Math.floor(Math.random() * (m - 1)) + 1;
    const w = (v * v) % m;
    const e = Array.from({ length: k }, () => Math.round(Math.random()));
    // If prover "knows" r_i, compute b = v * prod(r_i^{e_i})
    // For demo: use fixed r = [2,3,5,7,11] and s_i = r_i^2 mod m
    const rs = [2, 3, 5, 7, 11];
    const ss = rs.map((r) => (r * r) % m);
    let b: number;
    if (knows) {
      b = e.reduce((acc, ei, i) => (acc * (ei ? rs[i] : 1)) % m, v);
    } else {
      // Cheater: guess random b
      b = Math.floor(Math.random() * (m - 1)) + 1;
    }
    // Check: b^2 ≡ w * prod(s_i^{e_i}) mod m
    const rhs = e.reduce((acc, ei, i) => (acc * (ei ? ss[i] : 1)) % m, w);
    const lhs = (b * b) % m;
    const check = lhs === rhs % m;
    setHistory((h) => [...h.slice(-9), { w, e, b, check }]);
    setRounds((r) => r + 1);
  };

  const allPassed = history.length > 0 && history.every((r) => r.check);

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Feige–Fiat–Shamir ZKP szimulátor</span>
      <p style={{ fontSize: '.82rem', margin: '.4rem 0' }}>
        Kis modulus demo (m={m}, k={k} PIN-bit). Prover:
        &nbsp;
        <button className={`op-btn${knows ? ' is-active' : ''}`} onClick={() => { setKnows(true); setHistory([]); setRounds(0); }}>Tud</button>
        &nbsp;
        <button className={`op-btn${!knows ? ' is-active' : ''}`} onClick={() => { setKnows(false); setHistory([]); setRounds(0); }}>Nem tud (csaló)</button>
      </p>
      <button className="op-btn" onClick={runRound} style={{ marginBottom: '.5rem' }}>Új kör futtatása</button>
      <div style={{ fontFamily: 'monospace', fontSize: '.8rem', lineHeight: 1.8 }}>
        {history.map((r, i) => (
          <div key={i} style={{ color: r.check ? '#c9d1d9' : '#f87171' }}>
            Kör {rounds - history.length + i + 1}: w={r.w}, e=[{r.e.join(',')}], b={r.b}&nbsp;
            <strong style={{ color: r.check ? '#34d399' : '#ef4444' }}>{r.check ? '✓ megfelelt' : '✗ lebukott!'}</strong>
          </div>
        ))}
      </div>
      {history.length >= 5 && (
        <div className={allPassed && knows ? 'def-box' : allPassed && !knows ? 'warn-box' : 'warn-box'} style={{ marginTop: '.5rem', fontWeight: 700, fontSize: '.88rem' }}>
          {allPassed && knows ? `${history.length} kör, mind rendben — valószínűleg ismeri a titkot (${(100 * (1 - Math.pow(0.5, history.length))).toFixed(1)}% biztos)` :
            allPassed && !knows ? `FIGYELEM: a csaló ${history.length} körön is átcsúszott! (${Math.pow(0.5, history.length).toFixed(4)} valószínűségű véletlen szerencse)` :
              'Lebukott a csaló!'}
        </div>
      )}
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">11. fejezet — Bizonyítás nulla információval</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    <strong>Zero-Knowledge Proof (ZKP)</strong> — paradoxnak tűnő, de mély eredmény:
    a Válaszadó (V, <em>Prover</em>) be tudja bizonyítani a Kérdezőnek (K, <em>Verifier</em>),
    hogy birtokában van egy titoknak, <strong>anélkül</strong>, hogy a titok bármely részét felfedné.
  </p>
</div>
<div class="thm-box">
  <strong>Goldwasser, Micali, Rackoff 1985 — Három tulajdonság:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Completeness</strong> — ha V tényleg ismeri a titkot, K elfogadja.</li>
    <li><strong>Soundness</strong> — ha V <em>nem</em> ismeri, K legfeljebb \(\varepsilon\) eséllyel fogadja el.</li>
    <li><strong>Zero-knowledge</strong> — K semmit nem tanul meg a titokról a párbeszéd alatt.</li>
  </ul>
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><strong>Belépés/azonosítás</strong> jelszó leütése nélkül — szervernek sem mutatjuk meg.</li>
  <li><strong>Blockchain</strong> zk-SNARK / zk-STARK technológia: titkos tranzakciók (Zcash).</li>
  <li><strong>Cryptographic voting</strong> — bizonyítható korrekt szavazatszámlálás.</li>
</ul>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">11.1 Algoritmus — Feige–Fiat–Shamir (1988)</span>
  <strong>Előkészítés (egyszer, titokban):</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>V választ nagy összetett \(m = pq\) — \(p, q\) titok.</li>
    <li>V választ titkos PIN-kódot: \((r_1, \dots, r_k) \in \mathbb{Z}_m^*\).</li>
    <li>Nyilvánosságra hozza: \(s_i \equiv r_i^2 \pmod m,\ i = 1, \dots, k.\)</li>
  </ol>
</div>
<div class="info-box">
  <strong>Egy bizonyítási kör:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>V választ friss véletlen \(v \in \mathbb{Z}_m^*\), átadja \(w \equiv v^2 \pmod m.\)</li>
    <li>K küld véletlen \((e_1, \dots, e_k) \in \{0,1\}^k\).</li>
    <li>V visszaadja: \(b \equiv v \cdot \prod_{i: e_i=1} r_i \pmod m.\)</li>
    <li>K ellenőrzi: \(b^2 \equiv w \cdot \prod s_i^{e_i} \pmod m.\)</li>
  </ol>
  Ha V tényleg ismeri \((r_i)\)-ket, mindig átmegy. Csaló max. \(\tfrac{1}{2}\) eséllyel találgat.
</div>
<div class="thm-box">
  Ismételd \(t\)-szer: csalási esély \(\varepsilon^t\):
  \[\varepsilon = \tfrac{1}{2},\ t = 200 \;\Longrightarrow\; 2^{-200} &lt; 10^{-60}\]
  \(t=200\) kör a mai gépeken észre sem vehető — <strong>gyakorlatilag 100% biztonság</strong>.
</div>`;

const t3 = String.raw`
<div class="thm-box">
  <strong>Tulajdonságok összefoglalása:</strong>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Tulajdonság</th><th style="text-align:left">Bizonyítás</th></tr></thead>
    <tbody>
      <tr><td><strong>Completeness</strong></td><td>\(b^2 = v^2 \prod r_i^{2e_i} = w \prod s_i^{e_i}\) azonosság miatt mindig átmegy.</td></tr>
      <tr><td><strong>Soundness</strong></td><td>\(t\) körön át \(2^{-t}\) a csalási esély.</td></tr>
      <tr><td><strong>Zero-knowledge</strong></td><td>Szimulátor program ugyanezt a párbeszédet \(r_i\) ismerete nélkül elő tudja állítani.</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <strong>Tétel.</strong> Feige–Fiat–Shamir biztonsága \(\Leftrightarrow\) \(m\) faktorizálása nehéz.
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Technológia</th><th style="text-align:left">Felhasználás</th></tr></thead>
  <tbody>
    <tr><td><strong>zk-SNARK</strong> (Groth 2010)</td><td>Zcash kriptopénz, shielded transactions</td></tr>
    <tr><td><strong>zk-STARK</strong> (Ben-Sasson 2018)</td><td>StarkWare, Ethereum L2 (StarkNet)</td></tr>
    <tr><td><strong>Bulletproofs</strong> (Bünz 2017)</td><td>Monero range proofs</td></tr>
    <tr><td><strong>FIDO2 / WebAuthn</strong></td><td>Jelszó nélküli bejelentkezés</td></tr>
  </tbody>
</table>
<div class="thm-box">
  Az igazi áttörést a <em>nem-interaktív</em> ZKP (Fiat–Shamir heurisztika, 1986) adta —
  egyetlen üzenetben be lehet bizonyítani egy állítást. Erre épül minden mai blockchain-ZKP.
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'protocol', label: 'Feige–Fiat–Shamir', content: <RichTex html={t2} /> },
  { id: 'sim', label: 'ZKP szimulátor', content: <ZKPSim /> },
  { id: 'security', label: 'Biztonság & alkalmazás', content: <RichTex html={t3} /> },
];

export default function AlgoCh11() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 11. fejezet</p>
      <h1 className="ila__title">Bizonyítás nulla információval</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
