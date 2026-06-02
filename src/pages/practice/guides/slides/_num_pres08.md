# Numerical Analysis

## 8. Minimization of Functions

**Ferenc Hartung**

University of Pannonia, Department of Mathematics, Veszprém, Hungary

2025

*(Supported by: A Pannon Egyetem gyakorlatorientált infrastrukturális- és készségfejlesztési reformja, RRF-2.1.2.-21-2022-00007.)*

---

# 8.1. Review of Calculus

Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be a function of $n$ variables. The Hessian matrix:

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1\, \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2\, \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

> **Theorem.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\mathbf{a} \in \mathbb{R}^n$, then $\frac{\partial f(\mathbf{a})}{\partial x_i} = 0$ holds for all $i = 1, \ldots, n$.*
>
> *If $f \in C^2$ and $f'(\mathbf{a}) = \mathbf{0}$ for some $\mathbf{a} \in \mathbb{R}^n$, moreover the Hessian matrix $f''(\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\mathbf{a}$.*

---

For two-variable functions we have the following special case of the previous result.

> **Theorem.** *Let $f\colon \mathbb{R}^2 \to \mathbb{R}$, $f \in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*
>
> $$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{1}$$
>
> *holds.*
>
> *On the other hand, if relation (1) holds at a point $(a, b)$, and*
>
> $$D(a, b) := \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x\, \partial y}(a, b) \right)^2 > 0,$$
>
> *then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*

---

# 8.2. Golden Section Search Method

Let $f\colon [a, b] \to \mathbb{R}$ be continuous, and suppose that it is a **unimodal function**, i.e., it has a unique minimum point in the interval $[a, b]$.

![Unimodal functions](fig-unimodal.png)

*Unimodal functions*

---

The **golden section search method** is similar to the bisection method: we define a sequence of nested intervals which all contains the minimum point $p$ of $f$: Let $a < y < x < b$. If $f(x) > f(y)$, then $p \in [a, x]$, otherwise $p \in [y, b]$ holds. Then we repeat the procedure with the intervals $[a, x]$ or $[y, b]$.

![the two cases of the golden section search](fig-golden.png)

---

**Idea 1:** We define the points $x$ and $y$ so that the length of the intervals $[a, x]$ and $[y, b]$ be the same:

$$x - a = b - y = r(b - a)$$

for some $0 < r < 1$. Then

$$x = a + r(b - a), \qquad y = a + (1 - r)(b - a). \tag{2}$$

Assumption $x > y$ implies $0.5 < r < 1$.

The next interval is denoted by $[a', b']$, and the new mesh points defined by (2) are $x'$ and $y'$.

**Idea 2:** $r$ is defined so that one of the new mesh points $x'$ and $y'$ should coincide with one of the previous mesh points in order in each steps we should evaluate only one new function value.

---

![mesh points](fig-mesh.png)

Suppose $[a', b'] = [y, b]$. Then we require that $y' = x$.

$$\begin{aligned}
a + r(b - a) &= y' \\
&= a' + (1 - r)(b' - a') \\
&= y + (1 - r)(b - y) \\
&= a + (1 - r)(b - a) + (1 - r)(b - a - (1 - r)(b - a)),
\end{aligned}$$

and so

$$r = 1 - r + (1 - r)(1 - (1 - r)),$$

which yields the equation

---

$$r^2 + r - 1 = 0. \tag{3}$$

Its positive solution is $r = (\sqrt{5} - 1)/2 \approx 0.61834$. This is the ratio of the **golden section**, since $r$ satisfies equation

$$\frac{r}{1 - r} = \frac{1}{r}.$$

In the case when $[a', b'] = [a, x]$, we select $r$ so that $x' = y$ be satisfied. It can be shown easily that this yields the same equation (3).

> **Theorem.** *Let $f \in C[a, b]$ be unimodal function. Then the golden section search method converges to the minimum point of the function $f$.*

---

Length of the interval after $n$ steps is

$$(b - a)r^n.$$

Hence to reach $\varepsilon$ tolerance in the Golden section search method

$$n \geq \frac{\log \frac{\varepsilon}{b - a}}{\log r} \tag{4}$$

steps are required.

> **Example.** Find the minimum point of the function $f(x) = x^2 - 0.8x + 1$. Its minimum point is $p = 0.4$. We applied Golden section search method with the starting interval $[-1, 2]$ and tolerance $\varepsilon = 0.005$. Formula (4) yields that $n \geq 13.29337586$ steps are needed to reach the required precision. The Golden section search method is formulated so that its output is the midpoint of the last interval, i.e., $0.3995535068$.

---

**Example cont.**

*Golden section search method, $f(x) = x^2 - 0.8x + 1$*

| $k$ | $[a_k, b_k]$ | $y_k$ | $x_k$ |
|----|--------------|-------|-------|
| 0 | $[-1.0000000000, 2.0000000000]$ | 0.1458980338 | 0.8541019662 |
| 1 | $[-1.0000000000, 0.8541019662]$ | -0.2917960675 | 0.1458980338 |
| 2 | $[-0.2917960675, 0.8541019662]$ | 0.1458980338 | 0.4164078650 |
| 3 | $[0.1458980338, 0.8541019662]$ | 0.4164078650 | 0.5835921350 |
| 4 | $[0.1458980338, 0.5835921350]$ | 0.3130823038 | 0.4164078650 |
| 5 | $[0.3130823038, 0.5835921350]$ | 0.4164078650 | 0.4802665738 |
| 6 | $[0.3130823038, 0.4802665738]$ | 0.3769410125 | 0.4164078650 |
| 7 | $[0.3769410125, 0.4802665738]$ | 0.4164078650 | 0.4407997213 |
| 8 | $[0.3769410125, 0.4407997213]$ | 0.4013328688 | 0.4164078650 |
| 9 | $[0.3769410125, 0.4164078650]$ | 0.3920160087 | 0.4013328688 |
| 10 | $[0.3920160087, 0.4164078650]$ | 0.4013328688 | 0.4070910050 |
| 11 | $[0.3920160087, 0.4070910050]$ | 0.3977741449 | 0.4013328688 |
| 12 | $[0.3977741449, 0.4070910050]$ | 0.4013328688 | 0.4035322811 |
| 13 | $[0.3977741449, 0.4035322811]$ | 0.3999735572 | 0.4013328688 |
| 14 | $[0.3977741449, 0.4013328688]$ | 0.3991334565 | 0.3999735572 |

