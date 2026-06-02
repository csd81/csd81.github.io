**6.1. Lagrange Interpolation**

## 1. The basic problem of interpolation

In engineering and scientific practice, it often occurs that we do not know a continuous function for a process, but only discrete measurement points (data pairs) are available to us.

The **basic problem of interpolation**: Given are the pairwise distinct $x_0, x_1, \ldots, x_n \in [a,b]$ **base points** (or node points) and the corresponding $y_0, y_1, \ldots, y_n$ **function values**. We are looking for an easily manageable function $g$ (class) that exactly connects these points, i.e.:

$$g(x_i) = y_i, \qquad i = 0, 1, \ldots, n \tag{6.1}$$

The most fundamental approach is when the sought function $g$ is a **polynomial**. Since we have $n+1$ data points (from 0 to $n$), it is a natural expectation that the problem will be uniquely solved by a **polynomial of degree at most $n$** ($L_n$).

## 2. The Lagrange basis polynomials and the Lagrange formula

According to the theorem, the above interpolation problem **always has a single unique solution**. We can write down this polynomial explicitly, with a direct formula, using the **Lagrange basis polynomials**.

### Definition of the Lagrange basis polynomials ($l_k(x)$):

To each base point $k = 0, 1, \ldots, n$, we assign an $n$-th degree polynomial with the following product formula:

$$l_k(x) := \prod_{\substack{j=0 \\ j \neq k}}^{n} \frac{x - x_j}{x_k - x_j} = \frac{(x - x_0) \cdots (x - x_{k-1})(x - x_{k+1}) \cdots (x - x_n)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_n)} \tag{6.2}$$

#### Key property (Kronecker delta property):

The basis polynomials are designed by their structure to yield the following when evaluated at the base points:

$$l_k(x_i) = \begin{cases} 1, & \text{if } i = k \\ 0, & \text{if } i \neq k \end{cases}$$

### The Lagrange interpolation polynomial:

Utilizing the above property of the basis polynomials, the sought polynomial $L_n(x)$ is produced simply as the linear combination of the given $y_k$ values and the basis polynomials:

$$\mathbf{L_n(x) = \sum_{k=0}^{n} y_k l_k(x)} \tag{6.3}$$

If we substitute an arbitrary base point $x_i$, all terms become zero except the $i$-th (where $l_i(x_i)=1$), so $L_n(x_i) = y_i \cdot 1 = y_i$, i.e., the polynomial indeed interpolates perfectly.

## 3. Error analysis (Formula error)

If interpolation is used to replace an existing but complicated function $f(x)$ (where $y_i = f(x_i)$), an important engineering question is how much error we commit between the base points.

> **Theorem (Formula error):** Suppose that $f \in C^{n+1}[a,b]$. Then for every $x \in [a,b]$ there exists an interior point $\xi_x \in (a,b)$ with which the deviation (remainder term) between the true function and the interpolation polynomial can be written in the following form:
> 
> $$E_n(x) = f(x) - L_n(x) = \frac{f^{(n+1)}(\xi_x)}{(n+1)!} \omega_n(x)$$
> 
> 
> 
> Where $\omega_n(x) := \prod_{i=0}^{n} (x - x_i) = (x-x_0)(x-x_1)\cdots(x-x_n)$ is the so-called **node polynomial**.

### Practical upper bound of the error:

$$|f(x) - L_n(x)| \leq \frac{M_{n+1}}{(n+1)!} |\omega_n(x)|, \qquad \text{where } M_{n+1} := \max_{t \in [a,b]} |f^{(n+1)}(t)|$$

*Warning (Runge's phenomenon):* Although we might think that by increasing the number of base points ($n$) the error decreases everywhere, for high-degree polynomials with uniformly distributed base points, the error at the edges of the interval can start to oscillate wildly (this is called Runge's phenomenon).

## 4. Bivariate Lagrange interpolation

The principle can be extended to two-dimensional, rectangular domains as well. If we fix $n+1$ points ($x_i$) in the $x$-direction and $m+1$ points ($y_j$) in the $y$-direction, then the following bivariate interpolation polynomial can be fitted to the grid of the given surface points $z_{ij} = f(x_i, y_j)$:

$$L_{n,m}(x, y) := \sum_{i=0}^{n} \sum_{j=0}^{m} z_{ij} l_i(x) \tilde{l}_j(y) \tag{6.5}$$

Where $l_i(x)$ are the univariate Lagrange basis polynomials corresponding to the $x$ base points, while $\tilde{l}_j(y)$ are those corresponding to the $y$ base points.

### Practical example from the notes:

The notes present a $3 \times 2$ grid point system (quadratic case in $x$, linear in $y$). By algebraic expansion and arrangement of formula (6.5), the following bivariate polynomial is obtained for the given points:

$$L_{2,1}(x, y) = -\frac{1}{2}x^2 y + \frac{5}{2}x^2 + \frac{3}{2}xy - \frac{11}{2}x - \frac{1}{2}y + 2$$

## 5. Summary and practical context

Lagrange interpolation is a fundamental and theoretically clean mathematical tool, as it provides the interpolation polynomial explicitly, with a direct formula. However, its disadvantage is that if we receive a new measurement point, the entire basis polynomial system and the combination sum must be recalculated from scratch. (This practical difficulty led to the development of Newton's divided differences and spline interpolations).
