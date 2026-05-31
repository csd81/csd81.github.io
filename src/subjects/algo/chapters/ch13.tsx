import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Primitive roots table data ════ */
// [p, g] — smallest positive primitive root for primes up to ~300
const PRIM_ROOTS: [number, number][] = [
  [3,2],[5,2],[7,3],[11,2],[13,2],[17,3],[19,2],[23,5],[29,2],[31,3],
  [37,2],[41,6],[43,3],[47,5],[53,2],[59,2],[61,2],[67,2],[71,7],[73,5],
  [79,3],[83,2],[89,3],[97,5],[101,2],[103,5],[107,2],[109,6],[113,3],[127,3],
  [131,2],[137,3],[139,2],[149,2],[151,6],[157,5],[163,2],[167,5],[173,2],[179,2],
  [181,2],[191,19],[193,5],[197,2],[199,3],[211,2],[223,3],[227,2],[229,6],[233,3],
  [239,7],[241,7],[251,6],[257,3],[263,5],[269,2],[271,6],[277,5],[281,3],[283,3],
  [293,2],
];

/* ════ Discrete log table for p=23, g=5 ════ */
function buildDlog(p: number, g: number): Map<number, number> {
  const map = new Map<number, number>();
  let cur = 1;
  for (let k = 0; k < p - 1; k++) {
    map.set(cur, k);
    cur = (cur * g) % p;
  }
  return map;
}

