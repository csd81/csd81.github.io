# 2. fejezet — Nemlineáris egyenletek, egyenletrendszerek

*Hartung Ferenc, Bevezetés a numerikus analízisbe (Pannon Egyetem) — 2. fejezet, magyar nyelvű szövegkönyv markdown átirata. Minden matematikai jelölés KaTeX-kompatibilis formában megőrizve, a tételek, képletek és táblázatok eredeti számozással.*

Ebben a fejezetben nemlineáris egyenletek és egyenletrendszerek numerikus megoldásának legismertebb módszereit tárgyaljuk (intervallumfelezés módszere, húr-, szelő-, Newton-, kvázi-Newton módszerek stb.). Megismerkedünk az iterációs sorozatok általános elméletével, a fixpont, a konvergencia sebessége fogalmával, iterációs eljárások megállási feltételeivel. Definiáljuk a vektor- és mátrixnorma fogalmát, és ennek segítségével a vektor- és mátrixsorozatok konvergenciáját.

---

## 2.1. Analízis előismeretek

Ebben a szakaszban összefoglaljuk azokat az analízisből ismert fogalmakat, tételeket, amelyekre a későbbiekben gyakran fogunk hivatkozni.

Az $[a,b]$ intervallumon értelmezett valós értékű folytonos függvények halmazát $C[a,b]$-vel jelöljük. Azon $f\colon [a,b]\to\mathbb{R}$ függvények halmazát, amelyek $[a,b]$-n folytonosak és $(a,b)$-n $m$-szer folytonosan differenciálhatók, $C^m[a,b]$-vel jelöljük.

**2.1. tétel.** *Legyen $f\in C[a,b]$. Ekkor $f$ felveszi maximumát és minimumát $[a,b]$-n, azaz létezik olyan $c,d\in [a,b]$, hogy*

$$f(c)=\max_{x\in[a,b]} f(x) \qquad \text{és} \qquad f(d)=\min_{x\in[a,b]} f(x).$$

Az $a$ és $b$ számok által generált nyílt intervallumot $\langle a,b\rangle$-vel jelöljük, azaz

$$\langle a,b\rangle := (\min\{a,b\},\max\{a,b\}),$$

ill. ennek általánosításaként $\langle a_1,a_2,\dots,a_n\rangle$ jelöli az $a_1,a_2,\dots,a_n$ számok által generált nyílt intervallumot, azaz

$$\langle a_1,a_2,\dots,a_n\rangle := (\min\{a_1,\dots,a_n\},\max\{a_1,\dots,a_n\}).$$

A következő eredmény szerint egy folytonos függvény bármely két értéke közti minden értéket felvesz.

**2.2. tétel.** *Legyen $f\in C[a,b]$, $f(a)\neq f(b)$, és legyen $d\in\langle f(a),f(b)\rangle$. Ekkor létezik olyan $c\in(a,b)$, hogy $f(c)=d$.*

**2.3. tétel (Rolle).** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos függvény differenciálható az $(a,b)$ intervallumon, és $f(a)=f(b)$. Ekkor létezik olyan $\xi\in(a,b)$ szám, hogy $f'(\xi)=0$.*

**2.4. tétel (Lagrange-féle középértéktétel).** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos az $[a,b]$ intervallumon és differenciálható az $(a,b)$ intervallumon. Ekkor létezik olyan $\xi\in(a,b)$ szám, hogy $f(b)-f(a)=f'(\xi)(b-a)$.*

**2.5. tétel (Taylor-tétel).** *Legyen $f\in C^{n+1}[a,b]$, és legyen $x_0\in(a,b)$. Ekkor minden $x\in(a,b)$-hez létezik olyan $\xi=\xi(x)\in\langle x,x_0\rangle$, hogy*

$$f(x) = f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}.$$

A következő tételt integrálokra vonatkozó középértéktételnek is nevezik.

**2.6. tétel.** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, $g\colon[a,b]\to\mathbb{R}$ integrálható függvény amely nem vált előjelet $[a,b]$-n (azaz $g(x)\geq 0$ vagy $g(x)\leq 0$ teljesül minden $x\in[a,b]$-re). Ekkor létezik egy olyan $\xi\in(a,b)$ szám, hogy*

$$\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx.$$

A következő eredményt úgy szokás röviden megfogalmazni, hogy egymásba skatulyázott zárt intervallumoknak létezik egy közös pontja, ha az intervallumok hossza nullához tart.

**2.7. tétel.** *Legyen $[a_n,b_n]$ ($n=1,2,\dots$) korlátos zárt intervallumoknak egy sorozata, amelyre $[a_{n+1},b_{n+1}]\subset [a_n,b_n]$ teljesül minden $n$-re, és $(b_n-a_n)\to 0$ ha $n\to\infty$. Ekkor létezik olyan $c\in [a_1,b_1]$ szám, hogy $a_n\to c$ és $b_n\to c$, ha $n\to\infty$.*

**2.8. tétel.** *Monoton és korlátos számsorozatnak létezik határértéke.*

Zárjuk ezt a szakaszt az algebra alaptételének nevezett eredmény felidézésével, amelyet a következő alakban fogalmazunk meg:

**2.9. tétel (Az algebra alaptétele).** *Egy*

$$p(x)=a_n x^n+\dots+a_1 x+a_0, \qquad a_j\in\mathbb{C}\;(j=0,\dots,n),\quad a_n\neq 0$$

*polinomnak pontosan $n$ db komplex gyöke van multiplicitásokkal számolva.*

A tételnek általában arra a következményére lesz szükségünk, hogy ha egy $p(x)=a_n x^n+\dots+a_1 x+a_0$ polinomnak van $n+1$ db gyöke, akkor az a $p\equiv 0$ (azonosan nulla) polinom.

---

## 2.2. Fixpont iteráció

A numerikus módszerek jelentős része egy végtelen sorozatot generál, amelynek határértéke adja a vizsgált probléma pontos megoldását. A numerikus analízisben szereplő sorozatokat gyakran *rekurzív definícióval*, más néven *iterációval* adjuk meg. Egy $p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1})$ ($k\geq m-1$) rekurzív definícióval megadott iterációs módszert *$m$-lépéses iterációnak* nevezünk. Egy $m$-lépéses iterációs sorozatot $m$ kezdeti érték, $p_0,p_1,\dots,p_{m-1}$ határoz meg egyértelműen.

Ebben a szakaszban a leggyakoribb esettel, az egylépéses iterációval, más néven *fixpont iterációval* foglalkozunk részletesebben.

Adott egy $g\colon I\to\mathbb{R}$ függvény, ahol $I\subset\mathbb{R}$. A $p_{k+1}=g(p_k)$ képlettel definiált (és valamely $p_0\in I$ kezdeti értékhez tartozó) sorozatot *fixpont iterációs sorozatnak*, vagy röviden *fixpont iterációnak* nevezünk.

**2.10. példa.** Tekintsük a $g(x)=-\tfrac{1}{8}x^3+x+1$ függvényt! A 2.1. táblázatban kiszámítottuk a fixpont iterációval generált sorozat első néhány tagját a $p_0=0.4$ kezdőértékből kiindulva. A sorozat tagjait a 2.1. ábrán látható ún. *lépcsős diagrammal* szokás ábrázolni. A kiindulási $(p_0,0)$ pontból rajzolunk egy függőleges egyenest a $g$ függvény grafikonjáig. A kimetszett pont $y$-koordinátája adja a sorozat $p_1$ elemét. A $(p_0,p_1)$ pontból egy vízszintes szakaszt rajzolunk az $y=x$ egyenes $(p_1,p_1)$ pontjáig. A sorozat $p_2=g(p_1)$ elemét tehát úgy kapjuk geometriailag, ha a pontból egy függőleges szakasz mentén elmegyünk a $g$ grafikonjáig, és a kimetszett pont $y$-koordinátája lesz $p_2$. Ezt az eljárást folytatva kapjuk az ábrán látható töröttvonalat. A töröttvonal ennél a példánál spirálisan ráhúzódik az $y=x$ egyenes és az $y=g(x)$ görbe metszéspontjára. A metszéspont koordinátái $(2,2)$. A 2.1. táblázatból látható, hogy a $p_k$ sorozat a 2 értékhez konvergál. $\square$

**2.1. táblázat.** Fixpont iteráció, $g(x)=-\tfrac{1}{8}x^3+x+1$

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

*2.1. ábra. Fixpont iteráció — lépcsős diagram a $g(x)=-\tfrac{1}{8}x^3+x+1$ függvénnyel, $p_0=0.4$ kezdőértékkel; a töröttvonal spirálisan ráhúzódik a $(2,2)$ metszéspontra.*

Az előbbi példában azt tapasztaltuk, hogy a fixpont sorozat az $y=x$ egyenes és az $y=g(x)$ grafikon metszéspontjának $x$-koordinátájához konvergál. Ennek a pontnak az $x$-koordinátája (és persze az $y$-koordinátája is) teljesíti a $g(x)=x$ egyenletet. A $p$ számot a $g$ függvény *fixpontjának* nevezzük, ha

$$g(p)=p.$$

Eszerint a terminológia szerint az előbbi példában a fixpont sorozat a $g$ függvény egy fixpontjához konvergált. A következő tételben belátjuk, hogy ez minden konvergens fixpont sorozatra jellemző.

**2.11. tétel.** *Legyen $g\colon[a,b]\to[a,b]$ (vagy $\mathbb{R}\to\mathbb{R}$) folytonos függvény, $p_0\in[a,b]$ rögzített, és tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációs sorozatot. Ha $p_k$ konvergens és $p_k\to p$, akkor $p=g(p)$.*

**Bizonyítás.** Mivel $p_{k+1}=g(p_k)$ és a feltételek szerint $p_{k+1}\to p$ és $g(p_k)\to g(p)$, ha $k\to\infty$, így az állítás következik. $\square$

Egy fixpont sorozat természetesen nem feltétlenül konvergens, ill. a határérték lehet végtelen. Ehhez elég a $g(x)=2x$ függvényt és a $p_0=1$ kezdőértéket tekinteni. Ekkor $p_k=2^k$, ami a végtelenbe tart. Ha pedig a $g(x)=-x$ függvényt vesszük, akkor a fixpont iteráció a $p_k=(-1)^k$ sorozatot generálja.

A következő tétel elégséges feltételt ad a fixpont létezésére és egyértelműségére.

**2.12. tétel.** *Legyen $g\colon[a,b]\to[a,b]$ folytonos. Ekkor $g$-nek létezik legalább egy fixpontja az $[a,b]$ intervallumon. Ha ezenkívül feltesszük azt is, hogy $g$ differenciálható $(a,b)$-n, és létezik olyan $0\leq c<1$ szám, hogy $|g'(x)|\leq c$ minden $x\in(a,b)$-re, akkor a fixpont egyértelmű.*

**Bizonyítás.** Tekintsük az $f(x)=g(x)-x$ függvényt. Ha $f(a)=0$ vagy $f(b)=0$, akkor $a$ ill. $b$ a $g$ függvény fixpontja. Ellenkező esetben $f(a)>0$ és $f(b)<0$. De ekkor $f$ folytonossága miatt létezik olyan $p\in(a,b)$ szám, hogy $f(p)=0$, azaz $p=g(p)$.

A tétel második felének bizonyításához tegyük fel, hogy $g$-nek két fixpontja is van, $p$ és $q$. Ekkor használva a Lagrange-féle középértéktételt, létezik olyan $\xi\in(a,b)$ szám, hogy

$$|p-q|=|g(p)-g(q)|=|g'(\xi)||p-q|\leq c|p-q|,$$

amiből következik, hogy $p=q$, azaz a fixpont egyértelmű. $\square$

