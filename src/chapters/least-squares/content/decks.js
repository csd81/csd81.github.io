// Auto-generated learning aids for chapter 9 (least squares). Glossaries bilingual; flashcards EN. Keyed by section id.
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
    {"q":"In curve fitting, what does the notation $g(x; \\mathbf{a})$ represent?","a":"A function $g$ describing a physical process where the general formula is known but parameters $\\mathbf{a}$ are unknown."},
    {"q":"What is the primary goal of curve fitting?","a":"To find parameter values such that the function $g$ deviates the 'least' from measured data points."},
    {"q":"Why is it usually impossible to draw a curve exactly through all measurement points $(x_i, y_i)$?","a":"Measurement errors typically cause data points to lie off the ideal graph of the assumed function."},
    {"q":"Define the maximum error formula $F_1(\\mathbf{a})$.","a":"$F_1(\\mathbf{a}) := \\max\\{|g(x_i; \\mathbf{a}) - y_i| : i = 0, 1, \\ldots, n\\}$"},
    {"q":"Define the absolute error sum formula $F_2(\\mathbf{a})$.","a":"$F_2(\\mathbf{a}) := \\sum_{i=0}^{n} |g(x_i; \\mathbf{a}) - y_i|$"},
    {"q":"What is the mathematical disadvantage of using $F_1(\\mathbf{a})$ or $F_2(\\mathbf{a})$ for curve fitting?","a":"They are difficult to minimize because they are not differentiable with respect to the parameters $\\mathbf{a}$."},
    {"q":"What is the formula for the quadratic error (least square error) $F(\\mathbf{a})$?","a":"$F(\\mathbf{a}) := \\sum_{i=0}^{n} (g(x_i; \\mathbf{a}) - y_i)^2$"},
    {"q":"What is the 'method of least squares'?","a":"A method that finds the best-fitting function by minimizing the sum of the squares of the deviations from the data points."},
    {"q":"In line fitting, what is the standard form of the linear function $g(x)$?","a":"$g(x) = ax + b$"},
    {"q":"For line fitting, what is the error function $F(a, b)$ that needs to be minimized?","a":"$F(a, b) := \\sum_{i=0}^{n} (ax_i + b - y_i)^2$"},
    {"q":"What is the partial derivative of the linear error function $F(a, b)$ with respect to $a$?","a":"$\\frac{\\partial F}{\\partial a}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)x_i$"},
    {"q":"What is the partial derivative of the linear error function $F(a, b)$ with respect to $b$?","a":"$\\frac{\\partial F}{\\partial b}(a, b) = 2\\sum_{i=0}^{n} (ax_i + b - y_i)$"},
    {"q":"What are the 'Gaussian normal equations' in the context of line fitting?","a":"The system of equations obtained by setting the partial derivatives of the error function $F(a, b)$ to zero."},
    {"q":"Write the first Gaussian normal equation for line fitting ($a \\sum \\ldots$).","a":"$a\\sum_{i=0}^{n} x_i^2 + b\\sum_{i=0}^{n} x_i = \\sum_{i=0}^{n} x_i y_i$"},
    {"q":"Write the second Gaussian normal equation for line fitting ($a \\sum \\ldots$).","a":"$a\\sum_{i=0}^{n} x_i + b(n + 1) = \\sum_{i=0}^{n} y_i$"},
    {"q":"In the second Gaussian normal equation for line fitting, what does the coefficient $n+1$ represent?","a":"The total number of measurement data points."},
    {"q":"What is the formula for the determinant $d$ of the coefficient matrix of the Gaussian normal equations?","a":"$d = (n + 1)\\sum_{i=0}^{n} x_i^2 - (\\sum_{i=0}^{n} x_i)^2$"},
    {"q":"Which mathematical inequality is used to prove that the determinant $d$ of the normal equations is always non-negative?","a":"The Cauchy–Bunyakovsky–Schwarz inequality."},
    {"q":"Under what condition is the determinant $d$ of the Gaussian normal equations strictly positive?","a":"When there are at least two distinct mesh points $x_i$."},
    {"q":"If $d > 0$, how many solutions does the Gaussian normal equation system have for line fitting?","a":"Exactly one unique solution."},
    {"q":"What is the explicit formula for the optimal slope $\\bar{a}$ in line fitting?","a":"$\\bar{a} = \\frac{(n + 1)(\\sum x_i y_i) - (\\sum x_i)(\\sum y_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},
    {"q":"What is the explicit formula for the optimal intercept $\\bar{b}$ in line fitting?","a":"$\\bar{b} = \\frac{(\\sum x_i^2)(\\sum y_i) - (\\sum x_i y_i)(\\sum x_i)}{(n + 1)(\\sum x_i^2) - (\\sum x_i)^2}$"},
    {"q":"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial a^2}(\\bar{a}, \\bar{b})$?","a":"$2\\sum_{i=0}^{n} x_i^2$"},
    {"q":"What is the value of the second partial derivative $\\frac{\\partial^2 F}{\\partial b^2}(\\bar{a}, \\bar{b})$?","a":"$2(n + 1)$"},
    {"q":"What is the value of the mixed partial derivative $\\frac{\\partial^2 F}{\\partial a \\partial b}(\\bar{a}, \\bar{b})$?","a":"$2\\sum_{i=0}^{n} x_i$"},
    {"q":"What is the relationship between the discriminant $D(\\bar{a}, \\bar{b})$ and the determinant $d$?","a":"$D(\\bar{a}, \\bar{b}) = 4d$"},
    {"q":"Why is the stationary point $(\\bar{a}, \\bar{b})$ specifically a local minimum for $F$?","a":"Because the discriminant $D$ is positive ($4d > 0$) and the second derivative with respect to $a$ is positive."},
    {"q":"Is the local minimum found by the method of least squares for line fitting also a global minimum?","a":"Yes, it is both a local and a global minimum."},
    {"q":"According to Theorem 9.1, what condition must the points $(x_i, y_i)$ meet for a unique line of best fit to exist?","a":"There must exist at least two points $i$ and $j$ such that $x_i \\neq x_j$."},
    {"q":"When performing manual line fitting calculations, what values should be computed in the third and fourth columns of the summary table?","a":"The squares of the mesh points ($x_i^2$) and the products of the coordinates ($x_i y_i$)."},
    {"q":"In Example 9.2, for the data set with $n=6$, what were the final calculated values for the slope $a$ and intercept $b$?","a":"$a = 0.630243$ and $b = 0.542163$"},
    {"q":"How is the fitting error calculated after finding the optimal parameters $\\bar{a}$ and $\\bar{b}$?","a":"By evaluating the sum of squares $\\sum_{i=0}^{n} (\\bar{a}x_i + \\bar{b} - y_i)^2$."},
    {"q":"In Example 9.2, what was the numerical value of the final error of the fitting?","a":"$0.124691$"},
    {"q":"The points where the function values are measured are called the _____ points.","a":"mesh"},
    {"q":"If a physical process is suspected to be a second-degree polynomial, how many parameters must be determined?","a":"Three parameters (the coefficients of the polynomial)."},
    {"q":"True or False: The Gaussian normal equations constitute a non-linear system of equations.","a":"False, it is a linear system for the parameters $a$ and $b$."},
    {"q":"What property of the least square error $F(\\mathbf{a})$ allows the use of derivatives to find its minimum?","a":"It is continuously partially differentiable."},
    {"q":"The determinant of the coefficient matrix $d$ is given by the determinant of which $2 \\times 2$ matrix?","a":"$\\begin{pmatrix} \\sum x_i^2 & \\sum x_i \\\\ \\sum x_i & n + 1 \\end{pmatrix}$"},
    {"q":"What is the Hungarian term for 'curve fitting' mentioned in the source material?","a":"görbeillesztés"},
    {"q":"In the Hungarian source text, what is the term for 'Method of Least Squares'?","a":"legkisebb négyzetek módszere"},
    {"q":"According to the CBS inequality, $(\\sum_{i=0}^{n} x_i)^2 \\leq (n + 1) \\cdot$ _____.","a":"$\\sum_{i=0}^{n} x_i^2$"},
    {"q":"If all mesh points $x_i$ were identical, what would be the value of the determinant $d$?","a":"Zero."},
    {"q":"In the provided line fitting examples, what is the range of the index $i$ if there are 8 data points?","a":"$i = 0, 1, \\ldots, 7$"},
    {"q":"What is the next step after calculating the sums of $x_i, y_i, x_i^2,$ and $x_i y_i$ in the least squares procedure?","a":"Substituting the sums into the Gaussian normal equations to solve for $a$ and $b$."},
    {"q":"In the slide example 'Egyenes illesztése', for the sums $\\sum x_i = 23.5$ and $\\sum y_i = 19.7$ with 8 points, what was the value of $b$'s coefficient in the second equation?","a":"8"},
    {"q":"What does the second Gaussian normal equation $\\sum (ax_i + b - y_i) = 0$ imply about the average error?","a":"It implies that the sum of the residuals (deviations) is zero."},
    {"q":"Term: Mesh points","a":"Definition: The specific $x$-coordinates ($x_i$) at which measurement values ($y_i$) are obtained."},
    {"q":"Term: Gaussian normal equations","a":"Definition: A system of linear equations used to find the parameters that minimize the sum of squared residuals."},
    {"q":"Why is the method of least squares preferred over minimizing the maximum deviation ($F_1$)?","a":"The quadratic function $F(\\mathbf{a})$ is easier to handle analytically using calculus."},
    {"q":"What is the result of applying Theorem 8.2 to the discriminant $D$ in the proof of line fitting?","a":"It identifies that the stationary point $(\\bar{a}, \\bar{b})$ is a local extremum."},
    {"q":"How does Corollary 8.11 extend the findings of the local minimum in line fitting?","a":"It confirms that the local minimum is also the global minimum for the error function $F$."},
    {"q":"In the example calculation table, what represents the sum of all elements in the $y_i$ column?","a":"$\\sum_{i=0}^{n} y_i$"},
    {"q":"Which variable represents the independent measurement coordinate in the formula $g(x; \\mathbf{a})$?","a":"$x$"},
    {"q":"In the Hungarian text, what is the term used for 'Gaussian normal equations'?","a":"Gauss-féle normálegyenletek"},
    {"q":"If $n=7$, how many terms are included in the summation $\\sum_{i=0}^{n} x_i$?","a":"8 terms."},
    {"q":"What is the primary technical problem solved by switching from absolute error to squared error?","a":"Non-differentiability at points where $g(x_i) = y_i$."},
    {"q":"To find the minimum of $F(a, b)$, we must set the _____ derivatives to zero.","a":"partial"},
    {"q":"What is the graphical interpretation of the 'best fitted curve'?","a":"The curve for which the sum of the squares of the vertical distances from the data points is minimized."},
    {"q":"In Example 9.2 (7 points), what was the value of $\\sum x_i^2$ used in the normal equations?","a":"89.5"},
    {"q":"In Example 9.2 (7 points), what was the value of $\\sum x_i$ used in the normal equations?","a":"20.0"}
  ],
  polynomial: [
    {"q":"In polynomial curve fitting, what parameters are sought to minimize the least square error function $F$?","a":"The coefficients $a_m, a_{m-1}, \\ldots, a_0$."},
    {"q":"What is the least square error function $F(a_m, \\ldots, a_0)$ used in polynomial curve fitting?","a":"$F(a_m, \\ldots, a_0) := \\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)^2$"},
    {"q":"When $n \\le m$ for given data points $(x_i, y_i)$, how can the polynomial coefficients be determined?","a":"By polynomial interpolation."},
    {"q":"What is the minimal value of the error function $F$ if $n \\le m$?","a":"$0$"},
    {"q":"Why is the case $m < n$ primarily investigated in polynomial curve fitting?","a":"Because the error function $F$ generally does not reach zero in this case."},
    {"q":"According to the source, at what points can the function $F$ have an extremum?","a":"Where all of its partial derivatives are equal to zero."},
    {"q":"What is the general expression for the partial derivative $\\frac{\\partial F}{\\partial a_k}$ in polynomial fitting?","a":"$2\\sum_{i=0}^{n} (a_m x_i^m + a_{m-1} x_i^{m-1} + \\cdots + a_0 - y_i)x_i^k$"},
    {"q":"What system of linear equations is obtained by setting the partial derivatives of $F$ to zero?","a":"The normal equations."},
    {"q":"In the normal equations, what is the right-hand side of the equation corresponding to the partial derivative of $a_k$?","a":"$\\sum_{i=0}^{n} x_i^k y_i$"},
    {"q":"The coefficient matrix $\\mathbf{A}$ of the normal equations is invertable if it is shown to be _____.","a":"positive definite"},
    {"q":"What is the formula for the $jk$-th element of the coefficient matrix $\\mathbf{A}$ in polynomial fitting?","a":"$\\sum_{i=0}^{n} x_i^{2m+2-j-k}$ where $j, k = 1, 2, \\ldots, m + 1$"},
    {"q":"In the proof of the existence of a unique solution, what expression represents the quadratic form $\\mathbf{z}^T \\mathbf{A} \\mathbf{z}$?","a":"$\\sum_{i=0}^{n} (\\sum_{j=1}^{m+1} x_i^{m+1-j} z_j)^2$"},
    {"q":"Under what condition on the points $x_i$ does the polynomial $p(x) := \\sum_{j=1}^{m+1} z_j x^{m+1-j}$ being zero at all $x_i$ imply $z_j = 0$?","a":"If there are at least $m + 1$ distinct mesh points."},
    {"q":"Which mathematical theorem implies $p(x) = 0$ for all $x$ if it has $m+1$ roots but degree at most $m$?","a":"The Fundamental Theorem of Algebra."},
    {"q":"What is the relationship between the Hessian matrix $F''(\\bar{\\mathbf{a}})$ and the coefficient matrix $\\mathbf{A}$?","a":"$F''(\\bar{\\mathbf{a}}) = 2\\mathbf{A}$"},
    {"q":"Why is the local minimum of the error function $F$ also its global minimum?","a":"Because $F$ is a quadratic function."},
    {"q":"Theorem 9.3 states that a unique solution exists for polynomial fitting if $m < n$ and there are at least _____ distinct mesh points.","a":"$m + 1$"},
    {"q":"What is the sum of the squared differences between the predicted and actual $y$-values called in this context?","a":"The error of the fitting."},
    {"q":"In the provided parabola fitting example ($m=2$), how many equations are in the resulting system?","a":"Three equations."},
    {"q":"In a parabola fitting problem ($y = ax^2 + bx + c$), what does the variable $c$ represent in the coefficient vector $(a, b, c)$?","a":"The constant term ($a_0$)."},
    {"q":"Formula: Error of the fitting","a":"$\\sum_{i=0}^{n} (P(x_i) - y_i)^2$ where $P(x)$ is the calculated polynomial."},
    {"q":"The matrix $\\mathbf{A}$ is symmetric because its $jk$-th element depends on the _____ of indices $j$ and $k$.","a":"sum"},
    {"q":"What value of $n$ corresponds to the total number of data points being $7$?","a":"$n = 6$"},
    {"q":"If the normal equations for a parabola are $249.1250a + 77.750b + 27.50c = -7.225$, what does $27.50$ represent in terms of $x_i$?","a":"The sum of $x_i^2$."},
    {"q":"What determines the number of variables in the error function $F$ for a polynomial of degree $m$?","a":"The number of coefficients, which is $m + 1$."}
  ],
  nonlinear: [
    {"q":"In the context of nonlinear curve fitting, what defines the least square error function $F(a, b)$ for an exponential function $b e^{ax}$?","a":"$F(a, b) = \\sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$"},
    {"q":"Why can't the normal equations for the function $y = b e^{ax}$ be solved analytically?","a":"They form a nonlinear system of equations."},
    {"q":"What numerical method can be used to minimize the nonlinear error function $F$ if linearization is not used?","a":"Newton's method"},
    {"q":"What is the core idea of the 'linearization method' in curve fitting?","a":"Transforming a nonlinear equation into a linear form by applying functions like the natural logarithm."},
    {"q":"Applying the natural logarithm to both sides of $y = b e^{ax}$ results in what linear relationship?","a":"$\\ln y = \\ln b + ax$"},
    {"q":"When linearizing $y = b e^{ax}$, what is the substituted variable $Y$?","a":"$Y = \\ln y$"},
    {"q":"When linearizing $y = b e^{ax}$, what is the substituted variable $B$ representing the intercept?","a":"$B = \\ln b$"},
    {"q":"In the linearization of $y = b e^{ax}$, how is the original parameter $a$ related to the slope $A$ of the fitted line?","a":"$a = A$"},
    {"q":"After finding the intercept $B$ from a linearized fit of $b e^{ax}$, how is the original parameter $b$ calculated?","a":"$b = e^B$"},
    {"q":"True or False: The linearization method provides the exact same solution as the original nonlinear least squares problem.","a":"False"},
    {"q":"What is the general form of the power function discussed in the material?","a":"$y = b x^a$"},
    {"q":"What linear relationship is obtained by taking the natural logarithm of the power function $y = b x^a$?","a":"$\\ln y = a \\ln x + \\ln b$"},
    {"q":"In the linearization of the power function $y = b x^a$, what is the substituted variable $X$?","a":"$X = \\ln x$"},
    {"q":"In the linearization of the power function $y = b x^a$, what is the substituted variable $Y$?","a":"$Y = \\ln y$"},
    {"q":"When fitting $y = b x^a$ via linearization, the slope $A$ of the line $Y = AX + B$ corresponds to which original parameter?","a":"$a$"},
    {"q":"For the power function $y = b x^a$, the intercept $B$ in the linearized model $Y = AX + B$ is equal to _____.","a":"$\\ln b$"},
    {"q":"Which set of data points is used to fit a line when linearizing the power function $b x^a$?","a":"$(\\ln x_i, \\ln y_i)$"},
    {"q":"In the exponential fitting example, what were the resulting linearized parameters $A$ and $B$?","a":"$A = 0.528951$ and $B = -0.997597$"},
    {"q":"What was the final exponential function obtained in Example 9.5 using linearization?","a":"$y = 0.368765 e^{0.528951x}$"},
    {"q":"In Example 9.5, what was the calculated error of the original nonlinear fitting for the result $0.368765 e^{0.528951x}$?","a":"$0.165543$"},
    {"q":"In Example 9.6, what were the resulting linearized parameters $A$ and $B$ for the power function?","a":"$A = 0.676257$ and $B = 0.123088$"},
    {"q":"What was the final power function obtained in Example 9.6?","a":"$y = 1.130984 x^{0.676257}$"},
    {"q":"In the power function example, what was the calculated error of the linear fitting?","a":"$0.007279$"},
    {"q":"What was the calculated error of the original nonlinear fitting in the power function example?","a":"$0.019616$"},
    {"q":"Which equation represents one of the critical point conditions for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $b$?","a":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} = 0$"},
    {"q":"Which equation represents the critical point condition for $F(a, b) = \\sum (b e^{ax_i} - y_i)^2$ with respect to $a$?","a":"$2\\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i = 0$"},
    {"q":"In linearizing $y = b e^{ax}$, the data points $(x_i, y_i)$ are transformed into _____.","a":"$(x_i, \\ln y_i)$"},
    {"q":"The Gaussian normal equations for linear fitting $Y = AX + B$ generally take what form for a set of $n+1$ points?","a":"A $2 \\times 2$ linear system for unknowns $A$ and $B$."},
    {"q":"What is the coefficient of $B$ in the second Gaussian normal equation ($11.5A + 6B = 0.097352$) from Example 9.5?","a":"$6$ (representing the number of data points $n+1$)"},
    {"q":"Concept: Critical Points of $F(a, b)$","a":"Definition: The points where the partial derivatives of the error function with respect to $a$ and $b$ are zero."},
    {"q":"Why is linearization used in practice despite not being the 'original' nonlinear solution?","a":"It is easy to compute as it only requires solving a linear system."},
    {"q":"When performing linearized fitting for $y = b x^a$, what value does the sum of $(\\ln x_i)^2$ represent in the normal equations?","a":"The coefficient of $A$ in the first normal equation."},
    {"q":"In Example 9.5, the sum of $x_i$ was $11.5$. This value appears as the coefficient for which variables in the normal equations?","a":"$B$ in the first equation and $A$ in the second equation."},
    {"q":"To find the error of the nonlinear fitting for $y = f(x)$, we calculate the sum of the squares of the _____.","a":"Residuals ($f(x_i) - y_i$)"},
    {"q":"How is the variable $B$ related to the original parameter $b$ in both the exponential and power function linearization examples?","a":"$B = \\ln b$"},
    {"q":"What was the total sum of $x_i \\ln y_i$ in the table for Example 9.5?","a":"$5.586294$"},
    {"q":"What was the total sum of $(\\ln x_i)^2$ in the table for Example 9.6?","a":"$2.691393$"},
    {"q":"In the normal equations for Example 9.6 ($1.727221A + 5B = 1.783485$), what does the constant $5$ represent?","a":"The total number of data points ($n=4$, so $n+1=5$)."},
    {"q":"If we have data points $(0.5, 0.7)$ for a power function fit, what is the value of the transformed point $(\\ln x_i, \\ln y_i)$?","a":"$(-0.693147, -0.356675)$"},
    {"q":"The linearized error $\\sum (A X_i + B - Y_i)^2$ for $b e^{ax}$ uses $Y_i$ as _____.","a":"$\\ln y_i$"},
    {"q":"True or False: The normal equations for a linear fit $Y = AX + B$ are always linear.","a":"True"},
    {"q":"What is the primary advantage of Newton's method over linearization for these problems?","a":"It can minimize the original nonlinear error function $F(a, b)$ directly."},
    {"q":"In the linearization of $y = b e^{ax}$, the transformed variable $X$ is simply _____.","a":"$x$"},
    {"q":"The error of the linear fitting for the power function in Example 9.6 is calculated as $\\sum_{i=0}^{4} (A \\ln x_i + B - \\ln y_i)^2$. What is the value of $A$ used?","a":"$0.676257$"},
    {"q":"What does the term $\\ln b$ represent in the equation $\\ln y = a \\ln x + \\ln b$?","a":"The y-intercept of the line in the log-log plot."},
    {"q":"In the exponential fit table, what was the value of $\\ln y_i$ for $y_i = 0.3$?","a":"$-1.203973$"},
    {"q":"In the exponential fit table, what was the value of $x_i \\ln y_i$ for $x_i = 4.0$ and $y_i = 2.7$?","a":"$3.973007$"},
    {"q":"In the power function table, what was the value of $\\ln x_i \\ln y_i$ for $x_i = 0.5$ and $y_i = 0.7$?","a":"$0.247228$"},
    {"q":"The sum of $\\ln y_i$ in Example 9.5 was $0.097352$. Where does this value appear in the normal equations?","a":"As the constant term on the right side of the second normal equation."},
    {"q":"In the power function example, what was the sum of $\\ln x_i$?","a":"$1.727221$"},
    {"q":"What is the value of $e^{0.123088}$ used to find $b$ in Example 9.6?","a":"$1.130984$"},
    {"q":"What is the value of $e^{-0.997597}$ used to find $b$ in Example 9.5?","a":"$0.368765$"},
    {"q":"When fitting $b e^{ax}$, if $a$ is positive, the function represents _____.","a":"Exponential growth"},
    {"q":"In the linearization of $y = b x^a$, both variables $x$ and $y$ must be _____ for the logarithms to be defined.","a":"Positive"},
    {"q":"The process of determining the best-fitting curve by minimizing the sum of the squares of the vertical deviations is called the _____.","a":"Method of Least Squares"},
    {"q":"The critical points of $F(a, b)$ are found by setting the _____ equal to zero.","a":"Partial derivatives (gradient)"}
  ],
};
