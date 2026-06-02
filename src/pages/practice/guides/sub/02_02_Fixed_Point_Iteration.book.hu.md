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
