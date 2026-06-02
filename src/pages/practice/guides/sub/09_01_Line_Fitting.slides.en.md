# Numerical Analysis

## 9. Method of Least Squares

Ferenc Hartung

University of Pannonia, Department of Mathematics, Veszprém, Hungary

2025

> *A Pannon Egyetem gyakorlatorientált infrastrukturális- és készségfejlesztési reformja — RRF-2.1.2.-21-2022-00007*

---

## Introduction

Suppose the formula of the function $g$ depends on some parameters $\mathbf{a}$:

$$g(x; \mathbf{a}).$$

Suppose we have measurements $y_i$ ($i = 0, 1, \ldots, n$) of the function values at the mesh points $x_i$. Our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called **curve fitting**.

> *(Figure: measurement points at mesh points $x_0, x_1, \ldots, x_{n-1}, x_n$ with the fitted curve.)*

---

## Error formulas

Possible error formulas:

$$F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| : i = 0, 1, \ldots, n\}$$

or

$$F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|.$$

The so-called **least square error**:

$$F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2.$$

Let $\bar{\mathbf{a}}$ be the minimum point of $F(\mathbf{a})$, and consider the graph of the function $g(x; \bar{\mathbf{a}})$ corresponding to $\bar{\mathbf{a}}$ as the best fitted curve to the data points. This is called the **method of least squares**.

---


# 9.1. Line Fitting

Given data points $(x_i, y_i)$, $i = 0, 1, \ldots, n$, where at least some of the mesh points $x_i$ are different. We are looking for a linear function of the form

$$g(x) = ax + b$$

which minimizes the least square error

$$F(a, b) := \sum_{i=0}^{n} (ax_i + b - y_i)^2. \tag{1}$$

The function $F$ is continuously partially differentiable with respect to $a$ and $b$, and

$$\begin{aligned}
\frac{\partial F}{\partial a}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i)x_i, \\
\frac{\partial F}{\partial b}(a, b) &= 2\sum_{i=0}^{n} (ax_i + b - y_i).
\end{aligned} \tag{2}$$

---

Making the partial derivatives in (2) equal to 0, and rearranging the system we get the so-called **Gaussian normal equations**:

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i.
\end{aligned} \tag{3}$$

This system is solvable if the determinant of its coefficient matrix

$$d := \det \begin{pmatrix} \sum_{i=0}^{n} x_i^2 & \sum_{i=0}^{n} x_i \\ \sum_{i=0}^{n} x_i & n + 1 \end{pmatrix} = (n + 1)\sum_{i=0}^{n} x_i^2 - \left(\sum_{i=0}^{n} x_i\right)^2$$

is nonzero.

---

The Cauchy–Bunyakovsky–Schwarz inequality yields

$$\left(\sum_{i=0}^{n} x_i\right)^2 = \left(\sum_{i=0}^{n} 1 \cdot x_i\right)^2 \le \sum_{i=0}^{n} 1 \sum_{i=0}^{n} x_i^2 = (n + 1)\sum_{i=0}^{n} x_i^2,$$

therefore $d \ge 0$ holds. If we assume that there are at least two distinct mesh points $x_i$, then the strict inequality $d > 0$ holds. Hence system (3) has a unique solution which can be given in the following form:

$$\begin{aligned}
\bar{a} &= \frac{(n + 1)\left(\sum_{i=0}^{n} x_i y_i\right) - \left(\sum_{i=0}^{n} x_i\right)\left(\sum_{i=0}^{n} y_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}, \\
\bar{b} &= \frac{\left(\sum_{i=0}^{n} x_i^2\right)\left(\sum_{i=0}^{n} y_i\right) - \left(\sum_{i=0}^{n} x_i y_i\right)\left(\sum_{i=0}^{n} x_i\right)}{(n + 1)\left(\sum_{i=0}^{n} x_i^2\right) - \left(\sum_{i=0}^{n} x_i\right)^2}.
\end{aligned}$$

---

Function $F$ has a local extremum at $(\bar{a}, \bar{b})$ if

$$D(\bar{a}, \bar{b}) := \frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) \cdot \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) - \left(\frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b})\right)^2 > 0.$$

It is easy to compute that

$$\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i^2, \quad \frac{\partial^2 F}{\partial b^2}(\bar{a}, \bar{b}) = 2(n + 1), \quad \frac{\partial^2 F}{\partial a\, \partial b}(\bar{a}, \bar{b}) = 2\sum_{i=0}^{n} x_i.$$

Hence

$$D(\bar{a}, \bar{b}) = 4(n + 1)\sum_{i=0}^{n} x_i^2 - 4\left(\sum_{i=0}^{n} x_i\right)^2 = 4d,$$

which we know that it is positive. Since $\frac{\partial^2 F}{\partial a^2}(\bar{a}, \bar{b}) > 0$, $F$ has a local minimum at $(\bar{a}, \bar{b})$, and hence it is also a global minimum.

---

> **Theorem.**
> Given data points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) such that there exist $i$ and $j$ with $x_i \ne x_j$. Then the problem
> $$\min_{(a,b)\in\mathbb{R}^2} \sum_{i=0}^{n} (ax_i + b - y_i)^2$$
> has a unique solution, which satisfies the Gaussian normal equations (3).

---

> **Example.**
> Given the following data:

| $x_i$ | 0   | 1.0 | 1.5 | 3.0 | 3.5 | 4.0 | 4.5 | 6.0 |
|-------|-----|-----|-----|-----|-----|-----|-----|-----|
| $y_i$ | 1.2 | 1.4 | 1.7 | 2.4 | 2.7 | 3.1 | 3.1 | 4.1 |

Find a line of best fit to the data points. We fill out the next table:

| $x_i$ | $y_i$ | $x_i^2$ | $x_i y_i$ |
|-------|-------|---------|-----------|
| 0.0   | 1.2   | 0.00    | 0.00      |
| 1.0   | 1.4   | 1.00    | 1.40      |
| 1.5   | 1.7   | 2.25    | 2.55      |
| 3.0   | 2.4   | 9.00    | 7.20      |
| 3.5   | 2.7   | 12.25   | 9.45      |
| 4.0   | 3.1   | 16.00   | 12.40     |
| 4.5   | 3.1   | 20.25   | 13.95     |
| 6.0   | 4.1   | 36.00   | 24.60     |
| 23.5  | 19.7  | 96.75   | 71.55     |

---

> **Example cont.**
> Substituting the sums to the Gaussian normal equations

$$\begin{aligned}
a\sum_{i=0}^{n} x_i^2 + b\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i, \\
a\sum_{i=0}^{n} x_i + b(n + 1) &= \sum_{i=0}^{n} y_i
\end{aligned}$$

we get

$$\begin{aligned}
96.75a + 23.5b &= 71.55 \\
23.5a + 8b &= 19.70.
\end{aligned}$$

Its solution is $a = 0.49357$ and $b = 1.01263$. The graph of the corresponding line $y = 0.49357x + 1.01263$ can be seen in the next figure. The error of the fitting is

$$\sum_{i=0}^{7} (0.49357 x_i + 1.01263 - y_i)^2 = 0.10604.$$

---

> **Example cont.**
> *(Figure:)* **Line fitting:** $y = 0.49357x + 1.01263$

---

