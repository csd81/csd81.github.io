## 2.11 Newton's Method in $n$ dimensions

Let $U \subset \mathbb{R}^n$ an open set, $\mathbf{f}\colon U \to \mathbb{R}^n$, consider the nonlinear system

$$\mathbf{f}(\mathbf{x}) = \mathbf{0}.$$

Fix a vector $\mathbf{p}^{(k)} \in U$. As in the scalar case, we approximate $\mathbf{f}$ by its linear part

$$\mathbf{f}(\mathbf{p}^{(k)}) + \mathbf{f}'(\mathbf{p}^{(k)})(\mathbf{x} - \mathbf{p}^{(k)}) = \mathbf{0}.$$

Its root is

$$\bar{\mathbf{x}} = \mathbf{p}^{(k)} - (\mathbf{f}'(\mathbf{p}^{(k)}))^{-1}\mathbf{f}(\mathbf{p}^{(k)}).$$

Therefore we define the **Newton's method** by the iteration

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{22}$$

### Theorem

Let $\mathbf{f} \in C^2$, $\mathbf{f}(\mathbf{p}) = \mathbf{0}$ and suppose the matrix $\mathbf{f}'(\mathbf{p})$ is invertible. Then the Newton's iteration (22) locally quadratically converges to $\mathbf{p}$.

**Proof.** The Newton's method is a fixed-point iteration with the iteration function

$$\mathbf{g}(\mathbf{x}) = \mathbf{x} - (\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x}).$$

Let $(\mathbf{f}'(\mathbf{x}))^{-1} = (b_{ij}(\mathbf{x}))_{n \times n}$. Then

$$\sum_{j=1}^n b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l} = \delta_{il} = \begin{cases} 1, & i = l, \\ 0, & i \neq l. \end{cases} \tag{23}$$

Consider the $i$th component of $\mathbf{g}$:

$$g_i(\mathbf{x}) = x_i - \sum_{j=1}^n b_{ij}(\mathbf{x}) f_j(\mathbf{x}).$$

**Proof cont.** Taking its partial derivative with respect to $x_l$ we get

$$\frac{\partial g_i(\mathbf{x})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n \left(\frac{\partial b_{ij}(\mathbf{x})}{\partial x_l}f_j(\mathbf{x}) + b_{ij}(\mathbf{x})\frac{\partial f_j(\mathbf{x})}{\partial x_l}\right).$$

At the point $\mathbf{x} = \mathbf{p}$ we get, using relations $f_j(\mathbf{p}) = 0$ and (23), that

$$\frac{\partial g_i(\mathbf{p})}{\partial x_l} = \delta_{il} - \sum_{j=1}^n b_{ij}(\mathbf{p})\frac{\partial f_j(\mathbf{p})}{\partial x_l} = 0.$$

Therefore

$$\mathbf{g}'(\mathbf{p}) = \mathbf{0},$$

and hence the iteration is locally quadratically convergent.

Applying formula

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'(\mathbf{p}^{(k)})\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)})$$

we need to compute the inverse of a matrix. Instead of it, in practice, we do the following: Introduce the notation

$$\mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)},$$

and rearrange equation into the form

$$\mathbf{f}'(\mathbf{p}^{(k)})\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}).$$

We solve it for $\mathbf{s}^{(k)}$, and let

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}.$$

### Example

Consider the system (18) of the last example. We apply the Newton's method for this system starting from the initial value $(-1.5, -1.5)^T$. The next table lists the numerical result. We observe quick convergence.

Newton's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ |
|---|---|---|
| 0 | $(-1.50000000000, -1.50000000000)^T$ | 2.500000e+00 |
| 1 | $(-1.25000000000, -0.52120413480)^T$ | 2.250000e+00 |
| 2 | $(\phantom{-}0.53188386800, -0.10035922100)^T$ | 4.681161e-01 |
| 3 | $(\phantom{-}0.98873605300, -0.00042581408)^T$ | 1.126395e-02 |
| 4 | $(\phantom{-}0.99999986610, -0.00000037764)^T$ | 1.313900e-06 |

---

