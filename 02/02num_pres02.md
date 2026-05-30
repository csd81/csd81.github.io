# Numerikus analízis — 2. Nemlineáris egyenletek, egyenletrendszerek

*Ferenc Hartung — Pannon Egyetem, Matematika Tanszék · 2026*

*Beamer-előadáscsomag (151 fólia) markdown átirata. A fóliák sorrendjét megőrizzük; a matematika KaTeX-kompatibilis. A „Példa" / „Tétel" / „Bizonyítás" típusú színes dobozokat címkével azonosítjuk. A táblázatok és lépcsős-/grafikon-ábrák helyét leíró formában jelöljük.*

---

## 2.1. Fixpont iteráció

### 1. fólia — Címoldal

**Numerikus analízis**  
2. Nemlineáris egyenletek, egyenletrendszerek  
*Ferenc Hartung — Pannon Egyetem, Matematika Tanszék — 2026*

### 2. fólia — szakaszcím

**2.1. Fixpont iteráció**

### 3. fólia

A numerikus analízisben szereplő sorozatokat gyakran *rekurzív definícióval*, más néven *iterációval* adjuk meg. Egy

$$p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1}), \qquad k\geq m-1$$

rekurzív definícióval megadott iterációs módszert *$m$-lépéses iterációnak* nevezünk. Egy $m$-lépéses iterációs sorozatot $m$ kezdeti érték, $p_0,p_1,\dots,p_{m-1}$ határoz meg egyértelműen. Ebben a szakaszban a leggyakoribb esettel, az egylépéses iterációval, más néven *fixpont iterációval* foglalkozunk részletesebben.

Legyen $g\colon I\to I$, ahol $I\subset\mathbb{R}$. A

$$p_{k+1}=g(p_k), \qquad k\geq 0, \qquad p_0\in I$$

rekurzív sorozatot *fixpont iterációnak* nevezzük.

### 4. fólia — Példa

**Példa.** Tekintsük a $g(x)=-\tfrac{1}{8}x^3+x+1$ függvényt! A hozzá tartozó fixpont iteráció

$$p_{k+1}=-\tfrac{1}{8}p_k^3+p_k+1.$$

A sorozat első néhány tagját a $p_0=0.4$ kezdőértékből kiindulva számoljuk ki:

### 5. fólia — táblázat

**Fixpont iteráció, $g(x)=-\tfrac{1}{8}x^3+x+1$**

| $k$ | $p_k$ |
|---:|---|
| 0 | 0.40000000 |
| 1 | 1.39200000 |
| 2 | 2.05484646 |
| 3 | 1.97030004 |
| 4 | 2.01419169 |
| 5 | 1.99275275 |
| 6 | 2.00358428 |
| 7 | 1.99819822 |
| 8 | 2.00089846 |
| 9 | 1.99955017 |
| 10 | 2.00022477 |
| 11 | 1.99988758 |
| 12 | 2.00005620 |
| 13 | 1.99997190 |
| 14 | 2.00001405 |
| 15 | 1.99999297 |

### 6a. fólia — lépcsős diagram (külső nézet)

*Ábra: a $[0,2.5]\times[0,2.5]$ négyzeten ábrázolva $y=x$ (zöld), $y=g(x)$ (piros), és a $(p_0,0)\to(p_0,p_1)\to(p_1,p_1)\to(p_1,p_2)\to\dots$ kék töröttvonal. A $(p_0,p_1)$ és $(p_1,p_2)$ vízszintes szakaszokat felirat jelzi, a megoldás a $(2,2)$ pontban van.*

### 6b. fólia — lépcsős diagram (ráközelítve)

*Ábra: ugyanaz a kép a $[1.97,2.06]\times[1.97,2.06]$ ablakon kinagyítva — a kék töröttvonal spirálisan ráhúzódik a $(2,2)$ fixpontra; piros: $y=g(x)$, zöld: $y=x$.*

### 7. fólia

Az előbbi példában azt tapasztaltuk, hogy a fixpont sorozat az $y=x$ egyenes és az $y=g(x)$ grafikon metszéspontjának $x$-koordinátájához konvergál. Ennek a pontnak az $x$-koordinátája (és persze az $y$-koordinátája is) teljesíti a

$$g(x)=x$$

*fixpont egyenletet*. A $p$ számot a $g$ függvény *fixpontjának* nevezzük, ha

$$g(p)=p.$$

### 8. fólia — Tétel + Bizonyítás

**Tétel.** *Legyen $g\colon[a,b]\to[a,b]$ (vagy $\mathbb{R}\to\mathbb{R}$) folytonos függvény, $p_0\in[a,b]$ rögzített, és tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációs sorozatot. Ha $p_k$ konvergens és $p_k\to p$, akkor $p=g(p)$.*

**Bizonyítás.** A $g$ függvény folytonossága és a $p_k\to p$ feltétel szerint

$$\begin{array}{ccc} p_{k+1} & = & g(p_k) \\ \downarrow & & \downarrow \\ p & = & g(p). \end{array}$$

### 9. fólia — két ellenpélda

**Példa.** Tekintsük a $g(x)=2x$ függvényt. Ekkor a $p_{k+1}=g(p_k)$ egyenletből a $p_0=1$ kezdeti értéket használva kapjuk, hogy $p_k=2^k\to\infty$.

**Példa.** Tekintsük a $g(x)=-x$ függvényt. Ekkor a $p_{k+1}=g(p_k)$ egyenletből a $p_0=1$ kezdeti értéket használva kapjuk, hogy $p_k=(-1)^k$, ami nem konvergens.

### 10. fólia — jelölések

Használni fogjuk az alábbi jelöléseket:

