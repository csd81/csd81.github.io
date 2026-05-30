# 9. fejezet

# Legkisebb négyzetek módszere

Tegyük fel, hogy egy fizikai folyamatot egy $g$ függvénnyel írhatunk le, amelynek ismerjük vagy feltételezzük az általános képletét, de bizonyos paraméterek a képletben ismeretlenek. A paramétereket egy $\mathbf{a}$ vektorban tárolva a $g(x; \mathbf{a})$ jelöléssel hangsúlyozhatjuk, hogy $g$ az $\mathbf{a}$ paraméterektől függ. Feltesszük, hogy vannak $y_i$ ($i = 0, 1, \ldots, n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban. Tegyük fel a példa kedvéért, hogy tudjuk vagy sejtjük, hogy $g$ egy másodfokú polinom. Ekkor $g$-t 3 paraméter, az együtthatói határozzák meg. Ha 3-nál több mérési értékünk van, akkor általában már nem tudunk egy parabolát rajzolni a pontokon keresztül (a mérési hibák miatt az adataink valószínűleg nem a parabola grafikonján helyezkednek el). Ezért a célunk az, hogy keressük meg azokat a paraméter értékeket, amelyhez tartozó $g$ függvény a "legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk *görbeillesztésnek*. Nem nyilvánvaló, hogy mit értsünk azon, hogy a függvény "legkevésbé" tér el az adatoktól. Attól függően, hogyan definiáljuk az illesztés hibáját, más és más matematikai feladatként fogalmazhatjuk meg a görbeillesztés feladatát. Lehetséges az illesztés hibáját mérni az

$$F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| : i = 0, 1, \ldots, n\}$$

vagy az

$$F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|$$

képletekkel. Mindkettőt természetes választásnak érezhetjük, hiszen ha a képlet értéke kis szám, akkor a $g(x_i)$ függvényérték és az $y_i$ mérési érték eltérése is kicsi lesz minden pontban. A probléma az, hogy ha $F_1(\mathbf{a})$-t ill. $F_2(\mathbf{a})$-t szeretnénk minimalizálni $\mathbf{a}$ szerint, akkor ez matematikailag nehéz feladat amiatt, hogy egyik függvény sem differenciálható $\mathbf{a}$ szerint. Ezt a technikai problémát kiküszöbölhetjük azzal, ha az

$$F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2,$$

ún. négyzetes hibával mérjük a függvény és a mérési adatok eltérését. A matematikai feladat tehát az, hogy minimalizáljuk az $F(\mathbf{a})$ függvényt, és a minimumhelyhez tartozó paraméter értékekkel definiált $g(x; \mathbf{a})$ függvényt tekintjük a pontokra legjobban illeszkedő adott típusú függvénynek. Ezt a módszert hívjuk a *legkisebb négyzetek módszerének*.

A négyzetes hiba segítségével történő görbeillesztést tanulmányozzuk ebben a fejezetben. Először lineáris függvény, majd tetszőleges polinom, és végül néhány speciális nemlineáris függvény és trigonometrikus polinom illesztésével foglalkozunk. A fejezet végén rosszul definiált lineáris egyenletrendszerek legkisebb négyzetes megoldását vizsgáljuk.

## 9.1. Egyenes illesztése

Adottak $(x_i, y_i)$, $i = 0, 1, \ldots, n$ pontok, ahol $x_i$-k páronként különböznek. Keresünk egy olyan $g(x) = ax + b$ lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése, azaz

$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2 \tag{9.1}$$

minimális. Az így definiált $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint, és

$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i).
\end{aligned} \tag{9.2}$$

A (9.2) parciális deriváltakat 0-val egyenlővé téve, átrendezés után kapjuk az ún. *Gauss-féle normálegyenleteket*.

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i.
\end{aligned} \tag{9.3}$$

