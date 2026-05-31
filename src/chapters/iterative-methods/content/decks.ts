// Auto-generated learning aids for chapter 4. Glossaries bilingual; flashcards EN.
import type { ModuleId } from '../context/ProgressContext'
import type { Lang } from '../context/LanguageContext'

export interface GlossaryEntry { term: Record<Lang, string>; def: Record<Lang, string> }
export interface Flashcard { q: string; a: string }

export const GLOSSARIES: Partial<Record<ModuleId, GlossaryEntry[]>> = {
  'fixed-point': [
    {
      "term": {
        "en": "Linear fixed-point iteration (4.1)",
        "hu": "Lineáris fixpont iteráció (4.1)"
      },
      "def": {
        "en": "$\\mathbf{x}^{(k+1)}=\\mathbf{T}\\mathbf{x}^{(k)}+\\mathbf{c}$, solving the fixed-point equation $\\mathbf{x}=\\mathbf{T}\\mathbf{x}+\\mathbf{c}$. The iteration matrix $\\mathbf{T}$ controls convergence; the splitting of $\\mathbf{A}$ that produces $\\mathbf{T}$ defines the method (Jacobi, Gauss–Seidel…).",
        "hu": "$\\mathbf{x}^{(k+1)}=\\mathbf{T}\\mathbf{x}^{(k)}+\\mathbf{c}$, az $\\mathbf{x}=\\mathbf{T}\\mathbf{x}+\\mathbf{c}$ fixpont-egyenlet megoldása. A $\\mathbf{T}$ iterációs mátrix szabja meg a konvergenciát; az $\\mathbf{A}$ felbontása, amely $\\mathbf{T}$-t adja, határozza meg a módszert (Jacobi, Gauss–Seidel…)."
      }
    },
    {
      "term": {
        "en": "Spectral radius $\\rho(\\mathbf{T})$",
        "hu": "Spektrálsugár $\\rho(\\mathbf{T})$"
      },
      "def": {
        "en": "$\\rho(\\mathbf{T})=\\max\\{|\\lambda|\\}$ over eigenvalues. $\\mathbf{T}^k\\to\\mathbf{0}$ if and only if $\\rho(\\mathbf{T})<1$ (Theorem 4.1) — the master convergence criterion for linear iterations.",
        "hu": "$\\rho(\\mathbf{T})=\\max\\{|\\lambda|\\}$ a sajátértékeken. $\\mathbf{T}^k\\to\\mathbf{0}$ pontosan akkor, ha $\\rho(\\mathbf{T})<1$ (4.1. tétel) — a lineáris iterációk fő konvergenciakritériuma."
      }
    },
    {
      "term": {
        "en": "Convergence criterion (Thm 4.1 / 4.6)",
        "hu": "Konvergenciakritérium (4.1 / 4.6. tétel)"
      },
      "def": {
        "en": "Equivalent: $\\mathbf{T}^k\\to\\mathbf{0}$; $\\mathbf{T}^k\\mathbf{x}\\to\\mathbf{0}$ for all $\\mathbf{x}$; $\\rho(\\mathbf{T})<1$. For $\\mathbf{c}\\ne\\mathbf{0}$ the iteration converges to the unique fixed point for every $\\mathbf{x}^{(0)}$ iff $\\rho(\\mathbf{T})<1$.",
        "hu": "Ekvivalens: $\\mathbf{T}^k\\to\\mathbf{0}$; $\\mathbf{T}^k\\mathbf{x}\\to\\mathbf{0}$ minden $\\mathbf{x}$-re; $\\rho(\\mathbf{T})<1$. $\\mathbf{c}\\ne\\mathbf{0}$ esetén az iteráció minden $\\mathbf{x}^{(0)}$-ból az egyetlen fixponthoz konvergál, pontosan ha $\\rho(\\mathbf{T})<1$."
      }
    },
    {
      "term": {
        "en": "Sufficient norm condition (Thm 4.2)",
        "hu": "Elégséges norma-feltétel (4.2. tétel)"
      },
      "def": {
        "en": "If $\\|\\mathbf{T}\\|<1$ in some matrix norm then $\\|\\mathbf{T}^k\\|\\to0$ (since $\\|\\mathbf{T}^k\\|\\le\\|\\mathbf{T}\\|^k$). A convenient, easily-checked sufficient condition for convergence.",
        "hu": "Ha $\\|\\mathbf{T}\\|<1$ valamely mátrixnormában, akkor $\\|\\mathbf{T}^k\\|\\to0$ (mert $\\|\\mathbf{T}^k\\|\\le\\|\\mathbf{T}\\|^k$). Kényelmes, könnyen ellenőrizhető elégséges feltétel a konvergenciára."
      }
    },
    {
      "term": {
        "en": "Neumann (geometric) series (Thm 4.3)",
        "hu": "Neumann- (geometriai) sor (4.3. tétel)"
      },
      "def": {
        "en": "If $\\rho(\\mathbf{A})<1$ then $\\mathbf{I}-\\mathbf{A}$ is invertible and $(\\mathbf{I}-\\mathbf{A})^{-1}=\\mathbf{I}+\\mathbf{A}+\\mathbf{A}^2+\\cdots$. The matrix analogue of $\\frac{1}{1-a}=1+a+a^2+\\cdots$; the converse holds too.",
        "hu": "Ha $\\rho(\\mathbf{A})<1$, akkor $\\mathbf{I}-\\mathbf{A}$ invertálható és $(\\mathbf{I}-\\mathbf{A})^{-1}=\\mathbf{I}+\\mathbf{A}+\\mathbf{A}^2+\\cdots$. A $\\frac{1}{1-a}=1+a+a^2+\\cdots$ mátrixos megfelelője; a megfordítása is igaz."
      }
    },
    {
      "term": {
        "en": "Neumann bound (Cor. 4.4)",
        "hu": "Neumann-korlát (4.4. következmény)"
      },
      "def": {
        "en": "If $\\|\\mathbf{A}\\|<1$ then $\\|(\\mathbf{I}-\\mathbf{A})^{-1}\\|\\le\\dfrac{1}{1-\\|\\mathbf{A}\\|}$. Bounds how large the inverse can be when $\\mathbf{A}$ is a small perturbation of $\\mathbf{I}$.",
        "hu": "Ha $\\|\\mathbf{A}\\|<1$, akkor $\\|(\\mathbf{I}-\\mathbf{A})^{-1}\\|\\le\\dfrac{1}{1-\\|\\mathbf{A}\\|}$. Korlátozza, mekkora lehet az inverz, ha $\\mathbf{A}$ az $\\mathbf{I}$ kis perturbációja."
      }
    },
    {
      "term": {
        "en": "Perturbation of the inverse (Thm 4.5)",
        "hu": "Az inverz perturbációja (4.5. tétel)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is nonsingular and $\\|\\mathbf{A}-\\mathbf{B}\\|<1/\\|\\mathbf{A}^{-1}\\|$, then $\\mathbf{B}$ is also nonsingular with bounded $\\|\\mathbf{B}^{-1}\\|$ and $\\|\\mathbf{A}^{-1}-\\mathbf{B}^{-1}\\|$. Invertibility is an open condition: matrices near a nonsingular one stay nonsingular.",
        "hu": "Ha $\\mathbf{A}$ reguláris és $\\|\\mathbf{A}-\\mathbf{B}\\|<1/\\|\\mathbf{A}^{-1}\\|$, akkor $\\mathbf{B}$ is reguláris, korlátos $\\|\\mathbf{B}^{-1}\\|$-vel és $\\|\\mathbf{A}^{-1}-\\mathbf{B}^{-1}\\|$-vel. Az invertálhatóság nyílt feltétel: egy regulárishoz közeli mátrixok is regulárisak maradnak."
      }
    },
    {
      "term": {
        "en": "Convergence rate & stability",
        "hu": "Konvergenciasebesség és stabilitás"
      },
      "def": {
        "en": "$\\|\\mathbf{x}-\\mathbf{x}^{(k)}\\|\\le\\|\\mathbf{T}\\|^k\\|\\mathbf{x}-\\mathbf{x}^{(0)}\\|$ (Cor. 4.7) — smaller $\\|\\mathbf{T}\\|$ (or $\\rho(\\mathbf{T})$) means faster convergence. With rounding errors $\\le\\varepsilon$ per step, the error stays bounded by $\\varepsilon/(1-\\|\\mathbf{T}\\|)$, so the iteration is stable.",
        "hu": "$\\|\\mathbf{x}-\\mathbf{x}^{(k)}\\|\\le\\|\\mathbf{T}\\|^k\\|\\mathbf{x}-\\mathbf{x}^{(0)}\\|$ (4.7. következmény) — kisebb $\\|\\mathbf{T}\\|$ (vagy $\\rho(\\mathbf{T})$) gyorsabb konvergenciát jelent. Lépésenként $\\le\\varepsilon$ kerekítési hibával a hiba $\\varepsilon/(1-\\|\\mathbf{T}\\|)$ alatt marad, így az iteráció stabil."
      }
    }
  ],
  'jacobi-gs': [
    {
      "term": {
        "en": "Jacobi iteration (4.15)",
        "hu": "Jacobi-iteráció (4.15)"
      },
      "def": {
        "en": "$x_i^{(k+1)}=\\dfrac{1}{a_{ii}}\\big(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)}\\big)$ — solve each equation for its diagonal unknown, using **old** values on the right. All components update simultaneously from the previous iterate.",
        "hu": "$x_i^{(k+1)}=\\dfrac{1}{a_{ii}}\\big(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)}\\big)$ — minden egyenletet a saját főátlós ismeretlenére rendezünk, a jobb oldalon a **régi** értékekkel. Minden komponens egyszerre frissül az előző iteráltból."
      }
    },
    {
      "term": {
        "en": "Matrix splitting $\\mathbf{A}=\\mathbf{L}+\\mathbf{D}+\\mathbf{U}$",
        "hu": "Mátrix-felbontás $\\mathbf{A}=\\mathbf{L}+\\mathbf{D}+\\mathbf{U}$"
      },
      "def": {
        "en": "Split $\\mathbf{A}$ into its strict lower part $\\mathbf{L}$, diagonal $\\mathbf{D}$ and strict upper part $\\mathbf{U}$. Different ways of grouping these terms produce the Jacobi, Gauss–Seidel and SOR iterations.",
        "hu": "Bontsuk $\\mathbf{A}$-t a szigorú alsó $\\mathbf{L}$, a főátlós $\\mathbf{D}$ és a szigorú felső $\\mathbf{U}$ részre. E tagok különböző csoportosítása adja a Jacobi-, Gauss–Seidel- és SOR-iterációt."
      }
    },
    {
      "term": {
        "en": "Jacobi matrix $\\mathbf{T}_J$",
        "hu": "Jacobi-mátrix $\\mathbf{T}_J$"
      },
      "def": {
        "en": "From $\\mathbf{D}\\mathbf{x}=-(\\mathbf{L}+\\mathbf{U})\\mathbf{x}+\\mathbf{b}$: $\\mathbf{T}_J=-\\mathbf{D}^{-1}(\\mathbf{L}+\\mathbf{U})$, $\\mathbf{c}_J=\\mathbf{D}^{-1}\\mathbf{b}$. Its off-diagonal entries are $-a_{ij}/a_{ii}$; the diagonal is zero.",
        "hu": "A $\\mathbf{D}\\mathbf{x}=-(\\mathbf{L}+\\mathbf{U})\\mathbf{x}+\\mathbf{b}$-ből: $\\mathbf{T}_J=-\\mathbf{D}^{-1}(\\mathbf{L}+\\mathbf{U})$, $\\mathbf{c}_J=\\mathbf{D}^{-1}\\mathbf{b}$. Az átlón kívüli elemei $-a_{ij}/a_{ii}$; a főátló nulla."
      }
    },
    {
      "term": {
        "en": "Convergence $\\rho(\\mathbf{T}_J)<1$ (Thm 4.9)",
        "hu": "Konvergencia $\\rho(\\mathbf{T}_J)<1$ (4.9. tétel)"
      },
      "def": {
        "en": "The Jacobi iteration converges for every $\\mathbf{x}^{(0)}$ iff $\\rho(\\mathbf{T}_J)<1$; a convenient sufficient condition is $\\|\\mathbf{T}_J\\|<1$ in any matrix norm (Cor. 4.10).",
        "hu": "A Jacobi-iteráció minden $\\mathbf{x}^{(0)}$-ra konvergál, pontosan ha $\\rho(\\mathbf{T}_J)<1$; kényelmes elégséges feltétel $\\|\\mathbf{T}_J\\|<1$ bármely mátrixnormában (4.10. következmény)."
      }
    },
    {
      "term": {
        "en": "Diagonal dominance ⇒ converges (Thm 4.11)",
        "hu": "Diagonális dominancia ⇒ konvergens (4.11)"
      },
      "def": {
        "en": "If $\\mathbf{A}$ is (row) diagonally dominant then $\\|\\mathbf{T}_J\\|_\\infty=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$, so Jacobi converges for all $\\mathbf{x}^{(0)}$. The practical, easily-checked guarantee.",
        "hu": "Ha $\\mathbf{A}$ (soronként) diagonálisan domináns, akkor $\\|\\mathbf{T}_J\\|_\\infty=\\max_i\\sum_{j\\ne i}|a_{ij}|/|a_{ii}|<1$, így a Jacobi minden $\\mathbf{x}^{(0)}$-ra konvergál. A gyakorlati, könnyen ellenőrizhető garancia."
      }
    },
    {
      "term": {
        "en": "Simultaneous (old-value) update",
        "hu": "Egyidejű (régi-értékes) frissítés"
      },
      "def": {
        "en": "Jacobi computes the whole new vector $\\mathbf{x}^{(k+1)}$ from $\\mathbf{x}^{(k)}$ before overwriting — order-independent and trivially parallel, unlike Gauss–Seidel which reuses fresh components immediately.",
        "hu": "A Jacobi a teljes új $\\mathbf{x}^{(k+1)}$ vektort $\\mathbf{x}^{(k)}$-ból számolja, mielőtt felülírná — sorrendfüggetlen és könnyen párhuzamosítható, szemben a Gauss–Seidellel, amely azonnal újrahasználja a friss komponenseket."
      }
    }
  ],
  'condition': [
    {
      "term": {
        "en": "Residual vector",
        "hu": "Reziduum-vektor"
      },
      "def": {
        "en": "$\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\tilde{\\mathbf{x}}$ for an approximate solution $\\tilde{\\mathbf{x}}$. The stopping test (iii) $\\|\\mathbf{r}\\|<\\varepsilon$ hopes a small residual means a small error — but that can fail (Example 4.17).",
        "hu": "$\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\tilde{\\mathbf{x}}$ egy $\\tilde{\\mathbf{x}}$ közelítő megoldásra. A (iii) megállási teszt $\\|\\mathbf{r}\\|<\\varepsilon$ azt reméli, hogy a kis reziduum kis hibát jelent — de ez elromolhat (4.17. példa)."
      }
    },
    {
      "term": {
        "en": "Residual error bound (Thm 4.18)",
        "hu": "Reziduum-hibakorlát (4.18. tétel)"
      },
      "def": {
        "en": "$\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|\\le\\|\\mathbf{A}^{-1}\\|\\,\\|\\mathbf{r}\\|$ and $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\mathbf{r}\\|}{\\|\\mathbf{b}\\|}$. A small residual guarantees a small error only when $\\operatorname{cond}(\\mathbf{A})$ is modest.",
        "hu": "$\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|\\le\\|\\mathbf{A}^{-1}\\|\\,\\|\\mathbf{r}\\|$ és $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\mathbf{r}\\|}{\\|\\mathbf{b}\\|}$. A kis reziduum csak akkor garantál kis hibát, ha $\\operatorname{cond}(\\mathbf{A})$ mérsékelt."
      }
    },
    {
      "term": {
        "en": "Condition number $\\operatorname{cond}(\\mathbf{A})$",
        "hu": "Kondíciószám $\\operatorname{cond}(\\mathbf{A})$"
      },
      "def": {
        "en": "$\\operatorname{cond}(\\mathbf{A})=\\|\\mathbf{A}\\|\\,\\|\\mathbf{A}^{-1}\\|\\ge1$ (norm-dependent: $\\operatorname{cond}_p$). Large (≳100–1000) ⟹ **ill-conditioned**: small data changes can cause large solution changes; small ⟹ **well-conditioned**.",
        "hu": "$\\operatorname{cond}(\\mathbf{A})=\\|\\mathbf{A}\\|\\,\\|\\mathbf{A}^{-1}\\|\\ge1$ (normafüggő: $\\operatorname{cond}_p$). Nagy (≳100–1000) ⟹ **rosszul kondicionált**: kis adatváltozás nagy megoldásváltozást okozhat; kicsi ⟹ **jól kondicionált**."
      }
    },
    {
      "term": {
        "en": "Iterative refinement (Alg. 4.20)",
        "hu": "Iteratív finomítás (4.20. algoritmus)"
      },
      "def": {
        "en": "Solve $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$, compute the residual $\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\mathbf{x}$ in double precision, solve $\\mathbf{A}\\mathbf{y}=\\mathbf{r}$, correct $\\bar{\\mathbf{x}}=\\mathbf{x}+\\mathbf{y}$, repeat. Recovers accuracy even for ill-conditioned $\\mathbf{A}$ (reusing the LU factors makes each step cheap).",
        "hu": "Oldd meg $\\mathbf{A}\\mathbf{x}=\\mathbf{b}$-t, számold a reziduumot $\\mathbf{r}=\\mathbf{b}-\\mathbf{A}\\mathbf{x}$ dupla pontossággal, oldd meg $\\mathbf{A}\\mathbf{y}=\\mathbf{r}$-t, korrigálj $\\bar{\\mathbf{x}}=\\mathbf{x}+\\mathbf{y}$, ismételd. Rosszul kondicionált $\\mathbf{A}$-ra is visszanyeri a pontosságot (az LU-tényezők újrahasználata olcsóvá teszi)."
      }
    },
    {
      "term": {
        "en": "Condition number estimate (4.23)",
        "hu": "Kondíciószám-becslés (4.23)"
      },
      "def": {
        "en": "From one refinement step, $\\operatorname{cond}(\\mathbf{A})\\approx10^{t}\\dfrac{\\|\\tilde{\\mathbf{y}}\\|}{\\|\\tilde{\\mathbf{x}}\\|}$ ($t$ = digits). A cheap by-product of the residual correction.",
        "hu": "Egy finomítási lépésből $\\operatorname{cond}(\\mathbf{A})\\approx10^{t}\\dfrac{\\|\\tilde{\\mathbf{y}}\\|}{\\|\\tilde{\\mathbf{x}}\\|}$ ($t$ = jegyek száma). A reziduum-korrekció olcsó mellékterméke."
      }
    },
    {
      "term": {
        "en": "Perturbation bounds (Thm 4.22/4.23)",
        "hu": "Perturbációs korlátok (4.22/4.23)"
      },
      "def": {
        "en": "Perturbing $\\mathbf{b}$: $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}$. One order of magnitude in $\\operatorname{cond}$ can cost one significant digit. Perturbing both $\\mathbf{A}$ and $\\mathbf{b}$ gives a similar amplified bound.",
        "hu": "$\\mathbf{b}$ perturbálása: $\\dfrac{\\|\\mathbf{x}-\\tilde{\\mathbf{x}}\\|}{\\|\\mathbf{x}\\|}\\le\\operatorname{cond}(\\mathbf{A})\\dfrac{\\|\\Delta\\mathbf{b}\\|}{\\|\\mathbf{b}\\|}$. Egy nagyságrend $\\operatorname{cond}$-ban egy értékes jegybe kerülhet. $\\mathbf{A}$ és $\\mathbf{b}$ együttes perturbálása hasonló felnagyított korlátot ad."
      }
    },
    {
      "term": {
        "en": "Spectral condition number & Gastinel (Thm 4.24/4.25)",
        "hu": "Spektrális kondíciószám és Gastinel (4.24/4.25)"
      },
      "def": {
        "en": "$\\operatorname{cond}_*(\\mathbf{A})=\\rho(\\mathbf{A})\\rho(\\mathbf{A}^{-1})\\le\\operatorname{cond}(\\mathbf{A})$ — the smallest condition number. Gastinel: $1/\\operatorname{cond}(\\mathbf{A})=\\min\\{\\|\\mathbf{A}-\\mathbf{B}\\|/\\|\\mathbf{A}\\|:\\mathbf{B}\\text{ singular}\\}$ — a large condition number means a singular matrix is nearby.",
        "hu": "$\\operatorname{cond}_*(\\mathbf{A})=\\rho(\\mathbf{A})\\rho(\\mathbf{A}^{-1})\\le\\operatorname{cond}(\\mathbf{A})$ — a legkisebb kondíciószám. Gastinel: $1/\\operatorname{cond}(\\mathbf{A})=\\min\\{\\|\\mathbf{A}-\\mathbf{B}\\|/\\|\\mathbf{A}\\|:\\mathbf{B}\\text{ szinguláris}\\}$ — a nagy kondíciószám azt jelenti, hogy van közeli szinguláris mátrix."
      }
    },
    {
      "term": {
        "en": "Hilbert matrix",
        "hu": "Hilbert-mátrix"
      },
      "def": {
        "en": "$\\mathbf{H}_n$ with entries $1/(i+j-1)$ — the classic ill-conditioned family. Its condition number explodes with $n$ (e.g. $\\operatorname{cond}_*\\approx1.6\\cdot10^{13}$ at $n=10$).",
        "hu": "$\\mathbf{H}_n$ az $1/(i+j-1)$ elemekkel — a klasszikus rosszul kondicionált család. Kondíciószáma $n$-nel robban (pl. $\\operatorname{cond}_*\\approx1{,}6\\cdot10^{13}$ $n=10$-nél)."
      }
    }
  ],
}

