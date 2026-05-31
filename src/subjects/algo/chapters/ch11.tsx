import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* Seeded LCG for reproducible "random" numbers in simulation */
function lcg(seed: number): () => number {
  let s = seed;
  return () => { s = (s * 1664525 + 1013904223) & 0x7fffffff; return s; };
}

/* ════ Feige–Fiat–Shamir Round Simulator ════ */

// Small prime m for simulation: m = 11 * 13 = 143
const M_SIM = 143n;
const P_SIM = 11n;
// Q_SIM = 13 — implicit: we know factors for simulation only

// Hardcoded r values (secrets) for k=4: r₁=2, r₂=3, r₃=5, r₄=7
const R_SIM = [2n, 3n, 5n, 7n];
const S_SIM = R_SIM.map(r => (r * r) % M_SIM); // public squares

interface Round {
  v: bigint;
  w: bigint;       // w = v² mod m
  e: number[];     // challenge bits
  b: bigint;       // response
  check: boolean;
  cheated: boolean;
}

function FfsSimulator() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [cheat, setCheat] = useState(false);
  const [seed, setSeed] = useState(42);
  const k = R_SIM.length;

  function runRound() {
    const rand = lcg(seed + rounds.length * 37);

    if (!cheat) {
      // Honest prover: pick random v ∈ [1, m-1]
      const v = BigInt((rand() % 140) + 2);
      const w = (v * v) % M_SIM;
      const e = Array.from({ length: k }, () => rand() % 2);
      // b = v * prod(r_i^e_i) mod m
      let b = v;
      for (let i = 0; i < k; i++) {
        if (e[i] === 1) b = (b * R_SIM[i]) % M_SIM;
      }
      // verify: b² == w * prod(s_i^e_i) mod m
      let rhs = w;
      for (let i = 0; i < k; i++) {
        if (e[i] === 1) rhs = (rhs * S_SIM[i]) % M_SIM;
      }
      rhs = rhs % M_SIM;
      const b2 = (b * b) % M_SIM;
      setRounds(prev => [...prev, { v, w, e, b, check: b2 === rhs, cheated: false }]);
    } else {
      // Cheating prover: doesn't know r_i, tries to guess b for random e
      // Strategy: pick random b, compute w = b² * prod(s_i^-e_i) — works only if e guessed right
      const guessedE = Array.from({ length: k }, () => rand() % 2);
      const actualE  = Array.from({ length: k }, () => rand() % 2);
      const bGuess = BigInt((rand() % 140) + 2);
      const vForCalc = BigInt((rand() % 140) + 2);
      const w = (vForCalc * vForCalc) % M_SIM;
      // cheater uses guessedE to prepare, but verifier uses actualE
      let b = bGuess;
      let rhs = w;
      for (let i = 0; i < k; i++) {
        if (actualE[i] === 1) rhs = (rhs * S_SIM[i]) % M_SIM;
      }
      rhs = rhs % M_SIM;
      const b2 = (b * b) % M_SIM;
      // only passes if guessedE === actualE (prob 1/2^k per round)
      const eMatch = guessedE.every((g, i) => g === actualE[i]);
      if (eMatch) {
        // re-derive correct b for guessedE
        b = bGuess;
        for (let i = 0; i < k; i++) {
          if (guessedE[i] === 1) b = (b * R_SIM[i]) % M_SIM;
        }
      }
      const bFinal2 = (b * b) % M_SIM;
      let rhsFinal = w;
      for (let i = 0; i < k; i++) {
        if (actualE[i] === 1) rhsFinal = (rhsFinal * S_SIM[i]) % M_SIM;
      }
      rhsFinal = rhsFinal % M_SIM;
      setRounds(prev => [...prev, { v: vForCalc, w, e: actualE, b, check: bFinal2 === rhsFinal, cheated: true }]);
    }
    setSeed(s => s + 1);
  }

  function reset() { setRounds([]); setSeed(42); }

  const passed = rounds.filter(r => r.check).length;
  const total = rounds.length;
  const fraudRate = total > 0 ? (rounds.filter(r => r.cheated && r.check).length / rounds.filter(r => r.cheated).length || 0) : 0;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#34d399' }}>Feige–Fiat–Shamir — Kör-szimulátor</span>
      <div style={{ fontSize: '.8rem', color: '#8892a4', margin: '.3rem 0 .5rem' }}>
        Paraméterek: m = {M_SIM.toString()} = 11·13, k = {k} titkos szám<br />
        Titkok (r): ({R_SIM.map(r => r.toString()).join(', ')}) &nbsp;|&nbsp;
        Nyilvános négyzetek (s): ({S_SIM.map(s => s.toString()).join(', ')})
      </div>
      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.5rem', alignItems: 'center' }}>
        <button className="ex-btn is-active" onClick={runRound}>Kör futtatása</button>
        <button className="ex-btn" onClick={reset}>Alaphelyzetbe</button>
        <label style={{ fontSize: '.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
          <input type="checkbox" checked={cheat} onChange={e => setCheat(e.target.checked)} />
          Csaló mód (r ismerete nélkül)
        </label>
      </div>
      {rounds.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ fontSize: '.76rem', fontFamily: 'monospace', minWidth: 500 }}>
            <thead>
              <tr>
                <th>#</th>
                <th>v</th>
                <th>w=v²</th>
                <th>kihívás e</th>
                <th>válasz b</th>
                <th>b²</th>
                <th>w·∏sᵢᵉⁱ</th>
                <th>eredmény</th>
              </tr>
            </thead>
            <tbody>
              {rounds.map((r, i) => {
                let rhs = r.w;
                for (let j = 0; j < k; j++) if (r.e[j] === 1) rhs = (rhs * S_SIM[j]) % M_SIM;
                const b2 = (r.b * r.b) % M_SIM;
                return (
                  <tr key={i} style={r.cheated ? { background: 'rgba(248,113,113,.06)' } : undefined}>
                    <td style={{ color: '#8892a4' }}>{i + 1}</td>
                    <td>{r.v.toString()}</td>
                    <td>{r.w.toString()}</td>
                    <td>({r.e.join(',')})</td>
                    <td style={{ color: '#60a5fa' }}>{r.b.toString()}</td>
                    <td>{b2.toString()}</td>
                    <td>{rhs.toString()}</td>
                    <td style={{ color: r.check ? '#34d399' : '#f87171', fontWeight: 700 }}>
                      {r.check ? '✓ ÁTMENT' : '✗ BUKOTT'}{r.cheated ? ' 🎲' : ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      {total > 0 && (
        <div style={{ fontFamily: 'monospace', fontSize: '.82rem', marginTop: '.5rem', lineHeight: 1.9 }}>
          <div>Összes kör: {total} &nbsp;|&nbsp; Átment: <strong style={{ color: '#34d399' }}>{passed}</strong> &nbsp;|&nbsp; Elbukott: <strong style={{ color: '#f87171' }}>{total - passed}</strong></div>
          {rounds.some(r => r.cheated) && (
            <div>Csaló körök sikerességi arány: <strong style={{ color: '#fbbf24' }}>
              {(fraudRate * 100).toFixed(1)}%
            </strong> (várható: ~{(100 / Math.pow(2, k)).toFixed(1)}%)</div>
          )}
          <div>Becsült csalási esély {total} kör után: <strong style={{ color: '#a78bfa' }}>
            {(Math.pow(0.5, total) * 100).toFixed(6)}%
          </strong></div>
        </div>
      )}
    </div>
  );
}

/* ════ Static theory ════ */
const tIntro = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">11. fejezet — Bizonyítás nulla információval</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Zero-Knowledge Proof (ZKP)</span>
  <div class="box-body">
    Paradoxnak tűnő, de mély eredmény: a Válaszadó (V, <em>Prover</em>) be tudja bizonyítani
    a Kérdezőnek (K, <em>Verifier</em>), hogy birtokában van egy titoknak, <strong>anélkül</strong>,
    hogy a titok bármely részét is felfedné — még a beszélgetés végén sem.
    <br><br>
    <strong>Goldwasser, Micali, Rackoff 1985:</strong> a ZKP fogalmának első formális definíciója
    (CRYPTO konferencia). Három tulajdonság:
    <ul style="margin:.4rem 0 0;">
      <li><strong>Completeness</strong> — ha V tényleg ismeri a titkot, K elfogadja.</li>
      <li><strong>Soundness</strong> — ha V <em>nem</em> ismeri, \(\varepsilon\) esélynél nagyobb arányban K nem fogadja el.</li>
      <li><strong>Zero-knowledge</strong> — K <em>semmit</em> nem tanul meg a titokról a párbeszéd alatt.</li>
    </ul>
    Az alábbi algoritmus a Csirmaz László (BME, Matematikai Intézet) által ismertetett változat (1992).
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Miért fontos?</span>
  <div class="box-body">
    <ul style="line-height:2;margin:.3rem 0">
      <li><strong>Belépés/azonosítás</strong> jelszó leütése nélkül — szervernek sem mutatjuk meg.</li>
      <li><strong>Banki tranzakciók</strong> hitelkártya-szám megosztása nélkül.</li>
      <li><strong>Blockchain</strong> zk-SNARK / zk-STARK technológia: titkos tranzakciók (Zcash, Tornado Cash).</li>
      <li><strong>Cryptographic voting</strong> — bizonyítható korrekt szavazatszámlálás, de a szavazat marad titok.</li>
    </ul>
  </div>
</div>`;

const tProtocol = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">11.1 Algoritmus — Feige–Fiat–Shamir (1988)</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Előkészítés (egyszer, titokban)</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>V választ egy nagy összetett \(m\)-et — pl. \(m = pq\) két prím szorzata, \(p, q\) titok.</li>
      <li>V választ titkos PIN-kódot: \((r_1, r_2, \dots, r_k) \in \mathbb{Z}_m^*\), ahol \(k\) legalább pár tucat.</li>
      <li>Nyilvánosságra hozza a négyzeteket:
        \[s_i \equiv r_i^2 \pmod m, \quad i = 1, \dots, k.\]
      </li>
    </ol>
    V <em>nem</em> a PIN-kódot, hanem annak <em>négyzeteit</em> (\(s_i\)) hozza nyilvánosságra.
    Az inverz művelet — <strong>kvadratikus gyökvonás \(\pmod m\)</strong> — nagy \(m\)-re
    gyors algoritmus nélkül (\(\Leftrightarrow\) \(m\) faktorizálása).
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Egy bizonyítási kör (round)</span>
  <div class="box-body">
    <strong>0) V választ egy új \(v\)-t.</strong> Minden körben friss véletlen \(v \in \mathbb{Z}_m^*\), és átadja K-nak a négyzetét:
    \[w \equiv v^2 \pmod m\]
    <br>
    <strong>1) K kihívást küld.</strong>
    K véletlen kérdést küld \((e_1, e_2, \dots, e_k) \in \{0, 1\}^k\), kb. fele 0, fele 1.
    <br><br>
    <strong>2) V válaszol.</strong>
    V titokban kiszámolja és átadja:
    \[b \equiv v \cdot \prod_{i=1}^k r_i^{e_i} \pmod m\]
    Csak azokkal az \(r_i\)-kkal szoroz, ahol \(e_i = 1\). <em>\(v\) „elfedi" a többit.</em>
    <br><br>
    <strong>3) K ellenőrzése.</strong>
    K megnézi:
    \[b^2 \;\stackrel{?}{\equiv}\; w \cdot \prod_{i=1}^k s_i^{e_i} \pmod m\]
    (Igaz, mert \(b^2 = v^2 \prod r_i^{2 e_i} = w \prod s_i^{e_i}\).)
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    Ha V tényleg ismeri \((r_1, \dots, r_k)\)-t, mindig átmegy. <strong>Ha nem,</strong> egy
    kör csak \(\varepsilon &lt; 1\) valószínűséggel sikerül. (Mivel \(\mathbb{Z}_m^*\)-ban minden
    négyzetszámnak <em>pontosan két</em> négyzetgyöke van, csaló max. \(1/2\)-eséllyel találgathat.)
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Megerősítés — ismételd t-szer</span>
  <div class="box-body">
    Ha K nagyon biztos akar lenni, a köröket \(t\)-szer megismételi <strong>új \(v\)-vel</strong>
    minden alkalommal. Csalási esély: \(\varepsilon^t\), ami
    \[\varepsilon = \tfrac{1}{2}, \;t = 200 \;\Longrightarrow\; 2^{-200} &lt; 10^{-60}.\]
    \(t = 200\) kör a mai gépeken észre sem vehető, mégis \(10^{60}\)-szor ritkább eset,
    mint a Földön élő emberek számának (\(\sim 10^{10}\)) százszorosa. Gyakorlatilag 100% biztonság.
  </div>
</div>`;

const tSecurity = String.raw`
<h5 style="color:#34d399;font-weight:700;margin:0 0 .75rem">Biztonság és alkalmazások</h5>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Miért nem szimulálható?</span>
  <div class="box-body">
    Kérdés: a teljes párbeszédet (\(s_i, w, e_i, b\)) <em>bárki hallhatja</em>. Miért nem tudja egy
    harmadik fél (vagy K maga) később V-ként szerepelni?
    <br><br>
    Mert új körben K új \((e_i)\) kihívást fog küldeni — a megfelelő \(b'\) kiszámításához
    szükség van az \((r_i)\) titokra. <strong>Egy adott \((e_i)\)-re passzoló \(b\)</strong>
    kiszámolható (mert a beszélgetés alatt \(v\) már megválasztva), de <em>új</em> \((e_i)\)-re nem.
    <br><br>
    Formálisan: ha valaki tud új körben átmenni, akkor a \(\mathbb{Z}_m^*\)-ban kvadratikus
    gyököt tud vonni — ami ekvivalens \(m\) faktorizációjával. Tehát:
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    <strong>Tétel.</strong> Feige–Fiat–Shamir biztonsága \(\Leftrightarrow\) \(m\) faktorizálása nehéz.
    Ha valaki polinomidőben tudna faktorizálni, mind az RSA, mind ez a ZKP megdől.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Tulajdonságok ellenőrzése</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr><th>Tulajdonság</th><th>Bizonyítás</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>Completeness</strong></td>
        <td>\(b^2 = v^2 \prod r_i^{2 e_i} = w \prod s_i^{e_i}\) azonosság miatt mindig átmegy.</td>
      </tr>
      <tr>
        <td><strong>Soundness</strong></td>
        <td>\(t\) körön át \(2^{-t}\) a csalási esély (kvadratikus gyökvonás nehéz).</td>
      </tr>
      <tr>
        <td><strong>Zero-knowledge</strong></td>
        <td>K csak a véletlen kihívásokra látja a válaszokat. Mivel \((s_i)\) <em>nyilvános</em>
            és \((r_i)\) négyzetgyöke nem számolható ki, K maga sem többet — szimulátor program
            is képes ugyanezt a beszélgetést <em>\(r_i\) ismerete nélkül</em> előállítani.</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="info-box">
  <span class="lbl" style="color:#34d399">Modern alkalmazások</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr><th>Technológia</th><th>Felhasználás</th></tr></thead>
    <tbody>
      <tr>
        <td><strong>zk-SNARK</strong> (Groth 2010, Pinocchio 2013)</td>
        <td>Zcash kriptopénz, „shielded transactions"</td>
      </tr>
      <tr>
        <td><strong>zk-STARK</strong> (Ben-Sasson 2018)</td>
        <td>StarkWare, Ethereum L2 (StarkNet)</td>
      </tr>
      <tr>
        <td><strong>Bulletproofs</strong> (Bünz 2017)</td>
        <td>Monero range proofs (tranzakciós összegek elrejtése)</td>
      </tr>
      <tr>
        <td><strong>FIDO2 / WebAuthn</strong></td>
        <td>Jelszó nélküli bejelentkezés modern webhelyeken</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <div class="box-body">
    Az igazi áttörést a <em>nem-interaktív</em> ZKP (Fiat–Shamir heurisztika, 1986) adta —
    egyetlen üzenetben be lehet bizonyítani egy állítást. Erre épül minden mai blockchain-ZKP.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#34d399">Hivatkozások</span>
  <div class="box-body" style="font-size:.82rem;line-height:1.9">
    <ul>
      <li>Csirmaz László: <a href="http://www.math-inst.hu/~csirmaz/kript/mattan.html" style="color:#34d399">math-inst.hu/~csirmaz/kript/mattan.html</a></li>
      <li>Goldwasser–Micali–Rackoff: <em>The knowledge complexity of interactive proof systems</em>, SIAM J. Comput. 18 (1989), 186–208</li>
      <li>Feige–Fiat–Shamir: <em>Zero-knowledge proofs of identity</em>, J. Cryptology 1 (1988), 77–94</li>
    </ul>
  </div>
</div>`;

const TABS: Tab[] = [
  { id: 'intro',    label: 'Áttekintés',               content: <RichTex html={tIntro} /> },
  { id: 'protocol', label: 'Feige–Fiat–Shamir protokoll', content: <div><RichTex html={tProtocol} /><FfsSimulator /></div> },
  { id: 'security', label: 'Biztonság & alkalmazás',   content: <RichTex html={tSecurity} /> },
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

