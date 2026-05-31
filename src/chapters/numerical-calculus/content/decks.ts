// Auto-generated learning aids for chapter 7. Glossaries bilingual; flashcards EN. Keyed by lesson slug.
export interface GlossaryEntry { term: { en: string; hu: string }; def: { en: string; hu: string } }
export interface Flashcard { q: string; a: string }

export const GLOSSARIES: Record<string, GlossaryEntry[]> = {
  "7_1": [
    {
      "term": {
        "en": "Numerical differentiation",
        "hu": "Numerikus differenciálás"
      },
      "def": {
        "en": "Approximating $f'(x_0)$ (or higher derivatives) from a few function values, using difference quotients derived from the limit definition — together with a bound on the truncation error.",
        "hu": "Az $f'(x_0)$ (vagy magasabb deriváltak) közelítése néhány függvényértékből, a határérték-definícióból származó differenciahányadosokkal — a csonkítási hiba korlátjával együtt."
      }
    },
    {
      "term": {
        "en": "Two derivation methods",
        "hu": "Két levezetési módszer"
      },
      "def": {
        "en": "**Lagrange's method**: differentiate the interpolating polynomial $L_n$ and use $L_n'(x_0)$. **Taylor's method**: expand $f$ around $x_0$ and combine the expansions to cancel unwanted terms. Both give the same formulas with explicit error terms.",
        "hu": "**Lagrange-módszer**: deriváld az $L_n$ interpolációs polinomot, és használd $L_n'(x_0)$-t. **Taylor-módszer**: fejtsd $f$-et $x_0$ körül, és kombináld a sorfejtéseket a nem kívánt tagok kioltására. Mindkettő ugyanazokat a képleteket adja, explicit hibataggal."
      }
    },
    {
      "term": {
        "en": "Forward/backward difference $O(h)$",
        "hu": "Előre/hátra differencia $O(h)$"
      },
      "def": {
        "en": "$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$ with error $-\\tfrac{h}{2}f''(\\xi)$ — first-order accurate. Backward difference uses $f(x_0)-f(x_0-h)$.",
        "hu": "$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0)}{h}$, hibája $-\\tfrac{h}{2}f''(\\xi)$ — elsőrendben pontos. A hátra differencia $f(x_0)-f(x_0-h)$-t használ."
      }
    },
    {
      "term": {
        "en": "Central difference $O(h^2)$",
        "hu": "Centrális differencia $O(h^2)$"
      },
      "def": {
        "en": "$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$ with error $-\\tfrac{h^2}{6}f'''(\\xi)$ — second-order accurate, the symmetric terms cancel. More accurate than the one-sided formula for the same $h$.",
        "hu": "$f'(x_0)\\approx\\dfrac{f(x_0+h)-f(x_0-h)}{2h}$, hibája $-\\tfrac{h^2}{6}f'''(\\xi)$ — másodrendben pontos, a szimmetrikus tagok kioltják egymást. Pontosabb az egyoldali képletnél azonos $h$ mellett."
      }
    },
    {
      "term": {
        "en": "Second-derivative formula",
        "hu": "Második derivált képlet"
      },
      "def": {
        "en": "$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$ with error $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — the standard $O(h^2)$ three-point stencil.",
        "hu": "$f''(x_0)\\approx\\dfrac{f(x_0+h)-2f(x_0)+f(x_0-h)}{h^2}$, hibája $-\\tfrac{h^2}{12}f^{(4)}(\\xi)$ — a szokásos $O(h^2)$ hárompontos sablon."
      }
    },
    {
      "term": {
        "en": "Truncation vs round-off (optimal $h$)",
        "hu": "Csonkítás vs kerekítés (optimális $h$)"
      },
      "def": {
        "en": "Shrinking $h$ reduces the truncation error ($\\propto h^p$) but inflates the round-off error ($\\propto \\varepsilon/h$). There is an optimal $h$ balancing the two; going smaller makes the result worse, not better.",
        "hu": "$h$ csökkentése mérsékli a csonkítási hibát ($\\propto h^p$), de felnagyítja a kerekítési hibát ($\\propto \\varepsilon/h$). Van egy optimális $h$, amely kiegyensúlyozza a kettőt; ennél kisebb $h$ rontja, nem javítja az eredményt."
      }
    },
    {
      "term": {
        "en": "Higher-order (multi-point) formulas",
        "hu": "Magasabb rendű (többpontos) képletek"
      },
      "def": {
        "en": "Using more mesh points (e.g. the five-point stencil) raises the order of accuracy, at the cost of more function evaluations and more sensitivity to round-off. Derived the same way from $L_n$ or Taylor.",
        "hu": "Több alappont (pl. az ötpontos sablon) növeli a pontossági rendet, több függvénykiértékelés és nagyobb kerekítés-érzékenység árán. Ugyanúgy vezethető le $L_n$-ből vagy Taylorral."
      }
    }
  ],
  "7_2": [
    {
      "term": {
        "en": "Richardson extrapolation",
        "hu": "Richardson-extrapoláció"
      },
      "def": {
        "en": "A way to boost the order of an approximation $K(h)\\to K$ by combining values at two step sizes so the leading error term cancels — turning an $O(h^p)$ formula into $O(h^{p+q})$.",
        "hu": "Egy közelítés $K(h)\\to K$ rendjének növelése két lépésközhöz tartozó érték kombinálásával úgy, hogy a vezető hibatag kiessen — egy $O(h^p)$ képletből $O(h^{p+q})$-t csinál."
      }
    },
    {
      "term": {
        "en": "Cancelling the leading error",
        "hu": "A vezető hiba kioltása"
      },
      "def": {
        "en": "If $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, then $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ eliminates the $h^p$ term, leaving a higher-order approximation.",
        "hu": "Ha $K(h)=K+a_p h^p+a_{p+q}h^{p+q}+\\cdots$, akkor $\\dfrac{2^p K(h/2)-K(h)}{2^p-1}$ kiküszöböli az $h^p$ tagot, magasabb rendű közelítést hagyva."
      }
    },
    {
      "term": {
        "en": "Repeated extrapolation",
        "hu": "Ismételt extrapoláció"
      },
      "def": {
        "en": "Apply the cancellation recursively, $K^{(j)}(h)$ from $K^{(j-1)}(h)$ and $K^{(j-1)}(h/2)$, removing successive error terms — each level gains accuracy. Builds a triangular table like Romberg integration.",
        "hu": "Alkalmazd a kioltást rekurzívan, $K^{(j)}(h)$-t $K^{(j-1)}(h)$-ból és $K^{(j-1)}(h/2)$-ből, sorra eltávolítva a hibatagokat — minden szint pontosabb. A Romberg-integráláshoz hasonló háromszög táblát épít."
      }
    },
    {
      "term": {
        "en": "Even-power error (central difference)",
        "hu": "Páros hatványú hiba (centrális differencia)"
      },
      "def": {
        "en": "The central difference error expands in *even* powers $h^2,h^4,\\dots$, so each extrapolation step jumps the order by 2: $O(h^2)\\to O(h^4)\\to O(h^6)$ (Example 7.6).",
        "hu": "A centrális differencia hibája *páros* hatványokban $h^2,h^4,\\dots$ fejlik ki, így minden extrapolációs lépés 2-vel ugrik: $O(h^2)\\to O(h^4)\\to O(h^6)$ (7.6. példa)."
      }
    },
    {
      "term": {
        "en": "General-power variant",
        "hu": "Általános hatványú változat"
      },
      "def": {
        "en": "When the error contains all powers of $h$ (or general exponents), the same idea works with the appropriate factor $2^{p_j}$ at each step — the method is not limited to even powers.",
        "hu": "Ha a hiba minden $h$-hatványt (vagy általános kitevőket) tartalmaz, ugyanaz az ötlet működik a megfelelő $2^{p_j}$ tényezővel lépésenként — a módszer nem korlátozódik páros hatványokra."
      }
    },
    {
      "term": {
        "en": "Why it works cheaply",
        "hu": "Miért olcsó"
      },
      "def": {
        "en": "Extrapolation reuses already-computed values $K(h),K(h/2),\\dots$ with simple linear combinations — no new function evaluations beyond the halved-step ones — to get high-order accuracy.",
        "hu": "Az extrapoláció a már kiszámolt $K(h),K(h/2),\\dots$ értékeket használja újra egyszerű lineáris kombinációkkal — a felezett lépésközűeken kívül nincs új függvénykiértékelés — magas rendű pontosságért."
      }
    }
  ],
  "7_3": [
    {
      "term": {
        "en": "Newton–Cotes formulas",
        "hu": "Newton–Cotes-formulák"
      },
      "def": {
        "en": "Quadrature rules obtained by integrating the Lagrange interpolant on equidistant nodes: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. The trapezoidal ($n=1$) and Simpson ($n=2$) rules are the first cases.",
        "hu": "Kvadratúraképletek, amelyeket az egyenközű alappontokon vett Lagrange-interpoláns integrálásával kapunk: $\\int_a^b f\\approx\\int_a^b L_n=\\sum_i c_i f(x_i)$. A trapéz ($n=1$) és a Simpson ($n=2$) szabály az első esetek."
      }
    },
    {
      "term": {
        "en": "Degree of precision",
        "hu": "Pontossági fok"
      },
      "def": {
        "en": "The largest $n$ for which a quadrature is exact on all polynomials of degree $\\le n$ (but not $n+1$). The $(n+1)$-point Newton–Cotes rule has degree $\\ge n$; for **even** $n$ it gains one extra (degree $n+1$).",
        "hu": "A legnagyobb $n$, amelyre a kvadratúra minden legfeljebb $n$-edfokú polinomra pontos (de $n+1$-re nem). Az $(n+1)$-pontos Newton–Cotes szabály foka $\\ge n$; **páros** $n$-re egy extra fokot nyer (foka $n+1$)."
      }
    },
    {
      "term": {
        "en": "Trapezoidal rule",
        "hu": "Trapézszabály"
      },
      "def": {
        "en": "$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$ with error $-\\tfrac{h^3}{12}f''(\\eta)$ — exact for linear functions (degree of precision 1).",
        "hu": "$\\int_{x_0}^{x_1}f\\approx\\tfrac{h}{2}(f(x_0)+f(x_1))$, hibája $-\\tfrac{h^3}{12}f''(\\eta)$ — lineáris függvényekre pontos (pontossági fok 1)."
      }
    },
    {
      "term": {
        "en": "Composite trapezoidal rule",
        "hu": "Összetett trapézszabály"
      },
      "def": {
        "en": "Apply the trapezoidal rule on $n$ equal subintervals: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$ with total error $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$.",
        "hu": "A trapézszabály $n$ egyenlő részintervallumon: $\\tfrac{h}{2}\\big(f_0+2f_1+\\cdots+2f_{n-1}+f_n\\big)$, teljes hibája $-\\tfrac{(b-a)h^2}{12}f''(\\xi)$ — $O(h^2)$."
      }
    },
    {
      "term": {
        "en": "Simpson's rule",
        "hu": "Simpson-szabály"
      },
      "def": {
        "en": "$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$ with error $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — exact for cubics (degree of precision 3) despite using only 3 points. The composite form splits $[a,b]$ into $2n$ parts.",
        "hu": "$\\int_{x_0}^{x_2}f\\approx\\tfrac{h}{3}(f_0+4f_1+f_2)$, hibája $-\\tfrac{h^5}{90}f^{(4)}(\\xi)$ — köbös polinomokra pontos (pontossági fok 3), pedig csak 3 pontot használ. Az összetett alak $[a,b]$-t $2n$ részre osztja."
      }
    },
    {
      "term": {
        "en": "Simpson's 3/8 rule",
        "hu": "Simpson-féle 3/8 szabály"
      },
      "def": {
        "en": "The 4-point ($n=3$) Newton–Cotes rule $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, also degree of precision 3. Useful when the subinterval count is not even.",
        "hu": "A 4-pontos ($n=3$) Newton–Cotes szabály $\\tfrac{3h}{8}(f_0+3f_1+3f_2+f_3)$, szintén 3-as pontossági fokú. Akkor hasznos, ha a részintervallumok száma nem páros."
      }
    },
    {
      "term": {
        "en": "Stability of quadrature (Thm 7.9)",
        "hu": "Kvadratúra stabilitása (7.9. tétel)"
      },
      "def": {
        "en": "If a quadrature is exact for constants and all weights $c_i>0$, then data errors $|y_i-f(x_i)|\\le\\varepsilon$ produce an output error $\\le(b-a)\\varepsilon$ — bounded, so the rule is stable. Negative weights (high-$n$ Newton–Cotes) lose this.",
        "hu": "Ha egy kvadratúra konstansokra pontos és minden súly $c_i>0$, akkor a $|y_i-f(x_i)|\\le\\varepsilon$ adathibák $\\le(b-a)\\varepsilon$ kimeneti hibát adnak — korlátos, tehát a szabály stabil. A negatív súlyok (magas $n$-ű Newton–Cotes) ezt elrontják."
      }
    }
  ],
  "7_4": [
    {
      "term": {
        "en": "Gaussian quadrature",
        "hu": "Gauss-féle kvadratúra"
      },
      "def": {
        "en": "$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$ where **both** the weights $c_i$ and the nodes $x_i$ are chosen optimally — unlike Newton–Cotes, which fixes equidistant nodes.",
        "hu": "$\\int_a^b f\\approx\\sum_{i=1}^n c_i f(x_i)$, ahol **mind** a $c_i$ súlyokat, **mind** az $x_i$ alappontokat optimálisan választjuk — szemben a Newton–Cotes-szal, amely rögzíti az egyenközű alappontokat."
      }
    },
    {
      "term": {
        "en": "Maximal degree of precision $2n-1$ (Thm 7.10)",
        "hu": "Maximális pontossági fok $2n-1$ (7.10. tétel)"
      },
      "def": {
        "en": "With $2n$ free parameters ($n$ nodes + $n$ weights), an $n$-point formula can be (and is) exact for all polynomials of degree $\\le 2n-1$ — roughly double the precision of an $n$-point Newton–Cotes rule.",
        "hu": "$2n$ szabad paraméterrel ($n$ alappont + $n$ súly) egy $n$-pontos képlet minden legfeljebb $2n-1$-edfokú polinomra pontos lehet (és az is) — nagyjából kétszer akkora pontosság, mint az $n$-pontos Newton–Cotes."
      }
    },
    {
      "term": {
        "en": "Orthogonal polynomials",
        "hu": "Ortogonális polinomok"
      },
      "def": {
        "en": "$f,g$ are orthogonal on $[a,b]$ if $\\int_a^b fg=0$. Gram–Schmidt on $1,x,x^2,\\dots$ builds a sequence $P_i$ of degree-$i$ pairwise-orthogonal polynomials — on $[-1,1]$ these are the Legendre polynomials.",
        "hu": "$f,g$ ortogonális $[a,b]$-n, ha $\\int_a^b fg=0$. Az $1,x,x^2,\\dots$-ra alkalmazott Gram–Schmidt egy $i$-edfokú, páronként ortogonális $P_i$ sorozatot épít — $[-1,1]$-en ezek a Legendre-polinomok."
      }
    },
    {
      "term": {
        "en": "Legendre polynomials (Thm 7.12)",
        "hu": "Legendre-polinomok (7.12. tétel)"
      },
      "def": {
        "en": "$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, satisfying the recursion $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$. Each $P_i$ is orthogonal to every lower-degree polynomial and has $i$ distinct real roots in $(-1,1)$.",
        "hu": "$P_0=1,P_1=x,P_2=x^2-\\tfrac13,\\dots$, a $(i+1)P_{i+1}=(2i+1)xP_i-iP_{i-1}$ rekurzióval. Minden $P_i$ ortogonális minden alacsonyabb fokú polinomra, és $i$ különböző valós gyöke van $(-1,1)$-ben."
      }
    },
    {
      "term": {
        "en": "Nodes = Legendre roots (Thm 7.13)",
        "hu": "Alappontok = Legendre-gyökök (7.13. tétel)"
      },
      "def": {
        "en": "The optimal $n$ Gaussian nodes on $[-1,1]$ are exactly the roots of $P_n$; the weights $c_i=\\int_{-1}^1 l_i(x)\\,dx$ come from the Lagrange basis at those nodes. This achieves degree of precision $2n-1$.",
        "hu": "Az optimális $n$ Gauss-alappont $[-1,1]$-en pontosan $P_n$ gyökei; a $c_i=\\int_{-1}^1 l_i(x)\\,dx$ súlyok az ezekhez tartozó Lagrange-bázisból jönnek. Ez $2n-1$ pontossági fokot ér el."
      }
    },
    {
      "term": {
        "en": "Interval transformation",
        "hu": "Intervallum-transzformáció"
      },
      "def": {
        "en": "Tables give nodes/weights on $[-1,1]$; for a general $[a,b]$ substitute $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$, so $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$.",
        "hu": "A táblázatok az alappontokat/súlyokat $[-1,1]$-en adják; általános $[a,b]$-re helyettesítsünk $x=\\tfrac{b-a}{2}t+\\tfrac{a+b}{2}$-t, így $\\int_a^b f\\,dx=\\tfrac{b-a}{2}\\int_{-1}^1 f(\\dots)\\,dt$."
      }
    },
    {
      "term": {
        "en": "Error formula (Thm 7.14)",
        "hu": "Hibaformula (7.14. tétel)"
      },
      "def": {
        "en": "For $f\\in C^{2n}[-1,1]$ the $n$-point Gauss error is $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — vanishes for polynomials up to degree $2n-1$, and shrinks extremely fast with $n$ for smooth $f$.",
        "hu": "$f\\in C^{2n}[-1,1]$ esetén az $n$-pontos Gauss hibája $\\dfrac{2^{2n+1}(n!)^4}{(2n+1)((2n)!)^3}f^{(2n)}(\\xi)$ — eltűnik a $2n-1$ fokig terjedő polinomokra, és sima $f$-re rendkívül gyorsan csökken $n$-nel."
      }
    }
  ],
}

