// Auto-generated learning aids for chapter 10 (ODEs). Glossaries bilingual; flashcards EN. Keyed by section id.
export const GLOSSARIES = {
  "10.1": [
    {
      "term": {
        "en": "Initial value problem (IVP)",
        "hu": "Kezdetiérték-feladat (IVP)"
      },
      "def": {
        "en": "An ODE $y'=f(t,y)$ together with an initial condition $y(t_0)=y_0$. The goal of this chapter is to approximate its solution $y(t)$ numerically on $[t_0,T]$.",
        "hu": "Egy $y'=f(t,y)$ differenciálegyenlet egy $y(t_0)=y_0$ kezdeti feltétellel. A fejezet célja az $y(t)$ megoldás numerikus közelítése $[t_0,T]$-n."
      }
    },
    {
      "term": {
        "en": "Lipschitz continuity (in $y$)",
        "hu": "Lipschitz-folytonosság ($y$-ban)"
      },
      "def": {
        "en": "$|f(t,y)-f(t,\\tilde y)|\\le L|y-\\tilde y|$ for all $y,\\tilde y$, with Lipschitz constant $L$. The key smoothness condition guaranteeing a unique solution.",
        "hu": "$|f(t,y)-f(t,\\tilde y)|\\le L|y-\\tilde y|$ minden $y,\\tilde y$-ra, $L$ Lipschitz-konstanssal. A kulcsfeltétel, amely az egyértelmű megoldást garantálja."
      }
    },
    {
      "term": {
        "en": "Existence & uniqueness (Thm 10.1)",
        "hu": "Létezés és egyértelműség (10.1. tétel)"
      },
      "def": {
        "en": "If $f$ is continuous and Lipschitz continuous in $y$, the IVP has a unique solution on $[t_0,T]$ for every $y_0$. Continuity alone gives existence; Lipschitz gives uniqueness.",
        "hu": "Ha $f$ folytonos és $y$-ban Lipschitz-folytonos, az IVP-nek minden $y_0$-ra egyetlen megoldása van $[t_0,T]$-n. A folytonosság létezést ad; a Lipschitz-feltétel egyértelműséget."
      }
    },
    {
      "term": {
        "en": "Local vs global Lipschitz",
        "hu": "Lokális vs globális Lipschitz"
      },
      "def": {
        "en": "Global Lipschitz (one $L$ for all $y$) gives a solution on all of $[t_0,T]$. Local Lipschitz (an $L$ per bounded interval, e.g. when $f$ is $C^1$ in $y$) guarantees only a solution on some $[t_0,\\bar T]$ — it may blow up early (e.g. $y'=y^2$).",
        "hu": "A globális Lipschitz (egyetlen $L$ minden $y$-ra) megoldást ad egész $[t_0,T]$-n. A lokális Lipschitz (korlátos intervallumonkénti $L$, pl. ha $f$ $C^1$ $y$-ban) csak valamely $[t_0,\\bar T]$-n garantál megoldást — korábban felrobbanhat (pl. $y'=y^2$)."
      }
    },
    {
      "term": {
        "en": "Non-uniqueness without Lipschitz",
        "hu": "Nem-egyértelműség Lipschitz nélkül"
      },
      "def": {
        "en": "Without Lipschitz continuity uniqueness can fail: $y'=\\sqrt{|y|}$, $y(0)=0$ has both $y\\equiv0$ and $y=t^2/4$ as solutions ($\\sqrt{|y|}$ is not Lipschitz at 0).",
        "hu": "Lipschitz-folytonosság nélkül az egyértelműség elromolhat: $y'=\\sqrt{|y|}$, $y(0)=0$ esetén $y\\equiv0$ és $y=t^2/4$ is megoldás ($\\sqrt{|y|}$ nem Lipschitz a 0-ban)."
      }
    },
    {
      "term": {
        "en": "Direction (slope) field",
        "hu": "Iránymező"
      },
      "def": {
        "en": "At each $(t,y)$ the ODE prescribes the slope $f(t,y)$; drawing short segments of these slopes shows the family of solution curves. Numerical methods follow this field step by step.",
        "hu": "Minden $(t,y)$-ban a differenciálegyenlet előírja az $f(t,y)$ meredekséget; e meredekségek rövid szakaszainak felrajzolása megmutatja a megoldásgörbék seregét. A numerikus módszerek lépésenként követik ezt a mezőt."
      }
    },
    {
      "term": {
        "en": "Systems & higher-order ODEs",
        "hu": "Rendszerek és magasabb rendű ODE-k"
      },
      "def": {
        "en": "A vector IVP $\\mathbf{y}'=\\mathbf{f}(t,\\mathbf{y})$ covers systems; any higher-order ODE reduces to a first-order system by introducing the derivatives as new variables, so all methods here apply.",
        "hu": "A vektoros $\\mathbf{y}'=\\mathbf{f}(t,\\mathbf{y})$ IVP lefedi a rendszereket; bármely magasabb rendű ODE elsőrendű rendszerré redukálható a deriváltak új változókként való bevezetésével, így minden itteni módszer alkalmazható."
      }
    }
  ],
  "10.2": [
    {
      "term": {
        "en": "Euler's method",
        "hu": "Euler-módszer"
      },
      "def": {
        "en": "The simplest ODE solver: from $z_0=y_0$ step $z_{i+1}=z_i+h\\,f(t_i,z_i)$ on an equidistant mesh $t_i=t_0+ih$. Each step follows the slope field for one step of length $h$.",
        "hu": "A legegyszerűbb ODE-megoldó: $z_0=y_0$-ból $z_{i+1}=z_i+h\\,f(t_i,z_i)$ lépés egyenközű $t_i=t_0+ih$ rácson. Minden lépés egy $h$ hosszú lépésig követi az iránymezőt."
      }
    },
    {
      "term": {
        "en": "Three derivations",
        "hu": "Három levezetés"
      },
      "def": {
        "en": "Euler's formula arises from (i) the forward difference quotient for $y'$, (ii) the first-order Taylor expansion of $y$, and (iii) integrating $y'=f$ and approximating the integral by the left rectangle — all give $z_{i+1}=z_i+hf$.",
        "hu": "Az Euler-képlet adódik (i) az $y'$ előre differenciahányadosából, (ii) az $y$ elsőrendű Taylor-sorából, és (iii) az $y'=f$ integrálásából a bal téglánnyal közelítve — mind a $z_{i+1}=z_i+hf$-et adja."
      }
    },
    {
      "term": {
        "en": "Local truncation error",
        "hu": "Lokális csonkítási hiba"
      },
      "def": {
        "en": "The error introduced in one step, $\\tau_{i+1}=\\tfrac{h}{2}y''(\\xi_i)$ for Euler — it is $O(h)$ relative to the step (or $O(h^2)$ in absolute terms per step).",
        "hu": "Az egy lépésben keletkező hiba, Eulernél $\\tau_{i+1}=\\tfrac{h}{2}y''(\\xi_i)$ — a lépéshez viszonyítva $O(h)$ (lépésenként abszolút értelemben $O(h^2)$)."
      }
    },
    {
      "term": {
        "en": "Global error bound (Thm 10.4)",
        "hu": "Globális hibakorlát (10.4. tétel)"
      },
      "def": {
        "en": "$|y(t_i)-z_i|\\le\\dfrac{\\tau}{Lh}\\big(e^{L(t_i-t_0)}-1\\big)$ where $\\tau=\\max|\\tau_{i+1}|$. The local errors accumulate but stay controlled via the Lipschitz constant $L$ (using a discrete Grönwall lemma, Thm 10.3).",
        "hu": "$|y(t_i)-z_i|\\le\\dfrac{\\tau}{Lh}\\big(e^{L(t_i-t_0)}-1\\big)$, ahol $\\tau=\\max|\\tau_{i+1}|$. A lokális hibák felhalmozódnak, de a Lipschitz-konstans $L$ révén kontrollálva maradnak (diszkrét Grönwall-lemma, 10.3. tétel)."
      }
    },
    {
      "term": {
        "en": "First-order convergence (Thm 10.5)",
        "hu": "Elsőrendű konvergencia (10.5. tétel)"
      },
      "def": {
        "en": "Euler's method converges linearly: the global error is $O(h)$, so halving $h$ roughly halves the error. Accurate but slow — higher-order methods (Taylor, Runge–Kutta) do better.",
        "hu": "Az Euler-módszer lineárisan konvergál: a globális hiba $O(h)$, így $h$ felezése nagyjából felezi a hibát. Pontos, de lassú — a magasabb rendű módszerek (Taylor, Runge–Kutta) jobbak."
      }
    },
    {
      "term": {
        "en": "Euler sequence",
        "hu": "Euler-sorozat"
      },
      "def": {
        "en": "The computed values $z_0,z_1,\\dots,z_n$ approximating the true solution values $y(t_i)$ at the mesh points — the discrete output of the method.",
        "hu": "A kiszámolt $z_0,z_1,\\dots,z_n$ értékek, amelyek a valódi $y(t_i)$ megoldásértékeket közelítik a rácspontokban — a módszer diszkrét kimenete."
      }
    }
  ],
  "10.3": [
    {
      "term": {
        "en": "Rounding in Euler's method",
        "hu": "Kerekítés az Euler-módszerben"
      },
      "def": {
        "en": "Storing $y_0$ and each step's output introduces rounding errors $\\delta_i$. The computed sequence $w_i$ differs from the exact Euler sequence $z_i$, and these errors accumulate over the steps.",
        "hu": "Az $y_0$ és minden lépés kimenetének tárolása $\\delta_i$ kerekítési hibákat visz be. A számolt $w_i$ sorozat eltér a pontos $z_i$ Euler-sorozattól, és e hibák a lépések során felhalmozódnak."
      }
    },
    {
      "term": {
        "en": "Total error bound (Thm 10.6)",
        "hu": "Teljes hibakorlát (10.6. tétel)"
      },
      "def": {
        "en": "Combining truncation and rounding, the error is bounded by a factor $\\dfrac{hM_2}{2}+\\dfrac{\\delta}{h}$ (times an $e^{L(t-t_0)}$ growth) — truncation $\\propto h$ plus rounding $\\propto 1/h$.",
        "hu": "A csonkítást és kerekítést kombinálva a hibát egy $\\dfrac{hM_2}{2}+\\dfrac{\\delta}{h}$ tényező korlátozza (egy $e^{L(t-t_0)}$ növekedéssel) — a csonkítás $\\propto h$, a kerekítés $\\propto 1/h$."
      }
    },
    {
      "term": {
        "en": "Optimal step size",
        "hu": "Optimális lépésköz"
      },
      "def": {
        "en": "Minimizing $g(h)=\\dfrac{hM_2}{2}+\\dfrac{\\delta}{h}$ gives $h^*=\\sqrt{2\\delta/M_2}$. Below $h^*$ rounding dominates and the result gets worse — there is a best, finite step size.",
        "hu": "A $g(h)=\\dfrac{hM_2}{2}+\\dfrac{\\delta}{h}$ minimalizálása $h^*=\\sqrt{2\\delta/M_2}$-t ad. $h^*$ alatt a kerekítés dominál, és az eredmény romlik — van egy legjobb, véges lépésköz."
      }
    },
    {
      "term": {
        "en": "Why smaller $h$ isn't always better",
        "hu": "Miért nem mindig jobb a kisebb $h$"
      },
      "def": {
        "en": "The $\\delta/h$ term blows up as $h\\to0$: shrinking the step past $h^*$ amplifies accumulated rounding faster than it reduces truncation. Use $h$ comfortably above the rounding level.",
        "hu": "A $\\delta/h$ tag felrobban $h\\to0$ esetén: a lépés $h^*$ alá csökkentése gyorsabban erősíti a felhalmozott kerekítést, mint amennyire csökkenti a csonkítást. $h$-t a kerekítési szint fölött tartsd."
      }
    }
  ],
  "10.4": [
    {
      "term": {
        "en": "Taylor's method (order $\\alpha$)",
        "hu": "Taylor-módszer ($\\alpha$-rendű)"
      },
      "def": {
        "en": "Use the order-$\\alpha$ Taylor polynomial of $y$: $z_{i+1}=z_i+h f+\\tfrac{h^2}{2}f^{(1)}+\\cdots+\\tfrac{h^\\alpha}{\\alpha!}f^{(\\alpha-1)}$. Euler is the $\\alpha=1$ case; higher $\\alpha$ gives higher accuracy.",
        "hu": "Az $y$ $\\alpha$-rendű Taylor-polinomját használja: $z_{i+1}=z_i+h f+\\tfrac{h^2}{2}f^{(1)}+\\cdots+\\tfrac{h^\\alpha}{\\alpha!}f^{(\\alpha-1)}$. Az Euler az $\\alpha=1$ eset; nagyobb $\\alpha$ nagyobb pontosságot ad."
      }
    },
    {
      "term": {
        "en": "Total derivatives $f^{(i)}$",
        "hu": "Teljes deriváltak $f^{(i)}$"
      },
      "def": {
        "en": "Since $y'=f(t,y)$, the higher derivatives $y^{(i)}=f^{(i-1)}(t,y)$ are total ($t$-)derivatives of $f$ along the solution, computed by the chain rule from $f$ and its partials — increasingly messy as $\\alpha$ grows.",
        "hu": "Mivel $y'=f(t,y)$, a magasabb deriváltak $y^{(i)}=f^{(i-1)}(t,y)$ az $f$ megoldás menti teljes ($t$ szerinti) deriváltjai, a láncszabállyal $f$-ből és parciálisaiból számolva — $\\alpha$ növekedtével egyre bonyolultabb."
      }
    },
    {
      "term": {
        "en": "Order-$\\alpha$ convergence (Thm 10.7)",
        "hu": "$\\alpha$-rendű konvergencia (10.7. tétel)"
      },
      "def": {
        "en": "A one-step method whose local truncation error is $O(h^{\\alpha})$ converges globally with order $\\alpha$: the error is $O(h^{\\alpha})$. The order-$\\alpha$ Taylor method achieves exactly this.",
        "hu": "Egy egylépéses módszer, amelynek lokális csonkítási hibája $O(h^{\\alpha})$, globálisan $\\alpha$-rendben konvergál: a hiba $O(h^{\\alpha})$. Az $\\alpha$-rendű Taylor-módszer pontosan ezt éri el."
      }
    },
    {
      "term": {
        "en": "Accuracy vs Euler",
        "hu": "Pontosság az Eulerhez képest"
      },
      "def": {
        "en": "Order-2 Taylor: halving $h$ cuts the error to a quarter ($O(h^2)$), far better than Euler's $O(h)$. The price is computing derivatives of $f$ analytically.",
        "hu": "Másodrendű Taylor: $h$ felezése negyedére csökkenti a hibát ($O(h^2)$), sokkal jobb az Euler $O(h)$-jánál. Ára $f$ deriváltjainak analitikus kiszámítása."
      }
    },
    {
      "term": {
        "en": "Drawback: derivative computation",
        "hu": "Hátrány: a deriváltak kiszámítása"
      },
      "def": {
        "en": "Each extra order needs another total derivative of $f$ — algebraically heavy and problem-specific. This motivates Runge–Kutta methods, which reach the same order using only extra $f$-evaluations.",
        "hu": "Minden további rend egy újabb teljes $f$-deriváltat igényel — algebrailag nehéz és feladatfüggő. Ez motiválja a Runge–Kutta módszereket, amelyek ugyanazt a rendet csak további $f$-kiértékelésekkel érik el."
      }
    }
  ],
  "10.5": [
    {
      "term": {
        "en": "Runge–Kutta idea",
        "hu": "Runge–Kutta-ötlet"
      },
      "def": {
        "en": "Match the accuracy of Taylor's method without computing derivatives of $f$ — instead sample $f$ at several intermediate points per step and combine them. Trades derivative algebra for extra $f$-evaluations.",
        "hu": "Érd el a Taylor-módszer pontosságát $f$ deriváltjainak kiszámítása nélkül — ehelyett mintázd $f$-et több köztes pontban lépésenként, és kombináld őket. Derivált-algebrát cserél extra $f$-kiértékelésekre."
      }
    },
    {
      "term": {
        "en": "Midpoint method (RK2)",
        "hu": "Felezőpont-módszer (RK2)"
      },
      "def": {
        "en": "$z_{i+1}=z_i+h\\,f\\!\\big(t_i+\\tfrac h2,\\,z_i+\\tfrac h2 f(t_i,z_i)\\big)$ — take a half Euler step, evaluate the slope there, and use it for the full step. Second-order accurate ($O(h^2)$) with no derivatives of $f$.",
        "hu": "$z_{i+1}=z_i+h\\,f\\!\\big(t_i+\\tfrac h2,\\,z_i+\\tfrac h2 f(t_i,z_i)\\big)$ — fél Euler-lépés, ott kiértékelt meredekség, azzal a teljes lépés. Másodrendben pontos ($O(h^2)$), $f$ deriváltjai nélkül."
      }
    },
    {
      "term": {
        "en": "General explicit RK form",
        "hu": "Általános explicit RK-alak"
      },
      "def": {
        "en": "$z_{i+1}=z_i+h(\\gamma_1 k_1+\\gamma_2 k_2+\\cdots)$ with stages $k_j=f(t_i+\\alpha_j h,\\,z_i+h\\sum\\beta_{jl}k_l)$. The weights $\\gamma$, nodes $\\alpha$ and coefficients $\\beta$ are chosen to match Taylor terms to a target order.",
        "hu": "$z_{i+1}=z_i+h(\\gamma_1 k_1+\\gamma_2 k_2+\\cdots)$, fokozatokkal $k_j=f(t_i+\\alpha_j h,\\,z_i+h\\sum\\beta_{jl}k_l)$. A $\\gamma$ súlyokat, $\\alpha$ csomópontokat és $\\beta$ együtthatókat úgy választjuk, hogy a Taylor-tagok egy cél-rendig egyezzenek."
      }
    },
    {
      "term": {
        "en": "Order conditions",
        "hu": "Rendi feltételek"
      },
      "def": {
        "en": "Matching Taylor and RK expansions yields algebraic equations on the parameters (e.g. $\\gamma_1+\\gamma_2=1$, $\\gamma_2\\alpha_1=\\tfrac12$ for second order). Satisfying more of them raises the order.",
        "hu": "A Taylor- és RK-sorfejtés egyeztetése algebrai egyenleteket ad a paraméterekre (pl. $\\gamma_1+\\gamma_2=1$, $\\gamma_2\\alpha_1=\\tfrac12$ másodrendhez). Több teljesítése növeli a rendet."
      }
    },
    {
      "term": {
        "en": "Heun's method",
        "hu": "Heun-módszer"
      },
      "def": {
        "en": "A second-order RK with $\\gamma_1=\\tfrac14,\\gamma_2=\\tfrac34,\\alpha_1=\\beta_{21}=\\tfrac23$ — averages the start slope and a slope at $t_i+\\tfrac23 h$. An alternative RK2 to the midpoint method.",
        "hu": "Egy másodrendű RK $\\gamma_1=\\tfrac14,\\gamma_2=\\tfrac34,\\alpha_1=\\beta_{21}=\\tfrac23$-mal — átlagolja a kezdő meredekséget és egy $t_i+\\tfrac23 h$-beli meredekséget. A felezőpont-módszer egy RK2 alternatívája."
      }
    },
    {
      "term": {
        "en": "Classical RK4",
        "hu": "Klasszikus RK4"
      },
      "def": {
        "en": "The most popular ODE solver: four stages combined as $z_{i+1}=z_i+\\tfrac h6(k_1+2k_2+2k_3+k_4)$, fourth-order accurate ($O(h^4)$) — an excellent accuracy/cost balance for smooth problems.",
        "hu": "A legnépszerűbb ODE-megoldó: négy fokozat $z_{i+1}=z_i+\\tfrac h6(k_1+2k_2+2k_3+k_4)$ alakban, negyedrendben pontos ($O(h^4)$) — kiváló pontosság/költség arány sima feladatokra."
      }
    },
    {
      "term": {
        "en": "Stages vs attainable order",
        "hu": "Fokozatok vs elérhető rend"
      },
      "def": {
        "en": "More stages allow higher order, but not 1-for-1: up to 4 stages give order = #stages, beyond that the maximum order lags (e.g. 6 stages are needed for order 5). RK4 is the sweet spot.",
        "hu": "Több fokozat magasabb rendet enged, de nem 1:1 arányban: 4 fokozatig a rend = fokozatok száma, azon túl a maximális rend lemarad (pl. 5. rendhez 6 fokozat kell). Az RK4 az optimális pont."
      }
    }
  ],
};

