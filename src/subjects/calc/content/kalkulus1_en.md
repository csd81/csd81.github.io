# Calculus for Computer Scientists I.

István Győri, Mihály Pituk

## Chapter 1

# Sets, functions

## 1.1. Sets

The symbol of the set of *integers* is $\mathbb{Z}$. The non-negative integers are called *natural numbers*. The set of natural numbers is denoted by the symbol $\mathbb{N}$, and the set of positive integers by $\mathbb{N}^{+}$. The symbol of the set of *real numbers* is $\mathbb{R}$. The set $\mathbb{R}$ is also called the *number line*.

The *absolute value* of a real number $x$ is defined by the formula

$$
|x| =
\begin{cases}
x, & \text{if } x \ge 0,\\
-x, & \text{if } x < 0
\end{cases}
$$

Geometrically, $|x|$ is the distance of the number $x$ from 0 on the number line. More generally, if $x$ and $y$ are two real numbers, then $|x-y|$ is the distance between the numbers $x$ and $y$ on the number line. For any $x,y \in \mathbb{R}$

$$
|x+y| \le |x| + |y|.
$$

*(triangle inequality)*

If $H$ is a given *set*, then the symbol $x \in H$ ($x \notin H$) means that $x$ is an element ($x$ is not an element) of $H$. A set can be given by listing its elements or by describing the properties that characterize the elements of the set. The set consisting of the numbers 1, 3 and 10 is denoted as follows:

$$
H = \{1,3,10\}.
$$

If $T(x)$ is a statement (property) that can be true or false depending on the variable $x$ in it, then

$$
H = \{x \mid T(x)\}
$$

denotes the set of elements $x$ for which $T(x)$ is true. Let

$$
H = \{x \in \mathbb{R} \mid |x-1| < 3\}.
$$

From the geometric meaning of absolute value, it immediately follows that $H$ consists of those numbers $x \in \mathbb{R}$ for which $-2 < x < 4$.

Let $A$, $B$ be two sets. $A$ is a subset of $B$, denoted by $A \subset B$, if every element of $A$ is also an element of $B$. The *union*, *intersection*, and *difference* of $A$ and $B$ are defined by the formulas

$$
\begin{aligned}
A \cup B &= \{x \mid x \in A \text{ or } x \in B\},\\
A \cap B &= \{x \mid x \in A \text{ and } x \in B\},\\
A \setminus B &= \{x \mid x \in A \text{ and } x \notin B\}
\end{aligned}
$$

The symbol of the *Cartesian product* of $A$ and $B$ is $A \times B$. The set $A \times B$ consists of those ordered pairs $(a,b)$ for which $a \in A$ and $b \in B$. So

$$
A \times B = \{(a,b) \mid a \in A \text{ and } b \in B\}.
$$

The symbol of the *empty set* is $\emptyset$. If $A \cap B = \emptyset$, then the sets $A$ and $B$ are said to be *disjoint*.

## 1.2. Number sets

**1.2.1. Definition.** The subsets of $\mathbb{R}$ are called (real) *number sets*.

**1.2.2. Definition.** Let $A \subset \mathbb{R}$. The number $c \in \mathbb{R}$ is called an *upper bound* (*lower bound*) of the set $A$ if $x \le c$ ($x \ge c$) for all $x \in A$.

The set $A$ is *bounded from above* (*bounded from below*) if it has an upper bound (lower bound). The set $A$ is *bounded* if it is bounded both from above and from below.

It is easy to see that $A \subset \mathbb{R}$ is bounded if and only if there exists a $k > 0$ such that $|x| \le k$ for all $x \in A$.

*Intervals* are special number sets. The *bounded intervals* are the following:

$$
\begin{aligned}
(a,b) &= \{x \in \mathbb{R} \mid a < x < b\},\\
[a,b) &= \{x \in \mathbb{R} \mid a \le x < b\},\\
(a,b] &= \{x \in \mathbb{R} \mid a < x \le b\},\\
[a,b] &= \{x \in \mathbb{R} \mid a \le x \le b\},
\end{aligned}
$$

where $a,b \in \mathbb{R}$, $a < b$. The first interval is *open*, the second is *closed from the left, open from the right*, the third is *open from the left, closed from the right*, and the fourth is *closed*. The

$$
\begin{aligned}
(c,\infty) &= \{x \in \mathbb{R} \mid x > c\},\\
[c,\infty) &= \{x \in \mathbb{R} \mid x \ge c\},\\
(-\infty,c) &= \{x \in \mathbb{R} \mid x < c\},\\
(-\infty,c] &= \{x \in \mathbb{R} \mid x \le c\},
\end{aligned}
$$

where $c \in \mathbb{R}$, as well as the

$$
(-\infty,\infty) = \mathbb{R}
$$

are *unbounded intervals*.

**1.2.3. Definition.** Let $A \subset \mathbb{R}$. The number $m \in A$ is called the *greatest element or maximum* (*least element or minimum*) of the set $A$ if $x \le m$ ($x \ge m$) for all $x \in A$. Notation: $m = \max A$, respectively $m = \min A$.

**1.2.4. Example.** If $A = (0,1)$, then neither $\min A$ nor $\max A$ exists. If $A = [0,1)$, then $\min A = 0$, $\max A$ does not exist. If $A = (0,1]$, then $\min A$ does not exist, $\max A = 1$. And if $A = [0,1]$, then $\min A = 0$ and $\max A = 1$.

The previous example shows that even for a bounded $A$, it may happen that neither $\min A$ nor $\max A$ exists. At the same time, the following is true:

**1.2.5. Theorem.** *If $\emptyset \ne A \subset \mathbb{R}$ is bounded from above (bounded from below), then among the upper bounds (lower bounds) of $A$ there is always a smallest (greatest).*

**1.2.6. Definition.** Let $\emptyset \ne A \subset \mathbb{R}$. If $A$ is bounded from above (bounded from below), then the least upper bound (greatest lower bound) of $A$ is called the *supremum* (*infimum*) of the set $A$. Notation: $\sup A$, respectively $\inf A$.

## 1.3. The definition of a function

The definition of a function is as follows:

**1.3.1. Definition.** Let $A$ and $B$ be given sets. A subset $Z$ of the Cartesian product $A \times B$ is called a *function (mapping) from $A$ to $B$ (of type $A \to B$)* if for any $x \in A$ there exists at most one $y \in B$ such that $(x,y) \in Z$. If we denote this mapping by $f$, then for $(x,y) \in Z$, $y$ is called the *image of the element $x$ under $f$*, and we write $y = f(x)$. By the *domain of definition* of the function $f$ we mean the set

$$
D(f) = \{x \in A \mid \text{there exists } y \in B \text{ such that } (x,y) \in Z\}
$$

and by the *range* of $f$ we mean the set

$$
R(f) = \{y \in B \mid \text{there exists } x \in A \text{ such that } (x,y) \in Z\}
$$

That $f$ is a mapping from $A$ to $B$ is denoted by the symbol $f : A \to B$. In other words, the symbol $f : A \to B$ means that $D(f) \subset A$ and $R(f) \subset B$. We emphasize that generally $D(f) \ne A$ and $R(f) \ne B$.

If $H \subset D(f)$, then by the *image of the set $H$ under $f$* we mean the set

$$
f(H) = \{f(x) \mid x \in H\}
$$

Let $H \subset D(f)$. By the *restriction of the function $f$ to the set $H$*, denoted by $f|_H$, we mean the function whose domain of definition is $D(f|_H) = H$, and its formula is

$$
(f|_H)(x) = f(x), \qquad x \in H.
$$

The *graph* of the function $f : A \to B$ is

$$
\operatorname{graph}(f) = \{(x,f(x)) \mid x \in D(f)\} \subset A \times B.
$$

**1.3.2. Example.** Let

$$
Z = \{(x,y) \in \mathbb{R} \times \mathbb{R} \mid x^2 + y^2 = 1\} \subset \mathbb{R} \times \mathbb{R}.
$$

$Z$ is the set of those points in the $x,y$-plane that are on the circle of radius 1 centered at $(0,0)$. The set $Z$ is not a mapping from $\mathbb{R}$ to $\mathbb{R}$, because both $(0,1) \in Z$ and $(0,-1) \in Z$ hold. However, the

$$
Z = \{(x,y) \in \mathbb{R} \times \mathbb{R} \mid x^2 + y^2 = 1,\ y \ge 0\} \subset \mathbb{R} \times \mathbb{R}
$$

set, the upper semicircle of radius 1 centered at $(0,0)$, is already a mapping from $\mathbb{R}$ to $\mathbb{R}$. If we denote it by $f$, then with the notation used in the definition $D(f) = [-1,1]$, $R(f) = [0,1]$ and

$$
y = f(x) = \sqrt{1-x^2}, \qquad x \in [-1,1].
$$

## 1.4. The composite function

**1.4.1. Definition.** Let $f : A \to B$ and $g : B \to C$ be two functions. For every $x \in D(g)$ for which $g(x) \in D(f)$, let

$$
(f \circ g)(x) = f(g(x)).
$$

The function denoted by $f \circ g$, whose domain of definition is

$$
D(f \circ g) = \{x \in D(g) \mid g(x) \in D(f)\},
$$

is called the *composition* of $f$ and $g$.

**1.4.2. Example.** Let

$$
\begin{aligned}
f(x) &= 4x+2, \qquad x \in [0,1],\\
g(x) &= x-3, \qquad x \in [0,4].
\end{aligned}
$$

Then

$$
(f \circ g)(x) = f(g(x)) = 4g(x)+2 = 4(x-3)+2 = 4x-10.
$$

Since $D(f) = [0,1]$, $g(x) = x-3 \in D(f)$ if and only if $3 \le x \le 4$. Taking into account that $D(g) = [0,4]$, we get that

$$
D(f \circ g) = [3,4].
$$

## 1.5. The inverse function

**1.5.1. Definition.** The function $f$ is said to be *invertible* (*one-to-one*) if for any $x_1,x_2 \in D(f)$ with $x_1 \ne x_2$, $f(x_1) \ne f(x_2)$.

**1.5.2. Definition.** If $f : A \to B$ is invertible, $D(f) = A$ and $R(f) = B$, then we say that $f$ establishes a *mutually unambiguous mapping* (or *one-to-one correspondence*) between $A$ and $B$. In other words, $f$ is a *bijective mapping* or briefly a *bijection*.

**1.5.3. Definition.** If $f$ is invertible, then the *inverse function* of $f$ is the function that maps $R(f)$ into $D(f)$, and assigns to each $y \in R(f)$ the $x \in D(f)$ for which $y = f(x)$. The symbol of the inverse function is: $f_{-1}$.

It follows from the definition that $D(f_{-1}) = R(f)$ and $R(f_{-1}) = D(f)$, and furthermore for every $x \in D(f)$

$$
f_{-1}(f(x)) = x,
$$

and for every $y \in R(f)$

$$
f(f_{-1}(y)) = y.
$$

**1.5.4. Example.** The

$$
g(x) = 1 - x^2, \qquad x \in [-1,1]
$$

function is not invertible because $g(-1) = g(1)$. The

$$
f(x) = 1 - x^2, \qquad x \in [-1,0]
$$

function, on the other hand, is invertible, because if for some $x_1,x_2 \in D(f) = [-1,0]$ we have $f(x_1) = f(x_2)$, then we get $x_1^2 = x_2^2$, and from here $|x_1| = |x_2|$, then $-x_1 = -x_2$, and finally $x_1 = x_2$ follows. It is easy to see that $R(f) = [0,1]$. From the

$$
y = f(x) = 1 - x^2, \qquad x \in D(f) = [-1,0],\ y \in R(f) = [0,1]
$$

conditions we get that $x^2 = 1-y$. From here $|x| = \sqrt{1-y}$, then $-x = \sqrt{1-y}$, and finally

$$
x = -\sqrt{1-y} = f_{-1}(y)
$$

follows. So the inverse function of $f$ is:

$$
f_{-1}(x) = -\sqrt{1-x}, \qquad x \in [0,1].
$$

## 1.6. Real functions of one variable

**1.6.1. Definition.** The function $f$ is called a *real function* if $R(f) \subset \mathbb{R}$. The function $f$ is called a *function of one variable* if $D(f) \subset \mathbb{R}$.