**2.13. tétel (fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény, $g$ differenciálható $(a,b)$-n, és tegyük fel hogy létezik olyan $0\leq c<1$ szám, hogy $|g'(x)|\leq c$ minden $x\in(a,b)$-re. Legyen $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához,*

$$|p_k-p|\leq c^k|p_0-p|, \tag{2.1}$$

*valamint*

$$|p_k-p|\leq \frac{c^k}{1-c}|p_1-p_0|. \tag{2.2}$$

**Bizonyítás.** A 2.12. tétel szerint $g$-nek létezik egyértelmű fixpontja, $p$. Mivel $0\leq c<1$ a feltételek szerint, ezért ha belátjuk (2.1)-et, abból $p_k\to p$ következik. A feltételek és a Lagrange-féle középértéktétel szerint

$$|p_k-p|=|g(p_{k-1})-g(p)|=|g'(\xi)||p_{k-1}-p|\leq c|p_{k-1}-p|.$$

Ebből (teljes indukcióval) könnyen látható a (2.1) egyenlőtlenség.

(2.2) igazolásához legyen $m>k$ tetszőleges. A háromszög-egyenlőtlenséget, középértéktételt és a feltételeket alkalmazva

$$
\begin{aligned}
|p_k-p_m| &\leq |p_k-p_{k+1}|+|p_{k+1}-p_{k+2}|+\dots+|p_{m-1}-p_m| \\
&\leq |g(p_{k-1})-g(p_k)|+|g(p_k)-g(p_{k+1})|+\dots+|g(p_{m-2})-g(p_{m-1})| \\
&\leq c|p_{k-1}-p_k|+c|p_k-p_{k+1}|+\dots+c|p_{m-2}-p_{m-1}| \\
&\leq (c^k+c^{k+1}+\dots+c^{m-1})|p_0-p_1| \\
&= c^k(1+c+\dots+c^{m-k-1})|p_1-p_0| \\
&\leq c^k \sum_{i=0}^{\infty} c^i |p_1-p_0|.
\end{aligned}
$$

Így $|p_k-p_m|\leq \tfrac{c^k}{1-c}|p_1-p_0|$ minden $m>k$-ra. Ha $k$ rögzített és $m$ tart a végtelenbe, kapjuk a (2.2) egyenlőtlenséget. $\square$

Vegyük észre, hogy az előbbi két tétel bizonyításában $g$ differenciálhatóságát és a derivált korlátosságát csak arra használtuk, hogy a

$$|g(x)-g(y)|\leq c|x-y| \tag{2.3}$$

becslést kapjuk $g$-re. Azt mondjuk, hogy a $g$ függvény *Lipschitz-tulajdonságú* az $I$ intervallumon, ha létezik olyan $c\geq 0$ konstans, hogy (2.3) teljesül minden $x,y\in I$-re. Az egyenlőtlenségben szereplő $c$ számot a $g$ függvény *Lipschitz-konstansának* nevezzük. A Lagrange-féle középértéktétel szerint ha $g\in C^1[a,b]$, akkor $g$ Lipschitz-tulajdonságú $[a,b]$-n a $c:=\max\{|g'(x)|\colon x\in[a,b]\}$ Lipschitz-konstanssal. $g$ Lipschitz-tulajdonságú akkor is, ha csak szakaszonként folytonosan differenciálható. Példa erre a $g(x)=|x|$ függvény. (Lásd még a 8. feladatot.) Ha $g$ Lipschitz-tulajdonságú egy $0\leq c<1$ Lipschitz-konstanssal, akkor $g$-t *kontrakciónak* nevezzük. A 2.13. tételt kimondhatjuk tehát a következő, általánosabb alakban is:

**2.14. tétel (kontrakciós elv, fixpont tétel).** *Legyen $g\colon[a,b]\to[a,b]$ folytonos függvény kontrakció, $p_0\in[a,b]$ tetszőleges, és $p_{k+1}=g(p_k)$ ($k\geq 0$). Ekkor a $p_k$ sorozat konvergál a $g$ függvény (egyértelmű) $p$ fixpontjához, és teljesülnek a (2.1) és (2.2) becslések.*

Gyakran találkozunk olyan numerikus iterációs módszerekkel, amelyek konvergálnak, feltéve, hogy a sorozat kezdeti értékei közel vannak a feladat pontos megoldásához, azaz a sorozat határértékéhez. Azt mondjuk, egy $p_{k+1}=h(p_k,p_{k-1},\dots,p_{k-m+1})$ iterációs módszer *lokálisan konvergál* $p$-hez, ha létezik olyan $\delta>0$, hogy minden $p_0,p_1,\dots,p_{m-1}\in (p-\delta,p+\delta)$ kezdeti értékhez tartozó $p_k$ sorozat $p$-hez konvergál. Ha a $p_k$ sorozat tetszőleges kezdeti értékre konvergál $p$-hez, akkor az iterációs módszert *globálisan konvergensnek* nevezzük.

**2.15. tétel.** *Legyen $g\in C^1[a,b]$, és legyen $p\in(a,b)$ a $g$ függvény egy fixpontja. Tegyük fel, hogy $|g'(p)|<1$. Ekkor a fixpont iteráció lokálisan konvergál $p$-hez, azaz létezik olyan $\delta>0$, hogy a $p_{k+1}=g(p_k)$ sorozat minden $p_0\in(p-\delta,p+\delta)$-ra konvergál $p$-hez.*

**Bizonyítás.** Mivel a feltételek szerint $g'$ folytonos és $|g'(p)|<1$, ezért létezik olyan $\delta>0$, hogy $[p-\delta,p+\delta]\subset(a,b)$ és $|g'(x)|<1$ minden $x\in[p-\delta,p+\delta]$-re. Legyen $c=\max\{|g'(x)|\colon x\in[p-\delta,p+\delta]\}$. Ekkor $0\leq c<1$.

Belátjuk, hogy $g$ a $[p-\delta,p+\delta]$ intervallumot önmagába képezi. Legyen $p_0\in[p-\delta,p+\delta]$. A Lagrange-féle középértéktételt és $c$ definícióját használva

$$|g(p_0)-p|=|g(p_0)-g(p)|\leq c|p_0-p|<|p_0-p|<\delta,$$

azaz $g(p_0)$ a $[p-\delta,p+\delta]$ intervallumba esik. Ezért a 2.13. tétel alkalmazható a $g$ függvény $[p-\delta,p+\delta]$ intervallumra vett megszorítására, amiből következik az állítás. $\square$

**Feladatok**

1. Legyen $g(x)=mx$, ahol $m\in\mathbb{R}$. Ábrázolja a $g$-hez (és valamely kezdőértékhez) tartozó fixpont iterációs sorozatokat $m=0.5,1,1.5,-0.5,-1,-1.5$-re!
2. Alakítsa át a következő egyenleteket fixpont egyenletté, majd fixpont iteráció segítségével adja meg az egyenletek olyan közelítő megoldását, amely 4 jegyre pontos:
   - (a) $(x-2)^3=x+1$,  (b) $\tfrac{\cos x}{x}=2$,  (c) $x^3+x-1=0$,  (d) $2x\sin x=4-3x$.
3. Tekintsük az $x^3+x^2+3x-5=0$ egyenletet. Mutassa meg, hogy az egyenlet bal oldalát leíró polinom monoton növekvő, és 0 és 2 között metszi a grafikonja az $x$-tengelyt! (Természetesen könnyű észrevenni, hogy az egyenlet pontos gyöke $x=1$.) Ellenőrizze, hogy az egyenlet ekvivalens a következő fixpont feladatokkal:
   - (a) $x=x^3+x^2+4x-5$,  (b) $x=\sqrt[3]{5-x^2-3x}$,
   - (c) $x=\tfrac{5}{x^2+x+3}$,  (d) $x=\tfrac{5-x^3}{x+3}$,
   - (e) $x=\tfrac{2x^3+x^2+5}{3x^2+2x+3}$,  (f) $x=\tfrac{5+7x-x^2-x^3}{10}$.
   Számítsa ki a fixpont iteráció első néhány tagját az összes egyenletre a $p_0=0.5$ kezdőértéket használva, és állapítsa meg, hogy melyik esetben kapunk konvergens sorozatot! Hasonlítsa össze a konvergencia/divergencia gyorsasága szempontjából a sorozatokat! Indokolja a tapasztaltakat!
4. Lássa be, hogy a $p_k=\tfrac{1}{2}p_{k-1}+\tfrac{1}{p_{k-1}}$ sorozat $\sqrt{2}$-höz konvergál, ha $p_0>\sqrt{2}$! Mi történik, ha $0<p_0<\sqrt{2}$? És mit tapasztal, ha $p_0<0$?
5. Mutassa meg, hogy a $p_k=\tfrac{1}{2}p_{k-1}+\tfrac{A}{2p_{k-1}}$ sorozat $\sqrt{A}$-hoz konvergál, ha $p_0>0$! Mi történik $p_0<0$-ra?
6. Legyen $g\in C^1[a,b]$, és legyen $p\in(a,b)$ egy fixpontja $g$-nek, és $|g'(p)|>1$. Mutassa meg, hogy a fixpont iteráció nem konvergál $p$-hez, ha $p_0\neq p$!
7. Tekintsük a $g(x)=\sqrt{1+x^2}$ függvényt! Mutassa meg, hogy $|g'(x)|<1$ minden $x\in\mathbb{R}$-ra, de a fixpont iteráció nem konvergál egyetlen kezdeti értékre sem!
8. Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos, és legyenek $a=x_0<x_1<\dots<x_n=b$ olyan osztópontok, hogy $f$ lineáris minden $[x_i,x_{i+1}]$ intervallumon ($i=0,\dots,n-1$). Lássa be, hogy $f$ Lipschitz-tulajdonságú!

---
## 2.3. Intervallumfelezés módszere

Ebben és a következő néhány szakaszban az $f(x)=0$ nemlineáris egyenlet numerikus megoldását keressük. Erre a legegyszerűbb algoritmus az ún. *intervallumfelezés módszere*. Ezt ismertetjük ebben a szakaszban.

Tegyük fel, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz $f(a)f(b)<0$. Ekkor tudjuk, hogy $f$-nek legalább egy gyöke van az $[a,b]$ intervallumban. Definiáljuk intervallumoknak egy sorozatát: Legyen $[a_0,b_0]=[a,b]$, és legyen $p_0$ az intervallum felezőpontja, azaz $p_0=(a_0+b_0)/2$. Ekkor vagy $f(p_0)=0$, vagy az $[a_0,p_0]$ és $[p_0,b_0]$ intervallumok közül az egyiknek a végpontjaiban ellentétes előjelű az $f$ függvény. Ha az $[a_0,p_0]$ intervallumon vált előjelet, akkor $[a_1,b_1]=[a_0,p_0]$, egyébként $[a_1,b_1]=[p_0,b_0]$ lesz a következő intervallum definíciója. Ezt az eljárást folytatva vagy véges sok lépés után az egyik $p_k$ felezőpont gyöke lesz az $f$ függvénynek, vagy pedig zárt intervallumoknak egy egymásba skatulyázott sorozatát kapjuk, amelyek mindegyike tartalmazza az $f$ függvény egy gyökét. Mivel a $k$-adik intervallum hossza $(b-a)/2^k$, ezért az intervallumoknak pontosan egy $p$ közös pontjuk van, ami az $f$ függvény gyöke. Az intervallumok bármely pontja, így speciálisan pl. a felezőpontok sorozata, $p_k$, tart $p$-hez. Tegyük fel a meghatározottság kedvéért, hogy $f(a)<0$ és $f(b)>0$ (a másik eset hasonlóan kezelhető). Ekkor minden $k$-ra $f(a_k)<0$ és $f(b_k)>0$ az iteráció során. Mivel $a_k\to p$ és $b_k\to p$, ezért az $f$ folytonossága miatt $f(p)\leq 0$ és $f(p)\geq 0$ kell legyen, azaz $f(p)=0$. Mivel $a_k\leq p\leq b_k$ minden $k$-ra, ezért $|p_k-p|\leq (b_k-a_k)/2=(b-a)/2^{k+1}$. Ezzel beláttuk a következő tételt:

**2.16. tétel.** *Legyen $f\in C[a,b]$ és $f(a)f(b)<0$. Ekkor az intervallumfelezés módszerével kapott $p_k$ sorozat konvergál az $f$ függvény egy $p$ gyökéhez, és*

$$|p_k-p|\leq \frac{b-a}{2^{k+1}}. \tag{2.4}$$

A (2.4) becslésből következik, hogy ha egy előre megadott $\varepsilon>0$ hibakorlátot (tolerancia értéket) szeretnénk elérni a közelítéssel, akkor olyan $p_k$ tagot kell használni $p$ közelítésére, amelynek indexe

$$k\geq \log_2 \frac{b-a}{\varepsilon}-1. \tag{2.5}$$

**2.17. példa.** Tekintsük az $f(x)=e^x-2\cos x$ függvényt. $f(0)=-1$ és $f(1)>0$, tehát $f$-nek van gyöke a $[0,1]$ intervallumon. (Könnyű belátni, hogy $f$ szigorúan monoton növő, így pontosan egy gyöke van.) A 2.2. táblázat tartalmazza az intervallumfelezéses módszer numerikus eredményét. Az $\varepsilon=10^{-5}$ tolerancia eléréséhez a (2.5) formula szerint $k\geq \log_2 10^5-1\approx 15.61$ lépés elegendő. $\square$

**2.2. táblázat.** Intervallumfelezés módszere, $f(x)=e^x-2\cos x$, $[0,1]$, $\varepsilon=10^{-5}$

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

**Feladatok**

1. Lássa be, hogy az
   - (a) $x^3-6x-1=0$, $[a,b]=[-1,1]$,  (b) $x=e^{-2x}$, $[a,b]=[-1,2]$,
   - (c) $\tan x=x+1$, $[a,b]=[-1,1.5]$,  (d) $e^{-\sin x}=x^2-1$, $[a,b]=[0,2]$

   egyenleteknek létezik gyöke az $[a,b]$ intervallumon! Az intervallumfelezés módszerével, az $\varepsilon=10^{-5}$ tolerancia értéket használva adja meg a gyök közelítését!
2. Alkalmazza az intervallumfelezés módszerét az $f(x)=\tfrac{1}{x}$ függvényre a $[-0.5,3]$ kezdeti intervallumot használva! Mit tapasztal?

---
## 2.4. Húrmódszer

Az intervallumfelezéses módszer előnye, hogy előre lehet tudni, hogy egy adott pontosságú közelítés eléréséhez hány lépésre van szükség. A módszer hátránya viszont az, hogy nem veszi figyelembe a függvény alakját az intervallumok képzésekor. Ezt a hiányosságot próbálja kiküszöbölni a *húrmódszer*.

A kiindulás ugyanaz, mint az előző módszernél. Feltesszük, hogy $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, amely ellentétes előjelű az intervallum végpontjaiban, azaz $f(a)f(b)<0$. Ennél a módszernél is $[a_k,b_k]$ intervallumoknak és azokat osztó $p_k$ pontoknak egy sorozatát képezzük. Kiindulásul legyen $[a_0,b_0]=[a,b]$. Az $k$-adik lépésben $p_k$-t az $f$ függvény $a_k$ és $b_k$ pontjaihoz tartozó húrja (azaz az $(a_k,f(a_k))$ és $(b_k,f(b_k))$ pontokat összekötő szakasz) és $x$-tengely metszeteként definiáljuk. Kis számolással kapjuk, hogy

$$p_k=a_k-f(a_k)\frac{a_k-b_k}{f(a_k)-f(b_k)}. \tag{2.6}$$

Ezután a következő lépés $[a_{k+1},b_{k+1}]$ intervallumának az $[a_k,p_k]$ és $[p_k,b_k]$ intervallumok közül azt választjuk, ahol a függvény szintén előjelet vált. A módszert a 2.18. algoritmussal írjuk le pontosabban.

**2.18. algoritmus. Húrmódszer**

```
INPUT:
    f      - függvény,
    [a,b]  - intervallum, ahol f(a)f(b) < 0,
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

i ← 1               (lépésszám)
q ← a
while i < MAXIT do
    p ← a - f(a)(a-b)/(f(a) - f(b))
    if |p - q| < TOL do
        output(p)
        stop
    end do
    if f(p)f(b) < 0 do
        a ← p
    else if f(a)f(p) < 0 do
        b ← p
    else
        output(p)
        stop
    end do
    i ← i + 1
    q ← p
end do
output(Maximális iterációszám túllépve)
```

Az előbbi algoritmus programozásakor természetesen $p$ definiálása előtt célszerű megvizsgálni, hogy $f(a)$ egyenlő-e $f(b)$-vel, nehogy nullával való osztás miatt futási hibával álljon le a program. Ha $f(a)=f(b)$, akkor a program adjon egy figyelmeztető üzenetet, hogy nem alkalmazható a módszer, és szakítsuk meg szabályosan a program futását. Az ilyen jellegű ellenőrzéseket az egyszerűség kedvéért nem építettük be ebbe és a későbbi algoritmusokba sem, de természetesen ezekről gondoskodnia kell a programozónak az algoritmus számítógépen történő implementációjánál.

A húrmódszer konvergenciáját csak arra a speciális esetre bizonyítjuk be, amikor $f$ konvex vagy konkáv.

**2.19. tétel.** *Tegyük fel, hogy az $f\in C[a,b]$ függvény konvex vagy konkáv $[a,b]$-n és $f(a)f(b)<0$. Ekkor a húrmódszer konvergál az $f$ függvény (egyértelmű) $p$ gyökéhez.*

**Bizonyítás.** Tegyük fel, hogy $f$ konvex és $f(a)>0$, $f(b)<0$. A többi eset hasonlóan igazolható. Ekkor minden lépésben a bal oldali részintervallum fogja tartalmazni $f$ gyökét, azaz $a_{k+1}=a$ és $b_{k+1}=p_k$ minden $k$-ra. Mivel a $p_k$ sorozat monoton csökkenő és az $a$ szám egy alsó korlátja, ezért konvergál egy $p\geq a$ számhoz. $f(p_k)<0$ minden $k$-ra, ezért $f(p)\leq 0$. Mivel $f(a)>0$, ezért $p>a$. A (2.6) egyenletből kapjuk a $k\to\infty$ határértéket véve, hogy

$$p=a-f(a)\frac{a-p}{f(a)-f(p)},$$

amiből $f(p)=0$ következik. $\square$

**2.20. példa.** A húrmódszert, azaz a 2.18. algoritmust alkalmazva a 2.17. példa feladatára a 2.3. táblázatban felsorolt értékeket kapjuk. A 2.17. példához hasonlóan most is a $[0,1]$ kezdeti intervallumot és a $TOL=10^{-5}$ értéket használtuk. Látható, hogy ezen a feladaton a húrmódszer sokkal gyorsabban konvergál mint az intervallumfelezés módszere. $\square$

**2.3. táblázat.** Húrmódszer, $f(x)=e^x-2\cos x$, $[0,1]$, $TOL=10^{-5}$

| $k$ | $a_k$ | $b_k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|---|---|
| 0 | 0.00000000 | 1.00000000 | 0.37912145 | -3.9698e-01 |
| 1 | 0.37912145 | 1.00000000 | 0.50026042 | -1.0576e-01 |
| 2 | 0.50026042 | 1.00000000 | 0.53057677 | -2.5118e-02 |
| 3 | 0.53057677 | 1.00000000 | 0.53766789 | -5.8011e-03 |
| 4 | 0.53766789 | 1.00000000 | 0.53929982 | -1.3311e-03 |
| 5 | 0.53929982 | 1.00000000 | 0.53967359 | -3.0499e-04 |
| 6 | 0.53967359 | 1.00000000 | 0.53975922 | -6.9856e-05 |
| 7 | 0.53975922 | 1.00000000 | 0.53977883 | -1.5999e-05 |
| 8 | 0.53977883 | 1.00000000 | 0.53978383 | -3.6640e-06 |

**2.21. példa.** Alkalmazzuk újra a húrmódszert a 2.17. példa feladatára, de most a $[0,4]$ intervallumból kiindulva! A 2.4. táblázatban látható az eredmény. (Csak az első és utolsó néhány tagot listáztuk.) Most az előző példához képest sokkal lassabb a konvergencia. (Ez még további lassul, ha az intervallum bal oldali végpontját tovább csökkentjük.) Ha viszont az intervallumfelezés módszerét indítjuk a $[0,4]$ kezdeti intervallummal, akkor a lépésszám csak kettővel nő, mivel $\log_2 4/10^{-5}-1\approx 17.61$. $\square$

**2.4. táblázat.** Húrmódszer, $f(x)=e^x-2\cos x$, $[0,4]$, $TOL=10^{-5}$

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

**Feladatok**

1. Alkalmazza a húrmódszert a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
2. Legyen

$$f(x)=\begin{cases}\delta, & x\leq 0.5\\ 4(1+\delta)(x-x^2)-1, & x\geq 0.5\end{cases}$$

Alkalmazza az intervallumfelezés módszerét és a húrmódszert a $[0,1]$ intervallumon az $f$ függvény gyökének meghatározására, ha (a) $\delta=2$, (b) $\delta=0.5$, (c) $\delta=0.09$.

3. Dolgozza ki a 2.19. tétel bizonyítását a többi esetre is!

---
## 2.5. Newton-módszer

A numerikus analízisben gyakran használjuk a következő „módszert": helyettesítsük a problémát egy „egyszerűbb" problémával, ami „közel van" az eredeti problémához, és tekintsük az „egyszerűbb" probléma megoldását az eredeti közelítésének. Az $f(x)=0$ nemlineáris egyenlet megoldásakor tekintsük az $f$ függvény egy közelítését: Rögzítsünk egy $p_0$ pontot, vegyük $f$ elsőrendű Taylor-polinomját $p_0$ körül, és keressük meg annak a gyökét. Geometriailag ez azt jelenti, hogy vesszük az $f$ függvény $p_0$ pontjához húzott érintőjének metszéspontját az $x$-tengellyel. A metszéspontot az $f(p_0)+f'(p_0)(x-p_0)=0$ lineáris egyenlet megoldása adja, $x=p_0-f(p_0)/f'(p_0)$ (feltéve, hogy $f'(p_0)\neq 0$). Ezt a számot jelöljük $p_1$-gyel, és ismételjük meg az eljárást. Így kapjuk a

$$p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)} \tag{2.7}$$