$$
\begin{aligned}
C[a,b] &= C([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ \text{folytonos}\}, \\
C^1[a,b] &= C^1([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ \text{folytonosan differenciálható}\}, \\
C^n[a,b] &= C^n([a,b],\mathbb{R})=\{f\colon[a,b]\to\mathbb{R},\ f\ n\text{-szer folytonosan differenciálható}\}.
\end{aligned}
$$

### 11. fólia — Lagrange-tétel

**Tétel (Lagrange-féle középértéktétel).** *Legyen $f\in C^1[a,b]$. Ekkor létezik olyan $\xi\in(a,b)$, hogy*

$$f(b)-f(a)=f'(\xi)(b-a),$$

*vagy ekvivalens módon,*

$$\frac{f(b)-f(a)}{b-a}=f'(\xi).$$

*Ábra: $f$ grafikonja (piros), $f(a)$ és $f(b)$ között a húr (kék), valamint az $f$-fel párhuzamos érintő a $\xi$ pontban (zöld).*

### 12. fólia — fixpont létezése és egyértelműsége

**Tétel.** *Legyen $g\colon[a,b]\to[a,b]$ folytonos. Ekkor $g$-nek létezik legalább egy fixpontja az $[a,b]$ intervallumon. Ha ezenkívül feltesszük azt is, hogy $g$ differenciálható $(a,b)$-n, és létezik olyan $0\leq c<1$ szám, hogy $|g'(x)|\leq c$ minden $x\in(a,b)$-re, akkor a fixpont egyértelmű.*

**Bizonyítás.** *Ábra: az $[a,b]\times[a,b]$ négyzeten a $g$ folytonos görbéje (piros), valamint az $y=x$ átló (zöld). A görbe metszi az átlót — ez a fixpont.*

### 13. fólia — Bizonyítás folytatása

**Bizonyítás folyt.** A tétel második felének bizonyításához tegyük fel, hogy $g$-nek két fixpontja is van, $p$ és $q$. Ekkor használva a Lagrange-féle középértéktételt, létezik olyan $\xi\in(a,b)$ szám, hogy

$$|p-q|=|g(p)-g(q)|=|g'(\xi)||p-q|\leq c|p-q|,$$

amiből következik, hogy $p=q$, azaz a fixpont egyértelmű.

### 14. fólia — Fixpont tétel

**Tétel (fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény, $g$ differenciálható $(a,b)$-n, és tegyük fel hogy létezik olyan $0\leq c<1$ szám, hogy*

$$|g'(x)|\leq c, \qquad x\in(a,b).$$

*Legyen $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához,*

$$|p_k-p|\leq c^k|p_0-p|, \tag{1}$$

*valamint*

$$|p_k-p|\leq \frac{c^k}{1-c}|p_1-p_0|. \tag{2}$$

### 15. fólia — Bizonyítás

**Bizonyítás.** Előző tétel szerint $g$-nek létezik egyértelmű fixpontja, $p$. Mivel $0\leq c<1$ a feltételek szerint, ezért ha belátjuk (1)-et, abból $p_k\to p$ következik. A feltételek és a Lagrange-féle középértéktétel szerint

$$|p_k-p|=|g(p_{k-1})-g(p)|=|g'(\xi)||p_{k-1}-p|\leq c|p_{k-1}-p|.$$

Ebből (teljes indukcióval) könnyen látható az (1) egyenlőtlenség.

### 16. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** (2) igazolásához legyen $m>k$ tetszőleges. A háromszög-egyenlőtlenséget, középértéktételt és a feltételeket alkalmazva

$$
\begin{aligned}
|p_k-p_m| &\leq |p_k-p_{k+1}|+|p_{k+1}-p_{k+2}|+\dots+|p_{m-1}-p_m| \\
&\leq |g(p_{k-1})-g(p_k)|+|g(p_k)-g(p_{k+1})|+\dots+|g(p_{m-2})-g(p_{m-1})| \\
&\leq c|p_{k-1}-p_k|+c|p_k-p_{k+1}|+\dots+c|p_{m-2}-p_{m-1}| \\
&\leq (c^k+c^{k+1}+\dots+c^{m-1})|p_0-p_1| \\
&= c^k(1+c+\dots+c^{m-k-1})|p_1-p_0| \\
&\leq c^k \sum_{i=0}^\infty c^i|p_1-p_0|.
\end{aligned}
$$

Így

$$|p_k-p_m|\leq\frac{c^k}{1-c}|p_1-p_0|$$

minden $m>k$-ra. Ha $k$ rögzített és $m$ tart a végtelenbe, kapjuk a (2) egyenlőtlenséget.

### 17. fólia — Lipschitz-tulajdonság

Azt mondjuk, hogy a $g$ függvény *Lipschitz-tulajdonságú* az $I$ intervallumon, ha létezik olyan $c\geq 0$ konstans, hogy

$$|g(x)-g(y)|\leq c|x-y|, \qquad x,y\in I. \tag{3}$$

Az egyenlőtlenségben szereplő $c$ számot a $g$ függvény *Lipschitz-konstansának* nevezzük.

- $g$ Lipschitz-tulajdonságú $I$-n $\Rightarrow$ $g$ folytonos $I$-n.
- $g\in C^1[a,b]$ $\Rightarrow$ $g$ Lipschitz-tulajdonságú $[a,b]$-n:

$$|g(x)-g(y)|=|g'(\xi)||x-y|\leq c|x-y|,$$

ahol $c:=\max\{|g'(x)|\colon x\in[a,b]\}$.
- $g$ szakaszonként folytonosan differenciálható $\Rightarrow$ $g$ Lipschitz-tulajdonságú. Például $g(x)=|x|$.

### 18. fólia — kontrakciós elv

Ha $g$ Lipschitz-tulajdonságú egy $0\leq c<1$ Lipschitz-konstanssal, akkor $g$-t *kontrakciónak* nevezzük.

**Tétel (kontrakciós elv, fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény kontrakció, $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához, és teljesülnek az (1) és (2) becslések.*

### 19. fólia — lokális vs globális konvergencia

Azt mondjuk, hogy egy

$$p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1})$$

iterációs módszer *lokálisan konvergál* $p$-hez, ha létezik olyan $\delta>0$, hogy minden $p_0,p_1,\dots,p_{m-1}\in(p-\delta,p+\delta)$ kezdeti értékekhez tartozó $p_k$ sorozat $p$-hez konvergál. Ha a $p_k$ sorozat tetszőleges kezdeti értékre konvergál $p$-hez, akkor az iterációs módszert *globálisan konvergensnek* nevezzük.

---
### 20. fólia — lokális fixponttétel

**Tétel.** *Legyen $g\in C^1[a,b]$, és legyen $p\in(a,b)$ a $g$ függvény egy fixpontja. Tegyük fel, hogy*

$$|g'(p)|<1.$$

*Ekkor a fixpont iteráció lokálisan konvergál $p$-hez, azaz létezik olyan $\delta>0$, hogy a $p_{k+1}=g(p_k)$ sorozat minden $p_0\in(p-\delta,p+\delta)$-ra konvergál $p$-hez.*

*Ábra (két panel): bal — $0<g'(p)<1$ esetén a lépcsős diagram monoton közelít $p$-hez; jobb — $-1<g'(p)<0$ esetén a sorozat spirálisan konvergál $p$-hez.*

### 21. fólia — divergencia két esete

*Ábra (két panel): bal — $1<g'(p)$ esetén a lépcsős diagram eltávolodik $p$-től (monoton divergencia); jobb — $g'(p)<-1$ esetén spirálisan kifelé halad (oszcilláló divergencia).*

---

## 2.2. Iterációs módszerek megállási feltételei

### 22. fólia — szakaszcím

**2.2. Iterációs módszerek megállási feltételei**

### 23. fólia — három feltétel

Tegyük fel, hogy $p_k$ tart a $p$ határértékhez, ahol $f(p)=0$. Megadunk $\varepsilon_1>0$, $\varepsilon_2>0$ és $\varepsilon_3>0$ tolerancia értékeket. A sorozat $k$-adik tagját, $p_k$-t elfogadjuk $p$ közelítésének, ha

1. $|p_k-p_{k-1}|<\varepsilon_1$,  2. $\dfrac{|p_k-p_{k-1}|}{|p_k|}<\varepsilon_2$,  vagy  3. $|f(p_k)|<\varepsilon_3$.

- Az 1. feltétel a közelítés hibájának, $|p_k-p|$-nek numerikus megfelelője.
- A 2. feltétellel a közelítés relatív hibáját, $|p_k-p|/|p|$-et közelítjük numerikusan.
- A 3. feltétel szerint ha a függvényérték kicsi, akkor feltesszük, hogy közel vagyunk a gyökhöz, és megállunk.

### 24. fólia — Példa az 1./2. feltétel csapdájára

**Példa.** Tekintsük a

$$p_k=1+\tfrac{1}{2}+\dots+\tfrac{1}{k}$$

sorozatot. Mivel $|p_k-p_{k-1}|=\tfrac{1}{k}$, ezért 1. teljesül, ha $k$ elég nagy. De $p_k\to\infty$, ha $k\to\infty$. Hasonlóan,

$$\frac{|p_k-p_{k-1}|}{|p_k|}=\frac{\tfrac{1}{k}}{1+\tfrac{1}{2}+\dots+\tfrac{1}{k}}\leq\tfrac{1}{k}\to 0, \quad k\to\infty,$$

így 2. teljesül nagy $k$-ra, de a sorozat nem konvergens.

### 25. fólia — Példa a 3. feltétel csapdájára

**Példa.** Tekintsük az alábbi függvényt: $y=f(x)$ — az $x=p$ közelében meredeken nő, a $p_k$ közelében laposan közelíti $0$-t. *Ábra: a piros görbe $y=f(x)$, vízszintes vonal az $\varepsilon_3$ szinten; $p_k$ ott van, ahol $f(p_k)<\varepsilon_3$, de $p_k$ messze van a valódi $p$ gyöktől.*

Itt a 3. feltétel teljesül, de $p_k$ nem jó közelítése a függvény gyökének. A gyakorlatban a fenti megállási feltételek kombinációját célszerű használni.

---

## 2.3. Intervallumfelezés módszere

### 26. fólia — szakaszcím

**2.3. Intervallumfelezés módszere**

### 27. fólia — Bolzano–Darboux

Az $\alpha$ és $\beta$ valós számok által generált nyílt intervallumot jelölje

$$\langle\alpha,\beta\rangle:=(\min\{\alpha,\beta\},\max\{\alpha,\beta\}).$$

**Tétel (Bolzano–Darboux-tétel).** *Legyen $f\in C[a,b]$, $f(a)\neq f(b)$, és legyen $d\in\langle f(a),f(b)\rangle$. Ekkor létezik olyan $c\in(a,b)$, hogy $f(c)=d$.*

*Ábra: piros görbe $y=f(x)$, $f(a)$ alatt, $f(b)$ fölött; a vízszintes $y=d$ vonal a görbét $c$-ben metszi.*

### 28. fólia — kiindulás

Az $f(x)=0$ nemlineáris egyenlet numerikus megoldását keressük az *intervallumfelezés módszerével*.

Tegyük fel, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz

$$f(a)f(b)<0.$$

Ekkor a Bolzano–Darboux-tétel szerint $f$-nek létezik legalább egy gyöke az $[a,b]$ intervallumban.

*Ábra: piros görbe $a$-ban pozitív, $b$-ben negatív, közben átmetszi az $x$-tengelyt.*

### 29. fólia — intervallumok rekurziója

Definiáljunk intervallumoknak egy sorozatát: legyen

$$[a_0,b_0]=[a,b],$$

és legyen $p_0$ az intervallum felezőpontja, azaz

$$p_0=\frac{a_0+b_0}{2}.$$

Ekkor vagy $f(p_0)=0$, vagy az $[a_0,p_0]$ és $[p_0,b_0]$ intervallumok egyikén $f$ előjelet vált. Ha $f$ az $[a_0,p_0]$ intervallumon vált előjelet, akkor legyen

$$[a_1,b_1]=[a_0,p_0],$$

egyébként

$$[a_1,b_1]=[p_0,b_0].$$

Ezt az eljárást folytatva vagy véges sok lépés után az egyik $p_k$ felezőpont gyöke lesz az $f$ függvénynek, vagy pedig zárt intervallumoknak egy egymásba skatulyázott sorozatát kapjuk, amelyek mindegyike tartalmazza az $f$ függvény egy gyökét.

### 30a/b/c/d. fólia — az iteráció ábrái $n=0,1,2,3$

*Ábra ($n=0$): piros görbe, kék vonal az $[a_0,b_0]$ intervallum, $p_0$ középen.*  
*Ábra ($n=1$): az $[a_1,p_1,b_1]$ szűkebb intervallum az előző bal feléből, a görbe folytatása szürke.*  
*Ábra ($n=2$): további felezés $[a_2,p_2,b_2]$-re.*  
*Ábra ($n=3$): a $[a_3,p_3,b_3]$ intervallum már a gyök közvetlen környékére zsugorodott.*

### 31. fólia

A $k$-adik intervallum hossza

$$b_k-a_k=\frac{b-a}{2^k}\to 0, \quad \text{ha } k\to\infty.$$

Ezért létezik $p\in[a,b]$, amelyre

$$a_k\to p \quad \text{és} \quad b_k\to p, \quad \text{ha } k\to\infty,$$

és $p$ a közös pontja az intervallumoknak. Speciálisan,

$$p_k\to p.$$

### 32. fólia

Tegyük fel például, hogy $f(a)<0$ és $f(b)>0$. Ekkor minden $k$-ra

$$f(a_k)<0 \quad \text{és} \quad f(b_k)>0.$$

Mivel $a_k\to p$ és $b_k\to p$, az $f$ függvény folytonossága miatt

$$f(p)\leq 0 \quad \text{és} \quad f(p)\geq 0,$$

így $f(p)=0$. Mivel $a_k\leq p\leq b_k$ minden $k$-ra, és

$$\underbrace{a_k \quad p_k\,p \quad b_k}_{\text{az }[a_k,b_k]\text{ intervallum}}$$

ezért

$$|p_k-p|\leq\frac{b_k-a_k}{2}=\frac{b-a}{2^{k+1}}.$$

### 33. fólia — Tétel

**Tétel.** *Legyen $f\in C[a,b]$ és $f(a)f(b)<0$. Ekkor az intervallumfelezés módszerével kapott $p_k$ sorozat konvergál az $f$ függvény egy $p$ gyökéhez, és*

$$|p_k-p|\leq\frac{b-a}{2^{k+1}}. \tag{4}$$

A (4) becslésből következik, hogy ha egy előre megadott $\varepsilon>0$ hibakorlátot szeretnénk elérni a közelítéssel, akkor

$$|p_k-p|\leq\frac{b-a}{2^{k+1}}<\varepsilon$$

teljesül, ha

$$k\geq\log_2\frac{b-a}{\varepsilon}-1.$$

### 34. fólia — Példa

**Példa.** Tekintsük az

$$f(x)=e^x-2\cos x$$

függvényt. $f(0)=-1$ és $f(1)>0$, tehát $f$-nek van gyöke a $[0,1]$ intervallumon. (Könnyű belátni, hogy $f$ szigorúan monoton növő, így pontosan egy gyöke van.) A következő táblázat tartalmazza az intervallumfelezéses módszer numerikus eredményét. Az $\varepsilon=10^{-5}$ tolerancia eléréséhez az előző formula szerint $k\geq\log_2 10^5-1\approx 15.61$ lépés elegendő.

### 35. fólia — táblázat

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.50000000 | -1.0644e-01 |
| 1 | 0.50000000 | 1.00000000 | 0.75000000 | 6.5362e-01 |
| 2 | 0.50000000 | 0.75000000 | 0.62500000 | 2.4632e-01 |
| 3 | 0.50000000 | 0.62500000 | 0.56250000 | 6.3206e-02 |
| 4 | 0.50000000 | 0.56250000 | 0.53125000 | -2.3292e-02 |
| 5 | 0.53125000 | 0.56250000 | 0.54687500 | 1.9538e-02 |
| 6 | 0.53125000 | 0.54687500 | 0.53906250 | -1.9818e-03 |
| 7 | 0.53906250 | 0.54687500 | 0.54296875 | 8.7517e-03 |
| 8 | 0.53906250 | 0.54296875 | 0.54101563 | 3.3784e-03 |
| 9 | 0.53906250 | 0.54101563 | 0.54003906 | 6.9670e-04 |
| 10 | 0.53906250 | 0.54003906 | 0.53955078 | -6.4294e-04 |
| 11 | 0.53955078 | 0.54003906 | 0.53979492 | 2.6780e-05 |
| 12 | 0.53955078 | 0.53979492 | 0.53967285 | -3.0810e-04 |
| 13 | 0.53967285 | 0.53979492 | 0.53973389 | -1.4067e-04 |
| 14 | 0.53973389 | 0.53979492 | 0.53976440 | -5.6946e-05 |
| 15 | 0.53976440 | 0.53979492 | 0.53977966 | -1.5083e-05 |
| 16 | 0.53977966 | 0.53979492 | 0.53978729 | 5.8483e-06 |

---

## 2.4. Húrmódszer

### 36. fólia — szakaszcím

**2.4. Húrmódszer**

---
### 37. fólia — húr definíciója

Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos, amelyre $f(a)f(b)<0$. Kiindulásul legyen $[a_0,b_0]=[a,b]$. Az $k$-adik lépésben $p_k$-t az $f$ függvény $a_k$ és $b_k$ pontjaihoz tartozó húrja (azaz az $(a_k,f(a_k))$ és $(b_k,f(b_k))$ pontokat összekötő szakasz) és $x$-tengely metszeteként definiáljuk.

*Ábra: az $f$ piros görbe a $[a_k,b_k]$ intervallumon, kék húr a két végpontot köti össze, a metszéspont az $x$-tengelyen $p_k$.*

Kis számolással kapjuk, hogy

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}. \tag{5}$$

Ezután a következő lépés $[a_{k+1},b_{k+1}]$ intervallumának az $[a_k,p_k]$ és $[p_k,b_k]$ intervallumok közül azt választjuk, ahol a függvény szintén előjelet vált.

### 38. fólia — Algoritmus: Húrmódszer (1/2)

**Algoritmus: Húrmódszer.**

```
INPUT:
    f      - függvény,
    [a,b]  - intervallum, ahol f(a)f(b) < 0
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

i ← 1                  (lépésszám)
q ← a
while i < MAXIT do
    p ← a - f(a)(a - b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
```

### 39. fólia — Algoritmus: Húrmódszer (2/2)

```
    if f(p) f(b) < 0 do
        a ← p
    else if f(a) f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximális iterációszám túllépve.)
```

### 40. fólia — konvergencia konvex esetben

**Tétel.** *Legyen az $f\in C[a,b]$ függvény konvex vagy konkáv $[a,b]$-n és $f(a)f(b)<0$. Ekkor a húrmódszer konvergál az $f$ függvény (egyértelmű) $p$ gyökéhez.*

**Bizonyítás.** Tegyük fel, hogy $f$ konvex és $f(a)>0$, $f(b)<0$. Ekkor

$$a_{k+1}=a \quad \text{és} \quad b_{k+1}=p_k \quad \text{minden } k\text{-ra}.$$

*Ábra (két panel): bal — az $[a_k,b_k]$ intervallumon a konvex piros görbe és a kék húr; jobb — a következő lépésben $[a_{k+1},b_{k+1}]$ szűkebb, és a görbe továbbra is konvex.*

Mivel a $p_k$ sorozat monoton csökkenő és az $a$ szám egy alsó korlátja, ezért konvergál egy $p\geq a$ számhoz. $f(p_k)<0$ minden $k$-ra, ezért $f(p)\leq 0$.

### 41. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Mivel $f(a)>0$, ezért $p>a$. A

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}$$

egyenletből $k\to\infty$ esetén kapjuk, hogy

$$p=a-f(a)\frac{a-p}{f(a)-f(p)},$$

amiből $f(p)=0$ következik. A többi eset hasonlóan látható be.

### 42. fólia — Példa, $[0,1]$

**Példa.** Alkalmazzuk a húrmódszert az $e^x-2\cos x=0$ egyenletre, a $[0,1]$ intervallumból kiindulva!

**Húrmódszer, $f(x)=e^x-2\cos x$, $[0,1]$, $TOL=10^{-5}$**

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967359 | -3.0499e-04 |
| 6 | 0.53967399 | 1.00000000 | 0.53975970 | -6.9856e-05 |
| 7 | 0.53975970 | 1.00000000 | 0.53977933 | -1.5999e-05 |
| 8 | 0.53977933 | 1.00000000 | 0.53978383 | -3.6640e-06 |

### 43. fólia — geometriai ábra, $[0,1]$

*Ábra: $y=f(x)=e^x-2\cos x$ piros, a $[0,1]$ végpontokat összekötő kék húr, és a $[0.4,0.6]$ ablakon a következő, szűkebb húr (zöld); az $x$-tengely metszete adja $p_k$-t.*

### 44. fólia — Példa, $[0,4]$

**Példa.** Alkalmazzuk a húrmódszert az $e^x-2\cos x=0$ egyenletre, a $[0,4]$ intervallumból kiindulva!

**Húrmódszer, $f(x)=e^x-2\cos x$, $[0,4]$, $TOL=10^{-5}$**

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 4.00000000 | 0.07029205 | -9.2224e-01 |
| 1 | 0.07029205 | 4.00000000 | 0.13406612 | -8.3858e-01 |
| 2 | 0.13406612 | 4.00000000 | 0.19119837 | -7.5285e-01 |
| 3 | 0.19119837 | 4.00000000 | 0.24180834 | -6.6826e-01 |
| 4 | 0.24180834 | 4.00000000 | 0.28620106 | -5.8729e-01 |
| ⋮ | ⋮ | ⋮ | ⋮ | ⋮ |
| 47 | 0.53966897 | 4.00000000 | 0.53968870 | -2.6464e-04 |
| 48 | 0.53968870 | 4.00000000 | 0.53970508 | -2.1970e-04 |
| 49 | 0.53970508 | 4.00000000 | 0.53971868 | -1.8240e-04 |
| 50 | 0.53971868 | 4.00000000 | 0.53972996 | -1.5143e-04 |
| 51 | 0.53972996 | 4.00000000 | 0.53973934 | -1.2572e-04 |

Az intervallumfelezés lépésszáma: $\log_2 4/10^{-5}-1\approx 17.61$.

### 45. fólia — geometriai ábra, $[0,4]$

*Ábra: $y=f(x)=e^x-2\cos x$ piros görbéje a $[0,4]$ intervallumon (gyorsan emelkedik 4-ig), a kék húr $(0,-1)$ és $(4,\approx 54)$ között, az $x$-tengely metszete csak nagyon közel van $0$-hoz — ezért lassú az iteráció.*

---

## 2.5. Newton-módszer

### 46. fólia — szakaszcím

**2.5. Newton-módszer**

### 47. fólia — Taylor-tétel

Idézzük fel a Taylor-tételt.

**Tétel (Taylor-tétel).** *Legyen $f\in C^{n+1}[a,b]$, és legyen $x_0\in(a,b)$. Ekkor minden $x\in(a,b)$-hez létezik olyan*

$$\xi=\xi(x)\in\langle x,x_0\rangle=(\min\{x,x_0\},\max\{x,x_0\}),$$

*hogy*

$$f(x)=T_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}, \qquad x\in[a,b],$$

