import{j as t,L as e}from"./index-Cd-_-Ba2.js";import{T as l,R as s}from"./kit-CoMAMuWy.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const a=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10. fejezet — Titkosírás nyilvános kulccsal</span>
  <p style="font-size:.86rem;margin:.5rem 0">
    Olyan titkosírás, amelynek menete (kódolás és kulcsa) <strong>bárki számára nyilvános</strong>,
    mégis a levelet csak a címzett tudja elolvasni — <em>még maga a levél írója sem!</em>
  </p>
</div>
<div class="def-box">
  <strong>Nyilvános kulcsú titkosírás.</strong>
  Whitfield Diffie és Martin Hellman 1976-ban javasolta az ötletet;
  Ron Rivest, Adi Shamir és Leonard Adleman 1977-ben adta az első algoritmust — az <strong>RSA</strong>-t.
  (A brit GCHQ Ellis–Cocks–Williamson 1973-ban titkosan már ugyanezt alkotta meg.)
</div>
<table class="cayley" style="width:100%;font-size:.83rem;margin:.5rem 0">
  <thead><tr><th style="text-align:left">Tulajdonság</th><th style="text-align:left">Magyarázat</th></tr></thead>
  <tbody>
    <tr><td><strong>Feltörhetetlenség</strong></td><td>A titkos kulcs nélkül a kódolt üzenet csak prímfelbontással olvasható (\(\approx 2^{1000}\) év).</td></tr>
    <tr><td><strong>Előzetes megállapodás nélkül</strong></td><td>\(B\) írhat \(A\)-nak anélkül, hogy korábban találkoztak volna.</td></tr>
    <tr><td><strong>Skálázás</strong></td><td>\(t\) résztvevő esetén nem \(\binom{t}{2}\) titok, csak \(t\) nyilvános kulcs.</td></tr>
    <tr><td><strong>Aláírás-hitelesítés</strong></td><td>Bizonyítható, hogy <em>kitől</em> jött az üzenet — bírósági szinten is.</td></tr>
  </tbody>
</table>`,n=String.raw`
<div class="info-box">
  <span class="lbl" style="color:#a78bfa">10.1 Algoritmus — RSA (Rivest–Shamir–Adleman, 1977)</span>
  <strong>Előkészítés (titokban):</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>Válasszunk két nagy prímet: \(p, q\) (\(\sim\) 500–1000 jegy). Kerüljük a közeli prímeket!</li>
    <li>Számoljuk ki \(n := pq\) — nyilvánosságra hozzuk.</li>
    <li>Számoljuk ki \(\varphi(n) = (p-1)(q-1)\) — <strong>titokban tartjuk</strong>.</li>
    <li>Válasszunk \(e\)-t, amely relatív prím \(\varphi(n)\)-hez. \(e\) a <strong>nyilvános kulcs</strong>.</li>
    <li>Számoljuk ki \(f\)-et az \(ef \equiv 1 \pmod{\varphi(n)}\) egyenletből (Euklideszi alg.). \(f\) a <strong>titkos kulcs</strong>.
      \(p, q, \varphi(n)\) adatokat elégetjük!</li>
  </ol>
</div>
<div class="thm-box">
  <strong>Kódolás:</strong> \(K \equiv k^{e} \pmod{n}\)
  &nbsp;&nbsp;&nbsp;
  <strong>Dekódolás:</strong> \(D(K) \equiv K^{f} \pmod{n}\)
</div>
<div class="def-box">
  <strong>Miért működik?</strong>
  \[K^f \equiv (k^e)^f = k^{ef} = k^{s\varphi(n)+1} \equiv k \pmod n\]
  az Euler-tétel (\(k^{\varphi(n)} \equiv 1\)) alapján.
