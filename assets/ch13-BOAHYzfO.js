import{j as t,L as x,r as k}from"./index-CAqBiqM_.js";import{T as z,R as g}from"./kit-C3piugpg.js";import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";const f=[[3,2],[5,2],[7,3],[11,2],[13,2],[17,3],[19,2],[23,5],[29,2],[31,3],[37,2],[41,6],[43,3],[47,5],[53,2],[59,2],[61,2],[67,2],[71,7],[73,5],[79,3],[83,2],[89,3],[97,5],[101,2],[103,5],[107,2],[109,6],[113,3],[127,3],[131,2],[137,3],[139,2],[149,2],[151,6],[157,5],[163,2],[167,5],[173,2],[179,2],[181,2],[191,19],[193,5],[197,2],[199,3],[211,2],[223,3],[227,2],[229,6],[233,3],[239,7],[241,7],[251,6],[257,3],[263,5],[269,2],[271,6],[277,5],[281,3],[283,3],[293,2]];function u(e,m){const s=new Map;let n=1;for(let r=0;r<e-1;r++)s.set(n,r),n=n*m%e;return s}function j(){const[e,m]=k.useState(23),[s,n]=k.useState(5),[r,l]=k.useState(7);function o(a,i){if(i<=1)return!1;const v=i-1;let y=1;for(let p=1;p<=v;p++)if(y=y*a%i,y===1&&p<v)return!1;return y===1}const b=e>=3&&e<=100,d=b&&o(s,e),c=[];if(d){let a=1;for(let i=0;i<e-1;i++)c.push(a),a=a*s%e}const h=d?c.indexOf((r%e+e)%e):-1;return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Interaktív diszkrét logaritmus"}),t.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",alignItems:"center",margin:".5rem 0",fontSize:".85rem"},children:[t.jsxs("span",{children:["p = ",t.jsx("input",{type:"number",className:"ila-num",min:3,max:100,value:e,onChange:a=>m(+a.target.value)})]}),t.jsxs("span",{children:["g = ",t.jsx("input",{type:"number",className:"ila-num",min:2,max:e-1,value:s,onChange:a=>n(+a.target.value)})]}),t.jsxs("span",{children:["x = ",t.jsx("input",{type:"number",className:"ila-num",min:1,max:e-1,value:r,onChange:a=>l(+a.target.value)})]}),!b&&t.jsx("span",{style:{color:"#f87171",fontSize:".75rem"},children:"p legyen prím 3–100 közt!"}),b&&!d&&t.jsx("span",{style:{color:"#f87171",fontSize:".75rem"},children:"g nem primitív gyök mod p!"}),d&&t.jsxs("span",{style:{color:"#34d399",fontSize:".75rem"},children:["g = ",s," primitív gyök mod ",e," ✓"]})]}),d&&t.jsxs("div",{children:[t.jsxs("div",{style:{fontFamily:"monospace",fontSize:".82rem",color:"#c9d1d9",marginBottom:".5rem",lineHeight:1.9},children:["log",t.jsx("sub",{children:s}),"(",r,") mod ",e," = ",t.jsx("strong",{style:{color:"#fbbf24",fontSize:"1rem"},children:h>=0?h:"—"}),h>=0?t.jsxs("span",{style:{color:"#34d399"},children:["   (",s,t.jsx("sup",{children:h})," ≡ ",r," mod ",e," ✓)"]}):""]}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontSize:".75rem",fontFamily:"monospace"},children:[t.jsx("thead",{children:t.jsx("tr",{children:Array.from({length:Math.min(11,e)},(a,i)=>t.jsxs("th",{children:["k=",i]},i))})}),t.jsxs("tbody",{children:[t.jsx("tr",{children:c.slice(0,Math.min(11,e)).map((a,i)=>t.jsx("td",{style:{color:a===(r%e+e)%e?"#fbbf24":"#c9d1d9",fontWeight:a===(r%e+e)%e?700:400},children:a},i))}),c.length>11&&t.jsx("tr",{children:c.slice(11,Math.min(22,e)).map((a,i)=>t.jsx("td",{style:{color:a===(r%e+e)%e?"#fbbf24":"#c9d1d9",fontWeight:a===(r%e+e)%e?700:400},children:a},i))})]})]})})]})]})}function A(){const m=[];for(let s=0;s<f.length;s+=4)m.push(f.slice(s,s+4));return t.jsxs("div",{className:"info-box",style:{overflowX:"auto"},children:[t.jsx("span",{className:"lbl",style:{color:"#a78bfa"},children:"Primitív gyökök — legkisebb g értékek (p ≤ 293)"}),t.jsxs("table",{className:"cayley",style:{fontSize:".78rem",fontFamily:"monospace",marginTop:".4rem"},children:[t.jsx("thead",{children:t.jsx("tr",{children:Array.from({length:4},(s,n)=>t.jsxs(t.Fragment,{children:[t.jsx("th",{style:{color:"#a78bfa"},children:"p"},`p${n}`),t.jsx("th",{style:{color:"#fbbf24"},children:"g"},`g${n}`)]}))})}),t.jsx("tbody",{children:m.map((s,n)=>t.jsxs("tr",{children:[s.map(([r,l],o)=>t.jsxs(t.Fragment,{children:[t.jsx("td",{style:{color:"#c9d1d9"},children:r},`p${o}`),t.jsx("td",{style:{color:"#fbbf24",fontWeight:700},children:l},`g${o}`)]})),s.length<4&&Array.from({length:4-s.length},(r,l)=>t.jsxs(t.Fragment,{children:[t.jsx("td",{},`ep${l}`),t.jsx("td",{},`eg${l}`)]}))]},n))})]}),t.jsxs("p",{style:{fontSize:".78rem",color:"#8892a4",marginTop:".4rem"},children:["Megfigyelés: g általában ",t.jsx("em",{children:"kicsi"})," — sokszor 2, 3, 5.",t.jsx("em",{children:" Bizonyítatlan sejtés (Artin):"})," bármely nem-négyzet g primitív gyök végtelen sok prímhez."]})]})}function w(){const s=u(23,5),n=[[],[],[]];let r=1;for(let l=0;l<22;l++){const o=Math.floor(l/10);o<3&&n[o].push(r),r=r*5%23}return t.jsxs("div",{className:"info-box",children:[t.jsx("span",{className:"lbl",style:{color:"#fbbf24"},children:"Diszkrét logaritmus-táblák — Minta p = 23, g = 5"}),t.jsx("div",{style:{marginBottom:".5rem",fontSize:".82rem",color:"#8892a4"},children:"g hatványai mod 23:"}),t.jsx("div",{style:{overflowX:"auto"},children:t.jsxs("table",{className:"cayley",style:{fontSize:".8rem",fontFamily:"monospace"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"k offset"}),Array.from({length:10},(l,o)=>t.jsxs("th",{children:["+",o]},o))]})}),t.jsx("tbody",{children:n.map((l,o)=>t.jsxs("tr",{children:[t.jsxs("td",{style:{color:"#8892a4"},children:[o*10,"+"]}),l.map((b,d)=>t.jsx("td",{style:{color:"#c9d1d9"},children:b},d)),l.length<10&&Array.from({length:10-l.length},(b,d)=>t.jsx("td",{style:{color:"#374151"},children:"—"},`e${d}`))]},o))})]})}),t.jsxs("div",{style:{marginTop:".6rem",fontSize:".82rem",color:"#c9d1d9",lineHeight:1.9},children:[t.jsx("strong",{style:{color:"#fbbf24"},children:"log₅(x) tábla mod 23 — néhány érték:"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".4rem",marginTop:".3rem"},children:Array.from({length:22},(l,o)=>o+1).map(l=>{const o=s.get(l);return t.jsxs("span",{style:{background:"#0d1117",border:"1px solid #30363d",borderRadius:".25rem",padding:".1rem .45rem",fontFamily:"monospace",fontSize:".72rem"},children:[t.jsx("span",{style:{color:"#8892a4"},children:"log₅("}),t.jsx("span",{style:{color:"#fbbf24"},children:l}),t.jsx("span",{style:{color:"#8892a4"},children:")="}),t.jsx("span",{style:{color:"#a78bfa"},children:o})]},l)})})]}),t.jsx("div",{className:"thm-box",style:{marginTop:".6rem"},children:t.jsxs("div",{className:"box-body",children:['Ez a táblázat a 6.71 példa „könyvi" tábla, amellyel a \\(\\bmod p\\) szorzást \\(\\bmod (p-1)\\) ',t.jsx("strong",{children:"összeadásra"})," redukáljuk — a hagyományos logaritmus-táblák analógiájára (Napier 1614)."]})})]})}const Z=String.raw`
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
</div>`,E=String.raw`
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
</div>`,S=String.raw`
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
</div>`,B=String.raw`
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
</div>`,q=String.raw`
<h5 style="color:#a78bfa;font-weight:700;margin:0 0 .75rem">13.3 § — Hivatkozási táblázatok</h5>
<div class="def-box">
  <div class="box-body">
    Az alábbi tábla a 6.7 alfejezet diszkrét logaritmus / index-számolásához használható.
    Minden \(p \in \mathbb{P}\), \(p \leq 293\) prímre megadja a legkisebb pozitív
    <strong>primitív gyököt</strong> \(g\).
  </div>
