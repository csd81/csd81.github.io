# Numerical Analysis

## 3. Linear Systems

**Ferenc Hartung**

University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---


## 3.1. Triangular Systems

### Example

Solve the linear system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

Solving the fourth equation for $x_4$ we get $x_4 = 4$. Substituting it to the third equation we get

$$x_3 = (-2 + x_4)/2 = 1.$$

Then the second equation yields

$$x_2 = (13 + x_3 - 2x_4)/3 = 2.$$

Finally, from the first equation we have

$$x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1.$$

---

We can generalize the method used in the previous example to solve the upper triangular $n$-dimensional linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$, i.e., a linear system of the form

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{1}$$

We formulate the method of *backward substitution* in the following algorithm.

---

**Algorithm: Backward substitution to solve a triangular system**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

The method of backward substitution can be performed if an only if

$$a_{ii} \neq 0 \qquad \text{for all } i = 1, \ldots, n.$$

Since

$$\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$$

for a triangular matrix, the backward substitution works if and only if the system (1) has a unique solution, i.e.,

$$\det(\mathbf{A}) \neq 0.$$

The *time complexity* of the algorithm is

$$1 + 2 + \cdots + n = n(n+1)/2 = n^2/2 + \mathcal{O}(n)$$

multiplications and divisions, and

$$1 + 2 + \cdots + n - 1 = (n-1)n/2 = n^2/2 + \mathcal{O}(n)$$

additions and subtractions. The notation $\mathcal{O}(n^k)$ denotes any polynomial with degree at most $k$.

---

