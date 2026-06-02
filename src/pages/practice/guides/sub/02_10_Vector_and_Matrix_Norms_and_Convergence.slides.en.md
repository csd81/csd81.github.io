## 2.9 Vector and Matrix Norms and Convergence

We recall the properties of the absolute value of a real number:

1. $|x| \geq 0$, and $|x| = 0$ if and only if $x = 0$;
2. $|cx| = |c||x|$, for all $c, x \in \mathbb{R}$;
3. $|x + y| \leq |x| + |y|$, for all $x, y \in \mathbb{R}$. (triangle inequality)

The absolute value of $x$ gives back the distance of $x$ from the origin. The distance between $x$ and $y$ is given by $|x - y|$.

The components of the vector $\mathbf{x} \in \mathbb{R}^n$ are denoted by

$$\mathbf{x} = (x_1, x_2, \ldots, x_n)^T.$$

### Definition

The function $\|\cdot\|\colon \mathbb{R}^n \to \mathbb{R}$ is called **vector norm** if

1. $\|\mathbf{x}\| \geq 0$ for all $\mathbf{x} \in \mathbb{R}^n$, and $\|\mathbf{x}\| = 0$ if and only if $\mathbf{x} = \mathbf{0}$,
2. $\|c\mathbf{x}\| = |c|\|\mathbf{x}\|$ for all $c \in \mathbb{R}$ and $\mathbf{x} \in \mathbb{R}^n$,
3. (triangle inequality:) $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.

### Theorem

For any vector norm $\|\cdot\|$ it follows that

(i) $\bigl|\|\mathbf{x}\| - \|\mathbf{y}\|\bigr| \leq \|\mathbf{x} - \mathbf{y}\|$,

(ii) $\|\cdot\|$ is a continuous function on $\mathbb{R}^n$.

**Proof.** The triangle inequality yields

$$\|\mathbf{x}\| = \|\mathbf{x} - \mathbf{y} + \mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\| + \|\mathbf{y}\|.$$

Hence we get

$$\|\mathbf{x}\| - \|\mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\|.$$

Similarly, $\|\mathbf{y}\| - \|\mathbf{x}\| \leq \|\mathbf{x} - \mathbf{y}\|$ satisfies too, so part (i) follows. The continuity of $\|\cdot\|$ follows from part (i).

Let $p \geq 1$, and define the so-called **$p$-norm**:

$$\|\mathbf{x}\|_p := \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Clearly, $\|\mathbf{x}\|_p \geq 0$, and $\|\mathbf{x}\|_p = 0$ if and only if $\mathbf{x} = \mathbf{0}$. We have

$$\|c\mathbf{x}\|_p = \left(\sum_{i=1}^n |cx_i|^p\right)^{1/p} = \left(|c|^p \sum_{i=1}^n |x_i|^p\right)^{1/p} = |c|\|\mathbf{x}\|_p.$$

It can be shown that $\|\cdot\|_p$ satisfies the triangle inequality too, i.e., $\|\cdot\|_p$ is a norm for all $p \geq 1$. The norm corresponding to $p = 2$, i.e.,

$$\|\mathbf{x}\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$$

is called the **Euclidean norm** or **2-norm**.

Another special case is the **1-norm**:

$$\|\mathbf{x}\|_1 := \sum_{i=1}^n |x_i|.$$

We will also use the following vector norm, the so-called **infinity norm** or **maximum norm**

$$\|\mathbf{x}\|_\infty := \max_{i=1,\ldots,n} |x_i|.$$

We have $\|\mathbf{x}\|_\infty \geq 0$, and $\|\mathbf{x}\|_\infty = 0$ if and only if $\mathbf{x} = \mathbf{0}$.
Consider

$$\|c\mathbf{x}\|_\infty = \max_{i=1,\ldots,n}|cx_i| = \max_{i=1,\ldots,n}|c||x_i| = |c|\max_{i=1,\ldots,n}|x_i| = |c|\|\mathbf{x}\|_\infty.$$

For a fixed $i$ we have

$$|x_i + y_i| \leq |x_i| + |y_i| \leq \max_{i=1,\ldots,n}|x_i| + \max_{i=1,\ldots,n}|y_i| = \|\mathbf{x}\|_\infty + \|\mathbf{y}\|_\infty.$$

Since the right-hand side is independent of $i$, we get

