**3.5. Szimultán egyenletrendszerek**



## 1. A szimultán egyenletrendszer fogalma és motivációja

A mérnöki és tudományos számítások során gyakran előfordul, hogy olyan lineáris egyenletrendszereket kell megoldanunk, amelyeknek **a bal oldali együtthatómátrixa ($\mathbf{A}$) teljesen azonos, de a jobb oldali szabadtag-vektorok ($\mathbf{b}^{(i)}$) különbözőek**. Az ilyen rendszereket nevezzük szimultán lineáris egyenletrendszereknek.

Ha külön-külön oldanánk meg mind az $m$ darab egyenletrendszert:


$$\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}, \qquad i = 1, \ldots, m \tag{3.11}$$


akkor feleslegesen ismételnénk meg ugyanazokat az eliminációs lépéseket, hiszen a főelemek kiválasztása és a sorok cseréjének menete kizárólag az $\mathbf{A}$ együtthatómátrix szerkezetétől függ, függetlenül a jobb oldali vektoroktól.



## 2. Mátrixos kompakt modell ($\mathbf{AX} = \mathbf{B}$)

A feladatot hatékonyan összefoghatjuk egyetlen **mátrixegyenletté**:

$$\mathbf{A}\mathbf{X} = \mathbf{B} \tag{3.12}$$

Ahol:

* $\mathbf{A} \in \mathbb{R}^{n \times n}$ a közös együtthatómátrix.
* $\mathbf{B} \in \mathbb{R}^{n \times m}$ egy olyan téglalap alakú mátrix, amelynek oszlopai pontosan a különböző jobb oldali szabadtag-vektorok: $\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$.
* $\mathbf{X} \in \mathbb{R}^{n \times m}$ a keresett **megoldásmátrix**, amelynek oszlopai az egyes részrendszerek egyedi megoldásvektorai lesznek: $\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$.



## 3. Megoldás mátrix-kiterjesztéssel és eliminációval

A szimultán feladatot úgy oldjuk meg, hogy az $(\mathbf{A}, \mathbf{b})$ sémát kiterjesztve egyetlen **$n \times (n + m)$ dimenziós kibővített mátrixot** hozunk létre, ahol az $\mathbf{A}$ mátrix mellé jobbra a teljes $\mathbf{B}$ mátrixot odaláncoljuk:

$$(\mathbf{A}, \mathbf{B}) = \left( \mathbf{A}, \mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)} \right)$$

Ezen a kibővített mátrixon hajtjuk végre a kiválasztott közvetlen eliminációs eljárást:

### A) Gauss–Jordan-elimináció alkalmazása (Ajánlott verzió)

Ha a kiterjesztett blokkon Gauss–Jordan-eliminációt végzünk (főelemkiválasztással kiegészítve a stabilitásért), a bal oldali $\mathbf{A}$ részt lépésről lépésre **egységmátrixszá ($\mathbf{I}$)** redukáljuk. Ezzel párhuzamosan a jobb oldali blokk műveletei automatikusan elvégzik a számításokat, így a folyamat végén a jobb oldalon **közvetlenül a keresett $\mathbf{X}$ megoldásmátrix jelenik meg**:

$$(\mathbf{A}, \mathbf{B}) \quad \sim \quad \dots \quad \sim \quad (\mathbf{I}, \mathbf{X})$$

### B) Hagyományos Gauss-elimináció alkalmazása

Ha a hagyományos Gauss-módszert használjuk, a kibővített mátrix bal oldala felülről trianguláris (háromszög) alakká alakul. Ebben az esetben a megoldásmátrix oszlopait a legvégén $m$ darab egymástól független, de gyors *visszahelyettesítési (backward substitution)* lépéssel kapjuk meg.



## 4. Műveletigény és Időkomplexitás

Nagy méretű rendszerek esetén az aszimptotikus lebegőpontos szorzások és osztások száma a kiterjesztett blokkokon bizonyíthatóan az alábbiak szerint alakul:

* **Kiterjesztett Gauss-elimináció műveletigénye:**

$$\text{Műveletigény} = \frac{1}{3}n^3 + mn^2 - \frac{1}{3}n \tag{3.13}$$


* **Kiterjesztett Gauss–Jordan-elimináció műveletigénye:**

$$\text{Műveletigény} = \frac{1}{2}n^3 + mn^2 - \frac{1}{2}n \tag{3.14}$$



### Gazdaságossági következmény:

Figyeljük meg a képletekben szereplő **$mn^2$** tagot! Ha a feladatot naiv módon $m$ darab teljesen különálló egyenletrendszerként oldanánk meg, a teljes költség Gauss-elimináció esetén $m \cdot (\frac{1}{3}n^3) = \frac{m}{3}n^3$ lenne. Nagy méretű mátrixoknál ($n \gg m$) az $n^3$-ös nagyságrend sokkal gyorsabban növekszik, mint az $n^2$-es.

A szimultán kiterjesztésnek köszönhetően a drága, kubikus költségű eliminációs fázist ($\frac{1}{3}n^3$ vagy $\frac{1}{2}n^3$) **mindössze egyszer** kell lefuttatni a közös együtthatókon, a plusz jobb oldalak pedig csupán egy jóval olcsóbb, kvadratikus ($mn^2$) többletköltséget jelentenek.



## 5. Kapcsolat a Mátrixinvertálással

A fejezet rögzíti, hogy a mátrixinvertálás ($\mathbf{A}^{-1}$ kiszámítása) valójában a szimultán egyenletrendszer egy speciális esete.

Ha a jobb oldali szabadtag-blokknak pontosan az $\mathbf{B} = \mathbf{I}$ egységmátrixot választjuk (ahol $m = n$), akkor az $\mathbf{A}\mathbf{X} = \mathbf{I}$ mátrixegyenletet kapjuk, amelynek megoldása definíció szerint a mátrix inverze ($\mathbf{X} = \mathbf{A}^{-1}$). A szimultán sémát futtatva az $(\mathbf{A}, \mathbf{I}) \sim (\mathbf{I}, \mathbf{A}^{-1})$ transzformációval közvetlenül előállítható a teljes inverz mátrix.