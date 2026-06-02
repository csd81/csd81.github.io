**8.7. Quasi-Newton Methods** 



## 1. Motivation and the basic idea

* **The problem with the Newton method:** The classic multivariable Newton method (Chapter 8.6) is extremely fast (with quadratic convergence), but in each iteration step, the **Hessian matrix** containing all the second-order partial derivatives of the function must be calculated, and an associated linear system of equations must be solved (or the matrix must be inverted). For large-dimensional ($n$) tasks, this means enormous computational cost ($O(n^3)$ per step) and complex analytical differentiation.
* **The goal of Quasi-Newton methods:** They try to preserve the speed and valley-following properties of the Newton method by **completely eliminating the direct calculation of second-order derivatives and matrix inversion**.

### How does it work?

Instead of calculating the true Hessian matrix $f''(\mathbf{p}^{(k)})$, the algorithm maintains an easily generable **approximate matrix $\mathbf{A}^{(k)}$**, which is updated step by step using a clever algebraic scheme based solely on the changes of successive points and gradient vectors (first-order information).



## 2. The Quasi-Newton model and the Secant equation

Let's approximate the function $f$ in the neighborhood of point $\mathbf{p}^{(k)}$ with a quadratic function:


$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}) \tag{8.16}$$


Where $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ is the approximation of the gradient (mostly equal to the exact gradient), and $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$ is the symmetric, positive definite approximate Hessian matrix.

If we jump to the minimum of $g(\mathbf{x})$, we get the general step:


$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)} \tag{8.17}$$

In order for the matrix $\mathbf{A}^{(k+1)}$ to behave well in the next step, we require it to satisfy the multivariable **secant equation (quasi-Newton condition)**:


$$\mathbf{A}^{(k+1)} \mathbf{s}^{(k)} = \mathbf{y}^{(k)} \qquad \text{or in inverse form:} \qquad \mathbf{s}^{(k)} = \big(\mathbf{A}^{(k+1)}\big)^{-1} \mathbf{y}^{(k)}$$


Where we introduce the step and gradient change vectors:

* $\mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$ (the displacement vector),
* $\mathbf{y}^{(k)} := \mathbf{v}^{(k+1)} - \mathbf{v}^{(k)}$ (the difference of gradients).



## 3. Update strategies (Hessian Update Strategies)

The secant equation alone does not uniquely determine the new matrix. The notes present three classic rank-correction formulas for step-by-step updating of the matrices:

### A) Symmetric Rank-1 formula (SR1)

The earliest scheme, which adds a single dyadic product (rank-1 correction) to the previous matrix:


$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}$$

* **Disadvantage:** It does not guarantee that the matrix preserves its positive definiteness, and even when the denominator becomes zero, the algorithm can collapse numerically.

### B) The DFP formula (Davidon–Fletcher–Powell)

The DFP method updates by adding two dyadic products (rank-2 correction) and computes the **inverse Hessian matrix** ($(\mathbf{A}^{(k)})^{-1}$) directly recursively:


$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \tag{8.35}$$

* **Advantage:** If the initial matrix was positive definite and the step size is well chosen with a one-dimensional line search, the DFP scheme **is guaranteed to preserve positive definiteness**, and due to the direct update of the inverse, **there is never a need to solve a linear system of equations or invert a matrix** ($O(n^2)$ computational cost per step).

### C) The BFGS formula (Broyden–Fletcher–Goldfarb–Shanno)

The **most successful and efficient** quasi-Newton algorithm of modern numerical analysis, which derives from the mathematical duality of DFP. It updates the approximate Hessian matrix directly in the following way:


$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T\mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T\mathbf{A}^{(k)}\mathbf{s}^{(k)}}$$



## 4. Convergence and Numerical Experiences

Quasi-Newton methods are theoretically of **locally superlinear convergence**. In terms of speed, this is situated between the linear pace of the gradient method and the quadratic pace of the pure Newton method, but in practice, it is extremely close to the speed of the Newton method.

The notes test the DFP algorithm on the Rosenbrock function ($f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$) starting from the distant point $(2,2)^T$, where the initial matrix is the identity matrix $\mathbf{A}^{(0)} = \mathbf{I}$ (that is, the first step is a pure gradient step):

* **Step 0:** Distance from the minimum: $1.802$.
* **Step 1:** The error decreases to $0.295$.
* **Step 4:** Thanks to the curvature information incorporated into the matrix, the error drops radically to $0.011$.
* **Step 8:** It practically reaches the exact minimum point $(1, 0.5)^T$, the error is negligible: **$0.00000002$**.



## 5. Summary and practical utility

Quasi-Newton procedures (especially **BFGS** and its limited-memory variant, *L-BFGS*) are the workhorses of modern machine learning and engineering optimization software. The secret of their success is a brilliant compromise: they are capable of providing the intelligent, valley-following search direction and speed of the Newton method, while keeping the computational cost at the cheap, pure first-order derivative-based level of the gradient method.
