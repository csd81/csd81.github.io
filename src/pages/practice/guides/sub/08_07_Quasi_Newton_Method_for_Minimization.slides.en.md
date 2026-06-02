# 8.7. Quasi-Newton Method for Minimization

Similarly to the previous section, we approximate the function $f\colon \mathbb{R}^n \to \mathbb{R}$ in a neighbourhood of $\mathbf{p}^{(k)}$ by the quadratic function

$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}). \tag{16}$$

If $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ and $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$, then (16) approximates the second-order Taylor polynomial of $f$ around $\mathbf{p}^{(k)}$, so it can be considered as an approximation of $f$ in a small neighbourhood of $\mathbf{p}^{(k)}$. We hope that the minimum point of $g$ will approximate that of $f$. If $\mathbf{A}^{(k)}$ is positive definite, then the minimum point of $g$ is

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)}. \tag{17}$$

Such iterations are called **quasi-Newton methods for minimization**.

---

We can define $\mathbf{A}^{(k)}$ and $\mathbf{v}^{(k)}$ as a numerical approximation of the Hessian matrix $f''(\mathbf{p}^{(k)})$ and the gradient vector $f'(\mathbf{p}^{(k)})$: $\mathbf{A}^{(k)} = (a_{ij}^{(k)})$ and $\mathbf{v}^{(k)} = (v_1^{(k)}, \ldots, v_n^{(k)})^T$, where

$$a_{ij}^{(k)} = \frac{1}{h^2}\big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)} + h\mathbf{e}^{(j)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) + f(\mathbf{p}^{(k)})\big)$$

and

$$v_i^{(k)} = \frac{1}{h}\Big(f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})\Big),$$

$i, j = 1, \ldots, n$ ($\mathbf{e}^{(i)}$ is the $i$th unit vector, $h > 0$ is fixed small step size). Here we used the first-order forward difference formula to approximate the first partial derivatives of $f$, and formulas to approximate the second partial derivatives. This way we do not need to now the exact values of the gradient vector and the Hessian matrix, but in each step of the iteration we need to perform $n^2$ number of function evaluations.

---

Next we consider the case when in (17) we have the exact gradient value $\mathbf{v}^{(k)} = f'(\mathbf{p}^{(k)})$, and hence we examine quasi-Newton methods of the form

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} f'(\mathbf{p}^{(k)}). \tag{18}$$

Here we assume that we can evaluate the gradient vector of the function, so the question is only how to approximate the Hessian matrix. One possibility is to use Broyden's method to approximate solutions of the system $f'(\mathbf{x}) = \mathbf{0}$:

$$\mathbf{A}^{(k)} \mathbf{s}^{(k)} = -f'(\mathbf{p}^{(k)}), \tag{19}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}, \tag{20}$$

$$\mathbf{y}^{(k)} = f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)}), \tag{21}$$

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{22}$$

---

> **Example.** We apply Broyden's method defined by (19)–(22) for minimizing the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We start the sequence from the initial point $(2, 2)^T$, and the matrix $\mathbf{A}^{(0)}$ is defined as a second-order difference approximation of the Hessian matrix $f''(2, 2)$ using step size $h = 0.05$. The first 10 elements of the sequence can be seen in the next table.

---

**Example cont.**

*Broyden's method for minimization, $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.35039835, 0.89916410) | 2.46195e-01 | 0.53114121 | 1.79479368 |
| 3 | ( 1.24875073, 0.73204681) | 1.32833e-01 | 0.34018032 | 0.64047058 |
| 4 | ( 1.12570322, 0.59780553) | 3.67287e-02 | 0.15927091 | 0.46819553 |
| 5 | ( 1.05911935, 0.54518730) | 7.97359e-03 | 0.07441095 | 0.46719737 |
| 6 | ( 0.99939685, 0.49649610) | 3.43894e-05 | 0.00355544 | 0.04778109 |
| 7 | ( 1.01133354, 0.50962433) | 2.69479e-04 | 0.01486866 | 4.18194987 |
| 8 | ( 1.00464762, 0.50384065) | 4.58758e-05 | 0.00602918 | 0.40549562 |
| 9 | ( 1.00047293, 0.50036811) | 4.91375e-07 | 0.00059931 | 0.09940111 |
| 10 | ( 1.00008014, 0.50006497) | 1.37638e-08 | 0.00010316 | 0.17213595 |