---

# 8.3. Simplex Method

![the surface of $f(x, y) = 4 - 3x^2 - y^2$ with a horizontal plane](fig-surface-1.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

![contour lines (level curves) of $f(x, y) = 4 - 3x^2 - y^2$](fig-contour-1.png)

*contour lines (level curves) of $f(x, y) = 4 - 3x^2 - y^2$*

![surface and contour plot of a function with several local extrema](fig-surface-2.png)

---

An $n$-dimensional **simplex** is a convex hull of $n + 1$ number of $n$-dimensional vectors, i.e., the closed set

$$\{\alpha_0 \mathbf{x}^{(0)} + \cdots + \alpha_n \mathbf{x}^{(n)} : 0 \leq \alpha_i \leq 1, \quad \alpha_0 + \cdots + \alpha_n \leq 1\},$$

where the vectors $\mathbf{x}^{(1)} - \mathbf{x}^{(0)}, \mathbf{x}^{(2)} - \mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)} - \mathbf{x}^{(0)}$ are linearly independent. The vectors $\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$ are called the vertices of the simplex.

- **1D simplex:** line segment
- **2D simplex:** triangle
- **3D simplex:** tetrahedron

---

**simplex method:** Consider a starting $n$-dimensional simplex. Suppose that in each steps the vertices are indexed so that

$$f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)}).$$

Then $\mathbf{x}^{(n)}$ is the "worst", and $\mathbf{x}^{(0)}$ is the "best" vertex.

**Step 1:** Compute the center of the best $n$ vertices:

$$\mathbf{x}_c := \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}.$$

Reflect the worst vertex to the center:

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}.$$

**Step 2:** If $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n)})$ (the new point is not better than the worst point of the previous step), then we discard the reflection, and instead of it, we shrink the simplex to half of its size from its "best" vertex: we recompute all the other vertices by the formula

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n.$$

Repeat Steps 1 and 2 for the resulting (reflected or shrinked) simplex.

---

Possible stopping criterions:

1. Stop the method when the simplex becomes smaller than a predefined tolerance size. The size of the simplex can be defined, e.g., as the length of its longest edge, i.e., by the number $\max\{\|\mathbf{x}^{(i)} - \mathbf{x}^{(j)}\| : i, j = 0, \ldots, n\}$.
2. Stop the iteration if $|f_{k+1} - f_k| < \varepsilon$, where $f_k$ denotes the function value at the center of the $k$th simplex.
3. Let $\bar{f}$ be the average of the function values at the vertices, and $\sigma$ be its standard deviation, i.e.,

$$\bar{f} := \frac{1}{n+1} \sum_{i=0}^{n} f(\mathbf{x}^{(i)}), \qquad \sigma := \sqrt{\frac{1}{n+1} \sum_{i=0}^{n} (f(\mathbf{x}^{(i)}) - \bar{f})^2}.$$

We interrupt the iteration when $\sigma$ becomes smaller than a tolerance. The center of the simplex can be used as an approximation of the minimum point.

---

> **Example.** Find the minimum point of the function
>
> $$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2.$$
>
> It is easy to see that the (global) minimum point of the function is $(1, 0.5)$, and the minimal function value is 0. Use the simplex method with the starting simplex corresponding to the vertices $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The numerical values of the first 30 steps of the method can be seen in the next table. The center of the 30th simplex is $(0.9688, 0.4583)$, which is a good approximation of the exact minimum point. The corresponding function value is $0.00243$ which is close to the true minimum 0. In the figure the contour lines (level curves) of the function and the first 22 steps of the method can be seen. The blue dot represents the exact minimum point.

---

**Example cont.**

*Simplex method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 3.000) | 34.000 | 57.000 | 26.562 |
| 2 | (−1.500, 3.000) | (−2.000, 4.000) | (−2.500, 3.000) | 26.562 | 34.000 | 24.562 |
| 3 | (−2.500, 3.000) | (−1.500, 3.000) | (−2.000, 2.000) | 24.562 | 26.562 | 18.000 |
| 4 | (−2.000, 2.000) | (−2.250, 2.500) | (−1.750, 2.500) | 18.000 | 21.129 | 18.879 |
| 5 | (−2.000, 2.000) | (−1.750, 2.500) | (−1.500, 2.000) | 18.000 | 18.879 | 15.562 |
| 6 | (−1.500, 2.000) | (−2.000, 2.000) | (−1.750, 1.500) | 15.562 | 18.000 | 15.129 |
| 7 | (−1.750, 1.500) | (−1.500, 2.000) | (−1.250, 1.500) | 15.129 | 15.562 | 12.191 |
| $\vdots$ | | | | | | |
| 23 | ( 0.875, 0.250) | ( 0.750, 0.250) | ( 0.812, 0.375) | 0.102 | 0.129 | 0.078 |
| 24 | ( 0.812, 0.375) | ( 0.875, 0.250) | ( 0.938, 0.375) | 0.078 | 0.102 | 0.024 |
| 25 | ( 0.938, 0.375) | ( 0.812, 0.375) | ( 0.875, 0.500) | 0.024 | 0.078 | 0.086 |
| 26 | ( 0.938, 0.375) | ( 0.875, 0.375) | ( 0.906, 0.438) | 0.024 | 0.031 | 0.022 |
| 27 | ( 0.906, 0.438) | ( 0.938, 0.375) | ( 0.969, 0.438) | 0.020 | 0.024 | 0.006 |
| 28 | ( 0.969, 0.438) | ( 0.906, 0.438) | ( 0.938, 0.500) | 0.006 | 0.020 | 0.022 |
| 29 | ( 0.969, 0.438) | ( 0.938, 0.438) | ( 0.953, 0.469) | 0.006 | 0.008 | 0.005 |
| 30 | ( 0.953, 0.469) | ( 0.969, 0.438) | ( 0.984, 0.469) | 0.005 | 0.006 | 0.001 |

