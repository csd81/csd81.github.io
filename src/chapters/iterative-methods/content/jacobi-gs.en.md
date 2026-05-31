## 4.2 Jacobi iteration

**Example 4.8.** Solve the system

$$\begin{array}{rcrcrcr}
5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
-3x_1 & + & 4x_2 & - & 12x_3 & = & -47.
\end{array} \tag{4.9}$$

Solve each equation for its diagonal unknown:

$$x_1 = \tfrac{-4 - 3x_2 + x_3}{5}, \quad x_2 = \tfrac{-25 + 2x_1 + x_3}{10}, \quad x_3 = \tfrac{47 - 3x_1 + 4x_2}{12}. \tag{4.10}$$

This is a fixed-point equation; iterating it (using **old** values on the right) defines the **Jacobi iteration**:

$$x_i^{(k+1)} = \frac{1}{a_{ii}}\left( b_i - \sum_{j \neq i} a_{ij}\, x_j^{(k)} \right), \qquad i = 1, \ldots, n. \tag{4.15}$$

Starting from $\mathbf{x}^{(0)} = \mathbf{0}$ the sequence converges to $(1, -2, 3)$:

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0 | 0.000000 | 0.000000 | 0.000000 |
| 1 | −0.800000 | −2.500000 | 3.916667 |
| 2 | 1.483333 | −2.268333 | 3.283333 |
| 3 | 1.217667 | −1.875000 | 2.789722 |
| ⋮ | ⋮ | ⋮ | ⋮ |
| 17 | 1.000001 | −2.000000 | 2.999999 |
| 18 | 1.000000 | −2.000000 | 3.000000 |

In matrix form $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ with

$$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix}, \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$

Since $\|\mathbf{T}\|_\infty = \max\{4/5,\, 3/10,\, 7/12\} = 4/5 < 1$, the iteration converges.

### General form

Writing $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$ (strict lower, diagonal, strict upper), the system $\mathbf{A}\mathbf{x} = \mathbf{b}$ becomes $\mathbf{D}\mathbf{x} = -(\mathbf{L}+\mathbf{U})\mathbf{x} + \mathbf{b}$, giving the **Jacobi matrix** $\mathbf{T}_J = -\mathbf{D}^{-1}(\mathbf{L}+\mathbf{U})$, $\mathbf{c}_J = \mathbf{D}^{-1}\mathbf{b}$.

> **Theorem 4.9.** The Jacobi iteration converges for all initial values if and only if $\rho(\mathbf{T}_J) < 1$.

> **Corollary 4.10.** If $\|\mathbf{T}_J\| < 1$ in some matrix norm, the Jacobi iteration converges for all $\mathbf{x}^{(0)}$.

> **Theorem 4.11.** If $\mathbf{A}$ is **diagonally dominant** ($|a_{ii}| > \sum_{j\neq i}|a_{ij}|$ for every row), then the Jacobi iteration converges for all $\mathbf{x}^{(0)}$, because $\|\mathbf{T}_J\|_\infty < 1$.

## 4.3 Gauss–Seidel iteration

**Example 4.12.** For the same system (4.9), immediately reuse each freshly computed component:

$$\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k+1)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k+1)} + 4x_2^{(k+1)})/12.
\end{aligned} \tag{4.16}$$

This converges **faster** — to the same $(1,-2,3)$ in about 11 steps instead of 18:

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0 | 0.000000 | 0.000000 | 0.000000 |
| 1 | −0.800000 | −2.660000 | 3.230000 |
| 2 | 1.442000 | −1.888600 | 2.926633 |
| 3 | 0.918487 | −2.023639 | 3.012499 |
| ⋮ | ⋮ | ⋮ | ⋮ |
| 10 | 1.000001 | −2.000000 | 3.000000 |
| 11 | 1.000000 | −2.000000 | 3.000000 |

### General form

In components,
$$x_i^{(k+1)} = \frac{1}{a_{ii}}\left( b_i - \sum_{j < i} a_{ij}\, x_j^{(k+1)} - \sum_{j > i} a_{ij}\, x_j^{(k)} \right), \tag{4.17}$$

i.e. $(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b}$, giving the **Gauss–Seidel matrix** $\mathbf{T}_G = -(\mathbf{D}+\mathbf{L})^{-1}\mathbf{U}$, $\mathbf{c}_G = (\mathbf{D}+\mathbf{L})^{-1}\mathbf{b}$.

> **Theorem 4.13.** The Gauss–Seidel iteration converges for any initial value if and only if $\rho(\mathbf{T}_G) < 1$.

> **Corollary 4.14.** If $\|\mathbf{T}_G\| < 1$ in some matrix norm, it converges for all $\mathbf{x}^{(0)}$.

