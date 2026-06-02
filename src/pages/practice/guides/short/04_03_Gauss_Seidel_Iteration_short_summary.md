**4.3. Gauss–Seidel-iteráció**  



## 1. A módszer alapötlete és motivációja

* **A probléma a Jacobi-iterációval:** A Jacobi-módszer a következő lépés ($k+1$) komponenseinek kiszámításakor mereven csak az előző ($k$-adik) lépésből származó értékeket használja fel. Nem hasznosítja azt a tényt, hogy az egyenletek soros kiértékelése miatt bizonyos változóknak (pl. $x_1$-nek) már a $k+1$-edik lépésben járó, frissített értéke is ismert, ami vélhetően már egy jobb közelítése a pontos megoldásnak.
* **A Gauss–Seidel-elv:** Amikor egy változó új értékét kiszámítjuk, azt a **következő változók frissítéséhez azonnal, még ugyanazon az iterációs lépésen belül felhasználjuk**.

### Koordinátás rekurziós formula

Az $n$-dimenziós lineáris egyenletrendszerre felírt komponensenkénti képlet:


$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right), \qquad i = 1, \ldots, n \tag{4.4}$$

Jól látható a képletben a két szumma szétválása: az $i$-nél kisebb indexű tagokból már a frissített $k+1$-edik, míg a nagyobb indexűekből még a régi $k$-adik közelítést helyettesítjük be.



## 2. Mátrixos (Vektoriális) alak levezetése

A konvergenciavizsgálathoz bontsuk fel az $\mathbf{A}$ együtthatómátrixot a szokásos módon: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, ahol $\mathbf{D}$ a diagonális, $\mathbf{L}$ a szigorú alsó, míg $\mathbf{U}$ a szigorú felső háromszögmátrix.

A koordinátás (4.4) rekurzió átcsoportosításával a $k+1$-es tagokat gyűjtsük a bal oldalra:


$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i$$

Ez mátrixos jelöléssel pontosan a következő formát ölti:


$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b}$$

Mivel feltételezzük, hogy a főátlóban nincsenek nullák, a $(\mathbf{D} + \mathbf{L})$ alsó háromszögmátrix invertálható, így balról beszorozva megkapjuk a standard lineáris fixpont-iterációs alakot:


$$\mathbf{x}^{(k+1)} = \underbrace{-(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}}_{\mathbf{T}_G}\mathbf{x}^{(k)} + \underbrace{(\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}}_{\mathbf{c}_G}$$

* **$\mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}$** a **Gauss–Seidel-iterációs mátrix**.



## 3. Konvergenciabizonyítások és feltételek

A Gauss–Seidel-iteráció konvergenciájának szükséges és elégséges feltétele, hogy spektrálsugara egynél kisebb legyen: **$\rho(\mathbf{T}_G) < 1$**. A gyakorlatban az alábbi elégséges tételek működnek:

1. **Szigorú diagonális dominancia:** Ha az $\mathbf{A}$ mátrix szigorúan diagonálisan domináns a soraira nézve, a Gauss–Seidel-iteráció garantáltan konvergál tetszőleges kezdőértékből indítva.
2. **Pozitív definitség (4.15. Tétel):** Ha az $\mathbf{A}$ mátrix szigorúan szimmetrikus és pozitív definit, a Gauss–Seidel-módszer biztosan konvergens. *(Megjegyzés: Ez a tulajdonság a Jacobi-iterációra általánosságban nem igaz).*

### Összehasonlítás a Jacobi-iterációval: A Stein–Rosenberg-tétel (4.16. Tétel)

A jegyzet kiemeli, hogy általános esetben nem jelenthető ki, hogy a Gauss–Seidel mindig gyorsabb, mint a Jacobi (ez pusztán attól függ, hogy $\rho(\mathbf{T}_G)$ vagy $\rho(\mathbf{T}_J)$ a kisebb). Azonban ha a mátrix átlón kívüli elemei nempozitívak ($a_{ij} \le 0, \, i \neq j$) és a főátló pozitív ($a_{ii} > 0$), akkor a Stein–Rosenberg-tétel szerint:

* A két módszer egyszerre konvergens vagy egyszerre divergens.
* Konvergencia esetén a Gauss–Seidel **szigorúan gyorsabb**, mint a Jacobi-iteráció ($0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$).



## 4. Ritka mátrixok és gyakorlati hatékonyság

A hanganyag és a jegyzet részletesen kitér arra, hogy miért rendkívül népszerűek ezek az iterációk a mérnöki gyakorlatban a közvetlen módszerekkel (pl. Gauss-elimináció) szemben:

* **Memóriamegtakarítás ritka mátrixoknál:** A Gauss-elimináció során a mátrix "feltöltődik" (a nullák helyére nemnulla elemek számítódnak be), ami óriási mátrixoknál elfogyasztja a memóriát. Ezzel szemben az iterációknál az eredeti $\mathbf{A}$ mátrix szerkezete **sosem változik meg**.
* **Műveletigény optimalizálás:** Ha a mátrix ritka (soronként csak néhány nemnulla elemet tartalmaz), a (4.4) képlet kiértékelésekor a nullával való szorzásokat átugorva a lépésenkénti műveletigény $O(n^2)$-ről drasztikusan lecsökken. Bár 10-30 lépést (iterációt) is le kell futtatni, a teljes számítási idő még mindig lényegesen kevesebb lesz, mint a közvetlen Gauss-elimináció $O(n^3)$-as költsége.