**2.12. Kvázi-Newton módszerek, Broyden-módszer** 



## 1. Motiváció és a kvázi-Newton eljárások alapelve

* **A probléma a többváltozós Newton-módszerrel:** Bár a Newton-módszer kvadratikusan konvergál, a gyakorlati alkalmazása rendkívül költséges, mivel minden egyes iterációs lépésben fel kell írni és ki kell értékelni a teljes $n \times n$-es $\mathbf{f}'(\mathbf{p}^{(k)})$ Jacobi-mátrixot. Ezen felül minden lépésben meg kell oldani egy hozzá tartozó lineáris egyenletrendszert is, ami szintén nagy műveletigényű ($O(n^3)$ művelet).
* **A kvázi-Newton módszerek megoldása:** Az eljárás során a pontos $\mathbf{f}'(\mathbf{p}^{(k)})$ Jacobi-mátrixot egy könnyebben számítható $\mathbf{A}^{(k)}$ mátrixszal közelítjük. Az általános rekurziós formula így a következő:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}) \tag{2.31}$$



### A Jacobi-mátrix numerikus (naiv) közelítése

Az egyik kézenfekvő megközelítés a parciális deriváltak helyettesítése a különbségi hányadossal egy rögzített, kis $h > 0$ lépésköz és az $\mathbf{e}^{(j)}$ egységvektorok segítségével:


$$a_{ij}^{(k)}=\frac{f_i(\mathbf{p}^{(k)}+h\mathbf{e}^{(j)})-f_i(\mathbf{p}^{(k)})}{h}, \qquad i,j=1,\dots,n \tag{2.33}$$


Ez a módszer a szelőmódszer közvetlen többváltozós általánosítása, de még mindig $n^2$ darab függvénykiértékelést igényel lépésenként.



## 2. A Broyden-módszer elmélete

A Broyden-módszer egy sokkal hatékonyabb megközelítést alkalmaz: az $\mathbf{A}^{(k)}$ közelítő mátrixot lépésről lépésre frissíti (update-eli) anélkül, hogy a teljes mátrixot újra ki kellene számítani.

### A kvázi-Newton egyenlet (Szelőegyenlet)

Az egyváltozós szelőmódszer mintájára megköveteljük, hogy az új $\mathbf{A}^{(k)}$ mátrix teljesítse a következő egyenletet:


$$\mathbf{A}^{(k)}(\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}) = \mathbf{f}(\mathbf{p}^{(k)}) - \mathbf{f}(\mathbf{p}^{(k-1)})$$


A jelölések egyszerűsítésére bevezetjük a változások vektorait:


$$\mathbf{s}^{(k)} = \mathbf{p}^{(k)} - \mathbf{p}^{(k-1)} \qquad \text{és} \qquad \mathbf{y}^{(k)} = \mathbf{f}(\mathbf{p}^{(k)}) - \mathbf{f}(\mathbf{p}^{(k-1)})$$


Így a mátrixra vonatkozó feltétel: $\mathbf{A}^{(k)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$.

### A Broyden-féle mátrixfrissítési formula

Mivel a fenti egyenlet nem határozza meg egyértelműen a mátrixot, Broyden azt a feltételt szabta, hogy az $\mathbf{s}^{(k)}$ vektorra merőleges irányokban a mátrix ne változzon az előző lépéshez ($\mathbf{A}^{(k-1)}$-hez) képest. Ebből a minimális változtatási elvből (rang-1 korrekció) adódik a Broyden-formula:


$$\mathbf{A}^{(k)} = \mathbf{A}^{(k-1)} + \frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k-1)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2} (\mathbf{s}^{(k)})^T \tag{2.35}$$



## 3. Konvergencia és hatékonyság (2.59. Tétel)

* **Lokális konvergencia:** Ha az $\mathbf{A}^{(0)}$ kezdőmátrix elég közel van a gyökhelyen vett valódi Jacobi-mátrixhoz, és a $\mathbf{p}^{(0)}$ kiindulópont is elég közel van a pontos $\mathbf{p}$ megoldáshoz, a Broyden-módszer biztosan konvergál.
* **A konvergencia rendje:** A konvergencia sebessége **szuperlineáris**, ami azt jelenti, hogy a hibatagok hányadosa nullához tart a végtelenben:

$$\lim_{k \to \infty} \frac{\|\mathbf{p}^{(k+1)} - \mathbf{p}\|}{\|\mathbf{p}^{(k)} - \mathbf{p}\|} = 0 \tag{2.36}$$



### Miért rendkívül hatékony a gyakorlatban? (A Sherman–Morrison formula)

A Broyden-módszer igazi ereje abban rejlik, hogy a **Sherman–Morrison-formula** segítségével közvetlenül a közelítő mátrix inverzét ($\mathbf{B}^{(k)} = (\mathbf{A}^{(k)})^{-1}$) is képesek vagyunk lépésről lépésre frissíteni.
Ezáltal az iterációk során **teljesen kiküszöbölhető a lineáris egyenletrendszerek megoldása és a mátrixinvertálás**, a számítási igény lépésenként $O(n^3)$-ról mindössze **$O(n^2)$ tiszta mátrix-vektor szorzásra** csökken.



## 4. Numerikus összehasonlítás a Newton-módszerrel (2.60. Példa)

A fejezet ugyanazon a kétdimenziós nemlineáris egyenletrendszeren teszteli a Broyden-módszert, mint a korábbi szakaszok.

* **Kiindulási paraméterek:** $\mathbf{p}^{(0)} = (-1.5, -1.5)^T$, $h=0.001$, $TOL = 10^{-5}$.
* **Eredmény:** A Broyden-módszer **10 lépés** alatt érte el a kívánt pontosságot a pontos $\mathbf{p} = (1, 0)^T$ gyökhöz.
* **Kontextus:** * A **Newton-módszernek** ugyanehhez elég volt **4 lépés**, mivel az a pontos deriváltakat használta (kvadratikus konvergencia).
* Bár a Broyden-módszernek több lépés kellett, az egyes lépések számítási költsége nagyságrendekkel kisebb volt, így nagyobb dimenziós rendszereknél az összesített futásidőt tekintve a Broyden-módszer sokszorosan felülmúlja a klasszikus Newtont.