*ahol*

$$T_n(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.$$

### 48. fólia — Newton-iteráció definíciója

Oldjuk meg a

$$f(x)=0$$

egyenletet. Legyen $p_0$ rögzített, és tekintsük az

$$f(p_0)+f'(p_0)(x-p_0)=0$$

lineáris egyenletet. Ennek megoldása

$$x=p_0-\frac{f(p_0)}{f'(p_0)},$$

feltéve $f'(p_0)\neq 0$. A

$$p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)} \tag{6}$$

rekurziót *Newton–Raphson-módszernek* vagy *Newton-módszernek* vagy *érintőmódszernek* hívjuk.

### 49a. fólia — Newton 1. lépés

*Ábra (Newton-módszer: 1. lépés): piros görbe $y=f(x)$; az $(p_0,f(p_0))$ pontban húzott érintő (kék egyenes) metszi az $x$-tengelyt — ez a metszéspont $p_1$.*

### 49b. fólia — Newton 2. lépés

*Ábra (Newton-módszer: 2. lépés): ugyanaz a görbe, hozzávéve az $(p_1,f(p_1))$ pontban húzott zöld érintőt, ami az $x$-tengelyt $p_2$-ben metszi; $p_2$ már közel van a gyökhöz.*

### 50. fólia — Példa

**Példa.** A Newton-módszert alkalmazva oldjuk meg az $e^x-2\cos x=0$ egyenletet.

**Newton-módszer, $f(x)=e^x-2\cos x$, $p_0=0.1$, $TOL=10^{-5}$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 | 7.5291e-01 |
| 2 | 0.5678850726 | 7.8450e-02 |
| 3 | 0.5402639121 | 1.3139e-03 |
| 4 | 0.5397853041 | 3.9302e-07 |
| 5 | 0.5397851608 | 3.5207e-14 |

### 51. fólia — Newton mint fixpont-iteráció

A Newton-módszer egy fixpont iteráció a

$$g(x):=x-\frac{f(x)}{f'(x)} \tag{7}$$

iterációs függvénnyel. $g$-t differenciálva kapjuk

$$g'(x)=1-\frac{(f'(x))^2-f(x)f''(x)}{(f'(x))^2}=\frac{f(x)f''(x)}{(f'(x))^2}. \tag{8}$$

Legyen $p$ az $f$ függvény olyan gyöke, amelyre $f'(p)\neq 0$. Ekkor $g'(p)=0$, így a fixpont tételből rögtön következik:

**Tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a Newton-módszer lokálisan konvergál $p$-hez.*

---
### 52. fólia — arctan-példa

**Példa.** Tekintsük az $f(x)=0.5\arctan x$ függvényt. Ennek egyetlen gyöke $p=0$. $f'(0)=0.5$, így a Newton-módszer lokálisan konvergál $p=0$-hoz. Ellenőrizhető, hogy létezik olyan $p^*\approx 1.3918$, hogy $p_0=p^*$-ra a sorozat

$$p^*,-p^*,p^*,-p^*,\dots,$$

azaz periodikus. Továbbá, ha $|p_0|<p^*$, akkor $p_n\to 0$, és ha $|p_0|>p^*$, akkor $|p_n|\to\infty$.

*Ábra: a piros $y=0.5\arctan x$ görbéje, kék és zöld érintők a $\pm p^*$ pontokban, valamint a vízszintes vonalak $f(p^*)$ és $f(-p^*)$ szintjén — mutatja a periodikus pályát.*

Az alábbi táblázatban a $p_0=1.4$ kezdeti értékhez tartozó sorozat első néhány tagját nyomtattuk ki.

### 53. fólia — táblázat

**Newton-módszer, $f(x)=0.5\arctan x$, $p_0=1.4$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 1.4000000e+00 | 0.4752734 |
| 1 | -1.4136186e+00 | -0.4775591 |
| 2 | 1.4501293e+00 | 0.4835443 |
| 3 | -1.5506260e+00 | -0.4990071 |
| 4 | 1.8470541e+00 | 0.5372889 |
| 5 | -2.8935624e+00 | -0.6190257 |
| 6 | 8.7103258e+00 | 0.7282453 |
| 7 | -1.0324977e+02 | -0.7805557 |
| 8 | 1.6540564e+04 | 0.7853679 |
| 9 | -4.2972148e+08 | -0.7853982 |
| 10 | 2.9006412e+17 | 0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 | 2.7436939e+70 | 0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 | 2.1963537e+282 | 0.7853982 |

### 54. fólia — Newton hátrányai

A Newton-módszer gyors, de az alkalmazásához szükség van az $f'(x)$ képletére. Ez problémás, ha
- az $f$ képlete bonyolult, mert ekkor az $f'$ képlete nagyon hosszú is lehet,
- nincs képletünk $f$-re, de ki tudjuk értékelni az $f(x)$ függvényértékeket nagy pontossággal numerikusan.

---

## 2.6. Szelőmódszer

### 55. fólia — szakaszcím

**2.6. Szelőmódszer**

### 56. fólia — szelőmódszer definíciója

Legyen $p_0$ és $p_1$ két egymástól különböző, általunk választott kezdeti érték. Tekintsük az $f$ függvény grafikonjának $p_0$ és $p_1$ pontjaihoz tartozó szelőt, azaz a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokon átmenő egyenest:

$$y=f(p_1)+\frac{f(p_1)-f(p_0)}{p_1-p_0}(x-p_1).$$

Ennek metszete az $x$-tengellyel

$$p_2=p_1-\frac{p_1-p_0}{f(p_1)-f(p_0)}f(p_1).$$

Ezt az eljárást ismételve kapjuk a

$$p_{k+1}=p_k-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \tag{9}$$

sorozatot. A (9) képlettel definiált kétlépéses iterációs módszert *szelőmódszernek* nevezzük.

### 57a. fólia — szelőmódszer 1. lépés

*Ábra (szelőmódszer: 1. lépés): piros görbe $y=f(x)$, a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokat kék szelő köti össze, amely az $x$-tengelyt $p_2$-ben metszi.*

### 57b. fólia — szelőmódszer 2. lépés

*Ábra (szelőmódszer: 2. lépés): az előző kép, hozzávéve a $(p_1,f(p_1))$ és $(p_2,f(p_2))$ pontokat összekötő zöld szelőt, amely az $x$-tengelyt $p_3$-ban metszi.*

### 58. fólia — Példa

**Példa.** A szelőmódszert alkalmazzuk az $e^x-2\cos x=0$ egyenletre.

**Szelőmódszer, $f(x)=e^x-2\cos x$, $p_0=0$, $p_1=1$, $TOL=10^{-5}$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 | 1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 | 1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 | 6.0793e-11 |

### 59. fólia — Tétel

**Tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a szelőmódszer lokálisan konvergál $p$-hez.*

---

## 2.7. Konvergencia rendje

### 60. fólia — szakaszcím

**2.7. Konvergencia rendje**

### 61. fólia — definíció

Legyen $p_k$ egy konvergens sorozat, melynek határértéke $p$. A $p_k$ sorozat *konvergencia rendje* $\alpha$, ha $\alpha\geq 1$ és létezik olyan $c\geq 0$ szám, hogy

$$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{minden } k\geq 0\text{-ra}, \tag{10}$$

és $\alpha=1$ esetén még azt is kikötjük, hogy $c<1$ legyen. A (10) egyenlőtlenséget felírhatjuk a következő alakban is:

$$\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\leq c, \qquad k\geq 0.$$

- A (10)-et teljesítő $p_k$ sorozatra azt mondhatjuk, hogy a konvergencia rendje *legalább* $\alpha$.
- Ha a $p_k$ sorozat a (10) egyenlőtlenséget teljesíti valamely $\alpha$-ra, de azt nem teljesíti egy $\alpha$-nál nagyobb kitevőre sem, akkor azt mondjuk, hogy a konvergencia rendje *pontosan* $\alpha$.
- Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$, akkor *lineáris*, ha $\alpha=2$, akkor *kvadratikus* konvergenciáról beszélünk.

### 62. fólia — lineáris konvergencia kibővített definíciója

Ha egy $p_k$ sorozat lineárisan konvergál $p$-hez, akkor könnyen látható, hogy teljesíti a

$$|p_k-p|\leq c|p_{k-1}-p|\leq c^2|p_{k-2}-p|\leq\dots\leq c^k|p_0-p|$$

egyenlőtlenségeket. Néhány módszer esetében nem könnyű a (10) típusú egyenlőtlenséget belátni az $\alpha=1$ esetben. Ezért a lineáris konvergencia előbbi általános definícióját kibővítjük úgy, hogy ha egy $p_k$ sorozat teljesíti a

$$|p_k-p|\leq c^k|p_0-p|$$

egyenlőtlenséget egy $0\leq c<1$ konstanssal, akkor is *lineáris konvergenciáról* beszélünk.

### 63. fólia — aszimptotikus hibakonstans, szuperlineáris

Tegyük fel, hogy $p_k\to p$, és a konvergencia rendje $\alpha$. A

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha} \tag{11}$$

véges határértéket, ha létezik, a $p_k$ sorozat *aszimptotikus hibakonstansának* nevezzük. Könnyen látható, hogy ha a (11) határérték létezik és véges, akkor a $p_k$ sorozat konvergencia rendje $\alpha$. Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$ és az aszimptotikus hibakonstansa 0, akkor *szuperlineáris* konvergenciáról beszélünk.

### 64. fólia — Tétel a rend egyértelműségéről

**Tétel.** *Tegyük fel, hogy a $p_k$ sorozat $\alpha$ rendben konvergál $p$-hez a $\lambda\neq 0$ aszimptotikus hibakonstanssal. Ekkor*
1. $\displaystyle\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=0$ *minden $\beta<\alpha$-ra, és*
2. $\displaystyle\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\infty$ *minden $\beta>\alpha$-ra.*

**Bizonyítás.** Az állítás következik a

$$\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\cdot\frac{1}{|p_k-p|^{\beta-\alpha}}$$

összefüggésből.

*Ha egy $p_k$ sorozat (legalább) $\alpha$ rendben konvergál, és az aszimptotikus hibakonstans létezik és nem 0, akkor a konvergencia rendje pontosan $\alpha$.*

