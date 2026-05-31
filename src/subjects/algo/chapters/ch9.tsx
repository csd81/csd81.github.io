import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, RichTex, type Tab } from '../../ila/components/kit';

// Lucas-Lehmer test runner (small p only for browser)
function LucasLehmer() {
  const [p, setP] = useState(7);
  const MAX_P = 23;

  const computeLL = (pp: number): { steps: number[]; isPrime: boolean } => {
    if (pp <= 1 || pp % 2 === 0) return { steps: [], isPrime: false };
    const Mp = Math.pow(2, pp) - 1;
    const steps: number[] = [4];
    let s = 4;
    for (let i = 0; i < pp - 2; i++) {
      s = ((s * s - 2) % Mp + Mp) % Mp;
      if (steps.length < 20) steps.push(s);
    }
    return { steps, isPrime: s === 0 };
  };

  const pp = Math.min(Math.max(2, p), MAX_P);
  const Mp = Math.pow(2, pp) - 1;
  const { steps, isPrime } = computeLL(pp);

  return (
    <div className="info-box">
      <span className="lbl" style={{ color: '#a78bfa' }}>9.3 Lucas–Lehmer prímteszt (M_p = 2^p - 1)</span>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', margin: '.5rem 0', fontSize: '.85rem' }}>
        <span>p = <input type="number" min={2} max={MAX_P} className="ila-num" value={p} onChange={(e) => setP(+e.target.value)} /></span>
        <span style={{ color: '#8892a4' }}>(p ≤ {MAX_P} böngészőben; teljes implementáció: Python)</span>
      </div>
      <div style={{ fontSize: '.83rem', marginBottom: '.4rem', color: '#c4b5fd' }}>
        M_{pp} = 2^{pp} − 1 = <strong>{Mp}</strong>
      </div>
      <div style={{ fontSize: '.82rem', fontFamily: 'monospace', lineHeight: 1.8, marginBottom: '.4rem' }}>
        a₁ = 4 &nbsp;→&nbsp; {steps.map((s, i) => <span key={i} style={{ marginRight: '.5rem', color: i === steps.length - 1 ? (s === 0 ? '#34d399' : '#f87171') : undefined }}>a{i + 2}={s}</span>)}
        {pp - 1 > steps.length && <span style={{ color: '#64748b' }}>…(összesen {pp - 1} lépés)</span>}
      </div>
      <div className={`${isPrime ? 'def-box' : 'warn-box'}`} style={{ fontWeight: 700 }}>
        a_{pp - 1} ≡ {isPrime ? '0' : 'nem 0'} (mod M_{pp}) &nbsp;⟹&nbsp;
        {isPrime
          ? <span style={{ color: '#34d399' }}>M_{pp} = {Mp} PRÍM ✓</span>
          : <span style={{ color: '#ef4444' }}>M_{pp} = {Mp} ÖSSZETETT ✗</span>}
      </div>
    </div>
  );
}

const t1 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9. fejezet — Prímkeresés</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Évszázadok óta minden matematikus „prímképletet" keresett. Nagyméretű prímek megtalálása
    <em>speciális alakú</em> számokon teszteléssel hatékonyabb.
  </p>
</div>
<div class="thm-box">
  <strong>Két fő prímcsalád:</strong>
  Mersenne \(M_p = 2^p - 1\) és Fermat \(F_n = 2^{2^n} + 1\).
  Mersenne-prímek a mai prímrekordok: <strong>multimillió jegyű prímeket</strong> találnak velük.
  Fermat-prímek viszont \(n \leq 4\) óta egy sem ismert.
</div>
<ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
  <li><a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a> — GIMPS elosztott Mersenne-keresés</li>
  <li><a href="https://primes.utm.edu" style="color:#a78bfa">primes.utm.edu</a> — Top-5000 ismert prímek</li>
