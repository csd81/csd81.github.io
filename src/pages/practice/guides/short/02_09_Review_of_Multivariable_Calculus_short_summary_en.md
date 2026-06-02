**Review of Multivariable Calculus** 

## 1. Basic Notations and Norms ($\mathbb{R}^n$)

In multivariable spaces, points (vectors) are given in the form $x = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$. To measure the magnitude (length) of vectors, we use the concept of a **norm**. The three most important vector norms are:

* **1-norm (Manhattan norm):** The sum of the absolute values of the components:

$$\|x\|_1 = \sum_{i=1}^n |x_i|$$

* **2-norm (Euclidean norm):** The traditional geometric length:

$$\|x\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$$

* **$\infty$-norm (Maximum norm):** The component with the largest absolute value:

$$\|x\|_\infty = \max_{1 \leq i \leq n} |x_i|$$

### Matrix Norms

If $A \in \mathbb{R}^{n \times n}$ is a square matrix, based on its effect of stretching a vector, we can define the **induced matrix norm**:

$$\|A\| := \max_{x \neq 0} \frac{\|Ax\|}{\|x\|}$$

From this, the extremely important inequality $\|Ax\| \leq \|A\| \cdot \|x\|$ follows directly.

## 2. Derivatives of Multivariable Functions

Let $F: \mathbb{R}^n \to \mathbb{R}^m$ be a multivariable function. If $m=1$ (scalar-valued function), we speak of a **gradient**, and if $m>1$ (vector-valued function), we speak of a **Jacobian matrix**.

### The Jacobian Matrix ($F'$)

If every component function of $F$ ($f_1, f_2, \dots, f_m$) is partially differentiable, then the derivative (Jacobian matrix) of the function $F$ is an $m \times n$ matrix containing all possible first-order partial derivatives:

$$F'(x) = J(x) = \begin{pmatrix} 
\frac{\partial f_1}{\partial x_1} & \dots & \frac{\partial f_1}{\partial x_n} \\ 
\vdots & \ddots & \vdots \\ 
\frac{\partial f_m}{\partial x_1} & \dots & \frac{\partial f_m}{\partial x_n} 
\end{pmatrix}$$

### The Hessian Matrix ($f''$)

In the case of scalar-valued functions ($f: \mathbb{R}^n \to \mathbb{R}$), the $n \times n$ symmetric matrix summarizing the second-order partial derivatives is called the **Hessian matrix**:

$$f''(x) = H(x) = \left( \frac{\partial^2 f}{\partial x_i \partial x_j} \right)_{i,j=1}^n$$

## 3. Important Mean Value Theorems and Taylor Approximation

For convergence proofs in numerical analysis, the multivariable extension of the single-variable Taylor's theorem is indispensable.

### Taylor's Theorem for Scalar-Valued Functions ($m=1$)

If $f: \mathbb{R}^n \to \mathbb{R}$ is sufficiently many times differentiable, then its first-order Taylor approximation around the point $x_0$ along with the second-order error term is the following:

$$f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{1}{2}(x-x_0)^T f''(\xi)(x-x_0)$$

where $\xi$ is an interior point of the straight line segment connecting the points $x$ and $x_0$ ($\xi \in \langle x, x_0 \rangle$).

### Mean Value Theorem for Vector-Valued Functions ($m>1$)

For vector-valued functions ($F: \mathbb{R}^n \to \mathbb{R}^m$), the above Taylor formula cannot be directly applied with a common interior point. Instead, we use the following integral form or the **mean value inequality** for norms:

$$F(x) = F(x_0) + \int_{0}^{1} F'\big(x_0 + t(x-x_0)\big)(x-x_0) \, dt$$

From this, it follows that if the norm of the derivative matrix is bounded on a convex domain ($\|F'(z)\| \leq M$), then the **Lipschitz property** holds:

$$\|F(x) - F(x_0)\| \leq M \|x - x_0\|$$

## 4. Vector-Valued Taylor's Theorem for Numerical Methods

When examining the linear approximation of a vector-valued function $F: \mathbb{R}^n \to \mathbb{R}^n$ around $x_0$, the following theorem serves to estimate the error term:

> **Theorem:** Suppose that $F$ is continuously differentiable in an open neighborhood of $x_0$, and the partial derivatives satisfy the Lipschitz condition with constant $L$. Then the following error estimate is valid:
> 
> $$\|F(x) - F(x_0) - F'(x_0)(x-x_0)\| \leq \frac{L}{2} \|x-x_0\|^2$$
> 

### Why is this crucial?

This theorem is the direct theoretical foundation for the **quadratic convergence of the multivariable Newton's method**. It shows that if we replace the function with its linear tangent approximation written using the Jacobian matrix, the remaining error is proportional to the *square* of the distance ($|x-x_0|^2$), exactly as in the single-variable case.
