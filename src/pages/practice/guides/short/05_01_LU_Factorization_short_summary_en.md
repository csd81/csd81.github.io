**5.1. LU Factorization** 

## 1. Definition and uniqueness of the LU factorization

The essence of the LU factorization is that we decompose a square matrix into the product of two triangular matrices, which radically simplifies the solution of systems of linear equations.

> **Definition:** Let $\mathbf{A}$ be an $n \times n$ square matrix. The product $\mathbf{A} = \mathbf{LU}$ is called the **LU factorization** of the matrix $\mathbf{A}$ if:
> * $\mathbf{L}$ is a **lower triangular matrix** (lower triangular), whose main diagonal elements are all strictly $1$,
> * $\mathbf{U}$ is an **upper triangular matrix** (upper triangular).
> 
> 

### Theorem 5.1. (Uniqueness)

Let $\mathbf{A}$ be a nonsingular (invertible) square matrix. If the LU factorization of the matrix $\mathbf{A}$ exists, then it is **completely unique**.

*(The proof is based on the fact that assuming two different factorizations, it can be shown that due to the equality $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}$, the matrices must be diagonal, and since the diagonal of the L matrices is all 1s, both sides can only be equal to the identity matrix).*

## 2. Existence theorems and the connection to Gaussian elimination

The LU factorization essentially originates from writing the steps of Gaussian elimination as a matrix product.

* **Theorem (The role of leading principal minors):** If all **leading principal minors** of the matrix $\mathbf{A}$ (the determinants of the top-left $k \times k$ submatrices) are non-zero, then Gaussian elimination can be performed without row exchanges, and thus the factorization $\mathbf{A} = \mathbf{LU}$ is **guaranteed to exist**.
* **Theorem (General case with permutation):** For any invertible square matrix $\mathbf{A}$, there exists a permutation matrix $\mathbf{P}$ (representing row exchanges) such that the factorization **$\mathbf{PA} = \mathbf{LU}$** can be performed.

## 3. Application to solving systems of linear equations

If the factorization $\mathbf{A} = \mathbf{LU}$ is already known, the solution of the linear system of equations $\mathbf{Ax} = \mathbf{b}$ reduces to the form $\mathbf{LUx} = \mathbf{b}$. By introducing a new variable $\mathbf{y} = \mathbf{Ux}$, this can be separated into **two simple triangular systems**:

1. **Forward substitution:** We solve the following lower triangular system for the unknown vector $\mathbf{y}$:

$$\mathbf{Ly} = \mathbf{b}$$

2. **Backward substitution:** Using the obtained $\mathbf{y}$, we solve the upper triangular system for the sought vector $\mathbf{x}$:

$$\mathbf{Ux} = \mathbf{y}$$

## 4. Computational demand and efficiency (Operation counts)

The chapter provides an accurate picture of the time complexity of the LU-based solution (where the computational demand is determined by the number of multiplications and divisions):

* **Creating the LU factorization:** Requires $\dfrac{n^3}{3} + \mathcal{O}(n^2)$ operations.
* **Solving the two triangular systems (substitutions):** Requires $n^2 + \mathcal{O}(n)$ operations.

### When is LU factorization extremely efficient?

The huge advantage of the method over simple Gaussian elimination becomes apparent when we have to **solve multiple systems of linear equations whose coefficient matrix ($\mathbf{A}$) is completely identical, but their right-hand side constant vectors ($\mathbf{b}$) are different**.

In this case, the expensive, $O(n^3)$ factorization only needs to be performed **once**. For every subsequent vector $\mathbf{b}$, the solution is obtained in merely $n^2$ operations (from the two substitutions), which represents an astonishing computational saving for large matrices.
