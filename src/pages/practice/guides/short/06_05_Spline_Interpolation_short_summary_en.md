**6.5. Spline interpolation**


## 1. The concept and motivation of spline interpolation

* **The problem with high-degree global polynomials:** In the case of the global polynomial interpolations (Lagrange, Newton, Hermite) seen in previous chapters (6.1.–6.4.), as the number of base points increases, the degree of the polynomial inevitably rises. However, high-degree polynomials are prone to the Runge phenomenon, meaning they produce massive, wild oscillations towards the edges of the interval, thus becoming unstable.
* **The spline approach (Piecewise interpolation):** Instead of connecting all the points with a single high-degree polynomial, we divide the interval into subintervals, and **fit a low-degree polynomial separately on each $[x_i, x_{i+1}]$ segment**. The resulting piecewise connected function is called a **spline**.

### Classification of splines by degree:

* **Linear spline ($k=1$):** The points are connected segment by segment with straight lines (first-degree polynomials). Geometrically this is a polyline. Its disadvantage is that it breaks at the connection points (knots), so it is not smooth, not differentiable.
* **Quadratic spline ($k=2$):** Piecewise second-degree parabolas.
* **Cubic spline ($k=3$):** Piecewise third-degree polynomials. This is the most important engineering tool, as it ensures perfect smoothness of the surface.



## 2. Mathematical model of cubic spline interpolation

Given the base points $a = x_0 < x_1 < \ldots < x_n = b$ and the corresponding function values $y_0, y_1, \ldots, y_n$. We are looking for a function $S \colon [a,b] \to \mathbb{R}$ that satisfies the following strict conditions:

1. **Interpolation constraint:** Takes the given value at every knot:

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n$$


2. **Piecewise structure:** The restriction $S_i(x)$ on every $[x_i, x_{i+1}]$ ($i=0,\dots,n-1$) subinterval is a third-degree polynomial:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3$$



Since we have $n$ segments, and 4 coefficients per segment ($a_i, b_i, c_i, d_i$), we need to determine a total of **$4n$ unknown parameters**.
3. **Continuity and Smoothness constraints:** To ensure the curve doesn't break, at the interior points $x_1, \dots, x_{n-1}$ we require the **perfect matching of the values, first derivatives (slopes), and second derivatives (curvatures)** of the segments:
* $S_i(x_{i+1}) = S_{i+1}(x_{i+1})$ (Continuous connection)
* $S_i'(x_{i+1}) = S_{i+1}'(x_{i+1})$ (Smooth contact)
* $S_i''(x_{i+1}) = S_{i+1}''(x_{i+1})$ (Continuous curvature — $S \in C^2[a,b]$)





## 3. Boundary conditions and the Natural Cubic Spline

The above conditions (interpolation and internal smoothness) define a total of $4n - 2$ independent equations. Since we have $4n$ unknown coefficients, **we need 2 more freely selectable equations (boundary conditions)** at the two extreme endpoints of the interval ($a$ and $b$) so that the system can be uniquely solved.

The most common and theoretically most important choice is the **natural boundary condition**, which states that the curve completely straightens out at its two ends, meaning the second derivatives become zero there:


$$S''(a) = 0 \qquad \text{and} \qquad S''(b) = 0$$

The function supplemented with these boundary conditions is called a **natural cubic spline function**.



## 4. The Minimum Curvature Theorem (Theorem 6.21)

The cubic spline is not just one of the possible connecting curves; from a physical and mathematical perspective, this is the **most optimal smooth function**. It got its name from the flexible steel ruler (physical spline) used in engineering design in the past, which took the most natural shape with minimal stress between the points.

> **Theorem 6.21 (Holladay's Theorem):** Let $S$ be the natural cubic spline function interpolating the data $(x_i, y_i)$ ($i=0,\dots,n$). Furthermore, let $g \in C^2[a,b]$ be any other arbitrary function that also exactly interpolates these same data ($g(x_i) = y_i$). Then the following inequality holds:
> 
> $$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (g''(x))^2 \, dx$$
> 
> 

### Physical meaning:

Since in mechanics the integral of the square of the curvature ($\int (f'')^2$) is directly proportional to the **internal elastic deformation energy** accumulated in the bent body, the theorem proves that among all existing smooth connecting curves, the **natural cubic spline has the smallest internal energy (curvature)**. This guarantees that the spline will be free from artificial undulations.



## 5. Error estimation

If the spline function is used to approximate a known, four times continuously differentiable function $f \in C^4[a,b]$ with equidistant dividing points of step size $h$, the maximum committed error is extremely favorable:


$$\max_{x \in [a,b]} |f(x) - S(x)| \leq \frac{5}{384} M_4 h^4$$


where $M_4 := \max_{t \in [a,b]} |f^{(4)}(t)|$.

**Consequence:** The error is proportional to the **fourth power** of the step size ($\mathcal{O}(h^4)$). This means that if we halve the step size ($h \to h/2$), the approximation error drops to a **sixteenth ($1/16$)**, which ensures extremely fast and efficient convergence.



## 6. Summary and practical benefits

Cubic spline interpolation is the cornerstone of modern computer-aided design (CAD/CAM, e.g., automotive and aerospace manufacturing), computer graphics (Bézier and B-spline curves), and signal processing. The secret to its success is that due to its piecewise construction, it is completely immune to the Runge oscillations that plague global polynomials, while through the $C^2$ class internal smoothness constraints, it produces perfectly aesthetic, unbroken surfaces with minimal curvature that model physical reality most precisely.
