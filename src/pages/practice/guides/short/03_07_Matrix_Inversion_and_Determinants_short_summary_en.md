**3.6. Matrix Inversion and Determinant Calculation**  



## 1. Matrix Inversion as a Simultaneous System of Equations

According to the definition in linear algebra, the inverse $\mathbf{A}^{-1}$ of a nonsingular square matrix $\mathbf{A}$ satisfies the following fundamental matrix equation:


$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$$

This problem corresponds perfectly to the **simultaneous linear system of equations** ($\mathbf{A}\mathbf{X} = \mathbf{B}$) discussed in chapter 3.5, where in place of the constant terms we now have the special identity matrix $\mathbf{B} = \mathbf{I}$, and the sought solution matrix is the inverse itself ($\mathbf{X} = \mathbf{A}^{-1}$).

### Solution with an Augmented Matrix

To solve the problem, we create an $n \times 2n$ dimensional augmented matrix, whose left-hand block is the matrix $\mathbf{A}$ and right-hand block is the identity matrix $\mathbf{I}$:


$$(\mathbf{A} \mid \mathbf{I})$$



## 2. The Algorithm of Inversion with Gauss–Jordan Elimination

We perform **Gauss–Jordan elimination** on the augmented matrix $(\mathbf{A} \mid \mathbf{I})$. By performing elimination steps column by column (below and above the main diagonal), we systematically reduce the left-hand part $\mathbf{A}$ to the identity matrix.

Since all row operations are also performed on the right-hand block, by the end of the process, **the inverse matrix $\mathbf{A}^{-1}$ will appear directly and automatically on the right side**:

$$(\mathbf{A} \mid \mathbf{I}) \quad \sim \quad \dots \quad \sim \quad (\mathbf{I} \mid \mathbf{A}^{-1})$$

*Numerical stability:* To minimize rounding errors and avoid division by zero, the application of **partial pivoting** (row swapping) known from chapter 3.2 is also recommended for this procedure.



## 3. Operation Count of the Method

The right-hand identity matrix has a special sparse structure (initially contains many zeros), which allows skipping multiplications by zero during programming. Taking this optimization into account, the total floating-point multiplication and division requirement of matrix inversion is:

$$\text{Operation count} = \mathbf{\frac{3}{2}n^3} + \mathcal{O}(n^2)$$

In linear algebra, this is considered the **most efficient direct method** to produce the full inverse of a matrix.



## 4. Determinant Calculation by Numerical Means

The theoretical (definition-based) calculation of the determinant would require a huge number, $n!$ operations, which is unusably slow on a computer even for a $10 \times 10$ matrix. Numerical analysis reduces the determination of the determinant to Gaussian elimination row operations as well.

Based on the theorems in chapter 3.1, we know that adding rows to each other does not change the determinant, while row swaps reverse its sign. If we perform Gaussian elimination on the matrix proceeding from bottom to top with partial pivoting, we get an upper triangular matrix $\mathbf{A}^{(n-1)}$ at the end of the process.

Since the determinant of a triangular matrix is simply the product of the elements in its main diagonal, the determinant of the initial matrix can be obtained with the following relationship:

$$\mathbf{\det(\mathbf{A}) = (-1)^s \cdot a_{11} \cdot a_{22}^{(1)} \cdot a_{33}^{(2)} \cdots a_{nn}^{(n-1)}}$$

Where:

* **$s$**: the **number of row swaps** performed during the elimination process,
* **$a_{ii}^{(i-1)}$**: the values of the **main elements (pivots)** resulting during the elimination in the main diagonal.

Thus, determining the determinant can be performed extremely quickly for the price of a Gaussian elimination, which requires $\approx \frac{1}{3}n^3$ operations.



## 5. Numerical Example (Matrix Inversion)

Let's invert the following $3 \times 3$ matrix:


$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}$$

1. **Writing the initial augmented matrix:**

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{array}\right)$$


2. **Eliminating the first column (adding the 1st row to the 2nd, and adding 2 times the 1st row to the 3rd):**

$$\sim \left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right)$$


3. **Eliminating elements above the main diagonal using the 3rd row (making the left part diagonal):**

$$\sim \left(\begin{array}{ccc|ccc} 3 & 0 & 0 & -1 & 0 & -2 \\ 0 & 3 & 0 & -1 & 3 & -2 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right)$$


4. **Dividing the rows by the elements in the main diagonal (by $3$), so we get the identity matrix $\mathbf{I}$ on the left side:**

$$\sim \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \end{array}\right)$$



The obtained **final inverse matrix** by factoring out:


$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}$$
