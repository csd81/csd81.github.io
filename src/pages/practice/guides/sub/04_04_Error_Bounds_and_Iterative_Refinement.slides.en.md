## 4.4. Error Bounds and the Condition Number

We can introduce stopping criteria for the Jacobi and the Gauss–Seidel iterations similar to nonlinear iterations:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

The vector

$$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}$$

is called the **residual vector** of the approximate solution $\bar{\mathbf{x}}$ of the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}.$$

Hypothesis: if the norm of $\mathbf{r}$ is small, then $\bar{\mathbf{x}}$ is a good approximation of the exact solution $\mathbf{x}$.

> **Example.** The exact solution of the linear system
> $$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
> is $\mathbf{x} = (1, 1)^T$. Consider
> $$\bar{\mathbf{x}} = (2, -3)^T$$
> as the "approximate" solution. The corresponding residual vector is
> $$\mathbf{r} = \mathbf{b} - \mathbf{A}\bar{\mathbf{x}} = (0, 0.03)^T.$$
> Its infinity norm is
> $$\|\mathbf{r}\|_\infty = 0.03,$$
> which is small, but $\bar{\mathbf{x}}$ cannot be considered as a good approximation of the true solution.

The next result gives conditions which imply that the smallness of the norm of $\|\mathbf{r}\|$ yields that the error of the approximation is also small.

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, $\mathbf{x}$ be the exact solution of the system
> $$\mathbf{A}\mathbf{x} = \mathbf{b},$$
> the vector $\bar{\mathbf{x}}$ is an approximate solution, and
> $$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}.$$
> Then
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|,$$
> and
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

> **Proof.** Subtracting relations
> $$\mathbf{A}\mathbf{x} = \mathbf{b}, \qquad \mathbf{A}\bar{\mathbf{x}} = \mathbf{b} - \mathbf{r}$$
> we get
> $$\mathbf{A}(\mathbf{x} - \bar{\mathbf{x}}) = \mathbf{r},$$
> and hence
> $$\mathbf{x} - \bar{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}.$$
> Then
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| = \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|.$$
> Combining it with
> $$\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> we get
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

The number

$$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$$

is called the **condition number** of the matrix $\mathbf{A}$ relative to a norm $\|\cdot\|$. The condition number corresponding to the $\|\cdot\|_p$ norm is denoted by $\mathrm{cond}_p(\mathbf{A})$. If a condition number of the matrix $\mathbf{A}$ is "big", then it is called **ill-conditioned**, otherwise it is called **well-conditioned**.

> **Example.** Consider the coefficient matrix $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}$ of an earlier example. We can check that
> $$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 143.3 & -133.3 \end{pmatrix},$$
> and so $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Therefore $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, hence $\mathbf{A}$ is ill-conditioned, and so $(2, -3)^T$ is not a good approximation of the true solution despite the fact that $\mathbf{r}$ is small in norm.

---