$$\|\mathbf{x} + \mathbf{y}\|_\infty = \max_{i=1,\ldots,n}|x_i + y_i| \leq \|\mathbf{x}\|_\infty + \|\mathbf{y}\|_\infty,$$

hence $\|\cdot\|_\infty$ is a norm.

### Theorem (Cauchy–Bunyakovsky–Schwarz inequality)

For every $x_1, \ldots, x_n, y_1, \ldots, y_n \in \mathbb{R}$ it follows

$$\left(\sum_{i=1}^n x_i y_i\right)^2 \leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2,$$

where equality holds if and only if there exists $\lambda \in \mathbb{R}$ such that $y_i = \lambda x_i$ for every $i = 1, 2, \ldots, n$.

**Proof.** Consider the second-order polynomial

$$p(t) := t^2 \sum_{i=1}^n x_i^2 - 2t \sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2.$$

Then

$$p(t) = \sum_{i=1}^n (tx_i - y_i)^2 \geq 0$$

holds for all $t$, so $p$ may not have two distinct real roots, i.e.,

$$4\left(\sum_{i=1}^n x_i y_i\right)^2 - 4 \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2 \leq 0.$$

This yields the CBS inequality. $p$ has one real root if and only if its discriminant is 0. $p(t) = 0$ holds for some $t = \lambda$ if and only if $y_i = \lambda x_i$ for all $i = 1, 2, \ldots, n$.

Taking a square root for both sides of the Cauchy–Bunyakovsky–Schwarz inequality and using vector notation we get:

### Corollary

For all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ it follows

$$|\mathbf{x}^T \mathbf{y}| \leq \|\mathbf{x}\|_2 \|\mathbf{y}\|_2,$$

where the equality is satisfied if and only if there exists $\lambda \in \mathbb{R}$ such that $\mathbf{y} = \lambda \mathbf{x}$.

Using the Cauchy–Bunyakovsky–Schwarz inequality we get

$$\begin{aligned}
\|\mathbf{x} + \mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i + y_i)^2 \\
&= \sum_{i=1}^n x_i^2 + 2\sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2 + 2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2} + \sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2} + \sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2 + \|\mathbf{y}\|_2)^2,
\end{aligned}$$

which shows that the Euclidean norm satisfies the triangle inequality.

For two-dimensional vectors $\mathbf{x} = (x_1, x_2)$ we identify the point $(x_1, x_2)$ in a coordinate system with a position vector. Then the length of this vector is

$$\|\mathbf{x}\|_2 = \sqrt{x_1^2 + x_2^2}.$$

The distance between the two points $\mathbf{x} = (x_1, x_2)$ and $\mathbf{y} = (y_1, y_2)$ is

$$\|\mathbf{x} - \mathbf{y}\|_2 = \sqrt{(x_1 - y_1)^2 + (x_2 - y_2)^2}.$$

The expression $\|\mathbf{x}\|$ is called the **length** of the vector, which is the distance between $\mathbf{x}$ and $\mathbf{0}$. The **distance** between the vectors $\mathbf{x}$ and $\mathbf{y}$ is defined as the real number

$$\|\mathbf{x} - \mathbf{y}\|.$$

Let $\mathbf{p}^{(k)}$ be a sequence of $n$-dimensional vectors, and let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. We say that the sequence $\mathbf{p}^{(k)}$ **converges** to $\mathbf{p}$ if

$$\lim_{k \to \infty} \|\mathbf{p}^{(k)} - \mathbf{p}\| = 0.$$

### Theorem

Let $|\cdot|$ and $\|\cdot\|$ be two vector norms, and $\mathbf{p}^{(k)}$ be a sequence in $\mathbb{R}^n$. Then $\lim_{k \to \infty}|\mathbf{p}^{(k)} - \mathbf{p}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{p}^{(k)} - \mathbf{p}\| = 0$.

**Proof.** It is enough to show that $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \to 0$, where $\|\cdot\|_1$ is a fixed norm on $\mathbb{R}^n$. It holds if we show that there exist constants $m$ and $M$ such that

$$m\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \leq \|\mathbf{p}^{(k)} - \mathbf{p}\| \leq M\|\mathbf{p}^{(k)} - \mathbf{p}\|_1. \tag{17}$$

