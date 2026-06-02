**8.4. Gradiens-módszer** 



## 1. Alapelv és geometriai háttér

A gradiens-módszer (más néven a **legmeredekebb lejtő módszere** / *steepest descent*) az egyik legalapvetőbb többváltozós nemlineáris optimalizációs (szélsőérték-kereső) algoritmus, amely a függvény elsőrendű deriváltjaira (a gradiensvektorra) támaszkodik.

* **A legmeredekebb lejtő iránya (8.8. Tétel):** A matematikai analízisből ismert, tételileg bizonyítható tény, hogy egy tetszőleges $\mathbf{p}$ pontból elindulva az $f$ függvény a **negatív gradiens, azaz a $-f'(\mathbf{p})$ irányban csökken a leggyorsabban** (legmeredekebben).
* **Ortogonalitás a szintvonalakra:** Egy többváltozós függvény $f'(\mathbf{p})$ gradiensvektora mindig **merőleges a ponthoz tartozó szintvonalra** (annak érintőjére). Ebből kifolyólag a gradiens-módszer iterációs lépései geometriailag mindig a szintvonalakra merőlegesen mozdulnak el.



## 2. Az algoritmus általános rekurziója

A módszer egy tetszőlegesen megválasztott $\mathbf{p}^{(0)}$ kezdőpontból indul ki, és a következő iteratív szabály szerint generálja a pontok sorozatát:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \qquad k = 0, 1, 2, \ldots \tag{8.5}$$

Ahol:

* $\mathbf{p}^{(k)}$ az aktuális pozíció (vektor),
* $f'(\mathbf{p}^{(k)})$ a függvény gradiensvektora az adott pontban,
* $\alpha_k > 0$ a **lépésköz** vagy skálázási tényező (step size / learning rate), amely meghatározza, hogy milyen hosszan lépünk a legmeredekebb lejtő irányába.



## 3. A lépésköz megválasztásának stratégiái

A módszer hatékonysága és konvergenciasebessége kritikus módon függ az $\alpha_k$ lépésköz dinamikus vagy konstans megválasztásától. A jegyzet két fő megközelítést mutat be:

### A) Konstans vagy egyszerűen skálázott lépésköz

Ebben az esetben a lépéshosszat fixen rögzítjük, vagy a gradiens normájával arányosan skálázzuk (például $\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}$).

* **Probléma:** Ha az $\alpha_k$ túl nagy, a sorozat könnyen átugorhatja a völgy alját és oszcillálni kezd a minimumhely körül. Ha túl kicsi, a konvergencia rendkívül lassúvá válik.

### B) Optimális gradiens-módszer (Line Search)

Az optimális verzióban minden egyes lépésben egy **egydimenziós minimalizációs feladatot** oldunk meg az $\alpha$ paraméterre nézve: úgy választjuk meg az $\alpha_k$-t, hogy az új pontban a függvényérték a lehető legkisebb legyen a kijelölt egyenes mentén:


$$\min_{\alpha > 0} f\big(\mathbf{p}^{(k)} - \alpha f'(\mathbf{p}^{(k)})\big)$$

> **Fontos geometriai tulajdonság:** Az egyváltozós szélsőérték feltételéből adódóan az optimális lépésköz megköveteli, hogy a kapott új irány merőleges legyen az előzőre. Ezért az optimális gradiens-módszer trajektóriája a szintvonalak között egy **jellegzetes, egymásra szigorúan merőleges cikcakkos (zig-zag) vonalat** ír le.



## 4. Konvergenciasebesség és a "Völgy-effektus"

A fejezet rögzíti, hogy az optimális gradiens-módszer elméletileg **lokálisan lineárisan konvergens**.

* Ha a szintvonalak gömb (vagy kör) szimmetrikusak, a módszer rendkívül gyors (akár 1-2 lépés alatt eléri a centrumot).
* Ha azonban a függvény szintvonalai elnyújtottak (egy hosszúkás, meredek falú völgyet alkotnak), az algoritmus az ortogonális kényszer miatt csapdába esik: nagyon gyorsan bezuhan a völgy aljára, de ott apró, végtelen sűrű cikcakk lépésekkel, rendkívül lassan képes csak haladni a völgy tényleges tengelymenti minimumhelye felé.



## 5. Gradiensmentes változat (Numerikus derivált használata)

Ha a függvény analitikus gradiensvektora nem ismert, vagy kiszámítása túl sok aritmetikai műveletet igényelne, a (8.5) formula módosítható úgy, hogy a valódi deriváltak helyett **elsőrendű differenciahányadosokkal** (numerikus differenciálással) közelítjük a gradiens koordinátáit egy apró $h>0$ lépésközzel:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)} \tag{8.7}$$

Ahol a $\mathbf{v}^{(k)}$ közelítő vektor $i$-edik komponense:


$$v_i^{(k)} = \frac{f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})}{h}, \qquad i = 1, \ldots, n$$


*(Ahol $\mathbf{e}^{(i)}$ az $i$-edik koordináta-tengely irányú egységvektor).*



## 6. Összegzés

A gradiens-módszer a nemlineáris optimalizáció klasszikus pillére. Előnye, hogy irányított keresést végez (mindig a javulás felé lép), de az elnyújtott, rosszul kondicionált felületeken tapasztalható cikcakkos lelassulása miatt a modern numerikus szoftverekben gyakran kombinálják magasabb rendű eljárásokkal (például konjugált gradiens vagy kvázi-Newton módszerekkel).