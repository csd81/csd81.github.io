### 3.2. Gaussian Elimination, Pivoting Strategies — Partial Pivoting

*Partial pivoting* (or *maximal column pivoting*): before the $k$th step of the elimination, we select the element with the largest magnitude in the $k$th column in and under the main diagonal, i.e., let

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(The largest element is in the $l$th row.)

$$\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{1,k+1} & \cdots & a_{1n} \\
0 & a_{22} & \cdots & a_{2,k-1} & a_{2k} & a_{2,k+1} & \cdots & a_{2n} \\
\vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & a_{k-1,k-1} & a_{k-1,k} & a_{k-1,k+1} & \cdots & a_{k-1,n} \\
0 & 0 & \cdots & 0 & \boxed{a_{kk}} & a_{k,k+1} & \cdots & a_{kn} \\
\vdots & & & & \boxed{a_{lk}} & & & \vdots \\
0 & 0 & \cdots & 0 & a_{nk} & a_{n,k+1} & \cdots & a_{nn}
\end{pmatrix}$$

We interchange the $k$th and $l$th rows, and then continue with the elimination.

### Theorem

*The next statements are equivalent:*

(i) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ can be solved by Gaussian elimination with partial pivoting,*

(ii) $\det(\mathbf{A}) \neq 0$,

(iii) *the matrix $\mathbf{A}$ is invertible,*

(iv) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution for all $\mathbf{b}$.*

**Proof.** We show that (i) and (ii) are equivalent. Suppose first that (i) holds. Let $\mathbf{A}^{(0)} := \mathbf{A}$, and let $\mathbf{A}^{(k)}$ be the coefficient matrix in the Gaussian elimination after the $k$th step. The properties of the determinants yield that

$$\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)})$$

if there was no row change in the $k$th step, and

$$\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)})$$

if there was a row change. Since the Gaussian elimination can be performed by the assumption, the triangular system corresponding to the coefficient matrix $\mathbf{A}^{(n-1)}$ of the last step is solvable, therefore

$$\det(\mathbf{A}^{(n-1)}) \neq 0.$$

But this implies

$$\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0.$$

Suppose now that the Gaussian elimination with partial pivoting terminates before the $k$th step. Then $a_{ik}^{(k-1)} = 0$ for all $i = k, \ldots, n$, i.e.,

$$\mathbf{A}^{(k-1)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \cdots & a_{1n} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2n}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \cdots & a_{k-1,n}^{(k-2)} \\
0 & 0 & \cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\
\vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)}
\end{pmatrix}.$$

Hence

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0 = \det(\mathbf{A}). \qquad\square$$

### Example

Solve the previous system using Gaussian elimination with partial pivoting:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & 0 & -\frac{143}{24} & \frac{143}{24} \end{pmatrix}.$$

The solution is $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$.

---

