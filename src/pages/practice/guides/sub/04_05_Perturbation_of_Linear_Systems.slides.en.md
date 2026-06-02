## 4.5. Perturbation of Linear Systems

> **Example.** Consider the linear system
> $$
> \begin{array}{rcrcrcr}
> x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\
> \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\
> \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1.
> \end{array}
> $$
> Its exact solution is $x_1 = 3$, $x_2 = -24$ and $x_3 = 30$. Next suppose we compute the coefficients of the previous linear system up to 3 decimal digits, i.e., consider the system
> $$
> \begin{array}{rcrcrcr}
> y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\
> 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\
> 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1.
> \end{array}
> $$
> Its solution is $y_1 = 3.4460555$, $y_2 = -26.2735192$ and $y_3 = 32.1042167$. The difference of the two solutions is:
> $$|x_1 - y_1| = 0.4460555, \quad |x_2 - y_2| = 2.2735192, \quad |x_3 - y_3| = 2.1042167$$
> $$\frac{|x_1 - y_1|}{|x_2|} = 0.1486852, \quad \frac{|x_2 - y_2|}{|x_2|} = 0.09472997, \quad \frac{|x_3 - y_3|}{|x_3|} = 0.07014056$$

Consider the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}. \tag{5}$$

Suppose that instead of (5) we solve the linear system

$$\mathbf{A}\bar{\mathbf{x}} = \bar{\mathbf{b}}, \tag{6}$$

where $\bar{\mathbf{b}} := \mathbf{b} + \Delta\mathbf{b}$ is a perturbation of $\mathbf{b}$ by $\Delta\mathbf{b}$. Its exact solution is denoted by $\bar{\mathbf{x}}$.

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, $\mathbf{x}$ and $\bar{\mathbf{x}}$ be solutions of the linear systems (5) and (6), respectively. Then
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

> **Proof.** Subtracting (5) and (6) we get
> $$\mathbf{A}(\mathbf{x} - \bar{\mathbf{x}}) = \mathbf{b} - \bar{\mathbf{b}},$$
> hence
> $$\mathbf{x} - \bar{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \bar{\mathbf{b}}),$$
> therefore,
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| = \|\mathbf{A}^{-1}(\mathbf{b} - \bar{\mathbf{b}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \bar{\mathbf{b}}\|.$$
> Using this and the inequality
> $$\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> it follows
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

Now we consider the general case, when we perturb both the coefficient matrix and the right-hand-side of the system. We consider the linear system

$$\tilde{\mathbf{A}}\bar{\mathbf{x}} = \bar{\mathbf{b}}, \tag{7}$$

where $\|\mathbf{b} - \bar{\mathbf{b}}\|$ and $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ are "small".

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, and $\tilde{\mathbf{A}}$ be such that
> $$\|\mathbf{A} - \tilde{\mathbf{A}}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Let $\mathbf{x}$ and $\bar{\mathbf{x}}$ be the exact solutions of (5) and (7), respectively. Then
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

The following properties of the condition number can be proved easily.

> **Theorem.** Let $\|\cdot\|$ be a fixed matrix norm and $\mathrm{cond}(\cdot)$ be the corresponding condition number function. Then
>
> &nbsp;&nbsp;(i) $\mathrm{cond}(\mathbf{A}) \geq 1$,
>
> &nbsp;&nbsp;(ii) $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$
>
> hold for all invertible matrix $\mathbf{A}$.

The number $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ is called the **spectral condition number** of the matrix $\mathbf{A}$.

> **Theorem (Gastinel).** Let $\|\cdot\|$ be a matrix norm, $\mathbf{A}$ be invertible. Then
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ is singular} \right\}.$$

An example for an ill-conditioned matrix is the so-called **Hilbert-matrix**:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

**Spectral condition number of the Hilbert-matrix**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
