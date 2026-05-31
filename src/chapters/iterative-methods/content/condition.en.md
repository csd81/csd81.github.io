## 4.4 Error bounds

Stopping criteria for the iterations (analogous to nonlinear ones):

$$\text{(i)}\ \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)}\ \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)}\ \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

For an approximate solution $\tilde{\mathbf{x}}$ of $\mathbf{A}\mathbf{x} = \mathbf{b}$, the **residual** is $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. Criterion (iii) hopes that a small residual means a small error — but this can fail.

**Example 4.17.** The exact solution of
$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
is $\mathbf{x} = (1,1)^T$. The "approximation" $\tilde{\mathbf{x}} = (2,-3)^T$ has residual $\mathbf{r} = (0,\,0.03)^T$ with $\|\mathbf{r}\|_\infty = 0.03$ — tiny, yet $\tilde{\mathbf{x}}$ is nowhere near the truth.

> **Theorem 4.18.** Let $\mathbf{A}$ be nonsingular, $\mathbf{x}$ the exact solution, $\tilde{\mathbf{x}}$ an approximation, and $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. Then
> $$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\|\,\|\mathbf{r}\|, \tag{4.21}$$
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\,\|\mathbf{A}^{-1}\|\,\frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

> **Definition.** The **condition number** of $\mathbf{A}$ relative to a norm is $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\,\|\mathbf{A}^{-1}\|$ (denoted $\operatorname{cond}_p$ for the $p$-norm). A matrix is **ill-conditioned** if this is large (say $> 100$–$1000$), otherwise **well-conditioned**.

**Example 4.19.** For the matrix above,
$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$
so $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$, giving $\operatorname{cond}_\infty(\mathbf{A}) = 1346$. This large value explains why the small residual in Example 4.17 hid a big error.

## Iterative refinement

Solving $\mathbf{A}\mathbf{x} = \mathbf{b}$ by Gaussian elimination in $t$-digit arithmetic gives $\tilde{\mathbf{x}}$ with $\|\mathbf{r}\| \approx 10^{-t}\|\mathbf{A}\|\,\|\tilde{\mathbf{x}}\|$ (computing $\mathbf{r}$ in double precision). Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ gives $\tilde{\mathbf{y}} \approx \mathbf{x} - \tilde{\mathbf{x}}$, so it estimates the error — and the condition number:

$$\operatorname{cond}(\mathbf{A}) \approx 10^{t}\,\frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|}. \tag{4.23}$$

The corrected solution $\bar{\mathbf{x}} = \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$ has a much smaller residual. Repeating this is **iterative refinement** (residual correction):

```
INPUT  A, b, N (max iters), TOL, t (digits)
solve A x = b by Gaussian elimination
for k = 1, 2, ..., N:
    r = b - A x          (double precision)
    solve A y = r
    z = x + y
    if k = 1:  COND = 10^t * ||y|| / ||x||;  output COND
    if ||y|| < TOL:  output z; stop
    x = z
output "max iterations exceeded"
```

**Example 4.21.** For the system of Example 4.17 with 4-digit arithmetic, $\tilde{\mathbf{x}} = (0.9375,\,1.25)^T$, $\mathbf{r} = (0,\,0.001875)^T$. Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ gives $\tilde{\mathbf{y}} = (0.0586,\,-0.2344)^T$, so by (4.23)
$$\operatorname{cond}_\infty(\mathbf{A}) \approx 10^4\,\frac{0.2344}{1.25} = 1875,$$
close to the true $1346$. One refinement step yields $\mathbf{x}^{(2)} = \tilde{\mathbf{x}} + \tilde{\mathbf{y}} = (0.9961,\,1.016)^T$ — much closer to $(1,1)$.

## 4.5 Perturbation of linear systems

Suppose we perturb the right-hand side: instead of $\mathbf{A}\mathbf{x} = \mathbf{b}$ (4.25) we solve $\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}$ (4.26) with $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$.

> **Theorem 4.22.** With $\mathbf{A}$ nonsingular,
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \operatorname{cond}(\mathbf{A})\,\frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

So one order of magnitude in $\operatorname{cond}(\mathbf{A})$ can cost one significant digit. Perturbing **both** $\mathbf{A}$ and $\mathbf{b}$ (solving $\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}$, eq. 4.27):

> **Theorem 4.23.** If $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$, then
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\operatorname{cond}(\mathbf{A})}{1 - \operatorname{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}}\left(\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}\right).$$

> **Theorem 4.24.** For a fixed matrix norm and all invertible $\mathbf{A}$:
> 1. $\operatorname{cond}(\mathbf{A}) \geq 1$;
> 2. $\rho(\mathbf{A})\,\rho(\mathbf{A}^{-1}) \leq \operatorname{cond}(\mathbf{A})$.

The number $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\,\rho(\mathbf{A}^{-1})$ is the **spectral condition number** — the smallest of all condition numbers, but harder to compute (it needs eigenvalues).

> **Theorem 4.25 (Gastinel).** For an invertible $\mathbf{A}$,
> $$\frac{1}{\operatorname{cond}(\mathbf{A})} = \min\left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ singular} \right\}.$$

So a large condition number means there is a singular matrix close to $\mathbf{A}$.

## The Hilbert matrix

The classic ill-conditioned family is the **Hilbert matrix** $\mathbf{H}_n$ with entries $1/(i+j-1)$. Its spectral condition number explodes with $n$ (Table 4.3):

