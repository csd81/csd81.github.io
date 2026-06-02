**2.9. Vector and Matrix Norms, Vector and Matrix Sequences** (in the detailed notes *Section 2.10*)

## 1. The Concept and Mathematical Properties of a Norm

Starting from the properties of the absolute value of real numbers (non-negativity, homogeneity, triangle inequality), a **norm** measuring the magnitude and distance of vectors in higher-dimensional spaces can be defined.

The function $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ is called a **vector norm** if it satisfies the following three fundamental axioms for all vectors $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ and scalars $c \in \mathbb{R}$:

1. **Positive definiteness:** $\|\mathbf{x}\| \geq 0$, and $\|\mathbf{x}\|=0 \iff \mathbf{x}=\mathbf{0}$.
2. **Absolute homogeneity:** $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$.
3. **Subadditivity (triangle inequality):** $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$.

> **Theorem 2.41:** For any vector norm, the norm as a function is **continuous** on the space $\mathbb{R}^n$, and the reverse triangle inequality holds: $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$.

## 2. Notable Vector Norms and Their Equivalence

The chapter distinguishes three fundamental norms for vectors $\mathbf{x} = (x_1, x_2, \dots, x_n)^T$:

* **1-norm (absolute sum norm):** The sum of the absolute values of the components.
* **2-norm (Euclidean norm):** The geometric length in space ($\sqrt{\mathbf{x}^T\mathbf{x}}$).
* **$\infty$-norm (maximum norm):** The component with the largest absolute value.

### Equivalence of Norms

In finite-dimensional spaces ($\mathbb{R}^n$), all norms are **equivalent** to each other. This means that if $\|\cdot\|_a$ and $\|\cdot\|_b$ are two arbitrary norms, then there exist positive constants $m, M > 0$ such that for every vector $\mathbf{x}$:

$$m\|\mathbf{x}\|_a \leq \|\mathbf{x}\|_b \leq M\|\mathbf{x}\|_a$$

**Practical consequence:** If a vector sequence converges in one norm, it will also converge in all the others (the fact of convergence is independent of the chosen norm).

## 3. Matrix Norms and the Induced Norm

To examine the size of linear operators (matrices), we introduce the matrix norm. A matrix norm, in addition to the three fundamental axioms of the vector norm, must also satisfy the **submultiplicative** property: $\|A B\| \leq \|A\| \cdot \|B\|$.

### Induced Matrix Norms

In the most natural way, we can derive a matrix norm from an existing vector norm as follows (intuitively: the maximum stretching factor of the matrix applied to the unit sphere):

$$\|A\| := \max_{\mathbf{x} \neq \mathbf{0}} \frac{\|A\mathbf{x}\|}{\|\mathbf{x}\|} = \max_{\|\mathbf{x}\|=1} \|A\mathbf{x}\|$$

From this definition follows the **compatibility inequality**, crucial for numerical estimates: $\|A\mathbf{x}\| \leq \|A\| \cdot \|\mathbf{x}\|$.

### Calculation Formulas in Practice

* **1-norm of a matrix (column-sum norm):** The maximum of the absolute sums of the columns of the matrix.
* **$\infty$-norm of a matrix (row-sum norm):** The maximum of the absolute sums of the rows of the matrix.

## 4. Convergence of Vector and Matrix Sequences

### Vector Sequences

A vector sequence $\mathbf{x}^{(k)}$ converges to a limit vector $\mathbf{x}$ if the norm of their distance tends to zero: $\lim_{k\to\infty} \|\mathbf{x}^{(k)} - \mathbf{x}\| = 0$. This is completely equivalent to examining the convergence of the vectors component by component, element by element.

### Cauchy Criterion

Similar to real sequences, the concept of a **Cauchy sequence** works here as well: a vector sequence is convergent if and only if for arbitrarily large indices the distance between the terms tends to zero ($\|\mathbf{x}^{(k)} - \mathbf{x}^{(m)}\| < \varepsilon$).

## 5. Multivariable Mean Value Theorem of Lagrange for Vector-Valued Functions

The most important theoretical capstone of the chapter is the extension of the classical Mean Value Theorem of Lagrange to functions $F\colon \mathbb{R}^n \to \mathbb{R}^n$ that are multivariable and vector-valued.

For vector-valued functions, the derivative is a **Jacobian matrix $F'$**. Since the coordinate functions do not necessarily take the intermediate value at the same place, instead of exact equality, we obtain a **mean value inequality** using norms:

> **Theorem:** If $F$ is continuously differentiable on the convex segment connecting the points $\mathbf{x}$ and $\mathbf{y}$, then there exists a point $\boldsymbol{\xi} = \mathbf{y} + \xi(\mathbf{x}-\mathbf{y})$ in the interior of the segment ($\xi \in (0,1)$), for which the following holds:
> 
> $$\|F(\mathbf{x}) - F(\mathbf{y})\| \leq \|F'(\boldsymbol{\xi})\| \cdot \|\mathbf{x} - \mathbf{y}\|$$
> 

This theorem is an indispensable tool for proving the convergence and stability of systems of nonlinear equations (e.g., multivariable Newton's method or fixed-point iterations), as it establishes a connection between the change in function values and the norm of the Jacobian matrix.