center of the triangle: $(0.9688, 0.4583)$, function value: $0.00243$

---

**Example cont.**

![Simplex method (22 steps) — contour lines and the sequence of triangles](fig-simplex-22.png)

*Simplex method (22 steps).*

---

A variant of the simplex method is the **Nelder–Mead method**. Here we reflect, expand or contract the simplex in the following way. Suppose that in each steps the vertices are indexed so that $f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$. Then $\mathbf{x}^{(n)}$ is the "worst" vertex.

**Step 1:** Reflect $\mathbf{x}^{(n)}$ over the center of the remaining points:

$$\mathbf{x}_c = \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}.$$

The reflected point is $\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$.

**Step 2:** Evaluate the function value $f(\mathbf{x}_r)$. Distinguish three cases:

(i) $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$,

(ii) $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$, so $\mathbf{x}_r$ would be the new best vertex, and

(iii) $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$, i.e., $\mathbf{x}_r$ would be the new worst vertex.

---

**Case (i),** $f(\mathbf{x}^{(0)}) < f(\mathbf{x}_r) < f(\mathbf{x}^{(n-1)})$: Replace $\mathbf{x}^{(n)}$ with $\mathbf{x}_r$ (i.e., we accept the reflection), and continue the iteration.

**Case (ii),** $f(\mathbf{x}_r) \leq f(\mathbf{x}^{(0)})$: Expand the simplex in the direction of $\mathbf{x}_r$ hoping that we get an even better point. Let

$$\mathbf{x}_e := \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c),$$

where $\alpha > 1$ is a fixed constant (a parameter of the method). If $f(\mathbf{x}_e) < f(\mathbf{x}^{(0)})$, then the expansion is considered to be successful, and we replace $\mathbf{x}^{(n)}$ with $\mathbf{x}_e$. Otherwise we replace $\mathbf{x}^{(n)}$ by $\mathbf{x}_r$, i.e., the reflection is performed but we do not expand the simplex.

---

**Case (iii),** $f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$: We think that the reflection is too far from $\mathbf{x}^{(n)}$, so we try to contract the simplex. Let

$$\mathbf{x}_z := \begin{cases} \mathbf{x}_c - \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{if } f(\mathbf{x}^{(n)}) < f(\mathbf{x}_r), \\ \mathbf{x}_c + \beta(\mathbf{x}_r - \mathbf{x}_c), & \text{if } f(\mathbf{x}^{(n)}) \geq f(\mathbf{x}_r), \end{cases}$$

where $0 < \beta < 1$ is another parameter. If $f(\mathbf{x}_z) < \min\{f(\mathbf{x}^{(n)}), f(\mathbf{x}_r)\}$, then $\mathbf{x}^{(n)}$ is replaced with $\mathbf{x}_z$. Otherwise we shrink the simplex to its half size from its best point:

$$\mathbf{x}^{(i)} \leftarrow \mathbf{x}^{(0)} + \frac{1}{2}(\mathbf{x}^{(i)} - \mathbf{x}^{(0)}), \quad i = 1, \ldots, n.$$

Repeat Steps 1 and 2.

---

> **Example.** We apply the Nelder–Mead method with parameters $\alpha = 1.4$ and $\beta = 0.7$ for the function
>
> $$f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$$
>
> considered earlier. We start from the same initial simplex $(-2, 4)$, $(-1, 4)$ and $(-1.5, 5)$. The first 17 terms of the resulting sequence of vertices can be seen in the table below. The center of the 17th triangle is $(1.0071, 0.5929)$, and the corresponding function value is 0.0295. We can observe that for this example the Nelder–Mead method converges faster to the minimum point than the simplex method.

---

**Example cont. — Animation of the Nelder–Mead method**

The following frames illustrate the steps of the Nelder–Mead iteration on the contour lines of $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$:

- *starting simplex*
- *find the worst vertex*
- *test reflected vertex*
- *case (ii): test expansion*
- *case (ii): expansion is accepted* / *case (ii): no expansion*
- *case (i): accept reflection*
- *case (iii): test contraction*
- *case (iii): contraction is accepted*

![Nelder–Mead method animation frames](fig-nm-animation.png)

---

**Example cont.**

*Nelder–Mead method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, $\alpha = 1.4$, $\beta = 0.7$*