Érdemes hangsúlyozni, hogy a második egyenletben $b$ együtthatója, $n+1$ az adott mérési adatok számát adja vissza. Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Az egyenletrendszer akkor és csak akkor oldható meg, ha az együtthatómátrix determinánsa,

$$d := \det \begin{pmatrix} \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & n + 1 \end{pmatrix} = (n + 1)\sum_{i=0}^{n} x_i^2 - \left(\sum_{i=0}^{n} x_i\right)^2$$

nem nulla. A Cauchy-Bunyakovszkij-Schwarz egyenlőtlenség (2.42. tétel) szerint

$$\left(\sum_{i=0}^{n} x_i\right)^2 = \left(\sum_{i=0}^{n} 1 \cdot x_i\right)^2 \le \sum_{i=0}^{n} 1 \sum_{i=0}^{n} x_i^2 = (n + 1)\sum_{i=0}^{n} x_i^2.$$

Ebből következik, hogy $d \ge 0$. Ha feltesszük, hogy legalább két $x_i$ különbözik, akkor a 2.42. tétel szerint egyenlőtlenség nem állhat fenn, azaz $d > 0$. Ezért a (9.3) egyenletrendszernek pontosan egy megoldása van, amely a következő alakban adható meg:

$$\begin{aligned}
\bar{a} &= \frac{(n + 1)\left(\sum_{i=0}^{n} x_i y_i\right) - \left(\sum_{i=0}^{n} x_i\right)\left(\sum_{i=0}^{n} y_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}, \\
\bar{b} &= \frac{\left(\sum_{i=0}^{n} x_i^2\right)\left(\sum_{i=0}^{n} y_i\right) - \left(\sum_{i=0}^{n} x_i y_i\right)\left(\sum_{i=0}^{n} x_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}.
\end{aligned}$$

A 8.2. tétel szerint $F$-nek az $(\bar{a}, \bar{b})$ pontban lokális szélsőértéke van, ha

$$D(\bar{a}, \bar{b}) = \frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) \cdot \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) - \left(\frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b})\right)^2 > 0.$$

Könnyen kiszámítható, hogy

$$\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i^2, \quad \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) = 2(n + 1), \quad \frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i.$$

Ezért

$$D(\bar{a}, \bar{b}) = 4(n + 1)\sum_{i=0}^{n} x_i^2 - 4\left(\sum_{i=0}^{n} x_i\right)^2 = 4d,$$

amiről már megmutattuk, hogy pozitív. Mivel $\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) > 0$, ezért a 8.2. tételből következik, hogy az $F$ függvénynek lokális minimuma van az $(\bar{a}, \bar{b})$ pontban, ami a 8.11. következmény szerint egyben globális minimum is. Ezzel beláttuk a következő tételt:

**9.1. tétel.** Adottak az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \ne x_j$. Ekkor a

$$\min_{(a,b)\in\mathbb{R}^2} \sum_{i=0}^{n} (ax_i + b - y_i)^2$$

szélsőérték feladatnak létezik egyértelmű megoldása, amely teljesíti a (9.1) normálegyenleteket.

**9.2. példa.** Tekintsük a következő adatokat:

| $x_i$ | -1.0 | 1.0 | 2.5 | 3.0 | 4.0 | 4.5 | 6.0 |
|-------|------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.0  | 1.2 | 1.9 | 2.5 | 3.1 | 3.2 | 4.5 |

Keressük meg az adatokra legjobban illeszkedő egyenest! Kézi számoláskor írjuk le az adatokat a 9.1. táblázatban látható módon! Külön oszlopban kiszámoljuk az $x_i^2$ és $x_i y_i$ számokat, ill. az utolsó sorban az oszlopban szereplő számok összegét. Ezen összegeket használjuk a (9.3) normálegyenletek felírásához:

$$\begin{aligned}
89.5a + 20.0b &= 67.25 \\
20.0a + 7b &= 16.4.
\end{aligned}$$

