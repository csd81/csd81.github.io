Here is the comprehensive, word-for-word transcript of the lecture, meticulously aligned with the video timestamps.

---

### **Part 1: Introduction, Mathematical Modeling, and Truncation Errors**

**** In the first chapter, we will give some introduction to the topics of numerical analysis. First, we will speak about the main objectives and some basic notions of numerical analysis used throughout the course.

**** Consider the schematic steps of scientific computation of a physical process. Given a physical problem, a scientist working in that field sets up a mathematical model that describes the reality. But when we replace the reality with a mathematical model, almost always we make some error. This error is called the **modelling error**.

**** The mathematical model can be like a nonlinear equation or a differential equation. Many times it contains parameters, and when we want to determine the value of a parameter in the mathematical model, typically in practice, we just make measurements of the reality. When we make measurements, almost always we make also some error in the measurement, so this is the **measurement error**.

**** When we use the mathematical model, the parameter values should equal the parameter value of the real model, but we have a mathematical model. Most of the cases, we cannot solve the mathematical model exactly because it's a nonlinear equation or a nonlinear differential equation, and there is no analytical solution technique to find the exact solution of the model. What we can do is try to find a numerical solution—an approximate solution of the mathematical model.

**** When we find a numerical method to approximate the solution of a mathematical model, we also introduce an error in the calculation, which is called the **truncation error**. And also, when we perform the arithmetic operations during the calculation, in each step, we will introduce some error in the calculation, which is called the **rounding error**.

**** So we can say that the main objective of numerical analysis is to give the exact or approximate solution of a mathematical problem using basic arithmetic operations: addition, subtraction, multiplication, and division. This is the theoretical formulation of the goal of numerical analysis. Of course, in practice, we will do the calculation with functional evaluations. For example, a calculator or a computer can evaluate a function value for us, but behind each function evaluation, there is a numerical method which performs the evaluation with the help of arithmetic operations.

**** Let's demonstrate the previous notions, first to explain what is the truncation error. Consider here we would like to evaluate a function value; evaluate $\sin(x)$ at the point $x$. How to do this?

**** Calculus gives us a mathematical method for how to evaluate a function value with the help of the four basic arithmetical operations. For example, here we can consider a Taylor polynomial, a function of $x$ around $x_0 = 0$ of degree $5$. The formula of the Taylor polynomial is given by:

$$\sin(x) \approx x - \frac{x^3}{3!} + \frac{x^5}{5!}$$

**** The exact expression is given by adding the last term here in this relation. This is the remainder error term of the Taylor polynomial approximation, and this gives us the truncation error:

$$R_5(x) = \frac{f^{(6)}(\xi)}{6!} x^6 = \frac{-\sin(\xi)}{720} x^6$$

**** This polynomial term describes the error when we replace the exact function value with this approximate function value, and with the help of this formula, we can estimate the error at a point $\xi$ which depends on $x$, so we have this equality.

**** In this equation, we do not know the exact value of $\xi$, but in the case of the sixth derivative, it is easy to compute, and we get this formula. The sine function is bounded; it is bounded by $1$ from above and $-1$ from below ($|\sin(\xi)| \le 1$). So it is easy to estimate the numerator here when $x$ is given. We have an upper estimate of this error term, which gives us an estimate of the total error in the approximation:

$$|R_5(x)| \le \frac{|x|^6}{720}$$

**** This is very important. It is always very important in numerical analysis: for a numerical method, it is not enough to find an approximate value of the mathematical problem, but also we would like to know how much is the error when we make it—when we replace the exact solution with the approximate solution. We need information about the truncation error of the numerical method. In many cases, we will see it later, we have a formula for the truncation error, and if we have a formula, we can use it in a certain situation to estimate the largest possible error in the computation.

---

### **Part 2: Concepts of Stability**

**** The next notion is the **rounding error**. A rounding error appears because we can store real numbers in computers only with a finite digit accuracy.

**** There is a related notion to the rounding error, which is the notion of **stability**. But the notion of stability is used in mathematics, and also in numerical mathematics, in at least two meanings: we can talk about the stability of a mathematical model, and also we will speak about the stability of a numerical method. Let's explain these two notions.

**** Look at the following example. Consider a linear system. This is a 2-by-2 linear system, and of course, it is easy to solve it. If we find the exact solution, we can check that the exact solution is $x = -10$, $y = 2$.

$$\begin{aligned}
x + 3y &= 4 \
2x + 6y &= 7.8
\end{aligned}$$

**** In the next equation, we just change one coefficient here. We use $6.01$ instead of $6$:

$$\begin{aligned}
x + 3y &= 4 \
2x + 6.01y &= 7.8
\end{aligned}$$

We used the rest of the coefficients from the previous linear system and solved this second linear system. The solution, up to digit precision, you can see it: $x$ is approximately $-2$, and around $1.8$ for the variable $y$.

**** We can observe a change in the signs and values of the solution. We just made a small, very small change in the size of the coefficient—one of the coefficients was changed by $0.17\%$. And it resulted in a more than $100\%$ change in the value of the $x$ variable, and there was a relatively big change in the value of the $y$ variable also.

**** This is not a good situation. If, in a mathematical problem, we make a small change in the value of the input parameters of the model, and that results in a big change in the solution of the model, then the mathematical problem is called **incorrectly posed**, **ill-conditioned**, or otherwise, it is called an **unstable problem**. So this is an example of an unstable mathematical problem.

**** The opposite situation is when a small change results only in a small change in the output. Then we say that the problem is **correctly posed**, **stable**, or **well-conditioned**. Okay, so this is a property of the mathematical problem itself.

**** The next notion is **stability with respect to the rounding errors**.

