# Numerical Analysis: 10 — Ordinary Differential Equations

**Ferenc Hartung**
University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---


## 10.1 Review of Differential Equations

Consider the initial value problem (IVP)

$$y' = f(t, y), \qquad t \in [t_0, T], \qquad y(t_0) = y_0. \tag{1}$$

We assume

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

*(Slide shows a direction field with several solution curves; the red curve is the solution through $(t_0, y_0)$.)*

The function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is called **Lipschitz continuous** in its second variable with the **Lipschitz constant** $L$ if

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{for all } t \in [t_0, T] \text{ and } y, \tilde{y} \in \mathbb{R}.$$

> **Theorem:**
> Suppose that $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuous and it is Lipschitz continuous in its second variable. Then the IVP (1) has a unique solution on the interval $[0, T]$ for all initial value $y_0 \in \mathbb{R}$.

---