rekurzív képlettel definiált sorozatot. A (2.7) iterációt *Newton–Raphson-módszernek* vagy röviden *Newton-módszernek* ill. *érintőmódszernek* nevezzük.

**2.22. példa.** A Newton-módszert alkalmazva a 2.17. példa feladatára a 2.5. táblázatban felsorolt értékeket kapjuk. A 2.18. algoritmushoz hasonló módon, ahogy sorozat egymás utáni tagjainak távolsága egy előre megadott tolerancia értéknél kisebb lett, megállítottuk a sorozat generálását. A sorozat nagyon gyorsan megközelítette a függvény gyökét. $\square$

**2.5. táblázat.** Newton-módszer, $f(x)=e^x-2\cos x$, $p_0=0.1$, $TOL=10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 | 7.5291e-01 |
| 2 | 0.5678850726 | 7.8450e-02 |
| 3 | 0.5402639121 | 1.3139e-03 |
| 4 | 0.5397853041 | 3.9302e-07 |
| 5 | 0.5397851608 | 3.5207e-14 |

A Newton-módszer egy egylépéses iterációs módszer, azaz fixpont iteráció a

$$g(x):=x-\frac{f(x)}{f'(x)} \tag{2.8}$$

iterációs függvénnyel. $g$-t differenciálva kapjuk

$$g'(x)=1-\frac{(f'(x))^2-f(x)f''(x)}{(f'(x))^2}=\frac{f(x)f''(x)}{(f'(x))^2}. \tag{2.9}$$

Legyen $p$ az $f$ függvény olyan gyöke, amelyre $f'(p)\neq 0$. Ekkor $g'(p)=0$, így a 2.15. tételből rögtön következik:

**2.23. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a Newton-módszer lokálisan konvergál $p$-hez.*

**2.24. példa.** Tekintsük az $f(x)=0.5\arctan x$ függvényt. Ennek egyetlen gyöke $p=0$. $f'(0)=0.5$, így a Newton-módszer lokálisan konvergál $p=0$-hoz, azaz, ha $p_0$ elég kicsi, akkor a Newton-sorozat 0-hoz tart. A 2.6. táblázatban a $p_0=1.4$ kezdeti értékhez tartozó sorozat első néhány tagját nyomtattuk ki. (A 15. lépésben a program hibaüzenettel leállt, mert $f'(p_{14})=0$ a számítógépen.) Látható, hogy $p_k$ ebben az esetben nem tart 0-hoz. $\square$

**2.6. táblázat.** Newton-módszer, $f(x)=0.5\arctan x$, $p_0=1.4$

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

**Feladatok**

1. Alkalmazza a Newton-módszert a 2.3. szakasz 1. feladatában felsorolt egyenletek megoldására!
2. Legyen $f(x)=0.5\arctan x$. $f$-nek nyilván $x=0$ az egyetlen gyöke. Legyen a $p_k$ a Newton-iterációval generált sorozat. Mutassa meg, hogy létezik olyan $p^*$ szám, hogy
   - (a) ha $|p_0|<p^*$, akkor $p_k\to 0$,
   - (b) ha $|p_0|=p^*$, akkor a $p_k$ sorozat váltakozva a $p_0$, $-p_0$ értékeket veszi fel (azaz nem konvergens),
   - (c) ha $|p_0|>p^*$, akkor $p_k$ váltakozó előjelű, és $|p_k|\to\infty$.
3. Vezessen le egy iterációs módszert $\sqrt[n]{a}$ kiszámítására!

---
## 2.6. Szelőmódszer

A Newton-módszer képletében szerepel az $f$ függvény deriváltja. A gyakorlatban viszont $f'$ sokszor nem ismert (pl. $f$ nem képlettel van megadva, hanem egy numerikus eljárás generálja a függvény értékét egy megadott pontban), vagy a derivált képletének kiértékelése túl sok gépi számolást igényel, így „nem éri meg" a használata. A derivált használatát küszöböli ki a *szelőmódszer*. Legyen az $f$ függvény $p_0$ és $p_1$ két egymástól különböző, általunk választott kezdeti érték. Tekintsük az $f$ függvény grafikonjának $p_0$ és $p_1$ pontjaihoz tartozó szelőt, azaz a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokon átmenő egyenest. Ennek egyenlete:

$$y=f(p_1)+\frac{f(p_1)-f(p_0)}{p_1-p_0}(x-p_1).$$

A szelő az $x$-tengelyt az $x=p_1-\frac{p_1-p_0}{f(p_1)-f(p_0)}f(p_1)$ pontban metszi. Ezt a pontot $p_2$-vel jelöljük. Ezután tekintsük a $p_1$ és $p_2$ pontokhoz tartozó szelőt, és annak az $x$-tengellyel vett metszéspontját jelöljük $p_3$-mal. Ezt az eljárást folytatva kapjuk a

$$p_{k+1}=p_k-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \tag{2.10}$$

sorozatot. A (2.10) képlettel definiált kétlépéses iterációs módszert *szelőmódszernek* nevezzük.

**2.25. példa.** A szelőmódszert alkalmazva a 2.17. példa feladatára a 2.7. táblázatban felsorolt értékeket kapjuk. Itt is akkor állítottuk le a sorozat generálását, amikor az egymás utáni tagok távolsága kisebb lett, mint az előre megadott tolerancia érték. Összehasonlítva az eredményt a 2.5. táblázattal, látható, hogy a szelőmódszer valamivel lassabban konvergál, mint a Newton-módszer. $\square$

**2.7. táblázat.** Szelőmódszer, $f(x)=e^x-2\cos x$, $p_0=0$, $p_1=1$, $TOL=10^{-5}$

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

A szelőmódszer konvergenciájának igazolásához szükségünk lesz a következő eredményre.

**2.26. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Legyen $p_k$ a szelőmódszerrel generált sorozat. Ekkor minden $k$-ra léteznek olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$ és $\eta_k\in\langle p_k,p_{k-1}\rangle$ számok, hogy*

$$p_{k+1}-p=\tfrac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k-p)(p_{k-1}-p). \tag{2.11}$$

**Bizonyítás.** Kis számolással belátható

$$
\begin{aligned}
p_{k+1}-p &= p_k-p-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \\
&= \frac{(p_{k-1}-p)f(p_k)-(p_k-p)f(p_{k-1})}{f(p_k)-f(p_{k-1})} \\
&= \frac{(p_k-p)(p_{k-1}-p)}{f(p_k)-f(p_{k-1})}\left(\frac{f(p_k)}{p_k-p}-\frac{f(p_{k-1})}{p_{k-1}-p}\right) \\
&= (p_k-p)(p_{k-1}-p)\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}\cdot\frac{\frac{f(p_k)-f(p)}{p_k-p}-\frac{f(p_{k-1})-f(p)}{p_{k-1}-p}}{p_k-p_{k-1}}.
\end{aligned}
$$

A Lagrange-féle középérték tétel szerint létezik olyan $\eta_k\in\langle p_k,p_{k-1}\rangle$ szám, hogy

$$\frac{f(p_k)-f(p_{k-1})}{p_k-p_{k-1}}=f'(\eta_k).$$

A tétel bizonyításának befejezéséhez azt kell megmutatnunk, hogy létezik olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$, hogy

$$\frac{\frac{f(p_k)-f(p)}{p_k-p}-\frac{f(p_{k-1})-f(p)}{p_{k-1}-p}}{p_k-p_{k-1}}=\frac{f''(\xi_k)}{2}. \tag{2.12}$$

Ennek direkt bizonyítását a 2. feladatra hagyjuk. Itt most a 6. fejezetben bevezetendő fogalmakra és eredményekre hivatkozva látjuk be a (2.12) relációt. Eszerint (2.12) bal oldala nem más, mint az $f$ függvény $p_{k-1}$, $p$ és $p_k$ pontokra felírt másodrendű osztott differenciája, $f[p_{k-1},p,p_k]$ (lásd a 6.2. szakaszt). A 6.17. következmény szerint létezik olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$ szám, hogy $f[p_{k-1},p,p_k]=f''(\xi_k)/2$. $\square$

**2.27. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a szelőmódszer lokálisan konvergál $p$-hez.*

**Bizonyítás.** Legyen $\delta^*$ olyan, hogy $f'(x)\neq 0$ ha $x\in[p-\delta^*,p+\delta^*]$. Ilyen $\delta^*$ létezik, mivel $f'(p)\neq 0$ és $f'$ folytonos. Legyen

