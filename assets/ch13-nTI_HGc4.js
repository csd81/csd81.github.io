import{j as t,L as e}from"./index-Cd-_-Ba2.js";import{T as s,R as d}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const l=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13. fejezet — Függelék</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Algebrai általánosítások és hivatkozási anyag. Három téma:
  </p>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><strong>13.1 Boole-algebrák</strong> — a könyvben több helyen használt absztrakt struktúra.</li>
    <li><strong>13.2 Polinomok és Euklideszi gyűrűk</strong> — az egész számokra bemutatott módszerek általánosítása.</li>
    <li><strong>13.3 Táblázatok</strong> — primitív gyökök és diszkrét logaritmusok kis prímmodulusokra.</li>
  </ul>
</div>
<div class="thm-box">
  Az általánosítások közös <em>tanulsága</em>: a könyv 4–7. fejezeteinek algoritmusai
  (Euklidesz, Diophantosz, CRT, Euler-φ, …) <strong>mindegyike érvényes</strong>
  polinomokra, Gauss-egészekre \(\mathbb{Z}[i]\), Euler-egészekre \(\mathbb{Z}[\rho]\),
  és sok más algebrai struktúrában is.
</div>`,a=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.1 Definíció — Boole-algebra</span>
  \[\mathcal{B} = (H, \vee, \wedge, \bar{\cdot}, I, o)\]
  ahol \(H \neq \emptyset\), \(\vee, \wedge\) kétváltozós, \(\bar{\cdot}\) egyváltozós művelet, és teljesülnek a (BA1)–(BA14) axiómák.
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Csoport</th><th style="text-align:left">Axióma</th></tr></thead>
  <tbody>
    <tr><td><strong>BA1–2 kommutativitás</strong></td><td>\(A \vee B = B \vee A,\ A \wedge B = B \wedge A\)</td></tr>
    <tr><td><strong>BA3–4 asszociativitás</strong></td><td>\(A \vee (B \vee C) = (A \vee B) \vee C\)</td></tr>
    <tr><td><strong>BA5–6 disztributivitás</strong></td><td>\(A \vee (B \wedge C) = (A \vee B) \wedge (A \vee C)\)</td></tr>
    <tr><td><strong>BA7–8 elnyelés</strong></td><td>\(A \vee (A \wedge B) = A\)</td></tr>
    <tr><td><strong>BA9–10 komplementer</strong></td><td>\(A \vee \bar A = I,\ A \wedge \bar A = o\)</td></tr>
    <tr><td><strong>BA11–14 nulla/egység</strong></td><td>\(A \vee o = A,\ A \wedge I = A\)</td></tr>
  </tbody>
</table>
<div class="thm-box">
  <strong>Boole-algebra-példák:</strong>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Példa</th><th style="text-align:left">\(H\)</th><th style="text-align:left">\(\vee\) / \(\wedge\)</th></tr></thead>
    <tbody>
      <tr><td><strong>Halmazelmélet</strong></td><td>\(P(X)\) (hatványhalmaz)</td><td>\(\cup\) / \(\cap\)</td></tr>
      <tr><td><strong>Logika</strong></td><td>\(\{0, 1\}\)</td><td>\(\vee\) / \(\wedge\) (boole)</td></tr>
      <tr><td><strong>Számelmélet</strong></td><td>\(D_n\) (négyzetmentes \(n\) osztói)</td><td>lkkt / lnko (3.38 tétel)</td></tr>
    </tbody>
  </table>
</div>`,r=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.2 § — Polinom-gyűrűk és algebrai egészek</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Jelentés</th></tr></thead>
  <tbody>
    <tr><td style="color:#c4b5fd">\(\mathbb{Z}[x]\)</td><td>egész együtthatós polinomok</td></tr>
    <tr><td style="color:#c4b5fd">\(\mathbb{R}[x]\)</td><td>valós együtthatós polinomok</td></tr>
    <tr><td style="color:#c4b5fd">\(\mathbb{C}[x]\)</td><td>komplex együtthatós polinomok</td></tr>
  </tbody>
