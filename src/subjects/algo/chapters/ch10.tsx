import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Modular exponentiation (BigInt) ════ */
function modpow(base: bigint, exp: bigint, mod: bigint): bigint {
  if (mod === 1n) return 0n;
  let result = 1n;
  base = base % mod;
  while (exp > 0n) {
    if (exp % 2n === 1n) result = (result * base) % mod;
    exp = exp / 2n;
    base = (base * base) % mod;
  }
  return result;
}

/* Extended Euclidean: returns [gcd, x, y] with ax + by = gcd */
function extgcd(a: bigint, b: bigint): [bigint, bigint, bigint] {
  if (b === 0n) return [a, 1n, 0n];
  const [g, x1, y1] = extgcd(b, a % b);
  return [g, y1, x1 - (a / b) * y1];
}

/* ════ Small primes for selector ════ */
const SMALL_PRIMES = [
  3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
  79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157,
  163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
  241, 251, 257, 263, 269, 271, 277, 281, 283, 293,
];

/* ════ RSA Interactive Demo ════ */
function RsaDemo() {
  const [p, setP] = useState(269);
  const [q, setQ] = useState(241);
  const [eInput, setEInput] = useState(53201);
  const [msg, setMsg] = useState(48055);

  const pb = BigInt(p), qb = BigInt(q);
  const n = pb * qb;
  const phi = (pb - 1n) * (qb - 1n);
  const eb = BigInt(eInput);

  const [gcd] = extgcd(eb, phi);
  const validE = gcd === 1n && eb > 1n && eb < phi;

  let fb = 0n;
  if (validE) {
    const [, x] = extgcd(eb, phi);
    fb = ((x % phi) + phi) % phi;
  }

  const msgb = BigInt(Math.max(0, msg));
  const msgValid = msgb < n;
  const encoded = validE && msgValid ? modpow(msgb, eb, n) : 0n;
  const decoded = validE && encoded > 0n ? modpow(encoded, fb, n) : 0n;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Interaktív RSA demo</span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.6rem', margin: '.6rem 0' }}>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.25rem' }}>p (prím)</div>
          <select className="ila-select" value={p} onChange={ev => setP(+ev.target.value)}>
            {SMALL_PRIMES.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.25rem' }}>q (prím)</div>
          <select className="ila-select" value={q} onChange={ev => setQ(+ev.target.value)}>
            {SMALL_PRIMES.map(v => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.25rem' }}>e (nyilvános kulcs, lnko(e,φ)=1)</div>
          <input type="number" className="ila-num" value={eInput} onChange={ev => setEInput(+ev.target.value)} style={{ width: 120 }} />
          {!validE && eInput > 1 && <span style={{ color: '#f87171', fontSize: '.72rem', marginLeft: '.3rem' }}>lnko(e,φ)≠1!</span>}
        </div>
        <div>
          <div style={{ fontSize: '.78rem', color: '#8892a4', marginBottom: '.25rem' }}>üzenet m ({'<'} n)</div>
          <input type="number" className="ila-num" value={msg} onChange={ev => setMsg(+ev.target.value)} style={{ width: 120 }} />
          {!msgValid && <span style={{ color: '#f87171', fontSize: '.72rem', marginLeft: '.3rem' }}>m ≥ n!</span>}
        </div>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '.82rem', lineHeight: 2.1, color: '#c9d1d9' }}>
        <div>n = p·q = <strong style={{ color: '#a78bfa' }}>{n.toString()}</strong></div>
        <div>φ(n) = (p−1)(q−1) = <strong style={{ color: '#a78bfa' }}>{phi.toString()}</strong></div>
        <div>f (titkos kulcs) = <strong style={{ color: '#fbbf24' }}>{validE ? fb.toString() : '—'}</strong></div>
        <div>
          e·f mod φ(n) = <strong style={{ color: validE ? '#34d399' : '#f87171' }}>
            {validE ? ((eb * fb) % phi).toString() : '—'}
          </strong>{validE ? ' ✓' : ''}
        </div>
        <div>kód K = m^e mod n = <strong style={{ color: '#60a5fa' }}>{(validE && msgValid) ? encoded.toString() : '—'}</strong></div>
        <div>
          dekód K^f mod n = <strong style={{ color: (validE && decoded === msgb) ? '#34d399' : '#f87171' }}>
            {validE ? decoded.toString() : '—'}
          </strong>{(validE && decoded === msgb) ? ' ✓' : ''}
        </div>
      </div>
    </div>
  );
}

