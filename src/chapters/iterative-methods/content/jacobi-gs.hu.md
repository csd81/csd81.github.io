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

## Feladatok

1. Oldja meg az alábbi rendszereket a Jacobi-iterációval, $\mathbf{x}^{(0)} = \mathbf{0}$ kezdőpontból indulva:

   (a) $6.2x_1 + 1.1x_2 - 3.4x_3 = 5.1$, $\ -0.6x_1 + 2.9x_2 + 0.3x_3 = -7.2$, $\ 1.1x_1 - 0.6x_2 + 4.4x_3 = 3.1$;

   (b) a $4\times4$-es rendszer $-8x_1 + 3x_2 - 2x_3 - 2x_4 = 6$, $\ 2x_1 + 6x_2 + x_3 - x_4 = 5$, $\ 3x_1 - 3x_2 + 10x_3 + 3x_4 = -17$, $\ x_2 - 3x_3 + 7x_4 = 3$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a)** Check diagonal dominance: Row 1: $6.2 > 1.1 + 3.4 = 4.5$; Row 2: $2.9 > 0.6 + 0.3 = 0.9$; Row 3: $4.4 > 1.1 + 0.6 = 1.7$. Dominant, so Jacobi converges. The iteration formulas are $x_1^{(k+1)} = (5.1 - 1.1x_2^{(k)} + 3.4x_3^{(k)})/6.2$, $x_2^{(k+1)} = (-7.2 + 0.6x_1^{(k)} - 0.3x_3^{(k)})/2.9$, $x_3^{(k+1)} = (3.1 - 1.1x_1^{(k)} + 0.6x_2^{(k)})/4.4$. From $\mathbf{x}^{(0)} = \mathbf{0}$: iteration 1 gives $(0.8226,\ -2.4828,\ 0.7045)$; iteration 2 gives $(1.6502,\ -2.3806,\ 0.1610)$; iteration 3 gives $(1.3350,\ -2.1560,\ -0.0329)$. Continue (about 15–20 iterations for 5-digit accuracy). Exact solution $\mathbf{x} \approx (1,\ -2,\ 0.5)^T$.

   **(b)** Diagonal dominance: $8 > 7$, $6 > 4$, $10 > 9$, $7 > 4$ — all hold, so Jacobi converges. The formulas are $x_1^{(k+1)} = (6 - 3x_2^{(k)} + 2x_3^{(k)} + 2x_4^{(k)})/(-8)$, $x_2^{(k+1)} = (5 - 2x_1^{(k)} - x_3^{(k)} + x_4^{(k)})/6$, $x_3^{(k+1)} = (-17 - 3x_1^{(k)} + 3x_2^{(k)} - 3x_4^{(k)})/10$, $x_4^{(k+1)} = (3 - x_2^{(k)} + 3x_3^{(k)})/7$. From $\mathbf{0}$: iteration 1 gives $(-0.75,\ 0.8333,\ -1.7,\ 0.4286)$; iteration 2 gives $(-0.1197,\ 1.4381,\ -1.3536,\ -0.4190)$. Continue until convergence.

   </details>

2. Igazolja, hogy a Jacobi-iteráció konvergál, ha $\mathbf{A}$ **oszlop** szerint diagonálisan domináns, azaz $|a_{jj}| > \sum_{i\neq j}|a_{ij}|$ minden $j$-re.

   <details class="reveal-solution"><summary>Megoldás</summary>

   The Jacobi iteration matrix is $T_J = -D^{-1}(L + U)$ with $(T_J)_{ij} = -a_{ij}/a_{ii}$ for $i \neq j$ and $0$ on the diagonal. Column diagonal dominance of $\mathbf{A}$ is equivalent to row diagonal dominance of $\mathbf{A}^T$. The Jacobi matrix for $\mathbf{A}^T\mathbf{y} = \mathbf{c}$ is $T_J(\mathbf{A}^T) = -D^{-1}(L^T + U^T) = T_J(\mathbf{A})^T$. Since $\mathbf{A}^T$ is row diagonally dominant, $\|T_J(\mathbf{A}^T)\|_\infty = \max_i \sum_{j\neq i}|a_{ji}|/|a_{ii}| < 1$. Because $\rho(\mathbf{M}) = \rho(\mathbf{M}^T)$, $\rho(T_J(\mathbf{A})) = \rho(T_J(\mathbf{A})^T) \leq \|T_J(\mathbf{A})^T\|_\infty < 1$. Hence the Jacobi iteration converges. $\square$

   </details>