> **Theorem 4.15.** If $\mathbf{A}$ is diagonally dominant, the Gauss–Seidel iteration converges for all $\mathbf{x}^{(0)}$. Moreover its error estimate is at least as good as Jacobi's:
> $$\max_{l} \frac{\beta_l}{1 - \alpha_l} \leq \|\mathbf{T}_J\|_\infty < 1, \quad \text{where } \alpha_i = \sum_{j<i}\tfrac{|a_{ij}|}{|a_{ii}|},\; \beta_i = \sum_{j>i}\tfrac{|a_{ij}|}{|a_{ii}|}.$$

## Comparing the two methods

For a diagonally dominant matrix Gauss–Seidel usually converges faster. In general it is faster when $\rho(\mathbf{T}_G) < \rho(\mathbf{T}_J)$, but no simple condition on $\mathbf{A}$ decides this. One special case:

> **Theorem 4.16 (Stein–Rosenberg).** Suppose $a_{ij} \leq 0$ for $i \neq j$ and $a_{ii} > 0$ for all $i$. Then exactly one of the following holds:
> 1. $0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$;
> 2. $1 < \rho(\mathbf{T}_J) < \rho(\mathbf{T}_G)$;
> 3. $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 0$;
> 4. $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 1$.

So under these hypotheses the two methods converge together, and when they do, Gauss–Seidel is faster. In general, though, either method can be the faster one.

## Exercises

1. Solve the following systems with the Jacobi iteration, starting from $\mathbf{x}^{(0)} = \mathbf{0}$:

   (a) $6.2x_1 + 1.1x_2 - 3.4x_3 = 5.1$, $\ -0.6x_1 + 2.9x_2 + 0.3x_3 = -7.2$, $\ 1.1x_1 - 0.6x_2 + 4.4x_3 = 3.1$;

   (b) the $4\times4$ system $-8x_1 + 3x_2 - 2x_3 - 2x_4 = 6$, $\ 2x_1 + 6x_2 + x_3 - x_4 = 5$, $\ 3x_1 - 3x_2 + 10x_3 + 3x_4 = -17$, $\ x_2 - 3x_3 + 7x_4 = 3$.

   <details class="reveal-solution"><summary>Show solution</summary>

   **(a)** Check diagonal dominance: Row 1: $6.2 > 1.1 + 3.4 = 4.5$; Row 2: $2.9 > 0.6 + 0.3 = 0.9$; Row 3: $4.4 > 1.1 + 0.6 = 1.7$. Dominant, so Jacobi converges. The iteration formulas are $x_1^{(k+1)} = (5.1 - 1.1x_2^{(k)} + 3.4x_3^{(k)})/6.2$, $x_2^{(k+1)} = (-7.2 + 0.6x_1^{(k)} - 0.3x_3^{(k)})/2.9$, $x_3^{(k+1)} = (3.1 - 1.1x_1^{(k)} + 0.6x_2^{(k)})/4.4$. From $\mathbf{x}^{(0)} = \mathbf{0}$: iteration 1 gives $(0.8226,\ -2.4828,\ 0.7045)$; iteration 2 gives $(1.6502,\ -2.3806,\ 0.1610)$; iteration 3 gives $(1.3350,\ -2.1560,\ -0.0329)$. Continue (about 15–20 iterations for 5-digit accuracy). Exact solution $\mathbf{x} \approx (1,\ -2,\ 0.5)^T$.

   **(b)** Diagonal dominance: $8 > 7$, $6 > 4$, $10 > 9$, $7 > 4$ — all hold, so Jacobi converges. The formulas are $x_1^{(k+1)} = (6 - 3x_2^{(k)} + 2x_3^{(k)} + 2x_4^{(k)})/(-8)$, $x_2^{(k+1)} = (5 - 2x_1^{(k)} - x_3^{(k)} + x_4^{(k)})/6$, $x_3^{(k+1)} = (-17 - 3x_1^{(k)} + 3x_2^{(k)} - 3x_4^{(k)})/10$, $x_4^{(k+1)} = (3 - x_2^{(k)} + 3x_3^{(k)})/7$. From $\mathbf{0}$: iteration 1 gives $(-0.75,\ 0.8333,\ -1.7,\ 0.4286)$; iteration 2 gives $(-0.1197,\ 1.4381,\ -1.3536,\ -0.4190)$. Continue until convergence.

   </details>

2. Show that the Jacobi iteration converges if $\mathbf{A}$ is **column** diagonally dominant, i.e. $|a_{jj}| > \sum_{i\neq j}|a_{ij}|$ for all $j$.

   <details class="reveal-solution"><summary>Show solution</summary>

   The Jacobi iteration matrix is $T_J = -D^{-1}(L + U)$ with $(T_J)_{ij} = -a_{ij}/a_{ii}$ for $i \neq j$ and $0$ on the diagonal. Column diagonal dominance of $\mathbf{A}$ is equivalent to row diagonal dominance of $\mathbf{A}^T$. The Jacobi matrix for $\mathbf{A}^T\mathbf{y} = \mathbf{c}$ is $T_J(\mathbf{A}^T) = -D^{-1}(L^T + U^T) = T_J(\mathbf{A})^T$. Since $\mathbf{A}^T$ is row diagonally dominant, $\|T_J(\mathbf{A}^T)\|_\infty = \max_i \sum_{j\neq i}|a_{ji}|/|a_{ii}| < 1$. Because $\rho(\mathbf{M}) = \rho(\mathbf{M}^T)$, $\rho(T_J(\mathbf{A})) = \rho(T_J(\mathbf{A})^T) \leq \|T_J(\mathbf{A})^T\|_\infty < 1$. Hence the Jacobi iteration converges. $\square$

   </details>