Let $E := \{\mathbf{x} \in \mathbb{R}^n\colon \|\mathbf{x}\|_1 = 1\}$. Then $E$ is a bounded and closed subset of $\mathbb{R}^n$, therefore the continuous function $\|\cdot\|$ takes its maximum and minimum on $E$. Let denote them by $M$ and $m$, respectively. Let $\mathbf{x} = (\mathbf{p}^{(k)} - \mathbf{p})/\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. Then $\mathbf{x} \in E$, and hence $m \leq \|\mathbf{x}\| \leq M$, which yields (17) after multiplication by $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$.

### Theorem

Let the $i$th components of the vectors $\mathbf{p}^{(k)}$ and $\mathbf{p}$ denoted by $p_i^{(k)}$ and $p_i$, respectively. Then the sequence $\mathbf{p}^{(k)}$ converges to $\mathbf{p}$ if and only if $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$ as $k \to \infty$.

**Proof.** Applying the last theorem, we have $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if

$$\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 = \sum_{i=1}^n |p_i^{(k)} - p_i| \to 0,$$

which is satisfied exactly when $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$.

The set of $n \times n$-dimensional real matrices is denoted by $\mathbb{R}^{n \times n}$. Let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$.

### Definition

The function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ defined by the formula

$$\|\mathbf{A}\| := \sup_{\mathbf{x} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

is called the **matrix norm** generated by the vector norm $\|\cdot\|$.

Here the sup (supremum) denotes the least upper bound, i.e., the smallest $M$ with the property that

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq M, \qquad \text{for all } \mathbf{x} \neq \mathbf{0}.$$

It is possible to show that in the definition of the matrix norm sup can be replaced by max, i.e., there exists a vector $\mathbf{x}$ such that

$$\|\mathbf{A}\| = \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}.$$

### Theorem

For every $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ it follows

(i) $\|\mathbf{A}\| \geq 0$, and $\|\mathbf{A}\| = 0$ if and only if $\mathbf{A} = \mathbf{0}$,
(ii) $\|c\mathbf{A}\| = |c|\|\mathbf{A}\|$ for all $c \in \mathbb{R}$,
(iii) (triangle inequality:) $\|\mathbf{A} + \mathbf{B}\| \leq \|\mathbf{A}\| + \|\mathbf{B}\|$,
(iv) $\|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\|\|\mathbf{x}\|$, for all $\mathbf{x} \in \mathbb{R}^n$,
(v) $\|\mathbf{A}\mathbf{B}\| \leq \|\mathbf{A}\|\|\mathbf{B}\|$,
(vi) $\|\mathbf{A}\| = \sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\| = 1\}$.

**Proof.**
(ii) $\|c\mathbf{A}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|c\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{|c|\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = |c|\sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = |c|\|\mathbf{A}\|$
(iii) $\|\mathbf{A} + \mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|(\mathbf{A} + \mathbf{B})\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\dfrac{\|\mathbf{A}\mathbf{x}\| + \|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| + \|\mathbf{B}\|$

**Proof cont.** Part (iv) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{y} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|} = \|\mathbf{A}\|.$$

Using (iv) we get

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|,$$

hence we get (v) from

$$\|\mathbf{A}\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|.$$

Finally, (vi) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|.$$

### Theorem

Let $|\cdot|$ and $\|\cdot\|$ be two vector norms and we consider the corresponding matrix norms. Let $\mathbf{A}^{(k)}$ be a sequence in $\mathbb{R}^{n \times n}$. Then $\lim_{k \to \infty}|\mathbf{A}^{(k)} - \mathbf{A}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$.

**Proof.** We show that there exist nonnegative constants $l$ and $L$ such that

$$l|\mathbf{B}| \leq \|\mathbf{B}\| \leq L|\mathbf{B}|, \qquad \mathbf{B} \in \mathbb{R}^{n \times n}.$$

We know that there exist positive constants $m$ and $M$ such that

$$m|\mathbf{x}| \leq \|\mathbf{x}\| \leq M|\mathbf{x}|, \qquad \mathbf{x} \in \mathbb{R}^n.$$

Then

$$\frac{m}{M}|\mathbf{B}| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|} \leq \|\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|} = \frac{M}{m}|\mathbf{B}|.$$

### Theorem

Let $\mathbf{A} = (a_{ij}) \in \mathbb{R}^{n \times n}$. Then the matrix norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms satisfy

$$\|\mathbf{A}\|_1 = \max_{j=1,\ldots,n} \sum_{i=1}^n |a_{ij}|,$$

and