In the following we will examine real functions of one variable, that is, mappings from $\mathbb{R}$ to $\mathbb{R}$. The graphs of real functions of one variable can be represented in the $x,y$-plane,

$$
\operatorname{graph}(f) = \{(x,f(x)) \mid x \in D(f)\} \subset \mathbb{R} \times \mathbb{R} = \mathbb{R}^2.
$$

From the definition of the inverse function we get that if $f : \mathbb{R} \to \mathbb{R}$ is invertible, then the graph of the inverse function $f_{-1}$ is obtained by reflecting the graph of $f$ across the line $y = x$.

---

<!-- PDF page 11 -->

**1.6.2. Definition.** If $f_1$ and $f_2$ are real functions, then the functions $f_1 \pm f_2$, $f_1 \cdot f_2$ and $\frac{f_1}{f_2}$ are defined by the formulas

$$
\begin{aligned}
(f_1 \pm f_2)(x) &= f_1(x) \pm f_2(x), &
x &\in D(f_1 \pm f_2) = D(f_1) \cap D(f_2),\\
(f_1 \cdot f_2)(x) &= f_1(x) \cdot f_2(x), &
x &\in D(f_1 \cdot f_2) = D(f_1) \cap D(f_2),\\
\left(\frac{f_1}{f_2}\right)(x) &= \frac{f_1(x)}{f_2(x)}, &
x &\in D\left(\frac{f_1}{f_2}\right)
= \{x \in D(f_1) \cap D(f_2) \mid f_2(x) \ne 0\}
\end{aligned}
$$

**1.6.3. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is *bounded from above* (*bounded from below*) if there exists $c \in \mathbb{R}$ such that for all $x \in D(f)$, $f(x) \le c$ ($f(x) \ge c$).

The function $f : \mathbb{R} \to \mathbb{R}$ is *bounded* if it is bounded both from above and from below.

It is easy to see that $f : \mathbb{R} \to \mathbb{R}$ is bounded if and only if there exists $k > 0$ such that for all $x \in D(f)$, $|f(x)| \le k$.

**1.6.4. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is *monotonically increasing* (*monotonically decreasing*) if for any $x_1,x_2 \in D(f)$ with $x_1 < x_2$, $f(x_1) \le f(x_2)$ ($f(x_1) \ge f(x_2)$). If we replace the last inequality with $<$ ($>$), we get the definition of a *strictly monotonically increasing* (*strictly monotonically decreasing*) function.

The function $f : \mathbb{R} \to \mathbb{R}$ is *monotonic* (*strictly monotonic*) if it is monotonically increasing or monotonically decreasing (strictly monotonically increasing or strictly monotonically decreasing).

**1.6.5. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is *even* (*odd*) if for any $x \in D(f)$, $-x \in D(f)$, and $f(-x) = f(x)$ ($f(-x) = -f(x)$).

The graph of every even function is symmetric with respect to the $y$-axis, and the graph of every odd function is symmetric with respect to the origin (the point $(0,0)$).

**1.6.6. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is *periodic* with period $p$ if for any $x \in D(f)$, $x+p \in D(f)$, and $f(x+p) = f(x)$.

**1.6.7. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is *constant* if there exists $c \in \mathbb{R}$ such that for all $x \in D(f)$, $f(x) = c$.

**1.6.8. Definition.** By a *root* (or *zero*) of the function $f : \mathbb{R} \to \mathbb{R}$ we mean a point $a \in D(f)$ where $f(a) = 0$. If $f(a) = 0$, we also say that $f$ *vanishes at $a$*.

<!-- PDF page 12 -->

# Chapter 2

# Limit and continuity of real functions of one variable

## 2.1. Convergent sequences

**2.1.1. Definition.** A function whose domain of definition is $\mathbb{N}$ is called a *sequence*. A real function defined on $\mathbb{N}$ is called a real sequence. If $a : \mathbb{N} \to \mathbb{R}$ is a real sequence, then the number $a(n)$ is usually denoted by $a_n$. We call $a_n$ the *$n$-th term* of the sequence. Instead of $a : \mathbb{N} \to \mathbb{R}$, the notation $\{a_n\}_{n=0}^{\infty}$ or $\{a_n\}$ is used.

In the following, we will only deal with real sequences.

**2.1.2. Definition.** The number $a \in \mathbb{R}$ is called the *limit* of the sequence $\{a_n\}$ if for any $\varepsilon > 0$ there exists $n_0 \in \mathbb{N}$ such that for all $n \ge n_0$, $|a_n-a| < \varepsilon$. Notation: $a_n \to a$ or

$$
\lim_{n \to \infty} a_n = a.
$$

The number $n_0$ in the definition is called the *threshold number* corresponding to the error bound $\varepsilon$.

The condition $a_n \to a \in \mathbb{R}$ geometrically means that for any $\varepsilon > 0$, the terms of the sequence $\{a_n\}$, with finitely many exceptions, are in the strip $a-\varepsilon < y < a+\varepsilon$ of the $x,y$-plane.

**2.1.3. Definition.** The sequence $\{a_n\}$ is said to be *convergent* if there exists $a \in \mathbb{R}$ such that $a_n \to a$. Sequences that are not convergent are called *divergent*.

**2.1.4. Theorem (Uniqueness of the limit).** *Every convergent sequence has exactly one limit.*

**2.1.5. Example.** Let

$$
a_n = \frac{n}{n+1}, \qquad n \in \mathbb{N}.
$$

If we divide the numerator and the denominator by $n$ (multiply by $\frac{1}{n}$), we get that

$$
a_n = \frac{1}{1+\frac{1}{n}}, \qquad n \in \mathbb{N}.
$$

<!-- PDF page 13 -->

From this it is easy to guess that $\lim_{n\to\infty} a_n = 1$. We will prove this according to the definition as well. Let $\varepsilon > 0$ be given. Then the condition $|a_n-1| < \varepsilon$ (for $n \in \mathbb{N}$) is equivalent to the inequality

$$
\left|\frac{n}{n+1} - 1\right| < \varepsilon,
$$

or

$$
n \ge \frac{1}{\varepsilon} - 1
$$

Thus, any $n_0 \in \mathbb{N}$ for which $n_0 > \frac{1}{\varepsilon}-1$ is an appropriate threshold number corresponding to the error bound $\varepsilon$. Since $\varepsilon > 0$ was arbitrary, therefore $a_n \to 1$.

**2.1.6. Definition.** If $\{n_k\}_{k=0}^{\infty}$ is a strictly monotonically increasing sequence of natural numbers, then the sequence $\{a_{n_k}\}_{k=0}^{\infty}$ is called a *subsequence* of the sequence $\{a_n\}_{n=0}^{\infty}$.

The following property is obvious.

**2.1.7. Theorem.** *If the sequence $\{a_n\}_{n=0}^{\infty}$ is convergent, then any subsequence $\{a_{n_k}\}_{k=0}^{\infty}$ of $\{a_n\}_{n=0}^{\infty}$ is also convergent, and*

$$
\lim_{k\to\infty} a_{n_k} = \lim_{n\to\infty} a_n.
$$

It follows from the theorem that the sequence $a_n = (-1)^n$ is divergent, since

$$
a_{2k} = 1 \to 1, \qquad \text{és} \qquad a_{2k+1} = -1 \to -1.
$$

Since sequences are special real functions, we have already defined their boundedness (both from below and from above).

**2.1.8. Theorem (The connection between convergence and boundedness).** *Every convergent sequence is bounded.*

The example of the sequence $a_n = (-1)^n$ shows that the converse statement is not true. The following statement can be derived directly from the definition.

**2.1.9. Theorem.** *If $a_n \to 0$ and the sequence $\{b_n\}$ is bounded, then $a_n b_n \to 0$.*

The next theorem shows that by applying the basic operations to convergent sequences, we also get convergent sequences.

**2.1.10. Theorem (Operations with limits).** *If $a_n \to a \in \mathbb{R}$, $b_n \to b \in \mathbb{R}$, then*

1. $a_n + b_n \to a+b$,
2. $a_n b_n \to ab$,
3. $\frac{a_n}{b_n} \to \frac{a}{b}$ under the additional conditions that $b_n \ne 0$ for all $n \in \mathbb{N}$ and $b \ne 0$.

The $\le$ inequality between the terms of two convergent sequences is "inherited" by their limits as well.

**2.1.11. Theorem (Passing to the limit in inequalities).** *If $a_n \le b_n$ with finitely many exceptions, $a_n \to a \in \mathbb{R}$ and $b_n \to b \in \mathbb{R}$, then $a \le b$.*

<!-- PDF page 14 -->

The example of the sequences $a_n = 0$ and $b_n = \frac{1}{n}$ shows that the $\le$ inequality in the previous theorem cannot be replaced by $<$.

The following is related to the previous property:

**2.1.12. Theorem (Squeeze theorem).** *If $a_n \le b_n \le c_n$ with finitely many exceptions and for some $h \in \mathbb{R}$*

$$
\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = h,
$$

*then*

$$
\lim_{n\to\infty} b_n = h.
$$

Not every bounded sequence is convergent. However, the following is true:

**2.1.13. Theorem (Bolzano-Weierstrass theorem).** *Every bounded sequence has a convergent subsequence.*

The terms of a convergent sequence for large $n$ get close to the limit, and therefore to each other as well. It can be shown that this property is also a criterion for convergence.

