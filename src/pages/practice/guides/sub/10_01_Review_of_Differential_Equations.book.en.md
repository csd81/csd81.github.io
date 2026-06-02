## 10.1. Review of Differential Equations

In this chapter we investigate approximate solutions of the initial value problem (IVP)

$$y' = f(t, y), \qquad y(t_0) = y_0 \tag{10.1}$$

on a finite time interval $[t_0, T]$. For simplicity we study the case when $y = y(t)$ is a real function, i.e., we assume that

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

The methods we define can be generalized to the system case: then the unknown variable $\mathbf{y} = \mathbf{y}(t)$ denotes a vector of $m$ dimension, and the system has the form

$$\mathbf{y}' = \mathbf{f}(t, \mathbf{y}), \qquad \mathbf{y}(t_0) = \mathbf{y}^{(0)}, \tag{10.2}$$

where

$$\mathbf{f} \colon [t_0, T] \times \mathbb{R}^m \to \mathbb{R}^m, \qquad \mathbf{y}^{(0)} \in \mathbb{R}^m.$$

We introduce the following definition: The function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is called *Lipschitz continuous* in its second variable with the *Lipschitz constant* $L$ if

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{for all } t \in [t_0, T] \text{ and } y, \tilde{y} \in \mathbb{R}. \tag{10.3}$$

This notion can be easily generalized to the system case if instead of the absolute value we use a vector norm in the previous definition.

It is known from the theory of ODEs that the existence of solution of the IVPs (10.1) or (10.2) follows if the functions $f$ or $\mathbf{f}$ are continuous. To get the uniqueness of the solutions, we have to assume also the Lipschitz continuity of $f$ or $\mathbf{f}$ in its second variable. Therefore, we have the following result (formulated for the scalar case):

**Theorem 10.1.** *Suppose that $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuous and it is Lipschitz continuous in its second variable. Then the IVP (10.1) has a unique solution on the interval $[0, T]$ for all initial value $y_0 \in \mathbb{R}$.*

We note that the Lipschitz continuity of $f$ in Theorem 10.1 and also in later results, i.e., the assumption that inequality (10.3) holds for all $y, \tilde{y} \in \mathbb{R}$ is a strong condition on $f$. Instead of it we could assume the so-called *local Lipschitz continuity*: for every interval $[a, b]$ for which $y_0 \in (a, b)$ there exists a constant $L > 0$ (which depends on $[a, b]$) such that (10.3) holds for all $t \in [t_0, T]$, $y, \tilde{y} \in [a, b]$. This property holds for most of the functions which are important in applications. For example, it is enough to assume that $f$ be continuously differentiable with respect to its second derivative. Then it implies that $f$ is locally Lipschitz continuous in its second variable (see Exercise 3). But from the local Lipschitz continuity it does not follow that the solution of the IVP (10.1) exists on $[t_0, T]$. It follows only that there exists a $0 < \bar{T} \le T$ such that the IVP (10.1) has a unique solution on the interval $[t_0, \bar{T}]$ (see Exercise 4). To avoid this technical problem we will assume in later results that $f$ is globally Lipschitz continuous in its second variable, i.e., (10.3) holds.

It is known that the scalar $m$th-order IVP

$$y^{(m)} = f(t, y, y', \ldots, y^{(m-1)}), \quad y(t_0) = y_0,\ y'(t_0) = y_1, \ldots,\ y^{(m-1)}(t_0) = y_{m-1}$$

is equivalent to an IVP of the form (10.2), where

$$\mathbf{y} = (y, y', \ldots, y^{(m-1)})^T, \quad \text{and} \quad \mathbf{y}^{(0)} = (y_0, y_1, \ldots, y_{m-1})^T.$$

So for simplicity, later we will study only scalar IVPs of the form (10.1), but most of the results can be generalized to the system case and to $m$th-order IVPs too.

### Exercises

1. Reformulate the following higher order scalar IVPs as an equivalent system of the form (10.2):

   (a) $y'' + 5y' = e^{2t-1}, \qquad y(0) = 3, \quad y'(0) = -1$,

   (b) $y'' - t^2 y' + ty = 0, \qquad y(1) = 1, \quad y'(1) = 0$,

   (c) $y''' + 4y'' - 2y' + 5y = t^3, \qquad y(-1) = 2, \quad y'(-1) = -3$.

2. Show that the IVP $y' = \sqrt{|y|}$, $y(0) = 0$ has two solutions $y(t) = 0$ and $y(t) = t^2/4$. Show that the function $f(y) = \sqrt{|y|}$ is not Lipschitz continuous in $y$.

3. Prove that if the function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuously differentiable in its second variable, then $f$ is locally Lipschitz continuous in its second variable.

4. Show that the IVP $y' = y^2$, $y(0) = 1$ has no solution on the interval $[0, T]$ for $T \ge 1$. Show that the function $g(y) = y^2$ is not globally Lipschitz continuous in $y$, but it is locally Lipschitz continuous.

