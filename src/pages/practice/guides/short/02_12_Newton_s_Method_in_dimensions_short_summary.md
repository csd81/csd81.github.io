**2.11. Newton-módszer $n$-dimenzióban** (a részletes jegyzetben *2.12. szakasz*)  



## 1. A többváltozós Newton-módszer alapötlete

A fejezet célja a klasszikus egyváltozós Newton–Raphson-módszer általánosítása nemlineáris egyenletrendszerek numerikus megoldására.

Tekintsük a következő alakú többváltozós nemlineáris egyenletrendszert:


$$\mathbf{f}(\mathbf{x}) = \mathbf{0}$$


ahol $\mathbf{f}\colon U \to \mathbb{R}^n$ ($U \subset \mathbb{R}^n$ nyílt halmaz) egy vektor értékű függvény.

Az egyváltozós esethez hasonlóan rögzítünk egy $\mathbf{p}^{(k)} \in U$ közelítő pontot, és a függvényt lecseréljük a $p^{(k)}$ körüli lineáris részével (elsőrendű többváltozós Taylor-polinomjával):


$$\mathbf{f}\big(\mathbf{p}^{(k)}\big) + \mathbf{f}'\big(\mathbf{p}^{(k)}\big)\big(\mathbf{x} - \mathbf{p}^{(k)}\big) = \mathbf{0}$$


Ahol $\mathbf{f}'\big(\mathbf{p}^{(k)}\big)$ a függvény **Jacobi-mátrixát** jelöli az adott pontban. Ennek a lineáris egyenletrendszernek a gyökét tekintjük a következő iterációs pontnak, amely megadja az elméleti rekurziós formulát:


$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'\big(\mathbf{p}^{(k)}\big)\right)^{-1}\mathbf{f}\big(\mathbf{p}^{(k)}\big) \tag{2.29}$$



## 2. Kvadratikus konvergencia (2.56. Tétel)

A többváltozós eljárás megőrzi az egyváltozós Newton-módszer legfontosabb előnyét, a rendkívül gyors lefutást.

> **Tétel:** Legyen $\mathbf{f} \in C^2$, a rendszer pontos megoldása $\mathbf{p}$ (azaz $\mathbf{f}(\mathbf{p}) = \mathbf{0}$), és tegyük fel, hogy a gyökhelyen vett $\mathbf{f}'(\mathbf{p})$ Jacobi-mátrix invertálható. Ekkor a Newton-iteráció a gyök egy elég kis környezetéből indítva **lokálisan kvadratikusan (másodrendben)** konvergál $\mathbf{p}$-hez.

### A bizonyítás elve

A tétel bizonyítása a módszert egy speciális többváltozós fixpont-iterációként fogja fel, melynek fixpont-függvénye: $\mathbf{g}(\mathbf{x}) = \mathbf{x} - (\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x})$. Az előző (2.10.) fejezet elmélete alapján a fixpont-iteráció akkor kvadratikus, ha az elsőrendű parciális deriváltak mátrixa nulla a gyökhelyen ($\mathbf{g}'(\mathbf{p}) = \mathbf{0}$). Parciálisan differenciálva igazolható, hogy a keresett pontban ez a feltétel valóban teljesül, így a konvergencia rendje pontosan kettő.



## 3. A módszer gyakorlati, hatékony alakja

Bár a (2.29) elméleti képletben mátrixinvertálás szerepel, a gyakorlatban **sosem invertálunk mátrixot**, mert az rendkívül nagy műveletigénnyel járna és instabil lenne. Ehelyett minden lépésben egy lineáris egyenletrendszert oldunk meg az alábbiak szerint:

1. Bevezetjük a lépésköz (módosítás) vektorát:

$$\mathbf{s}^{(k)} = \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$$


2. Átrendezzük a formulát egy **lineáris egyenletrendszerré**:

$$\mathbf{f}'\big(\mathbf{p}^{(k)}\big)\mathbf{s}^{(k)} = -\mathbf{f}\big(\mathbf{p}^{(k)}\big)$$


3. Ezt a rendszert megoldjuk az ismeretlen $\mathbf{s}^{(k)}$ vektorra (például Gauss-eliminációval vagy MATLAB-ban a hatékony `\` operátorral).
4. Frissítjük (update-eljük) az aktuális közelítést:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}$$





## 4. Numerikus mintapélda (2.57. Példa)

A jegyzet a korábban fixpont-iterációval vizsgált kétdimenziós nemlineáris egyenletrendszeren mutatja be a működést:


$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned}$$

* **Kiindulópont:** $\mathbf{p}^{(0)} = (-1.5, -1.5)^T$.
* **Eredmény:** A Newton-módszer a kvadratikus konvergenciának köszönhetően rendkívül gyorsan fut le: mindössze **4 lépés** után eléri a pontos $\mathbf{p} = (1, 0)^T$ megoldást $10^{-6}$ nagyságrendű hibahatáron belül.



## 5. Összefoglaló értékelés

A többváltozós Newton-módszer az egyik **leggyorsabb és leghatékonyabb** eljárás egyenletrendszerek megoldására, amennyiben a kezdőérték elég közel van a valódi megoldáshoz. Legfőbb gyakorlati nehézsége, hogy minden egyes lépésben fel kell írni és ki kell értékelni a teljes $n \times n$-es Jacobi-mátrixot, majd meg kell oldani egy hozzá tartozó lineáris egyenletrendszert.