### 65. fólia — Newton konvergencia rendje, példa

**Példa.** Tekintsük újra a korábbi példában vizsgált Newton-iterációt! Az alábbi táblázat utolsó három oszlopában feltüntettük a $|p_{k+1}-p|/|p_k-p|^\alpha$ kifejezések értékeit $\alpha=1,2$ és 3-ra, használva a $p=0.5397851608092811$ értéket.

**Newton-módszer konvergencia rendje, $f(x)=e^x-2\cos x$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ | $\alpha=3$ |
|---:|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 | | | |
| 1 | 1.0000000000 | 1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 | 2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 | 1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 | 3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 | 2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

---
### 66. fólia — Tétel: $\alpha$-rendű konvergencia → lokális

**Tétel.** *Tegyük fel, hogy a $p_k$ sorozat teljesíti a (10) egyenlőtlenséget valamely $c\geq 0$-ra és $\alpha>1$-re. Ekkor a $p_n$ sorozat lokálisan konvergál a $p$ számhoz, valamint minden $k$-ra*

$$|p_k-p|\leq c^{\frac{\alpha^k-1}{\alpha-1}}|p_0-p|^{\alpha^k}. \tag{12}$$

**Bizonyítás.**

$$
\begin{aligned}
|p_k-p| &\leq c|p_{k-1}-p|^\alpha\leq c(c|p_{k-2}-p|^\alpha)^\alpha=c^{1+\alpha}|p_{k-2}-p|^{\alpha^2} \\
&\leq c^{1+\alpha+\alpha^2}|p_{k-3}-p|^{\alpha^3}\leq\dots\leq c^{1+\alpha+\alpha^2+\dots+\alpha^{k-1}}|p_0-p|^{\alpha^k},
\end{aligned}
$$

amiből következik a (12). Ekkor

$$|p_k-p|\leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0-p|\right)^{\alpha^k},$$

így ha $p_0$ olyan, hogy $c^{\frac{1}{\alpha-1}}|p_0-p|<1$, akkor $p_k\to p$, azaz $p_k$ lokálisan konvergál $p$-hez.

### 67. fólia — lineáris vs. kvadratikus, példa

**Példa.** Legyenek $p_k\to p$ és $q_k\to q$ lineárisan ill. kvadratikusan konvergáló sorozatok, amelyekre $c=1/2$. Továbbá tegyük fel, hogy $|p_0-p|<1$ és $|q_0-q|<1$. Ekkor kapjuk, hogy $|p_k-p|\leq (1/2)^k$ ill. $|q_k-q|\leq (1/2)^{2^k-1}$. Az alábbi táblázatban ezeket a hibakorlátokat soroltuk fel $k=1,2,\dots,5$-re.

| $k$ | $(1/2)^k$ | $(1/2)^{2^k-1}$ |
|---:|---|---|
| 1 | 5.0000⋅10⁻¹ | 5.0000⋅10⁻¹ |
| 2 | 2.5000⋅10⁻¹ | 1.2500⋅10⁻¹ |
| 3 | 1.2500⋅10⁻¹ | 7.8125⋅10⁻³ |
| 4 | 6.2500⋅10⁻² | 3.0518⋅10⁻⁵ |
| 5 | 3.1250⋅10⁻² | 4.6566⋅10⁻¹⁰ |
| 6 | 1.5625⋅10⁻² | 1.0842⋅10⁻¹⁹ |

### 68. fólia — fixpont iteráció rendje

**Tétel.** *Legyen $g\in C^m[a,b]$, $p\in(a,b)$ és $p=g(p)$. Tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációt.*
1. *Ha $|g'(p)|<1$, akkor a fixpont iteráció lokálisan lineárisan konvergál $p$-hez.*
2. *Ha $g'(p)=g''(p)=\dots=g^{(m-1)}(p)=0$, akkor a fixpont iteráció lokálisan $m$-edrendben konvergál $p$-hez a $g^{(m)}(p)/m!$ aszimptotikus hibakonstanssal.*

### 69. fólia — Bizonyítás

**Bizonyítás.** A 2. állítás bizonyításához vegyük a $g$ függvény $p$-körüli $(m-1)$-edrendű Taylor-közelítését:

$$g(p_k)=g(p)+g'(p)(p_k-p)+\dots+\frac{g^{(m-1)}(p)}{(m-1)!}(p_k-p)^{m-1}+\frac{g^{(m)}(\xi_k)}{m!}(p_k-p)^m,$$

ahol $\xi_k\in\langle p_k,p\rangle$. Ebből következik, használva, hogy az első $m-1$ derivált 0 a $p$ pontban, $g(p)=p$ és $g(p_k)=p_{k+1}$, hogy

$$|p_{k+1}-p|=\frac{|g^{(m)}(\xi_k)|}{m!}|p_k-p|^m\leq c|p_k-p|^m. \tag{13}$$

Az utolsó becslésnél használtuk, hogy $g\in C^m[a,b]$, azaz $g^{(m)}$ folytonos, így korlátos $p$ egy környezetében. A (11) határérték létezése következik az előbbiekből, hiszen $\xi_k\to p$ ha $k\to\infty$, mivel $|\xi_k-p|\leq |p_k-p|$, és ezért

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^m}=\lim_{k\to\infty}\frac{g^{(m)}(\xi_k)}{m!}=\frac{g^{(m)}(p)}{m!}.$$

### 70. fólia — többszörös gyök

A $p\in(a,b)$ számot az $f\in C[a,b]$ függvény *$m$-szeres gyökének* nevezzük, ha létezik olyan $q\in C[a,b]$ függvény, hogy $q(p)\neq 0$ és

$$f(x)=(x-p)^m q(x), \qquad x\in(a,b). \tag{14}$$

**Tétel.** *Legyen $f\in C^m[a,b]$, $p\in(a,b)$.*
1. *Legyen $p$ $m$-szeres gyöke $f$-nek, és a (14) azonosságot teljesítő $q$ függvény $m$-szer differenciálható. Ekkor*

$$f(p)=f'(p)=f''(p)=\dots=f^{(m-1)}(p)=0, \quad \text{és } f^{(m)}(p)\neq 0. \tag{15}$$

2. *Ha (15) teljesül, akkor $p$ $m$-szeres gyöke $f$-nek.*
3. *Tegyük fel, hogy az $f$ függvény akárhányszor differenciálható, $f$-et előállítja a $p$-körüli Taylor-sora, és $f$ teljesíti a (15) relációkat. Ekkor $p$ $m$-szeres gyöke $f$-nek, és a (14) azonosságot teljesítő $q$ függvény is akárhányszor differenciálható, valamint $q$ is Taylor-sorba fejthető $p$-körül.*

### 71. fólia — Newton rendje gyök multiplicitása szerint

**Tétel.** *Legyen $f\in C^2[a,b]$.*
1. *Ha $f(p)=0$ és $f'(p)\neq 0$, akkor a Newton-iteráció lokálisan kvadratikusan konvergál $p$-hez.*
2. *Ha $f(x)=(x-p)^m q(x)$, ahol $q\in C^2[a,b]$, $q(p)\neq 0$, $m>1$, akkor a Newton-iteráció lokálisan lineárisan konvergál $p$-hez.*

### 72. fólia — Bizonyítás

**Bizonyítás.** Az 1. állítás következik az előző tétel 2. állításából, hiszen a Newton-iteráció egy fixpont iteráció a (7) egyenlettel definiált $g$ iterációs függvénnyel, és $g'(p)=0$ a (8) reláció szerint.

Mivel a

