## 6.5. Spline Interpolation

Let $a = x_0 < x_1 < \ldots < x_n = b$ be a division of the interval $[a,b]$. The continuous function $S \colon [a,b] \to \mathbb{R}$ is a *spline function of degree $k$* corresponding to the mesh $\{x_0, \ldots, x_n\}$ if $S \in C^{k-1}[a,b]$, and the restriction of $S$ to each interval $[x_i, x_{i+1}]$ is a polynomial of degree at most $k$. The first, second and third order spline functions are called *linear, quadratic* and *cubic spline functions*, respectively.

The simplest method of the interpolation is when linear splines are used to interpolate the given data. Geometrically this means that we connect the given data points $(x_i, y_i)$ by line segments. The error of the linear spline interpolation is discussed in Exercise 2.

The main disadvantage of the linear spline interpolation is that the interpolating function is not smooth, i.e., it is not differentiable. In case of cubic spline interpolation the interpolating function is twice continuously differentiable, which is smooth enough in practice. For the rest of this section we investigate cubic spline interpolation.

Suppose given pairwise different mesh points $a = x_0 < x_1 < \ldots < x_n = b$ and corresponding function values $y_0, y_1, \ldots, y_n$. We are looking for a cubic spline function $S$ which interpolates the given data, i.e., it satisfies

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

The restriction of $S$ to the interval $[x_i, x_{i+1}]$ is denoted by $S_i$ $(i = 0, 1, \ldots, n - 1)$. Since $S$ interpolates the points $(x_i, y_i)$, and it is twice continuously differentiable, therefore, the functions $S_i$ satisfy the following relations:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.10)} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.11)} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \quad\text{(6.12)} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \quad\text{(6.13)}
\end{aligned}$$

Since the polynomials $S_i$ are defined by 4 parameters, so $S$ is determined by $4n$ parameters. The number of conditions in (6.10)–(6.13) is only $4n - 2$, therefore, this problem has no unique solution yet. Hence we expect that two additional conditions can be given, and then we hope to have a unique solution. Frequently used conditions are the following

$$S_0''(x_0) = 0 \qquad \text{and} \qquad S_{n-1}''(x_n) = 0. \tag{6.14}$$

A cubic spline function defined by conditions (6.10)–(6.14) is called *natural spline* function. Next we show that the above problem has a unique natural spline solution. Consider the functions $S_i$ in the form:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

where $a_i, b_i, c_i$ and $d_i$ $(i = 0, 1, \ldots, n - 1)$ are parameters to be determined. Then

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

These equations imply

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{and} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{6.15}$$

With the help of relation (6.15) we define the constants $a_n$, $b_n$ and $c_n$ (which will be used later):

$$a_n := y_n, \qquad b_n := S'(x_n) \qquad \text{and} \qquad c_n := S''(x_n)/2. \tag{6.16}$$

(The derivatives in (6.16) denote left sided derivatives.) Substituting $x = x_{i+1}$ into the formula of $S_i$, and using equation (6.11) and relation $a_i = y_i$, we get

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Introduce the notations $\Delta x_i := x_{i+1} - x_i$ and $\Delta y_i := y_{i+1} - y_i$. Then

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{6.17}$$

Condition (6.12) and relation $b_{i+1} = S_{i+1}'(x_{i+1})$ yield

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{6.18}$$

for $i = 0, 1, \ldots, n - 2$. Using the definition of $b_n$ we get that (6.18) holds for $i = n - 1$ too. Similarly, from equation (6.13) and the definition of $c_n$ it follows

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

hence

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{6.19}$$

Substituting it back to equations (6.17) and (6.18) we get

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.20)} \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1. \quad\text{(6.21)}
\end{aligned}$$

From the first equation we express

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

and substituting it into the second equation for $i = 0, 1, \ldots, n - 2$ we get

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{6.22}$$

Note that in the derivation of equation (6.22) we have not used condition (6.14), so it holds for any cubic spline interpolation.

