## 2.10. Vector and Matrix Norms and Convergence

The components of the vector $\mathbf{x} \in \mathbb{R}^n$ are denoted by $\mathbf{x} = (x_1, x_2, \ldots, x_n)^T$. The function $\|\cdot\|\colon \mathbb{R}^n \to \mathbb{R}$ is called *vector norm* if

1. $\|\mathbf{x}\| \geq 0$ for all $\mathbf{x} \in \mathbb{R}^n$, and $\|\mathbf{x}\| = 0$ if and only if $\mathbf{x} = \mathbf{0}$,
2. $\|c\mathbf{x}\| = |c|\|\mathbf{x}\|$ for all $c \in \mathbb{R}$ and $\mathbf{x} \in \mathbb{R}^n$,
3. (triangle inequality:) $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$.

**Theorem 2.41.** *For any vector norm $\|\cdot\|$ it follows that*

(i) $\bigl|\|\mathbf{x}\| - \|\mathbf{y}\|\bigr| \leq \|\mathbf{x} - \mathbf{y}\|$,

(ii) $\|\cdot\|$ *is a continuous function on $\mathbb{R}^n$.*

**Proof.** The triangle inequality yields $\|\mathbf{x}\| = \|\mathbf{x} - \mathbf{y} + \mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\| + \|\mathbf{y}\|$. Hence we get $\|\mathbf{x}\| - \|\mathbf{y}\| \leq \|\mathbf{x} - \mathbf{y}\|$. Similarly, $\|\mathbf{y}\| - \|\mathbf{x}\| \leq \|\mathbf{x} - \mathbf{y}\|$ holds too, so part (i) follows. The continuity of $\|\cdot\|$ follows from part (i). $\square$

Let $p \geq 1$, and define the so-called *$p$-norm*:

$$\|\mathbf{x}\|_p := \left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

It can be shown that $\|\cdot\|_p$ satisfies all the three requirements of the definition of a norm for all $p \geq 1$. The norm corresponding to $p = 2$, i.e., $\|\cdot\|_2$ is called *Euclidean norm*. Another special case is the *1-norm*:

$$\|\mathbf{x}\|_1 := \sum_{i=1}^n |x_i|.$$

We will also use the following vector norm, the so-called *infinity norm* or *maximum norm*

$$\|\mathbf{x}\|_\infty := \max_{i=1,\ldots,n} |x_i|.$$

It is left for the reader to show that $\|\cdot\|_1$ and $\|\cdot\|_\infty$ satisfy the norm properties (Exercise 1). The Euclidean norm is clearly satisfies the 1st and 2nd norm properties, but for the proof of the triangle inequality we need the following estimate, which is important in its own right.

**Theorem 2.42 (Cauchy–Bunyakovsky–Schwarz inequality).** *For every $x_1, \ldots, x_n, y_1, \ldots, y_n \in \mathbb{R}$ it follows*

$$\left(\sum_{i=1}^n x_i y_i\right)^2 \leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2,$$

*where equality holds if and only if there exists $\lambda \in \mathbb{R}$ such that $y_i = \lambda x_i$ for every $i = 1, 2, \ldots, n$.*

**Proof.** Consider the second-order polynomial $p(t) := t^2 \sum_{i=1}^n x_i^2 - 2t \sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2$. Then $p(t) = \sum_{i=1}^n (tx_i - y_i)^2 \geq 0$ holds for all $t$, so $p$ may not have two distinct real roots, i.e., its discriminant may not be positive:

$$4\left(\sum_{i=1}^n x_i y_i\right)^2 - 4 \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2 \leq 0.$$

This yields the Cauchy-Bunyakovsky-Schwarz inequality. $p$ has one real root if and only if its discriminant is 0, i.e., the inequality holds with equality. On the other hand, $p(t) = 0$ holds for some $t = \lambda$ if and only if $y_i = \lambda x_i$ for all $i = 1, 2, \ldots, n$. $\square$