**2.1.14. Theorem (Cauchy's convergence criterion).** *The sequence $\{a_n\}$ is convergent if and only if for any $\varepsilon > 0$ there exists $n_0 \in \mathbb{N}$ such that for all $n \ge n_0$ and $m \ge n_0$, $|a_n-a_m| < \varepsilon$.*

## 2.2. Sequences tending to infinity

Now we will examine sequences that increase or decrease without any bound.

**2.2.1. Definition.** We say that the sequence $\{a_n\}$ *tends to plus infinity* (*minus infinity*) if for any $c \in \mathbb{R}$ there exists $n_0 \in \mathbb{N}$ such that for all $n \ge n_0$, $a_n > c$ ($a_n < c$). Notation:

$$
a_n \to \infty \quad (a_n \to -\infty),
\qquad \text{or} \qquad
\lim_{n\to\infty} a_n = \infty
\quad
\left(\lim_{n\to\infty} a_n = -\infty\right).
$$

The condition $a_n \to \infty$ ($a_n \to -\infty$) geometrically means that for any $c \in \mathbb{R}$, the terms of the sequence $\{a_n\}$, with finitely many exceptions, are in the half-plane $y > c$ ($y < c$) of the $x,y$-plane.

**2.2.2. Example.** We show based on the definition that $n^2 \to \infty$. Let $c \in \mathbb{R}$ be given. If $c < 0$, then the inequality $n^2 > c$ is true for all $n \in \mathbb{N}$, and for $c \ge 0$ it holds if and only if $n > \sqrt{c}$. So for $c < 0$ any $n_0 \in \mathbb{N}$, and for $c \ge 0$ the choice $n_0 \in \mathbb{N}$, $n_0 > \sqrt{c}$ satisfies the condition prescribed in the definition.

The following property is obvious.

**2.2.3. Theorem.** *If $a_n \to \infty$ ($a_n \to -\infty$), then $\{a_n\}$ is bounded from below (from above).*

The following rules are valid for sequences tending to $\pm\infty$.

<!-- PDF page 15 -->

**2.2.4. Theorem (Operations with infinite limits).**

1. *If $a_n \to \infty$, then $-a_n \to -\infty$.*
2. *If $a_n \to \infty$ and $\{b_n\}$ is bounded from below, then $a_n+b_n \to \infty$.*
3. *If $a_n \to \infty$ and there is some $c > 0$ ($d < 0$) such that $b_n \ge c$ ($b_n \le d$) with finitely many exceptions, then $a_n b_n \to \infty$ ($a_n b_n \to -\infty$).*
4. *If $a_n \to \infty$, then $\frac{1}{a_n} \to 0$.*
5. *If $a_n \to 0$ and $a_n > 0$ ($a_n < 0$) with finitely many exceptions, then $\frac{1}{a_n} \to \infty$ ($\frac{1}{a_n} \to -\infty$).*

Statements similar to (1)-(4) can be formulated for the case when $a_n \to -\infty$.

**2.2.5. Theorem (Passing to the limit in inequality).** *If $a_n \le b_n$ with finitely many exceptions and $a_n \to \infty$ ($b_n \to -\infty$), then $b_n \to \infty$ ($a_n \to -\infty$).*

## 2.3. Monotonic sequences

The sequence $\{a_n\}$ is monotonically increasing (monotonically decreasing) if and only if for all $n \in \mathbb{N}$ $a_n \le a_{n+1}$ ($a_n \ge a_{n+1}$), and if we replace the $\le$ ($\ge$) inequality with $<$ ($>$), then we get the characterization of a strictly monotonically increasing (strictly monotonically decreasing) sequence.

A monotonic sequence always has a (finite or infinite) limit.

**2.3.1. Theorem (Limit of a monotonic sequence).** *If the sequence $\{a_n\}$ is monotonically increasing (monotonically decreasing) and not bounded from above (not bounded from below), then $a_n \to \infty$ ($a_n \to -\infty$).*

*If the sequence $\{a_n\}$ is monotonically increasing (monotonically decreasing) and bounded from above (bounded from below), then $a_n \to \sup A$ ($a_n \to \inf A$), where $A = \{a_n \mid n \in \mathbb{N}\}$.*

*In particular, every monotonic and bounded sequence is convergent.*

**2.3.2. Example.** Let $a_0 = \sqrt{2}$ and

$$
a_{n+1} = \sqrt{2+a_n}, \qquad n \in \mathbb{N}.
$$

It can be proven by mathematical induction that $\{a_n\}$ is monotonically increasing and for all $n \in \mathbb{N}$, $\sqrt{2} \le a_n \le 2$. According to the previous theorem $a_n \to a$ for some $a \in \mathbb{R}$. Performing the limit transition in the equation and in the latter inequality, we get that

$$
a = \sqrt{2+a}
\qquad \text{and} \qquad
\sqrt{2} \le a \le 2.
$$

From here $a^2 = 2+a$, so $a = -1$ or $a = 2$. Since only $a = 2$ satisfies the condition $\sqrt{2} \le a \le 2$, therefore $a = 2$.

<!-- PDF page 16 -->

## 2.4. Special sequences

We present some important sequences and their convergence properties.

**2.4.1. Theorem (The geometric sequence $\{q^n\}$).** *If $q > 1$, then $q^n \to \infty$. If $q = 1$, then $q^n = 1 \to 1$. If $q \in (-1,1)$, then $q^n \to 0$. And if $q \le -1$, then the sequence $\{q^n\}_{n=0}^{\infty}$ has neither a finite nor an infinite limit.*

**2.4.2. Example.**

$$
\frac{2^n+3^n}{4^n+5^n}
=
\frac{\left(\frac{2}{5}\right)^n + \left(\frac{3}{5}\right)^n}
{\left(\frac{4}{5}\right)^n + 1}
\longrightarrow 0,
$$

while we used the convergence properties of the geometric sequence.

**2.4.3. Theorem (The sequence $\{\sqrt[n]{a}\}$).** *For any $a > 0$, $\sqrt[n]{a} \to 1$.*

**2.4.4. Theorem (The sequence $\{\sqrt[n]{n}\}$).** *$\sqrt[n]{n} \to 1$.*

**2.4.5. Example.**

$$
\lim_{n\to\infty} \sqrt[n]{2n+1} = 1,
$$

because for all $n \in \mathbb{N}^{+}$

$$
\sqrt[n]{2}\sqrt[n]{n}
= \sqrt[n]{2n}
\le \sqrt[n]{2n+1}
\le \sqrt[n]{3n}
= \sqrt[n]{3}\sqrt[n]{n},
$$

and

$$
\lim_{n\to\infty}\left(\sqrt[n]{2}\sqrt[n]{n}\right)
=
\lim_{n\to\infty}\left(\sqrt[n]{3}\sqrt[n]{n}\right)
= 1.
$$

**2.4.6. Theorem (The sequence $\left\{\left(1+\frac{1}{n}\right)^n\right\}$).** *The sequence $\left\{\left(1+\frac{1}{n}\right)^n\right\}$ is monotonically increasing and bounded, therefore it is also convergent.*

**2.4.7. Definition.** The limit

$$
e = \lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n
$$

is called *Euler's number*. Its approximate value is:

$$
e \approx 2,7.
$$

## 2.5. The extended real number line

**2.5.1. Definition.** The set

$$
\overline{\mathbb{R}} = \mathbb{R} \cup \{+\infty,-\infty\}
$$

is called the extended real number line.

<!-- PDF page 17 -->

We extend the $<$ ordering relation of the real numbers to $\overline{\mathbb{R}}$ as follows: for every $a \in \mathbb{R}$

$$
-\infty < a, \qquad \text{and} \qquad a < \infty,
$$

as well as

$$
-\infty < \infty.
$$

We define the following operations with the $\pm\infty$ symbols:

$$
-(\pm\infty) = \mp\infty;
$$

$$
\begin{aligned}
+\infty + a &= a + (+\infty) = +\infty, && \text{if } a > -\infty,\\
-\infty + a &= a + (-\infty) = -\infty, && \text{if } a < +\infty;
\end{aligned}
$$

$$
\begin{aligned}
(\pm\infty)\cdot a &= a\cdot(\pm\infty) = \pm\infty, && \text{if } a > 0,\\
(\pm\infty)\cdot a &= a\cdot(\pm\infty) = \mp\infty, && \text{if } a < 0;
\end{aligned}
$$

$$
\frac{a}{\pm\infty} = 0, \qquad \text{if } a \in \mathbb{R}.
$$

We emphasize that the operations

$$
+\infty-\infty, \qquad -\infty+\infty,
$$

$$
(\pm\infty)\cdot 0, \qquad 0\cdot(\pm\infty),
$$

$$
\frac{\pm\infty}{\pm\infty}, \qquad
\frac{\pm\infty}{\mp\infty}, \qquad
\frac{a}{0} \quad (a \in \overline{\mathbb{R}})
$$

are not defined.

The previous definitions were introduced so that we can uniformly state the rules of limit calculation.

**2.5.2. Theorem (Operations with limits).** *If $a_n \to a \in \overline{\mathbb{R}}$ and $b_n \to b \in \overline{\mathbb{R}}$, then*

1. $a_n + b_n \to a+b$,
2. $a_n b_n \to ab$,
3. $\frac{a_n}{b_n} \to \frac{a}{b}$,

*provided that the operation on the right side is defined on the extended real number line.*

## 2.6. Neighborhoods and punctured neighborhoods

**2.6.1. Definition.** By a (*radius $\varepsilon$*) *neighborhood* of a point $a \in \mathbb{R}$ we mean a set (interval) of the form

$$
K_{\varepsilon}(a) = \{x \in \mathbb{R} \mid |x-a| < \varepsilon\}
= (a-\varepsilon,a+\varepsilon)
$$

where $\varepsilon \in (0,\infty)$.

By a (*radius $\varepsilon$*) *punctured neighborhood* of a point $a \in \mathbb{R}$ we mean a set of the form

$$
P_{\varepsilon}(a) = K_{\varepsilon}(a) \setminus \{a\}
= (a-\varepsilon,a) \cup (a,a+\varepsilon)
$$

where $\varepsilon \in (0,\infty)$.

<!-- PDF page 18 -->

$K_{\varepsilon}(a)$ is the set of those points $x \in \mathbb{R}$ for which $|x-a| < \varepsilon$, that is, their distance from $a$ is less than $\varepsilon$. Similarly, $P_{\varepsilon}(a)$ is the set of those points $x \in \mathbb{R}$ different from $a$, whose distance from $a$ is less than $\varepsilon$.

The right-sided and left-sided neighborhoods are defined similarly.

**2.6.2. Definition.** By a (*radius $\varepsilon$*) *right-sided* (*left-sided*) *neighborhood* of a point $a \in \mathbb{R}$ we mean an interval of the form

$$
K_{\varepsilon}^{+}(a) = [a,a+\varepsilon)
\qquad
\left(K_{\varepsilon}^{-}(a) = (a-\varepsilon,a]\right)
$$

where $\varepsilon \in (0,\infty)$.

By a (*radius $\varepsilon$*) *right-sided* (*left-sided*) *punctured neighborhood* of a point $a \in \mathbb{R}$ we mean an interval of the form

$$
P_{\varepsilon}^{+}(a) = (a,a+\varepsilon)
\qquad
\left(P_{\varepsilon}^{-}(a) = (a-\varepsilon,a)\right)
$$

where $\varepsilon \in (0,\infty)$.

Now we define the neighborhoods and punctured neighborhoods of $+\infty$ and $-\infty$.

**2.6.3. Definition.** By a *neighborhood and at the same time punctured neighborhood* of $+\infty$ we mean an interval of the form $(c,\infty)$, where $c \in \mathbb{R}$.

By a *neighborhood and at the same time punctured neighborhood* of $-\infty$ we mean an interval of the form $(-\infty,c)$, where $c \in \mathbb{R}$.

## 2.7. The limit of a function

**2.7.1. Definition.** The number $b \in \overline{\mathbb{R}}$ is called the *limit* of the function $f : \mathbb{R} \to \mathbb{R}$ at the point $a \in \overline{\mathbb{R}}$, if $f$ is defined in some punctured neighborhood of $a$ and for any sequence $\{x_n\}_{n=0}^{\infty}$ such that $x_n \in D(f)$, $x_n \ne a$ for all $n \in \mathbb{N}$, and $x_n \to a$, the sequence of function values $\{f(x_n)\}_{n=0}^{\infty}$ tends to $b$. Notation: $f(x) \to b$ as $x \to a$ or

$$
\lim_{x\to a} f(x) = b.
$$

We define the right-sided and left-sided limits similarly.

**2.7.2. Definition.** The number $b \in \overline{\mathbb{R}}$ is called the *right-sided* (*left-sided*) *limit* of the function $f : \mathbb{R} \to \mathbb{R}$ at the point $a \in [-\infty,\infty)$ ($a \in (-\infty,\infty]$), if $f$ is defined in some right-sided (left-sided) punctured neighborhood of $a$ and for any sequence $\{x_n\}_{n=0}^{\infty}$ such that $x_n \in D(f)$, $x_n > a$ ($x_n < a$) for all $n \in \mathbb{N}$, and $x_n \to a$, the sequence of function values $\{f(x_n)\}_{n=0}^{\infty}$ tends to $b$. Notation: $f(x) \to b$ as $x \to a+$ ($f(x) \to b$ as $x \to a-$) or

$$
\lim_{x\to a+} f(x) = b
\qquad
\left(\lim_{x\to a-} f(x) = b\right).
$$

It is obvious that for $a = -\infty$ ($a = +\infty$), the concept of limit and right-sided (left-sided) limit are the same.

Between the limit and the one-sided limits there is the following connection.

**2.7.3. Theorem.** *Let $a \in \mathbb{R}$. The limit $\lim_{x\to a} f(x)$ exists if and only if $\lim_{x\to a+} f(x)$ and $\lim_{x\to a-} f(x)$ exist, and*

$$
\lim_{x\to a-} f(x) = \lim_{x\to a+} f(x).
$$

<!-- PDF page 19 -->

The limit could have also been defined using neighborhoods and punctured neighborhoods. Namely, the following statement is true.

**2.7.4. Theorem.** *The limit of the function $f : \mathbb{R} \to \mathbb{R}$ at the point $a \in \overline{\mathbb{R}}$ is equal to the number $b \in \overline{\mathbb{R}}$ if and only if for any neighborhood $K$ of $b$ there exists a punctured neighborhood $P$ of $a$ such that $f(P) \subset K$.*

We can similarly reformulate the definition of the right-sided and left-sided limits. From the definition and the results concerning sequences it follows:

**2.7.5. Theorem (The rules of limit calculation).** *Let $a \in \overline{\mathbb{R}}$.*

1. *Then*

$$
\lim_{x\to a}(f(x)+g(x))
=
\lim_{x\to a} f(x) + \lim_{x\to a} g(x),
$$

$$
\lim_{x\to a}(f(x)\cdot g(x))
=
\lim_{x\to a} f(x) \cdot \lim_{x\to a} g(x),
$$

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\frac{\lim_{x\to a} f(x)}{\lim_{x\to a} g(x)},
$$

*provided that $\lim_{x\to a} f(x)$ and $\lim_{x\to a} g(x)$ exist, and the operation on the right side is defined in $\overline{\mathbb{R}}$.*

2. *If $\lim_{x\to a} f(x) = 0$ and $g$ is bounded in some punctured neighborhood of $a$, then $\lim_{x\to a}(f(x)\cdot g(x)) = 0$.*

3. *If $\lim_{x\to a} f(x) = 0$ and $f > 0$ in some punctured neighborhood of $a$, then*

$$
\lim_{x\to a} \frac{1}{f(x)} = +\infty.
$$

4. *If $\lim_{x\to a} f(x) = 0$ and $f < 0$ in some punctured neighborhood of $a$, then*

$$
\lim_{x\to a} \frac{1}{f(x)} = -\infty.
$$

5. *If $\lim_{x\to a} f(x)$, $\lim_{x\to a} g(x)$ exist and $f \le g$ in some punctured neighborhood of $a$, then*

$$
\lim_{x\to a} f(x) \le \lim_{x\to a} g(x).
$$

6. *(squeeze theorem) If $\lim_{x\to a} f(x) = \lim_{x\to a} h(x) = b \in \overline{\mathbb{R}}$ and $f \le g \le h$ in some punctured neighborhood of the point $a$, then $\lim_{x\to a} g(x) = b$.*

Similar statements can be formulated for right-sided and left-sided limits. Now here are two more important statements.

**2.7.6. Theorem (The limit of the composite function).** *Let $a \in \overline{\mathbb{R}}$. If*

$$
\lim_{x\to a} g(x) = b \in \overline{\mathbb{R}},
\qquad
\lim_{x\to b} f(x) = c \in \overline{\mathbb{R}},
$$

*and $g(x) \ne b$ for all $x$ in some punctured neighborhood of the point $a$, then*

$$
\lim_{x\to a} f(g(x)) = c.
$$

<!-- PDF page 20 -->

**2.7.7. Theorem (The limit of a monotonic function).** *Let $-\infty \le a < b \le +\infty$. If $f$ is monotonic in $(a,b)$, then $\lim_{x\to a+} f(x)$ and $\lim_{x\to b-} f(x)$ exist. If $f$ is monotonically increasing in $(a,b)$, then*

$$
\lim_{x\to a+} f(x) = \inf f((a,b)),
\qquad
\lim_{x\to b-} f(x) = \sup f((a,b)),
$$

*and if $f$ is monotonically decreasing in $(a,b)$, then*

$$
\lim_{x\to a+} f(x) = \sup f((a,b)),
\qquad
\lim_{x\to b-} f(x) = \inf f((a,b)),
$$

*where $f((a,b)) = \{f(x) \mid x \in (a,b)\}$.*

## 2.8. Continuity

**2.8.1. Definition.** The function $f : \mathbb{R} \to \mathbb{R}$ is said to be *continuous* at the point $a \in D(f)$, if

$$
\lim_{x\to a} f(x) = f(a).
$$

The function $f : \mathbb{R} \to \mathbb{R}$ is *continuous from the right* (*from the left*) at the point $a \in D(f)$, if

$$
\lim_{x\to a+} f(x) = f(a)
\qquad
\left(\lim_{x\to a-} f(x) = f(a)\right).
$$

It is obvious that the function $f : \mathbb{R} \to \mathbb{R}$ is continuous at the point $a$ if and only if it is continuous here both from the right and from the left.

If we take into account that the definition of the limit can be reformulated using neighborhoods, then we obtain the following equivalent formulation of continuity.

**2.8.2. Theorem.** *The function $f : \mathbb{R} \to \mathbb{R}$ is continuous at the point $a \in D(f)$ if and only if $f$ is defined in some neighborhood of $a$ and for any $\varepsilon > 0$ there exists $\delta > 0$ such that for all $x \in D(f)$ with $|x-a| < \delta$, $|f(x)-f(a)| < \varepsilon$.*

If $f$ is not continuous at the point $a$, we also say that $f$ has a *discontinuity* here. The following properties follow from the definition and the rules of limit calculation.

**2.8.3. Theorem (Operations with continuous functions).** *If $f$ and $g$ are continuous at the point $a$, then*

1. *so is $f+g$,*
2. *so is $fg$,*
3. *with the additional condition $g(a) \ne 0$, so is $\frac{f}{g}$.*

*If $g$ is continuous at the point $a$ and $f$ is continuous at the point $g(a)$, then $f \circ g$ is continuous at the point $a$.*

Now we define the continuity of a function on an interval.

**2.8.4. Definition.** Let $I \subset \mathbb{R}$ be an interval with endpoints $a$ and $b$, where

$$
-\infty \le a < b \le +\infty.
$$

The function $f$ is called *continuous* on the interval $I$, if $f$ is continuous at every point $c \in (a,b)$, furthermore if $a \in I$ then it is continuous from the right at $a$, and if $b \in I$ then it is continuous from the left at $b$.

<!-- PDF page 21 -->

**2.8.5. Theorem (Operations with continuous functions on an interval).** *If $f$ and $g$ are continuous on the interval $I \subset \mathbb{R}$, then*

1. *so is $f+g$,*
2. *so is $fg$,*
3. *if $g$ never vanishes in $I$, then so is $\frac{f}{g}$.*

Now we present the more important properties of continuous functions on bounded, closed intervals.

**2.8.6. Theorem (Weierstrass's theorem).** *If the function $f$ is continuous on the interval $[a,b] \subset \mathbb{R}$, then among the function values belonging to $[a,b]$ there is always a greatest and a least.*

The importance of the conditions is illustrated by the following two examples.

**2.8.7. Example.** The

$$
f(x) = \frac{1}{x}, \qquad x \in (0,1]
$$

function is continuous on the interval $(0,1]$. At the same time

$$
\lim_{x\to 0+} f(x) = \infty,
$$

therefore among the function values belonging to the interval $(0,1]$ there is no greatest. Thus, it is essential in Weierstrass's theorem that it is a closed interval.

**2.8.8. Example.** Let

$$
f(x) =
\begin{cases}
\frac{1}{x}, & \text{if } x \in (0,1],\\
0, & \text{if } x = 0
\end{cases}
$$

Despite the fact that $f$ is not continuous only at 0 (from the right), there is no greatest among the function values.

**2.8.9. Theorem (Bolzano's intermediate value theorem).** *If $f$ is continuous on the interval $[a,b] \subset \mathbb{R}$, then for any number $d$ between $f(a)$ and $f(b)$ there exists some $c \in [a,b]$ for which $f(c) = d$.*

Two important consequences of Bolzano's theorem:

**2.8.10. Theorem.** *If $f$ is continuous on the interval $[a,b] \subset \mathbb{R}$ and $f(a)f(b) < 0$, then there exists $c \in (a,b)$ such that $f(c) = 0$.*

**2.8.11. Theorem.** *If the function $f$ is continuous and not constant on the interval $I \subset \mathbb{R}$, then $f(I)$ is an interval.*

The next two statements are about the continuity of the composite and inverse functions.

**2.8.12. Theorem (The continuity of the composite function).** *If $g$ is continuous and not constant on the interval $I \subset \mathbb{R}$ and $f$ is continuous on the interval $J = g(I)$, then $f \circ g$ is continuous on the interval $I$.*

**2.8.13. Theorem (The continuity of the inverse function).** *If $f$ is strictly monotonic and continuous on the interval $I \subset \mathbb{R}$, then $f$ is invertible on the interval $I$ and $f_{-1}$ is continuous on the interval $J = f(I)$.*

<!-- PDF page 22 -->

## 2.9. The elementary basic functions

Below we list some elementary basic functions and their more important properties.

**Identity function** ($\operatorname{id}$). The

$$
\operatorname{id}(x) = x, \qquad x \in \mathbb{R},
$$

*identity function* defined by the formula is continuous and strictly monotonically increasing on $(-\infty,\infty)$.

**Power functions with positive exponent** ($\operatorname{id}^n$, $n \in \mathbb{N}^{+}$). For any $n \in \mathbb{N}^{+}$, the

$$
\operatorname{id}^n(x) = x^n, \qquad x \in \mathbb{R},
$$

*$n$-th power function* defined by the formula is continuous on $(-\infty,\infty)$; for odd $n$ it is strictly monotonically increasing on $(-\infty,\infty)$, and if $n$ is even, then it is strictly monotonically decreasing on $(-\infty,0]$ and strictly monotonically increasing on $[0,\infty)$. If $n$ is even (odd), then the $\operatorname{id}^n$ function is also even (odd).

**Power functions with negative exponent** ($\operatorname{id}^{-n}$, $n \in \mathbb{N}^{+}$). For any $n \in \mathbb{N}^{+}$, the

$$
\operatorname{id}^{-n}(x) = x^{-n} = \frac{1}{x^n}, \qquad x \in \mathbb{R}\setminus\{0\}
$$

power function $\operatorname{id}^{-n} : \mathbb{R}\setminus\{0\} \to \mathbb{R}$ defined by the formula is continuous on the intervals $(-\infty,0)$ and $(0,\infty)$; it is strictly monotonically decreasing on $(0,\infty)$, furthermore it is even or odd depending on whether $n$ is even or odd.

**Root functions** ($\operatorname{id}^{1/n}$, $n \in \mathbb{N}^{+}$). For any $n \in \mathbb{N}^{+}$, the $n$-th root function, denoted by $\operatorname{id}^{1/n}$, is defined by the formula

$$
\operatorname{id}^{1/n} =
\begin{cases}
(\operatorname{id}^{n})_{-1}, & \text{if } n \text{ is odd},\\
\left(\operatorname{id}^{n}|_{[0,\infty)}\right)_{-1}, & \text{if } n \text{ is even}
\end{cases}
$$

Notation:

$$
\operatorname{id}^{1/n}(x) = \sqrt[n]{x}, \qquad
x \in
\begin{cases}
(-\infty,\infty), & \text{if } n \text{ is odd},\\
[0,\infty), & \text{if } n \text{ is even}.
\end{cases}
$$

The function $\operatorname{id}^{1/n}$ is continuous and strictly monotonically increasing on $[0,\infty)$ or $(-\infty,\infty)$ depending on whether $n$ is even or odd.

**Polynomials.** Let $n \in \mathbb{N}$ and $a_0,a_1,\ldots,a_n \in \mathbb{R}$ be given. The

$$
p(x) = a_0x^n + a_1x^{n-1} + \cdots + a_n, \qquad x \in \mathbb{R},
$$

function $p : \mathbb{R} \to \mathbb{R}$ defined by the formula is called a polynomial of degree $n$; the number $a_0$ is the *leading coefficient* of the polynomial $p$. The polynomial $p$ is continuous on $(-\infty,\infty)$.

<!-- PDF page 23 -->

**Natural logarithm function** ($\ln$). It can be shown that there exists a real function, denoted by $\ln$, with the following properties:

$$
D(\ln) = (0,\infty),
$$

$$
\ln(xy) = \ln x + \ln y, \qquad \text{if } x,y \in (0,\infty),
$$

$$
\lim_{x\to 0} \frac{\ln(1+x)}{x} = 1.
$$

These properties uniquely determine the $\ln$ function. The $\ln$ function is called the *natural logarithm function*. The $\ln$ function is strictly monotonically increasing and continuous on $(0,\infty)$, furthermore

$$
\ln 1 = 0, \qquad \ln e = 1,
$$

$$
\ln x^n = n \ln x, \qquad \text{if } x \in (0,\infty) \text{ and } n \in \mathbb{N},
$$

$$
\lim_{x\to 0+} \ln x = -\infty,
\qquad
\lim_{x\to\infty} \ln x = \infty.
$$

**Exponential function** ($\exp$). The *exponential function*, denoted by $\exp$, is defined by the formula

$$
\exp = (\ln)_{-1}
$$

The function $\exp : (-\infty,\infty) \to (0,\infty)$ is positive, strictly monotonically increasing and continuous on $(-\infty,\infty)$. Further more important properties are:

$$
\exp 0 = 1, \qquad \exp 1 = e,
$$

$$
\exp(x+y) = \exp x \exp y, \qquad \text{if } x,y \in \mathbb{R},
$$

$$
\lim_{x\to -\infty} \exp x = 0,
\qquad
\lim_{x\to \infty} \exp x = \infty,
$$

$$
\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n = \exp x,
$$

$$
\lim_{x\to 0} \frac{\exp x - 1}{x} = 1.
$$

With the help of the $\exp$ and $\ln$ functions we can define an arbitrary power of a positive number.

**2.9.1. Definition.** For any $a \in (0,\infty)$ and $b \in \mathbb{R}$

$$
a^b = \exp(b\ln a).
$$

Since $\ln e = 1$, therefore according to the definition

$$
e^x = \exp x, \qquad x \in \mathbb{R}.
$$

**Exponential function with general base** ($\exp_a$, $a > 0$, $a \ne 1$). For any $a \in (0,1) \cup (1,\infty)$, the

$$
\exp_a x = a^x = \exp(x\ln a), \qquad x \in \mathbb{R},
$$

<!-- PDF page 24 -->

function $\exp_a : (-\infty,\infty) \to (0,\infty)$ defined by the formula is called an exponential function with base $a$. The function $\exp_a$ is positive, continuous, strictly monotonically decreasing for $a \in (0,1)$, and strictly monotonically increasing for $a \in (1,\infty)$. Further more important properties are:

$$
a^0 = 1,
$$

$$
a^{x+y} = a^x a^y, \qquad \text{if } x,y \in \mathbb{R},
$$

$$
(a^x)^y = a^{xy}, \qquad \text{if } x,y \in \mathbb{R},
$$

$$
\text{if } a \in (0,1), \quad
\text{then } \lim_{x\to -\infty} a^x = \infty
\text{ and }
\lim_{x\to\infty} a^x = 0.
$$

$$
\text{if } a \in (1,\infty), \quad
\text{then } \lim_{x\to -\infty} a^x = 0
\text{ and }
\lim_{x\to\infty} a^x = \infty.
$$

**Logarithmic function with general base** ($\log_a$, $a > 0$, $a \ne 1$). For any $a \in (0,1)\cup(1,\infty)$, the definition of the logarithmic function with base $a$, denoted by $\log_a$, is:

$$
\log_a = (\exp_a)_{-1}.
$$

The function $\log_a : (0,\infty) \to \mathbb{R}$ is continuous, strictly monotonically decreasing for $a \in (0,1)$, and strictly monotonically increasing for $a \in (1,\infty)$. Its more important properties are:

$$
\log_a 1 = 0,
$$

$$
\log_a(a^x) = x, \qquad \text{if } x \in \mathbb{R},
$$

$$
a^{\log_a x} = x, \qquad \text{if } x \in (0,\infty),
$$

$$
\log_a(xy) = \log_a x + \log_a y, \qquad \text{if } x,y \in (0,\infty),
$$

$$
\log_a(x^y) = y\log_a x, \qquad \text{if } x \in (0,\infty) \text{ and } y \in \mathbb{R};
$$

$$
\log_a x = \frac{\ln x}{\ln a}, \qquad \text{if } x \in (0,\infty),
$$

$$
\text{if } a \in (0,1), \quad
\text{then } \lim_{x\to 0+} \log_a x = \infty
\text{ and }
\lim_{x\to\infty} \log_a x = -\infty,
$$

$$
\text{if } a \in (1,\infty), \quad
\text{then } \lim_{x\to 0+} \log_a x = -\infty
\text{ and }
\lim_{x\to\infty} \log_a x = \infty.
$$

**Power function with general exponent** ($\operatorname{id}^b$, $b \in \mathbb{R}$). For any $b \in \mathbb{R}$, the

$$
\operatorname{id}^b(x) = x^b = \exp(b\ln x), \qquad x \in (0,\infty),
$$

function $\operatorname{id}^b : (0,\infty) \to \mathbb{R}$ defined by the formula is continuous on $(0,\infty)$. If $b \in (0,\infty)$, then it is strictly monotonically increasing, and if $b \in (-\infty,0)$, then it is strictly monotonically decreasing. Further properties:

$$
x^{-b} = \frac{1}{x^b}, \qquad \text{if } x \in (0,\infty) \text{ and } b \in \mathbb{R},
$$

$$
x^{b+c} = x^b x^c, \qquad \text{if } x \in (0,\infty) \text{ and } b,c \in \mathbb{R},
$$

$$
(x^b)^c = x^{bc}, \qquad \text{if } x \in (0,\infty) \text{ and } b,c \in \mathbb{R},
$$

<!-- PDF page 25 -->

$$
\text{if } b \in (0,\infty), \quad
\text{then } \lim_{x\to 0+} x^b = 0
\text{ and }
\lim_{x\to\infty} x^b = \infty.
$$

$$
\text{if } b \in (-\infty,0), \quad
\text{then } \lim_{x\to 0+} x^b = \infty
\text{ and }
\lim_{x\to\infty} x^b = 0.
$$

According to the third property, if $x \in (0,\infty)$ and $n \in \mathbb{N}^{+}$, then

$$
\left(x^{1/n}\right)^n = x.
$$

So

$$
x^{1/n} = \sqrt[n]{x}, \qquad \text{if } x \in (0,\infty) \text{ and } n \in \mathbb{N}^{+}.
$$

**Trigonometric functions** ($\sin$, $\cos$, $\tan$, $\cot$). Every point $P$ on the circle of radius 1 in the $x,y$-plane can be identified with the angle $x \in [0,2\pi)$ measured in radians that the segment $OP$ ($O = (0,0)$) encloses with the positive direction of the $x$-axis. We define the $\sin$ and $\cos$ (*sine* and *cosine*) functions on $[0,2\pi)$ such that the coordinates of the point $P$ identified with the angle $x \in [0,2\pi)$ are: $P = (\cos x,\sin x)$. Then we extend both functions to $(-\infty,\infty)$ by the formula

$$
\sin(x+2k\pi) = \sin x,
\qquad
\cos(x+2k\pi) = \cos x,
\qquad
x \in [0,2\pi),\ k \in \mathbb{Z},
$$

Then $D(\sin) = D(\cos) = (-\infty,\infty)$, $R(\sin) = R(\cos) = [-1,1]$. Both functions are periodic with period $2\pi$ and continuous on $(-\infty,\infty)$. The $\sin$ function is strictly monotonically increasing on $[-\pi/2,\pi/2]$ and strictly monotonically decreasing on $[\pi/2,3\pi/2]$. The $\cos$ function is strictly monotonically decreasing on $[0,\pi]$ and strictly monotonically increasing on $[\pi,2\pi]$. Further more important properties:

$$
\sin 0 = 0,\quad
\sin\frac{\pi}{6} = \frac{1}{2},\quad
\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2},\quad
\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2},\quad
\sin\frac{\pi}{2} = 1,\quad
\sin\pi = 0,
$$

$$
\cos 0 = 1,\quad
\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2},\quad
\cos\frac{\pi}{4} = \frac{\sqrt{2}}{2},\quad
\cos\frac{\pi}{3} = \frac{1}{2},\quad
\cos\frac{\pi}{2} = 0,\quad
\cos\pi = -1,
$$

