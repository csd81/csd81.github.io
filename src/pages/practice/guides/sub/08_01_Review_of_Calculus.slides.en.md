# Numerical Analysis

## 8. Minimization of Functions

**Ferenc Hartung**

University of Pannonia, Department of Mathematics, Veszprém, Hungary

2025

*(Supported by: A Pannon Egyetem gyakorlatorientált infrastrukturális- és készségfejlesztési reformja, RRF-2.1.2.-21-2022-00007.)*

---


# 8.1. Review of Calculus

Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be a function of $n$ variables. The Hessian matrix:

$$f''(\mathbf{x}) := \begin{pmatrix}
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1\, \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2\, \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n\, \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n\, \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x})
\end{pmatrix}$$

> **Theorem.** *Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be partially differentiable with respect to all variables. Then if $f$ has a local extremum at the point $\mathbf{a} \in \mathbb{R}^n$, then $\frac{\partial f(\mathbf{a})}{\partial x_i} = 0$ holds for all $i = 1, \ldots, n$.*
>
> *If $f \in C^2$ and $f'(\mathbf{a}) = \mathbf{0}$ for some $\mathbf{a} \in \mathbb{R}^n$, moreover the Hessian matrix $f''(\mathbf{a})$ is positive (negative) definite, then $f$ has a local minimum (maximum) at the point $\mathbf{a}$.*

---

For two-variable functions we have the following special case of the previous result.

> **Theorem.** *Let $f\colon \mathbb{R}^2 \to \mathbb{R}$, $f \in C^2$. Then if $f$ has a local extremum at the point $(a, b)$, then*
>
> $$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{1}$$
>
> *holds.*
>
> *On the other hand, if relation (1) holds at a point $(a, b)$, and*
>
> $$D(a, b) := \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x\, \partial y}(a, b) \right)^2 > 0,$$
>
> *then $f$ has a local extremum point at $(a, b)$. Moreover, $f$ has a local maximum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) < 0$, and it has a local minimum at $(a, b)$ if $\frac{\partial^2 f}{\partial x^2}(a, b) > 0$. If $D(a, b) < 0$, then $f$ has no extremum at $(a, b)$.*

---