$$g(x):=\begin{cases}x-\frac{f(x)}{f'(x)}, & x\neq p,\\ p, & x=p\end{cases}$$

függvényre

$$g(x)=x-\frac{(x-p)^m q(x)}{m(x-p)^{m-1}q(x)+(x-p)^m q'(x)}=x-\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $g$ folytonosan differenciálható $p$-ben, és kis számolással kapjuk

$$g'(p)=1-\frac{1}{m}.$$

Így az előző tétel 2. pontja szerint a konvergencia rendje lineáris.

### 73. fólia — Példa: $x^3+x^2-8x-12$

**Példa.** Keressük meg az $f(x)=x^3+x^2-8x-12$ polinom egy gyökét a Newton–Raphson-módszerrel, a $p_0=0$ és a $p_0=2$ kiindulási értéket és a $10^{-5}$ tolerancia értéket használva! Könnyen látható, hogy $x=-2$ kétszeres gyöke, $x=3$ pedig egyszeres gyöke a polinomnak.

### 74. fólia — táblázat, $p_0=0$

**Newton-módszer, $f(x)=x^3+x^2-8x-12$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 0.0000000000 | -1.2000e+01 | | |
| 1 | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2 | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3 | -1.8853313477 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
| 4 | -1.9433465411 | -1.5866e-02 | 4.9406e-01 | 4.3086e+00 |
| 5 | -1.9718365260 | -3.9436e-03 | 4.9712e-01 | 8.7747e+00 |
| 6 | -1.9859585260 | -9.8308e-04 | 4.9858e-01 | 1.7703e+01 |
| 7 | -1.9929890302 | -2.4542e-04 | 4.9929e-01 | 3.5558e+01 |
| 8 | -1.9964969780 | -6.1313e-05 | 4.9965e-01 | 7.1267e+01 |
| 9 | -1.9982491032 | -1.5323e-05 | 4.9982e-01 | 1.4268e+02 |
| 10 | -1.9991247050 | -3.8300e-06 | 4.9991e-01 | 2.8552e+02 |
| 11 | -1.9995623908 | -9.5743e-07 | 4.9996e-01 | 5.7119e+02 |
| 12 | -1.9997812050 | -2.3935e-07 | 4.9998e-01 | 1.1425e+03 |
| 13 | -1.9998906049 | -5.9835e-08 | 4.9999e-01 | 2.2852e+03 |
| 14 | -1.9999453030 | -1.4959e-08 | 4.9999e-01 | 4.5705e+03 |
| 15 | -1.9999726517 | -3.7396e-09 | 5.0000e-01 | 9.1412e+03 |
| 16 | -1.9999863259 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

### 75. fólia — táblázat, $p_0=2$

**Newton-módszer, $f(x)=x^3+x^2-8x-12$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 | | |
| 1 | 4.0000000000 | 3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 | 6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 | 5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 | 4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 | 3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 | 1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

### 76. fólia — szelőmódszer rendje

**Tétel.** *Ha $f$-nek $p$ egyszeres gyöke, akkor a szelőmódszer*

$$\alpha=\frac{1+\sqrt{5}}{2}\approx 1.618$$

*rendben lokálisan konvergál $p$-hez.*

### 77. fólia — módosított Newton többszörös gyökhöz

Legyen $f\in C^3[a,b]$, és tegyük fel, hogy $p\in(a,b)$ többszörös gyöke $f$-nek, pontosabban feltesszük, hogy $f(x)=(x-p)^m q(x)$ alakú, ahol $m>1$ és $q\in C^3[a,b]$. Definiáljuk a

$$\mu(x)=\begin{cases}\frac{f(x)}{f'(x)}, & \text{ha } x\neq p,\\ 0, & x=p\end{cases}$$

függvényt. Könnyen ellenőrizhető, hogy

$$\mu(x)=\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $\mu\in C^2[a,b]$, továbbá $\mu'(p)=\tfrac{1}{m}$, így $p$ csak egyszeres gyöke $\mu$-nek. Ezért ha $f$ helyett a $\mu$ függvényre alkalmazzuk a Newton-módszert, kvadratikus konvergenciát kapunk. Ennek a módszernek a definíciója tehát

$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}. \tag{16}$$

---

## 2.8. Többváltozós analízis előismeretek

### 78. fólia — szakaszcím

**2.8. Többváltozós analízis előismeretek**

### 79. fólia — gradiens

Legyen $E\subset\mathbb{R}^n$ és tekintsük az $f\colon E\to\mathbb{R}$ $n$-változós függvényt. Az

$$f=f(\mathbf{x})=f(x_1,\dots,x_n)$$

függvény $x_i$ változója szerinti parciális deriváltját $\tfrac{\partial f}{\partial x_i}$ jelöli. Ha az $f$ függvény összes $m$-edrendű parciális deriváltja létezik és folytonos, akkor a függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük. Ezt a tulajdonságot az $f\in C^m$ jelöléssel rövidítjük. Ha $f\in C^1$, akkor $f'$ az $f$ függvény *gradiensvektorát* jelöli, azaz

$$f'(\mathbf{x}):=\left(\frac{\partial f(\mathbf{x})}{\partial x_1},\dots,\frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

---
### 80. fólia — Hesse-mátrix

Ha $f\in C^2$, akkor $f''(\mathbf{x})$ jelöli az ún. *Hesse-mátrixot*:

$$f''(\mathbf{x}):=\begin{pmatrix}\frac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_1\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_1\partial x_n}(\mathbf{x})\\ \frac{\partial^2 f}{\partial x_2\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_2\partial x_n}(\mathbf{x})\\ \vdots & \vdots & & \vdots\\ \frac{\partial^2 f}{\partial x_n\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_n\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_n^2}(\mathbf{x})\end{pmatrix}.$$

### 81. fólia — Taylor-formula többváltozós

**Tétel (Taylor-formula).** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $f\colon E\to\mathbb{R}$, $f\in C^{m+1}$, és legyen $\mathbf{a}\in E$. Ekkor minden $\mathbf{x}\in E$-hez létezik olyan $\xi=\xi(\mathbf{x})\in E$, hogy $\xi=\mathbf{x}+t(\mathbf{a}-\mathbf{x})$ valamely $t\in(0,1)$-re (azaz $\xi$ az $\mathbf{a}$ és $\mathbf{x}$ vektorokat összekötő szakasz valamely pontja), és*

$$
\begin{aligned}
f(x_1,\dots,x_n) &= f(a_1,\dots,a_n)+\sum_{i=1}^n\frac{\partial f(a_1,\dots,a_n)}{\partial x_i}(x_i-a_i) \\
&\quad +\tfrac{1}{2}\sum_{i=1}^n\sum_{j=1}^n\frac{\partial^2 f(a_1,\dots,a_n)}{\partial x_i\partial x_j}(x_i-a_i)(x_j-a_j) \\
&\quad +\dots+\tfrac{1}{m!}\sum_{i_1=1}^n\dots\sum_{i_m=1}^n\frac{\partial^m f(a_1,\dots,a_n)}{\partial x_{i_1}\cdots\partial x_{i_m}}(x_{i_1}-a_{i_1})\cdots(x_{i_m}-a_{i_m}) \\
&\quad +\tfrac{1}{(m+1)!}\sum_{i_1=1}^n\dots\sum_{i_{m+1}=1}^n\frac{\partial^{m+1} f(\xi_1,\dots,\xi_n)}{\partial x_{i_1}\cdots\partial x_{i_{m+1}}}(x_{i_1}-a_{i_1})\cdots(x_{i_{m+1}}-a_{i_{m+1}}).
\end{aligned}
$$

*Ábra: az $\mathbf{x}$ és $\mathbf{a}$ vektorok közötti $\mathbf{x}+t(\mathbf{a}-\mathbf{x})$ szakasz.*

### 82. fólia — másodrendű Taylor

Az előbbi formulából könnyen ellenőrizhető, hogy a gradiensvektor és a Hesse-mátrix jelölést alkalmazva az $f\in C^3$ függvény másodrendű Taylor-közelítése az

$$f(\mathbf{x})\approx f(\mathbf{a})+f'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})+\tfrac{1}{2}(\mathbf{x}-\mathbf{a})^T f''(\mathbf{a})(\mathbf{x}-\mathbf{a})$$

alakban írható fel. Ez indokolja az $f'$ és $f''$ jelölést a gradiensvektorra és a Hesse-mátrixra.

### 83. fólia — vektor értékű függvény deriváltja

Legyen $I\subset\mathbb{R}$, $g\colon I\to\mathbb{R}^n$. $g$ komponensfüggvényeit jelölje $g_i$, azaz legyen

$$g(t)=(g_1(t),\dots,g_n(t))^T.$$

Ekkor $g$-t *differenciálhatónak* nevezzük, ha minden komponensfüggvénye differenciálható, és a deriváltján a

$$g'\colon I\to\mathbb{R}^n, \qquad g'(t):=(g_1'(t),\dots,g_n'(t))^T$$

függvényt értjük. $g$-t *folytonosan differenciálhatónak* nevezzük, ha minden komponensfüggvénye folytonosan differenciálható.

### 84. fólia — láncszabály

**Tétel (láncszabály).** *Legyen $f\colon\mathbb{R}^n\to\mathbb{R}$, $f\in C^1$ és $g\colon\mathbb{R}\to\mathbb{R}^n$ folytonosan differenciálható. Ekkor az $f\circ g\colon\mathbb{R}\to\mathbb{R}$ összetett függvény is folytonosan differenciálható, és*

$$\frac{d}{dt}f(g(t))=f'(g(t))^T g'(t).$$

### 85. fólia — többváltozós Lagrange

A láncszabály következményeként beláthatjuk a Lagrange-tétel következő általánosítását többváltozós valós függvényekre.

**Tétel (Lagrange-féle középértéktétel).** *Legyen $E\subset\mathbb{R}^n$ nyílt, konvex halmaz, $f\colon E\to\mathbb{R}$ folytonosan parciálisan differenciálható. Ekkor minden $\mathbf{x},\mathbf{y}\in E$-hez létezik olyan $\xi\in(0,1)$, hogy*

$$f(\mathbf{x})-f(\mathbf{y})=f'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}).$$

**Bizonyítás.** Definiáljuk a $g(t)=f(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$ egyváltozós valós függvényt $[0,1]$-en. Az egyváltozós valós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint

$$f(\mathbf{x})-f(\mathbf{y})=g(1)-g(0)=g'(\xi)=f'(\mathbf{x}+\xi(\mathbf{y}-\mathbf{x}))^T(\mathbf{x}-\mathbf{y}).$$

### 86. fólia — Jacobi-mátrix

Legyen $E\subset\mathbb{R}^n$ és $\mathbf{f}\colon E\to\mathbb{R}^n$. Az $\mathbf{f}$ függvény komponensfüggvényeit jelölje $f_i$, azaz

$$\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T.$$

Az $\mathbf{f}$ függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük, ha minden komponensfüggvényének minden $m$-edrendű parciális deriváltja létezik és folytonos. $\mathbf{f}\in C^m$ jelöli röviden azt, hogy $\mathbf{f}$ $m$-szer folytonosan parciálisan differenciálható. Az $\mathbf{f}\in C^1$ függvény *Jacobi-mátrixának* vagy *derivált mátrixának* az

$$\mathbf{f}'(\mathbf{x}):=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_1}{\partial x_n}(\mathbf{x})\\ \vdots & & \vdots\\ \frac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_n}{\partial x_n}(\mathbf{x})\end{pmatrix}$$

$n\times n$-es mátrixot hívjuk.

### 87. fólia — lineáris közelítés

Legyen $\mathbf{a}$ rögzített. Ha az $\mathbf{f}$ függvény komponensfüggvényeit az $\mathbf{a}$-körüli elsőrendű Taylor-polinomjaival közelítjük, akkor kapjuk, hogy

$$\mathbf{f}(\mathbf{x})=\begin{pmatrix}f_1(\mathbf{x})\\ \vdots\\ f_n(\mathbf{x})\end{pmatrix}\approx\begin{pmatrix}f_1(\mathbf{a})+f_1'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\\ \vdots\\ f_n(\mathbf{a})+f_n'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\end{pmatrix}=\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a}).$$

Az $\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a})$ kifejezést az $\mathbf{f}$ függvény $\mathbf{a}$-körüli *lineáris közelítésének* hívjuk.

---

## 2.9. Vektor- és mátrixnormák, vektor- és mátrixsorozatok

### 88. fólia — szakaszcím

**2.9. Vektor- és mátrixnormák, vektor- és mátrixsorozatok**

### 89. fólia — abszolút érték emlékeztető

Idézzük fel a valós számok abszolút értékének tulajdonságait:
1. $|x|\geq 0$, és $|x|=0$ akkor és csak akkor, ha $x=0$;
2. $|cx|=|c||x|$, minden $c,x\in\mathbb{R}$-re;
3. $|x+y|\leq|x|+|y|$, minden $x,y\in\mathbb{R}$-re (háromszög-egyenlőtlenség).

Az $x$ abszolút értéke visszaadja az $x$ távolságát az origótól: *Ábra: számegyenes, $0$-tól $x$-ig nyíl, $|x|$ címke.*

Az $x$ és $y$ pontok távolsága $|x-y|$. *Ábra: számegyenes $0$, $x$, $y$ pontokkal és $|x-y|$ szakasszal.*

### 90. fólia — vektornorma definíciója

Az $\mathbf{x}\in\mathbb{R}^n$ vektor komponenseit

$$\mathbf{x}=(x_1,x_2,\dots,x_n)^T$$

jelöli.

**Definíció.** Az $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ függvényt *vektornormának* nevezzük, ha
1. $\|\mathbf{x}\|\geq 0$ minden $\mathbf{x}\in\mathbb{R}^n$-re, és $\|\mathbf{x}\|=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$;
2. $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$ minden $c\in\mathbb{R}$ és $\mathbf{x}\in\mathbb{R}^n$-re;
3. (háromszög-egyenlőtlenség:) $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re.

### 91. fólia — Tétel: norma fordított háromszög + folytonosság

**Tétel.** *Egy tetszőleges $\|\cdot\|$ vektornormára*
1. $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$,
2. *$\|\cdot\|$ folytonos függvény $\mathbb{R}^n$-en.*

**Bizonyítás.** A háromszög-egyenlőtlenség alapján

$$\|\mathbf{x}\|=\|\mathbf{x}-\mathbf{y}+\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|+\|\mathbf{y}\|,$$

amiből

$$\|\mathbf{x}\|-\|\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|$$

következik. Ugyanígy

$$\|\mathbf{y}\|-\|\mathbf{x}\|\leq\|\mathbf{x}-\mathbf{y}\|$$

is teljesül, így az 1. állítás igaz. A $\|\cdot\|$ norma függvény folytonossága következik az 1. pontban bizonyított egyenlőtlenségből.

### 92. fólia — $p$-norma, euklideszi

Legyen $p\geq 1$, és definiáljuk az ún. *$p$-normát*:

$$\|\mathbf{x}\|_p:=\left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Nyilván $\|\mathbf{x}\|_p\geq 0$, és $\|\mathbf{x}\|_p=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$.

$$\|c\mathbf{x}\|_p=\left(\sum_{i=1}^n |cx_i|^p\right)^{1/p}=\left(|c|^p\sum_{i=1}^n |x_i|^p\right)^{1/p}=|c|\|\mathbf{x}\|_p.$$

Belátható, hogy $\|\cdot\|_p$ teljesíti a háromszög-egyenlőtlenséget minden $p\geq 1$-re. A $p=2$-höz tartozó $\|\cdot\|_2$ normát, azaz a

$$\|\mathbf{x}\|_2=\sqrt{\sum_{i=1}^n x_i^2}$$

képletet *euklideszi normának* is szokás nevezni.

### 93. fólia — 1-norma és végtelen norma

Egy gyakran használt speciális eset az *1-norma*:

$$\|\mathbf{x}\|_1:=\sum_{i=1}^n |x_i|.$$

Egy másik gyakran használt vektornorma az ún. *végtelen norma*

$$\|\mathbf{x}\|_\infty:=\max_{i=1,\dots,n}|x_i|.$$

Nyilván $\|\mathbf{x}\|_\infty\geq 0$, és $\|\mathbf{x}\|_\infty=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$.

$$\|c\mathbf{x}\|_\infty:=\max_{i=1,\dots,n}|cx_i|=\max_{i=1,\dots,n}|c||x_i|=|c|\max_{i=1,\dots,n}|x_i|=|c|\|\mathbf{x}\|_\infty.$$

Rögzített $i$-re kapjuk

$$|x_i+y_i|\leq|x_i|+|y_i|\leq\max_{i=1,\dots,n}|x_i|+\max_{i=1,\dots,n}|y_i|=\|\mathbf{x}\|_\infty+\|\mathbf{y}\|_\infty.$$

Mivel a jobb oldal $i$-től független, ezért

$$\|\mathbf{x}+\mathbf{y}\|_\infty=\max_{i=1,\dots,n}|x_i+y_i|\leq\|\mathbf{x}\|_\infty+\|\mathbf{y}\|_\infty,$$

így $\|\cdot\|_\infty$ teljesíti a norma tulajdonságait.

---
### 94. fólia — Cauchy–Bunyakovszkij–Schwarz

**Tétel (Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség).** *Minden $x_1,\dots,x_n,y_1,\dots,y_n\in\mathbb{R}$-re teljesül a*

$$\left(\sum_{i=1}^n x_i y_i\right)^2\leq\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2$$

*egyenlőtlenség, ahol akkor és csak akkor áll fenn egyenlőség, ha létezik olyan $\lambda\in\mathbb{R}$, hogy $y_i=\lambda x_i$ minden $i=1,2,\dots,n$-re.*

### 95. fólia — Bizonyítás

**Bizonyítás.** Tekintsük a

$$p(t):=t^2\sum_{i=1}^n x_i^2-2t\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2$$

másodfokú polinomot. Ekkor

$$p(t)=\sum_{i=1}^n(tx_i-y_i)^2\geq 0, \qquad t\in\mathbb{R},$$

így $p$-nek nem lehet két valós gyöke, azaz

$$4\left(\sum_{i=1}^n x_i y_i\right)^2-4\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2\leq 0.$$

Másrészt $p(t)=0$ akkor és csak akkor, ha a diszkriminánsa egyenlő nullával, és valamely $t=\lambda$-ra minden $i=1,2,\dots,n$-re $y_i=\lambda x_i$.

### 96. fólia — vektoriális alak

**Corollary.** *Tetszőleges $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re*

