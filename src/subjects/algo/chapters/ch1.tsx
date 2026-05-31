import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Interactive factorization challenge table
const FACTOR_ROWS: { label: string; num: string; digits: number; isPrime: boolean; status: string }[] = [
  { label: 'a)', num: String.raw`\(n_a = 440\,747\)`, digits: 6, isPrime: false, status: '613 × 719' },
  { label: 'b)', num: String.raw`\(n_b = 2\,347\,589\)`, digits: 7, isPrime: false, status: '1 483 × 1 583' },
  { label: 'c)', num: String.raw`\(n_c = 97\,189\,241\)`, digits: 8, isPrime: false, status: '7 151 × 13 591' },
  { label: 'd)', num: String.raw`\(n_d = 17\,967\,876\,255\,379\)`, digits: 14, isPrime: false, status: '81 371 × 220 814 249' },
  { label: 'e)', num: String.raw`\(n_e = 444\,113\,096\,135\,661\,846\,937\)`, digits: 21, isPrime: false, status: '3 719 977 867 × 119 385 951 211' },
  { label: 'f)', num: String.raw`\(n_f = 2^{67} - 1 = 147\,573\,952\,589\,676\,412\,927\)`, digits: 21, isPrime: false, status: '193 707 721 × 761 838 257 287 (Cole 1903)' },
  { label: 'g)', num: String.raw`\(n_g\) — 129-jegyű`, digits: 129, isPrime: false, status: 'RSA-129: p·q (feltörve 1994)' },
];

