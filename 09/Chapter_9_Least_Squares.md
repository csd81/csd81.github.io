# Chapter 9

# Method of Least Squares

Suppose that a physical process can be described by a real function $g$, where we know or assume the formula of the function but we do not know the values of some parameters in the formula. We put the parameters into a vector $\mathbf{a}$, and the notation $g(x; \mathbf{a})$ will emphasize the dependence of $g$ on the parameters $\mathbf{a}$. Suppose we have measurements $y_i$ ($i = 0, 1, \ldots, n$) of the function values at the mesh points $x_i$. For example, we know or assume that $g$ is a quadratic polynomial, then $g$ is determined by its three coefficients. If we have more than 3 measurements, then, in general, there is no unique parabola whose graph goes through all the measurement points, since due to measurement error, the data points are typically not located on the graph of $g$. Therefore, our goal is to find the parameter values for which the corresponding function $g$ differs from the measurements with the "smallest error". This problem is called *curve fitting*. It is not obvious how to measure the error of the curve fitting. Depending on its definition, we get different mathematical problems.

It is possible to measure the error of the curve fitting using the formulas

$$F_1(\mathbf{a}) := \max\{|g(x_i; \mathbf{a}) - y_i| : i = 0, 1, \ldots, n\}$$

or

$$F_2(\mathbf{a}) := \sum_{i=0}^{n} |g(x_i; \mathbf{a}) - y_i|.$$

Both looks natural, since if these errors are small, then the difference between $g(x_i)$ and the measurements $y_i$ will be small at every singular point. The problem is that if we wanted to minimize $F_1(\mathbf{a})$ or $F_2(\mathbf{a})$ with respect to $\mathbf{a}$, then it is difficult to compute, since none of the above functions are differentiable. This technicality can be eliminated if we consider the error formula

$$F(\mathbf{a}) := \sum_{i=0}^{n} (g(x_i; \mathbf{a}) - y_i)^2,$$

the so-called *least square error*. Here the mathematical problem is to minimize $F(\mathbf{a})$, and consider the graph of the function $g(x; \bar{\mathbf{a}})$ corresponding to the minimum point $\bar{\mathbf{a}}$ of $F(\mathbf{a})$ as the best fitted curve to the data points. This is called the *method of least squares*.

In this chapter we investigate some basic cases of the method of least squares. We study the curve fitting first for lines, and next for polynomial functions. Finally, we consider this method for some other special nonlinear functions using the method of linearization.

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

## 9.2. Polynomial Curve Fitting

In this section we study the problem of polynomial curve fitting. Given data points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$). We find a polynomial of degree $m$ of best fit to the data points, i.e., we are looking for parameters $a_m, a_{m-1}, \ldots, a_0$ which minimize the least square error function

$$F(a_m, a_{m-1}, \ldots, a_1, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2,$$

a function of $m + 1$ variables. If $n \le m$, then there is a polynomial of degree $m$ which interpolates the given data (the minimal value of $F$ is 0). So the coefficients can be obtained by polynomial interpolation. Therefore, we assume for the rest of this section that $m < n$, and in this case $F$ can be positive at every point.

Using Theorem 8.2 we get that $F$ can have an extremum at a point where all partial derivatives are equal to 0. Easy computation gives

$$\begin{aligned}
\frac{\partial F}{\partial a_m}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^m, \\
\frac{\partial F}{\partial a_{m-1}}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^{m-1}, \\
&\vdots \\
\frac{\partial F}{\partial a_0}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i).
\end{aligned}$$

Making the partial derivatives equal to 0 and rearranging the resulting system, we get the *normal equations*

$$\begin{aligned}
a_m\sum_{i=0}^{n} x_i^{2m} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-1} + \cdots + a_1\sum_{i=0}^{n} x_i^{m+1} + a_0\sum_{i=0}^{n} x_i^m &= \sum_{i=0}^{n} x_i^m y_i \\
a_m\sum_{i=0}^{n} x_i^{2m-1} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-2} + \cdots + a_1\sum_{i=0}^{n} x_i^m + a_0\sum_{i=0}^{n} x_i^{m-1} &= \sum_{i=0}^{n} x_i^{m-1} y_i \\
&\vdots \\
a_m\sum_{i=0}^{n} x_i^{m+1} + a_{m-1}\sum_{i=0}^{n} x_i^m + \cdots + a_1\sum_{i=0}^{n} x_i^2 + a_0\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\
a_m\sum_{i=0}^{n} x_i^m + a_{m-1}\sum_{i=0}^{n} x_i^{m-1} + \cdots + a_1\sum_{i=0}^{n} x_i + a_0(n + 1) &= \sum_{i=0}^{n} y_i
\end{aligned} \tag{9.4}$$