$$
\sin(-x) = -\sin x,\qquad \cos(-x)=\cos x,\qquad x \in \mathbb{R},
$$

$$
\sin^2 x + \cos^2 x = 1,\qquad x \in \mathbb{R},
$$

$$
\sin(x+y) = \sin x\cos y + \cos x\sin y,\qquad x,y \in \mathbb{R},
$$

$$
\cos(x+y) = \cos x\cos y - \sin x\sin y,\qquad x,y \in \mathbb{R},
$$

$$
\sin(2x) = 2\sin x\cos x,\qquad
\cos(2x) = \cos^2 x - \sin^2 x,\qquad x \in \mathbb{R},
$$

$$
\sin^2 x = \frac{1-\cos(2x)}{2},\qquad
\cos^2 x = \frac{1+\cos(2x)}{2},\qquad x \in \mathbb{R},
$$

$$
\sin x - \sin y =
2\sin\frac{x-y}{2}\cos\frac{x+y}{2},
\qquad x,y \in \mathbb{R},
$$

$$
\cos x - \cos y =
-2\sin\frac{x+y}{2}\sin\frac{x-y}{2},
\qquad x,y \in \mathbb{R},
$$

$$
\lim_{x\to 0} \frac{\sin x}{x} = 1.
$$

The $\tan$ (*tangent*) and $\cot$ (*cotangent*) functions are defined by the formulas

