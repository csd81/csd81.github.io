## 9.1. Line Fitting

Given data points $(x_i, y_i)$, $i = 0, 1, \ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function of the form $g(x) = ax + b$ which minimizes the least square error

$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2. \tag{9.1}$$

The function $F$ is continuously partially differentiable with respect to $a$ and $b$, and

$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i).
\end{aligned} \tag{9.2}$$

Making the partial derivatives in (9.2) equal to 0, and rearranging the system we get the so-called *Gaussian normal equations*:

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i.
\end{aligned} \tag{9.3}$$

It is worth to mention that the coefficient of $b$ in the second equation is $n + 1$, which is the number of data points. This is a linear system for solving $a$ and $b$. This system is solvable if the determinant of its coefficient matrix

$$d := \det \begin{pmatrix} \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & n + 1 \end{pmatrix} = (n + 1)\sum_{i=0}^{n} x_i^2 - \left(\sum_{i=0}^{n} x_i\right)^2$$

is nonzero. The Cauchy–Bunyakovsky–Schwarz inequality (Theorem 2.42) yields

$$\left(\sum_{i=0}^{n} x_i\right)^2 = \left(\sum_{i=0}^{n} 1 \cdot x_i\right)^2 \le \sum_{i=0}^{n} 1 \sum_{i=0}^{n} x_i^2 = (n + 1)\sum_{i=0}^{n} x_i^2,$$

therefore, $d \ge 0$ holds. If we assume that there are at least two distinct mesh points $x_i$, then Theorem 2.42 implies that the strict inequality $d > 0$ holds. Hence system (9.3) has a unique solution which can be given in the following form:

$$\begin{aligned}
\bar{a} &= \frac{(n + 1)\left(\sum_{i=0}^{n} x_i y_i\right) - \left(\sum_{i=0}^{n} x_i\right)\left(\sum_{i=0}^{n} y_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}, \\
\bar{b} &= \frac{\left(\sum_{i=0}^{n} x_i^2\right)\left(\sum_{i=0}^{n} y_i\right) - \left(\sum_{i=0}^{n} x_i y_i\right)\left(\sum_{i=0}^{n} x_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}.
\end{aligned}$$

According to Theorem 8.2, the function $F$ has a local extremum at $(\bar{a}, \bar{b})$ if

$$D(\bar{a}, \bar{b}) := \frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) \cdot \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) - \left(\frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b})\right)^2 > 0.$$

It is easy to compute that

$$\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i^2, \quad \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) = 2(n + 1), \quad \frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i.$$

Hence

$$D(\bar{a}, \bar{b}) = 4(n + 1)\sum_{i=0}^{n} x_i^2 - 4\left(\sum_{i=0}^{n} x_i\right)^2 = 4d,$$

which we know that it is positive. Since $\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) > 0$, Theorem 8.2 yields that $F$ has a local minimum at $(\bar{a}, \bar{b})$, and hence Corollary 8.11 implies that it is also a global minimum. We have proved the following result.

**Theorem 9.1.** Given data points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) such that there exist $i$ and $j$ with $x_i \ne x_j$. Then the problem

$$\min_{(a,b)\in\mathbb{R}^2} \sum_{i=0}^{n} (ax_i + b - y_i)^2$$

has a unique solution, which satisfies the Gaussian normal equations (9.3).

**Example 9.2.** Given the following data:

| $x_i$ | -1.0 | 1.0 | 2.5 | 3.0 | 4.0 | 4.5 | 6.0 |
|-------|------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.0  | 1.2 | 1.9 | 2.5 | 3.1 | 3.2 | 4.5 |

Find a line of best fit to the data points. In case we do the calculation by hand, we copy the data to the first two columns of the Table 9.1. Then we fill out the third and fourth columns of the table, and finally, in the last line, we compute the sum of the numbers located above in that column. This last line is used to write down the Gaussian normal equations (9.3):

$$\begin{aligned}
89.5a + 20.0b &= 67.25 \\
20.0a + 7b &= 16.4.
\end{aligned}$$

Its solution is $a = 0.630243$ and $b = 0.542163$. The graph of the corresponding line $y = 0.630243x + 0.542163$ and the given data points can be seen in Figure 9.1. The error of the fitting is

$$\sum_{i=0}^{6} (0.630243 x_i + 0.542163 - y_i)^2 = 0.124691.$$

$\square$

**Table 9.1: Line fitting**

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
|-------|-------|---------|-----------|
| -1.0  | 0.0   | 1.00    | 0.00      |
| 1.0   | 1.2   | 1.00    | 1.20      |
| 2.5   | 1.9   | 6.25    | 4.75      |
| 3.0   | 2.5   | 9.00    | 7.50      |
| 4.0   | 3.1   | 16.00   | 12.40     |
| 4.5   | 3.2   | 20.25   | 14.40     |
| 6.0   | 4.5   | 36.00   | 27.00     |
| 20.0  | 16.4  | 89.50   | 67.25     |

> **Figure 9.1: Line fitting:** $y = 0.630243x + 0.542163$

### Exercises

1. Find the line of best fit to the following data, and compute the error of the fitting:

   (a)

   | $x_i$ | 0.0  | 1.0 | 1.5 | 2.0 | 3.0 |
   |-------|------|-----|-----|-----|-----|
   | $y_i$ | -1.8 | 1.3 | 2.5 | 3.9 | 8.3 |

   (b)

   | $x_i$ | -1.0 | 1.0 | 2.0 | 3.0 | 4.0 | 5.0  | 6.0  |
   |-------|------|-----|-----|-----|-----|------|------|
   | $y_i$ | 4.2  | 2.1 | 1.3 | 2.1 | 2.8 | -2.1 | -3.0 |

   (c)

   | $x_i$ | -1.0 | 1.0 | 3.0 | 5.0  | 9.0  | 10.0 | 13.0 |
   |-------|------|-----|-----|------|------|------|------|
   | $y_i$ | -0.1 | 3.4 | 7.3 | 15.1 | 29.1 | 35.6 | 56.3 |

