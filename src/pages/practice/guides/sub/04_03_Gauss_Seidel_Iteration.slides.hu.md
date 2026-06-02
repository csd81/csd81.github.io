## 4.3. Gauss–Seidel-iteráció

> **Példa.** Tekintsük újra a korábbi példát és annak átalakított alakját! Definiáljuk az
> $$
> \begin{aligned}
> x_1 &= (9 - 2x_2 + x_3)/4 \\
> x_2 &= (-8 + 5x_1 + 2x_3)/10 \\
> x_3 &= (-3 - 2x_1 + 3x_2)/7.
> \end{aligned}
> $$
> Definiáljuk az alábbi iterációt:
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (9 - 2x_2^{(k)} + x_3^{(k)})/4 \\
> x_2^{(k+1)} &= (-8 + 5x_1^{(k+1)} + 2x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (-3 - 2x_1^{(k+1)} + 3x_2^{(k+1)})/7.
> \end{aligned}
> $$
> Ezt a módszert **Gauss–Seidel-iterációnak** nevezzük.

> **Példa folyt.**
>
> **Gauss–Seidel-iteráció**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | 0.3250000  | -0.9321429 |
> | 2  | 1.8544643  | -0.0591964 | -0.9837883 |
> | 3  | 2.0336511  | 0.0200679  | -1.0010141 |
> | 4  | 1.9897125  | -0.0053466 | -0.9993521 |
> | 5  | 2.0028353  | 0.0015472  | -1.0001470 |
> | 6  | 1.9991897  | -0.0004346 | -0.9999547 |
> | 7  | 2.0002286  | 0.0001234  | -1.0000124 |
> | 8  | 1.9999352  | -0.0000349 | -0.9999964 |
> | 9  | 2.0000183  | 0.0000099  | -1.0000010 |
> | 10 | 1.9999948  | -0.0000028 | -0.9999997 |
> | 11 | 2.0000015  | 0.0000008  | -1.0000001 |
> | 12 | 1.9999996  | -0.0000002 | -1.0000000 |

Definiáljuk a **Gauss–Seidel-iterációt** $k = 0, 1, 2, \ldots$-re (ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re):

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{7}$$

A (7) egyenletet átrendezhetjük a következő alakba:

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

azaz mátrix jelöléssel

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

ahol $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ ugyanaz, mint az előző szakaszban. Innen látható, hogy a Gauss–Seidel-iteráció is felírható $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ alakban, ahol

$$\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U} \quad \text{és} \quad \mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}.$$

> **Tétel.** A Gauss–Seidel-iteráció akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_G) < 1$.

> **Következmény.** Ha $\|\mathbf{T}_G\| < 1$ valamely $\|\cdot\|$ mátrixnormában, akkor a Gauss–Seidel-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

> **Tétel.** Ha $\mathbf{A}$ diagonálisan domináns, akkor a Gauss–Seidel-iteráció konvergens bármely $\mathbf{x}^{(0)}$ kezdeti értékre.

---
