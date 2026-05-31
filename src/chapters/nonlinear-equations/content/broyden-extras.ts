// Auto-generated learning aids for '2.13 (Quasi-Newton, Broyden).
import type { GlossaryEntry, Flashcard } from '../components/widgets/decks'

export const BROYDEN_GLOSSARY: GlossaryEntry[] = [
  {
    "term": {
      "en": "Quasi-Newton method (Eq. 2.32)",
      "hu": "Kvázi-Newton módszer (2.32)"
    },
    "def": {
      "en": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-(\\mathbf{A}^{(k)})^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$, where $\\mathbf{A}^{(k)}\\approx\\mathbf{f}'(\\mathbf{p}^{(k)})$ is a cheap approximation of the Jacobian. Different choices of $\\mathbf{A}^{(k)}$ give different methods.",
      "hu": "$\\mathbf{p}^{(k+1)}=\\mathbf{p}^{(k)}-(\\mathbf{A}^{(k)})^{-1}\\mathbf{f}(\\mathbf{p}^{(k)})$, ahol $\\mathbf{A}^{(k)}\\approx\\mathbf{f}'(\\mathbf{p}^{(k)})$ a Jacobi-mátrix olcsó közelítése. $\\mathbf{A}^{(k)}$ különböző választásai más-más módszert adnak."
    }
  },
  {
    "term": {
      "en": "Finite-difference Jacobian (Eq. 2.33)",
      "hu": "Differencia-Jacobi (2.33)"
    },
    "def": {
      "en": "$a_{ij}^{(k)}=\\dfrac{f_i(\\mathbf{p}^{(k)}+h\\mathbf{e}^{(j)})-f_i(\\mathbf{p}^{(k)})}{h}$ approximates the Jacobian columnwise with small $h$ — a direct vector generalization of the secant method.",
      "hu": "$a_{ij}^{(k)}=\\dfrac{f_i(\\mathbf{p}^{(k)}+h\\mathbf{e}^{(j)})-f_i(\\mathbf{p}^{(k)})}{h}$ kis $h$-val oszloponként közelíti a Jacobi-mátrixot — a szelőmódszer közvetlen vektoros általánosítása."
    }
  },
  {
    "term": {
      "en": "Secant equation (Eq. 2.35/2.37)",
      "hu": "Szelő-egyenlet (2.35/2.37)"
    },
    "def": {
      "en": "$\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$ with $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{f}(\\mathbf{p}^{(k+1)})-\\mathbf{f}(\\mathbf{p}^{(k)})$. The vector analogue of the scalar secant slope condition.",
      "hu": "$\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)}=\\mathbf{y}^{(k)}$, ahol $\\mathbf{s}^{(k)}=\\mathbf{p}^{(k+1)}-\\mathbf{p}^{(k)}$, $\\mathbf{y}^{(k)}=\\mathbf{f}(\\mathbf{p}^{(k+1)})-\\mathbf{f}(\\mathbf{p}^{(k)})$. A skaláris szelő-meredekség feltétel vektoros megfelelője."
    }
  },
  {
    "term": {
      "en": "Least-change (no-new-info) condition (Eq. 2.38)",
      "hu": "Legkisebb-változás feltétel (2.38)"
    },
    "def": {
      "en": "The secant equation fixes $\\mathbf{A}^{(k+1)}$ only along $\\mathbf{s}^{(k)}$ ($n$ equations, $n^2$ unknowns). Broyden keeps $\\mathbf{A}^{(k+1)}\\mathbf{z}=\\mathbf{A}^{(k)}\\mathbf{z}$ for all $\\mathbf{z}\\perp\\mathbf{s}^{(k)}$ — change nothing where there is no new information.",
      "hu": "A szelő-egyenlet csak $\\mathbf{s}^{(k)}$ mentén rögzíti $\\mathbf{A}^{(k+1)}$-et ($n$ egyenlet, $n^2$ ismeretlen). A Broyden megtartja $\\mathbf{A}^{(k+1)}\\mathbf{z}=\\mathbf{A}^{(k)}\\mathbf{z}$-t minden $\\mathbf{z}\\perp\\mathbf{s}^{(k)}$-re — ne változtass ott, ahol nincs új információ."
    }
  },
  {
    "term": {
      "en": "Broyden rank-one update (Eq. 2.39)",
      "hu": "Broyden rang-egy frissítés (2.39)"
    },
    "def": {
      "en": "$\\mathbf{A}^{(k+1)}=\\mathbf{A}^{(k)}+\\dfrac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$ — the unique matrix satisfying both the secant and least-change conditions.",
      "hu": "$\\mathbf{A}^{(k+1)}=\\mathbf{A}^{(k)}+\\dfrac{(\\mathbf{y}^{(k)}-\\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$ — az egyetlen mátrix, amely a szelő- és a legkisebb-változás feltételt is teljesíti."
    }
  },
  {
    "term": {
      "en": "Sherman–Morrison formula (Thm 2.58)",
      "hu": "Sherman–Morrison-formula (2.58. tétel)"
    },
    "def": {
      "en": "$(\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T)^{-1}=\\mathbf{A}^{-1}-\\dfrac{\\mathbf{A}^{-1}\\mathbf{u}\\mathbf{v}^T\\mathbf{A}^{-1}}{1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}}$ (when $1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}\\ne0$). It updates the inverse after a rank-one change without a full re-inversion.",
      "hu": "$(\\mathbf{A}+\\mathbf{u}\\mathbf{v}^T)^{-1}=\\mathbf{A}^{-1}-\\dfrac{\\mathbf{A}^{-1}\\mathbf{u}\\mathbf{v}^T\\mathbf{A}^{-1}}{1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}}$ (ha $1+\\mathbf{v}^T\\mathbf{A}^{-1}\\mathbf{u}\\ne0$). Rang-egy változás után frissíti az inverzet teljes újrainvertálás nélkül."
    }
  },
  {
    "term": {
      "en": "Inverse update & $O(n^2)$ cost (Eq. 2.40)",
      "hu": "Inverz-frissítés és $O(n^2)$ költség (2.40)"
    },
    "def": {
      "en": "Applying Sherman–Morrison to (2.39) updates $(\\mathbf{A}^{(k+1)})^{-1}$ from $(\\mathbf{A}^{(k)})^{-1}$ with only matrix–vector products — $O(n^2)$ per step instead of the $O(n^3)$ factorization Newton needs.",
      "hu": "A Sherman–Morrison-t a (2.39)-re alkalmazva $(\\mathbf{A}^{(k+1)})^{-1}$ frissíthető $(\\mathbf{A}^{(k)})^{-1}$-ből csak mátrix–vektor szorzatokkal — $O(n^2)$ lépésenként a Newton $O(n^3)$ faktorizációja helyett."
    }
  },
  {
    "term": {
      "en": "Superlinear convergence",
      "hu": "Szuperlineáris konvergencia"
    },
    "def": {
      "en": "If $\\mathbf{A}^{(0)}$ is close enough to $\\mathbf{f}'(\\mathbf{p})$, Broyden converges locally with $\\lim_k\\dfrac{\\|\\mathbf{p}^{(k+1)}-\\mathbf{p}\\|}{\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|}=0$ — faster than linear, slower than Newton’s quadratic, but with no Jacobian.",
      "hu": "Ha $\\mathbf{A}^{(0)}$ elég közel van $\\mathbf{f}'(\\mathbf{p})$-hez, a Broyden lokálisan konvergál $\\lim_k\\dfrac{\\|\\mathbf{p}^{(k+1)}-\\mathbf{p}\\|}{\\|\\mathbf{p}^{(k)}-\\mathbf{p}\\|}=0$-val — gyorsabb a lineárisnál, lassabb a Newton kvadratikusnál, de Jacobi-mátrix nélkül."
    }
  },
  {
    "term": {
      "en": "Choice of $\\mathbf{A}^{(0)}$",
      "hu": "$\\mathbf{A}^{(0)}$ megválasztása"
    },
    "def": {
      "en": "Start from the exact $\\mathbf{f}'(\\mathbf{p}^{(0)})$, a finite-difference approximation (2.33), or any invertible matrix. A better $\\mathbf{A}^{(0)}$ widens the basin of (superlinear) convergence.",
      "hu": "Indulj a pontos $\\mathbf{f}'(\\mathbf{p}^{(0)})$-ból, egy differencia-közelítésből (2.33), vagy bármely invertálható mátrixból. A jobb $\\mathbf{A}^{(0)}$ szélesíti a (szuperlineáris) konvergencia tartományát."
    }
  }
]