amelynek megoldása $a = 0.630243$ és $b = 0.542163$. A megadott pontok és az $y = 0.630243x + 0.542163$ egyenes grafikonja a 9.1. ábrán látható. Az illesztés hibája:

$$\sum_{i=0}^{6} (0.630243 x_i + 0.542163 - y_i)^2 = 0.124691.$$

$\square$

**9.1. táblázat. Egyenes illesztése**

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
|-------|-------|---------|-----------|
| -1.0  | 0.0   | 1.00    | 0.00      |
| 1.0   | 1.2   | 1.00    | 1.20      |
| 2.5   | 1.9   | 6.25    | 4.75      |
| 3.0   | 2.5   | 9.00    | 7.50      |
| 4.0   | 3.1   | 16.00   | 12.40     |
| 4.5   | 3.2   | 20.25   | 14.40     |
| 6.0   | 4.5   | 36.00   | 27.00     |
| 20.0  | 16.4  | 89.50   | 67.25     |

### Feladatok

1. Illesszen egyenest a megadott adatokra és számítsa ki az illesztés hibáját:

   (a)

   | $x_i$ | 0.0  | 1.0 | 1.5 | 2.0 | 3.0 |
   |-------|------|-----|-----|-----|-----|
   | $y_i$ | -1.8 | 1.3 | 2.5 | 3.9 | 8.3 |

   (b)

   | $x_i$ | -1.0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0  | 6.0  |
   |-------|------|-----|-----|-----|-----|------|------|
   | $y_i$ | 4.2  | 2.1 | 1.3 | 2.1 | 2.8 | -2.1 | -3.0 |

   (c)

   | $x_i$ | -1.0 | 1.0 | 3.0 | 5.0  | 9.0  | 10.0 | 13.0 |
   |-------|------|-----|-----|------|------|------|------|
   | $y_i$ | -0.1 | 3.4 | 7.3 | 15.1 | 29.1 | 35.6 | 56.3 |

> **9.1. ábra.** Egyenes illesztése: $y = 0.630243x + 0.542163$

## 9.2. Polinom illesztése

Ebben a szakaszban $m$-edfokú polinom illesztését vizsgáljuk megadott $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontokra, azaz keresünk olyan $a_m, a_{m-1}, \ldots, a_0$ számokat, amelyek minimalizálják az

$$F(a_m, a_{m-1}, \ldots, a_1, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$

$m + 1$-változós függvényt. Ha $n \le m$, akkor a megadott pontokon keresztül rajzolható $m$-edfokú polinom ($F$ minimális értéke 0). Ebben az esetben interpolációval meghatározhatók az együtthatók. Így az $m < n$ esetre érdekes vizsgálnunk a feladatot, hiszen ekkor $F$ nem veszi fel a 0 értéket.

A 8.2. tétel alapján az $F$ függvénynek ott lehet csak szélsőértéke, ahol a parciális deriváltjai nullák:

$$\begin{aligned}
\frac{\partial F}{\partial a_m}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^m, \\
\frac{\partial F}{\partial a_{m-1}}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^{m-1}, \\
&\vdots \\
\frac{\partial F}{\partial a_0}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i).
\end{aligned}$$

Ezeket nullával egyenlővé téve és átrendezve a kapott egyenleteket

$$\begin{aligned}
a_m\sum_{i=0}^{n} x_i^{2m} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-1} + \cdots + a_1\sum_{i=0}^{n} x_i^{m+1} + a_0\sum_{i=0}^{n} x_i^m &= \sum_{i=0}^{n} x_i^m y_i \\
a_m\sum_{i=0}^{n} x_i^{2m-1} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-2} + \cdots + a_1\sum_{i=0}^{n} x_i^m + a_0\sum_{i=0}^{n} x_i^{m-1} &= \sum_{i=0}^{n} x_i^{m-1} y_i \\
&\vdots \\
a_m\sum_{i=0}^{n} x_i^{m+1} + a_{m-1}\sum_{i=0}^{n} x_i^m + \cdots + a_1\sum_{i=0}^{n} x_i^2 + a_0\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\
a_m\sum_{i=0}^{n} x_i^m + a_{m-1}\sum_{i=0}^{n} x_i^{m-1} + \cdots + a_1\sum_{i=0}^{n} x_i + a_0(n + 1) &= \sum_{i=0}^{n} y_i
\end{aligned} \tag{9.4}$$

