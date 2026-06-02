**2.1 Fixed Point Iteration and Numerical Methods of Convergence**

## 1. Overview of Fixed Point Iteration

* **Definition**: Fixed point iteration is a one-step recursive sequence defined by the formula $p_{k+1} = g(p_k)$ for $k \geq 0$, starting from an initial value $p_0 \in I$. This is a special case of the general $m$-step iteration, which by default depends on $m$ previous terms ($p_k, p_{k-1}, \ldots, p_{k-m+1}$).
* **Fixed Point**: A number $p$ is called a fixed point of the function $g$ if it satisfies the equation $g(p) = p$.
* **Geometric Representation**: Visually, the iteration can be represented by the so-called **staircase diagram** (or Cobweb diagram). This geometric interpretation projects the successive points $(p_k, p_{k+1})$ of the sequence between the function curve $y = g(x)$ and the line $y = x$.
* **Fundamental Convergence Property**: If the generating function of a fixed point iterative sequence is continuous and the sequence is convergent ($p_k \to p$), then the limit $p$ is necessarily the solution to the fixed point equation (i.e., $p = g(p)$). At the same time, iterations are not always convergent: depending on the properties of the function, they can tend to infinity or even oscillate.

## 2. Existence, Uniqueness, and Error Estimates

The text sets strict conditions on when a unique fixed point exists and how the iteration behaves:

* **Existence and Uniqueness Theorem**: If $g: [a,b] \to [a,b]$ is continuous, then it has at least one fixed point on the interval $[a,b]$. If furthermore $g$ is differentiable on $(a,b)$, and its derivative is bounded by a constant $0 \leq c < 1$ (i.e., $|g'(x)| \leq c$), then the fixed point is unique.
* **Fixed Point Theorem (Convergence and Error Bounds)**: Under the aforementioned uniqueness conditions, the sequence $p_k$ converges to the unique fixed point $p$ for any initial value $p_0 \in [a,b]$. The text provides two primary error estimation formulas:
1. A bound based on the initial distance from the exact root:

$$|p_k - p| \leq c^k |p_0 - p| \tag{2.1}$$

2. A bound that can be computed directly knowing the first two terms of the sequence:

$$|p_k - p| \leq \frac{c^k}{1 - c}|p_1 - p_0| \tag{2.2}$$

## 3. The Contraction Principle and the Lipschitz Property

* **Lipschitz Property**: The function $g$ has the Lipschitz property (or is Lipschitz continuous) on the interval $I$ if there exists a constant $c \geq 0$ such that $|g(x) - g(y)| \leq c|x - y|$ holds for all $x, y \in I$. Continuous differentiability ($g \in C^1[a,b]$) implies the Lipschitz property.
* **Contraction**: If the inequality $0 \leq c < 1$ holds for the Lipschitz constant, then the function is called a **contraction**.
* **Contraction Principle**: This is a generalization of the fixed point theorem, stating that if a continuous function $g: [a,b] \to [a,b]$ is a contraction, then the sequence converges to the unique fixed point, and the error estimates (2.1) and (2.2) also hold.

## 4. Local and Global Convergence

* **Global Convergence**: An iterative method is called globally convergent if it converges to the fixed point $p$ for any arbitrarily chosen initial value.
* **Local Convergence**: The iteration converges locally if, for convergence, the initial value(s) must be chosen from a small neighborhood of the fixed point, the interval $(p - \delta, p + \delta)$.
* **Local Fixed Point Theorem**: If $g \in C^1[a,b]$ and specifically at the fixed point $p$ the absolute value of the derivative is less than 1 ($|g'(p)| < 1$), then local convergence is guaranteed.
* **Geometric Behavior**: In the neighborhood of the fixed point, the value of the derivative $g'(p)$ determines the nature of convergence or divergence:
* $0 < g'(p) < 1$: Monotonic convergence.
* $-1 < g'(p) < 0$: Oscillating (spiral) convergence.
* $1 < g'(p)$: Monotonic divergence (moving away from $p$).
* $g'(p) < -1$: Oscillating divergence.
