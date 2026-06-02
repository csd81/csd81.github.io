**3.2.1. Partial pivoting** 

## 1. Motivation and the basic principle of partial pivoting

During the standard Gaussian elimination for solving linear systems of equations, it is inevitable that, advancing column by column, we divide by the elements in the main diagonal (the so-called *pivot elements* or *pivots*) when transforming the rows.

If the element in the main diagonal is exactly zero, the algorithm immediately crashes (division by zero). If it is not zero but very small in absolute value, dividing by it drastically amplifies the computer rounding errors, making the final result completely useless and inaccurate.

**Partial pivoting** (or *maximal column pivoting*) is a simple but highly effective strategy for eliminating these numerical instabilities.

## 2. Algorithm of the procedure

The essence of the algorithm is that before executing the $k$-th elimination step, we ensure that the number with the largest possible absolute value is placed in the divisor position of the main diagonal.

### Sequence of steps:

1. **Search:** In the $k$-th column, we examine all elements in the main diagonal and **below it** down to the bottom of the matrix ($i = k, \ldots, n$), and then select the one with the maximal absolute value from them:

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\} \tag{3.23}$$

*(Where $l$ denotes the row index of the maximal element found).*
2. **Row swap:** If the maximum is not in the main diagonal ($l \neq k$), then the $k$-th and $l$-th **rows are completely swapped** with each other.
3. **Elimination:** After the swap, we execute the standard elimination step (zeroing out the elements below the main diagonal). Since we will divide by the largest possible number, the propagation of rounding errors is reduced to a minimum.

## 3. Numerical Example (4-dimensional case)

The notes demonstrate the operation of partial pivoting on the following system of equations:

$$\begin{pmatrix} 2 & -1 & 0 & -3 \\ 2 & -1 & 1 & 5 \\ -3 & 1 & 1 & -2 \\ 2 & 4 & 0 & -1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 8 \\ 2 \\ -5 \\ 21 \end{pmatrix}$$

* **Step 1 (column $k=1$):** The elements in the main diagonal and below it in the first column are: $2, 2, -3, 2$. In absolute value, $-3$ is the largest ($|-3|=3$), which is in the 3rd row. Therefore, **we swap the 1st and 3rd rows**. The elimination is then executed with this pivot element.
* **Step 2 (column $k=2$):** Among the examined elements of the transformed second column, the largest value ($\frac{14}{3}$) is found in the 4th row. **We swap the 2nd and 4th rows**, then perform the elimination.
* **Step 3 (column $k=3$):** Among the remaining elements in the third column, $\frac{12}{7}$ is the larger one, thus forming the final triangular shape after another **row swap**.

Solving the obtained triangular system with the backward substitution method, we get the exact final result protected from rounding errors:

$$\mathbf{x} = (4, 3, 2, -1)^T \tag{3.24}$$

## 4. Theoretical Condition for Executability (Theorem 3.26)

The chapter records the necessary and sufficient mathematical criterion for the operation of Gaussian elimination supported by partial pivoting:

> **Theorem 3.26:** For a square matrix $\mathbf{A}$, the following three statements are completely **equivalent**:
> 1. Gaussian elimination with partial pivoting is **guaranteed to be executable**.
> 2. The matrix $\mathbf{A}$ is nonsingular, i.e., the system of equations **has a unique solution**.
> 3. The determinant of the matrix is not zero: **$\det(\mathbf{A}) \neq 0$**.

### Why is this theorem important?

With pure (without pivoting) Gaussian elimination, it may happen that the matrix is nonsingular, yet the method gets stuck due to an early zeroing diagonal element. The application of partial pivoting **ensures that if the problem mathematically has a unique solution, the algorithm will never get stuck**, but will run stably and successfully to completion.

## 5. Summary

When solving linear equations manually, tracking row swaps and fractions (or decimals) might seem complicated. However, in a computer and numerical environment, partial pivoting is **indispensable**, because with minimal additional search cost, it drastically reduces the destructive effect of floating-point rounding errors, guaranteeing the reliability of the numerical solution.
