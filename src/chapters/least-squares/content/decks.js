// Auto-generated learning aids for chapter 9 (least squares). Glossaries and flashcards bilingual. Keyed by section id.
export const GLOSSARIES = {
  line: [
    {
      "term": {
        "en": "Least squares method",
        "hu": "Legkisebb négyzetek módszere"
      },
      "def": {
        "en": "Fit a model to data $(x_i,y_i)$ by minimizing the sum of squared residuals. Unlike interpolation, the curve need not pass through the points — it captures the trend and smooths out noise.",
        "hu": "Egy modell illesztése $(x_i,y_i)$ adatokra a négyzetes eltérések összegének minimalizálásával. Az interpolációval ellentétben a görbe nem megy át a pontokon — a trendet ragadja meg és simítja a zajt."
      }
    },
    {
      "term": {
        "en": "Line fitting $g(x)=ax+b$",
        "hu": "Egyenes illesztése $g(x)=ax+b$"
      },
      "def": {
        "en": "The simplest least-squares model: choose slope $a$ and intercept $b$ to minimize $F(a,b)=\\sum_i(ax_i+b-y_i)^2$. Also called linear regression.",
        "hu": "A legegyszerűbb legkisebb-négyzetes modell: válaszd az $a$ meredekséget és $b$ tengelymetszetet úgy, hogy $F(a,b)=\\sum_i(ax_i+b-y_i)^2$ minimális legyen. Lineáris regressziónak is hívják."
      }
    },
    {
      "term": {
        "en": "Least-square error $F(a,b)$",
        "hu": "Négyzetes hiba $F(a,b)$"
      },
      "def": {
        "en": "$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — the objective. Squaring (vs absolute value) makes $F$ smooth and differentiable, so calculus locates the minimum, and it penalizes large deviations more.",
        "hu": "$F(a,b)=\\sum_{i=0}^n(ax_i+b-y_i)^2$ — a célfüggvény. A négyzetre emelés (az abszolút érték helyett) simává, differenciálhatóvá teszi $F$-et, így az analízis megtalálja a minimumot, és jobban bünteti a nagy eltéréseket."
      }
    },
    {
      "term": {
        "en": "Normal equations (Gaussian)",
        "hu": "Normálegyenletek (Gauss-féle)"
      },
      "def": {
        "en": "Setting $\\partial F/\\partial a=\\partial F/\\partial b=0$ gives the linear system $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ for the optimal $a,b$.",
        "hu": "A $\\partial F/\\partial a=\\partial F/\\partial b=0$ feltételből az $a\\sum x_i^2+b\\sum x_i=\\sum x_iy_i$, $a\\sum x_i+b(n+1)=\\sum y_i$ lineáris rendszer adódik az optimális $a,b$-re."
      }
    },
    {
      "term": {
        "en": "Unique solvability",
        "hu": "Egyértelmű megoldhatóság"
      },
      "def": {
        "en": "The $2\\times2$ normal system has a unique solution whenever at least two of the $x_i$ differ (its determinant $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ is convex, so the stationary point is the global minimum.",
        "hu": "A $2\\times2$-es normálrendszernek egyetlen megoldása van, valahányszor legalább két $x_i$ különbözik (determinánsa $(n+1)\\sum x_i^2-(\\sum x_i)^2>0$). $F$ konvex, így a stacionárius pont a globális minimum."
      }
    },
    {
      "term": {
        "en": "Residuals & best fit",
        "hu": "Reziduumok és legjobb illeszkedés"
      },
      "def": {
        "en": "The residual at $x_i$ is $r_i=ax_i+b-y_i$. The best-fit line makes $\\sum r_i^2$ as small as possible; the residuals sum to zero and are uncorrelated with the $x_i$ at the optimum.",
        "hu": "Az $x_i$-beli reziduum $r_i=ax_i+b-y_i$. A legjobban illeszkedő egyenes a $\\sum r_i^2$-et teszi a lehető legkisebbé; az optimumban a reziduumok összege nulla és korrelálatlanok az $x_i$-vel."
      }
    }
  ],
  polynomial: [
    {
      "term": {
        "en": "Polynomial curve fitting",
        "hu": "Polinom illesztése"
      },
      "def": {
        "en": "Fit a degree-$m$ polynomial $p(x)=a_m x^m+\\dots+a_0$ to data $(x_i,y_i)$ by least squares, minimizing $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ over the $m+1$ coefficients.",
        "hu": "Egy $m$-edfokú $p(x)=a_m x^m+\\dots+a_0$ polinom illesztése $(x_i,y_i)$ adatokra legkisebb négyzetekkel, az $F(a_0,\\dots,a_m)=\\sum_i(p(x_i)-y_i)^2$ minimalizálásával az $m+1$ együtthatóra."
      }
    },
    {
      "term": {
        "en": "Fitting vs interpolation ($m<n$)",
        "hu": "Illesztés vs interpoláció ($m<n$)"
      },
      "def": {
        "en": "If $m\\ge n$ a degree-$m$ polynomial interpolates exactly ($F=0$). The interesting case is $m<n$: fewer parameters than data, so $F>0$ and the polynomial approximates the trend instead of passing through every point.",
        "hu": "Ha $m\\ge n$, egy $m$-edfokú polinom pontosan interpolál ($F=0$). Az érdekes eset $m<n$: kevesebb paraméter, mint adat, így $F>0$, és a polinom a trendet közelíti, nem megy át minden ponton."
      }
    },
    {
      "term": {
        "en": "Normal equations",
        "hu": "Normálegyenletek"
      },
      "def": {
        "en": "Setting $\\partial F/\\partial a_k=0$ gives an $(m+1)\\times(m+1)$ linear system $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ whose entries are power sums $\\sum_i x_i^{j+k}$ and $\\sum_i x_i^k y_i$.",
        "hu": "A $\\partial F/\\partial a_k=0$ feltételből egy $(m+1)\\times(m+1)$-es lineáris rendszer $\\mathbf{A}\\mathbf{a}=\\mathbf{c}$ adódik, amelynek elemei a $\\sum_i x_i^{j+k}$ hatványösszegek és $\\sum_i x_i^k y_i$."
      }
    },
    {
      "term": {
        "en": "Positive definite normal matrix",
        "hu": "Pozitív definit normálmátrix"
      },
      "def": {
        "en": "If there are at least $m+1$ distinct nodes, the normal matrix $\\mathbf{A}$ is symmetric positive definite (via the Fundamental Theorem of Algebra), so the system has a unique solution — the global least-squares minimum.",
        "hu": "Ha legalább $m+1$ különböző alappont van, a normálmátrix $\\mathbf{A}$ szimmetrikus pozitív definit (az algebra alaptétele révén), így a rendszernek egyetlen megoldása van — a globális legkisebb-négyzetes minimum."
      }
    },
    {
      "term": {
        "en": "Ill-conditioning at high degree",
        "hu": "Rossz kondicionáltság magas foknál"
      },
      "def": {
        "en": "The power-sum normal matrix is a Vandermonde-style Gram matrix that becomes badly conditioned as $m$ grows (like the Hilbert matrix). High-degree fits also overfit noise — prefer modest $m$ or orthogonal-polynomial bases.",
        "hu": "A hatványösszeges normálmátrix egy Vandermonde-jellegű Gram-mátrix, amely $m$ növekedtével rosszul kondicionálttá válik (mint a Hilbert-mátrix). A magas fokú illesztések túlillesztik a zajt — válassz mérsékelt $m$-et vagy ortogonális polinom bázist."
      }
    }
  ],
  nonlinear: [
    {
      "term": {
        "en": "Nonlinear curve fitting",
        "hu": "Nemlineáris függvény illesztése"
      },
      "def": {
        "en": "Fitting a model whose parameters enter nonlinearly (e.g. $be^{ax}$, $bx^a$). If parameters appear linearly the normal equations stay linear; otherwise they become a nonlinear system.",
        "hu": "Olyan modell illesztése, amelyben a paraméterek nemlineárisan szerepelnek (pl. $be^{ax}$, $bx^a$). Ha a paraméterek lineárisan jelennek meg, a normálegyenletek lineárisak maradnak; különben nemlineáris rendszerré válnak."
      }
    },
    {
      "term": {
        "en": "Linearization",
        "hu": "Linearizálás"
      },
      "def": {
        "en": "Transform the model into a linear one by a change of variables, fit a line by least squares, then map back. A fast, practical approximation — not the exact nonlinear least-squares solution.",
        "hu": "Alakítsd a modellt lineárissá változócserével, illessz egyenest legkisebb négyzetekkel, majd alakítsd vissza. Gyors, gyakorlati közelítés — nem a pontos nemlineáris legkisebb-négyzetes megoldás."
      }
    },
    {
      "term": {
        "en": "Exponential fit $y=be^{ax}$",
        "hu": "Exponenciális illesztés $y=be^{ax}$"
      },
      "def": {
        "en": "Take logs: $\\ln y=\\ln b+ax$. Fit a line $Y=AX+B$ to $(x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$. Used for growth/decay data.",
        "hu": "Vegyél logaritmust: $\\ln y=\\ln b+ax$. Illessz $Y=AX+B$ egyenest az $(x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$. Növekedési/bomlási adatokra."
      }
    },
    {
      "term": {
        "en": "Power fit $y=bx^a$",
        "hu": "Hatványfüggvény illesztés $y=bx^a$"
      },
      "def": {
        "en": "Take logs of both: $\\ln y=a\\ln x+\\ln b$. Fit a line to $(\\ln x_i,\\ln y_i)$; then $a=A$, $b=e^{B}$ — a log–log linear fit.",
        "hu": "Vegyél logaritmust mindkettőből: $\\ln y=a\\ln x+\\ln b$. Illessz egyenest a $(\\ln x_i,\\ln y_i)$ pontokra; majd $a=A$, $b=e^{B}$ — log–log lineáris illesztés."
      }
    },
    {
      "term": {
        "en": "Caveat: not the true optimum",
        "hu": "Figyelmeztetés: nem a valódi optimum"
      },
      "def": {
        "en": "Linearization minimizes error in the transformed variables, not in the original ones, so it weights the data differently. It gives a good, cheap starting fit — refine with a genuine nonlinear least-squares solver if needed.",
        "hu": "A linearizálás a transzformált változókban minimalizálja a hibát, nem az eredetiekben, így másképp súlyozza az adatokat. Jó, olcsó kiinduló illesztést ad — szükség esetén finomítsd valódi nemlineáris legkisebb-négyzetes megoldóval."
      }
    }
  ],
};

