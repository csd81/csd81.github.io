## 4.4. Error Bounds and Iterative Refinement

We can introduce stopping criteria for the Jacobi and the Gauss–Seidel iterations similar to nonlinear iterations. As we defined in Section 2.8, we can use the following stopping criteria or any combination of them:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon \quad \text{and} \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Condition (iii) is a natural analogue of condition (iii) of Section 2.8 used for nonlinear equations. We investigate this criterion in this section.

The vector $\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ is called the *residual vector* of the approximate solution $\tilde{\mathbf{x}}$ of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$. The stopping criterion (iii) relies on the hypothesis that if the norm of $\mathbf{r}$ is small, then $\tilde{\mathbf{x}}$ is a good approximation of the exact solution $\mathbf{x}$. The following example shows that this is not necessarily true in general.

**Example 4.17.** The exact solution of the linear system

$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} \tag{4.20}$$

is $\mathbf{x} = (1, 1)^T$. Consider $\tilde{\mathbf{x}} = (2, -3)^T$ as the "approximate" solution. The corresponding residual vector is $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.03)^T$. Its infinity norm is $\|\mathbf{r}\|_\infty = 0.03$, which is small, but $\tilde{\mathbf{x}}$ cannot be considered as a good approximation of the true solution. $\qquad\square$

The next result gives conditions which imply that the smallness of the norm of $\|\mathbf{r}\|$ yields that the error of the approximation is also small.

**Theorem 4.18.** *Let* $\mathbf{A}$ *be a nonsingular square matrix,* $\mathbf{x}$ *be the exact solution of the system* $\mathbf{A}\mathbf{x} = \mathbf{b}$, *the vector* $\tilde{\mathbf{x}}$ *is an approximate solution, and* $\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. *Then*

$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|, \tag{4.21}$$

*and*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

**Proof.** From the relations $\mathbf{A}\mathbf{x} = \mathbf{b}$ and $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$ we have $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r}$, and hence $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$. This relation together with $\|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$ implies (4.21).

Estimates (4.21) and $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ yield

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

$\square$

The previous result answers our previous question: if the residual vector is small in norm, then it implies the smallness of the error of the approximation only if the product $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ is not too big. The number $\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ is called the *condition number* of the matrix $\mathbf{A}$ relative to a norm $\|\cdot\|$. The condition number corresponding to the $\|\cdot\|_p$ norm is denoted by $\mathrm{cond}_p(\mathbf{A})$. If a condition number of the matrix $\mathbf{A}$ is "big", then it is called *ill-conditioned*, otherwise it is called *well-conditioned*. It is not defined exactly how big the condition number should be in order to call the matrix ill-conditioned. In practice, if the condition number is bigger than 100–1000, then we say that the matrix is ill-conditioned. Therefore, if the coefficient matrix is ill-conditioned then the stopping criterion (iii) is not reliable.

**Example 4.19.** Consider the coefficient matrix $\mathbf{A}$ of Example 4.17. We can check that

$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$

and so $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Therefore, $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, and Theorem 4.18 explains why $(2, -3)^T$ is not a good approximation of the true solution despite the fact that $\mathbf{r}$ is small in norm. $\qquad\square$

Suppose we solve the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ with Gaussian elimination and $t$-digit arithmetic. Let $\tilde{\mathbf{x}}$ be the numerical solution, which, in general, has rounding error. We compute the residual vector $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$, but using here $2t$-digit arithmetic (double precision) for the computation of $\mathbf{r}$. It can be shown that

$$\|\mathbf{r}\| \approx 10^{-t} \|\mathbf{A}\| \|\tilde{\mathbf{x}}\|.$$

We can use this relation to estimate the condition number of $\mathbf{A}$ in the following way: Consider the equation $\mathbf{A}\mathbf{y} = \mathbf{r}$, and let $\tilde{\mathbf{y}}$ be its numerical solution using $t$-digit arithmetic. Note that the linear system $\mathbf{A}\mathbf{y} = \mathbf{r}$ can be solved effectively if we store the $l_{ij}$ factors and the row changes used in the first Gaussian elimination, and now we do the elimination steps only on the vector $\mathbf{r}$. (In Section 5.1 below we will show an effective method for solving several linear systems with the same coefficient matrix.) Then

$$\tilde{\mathbf{y}} \approx \mathbf{A}^{-1}\mathbf{r} = \mathbf{A}^{-1}(\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}) = \mathbf{A}^{-1}\mathbf{b} - \tilde{\mathbf{x}} = \mathbf{x} - \tilde{\mathbf{x}},$$

so $\|\tilde{\mathbf{y}}\|$ is an estimate of the error $\|\mathbf{x} - \tilde{\mathbf{x}}\|$, and

