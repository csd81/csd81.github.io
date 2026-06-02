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