Taking a square root for both sides of the Cauchy–Bunyakovsky–Schwarz inequality and using vector notation we get:

**Corollary 2.43.** *For all $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ it follows*

$$|\mathbf{x}^T \mathbf{y}| \leq \|\mathbf{x}\|_2 \|\mathbf{y}\|_2,$$

*where the equality is satisfied if and only if there exists $\lambda \in \mathbb{R}$ such that $\mathbf{y} = \lambda \mathbf{x}$.*

Using the Cauchy–Bunyakovsky–Schwarz inequality we get

$$\begin{aligned}
\|\mathbf{x} + \mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i + y_i)^2 \\
&= \sum_{i=1}^n x_i^2 + 2\sum_{i=1}^n x_i y_i + \sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2 + 2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2} + \sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2} + \sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2 + \|\mathbf{y}\|_2)^2,
\end{aligned}$$

which shows that the Euclidean norm satisfies the triangle inequality.

With the application of the norm we can define the length of a vector, distance between two vectors and the notion of convergence of vector sequences. The expression $\|\mathbf{x}\|$ is called the *length* of the vector, which is the distance between $\mathbf{x}$ and $\mathbf{0}$. The *distance* between the vectors $\mathbf{x}$ and $\mathbf{y}$ is defined as the real number $\|\mathbf{x} - \mathbf{y}\|$. Let $\mathbf{p}^{(k)}$ be a sequence of $n$-dimensional vectors, and let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. We say that the sequence $\mathbf{p}^{(k)}$ *converges* to $\mathbf{p}$ if

$$\lim_{k \to \infty} \|\mathbf{p}^{(k)} - \mathbf{p}\| = 0.$$

It can be proved that the notion of the convergence of a vector sequence is independent of the selection of the vector norm, i.e., if a vector sequence is convergent in a norm, it is convergent to the same limit in any other norm. This property is called in mathematical analysis as the vector norms are *equivalent* in $\mathbb{R}^n$.

**Theorem 2.44.** *Let $|\cdot|$ and $\|\cdot\|$ be two vector norms, and $\mathbf{p}^{(k)}$ be a sequence in $\mathbb{R}^n$. Then $\lim_{k \to \infty}|\mathbf{p}^{(k)} - \mathbf{p}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{p}^{(k)} - \mathbf{p}\| = 0$.*

**Proof.** It is enough to show that for any fixed vector norm $\|\cdot\|$, $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \to 0$. It holds if we show that there exist nonnegative constants $m$ and $M$ such that

$$m\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 \leq \|\mathbf{p}^{(k)} - \mathbf{p}\| \leq M\|\mathbf{p}^{(k)} - \mathbf{p}\|_1. \tag{2.25}$$

Let $E := \{\mathbf{x} \in \mathbb{R}^n\colon \|\mathbf{x}\|_1 = 1\}$. Then $E$ is a bounded and closed subset of $\mathbb{R}^n$, therefore Theorems 2.37 and 2.41 yield that the continuous function $\|\cdot\|$ takes its maximum and minimum on $E$. Let denote them by $M$ and $m$, respectively. Let $\mathbf{x} = (\mathbf{p}^{(k)} - \mathbf{p})/\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. Then $\mathbf{x} \in E$, and hence $m \leq \|\mathbf{x}\| \leq M$, which yields (2.25) after multiplication by $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1$. $\square$

**Theorem 2.45.** *Let $p_i^{(k)}$ and $p_i$ denote the $i$th components of the vectors $\mathbf{p}^{(k)}$ and $\mathbf{p}$, respectively. Then the sequence $\mathbf{p}^{(k)}$ converges to $\mathbf{p}$ if and only if $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$ as $k \to \infty$.*

