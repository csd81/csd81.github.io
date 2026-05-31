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
  {"q":{"en":"According to Theorem 2.37, what two conditions must a set $E \\subset \\mathbb{R}^n$ satisfy for a continuous function $f$ to be guaranteed a maximum and minimum?","hu":"A 2.37. tétel szerint milyen két feltételt kell teljesítenie egy $E \\subset \\mathbb{R}^n$ halmaznak, hogy egy folytonos $f$ függvénynek garantáltan legyen maximuma és minimuma?"},"a":{"en":"The set $E$ must be closed and bounded.","hu":"Az $E$ halmaznak zártnak és korlátosnak kell lennie."}},
  {"q":{"en":"If a function $f$ has all partial derivatives up to order $m$ existing and continuous, what class does it belong to?","hu":"Ha egy $f$ függvény minden $m$-edrendig terjedő parciális deriváltja létezik és folytonos, melyik osztályba tartozik?"},"a":{"en":"The class $C^m$ (m-times continuously partially differentiable).","hu":"A $C^m$ osztályba ($m$-szer folytonosan parciálisan differenciálható)."}},
  {"q":{"en":"How is the gradient vector $f'(\\mathbf{x})$ of a function $f \\in C^1$ defined in terms of its partial derivatives?","hu":"Hogyan definiáljuk egy $f \\in C^1$ függvény $f'(\\mathbf{x})$ gradiensvektorát a parciális deriváltjaival?"},"a":{"en":"$f'(\\mathbf{x}) := (\\frac{\\partial f(\\mathbf{x})}{\\partial x_1}, \\dots, \\frac{\\partial f(\\mathbf{x})}{\\partial x_n})^T$","hu":"$f'(\\mathbf{x}) := (\\frac{\\partial f(\\mathbf{x})}{\\partial x_1}, \\dots, \\frac{\\partial f(\\mathbf{x})}{\\partial x_n})^T$"}},
  {"q":{"en":"In multivariable calculus notation, the gradient vector $f'$ is typically represented as a _____ vector.","hu":"A többváltozós analízis jelölésében a $f'$ gradiensvektort jellemzően _____ vektorként ábrázoljuk."},"a":{"en":"Column","hu":"Oszlop"}},
  {"q":{"en":"What is the name of the $n \\times n$ matrix $f''(\\mathbf{x})$ containing all second-order partial derivatives of a function $f \\in C^2$?","hu":"Mi a neve annak az $n \\times n$ $f''(\\mathbf{x})$ mátrixnak, amely egy $f \\in C^2$ függvény összes másodrendű parciális deriváltját tartalmazza?"},"a":{"en":"The Hessian matrix (or Hessian).","hu":"A Hesse-mátrix."}},
  {"q":{"en":"In a Hessian matrix $f''(\\mathbf{x})$, what is the entry located at row $i$ and column $j$?","hu":"Egy $f''(\\mathbf{x})$ Hesse-mátrixban mi az $i$-edik sor $j$-edik oszlopában lévő elem?"},"a":{"en":"$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(\\mathbf{x})$","hu":"$\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(\\mathbf{x})$"}},
  {"q":{"en":"To apply the multivariable Taylor's formula for an order $m$ approximation, what continuity class must the function $f$ belong to?","hu":"A többváltozós Taylor-formula $m$-edrendű közelítésre való alkalmazásához melyik folytonossági osztályba kell tartoznia $f$-nek?"},"a":{"en":"$f \\in C^{m+1}$","hu":"$f \\in C^{m+1}$"}},
  {"q":{"en":"According to Taylor's Theorem, where does the intermediate point $\\xi$ lie in relation to the points $\\mathbf{a}$ and $\\mathbf{x}$?","hu":"A Taylor-tétel szerint hol helyezkedik el a $\\xi$ közbenső pont az $\\mathbf{a}$ és $\\mathbf{x}$ pontokhoz képest?"},"a":{"en":"On the line segment connecting $\\mathbf{a}$ and $\\mathbf{x}$.","hu":"Az $\\mathbf{a}$-t és $\\mathbf{x}$-et összekötő szakaszon."}},
  {"q":{"en":"What is the parametric formula for the intermediate point $\\xi$ in Taylor's Theorem for some $t \\in (0, 1)$?","hu":"Mi a $\\xi$ közbenső pont paraméteres képlete a Taylor-tételben valamely $t \\in (0, 1)$-re?"},"a":{"en":"$\\xi = \\mathbf{x} + t(\\mathbf{a} - \\mathbf{x})$","hu":"$\\xi = \\mathbf{x} + t(\\mathbf{a} - \\mathbf{x})$"}},
  {"q":{"en":"Write the first-order term (the summation part) of the Taylor expansion of $f(\\mathbf{x})$ around point $\\mathbf{a}$.","hu":"Írd fel az $f(\\mathbf{x})$ $\\mathbf{a}$ körüli Taylor-kifejtésének elsőrendű tagját (az összegzési részt)."},"a":{"en":"$\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$","hu":"$\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$"}},
  {"q":{"en":"Write the second-order term (including the factorial) of the Taylor expansion of $f(\\mathbf{x})$ around point $\\mathbf{a}$.","hu":"Írd fel az $f(\\mathbf{x})$ $\\mathbf{a}$ körüli Taylor-kifejtésének másodrendű tagját (a faktoriálissal együtt)."},"a":{"en":"$\\frac{1}{2} \\sum_{i=1}^n \\sum_{j=1}^n \\frac{\\partial^2 f(\\mathbf{a})}{\\partial x_i \\partial x_j}(x_i - a_i)(x_j - a_j)$","hu":"$\\frac{1}{2} \\sum_{i=1}^n \\sum_{j=1}^n \\frac{\\partial^2 f(\\mathbf{a})}{\\partial x_i \\partial x_j}(x_i - a_i)(x_j - a_j)$"}},
  {"q":{"en":"Using gradient and Hessian notation, what is the second-order Taylor approximation of $f(\\mathbf{x})$ around $\\mathbf{a}$?","hu":"Gradiens- és Hesse-jelöléssel mi az $f(\\mathbf{x})$ másodrendű Taylor-közelítése $\\mathbf{a}$ körül?"},"a":{"en":"$f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$","hu":"$f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a}) + \\frac{1}{2}(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$"}},
  {"q":{"en":"In the Taylor approximation $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$, the term $f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$ represents the _____ product of the gradient and the displacement vector.","hu":"Az $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$ Taylor-közelítésben a $f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$ tag a gradiens és az elmozdulásvektor _____ szorzatát jelenti."},"a":{"en":"Scalar (or dot)","hu":"Skaláris (belső)"}},
  {"q":{"en":"What advanced calculus concept identifies $f'$ and $f''$ as the first and second derivatives of $f$, respectively?","hu":"Melyik haladó analízisfogalom azonosítja $f'$-t és $f''$-t $f$ első, illetve második deriváltjaként?"},"a":{"en":"The Fréchet derivative.","hu":"A Fréchet-derivált."}},
  {"q":{"en":"For a vector-valued function $g: I \\to \\mathbb{R}^n$, how is the derivative $g'(t)$ defined?","hu":"Egy $g: I \\to \\mathbb{R}^n$ vektorértékű függvényre hogyan definiáljuk a $g'(t)$ deriváltat?"},"a":{"en":"$g'(t) := (g_1'(t), \\dots, g_n'(t))^T$","hu":"$g'(t) := (g_1'(t), \\dots, g_n'(t))^T$"}},
  {"q":{"en":"When is a vector-valued function $g(t)$ considered \"continuously differentiable\"?","hu":"Mikor tekintünk egy $g(t)$ vektorértékű függvényt „folytonosan differenciálhatónak”?"},"a":{"en":"When every one of its component functions is continuously differentiable.","hu":"Amikor minden egyes komponensfüggvénye folytonosan differenciálható."}},
  {"q":{"en":"State the formula for the multivariable Chain Rule for the composite function $f(g(t))$.","hu":"Mondd ki a többváltozós láncszabály képletét az $f(g(t))$ összetett függvényre."},"a":{"en":"$\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$","hu":"$\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$"}},
  {"q":{"en":"What geometric property must the open set $E$ possess to apply the multivariable Lagrange's Mean Value Theorem?","hu":"Milyen geometriai tulajdonsággal kell rendelkeznie az $E$ nyílt halmaznak a többváltozós Lagrange-középértéktétel alkalmazásához?"},"a":{"en":"Convexity","hu":"Konvexitással"}},
  {"q":{"en":"State the formula for the multivariable Lagrange's Mean Value Theorem for $f(\\mathbf{x}) - f(\\mathbf{y})$.","hu":"Mondd ki a többváltozós Lagrange-középértéktétel képletét az $f(\\mathbf{x}) - f(\\mathbf{y})$-ra."},"a":{"en":"$f(\\mathbf{x}) - f(\\mathbf{y}) = f'(\\mathbf{y} + \\xi(\\mathbf{x} - \\mathbf{y}))^T(\\mathbf{x} - \\mathbf{y})$ for some $\\xi \\in (0, 1)$.","hu":"$f(\\mathbf{x}) - f(\\mathbf{y}) = f'(\\mathbf{y} + \\xi(\\mathbf{x} - \\mathbf{y}))^T(\\mathbf{x} - \\mathbf{y})$ valamely $\\xi \\in (0, 1)$-re."}},
  {"q":{"en":"In the proof of the multivariable Mean Value Theorem, what single-variable function $g(t)$ is defined on the interval $[0, 1]$?","hu":"A többváltozós középértéktétel bizonyításában milyen egyváltozós $g(t)$ függvényt definiálunk a $[0, 1]$ intervallumon?"},"a":{"en":"$g(t) = f(\\mathbf{y} + t(\\mathbf{x} - \\mathbf{y}))$","hu":"$g(t) = f(\\mathbf{y} + t(\\mathbf{x} - \\mathbf{y}))$"}},
  {"q":{"en":"For a vector-valued function $\\mathbf{f}: E \\to \\mathbb{R}^n$, what is the name of the matrix $\\mathbf{f}'(\\mathbf{x})$?","hu":"Egy $\\mathbf{f}: E \\to \\mathbb{R}^n$ vektorértékű függvényre mi az $\\mathbf{f}'(\\mathbf{x})$ mátrix neve?"},"a":{"en":"The Jacobian matrix (or derivative matrix).","hu":"A Jacobi-mátrix (deriváltmátrix)."}},
  {"q":{"en":"What are the dimensions of the Jacobian matrix for a function $\\mathbf{f}: \\mathbb{R}^n \\to \\mathbb{R}^n$?","hu":"Mik a Jacobi-mátrix méretei egy $\\mathbf{f}: \\mathbb{R}^n \\to \\mathbb{R}^n$ függvényre?"},"a":{"en":"$n \\times n$","hu":"$n \\times n$"}},
  {"q":{"en":"In the Jacobian matrix $\\mathbf{f}'(\\mathbf{x})$, what does the $i$-th row represent?","hu":"A $\\mathbf{f}'(\\mathbf{x})$ Jacobi-mátrixban mit jelent az $i$-edik sor?"},"a":{"en":"The transpose of the gradient vector of the $i$-th component function, $f_i'(\\mathbf{x})^T$.","hu":"Az $i$-edik komponensfüggvény gradiensvektorának transzponáltját, $f_i'(\\mathbf{x})^T$."}},
  {"q":{"en":"What is the formula for the linear approximation of a vector-valued function $\\mathbf{f}$ around a point $\\mathbf{a}$?","hu":"Mi egy $\\mathbf{f}$ vektorértékű függvény lineáris közelítésének képlete egy $\\mathbf{a}$ pont körül?"},"a":{"en":"$\\mathbf{f}(\\mathbf{x}) \\approx \\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$","hu":"$\\mathbf{f}(\\mathbf{x}) \\approx \\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$"}},
  {"q":{"en":"In the linear approximation $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$, the term $\\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ involves what type of algebraic operation?","hu":"A $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ lineáris közelítésben a $\\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ tag milyen algebrai műveletet tartalmaz?"},"a":{"en":"Matrix-vector multiplication.","hu":"Mátrix-vektor szorzást."}},
  {"q":{"en":"The partial derivative of $f(x_1, \\dots, x_n)$ with respect to $x_i$ is denoted by the symbol _____.","hu":"Az $f(x_1, \\dots, x_n)$ $x_i$ szerinti parciális deriváltját a _____ szimbólum jelöli."},"a":{"en":"$\\frac{\\partial f}{\\partial x_i}$","hu":"$\\frac{\\partial f}{\\partial x_i}$"}},
  {"q":{"en":"If $\\mathbf{f} \\in C^1$, it implies that all first-order _____ derivatives of all component functions exist and are continuous.","hu":"Ha $\\mathbf{f} \\in C^1$, az azt jelenti, hogy minden komponensfüggvény összes elsőrendű _____ deriváltja létezik és folytonos."},"a":{"en":"Partial","hu":"Parciális"}},
  {"q":{"en":"The Hessian matrix is defined for a function $f$ that is at least _____ times continuously partially differentiable.","hu":"A Hesse-mátrix olyan $f$ függvényre van definiálva, amely legalább _____-szer folytonosan parciálisan differenciálható."},"a":{"en":"Two ($C^2$)","hu":"Két ($C^2$)"}},
  {"q":{"en":"In the context of Taylor's formula, the term $\\frac{1}{m!}$ precedes the sum of the _____-th order partial derivatives.","hu":"A Taylor-formula kontextusában az $\\frac{1}{m!}$ tag a _____-edrendű parciális deriváltak összege előtt áll."},"a":{"en":"$m$","hu":"$m$"}},
  {"q":{"en":"The notation $\\mathbf{f} \\in C^m$ for a vector-valued function means that _____ component function is $m$-times continuously partially differentiable.","hu":"A $\\mathbf{f} \\in C^m$ jelölés egy vektorértékű függvényre azt jelenti, hogy _____ komponensfüggvény $m$-szer folytonosan parciálisan differenciálható."},"a":{"en":"Every (or each)","hu":"Minden (mindegyik)"}},
  {"q":{"en":"What is the purpose of the vector $\\mathbf{x} - \\mathbf{a}$ in the Taylor approximation formulas?","hu":"Mi a $\\mathbf{x} - \\mathbf{a}$ vektor célja a Taylor-közelítési képletekben?"},"a":{"en":"It represents the displacement vector from the center of approximation $\\mathbf{a}$ to the evaluation point $\\mathbf{x}$.","hu":"A közelítés középpontjától ($\\mathbf{a}$) a kiértékelési pontig ($\\mathbf{x}$) tartó elmozdulásvektort jelöli."}},
  {"q":{"en":"True or False: The multivariable Taylor's formula requires the set $E$ to be closed.","hu":"Igaz vagy hamis: A többváltozós Taylor-formula megköveteli, hogy az $E$ halmaz zárt legyen."},"a":{"en":"False (The theorem specifies $E$ must be an open set).","hu":"Hamis (a tétel szerint $E$-nek nyílt halmaznak kell lennie)."}},
  {"q":{"en":"In the Hessian matrix, the diagonal elements represent the _____ partial derivatives with respect to the same variable twice.","hu":"A Hesse-mátrixban az átlós elemek a _____ parciális deriváltakat jelölik, ugyanazon változó szerint kétszer."},"a":{"en":"Pure second-order (e.g., $\\frac{\\partial^2 f}{\\partial x_i^2}$)","hu":"Tiszta másodrendű (pl. $\\frac{\\partial^2 f}{\\partial x_i^2}$)"}},
  {"q":{"en":"The multivariable Lagrange's Mean Value Theorem generalizes the single-variable theorem to higher dimensions using the _____ rule.","hu":"A többváltozós Lagrange-középértéktétel az egyváltozós tételt magasabb dimenziókra általánosítja a _____ szabály segítségével."},"a":{"en":"Chain","hu":"Lánc"}},
  {"q":{"en":"If $f: \\mathbb{R}^n \\to \\mathbb{R}$ and $g: \\mathbb{R} \\to \\mathbb{R}^n$, the composition $f \\circ g$ is a function from $\\mathbb{R}$ to _____.","hu":"Ha $f: \\mathbb{R}^n \\to \\mathbb{R}$ és $g: \\mathbb{R} \\to \\mathbb{R}^n$, az $f \\circ g$ kompozíció egy $\\mathbb{R}$-ből _____-be képező függvény."},"a":{"en":"$\\mathbb{R}$ (a scalar-valued function of one variable).","hu":"$\\mathbb{R}$ (egyváltozós, skalárértékű függvény)."}},
  {"q":{"en":"What is the dimension of the gradient vector for a function of $n$ variables?","hu":"Mi egy $n$ változós függvény gradiensvektorának dimenziója?"},"a":{"en":"$n \\times 1$ (a column vector with $n$ components).","hu":"$n \\times 1$ ($n$ komponensű oszlopvektor)."}},
  {"q":{"en":"The Jacobian matrix entry at $(1, 1)$ is the partial derivative of the first component function $f_1$ with respect to _____.","hu":"A Jacobi-mátrix $(1, 1)$ eleme az első komponensfüggvény $f_1$ _____ szerinti parciális deriváltja."},"a":{"en":"$x_1$","hu":"$x_1$"}},
  {"q":{"en":"In the second-order Taylor approximation $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + \\dots$, the term $(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ is a _____ form.","hu":"A másodrendű Taylor-közelítésben $f(\\mathbf{x}) \\approx f(\\mathbf{a}) + \\dots$ a $(\\mathbf{x} - \\mathbf{a})^T f''(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ tag egy _____ alak."},"a":{"en":"Quadratic","hu":"Kvadratikus"}},
  {"q":{"en":"According to Theorem 2.38, for every $\\mathbf{x} \\in E$, there exists a $\\xi$ such that the remainder is expressed using the $(m+1)$-th order derivatives evaluated at _____.","hu":"A 2.38. tétel szerint minden $\\mathbf{x} \\in E$-re létezik olyan $\\xi$, hogy a maradéktag az $(m+1)$-edrendű, _____-ban kiértékelt deriváltakkal fejezhető ki."},"a":{"en":"$\\xi$","hu":"$\\xi$"}},
  {"q":{"en":"Is the Hessian matrix of a $C^2$ function always square?","hu":"Egy $C^2$ függvény Hesse-mátrixa mindig négyzetes?"},"a":{"en":"Yes, it is always an $n \\times n$ matrix.","hu":"Igen, mindig $n \\times n$ mátrix."}},
  {"q":{"en":"The symbol $I$ in $g: I \\to \\mathbb{R}^n$ typically represents a(n) _____ of the real numbers.","hu":"A $g: I \\to \\mathbb{R}^n$-ben az $I$ szimbólum jellemzően a valós számok egy _____-át jelöli."},"a":{"en":"Interval","hu":"Intervallumát"}},
  {"q":{"en":"The Chain Rule result $\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$ produces a _____ value.","hu":"A láncszabály eredménye $\\frac{d}{dt} f(g(t)) = f'(g(t))^T g'(t)$ egy _____ értéket ad."},"a":{"en":"Scalar","hu":"Skaláris"}},
  {"q":{"en":"The Lagrange Mean Value Theorem states that the difference $f(\\mathbf{x}) - f(\\mathbf{y})$ is the product of the gradient at an intermediate point and the _____ vector.","hu":"A Lagrange-középértéktétel szerint az $f(\\mathbf{x}) - f(\\mathbf{y})$ különbség egy közbenső pontbeli gradiens és a _____ vektor szorzata."},"a":{"en":"Difference (or displacement) vector $\\mathbf{x} - \\mathbf{y}$.","hu":"Különbség- (elmozdulás-) vektor $\\mathbf{x} - \\mathbf{y}$."}},
  {"q":{"en":"Why is the transpose symbol used in $f'(g(t))^T g'(t)$?","hu":"Miért használjuk a transzponált szimbólumot a $f'(g(t))^T g'(t)$-ben?"},"a":{"en":"To ensure the dot product of the two column vectors $f'$ and $g'$ is calculated correctly as a scalar.","hu":"Hogy a két oszlopvektor $f'$ és $g'$ skaláris szorzata helyesen, skalárként számolódjon."}},
  {"q":{"en":"Which matrix is used to linearly approximate a vector-valued function of several variables?","hu":"Melyik mátrixot használjuk egy többváltozós, vektorértékű függvény lineáris közelítésére?"},"a":{"en":"The Jacobian matrix.","hu":"A Jacobi-mátrixot."}},
  {"q":{"en":"In the expression $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$, what does $\\mathbf{f}(\\mathbf{a})$ represent?","hu":"A $\\mathbf{f}(\\mathbf{a}) + \\mathbf{f}'(\\mathbf{a})(\\mathbf{x} - \\mathbf{a})$ kifejezésben mit jelent $\\mathbf{f}(\\mathbf{a})$?"},"a":{"en":"The value of the function at the center point of the approximation.","hu":"A függvény értékét a közelítés középpontjában."}},
  {"q":{"en":"Does the Hessian matrix $f''(\\mathbf{x})$ exist for a function in $C^1$?","hu":"Létezik-e a $f''(\\mathbf{x})$ Hesse-mátrix egy $C^1$-beli függvényre?"},"a":{"en":"No, it requires the function to be in $C^2$.","hu":"Nem, ahhoz a függvénynek $C^2$-belinek kell lennie."}},
  {"q":{"en":"A set $E$ is _____ if for any two points in $E$, the line segment connecting them is also contained within $E$.","hu":"Egy $E$ halmaz _____, ha bármely két $E$-beli pontra az őket összekötő szakasz is $E$-ben van."},"a":{"en":"Convex","hu":"Konvex"}},
  {"q":{"en":"In the multivariable Taylor formula, the remainder term is often called the _____ form of the remainder.","hu":"A többváltozós Taylor-formulában a maradéktagot gyakran a maradék _____ alakjának nevezik."},"a":{"en":"Lagrange","hu":"Lagrange-féle"}},
  {"q":{"en":"The first-order Taylor polynomial of a scalar function $f$ describes the _____ plane at point $\\mathbf{a}$.","hu":"Egy $f$ skalárfüggvény elsőrendű Taylor-polinomja az $\\mathbf{a}$ pontbeli _____ síkot írja le."},"a":{"en":"Tangent","hu":"Érintő"}},
  {"q":{"en":"What is the relation between $m$ and the differentiability class $C^m$ if a function is said to be \"smooth\"?","hu":"Mi a kapcsolat $m$ és a $C^m$ differenciálhatósági osztály között, ha egy függvényt „simának” mondunk?"},"a":{"en":"Smoothness usually implies $f \\in C^\\infty$ (infinitely differentiable), though the source material focuses on finite $m$.","hu":"A simaság általában $f \\in C^\\infty$-t jelent (végtelenszer differenciálható), bár a forrásanyag a véges $m$-re összpontosít."}},
  {"q":{"en":"If $n=1$, the Jacobian matrix $\\mathbf{f}'$ reduces to a _____.","hu":"Ha $n=1$, a $\\mathbf{f}'$ Jacobi-mátrix egy _____-ra egyszerűsödik."},"a":{"en":"Scalar derivative.","hu":"Skaláris deriváltra."}},
  {"q":{"en":"The sum $\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$ can be written in vector notation as _____.","hu":"A $\\sum_{i=1}^n \\frac{\\partial f(\\mathbf{a})}{\\partial x_i}(x_i - a_i)$ összeg vektorjelöléssel _____ alakban írható."},"a":{"en":"$f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$","hu":"$f'(\\mathbf{a})^T(\\mathbf{x} - \\mathbf{a})$"}},
  {"q":{"en":"How many indices are used in the summation for the $m$-th order term of the general Taylor formula?","hu":"Hány indexet használunk az általános Taylor-formula $m$-edrendű tagjának összegzésében?"},"a":{"en":"$m$ indices ($i_1, i_2, \\dots, i_m$).","hu":"$m$ indexet ($i_1, i_2, \\dots, i_m$)."}},
  {"q":{"en":"In the Taylor formula, what does the index $i_k$ range from?","hu":"A Taylor-formulában milyen tartományon fut az $i_k$ index?"},"a":{"en":"$1$ to $n$ (the number of variables).","hu":"$1$-től $n$-ig (a változók száma)."}}
]
