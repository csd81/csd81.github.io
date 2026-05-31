import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

const DIGIT_ROWS: { label: string; expr: string; log10: string; digits: string }[] = [
  { label: 'a', expr: String.raw`\(a = 2^7 \cdot 3^{43} \cdot 11^{93} \cdot 39^{45} \cdot 101^2\)`, log10: '≈ 195,0794', digits: '196' },
  { label: 'b₁₂', expr: String.raw`\(b_{1,2} = 697\,053\,813 \cdot 2^{16352} \pm 1\) (ikerprímek)`, log10: '≈ 4931,286', digits: '4 932' },
  { label: 'c₁₂', expr: String.raw`\(c_{1,2} = 242\,206\,083 \cdot 2^{38880} \pm 1\) (ikerprímek)`, log10: '≈ 11 712,430', digits: '11 713' },
  { label: 'd₁₂', expr: String.raw`\(d_{1,2} = 16\,869\,987\,339\,975 \cdot 2^{171960} \pm 1\) (2005-ös rekord)`, log10: '≈ 51 778,345', digits: '51 779' },
  { label: 'M', expr: String.raw`\(M_{43\,112\,609} = 2^{43\,112\,609} - 1\) (Mersenne-prím)`, log10: '≈ 12 978 188,5', digits: '12 978 189 (12 millió jegy!)' },
];