**Proof.** Theorem 2.44 yields that $\|\mathbf{p}^{(k)} - \mathbf{p}\| \to 0$ if and only if $\|\mathbf{p}^{(k)} - \mathbf{p}\|_1 = \sum_{i=1}^n |p_i^{(k)} - p_i| \to 0$, which is satisfied exactly when $p_i^{(k)} \to p_i$ for all $i = 1, 2, \ldots, n$. $\square$

The set of $n \times n$-dimensional real matrices is denoted by $\mathbb{R}^{n \times n}$. Let $\|\cdot\|$ be a vector norm on $\mathbb{R}^n$. The function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ defined by the formula

$$\|\mathbf{A}\| := \sup_{\mathbf{x} \neq \mathbf{0}} \frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

is called the *matrix norm* generated by the vector norm $\|\cdot\|$. We note that both the vector and the matrix norms are denoted by the same symbol. It is possible to show that in the definition of the matrix norm sup can be replaced by max, i.e., there exists a vector $\mathbf{x}$ such that $\|\mathbf{A}\| = \tfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$. The following properties of the matrix norm can be proved easily:

**Theorem 2.46.** *For every $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ it follows*

(i) $\|\mathbf{A}\| \geq 0$, *and $\|\mathbf{A}\| = 0$ if and only if $\mathbf{A} = \mathbf{0}$,*

(ii) $\|c\mathbf{A}\| = |c|\|\mathbf{A}\|$ *for all $c \in \mathbb{R}$,*

(iii) *(triangle inequality:) $\|\mathbf{A} + \mathbf{B}\| \leq \|\mathbf{A}\| + \|\mathbf{B}\|$,*

(iv) $\|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\|\|\mathbf{x}\|$, *for all $\mathbf{x} \in \mathbb{R}^n$,*

(v) $\|\mathbf{A}\mathbf{B}\| \leq \|\mathbf{A}\|\|\mathbf{B}\|$,

(vi) $\|\mathbf{A}\| = \sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\| = 1\}$.

**Proof.** The proof of statements (i), (ii) and (iii) are left for the reader. Part (iv) follows from

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{y} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|} = \|\mathbf{A}\|.$$

Using (iv) we get

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|,$$

hence

$$\|\mathbf{A}\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\|\mathbf{B}\|.$$

Finally, (vi) follows from $\tfrac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|} = \left\|\mathbf{A}\tfrac{\mathbf{x}}{\|\mathbf{x}\|}\right\|$. $\square$

We note that the matrix norm could be defined in a more general way: a function $\|\cdot\|\colon \mathbb{R}^{n \times n} \to \mathbb{R}$ which satisfies parts (i)–(iii) of Theorem 2.46. Then there are matrix norms which are not generated by a vector norm. In this lecture note we will use only matrix norms generated by vector norms, so we use this notion in this restrictive sense.

We will need the notion of limits of matrix sequences later. We say that a matrix sequence $\mathbf{A}^{(k)}$ *converges* to a limit $\mathbf{A}$ if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$, where $\|\cdot\|$ is a matrix norm. The next theorem states that the limit of a matrix sequence is independent of the selection of the matrix norm, i.e., any matrix norms are equivalent.

**Theorem 2.47.** *Let $|\cdot|$ and $\|\cdot\|$ be two vector norms on $\mathbb{R}^n$, and we consider the corresponding matrix norms on $\mathbb{R}^{n \times n}$. Let $\mathbf{A}^{(k)}$ be a sequence in $\mathbb{R}^{n \times n}$. Then $\lim_{k \to \infty}|\mathbf{A}^{(k)} - \mathbf{A}| = 0$ if and only if $\lim_{k \to \infty}\|\mathbf{A}^{(k)} - \mathbf{A}\| = 0$.*

**Proof.** As in the proof of Theorem 2.44, it is enough to show that there exist nonnegative constants $l$ and $L$ such that

$$l|\mathbf{B}| \leq \|\mathbf{B}\| \leq L|\mathbf{B}|, \quad \mathbf{B} \in \mathbb{R}^{n \times n}.$$

