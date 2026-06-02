### Comprehensive Study Guide: The Bisection Method

This study guide provides a detailed overview of the bisection method, a fundamental numerical technique for solving scalar nonlinear algebraic equations. It covers the theoretical foundations, the algorithmic process, error estimation, and practical examples as presented in the source materials.

#### Part 1: Short Answer Quiz

**Instructions:**  Answer the following questions in 2–3 sentences based on the information provided in the source context.

1. **What is the primary objective of the bisection method?**  
2. **What condition must a continuous function**  **$f**$  **satisfy on an interval**  **$a, b**$  **for the bisection method to be applicable?**  
3. **How does the Intermediate Value Theorem (Bolzano–Darboux Theorem) support the validity of this method?**  
4. **Describe the mathematical definition of the midpoint**  **$p\_0**$  **in the first iteration of the method.**  
5. **What happens to the algorithm if the midpoint**  **$p\_k**$  **results in**  **$f(p\_k) \= 0**$  **?**  
6. **If**  **$f(p\_k) \\neq 0**$  **, how is the next interval**  **$a\_{k+1}, b\_{k+1}**$  **determined?**  
7. **According to Cantor’s nested intervals theorem, what happens as the number of iterations**  **$k**$  **approaches infinity?**  
8. **What is the formula used to estimate the maximum error**  **$|p\_k \- p|**$  **after**  **$k**$  **steps?**  
9. **How can one determine the minimum number of iterations**  **$k**$  **required to reach a specific tolerance**  **$\\varepsilon**$  **?**  
10. **In the provided example**  **$f(x) \= e^x \- 2\\cos x**$  **, why is it noted that the function has a unique root on**  **$0, 1**$  **?**

#### Part 2: Quiz Answer Key

1. **What is the primary objective of the bisection method?**  The bisection method is a numerical algorithm used to approximate the solution (root) of a scalar nonlinear algebraic equation  $f(x) \= 0$ . It aims to find a value  $p$  within a given interval such that the function evaluates to zero.  
2. **What condition must a continuous function**  **$f**$  **satisfy on an interval**  **$a, b**$  **for the bisection method to be applicable?**  The function must be continuous on the interval  $a, b$  and must have opposite signs at the endpoints. Mathematically, this is expressed as  $f(a)f(b) \< 0$ .  
3. **How does the Intermediate Value Theorem (Bolzano–Darboux Theorem) support the validity of this method?**  The theorem states that if a continuous function has values of opposite signs at the ends of an interval, it must take every value in between, including zero. Therefore, there must be at least one root  $p$  within the interval  $(a, b)$ .  
4. **Describe the mathematical definition of the midpoint**  **$p\_0**$  **in the first iteration of the method.**  The midpoint  $p\_0$  is defined as the arithmetic mean of the interval endpoints  $a\_0$  and  $b\_0$ . It is calculated using the formula  $p\_0 \= (a\_0 \+ b\_0) / 2$ .  
5. **What happens to the algorithm if the midpoint**  **$p\_k**$  **results in**  **$f(p\_k) \= 0**$  **?**  If the function value at the midpoint is exactly zero, the algorithm has successfully found a root. In this case,  $p\_k$  is the solution, and the numerical method terminates after a finite number of steps.  
6. **If**  **$f(p\_k) \\neq 0**$  **, how is the next interval**  **$a\_{k+1}, b\_{k+1}**$  **determined?**  The algorithm selects the sub-interval ( $a\_k, p\_k$  or  $p\_k, b\_k$ ) where the function continues to exhibit a sign change at the endpoints. If  $f$  changes sign on  $a\_k, p\_k$ , that becomes the new interval; otherwise, the interval  $p\_k, b\_k$  is chosen.  
7. **According to Cantor’s nested intervals theorem, what happens as the number of iterations**  **$k**$  **approaches infinity?**  As  $k \\to \\infty$ , the length of the nested intervals  $(b-a)/2^k$  tends to zero, meaning the intervals shrink to a single point. This theorem proves there exists a unique point  $p$  that is common to all intervals, and the sequence of midpoints  $p\_k$  converges to this root.  
8. **What is the formula used to estimate the maximum error**  **$|p\_k \- p|**$  **after**  **$k**$  **steps?**  The error is bounded by half the length of the  $k$ \-th interval. The formula is  $|p\_k \- p| \\leq \\frac{b \- a}{2^{k+1}}$ .  
9. **How can one determine the minimum number of iterations**  **$k**$  **required to reach a specific tolerance**  **$\\varepsilon**$  **?**  To ensure the error is within a tolerance  $\\varepsilon$ , the index  $k$  must satisfy the inequality  $k \\geq \\log\_2 \\frac{b \- a}{\\varepsilon} \- 1$ . This allows for the calculation of the required steps before starting the iteration.  
10. **In the provided example**  **$f(x) \= e^x \- 2\\cos x**$  **, why is it noted that the function has a unique root on**  **$0, 1**$  **?**  While the bisection method guarantees at least one root, this specific function is strictly monotone increasing on the interval  $0, 1$ . Because it only moves in one direction (increasing) and crosses the x-axis, it can only have one unique root.