</ul>`;

const t2 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.1 Definíció — Mersenne-számok</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Marin <strong>Mersenne</strong> (1588–1648), francia szerzetes-matematikus.
    \[M_p := 2^p - 1, \qquad p \in \mathbb{P}\]
    Mersenne-prím: \(M_p \in \mathbb{P}\) — pl. \(M_2=3, M_3=7, M_5=31, M_7=127.\)
  </p>
</div>
<div class="thm-box">
  <strong>9.2 — Miért csak prím \(p\)?</strong>
  Ha \(k = uv\) összetett, \(2^{uv} - 1 = (2^v-1)(\ldots)\) — tehát \(M_k\) is összetett.
  De prím \(p\) sem elégséges: \(M_{11} = 2047 = 23 \cdot 89\)!
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">\(p\)</th><th style="text-align:left">\(M_p\) jegyek</th><th style="text-align:left">Felfedezés</th></tr></thead>
  <tbody>
    <tr><td>\(2, 3, 5, 7\)</td><td>1–3</td><td>antikum</td></tr>
    <tr><td>\(127\)</td><td>39</td><td>Lucas 1876 — 75 évig rekord!</td></tr>
    <tr><td>\(521-2281\)</td><td>157–687</td><td>Robinson 1952 — első számítógépes</td></tr>
    <tr><td>\(6\,972\,593\) (M38)</td><td>2 098 960</td><td>1999 — első millió-jegyű</td></tr>
    <tr><td>\(43\,112\,609\) (M47)</td><td>12 978 189</td><td>2008 — Smith, UCLA, $100k jutalom</td></tr>
    <tr><td>\(82\,589\,933\) (M51)</td><td>24 862 048</td><td>2018 — GIMPS, jelenlegi rekord</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>9.5 Probléma (nyitott).</strong> Végtelen sok Mersenne-prím létezik-e? Nem tudjuk.
</div>
<div class="def-box">
  <strong>9.6–9.7 — Tökéletes számok.</strong>
  \(n\) tökéletes, ha \(n =\) valódi osztói összege. Pl. \(6=1+2+3.\)
  Euklidesz: ha \(2^m-1\) prím, akkor \(2^{m-1}(2^m-1)\) tökéletes.
  Euler: <em>minden páros tökéletes szám</em> ilyen alakú.
  <strong>Páratlan tökéletes szám létezése — máig megoldatlan!</strong>
</div>`;

const t4 = String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">9.8 Definíció — Fermat-számok</span>
  \[F_n := 2^{2^n} + 1, \qquad n \in \mathbb{N}\]
  Fermat 1650-ben minden \(F_n\)-t prímnek sejtett. Euler 1732-ben cáfolta: \(F_5 = 641 \times 6\,700\,417.\)
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th>\(n\)</th><th>\(F_n\)</th><th>Prím?</th></tr></thead>
  <tbody>
    <tr><td>0</td><td>3</td><td style="color:#34d399">✓</td></tr>
    <tr><td>1</td><td>5</td><td style="color:#34d399">✓</td></tr>
    <tr><td>2</td><td>17</td><td style="color:#34d399">✓</td></tr>
    <tr><td>3</td><td>257</td><td style="color:#34d399">✓</td></tr>
    <tr><td>4</td><td>65 537</td><td style="color:#34d399">✓ (eddigi legnagyobb ismert Fermat-prím!)</td></tr>
    <tr><td>5</td><td>4 294 967 297</td><td style="color:#ef4444">= 641 × 6 700 417 (Euler 1732)</td></tr>
    <tr><td>6–32</td><td>—</td><td style="color:#ef4444">mind összetett (vizsgált)</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>9.11 Tétel — Gauss (1796) szabályos sokszög-szerkesztés.</strong>
  \(n\)-oldalú szabályos sokszög szerkeszthető körzővel és vonalzóval \(\iff\)
  \(n = 2^s\) vagy \(n = 2^s \cdot q_1 \cdots q_r\), ahol \(q_i\) különböző Fermat-prímek.
  <br/>Gauss 19 évesen (1796) fedezte fel — megszerkesztette a <strong>17-oldalú</strong> szabályos sokszöget
  (2000 évig nyitott probléma). Sírján is ez található.
</div>`;

const TABS: Tab[] = [
  { id: 'intro', label: 'Áttekintés', content: <RichTex html={t1} /> },
  { id: 'mersenne', label: '9.1 Mersenne', content: <RichTex html={t2} /> },
  { id: 'lucas', label: 'Lucas–Lehmer teszt', content: <LucasLehmer /> },
  { id: 'fermat', label: '9.2 Fermat-prímek', content: <RichTex html={t4} /> },
];

export default function AlgoCh9() {
  return (
    <div className="ila">
      <Link to="/algo" className="ila__back">← Fejezetek</Link>
      <p className="ila__kicker">Számelmélet — 9. fejezet</p>
      <h1 className="ila__title">Prímkeresés</h1>
      <p className="ila__cite">Szalkai István &amp; Dósa György · Pannon Egyetem · Typotex 2011</p>
      <Tabs tabs={TABS} />
    </div>
  );
}