$$
\tan x = \frac{\sin x}{\cos x},
\qquad
\text{if } x \in \mathbb{R} \setminus \{\pi/2 + k\pi \mid k \in \mathbb{Z}\},
$$

<!-- PDF page 26 -->

and

$$
\cot x = \frac{\cos x}{\sin x},
\qquad
\text{if } x \in \mathbb{R} \setminus \{k\pi \mid k \in \mathbb{Z}\},
$$

respectively. Thus

$$
D(\tan) =
\mathbb{R}\setminus\{\pi/2+k\pi \mid k \in \mathbb{Z}\},
\qquad
D(\cot) =
\mathbb{R}\setminus\{k\pi \mid k \in \mathbb{Z}\}.
$$

We note that in English literature the notations $\tan$ and $\cot$ are used instead of $\operatorname{tg}$ and $\operatorname{ctg}$. Both functions are periodic with period $\pi$, furthermore both functions are continuous on the subintervals of their domain of definition. The $\tan$ function is strictly monotonically increasing on the interval $(-\pi/2,\pi/2)$, $\tan 0 = 0$, and

$$
\lim_{x\to -\frac{\pi}{2}+} \tan x = -\infty,
\qquad
\lim_{x\to \frac{\pi}{2}-} \tan x = +\infty.
$$

The $\cot$ function is strictly monotonically decreasing on $(0,\pi)$, $\cot\frac{\pi}{2} = 0$, and

$$
\lim_{x\to 0+} \cot x = +\infty,
\qquad
\lim_{x\to \pi-} \cot x = -\infty.
$$

**Arcus functions** ($\arcsin$, $\arccos$, $\arctan$, $\operatorname{arccot}$). The word arcus is of Latin origin, meaning: arc. The *arc sine, arc cosine, arc tangent, and arc cotangent functions* are defined as follows:

$$
\begin{aligned}
\arcsin &= \left(\sin|_{[-\pi/2,\pi/2]}\right)_{-1},\\
\arccos &= \left(\cos|_{[0,\pi]}\right)_{-1},\\
\arctan &= \left(\tan|_{(-\pi/2,\pi/2)}\right)_{-1},\\
\operatorname{arccot} &= \left(\cot|_{(0,\pi)}\right)_{-1}.
\end{aligned}
$$

The function $\arcsin : [-1,1] \to [-\pi/2,\pi/2]$ is odd, continuous and strictly monotonically increasing on $[-1,1]$, furthermore

$$
\arcsin(-1) = -\frac{\pi}{2},
\qquad
\arcsin 0 = 0,
\qquad
\arcsin 1 = \frac{\pi}{2}.
$$

The function $\arccos : [-1,1] \to [0,\pi]$ is continuous and strictly monotonically decreasing on $[-1,1]$, furthermore

$$
\arccos(-1) = \pi,
\qquad
\arccos 0 = \frac{\pi}{2},
\qquad
\arccos 1 = 0.
$$

The function $\arctan : (-\infty,\infty) \to (-\pi/2,\pi/2)$ is odd, continuous and strictly monotonically increasing on $(-\infty,\infty)$, $\arctan 0 = 0$, and

$$
\lim_{x\to -\infty} \arctan x = -\frac{\pi}{2},
\qquad
\lim_{x\to \infty} \arctan x = \frac{\pi}{2}.
$$

The function $\operatorname{arccot} : (-\infty,\infty) \to (0,\pi)$ is continuous and strictly monotonically decreasing on the interval $(-\infty,\infty)$, $\operatorname{arccot} 0 = \pi/2$, furthermore