</table>
<div class="def-box">
  <strong>13.3 — Algebrai egészek és \(\mathbb{Z}[\alpha]\).</strong>
  \(\alpha \in \mathbb{C}\) algebrai egész, ha gyöke egy \(\mathbb{Z}[x]\)-beli polinomnak.
  \[\mathbb{Z}[\alpha] := \{a + b\alpha : a, b \in \mathbb{Z}\} \subset \mathbb{C}\]
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th>Gyűrű</th><th>\(\alpha\)</th><th>Név</th></tr></thead>
    <tbody>
      <tr><td>\(\mathbb{Z}[i]\)</td><td>\(i\) (\(i^2 = -1\))</td><td>Gauss-egészek</td></tr>
      <tr><td>\(\mathbb{Z}[\rho]\)</td><td>\(\rho = -\tfrac{1}{2}+\tfrac{\sqrt3}{2}i\)</td><td>Euler-egészek</td></tr>
      <tr><td>\(\mathbb{Z}[\sqrt{2}]\)</td><td>\(\sqrt 2\)</td><td>H-egészek</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <strong>Történelmi alkalmazások:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>FLT \(n=3,4\) — Euler / Fermat (köbgyök-egészek \(\mathbb{Z}[\rho]\))</li>
    <li>Karácsonyi tétel — Bolyai János 2-soros bizonyítása Gauss-egészekben</li>
    <li>Pell-egyenletek \(x^2-dy^2=1\) — \(\mathbb{Z}[\sqrt{d}]\) egységeivel</li>
    <li>Wiles 1995 — teljes FLT — moduláris formák és elliptikus görbék</li>
  </ul>
</div>`,o=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.5–13.12 — Általános oszthatóság és Euklideszi gyűrűk</span>
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Fogalom</th><th style="text-align:left">Definíció</th></tr></thead>
  <tbody>
    <tr><td>\(a \mid b\)</td><td>\(\exists c \in R: b = a \cdot c\)</td></tr>
    <tr><td><strong>egység</strong> \(e\)</td><td>\(e \mid 1\) (invertálható)</td></tr>
    <tr><td>\(a \sim b\) asszociáltak</td><td>\(a = b \cdot e\) valamely egység \(e\)-re</td></tr>
    <tr><td><strong>irreducibilis</strong></td><td>\(a = bc \Rightarrow b\) vagy \(c\) egység</td></tr>
    <tr><td><strong>prím-elem</strong></td><td>\(a \mid bc \Rightarrow a \mid b\) vagy \(a \mid c\)</td></tr>
  </tbody>
</table>
<div class="def-box">
  <strong>13.12–13.13 — Euklideszi gyűrű.</strong>
  Létezik \(\varphi: R \to \mathbb{N}\) norma: minden \(a, b\), \(\varphi(b) \neq 0\)-ra
  \[a = bq + r, \qquad \varphi(r) &lt; \varphi(b).\]
  <br/>
  <strong>13.13 Tétel: Minden Euklideszi gyűrűben teljesül az egyértelmű prímfelbontás (EPF).</strong>
</div>
<div class="thm-box">
  Példák Euklideszi gyűrűkre (mind EPF):
  \(\mathbb{Z}, \mathbb{Q}[x], \mathbb{R}[x], \mathbb{Z}[i], \mathbb{Z}[\rho], \mathbb{Z}[\sqrt{2}], \mathbb{Z}[\sqrt{3}]\)
</div>
<div class="warn-box">
  <strong>13.16 Probléma (nyitott).</strong>
  Mely \(m \in \mathbb{Z}\) egészekre teljesül az EPF \(\mathbb{Z}[\sqrt m]\)-ben?
  Negatív \(m\)-re ismert (csak 9 ilyen érték, 1970 óta);
  <em>pozitív \(m\)-re máig nem teljes osztályozás.</em>
</div>`,i=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">13.3 § — Hivatkozási táblázatok</span>
</div>
<div class="thm-box">
  <strong>Primitív gyökök (kivonat) — legkisebb pozitív primitív gyök \(g\) kis \(p\) prímekre:</strong>
  <table class="cayley" style="font-family:monospace;font-size:.82rem;margin:.4rem 0;width:100%">
    <thead><tr><th>\(p\)</th><th>\(g\)</th><th></th><th>\(p\)</th><th>\(g\)</th><th></th><th>\(p\)</th><th>\(g\)</th><th></th><th>\(p\)</th><th>\(g\)</th></tr></thead>
    <tbody>
      <tr><td>3</td><td>2</td><td></td><td>53</td><td>2</td><td></td><td>127</td><td>3</td><td></td><td>199</td><td>3</td></tr>
      <tr><td>5</td><td>2</td><td></td><td>59</td><td>2</td><td></td><td>131</td><td>2</td><td></td><td>211</td><td>2</td></tr>
      <tr><td>7</td><td>3</td><td></td><td>61</td><td>2</td><td></td><td>137</td><td>3</td><td></td><td>223</td><td>3</td></tr>
      <tr><td>11</td><td>2</td><td></td><td>67</td><td>2</td><td></td><td>139</td><td>2</td><td></td><td>227</td><td>2</td></tr>
      <tr><td>13</td><td>2</td><td></td><td>71</td><td>7</td><td></td><td>149</td><td>2</td><td></td><td>229</td><td>6</td></tr>
      <tr><td>17</td><td>3</td><td></td><td>73</td><td>5</td><td></td><td>151</td><td>6</td><td></td><td>233</td><td>3</td></tr>
      <tr><td>19</td><td>2</td><td></td><td>79</td><td>3</td><td></td><td>157</td><td>5</td><td></td><td>239</td><td>7</td></tr>
      <tr><td>23</td><td>5</td><td></td><td>83</td><td>2</td><td></td><td>163</td><td>2</td><td></td><td>241</td><td>7</td></tr>
      <tr><td>29</td><td>2</td><td></td><td>89</td><td>3</td><td></td><td>167</td><td>5</td><td></td><td>251</td><td>6</td></tr>
      <tr><td>31</td><td>3</td><td></td><td>97</td><td>5</td><td></td><td>173</td><td>2</td><td></td><td>257</td><td>3</td></tr>
      <tr><td>37</td><td>2</td><td></td><td>101</td><td>2</td><td></td><td>179</td><td>2</td><td></td><td>263</td><td>5</td></tr>
      <tr><td>41</td><td>6</td><td></td><td>103</td><td>5</td><td></td><td>181</td><td>2</td><td></td><td>269</td><td>2</td></tr>
      <tr><td>43</td><td>3</td><td></td><td>107</td><td>2</td><td></td><td>191</td><td>19</td><td></td><td>271</td><td>6</td></tr>
      <tr><td>47</td><td>5</td><td></td><td>109</td><td>6</td><td></td><td>193</td><td>5</td><td></td><td>277</td><td>5</td></tr>
    </tbody>
  </table>