export const FLASHCARDS: Record<string, Flashcard[]> = {
  "7_1": [
    {"q":"What is the limit definition of the derivative $f'(x_0)$?","a":"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$"},
    {"q":"Under what condition is the difference quotient $\\frac{f(x_0 + h) - f(x_0)}{h}$ considered a good approximation of $f'(x_0)$?","a":"When the absolute value of the step size $|h|$ is small."},
    {"q":"In the context of numerical differentiation, what does 'Lagrange's method' involve?","a":"Approximating a function $f$ with a Lagrange polynomial $L_n(x)$ and using $L'_n(x_0)$ as the derivative estimate."},
    {"q":"What is the formula for the first-order forward difference approximation of $f'(x_0)$?","a":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h > 0$."},
    {"q":"What is the formula for the first-order backward difference approximation of $f'(x_0)$?","a":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h < 0$."},
    {"q":"The first-order difference formula is also known as the _____-point formula.","a":"two"},
    {"q":"What is the specific form of the truncation error for the first-order difference approximation of $f'(x_0)$?","a":"$-\\frac{h}{2}f''(\\xi)$ where $\\xi \\in \\langle x_0, x_0 + h \\rangle$."},
    {"q":"Using Taylor's method, what order of Taylor expansion is required to derive the first-order difference formula for $f'(x_0)$?","a":"First-order Taylor expansion."},
    {"q":"How does the error of a first-order difference formula change if the step size $h$ decreases by one order of magnitude?","a":"The error also decreases by one order of magnitude."},
    {"q":"What general formula is used to derive an $(n+1)$-point difference formula using Lagrange basis polynomials $l_j(x)$?","a":"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$"},
    {"q":"For an $(n+1)$-point difference formula with equidistant points, what is the order of the error term in terms of $h$?","a":"$n$th-order ($O(h^n)$)."},
    {"q":"What are the three mesh points used in the standard three-point difference formulas?","a":"$x_0$, $x_0 + h$, and $x_0 + 2h$."},
    {"q":"What is the three-point endpoint formula for $f'(x_0)$?","a":"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$"},
    {"q":"What is the order of the truncation error for the three-point endpoint formula?","a":"Second-order ($O(h^2)$)."},
    {"q":"The three-point midpoint formula is also commonly called the second-order _____ difference formula.","a":"central"},
    {"q":"What is the formula for the three-point midpoint (central difference) approximation of $f'(x_0)$?","a":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$"},
    {"q":"What is the truncation error term for the second-order central difference formula?","a":"$-\\frac{h^2}{6}f'''(\\xi)$"},
    {"q":"Between a one-sided second-order formula and a central second-order formula, which generally yields a smaller error for the same $h$?","a":"The central difference formula."},
    {"q":"Which formula uses the points $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ to approximate $f'(x_0)$?","a":"The five-point central difference (fourth-order) formula."},
    {"q":"What is the order of accuracy for the five-point central difference formula (7.11)?","a":"Fourth-order ($O(h^4)$)."},
    {"q":"What is the truncation error term for the fourth-order central difference formula?","a":"$\\frac{h^4}{30}f^{(5)}(\\xi)$"},
    {"q":"Which method is described as more convenient than Lagrange's method for deriving approximations of higher-order derivatives?","a":"Taylor's method."},
    {"q":"What is the standard second-order central difference formula for the second derivative $f''(x_0)$?","a":"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$"},
    {"q":"What is the truncation error associated with the central difference formula for the second derivative $f''(x_0)$?","a":"$-\\frac{h^2}{12}f^{(4)}(\\xi)$"},
    {"q":"Numerical differentiation is described as an _____ problem because small perturbations in function values can cause large errors in the derivative.","a":"unstable"},
    {"q":"In the error analysis $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$, what does the term $\\frac{e_1 - e_0}{h}$ represent?","a":"The rounding error."},
    {"q":"As the step size $h$ approaches zero, what happens to the rounding error in numerical differentiation?","a":"It tends toward infinity (or increases significantly)."},
    {"q":"How do truncation error and rounding error behave differently as step size $h$ decreases?","a":"Truncation error decreases, while rounding error increases."},
    {"q":"Why might a 4-digit arithmetic calculation show an increase in error when $h$ is reduced from 0.01 to 0.001?","a":"The increase in rounding error outweighs the decrease in truncation error."},
    {"q":"What is the numerical approximation for the partial derivative $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ using a first-order forward difference?","a":"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$"},
    {"q":"What is the central difference approximation for the second partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$?","a":"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$"},
    {"q":"What is the approximation formula for the mixed partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$?","a":"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$"},
    {"q":"The formula $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ approximates which derivative?","a":"The third derivative ($f'''(x_0)$)."},
    {"q":"The formula $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ approximates which derivative?","a":"The fourth derivative ($f^{(4)}(x_0)$)."},
    {"q":"What is the truncation error order of the first-order forward difference formula?","a":"$O(h)$"},
    {"q":"What is the truncation error order of the central difference formula for the first derivative?","a":"$O(h^2)$"},
    {"q":"If $f \\in C^2[a, b]$, what is the maximum order of the Taylor expansion useful for deriving a first-order derivative approximation?","a":"First-order Taylor expansion with a second-order error term."},
    {"q":"In formula (7.1), why is the limit $x \\to x_0$ taken?","a":"To eliminate terms containing $(x-x_0)$ and isolate the derivative $f'(x_0)$ and the error term."},
    {"q":"Term: Two-point difference formula","a":"Definition: An approximation of the first derivative using values of the function at exactly two points."},
    {"q":"Which formula is obtained by substituting $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ into the three-point endpoint formula at $x_0 + 2h$?","a":"The second-order backward difference formula."},
    {"q":"In Example 7.1, what happens to the error when $h$ is divided by 10?","a":"The error is also divided by approximately 10."},
    {"q":"What happens to the error in a second-order formula when $h$ is divided by 10?","a":"The error is divided by 100 ($10^2$)."},
    {"q":"What is the primary drawback of using very small values of $h$ in practical computer calculations?","a":"Significant increase in rounding error due to finite precision arithmetic."},
    {"q":"The five-point one-sided formula for $f'(x_0)$ involves points from $x_0$ up to $x_0 +$ _____.","a":"$4h$"},
    {"q":"In the second derivative formula $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$, the error is proportional to which derivative of $f$?","a":"The fourth derivative ($f^{(4)}$)."},
    {"q":"Formula: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$","a":"This is the first-order forward difference for the partial derivative with respect to $y$."},
    {"q":"Why is the function $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ used in the text?","a":"To demonstrate the instability of numerical differentiation as $n$ becomes large."},
    {"q":"Theorem 2.2 (Intermediate Value Theorem) is used in the derivation of the second derivative error to simplify the sum of which two terms?","a":"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$"},
    {"q":"What does the notation $\\xi \\in \\langle x_0, x_0 + h \\rangle$ indicate?","a":"The value $\\xi$ lies in the interval between $x_0$ and $x_0 + h$."},
    {"q":"True or False: The three-point endpoint formula and the second-order forward difference formula are the same if $h > 0$.","a":"True"},
    {"q":"What is the sign of $h$ in a backward difference formula?","a":"Negative ($h < 0$)."},
    {"q":"If we use a 5-point formula, what is the highest degree of Lagrange polynomial being used?","a":"Degree 4 ($n=4$)."},
    {"q":"In Equation (7.14), what is the relationship between $h$ and the term $\\frac{e_1 - e_0}{h}$?","a":"They are inversely proportional; as $h$ gets smaller, the term gets larger."},
    {"q":"What is the purpose of using 4-digit vs 6-digit arithmetic in Example 7.5?","a":"To illustrate how limited precision arithmetic exacerbates rounding errors in differentiation."},
    {"q":"Which partial derivative formula uses the values at $(x_0+2h, y_0)$, $(x_0+h, y_0)$, and $(x_0, y_0)$?","a":"The second-order forward difference for $\\frac{\\partial^2 f}{\\partial x^2}$."},
    {"q":"In Equation (7.5), the product term $\\prod_{j \\ne i} (x_i - x_j)$ for equidistant points $x_j = x_0 + jh$ will result in a power of $h$ equal to _____.","a":"$n$"},
    {"q":"What is the coefficient of $f(x_0)$ in the fourth-order one-sided difference formula (7.10)?","a":"$-25$"},
    {"q":"What is the coefficient of $f(x_0 - h)$ in the fourth-order central difference formula (7.11)?","a":"$-8$ (divided by $12h$)."},
    {"q":"The 'centered difference' is another name for the _____ formula.","a":"central difference"},
    {"q":"Why is it impossible to compute the term $\\frac{d}{dx}(f''(\\xi(x)))$ explicitly in Lagrange's method?","a":"Because the functional form of $\\xi(x)$ is generally unknown."}
  ],
  "7_2": [
    {"q":"In the context of Richardson's extrapolation, what does the symbol $M$ represent?","a":"The exact value of a quantity being approximated."},
    {"q":"What does $K(h)$ represent in the equation $M = K(h) + \\text{error}$?","a":"The numerical approximation of $M$ using step size $h$."},
    {"q":"What is the standard assumption regarding the form of the truncation error in Richardson's extrapolation?","a":"The error can be expanded in an even-order Taylor polynomial or power series in $h$."},
    {"q":"If the truncation error is $a_2 h^2 + a_4 h^4 + \\dots$, what is the order of accuracy of $K(h)$?","a":"Second-order."},
    {"q":"How is the discretization parameter $h$ typically modified to perform the first step of Richardson's extrapolation?","a":"It is halved to $h/2$."},
    {"q":"Why is $K(h/2)$ calculated in addition to $K(h)$ in Richardson's extrapolation?","a":"To combine the two results and eliminate the leading error term."},
    {"q":"What factor is $K(h/2)$ multiplied by when eliminating the $h^2$ error term in a second-order approximation?","a":"4"},
    {"q":"Formula: The first Richardson extrapolation $K^{(1)}(h)$ for a second-order method.","a":"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$"},
    {"q":"What is the order of accuracy of the extrapolated formula $K^{(1)}(h)$?","a":"Fourth-order."},
    {"q":"In the error series for $K^{(1)}(h)$, which power of $h$ is the leading term?","a":"$h^4$"},
    {"q":"To cancel the $h^4$ error term in $K^{(1)}(h)$, what factor must be applied to $K^{(1)}(h/2)$?","a":"16"},
    {"q":"Formula: The second Richardson extrapolation $K^{(2)}(h)$ derived from $K^{(1)}$.","a":"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$"},
    {"q":"What is the order of accuracy of the extrapolated formula $K^{(2)}(h)$?","a":"Sixth-order."},
    {"q":"The general recursive formula for Richardson's extrapolation is $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$.","a":"$4^{i+1} - 1$"},
    {"q":"In the recursive definition of Richardson's extrapolation, what is the value of the base case $K^{(0)}(h)$?","a":"$K(h)$"},
    {"q":"Term: Richardson's extrapolation.","a":"Definition: A procedure used to generate higher-order numerical approximation formulas from lower-order ones by eliminating leading error terms."},
    {"q":"Does the central difference formula satisfy the error form requirement for standard Richardson's extrapolation?","a":"Yes, because its Taylor expansion contains only even powers of $h$."},
    {"q":"What is the leading error term for the central difference formula $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$?","a":"$- \\frac{f'''(x_0)}{3!}h^2$"},
    {"q":"In the Taylor expansion used for central differences, which powers of $h$ cancel out when subtracting $f(x_0 - h)$ from $f(x_0 + h)$?","a":"The even powers ($h^0, h^2, h^4, \\dots$)."},
    {"q":"When applying Richardson's extrapolation to the central difference, the resulting $K^{(1)}(h)$ formula achieves _____ order error.","a":"fourth"},
    {"q":"The 4th-order derivative approximation $K^{(1)}(h)$ equals $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$.","a":"$6h$"},
    {"q":"If the error expansion of $K(h)$ contains ALL powers of $h$ ($h^1, h^2, h^3, \\dots$), what is the denominator in the first extrapolation step?","a":"1"},
    {"q":"In the general case where the error is $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, how is $K^{(1)}(h)$ constructed using $h$ and $h/2$?","a":"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$"},
    {"q":"True or False: Richardson's extrapolation can only be used if the error consists of even powers of $h$.","a":"False; it can be adapted for any power series error form."},
    {"q":"What determines the denominator in the formula $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$?","a":"The ratio of the leading error terms for $h$ versus $h/2$ (specifically $2^2 - 1 = 3$)."},
    {"q":"Starting from a 1st-order difference formula, what order approximation is produced by one step of Richardson's extrapolation?","a":"Second-order."},
    {"q":"According to Example 7.6, the 4th-order Richardson-extrapolated central difference is equivalent to which formula?","a":"Formula (7.11)."},
    {"q":"What is the purpose of multiplying the $h/2$ equation by 4 in the derivation of $K^{(1)}$?","a":"To match the coefficient of the $a_2 h^2$ term in the original $h$ equation so it cancels out."},
    {"q":"If $f \\in C^{2m+3}$, what is the order of the remainder term $b(h)$ in the central difference derivative expansion?","a":"$h^{2m+2}$"},
    {"q":"In the expression for $a_{2i}^{(1)}$, how is it related to the original coefficient $a_{2i}$?","a":"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$"},
    {"q":"What is the primary benefit of using Richardson's extrapolation instead of simply decreasing $h$ to a very small value?","a":"It achieves high accuracy with larger step sizes, potentially avoiding round-off errors and reducing computational cost."},
    {"q":"In the formula $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$, where does the number 15 come from?","a":"It is $4^2 - 1$ (the ratio of $h^4$ to $(h/2)^4$ minus 1)."},
    {"q":"Which specific differentiation formula is used as the starting point for the Richardson examples in the text?","a":"The central difference formula."},
    {"q":"What is the result of applying Richardson's extrapolation to a sequence of approximations that does not have a structured error expansion?","a":"The method may fail to improve accuracy or could even decrease it."},
    {"q":"Concept: Truncation error.","a":"Definition: The error made by truncating an infinite process (like a Taylor series) to a finite one."},
    {"q":"What is the value of $m$ in the term $a_{2m} h^{2m}$ if we want to reach a tenth-order approximation?","a":"5"},
    {"q":"Cloze: To derive a third-order approximation from a first-order one, the leading error term must be proportional to _____.","a":"$h^1$ (or $h^2$ for the second step)"},
    {"q":"How does the complexity of the approximation formula $K^{(i)}(h)$ change as $i$ increases?","a":"It involves more function evaluations at different step sizes ($h, h/2, h/4, \\dots$)."},
    {"q":"Formula: The general error bound for $b(h)$ in the second-order case.","a":"$|b(h)| \\le B h^{2m+2}$"},
    {"q":"If $M$ is being approximated, $K(h)$ is the approximation, and $E(h)$ is the error, what is the basic identity used?","a":"$M = K(h) + E(h)$"},
    {"q":"Why is the central difference formula referred to as 'másodrendű' in the Hungarian text?","a":"Because its error is proportional to $h^2$ (second-order)."},
    {"q":"In the exercise to derive a 6th-order formula for $f'(0)$ where $f(x) = e^{x} \\sin x$, what is the starting step size $h$?","a":"0.25"},
    {"q":"The general case formula uses integers $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$. What does $\\alpha_i$ represent?","a":"The powers of $h$ present in the error expansion."},
    {"q":"If the error expansion is $M = K(h) + a_1 h + a_2 h^2 + \\dots$, the first extrapolated value $K^{(1)}(h)$ is _____.","a":"$2K(h/2) - K(h)$"},
    {"q":"In the central difference expansion, what is the coefficient of the $h^4$ term ($a_4$)?","a":"$- \\frac{f^{(5)}(x_0)}{5!}$"},
    {"q":"What happens to the coefficients $a_{2i}$ of the remaining error terms after one step of Richardson's extrapolation?","a":"They are transformed into new coefficients $a_{2i}^{(1)}$."},
    {"q":"The Richardson procedure can be viewed as a linear combination of _____ at different scales.","a":"approximations"},
    {"q":"Formula: The relation for $M$ after the second-order term is cancelled.","a":"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$"},
    {"q":"Is Richardson's extrapolation limited to derivatives?","a":"No, it can be applied to integrals (Romberg integration) or any numerical limit process with a known error structure."},
    {"q":"What is the constant $B$ in the error bound $|b(h)| \\le B h^{2m+2}$?","a":"A positive constant independent of $h$ that bounds the higher-order terms."},
    {"q":"In the context of Exercise 4, what is the order of the 'one-sided difference' formula?","a":"First-order."},
    {"q":"If $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ requires $K(h/2)$, how many $h$ values does $K^{(2)}(h)$ require?","a":"Three: $h, h/2, h/4$."},
    {"q":"Cloze: The procedure of Richardson's extrapolation generates a _____ of approximations of increasing order.","a":"sequence"},
    {"q":"What is the denominator of the third extrapolation step $K^{(3)}$ if the error only has even powers?","a":"63 ($4^3 - 1$)"},
    {"q":"How does halving the step size twice ($h \\to h/2 \\to h/4$) assist in reaching a 6th-order approximation?","a":"It provides enough data points to eliminate both the $h^2$ and $h^4$ error terms."},
    {"q":"In the derivation of $K^{(1)}$, why is $M$ multiplied by 4 on the left side of the intermediate step?","a":"Because the entire equation for $h/2$ was multiplied by 4."},
    {"q":"What is the leading error term of $K^{(2)}(h)$?","a":"$a_6^{(2)} h^6$"}
  ],
  "7_3": [
    {"q":"In the definition of the definite integral, what is the 'norm' of a partition $a = x_0 < x_1 < \\dots < x_n = b$?","a":"The maximum length of the subintervals, defined as $\\max\\{x_i - x_{i-1} : i = 1, \\dots, n\\}$."},
    {"q":"Formula: Midpoint Rule (also known as the Rectangle Rule) for numerical integration","a":"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$"},
    {"q":"What is the underlying approach of the Lagrange method for deriving numerical integration formulas?","a":"Approximating the function $f$ with its Lagrange interpolating polynomial $L_n$ and then integrating $L_n$."},
    {"q":"In numerical integration, what is a 'quadrature formula'?","a":"A formula that approximates a definite integral as a weighted sum of function values: $\\sum_{k=0}^{n} c_k f(x_k)$."},
    {"q":"How are the weights $c_k$ defined in a Newton-Cotes quadrature formula?","a":"$c_k = \\int_a^b l_k(x) \\, dx$, where $l_k(x)$ is the $k$-th Lagrange basis polynomial."},
    {"q":"What distinguishes a 'closed' Newton-Cotes formula from an 'open' one?","a":"Closed formulas include the endpoints $a$ and $b$ as mesh points, while open formulas only use points within the open interval $(a, b)$."},
    {"q":"What is the 'degree of precision' of a quadrature formula?","a":"The highest integer $n$ such that the formula gives the exact integral for all polynomials of degree $\\le n$."},
    {"q":"What is the minimum degree of precision for an $(n+1)$-point Newton-Cotes formula?","a":"$n$"},
    {"q":"For which values of $n$ do Newton-Cotes formulas provide an extra degree of precision (exact for polynomials of degree $n+1$)?","a":"Even values of $n$."},
    {"q":"Formula: Elementary Trapezoidal Rule","a":"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, where $h = b - a$."},
    {"q":"What is the error term for the elementary Trapezoidal rule?","a":"$-\\frac{h^3}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},
    {"q":"What is the geometric interpretation of the Trapezoidal rule?","a":"The integral is approximated by the area of the trapezoid formed by the secant line connecting $(a, f(a))$ and $(b, f(b))$."},
    {"q":"Formula: Composite Trapezoidal Rule for $n$ subintervals of length $h$","a":"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$"},
    {"q":"What is the error term for the composite Trapezoidal rule?","a":"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$."},
    {"q":"If the step size $h$ is halved in the composite Trapezoidal rule, by what factor does the error approximately decrease?","a":"One quarter (indicating quadratic error in $h$)."},
    {"q":"According to the Intermediate Value Theorem for integrals, what condition must $g(x)$ meet for $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ to hold?","a":"$g(x)$ must be integrable and not change sign on the interval $[a, b]$."},
    {"q":"For the closed Newton-Cotes formula with $n=2$ (Simpson's rule), what is the relationship between $x_0, x_1, x_2$ and $h$?","a":"$x_0 = a$, $x_1 = a + h$, $x_2 = b$, and $h = (b - a)/2$."},
    {"q":"Formula: Elementary Simpson's Rule","a":"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$"},
    {"q":"What is the error term for the elementary Simpson's rule?","a":"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ for some $\\eta \\in (x_0, x_2)$."},
    {"q":"Why is Simpson's rule exact for polynomials of degree 3 even though it is based on quadratic interpolation?","a":"Because for even $n$, Newton-Cotes formulas have a higher degree of precision ($n+1$)."},
    {"q":"What is the degree of precision of Simpson's rule?","a":"$3$"},
    {"q":"What is the requirement for the number of subintervals in the composite Simpson's rule?","a":"The interval must be divided into an even number of equal parts ($2n$)."},
    {"q":"Formula: Composite Simpson's Rule for $2n$ subintervals of length $h$","a":"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$"},
    {"q":"What is the error term for the composite Simpson's rule?","a":"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ for some $\\xi \\in (a, b)$."},
    {"q":"Formula: Simpson's $\\frac{3}{8}$ Rule","a":"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$"},
    {"q":"What is the degree of precision for the Simpson's $\\frac{3}{8}$ rule?","a":"$3$ (since $n=3$ is odd, precision is $n$)."},
    {"q":"Formula: Closed Newton-Cotes formula for $n=4$","a":"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$"},
    {"q":"What is the error term for the $n=4$ closed Newton-Cotes formula?","a":"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$"},
    {"q":"Formula: Open Newton-Cotes formula for $n=0$ over interval $[x_{-1}, x_1]$ (Midpoint Rule)","a":"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$"},
    {"q":"Formula: Open Newton-Cotes formula for $n=1$ over interval $[x_{-1}, x_2]$ using points $x_0, x_1$","a":"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$"},
    {"q":"Formula: Open Newton-Cotes formula for $n=2$ over interval $[x_{-1}, x_3]$ using points $x_0, x_1, x_2$","a":"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$"},
    {"q":"Formula: Open Newton-Cotes formula for $n=3$ over interval $[x_{-1}, x_4]$ using points $x_0, x_1, x_2, x_3$","a":"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$"},
    {"q":"What two conditions must a quadrature formula meet to be considered stable according to Theorem 7.9?","a":"The formula must be exact for constant functions and all coefficients $c_i$ must be positive."},
    {"q":"If function value errors are bounded by $|y_i - f(x_i)| \\le \\varepsilon$, what is the stability bound for a stable quadrature formula?","a":"$\\varepsilon(b - a)$"},
    {"q":"What is the sum of the weights $\\sum c_i$ in any quadrature formula that is exact for constant functions over $[a, b]$?","a":"$b - a$"},
    {"q":"Why are most standard quadrature formulas (like Trapezoidal or Simpson's) considered numerically stable?","a":"They utilize positive weights and are exact for constant functions."},
    {"q":"The error of the composite Simpson's rule is proportional to which power of the step size $h$?","a":"$h^4$"},
    {"q":"Which Newton-Cotes formula is characterized by weights following the pattern $1, 4, 1$?","a":"Simpson's Rule"},
    {"q":"The error of the composite Trapezoidal rule is proportional to which power of the step size $h$?","a":"$h^2$"},
    {"q":"How does the error of the composite Simpson's rule respond if the step size $h$ is reduced to $1/2$?","a":"The error is reduced to approximately $1/16$ of its original value."}
  ],
  "7_4": [
    {"q":"What is the general form of an $n$-point quadrature formula for the integral $\\int_a^b f(x)\\,dx$?","a":"$\\sum_{i=1}^{n} c_i f(x_i)$"},
    {"q":"A quadrature formula is exact for polynomials of degree at most $m$ if and only if it is exact for all _____ $x^i$ where $i = 0, 1, \\ldots, m$.","a":"monomials"},
    {"q":"How many parameters ($c_i$ and $x_i$) are contained in a general $n$-point quadrature formula?","a":"$2n$"},
    {"q":"What is the maximum degree of a polynomial for which an $n$-point Gaussian quadrature formula can be exact?","a":"$2n - 1$"},
    {"q":"To find the parameters of an $n$-point Gaussian quadrature formula, one must solve a system of $2n$ _____ equations.","a":"nonlinear"},
    {"q":"In a 2-point Gaussian quadrature formula on the interval $[-1, 1]$, what are the values of the weights $c_1$ and $c_2$?","a":"$c_1 = 1, c_2 = 1$"},
    {"q":"What are the nodes $x_1$ and $x_2$ for a 2-point Gaussian quadrature formula on $[-1, 1]$?","a":"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$"},
    {"q":"What is the 2-point Gaussian quadrature formula for the interval $[-1, 1]$?","a":"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$"},
    {"q":"Under what condition are two functions $f$ and $g$ considered orthogonal on the interval $[a, b]$?","a":"$\\int_a^b f(x)g(x)\\,dx = 0$"},
    {"q":"The sequence of polynomials $(P_i)$ that are pairwise orthogonal on $[-1, 1]$ where $P_i$ has degree $i$ are called _____ polynomials.","a":"Legendre"},
    {"q":"What is the first Legendre polynomial, $P_0(x)$?","a":"$1$"},
    {"q":"What is the second Legendre polynomial, $P_1(x)$?","a":"$x$"},
    {"q":"What method is used to construct the sequence of orthogonal Legendre polynomials?","a":"Gram-Schmidt orthogonalization"},
    {"q":"In the Gram-Schmidt process for Legendre polynomials, $P_{i+1}(x)$ is sought in the form $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$. How is $a_{i+1,j}$ calculated?","a":"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$"},
    {"q":"What is the specific formula for the Legendre polynomial $P_2(x)$?","a":"$x^2 - \\frac{1}{3}$"},
    {"q":"What is the specific formula for the Legendre polynomial $P_3(x)$?","a":"$x^3 - \\frac{3}{5}x$"},
    {"q":"What is the specific formula for the Legendre polynomial $P_4(x)$?","a":"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$"},
    {"q":"Which recurrence relation do Legendre polynomials satisfy?","a":"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$"},
    {"q":"Property of Legendre polynomials: $P_i$ is orthogonal to any polynomial of degree at most _____.","a":"$i - 1$"},
    {"q":"How does the parity of the Legendre polynomial $P_i$ relate to the index $i$?","a":"It is even if $i$ is even and odd if $i$ is odd."},
    {"q":"How many distinct real roots does the $n$th Legendre polynomial $P_n$ have in the interval $(-1, 1)$?","a":"$n$"},
    {"q":"What is the geometric distribution of the roots of a Legendre polynomial relative to the origin?","a":"The roots are symmetric to the origin."},
    {"q":"The nodes $x_1, \\dots, x_n$ of the $n$-point Gaussian quadrature formula are the roots of which polynomial?","a":"The $n$th-order Legendre polynomial $P_n$"},
    {"q":"What is the required differentiability class for a function $f$ to apply the Gaussian quadrature truncation error formula involving $f^{(2n)}$?","a":"$C^{2n}[a, b]$"},
    {"q":"What is the truncation error formula for the $n$-point Gaussian quadrature on $[-1, 1]$?","a":"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$"},
    {"q":"What is the approximate form of the Gaussian quadrature error term if $f^{(2n)}$ is bounded?","a":"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$"},
    {"q":"As $n \\to \\infty$, the error of Gaussian quadrature tends to zero at a(n) _____ speed.","a":"exponential"},
    {"q":"How does the convergence speed of Gaussian quadrature compare to Newton-Cotes formulas as $n \\to \\infty$?","a":"Gaussian is exponential; Newton-Cotes is only polynomial."},
    {"q":"For $n=3$, what is the root $x_i$ located at the origin?","a":"$0.0000000000$"},
    {"q":"For $n=3$, what is the weight $c_i$ corresponding to the node $x=0$?","a":"$0.8888888889$ (or $\\frac{8}{9}$)"},
    {"q":"In the 3-point Gaussian formula, what is the value of the weights for the nodes $\\pm 0.7745966692$?","a":"$0.5555555556$ (or $\\frac{5}{9}$)"},
    {"q":"What substitution is used to transform the integral $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$?","a":"$x = \\frac{(b - a)t + a + b}{2}$"},
    {"q":"When transforming $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$, what is the differential $dx$ in terms of $dt$?","a":"$dx = \\frac{b - a}{2}\\,dt$"},
    {"q":"Formula: Interval Transformation","a":"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$"},
    {"q":"Example: If using 2-point Gauss to approximate $\\int_0^1 x^2 e^x\\,dx$, what is the scaling factor applied to the integral on $[-1, 1]$?","a":"$\\frac{1}{2}$"},
    {"q":"The 2-point Gaussian approximation of $\\int_{-1}^1 e^x\\,dx$ is approximately $2.3426961$. What is the exact value?","a":"$e - \\frac{1}{e} \\approx 2.350424$"},
    {"q":"True or False: Gaussian quadrature weights $c_i$ are always positive.","a":"True"},
    {"q":"If a sequence of polynomials $(p_i)$ is pairwise orthogonal on $[-1, 1]$, what is the relationship between $p_i$ and the Legendre polynomial $P_i$?","a":"$p_i(x) = c_i P_i(x)$ for some constant $c_i \\ne 0$"},
    {"q":"The formula $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ defines the _____ of the Gaussian quadrature.","a":"weights (or coefficients)"},
    {"q":"In the 2-point case on $[-1, 1]$, the equation $c_1 x_1 + c_2 x_2 = 0$ follows from integrating which monomial?","a":"$x$"},
    {"q":"In the 2-point case on $[-1, 1]$, the equation $c_1 + c_2 = 2$ follows from integrating which function?","a":"$1$ (or $x^0$)"},
    {"q":"Why can case (i) $x_1 = x_2$ not happen in the 2-point Gaussian derivation?","a":"It would imply $c_1 + c_2 = 0$, contradicting the integral of 1 which equals 2."},
    {"q":"Concept: $n$-point Gaussian Quadrature","a":"Definition: A quadrature formula where nodes and weights are chosen to integrate polynomials up to degree $2n-1$ exactly."},
    {"q":"Which theorem states that nodes $x_i$ are the roots of $P_n$ and provides the formula for $c_i$?","a":"Theorem 7.13"},
    {"q":"For $n=4$, how many nodes are positive and how many are negative?","a":"2 positive and 2 negative (due to symmetry)."},
    {"q":"What is the value of $P_2(x)$ at $x=0$?","a":"$-\\frac{1}{3}$"},
    {"q":"What is the result of the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?","a":"$0.7119418$"},
    {"q":"What is the error in the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?","a":"$0.0063400$"},
    {"q":"True or False: The nodes $x_i$ in Gaussian quadrature must be inside the interval of integration.","a":"True (Theorem 7.12 states roots are in $(-1, 1)$)."},
    {"q":"In the recursive formula $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$, what is the coefficient $\\gamma_n$?","a":"$\\frac{n^2}{4n^2 - 1}$"},
    {"q":"Legendre polynomials are constructed to be _____ on the interval $[-1, 1]$.","a":"orthogonal"},
    {"q":"The error of the 2-point Gaussian formula for $e^x$ on $[-1, 1]$ is $0.0077062$. This is considered _____ given the formula's simplicity.","a":"very small"},
    {"q":"If $i=3$ (odd), what is the value of $P_3(0)$?","a":"$0$ (because it is an odd function)."},
    {"q":"How does the degree of $P_i$ relate to the index $i$?","a":"The degree of $P_i$ is exactly $i$."},
    {"q":"The formula $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ is exact for $p$ of degree 5. What is the minimum $n$ required?","a":"$n = 3$ (since $2(3)-1 = 5$)"},
    {"q":"What is the weight $c_i$ for $n=2$ in the Gaussian quadrature on $[-1, 1]$?","a":"$1.0000000000$"},
    {"q":"The 5-point Gaussian quadrature uses nodes derived from which Legendre polynomial?","a":"$P_5(x)$"},
    {"q":"In the system of equations for $n=2$, the equation $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ comes from the integral of _____.","a":"$x^2$"},
    {"q":"The $n$-point Gaussian quadrature is derived from a system of _____ equations (count).","a":"$2n$"},
    {"q":"For an arbitrary interval $[a, b]$, the transformed function's argument in the integral is _____.","a":"$\\frac{(b - a)t + a + b}{2}$"}
  ],
}