</div>`,o=String.raw`
<div class="ex-box">
  <strong>10.13 Példa — Teljes RSA-számolás: \(p = 269,\ q = 241,\ e = 53\,201\)</strong>
  <br/><br/>
  <strong>(a)</strong> \(n = 269 \cdot 241 = 64\,829\), \;\(\varphi(n) = 268 \cdot 240 = 64\,320\)
  <br/>
  <strong>(b)</strong> \(f = 28\,721\) (Bézout-módszerrel: \(53\,201 \cdot 28\,721 - 64\,320 y = 1\))
  <br/>
  Ellenőrzés: \(53\,201 \cdot 28\,721 = 1\,528\,005\,121 = 23\,756 \cdot 64\,320 + 1\). ✓
  <br/><br/>
  <strong>(c) Üzenet kódolása \(x = 48\,055\):</strong>
  \[y \equiv 48\,055^{53\,201} \equiv \mathbf{61\,606} \pmod{64\,829}\]
  <strong>(d) Dekódolás:</strong>
  \[x \equiv 61\,606^{28\,721} \equiv \mathbf{48\,055} \pmod{64\,829}\] ✓
</div>
<div class="ex-box">
  <strong>(e) „HELLO" kódolása:</strong> H=08, E=05, L=12, O=15
  <br/>Blokkok: 0008, 0512, 1215
  <table class="cayley" style="font-size:.82rem;margin:.4rem 0;width:100%">
    <thead><tr><th>blokk</th><th>kód \(k^e \bmod n\)</th></tr></thead>
    <tbody>
      <tr><td>0008</td><td><strong>13 745</strong></td></tr>
      <tr><td>0512</td><td><strong>57 388</strong></td></tr>
      <tr><td>1215</td><td><strong>18 638</strong></td></tr>
    </tbody>
  </table>
</div>`,i=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.9 — Aláírás-hitelesítés (signing)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    \(B\) szeretné igazolni, hogy egy üzenetet <strong>valóban ő írt</strong> \(A\)-nak.
    Ehhez \(B\) a saját titkos \(f_B\) kulcsával is „rákódol".
  </p>
</div>
<div class="info-box">
  <strong>Hitelesítési protokoll — 7 lépésben:</strong>
  <ol style="font-size:.85rem;line-height:1.8;margin:.4rem 0">
    <li>\(B\) választ egy véletlen \(\ell\) jelsorozatot.</li>
    <li>\(B\) kódolja \(\ell\)-et \(A\) nyilvános kulcsával: \(L \equiv \ell^{e_A} \pmod{n_A}.\)</li>
    <li>\(B\) aláírja \(\ell\)-et: \(\lambda \equiv \ell^{f_B} \pmod{n_B}.\)</li>
    <li>\(B\) még egyszer kódolja: \(\Lambda \equiv \lambda^{e_A} \pmod{n_A}.\)</li>
    <li>\(B\) <strong>\(L\)-et és \(\Lambda\)-t küldi</strong> \(A\)-nak.</li>
    <li>\(A\) dekódolja: \(\ell_1 = D_A(L),\ \lambda = D_A(\Lambda),\ \ell_2 = C_B(\lambda).\)</li>
    <li>Hitelesnek tekinti, ha \(\boxed{\;\ell_1 = \ell_2\;}.\)</li>
  </ol>
</div>
<div class="thm-box">
  <strong>Mai gyakorlat.</strong> Az RSA-aláírás ma is a digitális szerződések (X.509, TLS) alapja.
  Modern változat: <em>elliptikus görbe</em> alapú (ECDSA, Ed25519) — kisebb kulccsal, ugyanazzal az elvvel.
</div>`,r=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.17 Példa — RSA-129 kihívás (1977, Scientific American)</span>
</div>
<div style="background:#0e1014;border:1px solid #1e2533;border-radius:6px;padding:.7rem .9rem;font-family:monospace;font-size:.8rem;color:#cbd5e1;word-break:break-all;line-height:1.7;margin:.5rem 0">
  n = 11438162 5757888867 6692357799 7614661201 0218296721<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;2423625625 6184293570 6935245733 8978305971 2356395870<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;50589890751 4759929002 6879543541