Equation (6.22) determines a system of $n - 1$ linear equations for $c_i$. We add equations $c_0 = 0$ and $c_n = 0$ following from condition (6.14) into it, so we get a $n + 1$-dimensional linear system of the form $\mathbf{Ax} = \mathbf{b}$, where $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

$$\mathbf{A} = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
\Delta x_0 & 2(\Delta x_0 + \Delta x_1) & \Delta x_1 & 0 & 0 & \cdots & 0 \\
0 & \Delta x_1 & 2(\Delta x_1 + \Delta x_2) & \Delta x_2 & 0 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & & \\
0 & \cdots & & & \Delta x_{n-2} & 2(\Delta x_{n-2} + \Delta x_{n-1}) & \Delta x_{n-1} \\
0 & \cdots & & & 0 & 0 & 1
\end{pmatrix}$$

is a tridiagonal matrix and

$$\mathbf{b} = \begin{pmatrix}
0 \\
3\frac{\Delta y_1}{\Delta x_1} - 3\frac{\Delta y_0}{\Delta x_0} \\
\vdots \\
3\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - 3\frac{\Delta y_{n-2}}{\Delta x_{n-2}} \\
0
\end{pmatrix}.$$

Since $\mathbf{A}$ is diagonally dominant, the system $\mathbf{Ax} = \mathbf{b}$ has a unique solution. Then with the help of $c_i$, we can compute the coefficients $d_i$ and $b_i$. Therefore, the problem has a unique solution. We note that, in practice, the tridiagonal system $\mathbf{Ax} = \mathbf{b}$ can be solved efficiently by the special Gaussian elimination defined in Algorithm 3.37. We have proved the following result.

**Theorem 6.22.** *The problem of natural cubic spline interpolation has a unique solution.*

**Example 6.23.** Find the natural cubic spline interpolation of the following given data:

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

Using the notations introduced before the linear system of the coefficients $c_i$ is

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
1 & 3 & 0.5 & 0 & 0 & 0 \\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 15.6 \\ -35.4 \\ 22.5 \\ 0 \\ 0
\end{pmatrix}.$$

Solving it and substituting back $c_i$ into (6.19) and (6.20) we get the coefficients $d_i$ and $b_i$. The resulting natural spline function is:

$$\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.0423265(x - 1)^2 - 21.3975104(x - 1)^3, \\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\end{aligned}$$

![Figure 6.3: Natural spline interpolation](figure_6_3.png)

*Figure 6.3: Natural spline interpolation*

The graph of this function can be seen in Figure 6.3. $\square$

Instead of condition (6.14) we can specify other boundary conditions for $S$. Now we investigate condition

$$S'(x_0) = y_0' \qquad \text{and} \qquad S'(x_n) = y_n', \tag{6.23}$$

where $y_0'$ and $y_n'$ are given numbers. This means that we know (specify) the slope of the tangent line of $S$ at the end points of the interval. A cubic spline which satisfy conditions (6.23) is called *clamped spline* function. In this case equations (6.22) hold. We need to add two equations in order to get a well-posed linear system. Using relations $b_0 = S'(x_0) = y_0'$, equation (6.20) implies

$$y_0' \Delta x_0 + c_0(\Delta x_0)^2 + \frac{c_1 - c_0}{3}(\Delta x_0)^2 = \Delta y_0,$$

hence

$$2c_0 \Delta x_0 + c_1 \Delta x_0 = 3\frac{\Delta y_0}{\Delta x_0} - 3y_0'. \tag{6.24}$$

Expressing $b_{n-1}$ from equation (6.20) and substituting it into (6.21), and using relation $b_n = y_n'$ we get

$$\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - \frac{2c_{n-1} + c_n}{3}\Delta x_{n-1} + \Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

hence

$$c_{n-1}\Delta x_{n-1} + 2c_n \Delta x_{n-1} = 3y_n' - 3\frac{\Delta y_{n-1}}{\Delta x_{n-1}}. \tag{6.25}$$

