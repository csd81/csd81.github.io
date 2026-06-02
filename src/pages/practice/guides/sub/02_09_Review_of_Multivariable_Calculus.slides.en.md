## 2.8 Review of Multivariable Calculus

Let $E \subset \mathbb{R}^n$, and consider the function $f\colon E \to \mathbb{R}$ of $n$ variables. The partial derivative of the function

$$f = f(\mathbf{x}) = f(x_1, \ldots, x_n)$$

with respect to the variable $x_i$ is denoted by $\dfrac{\partial f}{\partial x_i}$.

If all the partial derivatives of $f$ up to order $m$ exist and are continuous, then we say that $f$ is $m$ times continuously partially differentiable, and we will denote it by $f \in C^m$.

If $f \in C^1$, then $f'$ denotes the **gradient vector** or shortly, the **gradient** of $f$:

$$f'(\mathbf{x}) := \left(\frac{\partial f(\mathbf{x})}{\partial x_1}, \ldots, \frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.$$

If $f \in C^2$, then $f''(\mathbf{x})$ is the so-called **Hessian matrix** or shortly the **Hessian**: defined by

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1 \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n}(\mathbf{x}) \\
\dfrac{\partial^2 f}{\partial x_2 \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n}(\mathbf{x}) \\
\vdots & \vdots & & \vdots \\
\dfrac{\partial^2 f}{\partial x_n \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

### Theorem (Taylor's formula)

Let $E \subset \mathbb{R}^n$ be an open set, $f\colon E \to \mathbb{R}$, $f \in C^{m+1}$, and let $\mathbf{a} \in E$. Then for every $\mathbf{x} \in E$ there exists a $\xi = \xi(\mathbf{x}) \in E$ such that $\xi = \mathbf{x} + t(\mathbf{a} - \mathbf{x})$ for some $t \in (0,1)$ (i.e., $\xi$ lies on the line segment connecting $\mathbf{a}$ and $\mathbf{x}$), and

$$\begin{aligned}
&f(x_1, \ldots, x_n) \\
&= f(a_1, \ldots, a_n) + \sum_{i=1}^n \frac{\partial f(a_1, \ldots, a_n)}{\partial x_i}(x_i - a_i) \\
&\quad + \frac{1}{2} \sum_{i=1}^n \sum_{j=1}^n \frac{\partial^2 f(a_1, \ldots, a_n)}{\partial x_i \partial x_j}(x_i - a_i)(x_j - a_j) \\
&\quad + \cdots + \frac{1}{m!}\sum_{i_1=1}^n \cdots \sum_{i_m=1}^n \frac{\partial^m f(a_1, \ldots, a_n)}{\partial x_{i_1} \cdots \partial x_{i_m}}(x_{i_1} - a_{i_1})\cdots(x_{i_m} - a_{i_m}) \\
&\quad + \frac{1}{(m+1)!}\sum_{i_1=1}^n \cdots \sum_{i_{m+1}=1}^n \frac{\partial^{m+1} f(\xi_1, \ldots, \xi_n)}{\partial x_{i_1} \cdots \partial x_{i_{m+1}}}(x_{i_1} - a_{i_1})\cdots(x_{i_{m+1}} - a_{i_{m+1}}).
\end{aligned}$$

We can easily check that using the notation of the gradient and the Hessian that for $f \in C^3$ we have the second-order Taylor approximation

$$f(\mathbf{x}) \approx f(\mathbf{a}) + f'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) + \frac{1}{2}(\mathbf{x} - \mathbf{a})^T f''(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

This justifies the notations $f'$ and $f''$ for the gradient and the Hessian.

Let $I \subset \mathbb{R}$, $g\colon I \to \mathbb{R}^n$, and we denote the component functions of $g$ by $g_i$, i.e., we use the notation

$$g(t) = (g_1(t), \ldots, g_n(t))^T.$$

We say that such $g$ is differentiable if all its component functions are differentiable, and its derivative is

$$g'\colon I \to \mathbb{R}^n, \qquad g'(t) := (g_1'(t), \ldots, g_n'(t))^T.$$

We say that $g$ is continuously differentiable if its each component function is continuously differentiable.

### Theorem (chain rule)

Let $f\colon \mathbb{R}^n \to \mathbb{R}$, $f \in C^1$ and $g\colon \mathbb{R} \to \mathbb{R}^n$ be continuously differentiable. Then the composite function $f \circ g\colon \mathbb{R} \to \mathbb{R}$ is also continuously differentiable, and

$$\frac{d}{dt}f(g(t)) = f'(g(t))^T g'(t).$$

We can get the following generalization of the Lagrange's Mean Value Theorem for multivariable functions from the chain rule.

### Theorem (Lagrange's Mean Value Theorem)

Let $E \subset \mathbb{R}^n$ be an open and convex set, $f\colon E \to \mathbb{R}$ is continuously differentiable with respect to all variables. Then for every $\mathbf{x}, \mathbf{y} \in E$ there exists $\xi \in (0,1)$ such that

$$f(\mathbf{x}) - f(\mathbf{y}) = f'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T (\mathbf{x} - \mathbf{y}).$$

**Proof.** We define the single variable function $g(t) = f(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))$ for $t \in [0,1]$. Using the Lagrange's Mean Value Theorem of single variable functions and the chain rule, we get

$$f(\mathbf{x}) - f(\mathbf{y}) = g(1) - g(0) = g'(\xi)(1 - 0) = f'(\mathbf{x} + \xi(\mathbf{y} - \mathbf{x}))^T(\mathbf{x} - \mathbf{y}).$$

Let $E \subset \mathbb{R}^n$ and $\mathbf{f}\colon E \to \mathbb{R}^n$. The component functions of $\mathbf{f}$ are denoted by $f_i$, i.e.,

$$\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T.$$

We say that $\mathbf{f}$ is $m$ times continuously partially differentiable if its every component function is $m$ times continuously partially differentiable, and it will be denoted by $\mathbf{f} \in C^m$.

The **Jacobian matrix** or shortly, the **Jacobian** of the function $\mathbf{f} \in C^1$ is the $n \times n$ matrix defined by

$$\mathbf{f}'(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial f_1}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_1}{\partial x_n}(\mathbf{x}) \\
\vdots & & \vdots \\
\dfrac{\partial f_n}{\partial x_1}(\mathbf{x}) & \cdots & \dfrac{\partial f_n}{\partial x_n}(\mathbf{x})
\end{pmatrix}.$$

Let $\mathbf{a} \in \mathbb{R}^n$ be fixed. If we approximate the component functions of $\mathbf{f}$ by its first-order Taylor polynomial around $\mathbf{a}$, then we get

$$\mathbf{f}(\mathbf{x}) = \begin{pmatrix} f_1(\mathbf{x}) \\ \vdots \\ f_n(\mathbf{x}) \end{pmatrix} \approx \begin{pmatrix} f_1(\mathbf{a}) + f_1'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \\ \vdots \\ f_n(\mathbf{a}) + f_n'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) \end{pmatrix} = \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}).$$

$\mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a})$ is called the **linear approximation** of $\mathbf{f}$ around $\mathbf{a}$.

---