$$
\lim_{x\to -\infty} \operatorname{arccot} x = \pi,
\qquad
\lim_{x\to \infty} \operatorname{arccot} x = 0.
$$

<!-- PDF page 27 -->

Graphs of the arcus functions:

![Figure 2.1: graph of $y=\arcsin x$](pages_300/page-27.png)

![Figure 2.2: graph of $y=\arccos x$](pages_300/page-27.png)

<!-- PDF page 28 -->

![Figure 2.3: graph of $y=\arctan x$](pages_300/page-28.png)

![Figure 2.4: graph of $y=\operatorname{arccot} x$](pages_300/page-28.png)

<!-- PDF page 29 -->

# Chapter 3

# Differential calculus of real functions of one variable

## 3.1. The concept of differentiability

**3.1.1. Definition.** Let $f : \mathbb{R} \to \mathbb{R}$ be defined in some neighborhood of the point $a \in D(f)$, and let $x \in D(f)\setminus\{a\}$. The quotient

$$
\frac{f(x)-f(a)}{x-a}
$$

is called the *difference quotient* of the function $f$ belonging to the points $a$ and $x$.

The difference quotient belonging to the points $a$ and $x$ is the slope of the line (*secant*) connecting the points $(a,f(a))$ and $(x,f(x))$ of the graph of $f$ (the tangent of the angle $\alpha$ shown in the figure).

![Figure 3.1: difference quotient and secant](pages_300/page-29.png)

**3.1.2. Definition.** If the limit

$$
\lim_{x\to a} \frac{f(x)-f(a)}{x-a}
$$

exists and is finite, then the function $f$ is said to be *differentiable* at the point $a$, and the limit is called the *differential quotient* of the function $f$ at the point $a$.

<!-- PDF page 30 -->

**3.1.3. Definition.** The *derivative function*, briefly *derivative*, of the function $f : \mathbb{R} \to \mathbb{R}$, denoted by $f'$ or $\frac{df}{dx}$, is the function whose domain of definition consists of those points $x$ in $D(f)$ at which $f$ is differentiable, and to every such $x$ it assigns the differential quotient of the function $f$ at the point $x$.

So

$$
D(f') = \{a \in D(f) \mid f \text{ is differentiable at the point } a\}
$$

and

$$
f'(a) = \lim_{x\to a} \frac{f(x)-f(a)}{x-a},
\qquad \text{if } a \in D(f').
$$

**3.1.4. Definition.** If $f : \mathbb{R} \to \mathbb{R}$ is differentiable at the point $a$, then the line

$$
y = f'(a)(x-a) + f(a)
$$

is called the *tangent* of the function $f$ belonging to the point $a$.

Thus, the differential quotient $f'(a)$ is the slope of the tangent of the function $f$ belonging to the point $a$ (the tangent of the angle $\alpha$ shown in the figure).

![Figure 3.2: tangent line](pages_300/page-30.png)

The definition of the *right-sided* (*left-sided*) *differential quotient* (*derivative*) of the function $f : \mathbb{R} \to \mathbb{R}$ at the point $a$ is obtained by replacing the limit in the definition of the differential quotient at the point $a$ with the right-sided (left-sided) limit. Notation: $f'_+(a)$ ($f'_-(a)$). Thus

$$
f'_+(a) = \lim_{x\to a+} \frac{f(x)-f(a)}{x-a}
$$

and

$$
f'_-(a) = \lim_{x\to a-} \frac{f(x)-f(a)}{x-a},
$$

provided that the right-sided, respectively left-sided limit exists and is finite. The following connection is obvious.

<!-- PDF page 31 -->

**3.1.5. Theorem.** $f'(a)$ exists if and only if both $f'_+(a)$ and $f'_-(a)$ exist, and

$$
f'_+(a) = f'_-(a).
$$

**3.1.6. Example.** The function $f(x) = |x|$, $x \in \mathbb{R}$, is not differentiable at 0, because

$$
f'_+(0) = \lim_{x\to 0+}\frac{|x|-0}{x-0}
= \lim_{x\to 0+}\frac{x}{x} = 1,
$$

and

$$
f'_-(0) = \lim_{x\to 0-}\frac{|x|-0}{x-0}
= \lim_{x\to 0-}\frac{-x}{x} = -1.
$$

The next theorem is about the connection between differentiability and continuity.

**3.1.7. Theorem.** *If $f : \mathbb{R} \to \mathbb{R}$ is differentiable at the point $a$, then it is also continuous here.*

The converse of the theorem is not true, because for example the function $f(x) = |x|$, $x \in \mathbb{R}$, is continuous at 0, but it is not differentiable here.

## 3.2. Rules of differentiation

The next theorems describe the more important rules of differentiation.

**3.2.1. Theorem (Rules of differentiation).** *If $f : \mathbb{R} \to \mathbb{R}$ and $g : \mathbb{R} \to \mathbb{R}$ are differentiable at the point $a$, then so are the functions $f \pm g$, $f \cdot g$, and with the condition $g(a) \ne 0$, the function $\frac{f}{g}$, namely*

$$
(f \pm g)'(a) = f'(a) \pm g'(a),
$$

$$
(f\cdot g)'(a) = f'(a)g(a) + f(a)g'(a),
$$

$$
\left(\frac{f}{g}\right)'(a)
=
\frac{f'(a)g(a)-f(a)g'(a)}{g^2(a)}.
$$

**3.2.2. Theorem (Differentiation of the composite function).** *If $g : \mathbb{R} \to \mathbb{R}$ is differentiable at the point $a$ and $f : \mathbb{R} \to \mathbb{R}$ is differentiable at the point $g(a)$, then $f \circ g$ is also differentiable at the point $a$, namely*

$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a).
$$

**3.2.3. Theorem (Differentiation of the inverse function).** *If $f : \mathbb{R} \to \mathbb{R}$ is continuous and strictly monotonic in some neighborhood of the point $a$, differentiable at the point $a$ and $f'(a) \ne 0$, then $f_{-1}$ is also differentiable at the point $b = f(a)$, namely*