$$|\mathbf{x}^T\mathbf{y}|\leq\|\mathbf{x}\|_2\|\mathbf{y}\|_2$$

*teljesül, ahol egyenlőség akkor és csak akkor van, ha $\mathbf{y}=\lambda\mathbf{x}$ valamely $\lambda\in\mathbb{R}$-re.*

### 97. fólia — euklideszi norma háromszög-egyenlőtlensége

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{x}+\mathbf{y}\|_2^2 &= \sum_{i=1}^n(x_i+y_i)^2 \\
&= \sum_{i=1}^n x_i^2+2\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2+2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2}+\sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2}+\sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2+\|\mathbf{y}\|_2)^2,
\end{aligned}
$$

ami igazolja, hogy az euklideszi norma teljesíti a háromszög-egyenlőtlenséget.

### 98. fólia — geometriai szemléltetés

Kétdimenziós $\mathbf{x}=(x_1,x_2)$ vektorok esetében az $(x_1,x_2)$ pontokat a koordináta-rendszerben azonosíthatjuk a helyvektorokkal, azaz az origóból az $(x_1,x_2)$ pontba mutató síkbeli vektorral. Ennek a vektornak a hossza

$$\|\mathbf{x}\|_2=\sqrt{x_1^2+x_2^2}.$$

*Ábra (bal): koordináta-rendszer, kék vektor az origóból $\mathbf{x}=(x_1,x_2)$-be, hossza $\|\mathbf{x}\|_2$.*

Az $\mathbf{x}=(x_1,x_2)$ és $\mathbf{y}=(y_1,y_2)$ pontok távolsága

$$\|\mathbf{x}-\mathbf{y}\|_2=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}.$$

*Ábra (jobb): két helyvektor $\mathbf{x}$ és $\mathbf{y}$, közöttük a piros $\mathbf{x}-\mathbf{y}$ szakasz.*

### 99. fólia — vektorsorozat konvergencia

A $\|\mathbf{x}\|$-t az $\mathbf{x}$ vektor *hosszának*, azaz a $\mathbf{0}$-tól való távolságának nevezzük. Az $\mathbf{x}$ és $\mathbf{y}$ vektorok távolságán az

$$\|\mathbf{x}-\mathbf{y}\|$$

számot értjük. Legyen $\mathbf{p}^{(k)}$ $n$-dimenziós vektoroknak egy sorozata, és $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Azt mondjuk, hogy a $\mathbf{p}^{(k)}$ sorozat a $\mathbf{p}$ vektorhoz *konvergál*, ha

$$\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0.$$

### 100. fólia — normák ekvivalenciája

**Tétel.** *Legyen $|\cdot|$ és $\|\cdot\|$ két vektornorma, és $\mathbf{p}^{(k)}$ egy vektorsorozat $\mathbb{R}^n$-en. Ekkor $\lim_{k\to\infty}|\mathbf{p}^{(k)}-\mathbf{p}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0$.*

**Bizonyítás.** Elegendő megmutatni, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\to 0$, ahol $\|\cdot\|$ egy tetszőleges norma $\mathbb{R}^n$-en. Ez teljesül, ha belátjuk, hogy léteznek olyan $m$ és $M$ konstansok, hogy

$$m\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\leq\|\mathbf{p}^{(k)}-\mathbf{p}\|\leq M\|\mathbf{p}^{(k)}-\mathbf{p}\|_1. \tag{17}$$

Legyen $E:=\{\mathbf{x}\in\mathbb{R}^n\colon \|\mathbf{x}\|_1=1\}$. $E$ korlátos és zárt részhalmaza $\mathbb{R}^n$-nek, ezért a $\|\cdot\|$ folytonos függvény felveszi maximumát és minimumát $E$-n. Legyenek ezek $M$ és $m$. Legyen $\mathbf{x}\in E$, ezért $m\leq\|\mathbf{x}\|\leq M$, amit beszorozva $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$-val kapjuk (17) egyenlőtlenséget.

### 101. fólia — komponensenkénti konvergencia

**Tétel.** *Legyen $\mathbf{p}^{(k)}$ és $\mathbf{p}$ vektor $i$-edik komponense $p_i^{(k)}$ ill. $p_i$. Ekkor a $\mathbf{p}^{(k)}$ vektorsorozat akkor és csak akkor konvergál a $\mathbf{p}$ vektorhoz, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re, ha $k\to\infty$.*

**Bizonyítás.** Az előbbi tétel szerint

$$\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$$

akkor és csak akkor, ha

$$\|\mathbf{p}^{(k)}-\mathbf{p}\|_1=\sum_{i=1}^n|p_i^{(k)}-p_i|\to 0,$$

ami pontosan akkor teljesül, ha

$$p_i^{(k)}\to p_i, \qquad i=1,2,\dots,n.$$

### 102. fólia — mátrixnorma definíciója

Az $n\times n$-es valós mátrixok halmazát $\mathbb{R}^{n\times n}$-nel jelöljük. Legyen $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en.

**Definíció.** Az

$$\|\mathbf{A}\|:=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

képlettel definiált $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvényt az $\|\cdot\|$ vektornorma által generált *mátrixnormának* nevezzük.

Itt a sup a legkisebb felső korlátot jelöli, azaz a legkisebb $M$, amire

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq M \quad \text{minden } \mathbf{x}\neq\mathbf{0}\text{-ra}.$$

Megmutatható, hogy a mátrixnorma definícióban szereplő sup (azaz legkisebb felső korlát) max-ra cserélhető, azaz létezik olyan $\mathbf{x}$ vektor, amelyre

$$\|\mathbf{A}\|=\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}.$$

### 103. fólia — Tétel: mátrixnorma tulajdonságok

**Tétel.** *Minden $\mathbf{A},\mathbf{B}\in\mathbb{R}^{n\times n}$-re*
1. $\|\mathbf{A}\|\geq 0$, és $\|\mathbf{A}\|=0$ akkor és csak akkor, ha $\mathbf{A}=\mathbf{0}$,
2. $\|c\mathbf{A}\|=|c|\|\mathbf{A}\|$ minden $c\in\mathbb{R}$-re,
3. *(háromszög-egyenlőtlenség)* $\|\mathbf{A}+\mathbf{B}\|\leq\|\mathbf{A}\|+\|\mathbf{B}\|$,
4. $\|\mathbf{A}\mathbf{x}\|\leq\|\mathbf{A}\|\|\mathbf{x}\|$, minden $\mathbf{x}\in\mathbb{R}^n$-re,
5. $\|\mathbf{A}\mathbf{B}\|\leq\|\mathbf{A}\|\|\mathbf{B}\|$,
6. $\|\mathbf{A}\|=\sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\|=1\}$.

**Bizonyítás.** (ii)

$$\|c\mathbf{A}\|=\sup_{\mathbf{x}\neq 0}\frac{\|c\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\sup_{\mathbf{x}\neq 0}\frac{|c|\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=|c|\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=|c|\|\mathbf{A}\|.$$

(iii)

$$\|\mathbf{A}+\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|(\mathbf{A}+\mathbf{B})\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|+\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|+\|\mathbf{B}\|.$$

### 104. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** A 4. állítás következik az

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{y}\neq 0}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|}=\|\mathbf{A}\|$$

egyenlőtlenségből. A 4. állítást felhasználva

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|,$$

ezért

$$\|\mathbf{A}\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|.$$

Végül a 6. állítás következik az alábbi egyenlőségből:

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|.$$

### 105. fólia — mátrixnormák ekvivalenciája

**Tétel.** *Jelöljön $|\cdot|$ és $\|\cdot\|$ két vektornormát ill. az általa generált mátrixnormát. Legyen $\mathbf{A}^{(k)}$ egy mátrixsorozat $\mathbb{R}^{n\times n}$-en. Ekkor $\lim_{k\to\infty}|\mathbf{A}^{(k)}-\mathbf{A}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{A}^{(k)}-\mathbf{A}\|=0$.*

**Bizonyítás.** Megmutatjuk, hogy léteznek olyan $l,L$ nemnegatív konstansok, hogy

$$l|\mathbf{B}|\leq\|\mathbf{B}\|\leq L|\mathbf{B}|, \qquad \mathbf{B}\in\mathbb{R}^{n\times n}.$$

Korábbi tétel bizonyításából következik, hogy létezik olyan $m,M>0$, hogy

$$m|\mathbf{x}|\leq\|\mathbf{x}\|\leq M|\mathbf{x}|, \qquad x\in\mathbb{R}^n.$$

Ekkor

$$\tfrac{m}{M}|\mathbf{B}|=\sup_{\mathbf{x}\neq 0}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|}\leq\|\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|}=\tfrac{M}{m}|\mathbf{B}|.$$

### 106. fólia — 1- és $\infty$-norma képlete

**Tétel.** *Legyen $\mathbf{A}=(a_{ij})\in\mathbb{R}^{n\times n}$. Ekkor az $\|\cdot\|_1$ és $\|\cdot\|_\infty$ vektornormák által generált mátrixnorma*

$$\|\mathbf{A}\|_1=\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|,$$

*illetve*

$$\|\mathbf{A}\|_\infty=\max_{i=1,\dots,n}\sum_{j=1}^n|a_{ij}|.$$

### 107. fólia — bizonyítás 1-normára

**Bizonyítás.** Az $\|\cdot\|_1$ vektornorma definíciója és a háromszög-egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n\left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n\sum_{j=1}^n|a_{ij} x_j| \\
&= \sum_{j=1}^n|x_j|\sum_{i=1}^n|a_{ij}| \\
&\leq \left(\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|\right)\sum_{j=1}^n|x_j| \\
&= \left(\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|\right)\|\mathbf{x}\|_1,
\end{aligned}
$$

---
ezért $\|\mathbf{A}\|_1\leq\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|$.

### 108. fólia — bizonyítás folyt.

**Bizonyítás folyt.** Legyen

$$\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|=\sum_{i=1}^n|a_{ik}|.$$

Az egyenlőséget abból kapjuk, hogy ha az $\mathbf{e}^{(k)}=(0,\dots,0,1,0,\dots,0)^T$ vektorra alkalmazzuk $\mathbf{A}$-t, ahol $e_i^{(k)}=0$ ha $i\neq k$ és $e_k^{(k)}=1$, akkor

$$\mathbf{A}\mathbf{e}^{(k)}=(a_{1k},a_{2k},\dots,a_{nk})^T,$$

így

$$\|\mathbf{A}\mathbf{e}^{(k)}\|_1=\sum_{i=1}^n|a_{ik}|.$$

### 109. fólia — vektorsorozat konvergencia tulajdonságok

**Tétel.**
1. *Ha a $\mathbf{p}^{(k)}$ vektorsorozat konvergens, akkor a határérték egyértelmű.*
2. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$ és $\mathbf{q}^{(k)}\to\mathbf{q}$, $\alpha,\beta\in\mathbb{R}$, akkor $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}$ konvergens, és $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}\to\alpha\mathbf{p}+\beta\mathbf{q}$.*
3. *Ha $c_k\to c$ valós számsorozat és $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $c_k\mathbf{p}^{(k)}\to c\mathbf{p}$.*
4. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $\mathbf{A}\mathbf{p}^{(k)}\to\mathbf{A}\mathbf{p}$ minden $\mathbf{A}\in\mathbb{R}^{n\times n}$-re.*
5. *(Cauchy-féle konvergenciakritérium)* $\mathbf{p}^{(k)}$ *akkor és csak akkor konvergens, ha Cauchy-sorozat, azaz bármely $\varepsilon>0$-hoz létezik olyan $k_0>0$ küszöbszám, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|<\varepsilon$ minden $k,m>k_0$-ra.*

### 110. fólia — többváltozós Lagrange vektor értékre

**Tétel (Lagrange-féle középértéktétel).** *Jelöljön $\|\cdot\|$ egy tetszőleges vektornormát $\mathbb{R}^n$-en illetve az általa generált mátrixnormát. Legyen $E\subset\mathbb{R}^n$ nyílt konvex halmaz, $\mathbf{f}\colon E\to\mathbb{R}^n$ folytonosan parciálisan differenciálható, $\mathbf{x},\mathbf{y}\in E$. Ekkor*

$$\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|\leq\max_{t\in[0,1]}\|\mathbf{f}'(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))\|\cdot\|\mathbf{x}-\mathbf{y}\|.$$

### 111. fólia — Bizonyítás

**Bizonyítás.** Az állítást csak a $\|\cdot\|=\|\cdot\|_2$ speciális esetben bizonyítjuk. Legyen

$$\mathbf{h}:=\frac{\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2}.$$

Ekkor $\|\mathbf{h}\|_2=1$. Legyen $\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T$, $\mathbf{h}=(h_1,\dots,h_n)^T$. Definiáljuk a

$$g(t):=\mathbf{h}^T\mathbf{f}(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))=\sum_{i=1}^n h_i f_i(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$$

valós függvényt. Ekkor az egyváltozós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint…

### 112. fólia — Bizonyítás folyt.

**Bizonyítás folyt.**

$$
\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) &= g(1)-g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}) \\
&= \mathbf{h}^T\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})
\end{aligned}
$$

