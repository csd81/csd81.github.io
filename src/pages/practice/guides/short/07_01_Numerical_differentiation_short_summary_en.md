**7.1. Numerical differentiation** 




## 1. Basic idea and methods of derivation

It is known from mathematical analysis that the derivative of a function at point $x_0$ is the limit of its difference quotient as the step size ($h$) approaches zero:


$$f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$

If $|h|$ is small, we get an approximation formula by dropping the limit. In numerical analysis, however, we need more than this: we must exactly know the **formula error (truncation error)** committed during the approximation. To determine this, the notes present two equivalent mathematical approaches:

1. **Lagrange method:** Based on discrete points taken in the neighborhood of $x_0$, the function $f$ is replaced by a Lagrange interpolation polynomial $L_n(x)$, and then the derivative of this polynomial ($L'_n(x_0)$) is used to approximate $f'(x_0)$.
2. **Taylor method:** The expressions $f(x_0 + h)$ and $f(x_0 - h)$ are expanded into Taylor series around the point $x_0$, and by appropriately adding or subtracting the resulting equations, we isolate the sought derivative term, while the remainder terms directly provide the error.



## 2. First-order approximation formulas (Forward and Backward Differences)

If we use only two base points for the interpolation or series expansion, we obtain first-order schemes.

### A) Forward Difference formula

It relies on the points $x_0$ and $x_0 + h$ ($h>0$):


$$f'(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} - \frac{f''(\xi)}{2}h \tag{7.5}$$

* **Error term:** $-\dfrac{f''(\xi)}{2}h \sim \mathcal{O}(h)$, which means the method is **first-order**. If we halve the step size, the error roughly halves as well.

### B) Backward Difference formula

It uses the points $x_0$ and $x_0 - h$ ($h>0$):


$$f'(x_0) = \frac{f(x_0) - f(x_0 - h)}{h} + \frac{f''(\xi)}{2}h \tag{7.8}$$

* Also a **first-order** ($\mathcal{O}(h)$) approximation.



## 3. Higher-order approximation formulas

We can achieve a more accurate result if we include the information of more base points in the calculation, or apply a symmetrical arrangement.

### C) Central (symmetric) difference formula

If we subtract the Taylor series expansions of $x_0 + h$ and $x_0 - h$ from each other, the error terms with even derivatives cancel out, and the following highly popular formula is obtained for the first derivative:

$$f'(x_0) = \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(\xi)}{6}h^2 \tag{7.11}$$

* **Error term:** $-\dfrac{f'''(\xi)}{6}h^2 \sim \mathcal{O}(h^2)$, meaning the central scheme is **second-order**. Halving the step size here reduces the formula error to a quarter.

### D) Approximation of the second derivative

By adding the Taylor series of the points $x_0 - h, x_0, x_0 + h$, we can also produce a scheme approximating the second derivative of the function:


$$f''(x_0) = \frac{f(x_0 + h) - 2f(x_0) + f(x_0 - h)}{h^2} - \frac{f^{(4)}(\xi)}{12}h^2 \tag{7.14}$$

* This scheme is also **second-order** ($\mathcal{O}(h^2)$).



## 4. The instability trap of rounding errors

Numerical differentiation is one of the most dangerous numerical operations on computers using finite floating-point number representation. The reason for this is **subtractive cancellation (cancellation error)**.

If a rounding error bounded by $\varepsilon$ occurs during the storage of function values, the total error of the first-order forward difference formula shapes up as follows based on the triangle inequality:


$$\text{Total error} \leq \underbrace{\frac{M_2}{2}h}_{\text{Formula error} \to 0} + \underbrace{\frac{2\varepsilon}{h}}_{\text{Rounding error} \to \infty} \qquad (\text{as } h \to 0)$$

* **Asymptotic divergence:** If we choose the step size ($h$) to be too small in pursuit of theoretical accuracy ($h \to 0$), we subtract two extremely close numbers in the numerator ($f(x_0+h) - f(x_0)$), which destroys the significant digits. Since we divide by $h$ in the denominator, the amplified rounding error tends to infinity, and **the calculation becomes completely useless (diverges)**.

The notes prove this with a numerical table on the function $f(x)=e^x$ at $x_0=1$: using 4-digit arithmetic, for $h=0.1$ the error is $0.1417$, for $h=0.01$ it decreases to $0.0817$, but for $h=0.001$, due to the explosion of rounding errors, the error **jumps back to $0.2817$**.



## 5. Approximation of partial derivatives

Based on the formulas presented at the end of the chapter, following the pattern of single-variable schemes, the partial and mixed partial derivatives of multivariable functions can also be written using grid points:

* **First-order partial derivative with respect to $x$:** $\dfrac{\partial f(x_0, y_0)}{\partial x} \approx \dfrac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$
* **Mixed second-order partial derivative:** $\dfrac{\partial^2 f(x_0, y_0)}{\partial x \partial y} \approx \dfrac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$