---

The problem with the iteration (22) is that since $\mathbf{A}^{(k)}$ is an approximation of the Hessian $f''(\mathbf{p})$, it is natural to require that $\mathbf{A}^{(k)}$ be positive definite for all $k$. It is also needed to argue that the quadratic function (16) has a minimum for all $k$. The numerical experience also gives that those quasi-Newton methods of the form (18) are the most efficient where $\mathbf{A}^{(k)}$ is a positive definite approximation of the Hessian. But the matrix sequence $\mathbf{A}^{(k)}$ generated by the Broyden's method is not even symmetric.

---

Our first goal is to modify the Broyden's method so that it should generate a symmetric matrix for all $k$. Suppose $\mathbf{A}^{(k)}$ is symmetric, and let

$$\mathbf{B}^{(k+1,1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}$$

be the matrix computed by the Broyden iteration. It can be shown that the closest symmetric matrix to $\mathbf{A}$ (in some sense) is the matrix

$$\frac{1}{2}(\mathbf{A} + \mathbf{A}^T).$$

Therefore, it is natural to modify $\mathbf{B}^{(k+1,1)}$ in the following way

$$\begin{aligned}
\mathbf{B}^{(k+1,2)} &= \frac{1}{2}\Big(\mathbf{B}^{(k+1,1)} + \mathbf{B}^{(k+1,1)T}\Big) \\
&= \mathbf{A}^{(k)} + \frac{1}{2}\frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}.
\end{aligned} \tag{23}$$

---

But now the problem is that the matrix $\mathbf{B}^{(k+1,2)}$ does not satisfy the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$ which was the motivation of the Broyden's method. We correct it by applying relation (22) again: let

$$\mathbf{B}^{(k+1,3)} = \mathbf{B}^{(k+1,2)} + \frac{(\mathbf{y}^{(k)} - \mathbf{B}^{(k+1,2)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}. \tag{24}$$

---

This is again a non-symmetric matrix, so we repeat the above procedure again: define the matrices $\mathbf{B}^{(k+1,2i)}$ and $\mathbf{B}^{(k+1,2i+1)}$ from the previous term of the sequence using formulas (23) and (24), respectively, for $i = 2, 3, \ldots$. It can be shown that the matrix sequence $\mathbf{B}^{(k+1,i)}$ converges to the symmetric matrix

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T + \mathbf{s}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^4} \mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T.
\end{aligned} \tag{25}$$

This is a correction iteration which preserves the symmetric property of the matrix, and also it satisfies the secant equation $\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$. This iteration is called **Powell-symmetric-Broyden update**, or shortly, **PSB update**.

---

The following result can be shown:

> **Theorem.** *Let $f \in C^3$, $f'(\mathbf{p}) = 0$, $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (19)–(21), (25) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$ if $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

> **Example.** Here we apply the quasi-Newton method (18) with the PSB update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We started the computation from the same initial value that was used in the previous example. The corresponding numerical values can be seen in the next table. The approximation here is better than that of for the Broyden's method.

---

**Example cont.**

*Quasi-Newton method (18) with the PSB update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.25102079, 0.70409379) | 1.50630e-01 | 0.32352080 | 1.09321792 |
| 3 | ( 1.19910219, 0.73444653) | 8.02473e-02 | 0.30758228 | 0.95073416 |
| 4 | ( 1.14966546, 0.69907469) | 5.06393e-02 | 0.24905919 | 0.80973192 |
| 5 | ( 1.00399514, 0.50473229) | 3.40491e-05 | 0.00619320 | 0.02486638 |
| 6 | ( 0.99975498, 0.49938607) | 6.64526e-07 | 0.00066102 | 0.10673251 |
| 7 | ( 1.00003118, 0.49997474) | 1.46839e-08 | 0.00004012 | 0.06070113 |
| 8 | ( 1.00001593, 0.50000889) | 7.05953e-10 | 0.00001824 | 0.45466117 |
| 9 | ( 1.00000627, 0.50000724) | 8.24492e-11 | 0.00000958 | 0.52515860 |
| 10 | ( 1.00000015, 0.50000024) | 7.49020e-14 | 0.00000028 | 0.02901243 |

