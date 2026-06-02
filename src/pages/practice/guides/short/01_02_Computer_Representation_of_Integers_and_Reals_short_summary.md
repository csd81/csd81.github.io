**1.2. Egész és valós számok tárolása** 


## 1. Egész számok tárolása (Integer Representation)

Egy tetszőleges $b$ alapú számrendszerben felírt $m$ jegyű pozitív egész szám értéke:


$$I = (a_{m-1}a_{m-2}\ldots a_1 a_0)_b = \sum_{i=0}^{m-1} a_i b^i$$


Az $m$ jegyen ábrázolható legnagyobb egész szám értéke $I_{\max} = b^m - 1$. Mivel a számítógépek kettes ($b=2$, bináris) számrendszert használnak, $m$ biten összesen $2^m$ darab különböző egész szám ábrázolható (alapesetben $0$-tól $2^m-1$-ig).

A **negatív egész számok** tárolására két fő módszert alkalmazhatunk:

### A) Direkt vagy egyenes kód (Sign-magnitude representation)

* A legbaloldalibb bitet (legmagasabb helyi értékű bit) **előjelbitnek** foglaljuk le: értéke `0` a pozitív, és `1` a negatív számok esetén.
* A fennmaradó $m-1$ biten a szám abszolút értékét tároljuk binárisan.
* **Hátránya:** A $0$ számnak kétféle ábrázolása lesz (pozitív és negatív nulla), ami bonyolítja az aritmetikai áramkörök tervezését.

### B) Kettes komplemens kód (Two's-complement representation)

A modern számítógépekben használt eljárás. Ha egy $-J$ negatív számot akarunk tárolni, akkor a $2^m - J$ érték kettes számrendszerbeli alakját mentjük el.

* **Gyakorlati előállítása:** Vesszük a szám abszolút értékének bináris alakját, minden bitjét az ellenkezőjére váltjuk (az `1`-eseket `0`-ra, a `0`-ásokat `1`-esre cseréljük), majd a kapott számhoz hozzáadunk `1`-et.
* **Előnye:** A kivonás művelete ($I_1 - I_2$) egyszerű összeadásra vezethető vissza: elegendő $I_1$-hez hozzáadni $I_2$ kettes komplemensét, majd megtartani a kapott összeg utolsó $m$ bitjét.



## 2. Valós (lebegőpontos) számok normál alakja

A nem-egész valós számok tárolásához a számokat először **normál alakra** kell hozni. Egy $x \neq 0$ valós szám $b$ alapra vonatkozó normál alakja:


$$x = \pm m \cdot b^k, \qquad \text{ahol} \quad 1 \leq m < b$$

* **$m$:** a szám **mantisszája**.
* **$k$:** a szám **kitevője** (karakterisztikája).

Kettes alapú számrendszerben ($b=2$) a mantissza első jegye a definíció miatt ($1 \leq m < 2$) **mindig pontosan 1**. Ezt a fix `1`-est a számítógépek memóriamegtakarítás céljából nem tárolják el külön (ez az úgynevezett *rejtett bit* vagy *hidden bit*).



## 3. Gépi epszilon (Machine Epsilon) és kerekítési hiba

A valós számokat a hardver korlátai miatt a számítógép csak egy véges lebegőpontos részhalmazba (gépi számok halmaza, $\mathrm{fl}(x)$) tudja leképezni.

### Abszolút és relatív hiba

Ha $x$ a pontos érték és $\tilde{x}$ annak közelítése, akkor:

* **Abszolút hiba:** $|x - \tilde{x}|$
* **Relatív hiba:** $\dfrac{|x - \tilde{x}|}{|x|} \qquad (x \neq 0)$

### A gépi epszilon ($\varepsilon_{\mathrm{m}}$) definíciója

> **Gépi epszilon:** A legkisebb olyan $2$-hatvány (bináris tárolás esetén), amelyre a számítógépen az **$1 + \varepsilon_{\mathrm{m}} > 1$** egyenlőtlenség még igazolhatóan teljesül. Ennél kisebb szám hozzáadásakor a gép a korlátos mantisszahossz miatt eldobja a frakciót, és az eredmény pontosan $1$ marad.

### 1.10. Tétel (Kerekítés relatív hibája)

Ha a valós számokat kerekítve tároljuk a számítógépen, akkor a tárolásból fakadó relatív hiba felülről korlátos a gépi epszilon felével:


$$\frac{|x - \mathrm{fl}(x)|}{|x|} \leq \frac{1}{2}\varepsilon_{\mathrm{m}}$$



## 4. Kerekítési hibák halmozódása (Aritmetikai csapdák)

A fejezet egy részletes példán (4-jegyes decimális aritmetika) keresztül mutatja be, hogy a véges jeggyel dolgozó lebegőpontos számábrázolás milyen matematikai anomáliákhoz vezethet a műveletek elvégzése során.

### A) Kivonási jegyvesztés (Cancellation / Kiejtési hiba)

Ha két egymáshoz nagyon közeli lebegőpontos számot vonunk ki egymásból, a legmagasabb helyi értékű értékes jegyek kiesnek. A kapott különbség mantisszájának végére a gép nullákat (vagy véletlenszerű biteket) kénytelen behúzni, ami a relatív hiba drasztikus megugrását és jelentős pontosságvesztést okoz.

### B) Elnyelés (Absorption)

Ha egy nagyon nagy számhoz egy hozzá képest elenyészően kicsi számot adunk hozzá, a kis szám értékes jegyei a normalizálás (a tizedespontok egymáshoz igazítása) során teljesen kicsúsznak a mantisszából.

* **Példa:** 4-jegyes kerekített aritmetikában:

$$20340 + 1.043 = 20341.043 \xrightarrow{\text{kerekítve}} 20340$$


* A hozzáadott $1.043$ hatása teljesen **elnyelődött**, mintha hozzá sem adtuk volna a kifejezéshez.

### C) Az asszociativitás sérülése

Mivel a lebegőpontos összeadásoknál felléphet az elnyelés és a kerekítés, a műveletek elvégzésének **sorrendje** kritikus. Gépi számok esetén az összeadás **nem asszociatív**: $(a + b) + c \neq a + (b + c)$. A hiba minimalizálása érdekében a numerikus algoritmusokban a számokat érdemes a magnitúdójuk (abszolút értékük) szerint növekvő sorrendbe rendezve összegezni.