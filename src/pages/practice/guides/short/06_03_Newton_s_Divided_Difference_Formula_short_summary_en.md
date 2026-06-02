**6.3. The Newton form of the Lagrange interpolation polynomial** 



## 1. Motivation: Why is the Newton form needed?

The classical **Lagrange formula** presented in chapter 6.1. has a very unpleasant practical disadvantage: if we add a **new measurement point** alongside our existing $x_0, \ldots, x_n$ base points, the previous calculations become completely useless. The degree of all Lagrange basis polynomials changes, so the whole expression has to be recalculated from scratch.

The brilliance of the **Newton form** is that it eliminates this deficiency: it constructs the polynomial in such a way that when a new point is added, the previously calculated terms remain unchanged, and **only a single new correction term needs to be added** to the end of the expression.



## 2. Mathematical derivation and identification of the coefficients

Suppose we interpolate the function $f$ at the points $x_0, x_1, \ldots, x_n$ ($y_i = f(x_i)$). Let's decompose the $n$-th degree polynomial $L_n(x)$ as a telescoping sum of the differences of the polynomials of degree one lower:


$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

Due to the fundamental theorem of algebra and the interpolation constraints, it can be shown that the difference of adjacent polynomials can be written in factored form:


$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1})$$

If we substitute these terms back, we get the **general structure of the Newton interpolation polynomial**:


$$L_n(x) = a_0 + a_1(x - x_0) + a_2(x - x_0)(x - x_1) + \cdots + a_n(x - x_0)\cdots(x - x_{n-1}) \tag{6.11}$$

### Connection to divided differences (Theorem 6.13.)

The most important theoretical step in the notes is proving that the unknown coefficients $a_i$ appearing in the Newton form **exactly coincide with the recursive divided differences known from chapter 6.2.**:


$$a_0 = f[x_0], \quad a_1 = f[x_0, x_1], \quad a_2 = f[x_0, x_1, x_2], \quad \ldots \quad a_n = f[x_0, x_1, \ldots, x_n]$$

Therefore, the final **Newton's divided difference interpolation formula** is:


$$\mathbf{L_n(x) = f[x_0] + \sum_{i=1}^{n} f[x_0, x_1, \ldots, x_i] \prod_{j=0}^{i-1} (x - x_j)} \tag{6.12}$$



## 3. Practical calculation: Example based on the table

To write down the polynomial, one must first prepare the pyramid-shaped **divided difference table** known from chapter 6.2. Consider the sample example with 4 data points ($n=3$) featured in the notes:

| $x_i$ | $f[x_i]$ (0th order) | 1st order | 2nd order | 3rd order |
| --- | --- | --- | --- | --- |
| **-1** | **-2** |  |  |  |
| 1 | 0 | **1** |  |  |
| 2 | -2 | -2 | **-1** |  |
| 3 | 2 | 4 | 3 | **1** |

### Writing down the polynomial based on the top diagonal:

According to formula (6.12), the coefficients of the Newton polynomial will strictly be the numbers appearing in the **top diagonal (row)** of the table (marked in bold in the table): **-2, 1, -1, 1**.

By gradually multiplying the root factors, we get the Newton form:


$$L_3(x) = \mathbf{-2} + \mathbf{1} \cdot (x - (-1)) + (\mathbf{-1}) \cdot (x - (-1))(x - 1) + \mathbf{1} \cdot (x - (-1))(x - 1)(x - 2)$$

$$L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2)$$

After expanding the brackets and algebraic simplification, the standard canonical form is:


$$L_3(x) = x^3 - 3x^2 + 2$$



## 4. The error formula of interpolation with divided differences

In chapter 6.1. we saw that the formula error $E_n(x)$ of the interpolation can be estimated with the help of higher-order derivatives. As a consequence of the derivation of the Newton form, the error can also be written in an alternative, derivative-free, purely divided difference form:

> **Theorem 6.14.:** If $L_n(x)$ is the interpolation polynomial of the function $f$ belonging to the base points $x_0, \ldots, x_n$, then the complete function $f(x)$ can be written as the sum of the polynomial and the divided difference remainder term:
> 
> $$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x] \cdot \omega_n(x) \tag{6.14}$$
> 
> 
> 
> Where $\omega_n(x) := (x-x_0)(x-x_1)\cdots(x-x_n)$ is the node polynomial, and the error factor is an $(n+1)$-th order divided difference that also contains the variable $x$.

### Severe theoretical consequence (Corollary 6.16.)

If we compare the Lagrange derivative error formula with the Newton form (6.14) above, from the equality of the two we get a direct mathematical proof for the **connection between divided differences and derivatives**:


$$f[x_0, x_1, \ldots, x_n, x] \cdot \omega_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \cdot \omega_n(x) \implies f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!} \tag{6.16}$$

This relationship proves that the $n$-th order divided difference is essentially the discrete, scaled equivalent of the $n$-th derivative of the function on the given interval.



## 5. Summary: Practical advantages of the Newton form

1. **Incremental expandability:** If we get a new point $x_{n+1}$, we simply write a new row at the bottom of the previous table, calculate the diagonal new divided difference ($f[x_0, \ldots, x_{n+1}]$), and append this as a single new term to our existing polynomial $L_n(x)$.
2. **Algorithmic efficiency:** The evaluation of the Newton form on a computer can be done extremely quickly and with little rounding error by applying the well-known **Horner's method (Horner scheme)**.
