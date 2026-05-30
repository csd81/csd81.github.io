export interface Flashcard { q: string; a: string }

// §1.2 flashcards (Q/A with KaTeX math), imported from 0102flashcards.csv.
export const FLASHCARDS: Flashcard[] = [
  {
    "q": "In a base-$b$ number system with $m$ digits, what is the formula for the numerical value of an integer $I = (a_{m-1}a_{m-2}...a_1 a_0)_b$?",
    "a": "$I = a_{m-1}b^{m-1} + a_{m-2}b^{m-2} + \\cdots + a_1 b + a_0$"
  },
  {
    "q": "What is the numerical value of the largest integer $I_{\\max}$ that can be represented with $m$ digits in base $b$?",
    "a": "$I_{\\max} = b^m - 1$"
  },
  {
    "q": "How many different integers can be represented using $m$ digits in a base-$b$ system?",
    "a": "$b^m$ different integers"
  },
  {
    "q": "In binary sign-magnitude representation, what value is stored in the sign bit for a negative integer?",
    "a": "1"
  },
  {
    "q": "In an $m$-bit sign-magnitude system, how many bits are used to store the magnitude of the number?",
    "a": "$m - 1$ bits"
  },
  {
    "q": "What are the largest ($I_{\\max}$) and smallest ($I_{\\min}$) representable integers in an $m$-bit sign-magnitude system?",
    "a": "$I_{\\max} = 2^{m-1} - 1$ and $I_{\\min} = -(2^{m-1} - 1)$"
  },
  {
    "q": "How is the integer 0 represented in a sign-magnitude binary system?",
    "a": "It can be stored as an identically 0 bit sequence or as $100...0$ (negative zero)."
  },
  {
    "q": "In $m$-bit two's-complement representation, how is the stored value $C$ defined for a non-negative integer $0 \\le I \\le 2^{m-1} - 1$?",
    "a": "$C = I$"
  },
  {
    "q": "In $m$-bit two's-complement representation, what is the definition of $C$ for a negative integer $-2^{m-1} \\le I < 0$?",
    "a": "$C = 2^m + I$"
  },
  {
    "q": "What is the range of representable integers $[I_{\\min}, I_{\\max}]$ in an $m$-bit two's-complement system?",
    "a": "$[-2^{m-1}, 2^{m-1} - 1]$"
  },
  {
    "q": "In two's-complement representation, what does a first bit of 1 indicate about the integer $I$?",
    "a": "The integer $I$ is negative."
  },
  {
    "q": "What is the primary computational advantage of using two's-complement representation for signed integers?",
    "a": "Subtraction can be performed as addition."
  },
  {
    "q": "Process: Convert a negative integer to two's-complement manually.",
    "a": "Take the binary form of the absolute value, flip all bits (0 to 1, 1 to 0), and add 1."
  },
  {
    "q": "What is the numerical value of a real number $x$ represented in base $b$ as $(x_{m-1}x_{m-2}...x_0.x_{-1}x_{-2}...)_b$?",
    "a": "$x = \\sum_{i=-\\infty}^{m-1} x_i b^i$"
  },
  {
    "q": "Define the normal form of a non-zero real number $x$ in base $b$.",
    "a": "$x = \\pm m \\cdot b^k$, where $1 \\le m < b$."
  },
  {
    "q": "In the floating point normal form $x = \\pm m \\cdot b^k$, what are the terms $m$ and $k$ called?",
    "a": "$m$ is the mantissa and $k$ is the exponent."
  },
  {
    "q": "What base system is used by computers to represent floating point numbers according to the IEEE 754 specification?",
    "a": "The binary number system (base 2)."
  },
  {
    "q": "In IEEE 754 single precision (32-bit), which bit stores the sign $s$?",
    "a": "The 1st bit (most significant bit)."
  },
  {
    "q": "How is the exponent $k$ stored in IEEE 754 single precision (32-bit)?",
    "a": "As a shifted value $e = k + 127$ stored on bits 2–9."
  },
  {
    "q": "Why is the leading digit of the mantissa (the 1 in $1.m_1 m_2...$) not stored in IEEE binary representation?",
    "a": "In normal form it is always 1, so it is omitted (hidden bit) to save storage space."
  },
  {
    "q": "How many bits are used for the fractional part of the mantissa in IEEE 754 single precision?",
    "a": "23 bits (stored on bits 10–32)."
  },
  {
    "q": "In the IEEE 754 32-bit standard, what does a stored exponent $e = 0$ and all mantissa bits = 0 represent?",
    "a": "The value 0 (can be +0 or -0 depending on the sign bit)."
  },
  {
    "q": "In the IEEE 754 32-bit standard, what is the representation for $+\\mathtt{Inf}$?",
    "a": "$s = 0$, $e = 255$ (all 1s), and at least one mantissa bit is 0."
  },
  {
    "q": "What do the IEEE 754 symbols $+\\mathtt{NaN}$ and $-\\mathtt{NaN}$ signify?",
    "a": "Not-a-Number, resulting from undefined operations like division by zero or roots of negative numbers."
  },
  {
    "q": "What range of values for $e$ is reserved for finite real numbers in IEEE 754 single precision?",
    "a": "$0 \\le e \\le 254$"
  },
  {
    "q": "In IEEE 754 single precision, what are the possible values for the actual exponent $k$?",
    "a": "$-127 \\le k \\le 127$"
  },
  {
    "q": "What is the approximate value of the smallest positive representable number ($x_{\\min}$) in single precision?",
    "a": "$10^{-38}$"
  },
  {
    "q": "What is the approximate value of the largest finite representable number ($x_{\\max}$) in single precision?",
    "a": "$10^{38}$"
  },
  {
    "q": "In IEEE 754 double precision (64-bit), how is the shifted exponent $e$ calculated?",
    "a": "$e = k + 1023$"
  },
  {
    "q": "Which bits are used to store the shifted exponent in IEEE 754 double precision?",
    "a": "Bits 2–12 (11 bits total)."
  },
  {
    "q": "How many bits are used for the fractional part of the mantissa in IEEE 754 double precision?",
    "a": "52 bits (stored on bits 13–64)."
  },
  {
    "q": "What is the approximate range of positive real numbers representable in double precision?",
    "a": "$10^{-308}$ to $10^{308}$"
  },
  {
    "q": "Term: Machine numbers",
    "a": "Definition: The set of real numbers that can be stored in a specific computer representation without error."
  },
  {
    "q": "The machine representation of a real number $x$ is denoted by the symbol _____.",
    "a": "$fl(x)$"
  },
  {
    "q": "Condition: $|x| < x_{\\min}$. What is the result in floating point arithmetic?",
    "a": "Arithmetic underflow, resulting in $fl(x) = 0$."
  },
  {
    "q": "Condition: $x > x_{\\max}$. What is the result in floating point arithmetic?",
    "a": "Arithmetic overflow, resulting in $fl(x) = \\mathtt{Inf}$."
  },
  {
    "q": "Concept: Chopping",
    "a": "Definition: A method of defining $fl(x)$ where the mantissa fractional bits are truncated to fit the storage limit."
  },
  {
    "q": "Concept: Rounding",
    "a": "Definition: Defining $fl(x)$ as the machine number nearest to the real value $x$."
  },
  {
    "q": "In IEEE rounding, how is $fl(x)$ determined if $x$ is exactly halfway between two consecutive machine numbers $x'$ and $x''$?",
    "a": "It rounds to the machine number whose last mantissa bit ($m_{23}$) is 0."
  },
  {
    "q": "Why does the IEEE standard round to the nearest machine number with a last mantissa bit of 0 in tie-break cases?",
    "a": "It ensures unbiased rounding (up/down half the time) and allows division by 2 without error."
  },
  {
    "q": "What is the maximum absolute error $|x - fl(x)|$ when using IEEE single precision rounding?",
    "a": "$\\frac{1}{2} 2^{-23} 2^k$"
  },
  {
    "q": "Define 'machine epsilon' ($\\varepsilon_m$).",
    "a": "The difference between the number 1 and the first machine number greater than 1."
  },
  {
    "q": "How is machine epsilon ($\\varepsilon_m$) used to evaluate computer comparisons involving the number 1?",
    "a": "It is the smallest power of 2 for which the computer evaluates $1 + \\varepsilon_m > 1$ as true."
  },
  {
    "q": "According to Theorem 1.9, what is the bound for the relative error $|x - fl(x)|/|x|$ using rounding?",
    "a": "$\\frac{1}{2}\\varepsilon_m$"
  },
  {
    "q": "Theorem 1.10: For a base-2 system with $t$ bits for the mantissa fractional part, what is $\\varepsilon_m$?",
    "a": "$2^{-t}$"
  },
  {
    "q": "Theorem 1.10: For a base $b \\ne 2$ with $t$ mantissa digits, what is the formula for $\\varepsilon_m$?",
    "a": "$b^{1-t}$"
  },
  {
    "q": "Formula: Absolute Error of an approximation $\\tilde{x}$ to $x$.",
    "a": "$|x - \\tilde{x}|$"
  },
  {
    "q": "Formula: Relative Error of an approximation $\\tilde{x}$ to $x$.",
    "a": "$\\frac{|x - \\tilde{x}|}{|x|}$ (where $x \\ne 0$)."
  },
  {
    "q": "What is the condition for an approximation $\\tilde{x}$ to be considered 'exact in $n$ digits' in base $b$?",
    "a": "$\\frac{|x - \\tilde{x}|}{|x|} \\le \\frac{1}{2}b^{1-n}$"
  },
  {
    "q": "In the decimal system ($b = 10$), how does a factor of 1/10 reduction in relative error affect the number of exact digits?",
    "a": "The number of exact digits increases by 1."
  },
  {
    "q": "How many exact decimal digits are guaranteed in single precision floating point arithmetic?",
    "a": "7 digits."
  },
  {
    "q": "Process: Find the binary fractional part of a decimal $x$.",
    "a": "Repeatedly multiply the fractional part by 2; the integer part of each result provides the binary digits ($x_1, x_2, ...$)."
  },
  {
    "q": "What is the decimal value of the binary number $(101101)_2$?",
    "a": "45"
  },
  {
    "q": "What is the decimal value of the binary fraction $(0.10011)_2$?",
    "a": "$0.5 + 0.0625 + 0.03125 = 0.59375$ (or $\\frac{19}{32}$)"
  },
  {
    "q": "Define the machine operation $x \\oplus y$.",
    "a": "$fl(fl(x) + fl(y))$"
  },
  {
    "q": "Concept: 4-digit rounding arithmetic",
    "a": "Definition: Floating point arithmetic where results of every step are rounded to the first 4 significant digits."
  },
  {
    "q": "In 4-digit arithmetic, what is the result of $1.043 + 20340$?",
    "a": "20340 (The exact value 20341.043 is rounded to 4 significant digits)."
  },
  {
    "q": "How do you represent a real number as a floating point machine number if its absolute value exceeds $x_{\\max}$?",
    "a": "Store it as $+\\mathtt{Inf}$ for $x > 0$ or $-\\mathtt{Inf}$ for $x < 0$."
  },
  {
    "q": "In a 4-bit floating point system where 1 bit is sign, 1 bit is $e = k+1$, and 2 bits are fractional mantissa, what is the value represented by bit sequence $0001$?",
    "a": "$(1.01)_2 \\cdot 2^{-1} = \\frac{5}{8}$"
  },
  {
    "q": "In a 4-bit floating point system (sign=1, $e=k+1$=1, mantissa=2), what is the value represented by $0100$?",
    "a": "$(1.00)_2 \\cdot 2^0 = 1$"
  },
  {
    "q": "In a 4-bit floating point system (sign=1, $e=k+1$=1, mantissa=2), what is the value represented by $0111$?",
    "a": "$(1.11)_2 \\cdot 2^0 = \\frac{7}{4} = \\frac{14}{8}$"
  },
  {
    "q": "According to Example 1.11, if $x = 1657.3$ and $\\tilde{x} = 1656.2$, why is the approximation exact in 3 digits?",
    "a": "Because the relative error $0.0006637 < 0.5 \\cdot 10^{-2}$."
  },
  {
    "q": "What determines if one approximation is better than another when the absolute errors are identical?",
    "a": "The relative error (comparison to the magnitude of the exact value)."
  },
  {
    "q": "What binary sequence represents the number 12 in base 2?",
    "a": "$(1100)_2$"
  },
  {
    "q": "Why is the fractional value 0.4 problematic in binary representation?",
    "a": "It results in a periodically repeating bit sequence $(0.01100110...)$ and cannot be represented exactly in finite bits."
  },
  {
    "q": "What decimal value corresponds to the binary normal form $(1.100011...0)_2 \\cdot 2^3$ used to approximate 12.4 in single precision?",
    "a": "$12.3999996185302734375$"
  },
  {
    "q": "Explain the term 'significant digits'.",
    "a": "The sequence of digits in a number starting from the first non-zero digit."
  },
  {
    "q": "What is the binary representation of the decimal integer 57?",
    "a": "$(111001)_2$"
  },
  {
    "q": "What is the binary representation of the decimal fraction 0.25?",
    "a": "$(0.01)_2$"
  },
  {
    "q": "In a decimal system ($b = 10$), what is the machine epsilon $\\varepsilon_m$ for a representation storing $t = 4$ mantissa digits?",
    "a": "$10^{1-4} = 10^{-3} = 0.001$"
  },
  {
    "q": "If $x$ and $\\tilde{x}$ have the same order of magnitude and their first $m+1$ digits are the same, how many exact digits of accuracy does $\\tilde{x}$ have at minimum?",
    "a": "At least $m$ exact digits."
  },
  {
    "q": "What is the purpose of the 127 bias in single precision exponents?",
    "a": "It allows exponents to be stored as non-negative integers (0 to 255) while representing a range including negative powers."
  },
  {
    "q": "In the table for $m=3$ bit two's-complement, what is the stored binary code for the decimal integer -4?",
    "a": "100"
  },
  {
    "q": "In the table for $m=3$ bit two's-complement, what is the stored binary code for the decimal integer -1?",
    "a": "111"
  },
  {
    "q": "What value of $e$ is used in IEEE 754 to represent special symbols like Infinity and NaN?",
    "a": "$e = 255$ ($11111111_2$)."
  },
  {
    "q": "In single precision, what is the smallest positive $k$ exponent value?",
    "a": "-127 (corresponding to $e=0$)."
  },
  {
    "q": "In binary floating point, how is the sign $s$ used in the value formula?",
    "a": "The value is multiplied by $(-1)^s$."
  }
];