| $k$ | $\mathbf{x}^{(k,1)}$ | $\mathbf{x}^{(k,2)}$ | $\mathbf{x}^{(k,3)}$ | $f(\mathbf{x}^{(k,1)})$ | $f(\mathbf{x}^{(k,2)})$ | $f(\mathbf{x}^{(k,3)})$ |
|----|------|------|------|--------|--------|--------|
| 0 | (−1.000, 4.000) | (−2.000, 4.000) | (−1.500, 5.000) | 57.000 | 34.000 | 72.563 |
| 1 | (−2.000, 4.000) | (−1.000, 4.000) | (−1.500, 2.600) | 34.000 | 57.000 | 20.560 |
| 2 | (−1.500, 2.600) | (−2.000, 4.000) | (−2.500, 2.600) | 21.203 | 34.000 | 25.603 |
| 3 | (−1.500, 2.600) | (−2.500, 2.600) | (−2.000, 1.200) | 21.203 | 25.603 | 7.602 |
| 4 | (−2.000, 1.200) | (−1.500, 2.600) | (−0.700, 0.920) | 20.560 | 21.203 | 7.602 |
| 5 | (−0.700, 0.920) | (−2.000, 1.200) | (−1.200, −0.480) | 7.602 | 20.560 | 15.440 |
| 6 | (−0.700, 0.920) | (−1.200, −0.480) | ( 0.520, −1.152) | 7.602 | 15.440 | 7.088 |
| 7 | ( 0.520, −1.152) | (−0.700, 0.920) | ( 1.464, 0.394) | 7.088 | 7.602 | 2.270 |
| 8 | ( 1.464, 0.394) | ( 0.520, −1.152) | (−0.192, 0.530) | 2.270 | 7.088 | 3.891 |
| 9 | ( 1.464, 0.394) | (−0.192, 0.530) | ( 0.555, −0.668) | 2.270 | 3.891 | 3.097 |
| 10 | ( 1.464, 0.394) | ( 0.555, −0.668) | ( 0.168, 0.330) | 2.270 | 3.097 | 1.783 |
| 11 | ( 0.168, 0.330) | ( 1.464, 0.394) | ( 0.999, 1.083) | 1.783 | 2.270 | 1.362 |
| 12 | ( 0.999, 1.083) | ( 0.168, 0.330) | ( 1.200, 0.487) | 1.362 | 1.783 | 0.296 |
| 13 | ( 1.200, 0.487) | ( 0.999, 1.083) | ( 0.448, 0.467) | 0.296 | 1.362 | 1.147 |
| 14 | ( 1.200, 0.487) | ( 0.448, 0.467) | ( 0.648, −0.129) | 0.296 | 1.147 | 0.707 |
| 15 | ( 1.200, 0.487) | ( 0.648, −0.129) | ( 0.591, 0.380) | 0.296 | 0.707 | 0.505 |
| 16 | ( 1.200, 0.487) | ( 0.591, 0.380) | ( 1.068, 0.828) | 0.296 | 0.505 | 0.274 |
| 17 | ( 1.068, 0.828) | ( 1.200, 0.487) | ( 0.754, 0.464) | 0.274 | 0.296 | 0.251 |

center of the last triangle: $(1.0071, 0.5929)$, function value: $0.0295$

---

# 8.4. Gradient Method

