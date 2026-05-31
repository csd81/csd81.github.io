import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

/* ════ Tab 2: Faktorizációs kihívás ════ */
const FACTOR_ROWS: { label: string; num: string; digits: number; isPrime: boolean; status: string }[] = [
  { label: 'a)', num: String.raw`\(n_a = 440\,747\)`, digits: 6, isPrime: false, status: '613 × 719' },
  { label: 'b)', num: String.raw`\(n_b = 2\,347\,589\)`, digits: 7, isPrime: false, status: '1 483 × 1 583' },
  { label: 'c)', num: String.raw`\(n_c = 97\,189\,241\)`, digits: 8, isPrime: false, status: '7 151 × 13 591' },
  { label: 'd)', num: String.raw`\(n_d = 17\,967\,876\,255\,379\)`, digits: 14, isPrime: false, status: '81 371 × 220 814 249' },
  { label: 'e)', num: String.raw`\(n_e = 444\,113\,096\,135\,661\,846\,937\)`, digits: 21, isPrime: false, status: '3 719 977 867 × 119 385 951 211' },
  { label: 'f)', num: String.raw`\(n_f = 2^{67} - 1 = 147\,573\,952\,589\,676\,412\,927\)`, digits: 21, isPrime: false, status: '193 707 721 × 761 838 257 287 (Cole 1903)' },
  { label: 'g)', num: String.raw`\(n_g\) — 129-jegyű (lásd alább)`, digits: 129, isPrime: false, status: 'RSA-129: feltörve 1994, 600 gép, 8 hónap' },
];