If in the system $\mathbf{Ax} = \mathbf{b}$ of the natural spline interpolation we replace the first equation with equation (6.24) and the last equation with (6.25), then it is easy to see that the coefficient matrix remains to be diagonally dominant, therefore, the modified system has a unique solution. So the cubic spline interpolation problem together with conditions (6.23) has a unique clamped spline function solution.

The natural cubic spline interpolating functions have the following minimal property, which means that the spline interpolating functions are the smoothest among all possible interpolating functions.

**Theorem 6.24.** *Let $a = x_0 < x_1 < \ldots < x_n = b$ be mesh points and $y_0, y_1, \ldots, y_n$ be function values, and let $S$ be the natural cubic spline interpolating function associated to the given data. Then*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{6.26}$$

*for every $f \in C^2[a,b]$, which also interpolates the given data, i.e., $f(x_i) = y_i$ for $i = 0, 1, \ldots, n$.*

**Proof.** Introduce the function $g(x) := f(x) - S(x)$. Then $f''(x) = S''(x) + g''(x)$, and so

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

Since $\int_a^b (g''(x))^2 \, dx \geq 0$, the statement of the theorem follows if we show

$$\int_a^b S''(x)g''(x) \, dx = 0.$$

Dividing the integral into the sum of integral over the intervals of consecutive mesh points, and using integration by parts we get

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

Since $S$ is a natural spline function, we have $S''(a) = S''(b) = 0$. Since $S$ is a third order polynomial over the intervals $[x_{i-1}, x_i]$, its third derivative is constant, which can be factored out in front of the integral. But $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, since $g(x_i) = 0$ for $i = 0, 1, \ldots, n$. This completes the proof. $\square$

The next theorem investigates the error of the clamped cubic spline interpolation. We present the result without proof.

**Theorem 6.25.** *Let $f \in C^4[a,b]$, $a = x_0 < x_1 < \ldots < x_n = b$ mesh points, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ function values, and $y_0' = f'(a)$ and $y_n' = f'(b)$ derivative values, and let $S$ be the corresponding clamped cubic spline function. Then for $x \in [a,b]$ it follows*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*where $M_4 := \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h := \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k := \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*

We note that the error of the natural cubic spline interpolating function can be given similarly.

### Exercises

1. Find the formula of the linear spline function interpolating the data $(x_i, y_i)$, $i = 0, 1, \ldots, n$ on the interval $[x_i, x_{i+1}]$.

2. Given a continuous function $f \colon [a,b] \to \mathbb{R}$, and let $S_h$ be a linear spline interpolating function of the function $f$ corresponding to equidistant mesh of the interval $[a,b]$ with step size $h$.

   (a) Show that $\max\{|f(x) - S_h(x)|:\ x \in [a,b]\} \to 0$, as $h \to 0$.

   (b) Let $f \in C^1[a,b]$. Show that
   $$|f(x) - S_h(x)| \leq M_1 h, \qquad x \in [a,b],$$
   where $M_1 := \max\{|f'(x)|:\ x \in [a,b]\}$.

3. Compute and draw the graph of the natural cubic spline function corresponding to the data given in Exercise 1 of Section 6.1.

4. Show that for a cubic spline interpolation any of the conditions
   $$S'(x_0) = f'(x_0) \qquad \text{or} \qquad S'(x_n) = f'(x_n)$$
   determines the cubic spline interpolation function uniquely.

5. Show that if $S$ is the clamped cubic spline corresponding to given mesh points $a = x_0 < x_1 < \ldots < x_n = b$, function values $y_0, y_1, \ldots, y_n$, and derivative values $y_0'$ and $y_n'$, then $S$ satisfies inequality (6.26) for all functions $f \in C^2[a,b]$ which satisfy $f(x_i) = y_i$ for all $i$, $f'(a) = y_0'$ and $f'(b) = y_n'$.