function DigitCounter() {
  const [revealed, setRevealed] = useState<boolean[]>(new Array(DIGIT_ROWS.length).fill(false));
  const toggle = (i: number) => setRevealed((r) => r.map((v, j) => (j === i ? !v : v)));
  return (
    <div className="info-box" style={{ overflowX: 'auto' }}>
      <span className="lbl" style={{ color: '#a78bfa' }}>2.12 Példa — Hány jegyűek ezek a számok?</span>
      <p style={{ fontSize: '.83rem', margin: '.4rem 0' }}>Kattints egy sorra a jegyesszám felfedéséhez.</p>
      <table className="cayley" style={{ width: '100%', fontSize: '.82rem' }}>
        <thead><tr><th style={{ textAlign: 'left', width: '3rem' }}>Jel</th><th style={{ textAlign: 'left' }}>Kifejezés</th><th style={{ textAlign: 'right', width: '8rem' }}>Jegyek</th></tr></thead>
        <tbody>
          {DIGIT_ROWS.map((row, i) => (
            <tr key={i} style={{ cursor: 'pointer', background: revealed[i] ? 'rgba(167,139,250,.08)' : undefined }} onClick={() => toggle(i)}>
              <td style={{ color: '#a78bfa', fontFamily: 'monospace', fontWeight: 700 }}>{row.label}</td>
              <td><RichTex html={row.expr} /></td>
              <td style={{ textAlign: 'right', fontSize: '.78rem' }}>
                {revealed[i]
                  ? <span style={{ color: '#fbbf24', fontWeight: 700 }}>{row.digits}</span>
                  : <span style={{ color: '#64748b', fontStyle: 'italic' }}>kattints ▾</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.1 § — Mit nevezünk algoritmusnak?</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Az algoritmus fogalmát precízen is lehet definiálni (lásd [SzI2]), nekünk azonban elég az alábbi intuitív magyarázat:
  </p>
  <p style="font-size:.86rem">
    „A probléma megadása után a számítógép <strong>véges idő</strong> után megáll, és <strong>helyes</strong>
    (pontos) eredményt ad" — az ilyen algoritmusokat <strong>determinisztikus</strong> algoritmusoknak hívják.
  </p>
</div>
<div class="thm-box">
  <strong>Bonyolultság.</strong> Az algoritmusok futásának gyorsaságát, időigényét az algoritmus
  (pontosabban az általa megoldott probléma) <strong>bonyolultságának</strong> nevezzük.
</div>
<ul style="font-size:.86rem;line-height:1.8">
  <li><strong>Determinisztikus</strong> — minden futás után megáll, helyes eredményt ad, ismételhető.</li>
  <li><strong>Valószínűségi</strong> — megáll, de néha csak „99% eséllyel az eredmény X" típusú választ kapunk.</li>
  <li><strong>Nemdeterminisztikus</strong> — nem mindig áll meg, nem mindig ad helyes választ. <em>Könyvünkben nem foglalkozunk velük.</em></li>
</ul>`;

const t2 = String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">2.1 Definíció — Aszimptotikus jelölések</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Legyenek \(f, g: \mathbb{N} \to \mathbb{R}^+\) pozitív értékű függvények.
    A [CLR] jelölésrendszerét használjuk; a \(c_1, c_2\) konstansok elnyelik a kerekítési hibákat.
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.82rem">
  <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Név</th><th style="text-align:left">Feltétel</th><th style="text-align:left">Határérték</th></tr></thead>
  <tbody>
    <tr><td style="font-family:monospace;color:#c4b5fd">\(f = O(g)\)</td><td><strong>nagy ordó</strong></td><td>\(\exists c_2 > 0:\ f(n) < c_2 g(n)\)</td><td>\(\limsup f/g < \infty\)</td></tr>
    <tr><td style="font-family:monospace;color:#c4b5fd">\(f = \Theta(g)\)</td><td><strong>tétha</strong></td><td>\(\exists c_1,c_2 > 0:\ c_1 g < f < c_2 g\)</td><td>\(0 < \liminf, \limsup < \infty\)</td></tr>
    <tr><td style="font-family:monospace;color:#c4b5fd">\(f = \Omega(g)\)</td><td><strong>omega</strong></td><td>\(\exists c_1 > 0:\ c_1 g(n) < f(n)\)</td><td>\(\liminf f/g > 0\)</td></tr>
    <tr><td style="font-family:monospace;color:#c4b5fd">\(f = o(g)\)</td><td><strong>kis ordó</strong></td><td>\(\forall c_2 > 0:\ f(n) < c_2 g(n)\)</td><td>\(\lim f/g = 0\)</td></tr>
    <tr><td style="font-family:monospace;color:#c4b5fd">\(f = \omega(g)\)</td><td><strong>kis omega</strong></td><td>\(\forall c_1 > 0:\ c_1 g \leq f\)</td><td>\(\lim f/g = \infty\)</td></tr>
  </tbody>
</table>
<div class="thm-box" style="margin-top:.6rem">
  Lényegében az \(O\) és \(\Theta\) jelölések a <em>„körülbelül"</em> szó matematikai szinonimái.
  A jelöléseknek csak akkor van értelmük, ha \(f\) bonyolult és \(g\) egyszerű.
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2 Definíció — Növekedési osztályok</span>
  <p style="font-size:.85rem;margin:.4rem 0">
    \(f = \Theta(g)\) esetén az \(f\) függvényt az alábbi osztályok egyikébe soroljuk (növekvő sorrendben):
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.83rem">
  <thead><tr><th style="text-align:left">\(g(n)\)</th><th style="text-align:left">Név</th><th style="text-align:right">\(n=100\) értéke</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(c\)</td><td><strong>konstans</strong></td><td style="text-align:right">1</td></tr>
    <tr><td style="color:#c4b5fd">\(\log_a(n)\)</td><td><strong>logaritmikus</strong></td><td style="text-align:right">\(\approx 6{,}6\)</td></tr>
    <tr><td style="color:#c4b5fd">\(n\)</td><td><strong>lineáris</strong></td><td style="text-align:right">100</td></tr>
    <tr><td style="color:#c4b5fd">\(n \log_a(n)\)</td><td><strong>szemilineáris</strong></td><td style="text-align:right">\(\approx 664\)</td></tr>
    <tr><td style="color:#c4b5fd">\(n^2\)</td><td><strong>négyzetes</strong></td><td style="text-align:right">10 000</td></tr>
    <tr><td style="color:#c4b5fd">\(n^k\) \((k>1)\)</td><td><strong>polinomiális</strong></td><td style="text-align:right">\(10^{2k}\)</td></tr>
    <tr><td style="color:#c4b5fd">\(a^n\) \((a>1)\)</td><td><strong>exponenciális</strong></td><td style="text-align:right">\(2^{100}\approx1{,}3\times10^{30}\)</td></tr>
    <tr><td style="color:#c4b5fd">\(n^n\)</td><td><strong>hiperexponenciális</strong></td><td style="text-align:right">\(10^{200}\)</td></tr>
  </tbody>
</table>
<div class="thm-box" style="margin-top:.6rem">
  <strong>2.4 Tétel — A növekedési hierarchia.</strong> \(a,b,k \in \mathbb{R}^+\), \(1 < b\) esetén:
  \[\log_a(n) \;\prec\; n^k \;\prec\; b^n \;\prec\; n^n\]
</div>
<div class="thm-box">
  <strong>2.6 Tétel — Stirling-formula:</strong>
  \[n! \;\sim\; \left(\frac{n}{e}\right)^n \cdot \sqrt{2\pi n}\]
  Más alakja: \(\log(n!) \sim n \log n - n.\)
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.6rem 0">
  <thead><tr><th style="text-align:left">Osztály</th><th style="text-align:left">Ítélet</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(O(n)\), \(O(n \log n)\)</td><td style="color:#34d399;font-weight:700">jó</td></tr>
    <tr><td style="color:#c4b5fd">\(O(n^2)\)</td><td style="color:#34d399;font-weight:700">még jónak tartjuk</td></tr>
    <tr><td style="color:#c4b5fd">\(O(n^k)\) polinomiális</td><td style="color:#fbbf24;font-weight:700">elfogadható, „gyors"</td></tr>
    <tr><td style="color:#c4b5fd">\(O(2^n)\) exponenciális</td><td style="color:#ef4444;font-weight:700">kibírhatatlanul lassú</td></tr>
    <tr><td style="color:#c4b5fd">\(O(n^n)\) hiperexponenciális</td><td style="color:#94a3b8;font-style:italic">…-nak tartjuk</td></tr>
  </tbody>
</table>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2.1 — Az input mérete</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    <strong>2.9 Megjegyzés.</strong> Amennyiben az input egy \(n \in \mathbb{N}\) természetes szám, akkor
    az input mérete = az \(n\) <strong>számjegyeinek száma</strong>, <em>nem \(n\) értéke maga!</em>
  </p>
  \[\operatorname{in}(n) := \lfloor \log(n) \rfloor + 1\]
</div>
<div class="warn-box">
  <strong>2.10 Példa — Miért exponenciális a próbaosztás?</strong>
  Ha egy \(k=100\) jegyű \(n\) számot adunk a gépnek, mi csak 100 karaktert írtunk be —
  de \(n\) értéke \(\approx 10^{100}\). Az \(O(\sqrt n) = O(10^{k/2})\) lépés
  — <strong>exponenciális!</strong> az input mérete szerint.
</div>
<div class="def-box" style="margin-top:.6rem">
  <strong>2.11 Definíció — \(\langle n \rangle\) bináris jegyszám:</strong>
  \[\langle n \rangle := \lfloor \log_2(n) \rfloor + 1\]
  Az \(n\) szám bináris bitjeinek száma.
</div>`;

const t5 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">2.2.2 § — Az alapműveletek bonyolultsága</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    A modern titkosírásokban többszázjegyű számokkal kell <em>exponenciálisan sok</em> műveletet végeznünk.
    Legyen \(k = \operatorname{in}(n)\) az input méret.
  </p>
</div>
<table class="cayley" style="width:100%;font-size:.83rem">
  <thead><tr><th style="text-align:left">Művelet</th><th style="text-align:left">Iskolai</th><th style="text-align:left">Legjobb ismert</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(m + n\), \(m - n\)</td><td>\(O(k)\) lineáris</td><td>\(O(k)\) (gyorsabb elvileg sem)</td></tr>
    <tr><td style="color:#c4b5fd">\(m \cdot n\)</td><td>\(O(k^2)\) négyzetes</td><td>\(O(k \log k \log\log k)\) (Schönhage–Strassen, FFT)</td></tr>
    <tr><td style="color:#c4b5fd">\(m \div n\)</td><td>\(O(k^2)\)</td><td>\(O(k \log k \log\log k)\)</td></tr>
    <tr><td style="color:#c4b5fd">\(u^k \bmod m\)</td><td colspan="2">\(O(k \cdot (\log m)^2)\) — <strong>szemilineáris</strong> (lásd 6.6.)</td></tr>
  </tbody>
</table>
<div class="thm-box" style="margin-top:.6rem">
  <strong>Karacuba 1962</strong> — az első szubkvadratikus szorzás. Két \(k\)-jegyű szám szorzásához
  \(k^2\) helyett elegendő \(27 \cdot k^{\log_2 3} \approx 27 \cdot k^{1{,}585}\) lépés. Lényege:
  \(A = a_1 \cdot 10^{k/2} + a_0\), \(B = b_1 \cdot 10^{k/2} + b_0\) szorzata 3 kisebb szorzással:
  \(P_1 = a_1 b_1,\; P_2 = a_0 b_0,\; P_3 = (a_1+a_0)(b_1+b_0)-P_1-P_2.\)
  \[AB = P_1 \cdot 10^k + P_3 \cdot 10^{k/2} + P_2\]
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'bigo', label: 'O, Θ, Ω, o, ω', content: <RichTex html={t2} /> },
  { id: 'scale', label: 'Növekedési skála', content: <RichTex html={t3} /> },
  { id: 'meret', label: '2.2.1 Input mérete', content: <div><RichTex html={t4} /><DigitCounter /></div> },
  { id: 'muvelet', label: '2.2.2 Műveletek', content: <RichTex html={t5} /> },
];

export default function AlgoCh2() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 2. fejezet</p>
      <h1 className="ila__title">Algoritmusok sebessége</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