$$\|\tilde{\mathbf{y}}\| \approx \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\| \approx \|\mathbf{A}^{-1}\| \|\mathbf{A}\| 10^{-t} \|\tilde{\mathbf{x}}\| = 10^{-t}\mathrm{cond}(\mathbf{A}) \|\tilde{\mathbf{x}}\|.$$

From this we get the formula

$$\mathrm{cond}(\mathbf{A}) \approx 10^t \frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|} \tag{4.23}$$

as an approximation of the condition number. Let $\tilde{\mathbf{r}} := \mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}$ be the residual vector of $\tilde{\mathbf{y}}$. In general, $\|\tilde{\mathbf{r}}\|$ is much smaller than $\|\mathbf{r}\|$, therefore, if instead of $\tilde{\mathbf{x}}$ we consider $\bar{\mathbf{x}} := \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$ as the approximation of $\mathbf{x}$, then for the residual vector corresponding to $\bar{\mathbf{x}}$ we have

$$\|\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}\| = \|\mathbf{b} - \mathbf{A}(\tilde{\mathbf{x}} + \tilde{\mathbf{y}})\| = \|\mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}\| = \|\tilde{\mathbf{r}}\| \ll \|\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}\|,$$

i.e., $\bar{\mathbf{x}}$ is a much better approximation of $\mathbf{x}$ than $\tilde{\mathbf{x}}$. If we repeat this procedure we get the method of *iterative refinement*. This method gives a good approximation of the solution in a few steps even for ill-conditioned coefficient matrices.

**Algorithm 4.20. Iterative refinement**

```
INPUT:    A, b
          N    - maximal iteration number
          TOL  - tolerance
          t    - number of digits of precision
OUTPUT:   z    - approximate solution
          COND - estimate of cond_∞(A)

We solve the system Ax = b with Gaussian elimination
for k = 1, 2, ..., N do
    We compute the residual vector r = b - Ax using double precision.
    We solve Ay = r for y
    z ← x + y
    if k = 1 do
        COND ← 10^t · ||y||_∞ / ||x||_∞
        output(COND)
    end do
    if ||y||_∞ < TOL do
        output(z)
        stop
    end do
    x ← z
end do
output(The maximal number of iteration is exceeded.)
```

**Example 4.21.** Consider again system (4.20). Its exact solution is $\mathbf{x} = (1, 1)^T$. Using Gaussian elimination with 4-digit arithmetic we get the approximate solution $\tilde{\mathbf{x}} = (0.9375, 1.2500)^T$. Its residual vector is (with double precision): $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.001875)^T$, so $\|\mathbf{r}\|_\infty = 0.001875$.

Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ with Gaussian elimination (with 4-digit arithmetic) we get the approximate solution $\tilde{\mathbf{y}} = (0.0586, -0.2344)^T$. Hence (4.23) yields

$$\mathrm{cond}_\infty(\mathbf{A}) \approx 10^4 \frac{\|\tilde{\mathbf{y}}\|_\infty}{\|\tilde{\mathbf{x}}\|_\infty} = 10^4 \frac{0.2344}{1.25} = 1875. \tag{4.24}$$

We have seen in Example 4.19 that $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, so (4.24) is an approximation of the condition number. The relative error of the approximate solution $\tilde{\mathbf{x}}$ is

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} = 0.25,$$

which is relatively large (since $\mathbf{A}$ is ill-conditioned). Using Theorem 4.18 we get the error bound

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} \leq \mathrm{cond}_\infty(\mathbf{A}) \frac{\|\mathbf{r}\|_\infty}{\|\mathbf{b}\|_\infty} = 0.5017$$

for the relative error. Using one step of the iterative refinement we get the approximate solution $\mathbf{x}^{(2)} = \mathbf{x} + \mathbf{y} = (0.9961, 1.016)^T$, which is close to the true solution. $\qquad\square$

### Exercises

1. Compute the condition numbers $\mathrm{cond}_\infty$ and $\mathrm{cond}_1$ of the following matrices:

$$\text{(a)} \quad \begin{pmatrix} 1 & 2 \\ 4 & -1 \end{pmatrix}, \qquad \text{(b)} \quad \begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 1 & -1 & 1 \end{pmatrix}.$$

2. Estimate the condition number $\mathrm{cond}_\infty(\mathbf{A})$ for

$$\mathbf{A} = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} \end{pmatrix}.$$

3. Using 4-digit arithmetic solve

$$
\begin{aligned}
0.009x_1 - 0.52x_2 &= -5.191 \\
9211x_1 + 21.1x_2 &= 9422
\end{aligned}
$$

with applying two steps of the iterative refinement. (The exact solution is: $(1, 10)$.)

