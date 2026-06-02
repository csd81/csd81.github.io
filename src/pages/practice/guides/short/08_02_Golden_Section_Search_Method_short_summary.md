**8.2. Aranymetszés szerinti keresés módszere** 



## 1. Motiváció és az unimodális függvények fogalma

A fejezet egyváltozós nemlineáris optimalizációs (szélsőérték-kereső) eljárásokkal foglalkozik, ahol a cél egy függvény minimumhelyének meghatározása egy zárt intervallumon.

> **Definíció:** Legyen $f\colon [a, b] \to \mathbb{R}$ egy folytonos függvény. Azt mondjuk, hogy $f$ **unimodális** az $[a,b]$ intervallumon, ha pontosan egyértelmű (egyetlen) lokális minimumhelye ($p$) van ezen a tartományon.

Minden konvex függvény unimodális, de a konvexitás nem feltétele az unimodalitásnak. Az eljárás működéséhez elengedhetetlen, hogy a vizsgált függvény unimodális legyen a kiindulási intervallumon.



## 2. Az intervallumszűkítés alapelve

A módszer az egyenletmegoldásnál használt intervallumfelezési (bisection) eljáráshoz hasonlóan egymásba ágyazott, egyre szűkülő intervallumok sorozatával határolja be a $p$ minimumhelyet. Míg azonban egy egyenlet gyökének közrefogásához lépésenként elég 1 belső pont (a felezőpont), addig a minimumhely eldöntéséhez **egyszerre legalább 2 belső pontra** van szükség.

Legyen $a < y < x < b$ az aktuális intervallum két belső pontja. Kiértékeljük az $f(x)$ és $f(y)$ függvényértékeket:

* **Ha $f(x) > f(y)$:** A függvény értéke $x$-ben nagyobb, így a minimumhely biztosan nem lehet $x$ és $b$ között. A következő lépés új, szűkebb intervalluma tehát **$[a, x]$** lesz.
* **Ha $f(x) \leq f(y)$:** A függvény $y$-ban nagyobb vagy egyenlő, így a minimum biztosan nem eshet $a$ és $y$ közé. Az új intervallum **$[y, b]$** lesz.



## 3. Az aranymetszés arányának levezetése

Az eljárás hatékonyságának maximalizálására két fontos matematikai feltételt (ötletet) vezetünk be:

1. **Szimmetria-feltétel:** A két belső pontot úgy helyezzük el, hogy a két szélétől mért távolságuk azonos legyen egy $0.5 < r < 1$ arányszám mellett:

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a)$$


2. **Művelet-minimalizálási feltétel:** Úgy választjuk meg az $r$ arányszámot, hogy a következő lépésben a megmaradó belső pont **pontosan egybeessen** az új intervallumhoz tartozó egyik generálandó belső ponttal. Így lépésenként **mindössze 1 új függvénykiértékelést** kell elvégezni $2$ helyett.

Ha feltételezzük, hogy az új intervallum $[a', b'] = [y, b]$ lett, akkor az új rácspontok képletét felírva és az egybeesést megkövetelve ($y' = x$) az alábbi algebrai egyenletre jutunk:


$$1 - r = \frac{2r - 1}{r} \implies r^2 + r - 1 = 0$$

Ennek a másodfokú egyenletnek a releváns (pozitív) megoldása megadja az **aranymetszés konstansát**:


$$r = \frac{\sqrt{5} - 1}{2} \approx 0.6180339887$$

A pontok elhelyezkedése a gyakorlatban a fix $r$ és $\tau = 1 - r \approx 0.381966$ konstansokkal:

* $y = a + \tau(b - a)$
* $x = a + r(b - a)$



## 4. Konvergencia és lépésszám-becslés

Mivel minden egyes iterációs lépésben az intervallum hossza pontosan az $r \approx 0.618$-szorosára szűkül, $n$ lépés után az intervallum hossza a következő lesz:


$$b_n - a_n = r^n(b_0 - a_0)$$

Ha előre rögzítünk egy $\varepsilon > 0$ toleranciát (hibahatárt), a szükséges **minimális lépésszám ($n$)** logaritmálással egzaktul kiszámítható:


$$r^n(b_0 - a_0) < \varepsilon \implies n > \frac{\ln\left(\frac{\varepsilon}{b_0 - a_0}\right)}{\ln r}$$



## 5. Numerikus mintapélda

A jegyzet az $f(x) = x^2 - 0.8x + 1$ konvex (így unimodális) függvényen mutatja be az algoritmus futását a $[-1, 2]$ kezdőintervallumon, $\varepsilon = 0.005$ mellett.

* A képlet alapján az elvárt pontossághoz legalább $n \geq 14$ lépés szükséges.
* A 14. lépés végén az algoritmus a kapott utolsó szűk intervallum felezőpontját adja vissza közelítő eredményként:

$$x_{\mathrm{min}} \approx 0.3995535068$$


* Ez rendkívül közel van a függvény elméleti, pontos minimumhelyéhez ($p = 0.4$).



## 6. Összegzés

A fejezet legfontosabb tanulsága, hogy az **aranymetszés szerinti keresés** az egyik legoptimálisabb intervallumszűkítő eljárás. Nem igényli a függvény deriváltjainak ismeretét (szemben például a Newton-módszerrel), tisztán folytonos függvényértékek összehasonlítására épít, és az aranymetszés arányának köszönhetően lépésenként mindössze egyetlen függvénykiértékeléssel garantálja a biztos és stabil konvergenciát.