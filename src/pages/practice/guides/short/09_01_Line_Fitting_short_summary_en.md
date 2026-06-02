**9.1. Line Fitting** 

## 1. The fundamental problem of curve fitting and the squared error

In engineering and scientific practice, a physical process is often described by a function $g(x; \mathbf{a})$, whose general mathematical form (e.g., line, parabola) is known or assumed, but its $\mathbf{a}$ parameters (coefficients) are unknown. Furthermore, $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) measurement data points are available. Due to measurement inaccuracies and noise, the points do not fall exactly on a theoretical curve, so the goal is to find an optimal parameter vector that deviates "the least" from the data.

The notes present three possible error formulas for measuring the deviation:

1. **Maximum absolute error ($F_1$):** $F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| \colon i = 0, 1, \ldots, n\}$.
2. **Sum of absolute errors ($F_2$):** $F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|$.
3. **Least squares error ($F$):** $F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2$.

> **Why do we use the squared error?** Although the $F_1$ and $F_2$ criteria also seem natural, due to the absolute value function, they are **mathematically not differentiable**. In contrast, the **squared error ($F$) is smooth and continuously partially differentiable**, so it can be easily minimized with the classical tools of differential calculus (finding extrema). This procedure is called the **method of least squares**.



## 2. Derivation of the Gaussian normal equations for a line

The chapter specifically discusses determining the parameters ($a$ and $b$) of the linear function (line) $g(x) = ax + b$ that best fits the data.

We are looking for the minimum of the following two-variable error function:


$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2 \tag{9.1}$$

According to the rules of mathematical analysis, at the minimum, the partial derivatives must be zero:


$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i = 0, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i) = 0.
\end{aligned} \tag{9.2}$$

After expanding the sums and rearranging to zero, we obtain a system of linear equations with two unknowns, the so-called **Gaussian normal equations**:

$$\begin{aligned} 
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\ 
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i. 
\end{aligned} \tag{9.3}$$

*Note:* The coefficient of the constant $b$ in the second equation is $(n+1)$ because the terms are summed from $0$ to $n$, which means exactly $n+1$ data points.



## 3. Uniqueness and Existence Theorem (Theorem 9.1)

After writing down the Gaussian normal equations, a key question is when the resulting $2 \times 2$ linear system has a unique solution.

> **Theorem 9.1:** Suppose that the points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) are given, and among the base points **there are at least two different values** (i.e., there exists $i$ and $j$ such that $x_i \neq x_j$). Then the squared error minimization problem (9.1) has **exactly one (unique) solution**, which can be obtained by solving the normal equations (9.3).

### Background of the proof (Cramer's rule)

The determinant $\mathbf{D}$ of the system has the following form:


$$\mathbf{D} = (n+1)\sum_{i=0}^n x_i^2 - \left(\sum_{i=0}^n x_i\right)^2$$


According to the Cauchy-Bunyakovsky-Schwarz inequality, this determinant is always greater than or equal to zero. It would be equal to zero (singular) if and only if all base points $x_i$ were equal. Since the theorem assumes that there are at least two different base points, the determinant is strictly positive ($\mathbf{D} > 0$), so the determinant of the system is not zero, and the solution is unique based on Cramer's rule.



## 4. Practical calculation schedule (Example)

When using manual calculation or spreadsheet applications, the notes suggest an extremely clear, structured approach for gathering data. Take the data from example 9.2 ($n=6$, i.e., 7 points):

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
| --- | --- | --- | --- |
| -1.0 | 0.0 | 1.00 | 0.00 |
| 1.0 | 1.2 | 1.00 | 1.20 |
| 2.5 | 1.9 | 6.25 | 4.75 |
| 3.0 | 2.5 | 9.00 | 7.50 |
| 4.0 | 3.1 | 16.00 | 12.40 |
| 4.5 | 3.2 | 20.25 | 14.40 |
| 6.0 | 4.5 | 36.00 | 27.00 |
| **$\sum = 20.0$** | **$\sum = 16.4$** | **$\sum = 89.5$** | **$\sum = 67.25$** |

The column sums obtained in the last row are directly substituted into the Gaussian normal equation system (9.3):


$$\begin{aligned} 89.5a + 20.0b &= 67.25 \\ 20.0a + 7b &= 16.4 \end{aligned}$$

The solution of this linear equation system is:


$$a = 0.630243 \qquad \text{and} \qquad b = 0.542163$$

Thus, the equation of the **best fitting line** is:


$$y = 0.630243x + 0.542163$$



## 5. Summary engineering lesson

The method of least squares for a line is a **direct linear problem**. It requires no iteration or approximate steps: the $2 \times 2$ equation system written from the column sums of the measurement data directly, exactly provides the globally optimal parameters, as long as the data do not lie on a single vertical line.