/* ════ HELLO block encoder ════ */
function HelloEncoder() {
  const [word, setWord] = useState('HELLO');
  const n = 64829n, e = 53201n, f = 28721n;
  const clean = word.toUpperCase().replace(/[^A-Z]/g, '').slice(0, 10);

  const blocks: { raw: string; num: bigint; enc: bigint; dec: bigint }[] = [];
  for (let i = 0; i < clean.length; i += 2) {
    const a = clean.charCodeAt(i) - 64;
    const b = i + 1 < clean.length ? clean.charCodeAt(i + 1) - 64 : 0;
    const raw = clean.slice(i, i + 2);
    const num = BigInt(a * 100 + b);
    const enc = modpow(num, e, n);
    const dec = modpow(enc, f, n);
    blocks.push({ raw, num, enc, dec });
  }

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fbbf24' }}>HELLO-kódoló (n=64829, e=53201, f=28721)</span>
      <div style={{ margin: '.5rem 0', fontSize: '.85rem' }}>
        Szó:&nbsp;
        <input
          className="ila-num"
          value={word}
          onChange={ev => setWord(ev.target.value)}
          style={{ width: 140, textTransform: 'uppercase' }}
        />
        <span style={{ color: '#8892a4', fontSize: '.75rem', marginLeft: '.5rem' }}>Max 10 betű, A–Z</span>
      </div>
      {blocks.length > 0 && (
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ fontSize: '.82rem', fontFamily: 'monospace', minWidth: 460 }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>blokk</th>
                <th style={{ textAlign: 'left' }}>szám</th>
                <th style={{ textAlign: 'left' }}>kód (m^e mod n)</th>
                <th style={{ textAlign: 'left' }}>vissza</th>
              </tr>
            </thead>
            <tbody>
              {blocks.map((bl, i) => (
                <tr key={i}>
                  <td style={{ color: '#c9d1d9' }}>{bl.raw}</td>
                  <td style={{ color: '#a78bfa' }}>{bl.num.toString().padStart(4, '0')}</td>
                  <td style={{ color: '#60a5fa', fontWeight: 700 }}>{bl.enc.toString()}</td>
                  <td style={{ color: bl.dec === bl.num ? '#34d399' : '#f87171' }}>
                    {bl.dec.toString().padStart(4, '0')} {bl.dec === bl.num ? '✓' : '✗'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

/* ════ Knapsack (Merkle-Hellman) demo ════ */
function KnapsackDemo() {
  const v = [2, 3, 7, 15, 31];
  const m = 61, a = 17, bInv = 18;
  const w = v.map(vi => (a * vi) % m);
  const [bits, setBits] = useState([1, 0, 1, 1, 0]);

  const F = bits.reduce((s, ei, i) => s + ei * w[i], 0);
  const H = (F * bInv) % m;

  let rem = H;
  const greedyBits = [0, 0, 0, 0, 0];
  for (let i = v.length - 1; i >= 0; i--) {
    if (rem >= v[i]) { greedyBits[i] = 1; rem -= v[i]; }
  }
  const match = greedyBits.every((g, i) => g === bits[i]);

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#fbbf24' }}>10.30 Példa — Hátizsák-demo</span>
      <div style={{ fontSize: '.82rem', color: '#8892a4', marginBottom: '.4rem' }}>
        v = (2,3,7,15,31) szupernövekvő &nbsp;|&nbsp; m = 61, a = 17, b = 18 (titok)<br />
        w ≡ 17·v (mod 61) = ({w.join(', ')}) — nyilvános kulcs
      </div>
      <div style={{ margin: '.5rem 0', fontSize: '.85rem', display: 'flex', flexWrap: 'wrap', gap: '.5rem', alignItems: 'center' }}>
        <span style={{ color: '#8892a4' }}>Üzenet ε:</span>
        {bits.map((bi, i) => (
          <label key={i} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '.2rem' }}>
            <input
              type="checkbox"
              checked={bi === 1}
              onChange={ev => { const nb = [...bits]; nb[i] = ev.target.checked ? 1 : 0; setBits(nb); }}
            />
            ε{i}
          </label>
        ))}
        <span style={{ color: '#c9d1d9', fontFamily: 'monospace' }}>= ({bits.join(', ')})</span>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: '.82rem', lineHeight: 2, color: '#c9d1d9' }}>
        <div>F = Σ εᵢ·wᵢ = <strong style={{ color: '#a78bfa' }}>{F}</strong></div>
        <div>H ≡ b·F ≡ {bInv}·{F} ≡ <strong style={{ color: '#fbbf24' }}>{H}</strong> (mod {m})</div>
        <div>
          Mohó dekódolás: ({greedyBits.join(', ')})&nbsp;
          {match
            ? <span style={{ color: '#34d399' }}>= eredeti ✓</span>
            : <span style={{ color: '#f87171' }}>≠ eredeti ✗</span>}
        </div>
      </div>
    </div>
  );
}

/* ════ Static theory HTML strings ════ */
const tIntro = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10. fejezet — Titkosírás nyilvános kulccsal</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Nyilvános kulcsú titkosírás (public key cryptography)</span>
  <div class="box-body">
    Olyan titkosírás, amelynek menete (kódolás és kulcsa) <strong>bárki számára nyilvános</strong>,
    mégis a levelet csak a címzett tudja elolvasni (dekódolni) — <em>még maga a levél írója sem!</em>
    <br><br>
    Whitfield Diffie és Martin Hellman 1976-ban javasolta az ötletet, és Ron Rivest,
    Adi Shamir és Leonard Adleman 1977-ben adta az első működő algoritmust — az
    <strong>RSA</strong>-t. (A brit hírszerzés GCHQ Ellis–Cocks–Williamson titkos
    rendszere 1973-ban már ugyanezt megalkotta — de csak 1997-ben hozták nyilvánosságra.)
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">Az aszimmetrikus titkosírás négy haszna</span>
  <table class="cayley" style="width:100%;margin-top:.4rem">
    <thead><tr>
      <th style="text-align:left">Tulajdonság</th>
      <th style="text-align:left">Magyarázat</th>
    </tr></thead>
    <tbody>
      <tr>
        <td><strong>Feltörhetetlenség</strong></td>
        <td>A titkos kulcs nélkül a kódolt üzenet csak prímfelbontással olvasható el (kvázi: \(2^{1000}\) év).</td>
      </tr>
      <tr>
        <td><strong>Előzetes megállapodás nélkül</strong></td>
        <td>\(B\) írhat \(A\)-nak anélkül, hogy korábban találkoztak volna.</td>
      </tr>
      <tr>
        <td><strong>Skálázás \(O(t)\) helyett \(O(t^2)\)</strong></td>
        <td>\(t\) résztvevő esetén nem \(\binom{t}{2}\) titok, csak \(t\) nyilvános kulcs.</td>
      </tr>
      <tr>
        <td><strong>Aláírás-hitelesítés</strong></td>
        <td>Bizonyítható, hogy <em>kitől</em> jött az üzenet — és bírósági szinten is.</td>
      </tr>
    </tbody>
  </table>
</div>`;

const tRsa = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.1 Algoritmus — RSA (Rivest–Shamir–Adleman, 1977)</h5>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Előkészítés (mindenki külön, titokban)</span>
  <div class="box-body">
    <ol style="line-height:2;margin:.4rem 0">
      <li>Válasszunk két nagy prímet: \(p, q\) (~500–1000 jegy). <em>Kerüljük</em> a közeli prímeket
          (Fermat-faktorizáció) és azokat, ahol \(p-1\) vagy \(q-1\) kis prímosztókkal bír (Pollard \(p-1\)).</li>
      <li>Számoljuk ki \(n := pq\) — ezt nyilvánosságra hozzuk („modulus").</li>
      <li>Számoljuk ki \(\varphi(n) = (p-1)(q-1)\) — ezt <strong>titokban tartjuk</strong>.</li>
      <li>Válasszunk \(e\) számot, amely relatív prím \(\varphi(n)\)-hez (próbálkozás: \(e = \varphi(n)/2 + j\)).
          \(e\) a <strong>nyilvános kulcs</strong>.</li>
      <li>Számoljuk ki \(f\) titkos megoldókulcsot a \(\;ef \equiv 1 \pmod{\varphi(n)}\;\) Diophantoszi
          egyenletből (Euklideszi alg.). \(p, q, \varphi(n)\) adatokat <em>elégetjük</em>!</li>
    </ol>
    <strong>Nyilvános:</strong> \(n, e\) &nbsp; (és a személy neve/elérhetősége).<br>
    <strong>Titkos:</strong> \(f\) &nbsp; (a \(p, q, \varphi(n)\) már nincs meg).
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">A protokoll — B ír A-nak</span>
  <div class="box-body">
    \(B\) az üzenetet \(k &lt; n_A\) darabokra bontja. Minden \(k\) kódja \(A\) nyilvános \((n_A, e_A)\) kulcsával:
    \[K := C_A(k) \equiv k^{e_A} \pmod{n_A}.\]
    \(A\) a saját \(f_A\) titkos kulcsával dekódol:
    \[D_A(K) \equiv K^{f_A} \pmod{n_A}.\]
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">Miért működik? — (10.4) levezetés</span>
  <div class="box-body">
    \[K^{f_A} \equiv (k^{e_A})^{f_A} = k^{e_A f_A} = k^{sy+1} = (k^s)^y \cdot k \equiv 1^y \cdot k \equiv k \pmod{n_A}\]
    az Euler-tétel (\(k^{\varphi(n)} \equiv 1\), ha \(\operatorname{lnko}(k,n)=1\)) alapján.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.4 Állítás</span>
  <div class="box-body">
    \(C_A\) és \(D_A : \mathbb{Z}_{n_A}^* \to \mathbb{Z}_{n_A}^*\) egymás inverz <em>bijektív</em> függvényei:
    \(C_A(D_A(x)) = D_A(C_A(x)) = x\). Tehát a kódolás \(\leftrightarrow\) dekódolás szimmetrikus
    művelet, csak a kulcs van „más kéznél".
  </div>
</div>`;

const tPelda = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">10.13 Példa — Teljes RSA-számolás reális prímekkel</h5>
<div class="ex-box">
  <span class="lbl lbl--ex">Adott: p = 269, q = 241, e = 53 201</span>
  <div class="box-body">
    <strong>(a) φ(n) kiszámítása</strong>
    \[n = pq = 269 \cdot 241 = 64\,829\]
    \[s = \varphi(n) = (p-1)(q-1) = 268 \cdot 240 = 64\,320\]
    <br>
    <strong>(b) f titkos kulcs — Bézout</strong><br>
    Megoldjuk \(ef - sy = 1\), vagyis \(53\,201 f - 64\,320 y = 1\) Euklideszi-algoritmussal:
    \[f = \mathbf{28\,721}\]
    Ellenőrzés: \(53\,201 \cdot 28\,721 = 1\,528\,005\,121 = 23\,756 \cdot 64\,320 + 1\). ✓
    <br><br>
    <strong>(c) Üzenet kódolása x = 48 055</strong>
    \[y \equiv x^e \equiv 48\,055^{53\,201} \equiv \mathbf{61\,606} \pmod{64\,829}\]
    <br>
    <strong>(d) Dekódolás visszaellenőrzéssel</strong>
    \[x \equiv y^f \equiv 61\,606^{28\,721} \equiv \mathbf{48\,055} \pmod{64\,829} \checkmark\]
  </div>
</div>
<div class="ex-box">
  <span class="lbl lbl--ex">(e) „HELLO" kódolása</span>
  <div class="box-body">
    26-betűs ABC: H=08, E=05, L=12, L=12, O=15. Két-két betű egy blokkban:
    \[\texttt{HELLO} = 0008 \;\; 0512 \;\; 1215\]
    <table class="cayley" style="font-family:monospace;font-size:.85rem;margin-top:.4rem">
      <thead><tr><th>blokk</th><th>\(k^e \bmod n\)</th><th>kód</th></tr></thead>
      <tbody>
        <tr><td>0008</td><td>\(8^{53201} \bmod 64829\)</td><td><strong>13 745</strong></td></tr>
        <tr><td>0512</td><td>\(512^{53201} \bmod 64829\)</td><td><strong>57 388</strong></td></tr>
        <tr><td>1215</td><td>\(1215^{53201} \bmod 64829\)</td><td><strong>18 638</strong></td></tr>
      </tbody>
    </table>
    <br>
    <strong>(f) Visszafejtés — 36 376, 28 210, 53 334</strong>
    <table class="cayley" style="font-family:monospace;font-size:.85rem;margin-top:.4rem">
      <thead><tr><th>kód</th><th>\(y^f \bmod n\)</th><th>blokk</th><th>betűk</th></tr></thead>
      <tbody>
        <tr><td>36 376</td><td>\(36376^{28721} \bmod 64829\)</td><td>0016</td><td><strong>P</strong></td></tr>
        <tr><td>28 210</td><td>\(28210^{28721} \bmod 64829\)</td><td>0918</td><td><strong>IR</strong></td></tr>
        <tr><td>53 334</td><td>\(53334^{28721} \bmod 64829\)</td><td>1519</td><td><strong>OS</strong></td></tr>
      </tbody>
    </table>
    Dekódolt üzenet: <strong>P I R O S</strong> (00, 16, 09, 18, 15, 19 → P-I-R-O-S).
  </div>
</div>`;

const tAliras = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.9 Megj. — Aláírás-hitelesítés (signing)</h5>
<div class="def-box">
  <div class="box-body">
    \(B\) szeretné igazolni, hogy egy üzenetet <strong>valóban ő írt</strong> \(A\)-nak —
    nem egy harmadik fél „\(E\)" hamisította. Ehhez \(B\) a <em>saját titkos \(f_B\)</em> kulcsával
    is „rákódol" egy véletlen \(\ell\) jelsorozatra.
  </div>
</div>
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">Hitelesítési protokoll — 7 lépésben</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>\(B\) választ egy véletlen \(\ell\) jelsorozatot (név + dátum + véletlen karakterek).</li>
      <li>\(B\) kódolja \(\ell\)-et \(A\) nyilvános kulcsával: \(\;L \equiv \ell^{e_A} \pmod{n_A}\).</li>
      <li>\(B\) a saját titkos \(f_B\)-vel „aláírja" \(\ell\)-et: \(\;\lambda \equiv \ell^{f_B} \pmod{n_B}\).</li>
      <li>\(B\) még egyszer \(A\)-nak kódolja \(\lambda\)-t: \(\;\Lambda \equiv \lambda^{e_A} \pmod{n_A}\).</li>
      <li>\(B\) <strong>\(L\)-et és \(\Lambda\)-t küldi</strong> \(A\)-nak.</li>
      <li>\(A\) dekódolja: \(\;\ell_1 = D_A(L),\;\lambda = D_A(\Lambda),\;\ell_2 = C_B(\lambda) \equiv \lambda^{e_B} \pmod{n_B}\).</li>
      <li>Hitelesnek tekinti, ha \(\boxed{\;\ell_1 = \ell_2\;}\).</li>
    </ol>
    <strong>Miért hiteles?</strong> \(\lambda\)-t csak \(B\) tudja előállítani \(\ell\)-ből, mert
    \(\lambda = \ell^{f_B} \pmod{n_B}\) — a titkos \(f_B\) ismerete nélkül senki sem tudja kiszámolni.
    Ha \(\ell_1 = \ell_2\), akkor \(\lambda\) valóban \(\ell\)-ből származik \(B\) kulcsával.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.10 Megj. — Megrendelés-bizonyítás (non-repudiation)</span>
  <div class="box-body">
    \(A\)-nak bíróság előtt kell igazolnia, hogy az \(\ell\) üzenetet <strong>valóban \(B\) írta</strong>.
    Erre \(A\) átadja a bírónak \(\Lambda\)-t és \(\lambda\)-t (de <em>nem</em> \(D_A\)-t vagy \(D_B\)-t).
    <table class="cayley" style="width:100%;margin-top:.4rem">
      <thead><tr><th>Ellenőrzés</th><th>Mit bizonyít?</th></tr></thead>
      <tbody>
        <tr><td>\(\Lambda = C_A(\lambda)\)?</td><td>Az üzenetet valóban \(A\) kapta meg.</td></tr>
        <tr><td>\(\ell = C_B(\lambda)\)?</td><td>\(\lambda\) valóban \(\ell\) aláírása \(B\)-től.</td></tr>
      </tbody>
    </table>
  </div>
</div>
<div class="thm-box">
  <div class="box-body">
    <strong>10.11 Összegzés.</strong> A 10.6–10.10 előnyök <em>bármely olyan</em> nyilvános kulcsú
    titkosírásra érvényesek, amelyre a 10.4 Állítás teljesül (\(C \circ D = D \circ C = \mathrm{id}\)).
    Tehát az aláírás-hitelesítés és non-repudiation <em>az RSA-tól független</em> — bármelyik
    invertálható kódolási rendszerre alkalmazható.
    <br><br>
    <strong>Mai gyakorlat.</strong> Az RSA-aláírás ma is a digitális szerződések és tanúsítványok
    (X.509, TLS) alapja. A modern változat <em>elliptikus görbe</em> alapú (ECDSA, Ed25519) — sokkal
    kisebb kulccsal, de ugyanazzal a matematikai elvvel.
  </div>
</div>`;

const tRsa129 = String.raw`
<h5 style="color:#fbbf24;font-weight:700;margin:0 0 .75rem">10.17 Példa — RSA-129 kihívás (1977, Scientific American)</h5>
<div class="ex-box">
  <span class="lbl lbl--ex">A kihívás</span>
  <div class="box-body">
    Martin Gardner az 1977. augusztusi <em>Scientific American</em> rovatban tette közzé.
    Rivest–Shamir–Adleman 100 USD jutalmat ajánlott a feltörőnek.
    <br><br>
    <strong>A nyilvános kulcs:</strong> \(e = 9007\) és a 129-jegyű
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#fbbf24;font-size:.8rem;word-break:break-all;line-height:1.7">
      n = 11438162 5757888867 6692357799 7614661201 0218296721<br>
      &nbsp;&nbsp;&nbsp; 2423625625 6184293570 6935245733 8978305971 2356395870<br>
      &nbsp;&nbsp;&nbsp; 50589890751 4759929002 6879543541
    </div>
    <strong>A kódolt K üzenet:</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#60a5fa;font-size:.8rem;word-break:break-all;line-height:1.7">
      K = 96869613 754622 06147714092 2254355882 90575999112<br>
      &nbsp;&nbsp;&nbsp; 4574319874 6951209308 16298225145 70835693147<br>
      &nbsp;&nbsp;&nbsp; 66228839898 6280133919 9055182994 5157815154
    </div>
    <em style="color:#8892a4">Eredeti becslés (RSA-szerzők, 1977): 40 quadrillió év!</em>
  </div>
</div>
<div class="ex-box">
  <span class="lbl lbl--ex">10.23 Megoldás — 1994 április</span>
  <div class="box-body">
    <strong>Atkins, Graff, Lenstra és Leyland</strong> elosztott számítást szervezett:
    <strong>600+ önkéntes</strong> a világhálón futtatott faktorizációs programot, amikor
    számítógépük tétlen volt. <strong>8 hónap</strong> tartott — az adatok egy
    \(569\,466 \times 524\,338\)-as mátrixot adtak, ami Gauss-eliminációval
    \(188\,614 \times 188\,160\)-ra csökkent. Végső faktorizáció: 16K MasPar P-1
    párhuzamos szuperszámítógépen <strong>45 óra</strong>.
    <br><br>
    <strong>A felbontás \(n = p \cdot q\):</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.6rem .8rem;margin:.5rem 0;
                color:#34d399;font-size:.8rem;word-break:break-all;line-height:1.7">
      p = 3490 5295108476 5094914784 9619903898 1334177646<br>
      &nbsp;&nbsp;&nbsp; 3849338784 3990820577<br><br>
      q = 32769 1329932667 0954996198 8190834461 4131776429<br>
      &nbsp;&nbsp;&nbsp; 6799294253 9798288533
    </div>
    <strong>Az üzenet:</strong>
    <div style="font-family:monospace;background:#0a0c10;border-radius:.3rem;padding:.7rem;margin:.5rem 0;
                color:#fbbf24;font-size:1.1rem;text-align:center;font-weight:700">
      „THE MAGIC WORDS ARE SQUEAMISH OSSIFRAGE"
    </div>
    <em style="color:#8892a4;font-size:.8rem">
      „A varázsszó: a kényesgyomrú halászsas." — Squeamish ossifrage = halászsas (Pandion haliaetus).
    </em>
  </div>
</div>
<div class="warn-box">
  <strong>Tanulság.</strong> 1977-ben 129-jegyű RSA „feltörhetetlen" volt. 1994-re már nem.
  Ma <strong>2048-bites RSA</strong> a minimum, <strong>3072–4096 bit</strong> ajánlott. A
  kvantumszámítógép (Shor 1994 algoritmusa) eljövetelével az egész RSA elavult lesz —
  ezért a <em>poszt-kvantum kriptográfia</em> (NIST 2024-es szabványok) a következő nagy ugrás.
</div>`;

const tHatizsak = String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">10.2 § — Merkle–Hellman hátizsák-titkosírás (1978)</h5>
<div class="def-box">
  <div class="box-body">
    Az RSA után <em>második</em> nyilvános kulcsú titkosírás. Az 1980-as évek elején
    Adi Shamir <strong>feltörte</strong> — történelmi érdekesség, gyakorlatban nem használjuk.
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.24 Probléma — Általános hátizsák (NP-teljes)</span>
  <div class="box-body">
    Adottak \(m_1, \dots, m_k\) és \(M\). Keresendő:
    \[M = \sum_{i=1}^k \varepsilon_i \cdot m_i, \quad \varepsilon_i \in \{0, 1\}.\]
    Hátizsák-analógia: \(M\) teherbírású zsákba mely tárgyakat tegyük be?
    Általánosan <strong>NP-teljes</strong> — gyors algoritmus nem ismert.
  </div>
</div>
<div class="thm-box">
  <span class="lbl lbl--thm">10.25 Def. — Szupernövekvő sorozat</span>
  <div class="box-body">
    \((m_1, \dots, m_k)\) szupernövekvő, ha minden \(i\)-re:
    \[m_i > \sum_{j=1}^{i-1} m_j.\]
    <strong>10.27 Tétel — Szupernövekvő hátizsák \(O(k)\) idő alatt.</strong>
    Mohó algoritmus: csökkenő \(m_k, m_{k-1}, \dots, m_1\) sorrendben próbáljuk beletenni —
    ha belefér, kötelező betenni (a többi együttesen sem érné el \(m_i\)-t).
  </div>
</div>
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.29 — Merkle–Hellman titkosírás (vázlat)</span>
  <div class="box-body">
    <ol style="line-height:2">
      <li>Válasszunk titkos \(\vec v = (v_0, \dots, v_{k-1})\) szupernövekvő sorozatot és \(m = v_k\) prím modulust.</li>
      <li>Keressünk \(a\)-t \(\operatorname{lnko}(a, m) = 1\)-gyel, és számoljuk \(b \equiv a^{-1} \pmod m\).</li>
      <li>Az <strong>elrejtett</strong> sorozat: \(w_i \equiv a \cdot v_i \pmod m\) — ez már nem szupernövekvő!</li>
      <li><strong>Nyilvános kulcs:</strong> \(\vec w\). <strong>Titkos:</strong> \(b, m\).</li>
    </ol>
    <strong>Kódolás:</strong> \(F = \sum \varepsilon_i \cdot w_i\) (üzenet bitenkénti).<br>
    <strong>Dekódolás:</strong> \(H \equiv b \cdot F \equiv \sum \varepsilon_i \cdot v_i \pmod m\) — szupernövekvő hátizsák, lineáris időben!
  </div>
</div>
<div class="warn-box">
  <strong>10.32 Megj. — Shamir feltörése (1982).</strong>
  Shamir polinomidőben feltörte az egyszeres Merkle–Hellman rendszert!
  Megmutatta: bár \(\vec w\) nem szupernövekvő, a struktúra (szupernövekvő sorozatból
  adódó) kihasználható. Brickell 1985-ben az iterált változatot is feltörte.
  A hátizsák-titkosírás <strong>ma nem használjuk biztonsági céllal.</strong>
</div>`;

const TABS: Tab[] = [
  { id: 'intro',    label: 'Áttekintés',            content: <RichTex html={tIntro} /> },
  { id: 'rsa',      label: '10.1 RSA algoritmus',   content: <div><RichTex html={tRsa} /><RsaDemo /></div> },
  { id: 'pelda',    label: 'RSA példa + HELLO',     content: <div><RichTex html={tPelda} /><HelloEncoder /></div> },
  { id: 'aliras',   label: 'Aláírás-hitelesítés',   content: <RichTex html={tAliras} /> },
  { id: 'rsa129',   label: 'RSA-129 feltörés',      content: <RichTex html={tRsa129} /> },
  { id: 'hatizsak', label: '10.2 Hátizsák',         content: <div><RichTex html={tHatizsak} /><KnapsackDemo /></div> },
];

export default function AlgoCh10() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 10. fejezet</p>
      <h1 className="ila__title">Titkosírás nyilvános kulccsal</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
