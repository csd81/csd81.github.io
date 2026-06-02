# Numerikus analízis

## 3. Lineáris egyenletrendszerek

**Ferenc Hartung**

Pannon Egyetem
Matematika Tanszék

2026

---

## 3.1. Trianguláris egyenletrendszerek

### Példa

Oldjuk meg a következő egyenletrendszert:

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

A negyedik egyenletet $x_4$-re megoldhatjuk: $x_4 = 4$. Ezt visszahelyettesítve a harmadik egyenletbe kapjuk

$$x_3 = (-2 + x_4)/2 = 1,$$

majd a második egyenletből

$$x_2 = (13 + x_3 - 2x_4)/3 = 2.$$

Végül az első egyenletből

$$x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1.$$

---

Az előző példát általánosítva, egy $n$-dimenziós felülről trianguláris egyenletrendszer,

$$\mathbf{A}\mathbf{x} = \mathbf{b},$$

azaz

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{1}$$

megoldásának módszerét, az ún. visszahelyettesítés módszerét a következő algoritmussal adhatjuk meg:

---

**Algoritmus: Trianguláris egyenletrendszer megoldása visszahelyettesítéssel**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A visszahelyettesítés módszere akkor és csak akkor hajtható végre, ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re. Mivel

$$\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$$

trianguláris mátrixokra, így ez akkor és csak akkor teljesül, ha az (1) egyenletnek létezik egyértelmű megoldása, azaz

$$\det(\mathbf{A}) \neq 0.$$

A módszer műveletigénye:

$$1 + 2 + \cdots + n = n(n+1)/2 = n^2/2 + \mathcal{O}(n)$$

szorzás és osztás, illetve

$$1 + 2 + \cdots + n - 1 = (n-1)n/2 = n^2/2 + \mathcal{O}(n)$$

összeadás és kivonás. Itt és később $\mathcal{O}(n^k)$ egy tetszőleges, legfeljebb $k$-adfokú polinomot jelöl.

---
