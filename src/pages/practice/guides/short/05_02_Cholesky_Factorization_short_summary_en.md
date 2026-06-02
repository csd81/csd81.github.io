**5.2. Cholesky Factorization** 

## 1. Definition and existence of the Cholesky factorization

The Cholesky factorization is a special, extremely efficient variant of the LU factorization, which specifically applies to matrices with a symmetric structure.

> **Definition:** Let $\mathbf{A}$ be a symmetric square matrix ($\mathbf{A} = \mathbf{A}^T$). The product **$\mathbf{A} = \mathbf{LL}^T$** is called the Cholesky factorization of the matrix $\mathbf{A}$, if $\mathbf{L}$ is a **lower triangular matrix**.

### Theorem 5.6. (Existence and non-uniqueness)

* **Non-uniqueness:** An important theoretical property is that the Cholesky factorization in the general case is **not unique** (for example, by varying the signs of the diagonal elements, multiple factorizations can be obtained).
* **Sufficient condition (Positive definiteness):** If the matrix $\mathbf{A}$ is **symmetric and positive definite** (i.e., for every vector $\mathbf{x} \neq \mathbf{0}$, $\mathbf{x}^T\mathbf{Ax} > 0$), then the Cholesky factorization is **guaranteed to exist**, the matrix $\mathbf{L}$ will be completely real, and we can choose **strictly positive elements** ($l_{ii} > 0$) in its main diagonal. If we stipulate that the main diagonal elements are positive, the factorization becomes unique.

*(The proof of the theorem in the notes is done by mathematical induction on the dimension of the matrix, utilizing block-matrix partitioning and the positivity of the leading principal minors).*

## 2. Operation of the algorithm and its coefficient formulas

If we multiply the matrices $\mathbf{L}$ and $\mathbf{L}^T$ term by term, the elements $l_{ij}$ of the matrix $\mathbf{L}$ can be determined step by step, proceeding column by column, from the obtained equations.

The fundamental formulas of the procedure are the following:

1. **Calculation of the main diagonal elements ($i = j$):**

$$l_{jj} = \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}$$

2. **Calculation of the elements below the main diagonal ($i > j$):**

$$l_{ij} = \frac{1}{l_{jj}} \left( a_{ij} - \sum_{k=1}^{j-1} l_{ik}l_{jk} \right)$$

> **Stability note:** Because of the properties of positive definite matrices, the expression under the square root always remains strictly positive; during the algorithm, **we never have to calculate with complex numbers**, and division by zero does not occur.

## 3. Computational demand and complexity (Operation counts)

Since the algorithm exploits the symmetry of the matrix, creating the factorization requires half as much memory and significantly fewer arithmetic operations than a general LU factorization.

The chapter exactly details the computational demand of the 5.8 Cholesky algorithm for an $n \times n$ matrix:

* **Number of multiplications and divisions:** $\dfrac{n^3}{6} + \dfrac{n^2}{2} - \dfrac{2n}{3}$
* **Number of additions and subtractions:** $\dfrac{n^3}{6} - \dfrac{n}{6}$
* **Number of square root calculations:** exactly **$n$** (one in each column).

## 4. Comparison with the LU factorization (Practical advantages)

The Cholesky factorization is one of the most popular tools in engineering and scientific calculations for symmetric positive definite systems (e.g., finite element structural analysis, least squares method) for the following reasons:

1. **Half the floating-point operations:** LU factorization requires $\frac{n^3}{3}$ multiplications, while Cholesky requires only **$\frac{n^3}{6}$**. Thus, the program runs **twice as fast**.
2. **Half the storage space (Memory saving):** Since the matrix is symmetric, it is sufficient to store only the lower triangular part of the matrix in memory; the upper part does not need to be recorded.
3. **Excellent numerical stability:** Unlike simple LU or Gaussian elimination, for the Cholesky factorization, it is **never necessary to perform pivoting (row exchanges)** to keep rounding errors in check. The algorithm is inherently extremely stable on its own.
