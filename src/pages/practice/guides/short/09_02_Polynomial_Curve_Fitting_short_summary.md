**9.2. Polinom illesztése** 


## 1. A feladat megfogalmazása és kontextusa

Az előző (9.1.) szakaszban látott egyenesillesztést általánosítjuk arra az esetre, amikor az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) mérési adatpontokra egy magasabb, $m$-edfokú polinomot szeretnénk illeszteni a legkisebb négyzetek módszerével.

A keresett függvény alakja:


$$g(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_1 x + a_0$$

A feladatot a pontok száma ($n$) és a polinom fokszáma ($m$) közötti kapcsolat alapján két részre oszthatjuk:

* **Ha $n \le m$:** A megadott pontokon keresztül pontosan fektethető egy $m$-edfokú polinom, így a minimális négyzetes hiba $0$ lesz. Ez a klasszikus **interpoláció** feladata, ahol az együtthatók egyértelműen meghatározhatók.
* **Ha $m < n$:** Ez a **regresszió (görbeillesztés)** valódi területe. A mérési hibák és a pontok nagy száma miatt a polinom nem fog átmenni az összes ponton, így a négyzetes hiba nem lesz nulla, azt minimalizálni kell.



## 2. A hiba-függvény és a parciális deriváltak

A meghatározandó ismeretlenek a polinom $a_m, a_{m-1}, \ldots, a_0$ együtthatói, amelyek összesen egy $m+1$ változós négyzetes hiba-függvényt alkotnak:


$$F(a_m, a_{m-1}, \ldots, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2 \tag{9.2}$$

A többváltozós analízis szélsőérték-szabályai alapján az $F$ függvénynek ott lehet minimuma, ahol az összes parciális deriváltja egyszerre nullává válik. Ha a láncszabály szerint parciálisan deriválunk egy tetszőleges $a_k$ ($k=0,1,\ldots,m$) együttható szerint, a következőt kapjuk:


$$\frac{\partial F}{\partial a_k} = 2\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^k = 0$$



## 3. Az általános normálegyenlet-rendszer

A szummák szétbontása, a konstansok kiemelése és az egyenletek nullára rendezése után megkapjuk az $m+1$ darab lineáris egyenletből álló **általános normálegyenlet-rendszert**:

$$\begin{aligned}
a_m \sum_{i=0}^n x_i^{2m} + a_{m-1} \sum_{i=0}^n x_i^{2m-1} + \cdots + a_0 \sum_{i=0}^n x_i^m &= \sum_{i=0}^n x_i^m y_i \\
a_m \sum_{i=0}^n x_i^{2m-1} + a_{m-1} \sum_{i=0}^n x_i^{2m-2} + \cdots + a_0 \sum_{i=0}^n x_i^{m-1} &= \sum_{i=0}^n x_i^{m-1} y_i \\
&\vdots \\
a_m \sum_{i=0}^n x_i^m + a_{m-1} \sum_{i=0}^n x_i^{m-1} + \cdots + a_0 (n+1) &= \sum_{i=0}^n y_i
\end{aligned} \tag{9.4}$$

Mátrixos alakban felírva az egyenletrendszert jól látszik, hogy az együtthatómátrix egy speciális **szimmetrikus szerkezetű mátrix**, ahol a főátlóval párhuzamos átlókban az elemek megegyeznek (az alappontok hatványösszegei szerepelnek benne).



## 4. Unicitás és Egzisztencia Tétel (9.3. Tétel)

A lineáris egyenletrendszer megoldhatóságára vonatkozik a fejezet legfontosabb elméleti tétele:

> **9.3. Tétel:** Tegyük fel, hogy az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok halmazában **van legalább $m+1$ darab különböző alappont** ($x_i$ érték). Ekkor a (9.2) négyzetes hiba minimalizálási feladatnak **létezik pontosan egy (egyértelmű) megoldása**, amely megkapható a (9.4) normálegyenletek megoldásával.

**Gyakorlati jelentősége:** Ha egy másodfokú parabolát ($m=2$) akarunk illeszteni, akkor a tétel értelmében elengedhetetlen, hogy a mérési adatok között legalább 3 darab különböző $x$ helyszín szerepeljen.



## 5. Speciális eset: Parabola illesztése ($m=2$)

A leggyakoribb nemlineáris polinomos illesztés a másodfokú eset, amikor a $g(x) = ax^2 + bx + c$ függvény paramétereit keressük. Ekkor a (9.4) rendszer egy $3 \times 3$-as lineáris egyenletrendszerré egyszerűsödik:

$$\begin{aligned} 
a\sum_{i=0}^{n} x_i^4 + b\sum_{i=0}^{n} x_i^3 + c\sum_{i=0}^{n} x_i^2 &= \sum_{i=0}^{n} x_i^2 y_i \\ 
a\sum_{i=0}^{n} x_i^3 + b\sum_{i=0}^{n} x_i^2 + c\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\ 
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i + c(n + 1) &= \sum_{i=0}^{n} y_i 
\end{aligned}$$

### Gyakorlati mintapélda

A jegyzet bemutatja az illesztés menetét $n=6$ (7 pont) esetén. Kézi számolásnál az adatokat táblázatba rendezzük, és kigyűjtjük az oszlopok összegeit ($x_i^4, x_i^3, x_i^2, x_i, x_i^2y_i, x_iy_i, y_i$). A kapott numerikus összegeket behelyettesítve az alábbi rendszert kapjuk:


$$\begin{aligned} 249.1250a + 77.750b + 27.50c &= -7.225 \\ 77.750a + 27.50b + 8.0c &= -3.55 \\ 27.50a + 8.0b + 7c &= 6.2 \end{aligned}$$

A $3 \times 3$-as lineáris rendszer megoldása (például Gauss-eliminációval vagy az 5.2. fejezetben tanult Cholesky-faktorizációval, mivel a mátrix szimmetrikus és pozitív definit) közvetlenül megadja a parabola együtthatóit:


$$a = -0.196021, \qquad b = -0.084748, \qquad c = 1.752653$$



## 6. Összefoglaló elméleti tanulság

A polinomos görbeillesztés – a látszólagos nemlineáris (görbe) alakja ellenére – **matematikailag egy tiszta lineáris feladat**. Az ismeretlen paraméterek meghatározásához nincs szükség közelítő iterációkra: a mérési adatok pontjaiból képzett hatványösszegek közvetlenül megadják azt a jól strukturált lineáris egyenletrendszert, amelynek megoldása egzakt módon a globálisan optimális görbét eredményezi.