We prove that the linear system (9.4) has a unique solution. For this it is enough to show that the coefficient matrix

$$\mathbf{A} := \begin{pmatrix}
\sum_{i=0}^{n} x_i^{2m} & \sum_{i=0}^{n} x_i^{2m-1} & \cdots & \sum_{i=0}^{n} x_i^{m+1} & \sum_{i=0}^{n} x_i^m \\
\sum_{i=0}^{n} x_i^{2m-1} & \sum_{i=0}^{n} x_i^{2m-2} & \cdots & \sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} \\
\vdots & \vdots & & \vdots & \vdots \\
\sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} & \cdots & \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} 1
\end{pmatrix}$$

is invertible. It is enough to show by Theorem 3.9 that $\mathbf{A}$ is positive definite. The $jk$-th element of the matrix $\mathbf{A}$ is given by formula $\sum_{i=0}^{n} x_i^{2m+2-j-k}$, where $j, k = 1, 2, \ldots, m + 1$.

Let $\mathbf{z} = (z_1, z_2, \ldots, z_{m+1}) \in \mathbb{R}^{m+1}$. Simple calculations give

$$\begin{aligned}
\mathbf{z}^T \mathbf{A} \mathbf{z} &= \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} \sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k \\
&= \sum_{i=0}^{n} \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} x_i^{m+1-j} z_j x_i^{m+1-k} z_k \\
&= \sum_{i=0}^{n} \left(\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\right)^2.
\end{aligned}$$

Suppose that $\mathbf{z}^T \mathbf{A} \mathbf{z} = 0$. Then we have that $\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0$ for all $i = 0, 1, \ldots, n$. So if there are $m + 1$ distinct mesh points, then the polynomial $p(x) := \sum_{j=1}^{m+1} z_j x^{m+1-j}$ of degree at most $m$ has $m + 1$ distinct roots. Therefore, the Fundamental theorem of algebra (Theorem 2.9) yields that $p$ must be identically equal to 0, i.e., $z_j = 0$ for all $j = 1, 2, \ldots, m + 1$. Hence we get that $\mathbf{A}$ is positive definite, and so system (9.4) has a unique solution denoted by $\bar{\mathbf{a}}$. Since

$$\frac{\partial^2 F}{\partial a_j\, \partial a_k}(\bar{\mathbf{a}}) = 2\sum_{i=0}^{n} x_i^{j+k},$$

we get $F''(\bar{\mathbf{a}}) = 2\mathbf{A}$. Therefore, it follows from Theorem 8.1 that $F$ has a local minimum at $\bar{\mathbf{a}}$, and since $F$ is a quadratic function, it is also a global minimum. We can summarize our result in the next theorem.

**Theorem 9.3.** Let $m < n$, and given data point $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) such that there exist at least $m + 1$ distinct mesh points $x_i$. Then the problem

$$\min_{(a_m,\ldots,a_0)\in\mathbb{R}^{m+1}} \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$

has a unique solution which satisfies the normal equations (9.4).

**Example 9.4.** Find a parabola of best fit to the data

| $x_i$ | -1.0 | -0.5 | 0.0 | 1.0 | 2.0 | 3.0  | 3.5  |
|-------|------|------|-----|-----|-----|------|------|
| $y_i$ | 1.6  | 1.7  | 1.9 | 1.5 | 0.6 | -0.1 | -1.0 |

We list the data in the first two columns of Table 9.2, and fill out the rest of the columns. In the last line we compute the sum of the numbers in the respective columns, and we use these numbers in the normal equations (9.4):

$$\begin{aligned}
249.1250a + 77.750b + 27.50c &= -7.225 \\
77.750a + 27.50b + 8.0c &= -3.55 \\
27.50a + 8.0b + 7c &= 6.2.
\end{aligned}$$

Its solution is $a = -0.196021$, $b = -0.084748$ and $c = 1.752653$. The graph of the corresponding parabola and the given data point can be seen in Figure 9.2. The error of the fitting is

$$\sum_{i=0}^{6} (-0.196021 x_i^2 - 0.084748 x_i + 1.752653 - y_i)^2 = 0.0964456.$$

$\square$

**Table 9.2: Parabola fitting**