From the proof of Theorem 2.44 we know that there exist positive constants $m$ and $M$ such that

$$m|\mathbf{x}| \leq \|\mathbf{x}\| \leq M|\mathbf{x}|, \quad \mathbf{x} \in \mathbb{R}^n.$$

Then

$$\frac{m}{M}|\mathbf{B}| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|} \leq \|\mathbf{B}\| = \sup_{\mathbf{x} \neq \mathbf{0}}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|} \leq \sup_{\mathbf{x} \neq \mathbf{0}}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|} = \frac{M}{m}|\mathbf{B}|,$$

which completes the proof. $\square$

For matrix norms we most frequently use the norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms. We have the following result for the computation of the corresponding matrix norms.

**Theorem 2.48.** *Let $\mathbf{A} = (a_{ij}) \in \mathbb{R}^{n \times n}$. Then the matrix norms generated by the $\|\cdot\|_1$ and $\|\cdot\|_\infty$ vector norms satisfy*

$$\|\mathbf{A}\|_1 = \max_{j=1,\ldots,n} \sum_{i=1}^n |a_{ij}|,$$

*and*

$$\|\mathbf{A}\|_\infty = \max_{i=1,\ldots,n} \sum_{j=1}^n |a_{ij}|.$$

**Proof.** We prove the first formula. The second formula is asked to be proved by the reader. Using the definition of the $\|\cdot\|_1$ vector norm and the triangle inequality we get

$$\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n \left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n \sum_{j=1}^n |a_{ij} x_j| \\
&= \sum_{j=1}^n |x_j|\sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right)\sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|\right) \|\mathbf{x}\|_1,
\end{aligned}$$

hence $\|\mathbf{A}\|_1 \leq \max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}|$. Suppose $\max_{j=1,\ldots,n}\sum_{i=1}^n |a_{ij}| = \sum_{i=1}^n |a_{ik}|$. We get the statement by multiplying $\mathbf{A}$ and $\mathbf{e}^{(k)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$, where $e_i^{(k)} = 0$ if $i \neq k$ and $e_k^{(k)} = 1$. Indeed, $\mathbf{A}\mathbf{e}^{(k)} = (a_{1k}, a_{2k}, \ldots, a_{nk})^T$, therefore $\|\mathbf{A}\mathbf{e}^{(k)}\|_1 = \sum_{i=1}^n |a_{ik}|$. $\square$

The following results generalize the properties of the convergence for the vector case. We formulate the statements without proofs.

**Theorem 2.49.**

1. *If the vector sequence $\mathbf{p}^{(k)}$ is convergent, then its limit is unique.*
2. *If $\mathbf{p}^{(k)} \to \mathbf{p}$ and $\mathbf{q}^{(k)} \to \mathbf{q}$, $\alpha, \beta \in \mathbb{R}$, then the sequence $\alpha\mathbf{p}^{(k)} + \beta\mathbf{q}^{(k)}$ is also convergent, and $\alpha\mathbf{p}^{(k)} + \beta\mathbf{q}^{(k)} \to \alpha\mathbf{p} + \beta\mathbf{q}$.*
3. *If $c_k \to c$ a real sequence and $\mathbf{p}^{(k)} \to \mathbf{p}$, then $c_k\mathbf{p}^{(k)} \to c\mathbf{p}$.*
4. *If $\mathbf{p}^{(k)} \to \mathbf{p}$, then $\mathbf{A}\mathbf{p}^{(k)} \to \mathbf{A}\mathbf{p}$ for all $\mathbf{A} \in \mathbb{R}^{n \times n}$.*
5. *(Cauchy's criterion for convergence) $\mathbf{p}^{(k)}$ is a convergent sequence if and only if it is a Cauchy sequence, i.e., for every $\varepsilon > 0$ there exists a $k_0 > 0$ such that $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| < \varepsilon$ for all $k, m > k_0$.*

We can also generalize Theorems 2.44, 2.45 and 2.49 for matrices. Using vector and matrix norms we can extend the Lagrange's Mean Value Theorem for vector valued functions.

**Theorem 2.50 (Lagrange's Mean Value Theorem).** *Let $\|\cdot\|$ be a fixed vector norm on $\mathbb{R}^n$, and consider the generated matrix norm. Let $E \subset \mathbb{R}^n$ be an open and convex set, $\mathbf{f}\colon E \to \mathbb{R}^n$ be continuously partially differentiable, $\mathbf{x}, \mathbf{y} \in E$. Then*

$$\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\| \leq \max_{t \in [0,1]}\|\mathbf{f}'(\mathbf{y} + t(\mathbf{x} - \mathbf{y}))\| \cdot \|\mathbf{x} - \mathbf{y}\|.$$

**Proof.** We prove the statement only for the Euclidean norm $\|\cdot\| = \|\cdot\|_2$. Clearly, we can assume that $\mathbf{f}(\mathbf{x}) \neq \mathbf{f}(\mathbf{y})$. Let

$$\mathbf{h} := \frac{\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2}.$$

Then $\|\mathbf{h}\|_2 = 1$. Let $\mathbf{f}(\mathbf{x}) = (f_1(\mathbf{x}), \ldots, f_n(\mathbf{x}))^T$, $\mathbf{h} = (h_1, \ldots, h_n)^T$. We define the real function

$$g(t) := \mathbf{h}^T \mathbf{f}(\mathbf{y} + t(\mathbf{x} - \mathbf{y})) = \sum_{i=1}^n h_i f_i(\mathbf{y} + t(\mathbf{x} - \mathbf{y})).$$

Then, using the Lagrange's Mean Value Theorem for single variable functions and the chain rule, we get

$$\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) &= g(1) - g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))^T(\mathbf{x} - \mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})
\end{aligned}$$

