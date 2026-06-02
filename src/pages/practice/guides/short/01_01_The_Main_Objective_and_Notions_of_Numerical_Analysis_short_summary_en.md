**1.1. The Main Objective and Notions of Numerical Analysis**

## 1. The Main Objective of Numerical Analysis

During scientific and engineering computations, mathematical models are created to describe the processes of physical reality. The qualitative investigation of models (e.g., whether a unique solution exists) is the task of theoretical mathematics, while answering quantitative questions (determining exact numerical values) is the domain of numerical analysis.

> **The objective of numerical analysis:** The exact or approximate solution of mathematical problems translated into a sequence of basic arithmetic operations (addition, subtraction, multiplication, division) that a computer can execute.

## 2. Sources of Error During Computations

The final result obtained during numerical procedures almost never matches the completely exact value of the physical reality. The two most important internal sources of errors are:

### A) Formula Error (Truncation Error)

Committed when an infinite mathematical expression or function is replaced with a finite, simpler formula.

* **Example:** To compute the exact value of the function $f(x) = \sin x$, instead of the infinite Taylor series, only its fifth-order Taylor polynomial ($T_5(x)$) is used:

$$T_5(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!}$$

* The omitted part is the truncation error based on the remainder term of Taylor's theorem:

$$\text{Truncation error} = -\frac{\sin\xi}{6!}x^6$$

### B) Rounding Error

Arises from the fact that computers can only store and handle real numbers (especially irrational or infinite decimal fractions) with a **finite number of decimal places of precision** (on a bounded byte).

## 3. Stability of Mathematical Models and Numerical Methods

The concept of stability is used in numerical analysis in two different senses:

1. **Stability of the mathematical model (Conditioning):** Examines how much a tiny change in the input data (parameters arising from measurements) causes a change in the exact theoretical solution of the problem. If the change is small, the model is *well-conditioned*; if it is huge, then it is *ill-conditioned*.
2. **Stability of the numerical method (algorithm):** Measures how the inevitably occurring rounding errors during calculation affect the final result. An algorithm is stable if rounding errors do not accumulate catastrophically and do not ruin the final result.

## 4. Complexity of Algorithms (Operation and Space Requirements)

### Operation Requirement (Time Complexity)

Since performing multiplication and division takes significantly more time on computers than addition or subtraction, the operation requirement of an algorithm generally means the **number of multiplications and divisions** it contains.

#### Example: Polynomial Evaluation and Horner's Method

Let us consider a fourth-degree polynomial:

$$p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10$$

* **Direct evaluation:** Breaking down exponentiations into multiplications ($x^4 = x \cdot x \cdot x \cdot x$), calculating the formula requires **10 multiplications** in addition to 4 additions/subtractions.
* **Horner's method:** Let's transform the structure of the polynomial into nested products:

$$p(x) = (((5x - 8)x + 2)x + 4)x - 10$$

In this form, evaluating the polynomial now requires only 4 additions/subtractions and just **4 multiplications**.

Extended to general polynomials of degree $n$, the direct calculation would require $O(n^2)$ multiplications, while with Horner's rearrangement, the operation requirement is reduced to **exactly $n$ additions and $n$ multiplications**.

### Data Storage Requirement (Space Complexity)

Determines how much memory the algorithm needs during its run. For high-dimensional problems (e.g., storing a $10000 \times 10000$ matrix), it is critical to utilize the special structure of the matrices (e.g., if it is a sparse matrix, do not store unnecessary zeros), thereby minimizing the required memory.
