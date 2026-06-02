**3.2.2. Complete pivoting, equilibration and stability** 

## 1. Method of Complete Pivoting

To reduce rounding errors and maximize numerical stability, a stronger modification of the previously known partial pivoting (3.2.1.), the so-called **complete pivoting**, can be applied.

### Algorithm of the procedure:

1. **Search in the entire subblock:** Before the $k$-th step of Gaussian elimination, we examine not only the current column, but **all elements of the entire remaining lower right matrix block** (in all remaining rows and columns) that have not yet been eliminated. We look for the largest in absolute value:

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n, \ j = k, \ldots, n\}$$

*(Where $l$ is the row and $m$ is the column of the found maximum).*
2. **Double swap (Row and Column swap):** To bring the selected maximum to the main diagonal (position $a_{kk}$), we **swap the $k$-th and $l$-th rows, as well as the $k$-th and $m$-th columns**.
3. **Tracking of unknowns:** Since swapping columns changes the order of the unknown variables (the coefficients of the $m$-th variable go to the $k$-th column and vice versa), this must be strictly tracked during programming or calculation (e.g., with an extra marker row under the matrix).

### Advantages and disadvantages:

* **Advantage:** Theoretically and numerically, this is the most stable direct elimination strategy.
* **Disadvantage:** It requires much more comparison and search operations, which significantly slows down the running of the algorithm compared to partial pivoting.

## 2. Row Equilibration (Scaling)

It is a numerical experience that if there are significant magnitude differences between the elements of the coefficient matrix (e.g., in one equation there are values of millions, in another decimal values), the rounding error can drastically increase, and plain pivoting can also fail.

The goal of **row equilibration** is to multiply individual equations (rows) by non-zero numbers so that the elements of the new $\mathbf{B} := \mathbf{DA}$ matrix are of approximately the same magnitude, where $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$. Then, instead of the system $\mathbf{A}\mathbf{x} = \mathbf{b}$, we solve the equivalent system $\mathbf{DA}\mathbf{x} = \mathbf{Db}$.

A frequent practical approach is to divide each row by the magnitude of the element with the maximum absolute value in the row (i.e., normalize the maximum to $1$ row by row), thus balancing the weighting between rows.

## 3. Stability in the Case of Diagonally Dominant Matrices

The note derives an extremely important theoretical proof regarding the stability of strictly diagonally dominant matrices:

> **Theorem (Consequence of Theorem 3.32):** If the matrix $\mathbf{A}$ is strictly diagonally dominant with respect to its rows, then Gaussian elimination **can be executed guaranteed without stagnation, even without pivoting (row swap)**, and the resulting subblocks remain strictly diagonally dominant (and thus nonsingular) throughout the calculation. The method is completely stable with respect to rounding errors.

## 4. Stability in the Case of Symmetric Positive Definite Matrices

The closing chapter of the audio material and the note examines the behavior of symmetric, positive definite matrices.

### Sylvester's criterion (Checking definiteness)

A symmetric matrix ($\mathbf{A}^T = \mathbf{A}$) is positive definite if and only if the value of all its leading principal minors (sub-determinants) is strictly positive:

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & \ddots & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n \tag{3.29}$$

### Consequence for Gaussian elimination:

If a matrix is symmetric and positive definite, then:

1. Gaussian elimination **can be safely executed even without pivoting**.
2. All pivot elements arising during elimination remain guaranteed **strictly positive ($>0$)** until the end of the calculation.
3. The calculation is completely stable against the accumulation of rounding errors.

## 5. Summary

**Complete pivoting** provides the safest numerical protection against rounding errors, but due to its high computational demand, it is less common in practice. However, if we know in advance about our coefficient matrix that it is *strictly diagonally dominant* or *symmetric positive definite*, mathematical theorems give a reassuring guarantee: the elimination **will be perfectly stable and accurate without any row swaps and pivoting**.
