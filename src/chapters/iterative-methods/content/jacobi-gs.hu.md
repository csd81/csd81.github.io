## 4.2 Jacobi-iteráció

**4.8. példa.** Oldjuk meg a rendszert

$$\begin{array}{rcrcrcr}
5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
-3x_1 & + & 4x_2 & - & 12x_3 & = & -47.
\end{array} \tag{4.9}$$

Minden egyenletet a saját átlós ismeretlenére rendezünk:

$$x_1 = \tfrac{-4 - 3x_2 + x_3}{5}, \quad x_2 = \tfrac{-25 + 2x_1 + x_3}{10}, \quad x_3 = \tfrac{47 - 3x_1 + 4x_2}{12}. \tag{4.10}$$

Ez fixpont egyenlet; iterálva (a jobb oldalon a **régi** értékekkel) kapjuk a **Jacobi-iterációt**:

$$x_i^{(k+1)} = \frac{1}{a_{ii}}\left( b_i - \sum_{j \neq i} a_{ij}\, x_j^{(k)} \right), \qquad i = 1, \ldots, n. \tag{4.15}$$

$\mathbf{x}^{(0)} = \mathbf{0}$-ról indulva a sorozat a $(1, -2, 3)$-hoz konvergál:

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0 | 0.000000 | 0.000000 | 0.000000 |
| 1 | −0.800000 | −2.500000 | 3.916667 |
| 2 | 1.483333 | −2.268333 | 3.283333 |
| 3 | 1.217667 | −1.875000 | 2.789722 |
| ⋮ | ⋮ | ⋮ | ⋮ |
| 17 | 1.000001 | −2.000000 | 2.999999 |
| 18 | 1.000000 | −2.000000 | 3.000000 |

Mátrix alakban $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$, ahol

$$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$

Mivel $\|\mathbf{T}\|_\infty = \max\{4/5,\, 3/10,\, 7/12\} = 4/5 < 1$, az iteráció konvergens.

### Általános alak

Az $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$ felbontással (szigorúan alsó, átló, szigorúan felső) az $\mathbf{A}\mathbf{x} = \mathbf{b}$ rendszer $\mathbf{D}\mathbf{x} = -(\mathbf{L}+\mathbf{U})\mathbf{x} + \mathbf{b}$ alakú lesz, így a **Jacobi-mátrix** $\mathbf{T}_J = -\mathbf{D}^{-1}(\mathbf{L}+\mathbf{U})$, $\mathbf{c}_J = \mathbf{D}^{-1}\mathbf{b}$.

> **4.9. tétel.** A Jacobi-iteráció minden kezdeti értékre akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_J) < 1$.

> **4.10. következmény.** Ha valamely mátrixnormában $\|\mathbf{T}_J\| < 1$, a Jacobi-iteráció minden $\mathbf{x}^{(0)}$-ra konvergens.

> **4.11. tétel.** Ha $\mathbf{A}$ **diagonálisan domináns** ($|a_{ii}| > \sum_{j\neq i}|a_{ij}|$ minden sorra), akkor a Jacobi-iteráció minden $\mathbf{x}^{(0)}$-ra konvergens, mert $\|\mathbf{T}_J\|_\infty < 1$.

## 4.3 Gauss–Seidel-iteráció

**4.12. példa.** Ugyanarra a (4.9) rendszerre azonnal felhasználjuk a frissen kiszámolt komponenseket:

$$\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k+1)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k+1)} + 4x_2^{(k+1)})/12.
\end{aligned} \tag{4.16}$$

Ez **gyorsabban** konvergál — ugyanahhoz a $(1,-2,3)$-hoz kb. 11 lépésben, 18 helyett:

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0 | 0.000000 | 0.000000 | 0.000000 |
| 1 | −0.800000 | −2.660000 | 3.230000 |
| 2 | 1.442000 | −1.888600 | 2.926633 |
| 3 | 0.918487 | −2.023639 | 3.012499 |
| ⋮ | ⋮ | ⋮ | ⋮ |
| 10 | 1.000001 | −2.000000 | 3.000000 |
| 11 | 1.000000 | −2.000000 | 3.000000 |

### Általános alak

Komponensenként,
$$x_i^{(k+1)} = \frac{1}{a_{ii}}\left( b_i - \sum_{j < i} a_{ij}\, x_j^{(k+1)} - \sum_{j > i} a_{ij}\, x_j^{(k)} \right), \tag{4.17}$$

azaz $(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b}$, így a **Gauss–Seidel-mátrix** $\mathbf{T}_G = -(\mathbf{D}+\mathbf{L})^{-1}\mathbf{U}$, $\mathbf{c}_G = (\mathbf{D}+\mathbf{L})^{-1}\mathbf{b}$.

> **4.13. tétel.** A Gauss–Seidel-iteráció bármely kezdeti értékre akkor és csak akkor konvergens, ha $\rho(\mathbf{T}_G) < 1$.

> **4.14. következmény.** Ha valamely mátrixnormában $\|\mathbf{T}_G\| < 1$, minden $\mathbf{x}^{(0)}$-ra konvergens.

> **4.15. tétel.** Ha $\mathbf{A}$ diagonálisan domináns, a Gauss–Seidel-iteráció minden $\mathbf{x}^{(0)}$-ra konvergens. Sőt hibabecslése legalább olyan jó, mint a Jacobié:
> $$\max_{l} \frac{\beta_l}{1 - \alpha_l} \leq \|\mathbf{T}_J\|_\infty < 1, \quad \text{ahol } \alpha_i = \sum_{j<i}\tfrac{|a_{ij}|}{|a_{ii}|},\; \beta_i = \sum_{j>i}\tfrac{|a_{ij}|}{|a_{ii}|}.$$

## A két módszer összehasonlítása

Diagonálisan domináns mátrixra a Gauss–Seidel általában gyorsabb. Általában akkor gyorsabb, ha $\rho(\mathbf{T}_G) < \rho(\mathbf{T}_J)$, de erre nincs egyszerű feltétel $\mathbf{A}$-ra. Egy speciális eset:

> **4.16. tétel (Stein–Rosenberg).** Tegyük fel, hogy $a_{ij} \leq 0$ ha $i \neq j$, és $a_{ii} > 0$ minden $i$-re. Ekkor pontosan az egyik teljesül:
> 1. $0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$;
> 2. $1 < \rho(\mathbf{T}_J) < \rho(\mathbf{T}_G)$;
> 3. $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 0$;
> 4. $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 1$.

E feltételek mellett a két módszer együtt konvergál, és akkor a Gauss–Seidel a gyorsabb. Általában viszont bármelyik lehet a gyorsabb.
