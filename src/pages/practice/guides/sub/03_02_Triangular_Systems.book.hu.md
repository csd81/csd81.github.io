## 3.2. Trianguláris egyenletrendszerek

**3.20. példa.** Oldjuk meg a következő egyenletrendszert:

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

A negyedik egyenletet $x_4$-re megoldhatjuk: $x_4 = 4$. Ezt visszahelyettesítve a harmadik egyenletbe kapjuk $x_3 = (-2 + x_4)/2 = 1$, majd a második egyenletből $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Végül az első egyenletből $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\qquad\square$

Az előző példát általánosítva, egy $n$-dimenziós felülről trianguláris egyenletrendszer, $\mathbf{A}\mathbf{x} = \mathbf{b}$, azaz

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{3.2}$$

megoldásának módszerét, az ún. *visszahelyettesítés módszerét* a következő algoritmussal adhatjuk meg:

---

**3.21. algoritmus. Trianguláris egyenletrendszer megoldása visszahelyettesítéssel**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A visszahelyettesítés módszere akkor és csak akkor hajtható végre, ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re. Mivel $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$, így ez akkor és csak akkor teljesül, ha a (3.2) egyenletnek létezik egyértelmű megoldása, azaz $\det(\mathbf{A}) \neq 0$.

A módszer műveletigénye:

| | osztás/szorzás | összeadás/kivonás |
|---|---|---|
| 1. lépés: | 1 | 0 |
| 2. lépés: | 2 | 1 |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $n$. lépés: | $n$ | $n-1$ |

Azaz a módszer végrehajtásához összesen $1 + 2 + \cdots + n = n(n+1)/2$ osztás ill. szorzás, valamint $1 + 2 + \cdots + n - 1 = (n-1)n/2$ összeadás ill. kivonás szükséges. Ezt szokás úgy is írni, hogy $n^2/2 + \mathcal{O}(n)$ nagyságrendű osztás/szorzás, és hasonlóan $n^2/2 + \mathcal{O}(n)$ nagyságrendű összeadás/kivonás kell a módszerhez. Itt és a továbbiakban $\mathcal{O}(n^k)$ egy legfeljebb $k$-adrendű polinomot jelöl.

### Feladatok

1. Oldja meg a következő trianguláris egyenletrendszereket:

   (a)
   $$\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\
   & & & & & & 2x_4 & = & 4
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\
   & & & & & & & & 1.3x_5 & = & 6.5
   \end{array}$$
