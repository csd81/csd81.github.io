**8.5. Solving Linear Systems with the Gradient Method** 



## 1. Motivation and Basic Idea: Connection between Optimization and Linear Algebra

In the previous section (8.4), we used the gradient method to find the minimum of general nonlinear functions. This chapter builds a crucial mathematical bridge: it shows how to **reformulate the solution of a linear system of equations into a minimization problem of a multivariable quadratic function**.

This approach makes it possible to solve linear systems with sparse coefficient matrices and up to millions of variables occurring in engineering practice (e.g., during the discretization of partial differential equations) without direct matrix inversion, purely through iterative optimization steps.



## 2. Construction of the Quadratic Minimization Model

Let $\mathbf{A} \in \mathbb{R}^{n \times n}$ be a **symmetric and positive definite** matrix, $\mathbf{b} \in \mathbb{R}^n$ a known real vector, and $c \in \mathbb{R}$ an arbitrary constant. We define the following multivariable quadratic (second-degree) function:

$$g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c \tag{8.8}$$

If we calculate the partial derivatives coordinate by coordinate (taking advantage of the symmetry property $a_{ij} = a_{ji}$), the function's **gradient vector** results in the following neat matrix formula:


$$g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b} \tag{8.9}$$

According to the first-order necessary condition known from Section 8.1, the function can have an extremum where the gradient vector is zero:


$$g'(\mathbf{x}) = \mathbf{0} \implies \mathbf{A}\mathbf{x} - \mathbf{b} = \mathbf{0} \implies \mathbf{A}\mathbf{x} = \mathbf{b} \tag{8.10}$$

> **The Bridge Principle (Theorem 8.10):** Since matrix $\mathbf{A}$ is positive definite, the function's Hessian matrix ($g''(\mathbf{x}) = \mathbf{A}$) is also positive definite, which guarantees that the function has a single, strict global minimum. This minimum point **exactly corresponds to the exact theoretical solution of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$**.



## 3. The Optimal Gradient Method for Linear Systems

Let's apply the optimal gradient iteration introduced in Section 8.4 to the quadratic function (8.8). The negative gradient direction – which in linear algebra is called the **residual vector** – is denoted by $\mathbf{r}^{(k)}$:


$$\mathbf{r}^{(k)} := -\nabla g(\mathbf{p}^{(k)}) = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{8.11}$$

Since $g(\mathbf{x})$ is a pure quadratic algebraic form, the one-dimensional step size minimization problem mentioned in Section 8.4 ($\min_{\alpha} g(\mathbf{p}^{(k)} + \alpha \mathbf{r}^{(k)})$) can be solved analytically with an **exact formula**. By setting the derivative to zero, the **optimal step length $\alpha_k$** can be directly calculated:


$$\alpha_k = \frac{\|\mathbf{r}^{(k)}\|_2^2}{(\mathbf{r}^{(k)})^T \mathbf{A} \mathbf{r}^{(k)}} \tag{8.12}$$

### The final iteration algorithm:

Starting from an arbitrary initial vector $\mathbf{p}^{(0)}$, the recursion steps are as follows:

1. We calculate the current error direction: $\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}$.
2. If $\|\mathbf{r}^{(k)}\| < \varepsilon$, we stop the iteration (we have reached the desired accuracy).
3. We determine the exact step size with formula (8.12).
4. We step to the next approximation:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)} \tag{8.13}$$





## 4. Numerical Example: Solving a $3 \times 3$ System

The notes demonstrate the operation of the algorithm on the following symmetric and positive definite system of equations:


$$\begin{array}{rcrcrcr} 
4x_1 & + & 2x_2 & - &  x_3    & = & 0 \\ 
2x_1 & + & 5x_2 &   &        & = & 8 \\ 
-x_1 & + &      & + &  3x_3 & = & 1 
\end{array}$$

The exact theoretical solution is: $\mathbf{p} = (-1, 2, 0)^T$.

Starting the algorithm from the distant initial point $\mathbf{p}^{(0)} = (3, 3, 3)^T$, the following convergence schedule results:

* **Step 0:** The initial error distance (Euclidean norm) $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 = 5.099$.
* **Step 1:** After applying the optimal step size, the new position is $\mathbf{p}^{(1)} = (0.4346, 0.7767, 2.1448)^T$, and the actual error has already decreased to $2.855$.
* **Step 2:** $\mathbf{p}^{(2)} = (0.0379, 1.8993, 0.4161)^T$, the error drops further to $1.116$.
* **Step 13:** The sequence completely smooths onto the target object: $\mathbf{p}^{(13)} = (-0.9995, 1.9996, 0.0004)^T$, where the deviation is negligible, a mere **$0.00072$**.



## 5. Summary and Outlook (Conjugate Gradient)

The optimal gradient method tailored for linear systems of equations is an extremely elegant procedure, because finding step sizes does not require uncertain or slow one-dimensional trials (line search); $\alpha_k$ can be obtained exactly with a single direct formula.

Although the nonlinear "zig-zag" oscillation (valley effect) presented in Section 8.4 can slow down convergence here too in the case of very ill-conditioned matrices, this procedure served as a direct theoretical basis for developing one of the most brilliant algorithms in numerical analysis, the **Conjugate Gradient (CG) method**, which, through clever orthogonalization of directions, guarantees the theoretically exact solution of any symmetric positive definite linear system in at most $n$ steps.