---

The PSB update does not satisfy the goal formulated earlier that $\mathbf{A}^{(k)}$ be positive definite for all $k$ if $\mathbf{A}^{(0)}$ is positive definite. If a matrix $\mathbf{A}$ is positive definite, then it has a Cholesky factorization

$$\mathbf{A} = \mathbf{L}\mathbf{L}^T,$$

where $\mathbf{L}$ is non-singular. Oppositely, if a matrix $\mathbf{A}$ has the form

$$\mathbf{A} = \mathbf{M}\mathbf{M}^T$$

where $\mathbf{M}$ is non-singular, then $\mathbf{A}$ is positive definite, since

$$\mathbf{x}^T \mathbf{M}\mathbf{M}^T \mathbf{x} = (\mathbf{M}^T\mathbf{x})^T \mathbf{M}^T \mathbf{x} = \|\mathbf{M}^T \mathbf{x}\|_2^2 \geq 0,$$

and here equality holds if and only if $\mathbf{M}^T \mathbf{x} = \mathbf{0}$, and hence $\mathbf{x} = \mathbf{0}$.

---

Let

$$\mathbf{A}^{(k)} = \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T,$$

where $\mathbf{M}^{(k)}$ is invertible (but not necessary lower triangular). We look for the next Hessian approximation $\mathbf{A}^{(k+1)}$ in the form

$$\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T,$$

where we require that $\mathbf{A}^{(k+1)}$ satisfies the secant equation

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}.$$

Then it implies $(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} = (\mathbf{s}^{(k)})^T \mathbf{A}^{(k+1)}\mathbf{s}^{(k)}$, hence if $\mathbf{A}^{(k+1)}$ is positive definite, then the inequality

$$(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} > 0 \tag{26}$$

holds. We show that the secant equation has a positive definite solution assuming (26) holds.

---

We introduce the notation $\mathbf{v}^{(k)} := (\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)}$. Then the secant equation has the form

$$(\mathbf{M}^{(k+1)})^T \mathbf{s}^{(k)} = \mathbf{v}^{(k)}, \tag{27}$$

$$\mathbf{M}^{(k+1)} \mathbf{v}^{(k)} = \mathbf{y}^{(k)}. \tag{28}$$

We would like to compute the matrix $\mathbf{M}^{(k+1)}$ by updating the matrix $\mathbf{M}^{(k)}$. Therefore, using the derivation of the Broyden's method and using (28), it is natural to look for the matrix $\mathbf{M}^{(k+1)}$ in the form

$$\mathbf{M}^{(k+1)} = \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}. \tag{29}$$

Then $\mathbf{M}^{(k+1)}$ satisfies equation (28), and its difference from the matrix $\mathbf{M}^{(k)}$ is the smallest in the sense that

$$\mathbf{M}^{(k+1)}\mathbf{z} = \mathbf{M}^{(k)}\mathbf{z} \qquad \text{for all } \mathbf{z} \perp \mathbf{v}^{(k)}.$$

Substituting $\mathbf{M}^{(k+1)}$ back to equation (27) we get

---