#### Part 3: Essay Questions

**Instructions:**  Use the principles described in the source context to develop comprehensive responses to the following prompts.

1. **Theoretical Foundations:**  Explain the relationship between the Intermediate Value Theorem and Cantor’s Nested Intervals Theorem in the context of the bisection method. How does each theorem contribute to the proof that the method will always converge to a root?  
2. **Algorithmic Logic:**  Provide a step-by-step breakdown of the bisection method's iterative process. Discuss how the "opposite sign property" is used to narrow the search area and why the interval length decreases at a predictable rate.  
3. **Precision and Convergence:**  Analyze the formula  $k \\geq \\log\_2 \\frac{b \- a}{\\varepsilon} \- 1$ . Explain how the initial interval length and the desired tolerance  $\\varepsilon$  impact the number of iterations required. Use the example of  $f(x) \= e^x \- 2\\cos x$  with  $\\varepsilon \= 10^{-5}$  to illustrate your points.  
4. **Error Analysis:**  Discuss the significance of the error bound  $|p\_k \- p| \\leq \\frac{b \- a}{2^{k+1}}$ . Why is it possible to know the maximum potential error of an approximation  $p\_k$  even if the exact root  $p$  is unknown?  
5. **Limitations and Edge Cases:**  Consider the exercise involving  $f(x) \= 1/x$  on the interval  $-0.5, 3$ . Based on the requirements of the bisection method (specifically continuity), discuss potential issues that might arise when applying this algorithm to functions that are not continuous across the entire chosen interval.

#### Part 4: Glossary of Key Terms

Term,Definition  
Bisection Method,A numerical algorithm for finding a root of a nonlinear equation by repeatedly halving an interval and selecting the sub-interval in which a root must exist.  
Cantor's Nested Intervals Theorem,"A theorem stating that a sequence of nested, closed, bounded intervals whose lengths tend to zero contains exactly one common point."  
"Continuous Function (  $f \\in Ca,b$  )",A function with no interruptions or breaks over a specific interval; a requirement for the bisection method's reliability.  
Intermediate Value Theorem,"A theorem (also called Bolzano–Darboux) stating that for a continuous function  $f$ , if  $d$  is between  $f(a)$  and  $f(b)$ , there exists a  $c$  in  $(a, b)$  such that  $f(c) \= d$ ."  
Midpoint (  $p\_k$  ),"The center point of the current interval  $a\_k, b\_k$ , calculated as  $(a\_k \+ b\_k) / 2$ , used as the numerical approximation of the root."  
Opposite Sign Property,"The condition  $f(a)f(b) \< 0$ , which indicates that the function values at the endpoints of an interval have different signs, guaranteeing at least one root between them."  
Root (or Zero),A value  $p$  such that  $f(p) \= 0$ .  
Scalar Nonlinear Equation,"An algebraic equation where the unknown variable is not in a linear form (e.g., involves powers, exponentials, or trigonometric functions)."  
Tolerance (  $\\varepsilon$  ),A predefined maximum allowable error bound for a numerical approximation.

##### Reference Table: Bisection Method Iteration Example

*Function:*  *$f(x) \= e^x \- 2\\cos x*$  *on interval*  *$0, 1*$  *with*  *$\\varepsilon \= 10^{-5}*$| $k$ | $a\_k$ | $b\_k$ | $p\_k$ | $f(p\_k)$ || \------ | \------ | \------ | \------ | \------ || 0 | 0.00000000 | 1.00000000 | 0.50000000 | \-1.0644e-01 || 1 | 0.50000000 | 1.00000000 | 0.75000000 | 6.5362e-01 || 2 | 0.50000000 | 0.75000000 | 0.62500000 | 2.4632e-01 || 3 | 0.50000000 | 0.62500000 | 0.56250000 | 6.3206e-02 || ... | ... | ... | ... | ... || 16 | 0.53977966 | 0.53979492 | 0.53978729 | 5.8483e-06 |  