</div>
<div class="thm-box">
  <strong>Diszkrét logaritmus-tábla \(p = 23, g = 5\):</strong>
  <br/>
  \(5^k \bmod 23\): 1, 5, 2, 10, 4, 20, 8, 17, 16, 11, 9, 22, 18, 21, 13, 19, 3, 15, 6, 7, 12, 14, 1, …
  <br/>
  \(\log_5(2) = 2,\ \log_5(7) = 19,\ \log_5(11) = 9.\)
</div>
<div class="def-box" style="margin-top:.75rem">
  <strong>Befejezés</strong><br/>
  <em>„Ezzel zárul az Algoritmikus számelmélet könyv. A téma kimeríthetetlen — a gyors számelmélet,
  kriptográfia és kvantumkomputerek kapcsolatának vizsgálata <strong>élő kutatási terület</strong>."</em>
  <br/>— Szalkai István &amp; Dósa György, Pannon Egyetem 2011
</div>
<div class="info-box" style="margin-top:.5rem">
  <strong>Online hivatkozások:</strong>
  <ul style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li><a href="https://primes.utm.edu/lists/small/millions/" style="color:#a78bfa">primes.utm.edu</a> — első 50 millió prím</li>
    <li><a href="https://oeis.org" style="color:#a78bfa">oeis.org</a> — OEIS (Sloane)</li>
    <li><a href="https://www.mersenne.org" style="color:#a78bfa">mersenne.org</a> — Mersenne-prímek</li>
  </ul>
</div>`,n=[{id:"intro",label:"Áttekintés",content:t.jsx(d,{html:l})},{id:"boole",label:"13.1 Boole-algebra",content:t.jsx(d,{html:a})},{id:"polinom",label:"13.2a Polinomok",content:t.jsx(d,{html:r})},{id:"eukl",label:"13.2b Euklideszi gyűrűk",content:t.jsx(d,{html:o})},{id:"tablazat",label:"13.3 Táblázatok",content:t.jsx(d,{html:i})}];function k(){return t.jsxs("div",{className:"ila",children:[t.jsx(e,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 13. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Függelék — Boole-algebrák, Euklideszi gyűrűk, táblázatok"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(s,{tabs:n})]})}export{k as default};