![the surface of $f(x, y) = 4 - 3x^2 - y^2$ with a tangent plane](fig-gradient-surface.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

---

![the gradient vector is perpendicular to the level curve at $\mathbf{p} = (0.5, 0.5)$](fig-gradient-perp.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

> **Theorem.** *Let $f\colon \mathbb{R}^2 \to \mathbb{R}$ be continuously differentiable. Then the gradient vector $f'(\mathbf{p})$ is always perpendicular to the level curve of $f$ through $\mathbf{p}$, i.e., to the tangent line of the level curve at $\mathbf{p}$.*

---

> **Proof.** Let
>
> $$\gamma(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$$
>
> be a parametrization of the level curve of $f$ through the point $\gamma(t_0) = \mathbf{p}$, and let $f(\mathbf{p}) = c$. Then
>
> $$f(x(t), y(t)) = f(\gamma(t)) = c, \qquad \text{for all } t,$$
>
> hence
>
> $$0 = \frac{d}{dt} f(\gamma(t)) = f'(\gamma(t))^T \gamma'(t), \qquad t \in \mathbb{R}.$$
>
> Therefore, for $t = t_0$ we get
>
> $$f'(\mathbf{p})^T \gamma'(t_0) = 0,$$
>
> hence $f'(\mathbf{p})$ is perpendicular to the direction vector of the tangent line at $\mathbf{p}$, i.e., to the vector $\gamma'(t_0) = (x'(t_0), y'(t_0))^T$. $\quad\square$

---

![intersection of the tangent plane with the surface; the direction $\mathbf{u} = -f'(\mathbf{p})$](fig-gradient-cut.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

---

Let $f\colon \mathbb{R}^n \to \mathbb{R}$. It is known from calculus that at a point $\mathbf{p}$ the most rapid decrease of the function $f$ is in the direction of the vector $-f'(\mathbf{p})$:

> **Theorem.** *Let $f \in C^1$. Then the directional derivatives*
>
> $$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$
>
> *has a minimum for the direction $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$.*

A direction $\mathbf{u}$ is called a **descent** of a function $f$ at the point $\mathbf{p}$ if there exists $\delta > 0$ such that $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ for all $0 < t < \delta$, i.e., the function decreases starting from the point $\mathbf{p}$ in the direction of $\mathbf{u}$. The **steepest descent** of $f$ at the point $\mathbf{p}$ is in the direction $-f'(\mathbf{p})$.

---

**gradient method** or **steepest descent method:**

Given a starting point $\mathbf{p}^{(0)}$. Define the sequence

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{5}$$

where the scaling parameter $\alpha_k$ determines the step size.

The simplest variant of the gradient method is to use it with **constant stepsize**: Let $h > 0$ be fixed, and use the factor

$$\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}.$$

---

An other variant is that we select $\alpha_k$ so that

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

be satisfied, where

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{6}$$

Then in each step we have to minimize a function of single variable along with the direction of the negative gradient. This version of the gradient method is called **optimal gradient method**.

---

Using the optimal gradient method we step forward from a point in the direction of the negative gradient into a point where the line is tangent to the contour line (level curve) of the function $f$. This implies that the consecutive directions are perpendicular to each other.

It can be shown that the **optimal gradient method is locally linearly convergent**. But the asymptotic error constant can be close to 1, so the convergence can be slow.

---

> **Example.** We consider again the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. First we use the gradient method with the scaling factor $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$, i.e., with the constant step size 0.3. The first 21 terms of the sequence can be seen in the next figure starting from the initial point $(-1, 4)$ (red circles) and from the initial point $(0.5, 3.5)$ (purple circles). The sequences approximate the minimum point $(1, 0.5)$ (blue dot) slowly, and oscillates around it.
>
> Next we apply the optimal gradient method from the initial points $(-1, 4)$ (red circles) and $(0.5, 3.5)$ (purple circles), respectively. We plotted the first 3 and 12 terms of the corresponding sequences in the figure below.

---

**Example cont.**

![Gradient method with constant step size](fig-gradient-const.png)

*Gradient method with constant step size.*

![Optimal gradient method](fig-gradient-opt.png)

*Optimal gradient method.*

---

If we cannot or do not want to compute the gradient vector exactly, then we can use the following variant:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{7}$$

where the $i$th component of the vector $\mathbf{v}^{(k)}$ is defined by

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n$$

where $\mathbf{e}^{(i)}$ is the $i$th unit vector.

---

# 8.5. Solving Linear Systems with Gradient Method

Let $\mathbf{A} \in \mathbb{R}^{n \times n}$ be a **symmetric** matrix, i.e., $\mathbf{A}^T = \mathbf{A}$, $\mathbf{b} \in \mathbb{R}^n$, $c \in \mathbb{R}$, and consider the quadratic function

$$g\colon \mathbb{R}^n \to \mathbb{R}, \qquad g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c. \tag{8}$$

Using the notations $\mathbf{A} = (a_{ij})$, $\mathbf{x} = (x_1, \ldots, x_n)^T$, $\mathbf{b} = (b_1, \ldots, b_n)^T$ we have the following form of $g$:

$$g(x_1, \ldots, x_n) = \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j - \sum_{i=1}^{n} b_i x_i + c.$$

Compute the partial derivative $\frac{\partial g}{\partial x_i}$. Since $a_{ij} = a_{ji}$, we get

$$\frac{\partial g}{\partial x_i}(x_1, \ldots, x_n) = \frac{1}{2} \sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \sum_{j=1}^{n} a_{ij} x_j - b_i.$$

---

Therefore

$$g'(\mathbf{x}) = \left( \frac{\partial g}{\partial x_1}(\mathbf{x}), \ldots, \frac{\partial g}{\partial x_n}(\mathbf{x}) \right)^T = \mathbf{A}\mathbf{x} - \mathbf{b}. \tag{9}$$

Hence if $\mathbf{A}$ is invertible, then $g$ has exactly one critical point, which is the solution of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$. Let $\bar{\mathbf{x}}$ be the critical point of $g$, i.e., $\mathbf{A}\bar{\mathbf{x}} = \mathbf{b}$, and $\mathbf{x} = \bar{\mathbf{x}} + \Delta\mathbf{x}$.

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}(\bar{\mathbf{x}} + \Delta\mathbf{x})^T \mathbf{A}(\bar{\mathbf{x}} + \Delta\mathbf{x}) - \mathbf{b}^T(\bar{\mathbf{x}} + \Delta\mathbf{x}) + c \\
&= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} \\
&\quad - \mathbf{b}^T \bar{\mathbf{x}} - \mathbf{b}^T \Delta\mathbf{x} + c.
\end{aligned}$$

Hence using the relations $\mathbf{A} = \mathbf{A}^T$, $\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}}$, $\mathbf{b}^T \Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{b}$ and $\mathbf{A}\bar{\mathbf{x}} = \mathbf{b}$, we get

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} - \mathbf{b}^T \bar{\mathbf{x}} + (\Delta\mathbf{x})^T(\mathbf{A}\bar{\mathbf{x}} - \mathbf{b}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} + c \\
&= g(\bar{\mathbf{x}}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}.
\end{aligned}$$

---

Therefore

$$g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) = \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}. \tag{10}$$

If $\mathbf{A}$ is positive definite, then $g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) > 0$ for all vectors $\Delta\mathbf{x} \neq \mathbf{0}$, hence $\bar{\mathbf{x}}$ minimizes the function $g$. Similarly, if $\mathbf{A}$ is negative definite, then it follows from equation (10) that $g$ has a maximum at $\bar{\mathbf{x}}$. All positive or negative definite matrices are invertible.

> **Theorem.** *Let $\mathbf{A}$ by symmetric. Then the gradient vector of the quadratic function $g(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c$ is $g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}$. If $\mathbf{A}$ is positive (negative) definite, then $g$ has a global minimum (maximum), which is taken at the point $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$.*

> **Corollary.** *If a quadratic function has a local minimum (maximum) at a point, then there the function has also a global minimum (maximum).*

---

If $\mathbf{A}$ is a symmetric positive definite matrix, then a previous theorem yields that the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

can be solved so that we define the quadratic function $g$ by (8), and we minimize it by the optimal gradient method. Hence we define the iteration

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)},$$

where

$$\mathbf{v}^{(k)} = g'(\mathbf{p}^{(k)}) = \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}.$$

