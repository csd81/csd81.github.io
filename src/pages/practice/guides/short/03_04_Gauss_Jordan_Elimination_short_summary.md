**3.3. Gauss–Jordan-elimináció** 




## 1. A Gauss–Jordan-elimináció alapötlete és célja

A Gauss–Jordan-elimináció a lineáris egyenletrendszerek ($\mathbf{Ax} = \mathbf{b}$) közvetlen megoldására szolgáló klasszikus Gauss-elimináció egy fontos módosítása.

* **A különbség a sima Gauss-eliminációhoz képest:** A standard Gauss-módszernél a cél az együtthatómátrix *felülről trianguláris (háromszög)* alakra hozása, ami után a megoldást egy külön lépésben, lentről felfelé haladó visszahelyettesítéssel számítjuk ki.
* **A Gauss–Jordan-elv:** Az eliminációs lépéseket a főátló alatti elemek mellett **a főátló feletti elemekre is végrehajtjuk**. A cél az, hogy az $(\mathbf{A}, \mathbf{b})$ kibővített mátrix együttható részét közvetlenül egy **egységmátrixszá ($\mathbf{I}$)** alakítsuk át:

$$(\mathbf{A}, \mathbf{b}) \sim \dots \sim (\mathbf{I}, \mathbf{b}^{(n-1)})$$



> **Gyakorlati előny:** Amikor a folyamat végén elértük az egységmátrixot, az egyenletrendszer megoldása **közvetlenül leolvasható a kibővített mátrix utolsó, szabadtagokat tartalmazó oszlopából** ($\mathbf{x} = \mathbf{b}^{(n-1)}$). Nincs szükség a visszahelyettesítés (backward substitution) algoritmusának utólagos futtatására.



## 2. Az algoritmus koordinátás szerkezete

Az algoritmus oszlopról oszlopra halad ($k = 1, \dots, n$). Amikor a $k$-adik oszlopnál járunk, a főátlóban lévő $a_{kk}$ elem segítségével **az összes többi sorban ($i \neq k$)** kinullázzuk az együtthatókat:

1. Kiszámítjuk az adott sorra vonatkozó kiesési szorzót:

$$l_{ik} = \frac{a_{ik}}{a_{kk}}, \qquad i \neq k$$


2. Végrehajtjuk a sorok közötti kivonást a megváltozó oszlopindexekre ($j = k+1, \dots, n+1$):

$$a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$$


3. A legvégén a főátlóbeli elemeket (melyek ekkor egy diagonális mátrixot alkotnak) a saját reciprokukkal való szorzással $1$-re skálázzuk, megkapva az egységmátrixot és a végeredményt.



## 3. Főelemkiválasztási stratégiák a Gauss–Jordan-módszerben

A kerekítési hibák csökkentése és a numerikus stabilitás megőrzése érdekében a Gauss-eliminációnál bevezetett **részleges és teljes főelemkiválasztási stratégiák** változtatás nélkül alkalmazhatók (és alkalmazandók) a Gauss–Jordan-elimináció esetében is.

A hanganyag és a jegyzet lépésről lépésre bemutatja a **részleges főelemkiválasztás** működését egy konkrét 4-dimenziós példán keresztül:

* Az elimináció megkezdése előtt megkeressük az aktuális oszlopban (a főátlón és az alatta lévő részen) a legnagyobb abszolút értékű elemet, majd a **két sort teljes egészében felcseréljük**.
* A csere után végrehajtjuk az eliminációt a főátló *alatti és feletti* elemekre is.
* Ez a lépés biztosítja, hogy a számítógépes osztások során ne lépjen fel kerekítési hiba miatti információvesztés.



## 4. Műveletigény és Időkomplexitás (Összehasonlítás)

Bár a Gauss–Jordan-módszer rendkívül kényelmes, mert a végén elmarad a visszahelyettesítés, a megnövekedett eliminációs lépések miatt a **számítási költsége magasabb**, mint a hagyományos Gauss-eliminációé.

Ha kiszámítjuk a szükséges lebegőpontos osztások és szorzások számát egy $n$-dimenziós általános rendszerre, az aszimptotikus vezető tag a következőképpen alakul:

* **Gauss-elimináció + visszahelyettesítés:** $\approx \mathbf{\frac{1}{3}n^3} + \mathcal{O}(n^2)$
* **Gauss–Jordan-elimináció:** $\approx \mathbf{\frac{1}{2}n^3} + \mathcal{O}(n^2)$

### Következmény:

Nagy méretű lineáris egyenletrendszerek esetén a Gauss–Jordan-módszer durván **50%-kal több aritmetikai művelet elvégzését igényli**, mint a standard Gauss-elimináció. Emiatt egyetlen egyenletrendszer megoldására a gyakorlatban ritkábban alkalmazzák.



## 5. Mikor előnyös mégis a Gauss–Jordan-módszer? (Mátrixinvertálás)

A megnövekedett műveletigény ellenére van egy olyan alkalmazási terület, ahol a Gauss–Jordan-módszer a leghatékonyabb közvetlen választás: egy mátrix **inverzének ($\mathbf{A}^{-1}$)** a kiszámítása.

Ha az eredeti $\mathbf{A}$ mátrix mellé jobb oldali szabadtagként nem egyetlen vektort, hanem a teljes $\mathbf{I}$ egységmátrixot láncoljuk hozzá, az algoritmus egyszerre képes kiszámítani az összes bázisvektorhoz tartozó megoldást. Amikor a bal oldali blokk az elimináció végén az egységmátrixszá alakul, a jobb oldali blokk helyén **pontosan és közvetlenül az $\mathbf{A}^{-1}$ inverz mátrix fog megjelenni**. ebben a speciális (több jobb oldallal rendelkező) esetben a két módszer összesített műveletigénye már kiegyenlítődik.