## 4.5. Perturbation of Linear Systems

Consider the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}. \tag{4.25}$$

Suppose that instead of (4.25) we solve the linear system

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.26}$$

where $\tilde{\mathbf{b}} := \mathbf{b} + \Delta\mathbf{b}$ is a perturbation of $\mathbf{b}$ by $\Delta\mathbf{b}$. Its exact solution is denoted by $\tilde{\mathbf{x}}$. The next result gives a relation between the solutions of the two problems.

**Theorem 4.22.** *Let* $\mathbf{A}$ *be a nonsingular square matrix,* $\mathbf{x}$ *and* $\tilde{\mathbf{x}}$ *be solutions of the linear systems* (4.25) *and* (4.26), *respectively. Then*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

**Proof.** Subtracting (4.25) and (4.26) we get $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}}$, hence $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})$, therefore, $\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|$. Using this and the inequality $\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ it follows

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

$\square$

The theorem says that one order of magnitude increase in $\mathrm{cond}(\mathbf{A})$ can result in one order of magnitude increase in the relative error of the approximation, or in other words, a loss of one significant digit in the approximation.

Now we consider the general case, when we perturb both the coefficient matrix and the right-hand-side of the system. We consider the linear system

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.27}$$

where $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ and $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ are "small".

**Theorem 4.23.** *Let* $\mathbf{A}$ *be a nonsingular square matrix, and* $\tilde{\mathbf{A}}$ *be such that* $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$. *Let* $\mathbf{x}$ *and* $\tilde{\mathbf{x}}$ *be the exact solutions of* (4.25) *and* (4.27), *respectively. Then*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

**Proof.** First consider the relation $\tilde{\mathbf{A}} = \mathbf{A} - (\mathbf{A} - \tilde{\mathbf{A}}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))$. Since by our assumption $\|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\| < 1$, Corollary 4.4 yields that $\tilde{\mathbf{A}}$ is invertible, and

$$
\begin{aligned}
\|(\tilde{\mathbf{A}})^{-1}\| &\leq \|(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))^{-1}\| \|\mathbf{A}^{-1}\| \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\|} \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}.
\end{aligned}
$$

From equations (4.26) and (4.25) we get

$$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{x} - (\tilde{\mathbf{A}})^{-1}\tilde{\mathbf{b}} = (\tilde{\mathbf{A}})^{-1}(\tilde{\mathbf{A}}\mathbf{x} - \tilde{\mathbf{b}}) = (\tilde{\mathbf{A}})^{-1}(\mathbf{b} - \tilde{\mathbf{b}} - (\mathbf{A} - \tilde{\mathbf{A}})\mathbf{x}).$$

Therefore,

$$
\begin{aligned}
\|\mathbf{x} - \tilde{\mathbf{x}}\| &\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}(\|\mathbf{b} - \tilde{\mathbf{b}}\| + \|\mathbf{A} - \tilde{\mathbf{A}}\| \|\mathbf{x}\|) \\
&= \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A}\| \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \|\mathbf{x}\| \right).
\end{aligned}
$$

Dividing both sides by $\|\mathbf{x}\|$ and using relation $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ we get

$$
\begin{aligned}
\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} &\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right) \\
&\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right).
\end{aligned}
$$

$\square$

The following properties of the condition number can be proved easily.

**Theorem 4.24.** *Let* $\|\cdot\|$ *be a fixed matrix norm and* $\mathrm{cond}(\cdot)$ *be the corresponding condition number function. Then*

&nbsp;&nbsp;*1.* $\mathrm{cond}(\mathbf{A}) \geq 1$,

&nbsp;&nbsp;*2.* $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$

*hold for all invertible matrices* $\mathbf{A}$.

The number $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ is called the *spectral condition number* of the matrix $\mathbf{A}$. According to the previous result, the spectral condition number of a matrix is always less than any other condition number. Its disadvantage is that it is difficult to compute, since it requires the computation of eigenvalues of matrices.

We present the next result without proof.

**Theorem 4.25 (Gastinel).** *Let* $\|\cdot\|$ *be a matrix norm,* $\mathbf{A}$ *be invertible. Then*

$$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ is singular} \right\}.$$

The theorem implies that if the condition number of $\mathbf{A}$ is big, then there is a singular matrix close to $\mathbf{A}$.

An example for an ill-conditioned matrix is the so-called *Hilbert-matrix*:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

In Table 4.3 we computed the spectral condition number of the Hilbert-matrix for several values of $n$. We can observe that the spectral condition number (and hence all conditions numbers) increase quickly as $n$ increases.

### Exercises

1. Compute the spectral condition number of the matrix

$$\begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}.$$

2. Prove Theorem 4.24.

3. Show that

$$\mathrm{cond}_*(\mathbf{A}) = \frac{\max\{|\lambda_1|, \ldots, |\lambda_n|\}}{\min\{|\lambda_1|, \ldots, |\lambda_n|\}},$$

where $\lambda_1, \ldots, \lambda_n$ are the eigenvalues of the matrix $\mathbf{A}$.

**Table 4.3: Spectral condition number of the Hilbert-matrix**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