$$\begin{aligned}
\mathbf{v}^{(k)} &= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\big((\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T\big)^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{\mathbf{v}^{(k)}(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{s}^{(k)} \\
&= (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2}\mathbf{v}^{(k)}.
\end{aligned}$$

It yields $(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \alpha \mathbf{v}^{(k)}$, where

$$\begin{aligned}
\alpha &= 1 - \frac{(\mathbf{y}^{(k)} - \mathbf{M}^{(k)}\mathbf{v}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} + \frac{(\mathbf{v}^{(k)})^T (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{\|\mathbf{v}^{(k)}\|_2^2} \\
&= 1 - \alpha^2 \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}} + \alpha,
\end{aligned}$$

and so

---

$$\alpha^2 = \frac{(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} = \frac{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}. \tag{30}$$

We have that the numerator is positive since $\mathbf{A}^{(k)}$ is positive definite, therefore $\alpha$ can be obtained from equation (30), and

$$\mathbf{v}^{(k)} = \frac{1}{\alpha}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}.$$

Substituting it back to equation (29) we get

$$\begin{aligned}
\mathbf{M}^{(k+1)} &= \mathbf{M}^{(k)} + \frac{(\mathbf{y}^{(k)} - \frac{1}{\alpha}\mathbf{M}^{(k)}(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)})\frac{1}{\alpha}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{\frac{1}{\alpha^2}\|(\mathbf{M}^{(k)})^T \mathbf{s}^{(k)}\|_2^2} \\
&= \mathbf{M}^{(k)} + \alpha \frac{\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{M}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}.
\end{aligned}$$

---

Little computation gives that

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{A}^{(k)}\mathbf{s}^{(k)}}. \tag{31}$$

We have to show that the iteration generates a positive definite matrix. Since $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, it is enough to show that $\mathbf{M}^{(k+1)}$ is invertible. By our assumption, the matrix $\mathbf{M}^{(k)}$ is positive definite, and hence it is invertible. If we assume that (26) holds, then the invertibility of $\mathbf{M}^{(k+1)}$ follows easily from (29).

---

The formula (31) was introduced by Broyden, Flecher, Goldfarb and Shanno in 1970, therefore it is called **BFGS update**. This is the best known iteration for the approximation of the Hessian. The initial value of the iteration can be the matrix $f''(\mathbf{p}^{(0)})$ or its numerical approximation by the second-order difference formula. If $\mathbf{p}^{(0)}$ is close enough to $\mathbf{p}$ and $f''(\mathbf{p})$ is positive definite, then $f''(\mathbf{p}^{(0)})$ and so $\mathbf{A}^{(0)}$ is also positive definite.

---

Finally, consider condition (26). Applying Lagrange's Mean Value Theorem, relations (20) and (21), we get

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &= \big(f'(\mathbf{p}^{(k+1)}) - f'(\mathbf{p}^{(k)})\big)^T (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) \\
&= \sum_{i=1}^{n} \left( \frac{\partial f_i(\mathbf{p}^{(k+1)})}{\partial x_i} - \frac{\partial f_i(\mathbf{p}^{(k)})}{\partial x_i} \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\xi^{(k,i)})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}).
\end{aligned}$$

If the iterates $\mathbf{p}^{(k)}$ are close enough to $\mathbf{p}$ during the iteration, then the vectors $\xi^{(k,i)}$ are also close to $\mathbf{p}$, and hence the continuity of $f''$ yields

$$\begin{aligned}
(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)} &\approx \sum_{i=1}^{n} \left( \sum_{j=1}^{n} \frac{\partial^2 f_i(\mathbf{p})}{\partial x_i\, \partial x_j}(p_j^{(k+1)} - p_j^{(k)}) \right)(p_i^{(k+1)} - p_i^{(k)}) \\
&= (\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)})^T f''(\mathbf{p})(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}),
\end{aligned}$$

which is positive, since $f''(\mathbf{p})$ is positive definite.

---

Therefore, this condition is automatically satisfied for large $k$ if the sequence converges to $\mathbf{p}$. Clearly, if (26) does not hold, then iteration (31) can be defined, but in this case $\mathbf{A}^{(k+1)}$ is only positive semidefinite, not positive definite.

The following result can be proved.

> **Theorem.** *Let $f \in C^3$, $f'(\mathbf{p}) = 0$, and $f''(\mathbf{p})$ be positive definite. Then there exist $\varepsilon, \delta > 0$ such that the iteration (19)–(21), (31) is defined for all $k$, and it converges superlinearly to $\mathbf{p}$, assuming $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 < \varepsilon$ and $\|\mathbf{A}^{(0)} - f''(\mathbf{p})\|_2 < \delta$.*

---

> **Example.** We applied the quasi-Newton method (18) with the BFGS update for the function $f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$. We used the same initial condition as in earlier examples. The numerical results are listed in the next table. We have got a very precise approximation in 8 steps.

*Quasi-Newton method (18) with the BFGS update*

