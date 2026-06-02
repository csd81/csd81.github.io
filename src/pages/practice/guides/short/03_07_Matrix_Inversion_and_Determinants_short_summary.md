**3.6. Mátrix invertálás és determináns számítás**  



## 1. Mátrixinvertálás mint szimultán egyenletrendszer

A lineáris algebra definíciója szerint egy nemszinguláris négyzetes $\mathbf{A}$ mátrix $\mathbf{A}^{-1}$ inverze teljesíti az alábbi alapvető mátrixegyenletet:


$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$$

Ez a feladat tökéletesen megfeleltethető a 3.5. fejezetben tárgyalt **szimultán lineáris egyenletrendszernek** ($\mathbf{AX} = \mathbf{B}$), ahol a szabadtagok helyén most a speciális $\mathbf{B} = \mathbf{I}$ egységmátrix áll, a keresett megoldásmátrix pedig maga az inverz ($\mathbf{X} = \mathbf{A}^{-1}$).

### Megoldás kibővített mátrixszal

A feladat megoldásához egy olyan $n \times 2n$ dimenziós kibővített mátrixot hozunk létre, amelynek bal oldali blokkja az $\mathbf{A}$ mátrix, jobb oldali blokkja pedig az $\mathbf{I}$ egységmátrix:


$$(\mathbf{A} \mid \mathbf{I})$$



## 2. Az invertálás algoritmusa Gauss–Jordan-eliminációval

A kiterjesztett $(\mathbf{A} \mid \mathbf{I})$ mátrixon **Gauss–Jordan-eliminációt** hajtunk végre. Az oszloponkénti (főátló alatti és feletti) eliminációs lépésekkel a bal oldali $\mathbf{A}$ részt szisztematikusan az egységmátrixszá redukáljuk.

Mivel minden sorműveletet a jobb oldali blokkon is végrehajtunk, a folyamat végére a jobb oldalon **közvetlenül és automatikusan az $\mathbf{A}^{-1}$ inverz mátrix fog megjelenni**:

$$(\mathbf{A} \mid \mathbf{I}) \quad \sim \quad \dots \quad \sim \quad (\mathbf{I} \mid \mathbf{A}^{-1})$$

*Numerikus stabilitás:* A kerekítési hibák minimalizálása és a nullával való osztás elkerülése érdekében ennél az eljárásnál is javasolt a 3.2. fejezetből ismert **részleges főelemkiválasztás** (sorcserék) alkalmazása.



## 3. A módszer műveletigénye

A jobb oldali egységmátrix speciális ritka szerkezetű (kezdetben sok nullát tartalmaz), ami miatt a programozás során a nullával való szorzások átugorhatók. Ezt az optimalizációt figyelembe véve a mátrixinvertálás összesített lebegőpontos szorzás- és osztásigénye:

$$\text{Műveletigény} = \mathbf{\frac{3}{2}n^3} + \mathcal{O}(n^2)$$

A lineáris algebrában ez számít a **leghatékonyabb közvetlen (direkt) eljárásnak** egy mátrix teljes inverzének előállítására.



## 4. Determináns számítás numerikus úton

A determináns elméleti (definíció szerinti) kiszámítása óriási, $n!$ műveletet igényelne, ami már egy $10 \times 10$-es mátrixnál is használhatatlanul lassú számítógépen. A numerikus analízis a determináns meghatározását is a Gauss-eliminációs sorműveletekre vezeti vissza.

A 3.1. fejezet tételei alapján tudjuk, hogy a sorok hozzáadása egymáshoz nem változtatja meg a determinánst, a sorcserék viszont megfordítják az előjelét. Ha a mátrixon részleges főelemkiválasztással lentről felfelé haladó Gauss-eliminációt végzünk, a folyamat végén egy $\mathbf{A}^{(n-1)}$ felső háromszögmátrixot kapunk.

Mivel egy háromszögmátrix determinánsa egyszerűen a főátlójában lévő elemek szorzata, a kiindulási mátrix determinánsa az alábbi összefüggéssel kapható meg:

$$\mathbf{\det(\mathbf{A}) = (-1)^s \cdot a_{11} \cdot a_{22}^{(1)} \cdot a_{33}^{(2)} \cdots a_{nn}^{(n-1)}}$$

Ahol:

* **$s$**: az eliminációs eljárás során végrehajtott **sorcserék száma**,
* **$a_{ii}^{(i-1)}$**: az elimináció során adódó **főelemek (pivotelemek)** értékei a főátlóban.

Így a determináns meghatározása mindössze egy $\approx \frac{1}{3}n^3$ műveletigényű Gauss-elimináció árából rendkívül gyorsan elvégezhető.



## 5. Számszerű Mintapélda (Mátrixinvertálás)

Invertáljuk az alábbi $3 \times 3$-as mátrixot:


$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}$$

1. **Kezdeti kiterjesztett mátrix felírása:**

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{array}\right)$$


2. **Első oszlop eliminálása (1. sor hozzáadása a 2.-hoz, és 1. sor 2-szeresének hozzáadása a 3.-hoz):**

$$\sim \left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right)$$


3. **Főátló feletti elemek eliminálása a 3. sor segítségével (a bal oldali rész diagonálissá tétele):**

$$\sim \left(\begin{array}{ccc|ccc} 3 & 0 & 0 & -1 & 0 & -2 \\ 0 & 3 & 0 & -1 & 3 & -2 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right)$$


4. **Sorok leosztása a főátlóbeli elemekkel ($3$-mal), hogy megkapjuk az $\mathbf{I}$ egységmátrixot a bal oldalon:**

$$\sim \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \end{array}\right)$$



A kapott **végső inverz mátrix** kiemeléssel:


$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}$$