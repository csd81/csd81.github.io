**8.3. Simplex Method and Nelder–Mead Method** 


## 1. The Concept and Motivation of the Simplex

The chapter discusses multivariable nonlinear optimization (extremum-seeking) methods that **do not use the function's derivatives** (so-called *derivative-free* methods or those built on pure function evaluation). This is a huge advantage when the function to be minimized is non-differentiable or computing the derivatives would be too complicated.

> **Definition:** An $n$-dimensional **simplex** is the convex hull of $n+1$ linearly independent $n$-dimensional vectors (vertices).

* **1D simplex:** a line segment ($2$ vertices)
* **2D simplex:** a triangle ($3$ vertices)
* **3D simplex:** a tetrahedron ($4$ vertices)



## 2. The Algorithm of the Classical Simplex Method

During the search, the vertices of the simplex ($\mathbf{x}^{(0)}, \ldots, \mathbf{x}^{(n)}$) are indexed (ordered) in each step such that the corresponding function values increase:


$$f(\mathbf{x}^{(0)}) \leq f(\mathbf{x}^{(1)}) \leq \cdots \leq f(\mathbf{x}^{(n)})$$


Thus, **$\mathbf{x}^{(0)}$ is the best** (lowest value) and **$\mathbf{x}^{(n)}$ is the worst** (highest value) vertex.

### Basic Steps of the Iteration:

1. **Calculating the Centroid ($\mathbf{x}_c$):** We calculate the centroid of the best $n$ vertices (i.e., we omit the worst point $\mathbf{x}^{(n)}$ from the averaging):

$$\mathbf{x}_c := \frac{1}{n} \sum_{i=0}^{n-1} \mathbf{x}^{(i)}$$


2. **Reflection:** We project (reflect) the worst point through the centroid to the other side of the geometric shape, creating the reflected point $\mathbf{x}_r$:

$$\mathbf{x}_r = 2\mathbf{x}_c - \mathbf{x}^{(n)}$$


3. **Decision:** We evaluate the value $f(\mathbf{x}_r)$. If it is better than the current worst ($f(\mathbf{x}_r) < f(\mathbf{x}^{(n)})$), we permanently replace the old worst point with $\mathbf{x}_r$ and continue the iteration with the new simplex.



## 3. The Nelder–Mead Method (The Adaptive Simplex)

The disadvantage of the classical simplex is that due to rigid reflection, the size of the geometric shape never changes, making it easy to oscillate or get stuck. The **Nelder–Mead method** improves upon this by allowing the simplex to dynamically **expand or contract** depending on the surface's topography.

We introduce two fixed parameters: the expansion $\alpha > 1$ (usually $\alpha=2$) and contraction $0 < \beta < 1$ (usually $\beta=0.5$) factors. The structure of the modified algorithm:

* **Reflection:** We compute the standard point $\mathbf{x}_r = \mathbf{x}_c + (\mathbf{x}_c - \mathbf{x}^{(n)})$.
* **A) Expansion:** If the reflected point is exceptionally good, i.e., smaller than even the current global best ($f(\mathbf{x}_r) < f(\mathbf{x}^{(0)})$), it's worth stepping "boldly" further in this direction:

$$\mathbf{x}_e = \mathbf{x}_c + \alpha(\mathbf{x}_r - \mathbf{x}_c)$$



If $f(\mathbf{x}_e) < f(\mathbf{x}_r)$, then $\mathbf{x}_e$ becomes the new vertex, otherwise we keep $\mathbf{x}_r$.
* **B) Contraction:** If the reflected point didn't bring improvement ($f(\mathbf{x}_r) \geq f(\mathbf{x}^{(n-1)})$), we become more cautious and pull the simplex closer to the inner centroid:

$$\mathbf{x}_k = \mathbf{x}_c + \beta(\mathbf{x}^* - \mathbf{x}_c)$$



*(Where $\mathbf{x}^*$ is the better value between $\mathbf{x}_r$ and $\mathbf{x}^{(n)}$).*
* **C) Shrink:** If contraction doesn't help either, we halve all vertices of the simplex toward the most successful point $\mathbf{x}^{(0)}$.



## 4. Numerical Example (Example 8.4)

The notes demonstrate the procedure on the nonlinear two-variable function $f(x, y) = x^2 - 4x + y^2 - y - xy$.

* **Initial triangle (2D simplex):** $\mathbf{x}^{(0)} = (0,3)^T$, $\mathbf{x}^{(1)} = (-1,4)^T$, $\mathbf{x}^{(2)} = (1,4)^T$.
* Over the iterations, the triangle "explores" the coordinate system step by step, while in the Nelder–Mead method, its shape flexibly distorts and contracts until it completely converges on the optimal minimum of the function.



## 5. Summary and Practical Significance

The Nelder–Mead simplex method is one of the most popular and robust direct search algorithms (for example, MATLAB's built-in `fminsearch` function is based on it). Although its theoretical convergence speed lags behind gradient-based methods, its practical stability and the property that **it works perfectly for noisy, non-differentiable functions or those without an analytical formula (calculated purely from measured data)** make it indispensable in engineering optimization.