valamely $\xi\in(0,1)$-re. Így $\mathbf{h}$ definíciója, a C-B-S egyenlőtlenség vektoriális alakja, $\|\mathbf{h}\|_2=1$ és a mátrixnorma tulajdonsága alapján

$$
\begin{aligned}
\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y}) \\
&\leq \|\mathbf{h}\|_2\|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))\|_2\|\mathbf{x}-\mathbf{y}\|_2.
\end{aligned}
$$

---

## 2.10. Fixpont tétel $n$-dimenzióban

### 113. fólia — szakaszcím

**2.10. Fixpont tétel $n$-dimenzióban**

### 114. fólia — bevezető példa

**Példa.** Tekintsük a

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned} \tag{18}$$

egyenletrendszert. Ennek megoldása $x_1=1$ és $x_2=0$. Alakítsuk át a (18) rendszert a következő módon. Fejezzük ki az első egyenletből $x_1$-et, a másodikból pedig $x_2$-t:

$$\begin{aligned}x_1 &= \tfrac{1}{4}(e^{x_1 x_2}+3)\\ x_2 &= \tfrac{1}{3}(x_1-x_2^2-1)\end{aligned} \tag{19}$$

Az egyenletrendszert röviden az $\mathbf{x}=\mathbf{g}(\mathbf{x})$ alakban írhatjuk fel a vektoriális jelölést alkalmazva, ahol $\mathbf{x}=(x_1,x_2)^T$ és

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}. \tag{20}$$

### 115. fólia — Példa folyt.

**Példa folyt.** Az egyváltozós fixpont iterációhoz hasonlóan (19) megoldására definiáljuk a következő iterációt $k=0,1,2,\dots$-re:

$$\begin{aligned}p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}}+3)\\ p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)}-(p_2^{(k)})^2-1\right)\end{aligned} \tag{21}$$

Definiálva a

$$\mathbf{p}^{(k)}=(p_1^{(k)},p_2^{(k)})^T$$

vektorsorozatot, a (21) egyenletrendszert röviden a

$$\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$$

alakban írhatjuk fel.

### 116. fólia — táblázat

**Fixpont iteráció**

| $k$ | $p_1^{(k)}$ | $p_2^{(k)}$ |
|---:|---|---|
| 0 | -2.000000000 | -2.000000000 |
| 1 | 14.399537510 | -2.333333333 |
| 2 | 0.750000000 | 2.651697690 |
| 3 | 2.576641266 | -2.427166879 |
| 4 | 0.750480717 | -1.438165931 |
| 5 | 0.834956989 | -0.772613509 |
| 6 | 0.881152644 | -0.253991549 |
| 7 | 0.949867689 | -0.061119687 |
| 8 | 0.985899367 | -0.017955976 |
| 9 | 0.995613247 | -0.004807684 |
| 10 | 0.998806211 | -0.001469956 |
| 11 | 0.999633219 | -0.000398650 |
| 12 | 0.999900394 | -0.000122313 |

### 117. fólia — kontrakció, fixpont tétel

Legyen $E\subset\mathbb{R}^n$, és tekintsünk egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvényt. A $\mathbf{p}\in E$ vektort a $\mathbf{g}$ függvény *fixpontjának* nevezzük, ha

$$\mathbf{p}=\mathbf{g}(\mathbf{p}).$$

Egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvény *kontrakció* az $E$ halmazon a $\|\cdot\|$ vektornormában, ha létezik egy $0\leq c<1$ szám, hogy

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq c\|\mathbf{x}-\mathbf{y}\|$$

minden $\mathbf{x},\mathbf{y}\in E$-re.

**Tétel (fixpont tétel).** *Legyen $E\subset\mathbb{R}^n$ zárt, $\mathbf{g}\colon E\to E$, és legyen $\mathbf{g}$ kontrakció az $E$ halmazon valamely $\|\cdot\|$ normában. Ekkor $\mathbf{g}$-nek létezik egyértelmű $\mathbf{p}\in E$ fixpontja, és a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció $\mathbf{p}$-hez konvergál minden $\mathbf{p}^{(0)}\in E$ kezdeti értékre. A konvergencia rendje legalább lineáris.*

### 118. fólia — Bizonyítás

**Bizonyítás.** Belátjuk, hogy a $\mathbf{p}^{(k)}$ sorozat Cauchy-sorozat. Legyen $c$ a $\mathbf{g}$ függvény Lipschitz-konstansa, és legyen $k>m$. A fixpont sorozat definíciója és a kontrakciós tulajdonságból kapjuk

$$
\begin{aligned}
&\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}+\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}+\dots+\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&\leq \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}\|+\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\dots+\|\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)})-\mathbf{g}(\mathbf{p}^{(k-2)})\|+\|\mathbf{g}(\mathbf{p}^{(k-2)})-\mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad +\dots+\|\mathbf{g}(\mathbf{p}^{(m)})-\mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\|\mathbf{p}^{(k-2)}-\mathbf{p}^{(k-3)}\|+\dots+\|\mathbf{p}^{(m)}-\mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1}+c^{k-2}+\dots+c^m)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1}+c^{k-m-2}+\dots+1)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&\leq c^m\sum_{i=0}^\infty c^i\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\|.
\end{aligned}
$$

### 119. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Ebből adódik hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|\to 0$, ha $m\to\infty$, tehát $\mathbf{p}^{(k)}$ Cauchy-sorozat. Így $\mathbf{p}^{(k)}$ konvergál egy $\mathbf{p}$ vektorhoz. A $\mathbf{g}$ függvény folytonossága alapján ekkor

$$\begin{array}{ccc}\mathbf{p}^{(k+1)} & = & \mathbf{g}(\mathbf{p}^{(k)})\\ \downarrow & & \downarrow\\ \mathbf{p} & = & \mathbf{g}(\mathbf{p}),\end{array}$$

azaz $\mathbf{p}$ fixpontja $\mathbf{g}$-nek.

A konvergencia rendje legalább lineáris, hiszen

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|=\|\mathbf{g}(\mathbf{p}^{(k)})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|.$$

### 120. fólia — egyértelműség

**Bizonyítás folyt.** Tegyük fel, hogy $\mathbf{p}$ és $\bar{\mathbf{p}}$ fixpontjai $\mathbf{g}$-nek. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján

$$\|\mathbf{p}-\bar{\mathbf{p}}\|=\|\mathbf{g}(\mathbf{p})-\mathbf{g}(\bar{\mathbf{p}})\|\leq c\|\mathbf{p}-\bar{\mathbf{p}}\|,$$

amiből $\mathbf{p}=\bar{\mathbf{p}}$ következik.

### 121. fólia — lokális konvergencia $\|g'(p)\|<1$ esetén

**Tétel.** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^1$, és legyen $\mathbf{p}$ fixpontja $\mathbf{g}$-nek. Ha*

$$\|\mathbf{g}'(\mathbf{p})\|<1$$

*valamilyen $\|\cdot\|$ vektornorma által generált mátrixnormában, akkor a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció lokálisan konvergál $\mathbf{p}$-hez.*

---
### 122. fólia — Bizonyítás (lokális konvergencia)

**Bizonyítás.** Mivel $E$ nyílt halmaz, ezért létezik olyan $\bar{\delta}>0$, hogy

$$\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|<\bar{\delta}\}\subset E.$$

Válasszunk egy $c$ számot, amelyre

$$\|\mathbf{g}'(\mathbf{p})\|<c<1.$$

A $\mathbf{g}'$ függvény folytonos $\mathbf{p}$-ben, így létezik olyan $0<\delta\leq\bar{\delta}$, hogy

$$\|\mathbf{g}'(\mathbf{x})\|\leq c, \qquad \mathbf{x}\in V:=\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|\leq\delta\}.$$

A Lagrange-féle középértéktétel alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq\max_{t\in(0,1)}\|\mathbf{g}'(\mathbf{x}+t(\mathbf{y}-\mathbf{x}))\|\cdot\|\mathbf{x}-\mathbf{y}\|\leq c\|\mathbf{x}-\mathbf{y}\|,$$

azaz $\mathbf{g}$ kontrakció.

### 123. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Megmutatjuk, hogy a $\mathbf{g}$ függvény a $V$ halmazt önmagába képezi. Legyen $\mathbf{x}\in V$. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{p}\|=\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{x}-\mathbf{p}\|<\delta,$$

tehát

$$\mathbf{g}(\mathbf{x})\in V.$$

Ha a $\mathbf{g}$ függvényt megszorítjuk a $V$ halmazra, akkor erre a függvényre teljesülnek korábbi tétel feltételei, ezért a $V$ halmazból indított fixpont iteráció konvergens, és $\mathbf{p}$-hez konvergál.

### 124. fólia — Példa: derivált mátrix

**Példa.** Számítsuk ki a (20) képlettel definiált

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}$$

függvény derivált mátrixát:

$$\mathbf{g}'(\mathbf{x})=\begin{pmatrix}\tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2}\\ \tfrac{1}{3} & -\tfrac{2}{3}x_2\end{pmatrix}.$$

A $\mathbf{g}$ függvény $(1,0)^T$ fixpontjában felvett értéke

$$\mathbf{g}'(1,0)=\begin{pmatrix}0 & \tfrac{1}{4}\\ \tfrac{1}{3} & 0\end{pmatrix},$$

aminek 1-normája $\|\mathbf{g}'(1,0)\|_1=\tfrac{1}{3}<1$, ezért a fixpont sorozat lokálisan konvergens.

### 125. fólia — Tétel (másodrendű konvergencia, $g'(p)=0$)

**Tétel.** *Legyen $E\subset\mathbb{R}^n$, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^2$, $\mathbf{g}(\mathbf{p})=\mathbf{p}$, és $\mathbf{g}'(\mathbf{p})=\mathbf{0}$. Ekkor létezik olyan $\delta>0$ hogy a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)}-\mathbf{p}\|<\delta$. Továbbá létezik olyan $c$ konstans, hogy minden $k$-ra*

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2$$

*teljesül, azaz az iteráció másodrendben lokálisan konvergál $\mathbf{p}$-hez.*

### 126. fólia — Bizonyítás (Taylor-közelítés)

**Bizonyítás.** A feltétel szerint $0=\|\mathbf{g}'(\mathbf{p})\|<1$, így a fixpont iteráció lokálisan konvergens. Vegyük a $\mathbf{g}$ függvény $i$-edik komponensfüggvényének a $\mathbf{p}=(p_1,\dots,p_n)^T$ pont körüli másodrendű Taylor-közelítését:

$$
\begin{aligned}
g_i(x_1,\dots,x_n) &= g_i(p_1,\dots,p_n)+\sum_{j=1}^n\frac{\partial g_i(p_1,\dots,p_n)}{\partial x_j}(x_j-p_j) \\
&\quad +\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n\frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(x_j-p_j)(x_l-p_l).
\end{aligned}
$$

Ezt az $(x_1,\dots,x_n)^T=(p_1^{(k)},\dots,p_n^{(k)})^T$ vektorra alkalmazva, és használva a $p_i=g_i(\mathbf{p})$ és $p_i^{(k+1)}=g_i(\mathbf{p}^{(k)})$ összefüggéseket, kapjuk

$$p_i^{(k+1)}-p_i=\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n\frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(p_j^{(k)}-p_j)(p_l^{(k)}-p_l).$$

### 127. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Legyen $M$ olyan, hogy

$$\left|\frac{\partial^2 g_i(x_1,\dots,x_n)}{\partial x_j\partial x_l}\right|\leq M$$

minden $i,j,l=1,\dots,n$-re a $\mathbf{p}$ pont egy környezetében, melyben minden $\mathbf{p}^{(k)}$ benne van. $M$ definícióját használva

$$|p_i^{(k+1)}-p_i|\leq\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n M|p_j^{(k)}-p_j||p_l^{(k)}-p_l|\leq\tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2.$$

Mivel ez a becslés minden $i=1,\dots,n$-re teljesül, ezért

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq\tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2,$$

azaz a konvergencia másodrendű.

---

## 2.11. Newton-módszer $n$-dimenzióban

### 128. fólia — szakaszcím

**2.11. Newton-módszer $n$-dimenzióban**

### 129. fólia — Newton n-dimenzióban

Legyen $U\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{f}\colon U\to\mathbb{R}^n$, és tekintsük az

$$\mathbf{f}(\mathbf{x})=\mathbf{0}$$

egyenletrendszert. Rögzítsünk egy $\mathbf{p}^{(k)}\in U$ vektort. Az egyváltozós esethez hasonlóan közelítsük az $\mathbf{f}$ függvényt a lineáris részével, az

$$\mathbf{f}(\mathbf{p}^{(k)})+\mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x}-\mathbf{p}^{(k)})$$

függvénnyel. Ennek gyöke az

$$\bar{\mathbf{x}}=\mathbf{p}^{(k)}-(\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)})$$

vektor. Ezt a képletet használjuk a *Newton-módszer* definíciójára:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{22}$$

### 130. fólia — Tétel + bizonyítás (kvadratikus konvergencia)

