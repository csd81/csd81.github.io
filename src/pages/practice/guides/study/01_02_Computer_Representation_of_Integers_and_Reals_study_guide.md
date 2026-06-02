Computer Representation of Integers and Reals: Study Guide

This study guide provides a comprehensive review of the methods used by computers to store and manipulate numerical data, including integers and real numbers. It covers base systems, binary representations, IEEE standards for floating-point arithmetic, and the nature of approximation errors.


--------------------------------------------------------------------------------


Part 1: Short-Answer Quiz

Instructions: Answer the following questions in 2–3 sentences based on the information provided in the source text.

1. How is the maximum representable integer determined in a base b system with m digits?
2. Describe the sign-magnitude representation for binary integers.
3. What is the primary advantage of using two's-complement representation over sign-magnitude?
4. Define the "normal form" of a real number as established in the text.
5. In the IEEE 754 single-precision format, why is the first bit of the mantissa not stored?
6. Under what conditions do arithmetic underflow and overflow occur?
7. What is the "chopping" method in the context of machine numbers?
8. Explain the IEEE rounding rule for a value that is exactly the average of two consecutive machine numbers.
9. What is "machine epsilon" (\varepsilon_m)?
10. How is a relative error related to the number of "exact digits" in a base b system?


--------------------------------------------------------------------------------


Part 2: Answer Key

1. The maximum integer (I_{\max}) is represented when all m digits are equal to b-1. Numerically, this value is calculated as I_{\max} = b^m - 1, allowing for a total of b^m different integers (including zero) to be stored.
2. Sign-magnitude representation allocates the most significant bit (the leftmost bit) as a sign bit, where 0 represents a positive integer and 1 represents a negative integer. The remaining m-1 bits are used to store the magnitude or absolute value of the number.
3. The two's-complement representation is frequently used in practice because it allows subtraction to be performed as an addition. Additionally, unlike sign-magnitude which has two representations for zero, two's-complement provides a unique representation for each value and extends the range of negative numbers.
4. The normal form of a non-zero real number x in a base b system is defined as x = \pm m \cdot b^k, where 1 \leq m < b. Here, m is referred to as the mantissa and k is the exponent of the number.
5. In binary normal form, the mantissa of a non-zero number always begins with a leading 1 (e.g., 1.m_1 m_2 \dots). Since this leading digit is always 1, it is omitted from storage to save space, and only the fractional bits are stored.
6. Arithmetic underflow occurs when the absolute value of a number x is smaller than the smallest positive representable machine number, resulting in \mathrm{fl}(x) = 0. Overflow occurs when the absolute value of x is larger than the largest representable machine number, resulting in \mathrm{fl}(x) = \pm\mathtt{Inf}.
7. Chopping is a method for defining a machine number \mathrm{fl}(x) by taking the binary normal form of x and retaining only the specific number of mantissa fractional bits the storage system allows. All remaining bits are simply omitted without adjusting the stored value.
8. When a value x is exactly halfway between two consecutive machine numbers x' and x'', the IEEE standard rounds to the machine number whose 23rd mantissa bit is 0. This ensures that in critical cases, the system rounds up about half the time and rounds down the other half, while also allowing division by 2 to be performed without error.
9. Machine epsilon is the difference between 1 and the first machine number larger than 1. It represents the smallest power of 2 for which the computer can recognize that 1 + \varepsilon_m > 1.
10. A relative error indicates the precision of an approximation by comparing the absolute error to the exact value. An approximation \tilde{x} is considered exact in n digits if the relative error is less than or equal to \frac{1}{2}b^{1-n}.


--------------------------------------------------------------------------------


Part 3: Essay Questions

Instructions: Use the provided source context to develop comprehensive responses to the following prompts.

1. Analysis of Signed Integer Storage: Compare and contrast sign-magnitude and two's-complement representations. Explain the mathematical definitions for each and discuss why two's-complement is the preferred method in modern computing.
2. The IEEE 754 Standard Structure: Detail the 32-bit single-precision and 64-bit double-precision formats. Discuss the allocation of bits for the sign, exponent, and mantissa, and explain the role of "shifted" exponents in these systems.
3. Special Symbols and Edge Cases: Explain the bit-level definitions and practical uses for +0, -0, \mathtt{Inf}, and \mathtt{NaN}. Discuss how these symbols allow programs to handle undefined mathematical operations and infinite values.
4. Floating-Point Arithmetic and Precision: Define machine numbers and explain how computer-performed operations (\oplus, \ominus, \odot, \oslash) differ from theoretical mathematics. Use the concept of 4-digit arithmetic to illustrate how rounding errors can propagate during calculations.
5. The Mathematics of Error Bounds: Prove the relationship between machine epsilon and the relative error of a machine number \mathrm{fl}(x). Explain how the choice of base b and the number of mantissa bits t affect the value of \varepsilon_m.


--------------------------------------------------------------------------------


Part 4: Glossary of Key Terms

Term	Definition
Absolute Error	The numerical difference between an exact value x and its approximation \tilde{x}, expressed as |x - \tilde{x}|.
Chopping	A method of representing a real number by discarding all mantissa bits that exceed the storage capacity of the system.
Double Precision	An IEEE specification for representing floating-point numbers using 64 bits (11-bit shifted exponent, 52-bit fractional mantissa).
Exponent	The power k to which the base b is raised in the normal form of a real number.
Floating-Point Number	A representation of a real number in normal form, consisting of a signed mantissa and an exponent.
Machine Epsilon (\varepsilon_m)	The difference between 1 and the next representable machine number larger than 1; the smallest power of 2 such that 1 + \varepsilon_m > 1.
Machine Number	A real number that can be represented exactly in a specific floating-point format without any storage error.
Mantissa	The part of a real number in normal form (m) that contains its significant digits, where 1 \leq m < b.
NaN (Not-a-Number)	A special IEEE symbol used to represent the result of undefined operations, such as division by zero or the square root of a negative number.
Relative Error	The ratio of the absolute error to the magnitude of the exact value: |x - \tilde{x}| / |x|.
Rounding	The process of defining \mathrm{fl}(x) as the machine number closest to the real number x.
Shifted Exponent	A technique where a constant (e.g., 127 for single precision) is added to the actual exponent k to ensure the stored value e is a non-negative integer.
Sign Bit	The bit (usually the leftmost) that indicates whether a number is positive (0) or negative (1).
Single Precision	An IEEE specification for representing floating-point numbers using 32 bits (8-bit shifted exponent, 23-bit fractional mantissa).
Two's-Complement	A method for storing signed integers where negative numbers are represented as 2^m + I, facilitating subtraction through addition.
