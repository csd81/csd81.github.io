**3.2. Gauss-elimináció és főelemkiválasztási stratégiák** 



## 1. A Gauss-elimináció alapötlete és célja

A lineáris egyenletrendszerek ($\mathbf{Ax} = \mathbf{b}$) közvetlen megoldásának klasszikus algoritmusa a **Gauss-elimináció**.

* **Cél:** A kiindulási egyenletrendszert ekvivalens átalakításokkal (sorok szorzása, egymásból való kivonása) olyan **felülről trianguláris (háromszög) alakra** hozzuk, amelyből a 3.1. fejezetben megismert *visszahelyettesítés módszerével* ($O(n^2)$ műveletért) már közvetlenül megkapható a megoldás.
* **Működése:** Oszlopról oszlopra haladva a főátló alatti elemeket szisztematikusan nullává alakítjuk (kiejtjük a változókat az alsóbb egyenletekből).



## 2. A kerekítési hibák csapdája és a főelemkiválasztás szükségessége

Bár a tiszta Gauss-elimináció elméletileg (egzakt törtekkel számolva) mindig működik, ha a főátlóban nincsenek nullák, a véges lebegőpontos számábrázolást használó számítógépeken **katasztrofálisan pontatlan végeredményt adhat**, ha a főátlóban álló osztóelem (a *pivotelem*) abszolút értéke közel van a nullához.

### Mintapélda (A kis főelem veszélye)

Tekintsük az alábbi rendszert, és oldjuk meg **4 értékes jegyre kerekítő gépi aritmetikával**:


$$\begin{pmatrix} 0.0002 & -30.5 \\ 5.0600 & -1.05 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -60.99 \\ 250.90 \end{pmatrix}$$

* **A pontos elméleti megoldás:** $x_1 = 50$, $x_2 = 2$.
* **Számítás főelemkiválasztás nélkül:** A szorzó $l_{21} = \frac{5.060}{0.0002} = 25300$. Ezzel megszorozva az első sort és kivonva a másodikból, a kerekítések miatt a háromszög alakú rendszer:

$$\begin{pmatrix} 0.0002 & -30.5 \\ 0 & 771700 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} -60.99 \\ 1543000 \end{pmatrix}$$



Visszahelyettesítéssel kapjuk: $\tilde{x}_2 = 1.999$ (ez elfogadható), de $\tilde{x}_1 = \mathbf{-100.0}$! Az első változó relatív hibája **300%-os**, a kapott eredmény teljesen használhatatlan.
* **A hiba oka:** Egy rendkívül kicsi számmal ($0.0002$) való osztás felerősítette a kerekítési hibákat, amelyek teljesen megsemmisítették az információt.



## 3. Főelemkiválasztási stratégiák (Pivoting Strategies)

A numerikus instabilitás elkerülésére úgynevezett **főelemkiválasztást** alkalmazunk: az eliminációs lépés előtt sor- vagy oszlopcserékkel elvegyük a kis elemet a főátlóból, és a lehető legnagyobb abszolút értékű számot tesszük a helyére.

### A) Részleges főelemkiválasztás (Partial Pivoting)

A legelterjedtebb és legpraktikusabb módszer. A $k$-adik eliminációs lépés előtt megnézzük a $k$-adik oszlop elemeit a főátlóban és az az alatt álló részen, és megkeressük a maximális abszolút értékűt:


$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}$$


Ezután a $k$-adik és az $l$-edik **sort teljes egészében felcseréljük**, így a maximum kerül a főátlóba osztónak.

* *A fenti mintapéldánál* a két sor felcserélése után a szorzó kicsi lesz, és a 4-jegyű számítás **hajszálpontosan az $x_1=50, x_2=2$ valódi megoldást adja vissza**, 0% hibával.

### B) Teljes főelemkiválasztás (Complete Pivoting)

A maximális elemet nemcsak az adott oszlopban, hanem a még el nem tüntetett **teljes bal alsó rész mátrixblokkban** keressük (minden hátralévő sorban és oszlopban):


$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n, \ j = k, \ldots, n\}$$


A maximum főátlóba hozásához **sorcserére ÉS oszlopcserére is szükség van**.

* *Hátránya:* Az oszlopcserék megváltoztatják az ismeretlenek sorrendjét (fel kell cserélni pl. $x_k$ és $x_m$ helyét), amit a végén nyilván kell tartani, ráadásul a kétdimenziós keresés műveletigénye jelentősen lassítja az algoritmust.

### C) Részleges főelemkiválasztás implicit sorkiegyenlítéssel (Scaled Partial Pivoting)

Ha egy mátrix soraiban a számok nagyságrendileg eleve nagyon eltérnek (pl. az egyik sorban milliós, a másikban tizedes értékek vannak), a sima részleges választás becsapható. Ekkor minden sort elosztunk a benne található maximális elem méretével (skálázzuk), és a relatívan legnagyobb elemet cseréljük a főátlóba.



## 4. Speciális mátrixosztályok: Amikor NEM kell főelemkiválasztás

A főelemek keresése és a sorok cserélgetése számítógépes többletmunkát jelent. Van két olyan kiemelten fontos mátrixosztály, ahol matematikai tételek garantálják, hogy a tiszta Gauss-elimináció **főelemkiválasztás nélkül is teljesen stabil és pontos marad**:

1. **Szigorú diagonális dominancia:** Ha a mátrix főátlójában álló elemek abszolút értéke minden sorban szigorúan nagyobb, mint az adott sor összes többi elemének abszolút érték összege:

$$|a_{ii}| > \sum_{j \neq i} |a_{ij}| \qquad \text{minden } i\text{-re.}$$


2. **Szimmetrikus és pozitív definit mátrixok:** Ha $\mathbf{A}^T = \mathbf{A}$, és minden nemzéró $\mathbf{x}$ vektorra teljesül, hogy $\mathbf{x}^T\mathbf{Ax} > 0$. (A tétel szerint ez akkor áll fenn, ha a mátrix összes bal felső főminorának determinánsa szigorúan pozitív).



## 5. Összegzés

A Gauss-elimináció egy $O(n^3)$ összesített műveletigényű közvetlen módszer. Számítógépes környezetben a **részleges főelemkiválasztás** alkalmazása kötelező érvényű elem, mert megvédi a számítást a kis főelemek okozta kerekítési hibák robbanásától, és biztosítja az algoritmus numerikus robusztusságát.