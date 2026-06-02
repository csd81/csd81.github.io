## 4.2. Jacobi-iteráció

> **Példa.** Oldjuk meg a
> $$
> \begin{array}{rcrcrcr}
> 5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
> 2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
> -3x_1 & + & 4x_2 & - & 12x_3 & = & -47
> \end{array}
> $$
> egyenletrendszert! Fejezzük ki az első egyenletből $x_1$-et, a másodikból $x_2$-t, a harmadikból pedig $x_3$-at:
> $$
> \begin{aligned}
> x_1 &= (-4 - 3x_2 + x_3)/5 \\
> x_2 &= (-25 + 2x_1 + x_3)/10 \\
> x_3 &= (47 - 3x_1 + 4x_2)/12.
> \end{aligned}
> $$
> Definiáljuk a következő iterációs módszert $k = 0, 1, 2, \ldots$-re:
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
> x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12
> \end{aligned}
> $$
> Ezt a módszert **Jacobi-iterációnak** nevezzük.

> **Példa folyt.**
>
> **Jacobi-iteráció**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | -0.8000000 | -0.4285714 |
> | 2  | 2.5428571  | 0.2392857  | -1.4142857 |
> | 3  | 1.7767857  | 0.1885714  | -1.0525510 |
> | 4  | 1.8925765  | -0.1221173 | -0.8554082 |
> | ⋮  | ⋮          | ⋮          | ⋮          |
> | 19 | 2.0000268  | -0.0000010 | -1.0000107 |
> | 20 | 1.9999978  | 0.0000112  | -1.0000081 |
> | 21 | 1.9999924  | -0.0000027 | -0.9999946 |
> | 22 | 2.0000027  | -0.0000027 | -0.9999990 |
> | 23 | 2.0000016  | 0.0000016  | -1.0000019 |

> **Példa folyt.** Az iteráció röviden az
> $$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$
> alakban írható fel, ahol
> $$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix} \quad \text{és} \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$
> Mivel
> $$\|\mathbf{T}\|_\infty = \max\{4/5, 3/10, 7/12\} = 4/5 < 1,$$
> ezért a Jacobi-iteráció valóban konvergens.

Tekintsük az általános

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n.
\end{array}
$$

egyenletet. Ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re, akkor az egyenletet átírhatjuk az

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n \tag{5}$$

alakba, és definiálhatjuk az ún. **Jacobi-iterációt** $k = 0, 1, 2, \ldots$-re:

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{6}$$

Ha $a_{ii} = 0$ valamely $i$-re, akkor megpróbáljuk sorcserékkel elérni, hogy $a_{ii} \neq 0$ legyen $i = 1, \ldots, n$-re.

Vezessük be a következő jelölést: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, ahol

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \quad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

és

$$\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn}).$$

$\mathbf{L}$ és $\mathbf{U}$ alulról ill. felülről trianguláris mátrixok (amelyeknek a fődiagonálisa is zéró).

Ezzel a jelöléssel az

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

egyenletrendszert a

$$(\mathbf{L} + \mathbf{D} + \mathbf{U})\mathbf{x} = \mathbf{b}$$

alakra írjuk, majd beszorozzuk az egyenletet balról $\mathbf{D}^{-1}$-zel. Ennélfogva a Jacobi-iteráció

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$

képlettel definiálható, ahol

$$\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U}) \quad \text{és} \quad \mathbf{c} = \mathbf{D}^{-1}\mathbf{b}.$$

> **Tétel.** A Jacobi-iteráció akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_J) < 1$.

> **Következmény.** Ha $\|\mathbf{T}_J\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor a Jacobi-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

A gyakorlatban sokszor egyszerűen alkalmazható a következő elegendő feltétel.

> **Tétel.** Ha $\mathbf{A}$ diagonálisan domináns, akkor a Jacobi-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

> **Bizonyítás.** Mivel
> $$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$
> ezért az $\mathbf{A}$ mátrix diagonális dominanciáját használva
> $$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1,$$
> amiből kapjuk az állítást.

---
