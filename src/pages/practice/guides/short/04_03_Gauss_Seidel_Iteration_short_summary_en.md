**4.3. Gauss–Seidel Iteration**  



## 1. The Basic Idea and Motivation of the Method

* **The problem with the Jacobi iteration:** When calculating the components of the next step ($k+1$), the Jacobi method rigidly uses only the values from the previous ($k$-th) step. It does not utilize the fact that due to the sequential evaluation of the equations, the updated value belonging to the $k+1$-th step of certain variables (e.g., $x_1$) is already known, which is presumably a better approximation of the exact solution.
* **The Gauss–Seidel principle:** When a new value of a variable is calculated, it is **immediately used for updating the subsequent variables, within the same iteration step**.

### Coordinate Recursion Formula

The component-wise formula written for an $n$-dimensional linear system of equations:


$$x_i^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j=1}^{i-1} a_{ij}x_j^{(k+1)} - \sum_{j=i+1}^{n} a_{ij}x_j^{(k)} \right), \qquad i = 1, \ldots, n \tag{4.4}$$

The splitting of the two summations in the formula is clearly visible: from terms with an index less than $i$, we substitute the already updated $k+1$-th approximation, while from those with a larger index, we still substitute the old $k$-th approximation.



## 2. Derivation of the Matrix (Vector) Form

For convergence analysis, let's decompose the coefficient matrix $\mathbf{A}$ in the usual way: $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, where $\mathbf{D}$ is the diagonal, $\mathbf{L}$ is the strictly lower, while $\mathbf{U}$ is the strictly upper triangular matrix.

By rearranging the coordinate recursion (4.4), let's collect the $k+1$ terms to the left side:


$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i$$

Using matrix notation, this takes exactly the following form:


$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b}$$

Since we assume that there are no zeros on the main diagonal, the lower triangular matrix $(\mathbf{D} + \mathbf{L})$ is invertible, so by multiplying from the left, we get the standard linear fixed-point iteration form:


$$\mathbf{x}^{(k+1)} = \underbrace{-(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}}_{\mathbf{T}_G}\mathbf{x}^{(k)} + \underbrace{(\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}}_{\mathbf{c}_G}$$

* **$\mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}$** is the **Gauss–Seidel iteration matrix**.



## 3. Convergence Proofs and Conditions

The necessary and sufficient condition for the convergence of the Gauss–Seidel iteration is that its spectral radius is less than one: **$\rho(\mathbf{T}_G) < 1$**. In practice, the following sufficient theorems work:

1. **Strict diagonal dominance:** If the matrix $\mathbf{A}$ is strictly diagonally dominant by rows, the Gauss–Seidel iteration is guaranteed to converge starting from an arbitrary initial value.
2. **Positive definiteness (Theorem 4.15):** If the matrix $\mathbf{A}$ is strictly symmetric and positive definite, the Gauss–Seidel method is definitely convergent. *(Note: This property is not generally true for the Jacobi iteration).*

### Comparison with the Jacobi Iteration: The Stein–Rosenberg Theorem (Theorem 4.16)

The notes emphasize that in the general case, it cannot be stated that Gauss–Seidel is always faster than Jacobi (this simply depends on whether $\rho(\mathbf{T}_G)$ or $\rho(\mathbf{T}_J)$ is smaller). However, if the off-diagonal elements of the matrix are non-positive ($a_{ij} \le 0, \, i \neq j$) and the main diagonal is positive ($a_{ii} > 0$), then according to the Stein–Rosenberg theorem:

* The two methods are either simultaneously convergent or simultaneously divergent.
* In the case of convergence, the Gauss–Seidel is **strictly faster** than the Jacobi iteration ($0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$).



## 4. Sparse Matrices and Practical Efficiency

The audio material and the notes explain in detail why these iterations are extremely popular in engineering practice compared to direct methods (e.g., Gaussian elimination):

* **Memory saving for sparse matrices:** During Gaussian elimination, the matrix "fills up" (non-zero elements are calculated in place of zeros), which consumes memory for huge matrices. In contrast, with iterations, the structure of the original matrix $\mathbf{A}$ **never changes**.
* **Operation count optimization:** If the matrix is sparse (containing only a few non-zero elements per row), when evaluating formula (4.4), skipping multiplications by zero drastically reduces the step-by-step operation count from $O(n^2)$. Although 10-30 steps (iterations) may need to be run, the total computation time will still be significantly less than the $O(n^3)$ cost of direct Gaussian elimination.
