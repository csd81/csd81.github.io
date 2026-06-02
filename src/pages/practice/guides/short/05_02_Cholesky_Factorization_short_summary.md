**5.2. Cholesky-faktorizáció** 



## 1. A Cholesky-felbontás definíciója és létezése

A Cholesky-faktorizáció az LU-felbontás egy speciális, rendkívül hatékony változata, amely kifejezetten szimmetrikus szerkezetű mátrixokra vonatkozik.

> **Definíció:** Legyen $\mathbf{A}$ egy szimmetrikus négyzetes mátrix ($\mathbf{A} = \mathbf{A}^T$). Az **$\mathbf{A} = \mathbf{LL}^T$** szorzatot az $\mathbf{A}$ mátrix Cholesky-faktorizációjának nevezzük, ha $\mathbf{L}$ egy **alsó háromszögmátrix**.

### 5.6. Tétel (Létezés és nem-egyértelműség)

* **Nem-egyértelműség:** Fontos elméleti tulajdonság, hogy a Cholesky-felbontás általános esetben **nem egyértelmű** (például az átlóbeli elemek előjeleinek variálásával több felbontás is kapható).
* **Elégséges feltétel (Pozitív definitség):** Ha az $\mathbf{A}$ mátrix **szimmetrikus és pozitív definit** (azaz minden $\mathbf{x} \neq \mathbf{0}$ vektorra $\mathbf{x}^T\mathbf{Ax} > 0$), akkor a Cholesky-felbontás **garantáltan létezik**, az $\mathbf{L}$ mátrix teljesen valós lesz, és a főátlójában **szigorúan pozitív elemeket** ($l_{ii} > 0$) választhatunk. Ha kikötjük, hogy a főátló elemei pozitívak, a felbontás már egyértelművé válik.

*(A tétel bizonyítása a jegyzetben a mátrix dimenziója szerinti teljes indukcióval történik, blokkmátrix-particionálást és a vezető főminorok pozitivitását kihasználva).*



## 2. Az algoritmus működése és együttható-formulái

Ha tagonként összeszorozzuk az $\mathbf{L}$ és $\mathbf{L}^T$ mátrixokat, a kapott egyenletekből lépésről lépésre, oszloponként haladva meghatározhatók az $\mathbf{L}$ mátrix $l_{ij}$ elemei.

Az eljárás alapvető formulái a következők:

1. **Főátlóbeli elemek kiszámítása ($i = j$):**

$$l_{jj} = \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}$$


2. **Főátló alatti elemek kiszámítása ($i > j$):**

$$l_{ij} = \frac{1}{l_{jj}} \left( a_{ij} - \sum_{k=1}^{j-1} l_{ik}l_{jk} \right)$$



> **Stabilitási megjegyzés:** Mivel a pozitív definit mátrixok tulajdonságai miatt a gyök alatti kifejezés mindig szigorúan pozitív marad, az algoritmus során **sosem kell komplex számokkal számolnunk**, és nem lép fel nullával való osztás sem.



## 3. Számítási igény és komplexitás (Műveletszámok)

Mivel az algoritmus kihasználja a mátrix szimmetriáját, a felbontás elkészítéséhez feleannyi memóriára és lényegesen kevesebb aritmetikai műveletre van szükség, mint egy általános LU-felbontásnál.

A fejezet pontosan részletezi az 5.8-as Cholesky-algoritmus műveletigényét egy $n \times n$-es mátrixra:

* **Szorzások és osztások száma:** $\dfrac{n^3}{6} + \dfrac{n^2}{2} - \dfrac{2n}{3}$
* **Összeadások és kivonások száma:** $\dfrac{n^3}{6} - \dfrac{n}{6}$
* **Négyzetgyökvonások száma:** pontosan **$n$ darab** (minden oszlopban egy).



## 4. Összehasonlítás az LU-felbontással (Gyakorlati előnyök)

A Cholesky-felbontás a mérnöki és tudományos számítások egyik legnépszerűbb eszköze a szimmetrikus pozitív definit rendszerek (pl. végeselemes szerkezeti elemzések, legkisebb négyzetek módszere) esetén, a következő okok miatt:

1. **Feleannyi lebegőpontos művelet:** Az LU-felbontás $\frac{n^3}{3}$ szorzást igényel, míg a Cholesky mindössze **$\frac{n^3}{6}$**-ot. Így a program **kétszer gyorsabban** fut le.
2. **Feleannyi tárhely (Memóriamegtakarítás):** Mivel a mátrix szimmetrikus, elegendő csak a mátrix alsó háromszögét tárolni a memóriában, a felső részt nem kell rögzíteni.
3. **Kiváló numerikus stabilitás:** Ellentétben a sima LU vagy Gauss-eliminációval, a Cholesky-faktorizációhoz **sosem szükséges főelemkiemelést (sorcseréket/pivotálást) végezni** a kerekítési hibák kordában tartásához. Az algoritmus magától is rendkívül stabil.