| $n$ | $\operatorname{cond}_*(\mathbf{H}_n)$ | $n$ | $\operatorname{cond}_*(\mathbf{H}_n)$ |
|----|------|----|------|
| 3 | $5.24\cdot 10^2$ | 7 | $4.75\cdot 10^8$ |
| 4 | $1.55\cdot 10^4$ | 8 | $1.53\cdot 10^{10}$ |
| 5 | $4.77\cdot 10^5$ | 9 | $4.93\cdot 10^{11}$ |
| 6 | $1.50\cdot 10^7$ | 10 | $1.60\cdot 10^{13}$ |

*(Values match those computed by the interactive calculator below and by standard software; the printed textbook table has a typo at $n=6$.)*

## Exercises

1. Compute $\operatorname{cond}_\infty(\mathbf{A})$ and $\operatorname{cond}_1(\mathbf{A})$ for (a) $\mathbf{A} = \left(\begin{smallmatrix} 1 & 2 \\ 2 & -1 \end{smallmatrix}\right)$ and (b) $\mathbf{A} = \left(\begin{smallmatrix} 0 & 2 & 1 \\ 1 & 0 & 1 \\ 1 & -1 & 1 \end{smallmatrix}\right)$.

   <details class="reveal-solution"><summary>Show solution</summary>

   **(a)** $\mathbf{A}^{-1} = \tfrac{1}{-5}\left(\begin{smallmatrix} -1 & -2 \\ -2 & 1 \end{smallmatrix}\right) = \left(\begin{smallmatrix} 1/5 & 2/5 \\ 2/5 & -1/5 \end{smallmatrix}\right)$. Then $\|\mathbf{A}\|_\infty = \max\{3,3\} = 3$ and $\|\mathbf{A}^{-1}\|_\infty = \max\{3/5,3/5\} = 3/5$, so $\operatorname{cond}_\infty(\mathbf{A}) = 3 \cdot 3/5 = 1.8$. The same row/column sums give $\operatorname{cond}_1(\mathbf{A}) = 1.8$.

   **(b)** $\mathbf{A}^{-1} = \left(\begin{smallmatrix} -1/2 & 3/2 & -1 \\ 0 & 1/2 & -1/2 \\ 1/2 & -1/2 & 1/2 \end{smallmatrix}\right)$. For the $\infty$-norm, $\|\mathbf{A}\|_\infty = \max\{3,2,3\} = 3$, $\|\mathbf{A}^{-1}\|_\infty = \max\{3,1,1.5\} = 3$, so $\operatorname{cond}_\infty(\mathbf{A}) = 9$. For the $1$-norm, $\|\mathbf{A}\|_1 = \max\{2,3,3\} = 3$, $\|\mathbf{A}^{-1}\|_1 = \max\{1,2.5,2\} = 2.5$, so $\operatorname{cond}_1(\mathbf{A}) = 7.5$.

   </details>

2. Estimate $\operatorname{cond}_\infty(\mathbf{A})$ for the $3\times3$ Hilbert matrix $\mathbf{A} = \left(\begin{smallmatrix} 1 & 1/2 & 1/3 \\ 1/2 & 1/3 & 1/4 \\ 1/3 & 1/4 & 1/5 \end{smallmatrix}\right)$.

   <details class="reveal-solution"><summary>Show solution</summary>

   This is the Hilbert matrix $\mathbf{H}_3$, with $\operatorname{cond}_*(\mathbf{H}_3) \approx 5.24 \times 10^2$ from Table 4.3; since $\operatorname{cond}_\infty(\mathbf{A}) \geq \operatorname{cond}_*(\mathbf{A})$ we get $\operatorname{cond}_\infty(\mathbf{A}) \gtrsim 524$. Directly: $\mathbf{A}^{-1} = \left(\begin{smallmatrix} 9 & -36 & 30 \\ -36 & 192 & -180 \\ 30 & -180 & 180 \end{smallmatrix}\right)$, with $\|\mathbf{A}\|_\infty = 1.833$ and $\|\mathbf{A}^{-1}\|_\infty = \max\{75,408,390\} = 408$, hence $\operatorname{cond}_\infty(\mathbf{A}) = 1.833 \times 408 \approx 748$.

   </details>

3. Use iterative refinement to improve the solution of $0.009x_1 - 0.52x_2 = -5.191$, $\ 9211x_1 + 21.1x_2 = 9422$ (exact solution $\mathbf{x} = (1,10)^T$).

   <details class="reveal-solution"><summary>Show solution</summary>

   Gaussian elimination with partial pivoting (swap rows since $9211 > 0.009$) and 4-digit arithmetic gives the multiplier $l_{21} = 0.009/9211 \approx 9.771\times10^{-7}$, leading to back substitution $x_2 = -5.200/(-0.5200) = 10.00$ and $x_1 = (9422 - 21.1\cdot10)/9211 = 1.000$ — exact here. Suppose rounding gave $\tilde{\mathbf{x}} = (0.99, 10.1)^T$. The residual (double precision) is $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} \approx (0.0484, 91.0)^T$. Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ gives $\mathbf{y} \approx (0.01, -0.09)^T$, so the update is $\mathbf{z} = \tilde{\mathbf{x}} + \mathbf{y} = (1.00, 10.01)^T$. The condition estimate is $\operatorname{cond}(\mathbf{A}) \approx 10^4 \cdot \|\mathbf{y}\|_\infty/\|\tilde{\mathbf{x}}\|_\infty = 10^4 \cdot 0.09/10.1 \approx 89$. After 2–3 refinement steps the solution converges to $(1,10)^T$.

   </details>