**** As an example, consider these three recursive sequences. The first is $x_n = \frac{1}{3}x_{n-1}$, and we start generating the sequence from the initial value equal to $1$ ($x_0 = 1$). The second sequence is defined by the following equation: $y_n = 2y_{n-1} - \frac{5}{9}y_{n-2}$. This is the recursion, and we need two initial values: $y_0 = 1, y_1 = \frac{1}{3}$. And we have a third version, a third recursion: $z_n = \frac{10}{3}z_{n-1} - \frac{11}{3}z_{n-2} + z_{n-3}$ with $z_0=1, z_1=\frac{1}{3}, z_2=\frac{1}{9}$.

**** It is possible to check that all three sequences generate the same analytical sequence—the sequence $\left(\frac{1}{3}\right)^n$. So the three recursions are algebraically equivalent. But let's do the computation in practice. To enlarge the effect of the rounding in the computation a little bit, we performed the computation with single-precision arithmetic.

**** Okay, and here is the numerical result. The first column contains the values of the sequence $x_n = \left(\frac{1}{3}\right)^n$, which goes to zero as $n$ goes to infinity. We see it here in the values of the sequence; we get smaller and smaller values, and after a few steps, up to six digits of precision, the value of the sequence equals zero.

**** But if we use the second definition, the second recursion to generate the sequence $y_n$, these are the numerical values. It still decreases, but compared to the first sequence, there is some error in the computation. The error is present in the result in the last steps, of the order of $10^{-6}$, but we can really accept this.

**** But the problematic part is the last example when we generate the sequence $z_n$. These are the numerical values. It should generate the values of $\left(\frac{1}{3}\right)^n$, but if we compare the value of $z_n$, it is interesting because the error becomes larger and larger, and the last error is around $-10^{+2}$. Okay, this is $10$ to the power plus $2$, which is huge!

**** If we just interpret the previous recursion as a numerical method to generate the sequence, this numerical method is very unreliable because the numerical result contains a very significant error compared to the exact value of the sequence. So this is a so-called **unstable numerical method**. The algorithm is unstable.

**** The computation is sensitive to rounding errors. The method is unstable with respect to rounding errors. So when we have a numerical method to find an approximate solution of a mathematical problem, we would always want to find the truncation error of the method, but we would also like to know if the numerical method is stable or unstable with respect to the rounding error. Because if it is unstable, we cannot really use it in practice. Okay, so this is important from a practical point of view.

**** If you repeat the previous computation using a double-precision calculation, here is the error of the last step for the sequence: the error is of the order of $10^{-13}$, which is quite small. And even for the third sequence, the error is of the order of $10^{-7}$—much bigger than in the case of the second sequence, but much better compared to the case when we use only a single-precision calculation. Okay, if a computation is sensitive, we need to use high precision in each step of the computation.

---

### **Part 3: Algorithmic Complexity and Horner's Scheme**

**** Another notion we must consider is complexity. There are methods which terminate in a finite number of steps, and if we have a numerical method of this type, we can talk about the time complexity—the cost of the algorithm. By that, we mean the number of steps, or more precisely, the number of arithmetic operations needed to perform the computation.

**** Again, consider an example. Here is a polynomial, a polynomial of degree $4$:

$$P_4(x) = a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0$$

The task is to evaluate it at a point $x$. If we use the definition directly, then it contains additions, subtractions, multiplications, and exponentiations.

**** Exponentiation here means a number of multiplications. Computing the third power means we need to perform two multiplications, and here in the next step, we need to perform one multiplication. We need many multiplications to evaluate the formula directly.

**** But look at the following: let's rewrite the formula in the following way. Here is the algebraic manipulation. We can factor out $x$ out of the first four terms. Factor out $x$, and then we factor $x$ out of the first terms, and also inside the parentheses, we can factor $x$ out of the first two terms. We write the expression in this form:

$$P_4(x) = (((a_4x + a_3)x + a_2)x + a_1)x + a_0$$

There is a big difference: in this form, we need only one, two, three, four numbers of multiplications, and also we need four additions or subtractions. So the number of multiplications is much smaller than when using the original form of the polynomial.

**** We can generalize it to higher-degree polynomials. Here is the method, which is called Horner's method (or borders method), and it is easy to form an algorithm for function evaluation in the case of polynomial evaluation. This algorithm requires $n$ additions/subtractions and $n$ number of multiplications. It is very optimal in terms of the number of arithmetic operations.

**** Okay, in the lecture notes, you will see the algorithm—the pseudocode of the algorithm of many numerical methods we will study later. Given a particular programming language, it is easy to rewrite it in any programming language. Okay.

**** So we are always interested in the time complexity of a numerical method because if we have two numerical methods and one runs faster, typically we prefer the faster numerical method.

**** Another question is the so-called **space complexity** of a numerical method, and that means the amount of memory storage that is needed during the running of the numerical method. For example, if we want to solve a linear system with a coefficient matrix of size 10-by-10, it's not too difficult; it's easy to write a program for it. But if we have a much bigger dimensional linear problem—for example, we need to store or work with a matrix of dimension 10,000 times 10,000—and if we use this program code many times as part of a bigger program, memory storage can be problematic. We will speak about examples later. Space complexity is interesting even today with fast and big computers. In the case of a big numerical problem, it can matter if we can formulate the algorithm in a way which stores the data in the most optimized way.

**** Okay, these are some questions and some notions we will study later in the course.

---

### **Part 4: Computer Representation of Real Numbers**

**** In section 1.2, we will speak about the computer representation of real numbers. As a computer scientist, you should know the idea of how to store numbers, including real numbers, in computers. This is very important in numerical analysis. Let's review these techniques.

**** Consider a base-$b$ number system. We rewrite the number in a base-$b$ system where the digits of the number are numbers in between $0$ and $b-1$, and $x$ has the numerical value given by an infinite series expansion.

**** Let's consider an example. Look at the real number $126.42$. Normal textbooks use definitions for the normal form of a real number with two options: either to use $1.2642 \times 10^2$ or $0.12642 \times 10^3$. In this course, we will use the first option, and we will use the following definition of a normal form of a real number.