function FactorChallenge() {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(FACTOR_ROWS.length).fill(false));
  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#a78bfa' }}>1.1. Példa — Faktorizációs kihívás</span>
      <p style={{ fontSize: '.85rem', margin: '.4rem 0' }}>
        Kattints egy sorra a prím/összetett státusz felfedéséhez. (A tényleges felbontást csak a 3.25 megoldás adja.)
      </p>
      <table className="cayley" style={{ width: '100%', fontSize: '.83rem' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', width: '2.5rem' }}></th>
            <th style={{ textAlign: 'left' }}>Szám</th>
            <th style={{ textAlign: 'center', width: '5rem' }}>Jegyek</th>
            <th style={{ textAlign: 'right', width: '12rem' }}>Státusz</th>
          </tr>
        </thead>
        <tbody>
          {FACTOR_ROWS.map((row, i) => (
            <tr
              key={i}
              style={{ cursor: 'pointer', background: revealed[i] ? 'rgba(167,139,250,.08)' : undefined }}
              onClick={() => toggle(i)}
            >
              <td style={{ color: '#a78bfa', fontFamily: 'monospace', fontWeight: 700 }}>{row.label}</td>
              <td>
                <RichTex html={row.num} />
              </td>
              <td style={{ textAlign: 'center', color: '#c4b5fd', fontFamily: 'monospace' }}>{row.digits}</td>
              <td style={{ textAlign: 'right', fontSize: '.78rem' }}>
                {revealed[i] ? (
                  <span style={{ color: row.isPrime ? '#34d399' : '#fbbf24', fontWeight: 700 }}>
                    {row.isPrime ? 'prím ✓' : row.status}
                  </span>
                ) : (
                  <span style={{ color: '#64748b', fontStyle: 'italic' }}>kattints ▾</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="def-box" style={{ marginTop: '.75rem', fontSize: '.82rem' }}>
        <strong>A 129-jegyű n_g:</strong>
        <div style={{ fontFamily: 'monospace', fontSize: '.78rem', lineHeight: 1.7, marginTop: '.3rem', wordBreak: 'break-all', color: '#c4b5fd' }}>
          11438162 5757888867 6692357799 7614661201 0218296721<br />
          2423625625 6184293570 6935245733 8978305971 2356395870<br />
          50589890751 4759929002 6879543541
        </div>
      </div>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A számelmélet algoritmikus szemszögből</span>
  <p style="font-size:1rem;font-style:italic;color:#e6edf3;margin:.5rem 0">
    „Minden egész szám (lényegében) egyértelműen bontható fel prímszámok szorzatára"
  </p>
  <p style="font-size:.86rem;">— tanultuk általános iskolában, és fel is bontottunk néhány 3–4-jegyű számot.</p>
</div>
<div class="thm-box">
  <strong>A könyv tézise:</strong> az iskolában tanult műveletek nem skálázódnak. Egy 8–10 jegyű szám
  már próbára teszi a kézi módszert; a modern titkosírás <strong>500–1000 jegyű</strong> prímeket használ.
  A különbség nem fokozat, hanem <em>nagyságrend</em>: napok vs. évmilliók.
</div>
<div class="thm-box">
  <strong>Tanulság:</strong> gyors algoritmus nem létezik beható elméleti vizsgálatok nélkül. A 2., 4–7.
  fejezetek azt az elméleti minimumot adják (maradékosztályok, kongruenciák, Euklidesz, CRT, Euler-φ),
  amely nélkül a gyakorlati módszerek nem érthetők.
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A titkosírás kettős természete</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A titkosírások elvégezhetősége azon alapszik, hogy aránylag könnyen
    <strong>találunk</strong> nagyméretű (500–1000 jegyű) prímszámokat (ld. <strong>8. „Prímkeresés"</strong>),
    és aránylag könnyedén <strong>tudunk számolni</strong> velük (ld. <strong>5. „Kongruenciák"</strong>),
    míg titkosságát az biztosítja, hogy (jelenlegi ismereteink szerint) <em>ugyanekkora, de ismeretlen</em>
    számokat csak <strong>évezredekig tartó</strong> algoritmusokkal tudnánk prímtényezőkre bontani.
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.75rem 0">
  <thead>
    <tr><th style="text-align:left">Művelet</th><th style="text-align:left">Idő (n-jegyű számra)</th><th style="text-align:left">Fejezet</th></tr>
  </thead>
  <tbody>
    <tr><td>Prímgenerálás</td><td>\(O(n^4)\) — másodpercek</td><td>8., 9.</td></tr>
    <tr><td>Hatványozás \(\bmod\, m\)</td><td>\(O(n^3)\) — ezredmásodperc</td><td>5., 6.6</td></tr>
    <tr><td>Prímtesztelés (Miller–Rabin)</td><td>\(O(n^3)\) — másodperc</td><td>7.4</td></tr>
    <tr><td>Faktorizáció (legjobb ismert)</td><td>\(\exp(n^{1/3})\) — <strong>évek vagy évszázadok</strong></td><td>7.</td></tr>
  </tbody>
</table>`;

const t4 = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A könyvhöz mellékelt öt program</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Nem díszes megjelenítés volt a cél, hanem a könyvben leírt algoritmusok <strong>lépésenkénti</strong>
    bemutatása.
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:.6rem;margin-top:.6rem">
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Prim1d.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Prímtesztelés és faktorizáció. Próbaosztás, Fermat-teszt, Miller–Rabin, Pollard \(\rho\) — lépésenként.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">EuklDio2D.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Euklidesz-algoritmus és \(ax+by=c\) Diophantoszi egyenletek megoldása Bézout-együtthatókkal.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">HatvModDD.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Nagy kitevőjű hatványozás \(\bmod\, m\) — bináris gyorshatványozás.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Kinai3D.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Kínai Maradéktétel kis modulusokra — szimultán kongruencia-rendszer megoldása.</p></div>
    <div class="def-box"><strong style="color:#a78bfa;font-family:monospace">Poliosz5.exe</strong><p style="font-size:.78rem;margin:.3rem 0">Magasabbfokú kongruenciák megoldása mod \(p\) — polinom-faktorizáció véges testen.</p></div>
  </div>
  <div class="warn-box" style="margin-top:.75rem">
    ⚠ A programok kizárólag magáncélra használhatók, bárminemű üzleti alkalmazásuk szigorúan tilos!
  </div>
</div>`;

const t5 = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">1.1 § — A könyvben használt jelölések</span>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Számhalmazok</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{N}\)</td><td>természetes számok: \(\mathbb{N} := \{0, 1, 2, \dots\}\) (0 is benne van!)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{Z}\)</td><td>egész számok halmaza</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{P}\)</td><td>prímszámok halmaza</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Halmaz-jelölések</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th><th style="text-align:left">Példa</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\#\{\dots\}\) vagy \(|\{\dots\}|\)</td><td>halmaz <strong>számossága</strong></td><td>\(\#\{2,3,5,7\} = 4\)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathfrak{p}(n)\)</td><td>\(n\) prímosztóinak <strong>multihalmaza</strong></td><td>\(\mathfrak{p}(12) = \{2, 2, 3\}\)</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Egészrész-függvények</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\operatorname{int}(x) = \lfloor x \rfloor\)</td><td><strong>alsó egészrész</strong> — nemnegatív \(x\)-re: lefelé csonkítás</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\lceil x \rceil\)</td><td><strong>felső egészrész</strong> — nemnegatív \(x\)-re: felfelé kerekítés</td></tr>
    </tbody>
  </table>

  <div class="thm-box" style="margin-top:.6rem">
    <strong>Tulajdonság.</strong> Minden \(x \in \mathbb{R}\) valós számra:
    \[\lfloor x \rfloor,\ \lceil x \rceil \in \mathbb{Z}, \qquad \lfloor x \rfloor \leq x \leq \lceil x \rceil\]
    és egyenlőség csak \(x \in \mathbb{Z}\) egész számoknál van.
  </div>

  <div class="def-box" style="margin-top:.6rem">
    A \(\square\) szimbólum egy-egy gondolat / Definíció / Megjegyzés / Állítás / Tétel / Bizonyítás végét jelöli.
  </div>
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'kihivas', label: '1.1 Kihívás', content: <FactorChallenge /> },
  { id: 'titkosiras', label: 'Titkosírás', content: <RichTex html={t3} /> },
  { id: 'programok', label: 'Programok', content: <RichTex html={t4} /> },
  { id: 'jelolesek', label: '1.1 Jelölések', content: <RichTex html={t5} /> },
];

export default function AlgoCh1() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 1. fejezet</p>
      <h1 className="ila__title">Bevezetés</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
