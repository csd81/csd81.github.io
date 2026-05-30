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