| $k$ | $\mathbf{p}^{(k)}$ | $f(\mathbf{p}^{(k)})$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_2}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_2}$ |
|----|------|------|------|------|
| 0 | ( 2.00000000, 2.00000000) | 2.00000e+00 | 1.80277564 | |
| 1 | ( 1.28952043, 0.56127886) | 4.59574e-01 | 0.29593441 | 0.16415488 |
| 2 | ( 1.23976784, 0.70438005) | 1.31429e-01 | 0.31505527 | 1.06461181 |
| 3 | ( 1.02721672, 0.49403232) | 5.98519e-03 | 0.02786330 | 0.08843939 |
| 4 | ( 1.00995636, 0.51197836) | 2.13820e-04 | 0.01557595 | 0.55901316 |
| 5 | ( 0.99954439, 0.49921815) | 8.41172e-07 | 0.00090492 | 0.05809714 |
| 6 | ( 1.00000534, 0.50000495) | 5.76547e-11 | 0.00000728 | 0.00804964 |
| 7 | ( 1.00000005, 0.50000002) | 9.15800e-15 | 0.00000005 | 0.00708494 |
| 8 | ( 1.00000000, 0.50000000) | 8.60000e-19 | 0.00000000 | 0.01827989 |

---

It can be proved by mathematical induction that the inverses $\mathbf{B}^{(k)} := (\mathbf{A}^{(k)})^{-1}$ of the matrices $\mathbf{A}^{(k)}$ generated by the BFGS update satisfy the recursion

$$\begin{aligned}
\mathbf{B}^{(k+1)} &= \mathbf{B}^{(k)} + \left( 1 + \frac{(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} \mathbf{y}^{(k)}}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \right) \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} \\
&\quad - \frac{\mathbf{s}^{(k)}(\mathbf{y}^{(k)})^T \mathbf{B}^{(k)} + \mathbf{B}^{(k)}\mathbf{y}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}}.
\end{aligned} \tag{32}$$

Using this formula, (19) can be replaced by

$$\mathbf{s}^{(k)} = -\mathbf{B}^{(k)} f'(\mathbf{p}^{(k)}), \tag{33}$$

so during the iteration we do not need to compute matrix inverses or solving linear systems.

---

Similarly to the derivation of the BFGS update, we can obtain the definition of the **DFP update**. Again, we are looking for the approximation of the Hessian in the form $\mathbf{A}^{(k+1)} = \mathbf{M}^{(k+1)}(\mathbf{M}^{(k+1)})^T$, but instead of the iterates (27)–(28) we use the equivalent iteration

$$\begin{aligned}
(\mathbf{M}^{(k+1)})^{-1} \mathbf{y}^{(k)} &= \mathbf{v}^{(k)} \\
\big((\mathbf{M}^{(k+1)})^T\big)^{-1} \mathbf{v}^{(k)} &= \mathbf{s}^{(k)}.
\end{aligned}$$

Its solution is considered in the form

$$\big(\mathbf{M}^{(k+1)}\big)^{-1} = \big(\mathbf{M}^{(k)}\big)^{-1} + \frac{(\mathbf{s}^{(k)} - (\mathbf{M}^{(k)})^{-1}\mathbf{v}^{(k)})(\mathbf{v}^{(k)})^T}{\|\mathbf{v}^{(k)}\|_2^2}.$$

Then we get

$$\mathbf{v}^{(k)} = \left( \frac{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \right)^{1/2} (\mathbf{M}^{(k)})^{-1} \mathbf{y}^{(k)},$$

assuming (26) holds. From this we get

---

$$\begin{aligned}
\mathbf{A}^{(k+1)} &= \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)})^T + \mathbf{y}^{(k)}(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} \\
&\quad - \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}{((\mathbf{y}^{(k)})^T \mathbf{s}^{(k)})^2} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T.
\end{aligned} \tag{34}$$

This formula is called the **DFP update**, since it was established by Davidon (1959) and Flecher, Powell (1963).

---

It can be checked that the inverse of the matrix $\mathbf{A}^{(k)}$ generated by the DFP update can be computed by the recursion:

$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}}. \tag{35}$$

---

*Ferenc Hartung — Numerical Analysis: 8 Minimization of Functions — University of Pannonia*
