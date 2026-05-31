import{j as t,L as x,r as b}from"./index-CAqBiqM_.js";import{T as f,R as e}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";function j(){const[d,k]=b.useState(6456),[n,u]=b.useState(4652),[r,h]=b.useState(9786);function y(a,o,s){if(s<=0||o<0)return{result:0,steps:[]};const v=[];let i=1,l=(a%s+s)%s,m=o,c=0;for(;m>0;){const p=m&1;v.push({j:c,uj:l,bit:p}),p&&(i=i*l%s),l=l*l%s,m>>=1,c++}return{result:i,steps:v}}const{result:z,steps:g}=y(d,n,r);return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"6.59 Gyorshatványozás: u^k mod m"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["u = ",t.jsx("input",{type:"number",className:"ila-num",value:d,onChange:a=>k(+a.target.value)})]}),t.jsxs("span",{children:["k = ",t.jsx("input",{type:"number",className:"ila-num",value:n,onChange:a=>u(+a.target.value)})]}),t.jsxs("span",{children:["m = ",t.jsx("input",{type:"number",className:"ila-num",value:r,onChange:a=>h(+a.target.value)})]})]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontFamily:"monospace",fontSize:".82rem",width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"j"}),t.jsx("th",{children:"u_j mod m"}),t.jsx("th",{children:"k bitje"})]})}),t.jsx("tbody",{children:g.map((a,o)=>t.jsxs("tr",{style:a.bit?{background:"rgba(167,139,250,.12)"}:void 0,children:[t.jsx("td",{children:a.j}),t.jsx("td",{style:{color:a.bit?"#a78bfa":void 0,fontWeight:a.bit?700:void 0},children:a.uj}),t.jsx("td",{style:{color:a.bit?"#fbbf24":"#64748b",fontWeight:a.bit?700:void 0},children:a.bit})]},o))})]})}),t.jsxs("div",{className:"def-box",style:{marginTop:".6rem",fontWeight:700,fontSize:".9rem"},children:[d,"^",n," ≡ ",t.jsx("span",{style:{color:"#fbbf24"},children:z})," (mod ",r,")   ",t.jsxs("span",{style:{color:"#8892a4",fontWeight:400,fontSize:".8rem"},children:["(",g.length," lépés, szemben a ",n," naiv szorzással)"]})]})]})}const q=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6. fejezet — Kongruenciák és maradékosztályok</span>
  <div class="box-body">
    A periodikus jelenségeknél nem az ismétlések száma, hanem a <strong>maradék</strong> a lényeges:
    hét napjai, körforgalom, csomagolás utáni maradék, egy szám utolsó néhány jegye,
    számítógépes túlcsordulás, „mindenkinek van-e párja a tánciskolában?"
  </div>
  <div class="box-body" style="margin-top:.4rem">
    Latin <em>kongruencia</em> = <em>megegyezés, megfelelés, egybevágóság</em>.
    Itt: két szám ugyanazt a maradékot adja \(m\)-mel.
  </div>
</div>

