**9.2. Polynomial Curve Fitting** 


## 1. Problem formulation and context

We generalize the line fitting seen in the previous section (9.1) to the case where we want to fit a higher, $m$-th degree polynomial to the $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) measurement data points using the method of least squares.

The shape of the function we are looking for:


$$g(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_1 x + a_0$$

The problem can be divided into two parts based on the relationship between the number of points ($n$) and the degree of the polynomial ($m$):

* **If $n \le m$:** An $m$-th degree polynomial can be passed exactly through the given points, so the minimum squared error will be $0$. This is the classical problem of **interpolation**, where the coefficients can be uniquely determined.
* **If $m < n$:** This is the true domain of **regression (curve fitting)**. Due to measurement errors and the large number of points, the polynomial will not pass through all points, so the squared error will not be zero; it must be minimized.



## 2. The error function and the partial derivatives

The unknowns to be determined are the coefficients $a_m, a_{m-1}, \ldots, a_0$ of the polynomial, which together form a squared error function with $m+1$ variables:


$$F(a_m, a_{m-1}, \ldots, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2 \tag{9.2}$$

Based on the extremum rules of multivariable analysis, the function $F$ can have a minimum where all its partial derivatives simultaneously become zero. If we differentiate partially with respect to an arbitrary coefficient $a_k$ ($k=0,1,\ldots,m$) according to the chain rule, we obtain the following:


$$\frac{\partial F}{\partial a_k} = 2\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^k = 0$$



## 3. The general system of normal equations

After expanding the sums, factoring out the constants, and rearranging the equations to zero, we obtain the **general system of normal equations** consisting of $m+1$ linear equations:

$$\begin{aligned}
a_m \sum_{i=0}^n x_i^{2m} + a_{m-1} \sum_{i=0}^n x_i^{2m-1} + \cdots + a_0 \sum_{i=0}^n x_i^m &= \sum_{i=0}^n x_i^m y_i \\
a_m \sum_{i=0}^n x_i^{2m-1} + a_{m-1} \sum_{i=0}^n x_i^{2m-2} + \cdots + a_0 \sum_{i=0}^n x_i^{m-1} &= \sum_{i=0}^n x_i^{m-1} y_i \\
&\vdots \\
a_m \sum_{i=0}^n x_i^m + a_{m-1} \sum_{i=0}^n x_i^{m-1} + \cdots + a_0 (n+1) &= \sum_{i=0}^n y_i
\end{aligned} \tag{9.4}$$

Writing the system of equations in matrix form, it is clearly visible that the coefficient matrix is a specially **structured symmetric matrix**, where the elements in the diagonals parallel to the main diagonal are equal (they contain the sums of powers of the base points).



## 4. Uniqueness and Existence Theorem (Theorem 9.3)

The most important theoretical theorem of the chapter applies to the solvability of the linear equation system:

> **Theorem 9.3:** Suppose that in the set of points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) **there are at least $m+1$ different base points** ($x_i$ values). Then the squared error minimization problem (9.2) has **exactly one (unique) solution**, which can be obtained by solving the normal equations (9.4).

**Practical significance:** If we want to fit a quadratic parabola ($m=2$), then according to the theorem, it is essential that the measurement data contains at least 3 different $x$ locations.



## 5. Special case: Parabola fitting ($m=2$)

The most common nonlinear polynomial fitting is the quadratic case, where we are looking for the parameters of the function $g(x) = ax^2 + bx + c$. In this case, the system (9.4) simplifies to a $3 \times 3$ linear equation system:

$$\begin{aligned} 
a\sum_{i=0}^{n} x_i^4 + b\sum_{i=0}^{n} x_i^3 + c\sum_{i=0}^{n} x_i^2 &= \sum_{i=0}^{n} x_i^2 y_i \\ 
a\sum_{i=0}^{n} x_i^3 + b\sum_{i=0}^{n} x_i^2 + c\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\ 
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i + c(n + 1) &= \sum_{i=0}^{n} y_i 
\end{aligned}$$

### Practical example

The notes demonstrate the procedure of fitting for $n=6$ (7 points). For manual calculation, we arrange the data in a table and collect the column sums ($x_i^4, x_i^3, x_i^2, x_i, x_i^2y_i, x_iy_i, y_i$). Substituting the obtained numerical sums, we get the following system:


$$\begin{aligned} 249.1250a + 77.750b + 27.50c &= -7.225 \\ 77.750a + 27.50b + 8.0c &= -3.55 \\ 27.50a + 8.0b + 7c &= 6.2 \end{aligned}$$

The solution of the $3 \times 3$ linear system (for example, with Gaussian elimination or Cholesky factorization learned in chapter 5.2, since the matrix is symmetric and positive definite) directly gives the coefficients of the parabola:


$$a = -0.196021, \qquad b = -0.084748, \qquad c = 1.752653$$



## 6. Summary theoretical lesson

Polynomial curve fitting – despite the apparent nonlinear (curved) shape – is **mathematically a pure linear problem**. There is no need for approximate iterations to determine the unknown parameters: the power sums formed from the points of the measurement data directly provide the well-structured system of linear equations, the exact solution of which results in the globally optimal curve.
