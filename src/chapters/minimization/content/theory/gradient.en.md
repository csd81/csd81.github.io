## 8.4. Gradient Method

Consider a function $f\colon \mathbb{R}^n \to \mathbb{R}$. It is known from calculus that at a point $\mathbf{p}$ the most rapid decrease of the function $f$ is in the direction of the vector $-f'(\mathbf{p})$:

**Theorem 8.8.** *Let $f \in C^1$. Then the directional derivatives*

$$\lim_{t \to 0+} \frac{f(\mathbf{p} + t\mathbf{u}) - f(\mathbf{p})}{t}, \qquad \|\mathbf{u}\|_2 = 1$$

*has a minimum for the direction $\mathbf{u} = -f'(\mathbf{p})/\|f'(\mathbf{p})\|_2$.*

A direction $\mathbf{u}$ is called a *descent* of a function $f$ at the point $\mathbf{p}$ if there exists $\delta > 0$ such that $f(\mathbf{p} + t\mathbf{u}) < f(\mathbf{p})$ for all $0 < t < \delta$, i.e., the function decreases at the point $\mathbf{p}$ in the direction of $\mathbf{u}$. Theorem 8.8 can be interpreted so that the steepest descent of $f$ at the point $\mathbf{p}$ is in the direction $-f'(\mathbf{p})$.

The *gradient method* is based on the previous observation that starting from a point $\mathbf{p}^{(0)}$ we should step forward in the direction of the negative gradient vector. This method is also called the *steepest descent method*. We define it as follows:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \tag{8.5}$$

where the scaling parameter $\alpha_k$ determines the step size. The gradient method (8.5) has several variants. The simplest case is when the step size is constant. Let $h > 0$ be fixed, and use the factor $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$. Then the distance between the consecutive points is constant $h$. Then, in general, the method cannot approximate the exact minimum point better than $h$.

Another variant is that we select $\alpha_k$ so that

$$\phi_k(\alpha_k) = \min_{t \in \mathbb{R}} \phi_k(t)$$

be satisfied, where

$$\phi_k(t) := f\Big(\mathbf{p}^{(k)} - t f'(\mathbf{p}^{(k)})\Big). \tag{8.6}$$

Then in each step we have to minimize a function of a single variable along with the direction of the negative gradient. This version of the gradient method is called *optimal gradient method*.

Using the optimal gradient method we step forward from a point in the direction of the negative gradient into a point where the line is tangent to the contour line (level curve) of the function $f$. This implies that the consecutive directions are perpendicular to each other. (See Exercise 3.)

It can be shown that the optimal gradient method is locally linearly convergent. But the asymptotic error constant can be close to 1, so the convergence can be slow.

**Example 8.9.** We consider again the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$ examined in Examples 8.6 and 8.7 and we use the gradient method to find its minimum point. First we use the gradient method with the scaling factor $\alpha_k = 0.3/\|f'(\mathbf{p}^{(k)})\|_2$, with the constant step size 0.3. The first 21 terms of the sequence can be seen in Figure 8.6 starting from the initial point $(-1, 4)$ (red circles) and from the initial point $(0.5, 3.5)$ (green circles). The sequences approximate the minimum point $(1, 0.5)$ (blue dot) slowly, and oscillates around it. Note that, as it is known in calculus, the gradient vector is always perpendicular to the contour line through that point, so the gradient method steps in a direction perpendicular to the contour line. $\quad\square$

Next we apply the optimal gradient method from the initial points $(-1, 4)$ (red circles) and $(0.5, 3.5)$ (green circles), respectively. We plotted the first 3 and 12 terms of the corresponding sequences in Figure 8.7. The first sequence gets very close to the minimizer (blue dot) in two steps, and then approaches further to the minimum point. The second sequence enters quickly into the "valley" of the contour lines containing the minimum point, but there it zigzags slowly towards the minimum point. $\quad\square$

If we cannot or do not want to compute the gradient vector exactly, then we can use the following variant of the method (8.5):

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}, \tag{8.7}$$

where the $i$th component of the vector $\mathbf{v}^{(k)}$ is defined by

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big), \qquad i = 1, \ldots, n,$$