$\alpha_k$ is selected so that it be the minimum point of the scalar function $\phi_k(t) := g(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)})$. The function $\phi_k$ is a quadratic polynomial, since

$$\begin{aligned}
\phi_k(t) &= \frac{1}{2}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big)^T \mathbf{A}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) - \mathbf{b}^T\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) + c \\
&= t^2 \frac{1}{2}\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)} - t\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big) + \frac{1}{2}\big(\mathbf{p}^{(k)}\big)^T \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}^T \mathbf{p}^{(k)} + c.
\end{aligned}$$

---

Therefore its minimum point $\alpha_k$ can be given explicitly as

$$\alpha_k = \frac{\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big)}{\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)}}.$$

Introducing the residual vector

$$\mathbf{r}^{(k)} := \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} = -\mathbf{v}^{(k)},$$

the method can be summarized in the following way:

$$\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{11}$$

$$\alpha_k = \frac{\big(\mathbf{r}^{(k)}\big)^T \mathbf{r}^{(k)}}{\big(\mathbf{r}^{(k)}\big)^T \mathbf{A}\mathbf{r}^{(k)}} \tag{12}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}. \tag{13}$$

---

> **Example.** Consider the linear system
>
> $$\begin{array}{rcrcrcl}
> 4x_1 &+& 2x_2 &-& x_3 &=& 0 \\
> 2x_1 &+& 5x_2 & & &=& 8 \\
> -x_1 & & &+& 3x_3 &=& 1.
> \end{array}$$
>
> We applied the optimal gradient method (11)-(13) with the initial point $\mathbf{p}^{(0)} = (3, 3, 3)^T$. Note that the method is applicable since the coefficient matrix of the linear system is symmetric and positive definite. The first 13 terms of the sequence $\mathbf{p}^{(k)}$ are listed in the next table together with the error of the approximation. Note, the true solution is $(-1, 2, 0)$.

---

**Example cont.**

*Solving the linear system with gradient method*

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

---

# 8.6. Newton's Method for Minimization

Consider a function $f\colon \mathbb{R}^n \to \mathbb{R}$, and fix a vector $\mathbf{p}^{(0)}$. If $f \in C^3$, then in a neighbourhood of $\mathbf{p}^{(0)}$ the function $f$ can be approximated by its second-order Taylor polynomial

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}), \tag{14}$$

where $f'(\mathbf{p}^{(0)})$ is the gradient vector of $f$, and $f''(\mathbf{p}^{(0)})$ is the Hessian matrix of $f$ at $\mathbf{p}^{(0)}$. Suppose that $f''(\mathbf{p}^{(0)})$ is positive definite. Then $g$ has a global minimum at the point

$$\mathbf{p}^{(1)} = \mathbf{p}^{(0)} - \big(f''(\mathbf{p}^{(0)})\big)^{-1} f'(\mathbf{p}^{(0)}).$$

Then we consider $\mathbf{p}^{(1)}$ as an approximation of the minimum point of $f$, and we repeat the previous process from the point $\mathbf{p}^{(1)}$. We can define the iteration:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}), \tag{15}$$

which is called **Newton's method for minimization**.

---

It is easy to see that it is equivalent to the Newton's method for solving the nonlinear system $f'(\mathbf{x}) = \mathbf{0}$. We get therefore the following result immediately.

> **Theorem.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^3$, $f'(\mathbf{p}) = \mathbf{0}$ and $f''(\mathbf{p})$ be positive definite. Then $f$ has a local minimum at $\mathbf{p}$, and the Newton's iteration (15) locally quadratically converges to $\mathbf{p}$.*

---

> **Example.** We apply Newton's method for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. The first 5 terms of the sequence starting from $(-1, 4)^T$ can be seen in the next table. We observe quick convergence to the minimum point $(1, 0.5)^T$. The numerical results indicate that the order of convergence is quadratic. We note that the Newton's iteration starting from $(1, 3)^T$ gives back the exact minimum point in one step.

---

**Example cont.**

*Newton's method, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2^2}$ |
|----|------|------|------|------|
| 0 | (−1.00000000, 4.00000000) | 57.00000000 | 4.03112887 | |
| 1 | (−1.33333333, 0.83333333) | 10.90123457 | 2.35702260 | 0.14504754 |
| 2 | ( 0.76666667, −1.91111111) | 19.55698889 | 2.42237512 | 0.43602752 |
| 3 | ( 0.80979667, 0.32695523) | 0.07235807 | 0.25714159 | 0.04382173 |
| 4 | ( 0.99964684, 0.48162536) | 0.00129935 | 0.01837803 | 0.27794212 |
| 5 | ( 0.99998771, 0.49998766) | 0.00000000 | 0.00001742 | 0.05156519 |

---

# 8.7. Quasi-Newton Method for Minimization

Similarly to the previous section, we approximate the function $f\colon \mathbb{R}^n \to \mathbb{R}$ in a neighbourhood of $\mathbf{p}^{(k)}$ by the quadratic function

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}). \tag{16}$$

If $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ and $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, then (16) approximates the second-order Taylor polynomial of $f$ around $\mathbf{p}^{(k)}$, so it can be considered as an approximation of $f$ in a small neighbourhood of $\mathbf{p}^{(k)}$. We hope that the minimum point of $g$ will approximate that of $f$. If $\mathbf{A}^{(k)}$ is positive definite, then the minimum point of $g$ is

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{17}$$

Such iterations are called **quasi-Newton methods for minimization**.

---

We can define $\mathbf{A}^{(k)}$ and $\mathbf{v}^{(k)}$ as a numerical approximation of the Hessian matrix $f''(\mathbf{p}^{(k)})$ and the gradient vector $f'(\mathbf{p}^{(k)})$: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ and $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, where

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big)$$