3. Alkalmazza a Gauss–Seidel-iterációt az 1. feladat rendszereire, és hasonlítsa össze az iterációk számát a Jacobi-módszerrel!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Gauss–Seidel reuses new values immediately. For system (a): $x_1^{(k+1)} = (5.1 - 1.1x_2^{(k)} + 3.4x_3^{(k)})/6.2$, $x_2^{(k+1)} = (-7.2 + 0.6x_1^{(k+1)} - 0.3x_3^{(k)})/2.9$, $x_3^{(k+1)} = (3.1 - 1.1x_1^{(k+1)} + 0.6x_2^{(k+1)})/4.4$. From $\mathbf{0}$: iteration 1 gives $(0.8226,\ -2.3172,\ 0.1830)$; iteration 2 gives $(1.3318,\ -2.2296,\ 0.0675)$. Gauss–Seidel typically converges in fewer iterations than Jacobi (here roughly 10–12 versus 15–20). For the $4\times4$ system the analogous formulas give iteration 1 as $(-0.75,\ 1.0833,\ -1.15,\ -0.2190)$, again converging faster than Jacobi.

   </details>

4. Igazolja, hogy a Jacobi- és Gauss–Seidel-iteráció véges sok lépésben megtalálja a pontos megoldást, ha $\mathbf{A}$ felső háromszögmátrix $a_{ii} \neq 0$ átlóval!

   <details class="reveal-solution"><summary>Megoldás</summary>

   For an upper triangular $\mathbf{A}$, $a_{ij} = 0$ for $i > j$ and $L = 0$, so both methods reduce to the same formula $x_i^{(k+1)} = -\sum_{j=i+1}^n \tfrac{a_{ij}}{a_{ii}} x_j^{(k)} + \tfrac{b_i}{a_{ii}}$. For the last row $i = n$, $x_n^{(k+1)} = b_n/a_{nn}$ is the exact value already after iteration 1 (independent of $\mathbf{x}^{(k)}$). For $i = n-1$ the update uses $x_n$, so after iteration 2, $x_{n-1}$ is exact. By induction, after iteration $m$ the components $x_n, x_{n-1}, \dots, x_{n-m+1}$ are exact, so after iteration $n$ all components are exact. Both methods converge in exactly $n$ iterations. $\square$

   </details>

5. Hasonlítsa össze a Jacobi- és Gauss–Seidel-iterációs mátrixokat a $4x_1 - x_2 = 3$, $-x_1 + 4x_2 - x_3 = 2$, $-x_2 + 4x_3 = 3$ rendszerre!

   <details class="reveal-solution"><summary>Megoldás</summary>

   With $D = \operatorname{diag}(4,4,4)$, the Jacobi matrix is $T_J = -D^{-1}(L+U) = \left(\begin{smallmatrix} 0 & 1/4 & 0 \\ 1/4 & 0 & 1/4 \\ 0 & 1/4 & 0 \end{smallmatrix}\right)$ with eigenvalues $0, \pm\sqrt2/4$, so $\rho(T_J) = \sqrt2/4 \approx 0.354$. The Gauss–Seidel matrix is $T_G = -(D+L)^{-1}U = \left(\begin{smallmatrix} 0 & 1/4 & 0 \\ 0 & 1/16 & 1/4 \\ 0 & 1/64 & 1/16 \end{smallmatrix}\right)$ with eigenvalues $0, 1/16, 1/16$, so $\rho(T_G) = 1/16 = 0.0625$. Since $\rho(T_G) < \rho(T_J)$, Gauss–Seidel converges faster — the ratio $\rho(T_J)/\rho(T_G) \approx 5.66$ means it needs about $5$–$6$ times fewer iterations.

   </details>

6. Adjon meg egy rendszert, amelyen a Jacobi-iteráció divergál! Tekintse az $\mathbf{A} = \left(\begin{smallmatrix} 1 & 2 & -2 \\ 1 & 1 & 1 \\ 2 & 2 & 1 \end{smallmatrix}\right)$ mátrixot.

   <details class="reveal-solution"><summary>Megoldás</summary>

   The Jacobi iteration matrix is $T_J = \left(\begin{smallmatrix} 0 & -2 & 2 \\ -1 & 0 & -1 \\ -2 & -2 & 0 \end{smallmatrix}\right)$, which has $\rho(T_J) > 1$, so the Jacobi iteration **diverges** for this matrix. (The Gauss–Seidel iteration may converge or diverge depending on the specific structure — there are matrices for which Jacobi diverges but Gauss–Seidel converges, and vice versa.)

   </details>
