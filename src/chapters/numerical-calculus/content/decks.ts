// Auto-generated learning aids for chapter 7. Glossaries and flashcards bilingual. Keyed by lesson slug.
export interface GlossaryEntry { term: { en: string; hu: string }; def: { en: string; hu: string } }
export interface Flashcard { q: { en: string; hu: string } | string; a: { en: string; hu: string } | string }

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
    {"q":{"en":"What is the limit definition of the derivative $f'(x_0)$?","hu":"Mi a $f'(x_0)$ derivált határértéke?"},"a":{"en":"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$","hu":"$f'(x_0) = \\lim_{h \\to 0} \\frac{f(x_0 + h) - f(x_0)}{h}$"}},
    {"q":{"en":"Under what condition is the difference quotient $\\frac{f(x_0 + h) - f(x_0)}{h}$ considered a good approximation of $f'(x_0)$?","hu":"Milyen feltétel mellett tekinthető a $\\frac{f(x_0 + h) - f(x_0)}{h}$ különbséghányados a $f'(x_0)$ jó közelítésének?"},"a":{"en":"When the absolute value of the step size $|h|$ is small.","hu":"Ha a $|h|$ lépésméret abszolút értéke kicsi."}},
    {"q":{"en":"In the context of numerical differentiation, what does 'Lagrange's method' involve?","hu":"Mit foglal magában a „Lagrange-módszer” a numerikus differenciálás összefüggésében?"},"a":{"en":"Approximating a function $f$ with a Lagrange polynomial $L_n(x)$ and using $L'_n(x_0)$ as the derivative estimate.","hu":"$f$ függvény közelítése $L_n(x)$ Lagrange-polinommal, és derivált becslésként a $L'_n(x_0)$ felhasználását."}},
    {"q":{"en":"What is the formula for the first-order forward difference approximation of $f'(x_0)$?","hu":"Mi a képlete a $f'(x_0)$ elsőrendű előremenő különbség közelítésének?"},"a":{"en":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h > 0$.","hu":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ ahol $h > 0$."}},
    {"q":{"en":"What is the formula for the first-order backward difference approximation of $f'(x_0)$?","hu":"Mi a képlete a $f'(x_0)$ elsőrendű visszafelé különbségközelítésének?"},"a":{"en":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ where $h < 0$.","hu":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0)}{h}$ ahol $h < 0$."}},
    {"q":{"en":"The first-order difference formula is also known as the _____-point formula.","hu":"Az elsőrendű különbség képlet _____-pont képletként is ismert."},"a":{"en":"two","hu":"két"}},
    {"q":{"en":"What is the specific form of the truncation error for the first-order difference approximation of $f'(x_0)$?","hu":"Mi a csonkítási hiba konkrét formája a $f'(x_0)$ elsőrendű különbségközelítésénél?"},"a":{"en":"$-\\frac{h}{2}f''(\\xi)$ where $\\xi \\in \\langle x_0, x_0 + h \\rangle$.","hu":"$-\\frac{h}{2}f''(\\xi)$ ahol $\\xi \\in \\langle x_0, x_0 + h \\rangle$."}},
    {"q":{"en":"Using Taylor's method, what order of Taylor expansion is required to derive the first-order difference formula for $f'(x_0)$?","hu":"Taylor módszerét használva, milyen Taylor-kiterjesztés szükséges a $f'(x_0)$ elsőrendű különbségi képletének származtatásához?"},"a":{"en":"First-order Taylor expansion.","hu":"Elsőrendű Taylor bővítés."}},
    {"q":{"en":"How does the error of a first-order difference formula change if the step size $h$ decreases by one order of magnitude?","hu":"Hogyan változik egy elsőrendű különbségi képlet hibája, ha a $h$ lépésszám egy nagyságrenddel csökken?"},"a":{"en":"The error also decreases by one order of magnitude.","hu":"A hiba is egy nagyságrenddel csökken."}},
    {"q":{"en":"What general formula is used to derive an $(n+1)$-point difference formula using Lagrange basis polynomials $l_j(x)$?","hu":"Milyen általános képletet használunk a $(n+1)$-pontkülönbség képlet levezetésére a $l_j(x)$ Lagrange-bázispolinomok használatával?"},"a":{"en":"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$","hu":"$f'(x_i) \\approx \\sum_{j=0}^{n} f(x_j)l'_j(x_i)$"}},
    {"q":{"en":"For an $(n+1)$-point difference formula with equidistant points, what is the order of the error term in terms of $h$?","hu":"Egy $(n+1)$ pontkülönbség képlethez egyenlő távolságra lévő pontokkal, milyen sorrendben van a hibatag a $h$-ben?"},"a":{"en":"$n$th-order ($O(h^n)$).","hu":"$n$-edik rend ($O(h^n)$)."}},
    {"q":{"en":"What are the three mesh points used in the standard three-point difference formulas?","hu":"Mi az a három hálópont, amelyet a standard hárompontos különbségi képletekben használnak?"},"a":{"en":"$x_0$, $x_0 + h$, and $x_0 + 2h$.","hu":"$x_0$, $x_0 + h$ és $x_0 + 2h$."}},
    {"q":{"en":"What is the three-point endpoint formula for $f'(x_0)$?","hu":"Mi a $f'(x_0)$ hárompontos végpont képlete?"},"a":{"en":"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$","hu":"$\\frac{1}{h}(-\\frac{3}{2}f(x_0) + 2f(x_0 + h) - \\frac{1}{2}f(x_0 + 2h))$"}},
    {"q":{"en":"What is the order of the truncation error for the three-point endpoint formula?","hu":"Mi a hárompontos végpont képlet csonkítási hibájának sorrendje?"},"a":{"en":"Second-order ($O(h^2)$).","hu":"Másodrendű ($O(h^2)$)."}},
    {"q":{"en":"The three-point midpoint formula is also commonly called the second-order _____ difference formula.","hu":"A hárompontos felezőpont képletet másodrendű _____ különbség képletnek is szokták nevezni."},"a":{"en":"central","hu":"központi"}},
    {"q":{"en":"What is the formula for the three-point midpoint (central difference) approximation of $f'(x_0)$?","hu":"Mi a képlet a $f'(x_0)$ hárompontos felezőpont (középponti különbség) közelítésére?"},"a":{"en":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$","hu":"$f'(x_0) \\approx \\frac{f(x_0 + h) - f(x_0 - h)}{2h}$"}},
    {"q":{"en":"What is the truncation error term for the second-order central difference formula?","hu":"Mi a csonkítási hibatag a másodrendű központi különbségi képlethez?"},"a":{"en":"$-\\frac{h^2}{6}f'''(\\xi)$","hu":"$-\\frac{h^2}{6}f'''(\\xi)$"}},
    {"q":{"en":"Between a one-sided second-order formula and a central second-order formula, which generally yields a smaller error for the same $h$?","hu":"Egy egyoldalú másodrendű képlet és egy központi másodrendű képlet között, amely általában kisebb hibát eredményez ugyanazon $h$?"},"a":{"en":"The central difference formula.","hu":"A központi különbség képlete."}},
    {"q":{"en":"Which formula uses the points $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ to approximate $f'(x_0)$?","hu":"Melyik képlet használja a $x_0 - 2h, x_0 - h, x_0 + h, x_0 + 2h$ pontokat a $f'(x_0)$ közelítésére?"},"a":{"en":"The five-point central difference (fourth-order) formula.","hu":"Az ötpontos központi különbség (negyedrendű) képlet."}},
    {"q":{"en":"What is the order of accuracy for the five-point central difference formula (7.11)?","hu":"Mi a pontossági sorrendje az ötpontos központi különbségi képletnek (7.11)?"},"a":{"en":"Fourth-order ($O(h^4)$).","hu":"Negyedrendű ($O(h^4)$)."}},
    {"q":{"en":"What is the truncation error term for the fourth-order central difference formula?","hu":"Mi a negyedrendű központi különbségi képlet csonkolási hibatagja?"},"a":{"en":"$\\frac{h^4}{30}f^{(5)}(\\xi)$","hu":"$\\frac{h^4}{30}f^{(5)}(\\xi)$"}},
    {"q":{"en":"Which method is described as more convenient than Lagrange's method for deriving approximations of higher-order derivatives?","hu":"Melyik módszert írják le kényelmesebbnek, mint a Lagrange-féle módszert a magasabb rendű deriváltok közelítésének levezetésére?"},"a":{"en":"Taylor's method.","hu":"Taylor módszere."}},
    {"q":{"en":"What is the standard second-order central difference formula for the second derivative $f''(x_0)$?","hu":"Mi a standard másodrendű központi különbségi képlet a $f''(x_0)$ második származékhoz?"},"a":{"en":"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$","hu":"$f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$"}},
    {"q":{"en":"What is the truncation error associated with the central difference formula for the second derivative $f''(x_0)$?","hu":"Mi az a csonkolási hiba, amely a $f''(x_0)$ második derivált központi különbségi képletéhez kapcsolódik?"},"a":{"en":"$-\\frac{h^2}{12}f^{(4)}(\\xi)$","hu":"$-\\frac{h^2}{12}f^{(4)}(\\xi)$"}},
    {"q":{"en":"Numerical differentiation is described as an _____ problem because small perturbations in function values can cause large errors in the derivative.","hu":"A numerikus differenciálást _____ problémaként írják le, mivel a függvényértékek kis perturbációi nagy hibákat okozhatnak a deriváltban."},"a":{"en":"unstable","hu":"instabil"}},
    {"q":{"en":"In the error analysis $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$, what does the term $\\frac{e_1 - e_0}{h}$ represent?","hu":"A $f'(x_0) - \\frac{f_1 - f_0}{h} = -\\frac{h}{2}f''(\\xi) + \\frac{e_1 - e_0}{h}$ hibaelemzésben mit jelent a $\\frac{e_1 - e_0}{h}$ kifejezés?"},"a":{"en":"The rounding error.","hu":"A kerekítési hiba."}},
    {"q":{"en":"As the step size $h$ approaches zero, what happens to the rounding error in numerical differentiation?","hu":"Mi történik a numerikus differenciálás kerekítési hibájával, ha a $h$ lépésszám megközelíti a nullát?"},"a":{"en":"It tends toward infinity (or increases significantly).","hu":"A végtelen felé hajlik (vagy jelentősen megnövekszik)."}},
    {"q":{"en":"How do truncation error and rounding error behave differently as step size $h$ decreases?","hu":"Hogyan viselkedik eltérően a csonkítási hiba és a kerekítési hiba a $h$ lépésszám csökkenésével?"},"a":{"en":"Truncation error decreases, while rounding error increases.","hu":"A csonkítási hiba csökken, míg a kerekítési hiba növekszik."}},
    {"q":{"en":"Why might a 4-digit arithmetic calculation show an increase in error when $h$ is reduced from 0.01 to 0.001?","hu":"Miért mutathat egy 4 számjegyű aritmetikai számítás hibanövekedést, ha a $h$ értéket 0,01-ről 0,001-re csökkentjük?"},"a":{"en":"The increase in rounding error outweighs the decrease in truncation error.","hu":"A kerekítési hiba növekedése meghaladja a csonkolási hiba csökkenését."}},
    {"q":{"en":"What is the numerical approximation for the partial derivative $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ using a first-order forward difference?","hu":"Mi a numerikus közelítés a $\\frac{\\partial f(x_0, y_0)}{\\partial x}$ parciális deriválthoz elsőrendű forward különbséget használva?"},"a":{"en":"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$","hu":"$\\frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h}$"}},
    {"q":{"en":"What is the central difference approximation for the second partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$?","hu":"Mi a központi különbség közelítése a $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x^2}$ második parciális deriválthoz?"},"a":{"en":"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$","hu":"$\\frac{f(x_0 + h, y_0) - 2f(x_0, y_0) + f(x_0 - h, y_0)}{h^2}$"}},
    {"q":{"en":"What is the approximation formula for the mixed partial derivative $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$?","hu":"Mi a közelítési képlete a $\\frac{\\partial^2 f(x_0, y_0)}{\\partial x \\partial y}$ vegyes parciális deriváltnak?"},"a":{"en":"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$","hu":"$\\frac{f(x_0 + h, y_0 + h) - f(x_0 + h, y_0) - f(x_0, y_0 + h) + f(x_0, y_0)}{h^2}$"}},
    {"q":{"en":"The formula $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ approximates which derivative?","hu":"A $f'''(x_0) \\approx \\frac{1}{2h^3}(f(x_0 + 2h) - 2f(x_0 + h) + 2f(x_0 - h) - f(x_0 - 2h))$ képlet melyik származékot közelíti meg?"},"a":{"en":"The third derivative ($f'''(x_0)$).","hu":"A harmadik származék ($f'''(x_0)$)."}},
    {"q":{"en":"The formula $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ approximates which derivative?","hu":"A $f^{(4)}(x_0) \\approx \\frac{1}{h^4}(f(x_0 + 2h) - 4f(x_0 + h) + 6f(x_0) - 4f(x_0 - h) + f(x_0 - 2h))$ képlet melyik származékot közelíti meg?"},"a":{"en":"The fourth derivative ($f^{(4)}(x_0)$).","hu":"A negyedik derivált ($f^{(4)}(x_0)$)."}},
    {"q":{"en":"What is the truncation error order of the first-order forward difference formula?","hu":"Mi a csonkítási hiba sorrendje az elsőrendű előrehaladási különbségi képletnek?"},"a":{"en":"$O(h)$","hu":"$O(h)$"}},
    {"q":{"en":"What is the truncation error order of the central difference formula for the first derivative?","hu":"Mi az első derivált központi különbségi képletének csonkolási hibasorrendje?"},"a":{"en":"$O(h^2)$","hu":"$O(h^2)$"}},
    {"q":{"en":"If $f \\in C^2[a, b]$, what is the maximum order of the Taylor expansion useful for deriving a first-order derivative approximation?","hu":"Ha $f \\in C^2[a, b]$, mekkora az elsőrendű derivált közelítés levezetéséhez használható Taylor-kiterjesztés maximális rendje?"},"a":{"en":"First-order Taylor expansion with a second-order error term.","hu":"Elsőrendű Taylor-kiterjesztés másodrendű hibataggal."}},
    {"q":{"en":"In formula (7.1), why is the limit $x \\to x_0$ taken?","hu":"A (7.1) képletben miért veszik fel a $x \\to x_0$ határértéket?"},"a":{"en":"To eliminate terms containing $(x-x_0)$ and isolate the derivative $f'(x_0)$ and the error term.","hu":"A $(x-x_0)$-t tartalmazó kifejezések kiküszöbölésére és a $f'(x_0)$ származék és a hibatag elkülönítésére."}},
    {"q":{"en":"Term: Two-point difference formula","hu":"Fogalom: Kétpontos különbségi képlet"},"a":{"en":"Definition: An approximation of the first derivative using values of the function at exactly two points.","hu":"Definíció: Az első derivált közelítése a függvény pontosan két ponton lévő értékeinek felhasználásával."}},
    {"q":{"en":"Which formula is obtained by substituting $x_0 \\leftarrow x_0 - 2h$ and $h \\leftarrow -h$ into the three-point endpoint formula at $x_0 + 2h$?","hu":"Melyik képletet kapjuk, ha $x_0 \\leftarrow x_0 - 2h$ és $h \\leftarrow -h$ behelyettesítjük a $x_0 + 2h$ hárompontos végpont képletébe?"},"a":{"en":"The second-order backward difference formula.","hu":"A másodrendű visszafelé különbségi képlet."}},
    {"q":{"en":"In Example 7.1, what happens to the error when $h$ is divided by 10?","hu":"A 7.1. példában mi történik a hibával, ha a $h$-t elosztjuk 10-zel?"},"a":{"en":"The error is also divided by approximately 10.","hu":"A hiba is el van osztva körülbelül 10-zel."}},
    {"q":{"en":"What happens to the error in a second-order formula when $h$ is divided by 10?","hu":"Mi történik a másodrendű képlet hibájával, ha a $h$-t elosztjuk 10-zel?"},"a":{"en":"The error is divided by 100 ($10^2$).","hu":"A hiba 100-zal van osztva ($10^2$)."}},
    {"q":{"en":"What is the primary drawback of using very small values of $h$ in practical computer calculations?","hu":"Mi az elsődleges hátránya annak, ha nagyon kis $h$ értéket használunk a gyakorlati számítógépes számításokban?"},"a":{"en":"Significant increase in rounding error due to finite precision arithmetic.","hu":"A kerekítési hiba jelentős növekedése a véges precíziós aritmetika miatt."}},
    {"q":{"en":"The five-point one-sided formula for $f'(x_0)$ involves points from $x_0$ up to $x_0 +$ _____.","hu":"A $f'(x_0)$ ötpontos egyoldalú képlete $x_0$-től $x_0 +$ _____-ig terjedő pontokat tartalmaz."},"a":{"en":"$4h$","hu":"$4h$"}},
    {"q":{"en":"In the second derivative formula $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$, the error is proportional to which derivative of $f$?","hu":"A második $f''(x_0) \\approx \\frac{f(x_0 - h) - 2f(x_0) + f(x_0 + h)}{h^2}$ derivált képletben a hiba arányos a $f$ melyik deriváltjával?"},"a":{"en":"The fourth derivative ($f^{(4)}$).","hu":"A negyedik derivált ($f^{(4)}$)."}},
    {"q":{"en":"Formula: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$","hu":"Képlet: $\\frac{\\partial f(x_0, y_0)}{\\partial y} \\approx \\frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h}$"},"a":{"en":"This is the first-order forward difference for the partial derivative with respect to $y$.","hu":"Ez a részleges derivált elsőrendű határidős különbsége a $y$-hez képest."}},
    {"q":{"en":"Why is the function $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ used in the text?","hu":"Miért szerepel a szövegben a $g(x) = f(x) + \\frac{1}{n}\\sin(n^2 x)$ függvény?"},"a":{"en":"To demonstrate the instability of numerical differentiation as $n$ becomes large.","hu":"A numerikus differenciálódás instabilitásának bemutatása, mivel a $n$ nagy lesz."}},
    {"q":{"en":"Theorem 2.2 (Intermediate Value Theorem) is used in the derivation of the second derivative error to simplify the sum of which two terms?","hu":"Melyik két tag összegének egyszerűsítésére szolgál a 2.2. Tétel (Köztes érték tétel) a második derivált hiba levezetésében?"},"a":{"en":"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$","hu":"$f^{(4)}(\\xi_1) + f^{(4)}(\\xi_2)$"}},
    {"q":{"en":"What does the notation $\\xi \\in \\langle x_0, x_0 + h \\rangle$ indicate?","hu":"Mit jelöl a $\\xi \\in \\langle x_0, x_0 + h \\rangle$ jelölés?"},"a":{"en":"The value $\\xi$ lies in the interval between $x_0$ and $x_0 + h$.","hu":"A $\\xi$ érték a $x_0$ és $x_0 + h$ közötti intervallumban található."}},
    {"q":{"en":"True or False: The three-point endpoint formula and the second-order forward difference formula are the same if $h > 0$.","hu":"Igaz vagy hamis: A hárompontos végpont képlet és a másodrendű előremenő különbség képlete megegyezik, ha $h > 0$."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"What is the sign of $h$ in a backward difference formula?","hu":"Mi a $h$ jele egy visszafelé fordított különbségi képletben?"},"a":{"en":"Negative ($h < 0$).","hu":"Negatív ($h < 0$)."}},
    {"q":{"en":"If we use a 5-point formula, what is the highest degree of Lagrange polynomial being used?","hu":"Ha 5 pontos képletet használunk, melyik a használt Lagrange-polinom legmagasabb foka?"},"a":{"en":"Degree 4 ($n=4$).","hu":"4. fokozat ($n=4$)."}},
    {"q":{"en":"In Equation (7.14), what is the relationship between $h$ and the term $\\frac{e_1 - e_0}{h}$?","hu":"A (7.14) egyenletben mi a kapcsolat a $h$ és a $\\frac{e_1 - e_0}{h}$ kifejezés között?"},"a":{"en":"They are inversely proportional; as $h$ gets smaller, the term gets larger.","hu":"Ezek fordítottan arányosak; ahogy a $h$ kisebb lesz, a kifejezés nagyobb lesz."}},
    {"q":{"en":"What is the purpose of using 4-digit vs 6-digit arithmetic in Example 7.5?","hu":"Mi a célja a 4-6 számjegyű aritmetika használatának a 7.5. példában?"},"a":{"en":"To illustrate how limited precision arithmetic exacerbates rounding errors in differentiation.","hu":"Annak szemléltetésére, hogy a korlátozott pontosságú aritmetika hogyan súlyosbítja a kerekítési hibákat a differenciálás során."}},
    {"q":{"en":"Which partial derivative formula uses the values at $(x_0+2h, y_0)$, $(x_0+h, y_0)$, and $(x_0, y_0)$?","hu":"Melyik parciális derivált képlet használja a $(x_0+2h, y_0)$, $(x_0+h, y_0)$ és $(x_0, y_0)$ értékeket?"},"a":{"en":"The second-order forward difference for $\\frac{\\partial^2 f}{\\partial x^2}$.","hu":"A másodrendű előremutató különbség a $\\frac{\\partial^2 f}{\\partial x^2}$ esetében."}},
    {"q":{"en":"In Equation (7.5), the product term $\\prod_{j \\ne i} (x_i - x_j)$ for equidistant points $x_j = x_0 + jh$ will result in a power of $h$ equal to _____.","hu":"A (7.5) egyenletben a $\\prod_{j \\ne i} (x_i - x_j)$ szorzatkifejezés egyenlő távolságra lévő $x_j = x_0 + jh$ pontokra a $h$ hatványát eredményezi, amely egyenlő _____."},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"What is the coefficient of $f(x_0)$ in the fourth-order one-sided difference formula (7.10)?","hu":"Mekkora a $f(x_0)$ együtthatója a negyedrendű egyoldalú különbségi képletben (7.10)?"},"a":{"en":"$-25$","hu":"$-25$"}},
    {"q":{"en":"What is the coefficient of $f(x_0 - h)$ in the fourth-order central difference formula (7.11)?","hu":"Mekkora a $f(x_0 - h)$ együtthatója a negyedrendű központi különbségi képletben (7.11)?"},"a":{"en":"$-8$ (divided by $12h$).","hu":"$-8$ (osztva: $12h$)."}},
    {"q":{"en":"The 'centered difference' is another name for the _____ formula.","hu":"A „központú különbség” a _____ képlet másik neve."},"a":{"en":"central difference","hu":"központi különbség"}},
    {"q":{"en":"Why is it impossible to compute the term $\\frac{d}{dx}(f''(\\xi(x)))$ explicitly in Lagrange's method?","hu":"Miért lehetetlen a $\\frac{d}{dx}(f''(\\xi(x)))$ kifejezést kifejezetten kiszámítani Lagrange módszerében?"},"a":{"en":"Because the functional form of $\\xi(x)$ is generally unknown.","hu":"Mivel a $\\xi(x)$ funkcionális formája általában ismeretlen."}}
  ],
  "7_2": [
    {"q":{"en":"In the context of Richardson's extrapolation, what does the symbol $M$ represent?","hu":"A Richardson-féle extrapoláció kontextusában mit jelent a $M$ szimbólum?"},"a":{"en":"The exact value of a quantity being approximated.","hu":"Egy közelítő mennyiség pontos értéke."}},
    {"q":{"en":"What does $K(h)$ represent in the equation $M = K(h) + \\text{error}$?","hu":"Mit jelent a $K(h)$ a $M = K(h) + \\text{error}$ egyenletben?"},"a":{"en":"The numerical approximation of $M$ using step size $h$.","hu":"A $M$ numerikus közelítése $h$ lépésmérettel."}},
    {"q":{"en":"What is the standard assumption regarding the form of the truncation error in Richardson's extrapolation?","hu":"Mi a standard feltevés a csonkítási hiba formájára vonatkozóan a Richardson-féle extrapolációban?"},"a":{"en":"The error can be expanded in an even-order Taylor polynomial or power series in $h$.","hu":"A hiba a $h$ páros rendű Taylor-polinomjával vagy hatványsorral bővíthető."}},
    {"q":{"en":"If the truncation error is $a_2 h^2 + a_4 h^4 + \\dots$, what is the order of accuracy of $K(h)$?","hu":"Ha a csonkítási hiba $a_2 h^2 + a_4 h^4 + \\dots$, milyen a $K(h)$ pontossági sorrendje?"},"a":{"en":"Second-order.","hu":"Másodrendű."}},
    {"q":{"en":"How is the discretization parameter $h$ typically modified to perform the first step of Richardson's extrapolation?","hu":"Hogyan módosul a $h$ diszkretizációs paraméter a Richardson-féle extrapoláció első lépésének végrehajtására?"},"a":{"en":"It is halved to $h/2$.","hu":"Felezve $h/2$-re."}},
    {"q":{"en":"Why is $K(h/2)$ calculated in addition to $K(h)$ in Richardson's extrapolation?","hu":"Miért számítják a $K(h/2)$-t a $K(h)$ mellett a Richardson-extrapolációban?"},"a":{"en":"To combine the two results and eliminate the leading error term.","hu":"A két eredmény kombinálása és a vezető hibatag kiküszöbölése."}},
    {"q":{"en":"What factor is $K(h/2)$ multiplied by when eliminating the $h^2$ error term in a second-order approximation?","hu":"Milyen tényezővel szorozzuk meg a $K(h/2)$-t, ha kiküszöböljük a $h^2$ hibatagot egy másodrendű közelítésben?"},"a":{"en":"4","hu":"4"}},
    {"q":{"en":"Formula: The first Richardson extrapolation $K^{(1)}(h)$ for a second-order method.","hu":"Képlet: Az első Richardson-extrapoláció $K^{(1)}(h)$ egy másodrendű módszerhez."},"a":{"en":"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$","hu":"$K^{(1)}(h) = \\frac{4K(h/2) - K(h)}{3}$"}},
    {"q":{"en":"What is the order of accuracy of the extrapolated formula $K^{(1)}(h)$?","hu":"Milyen pontosságú a $K^{(1)}(h)$ extrapolált képlet?"},"a":{"en":"Fourth-order.","hu":"Negyedrendű."}},
    {"q":{"en":"In the error series for $K^{(1)}(h)$, which power of $h$ is the leading term?","hu":"A $K^{(1)}(h)$ hibasorában a $h$ melyik teljesítménye a vezető kifejezés?"},"a":{"en":"$h^4$","hu":"$h^4$"}},
    {"q":{"en":"To cancel the $h^4$ error term in $K^{(1)}(h)$, what factor must be applied to $K^{(1)}(h/2)$?","hu":"A $h^4$ hibatag törléséhez a $K^{(1)}(h)$-ben milyen tényezőt kell alkalmazni a $K^{(1)}(h/2)$-re?"},"a":{"en":"16","hu":"16"}},
    {"q":{"en":"Formula: The second Richardson extrapolation $K^{(2)}(h)$ derived from $K^{(1)}$.","hu":"Képlet: A második Richardson-extrapoláció, a $K^{(2)}(h)$, amely a $K^{(1)}$-ből származik."},"a":{"en":"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$","hu":"$K^{(2)}(h) = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$"}},
    {"q":{"en":"What is the order of accuracy of the extrapolated formula $K^{(2)}(h)$?","hu":"Milyen pontosságú a $K^{(2)}(h)$ extrapolált képlet?"},"a":{"en":"Sixth-order.","hu":"Hatodik rendű."}},
    {"q":{"en":"The general recursive formula for Richardson's extrapolation is $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$.","hu":"A Richardson-féle extrapoláció általános rekurzív képlete a $K^{(i+1)}(h) = K^{(i)}(h/2) + \\frac{K^{(i)}(h/2) - K^{(i)}(h)}{\\dots}$."},"a":{"en":"$4^{i+1} - 1$","hu":"$4^{i+1} - 1$"}},
    {"q":{"en":"In the recursive definition of Richardson's extrapolation, what is the value of the base case $K^{(0)}(h)$?","hu":"A Richardson-féle extrapoláció rekurzív definíciójában mekkora a $K^{(0)}(h)$ alapeset értéke?"},"a":{"en":"$K(h)$","hu":"$K(h)$"}},
    {"q":{"en":"Term: Richardson's extrapolation.","hu":"Fogalom: Richardson extrapolációja."},"a":{"en":"Definition: A procedure used to generate higher-order numerical approximation formulas from lower-order ones by eliminating leading error terms.","hu":"Definíció: Eljárás, amellyel magasabb rendű numerikus közelítési képleteket állítanak elő alacsonyabb rendűekből a vezető hibatagok kiküszöbölésével."}},
    {"q":{"en":"Does the central difference formula satisfy the error form requirement for standard Richardson's extrapolation?","hu":"A központi különbségi képlet kielégíti-e a standard Richardson-extrapoláció hibaforma-követelményét?"},"a":{"en":"Yes, because its Taylor expansion contains only even powers of $h$.","hu":"Igen, mert a Taylor-kiegészítője csak páros $h$-t tartalmaz."}},
    {"q":{"en":"What is the leading error term for the central difference formula $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$?","hu":"Mi a $\\frac{f(x_0 + h) - f(x_0 - h)}{2h}$ központi különbségi képlet vezető hibatagja?"},"a":{"en":"$- \\frac{f'''(x_0)}{3!}h^2$","hu":"$- \\frac{f'''(x_0)}{3!}h^2$"}},
    {"q":{"en":"In the Taylor expansion used for central differences, which powers of $h$ cancel out when subtracting $f(x_0 - h)$ from $f(x_0 + h)$?","hu":"A központi különbségekre használt Taylor-kiterjesztésben a $h$ mely hatványai érvényesülnek, ha kivonjuk a $f(x_0 - h)$-t a $f(x_0 + h)$-ből?"},"a":{"en":"The even powers ($h^0, h^2, h^4, \\dots$).","hu":"Az egyenletes teljesítmény ($h^0, h^2, h^4, \\dots$)."}},
    {"q":{"en":"When applying Richardson's extrapolation to the central difference, the resulting $K^{(1)}(h)$ formula achieves _____ order error.","hu":"Ha Richardson-féle extrapolációt alkalmazunk a központi különbségre, a kapott $K^{(1)}(h)$ képlet _____ sorrendi hibát ér el."},"a":{"en":"fourth","hu":"negyedik"}},
    {"q":{"en":"The 4th-order derivative approximation $K^{(1)}(h)$ equals $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$.","hu":"A $K^{(1)}(h)$ 4. rendű derivált közelítés megegyezik a $\\frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{\\dots}$-vel."},"a":{"en":"$6h$","hu":"$6h$"}},
    {"q":{"en":"If the error expansion of $K(h)$ contains ALL powers of $h$ ($h^1, h^2, h^3, \\dots$), what is the denominator in the first extrapolation step?","hu":"Ha a $K(h)$ hibakiterjesztése tartalmazza a $h$ ÖSSZES hatványát ($h^1, h^2, h^3, \\dots$), mi a nevező az első extrapolációs lépésben?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"In the general case where the error is $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, how is $K^{(1)}(h)$ constructed using $h$ and $h/2$?","hu":"Általános esetben, amikor a hiba $a_1 h^{\\alpha_1} + a_2 h^{\\alpha_2}$, hogyan épül fel a $K^{(1)}(h)$ a $h$ és $h/2$ használatával?"},"a":{"en":"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$","hu":"$K^{(1)}(h) = \\frac{2^{\\alpha_1}K(h/2) - K(h)}{2^{\\alpha_1} - 1}$"}},
    {"q":{"en":"True or False: Richardson's extrapolation can only be used if the error consists of even powers of $h$.","hu":"Igaz vagy hamis: Richardson extrapolációja csak akkor használható, ha a hiba $h$ páros hatványaiból áll."},"a":{"en":"False; it can be adapted for any power series error form.","hu":"Hamis; bármilyen teljesítménysoros hibaformához adaptálható."}},
    {"q":{"en":"What determines the denominator in the formula $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$?","hu":"Mi határozza meg a nevezőt a $K^{(1)} = \\frac{4K(h/2) - K(h)}{3}$ képletben?"},"a":{"en":"The ratio of the leading error terms for $h$ versus $h/2$ (specifically $2^2 - 1 = 3$).","hu":"A $h$ és a $h/2$ (különösen $2^2 - 1 = 3$) fő hibatagjainak aránya."}},
    {"q":{"en":"Starting from a 1st-order difference formula, what order approximation is produced by one step of Richardson's extrapolation?","hu":"Egy elsőrendű különbségi képletből kiindulva milyen sorrendű közelítés jön létre a Richardson-féle extrapoláció egy lépésével?"},"a":{"en":"Second-order.","hu":"Másodrendű."}},
    {"q":{"en":"According to Example 7.6, the 4th-order Richardson-extrapolated central difference is equivalent to which formula?","hu":"A 7.6. példa szerint melyik képlettel ekvivalens a 4. rendű Richardson-extrapolált központi különbség?"},"a":{"en":"Formula (7.11).","hu":"Képlet (7.11)."}},
    {"q":{"en":"What is the purpose of multiplying the $h/2$ equation by 4 in the derivation of $K^{(1)}$?","hu":"Mi a célja a $h/2$ egyenlet 4-gyel való szorzásának a $K^{(1)}$ levezetésében?"},"a":{"en":"To match the coefficient of the $a_2 h^2$ term in the original $h$ equation so it cancels out.","hu":"Hogy megfeleljen a $a_2 h^2$ kifejezés együtthatójának az eredeti $h$ egyenletben, így az érvénytelenné válik."}},
    {"q":{"en":"If $f \\in C^{2m+3}$, what is the order of the remainder term $b(h)$ in the central difference derivative expansion?","hu":"Ha $f \\in C^{2m+3}$, milyen sorrendben van a $b(h)$ maradék tag a központi differencia-derivatíva kiterjesztésében?"},"a":{"en":"$h^{2m+2}$","hu":"$h^{2m+2}$"}},
    {"q":{"en":"In the expression for $a_{2i}^{(1)}$, how is it related to the original coefficient $a_{2i}$?","hu":"A $a_{2i}^{(1)}$ kifejezésben hogyan kapcsolódik az eredeti $a_{2i}$ együtthatóhoz?"},"a":{"en":"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$","hu":"$a_{2i}^{(1)} = \\frac{1 - 4^{i-1}}{4^{i-1} \\cdot 3}a_{2i}$"}},
    {"q":{"en":"What is the primary benefit of using Richardson's extrapolation instead of simply decreasing $h$ to a very small value?","hu":"Mi az elsődleges előnye a Richardson-féle extrapoláció használatának ahelyett, hogy a $h$ értéket egyszerűen nagyon kis értékre csökkentené?"},"a":{"en":"It achieves high accuracy with larger step sizes, potentially avoiding round-off errors and reducing computational cost.","hu":"Nagy pontosságot ér el nagyobb lépésméretekkel, így elkerülhető a kerekítési hibák és csökkennek a számítási költségek."}},
    {"q":{"en":"In the formula $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$, where does the number 15 come from?","hu":"A $K^{(2)} = \\frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}$ képletben honnan származik a 15-ös szám?"},"a":{"en":"It is $4^2 - 1$ (the ratio of $h^4$ to $(h/2)^4$ minus 1).","hu":"Ez $4^2 - 1$ (a $h^4$ és $(h/2)^4$ aránya mínusz 1)."}},
    {"q":{"en":"Which specific differentiation formula is used as the starting point for the Richardson examples in the text?","hu":"Melyik konkrét megkülönböztetési képletet használjuk a szövegben a Richardson-példák kiindulópontjaként?"},"a":{"en":"The central difference formula.","hu":"A központi különbség képlete."}},
    {"q":{"en":"What is the result of applying Richardson's extrapolation to a sequence of approximations that does not have a structured error expansion?","hu":"Mi az eredménye, ha Richardson extrapolációját alkalmazzuk egy olyan közelítéssorozatra, amely nem rendelkezik strukturált hibakiterjesztéssel?"},"a":{"en":"The method may fail to improve accuracy or could even decrease it.","hu":"Előfordulhat, hogy a módszer nem javítja a pontosságot, vagy akár csökkentheti is."}},
    {"q":{"en":"Concept: Truncation error.","hu":"Koncepció: Csonkolási hiba."},"a":{"en":"Definition: The error made by truncating an infinite process (like a Taylor series) to a finite one.","hu":"Definíció: Egy végtelen folyamat (például egy Taylor-sorozat) végessé csonkolásával okozott hiba."}},
    {"q":{"en":"What is the value of $m$ in the term $a_{2m} h^{2m}$ if we want to reach a tenth-order approximation?","hu":"Mennyi a $m$ értéke a $a_{2m} h^{2m}$ kifejezésben, ha tizedrendű közelítést akarunk elérni?"},"a":{"en":"5","hu":"5"}},
    {"q":{"en":"Cloze: To derive a third-order approximation from a first-order one, the leading error term must be proportional to _____.","hu":"Bezárás: Ahhoz, hogy egy elsőrendű közelítésből harmadrendű közelítést lehessen levezetni, a vezető hibatagnak arányosnak kell lennie _____-val."},"a":{"en":"$h^1$ (or $h^2$ for the second step)","hu":"$h^1$ (vagy $h^2$ a második lépéshez)"}},
    {"q":{"en":"How does the complexity of the approximation formula $K^{(i)}(h)$ change as $i$ increases?","hu":"Hogyan változik a $K^{(i)}(h)$ közelítési képlet összetettsége a $i$ növekedésével?"},"a":{"en":"It involves more function evaluations at different step sizes ($h, h/2, h/4, \\dots$).","hu":"Több funkcióértékelést foglal magában különböző lépésméretekben ($h, h/2, h/4, \\dots$)."}},
    {"q":{"en":"Formula: The general error bound for $b(h)$ in the second-order case.","hu":"Képlet: A $b(h)$ általános hibája másodrendű esetben."},"a":{"en":"$|b(h)| \\le B h^{2m+2}$","hu":"$|b(h)| \\le B h^{2m+2}$"}},
    {"q":{"en":"If $M$ is being approximated, $K(h)$ is the approximation, and $E(h)$ is the error, what is the basic identity used?","hu":"Ha a $M$-t közelítjük, a $K(h)$ a közelítést, és a $E(h)$ a hibát, akkor mi az alapvető azonosság?"},"a":{"en":"$M = K(h) + E(h)$","hu":"$M = K(h) + E(h)$"}},
    {"q":{"en":"Why is the central difference formula referred to as 'másodrendű' in the Hungarian text?","hu":"Miért emlegetik a magyar szövegben „másodrendű”-ként a központi különbségképletet?"},"a":{"en":"Because its error is proportional to $h^2$ (second-order).","hu":"Mert a hibája arányos a $h^2$-vel (másodrendű)."}},
    {"q":{"en":"In the exercise to derive a 6th-order formula for $f'(0)$ where $f(x) = e^{x} \\sin x$, what is the starting step size $h$?","hu":"A gyakorlatban a $f'(0)$ 6. rendű képletének levezetésére, ahol $f(x) = e^{x} \\sin x$, mekkora a kezdő lépés mérete $h$?"},"a":{"en":"0.25","hu":"0,25"}},
    {"q":{"en":"The general case formula uses integers $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$. What does $\\alpha_i$ represent?","hu":"Az általános esetképlet $1 \\le \\alpha_1 < \\alpha_2 < \\dots < \\alpha_m$ egész számokat használ. Mit jelent a $\\alpha_i$?"},"a":{"en":"The powers of $h$ present in the error expansion.","hu":"A $h$ képességei jelen vannak a hibakiterjesztésben."}},
    {"q":{"en":"If the error expansion is $M = K(h) + a_1 h + a_2 h^2 + \\dots$, the first extrapolated value $K^{(1)}(h)$ is _____.","hu":"Ha a hibakiterjesztés $M = K(h) + a_1 h + a_2 h^2 + \\dots$, akkor az első extrapolált $K^{(1)}(h)$ érték _____."},"a":{"en":"$2K(h/2) - K(h)$","hu":"$2K(h/2) - K(h)$"}},
    {"q":{"en":"In the central difference expansion, what is the coefficient of the $h^4$ term ($a_4$)?","hu":"A központi különbség-kiterjesztésben mekkora a $h^4$ tag ($a_4$) együtthatója?"},"a":{"en":"$- \\frac{f^{(5)}(x_0)}{5!}$","hu":"$- \\frac{f^{(5)}(x_0)}{5!}$"}},
    {"q":{"en":"What happens to the coefficients $a_{2i}$ of the remaining error terms after one step of Richardson's extrapolation?","hu":"Mi történik a fennmaradó hibatagok $a_{2i}$ együtthatóival a Richardson-féle extrapoláció egy lépése után?"},"a":{"en":"They are transformed into new coefficients $a_{2i}^{(1)}$.","hu":"Ezek új együtthatókká alakulnak, $a_{2i}^{(1)}$."}},
    {"q":{"en":"The Richardson procedure can be viewed as a linear combination of _____ at different scales.","hu":"A Richardson-eljárás a _____ lineáris kombinációjaként fogható fel különböző skálákon."},"a":{"en":"approximations","hu":"közelítések"}},
    {"q":{"en":"Formula: The relation for $M$ after the second-order term is cancelled.","hu":"Képlet: A $M$ relációja a másodrendű tag után törlődik."},"a":{"en":"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$","hu":"$M = \\frac{4K(h/2) - K(h)}{3} + O(h^4)$"}},
    {"q":{"en":"Is Richardson's extrapolation limited to derivatives?","hu":"A Richardson-féle extrapoláció a származékokra korlátozódik?"},"a":{"en":"No, it can be applied to integrals (Romberg integration) or any numerical limit process with a known error structure.","hu":"Nem, alkalmazható integrálokra (Romberg-integráció) vagy bármely ismert hibastruktúrájú numerikus határfolyamatra."}},
    {"q":{"en":"What is the constant $B$ in the error bound $|b(h)| \\le B h^{2m+2}$?","hu":"Mi a $B$ konstans a $|b(h)| \\le B h^{2m+2}$ hibakorlátban?"},"a":{"en":"A positive constant independent of $h$ that bounds the higher-order terms.","hu":"A $h$-től független pozitív állandó, amely a magasabb rendű tagokat korlátozza."}},
    {"q":{"en":"In the context of Exercise 4, what is the order of the 'one-sided difference' formula?","hu":"A 4. gyakorlat összefüggésében milyen sorrendben jelenik meg az „egyoldalú különbség” képlet?"},"a":{"en":"First-order.","hu":"Elsőrendű."}},
    {"q":{"en":"If $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ requires $K(h/2)$, how many $h$ values does $K^{(2)}(h)$ require?","hu":"Ha a $K^{(0)}(h) = K(h)$, $K^{(1)}(h)$ $K(h/2)$-t igényli, hány $h$ értéket igényel a $K^{(2)}(h)$?"},"a":{"en":"Three: $h, h/2, h/4$.","hu":"Három: $h, h/2, h/4$."}},
    {"q":{"en":"Cloze: The procedure of Richardson's extrapolation generates a _____ of approximations of increasing order.","hu":"Cloze: A Richardson-féle extrapolációs eljárás növekvő sorrendű közelítések _____-ját generálja."},"a":{"en":"sequence","hu":"sorrend"}},
    {"q":{"en":"What is the denominator of the third extrapolation step $K^{(3)}$ if the error only has even powers?","hu":"Mi a nevezője a $K^{(3)}$ harmadik extrapolációs lépésnek, ha a hibának csak páros hatványa van?"},"a":{"en":"63 ($4^3 - 1$)","hu":"63 ($4^3 - 1$)"}},
    {"q":{"en":"How does halving the step size twice ($h \\to h/2 \\to h/4$) assist in reaching a 6th-order approximation?","hu":"Hogyan segíti a lépésméret kétszeres felezése ($h \\to h/2 \\to h/4$) a hatodrendű közelítés elérését?"},"a":{"en":"It provides enough data points to eliminate both the $h^2$ and $h^4$ error terms.","hu":"Elegendő adatpontot biztosít a $h^2$ és a $h^4$ hibakifejezések kiküszöböléséhez."}},
    {"q":{"en":"In the derivation of $K^{(1)}$, why is $M$ multiplied by 4 on the left side of the intermediate step?","hu":"A $K^{(1)}$ levezetésében miért van a $M$ 4-gyel szorozva a közbenső lépés bal oldalán?"},"a":{"en":"Because the entire equation for $h/2$ was multiplied by 4.","hu":"Mivel a $h/2$ teljes egyenletét megszorozták 4-gyel."}},
    {"q":{"en":"What is the leading error term of $K^{(2)}(h)$?","hu":"Mi a $K^{(2)}(h)$ fő hibatagja?"},"a":{"en":"$a_6^{(2)} h^6$","hu":"$a_6^{(2)} h^6$"}}
  ],
  "7_3": [
    {"q":{"en":"In the definition of the definite integral, what is the 'norm' of a partition $a = x_0 < x_1 < \\dots < x_n = b$?","hu":"A határozott integrál definíciójában mi a $a = x_0 < x_1 < \\dots < x_n = b$ partíció 'normája'?"},"a":{"en":"The maximum length of the subintervals, defined as $\\max\\{x_i - x_{i-1} : i = 1, \\dots, n\\}$.","hu":"A részintervallumok maximális hossza, $\\max\\{x_i - x_{i-1}: i = 1, \\dots, n\\}$."}},
    {"q":{"en":"Formula: Midpoint Rule (also known as the Rectangle Rule) for numerical integration","hu":"Képlet: Középpontszabály (más néven téglalapszabály) a numerikus integrációhoz"},"a":{"en":"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$","hu":"$\\int_a^b f(x) \\, dx \\approx \\frac{b - a}{n} \\sum_{i=1}^{n} f\\left(\\frac{x_{i-1} + x_i}{2}\\right)$"}},
    {"q":{"en":"What is the underlying approach of the Lagrange method for deriving numerical integration formulas?","hu":"Mi a Lagrange-módszer alapja a numerikus integrációs képletek származtatására?"},"a":{"en":"Approximating the function $f$ with its Lagrange interpolating polynomial $L_n$ and then integrating $L_n$.","hu":"A $f$ függvény közelítése a $L_n$ Lagrange interpoláló polinomjával, majd a $L_n$ integrálása."}},
    {"q":{"en":"In numerical integration, what is a 'quadrature formula'?","hu":"Mit jelent a numerikus integrációban a „kvadratúra képlet”?"},"a":{"en":"A formula that approximates a definite integral as a weighted sum of function values: $\\sum_{k=0}^{n} c_k f(x_k)$.","hu":"Egy meghatározott integrált függvényértékek súlyozott összegeként közelítő képlet: $\\sum_{k=0}^{n} c_k f(x_k)$."}},
    {"q":{"en":"How are the weights $c_k$ defined in a Newton-Cotes quadrature formula?","hu":"Hogyan definiálhatók a $c_k$ súlyok a Newton-Cotes kvadratúra képletben?"},"a":{"en":"$c_k = \\int_a^b l_k(x) \\, dx$, where $l_k(x)$ is the $k$-th Lagrange basis polynomial.","hu":"$c_k = \\int_a^b l_k(x) \\, dx$, ahol a $l_k(x)$ a $k$-edik Lagrange-alappolinom."}},
    {"q":{"en":"What distinguishes a 'closed' Newton-Cotes formula from an 'open' one?","hu":"Mi különbözteti meg a „zárt” Newton-Cotes-képletet a „nyitott”-tól?"},"a":{"en":"Closed formulas include the endpoints $a$ and $b$ as mesh points, while open formulas only use points within the open interval $(a, b)$.","hu":"A zárt képletek a $a$ és $b$ végpontokat tartalmazzák hálópontként, míg a nyitott képletek csak a $(a, b)$ nyitott intervallumon belüli pontokat használják."}},
    {"q":{"en":"What is the 'degree of precision' of a quadrature formula?","hu":"Mi a kvadratúra képlet „pontossági foka”?"},"a":{"en":"The highest integer $n$ such that the formula gives the exact integral for all polynomials of degree $\\le n$.","hu":"A $n$ legmagasabb egész szám úgy, hogy a formula megadja a pontos integrált minden $\\le n$ fokú polinomhoz."}},
    {"q":{"en":"What is the minimum degree of precision for an $(n+1)$-point Newton-Cotes formula?","hu":"Mi a minimális pontosság egy $(n+1)$-pontú Newton-Cotes képlethez?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"For which values of $n$ do Newton-Cotes formulas provide an extra degree of precision (exact for polynomials of degree $n+1$)?","hu":"A $n$ mely értékeihez biztosítanak a Newton-Cotes képletek extra pontosságot (pontosan a $n+1$ fokú polinomokra)?"},"a":{"en":"Even values of $n$.","hu":"$n$ páros értékei."}},
    {"q":{"en":"Formula: Elementary Trapezoidal Rule","hu":"Képlet: elemi trapézszabály"},"a":{"en":"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, where $h = b - a$.","hu":"$\\int_a^b f(x) \\, dx \\approx \\frac{h}{2}(f(a) + f(b))$, ahol $h = b - a$."}},
    {"q":{"en":"What is the error term for the elementary Trapezoidal rule?","hu":"Mi az elemi trapézszabály hibatagja?"},"a":{"en":"$-\\frac{h^3}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$.","hu":"$-\\frac{h^3}{12}f''(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},
    {"q":{"en":"What is the geometric interpretation of the Trapezoidal rule?","hu":"Mi a trapézszabály geometriai értelmezése?"},"a":{"en":"The integral is approximated by the area of the trapezoid formed by the secant line connecting $(a, f(a))$ and $(b, f(b))$.","hu":"Az integrált a $(a, f(a))$-t és a $(b, f(b))$-t összekötő metszővonal alkotta trapéz területe közelíti meg."}},
    {"q":{"en":"Formula: Composite Trapezoidal Rule for $n$ subintervals of length $h$","hu":"Képlet: Összetett trapézszabály a $n$ $h$ hosszúságú részintervallumokhoz"},"a":{"en":"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$","hu":"$\\frac{h}{2}\\left(f(x_0) + 2\\sum_{i=1}^{n-1} f(x_i) + f(x_n)\\right)$"}},
    {"q":{"en":"What is the error term for the composite Trapezoidal rule?","hu":"Mi az összetett trapézszabály hibatagja?"},"a":{"en":"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ for some $\\xi \\in (a, b)$.","hu":"$-\\frac{(b - a)h^2}{12}f''(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},
    {"q":{"en":"If the step size $h$ is halved in the composite Trapezoidal rule, by what factor does the error approximately decrease?","hu":"Ha az összetett trapézszabályban a $h$ lépésméretet felére csökkentjük, milyen tényezővel csökken a hiba megközelítőleg?"},"a":{"en":"One quarter (indicating quadratic error in $h$).","hu":"Egy negyed (a $h$ négyzetes hibáját jelzi)."}},
    {"q":{"en":"According to the Intermediate Value Theorem for integrals, what condition must $g(x)$ meet for $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ to hold?","hu":"Az integrálok köztes értéktétele szerint milyen feltételnek kell megfelelnie a $g(x)$-nek ahhoz, hogy a $\\int_a^b f(x)g(x) \\, dx = f(\\xi)\\int_a^b g(x) \\, dx$ teljesüljön?"},"a":{"en":"$g(x)$ must be integrable and not change sign on the interval $[a, b]$.","hu":"A $g(x)$-nek integrálhatónak kell lennie, és nem szabad előjelet változtatnia a $[a, b]$ intervallumon."}},
    {"q":{"en":"For the closed Newton-Cotes formula with $n=2$ (Simpson's rule), what is the relationship between $x_0, x_1, x_2$ and $h$?","hu":"A $n=2$ (Simpson-szabály) zárt Newton-Cotes-képlet esetében mi a kapcsolat a $x_0, x_1, x_2$ és a $h$ között?"},"a":{"en":"$x_0 = a$, $x_1 = a + h$, $x_2 = b$, and $h = (b - a)/2$.","hu":"$x_0 = a$, $x_1 = a + h$, $x_2 = b$ és $h = (b - a)/2$."}},
    {"q":{"en":"Formula: Elementary Simpson's Rule","hu":"Képlet: Simpson elemi szabálya"},"a":{"en":"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$","hu":"$\\int_{x_0}^{x_2} f(x) \\, dx \\approx \\frac{h}{3}(f(x_0) + 4f(x_1) + f(x_2))$"}},
    {"q":{"en":"What is the error term for the elementary Simpson's rule?","hu":"Mi a hibatag az elemi Simpson-szabályhoz?"},"a":{"en":"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ for some $\\eta \\in (x_0, x_2)$.","hu":"$-\\frac{h^5}{90}f^{(4)}(\\eta)$ néhány $\\eta \\in (x_0, x_2)$-hez."}},
    {"q":{"en":"Why is Simpson's rule exact for polynomials of degree 3 even though it is based on quadratic interpolation?","hu":"Miért pontos a Simpson-szabály a 3. fokú polinomokra, noha másodfokú interpoláción alapul?"},"a":{"en":"Because for even $n$, Newton-Cotes formulas have a higher degree of precision ($n+1$).","hu":"Mert még a $n$ esetében is a Newton-Cotes képletek nagyobb pontosságúak ($n+1$)."}},
    {"q":{"en":"What is the degree of precision of Simpson's rule?","hu":"Mennyi a Simpson-szabály pontossági foka?"},"a":{"en":"$3$","hu":"$3$"}},
    {"q":{"en":"What is the requirement for the number of subintervals in the composite Simpson's rule?","hu":"Mi a követelmény a részintervallumok számára az összetett Simpson-szabályban?"},"a":{"en":"The interval must be divided into an even number of equal parts ($2n$).","hu":"Az intervallumot páros számú egyenlő részre kell felosztani ($2n$)."}},
    {"q":{"en":"Formula: Composite Simpson's Rule for $2n$ subintervals of length $h$","hu":"Képlet: Összetett Simpson-szabály a $2n$ $h$ hosszúságú részintervallumokra"},"a":{"en":"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$","hu":"$\\frac{h}{3}\\left(f(x_0) + 4\\sum_{i=1}^{n} f(x_{2i-1}) + 2\\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\\right)$"}},
    {"q":{"en":"What is the error term for the composite Simpson's rule?","hu":"Mi az összetett Simpson-szabály hibatagja?"},"a":{"en":"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ for some $\\xi \\in (a, b)$.","hu":"$-\\frac{(b - a)h^4}{180}f^{(4)}(\\xi)$ néhány $\\xi \\in (a, b)$-hez."}},
    {"q":{"en":"Formula: Simpson's $\\frac{3}{8}$ Rule","hu":"Képlet: Simpson $\\frac{3}{8}$ szabálya"},"a":{"en":"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$","hu":"$\\int_{x_0}^{x_3} f(x) \\, dx \\approx \\frac{3h}{8}(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3))$"}},
    {"q":{"en":"What is the degree of precision for the Simpson's $\\frac{3}{8}$ rule?","hu":"Mekkora a Simpson-féle $\\frac{3}{8}$ szabály pontossági foka?"},"a":{"en":"$3$ (since $n=3$ is odd, precision is $n$).","hu":"$3$ (mivel a $n=3$ páratlan, a pontosság $n$)."}},
    {"q":{"en":"Formula: Closed Newton-Cotes formula for $n=4$","hu":"Képlet: $n=4$ zárt Newton-Cotes formula"},"a":{"en":"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$","hu":"$\\frac{2h}{45}(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4))$"}},
    {"q":{"en":"What is the error term for the $n=4$ closed Newton-Cotes formula?","hu":"Mi a $n=4$ zárt Newton-Cotes képlet hibakifejezése?"},"a":{"en":"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$","hu":"$-\\frac{8h^7}{945}f^{(6)}(\\xi)$"}},
    {"q":{"en":"Formula: Open Newton-Cotes formula for $n=0$ over interval $[x_{-1}, x_1]$ (Midpoint Rule)","hu":"Képlet: Nyissa meg a Newton-Cotes képletet a $n=0$-hez a $[x_{-1}, x_1]$ intervallumon (középpont szabály)"},"a":{"en":"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$","hu":"$2hf(x_0) + \\frac{h^3}{3}f''(\\xi)$"}},
    {"q":{"en":"Formula: Open Newton-Cotes formula for $n=1$ over interval $[x_{-1}, x_2]$ using points $x_0, x_1$","hu":"Képlet: Nyissa meg a Newton-Cotes képletet a $n=1$ számára a $[x_{-1}, x_2]$ intervallum felett a $x_0, x_1$ pontok használatával"},"a":{"en":"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$","hu":"$\\frac{3h}{2}(f(x_0) + f(x_1)) + \\frac{3h^3}{4}f''(\\xi)$"}},
    {"q":{"en":"Formula: Open Newton-Cotes formula for $n=2$ over interval $[x_{-1}, x_3]$ using points $x_0, x_1, x_2$","hu":"Képlet: Nyissa meg a Newton-Cotes képletet a $n=2$ számára a $[x_{-1}, x_3]$ intervallum felett a $x_0, x_1, x_2$ pontok használatával"},"a":{"en":"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$","hu":"$\\frac{4h}{3}(2f(x_0) - f(x_1) + 2f(x_2)) + \\frac{14h^5}{45}f^{(4)}(\\xi)$"}},
    {"q":{"en":"Formula: Open Newton-Cotes formula for $n=3$ over interval $[x_{-1}, x_4]$ using points $x_0, x_1, x_2, x_3$","hu":"Képlet: Nyissa meg a Newton-Cotes képletet a $n=3$ számára a $[x_{-1}, x_4]$ intervallum felett a $x_0, x_1, x_2, x_3$ pontok használatával"},"a":{"en":"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$","hu":"$\\frac{5h}{24}(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)) + \\frac{95h^5}{144}f^{(4)}(\\xi)$"}},
    {"q":{"en":"What two conditions must a quadrature formula meet to be considered stable according to Theorem 7.9?","hu":"Milyen két feltételnek kell teljesülnie egy kvadratúra képletnek ahhoz, hogy a 7.9. Tétel szerint stabilnak tekinthető?"},"a":{"en":"The formula must be exact for constant functions and all coefficients $c_i$ must be positive.","hu":"A képletnek pontosnak kell lennie az állandó függvényekre, és minden együtthatónak pozitívnak kell lennie."}},
    {"q":{"en":"If function value errors are bounded by $|y_i - f(x_i)| \\le \\varepsilon$, what is the stability bound for a stable quadrature formula?","hu":"Ha a függvényérték hibáit $|y_i - f(x_i)| \\le \\varepsilon$ határolja, mi a korlátos stabilitás egy stabil kvadratúra képlethez?"},"a":{"en":"$\\varepsilon(b - a)$","hu":"$\\varepsilon(b - a)$"}},
    {"q":{"en":"What is the sum of the weights $\\sum c_i$ in any quadrature formula that is exact for constant functions over $[a, b]$?","hu":"Mennyi a $\\sum c_i$ súlyok összege bármely olyan kvadratúra képletben, amely pontos a $[a, b]$ konstans függvényekre?"},"a":{"en":"$b - a$","hu":"$b - a$"}},
    {"q":{"en":"Why are most standard quadrature formulas (like Trapezoidal or Simpson's) considered numerically stable?","hu":"Miért tekinthető a legtöbb szabványos kvadratúra képlet (például a trapéz vagy a Simpson-képlet) numerikusan stabilnak?"},"a":{"en":"They utilize positive weights and are exact for constant functions.","hu":"Pozitív súlyokat használnak, és pontosak az állandó funkciókhoz."}},
    {"q":{"en":"The error of the composite Simpson's rule is proportional to which power of the step size $h$?","hu":"Az összetett Simpson-szabály hibája a $h$ lépésnagyság melyik hatványával arányos?"},"a":{"en":"$h^4$","hu":"$h^4$"}},
    {"q":{"en":"Which Newton-Cotes formula is characterized by weights following the pattern $1, 4, 1$?","hu":"Melyik Newton-Cotes képletre jellemzőek a $1, 4, 1$ mintát követő súlyok?"},"a":{"en":"Simpson's Rule","hu":"Simpson szabálya"}},
    {"q":{"en":"The error of the composite Trapezoidal rule is proportional to which power of the step size $h$?","hu":"Az összetett trapézszabály hibája a $h$ lépésnagyság melyik hatványával arányos?"},"a":{"en":"$h^2$","hu":"$h^2$"}},
    {"q":{"en":"How does the error of the composite Simpson's rule respond if the step size $h$ is reduced to $1/2$?","hu":"Hogyan reagál az összetett Simpson-szabály hibája, ha a $h$ lépésméretet $1/2$-re csökkentjük?"},"a":{"en":"The error is reduced to approximately $1/16$ of its original value.","hu":"A hiba körülbelül az eredeti érték $1/16$-ére csökken."}}
  ],
  "7_4": [
    {"q":{"en":"What is the general form of an $n$-point quadrature formula for the integral $\\int_a^b f(x)\\,dx$?","hu":"Mi a $n$-pontú kvadratúra képlet általános formája a $\\int_a^b f(x)\\,dx$ integrálhoz?"},"a":{"en":"$\\sum_{i=1}^{n} c_i f(x_i)$","hu":"$\\sum_{i=1}^{n} c_i f(x_i)$"}},
    {"q":{"en":"A quadrature formula is exact for polynomials of degree at most $m$ if and only if it is exact for all _____ $x^i$ where $i = 0, 1, \\ldots, m$.","hu":"A kvadratúra képlet akkor és csak akkor pontos a legfeljebb $m$ fokszámú polinomokra, ha minden _____ $x^i$ esetén pontos, ahol $i = 0, 1, \\ldots, m$."},"a":{"en":"monomials","hu":"monomiálisok"}},
    {"q":{"en":"How many parameters ($c_i$ and $x_i$) are contained in a general $n$-point quadrature formula?","hu":"Hány paramétert ($c_i$ és $x_i$) tartalmaz egy általános $n$-pont kvadratúra képlet?"},"a":{"en":"$2n$","hu":"$2n$"}},
    {"q":{"en":"What is the maximum degree of a polynomial for which an $n$-point Gaussian quadrature formula can be exact?","hu":"Mekkora a polinom maximális foka, amelyre a $n$-pont Gauss-négyzetképlet pontos lehet?"},"a":{"en":"$2n - 1$","hu":"$2n - 1$"}},
    {"q":{"en":"To find the parameters of an $n$-point Gaussian quadrature formula, one must solve a system of $2n$ _____ equations.","hu":"A $n$-pont Gauss-négyzetes képlet paramétereinek megtalálásához meg kell oldani egy $2n$ _____ egyenletrendszert."},"a":{"en":"nonlinear","hu":"nemlineáris"}},
    {"q":{"en":"In a 2-point Gaussian quadrature formula on the interval $[-1, 1]$, what are the values of the weights $c_1$ and $c_2$?","hu":"Mekkora a $c_1$ és $c_2$ súlyok értéke egy 2 pontos Gauss-kvadratúra képletben a $[-1, 1]$ intervallumon?"},"a":{"en":"$c_1 = 1, c_2 = 1$","hu":"$c_1 = 1, c_2 = 1$"}},
    {"q":{"en":"What are the nodes $x_1$ and $x_2$ for a 2-point Gaussian quadrature formula on $[-1, 1]$?","hu":"Melyek a $x_1$ és $x_2$ csomópontok a $[-1, 1]$ kétpontos Gauss-kvadratúra képletéhez?"},"a":{"en":"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$","hu":"$x_1 = -\\frac{\\sqrt{3}}{3}, x_2 = \\frac{\\sqrt{3}}{3}$"}},
    {"q":{"en":"What is the 2-point Gaussian quadrature formula for the interval $[-1, 1]$?","hu":"Mi a 2 pontos Gauss-kvadratúra képlet a $[-1, 1]$ intervallumhoz?"},"a":{"en":"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$","hu":"$\\int_{-1}^{1} f(x)\\,dx \\approx f(-\\frac{\\sqrt{3}}{3}) + f(\\frac{\\sqrt{3}}{3})$"}},
    {"q":{"en":"Under what condition are two functions $f$ and $g$ considered orthogonal on the interval $[a, b]$?","hu":"Milyen feltételek mellett tekintendő a $f$ és a $g$ két függvény ortogonálisnak a $[a, b]$ intervallumon?"},"a":{"en":"$\\int_a^b f(x)g(x)\\,dx = 0$","hu":"$\\int_a^b f(x)g(x)\\,dx = 0$"}},
    {"q":{"en":"The sequence of polynomials $(P_i)$ that are pairwise orthogonal on $[-1, 1]$ where $P_i$ has degree $i$ are called _____ polynomials.","hu":"A $(P_i)$ polinomok sorozatát, amelyek páronként merőlegesek a $[-1, 1]$-n, ahol a $P_i$ foka $i$, _____ polinomoknak nevezzük."},"a":{"en":"Legendre","hu":"Legendre"}},
    {"q":{"en":"What is the first Legendre polynomial, $P_0(x)$?","hu":"Mi az első Legendre-polinom, $P_0(x)$?"},"a":{"en":"$1$","hu":"$1$"}},
    {"q":{"en":"What is the second Legendre polynomial, $P_1(x)$?","hu":"Mi a második Legendre-polinom, a $P_1(x)$?"},"a":{"en":"$x$","hu":"$x$"}},
    {"q":{"en":"What method is used to construct the sequence of orthogonal Legendre polynomials?","hu":"Milyen módszerrel állítjuk össze az ortogonális Legendre-polinomok sorozatát?"},"a":{"en":"Gram-Schmidt orthogonalization","hu":"Gram-Schmidt ortogonalizáció"}},
    {"q":{"en":"In the Gram-Schmidt process for Legendre polynomials, $P_{i+1}(x)$ is sought in the form $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$. How is $a_{i+1,j}$ calculated?","hu":"A Gram-Schmidt eljárásban a Legendre-polinomokhoz a $P_{i+1}(x)$-t $x^{i+1} + \\sum_{j=0}^{i} a_{i+1,j} P_j(x)$ formában kell keresni. Hogyan történik a $a_{i+1,j}$ kiszámítása?"},"a":{"en":"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$","hu":"$a_{i+1,j} = -\\frac{\\int_{-1}^{1} x^{i+1} P_j(x)\\,dx}{\\int_{-1}^{1} P_j^2(x)\\,dx}$"}},
    {"q":{"en":"What is the specific formula for the Legendre polynomial $P_2(x)$?","hu":"Mi a $P_2(x)$ Legendre-polinom konkrét képlete?"},"a":{"en":"$x^2 - \\frac{1}{3}$","hu":"$x^2 - \\frac{1}{3}$"}},
    {"q":{"en":"What is the specific formula for the Legendre polynomial $P_3(x)$?","hu":"Mi a $P_3(x)$ Legendre-polinom konkrét képlete?"},"a":{"en":"$x^3 - \\frac{3}{5}x$","hu":"$x^3 - \\frac{3}{5}x$"}},
    {"q":{"en":"What is the specific formula for the Legendre polynomial $P_4(x)$?","hu":"Mi a $P_4(x)$ Legendre-polinom konkrét képlete?"},"a":{"en":"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$","hu":"$x^4 - \\frac{6}{7}x^2 + \\frac{3}{35}$"}},
    {"q":{"en":"Which recurrence relation do Legendre polynomials satisfy?","hu":"Melyik ismétlődési relációnak felelnek meg a Legendre-polinomok?"},"a":{"en":"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$","hu":"$P_{n+1}(x) = xP_n(x) - \\frac{n^2}{4n^2 - 1}P_{n-1}(x)$"}},
    {"q":{"en":"Property of Legendre polynomials: $P_i$ is orthogonal to any polynomial of degree at most _____.","hu":"Legendre-polinomok tulajdonságai: $P_i$ ortogonális bármely legfeljebb _____ fokú polinomra."},"a":{"en":"$i - 1$","hu":"$i - 1$"}},
    {"q":{"en":"How does the parity of the Legendre polynomial $P_i$ relate to the index $i$?","hu":"Hogyan viszonyul a $P_i$ Legendre-polinom paritása a $i$ indexhez?"},"a":{"en":"It is even if $i$ is even and odd if $i$ is odd.","hu":"Még akkor is, ha a $i$ páros, és páratlan, ha a $i$ páratlan."}},
    {"q":{"en":"How many distinct real roots does the $n$th Legendre polynomial $P_n$ have in the interval $(-1, 1)$?","hu":"Hány különböző valós gyöke van a $n$th Legendre polinomnak, a $P_n$ a $(-1, 1)$ intervallumban?"},"a":{"en":"$n$","hu":"$n$"}},
    {"q":{"en":"What is the geometric distribution of the roots of a Legendre polynomial relative to the origin?","hu":"Mi a Legendre-polinom gyökeinek geometriai eloszlása ​​az origóhoz képest?"},"a":{"en":"The roots are symmetric to the origin.","hu":"A gyökerek az eredetre szimmetrikusak."}},
    {"q":{"en":"The nodes $x_1, \\dots, x_n$ of the $n$-point Gaussian quadrature formula are the roots of which polynomial?","hu":"Melyik polinom gyökerei a $n$-pont Gauss-négyzetes képlet $x_1, \\dots, x_n$ csomópontjai?"},"a":{"en":"The $n$th-order Legendre polynomial $P_n$","hu":"A $n$-edrendű Legendre polinom $P_n$"}},
    {"q":{"en":"What is the required differentiability class for a function $f$ to apply the Gaussian quadrature truncation error formula involving $f^{(2n)}$?","hu":"Milyen differenciálhatósági osztály szükséges a $f$ függvénynek a Gauss-féle kvadratúra csonkítási hibaképlet alkalmazásához a $f^{(2n)}$-vel?"},"a":{"en":"$C^{2n}[a, b]$","hu":"$C^{2n}[a, b]$"}},
    {"q":{"en":"What is the truncation error formula for the $n$-point Gaussian quadrature on $[-1, 1]$?","hu":"Mi a csonkítási hiba képlete a $n$-pont Gauss-kvadratúrához a $[-1, 1]$-n?"},"a":{"en":"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$","hu":"$\\frac{f^{(2n)}(\\xi)}{(2n)!}\\int_{-1}^{1} P_n^2(x)\\,dx$"}},
    {"q":{"en":"What is the approximate form of the Gaussian quadrature error term if $f^{(2n)}$ is bounded?","hu":"Mi a Gauss-kvadratúra hibatag közelítő alakja, ha a $f^{(2n)}$ korlátos?"},"a":{"en":"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$","hu":"$\\frac{\\pi f^{(2n)}(\\xi)}{4^n (2n)!}$"}},
    {"q":{"en":"As $n \\to \\infty$, the error of Gaussian quadrature tends to zero at a(n) _____ speed.","hu":"$n \\to \\infty$-ként a Gauss-kvadratúra hibája nullára hajlik a(n) _____ sebességnél."},"a":{"en":"exponential","hu":"exponenciális"}},
    {"q":{"en":"How does the convergence speed of Gaussian quadrature compare to Newton-Cotes formulas as $n \\to \\infty$?","hu":"Hogyan viszonyul a Gauss-kvadratúra konvergenciasebessége a Newton-Cotes-képletekhez, mint a $n \\to \\infty$?"},"a":{"en":"Gaussian is exponential; Newton-Cotes is only polynomial.","hu":"Gauss exponenciális; Newton-Cotes csak polinom."}},
    {"q":{"en":"For $n=3$, what is the root $x_i$ located at the origin?","hu":"$n=3$ esetén mi a $x_i$ gyökér az origóban?"},"a":{"en":"$0.0000000000$","hu":"$0.0000000000$"}},
    {"q":{"en":"For $n=3$, what is the weight $c_i$ corresponding to the node $x=0$?","hu":"$n=3$ esetén mekkora a $c_i$ súlya a $x=0$ csomópontnak?"},"a":{"en":"$0.8888888889$ (or $\\frac{8}{9}$)","hu":"$0.8888888889$ (vagy $\\frac{8}{9}$)"}},
    {"q":{"en":"In the 3-point Gaussian formula, what is the value of the weights for the nodes $\\pm 0.7745966692$?","hu":"A 3 pontos Gauss-képletben mekkora a súlyok értéke a $\\pm 0.7745966692$ csomópontokhoz?"},"a":{"en":"$0.5555555556$ (or $\\frac{5}{9}$)","hu":"$0.5555555556$ (vagy $\\frac{5}{9}$)"}},
    {"q":{"en":"What substitution is used to transform the integral $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$?","hu":"Milyen helyettesítéssel transzformáljuk a $\\int_a^b f(x)\\,dx$ integrált a $[-1, 1]$ intervallumra?"},"a":{"en":"$x = \\frac{(b - a)t + a + b}{2}$","hu":"$x = \\frac{(b - a)t + a + b}{2}$"}},
    {"q":{"en":"When transforming $\\int_a^b f(x)\\,dx$ to the interval $[-1, 1]$, what is the differential $dx$ in terms of $dt$?","hu":"Amikor $\\int_a^b f(x)\\,dx$-t $[-1, 1]$ intervallummá alakítunk, mekkora a $dx$ differenciálmű $dt$-ben?"},"a":{"en":"$dx = \\frac{b - a}{2}\\,dt$","hu":"$dx = \\frac{b - a}{2}\\,dt$"}},
    {"q":{"en":"Formula: Interval Transformation","hu":"Képlet: Intervallum transzformáció"},"a":{"en":"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$","hu":"$\\int_a^b f(x)\\,dx = \\frac{b - a}{2}\\int_{-1}^{1} f(\\frac{(b - a)t + a + b}{2})\\,dt$"}},
    {"q":{"en":"Example: If using 2-point Gauss to approximate $\\int_0^1 x^2 e^x\\,dx$, what is the scaling factor applied to the integral on $[-1, 1]$?","hu":"Példa: Ha kétpontos Gausst használunk a $\\int_0^1 x^2 e^x\\,dx$ közelítésére, akkor mekkora skálázási tényezőt alkalmazunk a $[-1, 1]$ integráljára?"},"a":{"en":"$\\frac{1}{2}$","hu":"$\\frac{1}{2}$"}},
    {"q":{"en":"The 2-point Gaussian approximation of $\\int_{-1}^1 e^x\\,dx$ is approximately $2.3426961$. What is the exact value?","hu":"A $\\int_{-1}^1 e^x\\,dx$ 2 pontos Gauss-közelítése hozzávetőlegesen $2.3426961$. Mi a pontos érték?"},"a":{"en":"$e - \\frac{1}{e} \\approx 2.350424$","hu":"$e - \\frac{1}{e} \\approx 2.350424$"}},
    {"q":{"en":"True or False: Gaussian quadrature weights $c_i$ are always positive.","hu":"Igaz vagy hamis: A $c_i$ Gauss-négyzetsúlyok mindig pozitívak."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"If a sequence of polynomials $(p_i)$ is pairwise orthogonal on $[-1, 1]$, what is the relationship between $p_i$ and the Legendre polynomial $P_i$?","hu":"Ha a $(p_i)$ polinomok sorozata páronként merőleges a $[-1, 1]$-n, mi a kapcsolat a $p_i$ és a $P_i$ Legendre-polinom között?"},"a":{"en":"$p_i(x) = c_i P_i(x)$ for some constant $c_i \\ne 0$","hu":"$p_i(x) = c_i P_i(x)$ valamilyen állandó $c_i \\ne 0$-hez"}},
    {"q":{"en":"The formula $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ defines the _____ of the Gaussian quadrature.","hu":"A $c_i = \\int_{-1}^{1} \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}\\,dx$ képlet a Gauss-kvadratúra _____-ját határozza meg."},"a":{"en":"weights (or coefficients)","hu":"súlyok (vagy együtthatók)"}},
    {"q":{"en":"In the 2-point case on $[-1, 1]$, the equation $c_1 x_1 + c_2 x_2 = 0$ follows from integrating which monomial?","hu":"A $[-1, 1]$ kétpontos esetben a $c_1 x_1 + c_2 x_2 = 0$ egyenlet melyik monom integrálásából következik?"},"a":{"en":"$x$","hu":"$x$"}},
    {"q":{"en":"In the 2-point case on $[-1, 1]$, the equation $c_1 + c_2 = 2$ follows from integrating which function?","hu":"A $[-1, 1]$ 2 pontos esetben melyik függvény integrálásából következik a $c_1 + c_2 = 2$ egyenlet?"},"a":{"en":"$1$ (or $x^0$)","hu":"$1$ (vagy $x^0$)"}},
    {"q":{"en":"Why can case (i) $x_1 = x_2$ not happen in the 2-point Gaussian derivation?","hu":"Miért nem fordulhat elő (i) $x_1 = x_2$ eset a 2 pontos Gauss-levezetésben?"},"a":{"en":"It would imply $c_1 + c_2 = 0$, contradicting the integral of 1 which equals 2.","hu":"Ez $c_1 + c_2 = 0$-t jelentene, ami ellentmond az 1 integráljának, amely egyenlő 2-vel."}},
    {"q":{"en":"Concept: $n$-point Gaussian Quadrature","hu":"Koncepció: $n$-pont Gauss-kvadratúra"},"a":{"en":"Definition: A quadrature formula where nodes and weights are chosen to integrate polynomials up to degree $2n-1$ exactly.","hu":"Definíció: Kvadratúra képlet, ahol a csomópontok és a súlyok úgy vannak kiválasztva, hogy pontosan $2n-1$ fokig integrálják a polinomokat."}},
    {"q":{"en":"Which theorem states that nodes $x_i$ are the roots of $P_n$ and provides the formula for $c_i$?","hu":"Melyik tétel mondja ki, hogy a $x_i$ csomópontok a $P_n$ gyökerei, és adja meg a $c_i$ képletét?"},"a":{"en":"Theorem 7.13","hu":"7.13. Tétel"}},
    {"q":{"en":"For $n=4$, how many nodes are positive and how many are negative?","hu":"A $n=4$ esetében hány csomópont pozitív és hány negatív?"},"a":{"en":"2 positive and 2 negative (due to symmetry).","hu":"2 pozitív és 2 negatív (a szimmetria miatt)."}},
    {"q":{"en":"What is the value of $P_2(x)$ at $x=0$?","hu":"Mennyi a $P_2(x)$ értéke a $x=0$-nél?"},"a":{"en":"$-\\frac{1}{3}$","hu":"$-\\frac{1}{3}$"}},
    {"q":{"en":"What is the result of the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?","hu":"Mi az eredménye a $\\int_0^1 x^2 e^x\\,dx$ kétpontos Gauss-közelítésének?"},"a":{"en":"$0.7119418$","hu":"$0.7119418$"}},
    {"q":{"en":"What is the error in the 2-point Gaussian approximation for $\\int_0^1 x^2 e^x\\,dx$?","hu":"Mi a hiba a $\\int_0^1 x^2 e^x\\,dx$ kétpontos Gauss-közelítésében?"},"a":{"en":"$0.0063400$","hu":"$0.0063400$"}},
    {"q":{"en":"True or False: The nodes $x_i$ in Gaussian quadrature must be inside the interval of integration.","hu":"Igaz vagy hamis: A Gauss-kvadratúra $x_i$ csomópontjainak az integrációs intervallumon belül kell lenniük."},"a":{"en":"True (Theorem 7.12 states roots are in $(-1, 1)$).","hu":"Igaz (a 7.12. tétel szerint a gyökök $(-1, 1)$-ben vannak)."}},
    {"q":{"en":"In the recursive formula $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$, what is the coefficient $\\gamma_n$?","hu":"A $P_{n+1}(x) = xP_n(x) - \\gamma_n P_{n-1}(x)$ rekurzív képletben mekkora a $\\gamma_n$ együttható?"},"a":{"en":"$\\frac{n^2}{4n^2 - 1}$","hu":"$\\frac{n^2}{4n^2 - 1}$"}},
    {"q":{"en":"Legendre polynomials are constructed to be _____ on the interval $[-1, 1]$.","hu":"A legendapolinomok _____ értékűek a $[-1, 1]$ intervallumon."},"a":{"en":"orthogonal","hu":"ortogonális"}},
    {"q":{"en":"The error of the 2-point Gaussian formula for $e^x$ on $[-1, 1]$ is $0.0077062$. This is considered _____ given the formula's simplicity.","hu":"A $e^x$ 2 pontos Gauss-képlet hibája $[-1, 1]$-n $0.0077062$. Ez a képlet egyszerűsége miatt _____."},"a":{"en":"very small","hu":"nagyon kicsi"}},
    {"q":{"en":"If $i=3$ (odd), what is the value of $P_3(0)$?","hu":"Ha $i=3$ (páratlan), mennyi a $P_3(0)$ értéke?"},"a":{"en":"$0$ (because it is an odd function).","hu":"$0$ (mert ez egy furcsa függvény)."}},
    {"q":{"en":"How does the degree of $P_i$ relate to the index $i$?","hu":"Hogyan kapcsolódik a $P_i$ foka a $i$ indexhez?"},"a":{"en":"The degree of $P_i$ is exactly $i$.","hu":"A $P_i$ foka pontosan $i$."}},
    {"q":{"en":"The formula $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ is exact for $p$ of degree 5. What is the minimum $n$ required?","hu":"A $\\int_{-1}^1 p(x)\\,dx = \\sum c_i p(x_i)$ képlet pontosan az 5. fokozatú $p$-re vonatkozik. Mi a minimális $n$?"},"a":{"en":"$n = 3$ (since $2(3)-1 = 5$)","hu":"$n = 3$ ($2(3)-1 = 5$ óta)"}},
    {"q":{"en":"What is the weight $c_i$ for $n=2$ in the Gaussian quadrature on $[-1, 1]$?","hu":"Mekkora a $c_i$ súlya $n=2$ esetén a Gauss-kvadratúrában a $[-1, 1]$-n?"},"a":{"en":"$1.0000000000$","hu":"$1.0000000000$"}},
    {"q":{"en":"The 5-point Gaussian quadrature uses nodes derived from which Legendre polynomial?","hu":"Az 5 pontos Gauss-kvadratúra melyik Legendre-polinomból származó csomópontokat használja?"},"a":{"en":"$P_5(x)$","hu":"$P_5(x)$"}},
    {"q":{"en":"In the system of equations for $n=2$, the equation $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ comes from the integral of _____.","hu":"A $n=2$ egyenletrendszerében a $\\frac{2}{3} = c_1 x_1^2 + c_2 x_2^2$ egyenlet a _____ integrálból származik."},"a":{"en":"$x^2$","hu":"$x^2$"}},
    {"q":{"en":"The $n$-point Gaussian quadrature is derived from a system of _____ equations (count).","hu":"A $n$-pont Gauss-kvadratúra _____ egyenletrendszerből (számlálás) származik."},"a":{"en":"$2n$","hu":"$2n$"}},
    {"q":{"en":"For an arbitrary interval $[a, b]$, the transformed function's argument in the integral is _____.","hu":"Egy tetszőleges $[a, b]$ intervallum esetén a transzformált függvény argumentuma az integrálban _____."},"a":{"en":"$\\frac{(b - a)t + a + b}{2}$","hu":"$\\frac{(b - a)t + a + b}{2}$"}}
  ],
}