**** Suppose that $x$ is a non-zero real number in a base-$b$ number system (zero is a special case). Then rewrite the number in this form: we may have a positive or negative sign, times $m \times b^k$, where $m$ is a number which is bigger than or equal to $1$ and less than $b$ ($1 \le m < b$). This condition will make the normal form unique. The number $m$ is called the **mantissa** of the real number, and $k$ is the **exponent** of the number $x$.

**** So, how do we store a real number? We will use a base-$b$ number system. We select the base $b$ of the numbering system, and there are several methods for how to store a number in a computer.

**** We will explain the standard IEEE specification you can see here. This particular specification defines the floating-point representation of real numbers using 32 bits or using 64 bits. The first one is called the **single-precision** number system, and the base of the system is $2$, so this is the binary number system.

**** To store numbers using 32 bits, consider a non-zero number. Rewrite it in a binary normal form; then the sign of the number can be written as $(-1)^s$. In that case, $s = 0$ corresponds to a positive sign, and $s = 1$ denotes a negative sign of a real number.

**** The mantissa of the number is bigger than or equal to $1$. Since we are in a base-2 number system, the mantissa, since it is bigger than or equal to $1$, always starts with $1$. So the first digit is always $1$ for a non-zero number, and here are the fractional digits of the mantissa.

**** The sign bit—the value of $s$—is stored on the first bit. From the second to the ninth bit, we store the exponent of the number, or more precisely, the **shifted exponent**. Instead of $k$, because we don't want to store negative integers to save some space, we shift the value of $k$: we add $127$ to the value of $k$, and the result is denoted by $E$. This is the shifted exponent. The shifted exponent is stored on the next eight bits. That means we will assume that $E$ is a zero or positive integer.

**** And of course, eight bits is a limitation on how big $E$ can be in order to be able to store it on eight bits. The rest of the bits are used to store the mantissa bits—the fractional part of the mantissa. But since we have 23 bits left, we can store only 23 bits from the mantissa. Somehow, we need to round the mantissa up to 23 bits.

**** Before we talk about it, let's look at the following table, which introduces two special symbols and also the storage of the number zero. Zero is a special number because we don't use the normal form of zero. If a number is zero in this number system, then we do the following: we may use a positive or negative sign of the number, so we can use the first bit equal to $0$ or $1$, but all the rest of the bits are equal to zero. That corresponds to the zero real number; both the mantissa fractional bits and the exponent bits are equal to zero.

**** We have two special symbols in this IEEE specification: the symbol `inf` to store infinity as a possible value of a numerical operation, and there is another symbol denoted by `NaN`, which is the symbol "Not a Number". Infinity can be the result of a mathematical operation, and we store this result in the following way: the sign bit can be $0$ or $1$ depending on plus infinity or minus infinity situations, all the exponent bits are equal to $1$, and also at least one of the mantissa bits should be equal to zero... excuse me, if all exponent bits are $1$ and the mantissa bits are zero, that corresponds to the symbol infinity. But if all the exponent bits are equal to $1$ and the mantissa bits are not all equal to zero, that is the special symbol `NaN`—positive `NaN` or negative `NaN`. It can be used in a program to store the result of an operation which is undefined. A typical example is division by zero, which is undefined as a mathematical operation.

**** So we have these two special symbols in this specification.

**** The largest possible value for the exponent when all the exponents are equal to $1$ corresponds to the integer $255$, but that is reserved for special symbols like infinity and `NaN`. That means the largest possible exponent value for a real floating-point number is only $254$ for $E$, which means the value for $k$ is in between $-126$ and $+127$.

**** So the smallest positive representable number in this number system corresponds to $k = -126$ and the mantissa fractional part being non-zero, where the last mantissa bit equals $1$. This is the smallest situation, around $10^{-38}$. This is the smallest positive real number which we can store in this IEEE specification.

**** Similarly, we can find the largest possible real number which we can store using this system. It corresponds to $k = 127$ and when all the mantissa bits are equal to $1$. The value of it is around $10^{38}$, so this is the largest real number. In each storage system, there is a smallest and a largest positive real number which we can store without error.

**** The storage system using 64 bits is given here. We use a shifted exponent again, using a bias, and we use 11 bits to store the shifted exponent. The rest of the bits, 52 bits, are used for the fractional part of the mantissa. The smallest positive real number using this 64-bit storage system is around $10^{-308}$, and the largest is approximately $10^{308}$—much smaller and much bigger than when using single precision.

**** Here is a simple example just to understand this system. Suppose we have a small toy computer where we have only four bits to store everything, and we use a binary normal form in this storage system with a shifted value of the exponent shifted by only $1$. The first bit is used for the sign bit (can be $0$ or $1$). Here we just list all the possible values in the case of a positive sign bit. The shifted value of the exponent can be evaluated, along with the last two bits for the fractional part of the mantissa. You can check that these are the real numbers which we can use on such a simple computer, and of course, we don't store infinity in this special computer.

---

### **Part 5: Floating-Point Rounding Mechanics**

**** So, what can we do with all the real numbers? How do we store a real number in a computer using such a system? First of all, the real numbers can be stored using such a storage system as **machine numbers**. If we have a number $x$ we want to store, the machine number used to store it instead of $x$ is denoted by $\text{fl}(x)$—the floating-point representation of the real number $x$.

**** So what is the definition of this floating-point representation? If the absolute value of $x$ is less than the smallest positive real number which can be stored in the computer, then let's use zero instead of a positive real number. So we store zero, and the floating-point representation of $x$ will be equal to zero by definition. This is an **underflow**.

**** In the case when $x$ is bigger than the largest positive number, we store the symbol plus infinity, and if $x$ is less than minus the largest positive real number, then we store minus infinity instead of $x$ in the computer. This is a so-called **overflow** in these last two situations.