/* ════ Interactive discrete log finder ════ */
function DlogFinder() {
  const [p, setP] = useState(23);
  const [gInput, setGInput] = useState(5);
  const [xInput, setXInput] = useState(7);

  // Check if gInput is a primitive root mod p
  function isPrimRoot(g: number, prime: number): boolean {
    if (prime <= 1) return false;
    const order = prime - 1;
    let cur = 1;
    for (let k = 1; k <= order; k++) {
      cur = (cur * g) % prime;
      if (cur === 1 && k < order) return false;
    }
    return cur === 1;
  }

  const validPrime = p >= 3 && p <= 100;
  const validRoot = validPrime && isPrimRoot(gInput, p);

  // Build powers table: k -> g^k mod p
  const powers: number[] = [];
  if (validRoot) {
    let cur = 1;
    for (let k = 0; k < p - 1; k++) {
      powers.push(cur);
      cur = (cur * gInput) % p;
    }
  }

  const dlogX = validRoot ? powers.indexOf(((xInput % p) + p) % p) : -1;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Interaktív diszkrét logaritmus</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>p = <input type="number" className="ila-num" min={3} max={100} value={p} onChange={ev => setP(+ev.target.value)} /></span>
        <span>g = <input type="number" className="ila-num" min={2} max={p - 1} value={gInput} onChange={ev => setGInput(+ev.target.value)} /></span>
        <span>x = <input type="number" className="ila-num" min={1} max={p - 1} value={xInput} onChange={ev => setXInput(+ev.target.value)} /></span>
        {!validPrime && <span style={{ color: '#f87171', fontSize: '.75rem' }}>p legyen prím 3–100 közt!</span>}
        {validPrime && !validRoot && <span style={{ color: '#f87171', fontSize: '.75rem' }}>g nem primitív gyök mod p!</span>}
        {validRoot && <span style={{ color: '#34d399', fontSize: '.75rem' }}>g = {gInput} primitív gyök mod {p} ✓</span>}
      </div>
      {validRoot && (
        <div>
          <div style={{ fontFamily: 'monospace', fontSize: '.82rem', color: '#c9d1d9', marginBottom: '.5rem', lineHeight: 1.9 }}>
            log<sub>{gInput}</sub>({xInput}) mod {p} = <strong style={{ color: '#fbbf24', fontSize: '1rem' }}>
              {dlogX >= 0 ? dlogX : '—'}
            </strong>
            {dlogX >= 0 ? <span style={{ color: '#34d399' }}> &nbsp; ({gInput}<sup>{dlogX}</sup> ≡ {xInput} mod {p} ✓)</span> : ''}
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="cayley" style={{ fontSize: '.75rem', fontFamily: 'monospace' }}>
              <thead>
                <tr>
                  {Array.from({ length: Math.min(11, p) }, (_, i) => <th key={i}>k={i}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {powers.slice(0, Math.min(11, p)).map((v, i) => (
                    <td key={i} style={{ color: v === ((xInput % p + p) % p) ? '#fbbf24' : '#c9d1d9', fontWeight: v === ((xInput % p + p) % p) ? 700 : 400 }}>{v}</td>
                  ))}
                </tr>
                {powers.length > 11 && (
                  <tr>
                    {powers.slice(11, Math.min(22, p)).map((v, i) => (
                      <td key={i} style={{ color: v === ((xInput % p + p) % p) ? '#fbbf24' : '#c9d1d9', fontWeight: v === ((xInput % p + p) % p) ? 700 : 400 }}>{v}</td>
                    ))}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

/* ════ Primitive roots table widget ════ */
function PrimRootsTable() {
  const cols = 4;
  const rows: [number, number][][] = [];
  for (let i = 0; i < PRIM_ROOTS.length; i += cols) {
    rows.push(PRIM_ROOTS.slice(i, i + cols) as [number, number][]);
  }
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#a78bfa' }}>Primitív gyökök — legkisebb g értékek (p ≤ 293)</span>
      <table className="cayley" style={{ fontSize: '.78rem', fontFamily: 'monospace', marginTop: '.4rem' }}>
        <thead>
          <tr>
            {Array.from({ length: cols }, (_, i) => (
              <>
                <th key={`p${i}`} style={{ color: '#a78bfa' }}>p</th>
                <th key={`g${i}`} style={{ color: '#fbbf24' }}>g</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map(([pp, gg], ci) => (
                <>
                  <td key={`p${ci}`} style={{ color: '#c9d1d9' }}>{pp}</td>
                  <td key={`g${ci}`} style={{ color: '#fbbf24', fontWeight: 700 }}>{gg}</td>
                </>
              ))}
              {row.length < cols && Array.from({ length: cols - row.length }, (_, i) => (
                <><td key={`ep${i}`}></td><td key={`eg${i}`}></td></>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ fontSize: '.78rem', color: '#8892a4', marginTop: '.4rem' }}>
        Megfigyelés: g általában <em>kicsi</em> — sokszor 2, 3, 5.
        <em> Bizonyítatlan sejtés (Artin):</em> bármely nem-négyzet g primitív gyök végtelen sok prímhez.
      </p>
    </div>
  );
}

/* ════ p=23, g=5 discrete log sample table ════ */
function Dlog23Table() {
  const p = 23, g = 5;
  const dlog = buildDlog(p, g);

  const powRows: number[][] = [[], [], []];
  let cur = 1;
  for (let k = 0; k < 22; k++) {
    const row = Math.floor(k / 10);
    if (row < 3) powRows[row].push(cur);
    cur = (cur * g) % p;
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fbbf24' }}>Diszkrét logaritmus-táblák — Minta p = 23, g = 5</span>
      <div style={{ marginBottom: '.5rem', fontSize: '.82rem', color: '#8892a4' }}>g hatványai mod 23:</div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ fontSize: '.8rem', fontFamily: 'monospace' }}>
          <thead>
            <tr>
              <th>k offset</th>
              {Array.from({ length: 10 }, (_, i) => <th key={i}>+{i}</th>)}
            </tr>
          </thead>
          <tbody>
            {powRows.map((row, ri) => (
              <tr key={ri}>
                <td style={{ color: '#8892a4' }}>{ri * 10}+</td>
                {row.map((v, ci) => <td key={ci} style={{ color: '#c9d1d9' }}>{v}</td>)}
                {row.length < 10 && Array.from({ length: 10 - row.length }, (_, i) => <td key={`e${i}`} style={{ color: '#374151' }}>—</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ marginTop: '.6rem', fontSize: '.82rem', color: '#c9d1d9', lineHeight: 1.9 }}>
        <strong style={{ color: '#fbbf24' }}>log₅(x) tábla mod 23 — néhány érték:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: '.3rem' }}>
          {Array.from({ length: 22 }, (_, i) => i + 1).map(x => {
            const k = dlog.get(x);
            return (
              <span key={x} style={{ background: '#0d1117', border: '1px solid #30363d', borderRadius: '.25rem', padding: '.1rem .45rem', fontFamily: 'monospace', fontSize: '.72rem' }}>
                <span style={{ color: '#8892a4' }}>log₅(</span>
                <span style={{ color: '#fbbf24' }}>{x}</span>
                <span style={{ color: '#8892a4' }}>)=</span>
                <span style={{ color: '#a78bfa' }}>{k}</span>
              </span>
            );
          })}
        </div>
      </div>
      <div className="thm-box" style={{ marginTop: '.6rem' }}>
        <div className="box-body">
          Ez a táblázat a 6.71 példa „könyvi" tábla, amellyel a \(\bmod p\) szorzást
          \(\bmod (p-1)\) <strong>összeadásra</strong> redukáljuk — a hagyományos logaritmus-táblák
          analógiájára (Napier 1614).
        </div>
      </div>
    </div>
  );
}

/* ════ Static theory HTML strings ════ */

const tIntro = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13. fejezet — Függelék</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Algebrai általánosítások és hivatkozási anyag</span>
  <div class="box-body">
    Három téma:
    <ul style="line-height:2;margin:.4rem 0">
      <li><strong>13.1 Boole-algebrák</strong> — a könyvben több helyen használt absztrakt struktúra
          (lnko/lkkt, halmazműveletek, logika).</li>
      <li><strong>13.2 Polinomok és Euklideszi gyűrűk</strong> — az egész számokra bemutatott módszerek
          általánosítása.</li>
      <li><strong>13.3 Táblázatok</strong> — primitív gyökök és diszkrét logaritmusok kis prímmodulusokra.</li>
    </ul>
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    Az itt található általánosítások közös <em>tanulsága</em>: a könyv 4–7. fejezeteinek
    algoritmusai (Euklidesz, Diophantosz, CRT, Euler-\(\varphi\), …) <strong>mindegyike érvényes</strong>
    polinomokra, Gauss-egészekre \(\mathbb{Z}[i]\), Euler-egészekre \(\mathbb{Z}[\rho]\), és sok
    más algebrai struktúrában is.
  </div>
</div>`;

const tBoole = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13.1 Boole-algebrák</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.1 Definíció — Boole-algebra</span>
  <div class="box-body">
    A struktúra:
    \[\mathcal{B} = (H, \vee, \wedge, \bar{\cdot}, I, o)\]
    ahol \(H \neq \emptyset\), \(\vee, \wedge\) kétváltozós, \(\bar{\cdot}\) egyváltozós művelet,
    \(I, o \in H\) konstans elemek, és teljesülnek a (BA1)–(BA14) axiómák.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A 14 axióma</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Csoport</th>
      <th style="text-align:left">Axióma</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><strong>BA1–2 kommutativitás</strong></td>
        <td>\(A \vee B = B \vee A,\; A \wedge B = B \wedge A\)</td>
      </tr>
      <tr>
        <td><strong>BA3–4 asszociativitás</strong></td>
        <td>\(A \vee (B \vee C) = (A \vee B) \vee C\), &nbsp;ill. \(\wedge\)</td>
      </tr>
      <tr>
        <td><strong>BA5–6 disztributivitás</strong></td>
        <td>\(A \vee (B \wedge C) = (A \vee B) \wedge (A \vee C)\), ill. ⇄</td>
      </tr>
      <tr>
        <td><strong>BA7–8 elnyelés</strong></td>
        <td>\(A \vee (A \wedge B) = A,\; A \wedge (A \vee B) = A\)</td>
      </tr>
      <tr>
        <td><strong>BA9–10 komplementer</strong></td>
        <td>\(A \vee \bar A = I,\; A \wedge \bar A = o\)</td>
      </tr>
      <tr>
        <td><strong>BA11–14 nulla/egység</strong></td>
        <td>\(A \vee o = A,\; A \wedge o = o,\; A \vee I = I,\; A \wedge I = A\)</td>
      </tr>
    </tbody>
  </table>
  <p style="color:#8892a4;font-size:.8rem;margin-top:.4rem">
    Elnevezések: \(\vee\) <em>konjunkció</em>, \(\wedge\) <em>diszjunkció</em>,
    \(\bar{\cdot}\) <em>komplementer</em>, \(I\) <em>egységelem</em>, \(o\) <em>nullelem</em>.
  </p>
</div>
<div class="info-box">
  <span class="lbl" style="color:#fbbf24">Boole-algebra-példák</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Példa</th>
      <th style="text-align:left">\(H\)</th>
      <th style="text-align:left">\(\vee\) / \(\wedge\)</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><strong>Halmazelmélet</strong></td>
        <td>\(\mathcal{P}(X)\) (hatványhalmaz)</td>
        <td>\(\cup\) / \(\cap\), &nbsp;\(\bar A = X \setminus A\)</td>
      </tr>
      <tr>
        <td><strong>Logika</strong></td>
        <td>\(\{0, 1\}\)</td>
        <td>\(\vee\) / \(\wedge\) &nbsp;(boole)</td>
      </tr>
      <tr>
        <td><strong>Számelmélet</strong></td>
        <td>\(D_n\) (négyzetmentes \(n\) osztói)</td>
        <td>lkkt / lnko &nbsp;(3.38 tétel)</td>
      </tr>
      <tr>
        <td><strong>Színkeverés</strong></td>
        <td>elemi színek</td>
        <td>additív (RGB) / szubtraktív (CMY)</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <div class="box-body">
    A Boole-algebra <em>univerzális</em> struktúra: bármely 14 axiómát teljesítő rendszer
    ugyanazokat a tételeket élvezi (De Morgan, kettős negáció, idempotens, stb.).
    Stone 1936-os reprezentációs tétele szerint minden véges Boole-algebra valamilyen
    halmaz hatványhalmazával izomorf.
  </div>
</div>`;

const tPolinom = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13.2a § — Polinom-gyűrűk és algebrai egészek</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.2 Def. — Polinom-gyűrűk</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Jel</th>
      <th style="text-align:left">Jelentés</th>
    </tr></thead>
    <tbody>
      <tr><td style="font-family:monospace">\(\mathbb{Z}[x]\)</td><td>egész együtthatós (egyismeretlenes) polinomok</td></tr>
      <tr><td style="font-family:monospace">\(\mathbb{R}[x]\)</td><td>valós együtthatós polinomok</td></tr>
      <tr><td style="font-family:monospace">\(\mathbb{C}[x]\)</td><td>komplex együtthatós polinomok</td></tr>
    </tbody>
  </table>
  <div class="box-body" style="margin-top:.4rem">
    <strong>Fokszám</strong> (\(\operatorname{gr}(p)\) vagy \(d(p)\)): az \(x\) legmagasabb
    hatványkitevője. Konvenció: \(\operatorname{gr}(\tilde 0) := -\infty\).
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.3 Def. — Algebrai egészek és \(\mathbb{Z}[\alpha]\)</span>
  <div class="box-body">
    \(\alpha \in \mathbb{C}\) <strong>algebrai egész</strong>, ha gyöke egy \(\mathbb{Z}[x]\)-beli polinomnak.
    Másodfokú algebrai \(\alpha\) esetén:
    \[\mathbb{Z}[\alpha] := \{a + b\alpha : a, b \in \mathbb{Z}\} \subset \mathbb{C}\]
    <table class="cayley" style="width:100%;margin-top:.4rem">
      <thead><tr>
        <th style="text-align:left">Gyűrű</th>
        <th style="text-align:left">\(\alpha\)</th>
        <th style="text-align:left">Név</th>
      </tr></thead>
      <tbody>
        <tr><td>\(\mathbb{Z}[i]\)</td><td>\(i\) (\(i^2 = -1\))</td><td>Gauss-egészek</td></tr>
        <tr><td>\(\mathbb{Z}[\rho]\)</td><td>\(\rho = -\tfrac{1}{2} + \tfrac{\sqrt{3}}{2} i\) (köbgyök 1-ből)</td><td>Euler-egészek</td></tr>
        <tr><td>\(\mathbb{Z}[\sqrt{2}] = H_2\)</td><td>\(\sqrt 2\)</td><td>\(H\)-egészek</td></tr>
        <tr><td>\(\mathbb{Z}[i\sqrt{5}]\)</td><td>\(i\sqrt 5\)</td><td>L-egészek</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">13.4 Állítás</span>
  <div class="box-body">
    \(\mathbb{Z}[\alpha]\) zárt \(+\) és \(\cdot\) alatt. A szorzás:
    \[(a + b\alpha)(c + d\alpha) = (ac - bdq) + (ad + bc - bdp)\alpha\]
    ahol \(\alpha^2 + p\alpha + q = 0\).
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#fbbf24">Történelmi alkalmazások — Fermat-sejtés</span>
  <div class="box-body">
    A \(\mathbb{Z}[\alpha]\) gyűrűk kulcsszerepet játszottak több klasszikus problémában:
    <ul style="line-height:1.9;margin:.4rem 0">
      <li><strong>Fermat utolsó tétele \(n = 3\) és \(n = 4\)</strong> — Euler / Fermat (köbgyök-egészek \(\mathbb{Z}[\rho]\)).</li>
      <li><strong>Karácsonyi tétel</strong> (\(4m + 1 = a^2 + b^2\)) — Bolyai János <em>2-soros</em> bizonyítása Gauss-egészekben (3.58 Tétel).</li>
      <li><strong>Pell-egyenletek</strong> \(x^2 - dy^2 = 1\) — \(\mathbb{Z}[\sqrt{d}]\) egységeivel.</li>
      <li><strong>Wiles 1995 — teljes FLT</strong> — moduláris formák és elliptikus görbék (sokkal mélyebb).</li>
    </ul>
  </div>
</div>`;

const tEukl = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13.2b § — Általános oszthatóság és Euklideszi gyűrűk</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.5–13.12 — Általános oszthatóság</span>
  <div class="box-body">
    \((R, +, \cdot)\) tetszőleges <strong>integritási tartomány</strong> (kommutatív egységelemes
    gyűrű zérusosztók nélkül).
    <table class="cayley" style="width:100%;margin-top:.4rem">
      <thead><tr>
        <th style="text-align:left">Fogalom</th>
        <th style="text-align:left">Definíció</th>
      </tr></thead>
      <tbody>
        <tr><td>\(a \mid b\)</td><td>\(\exists c \in R: b = a \cdot c\)</td></tr>
        <tr><td><strong>egység</strong> \(e\)</td><td>\(e \mid 1\) &nbsp;(invertálható elem; <em>nem</em> egységelem!)</td></tr>
        <tr><td>\(a \sim b\) <strong>asszociáltak</strong></td><td>\(a = b \cdot e\) valamely egység \(e\)-re</td></tr>
        <tr><td><strong>irreducibilis</strong></td><td>nincs valódi felbontás: \(a = bc \Rightarrow b\) vagy \(c\) egység</td></tr>
        <tr><td><strong>prím-elem</strong></td><td>\(a \mid bc \Rightarrow a \mid b\) vagy \(a \mid c\) &nbsp;(3.5 Tétel általánosítása)</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">13.7 Állítás</span>
  <div class="box-body">
    Integritási tartományban <em>minden prím-elem irreducibilis</em>.
    <strong>De fordítva nem</strong> — pl. \(\mathbb{Z}[\sqrt{-5}]\)-ben
    \(6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})\)
    két különböző felbontás!
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.9–13.11 — Egyértelmű prímfelbontás (EPF)</span>
  <div class="box-body">
    \((R, +, \cdot)\)-ban <strong>EPF</strong> ⟺ minden elem irreducibilis elemek szorzatára
    lényegében egyértelműen felbontható.
    <br><br>
    <strong>13.11 Tétel.</strong> Integritási tartományban: EPF \(\iff\) minden irreducibilis prím-tulajdonságú.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.12–13.13 — Euklideszi gyűrűk</span>
  <div class="box-body">
    \((R, +, \cdot)\) <strong>Euklideszi gyűrű</strong>, ha létezik \(\varphi: R \to \mathbb{N}\) („norma")
    függvény: bármely \(a, b \in R\), \(\varphi(b) \neq 0\) esetén léteznek \(q, r\) úgy, hogy
    \[a = bq + r, \qquad \varphi(r) &lt; \varphi(b).\]
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">13.13 Tétel</span>
  <div class="box-body">
    <em>Minden Euklideszi gyűrűben teljesül az EPF.</em>
    Az Algebra Alaptételének és a Számelmélet Alaptételének közös általánosítása.
    <br><br>
    <strong>Példák Euklideszi gyűrűkre (mind EPF):</strong><br>
    \(\mathbb{Z},\; \mathbb{Q}[x],\; \mathbb{R}[x],\; \mathbb{Z}[i],\; \mathbb{Z}[i\sqrt{2}],\;
    \mathbb{Z}[\rho],\; \mathbb{Z}[\sqrt{2}],\; \mathbb{Z}[\sqrt{3}],\; \mathbb{Z}[\sqrt{6}],\;
    \mathbb{Z}[\sqrt{7}],\; \mathbb{Z}[\sqrt{11}],\; \mathbb{Z}[\sqrt{19}]\)
    <br><br>
    <strong>EPF-tartomány, ami <em>nem</em> Euklideszi:</strong><br>
    \(\mathbb{Z}[x],\; \mathbb{Z}[\sqrt{23}],\; \mathbb{Z}[i\sqrt{3}],\; \mathbb{Z}[i\sqrt{19}],\;
    \mathbb{Z}[i\sqrt{43}],\; \mathbb{Z}[i\sqrt{67}],\; \mathbb{Z}[i\sqrt{163}]\)
    — ezeknél EPF teljesül, de nincs norma-függvény.
  </div>
</div>
<div class="warn-box">
  <strong>13.16 Probléma (nyitott).</strong> Mely \(m \in \mathbb{Z}\) (nem négyzetszám) egészekre
  teljesül az EPF \(\mathbb{Z}[\sqrt m]\)-ben? Negatív \(m\)-re ismert (csak 9 ilyen érték, 1970 óta);
  <em>pozitív \(m\)-re máig nem teljes osztályozás</em>.
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">13.17 Megj. — Mely könyvfejezetek érvényesek általánosan?</span>
  <div class="box-body">
    A 3–7. fejezetek <strong>minden</strong> Euklideszi gyűrűben (vagy EPF-tartományban) érvényesek:
    <ul style="line-height:1.9;margin:.4rem 0">
      <li>\(\operatorname{lnko}, \operatorname{lkkt}\) fogalma és összefüggései</li>
      <li>Euklidesz-algoritmus lnko-ra</li>
      <li>Lineáris Diophantoszi egyenletek</li>
      <li>Kínai Maradéktétel</li>
      <li>Kongruenciák, \(\mathbb{Z}_n\)-szerű maradékosztály-gyűrű</li>
    </ul>
    A mellékelt <code>Poliosz5.exe</code> a fenti módszereket konkrétan a polinom-gyűrűre
    (\(\mathbb{Z}[x]\), \(\mathbb{Q}[x]\)) implementálja.
  </div>
</div>`;

const tTablazat = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13.3 § — Hivatkozási táblázatok</h5>
<div class="def-box">
  <div class="box-body">
    Az alábbi tábla a 6.7 alfejezet diszkrét logaritmus / index-számolásához használható.
    Minden \(p \in \mathbb{P}\), \(p \leq 293\) prímre megadja a legkisebb pozitív
    <strong>primitív gyököt</strong> \(g\).
  </div>
</div>`;

const tZaro = String.raw`
<div class="def-box" style="margin-top:.75rem">
  <span class="lbl" style="color:#a78bfa">További (online) hivatkozások</span>
  <div class="box-body">
    <ul style="line-height:1.9">
      <li>30 000 alatti számok prímfelbontása: <strong>[SzI1] Feladatgyűjtemény Függeléke</strong></li>
      <li>Első 50 millió prím: <a href="https://primes.utm.edu/lists/small/millions/" style="color:#a78bfa">primes.utm.edu</a></li>
      <li>OEIS — Online Encyclopedia of Integer Sequences: <a href="https://oeis.org" style="color:#a78bfa">oeis.org</a> (Sloane)</li>
      <li>Mersenne primes: <a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a></li>
    </ul>
  </div>
</div>
<div class="thm-box" style="margin-top:.75rem">
  <div class="box-body" style="font-style:italic;color:#cbd5e1">
    „Ezzel zárul az <em>Algoritmikus számelmélet</em> könyv. A téma kimeríthetetlen — a függeléken
    kívül a Knuth [KD], Koblitz [KN], Cormen-Leiserson-Rivest [CLR] és Lovász-Gács [LG] művek
    adnak további mélységet. A gyors számelmélet, kriptográfia és kvantumszámítógépek
    kapcsolatának vizsgálata <strong>élő kutatási terület</strong> — ennek aktív részese
    lehet az Olvasó is."
    <div style="text-align:right;color:#8892a4;font-style:normal;font-size:.85rem;margin-top:.4rem">
      — Szalkai István &amp; Dósa György, Pannon Egyetem 2011
    </div>
  </div>
</div>`;

const TABS: Tab[] = [
  { id: 'intro',   label: 'Áttekintés',              content: <RichTex html={tIntro} /> },
  { id: 'boole',   label: '13.1 Boole-algebra',       content: <RichTex html={tBoole} /> },
  { id: 'polinom', label: '13.2a Polinomok',          content: <RichTex html={tPolinom} /> },
  { id: 'eukl',    label: '13.2b Euklideszi gyűrűk',  content: <RichTex html={tEukl} /> },
  {
    id: 'tablazat',
    label: '13.3 Táblázatok',
    content: (
      <div>
        <RichTex html={tTablazat} />
        <PrimRootsTable />
        <Dlog23Table />
        <DlogFinder />
        <RichTex html={tZaro} />
      </div>
    ),
  },
];

export default function AlgoCh13() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 13. fejezet</p>
      <h1 className="ila__title">Függelék — Boole-algebrák, Euklideszi gyűrűk, táblázatok</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