</div>
<div class="warn-box">
  Eredeti becslés (1977): <em>40 kvadrillió év</em>. Tényleges feltörés: 1994, Atkins–Graff–Lenstra–Leyland,
  <strong>600+ önkéntes</strong>, <strong>8 hónap</strong>.
</div>
<div class="thm-box">
  <strong>10.23 Megoldás — 1994 feltörés</strong><br/>
  \(n = p \cdot q\) ahol<br/>
  \(p\) = 3490 5295108476 5094914784 9619903898 1334177646…<br/>
  \(q\) = 32769 1329932667 0954996198 8190834461 4131776429…<br/><br/>
  Titkos üzenet: <strong style="color:#fbbf24;font-family:monospace">„THE MAGIC WORDS ARE SQUEAMISH OSSIFRAGE"</strong>
</div>
<div class="warn-box">
  <strong>Tanulság.</strong> Ma <strong>2048-bites RSA</strong> a minimum, 3072–4096 bit ajánlott.
  A kvantumszámítógép (Shor 1994) eljövetelével az RSA elavult lesz — ezért a
  <em>poszt-kvantum kriptográfia</em> (NIST 2024-es szabványok) a következő ugrás.
</div>`,d=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">10.2 § — Merkle–Hellman hátizsák-titkosírás (1978, feltört 1982)</span>
  <p style="font-size:.85rem;margin:.5rem 0">
    Az RSA után második nyilvános kulcsú titkosírás. Adi Shamir 1982-ben polinomidőben feltörte.
    Történelmi érdekesség.
  </p>
</div>
<div class="def-box">
  <strong>10.25 Definíció — Szupernövekvő sorozat:</strong>
  \[(m_1, \dots, m_k) \text{ szupernövekvő, ha } m_i > \sum_{j=1}^{i-1} m_j.\]
  Ilyen hátizsák \(O(k)\) idő alatt megoldható (mohó).
</div>
<div class="thm-box">
  <strong>10.29 — Merkle–Hellman (vázlat):</strong>
  Titkos szupernövekvő \(\vec v\), modulusok \(m, a\). Elrejtett sorozat:
  \(w_i \equiv a \cdot v_i \pmod m\) — ez már nem szupernövekvő, a kívülálló NP-nehéz hátizsákot old.
  A kulcstulajdonos viszont \(b \equiv a^{-1} \pmod m\) segítségével visszavisz szupernövekvőre.
</div>
<div class="ex-box">
  <strong>10.30 Példa:</strong> \(\vec v=(2,3,7,15,31),\ m=61,\ a=17 \Rightarrow b=18.\)
  \(\vec w \equiv 17 \cdot \vec v \pmod{61} = (34, 51, 58, 11, 39).\)
  Üzenet \((1,0,1,1,0)\): \(F = 34+58+11 = 148.\)
  Dekód: \(H \equiv 148 \cdot 18 \equiv 41 \pmod{61}.\) Mohó: \(41 = 31 + 7 + 3.\) ✓
</div>`,m=[{id:"intro",label:"Áttekintés",content:t.jsx(s,{html:a})},{id:"rsa",label:"10.1 RSA",content:t.jsx(s,{html:n})},{id:"pelda",label:"RSA példa",content:t.jsx(s,{html:o})},{id:"aliras",label:"Aláírás-hitelesítés",content:t.jsx(s,{html:i})},{id:"129",label:"RSA-129 feltörés",content:t.jsx(s,{html:r})},{id:"hatizsak",label:"10.2 Hátizsák",content:t.jsx(s,{html:d})}];function c(){return t.jsxs("div",{className:"ila",children:[t.jsx(e,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 10. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Titkosírás nyilvános kulccsal"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(l,{tabs:m})]})}export{c as default};