<div class="def-box">
  <span class="lbl lbl--thm">6.1 Definíció — A kongruencia-jelölés</span>
  <div class="box-body">
    Tetszőleges \(a, b, m \in \mathbb{Z}\), \(m \neq 0\) esetén:
    \[a \equiv_m b \quad \text{vagy} \quad a \equiv b \pmod{m}\]
    („\(a\) kongruens \(b\)-vel modulo \(m\)") pontosan akkor, ha
    \[m \mid (a - b),\]
    vagyis \(a\) és \(b\) ugyanazt a maradékot adják \(m\)-mel elosztva.
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.4 Állítás.</strong> \(m \mid n\) esetén \(a \equiv_n b \Rightarrow a \equiv_m b\),
    de fordítva általában nem. Algebrai nyelven: \(\equiv_n\) <em>finomabb</em> osztályozás
    mint \(\equiv_m\). Speciálisan \(\equiv_{\pm 1}\) a legdurvább (mindent összemos), \(=\) a legfinomabb.
  </div>
</div>

<div class="def-box">
  <span class="lbl">6.6 Definíció — \(\bmod\) vs \(\operatorname{MOD}\)</span>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">Jel</th><th style="text-align:left">Tartomány</th></tr></thead>
    <tbody>
      <tr><td style="font-family:monospace">\(a \bmod m\)</td><td>nemnegatív maradék: \(0 \leq b < m\)</td></tr>
      <tr><td style="font-family:monospace">\(a \operatorname{MOD} m\)</td><td>legkisebb abszolút értékű maradék: \(-\tfrac{m}{2} < b \leq \tfrac{m}{2}\)</td></tr>
    </tbody>
  </table>
  <div class="box-body" style="color:#94a3b8;font-size:.82rem">
    Nagy \(m\) modulusoknál \(b\) is nagy lehet, ezért érdemes negatív maradékokra is gondolni
    (mert ekkor \(m - b\) kicsi).
  </div>
</div>`,_=String.raw`
<div class="thm-box">
  <span class="lbl lbl--thm">6.9 Tétel — A kongruencia művelettartó</span>
  <div class="box-body">
    Bármely \(a, b, c, d \in \mathbb{Z}\) és rögzített \(m \neq 0\) esetén:
    <div class="def-box" style="margin:.4rem 0">
      Ha \(a \equiv_m b\) és \(c \equiv_m d\), akkor
      \[a \pm c \equiv_m b \pm d \qquad \text{és} \qquad a \cdot c \equiv_m b \cdot d.\]
    </div>
    Ez teszi \(\equiv_m\)-et valódi <em>kongruenciává</em> az absztrakt algebra értelmében
    (művelettartó ekvivalencia-reláció).
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.10 Megjegyzés — A 11-gyel oszthatóság szabálya</span>
  <div class="box-body">
    Mivel \(10 \equiv -1 \pmod{11}\), ezért \(10^j \equiv (-1)^j \pmod{11}\), és így:
    \[n = \sum_{j=0}^k a_j \cdot 10^j \equiv \sum_{j=0}^k (-1)^j a_j \pmod{11}.\]
    <div class="def-box" style="margin:.3rem 0">
      <strong>Szabály.</strong> Egy tízes számrendszerben felírt szám pontosan akkor osztható 11-gyel,
      ha a számjegyeit <em>váltakozó előjellel</em> összeadva a kapott összeg osztható 11-gyel.
    </div>
    Pl. \(n = 1\,032\,002 \to 1 - 0 + 3 - 2 + 0 - 0 + 2 = 4 \pmod{11}\).
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.11 Megjegyzés — Moduláris aritmetika</span>
  <div class="box-body">
    <div class="def-box" style="margin-bottom:.4rem">
      Ha egy nagy kifejezésnek csak a \(\bmod\, m\) maradéka érdekel, akkor minden részeredménynél
      vehetjük a maradékot — nincs szükség nagy számokkal való számolásra.
    </div>
    <strong>6.12 Példa — \(132\,465 + 46\,587 \cdot 83\,152 \cdot 731\,052 - 2\,086\,455 \pmod{753}\)</strong>
    \[\begin{aligned}
      &\equiv 690 + 654 \cdot 322 \cdot 642 - 645 \\
      &\equiv 690 + 654 \cdot 206\,724 - 645 \\
      &\equiv 690 + 654 \cdot 402 - 331 \cdot 100 \\
      &\equiv 230\,498 \equiv \mathbf{80} \pmod{753}
    \end{aligned}\]
    <div class="box-body" style="color:#94a3b8;font-size:.82rem">
      Egyetlen lépésben sem mentünk 1 millió fölé — minden részeredmény a \([0, 753^2)\) tartományon belül.
    </div>
  </div>
</div>

<div class="def-box">
  <span class="lbl">6.13 Megjegyzés — Páros/páratlan analógia csak prím modulusra triviális</span>
  <div class="box-body">
    Páratlan modulusra <strong>nem</strong> igazak a megszokott szabályok!
    Például \(\pmod{9}\):
    \[6 + 4 \equiv 1 \pmod 9, \qquad 6 \cdot 2 \equiv 3 \pmod 9, \qquad 6 \cdot 4 \equiv 6 \pmod 9.\]
  </div>
</div>`,A=String.raw`
<div class="def-box">
  <span class="lbl lbl--thm">6.15 Jelölés — \(\mathbb{Z}_n\) maradékhalmaz</span>
  <div class="box-body">
    \[\mathbb{Z}_n := \{0, 1, 2, \dots, n-1\}\]
    Algebrai jelölésekben gyakran \(\mathbb{Z}/n\mathbb{Z}\).
    A \(\oplus\) és \(\odot\) műveletek \(\mathbb{Z}_n\)-en a \(\bmod\, n\) szerinti összeadás és szorzás
    (6.19 Def.). Az asszociativitás, kommutativitás, disztributivitás öröklődik \(\mathbb{Z}\)-ből.
  </div>
  <div class="thm-box" style="margin-top:.4rem">
    \((\mathbb{Z}_n, +, \cdot)\) <strong>kommutatív egységelemes gyűrű</strong> minden \(n \geq 1\)-re.
    Az \((\mathbb{Z}_n, +)\) Abel-csoport, \((\mathbb{Z}_n, \cdot)\) kommutatív félcsoport.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.21–6.27 — Inverz és nullosztó</span>
  <div class="box-body">
    Az additív inverz triviális: \(a + (n-a) \equiv 0\). A <strong>multiplikatív inverz</strong> azonban nem mindig létezik!
    <br/>Pl. \(\pmod 6\):
    \[2 \cdot 3 \equiv 0 \pmod 6 \;\Rightarrow\; \text{a } 2x \equiv 1 \pmod 6 \text{-nak nincs megoldása.}\]
    <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">Fogalom</th><th style="text-align:left">Definíció</th></tr></thead>
      <tbody>
        <tr><td><strong>multiplikatív inverz</strong> \(a^{-1}\)</td><td>\(a \cdot a^{-1} \equiv 1 \pmod n\)</td></tr>
        <tr><td><strong>nullosztó</strong> \(a \neq 0\)</td><td>\(\exists b \neq 0: a \cdot b \equiv 0 \pmod n\)</td></tr>
        <tr><td><strong>test</strong></td><td>minden \(a \neq 0\)-nak van mult. inverze</td></tr>
      </tbody>
    </table>
    <div class="def-box" style="margin-top:.3rem">
      <strong>6.24 Állítás.</strong> \(a \in \mathbb{Z}_n\) pontosan akkor nullosztó, ha
      <em>nem relatív prím</em> \(n\)-hez.
    </div>
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.28 Tétel.</strong> Véges, nullosztómentes gyűrűben minden elemnek van inverze
    — vagyis \((R, +, \cdot)\) <strong>test</strong>.
    <br/><br/>
    <strong>6.29 Következmény.</strong> \(\mathbb{Z}_p\) test pontosan akkor, ha \(p \in \mathbb{P}\) prím.
  </div>
</div>

<div class="def-box">
  <span class="lbl lbl--thm">6.30–6.31 — Redukált maradékrendszer \(\mathbb{Z}_n^*\)</span>
  <div class="box-body">
    \(\mathbb{Z}_n^* := \{a \in \mathbb{Z}_n : \operatorname{lnko}(a, n) = 1\}\) — az \(n\)-hez relatív prím elemek halmaza.
    <br/><br/>
    <strong>6.31 Definíció — Euler-féle \(\varphi\) függvény:</strong>
    \[\varphi(n) := |\mathbb{Z}_n^*| = |\{1 \leq a \leq n : \operatorname{lnko}(a, n) = 1\}|.\]
    Pl. \(\varphi(15) = 9\): a 15-höz rel. prím számok \(1, 2, 4, 7, 8, 10, 11, 13, 14\).
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.33 Tétel.</strong> \((\mathbb{Z}_n^*, \cdot)\) <strong>kommutatív (Abel-)csoport</strong>:
    zárt a szorzásra, és minden elemének van multiplikatív inverze.
  </div>
</div>`,E=String.raw`
<div class="def-box">
  <span class="lbl lbl--thm">6.35 Definíció — Lineáris kongruencia</span>
  <div class="box-body">
    \(a, b, m\) adottak, \(x\) keresett:
    \[ax \equiv b \pmod m\]
    Ez ekvivalens a \(ax - my = b\) Diophantoszi egyenlettel, amelyet Euklidesz algoritmusával megoldhatunk.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.36 Tétel — Megoldhatóság</span>
  <div class="box-body">
    A megoldhatóság feltétele:
    \[\operatorname{lnko}(a, m) \mid b.\]
    Ekkor a megoldást az 5.4 kiterjesztett Euklideszi algoritmus megadja.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.37 Állítás — Összes megoldás</span>
  <div class="box-body">
    Az összes megoldás \(\pmod m\):
    \[x_i = x_0 + i \cdot \frac{m}{\operatorname{lnko}(a, m)}, \quad i = 0, 1, \dots, L-1\]
    ahol \(L = \operatorname{lnko}(a, m)\) — a megoldások száma.
  </div>
</div>

<div class="def-box">
  <span class="lbl lbl--thm">6.39–6.40 — Multiplikatív inverz \(\pmod m\)</span>
  <div class="box-body">
    \(a^{-1} \pmod m\) a \(ax \equiv 1 \pmod m\) kongruencia megoldása.
    <br/><br/>
    <strong>6.40 Tétel.</strong> \(a^{-1} \pmod m\) pontosan akkor létezik, ha
    \(\operatorname{lnko}(a, m) = 1\) — vagyis \(a \in \mathbb{Z}_m^*\).
  </div>
</div>

<div class="info-box">
  <span class="lbl">6.41 Megjegyzés — Stratégia nagy modulusoknál</span>
  <div class="box-body">
    Ha már megtaláltuk \(a^{-1}\)-t, akkor <em>bármely</em> \(b\) esetén:
    \[x \equiv b \cdot a^{-1} \pmod m \quad \text{— egyetlen szorzás!}\]
    Lineáris algebrai analógia: ha \(A^{-1}\) ismert, akkor \(Ax = b\) megoldása \(x = A^{-1} b\).
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">6.42 Példa — \(18^{-1} \pmod{175}\)</span>
  <div class="box-body">
    Megoldjuk \(18x - 175y = 1\) Bézout-egyenletet:
    <table class="cayley" style="font-family:monospace;font-size:.82rem;margin:.4rem 0;width:100%">
      <thead><tr><th style="text-align:left">Euklideszi lépések</th></tr></thead>
      <tbody>
        <tr><td>\(\langle 18 \rangle = \langle -175 \rangle \cdot 0 + \langle 18 \rangle\)</td></tr>
        <tr><td>\(\langle -175 \rangle = \langle 18 \rangle \cdot (-9) + \langle -13 \rangle\)</td></tr>
        <tr><td>\(\langle 18 \rangle = \langle -13 \rangle \cdot (-1) + \langle 5 \rangle\)</td></tr>
        <tr><td>\(\langle -13 \rangle = \langle 5 \rangle \cdot (-2) + \langle -3 \rangle\)</td></tr>
        <tr><td>\(\langle 5 \rangle = \langle -3 \rangle \cdot (-1) + \langle 2 \rangle\)</td></tr>
        <tr><td>\(\langle -3 \rangle = \langle 2 \rangle \cdot (-1) + \langle -1 \rangle\)</td></tr>
        <tr><td>\(\langle 2 \rangle = \langle -1 \rangle \cdot (-2) + \langle 0 \rangle\)</td></tr>
      </tbody>
    </table>
    Visszaforgatással: \(-1 = 68 \cdot 18 + 7 \cdot (-175)\), így \(x_0 = -68\).
    \[18^{-1} \equiv -68 \equiv \mathbf{107} \pmod{175}\]
    Ellenőrzés: \(18 \cdot 107 = 1926 = 11 \cdot 175 + 1 \equiv 1 \pmod{175}\). ✓
  </div>
</div>`,S=String.raw`
<div class="def-box">
  <span class="lbl lbl--thm">6.43 Definíció — Euler-féle \(\varphi(n)\) függvény</span>
  <div class="box-body">
    \[\varphi(n) := |\{a < n : \operatorname{lnko}(a, n) = 1\}|\]
    Leonhard Euler (1707–1783) svájci matematikus. Angolul néha „totient function".
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.46 Tétel — Szorzat-képlet</span>
  <div class="box-body">
    Ha \(n = p_1^{\alpha_1} \cdots p_r^{\alpha_r}\), akkor:
    \[\varphi(n) = n \cdot \prod_{i=1}^r \left(1 - \frac{1}{p_i}\right).\]
  </div>
</div>

<div class="def-box">
  <span class="lbl">6.48 Példa — Speciális esetek</span>
  <table class="cayley" style="width:100%;font-size:.83rem;margin:.4rem 0">
    <thead><tr><th style="text-align:left">\(n\)</th><th style="text-align:left">\(\varphi(n)\)</th></tr></thead>
    <tbody>
      <tr><td>\(p\) prím</td><td>\(p - 1\)</td></tr>
      <tr><td>\(p \cdot q\) (két különböző prím)</td><td>\((p-1)(q-1)\) — <strong>RSA-kulcsgenerálás alapja</strong></td></tr>
      <tr><td>\(p^t\)</td><td>\(p^t - p^{t-1} = p^{t-1}(p - 1)\)</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.50 Állítás — \(\varphi\) gyengén multiplikatív.</strong>
    Relatív prím \(m, n\)-re: \(\varphi(mn) = \varphi(m) \cdot \varphi(n).\)
    <br/>
    <em>De totálisan nem!</em> Pl. \(\varphi(4) = 2\), \(\varphi(2) = 1\), \(\varphi(2) \cdot \varphi(2) = 1 \neq 2\).
  </div>
</div>

<div class="warn-box">
  <strong>Kulcsmegjegyzés.</strong> A \(\varphi(n)\) értékét általában <em>csak</em> a prímfelbontás
  ismeretében tudjuk gyorsan kiszámolni. Ezért \(\varphi(n)\) titokban marad nyilvános \(n\) esetén —
  ez az RSA-titkosítás biztonságának egyik pillére!
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.52 Tétel — Lagrange</span>
  <div class="box-body">
    Véges csoport \(G\), részcsoport \(H\) esetén: \(|H| \mid |G|.\)
    <br/>
    <span style="color:#64748b;font-size:.8rem">
      Joseph Louis Lagrange (1736–1813) francia matematikus. Egyszerű és rövid algebrai tétel,
      amelyből a 6.53 és 6.54 tételek <em>egyetlen sorban</em> következnek.
    </span>
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.53 Tétel — Euler „számelméleti" tétele</span>
  <div class="box-body">
    Ha \(\operatorname{lnko}(a, m) = 1\), akkor
    \[a^{\varphi(m)} \equiv 1 \pmod m.\]
    <strong>Bizonyítás:</strong> \(\mathbb{Z}_m^*\) Abel-csoport, \(\varphi(m) = |\mathbb{Z}_m^*|\) rendje.
    Lagrange szerint \(a\) rendje osztja \(|\mathbb{Z}_m^*|\)-t.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.54 Tétel — „kis" Fermat-tétel</span>
  <div class="box-body">
    \(p\) prím, \(p \nmid a\) esetén:
    \[a^{p-1} \equiv 1 \pmod p\]
    vagy ekvivalensen (\(p \mid a\)-ra is): \(a^p \equiv a \pmod p.\)
    <br/>
    <span style="color:#64748b;font-size:.8rem">
      Pierre Fermat (1601–1665) francia jogász és matematikus. Az „őrültek tételét" 1640-ben
      levélben közölte. Modern alkalmazás: <strong>Fermat-féle prímteszt</strong> (lásd 8. fejezet).
    </span>
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.55 Tétel — Bolyai János prímteszt-előzménye</span>
  <div class="box-body">
    Ha \(p, q\) különböző prímek, \(a \nmid p\), \(a \nmid q\), és
    \[a^{p-1} \equiv 1 \pmod q \quad \text{és} \quad a^{q-1} \equiv 1 \pmod p\]
    teljesül, akkor
    \[a^{pq - 1} \equiv 1 \pmod{pq}.\]
    <div class="warn-box" style="margin-top:.4rem">
      Bolyai János (1802–1860) — kéziratai csak <strong>2000 körül</strong> kerültek elő.
      Ezzel <em>40+ évvel megelőzte Jeans</em> (1877–1946) angol matematikus 1898-as
      publikációját. Kiss Elemér [KE1] feltárása. A módszer alapja a 8.3 „Álprímek" alfejezet
      modern prímtesztjeinek.
    </div>
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.58 Tétel — Wilson</span>
  <div class="box-body">
    \(n \in \mathbb{N}\) akkor és csak akkor prím, ha
    \[(n - 1)! \equiv -1 \pmod n.\]
    <span style="color:#64748b;font-size:.8rem">
      John Wilson (1741–1793). Elméletileg gyönyörű ↔ <em>gyakorlatilag használhatatlan</em>
      prímteszt: \((n-1)!\) óriási (Stirling-formula szerint \(\sim (n/e)^n\)).
    </span>
  </div>
</div>`,Z=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.59 Algoritmus — \(u^k \bmod m\) gyorshatványozás</span>
  <div class="box-body">
    Adottak nagy (~száz/ezer jegyű) \(u, k, m\). Meghatározandó: \(x \equiv u^k \pmod m\).
    <br/><br/>
    Az \(u^k\) hatvány önmaga kb. \(10^{100}\) jegyű — sosem számoljuk ki. Minden részeredménynél
    \(\bmod\, m\)-et veszünk. De \(k \approx 10^{100}\) szorzás is sokáig tartana — ezért
    <strong>négyzetre emelünk</strong>:
    \[u_0 := u, \quad u_1 := u_0^2 \equiv u^2, \quad u_2 := u_1^2 \equiv u^4, \quad \dots, \quad u_i \equiv u^{2^i} \pmod m.\]
    A kitevők <em>exponenciálisan</em> nőnek: \(t = \lceil \log_2 k \rceil\) lépés után \(2^t \geq k\).
  </div>
  <div class="def-box" style="margin-top:.4rem">
    Írjuk fel \(k\)-t bináris alakban: \(k = \sum_{j=0}^t i_j \cdot 2^j\) ahol \(i_j \in \{0, 1\}\).
    Ekkor
    \[u^k = u^{\sum i_j 2^j} = \prod_{j : i_j = 1} u_j \pmod m.\]
    Vagyis <strong>azon \(u_j\)-ket szorozzuk össze (mod \(m\)), amelyek helyén \(k\)-ban 1-es áll</strong>.
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.62 Megjegyzés.</strong> Lépésszám: \(2t = 2 \lceil \log_2 k \rceil\) szorzás —
    <strong>lineáris</strong> a kitevő bitméretében. Memória: csak \(u_j\)-k tárolása (\(t\) db szám).
    Az algoritmus <em>könyvünk egyik leggyakrabban használt eszköze</em> — RSA, Fermat-teszt,
    Miller–Rabin, prímgenerálás mind erre épül.
  </div>
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">6.61 Példa — \(6456^{4652} \pmod{9786}\)</span>
  <div class="box-body">
    \(k = 4652 = 1001000101100_{(2)}\), vagyis a \(2^2, 2^3, 2^5, 2^9, 2^{12}\) helyiértékek.
    <table class="cayley" style="font-family:monospace;font-size:.82rem;margin:.4rem 0;width:100%">
      <thead><tr><th>\(j\)</th><th>\(u_j \equiv u^{2^j} \pmod{9786}\)</th><th>\(k\) bitje</th></tr></thead>
      <tbody>
        <tr><td>0</td><td>\(u_0 = 6456\)</td><td>0</td></tr>
        <tr><td>1</td><td>\(u_1 = 6456^2 \bmod 9786 = 1362\)</td><td>0</td></tr>
        <tr style="background:rgba(167,139,250,.1)"><td>2</td><td><strong>\(u_2 = 1362^2 \bmod 9786 = 5490\)</strong></td><td><strong>1</strong></td></tr>
        <tr style="background:rgba(167,139,250,.1)"><td>3</td><td><strong>\(u_3 = 5490^2 \bmod 9786 = 9006\)</strong></td><td><strong>1</strong></td></tr>
        <tr><td>4</td><td>\(u_4 = 9006^2 \bmod 9786 = 1668\)</td><td>0</td></tr>
        <tr style="background:rgba(167,139,250,.1)"><td>5</td><td><strong>\(u_5 = 1668^2 \bmod 9786 = 3000\)</strong></td><td><strong>1</strong></td></tr>
        <tr><td>6</td><td>\(u_6 = 3000^2 \bmod 9786 = 6666\)</td><td>0</td></tr>
        <tr><td>7</td><td>\(u_7 = 6666^2 \bmod 9786 = 7116\)</td><td>0</td></tr>
        <tr><td>8</td><td>\(u_8 = 7116^2 \bmod 9786 = 4692\)</td><td>0</td></tr>
        <tr style="background:rgba(167,139,250,.1)"><td>9</td><td><strong>\(u_9 = 4692^2 \bmod 9786 = 6150\)</strong></td><td><strong>1</strong></td></tr>
        <tr><td>10</td><td>\(u_{10} = 6150^2 \bmod 9786 = 9396\)</td><td>0</td></tr>
        <tr><td>11</td><td>\(u_{11} = 9396^2 \bmod 9786 = 5310\)</td><td>0</td></tr>
        <tr style="background:rgba(167,139,250,.1)"><td>12</td><td><strong>\(u_{12} = 5310^2 \bmod 9786 = 2634\)</strong></td><td><strong>1</strong></td></tr>
      </tbody>
    </table>
    <strong>Végszorzás:</strong>
    \[\begin{aligned}
      u^k &\equiv 5490 \cdot 9006 \cdot 3000 \cdot 6150 \cdot 2634 \\
          &\equiv 4068 \cdot 3000 \cdot 6150 \cdot 2634 \\
          &\equiv 858 \cdot 6150 \cdot 2634 \\
          &\equiv 2046 \cdot 2634 \\
          &\equiv \mathbf{6864} \pmod{9786}
    \end{aligned}\]
    <strong>Eredmény:</strong> \(6456^{4652} \equiv 6864 \pmod{9786}\). &nbsp;
    Csak 13 négyzetreemelés + 4 szorzás — szemben az „eredeti" 4652 szorzással!
  </div>
</div>`,w=String.raw`
<div class="def-box">
  <span class="lbl" style="color:#a78bfa">6.7 § — Primitív gyökök és diszkrét logaritmus</span>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Fogalom</th><th style="text-align:left">Definíció</th></tr></thead>
    <tbody>
      <tr><td><strong>\(o(a)\) — \(a\) rendje</strong></td><td>legkisebb \(d > 0\), amelyre \(a^d \equiv 1 \pmod m\)</td></tr>
      <tr><td><strong>\(d\)-edik egységgyök</strong></td><td>\(a^d \equiv 1\), vagyis \(a\) rendje osztja \(d\)-t</td></tr>
      <tr><td><strong>primitív gyök</strong> \(g\)</td><td>\(o(g) = \varphi(m)\) — \(g\) hatványai kiadják \(\mathbb{Z}_m^*\) <em>összes</em> elemét</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.67 Tétel</span>
  <div class="box-body">
    \(\mathbb{Z}_m^*\)-ban pontosan akkor van primitív gyök, ha
    \(m = 2\), \(m = 4\), \(m = p^\alpha\), vagy \(m = 2p^\alpha\) &nbsp;(ahol \(p\) páratlan prím).
  </div>
</div>

<div class="def-box">
  <span class="lbl lbl--thm">6.70 Definíció — Diszkrét logaritmus</span>
  <div class="box-body">
    Ha \(g\) primitív gyök \(\pmod m\) és \(a = g^k\), akkor
    \[k = \log_g(a) = \operatorname{ind}_g(a) \pmod{\varphi(m)}\]
    az \(a\) <strong>(\(g\)-alapú) diszkrét logaritmusa</strong> / <strong>indexe</strong>.
  </div>
</div>

<div class="warn-box">
  A diszkrét logaritmus kiszámítása nagy \(p\)-re <strong>nehéz probléma</strong> (DLP) —
  a Diffie–Hellman kulcscsere és ElGamal-aláírás erre épül. Nem ismert polinomidejű
  klasszikus algoritmus, de Shor 1994-es <em>kvantumalgoritmusa</em> megoldaná.
</div>

<div class="ex-box">
  <span class="lbl lbl--ex">6.71 Példa — \(p = 47, g = 5\)</span>
  <div class="box-body">
    \(\log_5(26) = 29, \;\log_5(37) = 42\) (a könyv 116. old. táblázata).
    <br/>
    Szorzás logaritmussal: \(\log_5(26 \cdot 37) = 29 + 42 = 71 \equiv 25 \pmod{46}\),
    így \(26 \cdot 37 \equiv 5^{25} = 22 \pmod{47}\).
  </div>
</div>

<div class="def-box">
  <span class="lbl" style="color:#a78bfa;margin-top:.75rem;display:block">6.8 § — Magasabbfokú kongruenciák és kvadratikus maradékok</span>
  <div class="box-body">
    \(x^k \equiv a \pmod m\). Speciálisan \(k = 2\):
    <br/><br/>
    <strong>6.77 Definíció.</strong> Az \(a \in \mathbb{Z}_m\) szám <strong>négyzetes (kvadratikus) maradék</strong> \(\pmod m\),
    ha \(x^2 \equiv a \pmod m\)-nek van megoldása. Egyébként <strong>négyzetes nemmaradék</strong>.
  </div>
</div>

<div class="thm-box">
  <div class="box-body">
    <strong>6.79 Állítás — Hányan vannak?</strong>
    Prím \(p\) modulusra: \(\mathbb{Z}_p \setminus \{0\}\) elemeinek <strong>pontosan a fele</strong>
    (= \(\tfrac{p-1}{2}\)) négyzetes maradék.
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.82 Tétel — Euler-lemma (kvadratikus maradék-teszt)</span>
  <div class="box-body">
    \(p \in \mathbb{P}\), \(p \nmid a\) esetén \(a\) akkor és csak akkor négyzetes maradék \(\pmod p\), ha
    \[a^{(p-1)/2} \equiv 1 \pmod p.\]
    (Ha \(-1\)-et kapunk, akkor \(a\) négyzetes nemmaradék.)
    <div class="thm-box" style="margin-top:.4rem">
      Az Euler-lemma a 6.6 alfejezet gyorshatványozással <strong>polinomidőben</strong> ellenőrzi
      a kvadratikus maradék-tulajdonságot — még akkor is, ha \(a\) <em>négyzetgyökét</em> nem tudjuk
      megtalálni! Erre épül több titkosírás (Goldwasser–Micali szemantikus biztonság).
    </div>
  </div>
</div>

<div class="def-box">
  <span class="lbl lbl--thm">6.84 Definíció — Legendre-szimbólum</span>
  <div class="box-body">
    \(p > 2\) prím, \(a \in \mathbb{Z}\) esetén:
    \[\left(\frac{a}{p}\right) := \begin{cases} 0 & p \mid a \\ +1 & a \text{ négyzetes maradék} \\ -1 & a \text{ négyzetes nemmaradék} \end{cases}\]
    Euler-lemma alapján: \(\left(\tfrac{a}{p}\right) \equiv a^{(p-1)/2} \pmod p.\)
  </div>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.88 Legendre-szimbólum tulajdonságai</span>
  <table class="cayley" style="font-size:.83rem;margin:.4rem 0;width:100%">
    <thead><tr><th style="text-align:left">Tulajdonság</th><th style="text-align:left">Képlet</th></tr></thead>
    <tbody>
      <tr><td>multiplikativitás</td><td>\(\left(\frac{ab}{p}\right) = \left(\frac{a}{p}\right) \cdot \left(\frac{b}{p}\right)\)</td></tr>
      <tr><td>\(-1\) esete</td><td>\(\left(\frac{-1}{p}\right) = +1 \iff p \equiv 1 \pmod 4\)</td></tr>
      <tr><td>\(2\) esete</td><td>\(\left(\frac{2}{p}\right) = +1 \iff p \equiv \pm 1 \pmod 8\)</td></tr>
    </tbody>
  </table>
</div>

<div class="thm-box">
  <span class="lbl lbl--thm">6.89 Tétel — Kvadratikus reciprocitás (Gauss „aranyfia")</span>
  <div class="box-body">
    Tetszőleges \(m, n\) páratlan prímre:
    \[\left(\frac{n}{m}\right) = \begin{cases} -\left(\frac{m}{n}\right) & \text{ha } n \equiv m \equiv 3 \pmod 4 \\ +\left(\frac{m}{n}\right) & \text{máskor} \end{cases}\]
    Gauss <strong>nyolc</strong> különböző bizonyítást adott rá, „aranyfiamnak" (theorema aureum)
    nevezte. A számelmélet egyik legmélyebb és legszebb tétele. Modernebb általánosítások:
    Artin-reciprocitás, Langlands-program.
    <div class="thm-box" style="margin-top:.4rem">
      Algoritmikus haszna: a kvadratikus reciprocitás + 6.88 tulajdonságok együtt kb.
      <strong>Euklidesz-sebességgel</strong> kiszámítják \(\left(\tfrac{a}{p}\right)\)-t —
      \(O(\log^2 p)\) lépésben. Ezzel az RSA-kulcsgenerálás és sok prímteszt működik.
    </div>
  </div>
</div>`,T=[{id:"intro",label:"Áttekintés",content:t.jsx(e,{html:q})},{id:"muvelet",label:"6.1 Műveletek",content:t.jsx(e,{html:_})},{id:"zn",label:"6.2 ℤₙ gyűrű",content:t.jsx(e,{html:A})},{id:"linkong",label:"6.3 Lineáris kongr.",content:t.jsx(e,{html:E})},{id:"phi",label:"6.4–5 φ + tételek",content:t.jsx(e,{html:S})},{id:"hatv",label:"6.6 Nagy hatványozás",content:t.jsxs("div",{children:[t.jsx(e,{html:Z}),t.jsx(j,{})]})},{id:"kvad",label:"6.7–8 Primitív gyök & kvadr.",content:t.jsx(e,{html:w})}];function N(){return t.jsxs("div",{className:"ila",children:[t.jsx(x,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 6. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Kongruenciák és maradékosztályok"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(f,{tabs:T})]})}export{N as default};