$$M:=\frac{\max\{|f''(x)|\colon x\in[p-\delta^*,p+\delta^*]\}}{2\min\{|f'(x)|\colon x\in[p-\delta^*,p+\delta^*]\}}.$$

Válasszuk $\delta$-t úgy, hogy $\delta<\min\{\delta^*,\tfrac{1}{M}\}$ legyen, és legyen $\varepsilon:=M\delta$. Ekkor a feltételek szerint $0<\varepsilon<1$. Legyenek $p_0,p_1\in (p-\delta,p+\delta)$ tetszőleges, és különböző számok. (2.11) és $M$ definíciója szerint $|p_{k+1}-p|\leq M|p_k-p||p_{k-1}-p|$, és ezért

$$M|p_{k+1}-p|\leq M|p_k-p|M|p_{k-1}-p| \tag{2.13}$$

minden $k$-ra. Ezt $k=1$-re alkalmazva $M|p_2-p|\leq M|p_1-p|M|p_0-p|\leq (M\delta)^2=\varepsilon^2<\varepsilon$. Ebből kapjuk, hogy $|p_2-p|\leq\varepsilon/M=\delta$. Ez azt jelenti, hogy $p_2\in(p-\delta,p+\delta)$. Hasonlóan belátható, hogy $p_k\in(p-\delta,p+\delta)$ minden $k$-ra.

$\varepsilon$ definíciójából következik, hogy $M|p_0-p|<\varepsilon$ és $M|p_1-p|<\varepsilon$. Most keresünk egy olyan $q_k$ sorozatot, amelyre $M|p_k-p|\leq\varepsilon^{q_k}$ teljesül minden $k$-ra. Az előbbiek szerint használhatjuk a $q_0=1$ és $q_1=1$ értékeket. Tegyük fel, hogy már definiáltuk a $q_k$ sorozat első $k$ tagját. A (2.13) egyenlőtlenség szerint ekkor az $M|p_{k+1}-p|\leq\varepsilon^{q_k}\varepsilon^{q_{k-1}}$ egyenlőtlenség kell, hogy teljesüljön. Ezért a $M|p_{k+1}-p|\leq\varepsilon^{q_{k+1}}$ becslés teljesülni fog, ha $q_{k+1}$-et úgy választjuk

$$q_{k+1}=q_k+q_{k-1}, \quad k\geq 1, \quad q_0=1, \quad q_1=1 \tag{2.14}$$

legyen. A (2.14) rekurzív képlettel definiált sorozatot *Fibonacci-sorozatnak* nevezzük. Belátható (3. feladat), hogy $q_k$ általános képlete

$$q_k=\frac{1}{\sqrt{5}}(r_0^{k+1}-r_1^{k+1}), \qquad k\geq 0, \tag{2.15}$$

ahol

$$r_0=\frac{1+\sqrt{5}}{2}\approx 1.618, \quad \text{és} \quad r_1=\frac{1-\sqrt{5}}{2}\approx -0.618.$$

Ebből következik, hogy $q_k\to\infty$ ha $k\to\infty$. Ebből viszont kapjuk hogy $p_k\to p$, hiszen

$$|p_k-p|\leq\tfrac{1}{M}\varepsilon^{q_k}\to 0, \quad \text{ha } k\to\infty. \quad\square$$

**Feladatok**

1. Alkalmazza a szelőmódszert a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
2. Lássa be a (2.12) relációt! (Útmutatás: igazolja, hogy a

$$f[a,b,c]=\frac{\frac{f(c)-f(b)}{c-b}-\frac{f(b)-f(a)}{b-a}}{c-a}$$

kifejezés értéke független az $a$, $b$, $c$ számok sorrendjétől! Ezért feltehetjük, hogy $a<b<c$. Vegye az $f$ függvény $b$-körüli elsőrendű Taylor-közelítését a másodrendű hibataggal együtt! Ennek segítségével fejezze ki a jobb oldalon álló kifejezés számlálóját! Végül használja a 2.2. tételt annak igazolására, hogy $f[a,b,c]=f''(\xi)/2$ valamely $\xi\in(a,c)$-re!)
3. Igazolja a (2.15) képletet!

---
## 2.7. Konvergencia rendje

Az eddig vizsgált iterációs módszerekel alkalmazva tapasztaltuk, hogy a különböző módszerek eltérő sebességgel konvergálnak. A konvergencia gyorsaságának jellemzésére bevezetjük a konvergencia rendjének fogalmát.

Legyen $p_k$ egy konvergens sorozat, melynek határértéke $p$. A $p_k$ sorozat *konvergencia rendje* $\alpha$, ha $\alpha\geq 1$ és létezik olyan $c\geq 0$ szám, hogy

$$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{minden } k\geq 0\text{-ra}, \tag{2.16}$$

és $\alpha=1$ esetén még azt is kikötjük, hogy $c<1$ legyen.

Ha pontosabban akarunk fogalmazni, akkor a (2.16) egyenlőtlenséget teljesítő $p_k$ sorozatra azt mondhatjuk, hogy a konvergencia rendje *legalább* $\alpha$, hiszen elképzelhető, hogy a (2.16) egyenlőtlenséget $\alpha$-nál nagyobb kitevővel is teljesíti. Mi a „legalább" jelzőt elhagyjuk, de a konvergencia rend fogalmát ebben az értelemben használjuk. Ha azt szeretnénk hangsúlyozni, hogy a $p_k$ sorozat a (2.16) egyenlőtlenséget teljesíti valamely $\alpha$-ra, de azt nem teljesíti egy $\alpha$-nál nagyobb kitevőre sem, akkor azt mondjuk, hogy a konvergencia rendje *pontosan* $\alpha$.

Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$, akkor *lineáris*, ha $\alpha=2$, akkor *kvadratikus* konvergenciáról beszélünk.

Ha egy $p_k$ sorozat lineárisan konvergál $p$-hez, akkor könnyen látható, hogy teljesíti a

$$|p_k-p|\leq c^k|p_0-p| \tag{2.17}$$

becslést. Néhány módszer esetében nem könnyű a (2.16) típusú egyenlőtlenséget belátni az $\alpha=1$ esetben, viszont könnyebb a (2.17) egyenlőtlenséget igazolni. Ezért a lineáris konvergencia előbbi általános definícióját kibővítjük úgy, hogy ha egy $p_k$ sorozat teljesíti a (2.17) egyenlőtlenséget egy $0\leq c<1$ konstanssal, akkor is lineáris konvergenciáról beszélünk.

Tegyük fel, hogy $p_k\to p$, és a konvergencia rendje $\alpha$. A

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha} \tag{2.18}$$

véges határértéket, ha létezik, a $p_k$ sorozat *aszimptotikus hibakonstansának* nevezzük. Könnyen látható, hogy ha a (2.18) határérték létezik és véges, akkor a $p_k$ sorozat konvergencia rendje $\alpha$. Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$ és az aszimptotikus hibakonstansa 0, akkor *szuperlineáris* konvergenciáról beszélünk.

**2.28. tétel.** *Tegyük fel, hogy a $p_k$ sorozat $\alpha$ rendben konvergál $p$-hez a $\lambda\neq 0$ aszimptotikus hibakonstanssal. Ekkor*
1. $\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=0$ minden $\beta<\alpha$-ra, és
2. $\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\infty$ minden $\beta>\alpha$-ra.

**Bizonyítás.** Az állítás következik a

$$\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\cdot\frac{1}{|p_k-p|^{\beta-\alpha}}$$

összefüggésből. $\square$

A tételből következik, hogy ha egy $p_k$ sorozat (legalább) $\alpha$ rendben konvergál, és az aszimptotikus hibakonstans létezik és nem 0, akkor a konvergencia rendje pontosan $\alpha$.

**2.29. példa.** Tekintsük újra a 2.22. példában vizsgált Newton-iterációt! A 2.8. táblázat utolsó három oszlopában feltüntettük a $|p_{k+1}-p|/|p_k-p|^\alpha$ kifejezések értékeit $\alpha=1,2$ és 3-ra, használva a $p=0.5397851608092811$ értéket. Látható, hogy $\alpha=1$-re a kifejezés 0-hoz tart, $\alpha=2$-re korlátos marad, de nem tart 0-hoz, $\alpha=3$-ra pedig a végtelenbe tart. (Természetesen egy sorozat első 4 tagjából még nem tudunk messzemenő következtetéseket levonni, de ha több tagját generálnánk a sorozatnak, ellenőrizhetjük az előbb említett eredményt.) Úgy tapasztaljuk tehát, hogy a sorozat konvergencia rendje 2. $\square$

**2.8. táblázat.** Newton-módszer konvergencia rendje, $f(x)=e^x-2\cos x$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ | $\alpha=3$ |
|---:|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 | | | |
| 1 | 1.0000000000 | 1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 | 2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 | 1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 | 3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 | 2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

**2.30. tétel.** *Tegyük fel, hogy a $p_k$ sorozat teljesíti a (2.16) egyenlőtlenséget valamely $c\geq 0$-ra és $\alpha>1$-re. Ekkor a $p_n$ sorozat lokálisan konvergál a $p$ számhoz, valamint minden $k$-ra*

$$|p_k-p|\leq c^{\frac{\alpha^k-1}{\alpha-1}}|p_0-p|^{\alpha^k}. \tag{2.19}$$

**Bizonyítás.** Teljes indukcióval könnyen igazolható a (2.19) egyenlőtlenség. Ebből viszont következik, hogy

$$|p_k-p|\leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0-p|\right)^{\alpha^k},$$

így ha $p_0$ olyan, hogy $c^{\frac{1}{\alpha-1}}|p_0-p|<1$, akkor $p_k\to p$, azaz $p_k$ lokálisan konvergál $p$-hez. $\square$

**2.31. példa.** Legyenek $p_k\to p$ és $q_k\to q$ lineárisan ill. kvadratikusan konvergáló sorozatok, amelyek teljesítik a (2.17) ill. (2.16) egyenlőtlenségeket $c=1/2$-re. Továbbá tegyük fel, hogy $|p_0-p|<1$ és $|q_0-q|<1$. Ekkor a (2.17) és (2.19) egyenlőtlenségekből kapjuk, hogy $|p_k-p|\leq (1/2)^k$ ill. $|q_k-q|\leq (1/2)^{2^k-1}$. A 2.9. táblázatban ezeket a hibakorlátokat soroltuk fel $k=1,2,\dots,5$-re. Látható, hogy a hiba mennyivel gyorsabban csökken (azaz a konvergencia mennyivel gyorsabb) a kvadratikus esetben. $\square$

**2.9. táblázat.** Lineáris vs. kvadratikus konvergencia

| $k$ | $(1/2)^k$ | $(1/2)^{2^k-1}$ |
|---:|---|---|
| 1 | 5.0000⋅10⁻¹ | 5.0000⋅10⁻¹ |
| 2 | 2.5000⋅10⁻¹ | 1.2500⋅10⁻¹ |
| 3 | 1.2500⋅10⁻¹ | 7.8125⋅10⁻³ |
| 4 | 6.2500⋅10⁻² | 3.0518⋅10⁻⁵ |
| 5 | 3.1250⋅10⁻² | 4.6566⋅10⁻¹⁰ |
| 6 | 1.5625⋅10⁻² | 1.0842⋅10⁻¹⁹ |

**2.32. tétel.** *Legyen $g\in C^m[a,b]$, $p\in(a,b)$ és $p=g(p)$. Tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációt.*
1. *Ha $|g'(p)|<1$, akkor a fixpont iteráció lokálisan lineárisan konvergál $p$-hez.*
2. *Ha $g'(p)=g''(p)=\dots=g^{(m-1)}(p)=0$, akkor a fixpont iteráció lokálisan $m$-edrendben konvergál $p$-hez a $g^{(m)}(p)/m!$ aszimptotikus hibakonstanssal.*

**Bizonyítás.** Az 1. állítás a 2.15. tétel bizonyításából következik.

A 2. állítás bizonyításához vegyük a $g$ függvény $p$-körüli $(m-1)$-edrendű Taylor-közelítését:

$$g(p_k)=g(p)+g'(p)(p_k-p)+\dots+\frac{g^{(m-1)}(p)}{(m-1)!}(p_k-p)^{m-1}+\frac{g^{(m)}(\xi_k)}{m!}(p_k-p)^m,$$

ahol $\xi_k\in\langle p_k,p\rangle$. Ebből következik, használva, hogy az első $m-1$ derivált 0 a $p$ pontban, $g(p)=p$ és $g(p_k)=p_{k+1}$, hogy

$$|p_{k+1}-p|=\frac{|g^{(m)}(\xi_k)|}{m!}|p_k-p|^m\leq c|p_k-p|^m. \tag{2.20}$$

Az utolsó becslésnél használtuk, hogy $g\in C^m[a,b]$, azaz $g^{(m)}$ folytonos, így korlátos $p$ egy környezetében. A (2.18) határérték létezése következik az előbbiekből, hiszen $\xi_k\to p$ ha $k\to\infty$, mivel $|\xi_k-p|\leq|p_k-p|$, és ezért

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^m}=\lim_{k\to\infty}\frac{g^{(m)}(\xi_k)}{m!}=\frac{g^{(m)}(p)}{m!}.\quad\square$$

A tételből következik, hogy a fixpont iteráció konvergenciájának rendje mindig egész szám (feltéve hogy a $g$ függvény elegendően sokszor differenciálható). A 2.36. tételben meg fogjuk mutatni, hogy ez általában nem igaz többlépéses iterációs módszerekre.

Szükségünk lesz még a többszörös gyök fogalmára. A $p\in(a,b)$ számot az $f\in C[a,b]$ függvény $m$-szeres gyökének nevezzük, ha létezik olyan $q\in C[a,b]$ függvény, hogy $q(p)\neq 0$ és

$$f(x)=(x-p)^m q(x), \quad x\in(a,b). \tag{2.21}$$

Könnyen igazolható a következő állítás:

**2.33. tétel.** *Legyen $f\in C^m[a,b]$, $p\in(a,b)$.*
1. *Legyen $p$ $m$-szeres gyöke $f$-nek, és a (2.21) azonosságot teljesítő $q$ függvény $m$-szer differenciálható. Ekkor*

$$f(p)=f'(p)=f''(p)=\dots=f^{(m-1)}(p)=0, \quad \text{és } f^{(m)}(p)\neq 0. \tag{2.22}$$

2. *Ha (2.22) teljesül, akkor $p$ $m$-szeres gyöke $f$-nek.*
3. *Tegyük fel, hogy az $f$ függvény akárhányszor differenciálható, $f$-et előállítja a $p$-körüli Taylor-sora, és $f$ teljesíti a (2.22) relációkat. Ekkor $p$ $m$-szeres gyöke $f$-nek, és a (2.21) azonosságot teljesítő $q$ függvény is akárhányszor differenciálható, valamint $q$ is Taylor-sorba fejthető $p$-körül.*

A következő tétel szerint ha $f$-nek $p$ egyszeres gyöke, akkor a Newton-módszer kvadratikusan, ha pedig többszörös gyöke, akkor lineárisan konvergál.

**2.34. tétel.** *Legyen $f\in C^2[a,b]$.*
1. *Ha $f(p)=0$ és $f'(p)\neq 0$, akkor a Newton-iteráció lokálisan kvadratikusan konvergál $p$-hez.*
2. *Ha $f(x)=(x-p)^m q(x)$, ahol $q\in C^2[a,b]$, $q(p)\neq 0$, $m>1$, akkor a Newton-iteráció lokálisan lineárisan konvergál $p$-hez.*

**Bizonyítás.** Az 1. állítás következik a 2.32. tétel 2. állításából, hiszen a Newton-iteráció egy fixpont iteráció a (2.8) egyenlettel definiált $g$ iterációs függvénnyel, és $g'(p)=0$ a (2.9) reláció szerint.

Mivel a

$$g(x):=\begin{cases}x-\frac{f(x)}{f'(x)}, & x\neq p,\\ p, & x=p\end{cases}$$

függvényre

$$g(x)=x-\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $g$ folytonosan differenciálható $p$-ben, és $g'(p)=1-\tfrac{1}{m}$. Így a 2.32. tétel 2. pontja szerint a konvergencia rendje lineáris. $\square$

**2.35. példa.** Keressük meg az $f(x)=x^3+x^2-8x-12$ polinom egy gyökét a Newton–Raphson-módszerrel, a $p_0=0$ kiindulási értékkel és a $10^{-5}$ tolerancia értéket használva! Könnyen látható, hogy $x=-2$ kétszeres gyöke, $x=3$ pedig egyszeres gyöke a polinomnak. A 2.10. táblázatban található futásnál a $p_0=0$ kezdőértékkel indultunk. Az 2.11. táblázat generálásakor pedig a $p_0=2$ kezdőértékkel indultunk. Az első esetben a sorozat $-2$-höz konvergál, a második esetben pedig 3-hoz. A táblázatokból látható, hogy az első esetben csak lineáris, a másodikban pedig kvadratikus a konvergencia rendje. $\square$

**2.10. táblázat.** Newton-módszer, $f(x)=x^3+x^2-8x-12$, $p_0=0$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 0.0000000000 | -1.2000e+01 | | |
| 1 | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2 | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3 | -1.8853313478 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
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
| 16 | -1.9999863269 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

**2.11. táblázat.** Newton-módszer, $f(x)=x^3+x^2-8x-12$, $p_0=2$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 | | |
| 1 | 4.0000000000 | 3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 | 6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 | 5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 | 4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 | 3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 | 1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

**2.36. tétel.** *Ha $f$-nek $p$ egyszeres gyöke, akkor a szelőmódszer $\alpha=(1+\sqrt{5})/2\approx 1.618$ rendben lokálisan konvergál $p$-hez.*

**Bizonyítás.** Használjuk a 2.27. tétel bizonyításában bevezetett jelöléseket és az ott kapott eredményeket. A (2.13) egyenlőtlenség szerint

$$|p_{k+1}-p|\leq M|p_k-p||p_{k-1}-p|.$$

Ebből kiindulva, és a $|p_k-p|\leq \tfrac{1}{M}\varepsilon^{q_k}$ becslést használva kapjuk

$$
\begin{aligned}
|p-p_{k+1}| &\leq |p_k-p|^{r_0} M |p_k-p|^{1-r_0}|p_{k-1}-p| \\
&\leq |p_k-p|^{r_0} M \left(\tfrac{1}{M}\varepsilon^{q_k}\right)^{1-r_0}\tfrac{1}{M}\varepsilon^{q_{k-1}} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{q_k+q_{k-1}-r_0 q_k} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{q_{k+1}-r_0 q_k} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{r_1^{k+1}}.
\end{aligned}
$$

Megjegyezzük, hogy az utolsó lépés a (2.15) egyenlőségből következik (kis számolással). Mivel $r_1^{k+1}\to 0$ ha $k\to\infty$, kapjuk, hogy létezik olyan $c$ konstans, hogy $|p-p_{k+1}|\leq c|p_k-p|^{r_0}$, azaz a konvergencia rendje $r_0=\tfrac{1+\sqrt{5}}{2}$. $\square$

Láttuk, hogy a Newton-módszer többszörös gyökökre alkalmazva csak lineárisan konvergál. Belátható, hogy ez a szelőmódszerre is érvényes. Most azzal foglalkozunk, hogy lehet ezekben az esetekben felgyorsítani a konvergenciát. Legyen $f\in C^3[a,b]$, és tegyük fel, hogy $p\in(a,b)$ többszörös gyöke $f$-nek, pontosabban feltesszük, hogy $f(x)=(x-p)^m q(x)$ alakú, ahol $m>1$ és $q\in C^3[a,b]$. Definiáljuk a

$$\mu(x)=\begin{cases}\frac{f(x)}{f'(x)}, & x\neq p,\\ 0, & x=p\end{cases}$$

függvényt. Könnyen ellenőrizhető, hogy

$$\mu(x)=\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $\mu\in C^2[a,b]$, továbbá $\mu'(p)=\tfrac{1}{m}$, így $p$ csak egyszeres gyöke $\mu$-nek. Ezért ha $f$ helyett a $\mu$ függvényre alkalmazzuk a Newton-módszert, kvadratikus konvergenciát kapunk. Ennek a módszernek a definíciója tehát

$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}. \tag{2.23}$$

**Feladatok**

1. Mutassa meg, hogy az intervallumfelezés módszere lineárisan konvergens!
2. Lássa be a (2.19) egyenlőtlenséget!
3. Legyen $a>0$. Mutassa meg, hogy a

$$p_{k+1}=\frac{p_k(p_k^2+3a)}{3p_k^2+a}$$

egy harmadrendű lokálisan konvergens iterációs módszer $\sqrt{a}$ kiszámolására!

4. Adja meg a $p_k=\tfrac{1}{k}$ sorozat konvergencia rendjét! Mi a konvergencia rendje a $p_k=\tfrac{1}{k^n}$ sorozatnak?
5. Mutassa meg, hogy a $p_k=10^{-2^k}$ sorozat másodrendben konvergál 0-hoz! Adjon meg egy olyan sorozatot, amely $\alpha$-ad rendben konvergens!
6. Mutassa meg, hogy a $\sin^2 x$ függvénynek $x=0$ kétszeres gyöke!
7. Igazolja a 2.33. tételt!
8. Tekintsük a következő iterációs módszereket:
   - (a) (Halley-módszer:) $p_{k+1}=p_k-\frac{1}{a_k}$, ahol $a_k=\frac{f'(p_k)}{f(p_k)}-\tfrac{1}{2}\frac{f''(p_k)}{f'(p_k)}$,
   - (b) (Olver-módszer:) $p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)}-\tfrac{1}{2}\frac{f''(p_k)}{f'(p_k)}\left(\frac{f(p_k)}{f'(p_k)}\right)^2$,

   Határozza meg az egyes módszerek konvergencia rendjét! Alkalmazza ezeket a módszereket a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