**** But what is the definition of this storage system in the intermediate cases? There are basically two approaches. In the first, look at the binary normal form of the real number. Here is the mantissa in the binary normal form, which may contain infinitely many fractional digits. We store, in the case of a single-precision calculation, the first 23 bits. This is the so-called **chopping** of the mantissa—just omit the rest of the bits because we don't have space for those bits. Okay, this is one approach: omit the digits we don't have space for.

**** The second and more popular approach is **rounding**, and this previous IEEE specification uses it. Look at the following explanation of the definition. Suppose that $x$ is positive for simplicity. This is the binary normal form of the mantissa. Let's define two consecutive machine numbers, $x'$ and $x''$. The first machine number, $x'$, uses only the first 23 bits in the mantissa of this number and is multiplied by the exponent of the number $x$. This number is denoted by $x'$.

**** And $x''$ is when we add $1$ to the last mantissa bit—numerically, we add $2^{-23}$ to the value of the mantissa. Just increase the last bit by $1$, and multiply that mantissa by $2^k$. This machine number is denoted by $x''$. That means our real number $x$ is in between $x'$ and $x''$, which are consecutive machine numbers in the computer. What is the distance between two machine numbers? It is easy to check if you take the difference of the two numbers; it is $2^{-23} \times 2^k$.

**** The definition of the floating-point representation of $x$: we round down and use $x'$ if the machine number $x'$ is closer to $x$. This is the first case, when the distance between $x$ and $x'$ is less than the distance between $x$ and $x''$. If $x'$ is closer to $x$, we use $x'$. In the opposite situation, when $x''$ is closer, we use the $x''$ machine number as the representation of $x$.

