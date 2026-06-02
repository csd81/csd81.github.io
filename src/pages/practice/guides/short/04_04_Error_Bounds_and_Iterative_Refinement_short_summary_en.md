**4.4. Error Estimation, Condition Number and Iterative Refinement**  



## 1. Motivation: The Residual Vector and the Trap of Stopping Criteria

When solving linear systems of equations iteratively (like the Jacobi or Gauss–Seidel method), we must stop generating the sequence based on some criterion. We can use three general stopping criteria:

1. $\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon$ (Closeness of consecutive terms).
2. $\dfrac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon$ (Relative change).
3. $\|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon$ (Magnitude of the error equation).

We introduce the concept of the **residual vector**:


$$\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$$


Where $\tilde{\mathbf{x}}$ is an arbitrary approximate solution.

> **The critical question:** If during the stopping criterion we find that the norm of the residual vector is very small ($\|\mathbf{r}\| \approx 0$), does it directly follow that our approximation is very accurate, i.e., it approaches the true solution ($\tilde{\mathbf{x}} \approx \mathbf{x}$)?

### Counterexample (Example 4.17)

Consider the following system of equations:


$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$


The exact theoretical solution of the system: $\mathbf{x} = (1, 1)^T$.
Let's take a rather poor approximation: $\tilde{\mathbf{x}} = (2, -3)^T$. If we calculate the residual vector for this:


$$\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} - \begin{pmatrix} 4 \cdot 2 + 1 \cdot (-3) \\ 4.03 \cdot 2 + 1 \cdot (-3) \end{pmatrix} = \begin{pmatrix} 0 \\ 0.01 \end{pmatrix}$$


Taking the maximum norm, $\|\mathbf{r}\|_\infty = 0.01$, which is an extremely small value. Despite this, the true error is huge: $\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty = |1 - 2| = 1$. **The hypothesis thus failed:** the smallness of the residual vector in itself does not guarantee a good approximation.



## 2. The Condition Number of a Matrix

To understand when we can trust the residual vector, we need to connect the norm of the error with the norm of the residual vector. Since $\mathbf{Ax} = \mathbf{b}$ and $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$, from the difference of the two it follows:


$$\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r} \implies \mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$$

Taking the norm and exploiting the submultiplicative property of matrix norms, we get the **absolute and relative error estimation theorems**:


$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$$

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}$$

> **Definition:** The **condition number** of a nonsingular square matrix $\mathbf{A}$ with respect to a fixed norm is defined as the following product:
> 
> $$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \tag{4.21}$$
> 
> 

### Properties and Interpretation of the Condition Number

* For the identity matrix $\mathrm{cond}(\mathbf{I}) = 1$, and for any matrix it is always $\mathrm{cond}(\mathbf{A}) \geq 1$.
* **Well-conditioned matrix:** If the condition number is small (close to 1). In this case, the smallness of the residual vector guarantees that the true error is also small.
* **Ill-conditioned matrix:** If the condition number is very large. Such systems are extremely sensitive to rounding errors and tiny perturbations in the input data. In the counterexample presented above, the condition number of the matrix was $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, this caused the failure of the estimation.



## 3. Practical Approximation of the Condition Number

For large-scale systems of equations, the direct calculation of the inverse matrix $\mathbf{A}^{-1}$ would be a too expensive operation, so we do not even know the exact value of the condition number. In practice, we **estimate** its order of magnitude with the following procedure:

1. We choose an arbitrary, non-zero vector $\mathbf{v}$.
2. We solve an auxiliary linear system with the coefficient matrix $\mathbf{A}$ for the unknown vector $\mathbf{z}$:

$$\mathbf{A}\mathbf{z} = \mathbf{v} \implies \mathbf{z} = \mathbf{A}^{-1}\mathbf{v}$$


3. From the ratio of the norms, we get a lower bound for the norm of the inverse:

$$\|\mathbf{z}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{v}\| \implies \|\mathbf{A}^{-1}\| \geq \frac{\|\mathbf{z}\|}{\|\mathbf{v}\|}$$


4. Substituting this back into definition (4.21), we get an efficient lower approximation of the condition number:

$$\mathrm{cond}(\mathbf{A}) \approx \|\mathbf{A}\| \frac{\|\mathbf{z}\|}{\|\mathbf{v}\|} \tag{4.24}$$





## 4. Iterative Refinement

If we solve a linear system of equations with a direct method (for example, with LU decomposition or Gaussian elimination), the obtained solution $\mathbf{x}^{(1)}$ will not be completely accurate due to rounding errors. **Iterative refinement** is a procedure that can systematically filter out these rounding errors and improve the accuracy of the final result.

### Steps of the Algorithm:

1. We calculate the exact residual vector belonging to the current approximation:

$$\mathbf{r} = \mathbf{b} - \mathbf{A}\mathbf{x}^{(1)}$$


2. We solve another linear system of equations, where this **residual vector appears as the constant term on the right side**:

$$\mathbf{A}\mathbf{y} = \mathbf{r}$$



*(Since the LU decomposition of matrix $\mathbf{A}$ has already been completed during the solution of the main task, this step is extremely cheap, requiring only a forward and backward substitution ($O(n^2)$ operations)).*
3. We update (refine) the solution with the obtained correction vector $\mathbf{y}$:

$$\mathbf{x}^{(2)} = \mathbf{x}^{(1)} + \mathbf{y}$$



If the matrix is not extremely ill-conditioned, this single extra step improves the numerical final result to a level almost identical to full machine precision.