export const FLASHCARDS = {
  "10.1": [
    {"q":"In the context of ordinary differential equations, what does the abbreviation 'IVP' stand for?","a":"Initial Value Problem"},
    {"q":"What is the standard mathematical form of a first-order scalar initial value problem?","a":"$y' = f(t, y), \\quad y(t_0) = y_0$"},
    {"q":"In a scalar IVP $y' = f(t, y)$, what is the typical domain and codomain of the function $f$?","a":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$"},
    {"q":"What notation represents the vector-valued version of an initial value problem for a system of $m$ dimensions?","a":"$\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y}), \\quad \\mathbf{y}(t_0) = \\mathbf{y}^{(0)}$"},
    {"q":"In the system-based IVP $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, what is the codomain of the function $\\mathbf{f}$?","a":"$\\mathbb{R}^m$"},
    {"q":"A function $f(t, y)$ is _____ in its second variable if there exists a constant $L$ such that $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$.","a":"Lipschitz continuous"},
    {"q":"What is the term for the constant $L$ in the inequality $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$?","a":"Lipschitz constant"},
    {"q":"When generalizing the Lipschitz condition to systems of differential equations, what mathematical tool replaces the absolute value symbol?","a":"A vector norm"},
    {"q":"According to the theory of ODEs, what property of $f$ is generally sufficient to guarantee the *existence* of a solution to an IVP?","a":"Continuity of $f$"},
    {"q":"To guarantee the *uniqueness* of a solution to an IVP, what property must $f$ satisfy in its second variable in addition to continuity?","a":"Lipschitz continuity"},
    {"q":"Theorem 10.1: If $f$ is continuous and Lipschitz continuous in its second variable, on what interval is a unique solution guaranteed to exist?","a":"$[t_0, T]$ (or more generally the finite interval of definition)"},
    {"q":"How does the requirement for *local* Lipschitz continuity differ from *global* Lipschitz continuity regarding the range of $y$?","a":"It only requires the Lipschitz condition to hold for $y, \\tilde{y}$ within a specific interval $[a, b]$ containing $y_0$."},
    {"q":"If a function $f$ is locally Lipschitz continuous but not globally, what is the potential limitation on the solution's existence interval?","a":"The solution might only exist on a smaller interval $[t_0, \\bar{T}]$ where $0 < \\bar{T} \\le T$."},
    {"q":"What condition regarding the derivative of $f$ with respect to its second variable is sufficient to prove that $f$ is locally Lipschitz continuous?","a":"$f$ is continuously differentiable with respect to its second variable."},
    {"q":"Concept: $m$th-order IVP transformation","a":"An $m$th-order scalar IVP is equivalent to a system of $m$ first-order differential equations."},
    {"q":"When converting a second-order ODE $y'' = f(t, y, y')$ into a system, what are the components of the vector $\\mathbf{y}$?","a":"$\\mathbf{y} = (y, y')^T$"},
    {"q":"When converting an $m$th-order ODE to a first-order system, what is the initial vector $\\mathbf{y}^{(0)}$ composed of?","a":"The initial values $(y_0, y_1, \\ldots, y_{m-1})^T$"},
    {"q":"Convert the second-order equation $y'' + 5y' = e^{2t-1}$ into the first component of a vector derivative $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ where $y_1 = y$ and $y_2 = y'$.","a":"$y_1' = y_2$"},
    {"q":"For the IVP $y' = \\sqrt{|y|}, y(0) = 0$, what are two distinct solutions that demonstrate a lack of uniqueness?","a":"$y(t) = 0$ and $y(t) = t^2/4$"},
    {"q":"Why does the IVP $y' = \\sqrt{|y|}, y(0) = 0$ have multiple solutions?","a":"The function $f(y) = \\sqrt{|y|}$ is not Lipschitz continuous at $y=0$."},
    {"q":"The IVP $y' = y^2, y(0) = 1$ fails to have a solution on $[0, T]$ if $T \\ge 1$ because $g(y) = y^2$ is not _____ Lipschitz continuous.","a":"globally"},
    {"q":"Is the function $g(y) = y^2$ locally Lipschitz continuous on any finite interval?","a":"Yes"},
    {"q":"For the system $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, how is the Lipschitz condition defined using norms?","a":"$\\|\\mathbf{f}(t, \\mathbf{y}) - \\mathbf{f}(t, \\tilde{\\mathbf{y}})\\| \\le L\\|\\mathbf{y} - \\tilde{\\mathbf{y}}\\|$"},
    {"q":"In the context of numerical methods, why do we often assume global Lipschitz continuity despite it being a strong condition?","a":"To avoid technical problems regarding the existence of the solution over the entire interval $[t_0, T]$."},
    {"q":"True or False: Continuity of $f$ alone guarantees a unique solution to an IVP.","a":"False (it only guarantees existence, not uniqueness)."},
    {"q":"In the scalar IVP $y' = f(t, y)$, which variable of $f$ is the Lipschitz condition applied to?","a":"The second variable ($y$)."},
    {"q":"What specific property of $f$ is required for the Picard-Lindelöf theorem (Theorem 10.1 in the text) to ensure existence and uniqueness?","a":"$f$ must be continuous and Lipschitz continuous in its second variable."},
    {"q":"If $y''' + 4y'' - 2y' + 5y = t^3$ is converted to a system $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, what is the expression for $y_3'$ if $y_1=y, y_2=y', y_3=y''$?","a":"$y_3' = t^3 - 4y_3 + 2y_2 - 5y_1$"},
    {"q":"What is the initial vector $\\mathbf{y}^{(0)}$ for the IVP $y'' + 5y' = e^{2t-1}, y(0)=3, y'(0)=-1$?","a":"$(3, -1)^T$"},
    {"q":"If a function is continuously parciálisan differenciálható (continuously partially differentiable) with respect to $y$, it implies the function is _____ Lipschitz continuous.","a":"locally"},
    {"q":"On the interval $[t_0, T]$, what does the red curve typically represent in a direction field diagram for an IVP?","a":"The specific solution passing through the initial point $(t_0, y_0)$."},
    {"q":"What is the relationship between global Lipschitz continuity and local Lipschitz continuity?","a":"Global Lipschitz continuity is a stronger condition that implies local Lipschitz continuity."},
    {"q":"Why is the function $f(y) = \\sqrt{|y|}$ not Lipschitz at $y=0$?","a":"The ratio $|\\sqrt{|y|} - \\sqrt{0}| / |y - 0| = 1/\\sqrt{|y|}$ approaches infinity as $y$ approaches zero."},
    {"q":"Under local Lipschitz conditions, what defines the sub-interval $[t_0, \\bar{T}]$?","a":"It is the interval on which a unique solution is guaranteed to exist before it potentially leaves the region where the Lipschitz condition was defined."},
    {"q":"In the transformation of an $m$th order ODE to a system, the variable $y_{i+1}$ is defined as the _____ of $y_i$.","a":"derivative"},
    {"q":"In the IVP $y' = y^2, y(0) = 1$, at what value of $t$ does the solution 'blow up' or cease to exist?","a":"$t = 1$"},
    {"q":"The Lipschitz condition is primarily used to control the _____ of the function $f$ relative to changes in $y$.","a":"rate of change (or growth)"},
    {"q":"Definition: Kezdeti érték probléma","a":"The Hungarian term for Initial Value Problem (IVP)."},
    {"q":"Definition: Iránymező","a":"The Hungarian term for a direction field (or slope field)."},
    {"q":"In Exercise 1(b), $y'' - t^2 y' + ty = 0, y(1)=1, y'(1)=0$. What is the starting time $t_0$?","a":"1"},
    {"q":"If $\\mathbf{f}$ is continuous in $t$, what does the Lipschitz property in $\\mathbf{y}$ ensure about the solution path?","a":"It ensures the solution path is unique and does not branch."},
    {"q":"Is the condition $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$ required to hold for all $t$ in the interval $[t_0, T]$?","a":"Yes"},
    {"q":"In the scalar case $y' = f(t, y)$, what does $y'$ represent?","a":"The first derivative of $y$ with respect to $t$ (the slope of the solution curve)."},
    {"q":"Does Theorem 10.1 apply to systems of differential equations?","a":"Yes, it can be generalized to systems using vector norms."},
    {"q":"Which specific example from the text shows that continuity without Lipschitz continuity allows for multiple solutions?","a":"$y' = \\sqrt{|y|}, y(0) = 0$"},
    {"q":"The Lipschitz constant $L$ must be _____ of $t, y,$ and $\\tilde{y}$ for global Lipschitz continuity.","a":"independent"},
    {"q":"What is the purpose of converting high-order ODEs into systems for numerical analysis?","a":"Numerical methods (like Euler's) are typically defined and analyzed for first-order systems."},
    {"q":"In the equation $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, if $\\mathbf{y} \\in \\mathbb{R}^m$, how many scalar equations are in the system?","a":"$m$"},
    {"q":"If a function is globally Lipschitz continuous, is it also locally Lipschitz continuous?","a":"Yes"},
    {"q":"For the IVP $y' = y^2, y(0)=1$, what is the explicit solution $y(t)$ that exists for $t < 1$?","a":"$y(t) = \\frac{1}{1-t}$"}
  ],
  "10.2": [
    {"q":"What is the general formula for the Euler sequence $z_{i+1}$ in Euler's method for the IVP $y' = f(t, y)$?","a":"$z_{i+1} = z_i + h_i f(t_i, z_i)$"},
    {"q":"In the context of numerical methods for ODEs, how is the step size $h_i$ defined between two mesh points $t_i$ and $t_{i+1}$?","a":"$h_i = t_{i+1} - t_i$"},
    {"q":"In Euler's method, what value is used as the starting point $z_0$ for the sequence?","a":"$z_0 = y_0$"},
    {"q":"Which specific Taylor polynomial approximation is the basis for Method (i) of deriving Euler's method?","a":"The first-order Taylor polynomial around $t_i$."},
    {"q":"Geometrically, Method (i) of Euler's method approximates the solution curve by following the _____ line at each mesh point.","a":"tangent"},
    {"q":"In Method (ii) of deriving Euler's method, what numerical differentiation formula is used to approximate $y'(t_i)$?","a":"The first-order forward difference formula $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$."},
    {"q":"Method (iii) derives Euler's method by integrating $y'(t) = f(t, y(t))$ over what interval?","a":"$[t_i, t_{i+1}]$"},
    {"q":"When deriving Euler's method via integration, what simple quadrature rule is applied to approximate $\\int_{t_i}^{t_{i+1}} f(s, y(s)) ds$?","a":"The left-hand endpoint approximation $g(a)(b - a)$."},
    {"q":"What is the exact analytical solution to the example IVP $y' = 2y - 10t^2 + 2t, y(0) = 1$?","a":"$y(t) = 5t^2 + 4t + 2 - e^{2t}$"},
    {"q":"Based on numerical observations in the text, if the step size $h$ is halved in Euler's method, what happens to the approximation error?","a":"The error is also approximately halved."},
    {"q":"What does it mean for the error of a numerical method to be 'linear in $h?","a":"The error is directly proportional to the step size $h$."},
    {"q":"Define the local truncation error $\\tau_{i+1}$ for Euler's method at the $(i+1)$-th step.","a":"$\\tau_{i+1} := \\frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$"},
    {"q":"How is the exact solution value $y(t_{i+1})$ expressed in terms of the previous value $y(t_i)$ and the local truncation error $\\tau_{i+1}$?","a":"$y(t_{i+1}) = y(t_i) + h f(t_i, y(t_i)) + \\tau_{i+1}h$"},
    {"q":"What does the term $|\\tau_{i+1}|h$ represent in the context of a single step of Euler's method?","a":"The error at step $i+1$ assuming the value at step $i$ was exact."},
    {"q":"Using the Taylor expansion of $y(t)$ around $t_i$, what is the specific expression for $\\tau_{i+1}$ involving the second derivative?","a":"$\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$ for some $\\xi \\in (t_i, t_{i+1})$"},
    {"q":"If a sequence $x_i$ satisfies $x_{i+1} \\le (1 + a)x_i + b$, what is the upper bound for $x_i$ involving an exponential function according to Theorem 10.3?","a":"$x_i \\le e^{ia}(\\frac{b}{a} + x_0) - \\frac{b}{a}$"},
    {"q":"What elementary inequality is used to transition from $(1+a)^i$ to $e^{ia}$ in the proof of Theorem 10.3?","a":"$1 + x \\le e^x$"},
    {"q":"To prove the global error bound for Euler's method, what property must the function $f$ satisfy regarding its second variable?","a":"Lipschitz continuity"},
    {"q":"What constant $L$ is used to bound $|f(t, y) - f(t, z)|$ in the proof of the global error theorem?","a":"The Lipschitz constant $L$."},
    {"q":"Define $\\tau$ as used in the global error bound formula $|y(t_i) - z_i| \\le (e^{L(T - t_0)} - 1)\\frac{\\tau}{L}$.","a":"$\\tau = \\max\\{|\\tau_{i+1}| : i = 0, 1, \\dots, n-1\\}$"},
    {"q":"In the global error bound for Euler's method, what value is assumed for the initial error $x_0 = |y(t_0) - z_0|$?","a":"$x_0 = 0$"},
    {"q":"If $M_2$ is the maximum of $|y''(t)|$ on $[t_0, T]$, what is the upper bound for the magnitude of the local truncation error $|\\tau_{i+1}|$?","a":"$|\\tau_{i+1}| \\le \\frac{M_2}{2}h$"},
    {"q":"How can $y''(t)$ be expressed using the partial derivatives of $f(t, y)$ and the function $f$ itself?","a":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$"},
    {"q":"According to Theorem 10.5, what is the order of convergence for Euler's method?","a":"First-order (linear) convergence."},
    {"q":"What are the three necessary conditions on $f$ listed in Theorem 10.5 to guarantee linear convergence of Euler's method?","a":"Continuity, Lipschitz continuity in the second variable, and continuous partial differentiability in both variables."},
    {"q":"If $|y(t_i) - z_i| \\le Kh$, what does the constant $K$ represent in terms of the method's behavior?","a":"A positive constant that demonstrates the global error is proportional to the step size $h$."},
    {"q":"How is Euler's method adapted for a system of differential equations $Y' = F(t, Y)$?","a":"The scalar formula is applied component-wise: $Z_{i+1} = Z_i + h F(t_i, Z_i)$ where $Z$ and $F$ are vectors."},
    {"q":"To solve a second-order ODE $y'' = g(t, y, y')$ using Euler's method, what must be done first?","a":"Transform it into an equivalent system of two first-order differential equations."},
    {"q":"In transforming $y'' - 3y' + 2y = 2$ into a system, if $y_1 = y$, what is the definition of $y_2$?","a":"$y_2 = y'$"},
    {"q":"Given the system $y_1 = y$ and $y_2 = y'$, what is the expression for $y_1'$?","a":"$y_1' = y_2$"},
    {"q":"If the local truncation error is $O(h)$, the global error of Euler's method is typically _____.","a":"$O(h)$"},
    {"q":"What is the limit of the maximum global error $\\sup_{t \\in [t_0, T]} |y(t) - z(t; h)|$ as the step size $h$ approaches zero?","a":"0"},
    {"q":"Concept: Euler Sequence","a":"Definition: A sequence of values $z_i$ generated by a recursive formula to approximate the solution of an ODE at discrete mesh points."},
    {"q":"What is the role of the term $\\frac{(1 + a)^i - 1}{a}b$ in the proof of Theorem 10.3?","a":"It is the sum of a geometric progression resulting from the repeated application of the recursive inequality."},
    {"q":"Why is the assumption that $f$ and its partial derivatives are bounded useful for error estimation?","a":"It allows for an explicit estimate of $M_2$ (the maximum of the second derivative of the solution)."},
    {"q":"In the context of Euler's method, what is an 'equidistant mesh'?","a":"A set of mesh points where the distance between any two consecutive points is a constant $h$."},
    {"q":"Which derivation of Euler's method relies on the approximation $\\int_a^b g(s) ds \\approx g(a)(b-a)$?","a":"The derivation via integration (Method iii)."},
    {"q":"What is the Lipschitz constant $L$ conceptually representing in the error analysis of Euler's method?","a":"The maximum rate at which the function $f$ changes with respect to the dependent variable $y$."},
    {"q":"In Exercise 5, what type of function is $z(t; h)$ used to interpolate the Euler sequence values?","a":"A linear spline function."},
    {"q":"What is the first step in applying Euler's method to the IVP $y' = 2y - 10t^2 + 2t$ with $h=0.1$ at $t=0$?","a":"Calculate $z_1 = z_0 + 0.1(2z_0 - 10(0)^2 + 2(0))$."},
    {"q":"True or False: Euler's method can be used with non-equidistant mesh points.","a":"True"},
    {"q":"Which error definition is given by $\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$?","a":"The local truncation error."},
    {"q":"In the derivation of Method (ii), what is the relationship between $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$ and $f(t_i, y(t_i))$?","a":"They are approximately equal: $\\frac{y(t_{i+1}) - y(t_i)}{h_i} \\approx f(t_i, y(t_i))$."},
    {"q":"What does the term $e^{L(T - t_0)}$ in the global error bound suggest about the error over long intervals?","a":"The error bound can grow exponentially as the interval length $T - t_0$ increases."},
    {"q":"For the IVP $y' = f(t, y)$, what is the value of $y'(t_i)$ according to the differential equation?","a":"$f(t_i, y(t_i))$"}
  ],
  "10.3": [
    {"q":"In the analysis of rounding errors in Euler's method, what does the variable $z_i$ represent?","a":"The exact value of the Euler sequence without rounding errors."},
    {"q":"In numerical computation, what does the variable $w_i$ represent in the context of Euler's method?","a":"The actual value computed by the machine, which includes rounding errors."},
    {"q":"How is $w_0$ defined in the context of numerical initial value problems?","a":"The machine number stored in the computer to represent the true initial value $y_0$."},
    {"q":"What is the formula for the initial rounding error $\\delta_0$?","a":"$\\delta_0 = y_0 - w_0$"},
    {"q":"What does the term $\\delta_i$ represent in the $i$-th iteration of Euler's method?","a":"The rounding error specifically committed during the $i$-th calculation step."},
    {"q":"According to the source, what is the iterative formula for the computed value $w_{i+1}$?","a":"$w_{i+1} = w_i + hf(t_i, w_i) + \\delta_{i+1}$"},
    {"q":"What equation is subtracted from the computed $w_{i+1}$ equation to analyze error propagation?","a":"$z_{i+1} = z_i + hf(t_i, z_i)$"},
    {"q":"The function $f$ is assumed to be Lipschitz continuous in which of its variables?","a":"Its second variable."},
    {"q":"What constant is used to denote the Lipschitz constant of function $f$?","a":"$L$"},
    {"q":"How is the aggregate rounding error $\\delta$ defined for a sequence of $n$ steps?","a":"$\\delta := \\max\\{|\\delta_1|, |\\delta_2|, \\ldots, |\\delta_n|\\}$"},
    {"q":"Which inequality is used to transition from $|w_{i+1} - z_{i+1}|$ to the sum of individual error magnitudes?","a":"The triangle inequality."},
    {"q":"In the step $|w_{i+1} - z_{i+1}| \\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\\delta_{i+1}|$, what does the middle term become after applying the Lipschitz property?","a":"$hL|w_i - z_i|$"},
    {"q":"When estimating $|w_i - z_i|$, what value is assigned to the parameter $a$ to apply the standard lemma?","a":"$a = hL$"},
    {"q":"When estimating $|w_i - z_i|$, what value is assigned to the parameter $b$ to apply the standard lemma?","a":"$b = \\delta$"},
    {"q":"What is the resulting upper bound for the computation error $|w_i - z_i|$ expressed using $L$, $T$, and $t_0$?","a":"$\\frac{e^{L(T - t_0)} - 1}{L}\\frac{\\delta}{h} + |\\delta_0|e^{L(T - t_0)}$"},
    {"q":"In the computation error bound, what does the term $|\\delta_0|e^{L(T - t_0)}$ specifically account for?","a":"The propagation of the error from the initial machine representation of $y_0$."},
    {"q":"What is the formula for the discretization error $|y(t_i) - z_i|$ in Euler's method?","a":"$(e^{L(T - t_0)} - 1)\\frac{hM_2}{2L}$"},
    {"q":"How is the constant $M_2$ defined in the context of the Euler error bound?","a":"$M_2 := \\max\\{|y''(t)| \\colon t \\in [t_0, T]\\}$"},
    {"q":"To find the total error $|y(t_i) - w_i|$, which two specific errors are summed using the triangle inequality?","a":"The discretization error $|y(t_i) - z_i|$ and the computation error $|z_i - w_i|$."},
    {"q":"State the full upper bound for the total error $|y(t_i) - w_i|$ as given in Theorem 10.6.","a":"$\\frac{e^{L(T - t_0)} - 1}{L}\\left(\\frac{hM_2}{2} + \\frac{\\delta}{h}\\right) + |\\delta_0|e^{L(T - t_0)}$"},
    {"q":"What happens to the factor $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ as the step size $h$ approaches $0$?","a":"It approaches infinity."},
    {"q":"Why is the total error in Euler's method no longer linear in $h$ when rounding is considered?","a":"Because of the inclusion of the $\\frac{\\delta}{h}$ term, which represents inversely proportional rounding error accumulation."},
    {"q":"In Theorem 10.6, $f$ must be continuously _____ differentiable with respect to both variables.","a":"Partially"},
    {"q":"According to the text, under what condition is the effect of rounding typically small in practice?","a":"When the step size $h$ is significantly larger than the rounding error $\\delta$."},
    {"q":"What are the domain and codomain of the function $f$ as defined in Theorem 10.6?","a":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$"},
    {"q":"The factor $\\frac{hM_2}{2}$ in the total error bound represents the _____ error.","a":"Discretization (or truncation)"},
    {"q":"The factor $\\frac{\\delta}{h}$ in the total error bound represents the _____ error.","a":"Rounding (or computation)"},
    {"q":"Function: $g(h) = \\frac{hM_2}{2} + \\frac{\\delta}{h}$","a":"Purpose: To determine the optimal step size $h$ that minimizes the combined discretization and rounding error."},
    {"q":"If a step size $h$ is chosen to be 'too small', how does it impact the Euler method's output?","a":"The error becomes significant due to the dominance of accumulated rounding errors."},
    {"q":"In the derivation, the inequality $|w_{i+1} - z_{i+1}| \\le (1 + hL)|w_i - z_i| + \\delta$ describes the _____ of error between steps.","a":"Propagation"},
    {"q":"What is the range of the index $i$ for the steps defined in Theorem 10.6?","a":"$i = 0, 1, \\ldots, n$"},
    {"q":"What is the physical meaning of $T - t_0$ in the error formulas?","a":"The total length of the time interval over which the differential equation is being solved."},
    {"q":"Term: Lipschitz Condition","a":"Definition: $|f(t, y_1) - f(t, y_2)| \\le L|y_1 - y_2|$, used here to bound the difference in function values based on the difference in state values."},
    {"q":"True or False: In practice, decreasing $h$ always leads to a more accurate solution in Euler's method.","a":"False, because below a certain threshold, rounding errors begin to increase the total error."},
    {"q":"Which theorem is cited as the basis for deriving the final total error bound in Euler's method?","a":"Theorem 10.3 (referred to in the Hungarian and English source excerpts)."},
    {"q":"In the exercise provided, what specific value is given for the rounding error $\\delta$?","a":"$0.00001$"},
    {"q":"How is the total number of steps $n$ related to $T$, $t_0$, and $h$?","a":"$n = \\frac{T - t_0}{h}$"},
    {"q":"In the total error formula, what is the role of the exponential term $e^{L(T - t_0)}$?","a":"It accounts for the potential exponential growth of errors over the integration interval."},
    {"q":"What property of the triangle inequality allows us to state $|y - w| \\le |y - z| + |z - w|$?","a":"Subadditivity (the magnitude of a sum is less than or equal to the sum of magnitudes)."},
    {"q":"Which derivative of the solution $y(t)$ is critical for determining the truncation error bound?","a":"The second derivative, $y''(t)$."},
    {"q":"In the expression $\\frac{e^{L(T-t_0)} - 1}{L}$, what happens as $L$ becomes very small?","a":"The expression approaches $(T - t_0)$, the length of the interval."},
    {"q":"When $h$ is very large, which component of the error factor $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ dominates?","a":"The discretization error component, $\\frac{hM_2}{2}$."},
    {"q":"The error bound for $|w_i - z_i|$ is found using a recursive inequality of the form $x_{i+1} \\le (1+a)x_i + b$. What is $x_i$ in this context?","a":"The magnitude of the difference between the computed and exact Euler sequences, $|w_i - z_i|$."},
    {"q":"Why does the rounding error term $\\frac{\\delta}{h}$ contain $h$ in the denominator?","a":"Because the number of steps (and thus the number of times rounding error is added) is inversely proportional to $h$."},
    {"q":"Cloze: In numerical analysis, the discretization error is $O(h)$, but the total error including rounding is not, because the latter involves a term proportional to _____.","a":"$h^{-1}$ (or $1/h$)"},
    {"q":"What does the 'max' in the definition of $M_2$ ensure about the resulting error bound?","a":"It ensures the bound is valid for the 'worst-case' curvature of the solution over the entire interval."},
    {"q":"In the context of Exercise 2, finding the 'minimum point' of $g(h)$ helps a programmer identify the _____.","a":"Optimal step size."},
    {"q":"Is the Lipschitz constant $L$ dependent on the step size $h$?","a":"No, it is a property of the function $f$ and the region of interest."},
    {"q":"What does the term $(e^{L(T - t_0)} - 1)$ represent in the context of the sensitivity of the differential equation?","a":"The amplification factor of errors due to the dynamics of the system."},
    {"q":"How does Theorem 10.6 differ from a standard Euler error theorem that ignores rounding?","a":"It includes an extra term $\\frac{\\delta}{h}$ and an initial error term $|\\delta_0|e^{L(T-t_0)}$."}
  ],
  "10.4": [
    {"q":"What is the general formula for a one-step method used to approximate the solution of an Initial Value Problem (IVP)?","a":"$z_{i+1} = z_i + hF(t_i, z_i; h)$"},
    {"q":"In the general one-step method formula $z_{i+1} = z_i + hF(t_i, z_i; h)$, what does $h$ represent?","a":"The step size or distance between equidistant mesh points."},
    {"q":"For Euler's method, what is the specific definition of the function $F(t, z; h)$?","a":"$F(t, z; h) = f(t, z)$"},
    {"q":"How is the $(i+1)$-th local truncation error $\\tau_{i+1}$ defined for a general one-step method?","a":"$\\tau_{i+1} := \\frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h)$"},
    {"q":"In the definition of local truncation error, what does $y(t)$ represent?","a":"The exact solution of the Initial Value Problem."},
    {"q":"According to Theorem 10.7, what property must $F$ have regarding its second variable to ensure convergence?","a":"It must be Lipschitz continuous in its second variable."},
    {"q":"What continuity requirement does Theorem 10.7 place on the function $F$ with respect to its variables?","a":"It must be continuously differentiable with respect to its first two variables."},
    {"q":"If the local truncation error of a method is of order $\\alpha$, what is the inequality involving $h$ and a constant $K_2$?","a":"$|\\tau_{i+1}| \\le K_2 h^\\alpha$"},
    {"q":"If a one-step method has a local truncation error of order $\\alpha$, what is the order of convergence for the global error $|y(t_i) - z_i|$?","a":"Order $\\alpha$"},
    {"q":"What is the formal bound for global error $|y(t_i) - z_i|$ in a method of order $\\alpha$?","a":"$|y(t_i) - z_i| \\le Kh^\\alpha$"},
    {"q":"Taylor's method is motivated by approximating the solution using a higher-order _____.","a":"Taylor polynomial"},
    {"q":"What is the Taylor expansion of the exact solution $y(t)$ at $t_{i+1}$ around the point $t_i$ up to order $\\alpha$?","a":"$y(t_{i+1}) = \\sum_{k=0}^{\\alpha} \\frac{y^{(k)}(t_i)}{k!}h^k + \\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$"},
    {"q":"In the Taylor expansion remainder term, where is the point $\\xi_i$ located?","a":"In the interval between $t_i$ and $t_{i+1}$ (denoted $\\langle t_i, t_{i+1} \\rangle$)."},
    {"q":"How is the second derivative $y''(t)$ expressed in terms of $f(t, y(t))$ using the chain rule?","a":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$"},
    {"q":"What notation represents the $i$-th total derivative of the composite function $f(t, y(t))$ with respect to $t$?","a":"$f^{(i)}(t, y(t))$"},
    {"q":"Using the derivative notation, what is the relationship between $y^{(i)}(t)$ and $f$?","a":"$y^{(i)}(t) = f^{(i-1)}(t, y(t))$ for $i \\ge 1$."},
    {"q":"Formula: Define the function $F(t, z; h)$ for a Taylor's method of order $\\alpha$.","a":"$F(t, z; h) := f(t, z) + \\frac{1}{2}f^{(1)}(t, z)h + \\dots + \\frac{1}{\\alpha!}f^{(\\alpha-1)}(t, z)h^{\\alpha-1}$"},
    {"q":"What is the local truncation error $\\tau_{i+1}$ for a Taylor's method of order $\\alpha$?","a":"$\\tau_{i+1} = \\frac{1}{(\\alpha + 1)!}f^{(\\alpha)}(\\xi_i, y(\\xi_i))h^\\alpha$"},
    {"q":"To use a Taylor's method of order $\\alpha$, what differentiability class must $f$ belong to?","a":"$f \\in C^\\alpha$"},
    {"q":"Example: For $y' = 2y - 10t^2 + 2t$, calculate $f^{(1)}(t, y(t))$.","a":"$4y(t) - 20t^2 - 16t + 2$"},
    {"q":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the second derivative $f^{(2)}(t, y(t))$?","a":"$8y(t) - 40t^2 - 32t - 16$"},
    {"q":"In a second-order Taylor method, how does the error typically change if the step size $h$ is halved?","a":"The error reduces to approximately one quarter of its previous value."},
    {"q":"The numerical method $z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i) + \\frac{h^2}{2}(4z_i - 20t_i^2 - 16t_i + 2)$ is a _____ order Taylor method.","a":"second"},
    {"q":"Why is the term $f^{(i)}(t, z)$ used instead of $f^{(i)}(t, y(t))$ in the final definition of the Taylor method formula?","a":"To represent the formula evaluated at the approximate solution $z$ rather than the exact solution $y(t)$."},
    {"q":"In the context of Taylor's method, what does $y^{(3)}(t)$ equal in terms of $f$?","a":"$f^{(2)}(t, y(t))$"},
    {"q":"How does the accuracy of a third-order Taylor's method generally compare to Euler's method for the same step size?","a":"The third-order Taylor's method produces a significantly smaller error."},
    {"q":"What is the initial condition value $z_0$ in the Taylor method examples provided in the text?","a":"$z_0 = 1$"},
    {"q":"Process: How is $y'''(t)$ computed for Taylor's method using $f$?","a":"By differentiating the expression for $y''(t)$ with respect to $t$ and substituting $y' = f(t, y)$."},
    {"q":"The notation $f^{(i)}(t, y(t))$ denotes the $i$-th derivative of the _____ function $f(t, y(t))$ with respect to $t$.","a":"composite"},
    {"q":"If $h=0.2$ and $h=0.1$ are compared in a 3rd order method, the error reduction factor should be roughly _____.","a":"one eighth ($2^3$)"},
    {"q":"True or False: Taylor's method can be generalized for non-uniform mesh points using $h_i$ instead of a constant $h$.","a":"True"},
    {"q":"What is the primary practical difficulty in implementing high-order Taylor's methods?","a":"The need to analytically compute and evaluate multiple high-order partial derivatives of $f$."},
    {"q":"Which specific one-step method is equivalent to a first-order Taylor's method?","a":"Euler's method"},
    {"q":"In Theorem 10.7, what is the relationship between the local truncation error order $\\alpha$ and the convergence order?","a":"They are the same; the method converges in order $\\alpha$."},
    {"q":"What does the symbol $\\xi_i$ represent in the Taylor expansion remainder?","a":"An unknown point in the interval $(t_i, t_{i+1})$ where the high-order derivative is evaluated for the error term."},
    {"q":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the value of $y'(0)$ given $y(0)=1$?","a":"$2(1) - 10(0)^2 + 2(0) = 2$"},
    {"q":"If a method is order $\\alpha=2$, and the error at $h=0.2$ is $1.1825e-02$, what is the approximate expected error at $h=0.1$?","a":"Approximately $2.956e-03$ (one quarter of the original error)."},
    {"q":"Concept: Equidistant mesh points","a":"Definition: A set of points $t_i$ where the distance between consecutive points $t_{i+1} - t_i$ is a constant value $h$."},
    {"q":"Cloze: The Taylor's method of order $\\alpha$ requires $F(t, z; h)$ to include derivatives of $f$ up to order _____.","a":"$\\alpha - 1$"},
    {"q":"In the definition of $\\tau_{i+1}$, what term represents the finite difference approximation of the derivative?","a":"$\\frac{y(t_{i+1}) - y(t_i)}{h}$"},
    {"q":"Why is the Lipschitz property of $F$ in the second variable necessary for Theorem 10.7?","a":"To ensure that the differences between the approximate steps and the exact solution do not grow uncontrollably (stability/convergence)."},
    {"q":"What is the purpose of selecting $F$ such that $\\tau_{i+1}$ is high-order?","a":"To achieve a higher order of convergence and thus a more accurate numerical solution for a given step size $h$."},
    {"q":"What interval is $F$ defined on for the general one-step method?","a":"$[t_0, T] \\times \\mathbb{R} \\times [0, H]$"},
    {"q":"In the expansion for $y(t_{i+1})$, the first two terms $y(t_i) + hf(t_i, y(t_i))$ correspond to which basic method?","a":"Euler's method"},
    {"q":"For $y' = 2y - 10t^2 + 2t$, what is the coefficient of $h^3/6$ in the third-order Taylor method step formula?","a":"$8z_i - 40t_i^2 - 32t_i - 16$"},
    {"q":"What is the global error notation used in Theorem 10.7?","a":"$|y(t_i) - z_i|$"},
    {"q":"Formula: Write the total derivative operator $\\frac{d}{dt}$ applied to $f(t, y(t))$.","a":"$\\frac{d}{dt}f(t, y(t)) = \\frac{\\partial f}{\\partial t} + \\frac{\\partial f}{\\partial y}y'$"},
    {"q":"In the provided tables, as $t_i$ increases, what generally happens to the error $|y(t_i) - z_i|$?","a":"The error generally increases as the solution progresses."},
    {"q":"Term: One-step method","a":"Definition: A numerical procedure where the approximation at the next time level $z_{i+1}$ is calculated using only information from the current time level $z_i$."},
    {"q":"What does the notation $\\langle t, t_i \\rangle$ typically denote in the context of Taylor's theorem?","a":"The open interval between $t$ and $t_i$."},
    {"q":"If $f(t, y)$ is a function of $y$ only (autonomous), how does the formula for $y''(t)$ simplify?","a":"$y''(t) = \\frac{\\partial f}{\\partial y}f$"},
    {"q":"In the second-order Taylor method example, what is the value of $f^{(1)}$ at $t=0, z=1$?","a":"$4(1) - 20(0)^2 - 16(0) + 2 = 6$"},
    {"q":"Given $z_0 = 1, h = 0.2$, and $f(t_0, z_0) = 2$, and $f^{(1)}(t_0, z_0) = 6$, calculate $z_1$ for a 2nd order Taylor method.","a":"$z_1 = 1 + 0.2(2) + \\frac{0.2^2}{2}(6) = 1 + 0.4 + 0.12 = 1.52$"},
    {"q":"Which theorem in the text provides the theoretical basis for the convergence of the Taylor method?","a":"Theorem 10.7"},
    {"q":"The local truncation error $\\tau_{i+1}$ is the difference between the exact solution's increment and the numerical method's increment, divided by _____.","a":"the step size $h$"},
    {"q":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the derivative $\\frac{\\partial f}{\\partial y}$?","a":"$2$"},
    {"q":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the derivative $\\frac{\\partial f}{\\partial t}$?","a":"$-20t + 2$"},
    {"q":"Formula: The general form of the remainder term in the Taylor expansion of degree $\\alpha$.","a":"$\\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$"},
    {"q":"Cloze: In the expression for $F(t, z; h)$, the coefficient of the $h^{k-1}$ term is _____.","a":"$\\frac{1}{k!}f^{(k-1)}(t, z)$"},
    {"q":"In the provided tables, which method shows a smaller error at $t=1.0$ for $h=0.1$: Second-order or Third-order Taylor?","a":"Third-order Taylor method ($4.1989e-03$ vs $8.4425e-02$)."}
  ],
  "10.5": [
    {"q":"What is the primary motivation for using Runge–Kutta methods instead of high-order Taylor methods?","a":"To avoid the complex computation of higher-order derivatives of $f$ while maintaining high convergence rates."},
    {"q":"In the context of ODEs, what happens to the computational complexity of Taylor's method as the order increases?","a":"It increases significantly because the formulas for the derivatives $f^{(i)}$ becomes increasingly complicated."},
    {"q":"Runge–Kutta methods aim to reduce computational complexity while preserving the _____ of Taylor methods.","a":"high convergence rates"},
    {"q":"What mathematical expansion is used to derive the parameters for second-order Runge–Kutta methods?","a":"The multivariable Taylor formula for $f(t + a, z + b)$."},
    {"q":"How is the 'essential part' of $f(t + \\frac{h}{2}, z + \\frac{h}{2}f(t, z))$ related to the second-order Taylor method?","a":"It coincides with the Taylor function $F(t, z; h)$ except for the second-order error term $E$."},
    {"q":"What is the specific iteration formula for the midpoint method?","a":"$z_{i+1} = z_i + hf(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}f(t_i, z_i))$"},
    {"q":"What is the order of convergence for the midpoint method?","a":"Quadratic (second-order)."},
    {"q":"Under what condition regarding the function $f$ does the midpoint method guaranteed quadratic convergence?","a":"When $f$ is Lipschitz continuous in its second variable and $f \\in C^2$."},
    {"q":"In the general explicit Runge–Kutta formula $F(t, z; h) = \\sum_{j=1}^{p}\\gamma_j G_j$, what is the definition of $G_1$?","a":"$G_1(t, z; h) = f(t, z)$"},
    {"q":"What is the general recursive formula for the stage values $G_j$ in an explicit Runge–Kutta method?","a":"$G_j(t, z; h) = f(t + \\alpha_j h, z + h\\sum_{k=1}^{j-1}\\beta_{jk}G_k(t, z; h))$"},
    {"q":"What is the primary goal when selecting the parameters $\\gamma_j$, $\\alpha_j$, and $\\beta_{jk}$ in Runge–Kutta methods?","a":"To achieve the highest possible order for the local truncation error."},
    {"q":"For a Runge–Kutta method with $p=2$, what is the general form of the function $F(t, z; h)$?","a":"$F(t, z; h) = \\gamma_1 f(t, z) + \\gamma_2 f(t + \\alpha_1 h, z + \\beta_{21}hf(t, z))$"},
    {"q":"Which specific parameter values in a $p=2$ Runge–Kutta method yield the midpoint method?","a":"$\\gamma_1 = 0$, $\\gamma_2 = 1$, and $\\alpha_1 = \\beta_{21} = 1/2$."},
    {"q":"Why is it impossible to construct a third-order Runge–Kutta method using only two stages ($p=2$)?","a":"The $p=2$ formula lacks terms corresponding to $\\frac{\\partial f}{\\partial t}\\frac{\\partial f}{\\partial y}$ and $(\\frac{\\partial f}{\\partial y})^2 f$ found in the third-order Taylor expansion."},
    {"q":"To ensure a $p=2$ Runge–Kutta method is at least second-order, what must the sum $\\gamma_1 + \\gamma_2$ equal?","a":"1"},
    {"q":"In a second-order Runge–Kutta method ($p=2$), what is the required value for the product $\\gamma_2 \\alpha_1$?","a":"$1/2$"},
    {"q":"In a second-order Runge–Kutta method ($p=2$), what is the required value for the product $\\gamma_2 \\beta_{21}$?","a":"$1/2$"},
    {"q":"What are the parameter values $\\gamma_1$, $\\gamma_2$, $\\alpha_1$, and $\\beta_{21}$ for the modified Euler method?","a":"$\\gamma_1 = 1/2$, $\\gamma_2 = 1/2$, $\\alpha_1 = 1$, and $\\beta_{21} = 1$."},
    {"q":"What is the iteration formula for the modified Euler method?","a":"$z_{i+1} = z_i + \\frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i)))$"},
    {"q":"What is the geometric interpretation of the modified Euler method?","a":"It moves from $(t_i, z_i)$ using the average of the slopes at the current point and the Euler-predicted next point."},
    {"q":"In the modified Euler method, what does $w_{i+1} = z_i + hf(t_i, z_i)$ represent?","a":"The intermediate predicted value for $z$ at $t_{i+1}$ calculated via a standard Euler step."},
    {"q":"What are the parameter values $\\gamma_1$, $\\gamma_2$, $\\alpha_1$, and $\\beta_{21}$ for Heun's method as described in the source?","a":"$\\gamma_1 = 1/4$, $\\gamma_2 = 3/4$, $\\alpha_1 = 2/3$, and $\\beta_{21} = 2/3$."},
    {"q":"What is the specific iteration formula for Heun's method?","a":"$z_{i+1} = z_i + \\frac{h}{4}(f(t_i, z_i) + 3f(t_i + \\frac{2h}{3}, z_i + \\frac{2}{3}hf(t_i, z_i)))$"},
    {"q":"Both the modified Euler method and Heun's method belong to which class of Runge–Kutta formulas?","a":"Second-order Runge–Kutta methods."},
    {"q":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=4$ stages?","a":"4"},
    {"q":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=5$ stages?","a":"4"},
    {"q":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=6$ stages?","a":"5"},
    {"q":"What is the value of the first stage $w_{i,1}$ in the classical fourth-order Runge–Kutta method?","a":"$w_{i,1} = f(t_i, z_i)$"},
    {"q":"In the classical RK4 method, what is the formula for the second stage $w_{i,2}$?","a":"$w_{i,2} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,1})$"},
    {"q":"In the classical RK4 method, what is the formula for the third stage $w_{i,3}$?","a":"$w_{i,3} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,2})$"},
    {"q":"In the classical RK4 method, what is the formula for the fourth stage $w_{i,4}$?","a":"$w_{i,4} = f(t_{i+1}, z_i + hw_{i,3})$"},
    {"q":"What is the final step formula for $z_{i+1}$ in the classical fourth-order Runge–Kutta method?","a":"$z_{i+1} = z_i + \\frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4})$"},
    {"q":"What smoothness condition on $f$ is required for the classical Runge–Kutta method to have a fourth-order local truncation error?","a":"$f \\in C^5$"},
    {"q":"How does the classical fourth-order Runge–Kutta method relate to Simpson's rule?","a":"If $f$ depends only on $t$, the method reduces to Simpson's rule."},
    {"q":"How many function evaluations per step are required for the classical fourth-order Runge–Kutta method?","a":"Four"},
    {"q":"How many function evaluations per step are required for the modified Euler method?","a":"Two"},
    {"q":"In the $p=2$ case, how many equations must be satisfied to identify as many second-order terms as possible?","a":"Six (three for first-order agreement and three for partial second-order agreement)."},
    {"q":"For the IVP $y' = 2 - t - y, y(0) = 1$, how do the results of the midpoint, modified Euler, and Heun methods compare?","a":"They generate the same approximate solution for any step size $h$."},
    {"q":"What is the relationship between the local truncation error of the midpoint method ($\\tau_{i+1}$) and the second-order Taylor method ($\\bar{\\tau}_{i+1}$)?","a":"$\\tau_{i+1} = \\bar{\\tau}_{i+1} - E(t_i, y(t_i), \\frac{h}{2}, \\frac{h}{2}f(t_i, y(t_i)))$"},
    {"q":"In the general RK formula, what do the parameters $\\alpha_j$ represent?","a":"The fractions of the step size $h$ added to the time variable $t$ for each stage evaluation."},
    {"q":"In the general RK formula, what do the parameters $\\gamma_j$ represent?","a":"The weights assigned to each stage's slope $G_j$ in the final average."},
    {"q":"What is the local truncation error order of a 'third-order' Runge–Kutta method?","a":"Third-order ($O(h^3)$)."},
    {"q":"For $p=1$, the Runge–Kutta method reduces to which well-known numerical method?","a":"The Euler method."},
    {"q":"If $f$ is Lipschitz continuous in its second variable, the midpoint method's increment function $F$ is also _____.","a":"Lipschitz continuous in its second variable"},
    {"q":"What is the maximum order of a Runge–Kutta method where the number of stages $p$ equals 10?","a":"7"},
    {"q":"What is the maximum order of a Runge–Kutta method where the number of stages $p$ equals 2?","a":"2"},
    {"q":"In the classical RK4 method, the time points used for the four slopes are $t_i$, $t_i + h/2$, $t_i + h/2$, and _____.","a":"$t_{i+1}$ (or $t_i + h$)"},
    {"q":"Which method uses a slope calculated at $t_i + 2h/3$ as its second stage?","a":"Heun's method."},
    {"q":"Which method uses a slope calculated at $t_i + h/2$ using an intermediate Euler half-step?","a":"The midpoint method."},
    {"q":"What characterizes an 'explicit' Runge–Kutta method compared to an implicit one?","a":"Each stage $G_j$ is calculated using only previously determined stages $G_1, \\dots, G_{j-1}$."},
    {"q":"The error term $E(t, z, a, b)$ in the derivation of the midpoint method is of what order?","a":"Second-order."},
    {"q":"In the context of the $p=2$ RK method, what is the role of $\\beta_{21}$?","a":"It is the coefficient weighting the first slope $G_1$ in the argument of the second stage $G_2$."},
    {"q":"When comparing the numerical results for $y' = 2y - 10t^2 + 2t$, which method typically shows the smallest error at $t=1.0$ for $h=0.1$?","a":"The classical fourth-order Runge–Kutta method."},
    {"q":"The function $F(t, z; h)$ in a Runge–Kutta method is often called the _____ function.","a":"increment"},
    {"q":"To achieve a fourth-order local error, what is the minimum number of stages required?","a":"4"},
    {"q":"To achieve a fifth-order local error, what is the minimum number of stages required?","a":"6"},
    {"q":"In the derivation of RK methods, why is the 'Lipschitz continuity' of $f$ important?","a":"It ensures the stability and convergence of the numerical approximation."},
    {"q":"The midpoint method is an example of a _____ stage Runge–Kutta method.","a":"two"},
    {"q":"In the modified Euler method, the final slope is the _____ of the slopes at the beginning and end of the interval.","a":"arithmetic mean (or average)"},
    {"q":"What is the sum of the weights $\\gamma_j$ in the classical RK4 method?","a":"1 (from $\\frac{1}{6} + \\frac{2}{6} + \\frac{2}{6} + \\frac{1}{6}$)."}
  ],
};