export const BROYDEN_FLASHCARDS: Flashcard[] = [
  {"q":"What is the general iterative formula for Quasi-Newton methods?","a":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{f}(\\mathbf{p}^{(k)})$"},
  {"q":"In Quasi-Newton methods, what does the matrix $\\mathbf{A}^{(k)}$ approximate?","a":"The Jacobian matrix $\\mathbf{f}'(\\mathbf{p}^{(k)})$"},
  {"q":"What is a major disadvantage of the standard Newton's method compared to Quasi-Newton methods regarding the Jacobian?","a":"Evaluating the exact Jacobian matrix can be computationally expensive or difficult to formulate."},
  {"q":"Numerical Jacobian approximation: How is the component $a_{ij}^{(k)}$ calculated using a step size $h$?","a":"$a_{ij}^{(k)} = \\frac{f_i(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) - f_i(\\mathbf{p}^{(k)})}{h}$"},
  {"q":"In the numerical approximation of the Jacobian, what does $\\mathbf{e}^{(j)}$ represent?","a":"The $j$-th standard unit vector."},
  {"q":"What is a numerical risk of using a very small $h$ when approximating the Jacobian derivative?","a":"Significant rounding errors and instability from subtracting nearly identical function values."},
  {"q":"Broyden's method is considered a multi-variable generalization of which scalar root-finding method?","a":"The Secant method."},
  {"q":"What is the 'Secant Equation' that $\\mathbf{A}^{(k+1)}$ must satisfy in Broyden's method?","a":"$\\mathbf{A}^{(k+1)}(\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}) = \\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$"},
  {"q":"In the notation of Broyden's method, what does $\\mathbf{s}^{(k)}$ represent?","a":"$\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"},
  {"q":"In the notation of Broyden's method, what does $\\mathbf{y}^{(k)}$ represent?","a":"$\\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$"},
  {"q":"The Secant Equation in simplified notation: $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\dots$","a":"$\\mathbf{y}^{(k)}$"},
  {"q":"Why does the Secant Equation $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ not uniquely determine $\\mathbf{A}^{(k+1)}$ in $n$-dimensional space?","a":"It provides only $n$ scalar constraints for $n^2$ unknown matrix components."},
  {"q":"What is the 'minimal change' condition Broyden's method imposes on vectors $\\mathbf{z}$ perpendicular to $\\mathbf{s}^{(k)}$?","a":"$\\mathbf{A}^{(k+1)} \\mathbf{z} = \\mathbf{A}^{(k)} \\mathbf{z}$"},
  {"q":"The Broyden update for the matrix $\\mathbf{A}^{(k+1)}$ is: $\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\dots$","a":"$\\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)} \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"},
  {"q":"True or False: The Broyden update is a rank-1 update to the matrix.","a":"True."},
  {"q":"When calculating $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)}$ using the Broyden formula, what term results from the product $(\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}$ in the numerator?","a":"The squared $L_2$ norm, $\\|\\mathbf{s}^{(k)}\\|_2^2$."},
  {"q":"List one possible strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","a":"Use the exact Jacobian $\\mathbf{f}'(\\mathbf{p}^{(0)})$."},
  {"q":"List a second possible strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","a":"Approximate the Jacobian at $\\mathbf{p}^{(0)}$ using finite differences."},
  {"q":"List a third (simple) strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","a":"Select any arbitrary invertible matrix (e.g., the Identity matrix $\\mathbf{I}$)."},
  {"q":"Which theorem provides a formula to update the inverse of a matrix after a rank-1 modification?","a":"The Sherman-Morrison-Woodbury Theorem."},
  {"q":"According to the Sherman-Morrison-Woodbury theorem, $\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T$ is invertible if and only if which scalar condition is met?","a":"$1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u} \\neq 0$"},
  {"q":"Formula: Write the Sherman-Morrison-Woodbury identity for $(\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T)^{-1}$.","a":"$\\mathbf{A}^{-1} - \\frac{\\mathbf{A}^{-1} \\mathbf{u} \\mathbf{v}^T \\mathbf{A}^{-1}}{1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u}}$"},
  {"q":"Broyden's Inverse Update Formula: $(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} - \\dots$","a":"$\\frac{((\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)} - \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"},
  {"q":"What is the order of magnitude of arithmetic operations required to update $(\\mathbf{A}^{(k+1)})^{-1}$ in Broyden's method?","a":"$n^2$"},
  {"q":"What is the standard order of magnitude of arithmetic operations required for direct matrix inversion?","a":"$n^3$"},
  {"q":"Why is the Broyden inverse update considered computationally efficient?","a":"It reduces the complexity from $O(n^3)$ for inversion to $O(n^2)$ for matrix-vector multiplications."},
  {"q":"What is the rate of convergence for Broyden's method?","a":"Superlinear."},
  {"q":"Define superlinear convergence of a sequence $\\mathbf{p}^{(k)}$ to a root $\\mathbf{p}$ as a limit.","a":"$\\lim_{k \\to \\infty} \\frac{\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}\\|}{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|} = 0$"},
  {"q":"Under what condition is Broyden's method guaranteed to converge locally to a root $\\mathbf{p}$?","a":"If $\\mathbf{p}^{(0)}$ and $\\mathbf{A}^{(0)}$ are sufficiently close to $\\mathbf{p}$ and $\\mathbf{f}'(\\mathbf{p})$, respectively."},
  {"q":"How does the number of iterations in Broyden's method typically compare to Newton's method for the same problem?","a":"Broyden's method usually requires more iterations than Newton's method because its convergence is superlinear rather than quadratic."},
  {"q":"In the example provided ($TOL = 10^{-5}$), how many steps did the Broyden method take to reach the solution?","a":"10 iterations."},
  {"q":"Concept: Direct Inverse Broyden Update","a":"Definition: A method to calculate $(\\mathbf{A}^{(k+1)})^{-1}$ directly from $(\\mathbf{A}^{(k)})^{-1}$ using only $O(n^2)$ operations, bypassing the need to solve a full linear system."},
  {"q":"True or False: The Broyden update matrix term $(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T$ results in a scalar.","a":"False; it is an outer product resulting in an $n \\times n$ matrix."},
  {"q":"What is the primary motivation for using Quasi-Newton methods over the fixed-point iteration technique?","a":"Quasi-Newton methods converge faster (superlinear) than simple linear fixed-point iterations."},
  {"q":"Process: If you already have $(\\mathbf{A}^{(k)})^{-1}$, what is the first vector calculation needed for the Broyden inverse update numerator?","a":"The product $(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}$."},
  {"q":"In the proof of the Sherman-Morrison-Woodbury theorem, what is the role of the scalar $\\gamma$?","a":"It is a scaling factor used to determine the exact form of the inverse update such that the product with the original matrix equals identity."},
  {"q":"The scalar product $(\\mathbf{s}^{(k)})^T \\mathbf{z} = 0$ implies that vectors $\\mathbf{s}^{(k)}$ and $\\mathbf{z}$ are _____.","a":"Perpendicular (orthogonal)."},
  {"q":"In the iterative formula $\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -\\mathbf{f}(\\mathbf{p}^{(k)})$, solving for $\\mathbf{s}^{(k)}$ allows for the definition of which vector?","a":"The next iterate, $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\mathbf{s}^{(k)}$."},
  {"q":"Why is it important that $\\mathbf{A}^{(0)}$ is invertible in Broyden's method?","a":"Because the iteration requires the computation of $(\\mathbf{A}^{(k)})^{-1}$ or solving a linear system with $\\mathbf{A}^{(k)}$."},
  {"q":"If the Broyden method is 'locally' convergent, what does this imply about the starting point $\\mathbf{p}^{(0)}$?","a":"It must be chosen sufficiently close to the actual root for the method to be guaranteed to find it."},
  {"q":"The Broyden update formula ensures that $\\mathbf{A}^{(k+1)}$ satisfies the Secant Equation by modifying $\\mathbf{A}^{(k)}$ along which direction?","a":"The direction of $\\mathbf{s}^{(k)}$ (via the outer product $(\\cdot)(\\mathbf{s}^{(k)})^T$)."},
  {"q":"How is the norm $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_\\infty$ typically used in numerical examples of Broyden's method?","a":"To measure the error and demonstrate the convergence rate of the iterates toward the root."},
  {"q":"What property of matrix multiplication is used to simplify the verification of the Broyden formula $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$?","a":"Associativity (grouping the scalar inner product $(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}$ separately)."},
  {"q":"In the scalar case ($n=1$), the Broyden update formula collapses to the formula for the _____.","a":"Slope of the secant line ($a_{k+1} = \\frac{f(p_{k+1}) - f(p_k)}{p_{k+1} - p_k}$)."},
  {"q":"The phrase 'no new information' in the derivation of Broyden's method refers to the lack of updates in which directions?","a":"Directions orthogonal to the step $\\mathbf{s}^{(k)}$."}
]
