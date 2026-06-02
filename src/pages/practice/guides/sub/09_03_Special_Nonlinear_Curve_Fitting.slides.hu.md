# 9.3. Nemlineáris függvény illesztése

Tegyük fel, hogy egy $b e^{ax}$ alakú exponenciális függvényt szeretnénk illeszteni az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontokra. A négyzetes hibát felírva az

$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$$

függvényt kapjuk, amelynek kritikus pontjait a

$$\begin{aligned}
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0
\end{aligned}$$

egyenletrendszer megoldásai adják. Ezt már analitikusan nem tudjuk megoldani, és azt sem könnyű látni, hogy hány megoldás van, és ha több van, melyik megoldás fogja minimalizálni $F$-et.

---

Tekintsük az ún. **linearizációs módszert**: Vegyük észre, hogy ha az

$$y = b e^{ax}$$

egyenlet mindkét oldalának vesszük a logaritmusát, akkor az

$$\ln y = \ln b + ax$$

összefüggést kapjuk, ahol $\ln y$ lineárisan függ $x$-től. Vezessünk be

$$X := x, \quad Y := \ln y, \qquad A := a \quad \text{és} \quad B := \ln b$$

új változókat. Illesszünk

$$Y = AX + B$$

alakú egyenest az adott $(x_i, \ln y_i)$ adatokra. Legyenek $\bar{A}$ és $\bar{B}$ az egyenes illesztésekor kapott konstansok. Ekkor a $\bar{b} e^{\bar{a}x}$ függvényt tekintjük az $(x_i, y_i)$ pontokra legjobban illeszkedő exponenciális függvénynek, ahol

$$\bar{a} = \bar{A}, \qquad \bar{b} = e^{\bar{B}}.$$

---

> **Példa.**
> Illesszünk $b e^{ax}$ alakú függvényt az

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.3 | 0.7 | 0.9 | 1.2 | 1.8 | 2.7 |

pontokra!

| $x_i$ | $y_i$ | $\ln y_i$  | $x_i^2$ | $x_i \ln y_i$ |
|-------|-------|------------|---------|---------------|
| 0.0   | 0.3   | -1.203973  | 0.00    | 0.000000      |
| 1.0   | 0.7   | -0.356675  | 1.00    | -0.356675     |
| 1.5   | 0.9   | -0.105361  | 2.25    | -0.158041     |
| 2.0   | 1.2   | 0.182322   | 4.00    | 0.364643      |
| 3.0   | 1.8   | 0.587787   | 9.00    | 1.763360      |
| 4.0   | 2.7   | 0.993252   | 16.00   | 3.973007      |
| 11.5  |       | 0.097352   | 32.25   | 5.586294      |

---

> **Példa folyt.**
> Az egyenes illesztésekor kapott

$$\begin{aligned}
32.25A + 11.5B &= 5.586294 \\
11.5A + 6B &= 0.097352,
\end{aligned}$$

normálegyenletek megoldása $A = 0.528951$ és $B = -0.997597$, azaz a linearizálás módszerével illesztett függvény képlete

$$y = 0.368765 e^{0.528951x}.$$

Ennek a függvénynek és az adatoknak a grafikonja az alábbi ábrán látható. A linearizált illesztés hibája

$$\sum_{i=0}^{5} (0.528951 x_i - 0.997597 - \ln y_i)^2 = 0.095396,$$

az eredeti hiba a kapott függvényre pedig

$$\sum_{i=0}^{5} (0.368765 e^{0.528951 x_i} - y_i)^2 = 0.165543.$$

---

> **Példa folyt.**
> *(Ábra:)* $b e^{ax}$ **alakú függvény illesztése:** $0.368765 e^{0.528951x}$

---

> **Példa.**
> Illesszünk egy $b x^a$ alakú hatványfüggvényt a következő pontokra:

| $x_i$ | 0.5 | 1.0 | 1.5 | 2.5 | 3.0 |
|-------|-----|-----|-----|-----|-----|
| $y_i$ | 0.7 | 1.1 | 1.6 | 2.1 | 2.3 |

Az $y = b x^a$ egyenletből a linearizálás módszerével kapjuk az

$$\ln y = a \ln x + \ln b$$

összefüggést. Ekkor $\ln y$ lineárisan függ $\ln x$-től. Illesszünk tehát egy egyenest az $(\ln x_i, \ln y_i)$ pontokra.

| $x_i$ | $y_i$ | $\ln x_i$  | $\ln y_i$  | $(\ln x_i)^2$ | $\ln x_i \ln y_i$ |
|-------|-------|------------|------------|---------------|-------------------|
| 0.5   | 0.7   | -0.693147  | -0.356675  | 0.480453      | 0.247228          |
| 1.0   | 1.1   | 0.000000   | 0.095310   | 0.000000      | 0.000000          |
| 1.5   | 1.6   | 0.405465   | 0.470004   | 0.164402      | 0.190570          |
| 2.5   | 2.1   | 0.916291   | 0.741937   | 0.839589      | 0.679830          |
| 3.0   | 2.3   | 1.098612   | 0.832909   | 1.206949      | 0.915044          |
|       |       | 1.727221   | 1.783485   | 2.691393      | 2.032673          |

---

> **Példa folyt.**
> A normálegyenletek:

$$\begin{aligned}
2.691393A + 1.727221B &= 2.032673 \\
1.727221A + 5B &= 1.783485.
\end{aligned}$$

Ennek megoldása $A = 0.676257$, $B = 0.123088$. Ebből az eredeti paraméterek: $a = A = 0.676257$ és $b = e^B = e^{0.123088} = 1.130984$, azaz a megoldás

$$y = 1.130984 x^{0.676257}.$$

A linearizált illesztés hibája

$$\sum_{i=0}^{4} (0.676257 \ln x_i + 0.123088 - \ln y_i)^2 = 0.007279,$$

az eredeti nemlineáris illesztés hibája pedig

$$\sum_{i=0}^{4} (1.130984 x_i^{0.676257} - y_i)^2 = 0.019616.$$

---

> **Példa folyt.**
> *(Ábra:)* $b x^a$ **alakú függvény illesztése:** $1.130984 x^{0.676257}$

---

*Ferenc Hartung — Numerikus analízis, 9. Legkisebb négyzetek módszere — Pannon Egyetem*
