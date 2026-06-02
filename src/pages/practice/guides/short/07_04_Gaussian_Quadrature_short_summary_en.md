**7.4. Gaussian quadrature formulas** 



## 1. Motivation and the principle of free base points

* **The problem with Newton–Cotes formulas:** In the previously discussed Newton–Cotes methods (e.g., Trapezoidal or Simpson's rule), the base points $x_i$ are fixed in advance and are placed at equal distances (equidistantly). Because of this, an $n$-point scheme can integrate completely exactly polynomials of degree at most $n$ or $n+1$.
* **The Gaussian basic idea:** Why should we fix the base points? If we **also treat the base points $x_i$ as free parameters (unknowns)** alongside the weights $c_i$ of the quadrature formula, then we will have twice as many degrees of freedom. Thereby, with an $n$-stage (point) formula, we can exactly integrate polynomials of a much higher degree.



## 2. Theoretical background and maximal algebraic accuracy

Consider the following general quadrature formula on the interval $[-1, 1]$:


$$\int_{-1}^{1} f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i)$$

> **Theorem 7.10:** A quadrature formula is exact for an arbitrary polynomial of degree at most $m$ if and only if it is completely exact for the monomials (power functions) $x^0, x^1, x^2, \ldots, x^m$.

Since we have $n$ weights $c_i$ and $n$ base points $x_i$, we can tune a total of $2n$ unknowns. From this derives the most important theoretical limit of the chapter:

* With the help of $n$ cleverly chosen base points, the formula is capable of integrating **every polynomial of degree at most $2n-1$ completely exactly (without error)**.



## 3. Connection with Legendre polynomials (Assigning the base points)

How can we determine these optimal base points without having to solve a complicated nonlinear system of equations? The mathematical theory leads to orthogonal polynomials, specifically the **Legendre polynomials ($P_n(x)$)**.

> **Theorem (Base points and weights):** The base points $x_1, x_2, \ldots, x_n$ of the Gaussian quadrature procedure of maximum ($2n-1$) accuracy for the integral $\int_{-1}^{1} f(x)\,dx$ **are exactly the roots of the $n$-th degree Legendre polynomial $P_n(x)$**. And the corresponding weights $c_i$ are always strictly positive ($c_i > 0$), and can be calculated with the following integral formula:
> 
> $$c_i = \int_{-1}^{1} \prod_{\substack{j=1 \\ j \neq i}}^{n} \frac{x - x_j}{x_i - x_j} \, dx$$
> 
> 

### The first few standard Gauss-Legendre parameters:

* **Case $n=2$ (exact up to third-degree polynomial):**
* Base points: $x_1 = -\frac{1}{\sqrt{3}} \approx -0.57735$, $\quad x_2 = \frac{1}{\sqrt{3}} \approx 0.57735$
* Weights: $c_1 = 1.0$, $\quad c_2 = 1.0$


* **Case $n=3$ (exact up to fifth-degree polynomial):**
* Base points: $x_1 = -\sqrt{0.6} \approx -0.77459$, $\quad x_2 = 0.0$, $\quad x_3 = \sqrt{0.6} \approx 0.77459$
* Weights: $c_1 = \frac{5}{9} \approx 0.55555$, $\quad c_2 = \frac{8}{9} \approx 0.88888$, $\quad c_3 = \frac{5}{9} \approx 0.55555$





## 4. Transformation to an arbitrary $[a, b]$ interval

Since the standard Legendre roots and weights are tabulated strictly for the $[-1, 1]$ interval, to calculate an integral over an arbitrary $[a, b]$ domain, we must perform a linear **variable substitution (transformation)**:

$$x = \frac{b - a}{2}t + \frac{a + b}{2} \implies dx = \frac{b - a}{2}\,dt$$

Substituting the transformation, the integral can be calculated in the following form with the standard grid parameters:


$$\int_a^b f(x)\,dx = \frac{b - a}{2} \int_{-1}^{1} f\left( \frac{b - a}{2}t + \frac{a + b}{2} \right) \, dt \approx \frac{b - a}{2} \sum_{i=1}^{n} c_i f\left( \frac{b - a}{2}t_i + \frac{a + b}{2} \right)$$



## 5. Summary and practical advantages

Gaussian quadrature is the most important integration tool of modern engineering software (e.g., finite element structural analysis programs) due to its following properties:

1. **Extremely high efficiency:** With fewer function evaluations ($n$), it is able to achieve twice as high theoretical accuracy ($2n-1$) as the Newton–Cotes formulas. This drastically reduces computer runtime.
2. **Excellent numerical stability:** Since, following from the orthonormal theory, every weight $c_i$ is guaranteed to be strictly positive ($c_i > 0$) even for an arbitrarily large $n$, rounding errors are not amplified, and the method remains completely stable even asymptotically.