9. Keresse meg az $f(x)=(x^2-2)^3$ függvény egy gyökét a Newton-iterációval, a szelőmódszerrel, a (2.23) iterációval és a

$$p_{k+1}=p_k-m\frac{f(p_k)}{f'(p_k)}$$

iterációval, ahol $m$ a gyök multiplicitása! Hasonlítsa össze a módszerek konvergenciájának sebességét! Mi ez utóbbi módszer konvergenciájának rendje?

10. Tegyük fel, hogy egy $f$ függvénynek már meghatároztuk az $x_1$ közelítő gyökét. Ha ezután egy $g(x)=f(x)/(x-x_1)$ függvényre alkalmazunk egy gyökkereső eljárást, akkor azzal $f$ egy másik gyökét (vagy $x_1$-et újra, ha $x_1$ többszörös gyök volt) megkaphatjuk. Ezzel az ún. *deflációs* eljárással határozza meg az
   - (a) $f(x)=x^3-3x^2+4$,  (b) $f(x)=x^4-5x^3+9x^2-7x+2$

   polinomok összes gyökét az egyes gyökök multiplicitásával együtt, tetszőleges gyökkereső algoritmust használva!

---
## 2.8. Iterációs módszerek megállási feltételei

Az eddigi módszerek mindegyike az $f$ függvény egy gyökének meghatározására egy $p_k$ sorozatot generált, amely (adott feltételek teljesülése esetén) konvergált az $f$ függvény egy $p$ gyökéhez. A gyököt, azaz a sorozat határértékének közelítésére a sorozat egy $p_k$ tagját használjuk, ahol $k$ „elég nagy". Azt, hogy „meddig kell elmenni" a sorozat generálásában, többféle stratégiát használva dönthetjük el. Itt a három leggyakrabban használtakkal foglalkozunk. Előre megadunk $\varepsilon_1>0$, $\varepsilon_2>0$ és $\varepsilon_3>0$ tolerancia értékeket. A sorozat $k$-adik tagját, $p_k$-t tekintjük $p$ közelítésnek, ha

1. $|p_k-p_{k-1}|<\varepsilon_1$,  2. $\frac{|p_k-p_{k-1}|}{|p_k|}<\varepsilon_2$, vagy  3. $|f(p_k)|<\varepsilon_3$.

Az 1. feltétel a közelítés hibájának, $|p_k-p|$-nek numerikus megfelelője. Azt mondja, hogy ha a sorozat új tagja az előzőtől egy adott tolerancia értéknél kevesebbel tér el, akkor úgy gondoljuk, hogy azért változik csak kicsit az új érték a régihez képest, mert mindkettő már közel van a határértékhez, és ezért megszakítjuk a sorozat generálását.

A 2. feltétellel a közelítés relatív hibáját, $|p_k-p|/|p|$-et közelítjük numerikusan. Mint az előző feltételnél, itt is azt vizsgáljuk, hogy mennyit változik a sorozat következő tagja az előzőhöz képest, de a különbség képzésénél figyelembe vesszük a tagok nagyságrendjét.

A 3. feltétel szerint ha a függvényérték kicsi, akkor feltesszük, hogy közel vagyunk a gyökhöz, és megállunk.

Ezenkívül minden iterációs algoritmusba érdemes beépíteni az iteráció lépésszámának követését, és egy adott lépésszámot túllépve megállítani a program futását. Ezzel megakadályozhatjuk a program végtelen ciklusba kerülését, és kiszűrjük a túl lassú konvergenciát.

Az első két feltétel feltétel minden iterációs módszerre alkalmazható, a harmadik természetesen az ebben a fejezetben vizsgált feladatra, az $f$ függvény gyökének meghatározására vonatkozik. Más feladatoknál többnyire meg lehet adni hasonló feltétel arra vonatkozólag, hogy egy adott közelítő megoldás „mennyire" elégíti ki az adott problémát (lásd pl. a 4.4. szakaszt később).

Mindegyik feltételhez lehet példát megadni, ahol a feltétel teljesülése nem vonja maga után azt, hogy a gyöknek jó közelítését kapjuk. Ezért a gyakorlatban, hogy az egyes feltételekkel kapcsolatos lehetséges problémákat kiszűrjük, ezeknek a megállási kritériumoknak kombinációit szokták használni.

**Feladatok**

1. Tegyük fel, hogy egy iterációs módszer a $p_k=\sum_{i=1}^k \tfrac{1}{i}$ sorozatot generálja, és tegyük fel hogy ebben a szakaszban leírt 1. feltételt használjuk csak megállási feltételként. Mit tapasztalunk? Konvergens-e a sorozat? Mit tapasztalunk ha csak a 2. megállási feltételt használjuk?
2. Legyen $f(x)=x^8$, és tegyük fel, hogy egy módszer a $p_k=1/k$ sorozatot generálja $f$ gyökének közelítésére. Tegyük fel, hogy csak az 1. feltételt használjuk megállási feltételként az $\varepsilon_1=10^{-8}$ tolerancia értékkel. Mi lesz az algoritmussal megadott közelítő gyök értéke? Mi lesz a gyök, ha csak a 2. és ha csak a 3. feltételt használjuk az $\varepsilon_2=10^{-8}$ ill. $\varepsilon_3=10^{-8}$ tolerancia értékekkel?

---
## 2.9. Többváltozós analízis előismeretek

Ebben a szakaszban összefoglaljuk azokat a többváltozós analízis ismereteket, jelöléseket, amelyekre szükségünk lesz a fejezet hátralevő részében a nemlineáris egyenletrendszerek tárgyalásakor.

**2.37. tétel.** *Legyen $E\subset\mathbb{R}^n$ korlátos zárt halmaz, $f\colon E\to\mathbb{R}$ folytonos függvény. Ekkor $f$ felveszi maximumát és minimumát $E$-n, azaz létezik olyan $\mathbf{c},\mathbf{d}\in E$, hogy*

$$f(\mathbf{c})=\max_{\mathbf{x}\in E} f(\mathbf{x}) \qquad \text{és} \qquad f(\mathbf{d})=\min_{\mathbf{x}\in E} f(\mathbf{x}).$$

Legyen $E\subset\mathbb{R}^n$ és tekintsük az $f\colon E\to\mathbb{R}$ $n$-változós függvényt. Az $f=f(\mathbf{x})=f(x_1,\dots,x_n)$ függvény $x_i$ változója szerinti parciális deriváltját $\frac{\partial f}{\partial x_i}$ jelöli. Ha az $f$ függvény összes $m$-edrendű parciális deriváltja létezik és folytonos, akkor a függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük. Ezt a tulajdonságot az $f\in C^m$ jelöléssel rövidítjük. Ha $f\in C^1$, akkor $f'$ az $f$ függvény *gradiensvektorát* jelöli, azaz

$$f'(\mathbf{x}):=\left(\frac{\partial f(\mathbf{x})}{\partial x_1},\dots,\frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

Ha $f\in C^2$, akkor $f''(\mathbf{x})$ jelöli az ún. *Hesse-mátrixot*:

$$f''(\mathbf{x}):=\begin{pmatrix}\frac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_1\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_1\partial x_n}(\mathbf{x})\\ \frac{\partial^2 f}{\partial x_2\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_2\partial x_n}(\mathbf{x})\\ \vdots & \vdots & & \vdots \\ \frac{\partial^2 f}{\partial x_n\partial x_1}(\mathbf{x}) & \frac{\partial^2 f}{\partial x_n\partial x_2}(\mathbf{x}) & \cdots & \frac{\partial^2 f}{\partial x_n^2}(\mathbf{x})\end{pmatrix}.$$

Szükségünk lesz a Taylor-tétel többváltozós függvényekre vonatkozó alakjára.

**2.38. tétel (Taylor-formula).** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $f\colon E\to\mathbb{R}$, $f\in C^{m+1}$, és legyen $\mathbf{a}\in E$. Ekkor minden $\mathbf{x}\in E$-hez létezik olyan $\boldsymbol{\xi}=\boldsymbol{\xi}(\mathbf{x})\in E$, hogy $\boldsymbol{\xi}=\mathbf{x}+t(\mathbf{a}-\mathbf{x})$ valamely $t\in(0,1)$-re (azaz $\boldsymbol{\xi}$ az $\mathbf{a}$ és $\mathbf{x}$ vektorokat összekötő szakasz valamely pontja), és*

$$
\begin{aligned}
f(x_1,\dots,x_n) &= f(a_1,\dots,a_n)+\sum_{i=1}^n \frac{\partial f(a_1,\dots,a_n)}{\partial x_i}(x_i-a_i) \\
&\quad +\tfrac{1}{2}\sum_{i=1}^n\sum_{j=1}^n \frac{\partial^2 f(a_1,\dots,a_n)}{\partial x_i\partial x_j}(x_i-a_i)(x_j-a_j) \\
&\quad +\dots+\tfrac{1}{m!}\sum_{i_1=1}^n\dots\sum_{i_m=1}^n \frac{\partial^m f(a_1,\dots,a_n)}{\partial x_{i_1}\cdots\partial x_{i_m}}(x_{i_1}-a_{i_1})\cdots(x_{i_m}-a_{i_m}) \\
&\quad +\tfrac{1}{(m+1)!}\sum_{i_1=1}^n\dots\sum_{i_{m+1}=1}^n \frac{\partial^{m+1} f(\xi_1,\dots,\xi_n)}{\partial x_{i_1}\cdots\partial x_{i_{m+1}}}(x_{i_1}-a_{i_1})\cdots(x_{i_{m+1}}-a_{i_{m+1}}).
\end{aligned}
$$

A többváltozós Taylor-formulát többnyire $m=1$-re vagy $m=2$-re fogjuk használni, azaz egy függvényt elsőrendű vagy másodrendű Taylor-polinommal fogunk közelíteni. Az előbbi formulából könnyen ellenőrizhető, hogy a gradiensvektor és a Hesse-mátrix jelölést alkalmazva az $f\in C^3$ függvény másodrendű Taylor-közelítése

$$f(\mathbf{x})\approx f(\mathbf{a})+f'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})+\tfrac{1}{2}(\mathbf{x}-\mathbf{a})^T f''(\mathbf{a})(\mathbf{x}-\mathbf{a})$$

alakban írható fel. Ez indokolja az $f'$ és $f''$ jelölést a gradiensvektorra és a Hesse-mátrixra. A másik indok persze az, hogy egyszer illetve kétszer folytonosan parciálisan differenciálható függvényekre $f'$ és $f''$ az ill. $f'$ függvény többváltozós analízisből ismert ún. totális vagy Fréchet-deriváltja. Erre a fogalomra nem lesz szükségünk a továbbiakban, így $f'$-t és $f''$-t mi jelölésnek tekinthetjük a gradiensvektorra ill. a Hesse-mátrixra.

Legyen $I\subset\mathbb{R}$, $g\colon I\to\mathbb{R}^n$. $g$ komponensfüggvényeit jelölje $g_i$, azaz legyen $g(t)=(g_1(t),\dots,g_n(t))^T$. Ekkor $g$-t differenciálhatónak nevezzük, ha minden komponensfüggvénye differenciálható, és a deriváltján a

$$g'\colon I\to\mathbb{R}^n, \qquad g'(t):=(g_1'(t),\dots,g_n'(t))^T$$

függvényt értjük. $g$-t folytonosan differenciálhatónak nevezzük, ha minden komponensfüggvénye folytonosan differenciálható.

Érvényes a következő tétel.

**2.39. tétel (láncszabály).** *Legyen $f\colon\mathbb{R}^n\to\mathbb{R}$, $f\in C^1$ és $g\colon\mathbb{R}\to\mathbb{R}^n$ folytonosan differenciálható. Ekkor az $f\circ g\colon\mathbb{R}\to\mathbb{R}$ összetett függvény is folytonosan differenciálható, és*

$$\frac{d}{dt}f(g(t))=f'(g(t))^T g'(t).$$

A láncszabály következményeként beláthatjuk a Lagrange-tétel következő általánosítását többváltozós valós függvényekre.

**2.40. tétel (Lagrange-féle középértéktétel).** *Legyen $E\subset\mathbb{R}^n$ nyílt, konvex halmaz, $f\colon E\to\mathbb{R}$ folytonosan parciálisan differenciálható. Ekkor minden $\mathbf{x},\mathbf{y}\in E$-hez létezik olyan $\xi\in(0,1)$, hogy*

$$f(\mathbf{x})-f(\mathbf{y})=f'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}).$$

**Bizonyítás.** Definiáljuk a $g(t)=f(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$ egyváltozós valós függvényt $[0,1]$-en. Az egyváltozós valós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint

$$f(\mathbf{x})-f(\mathbf{y})=g(1)-g(0)=g'(\xi)=f'(\mathbf{x}+\xi(\mathbf{y}-\mathbf{x}))^T(\mathbf{x}-\mathbf{y}).\quad\square$$

Legyen $E\subset\mathbb{R}^n$ és $\mathbf{f}\colon E\to\mathbb{R}^n$. Az $\mathbf{f}$ függvény komponensfüggvényeit jelölje $f_i$, azaz

$$\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T.$$

Az $\mathbf{f}$ függvényt *$m$-szer folytonosan parciálisan differenciálhatónak* nevezzük, ha minden komponensfüggvényének minden $m$-edrendű parciális deriváltja létezik és folytonos. $\mathbf{f}\in C^m$ jelöli röviden azt, hogy $\mathbf{f}$ $m$-szer folytonosan parciálisan differenciálható. Az $\mathbf{f}\in C^1$ függvény *Jacobi-mátrixának* vagy *derivált mátrixának* az

$$\mathbf{f}'(\mathbf{x}):=\begin{pmatrix}\frac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_1}{\partial x_n}(\mathbf{x})\\ \vdots & & \vdots\\ \frac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \frac{\partial f_n}{\partial x_n}(\mathbf{x})\end{pmatrix}$$

$n\times n$-es mátrixot hívjuk.

Legyen $\mathbf{a}$ rögzített. Ha az $\mathbf{f}$ függvény komponensfüggvényeit az $\mathbf{a}$-körüli elsőrendű Taylor-polinomjaival közelítjük, akkor kapjuk, hogy

$$\mathbf{f}(\mathbf{x})=\begin{pmatrix}f_1(\mathbf{x})\\ \vdots\\ f_n(\mathbf{x})\end{pmatrix}\approx \begin{pmatrix}f_1(\mathbf{a})+f_1'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\\ \vdots\\ f_n(\mathbf{a})+f_n'(\mathbf{a})^T(\mathbf{x}-\mathbf{a})\end{pmatrix}=\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a}).$$

