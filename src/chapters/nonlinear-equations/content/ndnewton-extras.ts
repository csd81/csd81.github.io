// Auto-generated learning aids for '2.12 (Newton in n Dimensions).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const NDNEWTON_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Nonlinear system $\\mathbf{f}(\\mathbf{x})=\\mathbf{0}$",
      "hu": "Nemlineáris rendszer $\\mathbf{f}(\\mathbf{x})=\\mathbf{0}$"
    },
    "def": {
      "en": "$n$ equations in $n$ unknowns, $\\mathbf{f}\\colon U\\subset\\mathbb{R}^n\\to\\mathbb{R}^n$. The vector generalization of the scalar root problem $f(x)=0$.",
      "hu": "$n$ egyenlet $n$ ismeretlenre, $\\mathbf{f}\\colon U\\subset\\mathbb{R}^n\\to\\mathbb{R}^n$. A skaláris $f(x)=0$ gyökfeladat vektoros általánosítása."
    }
  },
  {
    "term": {
      "en": "$n$-D Newton step (Eq. 2.30)",
      "hu": "$n$-D Newton-lépés (2.30)"
    },
    "def": {
      "en": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\big(\\mathbf{f}'(\\mathbf{p}^{(k)})\\big)^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$ — root of the linear approximation $\\mathbf{f}(\\mathbf{p}^{(k)})+\\mathbf{f}'(\\mathbf{p}^{(k)})(\\mathbf{x}-\\mathbf{p}^{(k)})$.",
      "hu": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-\\big(\\mathbf{f}'(\\mathbf{p}^{(k)})\\big)^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$ — az $\\mathbf{f}(\\mathbf{p}^{(k)})+\\mathbf{f}'(\\mathbf{p}^{(k)})(\\mathbf{x}-\\mathbf{p}^{(k)})$ lineáris közelítés gyöke."
    }
  },
  {
    "term": {
      "en": "Jacobian invertibility",
      "hu": "A Jacobi-mátrix invertálhatósága"
    },
    "def": {
      "en": "The step needs $\\mathbf{f}'(\\mathbf{p}^{(k)})$ nonsingular. Quadratic convergence is guaranteed when $\\mathbf{f}'(\\mathbf{p})$ is invertible at the root — the $n$-D analogue of $f'(p)\\ne0$.",
      "hu": "A lépéshez $\\mathbf{f}'(\\mathbf{p}^{(k)})$ nem szinguláris kell. A kvadratikus konvergencia akkor garantált, ha $\\mathbf{f}'(\\mathbf{p})$ a gyökben invertálható — az $f'(p)\\ne0$ $n$-D megfelelője."
    }
  },
  {
    "term": {
      "en": "Solve, don't invert ($\\mathbf{f}'\\mathbf{s}=-\\mathbf{f}$)",
      "hu": "Oldd meg, ne invertálj ($\\mathbf{f}'\\mathbf{s}=-\\mathbf{f}$)"
    },
    "def": {
      "en": "In practice set $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$ and solve the linear system $\\mathbf{f}'(\\mathbf{p}^{(k)})\\,\\mathbf{s}^{(k)}=-\\mathbf{f}(\\mathbf{p}^{(k)})$ (e.g. by LU), then $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\mathbf{s}^{(k)}$ — cheaper and more stable than forming the inverse.",
      "hu": "A gyakorlatban legyen $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, és oldd meg az $\\mathbf{f}'(\\mathbf{p}^{(k)})\\,\\mathbf{s}^{(k)}=-\\mathbf{f}(\\mathbf{p}^{(k)})$ lineáris rendszert (pl. LU-val), majd $\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}+\\mathbf{s}^{(k)}$ — olcsóbb és stabilabb az inverz képzésénél."
    }
  },
  {
    "term": {
      "en": "Local quadratic convergence (Thm 2.56)",
      "hu": "Lokális kvadratikus konvergencia (2.56. tétel)"
    },
    "def": {
      "en": "If $\\mathbf{f}\\in C^2$, $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ and $\\mathbf{f}'(\\mathbf{p})$ is invertible, the $n$-D Newton iteration converges locally and quadratically to $\\mathbf{p}$.",
      "hu": "Ha $\\mathbf{f}\\in C^2$, $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ és $\\mathbf{f}'(\\mathbf{p})$ invertálható, az $n$-D Newton-iteráció lokálisan és kvadratikusan konvergál $\\mathbf{p}$-hez."
    }
  },
  {
    "term": {
      "en": "Why quadratic: $\\mathbf{g}'(\\mathbf{p})=\\mathbf{0}$",
      "hu": "Miért kvadratikus: $\\mathbf{g}'(\\mathbf{p})=\\mathbf{0}$"
    },
    "def": {
      "en": "Newton is the fixed-point map $\\mathbf{g}(\\mathbf{x})=\\mathbf{x}-(\\mathbf{f}'(\\mathbf{x}))^{-1}\\mathbf{f}(\\mathbf{x})$. Using $\\sum_j b_{ij}\\partial f_j/\\partial x_l=\\delta_{il}$ and $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$, every entry of the Jacobian $\\mathbf{g}'(\\mathbf{p})$ vanishes — the $n$-D version of $g'(p)=0$ (Thm 2.55).",
      "hu": "Newton a $\\mathbf{g}(\\mathbf{x})=\\mathbf{x}-(\\mathbf{f}'(\\mathbf{x}))^{-1}\\mathbf{f}(\\mathbf{x})$ fixpont-leképezés. A $\\sum_j b_{ij}\\partial f_j/\\partial x_l=\\delta_{il}$ és $\\mathbf{f}(\\mathbf{p})=\\mathbf{0}$ felhasználásával a $\\mathbf{g}'(\\mathbf{p})$ Jacobi-mátrix minden eleme eltűnik — a $g'(p)=0$ $n$-D változata (2.55. tétel)."
    }
  },
  {
    "term": {
      "en": "Newton increment $\\mathbf{s}^{(k)}$",
      "hu": "Newton-növekmény $\\mathbf{s}^{(k)}$"
    },
    "def": {
      "en": "$\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, the solution of $\\mathbf{f}'\\mathbf{s}=-\\mathbf{f}$. Its norm $\\|\\mathbf{s}^{(k)}\\|$ is the natural absolute-step stopping quantity.",
      "hu": "$\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, az $\\mathbf{f}'\\mathbf{s}=-\\mathbf{f}$ megoldása. Normája $\\|\\mathbf{s}^{(k)}\\|$ a természetes abszolút-lépés megállási mennyiség."
    }
  },
  {
    "term": {
      "en": "Cost per step",
      "hu": "Lépésenkénti költség"
    },
    "def": {
      "en": "Each step evaluates $\\mathbf{f}$ and the full $n\\times n$ Jacobian, then solves an $n\\times n$ linear system ($O(n^3)$). The expense of recomputing/factoring $\\mathbf{f}'$ every step motivates quasi-Newton (Broyden).",
      "hu": "Minden lépés kiértékeli $\\mathbf{f}$-et és a teljes $n\\times n$ Jacobi-mátrixot, majd megold egy $n\\times n$ lineáris rendszert ($O(n^3)$). A $\\mathbf{f}'$ lépésenkénti újraszámítása/faktorizálása drága — ez motiválja a kvázi-Newton (Broyden) módszert."
    }
  }
]

export const NDNEWTON_FLASHCARDS: Flashcard[] = [
  {"q":"In $n$ dimensions, what equation defines a vector $\\mathbf{p}$ as a fixed point of the function $\\mathbf{g}$?","a":"$\\mathbf{p} = \\mathbf{g}(\\mathbf{p})$"},
  {"q":"What is the recursive formula for the fixed-point iteration to approximate a solution to $\\mathbf{x} = \\mathbf{g}(\\mathbf{x})$?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{g}(\\mathbf{p}^{(k)})$"},
  {"q":"A function $\\mathbf{g}\\colon E \\to \\mathbb{R}^n$ is a contraction on $E$ if there exists a constant $c$ such that $0 \\leq c < 1$ and _____.","a":"$\\|\\mathbf{g}(\\mathbf{x}) - \\mathbf{g}(\\mathbf{y})\\| \\leq c\\|\\mathbf{x} - \\mathbf{y}\\|$ for all $\\mathbf{x}, \\mathbf{y} \\in E$"},
  {"q":"What type of set must $E \\subset \\mathbb{R}^n$ be for the global fixed-point theorem to guarantee convergence of $\\mathbf{p}^{(k+1)} = \\mathbf{g}(\\mathbf{p}^{(k)})$?","a":"A closed set."},
  {"q":"To apply the fixed-point theorem on a set $E$, the function $\\mathbf{g}$ must map $E$ to _____.","a":"The set $E$ itself ($\\mathbf{g}\\colon E \\to E$)."},
  {"q":"According to the fixed-point theorem, if $\\mathbf{g}$ is a contraction on a closed set $E$ and $\\mathbf{g}\\colon E \\to E$, how many fixed points does $\\mathbf{g}$ have in $E$?","a":"Exactly one (a unique fixed point)."},
  {"q":"What is the minimum order of convergence guaranteed by the general contraction mapping theorem for fixed-point iteration?","a":"Linear convergence."},
  {"q":"In the proof of the fixed-point theorem, what sequence property is used to demonstrate that the iterates $\\mathbf{p}^{(k)}$ converge to a limit?","a":"The iterates form a Cauchy sequence."},
  {"q":"How is the constant $c$ in the contraction definition related to the Lipschitz property?","a":"$c$ is the Lipschitz constant of the function $\\mathbf{g}$ on $E$."},
  {"q":"Which mathematical identity is used to bound the distance $\\|\\mathbf{p}^{(k)} - \\mathbf{p}^{(m)}\\|$ in the fixed-point theorem proof?","a":"The triangle inequality."},
  {"q":"In the proof of convergence, what formula represents the upper bound of the sum of the norms of differences using the contraction constant $c$ and the first step $\\|\\mathbf{p}^{(1)} - \\mathbf{p}^{(0)}\\|$?","a":"$c^m \\sum_{i=0}^\\infty c^i \\|\\mathbf{p}^{(1)} - \\mathbf{p}^{(0)}\\|$"},
  {"q":"What property of $\\mathbf{g}$ is invoked to show that $\\mathbf{g}(\\mathbf{p}^{(k)}) \\to \\mathbf{g}(\\mathbf{p})$ as $\\mathbf{p}^{(k)} \\to \\mathbf{p}$?","a":"The continuity of the function $\\mathbf{g}$."},
  {"q":"How is the uniqueness of the fixed point $\\mathbf{p}$ proven using the contraction property?","a":"By showing $\\|\\mathbf{p} - \\bar{\\mathbf{p}}\\| \\leq c\\|\\mathbf{p} - \\bar{\\mathbf{p}}\\|$, which implies the distance must be zero since $c < 1$."},
  {"q":"For local convergence at a fixed point $\\mathbf{p}$, what condition must the matrix norm of the Jacobian $\\mathbf{g}'(\\mathbf{p})$ satisfy?","a":"$\\|\\mathbf{g}'(\\mathbf{p})\\| < 1$"},
  {"q":"When checking for local convergence, what type of norm must be used for the Jacobian matrix $\\mathbf{g}'(\\mathbf{p})$?","a":"A matrix norm generated by a vector norm."},
  {"q":"To guarantee local convergence via the Jacobian matrix norm condition, what differentiability class must $\\mathbf{g}$ belong to on an open set $E$?","a":"$C^1$ (continuously differentiable)."},
  {"q":"Which theorem is used in the local convergence proof to link the function values to the Jacobian matrix?","a":"Lagrange's Mean Value Theorem."},
  {"q":"In the local convergence proof, how is the neighborhood $V$ defined around the fixed point $\\mathbf{p}$?","a":"$V = \\{\\mathbf{x}\\colon \\|\\mathbf{x} - \\mathbf{p}\\| \\leq \\delta\\}$ where $\\|\\mathbf{g}'(\\mathbf{x})\\| \\leq c < 1$."},
  {"q":"If $\\mathbf{g}(x_1, x_2) = \\begin{pmatrix} g_1(x_1, x_2) \\\\ g_2(x_1, x_2) \\end{pmatrix}$, what is the entry in the first row and second column of the Jacobian matrix $\\mathbf{g}'(\\mathbf{x})$?","a":"$\\frac{\\partial g_1}{\\partial x_2}$"},
  {"q":"Term: Jacobian Matrix","a":"Definition: A matrix of all first-order partial derivatives of a vector-valued function."},
  {"q":"In the provided example, $\\mathbf{g}'(1, 0) = \\begin{pmatrix} 0 & \\frac{1}{4} \\\\ \\frac{1}{3} & 0 \\end{pmatrix}$. What is the 1-norm ($\\|\\cdot\\|_1$) of this matrix?","a":"$\\frac{1}{3}$"},
  {"q":"Based on $\\|\\mathbf{g}'(1, 0)\\|_1 = \\frac{1}{3}$, what can be concluded about the fixed-point iteration near $(1, 0)^T$?","a":"It is locally convergent."},
  {"q":"What specific condition on the Jacobian matrix $\\mathbf{g}'(\\mathbf{p})$ leads to quadratic local convergence?","a":"$\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$ (the zero matrix)."},
  {"q":"To achieve quadratic convergence, what is the required differentiability class for function $\\mathbf{g}$?","a":"$C^2$ (twice continuously differentiable)."},
  {"q":"Which expansion technique is used to prove the quadratic convergence of fixed-point iteration when $\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$?","a":"Second-order Taylor approximation."},
  {"q":"The error bound for quadratic convergence is given by $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}\\|_\\infty \\leq c \\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_\\infty^2$. What is the constant $c$ proportional to in the proof?","a":"$\\frac{n^2}{2} M$, where $M$ is a bound on the second partial derivatives."},
  {"q":"True or False: If $\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$, the fixed-point iteration is guaranteed to converge for any initial value in $\\mathbb{R}^n$.","a":"False; it only guarantees local convergence within some distance $\\delta$."},
  {"q":"How is the Jacobian entry $\\frac{\\partial}{\\partial x_1} [\\frac{1}{4}(e^{x_1 x_2} + 3)]$ calculated?","a":"Using the chain rule, it is $\\frac{1}{4} x_2 e^{x_1 x_2}$."},
  {"q":"How is the Jacobian entry $\\frac{\\partial}{\\partial x_2} [\\frac{1}{3}(x_1 - x_2^2 - 1)]$ calculated?","a":"The derivative of the constant $x_1-1$ is 0, and the derivative of $-x_2^2$ is $-2x_2$, resulting in $-\\frac{2}{3}x_2$."},
  {"q":"If the Jacobian matrix at the fixed point is $\\mathbf{0}$, what term in the Taylor expansion of $g_i$ around $\\mathbf{p}$ becomes zero besides $g_i(\\mathbf{p}) - p_i$?","a":"The summation containing the first-order partial derivatives: $\\sum_{j=1}^n \\frac{\\partial g_i(\\mathbf{p})}{\\partial x_j}(x_j - p_j)$."},
  {"q":"What is the relationship between the order of convergence and the number of derivatives of $\\mathbf{g}$ that vanish at the fixed point?","a":"If the first derivative vanishes ($\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$), the order is at least quadratic ($2^{nd}$ order)."},
  {"q":"In the example provided, what were the exact solutions $(x_1, x_2)$ for the system $4x_1 - e^{x_1 x_2} - 3 = 0$ and $x_1 - x_2^2 - 3x_2 - 1 = 0$?","a":"$x_1 = 1$ and $x_2 = 0$."},
  {"q":"For the system $\\mathbf{x} = \\mathbf{g}(\\mathbf{x})$, the sequence $\\mathbf{p}^{(k)}$ converges to $\\mathbf{p}$ if $\\mathbf{g}$ is a contraction. What does $c$ represent in the error estimate $\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}\\| \\leq c \\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|$?","a":"The asymptotic error constant (or contraction factor)."},
  {"q":"If a fixed-point iteration converges quadratically, how does the number of correct digits roughly change with each iteration?","a":"The number of correct digits approximately doubles."},
  {"q":"Why is the assumption that $E$ is an open set necessary for the local convergence theorem involving the Jacobian?","a":"To ensure that a neighborhood (ball) around the fixed point exists entirely within the domain $E$."},
  {"q":"In the context of the Taylor expansion proof, what does the symbol $\\xi$ represent?","a":"A point on the line segment between $\\mathbf{x}$ and $\\mathbf{p}$ where the derivative is evaluated."},
  {"q":"Cloze: The fixed-point theorem ensures that for a contraction mapping on a closed set, the iteration converges for _____ initial value $\\mathbf{p}^{(0)} \\in E$.","a":"any"},
  {"q":"Concept: Local Quadratic Convergence","a":"Condition: $\\mathbf{g}(\\mathbf{p}) = \\mathbf{p}$, $\\mathbf{g}'(\\mathbf{p}) = \\mathbf{0}$, and $\\mathbf{g} \\in C^2$."},
  {"q":"Formula: $\\|\\mathbf{A}\\|_1$ (for a matrix $\\mathbf{A}$)","a":"The maximum absolute column sum of the matrix."},
  {"q":"What is the result of $\\|\\mathbf{g}'(1,0)\\|_\\infty$ for $\\mathbf{g}'(1,0) = \\begin{pmatrix} 0 & 1/4 \\\\ 1/3 & 0 \\end{pmatrix}$?","a":"$1/3$"},
  {"q":"If $\\|\\mathbf{g}'(\\mathbf{p})\\| = 0.5$, what is the asymptotic rate of convergence for the fixed-point iteration?","a":"Linear convergence with a rate of $0.5$."},
  {"q":"In $n$ dimensions, if $\\mathbf{g}'(\\mathbf{p})$ is the zero matrix, the iteration is locally _____ convergent.","a":"quadratically (or second-order)"},
  {"q":"How is the term $p_i^{(k+1)} - p_i$ expressed in the quadratic convergence proof using second derivatives?","a":"$p_i^{(k+1)} - p_i = \\frac{1}{2} \\sum_{j=1}^n \\sum_{l=1}^n \\frac{\\partial^2 g_i(\\xi)}{\\partial x_j \\partial x_l} (p_j^{(k)} - p_j)(p_l^{(k)} - p_l)$"},
  {"q":"The fixed-point iteration $\\mathbf{p}^{(k+1)} = \\mathbf{g}(\\mathbf{p}^{(k)})$ is essentially a functional iteration in _____.","a":"Multidimensional space (or $\\mathbb{R}^n$)."},
  {"q":"Why is the condition $c < 1$ critical for a contraction?","a":"It ensures that the distance between points strictly decreases after applying the function."},
  {"q":"What happens to the fixed-point iteration if $\\|\\mathbf{g}'(\\mathbf{p})\\| > 1$?","a":"The iteration will generally diverge from the fixed point $\\mathbf{p}$."},
  {"q":"Which component of the error vector $\\mathbf{p}^{(k)} - \\mathbf{p}$ determines the $\\|\\cdot\\|_\\infty$ norm?","a":"The component with the largest absolute value."},
  {"q":"In the example iteration table, starting from $(-2, -2)^T$, which iteration $k$ first shows $p_1^{(k)}$ and $p_2^{(k)}$ both within $0.1$ of the solution $(1, 0)^T$?","a":"$k = 7$ ($p_1 \\approx 0.949$, $p_2 \\approx -0.061$)."},
  {"q":"In the system $x_1 = g_1(x_1, x_2)$, if $g_1$ is a constant, what is the value of $\\frac{\\partial g_1}{\\partial x_1}$?","a":"0"},
  {"q":"Cloze: If a function $\\mathbf{g}$ satisfies the conditions for the fixed-point theorem, the error $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|$ is bounded by a _____ series.","a":"geometric"},
  {"q":"How many iterations did the example take to reach a precision where $p_2$ is approximately $-0.0001$?","a":"12 iterations."},
  {"q":"What is the Jacobian matrix of $\\mathbf{g}(\\mathbf{x}) = \\mathbf{A}\\mathbf{x} + \\mathbf{b}$?","a":"The matrix $\\mathbf{A}$."},
  {"q":"In the case of a linear system $\\mathbf{x} = \\mathbf{A}\\mathbf{x} + \\mathbf{b}$, what is the condition for global convergence of the fixed-point iteration?","a":"The matrix norm $\\|\\mathbf{A}\\|$ must be less than 1."},
  {"q":"What does $C^1$ notation imply about the partial derivatives of a function?","a":"They all exist and are continuous functions."},
  {"q":"If the fixed-point iteration converges such that the error $\\|e_{k+1}\\| \\approx C \\|e_k\\|^2$, what is the order of convergence?","a":"Second-order (Quadratic)."},
  {"q":"Under what circumstance does the fixed-point theorem guarantee that the unique fixed point is actually reached in a finite number of steps?","a":"Only if the starting point $\\mathbf{p}^{(0)}$ is already the fixed point or $\\mathbf{g}$ is a constant map."},
  {"q":"What is the 'Lipschitz constant' in the context of the contraction mapping theorem?","a":"The constant $c \\in [0, 1)$ that bounds the ratio of distances between images and arguments."},
  {"q":"True or False: The choice of norm $(\\|\\cdot\\|_1, \\|\\cdot\\|_2, \\|\\cdot\\|_\\infty)$ can determine whether a mapping is considered a contraction.","a":"True; a function may be a contraction in one norm but not in another."},
  {"q":"What is the Jacobian of the specific function $g_2(x_1, x_2) = \\frac{1}{3}(x_1 - x_2^2 - 1)$ evaluated at $(1, 0)$?","a":"$(\\frac{1}{3}, 0)$"},
  {"q":"Why is the fixed-point iteration useful for nonlinear systems of equations?","a":"It provides a simple numerical procedure to approximate solutions without requiring complex matrix inversions in every step."}
]
