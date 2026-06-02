## 4.2. Jacobi-iteráció

**4.8. példa.** Oldjuk meg a

$$
\begin{array}{rcrcrcr}
5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
-3x_1 & + & 4x_2 & - & 12x_3 & = & -47.
\end{array}
\tag{4.9}
$$

egyenletrendszert! Fejezzük ki az első egyenletből $x_1$-et, a másodikból $x_2$-t, a harmadikból pedig $x_3$-at:

$$
\begin{aligned}
x_1 &= (-4 - 3x_2 + x_3)/5 \\
x_2 &= (-25 + 2x_1 + x_3)/10 \\
x_3 &= (47 - 3x_1 + 4x_2)/12.
\end{aligned}
\tag{4.10}
$$

A (4.10) egyenletrendszer egy lineáris háromdimenziós fixpont egyenlet, ezért definiáljuk a következő iterációs módszert $k = 0, 1, 2, \ldots$-re:

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12
\end{aligned}
\tag{4.11}
$$

A 4.1. táblázat az $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$ kezdeti értékekből számolt numerikus értékeket tartalmazza. Megfigyelhetjük, hogy erre a kezdeti értékre az iterációs sorozat konvergens, és a határértéke $x_1 = 1$, $x_2 = -2$, $x_3 = 3$, ami a (4.9) egyenletrendszer megoldása. A (4.11) iteráció röviden az

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c} \tag{4.12}$$

alakban írható fel, ahol

$$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix} \quad \text{és} \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$

A 4.7. következmény szerint a (4.12) iteráció konvergens, ha a $\mathbf{T}$ mátrix valamely mátrixnormája kisebb mint 1. Mivel $\|\mathbf{T}\|_\infty = \max\{4/5, 3/10, 7/12\} = 4/5 < 1$, ezért a (4.11) iteráció valóban konvergens. $\qquad\square$

**4.1. táblázat. Jacobi-iteráció**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.500000  | 3.916667   |
| 2  | 1.483333   | -2.268333  | 3.283333   |
| 3  | 1.217667   | -1.875000  | 2.789722   |
| 4  | 0.882944   | -1.977494  | 2.987250   |
| ⋮  | ⋮          | ⋮          | ⋮          |
| 14 | 0.999999   | -1.999992  | 2.999990   |
| 15 | 0.999993   | -2.000001  | 3.000003   |
| 16 | 1.000001   | -2.000001  | 3.000001   |
| 17 | 1.000001   | -2.000000  | 2.999999   |
| 18 | 1.000000   | -2.000000  | 3.000000   |

Tekintsük az általános

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array}
\tag{4.13}
$$

egyenletet. Ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re, akkor a (4.13) egyenletet átírhatjuk az

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n \tag{4.14}$$

alakba, és definiálhatjuk az ún. *Jacobi-iterációt* $k = 0, 1, 2, \ldots$-re:

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.15}$$

Ha $a_{ii} = 0$ valamely $i$-re, akkor megpróbáljuk sorcserékkel elérni, hogy $a_{ii} \neq 0$ legyen $i = 1, \ldots, n$-re. Vezessük be a következő jelölést: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, ahol

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \qquad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

és $\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn})$. $\mathbf{L}$ és $\mathbf{U}$ alulról ill. felülről trianguláris mátrixok (amelyeknek a fődiagonálisa is zéró). Ezzel a jelöléssel az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszert a $\mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}$ alakra írjuk, majd beszorozzuk az egyenletet balról $\mathbf{D}^{-1}$-zel. Ennélfogva a Jacobi-iteráció a (4.12) képlettel definiálható, ahol $\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})$, és $\mathbf{c} = \mathbf{D}^{-1}\mathbf{b}$.

A 4.6. tétel és a 4.7. következményből rögtön kapjuk a Jacobi-iteráció konvergenciájára vonatkozó szükséges és elegendő, ill. elegendő feltételeket:

**4.9. tétel.** *A Jacobi-iteráció akkor és csak akkor konvergens, ha* $\rho(\mathbf{T}_J) < 1$.

**4.10. következmény.** *Ha* $\|\mathbf{T}_J\| < 1$ *valamely* $\|\cdot\|$ *mátrixnormában, akkor a Jacobi-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

A gyakorlatban sokszor egyszerűen alkalmazható a következő tétel.

**4.11. tétel.** *Ha* $\mathbf{A}$ *diagonálisan domináns, akkor a Jacobi-iteráció konvergens bármely* $\mathbf{x}^{(0)}$ *kezdeti értékre.*

**Bizonyítás.** Mivel

$$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$

ezért az $\mathbf{A}$ mátrix diagonális dominanciáját használva

$$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1,$$

amiből, a 4.10. következmény szerint kapjuk az állítást. $\qquad\square$

### Feladatok

1. A Jacobi-iterációt használva oldja meg a következő egyenletrendszereket:

$$
\text{(a)} \quad
\begin{array}{rcrcrcr}
6.2x_1 & + & 1.1x_2 & - & 3.4x_3 & = & 5.1 \\
-0.6x_1 & + & 2.9x_2 & + & 0.3x_3 & = & -7.2 \\
1.1x_1 & - & 0.6x_2 & + & 4.4x_3 & = & 3.1
\end{array}
$$

$$
\text{(b)} \quad
\begin{array}{rcrcrcrcr}
-8x_1 & + & 3x_2 & - & 2x_3 & & & = & 6 \\
2x_1 & + & 6x_2 & + & x_3 & - & 2x_4 & = & 3 \\
3x_1 & - & 3x_2 & + & 10x_3 & + & x_4 & = & 5 \\
& & x_2 & - & 3x_3 & + & 7x_4 & = & -17
\end{array}
$$

2. Mutassa meg, hogy a Jacobi-iteráció konvergens tetszőleges kezdeti értékre, ha $\mathbf{A}$ oszloponként diagonálisan domináns!