Az $\mathbf{f}(\mathbf{a})+\mathbf{f}'(\mathbf{a})(\mathbf{x}-\mathbf{a})$ kifejezést az $\mathbf{f}$ függvény $\mathbf{a}$-körüli *lineáris közelítésének* hívjuk.

---
## 2.10. Vektor- és mátrixnormák, vektor- és mátrixsorozatok konvergenciája

Az $\mathbf{x}\in\mathbb{R}^n$ vektor komponenseit $\mathbf{x}=(x_1,x_2,\dots,x_n)^T$-tal jelöljük. Az $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ függvényt *vektornormának* nevezzük, ha

1. $\|\mathbf{x}\|\geq 0$ minden $\mathbf{x}\in\mathbb{R}^n$-re, és $\|\mathbf{x}\|=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$,
2. $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$ minden $c\in\mathbb{R}$ és $\mathbf{x}\in\mathbb{R}^n$-re,
3. (háromszög-egyenlőtlenség:) $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re.

**2.41. tétel.** *Egy tetszőleges $\|\cdot\|$ vektornormára*
1. $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$,
2. *$\|\cdot\|$ folytonos függvény $\mathbb{R}^n$-en.*

**Bizonyítás.** A háromszög-egyenlőtlenség alapján $\|\mathbf{x}\|=\|\mathbf{x}-\mathbf{y}+\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|+\|\mathbf{y}\|$, amiből $\|\mathbf{x}\|-\|\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|$ következik. Ugyanígy $\|\mathbf{y}\|-\|\mathbf{x}\|\leq\|\mathbf{x}-\mathbf{y}\|$ is teljesül, így az 1. állítás igaz. A $\|\cdot\|$ norma függvény folytonossága következik az 1. pontban bizonyított egyenlőtlenségből. $\square$

Legyen $p\geq 1$, és definiáljuk az ún. *$p$-normát*:

$$\|\mathbf{x}\|_p:=\left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Belátható, hogy $\|\cdot\|_p$ teljesíti a vektornorma definícióját minden $p\geq 1$-re. A $p=2$-höz tartozó $\|\cdot\|_2$ normát *euklideszi normának* is szokás nevezni. Egy gyakran használt speciális eset az 1-norma:

$$\|\mathbf{x}\|_1:=\sum_{i=1}^n |x_i|.$$

Egy másik gyakran használt vektornorma az ún. *végtelen norma*

$$\|\mathbf{x}\|_\infty := \max_{i=1,\dots,n} |x_i|.$$

Az olvasóra bízzuk annak igazolását, hogy $\|\cdot\|_1$ és $\|\cdot\|_\infty$ teljesítik a norma tulajdonságait (1. feladat). Az euklideszi norma nyilvánvalóan teljesíti a norma definíciójának 1. és 2. tulajdonságát. A háromszög-egyenlőtlenség igazolásához viszont szükség van a következő, önmagában is igen fontos egyenlőtlenségre.

**2.42. tétel (Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség).** *Minden $x_1,\dots,x_n,y_1,\dots,y_n\in\mathbb{R}$-re teljesül a*

$$\left(\sum_{i=1}^n x_i y_i\right)^2\leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2$$

*egyenlőtlenség, ahol akkor és csak akkor áll fenn egyenlőség, ha létezik olyan $\lambda\in\mathbb{R}$, hogy $y_i=\lambda x_i$ minden $i=1,2,\dots,n$-re.*

**Bizonyítás.** Tekintsük a $p(t):=t^2\sum_{i=1}^n x_i^2-2t\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2$ másodfokú polinomot. Ekkor $p(t)=\sum_{i=1}^n (tx_i-y_i)^2\geq 0$ teljesül minden $t$-re, így $p$-nek nem lehet két valós gyöke, azaz $p$ diszkriminánsa nem lehet pozitív:

$$4\left(\sum_{i=1}^n x_i y_i\right)^2-4\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2\leq 0.$$

Ebből kapjuk a tétel állításában szereplő egyenlőtlenséget. $p$-nek akkor és csak akkor lehet pontosan egy valós gyöke, ha a diszkriminánsa egyenlő nullával, azaz a tétel állításában egyenlőség szerepel. Másrészt $p(t)=0$ akkor és csak akkor teljesül valamely $t=\lambda$-ra, ha minden $i=1,2,\dots,n$-re $y_i=\lambda x_i$. $\square$

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség mindkét oldalából gyököt vonva és vektoriális jelölést alkalmazva kapjuk:

**2.43. következmény.** *Tetszőleges $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re*

$$|\mathbf{x}^T\mathbf{y}|\leq\|\mathbf{x}\|_2\|\mathbf{y}\|_2$$

*teljesül, ahol egyenlőség akkor és csak akkor van, ha $\mathbf{y}=\lambda\mathbf{x}$ valamely $\lambda\in\mathbb{R}$-re.*

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{x}+\mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i+y_i)^2 = \sum_{i=1}^n x_i^2+2\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2+2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2}+\sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2}+\sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2+\|\mathbf{y}\|_2)^2,
\end{aligned}
$$

ami igazolja, hogy az euklideszi norma teljesíti a háromszög-egyenlőtlenséget.

A normák segítségével értelmezhetjük vektorok hosszát, távolságát, valamint vektorsorozatok határértékét. A $\|\mathbf{x}\|$-t az $\mathbf{x}$ vektor *hosszának*, azaz a $\mathbf{0}$-tól való távolságának nevezzük. Az $\mathbf{x}$ és $\mathbf{y}$ vektorok távolságán az $\|\mathbf{x}-\mathbf{y}\|$ számot értjük. Legyen $\mathbf{p}^{(k)}$ $n$-dimenziós vektoroknak egy sorozata, és $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Azt mondjuk, hogy a $\mathbf{p}^{(k)}$ sorozat a $\mathbf{p}$ vektorhoz konvergál, ha

$$\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0.$$

Belátható, hogy a konvergencia fogalma független a definícióban használt vektornorma választásától, azaz ha egy sorozat egy vektornormában konvergens, akkor egy tetszőleges másik vektornormában is az, és ugyanahhoz a vektorhoz konvergál. (Ezt a tulajdonságot hívják az analízisben úgy, hogy $\mathbb{R}^n$-en a vektornormák ekvivalensek.)

**2.44. tétel.** *Legyen $|\cdot|$ és $\|\cdot\|$ két vektornorma, és $\mathbf{p}^{(k)}$ egy vektorsorozat $\mathbb{R}^n$-en. Ekkor $\lim_{k\to\infty}|\mathbf{p}^{(k)}-\mathbf{p}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0$.*

**Bizonyítás.** Elegendő megmutatni, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\to 0$, ahol $\|\cdot\|$ egy tetszőleges norma $\mathbb{R}^n$-en. Ez teljesül, ha belátjuk, hogy léteznek olyan $m$ és $M$ konstansok, hogy

$$m\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\leq \|\mathbf{p}^{(k)}-\mathbf{p}\|\leq M\|\mathbf{p}^{(k)}-\mathbf{p}\|_1. \tag{2.24}$$

Legyen $E:=\{\|\mathbf{x}\in\mathbb{R}^n\colon \|\mathbf{x}\|_1=1\}$. $E$ korlátos és zárt részhalmaza $\mathbb{R}^n$-nek, ezért a 2.37. és 2.41. tételek szerint a $\|\cdot\|$ folytonos függvény felveszi maximumát és minimumát $E$-n. Legyenek ezek $M$ és $m$. Legyen $\mathbf{x}=(\mathbf{p}^{(k)}-\mathbf{p})/\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$. Ekkor $\mathbf{x}\in E$, ezért $m\leq\|\mathbf{x}\|\leq M$, amit beszorozva $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$-val kapjuk (2.24) egyenlőtlenséget. $\square$

**2.45. tétel.** *Legyen a $\mathbf{p}^{(k)}$ és a $\mathbf{p}$ vektor $i$-edik komponense $p_i^{(k)}$ ill. $p_i$. Ekkor a $\mathbf{p}^{(k)}$ vektorsorozat akkor és csak akkor konvergál a $\mathbf{p}$ vektorhoz, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re, ha $k\to\infty$.*

**Bizonyítás.** A 2.44. tétel szerint $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1=\sum_{i=1}^n|p_i^{(k)}-p_i|\to 0$, ami pontosan akkor teljesül, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re. $\square$

Az $n\times n$-es valós mátrixok halmazát $\mathbb{R}^{n\times n}$-nel jelöljük. Legyen $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Az

$$\|\mathbf{A}\|:=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

képlettel definiált $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvényt az $\|\cdot\|$ vektornorma által generált *mátrixnormának* nevezzük. (A jelölésben nem teszünk különbséget a vektornorma és az általa generált mátrixnorma között.) Megmutatható, hogy a mátrixnorma definíciójában szereplő sup (azaz legkisebb felső korlát) max-ra cserélhető, azaz létezik olyan $\mathbf{x}$ vektor, amelyre $\|\mathbf{A}\|=\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$. Könnyen beláthatók a mátrixnorma következő tulajdonságai:

**2.46. tétel.** *Minden $\mathbf{A},\mathbf{B}\in\mathbb{R}^{n\times n}$-re*
1. $\|\mathbf{A}\|\geq 0$, és $\|\mathbf{A}\|=0$ akkor és csak akkor, ha $\mathbf{A}=\mathbf{0}$,
2. $\|c\mathbf{A}\|=|c|\|\mathbf{A}\|$ minden $c\in\mathbb{R}$-re,
3. (háromszög-egyenlőtlenség:) $\|\mathbf{A}+\mathbf{B}\|\leq\|\mathbf{A}\|+\|\mathbf{B}\|$,
4. $\|\mathbf{A}\mathbf{x}\|\leq\|\mathbf{A}\|\|\mathbf{x}\|$ minden $\mathbf{x}\in\mathbb{R}^n$-re,
5. $\|\mathbf{A}\mathbf{B}\|\leq\|\mathbf{A}\|\|\mathbf{B}\|$,
6. $\|\mathbf{A}\|=\sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\|=1\}$.

**Bizonyítás.** Az 1., 2. és 3. állítások bizonyítását az olvasóra hagyjuk. A 4. állítás következik az

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq \sup_{\mathbf{y}\neq 0}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|}=\|\mathbf{A}\|$$

egyenlőtlenségből. A 4. állítást felhasználva

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|,$$

ezért

$$\|\mathbf{A}\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|.$$

Végül a 6. állítás következik az $\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|$ egyenlőségből. $\square$

Megjegyezzük, hogy mátrixnormát általánosabban is lehet definiálni a vektornorma definíciójához hasonlóan: egy olyan $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvény, amely teljesíti a 2.46. tétel első 1.–3. és 5. tulajdonságait. Vannak olyan mátrixnormák, amelyek nem vektornorma által generált mátrixnormák. Nekünk a továbbiakban elegendő csak a vektornormák által generált mátrixnormákat használni, ezért fogalmaztuk így a definíciót.

A következő tétel szerint bármely két mátrixnorma ekvivalens.

**2.47. tétel.** *Jelöljön $|\cdot|$ és $\|\cdot\|$ két vektornormát ill. az általa generált mátrixnormát. Legyen $\mathbf{A}^{(k)}$ egy mátrixsorozat $\mathbb{R}^{n\times n}$-en. Ekkor $\lim_{k\to\infty}|\mathbf{A}^{(k)}-\mathbf{A}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{A}^{(k)}-\mathbf{A}\|=0$.*

**Bizonyítás.** Most is, mint a 2.44. tétel bizonyításában, elegendő megmutatni, hogy léteznek olyan $l,L$ nemnegatív konstansok, hogy

$$l|\mathbf{B}|\leq\|\mathbf{B}\|\leq L|\mathbf{B}|, \quad \mathbf{B}\in\mathbb{R}^{n\times n}.$$

A 2.44. tétel bizonyításából következik, hogy léteznek olyan $m,M>0$, hogy

$$m|\mathbf{x}|\leq\|\mathbf{x}\|\leq M|\mathbf{x}|, \quad x\in\mathbb{R}^n.$$

Ekkor

$$\tfrac{m}{M}|\mathbf{B}|=\sup_{\mathbf{x}\neq 0}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|}\leq\|\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|}=\tfrac{M}{m}|\mathbf{B}|,$$

amiből következik a tétel állítása. $\square$

A gyakorlatban az 1-es és a végtelen vektornormák által generált mátrixnormákat használjuk leggyakrabban. Ezek kiszámolására vonatkozik a következő tétel:

**2.48. tétel.** *Legyen $\mathbf{A}=(a_{ij})\in\mathbb{R}^{n\times n}$. Ekkor az $\|\cdot\|_1$ és $\|\cdot\|_\infty$ vektornormák által generált mátrixnorma*

$$\|\mathbf{A}\|_1=\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|,$$

*illetve*

$$\|\mathbf{A}\|_\infty=\max_{i=1,\dots,n}\sum_{j=1}^n |a_{ij}|.$$

**Bizonyítás.** Csak az első képletet indokoljuk, a második bizonyítását az olvasóra hagyjuk. Az $\|\cdot\|_1$ vektornorma definíciója és a háromszög-egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n\left|\sum_{j=1}^n a_{ij}x_j\right| \\
&\leq \sum_{i=1}^n\sum_{j=1}^n |a_{ij}x_j| \\
&= \sum_{j=1}^n |x_j| \sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|\right)\sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|\right)\|\mathbf{x}\|_1,
\end{aligned}
$$

ezért $\|\mathbf{A}\|_1\leq \max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|$. Tegyük fel, hogy $\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|=\sum_{i=1}^n |a_{ik}|$. Az egyenlőséget abból kapjuk, hogy ha az $\mathbf{e}^{(k)}=(0,\dots,0,1,0,\dots,0)^T$ vektorra alkalmazzuk $\mathbf{A}$-t, ahol $e_i^{(k)}=0$ ha $i\neq k$ és $e_k^{(k)}=1$, akkor $\mathbf{A}\mathbf{e}^{(k)}=(a_{1k},a_{2k},\dots,a_{nk})^T$, így $\|\mathbf{A}\mathbf{e}^{(k)}\|_1=\sum_{i=1}^n |a_{ik}|$. $\square$

A valós számsorozatok tulajdonságainak egyszerű általánosításából kapjuk:

**2.49. tétel.**
1. *Ha a $\mathbf{p}^{(k)}$ vektorsorozat konvergens, akkor a határérték egyértelmű.*
2. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$ és $\mathbf{q}^{(k)}\to\mathbf{q}$, $\alpha,\beta\in\mathbb{R}$, akkor $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}$ konvergens, és $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}\to\alpha\mathbf{p}+\beta\mathbf{q}$.*
3. *Ha $c_k\to c$ valós számsorozat és $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $c_k\mathbf{p}^{(k)}\to c\mathbf{p}$.*
4. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $\mathbf{A}\mathbf{p}^{(k)}\to\mathbf{A}\mathbf{p}$ minden $\mathbf{A}\in\mathbb{R}^{n\times n}$-re.*
5. *(Cauchy-féle konvergenciakritérium) $\mathbf{p}^{(k)}$ akkor és csak akkor konvergens, ha Cauchy-sorozat, azaz bármely $\varepsilon>0$-hoz létezik olyan $k_0>0$ küszöbszám, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|<\varepsilon$ minden $k,m>k_0$-ra.*

