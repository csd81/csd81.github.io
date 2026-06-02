## 4.3. Gauss–Seidel Iteration

> **Example.** Consider again the system of the previous example, and its equivalent form
> $$
> \begin{aligned}
> x_1 &= (9 - 2x_2 + x_3)/4 \\
> x_2 &= (-8 + 5x_1 + 2x_3)/10 \\
> x_3 &= (-3 - 2x_1 + 3x_2)/7.
> \end{aligned}
> $$
> Define the iteration
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (9 - 2x_2^{(k)} + x_3^{(k)})/4 \\
> x_2^{(k+1)} &= (-8 + 5x_1^{(k+1)} + 2x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (-3 - 2x_1^{(k+1)} + 3x_2^{(k+1)})/7.
> \end{aligned}
> $$
> This is called **Gauss–Seidel iteration**.

> **Example cont.**
>
> **Gauss–Seidel iteration**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | 0.3250000  | -0.9321429 |
> | 2  | 1.8544643  | -0.0591964 | -0.9837883 |
> | 3  | 2.0336511  | 0.0200679  | -1.0010141 |
> | 4  | 1.9897125  | -0.0053466 | -0.9993521 |
> | 5  | 2.0028353  | 0.0015472  | -1.0001470 |
> | 6  | 1.9991897  | -0.0004346 | -0.9999547 |
> | 7  | 2.0002286  | 0.0001234  | -1.0000124 |
> | 8  | 1.9999352  | -0.0000349 | -0.9999964 |
> | 9  | 2.0000183  | 0.0000099  | -1.0000010 |
> | 10 | 1.9999948  | -0.0000028 | -0.9999997 |
> | 11 | 2.0000015  | 0.0000008  | -1.0000001 |
> | 12 | 1.9999996  | -0.0000002 | -1.0000000 |

We define the **Gauss–Seidel iteration** to solve the $n$-dimensional linear system. For $k = 0, 1, 2, \ldots$ (if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$) we define

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4}$$

Equation (4) can be rearranged to

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

i.e., using matrix notation,

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

where $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ is defined in the previous section. So the Gauss–Seidel iteration can be written in the form

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$

with

$$\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U} \qquad \text{and} \qquad \mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}.$$

> **Theorem.** The Gauss–Seidel iteration is convergent for any initial value if and only if $\rho(\mathbf{T}_G) < 1$.

> **Corollary.** If $\|\mathbf{T}_G\| < 1$ in some matrix norm $\|\cdot\|$, then the Gauss–Seidel iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

> **Theorem.** If $\mathbf{A}$ is diagonally dominant, then the Gauss–Seidel iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

---

