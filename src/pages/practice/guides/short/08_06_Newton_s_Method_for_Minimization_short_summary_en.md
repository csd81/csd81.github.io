**8.6. Extremum Calculus – Newton's Method** 



## 1. Motivation and Theoretical Basic Idea

* **The problem with the gradient method:** Although the gradient method discussed in the previous section (8.4) reliably steps in the direction of decrease, on elongated surfaces (in steep valleys) it is prone to infinite, slow, zig-zag oscillation. This is because it completely ignores the curvature (second derivative) of the surface.
* **The principle of Newton's method:** Instead of approximating with linear tangent lines or planes, Newton's method approximates the function with a **second-degree Taylor polynomial (quadratic surface)** around the current point in every step. Since the minimum of a paraboloid (or quadratic form) can be determined with a single direct formula, the algorithm jumps to the theoretical minimum calculated this way in the next iteration.



## 2. Mathematical Derivation and the Form of Recursion

Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be a three times continuously differentiable function ($f \in C^3$). We write the second-degree Taylor polynomial ($g(\mathbf{x})$) of function $f$ around a fixed initial point $\mathbf{p}^{(0)}$:

$$g(\mathbf{x}) := f(\mathbf{p}^{(0)}) + f'(\mathbf{p}^{(0)})^T(\mathbf{x} - \mathbf{p}^{(0)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(0)})^T f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) \tag{8.14}$$

Where:

* $f'(\mathbf{p}^{(0)})$ is the **gradient vector** of the function at $\mathbf{p}^{(0)}$,
* $f''(\mathbf{p}^{(0)})$ is the **Hessian matrix** of the function at $\mathbf{p}^{(0)}$.

Assume that the Hessian matrix $f''(\mathbf{p}^{(0)})$ is strictly **positive definite**. Then, due to the theorem from Section 8.5, the quadratic function $g(\mathbf{x})$ has a unique global minimum, which it takes where its gradient becomes zero:


$$\nabla g(\mathbf{x}) = \mathbf{0} \implies f'(\mathbf{p}^{(0)}) + f''(\mathbf{p}^{(0)})(\mathbf{x} - \mathbf{p}^{(0)}) = \mathbf{0}$$

Rearranging this equation for $\mathbf{x}$, we obtain the minimum point, which we consider as the new, refined approximation $\mathbf{p}^{(1)}$ of the sought function. By repeating the procedure iteratively, we obtain the **general recursion formula of the multivariable Newton's method**:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(f''(\mathbf{p}^{(k)})\big)^{-1} f'(\mathbf{p}^{(k)}), \qquad k = 0, 1, 2, \ldots \tag{8.15}$$



## 3. Connection with Nonlinear Systems of Equations

The notes point out an important equivalence: finding the minimum of a function ($\min f(\mathbf{x})$) essentially equates to finding the roots of the multivariable nonlinear system of equations $\nabla f(\mathbf{x}) = \mathbf{0}$.
If we apply the classical Newton's method for systems of equations to the system of partial derivatives (where the Jacobian matrix will be exactly the Hessian matrix composed of the function's second-order derivatives), we **get exactly the optimization formula (8.15) back**.



## 4. Convergence Theorem (Quadratic Speed)

The most important theoretical result of the chapter guarantees the method's extraordinary speed:

> **Theorem:** Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be a three times continuously differentiable function ($f \in C^3$). Assume that point $\mathbf{p}$ is a stationary point ($f'(\mathbf{p}) = \mathbf{0}$), and its corresponding Hessian matrix $f''(\mathbf{p})$ is positive definite (i.e., $\mathbf{p}$ is a true strict local minimum). Then the Newton sequence according to rule (8.15), starting from a suitable neighborhood of the minimum, **converges locally quadratically (second-order)** to $\mathbf{p}$.

### What does quadratic convergence mean?

The error decrease per step is quadratic ($e_{k+1} \leq C \cdot e_k^2$). From a practical standpoint, this means that the number of exact decimal places **roughly doubles in each step**, so the algorithm is capable of reaching the limit of machine precision in very few steps.



## 5. Numerical Example: Testing the Rosenbrock Valley

The notes demonstrate the operation on the nonlinear two-variable function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$, starting from a distant initial point $(-1, 4)^T$. The exact minimum is at the point $(1, 0.5)^T$.

The iteration steps show spectacular convergence:

* **Step 0:** Distance to target: $3.905$.
* **Step 1:** The error immediately drops to $1.884$.
* **Step 2:** The error is only $0.781$.
* **Step 3:** Radical drop: the error is $0.211$.
* **Step 4:** The quadratic effect takes hold: the distance shrinks to $0.024$.
* **Step 5:** The algorithm practically hits the target directly: the error is negligible, a mere **$0.00032$**.

*Interesting note from the text:* If the search is started from the point $(1, 3)^T$, since the surface curvature there perfectly matches the function's local shape, Newton's method provides the exact theoretical minimum in a **single step**.



## 6. Advantages and Major Disadvantages of Newton's Method

### Advantages:

1. Extremely fast, quadratic convergence near the minimum.
2. Completely eliminates the slow, zig-zag valley oscillation experienced with the gradient method, since it steps directly along the valley axis utilizing the surface curvature.

### Disadvantages:

1. **High computational demand per step:** In each iteration, all second-order partial derivatives (the full Hessian matrix) must be computed, and a corresponding linear system of equations must be solved (or the matrix inverted), which means an operation cost of $O(n^3)$.
2. **Local nature and instability:** If the starting point is too far from the minimum, or the Hessian matrix loses its positive definiteness (e.g., near inflection points or local maxima), Newton's method can easily become unstable, step in the wrong direction, or diverge completely to infinity.

> **Practical context:** Due to these disadvantages, modern optimization software often uses so-called **Quasi-Newton methods** (e.g., the Broyden–Fletcher–Goldfarb–Shanno, or *BFGS* algorithm) instead of the pure Newton's method, which preserve the speed of Newton's method but only approximate the Hessian matrix from the changes in consecutive gradient vectors, avoiding expensive direct second-order differentiation and matrix inversion.