3. Apply the Gauss–Seidel iteration to the systems of Exercise 1, and compare the number of iterations with Jacobi.

   <details class="reveal-solution"><summary>Show solution</summary>

   Gauss–Seidel reuses new values immediately. For system (a): $x_1^{(k+1)} = (5.1 - 1.1x_2^{(k)} + 3.4x_3^{(k)})/6.2$, $x_2^{(k+1)} = (-7.2 + 0.6x_1^{(k+1)} - 0.3x_3^{(k)})/2.9$, $x_3^{(k+1)} = (3.1 - 1.1x_1^{(k+1)} + 0.6x_2^{(k+1)})/4.4$. From $\mathbf{0}$: iteration 1 gives $(0.8226,\ -2.3172,\ 0.1830)$; iteration 2 gives $(1.3318,\ -2.2296,\ 0.0675)$. Gauss–Seidel typically converges in fewer iterations than Jacobi (here roughly 10–12 versus 15–20). For the $4\times4$ system the analogous formulas give iteration 1 as $(-0.75,\ 1.0833,\ -1.15,\ -0.2190)$, again converging faster than Jacobi.

   </details>

4. Show that the Jacobi and Gauss–Seidel iterations find the exact solution in finitely many steps if $\mathbf{A}$ is upper triangular with $a_{ii} \neq 0$.

   <details class="reveal-solution"><summary>Show solution</summary>

   For an upper triangular $\mathbf{A}$, $a_{ij} = 0$ for $i > j$ and $L = 0$, so both methods reduce to the same formula $x_i^{(k+1)} = -\sum_{j=i+1}^n \tfrac{a_{ij}}{a_{ii}} x_j^{(k)} + \tfrac{b_i}{a_{ii}}$. For the last row $i = n$, $x_n^{(k+1)} = b_n/a_{nn}$ is the exact value already after iteration 1 (independent of $\mathbf{x}^{(k)}$). For $i = n-1$ the update uses $x_n$, so after iteration 2, $x_{n-1}$ is exact. By induction, after iteration $m$ the components $x_n, x_{n-1}, \dots, x_{n-m+1}$ are exact, so after iteration $n$ all components are exact. Both methods converge in exactly $n$ iterations. $\square$

   </details>

5. Compare the Jacobi and Gauss–Seidel iteration matrices for the system $4x_1 - x_2 = 3$, $-x_1 + 4x_2 - x_3 = 2$, $-x_2 + 4x_3 = 3$.

   <details class="reveal-solution"><summary>Show solution</summary>

   With $D = \operatorname{diag}(4,4,4)$, the Jacobi matrix is $T_J = -D^{-1}(L+U) = \left(\begin{smallmatrix} 0 & 1/4 & 0 \\ 1/4 & 0 & 1/4 \\ 0 & 1/4 & 0 \end{smallmatrix}\right)$ with eigenvalues $0, \pm\sqrt2/4$, so $\rho(T_J) = \sqrt2/4 \approx 0.354$. The Gauss–Seidel matrix is $T_G = -(D+L)^{-1}U = \left(\begin{smallmatrix} 0 & 1/4 & 0 \\ 0 & 1/16 & 1/4 \\ 0 & 1/64 & 1/16 \end{smallmatrix}\right)$ with eigenvalues $0, 1/16, 1/16$, so $\rho(T_G) = 1/16 = 0.0625$. Since $\rho(T_G) < \rho(T_J)$, Gauss–Seidel converges faster — the ratio $\rho(T_J)/\rho(T_G) \approx 5.66$ means it needs about $5$–$6$ times fewer iterations.

   </details>

6. Give a system on which the Jacobi iteration diverges. Consider $\mathbf{A} = \left(\begin{smallmatrix} 1 & 2 & -2 \\ 1 & 1 & 1 \\ 2 & 2 & 1 \end{smallmatrix}\right)$.

   <details class="reveal-solution"><summary>Show solution</summary>

   The Jacobi iteration matrix is $T_J = \left(\begin{smallmatrix} 0 & -2 & 2 \\ -1 & 0 & -1 \\ -2 & -2 & 0 \end{smallmatrix}\right)$, which has $\rho(T_J) > 1$, so the Jacobi iteration **diverges** for this matrix. (The Gauss–Seidel iteration may converge or diverge depending on the specific structure — there are matrices for which Jacobi diverges but Gauss–Seidel converges, and vice versa.)

   </details>
