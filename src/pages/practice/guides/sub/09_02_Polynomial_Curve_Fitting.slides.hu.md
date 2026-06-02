# 9.2. Polinom illesztése

Most a **polinom illesztés** feladatát vizsgáljuk. Adottak $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, és keresünk olyan $a_m, a_{m-1}, \ldots, a_0$ számokat, amelyek minimalizálják az

$$F(a_m, a_{m-1}, \ldots, a_1, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$

$m + 1$-változós függvényt. Ha $n \le m$, akkor a megadott pontokon keresztül rajzolható $m$-edfokú polinom ($F$ minimális értéke 0). Ebben az esetben interpolációval meghatározhatók az együtthatók. Így az $m < n$ esetre érdekes vizsgálnunk a feladatot, hiszen ekkor $F$ nem veszi fel a 0 értéket.

---

Az $F$ függvénynek ott lehet csak szélsőértéke, ahol a parciális deriváltjai nullák:

$$\begin{aligned}
\frac{\partial F}{\partial a_m}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^m, \\
\frac{\partial F}{\partial a_{m-1}}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^{m-1}, \\
&\vdots \\
\frac{\partial F}{\partial a_0}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i).
\end{aligned}$$

---

Ezeket nullával egyenlővé téve és átrendezve kapjuk a **normál egyenleteket**

$$\begin{aligned}
a_m\sum_{i=0}^{n} x_i^{2m} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-1} + \cdots + a_1\sum_{i=0}^{n} x_i^{m+1} + a_0\sum_{i=0}^{n} x_i^m &= \sum_{i=0}^{n} x_i^m y_i \\
a_m\sum_{i=0}^{n} x_i^{2m-1} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-2} + \cdots + a_1\sum_{i=0}^{n} x_i^m + a_0\sum_{i=0}^{n} x_i^{m-1} &= \sum_{i=0}^{n} x_i^{m-1} y_i \\
&\vdots \\
a_m\sum_{i=0}^{n} x_i^{m+1} + a_{m-1}\sum_{i=0}^{n} x_i^m + \cdots + a_1\sum_{i=0}^{n} x_i^2 + a_0\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\
a_m\sum_{i=0}^{n} x_i^m + a_{m-1}\sum_{i=0}^{n} x_i^{m-1} + \cdots + a_1\sum_{i=0}^{n} x_i + a_0(n + 1) &= \sum_{i=0}^{n} y_i
\end{aligned} \tag{4}$$

---

Most belátjuk, hogy a (4) lineáris egyenletrendszernek létezik egyértelmű megoldása, azaz az

$$\mathbf{A} := \begin{pmatrix}
\sum_{i=0}^{n} x_i^{2m} & \sum_{i=0}^{n} x_i^{2m-1} & \cdots & \sum_{i=0}^{n} x_i^{m+1} & \sum_{i=0}^{n} x_i^m \\
\sum_{i=0}^{n} x_i^{2m-1} & \sum_{i=0}^{n} x_i^{2m-2} & \cdots & \sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} \\
\vdots & \vdots & & \vdots & \vdots \\
\sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} & \cdots & \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} 1
\end{pmatrix}$$

együtthatómátrix invertálható. Ehhez elegendő megmutatni, hogy $\mathbf{A}$ pozitív definit. Az $\mathbf{A}$ mátrix $jk$-adik elemét a

$$\sum_{i=0}^{n} x_i^{2m+2-j-k}$$

képlettel adhatjuk meg, ahol $j, k = 1, 2, \ldots, m + 1$.

---

Legyen $\mathbf{z} = (z_1, z_2, \ldots, z_{m+1}) \in \mathbb{R}^{m+1}$. Egyszerű átalakításokkal adódik

$$\begin{aligned}
\mathbf{z}^T \mathbf{A} \mathbf{z} &= \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} \sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k \\
&= \sum_{i=0}^{n} \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} x_i^{m+1-j} z_j x_i^{m+1-k} z_k \\
&= \sum_{i=0}^{n} \left(\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\right)^2.
\end{aligned}$$

Tegyük fel, hogy

$$\mathbf{z}^T \mathbf{A} \mathbf{z} = 0.$$

Ekkor

$$\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$$

minden $i = 0, 1, \ldots, n$-re.

---

Eszerint ha az $x_i$ alappontok páronként különböznek, akkor a

$$p(x) := \sum_{j=1}^{m+1} z_j x^{m+1-j}$$

$m$-edfokú polinomnak $n + 1$ különböző gyöke van. Ha $m \le n$, akkor $p$ azonosan nulla, azaz

$$z_j = 0 \qquad \text{minden } j = 1, 2, \ldots, m + 1\text{-re.}$$

Így $\mathbf{A}$ pozitív definit, és ezért a normálegyenleteknek létezik egyértelmű megoldása, amit $\bar{\mathbf{a}}$-val jelölünk.

---

Mivel

$$\frac{\partial^2 F}{\partial a_j\, \partial a_k}(\bar{\mathbf{a}}) = 2\sum_{i=0}^{n} x_i^{j+k},$$

ezért $F''(\bar{\mathbf{a}}) = 2\mathbf{A}$. Ebből következik, hogy $F$-nek $\bar{\mathbf{a}}$-ban lokális minimuma van, és mivel $F$ kvadratikus függvény, ezért ez globális minimum is.

> **Tétel.**
> Adottak az $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) pontok, ahol az $x_i$ alappontok páronként különböznek. Legyen $m \le n$. Ekkor a
> $$\min_{(a_m,\ldots,a_0)\in\mathbb{R}^{m+1}} \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$
> szélsőérték feladatnak létezik egyértelmű megoldása, amely teljesíti a (4) normálegyenleteket.

---

> **Példa.**
> Illesszünk parabolát az

| $x_i$ | -1.0 | -0.5 | 0.0 | 1.0 | 2.0 | 3.0  | 3.5  |
|-------|------|------|-----|-----|-----|------|------|
| $y_i$ | 1.6  | 1.7  | 1.9 | 1.5 | 0.6 | -0.1 | -1.0 |

adatokra!

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

---

> **Példa folyt.**
> Az utolsó sorban szereplő összegeket használjuk a (4) egyenletrendszerhez:

$$\begin{aligned}
138.125a + 50.75b + 21.5c &= -14.325 \\
50.75a + 21.5b + 8c &= -4.75 \\
21.5a + 8b + 7c &= 4.7,
\end{aligned}$$

amelyet megoldva kapjuk, hogy $a = -0.196021$, $b = -0.084748$ és $c = 1.752653$. A megadott pontokat és a számított parabola grafikonját a következő ábrán láthatjuk. Az illesztés hibája

$$\sum_{i=0}^{6} (-0.196021 x_i^2 - 0.084748 x_i + 1.752653 - y_i)^2 = 0.0964456.$$

---

> **Példa folyt.**
> *(Ábra:)* **Parabola illesztése:** $y = -0.44008x^2 + 0.11323x + 1.89369$

---
