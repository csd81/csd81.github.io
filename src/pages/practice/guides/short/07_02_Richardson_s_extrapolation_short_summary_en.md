**7.2. Richardson extrapolation** 



## 1. Motivation and the basic idea of extrapolation

* **The problem:** The accuracy of many numerical approximation methods (for example, numerical differentiation or integration) can be increased by reducing the step size $h$, but choosing a too small $h$ leads to an explosion of rounding errors.
* **The solution:** Richardson extrapolation is a procedure that **can increase the convergence order (accuracy) of a numerical scheme without having to reduce the step size to the unstable range**. For this, the method is evaluated with two different step sizes (usually $h$ and $h/2$), and then by a clever linear combination of the obtained approximations, the most significant (highest magnitude) term of the error is eliminated.



## 2. Mathematical derivation (Eliminating the error)

Suppose we approximate an exact, unknown quantity $M$ with a formula $K(h)$, whose formula error can be expanded into a power series of **even powers** of $h$ (such as in the case of the central difference formula):


$$M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + b(h) \tag{7.20}$$


Where the leading term of the error is second-order ($a_2 h^2$). Let's write down the same approximation with the halved parameter $h/2$:


$$M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + b(h/2)$$

In order to eliminate the term with the dominant coefficient $a_2$, let's multiply the second equation by $4$, and then subtract the first equation from it:


$$4M - M = 4K(h/2) - K(h) + a_2 h^2 - a_2 h^2 + \left(\frac{4}{16} - 1\right)a_4 h^4 + \cdots$$

$$3M = 4K(h/2) - K(h) - \frac{3}{4}a_4 h^4 - \frac{15}{16}a_6 h^6 - \cdots$$

If we divide the equation by $3$, we get the **new, combined approximation formula**:


$$M = \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 - \cdots$$

> **The essence of the method:** The new formula $K^{(1)}(h) := \frac{4K(h/2) - K(h)}{3}$ completely cancelled out the second-order term of the error, so the new approximation follows the exact value with **fourth-order** ($\mathcal{O}(h^4)$) accuracy.



## 3. The general recursive scheme

This elimination process can be repeated arbitrarily many times, so we can obtain increasingly higher-order approximations. The iterative algorithm can be described by the following recursive scheme:

$$K^{(i+1)}(h) := K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1$$

Where $K^{(0)}(h) := K(h)$ is the initial base method. The orders of the individual steps increase as follows:

* $K^{(0)} \implies \mathcal{O}(h^2)$ (second-order)
* $K^{(1)} \implies \mathcal{O}(h^4)$ (fourth-order)
* $K^{(2)} \implies \mathcal{O}(h^6)$ (sixth-order)



## 4. Application example: Fourth-order numerical differentiation

The chapter demonstrates that if our starting base is the second-order central (symmetric) difference formula:


$$K(h) = \frac{f(x_0 + h) - f(x_0 - h)}{2h}$$

Then applying the first step of the Richardson extrapolation to this ($K^{(1)}(h)$), we get the following **fourth-order difference formula** as a result:


$$K^{(1)}(h) = \frac{4 \cdot \dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3}$$

$$K^{(1)}(h) = \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}$$

This formula is identical to the higher-order difference formula that we could otherwise have derived directly only in a much more complicated way, by multi-point Lagrange interpolation or by arranging high-degree Taylor polynomials.



## 5. Summary and practical benefits

Richardson extrapolation is an extremely efficient and elegant computational tool. It allows us to systematically **generate schemes of arbitrarily high accuracy** starting from simple, lower-order (and easily programmable) base methods, purely by cleverly combining the step sizes. This principle forms the basis of, among others, the famous Romberg method used in numerical integration.
