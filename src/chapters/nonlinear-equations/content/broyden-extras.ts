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
  {"q":{"en":"What is the general iterative formula for Quasi-Newton methods?","hu":"Mi a kvázi-Newton módszerek általános iterációs képlete?"},"a":{"en":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{f}(\\mathbf{p}^{(k)})$","hu":"$\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} - (\\mathbf{A}^{(k)})^{-1} \\mathbf{f}(\\mathbf{p}^{(k)})$"}},
  {"q":{"en":"In Quasi-Newton methods, what does the matrix $\\mathbf{A}^{(k)}$ approximate?","hu":"A kvázi-Newton módszerekben mit közelít az $\\mathbf{A}^{(k)}$ mátrix?"},"a":{"en":"The Jacobian matrix $\\mathbf{f}'(\\mathbf{p}^{(k)})$","hu":"Az $\\mathbf{f}'(\\mathbf{p}^{(k)})$ Jacobi-mátrixot"}},
  {"q":{"en":"What is a major disadvantage of the standard Newton's method compared to Quasi-Newton methods regarding the Jacobian?","hu":"Mi a standard Newton-módszer egyik fő hátránya a kvázi-Newton módszerekhez képest a Jacobi-mátrix tekintetében?"},"a":{"en":"Evaluating the exact Jacobian matrix can be computationally expensive or difficult to formulate.","hu":"A pontos Jacobi-mátrix kiértékelése számításigényes vagy nehezen felírható lehet."}},
  {"q":{"en":"Numerical Jacobian approximation: How is the component $a_{ij}^{(k)}$ calculated using a step size $h$?","hu":"Numerikus Jacobi-közelítés: hogyan számoljuk az $a_{ij}^{(k)}$ komponenst egy $h$ lépésközzel?"},"a":{"en":"$a_{ij}^{(k)} = \\frac{f_i(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) - f_i(\\mathbf{p}^{(k)})}{h}$","hu":"$a_{ij}^{(k)} = \\frac{f_i(\\mathbf{p}^{(k)} + h\\mathbf{e}^{(j)}) - f_i(\\mathbf{p}^{(k)})}{h}$"}},
  {"q":{"en":"In the numerical approximation of the Jacobian, what does $\\mathbf{e}^{(j)}$ represent?","hu":"A Jacobi-mátrix numerikus közelítésében mit jelöl $\\mathbf{e}^{(j)}$?"},"a":{"en":"The $j$-th standard unit vector.","hu":"A $j$-edik standard egységvektort."}},
  {"q":{"en":"What is a numerical risk of using a very small $h$ when approximating the Jacobian derivative?","hu":"Mi a numerikus kockázata egy nagyon kis $h$ használatának a Jacobi-derivált közelítésekor?"},"a":{"en":"Significant rounding errors and instability from subtracting nearly identical function values.","hu":"Jelentős kerekítési hibák és instabilitás közel azonos függvényértékek kivonásából."}},
  {"q":{"en":"Broyden's method is considered a multi-variable generalization of which scalar root-finding method?","hu":"A Broyden-módszer melyik skaláris gyökkereső módszer többváltozós általánosításának tekinthető?"},"a":{"en":"The Secant method.","hu":"A szelőmódszernek."}},
  {"q":{"en":"What is the 'Secant Equation' that $\\mathbf{A}^{(k+1)}$ must satisfy in Broyden's method?","hu":"Mi az a „szelőegyenlet”, amelyet $\\mathbf{A}^{(k+1)}$-nek teljesítenie kell a Broyden-módszerben?"},"a":{"en":"$\\mathbf{A}^{(k+1)}(\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}) = \\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$","hu":"$\\mathbf{A}^{(k+1)}(\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}) = \\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$"}},
  {"q":{"en":"In the notation of Broyden's method, what does $\\mathbf{s}^{(k)}$ represent?","hu":"A Broyden-módszer jelölésében mit jelöl $\\mathbf{s}^{(k)}$?"},"a":{"en":"$\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$","hu":"$\\mathbf{p}^{(k+1)} - \\mathbf{p}^{(k)}$"}},
  {"q":{"en":"In the notation of Broyden's method, what does $\\mathbf{y}^{(k)}$ represent?","hu":"A Broyden-módszer jelölésében mit jelöl $\\mathbf{y}^{(k)}$?"},"a":{"en":"$\\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$","hu":"$\\mathbf{f}(\\mathbf{p}^{(k+1)}) - \\mathbf{f}(\\mathbf{p}^{(k)})$"}},
  {"q":{"en":"The Secant Equation in simplified notation: $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\dots$","hu":"A szelőegyenlet egyszerűsített jelöléssel: $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\dots$"},"a":{"en":"$\\mathbf{y}^{(k)}$","hu":"$\\mathbf{y}^{(k)}$"}},
  {"q":{"en":"Why does the Secant Equation $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ not uniquely determine $\\mathbf{A}^{(k+1)}$ in $n$-dimensional space?","hu":"Miért nem határozza meg egyértelműen a $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ szelőegyenlet a $\\mathbf{A}^{(k+1)}$-et $n$-dimenziós térben?"},"a":{"en":"It provides only $n$ scalar constraints for $n^2$ unknown matrix components.","hu":"Csak $n$ skaláris megszorítást ad $n^2$ ismeretlen mátrixkomponensre."}},
  {"q":{"en":"What is the 'minimal change' condition Broyden's method imposes on vectors $\\mathbf{z}$ perpendicular to $\\mathbf{s}^{(k)}$?","hu":"Milyen „minimális változás” feltételt szab a Broyden-módszer az $\\mathbf{s}^{(k)}$-re merőleges $\\mathbf{z}$ vektorokra?"},"a":{"en":"$\\mathbf{A}^{(k+1)} \\mathbf{z} = \\mathbf{A}^{(k)} \\mathbf{z}$","hu":"$\\mathbf{A}^{(k+1)} \\mathbf{z} = \\mathbf{A}^{(k)} \\mathbf{z}$"}},
  {"q":{"en":"The Broyden update for the matrix $\\mathbf{A}^{(k+1)}$ is: $\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\dots$","hu":"A $\\mathbf{A}^{(k+1)}$ mátrix Broyden-frissítése: $\\mathbf{A}^{(k+1)} = \\mathbf{A}^{(k)} + \\dots$"},"a":{"en":"$\\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)} \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$","hu":"$\\frac{(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)} \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T}{\\|\\mathbf{s}^{(k)}\\|_2^2}$"}},
  {"q":{"en":"True or False: The Broyden update is a rank-1 update to the matrix.","hu":"Igaz vagy hamis: A Broyden-frissítés a mátrix rang-1 frissítése."},"a":{"en":"True.","hu":"Igaz."}},
  {"q":{"en":"When calculating $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)}$ using the Broyden formula, what term results from the product $(\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}$ in the numerator?","hu":"A $\\mathbf{A}^{(k+1)} \\mathbf{s}^{(k)}$ Broyden-képlettel való kiszámításakor milyen tag adódik a számlálóban a $(\\mathbf{s}^{(k)})^T \\mathbf{s}^{(k)}$ szorzatból?"},"a":{"en":"The squared $L_2$ norm, $\\|\\mathbf{s}^{(k)}\\|_2^2$.","hu":"A négyzetes $L_2$ norma, $\\|\\mathbf{s}^{(k)}\\|_2^2$."}},
  {"q":{"en":"List one possible strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","hu":"Sorolj fel egy lehetséges stratégiát a $\\mathbf{A}^{(0)}$ kezdőmátrix választására a Broyden-módszerben."},"a":{"en":"Use the exact Jacobian $\\mathbf{f}'(\\mathbf{p}^{(0)})$.","hu":"Használd a pontos $\\mathbf{f}'(\\mathbf{p}^{(0)})$ Jacobi-mátrixot."}},
  {"q":{"en":"List a second possible strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","hu":"Sorolj fel egy második lehetséges stratégiát a $\\mathbf{A}^{(0)}$ kezdőmátrix választására."},"a":{"en":"Approximate the Jacobian at $\\mathbf{p}^{(0)}$ using finite differences.","hu":"Közelítsd a Jacobi-mátrixot $\\mathbf{p}^{(0)}$-ban véges differenciákkal."}},
  {"q":{"en":"List a third (simple) strategy for choosing the initial matrix $\\mathbf{A}^{(0)}$ in Broyden's method.","hu":"Sorolj fel egy harmadik (egyszerű) stratégiát a $\\mathbf{A}^{(0)}$ kezdőmátrix választására."},"a":{"en":"Select any arbitrary invertible matrix (e.g., the Identity matrix $\\mathbf{I}$).","hu":"Válassz bármely tetszőleges invertálható mátrixot (pl. az $\\mathbf{I}$ egységmátrixot)."}},
  {"q":{"en":"Which theorem provides a formula to update the inverse of a matrix after a rank-1 modification?","hu":"Melyik tétel ad képletet egy mátrix inverzének frissítésére rang-1 módosítás után?"},"a":{"en":"The Sherman-Morrison-Woodbury Theorem.","hu":"A Sherman–Morrison–Woodbury-tétel."}},
  {"q":{"en":"According to the Sherman-Morrison-Woodbury theorem, $\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T$ is invertible if and only if which scalar condition is met?","hu":"A Sherman–Morrison–Woodbury-tétel szerint $\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T$ akkor és csak akkor invertálható, ha milyen skaláris feltétel teljesül?"},"a":{"en":"$1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u} \\neq 0$","hu":"$1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u} \\neq 0$"}},
  {"q":{"en":"Formula: Write the Sherman-Morrison-Woodbury identity for $(\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T)^{-1}$.","hu":"Képlet: Írd fel a Sherman–Morrison–Woodbury-azonosságot $(\\mathbf{A} + \\mathbf{u}\\mathbf{v}^T)^{-1}$-re."},"a":{"en":"$\\mathbf{A}^{-1} - \\frac{\\mathbf{A}^{-1} \\mathbf{u} \\mathbf{v}^T \\mathbf{A}^{-1}}{1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u}}$","hu":"$\\mathbf{A}^{-1} - \\frac{\\mathbf{A}^{-1} \\mathbf{u} \\mathbf{v}^T \\mathbf{A}^{-1}}{1 + \\mathbf{v}^T \\mathbf{A}^{-1} \\mathbf{u}}$"}},
  {"q":{"en":"Broyden's Inverse Update Formula: $(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} - \\dots$","hu":"Broyden inverz frissítési képlete: $(\\mathbf{A}^{(k+1)})^{-1} = (\\mathbf{A}^{(k)})^{-1} - \\dots$"},"a":{"en":"$\\frac{((\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)} - \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$","hu":"$\\frac{((\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)} - \\mathbf{s}^{(k)}) (\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1}}{(\\mathbf{s}^{(k)})^T (\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}}$"}},
  {"q":{"en":"What is the order of magnitude of arithmetic operations required to update $(\\mathbf{A}^{(k+1)})^{-1}$ in Broyden's method?","hu":"Mi a $(\\mathbf{A}^{(k+1)})^{-1}$ frissítéséhez szükséges aritmetikai műveletek nagyságrendje a Broyden-módszerben?"},"a":{"en":"$n^2$","hu":"$n^2$"}},
  {"q":{"en":"What is the standard order of magnitude of arithmetic operations required for direct matrix inversion?","hu":"Mi a közvetlen mátrixinvertálás aritmetikai műveleteinek szokásos nagyságrendje?"},"a":{"en":"$n^3$","hu":"$n^3$"}},
  {"q":{"en":"Why is the Broyden inverse update considered computationally efficient?","hu":"Miért tekinthető a Broyden inverz frissítés számításilag hatékonynak?"},"a":{"en":"It reduces the complexity from $O(n^3)$ for inversion to $O(n^2)$ for matrix-vector multiplications.","hu":"Az invertálás $O(n^3)$ komplexitását $O(n^2)$ mátrix-vektor szorzásokra csökkenti."}},
  {"q":{"en":"What is the rate of convergence for Broyden's method?","hu":"Mi a Broyden-módszer konvergenciasebessége?"},"a":{"en":"Superlinear.","hu":"Szuperlineáris."}},
  {"q":{"en":"Define superlinear convergence of a sequence $\\mathbf{p}^{(k)}$ to a root $\\mathbf{p}$ as a limit.","hu":"Definiáld határértékként egy $\\mathbf{p}^{(k)}$ sorozat szuperlineáris konvergenciáját egy $\\mathbf{p}$ gyökhöz."},"a":{"en":"$\\lim_{k \\to \\infty} \\frac{\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}\\|}{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|} = 0$","hu":"$\\lim_{k \\to \\infty} \\frac{\\|\\mathbf{p}^{(k+1)} - \\mathbf{p}\\|}{\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|} = 0$"}},
  {"q":{"en":"Under what condition is Broyden's method guaranteed to converge locally to a root $\\mathbf{p}$?","hu":"Milyen feltétel mellett garantált, hogy a Broyden-módszer lokálisan konvergál egy $\\mathbf{p}$ gyökhöz?"},"a":{"en":"If $\\mathbf{p}^{(0)}$ and $\\mathbf{A}^{(0)}$ are sufficiently close to $\\mathbf{p}$ and $\\mathbf{f}'(\\mathbf{p})$, respectively.","hu":"Ha $\\mathbf{p}^{(0)}$ és $\\mathbf{A}^{(0)}$ elég közel van $\\mathbf{p}$-hez, illetve $\\mathbf{f}'(\\mathbf{p})$-hez."}},
  {"q":{"en":"How does the number of iterations in Broyden's method typically compare to Newton's method for the same problem?","hu":"Hogyan viszonyul a Broyden-módszer iterációszáma jellemzően a Newton-módszeréhez ugyanazon a feladaton?"},"a":{"en":"Broyden's method usually requires more iterations than Newton's method because its convergence is superlinear rather than quadratic.","hu":"A Broyden-módszer általában több iterációt igényel a Newtonnál, mert konvergenciája szuperlineáris, nem kvadratikus."}},
  {"q":{"en":"In the example provided ($TOL = 10^{-5}$), how many steps did the Broyden method take to reach the solution?","hu":"A megadott példában ($TOL = 10^{-5}$) hány lépésben érte el a Broyden-módszer a megoldást?"},"a":{"en":"10 iterations.","hu":"10 iteráció."}},
  {"q":{"en":"Concept: Direct Inverse Broyden Update","hu":"Fogalom: Közvetlen inverz Broyden-frissítés"},"a":{"en":"Definition: A method to calculate $(\\mathbf{A}^{(k+1)})^{-1}$ directly from $(\\mathbf{A}^{(k)})^{-1}$ using only $O(n^2)$ operations, bypassing the need to solve a full linear system.","hu":"Definíció: Módszer a $(\\mathbf{A}^{(k+1)})^{-1}$ közvetlen kiszámítására a $(\\mathbf{A}^{(k)})^{-1}$-ből, csak $O(n^2)$ művelettel, megkerülve egy teljes lineáris rendszer megoldását."}},
  {"q":{"en":"True or False: The Broyden update matrix term $(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T$ results in a scalar.","hu":"Igaz vagy hamis: A Broyden-frissítés $(\\mathbf{y}^{(k)} - \\mathbf{A}^{(k)}\\mathbf{s}^{(k)})(\\mathbf{s}^{(k)})^T$ mátrixtagja skalárt ad."},"a":{"en":"False; it is an outer product resulting in an $n \\times n$ matrix.","hu":"Hamis; ez egy diadikus szorzat, amely $n \\times n$ mátrixot ad."}},
  {"q":{"en":"What is the primary motivation for using Quasi-Newton methods over the fixed-point iteration technique?","hu":"Mi a fő motiváció a kvázi-Newton módszerek használatára a fixpont-iterációs technikával szemben?"},"a":{"en":"Quasi-Newton methods converge faster (superlinear) than simple linear fixed-point iterations.","hu":"A kvázi-Newton módszerek gyorsabban konvergálnak (szuperlineárisan), mint az egyszerű lineáris fixpont-iterációk."}},
  {"q":{"en":"Process: If you already have $(\\mathbf{A}^{(k)})^{-1}$, what is the first vector calculation needed for the Broyden inverse update numerator?","hu":"Eljárás: Ha már megvan $(\\mathbf{A}^{(k)})^{-1}$, mi az első szükséges vektorszámítás a Broyden inverz frissítés számlálójához?"},"a":{"en":"The product $(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}$.","hu":"A $(\\mathbf{A}^{(k)})^{-1} \\mathbf{y}^{(k)}$ szorzat."}},
  {"q":{"en":"In the proof of the Sherman-Morrison-Woodbury theorem, what is the role of the scalar $\\gamma$?","hu":"A Sherman–Morrison–Woodbury-tétel bizonyításában mi a $\\gamma$ skalár szerepe?"},"a":{"en":"It is a scaling factor used to determine the exact form of the inverse update such that the product with the original matrix equals identity.","hu":"Skálázási tényező, amely az inverz frissítés pontos alakját határozza meg úgy, hogy az eredeti mátrixszal vett szorzat az egységmátrix legyen."}},
  {"q":{"en":"The scalar product $(\\mathbf{s}^{(k)})^T \\mathbf{z} = 0$ implies that vectors $\\mathbf{s}^{(k)}$ and $\\mathbf{z}$ are _____.","hu":"A $(\\mathbf{s}^{(k)})^T \\mathbf{z} = 0$ skalárszorzat azt jelenti, hogy a $\\mathbf{s}^{(k)}$ és $\\mathbf{z}$ vektorok _____."},"a":{"en":"Perpendicular (orthogonal).","hu":"Merőlegesek (ortogonálisak)."}},
  {"q":{"en":"In the iterative formula $\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -\\mathbf{f}(\\mathbf{p}^{(k)})$, solving for $\\mathbf{s}^{(k)}$ allows for the definition of which vector?","hu":"Az $\\mathbf{A}^{(k)} \\mathbf{s}^{(k)} = -\\mathbf{f}(\\mathbf{p}^{(k)})$ iterációs képletben $\\mathbf{s}^{(k)}$ megoldása melyik vektor definícióját teszi lehetővé?"},"a":{"en":"The next iterate, $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\mathbf{s}^{(k)}$.","hu":"A következő közelítését, $\\mathbf{p}^{(k+1)} = \\mathbf{p}^{(k)} + \\mathbf{s}^{(k)}$."}},
  {"q":{"en":"Why is it important that $\\mathbf{A}^{(0)}$ is invertible in Broyden's method?","hu":"Miért fontos, hogy $\\mathbf{A}^{(0)}$ invertálható legyen a Broyden-módszerben?"},"a":{"en":"Because the iteration requires the computation of $(\\mathbf{A}^{(k)})^{-1}$ or solving a linear system with $\\mathbf{A}^{(k)}$.","hu":"Mert az iteráció a $(\\mathbf{A}^{(k)})^{-1}$ kiszámítását vagy egy $\\mathbf{A}^{(k)}$-val való lineáris rendszer megoldását igényli."}},
  {"q":{"en":"If the Broyden method is 'locally' convergent, what does this imply about the starting point $\\mathbf{p}^{(0)}$?","hu":"Ha a Broyden-módszer „lokálisan” konvergens, mit jelent ez a $\\mathbf{p}^{(0)}$ kezdőpontra nézve?"},"a":{"en":"It must be chosen sufficiently close to the actual root for the method to be guaranteed to find it.","hu":"Elég közel kell választani a tényleges gyökhöz, hogy a módszer garantáltan megtalálja."}},
  {"q":{"en":"The Broyden update formula ensures that $\\mathbf{A}^{(k+1)}$ satisfies the Secant Equation by modifying $\\mathbf{A}^{(k)}$ along which direction?","hu":"A Broyden-frissítési képlet melyik irány mentén módosítja $\\mathbf{A}^{(k)}$-t, hogy $\\mathbf{A}^{(k+1)}$ teljesítse a szelőegyenletet?"},"a":{"en":"The direction of $\\mathbf{s}^{(k)}$ (via the outer product $(\\cdot)(\\mathbf{s}^{(k)})^T$).","hu":"Az $\\mathbf{s}^{(k)}$ iránya mentén (a $(\\cdot)(\\mathbf{s}^{(k)})^T$ diadikus szorzaton keresztül)."}},
  {"q":{"en":"How is the norm $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_\\infty$ typically used in numerical examples of Broyden's method?","hu":"Hogyan használjuk jellemzően a $\\|\\mathbf{p}^{(k)} - \\mathbf{p}\\|_\\infty$ normát a Broyden-módszer numerikus példáiban?"},"a":{"en":"To measure the error and demonstrate the convergence rate of the iterates toward the root.","hu":"A hiba mérésére és a közelítések gyök felé tartó konvergenciasebességének bemutatására."}},
  {"q":{"en":"What property of matrix multiplication is used to simplify the verification of the Broyden formula $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$?","hu":"A mátrixszorzás melyik tulajdonságát használjuk a Broyden-képlet $\\mathbf{A}^{(k+1)}\\mathbf{s}^{(k)} = \\mathbf{y}^{(k)}$ ellenőrzésének egyszerűsítésére?"},"a":{"en":"Associativity (grouping the scalar inner product $(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}$ separately).","hu":"Az asszociativitást (a $(\\mathbf{s}^{(k)})^T\\mathbf{s}^{(k)}$ skaláris belső szorzat külön csoportosítása)."}},
  {"q":{"en":"In the scalar case ($n=1$), the Broyden update formula collapses to the formula for the _____.","hu":"A skaláris esetben ($n=1$) a Broyden-frissítési képlet a _____ képletére egyszerűsödik."},"a":{"en":"Slope of the secant line ($a_{k+1} = \\frac{f(p_{k+1}) - f(p_k)}{p_{k+1} - p_k}$).","hu":"A szelő meredekségére ($a_{k+1} = \\frac{f(p_{k+1}) - f(p_k)}{p_{k+1} - p_k}$)."}},
  {"q":{"en":"The phrase 'no new information' in the derivation of Broyden's method refers to the lack of updates in which directions?","hu":"A „nincs új információ” kifejezés a Broyden-módszer levezetésében mely irányokban hiányzó frissítésre utal?"},"a":{"en":"Directions orthogonal to the step $\\mathbf{s}^{(k)}$.","hu":"A $\\mathbf{s}^{(k)}$ lépésre merőleges irányokban."}}
]
