## 4.3. Gauss–Seidel Iteration

**Example 4.12.** Consider again the system (4.9), and its equivalent form (4.10). Define the iteration

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k+1)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k+1)} + 4x_2^{(k+1)})/12.
\end{aligned}
\tag{4.16}
$$

The difference between the iterations (4.11) and (4.16) is that here if a new value of a variable $x_i$ is computed, then its is immediately used in the computation of the next iteration. The $k+1$-th value of $x_1$ is computed in the first equation, then in the computation of the new value of $x_2$ the updated value of $x_1^{(k+1)}$ is used in the second equation (which is hopefully a better approximation of $x_1$ than $x_1^{(k)}$) together with $x_3^{(k)}$, which has no new value at this moment. In Table 4.2 we present the numerical results corresponding to the initial values $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$. We can observe that this method converges faster to the limits than the Jacobi iteration. $\qquad\square$

**Table 4.2: Gauss–Seidel iteration**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.660000  | 3.230000   |
| 2  | 1.442000   | -1.888600  | 2.926633   |
| 3  | 0.918487   | -2.023639  | 3.012499   |
| 4  | 1.016683   | -1.995413  | 2.997358   |
| 5  | 0.996720   | -2.000920  | 3.000513   |
| 6  | 1.000655   | -1.999818  | 2.999897   |
| 7  | 0.999870   | -2.000036  | 3.000020   |
| 8  | 1.000026   | -1.999993  | 2.999996   |
| 9  | 0.999995   | -2.000001  | 3.000001   |
| 10 | 1.000001   | -2.000000  | 3.000000   |
| 11 | 1.000000   | -2.000000  | 3.000000   |

Now consider again the general linear system (4.13). Motivated by the example above, we define the *Gauss–Seidel iteration* to solve the system (4.13). For $k = 0, 1, 2, \ldots$ (if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$) we define

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.17}$$

Equation (4.17) can be rearranged to

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

i.e., using matrix notation,

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

where $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ is defined in the previous section. So the Gauss–Seidel iteration can be written in the form (4.12) with $\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}$ and $\mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}$.

Theorem 4.6 and Corollary 4.7 imply immediately the next results.

**Theorem 4.13.** *The Gauss–Seidel iteration is convergent for any initial value if and only if* $\rho(\mathbf{T}_G) < 1$.

**Corollary 4.14.** *If* $\|\mathbf{T}_G\| < 1$ *in some matrix norm* $\|\cdot\|$, *then the Gauss–Seidel iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

Similarly to the Jacobi iteration, the Gauss–Seidel iteration is also convergent if the coefficient matrix is diagonally dominant.

**Theorem 4.15.** *If* $\mathbf{A}$ *is diagonally dominant, then the Gauss–Seidel iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

**Proof.** Let $\mathbf{x} = (x_1, \ldots, x_n)^T$ be the solution of equation (4.13). Then we express $x_i$ from the $i$th equation of (4.13), and subtracting it from (4.17), we get

$$x_i^{(k+1)} - x_i = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} (x_j^{(k+1)} - x_j) - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} (x_j^{(k)} - x_j).$$

Therefore,

$$|x_i^{(k+1)} - x_i| \leq \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k+1)} - x_j| + \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k)} - x_j|. \tag{4.18}$$

Let

$$\alpha_i := \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| \qquad \text{and} \qquad \beta_i := \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right|.$$

With this notation inequality (4.18) yields

$$|x_i^{(k+1)} - x_i| \leq \alpha_i \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_i \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty$$

for $i = 1, \ldots, n$. Let $l$ be an index for which $|x_l^{(k+1)} - x_l| = \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty$. Then

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \alpha_l \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_l \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

The matrix $\mathbf{A}$ is diagonally dominant, therefore, $\alpha_l < 1$, and so

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \frac{\beta_l}{1 - \alpha_l} \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

Hence we obtain

$$\|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty \leq \left( \max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \right)^k \|\mathbf{x}^{(0)} - \mathbf{x}\|_\infty.$$

This guarantees that the Gauss–Seidel iteration is convergent, since the diagonal dominance yields

$$\frac{\beta_l}{1 - \alpha_l} \leq \alpha_l + \beta_l < 1$$

for all $l = 1, \ldots, n$, and so

$$\max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \leq \max_{l=1,\ldots,n} \{\alpha_l + \beta_l\} = \|\mathbf{T}_J\|_\infty < 1 \tag{4.19}$$

follows. $\qquad\square$

Estimate (4.19) yields that the error estimate of the Gauss–Seidel iteration is better than that of for the Jacobi iteration. So, in general, the Gauss–Seidel iteration converges faster for the case of a diagonally dominant coefficient matrix. In the general case the Gauss–Seidel iteration is faster than the Jacobi iteration if $\rho(\mathbf{T}_G) < \rho(\mathbf{T}_J)$. But we do not know a general condition in terms of the coefficient matrix $\mathbf{A}$ to check this relation. We formulate one result below for a special case without proof.

**Theorem 4.16 (Stein–Rosenberg).** *Suppose* $a_{ij} \leq 0$ *if* $i \neq j$ *and* $a_{ii} > 0$ *for all* $i = 1, \ldots, n$. *Then exactly one of the statements holds:*

&nbsp;&nbsp;*1.* $0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$,

&nbsp;&nbsp;*2.* $1 < \rho(\mathbf{T}_J) < \rho(\mathbf{T}_G)$,

&nbsp;&nbsp;*3.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 0$,

&nbsp;&nbsp;*4.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 1$.

The theorem implies that for systems satisfying the conditions of the theorem the Jacobi iteration is convergent if and only if the Gauss–Seidel iteration is convergent, and the Gauss–Seidel iteration is faster. But in general we can find examples when the Jacobi iteration converges faster than the Gauss–Seidel iteration.

### Exercises

1. Solve the systems given in Exercise 1 of the previous section using Gauss–Seidel iteration.

2. Show that both the Jacobi and the Gauss–Seidel iteration determine the exact root of the system in finitely many steps if $\mathbf{A}$ is upper triangular and $a_{ii} \neq 0$ for $i = 1, \ldots, n$.

