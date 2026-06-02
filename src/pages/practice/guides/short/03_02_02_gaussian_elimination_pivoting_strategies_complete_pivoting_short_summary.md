**3.2.2. Teljes főelemkiválasztás, sorkiegyenlítés és stabilitás** 



## 1. A Teljes Főelemkiválasztás Módszere (Complete Pivoting)

A kerekítési hibák csökkentésére és a numerikus stabilitás maximális növelésére a korábban megismert részleges főelemkiválasztás (3.2.1.) egy erősebb módosítását, az úgynevezett **teljes főelemkiválasztást** alkalmazhatjuk.

### Az eljárás algoritmusa:

1. **Keresés a teljes részblokkban:** A Gauss-elimináció $k$-adik lépése előtt nemcsak az aktuális oszlopot vizsgáljuk, hanem a még el nem tüntetett **teljes jobb alsó mátrixblokk összes elemét** (minden hátralévő sorban és oszlopban). Megkeressük az abszolút értékben legnagyobbat:

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n, \ j = k, \ldots, n\}$$



*(Ahol $l$ a megtalált maximum sora, $m$ pedig az oszlopa).*
2. **Kettős csere (Sor- és Oszlopcsere):** A kiválasztott maximum főátlóba ($a_{kk}$ pozícióba) hozásához **felcseréljük a $k$-adik és az $l$-edik sort, valamint a $k$-adik és az $m$-edik oszlopot**.
3. **Ismeretlenek nyilvántartása:** Mivel az oszlopok felcserélése megváltoztatja az ismeretlen változók sorrendjét (a $k$-adik oszlopba az $m$-edik változó együtthatói kerülnek és fordítva), ezt a programozás vagy számolás során szigorúan nyilván kell tartani (példázat szerint egy plusz jelölősorral a mátrix alatt).

### Előnyök és hátrányok:

* **Előny:** Elméletileg és numerikusan ez a legstabilabb közvetlen eliminációs stratégia.
* **Hátrány:** Sokkal több összehasonlítást és keresési műveletet igényel, ami jelentősen lassítja az algoritmus futását a részleges főelemkiválasztáshoz képest.



## 2. Sorkiegyenlítés (Scaling / Equilibration)

Numerikus tapasztalat, hogy ha az együtthatómátrix elemei között jelentős nagyságrendi eltérések vannak (pl. az egyik egyenletben milliós nagyságú, a másikban tizedes értékek szerepelnek), a kerekítési hiba drasztikusan megnőhet, és a sima főelemkiválasztás is hibázhat.

A **sorkiegyenlítés** célja, hogy az egyes egyenleteket (sorokat) olyan nemnulla számokkal szorozzuk be, hogy az új $\mathbf{B} := \mathbf{DA}$ mátrix elemei közel azonos nagyságrendűek legyenek, ahol $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$. Ekkor az $\mathbf{A}\mathbf{x} = \mathbf{b}$ rendszer helyett a vele ekvivalens $\mathbf{DA}\mathbf{x} = \mathbf{Db}$ rendszert oldjuk meg.

Gyakori gyakorlati megközelítés, hogy minden sort elosztunk a sorban található maximális abszolút értékű elem nagyságával (azaz soronként a maximumot $1$-re normáljuk), így kiegyenlítve a sorok közötti súlyozást.



## 3. Stabilitás Diagonálisan Domináns Mátrixok Esetén

A jegyzet egy rendkívül fontos elméleti bizonyítást vezet le a szigorúan diagonálisan domináns mátrixok stabilitására vonatkozóan:

> **Tétel (3.32. Tétel következménye):** Ha az $\mathbf{A}$ mátrix szigorúan diagonálisan domináns a soraira nézve, akkor a Gauss-elimináció **főelemkiválasztás (sorcsere) nélkül is garantáltan, elakadásmentesen végrehajtható**, és a keletkező részblokkok a számítás során végig szigorúan diagonálisan dominánsak (és így nemszingulárisak) maradnak. A módszer kerekítési hibákra nézve teljesen stabil.



## 4. Stabilitás Szimmetrikus Pozitív Definit Mátrixok Esetén

A hanganyag és a jegyzet zárófejezete a szimmetrikus, pozitív definit mátrixok viselkedését vizsgálja.

### Sylvester-kritérium (Definitség ellenőrzése)

Egy szimmetrikus mátrix ($\mathbf{A}^T = \mathbf{A}$) akkor és csak akkor pozitív definit, ha az összes bal felső főminorának (al-determinánsának) értéke szigorúan pozitív:


$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & \ddots & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n \tag{3.29}$$

### Következmény a Gauss-eliminációra:

Ha egy mátrix szimmetrikus és pozitív definit, akkor:

1. A Gauss-elimináció **főelemkiválasztás nélkül is biztonságosan végrehajtható**.
2. Az elimináció során adódó összes főelem (pivotelem) garantáltan **szigorúan pozitív ($>0$) marad** a számítás végéig.
3. A számítás teljesen stabil a kerekítési hibák felhalmozódásával szemben.



## 5. Összegzés

A **teljes főelemkiválasztás** nyújtja a legbiztonságosabb numerikus védelmet a kerekítési hibákkal szemben, de magas számítási igénye miatt a gyakorlatban ritkább. Ha azonban az együtthatómátrixunkról előre tudjuk, hogy *szigorúan diagonálisan domináns* vagy *szimmetrikus pozitív definit*, a matematikai tételek megnyugtató garanciát adnak: az elimináció **mindenféle sorcsere és pivoting nélkül is tökéletesen stabil és pontos lesz**.