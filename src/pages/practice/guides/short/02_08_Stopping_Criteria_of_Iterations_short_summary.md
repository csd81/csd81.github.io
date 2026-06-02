**"2.2 Numerical Stopping Criteria and Iteration Stability"** (a jegyzetben *2.8. Iterációs módszerek megállási feltételei*)

## 1. A probléma háttere

A numerikus iterációs módszerek egy végtelen $p_k$ sorozatot generálnak, amely (ideális esetben) a keresett pontos $p$ megoldáshoz (gyökhöz, azaz az $f(p) = 0$ ponthoz) konvergál. Mivel a végtelenségig nem számolhatunk, a gyakorlatban meg kell határoznunk egy elég nagy $k$ lépésszámot, ahol a sorozat generálását leállítjuk, és a $p_k$ tagot elfogadjuk jó közelítésként.

A leállításhoz előre megadott, kis pozitív tolerancia értékeket ($\varepsilon_1, \varepsilon_2, \varepsilon_3 > 0$) használunk.



## 2. A három leggyakoribb megállási feltétel

A gyakorlatban az alábbi három alapvető stratégia szerint dönthetjük el a leállást:

### 1. Abszolút változás feltétele

* **Formula:** $|p_k - p_{k-1}| < \varepsilon_1$
* **Mögöttes elv:** Ez a valódi abszolút hiba ($|p_k - p|$) numerikus megfelelője. Azon a heurisztikus feltételezésen alapul, hogy ha két egymást követő tag közötti eltérés nagyon kicsi, az azért van, mert mindkét érték már közel van a végső határértékhez.

### 2. Relatív változás feltétele

* **Formula:** $\dfrac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2$
* **Mögöttes elv:** Ez a valódi relatív hiba ($|p_k - p| / |p|$) numerikus közelítése. Hasonlóan az elsőhöz a tagok egymástól való távolságát méri, de a különbség vizsgálatakor figyelembe veszi a tagok nagyságrendjét is.

### 3. Függvényérték feltétele

* **Formula:** $|f(p_k)| < \varepsilon_3$
* **Mögöttes elv:** Kifejezetten az $f(x)=0$ alakú gyökkeresési problémákra vonatkozik. Ha a függvényérték a $p_k$ pontban közel van a nullához, feltételezzük, hogy a pont közel van a valódi gyökhöz.



## 3. A feltételek buktatói és a gyakorlati megoldás

Mindegyik feltételhez megadható olyan matematikai ellenpélda (csapda), amikor a feltétel teljesül, de a kapott eredmény mégsem jó közelítése a gyöknek:

* **Az 1. és 2. feltétel hibája:** Konvergensnek tűnő, de valójában divergens (pl. a végtelenbe tartó harmonikus) sorozatoknál is teljesülhetnek a feltételek, ha a tagok közötti különbség elég lassan csökken.
* **A 3. feltétel hibája:** Egy nagyon lapos függvény (vagy egy lokális "völgy") esetén a függvényérték rendkívül kicsivé válhat anélkül is, hogy a pont valóban közel lenne a függvény tényleges gyökéhez.

> **Gyakorlati megoldás:** Mivel önmagában egyik kritérium sem tökéletes, a gyakorlatban ezen megállási feltételek **kombinációját** alkalmazzák a hibák kiszűrésére.



## 4. Maximális lépésszám beépítése

Minden numerikus algoritmusba kötelezően be kell építeni egy **maximális iterációs lépésszámot** is. Ha a program ezt a korlátot túllépi, akkor is meg kell állítani a futást. Ez a biztonsági elem megakadályozza:

* A végtelen ciklusba kerülést (ha a sorozat divergens).
* A túl lassú, gazdaságtalan konvergenciát.