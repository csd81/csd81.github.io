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

# 9.2. Polynomial Curve Fitting

Next we study the problem of **polynomial curve fitting**. Given data points $(x_i, y_i)$ ($i = 0, 1, \ldots, n$). We find a polynomial of degree $m$ of best fit to the data points, i.e., we are looking for parameters $a_m, a_{m-1}, \ldots, a_0$ which minimize the least square error function

$$F(a_m, a_{m-1}, \ldots, a_1, a_0) := \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2,$$

a function of $m + 1$ variables.

If $n \le m$, then there is a polynomial of degree $m$ which interpolates the given data (the minimal value of $F$ is 0). So the coefficients can be obtained by polynomial interpolation.

Therefore we assume for the rest of this section that $m < n$, and in this case $F$ can be positive at every point.

---

We get that $F$ can have an extremum at a point where all partial derivatives are equal to 0.

$$\begin{aligned}
\frac{\partial F}{\partial a_m}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^m, \\
\frac{\partial F}{\partial a_{m-1}}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i)x_i^{m-1}, \\
&\vdots \\
\frac{\partial F}{\partial a_0}(a_m, a_{m-1}, \ldots, a_0) &= 2\sum_{i=0}^{m} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_0 - y_i).
\end{aligned}$$

---

Making the partial derivatives equal to 0 and rearranging the resulting system, we get the **normal equations**

$$\begin{aligned}
a_m\sum_{i=0}^{n} x_i^{2m} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-1} + \cdots + a_1\sum_{i=0}^{n} x_i^{m+1} + a_0\sum_{i=0}^{n} x_i^m &= \sum_{i=0}^{n} x_i^m y_i \\
a_m\sum_{i=0}^{n} x_i^{2m-1} + a_{m-1}\sum_{i=0}^{n} x_i^{2m-2} + \cdots + a_1\sum_{i=0}^{n} x_i^m + a_0\sum_{i=0}^{n} x_i^{m-1} &= \sum_{i=0}^{n} x_i^{m-1} y_i \\
&\vdots \\
a_m\sum_{i=0}^{n} x_i^{m+1} + a_{m-1}\sum_{i=0}^{n} x_i^m + \cdots + a_1\sum_{i=0}^{n} x_i^2 + a_0\sum_{i=0}^{n} x_i &= \sum_{i=0}^{n} x_i y_i \\
a_m\sum_{i=0}^{n} x_i^m + a_{m-1}\sum_{i=0}^{n} x_i^{m-1} + \cdots + a_1\sum_{i=0}^{n} x_i + a_0(n + 1) &= \sum_{i=0}^{n} y_i
\end{aligned} \tag{4}$$

---

We prove that the linear system (4) has a unique solution. For this it is enough to show that the coefficient matrix

$$\mathbf{A} := \begin{pmatrix}
\sum_{i=0}^{n} x_i^{2m} & \sum_{i=0}^{n} x_i^{2m-1} & \cdots & \sum_{i=0}^{n} x_i^{m+1} & \sum_{i=0}^{n} x_i^m \\
\sum_{i=0}^{n} x_i^{2m-1} & \sum_{i=0}^{n} x_i^{2m-2} & \cdots & \sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} \\
\vdots & \vdots & & \vdots & \vdots \\
\sum_{i=0}^{n} x_i^m & \sum_{i=0}^{n} x_i^{m-1} & \cdots & \sum_{i=0}^{n} x_i & \sum_{i=0}^{n} 1
\end{pmatrix}$$

is invertible. It is enough to show that $\mathbf{A}$ is positive definite. The $jk$-th element of the matrix $\mathbf{A}$ is given by formula

$$\sum_{i=0}^{n} x_i^{2m+2-j-k}, \qquad j, k = 1, 2, \ldots, m + 1.$$

---

Let $\mathbf{z} = (z_1, z_2, \ldots, z_{m+1}) \in \mathbb{R}^{m+1}$. Simple calculations give

$$\begin{aligned}
\mathbf{z}^T \mathbf{A} \mathbf{z} &= \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} \sum_{i=0}^{n} x_i^{2m+2-j-k} z_j z_k \\
&= \sum_{i=0}^{n} \sum_{j=1}^{m+1} \sum_{k=1}^{m+1} x_i^{m+1-j} z_j x_i^{m+1-k} z_k \\
&= \sum_{i=0}^{n} \left(\sum_{j=1}^{m+1} x_i^{m+1-j} z_j\right)^2.
\end{aligned}$$