and

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ is the $i$th unit vector, $h > 0$ is fixed small step size). Here we used the first-order forward difference formula to approximate the first partial derivatives of $f$, and formulas to approximate the second partial derivatives. This way we do not need to now the exact values of the gradient vector and the Hessian matrix, but in each step of the iteration we need to perform $n^2$ number of function evaluations.

---

Next we consider the case when in (17) we have the exact gradient value $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, and hence we examine quasi-Newton methods of the form

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}). \tag{18}$$

Here we assume that we can evaluate the gradient vector of the function, so the question is only how to approximate the Hessian matrix. One possibility is to use Broyden's method to approximate solutions of the system $f'(\mathbf{x}) = \mathbf{0}$:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{19}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{20}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{21}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{22}$$

---

> **Example.** We apply Broyden's method defined by (19)–(22) for minimizing the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We start the sequence from the initial point $(2, 2)^T$, and the matrix $\mathbf{A}^{(0)}$ is defined as a second-order difference approximation of the Hessian matrix $f''(2, 2)$ using step size $h = 0.05$. The first 10 elements of the sequence can be seen in the next table.

---

**Example cont.**

*Broyden's method for minimization, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

---

The problem with the iteration (22) is that since $\mathbf{A}^{(k)}$ is an approximation of the Hessian $f''(\mathbf{p})$, it is natural to require that $\mathbf{A}^{(k)}$ be positive definite for all $k$. It is also needed to argue that the quadratic function (16) has a minimum for all $k$. The numerical experience also gives that those quasi-Newton methods of the form (18) are the most efficient where $\mathbf{A}^{(k)}$ is a positive definite approximation of the Hessian. But the matrix sequence $\mathbf{A}^{(k)}$ generated by the Broyden's method is not even symmetric.

---

Our first goal is to modify the Broyden's method so that it should generate a symmetric matrix for all $k$. Suppose $\mathbf{A}^{(k)}$ is symmetric, and let

$$\mathbf{B}^{(k+1,1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}$$

be the matrix computed by the Broyden iteration. It can be shown that the closest symmetric matrix to $\mathbf{A}$ (in some sense) is the matrix

$$\frac{1}{2}(\mathbf{A} + \mathbf{A}^T).$$

Therefore, it is natural to modify $\mathbf{B}^{(k+1,1)}$ in the following way

$$\begin{aligned}
\mathbf{B}^{(k+1,2)} &= \frac{1}{2}\Big(\mathbf{B}^{(k+1,1)} + \mathbf{B}^{(k+1,1)T}\Big) \\
&= \mathbf{A}^{(k)} + \frac{1}{2}\frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}.
\end{aligned} \tag{23}$$

---

But now the problem is that the matrix $\mathbf{B}^{(k+1,2)}$ does not satisfy the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ which was the motivation of the Broyden's method. We correct it by applying relation (22) again: let

$$\mathbf{B}^{(k+1,3)} = \mathbf{B}^{(k+1,2)} + \frac{(\mathbf{y}^{(k)} - \mathbf{B}^{(k+1,2)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{24}$$

---

This is again a non-symmetric matrix, so we repeat the above procedure again: define the matrices $\mathbf{B}^{(k+1,2i)}$ and $\mathbf{B}^{(k+1,2i+1)}$ from the previous term of the sequence using formulas (23) and (24), respectively, for $i = 2, 3, \ldots$. It can be shown that the matrix sequence $\mathbf{B}^{(k+1,i)}$ converges to the symmetric matrix

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^4} \mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T.
\end{aligned} \tag{25}$$

This is a correction iteration which preserves the symmetric property of the matrix, and also it satisfies the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$. This iteration is called **Powell-symmetric-Broyden update**, or shortly, **PSB update**.

---

The following result can be shown:

> **Theorem.** *Let $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (19)–(21), (25) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$ if $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

> **Example.** Here we apply the quasi-Newton method (18) with the PSB update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We started the computation from the same initial value that was used in the previous example. The corresponding numerical values can be seen in the next table. The approximation here is better than that of for the Broyden's method.

---

**Example cont.**

*Quasi-Newton method (18) with the PSB update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

---

The PSB update does not satisfy the goal formulated earlier that $\mathbf{A}^{(k)}$ be positive definite for all $k$ if $\mathbf{A}^{(0)}$ is positive definite. If a matrix $\mathbf{A}$ is positive definite, then it has a Cholesky factorization

$$\mathbf{A} = \mathbf{L}\mathbf{L}^T,$$

where $\mathbf{L}$ is non-singular. Oppositely, if a matrix $\mathbf{A}$ has the form

$$\mathbf{A} = \mathbf{M}\mathbf{M}^T$$

where $\mathbf{M}$ is non-singular, then $\mathbf{A}$ is positive definite, since

$$\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = (\mathbf{M}^T\mathbf{x})^T \mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0,$$

and here equality holds if and only if $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, and hence $\mathbf{x} = \mathbf{0}$.

---

Let

$$\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T,$$

where $\mathbf{M}^{(k)}$ is invertible (but not necessary lower triangular). We look for the next Hessian approximation $\mathbf{A}^{(k+1)}$ in the form

$$\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T,$$

where we require that $\mathbf{A}^{(k+1)}$ satisfies the secant equation

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}.$$

Then it implies $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, hence if $\mathbf{A}^{(k+1)}$ is positive definite, then the inequality

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{26}$$

holds. We show that the secant equation has a positive definite solution assuming (26) holds.

---

We introduce the notation $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$. Then the secant equation has the form

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{27}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{28}$$

We would like to compute the matrix $\mathbf{M}^{(k+1)}$ by updating the matrix $\mathbf{M}^{(k)}$. Therefore, using the derivation of the Broyden's method and using (28), it is natural to look for the matrix $\mathbf{M}^{(k+1)}$ in the form

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}. \tag{29}$$

