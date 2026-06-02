Stopping Criteria of Iterations: A Comprehensive Study Guide

In numerical methods, finding the root of a function f often involves generating an infinite sequence p_k where the limit p represents the exact value of the root. In practice, this sequence must be terminated at a finite step k that provides a "large enough" approximation of the limit. This guide explores the strategies, mathematical conditions, and potential pitfalls associated with determining when to stop these iterations.


--------------------------------------------------------------------------------


Part 1: Review Quiz

Instructions: Answer the following questions using two to three sentences based on the provided source materials.

1. What is the primary objective of defining stopping criteria in numerical iteration methods?
2. Describe the mathematical formulation and intent of Condition (i).
3. How does Condition (ii) differ from Condition (i) in terms of its error analysis?
4. When is Condition (iii) specifically applicable, and what does it measure?
5. Why is it recommended to include a maximal iteration number in computer code?
6. What does it mean to say that the stopping criteria are "heuristic"?
7. In the example of the sequence p_k = \sum_{i=1}^k \frac{1}{i}, why is Condition (i) considered deceptive?
8. What happens when Condition (ii) is applied to the divergent sequence p_k = \sum_{i=1}^k \frac{1}{i}?
9. How can the geometry of a function's graph lead to a "false positive" for Condition (iii)?
10. What is the standard practical approach to ensuring a reliable termination of an iterative process?


--------------------------------------------------------------------------------


Part 2: Answer Key

1. The primary objective is to determine a specific step k where the term p_k serves as a sufficiently accurate approximation of the exact root p. Since generating an infinite sequence is impossible, these criteria define when the approximation is "good enough" to stop.
2. Condition (i) is defined as |p_k - p_{k-1}| < \varepsilon_1, serving as a numerical analogue for absolute error. It assumes that if the distance between two consecutive terms is smaller than a predefined tolerance, both terms are likely close to the actual limit.
3. While Condition (i) measures the distance between consecutive terms directly, Condition (ii) calculates the ratio \frac{|p_k - p_{k-1}|}{|p_k|} as an analogue for relative error. This approach is more robust because it takes the order of magnitude of the terms into account during the evaluation.
4. Condition (iii) tests whether |f(p_k)| < \varepsilon_3, checking if the function value at the current approximation is sufficiently close to zero. Unlike the first two conditions, which can apply to any iteration, this condition is specifically designed for root-finding problems in single-variable functions.
5. A maximal iteration number prevents the program from entering an infinite loop if the sequence fails to converge. Additionally, it helps terminate the process if convergence is occurring too slowly to be computationally efficient.
6. The criteria are heuristic because they are based on the assumption that small differences between terms or small function values imply proximity to the root. However, mathematical exceptions exist where these conditions are met even when the sequence is far from the root or not converging at all.
7. In this sequence, the difference between terms is 1/k, which becomes smaller than the tolerance \varepsilon_1 as k increases, suggesting convergence. However, the sequence p_k = \sum_{i=1}^k \frac{1}{i} actually diverges to infinity, meaning the stopping criterion is met even though there is no finite limit.
8. As k approaches infinity, the ratio of the difference between terms to the sum of the terms approaches zero, satisfying Condition (ii). Despite meeting this relative error threshold, the sequence remains non-convergent, demonstrating that Condition (ii) can also fail to identify a divergent sequence.
9. A function's graph may contain a "valley" where the function value |f(p_k)| is smaller than the tolerance \varepsilon_3, but the point p_k is still far from the actual root where f(p)=0. In such cases, the third condition is satisfied prematurely due to the local shape of the function.
10. Because no single condition is perfect, practitioners typically use a combination of stopping criteria, such as checking both the difference between terms and the function value. This combined approach, along with a maximal iteration limit, provides a more reliable method for terminating sequences.


--------------------------------------------------------------------------------


Part 3: Essay Questions

Instructions: Use the concepts discussed in the source material to provide in-depth responses to the following prompts.

1. The Divergence Dilemma: Analyze how the harmonic sequence p_k = \sum_{i=1}^k \frac{1}{i} serves as a critical counter-example for both absolute and relative error-based stopping criteria. Explain why the reduction in distance between consecutive terms is not a guarantee of convergence.
2. Absolute vs. Relative Error: Compare and contrast Condition (i) and Condition (ii). Discuss the specific mathematical advantages of using a relative error analogue when dealing with values of varying orders of magnitude.
3. Functionality of Condition (iii): Evaluate the strengths and weaknesses of using function evaluation (|f(p_k)| < \varepsilon_3) as a stopping criterion. Under what specific graphical conditions might this criteria lead to an inaccurate approximation of a root?
4. Algorithmic Safety: Discuss the importance of implementing a "maximal iteration number" in numerical software. Beyond preventing infinite loops, how does this parameter interact with the concept of slow convergence?
5. Synthesis of Criteria: Argue for the necessity of using a combination of stopping criteria in practical engineering or mathematical applications. How does using multiple tolerances simultaneously mitigate the risks associated with the heuristic nature of individual conditions?


--------------------------------------------------------------------------------


Part 4: Glossary of Key Terms

Term	Definition
Absolute Error Analogue	A stopping criterion (Condition i) based on the distance between consecutive terms $
Convergence	The property of a sequence p_k as it approaches a specific finite limit p as k increases to infinity.
Heuristic	A practical approach to problem-solving or discovery that is not guaranteed to be optimal or perfect but is sufficient for immediate goals.
Maximal Iteration Number	A predefined limit on the number of steps in a sequence to prevent infinite loops and manage slow convergence in computer code.
Numerical Method	A mathematical strategy used to generate a sequence of approximations to find the solution (such as a root) of a problem.
Relative Error Analogue	A stopping criterion (Condition ii) that scales the difference between consecutive terms by the magnitude of the current term: $\frac{
Root	The value p for which the function f(p) = 0.
Stopping Criteria	A set of predefined conditions or rules used to decide when to terminate an iterative numerical process.
Tolerance (\varepsilon)	A small, predefined positive number used as a threshold to determine if a stopping condition has been satisfied.
