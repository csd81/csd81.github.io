# Numerikus analízis

## 9. Legkisebb négyzetek módszere

Ferenc Hartung

Pannon Egyetem, Matematika Tanszék

2026

---

## Bevezetés

Tegyük fel, hogy egy $g$ függvény függ az $\mathbf{a}$ paraméterektől:

$$g(x; \mathbf{a}).$$

Feltesszük, hogy vannak $y_i$ ($i = 0, 1, \ldots, n$) mérési adataink a $g$ függvényről az $x_i$ alappontokban. A célunk az, hogy keressük meg azokat a paraméter értékeket, amelyhez tartozó $g$ függvény a „legkevésbé" tér el a mérési adatoktól. Ezt a feladatot hívjuk **görbeillesztésnek**.

> *(Ábra: $x_0, x_1, \ldots, x_{n-1}, x_n$ alappontokban felvett mérési pontok és a rájuk illesztett görbe.)*

---

## Hibaformulák

Lehetséges hibaformula:

$$F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| : i = 0, 1, \ldots, n\}$$

vagy

$$F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|.$$

A **négyzetes hiba**:

$$F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2.$$

A feladat az, hogy minimalizáljuk az $F(\mathbf{a})$ függvényt, és a minimumhelyhez tartozó paraméter értékekkel definiált $g(x; \mathbf{a})$ függvényt tekintjük a pontokra legjobban illeszkedő adott típusú függvénynek. Ezt a módszert hívjuk a **legkisebb négyzetek módszerének**.

---

# 9.1. Egyenes illesztése

Adottak $(x_i, y_i)$, $i = 0, 1, \ldots, n$ pontok, ahol $x_i$-k páronként különböznek. Keresünk egy olyan

$$g(x) = ax + b$$

lineáris függvényt, amelynek az adatoktól számított négyzetes eltérése, azaz

$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2 \tag{1}$$

minimális. Az így definiált $F$ függvény folytonosan parciálisan differenciálható $a$ és $b$ szerint, és

$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i).
\end{aligned} \tag{2}$$

---

A (2) parciális deriváltakat 0-val egyenlővé téve, átrendezés után kapjuk az ún. **Gauss-féle normálegyenleteket**.

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i.
\end{aligned} \tag{3}$$

Ez egy lineáris egyenletrendszer $a$-ra és $b$-re. Az egyenletrendszer akkor és csak akkor oldható meg, ha az együtthatómátrix determinánsa,

$$d := \det \begin{pmatrix} \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & n + 1 \end{pmatrix} = (n + 1)\sum_{i=0}^{n} x_i^2 - \left(\sum_{i=0}^{n} x_i\right)^2$$

nem nulla.

---

A Cauchy-Bunyakovszkij-Schwarz egyenlőtlenség szerint

$$\left(\sum_{i=0}^{n} x_i\right)^2 = \left(\sum_{i=0}^{n} 1 \cdot x_i\right)^2 \le \sum_{i=0}^{n} 1 \sum_{i=0}^{n} x_i^2 = (n + 1)\sum_{i=0}^{n} x_i^2.$$

Ebből következik, hogy $d \ge 0$. Ha feltesszük, hogy legalább két $x_i$ különbözik, akkor egyenlőtlenség nem állhat fenn, azaz $d > 0$. Ezért a (3) egyenletrendszernek pontosan egy megoldása van, amely a következő alakban adható meg:

$$\begin{aligned}
\bar{a} &= \frac{(n + 1)\left(\sum_{i=0}^{n} x_i y_i\right) - \left(\sum_{i=0}^{n} x_i\right)\left(\sum_{i=0}^{n} y_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}, \\
\bar{b} &= \frac{\left(\sum_{i=0}^{n} x_i^2\right)\left(\sum_{i=0}^{n} y_i\right) - \left(\sum_{i=0}^{n} x_i y_i\right)\left(\sum_{i=0}^{n} x_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}.
\end{aligned}$$

---

$F$-nek az $(\bar{a}, \bar{b})$ pontban lokális szélsőértéke van, ha

$$D(\bar{a}, \bar{b}) := \frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) \cdot \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) - \left(\frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b})\right)^2 > 0.$$

Könnyen kiszámítható, hogy

$$\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i^2, \quad \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) = 2(n + 1), \quad \frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i.$$

Ezért

$$D(\bar{a}, \bar{b}) = 4(n + 1)\sum_{i=0}^{n} x_i^2 - 4\left(\sum_{i=0}^{n} x_i\right)^2 = 4d,$$

amiről már megmutattuk, hogy pozitív. Mivel $\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) > 0$, ezért az $F$ függvénynek lokális minimuma van az $(\bar{a}, \bar{b})$ pontban, ami egyben globális minimum is.

---

> **Tétel.**
> Adottak az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, ahol van olyan $i$ és $j$, hogy $x_i \ne x_j$. Ekkor a
> $$\min_{(a,b)\in\mathbb{R}^2} \sum_{i=0}^{n} (ax_i + b - y_i)^2$$
> szélsőérték feladatnak létezik egyértelmű megoldása, amely teljesíti az (1) normálegyenleteket.

---

> **Példa.**
> Tekintsük a következő adatokat:

| $x_i$ | 0   | 1.0 | 1.5 | 3.0 | 3.5 | 4.0 | 4.5 | 6.0 |
|-------|-----|-----|-----|-----|-----|-----|-----|-----|
| $y_i$ | 1.2 | 1.4 | 1.7 | 2.4 | 2.7 | 3.1 | 3.1 | 4.1 |

Keressük meg az adatokra legjobban illeszkedő egyenest! A következő táblázatot töltjük ki:

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
|-------|-------|---------|-----------|
| 0.0   | 1.2   | 0.00    | 0.00      |
| 1.0   | 1.4   | 1.00    | 1.40      |
| 1.5   | 1.7   | 2.25    | 2.55      |
| 3.0   | 2.4   | 9.00    | 7.20      |
| 3.5   | 2.7   | 12.25   | 9.45      |
| 4.0   | 3.1   | 16.00   | 12.40     |
| 4.5   | 3.1   | 20.25   | 13.95     |
| 6.0   | 4.1   | 36.00   | 24.60     |
| 23.5  | 19.7  | 96.75   | 71.55     |

---

> **Példa folyt.**
> Ezen összegeket helyettesítjük be az

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i.
\end{aligned}$$

Gauss-féle normálegyenletekbe:

$$\begin{aligned}
96.75a + 23.5b &= 71.55 \\
23.5a + 8b &= 19.70,
\end{aligned}$$

amelynek megoldása $a = 0.630243$ és $b = 0.542163$. A megadott pontok és az $y = 0.630243x + 0.542163$ egyenes grafikonja a következő ábrán látható. Az illesztés hibája:

$$\sum_{i=0}^{7} (0.49357 x_i + 1.01263 - y_i)^2 = 0.10604.$$

---

> **Példa folyt.**
> *(Ábra:)* **Egyenes illesztése:** $y = 0.49357x + 1.01263$

---