for some $\xi \in (0, 1)$. Therefore the definition of $\mathbf{h}$, the vector form of the Cauchy-Bunyakovsky-Schwarz inequality, $\|\mathbf{h}\|_2 = 1$ and part (v) of Theorem 2.46 yield

$$\begin{aligned}
\|\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x}) - \mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y}) \\
&\leq \|\mathbf{h}\|_2 \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))(\mathbf{x} - \mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y} + \xi(\mathbf{x} - \mathbf{y}))\|_2 \|\mathbf{x} - \mathbf{y}\|_2,
\end{aligned}$$

which concludes the proof. $\square$

### Exercises

1. Show that $\|\cdot\|_1$ and $\|\cdot\|_\infty$ satisfy the properties of the norms.
2. Compute $\|\mathbf{x}\|_1$, $\|\mathbf{x}\|_2$ and $\|\mathbf{x}\|_\infty$, and $\|\mathbf{A}\|_1$ and $\|\mathbf{A}\|_\infty$ for
   - (a) $\mathbf{x} = (3, -1, 0, 5)^T$,
   - (b) $\mathbf{x} = (-3, -2, -1, 4, -1)^T$,

   and
   - (c) $\mathbf{A} = \begin{pmatrix} -1 & 3 & -2 \\ 2 & -4 & 0 \\ 0 & 3 & 2 \end{pmatrix}$,
   - (d) $\mathbf{A} = \begin{pmatrix} -1 & 2 & 4 \\ 2 & -3 & 5 \\ 7 & -2 & 3 \end{pmatrix}$.
3. Draw the graphs of the curves defined by
   - (a) $\{\mathbf{x} \in \mathbb{R}^2\colon \|\mathbf{x}\|_1 = 1\}$,
   - (b) $\{\mathbf{x} \in \mathbb{R}^2\colon \|\mathbf{x}\|_\infty = 1\}$.
4. Prove parts (i)–(iii) of Theorem 2.46.
5. Prove part (ii) of Theorem 2.48.
6. Prove Theorem 2.49.

