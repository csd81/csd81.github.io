**4.1. Linear Fixed-Point Iteration** 



## 1. Linear Algebra Prerequisites: Eigenvalue and Spectral Radius

Before examining the iterative solution of linear systems of equations, the chapter reviews the concept of matrix eigenvalues, as this determines the convergence of the methods.

* **Eigenvalue and eigenvector:** The complex number $\lambda \in \mathbb{C}$ is called an eigenvalue of the square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, and the non-trivial ($\mathbf{x} \neq \mathbf{0}$) solution is called its corresponding eigenvector, if the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ holds.
* **Characteristic equation:** The eigenvalues are the solutions of the $n$-th degree algebraic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$.
* **Spectral radius ($\rho(\mathbf{A})$):** The maximum of the absolute values (magnitudes) of the matrix's eigenvalues:

$$\rho(\mathbf{A}) := \max\{|\lambda| \colon \lambda \text{ is an eigenvalue of }\mathbf{A}\}$$



> **Connection to matrix norm:** For any square matrix $\mathbf{A}$ and any induced matrix norm $\|\cdot\|$, it is true that the spectral radius bounds the norm from below: $\rho(\mathbf{A}) \leq \|\mathbf{A}\|$. Furthermore, for any small $\varepsilon > 0$, there exists a vector norm whose induced matrix norm satisfies $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.



## 2. Definition of Linear Fixed-Point Iteration

For an iterative solution, an $n$-dimensional linear system of algebraic equations can be rewritten into an equivalent fixed-point form:


$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{4.1}$$


Where $\mathbf{T} \in \mathbb{R}^{n \times n}$ is the **iteration matrix**, $\mathbf{c} \in \mathbb{R}^n$ is a constant vector, and $\mathbf{x}^{(0)}$ is the initial (starting) vector. The exact solution $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ satisfies the fixed-point equation.



## 3. Necessary and Sufficient Condition for Convergence

The most important theoretical result of the chapter gives the conditions under which the iteration sequence will converge to the exact solution starting from any initial value.

### Theorem 4.1 (Matrix powers and spectral radius)

The following statements are completely equivalent:

1. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ (zero matrix).
2. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ (zero vector) for all $\mathbf{x} \in \mathbb{R}^n$.
3. **$\rho(\mathbf{T}) < 1$**.

> **Practical consequence (Global convergence):** The linear fixed-point iteration (4.1) is convergent **for any arbitrary starting vector $\mathbf{x}^{(0)}$** if and only if the spectral radius of the iteration matrix is strictly less than 1 ($\rho(\mathbf{T}) < 1$). In this case, the convergence is **global**.



## 4. Error Estimation Formulas

If the iteration is convergent, the error propagation can be measured using matrix norms. If there exists a matrix norm for which $\|\mathbf{T}\| < 1$ (which can be guaranteed if $\rho(\mathbf{T}) < 1$), then two types of estimates can be given for the distance between the true solution $\mathbf{x}$ and the approximation $\mathbf{x}^{(k)}$ obtained in the $k$-th step:

* **A priori error estimation:** Before running, it tells the maximum error simply from the initial step:

$$\|\mathbf{x}^{(k)} - \mathbf{x}\| \leq \frac{\|\mathbf{T}\|^k}{1 - \|\mathbf{T}\|} \|\mathbf{x}^{(1)} - \mathbf{x}^{(0)}\|$$


* **A posteriori error estimation:** Estimates based on the actual change achieved in the last step:

$$\|\mathbf{x}^{(k)} - \mathbf{x}\| \leq \frac{\|\mathbf{T}\|}{1 - \|\mathbf{T}\|} \|\mathbf{x}^{(k)} - \mathbf{x}^{(k-1)}\|$$





## 5. Numerical Stability (The Effect of Rounding Errors)

In reality, during computer execution, rounding errors ($\mathbf{w}^{(k)}$) occur in every step, so the perturbed sequence is:


$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}$$


Suppose the rounding error is bounded: $\|\mathbf{w}^{(k)}\| \leq \varepsilon$. If we subtract the equation of the perturbed and exact iteration from each other, applying the sum formula of the geometric series, the upper bound of the achieved deviation is:


$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|} \varepsilon \tag{4.3}$$

**Conclusion:** If $\|\mathbf{T}\| < 1$, the iteration is **numerically completely stable** with respect to rounding errors. The accumulating rounding error does not go to infinity but remains bounded, and it will be smaller the closer $\|\mathbf{T}\|$ is to zero.
