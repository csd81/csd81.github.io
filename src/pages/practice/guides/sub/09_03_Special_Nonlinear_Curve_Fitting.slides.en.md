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
