// Auto-generated learning aids for '2.9 (Review of Multivariable Calculus).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const MV_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Extreme value theorem in $\\mathbb{R}^n$ (Thm 2.37)",
      "hu": "Weierstrass-tétel $\\mathbb{R}^n$-ben (2.37. tétel)"
    },
    "def": {
      "en": "A continuous $f$ on a closed and bounded set $E\\subset\\mathbb{R}^n$ attains its maximum and minimum on $E$. The $n$-dimensional analogue of Thm 2.1.",
      "hu": "Egy zárt és korlátos $E\\subset\\mathbb{R}^n$ halmazon folytonos $f$ felveszi a maximumát és minimumát $E$-n. A 2.1. tétel $n$-dimenziós megfelelője."
    }
  },
  {
    "term": {
      "en": "Partial derivative & $C^m$",
      "hu": "Parciális derivált és $C^m$"
    },
    "def": {
      "en": "$\\partial f/\\partial x_i$ differentiates $f(x_1,\\dots,x_n)$ in one variable. $f\\in C^m$ means all partials up to order $m$ exist and are continuous.",
      "hu": "$\\partial f/\\partial x_i$ az $f(x_1,\\dots,x_n)$-et egy változó szerint deriválja. $f\\in C^m$ azt jelenti, hogy minden $m$-edrendig vett parciális derivált létezik és folytonos."
    }
  },
  {
    "term": {
      "en": "Gradient $f'(\\mathbf{x})=\\nabla f$",
      "hu": "Gradiens $f'(\\mathbf{x})=\\nabla f$"
    },
    "def": {
      "en": "For $f\\in C^1$ the column vector $\\big(\\partial f/\\partial x_1,\\dots,\\partial f/\\partial x_n\\big)^T$ of partials. Points in the direction of steepest increase and is normal to the level sets.",
      "hu": "$f\\in C^1$ esetén a parciális deriváltak $\\big(\\partial f/\\partial x_1,\\dots,\\partial f/\\partial x_n\\big)^T$ oszlopvektora. A legmeredekebb növekedés irányába mutat, és merőleges a szintvonalakra."
    }
  },
  {
    "term": {
      "en": "Hessian $f''(\\mathbf{x})$",
      "hu": "Hesse-mátrix $f''(\\mathbf{x})$"
    },
    "def": {
      "en": "For $f\\in C^2$ the $n\\times n$ matrix of second partials $\\big[\\partial^2 f/\\partial x_i\\partial x_j\\big]$. Symmetric when $f\\in C^2$; it is the quadratic term of the Taylor expansion.",
      "hu": "$f\\in C^2$ esetén a második parciális deriváltak $\\big[\\partial^2 f/\\partial x_i\\partial x_j\\big]$ $n\\times n$ mátrixa. $f\\in C^2$-nél szimmetrikus; ez a Taylor-sor másodfokú tagja."
    }
  },
  {
    "term": {
      "en": "Multivariable Taylor formula (Thm 2.38)",
      "hu": "Többváltozós Taylor-formula (2.38. tétel)"
    },
    "def": {
      "en": "Expands $f\\in C^{m+1}$ around $\\mathbf{a}$ with multi-index sums of partials, plus a remainder evaluated at a point $\\xi$ on the segment $[\\mathbf{a},\\mathbf{x}]$.",
      "hu": "Egy $f\\in C^{m+1}$ függvényt $\\mathbf{a}$ körül fejt ki a parciális deriváltak multiindexes összegeivel, plusz egy maradéktaggal, amelyet egy $[\\mathbf{a},\\mathbf{x}]$ szakaszbeli $\\xi$ pontban értékelünk ki."
    }
  },
  {
    "term": {
      "en": "Second-order Taylor (gradient + Hessian form)",
      "hu": "Másodrendű Taylor (gradiens + Hesse alak)"
    },
    "def": {
      "en": "$f(\\mathbf{x})\\approx f(\\mathbf{a})+f'(\\mathbf{a})^T(\\mathbf{x}-\\mathbf{a})+\\tfrac12(\\mathbf{x}-\\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x}-\\mathbf{a})$ — the compact form behind $n$-D Newton and optimization.",
      "hu": "$f(\\mathbf{x})\\approx f(\\mathbf{a})+f'(\\mathbf{a})^T(\\mathbf{x}-\\mathbf{a})+\\tfrac12(\\mathbf{x}-\\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x}-\\mathbf{a})$ — az $n$-D Newton és az optimalizálás mögötti tömör alak."
    }
  },
  {
    "term": {
      "en": "Vector-valued derivative $g'(t)$",
      "hu": "Vektorértékű derivált $g'(t)$"
    },
    "def": {
      "en": "For $g\\colon I\\to\\mathbb{R}^n$, differentiate componentwise: $g'(t)=(g_1'(t),\\dots,g_n'(t))^T$. Continuous differentiability is componentwise too.",
      "hu": "$g\\colon I\\to\\mathbb{R}^n$ esetén komponensenként deriválunk: $g'(t)=(g_1'(t),\\dots,g_n'(t))^T$. A folytonos differenciálhatóság is komponensenkénti."
    }
  },
  {
    "term": {
      "en": "Chain rule (Thm 2.39)",
      "hu": "Láncszabály (2.39. tétel)"
    },
    "def": {
      "en": "For $f\\in C^1(\\mathbb{R}^n)$ and $g\\colon\\mathbb{R}\\to\\mathbb{R}^n$ continuously differentiable, $\\dfrac{d}{dt}f(g(t))=f'(g(t))^T g'(t)$ — gradient dotted with the velocity.",
      "hu": "Ha $f\\in C^1(\\mathbb{R}^n)$ és $g\\colon\\mathbb{R}\\to\\mathbb{R}^n$ folytonosan differenciálható, akkor $\\dfrac{d}{dt}f(g(t))=f'(g(t))^T g'(t)$ — a gradiens skalárszorozva a sebességgel."
    }
  },
  {
    "term": {
      "en": "Multivariable mean value theorem (Thm 2.40)",
      "hu": "Többváltozós középértéktétel (2.40. tétel)"
    },
    "def": {
      "en": "On an open convex $E$, $f(\\mathbf{x})-f(\\mathbf{y})=f'(\\mathbf{y}+\\xi(\\mathbf{x}-\\mathbf{y}))^T(\\mathbf{x}-\\mathbf{y})$ for some $\\xi\\in(0,1)$. Proved by restricting $f$ to the segment and using the 1-D MVT + chain rule.",
      "hu": "Nyílt konvex $E$-n $f(\\mathbf{x})-f(\\mathbf{y})=f'(\\mathbf{y}+\\xi(\\mathbf{x}-\\mathbf{y}))^T(\\mathbf{x}-\\mathbf{y})$ valamely $\\xi\\in(0,1)$-re. Bizonyítás: $f$-et a szakaszra szűkítve az 1-D középértéktétellel és a láncszabállyal."
    }
  },
  {
    "term": {
      "en": "Jacobian & linear approximation",
      "hu": "Jacobi-mátrix és lineáris közelítés"
    },
    "def": {
      "en": "For $\\mathbf{f}\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$ in $C^1$, the Jacobian $\\mathbf{f}'(\\mathbf{x})=\\big[\\partial f_i/\\partial x_j\\big]$ stacks the gradients of the components. The linear approximation $\\mathbf{f}(\\mathbf{x})\\approx \\mathbf{f}(\\mathbf{a})+\\mathbf{f}'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a})$ underlies $n$-D Newton.",
      "hu": "$\\mathbf{f}\\colon\\mathbb{R}^n\\to\\mathbb{R}^n$, $C^1$ esetén a Jacobi-mátrix $\\mathbf{f}'(\\mathbf{x})=\\big[\\partial f_i/\\partial x_j\\big]$ a komponensek gradienseit rakja egymásra. A $\\mathbf{f}(\\mathbf{x})\\approx \\mathbf{f}(\\mathbf{a})+\\mathbf{f}'(\\mathbf{a})(\\mathbf{x}-\\mathbf{a})$ lineáris közelítés az $n$-D Newton alapja."
    }
  }
]