Mátrixokra értelemszerűen kiterjeszthető a hosszúság, távolság és konvergencia fogalma, és érvényes a 2.44., a 2.45. és 2.49. tételek megfelelő kiterjesztése.

A vektor- és mátrixnorma alkalmazásával általánosítható a Lagrange-féle középértéktétel többváltozós vektor értékű függvényekre.

**2.50. tétel (Lagrange-féle középértéktétel).** *Jelöljön $\|\cdot\|$ egy tetszőleges vektornormát $\mathbb{R}^n$-en illetve az általa generált mátrixnormát. Legyen $E\subset\mathbb{R}^n$ nyílt konvex halmaz, $\mathbf{f}\colon E\to\mathbb{R}^n$ folytonosan parciálisan differenciálható, $\mathbf{x},\mathbf{y}\in E$. Ekkor*

$$\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|\leq \max_{t\in[0,1]}\|\mathbf{f}'(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))\|\cdot\|\mathbf{x}-\mathbf{y}\|.$$

**Bizonyítás.** Az állítást csak a $\|\cdot\|=\|\cdot\|_2$ speciális esetben bizonyítjuk. Nyilván feltehető, hogy $\mathbf{f}(\mathbf{x})\neq\mathbf{f}(\mathbf{y})$. Legyen

$$\mathbf{h}:=\frac{\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2}.$$

Ekkor $\|\mathbf{h}\|_2=1$. Legyen $\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T$, $\mathbf{h}=(h_1,\dots,h_n)^T$. Definiáljuk a

$$g(t):=\mathbf{h}^T \mathbf{f}(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))=\sum_{i=1}^n h_i f_i(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$$

valós függvényt. Ekkor az egyváltozós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint

$$
\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) &= g(1)-g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})
\end{aligned}
$$

valamely $\xi\in(0,1)$-re. Így $\mathbf{h}$ definíciója, a Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség vektoriális alakja, $\|\mathbf{h}\|_2=1$ és a mátrixnorma 2.46. tétel 5. tulajdonsága alapján

$$
\begin{aligned}
\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y}) \\
&\leq \|\mathbf{h}\|_2\|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))\|_2\|\mathbf{x}-\mathbf{y}\|_2,
\end{aligned}
$$

amiből következik a tétel állítása. $\square$

**Feladatok**

1. Mutassa meg, hogy $\|\cdot\|_1$ és $\|\cdot\|_\infty$ teljesítik a vektornorma tulajdonságait!
2. Számítsa ki az $\|\mathbf{x}\|_1$, $\|\mathbf{x}\|_2$ és $\|\mathbf{x}\|_\infty$, ill. az $\|\mathbf{A}\|_1$ és $\|\mathbf{A}\|_\infty$ normákat, ha
   - (a) $\mathbf{x}=(3,-1,0,5)^T$,  (b) $\mathbf{x}=(-3,-2,-1,4,-1)^T$,
   - (c) $\mathbf{A}=\begin{pmatrix}-1 & 3 & -2\\ 2 & -4 & 0\\ 0 & 3 & 2\end{pmatrix}$,  (d) $\mathbf{A}=\begin{pmatrix}-1 & 2 & 4\\ 2 & -3 & 5\\ 7 & -2 & 3\end{pmatrix}$.
3. Rajzolja fel az
   - (a) $\{\mathbf{x}\in\mathbb{R}^2\colon \|\mathbf{x}\|_1=1\}$,  (b) $\{\mathbf{x}\in\mathbb{R}^2\colon \|\mathbf{x}\|_\infty=1\}$

   síkbeli halmazokat!
4. Lássa be a 2.46. tétel 1.–3. állításait!
5. Igazolja a 2.48. tétel 2. állítását!
6. Bizonyítsa be a 2.49. tételt!

---
## 2.11. Fixpont tétel $n$-dimenzióban

Az egyváltozós függvényekre definiált fixpont és a fixpont iteráció fogalmát és annak tulajdonságait könnyen általánosíthatjuk többváltozós függvényekre.

**2.51. példa.** Tekintsük a

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned} \tag{2.25}$$

egyenletrendszert. Ennek megoldása $x_1=1$ és $x_2=0$. Alakítsuk át a (2.25) rendszert a következő módon. Fejezzük ki az első egyenletből $x_1$-et, a másodikból pedig $x_2$-t:

$$\begin{aligned}x_1 &= \tfrac{1}{4}(e^{x_1 x_2}+3)\\ x_2 &= \tfrac{1}{3}(x_1-x_2^2-1)\end{aligned} \tag{2.26}$$

A (2.26) egyenletrendszert röviden az $\mathbf{x}=\mathbf{g}(\mathbf{x})$ alakban írhatjuk fel vektoriális jelölést alkalmazva, ahol $\mathbf{x}=(x_1,x_2)^T$ és

$$\mathbf{g}(\mathbf{x})=\mathbf{g}(x_1,x_2)=\begin{pmatrix}\tfrac{1}{4}(e^{x_1 x_2}+3)\\ \tfrac{1}{3}(x_1-x_2^2-1)\end{pmatrix}. \tag{2.27}$$

Az egyváltozós fixpont iterációhoz hasonlóan (2.26) megoldására definiáljuk a következő iterációt $k=0,1,2,\dots$-re:

$$\begin{aligned}p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)}p_2^{(k)}}+3)\\ p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)}-(p_2^{(k)})^2-1\right)\end{aligned} \tag{2.28}$$

A $p_1^{(0)}=-2$ és $p_2^{(0)}=-2$ kezdőértékekből kiindulva kiszámoltuk a $p_1^{(k)}$ és $p_2^{(k)}$ sorozatok első néhány tagját a 2.12. táblázatban. Látható, hogy a sorozatok konvergálnak 1-hez ill. 0-hoz.

Definiálva a $\mathbf{p}^{(k)}=(p_1^{(k)},p_2^{(k)})^T$ vektorsorozatot, a (2.28) egyenletrendszert röviden a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ alakban írhatjuk fel. $\square$

**2.12. táblázat.** Fixpont iteráció

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

Legyen $E\subset\mathbb{R}^n$, és tekintsünk egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvényt. Az egyváltozós esethez hasonlóan, a $\mathbf{p}\in E$ vektort a $\mathbf{g}$ függvény *fixpontjának* nevezzük, ha $\mathbf{p}=\mathbf{g}(\mathbf{p})$.

Egy $\mathbf{g}\colon E\to\mathbb{R}^n$ függvény *kontrakció* az $E$ halmazon a $\|\cdot\|$ vektornormában, ha létezik egy $0\leq c<1$ szám, hogy $\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq c\|\mathbf{x}-\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in E$-re.

**2.52. tétel (fixpont tétel).** *Legyen $E\subset\mathbb{R}^n$ zárt, $\mathbf{g}\colon E\to E$, és legyen $\mathbf{g}$ kontrakció az $E$ halmazon valamely $\|\cdot\|$ normában. Ekkor $\mathbf{g}$-nek létezik egyértelmű $\mathbf{p}\in E$ fixpontja, és a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció $\mathbf{p}$-hez konvergál minden $\mathbf{p}^{(0)}\in E$ kezdeti értékre. A konvergencia rendje legalább lineáris.*

**Bizonyítás.** Belátjuk, hogy a $\mathbf{p}^{(k)}$ sorozat Cauchy-sorozat. Legyen $c$ a $\mathbf{g}$ függvény Lipschitz-konstansa, és legyen $k>m$. Az egyváltozós esethez hasonlóan a fixpont sorozat definíciója és a kontrakciós tulajdonságból kapjuk

$$
\begin{aligned}
\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\| &\leq \|\mathbf{p}^{(k)}-\mathbf{p}^{(k-1)}\|+\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\dots+\|\mathbf{p}^{(m+1)}-\mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)})-\mathbf{g}(\mathbf{p}^{(k-2)})\|+\|\mathbf{g}(\mathbf{p}^{(k-2)})-\mathbf{g}(\mathbf{p}^{(k-3)})\|+\dots+\|\mathbf{g}(\mathbf{p}^{(m)})-\mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)}-\mathbf{p}^{(k-2)}\|+\|\mathbf{p}^{(k-2)}-\mathbf{p}^{(k-3)}\|+\dots+\|\mathbf{p}^{(m)}-\mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1}+c^{k-2}+\dots+c^m)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1}+c^{k-m-2}+\dots+1)\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i\|\mathbf{p}^{(1)}-\mathbf{p}^{(0)}\|.
\end{aligned}
$$

Ebből adódik hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|\to 0$, ha $m\to\infty$, tehát $\mathbf{p}^{(k)}$ Cauchy-sorozat. A 2.49. tétel 5. pontja szerint $\mathbf{p}^{(k)}$ konvergál egy $\mathbf{p}$ vektorhoz. A $\mathbf{g}$ függvény folytonossága alapján ekkor $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})\to\mathbf{g}(\mathbf{p})$, ezért $\mathbf{p}=\mathbf{g}(\mathbf{p})$, azaz $\mathbf{p}$ fixpontja $\mathbf{g}$-nek.

A konvergencia rendje legalább lineáris, hiszen

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|=\|\mathbf{g}(\mathbf{p}^{(k)})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|.$$

Tegyük fel, hogy $\mathbf{p}$ és $\bar{\mathbf{p}}$ fixpontjai $\mathbf{g}$-nek. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján $\|\mathbf{p}-\bar{\mathbf{p}}\|=\|\mathbf{g}(\mathbf{p})-\mathbf{g}(\bar{\mathbf{p}})\|\leq c\|\mathbf{p}-\bar{\mathbf{p}}\|$, amiből $\mathbf{p}=\bar{\mathbf{p}}$ következik. $\square$

**2.53. tétel.** *Legyen $E\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^1$, és legyen $\mathbf{p}$ fixpontja $\mathbf{g}$-nek. Ha $\|\mathbf{g}'(\mathbf{p})\|<1$ valamilyen $\|\cdot\|$ vektornorma által generált mátrixnormában, akkor a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció lokálisan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** Mivel $E$ nyílt halmaz, ezért létezik olyan $\bar{\delta}>0$, hogy $\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|<\bar{\delta}\}\subset E$. Válasszunk egy $c$ számot, amelyre $\|\mathbf{g}'(\mathbf{p})\|<c<1$. A $\mathbf{g}'$ függvény folytonos $\mathbf{p}$-ben, így létezik olyan $0<\delta\leq\bar{\delta}$, hogy $\|\mathbf{g}'(\mathbf{x})\|\leq c$ minden $\mathbf{x}\in V:=\{\mathbf{x}\colon \|\mathbf{x}-\mathbf{p}\|\leq\delta\}$-ra. A Lagrange-féle középértéktétel (2.50. tétel) alapján

$$\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{y})\|\leq \max_{t\in(0,1)}\|\mathbf{g}'(\mathbf{x}+t(\mathbf{y}-\mathbf{x}))\|\cdot\|\mathbf{x}-\mathbf{y}\|\leq c\|\mathbf{x}-\mathbf{y}\|,$$

azaz $\mathbf{g}$ kontrakció.

Megmutatjuk, hogy a $\mathbf{g}$ függvény a $V$ halmazt önmagába képezi. Legyen $\mathbf{x}\in V$. A $\mathbf{g}$ függvény kontrakciós tulajdonsága alapján $\|\mathbf{g}(\mathbf{x})-\mathbf{p}\|=\|\mathbf{g}(\mathbf{x})-\mathbf{g}(\mathbf{p})\|\leq c\|\mathbf{x}-\mathbf{p}\|<\delta$, tehát $\mathbf{g}(\mathbf{x})\in V$. Ha a $\mathbf{g}$ függvényt megszorítjuk a $V$ halmazra, akkor erre a függvényre teljesülnek a 2.52. tétel feltételei, ezért a $V$ halmazból indított fixpont iteráció konvergens, és $\mathbf{p}$-hez konvergál. $\square$

**2.54. példa.** Számítsuk ki a 2.51. feladatban szereplő, a (2.27) képlettel definiált $\mathbf{g}$ függvény derivált mátrixát:

$$\mathbf{g}'(\mathbf{x})=\begin{pmatrix}\tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2}\\ \tfrac{1}{3} & -\tfrac{2}{3}x_2\end{pmatrix}.$$

Ennek a $\mathbf{g}$ függvény $(1,0)^T$ fixpontjában felvett értéke

$$\mathbf{g}'(1,0)=\begin{pmatrix}0 & \tfrac{1}{4}\\ \tfrac{1}{3} & 0\end{pmatrix},$$

aminek 1-normája $\|\mathbf{g}'(1,0)\|_1=\tfrac{1}{3}<1$, ezért 2.53. tétel szerint a fixpont sorozat lokálisan konvergens. $\square$

**2.55. tétel.** *Legyen $E\subset\mathbb{R}^n$, $\mathbf{g}\colon E\to\mathbb{R}^n$, $\mathbf{g}\in C^2$, $\mathbf{g}(\mathbf{p})=\mathbf{p}$, és $\mathbf{g}'(\mathbf{p})=\mathbf{0}$. Ekkor létezik olyan $\delta>0$ hogy a $\mathbf{p}^{(k+1)}=\mathbf{g}(\mathbf{p}^{(k)})$ fixpont iteráció konvergál $\mathbf{p}$-hez, ha $\|\mathbf{p}^{(0)}-\mathbf{p}\|<\delta$. Továbbá létezik olyan $c$ konstans, hogy minden $k$-ra $\|\mathbf{p}^{(k+1)}-\mathbf{p}\|\leq c\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2$ teljesül, azaz az iteráció másodrendben lokálisan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** A feltétel szerint $0=\|\mathbf{g}'(\mathbf{p})\|<1$, így a 2.53. tételből következik, hogy a fixpont iteráció lokálisan konvergens.

Most belátjuk, hogy a konvergencia kvadratikus. Vegyük a $\mathbf{g}$ függvény $i$-edik komponensfüggvényének a $\mathbf{p}=(p_1,\dots,p_n)^T$ pont körüli másodrendű Taylor-közelítését:

$$
\begin{aligned}
g_i(x_1,\dots,x_n) &= g_i(p_1,\dots,p_n)+\sum_{j=1}^n \frac{\partial g_i(p_1,\dots,p_n)}{\partial x_j}(x_j-p_j) \\
&\quad +\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n \frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(x_j-p_j)(x_l-p_l).
\end{aligned}
$$

Ezt az $(x_1,\dots,x_n)^T=(p_1^{(k)},\dots,p_n^{(k)})^T$ vektorra alkalmazva, és használva a $p_i=g_i(\mathbf{p})$ és $p_i^{(k+1)}=g_i(\mathbf{p}^{(k)})$ összefüggéseket, kapjuk

$$p_i^{(k+1)}-p_i=\tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n \frac{\partial^2 g_i(\xi_1,\dots,\xi_n)}{\partial x_j\partial x_l}(p_j^{(k)}-p_j)(p_l^{(k)}-p_l).$$

Legyen $M$ olyan, hogy $\left|\frac{\partial^2 g_i(x_1,\dots,x_n)}{\partial x_j\partial x_l}\right|\leq M$ minden $i,j,l=1,\dots,n$-re a $\mathbf{p}$ pont egy környezetében, melyben minden $\mathbf{p}^{(k)}$ benne van. $M$ definícióját használva