| $x_i$ | $y_i$ | $x_i^4$  | $x_i^3$ | $x_i^2$ | $x_i^2 y_i$ | $x_i y_i$ |
|-------|-------|----------|---------|---------|-------------|-----------|
| -1.0  | 1.4   | 1.0000   | -1.000  | 1.00    | 1.400       | -1.40     |
| 0.0   | 1.9   | 0.0000   | 0.000   | 0.00    | 0.000       | 0.00      |
| 0.5   | 1.6   | 0.0625   | 0.125   | 0.25    | 0.400       | 0.80      |
| 1.0   | 1.7   | 1.0000   | 1.000   | 1.00    | 1.700       | 1.70      |
| 2.0   | 0.2   | 16.0000  | 8.000   | 4.00    | 0.800       | 0.40      |
| 2.5   | -0.1  | 39.0625  | 15.625  | 6.25    | -0.625      | -0.25     |
| 3.0   | -2.0  | 81.0000  | 27.000  | 9.00    | -18.000     | -6.00     |
| 8.0   | 4.7   | 138.1250 | 50.750  | 21.50   | -14.325     | -4.75     |

> **Figure 9.2: Parabola fitting:** $y = -0.196021x^2 - 0.084748x + 1.752653$

### Exercises

1. Find a parabola of best fit to the given data, and compute the error of the fitting:

   (a)

   | $x_i$ | -2.0 | -1.0 | 1.0 | 2.0  | 3.0  |
   |-------|------|------|-----|------|------|
   | $y_i$ | -2.1 | 1.4  | 0.5 | -2.5 | -7.2 |

   (b)

   | $x_i$ | 1.0 | 2.0 | 3.0  | 4.0 | 5.0 | 6.0 |
   |-------|-----|-----|------|-----|-----|-----|
   | $y_i$ | 2.5 | 1.2 | -2.0 | 3.9 | 6.2 | 8.3 |

## 9.3. Special Nonlinear Curve Fitting

The method of the previous sections can be extended easily to nonlinear functions where the unknown parameters appear linearly in the formula, because in this case the resulting normal equations will be linear systems. But in the general case the normal equations can be nonlinear too. Consider an example. Suppose we would like to fit an exponential function of the form $b e^{ax}$ to given data $(x_i, y_i)$ ($i = 0, 1, \ldots, n$). The least square error in this case will define the function

$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2,$$

whose critical points are the solutions of the nonlinear system

$$\begin{aligned}
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0.
\end{aligned}$$

We cannot solve this system analytically, and it is not easy to analyse whether this system has a unique solution or several solutions, or in the latter case, which solution minimizes the error function. Certainly, we can solve the system numerically, or we can minimize $F$ by a numerical method.

But now we define the method of *linearization* for this special example. We observe that if we take the natural logarithm of both sides of the equation $y = b e^{ax}$, then we get the relation $\ln y = \ln b + ax$, where $\ln y$ depends linearly on $x$. We introduce the new variables: $X := x$, $Y := \ln y$, $A := a$ and $B := \ln b$. So we can fit a line of the form $Y = AX + B$ to the data points $(x_i, \ln y_i)$. Let $\bar{A}$ and $\bar{B}$ be the solution of this linear fitting. Then the function $\bar{b} e^{\bar{a}x}$ can be considered as the best fit to the points $(x_i, y_i)$, where $\bar{a} = \bar{A}$, $\bar{b} = e^{\bar{B}}$. Note that this linearization does not give us the solution of the original nonlinear fitting problem. But its solution can be computed easily, so it is used frequently in practice.

**Example 9.5.** Fit an exponential function $b e^{ax}$ to the data

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.3 | 0.7 | 0.9 | 1.2 | 1.8 | 2.7 |

using linearization. The linearized data can be seen in Table 9.3. The corresponding Gaussian normal equations are

$$\begin{aligned}
32.25A + 11.5B &= 5.586294 \\
11.5A + 6B &= 0.097352,
\end{aligned}$$

which gives $A = 0.528951$ and $B = -0.997597$. So the solution of the linearized fitting is $0.368765 e^{0.528951x}$. Its graph and the data point can be seen in Figure 9.3. The error of the linear fitting is

$$\sum_{i=0}^{5} (0.528951 x_i - 0.997597 - \ln y_i)^2 = 0.095396,$$

and the error of the nonlinear fitting is

$$\sum_{i=0}^{5} (0.368765 e^{0.528951 x_i} - y_i)^2 = 0.165543.$$

$\square$

**Table 9.3: Fitting an exponential function $b e^{ax}$**