export const MV_FLASHCARDS: Flashcard[] = [
  {"q":"According to Theorem 2.37, what two conditions must a set $E \\subset \\mathbb{R}^n$ satisfy for a continuous function $f$ to be guaranteed a maximum and minimum?","a":"The set $E$ must be closed and bounded."},
  {"q":"If a function $f$ has all partial derivatives up to order $m$ existing and continuous, what class does it belong to?","a":"The class $C^m$ (m-times continuously partially differentiable)."},
  {"q":"How is the gradient vector $f'(\\mathbf{x})$ of a function $f \\in C^1$ defined in terms of its partial derivatives?","a":"$f'(\\mathbf{x}) := (\\frac{\\partial f(\\mathbf{x})}{\\partial x_1}, \\dots, \\frac{\\partial f(\\mathbf{x})}{\\partial x_n})^T$"},
  {"q":"In multivariable calculus notation, the gradient vector $f'$ is typically represented as a _____ vector.","a":"Column"},
  {"q":"What is the name of the $n \\times n$ matrix $f''(\\mathbf{x})$ containing all second-order partial derivatives of a function $f \\in C^2$?","a":"The Hessian matrix (or Hessian)."},
  {"q":"In a Hessian matrix $f''(\\mathbf{x})$, what is the entry located at row $i$ and column $j$?","a":"$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(\\mathbf{x})$"},
  {"q":"To apply the multivariable Taylor's formula for an order $m$ approximation, what continuity class must the function $f$ belong to?","a":"$f \\in C^{m+1}$"},
  {"q":"According to Taylor's Theorem, where does the intermediate point $\\xi$ lie in relation to the points $\\mathbf{a}$ and $\\mathbf{x}$?","a":"On the line segment connecting $\\mathbf{a}$ and $\\mathbf{x}$."},
  {"q":"What is the parametric formula for the intermediate point $\\xi$ in Taylor's Theorem for some $t \\in (0, 1)$?","a":"$\\xi = \\mathbf{x} + t(\\mathbf{a} - \\mathbf{x})$"},
  {"q":"Write the first-order term (the summation part) of the Taylor expansion of $f(\\mathbf{x})$ around point $\\mathbf{a}$.","a":"$\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$"},
  {"q":"Write the second-order term (including the factorial) of the Taylor expansion of $f(\\mathbf{x})$ around point $\\mathbf{a}$.","a":"$\\frac{1}{2} \\sum_{i=1}^n \\sum_{j=1}^n \\frac{\\partial^2 f(\\mathbf{a})}{\\partial x_i \\partial x_j}(x_i - a_i)(x_j - a_j)$"},
  {"q":"Using gradient and Hessian notation, what is the second-order Taylor approximation of $f(\\mathbf{x})$ around $\\mathbf{a}$?","a":"$f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$"},
  {"q":"In the Taylor approximation $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$, the term $f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$ represents the _____ product of the gradient and the displacement vector.","a":"Scalar (or dot)"},
  {"q":"What advanced calculus concept identifies $f'$ and $f''$ as the first and second derivatives of $f$, respectively?","a":"The Fréchet derivative."},
  {"q":"For a vector-valued function $g: I \\to \\mathbb{R}^n$, how is the derivative $g'(t)$ defined?","a":"$g'(t) := (g_1'(t), \\dots, g_n'(t))^T$"},
  {"q":"When is a vector-valued function $g(t)$ considered \"continuously differentiable\"?","a":"When every one of its component functions is continuously differentiable."},
  {"q":"State the formula for the multivariable Chain Rule for the composite function $f(g(t))$.","a":"$\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$"},
  {"q":"What geometric property must the open set $E$ possess to apply the multivariable Lagrange's Mean Value Theorem?","a":"Convexity"},
  {"q":"State the formula for the multivariable Lagrange's Mean Value Theorem for $f(\\mathbf{x}) - f(\\mathbf{y})$.","a":"$f(\\mathbf{x}) - f(\\mathbf{y}) = f'(\\mathbf{y} + \\xi(\\mathbf{x} - \\mathbf{y}))^T(\\mathbf{x} - \\mathbf{y})$ for some $\\xi \\in (0, 1)$."},
  {"q":"In the proof of the multivariable Mean Value Theorem, what single-variable function $g(t)$ is defined on the interval $[0, 1]$?","a":"$g(t) = f(\\mathbf{y} + t(\\mathbf{x} - \\mathbf{y}))$"},
  {"q":"For a vector-valued function $\\mathbf{f}: E \\to \\mathbb{R}^n$, what is the name of the matrix $\\mathbf{f}'(\\mathbf{x})$?","a":"The Jacobian matrix (or derivative matrix)."},
  {"q":"What are the dimensions of the Jacobian matrix for a function $\\mathbf{f}: \\mathbb{R}^n \\to \\mathbb{R}^n$?","a":"$n \\times n$"},
  {"q":"In the Jacobian matrix $\\mathbf{f}'(\\mathbf{x})$, what does the $i$-th row represent?","a":"The transpose of the gradient vector of the $i$-th component function, $f_i'(\\mathbf{x})^T$."},
  {"q":"What is the formula for the linear approximation of a vector-valued function $\\mathbf{f}$ around a point $\\mathbf{a}$?","a":"$\\mathbf{f}(\\mathbf{x}) \\approx \\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$"},
  {"q":"In the linear approximation $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$, the term $\\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ involves what type of algebraic operation?","a":"Matrix-vector multiplication."},
  {"q":"The partial derivative of $f(x_1, \\dots, x_n)$ with respect to $x_i$ is denoted by the symbol _____.","a":"$\\frac{\\partial f}{\\partial x_i}$"},
  {"q":"If $\\mathbf{f} \\in C^1$, it implies that all first-order _____ derivatives of all component functions exist and are continuous.","a":"Partial"},
  {"q":"The Hessian matrix is defined for a function $f$ that is at least _____ times continuously partially differentiable.","a":"Two ($C^2$)"},
  {"q":"In the context of Taylor's formula, the term $\\frac{1}{m!}$ precedes the sum of the _____-th order partial derivatives.","a":"$m$"},
  {"q":"The notation $\\mathbf{f} \\in C^m$ for a vector-valued function means that _____ component function is $m$-times continuously partially differentiable.","a":"Every (or each)"},
  {"q":"What is the purpose of the vector $\\mathbf{x} - \\mathbf{a}$ in the Taylor approximation formulas?","a":"It represents the displacement vector from the center of approximation $\\mathbf{a}$ to the evaluation point $\\mathbf{x}$."},
  {"q":"True or False: The multivariable Taylor's formula requires the set $E$ to be closed.","a":"False (The theorem specifies $E$ must be an open set)."},
  {"q":"In the Hessian matrix, the diagonal elements represent the _____ partial derivatives with respect to the same variable twice.","a":"Pure second-order (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$)"},
  {"q":"The multivariable Lagrange's Mean Value Theorem generalizes the single-variable theorem to higher dimensions using the _____ rule.","a":"Chain"},
  {"q":"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ and $g: \\mathbb{R} \\to \\mathbb{R}^n$, the composition $f \\circ g$ is a function from $\\mathbb{R}$ to _____.","a":"$\\mathbb{R}$ (a scalar-valued function of one variable)."},
  {"q":"What is the dimension of the gradient vector for a function of $n$ variables?","a":"$n \\times 1$ (a column vector with $n$ components)."},
  {"q":"The Jacobian matrix entry at $(1, 1)$ is the partial derivative of the first component function $f_1$ with respect to _____.","a":"$x_1$"},
  {"q":"In the second-order Taylor approximation $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + \\dots$, the term $(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ is a _____ form.","a":"Quadratic"},
  {"q":"According to Theorem 2.38, for every $\\mathbf{x} \\in E$, there exists a $\\xi$ such that the remainder is expressed using the $(m+1)$-th order derivatives evaluated at _____.","a":"$\\xi$"},
  {"q":"Is the Hessian matrix of a $C^2$ function always square?","a":"Yes, it is always an $n \\times n$ matrix."},
  {"q":"The symbol $I$ in $g: I \\to \\mathbb{R}^n$ typically represents a(n) _____ of the real numbers.","a":"Interval"},
  {"q":"The Chain Rule result $\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$ produces a _____ value.","a":"Scalar"},
  {"q":"The Lagrange Mean Value Theorem states that the difference $f(\\mathbf{x}) - f(\\mathbf{y})$ is the product of the gradient at an intermediate point and the _____ vector.","a":"Difference (or displacement) vector $\\mathbf{x} - \\mathbf{y}$."},
  {"q":"Why is the transpose symbol used in $f'(g(t))^T g'(t)$?","a":"To ensure the dot product of the two column vectors $f'$ and $g'$ is calculated correctly as a scalar."},
  {"q":"Which matrix is used to linearly approximate a vector-valued function of several variables?","a":"The Jacobian matrix."},
  {"q":"In the expression $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$, what does $\\mathbf{f}(\\mathbf{a})$ represent?","a":"The value of the function at the center point of the approximation."},
  {"q":"Does the Hessian matrix $f''(\\mathbf{x})$ exist for a function in $C^1$?","a":"No, it requires the function to be in $C^2$."},
  {"q":"A set $E$ is _____ if for any two points in $E$, the line segment connecting them is also contained within $E$.","a":"Convex"},
  {"q":"In the multivariable Taylor formula, the remainder term is often called the _____ form of the remainder.","a":"Lagrange"},
  {"q":"The first-order Taylor polynomial of a scalar function $f$ describes the _____ plane at point $\\mathbf{a}$.","a":"Tangent"},
  {"q":"What is the relation between $m$ and the differentiability class $C^m$ if a function is said to be \"smooth\"?","a":"Smoothness usually implies $f \\in C^\\infty$ (infinitely differentiable), though the source material focuses on finite $m$."},
  {"q":"If $n=1$, the Jacobian matrix $\\mathbf{f}'$ reduces to a _____.","a":"Scalar derivative."},
  {"q":"The sum $\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$ can be written in vector notation as _____.","a":"$f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$"},
  {"q":"How many indices are used in the summation for the $m$-th order term of the general Taylor formula?","a":"$m$ indices ($i_1, i_2, \\dots, i_m$)."},
  {"q":"In the Taylor formula, what does the index $i_k$ range from?","a":"$1$ to $n$ (the number of variables)."}
]