Most belátjuk, hogy a (9.4) lineáris egyenletrendszernek létezik egyértelmű megoldása, azaz az

$$\mathbf{A} = \begin{pmatrix}
\sum_{i=0}^{n} x_i^{2m} & \sum_{i=0}^{n} x_i^{2m-1} & \cdots & \sum_{i=0}^{n} x_i^{m+1} & \sum_{i=0}^{n} x_i^m \\
\sum_{i=0}^{n} x_i^{2m-1} & \sum_{i=0}^{n} x_i^{2m-2} & \cdots & \sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} \\
\vdots & \vdots & & \vdots & \vdots \\
\sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} & \cdots & \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} 1
\end{pmatrix}$$

együtthatómátrix invertálható. Ehhez a 3.9. tétel szerint elegendő megmutatni, hogy $\mathbf{A}$ pozitív definit. Az $\mathbf{A}$ mátrix $jk$-adik elemét a $\sum_{i=0}^{n} x_i^{2m+2-j-k}$ képlettel adhatjuk meg, ahol $j, k = 1, 2, \ldots, m + 1$. Legyen $\mathbf{z} = (z_1, z_2, \ldots, z_{m+1}) \in \mathbb{R}^{m+1}$. Egyszerű átalakításokkal adódik

$$\begin{aligned}
\mathbf{z}^T \mathbf{A} \mathbf{z} &= \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} \sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k \\
&= \sum_{i=0}^{n} \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} x_i^{m+1-j} z_j x_i^{m+1-k} z_k \\
&= \sum_{i=0}^{n} \left(\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\right)^2.
\end{aligned}$$

Tegyük fel, hogy $\mathbf{z}^T \mathbf{A} \mathbf{z} = 0$. Ekkor az előbbi számolásból következik, hogy $\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ minden $i = 0, 1, \ldots, n$-re. Eszerint ha az $x_i$ alappontok páronként különböznek, akkor a $p(x) := \sum_{j=1}^{m+1} z_j x^{m+1-j}$ $m$-edfokú polinomnak $n + 1$ különböző gyöke van. Ha feltesszük, hogy $m \le n$, akkor az algebra alaptétele szerint ebből következik, hogy $p$ azonosan nulla, azaz $z_j = 0$ minden $j = 1, 2, \ldots, m + 1$-re. Ezzel beláttuk, hogy $\mathbf{A}$ pozitív definit, és így a (9.4) egyenletrendszernek létezik egyértelmű megoldása, amit $\bar{\mathbf{a}}$-val jelölünk. Mivel

$$\frac{\partial^2 F}{\partial a_j\, \partial a_k}(\bar{\mathbf{a}}) = 2\sum_{i=0}^{n} x_i^{j+k},$$

ezért $F''(\bar{\mathbf{a}}) = 2\mathbf{A}$. Ebből következik a 8.1. tétel alapján, hogy $F$-nek $\bar{\mathbf{a}}$-ban lokális minimuma van, és mivel $F$ kvadratikus függvény, ezért ez globális minimum is. Az eredményeinket a következő tételben összegezhetjük:

**9.3. tétel.** Adottak az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \le n$. Ekkor a

$$\min_{(a_m,\ldots,a_0)\in\mathbb{R}^{m+1}} \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$

szélsőérték feladatnak létezik egyértelmű megoldása, amely teljesíti a (9.4) normálegyenleteket.