**** But what happens in the situation when $x$ is the exact midpoint of the interval $[x', x'']$? If the distance is equal to one-half of the distance of the consecutive machine numbers, the definition in the storage system depends on the 23rd mantissa bit, $m_{23}$. If $m_{23} = 0$, then we use $x'$, which means we round downwards. But in the case when $m_{23} = 1$, we round upwards and use $x''$ as the number which we use instead of $x$ in the storage system.

**** What is the idea behind this? In this critical midpoint situation, in half of the cases we will round down, and in the other half of the situations we will round up. Okay, that will help us to balance the error of the rounding—the cumulative effect of rounding if we do several computations. Because of this situation, we have to round, but again, we try to balance the effect of it. So that was the idea of this specification.

**** If you take the absolute error $|x - \text{fl}(x)|$, its value is less than or equal to one-half of the distance between $x'$ and $x''$. This is the distance: $\frac{1}{2} \times 2^{-23} \times 2^k$. And if we compare this error to the exact value of $x$—consider this ratio to estimate the relative error—we can estimate the numerator by the previous formula from above. When we replace the denominator by its lowest possible value based on the mantissa being $\ge 1$, we further increase the value of this fraction.

**** So this is the estimate, and this last estimate will not contain $k$, where $k$ is the exponent of the number. This expression does not depend on the value of the exponent; it depends only on the storage system because here we have a fixed number of places to store the mantissa bits, and that appears in the final answer.

**** One more comment which is important and interesting: the first machine number larger than $1$ is the number $1 + 2^{-23}$ if we use single-precision floating-point arithmetic. $\epsilon_m$ will denote this distance; $\epsilon_m$ denotes the distance between $1$ and the next following machine number. This is called the **machine epsilon**. Using a base-2 storage system, this is the smallest power of two for which the computer evaluates the equality $1 + \epsilon > 1$ to be true. Okay, this is a method by which we can generate the value of the machine epsilon using computation.

---

### **Part 6: Absolute vs. Relative Error and 4-Digit Arithmetic**

**** For numbers which are positive, and for which we can represent the number with a non-zero positive machine number which is less than infinity, let's introduce this notation in general.

**** Suppose we have a real number $x$, and $\tilde{x}$ denotes an approximation of the real number $x$. The error—the **absolute error** of the approximation—is the absolute value of the difference of the exact value minus the approximate value: $\Delta_x = |x - \tilde{x}|$.

**** In the previous slides, we interpreted the floating-point representation of a real number as an approximation of a real number in this storage system, and here we have a formula for the error of the approximation and an upper estimate of the error. When we compare the absolute error to the exact value, this is the next definition: consider the absolute error of the approximation divided by the absolute value of $x$. This fraction is called the **relative error** of the approximation: $\delta_x = \frac{|x - \tilde{x}|}{|x|}$.

**** So, in the relative error of the floating-point representation of a real number, we have this very nice, simple formula for its upper bound: one-half of the machine epsilon ($\frac{1}{2}\epsilon_m$). We are always interested, when we approximate a value, to know the error of the approximation. But of course, in general, we cannot compute the exact error because then we would need to know both the exact value and the approximate value. If we already know the exact value, we don't really need the approximation, so typically we don't know the exact value; we just use a numerical approximation. But in that case, we would like to make an upper estimate of the error, like in the previous slide where we were able to give an upper bound of the error.

**** Consider a case where the exact value is $10,000$ and $10,000.1$ is the approximation; the absolute error is $0.1$. Or a second example: the exact value is $1$ and $1.1$ is the approximation; the absolute error of the approximation is also $0.1$. Which one is better? Many times, when we compare the error to the exact value, that gives us more information about the precision of the approximation. Like in this numerical example, when we compute the relative error for the first case, we get $10^{-5}$, and the relative error for the second numerical example gives us $10^{-1}$. The relative error is much smaller in the case of the first numerical example, and in that sense, it is better. So many times, we are interested in the computation and estimation of the relative error.

**** One more comment: later in this course, many times we will check the effect of the rounding error in a calculation. To artificially increase the visibility of the effect of the rounding error, we will assume that we have a very special arithmetic calculation technique: suppose we have a computer system which stores numbers in a decimal storage system, and we store exactly **four mantissa digits** and no exponent. Otherwise, we will store only the first four significant digits of each real number in this computer.

**** Let's look at an example. $1.043$ can be stored in this system because it consists of four digits. And $32.25$ uses four digits again, so we can store those numbers. But the exact sum of the two numbers is $33.293$, which contains five significant digits. But we have only four spaces in this computer, so we need to round. We round this number down, and instead of it, we store only the first four digits of the result in the computer. The computer says that the result equals $33.29$. This type of computation is called **four-digit arithmetic**. This is just a technique to increase the effect of the rounding error in some of the examples later.

**** Consider the product of these two previous numbers. Here is the exact product: $33.63675$. Certainly, it contains too many digits, so we need to round to the first four digits. But we round upwards because the fifth digit is $6$; we need to round upwards, so the result using four-digit arithmetic is $33.64$.

**** And the last example: we add two numbers, $0.0003$ and $1.000$, and this is the exact sum: $1.0003$. The problem again is that it contains too many digits; we need to round. In order to use only four digits, we have to round it down. Since the fifth digit equals $3$, we need to round downwards, and this is the rounded value of the result of the addition: $1.000$. Okay, so that equals the second number exactly in this situation.

---

### **Part 7: Error Propagation Theory**

**** In section 1.3, we will talk about **error analysis**, which is an important topic in numerics for understanding the propagation of errors. Given two real numbers $x$ and $y$, suppose they are positive real numbers and we have approximations for $x$ and $y$. Let $\tilde{x}$ and $\tilde{y}$ denote the approximations of $x$ and $y$. Suppose then we have upper estimates of the absolute error of those approximations: $\Delta_x$ will denote the upper estimate of the error of the approximation of $x$, and $\Delta_y$ is the upper estimate of the error of the approximation of $y$. For example, when we store real numbers, we have seen that we have a formula for the error of the approximation.

**** If we define the relative error bound, this fraction is denoted by lowercase $\delta_x = \frac{\Delta_x}{x}$, and similarly, lowercase $\delta_y = \frac{\Delta_y}{y}$ is the relative error ratio. This is the estimate of the relative error of the approximations. Suppose we know all four of these numbers ($\Delta_x, \Delta_y, \delta_x, \delta_y$).

**** Then we can pose the following problem: we would like to perform an arithmetic operation on $x$ and $y$—like addition, subtraction, multiplication, division—but instead of using the exact values $x$ and $y$, we perform the arithmetic operation on the approximate numbers $\tilde{x}$ and $\tilde{y}$, suppose without introducing any new rounding error. The question is: how much error do we get in this situation?

**** First, look at **addition**. So again, we are looking for an estimate of the error when we compare the exact sum $x + y$ with the value of the approximate sum $\tilde{x} + \tilde{y}$. This is the approximation of the addition. Here, the upper estimate is the estimate of the total error of this operation, and if we consider the absolute error divided by the exact value—remember that $x$ and $y$ are positive reals, so we don't need the absolute value in the denominator—we are looking for a number which gives us an upper estimate of the relative error.

**** The first theorem says that the following formulas work: $\Delta_x + \Delta_y$ will be good as the upper estimate of the absolute error of the addition, and if we consider the maximum of lowercase $\delta_x$ and lowercase $\delta_y$, that will work as the estimate of the relative error of the addition:

$$\Delta_{x+y} \le \Delta_x + \Delta_y \qquad \delta_{x+y} \le \max(\delta_x, \delta_y)$$

How to prove it?

**** We are looking for the estimate of the error $|(x + y) - (\tilde{x} + \tilde{y})|$ in absolute value, and we would like to use the given information $\Delta_x$ and $\Delta_y$. This is not difficult because we just change the order here: rewrite it as $|(x - \tilde{x}) + (y - \tilde{y})|$. Another basic trick: if we have a sum inside an absolute value, we can separate them turn by turn using the triangle inequality, which will increase the value: $|x - \tilde{x}| + |y - \tilde{y}|$. Immediately, we can use the fact that the $|x - \tilde{x}|$ absolute value can be estimated by $\Delta_x$, and the second term is estimated by $\Delta_y$. We are done because we found the number which works as the estimate of the absolute error, proving the first statement in the theorem.

**** Let's estimate the relative error. Consider this fraction:

$$\frac{|(x + y) - (\tilde{x} + \tilde{y})|}{x + y}$$

What can we do in the numerator? If we increase the value of it by the previous formula, $\Delta_x + \Delta_y$, we increase the value of the fraction. What we do here next is just divide the sum in the numerator term by term by the denominator. So we write it as the first term divided by the denominator, plus the second term divided by the denominator:

$$\frac{\Delta_x}{x+y} + \frac{\Delta_y}{x+y}$$

**** What is the goal? Somehow, we would like to use lowercase $\delta_x$ and lowercase $\delta_y$ in the estimate. What is that? It is $\delta_x = \frac{\Delta_x}{x}$. So what we do is we divide the first term by $x$ and multiply by $x$. Look here, we do this algebraic trick, and the same in the second fraction: we multiply the numerator by $y$ and divide by $y$. Of course, this will not change the value of the formula, but then appears the fraction which is denoted by $\delta_x$, and the second fraction contains $\delta_y$:

$$\frac{x}{x+y}\delta_x + \frac{y}{x+y}\delta_y$$

**** Here is one more little trick: if we replace both relative errors with the largest of the two relative errors ($\max(\delta_x, \delta_y)$), then we increase the expression. We replace the first $\delta_x$ with the maximum and the $\delta_y$ with the maximum, and we can factor out this same maximum value out of the two terms. What is the sum of the remaining coefficients? The sum of the two fractions equals:

$$\frac{x}{x+y} + \frac{y}{x+y} = \frac{x+y}{x+y} = 1$$

This gives us $1$, and that simplifies the estimate. We just omit this factor of $1$, and this is the final answer: the maximum of the two numbers ($\max(\delta_x, \delta_y)$) is an upper estimate of the relative error of the addition.

**** You don't strictly need to memorize the proofs later in the course, but I will show you several proofs because if you understand the proofs, you understand the theory. It is good to understand it, but you don't need to memorize it. So going back, we have a nice estimate for the error of the addition, and that means the error may increase, but not very fast. The relative error in the result is not bigger than the maximum of the two original relative errors. The maximum will be bounded, so the conclusion is that the approximation does not suffer a massive expansion of error; the error will increase moderately, not fast.

**** Look at a particular example: $x = 1$, $y = 2$. The approximation of $x$ is, let's say, $\tilde{x} = 1.1$, and the approximation for $y$ is $\tilde{y} = 1.8$. Then the exact sum of $x$ and $y$ is equal to $3$, and $\tilde{x} + \tilde{y} = 2.9$. So the absolute error in this calculation is $0.1$. The theorem says that the worst-case possible error is the sum of the two individual absolute error bounds, and if the two error bounds are $0.1$ and $0.2$, the total bound is $0.3$. The actual error in the result cannot be bigger than the sum of the two errors, and here is an example when the actual error is even smaller. The previous theorem always gives us the worst-case estimate—in the worst situation, this is the largest possible error, but in practice, the error can be smaller, as this example demonstrates. So the conclusion is that addition is a numerically stable arithmetic operation.

**** Let's look at the next arithmetic operation: **subtraction**. Suppose that $x$ and $y$ are positive numbers, and let's evaluate the difference $x - y$. The absolute error of the subtraction is bounded by the sum of the absolute errors again ($\Delta_x + \Delta_y$), so that's a number which is an upper estimate of the absolute error of the subtraction. But for the relative error, we get a more complicated formula:

$$\delta_{x-y} \le \frac{x}{|x-y|}\delta_x + \frac{y}{|x-y|}\delta_y$$

This gives us a number which is an upper estimate of the relative error. How do we prove it?

**** Here is the proof again, just simple algebraic manipulations. Rewrite this difference as $|(x - y) - (\tilde{x} - \tilde{y})| = |(x - \tilde{x}) - (y - \tilde{y})|$, and take the absolute value term by term. Then we increase the expression using the so-called triangle inequality of the absolute value; that's one of the basic properties of the absolute value. Then we have $|x - \tilde{x}|$, which is estimated by capital $\Delta_x$, and the second term $|y - \tilde{y}|$ is estimated by $\Delta_y$. That proves the first statement: this sum is an upper estimate of the absolute error.

**** But when we look at the relative error, again, what we can do is increase the numerator using $\Delta_x + \Delta_y$, separate the fractions, and multiply and divide by $x$ in the first term and multiply and divide by $y$ in the second term. This fraction $\frac{\Delta_x}{x}$ is denoted by lowercase $\delta_x$, and the second fraction $\frac{\Delta_y}{y}$ is $\delta_y$. But then we cannot further simplify this estimate. If we again try to factor out the maximum of the two relative errors, the sum of the remaining coefficients is $\frac{x+y}{|x-y|}$, and this sum is not equal to $1$ in this situation. So we cannot simplify the formula or do any further estimation; we must consider this number as the final upper estimate of the relative error.

**** We may see a severe problem with this result. In the case when we have two numbers which are close to each other—nearly equal—and we subtract two nearly equal numbers, what is the problem? Let me go back to the formula. In that case, $|x - y|$ can be close to zero. Then we divide by a number which is very close to zero, so these coefficients can be exceptionally big. We may increase the value of the relative error by a factor which can be huge! So the product can be big, and the estimate can be huge. Nothing can guarantee that the relative error in the result should be small in practice.

**** Let's see a numerical example where the relative error in the approximations is originally small—the relative error is around $10^{-6}$ if we compute it for $x$. And similarly for $y$: this is the number $y$ close to $x$, consider an approximation of $y$, and this is a good approximation with a relative error of $4 \times 10^{-7}$, which is very small. But if you compute the exact difference, $x - y = 0.00025$, and the difference of the approximations is $\tilde{x} - \tilde{y} = 0.000209$. If you compute the relative error of the result, you can check that the relative error equals around $1.6 \times 10^{-1}$, which is much bigger than the relative errors of $x$ and $y$! The relative error increased very significantly, by a magnitude of $10^5$.

**** And what was the problem? It was that $x$ and $y$ were numbers which were close to each other, so the previous formula will not guarantee a small error in the result of the computation. This is a highly problematic situation, and the phenomenon is called **loss of significance** (or catastrophic cancellation). We see a loss of significance in several situations in the case when we subtract two nearly equal numbers; that's problematic from the point of view of the rounding error. So subtraction is structurally not a globally stable arithmetic operation.

**** Look at **multiplication**. Here is the analytical result. If you want to estimate the difference $|xy - \tilde{x}\tilde{y}|$, this is a standard algebraic trick in calculus you could see: add and subtract the term $\tilde{x}y$ in the formula. Then we can factor out $y$ from the first two terms, and factor out $\tilde{x}$ from the next terms, and split the absolute value term by term to increase it:

$$|xy - \tilde{x}\tilde{y}| = |y(x - \tilde{x}) + \tilde{x}(y - \tilde{y})| \le |y||x - \tilde{x}| + |\tilde{x}||y - \tilde{y}|$$

Here we can use $\Delta_x$ to estimate $|x - \tilde{x}|$. For the second term, we use a further algebraic trick: substitute $\tilde{x} = x + (\tilde{x} - x)$, split the absolute value for $x$ and for the difference separately, and for the differences, we can use the estimates $\Delta_x$ and $\Delta_y$. This is the final absolute error formula what we get; the error is estimated by this formula which contains $\Delta_x$ and $\Delta_y$:

$$\Delta_{xy} \le y\Delta_x + x\Delta_y + \Delta_x\Delta_y$$

**** If we compute the relative error, use the previous absolute estimate in the numerator and divide it by $xy$. If we divide term by term by the denominator, it is easy to see that here in the first term, we can simplify by $y$, and what is left is the fraction $\frac{\Delta_x}{x}$, which gives us lowercase $\delta_x$. In the second term, we can simplify by $x$, and what is left is $\frac{\Delta_y}{y}$, which is lowercase $\delta_y$. And the last term gives us the product of $\delta_x$ and $\delta_y$:

$$\delta_{xy} \le \delta_x + \delta_y + \delta_x\delta_y$$

So this is the final exact estimate for the relative error. It is a little bit more complicated expression than in the first operation.

**** How can we simplify it? There is a way to simplify: we can assume that the errors are small, so $\Delta_x$ and $\Delta_y$ are small numbers compared to $x$ and $y$. Okay, those are small numbers, and here we have a product of two small numbers ($\delta_x\delta_y$). The product of two small numbers will be negligibly small, so this last term is much smaller than the first two. If we omit the last term, that gives us a very good approximation of the relative error bound:

$$\delta_{xy} \approx \delta_x + \delta_y$$

**** How do we interpret this? The relative error of the product is not bigger than the sum of the relative errors of the components. The relative error increases linearly, but not very rapidly, so the conclusion is that multiplication is a numerically stable arithmetic operation.

**** Let's look at the last arithmetic operation: **division**. Again, suppose $x$ and $y$ are positive numbers, and suppose for simplicity of the estimation that the relative error of $y$ is less than $1$ ($\delta_y < 1$). Let me skip the step-by-step algebraic proof here, and this is the final statement of the theorem: the absolute error is given by a formula, and the relative error bound is given by this term here:

$$\delta_{x/y} \le \frac{1}{1 - \delta_y}(\delta_x + \delta_y)$$

Look, this is why we need that $\delta_y$ should be less than $1$, so that the denominator is positive.

**** The exact estimation is complicated. How can we simplify it? If we assume $\delta_y$ is much smaller than $1$, we can omit this term in the denominator of the fraction; we can omit it because we can assume it's much smaller than $1$. If we omit it, then we change the value of the formula but not very significantly, and we get the simplified relative error formula: $\delta_{x/y} \approx \delta_x + \delta_y$.

**** But if we look at the absolute error, after simplification, we get that the absolute error in $x$ is multiplied by $\frac{1}{y}$ approximately, and the error in $y$ is multiplied by $\frac{x}{y^2}$. That's problematic because when $y$ is close to zero, then $\frac{1}{y}$ can be a very big number. A small error multiplied by a big factor means the product can be big, so the absolute error can be massive in the result. The same here: if $y^2$ is much smaller than $x$, then the fraction can be very big, and we may increase the absolute error by a big factor, meaning the final answer contains a big absolute error.

**** That gives us again a problematic situation when we divide a number by a number which is close to zero, or divide a number by a number which is much smaller than the numerator; then the absolute error in the answer can explode. But the relative error is not so bad; the relative errors just add up, so it increases but not very fast. If we look at the numerical example here, you can find a numerical example which demonstrates this: the absolute error in each number is small ($10^{-6}, 10^{-7}$), but the absolute error in the result of the division is of the order of $10^{-2}$—a bad situation.

**** For this reason, numerical calculation can be dangerous. It may contain a significant rounding error when we have a sequence of arithmetic operations, and we always do many arithmetic operations in a calculation. The primary cases are when we do subtraction when the two numbers are close, or when we do division when we divide by a small number close to zero or a small number relative to the numerator; then the result may contain a significant error compared to the error of the previous step. Those are the operations where we really observe dangerous error propagation in the calculation of arithmetic operations.

---

### **Part 8: Practical Engineering Examples & Best Practices**

**** In section 1.4, we will look at a few practical examples, and these examples are related to the problem of managing errors in the calculation.

**** First, consider this quadratic equation:

$$x^2 - 163.3x + 0.1 = 0$$

which is, of course, analytically easy to solve, but we would like to see the effect of the rounding error. We will use **four-digit arithmetic** during the computation to artificially increase the effect of the rounding error. We use the standard quadratic formula, but step by step. Like here, when we compute the square of this number ($163.3^2 = 26666.89$), we round the result to the first four digits, which gives $26670$. Next, we do the subtraction of $4ac = 0.4$, which we can do without further error ($26669.6$), but then we compute the square root of it and round it to the first four decimal digits, which gives $163.3$. Then, this is the first root:

$$\tilde{x}_1 = \frac{163.3 + 163.3}{2} = 163.3$$

And this is the second root of the equation:

$$\tilde{x}_2 = \frac{163.3 - 163.3}{2} = 0$$

**** Let's check the exact solutions up to high decimal digit precision to compare. Consider the highly precise values as the exact solution of this problem. When we compute the relative error, $\tilde{x}_1$ is considered an approximate value with a relative error of the order of $10^{-4}$, which is, of course, easy to understand and accept because we always round to the first four decimal digits, so we cannot expect a better error in the result.

**** But the error in the second root is much more interesting because here the calculated numerical error is $1.0$ (or $100\%$), which is massive compared to the error of the first root! What is the reason? It is not difficult to realize that in the computation of the second root here, we need to subtract two numbers which are close to each other ($163.3 - 163.3$), and that's a dangerous, problematic operation. The result will contain a relatively big relative error, and that is the reason why we see a catastrophic relative error in the second root.

**** But the question is really: how do we avoid this error? If you look at the formula, this is the case when $b$ is negative in the equation. In the formula, when $4ac$ is much smaller than $b^2$, then the square root $\sqrt{b^2 - 4ac}$ will be close to the absolute value of $b$. Again, then we will subtract two numbers which are close to each other in the numerator. Let's do an algebraic manipulation: multiply both the numerator and the denominator by the conjugate expression: $-b + \sqrt{b^2 - 4ac}$. In the numerator, we can use the algebraic identity $(a-b)(a+b) = a^2 - b^2$:

$$x_2 = \frac{(-b - \sqrt{b^2 - 4ac})(-b + \sqrt{b^2 - 4ac})}{2a(-b + \sqrt{b^2 - 4ac})} = \frac{b^2 - (b^2 - 4ac)}{2a(-b + \sqrt{b^2 - 4ac})}$$

The $b^2$ terms disappear because they cancel out in the subtraction, and after that, we can divide by $2$ and also by $a$. This gives us the rewritten, simplified formula:

$$x_2 = \frac{2c}{-b + \sqrt{b^2 - 4ac}}$$

**** What is important? First of all, this formula is mathematically completely equivalent to the original formula; this is the exact root. But here, $-b$ is a positive number, and we add the square root, so we have an addition. We no longer have a subtraction in the formula between two numbers that are close to each other, so we don't run into the problem of the loss of significance using this rewritten formula.

**** In the opposite case, when $b$ is positive, for the other root we can do the same calculation to find an alternative stable formula. Let's try to use that alternative formula to compute the second root. Do all the computations using four-digit arithmetic; the final result is $0.0006124$, and that contains a relative error of the order of $10^{-4}$, which is again very small and perfectly acceptable.

**** The second example is a little bit similar problem. We would like to evaluate $\cos^2(x) - \sin^2(x)$ in the case when $x$ is close to $\frac{\pi}{4}$. Then the first and the second terms are numbers which are close to each other, so we have to subtract two numbers which are close to each other. That's a dangerous arithmetic operation numerically. How do we avoid it? We have a trigonometric identity: $\cos^2(x) - \sin^2(x) = \cos(2x)$. If we use this equivalent formula in the case when $x$ is close to $\frac{\pi}{4}$, the function evaluation built into computers and calculators will not face the problem of subtracting two numbers which are close to each other, so the numerical result is highly precise.

**** We have a similar problem in the next example: evaluate $e^x - 1$, denoted by $f(x)$, in the case when $x \approx 0$. $e^0$ is $1$, so the difference is close to zero. When $x$ is close to zero, we need to subtract two numbers which are close to each other again. How do we avoid it? We don't have a simple trigonometric identity in this situation, but calculus can help. Use the Taylor series expansion of the exponential function: $e^x$ can be written as an infinite sum of terms ($1 + x + \frac{x^2}{2!} + \dots$). Then if we subtract $1$, we can cancel out the $1$ here in the analytical calculation, and what is left is this infinite series:

$$e^x - 1 = x + \frac{x^2}{2!} + \frac{x^3}{3!} + \dots$$

How do we use it in practice? Of course, we use a finite truncated sum to approximate the infinite sum. There is a truncation error when we do it, but the total error in the output will be much smaller than the error we would get if we did the calculation directly in the original form.

**** There is a different type of problem in the next example. Here, the task is to evaluate this formula:

$$a_n = \frac{15^{40}}{40!}$$

If you do it by the definition directly, first evaluate the numerator: $15^{40}$. The result is a very big integer. The denominator is $40!$ (forty factorial)—the product of integers from $1$ up to $40$, which also gives us a massive integer number. Using a small computer or standard registers, we may face a rounding or storage problem because the intermediate results can be larger than the maximum representable value; the result can overflow, and we cannot perform the computation. But we know from calculus that the limit of $\frac{x^n}{n!}$ as $n$ goes to infinity is zero, so a relation of this form should ultimately be a small number close to zero when $n$ is large. What can we do? The trick is easy: rearrange the calculation in this way. Rewrite the formula as:

$$a_n = \frac{15}{40} \times \frac{15}{39} \times \frac{15}{38} \times \dots \times \frac{15}{1}$$

In this form, each individual fraction is easy to compute, meaning we can do the computation step by step without any significant rounding error or danger of overflow, and then we can compute the product of those numbers precisely. It is easy to write a program code for it; with a simple loop, we can do it. This is the numerical result: with a single-precision calculation, we get a highly accurate approximation of the answer. The trick was to change the structural execution order of the calculation—the way how we perform the calculation.

**** The last problem is the following: we would like to evaluate this sum where we first consider $1.0$, and then add $0.0003$ to the result one thousand times. This is the formula which we would like to evaluate numerically. Again, we use four-digit arithmetic. We do the calculation from left to right. First, consider the first two numbers: $1.0 + 0.0003$, and the exact sum is $1.0003$. But we need to round to the first four digits, so we round, and the rounded result is $1.000$. Next, we need to add $0.0003$ again, which gives $1.0003$, which rounds back to $1.000$. If we do it one thousand times, still the final numerical result equals exactly $1.000$.

**** But next, let's do the calculation in the opposite order: first add the small numbers together one thousand times, and then add $1.0$ to the accumulated result. In this opposite order, the sum of the small numbers ($\sum_{i=1}^{1000} 0.0003$) can be performed without any rounding error, even using four-digit arithmetic, yielding $0.3000$. Then, add $1.0$ to the result: $1.0 + 0.3000 = 1.300$. We can do it without any error, and the numerical result gives us $1.300$ as the exact answer of the computation.

**** So again, the conclusion is that if you do addition numerically, the result may change if you use a different order of summation. Therefore, floating-point addition is not a strictly commutative or associative operation numerically. Another major conclusion is that when we want to add several terms of widely different magnitudes, it is highly recommended to do the computation in **increasing order of the terms**. First add the small terms together, then add the bigger terms to the running result, and so on. In that way, the values of the two numbers we need to compute at any given step are close to each other in magnitude, and we don't face the loss of significance or underflow truncation problems in the addition.

**** Okay, these are some questions and some notions we will study later in the course.