**Tétel.** *Legyen $\mathbf{f}\in C^2$, $\mathbf{f}(\mathbf{p})=\mathbf{0}$ és $\mathbf{f}'(\mathbf{p})$ invertálható. Ekkor a (22) Newton-iteráció lokálisan kvadratikusan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** A Newton-módszer egy fixpont iteráció a

$$\mathbf{g}(\mathbf{x})=\mathbf{x}-(\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x})$$

iterációs függvénnyel. Legyen $(\mathbf{f}'(\mathbf{x}))^{-1}=(b_{ij}(\mathbf{x}))_{n\times n}$. Ekkor

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}=\delta_{il}:=\begin{cases}1, & i=l,\\ 0, & i\neq l.\end{cases} \tag{23}$$

Tekintsük $\mathbf{g}$ $i$-edik komponensét:

$$g_i(\mathbf{x})=x_i-\sum_{j=1}^n b_{ij}(\mathbf{x})f_j(\mathbf{x}).$$

### 131. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** Ezt deriválva $x_l$ szerint

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n\left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x})+b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

Az $\mathbf{x}=\mathbf{p}$ pontban az $f_j(\mathbf{p})=0$ és a (23) relációkat használva tehát

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l}=0.$$

Azt kaptuk, hogy $\mathbf{g}'(\mathbf{p})=\mathbf{0}$, és így a fixpont sorozat lokálisan kvadratikusan konvergens.

### 132. fólia — gyakorlati alakja

A

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)})$$

képlet alkalmazásakor mátrixot kell invertálni. Ehelyett a gyakorlatban a következőképpen járunk el: Vezessük be az

$$\mathbf{s}^{(k)}=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}$$

jelölést, és rendezzük át az egyenletet az

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)})$$

alakba. Ezt megoldjuk $\mathbf{s}^{(k)}$-ra, majd legyen

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}+\mathbf{s}^{(k)}.$$

### 133. fólia — Példa

**Példa.** Tekintsük a (18) egyenletrendszert! A Newton-módszert alkalmaztuk az egyenletre a $(-1.5,-1.5)^T$ kezdeti értéktől indulva.

**Newton-módszer**

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty$ |
|---:|---|---|
| 0 | $(-1.5000000000, -1.5000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.2500000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(0.99999868610, -0.00000037764)^T$ | 1.313900e-06 |

---

## 2.12. Kvázi-Newton módszerek, Broyden-módszer

### 134. fólia — szakaszcím

**2.12. Kvázi-Newton módszerek, Broyden-módszer**

### 135. fólia — definíció

A *kvázi-Newton módszerek* általános definíciója:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}), \tag{24}$$

ahol

$$\mathbf{A}^{(k)}\approx\mathbf{f}'(\mathbf{p}^{(k)}).$$

Attól függően, hogy milyen közelítést használunk, más és más módszereket tudunk definiálni.

---
### 136. fólia — numerikus deriválttal közelítés

Az egyik gyakran használt módszer a deriváltat numerikusan közelíti: legyen $\mathbf{e}^{(j)}=(0,\dots,0,1,0,\dots,0)^T$ a $j$-edik egységvektor, $h>0$ egy megadott kis lépésköz, és definiáljuk az $\mathbf{A}^{(k)}$ mátrix komponenseit az

$$a_{ij}^{(k)}=\frac{f_i(\mathbf{p}^{(k)}+h\mathbf{e}^{(j)})-f_i(\mathbf{p}^{(k)})}{h}, \qquad i,j=1,\dots,n \tag{25}$$

képlettel.

### 137. fólia — Broyden-módszer alapja

A továbbiakban az $\mathbf{A}^{(k)}$ mátrix megválasztásának egy másik, a gyakorlatban igen népszerű módszerét, a *Broyden-módszert* vizsgáljuk. Ez a módszer is, mint az előző, a szelőmódszer általánosításának tekinthető. Skaláris egyenletekre a szelőmódszer az $f(x)=0$ egyenletet az

$$f(p_k)+a_k(x-p_k)=0$$

lineáris egyenlettel helyettesíti, ahol

$$a_k=\frac{f(p_k)-f(p_{k-1})}{p_k-p_{k-1}}.$$

Ezt $k$ helyett $k+1$-re felírva és átrendezve, kapjuk, hogy $a_{k+1}$ megoldása az

$$a_{k+1}(p_{k+1}-p_k)=f(p_{k+1})-f(p_k) \tag{26}$$

egyenletnek. Ez utóbbi alakot lehet könnyen általánosítani többváltozós függvényekre.

### 138. fólia — szelő egyenlet

Válasszunk egy $\mathbf{p}^{(0)}$ kezdeti vektort és egy $\mathbf{A}^{(0)}$ kezdeti mátrixot. $\mathbf{A}^{(0)}$ választására többféle módszer használatos:
- használhatjuk az $\mathbf{A}^{(0)}=\mathbf{f}'(\mathbf{p}^{(0)})$ pontos értéket,
- vagy a (25) képlettel közelíthetjük a derivált mátrixot a $\mathbf{p}^{(0)}$ pontban,
- vagy veszünk egy tetszőleges invertálható $\mathbf{A}^{(0)}$ mátrixot.

Tegyük fel, hogy $\mathbf{p}^{(k)}$ és $\mathbf{A}^{(k)}$ már definiált. Ekkor a

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)})$$

képlettel értelmezzük $\mathbf{p}^{(k+1)}$-et. A (26) egyenlet analógiájára megköveteljük, hogy $\mathbf{A}^{(k+1)}$ teljesítse az

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)})=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}), \tag{27}$$

az ún. *szelő egyenletet*.

### 139. fólia — jelölések

Vezessük be a következő jelöléseket:

$$\mathbf{y}^{(k)}:=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}) \quad \text{és} \quad \mathbf{s}^{(k)}:=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}.$$

Ezzel a jelöléssel a (24) iterációs formula az

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)}), \tag{28}$$

a (27) egyenlet pedig az

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)}=\mathbf{y}^{(k)} \tag{29}$$

alakban írható fel. A (28) egyenlet megoldható $\mathbf{s}^{(k)}$-ra (feltéve hogy $\mathbf{A}^{(k)}$ invertálható), így a probléma redukálódott arra, hogy olyan $\mathbf{A}^{(k+1)}$ mátrixot keresünk, amely a (29) egyenletet teljesíti. Ez az egyenlet viszont nem határozza meg az $\mathbf{A}^{(k+1)}$ mátrixot egyértelmű módon, hiszen a vektor alakban írt egyenlet $n$ db skaláris egyenlettel ekvivalens, $\mathbf{A}^{(k+1)}$-et viszont $n^2$ db komponense határozza meg.

### 140. fólia — Broyden-frissítés képlete

(29) csak annyit jelent, hogy az $\mathbf{A}^{(k+1)}$ mátrixszal meghatározott lineáris leképezés az $\mathbf{s}^{(k)}$ irányában meghatározott, de az erre merőleges $(n-1)$-dimenziós altéren nem meghatározott. Mivel a $k+1$-edik lépésben erről nincs új információnk, ezért úgy definiáljuk $\mathbf{A}^{(k+1)}$-et, hogy a mátrixhoz tartozó lineáris leképezésnek ugyanaz legyen a hatása ezen az altéren, mint az $\mathbf{A}^{(k)}$ leképezésnek. Azaz a (29) egyenleten kívül azt is megköveteljük, hogy

$$\mathbf{A}^{(k+1)}\mathbf{z}=\mathbf{A}^{(k)}\mathbf{z}, \qquad \mathbf{z}\perp\mathbf{s}^{(k)}. \tag{30}$$

(29) és (30) együtt egyértelműen meghatározza az $\mathbf{A}^{(k+1)}$ mátrixot. Megmutatjuk, hogy az

$$\mathbf{A}^{(k+1)}=\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{31}$$

mátrix teljesíti a (29) és (30) egyenleteket.

### 141. fólia — verifikáció

(29) igazolásához tekintsük:

$$
\begin{aligned}
\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} &= \left(\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)\mathbf{s}^{(k)} \\
&= \mathbf{A}^{(k)}\mathbf{s}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})\left((\mathbf{s}^{(k)})^T\mathbf{s}^{(k)}\right)}{\|\mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{y}^{(k)}.
\end{aligned}
$$

A (30) összefüggés igazolásához legyen $\mathbf{z}\perp\mathbf{s}^{(k)}$, és tekintsük:

$$
\begin{aligned}
\mathbf{A}^{(k+1)}\mathbf{z} &= \left(\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)\mathbf{z} \\
&= \mathbf{A}^{(k)}\mathbf{z}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})\left((\mathbf{s}^{(k)})^T\mathbf{z}\right)}{\|\mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{A}^{(k)}\mathbf{z}.
\end{aligned}
$$

A (24) rekurzív képletben igazából $(\mathbf{A}^{(k)})^{-1}$-re van szükségünk.

### 142. fólia — Sherman–Morrison–Woodbury

**Tétel (Sherman–Morrison–Woodbury).** *Legyen $\mathbf{u},\mathbf{v}\in\mathbb{R}^n$, $\mathbf{u},\mathbf{v}\neq\mathbf{0}$ és $\mathbf{A}\in\mathbb{R}^{n\times n}$ invertálható. Ekkor az $\mathbf{A}+\mathbf{u}\mathbf{v}^T$ mátrix akkor és csak akkor invertálható, ha $1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\neq 0$, és ekkor*

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)^{-1}=\mathbf{A}^{-1}-\frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}}{1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}}$$

*teljesül.*

**Bizonyítás.** Legyen $\gamma\in\mathbb{R}$, és tekintsük a következő szorzatot:

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}.$$

Mivel $\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}$ skaláris szám, ezért az előző egyenlet átalakítható az

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+(1-\gamma-\gamma\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}$$

alakba, amiből következik az állítás.

### 143. fólia — Broyden inverz frissítés

A tételt használva a (31) összefüggésre, rövid számolással kapjuk:

$$
\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1+(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{\left((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}-\mathbf{s}^{(k)}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}. \tag{32}
\end{aligned}
$$

Ismerve $(\mathbf{A}^{(k)})^{-1}$-t, csak mátrixszorzásokat alkalmazva kiszámítható $(\mathbf{A}^{(k+1)})^{-1}$, így ehhez csak $n^2$ nagyságrendű művelet kell, szemben azzal, hogy a mátrix invertálásához, mint azt majd a következő fejezetben megmutatjuk, $n^3$ nagyságrendű műveletre van szükség.

### 144. fólia — szuperlineáris konvergencia

Megmutatható, hogy a Broyden-módszer lokálisan konvergál az $\mathbf{f}$ függvény egy $\mathbf{p}$ gyökéhez, és ha $\mathbf{A}^{(0)}$ elegendően közel van $\mathbf{f}'(\mathbf{p})$-hez, akkor a konvergencia rendje szuperlineáris, azaz

$$\lim_{k\to\infty}\frac{\|\mathbf{p}^{(k+1)}-\mathbf{p}\|}{\|\mathbf{p}^{(k)}-\mathbf{p}\|}=0.$$

### 145. fólia — Példa, Broyden-tábla

**Példa.** Tekintsük újra a (18) egyenletrendszert! Alkalmazzuk a Broyden-módszert a $h=0.001$ és $TOL=10^{-5}$ paraméterekkel. A táblázat utolsó oszlopa mutatja, hogy a módszer szuperlineárisan konvergál.

**Broyden-módszer**

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty$ | $\frac{\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty}{\|\mathbf{p}^{(k-1)}-\mathbf{p}\|_\infty}$ |
|---:|---|---|---|
| 0 | $(-1.5000000000, -1.5000000000)^T$ | 2.5000000000 | |
| 1 | $(-1.2490215360, -0.5215363883)^T$ | 2.2490215360 | 0.8996086144 |
| 2 | $(-0.4968297655, -0.9366983828)^T$ | 1.4968297660 | 0.6655471022 |
| 3 | $(-0.3045368940, -0.3621731989)^T$ | 1.3045368940 | 0.8715332389 |
| 4 | $(0.5414891937, -0.0587408442)^T$ | 0.4585108063 | 0.3514740046 |
| 5 | $(0.9527177435, -0.0515250779)^T$ | 0.0515250779 | 0.1123748387 |
| 6 | $(1.0003263340, 0.0319681269)^T$ | 0.0319681269 | 0.6204382061 |
| 7 | $(1.0000051000, -0.0040567750)^T$ | 0.0040567750 | 0.1269006155 |
| 8 | $(1.0000069210, -0.0000347010)^T$ | 0.0000347010 | 0.0085538489 |
| 9 | $(1.0000001100, 0.0000012682)^T$ | 0.0000012682 | 0.0365458110 |
| 10 | $(1.0000000050, 0.0000000576)^T$ | 0.0000000576 | 0.0453865979 |

---

*Forrás: Ferenc Hartung beamer-előadás, „Numerikus analízis — 2. Nemlineáris egyenletek, egyenletrendszerek" (Pannon Egyetem, Matematika Tanszék, 2026). Az utolsó néhány oldal a hivatalos PDF-ben üres; a tényleges tananyag az 1–145. fólián található.*