$$\|\mathbf{A}\|_\infty = \max_{i=1,\ldots,n} \sum_{j=1}^n |a_{ij}|.$$

**Proof.** Using the definition of the $\|\cdot\|_1$ vector norm and the triangle inequality we get

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n \left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n \sum_{j=1}^n |a_{ij} x_j| \\
&= \sum_{j=1}^n |x_j| \sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \|\mathbf{x}\|_1,
\end{aligned}$$

**Proof cont.** hence

$$\|\mathbf{A}\|_1 \leq \max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|.$$

Suppose

$$\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}| = \sum_{i=1}^n |a_{ik}|.$$

We get the statement by multiplying $\mathbf{A}$ and $\mathbf{e}^{(k)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$, where $e_i^{(k)} = 0$ if $i \neq k$ and $e_k^{(k)} = 1$. Indeed,

$$\mathbf{A}\mathbf{e}^{(k)} = (a_{1k}, a_{2k}, \ldots, a_{nk})^T,$$

therefore

$$\|\mathbf{A}\mathbf{e}^{(k)}\|_1 = \sum_{i=1}^n |a_{ik}|.$$

### Theorem

1. If the vector sequence $\mathbf{p}^{(k)}$ is convergent, then its limit is unique.
2. If $\mathbf{p}^{(k)} \to \mathbf{p}$ and $\mathbf{q}^{(k)} \to \mathbf{q}$, $\alpha, \beta \in \mathbb{R}$, then the sequence $\alpha \mathbf{p}^{(k)} + \beta \mathbf{q}^{(k)}$ is also convergent, and $\alpha \mathbf{p}^{(k)} + \beta \mathbf{q}^{(k)} \to \alpha \mathbf{p} + \beta \mathbf{q}$.
3. If $c_k \to c$ a real sequence and $\mathbf{p}^{(k)} \to \mathbf{p}$, then $c_k \mathbf{p}^{(k)} \to c\mathbf{p}$.
4. If $\mathbf{p}^{(k)} \to \mathbf{p}$, then $\mathbf{A}\mathbf{p}^{(k)} \to \mathbf{A}\mathbf{p}$ for all $\mathbf{A} \in \mathbb{R}^{n \times n}$.
5. (Cauchy's criterion for convergence) $\mathbf{p}^{(k)}$ is a convergent sequence if and only if it is a Cauchy sequence, i.e., for every $\varepsilon > 0$ there exists a $k_0 > 0$ such that $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| < \varepsilon$ for all $k, m > k_0$.

### Theorem (Lagrange's Mean Value Theorem)

Let $\|\cdot\|$ be a fixed vector norm on $\mathbb{R}^n$, and consider the generated matrix norm. Let $E \subset \mathbb{R}^n$ be an open and convex set, $\mathbf{f}\colon E \to \mathbb{R}^n$ be continuously partially differentiable, $\mathbf{x}, \mathbf{y} \in E$. Then

$$\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\| \leq \max_{t \in [0,1]} \|\mathbf{f}'(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))\| \cdot \|\mathbf{x} - \mathbf{y}\|.$$

**Proof.** We prove the statement only for the Euclidean norm $\|\cdot\| = \|\cdot\|_2$. Clearly, we can assume that $\mathbf{f}(\mathbf{x}) \neq \mathbf{f}(\mathbf{y})$. Let

$$\mathbf{h} := \frac{\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2}.$$

Then $\|\mathbf{h}\|_2 = 1$. Let $\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T$, $\mathbf{h} = (h_1, \ldots, h_n)^T$. We define the real function

$$g(t) := \mathbf{h}^T \mathbf{f}(\mathbf{y} + t(\mathbf{x} - \mathbf{y})) = \sum_{i=1}^n h_i f_i(\mathbf{y} + t(\mathbf{x} - \mathbf{y})).$$

Then, using the Lagrange's Mean Value Theorem for single variable functions and the chain rule, we get

**Proof cont.**

$$\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) &= g(1) - g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T (\mathbf{x} - \mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})
\end{aligned}$$

for some $\xi \in (0,1)$. Therefore the definition of $\mathbf{h}$, the vector form of the Cauchy–Bunyakovsky–Schwarz inequality and $\|\mathbf{h}\|_2 = 1$ yield

$$\begin{aligned}
\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y}) \\
&\leq \|\mathbf{h}\|_2 \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))\|_2 \|\mathbf{x} - \mathbf{y}\|_2.
\end{aligned}$$

---

