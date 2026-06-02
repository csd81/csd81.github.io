**3.0. Linear Algebra Prerequisites** 

## 1. Basic Notations and Matrix Operations

The notes start by fixing the standard linear algebra notation system:

* **$\mathbf{A} = (a_{ij})$**: An $n \times n$ dimensional square matrix. The set of real matrices is denoted by $\mathbb{R}^{n \times n}$, and that of complex-valued ones by $\mathbb{C}^{n \times n}$.
* **$\mathbf{x}$**: An $n$-dimensional column vector.
* **$\mathbf{I}$**: The $n \times n$ dimensional identity matrix (1s on the main diagonal, 0s elsewhere).
* **$\mathbf{A}^T$ and $\mathbf{x}^T$**: The transpose of the matrix and the vector, respectively (swapping rows and columns).
* **$\mathrm{diag}(a_1, a_2, \ldots, a_n)$**: A diagonal matrix that has the specified numbers on its main diagonal, and all its other elements are zero.

### Regularity and Singularity

* **Invertible or nonsingular (regular) matrix**: If there exists a matrix $\mathbf{A}^{-1}$ for it such that $\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$ holds. This is true if and only if the determinant of the matrix is not zero: $\det(\mathbf{A}) \neq 0$.
* **Singular matrix**: Which has no inverse, that is, $\det(\mathbf{A}) = 0$.

## 2. Basic Properties of the Determinant (Theorem 3.1)

The behavior of the determinant ($\det(\mathbf{A})$) is determined by the following important basic rules:

1. $\det(\mathbf{A}) = 0$, if the matrix has an **entirely zero row or column**.
2. $\det(\mathbf{A}) = 0$, if the matrix has **two identical rows or columns**.
3. If two rows (or columns) of the matrix are swapped, the determinant **changes its sign**.
4. If a row (or column) is multiplied by a number $\alpha$, the value of the determinant also changes by a factor of $\alpha$.
5. If a scalar multiple of another row (or column) is added to a row (or column), the value of the determinant **does not change**.
6. Transposition does not change the value: $\det(\mathbf{A}^T) = \det(\mathbf{A})$.
7. **Multiplication theorem for determinants**: The determinant of the product of two matrices equals the product of their determinants: $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})$.

## 3. Special Matrix Classes

From the point of view of the stability and efficiency of numerical algorithms, it is crucial to identify the following special matrix structures:

### A) Diagonally Dominant Matrices

A matrix is called **diagonally dominant** (with respect to its rows) if in every row the absolute value of the element on the main diagonal is at least as large as the sum of the absolute values of all other elements in that row:

$$|a_{ii}| \geq \sum_{j \neq i} |a_{ij}| \qquad \text{for all } i = 1, \ldots, n.$$

If the inequality is strict ($>$), then the matrix is *strictly diagonally dominant*.

### B) Symmetric Matrices

A square matrix is symmetric if it equals its own transpose, i.e., it is reflected across the main diagonal:

$$\mathbf{A}^T = \mathbf{A} \implies a_{ij} = a_{ji} \qquad \text{for all } i, j.$$

### C) Positive Definite Matrices

A real symmetric matrix is called **positive definite** if, forming the quadratic form with an arbitrary nonzero vector $\mathbf{x} \neq \mathbf{0}$, the result is strictly positive:

$$\mathbf{x}^T \mathbf{A} \mathbf{x} > 0 \qquad \text{for all } \mathbf{x} \in \mathbb{R}^n \setminus \{\mathbf{0}\}.$$

> **Sylvester's Criterion (Characterization Theorem):** A symmetric matrix is positive definite if and only if **the determinants of all its leading principal minors are strictly positive**. (That is, the determinants of the $1\times1$, $2\times2$, $\dots$, $n\times n$ sub-blocks taken along the main diagonal are all greater than zero).

## 4. Eigenvalues, Spectral Radius and Matrix Norms

* **Eigenvalue ($\lambda$) and eigenvector ($\mathbf{x}$)**: If the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ holds ($\mathbf{x} \neq \mathbf{0}$). The eigenvalues are the roots of the characteristic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$.
* **Spectral radius ($\rho(\mathbf{A})$)**: The maximum of the absolute values of the eigenvalues of the matrix:

$$\rho(\mathbf{A}) := \max \{ |\lambda_1|, |\lambda_2|, \ldots, |\lambda_n| \}$$

This indicator plays a decisive role as a guarantee for the convergence of iteration sequences (e.g., Jacobi, Gauss–Seidel methods).

### Induced Matrix Norms

Among the matrix norms derived from vector norms measuring the length of vectors, the notes highlight the three most important ones:

1. **Row-sum norm ($\|\mathbf{A}\|_\infty$)**: The maximum of the absolute value sums of the elements in the rows.
2. **Column-sum norm ($\|\mathbf{A}\|_1$)**: The maximum of the absolute value sums of the elements in the columns.
3. **Spectral norm ($\|\mathbf{A}\|_2$)**: The square root of the maximum eigenvalue of the matrix $\mathbf{A}^T\mathbf{A}$: $\|\mathbf{A}\|_2 = \sqrt{\rho(\mathbf{A}^T\mathbf{A})}$. If $\mathbf{A}$ is symmetric, this is simply equal to the spectral radius: $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.

## 5. The Vandermonde Determinant (Theorem 3.19)

In proving the unique existence of interpolation polynomials (Chapter 6), a central role is played by a determinant with a special structure, the so-called **Vandermonde determinant**:

$$\det \mathbf{V} = \det \begin{pmatrix} 
1 & a_1 & a_1^2 & \cdots & a_1^{n-1} \\ 
1 & a_2 & a_2^2 & \cdots & a_2^{n-1} \\ 
\vdots & \vdots & \vdots & & \vdots \\ 
1 & a_n & a_n^2 & \cdots & a_n^{n-1} 
\end{pmatrix} \tag{3.1}$$

> **Theorem 3.19:** The value of the Vandermonde determinant (3.1) is **non-zero ($\neq 0$) if and only if the numbers $a_1, a_2, \ldots, a_n$ are all pairwise distinct**.
> *(From a linear algebraic perspective, this guarantees that if we choose distinct base points, the matrix of the interpolation system of equations will be nonsingular, i.e., the curve can be uniquely described).*