Suppose that

$$\mathbf{z}^T \mathbf{A} \mathbf{z} = 0.$$

Then we have that

$$\sum_{j=1}^{m+1} x_i^{m+1-j} z_j = 0, \qquad i = 0, 1, \ldots, n.$$

---

So if there are $m + 1$ distinct mesh points, then the polynomial

$$p(x) := \sum_{j=1}^{m+1} z_j x^{m+1-j}$$

of degree at most $m$ has $m + 1$ distinct roots. Therefore the Fundamental theorem of algebra yields that $p$ must be identically equal to 0, i.e.,

$$z_j = 0, \qquad j = 1, 2, \ldots, m + 1.$$

Hence we get that $\mathbf{A}$ is positive definite, and so system (4) has a unique solution denoted by $\bar{\mathbf{a}}$.

---

Since

$$\frac{\partial^2 F}{\partial a_j\, \partial a_k}(\bar{\mathbf{a}}) = 2\sum_{i=0}^{n} x_i^{j+k},$$

we get

$$F''(\bar{\mathbf{a}}) = 2\mathbf{A}.$$

Therefore $F$ has a local minimum at $\bar{\mathbf{a}}$, and since $F$ is a quadratic function, it is also a global minimum. We can summarize our result in the next theorem.

> **Theorem.**
> Let $m < n$, and given data point $(x_i, y_i)$ ($i = 0, 1, \ldots, n$) such that there exist at least $m + 1$ distinct mesh points $x_i$. Then the problem
> $$\min_{(a_m,\ldots,a_0)\in\mathbb{R}^{m+1}} \sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \cdots + a_1 x_i + a_0 - y_i)^2$$
> has a unique solution which satisfies the normal equations (4).

---

> **Example.**
> Find a parabola of best fit to the data

| $x_i$ | -1.0 | 0.0 | 0.5 | 1.0 | 2.0 | 2.5  | 3.0  |
|-------|------|-----|-----|-----|-----|------|------|
| $y_i$ | 1.4  | 1.9 | 1.6 | 1.7 | 0.2 | -0.1 | -2.0 |

We fill out the table:

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

---

> **Example cont.**
> In the last line we compute the sum of the numbers in the respective columns, and we use these numbers in the normal equations (4):

$$\begin{aligned}
138.125a + 50.75b + 21.5c &= -14.325 \\
50.75a + 21.5b + 8c &= -4.75 \\
21.5a + 8b + 7c &= 4.7.
\end{aligned}$$

Its solution is $a = -0.440076$, $b = 0.113226$ and $c = 1.89369$. The graph of the corresponding parabola and the given data point can be seen in the next figure. The error of the fitting is

$$\sum_{i=0}^{6} (-0.44008 x_i^2 + 0.11323 x_i + 1.89369 - y_i)^2 = 0.40338.$$

---

> **Example cont.**
> *(Figure:)* **Parabola fitting:** $y = -0.44008x^2 + 0.11323x + 1.89369$

---

# 9.3. Special Nonlinear Curve Fitting

Consider an example for nonlinear curve fitting. Suppose we would like to fit an exponential function of the form $b e^{ax}$ to given data $(x_i, y_i)$ ($i = 0, 1, \ldots, n$). The least square error in this case will define the function

$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2,$$

whose critical points are the solutions of the nonlinear system

$$\begin{aligned}
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\
2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0.
\end{aligned}$$

We cannot solve this system analytically, and it is not easy to analyse whether this system has a unique solution or more, or in the latter case, which solution minimizes the error function. Certainly, we can solve the system numerically, or we can minimize $F$ by a numerical method.

---

Use the method of **linearization** for this special example. Take the natural logarithm of both sides of the equation

$$y = b e^{ax},$$

then we get the relation

$$\ln y = \ln b + ax.$$

We introduce the new variables:

$$X := x, \quad Y := \ln y, \quad A := a \quad \text{and} \quad B := \ln b.$$

So we can fit a line of the form

$$Y = AX + B \qquad \text{to the data points } (x_i, \ln y_i).$$

Let $\bar{A}$ and $\bar{B}$ be the solution of this linear fitting. Then the function $\bar{b} e^{\bar{a}x}$ can be considered as the best fit to the points $(x_i, y_i)$, where