export const FLASHCARDS = {
  line: [
    {"q":{"en":"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?","hu":"A görbeillesztésnél mit jelent a $g(x; \\mathbf{a})$ jelölés?"},"a":{"en":"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown.","hu":"$g$ függvény, amely egy olyan fizikai folyamatot ír le, ahol az általános képlet ismert, de a $\\mathbf{a}$ paraméterek ismeretlenek."}},
    {"q":{"en":"What is the primary goal of curve fitting?","hu":"Mi a görbeillesztés elsődleges célja?"},"a":{"en":"To find parameter values such that the function $g$ deviates the 'least' from measured data points.","hu":"Olyan paraméterértékek megtalálása, amelyeknél a $g$ függvény a „legkisebb” eltérést mutat a mért adatpontoktól."}},
    {"q":{"en":"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?","hu":"Miért nem lehet általában minden $(x_i, y_i)$ mérési ponton keresztül pontosan megrajzolni a görbét?"},"a":{"en":"Measurement errors typically cause data points to lie off the ideal graph of the assumed function.","hu":"A mérési hibák általában azt okozzák, hogy az adatpontok eltérnek a feltételezett függvény ideális grafikonjától."}},
    {"q":{"en":"Define the maximum error formula $F_1(\\mathbf{a})$.","hu":"Határozza meg a $F_1(\\mathbf{a})$ maximális hibaképletet."},"a":{"en":"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$","hu":"$F_1(\\mathbf{a}):= \\max\\{|g(x_i; \\mathbf{a}) - y_i|: i = 0, 1, \\ldots, n\\}$"}},
    {"q":{"en":"Define the absolute error sum formula $F_2(\\mathbf{a})$.","hu":"Határozza meg a $F_2(\\mathbf{a})$ abszolút hibaösszeg képletet."},"a":{"en":"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$","hu":"$F_2(\\mathbf{a}):= \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"}},
    {"q":{"en":"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?","hu":"Mi a matematikai hátránya a $F_1(\\mathbf{a})$ vagy $F_2(\\mathbf{a})$ használatának görbeillesztéshez?"},"a":{"en":"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$.","hu":"Nehéz minimalizálni őket, mert nem különböztethetők meg a $\\mathbf{a}$ paraméterek tekintetében."}},
    {"q":{"en":"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?","hu":"Mi a $F(\\mathbf{a})$ másodfokú hiba (legkisebb négyzetes hiba) képlete?"},"a":{"en":"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$","hu":"$F(\\mathbf{a}):= \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"}},
    {"q":{"en":"What is the 'method of least squares'?","hu":"Mi a „kisebb négyzetek módszere”?"},"a":{"en":"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points.","hu":"Olyan módszer, amely az adatpontoktól való eltérések négyzetösszegének minimalizálásával találja meg a legjobban illeszkedő függvényt."}},
    {"q":{"en":"In line fitting, what is the standard form of the linear function $g(x)$?","hu":"Vonalillesztésnél mi a $g(x)$ lineáris függvény szabványos formája?"},"a":{"en":"$g(x) = ax + b$","hu":"$g(x) = ax + b$"}},
    {"q":{"en":"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?","hu":"Vonalillesztésnél mi az a $F(a, b)$ hibafüggvény, amelyet minimalizálni kell?"},"a":{"en":"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$","hu":"$F(a, b):= \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"}},
    {"q":{"en":"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?","hu":"Mi a $F(a, b)$ lineáris hibafüggvény parciális deriváltja a $a$ függvényhez képest?"},"a":{"en":"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$","hu":"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"}},
    {"q":{"en":"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?","hu":"Mi a $F(a, b)$ lineáris hibafüggvény parciális deriváltja a $b$ függvényhez képest?"},"a":{"en":"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$","hu":"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"}},
    {"q":{"en":"What are the 'Gaussian normal equations' in the context of line fitting?","hu":"Mik a „Gauss-normál egyenletek” a vonalillesztés összefüggésében?"},"a":{"en":"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero.","hu":"A $F(a, b)$ hibafüggvény parciális deriváltjainak nullára állításával kapott egyenletrendszer."}},
    {"q":{"en":"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).","hu":"Írja fel az első Gauss-normálegyenletet a vonalillesztéshez ($a \\sum \\ldots$)."},"a":{"en":"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$","hu":"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"}},
    {"q":{"en":"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).","hu":"Írja fel a második Gauss-normálegyenletet a vonalillesztéshez ($a \\sum \\ldots$)."},"a":{"en":"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$","hu":"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"}},
    {"q":{"en":"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?","hu":"Mit jelent a $n+1$ együttható a vonalillesztés második Gauss-normálegyenletében?"},"a":{"en":"The total number of measurement data points.","hu":"A mérési adatpontok teljes száma."}},
    {"q":{"en":"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?","hu":"Mi a képlete a Gauss-normálegyenletek együtthatómátrixának $d$ determinánsának?"},"a":{"en":"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$","hu":"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"}},
    {"q":{"en":"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?","hu":"Melyik matematikai egyenlőtlenség bizonyítja, hogy a normálegyenletek $d$ determinánsa mindig nem negatív?"},"a":{"en":"The Cauchy–Bunyakovsky–Schwarz inequality.","hu":"A Cauchy–Bunyakovsky–Schwarz egyenlőtlenség."}},
    {"q":{"en":"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?","hu":"Milyen feltétel mellett szigorúan pozitív a Gauss-normálegyenletek $d$ determinánsa?"},"a":{"en":"When there are at least two distinct mesh points $x_i$.","hu":"Ha legalább két különböző hálópont van, $x_i$."}},
    {"q":{"en":"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?","hu":"Ha $d > 0$, hány megoldása van a Gauss-normál egyenletrendszernek a vonalillesztésre?"},"a":{"en":"Exactly one unique solution.","hu":"Pontosan egy egyedi megoldás."}},
    {"q":{"en":"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?","hu":"Mi az optimális $\\bar{a}$ lejtő egyértelmű képlete a vonalillesztésnél?"},"a":{"en":"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$","hu":"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"}},
    {"q":{"en":"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?","hu":"Mi az optimális $\\bar{b}$ metszéspont képlete a vonalillesztésben?"},"a":{"en":"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$","hu":"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"}},
    {"q":{"en":"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?","hu":"Mennyi a $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$ második parciális derivált értéke?"},"a":{"en":"$2\\sum_{i=0}^{n} x_i^2$","hu":"$2\\sum_{i=0}^{n} x_i^2$"}},
    {"q":{"en":"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?","hu":"Mennyi a $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$ második parciális derivált értéke?"},"a":{"en":"$2(n + 1)$","hu":"$2(n + 1)$"}},
    {"q":{"en":"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?","hu":"Mennyi a $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$ vegyes parciális derivált értéke?"},"a":{"en":"$2\\sum_{i=0}^{n} x_i$","hu":"$2\\sum_{i=0}^{n} x_i$"}},
    {"q":{"en":"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?","hu":"Mi a kapcsolat a $D(\\bar{a}, \\bar{b})$ diszkrimináns és a $d$ determináns között?"},"a":{"en":"$D(\\bar{a}, \\bar{b}) = 4d$","hu":"$D(\\bar{a}, \\bar{b}) = 4d$"}},
    {"q":{"en":"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?","hu":"Miért a $(\\bar{a}, \\bar{b})$ állópont kifejezetten helyi minimum a $F$ számára?"},"a":{"en":"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive.","hu":"Mivel a diszkrimináns $D$ pozitív ($4d > 0$), a második derivált pedig a $a$-hez képest pozitív."}},
    {"q":{"en":"Is the local minimum found by the method of least squares for line fitting also a global minimum?","hu":"A legkisebb négyzetek módszerével a vonalillesztéshez kapott lokális minimum is globális minimum?"},"a":{"en":"Yes, it is both a local and a global minimum.","hu":"Igen, ez egy helyi és egy globális minimum."}},
    {"q":{"en":"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?","hu":"A 9.1. Tétel szerint milyen feltételnek kell megfelelnie a $(x_i, y_i)$ pontoknak ahhoz, hogy létezzen egy egyedi, legjobban illeszkedő egyenes?"},"a":{"en":"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$.","hu":"Legalább két $i$ és $j$ pontnak léteznie kell úgy, hogy a $x_i \\neq x_j$ legyen."}},
    {"q":{"en":"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?","hu":"Kézi vonalillesztési számítások végzésekor milyen értékeket kell kiszámolni az összefoglaló táblázat harmadik és negyedik oszlopában?"},"a":{"en":"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$).","hu":"A hálópontok négyzete ($x_i^2$) és a koordináták szorzata ($x_i y_i$)."}},
    {"q":{"en":"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?","hu":"A 9.2. példában a $n=6$ adathalmaz esetében mik voltak a $a$ lejtő és a $b$ metszés végső számított értékei?"},"a":{"en":"$a = 0.630243$ and $b = 0.542163$","hu":"$a = 0.630243$ és $b = 0.542163$"}},
    {"q":{"en":"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?","hu":"Hogyan történik az illesztési hiba kiszámítása az optimális $\\bar{a}$ és $\\bar{b}$ paraméterek megtalálása után?"},"a":{"en":"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$.","hu":"A $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$ négyzetösszeg kiértékelésével."}},
    {"q":{"en":"In Example 9.2, what was the numerical value of the final error of the fitting?","hu":"A 9.2. példában mekkora volt az illesztés végső hibájának számértéke?"},"a":{"en":"$0.124691$","hu":"$0.124691$"}},
    {"q":{"en":"The points where the function values are measured are called the _____ points.","hu":"Azokat a pontokat, ahol a függvényértékeket mérik, _____-pontoknak nevezzük."},"a":{"en":"mesh","hu":"háló"}},
    {"q":{"en":"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?","hu":"Ha egy fizikai folyamatról feltételezzük, hogy másodfokú polinom, hány paramétert kell meghatározni?"},"a":{"en":"Three parameters (the coefficients of the polynomial).","hu":"Három paraméter (a polinom együtthatói)."}},
    {"q":{"en":"True or False: The Gaussian normal equations constitute a non-linear system of equations.","hu":"Igaz vagy hamis: A Gauss-féle normálegyenletek nemlineáris egyenletrendszert alkotnak."},"a":{"en":"False, it is a linear system for the parameters $a$ and $b$.","hu":"Hamis, ez egy lineáris rendszer a $a$ és $b$ paraméterekhez."}},
    {"q":{"en":"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?","hu":"A $F(\\mathbf{a})$ legkisebb négyzetes hibának melyik tulajdonsága teszi lehetővé, hogy deriváltak segítségével megtaláljuk a minimumát?"},"a":{"en":"It is continuously partially differentiable.","hu":"Folyamatosan részlegesen differenciálható."}},
    {"q":{"en":"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?","hu":"A $d$ együttható mátrix determinánsát melyik $2 \\times 2$ mátrix determinánsa adja meg?"},"a":{"en":"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$","hu":"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"}},
    {"q":{"en":"What is the Hungarian term for 'curve fitting' mentioned in the source material?","hu":"Mi a forrásanyagban említett magyar nyelvű „görbeillesztés” kifejezés?"},"a":{"en":"görbeillesztés","hu":"görbeillesztés"}},
    {"q":{"en":"In the Hungarian source text, what is the term for 'Method of Least Squares'?","hu":"Mi a magyar forrásszövegben a „Legkisebb négyzetek módszere” kifejezés?"},"a":{"en":"legkisebb négyzetek módszere","hu":"legkisebb négyzetek módszere"}},
    {"q":{"en":"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.","hu":"A CBS egyenlőtlenség szerint $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____."},"a":{"en":"$\\sum_{i=0}^{n} x_i^2$","hu":"$\\sum_{i=0}^{n} x_i^2$"}},
    {"q":{"en":"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?","hu":"Ha minden $x_i$ hálópont azonos lenne, mi lenne a $d$ determináns értéke?"},"a":{"en":"Zero.","hu":"Nulla."}},
    {"q":{"en":"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?","hu":"A megadott sorillesztési példákban mekkora a $i$ index tartománya, ha 8 adatpont van?"},"a":{"en":"$i = 0, 1, \\ldots, 7$","hu":"$i = 0, 1, \\ldots, 7$"}},
    {"q":{"en":"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?","hu":"Mi a következő lépés $x_i, y_i, x_i^2,$ és $x_i y_i$ összegének kiszámítása után a legkisebb négyzetek eljárásban?"},"a":{"en":"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$.","hu":"A $a$ és $b$ megoldásához az összegeket behelyettesítjük a Gauss-normál egyenletekbe."}},
    {"q":{"en":"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?","hu":"Az „Egyenes illesztése” diapéldában a $\\sum x_i = 23.5$ és $\\sum y_i = 19.7$ 8 pontos összegekre mennyi volt a $b$ együttható értéke a második egyenletben?"},"a":{"en":"8","hu":"8"}},
    {"q":{"en":"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?","hu":"Mit jelent a $\\sum (ax_i + b - y_i) = 0$ második Gauss-normálegyenlet az átlagos hibáról?"},"a":{"en":"It implies that the sum of the residuals (deviations) is zero.","hu":"Ez azt jelenti, hogy a maradékok (eltérések) összege nulla."}},
    {"q":{"en":"Term: Mesh points","hu":"Fogalom: Hálópontok"},"a":{"en":"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained.","hu":"Definíció: A konkrét $x$ koordináták ($x_i$), amelyeken a mérési értékeket ($y_i$) kapjuk."}},
    {"q":{"en":"Term: Gaussian normal equations","hu":"Fogalom: Gauss-normál egyenletek"},"a":{"en":"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals.","hu":"Definíció: Lineáris egyenletrendszer, amely a négyzetes maradékok összegét minimalizáló paraméterek megtalálására szolgál."}},
    {"q":{"en":"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?","hu":"Miért részesítik előnyben a legkisebb négyzetek módszerét a maximális eltérés minimalizálásával szemben ($F_1$)?"},"a":{"en":"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus.","hu":"A $F(\\mathbf{a})$ másodfokú függvény könnyebben kezelhető analitikusan kalkulus segítségével."}},
    {"q":{"en":"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?","hu":"Mi az eredménye, ha a 8.2 Tételt alkalmazzuk a $D$ diszkriminánsra a vonalillesztés bizonyítása során?"},"a":{"en":"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum.","hu":"Azonosítja, hogy a $(\\bar{a}, \\bar{b})$ állópont egy lokális szélsőség."}},
    {"q":{"en":"How does Corollary 8.11 extend the findings of the local minimum in line fitting?","hu":"Hogyan terjeszti ki a 8.11 következtetés a lokális minimum megállapításait a vonalillesztésben?"},"a":{"en":"It confirms that the local minimum is also the global minimum for the error function $F$.","hu":"Megerősíti, hogy a helyi minimum egyben a $F$ hibafüggvény globális minimuma is."}},
    {"q":{"en":"In the example calculation table, what represents the sum of all elements in the $y_i$ column?","hu":"A példaszámítási táblázatban mi jelenti a $y_i$ oszlop összes elemének összegét?"},"a":{"en":"$\\sum_{i=0}^{n} y_i$","hu":"$\\sum_{i=0}^{n} y_i$"}},
    {"q":{"en":"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?","hu":"Melyik változó reprezentálja a független mérési koordinátát a $g(x; \\mathbf{a})$ képletben?"},"a":{"en":"$x$","hu":"$x$"}},
    {"q":{"en":"In the Hungarian text, what is the term used for 'Gaussian normal equations'?","hu":"Mi a magyar szövegben a Gauss-féle normálegyenletek kifejezés?"},"a":{"en":"Gauss-féle normálegyenletek","hu":"Gauss-féle normálegyenletek"}},
    {"q":{"en":"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?","hu":"Ha $n=7$, hány kifejezést tartalmaz a $\\sum_{i=0}^{n} x_i$ összegzés?"},"a":{"en":"8 terms.","hu":"8 kifejezés."}},
    {"q":{"en":"What is the primary technical problem solved by switching from absolute error to squared error?","hu":"Mi az az elsődleges technikai probléma, amelyet az abszolút hibáról a négyzetes hibára való átállással megoldunk?"},"a":{"en":"Non-differentiability at points where $g(x_i) = y_i$.","hu":"Nem differenciálhatóság azokon a pontokon, ahol a $g(x_i) = y_i$."}},
    {"q":{"en":"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.","hu":"A $F(a, b)$ minimumának meghatározásához a _____ deriváltokat nullára kell állítanunk."},"a":{"en":"partial","hu":"részleges"}},
    {"q":{"en":"What is the graphical interpretation of the 'best fitted curve'?","hu":"Mi a „legjobban illeszkedő görbe” grafikus értelmezése?"},"a":{"en":"The curve for which the sum of the squares of the vertical distances from the data points is minimized.","hu":"Az a görbe, amelynél az adatpontoktól mért függőleges távolságok négyzetösszege minimalizálva van."}},
    {"q":{"en":"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?","hu":"A 9.2. példában (7 pont) mekkora volt a normálegyenletekben használt $\\sum x_i^2$ értéke?"},"a":{"en":"89.5","hu":"89.5"}},
    {"q":{"en":"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?","hu":"A 9.2. példában (7 pont) mekkora volt a normálegyenletekben használt $\\sum x_i$ értéke?"},"a":{"en":"20.0","hu":"20.0"}}
  ],
  polynomial: [
    {"q":{"en":"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?","hu":"A polinomiális görbeillesztésnél milyen paramétereket keresünk a $F$ legkisebb négyzetes hibafüggvény minimalizálására?"},"a":{"en":"The coefficients $a_m, a_{m-1}, \\ldots, a_0$.","hu":"Az együtthatók $a_m, a_{m-1}, \\ldots, a_0$."}},
    {"q":{"en":"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?","hu":"Mi a $F(a_m, \\ldots, a_0)$ legkisebb négyzetes hibafüggvény, amelyet polinomiális görbeillesztésnél használnak?"},"a":{"en":"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$","hu":"$F(a_m, \\ldots, a_0):= \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"}},
    {"q":{"en":"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?","hu":"Amikor $n \\le m$ adott $(x_i, y_i)$ adatpontokra, hogyan határozhatók meg a polinomiális együtthatók?"},"a":{"en":"By polynomial interpolation.","hu":"Polinom interpolációval."}},
    {"q":{"en":"What is the minimal value of the error function $F$ if $n \\le m$?","hu":"Mennyi a $F$ hibafüggvény minimális értéke, ha $n \\le m$?"},"a":{"en":"$0$","hu":"$0$"}},
    {"q":{"en":"Why is the case $m < n$ primarily investigated in polynomial curve fitting?","hu":"Miért a $m < n$ esetet elsősorban polinomiális görbeillesztésben vizsgálják?"},"a":{"en":"Because the error function $F$ generally does not reach zero in this case.","hu":"Mivel a $F$ hibafüggvény ebben az esetben általában nem éri el a nullát."}},
    {"q":{"en":"According to the source, at what points can the function $F$ have an extremum?","hu":"A forrás szerint a $F$ függvény mely pontokon lehet extrémuma?"},"a":{"en":"Where all of its partial derivatives are equal to zero.","hu":"Ahol az összes parciális deriváltja egyenlő nullával."}},
    {"q":{"en":"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?","hu":"Mi a $\\frac{\\partial F}{\\partial a_k}$ parciális derivált általános kifejezése polinomiális illesztésben?"},"a":{"en":"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$","hu":"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"}},
    {"q":{"en":"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?","hu":"Milyen lineáris egyenletrendszert kapunk, ha a $F$ parciális deriváltjait nullára állítjuk?"},"a":{"en":"The normal equations.","hu":"A normál egyenletek."}},
    {"q":{"en":"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?","hu":"A normál egyenletekben melyik a $a_k$ parciális deriváltjának megfelelő egyenlet jobb oldala?"},"a":{"en":"$\\sum_{i=0}^{n} x_i^k y_i$","hu":"$\\sum_{i=0}^{n} x_i^k y_i$"}},
    {"q":{"en":"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.","hu":"A normálegyenletek $\\mathbf{A}$ együtthatómátrixa megfordítható, ha _____."},"a":{"en":"positive definite","hu":"pozitív határozott"}},
    {"q":{"en":"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?","hu":"Mi a képlete a $\\mathbf{A}$ együtthatómátrix $jk$-edik elemének polinomiális illesztésben?"},"a":{"en":"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$","hu":"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ ahol $j, k = 1, 2, \\ldots, m + 1$"}},
    {"q":{"en":"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?","hu":"Egy egyedi megoldás létezésének bizonyítására melyik kifejezés reprezentálja a $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$ másodfokú alakot?"},"a":{"en":"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$","hu":"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"}},
    {"q":{"en":"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?","hu":"Milyen feltétel mellett a $x_i$ pontokon az a $p(x):= \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ polinom, amely egyáltalán nulla $x_i$, azt jelenti, hogy $z_j = 0$?"},"a":{"en":"If there are at least $m + 1$ distinct mesh points.","hu":"Ha legalább $m + 1$ különálló hálópontok vannak."}},
    {"q":{"en":"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?","hu":"Melyik matematikai tétel tartalmazza a $p(x) = 0$-t minden $x$-re, ha $m+1$ gyökei vannak, de legfeljebb $m$ foka van?"},"a":{"en":"The Fundamental Theorem of Algebra.","hu":"Az algebra alaptétele."}},
    {"q":{"en":"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?","hu":"Mi a kapcsolat a $F''(\\bar{\\mathbf{a}})$ Hess-mátrix és a $\\mathbf{A}$ együtthatómátrix között?"},"a":{"en":"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$","hu":"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"}},
    {"q":{"en":"Why is the local minimum of the error function $F$ also its global minimum?","hu":"Miért a $F$ hibafüggvény lokális minimuma a globális minimuma is?"},"a":{"en":"Because $F$ is a quadratic function.","hu":"Mivel a $F$ egy másodfokú függvény."}},
    {"q":{"en":"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.","hu":"A 9.3. tétel kimondja, hogy létezik egy egyedi megoldás a polinomiális illesztésre, ha $m < n$ és legalább _____ különálló hálópont van."},"a":{"en":"$m + 1$","hu":"$m + 1$"}},
    {"q":{"en":"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?","hu":"Mennyi az előrejelzett és a tényleges $y$-értékek négyzetes különbségeinek összege ebben az összefüggésben?"},"a":{"en":"The error of the fitting.","hu":"Az illesztés hibája."}},
    {"q":{"en":"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?","hu":"A megadott parabolaillesztési példában ($m=2$) hány egyenlet található a kapott rendszerben?"},"a":{"en":"Three equations.","hu":"Három egyenlet."}},
    {"q":{"en":"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?","hu":"Egy parabolaillesztési feladatban ($y = ax^2 + bx + c$) mit reprezentál a $c$ változó a $(a, b, c)$ együtthatóvektorban?"},"a":{"en":"The constant term ($a_0$).","hu":"Az állandó tag ($a_0$)."}},
    {"q":{"en":"Formula: Error of the fitting","hu":"Képlet: Szerelési hiba"},"a":{"en":"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial.","hu":"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ ahol $P(x)$ a számított polinom."}},
    {"q":{"en":"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.","hu":"A $\\mathbf{A}$ mátrix szimmetrikus, mert a $jk$-edik eleme a $j$ és $k$ indexek _____ értékétől függ."},"a":{"en":"sum","hu":"összeg"}},
    {"q":{"en":"What value of $n$ corresponds to the total number of data points being $7$?","hu":"A $n$ mekkora értéke felel meg a $7$ adatpontok teljes számának?"},"a":{"en":"$n = 6$","hu":"$n = 6$"}},
    {"q":{"en":"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?","hu":"Ha egy parabola normál egyenlete $249.1250a + 77.750b + 27.50c = -7.225$, mit jelent a $27.50$ a $x_i$ kifejezésben?"},"a":{"en":"The sum of $x_i^2$.","hu":"$x_i^2$ összege."}},
    {"q":{"en":"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?","hu":"Mi határozza meg a változók számát a $F$ hibafüggvényben $m$ fokú polinom esetén?"},"a":{"en":"The number of coefficients, which is $m + 1$.","hu":"Az együtthatók száma, ami $m + 1$."}}
  ],
  nonlinear: [
    {"q":{"en":"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?","hu":"A nemlineáris görbeillesztéssel összefüggésben mi határozza meg a $F(a, b)$ legkisebb négyzetes hibafüggvényt egy $b e^{ax}$ exponenciális függvényre?"},"a":{"en":"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$","hu":"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"}},
    {"q":{"en":"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?","hu":"Miért nem lehet analitikusan megoldani a $y = b e^{ax}$ függvény normálegyenleteit?"},"a":{"en":"They form a nonlinear system of equations.","hu":"Nemlineáris egyenletrendszert alkotnak."}},
    {"q":{"en":"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?","hu":"Milyen numerikus módszerrel minimalizálható a $F$ nemlineáris hibafüggvény, ha nem használunk linearizálást?"},"a":{"en":"Newton's method","hu":"Newton módszere"}},
    {"q":{"en":"What is the core idea of the 'linearization method' in curve fitting?","hu":"Mi a „linearizációs módszer” alapötlete a görbeillesztésben?"},"a":{"en":"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm.","hu":"Nemlineáris egyenlet átalakítása lineáris formává olyan függvények alkalmazásával, mint a természetes logaritmus."}},
    {"q":{"en":"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?","hu":"Milyen lineáris összefüggést kapunk, ha a természetes logaritmust alkalmazzuk a $y = b e^{ax}$ mindkét oldalára?"},"a":{"en":"$\\ln y = \\ln b + ax$","hu":"$\\ln y = \\ln b + ax$"}},
    {"q":{"en":"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?","hu":"A $y = b e^{ax}$ linearizálása során mi a $Y$ helyettesített változó?"},"a":{"en":"$Y = \\ln y$","hu":"$Y = \\ln y$"}},
    {"q":{"en":"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?","hu":"A $y = b e^{ax}$ linearizálása során mi az a $B$ helyettesített változó, amely a metszéspontot reprezentálja?"},"a":{"en":"$B = \\ln b$","hu":"$B = \\ln b$"}},
    {"q":{"en":"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?","hu":"A $y = b e^{ax}$ linearizálásában hogyan kapcsolódik az eredeti $a$ paraméter az illesztett vonal $A$ meredekségéhez?"},"a":{"en":"$a = A$","hu":"$a = A$"}},
    {"q":{"en":"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?","hu":"Miután megtalálta a $B$ metszéspontot a $b e^{ax}$ linearizált illesztéséből, hogyan számítják ki az eredeti $b$ paramétert?"},"a":{"en":"$b = e^B$","hu":"$b = e^B$"}},
    {"q":{"en":"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.","hu":"Igaz vagy hamis: A linearizációs módszer pontosan ugyanazt a megoldást adja, mint az eredeti nemlineáris legkisebb négyzetek problémája."},"a":{"en":"False","hu":"Hamis"}},
    {"q":{"en":"What is the general form of the power function discussed in the material?","hu":"Mi az anyagban tárgyalt hatványfüggvény általános formája?"},"a":{"en":"$y = b x^a$","hu":"$y = b x^a$"}},
    {"q":{"en":"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?","hu":"Milyen lineáris összefüggést kapunk a $y = b x^a$ hatványfüggvény természetes logaritmusának felvételével?"},"a":{"en":"$\\ln y = a \\ln x + \\ln b$","hu":"$\\ln y = a \\ln x + \\ln b$"}},
    {"q":{"en":"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?","hu":"A $y = b x^a$ hatványfüggvény linearizálásában mi a behelyettesített $X$ változó?"},"a":{"en":"$X = \\ln x$","hu":"$X = \\ln x$"}},
    {"q":{"en":"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?","hu":"A $y = b x^a$ hatványfüggvény linearizálásában mi a behelyettesített $Y$ változó?"},"a":{"en":"$Y = \\ln y$","hu":"$Y = \\ln y$"}},
    {"q":{"en":"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?","hu":"A $y = b x^a$ linearizálással történő illesztése esetén a $Y = AX + B$ vonal $A$ meredeksége melyik eredeti paraméternek felel meg?"},"a":{"en":"$a$","hu":"$a$"}},
    {"q":{"en":"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.","hu":"A $y = b x^a$ teljesítményfüggvény esetében a $B$ metszéspont a $Y = AX + B$ linearizált modellben egyenlő _____."},"a":{"en":"$\\ln b$","hu":"$\\ln b$"}},
    {"q":{"en":"Which set of data points is used to fit a line when linearizing the power function $b x^a$?","hu":"Melyik adatpontkészletet használjuk egy egyeneshez a $b x^a$ hatványfüggvény linearizálása során?"},"a":{"en":"$(\\ln x_i, \\ln y_i)$","hu":"$(\\ln x_i, \\ln y_i)$"}},
    {"q":{"en":"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?","hu":"Az exponenciális illesztési példában melyek voltak a kapott $A$ és $B$ linearizált paraméterek?"},"a":{"en":"$A = 0.528951$ and $B = -0.997597$","hu":"$A = 0.528951$ és $B = -0.997597$"}},
    {"q":{"en":"What was the final exponential function obtained in Example 9.5 using linearization?","hu":"Mi volt a 9.5. példában linearizálással kapott végső exponenciális függvény?"},"a":{"en":"$y = 0.368765 e^{0.528951x}$","hu":"$y = 0.368765 e^{0.528951x}$"}},
    {"q":{"en":"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?","hu":"A 9.5. példában mekkora volt az eredeti nemlineáris illesztés számított hibája a $0.368765 e^{0.528951x}$ eredményre?"},"a":{"en":"$0.165543$","hu":"$0.165543$"}},
    {"q":{"en":"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?","hu":"A 9.6. példában melyek voltak az eredményül kapott $A$ és $B$ linearizált paraméterek a hatványfüggvényhez?"},"a":{"en":"$A = 0.676257$ and $B = 0.123088$","hu":"$A = 0.676257$ és $B = 0.123088$"}},
    {"q":{"en":"What was the final power function obtained in Example 9.6?","hu":"Mi volt a 9.6. példában kapott végső hatványfüggvény?"},"a":{"en":"$y = 1.130984 x^{0.676257}$","hu":"$y = 1.130984 x^{0.676257}$"}},
    {"q":{"en":"In the power function example, what was the calculated error of the linear fitting?","hu":"A hatványfüggvény példájában mekkora volt a lineáris illesztés számított hibája?"},"a":{"en":"$0.007279$","hu":"$0.007279$"}},
    {"q":{"en":"What was the calculated error of the original nonlinear fitting in the power function example?","hu":"Mekkora volt az eredeti nemlineáris illesztés számított hibája a hatványfüggvény példájában?"},"a":{"en":"$0.019616$","hu":"$0.019616$"}},
    {"q":{"en":"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?","hu":"Melyik egyenlet jelenti a $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ egyik kritikus pontfeltételét a $b$ vonatkozásában?"},"a":{"en":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$","hu":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"}},
    {"q":{"en":"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?","hu":"Melyik egyenlet jelenti a $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ kritikus pontfeltételét a $a$ vonatkozásában?"},"a":{"en":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$","hu":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"}},
    {"q":{"en":"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.","hu":"A $y = b e^{ax}$ linearizálása során a $(x_i, y_i)$ adatpontok _____-ba kerülnek."},"a":{"en":"$(x_i, \\ln y_i)$","hu":"$(x_i, \\ln y_i)$"}},
    {"q":{"en":"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?","hu":"A $Y = AX + B$ lineáris illesztésre vonatkozó Gauss-normálegyenletek általában milyen formát öltenek a $n+1$ pontok halmazára?"},"a":{"en":"A $2 \\times 2$ linear system for unknowns $A$ and $B$.","hu":"Egy $2 \\times 2$ lineáris rendszer az ismeretlen $A$ és $B$ számára."}},
    {"q":{"en":"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?","hu":"Mekkora a $B$ együtthatója a 9.5. példa második Gauss-normálegyenletében ($11.5A + 6B = 0.097352$)?"},"a":{"en":"$6$ (representing the number of data points $n+1$)","hu":"$6$ (a $n+1$ adatpontok számát jelenti)"}},
    {"q":{"en":"Concept: Critical Points of $F(a, b)$","hu":"Koncepció: A $F(a, b)$ kritikus pontjai"},"a":{"en":"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero.","hu":"Definíció: Azok a pontok, ahol a hibafüggvény parciális deriváltjai $a$ és $b$ vonatkozásában nullák."}},
    {"q":{"en":"Why is linearization used in practice despite not being the 'original' nonlinear solution?","hu":"Miért alkalmazzák a linearizálást a gyakorlatban annak ellenére, hogy nem az „eredeti” nemlineáris megoldás?"},"a":{"en":"It is easy to compute as it only requires solving a linear system.","hu":"Könnyen kiszámítható, mivel csak egy lineáris rendszer megoldását igényli."}},
    {"q":{"en":"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?","hu":"A $y = b x^a$ linearizált illesztése során milyen értéket képvisel a $(\\ln x_i)^2$ összege a normál egyenletekben?"},"a":{"en":"The coefficient of $A$ in the first normal equation.","hu":"A $A$ együtthatója az első normálegyenletben."}},
    {"q":{"en":"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?","hu":"A 9.5. példában a $x_i$ összege $11.5$ volt. Ez az érték mely változók együtthatójaként jelenik meg a normál egyenletekben?"},"a":{"en":"$B$ in the first equation and $A$ in the second equation.","hu":"$B$ az első egyenletben és $A$ a második egyenletben."}},
    {"q":{"en":"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.","hu":"A $y = f(x)$ nemlineáris illesztésének hibájának meghatározásához kiszámítjuk a _____ négyzeteinek összegét."},"a":{"en":"Residuals ($f(x_i) - y_i$)","hu":"Maradék ($f(x_i) - y_i$)"}},
    {"q":{"en":"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?","hu":"Hogyan kapcsolódik a $B$ változó az eredeti $b$ paraméterhez mind az exponenciális, mind a hatványfüggvény linearizálási példájában?"},"a":{"en":"$B = \\ln b$","hu":"$B = \\ln b$"}},
    {"q":{"en":"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?","hu":"Mennyi volt a $x_i \\ln y_i$ teljes összege a 9.5. példa táblázatában?"},"a":{"en":"$5.586294$","hu":"$5.586294$"}},
    {"q":{"en":"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?","hu":"Mennyi volt a $(\\ln x_i)^2$ teljes összege a 9.6. példa táblázatában?"},"a":{"en":"$2.691393$","hu":"$2.691393$"}},
    {"q":{"en":"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?","hu":"A 9.6. példa normálegyenleteiben ($1.727221A + 5B = 1.783485$) mit jelent a $5$ konstans?"},"a":{"en":"The total number of data points ($n=4$, so $n+1=5$).","hu":"Az adatpontok teljes száma ($n=4$, tehát $n+1=5$)."}},
    {"q":{"en":"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?","hu":"Ha van $(0.5, 0.7)$ adatpontunk egy hatványfüggvény illesztéshez, akkor mekkora a $(\\ln x_i, \\ln y_i)$ transzformált pont értéke?"},"a":{"en":"$(-0.693147, -0.356675)$","hu":"$(-0.693147, -0.356675)$"}},
    {"q":{"en":"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.","hu":"A $b e^{ax}$ $\\sum (A X_i + B - Y_i)^2$ linearizált hibája a $Y_i$ értéket használja _____-ként."},"a":{"en":"$\\ln y_i$","hu":"$\\ln y_i$"}},
    {"q":{"en":"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.","hu":"Igaz vagy hamis: A $Y = AX + B$ lineáris illeszkedés normál egyenletei mindig lineárisak."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"What is the primary advantage of Newton's method over linearization for these problems?","hu":"Mi a Newton-módszer elsődleges előnye a linearizálással szemben ezeknél a problémáknál?"},"a":{"en":"It can minimize the original nonlinear error function $F(a, b)$ directly.","hu":"Közvetlenül minimalizálhatja az eredeti $F(a, b)$ nemlineáris hibafüggvényt."}},
    {"q":{"en":"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.","hu":"A $y = b e^{ax}$ linearizálásában a $X$ transzformált változó egyszerűen _____."},"a":{"en":"$x$","hu":"$x$"}},
    {"q":{"en":"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?","hu":"A 9.6. példában szereplő teljesítményfüggvény lineáris illesztésének hibáját a következőképpen számítjuk ki: $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. Mennyi a használt $A$ értéke?"},"a":{"en":"$0.676257$","hu":"$0.676257$"}},
    {"q":{"en":"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?","hu":"Mit jelent a $\\ln b$ kifejezés a $\\ln y = a \\ln x + \\ln b$ egyenletben?"},"a":{"en":"The y-intercept of the line in the log-log plot.","hu":"Az egyenes y-metszete a log-log diagramban."}},
    {"q":{"en":"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?","hu":"Az exponenciális illesztési táblázatban mekkora volt a $\\ln y_i$ értéke $y_i = 0.3$ esetén?"},"a":{"en":"$-1.203973$","hu":"$-1.203973$"}},
    {"q":{"en":"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?","hu":"Az exponenciális illeszkedési táblázatban mekkora volt a $x_i \\ln y_i$ értéke $x_i = 4.0$ és $y_i = 2.7$ esetén?"},"a":{"en":"$3.973007$","hu":"$3.973007$"}},
    {"q":{"en":"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?","hu":"A teljesítményfüggvény táblázatban mekkora volt a $\\ln x_i \\ln y_i$ értéke $x_i = 0.5$ és $y_i = 0.7$ esetén?"},"a":{"en":"$0.247228$","hu":"$0.247228$"}},
    {"q":{"en":"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?","hu":"A 9.5. példában a $\\ln y_i$ összege $0.097352$ volt. Hol jelenik meg ez az érték a normál egyenletekben?"},"a":{"en":"As the constant term on the right side of the second normal equation.","hu":"Mint a konstans tag a második normálegyenlet jobb oldalán."}},
    {"q":{"en":"In the power function example, what was the sum of $\\ln x_i$?","hu":"A hatványfüggvény példájában mekkora volt a $\\ln x_i$ összege?"},"a":{"en":"$1.727221$","hu":"$1.727221$"}},
    {"q":{"en":"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?","hu":"Mekkora a $e^{0.123088}$ értéke a $b$ meghatározásához a 9.6. példában?"},"a":{"en":"$1.130984$","hu":"$1.130984$"}},
    {"q":{"en":"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?","hu":"Mekkora a $e^{-0.997597}$ értéke a $b$ meghatározásához a 9.5 példában?"},"a":{"en":"$0.368765$","hu":"$0.368765$"}},
    {"q":{"en":"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.","hu":"$b e^{ax}$ illesztése esetén, ha a $a$ pozitív, a függvény _____."},"a":{"en":"Exponential growth","hu":"Exponenciális növekedés"}},
    {"q":{"en":"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.","hu":"A $y = b x^a$ linearizálásánál mindkét $x$ és $y$ változónak _____ értékűnek kell lennie a logaritmus meghatározásához."},"a":{"en":"Positive","hu":"Pozitív"}},
    {"q":{"en":"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.","hu":"A legjobban illeszkedő görbe meghatározásának folyamatát a függőleges eltérések négyzetösszegének minimalizálásával _____-nak nevezzük."},"a":{"en":"Method of Least Squares","hu":"A legkisebb négyzetek módszere"}},
    {"q":{"en":"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.","hu":"A $F(a, b)$ kritikus pontjait úgy találjuk meg, hogy a _____-t nullára állítjuk."},"a":{"en":"Partial derivatives (gradient)","hu":"Részleges származékok (gradiens)"}}
  ],
};