function FactorChallenge() {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(FACTOR_ROWS.length).fill(false));
  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));
  return (
    <div>
      <div className="def-box">
        <span className="lbl" style={{ color: '#a78bfa' }}>1.1. Példa — Faktorizációs kihívás</span>
        <p style={{ fontSize: '.86rem', margin: '.4rem 0' }}>
          Faktorizáljuk (bontsuk szorzótényezőkre) az alábbi számokat, vagy győződjünk meg róla, hogy
          prímszámok. <strong>Kattints egy sorra</strong> a státusz felfedéséhez.
        </p>
        <div style={{ overflowX: 'auto' }}>
          <table className="cayley" style={{ width: '100%', fontSize: '.83rem' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', width: '2.5rem' }}></th>
                <th style={{ textAlign: 'left' }}>Szám</th>
                <th style={{ textAlign: 'center', width: '5rem' }}>Jegyek</th>
                <th style={{ textAlign: 'right', width: '14rem' }}>Státusz</th>
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
                  <td><RichTex html={row.num} /></td>
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
        </div>
      </div>

      <div className="info-box" style={{ marginTop: '.75rem' }}>
        <span className="lbl" style={{ color: '#c4b5fd' }}>A 129-jegyű n_g</span>
        <div style={{ fontFamily: 'monospace', fontSize: '.82rem', lineHeight: 1.7, wordBreak: 'break-all', color: '#c4b5fd', background: '#0e1014', border: '1px solid #1e2533', borderRadius: '6px', padding: '.7rem .9rem' }}>
          11438162 5757888867 6692357799 7614661201<br />
          0218296721 2423625625 6184293570 6935245733<br />
          8978305971 2356395870 50589890751 4759929002<br />
          6879543541
        </div>
      </div>

      <div className="ex-box" style={{ marginTop: '.75rem' }}>
        <strong>Kedves Olvasónk</strong>, próbálja meg a fenti számokat faktorizálni:
        <em>kézzel</em> (mint a XIX. században), <em>egyszerű számológéppel</em>, saját kis programmal,
        vagy a könyvhöz mellékelt <code>Prim1d.exe</code> programmal — de egyelőre <strong>ne</strong>
        használjon internetet! (A megfejtést se nézze meg a 3.25. Megoldásban.)
      </div>

      <div className="thm-box">
        <strong>Megjegyzés.</strong> A „kattints" mező csak azt árulja el, hogy a szám prím-e vagy összetett —
        a <em>tényleges felbontást</em> nem. Az <RichTex html={String.raw`\(n_f = 2^{67}-1\)`} style={{ display: 'inline' }} /> famous Mersenne-szám:
        Mersenne 1644-ben tévedésből prímnek vélte; Cole 1903-ban a New York-i Matematikai Társaság
        előadásán szótlanul felírta a táblára a{' '}
        <RichTex html={String.raw`\(193\,707\,721 \times 761\,838\,257\,287\)`} style={{ display: 'inline' }} /> szorzást.
      </div>
    </div>
  );
}

/* ════ Static tab content ════ */

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A számelmélet algoritmikus szemszögből</span>
  <p style="font-size:1.02rem;font-style:italic;color:#e6edf3;margin:.5rem 0">
    „Minden egész szám (lényegében) egyértelműen bontható fel prímszámok szorzatára"
  </p>
  <p style="font-size:.86rem;">— tanultuk általános iskolában, és fel is bontottunk néhány 3–4-jegyű számot.</p>
</div>
<div class="def-box">
  <strong>A könyv tézise:</strong> az iskolában tanult műveletek nem skálázódnak. Egy
  8–10 jegyű szám már próbára teszi a kézi módszert; a modern titkosírás <strong>500–1000 jegyű</strong>
  prímeket használ. A különbség nem fokozat, hanem <em>nagyságrend</em>: napok vs. évmilliók.
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .65rem">Miért nehéz a nagy számok faktorizációja?</h5>
  <p style="font-size:.87rem;margin:0 0 .6rem">
    A bajok már a 8–10 jegyű számokkal elkezdődnek, pedig modern alkalmazásokban
    többszáz vagy akár ezer jegyű egész- és prímszámokkal kellene számolnunk. A könyv lényegét a
    <strong>3.2. „A számelmélet algoritmikus problémái"</strong> alfejezet fejti ki részletesen:
    a tényleges számítások mennyi időt is igényelnek, hogyan csökkenthetők
    <em>több évmillió (!)</em> helyett pár napra.
  </p>
  <p style="font-size:.87rem;margin:0 0 .4rem">Ez vonatkozik egyrészt</p>
  <ul style="font-size:.87rem;line-height:1.75;margin:.2rem 0 .6rem">
    <li>a számelméletben felmerülő számítási problémák — prímtesztelés, faktorizáció, lnko, lkkt — kiszámításának nehézségeire és azok megoldási módszereire,</li>
    <li>másrészt a számelmélet felhasználásaira a modern számítástechnikában (számítások gyorsítása, titkosírások, kódelmélet).</li>
  </ul>
</div>
<div class="thm-box">
  <strong>Tanulság:</strong> gyors algoritmus nem létezik beható elméleti vizsgálatok nélkül. A 2., 4–7.
  fejezetek azt az elméleti minimumot adják (maradékosztályok, kongruenciák, Euklidesz, CRT, Euler-φ),
  amely nélkül a gyakorlati módszerek nem érthetők.
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">A titkosírás kettős természete</span>
  <p style="font-size:.87rem;margin:.5rem 0">
    A titkosírások elvégezhetősége azon alapszik, hogy aránylag könnyen
  </p>
  <ul style="font-size:.87rem;line-height:1.75;margin:.4rem 0 .6rem">
    <li><strong>találunk</strong> nagyméretű (500–1000 jegyű) prímszámokat (ld. <strong>8. „Prímkeresés"</strong> fejezet),</li>
    <li><strong>tudunk számolni</strong> velük (ld. <strong>5. „Kongruenciák és maradékosztályok"</strong> fejezet),</li>
  </ul>
  <p style="font-size:.87rem;margin:0">
    míg titkosságát az biztosítja, hogy (jelenlegi ismereteink szerint) <em>ugyanekkora, de
    ismeretlen</em> számokat csak <strong>évezredekig tartó</strong> algoritmusokkal tudnánk
    prímtényezőkre bontani (ld. <strong>7. „Prímtesztelés és számok felbontása"</strong> fejezet).
  </p>
</div>
<div class="def-box">
  <strong>Konvenció.</strong> Egy egész számot akkor nevezünk <em>„ismeretlen"-nek</em>, ha nem ismerjük
  prímtényezős felbontását.
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .65rem">Aszimmetria, amelyre az RSA épül</h5>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.25rem 0">
    <thead>
      <tr><th style="text-align:left">Művelet</th><th style="text-align:left">Idő (\(n\)-jegyű számra)</th><th style="text-align:left">Fejezet</th></tr>
    </thead>
    <tbody>
      <tr><td style="color:#c4b5fd">Prímgenerálás</td><td>\(O(n^4)\) — másodpercek</td><td>8., 9.</td></tr>
      <tr><td style="color:#c4b5fd">Hatványozás \(\bmod\, m\)</td><td>\(O(n^3)\) — ezredmásodperc</td><td>5., 6.6</td></tr>
      <tr><td style="color:#c4b5fd">Prímtesztelés (Miller–Rabin)</td><td>\(O(n^3)\) — másodperc</td><td>7.4</td></tr>
      <tr><td style="color:#c4b5fd">Faktorizáció (legjobb ismert)</td><td>\(\exp(n^{1/3})\) — <strong>évek vagy évszázadok</strong></td><td>7.</td></tr>
    </tbody>
  </table>
  <p style="font-size:.86rem;margin:.7rem 0 0">
    Könyvünk bevezető jellegű — csak néhány egyszerűbb szemléltető algoritmust mutat,
    és inkább részletesebb művekre hivatkozik. A téma legátfogóbb ismertetése
    ma is <strong>Donald Knuth</strong> [KD] művében (TAOCP vol.&nbsp;2) található.
  </p>
</div>`;

const t4 = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">A könyvhöz mellékelt öt program</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Nem díszes megjelenítés volt a cél, hanem a könyvben leírt algoritmusok
    <strong>lépésenkénti</strong> bemutatása. Az output-szöveg szerkeszthető; egyszerűsége miatt
    az adatok beírása nem „szerkesztősorban" történik — legyünk körültekintőek.
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:.65rem;margin-top:.75rem">
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Prim1d.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Prímtesztelés és faktorizáció. Próbaosztás, Fermat-teszt, Miller–Rabin, Pollard \(\rho\) — lépésenként.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">EuklDio2D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Euklidesz-algoritmus és \(ax+by=c\) Diophantoszi egyenletek megoldása Bézout-együtthatókkal.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">HatvModDD.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Nagy kitevőjű hatványozás \(\bmod\, m\) — bináris (négyzetreemeléses) gyorshatványozás.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Kinai3D.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Kínai Maradéktétel kis modulusokra — szimultán kongruencia-rendszer megoldása.</p>
    </div>
    <div class="def-box">
      <strong style="color:#a78bfa;font-family:monospace">Poliosz5.exe</strong>
      <p style="font-size:.78rem;margin:.3rem 0 0">Magasabbfokú kongruenciák megoldása mod \(p\) — polinom-faktorizáció véges testen.</p>
    </div>
  </div>
  <div class="warn-box" style="margin-top:1rem">
    ⚠ <strong>A programok kizárólag magáncélra használhatók, bárminemű üzleti alkalmazásuk szigorúan tilos!</strong>
  </div>
  <div class="thm-box" style="margin-top:.5rem">
    Jól használhatók „számológép"-ként kisebb feladatok (pl. RSA) megoldásához és tanulmányozásához.
    A részletes leírás a <strong>11. „Számítógépes megvalósítások"</strong> fejezetben olvasható.
  </div>
</div>
<div class="info-box">
  <h5 style="color:#a78bfa;font-weight:700;margin:0 0 .6rem">Köszönet</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .6rem">
    A szerzők köszönetüket fejezik ki kedves tanáraiknak:
    <strong>Szalay Mihálynak</strong>, <strong>Freud Róbertnak</strong> és
    <strong>Csirmaz Lászlónak</strong>; külön köszönet a Lektor (Dr.&nbsp;Hujter Mihály, BME)
    lelkiismeretes munkájának.
  </p>
  <p style="font-size:.87rem;line-height:1.75;margin:0">
    A könyv újszerű jelölésekkel — pl. \(\mathfrak{p}(n)\), \(\Delta\) és \(\nabla\) jelek
    (lásd 3.9. és 3.33. Definíciók), atomelmélet és Boole-algebrák — igyekszik az anyag mélyebb
    megértését elősegíteni. A <em>Függelékben</em> az oszthatóság fogalmát Euklideszi gyűrűkre
    terjesztjük ki — ezek a vizsgálatok többek között a <strong>Fermat-sejtés</strong>
    megoldásában játszottak kulcsszerepet.
  </p>
</div>`;

const t5 = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">1.1 § — A könyvben használt jelölések</span>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Számhalmazok</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{N}\)</td><td>természetes számok halmaza: \(\mathbb{N} := \{0, 1, 2, \dots\}\) &nbsp;<span style="color:#64748b;">(megj.: a 0 is benne van!)</span></td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{Z}\)</td><td>egész számok halmaza</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathbb{P}\)</td><td>prímszámok halmaza</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Halmaz-jelölések</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th><th style="text-align:left">Példa</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\#\{\dots\}\) &nbsp; \(|\{\dots\}|\)</td><td>halmaz <strong>számossága</strong></td><td>\(\#\{2,3,5,7\} = 4\)</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\mathfrak{p}(n)\)</td><td>\(n\) prímosztóinak <strong>multihalmaza</strong> &nbsp;(\(n \in \mathbb{N}\))</td><td>\(\mathfrak{p}(12) = \{2, 2, 3\}\)</td></tr>
    </tbody>
  </table>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Egészrész-függvények</h5>
  <table class="cayley" style="width:100%;font-size:.83rem">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\operatorname{int}(x) = [x] = \lfloor x \rfloor\)</td><td><strong>alsó egészrész</strong> — az \(x\)-nél nem nagyobb egész számok közül a legnagyobb. Nemnegatív \(x\)-re: „lefelé csonkítás".</td></tr>
      <tr><td style="font-family:monospace;color:#c4b5fd">\(\lceil x \rceil\)</td><td><strong>felső egészrész</strong> — az \(x\)-nél nem kisebb egész számok közül a legkisebb. Nemnegatív \(x\)-re: „felfelé kerekítés".</td></tr>
    </tbody>
  </table>

  <div class="thm-box" style="margin-top:.6rem">
    <strong>Tulajdonság.</strong> Minden \(x \in \mathbb{R}\) valós számra:
    \[\lfloor x \rfloor,\ \lceil x \rceil \in \mathbb{Z}, \qquad \lfloor x \rfloor \leq x \leq \lceil x \rceil\]
    és egyenlőség csak \(x \in \mathbb{Z}\) egész számoknál van.
  </div>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Sorozat-jelölések</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Tudjuk, hogy egy (véges vagy végtelen) sorozat semmi esetre sem részhalmaz, de
    kényelmesek az \((a_n) \subset \mathbb{N}\), \((a_n) \subset \mathbb{R}\), illetve
    \((m_1, m_2, \dots, m_k) \subset \mathbb{R}\) jelölések.
  </p>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Tizedesvessző</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Sok számítógép-program tizedes <em>pontot</em> használ, mi mégis maradunk a
    tizedes/bináris <strong>vesszőnél</strong>, hiszen Magyarországon a tudományos- és közéletben,
    oktatásban és tankönyvekben (és a Windows-rendszerben is) ez az elterjedt.
  </p>

  <h5 style="color:#c4b5fd;font-weight:700;margin:.75rem 0 .4rem">Algebrai fogalmak</h5>
  <p style="font-size:.87rem;line-height:1.75;margin:0 0 .5rem">
    Néhány absztrakt matematikai fogalmat — Boole-algebrák, gyűrűk, testek — a
    <strong>Függelékben (13. fejezet)</strong> vázlatosan ismertetünk.
  </p>

  <div class="def-box" style="margin-top:.5rem">
    A &nbsp;\(\square\)&nbsp; szimbólum egy-egy gondolat / Definíció / Megjegyzés / Állítás /
    Tétel / Bizonyítás végét jelöli.
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