$$\bar{a} = \bar{A}, \qquad \bar{b} = e^{\bar{B}}.$$

---

> **Example.**
> Fit an exponential function $b e^{ax}$ to the data

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.3 | 0.7 | 0.9 | 1.2 | 1.8 | 2.7 |

using linearization. The linearized data can be seen in the next table:

| $x_i$ | $y_i$ | $\ln y_i$  | $x_i^2$ | $x_i \ln y_i$ |
|-------|-------|------------|---------|---------------|
| 0.0   | 0.3   | -1.203973  | 0.00    | 0.000000      |
| 1.0   | 0.7   | -0.356675  | 1.00    | -0.356675     |
| 1.5   | 0.9   | -0.105361  | 2.25    | -0.158041     |
| 2.0   | 1.2   | 0.182322   | 4.00    | 0.364643      |
| 3.0   | 1.8   | 0.587787   | 9.00    | 1.763360      |
| 4.0   | 2.7   | 0.993252   | 16.00   | 3.973007      |
| 11.5  |       | 0.097352   | 32.25   | 5.586294      |

---

> **Example cont.**
> The corresponding Gaussian normal equations are

$$\begin{aligned}
32.25A + 11.5B &= 5.586294 \\
11.5A + 6B &= 0.097352,
\end{aligned}$$

which give $A = 0.528951$ and $B = -0.997597$. So the solution of the linearized fitting is

$$y = 0.368765 e^{0.528951x}.$$

Its graph and the data points can be seen in the figure below. The error of the linear fitting is

$$\sum_{i=0}^{5} (0.528951 x_i - 0.997597 - \ln y_i)^2 = 0.095396,$$

and the error of the nonlinear fitting is

$$\sum_{i=0}^{5} (0.368765 e^{0.528951 x_i} - y_i)^2 = 0.165543.$$

---

> **Example cont.**
> *(Figure:)* **Fitting an exponential function:** $0.368765 e^{0.528951x}$

---

> **Example.**
> Fit a power function of the form $b x^a$ to the given data

| $x_i$ | 0.5 | 1.0 | 1.5 | 2.5 | 3.0 |
|-------|-----|-----|-----|-----|-----|
| $y_i$ | 0.7 | 1.1 | 1.6 | 2.1 | 2.3 |

From the equation $y = b x^a$ using the method of linearization we get

$$\ln y = a \ln x + \ln b.$$

Then $\ln y$ depends linearly on $\ln x$. We therefore fit a line to the data points $(\ln x_i, \ln y_i)$.

| $x_i$ | $y_i$ | $\ln x_i$  | $\ln y_i$  | $(\ln x_i)^2$ | $\ln x_i \ln y_i$ |
|-------|-------|------------|------------|---------------|-------------------|
| 0.5   | 0.7   | -0.693147  | -0.356675  | 0.480453      | 0.247228          |
| 1.0   | 1.1   | 0.000000   | 0.095310   | 0.000000      | 0.000000          |
| 1.5   | 1.6   | 0.405465   | 0.470004   | 0.164402      | 0.190570          |
| 2.5   | 2.1   | 0.916291   | 0.741937   | 0.839589      | 0.679830          |
| 3.0   | 2.3   | 1.098612   | 0.832909   | 1.206949      | 0.915044          |
|       |       | 1.727221   | 1.783485   | 2.691393      | 2.032673          |

---

> **Example cont.**
> The corresponding Gaussian normal equations are:

$$\begin{aligned}
2.691393A + 1.727221B &= 2.032673 \\
1.727221A + 5B &= 1.783485.
\end{aligned}$$

Its solution is $A = 0.676257$, $B = 0.123088$, and hence the original parameters are $a = A = 0.676257$ and $b = e^B = e^{0.123088} = 1.130984$, hence the solution is

$$y = 1.130984 x^{0.676257}.$$

The error of the linear fitting is

$$\sum_{i=0}^{4} (0.676257 \ln x_i + 0.123088 - \ln y_i)^2 = 0.007279,$$

and the error of the original nonlinear fitting is

$$\sum_{i=0}^{4} (1.130984 x_i^{0.676257} - y_i)^2 = 0.019616.$$

---

> **Example cont.**
> *(Figure:)* **Fitting of a power function:** $1.130984 x^{0.676257}$

---

*Ferenc Hartung — Numerical Analysis: 9. Method of Least Squares — University of Pannonia*