$$|p_i^{(k+1)}-p_i|\leq \tfrac{1}{2}\sum_{j=1}^n\sum_{l=1}^n M|p_j^{(k)}-p_j||p_l^{(k)}-p_l|\leq \tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2.$$

Mivel ez a becslés minden $i=1,\dots,n$-re teljesül, ezért

$$\|\mathbf{p}^{(k+1)}-\mathbf{p}\|_\infty\leq \tfrac{n^2}{2} M\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty^2,$$

azaz a konvergencia másodrendű. $\square$

**Feladatok**

1. Alakítsa át a következő egyenleteket fixpont feladattá, majd keresse meg az egyenlet közelítő megoldását fixpont iterációval a $(0,0)^T$ kezdeti értékből kiindulva:
   - (a) $-2x^2+6x-y^2=4$, $x^2+y^3-5y=3$
   - (b) $8x+\cos x-y^3=-7$, $x^2+4y=8$
   - (c) $x^2+7x+y^2-4y=3$, $2x+y^3+4y=-5$
   - (d) $\cos x-5y=3$, $x^2-6x+y^2-2y=4$
2. Számítsa ki az előző feladatban használt fixpont függvény deriváltját és annak normáját a numerikusan kapott fixpontban!
3. Mutassa meg, hogy 2.55. tétel feltételei mellett a $\mathbf{p}^{(k)}$ fixpont iteráció tetszőleges vektornormában lokálisan kvadratikusan konvergál!

---
## 2.12. Newton-módszer $n$-dimenzióban

Legyen $U\subset\mathbb{R}^n$ nyílt halmaz, $\mathbf{f}\colon U\to\mathbb{R}^n$, és tekintsük az

$$\mathbf{f}(\mathbf{x})=\mathbf{0}$$

egyenletrendszert. Rögzítsünk egy $\mathbf{p}^{(k)}\in U$ vektort. Az egyváltozós esethez hasonlóan közelítsük az $\mathbf{f}$ függvényt a lineáris részével, az $\mathbf{f}(\mathbf{p}^{(k)})+\mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x}-\mathbf{p}^{(k)})$ függvénnyel. Ennek gyöke az $\bar{\mathbf{x}}=\mathbf{p}^{(k)}-(\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)})$ vektor. Ezt a képletet használjuk a Newton-módszer definíciójára:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.29}$$

**2.56. tétel.** *Legyen $\mathbf{f}\in C^2$, $\mathbf{f}(\mathbf{p})=\mathbf{0}$ és $\mathbf{f}'(\mathbf{p})$ invertálható. Ekkor a (2.29) Newton-iteráció lokálisan kvadratikusan konvergál $\mathbf{p}$-hez.*

**Bizonyítás.** A Newton-módszer egy fixpont iteráció a

$$\mathbf{g}(\mathbf{x})=\mathbf{x}-(\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x})$$

iterációs függvénnyel. Legyen $(\mathbf{f}'(\mathbf{x}))^{-1}=(b_{ij}(\mathbf{x}))_{n\times n}$. Ekkor

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}=\delta_{il}:=\begin{cases}1, & i=l,\\ 0, & i\neq l.\end{cases} \tag{2.30}$$

Tekintsük $\mathbf{g}$ $i$-edik komponensét:

$$g_i(\mathbf{x})=x_i-\sum_{j=1}^n b_{ij}(\mathbf{x})f_j(\mathbf{x}).$$

Ezt deriválva $x_l$ szerint

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n\left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x})+b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

Az $\mathbf{x}=\mathbf{p}$ pontban az $f_j(\mathbf{p})=0$ és a (2.30) relációkat használva tehát

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l}=\delta_{il}-\sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l}=0.$$

Azt kaptuk, hogy $\mathbf{g}'(\mathbf{p})=\mathbf{0}$, és így a 2.55. tétel szerint a fixpont sorozat lokálisan kvadratikusan konvergens. $\square$

A (2.29) képlet alkalmazásakor mátrixot kell invertálni. Ehelyett a gyakorlatban a következőképpen járunk el: Vezessük be az $\mathbf{s}^{(k)}=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}$ jelölést, és rendezzük át a (2.29) egyenletet az

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)})$$

alakba. Ezt megoldjuk $\mathbf{s}^{(k)}$-ra, majd legyen $\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}+\mathbf{s}^{(k)}$.

**2.57. példa.** Tekintsük a 2.51. példában vizsgált (2.25) egyenletrendszert! A Newton-módszert alkalmaztuk az egyenletre a $(-1.5,-1.5)^T$ kezdeti értéktől indulva. A kapott eredményt a 2.13. táblázatban foglaltuk össze. $\square$

**2.13. táblázat.** Newton-módszer

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)}-\mathbf{p}\|_\infty$ |
|---:|---|---|
| 0 | $(-1.5000000000, -1.5000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.2500000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(0.99999868610, -0.00000037764)^T$ | 1.313900e-06 |

**Feladatok**

1. Alkalmazza a Newton-módszert a 2.11. szakasz 1. feladatában szereplő egyenletek megoldására!

---

## 2.13. Kvázi-Newton módszerek, Broyden-módszer

A Newton-módszert gyors (lokális) konvergenciája miatt szeretjük alkalmazni. Hátránya viszont, hogy az $\mathbf{f}$ derivált mátrixát kell kiszámolni hozzá, aminek általában nagy a műveletigénye. Ezenkívül mátrixot kell invertálni vagy lineáris egyenletrendszert kell megoldani minden egyes iterációban, ami szintén műveletigényes. Ezen nehézségek kiküszöbölésére szolgálnak a *kvázi-Newton módszerek*, amelynek általános definíciója:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.31}$$

A kvázi-Newton módszereknél tehát az $\mathbf{f}'(\mathbf{p}^{(k)})$ mátrixot közelítjük egy $\mathbf{A}^{(k)}$ mátrixszal. Attól függően, hogy milyen közelítést használunk, más és más módszereket tudunk definiálni. Az egyik gyakran használt módszer a deriváltat numerikusan közelíteni: legyen $\mathbf{e}^{(j)}=(0,\dots,0,1,0,\dots,0)^T$ a $j$-edik egységvektor, $h>0$ egy megadott kis lépésköz, és definiáljuk az $\mathbf{A}^{(k)}$ mátrix komponenseit az

$$a_{ij}^{(k)}=\frac{f_i(\mathbf{p}^{(k)}+h\mathbf{e}^{(j)})-f_i(\mathbf{p}^{(k)})}{h}, \quad i,j=1,\dots,n \tag{2.32}$$

képlettel.

A továbbiakban az $\mathbf{A}^{(k)}$ mátrix megválasztásának egy másik, a gyakorlatban igen népszerű módszerét, a *Broyden-módszert* vizsgáljuk. Ez a módszer is, mint az előző, a szelőmódszer általánosításának tekinthető.

Skaláris egyenletekre a szelőmódszer az $f(x)=0$ egyenletet az

$$f(p_k)+a_k(x-p_k)=0$$

lineáris egyenlettel helyettesíti, ahol $a_k=(f(p_k)-f(p_{k-1}))/(p_k-p_{k-1})$. Ezt $k$ helyett $k+1$-re felírva és átrendezve, kapjuk, hogy $a_{k+1}$ megoldása az

$$a_{k+1}(p_{k+1}-p_k)=f(p_{k+1})-f(p_k) \tag{2.33}$$

egyenletnek. Ez utóbbi alakot lehet könnyen általánosítani többváltozós függvényekre.

Válasszunk egy $\mathbf{p}^{(0)}$ kezdeti vektort és egy $\mathbf{A}^{(0)}$ kezdeti mátrixot. $\mathbf{A}^{(0)}$ választására többféle módszer használatos: használhatjuk az $\mathbf{A}^{(0)}=\mathbf{f}'(\mathbf{p}^{(0)})$ pontos értéket, vagy a (2.32) képlettel közelíthetjük a derivált mátrixot a $\mathbf{p}^{(0)}$ pontban, vagy veszünk egy tetszőleges invertálható $\mathbf{A}^{(0)}$ mátrixot.

Tegyük fel, hogy $\mathbf{p}^{(k)}$ és $\mathbf{A}^{(k)}$ már definiált. Ekkor a (2.31) képlettel értelmezzük $\mathbf{p}^{(k+1)}$-et. A (2.33) egyenlet analógiájára megköveteljük, hogy $\mathbf{A}^{(k+1)}$ teljesítse az

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)})=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.34}$$

az ún. *szelő egyenletet*. Vezessük be a következő jelöléseket:

$$\mathbf{y}^{(k)}:=\mathbf{f}(\mathbf{p}^{(k+1)})-\mathbf{f}(\mathbf{p}^{(k)}) \quad \text{és} \quad \mathbf{s}^{(k)}:=\mathbf{p}^{(k+1)}-\mathbf{p}^{(k)}.$$

Ezzel a jelöléssel a (2.31) iterációs formula az

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)}=-\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.35}$$

a (2.34) egyenlet pedig az

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)}=\mathbf{y}^{(k)} \tag{2.36}$$

alakban írható fel. A (2.35) egyenlet megoldható $\mathbf{s}^{(k)}$-ra (feltéve hogy $\mathbf{A}^{(k)}$ invertálható), így a probléma redukálódott arra, hogy olyan $\mathbf{A}^{(k+1)}$ mátrixot keresünk, amely a (2.36) egyenletet teljesíti. Ez az egyenlet viszont nem határozza meg az $\mathbf{A}^{(k+1)}$ mátrixot egyértelmű módon, hiszen a vektor alakban írt egyenlet $n$ db skaláris egyenlettel ekvivalens, $\mathbf{A}^{(k+1)}$-et viszont $n^2$ db komponense határozza meg. (2.36) csak annyit jelent, hogy az $\mathbf{A}^{(k+1)}$ mátrixszal meghatározott lineáris leképezés az $\mathbf{s}^{(k)}$ irányában meghatározott, de az erre merőleges $(n-1)$-dimenziós altéren nem meghatározott. Mivel a $k+1$-edik lépésben erről nincs új információnk, ezért úgy definiáljuk $\mathbf{A}^{(k+1)}$-et, hogy a mátrixhoz tartozó lineáris leképezésnek ugyanaz legyen a hatása ezen az altéren, mint az $\mathbf{A}^{(k)}$ leképezésnek. Azaz a (2.36) egyenleten kívül azt is megköveteljük, hogy

$$\mathbf{A}^{(k+1)}\mathbf{z}=\mathbf{A}^{(k)}\mathbf{z}, \quad \text{minden } \mathbf{z}\perp\mathbf{s}^{(k)}\text{-ra}. \tag{2.37}$$

(2.36) és (2.37) együtt egyértelműen meghatározza az $\mathbf{A}^{(k+1)}$ mátrixot. Könnyen belátható (2. feladat), hogy az

$$\mathbf{A}^{(k+1)}=\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{2.38}$$

mátrix teljesíti (2.36) és (2.37) egyenleteket.

A (2.31) rekurzív képletben igazából $(\mathbf{A}^{(k)})^{-1}$-re van szükségünk. Ennek kiszámítását teszi egyszerűbbé a következő tétel.

**2.58. tétel (Sherman–Morrison–Woodbury).** *Legyen $\mathbf{u},\mathbf{v}\in\mathbb{R}^n$, $\mathbf{u},\mathbf{v}\neq\mathbf{0}$ és $\mathbf{A}\in\mathbb{R}^{n\times n}$ invertálható. Ekkor az $\mathbf{A}+\mathbf{u}\mathbf{v}^T$ mátrix akkor és csak akkor invertálható, ha $1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\neq 0$, és ekkor*

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)^{-1}=\mathbf{A}^{-1}-\frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}}{1+\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}}$$

*teljesül.*

**Bizonyítás.** Legyen $\gamma\in\mathbb{R}$, és tekintsük a következő szorzatot:

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}-\gamma\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}.$$

Mivel $\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u}$ skaláris szám, ezért az előző egyenlet átalakítható az

$$(\mathbf{A}+\mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1}-\gamma\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1})=\mathbf{I}+(1-\gamma-\gamma\mathbf{v}^T\mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T\mathbf{A}^{-1}$$

alakba, amiből következik az állítás. $\square$

A 2.58. tételt használva a (2.38) összefüggésre, rövid számolással kapjuk:

$$
\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)}+\frac{(\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1+(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)}-\mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1}-\frac{\left((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}-\mathbf{s}^{(k)}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}. \tag{2.39}
\end{aligned}
$$

Ismerve $(\mathbf{A}^{(k)})^{-1}$-t, csak mátrixszorzásokat alkalmazva kiszámítható $(\mathbf{A}^{(k+1)})^{-1}$, így ehhez csak $n^2$ nagyságrendű művelet kell, szemben azzal, hogy a mátrix invertálásához, mint azt majd a következő fejezetben megmutatjuk, $n^3$ nagyságrendű műveletre van szükség.

Megmutatható, hogy a Broyden-módszer lokálisan konvergál az $\mathbf{f}$ függvény egy $\mathbf{p}$ gyökéhez, és ha $\mathbf{A}^{(0)}$ elegendően közel van $\mathbf{f}'(\mathbf{p})$-hez, akkor a konvergencia rendje szuperlineáris, azaz

$$\lim_{k\to\infty}\frac{\|\mathbf{p}^{(k+1)}-\mathbf{p}\|}{\|\mathbf{p}^{(k)}-\mathbf{p}\|}=0.$$

Ezek bizonyításával itt nem foglalkozunk. A Broyden-módszer egy lehetséges változatát a következő algoritmusban közöljük.

**2.59. algoritmus. Broyden-módszer**

```
INPUT:
    f      - függvény,
    p(0)   - kezdeti érték,
    h      - lépésköz A(0) számításához,
    ||·||  - vektornorma,
    TOL    - tolerancia,
    MAXIT  - maximális iterációszám,
OUTPUT: p - közelítő gyök.

(A = (a_ij) = A(0) kiszámítása)
for i = 1, ..., n do
    for j = 1, ..., n do
        a_ij ← (f_i(p(0) + h e(j)) - f_i(p(0)))/h
    end do
end do
A ← A^(-1)
q ← p(0)
k ← 1                  (lépésszám)
while k < MAXIT do
    s ← -A f(q)
    p ← q + s
    if ||s|| < TOL do
        output(p)
        stop
    end do
    y ← f(p) - f(q)
    A ← A - (Ay - s) s^T A / (s^T A y)
    q ← p
    k ← k + 1
end do
output(Maximális iterációszám túllépve)
```

**2.60. példa.** Tekintsük újra a 2.51. és 2.57. példákban vizsgált (2.25) egyenletrendszert! A 2.59. algoritmus eredménye erre az egyenletre a 2.14. táblázatban látható. Az utolsó oszlop mutatja, hogy a módszer szuperlineárisan konvergált. $\square$

**2.14. táblázat.** Broyden-módszer

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

**Feladatok**

1. Alkalmazza a Broyden-módszert a 2.11. szakasz 1. feladatában szereplő egyenletek megoldására!
2. Mutassa meg, hogy a (2.38) képlettel definiált $\mathbf{A}^{(k+1)}$ mátrix teljesíti a (2.36) és (2.37) egyenleteket!

---

*Forrás: Hartung Ferenc, Bevezetés a numerikus analízisbe, 2. fejezet (Pannon Egyetem). A teljes szöveg és matematika a könyv PDF-éből származik, és a fenti formátumban van megőrizve KaTeX-kompatibilis jelöléssel.*