Then $\mathbf{M}^{(k+1)}$ satisfies equation (28), and its difference from the matrix $\mathbf{M}^{(k)}$ is the smallest in the sense that

$$\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z} \qquad \text{for all } \mathbf{z} \perp \mathbf{v}^{(k)}.$$

Substituting $\mathbf{M}^{(k+1)}$ back to equation (27) we get

---

$$\begin{aligned}
\mathbf{v}^{(k)} &= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\big((\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T\big)^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\mathbf{v}^{(k)}(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{v}^{(k)}.
\end{aligned}$$

It yields $(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \alpha \mathbf{v}^{(k)}$, where

$$\begin{aligned}
\alpha &= 1 - \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} + \frac{(\mathbf{v}^{(k)})^T (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \alpha^2 \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}} + \alpha,
\end{aligned}$$

and so

---

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{30}$$

We have that the numerator is positive since $\mathbf{A}^{(k)}$ is positive definite, therefore $\alpha$ can be obtained from equation (30), and

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Substituting it back to equation (29) we get

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

---

Little computation gives that

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{31}$$

We have to show that the iteration generates a positive definite matrix. Since $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, it is enough to show that $\mathbf{M}^{(k+1)}$ is invertible. By our assumption, the matrix $\mathbf{M}^{(k)}$ is positive definite, and hence it is invertible. If we assume that (26) holds, then the invertibility of $\mathbf{M}^{(k+1)}$ follows easily from (29).

---

The formula (31) was introduced by Broyden, Flecher, Goldfarb and Shanno in 1970, therefore it is called **BFGS update**. This is the best known iteration for the approximation of the Hessian. The initial value of the iteration can be the matrix $f''(\mathbf{p}^{(0)})$ or its numerical approximation by the second-order difference formula. If $\mathbf{p}^{(0)}$ is close enough to $\mathbf{p}$ and $f''(\mathbf{p})$ is positive definite, then $f''(\mathbf{p}^{(0)})$ and so $\mathbf{A}^{(0)}$ is also positive definite.

---

Finally, consider condition (26). Applying Lagrange's Mean Value Theorem, relations (20) and (21), we get

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &= \big(f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)})\big)^T (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) \\
&= \sum_{i=1}^{n} \left( \frac{\partial f_i(\mathbf{p}^{(k+1)})}{\partial x_i} - \frac{\partial f_i(\mathbf{p}^{(k)})}{\partial x_i} \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\xi^{(k,i)})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}).
\end{aligned}$$

If the iterates $\mathbf{p}^{(k)}$ are close enough to $\mathbf{p}$ during the iteration, then the vectors $\xi^{(k,i)}$ are also close to $\mathbf{p}$, and hence the continuity of $f''$ yields

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &\approx \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\mathbf{p})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)})^T f''(\mathbf{p})(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}),
\end{aligned}$$

which is positive, since $f''(\mathbf{p})$ is positive definite.

---

Therefore, this condition is automatically satisfied for large $k$ if the sequence converges to $\mathbf{p}$. Clearly, if (26) does not hold, then iteration (31) can be defined, but in this case $\mathbf{A}^{(k+1)}$ is only positive semidefinite, not positive definite.

The following result can be proved.

> **Theorem.** *Let $f \in C^3$, $f'(\mathbf{p}) = 0$, and $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (19)–(21), (31) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$, assuming $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

---

> **Example.** We applied the quasi-Newton method (18) with the BFGS update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We used the same initial condition as in earlier examples. The numerical results are listed in the next table. We have got a very precise approximation in 8 steps.

*Quasi-Newton method (18) with the BFGS update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.23976784, 0.70438005) | 1.31429e-01 | 0.31505527 | 1.06461181 |
| 3 | ( 1.02721672, 0.49403232) | 5.98519e-03 | 0.02786330 | 0.08843939 |
| 4 | ( 1.00995636, 0.51197836) | 2.13820e-04 | 0.01557595 | 0.55901316 |
| 5 | ( 0.99954439, 0.49921815) | 8.41172e-07 | 0.00090492 | 0.05809714 |
| 6 | ( 1.00000534, 0.50000495) | 5.76547e-11 | 0.00000728 | 0.00804964 |
| 7 | ( 1.00000005, 0.50000002) | 9.15800e-15 | 0.00000005 | 0.00708494 |
| 8 | ( 1.00000000, 0.50000000) | 8.60000e-19 | 0.00000000 | 0.01827989 |

---

It can be proved by mathematical induction that the inverses $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ of the matrices $\mathbf{A}^{(k)}$ generated by the BFGS update satisfy the recursion

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}.
\end{aligned} \tag{32}$$

Using this formula, (19) can be replaced by

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}), \tag{33}$$

so during the iteration we do not need to compute matrix inverses or solving linear systems.

---

Similarly to the derivation of the BFGS update, we can obtain the definition of the **DFP update**. Again, we are looking for the approximation of the Hessian in the form $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, but instead of the iterates (27)–(28) we use the equivalent iteration

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}.
\end{aligned}$$

Its solution is considered in the form

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}.$$

Then we get

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

assuming (26) holds. From this we get

---

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{34}$$

This formula is called the **DFP update**, since it was established by Davidon (1959) and Flecher, Powell (1963).

---

It can be checked that the inverse of the matrix $\mathbf{A}^{(k)}$ generated by the DFP update can be computed by the recursion:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{35}$$

---

*Ferenc Hartung — Numerical Analysis: 8 Minimization of Functions — University of Pannonia*
