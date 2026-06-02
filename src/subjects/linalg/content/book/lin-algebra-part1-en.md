# Linear Algebra

<!-- OCR of "lin.algebra könyv.pdf" — Ferenc Wettl (BME), Linear Algebra (textbook). Faithful HU transcription with KaTeX. Figures rendered as italic caption notes; margin notes as blockquotes. -->

*Ferenc Wettl · Budapest University of Technology and Economics*

# Part I — Sources of Linear Algebra

One of the two main sources of linear algebra originates from the field of geometry, and the other from algebra. Both sources can be well characterized by an elementary concept: one is the vector, the other is the system of linear equations. The first part of this book examines these two concepts starting from an entirely elementary, high school level. Deeper concepts of linear algebra already emerge here, but only in their simplest and least abstract forms. By the end of the first part, we will see that these two sources, even at this introductory level, become inseparably merged into a single stream.

*Figure: Hang gliding @ Pule (CC) on flickr by purplemattfish.*

# 1. Vectors

According to a widely held view, when describing natural phenomena, we express many relationships using numerical data, so-called *scalars* or *scalar quantities*, while describing others requires specifying a direction in addition to the numerical data; the latter are called *vectors*. The reality is much more colorful: the range is wide, from 4-dimensional vectors of spacetime, to bit vectors, to the hundreds-of-thousands-dimensional vectors used in economic computations, or the multi-million-dimensional vectors handled by internet search engines, to the abstract concept of vectors that bears fruit in various areas of mathematics.

## Vectors in 2- and 3-Dimensional Space

*In this section, we introduce the intuitive, geometric concept of a vector. Through the operations of vector addition and scalar multiplication, we arrive at the concepts of linear combination and linear independence. The key concept of this section is representing a vector as a linear combination of linearly independent vectors.*

### Directed Line Segment, Bound and Free Vector

Consider a hang glider in flight. Countless scalar and vector quantities describe its state. The distance from the ground, air pressure, drag coefficient, or the angle of climb are scalar quantities, while the velocity and acceleration vectors, the lift acting on the wing, the force of gravity, the wind force, or the displacement vector are vector quantities.

The concept of a vector is related to the concept of a directed line segment. By a directed line segment, we mean a segment whose endpoints are given an order, i.e., we designate which is its *initial point* and which is its *terminal point*. In other terminology, a directed line segment is also referred to as a *bound vector*. A directed line segment with initial point $A$ and terminal point $B$ is denoted by $\overrightarrow{AB}$.

> *Scalar:* originates from the Latin word *scalae* (scālae), meaning *stairs, ladder*. The word "scale" is also a derivative of this word, which well preserves the original meaning. The word "scalar" is used in mathematics in the sense of a number or numerical value, for example, when we want to emphasize that a quantity is directionless, i.e., not of a vector nature.

A bound vector is suitable for describing several phenomena. A natural example is the displacement vector, which specifies from which point to which point in space an object has moved. Another example of a bound vector is the vector describing the force causing deformation on an elastic body (Figure 1.1).

In applications, it often happens that a phenomenon can be described equally well by different directed line segments. For example, if we characterize the motion of an object by a directed line segment whose length is equal to the distance traveled per unit time and whose direction indicates the direction of motion, then it does not matter from which point in space we start this segment; it describes the motion in the same way (Figure 1.2). In this case, therefore, it is not the two points themselves that are of interest, but their relationship, namely at what *distance* and in what *direction* one point is from the other. Exactly where the two points are located is not essential. Thus, any two directed line segments that can be translated parallelly into one another express the same relationship. In physics, the resulting concept is called a *free vector*. This is one of the sources of the vector concept in linear algebra: in geometry, a *vector* can be represented by a directed line segment, with the addition that two directed line segments represent the exact same vector if and only if they can be translated parallelly into one another (see Figure 1.3).

*Figure 1.1. Bound vectors: (a) displacement vector (with footprints), (b) vector of force causing deformation on an elastic body.*

*Figure 1.2. Example of a free vector.*

We use lowercase bold letters to denote vectors, e.g., $\mathbf{x}$, $\mathbf{u}$, $\mathbf{v}$, etc. In engineering and physics literature, uppercase bold letters also occur, e.g., force $\mathbf{F}$ and magnetic induction $\mathbf{B}$ are also vector quantities.

> *Vector:* originates from the Latin word *vector*, meaning *carrier, bearer, traveler*. In other fields of science, it is used in the sense of a carrier medium, and in physiology, in the sense of a viral vector.

### Specifying a Vector with a Directed Line Segment

A vector can be specified by a directed line segment, that is, by designating two points and their order. In fact, this much data is redundant, since a directed line segment translated parallel to itself specifies the same vector; therefore, we can require, for example, that the initial point be a pre-designated fixed point in the plane (or space). This common initial point is called the *origin*. A directed line segment starting from the origin is uniquely defined by its terminal point, so to specify a vector, it is sufficient to specify a single point: the terminal point. With this, we can establish a one-to-one correspondence between the points and vectors of the plane or space (Figure 1.4). The directed segment $\overrightarrow{OP}$ drawn from the origin to a point $P$ is also commonly referred to as the *position vector* corresponding to that point. Clearly, among the representatives of any vector, there is exactly one position vector.

In the following, we will often characterize a set of points by vectors pointing from the origin to the points in the set. When we speak of the terminal points of vectors, we always mean the terminal points of the directed line segments corresponding to the vectors, starting from the origin.


An identical vector whose initial and terminal points coincide is called a *zero vector* or *null vector*. The zero vector is usually denoted by a bold zero, that is, $\mathbf{0}$. In the correspondence between points and vectors, the zero vector corresponds to the origin.

> *Vector notation:* Typographical rules for typesetting engineering and physics texts are described by the ISO 31-11 standard. According to this, vectors are to be set in bold letters. In handwriting, it is customary to indicate a vector by underlining or drawing an arrow over it (e.g., $\underline{x}$, $\underline{u}$, $\vec{u}$, …), but with a careful notation system and note-taking, the markings can be omitted. Higher mathematical works do not use this standard, reasoning that it is clear from the context whether the letters denote vectors ($x$, $u$, $v$, …).

*Figure 1.3. Directed line segments representing the same vector.*

*Figure 1.4. The one-to-one correspondence between the points and vectors of the plane: point $P$ corresponds to the vector $\overrightarrow{OP}$, the origin to the null vector.*

### Specifying a Vector with Length and Direction

If we can measure distance and determine direction, then a vector can also be specified by its length and direction. The *length* of a vector, i.e., the distance between its two endpoints, is also called the *absolute value* of the vector. The absolute value of vector $\mathbf{a}$ is denoted by $|\mathbf{a}|$. The absolute value of a vector is also called the *Euclidean norm* of the vector, as it is a special case of a more general concept, the norm. The notation for the (Euclidean) norm of vector $\mathbf{a}$ reminds one of the absolute value: $\|\mathbf{a}\|$.

The concept of direction is defined in exercise 1.73. Here we settle for stating that two non-zero vectors are said to be of the *same direction* or *codirectional* if the rays starting from their initial points and passing through their terminal points can be made to overlap by parallel translation (Figure 1.5 (a)). Two vectors are said to be *collinear* or *parallel* if the lines containing them are parallel. Two vectors that are parallel but not of the same direction are called *opposite in direction* (Figure 1.5 (b)). The direction of the zero vector is considered arbitrary, so it is of the same direction as any vector. It can be seen that a vector is uniquely determined by its length and direction.

When determining the direction of a vector, we often call upon the concept of an angle. By the angle between two vectors, we mean the angle formed by rays starting from an arbitrary point in the plane or space and pointing in the same direction as the given vectors (Figure 1.6). The angle between vectors $\mathbf{a}$ and $\mathbf{b}$ is denoted by $(\mathbf{a},\mathbf{b})_\angle$. Thus, the angle between two vectors always falls between $0°$ and $180°$ — measured in radians, between $0$ and $\pi$ —, including the boundaries. The angle between vectors in the same direction is $0$, and for vectors in the opposite direction is $\pi$.

*Figure 1.5. (a) vectors in the same direction, (b) collinear (parallel) vectors, some of which are in the same direction and some in opposite directions.*

*Figure 1.6. The angle between two vectors ($0 \leqslant \alpha, \beta, \gamma \leqslant \pi$). The upper part of the figure shows the two given vectors, below it is the method for determining their angle.*

## Vector Operations in 2- and 3-Dimensional Space

The definitions of vector operations — addition and multiplication by a number — arise naturally when we think of typical applications of vectors. E.g., it is self-evident that by the sum of two displacements we mean the execution of the displacements one after the other, and by twice a translation we mean a translation in the same direction but twice as long.

**Definition 1.1 (Sum of two vectors — triangle method).** *Let two vectors, $\mathbf{a}$ and $\mathbf{b}$, be given. Pick an arbitrary point $O$. Start a vector $\overrightarrow{OP}$ equal to $\mathbf{a}$ from it, and from its terminal point, a vector $\overrightarrow{PQ}$ equal to $\mathbf{b}$. The vector $\overrightarrow{OQ}$ is called the sum of vectors $\mathbf{a}$ and $\mathbf{b}$ and is denoted by $\mathbf{a}+\mathbf{b}$ (see Figure 1.7).*

It is easy to see that the result is independent of the choice of point $O$, therefore the operation of vector addition can be defined by this method (the proof can be read from Figure 1.8).

We also introduce another method for constructing the sum of two non-collinear vectors:

*Figure 1.7. The sum of vectors $\mathbf{a}$ and $\mathbf{b}$.*

*Figure 1.8. The sum is independent of the choice of point $O$, because $\overrightarrow{OQ}$ and $\overrightarrow{O'Q'}$ represent the same vector.*

**Proposition 1.2 (Parallelogram method).** *The sum of vectors $\mathbf{a}$ and $\mathbf{b}$ starting from a common initial point can be obtained from the parallelogram whose two adjacent sides are $\mathbf{a}$ and $\mathbf{b}$; then the sum is the vector starting from the common initial point and running to the opposite vertex of the parallelogram.*

▶ If $\mathbf{a}$ and $\mathbf{b}$ are *non-collinear*, then their sum can be obtained, for example, by drawing a line parallel to the line of $\mathbf{b}$ through the terminal point of $\mathbf{a}$, and a line parallel to the line of $\mathbf{a}$ through the terminal point of $\mathbf{b}$. The vector running from the common initial point to the intersection of these two lines will be the sum (see Figure 1.9).

In applications, sometimes the triangle method, sometimes the parallelogram method seems more straightforward (see 1.10).

If $\mathbf{a}$ and $\mathbf{b}$ are two vectors in space, then in both the triangle method and the parallelogram method, the directed line segments representing the vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{a}+\mathbf{b}$ fall into one plane. Generally, we say that a few vectors in space are in the same plane, in other words *coplanar*, if there is a plane such that the directed line segments representing all the vectors can be translated parallelly into this plane. Accordingly, vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{a}+\mathbf{b}$ are always coplanar.

Vector addition is commutative ($\mathbf{a}+\mathbf{b} = \mathbf{b}+\mathbf{a}$) and associative ($\mathbf{a}+(\mathbf{b}+\mathbf{c}) = (\mathbf{a}+\mathbf{b})+\mathbf{c}$). Their truth can be read from Figure 1.11. Due to associativity, when adding multiple terms, the parentheses can be omitted; for example, the sum of the three vectors in the figure can be written as $\mathbf{a}+\mathbf{b}+\mathbf{c}$.

Starting vectors $\mathbf{a}$ and $\mathbf{b}$ from a common initial point — with the triangle method — it is immediately clear that there exists exactly one vector $\mathbf{x}$ for which $\mathbf{a} = \mathbf{b}+\mathbf{x}$ (see Figure 1.12 (a)). By using this, the difference of vectors can be defined.

**Definition 1.3 (Difference of vectors).** *Given vectors $\mathbf{a}$ and $\mathbf{b}$. The uniquely existing vector $\mathbf{x}$ for which $\mathbf{a} = \mathbf{b}+\mathbf{x}$ is called the difference of $\mathbf{a}$ and $\mathbf{b}$, and is denoted by $\mathbf{a}-\mathbf{b}$.*

Constructing the difference vector is easily kept in mind with either the triangle or parallelogram method (see Figure 1.12), if we think of the definition, i.e., that $\mathbf{a}-\mathbf{b}$ is the vector which, when added to $\mathbf{b}$, gives $\mathbf{a}$, so
$$\mathbf{a} = \mathbf{b} + (\mathbf{a}-\mathbf{b}).$$

*Figure 1.9. Parallelogram method.*

*Figure 1.10. In figure (a) the footprints lead from $O$ to $P$, then from there to $Q$. The sum of the displacement vectors $\overrightarrow{OP}$ and $\overrightarrow{PQ}$ is $\overrightarrow{OQ}$ (triangle method). In figure (b) the boat rows in direction $\overrightarrow{OB}$, but the river flows in direction $\overrightarrow{OA}$. The resultant of the two velocities, i.e., their sum, is $\overrightarrow{OC}$ (parallelogram method).*

*Figure 1.11. Commutativity and associativity of vector addition.*

*Figure 1.12. Determining the difference vector with the triangle and parallelogram methods.*

From Figure 1.13 it can also be read that if a vector of the same length as vector $\mathbf{b}$ but in the opposite direction is denoted by $-\mathbf{b}$, then the relation $\mathbf{a}-\mathbf{b} = \mathbf{a}+(-\mathbf{b})$ holds, and thus it is also true that $\mathbf{b}+(-\mathbf{b}) = \mathbf{0}$.

It is interesting to note that if $P$ and $Q$ are two arbitrary points, then we know the vector $\overrightarrow{OQ}-\overrightarrow{OP}$ even if we do not know the point $O$, as it is the vector $\overrightarrow{PQ}$. Many similar phenomena led to the concept of a *torsor*, which we introduce in a short side note.

**Definition 1.4 (Multiplication of a vector by a scalar).** *Let $k$ be a real number. By the $k$-fold of vector $\mathbf{a}$, we mean the vector whose length is $|k|$ times the length of $\mathbf{a}$, and its direction*
- *is arbitrary, if $k = 0$ or $\mathbf{a} = \mathbf{0}$,*
- *is the same as the direction of $\mathbf{a}$, if $k > 0$, and*
- *is opposite, if $k < 0$ (see Figure 1.14).*

From the definition of scalar multiplication, it is immediately apparent that for every vector $\mathbf{a}$, $1\mathbf{a} = \mathbf{a}$, $0\mathbf{a} = \mathbf{0}$, and $(-1)\mathbf{a} = -\mathbf{a}$.

At the end of this paragraph, we summarize the most important properties of vector operations, with the help of which we will later generalize the concept of a vector. We leave the verification of the properties not yet proven to the Reader.

**Theorem 1.5 (Properties of vector operations).** *If $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ are arbitrary vectors in 2- or 3-dimensional space, $\mathbf{0}$ is the zero vector, and $r$, $s$ are two arbitrary real numbers, then the following identities hold:*

| | | | |
|---|---|---|---|
| *a)* | $\mathbf{a}+\mathbf{b} = \mathbf{b}+\mathbf{a}$ | *e)* | $r(s\mathbf{a}) = (rs)\mathbf{a}$ |
| *b)* | $(\mathbf{a}+\mathbf{b})+\mathbf{c} = \mathbf{a}+(\mathbf{b}+\mathbf{c})$ | *f)* | $r(\mathbf{a}+\mathbf{b}) = r\mathbf{a}+r\mathbf{b}$ |
| *c)* | $\mathbf{a}+\mathbf{0} = \mathbf{a}$ | *g)* | $(r+s)\mathbf{a} = r\mathbf{a}+s\mathbf{a}$ |
| *d)* | $\mathbf{a}+(-\mathbf{a}) = \mathbf{0}$ | *h)* | $1\mathbf{a} = \mathbf{a}$ and $0\mathbf{a} = \mathbf{0}$ |

### Definition of Linear Combination

If we apply the operations of scalar multiplication and addition to vectors, we get a linear combination of those vectors. More precisely:

**Definition 1.6 (Linear combination).** *By a linear combination of vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$, we mean a vector of the form*
$$c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \ldots + c_k\mathbf{a}_k,$$
*where $c_1, c_2, \ldots, c_k$ are real numbers. We say that vector $\mathbf{v}$ can be produced as a linear combination of vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$, if there exist real numbers $c_1, c_2, \ldots, c_k$ such that $\mathbf{v} = c_1\mathbf{a}_1 + \ldots + c_k\mathbf{a}_k$.*

If we multiply a vector by a scalar, according to the previous definition we get a linear combination of it, which is parallel to it, i.e., collinear. Thus, all linear combinations of a non-zero vector are purely vectors parallel to it (see Figure 1.15). Even more is true:

> *Torsor:* a concept in modern mathematics. A few examples before defining it: (1) We cannot measure energy in Newtonian physics, only energy difference. But if we agree on which state of a given system belongs to the 0 energy level, we can also talk about the energy of the system. (2) The concept of a vector pointing to a point makes no sense until the origin is designated, but we can determine the difference of two vectors pointing to points independently of the origin. (3) The indefinite integral of a function $f$ over an interval $I$ is of the form $F+C$, where $C$ is a constant. It makes no sense to ask what the value of $C$ is in a specific primitive function of $f$, but the difference of two primitive functions is always a constant. (4) A similar phenomenon in music: the distance between any two notes can be determined, but we cannot tell for a note that it is "fa" until we fix which is "do".
>
> A torsor can be defined with an algebraic structure called a *commutative group*, which is a set equipped with a commutative, associative, invertible operation having a zero element, and closed under this operation. For example, the reals with respect to addition form a commutative group, or vectors with respect to addition, or $\mathbb{Z}_{12}$ with respect to addition. Let $G$ be a commutative group, and $X$ a non-empty set on which the difference of any two elements is defined and belongs to $G$, such that for any elements $x_0, x_1, x_2 \in X$, if $x_1 - x_0 = g_1$ and $x_2 - x_0 = g_2$, then $x_1 - x_2 = g_1 - g_2$. In other words, $X$ preserves the structure of $G$ without the zero element in such a way that by choosing any of its elements as the zero element, we immediately get $G$.

*Figure 1.13. Illustration of $\mathbf{a}-\mathbf{b} = \mathbf{a}+(-\mathbf{b})$.*

*Figure 1.14. Scalar multiples of a vector.*

**Theorem 1.7 (Vectors parallel to a vector).** *If $\mathbf{a}$ is a non-zero vector, then any vector $\mathbf{v}$ parallel to it is a scalar multiple of $\mathbf{a}$, that is, there exists a real number $c$ such that $\mathbf{v} = c\mathbf{a}$, in other words, $\mathbf{v}$ can be produced as some linear combination of $\mathbf{a}$. This representation is unique.*

*Proof.* If the two vectors are in the same direction, the constant $c$ appearing in the representation is simply the quotient of the absolute values of the vectors $\mathbf{v}$ and $\mathbf{a}$; if they are in opposite directions, it is $(-1)$ times this quotient. $\square$

A consequence of this theorem is that if $\mathbf{a}$ is a non-zero vector, then the set of all linear combinations of $\mathbf{a}$ and the set of vectors parallel to $\mathbf{a}$ coincide. In other words: the terminal points of all linear combinations of a non-zero vector give a *line passing through the origin*.

From the triangle method, it is clear that any linear combination of two arbitrary vectors will be a vector coplanar with them. The converse of the statement is also true:

**Theorem 1.8 (Vectors in the same plane as two vectors).** *If $\mathbf{a}_1$ and $\mathbf{a}_2$ are non-parallel vectors, then any vector $\mathbf{v}$ in the same plane as them can be produced as some linear combination of $\mathbf{a}_1$ and $\mathbf{a}_2$, that is, there exist constants $v_1$ and $v_2$ such that $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$. This representation is unique.*

*Proof.* The part of the proof ensuring the existence of the decomposition can be easily read from Figure 1.16. Through the terminal point of $\mathbf{v}$, let's draw lines parallel to vectors $\mathbf{a}_1$ and $\mathbf{a}_2$. The two sides of the resulting — possibly degenerate — parallelogram are, according to the previous theorem, constant multiples of $\mathbf{a}_1$ and $\mathbf{a}_2$, respectively, whose sum is exactly $\mathbf{v}$ by the parallelogram rule. We have thus produced $\mathbf{v}$ as a linear combination of $\mathbf{a}_1$ and $\mathbf{a}_2$. We still need to show that this representation is unique. Let
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 = w_1\mathbf{a}_1 + w_2\mathbf{a}_2$$
be two representations of the vector $\mathbf{v}$. Then, after rearranging, $(v_1 - w_1)\mathbf{a}_1 = (w_2 - v_2)\mathbf{a}_2$. Since they are parallel to vectors $\mathbf{a}_1$ and $\mathbf{a}_2$, their constant multiples can only be equal if both are the zero vector. However, $\mathbf{a}_1 \neq \mathbf{0}$ and $\mathbf{a}_2 \neq \mathbf{0}$, therefore the previous equality holds if and only if $(v_1 - w_1) = (w_2 - v_2) = 0$, i.e., if $v_1 = w_1$ and $v_2 = w_2$. Thus the decomposition is unique. $\square$

It can be seen, therefore, that the set of all linear combinations of two non-parallel vectors coincides with the set of vectors coplanar with the two vectors, put simply: the terminal points of all linear combinations of two non-parallel vectors give a *plane passing through the origin*.

*Figure 1.15. A non-zero vector $\mathbf{a}$, and some of its linear combinations in two kinds of representations.*

*Figure 1.16. $\mathbf{v}$ can be uniquely represented in the form $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$, if $\mathbf{a}_1$ and $\mathbf{a}_2$ are not parallel.*

There is nothing surprising in that any linear combination of three non-coplanar vectors in space is a spatial vector; however, the converse of the statement is very important:

**Theorem 1.9 (Spatial vectors).** *If $\mathbf{a}_1$, $\mathbf{a}_2$, and $\mathbf{a}_3$ are vectors not in the same plane, then any vector $\mathbf{v}$ in space can be produced as some linear combination of $\mathbf{a}_1$, $\mathbf{a}_2$, and $\mathbf{a}_3$, that is, there exist constants $v_1$, $v_2$, and $v_3$ such that*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3. \tag{1.1}$$
*This representation is unique.*

*Proof.* Through the terminal point $V$ of vector $\mathbf{v}$ we draw a line parallel to vector $\mathbf{a}_3$, which intersects the plane of vectors $\mathbf{a}_1$ and $\mathbf{a}_2$ at a point $C$ (Figure 1.17 (a)). According to the previous theorem, the vector $\overrightarrow{OC}$ can be uniquely produced as a linear combination of $\mathbf{a}_1$ and $\mathbf{a}_2$, i.e., $\overrightarrow{OC} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2$ (see Figure 1.17 (b)). On the other hand, $\mathbf{v} = \overrightarrow{OV} = \overrightarrow{OC} + \overrightarrow{CV}$, where $\overrightarrow{CV} \parallel \mathbf{a}_3$, so $\overrightarrow{CV} = v_3\mathbf{a}_3$ for some real $v_3$. Therefore $\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3$.

We still have to show the uniqueness of the representation! Suppose that
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3 = w_1\mathbf{a}_1 + w_2\mathbf{a}_2 + w_3\mathbf{a}_3$$
are two decompositions of $\mathbf{v}$. Then $(v_1 - w_1)\mathbf{a}_1 + (v_2 - w_2)\mathbf{a}_2 + (v_3 - w_3)\mathbf{a}_3 = \mathbf{0}$. So if $v_1 \neq w_1$, then $\mathbf{a}_1$ can be expressed as a linear combination of $\mathbf{a}_2$ and $\mathbf{a}_3$:
$$\mathbf{a}_1 = -\frac{v_2 - w_2}{v_1 - w_1}\mathbf{a}_2 - \frac{v_3 - w_3}{v_1 - w_1}\mathbf{a}_3.$$
This contradicts that $\mathbf{a}_1$, $\mathbf{a}_2$, and $\mathbf{a}_3$ are not in the same plane. Thus, $v_1 = w_1$. Similarly, we get that $v_2 = w_2$ and $v_3 = w_3$, i.e., the representation (1.1) is unique. $\square$

### Linear Independence

From the previous two theorems it is clear that three vectors in space either fall into one plane, in which case one of them is a linear combination of the other two, or they do not fall into one plane, and then none of them can be produced as a linear combination of the other two. In this case, however, every vector in space can be produced as their linear combination. We see it is fundamental whether a vector can be expressed as a linear combination of other vectors.

**Definition 1.10 (Independence of vectors).** *We say that a vector $\mathbf{v}$ is linearly independent of vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ ($n \geq 1$), if $\mathbf{v}$ cannot be expressed as a linear combination of these vectors. We say that vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ ($n \geq 2$) are linearly independent, if none of these vectors can be expressed as a linear combination of the rest. If at least one of them can be expressed as a linear combination of the rest, i.e., at least one is linearly dependent on the rest, then we call these vectors linearly dependent. A system of vectors consisting of a single vector is considered linearly independent if the vector is not the zero vector.*

*Figure 1.17. Representing a spatial vector $\mathbf{v}$ as a linear combination of three non-coplanar vectors.*

For example, a spatial vector that does not fall into a given plane is independent of any system of vectors falling into the plane (Figure 1.18).

The edge vectors starting from one vertex of a cube are linearly independent (Figure 1.19).

Generally: any two non-collinear vectors are linearly independent; similarly, any three non-coplanar vectors, i.e., not falling into one plane, are linearly independent.

Theorem 1.8 can thus be reformulated as follows:

**Theorem 1.11 (Decomposition of a planar vector).** *If $\mathbf{a}_1$ and $\mathbf{a}_2$ are two linearly independent vectors in a plane, then every vector $\mathbf{v}$ in the plane can be uniquely produced as a linear combination of these vectors, that is, there uniquely exist real numbers $v_1$ and $v_2$ such that*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2.$$

Similarly, Theorem 1.9 can be reformulated like this:

**Theorem 1.12 (Decomposition of a spatial vector).** *If $\mathbf{a}_1$, $\mathbf{a}_2$, and $\mathbf{a}_3$ are three linearly independent spatial vectors, then every vector $\mathbf{v}$ in space can be uniquely produced as a linear combination of these vectors, that is, there uniquely exist real numbers $v_1$, $v_2$, and $v_3$ such that*
$$\mathbf{v} = v_1\mathbf{a}_1 + v_2\mathbf{a}_2 + v_3\mathbf{a}_3.$$


In the section on coordinates, these two theorems will be the basis for introducing the coordinate system.

### Special Linear Combinations

Certain configurations of the plane and space can be well characterized by linear combinations if we impose certain conditions on the combination coefficients.

**Proposition 1.13 (Characterization of a line passing through two points).** *Let $O$, $A$, and $B$ be three points in space. The terminal point of the linear combination of the form $r\overrightarrow{OA} + s\overrightarrow{OB}$ points to a point on the line passing through points $A$ and $B$ if and only if $r + s = 1$.*

*Proof.* Let $\mathbf{a} = \overrightarrow{OA}$, $\mathbf{b} = \overrightarrow{OB}$, and let $\mathbf{x}$ point to some point $X$ on the line $AB$, that is, let $\mathbf{x} = \overrightarrow{OB} + r\overrightarrow{BA}$ for some real number $r$, so
$$\mathbf{x} = \mathbf{b} + r(\mathbf{a} - \mathbf{b}), \quad\text{that is,}\quad \mathbf{x} = r\mathbf{a} + (1-r)\mathbf{b}.$$
Moving backward along the steps of the above reasoning, it can be seen that for every real number $r$, the terminal point of the vector $r\mathbf{a} + (1-r)\mathbf{b}$ is on the line $AB$. We can also formulate it by saying that all points on the line passing through the terminal points of vectors $\mathbf{a}$ and $\mathbf{b}$ are exactly those linear combinations of the form $r\mathbf{a} + s\mathbf{b}$ for which $r + s = 1$ (see Figure 1.20). $\square$

*Figure 1.18. A vector $\mathbf{v}$ not in the plane cannot be produced as a linear combination of planar vectors.*

*Figure 1.19. Three edge vectors of a cube starting from one vertex are linearly independent.*

*Figure 1.20. Point $X$ is on the line $AB$ if and only if for real numbers $r$ and $s$ for which $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB}$, $r + s = 1$ holds. In this figure $r = -0.5$, $s = 1.5$.*

**Proposition 1.14 (Characterization of the points of an interval).** *Let $O$, $A$, and $B$ be three points in the plane or space. The vector $r\overrightarrow{OA} + s\overrightarrow{OB}$ points to some point on the segment connecting points $A$ and $B$ if and only if $r + s = 1$ and $0 \leqslant r, s \leqslant 1$.*

*Proof.* We repeat the solution of the previous exercise with the difference that here the relation $\overrightarrow{BX} = r\overrightarrow{BA}$ is only true for values of $r$ falling between 0 and 1. So $\mathbf{x} = r\mathbf{a} + (1-r)\mathbf{b}$, where $0 \leqslant r \leqslant 1$. In other words, all points of the segment connecting the terminal points of vectors $\mathbf{a}$ and $\mathbf{b}$ are exactly given by those linear combinations of the form $r\mathbf{a} + s\mathbf{b}$ in which $r + s = 1$ and $0 \leqslant r, s \leqslant 1$ (see Figure 1.21). $\square$

A similar relation is true for three vectors as well, that is, it can be shown that exactly those vectors point to the points of the plane laid on the terminal points of non-collinear vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ which, written in the form $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$, satisfy $r + s + t = 1$. If we also stipulate for these three numbers that $0 \leqslant r, s, t \leqslant 1$, then vectors of the form $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$ point to points in the triangle determined by the terminal points of the three vectors (see Figure 1.22 and exercise 1.27).

It is intuitively clear, and can be read from the accompanying Figure 1.23, but we do not prove it, that all linear combinations of any two non-collinear vectors in which the coefficients fall between 0 and 1 give a parallelogram. More precisely, the terminal point of a vector of the form $r\mathbf{a} + s\mathbf{b}$ belongs to the *parallelogram* determined (spanned) by $\mathbf{a}$ and $\mathbf{b}$ if and only if $0 \leqslant r, s \leqslant 1$.

Something similar can be said about three non-coplanar vectors: the terminal point of a vector of the form $r\mathbf{a} + s\mathbf{b} + t\mathbf{c}$ belongs to the *parallelepiped* spanned by $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ if and only if $0 \leqslant r, s, t \leqslant 1$ (Figure 1.23).

*Figure 1.21. Point $X$ is in the interval $AB$ if and only if for some reals $r$ and $s$ between 0 and 1, $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB}$, and $r + s = 1$.*

*Figure 1.22. Point $X$ falls in the plane passing through points $A$, $B$, and $C$ if and only if $\overrightarrow{OX} = r\overrightarrow{OA} + s\overrightarrow{OB} + t\overrightarrow{OC}$ and $r + s + t = 1$. And $X$ falls in the triangle $ABC$ if and only if, in addition, $0 \leqslant r, s, t \leqslant 1$ holds.*

*Figure 1.23. The parallelogram and parallelepiped can be produced by linear combinations where the coefficients fall between 0 and 1.*

## Exercises

### Control Questions

**1.1.● Vectors: true - false.** Which of the following statements are true, which are false?
- a) If the angle between vectors $\mathbf{a}$ and $\mathbf{b}$ is $\alpha$, then the angle between $\mathbf{a}$ and $-\mathbf{b}$ is $\pi - \alpha$.
- b) If $A$ and $B$ are two given points, then the vector $\overrightarrow{OA} + \overrightarrow{OB}$ is independent of the choice of $O$.
- c) If $A$ and $B$ are two given points, then the vector $\overrightarrow{OA} - \overrightarrow{OB}$ is independent of the choice of $O$.
- d) If two vectors are in the same direction, then one is a scalar multiple of the other.
- e) If one of two vectors is a scalar multiple of the other, then they are in the same direction.
- f) If one of two vectors is a scalar multiple of the other, then they are parallel.

**1.2.● Linear dependence: true - false.** Which of the following statements are true, which are false?
- a) If three vectors in space are linearly dependent, then any of them is a linear combination of the other two.
- b) Three vectors can be given in space such that none of them is linearly independent of the rest.
- c) Three vectors, $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$, can be given in space such that $\mathbf{a}$ is independent of vectors $\mathbf{b}$ and $\mathbf{c}$, but $\mathbf{b}$ is not independent of vectors $\mathbf{a}$ and $\mathbf{c}$.
- d) Any set of at least 4 vectors in space is linearly dependent.
- e) 5 vectors can be given in space such that for exactly two of them it is true that they are independent of the other four vectors.

**1.3.** Let $O$, $A$, and $B$ be three arbitrary points not on the same line. Suppose $P$ satisfies the relation
$$\overrightarrow{OP} = \frac{1+\sqrt{5}}{2}\overrightarrow{OA} + \frac{1-\sqrt{5}}{2}\overrightarrow{OB}.$$
*a)* Do the points $P$, $A$, and $B$ fall on a single line? *b)* Is $P$ closer to point $A$ or $B$? *c)* Does point $P$ fall inside the segment $\overline{AB}$? Answer these three questions also for the point $P$ for which
$$\overrightarrow{OP} = \frac{\sqrt{5}-1}{2}\overrightarrow{OA} + \frac{3-\sqrt{5}}{2}\overrightarrow{OB}.$$

**1.4.** Let $O$, $A$, $B$, and $C$ be four arbitrary points not in the same plane. Suppose $P$ satisfies the relation
$$\overrightarrow{OP} = \frac{7}{13}\overrightarrow{OA} - \frac{3}{13}\overrightarrow{OB} + \frac{9}{13}\overrightarrow{OC}.$$
*a)* Do the points $P$, $A$, $B$, and $C$ fall into a single plane? *b)* Does point $P$ fall inside the triangle $ABC$?

**1.5.** Is the terminal point of the vector $\frac{2}{9}\mathbf{a} + \frac{3}{9}\mathbf{b} + \frac{2}{9}\mathbf{c}$ inside the parallelepiped spanned by the vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$?

### Vector Operations in 2- and 3-Dimensional Space

**1.6.** A non-mathematical illustration for the concept of a vector: how would we complete the following analogy? "If the directed line segment is the fish, then the vector is the..."

*Figure: schools of fish (directed line segments as fish).*

**1.7.** Two arbitrary vectors, $\mathbf{a}$ and $\mathbf{b}$, are given in the plane. Construct the following vectors: *a)* $\mathbf{c} = 2\mathbf{a} + \mathbf{b}$, *b)* $\mathbf{d} = 2\mathbf{a} - \mathbf{b}$, *c)* $\mathbf{e} = \frac{2}{3}\mathbf{a} + \frac{1}{2}\mathbf{b}$, *d)* $\mathbf{f} = \frac{2}{3}\mathbf{a} + \frac{3}{5}\mathbf{b}$.

**1.8.** Let $\mathbf{u} = \mathbf{a} + \mathbf{b}$, $\mathbf{v} = \mathbf{a} - \mathbf{b}$. Express the following vectors using vectors $\mathbf{a}$ and $\mathbf{b}$: *a)* $2\mathbf{u} + 2\mathbf{v}$, *b)* $3\mathbf{u} - 3\mathbf{v}$, *c)* $3\mathbf{u} - \mathbf{v}$, *d)* $2\mathbf{u} - \frac{1}{2}\mathbf{v}$.

**1.9.** Consider the square $ABCD$. Determine the following sums! *a)* $\overrightarrow{AB} + \overrightarrow{CD}$, *b)* $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD}$, *c)* $\overrightarrow{AB} - \overrightarrow{AC}$, *d)* $\overrightarrow{AC} + \overrightarrow{DB}$, *e)* $\overrightarrow{AC} - \overrightarrow{DB}$, *f)* $\overrightarrow{DC} - \overrightarrow{DB}$, *g)* $2\overrightarrow{AB} + \overrightarrow{BD}$.

**1.10.** Consider the square $ABCD$. Let $E$ denote the midpoint of side $BC$, and $O$ the midpoint of side $CD$. Express the vectors $\overrightarrow{AE}$, $\overrightarrow{AF}$, $\overrightarrow{AO}$, $\overrightarrow{EF}$, $\overrightarrow{OF}$ using the mutually perpendicular vectors $\mathbf{b} = \overrightarrow{AB}$ and $\mathbf{d} = \overrightarrow{AD}$!

**1.11.** Consider the tetrahedron $ABCDEF$! Determine the vectors
- a) $\overrightarrow{AB} + \overrightarrow{BC} + \overrightarrow{CD} + \overrightarrow{DA}$,
- b) $\overrightarrow{AB} - \overrightarrow{CB} + \overrightarrow{CD} - \overrightarrow{AD}$,
- c) $\overrightarrow{AD} - \overrightarrow{AC} - \overrightarrow{BD}$.

**1.12.** Consider the regular hexagon $ABCDEF$, whose geometric center is denoted by $O$. Express the vectors *a)* $\overrightarrow{OC}$, *b)* $\overrightarrow{OE}$, *c)* $\overrightarrow{OF}$, *d)* $\overrightarrow{AC}$, *e)* $\overrightarrow{BD}$, *f)* $\overrightarrow{BF}$, *g)* $\overrightarrow{AB} + \overrightarrow{CD} + \overrightarrow{EF}$ using the vectors $\mathbf{a} = \overrightarrow{OA}$ and $\mathbf{b} = \overrightarrow{OB}$!

**1.13.● ** Given are $n$ arbitrary, not necessarily distinct points $P_1, P_2, \ldots, P_n$ in space. What is the sum
$$\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n}$$
and
$$\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} + \overrightarrow{P_nP_1}$$
equal to?

**1.14.** Show that vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ can be side vectors of an (optionally degenerate to a segment or a point) triangle if and only if at least one of the vectors
$$\mathbf{a} + \mathbf{b} + \mathbf{c}, \quad \mathbf{a} + \mathbf{b} - \mathbf{c}, \quad \mathbf{a} - \mathbf{b} + \mathbf{c}, \quad \mathbf{a} - \mathbf{b} - \mathbf{c}$$
is zero. In other words: if the sum of the three vectors is $\mathbf{0}$, or one vector is equal to the sum of the other two.

**1.15.** Let $\mathbf{a}$ and $\mathbf{b}$ be two arbitrary vectors. Show that there exists a (possibly degenerate) triangle whose side vectors are $2\mathbf{a} - \mathbf{b}$, $\mathbf{a} + 2\mathbf{b}$, and $3\mathbf{a} + \mathbf{b}$.

### Linear Combination, Linear Independence

**1.16. Median.** Express the three median vectors of triangle $ABC$ (starting from vertices $A$, $B$, and $C$, respectively) as a linear combination of the vectors $\mathbf{a} = \overrightarrow{CA}$ and $\mathbf{b} = \overrightarrow{CB}$! Can these three vectors be the three side vectors of a triangle?

**1.17.** Let $P_1 P_2 \ldots P_n$ be a regular $n$-gon, and denote its center by $O$. It is obvious that the sum $\overrightarrow{OP_1} + \overrightarrow{OP_2} + \cdots + \overrightarrow{OP_n}$ is $\mathbf{0}$ if $n$ is even. Is the sum also $\mathbf{0}$ if $n$ is odd?

**1.18. Midpoints of the sides of a quadrilateral.** Using vector algebraic tools, prove that the midpoints of the sides of an arbitrary (even spatial) quadrilateral form a parallelogram.

**1.19.** Let $P_1 P_2 \ldots P_n$ be an arbitrary planar $n$-gon with an odd number of vertices, let $O$ be an arbitrary point in it, and let $F_k$ be the midpoint of the segment $P_k P_{k+1}$ ($k = 1, 2, \ldots, n-1$), and $F_n$ the midpoint of $P_n P_1$. Express the vector $\overrightarrow{OP_1}$ as a linear combination of the vectors $\overrightarrow{OF_k}$!

**1.20.** Let the vector system $\{\mathbf{a}, \mathbf{b}, \mathbf{c}\}$ be linearly independent, and let $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c}$, $\mathbf{w} = d_1\mathbf{a} + d_2\mathbf{b} + d_3\mathbf{c}$ be two linear combinations, where none of $d_1$, $d_2$, $d_3$ is 0. Prove that $\mathbf{v}$ and $\mathbf{w}$ are linearly dependent (collinear) if and only if $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}$.

**1.21.** For which values of parameters $c$ and $d$ are the following vectors $\mathbf{v}$ and $\mathbf{w}$ linearly dependent, if $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ are linearly independent?
- a) $\mathbf{v} = 3\mathbf{a} + 2\mathbf{b}$, $\mathbf{w} = 6\mathbf{a} + c\mathbf{b}$
- b) $\mathbf{v} = 2\mathbf{a} + c\mathbf{b} - \mathbf{c}$, $\mathbf{w} = 4\mathbf{a} + 2c\mathbf{b} - 2\mathbf{c}$
- c) $\mathbf{v} = -2\mathbf{a} + c\mathbf{c}$, $\mathbf{w} = c\mathbf{a} + \mathbf{b} - \mathbf{c}$
- d) $\mathbf{v} = \mathbf{a} + c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 3\mathbf{a} + d\mathbf{b} + 6\mathbf{c}$
- e) $\mathbf{v} = \mathbf{a} + c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 3\mathbf{a} + 3d\mathbf{b} + 3c\mathbf{c}$
- f) $\mathbf{v} = \mathbf{a} - c\mathbf{b} + d\mathbf{c}$, $\mathbf{w} = 2\mathbf{a} - 2c\mathbf{b} + 4\mathbf{c}$

**1.22.** Are the vectors $\mathbf{r}$, $\mathbf{s}$, $\mathbf{t}$ independent if $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$ are linearly independent?
- a) $\mathbf{r} = \mathbf{a} + 2\mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{a} - 3\mathbf{b} - \mathbf{c}$, $\mathbf{t} = \mathbf{0}$
- b) $\mathbf{r} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{b} + \mathbf{c}$, $\mathbf{t} = \mathbf{c}$
- c) $\mathbf{r} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{s} = \mathbf{a} - \mathbf{b}$, $\mathbf{t} = 2\mathbf{a} + \mathbf{c}$
- d) $\mathbf{r} = \mathbf{a} + 2\mathbf{b} - \mathbf{c}$, $\mathbf{s} = \mathbf{a} - 3\mathbf{b} - \mathbf{c}$, $\mathbf{t} = \mathbf{a} - \mathbf{b} - \mathbf{c}$

**1.23.✶** Denote the midpoint of side $BC$ of parallelogram $ABCD$ by $E$, of side $CD$ by $F$, and the intersection point of segments $AE$ and $BF$ by $M$. Produce the vector $\overrightarrow{AM}$ as a linear combination of the vectors $\mathbf{b} = \overrightarrow{AB}$ and $\mathbf{d} = \overrightarrow{AD}$!

### Special Linear Combinations

**1.24.● Point dividing a segment in a ratio $m:n$.** If point $P$ divides the segment $\overline{AB}$ such that $|\overline{AP}| : |\overline{PB}| = m : n$, then for any point $O$ it is true that
$$\overrightarrow{OP} = \frac{n}{m+n}\overrightarrow{OA} + \frac{m}{m+n}\overrightarrow{OB}.$$
Specially, the vector pointing to the midpoint of the segment $\overline{AB}$ is
$$\frac{\overrightarrow{OA} + \overrightarrow{OB}}{2}.$$

**1.25. Centroid of a triangle.** Prove that the medians of a triangle intersect at a single point (which we call the centroid), trisectioning each other! A vector pointing from an arbitrary (even spatial) point $O$ to the centroid is one third of the sum of the vectors pointing to the vertices.

**1.26. Centroid of a tetrahedron.** Prove that the medians of a tetrahedron pass through a single point, and they intersect dividing each other in a one-to-three ratio! This intersection point is called the centroid of the tetrahedron. A vector pointing from an arbitrary point $O$ to the centroid is one fourth of the sum of the vectors pointing to the vertices.

**1.27. Vectors pointing to points of a triangle.** Prove that for arbitrary points $A$, $B$, $C$, and a point $O$ distinct from them, a point $P$ falls inside the triangle $ABC$ if and only if there exists a linear combination
$$\overrightarrow{OP} = a\overrightarrow{OA} + b\overrightarrow{OB} + c\overrightarrow{OC}$$
such that $0 \leqslant a, b, c \leqslant 1$ and $a + b + c = 1$.

**1.28.** Let the altitude starting from vertex $C$ of the right-angled triangle $ABC$ intersect the hypotenuse $AB$ at point $D$. Denote the lengths of the two legs by $a$ and $b$. Produce the vector $\overrightarrow{CD}$ as a linear combination of vectors $\overrightarrow{CA}$ and $\overrightarrow{CB}$, using only these two numerical values.

## Distance, Angle, Orientation

*Three vector operations bring us closer to the three fundamental concepts indicated in the title. The result of one is not a vector, but a scalar; another is non-commutative, and as a binary operation can only be defined in 3-dimensional space; and the third operation is not a two- variable but a three-variable operation.*

### Scalar Multiplication

In physics, the work done by a force is the product of the length of the path and the length of the perpendicular projection of the force in the direction of the displacement. That is, from two vector-like quantities, we get a scalar quantity as a result. If $\mathbf{F}$ denotes the force vector, $\mathbf{s}$ the displacement vector, $\mathbf{F}_s$ the perpendicular projection vector of the force in the direction of the displacement, and $\gamma$ the angle between the vectors $\mathbf{F}$ and $\mathbf{s}$, then the value of the work is $|\mathbf{F}_s||\mathbf{s}| = |\mathbf{F}||\mathbf{s}|\cos\gamma$. This leads to the following definition:

**Definition 1.15 (Scalar product of two vectors).** *By the scalar product of two vectors, we mean the product of the absolute values of the vectors and the cosine of the angle enclosed by them. The scalar product of vectors $\mathbf{a}$ and $\mathbf{b}$ is denoted by $\mathbf{a} \cdot \mathbf{b}$, so*
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle,$$
*where the angle enclosed by the two vectors is $(\mathbf{a},\mathbf{b})_\angle$.*

If either $\mathbf{a}$ or $\mathbf{b}$ is the zero vector, then the angle between the two vectors, and thus its cosine, cannot be unambiguously determined, but the scalar product is unambiguous even then, namely 0, since the absolute value of the zero vector is 0, and the product of 0 with anything is 0.

It is also customary to denote the scalar product of $\mathbf{a}$ and $\mathbf{b}$ by $\mathbf{ab}$, but to distinguish it from other multiplications, we will not use it in this book.

**Example 1.16 (Scalar product).** *What is the scalar product of two vectors, 1 and 2 units long, enclosing a $60°$ angle with each other?*

*Solution.* The product is $1 \cdot 2 \cdot \cos 60° = 1 \cdot 2 \cdot \frac{1}{2} = 1$. $\square$

**Theorem 1.17 (When the scalar product is 0).** *The scalar product of two vectors is 0 if and only if the two vectors are perpendicular to each other.*

*Proof.* ($\Leftarrow$) If $\mathbf{a} \perp \mathbf{b}$, then $(\mathbf{a},\mathbf{b})_\angle = \pi/2$, i.e., $\cos(\mathbf{a},\mathbf{b})_\angle = 0$, so $\mathbf{a} \cdot \mathbf{b} = 0$.


since the cosine function is one-to-one on the $[0,\pi]$ interval.

### Three theorems about the length of vectors

We will prove three important relations concerning the length of vectors, which will also play an important role later.

**Theorem 1.19 (Pythagorean theorem).** *For the vectors $\mathbf{a}$ and $\mathbf{b}$, the relation $|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2$ holds if and only if $\mathbf{a}$ and $\mathbf{b}$ are orthogonal to each other.*

*Proof.* The equality marked with ? below holds if and only if $\mathbf{a} \cdot \mathbf{b} = 0$, that is, if $\mathbf{a}$ and $\mathbf{b}$ are orthogonal to each other.
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a} \cdot \mathbf{a} + \mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} && \text{(distributivity)} \\
&= \mathbf{a} \cdot \mathbf{a} + 2(\mathbf{a} \cdot \mathbf{b}) + \mathbf{b} \cdot \mathbf{b} && \text{(commutativity)} \\
&\overset{?}{=} \mathbf{a} \cdot \mathbf{a} + \mathbf{b} \cdot \mathbf{b} && (?) \\
&= |\mathbf{a}|^2 + |\mathbf{b}|^2.
\end{aligned}$$
$\square$

Since the absolute value of the cosine function is never greater than 1, it immediately follows from the definition of the dot product that
$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle \leqslant |\mathbf{a}||\mathbf{b}|.$$
With this, we have proved the following theorem:

**Theorem 1.20 (Cauchy–Bunyakovsky–Schwarz inequality).** *The absolute value of the dot product of two vectors is never greater than the product of their absolute values, that is*
$$|\mathbf{a} \cdot \mathbf{b}| \leqslant |\mathbf{a}||\mathbf{b}|.$$

Using the Cauchy–Bunyakovsky–Schwarz inequality, we will prove the triangle inequality well known from geometry. This proof will work without modification even under more general circumstances.

**Theorem 1.21 (Triangle inequality).** *For any two vectors $\mathbf{a}$ and $\mathbf{b}$,*
$$|\mathbf{a} + \mathbf{b}| \leqslant |\mathbf{a}| + |\mathbf{b}|.$$

*Proof.* Since there are non-negative numbers on both sides of the inequality, squaring both sides yields an equivalent inequality.
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) \\
&= \mathbf{a} \cdot \mathbf{a} + 2(\mathbf{a} \cdot \mathbf{b}) + \mathbf{b} \cdot \mathbf{b} \\
&= |\mathbf{a}|^2 + 2|\mathbf{a}||\mathbf{b}|\cos(\mathbf{a},\mathbf{b})_\angle + |\mathbf{b}|^2 \\
&\leqslant |\mathbf{a}|^2 + 2|\mathbf{a}||\mathbf{b}| + |\mathbf{b}|^2 \\
&= (|\mathbf{a}| + |\mathbf{b}|)^2.
\end{aligned}$$
$\square$

### Multiplication by a unit vector and orthogonal projection

Any vector whose absolute value is 1 is called a *unit vector*.

If $\mathbf{a}$ is an arbitrary non-zero vector, then $\mathbf{a}/|\mathbf{a}|$ is a unit vector, because its absolute value is 1:
$$\left|\frac{\mathbf{a}}{|\mathbf{a}|}\right| = \frac{1}{|\mathbf{a}|}|\mathbf{a}| = 1.$$

**Theorem 1.22 (Geometric meaning of multiplication by a unit vector).** *If $\mathbf{e}$ is a unit vector, then the vector $\hat{\mathbf{b}} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e}$ is the orthogonal projection of the vector $\mathbf{b}$ onto the line of $\mathbf{e}$. The product $\mathbf{e} \cdot \mathbf{b}$ is the signed length of this projection, which is positive if $\hat{\mathbf{b}}$ and $\mathbf{e}$ point in the same direction, and negative if they point in opposite directions.*

*Proof.* If $\mathbf{e}$ is a unit vector, i.e., its absolute value is 1, then $\mathbf{e} \cdot \mathbf{b} = |\mathbf{b}|\cos(\mathbf{e},\mathbf{b})_\angle$, and according to the definition of the cosine function, this represents the signed length of the orthogonal projection of $\mathbf{b}$. Multiplying this number by $\mathbf{e}$ gives a vector of this length in the direction of $\mathbf{e}$, which is precisely the projection vector of $\mathbf{b}$. $\square$

Let the orthogonal projection vector of the vector $\mathbf{b}$ onto the line of $\mathbf{a}$ be denoted by $\operatorname{proj}_{\mathbf{a}} \mathbf{b}$. Accordingly, if $\mathbf{e}$ is a unit vector, then
$$\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e}.$$

A fundamental task is the decomposition of a vector into the sum of vectors parallel and orthogonal to another vector, which we otherwise call *decomposition into orthogonal components*.

**Theorem 1.23 (Decomposition of a vector into orthogonal components).** *If $\mathbf{a}$ and $\mathbf{b}$ are two vectors in the plane or in space, and $\mathbf{a} \neq \mathbf{0}$, then the orthogonal projection of $\mathbf{b}$ onto the line of $\mathbf{a}$ is*
$$\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$
*The component of $\mathbf{b}$ orthogonal to the line of $\mathbf{a}$ is*
$$\mathbf{b} - \operatorname{proj}_{\mathbf{a}} \mathbf{b} = \mathbf{b} - \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$

*Proof.* The first formula follows from Theorem 1.22 on the geometric meaning of multiplication by a unit vector. Let $\mathbf{e} = \frac{\mathbf{a}}{|\mathbf{a}|}$ be the unit vector in the direction of $\mathbf{a}$. Then
$$\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{e} \cdot \mathbf{b})\mathbf{e} = \left(\frac{\mathbf{a}}{|\mathbf{a}|} \cdot \mathbf{b}\right)\frac{\mathbf{a}}{|\mathbf{a}|} = \frac{1}{|\mathbf{a}|^2}(\mathbf{a} \cdot \mathbf{b})\mathbf{a} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}.$$
(In the last equality, we used the fact that $|\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}$.) Since $\mathbf{e}$ and $\mathbf{a}$ are parallel, $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \operatorname{proj}_{\mathbf{e}} \mathbf{b}$, which proves our first statement. The second half of the statement follows from the fact that the sum of the two components is $\mathbf{b}$. $\square$

*Figure 1.24. The projection of vector $\mathbf{b}$ onto the line of unit vector $\mathbf{e}$. In the top figure $\mathbf{e} \cdot \mathbf{b} > 0$, in the bottom one $\mathbf{e} \cdot \mathbf{b} < 0$.*

*Figure 1.25. The decomposition of vector $\mathbf{b}$ into the sum of vectors parallel to and orthogonal to vector $\mathbf{a}$.*

### Orthogonality and orientation

If $\mathbf{a}$ and $\mathbf{b}$ are mutually orthogonal non-zero planar vectors, then $\mathbf{a}$ and $-\mathbf{b}$ are also orthogonal, so $(\mathbf{a},\mathbf{b})_\angle = (\mathbf{a},-\mathbf{b})_\angle = \pi/2$. Can we distinguish the vectors $\mathbf{b}$ and $-\mathbf{b}$ knowing only $\mathbf{a}$? A similar question arises in space: if $\mathbf{c}$ is orthogonal to each of the non-collinear vectors $\mathbf{a}$ and $\mathbf{b}$, then so is $-\mathbf{c}$. Can $\mathbf{c}$ and $-\mathbf{c}$ be distinguished from each other based only on their relationship to $\mathbf{a}$ and $\mathbf{b}$? The concept of *orientation* leads to the answer.

First, we approach this concept visually (a definition can be built upon the concept of determinant). In the plane, pairs of two independent vectors can be classified into two classes according to whether they can be illustrated with the first two fingers of our right or left hand turned palm up (Figure 1.26) (thumb is the first, index finger is the second vector).

Similarly, in space, triplets of independent vectors can be classified into two classes according to whether they can be illustrated with the first three fingers of our right or left hand. The first 2-2 pictures of Figure 1.27 also show that the order of these three fingers is different across cultures (see how people show the number two). According to which class a pair of vectors in the plane, or a triplet of vectors in space falls into, we say that it forms a *right-handed system* or a *left-handed system*. The method shown in the third picture of both rows of Figure 1.27 (the movement of the hand clenching into a fist) also shows what the direction of positive (negative) rotation around an axis is like. In the plane, we can also express this by assigning a sign to the angle of two independent vectors, namely positive if they form a right-handed system, and negative if they form a left-handed system. The angle obtained this way is called the *directed angle* of the two vectors. The directed angle of $\mathbf{a}$ and $\mathbf{b}$ is denoted by $(\mathbf{a},\mathbf{b})_\sphericalangle$. So while $(\mathbf{a},\mathbf{b})_\angle = (\mathbf{b},\mathbf{a})_\angle$, $(\mathbf{a},\mathbf{b})_\sphericalangle = -(\mathbf{b},\mathbf{a})_\sphericalangle$, and if $(\mathbf{a},\mathbf{b})_\sphericalangle = \pi/2$, then $(\mathbf{a},-\mathbf{b})_\sphericalangle = -\pi/2$. This is the answer to the question posed at the beginning of the paragraph.

*Figure 1.26. The relationship of two vectors forms a right-handed system (top figure) or a left-handed system (bottom figure). The enclosed directed angle is positive in the former case, negative in the latter.*

*Figure 1.27. The vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ form a right-handed system in this order if their directions can be shown with our right hand according to any of the three figures attached: (1) thumb–index–middle finger, (2) index–middle–thumb, (3) the thumb points to the vector $\mathbf{c}$, and the fingers of our fist clenching move from $\mathbf{a}$ toward $\mathbf{b}$. These same vectors form a left-handed system in this order if their directions can be shown with our left hand in a similar way.*

### Cross product

In physics, there are several phenomena in which we look for a third vector orthogonal to both of two spatial vectors. The best known example is *torque*.

Let a force $\mathbf{F}$ act at a point $P$ of a body, and let the body be fixed at its point $O$. The distance from $O$ of the line passing through point $P$ in the direction of $\mathbf{F}$ is called the moment arm of the force. Under the influence of $\mathbf{F}$, the body rotates around $O$. To characterize this, we need to know the axis of rotation, the "magnitude" of rotation, and which of the two directions of rotation around the axis we are talking about. A vector can be suitable for this – let's call this the *torque* vector –, whose direction is parallel to the axis of rotation, its length describes the magnitude of the rotation, and the two vector directions parallel to the axis of rotation distinguish the two directions of rotation. How can the torque vector be defined if we know that its absolute value is the product of the length of the moment arm and the absolute value of the force?

The moment arm of the force is $|\overrightarrow{OP}|\sin(\overrightarrow{OP},\mathbf{F})_\angle$, so the absolute value of the torque $\mathbf{M}$ is:
$$|\mathbf{M}| = |\mathbf{F}||\overrightarrow{OP}|\sin(\overrightarrow{OP},\mathbf{F})_\angle.$$

The axis of rotation is obviously orthogonal to both $\mathbf{F}$ and $\overrightarrow{OP}$, we only need to agree that the vectors $\overrightarrow{OP}$, $\mathbf{F}$ and $\mathbf{M}$ should form a right- or left-handed system. Physicists chose the right-handed system.

Torque and several similar physical concepts lead to the following definition:

**Definition 1.24 (Cross product).** *By the cross product of two vectors of the 3-dimensional space we mean the vector whose*
- *a) absolute value is the product of the absolute values of the two vectors and the sine of the angle they enclose,*
- *b) direction is orthogonal to the direction of both vectors and – if the product is not the zero vector, then – the first factor, the second factor and the product form a right-handed system in this order.*

▶ The cross product of the vectors $\mathbf{a}$ and $\mathbf{b}$ is denoted by $\mathbf{a} \times \mathbf{b}$, which is read as "a cross b". Formulated with formulas: $\mathbf{a} \times \mathbf{b}$ is a vector, for which
$$|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle,$$
$\mathbf{a} \times \mathbf{b} \perp \mathbf{a}$, $\mathbf{a} \times \mathbf{b} \perp \mathbf{b}$, furthermore $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{a} \times \mathbf{b}$ form a right-handed system in this order, if $|\mathbf{a} \times \mathbf{b}| \neq 0$.

▶ For the absolute value of the vector, the above formula indeed gives a non-negative number, because the sine function is non-negative on the $[0,\pi]$ interval.

▶ This definition uniquely defines the cross product of any two 3-dimensional vectors, because in every case when it cannot be decided whether the vectors form a right-handed system, the product is the zero vector.

*Figure 1.28. The body is fixed at point $O$, force $\mathbf{F}$ acts at point $P$, the axis of rotation will be orthogonal to the plane of the vectors $\overrightarrow{OP}$ and $\mathbf{F}$, the vectors $\overrightarrow{OP}$, $\mathbf{F}$ and $\mathbf{M}$ form a right-handed system, where $\mathbf{M}$ is the torque, whose direction gives the direction of rotation. The segment $|\mathbf{F}|\sin(\overrightarrow{OP},\mathbf{F})_\angle$ is denoted by a dashed line.*

**Example 1.25 (Determining the cross product).** *Suppose that two vectors in space have lengths 3 and 5 respectively, and the cosine of the angle enclosed by them is $\frac{4}{5}$. What do we know about their cross product?*

*Solution.* If $\cos\gamma = \frac{4}{5}$, then $\sin\gamma = \sqrt{1 - \left(\frac{4}{5}\right)^2} = \frac{3}{5}$, so the length of the cross product is $|\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = 3 \cdot 5 \cdot \frac{3}{5} = 9$, its direction is orthogonal to both vectors and $\mathbf{a}$, $\mathbf{b}$, $\mathbf{a} \times \mathbf{b}$ form a right-handed system in this order (see Figure 1.29). $\square$

**Example 1.26 (Cross product of $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$).** *Let $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ be three mutually orthogonal unit vectors that form a right-handed system in this order. Let's make a multiplication table of their cross products!*

*Solution.* Since $(\mathbf{i},\mathbf{i})_\angle = 0$, $|\mathbf{i} \times \mathbf{i}| = 0$, so $\mathbf{i} \times \mathbf{i} = \mathbf{0}$. Similarly $\mathbf{j} \times \mathbf{j} = \mathbf{0}$ and $\mathbf{k} \times \mathbf{k} = \mathbf{0}$.

Since $|\mathbf{i}| = |\mathbf{j}| = 1$ and $(\mathbf{i},\mathbf{j})_\angle = 90^\circ$, $|\mathbf{i} \times \mathbf{j}| = 1$, i.e., $\mathbf{i} \times \mathbf{j}$ is also a unit vector. Moreover, $\mathbf{i} \times \mathbf{j}$ is orthogonal to $\mathbf{i}$ and $\mathbf{j}$, and $\mathbf{i}$, $\mathbf{j}$ as well as $\mathbf{i} \times \mathbf{j}$ form a right-handed system just like $\mathbf{i}$, $\mathbf{j}$ and $\mathbf{k}$. From this it follows that $\mathbf{i} \times \mathbf{j} = \mathbf{k}$. Similarly $\mathbf{j} \times \mathbf{k} = \mathbf{i}$ and $\mathbf{k} \times \mathbf{i} = \mathbf{j}$. If $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ form a right-handed system, then $\mathbf{j}$, $\mathbf{i}$ and $\mathbf{k}$ form a left-handed system, so $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$. Summarizing all these we get the following multiplication table.

| $\times$ | $\mathbf{i}$ | $\mathbf{j}$ | $\mathbf{k}$ |
|---|---|---|---|
| $\mathbf{i}$ | $\mathbf{0}$ | $\mathbf{k}$ | $-\mathbf{j}$ |
| $\mathbf{j}$ | $-\mathbf{k}$ | $\mathbf{0}$ | $\mathbf{i}$ |
| $\mathbf{k}$ | $\mathbf{j}$ | $-\mathbf{i}$ | $\mathbf{0}$ |

The products between these three vectors are easy to remember if we write them at the vertices of a regular triangle according to positive traversal, as shown in the figure next to the table. Then the product of two different vectors is the third one, if the two vectors follow each other according to positive traversal. If they follow each other according to negative traversal, the product is $-1$ times the third vector. $\square$

**Theorem 1.27 (When is the cross product $\mathbf{0}$?).** *The cross product of two vectors in space is the zero vector if and only if the two vectors are parallel.*

*Proof.* If either $\mathbf{a}$ or $\mathbf{b}$ is the zero vector, then on the one hand the two vectors can be considered parallel, and on the other hand $\mathbf{a} \times \mathbf{b} = \mathbf{0}$, so the statement is true, therefore in the following we assume that neither of the two factors is a zero vector.

($\Leftarrow$) If $\mathbf{a}$ and $\mathbf{b}$ are parallel, then $(\mathbf{a},\mathbf{b})_\angle = 0$ or $\pi$, so $\sin(\mathbf{a},\mathbf{b})_\angle = 0$, thus $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}| \cdot 0 = 0$, i.e., $\mathbf{a} \times \mathbf{b} = \mathbf{0}$.

($\Rightarrow$) If $\mathbf{a} \times \mathbf{b} = \mathbf{0}$, i.e., $|\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = 0$, then because $|\mathbf{a}| \neq 0$ and $|\mathbf{b}| \neq 0$, $\sin(\mathbf{a},\mathbf{b})_\angle = 0$. The sine function has roots at 0 and $\pi$ in the $[0,\pi]$ interval, so the two vectors either point in the same direction or in opposite directions, i.e., they are parallel. $\square$

*Figure 1.29. The vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{a} \times \mathbf{b}$.*

**Theorem 1.28 (Geometric meaning of the absolute value of the cross product).** *The absolute value of the cross product of two vectors is equal to the measure of the area of the parallelogram spanned by the two vectors.*

*Proof.* The lengths of the sides of the parallelogram spanned by vectors $\mathbf{a}$ and $\mathbf{b}$ are $|\mathbf{a}|$ and $|\mathbf{b}|$, and its height belonging to side $\mathbf{a}$ is $m = |\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle$. The area of the parallelogram is $|\mathbf{a}|m = |\mathbf{a}||\mathbf{b}|\sin(\mathbf{a},\mathbf{b})_\angle = |\mathbf{a} \times \mathbf{b}|$ (Figure 1.30). $\square$

**Theorem 1.29 (Algebraic properties of the cross product).** *For arbitrary vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$, and arbitrary real number $r$, the following relations hold:*
- *a)* $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$ *(alternating property)*
- *b)* $(\mathbf{a} + \mathbf{b}) \times \mathbf{c} = \mathbf{a} \times \mathbf{c} + \mathbf{b} \times \mathbf{c}$, and $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$ *(distributivity)*
- *c)* $r(\mathbf{a} \times \mathbf{b}) = (r\mathbf{a}) \times \mathbf{b} = \mathbf{a} \times (r\mathbf{b})$
- *d)* $|\mathbf{a} \times \mathbf{b}| = \sqrt{|\mathbf{a}|^2|\mathbf{b}|^2 - |\mathbf{a} \cdot \mathbf{b}|^2}$
- *e)* $\mathbf{a} \times (\mathbf{b} \times \mathbf{c}) = (\mathbf{a} \cdot \mathbf{c})\mathbf{b} - (\mathbf{a} \cdot \mathbf{b})\mathbf{c}$ *(expansion theorem)*

▶ According to point a) of this theorem, the cross product is *not commutative*!

▶ The cross product is also not associative. Using the result of Example 1.26, it is easy to see that
$$(\mathbf{i} \times \mathbf{j}) \times \mathbf{j} \neq \mathbf{i} \times (\mathbf{j} \times \mathbf{j}),$$
because $(\mathbf{i} \times \mathbf{j}) \times \mathbf{j} = \mathbf{k} \times \mathbf{j} = -\mathbf{i}$, on the other hand $\mathbf{i} \times (\mathbf{j} \times \mathbf{j}) = \mathbf{i} \times \mathbf{0} = \mathbf{0}$.

▶ We leave the proof of the theorem to Exercise 1.49.

### Volume and signed volume of a parallelepiped

In Theorem 1.28 we showed that the absolute value of the cross product gives the area of the parallelogram spanned by the two vectors.

**Theorem 1.30 (Volume of a parallelepiped).** *The volume of the parallelepiped spanned by vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ is $|(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|$. The value of the expression $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ is positive if the vectors form a right-handed system, negative if they form a left-handed system, and zero if they are linearly dependent.*

*Proof.* The area of the parallelogram spanned by $\mathbf{a}$ and $\mathbf{b}$ is $|\mathbf{a} \times \mathbf{b}|$, and since $\mathbf{a} \times \mathbf{b}$ is orthogonal to the plane of the parallelogram, the height of the parallelepiped is equal to the length of the orthogonal projection of $\mathbf{c}$ onto the line of $\mathbf{a} \times \mathbf{b}$. This can be calculated with the dot product with the unit vector in the direction of $\mathbf{a} \times \mathbf{b}$. The unit vector is
$$\mathbf{e} = \frac{\mathbf{a} \times \mathbf{b}}{|\mathbf{a} \times \mathbf{b}|},$$
the height is $|\mathbf{e} \cdot \mathbf{c}|$, and thus the value of the volume (i.e., area of the base times height) is
$$|\mathbf{a} \times \mathbf{b}|\left|\frac{\mathbf{a} \times \mathbf{b}}{|\mathbf{a} \times \mathbf{b}|} \cdot \mathbf{c}\right| = |(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|.$$

*Figure 1.30. $|\mathbf{a} \times \mathbf{b}|$ equals the area of the parallelogram.*

So the volume of the parallelepiped is $|(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}|$. The scalar $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ is negative if and only if the orthogonal projection of the vector $\mathbf{c}$ onto the line of $\mathbf{a} \times \mathbf{b}$ and $\mathbf{a} \times \mathbf{b}$ point in opposite directions. That is, if the vector $\mathbf{c}$ is on the other side of the plane of $\mathbf{a} \times \mathbf{b}$ than the vector $\mathbf{a} \times \mathbf{b}$, i.e., if $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ form a left-handed system! Finally, $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = 0$ holds if and only if $\mathbf{a} \times \mathbf{b} \perp \mathbf{c}$, i.e., if the three vectors fall in one plane. $\square$

▶ The scalar $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$ is called the *signed volume* of the parallelepiped spanned by vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$.

### Scalar triple product

In the previous paragraph we showed the importance of the expression $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$. This leads to the following definition:

**Definition 1.31 (Scalar triple product).** *The scalar*
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c}$$
*formed from three arbitrary vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ of the 3-dimensional space is called the scalar triple product of the three vectors.*

▶ The usual notation for the scalar triple product of vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ is $\mathbf{abc}$, but we will not use it in the later chapters.

▶ Since the dot product is commutative, $(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = \mathbf{c} \cdot (\mathbf{a} \times \mathbf{b})$.

▶ We must get the same value for the volume of the parallelepiped whichever face we choose as the base, so the scalar triple products formed with different orderings of the three vectors can only differ in their sign. Since the sign is a function of the orientation, therefore – also considering the previous remark – we get that
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = (\mathbf{b} \times \mathbf{c}) \cdot \mathbf{a} = (\mathbf{c} \times \mathbf{a}) \cdot \mathbf{b} = \mathbf{abc} = \mathbf{bca} = \mathbf{cab}$$
$$= -(\mathbf{c} \times \mathbf{b}) \cdot \mathbf{a} = -(\mathbf{b} \times \mathbf{a}) \cdot \mathbf{c} = -(\mathbf{a} \times \mathbf{c}) \cdot \mathbf{b} = -\mathbf{acb} = -\mathbf{cba} = -\mathbf{bac}.$$

**Example 1.32 (Scalar triple product).** *Determine the scalar triple product of three face diagonal vectors starting from one vertex of a unit cube (Figure 1.31)!*

*Solution.* Let the three edge vectors starting from one vertex of the cube be denoted by $\mathbf{i}$, $\mathbf{j}$ and $\mathbf{k}$. Let these three vectors form a right-handed system in this order. Then according to the previous remark $\mathbf{ijk} = \mathbf{jki} = \mathbf{kij} = 1$, $\mathbf{kji} = \mathbf{jik} = \mathbf{ikj} = -1$. Since the scalar triple product gives the volume of a parallelepiped or its opposite, if a vector appears multiple times in a product, then its value is 0. For example $\mathbf{iji} = (\mathbf{i} \times \mathbf{j}) \cdot \mathbf{i} = \mathbf{k} \cdot \mathbf{i} = 0$. The three face diagonal vectors: $\mathbf{i} + \mathbf{j}$, $\mathbf{j} + \mathbf{k}$, $\mathbf{k} + \mathbf{i}$. Their scalar triple product is
$$\begin{aligned}
((\mathbf{i} + \mathbf{j}) \times (\mathbf{j} + \mathbf{k})) \cdot (\mathbf{k} + \mathbf{i}) &= \mathbf{ijk} + \mathbf{iji} + \mathbf{ikk} + \mathbf{iki} + \mathbf{jjk} + \mathbf{jji} + \mathbf{jkk} + \mathbf{jki} \\
&= 1 + 0 + 0 + 0 + 0 + 0 + 0 + 1 \\
&= 2,
\end{aligned}$$
so the scalar triple product of the three face diagonal vectors is 2. This also means that the volume of the parallelepiped spanned by these three vectors is 2. $\square$

*Figure 1.31. $(\mathbf{i} + \mathbf{j})(\mathbf{j} + \mathbf{k})(\mathbf{k} + \mathbf{i}) = 2$.*

## Exercises

### Review questions

**1.29.● Dot product: true – false.** Which of the following statements are true and which are false?
- a) The dot product of two unit vectors falls between $-1$ and 1.
- b) The product of a vector $\mathbf{v}$ and a unit vector equals the orthogonal projection of $\mathbf{v}$ onto the line of the unit vector.
- c) The dot product is commutative.
- d) The dot product is associative (see Exercise 1.35).
- e) The zero vector is orthogonal to any vector.
- f) Two vectors are orthogonal if and only if their dot product is 0.
- g) If $\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{c}$, then $\mathbf{b} = \mathbf{c}$.

**1.30.● Cross product, orientation: true – false.** Which of the following statements are true and which are false?
- a) The cross product is a commutative and associative operation.
- b) If $\mathbf{a} \times \mathbf{b} = \mathbf{a} \times \mathbf{c}$, then $\mathbf{b} = \mathbf{c}$.
- c) If the directed angle of vectors $\mathbf{a}$ and $\mathbf{b}$ in the $xy$-plane is positive viewed from the unit vector $\mathbf{k}$, then $\mathbf{a} \times \mathbf{b} = c\mathbf{k}$, where $c > 0$.
- d) If $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ form a right-handed system, then so do $\mathbf{a}$, $-\mathbf{b}$ and $-\mathbf{c}$.
- e) If $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ form a right-handed system, then so do $-\mathbf{a}$, $-\mathbf{b}$ and $-\mathbf{c}$.
- f) $\mathbf{a} \times \mathbf{b} = \mathbf{0}$ is true if and only if $\mathbf{a}$ and $\mathbf{b}$ are linearly dependent.
- g) If $\mathbf{v} \neq \mathbf{0}$, but $\mathbf{a} \times \mathbf{v} = \mathbf{b} \times \mathbf{v} = \mathbf{0}$, then $\mathbf{a}$ and $\mathbf{b}$ are linearly dependent.

### Dot, cross and scalar triple product

*In the following exercises, calculate the dot product $\mathbf{a} \cdot \mathbf{b}$ based on the given data! Let $\gamma = (\mathbf{a},\mathbf{b})_\angle$.*

**1.31.✶** $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $\gamma = \frac{\pi}{3}$.

**1.32.** $|\mathbf{a}| = \sqrt{2}$, $|\mathbf{b}| = 2$, $\gamma = \frac{3\pi}{4}$.

**1.33.** $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $\gamma = \pi$.

**1.34.✶** $|\mathbf{a}| = \sqrt{2}$, $|\mathbf{b}| = 2$, $\gamma = \frac{\pi}{2}$.

**1.35.** Prove that generally $(\mathbf{a} \cdot \mathbf{b})\mathbf{c} \neq \mathbf{a}(\mathbf{b} \cdot \mathbf{c})$.

**1.36.** Simplify the following expression! *a)* $(\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b})$, *b)* $(\mathbf{a} + 2\mathbf{b}) \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b}$.

**1.37.** What is the angle between $\mathbf{a}$ and $\mathbf{b}$, if $|\mathbf{a}| = 3$, $|\mathbf{b}| = 4$, $|\mathbf{a} + \mathbf{b}| = 5$?

**1.38.●** Let $O$ be a given point in space, $\mathbf{a}$ an arbitrary vector and $c$ an arbitrary constant. Where are those points $X$ located for which $\overrightarrow{OX} \cdot \mathbf{a} = c$?

**1.39.** Determine the value of $\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3$, if $\mathbf{e}_1$, $\mathbf{e}_2$ and $\mathbf{e}_3$ are unit vectors and $\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3 = \mathbf{0}$.

**1.40.** Prove that if the spatial vector $\mathbf{v}$ is orthogonal to each of the linearly independent (non-coplanar) vectors $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$, then $\mathbf{v} = \mathbf{0}$.

**1.41. Calculation of dot product.** Calculate the dot product of the two vectors shown in the figure (the distance between adjacent grid lines is 1 unit).

**1.42. Decomposition into orthogonal components.** For the vectors in Exercise 1.41, $\mathbf{a} \cdot \mathbf{b} = 2$ and $|\mathbf{a}| = 2\sqrt{2}$. Decompose the vector $\mathbf{b}$ into components parallel and orthogonal to $\mathbf{a}$.

**1.43.✶** Is it true that $|\mathbf{a} + \mathbf{b} + \mathbf{c}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 + |\mathbf{c}|^2$ holds if and only if $\mathbf{a}$, $\mathbf{b}$ and $\mathbf{c}$ are three mutually orthogonal vectors?

**1.44.●** Calculate *a)* the value of $|\mathbf{a} \times \mathbf{b}|$, if $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $(\mathbf{a},\mathbf{b})_\angle = \frac{\pi}{6}$; *b)* the value of $\mathbf{a} \times \mathbf{b}$, if $|\mathbf{a}| = 1$, $|\mathbf{b}| = 2$, $(\mathbf{a},\mathbf{b})_\angle = \pi$.

**1.45.** Simplify the following expression! *a)* $(\mathbf{a} + \mathbf{b}) \times (\mathbf{a} - \mathbf{b})$, *b)* $(\mathbf{i} + \mathbf{j} + \mathbf{k}) \times (\mathbf{i} + \mathbf{j})$.

**1.46.** Consider a unit cube, let one of its vertices be denoted by $P$. Calculate the dot product of *a)* any two face diagonal vectors starting from $P$, *b)* a face diagonal and the space diagonal vector starting from $P$, as well as the cross product of any edge vector starting from $P$ and *c)* a face diagonal vector on the same face with it, *d)* a face diagonal vector not on the same face with it.

**1.47.** Prove that if $\mathbf{u}$ is orthogonal to vectors $\mathbf{v}$ and $\mathbf{w}$, then it is also orthogonal to any of their linear combinations.

**1.48.** Of the possible orderings of three linearly independent vectors, how many form a right- and how many a left-handed system?

**1.49.** Prove the statements of Theorem 1.29!

**1.50. Angle bisector.** Let $\mathbf{a}$ and $\mathbf{b}$ be non-zero vectors. Show that the vector $|\mathbf{b}|\mathbf{a} + |\mathbf{a}|\mathbf{b}$ bisects the angle between $\mathbf{a}$ and $\mathbf{b}$! (Using this, show that the angle bisector of one angle of a triangle divides the opposite side in the ratio of the lengths of the two adjacent sides.)

**1.51. What does the mirror swap?** How is it that the mirror swaps right with left, but not top with bottom?

**1.52. Cross product with a unit vector.** If $\mathbf{e}$ is a unit vector and $\mathbf{a}$ is an arbitrary vector, what is the geometric meaning of the number $|\mathbf{e} \times \mathbf{a}|$ and the vector $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}$?

**1.53.** Prove that if $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$, then $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c} = \mathbf{c} \times \mathbf{a}$. Is the converse of the statement true?

**1.54.** The volume of the parallelepiped spanned by the vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ is $V$. What is the volume of the parallelepiped spanned by the following three vectors?
- a) $\mathbf{u} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{v} = \mathbf{a} + 2\mathbf{b} + 3\mathbf{c}$, $\mathbf{w} = \mathbf{a} + \mathbf{b} + 2\mathbf{c}$,
- b) $\mathbf{u} = \mathbf{a} + \mathbf{b} + \mathbf{c}$, $\mathbf{v} = \mathbf{a} + \mathbf{b} + 3\mathbf{c}$, $\mathbf{w} = \mathbf{a} + 3\mathbf{b} + \mathbf{c}$.

What is the relationship between the orientation of $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ and the orientation of vectors $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$?

## Vectors in coordinate form

*With the introduction of coordinates, on the one hand we get new algebraic tools for examining vectors and various geometric shapes, on the other hand it makes it possible to extend the concept of vector. Thus we arrive at the concept of multi-dimensional spaces, which is indispensable in economics, in the mathematics of internet search engines, or in its version over finite structures in coding theory and cryptography.*

### Cartesian coordinate system

Descartes connected geometry with algebra with a beautiful idea in his work *La Géométrie* in 1637. His basic idea was that a mutually unambiguous correspondence can be established between the basic elements of geometry (e.g. points) and real numbers/number pairs/number triplets, so certain geometric shapes become describable and examinable with algebraic equations.

According to Theorem 1.11, any vector $\mathbf{v}$ in the plane can be written as a linear combination of two given linearly independent vectors $\mathbf{e}_1$, $\mathbf{e}_2$, and this representation is unique. If this linear combination is of the form $\mathbf{v} = v_1\mathbf{e}_1 + v_2\mathbf{e}_2$, then we assign the number pair $(v_1, v_2)$ to the vector $\mathbf{v}$, and we call this the *coordinate form* of the vector $\mathbf{v}$, and the scalars $v_1$ and $v_2$ the *coordinates* of $\mathbf{v}$. We say that the vector pair $\{\mathbf{e}_1, \mathbf{e}_2\}$ is the *basis of the coordinate system*, the vectors $\mathbf{e}_1$ and $\mathbf{e}_2$ are the *basis vectors* or *base vectors*. To determine the coordinates of an arbitrary vector it is sufficient to know the basis vectors.

**Example 1.33 (Coordinates of vectors).** *Determine the coordinates of the vectors given in Figure 1.32 with respect to the vectors $\mathbf{e}_1$ and $\mathbf{e}_2$ as a basis!*

*Solution.* The solution can be read from Figure 1.33. It is more transparent if we start all vectors from a single point (see Figure 1.34). $\square$

The coordinate system can be built up in a similar way in 3-dimensional space as well. According to Theorem 1.12, any vector $\mathbf{v}$ in space can be written as a linear combination of three given linearly independent vectors $\mathbf{e}_1$, $\mathbf{e}_2$, $\mathbf{e}_3$, and this representation is unique. If $\mathbf{v} = v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + v_3\mathbf{e}_3$, then we assign the number triplet $(v_1, v_2, v_3)$ to the vector $\mathbf{v}$, and we call this the *coordinate form* of the vector $\mathbf{v}$, and the scalars $v_1$, $v_2$, $v_3$ the *coordinates* of $\mathbf{v}$. The *basis* is the vector triplet $\{\mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_3\}$.

Coordinatization can be implemented in the 1-dimensional space as well: if $\mathbf{e} \neq \mathbf{0}$ (so $\{\mathbf{e}\}$ is a linearly independent vector system!), then any vector $\mathbf{v}$ parallel to it can be uniquely written in the form $\mathbf{v} = v\mathbf{e}$. This scalar $v$ will be the coordinate form of $\mathbf{v}$ (the parentheses are unnecessary here). Thus the assignment $\mathbf{v} \leftrightarrow v$ is mutually unambiguous between vectors and scalars.

> *René Descartes* (Renatus Cartesianus) (1596–1650) French philosopher and mathematician, the father of modern philosophy, one of the creators of analytic geometry. He wanted to build his philosophy against statements based on mere faith through rational arguments (see *Cartesian doubt* and "I think, therefore I am"). He studied medicine and law, eventually obtaining an engineering qualification. He also participated in several wars. In 1619, on a long journey that also touched Hungary, in a peasant house near Ulm he had three dreams, the interpretation of which led him to "a wonderful science", which became the basis of his philosophy.

*Figure 1.32. What are the coordinates of the vectors?*


*Figure 1.33. The solution.*

*Figure 1.34. The solution illustrated with position vectors.*

If we designate a point on the line/plane/space – this will be the origin –, then, along with the one-to-one correspondence between the points of the line/plane/space and the endpoints of the position vectors, the points also receive coordinates.

For example, the endpoints of the position vectors in 1.34 receive the same coordinates as the position vector (see Figure 1.35).

The one-to-one correspondence between position vectors and points is also expressed in the notation by not distinguishing between the coordinate form of the vector and the point; the point assigned to the vector $\mathbf{v} = (a, b)$ given an origin is also denoted by $(a, b)$. The coordinate form of vectors – for reasons to be explained later – can also be written in so-called *column vector* form. In this book, we will use square brackets instead of parentheses for this:
$$(a, b) = \begin{bmatrix} a \\ b \end{bmatrix}.$$

If a point on the plane is on the first coordinate axis, and $x$ is its 1-dimensional coordinate on that line, then its coordinate form in the plane will be $(x, 0)$. Similarly, every point on the second axis has the coordinate form $(0, y)$. The origin is $(0, 0)$ (see Figure 1.36). The coordinate forms of the basis vectors are $\mathbf{e}_1 = (1, 0)$ and $\mathbf{e}_2 = (0, 1)$.

In the 3-dimensional case, the 3-dimensional coordinate forms of the points falling on the coordinate axes are $(x, 0, 0)$, $(0, y, 0)$, and $(0, 0, z)$, respectively. The planes passing through the origin and containing 2 axes are called *coordinate planes*. The forms of the points of the coordinate planes are $(x, y, 0)$, $(x, 0, z)$, and $(0, y, z)$, respectively. The origin's is $(0, 0, 0)$, while the basis vectors' are $\mathbf{e}_1 = (1, 0, 0)$, $\mathbf{e}_2 = (0, 1, 0)$, $\mathbf{e}_3 = (0, 0, 1)$ (see Figure 1.37).

### Operations with vectors given in coordinate form

A coordinate system is given in space, and in it two arbitrary vectors $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$. We are looking for the coordinate form of $\mathbf{u} + \mathbf{v}$, $\mathbf{u} - \mathbf{v}$, $c\mathbf{u}$, $\mathbf{u} \cdot \mathbf{v}$, $\mathbf{u} \times \mathbf{v}$.

The sum of the two given vectors is:
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1, u_2, u_3) + (v_1, v_2, v_3) \\
&= (u_1\mathbf{e}_1 + u_2\mathbf{e}_2 + u_3\mathbf{e}_3) + (v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + v_3\mathbf{e}_3) \\
&= (u_1 + v_1)\mathbf{e}_1 + (u_2 + v_2)\mathbf{e}_2 + (u_3 + v_3)\mathbf{e}_3 \\
&= (u_1 + v_1, u_2 + v_2, u_3 + v_3).
\end{aligned}$$

The relationship regarding the difference can be proved similarly. Multiplication by a scalar can also be simply calculated coordinate by coordinate:
$$\begin{aligned}
c\mathbf{u} &= c(u_1, u_2, u_3) = c(u_1\mathbf{e}_1 + u_2\mathbf{e}_2 + u_3\mathbf{e}_3) \\
&= cu_1\mathbf{e}_1 + cu_2\mathbf{e}_2 + cu_3\mathbf{e}_3 \\
&= (cu_1, cu_2, cu_3).
\end{aligned}$$

*Figure 1.35. Points and their coordinates.*

*Figure 1.36. Points on the axes of the coordinate system.*

*Figure 1.37. Points on the coordinate planes.*

**Proposition 1.34 (Coordinate form of vector operations).** *A coordinate system is given in space, and in it two arbitrary vectors $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$, as well as an arbitrary real number $c \in \mathbb{R}$. Then the coordinate form of the sum, difference, and scalar multiple of the vectors is*
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1, u_2, u_3) + (v_1, v_2, v_3) = (u_1 + v_1, u_2 + v_2, u_3 + v_3), \\
\mathbf{u} - \mathbf{v} &= (u_1, u_2, u_3) - (v_1, v_2, v_3) = (u_1 - v_1, u_2 - v_2, u_3 - v_3), \\
c\mathbf{u} &= c(u_1, u_2, u_3) = (cu_1, cu_2, cu_3).
\end{aligned}$$
*Using column vector notation*
$$\mathbf{u} \pm \mathbf{v} = \begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} \pm \begin{bmatrix} v_1 \\ v_2 \\ v_3 \end{bmatrix} = \begin{bmatrix} u_1 \pm v_1 \\ u_2 \pm v_2 \\ u_3 \pm v_3 \end{bmatrix}, \quad c\mathbf{u} = c\begin{bmatrix} u_1 \\ u_2 \\ u_3 \end{bmatrix} = \begin{bmatrix} cu_1 \\ cu_2 \\ cu_3 \end{bmatrix}.$$

Similar statements are true for vectors in the plane, but with only two coordinates. In contrast to the previous ones, the coordinate form of the dot product depends on the coordinate system.

**Example 1.35 (Dot product in a coordinate system).** *Let the length of the first basis vector in the plane be 1, that of the second be 2, and the angle between them be $\pi/3$. Calculate the dot product of the vectors $\mathbf{u} = (1, 1)$ and $\mathbf{v} = (-5/2, 1)$!*

*Solution.* Knowing the length and angle of the basis vectors, we can calculate the dot products of the basis vectors:
$$\mathbf{e}_1 \cdot \mathbf{e}_1 = 1, \quad \mathbf{e}_2 \cdot \mathbf{e}_2 = 2^2 = 4, \quad \mathbf{e}_1 \cdot \mathbf{e}_2 = 1 \cdot 2 \cdot \cos\frac{\pi}{3} = 1.$$
Thus, for two arbitrary vectors $\mathbf{u} = (u_1, u_2)$ and $\mathbf{v} = (v_1, v_2)$:
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= (u_1\mathbf{e}_1 + u_2\mathbf{e}_2) \cdot (v_1\mathbf{e}_1 + v_2\mathbf{e}_2) \\
&= u_1v_1\mathbf{e}_1 \cdot \mathbf{e}_1 + (u_1v_2 + u_2v_1)\mathbf{e}_1 \cdot \mathbf{e}_2 + u_2v_2\mathbf{e}_2 \cdot \mathbf{e}_2 \\
&= u_1v_1 + u_1v_2 + u_2v_1 + 4u_2v_2.
\end{aligned}$$
For the given vectors $\mathbf{u} \cdot \mathbf{v} = -\frac{5}{2} + 1 - \frac{5}{2} + 4 = 0$, so the two vectors are perpendicular to each other (see Figure 1.38). $\square$

*Figure 1.38. Dot product of two vectors.*

### The rectangular coordinate system

The laws of nature give special importance to mutually perpendicular directions, so for example, it is very often worthwhile to choose a coordinate system in which the basis vectors are perpendicular, in other words, *orthogonal* to each other. Besides the angle of the basis vectors, it is also worth standardizing their length, namely choosing them to be of unit length, so each coordinate also represents a distance at the same time. An orthogonal basis consisting of unit vectors is called an *orthonormal basis*.

For the sake of uniform discussion, we can also prescribe the orientation of the basis vectors: it is a generally widespread custom to choose a right-handed system. The vectors of the basis constructed in this way are often denoted by $\mathbf{i}$, $\mathbf{j}$ in the plane, and by $\mathbf{i}$, $\mathbf{j}$, and $\mathbf{k}$ in space.

In two- and three-dimensional space, the dot product takes a simple form if the basis vectors of the coordinate system are orthonormal.

**Proposition 1.36 (Dot product in an orthonormal coordinate system).** *The dot product of the vectors $\mathbf{u} = (u_1, u_2)$ and $\mathbf{v} = (v_1, v_2)$ in the plane, and $\mathbf{u} = (u_1, u_2, u_3)$ and $\mathbf{v} = (v_1, v_2, v_3)$ in space, in an orthonormal coordinate system is*
$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2, \quad\text{and}\quad \mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + u_3v_3,\ \text{respectively}.$$

*Proof.* In the planar case, we exploit that $\mathbf{i} \cdot \mathbf{i} = \mathbf{j} \cdot \mathbf{j} = 1$ and $\mathbf{i} \cdot \mathbf{j} = 0$:
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= (u_1\mathbf{i} + u_2\mathbf{j}) \cdot (v_1\mathbf{i} + v_2\mathbf{j}) \\
&= u_1v_1\mathbf{i} \cdot \mathbf{i} + (u_1v_2 + u_2v_1)\mathbf{i} \cdot \mathbf{j} + u_2v_2\mathbf{j} \cdot \mathbf{j} \\
&= u_1v_1 + u_2v_2.
\end{aligned}$$
The spatial case can be proved similarly. $\square$

**Proposition 1.37 (Cross product in an orthonormal coordinate system).** *The cross product of the spatial vectors $\mathbf{a} = (a_1, a_2, a_3)$ and $\mathbf{b} = (b_1, b_2, b_3)$ in a rectangular coordinate system is*
$$\mathbf{a} \times \mathbf{b} = (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1).$$

▶ To easily memorize the coordinates of $\mathbf{a} \times \mathbf{b}$, we show two schemes in the margin (Figure 1.39).

*Proof.* We have already calculated the cross products of the basis vectors with each other in Example 1.26. Exploiting that $\mathbf{i} \times \mathbf{i} = \mathbf{j} \times \mathbf{j} = \mathbf{k} \times \mathbf{k} = \mathbf{0}$, $\mathbf{i} \times \mathbf{j} = \mathbf{k}$, $\mathbf{j} \times \mathbf{i} = -\mathbf{k}$, …, we obtain the following:
$$\begin{aligned}
\mathbf{a} \times \mathbf{b} &= (a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}) \times (b_1\mathbf{i} + b_2\mathbf{j} + b_3\mathbf{k}) \\
&= a_2b_3\,\mathbf{j} \times \mathbf{k} + a_3b_2\,\mathbf{k} \times \mathbf{j} + a_3b_1\,\mathbf{k} \times \mathbf{i} + a_1b_3\,\mathbf{i} \times \mathbf{k} + a_1b_2\,\mathbf{i} \times \mathbf{j} + a_2b_1\,\mathbf{j} \times \mathbf{i} \\
&= a_2b_3\mathbf{i} - a_3b_2\mathbf{i} + a_3b_1\mathbf{j} - a_1b_3\mathbf{j} + a_1b_2\mathbf{k} - a_2b_1\mathbf{k} \\
&= (a_2b_3 - a_3b_2, a_3b_1 - a_1b_3, a_1b_2 - a_2b_1).
\end{aligned}$$
$\square$

**Theorem 1.38 (Area of a parallelogram).** *The area of the parallelogram spanned by the vectors $(a, b)$ and $(c, d)$ is*
$$|ad - bc|.$$
*The sign of $ad - bc$ is positive or negative, respectively, according to whether the two vectors in the given order form a right- or left-handed system.*

*Figure 1.39. Calculating the cross product from the coordinates of the two vectors. a) Write the two vectors below each other, then copy the first two coordinates to the end of the vectors, finally subtract the product along the ↗ arrow from the product of the numbers at the ends of the ↘ arrow for the arrow pairs placed in an X shape; the result is $(a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1)$. b) Write the vectors $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ above the coordinates of the two vectors, copy the first two columns after the table, and subtract the products along ↗ from the products along ↘: $(a_2b_3 - a_3b_2)\mathbf{i} + (a_3b_1 - a_1b_3)\mathbf{j} + (a_1b_2 - a_2b_1)\mathbf{k}$.*

*Proof.* The area of a parallelogram spanned by two 3-dimensional vectors is the absolute value of their cross product. Embed the given two vectors in one of the coordinate planes of space, consider for example the vectors $(a, b, 0)$ and $(c, d, 0)$. Their cross product is
$$(a, b, 0) \times (c, d, 0) = (0, 0, ad - bc),$$
its absolute value is $|ad - bc|$.

Since the vectors $(a, b, 0)$, $(c, d, 0)$, and $(0, 0, ad - bc)$ form a right-handed system, $ad - bc$ is positive if and only if the vectors $(a, b)$ and $(c, d)$ form a right-handed system in the plane. $\square$

The volume of a parallelepiped can also be expressed by the coordinates of the vectors spanning it. The volume of the parallelepiped spanned by the vectors $\mathbf{a} = (a_1, a_2, a_3)$, $\mathbf{b} = (b_1, b_2, b_3)$, and $\mathbf{c} = (c_1, c_2, c_3)$ is equal to the absolute value of the expression
$$(\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = a_1b_2c_3 + a_2b_3c_1 + a_3b_1c_2 - a_1b_3c_2 - a_2b_1c_3 - a_3b_2c_1 \tag{1.3}$$
and its sign is positive or negative, respectively, according to whether the vectors form a right- or left-handed system. The margin provides help for calculating and memorizing this formula (Figure 1.41).

*Figure 1.40. The signed area of the parallelogram is $ad - bc$, for which the above scheme is used to memorize. This is equal to the determinant – to be learned later – of two 2-dimensional vectors, which is denoted by enclosing the table formed from the coordinates of the two vectors between vertical bars: $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$. This sign does not denote absolute value, another pair of bars is needed for that, i.e., $|ad - bc| = \left|\begin{vmatrix} a & b \\ c & d \end{vmatrix}\right|$.*

*Figure 1.41. The volume of the parallelepiped is equal to the absolute value of the scalar triple product of the three vectors spanning it; with the notation used for determinants, the signed volume is $\mathbf{abc} = (\mathbf{a} \times \mathbf{b}) \cdot \mathbf{c} = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$.*

### The set $\mathbb{R}^n$

We have seen that 2-dimensional and 3-dimensional vector-like quantities can be described by an ordered pair or triple of numbers. Can this relationship be reversed? Is it meaningful to consider these $n$-tuples of numbers as vectors or points of an $n$-dimensional space? And is the generalization of the concepts used in 2- and 3-dimensional space to $n$ dimensions useful? The answer to each question is a definite yes, which is brilliantly proven by the solution of countless economic or internet-related questions in multi-billion-dimensional spaces, ranging from the 4-dimensional space-time concept of physics.

**Definition 1.39.** *The set of ordered $n$-tuples of elements formed from the elements of an arbitrary set $H$ is denoted by $H^n$.*

For example, the set of ordered triples of elements formed from the elements of the set $H = \{0,1\}$ is
$$H^3 = \{(0,0,0), (0,0,1), (0,1,0), (1,0,0), (0,1,1), (1,0,1), (1,1,0), (1,1,1)\}.$$

According to the above notation, $\mathbb{R}^n$ denotes the set of ordered $n$-tuples of numbers formed from the real numbers. Accordingly, we coordinatized the points and vectors of the plane with elements of $\mathbb{R}^2$, and those of space with $\mathbb{R}^3$. We will introduce vector operations on elements of $\mathbb{R}^n$, and we will speak of $\mathbb{R}^n$ as a vector space. Similarly, we will consider $\mathbb{R}^n$ as a geometric or point space if we think of its elements as points and perform geometric operations among them. This duality will not cause confusion: the role of $\mathbb{R}^n$ will always be determined by what we do with its elements, that is, the $n$-tuples of numbers.

In getting to know $\mathbb{R}^n$, we proceed along the thread of *analogy*; we will transfer and generalize the concepts of 2- and 3-dimensional space to $n$ dimensions. This analogy will help us to "see" something in $n$ dimensions as well (even if not as well as in 3 dimensions). As an example for the analogy, we show the 2-dimensional projection of a 4-dimensional cube in Figure 1.42.

### Addition and scalar multiplication of vectors in $\mathbb{R}^n$

The coordinate form of the operations of 2- and 3-dimensional vectors can be transferred to $n$-dimensional vectors in an analogous way in the case of addition, subtraction, and scalar multiplication.

**Definition 1.40 (Vector operations in $\mathbb{R}^n$).** *Let $c \in \mathbb{R}$ be an arbitrary real number, $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ and $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ be two arbitrary vectors of $\mathbb{R}^n$. By the sum of two vectors and the $c$-multiple of a vector we mean the vectors in $\mathbb{R}^n$*
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n) \\
c\mathbf{u} &= (cu_1, cu_2, \ldots, cu_n).
\end{aligned}$$

We summarize the most important properties of these operations:

**Theorem 1.41 (Properties of addition and scalar multiplication).** *Let $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ be three arbitrary vectors of $\mathbb{R}^n$, and let $c, d$ be two arbitrary real numbers, let $\mathbf{0}$ denote the vector $(0, 0, \ldots, 0)$. Then*
- *a)* $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$ — *the operation is interchangeable (commutative)*
- *b)* $\mathbf{u} + (\mathbf{v} + \mathbf{w}) = (\mathbf{u} + \mathbf{v}) + \mathbf{w}$ — *groupable (associative)*
- *c)* $\mathbf{u} + \mathbf{0} = \mathbf{u}$ — *zero vector*
- *d)* $c(d\mathbf{u}) = (cd)\mathbf{u}$ — *the two multiplications are compatible*
- *e)* $0\mathbf{u} = \mathbf{0}$, $1\mathbf{u} = \mathbf{u}$ — *multiplication by 0 and 1*
- *f)* $c(\mathbf{u} + \mathbf{v}) = c\mathbf{u} + c\mathbf{v}$ — *distributive*
- *g)* $(c + d)\mathbf{u} = c\mathbf{u} + d\mathbf{u}$ — *distributive*

We also agree that by the opposite of a vector $\mathbf{u}$, denoted by $-\mathbf{u}$, we mean its $-1$-multiple, i.e., $-\mathbf{u} = (-1)\mathbf{u} = (-u_1, -u_2, \ldots, -u_n)$. Thus, for the difference of two vectors it is true that $\mathbf{u} - \mathbf{v} = \mathbf{u} + (-\mathbf{v})$.

▶ Each of these properties can easily be traced back to the algebraic properties of real numbers, so checking (proving) them is left to the Reader. As a sample, we show the proof of property a):
$$\begin{aligned}
\mathbf{u} + \mathbf{v} &= (u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n) \\
&= (v_1 + u_1, v_2 + u_2, \ldots, v_n + u_n) \\
&= \mathbf{v} + \mathbf{u}.
\end{aligned}$$

▶ Properties a)–c) describe the joint properties of addition, d)–e) of scalar multiplication, and f)–g) of the two operations together.

*Figure 1.42. Representation of a 4-dimensional cube in 2 dimensions. The 0-dimensional "cube" consists of a single point, the 1-dimensional cube is bounded by two 0-dimensional ones (a line segment). The 2-dimensional "cube" (the square) is bounded by two congruent 1-dimensional "cubes" from each axis direction (four in total), while the 3-dimensional cube by two squares from each axis direction (six in total). The 2-dimensional representation of the 3-dimensional cube can only be solved by distorting the bounding squares. The 4-dimensional cube is bounded by two 3-dimensional cubes from all four axis directions, eight in total; in the figure we colored three such 3-dimensional cubes.*

### Linear combination, linear independence, linear dependence

Even though we defined the concept of linear independence of vectors for a set of vectors consisting of an arbitrary number of vectors, we saw that in 3-dimensional space at most 3 vectors can be linearly independent. However, in $\mathbb{R}^n$ we can find even $n$ linearly independent vectors.

**Proposition 1.42 (Standard basis of $\mathbb{R}^n$).** *The vectors $\mathbf{e}_1 = (1, 0, \ldots, 0)$, $\mathbf{e}_2 = (0, 1, \ldots, 0), \ldots, \mathbf{e}_n = (0, 0, \ldots, 1)$ in $\mathbb{R}^n$ are linearly independent, and every vector of $\mathbb{R}^n$ can be uniquely expressed as their linear combination!*

*Proof.* $\mathbf{e}_1$ cannot be expressed as a linear combination of the other vectors, since their first coordinate is 0, thus the first coordinate is 0 in any of their linear combinations, but 1 in $\mathbf{e}_1$. It can be proved similarly that none of the $\mathbf{e}_i$ can be expressed as a linear combination of the other vectors ($i = 2, 3, \ldots, n$). The given vectors are therefore linearly independent.

Since the $i$-th coordinate is 1 exclusively only in the vector $\mathbf{e}_i$, and 0 in the others, therefore if an arbitrary vector $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ can be expressed as a linear combination of the vectors $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$, then the coefficient of $\mathbf{e}_i$ in it can only be $v_i$. On the other hand, it is also clear that
$$(v_1, v_2, \ldots, v_n) = v_1\mathbf{e}_1 + v_2\mathbf{e}_2 + \ldots + v_n\mathbf{e}_n.$$
With this we have proved that every vector of $\mathbb{R}^n$ can be uniquely expressed as a linear combination of the vectors $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$. $\square$

**Definition 1.43 (Standard basis).** *The set consisting of the vectors $\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_n$ is called the standard basis of the vector space $\mathbb{R}^n$.*

In the above proof, we proved the linear independence of vectors by showing, according to Definition 1.10, that each vector is independent of the others. This path is cumbersome. At the same time, we saw in the plane and in space that the independence of vectors is accompanied by the uniqueness of the linear combinations formed from them. This is also true for the zero vector, which is produced as a linear combination taken with zero coefficients – this is what we call the trivial representation of the zero vector. This is the basis of the following theorem:

**Theorem 1.44 (Linear independence).** *For an arbitrary system of vectors $\mathcal{V} = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ in $\mathbb{R}^n$, the following two statements are equivalent:*
1. *$\mathcal{V}$ is linearly independent, that is, if $k > 1$ none of its vectors can be expressed as a linear combination of the others, and if $k = 1$ the vector is not the zero vector.*
2. *The zero vector can only be expressed in one way – the trivial way – as a linear combination of $\mathcal{V}$. In other words, the linear combination taken with scalars $c_1, c_2, \ldots, c_k$ can only be the zero vector, that is*
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0}$$
*can hold only if $c_1 = c_2 = \ldots = c_k = 0$.*

*Proof.* First, let us assume that the vector system consists of only a single vector $\mathbf{v}$. Then the theorem states that this vector is linearly independent, that is, it is not the zero vector exactly if $c\mathbf{v} = \mathbf{0}$ can only hold for $c = 0$. This is obvious, since if $\mathbf{v} \neq \mathbf{0}$ and $c \neq 0$, then $c\mathbf{v} = \mathbf{0}$ cannot hold either. In the following, let us assume that the vector system consists of at least two vectors. In the following we prove by contraposition, that is, we prove the statement $A \Rightarrow B$ by the equivalent statement $\neg B \Rightarrow \neg A$.

($\Leftarrow$) We show that if $c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0}$ can only hold for $c_1 = c_2 = \ldots = c_k = 0$, then none of the vectors $\mathbf{v}_i$ can be expressed as a linear combination of the others ($i = 1, 2, \ldots, k$). Suppose that one of the vectors – for example $\mathbf{v}_1$ – can be expressed as a linear combination of the others, that is
$$\mathbf{v}_1 = d_2\mathbf{v}_2 + \ldots + d_k\mathbf{v}_k,$$
or after rearranging
$$(-1)\mathbf{v}_1 + d_2\mathbf{v}_2 + \ldots + d_k\mathbf{v}_k = \mathbf{0}.$$
Since the coefficient of $\mathbf{v}_1$ is not 0, we were able to express the zero vector as a linear combination in which not all coefficients are 0.

($\Rightarrow$) We show that if none of the vectors in the vector system can be expressed as a combination of the others, then only the linear combination with all zero coefficients can be the zero vector. We prove again by contraposition: if there is a linear combination – not with all 0 coefficients – which is equal to the zero vector, that is
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_k\mathbf{v}_k = \mathbf{0},$$
but one of the coefficients – for example $c_1$ – is not 0, then $\mathbf{v}_1$ can be expressed as a linear combination of the other vectors:
$$\mathbf{v}_1 = -\frac{c_2}{c_1}\mathbf{v}_2 - \ldots - \frac{c_k}{c_1}\mathbf{v}_k,$$
which proves the statement. $\square$

A system of vectors is called *linearly dependent* if it is not independent, i.e., in the case of a single-element vector system if that vector is the zero vector, and in the case of a multi-element vector system if there is a vector in it that can be expressed as a linear combination of the others. According to the previous theorem, this is equivalent to the vector system having a linear combination yielding the zero vector in which not all coefficients are zero. The definition of linear dependence can be slightly sharpened:

**Theorem 1.45 (Linear dependence).** *A vector system $V = \{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\}$ in $\mathbb{R}^n$ consisting of at least two non-zero vectors is linearly dependent if and only if there is an index $t \geq 2$ such that $\mathbf{v}_t$ is a linear combination of the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_{t-1}$.*

In other words, if in a vector system not containing the zero vector we find a vector which is a linear combination of the others, then for any ordering of the vectors we will also find one which is a linear combination of only the vector(s) preceding it in the ordering.

*Proof.* First suppose that the vector system is dependent, and let $t$ be the smallest integer for which the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_t$ are already dependent. Since $\mathbf{v}_1 \neq \mathbf{0}$, the first vector cannot be dependent, so $t \geqslant 2$. Due to the dependence of these vectors, there are constants $c_i$ with which
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \ldots + c_t\mathbf{v}_t = \mathbf{0}.$$
It is certain that $c_t \neq 0$, otherwise the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_{t-1}$ would already be linearly dependent, and this contradicts the definition of $t$. Thus
$$\mathbf{v}_t = \frac{-c_1}{c_t}\mathbf{v}_1 + \frac{-c_2}{c_t}\mathbf{v}_2 + \cdots + \frac{-c_{t-1}}{c_t}\mathbf{v}_{t-1},$$
which proves that such a vector exists in a dependent vector system.

The implication in the other direction is true by definition, since if such a vector $\mathbf{v}_t$ exists, then it is indeed a linear combination of all the other vectors. $\square$

### Dot product in $\mathbb{R}^n$

We first generalize the dot product from the form we saw in 2- and 3-dimensional space in the case of an orthonormal basis.

**Definition 1.46 (Dot product in $\mathbb{R}^n$).** *Let $\mathbf{u} = (u_1, u_2, \ldots, u_n)$ and $\mathbf{v} = (v_1, v_2, \ldots, v_n)$ be two arbitrary vectors of the space $\mathbb{R}^n$. By their dot product we mean the following expression:*
$$\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \ldots + u_nv_n.$$

**Theorem 1.47 (Basic properties of the dot product).** *Let $\mathbf{u}$, $\mathbf{v}$, and $\mathbf{w}$ be three arbitrary vectors of $\mathbb{R}^n$, and let $c$ be an arbitrary real number. Then*
- *a)* $\mathbf{u} \cdot \mathbf{v} = \mathbf{v} \cdot \mathbf{u}$ — *commutative*
- *b)* $\mathbf{u} \cdot (\mathbf{v} + \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} + \mathbf{u} \cdot \mathbf{w}$ — *distributive*
- *c)* $(c\mathbf{u}) \cdot \mathbf{v} = c(\mathbf{u} \cdot \mathbf{v})$ — *the two multiplications are compatible*
- *d)* $\mathbf{u} \cdot \mathbf{u} \geqslant 0$ and $\mathbf{u} \cdot \mathbf{u} = 0 \iff \mathbf{u} = \mathbf{0}$ — *positive definite*

*Proof.* The proof is again very simple here, so we only show point a), leaving the rest to the Reader.
$$\begin{aligned}
\mathbf{u} \cdot \mathbf{v} &= u_1v_1 + u_2v_2 + \ldots + u_nv_n \\
&= v_1u_1 + v_2u_2 + \ldots + v_nu_n \\
&= \mathbf{v} \cdot \mathbf{u}.
\end{aligned}$$
$\square$

Further properties can be found in Exercise 1.64.

### Distance and angle in $\mathbb{R}^n$

We use the relationship of the distance and angle of two 2- or 3-dimensional vectors with their dot product to define these concepts in higher-dimensional spaces.

**Definition 1.48 (Absolute value, angle, perpendicularity, distance).** *Let $\mathbf{u}$ and $\mathbf{v}$ be two arbitrary vectors of the space $\mathbb{R}^n$.*
- *a) By the length of the vector $\mathbf{u}$ we mean the root of its dot product with itself:*
$$|\mathbf{u}| := \sqrt{\mathbf{u} \cdot \mathbf{u}}. \tag{1.4}$$
- *b) The cosine of the angle (of inclination) of the vectors $\mathbf{u}$ and $\mathbf{v}$ is the following fraction:*
$$\cos(\mathbf{u},\mathbf{v})_\angle := \frac{\mathbf{u} \cdot \mathbf{v}}{|\mathbf{u}||\mathbf{v}|} \tag{1.5}$$
- *c) We say that the vectors $\mathbf{u}$ and $\mathbf{v}$ are perpendicular to each other if*
$$\mathbf{u} \cdot \mathbf{v} = 0. \tag{1.6}$$
- *d) By the distance between the endpoints of the two vectors, which we simply call the distance between the two vectors, we mean the absolute value of their difference:*
$$d(\mathbf{u},\mathbf{v}) := |\mathbf{u} - \mathbf{v}|. \tag{1.7}$$

▶ The coordinate forms of the above definitions
$$\begin{aligned}
|\mathbf{u}| &= \sqrt{u_1^2 + u_2^2 + \ldots + u_n^2}, \\
\cos(\mathbf{u},\mathbf{v})_\angle &= \frac{u_1v_1 + u_2v_2 + \ldots + u_nv_n}{\sqrt{u_1^2 + u_2^2 + \ldots + u_n^2}\,\sqrt{v_1^2 + v_2^2 + \ldots + v_n^2}}.
\end{aligned}$$

▶ Regarding the definition of the angle of inclination of vectors, we still need to prove that it is meaningful, because the cosine of an angle can only fall into the $[-1, 1]$ interval. That is, we need to show that in formula (1.5) $|\mathbf{u} \cdot \mathbf{v}| \leqslant |\mathbf{u}||\mathbf{v}|$. This is exactly the CBS inequality. We will prove it soon!

**Example 1.49 (Angle and distance of vectors).** *What is the absolute value of the vector $\mathbf{u} = (2, 3, 4, 14)$, what is its distance from the vector $\mathbf{v} = (4, 6, -10, 10)$, and what is the cosine of its angle enclosed with the vector $\mathbf{w} = (0, 3, 6, -2)$?*

*Solution.* We use formulas (1.4), (1.7), and (1.5):
$$\begin{aligned}
|\mathbf{u}| &= \sqrt{2^2 + 3^2 + 4^2 + 14^2} = \sqrt{225} = 15, \\
d(\mathbf{u},\mathbf{v}) &= \sqrt{(2-4)^2 + (3-6)^2 + (4-(-10))^2 + (14-10)^2} \\
&= \sqrt{2^2 + 3^2 + 14^2 + 4^2} = 15, \\
\cos(\mathbf{u},\mathbf{w})_\angle &= \frac{2 \cdot 0 + 3 \cdot 3 + 4 \cdot 6 + 14 \cdot (-2)}{\sqrt{2^2 + 3^2 + 4^2 + 14^2}\,\sqrt{0^2 + 3^2 + 6^2 + (-2)^2}} = \frac{1}{21}.
\end{aligned}$$
$\square$

The unit vector in $\mathbb{R}^n$ can also be defined similarly as before, and it is clear that if $\mathbf{a} \neq \mathbf{0}$, then $\mathbf{a}/|\mathbf{a}|$ is a unit vector, since
$$\left|\frac{\mathbf{a}}{|\mathbf{a}|}\right| = \frac{1}{|\mathbf{a}|}|\mathbf{a}| = 1.$$
The role of multiplication by a unit vector is also identical:

**Proposition 1.50 (Components parallel and perpendicular to a vector).** *If $\mathbf{b} \in \mathbb{R}^n$ is arbitrary and $\mathbf{e} \in \mathbb{R}^n$ is a unit vector, then $\mathbf{b}$ can be decomposed as follows into the sum of a vector parallel to $\mathbf{e}$ and one perpendicular to it:*
$$\mathbf{b} = (\mathbf{b} \cdot \mathbf{e})\mathbf{e} + (\mathbf{b} - (\mathbf{b} \cdot \mathbf{e})\mathbf{e}).$$

*Proof.* $(\mathbf{b} \cdot \mathbf{e})\mathbf{e}$ is parallel to $\mathbf{e}$, so we only need to show that the two vectors are perpendicular.
$$(\mathbf{b} \cdot \mathbf{e})\mathbf{e} \cdot (\mathbf{b} - (\mathbf{b} \cdot \mathbf{e})\mathbf{e}) = (\mathbf{b} \cdot \mathbf{e})(\mathbf{e} \cdot \mathbf{b}) - (\mathbf{b} \cdot \mathbf{e})^2(\mathbf{e} \cdot \mathbf{e}) = 0.$$
$\square$

Based on this, it can still be said that $\operatorname{proj}_{\mathbf{e}} \mathbf{b} = (\mathbf{b} \cdot \mathbf{e})\mathbf{e}$ is the orthogonal projection of the vector $\mathbf{b}$ onto the line of $\mathbf{e}$, and thus for an arbitrary vector $\mathbf{a} \neq \mathbf{0}$, $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}$ (see Theorem 1.23).

**Theorem 1.51 (Cauchy–Bunyakovsky–Schwarz inequality).** *For arbitrary vectors $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$*
$$|\mathbf{u} \cdot \mathbf{v}| \leqslant |\mathbf{u}||\mathbf{v}|. \tag{1.8}$$
*Equality holds if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent, that is, if one vector is a scalar multiple of the other.*

*Proof.* Suppose first that $\mathbf{v} = \mathbf{0}$. Then both parts of the theorem's statement are obviously true, since equality holds, and the two vectors are linearly dependent. If $\mathbf{v} \neq \mathbf{0}$, then let $\mathbf{e} = \mathbf{v}/|\mathbf{v}|$ be the unit vector in the direction of $\mathbf{v}$. The length, or rather its square, of the component of the vector $\mathbf{u}$ perpendicular to the line of $\mathbf{e}$ is obviously non-negative, that is
$$\begin{aligned}
0 &\leqslant |\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}|^2 && (\text{application of } |\mathbf{a}|^2 = \mathbf{a} \cdot \mathbf{a}) \\
&= (\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}) \cdot (\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}) && (\text{distributivity}) \\
&= |\mathbf{u}|^2 - 2|\mathbf{u} \cdot \mathbf{e}|^2 + |\mathbf{u} \cdot \mathbf{e}|^2 && (\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2) \\
&= |\mathbf{u}|^2 - |\mathbf{u} \cdot \mathbf{e}|^2 \\
&= |\mathbf{u}|^2 - \frac{|\mathbf{u} \cdot \mathbf{v}|^2}{|\mathbf{v}|^2} && (\text{substituting back } \mathbf{e} = \mathbf{v}/|\mathbf{v}|).
\end{aligned}$$

From here, by rearranging, we immediately obtain the statement to be proved. On the other hand, it is also clear that $0 = |\mathbf{u} - (\mathbf{u} \cdot \mathbf{e})\mathbf{e}|$ can only hold if $\mathbf{u} = (\mathbf{u} \cdot \mathbf{e})\mathbf{e}$, that is, if $\mathbf{u}$ and $\mathbf{e}$ are parallel, that is, if $\mathbf{u}$ is a scalar multiple of $\mathbf{v}$, which is if the two vectors are linearly dependent. $\square$


**1.52. tétel (Háromszög-egyenlőtlenség $\mathbb{R}^n$-ben).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokra*
$$|\mathbf{u} + \mathbf{v}| \leqslant |\mathbf{u}| + |\mathbf{v}|.$$

A bizonyítás megegyezik a 3-dimenziós változatra, azaz az 1.21. tételre adott bizonyítással.

A vektor abszolút értékét a skaláris szorzat segítségével definiáltuk, de fordítva, a skaláris szorzat is kifejezhető a vektor abszolút értékével. E formulákat *polarizációs formuláknak* nevezzük.

**1.53. tétel (Polarizációs formulák $\mathbb{R}^n$-ben).** *Tetszőleges $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$ vektorokra*
$$\mathbf{u} \cdot \mathbf{v} = \frac{1}{4}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u} - \mathbf{v}|^2\right) \tag{1.9}$$
$$\mathbf{u} \cdot \mathbf{v} = \frac{1}{2}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u}|^2 - |\mathbf{v}|^2\right) \tag{1.10}$$

*Bizonyítás.* A bizonyításban az abszolút érték (1.4)-beli definícióját használjuk:
$$\begin{aligned}
\frac{1}{4}\left(|\mathbf{u} + \mathbf{v}|^2 - |\mathbf{u} - \mathbf{v}|^2\right) &= \frac{1}{4}\left((\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} + \mathbf{v}) - (\mathbf{u} - \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v})\right) \\
&= \frac{1}{4}(\mathbf{u} \cdot \mathbf{u} + \mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{u} + \mathbf{v} \cdot \mathbf{v} - \mathbf{u} \cdot \mathbf{u} + \mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{u} - \mathbf{v} \cdot \mathbf{v}) \\
&= \frac{1}{4}(4\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot \mathbf{v}.
\end{aligned}$$
A másik formula hasonlóan bizonyítható. $\square$

Végül egy fontos összefüggés az ortogonális vektorrendszerekről:

**1.54. állítás (Ortogonális vektorrendszer lineáris függetlensége).** *Tegyük fel, hogy a zérusvektortól különböző $\mathbb{R}^n$-beli $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ vektorok páronként ortogonálisak, azaz bármely $i \neq j$ esetén $\mathbf{v}_i \cdot \mathbf{v}_j = 0$. Ekkor e vektorok lineárisan függetlenek.*

*Bizonyítás.* Tegyük fel, hogy valamely $c_1, c_2, \ldots, c_k$ konstansokra
$$c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k = \mathbf{0}.$$
Szorozzuk be az egyenlőség mindkét oldalát skalárisan a $\mathbf{v}_i$ vektorral. Mivel $i \neq j$ esetén $\mathbf{v}_i \cdot \mathbf{v}_j = 0$, ezért azt kapjuk, hogy
$$c_i\mathbf{v}_i \cdot \mathbf{v}_i = 0,$$
amiből $\mathbf{v}_i \cdot \mathbf{v}_i \neq 0$ miatt következik, hogy $c_i = 0$. Mivel ez minden $i = 1, 2, \ldots, k$ indexre igaz, ezért a vektorok valóban lineárisan függetlenek. $\square$

## Feladatok

### Ellenőrző kérdések

**1.55.● Koordinátás alak a 3-dimenziós térben: igaz – hamis.** Melyek igazak, melyek hamisak az alábbi állítások közül? Válaszunkat indokoljuk.
- a) A tér vektorainak koordinátázásához elég egy bázis megadása.
- b) A tér pontjainak koordinátázásához elég egy bázis megadása.
- c) Két koordinátás alakjával megadott vektor összegét a bázistól függetlenül ugyanazzal a képlettel számoljuk.
- d) Két koordinátás alakjával megadott vektor skaláris szorzatát a bázistól függetlenül ugyanazzal a képlettel számoljuk.

**1.56.●** Legyenek $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$.
- a) Mit állíthatunk a vektorokról, ha $|\mathbf{u}| = 3$, $|\mathbf{v}| = 2$ és $\mathbf{u} \cdot \mathbf{v} = 7$?
- b) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 5$, $|\mathbf{v}| = 3$ és $|\mathbf{u} + \mathbf{v}| = 4$?
- c) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 2$, $|\mathbf{v}| = 3$ és $|\mathbf{u} - \mathbf{v}| = 6$?
- d) Mennyi $\mathbf{u} \cdot \mathbf{v}$, ha $|\mathbf{u}| = 3$, $|\mathbf{v}| = 5$ és $|\mathbf{u} - \mathbf{v}| = 5$?
- e) Mennyi $d(\mathbf{u}, \mathbf{v})$ értéke, ha $|\mathbf{u}| = 8$, $|\mathbf{v}| = 15$, és $\mathbf{u} \cdot \mathbf{v} = 0$?

### Műveletek $\mathbb{R}^n$-ben

**1.57.** Számítsuk ki az alábbi vektorok skaláris és vektori szorzatát!
- a) $\mathbf{a} = (1, 2, -1)$, $\mathbf{b} = (2, 1, 1)$
- b) $\mathbf{a} = (1, 0, 1)$, $\mathbf{b} = (0, 2, 1)$
- c) $\mathbf{u} = (1, 2, 3)$, $\mathbf{v} = (3, 2, 1)$

**1.58.●** Határozzuk meg az alábbi vektorok összegét, skalárszorzatát, és hajlásszögét!
- a) $\mathbf{u} = (1, -3)$, $\mathbf{v} = (-6, -2)$
- b) $\mathbf{a} = (1, 2, -1)$, $\mathbf{b} = (2, 1, 1)$
- c) $\mathbf{u} = (1, 1, 2, 2)$, $\mathbf{v} = (0, 1, 2, 0)$
- d) $\mathbf{x} = (1, 1, 2, 2)$, $\mathbf{y} = (0, -1, -2, 0)$
- e) $\mathbf{u} = (1, 0, 1, 0, \ldots)$, $\mathbf{v} = (-1, -1, -1, \ldots) \in \mathbb{R}^n$, $n$ páros

**1.59.** Határozzuk meg az alábbi vektorok hajlásszögének numerikus közelítő értékét fokban!
- a) $\mathbf{a} = (1, 2, 3, 4, 5)$, $\mathbf{b} = (-1, -1, -1, -1, -1)$
- b) $\mathbf{x} = (1, 2, 3, 2.592116)$, $\mathbf{y} = (2, 2, -2, -2.602112)$

**1.60.** Jellemezzük az $ABC$ háromszöget szögei szerint (pl. derékszögű, tompaszögű, …)!
- a) $A(1, 1, 1)$, $B(2, 2, 2)$, $C(2, 0, 2)$
- b) $A(1, 1, 1)$, $B(2, 2, 2)$, $C(2, 0, 2)$
- c) $A(2, 0, 1, 1)$, $B(2, 2, 1, 1)$, $C(3, 3, 2, 2)$

**1.61.** Határozzuk meg az $n$-dimenziós kocka testátlójának és egy oldalélének szögét! Mekkora ez a szög $n = 2$ és $n = 4$ esetén?

**1.62.** Bontsuk fel a $\mathbf{b}$ vektort $\mathbf{a}$-val párhuzamos és rá merőleges összetevőkre. Határozzuk meg a $\mathbf{b}$ vektor $\mathbf{a}$ egyenesére eső merőleges vetületének hosszát!
- a) $\mathbf{a} = (1, 2, -2)$, $\mathbf{b} = (4, 6, -1)$,
- b) $\mathbf{a} = (2, 3, 6)$, $\mathbf{b} = (5, -3, 8)$,
- c) $\mathbf{a} = (1, 1, 1, 1)$, $\mathbf{b} = (1, 4, 0, 3)$,
- d) $\mathbf{a} = (1, 2, 2, 4)$, $\mathbf{b} = (4, 3, 6, 7)$.

### Bizonyítások

**1.63.** Bizonyítsuk be a skaláris szorzás 1.47. tételbeli tulajdonságait!

**1.64. Skaláris szorzás további tulajdonságai.** Igazoljuk, hogy tetszőleges $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ vektorokra és $c \in \mathbb{R}$ számra
- a) $c(\mathbf{u} \cdot \mathbf{v}) = \mathbf{u} \cdot (c\mathbf{v})$,
- b) $\mathbf{u} \cdot (\mathbf{v} - \mathbf{w}) = \mathbf{u} \cdot \mathbf{v} - \mathbf{u} \cdot \mathbf{w}$,
- c) $(\mathbf{u} \pm \mathbf{v}) \cdot (\mathbf{u} \pm \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} \pm 2\mathbf{u} \cdot \mathbf{v} + \mathbf{v} \cdot \mathbf{v}$,
- d) $(\mathbf{u} + \mathbf{v}) \cdot (\mathbf{u} - \mathbf{v}) = \mathbf{u} \cdot \mathbf{u} - \mathbf{v} \cdot \mathbf{v}$.

**1.65. Vektor abszolút értéke (normája).** Mutassuk meg, hogy tetszőleges $\mathbf{u}, \mathbf{v}, \mathbf{w} \in \mathbb{R}^n$ vektorokra és $c \in \mathbb{R}$ számra
- a) $|\mathbf{u}| = 0 \iff \mathbf{u} = \mathbf{0}$,
- b) $|c\mathbf{u}| = |c||\mathbf{u}|$,
- c) $\big||\mathbf{u}| - |\mathbf{v}|\big| \leqslant |\mathbf{u} - \mathbf{v}|$.

**1.66. Háromszög-egyenlőtlenség általánosítása.** Igazoljuk, hogy tetszőleges $k > 2$ egészre és tetszőleges $\mathbf{u}_1, \mathbf{u}_2, \ldots, \mathbf{u}_k \in \mathbb{R}^n$ vektorokra
$$|\mathbf{u}_1 + \mathbf{u}_2 + \ldots + \mathbf{u}_k| \leqslant |\mathbf{u}_1| + |\mathbf{u}_2| + \ldots + |\mathbf{u}_k|.$$

**1.67. Pithagorász-tétel.** Az $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$ vektorokra pontosan akkor teljesül az
$$|\mathbf{a} + \mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2$$
összefüggés, ha $\mathbf{a}$ és $\mathbf{b}$ merőlegesek egymásra.

**1.68. Paralelogramma-tétel.** Igazoljuk, hogy bármely paralelogramma oldalainak négyzetösszege megegyezik átlóinak négyzetösszegével. Az állítás vektorokat használó ekvivalens alakja: igazoljuk, hogy tetszőleges $\mathbf{a}, \mathbf{b} \in \mathbb{R}^n$ vektorokra
$$|\mathbf{a} + \mathbf{b}|^2 + |\mathbf{a} - \mathbf{b}|^2 = 2(|\mathbf{a}|^2 + |\mathbf{b}|^2).$$

**1.69. Távolságokra vonatkozó háromszög-egyenlőtlenség.** Igazoljuk, hogy tetszőleges $\mathbf{a}, \mathbf{b}, \mathbf{c} \in \mathbb{R}^n$ vektorokra
$$d(\mathbf{a}, \mathbf{b}) + d(\mathbf{b}, \mathbf{c}) \geqslant d(\mathbf{a}, \mathbf{c}).$$

**1.70.●** Igazoljuk, hogy
- a) tetszőleges $u, v, x, y \in \mathbb{R}$ számokra
$$(ux + vy)^2 \leqslant (u^2 + v^2)(x^2 + y^2).$$
- b) tetszőleges $x_1, x_2, \ldots, x_n, y_1, y_2, \ldots, y_n \in \mathbb{R}$ számokra
$$\left(\sum_{i=1}^n x_iy_i\right)^2 \leqslant \left(\sum_{i=1}^n x_i^2\right)\left(\sum_{i=1}^n y_i^2\right).$$

### Projekt: ekvivalencia reláció

Egy $X$ halmazon értelmezett *(bináris) reláción* az $X$ elempárjainak egy $R$ halmazát értjük. Ha egy $(a, b)$ pár benne van ebben a halmazban, azt mondjuk, hogy $a$ az $R$ relációban van $b$-vel, és úgy jelöljük, hogy $a\,R\,b$. Például, ha $X$ az összes valaha élt ember halmaza, akkor az összes olyan $(a, b)$ emberpár halmaza, ahol $a$ anyja $b$-nek, egy reláció (anya-gyermek reláció). Ha $X$ a valósok halmaza, és $R$ azokból az $(a, b)$ párokból áll, melyekre $a$ kisebb vagy egyenlő mint $b$, akkor $R$ egy reláció, melyet a valósok rendezési relációjának nevezünk. E reláció szokásos jele $\leqslant$, így ha $(a, b) \in R$, akkor az $a\,R\,b$ helyett az $a \leqslant b$ jelölést használjuk.

Egy halmaz diszjunkt részhalmazok uniójára való fölbontását a halmaz elemei *osztályozásának* vagy *particionálásának* nevezzük. Egy ilyen osztályozáshoz természetes módon hozzárendelhető egy reláció, melyet a halmazon értelmezett *ekvivalenciarelációnak* nevezünk. E szerint két elem pontosan akkor van relációban (pontosan akkor ekvivalensek), ha azonos osztályba tartoznak. Kérdés, egy relációról hogyan állapítható meg, hogy ekvivalenciareláció-e?

**1.55. tétel (Ekvivalenciareláció).** *Legyen $R$ egy tetszőleges reláció az $X$ halmazon. $R$ pontosan akkor ekvivalenciareláció, ha tetszőleges $a, b, c \in X$ elemre fennáll az alábbi három tulajdonság:*
- *a) $R$ reflexív, azaz $a\,R\,a$, vagyis minden elem relációban van önmagával,*
- *b) $R$ szimmetrikus, azaz ha $a\,R\,b$, akkor $b\,R\,a$,*
- *c) $R$ tranzitív, azaz ha $a\,R\,b$ és $b\,R\,c$, akkor $a\,R\,c$.*

**1.71.** Legyen $R$ a fenti tétel szerinti reláció, és jelölje $R_a$ az $a$-val relációban lévő elemek halmazát. Mutassuk meg, hogy bármely két $a, b \in X$ elemre $R_a$ és $R_b$ vagy azonos, vagy diszjunkt. Ezzel bizonyítsuk az előző tételt!

**1.72. Szabad vektor fogalma.** Mutassuk meg, hogy a 3-dimenziós tér szabad vektorai definiálhatók egy – az irányított szakaszok halmazán értelmezett – ekvivalenciareláció ekvivalenciaosztályaival. Mi ez a reláció?

**1.73. Vektor iránya.** Milyen halmazon értelmezett ekvivalenciareláció segítségével definiálható a vektor irányának és állásának fogalma?

## Megoldások

**1.1.** a) Igaz. b) Hamis, például ha $O = A$, akkor $\overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{AB}$, míg ha $O = B$, akkor $\overrightarrow{OA} + \overrightarrow{OB} = \overrightarrow{BA}$. c) Igaz, az eredmény $O$ választásától függetlenül $\overrightarrow{BA}$. d) Igaz. e) Hamis, lehetnek ellenkező irányúak is. f) Igaz.

**1.2.** a) Hamis. Lehet, hogy a három közül két vektor egy egyenesbe esik, és a harmadik független tőlük: ez a harmadik nem állítható elő a másik kettő lineáris kombinációjaként. b) Igaz, például $\mathbf{i}$, $\mathbf{j}$ és $\mathbf{i} + \mathbf{j}$ ilyenek. De bármely három egy síkba eső nemzérus-vektor ilyen, ha közülük bármely kettő lineárisan független. c) Igaz, például ha $\mathbf{b} = \mathbf{c}$ és $\mathbf{a}$ független $\mathbf{b}$-től. d) Igaz. Ha a térben három vektor lineárisan független, akkor a tér minden vektora kifejezhető lineáris kombinációjukként, ezért a negyedik vektor már nem lehet független. e) Igen, ilyen pl. két független vektor mellé vett három zérusvektor.

**1.3.** Az első esetben: a) egy egyenesbe esnek, mert az együtthatók összege 1, b) $P$ az $A$ ponthoz esik közelebb, mert $\overrightarrow{OA}$ együtthatója nagyobb, és c) $P$ a szakaszon kívül van, mert nem pozitív mindkét együttható. A második esetben: a) $A$, $B$ és $P$ egy egyenesbe esnek, mert az együtthatók összege 1, b) $P$ az $A$ ponthoz esik közelebb, mert $\overrightarrow{OA}$ együtthatója nagyobb, és c) $P$ a szakaszra esik, mert mindkét együttható pozitív.

**1.4.** a) igen, b) nem.

**1.5.** Igen.

**1.6.** „Ha az irányított szakasz a hal, akkor a vektor a halraj."

**1.13.** $\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} = \overrightarrow{P_1P_n}$, illetve $\overrightarrow{P_1P_2} + \overrightarrow{P_2P_3} + \overrightarrow{P_3P_4} + \ldots + \overrightarrow{P_{n-1}P_n} + \overrightarrow{P_nP_1} = \mathbf{0}$.

**1.16.** A $C$-ből induló súlyvonal $\frac{1}{2}(\mathbf{a} + \mathbf{b})$, az $A$-ból induló súlyvonal $\frac{1}{2}\mathbf{b} - \mathbf{a}$, a $B$-ből induló $\frac{1}{2}\mathbf{a} - \mathbf{b}$. E három vektor összege $\mathbf{0}$, így lehetnek egy háromszög oldalvektorai.

**1.17.** Egyik lehetőség a megoldásra, hogy megmutatjuk, az $\overrightarrow{OP_1}, \overrightarrow{OP_2}, \ldots, \overrightarrow{OP_n}$ vektorokból egy szabályos $n$-szög szerkeszthető, így összegük $\mathbf{0}$. Egy elegánsabb és egyszerűbb bizonyítást kapunk, ha meggondoljuk, mi történik az összeggel, ha a vektorokat $2\pi/n$ szöggel elforgatjuk. Mivel az elforgatás az $\overrightarrow{OP_k}$ vektorokat önmagukba forgatja, az összeg nem változik, ugyanakkor elfordul. E feltételt csak a nullvektor elégíti ki.

**1.18.** Jelölje az $ABCD$ négyszög $AB$ oldalának felezőpontját $B_1$, $BC$ oldaláét $B_2$, $CD$ oldaláét $D_2$, $DA$ oldaláét $D_1$. Így
$$\overrightarrow{AB_1} = \tfrac{1}{2}(\overrightarrow{AB}), \qquad \overrightarrow{AD_1} = \tfrac{1}{2}(\overrightarrow{AD}),$$
$$\overrightarrow{AB_2} = \tfrac{1}{2}(\overrightarrow{AB} + \overrightarrow{AC}), \qquad \overrightarrow{AD_2} = \tfrac{1}{2}(\overrightarrow{AD} + \overrightarrow{AC}).$$
Innen
$$\overrightarrow{B_1B_2} = \overrightarrow{AB_2} - \overrightarrow{AB_1} = \tfrac{1}{2}\overrightarrow{AC}, \qquad \overrightarrow{D_1D_2} = \overrightarrow{AD_2} - \overrightarrow{AD_1} = \tfrac{1}{2}\overrightarrow{AC},$$
tehát $\overrightarrow{B_1B_2} = \overrightarrow{D_1D_2}$. Ez épp azt jelenti, hogy a $B_1B_2$ és $D_1D_2$ szakaszok párhuzamosak és egyenlő hosszúak.

**1.19.** A felezőpontokra $\overrightarrow{OF_k} = \frac{1}{2}(\overrightarrow{OP_k} + \overrightarrow{OP_{k+1}})$, ha $k = 1, 2, \ldots, n-1$, és $\overrightarrow{OF_n} = \frac{1}{2}(\overrightarrow{OP_n} + \overrightarrow{OP_1})$. Ezeket az egyenleteket váltakozva $+1$-gyel és $-1$-gyel megszorozva és összeadva $n$ páratlan volta miatt kapjuk, hogy $\overrightarrow{OP_1} = \overrightarrow{OF_1} - \overrightarrow{OF_2} + \ldots + \overrightarrow{OF_n}$.

**1.20.** Ha $\mathbf{v}$ és $\mathbf{w}$ lineárisan összefüggők, akkor az 1.7. állítás szerint valamely $k$ számra $\mathbf{v} = k\mathbf{w}$ (itt kihasználtuk, hogy a feltételek szerint $\mathbf{w}$ nem lehet $\mathbf{0}$). Eszerint $c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c} = kd_1\mathbf{a} + kd_2\mathbf{b} + kd_3\mathbf{c}$. Így az 1.12. tétel alapján kapjuk, hogy $c_1 = kd_1$, $c_2 = kd_2$, $c_3 = kd_3$, azaz $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}$. Fordítva, ha $\frac{c_1}{d_1} = \frac{c_2}{d_2} = \frac{c_3}{d_3}\ (= k)$, akkor a $c_1 = kd_1$, $c_2 = kd_2$, $c_3 = kd_3$ behelyettesítésével $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c} = k(d_1\mathbf{a} + d_2\mathbf{b} + d_3\mathbf{c}) = k\mathbf{w}$. Tehát $\mathbf{v}$ és $\mathbf{w}$ lineárisan összefüggők (kollineárisak).

**1.21.** 1. $c = 4$, 2. $c$ tetszőleges, 3. nincs ilyen $c$, 4. $c = \frac{2}{3}$, $d = 2$, 5. bármely $c = d$ megfelel, 6. $c$ tetszőleges, $d = 2$.

**1.22.** Az $\mathbf{r}$, $\mathbf{s}$, $\mathbf{t}$ vektorok lineárisan a) összefüggők (a $\mathbf{0}$ köztük van), b) függetlenek, c) összefüggők ($\mathbf{t} = \mathbf{r} + \mathbf{s}$), d) összefüggők ($2\mathbf{r} + 3\mathbf{s} - 5\mathbf{t} = \mathbf{0}$).

**1.23.** Megfelelő konstansokkal $\overrightarrow{AM} = c_1\overrightarrow{AE}$, $\overrightarrow{BM} = c_2\overrightarrow{BF}$. Ekkor $\overrightarrow{AM} = \overrightarrow{AB} + \overrightarrow{BM}$, $\overrightarrow{AE} = \mathbf{b} + \frac{1}{2}\mathbf{d}$ és $\overrightarrow{BF} = \mathbf{d} - \frac{1}{2}\mathbf{b}$, ahonnan $\left(c_1 + \frac{c_2}{2} - 1\right)\mathbf{b} + \left(\frac{c_1}{2} - c_2\right)\mathbf{d} = \mathbf{0}$ adódik. Mivel $\mathbf{b}$ és $\mathbf{d}$ lineárisan függetlenek, ezért $c_1 + \frac{c_2}{2} - 1 = 0$ és $\frac{c_1}{2} - c_2 = 0$, ahonnan $c_1 = \frac{4}{5}$, $c_2 = \frac{2}{5}$. Visszahelyettesítve $\overrightarrow{AM} = \frac{4}{5}\mathbf{b} + \frac{2}{5}\mathbf{d}$.

**1.24.** Ha $|\overrightarrow{AP}| : |\overrightarrow{PB}| = m : n$, akkor $|\overrightarrow{AB}| : |\overrightarrow{PB}| = (m + n) : n$, amiből $\overrightarrow{PB} = \frac{n}{m+n}\overrightarrow{BA}$. De $\overrightarrow{OP} = \overrightarrow{OB} + \frac{n}{m+n}\overrightarrow{BA}$ és $\overrightarrow{BA} = \overrightarrow{OA} - \overrightarrow{OB}$, így $\overrightarrow{OP} = \overrightarrow{OB} + \frac{n}{m+n}(\overrightarrow{OA} - \overrightarrow{OB})$, amiből azonnal következik a bizonyítandó formula. A felezőpontot az $m = n = 1$ esetben kapjuk, és ekkor valóban $\overrightarrow{OP} = \frac{1}{2}\overrightarrow{OA} + \frac{1}{2}\overrightarrow{OB}$.

**1.25.** Az 1.16. feladat megoldását és jelöléseit használva ($\mathbf{a} = \overrightarrow{CA}$, $\mathbf{b} = \overrightarrow{CB}$) a $C$ pontból induló súlyvonal $C$-től távolabbi harmadolópontjába mutató vektor $\frac{2}{3} \cdot \frac{1}{2}(\mathbf{a} + \mathbf{b}) = \frac{1}{3}(\mathbf{a} + \mathbf{b})$. A $C$-ből induló és az $A$ ponthoz tartozó súlyvonal harmadolópontjába mutató vektor az 1.24. feladat szerint $\frac{1}{3}\mathbf{a} + \frac{2}{3}\left(\frac{1}{2}\mathbf{b}\right) = \frac{1}{3}(\mathbf{a} + \mathbf{b})$. Hasonló eredményt kapunk a $B$-ből induló súlyvonalra is. Ez bizonyítja a feladat első állítását.

Legyen $O$ egy tetszőleges pont, és $S$ az $ABC$ háromszög súlypontja. Az előzőek szerint $\overrightarrow{OS} = \overrightarrow{OC} + \frac{1}{3}(\overrightarrow{CA} + \overrightarrow{CB})$. Mivel $\overrightarrow{CA} = \overrightarrow{OA} - \overrightarrow{OC}$, $\overrightarrow{CB} = \overrightarrow{OB} - \overrightarrow{OC}$, ezért $\overrightarrow{OS} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$.

**1.26.** Jelölje az $ABCD$ tetraéder $ABC$ lapjának súlypontját $S_D$, és legyen $O$ a tér tetszőleges pontja. Az előző feladat szerint $\overrightarrow{OS_D} = \frac{1}{3}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC})$. Jelölje $S$ a $DS_D$ szakasz $S_D$ ponthoz közelebbi negyedelő pontját. Ekkor az 1.24. feladatot az $m = 3$, $n = 1$ értékekkel alkalmazva kapjuk, hogy $\overrightarrow{OS} = \frac{1}{4}(\overrightarrow{OD} + 3\overrightarrow{OS_D})$. Innen $\overrightarrow{OS} = \frac{1}{4}(\overrightarrow{OA} + \overrightarrow{OB} + \overrightarrow{OC} + \overrightarrow{OD})$ következik. A képlet szimmetrikus volta bizonyítja, hogy bármely másik oldal súlypontjából indulva ugyanerre az eredményre jutottunk volna, azaz $S$ pont mind a négy súlyvonalon rajta van, és negyedeli azokat.

**1.28.** Ha $D$ az $AB$ szakaszt $x : y$ arányban osztja, és $m$ a magasság hossza, akkor $\frac{y}{m} = \frac{m}{x} = \frac{a}{b}$. Innen $\frac{x}{y} = \frac{b^2}{a^2}$. Ebből az 1.24. alapján
$$\overrightarrow{CD} = \frac{a^2}{a^2 + b^2}\overrightarrow{CA} + \frac{b^2}{a^2 + b^2}\overrightarrow{CB}.$$

**1.29.** a) igaz, b) hamis, az egységvektor egyenesére eső merőleges vetületének előjeles hosszával egyenlő, c) igaz, d) hamis (asszociativitásról nem lehet szó, mert a két szorzás művelet egyike skaláris szorzás, a másika skalárral való szorzás az $\mathbf{a}(\mathbf{b} \cdot \mathbf{c})$ szorzatban), e) igaz, f) igaz, g) hamis, lásd még az 1.38. feladatot.

**1.30.** a) hamis, nem kommutatív és nem asszociatív, b) hamis, hisz $(\mathbf{a} - \mathbf{b}) \times \mathbf{c} = \mathbf{0}$ akkor is fönnáll, ha $\mathbf{a} - \mathbf{b} \parallel \mathbf{c}$, nem csak akkor, ha $\mathbf{a} - \mathbf{b} = \mathbf{0}$. c) igaz, d) igaz, e) hamis, f) igaz, g) igaz.

**1.31.** $|\mathbf{a}||\mathbf{b}|\cos\gamma = 1 \cdot 2 \cdot \frac{1}{2} = 1$.

**1.32.** $|\mathbf{a}||\mathbf{b}|\cos\gamma = \sqrt{2} \cdot 2 \cdot \left(-\frac{1}{\sqrt{2}}\right) = -2$.

**1.33.** $1 \cdot 2 \cdot (-1) = -2$.

**1.34.** $0$, hisz merőlegesek ($|\mathbf{a}||\mathbf{b}|\cos\gamma = \sqrt{2} \cdot 2 \cdot 0 = 0$).

**1.35.** Legyenek $\mathbf{a}$ és $\mathbf{c}$ független vektorok, $\mathbf{b}$ pedig tetszőleges. Ekkor az $(\mathbf{a} \cdot \mathbf{b})\mathbf{c}$ szorzat párhuzamos a $\mathbf{c}$ vektorral, míg az $\mathbf{a}(\mathbf{b} \cdot \mathbf{c})$ szorzat az $\mathbf{a}$ vektorral, tehát $(\mathbf{a} \cdot \mathbf{b})\mathbf{c} \neq \mathbf{a}(\mathbf{b} \cdot \mathbf{c})$.

**1.36.** a) $\mathbf{a} \cdot \mathbf{a} - \mathbf{b} \cdot \mathbf{b} = |\mathbf{a}|^2 - |\mathbf{b}|^2$. b) $\mathbf{a} \cdot \mathbf{a} + 2\mathbf{b} \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b} = \mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$.

**1.37.** A Pithagorász-tétel következményeként $\mathbf{a}$ és $\mathbf{b}$ merőlegesek.

**1.38.** Ha $\mathbf{a} = \mathbf{0}$ és $c = 0$, akkor az $X$ pontok kiadják a tér összes pontját, ha viszont $c \neq 0$, akkor egyetlen ilyen $X$ pont sincs. Mivel $\mathbf{e} = \mathbf{a}/|\mathbf{a}|$ egységvektor, ezért
$$\left(c\frac{\mathbf{a}}{|\mathbf{a}|}\right) \cdot \frac{\mathbf{a}}{|\mathbf{a}|} = \left(c\frac{\mathbf{a}}{|\mathbf{a}|^2}\right) \cdot \mathbf{a} = c,$$
ezért ha $Y$ jelöli azt a pontot, melyre
$$\overrightarrow{OY} = c\frac{\mathbf{a}}{|\mathbf{a}|^2},$$
akkor $\overrightarrow{OY} \cdot \mathbf{a} = c$. Az összes olyan $X$ pont, melyre $\overrightarrow{OX} \cdot \mathbf{a} = c$, az $Y$ ponton átmenő és $\mathbf{a}$ vektorra merőleges sík pontjaiból áll. Egyrészt ha $X$ eleget tesz a feltételnek, akkor $\overrightarrow{XY} \cdot \mathbf{a} = (\overrightarrow{OY} - \overrightarrow{OX}) \cdot \mathbf{a} = \overrightarrow{OY} \cdot \mathbf{a} - \overrightarrow{OX} \cdot \mathbf{a} = 0$, tehát $X$ e sík egy pontja. Másrészt, ha $X$ e sík egy pontja, akkor $\overrightarrow{XY} \cdot \mathbf{a} = 0$, így $\overrightarrow{OX} \cdot \mathbf{a} = (\overrightarrow{OX} + \overrightarrow{XY}) \cdot \mathbf{a} = \overrightarrow{OY} \cdot \mathbf{a} = c$, tehát $X$ eleget tesz a feltételnek.

*Ábra: az $\mathbf{a}$ vektorra merőleges sík egy $X$ pontja és az $Y$ talppont.*

**1.39.** Geometriai megoldás: a három egységvektor egy szabályos háromszög három oldalvektora azonos körüljárás szerint irányítva, mivel összegük $\mathbf{0}$. Így hajlásszögük $2\pi/3 = 120°$, tehát a vektorpárok skaláris szorzata $-\frac{1}{2}$, így az összeg $-\frac{3}{2}$.

Algebrai megoldás: $(\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3) \cdot (\mathbf{e}_1 + \mathbf{e}_2 + \mathbf{e}_3) = 0$, tehát $0 = \mathbf{e}_1 \cdot \mathbf{e}_1 + \mathbf{e}_2 \cdot \mathbf{e}_2 + \mathbf{e}_3 \cdot \mathbf{e}_3 + 2(\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3)$. Kihasználva, hogy a vektorok egységvektorok, kapjuk, hogy $\mathbf{e}_1 \cdot \mathbf{e}_2 + \mathbf{e}_1 \cdot \mathbf{e}_3 + \mathbf{e}_2 \cdot \mathbf{e}_3 = -\frac{3}{2}$.

**1.40.** Az 1.12. tétel szerint a $\mathbf{v}$ vektor megfelelő konstans együtthatókkal előállítható $\mathbf{v} = c_1\mathbf{a} + c_2\mathbf{b} + c_3\mathbf{c}$ alakban. Az egyenlőség mindkét oldalát (skalárisan) megszorozva $\mathbf{v}$-vel, majd kihasználva a feltételekből következő $\mathbf{a} \cdot \mathbf{v} = \mathbf{b} \cdot \mathbf{v} = \mathbf{c} \cdot \mathbf{v} = 0$ egyenlőségeket, $\mathbf{v}^2 = 0$ adódik, ami csak úgy teljesülhet, hogy $\mathbf{v} = \mathbf{0}$.

**1.41.** Az $\mathbf{a}$ vektor hossza $\sqrt{2^2 + 2^2} = 2\sqrt{2}$, a $\mathbf{b}$ vektor hossza $\sqrt{4^2 + 3^2} = 5$, az $\mathbf{a}$ vektornak a vízszintes rácsvonalakkal bezárt szöge $\pi/4$, a $\mathbf{b}$ vektornál a szög szögfüggvényei $\cos\gamma = \frac{4}{5}$, $\sin\gamma = \frac{3}{5}$. Így
$$\cos\left(\gamma + \frac{\pi}{4}\right) = \cos\gamma\cos\frac{\pi}{4} - \sin\gamma\sin\frac{\pi}{4} = \frac{4}{5}\frac{\sqrt{2}}{2} - \frac{3}{5}\frac{\sqrt{2}}{2} = \frac{1}{5}\frac{\sqrt{2}}{2},$$
tehát a skaláris szorzat $\mathbf{a} \cdot \mathbf{b} = 2\sqrt{2} \cdot 5 \cdot \frac{1}{5}\frac{\sqrt{2}}{2} = 2$.

**1.42.** Mivel $\mathbf{a} \cdot \mathbf{b} = 2$, $|\mathbf{a}| = 2\sqrt{2}$, ezért
$$\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a} = \frac{2}{8}\mathbf{a} = \frac{1}{4}\mathbf{a},$$
míg az $\mathbf{a}$-ra merőleges összetevő $\mathbf{b} - \frac{1}{4}\mathbf{a}$. Ezt mutatja az alábbi ábra.

*1.43. ábra. Az 1.42. feladat: a $\mathbf{b}$ vektor felbontása $\mathbf{a}$-val párhuzamos és rá merőleges összetevőkre.*

**1.44.** a) $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\gamma = 1 \cdot 2 \cdot \frac{1}{2} = 1$. b) $\mathbf{0}$, hisz párhuzamosak ($\sin\gamma = 0$, így abszolút értéke 0).

**1.45.** a) $(\mathbf{a} + \mathbf{b}) \times (\mathbf{a} - \mathbf{b}) = \mathbf{a} \times \mathbf{a} - \mathbf{a} \times \mathbf{b} + \mathbf{b} \times \mathbf{a} - \mathbf{b} \times \mathbf{b} = -\mathbf{a} \times \mathbf{b} - \mathbf{a} \times \mathbf{b} = -2\mathbf{a} \times \mathbf{b}$. b) $(\mathbf{i} + \mathbf{j} + \mathbf{k}) \times (\mathbf{i} + \mathbf{j}) = \mathbf{i} \times \mathbf{j} + \mathbf{j} \times \mathbf{i} + \mathbf{k} \times \mathbf{i} + \mathbf{k} \times \mathbf{j} = \mathbf{0} + \mathbf{j} - \mathbf{i} = \mathbf{j} - \mathbf{i}$.

**1.46.** Jelölje $P$ szomszédait $Q$, $R$ és $S$.
a) Ekkor két lapátló-vektor például a $\overrightarrow{PQ} + \overrightarrow{PR}$ és a $\overrightarrow{PR} + \overrightarrow{PS}$ vektorok. Ezek szorzata:
$$\left(\overrightarrow{PQ} + \overrightarrow{PR}\right) \cdot \left(\overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \cdot \overrightarrow{PR} + \overrightarrow{PQ} \cdot \overrightarrow{PS} + \overrightarrow{PR} \cdot \overrightarrow{PR} + \overrightarrow{PR} \cdot \overrightarrow{PS} = \overrightarrow{PR} \cdot \overrightarrow{PR} = 1.$$
Kihasználtuk, hogy merőleges vektorok skaláris szorzata 0.
b) Hasonlóan kapható meg egy lapátló-vektor és a testátló-vektor ($\overrightarrow{PQ} + \overrightarrow{PR} + \overrightarrow{PS}$) szorzata:
$$\left(\overrightarrow{PQ} + \overrightarrow{PR}\right) \cdot \left(\overrightarrow{PQ} + \overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \cdot \overrightarrow{PQ} + \overrightarrow{PR} \cdot \overrightarrow{PR} = 2.$$
c) A $Q$, $R$ és $S$ csúcsok olyan sorrendben legyenek megválasztva, hogy $\overrightarrow{PQ}$, $\overrightarrow{PR}$ és $\overrightarrow{PS}$ ebben a sorrendben jobbrendszert alkosson. Ki fogjuk használni, hogy ekkor $\overrightarrow{PQ} \times \overrightarrow{PR} = \overrightarrow{PS}$. Egy élvektor és egy szomszédos lapátló-vektor vektori szorzata:
$$\overrightarrow{PQ} \times \left(\overrightarrow{PQ} + \overrightarrow{PR}\right) = \overrightarrow{PQ} \times \overrightarrow{PQ} + \overrightarrow{PQ} \times \overrightarrow{PR} = \mathbf{0} + \overrightarrow{PS} = \overrightarrow{PS},$$
vagyis a szorzat a két vektor lapjára merőleges élvektor.
d) Legyen a lapátló a $\overrightarrow{PR}$, a nem szomszédos lapátló-vektor $\overrightarrow{PR} + \overrightarrow{PS}$. Ezek szorzata:
$$\overrightarrow{PQ} \times \left(\overrightarrow{PR} + \overrightarrow{PS}\right) = \overrightarrow{PQ} \times \overrightarrow{PR} + \overrightarrow{PQ} \times \overrightarrow{PS} = \overrightarrow{PS} - \overrightarrow{PR},$$
ami a lapátló-vektor síkjának másik lapátló-vektora.

**1.47.** Ha $\mathbf{u} \perp \mathbf{v}$ és $\mathbf{u} \perp \mathbf{w}$, akkor $\mathbf{u} \cdot \mathbf{v} = 0$ és $\mathbf{u} \cdot \mathbf{w} = 0$, így bármely $c, d \in \mathbb{R}$ számokra $\mathbf{u} \cdot (c\mathbf{v} + d\mathbf{w}) = \mathbf{u} \cdot (c\mathbf{v}) + \mathbf{u} \cdot (d\mathbf{w}) = c\,\mathbf{u} \cdot \mathbf{v} + d\,\mathbf{u} \cdot \mathbf{w} = c \cdot 0 + d \cdot 0 = 0$, tehát $\mathbf{u}$ merőleges a $c\mathbf{v} + d\mathbf{w}$ lineáris kombinációra.

**1.48.** Három különböző dolog (így három vektor is) hatféleképp rakható sorba. Ha az $\mathbf{a}$, $\mathbf{b}$ és $\mathbf{c}$ vektorok jobbrendszert alkotnak, akkor ugyancsak jobbrendszert alkotnak a $\mathbf{b}$, $\mathbf{c}$, $\mathbf{a}$ és a $\mathbf{c}$, $\mathbf{a}$, $\mathbf{b}$ vektorhármasok is. A további három esetben, azaz a $\mathbf{c}$, $\mathbf{b}$, $\mathbf{a}$, valamint a $\mathbf{b}$, $\mathbf{a}$, $\mathbf{c}$ és az $\mathbf{a}$, $\mathbf{c}$, $\mathbf{b}$ hármasok esetén balrendszert kapunk a vegyes szorzatról tanultak szerint.

**1.50.** Egyik lehetőség a megoldásra: $\big||\mathbf{b}|\mathbf{a}\big| = \big||\mathbf{a}|\mathbf{b}\big| = |\mathbf{a}||\mathbf{b}|$, ezért a paralelogramma-módszert egy rombuszra kell alkalmazni. Egy másik lehetőség: az $\mathbf{a}/|\mathbf{a}|$ és $\mathbf{b}/|\mathbf{b}|$ két egységvektor, így összegük szögfelező, mivel a paralelogramma-módszer rombuszt ad. E vektor $|\mathbf{a}||\mathbf{b}|$-szerese ugyanúgy szögfelező, és épp ez a feladatbeli vektor. A második kérdés megválaszolásához használjuk az 1.24. példa eredményét!

**1.51.** Milyen irányokat cserél föl a tükör, és milyeneket nem? Nem cseréli föl a tükör síkjával párhuzamos irányokat: minden, a tükör síkjával párhuzamos vektor tükörképe önmaga. Tehát, ha a tükör előtt állunk, és a tükör is függőleges, akkor a „fölfelé" irány a tükörképen sem változik. Viszont a tükör fölcseréli a tükörre merőleges irányokat.

(folyt. 1.51.) Egy lehetőség a definiálásra: ha értelmezve van egy viszonyítási rendszerben (pl. az emberi testhez képest, vagy a mozgó járműben, …) a *föl* és az *előre*, melyek egymásra merőleges irányok, akkor a *jobb* irány az *előre* $\times$ *föl* vektori szorzattal definiálható. Ennek képe a tükörben viszont $(-előre) \times föl = -jobb$, ami épp a *bal*. (A feladatban föltett kérdés egyébként nem pontos, hisz egy vízszintesen a földre helyezett tükör megfordítja a lentet és föntet.)

**1.52.** Bontsuk fel $\mathbf{a}$-t az $\mathbf{e}$-vel párhuzamos $\mathbf{p}$ és rá merőleges $\mathbf{m}$ összetevőkre. $|\mathbf{e} \times \mathbf{a}| = |\mathbf{a}|\sin(\mathbf{e},\mathbf{a})_\angle$, ami megegyezik $|\mathbf{m}|$-mel. $\mathbf{e} \times \mathbf{a}$ merőleges $\mathbf{e}$ és $\mathbf{a}$ síkjára, ezért $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}$ az $\mathbf{e}$ és $\mathbf{a}$ síkjában van és $|(\mathbf{e} \times \mathbf{a}) \times \mathbf{e}| = |\mathbf{a}|\sin(\mathbf{e},\mathbf{a})_\angle$, így $(\mathbf{e} \times \mathbf{a}) \times \mathbf{e} = \mathbf{m}$.

**1.53.** Az $\mathbf{a} + \mathbf{b} + \mathbf{c} = \mathbf{0}$ egyenlőséget $\mathbf{a}$-val vektoriálisan szorozva, átrendezve kapjuk, hogy
$$\mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c} = \mathbf{0},$$
amiből $\mathbf{a} \times \mathbf{b} = \mathbf{c} \times \mathbf{a}$. $\mathbf{b}$-vel való szorzás után kapjuk az $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c}$ egyenlőséget. Az állítás megfordítása nem igaz, mivel bármely három kollineáris vektor esetén $\mathbf{a} \times \mathbf{b} = \mathbf{b} \times \mathbf{c} = \mathbf{c} \times \mathbf{a} = \mathbf{0}$ akkor is, ha $\mathbf{a} + \mathbf{b} + \mathbf{c} \neq \mathbf{0}$.

**1.54.** a) $V$, és a körüljárás azonos. b) $4V$, és az $\mathbf{u}$, $\mathbf{v}$, $\mathbf{w}$ körüljárása az $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ körüljárásával ellentétes!

**1.55.** a) igen, b) nem, az origó kijelölése is szükséges, c) igen, d) nem, a szokásos $\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + u_3v_3$ csak ortonormált bázisban érvényes.

**1.56.** a) ilyen vektorok nincsenek (CBS-egyenlőtlenségnek ellent mond), b) $\mathbf{u} \cdot \mathbf{v} = -9$ (ld. az 1.10 polarizációs formulát), c) ilyen vektorok a háromszög-egyenlőtlenség miatt nem léteznek, d) $\mathbf{u} \cdot \mathbf{v} = -4$ (ld. az 1.9 polarizációs formulát), e) 17 (a 8, 15, 17 pithagoraszi számhármas).

**1.57.** a) $\mathbf{a} \cdot \mathbf{b} = 3$, $\mathbf{a} \times \mathbf{b} = (3, -3, -3)$, b) $\mathbf{a} \cdot \mathbf{b} = 1$, $\mathbf{a} \times \mathbf{b} = (-2, -1, 2)$, c) $\mathbf{u} \cdot \mathbf{v} = 10$, $\mathbf{u} \times \mathbf{v} = (-4, 8, -4)$.

**1.58.** a) $\pi/2$, b) $\pi/3$, c) $\pi/4$, d) $3\pi/4$, e) $\pi/4$.

**1.59.** a) 2.701, $154.76^\circ$, b) 1.91986226152, $110.0^\circ$.

**1.60.** a) egyenlő oldalú, b) tompa szögű ($B$ csúcsnál), c) derékszögű ($C$ csúcsnál).

**1.61.** $\arccos(1/\sqrt{n})$. $n = 2$ esetén $45^\circ$, $n = 4$ esetén $60^\circ$.

**1.62.** Kihasználjuk, hogy $\operatorname{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}}\mathbf{a}$ a párhuzamos és $\mathbf{b} - \operatorname{proj}_{\mathbf{a}} \mathbf{b}$ az $\mathbf{a}$-ra merőleges összetevő:
- a) $(4, 6, -1) = (2, 4, -4) + (2, 2, 3)$,
- b) $(5, -3, 8) = (2, 3, 6) + (3, -6, 2)$,
- c) $(1, 4, 0, 3) = (2, 2, 2, 2) + (-1, 2, -2, 1)$,
- d) $(4, 3, 6, 7) = (2, 4, 4, 8) + (2, -1, 2, -1)$.

**1.66.** Teljes indukcióval a háromszög-egyenlőtlenségből.

**1.68.** Az $|\mathbf{u}|^2 = \mathbf{u} \cdot \mathbf{u}$ alkalmazásával:
$$\begin{aligned}
|\mathbf{a} + \mathbf{b}|^2 + |\mathbf{a} - \mathbf{b}|^2 &= (\mathbf{a} + \mathbf{b}) \cdot (\mathbf{a} + \mathbf{b}) + (\mathbf{a} - \mathbf{b}) \cdot (\mathbf{a} - \mathbf{b}) \\
&= (\mathbf{a} \cdot \mathbf{a} + 2\mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{b}) + (\mathbf{a} \cdot \mathbf{a} - 2\mathbf{a} \cdot \mathbf{b} + \mathbf{b} \cdot \mathbf{b}) \\
&= 2|\mathbf{a}|^2 + 2|\mathbf{b}|^2.
\end{aligned}$$

**1.69.** Használjuk az $|\mathbf{u} + \mathbf{v}| \leqslant |\mathbf{u}| + |\mathbf{v}|$ háromszög-egyenlőtlenséget az $\mathbf{u} = \mathbf{a} - \mathbf{b}$, $\mathbf{v} = \mathbf{b} - \mathbf{c}$ vektorokra.

**1.70.** Mindkét összefüggés a CBS-egyenlőtlenség mindkét oldalának négyzetreemelése után kapott egyenlőtlenséggel ekvivalens. A b) esetén $(\mathbf{x} \cdot \mathbf{y})^2 \leqslant |\mathbf{x}|^2|\mathbf{y}|^2$.

**1.71.** A feladat szerint $c \in R_a$ pontosan akkor teljesül, ha $a\,R\,c$. Tegyük fel, hogy $R_a$ és $R_b$ nem diszjunkt. Ha $c$ egy közös elemük, akkor $c$ az $a$-val és $b$-vel is relációban van, azaz $a\,R\,c$ és $b\,R\,c$, de a szimmetria miatt $c\,R\,b$ is, a tranzitivitás miatt pedig az $a\,R\,c$ és $c\,R\,b$ relációkból következik az $a\,R\,b$. Ekkor pedig a tranzitivitást használva bármely $x$ elemre $b\,R\,x$-ből következik $a\,R\,x$, azaz $x \in R_b$-ből következik $x \in R_a$, azaz $R_b \subseteq R_a$. Mivel az $a$ és $b$ szerepét megfordítva kapjuk $R_a \subseteq R_b$, tehát $R_a = R_b$. Végül be kell még látnunk, hogy e halmazok uniója kiadja az egész $X$ halmazt. Ez igaz, hisz minden $a$ elemre $a\,R\,a$, azaz $a \in R_a$.

**1.72.** Tekintsünk egy $\overrightarrow{AB}$ és egy $\overrightarrow{CD}$ irányított szakaszt! Azt mondjuk, hogy ezek relációban vannak, ha van egy olyan eltolás, mely $A$-t $C$-be, $B$-t $D$-be viszi. E reláció ekvivalenciareláció (ellenőrizzük), így egy osztályozást definiál az irányított szakaszok halmazán. Egy ilyen osztályt nevezünk (szabad) vektornak.

**1.73.** A vektor iránya a félegyenesek, az állása az egyenesek halmazán – az előző feladathoz hasonlóan az eltolással – definiált ekvivalencia reláció egy ekvivalenciaosztálya.


# 2. Systems of Linear Equations and Their Solutions

The topics of this chapter: the geometry of systems of linear equations, techniques for their solutions, and the structure of the set of solutions.

## Equations of lines and planes

*Reviewing the linear figures of 2- and 3-dimensional space will help us understand systems of linear equations.*

### Implicit and explicit systems of equations of figures

**Example 2.1 (The equation $x + y = 1$).** *In an arbitrary planar coordinate system, what figure do the points $(x, y)$ satisfying the equation $x + y = 1$ give? Plot a few points and formulate a conjecture!*

*Solution.* In Figure 2.1, we depict two different coordinate systems and a few points satisfying the above equation in them. Based on this, we can conjecture that the points satisfying the equation $x + y = 1$ are on a line. We will soon prove this conjecture. $\square$

**Example 2.2 (The equation $x^2 + y^2 = 1$).** *In an arbitrary planar coordinate system, what figure do the points $(x, y)$ satisfying the equation $x^2 + y^2 = 1$ give? Plot a few points and formulate a conjecture!*

*Solution.* In the figure below, we illustrate in two coordinate systems a few points satisfying the equation $x^2 + y^2 = 1$. Later we will prove that the points satisfying the equation are on an ellipse. $\square$

From each of the previous two equations, the two coordinates can be *expressed* by introducing a parameter. The equations $x + y = 1$ and $x^2 + y^2 = 1$ are equivalent to the systems of equations
$$\begin{cases} x = t \\ y = 1 - t, \end{cases} \quad t \in \mathbb{R}, \qquad \text{and} \qquad \begin{cases} x = \cos t \\ y = \sin t \end{cases} \quad t \in [0, 2\pi)$$

*Figure 2.1. A few points satisfying the equation $x + y = 1$ in two different coordinate systems.*

*Figure 2.2. The set of points $(x, y)$ satisfying the equation $x^2 + y^2 = 1$ in two coordinate systems.*

respectively. Both can also be rewritten in vector form. Let's use column vector notation:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} t \\ t \end{bmatrix}, \quad t \in \mathbb{R}, \quad \text{and} \quad \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} \cos t \\ \sin t \end{bmatrix}, \quad t \in [0, 2\pi) \subseteq \mathbb{R}.$$

**Definition 2.3 (Implicit system of equations of a figure).** *An (implicit) system of equations of a (geometric) figure with respect to a given coordinate system is a system of equations written for the coordinates, where all equations are simultaneously satisfied by the coordinates of the points belonging to the figure, but not by those belonging to other points. The equations can also be written for vectors pointing to the points, these are called* vector equations. *The general form of a system of equations of a figure consisting of $m$ equations, or a system of equations consisting of $m$ vector equations is*
$$\begin{cases} F_1(x_1, x_2, \ldots, x_n) = 0 \\ F_2(x_1, x_2, \ldots, x_n) = 0 \\ \quad\vdots \\ F_m(x_1, x_2, \ldots, x_n) = 0 \end{cases} \text{and} \quad \begin{cases} F_1(\mathbf{r}) = 0 \\ F_2(\mathbf{r}) = 0 \\ \quad\vdots \\ F_m(\mathbf{r}) = 0 \end{cases}$$
*where $(x_1, x_2, \ldots, x_n) \in \mathbb{R}^n$ is a point in space, and $\mathbf{r}$ is the vector pointing to it.*

> *The meaning of the Latin-origin word* implicit *is* not unfolded, hidden, *which is a derivative of the word* implico *meaning to interweave, entangle, mix, intertwine. In mathematics, this word in expressions like implicit form, implicit function, etc., refers to the fact that some quantity, variable, etc., considered important is not expressed from the formula. A derivative of this same word is the word* imply *meaning to contain, entail, which is also connected to the logical operation of "if..., then..." structure in mathematical logic, the* implication.

If the system of equations consists of one equation, we speak of the *equation* of the figure.

**Definition 2.4 (Explicit system of equations of a figure).** *An explicit or parametric system of equations of a figure with respect to a given coordinate system is a system of equations in which the variables giving the coordinates of the points are on the left side of the equations, and functions of given parameters are on the right side. Its general form is*
$$\begin{aligned}
x_1 &= f_1(t_1, t_2, \ldots, t_k) \\
x_2 &= f_2(t_1, t_2, \ldots, t_k) \\
&\;\;\vdots \\
x_n &= f_n(t_1, t_2, \ldots, t_k)
\end{aligned}$$
*where $t_1 \in I_1$, $t_2 \in I_2, \ldots, t_n \in I_n$, and $I_1, \ldots, I_n \subseteq \mathbb{R}$. Such a system of equations can be combined into a single vector equation:*
$$\mathbf{r} = \mathbf{f}(t_1, t_2, \ldots, t_k),$$
*where $\mathbf{f}$ is an $\mathbb{R}^k \to \mathbb{R}^n$ function.*

> *The meaning of the Latin-origin word* explicit *is* unfolded, clearly stated, *which is a derivative of the word* explico *meaning to unfold, spread out, free, figuratively clarify, explain, decipher. In mathematics, this word in expressions like explicit form, explicit function, etc., refers to the fact that some quantity, variable, etc., considered important is expressed with the help of the others.*

In the following, we will review the equations and systems of equations of lines and planes. At the same time, we will see that solving a (linear) system of equations means transforming the implicit form into an explicit one.

### Equations of a planar line

Consider an arbitrary line $e$ in the plane, and designate the origin $O$ in the plane. Let the nonzero $\mathbf{v}$ be an arbitrary vector parallel to the line. Such vectors are called the *direction vectors* of the line. Let $\mathbf{r}_0$ point to an arbitrary point on the line. It is clear that the vector $\mathbf{r}$ pointing to any point on the line $e$ can be produced in the form $\mathbf{r}_0 + t\mathbf{v}$, where $t$ is a real number. On the other hand, if $Q$ is an arbitrary point in the plane not on the line $e$, then $\overrightarrow{OQ} - \mathbf{r}_0$ is not parallel to $\mathbf{v}$, so it is not a constant multiple of it, i.e., $\overrightarrow{OQ} - \mathbf{r}_0 \neq t\mathbf{v}$ for any $t$, thus $\overrightarrow{OQ}$ cannot be produced in the form $\mathbf{r}_0 + t\mathbf{v}$. Thus, the vector $\mathbf{r}$ pointing to an arbitrary point of $e$ can be written in the form $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$, and this is only true for the points of $e$ (see Figure 2.3). This proves the following statement:

**Proposition 2.5 (Explicit vector equation of a planar line).** *Every line in the plane has a vector equation of the form*
$$\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}, \quad t \in \mathbb{R} \tag{2.1}$$
*and every equation of this form is the equation of a line, where $\mathbf{v} \neq \mathbf{0}$ is a direction vector of the line, and $\mathbf{r}_0$ is a vector pointing to an arbitrary, but fixed point on the line.*

*Figure 2.3. Explicit vector equation of a line: $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$.*

The vectors perpendicular to a planar line are called the *normal vectors* of the line. Let $\mathbf{n} \neq \mathbf{0}$ be an arbitrary vector perpendicular to the direction vector $\mathbf{v}$, that is, let $\mathbf{n}$ be a normal vector of $e$. The fact that for a vector $\mathbf{r}$ pointing to an arbitrary point of $e$, $\mathbf{r} - \mathbf{r}_0$ is parallel to $\mathbf{v}$, can also be expressed by saying that $\mathbf{r} - \mathbf{r}_0$ is perpendicular to $\mathbf{n}$. Perpendicularity can be expressed with the dot product. Thus we arrive at an implicit vector equation of the line: $\mathbf{r}$ points to a point of $e$ if and only if $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ (see Figure 2.4). After rearrangement, this equation can be brought to the form $\mathbf{n} \cdot \mathbf{r} = \mathbf{n} \cdot \mathbf{r}_0$, and then with the notation $C = \mathbf{n} \cdot \mathbf{r}_0$ to the form $\mathbf{n} \cdot \mathbf{r} = C$ (see also Figure 2.5).

*Figure 2.4. Implicit vector equation of a planar line: $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$.*

**Proposition 2.6 (Implicit vector equation of a planar line).** *Every line in the plane has a vector equation of the form*
$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0, \tag{2.2}$$
*and its equivalent form*
$$\mathbf{n} \cdot \mathbf{r} = C \tag{2.3}$$
*and every equation of this form is the equation of a line, where $\mathbf{n} \neq \mathbf{0}$ is a normal vector of the line, $\mathbf{r}_0$ is a vector pointing to an arbitrary, but fixed point on the line, and $C$ is a constant.*

The equation of the form (2.2) can easily be rewritten into the form (2.3) with the notation $C = \mathbf{n} \cdot \mathbf{r}_0$. The transformation in the opposite direction is also simple, since if $\mathbf{n} \cdot \mathbf{r} = C$, then we can find an $\mathbf{r}_0$ vector for which $\mathbf{n} \cdot \mathbf{r}_0 = C$. This is true because if for an arbitrary vector $\mathbf{v}$ not perpendicular to $\mathbf{n}$, $\mathbf{n} \cdot \mathbf{v} = D$, then $\mathbf{n} \cdot \left(\frac{C}{D}\mathbf{v}\right) = C$, so $\mathbf{r}_0 = \frac{C}{D}\mathbf{v}$ is suitable.

*Figure 2.5. (Implicit) vector equation of a planar line: $\mathbf{n} \cdot \mathbf{r} = C$. If $\mathbf{n}$ is a unit vector, then the geometric meaning of $\mathbf{n} \cdot \mathbf{r} = C$ is that the orthogonal projection of a vector pointing to any point on the line onto the line of $\mathbf{n}$ is $C$. This figure also illustrates this case.*

Using the notations $\mathbf{r} = (x, y)$, $\mathbf{r}_0 = (x_0, y_0)$ and $\mathbf{v} = (a, b)$, the explicit vector equation can immediately be transformed into a system of equations.

**Proposition 2.7 (Explicit system of equations of a planar line).** *Every line in the plane has a system of equations of the form*
$$\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt
\end{aligned} \tag{2.4}$$
*where $(a, b)$ is a direction vector of the line, and $(x_0, y_0)$ is an arbitrary fixed point on the line.*

In the following, we will show that the parameter $t$ can be eliminated from the explicit system of equations, so we get an implicit equation.

**Proposition 2.8 ((Implicit) equation of a planar line).** *Every line in the plane has an equation of the form*
$$Ax + By = C \tag{2.5}$$
*and every equation of this form is the equation of a line, where not both $A$ and $B$ are zero, and $(-B, A)$ is a direction vector of the line.*

*Proof.* If one of $a$ or $b$ is $0$, then one of the two equations is redundant, for example, if $a = 0$, then the form of the system of equations is
$$\begin{aligned}
x &= x_0 \\
y &= y_0 + bt
\end{aligned}$$
which is equivalent to the equation $x = x_0$, since $y = y_0 + bt$ says nothing more than that $y$ is a real number. Since $(a, b) \neq (0, 0)$, only the case remains when neither $a$ nor $b$ is $0$. In this case, $t$ can be expressed from both equations, and equating the two values we get that
$$\frac{x - x_0}{a} = \frac{y - y_0}{b},$$
that is
$$bx - ay = bx_0 - ay_0, \quad \text{or} \quad b(x - x_0) - a(y - y_0) = 0.$$
With the notation $A = b$, $B = -a$, the above equation takes the form $Ax + By = Ax_0 + By_0$. Denoting the constant on the right side of the equation by $C$, the equation of the line takes the form $Ax + By = C$. On the other hand, it is easy to see that every equation of this form is the equation of a line, because it is equivalent to a parametric system of equations of a line. Namely, the equation $Ax + By = C$ can be rewritten into the form $Ax + By = Ax_0 + By_0$, since in the equation $Ax_0 + By_0 = C$, if $A \neq 0$, by choosing an arbitrary $y_0$, $x_0$ can be uniquely expressed. (The case $B \neq 0$ is analogous.) Based on this, the system of equations (2.4) can be written. $\square$

▶ The above proposition can be proved even more simply in the case when the basis is orthonormal! We leave this to the Reader (see Exercise 2.9).

**Example 2.9 (Equations of a planar line).** *Write all equation(system)s of the line passing through the points with coordinates $(2, 3)$ and $(1, 1)$!*

*Solution.* If a line passes through these two points, then its direction vector is the difference of the vectors pointing to the two points, that is $\mathbf{v} = (2, 3) - (1, 1) = (1, 2)$. Let, for example, $\mathbf{r}_0 = (1, 1)$. Then the vector equation and the explicit system of equations are
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \text{and} \quad \begin{aligned} x &= 1 + t \\ y &= 1 + 2t. \end{aligned}$$
From the direction vector $(A, B) = (2, -1)$, hence the equation of the line is $2x - y = 2 \cdot 1 - 1 \cdot 1$, that is
$$2x - y = 1.$$
The vector $(A, B) = (2, -1)$ coincides with the normal vector only in an orthonormal coordinate system, so there we can write the equation in the form
$$(2, -1) \cdot (x - 1, y - 1) = 0$$
$\square$

### Equations of a planar point

Consider the point $(x_0, y_0)$ in the plane. Its explicit system of equations or vector equation is:
$$\begin{aligned} x &= x_0 \\ y &= y_0, \end{aligned} \quad \text{and} \quad \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x_0 \\ y_0 \end{bmatrix}.$$
This is obvious, but for didactic reasons it is useful to take a glance at this special case as well, since examining extremal cases can be of great help in understanding mathematical concepts.

No parameters are needed for the explicit system of equations of a point, so the implicit form is also explicit at the same time. In this case, we look at the system of equations as the equations of two lines, whose normal vectors are $(1, 0)$ and $(0, 1)$, and whose intersection point is the considered point.

This gives the idea that we could consider the implicit system of equations of a point to be two equations, which are the equations of one line each, intersecting each other at the given point. So we can say that the general form of the implicit system of equations of a point is:
$$\begin{aligned}
A_1 x + B_1 y &= C_1 \\
A_2 x + B_2 y &= C_2
\end{aligned}$$
However, it is not true that every system of equations of this form is the system of equations of a point, because two lines can intersect each other in a single point, but it is possible that they have no common points, and it is also possible that they have infinitely many common points. The detailed examination of exactly this question will be the topic of Chapter 2.

### Equations of planes in 3-dimensional space

We know that any linear combination of two linearly independent vectors $\mathbf{u}$ and $\mathbf{v}$ lies in the plane determined by the two vectors, and that any vector of this plane can be produced as a linear combination of the two given vectors (see Theorems 1.8 and 1.11). From this it immediately follows that using the vector $\mathbf{r}_0$ pointing to a fixed point of the plane, the vector $\mathbf{r}$ pointing to any point of the plane can be written in the form $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$.

**Proposition 2.10 (Explicit vector equation of a plane).** *Every plane has a vector equation of the form*
$$\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v} \tag{2.6}$$
*and every equation of this form is the equation of a plane, where $\mathbf{u}$ and $\mathbf{v}$ are two linearly independent vectors of the plane and $\mathbf{r}_0$ is a vector pointing to an arbitrary, but fixed point on the plane.*

Similarly to a planar line, the parameter can be eliminated from the equation of a plane in space by using perpendicularity. According to the statement of Exercise 1.47, if a vector is perpendicular to each of two arbitrary vectors, then it is also perpendicular to their linear combination. Since $\mathbf{n} = \mathbf{u} \times \mathbf{v}$ is perpendicular to both $\mathbf{u}$ and $\mathbf{v}$, it is perpendicular to all their linear combinations, that is, also to the vector $\mathbf{r} - \mathbf{r}_0 = s\mathbf{u} + t\mathbf{v}$. This observation is the basis for the following theorem.

**Proposition 2.11 (Implicit vector equation of a plane).** *In three-dimensional space, every plane has a vector equation of the form*
$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0, \tag{2.7}$$
*and its equivalent form*
$$\mathbf{n} \cdot \mathbf{r} = C \tag{2.8}$$
*and every equation of this form is the equation of a plane, where $\mathbf{n}$ is a normal vector of the plane, $\mathbf{r}_0$ is a vector pointing to an arbitrary, but fixed point on the plane, and $C$ is a constant.*

The proof is analogous to what was described for the planar line (see Exercise 2.10).

With the notations $\mathbf{r} = (x, y, z)$, $\mathbf{r}_0 = (x_0, y_0, z_0)$ and $\mathbf{u} = (a_1, b_1, c_1)$ $\mathbf{v} = (a_2, b_2, c_2)$, the explicit vector equation can be transformed into a system of equations.

**Proposition 2.12 (Explicit system of equations of a plane).** *Every plane in three-dimensional space has a system of equations of the form*
$$\begin{aligned}
x &= x_0 + a_1 s + a_2 t \\
y &= y_0 + b_1 s + b_2 t \\
z &= z_0 + c_1 s + c_2 t
\end{aligned} \tag{2.9}$$
*where $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$ are two linearly independent vectors of the plane, and $(x_0, y_0, z_0)$ is an arbitrary fixed point on the plane.*

The two parameters can be eliminated from the explicit system of equations if, for example, we express the parameters from two equations and substitute them into the third equation. Thus we get an implicit equation. We will not detail the calculations, the result is
$$(b_1 c_2 - b_2 c_1)(x - x_0) + (c_1 a_2 - c_2 a_1)(y - y_0) + (a_1 b_2 - a_2 b_1)(z - z_0) = 0.$$
With the notation $(A, B, C) = (b_1 c_2 - b_2 c_1, c_1 a_2 - c_2 a_1, a_1 b_2 - a_2 b_1)$, the equation of the plane can be brought to the form $A(x - x_0) + B(y - y_0) + C(z - z_0) = 0$, or its equivalent form, $Ax + By + Cz = D$.

**Proposition 2.13 (Implicit equation of a plane).** *In three-dimensional space, every plane has an equation of the form*
$$Ax + By + Cz = D \tag{2.10}$$
*and every equation of this form is the equation of a plane, if at least one of $A$, $B$ and $C$ is not zero, and $D = Ax_0 + By_0 + Cz_0$, where $(x_0, y_0, z_0)$ is a point on the plane.*

The equation of the plane can also be obtained from its vector equation of the form $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$, which is easy to prove in an *orthonormal* coordinate system (see Exercise 2.11). Since
$$(A, B, C) = (b_1 c_2 - b_2 c_1, c_1 a_2 - c_2 a_1, a_1 b_2 - a_2 b_1), \tag{2.11}$$
which in an orthonormal basis is exactly equal to the vector $\mathbf{u} \times \mathbf{v}$, therefore $(A, B, C)$ is perpendicular to all vectors of the plane, meaning it is a normal vector of the plane. Rewriting the equation $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$ into coordinate form, we get that
$$(A, B, C) \cdot (x - x_0, y - y_0, z - z_0) = 0.$$

**Example 2.14 (Equations of a plane).** *Write the equations of the plane passing through the point $(0, -1, 2)$ and parallel to the vectors $\mathbf{u} = (2, 2, 2)$ and $\mathbf{v} = (-1, 1, 5)$!*

*Solution.* After simple substitution into the formula, the explicit vector equation and explicit system of equations of the plane are
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \\ 2 \end{bmatrix} + s\begin{bmatrix} 2 \\ 2 \\ 2 \end{bmatrix} + t\begin{bmatrix} -1 \\ 1 \\ 5 \end{bmatrix}, \quad \text{and} \quad \begin{aligned} x &= 2s - t \\ y &= -1 + 2s + t \\ z &= 2 + 2s + 5t. \end{aligned}$$
Since according to formula (2.11) $(A, B, C) = (8, -12, 4)$, the implicit equation of the plane is $8(x - 0) - 12(y - (-1)) + 4(z - 2) = 0$, that is, after dividing by 4 and rearranging
$$2x - 3y + z = 5.$$
Thus in an orthonormal coordinate system
$$(2, -3, 1) \cdot (x, y, z) = 5, \quad \text{or} \quad (2, -3, 1) \cdot (x, y + 1, z - 2) = 0$$
is the implicit vector equation of the plane. $\square$

### Equations of a line in space

Everything we said about the explicit vector equation of a planar line on page 61 can essentially be repeated without change. Let's designate the origin in space, and consider the line $e$ whose direction vector is $\mathbf{v}$, and which passes through the point to which the vector $\mathbf{r}_0$ points. It is clear that the vector $\mathbf{r}$ pointing to any point of the line $e$ can be produced in the form $\mathbf{r}_0 + t\mathbf{v}$, where $t$ is a real number, and this is not true for points not incident on $e$. Thus the following statement is true:

**Proposition 2.15 (Explicit vector equation of a spatial line).** *Every line in three-dimensional space has a vector equation of the form*
$$\mathbf{r} = \mathbf{r}_0 + t\mathbf{v} \tag{2.12}$$
*and every equation of this form is the equation of a line, where $\mathbf{v} \neq \mathbf{0}$ is a direction vector of the line, and $\mathbf{r}_0$ is a vector pointing to an arbitrary, but fixed point.*

Here we cannot eliminate the parameter in a single vector equation, but the rewriting into an explicit system of equations works if we set up a coordinate system in which $\mathbf{r} = (x, y, z)$, $\mathbf{r}_0 = (x_0, y_0, z_0)$ and $\mathbf{v} = (a, b, c)$:

**Proposition 2.16 (Explicit system of equations of a spatial line).** *Every line in space has a system of equations of the form*
$$\begin{aligned}
x &= x_0 + at \\
y &= y_0 + bt \\
z &= z_0 + ct
\end{aligned} \tag{2.13}$$
*where $(a, b, c) \neq (0, 0, 0)$ is a direction vector of the line, and $(x_0, y_0, z_0)$ is an arbitrary fixed point on the line.*

The parameter can be eliminated from the system of equations (2.13). Multiply the first equation by $b$, the second by $a$, then subtract the second equation from the first, we get that $bx - ay = bx_0 - ay_0$. Proceeding similarly with the first and third equations $cx - az = cx_0 - az_0$, finally from the second and third equations $cy - bz = cy_0 - bz_0$ is obtained. Rearranging the equations we get the following proposition:

**Proposition 2.17 (Implicit system of equations of a spatial line).** *Every line in space has an implicit system of equations consisting of two equations. If the vector $(a, b, c) \neq (0, 0, 0)$ is a direction vector of the line, then the two equations are any two of the following three that are not of the form $0 = 0$:*
$$\begin{aligned}
b(x - x_0) &= a(y - y_0) \\
c(x - x_0) &= a(z - z_0) \\
c(y - y_0) &= b(z - z_0)
\end{aligned} \tag{2.14}$$

> The system of equations (2.17.) can be rewritten sorted by the variables:
> $$\begin{alignedat}{9}
> bx &{}-{}& ay &&    &{}={}& bx_0 &{}-{}& ay_0 \\
> cx &&     &{}-{}& az &{}={}& cx_0 &&     {}- az_0 \\
>    && cy  &{}-{}& bz &{}={}& cy_0 &{}-{}& bz_0,
> \end{alignedat}$$
> but most often we can encounter the form
> $$\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}.$$
> which is valid for the case $a \neq 0$, $b \neq 0$, $c \neq 0$.

*Proof.* The equations (2.14) were proved before the proposition. Since $(a, b, c) \neq (0, 0, 0)$, at least one of the coordinates is not $0$. If exactly one of them is not $0$, e.g., let $a \neq 0$, $b = c = 0$, then the system of equations is of the form
$$\begin{aligned}
y &= y_0 \\
z &= z_0
\end{aligned}$$
this is the equation of two planes, the set of points satisfying both equations is the intersection of the planes, which is a line, because these planes are certainly not parallel. (The third equation is of the form $0 = 0$, which can be omitted.)

If exactly one of $a$, $b$ and $c$ has the value $0$, then two equations are identical, so one of them can be omitted. For example, if $a \neq 0$, $b \neq 0$ but $c = 0$, then the form of the equations is
$$\begin{aligned}
b(x - x_0) &= a(y - y_0) \\
z &= z_0 \\
z &= z_0.
\end{aligned}$$

Finally, if none of the coefficients is $0$, then we have obtained the equations of three planes, of which no two are parallel due to the differences of the variables in them. The intersection of any two is a line, and since the intersection of all three is also a line, therefore any two equations can be kept.

The theorem can also be proved by noting that the three equations of (2.14) are linearly dependent, since $c$ times the first equation minus $b$ times the second equation plus $a$ times the third gives the $0 = 0$ equation. Similarly to what we saw with vectors, this means that one of the equations can be produced as a linear combination of the other two, and this can be omitted, since if a point satisfies the other two equations, then it also satisfies their linear combination. $\square$

**Example 2.18 (Systems of equations of a spatial line).** *Write the explicit and implicit systems of equations of the line that passes through the points a) $A(1, 3, 4)$ and a) $B(3, 3, 1)$, and b) $C(5, 5, -2)$.*

*Solution.* a) The vector connecting points $A$ and $B$ is $= (2, 0, -3)$. From this the explicit system of equations of the line is
$$\begin{aligned}
x &= 1 + 2t \\
y &= 3 \\
z &= 4 - 3t,
\end{aligned}$$
whose second equation, $y = 3$, is the equation of a plane parallel to the $xz$-plane. Eliminating $t$ from the other two equations, we get the equation of another plane. The line is the line of intersection of these two planes. From the first equation $t = \frac{1}{2}(x - 1)$, from the third $t = -\frac{1}{3}(z - 4)$, therefore $3x + 2z = 11$. Thus the following implicit (parameter-free) system of equations belongs to the previous line, which consists of the equations of two planes:
$$\begin{alignedat}{9}
3x && {}+{} 2z &{}={}& 11 \\
   && y       &{}={}& 3.
\end{alignedat}$$

b) The vector connecting points $A$ and $C$ here is $= (4, 2, -6)$. From this the explicit system of equations of the line is
$$\begin{aligned}
x &= 1 + 4t \\
y &= 3 + 2t \\
z &= 4 - 6t.
\end{aligned}$$
Expressing $t$ from each equation we get that
$$t = \frac{x - 1}{4} = \frac{y - 3}{2} = \frac{z - 4}{-6}.$$
This gives the equations of the following three planes:
$$\begin{alignedat}{9}
x &{}-{}& 2y &&     &{}={}& -5 \\
3x &&    &{}+{}& 2z &{}={}& 11 \\
   && 3y &{}+{}& z  &{}={}& 13.
\end{alignedat}$$
Any two of these three planes determines the given line, so any two of these three equations is the (implicit) system of equations of the line. $\square$

### Equations of a point in space

Only for the sake of completeness and understanding analogies do we examine the possible equations of a point in space. The explicit system of equations or vector equation of the point $(x_0, y_0, z_0)$ in space:
$$\begin{aligned}
x &= x_0 \\
y &= y_0, \\
z &= z_0
\end{aligned} \quad \text{and} \quad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} x_0 \\ y_0 \\ z_0 \end{bmatrix}.$$
We can also consider the explicit system of equations as an implicit form, in which case we see the equations of three planes – parallel to the coordinate planes – which intersect each other in a single common point.

Similar to the planar case, we could consider the implicit system of equations of a point to be three equations, which are the equations of one plane each, intersecting each other at the given point. So the general form of the implicit system of equations of the point is
$$\begin{aligned}
A_1 x + B_1 y + C_1 z &= D_1 \\
A_2 x + B_2 y + C_2 z &= D_2 \\
A_3 x + B_3 y + C_3 z &= D_3,
\end{aligned}$$
provided that the planes have only a single common point. We will return to the examination of this question in Chapter 2.

### Equations in $\mathbb{R}^n$

The explicit vector equation of a line and a plane in $\mathbb{R}^n$ has the same form as in $\mathbb{R}^3$, that is, the explicit vector equation of a line is of the form $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$, and for a plane it is $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$.

The vector equation of a planar line and a spatial plane is of the form $\mathbf{n} \cdot \mathbf{r} = c$. In these two cases, this equation is the equation of an $n-1$-dimensional figure of the $n$-dimensional space ($n = 2, 3$). Later we will see that this is generally true, but at this moment we have not even defined the concept of dimension, so for now we just give a name to this figure. In the space $\mathbb{R}^n$ for $\mathbf{n} \neq \mathbf{0}$, the set of endpoints of the vectors $\mathbf{r}$ satisfying the equation $\mathbf{n} \cdot \mathbf{r} = c$ is called a *hyperplane*. In coordinate form
$$a_1 x_1 + a_2 x_2 + \ldots + a_n x_n = c,$$
where $\mathbf{n} = (a_1, a_2, \ldots, a_n)$ is the *normal vector* of the hyperplane (see Exercise 2.12), and $\mathbf{r} = (x_1, x_2, \ldots, x_n)$ is a vector pointing to an arbitrary point of the hyperplane.

The following table summarizes the equations of geometric figures that are most important for the future.

| Space | Figure | Explicit vector equation | Implicit equation(system) |
|---|---|---|---|
| **In plane** | line | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | $Ax + By = C$ |
| | point | $\mathbf{r} = \mathbf{r}_0$ | $A_1 x + B_1 y = C_1$<br>$A_2 x + B_2 y = C_2$ |
| **In space** | plane | $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ | $Ax + By + Cz = D$ |
| | line | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | $A_1 x + B_1 y + C_1 z = D_1$<br>$A_2 x + B_2 y + C_2 z = D_2$ |
| | point | $\mathbf{r} = \mathbf{r}_0$ | $A_1 x + B_1 y + C_1 z = D_1$<br>$A_2 x + B_2 y + C_2 z = D_2$<br>$A_3 x + B_3 y + C_3 z = D_3$ |
| **In $\mathbb{R}^n$** | hyperplane | ??? | $a_1 x_1 + a_2 x_2 + \ldots + a_n x_n = b$ |
| | plane | $\mathbf{r} = \mathbf{r}_0 + s\mathbf{u} + t\mathbf{v}$ | ??? |
| | line | $\mathbf{r} = \mathbf{r}_0 + t\mathbf{v}$ | ??? |
| | point | $\mathbf{r} = \mathbf{r}_0$ | ??? |

*Table 2.1. Equations of geometric figures: we do not yet know many of the equations in $\mathbb{R}^n$, these are indicated by three question marks, but we encourage the Reader to formulate their conjectures following the thread of analogy.*

### Exercises


**2.1.•** *Line, plane, hyperplane: true - false.* Which of the following statements are true, which are false? Justify your answer!
- a) $Ax + By = C$ is the equation of a line in every planar coordinate system!
- b) $x^2 + y^2 = 4$ is the equation of a circle in every planar coordinate system!
- c) $Ax + By = C$ can be the equation of a plane!
- d) The normal vector of the plane with equation $Ax + By = C$ is $(A, B, C)$.
- e) The system of equations $x + y = 0$, $z + w = 0$ is a system of equations of a plane in $\mathbb{R}^4$.
- f) The system of equations $x = 0$, $y = 0$ is a system of equations of a plane in $\mathbb{R}^4$.
- g) The normal vector of the hyperplane in $\mathbb{R}^5$ with equation $x_1 + 3x_3 + 5x_5 = 2$ is $(1, 0, 3, 0, 5)$.
- h) In $\mathbb{R}^4$ there are two planes which intersect in a single point!

**2.2.** *Equation of a plane parallel to a coordinate plane.* Consider the plane in a spatial coordinate system which is parallel to the first two coordinate axes, and intersects the third axis at the point with coordinate 5. Write down its equations!

**2.3.•** Determine the explicit vector equation of the line given by its implicit equation(system)!
- a) $x + y = 1$  b) $2x + 3y = 6$
- c) $\begin{cases} x + 2y + 3z = 1 \\ x + 3y + 4z = 2 \end{cases}$  d) $\begin{cases} x + 2y + 3z = 1 \\ z = 2 \end{cases}$
- e) $\begin{cases} x + y + z + w = 1 \\ x + y + 2z + 3w = 2 \\ x + y + 2z + 2w = 2 \end{cases}$  f) $\begin{cases} x + y + z + w = 3 \\ y + 2z + w = 2 \\ z + w = 1 \end{cases}$

**2.4.** The following equation is the implicit equation of a hyperplane in the given space. Give its explicit equation system!
- a) $x + y = 1$, $\mathbb{R}^2$  b) $x + y + z = 1$, $\mathbb{R}^3$
- c) $x + y = 1$, $\mathbb{R}^3$  d) $x + y + z + w = 1$, $\mathbb{R}^4$
- e) $x + y = 1$, $\mathbb{R}^4$  f) $x = 1$, $\mathbb{R}^4$

**2.5.•** Determine the explicit vector equation of the following plane given by its implicit equation(system)!
- a) $x + 2y + 3z = 1$  b) $3x + 2y + z = 6$
- c) $ax + by + cz = 1$, where at least one of the parameters $a, b, c \in \mathbb{R}$ is not zero
- d) $\begin{cases} x + y + 2z + 6w = 4 \\ x - y + 4z = 2 \end{cases}$  e) $\begin{cases} x + y + z + w = 1 \\ x + y + 2z + 3w = 2 \end{cases}$
- f) $\begin{cases} x + y = 3 \\ z + w = 1 \end{cases}$  g) $\begin{cases} x + y = 3 \\ w = 1 \end{cases}$

**2.6.** *Equations of a line.* Write down the equation(system)s of the line passing through the given points!
- a) $A(2, 1)$, $B(3, 4)$,  b) $A(1, 4)$, $B(3, 4)$,
- c) $A(1, 4)$, $B(1, 3)$,  d) $A(3, 4, 1)$, $B(3, 4, 2)$,
- e) $A(1, 4, 1)$, $B(3, 4, 2)$,  f) $A(1, 4, 1)$, $B(3, 2, 2)$,
- g) $A(1, 1, 1)$, $B(2, 3, 2, 4)$,  h) $A(3, 4, 1, 0)$, $B(3, 2, 1, 2)$.

**2.7.** *Equations of a plane.* Write down the equations of the plane passing through the given points!
- a) $A(0, -1, 2)$, $B(-1, 0, 7)$, $C(2, 1, 4)$,
- b) $A(0, 1, 2)$, $B(-1, 1, 7)$, $C(2, 1, 4)$,
- c) $A(1, 1, 1, 1)$, $B(2, 3, 2, 4)$, $C(3, 2, 1, 0)$,
- d) $A(0, -1, 2, 3)$, $B(-1, 0, 7, 4)$, $C(2, 1, 4, 2)$.

**2.8.** *Equations of a hyperplane.* Write down the equations of the hyperplane in $\mathbb{R}^4$ passing through the given points!
- a) $A(0, 1, 1, 1)$, $B(0, 2, 3, 4)$, $C(1, 2, 1, 1)$, $D(0, 1, 2, 2)$,
- b) $A(1, 1, 1, 1)$, $B(1, 2, 3, 4)$, $C(2, 2, 1, 1)$, $D(1, 1, 2, 2)$.
- c) $A(1, 1, 1, 1)$, $B(1, 2, 1, 4)$, $C(2, 2, 1, 1)$, $D(1, 1, 2, 2)$.

**2.9.•** Give a proof of Statement 2.8, if the basis is orthonormal, i.e., show that every line of the plane has an equation of the form
$$Ax + By = C$$
and every equation of this form is the equation of a line, where not both $A$ and $B$ are zero, and $(-B, A)$ is a direction vector of the line.

**2.10.** Prove Statement 2.11.

**2.11.** Prove Theorem 2.13 in the case of an orthonormal basis (from its vector equation of the form $\mathbf{n} \cdot (\mathbf{r} - \mathbf{r}_0) = 0$)

**2.12.** Show that the vector connecting any two points of an arbitrary hyperplane in $\mathbb{R}^n$ with equation $\mathbf{n} \cdot \mathbf{r} = c$ is perpendicular to $\mathbf{n}$.

## The system of linear equations and its two models

*The subject of this section is the concept of systems of linear equations and two geometric interpretations of solving a system of linear equations: determining the intersection of hyperplanes and producing a vector as a linear combination. For convenient bookkeeping of the calculations, we introduce the concept of a* matrix*.*

### Linear equation and system of equations

$Ax + By = C$ is the implicit equation of a line in the plane. The name linear equation originates from here.[^1]

[^1]: *Linear: originates from the Latin word linearis meaning* lined, *which is a derivative of the word* linea (linea) *meaning* linen thread, fishing line, *figuratively* line, boundary line. *In mathematics, it is customary to use it in the sense of* relating to a line, *or* first-degree.

**Definition 2.19 (Linear equation).** *An equation that can be brought to the form*
$$a_1 x_1 + a_2 x_2 + \cdots + a_n x_n = b \tag{2.15}$$
*in the unknowns $x_1, x_2 \ldots x_n$ is called a* linear equation, *where $a_1, a_2, \ldots$ and $a_n$, as well as $b$ are constants. The constants $a_1, a_2, \ldots$ and $a_n$ are called the* coefficients *of the equation, and $b$ is called the* constant term *of the equation.*

▶ For example, the following equations are linear:
$$x - 2y = 1, \quad \frac{1}{2}x_1 - \sqrt{2}x_2 + (5 - \pi)x_3 = 0, \quad a\cos 0.87 - 0.15c = 0.23.$$

▶ The following equations are not linear in the unknowns $x$, $y$ and $z$:
$$xz - y = 0, \quad x + 2y = 3^z, \quad x\sin y + y\cos z + y = z^2,$$
however, they are all linear in the unknowns $x$ and $y$, because then $z$ is a parameter, for any value of which the equations are linear.

▶ The equations
$$x = y, \quad x = 3 - y + 2z$$
are linear in the unknowns $x$, $y$ and $z$, because they can be brought to the form in the definition by equivalent (identical) transformations:
$$x - y + 0z = 0, \quad x + y - 2z = 3.$$

A finite set of linear equations is called a *system of linear equations*. The unknowns of the system of equations are all the unknowns that appear in at least one equation. If an unknown does not appear in an equation, then its coefficient is considered to be $0$. We aid better readability by writing the unknowns in the same order.

▶ For example, systems of linear equations are the following:
$$\begin{alignedat}{9}
3x &{}-{}& y &{}={}& 2 \\
-x &{}+{}& 2y &{}={}& 6 \\
x &{}+{}& y &{}={}& 6
\end{alignedat} \qquad \begin{alignedat}{9}
x_1 &&&{}={}& 3 \\
x_2 &&&{}={}& 1 \\
x_3 &&&{}={}& 4
\end{alignedat} \qquad 2x - 3y + z - w = 6. \tag{2.16}$$

▶ During the solution of a system of equations, we will often encounter equations of the form $0 = b$. It may also be that some coefficients in a system of equations are parameters. The following systems of equations are also linear in the unknowns $x$ and $y$:
$$\begin{alignedat}{9}
ax &{}+{}& y &{}={}& 2a \\
x &{}-{}& \tfrac{1}{a}y &{}={}& 0
\end{alignedat} \qquad \begin{alignedat}{9}
3x &{}-{}& y &{}={}& 0 \\
-x &{}+{}& 2y &{}={}& 0 \\
&& 0 &{}={}& 0
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 1 \\
&& 0 &{}={}& 2.
\end{alignedat} \tag{2.17}$$

**Definition 2.20 (System of linear equations).** *By a system of linear equations we mean a finite set of linear equations in the same variables. Its general form in the case of $m$ equations and $n$ unknowns is*
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{m1}x_1 &{}+{}& a_{m2}x_2 &{}+{}& \ldots &{}+{}& a_{mn}x_n &{}={}& b_m,
\end{alignedat} \tag{2.18}$$
*where $x_1, x_2, \ldots x_n$ are the unknowns, $a_{ij}$ denotes the coefficient of the unknown $x_j$ in the $i$-th equation, and $b_i$ is the constant term of the $i$-th equation. If the constant term of every equation is $0$, the system of linear equations is* homogeneous, *if even one differs from $0$, it is* inhomogeneous.

▶ The systems of equations in (2.16) are all inhomogeneous, while the middle system of equations in (2.17) is homogeneous.

**Definition 2.21 (Solution of a system of linear equations).** *We say that the ordered $n$-tuple of numbers $(u_1, u_2, \ldots, u_n)$ is a* solution *to the system of equations (2.18), if it is a solution to every equation, i.e., if it satisfies every equation with the substitution $x_1 = u_1$, $x_2 = u_2, \ldots, x_n = u_n$. If we consider this $n$-tuple of numbers as a vector, we speak of a* solution vector. *The set of all solutions is called the* solution set *of the system of equations. A system of equations is called* consistent *(or solvable), if its solution set is not empty. Otherwise the system of equations is* inconsistent *(not solvable).*

> *The meaning of the word* consistent: *free from internal contradiction. Other meanings: solid, dense, compact, concise, substantial, uniform, consequent. It originates from the Latin consistens, whose meaning is valid.*

> *If a system of equations consists of more equations than unknowns, it is called* overdetermined, *while if it consists of fewer equations, it is called* underdetermined. *These concepts sometimes lead to misleading formulations and false conclusions, if the idea develops that overdetermination means: the equations (the conditions) are already "too many" for even one $n$-tuple of numbers to satisfy. Later we will see that, contrary to this, it is not the "too many" equations, but the mutually contradictory equations that cause inconsistency. Similarly, underdetermination does not mean that there are necessarily multiple solutions. An underdetermined system of equations can also be inconsistent. The only thing that can be said: an underdetermined system of equations cannot have exactly one solution.*

▶ The solution of the first system of equations in (2.17) is $(x, y) = (1, a)$, that of the second is $(x, y) = (0, 0)$. The third system of equations has no solution, because there are no values of $x$ and $y$ for which the equality $0x + 0y = 2$ would hold.

▶ In general, for the equation
$$0x_1 + 0x_2 + \cdots + 0x_n = 0$$
every $n$-tuple of numbers is a solution, while the equation
$$0x_1 + 0x_2 + \cdots + 0x_n = b, \quad (b \neq 0)$$
has not a single solution.

### Equivalent systems of linear equations

For each of the following systems of equations, $(x, y) = (2, 1)$ is the only solution:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \qquad \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat} \tag{2.19}$$

**Definition 2.22 (Equivalent systems of equations).** *Two systems of equations written with identical unknowns are called equivalent if their sets of solutions are identical.*

**Theorem 2.23 (Equivalent transformations).** *The following transformations take every system of equations into an equivalent system of equations:*
1. *swapping two equations;*
2. *multiplying an equation by a non-zero number;*
3. *adding a constant multiple of one equation to another.*

*In addition*
4. *dropping an equation of the form $0 = 0$*

*is also an equivalent transformation, which decreases the number of equations by one.*

*Proof.* The first two and the fourth transformations obviously do not change the set of solutions (regarding the fourth, see Exercise 2.20). Let's look at the third transformation. Consider a solution to the *original* system of equations, and the *new* system of equations, which we get by adding $c$ times the $i$-th equation to the $j$-th. It is clear that we can also perform the substitution before the transformation, but then we are adding a constant multiple of a satisfied equality to another, which will thus also be satisfied. So every solution of the original system of equations is also a solution to the new one. On the other hand, every solution of the new system of equations is also a solution of the original, since it can be recovered from the new one by adding $-c$ times the $i$-th equation to the $j$-th. That is, the two solution sets coincide. Thus this transformation is also equivalent. $\square$

▶ The equation
$$\frac{x}{z} + \frac{y}{z} + 2 = 0$$
is not linear, because multiplying by $z$ is not an equivalent transformation, so it is not equivalent to the linear equation $x + y + 2z = 0$.

### Matrices

Number tables, i.e., *matrices*, will for now only be used for the convenient description of solving systems of equations, but later, with the operations that can be performed on them, they will become a key concept in linear algebra.

> *Matrix: a derivative of the Latin word mater (máter)* (mother, origin, source) *is matrix (matrix), whose meaning in European languages went through the following changes: breeding animal, pregnant animal, womb, enclosed place from which something develops, multitude or block of enclosed, surrounded things. Its meaning in biology is womb, in geology a fine-grained rock in which fossils, crystals, gems are enclosed, in anatomy the tissue forming a nail or tooth.*

The numbers written into a matrix are called the *elements of the matrix*. To characterize the size of a matrix, we always give first the number of rows, then the number of columns, so an $m \times n$ matrix has $m$ rows and $n$ columns. The general form of such a matrix is
$$\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \text{or} \quad \mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{pmatrix},$$
we will use the former.

Matrices[^2] are usually denoted by a capital letter, in this book – following the customs of the technical language – by a bold capital letter. The elements of a matrix are usually denoted by the same small letter as the capital letter denoting the matrix, so the elements of $\mathbf{A}$ are $a_{11}, a_{12} \ldots$. For the above matrix it is also customary to use the notation
$$\mathbf{A} = [a_{ij}]_{m \times n} \quad \text{or simply} \quad \mathbf{A} = [a_{ij}],$$
while for its element the notation $(\mathbf{A})_{ij}$.

[^2]: *In programming languages – contrary to mathematics – denoting with lowercase/uppercase letters does not have the role of distinguishing the matrix from its element. In most high-level languages the $j$-th element of the $i$-th row of the matrix (in computer science terminology,* array) *denoted by $\mathbf{A}$ is denoted by `A[i,j]` or `A[i][j]`. In lower-level C-type languages there is no 2-dimensional array, the matrix is represented by a 1-dimensional array, every element of which is a 1-dimensional array, so `A[i]` denotes the $i$-th row, `A[i][j]` the $j$-th element of the $i$-th row. In matrix-based languages a row vector or column vector of a matrix can be easily extracted, e.g., the 2nd row of matrix $\mathbf{A}$ can be accessed with the code `A(2,:)`, its 3rd column with `A(:,3)`. In many programming languages the elements of arrays are indexed not from 1, but from 0, such as C and Python.*

The first index always denotes the row, the second the column number, so $a_{23}$ is the 3rd element of the 2nd row. To avoid ambiguity, $a_{i,j}$ can also be written instead of $a_{ij}$ (e.g., $a_{n,n-1}$). The *main diagonal* of a matrix includes those elements that are in the same row as they are in a column, i.e., for example in the above matrix the elements of the main diagonal are $a_{11}, a_{22}, \ldots$.

In practice, very large matrices also have to be handled. If most of their elements are $0$, they are called *sparse matrices*. Large, non-sparse matrices are called *dense*.

It is also customary to describe vectors with *matrix notation, in matrix form,* i.e., with a 1-row or 1-column matrix – as we also did in the first chapter. The $n \times 1$ matrix is called a *column vector (column matrix)*, the $1 \times n$ matrix is called a *row vector (row matrix)*. Whether we represent an $n$-dimensional vector with a row or column vector is a matter of decision (custom, taste). For example, the row vector and column vector corresponding to the vector $(1, 2)$ are
$$\begin{bmatrix} 1 & 2 \end{bmatrix}, \quad \text{and} \quad \begin{bmatrix} 1 \\ 2 \end{bmatrix}, \quad \text{respectively}.$$
Following the widespread custom, we will by default use the column vector notation.

> *The notation used for vectors in Hungarian offices and primary schools – due to the use of the decimal comma – puts a semicolon between the* coordinates of the vector *as a separator. This is not customary in Hungarian higher mathematics texts, we also avoid it, and we use a decimal point, and a comma between the coordinates of a vector. Notice that when specifying vectors with a row vector (row matrix), we do not use punctuation marks, we only separate the coordinates with a space!*

The $i$-th row vector of matrix $\mathbf{A}$ is denoted by $\mathbf{a}_{i*}$ or $(\mathbf{A})_{i*}$, its $j$-th column vector by $\mathbf{a}_{*j}$ or $(\mathbf{A})_{*j}$ in accordance with the indexing of the elements. Matrix-based languages also use a similar notation (see the margin note). If we only work with column vectors, we denote the $j$-th column vector more simply with $\mathbf{a}_j$.

**Example 2.24 (Matrices and their elements).** *If*
$$\mathbf{C} = \begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 7 \end{bmatrix}, \text{then } c_{23} = 7, \; \mathbf{c}_2 = \mathbf{c}_{*2} = \begin{bmatrix} 2 \\ 5 \end{bmatrix}, \; \mathbf{c}_{2*} = \begin{bmatrix} 4 & 5 & 7 \end{bmatrix}.$$

### Matrix and augmented matrix of a system of equations

The *coefficient matrix* of the system of equations contains the coefficients of the equations, while its *augmented* matrix, or simply its *matrix*, contains the coefficients and the constant terms of the equations. For the sake of clarity, in the augmented matrix we can separate the coefficients from the constant terms with a vertical line. The coefficient and augmented matrix of the general form in Definition 2.20 are:
$$\begin{bmatrix} a_{11} & a_{12} & \ldots & a_{1n} \\ a_{21} & a_{22} & \ldots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} \end{bmatrix}, \quad \left[\begin{array}{cccc|c} a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\ a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ a_{m1} & a_{m2} & \ldots & a_{mn} & b_m \end{array}\right].$$

**Example 2.25 (Using a matrix for the solution).** *Solve the following system of equations – given both by its equations and its matrix!*
$$\begin{alignedat}{9}
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 2 & 3 & 2 & 7 \\ 1 & 1 & 1 & 3 \\ 2 & 2 & 3 & 6 \end{array}\right].$$

*Solution.* We illustrate the solution in parallel on both forms. As a first step, we swap the first two equations/rows:
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 2 & 3 & 2 & 7 \\ 2 & 2 & 3 & 6 \end{array}\right].$$
We subtract 2 times the first equation/row from the second, then from the third equation/row (i.e., we add $-2$ times it to the second then to the third equation/row).
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
&& y && &{}={}& 1 \\
&& && z &{}={}& 0
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 1 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$
At this point, the values of $y$ and $z$ can be read from the system of equations: $y = 1$, $z = 0$. Substituting these into the first equation, we get the equation $x + 1 + 0 = 3$, from which the value of $x$ can be expressed: $x = 2$.

We arrive at another solution method if instead of back-substitution we continue the sequence of equivalent transformations. Subtract the second, then the third equation/row from the first:
$$\begin{alignedat}{9}
x && && &{}={}& 2 \\
&& y && &{}={}& 1 \\
&& && z &{}={}& 0
\end{alignedat} \qquad \left[\begin{array}{ccc|c} 1 & 0 & 0 & 2 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$
Thus we brought the system of equations, and the augmented matrix respectively, to a form from which the solution can be immediately read: $(x, y, z) = (2, 1, 0)$. $\square$

### Row model: intersection of hyperplanes

To illustrate systems of linear equations, we show two geometric models, which will help in understanding and illustrating the more general concepts.

We know that the set of points satisfying the two-variable linear equation $ax + by = c$ forms a line if at least one of $a$ and $b$ is not $0$. (If $a = b = 0$, then the form of the equation is $0x + 0y = 0$, i.e. $0 = 0$, which holds for every number pair $(x, y)$, so the set of solutions is identical to the set of all points in the plane. If $a = b = 0$, but $c \neq 0$, then the equation has no solution, the solution set is empty.)

**Example 2.26 (Row model with two two-unknown equations).** *Illustrate the following systems of equations and their solutions in the row model!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 7
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 6
\end{alignedat}$$

*Solution.* The figure corresponding to the first system of equations contains a pair of intersecting lines. Their intersection point is the solution. This is shown in the upper drawing of Figure 2.6. Let's solve the system of equations! During the solution we get two new systems of equations:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \quad \Rightarrow \quad \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \quad \Rightarrow \quad \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat}$$
Their row models are shown in Figure 2.6.

The second system of equations cannot be solved, because the two lines corresponding to the equations are parallel, and they have no common point. The algebraic approach also gives this: if we subtract twice the first equation from the second, we get the contradictory equation $0 = 1$. In other words: the set of points satisfying the equation $0x + 0y = 1$ is empty.

Two coincident lines belong to the equations of the third system of equations. The solution set of the system of equations thus consists of the points of this line. If we subtract twice the first equation from the second, we get the equation $0 = 0$, which can thus be dropped. All solutions of the remaining equation $x + 2y = 3$ written in parametric form are for example $(x, y) = (3 - 2t, t)$. $\square$

> *The illustration of solving a system of equations in the row model can be well followed in the demonstration of SagePlayer titled row model. There one can also experiment with one's own augmented matrices.*

*Figure 2.6. Illustration of solving a system of equations.*

*Figure 2.7. Illustration of the solution when the left side of one of the two equations can be made zero.*

We briefly overview the row models of systems of equations with three equations and three unknowns in the 3-dimensional space.

If the three planes determined by the three equations are in general position, i.e., their normal vectors are linearly independent, then the system of equations has exactly one solution (see Figure 2.8. (a)). For example, the system of equations in Example 2.25 has exactly one solution: $(x, y, z) = (2, 1, 0)$.

If there is a linear relationship between the normal vectors, then the number of solutions will be either $0$ or infinite. Consider the systems of equations
$$\begin{alignedat}{9}
2x &{}+{}& y &{}+{}& 2z &{}={}& 5 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
3x &{}+{}& 2y &{}+{}& 3z &{}={}& 8
\end{alignedat} \quad \text{and} \quad \begin{alignedat}{9}
2x &{}+{}& y &{}+{}& 2z &{}={}& 5 \\
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
3x &{}+{}& 2y &{}+{}& 3z &{}={}& 9
\end{alignedat}$$
. The normal vectors in both fall into one plane (but not into one line), since $(2, 1, 2) + (1, 1, 1) = (3, 2, 3) = \mathbf{0}$, thus the planes are parallel to a line. In the case of the first system of equations, this same linear relationship is also among the equations, i.e., subtracting the first two from the third we arrive at the equation $0 = 0$, which can be dropped, and the intersection of the remaining two planes is a line (see Figure 2.8 b)). In the case of the second system of equations we arrive at the equation $0 = 1$, i.e., the linear relationship between the left sides is not present among the right sides. Then the planes have no common point (see Figure 2.9. (b)).

Finally, if among the planes there are parallel ones, but not coincident ones, then the system of equations has no solution (see Figure 2.9. (a)), while if all three planes coincide, the points of the plane give all the solutions (see Figure 2.8. (c)).

**Statement 2.27 (Row model).** *If not every coefficient on the left side of an equation with $n$ unknowns is $0$, then the points satisfying the equation (i.e., the solutions of the equation) form a hyperplane in $\mathbb{R}^n$. If a system of equations with $n$ unknowns consists of $m$ such equations, then the solution of the system of equations is the common part of the $m$ hyperplanes corresponding to them in $\mathbb{R}^n$.*

The $m$ equations can also be written in a more compact form using the dot product. The form of the $i$-th equation of a system of linear equations with $m \times n$ coefficient matrix $\mathbf{A}$ is
$$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n = b_i.$$
If $\mathbf{a}_{i*}$ denotes the $i$-th row vector of the matrix $\mathbf{A}$, and $\mathbf{x}$ is the vector of unknowns, then the previous equation takes the following form:
$$\mathbf{a}_{i*} \cdot \mathbf{x} = b_i. \tag{2.20}$$
This will be especially interesting when we will examine homogeneous systems of linear equations, because there each equation takes the form $\mathbf{a}_{i*} \cdot \mathbf{x} = 0$, which means that we are looking for an $\mathbf{x}$ vector which is perpendicular to all of the $\mathbf{a}_{i*}$ vectors.

*Figure 2.8. Illustration of consistent (solvable) systems of equations (the solution set is indicated by blue color). (a) Three planes in general position: exactly one solution. (b) Planes passing through a line, but not all identical: infinitely many solutions, the solutions form a line. (c) Identical planes: infinitely many solutions, the solutions form a plane.*

*Figure 2.9. Illustration of unsolvable systems of equations. (a) Among the planes at least two are parallel, but not identical. (b) Three planes parallel to a line, but not parallel to each other and not containing a common line either.*


### Column model: representing a vector as a linear combination

In this model, we look at the system of equations as a vector equation in which a vector must be represented as a linear combination of given vectors. For example,
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \quad \text{and the} \quad \begin{bmatrix} 1 \\ 1 \end{bmatrix}x + \begin{bmatrix} 1 \\ 2 \end{bmatrix}y = \begin{bmatrix} 3 \\ 4 \end{bmatrix}.$$

is a system of equations (see Example 2.26) and a vector equation equivalent to it. Here, the task is to find the linear combination of the vectors $(1, 1)$ and $(1, 2)$ that is equal to the vector $(3, 4)$.

> *The steps of the column model can be well followed in the demonstration of the SagePlayer column model. There you can also experiment with your own augmented matrices.*

**Example 2.28 (Column model).** *Let's illustrate the systems of equations given in Example 2.26*
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 7
\end{alignedat} \quad \text{and} \quad \begin{alignedat}{9}
x &{}+{}& 2y &{}={}& 3 \\
2x &{}+{}& 4y &{}={}& 6
\end{alignedat}$$
*in the column model!*

*Solution.* In the case of the first system of equations, a third vector must be produced as a linear combination of two linearly independent vectors. This is illustrated in Figure 2.10. As a point of interest, we also show here how the steps of solving the system of equations look in this model. The steps of the equivalent transformations:
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat} \Rightarrow \begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
&& y &{}={}& 1
\end{alignedat} \Rightarrow \begin{alignedat}{9}
x && &{}={}& 2 \\
&& y &{}={}& 1
\end{alignedat}$$
In vector form:
$$\begin{bmatrix} 1 \\ 1 \end{bmatrix}x + \begin{bmatrix} 1 \\ 2 \end{bmatrix}y = \begin{bmatrix} 3 \\ 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}x + \begin{bmatrix} 1 \\ 1 \end{bmatrix}y = \begin{bmatrix} 3 \\ 1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 \\ 0 \end{bmatrix}x + \begin{bmatrix} 0 \\ 1 \end{bmatrix}y = \begin{bmatrix} 2 \\ 1 \end{bmatrix}.$$
The vector form of the second and third systems of equations is
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix}x + \begin{bmatrix} 2 \\ 4 \end{bmatrix}y = \begin{bmatrix} 3 \\ 7 \end{bmatrix}, \quad \text{and} \quad \begin{bmatrix} 1 \\ 2 \end{bmatrix}x + \begin{bmatrix} 2 \\ 4 \end{bmatrix}y = \begin{bmatrix} 3 \\ 6 \end{bmatrix}.$$
From Figure 2.11 it can be intuitively seen that one of the vector equations has no solution, while the other has infinitely many. $\square$

In general, the following can be stated:

**Statement 2.29 (Column model).** *The system of equations (2.18) given in Definition 2.20 is equivalent to the following vector equation:*
$$\begin{bmatrix} a_{11} \\ a_{21} \\ \vdots \\ a_{m1} \end{bmatrix}x_1 + \begin{bmatrix} a_{12} \\ a_{22} \\ \vdots \\ a_{m2} \end{bmatrix}x_2 + \ldots + \begin{bmatrix} a_{1n} \\ a_{2n} \\ \vdots \\ a_{mn} \end{bmatrix}x_n = \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_m \end{bmatrix}.$$
*Solving the system of equations is equivalent to solving a vector equation, where the vector consisting of the constant terms of the system of equations must be represented as a linear combination of the column vectors of the coefficient matrix.*

According to this model, a system of equations can be solved if and only if the set of all linear combinations of the column vectors of the coefficient matrix also contains the vector consisting of the constant terms (see Exercise 2.22).

*Figure 2.10. The steps of the solution in the column model.*

*Figure 2.11. Column model in the case of linearly dependent vectors.*

### Exercises

#### Linear equations and systems of equations

**2.13.•** Which of the following are linear equations in the variables $x$, $y$, and $z$?
- a) $3x - (\ln 2)y + e^3 z = 0.4$  b) $a^2 x - b^2 y = 0$
- c) $xy - yz - zx = 0$  d) $(\sin 1)x + y - \pi z = 0$
- e) $\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1$  f) $\frac{1}{x} + \frac{1}{y} + \frac{1}{z} = 1$

Prove that the following systems of equations are equivalent!

**2.14.** $\begin{cases} x + 3y = 5 \\ y = 1 \end{cases}$ $\quad$ $\begin{cases} x + y = 3 \\ x = 2 \end{cases}$

**2.15.** $\begin{cases} 2x + 3y = 2 \\ 0x + 0y = 3 \end{cases}$ $\quad$ $\begin{cases} x + y = 2 \\ x + y = 7 \end{cases}$

Solve (calculating in your head) the following systems of linear equations for the parameter choice $a = 1$, $b = 2$, $c = 3$!

**2.16.** $\begin{cases} (2a - b)x + (3a - c)y = 0 \\ (3b - 2c)x + (b - 2a)y = 0 \end{cases}$

**2.17.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (b - 2a)y = 0 \end{cases}$

**2.18.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (b - 2a)y = 1 \end{cases}$

**2.19.** $\begin{cases} (b - a)x + (3a - c)y = 1 \\ (3b - 2c)x + (c - b)y = 2 \end{cases}$

**2.20.** *Common solution of systems of equations.* Let us consider the systems of equations $\mathcal{E}_1$ and $\mathcal{E}_2$ containing the same unknowns. Let their solution sets be $\mathcal{M}_1$ and $\mathcal{M}_2$, respectively. Show that if $\mathcal{E}$ is the union of the systems of equations $\mathcal{E}_1$ and $\mathcal{E}_2$, i.e. $\mathcal{E} = \mathcal{E}_1 \cup \mathcal{E}_2$, and $\mathcal{M}$ is the solution set of $\mathcal{E}$, then $\mathcal{M}$ is the intersection of $\mathcal{M}_1$ and $\mathcal{M}_2$, i.e. $\mathcal{M} = \mathcal{M}_1 \cap \mathcal{M}_2$. Examine this statement in the following cases:
- a) $\mathcal{E}_1 = \{x + y = 2\}$, $\mathcal{E}_2 = \{x - y = 0\}$;
- b) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{x - y = 0\}$;
- c) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{x - y = 1\}$;
- d) $\mathcal{E}_1 = \{x + y = 2, x - y = 0\}$, $\mathcal{E}_2 = \{0x + 0y = 0\}$;
- e) $\mathcal{E}_1$ is an arbitrary system of equations, $\mathcal{E}_2 = \{0 = 0\}$.

#### Row model, column model

**2.21.•** *Row and column model.* Draw the figure according to the row model and column model belonging to the following two systems of equations!
- a) $\begin{cases} 2x + 3y = 7 \\ 3x - 2y = 4 \end{cases}$  b) $\begin{cases} 2x + 4y = 3 \\ 3x + 6y = 4 \end{cases}$

**2.22.** *Row and column model in 3D.* Examine the solvability of the following two systems of equations – with the same coefficient matrix – in the row and column models:
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 3 \\
x &{}+{}& 2y &{}+{}& 4z &{}={}& 3 \\
3x &{}+{}& 4y &{}+{}& 8z &{}={}& 9
\end{alignedat} \qquad \begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 3 \\
x &{}+{}& 2y &{}+{}& 4z &{}={}& 3 \\
3x &{}+{}& 4y &{}+{}& 8z &{}={}& 1
\end{alignedat}$$

**2.23.** *Row and column model for $m \neq n$.* Examine the solvability of the following three systems of equations in the row and column models:
- a) $\begin{cases} x + y = 3 \\ x + y = 4 \\ x + 3y = 5 \end{cases}$  b) $\begin{cases} x + y = 3 \\ x + 2y = 4 \\ x + 3y = 5 \end{cases}$  c) $\begin{cases} x + y = 3 \\ x + 2y = 3 \\ x + 3y = 5 \end{cases}$

**2.24.•** *True – false.* Which statements are true and which are false among the following?
- a) If a system of equations with $n$ unknowns consists of the equations of hyperplanes among which there are two parallel ones, then the system of equations cannot be solved.
- b) If a system of equations with $n$ unknowns cannot be solved, then the equations are the equations of hyperplanes among which there are two parallel but non-identical hyperplanes.
- c) If a system of equations with $n$ unknowns consists of only two equations, then according to the column model it can be solved for an arbitrary right-hand side if and only if there are two linearly independent vectors among the vectors appearing on the left side of the vector equation.

**2.25.•** Complete the following statements so that they are true!
- a) The figure according to the row model of a system of equations with three unknowns consisting of two equations consists of .. pieces of ...... in the ..-dimensional space, which if .............., then the system of equations has no solution, otherwise the number of its solutions is .... Its column model consists of .. pieces of ...... in the ..-dimensional space.
- b) The figure according to the row model of a system of equations with two unknowns consisting of three equations consists of .. pieces of .......... in the ..-dimensional space, while its column model consists of .. pieces of ........... in the ..-dimensional space.
- c) The figure according to the row model of a system of equations with five unknowns consisting of four equations consists of .. pieces of ........... in the ..-dimensional space. Its column model consists of .. pieces of ........ in the ..-dimensional space.

## Solution by elimination

*In this chapter, we will get to know more thoroughly the classic solution method based on elimination, which is useful in solving small systems of equations.*

### Elementary row operations and the row echelon form

The essence of one of the solution methods for systems of linear equations is that we bring the system of equations to a form using equivalent transformations from which – after back substitutions, or without them – the result can be immediately read off. For practical reasons, we perform the transformations on the augmented matrix.[^3]

[^3]: *The writing and solving of systems of linear equations already appeared in Babylonian documents around 300 BC. The publication of the Chinese work entitled Jiǔzhāng Suànshù (with traditional characters: 九章算術, with simplified characters: 九章算术) is estimated to be in the first century, which summarizes the mathematical knowledge gathered in the previous thousand years (the English translation of its title could be "The Nine Chapters on the Mathematical Art" or "Nine Chapters on Mathematical Procedures"). In this work, the technique known as elimination (i.e. Gaussian elimination) is already applied to solve a system of linear equations. The systems of equations in the two above works and further historical details can be read on the website entitled The MacTutor History of Mathematics archive.*

The matrix transformations corresponding to the first three equivalent transformations listed in Theorem 2.23 are the elementary row operations:

**Definition 2.30 (Elementary row operations).** *The following operations performed on the rows of a matrix are called elementary row operations:*
1. *Row swapping: swapping two rows.*
2. *Multiplication: multiplying a row by a non-zero number.*
3. *Addition: adding a constant multiple of another row to a row.*

Of course, we can also divide a row by a non-zero number $c$, as it is equivalent to multiplying by $1/c$. Similarly, we can subtract the $c$-multiple of another row from a row, as it is equivalent to adding its $-c$-multiple. Elementary row operations are also used in solving other problems where the size of the matrix cannot change, so the omission of a zero row is not usually considered an elementary row operation. Following the pattern of elementary row operations, elementary column operations can also be defined. We will use the following notations for elementary transformations:
1. $S_i \leftrightarrow S_j$: swapping the $i$-th and $j$-th rows (for column swapping $O_i \leftrightarrow O_j$).
2. $cS_i$: multiplying the $i$-th row by $c$ ($cO_i$).
3. $S_i + cS_j$: adding the $c$-multiple of the $j$-th row to the $i$-th row ($O_i + cO_j$).

In solving the system of equations, bringing the coefficient matrix to the diagonal or triangular-like form seen so far will be the key step.

**Definition 2.31 (Row echelon form).** *A matrix is in row echelon form, or echelon form, if it satisfies the following two conditions:*
1. *the rows consisting entirely of 0s (if there are any at all) are the last rows of the matrix;*
2. *in any two consecutive non-0 rows, there are (at least one) more 0s at the beginning of the lower row than at the beginning of the row above it.*

*The first non-zero element of the non-zero rows is called the* leading coefficient *(leading element or pivot element), the column of such an element is called the* pivot column *(basic column).*

The following matrices are in row echelon form:
$$\begin{bmatrix} 3 & 2 \\ 0 & 4 \end{bmatrix}, \quad \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} 1 & -2 & 3 & -4 \\ 0 & 0 & -5 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

### Gaussian elimination

*Gaussian elimination*, or the *Gauss method*, is a method for solving systems of linear equations. Its essence is to bring the augmented matrix of the system of linear equations to a row echelon form using elementary row operations, and to determine the general form of the solution from it by back substitution. The method is easily algorithmized if we proceed column by column. We already used the method in the first solution of Example 2.25.

**Example 2.32 (Gaussian elimination, unique solution).** *Solve the following system of equations using Gaussian elimination:*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 0 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 2 \\
x &{}+{}& 3y &{}+{}& 3z &{}={}& 4 \\
x &{}+{}& 2y &{}+{}& z &{}={}& 5
\end{alignedat}$$

*Solution.* Let's write the augmented matrix of the system of equations, and *proceeding column by column* eliminate – zero out – the elements below the pivot elements!
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 2 \\ 1 & 3 & 3 & 4 \\ 1 & 2 & 1 & 5 \end{array}\right] \xrightarrow{\substack{S_2 - 2S_1 \\ S_3 - S_1 \\ S_4 - S_1}} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 0 & -1 & 2 \\ 0 & 2 & 1 & 4 \\ 0 & 1 & -1 & 5 \end{array}\right] \xrightarrow{S_2 \leftrightarrow S_3} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 1 & -1 & 5 \end{array}\right] \xrightarrow{S_4 - \frac{1}{2}S_2}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & -\frac{3}{2} & 3 \end{array}\right] \xrightarrow{S_4 - \frac{3}{2}S_3} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x &{}+{}& y &{}+{}& 2z &{}={}& 0 \\
&& 2y &{}+{}& z &{}={}& 4 \\
&& && -z &{}={}& 2
\end{alignedat}$$
From the third equation $z = -2$, substituting this into the second $y = 3$, substituting these into the first we get that $x = 1$, i.e. the only solution is $(x, y, z) = (1, 3, -2)$. $\square$

What do we do when there are fewer pivot elements than the number of columns according to the row echelon form? For now we introduce two terms, whose meaning will soon be clear: the variables of the system of equations belonging to the columns of pivot elements are called *basic variables (or bound variables),* while all other variables are called *free variables*.

**Example 2.33 (Gaussian elimination, infinitely many solutions).** *Solve the following system of equations using Gaussian elimination:*
$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 1 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3x_3 &{}+{}& 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7x_3 &{}+{}& 8x_4 &{}+{}& 3x_5 &{}={}& 1
\end{alignedat}$$

*Solution.* Let's write the augmented matrix of the system of equations, and proceeding column by column eliminate the elements below the pivot elements!
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 1 & 2 & 3 & 3 & 1 & 0 \\ 3 & 6 & 7 & 8 & 3 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 3S_1}} \left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 4 & 2 & 0 & -2 \end{array}\right] \xrightarrow{S_3 - 2S_2}$$
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 1 \\
&& && 2x_3 &{}+{}& x_4 && &{}={}& -1
\end{alignedat}$$
The basic variables of the system of equations are the variables belonging to the pivot columns of the row echelon form, i.e. $x_1$ and $x_3$. The free variables: $x_2$, $x_4$, $x_5$. We can give arbitrary values to the free variables, the value of the basic variables can be expressed with them. Let, for example, the values of the free variables be $x_2 = s$, $x_4 = t$, $x_5 = u$. After substituting these, from the above equations we first express $x_3$ from the second one, then we substitute it into the first one, from which we express $x_1$, i.e. we express the basic variables from the above equations:
$$\begin{aligned}
x_1 &= \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\
x_3 &= -\tfrac{1}{2} - \tfrac{1}{2}t
\end{aligned}$$
From here the solution of the system of equations is:
$$(x_1, x_2, x_3, x_4, x_5) = \left(\tfrac{3}{2} - 2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2} - \tfrac{1}{2}t, \; t, \; u\right),$$
or with matrix notation
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2} - \tfrac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}.$$
Later on, this latter form of writing will be especially useful, in which a linear combination of vectors appears. $\square$

It is clear that in the last form of this example we can give arbitrary values to the free variables, from which the basic variables can be uniquely expressed, and thus we have obtained all the solutions of the system of equations with this method. The solution given in this way is called the *general solution* of the system of equations, and the solutions belonging to specific parameter values are called *particular solutions*. For example, a particular solution of the system of equations in the previous example is the one belonging to the values $s = 0$, $t = 1$, $u = 2$
$$(x_1, x_2, x_3, x_4, x_5) = (-2, 0, -1, 1, 2).$$

The question is, can the solution set of every system of linear equations be determined with this method? The answer is given by the following theorem:

**Theorem 2.34 (Bringing to row echelon form).** *Any matrix can be brought to a row echelon form using elementary row operations.*

*Proof.* Consider an arbitrary $m \times n$ matrix. In some steps of the following procedure, we will cover up a row or column of the matrix. For the sake of simplicity, the number of rows and columns of the matrix created after covering will again be denoted by $m$ and $n$, and $a_{ij}$ will denote the element in the $i$-th row and $j$-th column of the matrix remaining after the cover-ups.
1. If there are only $0$ elements in the first column, let's cover this column and consider the remaining matrix. If there are again only $0$ elements in its first column, let's cover that one too, and continue this until we find a column in which there is a non-$0$ element. If we *do not find* such a column, the procedure is over, the matrix is in row echelon form.
2. If the element in the first row of the first column is $0$, then let's swap this row with one whose first element is not $0$. Thus we get a matrix in which $a_{11} \neq 0$.
3. Consider the $i$-th row from $i = 2$ to $i = m$. If the first element of the $i$-th row is $a_{i1} \neq 0$, then add the $-a_{i1}/a_{11}$ multiple of the first row to it, i.e. perform the elementary transformation $S_i - \frac{a_{i1}}{a_{11}}S_1$. Since $a_{i1} - \frac{a_{i1}}{a_{11}}a_{11} = 0$, after this step all elements below $a_{11}$ will be $0$.
4. After the above transformation, let's cover the first row and the first column. If *no* more rows remain in the matrix, the procedure is over, uncovering the previously covered parts we have obtained the row echelon form. Otherwise, jump back to step 1 and continue the procedure.

It is clear that this procedure ends in a finite number of steps, as a result of which we arrive at a row echelon form of the original matrix. $\square$

By a *homogeneous system of linear equations belonging to an inhomogeneous system of linear equations* we mean the homogeneous system of equations which is obtained from the inhomogeneous one by changing the constant terms to $0$.

**Example 2.35 (Solving a homogeneous system of linear equations).** *Solve the*
$$\begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
x_1 &{}+{}& 2x_2 &{}+{}& 3x_3 &{}+{}& 3x_4 &{}+{}& x_5 &{}={}& 0 \\
3x_1 &{}+{}& 6x_2 &{}+{}& 7x_3 &{}+{}& 8x_4 &{}+{}& 3x_5 &{}={}& 0
\end{alignedat}$$
*homogeneous system of linear equations belonging to the system of equations in Example 2.33.*

*Solution.* Since it is a homogeneous system of linear equations, it is unnecessary to use the augmented matrix for the solution, since its last column consists only of zeros, so during the elementary row operations it

does not change. The row echelon form of the coefficient matrix can be obtained with the same row operations as in the solution of Example 2.33, i.e.
$$\begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 1 & 2 & 3 & 3 & 1 \\ 3 & 6 & 7 & 8 & 3 \end{bmatrix} \longrightarrow \begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 0 & 0 & 2 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \longrightarrow \begin{alignedat}{9}
x_1 &{}+{}& 2x_2 &{}+{}& x_3 &{}+{}& 2x_4 &{}+{}& x_5 &{}={}& 0 \\
&& && 2x_3 &{}+{}& x_4 && &{}={}& 0
\end{alignedat}$$
From here the solution can be obtained in the same way, moreover, the same linear combination appears in it without the constant terms:
$$(x_1, x_2, x_3, x_4, x_5) = \left(-2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2}t, \; t, \; u\right),$$
or with matrix notation
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2}t \\ t \\ u \end{bmatrix} = s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}.$$
We will return to the connection between homogeneous and inhomogeneous systems of equations, which can be guessed from this example, in Theorem 3.16. $\square$

Thus geometrically solving the system of equations means writing down the explicit form from the implicit form of a shape.

**Example 2.36 (Determining the line of intersection of planes).** *Determine the explicit (parametric) form of the line of intersection of the following two planes!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 1 \\
3x &{}+{}& 4y && &{}={}& 2
\end{alignedat}$$

*Solution.* To determine the line of intersection of the two planes given by the above equations, more precisely to write down the explicit, parametric system of equations of the line of intersection, we simply have to solve the system of equations consisting of the two equations:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 3 & 4 & 0 & 2 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & -3 & -1 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 1 \\
&& y &{}-{}& 3z &{}={}& -1
\end{alignedat}$$
From this with the parameter choice $z = t$, $y = -1 + 3t$ and $x = 2 - 4t$, i.e.
$$(x, y, z) = (-4t + 2, 3t - 1, t) = (2, -1, 0) + t(-4, 3, 1),$$
or with matrix notation
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2 \\ -1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -4 \\ 3 \\ 1 \end{bmatrix}. \qquad \square$$

### Reduced row echelon form

The step of back substitution can be omitted if we continue the elimination, as we have already seen in Example 2.25.

**Definition 2.37 (Reduced row echelon form).** *A matrix is in reduced row echelon form, or reduced echelon form, if it satisfies the following conditions:*
1. *it is in row echelon form;*
2. *every pivot element is equal to 1;*
3. *in the columns of the pivot elements, every element except the pivot element is 0;*

*Here the pivot element is also called a* leading one*.*

For example, the following matrices are in reduced row echelon form:
$$\begin{bmatrix} 1 & 0 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 1 & -2 & 0 & -4 \\ 0 & 0 & 1 & 6 \\ 0 & 0 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 & 1 \\ 0 & 0 & 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{bmatrix}.$$

Every matrix with real or rational elements can be brought to a reduced row echelon form, however matrices with integer coefficients usually cannot, if we want to stay within the integers. However, matrices with integer coefficients can also be brought to a reduced row echelon form in the field of rational numbers.

**Example 2.38 (Bringing to reduced row echelon form).** *Bring the following matrix to a reduced row echelon form!*
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix}$$

*Solution.* A possible solution:
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 2S_1}} \begin{bmatrix} 1 & 3 & 0 \\ 0 & -2 & 2 \\ 0 & -4 & 4 \end{bmatrix} \xrightarrow{-\frac{1}{2}S_2}$$
$$\begin{bmatrix} 1 & 3 & 0 \\ 0 & 1 & -1 \\ 0 & -4 & 4 \end{bmatrix} \xrightarrow{S_3 + 4S_2} \begin{bmatrix} 1 & 3 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{S_1 - 3S_2} \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}.$$
Another possible solution, which *leads to the same result*!
$$\begin{bmatrix} 1 & 3 & 0 \\ 1 & 1 & 2 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{S_1 \leftrightarrow S_2} \begin{bmatrix} 1 & 1 & 2 \\ 1 & 3 & 0 \\ 2 & 2 & 4 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1 \\ S_3 - 2S_1}} \begin{bmatrix} 1 & 1 & 2 \\ 0 & 2 & -2 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{\frac{1}{2}S_2}$$
$$\begin{bmatrix} 1 & 1 & 2 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix} \xrightarrow{S_1 - S_2} \begin{bmatrix} 1 & 0 & 3 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{bmatrix}. \qquad \square$$

### Gauss–Jordan elimination

The *Gauss–Jordan method* (*Gauss–Jordan elimination*) is a method of solving systems of linear equations in which we bring the augmented matrix to a *reduced* row echelon form using elementary row operations. The solution can be read from here.

**Example 2.39 (Gauss–Jordan elimination, unique solution).** *Solve the system of equations written in Example 2.32 using Gauss–Jordan elimination!*

*Solution.* We write the augmented matrix of the system of equations, and in the way seen in Example 2.32 we arrive at the row echelon form, then we continue, first we multiply the rows by the reciprocal of the element in the main diagonal, then we zero out the third column, finally the second one:
$$\left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 2 & 2 & 3 & 2 \\ 1 & 3 & 3 & 4 \\ 1 & 2 & 1 & 5 \end{array}\right] \dashrightarrow \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 2 & 1 & 4 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{\frac{1}{2}S_2 \\ -S_3}} \left[\begin{array}{ccc|c} 1 & 1 & 2 & 0 \\ 0 & 1 & \frac{1}{2} & 2 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{S_2 - \frac{1}{2}S_3 \\ S_1 - 2S_3}}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & 0 & 4 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{S_1 - S_2} \left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 3 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
x && && &{}={}& 1 \\
&& y && &{}={}& 3 \\
&& && z &{}={}& -2
\end{alignedat}$$
So the only solution of the system of equations is $(x, y, z) = (1, 3, -2)$. $\square$

**Example 2.40 (Gauss–Jordan elimination, infinitely many solutions).** *Solve the system of equations in Example 2.33 using Gauss–Jordan elimination!*

*Solution.* In Example 2.33 we arrived at a row echelon form. We continue the procedure until we arrive at the reduced row echelon form.
$$\left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 1 & 2 & 3 & 3 & 1 & 0 \\ 3 & 6 & 7 & 8 & 3 & 1 \end{array}\right] \dashrightarrow \left[\begin{array}{ccccc|c} 1 & 2 & 1 & 2 & 1 & 1 \\ 0 & 0 & 2 & 1 & 0 & -1 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \xrightarrow{\substack{\frac{1}{2}S_2 \\ S_1 - S_2}}$$
$$\left[\begin{array}{ccccc|c} 1 & 2 & 0 & 3/2 & 1 & 3/2 \\ 0 & 0 & 1 & 1/2 & 0 & -1/2 \\ 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \begin{aligned}
x_1 + 2x_2 + \tfrac{3}{2}x_4 + x_5 &= \tfrac{3}{2} \\
x_3 + \tfrac{1}{2}x_4 &= -\tfrac{1}{2}
\end{aligned}$$


After substituting $x_2 = s$, $x_4 = t$, $x_5 = u$ and expressing variables $x_1$ and $x_3$, the solution using vector and matrix notation is:
$$(x_1, x_2, x_3, x_4, x_5) = \left(\tfrac{3}{2} - 2s - \tfrac{3}{2}t - u, \; s, \; -\tfrac{1}{2} - \tfrac{1}{2}t, \; t, \; u\right),$$
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} - 2s - \tfrac{3}{2}t - u \\ s \\ -\tfrac{1}{2} - \tfrac{1}{2}t \\ t \\ u \end{bmatrix} = \begin{bmatrix} \tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\tfrac{3}{2} \\ 0 \\ -\tfrac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} \qquad \square$$

### Uniqueness of the reduced row echelon form

The following theorem has important consequences:

**Theorem 2.41 (The reduced row echelon form is unique).** *Every matrix can be brought to a reduced row echelon form, which is unique.*

*Proof.* We have already shown the existence of the reduced row echelon form, and we give an indirect proof for uniqueness. Suppose that there is a matrix that can be transformed into two different reduced row echelon forms by elementary row operations. Let these be $\mathbf{R}$ and $\mathbf{S}$. Since they are both equivalent to the same matrix, they can be transformed into each other by elementary row operations, that is, they are also equivalent to each other. Select from their columns the first column from the left in which they differ, as well as all leading columns preceding them. Let the matrices thus obtained be denoted by $\hat{\mathbf{R}}$ and $\hat{\mathbf{S}}$. So $\hat{\mathbf{R}} \neq \hat{\mathbf{S}}$, because they differ in their last column. For example, if
$$\mathbf{R} = \begin{bmatrix} 1 & 2 & 0 & 4 & 5 \\ 0 & 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix} \quad \text{and} \quad \mathbf{S} = \begin{bmatrix} 1 & 2 & 0 & 4 & 5 \\ 0 & 0 & 1 & 9 & 3 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix},$$
then
$$\hat{\mathbf{R}} = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 2 \\ 0 & 0 & 0 \end{bmatrix} \quad \text{and} \quad \hat{\mathbf{S}} = \begin{bmatrix} 1 & 0 & 4 \\ 0 & 1 & 9 \\ 0 & 0 & 0 \end{bmatrix}.$$
This column in which they differ cannot be the first column, because if it were the zero vector in one matrix, then due to row equivalence it would also be the zero vector in the other, and otherwise this column would definitely contain a 1 in the first position and 0s below it.

Consider the thus obtained matrices $\hat{\mathbf{R}}$, $\hat{\mathbf{S}}$ as the augmented coefficient matrices of a system of equations each. Their general form is thus the following:
$$\hat{\mathbf{R}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & r_1 \\ 0 & 1 & \ldots & 0 & r_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & r_k \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{or} \quad \hat{\mathbf{R}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & 0 \\ 0 & 1 & \ldots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & 0 \\ 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{and}$$
$$\hat{\mathbf{S}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & s_1 \\ 0 & 1 & \ldots & 0 & s_2 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & s_k \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right] \quad \text{or} \quad \hat{\mathbf{S}} = \left[\begin{array}{cccc|c} 1 & 0 & \ldots & 0 & 0 \\ 0 & 1 & \ldots & 0 & 0 \\ \vdots & \vdots & \ddots & \vdots & \vdots \\ 0 & 0 & \ldots & 1 & 0 \\ 0 & 0 & \ldots & 0 & 1 \\ 0 & 0 & \ldots & 0 & 0 \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & 0 & \ldots & 0 & 0 \end{array}\right]$$
Since omitting columns does not change row equivalence – because in elementary row operations we only perform operations within a column –, the matrices $\hat{\mathbf{R}}$ and $\hat{\mathbf{S}}$ are equivalent, that is, the two systems of equations associated with them have the same solution. This is only possible if either for all indices $i = 1, \ldots, k$ we have $r_i = s_i$, or neither system of equations can be solved, that is, in both cases we got that $\hat{\mathbf{R}} = \hat{\mathbf{S}}$, which is a contradiction. This proves that the initial assumption $\mathbf{R} \neq \mathbf{S}$ was incorrect, so $\mathbf{R} = \mathbf{S}$. (Based on the proof by Holzmann[^4].) $\square$

[^4]: *Wolf Holzmann. Uniqueness of reduced row echelon form. http://www.cs.uleth.ca/~holzmann/notes/reduceduniq.pdf, 2002*

Since the reduced row echelon form is unique, we can define a function that assigns this form to every matrix. We will apply the notation $\operatorname{rref}(\mathbf{A})$ to the function that assigns to an $m \times n$ matrix its reduced row echelon form obtained by omitting the zero rows – unlike in programming languages. For example
$$\operatorname{rref}\begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 1 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}.$$

### Simultaneous systems of equations

A common task in applications is that we have to solve many systems of equations that differ only in their constant terms. With elimination methods, these can also be solved simultaneously using hardly more resources than what is needed to solve a single system of equations.

**Definition 2.42 (Simultaneous systems of equations).** *A set of multiple systems of equations is called a simultaneous system of equations if their coefficient matrices are identical.*

**Example 2.43 (Solving a simultaneous system of equations).** *Solve the following systems of equations!*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}={}& 3 \\
2x &{}+{}& 3y &{}+{}& 2z &{}={}& 7 \\
2x &{}+{}& 2y &{}+{}& 3z &{}={}& 6
\end{alignedat} \qquad \begin{alignedat}{9}
u &{}+{}& v &{}+{}& w &{}={}& 3 \\
2u &{}+{}& 3v &{}+{}& 2w &{}={}& 7 \\
2u &{}+{}& 2v &{}+{}& 3w &{}={}& 7
\end{alignedat} \qquad \begin{alignedat}{9}
r &{}+{}& s &{}+{}& t &{}={}& 0 \\
2r &{}+{}& 3s &{}+{}& 2t &{}={}& 0 \\
2r &{}+{}& 2s &{}+{}& 3t &{}={}& 1
\end{alignedat}$$

*Solution.* Since the coefficient matrix of these three systems of equations is identical, it is enough to perform the transformation of the left side once, and the transformation of the right sides along with it. For this, it is worth creating the following augmented matrix for the simultaneous system of equations:
$$\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 2 & 3 & 2 & 7 & 7 & 0 \\ 2 & 2 & 3 & 6 & 7 & 1 \end{array}\right]$$
To solve it, we use the Gauss–Jordan method:
$$\left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 2 & 3 & 2 & 7 & 7 & 0 \\ 2 & 2 & 3 & 6 & 7 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - 2S_1 \\ S_3 - 2S_1}} \left[\begin{array}{ccc|ccc} 1 & 1 & 1 & 3 & 3 & 0 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{\substack{S_1 - S_2 \\ S_1 - S_3}}$$
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 2 & 1 & -1 \\ 0 & 1 & 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 & 1 & 1 \end{array}\right].$$
From this, the solution of all three systems of equations can be read:
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}, \quad \begin{bmatrix} u \\ v \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}, \quad \begin{bmatrix} r \\ s \\ t \end{bmatrix} = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}. \qquad \square$$

▶ If we know that it is a simultaneous system of equations consisting of multiple systems of equations, we can use the same variables in each system of equations.

▶ Later we will see that if $\mathbf{A}$ is invertible, $\mathbf{B}$ is an arbitrary matrix, and their number of rows is the same, then the matrix $\mathbf{A}^{-1}\mathbf{B}$ can be read from the reduced row echelon form of $[\mathbf{A}|\mathbf{B}]$.

### Elimination in $\mathbb{Z}_p$

If $p$ is a prime, then the operations among the modulo $p$ residue classes possess all the properties that we used during elimination in the field of real numbers. Consequently, the Gauss and Gauss–Jordan methods can be used for systems of equations over $\mathbb{Z}_p$ without any problems. (See also what is written about the algebraic field on page 549.)

**Example 2.44 (System of equations over $\mathbb{Z}_2$).** *We are sending 4-bit codewords, let their bits be denoted by $a$, $b$, $c$ and $d$. We create an error-correcting code in such a way that we put three parity bits at the end of each codeword, namely the $b + c + d$, $a + c + d$ and $a + b + d$ bits. Addition is naturally understood over $\mathbb{Z}_2$ here. For example, instead of the $0110$ codeword, we send the $0110011$ codeword. In a message, the receiving device uncertainly senses the first 4 bits of one such 7-bit codeword, what we receive is the $(?, ?, ?, ?, 1, 0, 1)$ code vector. What could have been the original message, if the last 3 bits are definitely correct?*

> *The code defined in this exercise is called a $[7, 4, 3]_2$ binary* Hamming code*. It consists of $16 = 2^4$ codewords, and any two of its codewords differ in at least 3 places, so any 5 bits uniquely determine the remaining two. According to this, at most 2 bit errors are recognizable (detectable), and at most 1 bit error can even be corrected.*

*Solution.* The bits $a$, $b$, $c$ and $d$ are unknown, for which
$$\begin{alignedat}{9}
&& b &{}+{}& c &{}+{}& d &{}={}& 1 \\
a &{}+{}& && c &{}+{}& d &{}={}& 0 \\
a &{}+{}& b &{}+{}& && d &{}={}& 1
\end{alignedat}$$
Let's solve this system of equations by Gauss–Jordan elimination over $\mathbb{Z}_2$. Let's not forget that in $\mathbb{Z}_2$, $1 + 1 = 0$, so $1 = -1$, that is,
subtraction does not differ from addition.
$$\left[\begin{array}{cccc|c} 0 & 1 & 1 & 1 & 1 \\ 1 & 0 & 1 & 1 & 0 \\ 1 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{S_1 \leftrightarrow S_2} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 1 & 1 & 0 & 1 & 1 \end{array}\right] \xrightarrow{S_3 + S_1} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 0 & 1 \end{array}\right] \xrightarrow{S_3 + S_2}$$
$$\left[\begin{array}{cccc|c} 1 & 0 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{array}\right] \xrightarrow{\substack{S_2 + S_3 \\ S_1 + S_3}} \left[\begin{array}{cccc|c} 1 & 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 & 1 \\ 0 & 0 & 0 & 1 & 0 \end{array}\right] \longrightarrow \begin{alignedat}{9}
a && &{}+{}& c && &{}={}& 0 \\
&& b &{}+{}& c && &{}={}& 1 \\
&& && && d &{}={}& 0
\end{alignedat}$$
From the last equation $d = 0$. The free variable is $c$, let $c = s$. Thus from the second equation $b = 1 + c$, that is $b = 1 + s$ and from the first $a = c$, that is $a = s$. The solution in general form is $(a, b, c, d) = (s, 1 + s, s, 0)$, that is $(a, b, c, d) = (0, 1, 0, 0) + s(1, 1, 1, 0)$. The solutions corresponding to the values $s = 0$ and $s = 1$ are therefore: $(0, 1, 0, 0)$ and $(1, 0, 1, 0)$.

If we consider the system of equations as a vector equation, then the first solution shows that the second column of the coefficient matrix equals the right side (and indeed), and the second solution shows that the sum of the first and third columns gives the right side. $\square$

**Example 2.45 (System of equations over $\mathbb{Z}_5$).** *Solve the following two systems of equations over $\mathbb{Z}_5$.*
$$\begin{alignedat}{9} 2x &{}+{}& 3y &{}={}& 1 \\ 3x &{}+{}& 2y &{}={}& 4 \end{alignedat} \qquad \begin{alignedat}{9} 2x &{}+{}& 3y &{}={}& 1 \\ 3x &{}+{}& 4y &{}={}& 3 \end{alignedat}$$

*Solution.* To make the calculation easier, we can either make a division table, or use the multiplication table in Figure A.5 on page 548.
$$\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 3 & 2 & 4 \end{array}\right] \xrightarrow{3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 3 & 2 & 4 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 0 & 0 & 0 \end{array}\right],$$
that is, the system of equations has multiple solutions. Here this does not mean infinitely many, but that at least one parameter runs through all elements of $\mathbb{Z}_5$. The free variable is $y$, let $y = s$, so $x = 3 - 4s = 3 + s$, thus $(x, y) = (3 + s, s)$, that is, with the matrix notation of vectors:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 0 \end{bmatrix} + s\begin{bmatrix} 1 \\ 1 \end{bmatrix}, \quad s \in \mathbb{Z}_5$$
Since $\mathbb{Z}_5$ has five elements, $s$ can have this many values as well, so all solutions of the first system of equations are $(3, 0)$, $(4, 1)$, $(0, 2)$, $(1, 3)$, $(2, 4)$. The solution of the other system of equations:
$$\left[\begin{array}{cc|c} 2 & 3 & 1 \\ 3 & 4 & 3 \end{array}\right] \xrightarrow{3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 3 & 4 & 3 \end{array}\right] \xrightarrow{S_2 - 3S_1} \left[\begin{array}{cc|c} 1 & 4 & 3 \\ 0 & 2 & 4 \end{array}\right] \xrightarrow{3S_2} \left[\begin{array}{cc|c} 1 & 0 & 0 \\ 0 & 1 & 2 \end{array}\right].$$
Thus the solution is $(x, y) = (0, 2)$. $\square$

### Exercises

#### Row echelon and reduced row echelon form of a matrix

**2.26.•** *Row echelon form: true – false.* Which of the following statements are true and which are false?
- a) Every row echelon form of a matrix has the same number of non-zero rows.
- b) Every row echelon form of a matrix has the same number of pivot columns (basis columns).
- c) Every real matrix has a row echelon form, which is unique.
- d) Different matrices have different reduced row echelon forms.
- e) If a matrix can be transformed into another by elementary row operations, then their reduced row echelon forms are identical.

Determine a row echelon form, and then the reduced row echelon form of the following matrices!

**2.27.** $\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 2 & 3 & 2 & 3 & 4 \\ 1 & 2 & 1 & 2 & 3 \end{bmatrix}$

**2.28.** $\begin{bmatrix} 1 & 1 & 1 & 1 & 1 \\ 2 & 3 & 2 & 3 & 4 \\ 3 & 2 & 1 & 2 & 3 \end{bmatrix}$

**2.29.•** One of the three elementary row operations can also be performed using the other two. Which one and how?

#### Solving systems of equations using the Gauss method

Solve the following systems of linear equations using the Gauss method!

**2.30.** $\begin{cases} x_1 + x_2 + x_3 = 1 \\ x_2 + x_3 + x_4 = 2 \\ x_3 + x_4 + x_5 = 2 \\ x_4 + x_5 + x_1 = 1 \end{cases}$

**2.31.** $\begin{cases} x_1 + x_2 + x_3 = 4 \\ -x_1 + x_2 - x_3 = 2 \\ 2x_1 + x_2 + 2x_3 = 3 \\ 4x_1 + 4x_2 + 4x_3 = 1 \end{cases}$

**2.32.•** $\begin{cases} 7x + 14y - 21z = 7 \\ x + 2y - 3z = 1 \\ 5x + 10y + 15z = 5 \\ 3x + 6y - 9z = 3 \end{cases}$

**2.33.** $\begin{cases} x + 3y + z = 1 \\ 2x + 7y + 2z = 0 \\ x + 4y + 4z = 1 \\ x + 4y + 2z = -1 \\ 4x + 15y + 10z = 2 \end{cases}$

**2.34.** $\begin{cases} x + y = 4 \\ 3x - y = 2 \\ -3x + 5y = 2 \\ x + 2y = 1 \end{cases}$

**2.35.** $\begin{cases} x_1 + x_2 + 4x_4 = 3 \\ x_2 - x_3 + 3x_4 = 1 \\ x_1 - 2x_2 + 3x_3 - 5x_4 = 0 \\ 3x_1 - x_2 + 4x_3 = 5 \end{cases}$

#### Solving systems of equations using the Gauss–Jordan method

**2.36.** Solve the following simultaneous systems of equations!
- a) $\begin{cases} 2x + y = 1 \\ 5x + 3y = 0 \end{cases}$ $\quad$ $\begin{cases} 2x + y = 0 \\ 5x + 3y = 1 \end{cases}$
- b) $\begin{cases} 2x + y = 2 \\ 4x + 2y = 0 \end{cases}$ $\quad$ $\begin{cases} 2x + y = 2 \\ 4x + 2y = 4 \end{cases}$
- c) $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 4 \\ x + 2y + 2z = 1 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 0 \\ x + 2y + 3z = 5 \\ x + 2y + 2z = 1 \end{cases}$
- d) $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 4 \\ x + 2y + z = 2 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = 5 \\ x + 2y + z = 1 \end{cases}$ $\quad$ $\begin{cases} x + y + z = 0 \\ x + 2y + 3z = 6 \\ x + 2y + z = 2 \end{cases}$

#### Systems of equations

**2.37.•** *Systems of equations: true – false.* Which of the following statements are true and which are false?
- a) During elementary row operations performed on the augmented matrix, the solution set of the system of equations does not change.
- b) A system of linear equations is inconsistent if it consists of more equations than unknowns.
- c) If a system of linear equations with real coefficients has two different solutions, then it has infinitely many as well.
- d) A homogeneous system of linear equations is always consistent.

Are the following systems of equations equivalent?

**2.38.** $\begin{cases} 3x + 2y - 2z = 1 \\ 2x + 3y - 3z = -1 \\ 4x + 2y = 8 \end{cases}$ $\quad$ $\begin{cases} 2x + 2y - 2z = 0 \\ 3x + 3y - 2z = 3 \\ 5x - 3y + 2z = 5 \end{cases}$

**2.39.** $\begin{cases} 2x + 3y + 5z = 0 \\ 3x + 2y + 2z = 3 \\ 5x - 4z = 9 \end{cases}$ $\quad$ $\begin{cases} x - y - 3z = 3 \\ 5x + 5y + 7z = 3 \end{cases}$

**2.40.** Can the system of equations whose augmented matrix is the following be solved using only integers:
- a) $\left[\begin{array}{ccc|c} 3 & 4 & 1 & 1 \\ 7 & 8 & 3 & 7 \\ 11 & 7 & -2 & 2 \end{array}\right]$  b) $\left[\begin{array}{ccc|c} 3 & 4 & 1 & 1 \\ 7 & 8 & 3 & 7 \\ 11 & 7 & 2 & 2 \end{array}\right]$

**2.41.** We know about a system of linear equations with at least 2 unknowns that it is uniquely solvable, and that the elements of its augmented matrix read continuously row by row form an arithmetic progression. What is its solution?

**2.42.** *Systems of equations reducible to linear ones.* Solve the following non-linear systems of equations!
- a) $\begin{cases} 2\sqrt{x} + 2\sqrt{y} = 8 \\ 3\sqrt{x} + \sqrt{y} = 4 \end{cases}$  b) $\begin{cases} 2x^3 + 2y^2 = 8 \\ 3x^3 + y^2 = 4 \end{cases}$
- c) $\begin{cases} 2e^x + 2e^y = 8 \\ 3e^x + e^y = 4 \end{cases}$  d) $\begin{cases} 2\cos x + 2\cos y = 8 \\ 3\cos x + \cos y = 4 \end{cases}$

**2.43.** *System of equations with positive integer solutions.* In a coin collection there are old 1, 5 and 10 Ft coins, 11 pieces altogether, with a total value of 53 Ft. How many pieces of which coin are there?

## Solution in practice

*Although the content of this section primarily belongs to the topic of numerical analysis rather than linear algebra, its knowledge is indispensable for anyone applying linear algebra tools in practice. First we examine the computational complexity of the Gauss and Gauss–Jordan elimination, then the question of its numerical reliability. After that we outline the essence of iteration methods, during the application of which the coefficient matrix does not change, so the computational errors do not accumulate either. Moreover, these methods do not "spoil" sparse matrices either, like the Gauss method, which can overwrite many zeros.*

### The computational complexity of elimination

To be able to compare different solution methods of systems of linear equations, we also need to know what their computational complexity is. We write about the flop unit of measurement in detail in the appendix on page 554.

**Theorem 2.46 (The computational complexity of elimination).** *The computational complexity of the Gauss and the Gauss–Jordan method in the case of a system of equations with $n$ unknowns and $n$ equations is equally*
$$\frac{n^3}{3} + \frac{n^2}{2} - \frac{5n}{6} \;\; \text{additions/subtractions,} \quad \frac{n^3}{3} + n^2 - \frac{n}{3} \;\; \text{multiplications/divisions.}$$
*that is altogether*
$$\frac{2}{3}n^3 + \frac{3}{2}n^2 - \frac{7}{6}n \;\, \text{flops,}$$
*which is a good approximation of $2n^3/3$ flops.*

*Proof.* First we recall two elementary relations that are needed in the proof:
$$\begin{aligned}
1 + 2 + \ldots + n &= \frac{n(n+1)}{2} = \frac{1}{2}n^2 + \frac{1}{2}n, \\
1^2 + 2^2 + \ldots + n^2 &= \frac{n(n+1)(2n+1)}{6} = \frac{1}{3}n^3 + \frac{1}{2}n^2 + \frac{1}{6}n.
\end{aligned}$$
In the following, we assume that none of the elements going into the main diagonal during elimination is $0$. In the Gauss method, eliminating the elements below the main diagonal requires $\frac{1}{3}n^3 - \frac{1}{3}n$ additions and $\frac{1}{3}n^3 + \frac{1}{2}n^2 - \frac{5}{6}n$ multiplications. Back-substitution consists of $\frac{1}{2}n^2 - \frac{1}{2}n$ additions and $\frac{1}{2}n^2 + \frac{1}{2}n$ multiplications. If in the Gauss–Jordan method, besides eliminating the elements below the main diagonal, we also change the elements of the main diagonal to 1, then besides $\frac{1}{3}n^3 - \frac{1}{3}n$ additions, $\frac{1}{3}n^3 + \frac{1}{2}n^2 + \frac{1}{6}n$ multiplications are necessary. To eliminate the elements above the main diagonal, $\frac{1}{2}n^2 - \frac{1}{2}n$ additions and just as many multiplications are needed. Detailing the calculations is left to the reader. $\square$

### Numerically unstable systems of equations

In practical problems, we often work with measurement results, and thus with imprecise data.

**Example 2.47 (Unstable system of equations).** *Solve the following system of equations!*
$$\begin{alignedat}{9}
6.73x &{}-{}& 8.97y &{}={}& 5.61 \\
4.79x &{}-{}& 6.39y &{}={}& 3.99
\end{alignedat}$$
*Show that changing the coefficients by $0.01$ can cause a large change in the solutions, moreover, it can also be achieved that the system of equations has no solution, or exactly infinitely many solutions!*

*Solution.* The solution of the system of equations is: $x = 1.5$, $y = 0.5$. Let's change the coefficient of $x$ in the first equation to $6.72$. Then the solution of the system of equations is $x \approx -2.26$, $y \approx -2.32$. After this, let's change the coefficient of $y$ to $-8.96$. Then the solution is $x \approx 4.35$, $y \approx 2.64$. If finally we also change the constant term of the first equation by one hundredth to $5.62$, then the result will be $x \approx 7.21$, $y \approx 4.78$, and if to $5.60$, then – as a treat – we again get the neat $x = 1.5$, $y = 0.5$ values.

Further changing the coefficients on the above system of equations, it can also be achieved that it has infinitely many solutions:
$$\begin{alignedat}{9}
6.72x &{}-{}& 8.96y &{}={}& 5.60 \\
4.80x &{}-{}& 6.40y &{}={}& 4.00
\end{alignedat}$$
because here the two equations are constant multiples of each other. And if we rewrite the constant term of the second equation back to $3.99$, we get a contradictory system of equations. $\square$

Such unreliable results are useless in practice! A system of equations in which a small change in the coefficients or the constant terms causes a large change in the solution is called *numerically unstable* or *ill-conditioned*. Otherwise we speak of a *numerically stable*, or *well-conditioned* system of equations.

It is clear that the above are not precise mathematical concepts, but a number measuring the degree of conditioning can be given. However, whether the solutions of a given system of equations are acceptable or not can only be decided by the problem.

The cause of numerical instability is illustrated by Figure 2.12. In the case of two-variable systems of equations, if the graphs of the two lines are "close" to each other, that is, they almost coincide, then small changes in the lines can move the intersection point far away, but can also make the two lines parallel.

If we encounter a numerically unstable system of equations in practice, let us examine whether there is a true linear dependence behind the "almost" linear dependence among our equations with a small measurement error.

*Figure 2.12. Unstable system of equations, in which a small change in the coefficients of the equations causes a large change in the solution.*

### Partial pivoting

In the following, we use floating-point arithmetic. Calculations are performed in such a way that, according to the given precision, every partial result is rounded to $p$ significant digits.

**Example 2.48 (Gauss method with floating-point numbers).** *Solve the following – numerically stable – system of equations exactly, and then computing with a precision of 3 significant digits.*
$$\begin{alignedat}{9}
10^{-4}x &{}+{}& y &{}={}& 2 \\
x &{}-{}& y &{}={}& 0
\end{alignedat}$$

*Solution.* Computing exactly
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - 10^4 S_1} \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right]$$
from which the result is $x = y = \frac{2 \cdot 10^4}{1 + 10^4}$. It can be justified that the system of equations is numerically stable, which means that, for example, substituting $0$ in place of $10^{-4}$, that is slightly changing a coefficient, the solution of the obtained
$$\left[\begin{array}{cc|c} 0 & 1 & 2 \\ 1 & -1 & 0 \end{array}\right]$$
system of equations differs only slightly from the previous one: $x = y = 2$. Now let's perform the Gauss elimination computing with 3 significant digits:
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - 10^4 S_1} \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right] \approx \left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 0 & -10^4 & -2 \cdot 10^4 \end{array}\right],$$
where during the approximation we used the relation $\operatorname{fl}(-1 - 10^4) = -10^4$. The system of equations obtained this way, however, has the solution $x = 0$, $y = 2$, which is very far from the solution of the original system of equations! Now let's make a tiny change: first let's swap the two equations!
$$\left[\begin{array}{cc|c} 1 & -1 & 0 \\ 10^{-4} & 1 & 2 \end{array}\right] \xrightarrow{S_2 - 10^{-4} S_1} \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 1 + 10^{-4} & 2 \end{array}\right] \approx \left[\begin{array}{cc|c} 1 & -1 & 0 \\ 0 & 1 & 2 \end{array}\right],$$
the solution of which is $x = y = 2$, which is very close to the exact solution! What is the cause of the difference between the two solutions? $\square$

In both solutions, a constant multiple of the first equation was added to the second equation, but in the first case we chose the smaller, in the second case the larger element of the first column as the pivot element. When we chose the smaller one, we divided the first row by a small number, that is, we multiplied by its reciprocal – a large number –, and we added this to the second row. As a consequence of the multiplication by a large number, the
coefficients of the second equation were "suppressed" by these large numbers, altering the equation very much, as a consequence of which the solutions also changed very much! The effect of the rounding $\operatorname{fl}(-1 - 10^4) = -10^4$, that is the "disappearance" of $-1$, is equivalent to having to solve the following instead of the original system of equations:
$$\left[\begin{array}{cc|c} 10^{-4} & 1 & 2 \\ 1 & 0 & 0 \end{array}\right].$$
The solution of this is indeed $x = 0$, $y = 2$! When we chose the larger element of the first column as the pivot element, the row had to be multiplied by a small number, and this added to the other row, that is, the system of equations became less distorted. Based on this, a widely spread rule can be formulated: during the Gaussian elimination procedure, working with floating-point data, one should always choose the element with the largest absolute value from the eligible elements in each column – using row swaps – as the pivot element! This method is called *partial pivoting*. (In certain cases, a better result can be obtained with the method of *complete pivoting*, when we choose the one with the largest absolute value among all the remaining elements as the pivot element. This procedure is more computation-intensive, and is rarely applied.)

**Example 2.49 (Partial pivoting).** *Bring the following matrix to a row echelon form using partial pivoting!*
$$\begin{bmatrix} 1.8 & 3.0 & 3.0 & 3.7 & 7.5 \\ 3.6 & 3.2 & 3.6 & 6.2 & 7.8 \\ 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 2.4 & 5.4 & 5.2 & 2.6 & 5.2 \end{bmatrix}$$

*Solution.* The largest element of the first column is in the third row, so we start with swapping the first and third rows:
$$\xrightarrow{S_1 \leftrightarrow S_3} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 3.6 & 3.2 & 3.6 & 6.2 & 7.8 \\ 1.8 & 3.0 & 3.0 & 3.7 & 7.5 \\ 2.4 & 5.4 & 5.2 & 2.6 & 5.2 \end{bmatrix} \xrightarrow{\substack{S_2 - S_1/2 \\ S_3 - S_1/4 \\ S_4 - S_1/3}} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 1.4 & 1.2 & 5.0 & 7.2 \\ 0.0 & 2.1 & 1.8 & 3.1 & 7.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \end{bmatrix}$$
$$\xrightarrow{S_2 \leftrightarrow S_4} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 2.1 & 1.8 & 3.1 & 7.2 \\ 0.0 & 1.4 & 1.2 & 5.0 & 7.2 \end{bmatrix} \xrightarrow{\substack{S_3 - S_2/2 \\ S_4 - S_2/3}} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 2.2 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \end{bmatrix}$$
$$\xrightarrow{S_3 \leftrightarrow S_4} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \\ 0.0 & 0.0 & 0.0 & 2.2 & 4.8 \end{bmatrix} \xrightarrow{S_4 - S_3/2} \begin{bmatrix} 7.2 & 3.6 & 4.8 & 2.4 & 1.2 \\ 0.0 & 4.2 & 3.6 & 1.8 & 4.8 \\ 0.0 & 0.0 & 0.0 & 4.4 & 5.6 \\ 0.0 & 0.0 & 0.0 & 0.0 & 2.0 \end{bmatrix} \qquad \square$$

### Scaling

In partial pivoting, we chose the largest element of the column. What happens if we multiply a row of the matrix by a scalar? Does it not ruin the method?

**Example 2.50 (Multiplication of a row).** *In Example 2.48, multiply the first equation by $10^5$, that is make a large element out of the smaller one, and solve this system of equations with partial pivoting as well.*
$$\begin{alignedat}{9}
10x &{}+{}& 10^5 y &{}={}& 2 \cdot 10^5 \\
x &{}-{}& y &{}={}& 0
\end{alignedat}$$

*Solution.* Multiplying an equation by a non-zero number is an equivalent transformation, so the exact solution of this system of equations is also $x = y = \frac{2 \cdot 10^4}{1 + 10^4}$. If we compute to 3 significant digits, and apply the method of partial pivoting, then we again get a wrong result:
$$\left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 1 & -1 & 0 \end{array}\right] \xrightarrow{S_2 - \frac{1}{10}S_1} \left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 0 & -1 - 10^4 & -2 \cdot 10^4 \end{array}\right] \approx \left[\begin{array}{cc|c} 10 & 10^5 & 2 \cdot 10^5 \\ 0 & -10^4 & -2 \cdot 10^4 \end{array}\right],$$
from which $x = 0$ and $y = 2$. $\square$

Similarly, multiplying a column of the coefficient matrix can also cause a disturbance, which can be realized on the system of equations, for example, by changing the unit of measurement of one of the variables. (If, for example, we are looking for the unknown previously given in kilometers in millimeters, its coefficient in every equation must be divided by $10^6$.)

To reduce the computational errors arising from such "inequalities" of the coefficients, the practical method called *scaling* can be recommended. This consists of following the next two scaling rules, which according to experience gives a very good result in a large part of practical problems when applied together with partial pivoting:
1. *Scaling of columns:* Choose a natural unit of measurement for the quantities appearing in the problem, with this usually the immense order of magnitude differences between the coefficients can be avoided. Apart from this, there is no need to multiply the elements of the columns.
2. *Scaling of rows:* Divide every row of the augmented matrix $[\mathbf{A}|\mathbf{b}]$ of the system of equations by the element with the largest absolute value in the given row of the coefficient matrix $\mathbf{A}$. Thus the element with the largest absolute value in every row of $\mathbf{A}$ is 1.

No method is known that, besides the limitations of floating-point representation, would efficiently find the most accurate result possible. Based on theory and experience, the Gauss method with scaled partial pivoting can be recommended for dense, not excessively large-sized systems of equations. For systems of equations with a sparse coefficient matrix, iterative methods generally yield a better result.

### Iterative methods

The essence of iterative methods is that we generate a sequence of vectors
$$\mathbf{x}^0, \mathbf{x}^1, \ldots, \mathbf{x}^k, \ldots$$
which converges to the solution vector of the given system of equations (the superscript here does not mean exponentiation!). At first glance, it might seem surprising to search for the solution with an infinite sequence, but since our calculations are at best only of finite precision, we can often reach the required precision in very few steps. Moreover, rounding errors can even increase the speed of convergence.

The basic idea – a fruitful method in several other areas of mathematics as well – is fixed-point search. The essence of this is first presented on the example of a one-variable function. Let $f$ be a function defined on all real places, which takes any points $a$ and $b$ to two points whose distance is at most half the distance of $a$ and $b$. In formula:
$$|f(b) - f(a)| \leq \frac{1}{2}|b - a|, \quad \text{that is} \quad \frac{|f(b) - f(a)|}{|b - a|} \leq \frac{1}{2}.$$
This means that all difference quotients of $f$ are at most $1/2$. According to the much more generally formulable Banach fixed-point theorem, in this case there exists a single point $\bar{x}$ such that $\bar{x} = f(\bar{x})$, and this can be obtained such that starting from an arbitrary point $x_0$ we form the sequence
$$x_0, \; x_1 = f(x_0), \; x_2 = f(x_1), \ldots, x_{k+1} = f(x_k), \ldots$$
and we take its limit. Then
$$\bar{x} = \lim_{k \to \infty} x_k.$$
Figure 2.13 illustrates the above statement. The multiplier $1/2$ can be replaced by an arbitrary constant $q$ falling between $0$ and $1$.

The *Banach fixed-point theorem* – not in its most general form – in $\mathbb{R}^n$ reads as follows:

**Theorem 2.51 (Banach fixed-point theorem).** *Let $f : \mathbb{R}^n \to \mathbb{R}^n$ be a contraction, that is a function such that for any vectors $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$*
$$d(f(\mathbf{x}), f(\mathbf{y})) \leqslant q\,d(\mathbf{x}, \mathbf{y}),$$
*where $0 < q < 1$ is a given constant. Then there is exactly one vector $\bar{\mathbf{x}}$ for which $f(\bar{\mathbf{x}}) = \bar{\mathbf{x}}$, that is, $f$ has exactly one fixed point. This can be obtained by the limit $\lim_{k \to \infty} \mathbf{x}^k = \bar{\mathbf{x}}$, where $\mathbf{x}^0$ is arbitrary and $\mathbf{x}^{k+1} = f(\mathbf{x}^k)$.*

The proof is built on the convergence of Cauchy sequences, we do not detail it here. For $\mathbb{R}^2$, a simple illustration can be given for the theorem, which can be found in the margin note.

We will use the Banach theorem for solving systems of equations in such a way that by rearranging the variables, the system of equations is of the form $\mathbf{x} = f(\mathbf{x})$, where $\mathbf{x}$ denotes the vector of unknowns. In the following, we deal with systems of equations with a square coefficient matrix.

*Figure 2.13. A function that takes any points $a$ and $b$ to two points whose distance is at most half the distance of $a$ and $b$, thus every difference quotient of the function is at most $1/2$ in absolute value. This function has exactly one fixed point, which can be obtained as the limit of the sequence $x_k = f(x_{k-1})$ starting from an arbitrary point $x_0$.*

> *Imagine that some people standing around a round table stretch a large rubber sheet to the edge of the table, and then (now comes the mapping!) let it return to its original state. Then it is true that there is exactly one point on the table above which the rubber sheet stays in place. This point can be obtained if we select an arbitrary point $P_0$ on the table, and we see where the point of the stretched rubber sheet above this jumps during contraction, let this be the point $P_1$ on the table. The point of the stretched rubber sheet above $P_1$ jumps above the point $P_2$ during contraction, etc. The sequence of points thus obtained converges to the fixed point.*


### Jacobi iteration

The iteration is based on expressing the $k$-th variable from the $k$-th equation, which gives the form $\mathbf{x} = f(\mathbf{x})$.

**Example 2.52 (Jacobi iteration).** *Solve the system of equations*
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& 5y &{}={}& -8
\end{alignedat}$$
*using Jacobi iteration, calculating to 3 decimal places.*

*Solution.* Solving the system by elimination we get that $\mathbf{x} = (1, 2)$ is the only solution.

Let's bring the system to the form $\mathbf{x} = f(\mathbf{x})$, i.e. $\begin{bmatrix} x \\ y \end{bmatrix} = f\left(\begin{bmatrix} x \\ y \end{bmatrix}\right)$. From the first equation we express $x$, from the second $y$:
$$x = \frac{y + 2}{4}, \quad y = \frac{2x + 8}{5}.$$
Choose an $\mathbf{x}^0$ vector arbitrarily, e.g. let $\mathbf{x}^0 = (0, 0)$, i.e. $x = y = 0$. Substituting into the formulas above we get that $\mathbf{x}^1 = \left(\frac{0+2}{4}, \frac{0+8}{5}\right) = (0.5, 1.6)$. We provide the further values in a table:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 0.5 | 0.9 | 0.95 | 0.99 | 0.995 | 0.999 | 1.000 | 1.000 |
| $y$ | 0 | 1.6 | 1.8 | 1.96 | 1.98 | 1.996 | 1.998 | 2.000 | 2.000 |

Thus in this example the infinite sequence showed itself to be convergent, but due to rounding error it found the point of convergence after finitely many steps. $\square$

The general case can be described similarly. Suppose that the system of equations
$$\begin{alignedat}{9}
a_{11}x_1 &{}+{}& a_{12}x_2 &{}+{}& \ldots &{}+{}& a_{1n}x_n &{}={}& b_1 \\
a_{21}x_1 &{}+{}& a_{22}x_2 &{}+{}& \ldots &{}+{}& a_{2n}x_n &{}={}& b_2 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{n1}x_1 &{}+{}& a_{n2}x_2 &{}+{}& \ldots &{}+{}& a_{nn}x_n &{}={}& b_n
\end{alignedat}$$
is uniquely solvable, and every element of its main diagonal is different from 0. The process of *Jacobi iteration* is therefore as follows. From the $k$-th equation we express the variable $x_k$:
$$\begin{aligned}
x_1 &= \frac{1}{a_{11}}(b_1 - a_{12}x_2 - \ldots - a_{1,n-1}x_{n-1} - a_{1n}x_n) \\
x_2 &= \frac{1}{a_{22}}(b_2 - a_{21}x_1 - \ldots - a_{2,n-1}x_{n-1} - a_{2n}x_n) \\
&\;\;\vdots \\
x_n &= \frac{1}{a_{nn}}(b_n - a_{n1}x_1 - a_{n2}x_2 - \ldots - a_{n,n-1}x_{n-1}).
\end{aligned} \tag{2.23}$$

*Figure 2.14. Illustration of Jacobi iteration.*

Choose an initial value $\mathbf{x}^0$ for the vector of unknowns $\mathbf{x} = (x_1, x_2, \ldots, x_n)$, e.g. let $\mathbf{x}^0 = (0, 0, \ldots, 0)$. Substitute the values of the coordinates of $\mathbf{x}^0$ into the right side of the system of equations (2.23), the left side gives the coordinates of $\mathbf{x}^1$. We repeat this step, generating the vectors $\mathbf{x}^2$, $\mathbf{x}^3, \ldots$ until we reach the appropriate precision.

### Gauss–Seidel iteration

The speed of the Jacobi iteration can be increased if we immediately substitute the new values of the already calculated variables into the right side of every equation in (2.23). This algorithm is called *Gauss–Seidel iteration*.

In the case of the system of equations with two unknowns
$$\begin{alignedat}{9}
a_{11}x &{}+{}& a_{12}y &{}={}& b_1 \\
a_{21}x &{}+{}& a_{22}y &{}={}& b_2
\end{alignedat}$$
instead of the formulas
$$x_{k+1} = \frac{b_1 - a_{12}y_k}{a_{11}}, \quad y_{k+1} = \frac{b_2 - a_{21}x_k}{a_{22}} \tag{2.24}$$
used in the Jacobi iteration, the Gauss–Seidel iteration uses the formulas
$$x_{k+1} = \frac{b_1 - a_{12}y_k}{a_{11}}, \quad y_{k+1} = \frac{b_2 - a_{21}x_{k+1}}{a_{22}} \tag{2.25}$$

**Example 2.53 (Gauss–Seidel iteration).** *Solve the system of equations*
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& 5y &{}={}& -8
\end{alignedat}$$
*with Gauss–Seidel iteration.*

*Solution.* In the Gauss–Seidel iteration the sequence is generated by the formulas
$$x_{k+1} = \frac{2 + y_k}{4}, \quad y_{k+1} = \frac{8 + 2x_{k+1}}{5}$$
We provide the calculated values in a table but such that we indicate the order of calculation (let's check a few steps in our head):

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ |
|---|---|---|---|---|---|
| $x$ | 0 | 0.5 | 0.95 | 0.995 | 1.000 |
| $y$ | 0 | 1.8 | 1.98 | 1.998 | 2.000 |

Let's compare the result with the table prepared for the Jacobi iteration. The illustration of the solution can be seen in Figure 2.15. $\square$

*Figure 2.15. Illustration of the Gauss–Seidel iteration.*

### Convergence of iterations

Do the Jacobi and Gauss–Seidel iterations always give a convergent sequence if the system of equations is uniquely solvable? The answer: no, but under the existence of certain – easily verifiable, and enforceable – conditions, yes.

**Example 2.54 (Divergent iteration).** *Solve the following system of equations using Jacobi and Gauss–Seidel iteration:*
$$\begin{alignedat}{9}
x &{}-{}& y &{}={}& 2 \\
2x &{}-{}& y &{}={}& 5
\end{alignedat}$$

*Solution.* Let's transform the system of equations:
$$\begin{aligned}
x &= y + 2 \\
y &= 2x - 5
\end{aligned}$$
First let's try with Jacobi iteration:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | -3 | 1 | -9 | -1 | -21 | -5 | -45 |
| $y$ | 0 | -5 | -1 | -11 | -3 | -23 | -7 | -47 | -15 |

It seems the vector sequence is not convergent, just as it does not seem so for the Gauss–Seidel iteration either:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ |
|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 1 | -1 | -5 | -13 |
| $y$ | 0 | -1 | -3 | -7 | -15 | -31 |

The divergence can also be read from the figures illustrating the iterations! $\square$

**Definition 2.55 (Strictly diagonally dominant matrix).** *We say that the $n \times n$ matrix $\mathbf{A}$ has a row-wise (strictly) dominant main diagonal, or is row-wise (strictly) diagonally dominant, if every element of the main diagonal is strictly greater in absolute value than the sum of the absolute values of the other elements in its row, that is in formula*
$$\begin{aligned}
|a_{11}| &> |a_{12}| + \ldots + |a_{1,n-1}| + |a_{1n}| \\
|a_{22}| &> |a_{21}| + \ldots + |a_{2,n-1}| + |a_{2n}| \\
&\;\;\vdots \\
|a_{n-1,n-1}| &> |a_{n-1,1}| + |a_{n-1,2}| + \ldots + |a_{n-1,n}| \\
|a_{nn}| &> |a_{n1}| + |a_{n2}| + \ldots + |a_{n,n-1}|
\end{aligned}$$
A column-wise diagonally dominant matrix can be defined similarly.

It is clear that the following matrices are row-wise diagonally dominant:
$$\begin{bmatrix} 2 & 1 \\ 0 & 1 \end{bmatrix}, \quad \begin{bmatrix} -10 & 1 & 2 \\ 1 & 10 & -3 \\ -1 & -2 & 10 \end{bmatrix}, \quad \begin{bmatrix} 2 & 0 & 0 \\ 0 & -3 & 0 \\ 0 & 0 & -5 \end{bmatrix}, \quad \begin{bmatrix} 1 & .25 & .25 & .25 \\ .25 & 1 & .25 & .25 \\ .25 & .25 & 1 & .25 \\ .25 & .25 & .25 & 1 \end{bmatrix}.$$
The following matrices are not row-wise diagonally dominant, but can be made so with row swaps:
$$\begin{bmatrix} 0 & 1 \\ 2 & 1 \end{bmatrix}, \quad \begin{bmatrix} -1 & -2 & 10 \\ -10 & 1 & 2 \\ 1 & 10 & -3 \end{bmatrix}, \quad \begin{bmatrix} 0 & -3 & 0 \\ 0 & 0 & -5 \\ 2 & 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} .25 & .25 & .25 & 1 \\ 1 & .25 & .25 & .25 \\ .25 & .25 & 1 & .25 \\ .25 & 1 & .25 & .25 \end{bmatrix}.$$
The coefficient matrix of the following system of equations is row-wise diagonally dominant:
$$\begin{alignedat}{9}
4x &{}-{}& y &{}={}& 11 \\
2x &{}-{}& 5y &{}={}& -17
\end{alignedat}$$

**Theorem 2.56 (Sufficient condition for the convergence of iterations).** *If the coefficient matrix of a system of equations with $n$ equations and $n$ unknowns is row-wise diagonally dominant, then both the Jacobi and Gauss–Seidel iterations are convergent for any starting vector.*

▶ For the proof, which builds on the Banach fixed-point theorem, we still lack the tools here, but for two variables exercise 2.47 provides a solution.
▶ The condition in the theorem is not necessary, only sufficient, meaning either iteration might be convergent even on a system of equations whose coefficient matrix is not diagonally dominant.
▶ A similar theorem holds true for coefficient matrices that are column-wise diagonally dominant.
▶ On diagonally dominant matrices the Gauss–Seidel iteration is never slower than the Jacobi iteration, in fact, it is often noticeably faster. However, it can happen that the Gauss–Seidel iteration is divergent while the Jacobi iteration is convergent (see exercise 2.48).
▶ In practice, iterations more efficient than these are used. In this topic we recommend books or websites on *numerical methods* to the Reader, for example the notes of István Faragó and Róbert Horváth[^5].

[^5]: *István Faragó, Róbert Horváth. Numerikus módszerek. BME, http://math.bme.hu/~rhorvath/nummodszjegyzet.pdf, 2013*

### Exercises

**2.44.•** Solve the system of equations
$$\begin{alignedat}{9} 4x &{}-{}& y &{}={}& 8 \\ 2x &{}-{}& 5y &{}={}& -5 \end{alignedat}$$
with Jacobi and Gauss–Seidel iteration! Calculate to 3, then 4 significant digits!

**2.45.•** Solve the system of equations
$$\begin{alignedat}{9} x &{}+{}& 4y &{}+{}& 2z &{}={}& 5 \\ 3x &{}-{}& 2y &{}+{}& 7z &{}={}& -3 \\ 5x &{}-{}& 2y &{}+{}& z &{}={}& 2 \end{alignedat}$$
with Jacobi and Gauss–Seidel iteration! Calculate to 3 significant digits!

**2.46.•** Do the Jacobi and Gauss–Seidel iterations work on the system of equations
$$\begin{alignedat}{9} 4x &{}+{}& 5y &{}={}& 1 \\ 5x &{}+{}& 7y &{}={}& 2 \end{alignedat}$$
although it is not diagonally dominant, and cannot be made so with row swaps either?

**2.47.** Prove that if the coefficient matrix of the system of equations with two unknowns
$$\begin{alignedat}{9} a_{11}x &{}+{}& a_{12}y &{}={}& b_1 \\ a_{21}x &{}+{}& a_{22}y &{}={}& b_2 \end{alignedat}$$
is diagonally dominant, then the function
$$f : \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} \frac{b_1 - a_{12}y}{a_{11}} \\ \frac{b_2 - a_{21}x}{a_{22}} \end{bmatrix}$$
used in the Jacobi iteration and the function
$$g : \begin{bmatrix} x \\ y \end{bmatrix} \mapsto \begin{bmatrix} \frac{b_1}{a_{11}} - \frac{a_{12}y}{a_{11}} \\ \frac{b_2}{a_{22}} - \frac{a_{21}}{a_{22}}\left(\frac{b_1}{a_{11}} - \frac{a_{12}}{a_{11}}y\right) \end{bmatrix}$$
originating from formula (2.25) in the Gauss–Seidel iteration are both contractions, meaning for any two vectors $\mathbf{x}^1 = (x_1, y_1)$ and $\mathbf{x}^2 = (x_2, y_2)$
$$d(f(\mathbf{x}^1), f(\mathbf{x}^2)) \leqslant q\,d(\mathbf{x}^1, \mathbf{x}^2) \quad \text{and}$$
$$d(g(\mathbf{x}^1), g(\mathbf{x}^2)) \leqslant r\,d(\mathbf{x}^1, \mathbf{x}^2),$$
where $0 < q < 1$ and $0 < r < 1$ are given constants.

**2.48.•** *Jacobi iteration converges, Gauss–Seidel iteration does not.* Write a program to verify the claim that on the system of equations
$$\begin{alignedat}{9}
x &&&{}+{}& z &{}={}& 0 \\
-x &{}+{}& \tfrac{5}{6}y &&&{}={}& 0 \\
x &{}+{}& 2y &{}-{}& 3z &{}={}& 1
\end{alignedat}$$
the Jacobi iteration converges, and the Gauss–Seidel iteration does not.

**2.49.** *Gauss elimination on a diagonally dominant matrix.* Prove that if the main diagonal of the matrix $\mathbf{A}$ is row-wise dominant, then Gauss elimination with partial pivoting can be executed on it without row swaps!

**2.50.** *Illustration of iterations.* From city $A$ a train marked $A$ departs towards city $B$, simultaneously from city $B$ a train marked $B$ departs towards $A$. Simultaneously with the departure of train $B$, a fly departs from the nose of train $B$ towards $A$, but as soon as it meets train $A$ it turns back, and flies until it meets train $B$, when it turns back again, etc. The speed of all three is constant, but the speed of the fly is greater than that of both trains.
1. In a table we provide the distance of both trains from their starting place measured in km at the moments when the fly just meets train $B$.

| | $(x_0, y_0)$ | $(x_1, y_1)$ | $(x_2, y_2)$ | $(x_3, y_3)$ |
|---|---|---|---|---|
| $x$: distance from $A$ | 0 | 40 | 48 | 49.6 |
| $y$: distance from $B$ | 0 | 80 | 96 | 99.2 |

Calculate one or two further columns of the table! How far is city $A$ from $B$?
2. Now in another table we provide the distance from its starting place of the train that is just meeting the fly:

| | $y_0$ | $x_1$ | $y_1$ | $x_2$ | $y_2$ | $x_3$ | $y_3$ |
|---|---|---|---|---|---|---|---|
| $x$: distance from $A$ | | 30 | | 46 | | 49.2 | |
| $y$: distance from $B$ | 0 | | 80 | | 96 | | 99.2 |

Calculate one or two further columns of the table! How far is city $A$ from $B$?
3. What does this exercise have to do with the Jacobi and Gauss–Seidel iteration?

## Solutions

**2.1.** a) true, b) false, but e.g. in an orthonormal basis it is true, c) true, d) false, the normal vector of the plane is $(A, B, 0)$, e) true, namely the explicit equation
$$(x, y, z, w) = (1, -1, 0, 0)t + (0, 0, 1, -1)s$$
is the equation of a plane, f) true, g) true, if $(x_1, x_2, x_3, x_4, x_5)$ denotes a general point of the shape, h) true, for example the only common point of the plane with system of equations $x = 0$, $y = 0$ and the plane with system of equations $z = 0$, $w = 0$ is the point $(0, 0, 0, 0)$.

**2.2.** The third coordinate of an arbitrary point $P(x, y, z)$ is equal to the coordinate of the intersection point with the third coordinate axis of the plane laid through it and parallel to the first two coordinate axes. Therefore the coordinate form of every point of the plane in the exercise is $(a, b, 5)$, where $a$ and $b$ are reals, on the other hand all points of such form are on this plane. Thus we are looking for an equation in which the unknowns are $x$, $y$ and $z$, furthermore the value of $x$ and $y$ is an arbitrary real number, and $z$ can only be 5.

The implicit equation is $z = 5$ (otherwise $0x + 0y + z = 5$), its explicit vector equation and explicit system of equations
$$\begin{aligned} x &= s \\ y &= t \\ z &= 5, \end{aligned} \quad \text{and} \quad \begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} s \\ t \\ 5 \end{bmatrix}.$$

**2.3.** a) Multiple solutions are possible. If we choose $t = x$ as a parameter, then $x = t$, $y = 1 - t$, from which the vector equation is:
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ -1 \end{bmatrix} t.$$
Choosing $y$ as a parameter
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \end{bmatrix} t.$$
b) In the case of parameter choice $x = t$
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix} + \begin{bmatrix} 1 \\ -2/3 \end{bmatrix} t.$$
Choosing $x = 3t$ as a parameter
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \end{bmatrix} + \begin{bmatrix} 3 \\ -2 \end{bmatrix} t.$$
c) In the case of parameter choice $x = t$
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ -1 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ -1 \end{bmatrix} t.$$
d) In the case of parameter choice $x = t$
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 0 \\ -5 \\ 0 \end{bmatrix} + \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix} t.$$
e) In the case of parameter choice $x = t$
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ -1 \\ 3 \\ -1 \end{bmatrix} + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} t.$$
f) In the case of parameter choice $x = t$
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 2 \\ -1 \\ 2 \end{bmatrix} + \begin{bmatrix} 1 \\ -1 \\ 1 \\ -1 \end{bmatrix} t.$$
In the case of parameter choice $w = t$
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ -1 \\ 1 \end{bmatrix} t.$$

**2.4.**
- a) $\begin{aligned} x &= t \\ y &= 1 - t \end{aligned}$  b) $\begin{aligned} x &= s \\ y &= t \\ z &= 1 - s - t \end{aligned}$  c) $\begin{aligned} x &= s \\ y &= 1 - s \\ z &= t \end{aligned}$
- d) $\begin{aligned} x &= r \\ y &= s \\ z &= t \\ w &= 1 - r - s - t \end{aligned}$  e) $\begin{aligned} x &= r \\ y &= 1 - r \\ z &= s \\ w &= t \end{aligned}$  f) $\begin{aligned} x &= 1 \\ y &= r \\ z &= s \\ w &= t \end{aligned}$

**2.6.** a) The explicit system of equations is $x = 2 + t$, $y = 1 + 3t$, the vector equation
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix} + \begin{bmatrix} 1 \\ 3 \end{bmatrix} t.$$
The implicit equations are $3(x - 2) = y - 1$, $(3, -1) \cdot (x - 2, y - 1) = 0$, $3x - y = 5$. d) $x = 3$, $y = 4$,
$$\begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 3 \\ 4 \end{bmatrix}.$$

g) The explicit vector equation and explicit system of equations of the line passing through point $A(1, 1, 1, 1)$ with direction vector $\overrightarrow{AB} = (1, 2, 1, 3)$ are
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 2 \\ 1 \\ 3 \end{bmatrix}, \quad \text{and} \quad \begin{aligned} x &= 1 + t \\ y &= 1 + 2t \\ z &= 1 + t \\ w &= 1 + 3t. \end{aligned}$$
The implicit systems of equations can be obtained by expressing $t$ from the previous system of equations:
$$x - 1 = \frac{y - 1}{2} = z - 1 = \frac{w - 1}{3}.$$
From here selecting three *independent* equations is possible in several ways, one is for example the following:
$$\begin{alignedat}{9}
2x &{}-{}& y &&&{}={}& 1 \\
x &&&{}-{}& z &{}={}& 0 \\
3x &&&{}-{}& w &{}={}& 2.
\end{alignedat}$$

**2.7.** a) The differences of vectors pointing to the three points are vectors parallel to the plane, so all equations of the plane can be written with them. Two vectors out of the possible three:
$$\mathbf{u} = (2, 1, 4) - (0, -1, 2) = (2, 2, 2), \text{ and}$$
$$\mathbf{v} = (-1, 0, 7) - (0, -1, 2) = (-1, 1, 5).$$
Based on these, for example alongside the choice $\mathbf{r}_0 = (0, -1, 2)$, the equations of the plane match those described in example 2.14, since it's about the same plane.

c) With the help of the vectors $\overrightarrow{AB} = (1, 2, 1, 3)$ and $\overrightarrow{AC} = (2, 1, 0, -1)$ the equation of the plane can be written:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + s\begin{bmatrix} 1 \\ 2 \\ 1 \\ 3 \end{bmatrix} + t\begin{bmatrix} 2 \\ 1 \\ 0 \\ -1 \end{bmatrix}.$$
By eliminating the parameters $s$ and $t$ we can get two equations, for example
$$\begin{alignedat}{9}
x &{}-{}& 2y &{}+{}& 3z &&&{}={}& 2 \\
&& y &{}-{}& 5z &{}+{}& w &{}={}& -3.
\end{alignedat}$$

**2.8.** a) $\overrightarrow{AB} = (0, 1, 2, 3)$, $\overrightarrow{AC} = (1, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. From here the vector equation:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} r + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
The explicit system of equations
$$\begin{aligned} x &= s \\ y &= 1 + r + s \\ z &= 1 + 2r + t \\ w &= 1 + 3r + t \end{aligned}$$
In this explicit system of equations let's look for three systems of equations that are solvable for the unknowns $r$, $s$, $t$, and substitute these into the fourth equation. As a result we get the equation
$$x - y - z + w = 1$$
which is the implicit equation of the hyperplane.

b) $\overrightarrow{AB} = (0, 1, 2, 3)$, $\overrightarrow{AC} = (0, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. From here the vector equation:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 0 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 2 \\ 3 \end{bmatrix} r + \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
The implicit equation is $x = 0$.

c) $\overrightarrow{AB} = (0, 1, 0, 3)$, $\overrightarrow{AC} = (1, 1, 0, 0)$, $\overrightarrow{AD} = (0, 0, 1, 1)$. From here the vector equation:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + \begin{bmatrix} 0 \\ 1 \\ 0 \\ 3 \end{bmatrix} r + \begin{bmatrix} 1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \end{bmatrix} t.$$
The implicit equation is $y + z = 0$.

**2.9.** Since $(A, B)$ is a normal vector of the line, therefore if $\mathbf{r}$ is a vector pointing to an arbitrary point, and $\mathbf{r}_0$ to a fixed point of the line, then $\mathbf{r} - \mathbf{r}_0 = (x - x_0, y - y_0)$ is perpendicular to the normal vector, thus their dot product is 0, that is
$$(A, B) \cdot (x - x_0, y - y_0) = 0.$$
Carrying out this dot product we get the formula $Ax + By = Ax_0 + By_0$, which is of the desired form. On the other hand if $Ax + By = C$, then because of $(A, B) \neq (0, 0)$ the equation $Ax_0 + By_0 = C$ is solvable. For such a solution $Ax + By = Ax_0 + By_0$, from which $(A, B) \cdot (x - x_0, y - y_0) = 0$, so $(x, y)$ can only be a point of the line passing through point $(x_0, y_0)$, perpendicular to $(A, B)$.

**2.13.** a) yes, b) yes, c) no, d) yes, e) yes, f) no.

**2.14.** It is easy to see that the only solution of both systems of equations is: $x = 2$, $y = 1$, thus the two systems of equations are equivalent.

**2.15.** The first system of equations cannot be solved because of the equation of form $0 = 3$, but neither can the second one, since there is no $x$ and $y$ for which $x + y = 2$ and $x + y = 7$ would be true, as $2 \neq 7$.

**2.16.** After substitution both equations are of form $0 = 0$, which is satisfied by arbitrary $x$ and $y$, thus all pairs of numbers $(x, y)$ are solutions to the system of equations.

**2.17.** $x = 1$, $y$ is arbitrary, that is all pairs of numbers of form $(1, y)$ are solutions.

**2.18.** The second equation is of form $0 = 1$ after substitution, thus the system of equations has no solution.

**2.19.** $x = 1$, $y = 2$, that is $(x, y) = (1, 2)$ is the only solution.

**2.21.** a) In the row model we need to draw two intersecting lines ($y = \frac{7}{3} - \frac{2}{3}x$, $y = -2 + \frac{3}{2}x$), which intersect each other in point $(2, 1)$, while in the column model the vectors $(2, 3)$, $(3, -2)$ and the vector $(7, 4)$ produced as their linear combination!

b) In the row model we need to draw two parallel lines, while in the column model the vectors $(2, 3)$ and $(4, 6)$, which are parallel to each other, so their linear combination does not produce the vector $(3, 4)$ either!

**2.22.** None of the two among the three planes are parallel, on the other hand their normal vectors fall into one plane, since $2(1, 1, 2) + (1, 2, 4) = (3, 4, 8)$. This means that there is a vector that is parallel to all three planes. In the first case the three planes intersect in a line, since the planes have a common point, e.g. point $(3, 0, 0)$, so it also has infinitely many solutions, while in the second case the planes have no common point.

The systems of equations are equivalent to the following vector equations:
$$\begin{bmatrix} 1 \\ 1 \\ 3 \end{bmatrix} x + \begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix} y + \begin{bmatrix} 2 \\ 4 \\ 8 \end{bmatrix} z = \begin{bmatrix} 3 \\ 3 \\ 9 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 1 \\ 3 \end{bmatrix} x + \begin{bmatrix} 1 \\ 2 \\ 4 \end{bmatrix} y + \begin{bmatrix} 2 \\ 4 \\ 8 \end{bmatrix} z = \begin{bmatrix} 3 \\ 3 \\ 1 \end{bmatrix}.$$
Here every column vector of the common coefficient matrix is in the plane with equation
$$2x + y - z = 0$$
(this is easily verifiable by substituting the coordinates of the vectors into the equation of the plane), and they also span the plane, because the three vectors are not collinear. On the other hand the vector $(3, 3, 9)$ is also in this plane, but the vector $(3, 3, 1)$ is not in it. Thus the first system of equations is solvable, the second is not.

**2.23.** The figure according to the row model in case a) contains 3 lines in the plane, among which there are two parallel ones, thus the system of equations cannot be solved. In case b) the three lines pass through one point, this is the solution: $x = 2$, $y = 1$. In case c) although there are no parallel lines, they have no common point either, thus the system of equations cannot be solved. According to the column model the a)
$$\begin{alignedat}{9}
x &{}+{}& y &{}={}& 3 \\
x &{}+{}& y &{}={}& 4 \\
x &{}+{}& 2y &{}={}& 4
\end{alignedat}$$
system of equations is equivalent to the following:
$$\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} x + \begin{bmatrix} 1 \\ 1 \\ 2 \end{bmatrix} y = \begin{bmatrix} 3 \\ 4 \\ 4 \end{bmatrix}.$$
The vectors $(1, 1, 1)$ and $(1, 1, 2)$ lie in the plane with equation $x = y$, since their first two coordinates are identical, therefore all their linear combinations also fall into this plane. However, the vector $(3, 4, 4)$ does not fall into this plane, so it is *independent* from the previous two, meaning it cannot be produced as their linear combination. So this system of equations cannot be solved. In systems of equations b) and c) the two vectors on the left side, $(1, 1, 1)$ and $(1, 2, 3)$ are in the plane with equation $x - 2y + z = 0$, in which the vector $(3, 4, 5)$ is included, while the vector $(3, 3, 5)$ is not included, thus b) is solvable, c) is not.

**2.24.** a) false, the statement is only true if the parallel hyperplanes are also distinct (we consider two identical hyperplanes parallel), b) false, for example in the case shown in figure 2.9 (a) there are no parallel planes, and yet there is no solution, c) true, because then any vector standing on the right side can be expressed as a linear combination of these two two-dimensional vectors, thus the system of equations is solvable.

**2.25.**
- a) A figure according to the row model of a system of equations with two equations and three unknowns consists of **two planes** in the **three**-dimensional space, which if they are **parallel, but not identical,** then the system of equations has no solution, otherwise its number of solutions is **infinite.** Its column model consists of **four vectors** in the **two**-dimensional space (three are the linear combination of the fourth).
- b) A figure according to the row model of a system of equations with three equations and two unknowns consists of **three lines** in the **two**-dimensional space, while its column model consists of **three vectors** in the **three**-dimensional space.
- c) A figure according to the row model of a system of equations with four equations and five unknowns consists of **four hyperplanes** in the **five**-dimensional space. Its column model consists of **six vectors** in the **four**-dimensional space.

**2.26.** a) True, this number is equal to the number of pivots. b) True, this number is equal to the number of pivots. c) False, every matrix has an echelon form, but only the reduced echelon form is unique. d) False. e) True.

**2.27.** $\begin{bmatrix} 1 & 0 & 1 & 0 & -1 \\ 0 & 1 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$

**2.28.** $\begin{bmatrix} 1 & 0 & 0 & 0 & 0 \\ 0 & 1 & 0 & 1 & 2 \\ 0 & 0 & 1 & 0 & -1 \end{bmatrix}$

**2.29.** The row swap can be produced with the help of multiplication and addition, namely the row swap $S_i \leftrightarrow S_j$ is equivalent to the
$$S_i + S_j, \; S_j - S_i, \; S_i + S_j, \; -S_j,$$
elementary row operations. As a check we also provide their effect on the matrices:
$$\begin{bmatrix} \vdots \\ \mathbf{s}_i \\ \vdots \\ \mathbf{s}_j \\ \vdots \end{bmatrix} \xrightarrow{S_i + S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_i + \mathbf{s}_j \\ \vdots \\ \mathbf{s}_j \\ \vdots \end{bmatrix} \xrightarrow{S_j - S_i} \begin{bmatrix} \vdots \\ \mathbf{s}_i + \mathbf{s}_j \\ \vdots \\ -\mathbf{s}_i \\ \vdots \end{bmatrix} \xrightarrow{S_i + S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_j \\ \vdots \\ -\mathbf{s}_i \\ \vdots \end{bmatrix} \xrightarrow{-S_j} \begin{bmatrix} \vdots \\ \mathbf{s}_j \\ \vdots \\ \mathbf{s}_i \\ \vdots \end{bmatrix}$$

**2.30.** The augmented matrix of the system of equations and its echelon form:
$$\left[\begin{array}{ccccc|c} 1 & 1 & 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 & 2 \\ 1 & 0 & 0 & 1 & 1 & 1 \end{array}\right] \longrightarrow \left[\begin{array}{ccccc|c} 1 & 1 & 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 1 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 & 2 \\ 0 & 0 & 0 & 2 & 1 & 2 \end{array}\right]$$
Let $x_5 = t$, from the last equation $x_4 = 1 - \frac{1}{2}t$, after substitution into the third equation $x_3 = 1 - \frac{1}{2}t$, from the second equation $x_2 = t$, finally from the first equation $x_1 = -\frac{1}{2}t$. Thus the solution is
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -\frac{1}{2}t \\ t \\ 1 - \frac{1}{2}t \\ 1 - \frac{1}{2}t \\ t \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{1}{2} \\ 1 \\ -\frac{1}{2} \\ -\frac{1}{2} \\ 1 \end{bmatrix}.$$
In the case of parameter choice $x_4 = t$ the result takes a fraction-free form:
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} t - 1 \\ -2t + 2 \\ t \\ t \\ -2t + 2 \end{bmatrix} = \begin{bmatrix} -1 \\ 2 \\ 0 \\ 0 \\ 2 \end{bmatrix} + t\begin{bmatrix} 1 \\ -2 \\ 1 \\ 1 \\ -2 \end{bmatrix}.$$

**2.31.** A single elementary row operation makes it clear that the system of equations is inconsistent:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ -1 & 1 & -1 & 2 \\ 2 & 1 & 2 & 1 \\ 4 & 4 & 4 & 1 \end{array}\right] \xrightarrow{S_4 - 4S_1} \left[\begin{array}{ccc|c} 1 & 1 & 1 & 4 \\ -1 & 1 & -1 & 2 \\ 2 & 1 & 2 & 1 \\ 0 & 0 & 0 & -15 \end{array}\right]$$

**2.32.** The elementary row operations:
$$\left[\begin{array}{ccc|c} 7 & 14 & -21 & 7 \\ 1 & 2 & -3 & 1 \\ 5 & 10 & 15 & 5 \\ 3 & 6 & -9 & 3 \end{array}\right] \xrightarrow{\frac{1}{7}S_1, \frac{1}{5}S_3, \frac{1}{3}S_4} \left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 1 & 2 & -3 & 1 \\ 1 & 2 & 3 & 1 \\ 1 & 2 & -3 & 1 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - S_1 \\ S_4 - S_1}}$$
$$\left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 6 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right] \longrightarrow \left[\begin{array}{ccc|c} 1 & 2 & -3 & 1 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{array}\right].$$
From here the solution:
$$\begin{bmatrix} x \\ y \\ z \end{bmatrix} = \begin{bmatrix} 1 - 2t \\ t \\ 0 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}.$$
This exercise is an example that from the fact that the number of equations is greater than the unknowns, it does not follow that the system of equations is inconsistent. In fact, as we can see, it can even have infinitely many solutions!

**2.33.** $(x, y, z) = (19/3, -2, 2/3)$ is the only solution. This exercise is an example that from the fact that the number of equations is greater than the unknowns, it does not follow that the system of equations is inconsistent.

**2.34.** The system of equations is inconsistent.

**2.35.** $$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{bmatrix} = \begin{bmatrix} 2 - s - t \\ 1 + s - 3t \\ s \\ t \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -1 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -1 \\ -3 \\ 0 \\ 1 \end{bmatrix}.$$

**2.36.** a) We write down the augmented matrix, then use the Gauss–Jordan method:
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 5 & 3 & 0 & 1 \end{array}\right] \xrightarrow{S_2 - \frac{5}{2}S_1} \left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 0 & \frac{1}{2} & -\frac{5}{2} & 1 \end{array}\right] \xrightarrow{2S_2}$$
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 0 \\ 0 & 1 & -5 & 2 \end{array}\right] \xrightarrow{S_1 - S_2} \left[\begin{array}{cc|cc} 2 & 0 & 6 & -2 \\ 0 & 1 & -5 & 2 \end{array}\right] \xrightarrow{\frac{1}{2}S_1}$$
$$\left[\begin{array}{cc|cc} 1 & 0 & 3 & -1 \\ 0 & 1 & -5 & 2 \end{array}\right].$$
The solution to the first system of equations is $x = 3$, $y = -5$, to the second it's $x = -1$, $y = 2$.
b) The first system of equations is contradictory, the solutions to the second are $x = 1 - \frac{1}{2}t$, $y = t$, because
$$\left[\begin{array}{cc|cc} 2 & 1 & 1 & 2 \\ 4 & 2 & 0 & 4 \end{array}\right] \xrightarrow{\operatorname{rref}} \left[\begin{array}{cc|cc} 1 & \frac{1}{2} & 0 & 1 \\ 0 & 0 & 1 & 0 \end{array}\right].$$

c) The solutions can be read from the reduced echelon form of the augmented matrix:
$$\left[\begin{array}{ccc|cc} 1 & 1 & 1 & 1 & 0 \\ 1 & 2 & 3 & 4 & 5 \\ 1 & 2 & 2 & 1 & 1 \end{array}\right] \xrightarrow{\operatorname{rref}} \left[\begin{array}{ccc|cc} 1 & 0 & 0 & 1 & -1 \\ 0 & 1 & 0 & -3 & -3 \\ 0 & 0 & 1 & 3 & 4 \end{array}\right].$$
d) The solutions can be read from the reduced echelon form of the augmented matrix:
$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & -1 & -1 & -2 \\ 0 & 1 & 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 & 2 & 2 \end{array}\right].$$

**2.37.** a) True. b) False, the solvability of a system of equations does not depend on the number of equations. A system consisting of fewer or more equations than the number of unknowns can be either consistent or inconsistent. c) True. d) True, the zero vector is always a solution.

**2.38.** Yes, for both of them $(x, y, z) = (1, 2, 3)$ is the only solution, that is their solution sets are identical.

**2.39.** Yes, the reduced echelon form of the augmented coefficient matrix for both of them without the zero row is
$$\left[\begin{array}{cc|cc} 1 & 0 & -0.8 & 1.8 \\ 0 & 1 & 2.2 & -1.2 \end{array}\right]$$

**2.40.** a) Yes. b) No.

**2.41.** If the system of equations has at least three rows, then – since the difference between any two adjacent rows is identical – all others can be obtained as a linear combination of the first two rows, so we cannot write an $n$-unknown system of equations consisting of $n$ independent equations for $n > 2$, such that it has only a single solution. If $n = 2$, then the augmented matrix and its echelon form
$$\left[\begin{array}{cc|c} a & a + d & a + 2d \\ a + 3d & a + 4d & a + 5d \end{array}\right] \longrightarrow \left[\begin{array}{cc|c} 1 & 1 & 1 \\ 0 & 1 & 2 \end{array}\right],$$
where $a$ is arbitrary, $d \neq 0$. From here the solution vector is $(-1, 2)$. (In the case of two unknowns, but more than two equations, alongside $d \neq 0$ there will be two independent equations, which yield the same solution.)

**2.42.** All four equations lead to the following linear system of equations with appropriate substitution:
$$\begin{alignedat}{9}
2X &{}+{}& 2Y &{}={}& 8 \\
3X &{}+{}& Y &{}={}& 4
\end{alignedat}$$
Its solution is $X = 0$, $Y = 4$. From here a) $(x, y) = (0, 16)$, b) there are two solutions: $(0, 2)$ and $(0, -2)$, c) this system of equations cannot be solved, since the equation $e^x = 0$ cannot be solved, d) this system of equations cannot be solved either, since the equation $\cos x = 4$ cannot be solved (in the set of real numbers).

**2.43.** Let $x$, $y$ and $z$ denote the number of 1, 5 and 10 HUF coins respectively. The exercise leads to the following system of equations:
$$x + y + z = 11 \tag{2.21}$$
$$x + 2y + 5z = 53 \tag{2.22}$$
Its solutions are $(x, y, z) = \left(\frac{1}{2} + \frac{5}{2}t, \frac{21}{2} - \frac{9}{4}t, t\right)$. The number of 10 HUF coins is at most 5, so it is enough to try the values $t = 1, 2, \ldots, 5$. The only solution that consists of positive integers, that is where the quantity of every coin is a positive integer: $x = 3$, $y = 6$, $z = 2$. (If we notice that we can only get integer solutions if $t$ gives a remainder of two when divided by four, then besides the case $t = 2$ no other solution can even be considered.)

**2.44.** The table of steps for the Jacobi iteration calculated to 3 significant digits with starting vector $\mathbf{x}^0 = (0, 0)$:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ |
|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 2.25 | 2.45 | 2.48 | 2.50 | 2.50 |
| $y$ | 0 | 1.80 | 1.90 | 1.98 | 1.99 | 2.00 | 2.00 |

The steps of the iteration calculated to 4 significant digits:

| | $\mathbf{x}^0$ | $\mathbf{x}^1$ | $\mathbf{x}^2$ | $\mathbf{x}^3$ | $\mathbf{x}^4$ | $\mathbf{x}^5$ | $\mathbf{x}^6$ | $\mathbf{x}^7$ | $\mathbf{x}^8$ |
|---|---|---|---|---|---|---|---|---|---|
| $x$ | 0 | 2 | 2.25 | 2.45 | 2.475 | 2.495 | 2.498 | 2.500 | 2.5 |
| $y$ | 0 | 1.80 | 1.90 | 1.980 | 1.990 | 1.998 | 1.999 | 2.0 | |

**2.45.** The system of equations can be made diagonally dominant with row swaps. The solution is $(x, y, z) = (1, 1.25, -0.5)$.

**2.50.** In the manner according to the Jacobi iteration, calculating the distances characteristic of the $k + 1$-th meeting from the $k$-th meeting of the fly and one of the trains, we arrive at the equations $x_{k+1} = ay_k + b$, $y_{k+1} = cx_k + d$. Substituting the data from the first table, and solving for the value of $a$, $b$, $c$ and $d$ we get the values $a = 1/10$, $b = 40$, $c = 2/5$, $d = 80$, from which the further values of the table can be calculated, and the original system of equations can also be written:
$$\begin{alignedat}{9}
x &{}-{}& \tfrac{1}{10}y &{}={}& 40 \\
-\tfrac{2}{5}x &{}+{}& y &{}={}& 80.
\end{alignedat}$$
Its solution is $(x, y) = (50, 100)$, meaning until the trains meet, train $A$ travels 50 km, train $B$ travels 100 km. According to this the two cities are 150 km apart.

The equations $x_{k+1} = ay_k + b$, $y_{k+1} = cx_{k+1} + d$ according to the Gauss–Seidel iteration fit exactly to the second table of the exercise with the values $a = 1/5$, $b = 30$, $c = 1$, $d = 50$. This belongs to the system of equations
$$\begin{alignedat}{9}
x &{}-{}& \tfrac{1}{5}y &{}={}& 30 \\
-x &{}+{}& y &{}={}& 50
\end{alignedat}$$
whose solution is again $(x, y) = (50, 100)$.


# 3. Solvability and the Space of Solutions

This chapter is devoted to characterizing the solutions of a system of equations. In doing so, we take a small step towards introducing the general concept of a vector space and show that the solutions of a system of linear equations form a vector space. Finally, we show that the closest solution to the origin of every consistent system of linear equations is the unique one that falls into the row space.

## Solutions of Homogeneous and Inhomogeneous Systems of Equations

*Previously, we studied methods for finding solutions. In this section, we examine the question of solvability and the most important properties of the set of solutions. Both geometric interpretations of systems of linear equations play an important role in these investigations.*

### Number of Bound Variables, Rank of a Matrix

An obvious but important consequence of the uniqueness of the reduced row echelon form is the following result:

**Corollary 3.1 (Columns of Pivots).** *In any row echelon form of a real matrix, the pivots are in the same columns, so their number is also independent of the row echelon form.*

The proof follows immediately from the fact that the leading ones of the reduced row echelon form are obtained from the pivots of any row echelon form, so the pivots of any row echelon form are exactly where the leading ones are, and the reduced row echelon form is unique.

From this it also follows that for any real matrix
$$\text{(number of pivots of any row echelon form)} = \text{(number of non-zero rows of any row echelon form)} = \text{(number of leading ones of the reduced row echelon form).}$$
This leads to the following definition.

**Definition 3.2 (Rank of a Matrix).** *The number of non-zero rows in any row echelon form of a matrix is called the* rank *of the matrix. The rank of the matrix $\mathbf{A}$ is denoted by $\operatorname{r}(\mathbf{A})$, $\operatorname{rang}(\mathbf{A})$ or $\operatorname{rank}(\mathbf{A})$.*

**Example 3.3 (Calculating the Rank of a Matrix).** *Let's calculate the rank of the following matrices!*
$$\begin{bmatrix} 2 & 3 \\ 0 & 0 \end{bmatrix}, \quad \begin{bmatrix} 3 & 2 & 1 \\ 0 & 0 & 4 \end{bmatrix}, \quad \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & -1 & -1 \\ 1 & -1 & 1 & -1 \\ 1 & -1 & -1 & 1 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 1 & 0 \\ 1 & 0 & 0 & 1 \\ 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \end{bmatrix}.$$

*Solution.* The first and second matrices are in row echelon form, their ranks are 1 and 2, respectively. The third and fourth matrices can be brought to the form
$$\begin{bmatrix} 1 & 1 & 1 & 1 \\ 0 & -2 & 0 & -2 \\ 0 & 0 & -2 & 2 \\ 0 & 0 & 0 & -4 \end{bmatrix}, \text{ and} \quad \begin{bmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}$$
with elementary row operations, so the ranks are 4 and 2, respectively. $\square$

**Proposition 3.4 (Number of Bound and Free Variables).** *If a system of equations with $n$ unknowns is solvable, and the rank of its coefficient matrix is $r$, then in its solution obtained by the Gauss or Gauss–Jordan method, the number of bound variables is $r$, and the number of free variables is $n - r$.*

▶ We note that for now we only see that if the rank of the coefficient matrix and the augmented matrix is $r$, then the system of equations *has a solution* in which the number of bound variables is $r$, and the number of free variables is $n - r$, and such a solution can be obtained by the Gauss or Gauss–Jordan method. We do not yet know anything about whether by changing the order of the variables, or by using another solution method, we might not get the same solution with more or exactly fewer bound variables. In the next chapter, Chapter 3, we will prove that the number of bound and free variables is independent of the order of the variables and the method of their determination.
▶ For example, in the system of equations belonging to the augmented matrix
$$\left[\begin{array}{ccccccc|c} 1 & 3 & 2 & 6 & 0 & 4 & 1 & 2 \\ 0 & 0 & 3 & 1 & 2 & 3 & 0 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 & 4 & 5 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{array}\right]$$
the number of bound variables is 3 and the number of free variables is 4.

### Condition for Solvability of a System of Equations

We know that a system of linear equations is *not* solvable if and only if the row echelon form of the augmented matrix has a row in which only the very last element is not zero. Rewritten as an equation, this is of the form $0 = c$, where $c \neq 0$, and this equation has no solution. This, however, means that in this case the rank of the augmented matrix is strictly greater than the rank of the coefficient matrix. The immediate consequence of this statement is the following theorem.

**Theorem 3.5 (Matrix Rank Condition for Solvability).** *Let the coefficient matrix of a system of linear equations with $n$ unknowns be $\mathbf{A}$, and its vector of constant terms be $\mathbf{b}$.*
1. *This system of equations is solvable if and only if the rank of its coefficient matrix and its augmented matrix are equal, that is*
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}).$$
2. *This system of equations is uniquely solvable if and only if the rank of its coefficient matrix and its augmented matrix are equal to the number of unknowns, that is*
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}) = n.$$

*Proof.* 1. The system of equations is solvable if and only if in the row echelon form of its augmented matrix there is no row whose only non-zero element is the last one. This exactly means that $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b})$.
2. A system of equations is uniquely solvable if it is solvable and has no free variables, that is, the rank of the coefficient matrix is equal to the number of unknowns. $\square$

From the above it also follows that a system of linear equations has more than one solution if and only if
$$\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b}) < n.$$
(Why can't it be $\operatorname{r}(\mathbf{A}) > n$?)

A system of equations with real coefficients can only have more than one solution if it has a free variable. However, to each of its values corresponds a different solution, which means that in this case the system of equations with real coefficients has infinitely many solutions. Thus, if $\mathbf{A}$ is a real matrix, the relationship between the number of solutions, the two ranks and the number of unknowns is as follows:

| Condition | Number of solutions |
|---|---|
| $\operatorname{r}(\mathbf{A}) < \operatorname{r}(\mathbf{A}\vert\mathbf{b})$ | 0 |
| $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}\vert\mathbf{b}) = n$ | 1 |
| $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}\vert\mathbf{b}) < n$ | $\infty$ |

If the system of equations is homogeneous linear, that is, all constant terms are 0, then during elementary row operations all elements in the last column of the augmented matrix remain 0, so there will certainly not be a pivot in this column. Accordingly, homogeneous linear systems of equations are always solvable, since in this case the relation $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}|\mathbf{b})$ always holds. The solvability is of course obvious without checking this condition, since $x_1 = x_2 = \cdots = x_n = 0$ is always a solution! Since $\operatorname{r}(\mathbf{A})$ is equal to the number of pivots in the reduced row echelon form, therefore $\operatorname{r}(\mathbf{A}) \leq m$ and $\operatorname{r}(\mathbf{A}) \leq n$ also hold, where $m$ is the number of equations and $n$ is the number of unknowns. But then in case $m < n$, $\operatorname{r}(\mathbf{A}) = n$ cannot hold, so the homogeneous linear system of equations has a solution other than the $\mathbf{x} = \mathbf{0}$ vector. We have thus proved the following theorem:

**Theorem 3.6 (Solvability of a Homogeneous Linear System of Equations).** *A homogeneous linear system of equations with coefficient matrix $\mathbf{A}$ is always solvable, because the zero vector – the so-called* trivial solution *– is always a solution. It has a* non-trivial *solution, i.e., a solution different from the $\mathbf{0}$-vector, if and only if*
$$\operatorname{r}(\mathbf{A}) < n,$$
*where $n$ denotes the number of unknowns – i.e., the number of columns of $\mathbf{A}$. Specifically, a homogeneous linear system of equations consisting of $m$ equations always has a non-trivial solution if $m < n$.*

For homogeneous linear systems of equations with real coefficients, the previous table takes the following form:

| Condition | Number of solutions |
|---|---|
| $\operatorname{r}(\mathbf{A}) = n$ | 1 |
| $\operatorname{r}(\mathbf{A}) < n$ | $\infty$ |

**Example 3.7 (Number of Solutions of a System of Equations).** *For what values of the parameter $a$ does the following system of equations have 0, 1, or $\infty$ many solutions?*
$$\begin{alignedat}{9}
x_1 &{}+{}& x_2 &{}+{}& ax_3 &{}={}& 1 \\
x_1 &{}+{}& ax_2 &{}+{}& x_3 &{}={}& a \\
ax_1 &{}+{}& x_2 &{}+{}& x_3 &{}={}& a^2
\end{alignedat}$$

*Solution.* Let's bring the augmented matrix to row echelon form:
$$\left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 1 & a & 1 & a \\ a & 1 & 1 & a^2 \end{array}\right] \xrightarrow{\substack{S_2 - S_1 \\ S_3 - aS_1}} \left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 0 & a-1 & 1-a & a-1 \\ 0 & 1-a & 1-a^2 & a^2 - a \end{array}\right] \xrightarrow{S_3 + S_2}$$
$$\left[\begin{array}{ccc|c} 1 & 1 & a & 1 \\ 0 & a-1 & 1-a & a-1 \\ 0 & 0 & -(a-1)(a+2) & (a+1)(a-1) \end{array}\right]$$
It can be seen that if $a = 1$, all elements in the last two rows are 0, so the rank of both the coefficient matrix and the augmented matrix is 1, thus the system of equations is equivalent to the equation $x_1 + x_2 + x_3 = 1$. Its solution is: $(x_1, x_2, x_3) = (1 - s - t, s, t)$, i.e., written as a column vector:
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + s\begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}.$$
If $a = -2$, then the rank of the coefficient matrix is 2, the rank of the augmented matrix is 3, so the system of equations cannot be solved (the last row rewritten as an equation is of the form $0 = 3$). In all other cases, i.e., if $a \neq 1$ and $a \neq -2$, then both ranks are 3, which equals the number of unknowns, so there is a unique solution. This can also be expressed:
$$x_1 = \frac{(a+1)^2}{a+2}, \quad x_2 = \frac{1}{a+2}, \quad x_3 = -\frac{a+1}{a+2}. \qquad \square$$

### Solutions of a Homogeneous Linear System of Equations

Let us consider an arbitrary homogeneous linear system of equations. As we saw in Theorem 3.6, this is certainly solvable, and the zero vector is in the set of solutions. What can we say about the set of solutions if the homogeneous system of equations has multiple solutions?

**Proposition 3.8 (Linear Combination of Solutions).** *Any linear combination of the solutions of a homogeneous linear system of equations is also a solution.*

*Proof.* It is sufficient to prove the statement for two solutions. Let $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ denote the column vectors of the coefficient matrix of the system of equations. Let $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ and $\mathbf{y} = (y_1, y_2, \ldots, y_n)$ be two arbitrary solutions, that is
$$\begin{aligned}
\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n &= \mathbf{0} \\
\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n &= \mathbf{0},
\end{aligned}$$
and let $c$, $d$ be two arbitrary scalars. We show that then $c\mathbf{x} + d\mathbf{y}$ is also a solution, namely
$$\begin{aligned}
\mathbf{a}_1(cx_1 + dy_1) + \mathbf{a}_2(cx_2 + dy_2) + \ldots + \mathbf{a}_n(cx_n + dy_n) &= \\
(c\mathbf{a}_1 x_1 + d\mathbf{a}_1 y_1) + (c\mathbf{a}_2 x_2 + d\mathbf{a}_2 y_2) + \ldots + (c\mathbf{a}_n x_n + d\mathbf{a}_n y_n) &= \\
c(\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) + d(\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n) &= \\
\mathbf{0} + \mathbf{0} = \mathbf{0}.
\end{aligned}$$
that is, $c\mathbf{x} + d\mathbf{y}$ is also a solution. This proves our statement.

This proof was built on the column model, but a similarly simple proof can be given in the row model as well (see Exercise 3.10). $\square$

### Vector Space and Subspace

So far, by a vector space we have meant the set of all ordered $n$-tuples of numbers, where $n$ is a fixed positive integer. In the following, we extend the concept of vector space.

For now, we only deal with real vectors, i.e., by a vector we mean an ordered $n$-tuple of real numbers, where $n$ is an arbitrary positive integer.

**Definition 3.9 (Vector Space).** *By a vector space we mean a non-empty set $\mathcal{V}$ of vectors, for which it is true that any two vectors of $\mathcal{V}$ can be added together, and their sum is also in $\mathcal{V}$, and the product of any vector in $\mathcal{V}$ by any real number $c$ is also in $\mathcal{V}$. In other words, $\mathcal{V}$ is a vector space if it is closed under the operations of vector addition and scalar multiplication.*

**Definition 3.10 (Subspace).** *If $\mathcal{U}$ and $\mathcal{V}$ are two vector spaces and $\mathcal{U} \subseteq \mathcal{V}$, then we say that the vector space $\mathcal{U}$ is a* subspace *of the vector space $\mathcal{V}$. Notation: $\mathcal{U} \leqslant \mathcal{V}$.*

▶ The set of vectors $\mathcal{A}$ is a vector space if and only if the linear combinations of the vectors in $\mathcal{A}$ are also all in $\mathcal{A}$ (see Exercise 3.6).
▶ For all positive integers $n$, $\mathbb{R}^n$ is a vector space.
▶ In the plane (in $\mathbb{R}^2$), the vectors of a line passing through the origin (the position vectors pointing to the points of the line) form a vector space, which is a subspace of $\mathbb{R}^2$.
▶ In space (in $\mathbb{R}^3$), the vectors of any plane or line passing through the origin form a vector space (see Figure 3.1), which is a subspace of $\mathbb{R}^3$.
▶ The just listed subspaces of $\mathbb{R}^3$ – a line and a plane passing through the origin – are "like" $\mathbb{R}$ and $\mathbb{R}^2$. Chapter 13 clarifies these two concepts – the abstract definition of a vector space and the concept of isomorphism of vector spaces. We will see that the subspaces of $\mathbb{R}^n$ are indeed all "like" $\mathbb{R}^k$, where $k \leqslant n$.

Following the pattern of Venn diagrams used to illustrate sets, we will illustrate *some properties* of subspaces of vector spaces on leaf-like figures. The common lower vertex of the leaves of this *leaf diagram* at the "stem" indicates the zero vector (see Figure 3.2). At the top vertex of the leaves, we can write the name of the space. Just like the Venn diagram, the leaf diagram is not suitable for illustrating every property!

We list some easily verifiable properties of subspaces, illustrating some of them with this diagram:
▶ The zero vector is an element of every subspace, since along with any vector in the subspace, its 0-multiple, i.e., the $\mathbf{0}$-vector is also an element of the subspace.
▶ Along with every vector $\mathbf{x}$ in the subspace, its opposite ($-1$-multiple), the vector $-\mathbf{x}$, is also an element of the subspace.
▶ Every vector space is itself a subspace (a subspace of itself), since it contains all linear combinations of any two of its vectors.
▶ The zero vector forms a subspace by itself, this is the *zero space,* denoted by $\mathcal{Z}$. We use the term null space for something else, do not confuse the two.
▶ The zero space $\mathcal{Z}$ containing the zero vector of a vector space $\mathcal{V}$ and $\mathcal{V}$ itself are called the *trivial subspaces* of the space $\mathcal{V}$ (see Figure 3.3).

*Figure 3.1. a) Any constant multiple of any vector of a line passing through the origin and the sum of any two of its vectors falls on the line, b) any constant multiple of any vector of a plane passing through the origin and the sum of any two of its vectors falls on the plane.*

*Figure 3.2. A vector space $\mathcal{W}$ with its subspaces $\mathcal{U}$ and $\mathcal{V}$ and the common zero vector.*

*Figure 3.3. The two trivial subspaces of the vector space $\mathcal{W}$: $\mathcal{W}$ itself, and the zero space $\mathcal{Z}$.*

▶ A subspace of a subspace is a subspace, i.e., if $\mathcal{U} \leqslant \mathcal{V}$, and $\mathcal{W} \leqslant \mathcal{U}$, then $\mathcal{W} \leqslant \mathcal{V}$ (see Figure 3.4).
▶ The intersection of two subspaces is a subspace. If $\mathcal{U}$ and $\mathcal{V}$ are two subspaces of a vector space, and $\mathcal{W}$ is their intersection, then $\mathcal{W}$ is not empty, since the zero vector is in it. On the other hand, all linear combinations of any two vectors $\mathbf{x}, \mathbf{y} \in \mathcal{W}$ are in both $\mathcal{U}$ and $\mathcal{V}$, and thus also in their intersection. We use the sign $\cap$ for the intersection of subspaces, so for the previous subspaces $\mathcal{U} \cap \mathcal{V} = \mathcal{W}$ (see Figure 3.5).
▶ The intersection of any number (even infinitely many) of subspaces of a vector space is also a subspace.
▶ The union of two subspaces is a subspace only if one subspace is a subspace of the other. For example, taking the union of the vectors of a line passing through the origin and a plane passing through the origin in space, we get a subspace only if the line falls on the plane.

**Example 3.11 (Subspace).** *Are the following sets of vectors in $\mathbb{R}^3$ subspaces?*
- a) $\{ (x, y, z) \mid x = y, \; z = xy \}$,
- b) $\{ (s + 2t, s - 1, 2s + t) \mid s, t \in \mathbb{R} \}$,
- c) $\{ (x, y, z) \mid 2x - y + z = 0 \}$,
- d) $\{ (x, y, z) \mid x = 2t, \; y = -t, \; z = t, \; t \in \mathbb{R} \}$.

*Solution.* a) is not a subspace. For example, the vector $(1, 1, 1)$ is in this set, however its double is not.

b) is not a subspace. The zero vector is not in the vector set, because the system of equations $s + 2t = 0$, $s - 1 = 0$, $2s + t = 0$ has no solution.

c) is a subspace, which consists of the position vectors pointing to the points of the plane with normal vector $\mathbf{n} = (2, -1, 1)$. The vector equation of the plane is $\mathbf{n} \cdot \mathbf{r} = 0$. If $\mathbf{x}$ and $\mathbf{y}$ are two vectors of the plane, that is $\mathbf{n} \cdot \mathbf{x} = 0$ and $\mathbf{n} \cdot \mathbf{y} = 0$, then $\mathbf{n} \cdot (\mathbf{x} + \mathbf{y}) = 0$ and $\mathbf{n} \cdot (c\mathbf{x}) = 0$ also hold for any real number $c \in \mathbb{R}$, so we indeed obtained a subspace.

d) is a subspace, which consists of the scalar multiples of the vector $\mathbf{v} = (2, -1, 1)$. The sum of any two of these and any scalar multiple of any of them also belongs to this set, so these vectors indeed form a subspace. The endpoints of these vectors give the points of a line passing through the origin. $\square$

▶ It is easy to see that the subspaces of $\mathbb{R}^2$ are the following: a) the one-element set consisting of the zero vector, i.e., the zero space, b) all vectors of a line passing through the origin, c) all vectors of the plane.
▶ Similarly, the subspaces of $\mathbb{R}^3$: a) the one-element set consisting of the zero vector, b) all vectors of a line passing through the origin, c) all vectors of a plane passing through the origin, d) all vectors of the space.
▶ The solution set of a homogeneous system of equations consisting of a single $n$-unknown equation – i.e., an $\mathbf{n} \cdot \mathbf{x} = 0$ equation – is also a hyperplane in $\mathbb{R}^n$ containing the origin belonging to the set. This is a subspace, which can be proved similarly to point c) of the previous example. The intersection of subspaces is a subspace, so the solution set of a homogeneous linear system of equations consisting of multiple equations is always a subspace, since it is an intersection of hyperplanes, and this intersection is not empty, because $\mathbf{0}$ is in it. The next subsection examines the same thing in the column model.

*Figure 3.4. A subspace of a subspace is also a subspace.*

*Figure 3.5. The intersection of subspaces is also a subspace, but it may happen that this intersection consists only of the zero space containing the single zero vector.*

*Figure 3.6. The union of two subspaces is a subspace only if one is a subspace of the other.*

### Spanned Subspace

We produced all solutions of a homogeneous linear system of equations as a linear combination of some vectors. The subspace of solutions is therefore "generated" or, in more geometric terminology, "spanned" by some solution vectors.

**Definition 3.12 (Spanned Subspace).** *Given a vector space $\mathcal{V}$. The set of linear combinations of the form*
$$c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_k \mathbf{v}_k$$
*of the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \in \mathcal{V}$ is called the* subspace spanned *by the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$. Notation: $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ or $\langle \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \rangle$.*

We show that the use of the word subspace in this concept is justified:

**Proposition 3.13 (The Spanned Subspace is a Subspace).** *The vector set $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ spanned by the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \in \mathcal{V}$ is a subspace of $\mathcal{V}$.*

*Proof.* We need to show that any scalar multiple of any vector of $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$ and the sum of any two of its vectors also belong here. Let
$$\mathbf{u} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_k \mathbf{v}_k, \text{ and } \mathbf{v} = d_1 \mathbf{v}_1 + d_2 \mathbf{v}_2 + \ldots + d_k \mathbf{v}_k$$
be two arbitrary vectors of $\operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k)$, and let $x \in \mathbb{R}$ be an arbitrary real number. Then
$$x\mathbf{u} = (xc_1)\mathbf{v}_1 + (xc_2)\mathbf{v}_2 + \ldots + (xc_k)\mathbf{v}_k \in \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k),$$
and
$$\mathbf{u} + \mathbf{v} = (c_1 + d_1)\mathbf{v}_1 + \ldots + (c_k + d_k)\mathbf{v}_k \in \operatorname{span}(\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k). \qquad \square$$

Using the concept of subspace and the previous theorem, Proposition 3.8 takes the following form:

**Proposition 3.14 (Subspace of Solutions).** *The solution set of a homogeneous linear system of equations with $n$ unknowns forms a subspace in $\mathbb{R}^n$.*

**Definition 3.15 (Null Space).** *The subspace of solutions of a homogeneous linear system of equations with coefficient matrix $\mathbf{A}$ is called the* null space *of the matrix $\mathbf{A}$ and is denoted by $\mathcal{N}(\mathbf{A})$.*

In Example 2.35 we solved a homogeneous linear system of equations, so with this we also determined the null space of its coefficient matrix, i.e.,
$$\mathcal{N}\left(\begin{bmatrix} 1 & 2 & 1 & 2 & 1 \\ 1 & 2 & 3 & 3 & 1 \\ 3 & 6 & 7 & 8 & 3 \end{bmatrix}\right) = \left\{ s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} \;\middle|\; s, t, u \in \mathbb{R} \right\}.$$

### Solutions of the Inhomogeneous Linear System of Equations

The solutions of an inhomogeneous linear system of equations do not form a subspace, since the zero vector is an element of every subspace, but it is not a solution of any inhomogeneous system of equations! At the same time, there is a close connection between the solutions of the inhomogeneous linear system of equations and the corresponding homogeneous system of equations.

**Theorem 3.16 (Solutions of Homogeneous and Inhomogeneous Systems of Equations).** *The general solution of a system of linear equations with matrix $[\mathbf{A}|\mathbf{b}]$ is equal to the sum of an arbitrary particular solution of it and the general solution of the corresponding homogeneous system of equations with matrix $[\mathbf{A}|\mathbf{0}]$. Specifically*
$$(\text{inhomogeneous general solution}) = (\text{inhomogeneous particular solution}) + (\text{homogeneous general solution})$$

*Proof.* If $\mathbf{b} = \mathbf{0}$, then the statement is obviously true, since the solutions form a subspace, so let us assume that the vector of constants is $\mathbf{b} = (b_1, b_2, \ldots, b_m) \neq \mathbf{0}$. Let $\mathbf{A}$ denote the coefficient matrix of the system of equations, and let $\mathbf{a}_{1*}, \mathbf{a}_{2*}, \ldots, \mathbf{a}_{m*}$ be its row vectors. Let $\mathbf{x}$ be a particular solution of the inhomogeneous system of equations, and let $\mathcal{H}$ denote the solution set of the homogeneous system, and $\mathcal{I}$ the solution set of the inhomogeneous system. We show that $\mathbf{x} + \mathcal{H} = \mathcal{I}$, where the addition on the left side is understood element-wise.

$\mathbf{x} + \mathcal{H} \subseteq \mathcal{I}$: We need to show that if we add an arbitrary element $\mathbf{y}$ of $\mathcal{H}$ to $\mathbf{x}$, we get a solution of the inhomogeneous system of equations. Indeed, $\mathbf{x}$ and $\mathbf{y}$ satisfy the equations
$$\begin{aligned}
\mathbf{a}_{i*} \cdot \mathbf{x} &= b_i, \\
\mathbf{a}_{i*} \cdot \mathbf{y} &= 0, \qquad (i = 1, 2, \ldots, m).
\end{aligned}$$
From this
$$\mathbf{a}_{i*} \cdot (\mathbf{x} + \mathbf{y}) = \mathbf{a}_{i*} \cdot \mathbf{x} + \mathbf{a}_{i*} \cdot \mathbf{y} = b_i + 0 = b_i.$$
so $\mathbf{x} + \mathbf{y}$ is a solution of the inhomogeneous system of equations, i.e., $\mathbf{x} + \mathbf{y} \in \mathcal{I}$.

$\mathbf{x} + \mathcal{H} \supseteq \mathcal{I}$: We need to show that if $\mathbf{z}$ is an arbitrary solution of the inhomogeneous system, i.e., $\mathbf{z} \in \mathcal{I}$, then there exists an $\mathbf{y} \in \mathcal{H}$ such that $\mathbf{z} = \mathbf{x} + \mathbf{y}$. Indeed, $\mathbf{y} = \mathbf{z} - \mathbf{x}$ will do, because
$$\mathbf{a}_{i*} \cdot (\mathbf{z} - \mathbf{x}) = \mathbf{a}_{i*} \cdot \mathbf{z} - \mathbf{a}_{i*} \cdot \mathbf{x} = b_i - b_i = 0.$$
holds for every index $i = 1, 2, \ldots, m$, i.e., $\mathbf{z} - \mathbf{x} \in \mathcal{H}$. $\square$

This theorem means that although the set of solutions of the inhomogeneous linear system of equations is *not a subspace,* it is a *translated subspace.* These sets are called *affine subspaces* in geometric language. Such are shown in Figure 3.7. Examples 2.33 and 2.35 also illustrate this theorem.

*Figure 3.7. a) The solution set of a three-unknown inhomogeneous linear system of equations, if the general solution is one-parameter; b) The solution set of a three-unknown inhomogeneous linear system of equations, if the general solution is two-parameter.*

The illustration of the solution of the inhomogeneous system of equations on the leaf diagram is shown in Figure 3.8.

According to the previous theorem, all solutions of the inhomogeneous system of equations are the translation of all solutions of the homogeneous system – i.e., of $\mathcal{N}(\mathbf{A})$ – by some solution of the inhomogeneous system. It is important to see that it does not matter which solution we choose from the solutions of the inhomogeneous system, although the extent of the translation changes, the result will be the same. This is well illustrated by Figure 3.7: if the point at the origin of the line passing through the origin is translated not to $\mathbf{x}$, but to another point of the translated line, then the two translated lines cover each other, i.e., the two affine subspaces are identical.

The vectors $\mathbf{b}$ for which the system of equations $[\mathbf{A}|\mathbf{b}]$ is consistent form a subspace. According to the column model, these are exactly those vectors which are produced as a linear combination of the column vectors of the coefficient matrix.

**Definition 3.17 (Row Space, Column Space).** *The subspace spanned by the column vectors of a matrix is called the* column space, *and the subspace spanned by its row vectors is called the* row space. *Its row space is denoted by $\mathcal{S}(\mathbf{A})$, its column space by $\mathcal{O}(\mathbf{A})$.*

For an $m \times n$ matrix $\mathbf{A}$, its row space $\mathcal{S}(\mathbf{A})$ is a subspace of $\mathbb{R}^n$, its column space $\mathcal{O}(\mathbf{A})$ is a subspace of $\mathbb{R}^m$, i.e., $\mathcal{S}(\mathbf{A}) \leqslant \mathbb{R}^n$, $\mathcal{O}(\mathbf{A}) \leqslant \mathbb{R}^m$ (see Figure 3.9). The relationship between the solutions of the systems of equations $[\mathbf{A}|\mathbf{b}]$ and $[\mathbf{A}|\mathbf{0}]$ is illustrated in Figure 3.10.

The following statement follows from the column model:

**Corollary 3.18 (Solvability of an Inhomogeneous System of Equations).** *The system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is solvable if and only if $\mathbf{b}$ is produced as a linear combination of the columns of $\mathbf{A}$, i.e., $\mathbf{b}$ is in the column space of $\mathbf{A}$. The coefficients of the linear combination are equal to the coordinates of the solution vector.*

**Example 3.19 (Vectors of a Spanned Subspace).** *Are the vectors $\mathbf{u} = (-1, 2, -3, 6)$ and $\mathbf{w} = (-1, 2, -3, 4)$ elements of the subspace spanned by the vectors $\mathbf{v}_1 = (1, 0, 1, 2)$, $\mathbf{v}_2 = (-1, 2, -2, 1)$ and $\mathbf{v}_3 = (1, 1, 1, 1)$? If so, provide a linear combination proving this!*

*Solution.* We must solve the systems of equations $x_1 \mathbf{v}_1 + x_2 \mathbf{v}_2 + x_3 \mathbf{v}_3 = \mathbf{u}$ and $y_1 \mathbf{v}_1 + y_2 \mathbf{v}_2 + y_3 \mathbf{v}_3 = \mathbf{w}$. This is a simultaneous system of equations consisting of four equations, whose augmented matrix consists of the column vectors $\mathbf{v}_1$, $\mathbf{v}_2$, $\mathbf{v}_3$, $\mathbf{u}$ and $\mathbf{w}$. Its row echelon form:
$$\left[\begin{array}{ccc|cc} 1 & -1 & 1 & -1 & -1 \\ 0 & 2 & 1 & 2 & 2 \\ 1 & -2 & 1 & -3 & -3 \\ 2 & 1 & 1 & 6 & 4 \end{array}\right] \Rightarrow \left[\begin{array}{ccc|cc} 1 & -1 & 1 & -1 & -1 \\ 0 & 1 & 0 & 2 & 2 \\ 0 & 0 & 1 & -2 & -2 \\ 0 & 0 & 0 & 0 & 1 \end{array}\right]$$
from which $(x_1, x_2, x_3) = (3, 2, -2)$, and $\mathbf{w}$ is not produced as a linear combination, because the system of equations containing the vector $\mathbf{w}$ on the right side is contradictory. $\square$

*Figure 3.8. The solution of the homogeneous system of equations with coefficient matrix $\mathbf{A}$ is the null space, i.e., $\mathcal{N}(\mathbf{A})$, and that of the inhomogeneous one is a translation $\mathbf{x}_0 + \mathcal{N}(\mathbf{A})$ of this space, where $\mathbf{x}_0$ is a solution of the inhomogeneous system of equations.*

*Figure 3.9. The row space ($\mathcal{S}(\mathbf{A})$), column space ($\mathcal{O}(\mathbf{A})$) and null space ($\mathcal{N}(\mathbf{A})$) of the matrix $\mathbf{A}$.*

*Figure 3.10. The null space, the row space, and the column space, as well as a solution each of the homogeneous $\mathbf{A}\mathbf{y} = \mathbf{0}$ and the inhomogeneous $\mathbf{A}\mathbf{x} = \mathbf{b}$ system of equations in the leaf diagram.*

### Linear Independence of Vectors

Questions related to the solution of linear systems of equations and the linear independence or dependence of vectors are closely related to each other.

The moral of the previous Example 3.19 can also be summarized as follows: a vector $\mathbf{w}$ is independent of the column vectors of matrix $\mathbf{A}$, i.e., of the vector system $\{ \mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n \}$, if and only if the system of equations $[\mathbf{A}|\mathbf{w}]$ is not solvable.

To decide the linear independence of a vector system $\{ \mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n \}$, we must solve the homogeneous linear system of equations
$$x_1 \mathbf{a}_1 + x_2 \mathbf{a}_2 + \cdots + x_n \mathbf{a}_n = \mathbf{0}.$$
If it has a non-trivial solution, then the vector system is linearly dependent, otherwise it is linearly independent. This proves the following equivalences:

**Corollary 3.20 (Deciding Linear Independence).** *Consider the matrix $\mathbf{A} = \begin{bmatrix} \mathbf{a}_1 & \mathbf{a}_2 & \ldots & \mathbf{a}_k \end{bmatrix}$! The following statements are equivalent:*
- a) *the vectors $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_k$ are linearly independent;*
- b) *the homogeneous linear system of equations with coefficient matrix $\mathbf{A}$ has no solution other than the trivial one;*
- c) *every column of the row echelon form of $\mathbf{A}$ has a pivot, i.e., $\operatorname{r}(\mathbf{A}) = k$.*

**Example 3.21 (Deciding Linear Independence of Vectors).** *Show that the 4-dimensional vectors $(1, 2, 3, 4)$, $(0, 1, 0, 1)$ and $(1, 1, 1, 0)$ are linearly independent.*

*Solution.* The matrix formed from the vectors and its row echelon form
$$\begin{bmatrix} 1 & 0 & 1 \\ 2 & 1 & 1 \\ 3 & 0 & 1 \\ 4 & 1 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & -2 \\ 0 & 0 & 0 \end{bmatrix},$$
which shows that the homogeneous linear system of equations has only a single solution, i.e., the column vectors are linearly independent. $\square$

### Exercises

**3.1.•** *True – False.* Which of the following statements are true, which are false?
- a) If a system of equations with 10 unknowns consists of 6 equations, then it has infinitely many solutions.
- b) If a system of equations with 10 unknowns consists of 6 equations, i.e., it is underdetermined, then it may have infinitely many solutions, but it is also possible that it only has one.
- c) If a system of equations with 15 unknowns consists of 20 equations, i.e., it is overdetermined, then it is certainly not solvable!
- d) If a system of equations with 15 unknowns consists of 20 equations, then it cannot have infinitely many solutions.

**3.2.•** *Properties of subspaces: true – false.*
- a) The intersection of any three subspaces of $\mathbb{R}^n$ is a subspace.
- b) If subspace $\mathcal{U}$ is a subspace of both subspace $\mathcal{V}$ and subspace $\mathcal{W}$, then it is also a subspace of their intersection.
- c) The union of subspaces is a subspace.
- d) The zero vector is an element of every subspace.
- e) Every subspace has at least one non-zero vector.

**3.3.•** *Vector spaces and systems of equations: true – false.*
- a) The solutions of a system of linear equations form a vector space.
- b) The solutions of a homogeneous linear system of equations form a vector space.
- c) With a fixed matrix $\mathbf{A}$, the vectors $\mathbf{b}$ for which the system of equations $[\mathbf{A}|\mathbf{b}]$ is consistent form a vector space.
- d) The set of vectors obtained as the difference of the solution vectors of a system of equations forms a vector space.

**3.4.•** *Solvability: true – false.*
- a) The system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is solvable if and only if $\mathbf{b}$ is produced as a linear combination of the columns of $\mathbf{A}$.
- b) The difference of any two solutions of the system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is a solution of the homogeneous system of equations $[\mathbf{A}|\mathbf{0}]$.
- c) Any solution of the system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is produced as the difference of two solutions of the homogeneous system of equations with matrix $[\mathbf{A}|\mathbf{0}]$.
- d) The system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is solvable if and only if $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant \operatorname{r}(\mathbf{A})$.
- e) The $n$-unknown system of equations with matrix $[\mathbf{A}|\mathbf{b}]$ is uniquely solvable if and only if $\operatorname{r}(\mathbf{A}) = n$.

**3.5.** Do the following sets of vectors form a subspace in $\mathbb{R}^3$?
- a) $\{ \mathbf{x} \in \mathbb{R}^3 : |\mathbf{x}| = 1 \}$
- b) $\{ (x, y, z) : x + 2y - 3z = 0 \}$
- c) $\{ (x, y, z) : x + 2y - 3z = 1 \}$
- d) $\{ (x, y, z) : x = 2t, y = t, z = 0, t \in \mathbb{R} \}$
- e) $\{ (x, y, z) : x^2 + y^2 + z^2 = 0 \}$
- f) $\{ (x, y, z) : x^3 + y^3 + z^3 = 0 \}$

**3.6.** Prove that a set $\mathcal{W}$ of vectors of a vector space $\mathcal{V}$ is a subspace in $\mathcal{V}$ if and only if any linear combination of the vectors in $\mathcal{W}$ is in $\mathcal{W}$.

**3.7.•** What can be the rank $\operatorname{r}(\mathbf{A}|\mathbf{b})$, if we know about the system of equations with augmented matrix $[\mathbf{A}|\mathbf{b}]$ that
- a) it has 2 unknowns and the number of its solutions is infinite;
- b) it is inconsistent, and $\operatorname{r}(\mathbf{A}) = 4$;
- c) it has a single solution and $\mathbf{A}$ is $5 \times 3$;
- d) it is inconsistent, has $n$ unknowns and consists of 2 equations.

**3.8.** We know about a system of linear equations that $(1, 2, 3)$ and $(0, 1, 3)$ are also its solution vectors. Give two more solution vectors! What can the rank of the coefficient matrix be? And what can the rank be if the system of equations is homogeneous?

**3.9.•** *Solutions of an inhomogeneous linear system of equations.* I try to check the solution of a four-unknown linear system of equations using a computer, but something else comes out. My own result is this:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + s\begin{bmatrix} 1 \\ 0 \\ -2 \\ -1 \end{bmatrix} + t\begin{bmatrix} 1 \\ 1 \\ -3 \\ -2 \end{bmatrix},$$
the computer's is this:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 2 \\ 0 \end{bmatrix} + s\begin{bmatrix} -2 \\ 1 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} 3 \\ -2 \\ 0 \\ 1 \end{bmatrix}.$$
Can both results be correct?

**3.10.** *Linear combination of solutions.* Give a new proof for Theorem 3.8 using the row model.

**3.11.** *Solutions of homogeneous and inhomogeneous systems of equations.* Give a new proof formulated in the column model for Theorem 3.16.

**3.12.** *Subspaces of $\mathbb{F}_2^3$.* List all subspaces of $\mathbb{F}_2^3$ (for this we can call upon the help of the figure below, which illustrates the vectors of the vector space $\mathbb{F}_2^3$).



*Figure. The 8 vectors of the $\mathbb{F}_2^3$ vector space on the vertices of a unit cube: $(0,0,0)$, $(1,0,0)$, $(0,1,0)$, $(0,0,1)$, $(1,1,0)$, $(1,0,1)$, $(0,1,1)$, $(1,1,1)$.*

## Properties of subspaces and systems of equations

*In this section, we examine the properties of subspaces and the relationship of subspaces that arise in connection with systems of equations. The relationship between the four fundamental subspaces associated with the coefficient matrix is particularly important.*

### Row and column space

We will track what happens to the vectors in the row space and column space of a matrix during elementary row operations.

**Theorem 3.22 (Effect of elementary row operations on row and column vectors).** *During elementary row operations, the row space does not change, and the column vectors preserve their linear relationships.*

*Proof.* Let the row vectors of $\mathbf{A}$ be $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_m$ and let $\mathbf{u}$ be an arbitrary vector in the row space, i.e., with some scalars $c_1, c_2, \ldots, c_m$
$$\mathbf{u} = c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 + \ldots + c_m \mathbf{v}_m.$$
We show that $\mathbf{u}$ remains in the row space even after elementary row operations. For row swapping, this is obvious. If we multiply a row (say, the first) by a scalar $d \neq 0$, then
$$\mathbf{u} = \frac{c_1}{d}(d\mathbf{v}_1) + c_2 \mathbf{v}_2 + \ldots + c_m \mathbf{v}_m,$$
for the addition operation (say, adding $d$ times the first row to the second row)
$$\mathbf{u} = (c_1 - c_2 d)\mathbf{v}_1 + c_2(\mathbf{v}_2 + d\mathbf{v}_1) + \ldots + c_m \mathbf{v}_m.$$
So $\mathbf{u}$ is an element of the new row space in every case. The fact that the new row space is not broader is justified by the fact that the inverse of every row operation is also a row operation, so every vector of the new row space is also a vector of the original one.

It is obvious that if there is a linear relationship $\mathbf{a}_1 = c\mathbf{a}_2 + d\mathbf{a}_3$ between the column vectors $\mathbf{a}_1$, $\mathbf{a}_2$ and $\mathbf{a}_3$, then this is preserved during elementary row operations, and the same is true for any other arbitrary linear relationship. The existence of the inverse of the row operation justifies that linear independence between columns is also preserved during elementary row operations. $\square$

**Corollary 3.23 (Vectors of the echelon form of a matrix).** *Let $\mathbf{B}$ be an echelon form of the matrix $\mathbf{A}$. Then*
1. *the row space of $\mathbf{A}$ and $\mathbf{B}$ coincide,*
2. *the linear relationships between the column vectors of $\mathbf{A}$ are identical to those between the corresponding columns of $\mathbf{B}$,*
3. *the non-zero row vectors of $\mathbf{B}$ are linearly independent,*
4. *the column vectors of the pivot elements are linearly independent in both $\mathbf{A}$ and $\mathbf{B}$.*

We leave the proof to the Reader (see Exercise 3.13).

### Basis

Applying elementary row operations, we found linearly independent vectors in the row space and column space of a matrix that span the given space. We already showed in Theorem 1.9 that every vector in the space can be produced as a linear combination of any three linearly independent vectors in three-dimensional space. In other words, this means that three linearly independent vectors of the space span the space. Such triads of vectors, which we took as the basis vectors of a coordinate system, are called a basis. These lead to the following definition.

**Definition 3.24 (Basis).** *By a basis of a vector space $\mathcal{V}$, we mean a system of vectors which*
1. *is linearly independent and*
2. *spans the space $\mathcal{V}$ (i.e., is a generating system).*

▶ The *standard basis* is an $n$-element basis of $\mathbb{R}^n$.
▶ We will show that every basis of $\mathbb{R}^n$ is $n$-element, and that the basis of any of its non-trivial subspaces has fewer than $n$ elements.
▶ The elements of a basis are often given and used not in an unordered set, but ordered. It is customary to speak of an *ordered basis* in such cases, but in practice we most often omit this adjective.
▶ If we choose $n$ vectors in $\mathbb{R}^n$ randomly and independently of each other (e.g. from a unit sphere, or from the unit vectors) according to a uniform distribution, then these vectors will be independent with probability 1, i.e., they form a basis.
▶ The basis of the zero space is the empty set, since a linearly independent system cannot contain the only vector that can be selected from this space, the zero vector. Just as it is useful to define the sum of zero numbers as 0 and the product of zero numbers as 1, it is similarly useful to define the sum (or any other linear combination) of zero vectors as the zero vector, so the vector system generated by the empty set of vectors consists of the zero vector.

**Proposition 3.25 (Equivalent definitions of a basis).** *Let $\mathcal{V}$ be an arbitrary vector space, and let $\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \} \subseteq \mathcal{V}$ be a set of vectors. The following statements are equivalent:*
1. *$\mathcal{B}$ is a basis (linearly independent generating system);*
2. *$\mathcal{B}$ is a minimal sized generating system (spans $\mathcal{V}$);*
3. *$\mathcal{B}$ is a maximal sized set consisting of linearly independent vectors in $\mathcal{V}$.*

*Proof.* It is enough to prove that a minimal sized generating system consists of independent vectors, and that a maximal sized independent system is a generator.

Let $\mathcal{B}$ be a minimal sized generator. If it were not independent, then by omitting a vector that is a linear combination of the others, they would generate the same space, but this way we would get an even smaller sized generator.

Let's now take $\mathcal{B}$ as a maximal independent system. If it were not a generator, then we could add a vector independent of it, meaning there would be an independent set of larger size. $\square$

### Determining a basis and the coordinate form of a vector with respect to it

In the following, we examine how to write a basis of a (sub)space, and the coordinate form of a vector with respect to it.

**Example 3.26 (Determining the basis of a subspace).** *Determine a basis of the subspace spanned by the vectors $(1, 1, 0, -2)$, $(2, 3, 3, -2)$, $(1, 2, 3, 0)$ and $(1, 3, 6, 2)$!*

*Solution. First solution:* The non-zero rows of some row echelon form of the matrix formed from the given vectors as row vectors give a basis of the subspace:
$$\begin{bmatrix} 1 & 1 & 0 & -2 \\ 2 & 3 & 3 & -2 \\ 1 & 2 & 3 & 0 \\ 1 & 3 & 6 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 1 & 0 & -2 \\ 0 & 1 & 3 & 2 \\ 0 & 1 & 3 & 2 \\ 0 & 2 & 6 & 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 1 & 0 & -2 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
The basis vectors are $(1, 1, 0, -2)$, $(0, 1, 3, 2)$.

*Second solution:* If we want to choose the basis from the given vectors, let's form a matrix from these vectors as column vectors. In its echelon form, the columns of the pivot elements are linearly independent vectors. The column vectors corresponding to them in the original matrix form the basis of the column space (see Theorem 3.22 and statement 4 of Corollary 3.23).
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 3 & 3 & 6 \\ 0 & 2 & 2 & 4 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
So out of the given four vectors, the first two, i.e., vectors $(1, 1, 0, -2)$ and $(2, 3, 3, -2)$ form a basis. If we write the given vectors in the matrix in a different order, we can get another basis. $\square$

**Example 3.27 (Writing a vector as a linear combination of basis vectors).** *Express each of the four vectors given in the previous exercise as a linear combination of the basis vectors of the subspace they span!*

*Solution.* In the second solution of the previous exercise, we found a basis among the given vectors. Since we worked with column vectors, the linear relationship between the vectors can be read from any echelon form: most conveniently from the *reduced* row echelon form. We therefore continue the elimination steps of the previous example:
$$\begin{bmatrix} 1 & 2 & 1 & 1 \\ 1 & 3 & 2 & 3 \\ 0 & 3 & 3 & 6 \\ -2 & -2 & 0 & 2 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 2 & 1 & 1 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}. \tag{3.1}$$
From the reduced row echelon form, we see that for example the third column is the difference of the second and the first. Based on this, the original vectors written as linear combinations of the basis vectors:
$$\begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix} = -\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix} + \begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} = -3\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix} + 2\begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix}.$$
For choosing another basis, see Exercise 3.15. $\square$

When introducing the coordinate system, we did the same thing as here in the previous example: every vector can be produced as a linear combination of the elements of a basis, and the coordinate form of this vector with respect to this basis consists of the constants of the linear combination.

In a vector space, we can also examine several bases, and the coordinate forms of vectors can differ in different bases. To avoid misunderstandings, the sign of the basis is denoted in the index of the coordinate form. For example, if the coordinate forms of a vector $\mathbf{v}$ in the standard basis and in basis $\mathcal{B}$ are $(4, 3)$ and $(0, 5)$, respectively, then we write
$$\mathbf{v} = (4, 3) = (0, 5)_{\mathcal{B}}, \quad \text{or with matrix notation} \quad \mathbf{v} = \begin{bmatrix} 4 \\ 3 \end{bmatrix} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}_{\mathcal{B}}.$$
If we want to refer generally – without the concrete coordinates – to the coordinate form of a vector $\mathbf{v}$ in basis $\mathcal{B}$, then we use the $[\mathbf{v}]_{\mathcal{B}}$ or the $(\mathbf{v})_{\mathcal{B}}$ form. Thus we can also write
$$[\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}_{\mathcal{B}}, \quad \text{or more simply, that} \quad [\mathbf{v}]_{\mathcal{B}} = \begin{bmatrix} 0 \\ 5 \end{bmatrix}.$$

**Example 3.28 (Coordinate form of a vector in basis $\mathcal{B}$).** *Write the coordinate form of the four vectors $\mathbf{v}_1 = (1, 1, 0, -2)$, $\mathbf{v}_2 = (2, 3, 3, -2)$, $\mathbf{v}_3 = (1, 2, 3, 0)$ and $\mathbf{v}_4 = (1, 3, 6, 2)$, which also appeared in Examples 3.26 and 3.27, with respect to the basis $\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2 \}$ in the subspace they span!*

*Solution.* In the previous example, the matrix consisting of the non-zero rows of the reduced row echelon form in formula (3.1)
$$\begin{bmatrix} 1 & 0 & -1 & -3 \\ 0 & 1 & 1 & 2 \end{bmatrix}$$
shows that the coordinates of these four vectors in basis $\mathcal{B}$ are respectively
$$\mathbf{v}_1 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_2 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_3 = \begin{bmatrix} -1 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_4 = \begin{bmatrix} -3 \\ 2 \end{bmatrix}_{\mathcal{B}}.$$
This follows from point 2 of Proposition 3.23, according to which the linear relationships between the columns of the reduced row echelon form match the linear relationships between the columns of the original matrix. $\square$

### Dimension and rank

Previously, we looked for a basis for a vector space. We found that the basis always consisted of the same number of vectors.

**Theorem 3.29 (Basis Theorem).** *If the vector space $\mathcal{V}$ has a basis consisting of finitely many vectors, then any two of its bases consist of the same number of vectors.*

*Proof.* Suppose that the vector space $\mathcal{V}$ has two bases
$$\mathcal{B} = \{ \mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k \}, \text{ and } \mathcal{C} = \{ \mathbf{w}_1, \mathbf{w}_2, \ldots, \mathbf{w}_r \},$$
which do not consist of the same number of vectors, i.e., for example $k < r$. Since $\mathcal{B}$ is a basis in $\mathcal{V}$, the vectors of basis $\mathcal{C}$ can also be expressed as their linear combinations, meaning there exist scalars $a_{ij}$ such that
$$\mathbf{w}_i = a_{i1}\mathbf{v}_1 + a_{i2}\mathbf{v}_2 + \ldots + a_{ik}\mathbf{v}_k, \quad (i = 1, \ldots, r). \tag{3.2}$$
Since the vectors of basis $\mathcal{C}$ are linearly independent, the equality
$$c_1\mathbf{w}_1 + c_2\mathbf{w}_2 + \ldots + c_r\mathbf{w}_r = \mathbf{0} \tag{3.3}$$
holds only for the constants $c_1 = c_2 = \ldots = c_k = 0$. Substituting the equalities of (3.2) into equation (3.3)
$$c_1(a_{11}\mathbf{v}_1 + a_{12}\mathbf{v}_2 + \ldots + a_{1k}\mathbf{v}_k) + c_2(a_{21}\mathbf{v}_1 + a_{22}\mathbf{v}_2 + \ldots + a_{2k}\mathbf{v}_k) + \ldots + c_r(a_{r1}\mathbf{v}_1 + a_{r2}\mathbf{v}_2 + \ldots + a_{rk}\mathbf{v}_k) = \mathbf{0},$$
and after rearranging according to the vectors of $\mathcal{B}$, we get that
$$(a_{11}c_1 + a_{21}c_2 + \ldots + a_{r1}c_r)\mathbf{v}_1 + (a_{12}c_1 + a_{22}c_2 + \ldots + a_{r2}c_r)\mathbf{v}_2 + \ldots + (a_{1k}c_1 + a_{2k}c_2 + \ldots + a_{rk}c_r)\mathbf{v}_k = \mathbf{0}.$$
This means that the only solution to the homogeneous linear system of equations
$$\begin{alignedat}{9}
a_{11}c_1 &{}+{}& a_{21}c_2 &{}+{}& \ldots &{}+{}& a_{r1}c_r &{}={}& 0 \\
a_{12}c_1 &{}+{}& a_{22}c_2 &{}+{}& \ldots &{}+{}& a_{r2}c_r &{}={}& 0 \\
\vdots && \vdots && && \vdots && \;\,\vdots \\
a_{1k}c_1 &{}+{}& a_{2k}c_2 &{}+{}& \ldots &{}+{}& a_{rk}c_r &{}={}& 0
\end{alignedat}$$
is $c_1 = c_2 = \ldots = c_k = 0$. However, according to Theorem 3.6, this cannot be fulfilled, since the number of equations in the above homogeneous

system of equations is smaller than its number of unknowns ($k < r$). This contradiction proves that our indirect assumption was incorrect, so the two bases consist of the same number of vectors. $\square$

This theorem gives meaning to the following definition:

**Definition 3.30 (Dimension).** *If the vector space $\mathcal{V}$ has a finite basis, then by its dimension we mean the number of elements in a basis of it, which is denoted by $\dim \mathcal{V}$.*

▶ The standard basis of $\mathbb{R}^n$ consists of exactly $n$ vectors, so $\dim \mathbb{R}^n = n$.
▶ The basis of the zero space is the empty set, which consists of 0 elements, so this space is considered zero-dimensional.
▶ If we consider a plane passing through the origin in three-dimensional space, we see that any two independent vectors of it span it, meaning every basis of it has two elements. This plane is also 2-dimensional according to this definition.
▶ Similarly, a line passing through the origin is spanned by every non-zero vector of it, as a one-element basis. This is a 1-dimensional subspace of the space.

By the *transpose* of an $m \times n$ matrix $\mathbf{A}$, we mean the $n \times m$ matrix denoted by $\mathbf{A}^\mathsf{T}$, which is obtained by swapping the rows and columns of $\mathbf{A}$. That is
$$\mathbf{A}^\mathsf{T} = [a_{ij}]^\mathsf{T} := [a_{ji}].$$
For example
$$\begin{bmatrix} 1 \\ 2 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 1 & 2 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 \\ 2 & 3 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 0 & 2 \\ 1 & 3 \end{bmatrix}, \quad \begin{bmatrix} 0 & 1 & 2 \\ 3 & 4 & 5 \end{bmatrix}^\mathsf{T} = \begin{bmatrix} 0 & 3 \\ 1 & 4 \\ 2 & 5 \end{bmatrix}.$$

The dimension of a subspace spanned by finitely many vectors in $\mathbb{R}^n$ can be determined by determining the rank of the matrix formed from the vectors. The following statement holds:

**Proposition 3.31 (Dimension = rank).** *The rank of a matrix, the dimension of its row space and the dimension of its column space coincide, i.e., $\operatorname{r}(\mathbf{A}) = \dim(\mathcal{S}(\mathbf{A})) = \dim(\mathcal{O}(\mathbf{A}))$. Consequently $\operatorname{r}(\mathbf{A}) = \operatorname{r}(\mathbf{A}^\mathsf{T})$.*

*Proof.* The rank of the matrix is equal to the number of non-zero rows in its echelon form. However, according to Theorem 3.23, these rows are linearly independent and span the row space, so they form a basis, so their number gives the dimension of the row space. Regarding the column space, we saw that the columns corresponding to the pivot elements are linearly independent in the original matrix and span the column space, so the dimension of this space is also equal to the rank of the matrix. The last statement follows from the fact that the row space of $\mathbf{A}$ coincides with the column space of $\mathbf{A}^\mathsf{T}$. $\square$

By the *rank* of a vector system consisting of vectors in $\mathbb{R}^n$, we mean the rank of the matrix formed from the vectors, or which is equal to this, the dimension of the subspace spanned by them. By the *nullity* of a matrix $\mathbf{A}$, denoted by $\operatorname{null}(\mathbf{A})$, we mean the dimension of its null space, so $\operatorname{null}(\mathbf{A}) = \dim(\mathcal{N}(\mathbf{A}))$.

**Example 3.32 (Calculating dimension).** *Determine the dimension of the row space and null space of the matrix $\mathbf{A}$!*
$$\mathbf{A} = \begin{bmatrix} 3 & 3 & 3 & 3 & 3 \\ 3 & 4 & 5 & 4 & 3 \\ 3 & 2 & 1 & 2 & 3 \\ 3 & 3 & 3 & 3 & 3 \end{bmatrix}$$

*Solution.* The reduced row echelon form of $\mathbf{A}$ is
$$\operatorname{rref}(\mathbf{A}) = \begin{bmatrix} 1 & 0 & -1 & 0 & 1 \\ 0 & 1 & 2 & 1 & 0 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{bmatrix}$$
From here it can be read that the rank of the matrix is 2, so the dimension of its row space is also 2. The dimension of the null space is equal to the dimension of the solution space of the system of equations, which is equal to the number of free variables, in our case this is 3. Note that the sum of the dimension of the row space and the null space is equal to the number of variables, i.e., the number of columns of the matrix, in the present example 5. $\square$

**Theorem 3.33 (Dimension Theorem (rank-nullity theorem)).** *For any real $m \times n$ matrix $\mathbf{A}$, the sum of the dimension of the row space and the dimension of the null space is $n$. By formula:*
$$\dim(\mathcal{S}(\mathbf{A})) + \dim(\mathcal{N}(\mathbf{A})) = n \qquad (\operatorname{r}(\mathbf{A}) + \operatorname{null}(\mathbf{A}) = n).$$

*Proof.* The dimension of the row space of the matrix is equal to the rank of the matrix, i.e., the number of bound variables in the system of equations with matrix $[\mathbf{A}|\mathbf{0}]$. We show that the dimension of the null space is equal to the number of free variables, so the sum of the two numbers is indeed $n$, which proves the statement (see also Proposition 3.4).

It is therefore enough to show that in a solution of a homogeneous linear system of equations produced by reduced row echelon form, the number of free variables equals the number of elements of a basis that can be selected from the null space. First let's see such a solution concretely. For example, the solution of the homogeneous linear system of equations in Example 2.35 is
$$\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\ x_5 \end{bmatrix} = \begin{bmatrix} -2s - \frac{3}{2}t - u \\ s \\ -\frac{1}{2}t \\ t \\ u \end{bmatrix} = s\begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + t\begin{bmatrix} -\frac{3}{2} \\ 0 \\ -\frac{1}{2} \\ 1 \\ 0 \end{bmatrix} + u\begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix},$$
where $x_2 = s$, $x_4 = t$ and $x_5 = u$ are the three free variables. Among the three vectors spanning the null space, $x_2 = 1$ in the first one, but $x_2 = 0$ in all the others, so the first vector is independent of the others. Similarly, it is generally true that as a result of the derivation from the reduced row echelon form, in every solution vector spanning the null space, the coordinate belonging to all free variables is 0, except for the one to which the vector belongs. This means, however, that each vector is independent of the others, meaning these vectors are independent, and since they span the null space, their number gives the dimension of the null space. $\square$

### Fundamental subspaces of a matrix and the fundamental theorem of linear algebra

We will define four fundamental subspaces of a matrix and prove their orthogonality.

**Example 3.34 (Subspace orthogonal to vectors).** *Determine all vectors in $\mathbb{R}^4$ which are orthogonal to both vectors $\mathbf{v}_1 = (1, 0, 1, 2)$ and $\mathbf{v}_2 = (-1, 2, -2, 1)$!*

*Solution.* We are looking for a vector $\mathbf{x}$ for which $\mathbf{v}_1 \cdot \mathbf{x} = 0$ and $\mathbf{v}_2 \cdot \mathbf{x} = 0$. Writing this with coordinates, we get a system of equations consisting of two equations, whose coefficient matrix and its echelon form:
$$\begin{bmatrix} 1 & 0 & 1 & 2 \\ -1 & 2 & -2 & 1 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & 1 & 2 \\ 0 & 2 & -1 & 3 \end{bmatrix},$$
from which $\mathbf{x} = (-s - 2t, (s - 3t)/2, s, t)$, i.e.,
$$\mathbf{x} = s\begin{bmatrix} -1 \\ 1/2 \\ 1 \\ 0 \end{bmatrix} + t\begin{bmatrix} -2 \\ -3/2 \\ 0 \\ 1 \end{bmatrix}.$$
The solution is therefore the null space of the matrix formed from the row vectors. $\square$

**Proposition 3.35 (Orthogonality of the row space and null space).** *Any vector $\mathbf{s}$ in the row space of a real matrix $\mathbf{A}$ and any arbitrary vector $\mathbf{x}$ in its null space are orthogonal to each other, i.e., $\mathbf{s} \cdot \mathbf{x} = 0$.*

*Proof.* The form of the $i$-th equation of the homogeneous linear system of equations with $m \times n$ coefficient matrix $\mathbf{A}$ is
$$a_{i1}x_1 + a_{i2}x_2 + \cdots + a_{in}x_n = 0, \text{ i.e., } \mathbf{a}_{i*} \cdot \mathbf{x} = 0.$$
According to this, every solution of the homogeneous linear system of equations is orthogonal to every row vector of the matrix $\mathbf{A}$. Every vector of the row space is a linear combination of the row vectors of $\mathbf{A}$ with some scalars $c_1, \ldots, c_m$. Using this
$$\begin{aligned}
\mathbf{s} \cdot \mathbf{x} &= (c_1\mathbf{a}_{1*} + c_2\mathbf{a}_{2*} + \cdots + c_m\mathbf{a}_{m*}) \cdot \mathbf{x} \\
&= c_1\mathbf{a}_{1*} \cdot \mathbf{x} + c_2\mathbf{a}_{2*} \cdot \mathbf{x} + \cdots + c_m\mathbf{a}_{m*} \cdot \mathbf{x} \\
&= c_1 0 + c_2 0 + \cdots + c_m 0 = 0. \qquad \square
\end{aligned}$$

This leads to the following definitions: two subspaces of a vector space are *orthogonal,* if no matter how we choose a vector from each of them, they are orthogonal to each other. Thus, according to the previous statement, the row space and null space of any real matrix are orthogonal to each other. More is true: the null space contains all the vectors which are orthogonal to the row space. The subspace of vectors orthogonal to subspace $\mathcal{W}$ of $\mathbb{R}^n$ is called the *orthogonal complement subspace* of $\mathcal{W}$ (or the *orthogonal complement* of $\mathcal{W}$) and is denoted by $\mathcal{W}^\perp$. The difference between the two concepts is illustrated by Figure 3.11 in 3-dimensional space.

We will see later that it is generally true that for any subspace $\mathcal{V}$, $(\mathcal{V}^\perp)^\perp = \mathcal{V}$ (see Theorem 7.43), or in other words, if $\mathcal{V}^\perp = \mathcal{W}$, then $\mathcal{W}^\perp = \mathcal{V}$. Thus we can say that two subspaces are orthogonal complement subspaces of each other, or orthogonal complements to each other.

Consider the transpose of the matrix $\mathbf{A}$! The solutions of the homogeneous linear system of equations with coefficient matrix $\mathbf{A}^\mathsf{T}$ are orthogonal to the row vectors of $\mathbf{A}^\mathsf{T}$, i.e., to the column vectors of $\mathbf{A}$. The orthogonality of these two-two subspaces is illustrated by Figure 3.12. These four subspaces will be very important in what follows as well, so we give them a name:

**Definition 3.36 (Fundamental subspaces).** *The four fundamental subspaces of a matrix are the matrix's row space, column space, null space and the null space of its transpose. Thus, the fundamental subspaces of the matrix $\mathbf{A}$ are $\mathcal{S}(\mathbf{A}) = \mathcal{O}(\mathbf{A}^\mathsf{T})$, $\mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^\mathsf{T})$, $\mathcal{N}(\mathbf{A})$, $\mathcal{N}(\mathbf{A}^\mathsf{T})$.*

**Theorem 3.37 (The fundamental theorem of linear algebra).** *The row space and null space of any real matrix are orthogonal complement subspaces of each other.*

*Proof.* We saw that the orthogonal complement subspace of the row space is the null space. Referring to Theorem 7.43 to be proven later, this means that the complement subspace of the null space is the row space, which proves the theorem. A proof not using this reference can also be given, which we leave to the Reader (see Exercise 3.27)! $\square$

▶ The statement of the theorem expressed in formula says that $\mathcal{S}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A})$, which also means at the same time that $\mathcal{N}(\mathbf{A})^\perp = \mathcal{S}(\mathbf{A})$.
▶ Applying the theorem to the matrix $\mathbf{A}^\mathsf{T}$, and using the relationship $\mathcal{O}(\mathbf{A}) = \mathcal{S}(\mathbf{A}^\mathsf{T})$, we get that $\mathcal{O}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A}^\mathsf{T})$.
▶ In Exercise 3.27, we prove that a basis $\{ \mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_k \}$ of the row space and a basis $\{ \mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{n-k} \}$ of the null space together give a basis of the space. Since every vector $\mathbf{x}$ is uniquely produced as a linear combination of these basis vectors, the decomposition of vector $\mathbf{x}$ into the sum of a vector falling in the row space and a vector falling in the null space is simultaneously unique:
$$\mathbf{x} = \underbrace{c_1\mathbf{s}_1 + \cdots + c_r\mathbf{s}_r}_{\mathbf{c}} + \underbrace{d_1\mathbf{e}_1 + \cdots + d_{n-r}\mathbf{e}_{n-r}}_{\mathbf{d}}.$$

*Figure 3.11. a) $\mathcal{U}$ and $\mathcal{V}$ are two mutually orthogonal 1-dimensional subspaces in 3-dimensional space; b) A subspace and its orthogonal complement subspace: $\mathcal{U}$ (a 1-dimensional subspace) and $\mathcal{U}^\perp$, its orthogonal complement is 2-dimensional.*

*Figure 3.12. The row space of matrix $\mathbf{A}$ is orthogonal to its null space, its column space to the null space of $\mathbf{A}^\mathsf{T}$. The two arcs drawn denote the orthogonality of the subspaces.*

*Figure 3.13. The fundamental theorem of linear algebra: the row space and null space of matrix $\mathbf{A}$ are orthogonal complement subspaces. According to this, any vector of the row space is orthogonal to any vector of the null space, and any vector of $\mathbb{R}^n$ uniquely decomposes into the sum of a vector falling into the row space and one falling into the null space.*

The consequence of the previous remarks and the fundamental theorem of linear algebra is the following theorem:

**Theorem 3.38 (The four fundamental subspaces).** *Consider the $m \times n$ real matrix $\mathbf{A}$. Then the following statements hold:*
- a) *$\mathcal{S}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A})$, $\mathcal{O}(\mathbf{A})^\perp = \mathcal{N}(\mathbf{A}^\mathsf{T})$.*
- b) *every vector of $\mathbb{R}^n$ uniquely decomposes into the sum of an $\mathcal{S}(\mathbf{A})$- and an $\mathcal{N}(\mathbf{A})$-vector,*
- c) *every vector of $\mathbb{R}^m$ uniquely decomposes into the sum of an $\mathcal{O}(\mathbf{A})$- and an $\mathcal{N}(\mathbf{A}^\mathsf{T})$-vector.*

### Characterization of the solutions of a linear system of equations

Building on what we have done so far, we get a beautiful description of the solutions of linear systems of equations.

**Theorem 3.39 (Solutions of a linear system of equations).** *The following are true for every consistent linear system of equations with real coefficients:*
- a) *a single solution falls into the row space of the coefficient matrix;*
- b) *this solution falling into the row space has the smallest absolute value among the solutions;*
- c) *all solutions are produced such that we add all solutions of the homogeneous part to the solution falling into the row space.*

*Proof.* The theorem is meaningless for homogeneous linear systems of equations, since then the solutions give the null space, and since its intersection with the row space consists only of the zero vector, the zero vector falls into the row space, which is the solution with the smallest absolute value.

a) Suppose that $\mathbf{x}_1$ and $\mathbf{x}_2$ are two solutions of the system of equations with matrix $[\mathbf{A}|\mathbf{b}]$, and both fall into the row space. The form of the $i$-th equation is $\mathbf{a}_{i*} \cdot \mathbf{x} = b_i$, so $\mathbf{a}_{i*} \cdot \mathbf{x}_1 = b_i$ and $\mathbf{a}_{i*} \cdot \mathbf{x}_2 = b_i$ also hold for all values $i = 1, 2, \ldots m$. The difference of the two solutions also falls into the row space, since a linear combination of row space vectors falls into the row space. Then, however, for all $i$
$$\mathbf{a}_{i*} \cdot (\mathbf{x}_1 - \mathbf{x}_2) = b_i - b_i = 0,$$
meaning $\mathbf{x}_1 - \mathbf{x}_2$ is a solution of the homogeneous system of equations, so it falls into the null space. Its intersection with the row space contains only the zero vector, so $\mathbf{x}_1 - \mathbf{x}_2 = \mathbf{0}$, meaning $\mathbf{x}_1 = \mathbf{x}_2$.

We show that there is always a solution falling into the row space. Let $\mathbf{x}$ be an arbitrary solution, and consider its uniquely existing decomposition into the sum of a row space vector and a null space vector, i.e., let
$$\mathbf{x} = \mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}.$$
Writing this solution vector into the $i$-th equation we get that
$$b_i = \mathbf{a}_{i*} \cdot \mathbf{x} = \mathbf{a}_{i*} \cdot (\mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}) = \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{S} + \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{N} = \mathbf{a}_{i*} \cdot \mathbf{x}_\mathcal{S}.$$
So the row space component of any solution is also a solution to the system of equations! At the same time we also proved that all solutions are the sum of this row space solution and a solution of the homogeneous one, on the other hand, that adding any null space vector to the solution $\mathbf{x}_\mathcal{S}$, we get a solution of the system of equations, so we proved statement c) as well.

Due to the orthogonality of the row space and the null space, the vectors of the decomposition $\mathbf{x} = \mathbf{x}_\mathcal{S} + \mathbf{x}_\mathcal{N}$ are orthogonal, i.e., $\mathbf{x}_\mathcal{S} \perp \mathbf{x}_\mathcal{N}$. We can therefore use the Pythagorean theorem:
$$\mathbf{x}^2 = \mathbf{x}_\mathcal{S}^2 + \mathbf{x}_\mathcal{N}^2 \geq \mathbf{x}_\mathcal{S}^2, \text{ i.e., } |\mathbf{x}| \geq |\mathbf{x}_\mathcal{S}|.$$
So therefore the absolute value of every solution is greater than or equal to the absolute value of the row space solution, which proves statement b). $\square$

The existence of a single solution falling into the row space suggests that every solvable system of equations can be completed by adding further equations to a system of equations which already has only a single solution, the one falling into the row space. This is indeed true.

**Example 3.40 (Row space solution of a linear system of equations).** *Determine the minimum absolute value solution of the*
$$\begin{alignedat}{9}
x &{}+{}& y &{}+{}& z &{}+{}& 3u &{}+{}& 2w &{}={}& 4 \\
x &{}+{}& 2y &{}+{}& z &{}+{}& 5u &{}+{}& 2w &{}={}& 5 \\
2x &{}+{}& 3y &{}+{}& z &{}+{}& 8u &{}+{}& 3w &{}={}& 7 \\
2x &{}+{}& 3y &{}+{}& 2z &{}+{}& 8u &{}+{}& 4w &{}={}& 9
\end{alignedat}$$
*system of equations! Add further equation(s) to the system of equations such that the system of equations thus obtained has only this as its single solution!*

*Solution.* First let's solve the system of equations! Its reduced row echelon form easily follows from the augmented matrix:
$$\left[\begin{array}{ccccc|c} 1 & 1 & 1 & 3 & 2 & 4 \\ 1 & 2 & 1 & 5 & 2 & 5 \\ 2 & 3 & 1 & 8 & 3 & 7 \\ 2 & 3 & 2 & 8 & 4 & 9 \end{array}\right] \Longrightarrow \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 2 & 0 & 1 \\ 0 & 0 & 1 & 0 & 0 & 2 \end{array}\right]$$
Thus the solution is:
$$(x, y, z, u, w) = (1, 1, 2, 0, 0) + (-1, -2, 0, 1, 0)u + (-1, 0, -1, 0, 1)w.$$
Since the row space is orthogonal to the null space, and we are looking for a solution falling into the row space, this solution must be orthogonal to the vectors spanning the null space, i.e., to the vector $(-1, -2, 0, 1, 0)$ and $(-1, 0, -1, 0, 1)$. Thus the following two equations must be added to the original system of equations, or for simplicity rather to the system of equations according to the reduced row echelon form:

$$\begin{alignedat}{9}
-x &{}-{}& 2y &&&{}+{}& u &&&{}={}& 0 \\
-x &&&{}-{}& z &&&{}+{}& w &{}={}& 0
\end{alignedat}$$
Thus the augmented matrix of the completed system of equations and its reduced row echelon form
$$\left[\begin{array}{ccccc|c} 1 & 0 & 0 & 1 & 1 & 1 \\ 0 & 1 & 0 & 2 & 0 & 1 \\ 0 & 0 & 1 & 0 & 1 & 2 \\ -1 & -2 & 0 & 1 & 0 & 0 \\ -1 & 0 & -1 & 0 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{ccccc|c} 1 & 0 & 0 & 0 & 0 & -4/17 \\ 0 & 1 & 0 & 0 & 0 & 5/17 \\ 0 & 0 & 1 & 0 & 0 & 19/17 \\ 0 & 0 & 0 & 1 & 0 & 6/17 \\ 0 & 0 & 0 & 0 & 1 & 15/17 \end{array}\right],$$
so the sought solution is $(-4/17, 5/17, 19/17, 6/17, 15/17)$. $\square$

### Elementary basis transformation

In the previous paragraphs we saw that as a result of elementary row operations we get the coordinate form of the columns of the original matrix written in another basis. This gives the idea to see from another perspective what happens when we choose a pivot element in a column, and eliminate the other elements of the column.

The essence can also be illustrated on a two-column matrix: let the two columns be $\mathbf{a}$ and $\mathbf{b}$, the basis in which these vectors are given is the standard basis. Suppose that $a_i \neq 0$. Then choosing the position of $a_i$, the result of the elimination is:
$$\begin{bmatrix} a_1 & b_1 \\ a_2 & b_2 \\ \vdots & \vdots \\ a_i & b_i \\ \vdots & \vdots \\ a_m & b_m \end{bmatrix} \Longrightarrow \begin{bmatrix} 0 & b_1 - \frac{b_i}{a_i}a_1 \\ 0 & b_2 - \frac{b_i}{a_i}a_2 \\ \vdots & \vdots \\ 1 & \frac{b_i}{a_i} \\ \vdots & \vdots \\ 0 & b_m - \frac{b_i}{a_i}a_m \end{bmatrix}$$
We show that after this transformation both vectors are written in the
$$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{i-1}, \mathbf{a}, \mathbf{e}_{i+1}, \ldots, \mathbf{e}_m$$
basis. This is obvious for the vector $\mathbf{a}$. Let's look at the vector $\mathbf{b}$! Express the vector $\mathbf{e}_i$ from the expression $\mathbf{a} = a_1\mathbf{e}_1 + \ldots + a_i\mathbf{e}_i + \ldots + a_m\mathbf{e}_m$:
$$\mathbf{e}_i = -\frac{1}{a_i}a_1\mathbf{e}_1 - \frac{1}{a_i}a_2\mathbf{e}_2 - \ldots + \frac{1}{a_i}\mathbf{a} - \ldots - \frac{1}{a_i}a_m\mathbf{e}_m.$$
We substitute this into the expression $\mathbf{b} = b_1\mathbf{e}_1 + \ldots + b_i\mathbf{e}_i + \ldots + b_m\mathbf{e}_m$:
$$\mathbf{b} = \left(b_1 - \frac{b_i}{a_i}a_1\right)\mathbf{e}_1 + \left(b_2 - \frac{b_i}{a_i}a_2\right)\mathbf{e}_2 + \ldots + \frac{b_i}{a_i}\mathbf{a} + \ldots + \left(b_m - \frac{b_i}{a_i}a_m\right)\mathbf{e}_m.$$
So indeed, the coordinate form of $\mathbf{b}$ in this modified basis is exactly what we got in the second column after the elimination of the original matrix. The step discussed just now is called an *elementary basis transformation*, because we consider transitioning to another basis as an elementary step, when we swap a single basis vector. To denote the steps, we write the matrix together with a header in a table, the basis vectors $\mathbf{e}_1, \ldots, \mathbf{e}_m$ go in front of the rows, the names of the column vectors go above the columns.

| | $\mathbf{a}$ | $\mathbf{b}$ |
|---|---|---|
| $\mathbf{e}_1$ | $a_1$ | $b_1$ |
| $\mathbf{e}_2$ | $a_2$ | $b_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_i$ | $a_i$ | $b_i$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_m$ | $a_m$ | $b_m$ |

$\Longrightarrow$

| | $\mathbf{a}$ | $\mathbf{b}$ |
|---|---|---|
| $\mathbf{e}_1$ | $0$ | $b_1 - \frac{b_i}{a_i}a_1$ |
| $\mathbf{e}_2$ | $0$ | $b_2 - \frac{b_i}{a_i}a_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{a}$ | $1$ | $\frac{b_i}{a_i}$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\mathbf{e}_m$ | $0$ | $b_m - \frac{b_i}{a_i}a_m$ |

In summary, and formulating the above more generally at the same time:


**Theorem 3.41 (Elementary basis transformation).** *Suppose that the $i$-th coordinate of the vector $\mathbf{a}$ with respect to the basis $E = \{ \mathbf{e}_1, \ldots, \mathbf{e}_m \}$ is $a_i \neq 0$. Then the vectors*
$$\mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{i-1}, \mathbf{a}, \mathbf{e}_{i+1}, \ldots, \mathbf{e}_m$$
*also form a basis of the subspace $\mathcal{E}$ generated by $E$. The coordinate form of an arbitrary vector $\mathbf{b}$ of $\mathcal{E}$ in this basis can be obtained by elementary row operations if we choose $a_i$ as the pivot element.*

The elementary basis transformation is suitable to illuminate the problems solvable by reducing to a row echelon form from another perspective through the change of bases. As an example, let us examine what happens during the solution of a system of equations. We note that here there is no need for row swaps, because we can freely choose a row from a column in whose header the original basis vector still appears.

**Example 3.42 (Solving a system of equations by elementary basis transformation).** *Let us solve the system of equations solved in Examples 2.32 and 2.39 by elementary basis transformation.*

*Solution.* We merge the tables, we always indicate the current basis in the row headers, we always write out the column headers for better understanding, and we mark the selected pivot elements separately:

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{e}_1$ | **1** | 1 | 2 | 0 |
| $\mathbf{e}_2$ | 2 | 2 | 3 | 2 |
| $\mathbf{e}_3$ | 1 | 3 | 3 | 4 |
| $\mathbf{e}_4$ | 1 | 2 | 1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 1 | 2 | 0 |
| $\mathbf{e}_2$ | 0 | 0 | -1 | 2 |
| $\mathbf{e}_3$ | 0 | 2 | 1 | 4 |
| $\mathbf{e}_4$ | 0 | **1** | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 0 | 3 | -5 |
| $\mathbf{e}_2$ | 0 | 0 | -1 | 2 |
| $\mathbf{e}_3$ | 0 | 0 | **3** | -6 |
| $\mathbf{a}_2$ | 0 | 1 | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{a}_1$ | $\mathbf{a}_2$ | $\mathbf{a}_3$ | $\mathbf{b}$ |
|---|---|---|---|---|
| $\mathbf{a}_1$ | 1 | 0 | 0 | 1 |
| $\mathbf{e}_2$ | 0 | 0 | 0 | 0 |
| $\mathbf{a}_3$ | 0 | 0 | 1 | -2 |
| $\mathbf{a}_2$ | 0 | 1 | 0 | 3 |

The table can be simplified a bit, it is unnecessary to write out the column that contains only a standard unit vector, and in the row and column headers it is enough to just write the variable that belongs to the column vector taken into the basis. Thus we obtain the following:

| | $x$ | $y$ | $z$ | $\mathbf{b}$ |
|---|---|---|---|---|
| | **1** | 1 | 2 | 0 |
| | 2 | 2 | 3 | 2 |
| | 1 | 3 | 3 | 4 |
| | 1 | 2 | 1 | 5 |

$\Longrightarrow$

| | $y$ | $z$ | $\mathbf{b}$ |
|---|---|---|---|
| $x$ | 1 | 2 | 0 |
| | 0 | -1 | 2 |
| | 2 | 1 | 4 |
| | **1** | -1 | 5 |

$\Longrightarrow$

| | $z$ | $\mathbf{b}$ |
|---|---|---|
| $x$ | 3 | -5 |
| | -1 | 2 |
| | **3** | -6 |
| $y$ | -1 | 5 |

$\Longrightarrow$

| | $\mathbf{b}$ |
|---|---|
| $x$ | 1 |
| | 0 |
| $z$ | -2 |
| $y$ | 3 |

So the solution of the system of equations is $x = 1$, $y = 3$, $z = -2$. $\square$

### Exercises

**3.13.** *The vectors of a row echelon form.* Prove Corollary 3.23: if $\mathbf{B}$ is a row echelon form of the matrix $\mathbf{A}$, then
1. the row space of $\mathbf{A}$ and $\mathbf{B}$ are the same,
2. the non-zero row vectors of $\mathbf{B}$ are linearly independent,
3. the column vectors of the pivot elements are linearly independent in both $\mathbf{A}$ and $\mathbf{B}$.

**3.14.•** *Basis: true - false.*
- a) In the vector space $\mathcal{V}$ the vector system $\{ \mathbf{v}_1, \ldots, \mathbf{v}_k \}$ is a basis if an arbitrary vector $\mathbf{v} \in \mathcal{V}$ can be uniquely written as a linear combination of these vectors.
- b) There is a vector space where any non-zero vector forms a basis.
- c) There is a vector space which has a two-element basis, and has three linearly independent vectors.
- d) There is a vector space which is spanned by any two of its distinct vectors!
- e) There is a vector space $\mathcal{V}$ which is spanned by some 5 of its vectors, and in it a subspace $\mathcal{W}$ which is spanned by some 10 of its vectors.

**3.15.** Determine a basis of the subspace spanned by the vectors in Example 3.27 such that we write the vectors in the matrix in a different order. For example, let the order be $\mathbf{w}_1 = (1, 1, 2, 1)$, $\mathbf{w}_2 = (3, 1, 3, 2)$, $\mathbf{w}_3 = (6, 0, 3, 3)$, $\mathbf{w}_4 = (2, -2, -2, 0)$. Express all four vectors as a linear combination of these! Finally, write down the coordinate form of all four vectors in this basis!

**3.16.•** Let us find a basis for the following vector space from the given vectors, then write the coordinate forms of the vectors with respect to this basis!
- a) $\operatorname{span}((1, 2, 3), (-2, -4, -6), (1, 1, 1), (0, 1, 2), (2, 1, 0))$,
- b) $\operatorname{span}((1, 2, 3, 4), (0, 1, 2, 3), (3, 1, -1, 1), (2, 0, 4, 0))$,
- c) $\operatorname{span}((1, 2, 3, 4), (0, 1, 2, 3), (1, 1, 1, 1), (-1, 0, 1, 2))$.

**3.17.•** Give a basis of the orthogonal complement subspace in $\mathbb{R}^4$ of the following subspace!
- a) $\operatorname{span}((1, 2, 0, 1), (3, 1, -1, 1), (1, -3, -1, -1))$,
- b) $\operatorname{span}((1, 2, 0, 1), (3, 1, -1, 1), (2, -1, -1, 0))$.

**3.18.** Consider the subspace $\mathcal{V} = \operatorname{span}((0, 1, 2, 3, 4), (1, 2, 3, 4, 5)) \leqslant \mathbb{R}^5$!
- a) Is it orthogonal to the subspace $\mathcal{W} = \operatorname{span}((0, 1, 1, -1, 0), (0, 0, 1, 1, -1))$?
- b) Is $\mathcal{W}$ the orthogonal complement subspace of $\mathcal{V}$?
- c) Determine the subspaces $\mathcal{V}^\perp$ and $\mathcal{W}^\perp$!

**3.19.** Give the orthogonal complement subspace of the subspace $\operatorname{span}((0, 1, 2, 3, 4), (1, 2, 3, 4, 5))$!

**3.20.** We know about a system of linear equations that the rank of its coefficient matrix is 2, and that $(1, 2, 3)$ and $(0, 1, 3)$ are both solution vectors. Give all of its solutions!

**3.21.** The rank of the coefficient matrix of a system of linear equations is 2, and $(1, 2, 3, 4)$, $(0, 1, 3, 4)$ and $(0, 1, 2, 3)$ are its solution vectors. Give all of its solutions!

Determine the bases of the distinguished subspaces of the following matrices!

**3.22.•** $\begin{bmatrix} 1 & 2 & 3 & 1 \\ 1 & -2 & -1 & 0 \\ 0 & 1 & 1 & -1 \end{bmatrix}$

**3.23.** $\begin{bmatrix} 1 & 2 & 3 & 1 \\ 0 & 1 & 1 & -1 \end{bmatrix}$

**3.24.** $\begin{bmatrix} 0 & 1 & 1 & -1 \end{bmatrix}$

**3.25.** $\begin{bmatrix} 1 & 2 & 0 & -1 & 1 \\ 2 & 4 & 1 & -1 & 3 \\ -1 & -2 & 1 & 2 & 0 \end{bmatrix}$

**3.26.** *Gram matrix.* Prove that the
$$\begin{bmatrix} \mathbf{v}_1 \cdot \mathbf{v}_1 & \mathbf{v}_1 \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_1 \cdot \mathbf{v}_k \\ \mathbf{v}_2 \cdot \mathbf{v}_1 & \mathbf{v}_2 \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_2 \cdot \mathbf{v}_k \\ \vdots & \vdots & \ddots & \vdots \\ \mathbf{v}_k \cdot \mathbf{v}_1 & \mathbf{v}_k \cdot \mathbf{v}_2 & \ldots & \mathbf{v}_k \cdot \mathbf{v}_k \end{bmatrix}$$
matrix - the so-called *Gram matrix* - has rank exactly $k$ if and only if the vectors $\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k$ in $\mathbb{R}^n$ are linearly independent.

**3.27.** *Fundamental theorem of linear algebra.* Prove the fundamental theorem of linear algebra!

#### Determining the solution falling into the row space

Let us find the unique solution falling into the row space for the following systems of equations, and with its help write down all solutions!

**3.28.•** $\begin{aligned} x + y + z &= 3 \\ 2x + y - z &= 2 \\ 3x + 2y &= 5 \end{aligned}$

**3.29.** $x + 4y + 8z + 12w = 225$

**3.30.•** $\begin{aligned} x + y + z + w &= 3 \\ x + y - z - w &= 1 \end{aligned}$

**3.31.** Determine the number of $k$-dimensional subspaces of the space $\mathbb{Z}_p^n$, where $p$ is prime, and $k = 0, 1, \ldots, n$?

## Solutions

**3.1.** All statements are false.

**3.2.** a) True. b) True. c) False, it is true only if one is a subspace of the other. d) True. e) False, the only vector of the zero space is the zero vector.

**3.3.** a) False, only the solutions of homogeneous linear systems of equations form a vector space. b) True. c) True. This is exactly the column space, because the system of equations is solvable only for the vectors $\mathbf{b}$ from the column space. d) True. This is exactly the null space of the coefficient matrix, i.e., the solution set of the homogeneous system of equations belonging to the system of equations.

**3.4.** a) True. b) True. c) False. d) True, because the condition $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant \operatorname{r}(\mathbf{A})$ in the statement holds if and only if $\operatorname{r}(\mathbf{A}|\mathbf{b}) = \operatorname{r}(\mathbf{A})$, and this holds if and only if the system of equations is solvable. e) False, if $\operatorname{r}(\mathbf{A}) = n$, and the system of equations consists of more than $n$ equations, then it can happen that $\operatorname{r}(\mathbf{A}|\mathbf{b}) = n + 1$, and then the system of equations is not solvable!

**3.5.** a) No, scalar multiples of a unit vector are not unit vectors. b) Yes (a plane passing through the origin). c) No (a shifted plane). d) Yes, it consists of the vectors of a line passing through the origin. e) Yes, this is the zero space. f) No, the vector $(1, -1, 0)$ and $(1, 0, -1)$ are in it, but their sum is not in this set.

**3.7.** a) $\operatorname{r}(\mathbf{A}|\mathbf{b}) \leqslant 1$. A rank of 0 can occur only if all equations are of the form $0 = 0$ - not an interesting case. If the rank is 1, then the number of bound and free variables is also 1. b) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 5$. c) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 3$. d) $\operatorname{r}(\mathbf{A}|\mathbf{b}) = 2$.

**3.8.** The difference of two solution vectors, i.e., the vector $(1, 2, 3) - (0, 1, 3) = (1, 1, 0)$ is definitely a solution to the homogeneous part of the system of equations. But then all of its scalar multiples are also solutions, so adding them to any of the solutions above gives new solutions. For example, $(1, 2, 3) + (1, 1, 0) = (2, 3, 3)$ and $(1, 2, 3) + 2(1, 1, 0) = (3, 4, 3)$ are also solution vectors.

Since the number of unknowns is 3, and at least one of them is a free variable, the rank is at most 2. If, however, these solutions are solutions of a homogeneous system of linear equations, then among the solutions there are at least two linearly independent solutions, so the number of free variables is at least two, which means that the number of bound variables is at most 1, so the rank of the coefficient matrix is also at most 1.

**3.9.** At first glance, it only seems that both solutions are translates of a two-dimensional subspace. First we check whether the subspace - that is, the two solutions given to the homogeneous part of the system of equations - coincides. It is enough to show that the two vectors generating one are contained in the other subspace. If yes, the two subspaces coincide. In this case, we have to decide whether the two particular solutions of the inhomogeneous are in the same translate of the subspace. Or simply, whether the difference of the two particular solutions is in the subspace. We can solve these questions with a single matrix reduced to row echelon form. The first two columns contain the generators of the first, the second two columns the second subspace, the fifth column is the difference of the two particular solutions.
$$\left[\begin{array}{cc|ccc} 1 & 0 & -2 & 3 & 1 \\ 0 & 1 & 1 & -2 & -1 \\ -2 & -3 & 1 & 0 & 1 \\ -1 & -2 & 0 & 1 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cc|ccc} 1 & 0 & -2 & 3 & 1 \\ 0 & 1 & 1 & -2 & -1 \\ 0 & 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{array}\right]$$
The result shows that the two solutions are identical.

**3.10.** If $\mathbf{a}_{i*}$ denotes the $i$-th row of the coefficient matrix and $\mathbf{x}$ and $\mathbf{y}$ denote respectively a solution to the homogeneous system of equations, i.e., $\mathbf{a}_{i*} \cdot \mathbf{x} = 0$, $\mathbf{a}_{i*} \cdot \mathbf{y} = 0$ $(i = 1, 2, \ldots, m)$, then
$$\mathbf{a}_{i*} \cdot (c\mathbf{x} + d\mathbf{y}) = c\mathbf{a}_{i*} \cdot \mathbf{x} + d\mathbf{a}_{i*} \cdot \mathbf{y} = 0 + 0 = 0,$$
thus any linear combination of the two solution vectors is also a solution. In other words, any linear combination of the solutions of homogeneous linear systems of equations is also a solution, thus the solutions form a subspace.

**3.11.** Let $\mathbf{x} = (x_1, x_2, \ldots, x_n)$ be a particular solution of the inhomogeneous system, and let $\mathbf{a}_1, \mathbf{a}_2, \ldots, \mathbf{a}_n$ denote the column vectors of $\mathbf{A}$, let $\mathcal{H}$ be the general solution of the homogeneous, and $\mathcal{I}$ of the inhomogeneous system of equations. We show that $\mathbf{x} + \mathcal{H} = \mathcal{I}$, where the addition on the left side is understood element-wise.

$\mathbf{x} + \mathcal{H} \subseteq \mathcal{I}$: We must show that if we add an arbitrary element $\mathbf{y} = (y_1, y_2, \ldots, y_n) \in \mathcal{H}$ of $\mathcal{H}$ to $\mathbf{x}$, we get a solution of the inhomogeneous system of equations. Indeed, $\mathbf{x}$ and $\mathbf{y}$ respectively satisfy the equation
$$\begin{aligned} \mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n &= \mathbf{b}, \text{ and} \\ \mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n &= \mathbf{0}. \end{aligned}$$
From this
$$\begin{aligned} \mathbf{a}_1(x_1 + y_1) + \mathbf{a}_2(x_2 + y_1) + \ldots + \mathbf{a}_n(x_n + y_1) &= \\ (\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) + (\mathbf{a}_1 y_1 + \mathbf{a}_2 y_2 + \ldots + \mathbf{a}_n y_n) &= \\ \mathbf{b} + \mathbf{0} = \mathbf{b}, \end{aligned}$$
so $\mathbf{x} + \mathbf{y}$ is a solution of the inhomogeneous system of equations, i.e., $\mathbf{x} + \mathbf{y} \in \mathcal{I}$.

$\mathbf{x} + \mathcal{H} \supseteq \mathcal{I}$: We must show that if $\mathbf{z}$ is an arbitrary solution of the inhomogeneous system, i.e., $\mathbf{z} \in \mathcal{I}$, then there can be found an $\mathbf{y} \in \mathcal{H}$ such that $\mathbf{z} = \mathbf{x} + \mathbf{y}$. Indeed, $\mathbf{y} = \mathbf{z} - \mathbf{x}$ will do, because
$$\begin{aligned} \mathbf{a}_1(z_1 - x_1) + \mathbf{a}_2(z_2 - x_1) + \ldots + \mathbf{a}_n(z_n - x_1) &= \\ (\mathbf{a}_1 z_1 + \mathbf{a}_2 z_2 + \ldots + \mathbf{a}_n z_n) - (\mathbf{a}_1 x_1 + \mathbf{a}_2 x_2 + \ldots + \mathbf{a}_n x_n) &= \\ \mathbf{b} - \mathbf{b} = \mathbf{0}, \end{aligned}$$
i.e., $\mathbf{z} - \mathbf{x} \in \mathcal{H}$.

**3.12.** There are 16 subspaces of $\mathbb{F}_2^3$ in total. There is one 0-dimensional, the space $\mathcal{Z} = \{ \mathbf{0} \}$. The one-dimensional subspaces consist of the zero vector and one single additional distinct vector (there are 7 such subspaces). Each of the two-dimensional subspaces consists of the zero vector, two additional distinct vectors, and their sum. We list these:
$$\begin{aligned}
&\{(0,0,0), (1,0,0), (0,1,0), (1,1,0)\}, \\
&\{(0,0,0), (0,1,0), (0,0,1), (0,1,1)\}, \\
&\{(0,0,0), (0,0,1), (1,0,0), (1,0,1)\}, \\
&\{(0,0,0), (1,0,0), (0,1,1), (1,1,1)\}, \\
&\{(0,0,0), (0,1,0), (1,0,1), (1,1,1)\}, \\
&\{(0,0,0), (0,0,1), (1,1,0), (1,1,1)\}, \\
&\{(0,0,0), (0,1,1), (1,0,1), (1,1,0)\}.
\end{aligned}$$
Finally, $\mathbb{F}_2^3$ itself is also a subspace.

**3.13.** The first two statements are simple consequences of Theorem 3.22.

To prove the third statement, we show that a non-zero row vector of a row echelon form cannot be expressed as a linear combination of the other row vectors. Let us consider the $k$-th row vector of the row echelon form. Let its pivot element be in the $j$-th column. This pivot element cannot be produced by a linear combination of rows with index greater than $k$, because in them the $j$-th coordinate is 0. And the row vectors with index smaller than $k$ cannot appear in the linear combination, because the pivot element of the vector with the smallest index cannot be eliminated by the other vectors, yet in the $k$-th row at that position there is a 0.

The proof that the columns of the pivot elements are linearly independent in $\mathbf{B}$ goes exactly the same way as for row vectors. And from this it follows by the previous theorem that the columns with such indices are also linearly independent in $\mathbf{A}$.

**3.14.** 1. True. 2. True, any 1-dimensional vector space is like this. 3. False, if there is a two-element basis, then the number of elements of linearly independent vector systems is at most 2. 4. True, any 1-dimensional vector space is like this. 5. Yes, a generating system can consist of more vectors than the dimension.

**3.15.** The matrix and its reduced row echelon form:
$$\begin{bmatrix} 1 & 1 & 2 & 1 \\ 3 & 1 & 3 & 2 \\ 6 & 0 & 3 & 3 \\ 2 & -2 & -2 & 0 \end{bmatrix} \Rightarrow \begin{bmatrix} 1 & 0 & \frac{1}{2} & \frac{1}{2} \\ 0 & 1 & \frac{3}{2} & \frac{1}{2} \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{bmatrix}.$$
According to this we can choose the vectors $\mathbf{w}_1 = (1, 3, 6, 2)$ and $\mathbf{w}_2 = (1, 1, 0, -2)$ as basis vectors. The other vectors can be expressed as their linear combinations:
$$\begin{bmatrix} 2 \\ 3 \\ 3 \\ -2 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} + \frac{3}{2}\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix}, \quad \begin{bmatrix} 1 \\ 2 \\ 3 \\ 0 \end{bmatrix} = \frac{1}{2}\begin{bmatrix} 1 \\ 3 \\ 6 \\ 2 \end{bmatrix} + \frac{1}{2}\begin{bmatrix} 1 \\ 1 \\ 0 \\ -2 \end{bmatrix}.$$
From the matrix consisting of the non-zero rows of the reduced row echelon form
$$\begin{bmatrix} 1 & 0 & 1/2 & 1/2 \\ 0 & 1 & 3/2 & 1/2 \end{bmatrix}$$
it can be read that $\mathcal{B} = \{ \mathbf{w}_1, \mathbf{w}_2 \}$ is a basis of the above subspace, and the coordinate form of the four vectors in this basis is respectively
$$\mathbf{v}_4 = \begin{bmatrix} 1 \\ 0 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_1 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_2 = \begin{bmatrix} 1/2 \\ 3/2 \end{bmatrix}_{\mathcal{B}}, \quad \mathbf{v}_3 = \begin{bmatrix} 1/2 \\ 1/2 \end{bmatrix}_{\mathcal{B}}.$$

**3.18.** a) Orthogonal, b) not orthogonal complement subspaces.

**3.20.** Since the system of equations has 3 unknowns and the rank is 2, the number of bound variables is 2, the number of free variables is 1, and so the dimension of the null space is also 1. The two vectors are independent of each other, so the system of equations cannot be homogeneous, because then the dimension of the null space would be at least two. The system of equations is therefore inhomogeneous, and the difference of the two given solutions gives a solution of the homogeneous part, and all its scalar multiples give all of its solutions. Thus all solutions of the inhomogeneous are: $(1, 2, 3) + t(1, 1, 0)$.

**3.21.** For example $(1, 2, 3, 4) + s(1, 1, 0, 0) + t(1, 1, 1, 1)$.

**3.26.** The rank of this matrix is exactly $k$ if its column vectors are linearly independent, that is if any linear combination of the column vectors can be the zero vector only if every coefficient is 0. Let us consider a linear combination of the column vectors with scalars $c_1, \ldots, c_k$ yielding the zero vector. Its $i$-th coordinate is
$$0 = c_1\mathbf{v}_i \cdot \mathbf{v}_1 + c_2\mathbf{v}_i \cdot \mathbf{v}_2 + \cdots + c_k\mathbf{v}_i \cdot \mathbf{v}_k = \mathbf{v}_i \cdot (c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k).$$
Thus we obtained that the vector $\mathbf{x} = c_1\mathbf{v}_1 + c_2\mathbf{v}_2 + \cdots + c_k\mathbf{v}_k$ is such that its dot product with each of the vectors $\mathbf{v}_1, \ldots, \mathbf{v}_k$ is 0; thus its dot product with any linear combination of them is also 0, thus for example the product taken with the vector $\mathbf{x}$ is also 0, i.e. $\mathbf{x} \cdot \mathbf{x} = 0$. This, however, can only hold if $\mathbf{x} = \mathbf{0}$, and since the vectors $\mathbf{v}_i$ are linearly independent, their linear combination can only be 0 with the constants $c_i = 0$, where $i = 1, 2, \ldots, k$.

**3.27.** We show that the orthogonal complement subspace of the null space is the row space. Let the row space of the real matrix $\mathbf{A}$ be $\mathcal{S}$, its null space $\mathcal{N}$, and a basis for them $\{ \mathbf{s}_1, \mathbf{s}_2, \ldots, \mathbf{s}_k \}$ and $\{ \mathbf{e}_1, \mathbf{e}_2, \ldots, \mathbf{e}_{n-k} \}$, respectively. Because of the orthogonality of $\mathcal{S}$ and $\mathcal{N}$, $\mathbf{s}_i \cdot \mathbf{e}_j = 0$ for all $i = 1, 2, \ldots, r$ and $j = 1, 2, \ldots, n - r$. These two bases together give a basis of $\mathbb{R}^n$, as it consists of $n$ elements and independent vectors. Independence follows from the fact that an arbitrary linear combination producing the zero vector
$$\underbrace{c_1\mathbf{s}_1 + \cdots + c_r\mathbf{s}_r}_{\mathbf{c}} + \underbrace{d_1\mathbf{e}_1 + \cdots + d_{n-r}\mathbf{e}_{n-r}}_{\mathbf{d}} = \mathbf{0} \tag{3.4}$$
can hold only if $\mathbf{c}$ and $\mathbf{d}$ are in the intersection of the two subspaces, so they are both the zero vectors, and thus $c_1 = \cdots = c_r = d_1 = \cdots = d_{n-r} = 0$.

If $\mathbf{x}$ is a vector which is orthogonal to every vector of $\mathcal{N}$, then $\mathbf{x} \cdot \mathbf{e}_i = 0$ $(i = 1, 2, \ldots, n - r)$. If
$$\mathbf{x} = y_1\mathbf{s}_1 + \cdots + y_r\mathbf{s}_r + x_1\mathbf{e}_1 + \cdots + x_{n-r}\mathbf{e}_{n-r},$$
then multiplying by the vectors $\mathbf{e}_i$ leads to the following homogeneous system of linear equations:
$$\begin{alignedat}{9}
(\mathbf{e}_1 \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_1 \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_1 \cdot \mathbf{e}_r)x_n &{}={}& 0 \\
(\mathbf{e}_2 \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_2 \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_2 \cdot \mathbf{e}_r)x_n &{}={}& 0 \\
\vdots && \vdots && && \;\;\vdots && \vdots \\
(\mathbf{e}_{n-r} \cdot \mathbf{e}_1)x_1 &{}+{}& (\mathbf{e}_{n-r} \cdot \mathbf{e}_2)x_2 &{}+{}& \ldots &{}+{}& (\mathbf{e}_{n-r} \cdot \mathbf{e}_n)x_n &{}={}& 0
\end{alignedat}$$
And this can be solved uniquely, because the rank of its coefficient matrix is $r$. We leave its proof to the Reader. A proof can be seen in Exercise 3.26, another, simpler one in Exercise ??.

**3.28.** The reduced row echelon form of the augmented matrix of the system of equations is
$$\left[\begin{array}{ccc|c} 1 & 0 & -2 & -1 \\ 0 & 1 & 3 & 4 \end{array}\right]$$
thus its solution is $(x, y, z) = (-1, 4, 0) + (2, -3, 1)t$. The null space is spanned by the vector $(2, -3, 1)$, the vector falling into the row space must be orthogonal to this, thus the equation
$$2x - 3y + z = 0$$
must also hold. Adding this equation to the system of equations derived from the reduced row echelon form (or even to the original one) we obtain a system of equations giving a unique solution. Its augmented matrix and its reduced row echelon form:
$$\left[\begin{array}{ccc|c} 1 & 0 & -2 & -1 \\ 0 & 1 & 3 & 4 \\ 2 & -3 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{ccc|c} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & 1 \end{array}\right]$$
From here the solution falling into the row space is $(1, 1, 1)$.

**3.29.** The determination of the solution falling into the row space in the case of a single equation is simple. Since the row space is spanned by the vector $(1, 4, 8, 12)$, we look for a scalar multiple of it, the dot product with which is 225. Since $1^2 + 4^2 + 8^2 + 12^2 = 15^2 = 225$, therefore the unique solution falling into the row space is $(x, y, z, w) = (1, 4, 8, 12)$. Determining all solutions of the homogeneous system of equations and then adding we get that
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 4 \\ 8 \\ 12 \end{bmatrix} + \begin{bmatrix} -4 \\ 1 \\ 0 \\ 0 \end{bmatrix} t + \begin{bmatrix} -8 \\ 0 \\ 1 \\ 0 \end{bmatrix} s + \begin{bmatrix} -12 \\ 0 \\ 0 \\ 1 \end{bmatrix} u$$
are all the solutions.

**3.30.** The augmented matrix and its reduced row echelon form:
$$\left[\begin{array}{cccc|c} 1 & 1 & 1 & 1 & 3 \\ 1 & 1 & -1 & -1 & 1 \end{array}\right] \Longrightarrow \left[\begin{array}{cccc|c} 1 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 \end{array}\right]$$
The solution of the system of equations:
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 2 - s \\ s \\ 1 - t \\ t \end{bmatrix} = \begin{bmatrix} 2 \\ 0 \\ 1 \\ 0 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ -1 \\ 1 \end{bmatrix} t.$$
Thus the null space is spanned by the vectors $(-1, 1, 0, 0)$ and $(0, 0, -1, 1)$. The solution vector falling into the row space is orthogonal to these, so in addition to the original equation it also satisfies the following two equations:
$$\begin{alignedat}{9}
-x &{}+{}& y &&&&&{}={}& 0 \\
&& &{}-{}& z &{}+{}& w &{}={}& 0
\end{alignedat}$$
Augmenting the reduced row echelon form with their matrix, then bringing that to a reduced row echelon form we obtain that
$$\left[\begin{array}{cccc|c} 1 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 1 & 1 \\ -1 & 1 & 0 & 0 & 0 \\ 0 & 0 & -1 & 1 & 0 \end{array}\right] \Longrightarrow \left[\begin{array}{cccc|c} 1 & 0 & 0 & 0 & 1 \\ 0 & 1 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 & 1/2 \\ 0 & 0 & 0 & 1 & 1/2 \end{array}\right]$$
so the solution falling into the row space is $(1, 1, 1/2, 1/2)$, all solutions
$$\begin{bmatrix} x \\ y \\ z \\ w \end{bmatrix} = \begin{bmatrix} 1 \\ 1 \\ 1/2 \\ 1/2 \end{bmatrix} + \begin{bmatrix} -1 \\ 1 \\ 0 \\ 0 \end{bmatrix} s + \begin{bmatrix} 0 \\ 0 \\ -1 \\ 1 \end{bmatrix} t.$$
