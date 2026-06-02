**3.3. Gauss–Jordan elimination**

## 1. Basic idea and goal of Gauss–Jordan elimination

Gauss–Jordan elimination is an important modification of the classic Gaussian elimination for the direct solution of linear systems of equations ($\mathbf{Ax} = \mathbf{b}$).

* **The difference compared to plain Gaussian elimination:** In the standard Gauss method, the goal is to bring the coefficient matrix to an *upper triangular* form, after which the solution is calculated in a separate step by upward-moving backward substitution.
* **The Gauss–Jordan principle:** Elimination steps are executed not only on elements below the main diagonal but **also on elements above the main diagonal**. The goal is to directly transform the coefficient part of the augmented matrix $(\mathbf{A}, \mathbf{b})$ into an **identity matrix ($\mathbf{I}$)**:

$$(\mathbf{A}, \mathbf{b}) \sim \dots \sim (\mathbf{I}, \mathbf{b}^{(n-1)})$$

> **Practical advantage:** When we have reached the identity matrix at the end of the process, the solution of the system of equations **can be read directly from the last column containing the constant terms of the augmented matrix** ($\mathbf{x} = \mathbf{b}^{(n-1)}$). There is no need to run the backward substitution algorithm afterwards.

## 2. Coordinate structure of the algorithm

The algorithm proceeds column by column ($k = 1, \dots, n$). When we are at the $k$-th column, using the element $a_{kk}$ in the main diagonal, we zero out the coefficients **in all other rows ($i \neq k$)**:

1. We calculate the elimination multiplier for the given row:

$$l_{ik} = \frac{a_{ik}}{a_{kk}}, \qquad i \neq k$$

2. We execute the subtraction between rows for the changing column indices ($j = k+1, \dots, n+1$):

$$a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$$

3. At the very end, we scale the elements in the main diagonal (which then form a diagonal matrix) to $1$ by multiplying with their own reciprocal, obtaining the identity matrix and the final result.

## 3. Pivoting strategies in the Gauss–Jordan method

In order to reduce rounding errors and preserve numerical stability, the **partial and complete pivoting strategies** introduced for Gaussian elimination can (and should) be applied without modification in the case of Gauss–Jordan elimination as well.

The audio material and the note demonstrate step by step the operation of **partial pivoting** through a specific 4-dimensional example:

* Before starting the elimination, we find the element with the largest absolute value in the current column (on the main diagonal and the part below it), and then **we completely swap the two rows**.
* After the swap, we execute the elimination on the elements *below and above* the main diagonal as well.
* This step ensures that during computer divisions no information loss due to rounding error occurs.

## 4. Operation Demand and Time Complexity (Comparison)

Although the Gauss–Jordan method is extremely convenient because backward substitution is omitted at the end, due to the increased elimination steps, its **computational cost is higher** than that of traditional Gaussian elimination.

If we calculate the required number of floating-point divisions and multiplications for an $n$-dimensional general system, the asymptotic leading term is as follows:

* **Gaussian elimination + backward substitution:** $\approx \mathbf{\frac{1}{3}n^3} + \mathcal{O}(n^2)$
* **Gauss–Jordan elimination:** $\approx \mathbf{\frac{1}{2}n^3} + \mathcal{O}(n^2)$

### Consequence:

For large-scale linear systems of equations, the Gauss–Jordan method requires roughly **50% more arithmetic operations** to perform than standard Gaussian elimination. Because of this, it is less commonly applied in practice for solving a single system of equations.

## 5. When is the Gauss–Jordan method still advantageous? (Matrix Inversion)

Despite the increased operation demand, there is an application area where the Gauss–Jordan method is the most efficient direct choice: the calculation of the **inverse ($\mathbf{A}^{-1}$)** of a matrix.

If we append not a single vector, but the complete $\mathbf{I}$ identity matrix as right-side constant terms next to the original $\mathbf{A}$ matrix, the algorithm is able to calculate the solutions belonging to all basis vectors at once. When the left block is transformed into the identity matrix at the end of the elimination, **the exact $\mathbf{A}^{-1}$ inverse matrix will appear directly** in place of the right block. In this special case (having multiple right sides), the total operation demand of the two methods is already balanced.
