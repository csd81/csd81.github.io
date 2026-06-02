**7.3. Newton–Cotes formulas** 




## 1. Introduction and the principle of the Lagrange method

According to the mathematical definition of the definite integral, the area under a function can be obtained as the limit of Riemann approximating sums as the step size of the partition approaches zero.

The goal of numerical integration (also known as **quadrature procedures**) is to approximate the integral $\int_a^b f(x)\,dx$ as a weighted sum of function values taken at discrete points:


$$\int_a^b f(x)\,dx \approx \sum_{i=0}^n c_i f(x_i)$$

To derive the Newton–Cotes formulas, we apply the **Lagrange method**: we divide the $[a,b]$ interval into equidistant (equally spaced) base points $x_0, x_1, \dots, x_n$, where the step size is $h = \frac{b-a}{n}$. We replace the function $f(x)$ with the Lagrange interpolation polynomial $L_n(x)$ fitted to these points, and then we integrate this polynomial exactly (analytically):


$$\int_a^b f(x)\,dx \approx \int_a^b L_n(x)\,dx = \sum_{k=0}^n f(x_k) \underbrace{\int_a^b l_k(x)\,dx}_{c_k}$$


The resulting integrals $c_k$ are called the **weights** of the quadrature formula.



## 2. Closed Newton–Cotes formulas

In the case of closed formulas, the two endpoints of the interval ($a$ and $b$) strictly belong to the base points (i.e., $x_0 = a$ and $x_n = b$).

### A) Trapezoidal Rule — $n=1$

If we have only two base points ($x_0=a$ and $x_1=b$), the interpolation polynomial is a straight linear connection (first-degree polynomial). Geometrically, we approximate the area with a trapezoid.

* **The formula:** 
$$\int_{x_0}^{x_1} f(x)\,dx = \frac{h}{2}\big(f(x_0) + f(x_1)\big) - \frac{h^3}{12}f''(\xi)$$


* **Formula error:** $-\frac{h^3}{12}f''(\xi) \sim \mathcal{O}(h^3)$. The formula is exact for any polynomial whose degree is at most 1 (linear functions).

### B) Simpson's Rule — $n=2$

We choose three equidistant base points: $x_0=a$, $x_1 = \frac{a+b}{2}$ (midpoint) and $x_2=b$. The interpolation polynomial is a second-degree parabola.

* **The formula:**

$$\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\big(f(x_0) + 4f(x_1) + f(x_2)\big) - \frac{h^5}{90}f^{(4)}(\xi)$$


* **Formula error:** $-\frac{h^5}{90}f^{(4)}(\xi) \sim \mathcal{O}(h^5)$.
* **Interesting fact:** Although the derivation was done for a second-degree polynomial, the error depends on the fourth derivative ($f^{(4)}$), which means that Simpson's method **integrates completely exactly any third-degree polynomial as well**.

### Higher-order closed formulas (without derivation)

* **Simpson's $\frac{3}{8}$ Rule ($n=3$):** 
$$\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)$$


* **Milne's Rule ($n=4$):**

$$\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)$$





## 3. Open Newton–Cotes formulas

In open procedures, the endpoints of the integration interval ($a$ and $b$) **are not used as base points**, meaning the function values are evaluated only at points taken from the inside of the interval. Let $x_{-1} = a$ and $x_{n+1} = b$.

* **Tangent rule or rectangle rule ($n=0$):** Uses only the midpoint of the interval ($x_0 = \frac{a+b}{2}$).

$$\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi)$$


* **Two-point open formula ($n=1$):**

$$\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi)$$


* **Three-point open formula ($n=2$):**

$$\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi)$$





## 4. Numerical stability in the presence of rounding errors

When the function values $f(x_i)$ are evaluated on a computer, they inevitably contain a small rounding error bounded by $\varepsilon$ ($y_i$). Theorem 7.15 provides a reassuring answer to error propagation:

> **Theorem 7.15:** Suppose that the quadrature formula is exact for the constant function $f(x)=1$ (i.e., the sum of the weights equals the length of the interval: $\sum c_i = b-a$), and **every weight $c_i$ is positive ($c_i > 0$)**. Then the absolute value of the accumulating rounding error remains bounded:
> 
> $$\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a)$$
> 
> 

### Critical theoretical consequence

Since the upper bound of the error is $\varepsilon(b-a)$, the accumulating rounding error is **completely independent of the number of base points and the step size $h$**. Unlike numerical differentiation (where $h \to 0$ caused catastrophic divergence), numerical integration schemes with positive weights are **numerically extremely stable**.

*Warning:* For very high-order ($n \geq 8$) Newton–Cotes formulas, negative weights also appear, which worsens stability. For this reason, in practice, instead of high-degree polynomials, a sequence of lower-degree schemes (Trapezoidal, Simpson) used one after another, the so-called **composite quadrature formulas**, are used.
