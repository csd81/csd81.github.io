**3.2.1. Részleges főelemkiválasztás** 




## 1. Motiváció és a részleges főelemkiválasztás alapelve

A lineáris egyenletrendszerek megoldására szolgáló standard Gauss-elimináció során elkerülhetetlen, hogy oszlopról oszlopra haladva a főátlóban lévő elemekkel (az úgynevezett *pivotelemekkel* vagy *főelemekkel*) osszunk a sorok transzformációjakor.

Ha a főátlóbeli elem pontosan nulla, az algoritmus azonnal összeomlik (nullával való osztás). Ha pedig nem nulla, de abszolút értékben nagyon kicsi, a vele való osztás drasztikusan felerősíti a számítógépes kerekítési hibákat, ami teljesen használhatatlanná, pontatlanná teszi a végeredményt.

A **részleges főelemkiválasztás** (vagy *maximális oszlop-pivoting*) egy egyszerű, de rendkívül hatékony stratégia ezen numerikus instabilitások kiküszöbölésére.



## 2. Az eljárás algoritmusa

Az algoritmus lényege, hogy a $k$-adik eliminációs lépés végrehajtása előtt biztosítjuk, hogy a lehető legnagyobb abszolút értékű szám kerüljön a főátlóbeli osztó pozícióba.

### A lépések menete:

1. **Keresés:** A $k$-adik oszlopban megvizsgáljuk a főátlóban és az **az alatt elhelyezkedő** összes elemet a mátrix aljáig ($i = k, \ldots, n$), majd kiválasztjuk közülük a maximális abszolút értékűt:

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\} \tag{3.23}$$



*(Ahol $l$ jelöli a megtalált maximális elem sorindexét).*
2. **Sorcsere:** Ha a maximum nem a főátlóban van ($l \neq k$), akkor a $k$-adik és az $l$-edik **sort teljes egészében felcseréljük** egymással.
3. **Elimináció:** A csere után végrehajtjuk a standard eliminációs lépést (a főátló alatti elemek kinullázását). Mivel a lehető legnagyobb számmal fogunk osztani, a kerekítési hibák terjedése minimálisra csökken.



## 3. Számszerű Mintapélda (4-dimenziós eset)

A jegyzetek az alábbi egyenletrendszeren mutatják be a részleges főelemkiválasztás működését:


$$\begin{pmatrix} 2 & -1 & 0 & -3 \\ 2 & -1 & 1 & 5 \\ -3 & 1 & 1 & -2 \\ 2 & 4 & 0 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 8 \\ 2 \\ -5 \\ 21 \end{pmatrix}$$

* **1. lépés ($k=1$ oszlop):** A főátlóban és alatta lévő elemek az első oszlopban: $2, 2, -3, 2$. Abszolút értékben a $-3$ a legnagyobb ($|-3|=3$), ami a 3. sorban van. Ezért **felcseréljük az 1. és a 3. sort**. Az eliminációt ezután ezzel a főelemmel hajtjuk végre.
* **2. lépés ($k=2$ oszlop):** A transzformált második oszlop vizsgált elemei közül a legnagyobb érték ($\frac{14}{3}$) a 4. sorban található. **Felcseréljük a 2. és a 4. sort**, majd elvégezzük az eliminációt.
* **3. lépés ($k=3$ oszlop):** A harmadik oszlopban a hátralévő elemek közül a $\frac{12}{7}$ a nagyobb, így az újabb **sorcsere után** alakítjuk ki a végső trianguláris (háromszög) alakot.

A kapott trianguláris rendszert a visszahelyettesítés módszerével megoldva megkapjuk a pontos, kerekítési hibáktól megvédett végeredményt:


$$\mathbf{x} = (4, 3, 2, -1)^T \tag{3.24}$$



## 4. Elméleti Feltétel a Végrehajthatóságra (3.26. Tétel)

A fejezet rögzíti a részleges főelemkiválasztással támogatott Gauss-elimináció működésének szükséges és elégséges matematikai kritériumát:

> **3.26. Tétel:** Egy $\mathbf{A}$ négyzetes mátrixra az alábbi három állítás teljesen **ekvivalens** (egyenértékű):
> 1. A Gauss-elimináció részleges főelemkiválasztással **garantáltan végrehajtható**.
> 2. Az $\mathbf{A}$ mátrix nemszinguláris, azaj az egyenletrendszernek **létezik egyértelmű megoldása**.
> 3. A mátrix determinánsa nem nulla: **$\det(\mathbf{A}) \neq 0$**.
> 
> 

### Miért fontos ez a tétel?

A tiszta (főelemkiválasztás nélküli) Gauss-eliminációnál előfordulhat, hogy a mátrix nemszinguláris, a módszer mégis elakad egy korai nullává váló átlóbeli elem miatt. A részleges főelemkiválasztás alkalmazása **biztosítja, hogy ha a feladatnak matematikailag létezik egyértelmű megoldása, akkor az algoritmus sosem fog elakadni**, hanem stabilan és sikeresen végigfut.



## 5. Összegzés

Amikor a lineáris egyenletrendszerek megoldását kézzel végezzük, a sorcserék és a törtek (vagy tizedesjegyek) követése bonyolultnak tűnhet. Azonban számítógépes és numerikus környezetben a részleges főelemkiválasztás **nélkülözhetetlen**, mert minimális plusz keresési költség mellett drasztikusan csökkenti a lebegőpontos kerekítési hibák pusztító hatását, garantálva a numerikus megoldás megbízhatóságát.