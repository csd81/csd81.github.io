**3.1. Triangular systems of equations** 

## 1. Introduction and the concept of triangular structure

In the direct solution of linear algebraic systems of equations ($\mathbf{Ax} = \mathbf{b}$), systems with **triangular coefficient matrices** represent the simplest structures. In these cases, the elements of the matrix below or above the main diagonal are all zeros, which allows the direct, sequential determination of variables without the need for complex elimination steps.

The chapter focuses primarily on the solution of **$n$-dimensional upper triangular** linear systems of equations, whose general coordinate form is the following:

$$\begin{array}{rcrcrcrcr} 
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\ 
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\ 
& & & & \ddots & & \vdots & & \vdots \\ 
& & & & & & a_{nn}x_n & = & b_n 
\end{array} \tag{3.1}$$

## 2. The Method of Backward Substitution

The standard algorithm for solving upper triangular systems is the **method of backward substitution**.

### Working principle:

The process starts from the bottom, $n$-th row of the system of equations. Since the last equation contains only the unknown $x_n$ ($a_{nn}x_n = b_n$), it can be directly divided by the coefficient in the main diagonal:

$$x_n = \frac{b_n}{a_{nn}}$$

Once the value of $x_n$ becomes known, moving upwards from the bottom to the previous equations: we substitute the values of the already calculated variables back into the equation above it, move them to the right side to the constant term, and then divide by the main diagonal coefficient of the sought variable.

### Formula of the general algorithm:

For the indices $i = n-1, n-2, \ldots, 1$, the recursion can be written as follows:

$$x_i = \frac{1}{a_{ii}} \left( b_i - \sum_{j=i+1}^{n} a_{ij}x_j \right)$$

> **Condition for executability:** The procedure of backward substitution (i.e., division by the main diagonal coefficients) can be executed if and only if **none of the elements of the main diagonal is zero**, that is $a_{ii} \neq 0$ for all $i = 1, \ldots, n$. Since the determinant of a triangular matrix is exactly the product of the main diagonal elements ($\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$), this condition is equivalent to the matrix being nonsingular, i.e., the system has a unique solution.

## 3. Numerical Example (4-dimensional case)

The notes demonstrate the steps of the method on a specific, 4-variable upper triangular system:

$$\begin{array}{rcrcrcrcr} 
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\ 
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\ 
& & & & 2x_3 & - & x_4 & = & -2 \\ 
& & & & & & 3x_4 & = & 12 
\end{array}$$

1. **From the 4th equation:** $3x_4 = 12 \implies \mathbf{x_4 = 4}$.
2. **Substituted back into the 3rd equation:** $2x_3 - 4 = -2 \implies 2x_3 = 2 \implies \mathbf{x_3 = 1}$.
3. **Substituted back into the 2nd equation:** $3x_2 - 1 + 2(4) = 13 \implies 3x_2 + 7 = 13 \implies 3x_2 = 6 \implies \mathbf{x_2 = 2}$.
4. **Substituted back into the 1st equation:** $2x_1 - 2 + 3(1) + 4 = 3 \implies 2x_1 + 5 = 3 \implies 2x_1 = -2 \implies \mathbf{x_1 = -1}$.

The unique solution vector of the system: $\mathbf{x} = (-1, 2, 1, 4)^T$.

## 4. Operation Demand and Time Complexity (Asymptotic cost)

In the case of large ($n$) systems, accurate knowledge of the arithmetic operation demand of the algorithm is critical from the point of view of computer runtime.

Summarizing step by step the necessary floating-point operations (FLOP), we get the following distribution:

* **Number of divisions and multiplications:** $\sum_{i=1}^{n} i = \frac{n(n+1)}{2} = \mathbf{\frac{n^2}{2} + \mathcal{O}(n)}$
* **Number of additions and subtractions:** $\sum_{i=1}^{n-1} i = \frac{(n-1)n}{2} = \mathbf{\frac{n^2}{2} + \mathcal{O}(n)}$

### Practical significance:

The introduced $\mathcal{O}(n)$ (big-O) notation hides the lower-order terms, which are negligible for huge matrices, and highlights the **leading term**. The total operation demand of the backward substitution method is roughly of order **$\approx n^2$**.

This represents an extremely cheap computational cost compared to the $\approx \frac{2}{3}n^3$ cost of Gaussian elimination applied to arbitrary (unstructured) matrices. That is why direct decomposition procedures (like LU, Cholesky, or QR factorizations) strive to first transform complex systems into the product of such easily manageable triangular systems.
