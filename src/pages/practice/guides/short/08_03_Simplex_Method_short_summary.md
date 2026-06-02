**8.3. Szimplex módszer és Nelder–Mead-módszer** 


## 1. A szimplex fogalma és motivációja

A fejezet olyan többváltozós nemlineáris optimalizációs (szélsőérték-kereső) eljárásokat tárgyal, amelyek **nem használják a függvény deriváltjait** (úgynevezett *derivative-free* vagy tiszta függvénykiértékelésre épülő módszerek). Ez óriási előny akkor, ha a minimalizálandó függvény nem differenciálható, vagy a deriváltak kiszámítása túl bonyolult lenne.

> **Definíció:** Egy $n$-dimenziós **szimplex** $n+1$ darab lineárisan független $n$-dimenziós vektor (csúcspont) konvex burka.

* **1D szimplex:** egy szakasz ($2$ csúcspont)
* **2D szimplex:** egy háromszög ($3$ csúcspont)
* **3D szimplex:** egy tetraéder ($4$ csúcspont)



## 2. A klasszikus Szimplex-módszer algoritmusa

A keresés során a szimplex csúcspontjait ($\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$) minden lépésben úgy indexeljük (rendezzük), hogy a felvett függvényértékek növekedjenek:


$$f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$$


Így **$\mathbf{x}^{(0)}$ a legjobb** (legkisebb értékű) és **$\mathbf{x}^{(n)}$ a legrosszabb** (legnagyobb értékű) csúcspont.

### Az iteráció alaplépései:

1. **Középpont számítása ($\mathbf{x}_c$):** Kiszámítjuk a legjobb $n$ darab csúcspont súlypontját (azaz a legrosszabb $\mathbf{x}^{(n)}$ pontot kihagyjuk az átlagolásból):

$$\mathbf{x}_c := \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}$$


2. **Tükrözés (Reflection):** A legrosszabb pontot átvetítjük (tükrözzük) a középponton keresztül a geometriai forma túloldalára, megalkotva a tükrözött $\mathbf{x}_r$ pontot:

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$$


3. **Döntés:** Kiértékeljük az $f(\mathbf{x}_r)$ értéket. Ha ez jobb, mint az eddigi legrosszabb ($f(\mathbf{x}_r) < f(\mathbf{x}^{(n)})$), akkor a régi legrosszabb pontot végérvényesen lecseréljük $\mathbf{x}_r$-re, és az új szimplexszel folytatjuk az iterációt.



## 3. A Nelder–Mead-módszer (Az adaptív szimplex)

A klasszikus szimplex hátránya, hogy a merev tükrözés miatt a geometriai alakzat mérete sosem változik, így könnyen oszcillálhat vagy elakadhat. A **Nelder–Mead-módszer** ezt fejleszti tovább azzal, hogy engedélyezi a szimplex dinamikus **nyújtását (expanzióját) vagy zsugorítását (kontrakcióját)** a felület topográfiájától függően.

Bevezetünk két rögzített paramétert: az expanziós $\alpha > 1$ (általában $\alpha=2$) és a kontrakciós $0 < \beta < 1$ (általában $\beta=0.5$) tényezőket. A módosított algoritmus struktúrája:

* **Tükrözés:** Kiszámítjuk a standard $\mathbf{x}_r = \mathbf{x}_c + (\mathbf{x}_c - \mathbf{x}^{(n)})$ pontot.
* **A) Expanzió (Nyújtás):** Ha a tükrözött pont rendkívül jó lett, azaz még a globális eddigi legjobbnál is kisebb ($f(\mathbf{x}_r) < f(\mathbf{x}^{(0)})$), akkor érdemes „bátran” még tovább lépni ebbe az irányba:

$$\mathbf{x}_e = \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c)$$



Ha $f(\mathbf{x}_e) < f(\mathbf{x}_r)$, akkor $\mathbf{x}_e$ lesz az új csúcs, különben megtartjuk $\mathbf{x}_r$-et.
* **B) Kontrakció (Zsugorítás):** Ha a tükrözött pont nem hozott javulást ($f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$), akkor óvatosabbá válunk, és a szimplexet közelebb húzzuk a belső középponthoz:

$$\mathbf{x}_k = \mathbf{x}_c + \beta(\mathbf{x}^* - \mathbf{x}_c)$$



*(Ahol $\mathbf{x}^*$ a jobb érték $\mathbf{x}_r$ és $\mathbf{x}^{(n)}$ közül).*
* **C) Teljes zsugorítás (Shrink):** Ha a kontrakció sem segít, a szimplex összes csúcsát a legsikeresebb $\mathbf{x}^{(0)}$ pont felé felezzük le.



## 4. Numerikus mintapélda (8.4. Példa)

A jegyzet az $f(x, y) = x^2 - 4x + y^2 - y - xy$ nemlineáris kétváltozós függvényen mutatja be az eljárást.

* **Kiindulási háromszög (2D szimplex):** $\mathbf{x}^{(0)} = (0,3)^T$, $\mathbf{x}^{(1)} = (-1,4)^T$, $\mathbf{x}^{(2)} = (1,4)^T$.
* Az iterációk során a háromszög lépésről lépésre „bejárja” a koordináta-rendszert, miközben a Nelder–Mead-módszer esetén az alakzata rugalmasan torzul és zsugorodik, míg végül teljesen rázáródik a függvény optimális minimumhelyére.



## 5. Összegzés és gyakorlati jelentőség

A Nelder–Mead-szimplex eljárás az egyik legnépszerűbb és legrobusztusabb közvetlen keresőalgoritmus (például a MATLAB beépített `fminsearch` függvénye is ezen alapul). Bár elméleti konvergenciasebessége elmarad a gradiens-alapú módszerektől, gyakorlati stabilitása és az a tulajdonsága, hogy **zajos, nem differenciálható vagy analitikus képlet nélküli (tisztán mérési adatokból számolt) függvényekre is tökéletesen működik**, nélkülözhetetlenné teszi a mérnöki optimalizációban.