$$
(f_{-1})'(b) = \frac{1}{f'(a)}
=
\frac{1}{f'(f_{-1}(b))}.
$$

<!-- PDF page 32 -->

## 3.3. Derivatives of the elementary basic functions

We summarized the derivative functions of the elementary basic functions in a table.

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ | $0$ |
| $x^b$ | $bx^{b-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x\ln a}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\frac{1}{\cos^2 x}$ |
| $\cot x$ | $-\frac{1}{\sin^2 x}$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |
| $\operatorname{arccot}x$ | $-\frac{1}{1+x^2}$ |

$(c \in \mathbb{R},\ b \in \mathbb{R},\ a \in (0,\infty)\setminus\{1\})$

The table should be understood such that $f$ is differentiable at every point $x$ where $f$ is defined and the expression $f'(x)$ makes sense.

It happens that a function is given only by its formula, without specifying its domain of definition. In such cases, by the domain of definition of the function we mean the set of all numbers $x \in \mathbb{R}$ for which the expression makes sense. The only exceptions are functions of the form

$$
h(x) = f(x)^{g(x)}
$$

whose domain of definition is meant to be the set

$$
D(h) = \{x \in D(f) \cap D(g) \mid f(x) > 0\}
$$

<!-- PDF page 33 -->

In such cases, for the notation of the derivative function the more convenient symbol $(f(x))'$ is used instead of $f'(x)$. According to this, the domain of definition of the "function" $\ln(x-2)$ is the interval $(2,\infty)$, and here

$$
(\ln(x-2))' = \frac{1}{x-2}.
$$

**3.3.1. Example.** The domain of definition of the function $x^x$ is the interval $(0,\infty)$, and here

$$
(x^x)' = (e^{x\ln x})'
= e^{x\ln x}(x\ln x)'
= e^{x\ln x}\left(1\ln x + x\frac{1}{x}\right)
= x^x(\ln x+1).
$$

## 3.4. Higher order derivatives

**3.4.1. Definition.** By the *first derivative* of the function $f : \mathbb{R} \to \mathbb{R}$ we mean the derivative function $f'$. For any $n \in \mathbb{N}^{+}$, the derivative function of the $n$-th derivative is called the $(n+1)$-th derivative of $f$. The $n$-th derivative of $f$ is denoted by $f^{(n)}$. If $a \in D(f^{(n)})$, then $f$ is said to be $n$ times differentiable at the point $a$.

The function $f$ itself is also usually called the zeroth derivative of $f$, and is denoted by $f^{(0)}$. In the cases $n=2,3$, rather the notation

$$
f^{(2)} = f'', \qquad f^{(3)} = f'''
$$

is used. We can also encounter the fractional notation of the $n$-th derivative

$$
f^{(n)} = \frac{d^n f}{dx^n}
$$

## 3.5. Differentiability on an interval

**3.5.1. Definition.** Let $I \subset \mathbb{R}$ be an interval with endpoints $a$ and $b$, where

$$
-\infty \le a < b \le \infty.
$$

We say that the function $f : I \to \mathbb{R}$ is *differentiable on the interval $I$*, if $f$ is differentiable at every point $x \in (a,b)$, furthermore if $a \in I$, then $f$ is differentiable from the right at $a$, and if $b \in I$, then $f$ is differentiable from the left at $b$. Then the function $f'_I : I \to \mathbb{R}$ defined by the formula

$$
f'_I(x) =
\begin{cases}
f'(x), & \text{if } x \in (a,b),\\
f'_+(a), & \text{if } x = a \text{ and } a \in I,\\
f'_-(b), & \text{if } x = b \text{ and } b \in I
\end{cases}
$$

is called the derivative function of the function $f$ on the interval $I$.

In what follows we will also need the following concept.

**3.5.2. Definition.** The function $f$ is called *continuously differentiable* on the interval $I \subset \mathbb{R}$, if $f$ is differentiable on $I$ and the derivative function $f'_I$ is continuous on $I$.

<!-- PDF page 34 -->

## 3.6. Mean value theorems

We present three important mean value theorems of differential calculus.

**3.6.1. Theorem (Rolle's theorem).** *Let $[a,b] \subset \mathbb{R}$. If $f : \mathbb{R} \to \mathbb{R}$ is continuous on $[a,b]$, differentiable on $(a,b)$ and $f(a)=f(b)$, then there exists $c \in (a,b)$ such that*

$$
f'(c)=0.
$$

Under the conditions of the theorem, the function $f$ has a tangent which is parallel to the $x$-axis.

**3.6.2. Theorem (Lagrange's theorem).** *Let $[a,b] \subset \mathbb{R}$. If $f : \mathbb{R} \to \mathbb{R}$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then there exists $c \in (a,b)$ such that*

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

Under the conditions of the theorem, the function $f$ has a tangent which is parallel to the secant belonging to the points $a$ and $b$.

In the case $f(b)=f(a)$, Lagrange's theorem becomes Rolle's theorem.

**3.6.3. Theorem (Cauchy's theorem).** *Let $[a,b] \subset \mathbb{R}$. If $f : \mathbb{R} \to \mathbb{R}$ and $g : \mathbb{R} \to \mathbb{R}$ are continuous on $[a,b]$, differentiable on $(a,b)$ and $g'$ never vanishes on $(a,b)$, then there exists $c \in (a,b)$ such that*

$$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.
$$

In the case $g(x)=x$, Cauchy's theorem becomes Lagrange's theorem.

## 3.7. Criteria for monotonicity

**3.7.1. Definition.** Let $I \subset \mathbb{R}$ be an interval with endpoints $a$ and $b$, where

$$
-\infty \le a < b \le \infty.
$$

By the interior of the interval $I$ we mean the interval $(a,b)$. Notation: $\operatorname{int} I$.

The following important theorem is a consequence of Lagrange's theorem.

**3.7.2. Theorem (Criteria for monotonicity).** *Let $I \subset \mathbb{R}$ be an interval. If the function $f : \mathbb{R} \to \mathbb{R}$ is continuous on $I$, differentiable in the interior of $I$, and $f' \ge 0$ ($f' \le 0$) in the interior of $I$, then $f$ is monotonically increasing (monotonically decreasing) on the interval $I$, and if we replace the condition $f' \ge 0$ ($f' \le 0$) with the condition $f' > 0$ ($f' < 0$), then $f$ is strictly monotonically increasing (strictly monotonically decreasing) on $I$.*

A special case of the previous theorem is the following:

**3.7.3. Theorem.** *Let $I \subset \mathbb{R}$ be an interval. If $f : \mathbb{R} \to \mathbb{R}$ is continuous on $I$ and $f'=0$ in the interior of $I$, then $f$ is constant.*

<!-- PDF page 35 -->

## 3.8. L'Hospital's rule

With the help of Cauchy's mean value theorem we can prove the following statement.

**3.8.1. Theorem (L'Hospital's rule).** *Let $a \in \overline{\mathbb{R}}$. Suppose that either*

$$
\lim_{x \to a} f(x)=\lim_{x \to a} g(x)=0,
$$

*or*

$$
\lim_{x \to a} |g(x)|=\infty.
$$

*If for some $b \in \overline{\mathbb{R}}$*

$$
\lim_{x \to a} \frac{f'(x)}{g'(x)}=b,
$$

*then*

$$
\lim_{x \to a} \frac{f(x)}{g(x)}=b.
$$

*Similar statements are true for right-sided and left-sided limits as well.*

**3.8.2. Example.** By repeated application of L'Hospital's rule we get that

$$
\lim_{x \to 0}\frac{e^x-\sin x-1}{x^2}
=\lim_{x \to 0}\frac{e^x-\cos x}{2x}
=\lim_{x \to 0}\frac{e^x+\sin x}{2}
=\frac{1}{2}.
$$

**3.8.3. Example.** According to L'Hospital's rule

$$
\lim_{x \to \infty}\frac{\ln(1+3x)^7}{\ln(2+5x)^4}
=\lim_{x \to \infty}\frac{7\ln(1+3x)}{4\ln(1+5x)}
=\frac{7}{4}\lim_{x \to \infty}
\frac{\frac{3}{1+3x}}{\frac{5}{2+5x}}
=\frac{21}{20}\lim_{x \to \infty}\frac{2+5x}{1+3x}
=\frac{7}{4}.
$$

## 3.9. Absolute and local extrema

**3.9.1. Definition.** Let a function $f : \mathbb{R} \to \mathbb{R}$ be given. The number $a \in D(f)$ is called the *absolute maximum point* (*absolute minimum point*) of $f$, if for all $x \in D(f)$, $f(x) \le f(a)$ ($f(x) \ge f(a)$).

The absolute maximum point and absolute minimum point are collectively called *absolute extremum point*. Instead of absolute extremum point, the term *global extremum point* is also used.

**3.9.2. Definition.** The number $a \in D(f)$ is a *local maximum point* (*local minimum point*) of $f$, if $f$ is defined in some neighborhood of $a$ of radius $\delta$ ($\delta > 0$), furthermore for all $x \in (a-\delta,a) \cup (a,a+\delta)$, $f(x) \le f(a)$ ($f(x) \ge f(a)$). If we replace the $\le$ ($\ge$) inequality with $<$ ($>$), then we get the definition of a *strict local maximum point* (*strict local minimum point*).

The (strict) local maximum points and local minimum points are collectively called (strict) local extremum point.

<!-- PDF page 36 -->

In the next theorem we give a necessary condition for the existence of a local extremum point.

**3.9.3. Theorem.** *If $a$ is a local extremum point of the function $f : \mathbb{R} \to \mathbb{R}$ and $f$ is differentiable at the point $a$, then $f'(a)=0$.*

**3.9.4. Definition.** The points $a$ for which $f'(a)=0$ are called the *critical* (*stationary*) *points* of the function $f : \mathbb{R} \to \mathbb{R}$.

**3.9.5. Example.** It is easy to check that $0$ is a critical point of the function $f(x)=x^3$, $x \in \mathbb{R}$, at the same time $f$ is strictly monotonically increasing on $(-\infty,\infty)$. Thus, a critical point is in general not a local extremum point.

It follows from the criteria for monotonicity that if $a$ is a critical point of the function $f : \mathbb{R} \to \mathbb{R}$, and the derivative function $f'$ changes sign at the point $a$, then $a$ is a local extremum point of $f$.

From Weierstrass's theorem we know that any function continuous on a bounded closed interval has an absolute maximum point and an absolute minimum point. These can be determined as follows:

**3.9.6. Theorem.** *Let $[a,b] \subset \mathbb{R}$. If $f$ is continuous on $[a,b]$, then it attains its greatest (least) value either at one of the endpoints of the interval, or at some point $c \in (a,b)$ where $f'(c)=0$ or $f'(c)$ does not exist.*

**3.9.7. Example.** Let us find the (absolute) maximum and minimum of the function

$$
f(x)=3x^4-20x^3+48x^2-48x+1, \qquad x \in [0,3],
$$

Since $f$ is continuous and

$$
f'(x)=12(x^3-5x^2+8x-4)=12(x-1)(x-2)^2, \qquad x \in (0,3),
$$

therefore according to the previous theorem, the maximum point and minimum point of $f$ is one of the points

$$
x_1=0, \qquad x_2=1, \qquad x_3=2, \qquad x_4=3
$$

Comparing the function values

$$
f(0)=1, \qquad f(1)=-16, \qquad f(2)=-15, \qquad f(3)=-8
$$

we obtain that the greatest function value is $1$, and the least is $-16$.

## 3.10. Convexity, concavity

As a reminder: the slope of the secant of a function $f : \mathbb{R} \to \mathbb{R}$ belonging to the points $x_1, x_2 \in D(f)$, $x_1 < x_2$, is

$$
\frac{f(x_2)-f(x_1)}{x_2-x_1},
$$

and the equation of the secant is

$$
y=\frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1).
$$

<!-- PDF page 37 -->

**3.10.1. Definition.** Let $I \subset \mathbb{R}$ be an interval and $f : I \to \mathbb{R}$. The function $f$ is said to be *convex* (*concave*) on $I$, if for any $x_1, x, x_2 \in I$, $x_1 < x < x_2$,

$$
f(x) \le \frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1),
\qquad
\left(
f(x) \ge \frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1)
\right).
$$

If we replace the $\le$ ($\ge$) inequality with $<$ ($>$), then we get the definition of a *strictly convex* (*strictly concave*) function on $I$.

The function $f$ is convex (concave) on the interval $I$, if for any $x_1, x_2 \in I$, $x_1 < x_2$, the secant belonging to the points $x_1$ and $x_2$ lies above (below) the graph of $f$ on the interval $(x_1,x_2)$.

**3.10.2. Theorem (Criterion for convexity and concavity).** *If $f$ is continuous on the interval $I \subset \mathbb{R}$ and $f'$ is (strictly) monotonically increasing ((strictly) monotonically decreasing) in the interior of $I$, then the function $f$ is (strictly) convex ((strictly) concave) on $I$.*

*Specially, if $f : \mathbb{R} \to \mathbb{R}$ is continuous on $I$ and $f'' \ge 0$ ($f'' \le 0$) in the interior of $I$, then $f$ is convex (concave) on $I$, and if we replace the $\ge$ ($\le$) inequality with $>$ ($<$), then $f$ is strictly convex (strictly concave) on $I$.*

**3.10.3. Example.** Let

$$
f(x)=\frac{1}{1+x^2}, \qquad x \in \mathbb{R}.
$$

The function $f$ is continuous, furthermore

$$
f'(x)=\frac{-2x}{(1+x^2)^2}, \qquad x \in \mathbb{R},
$$

$$
f''(x)=\frac{2\cdot(3x^2-1)}{(1+x^2)^3}, \qquad x \in \mathbb{R}.
$$

Since $f'' < 0$ on the interval $\left(-\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right)$ and $f'' > 0$ on the intervals $\left(-\infty,-\frac{1}{\sqrt{3}}\right)$, $\left(\frac{1}{\sqrt{3}},\infty\right)$, therefore $f$ is strictly concave on $\left(-\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right)$, and strictly convex on $\left(-\infty,-\frac{1}{\sqrt{3}}\right)$ and $\left(\frac{1}{\sqrt{3}},\infty\right)$.

<!-- PDF page 38 -->

# Chapter 4

# Integral calculus of real functions of one variable

## 4.1. Primitive function and indefinite integral

**4.1.1. Definition.** Let $I \subset \mathbb{R}$ be an interval and $f$ a real function defined on $I$. The function $F : I \to \mathbb{R}$ is said to be the *primitive function* of $f$ on the interval $I$, if $F$ is differentiable on $I$ and here $F'_I=f$.

As a reminder: $F'_I$ denotes the derivative of the function $F$ on $I$ (see Definition 3.5.1).

The following property is a consequence of Lagrange's theorem.

**4.1.2. Theorem.** *If $F$ is the primitive function of the function $f$ on the interval $I$, then for every $c \in \mathbb{R}$, $F+c$ is also a primitive function of $f$ on $I$, and any primitive function of $f$ on $I$ is of the form $F+c$, where $c \in \mathbb{R}$.*

**4.1.3. Definition.** By the *indefinite integral* of a real function $f$ on the interval $I \subset \mathbb{R}$ we mean the set of primitive functions of $f$ on $I$ (if not empty). Notation: $\int f$ or $\int f(x)\,dx$. The function $f$ is called the *integrand*.

If $F$ is a primitive function of $f$ on $I$, then

$$
\int f=\{F+c \mid c \in \mathbb{R}\} \qquad \text{on } I.
$$

This is usually written in the following imprecise, but because of its brevity convenient and therefore generally used form:

$$
\int f=F+c, \qquad \text{(on the interval } I\text{),}
$$

or

$$
\int f(x)\,dx=F(x)+c, \qquad (x \in I).
$$

Since

$$
\left(\frac{x^2}{2}\right)'=x, \qquad x \in (-\infty,\infty),
$$

<!-- PDF page 39 -->

therefore

$$
\int x\,dx=\frac{x^2}{2}+c, \qquad x \in (-\infty,\infty).
$$

## 4.2. Basic integrals

By reversing the rules of differentiation we obtain the following integrals.

| $\int f(x)\,dx$ | $F(x)+c$ |
|---|---|
| $\int x^b\,dx$ | $\dfrac{x^{b+1}}{b+1}+c$ |
| $\int \dfrac{1}{x}\,dx$ | $\ln |x|+c$ |
| $\int e^x\,dx$ | $e^x+c$ |
| $\int a^x\,dx$ | $\dfrac{a^x}{\ln a}+c$ |
| $\int \sin x\,dx$ | $-\cos x+c$ |
| $\int \cos x\,dx$ | $\sin x+c$ |
| $\int \dfrac{1}{\cos^2 x}\,dx$ | $\tan x+c$ |
| $\int \dfrac{1}{\sin^2 x}\,dx$ | $-\cot x+c$ |
| $\int \dfrac{1}{\sqrt{1-x^2}}\,dx$ | $\arcsin x+c$ |
| $\int \dfrac{1}{1+x^2}\,dx$ | $\arctan x+c$ |

$$
\left(b \in \mathbb{R}\setminus\{-1\}, \qquad a \in (0,\infty)\setminus\{1\}\right)
$$

The integral formulas in the table are valid on any open interval where $f$ and the function on the right side are defined.

## 4.3. Integration by elementary transformations

**4.3.1. Theorem (Linearity).** *If $F$ and $G$ are primitive functions of $f$ and $g$ on the interval $(a,b) \subset \mathbb{R}$, respectively, furthermore $k \in \mathbb{R}$, then $kF$ is a primitive function of $(kf)$ on $(a,b)$, and $F+G$ is of $(f+g)$. According to this*

<!-- PDF page 40 -->

$$
\int (kf)=k\int f,
$$

$$
\int (f+g)=\int f+\int g.
$$

The first formula is to be understood in the sense that the elements of the function set $\int (kf)$ are $k$ times the elements of the function set $\int f$, and the second formula in the sense that the elements of the function set $\int(f+g)$ are produced by adding the elements of the function sets $\int f$ and $\int g$. The further formulas related to indefinite integrals are to be understood similarly.

**4.3.2. Theorem (Linear substitution).** *Let $F$ be a primitive function of $f$ on the interval $(\alpha,\beta) \subset \mathbb{R}$, furthermore let $g(x)=ax+b$ be a linear function, $a,b \in \mathbb{R}$, $a \ne 0$, and $(\gamma,\delta)$ be an interval such that $g((\gamma,\delta)) \subset (\alpha,\beta)$. Then $\frac{1}{a}(F \circ g)$ is a primitive function of the function $f \circ g$ on $(\gamma,\delta)$, that is*

$$
\int f(ax+b)\,dx=\frac{1}{a}F(ax+b)+c, \qquad x \in (\gamma,\delta).
$$

**4.3.3. Example.**

$$
\int \sqrt{3x+5}\,dx
=\int (3x+5)^{\frac{1}{2}}\,dx
=\frac{1}{3}\frac{(3x+5)^{\frac{3}{2}}}{\frac{3}{2}}+c
=\frac{2}{9}\sqrt{(3x+5)^3}+c,
$$

where $x \in \left(-\frac{5}{3},\infty\right)$.

**4.3.4. Example.**

$$
\begin{aligned}
\int \cos^2 x\,dx
&=\int \frac{1+\cos 2x}{2}\,dx
=\int \left(\frac{1}{2}+\frac{\cos 2x}{2}\right)\,dx \\
&=\frac{1}{2}\int 1\,dx+\frac{1}{2}\int \cos 2x\,dx
=\frac{1}{2}x+\frac{1}{2}\frac{\sin 2x}{2}+c
=\frac{x}{2}+\frac{\sin 2x}{4}+c,
\end{aligned}
$$

where $x \in (-\infty,\infty)$.

## 4.4. Integration by parts

The following theorem can be easily derived from the derivative of the product.

**4.4.1. Theorem (Integration by parts).** *Let $(a,b) \subset \mathbb{R}$. If $f$ and $g$ are differentiable on $(a,b)$ and the function $fg'$ has a primitive function on $(a,b)$, then the function $f'g$ also has a primitive function on $(a,b)$, and*

$$
\int f'(x)g(x)\,dx=f(x)g(x)-\int f(x)g'(x)\,dx,
\qquad x \in (a,b).
$$

<!-- PDF page 41 -->

**4.4.2. Example.**

$$
\int (\cos x)x\,dx
=\int (\sin x)'x\,dx
=(\sin x)x-\int (\sin x)1\,dx
=(\sin x)x+\cos x+c,
$$

where $x \in (-\infty,\infty)$.

## 4.5. Integration by substitution

The following theorem follows from the differentiation rule of composite functions.

**4.5.1. Theorem (Type 1 substitution).** *Let $g$ be differentiable and not constant on the interval $(a,b) \subset \mathbb{R}$. If $F$ is a primitive function of $f$ on the interval $g((a,b))$, then $F \circ g$ is a primitive function of $f$ on $(a,b)$, that is*

$$
\int (f(g(x)))g'(x)\,dx=F(g(x))+c, \qquad x \in (a,b),
$$

*or*

$$
\int (f(g(x)))g'(x)\,dx=\left[\int f(u)\,du\right]_{u=g(x)}.
$$

We can formally arrive at this latter formula by introducing the substitution $u=g(x)$ in the left-side integral, and then deriving the relation $g'(x)\,dx=du$ from the formula $\frac{du}{dx}=g'(x)$, and thus we arrive at the integral on the right side.

**4.5.2. Example.** From the integral

$$
\int (\sin^2 x)\cos x\,dx
$$

with the substitution $u=\sin x$, when $\frac{du}{dx}=\cos x$, and thus $\cos x\,dx=du$, we obtain the integral

$$
\left[\int u^2\,du\right]_{u=\sin x}
$$

Since

$$
\int u^2\,du=\frac{u^3}{3}+c,
$$

therefore

$$
\int (\sin^2 x)\cos x\,dx=\frac{\sin^3 x}{3}+c,
\qquad x \in (-\infty,\infty).
$$

**4.5.3. Theorem (Type 2 substitution).** *Suppose that $g$ is differentiable on the interval $(\alpha,\beta) \subset \mathbb{R}$ and $g'$ never vanishes on $(\alpha,\beta)$. If $H$ is a primitive function of $(f \circ g)g'$ on $(\alpha,\beta)$, then $H \circ g_{-1}$ is a primitive function of $f$ on the interval $g((\alpha,\beta))$, that is*

$$
\int f(x)\,dx=
\left[\int (f(g(u)))g'(u)\,du\right]_{u=g_{-1}(x)},
\qquad x \in g((\alpha,\beta)).
$$

<!-- PDF page 42 -->

We can formally arrive at the formula by performing the substitution $x=g(u)$ in the left-side integral, and then deriving the expression $dx=g'(u)\,du$ from the relation $\frac{dx}{du}=g'(u)$, finally we get the right-side integral. After computing this, we have to write $g_{-1}(x)$ in place of $u$.

**4.5.4. Example.** From the integral

$$
\int x\sqrt[3]{x-1}\,dx
$$

using the substitution $x=u^3+1$ and the expressions $\frac{dx}{du}=3u^2$ and $dx=3u^2\,du$, we obtain the integral

$$
\int (u^3+1)u\,3u^2\,du
=3\int (u^6+u^3)\,du
$$

We can already calculate this:

$$
3\int (u^6+u^3)\,du
=3\left(\frac{u^7}{7}+\frac{u^4}{4}\right)+c
=\frac{3}{7}u^7+\frac{3}{4}u^4+c.
$$

Finally, using $u=\sqrt[3]{x-1}$ obtained from the relation $x=u^3+1$, we get that

$$
\int x\sqrt[3]{x-1}\,dx
=\frac{3}{7}\left(\sqrt[3]{x-1}\right)^7
+\frac{3}{4}\left(\sqrt[3]{x-1}\right)^4+c,
\qquad x \in (-\infty,\infty).
$$

## 4.6. The definition of the Riemann integral

A non-negative continuous function $f$ is given on the interval $[a,b] \subset \mathbb{R}$. We want to calculate the area $T$ of the "curvilinear" trapezoid which is bounded from above by the curve $y=f(x)$, from the sides by the lines $x=a$ and $x=b$, and from below by the $x$-axis. With the help of the concepts defined below, we can give a lower and upper estimate for $T$. The construction can also be used in the more general case when $f$ is merely bounded on $[a,b]$.

**4.6.1. Definition.** By a *partition* of the interval $[a,b] \subset \mathbb{R}$ we mean a finite sequence $\{x_0,\ldots,x_k\}$ for which

$$
a=x_0<x_1<\cdots<x_k=b.
$$

**4.6.2. Definition.** Let a bounded function $f$ be given on the interval $[a,b]$ and let $\Phi=\{x_0,\ldots,x_k\}$ be a partition of $[a,b]$. Due to boundedness, for every $i \in \{1,2,\ldots,k\}$, the numbers

$$
m_i=\inf f([x_{i-1},x_i]), \qquad M_i=\sup f([x_{i-1},x_i])
$$

are well-defined. The sum

$$
s_\Phi=\sum_{i=1}^k m_i(x_i-x_{i-1})
$$

is called the *lower sum* of the function $f$ belonging to the partition $\Phi$, the sum

$$
S_\Phi=\sum_{i=1}^k M_i(x_i-x_{i-1})
$$

is called the *upper sum* of the function $f$ belonging to the partition $\Phi$ (see Figure 4.1).

<!-- PDF page 43 -->

![Figure 4.1](pages_300/page-43.png)

If $f$ is bounded on $[a,b]$, then for any partition $\Phi$ of $[a,b]$

$$
\inf f([a,b])\cdot(b-a) \le s_\Phi \le S_\Phi \le \sup f([a,b])\cdot(b-a).
$$

**4.6.3. Definition.** For any $f$ bounded on $[a,b]$, let

$$
I_A=\sup\{s_\Phi \mid \Phi \text{ is a partition of } [a,b]\},
$$

and

$$
I_F=\inf\{S_\Phi \mid \Phi \text{ is a partition of } [a,b]\}.
$$

The number $I_A$ is called the *(Darboux) lower integral* of the function $f$, and the number $I_F$ is called the *(Darboux) upper integral* of $f$.

It is obvious that if $f$ is non-negative and continuous on $[a,b]$, then for any partition $\Phi$ of $[a,b]$

$$
s_\Phi \le T \le S_\Phi,
$$

and therefore

$$
I_A \le T \le I_F
$$

also holds, where $T$ is the area to be calculated.

**4.6.4. Definition.** The function $f$ is said to be *integrable* on the interval $[a,b] \subset \mathbb{R}$, if $f$ is bounded on $[a,b]$ and $I_A=I_F$. Then the common value $I=I_A=I_F$ is called the *Riemann definite integral*, or briefly *Riemann integral*, of the function $f$ on $[a,b]$. Notation:

$$
\int_a^b f \qquad \text{or} \qquad \int_a^b f(x)\,dx.
$$

We will need the following concept.

**4.6.5. Definition.** We say that the function $f$ is *piecewise continuous* (*piecewise monotonic*) on the interval $[a,b] \subset \mathbb{R}$, if there exists a partition $\{x_0,\ldots,x_k\}$ of $[a,b]$ ($a=x_0<x_1<\cdots<x_k=b$) such that in each of the subintervals $(x_{i-1},x_i)$, $i \in \{1,\ldots,k\}$, $f$ is continuous (monotonic).

<!-- PDF page 44 -->

The next theorem shows that a very wide class of functions is integrable.

**4.6.6. Theorem (Existence theorem).** *If $f$ is bounded and piecewise continuous or piecewise monotonic on the interval $[a,b]$, then $f$ is also integrable on $[a,b]$.*

Let $f$ be non-negative and continuous on $[a,b]$. Then due to the integrability of $f$, $I_A=I_F=\int_a^b f$. Taking into account that $I_A \le T \le I_F$, we obtain that

$$
T=\int_a^b f,
$$

where $T$ is the area of the plane region mentioned at the beginning of the section.

The next theorem shows that the integrability and the value of the integral are not affected if we change the integrand at a finite number of points.

**4.6.7. Theorem.** *Let $f$ and $g$ be real functions defined on the interval $[a,b] \subset \mathbb{R}$. If $f$ is integrable on $[a,b]$, and there is a finite subset $H$ of $[a,b]$ such that $f=g$ on the set $[a,b]\setminus H$, then $g$ is also integrable on $[a,b]$, and*

$$
\int_a^b g=\int_a^b f.
$$

This theorem motivates the following definition.

**4.6.8. Definition.** The function $g$ is said to be *integrable in a broader sense* on the interval $[a,b] \subset \mathbb{R}$, if there is a function $f$ integrable on $[a,b]$ which is equal to $g$ on $[a,b]$ except at a finite number of points. Then by definition

$$
\int_a^b g=\int_a^b f.
$$

**4.6.9. Example.** The function

$$
g(x)=\frac{\sin x}{x}, \qquad x \in (0,1]
$$

is not defined at $0$, but it is still integrable in a broader sense on $[0,1]$, because due to the limit relation

$$
\lim_{x \to 0} g(x)=\lim_{x \to 0}\frac{\sin x}{x}=1
$$

it is bounded, and if we define it in any way at the point $0$, we also get a bounded and piecewise continuous function.

In what follows, we will always understand integrability in the broader sense.

<!-- PDF page 45 -->

## 4.7. Properties of the Riemann integral

In the next theorems we summarize the more important properties of the Riemann integral.

**4.7.1. Theorem.** *If $f$ and $g$ are integrable on the interval $[a,b] \subset \mathbb{R}$ and $\alpha,\beta$ are constants, then $\alpha f+\beta g$ is also integrable on $[a,b]$, and*

$$
\int_a^b(\alpha f+\beta g)=\alpha\int_a^b f+\beta\int_a^b g.
$$

**4.7.2. Theorem.** *If $f$ and $g$ are integrable on the interval $[a,b] \subset \mathbb{R}$ and $f \le g$ on $[a,b]$, then*

$$
\int_a^b f \le \int_a^b g.
$$

**4.7.3. Theorem.** *If $f$ is integrable on the interval $[a,b] \subset \mathbb{R}$, then $|f|$ is also integrable on $[a,b]$, and*

$$
\left|\int_a^b f\right| \le \int_a^b |f|.
$$