**9.4. példa.** Illesszünk parabolát az

| $x_i$ | -1.0 | -0.5 | 0.0 | 1.0 | 2.0 | 3.0  | 3.5  |
|-------|------|------|-----|-----|-----|------|------|
| $y_i$ | 1.6  | 1.7  | 1.9 | 1.5 | 0.6 | -0.1 | -1.0 |

adatokra! Kézi számoláskor a 9.2. táblázatban látható módon helyezzük el az adatokat. Az utolsó sorban szereplő összegeket használjuk a (9.4) egyenletrendszerhez:

$$\begin{aligned}
249.1250a + 77.750b + 27.50c &= -7.225 \\
77.750a + 27.50b + 8.0c &= -3.55 \\
27.50a + 8.0b + 7c &= 6.2.
\end{aligned}$$

amelyet megoldva kapjuk, hogy $a = -0.196021$, $b = -0.084748$ és $c = 1.752653$. A megadott pontokat és a számított parabola grafikonját a 9.2. ábrán láthatjuk. Az illesztés hibája

$$\sum_{i=0}^{6} (-0.196021 x_i^2 - 0.084748 x_i + 1.752653 - y_i)^2 = 0.0964456.$$

$\square$

**9.2. táblázat. Parabola illesztése**

| $x_i$ | $y_i$ | $x_i^4$  | $x_i^3$ | $x_i^2$ | $x_i^2 y_i$ | $x_i y_i$ |
|-------|-------|----------|---------|---------|-------------|-----------|
| -1.0  | 1.4   | 1.0000   | -1.000  | 1.00    | 1.400       | -1.40     |
| 0.0   | 1.9   | 0.0000   | 0.000   | 0.00    | 0.000       | 0.00      |
| 0.5   | 1.6   | 0.0625   | 0.125   | 0.25    | 0.400       | 0.80      |
| 1.0   | 1.7   | 1.0000   | 1.000   | 1.00    | 1.700       | 1.70      |
| 2.0   | 0.2   | 16.0000  | 8.000   | 4.00    | 0.800       | 0.40      |
| 2.5   | -0.1  | 39.0625  | 15.625  | 6.25    | -0.625      | -0.25     |
| 3.0   | -2.0  | 81.0000  | 27.000  | 9.00    | -18.000     | -6.00     |
| 8.0   | 4.7   | 138.1250 | 50.750  | 21.50   | -14.325     | -4.75     |

### Feladatok

1. Illesszen parabolát a megadott adatokra és számítsa ki az illesztés hibáját:

   (a)

   | $x_i$ | -2.0 | -1.0 | 1.0 | 2.0  | 3.0  |
   |-------|------|------|-----|------|------|
   | $y_i$ | -2.1 | 1.4  | 0.5 | -2.5 | -7.2 |

   (b)

   | $x_i$ | 1.0 | 2.0 | 3.0  | 4.0 | 5.0 | 6.0 |
   |-------|-----|-----|------|-----|-----|-----|
   | $y_i$ | 2.5 | 1.2 | -2.0 | 3.9 | 6.2 | 8.3 |

> **9.2. ábra.** Parabola illesztése: $y = -0.196021x^2 - 0.084748x + 1.752653$

## 9.3. Nemlineáris függvény illesztése

Az előző szakaszokban vizsgált módszert alkalmazhatjuk olyan nemlineáris függvény illesztésre is, ahol az ismeretlen paraméterek lineárisan szerepelnek, mert ekkor a kapott normálegyenletek lineáris egyenletek lesznek. Az általános esetben viszont a normálegyenletek is lehetnek nemlineárisak. Nézzünk egy példát. Tegyük fel, hogy egy $b e^{ax}$ alakú exponenciális függvényt szeretnénk illeszteni az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontokra. A négyzetes hibát felírva az

$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$$

függvényt kapjuk, amelynek kritikus pontjait a

$$\begin{aligned}
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0
\end{aligned}$$