export const FLASHCARDS: Partial<Record<ModuleId, Flashcard[]>> = {
  'fixed-point': [
    {"q":"What is the definition of an eigenvalue $\\lambda$ for a square matrix $\\mathbf{A} \\in \\mathbb{R}^{n \\times n}$?","a":"A complex number $\\lambda$ such that $\\mathbf{A}\\mathbf{x} = \\lambda\\mathbf{x}$ has a non-trivial solution $\\mathbf{x} \\neq \\mathbf{0}$."},
    {"q":"What is an eigenvector of a matrix $\\mathbf{A}$ corresponding to the eigenvalue $\\lambda$?","a":"A non-trivial solution vector $\\mathbf{x}$ satisfying the equation $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$."},
    {"q":"The characteristic equation of an $n \\times n$ matrix $\\mathbf{A}$ used to find eigenvalues is written as _____.","a":"$\\det(\\mathbf{A} - \\lambda\\mathbf{I}) = 0$"},
    {"q":"How many eigenvalues (counting multiplicities) does an $n \\times n$ matrix $\\mathbf{A}$ possess?","a":"It has exactly $n$ eigenvalues."},
    {"q":"Term: Spectral Radius ($\\rho(\\mathbf{A})$)","a":"Definition: The maximum absolute value of the eigenvalues of the matrix $\\mathbf{A}$."},
    {"q":"What is the mathematical relationship between the spectral radius $\\rho(\\mathbf{A})$ and any matrix norm $\\|\\cdot\\|$?","a":"$\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$"},
    {"q":"In the proof of $\\rho(\\mathbf{A}) \\leq \\|\\mathbf{A}\\|$, what inequality involving the eigenvector $\\mathbf{v}$ and norm $\\|\\cdot\\|$ is used?","a":"$|\\lambda| \\|\\mathbf{v}\\| = \\|\\mathbf{A}\\mathbf{v}\\| \\leq \\|\\mathbf{A}\\| \\|\\mathbf{v}\\|$"},
    {"q":"What is the standard form of a linear $n$-dimensional fixed-point iteration?","a":"$\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$"},
    {"q":"In a linear fixed-point iteration where $\\mathbf{c} = \\mathbf{0}$, what is the general expression for the $k$-th term $\\mathbf{x}^{(k)}$?","a":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)}$"},
    {"q":"For a real or complex scalar $a$, under what condition does $\\lim_{k \\to \\infty} a^k = 0$?","a":"$|a| < 1$"},
    {"q":"Theorem 4.1 states that $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ is equivalent to what condition regarding the spectral radius of $\\mathbf{T}$?","a":"$\\rho(\\mathbf{T}) < 1$"},
    {"q":"According to Theorem 4.1, $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$ for all $\\mathbf{x} \\in \\mathbb{R}^n$ is equivalent to $\\lim_{k \\to \\infty} \\|\\mathbf{T}^k\\| = _____$.","a":"$0$"},
    {"q":"Which property of matrix and vector norms proves that (i) $\\lim_{k \\to \\infty} \\mathbf{T}^k = \\mathbf{0}$ implies (ii) $\\lim_{k \\to \\infty} \\mathbf{T}^k \\mathbf{x} = \\mathbf{0}$?","a":"$\\|\\mathbf{T}^k \\mathbf{x}\\| \\leq \\|\\mathbf{T}^k\\| \\|\\mathbf{x}\\|$"},
    {"q":"In the proof that $\\mathbf{T}^k \\mathbf{x} \\to \\mathbf{0}$ implies $\\rho(\\mathbf{T}) < 1$, what identity is used for an eigenvector $\\mathbf{v}$?","a":"$\\mathbf{T}^k \\mathbf{v} = \\lambda^k \\mathbf{v}$"},
    {"q":"If $\\|\\mathbf{T}\\| < 1$ in some matrix norm, what happens to $\\|\\mathbf{T}^k\\|$ as $k \\to \\infty$?","a":"$\\parallel\\mathbf{T}^k\\parallel \\to 0$"},
    {"q":"What is the matrix series $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\mathbf{A}^3 + \\dots$ commonly called?","a":"Geometric series or Neumann series."},
    {"q":"Under what condition on the spectral radius $\\rho(\\mathbf{A})$ is the geometric series $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ convergent?","a":"$\\rho(\\mathbf{A}) < 1$"},
    {"q":"If the geometric series $\\sum_{k=0}^{\\infty} \\mathbf{A}^k$ converges, what is the value of the limit?","a":"$(\\mathbf{I} - \\mathbf{A})^{-1}$"},
    {"q":"If $\\rho(\\mathbf{A}) < 1$, why must the matrix $\\mathbf{I} - \\mathbf{A}$ be invertible?","a":"If it were not, $1$ would be an eigenvalue of $\\mathbf{A}$, contradicting $\\rho(\\mathbf{A}) < 1$."},
    {"q":"Complete the identity: $(\\mathbf{I} - \\mathbf{A})(\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots + \\mathbf{A}^m) = _____$.","a":"$\\mathbf{I} - \\mathbf{A}^{m+1}$"},
    {"q":"If $\\|\\mathbf{A}\\| < 1$ in some matrix norm, what is the upper bound for the norm $\\|(\\mathbf{I} - \\mathbf{A})^{-1}\\|$?","a":"$\\frac{1}{1 - \\|\\mathbf{A}\\|}$"},
    {"q":"Theorem 4.5: If $\\mathbf{A}$ is nonsingular and $\\|\\mathbf{A} - \\mathbf{B}\\| < \\frac{1}{\\|\\mathbf{A}^{-1}\\|}$, what can be said about matrix $\\mathbf{B}$?","a":"Matrix $\\mathbf{B}$ is also nonsingular."},
    {"q":"Formula: Bound for $\\|\\mathbf{B}^{-1}\\|$ given $\\|\\mathbf{A} - \\mathbf{B}\\| < 1/\\|\\mathbf{A}^{-1}\\|$ and nonsingular $\\mathbf{A}$.","a":"$\\|\\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$"},
    {"q":"Formula: Bound for $\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\|$ in Theorem 4.5.","a":"$\\|\\mathbf{A}^{-1} - \\mathbf{B}^{-1}\\| \\leq \\frac{\\|\\mathbf{A}^{-1}\\|^2 \\|\\mathbf{A} - \\mathbf{B}\\|}{1 - \\|\\mathbf{A}^{-1}\\| \\|\\mathbf{A} - \\mathbf{B}\\|}$"},
    {"q":"In the proof of Theorem 4.5, $\\mathbf{B}$ is decomposed as $\\mathbf{A}(\\mathbf{I} - _____)$.","a":"$\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})$"},
    {"q":"What is the general formula for the $k$-th term $\\mathbf{x}^{(k)}$ of a linear fixed-point iteration with $\\mathbf{c} \\neq \\mathbf{0}$?","a":"$\\mathbf{x}^{(k)} = \\mathbf{T}^k \\mathbf{x}^{(0)} + (\\mathbf{T}^{k-1} + \\dots + \\mathbf{I})\\mathbf{c}$"},
    {"q":"Theorem 4.6: The iteration $\\mathbf{x}^{(k+1)} = \\mathbf{T}\\mathbf{x}^{(k)} + \\mathbf{c}$ converges to a unique solution for all $\\mathbf{x}^{(0)}$ if and only if _____.","a":"$\\rho(\\mathbf{T}) < 1$"},
    {"q":"If $\\rho(\\mathbf{T}) < 1$, the unique solution $\\mathbf{x}$ to $\\mathbf{x} = \\mathbf{T}\\mathbf{x} + \\mathbf{c}$ is explicitly given by _____.","a":"$\\mathbf{x} = (\\mathbf{I} - \\mathbf{T})^{-1}\\mathbf{c}$"},
    {"q":"How is the error $\\mathbf{x} - \\mathbf{x}^{(k+1)}$ related to the previous error $\\mathbf{x} - \\mathbf{x}^{(k)}$ in a linear iteration?","a":"$\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}(\\mathbf{x} - \\mathbf{x}^{(k)})$"},
    {"q":"Formula: The error estimate for the $k$-th iterate given $\\|\\mathbf{T}\\| < 1$.","a":"$\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$"},
    {"q":"How does the magnitude of $\\|\\mathbf{T}\\|$ affect the speed of convergence in fixed-point iteration?","a":"The smaller the $\\|\\mathbf{T}\\|$, the faster the convergence."},
    {"q":"According to the video transcript, linear fixed-point iterations converge for any initial value, a property called _____ convergence.","a":"Global"},
    {"q":"How does linear fixed-point iteration convergence criteria (if and only if $\\rho(\\mathbf{T}) < 1$) compare to nonlinear cases?","a":"It is a necessary and sufficient condition for global convergence, whereas nonlinear cases often only have sufficient conditions for local convergence."},
    {"q":"In the rounding error model $\\mathbf{y}^{(k+1)} = \\mathbf{T}\\mathbf{y}^{(k)} + \\mathbf{c} + \\mathbf{w}^{(k+1)}$, what does $\\mathbf{w}^{(k+1)}$ represent?","a":"The rounding error introduced in the $k$-th step of the computation."},
    {"q":"What does $\\mathbf{w}^{(0)}$ represent in the fixed-point iteration rounding error analysis?","a":"The rounding error occurring when storing the initial value $\\mathbf{x}^{(0)}$."},
    {"q":"Assuming $\\|\\mathbf{w}^{(k)}\\| \\leq \\varepsilon$ and $\\|\\mathbf{T}\\| < 1$, what is the upper bound for the total rounding error $\\|\\mathbf{y}^{(k+1)} - \\mathbf{x}^{(k+1)}\\|$?","a":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}\\varepsilon$"},
    {"q":"Does a smaller $\\|\\mathbf{T}\\|$ increase or decrease the sensitivity of the iteration to rounding errors?","a":"It decreases sensitivity (the computation is more stable)."},
    {"q":"Concept: Stability of linear fixed-point iteration","a":"Definition: The property that the difference between the theoretical sequence and the computed sequence remains bounded by a factor of the rounding error."},
    {"q":"What is the sum of the geometric series $\\mathbf{I} + \\mathbf{A} + \\mathbf{A}^2 + \\dots$ if $\\mathbf{A}$ is a strictly upper triangular matrix?","a":"A finite sum of matrices, because $\\mathbf{A}$ is nilpotent (powers eventually become zero)."},
    {"q":"For a diagonal matrix $\\mathbf{A} = \\text{diag}(d_1, \\dots, d_n)$, what is the spectral radius $\\rho(\\mathbf{A})$?","a":"$\\max_i |d_i|$"},
    {"q":"If $\\mathbf{A} = \\text{diag}(1/2, 1/3, 1/4, 1/5)$, what is the limit of the Neumann series $(\\mathbf{I} - \\mathbf{A})^{-1}$?","a":"$\\text{diag}(2, 3/2, 4/3, 5/4)$"},
    {"q":"What does Theorem 3.17 (referenced in source) guarantee about a matrix $\\mathbf{T}$ and $\\rho(\\mathbf{T})$?","a":"For any $\\varepsilon > 0$, there exists a matrix norm such that $\\|\\mathbf{T}\\| \\leq \\rho(\\mathbf{T}) + \\varepsilon$."},
    {"q":"True or False: If a matrix sequence $\\mathbf{T}^k \\to \\mathbf{0}$ in one matrix norm, it must converge to $\\mathbf{0}$ in all matrix norms.","a":"True"},
    {"q":"Why do the eigenvalues of a real matrix appear in conjugate pairs on the complex plane?","a":"Because the characteristic equation is a polynomial with real coefficients."},
    {"q":"On a complex plane plot, all eigenvalues of $\\mathbf{A}$ are located within or on a circle centered at the origin with radius _____.","a":"$\\rho(\\mathbf{A})$"},
    {"q":"In the identity $\\mathbf{x} - \\mathbf{x}^{(k+1)} = \\mathbf{T}^{k+1}(\\mathbf{x} - \\mathbf{x}^{(0)})$, what does $\\mathbf{x}$ represent?","a":"The exact unique solution to the fixed-point equation."},
    {"q":"The proof of Theorem 4.3 uses a proof by _____ to show $\\mathbf{I} - \\mathbf{A}$ is invertible when $\\rho(\\mathbf{A}) < 1$.","a":"Contradiction"},
    {"q":"Term: Nilpotent Matrix","a":"Definition: A square matrix $\\mathbf{A}$ such that $\\mathbf{A}^k = \\mathbf{0}$ for some positive integer $k$."},
    {"q":"How is the identity matrix $\\mathbf{I}$ defined in the context of eigenvectors?","a":"As the $n \\times n$ matrix such that $\\mathbf{I}\\mathbf{x} = \\mathbf{x}$ for all $\\mathbf{x}$."},
    {"q":"If the matrix $\\mathbf{B} = \\begin{pmatrix} 1 & 2 \\\\ \\alpha & 0 \\end{pmatrix}$ results in $\\mathbf{B}^k \\to \\mathbf{0}$, what must be true about its eigenvalues?","a":"Both eigenvalues must have an absolute value strictly less than 1."},
    {"q":"According to the video, if $\\|\\mathbf{T}\\| < 1$, then $\\rho(\\mathbf{T})$ is _____.","a":"Also less than 1."},
    {"q":"What property of matrix norms allows the interchange of the limit and the norm: $\\| \\lim \\mathbf{A}_m \\| = \\lim \\| \\mathbf{A}_m \\|$?","a":"Continuity of the matrix norm."},
    {"q":"The assumption $\\|\\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B})\\| < 1$ is sufficient to ensure $(\\mathbf{I} - \\mathbf{A}^{-1}(\\mathbf{A} - \\mathbf{B}))$ is _____.","a":"Invertible"},
    {"q":"When $\\mathbf{c} \\neq \\mathbf{0}$, the fixed-point iteration is stable if the spectral radius of the iteration matrix $\\mathbf{T}$ satisfies _____.","a":"$\\rho(\\mathbf{T}) < 1$"},
    {"q":"What happens to the error term $\\|\\mathbf{T}\\|^{k+1} \\|\\mathbf{y}^{(0)} - \\mathbf{x}^{(0)}\\|$ as $k \\to \\infty$ if $\\|\\mathbf{T}\\| < 1$?","a":"It converges to zero."},
    {"q":"Term: Homogeneous Linear System","a":"Definition: A system of linear equations of the form $\\mathbf{A}\\mathbf{x} = \\mathbf{0}$."},
    {"q":"A homogeneous system $(\\mathbf{A} - \\lambda\\mathbf{I})\\mathbf{x} = \\mathbf{0}$ has a non-trivial solution if and only if the matrix $(\\mathbf{A} - \\lambda\\mathbf{I})$ is _____.","a":"Singular (or has a determinant of zero)."},
    {"q":"If $\\lambda$ is an eigenvalue, the distance of $\\lambda$ from the origin in the complex plane is given by _____.","a":"$|\\lambda|$"},
    {"q":"What is the limit of the finite sum $1 + \\|\\mathbf{T}\\| + \\dots + \\|\\mathbf{T}\\|^k$ as $k \\to \\infty$ for $\\|\\mathbf{T}\\| < 1$?","a":"$\\frac{1}{1 - \\|\\mathbf{T}\\|}$"},
    {"q":"The error estimate $\\|\\mathbf{x} - \\mathbf{x}^{(k)}\\| \\leq \\|\\mathbf{T}\\|^k \\|\\mathbf{x} - \\mathbf{x}^{(0)}\\|$ is derived by applying the _____ property to $\\mathbf{T}^k(\\mathbf{x} - \\mathbf{x}^{(0)})$.","a":"Submultiplicative (or matrix-vector norm compatibility)."}
  ],
  'jacobi-gs': [
    {"q":"What is the primary purpose of the Jacobi iteration method?","a":"To solve linear systems of equations of the form $Ax = b$ iteratively."},
    {"q":"What condition must be met by all diagonal elements $a_{ii}$ for the Jacobi iteration to be defined?","a":"$a_{ii} \\ne 0$ for all $i = 1, \\dots, n$."},
    {"q":"If a diagonal element $a_{ii}$ is zero, what strategy can be used to apply Jacobi iteration?","a":"Interchange the rows of the matrix to achieve non-zero diagonal elements."},
    {"q":"In the scalar form of Jacobi iteration, what is the formula for $x_i^{(k+1)}$?","a":"$x_i^{(k+1)} = -\\sum_{j \\ne i} \\frac{a_{ij}}{a_{ii}} x_j^{(k)} + \\frac{b_i}{a_{ii}}$."},
    {"q":"The Jacobi iteration is a specific type of multi-dimensional _____ equation.","a":"linear fixed-point"},
    {"q":"In the matrix splitting $A = L + D + U$ for Jacobi iteration, what does the matrix $D$ represent?","a":"The diagonal matrix containing the diagonal elements of $A$."},
    {"q":"In the matrix splitting $A = L + D + U$, how is the matrix $L$ defined?","a":"A strictly lower triangular matrix containing the elements of $A$ below the main diagonal."},
    {"q":"In the matrix splitting $A = L + D + U$, how is the matrix $U$ defined?","a":"A strictly upper triangular matrix containing the elements of $A$ above the main diagonal."},
    {"q":"What is the vector form equation for the Jacobi iteration step?","a":"$x^{(k+1)} = Tx^{(k)} + c$"},
    {"q":"How is the Jacobi iteration matrix $T_J$ calculated using the $L, D, U$ splitting?","a":"$T_J = -D^{-1}(L + U)$"},
    {"q":"How is the constant vector $c$ calculated in the matrix form of Jacobi iteration?","a":"$c = D^{-1}b$"},
    {"q":"Which matrix contains the reciprocals of the diagonal elements of $A$?","a":"$D^{-1}$"},
    {"q":"What is the necessary and sufficient condition for the Jacobi iteration to converge for all initial values?","a":"The spectral radius $\\rho(T_J) < 1$."},
    {"q":"Term: Spectral Radius $\\rho(T)$","a":"Definition: The maximum absolute value of the eigenvalues of matrix $T$."},
    {"q":"According to Corollary 4.10, the Jacobi iteration converges if any matrix norm $\\|T_J\\|$ is _____.","a":"less than 1"},
    {"q":"What property of matrix $A$ is a common sufficient condition for the convergence of Jacobi iteration?","a":"Strict diagonal dominance."},
    {"q":"What is the mathematical definition of a row diagonally dominant matrix $A$?","a":"$|a_{ii}| > \\sum_{j \\ne i} |a_{ij}|$ for all $i$."},
    {"q":"How are the diagonal entries of the Jacobi iteration matrix $T_J$ always valued?","a":"They are all zero."},
    {"q":"Why does diagonal dominance of $A$ guarantee convergence in the infinity norm?","a":"It ensures that $\\|T_J\\|_\\infty < 1$."},
    {"q":"How is the infinity norm $\\|T_J\\|_\\infty$ calculated in the context of the Jacobi method?","a":"As the maximum absolute row sum: $\\max_i \\sum_{j \\ne i} \\frac{|a_{ij}|}{|a_{ii}|}$."},
    {"q":"If the Jacobi iteration converges, what does the sequence limit represent?","a":"The exact solution to the linear system $Ax = b$."},
    {"q":"In the scalar formula for $x_i^{(k+1)}$, what values from the sequence are used on the right-hand side?","a":"Only values from the previous iteration $k$."},
    {"q":"If the spectral radius $\\rho(T_J) \\ge 1$, can Jacobi iteration be guaranteed to converge for any $x^{(0)}$?","a":"No, the method may diverge for some initial values."},
    {"q":"What is the relationship between the matrix $A$ and the split components $L$, $D$, and $U$?","a":"$A = L + D + U$"},
    {"q":"Under what condition is the convergence of the Jacobi iteration considered 'global'?","a":"When it converges for any arbitrary initial value $x^{(0)}$."},
    {"q":"The elements of the iteration matrix $T_J$ are given by $t_{ij} = \\dots$ for $i \\ne j$.","a":"$t_{ij} = -a_{ij}/a_{ii}$"},
    {"q":"According to the exercises, Jacobi iteration is also convergent if $A$ is _____ diagonally dominant.","a":"column"},
    {"q":"Formula: $\\|T\\|_\\infty$","a":"Definition: $\\max_{1 \\le i \\le n} \\sum_{j=1}^n |t_{ij}|$."},
    {"q":"In the example $5x_1 + 3x_2 - x_3 = -4$, what is the expression for $x_1^{(k+1)}$?","a":"$x_1^{(k+1)} = (-4 - 3x_2^{(k)} + x_3^{(k)})/5$."},
    {"q":"If $\\|T_J\\|_\\infty = 4/5$, what can be concluded about the convergence of the Jacobi iteration?","a":"It is convergent because the norm is less than 1."},
    {"q":"What is the result of multiplying the equation $Dx = -(L+U)x + b$ by $D^{-1}$?","a":"$x = -D^{-1}(L+U)x + D^{-1}b$"},
    {"q":"In a $3 \\times 3$ system, how many equations are solved for their respective diagonal variables to form the Jacobi iteration?","a":"Three."},
    {"q":"Is the condition $\\rho(T_J) < 1$ necessary, sufficient, or both for Jacobi convergence?","a":"Both (necessary and sufficient)."},
    {"q":"Is the diagonal dominance of $A$ a necessary condition for Jacobi convergence?","a":"No, it is only a sufficient condition."},
    {"q":"What does the index $k$ represent in the sequence $x^{(k)}$?","a":"The iteration count or step number."},
    {"q":"In the scalar Jacobi formula, why is the term where $j = i$ excluded from the summation?","a":"Because $x_i$ is the variable being solved for on the left-hand side."},
    {"q":"Which matrix norm is typically easiest to evaluate to check for Jacobi convergence in practice?","a":"The infinity norm (maximum absolute row sum)."},
    {"q":"How does the Jacobi method treat the update of vector components during a single iteration?","a":"Simultaneously (all new components depend only on the previous vector $x^{(k)}$)."},
    {"q":"In the matrix splitting $L+D+U$, what are the diagonal elements of $L$?","a":"Zero."},
    {"q":"In the matrix splitting $L+D+U$, what are the diagonal elements of $U$?","a":"Zero."},
    {"q":"What transformation is applied to $Ax=b$ to isolate the $Dx$ term on the left?","a":"$Dx = b - (L+U)x$"},
    {"q":"If the initial guess is $x^{(0)} = 0$, what is the value of $x^{(1)}$?","a":"$x^{(1)} = c$ (the constant vector $D^{-1}b$)."},
    {"q":"The notation $T_J$ is specifically used for the _____ matrix.","a":"Jacobi iteration"},
    {"q":"Does the Jacobi iteration always converge for any non-singular matrix $A$?","a":"No, convergence depends on the spectral radius of $T_J$."},
    {"q":"What is the relation between the diagonal dominance of $A$ and the infinity norm of $T_J$?","a":"Diagonal dominance implies $\\|T_J\\|_\\infty < 1$."},
    {"q":"In $T_J = -D^{-1}(L+U)$, what does the negative sign originate from?","a":"Moving the $(L+U)x$ terms to the right-hand side of the equation."},
    {"q":"A matrix is _____ dominant if for every row, the magnitude of the diagonal entry is larger than the sum of the magnitudes of all other entries in that row.","a":"diagonally"},
    {"q":"If $\\|T_J\\|_1 < 1$, is the Jacobi iteration guaranteed to converge?","a":"Yes, any matrix norm being less than 1 is sufficient."},
    {"q":"In the general system $Ax=b$, what coefficient is used to divide the $i$-th equation in the Jacobi method?","a":"The diagonal coefficient $a_{ii}$."},
    {"q":"How is the constant vector $c_i$ for a specific row $i$ defined in scalar form?","a":"$c_i = b_i / a_{ii}$"},
    {"q":"True or False: Row interchanges used to fix $a_{ii} = 0$ change the solution to the system $Ax=b$.","a":"False (they only rearrange the equations)."},
    {"q":"Which component of $A = L+D+U$ is used to compute the inverse needed for the iteration matrix?","a":"The diagonal matrix $D$."},
    {"q":"The Jacobi method is a _____ method, meaning it generates a sequence of approximations.","a":"stationary iterative"},
    {"q":"The values in Table 4.1 show that as $k$ increases, the vector $x^{(k)}$ _____ to the true solution.","a":"converges"},
    {"q":"If the infinity norm of the iteration matrix is 0.75, does the system satisfy a sufficient condition for convergence?","a":"Yes, because $0.75 < 1$."},
    {"q":"In the splitting $A=L+D+U$, why is $L+U$ grouped together in the iteration matrix formula?","a":"They represent all the non-diagonal coefficients of $A$."},
    {"q":"If a matrix $A$ is diagonally dominant, what is the maximum possible value for a row sum in $T_J$?","a":"A value strictly less than 1."},
    {"q":"When expressing $x_2$ in the Jacobi method for a $3 \\times 3$ system, which variables are on the right-hand side?","a":"$x_1$ and $x_3$."},
    {"q":"Cloze: The Jacobi iteration is convergent for *all* initial values if and only if $\\rho(T_J)$ is _____.","a":"less than 1"},
    {"q":"What matrix operation is performed on $L+U$ before multiplying by $-D^{-1}$ to get $T_J$?","a":"Addition."}
  ],
  'condition': [
    {"q":"In the context of the linear system $Ax = b$, how is the residual vector $r$ defined for an approximate solution $\\tilde{x}$?","a":"$r = b - A\\tilde{x}$"},
    {"q":"What is the stopping criterion for iterative methods based on the absolute difference between consecutive iterations?","a":"$\\|x^{(k+1)} - x^{(k)}\\| < \\varepsilon$"},
    {"q":"What is the stopping criterion for iterative methods based on the relative difference between consecutive iterations?","a":"$\\frac{\\|x^{(k+1)} - x^{(k)}\\|}{\\|x^{(k+1)}\\|} < \\varepsilon$"},
    {"q":"What is the stopping criterion for iterative methods based on the residual vector $r$?","a":"$\\|b - Ax^{(k)}\\| < \\varepsilon$"},
    {"q":"Under what condition is the smallness of the residual vector $\\|r\\|$ a reliable indicator that the error $\\|x - \\tilde{x}\\|$ is also small?","a":"When the matrix $A$ is well-conditioned (the product $\\|A\\| \\|A^{-1}\\|$ is not too large)."},
    {"q":"What is the absolute error bound for an approximate solution $\\tilde{x}$ of the system $Ax = b$ given its residual $r$?","a":"$\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$"},
    {"q":"What is the relative error bound for an approximate solution $\\tilde{x}$ of the system $Ax = b$ involving the condition number?","a":"$\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|} \\leq \\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$"},
    {"q":"How is the condition number of a square matrix $A$ defined relative to a matrix norm $\\| \\cdot \\|$?","a":"$\\text{cond}(A) = \\|A\\| \\|A^{-1}\\|$"},
    {"q":"What term describes a matrix with a very large condition number?","a":"Ill-conditioned (or weakly determined)."},
    {"q":"In numerical practice, what range of condition number values typically indicates that a matrix is ill-conditioned?","a":"Values greater than $100$ to $1000$."},
    {"q":"If $A$ is nonsingular and $Ax = b$, what is the exact relationship between the error vector $e = x - \\tilde{x}$ and the residual vector $r$?","a":"$x - \\tilde{x} = A^{-1}r$"},
    {"q":"Which matrix norm inequality is used to prove the absolute error bound $\\|x - \\tilde{x}\\| \\leq \\|A^{-1}\\| \\|r\\|$?","a":"$\\|A^{-1}r\\| \\leq \\|A^{-1}\\| \\|r\\|$"},
    {"q":"What inequality relates the norm of the constant vector $b$ to the norms of $A$ and the exact solution $x$?","a":"$\\|b\\| \\leq \\|A\\| \\|x\\|$"},
    {"q":"Why is the residual-based stopping criterion unreliable for ill-conditioned matrices?","a":"A small residual norm does not guarantee a small approximation error when the condition number is large."},
    {"q":"How does the infinity norm condition number $\\text{cond}_\\infty(A)$ of $A = \\begin{pmatrix} 4 & 1 \\\\ 4.03 & 1 \\end{pmatrix}$ explain why $\\tilde{x} = (2, -3)^T$ is a poor approximation despite a small residual?","a":"The condition number is $1346$, which is large enough to allow a small residual to correspond to a large error."},
    {"q":"What is the approximate relationship between the residual norm $\\|r\\|$ and $t$-digit arithmetic rounding error?","a":"$\\|r\\| \\approx 10^{-t} \\|A\\| \\|\\tilde{x}\\|$"},
    {"q":"In iterative refinement, what level of precision is recommended for calculating the residual vector $r = b - A\\tilde{x}$?","a":"Double precision ($2t$-digit arithmetic)."},
    {"q":"In the context of condition number estimation, what does the vector $\\tilde{y}$ (the solution to $Ay = r$) approximate?","a":"The error vector $x - \\tilde{x}$."},
    {"q":"What formula can be used to estimate the condition number $\\text{cond}(A)$ using the numerical solutions $\\tilde{x}$ and $\\tilde{y}$?","a":"$\\text{cond}(A) \\approx 10^t \\frac{\\|\\tilde{y}\\|}{\\|\\tilde{x}\\|}$"},
    {"q":"What is the formula for the improved approximation $\\bar{x}$ after one step of iterative refinement?","a":"$\\bar{x} = \\tilde{x} + \\tilde{y}$"},
    {"q":"How is the new residual $\\tilde{r}$ defined after calculating the correction $\\tilde{y}$ in iterative refinement?","a":"$\\tilde{r} = r - A\\tilde{y}$"},
    {"q":"Why is solving $Ay = r$ during iterative refinement computationally efficient if Gaussian elimination was already performed for $Ax = b$?","a":"The $l_{ij}$ factors and row changes from the first elimination can be reused, requiring elimination only on the vector $r$."},
    {"q":"What is another name for the method of iterative refinement?","a":"Residual correction."},
    {"q":"What was the exact solution to the linear system in Example 4.17?","a":"$x = (1, 1)^T$"},
    {"q":"In Example 4.21, what was the estimated $\\text{cond}_\\infty(A)$ using iterative refinement components?","a":"$1875$"},
    {"q":"According to Theorem 4.18, the relative error is bounded by the product of the condition number and what other ratio?","a":"The ratio of the residual norm to the constant vector norm ($\\frac{\\|r\\|}{\\|b\\|}$)."},
    {"q":"In Example 4.19, what are the infinity norms $\\|A\\|_\\infty$ and $\\|A^{-1}\\|_\\infty$ for the given $2 \\times 2$ matrix?","a":"$\\|A\\|_\\infty = 5.03$ and $\\|A^{-1}\\|_\\infty = 267.6$."},
    {"q":"True or False: The condition number of a matrix $A$ is the same regardless of which matrix norm is used.","a":"False (it depends on the specific norm $\\| \\cdot \\|_p$ used)."},
    {"q":"In iterative refinement, if $\\tilde{x}$ is the approximate solution to $Ax = b$, what system is solved to find the correction vector $\\tilde{y}$?","a":"$Ay = r$ (where $r$ is the residual of $\\tilde{x}$)."},
    {"q":"What is the primary benefit of the iterative refinement method for ill-conditioned matrices?","a":"It provides a good approximation of the solution in just a few steps."},
    {"q":"How does $\\|\\tilde{r}\\|$ typically compare to $\\|r\\|$ in the iterative refinement process?","a":"$\\|\\tilde{r}\\|$ is much smaller than $\\|r\\|$ ($ \\|\\tilde{r}\\| \\ll \\|r\\| $)."},
    {"q":"What is the Hungarian term for the residual vector?","a":"Reziduális vektor."},
    {"q":"What is the Hungarian term for a well-conditioned matrix?","a":"Jól kondicionált mátrix."},
    {"q":"Which stopping criterion is considered the natural analogue to the one used for nonlinear equations in Section 2.8?","a":"Condition (iii): $\\|b - Ax^{(k)}\\| < \\varepsilon$."},
    {"q":"If $\\bar{x} = \\tilde{x} + \\tilde{y}$, substitute this into the expression for the new residual $b - A\\bar{x}$ using $r$.","a":"$b - A(\\tilde{x} + \\tilde{y}) = r - A\\tilde{y}$"},
    {"q":"In the proof of Theorem 4.18, how is the equation $A(x - \\tilde{x}) = r$ derived?","a":"By subtracting $A\\tilde{x} = b - r$ from $Ax = b$."},
    {"q":"What happens to the relative error bound if $\\text{cond}(A)$ is close to $1$?","a":"The relative error becomes directly proportional to the relative residual ($\\frac{\\|r\\|}{\\|b\\|}$)."},
    {"q":"Identify the vector $x^{(2)}$ calculated in Example 4.21 after one refinement step.","a":"$(0.9961, 1.016)^T$"},
    {"q":"What variable represents the number of digits of arithmetic precision in the condition number estimation formula?","a":"$t$"},
    {"q":"Concept: Ill-conditioned matrix","a":"Definition: A matrix where small changes in input (or small residuals) can lead to large changes in the solution (or large errors)."},
    {"q":"Process: Iterative Refinement Step 2","a":"Compute the residual vector $r = b - A\\tilde{x}$ using double precision to preserve significance."},
    {"q":"Formula: Relative error $\\frac{\\|x - \\tilde{x}\\|}{\\|x\\|}$ upper bound","a":"$\\text{cond}(A) \\frac{\\|r\\|}{\\|b\\|}$"},
    {"q":"Formula: Absolute error $\\|x - \\tilde{x}\\|$ upper bound","a":"$\\|A^{-1}\\| \\|r\\|$"},
    {"q":"In the Hungarian text, what is the synonym provided for 'rosszul kondicionált'?","a":"Gyengén meghatározott."},
    {"q":"What does the symbol $\\varepsilon$ represent in the context of stopping criteria?","a":"A small positive tolerance value used to terminate iterations."},
    {"q":"According to the transcript, if the product $\\|A\\| \\|A^{-1}\\|$ is big, what happens to the error estimate?","a":"The estimate will not guarantee that the error is small, even if the residual is small."},
    {"q":"In Example 4.19, what is the specific value of $\\text{cond}_\\infty(A)$ calculated for the matrix?","a":"$1346$"},
    {"q":"Exercise 1a asks for the condition numbers of which $2 \\times 2$ matrix?","a":"$\\begin{pmatrix} 1 & 2 \\\\ 4 & -1 \\end{pmatrix}$"},
    {"q":"What is the exact solution given for the system in Exercise 3?","a":"$(1, 10)$"},
    {"q":"When solving $Ay = r$ in practice, what is done with the row changes from the initial Gaussian elimination?","a":"They are stored and applied to the vector $r$ to maintain consistency with the factored matrix."},
    {"q":"What is the infinity norm of the residual vector $\\mathbf{r} = (0, 0.03)^T$ from Example 4.17?","a":"$0.03$"},
    {"q":"Which stopping criterion uses the norm of the difference between $x^{(k+1)}$ and $x^{(k)}$ divided by the norm of $x^{(k+1)}$?","a":"The numerical relative error criterion (ii)."}
  ],
}