and here $\mathbf{e}^{(i)}$ is the $i$th unit vector.

**Exercises**

1. Apply the gradient method for the functions given in Exercise 1 of Section 8.3. Select any initial point, and use the constant step size $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ with some $h > 0$, and also use the optimal gradient method.

   <details class="reveal-solution"><summary>Show solution</summary>

   Worked illustration for $f(x,y) = (x^2 - 2y)^2 + 2(x-1)^2$. The gradient is $\nabla f = \big(4x(x^2-2y) + 4(x-1),\ -4(x^2-2y)\big)$. At $(2,2)$ this is $\nabla f(2,2) = (4, 0)$. One iteration gives $\mathbf{p}^{(1)} = (2,2) - \alpha(4, 0) = (2-4\alpha,\ 2)$. For the optimal gradient method choose $\alpha$ to minimise $\phi(\alpha) = f(2-4\alpha, 2) = ((2-4\alpha)^2 - 4)^2 + 2(2-4\alpha-1)^2$; set $\phi'(\alpha) = 0$ and solve for $\alpha$. With the constant step $\alpha_k = h/\|f'(\mathbf{p}^{(k)})\|_2$ the move has fixed length $h$ in the steepest-descent direction. The same recipe applies to each function of Exercise 1 of Section 8.3.

   </details>

2. Repeat the previous problem using the scale $\alpha_k = h$ with some $h > 0$.

   <details class="reveal-solution"><summary>Show solution</summary>

   For a quadratic model $f(\mathbf{x}) = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x} + c$ the gradient is $\nabla f(\mathbf{x}) = A\mathbf{x} - \mathbf{b}$ and the gradient iteration is $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k(A\mathbf{p}^{(k)} - \mathbf{b})$. With a fixed scale $\alpha_k = h$ the step length is no longer normalised, so convergence depends on $h$ relative to the eigenvalues of $A$: too large an $h$ overshoots and may diverge, while a small $h$ converges slowly. The optimal step is $\alpha_k = \dfrac{\mathbf{r}^{(k)T}\mathbf{r}^{(k)}}{\mathbf{r}^{(k)T}A\mathbf{r}^{(k)}}$ where $\mathbf{r}^{(k)} = A\mathbf{p}^{(k)} - \mathbf{b}$ is the residual.

   </details>

3. Compute the derivative of the function $\phi_k$ defined by (8.6). Using the value of the derivative at $t = \alpha_k$ show that the vectors $\mathbf{p}^{(k+2)} - \mathbf{p}^{(k+1)}$ and $\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$ are orthogonal.

   <details class="reveal-solution"><summary>Show solution</summary>

   By definition $\phi_k(t) = f(\mathbf{p}^{(k)} - t\,\nabla f(\mathbf{p}^{(k)}))$, so by the chain rule $\phi_k'(t) = -\nabla f(\mathbf{p}^{(k)} - t\,\nabla f(\mathbf{p}^{(k)}))^T \nabla f(\mathbf{p}^{(k)})$. The optimal step $\alpha_k$ satisfies $\phi_k'(\alpha_k) = 0$, i.e. $\nabla f(\mathbf{p}^{(k+1)})^T \nabla f(\mathbf{p}^{(k)}) = 0$. Since $\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)} = -\alpha_k \nabla f(\mathbf{p}^{(k)})$ and $\mathbf{p}^{(k+2)} - \mathbf{p}^{(k+1)} = -\alpha_{k+1}\nabla f(\mathbf{p}^{(k+1)})$, the two consecutive steps are scalar multiples of orthogonal gradients and are therefore orthogonal. For a quadratic with condition number $\kappa$ the resulting convergence is linear with $\dfrac{f(\mathbf{p}^{(k+1)}) - f(\mathbf{p}^*)}{f(\mathbf{p}^{(k)}) - f(\mathbf{p}^*)} \le \left(\dfrac{\kappa - 1}{\kappa + 1}\right)^2$, so a large $\kappa$ (e.g. $\kappa = 100 \Rightarrow$ rate $\approx 0.96$) gives slow zig-zagging convergence, whereas $\kappa = 10$ gives rate $\approx 0.67$.

   </details>
