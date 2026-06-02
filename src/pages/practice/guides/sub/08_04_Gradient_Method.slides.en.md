# 8.4. Gradient Method

![the surface of $f(x, y) = 4 - 3x^2 - y^2$ with a tangent plane](fig-gradient-surface.png)

$$f(x, y) = 4 - 3x^2 - y^2$$

---

![the gradient vector is perpendicular to the level curve at $\mathbf{p} = (0.5, 0.5)$](fig-gradient-perp.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

> **Theorem.** *Let $f\colon \mathbb{R}^2 \to \mathbb{R}$ be continuously differentiable. Then the gradient vector $f'(\mathbf{p})$ is always perpendicular to the level curve of $f$ through $\mathbf{p}$, i.e., to the tangent line of the level curve at $\mathbf{p}$.*

---

> **Proof.** Let
>
> $$\gamma(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix}$$
>
> be a parametrization of the level curve of $f$ through the point $\gamma(t_0) = \mathbf{p}$, and let $f(\mathbf{p}) = c$. Then
>
> $$f(x(t), y(t)) = f(\gamma(t)) = c, \qquad \text{for all } t,$$
>
> hence
>
> $$0 = \frac{d}{dt} f(\gamma(t)) = f'(\gamma(t))^T \gamma'(t), \qquad t \in \mathbb{R}.$$
>
> Therefore, for $t = t_0$ we get
>
> $$f'(\mathbf{p})^T \gamma'(t_0) = 0,$$
>
> hence $f'(\mathbf{p})$ is perpendicular to the direction vector of the tangent line at $\mathbf{p}$, i.e., to the vector $\gamma'(t_0) = (x'(t_0), y'(t_0))^T$. $\quad\square$

---

![intersection of the tangent plane with the surface; the direction $\mathbf{u} = -f'(\mathbf{p})$](fig-gradient-cut.png)

$$f(x, y) = 4 - 3x^2 - y^2, \quad \mathbf{p} = (0.5, 0.5), \quad \mathbf{u} = -f'(\mathbf{p})$$

---

Let $f\colon \mathbb{R}^n \to \mathbb{R}$. It is known from calculus that at a point $\mathbf{p}$ the most rapid decrease of the function $f$ is in the direction of the vector $-f'(\mathbf{p})$:

> **Theorem.** *Let $f \in C^1$. Then the directional derivatives*
>
> $$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$
>
> *has a minimum for the direction $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$.*

A direction $\mathbf{u}$ is called a **descent** of a function $f$ at the point $\mathbf{p}$ if there exists $\delta > 0$ such that $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ for all $0 < t < \delta$, i.e., the function decreases starting from the point $\mathbf{p}$ in the direction of $\mathbf{u}$. The **steepest descent** of $f$ at the point $\mathbf{p}$ is in the direction $-f'(\mathbf{p})$.

---

**gradient method** or **steepest descent method:**

Given a starting point $\mathbf{p}^{(0)}$. Define the sequence

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{5}$$

where the scaling parameter $\alpha_k$ determines the step size.

The simplest variant of the gradient method is to use it with **constant stepsize**: Let $h > 0$ be fixed, and use the factor

$$\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}.$$

---

An other variant is that we select $\alpha_k$ so that

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

be satisfied, where

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{6}$$

Then in each step we have to minimize a function of single variable along with the direction of the negative gradient. This version of the gradient method is called **optimal gradient method**.

---

Using the optimal gradient method we step forward from a point in the direction of the negative gradient into a point where the line is tangent to the contour line (level curve) of the function $f$. This implies that the consecutive directions are perpendicular to each other.

It can be shown that the **optimal gradient method is locally linearly convergent**. But the asymptotic error constant can be close to 1, so the convergence can be slow.

---

> **Example.** We consider again the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. First we use the gradient method with the scaling factor $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$, i.e., with the constant step size 0.3. The first 21 terms of the sequence can be seen in the next figure starting from the initial point $(-1, 4)$ (red circles) and from the initial point $(0.5, 3.5)$ (purple circles). The sequences approximate the minimum point $(1, 0.5)$ (blue dot) slowly, and oscillates around it.
>
> Next we apply the optimal gradient method from the initial points $(-1, 4)$ (red circles) and $(0.5, 3.5)$ (purple circles), respectively. We plotted the first 3 and 12 terms of the corresponding sequences in the figure below.

---

**Example cont.**

![Gradient method with constant step size](fig-gradient-const.png)

*Gradient method with constant step size.*

![Optimal gradient method](fig-gradient-opt.png)

*Optimal gradient method.*

---

If we cannot or do not want to compute the gradient vector exactly, then we can use the following variant:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{7}$$

where the $i$th component of the vector $\mathbf{v}^{(k)}$ is defined by

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n$$

where $\mathbf{e}^{(i)}$ is the $i$th unit vector.

---

