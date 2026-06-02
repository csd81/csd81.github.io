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