| $x_i$ | $y_i$ | $\ln y_i$  | $x_i^2$ | $x_i \ln y_i$ |
|-------|-------|------------|---------|---------------|
| 0.0   | 0.3   | -1.203973  | 0.00    | 0.000000      |
| 1.0   | 0.7   | -0.356675  | 1.00    | -0.356675     |
| 1.5   | 0.9   | -0.105361  | 2.25    | -0.158041     |
| 2.0   | 1.2   | 0.182322   | 4.00    | 0.364643      |
| 3.0   | 1.8   | 0.587787   | 9.00    | 1.763360      |
| 4.0   | 2.7   | 0.993252   | 16.00   | 3.973007      |
| 11.5  |       | 0.097352   | 32.25   | 5.586294      |

> **Figure 9.3: Fitting an exponential function $b e^{ax}$:** $y = 0.368765 e^{0.528951x}$

**Example 9.6.** Fit a power function of the form $b x^a$ to the given data

| $x_i$ | 0.5 | 1.0 | 1.5 | 2.5 | 3.0 |
|-------|-----|-----|-----|-----|-----|
| $y_i$ | 0.7 | 1.1 | 1.6 | 2.1 | 2.3 |

Here we can also use the method of linearization: consider the relation $\ln y = a \ln x + \ln b$ which follows from the equation $y = b x^a$. Then $\ln y$ depends linearly on $\ln x$. Therefore, we fit a line to the data points $(\ln x_i, \ln y_i)$. The computation is shown in Table 9.4, the corresponding Gaussian normal equations are:

$$\begin{aligned}
2.691393A + 1.727221B &= 2.032673 \\
1.727221A + 5B &= 1.783485.
\end{aligned}$$

Its solution is $A = 0.676257$, $B = 0.123088$, and hence the original parameters are $a = A = 0.676257$ and $b = e^B = e^{0.123088} = 1.130984$. The error of the linear fitting is

$$\sum_{i=0}^{4} (0.676257 \ln x_i + 0.123088 - \ln y_i)^2 = 0.007279,$$

and the error of the original nonlinear fitting is

$$\sum_{i=0}^{4} (1.130984 x_i^{0.676257} - y_i)^2 = 0.019616.$$

$\square$

**Table 9.4: Fitting of a power function $b x^a$**

| $x_i$ | $y_i$ | $\ln x_i$  | $\ln y_i$  | $(\ln x_i)^2$ | $\ln x_i \ln y_i$ |
|-------|-------|------------|------------|---------------|-------------------|
| 0.5   | 0.7   | -0.693147  | -0.356675  | 0.480453      | 0.247228          |
| 1.0   | 1.1   | 0.000000   | 0.095310   | 0.000000      | 0.000000          |
| 1.5   | 1.6   | 0.405465   | 0.470004   | 0.164402      | 0.190570          |
| 2.5   | 2.1   | 0.916291   | 0.741937   | 0.839589      | 0.679830          |
| 3.0   | 2.3   | 1.098612   | 0.832909   | 1.206949      | 0.915044          |
|       |       | 1.727221   | 1.783485   | 2.691393      | 2.032673          |

> **Figure 9.4: Fitting of a power function $b x^a$:** $y = 1.130984 x^{0.676257}$

### Exercises

1. Fit an exponential function $b e^{ax}$ to the given data, and compute the error of the fitting:

   (a)

   | $x_i$ | -2.0 | -1.0 | 1.0 | 2.0 | 3.0 |
   |-------|------|------|-----|-----|-----|
   | $y_i$ | 0.6  | 0.9  | 1.6 | 2.3 | 2.9 |

   (b)

   | $x_i$ | 1.0 | 1.5 | 2.0 | 2.5 | 3.0 | 3.5 |
   |-------|-----|-----|-----|-----|-----|-----|
   | $y_i$ | 1.3 | 1.6 | 1.9 | 2.2 | 3.0 | 4.1 |

2. Fit a power function $b x^a$ for the given data, and compute the error of the fitting:

   (a)

   | $x_i$ | 1.0 | 3.0 | 4.0 | 5.0 | 6.0 | 9.0 |
   |-------|-----|-----|-----|-----|-----|-----|
   | $y_i$ | 1.6 | 1.9 | 2.2 | 2.3 | 3.4 | 4.9 |

   (b)

   | $x_i$ | 1.0 | 2.0 | 3.0 | 4.0  | 5.0  |
   |-------|-----|-----|-----|------|------|
   | $y_i$ | 0.7 | 2.8 | 7.5 | 14.8 | 25.6 |

3. Solve the previous exercises using numerical minimization of the nonlinear least square error by Newton's method.

---

*F. Hartung, University of Pannonia — www.tankonyvtar.hu*