</div>`,F=String.raw`
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
</div>`,P=[{id:"intro",label:"Áttekintés",content:t.jsx(g,{html:Z})},{id:"boole",label:"13.1 Boole-algebra",content:t.jsx(g,{html:E})},{id:"polinom",label:"13.2a Polinomok",content:t.jsx(g,{html:S})},{id:"eukl",label:"13.2b Euklideszi gyűrűk",content:t.jsx(g,{html:B})},{id:"tablazat",label:"13.3 Táblázatok",content:t.jsxs("div",{children:[t.jsx(g,{html:q}),t.jsx(A,{}),t.jsx(w,{}),t.jsx(j,{}),t.jsx(g,{html:F})]})}];function M(){return t.jsxs("div",{className:"ila",children:[t.jsx(x,{to:"/algo",className:"ila__back",children:"← Fejezetek"}),t.jsx("p",{className:"ila__kicker",children:"Számelmélet — 13. fejezet"}),t.jsx("h1",{className:"ila__title",children:"Függelék — Boole-algebrák, Euklideszi gyűrűk, táblázatok"}),t.jsx("p",{className:"ila__cite",children:"Szalkai István & Dósa György · Pannon Egyetem · Typotex 2011"}),t.jsx(z,{tabs:P})]})}export{M as default};