egyenletrendszer megoldásai adják. Ezt már analitikusan nem tudjuk megoldani, és azt sem könnyű látni, hogy hány megoldás van, és ha több van, melyik megoldás fogja minimalizálni $F$-et. Természetesen meg tudjuk oldani az egyenletrendszert numerikusan, ill. a 8. fejezetben ismertetett numerikus módszerek segítségével tudjuk közelíteni $F$ minimumát.

Az előbb vázolt számolás helyett alkalmazható a következő, ún. *linearizációs módszer*: Vegyük észre, hogy ha az $y = b e^{ax}$ egyenlet mindkét oldalának vesszük a logaritmusát, akkor az $\ln y = \ln b + ax$ összefüggést kapjuk, ahol $\ln y$ lineárisan függ $x$-től. Vezessünk be új változókat: $X := x$, $Y := \ln y$, $A := a$ és $B := \ln b$. Illesszünk tehát $Y = AX + B$ alakú egyenest az adott $(x_i, \ln y_i)$ adatokra. Legyenek $\bar{A}$ és $\bar{B}$ az egyenes illesztésekor kapott konstansok. Ekkor a $\bar{b} e^{\bar{a}x}$ függvényt tekintjük az $(x_i, y_i)$ pontokra legjobban illeszkedő exponenciális függvénynek, ahol $\bar{a} = \bar{A}$, $\bar{b} = e^{\bar{B}}$. Megjegyezzük, hogy a linearizációs módszerrel illesztett függvény természetesen nem megoldása az eredeti nemlineáris illesztési feladatnak, viszont könnyű kiszámolni, így a gyakorlatban ezt az illesztést célszerű alkalmazni.

**9.5. példa.** Illesszünk $b e^{ax}$ alakú függvényt az

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.3 | 0.7 | 0.9 | 1.2 | 1.8 | 2.7 |

pontokra! A linearizált adatok a 9.3. táblázatban láthatók. Az egyenes illesztésekor kapott

$$\begin{aligned}
32.25A + 11.5B &= 5.586294 \\
11.5A + 6B &= 0.097352,
\end{aligned}$$

normálegyenletek megoldása $A = 0.528951$ és $B = -0.997597$, azaz a linearizálás módszerével illesztett függvény képlete $0.368765 e^{0.528951x}$. Ennek a függvénynek és az adatoknak a grafikonja a 9.3. ábrán látható. A linearizált illesztés hibája

$$\sum_{i=0}^{5} (0.528951 x_i - 0.997597 - \ln y_i)^2 = 0.095396,$$

az eredeti hiba a kapott függvényre pedig

$$\sum_{i=0}^{5} (0.368765 e^{0.528951 x_i} - y_i)^2 = 0.165543.$$

$\square$

**9.3. táblázat. $b e^{ax}$ alakú függvény illesztése**

| $x_i$ | $y_i$ | $\ln y_i$  | $x_i^2$ | $x_i \ln y_i$ |
|-------|-------|------------|---------|---------------|
| 0.0   | 0.3   | -1.203973  | 0.00    | 0.000000      |
| 1.0   | 0.7   | -0.356675  | 1.00    | -0.356675     |
| 1.5   | 0.9   | -0.105361  | 2.25    | -0.158041     |
| 2.0   | 1.2   | 0.182322   | 4.00    | 0.364643      |
| 3.0   | 1.8   | 0.587787   | 9.00    | 1.763360      |
| 4.0   | 2.7   | 0.993252   | 16.00   | 3.973007      |
| 11.5  |       | 0.097352   | 32.25   | 5.586294      |

> **9.3. ábra.** $b e^{ax}$ alakú függvény illesztése: $y = 0.368765 e^{0.528951x}$

**9.6. példa.** Illesszünk egy $b x^a$ alakú hatványfüggvényt a következő pontokra:

| $x_i$ | 0.5 | 1.0 | 1.5 | 2.5 | 3.0 |
|-------|-----|-----|-----|-----|-----|
| $y_i$ | 0.7 | 1.1 | 1.6 | 2.1 | 2.3 |

Ebben az esetben is alkalmazható a linearizálás módszere: tekintsük az $\ln y = a \ln x + \ln b$ összefüggést. Ekkor $\ln y$ lineárisan függ $\ln x$-től. Illesszünk tehát egy egyenest az $(\ln x_i, \ln y_i)$ pontokra. A számolást a 9.4. táblázatban láthatjuk, a kapott normálegyenletek:

$$\begin{aligned}
2.691393A + 1.727221B &= 2.032673 \\
1.727221A + 5B &= 1.783485.
\end{aligned}$$

Ennek megoldása $A = 0.676257$, $B = 0.123088$. Ebből az eredeti paraméterek: $a = A = 0.676257$ és $b = e^B = e^{0.123088} = 1.130984$. A linearizált illesztés hibája

$$\sum_{i=0}^{4} (0.676257 \ln x_i + 0.123088 - \ln y_i)^2 = 0.007279,$$

az eredeti négyzetes hiba pedig

$$\sum_{i=0}^{4} (1.130984 x_i^{0.676257} - y_i)^2 = 0.019616.$$

$\square$

**9.4. táblázat. $b x^a$ alakú függvény illesztése**

| $x_i$ | $y_i$ | $\ln x_i$  | $\ln y_i$  | $(\ln x_i)^2$ | $\ln x_i \ln y_i$ |
|-------|-------|------------|------------|---------------|-------------------|
| 0.5   | 0.7   | -0.693147  | -0.356675  | 0.480453      | 0.247228          |
| 1.0   | 1.1   | 0.000000   | 0.095310   | 0.000000      | 0.000000          |
| 1.5   | 1.6   | 0.405465   | 0.470004   | 0.164402      | 0.190570          |
| 2.5   | 2.1   | 0.916291   | 0.741937   | 0.839589      | 0.679830          |
| 3.0   | 2.3   | 1.098612   | 0.832909   | 1.206949      | 0.915044          |
|       |       | 1.727221   | 1.783485   | 2.691393      | 2.032673          |

> **9.4. ábra.** $b x^a$ alakú függvény illesztése: $y = 1.130984 x^{0.676257}$

### Feladatok

1. Illesszen $b e^{ax}$ alakú függvényt a megadott adatokra és számítsa ki az illesztés hibáját:

   (a)

   | $x_i$ | -2.0 | -1.0 | 1.0 | 2.0 | 3.0 |
   |-------|------|------|-----|-----|-----|
   | $y_i$ | 0.6  | 0.9  | 1.6 | 2.3 | 2.9 |

   (b)

   | $x_i$ | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 |
   |-------|-----|-----|-----|-----|-----|-----|
   | $y_i$ | 1.3 | 1.6 | 1.9 | 2.2 | 3.0 | 4.1 |

2. Illesszen $b x^a$ alakú függvényt a megadott adatokra és számítsa ki az illesztés hibáját:

   (a)

   | $x_i$ | 1.0 | 3.0 | 4.0 | 5.0 | 6.0 | 9.0 |
   |-------|-----|-----|-----|-----|-----|-----|
   | $y_i$ | 1.6 | 1.9 | 2.2 | 2.3 | 3.4 | 4.9 |

   (b)

   | $x_i$ | 1.0 | 2.0 | 3.0 | 4.0  | 5.0  |
   |-------|-----|-----|-----|------|------|
   | $y_i$ | 0.7 | 2.8 | 7.5 | 14.8 | 25.6 |

3. Oldja meg az előző két feladatot az eredeti nemlineáris négyzetes hibát minimalizálva Newton-módszerrel!

---

*Hartung Ferenc, Bevezetés a numerikus analízisbe — Pannon Egyetem*
