**9.3. Nemlineáris függvény illesztése** 



## 1. A probléma háttere: Nemlineáris normálegyenletek

A legkisebb négyzetek módszere könnyen alkalmazható olyan görbeillesztési feladatokra, ahol az ismeretlen paraméterek lineárisan szerepelnek a formulában (mint az egyenes- vagy polinomillesztés esetén), mert ekkor a parciális deriváltakból kapott Gauss-féle normálegyenletek egy jól kezelhető lineáris egyenletrendszert alkotnak.

Azonban, ha a paraméterek nemlineárisan jelennek meg, a helyzet drasztikusan megváltozik. Tekintsünk egy $y = b e^{ax}$ alakú exponenciális függvény illesztését az $(x_i, y_i)$ adatpontokra. A minimalizálandó négyzetes hiba-függvény:


$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$$

Ha ezt a függvényt parciálisan deriváljuk a meghatározandó $a$ és $b$ paraméterek szerint, az alábbi kritikus egyenletrendszert kapjuk:


$$\begin{aligned} 2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\ 2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0 \end{aligned}$$

* **A probléma:** Ez a rendszer **nemlineáris**, így analitikusan (képlettel) nem oldható meg. Nem látható könnyen a megoldások száma sem, és tiszta numerikus megoldása (pl. többváltozós Newton-módszerrel) bonyolult és számításigényes lenne.



## 2. A linearizáció módszere

Bizonyos speciális nemlineáris függvénytípusok esetén a fenti technikai nehézség egy okos matematikai trükkel, a **linearizációval** teljesen kiküszöbölhető. A módszer lényege, hogy a nemlineáris összefüggés mindkét oldalának logaritmálása vagy algebrai transzformációja révén áttérünk egy olyan új változópárra, amelyek között már **lineáris kapcsolat** áll fenn.

A fejezet két kiemelt nemlineáris modellt mutat be:

### A) Exponenciális modell: $y = b e^{ax}$

Vegyük mindkét oldal természetes alapú logaritmusát:


$$\ln y = \ln(b e^{ax}) \implies \ln y = \ln b + ax$$


Vezessük be az új transzformált változókat és paramétereket:


$$X := x, \qquad Y := \ln y, \qquad A := a, \qquad B := \ln b$$


Ezáltal a feladat leegyszerűsödik egy klasszikus lineáris egyenesillesztésre az $(X_i, Y_i) = (x_i, \ln y_i)$ transzformált adatpontokra:


$$Y = AX + B$$

### B) Hatványfüggvény modell: $y = b x^a$

Feltételezve, hogy $x > 0$, logaritmáljuk mindkét oldalt:


$$\ln y = \ln(b x^a) \implies \ln y = a \ln x + \ln b$$


Az új változók definíciója ebben az esetben:


$$X := \ln x, \qquad Y := \ln y, \qquad A := a, \qquad B := \ln b$$


Így az $(\ln x_i, \ln y_i)$ rácspontokra illeszthető a jól ismert $Y = AX + B$ egyenes.



## 3. Gyakorlati számítás és visszatérés az eredeti paraméterekhez

Miután a transzformált pontokra felírtuk és megoldottuk a $2 \times 2$-es Gauss-féle lineáris normálegyenlet-rendszert, megkapjuk az $A$ és $B$ értékeket. Az eredeti keresett függvény paramétereit az inverz transzformációval kapjuk vissza:


$$a = A \qquad \text{és} \qquad b = e^B \tag{9.5}$$



## 4. Mintapélda: Hatványfüggvény illesztése (9.5. Példa)

A jegyzet részletesen bemutatja az eljárást egy 5 pontból álló adatsoron ($n=4$) az $y = bx^a$ modellre:

* Kiszámítják az alappontok és mérések logaritmusát ($\ln x_i, \ln y_i$), valamint a normálegyenlethez szükséges oszlopösszegeket.
* A kapott összegeket behelyettesítve a lineáris rendszer:

$$\begin{aligned} 2.691393A + 1.727221B &= 2.032673 \\ 1.727221A + 5B &= 1.783485 \end{aligned}$$


* A rendszer megoldása: $A = 0.676257$, $B = 0.123088$.
* Visszatérés az eredeti együtthatókhoz: $a = 0.676257$ és $b = e^{0.123088} = 1.130984$.
* A kapott optimális nemlineáris görbe egyenlete:

$$y = 1.130984 \cdot x^{0.676257}$$





## 5. Kritikus megjegyzés a hibákról (A módszer torzítása)

A fejezet legfontosabb elméleti tanulsága, hogy a linearizált illesztés **matematikailag nem teljesen egyezik meg az eredeti nemlineáris probléma közvetlen minimalizálásával**.

* A logaritmálással valójában nem az eredeti függő változó $y_i - g(x_i)$ eltéréseit minimalizáljuk, hanem a logaritmikus **$\ln y_i - \ln g(x_i)$** távolságokat. Ez a logaritmusfüggvény tulajdonságai miatt átértékeli (eltorzítja) a hibák súlyát az egyes tartományokban.
* A mintapéldában a linearizált térben mért négyzetes hiba rendkívül kicsi ($0.007279$), de ha a kapott görbét visszahelyettesítjük a transzformálatlan, eredeti hibafüggvénybe, ott a négyzetes hiba már nagyobb ($0.019616$).

> **Összegzés:** A linearizáció egy rendkívül gyors, elegáns és jól programozható mérnöki eszköz, mert kiküszöböli a nemlineáris egyenletrendszerek megoldását. Alkalmazásakor azonban szem előtt kell tartani, hogy a kapott paraméterek csupán egy nagyon jó közelítést adnak, de nem feltétlenül egyeznek meg az eredeti feladat abszolút (globális) minimumhelyével.