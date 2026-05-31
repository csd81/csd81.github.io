import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Interactive Euclidean algorithm calculator
function EuclidCalc() {
  const [a, setA] = useState(9867);
  const [b, setB] = useState(8855);

  const steps: { a: number; b: number; q: number; r: number }[] = [];
  let aa = Math.abs(a), bb = Math.abs(b);
  if (aa < bb) { const tmp = aa; aa = bb; bb = tmp; }
  let limit = 0;
  while (bb > 0 && limit < 30) {
    const q = Math.floor(aa / bb);
    const r = aa % bb;
    steps.push({ a: aa, b: bb, q, r });
    aa = bb;
    bb = r;
    limit++;
  }
  const gcd = aa;

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>Interaktív Euklideszi algoritmus</span>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>a = <input type="number" className="ila-num" value={a} onChange={(e) => setA(+e.target.value)} /></span>
        <span>b = <input type="number" className="ila-num" value={b} onChange={(e) => setB(+e.target.value)} /></span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table className="cayley" style={{ width: '100%', fontFamily: 'monospace', fontSize: '.82rem' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left' }}>Osztandó</th>
              <th style={{ textAlign: 'center' }}>=</th>
              <th style={{ textAlign: 'left' }}>Osztó · q</th>
              <th style={{ textAlign: 'center' }}>+</th>
              <th style={{ textAlign: 'left' }}>maradék</th>
            </tr>
          </thead>
          <tbody>
            {steps.map((s, i) => (
              <tr key={i} style={s.r === 0 ? { background: 'rgba(167,139,250,.12)' } : undefined}>
                <td>{s.a}</td>
                <td style={{ textAlign: 'center' }}>=</td>
                <td>{s.b} · {s.q}</td>
                <td style={{ textAlign: 'center' }}>+</td>
                <td style={{ color: s.r === 0 ? '#fbbf24' : undefined, fontWeight: s.r === 0 ? 700 : undefined }}>
                  {s.r}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="def-box" style={{ marginTop: '.6rem', fontWeight: 700, fontSize: '.9rem' }}>
        lnko({Math.abs(a)}, {Math.abs(b)}) = <span style={{ color: '#fbbf24' }}>{gcd}</span>
        &nbsp;&nbsp;<span style={{ color: '#8892a4', fontWeight: 400, fontSize: '.8rem' }}>({steps.length} lépés)</span>
      </div>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4. fejezet — Maradékos osztás és Euklidesz</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    A 3.2. alfejezetben láttuk, hogy nagy számok prímtényezőkre bontása <em>gyakorlatilag lehetetlen</em>.
    Mégis, \(\operatorname{lnko}(a, b)\) kiszámítására van egy meglepően egyszerű és gyors algoritmus,
    amelyet már több mint <strong>2300 éve</strong> felfedeztek — és máig a legjobbak közé tartozik.
  </p>
</div>
<div class="info-box">
  <strong>Alkalmazások (előretekintés):</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Relatív prímek</strong> ellenőrzése és keresése</li>
    <li><strong>Törtek</strong> egyszerűsítése</li>
    <li><strong>Lineáris Diophantoszi egyenletek</strong> (\(ax + by = c\)) — 5. fejezet</li>
    <li><strong>Kínai maradéktétel</strong> — 7. fejezet</li>
    <li><strong>Multiplikatív inverz</strong> \(\bmod\, m\) — RSA-kulcsgenerálás (10. fejezet)</li>
  </ul>
</div>`;

const t2 = String.raw`
<div class="thm-box">
  <strong>4.1 Tétel — Maradékos osztás.</strong>
  Minden \(a \in \mathbb{Z}\) és \(b > 0\) egész számokhoz létezik <strong>egyértelműen meghatározott</strong>
  \(q, r \in \mathbb{Z}\), amelyre
  \[a = b \cdot q + r \quad \text{és} \quad 0 \leq r &lt; b.\]
</div>
<div class="def-box">
  Meglepő módon a későbbiekben <strong>nem a hányados</strong>, hanem a <strong>maradék</strong> \(r\) lesz a lényeges.
  Programnyelvekben: <code>r := a mod b</code> &nbsp;(Python: <code>a % b</code>)
</div>
<div class="thm-box">
  <strong>4.2 Megjegyzés — Általánosítás más gyűrűkre.</strong>
  A maradékos osztás érvényes \(\mathbb{R}[x]\) polinomokban, \(\mathbb{Z}[i]\) Gauss-egészekben,
  \(\mathbb{Z}[\rho]\) Euler-egészekben is — ezért a 4–7. fejezetek minden Euklideszi gyűrűre érvényesek.
</div>`;

const t3 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">4.3 Algoritmus — Euklideszi algoritmus</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Adott \(a, b \in \mathbb{Z}\) esetén ismételten alkalmazzuk a maradékos osztást:
  </p>
  \[\begin{aligned}
    a &= b \cdot q_1 + r_1, & 0 &\lt r_1 &lt |b| \\
    b &= r_1 \cdot q_2 + r_2, & 0 &\lt r_2 &lt r_1 \\
    &\vdots \\
    r_{m-1} &= r_m \cdot q_{m+1} & \text{(itt }&\, r_{m+1} = 0\text{)}
  \end{aligned}\]
  <div class="thm-box">
    Az algoritmus akkor áll meg, amikor \(r_{m+1} = 0\). Ekkor:
    \[\operatorname{lnko}(a, b) = r_m \qquad \text{— a legutolsó, nem nulla maradék.}\]
  </div>
</div>
<div class="thm-box">
  <strong>4.4 Megjegyzés — Miért fontos prímfelbontás <em>nélkül</em>?</strong>
  Az Euklideszi algoritmus az ismeretlen számok (prím vagy összetett?) lnko-ját is képes meghatározni.
  Erre számtalanszor szükségünk lesz a 7–8. fejezetekben (Pollard \(\rho\), AKS).
</div>`;

const t5 = String.raw`
<div class="thm-box">
  <strong>4.8 Tétel — Lamé (1844).</strong>
  Az Euklideszi algoritmus legfeljebb annyi lépésig tart, mint amennyi \(b\) jegyeinek számának ötszöröse:
  \[m \leq 5 \cdot \log_{10} |b|\]
  Gabriel Lamé (1795–1870) — ez volt a <em>legelső</em> bizonyított felső becslés egy algoritmus lépésszámára!
</div>
<div class="def-box">
  <strong>Fibonacci-kapcsolat.</strong> A leglassabb eset, ha minden hányados \(q_i = 1\) — ekkor a maradékok
  pontosan a Fibonacci-sorozatot adják. Binet-formula szerint \(b \geq F_{m+1} \approx \varphi^{m+1}/\sqrt{5}\),
  amiből \(m = O(\log b).\)
</div>
<div class="thm-box">
  <strong>4.10 Tétel — Helyesség.</strong>
  \(r_m = \operatorname{lnko}(a, b)\).
  Bizonyítás: \(\operatorname{lnko}(r_{m-1}, r_m) = \operatorname{lnko}(r_{m-2}, r_{m-1}) = \cdots = \operatorname{lnko}(a, b).\) \(\square\)
</div>
<div class="info-box">
  <strong>Modern változatok:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>Stein (1961) bináris algoritmus</strong> — csak kivonást és felezést használ. Hardver szempontból gyorsabb.</li>
    <li><strong>Kibővített Euklideszi</strong> — egyszerre adja lnko-t <em>és</em> a Bézout-együtthatókat \(x, y\)-t,
        ahol \(ax + by = \operatorname{lnko}(a,b)\). Ez az RSA-kulcsgenerálás alapja.</li>
  </ul>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Kérdés</th><th style="text-align:left">Válasz Euklideszre</th></tr></thead>
  <tbody>
    <tr><td>1) Megáll-e minden inputra?</td><td>✓ Igen — descente infinie</td></tr>
    <tr><td>2) Helyes eredményt ad?</td><td>✓ Igen — 4.10 Tétel</td></tr>
    <tr><td>3) Mennyi idő alatt?</td><td>✓ Lineáris (Lamé — 4.8 Tétel)</td></tr>
    <tr><td>4) Milyen bonyolult?</td><td>✓ \(O(\log b)\) — gyakorlatilag azonnal</td></tr>
    <tr><td>5) Más alkalmazások?</td><td>✓ Lásd 5–10. fejezet</td></tr>
  </tbody>
</table>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'mod', label: '4.1 Maradékos osztás', content: <RichTex html={t2} /> },
  { id: 'eukl', label: '4.2 Euklidesz alg.', content: <RichTex html={t3} /> },
  { id: 'pelda', label: 'Interaktív példák', content: <EuclidCalc /> },
  { id: 'lame', label: 'Lamé & elemzés', content: <RichTex html={t5} /> },
];

export default function AlgoCh4() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 4. fejezet</p>
      <h1 className="ila__title">Maradékos osztás és Euklidesz algoritmusa</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
