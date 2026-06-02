### 3.2. Gaussian Elimination, Pivoting Strategies — Complete Pivoting

*Complete pivoting* or *maximal pivoting*: before the $k$th step of the elimination we find the first row index $l$ and column index $m$ such that

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(The largest element is located in the $l$th row and in the $m$th column.) Then we interchange the $k$th and $l$th rows and the $k$th and $m$th columns, and we continue with the elimination step.

### Example

Consider again the system examined in earlier examples, and here we solve it using Gaussian elimination with complete pivoting (the variable associated with each column is recorded below it):

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -\frac{5}{2} & 2 & -15 \\ 0 & 5 & \frac{1}{2} & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

### Example cont.

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & -\frac{1}{2} & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & 0 & -\frac{57}{23} & \frac{171}{23} \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}$$

The corresponding triangular system is

$$\begin{array}{rcrcrcrcr}
4x_4 & + & 2x_3 & - & x_2 & + & 2x_1 & = & -8 \\
& & 5x_3 & + & x_2 & + & x_1 & = & 19 \\
& & & - & \frac{23}{10}x_2 & + & \frac{11}{5}x_1 & = & -\frac{56}{5} \\
& & & & & - & \frac{57}{23}x_1 & = & \frac{171}{23}
\end{array}$$

The result is again $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

---

A square matrix $A \in \mathbb{R}^{n \times n}$ is called *row diagonally dominant* or simply *diagonally dominant* if

$$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|, \qquad i = 1, \ldots, n.$$

### Example

The matrix

$$\begin{pmatrix} 5 & -1 & 2 \\ 2 & -10 & 1 \\ -2 & 0 & 3 \end{pmatrix}$$

is diagonally dominant, since

$$5 > 1 + 2$$
$$10 > 2 + 1$$
$$3 > 2 + 0.$$

### Theorem

*If $\mathbf{A} \in \mathbb{R}^{n \times n}$ is diagonally dominant, then $\mathbf{A}$ is invertible.*

**Proof.** Suppose that $\mathbf{A}$ is not invertible. Then the linear system $\mathbf{A}\mathbf{x} = \mathbf{0}$ has a nontrivial solution $\mathbf{x} \neq \mathbf{0}$. Let $k$ be such that

$$|x_k| = \max\{|x_i| : i = 1, \ldots, n\}.$$

Then $x_k \neq 0$. Since $\sum_{j=1}^{n} a_{ij}x_j = 0$ for all $i = 1, \ldots, n$, we get $a_{kk}x_k = -\sum_{j=1, j\neq k}^{n} a_{kj}x_j$. Then the triangle-inequality yields

$$|a_{kk}x_k| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}x_j|,$$

and so

$$|a_{kk}| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}| \frac{|x_j|}{|x_k|} \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}|,$$

which is a contradiction. $\qquad\square$

### Theorem

*If the matrix $\mathbf{A}$ is diagonally dominant, then the Gaussian elimination can be performed on the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the method is stable with respect to the rounding errors.*

---

The square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ is called *positive definite* (*negative definite*) if $\mathbf{A}$ is symmetric and

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}x_i x_j > 0, \qquad \mathbf{x} \neq \mathbf{0},$$

($\mathbf{x}^T\mathbf{A}\mathbf{x} < 0$, respectively, for all $\mathbf{x} \neq \mathbf{0}$). The matrix $\mathbf{A}$ is called *positive semi-definite* (*negative semi-definite*) if $\mathbf{A}$ is symmetric and $\mathbf{x}^T\mathbf{A}\mathbf{x} \geq 0$ ($\mathbf{x}^T\mathbf{A}\mathbf{x} \leq 0$, respectively) for all $\mathbf{x}$.

### Example

The matrix

$$\mathbf{A} = \begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}$$

is positive definite since it is symmetric, and for $\mathbf{x} \neq \mathbf{0}$

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4x_1 - x_2 \\ -x_1 + 2x_2 \end{pmatrix}$$
$$= 4x_1^2 - 2x_1 x_2 + 2x_2^2 = 3x_1^2 + (x_1 - x_2)^2 + x_2^2 > 0.$$

### Theorem

*The symmetric matrix $\mathbf{A}$ is positive definite if and only if all of its upper left minors, the so-called principal minors are positive, i.e.,*

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n.$$

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\ a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\ a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \\ a_{41} & a_{42} & a_{43} & a_{44} & a_{45} \\ a_{51} & a_{52} & a_{53} & a_{54} & a_{55} \end{pmatrix}$$

### Theorem

*Let $\mathbf{A}$ be a symmetric $n \times n$ matrix, $\mathbf{b} \in \mathbb{R}^n$. Then $\mathbf{A}$ is positive definite if and only if the Gaussian elimination can be performed for the system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the pivot elements are all positive. Moreover, the method is stable with respect to the rounding errors.*

---

