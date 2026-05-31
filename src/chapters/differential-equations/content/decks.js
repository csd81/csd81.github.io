// Auto-generated learning aids for chapter 10 (ODEs). Glossaries and flashcards bilingual. Keyed by section id.
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
    {"q":{"en":"In the context of ordinary differential equations, what does the abbreviation 'IVP' stand for?","hu":"A közönséges differenciálegyenletek összefüggésében mit jelent az „IVP” rövidítés?"},"a":{"en":"Initial Value Problem","hu":"Kezdeti érték probléma"}},
    {"q":{"en":"What is the standard mathematical form of a first-order scalar initial value problem?","hu":"Mi az elsőrendű skaláris kezdőérték-probléma szabványos matematikai formája?"},"a":{"en":"$y' = f(t, y), \\quad y(t_0) = y_0$","hu":"$y' = f(t, y), \\quad y(t_0) = y_0$"}},
    {"q":{"en":"In a scalar IVP $y' = f(t, y)$, what is the typical domain and codomain of the function $f$?","hu":"Mi a $f$ függvény tipikus tartománya és kódtartománya egy skaláris IVP $y' = f(t, y)$-ben?"},"a":{"en":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$","hu":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$"}},
    {"q":{"en":"What notation represents the vector-valued version of an initial value problem for a system of $m$ dimensions?","hu":"Milyen jelölés reprezentálja a $m$ méretrendszer kezdeti értékprobléma vektorértékes változatát?"},"a":{"en":"$\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y}), \\quad \\mathbf{y}(t_0) = \\mathbf{y}^{(0)}$","hu":"$\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y}), \\quad \\mathbf{y}(t_0) = \\mathbf{y}^{(0)}$"}},
    {"q":{"en":"In the system-based IVP $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, what is the codomain of the function $\\mathbf{f}$?","hu":"A $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ rendszeralapú IVP-ben mi a $\\mathbf{f}$ függvény kódtartománya?"},"a":{"en":"$\\mathbb{R}^m$","hu":"$\\mathbb{R}^m$"}},
    {"q":{"en":"A function $f(t, y)$ is _____ in its second variable if there exists a constant $L$ such that $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$.","hu":"A $f(t, y)$ függvény _____ a második változójában, ha létezik olyan $L$ konstans, amelyre a $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$."},"a":{"en":"Lipschitz continuous","hu":"Lipschitz folyamatos"}},
    {"q":{"en":"What is the term for the constant $L$ in the inequality $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$?","hu":"Mi a kifejezés a $L$ konstansra a $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$ egyenlőtlenségben?"},"a":{"en":"Lipschitz constant","hu":"Lipschitz állandó"}},
    {"q":{"en":"When generalizing the Lipschitz condition to systems of differential equations, what mathematical tool replaces the absolute value symbol?","hu":"Amikor a Lipschitz-feltételt differenciálegyenlet-rendszerekre általánosítjuk, milyen matematikai eszköz helyettesíti az abszolút érték szimbólumát?"},"a":{"en":"A vector norm","hu":"Vektor norma"}},
    {"q":{"en":"According to the theory of ODEs, what property of $f$ is generally sufficient to guarantee the *existence* of a solution to an IVP?","hu":"Az ODE-k elmélete szerint a $f$ mely tulajdonsága általában elegendő egy IVP megoldásának *létezéséhez*?"},"a":{"en":"Continuity of $f$","hu":"A $f$ folytonossága"}},
    {"q":{"en":"To guarantee the *uniqueness* of a solution to an IVP, what property must $f$ satisfy in its second variable in addition to continuity?","hu":"Egy IVP megoldásának *egyediségének* garantálásához milyen tulajdonságot kell kielégítenie a $f$ második változójában a folytonosságon kívül?"},"a":{"en":"Lipschitz continuity","hu":"Lipschitz folytonosság"}},
    {"q":{"en":"Theorem 10.1: If $f$ is continuous and Lipschitz continuous in its second variable, on what interval is a unique solution guaranteed to exist?","hu":"10.1. Tétel: Ha $f$ folytonos, Lipschitz pedig folytonos a második változójában, milyen intervallumon garantáltan létezik egyedi megoldás?"},"a":{"en":"$[t_0, T]$ (or more generally the finite interval of definition)","hu":"$[t_0, T]$ (vagy általánosabban a definíció véges intervalluma)"}},
    {"q":{"en":"How does the requirement for *local* Lipschitz continuity differ from *global* Lipschitz continuity regarding the range of $y$?","hu":"Miben különbözik a *helyi* Lipschitz folytonosság követelménye a *globális* Lipschitz folytonosságtól a $y$ tartományban?"},"a":{"en":"It only requires the Lipschitz condition to hold for $y, \\tilde{y}$ within a specific interval $[a, b]$ containing $y_0$.","hu":"Csak a Lipschitz-feltételnek kell érvényesülnie a $y, \\tilde{y}$-re egy adott $[a, b]$ intervallumon belül, amely tartalmazza a $y_0$-t."}},
    {"q":{"en":"If a function $f$ is locally Lipschitz continuous but not globally, what is the potential limitation on the solution's existence interval?","hu":"Ha egy $f$ függvény lokálisan Lipschitz folytonos, de nem globálisan, mi a lehetséges korlátja a megoldás létezési intervallumának?"},"a":{"en":"The solution might only exist on a smaller interval $[t_0, \\bar{T}]$ where $0 < \\bar{T} \\le T$.","hu":"A megoldás csak egy kisebb $[t_0, \\bar{T}]$ intervallumon létezik, ahol a $0 < \\bar{T} \\le T$."}},
    {"q":{"en":"What condition regarding the derivative of $f$ with respect to its second variable is sufficient to prove that $f$ is locally Lipschitz continuous?","hu":"Milyen feltétel elegendő a $f$ deriváltjának második változójához képest annak bizonyítására, hogy a $f$ lokálisan Lipschitz folytonos?"},"a":{"en":"$f$ is continuously differentiable with respect to its second variable.","hu":"A $f$ a második változójához képest folyamatosan differenciálható."}},
    {"q":{"en":"Concept: $m$th-order IVP transformation","hu":"Koncepció: $m$-edrendű IVP transzformáció"},"a":{"en":"An $m$th-order scalar IVP is equivalent to a system of $m$ first-order differential equations.","hu":"A $m$-edrendű skalár IVP egyenértékű a $m$ elsőrendű differenciálegyenletek rendszerével."}},
    {"q":{"en":"When converting a second-order ODE $y'' = f(t, y, y')$ into a system, what are the components of the vector $\\mathbf{y}$?","hu":"Amikor egy másodrendű ODE $y'' = f(t, y, y')$ rendszert alakítunk át, melyek a $\\mathbf{y}$ vektor összetevői?"},"a":{"en":"$\\mathbf{y} = (y, y')^T$","hu":"$\\mathbf{y} = (y, y')^T$"}},
    {"q":{"en":"When converting an $m$th-order ODE to a first-order system, what is the initial vector $\\mathbf{y}^{(0)}$ composed of?","hu":"Amikor egy $m$-edrendű ODE-t elsőrendű rendszerré konvertálunk, miből áll a $\\mathbf{y}^{(0)}$ kezdeti vektor?"},"a":{"en":"The initial values $(y_0, y_1, \\ldots, y_{m-1})^T$","hu":"A kezdeti értékek $(y_0, y_1, \\ldots, y_{m-1})^T$"}},
    {"q":{"en":"Convert the second-order equation $y'' + 5y' = e^{2t-1}$ into the first component of a vector derivative $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ where $y_1 = y$ and $y_2 = y'$.","hu":"Alakítsa át a $y'' + 5y' = e^{2t-1}$ másodrendű egyenletet a $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ vektorszármazék első komponensévé, ahol $y_1 = y$ és $y_2 = y'$."},"a":{"en":"$y_1' = y_2$","hu":"$y_1' = y_2$"}},
    {"q":{"en":"For the IVP $y' = \\sqrt{|y|}, y(0) = 0$, what are two distinct solutions that demonstrate a lack of uniqueness?","hu":"Az IVP $y' = \\sqrt{|y|}, y(0) = 0$ esetében mi az a két különálló megoldás, amely az egyediség hiányát mutatja?"},"a":{"en":"$y(t) = 0$ and $y(t) = t^2/4$","hu":"$y(t) = 0$ és $y(t) = t^2/4$"}},
    {"q":{"en":"Why does the IVP $y' = \\sqrt{|y|}, y(0) = 0$ have multiple solutions?","hu":"Miért van több megoldása az IVP $y' = \\sqrt{|y|}, y(0) = 0$-nek?"},"a":{"en":"The function $f(y) = \\sqrt{|y|}$ is not Lipschitz continuous at $y=0$.","hu":"A $f(y) = \\sqrt{|y|}$ funkció nem Lipschitz folyamatos a $y=0$-nél."}},
    {"q":{"en":"The IVP $y' = y^2, y(0) = 1$ fails to have a solution on $[0, T]$ if $T \\ge 1$ because $g(y) = y^2$ is not _____ Lipschitz continuous.","hu":"Az IVP $y' = y^2, y(0) = 1$ nem talál megoldást a $[0, T]$-re, ha a $T \\ge 1$, mert a $g(y) = y^2$ nem _____ Lipschitz folytonos."},"a":{"en":"globally","hu":"globálisan"}},
    {"q":{"en":"Is the function $g(y) = y^2$ locally Lipschitz continuous on any finite interval?","hu":"Folyamatos-e a $g(y) = y^2$ függvény lokálisan Lipschitz bármely véges intervallumon?"},"a":{"en":"Yes","hu":"Igen"}},
    {"q":{"en":"For the system $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, how is the Lipschitz condition defined using norms?","hu":"A $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ rendszer esetében hogyan definiálható a Lipschitz-feltétel normák segítségével?"},"a":{"en":"$\\|\\mathbf{f}(t, \\mathbf{y}) - \\mathbf{f}(t, \\tilde{\\mathbf{y}})\\| \\le L\\|\\mathbf{y} - \\tilde{\\mathbf{y}}\\|$","hu":"$\\|\\mathbf{f}(t, \\mathbf{y}) - \\mathbf{f}(t, \\tilde{\\mathbf{y}})\\| \\le L\\|\\mathbf{y} - \\tilde{\\mathbf{y}}\\|$"}},
    {"q":{"en":"In the context of numerical methods, why do we often assume global Lipschitz continuity despite it being a strong condition?","hu":"A numerikus módszerek kontextusában miért feltételezzük gyakran globális Lipschitz-folytonosságot, annak ellenére, hogy ez erős feltétel?"},"a":{"en":"To avoid technical problems regarding the existence of the solution over the entire interval $[t_0, T]$.","hu":"A megoldás meglétével kapcsolatos technikai problémák elkerülése érdekében a teljes $[t_0, T]$ intervallumban."}},
    {"q":{"en":"True or False: Continuity of $f$ alone guarantees a unique solution to an IVP.","hu":"Igaz vagy hamis: A $f$ folytonossága önmagában garantálja az egyedi megoldást az IVP számára."},"a":{"en":"False (it only guarantees existence, not uniqueness).","hu":"Hamis (csak a létezést garantálja, az egyediséget nem)."}},
    {"q":{"en":"In the scalar IVP $y' = f(t, y)$, which variable of $f$ is the Lipschitz condition applied to?","hu":"Az IVP $y' = f(t, y)$ skalárban a $f$ melyik változójára vonatkozik a Lipschitz-feltétel?"},"a":{"en":"The second variable ($y$).","hu":"A második változó ($y$)."}},
    {"q":{"en":"What specific property of $f$ is required for the Picard-Lindelöf theorem (Theorem 10.1 in the text) to ensure existence and uniqueness?","hu":"Milyen konkrét $f$ tulajdonság szükséges ahhoz, hogy a Picard-Lindelöf-tétel (a szövegben 10.1. tétel) biztosítsa a létezést és az egyediséget?"},"a":{"en":"$f$ must be continuous and Lipschitz continuous in its second variable.","hu":"A $f$-nek folytonosnak, a Lipschitz-nek pedig folytonosnak kell lennie a második változójában."}},
    {"q":{"en":"If $y''' + 4y'' - 2y' + 5y = t^3$ is converted to a system $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, what is the expression for $y_3'$ if $y_1=y, y_2=y', y_3=y''$?","hu":"Ha a $y''' + 4y'' - 2y' + 5y = t^3$ $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ rendszerré alakul, mi a $y_3'$ kifejezés, ha $y_1=y, y_2=y', y_3=y''$?"},"a":{"en":"$y_3' = t^3 - 4y_3 + 2y_2 - 5y_1$","hu":"$y_3' = t^3 - 4y_3 + 2y_2 - 5y_1$"}},
    {"q":{"en":"What is the initial vector $\\mathbf{y}^{(0)}$ for the IVP $y'' + 5y' = e^{2t-1}, y(0)=3, y'(0)=-1$?","hu":"Mi az IVP $y'' + 5y' = e^{2t-1}, y(0)=3, y'(0)=-1$ kezdeti $\\mathbf{y}^{(0)}$ vektora?"},"a":{"en":"$(3, -1)^T$","hu":"$(3, -1)^T$"}},
    {"q":{"en":"If a function is continuously parciálisan differenciálható (continuously partially differentiable) with respect to $y$, it implies the function is _____ Lipschitz continuous.","hu":"Ha egy függvény folyamatosan parciálisan differenciálható (folyamatosan részlegesen differenciálható) $y$-hez képest, az azt jelenti, hogy a függvény _____ Lipschitz folytonos."},"a":{"en":"locally","hu":"helyileg"}},
    {"q":{"en":"On the interval $[t_0, T]$, what does the red curve typically represent in a direction field diagram for an IVP?","hu":"A $[t_0, T]$ intervallumon mit ábrázol a piros görbe általában egy IVP iránymező diagramjában?"},"a":{"en":"The specific solution passing through the initial point $(t_0, y_0)$.","hu":"A $(t_0, y_0)$ kezdőponton áthaladó konkrét megoldás."}},
    {"q":{"en":"What is the relationship between global Lipschitz continuity and local Lipschitz continuity?","hu":"Mi a kapcsolat a globális Lipschitz-kontinuitás és a lokális Lipschitz-kontinuitás között?"},"a":{"en":"Global Lipschitz continuity is a stronger condition that implies local Lipschitz continuity.","hu":"A globális Lipschitz-kontinuitás erősebb feltétel, amely helyi Lipschitz-folytonosságra utal."}},
    {"q":{"en":"Why is the function $f(y) = \\sqrt{|y|}$ not Lipschitz at $y=0$?","hu":"Miért nem Lipschitz a $f(y) = \\sqrt{|y|}$ funkció a $y=0$-nél?"},"a":{"en":"The ratio $|\\sqrt{|y|} - \\sqrt{0}| / |y - 0| = 1/\\sqrt{|y|}$ approaches infinity as $y$ approaches zero.","hu":"A $|\\sqrt{|y|} - \\sqrt{0}| / |y - 0| = 1/\\sqrt{|y|}$ arány közelít a végtelenhez, ahogy a $y$ nullához közelít."}},
    {"q":{"en":"Under local Lipschitz conditions, what defines the sub-interval $[t_0, \\bar{T}]$?","hu":"Helyi Lipschitz körülmények között mi határozza meg a $[t_0, \\bar{T}]$ részintervallumot?"},"a":{"en":"It is the interval on which a unique solution is guaranteed to exist before it potentially leaves the region where the Lipschitz condition was defined.","hu":"Ez az az intervallum, amelyen egy egyedi megoldás garantáltan létezik, mielőtt potenciálisan elhagyná azt a régiót, ahol a Lipschitz-feltételt meghatározták."}},
    {"q":{"en":"In the transformation of an $m$th order ODE to a system, the variable $y_{i+1}$ is defined as the _____ of $y_i$.","hu":"A $m$-edik rendű ODE rendszerré alakításakor a $y_{i+1}$ változó a $y_i$ _____ értékeként van definiálva."},"a":{"en":"derivative","hu":"származéka"}},
    {"q":{"en":"In the IVP $y' = y^2, y(0) = 1$, at what value of $t$ does the solution 'blow up' or cease to exist?","hu":"Az IVP $y' = y^2, y(0) = 1$-ben a $t$ mekkora értékénél \"felrobban\" vagy megszűnik létezni a megoldás?"},"a":{"en":"$t = 1$","hu":"$t = 1$"}},
    {"q":{"en":"The Lipschitz condition is primarily used to control the _____ of the function $f$ relative to changes in $y$.","hu":"A Lipschitz-feltétel elsősorban a $f$ függvény _____ értékének szabályozására szolgál a $y$ változásaihoz képest."},"a":{"en":"rate of change (or growth)","hu":"változás (vagy növekedés) üteme"}},
    {"q":{"en":"Definition: Kezdeti érték probléma","hu":"Definíció: Kezdeti érték probléma"},"a":{"en":"The Hungarian term for Initial Value Problem (IVP).","hu":"Az Initial Value Problem (IVP) magyar kifejezése."}},
    {"q":{"en":"Definition: Iránymező","hu":"Definíció: Iránymező"},"a":{"en":"The Hungarian term for a direction field (or slope field).","hu":"Az iránymező (vagy lejtőmező) magyar kifejezése."}},
    {"q":{"en":"In Exercise 1(b), $y'' - t^2 y' + ty = 0, y(1)=1, y'(1)=0$. What is the starting time $t_0$?","hu":"Az 1(b) gyakorlatban $y'' - t^2 y' + ty = 0, y(1)=1, y'(1)=0$. Mi a kezdési időpont $t_0$?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"If $\\mathbf{f}$ is continuous in $t$, what does the Lipschitz property in $\\mathbf{y}$ ensure about the solution path?","hu":"Ha a $\\mathbf{f}$ folyamatos a $t$-ben, mit biztosít a Lipschitz tulajdonság a $\\mathbf{y}$-ben a megoldási útvonalról?"},"a":{"en":"It ensures the solution path is unique and does not branch.","hu":"Biztosítja, hogy a megoldási útvonal egyedi legyen, és ne ágasszon el."}},
    {"q":{"en":"Is the condition $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$ required to hold for all $t$ in the interval $[t_0, T]$?","hu":"A $|f(t, y) - f(t, \\tilde{y})| \\le L|y - \\tilde{y}|$ feltételnek teljesülnie kell az összes $t$ esetében a $[t_0, T]$ intervallumban?"},"a":{"en":"Yes","hu":"Igen"}},
    {"q":{"en":"In the scalar case $y' = f(t, y)$, what does $y'$ represent?","hu":"A $y' = f(t, y)$ skalár esetben mit jelent a $y'$?"},"a":{"en":"The first derivative of $y$ with respect to $t$ (the slope of the solution curve).","hu":"A $y$ első deriváltja a $t$-hez képest (a megoldási görbe meredeksége)."}},
    {"q":{"en":"Does Theorem 10.1 apply to systems of differential equations?","hu":"Alkalmas-e a 10.1. Tétel differenciálegyenletrendszerekre?"},"a":{"en":"Yes, it can be generalized to systems using vector norms.","hu":"Igen, általánosítható vektornormákat használó rendszerekre."}},
    {"q":{"en":"Which specific example from the text shows that continuity without Lipschitz continuity allows for multiple solutions?","hu":"A szövegből melyik konkrét példa mutatja, hogy a Lipschitz-féle folytonosság nélküli folytonosság többféle megoldást tesz lehetővé?"},"a":{"en":"$y' = \\sqrt{|y|}, y(0) = 0$","hu":"$y' = \\sqrt{|y|}, y(0) = 0$"}},
    {"q":{"en":"The Lipschitz constant $L$ must be _____ of $t, y,$ and $\\tilde{y}$ for global Lipschitz continuity.","hu":"A $L$ Lipschitz-állandónak a $t, y,$ és a $\\tilde{y}$ _____ értékének kell lennie a globális Lipschitz-folytonossághoz."},"a":{"en":"independent","hu":"független"}},
    {"q":{"en":"What is the purpose of converting high-order ODEs into systems for numerical analysis?","hu":"Mi a célja a magas szintű ODE-k numerikus elemzésre alkalmas rendszerekké való átalakításának?"},"a":{"en":"Numerical methods (like Euler's) are typically defined and analyzed for first-order systems.","hu":"A numerikus módszereket (mint például az Euler-féle) általában az elsőrendű rendszerekre határozzák meg és elemzik."}},
    {"q":{"en":"In the equation $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$, if $\\mathbf{y} \\in \\mathbb{R}^m$, how many scalar equations are in the system?","hu":"A $\\mathbf{y}' = \\mathbf{f}(t, \\mathbf{y})$ egyenletben, ha $\\mathbf{y} \\in \\mathbb{R}^m$, hány skaláris egyenlet van a rendszerben?"},"a":{"en":"$m$","hu":"$m$"}},
    {"q":{"en":"If a function is globally Lipschitz continuous, is it also locally Lipschitz continuous?","hu":"Ha egy függvény globálisan Lipschitz folytonos, akkor lokálisan is Lipschitz folytonos?"},"a":{"en":"Yes","hu":"Igen"}},
    {"q":{"en":"For the IVP $y' = y^2, y(0)=1$, what is the explicit solution $y(t)$ that exists for $t < 1$?","hu":"Az IVP $y' = y^2, y(0)=1$ esetében mi az a $y(t)$ explicit megoldás, amely létezik a $t < 1$ számára?"},"a":{"en":"$y(t) = \\frac{1}{1-t}$","hu":"$y(t) = \\frac{1}{1-t}$"}}
  ],
  "10.2": [
    {"q":{"en":"What is the general formula for the Euler sequence $z_{i+1}$ in Euler's method for the IVP $y' = f(t, y)$?","hu":"Mi a $z_{i+1}$ Euler-szekvencia általános képlete az IVP $y' = f(t, y)$ Euler-módszerében?"},"a":{"en":"$z_{i+1} = z_i + h_i f(t_i, z_i)$","hu":"$z_{i+1} = z_i + h_i f(t_i, z_i)$"}},
    {"q":{"en":"In the context of numerical methods for ODEs, how is the step size $h_i$ defined between two mesh points $t_i$ and $t_{i+1}$?","hu":"Az ODE-k numerikus módszereivel összefüggésben hogyan definiálható a $h_i$ lépésméret két $t_i$ és $t_{i+1}$ hálópont között?"},"a":{"en":"$h_i = t_{i+1} - t_i$","hu":"$h_i = t_{i+1} - t_i$"}},
    {"q":{"en":"In Euler's method, what value is used as the starting point $z_0$ for the sequence?","hu":"Az Euler-módszerben milyen $z_0$ értéket használunk a sorozat kiindulópontjaként?"},"a":{"en":"$z_0 = y_0$","hu":"$z_0 = y_0$"}},
    {"q":{"en":"Which specific Taylor polynomial approximation is the basis for Method (i) of deriving Euler's method?","hu":"Melyik specifikus Taylor-polinom közelítés az alapja az (i) módszernek az Euler-módszer származtatásához?"},"a":{"en":"The first-order Taylor polynomial around $t_i$.","hu":"Az elsőrendű Taylor-polinom a $t_i$ körül."}},
    {"q":{"en":"Geometrically, Method (i) of Euler's method approximates the solution curve by following the _____ line at each mesh point.","hu":"Geometriailag az Euler-módszer (i) módszere a megoldási görbét úgy közelíti meg, hogy követi a _____ vonalat minden hálópontban."},"a":{"en":"tangent","hu":"tangens"}},
    {"q":{"en":"In Method (ii) of deriving Euler's method, what numerical differentiation formula is used to approximate $y'(t_i)$?","hu":"Az Euler-módszer levezetésének (ii) módszerében milyen numerikus differenciálási képletet használunk a $y'(t_i)$ közelítésére?"},"a":{"en":"The first-order forward difference formula $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$.","hu":"Az elsőrendű előremutató különbségi képlet $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$."}},
    {"q":{"en":"Method (iii) derives Euler's method by integrating $y'(t) = f(t, y(t))$ over what interval?","hu":"A (iii) módszer levezeti az Euler-módszert a $y'(t) = f(t, y(t))$ integrálásával, milyen intervallumon keresztül?"},"a":{"en":"$[t_i, t_{i+1}]$","hu":"$[t_i, t_{i+1}]$"}},
    {"q":{"en":"When deriving Euler's method via integration, what simple quadrature rule is applied to approximate $\\int_{t_i}^{t_{i+1}} f(s, y(s)) ds$?","hu":"Ha az Euler-módszert integrálással származtatjuk, milyen egyszerű kvadratúra szabályt alkalmazunk a $\\int_{t_i}^{t_{i+1}} f(s, y(s)) ds$ közelítésére?"},"a":{"en":"The left-hand endpoint approximation $g(a)(b - a)$.","hu":"A bal oldali végpont-közelítés $g(a)(b - a)$."}},
    {"q":{"en":"What is the exact analytical solution to the example IVP $y' = 2y - 10t^2 + 2t, y(0) = 1$?","hu":"Mi a pontos analitikai megoldás a példa IVP $y' = 2y - 10t^2 + 2t, y(0) = 1$-re?"},"a":{"en":"$y(t) = 5t^2 + 4t + 2 - e^{2t}$","hu":"$y(t) = 5t^2 + 4t + 2 - e^{2t}$"}},
    {"q":{"en":"Based on numerical observations in the text, if the step size $h$ is halved in Euler's method, what happens to the approximation error?","hu":"A szövegben található numerikus megfigyelések alapján, ha a $h$ lépésméretet Euler módszerében felére csökkentjük, mi történik a közelítési hibával?"},"a":{"en":"The error is also approximately halved.","hu":"A hiba is körülbelül a felére csökken."}},
    {"q":{"en":"What does it mean for the error of a numerical method to be 'linear in $h?","hu":"Mit jelent az, hogy egy numerikus metódus hibája 'lineáris $h-ban?"},"a":{"en":"The error is directly proportional to the step size $h$.","hu":"A hiba egyenesen arányos a $h$ lépésmérettel."}},
    {"q":{"en":"Define the local truncation error $\\tau_{i+1}$ for Euler's method at the $(i+1)$-th step.","hu":"Határozza meg a $\\tau_{i+1}$ helyi csonkítási hibát az Euler-módszerhez a $(i+1)$-edik lépésben."},"a":{"en":"$\\tau_{i+1} := \\frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$","hu":"$\\tau_{i+1}:= \\frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$"}},
    {"q":{"en":"How is the exact solution value $y(t_{i+1})$ expressed in terms of the previous value $y(t_i)$ and the local truncation error $\\tau_{i+1}$?","hu":"Hogyan fejeződik ki a $y(t_{i+1})$ pontos megoldási érték az előző $y(t_i)$ értékkel és a $\\tau_{i+1}$ helyi csonkítási hibával?"},"a":{"en":"$y(t_{i+1}) = y(t_i) + h f(t_i, y(t_i)) + \\tau_{i+1}h$","hu":"$y(t_{i+1}) = y(t_i) + h f(t_i, y(t_i)) + \\tau_{i+1}h$"}},
    {"q":{"en":"What does the term $|\\tau_{i+1}|h$ represent in the context of a single step of Euler's method?","hu":"Mit jelent a $|\\tau_{i+1}|h$ kifejezés az Euler-módszer egyetlen lépésének kontextusában?"},"a":{"en":"The error at step $i+1$ assuming the value at step $i$ was exact.","hu":"A $i+1$ lépésben a hiba a $i$ lépésben szereplő értéket feltételezve pontos volt."}},
    {"q":{"en":"Using the Taylor expansion of $y(t)$ around $t_i$, what is the specific expression for $\\tau_{i+1}$ involving the second derivative?","hu":"A $y(t)$ Taylor-kiterjesztését használva a $t_i$ körül, mi a $\\tau_{i+1}$ specifikus kifejezése a második deriválttal?"},"a":{"en":"$\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$ for some $\\xi \\in (t_i, t_{i+1})$","hu":"$\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$ néhány $\\xi \\in (t_i, t_{i+1})$-hez"}},
    {"q":{"en":"If a sequence $x_i$ satisfies $x_{i+1} \\le (1 + a)x_i + b$, what is the upper bound for $x_i$ involving an exponential function according to Theorem 10.3?","hu":"Ha egy $x_i$ sorozat kielégíti a $x_{i+1} \\le (1 + a)x_i + b$-t, akkor mekkora a $x_i$ felső korlátja, amely exponenciális függvényt tartalmaz a 10.3. Tétel szerint?"},"a":{"en":"$x_i \\le e^{ia}(\\frac{b}{a} + x_0) - \\frac{b}{a}$","hu":"$x_i \\le e^{ia}(\\frac{b}{a} + x_0) - \\frac{b}{a}$"}},
    {"q":{"en":"What elementary inequality is used to transition from $(1+a)^i$ to $e^{ia}$ in the proof of Theorem 10.3?","hu":"Milyen elemi egyenlőtlenséget használunk a $(1+a)^i$-ről $e^{ia}$-re való átmenetre a 10.3. Tétel bizonyítása során?"},"a":{"en":"$1 + x \\le e^x$","hu":"$1 + x \\le e^x$"}},
    {"q":{"en":"To prove the global error bound for Euler's method, what property must the function $f$ satisfy regarding its second variable?","hu":"Az Euler-módszerhez kötött globális hiba bizonyításához milyen tulajdonságnak kell megfelelnie a $f$ függvénynek a második változójára vonatkozóan?"},"a":{"en":"Lipschitz continuity","hu":"Lipschitz folytonosság"}},
    {"q":{"en":"What constant $L$ is used to bound $|f(t, y) - f(t, z)|$ in the proof of the global error theorem?","hu":"Milyen $L$ állandót használunk a $|f(t, y) - f(t, z)|$ lekötésére a globális hibatétel bizonyítása során?"},"a":{"en":"The Lipschitz constant $L$.","hu":"A Lipschitz állandó $L$."}},
    {"q":{"en":"Define $\\tau$ as used in the global error bound formula $|y(t_i) - z_i| \\le (e^{L(T - t_0)} - 1)\\frac{\\tau}{L}$.","hu":"Határozza meg a $\\tau$ értéket a $|y(t_i) - z_i| \\le (e^{L(T - t_0)} - 1)\\frac{\\tau}{L}$ globális hibakorlátozási képletben."},"a":{"en":"$\\tau = \\max\\{|\\tau_{i+1}| : i = 0, 1, \\dots, n-1\\}$","hu":"$\\tau = \\max\\{|\\tau_{i+1}|: i = 0, 1, \\dots, n-1\\}$"}},
    {"q":{"en":"In the global error bound for Euler's method, what value is assumed for the initial error $x_0 = |y(t_0) - z_0|$?","hu":"Az Euler-módszerhez kötött globális hibában milyen értéket feltételez a $x_0 = |y(t_0) - z_0|$ kezdeti hiba?"},"a":{"en":"$x_0 = 0$","hu":"$x_0 = 0$"}},
    {"q":{"en":"If $M_2$ is the maximum of $|y''(t)|$ on $[t_0, T]$, what is the upper bound for the magnitude of the local truncation error $|\\tau_{i+1}|$?","hu":"Ha a $M_2$ a $|y''(t)|$ maximuma a $[t_0, T]$-n, mi a $|\\tau_{i+1}|$ helyi csonkítási hiba nagyságának felső korlátja?"},"a":{"en":"$|\\tau_{i+1}| \\le \\frac{M_2}{2}h$","hu":"$|\\tau_{i+1}| \\le \\frac{M_2}{2}h$"}},
    {"q":{"en":"How can $y''(t)$ be expressed using the partial derivatives of $f(t, y)$ and the function $f$ itself?","hu":"Hogyan fejezhető ki $y''(t)$ a $f(t, y)$ parciális deriváltjai és maga a $f$ függvény segítségével?"},"a":{"en":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$","hu":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$"}},
    {"q":{"en":"According to Theorem 10.5, what is the order of convergence for Euler's method?","hu":"A 10.5. Tétel szerint mi a konvergencia sorrendje az Euler-módszernek?"},"a":{"en":"First-order (linear) convergence.","hu":"Elsőrendű (lineáris) konvergencia."}},
    {"q":{"en":"What are the three necessary conditions on $f$ listed in Theorem 10.5 to guarantee linear convergence of Euler's method?","hu":"Mi a 10.5. Tételben felsorolt ​​három szükséges feltétel a $f$-n az Euler-módszer lineáris konvergenciájának garantálásához?"},"a":{"en":"Continuity, Lipschitz continuity in the second variable, and continuous partial differentiability in both variables.","hu":"Folytonosság, Lipschitz folytonosság a második változóban és folyamatos parciális differenciálhatóság mindkét változóban."}},
    {"q":{"en":"If $|y(t_i) - z_i| \\le Kh$, what does the constant $K$ represent in terms of the method's behavior?","hu":"Ha $|y(t_i) - z_i| \\le Kh$, mit jelent a $K$ konstans a metódus viselkedése szempontjából?"},"a":{"en":"A positive constant that demonstrates the global error is proportional to the step size $h$.","hu":"A globális hibát mutató pozitív állandó arányos a $h$ lépésmérettel."}},
    {"q":{"en":"How is Euler's method adapted for a system of differential equations $Y' = F(t, Y)$?","hu":"Hogyan adaptálható az Euler-módszer a $Y' = F(t, Y)$ differenciálegyenlet-rendszerhez?"},"a":{"en":"The scalar formula is applied component-wise: $Z_{i+1} = Z_i + h F(t_i, Z_i)$ where $Z$ and $F$ are vectors.","hu":"A skaláris képlet komponensenként kerül alkalmazásra: $Z_{i+1} = Z_i + h F(t_i, Z_i)$ ahol $Z$ és $F$ vektorok."}},
    {"q":{"en":"To solve a second-order ODE $y'' = g(t, y, y')$ using Euler's method, what must be done first?","hu":"Mit kell először tenni egy másodrendű ODE $y'' = g(t, y, y')$ megoldásához az Euler-módszerrel?"},"a":{"en":"Transform it into an equivalent system of two first-order differential equations.","hu":"Alakítsa át két elsőrendű differenciálegyenletből álló ekvivalens rendszerré."}},
    {"q":{"en":"In transforming $y'' - 3y' + 2y = 2$ into a system, if $y_1 = y$, what is the definition of $y_2$?","hu":"A $y'' - 3y' + 2y = 2$ rendszerré alakításakor, ha $y_1 = y$, mi a $y_2$ definíciója?"},"a":{"en":"$y_2 = y'$","hu":"$y_2 = y'$"}},
    {"q":{"en":"Given the system $y_1 = y$ and $y_2 = y'$, what is the expression for $y_1'$?","hu":"Adott a $y_1 = y$ és $y_2 = y'$ rendszer, mi a $y_1'$ kifejezés?"},"a":{"en":"$y_1' = y_2$","hu":"$y_1' = y_2$"}},
    {"q":{"en":"If the local truncation error is $O(h)$, the global error of Euler's method is typically _____.","hu":"Ha a helyi csonkítási hiba $O(h)$, akkor az Euler-módszer globális hibája általában _____."},"a":{"en":"$O(h)$","hu":"$O(h)$"}},
    {"q":{"en":"What is the limit of the maximum global error $\\sup_{t \\in [t_0, T]} |y(t) - z(t; h)|$ as the step size $h$ approaches zero?","hu":"Mi a határa a $\\sup_{t \\in [t_0, T]} |y(t) - z(t; h)|$ maximális globális hibának, amikor a $h$ lépésszám megközelíti a nullát?"},"a":{"en":"0","hu":"0"}},
    {"q":{"en":"Concept: Euler Sequence","hu":"Koncepció: Euler-szekvencia"},"a":{"en":"Definition: A sequence of values $z_i$ generated by a recursive formula to approximate the solution of an ODE at discrete mesh points.","hu":"Definíció: $z_i$ értékek sorozata, amelyet egy rekurzív képlet generál az ODE diszkrét hálópontokban való megoldásának közelítésére."}},
    {"q":{"en":"What is the role of the term $\\frac{(1 + a)^i - 1}{a}b$ in the proof of Theorem 10.3?","hu":"Mi a szerepe a $\\frac{(1 + a)^i - 1}{a}b$ kifejezésnek a 10.3. Tétel bizonyításában?"},"a":{"en":"It is the sum of a geometric progression resulting from the repeated application of the recursive inequality.","hu":"Ez a rekurzív egyenlőtlenség ismételt alkalmazásából származó geometriai progresszió összege."}},
    {"q":{"en":"Why is the assumption that $f$ and its partial derivatives are bounded useful for error estimation?","hu":"Miért hasznos a hibabecsléshez az a feltételezés, hogy a $f$ és parciális deriváltjai korlátosak?"},"a":{"en":"It allows for an explicit estimate of $M_2$ (the maximum of the second derivative of the solution).","hu":"Lehetővé teszi a $M_2$ (a megoldás második deriváltjának maximuma) explicit becslését."}},
    {"q":{"en":"In the context of Euler's method, what is an 'equidistant mesh'?","hu":"Az Euler-módszerrel összefüggésben mit jelent az „egyen távolságú háló”?"},"a":{"en":"A set of mesh points where the distance between any two consecutive points is a constant $h$.","hu":"Hálópontok halmaza, ahol bármely két egymást követő pont közötti távolság állandó $h$."}},
    {"q":{"en":"Which derivation of Euler's method relies on the approximation $\\int_a^b g(s) ds \\approx g(a)(b-a)$?","hu":"Az Euler-módszer melyik levezetése támaszkodik a $\\int_a^b g(s) ds \\approx g(a)(b-a)$ közelítésre?"},"a":{"en":"The derivation via integration (Method iii).","hu":"Levezetés integrálással (iii. módszer)."}},
    {"q":{"en":"What is the Lipschitz constant $L$ conceptually representing in the error analysis of Euler's method?","hu":"Mit reprezentál fogalmilag a $L$ Lipschitz-állandó az Euler-módszer hibaelemzésében?"},"a":{"en":"The maximum rate at which the function $f$ changes with respect to the dependent variable $y$.","hu":"Az a maximális sebesség, amellyel a $f$ függvény változik a $y$ függő változóhoz képest."}},
    {"q":{"en":"In Exercise 5, what type of function is $z(t; h)$ used to interpolate the Euler sequence values?","hu":"Az 5. gyakorlatban milyen típusú függvényt használ a $z(t; h)$ az Euler sorozatértékek interpolálására?"},"a":{"en":"A linear spline function.","hu":"Lineáris spline függvény."}},
    {"q":{"en":"What is the first step in applying Euler's method to the IVP $y' = 2y - 10t^2 + 2t$ with $h=0.1$ at $t=0$?","hu":"Mi az első lépés az Euler-módszernek az IVP $y' = 2y - 10t^2 + 2t$ és $h=0.1$ $t=0$ esetén történő alkalmazásához?"},"a":{"en":"Calculate $z_1 = z_0 + 0.1(2z_0 - 10(0)^2 + 2(0))$.","hu":"Számítsa ki a $z_1 = z_0 + 0.1(2z_0 - 10(0)^2 + 2(0))$-t."}},
    {"q":{"en":"True or False: Euler's method can be used with non-equidistant mesh points.","hu":"Igaz vagy hamis: Az Euler-módszer használható nem egyenlő távolságra lévő hálópontokkal."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"Which error definition is given by $\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$?","hu":"Melyik hibadefiníciót adja meg a $\\tau_{i+1} = \\frac{h}{2}y''(\\xi)$?"},"a":{"en":"The local truncation error.","hu":"Helyi csonkítási hiba."}},
    {"q":{"en":"In the derivation of Method (ii), what is the relationship between $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$ and $f(t_i, y(t_i))$?","hu":"A (ii) módszer levezetésében mi a kapcsolat a $\\frac{y(t_{i+1}) - y(t_i)}{h_i}$ és a $f(t_i, y(t_i))$ között?"},"a":{"en":"They are approximately equal: $\\frac{y(t_{i+1}) - y(t_i)}{h_i} \\approx f(t_i, y(t_i))$.","hu":"Ezek megközelítőleg egyenlőek: $\\frac{y(t_{i+1}) - y(t_i)}{h_i} \\approx f(t_i, y(t_i))$."}},
    {"q":{"en":"What does the term $e^{L(T - t_0)}$ in the global error bound suggest about the error over long intervals?","hu":"Mit sugall a $e^{L(T - t_0)}$ kifejezés a globális hibahatárban a hosszú időközönkénti hibáról?"},"a":{"en":"The error bound can grow exponentially as the interval length $T - t_0$ increases.","hu":"A hibahatár exponenciálisan növekedhet a $T - t_0$ intervallum hosszának növekedésével."}},
    {"q":{"en":"For the IVP $y' = f(t, y)$, what is the value of $y'(t_i)$ according to the differential equation?","hu":"Az IVP $y' = f(t, y)$ esetében mekkora a $y'(t_i)$ értéke a differenciálegyenlet szerint?"},"a":{"en":"$f(t_i, y(t_i))$","hu":"$f(t_i, y(t_i))$"}}
  ],
  "10.3": [
    {"q":{"en":"In the analysis of rounding errors in Euler's method, what does the variable $z_i$ represent?","hu":"Mit jelent a $z_i$ változó az Euler-módszer szerinti kerekítési hibák elemzésében?"},"a":{"en":"The exact value of the Euler sequence without rounding errors.","hu":"Az Euler-sorozat pontos értéke kerekítési hibák nélkül."}},
    {"q":{"en":"In numerical computation, what does the variable $w_i$ represent in the context of Euler's method?","hu":"Mit jelent a numerikus számításban a $w_i$ változó az Euler-módszerrel összefüggésben?"},"a":{"en":"The actual value computed by the machine, which includes rounding errors.","hu":"A gép által kiszámított tényleges érték, amely tartalmazza a kerekítési hibákat is."}},
    {"q":{"en":"How is $w_0$ defined in the context of numerical initial value problems?","hu":"Hogyan definiálható a $w_0$ a numerikus kezdőérték-problémákkal összefüggésben?"},"a":{"en":"The machine number stored in the computer to represent the true initial value $y_0$.","hu":"A számítógépben tárolt gépszám, amely a $y_0$ valódi kezdeti értéket képviseli."}},
    {"q":{"en":"What is the formula for the initial rounding error $\\delta_0$?","hu":"Mi a $\\delta_0$ kezdeti kerekítési hiba képlete?"},"a":{"en":"$\\delta_0 = y_0 - w_0$","hu":"$\\delta_0 = y_0 - w_0$"}},
    {"q":{"en":"What does the term $\\delta_i$ represent in the $i$-th iteration of Euler's method?","hu":"Mit jelent a $\\delta_i$ kifejezés az Euler-módszer $i$-edik iterációjában?"},"a":{"en":"The rounding error specifically committed during the $i$-th calculation step.","hu":"A kerekítési hiba kifejezetten a $i$-edik számítási lépés során történt."}},
    {"q":{"en":"According to the source, what is the iterative formula for the computed value $w_{i+1}$?","hu":"A forrás szerint mi a $w_{i+1}$ számított érték iteratív képlete?"},"a":{"en":"$w_{i+1} = w_i + hf(t_i, w_i) + \\delta_{i+1}$","hu":"$w_{i+1} = w_i + hf(t_i, w_i) + \\delta_{i+1}$"}},
    {"q":{"en":"What equation is subtracted from the computed $w_{i+1}$ equation to analyze error propagation?","hu":"Milyen egyenletet vonunk le a kiszámított $w_{i+1}$ egyenletből a hibaterjedés elemzéséhez?"},"a":{"en":"$z_{i+1} = z_i + hf(t_i, z_i)$","hu":"$z_{i+1} = z_i + hf(t_i, z_i)$"}},
    {"q":{"en":"The function $f$ is assumed to be Lipschitz continuous in which of its variables?","hu":"A $f$ függvényt Lipschitz-folyamatosnak tételezzük fel, mely változóiban?"},"a":{"en":"Its second variable.","hu":"A második változó."}},
    {"q":{"en":"What constant is used to denote the Lipschitz constant of function $f$?","hu":"Milyen állandóval jelöljük a $f$ függvény Lipschitz-állandóját?"},"a":{"en":"$L$","hu":"$L$"}},
    {"q":{"en":"How is the aggregate rounding error $\\delta$ defined for a sequence of $n$ steps?","hu":"Hogyan definiálható a $\\delta$ összesített kerekítési hiba egy $n$ lépéssorozathoz?"},"a":{"en":"$\\delta := \\max\\{|\\delta_1|, |\\delta_2|, \\ldots, |\\delta_n|\\}$","hu":"$\\delta:= \\max\\{|\\delta_1|, |\\delta_2|, \\ldots, |\\delta_n|\\}$"}},
    {"q":{"en":"Which inequality is used to transition from $|w_{i+1} - z_{i+1}|$ to the sum of individual error magnitudes?","hu":"Melyik egyenlőtlenség segítségével váltunk át $|w_{i+1} - z_{i+1}|$-ről az egyedi hibanagyságok összegére?"},"a":{"en":"The triangle inequality.","hu":"A háromszög egyenlőtlenség."}},
    {"q":{"en":"In the step $|w_{i+1} - z_{i+1}| \\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\\delta_{i+1}|$, what does the middle term become after applying the Lipschitz property?","hu":"A $|w_{i+1} - z_{i+1}| \\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\\delta_{i+1}|$ lépésben mi lesz a középső tag a Lipschitz tulajdonság alkalmazása után?"},"a":{"en":"$hL|w_i - z_i|$","hu":"$hL|w_i - z_i|$"}},
    {"q":{"en":"When estimating $|w_i - z_i|$, what value is assigned to the parameter $a$ to apply the standard lemma?","hu":"A $|w_i - z_i|$ becslésekor milyen értéket rendel a $a$ paraméter a standard lemma alkalmazásához?"},"a":{"en":"$a = hL$","hu":"$a = hL$"}},
    {"q":{"en":"When estimating $|w_i - z_i|$, what value is assigned to the parameter $b$ to apply the standard lemma?","hu":"A $|w_i - z_i|$ becslésekor milyen értéket rendel a $b$ paraméter a standard lemma alkalmazásához?"},"a":{"en":"$b = \\delta$","hu":"$b = \\delta$"}},
    {"q":{"en":"What is the resulting upper bound for the computation error $|w_i - z_i|$ expressed using $L$, $T$, and $t_0$?","hu":"Mi a $L$, $T$ és $t_0$ használatával kifejezett $|w_i - z_i|$ számítási hiba felső korlátja?"},"a":{"en":"$\\frac{e^{L(T - t_0)} - 1}{L}\\frac{\\delta}{h} + |\\delta_0|e^{L(T - t_0)}$","hu":"$\\frac{e^{L(T - t_0)} - 1}{L}\\frac{\\delta}{h} + |\\delta_0|e^{L(T - t_0)}$"}},
    {"q":{"en":"In the computation error bound, what does the term $|\\delta_0|e^{L(T - t_0)}$ specifically account for?","hu":"A számítási hibahatárban mit jelent konkrétan a $|\\delta_0|e^{L(T - t_0)}$ kifejezés?"},"a":{"en":"The propagation of the error from the initial machine representation of $y_0$.","hu":"A hiba terjedése a $y_0$ kezdeti gépi reprezentációjából."}},
    {"q":{"en":"What is the formula for the discretization error $|y(t_i) - z_i|$ in Euler's method?","hu":"Mi a $|y(t_i) - z_i|$ diszkretizációs hiba képlete az Euler-módszerben?"},"a":{"en":"$(e^{L(T - t_0)} - 1)\\frac{hM_2}{2L}$","hu":"$(e^{L(T - t_0)} - 1)\\frac{hM_2}{2L}$"}},
    {"q":{"en":"How is the constant $M_2$ defined in the context of the Euler error bound?","hu":"Hogyan definiálható a $M_2$ konstans az Euler-hibával összefüggésben?"},"a":{"en":"$M_2 := \\max\\{|y''(t)| \\colon t \\in [t_0, T]\\}$","hu":"$M_2:= \\max\\{|y''(t)| \\colon t \\in [t_0, T]\\}$"}},
    {"q":{"en":"To find the total error $|y(t_i) - w_i|$, which two specific errors are summed using the triangle inequality?","hu":"A $|y(t_i) - w_i|$ teljes hiba meghatározásához melyik két konkrét hibát összegezzük a háromszög egyenlőtlenség segítségével?"},"a":{"en":"The discretization error $|y(t_i) - z_i|$ and the computation error $|z_i - w_i|$.","hu":"A diszkretizálási hiba $|y(t_i) - z_i|$ és a számítási hiba $|z_i - w_i|$."}},
    {"q":{"en":"State the full upper bound for the total error $|y(t_i) - w_i|$ as given in Theorem 10.6.","hu":"Adja meg a $|y(t_i) - w_i|$ teljes hiba teljes felső korlátját a 10.6. Tétel szerint."},"a":{"en":"$\\frac{e^{L(T - t_0)} - 1}{L}\\left(\\frac{hM_2}{2} + \\frac{\\delta}{h}\\right) + |\\delta_0|e^{L(T - t_0)}$","hu":"$\\frac{e^{L(T - t_0)} - 1}{L}\\left(\\frac{hM_2}{2} + \\frac{\\delta}{h}\\right) + |\\delta_0|e^{L(T - t_0)}$"}},
    {"q":{"en":"What happens to the factor $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ as the step size $h$ approaches $0$?","hu":"Mi történik a $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ tényezővel, amikor a $h$ lépésszám megközelíti a $0$-t?"},"a":{"en":"It approaches infinity.","hu":"A végtelenhez közelít."}},
    {"q":{"en":"Why is the total error in Euler's method no longer linear in $h$ when rounding is considered?","hu":"Miért nem lineáris az Euler-módszer teljes hibája a $h$-ben, ha a kerekítést vesszük figyelembe?"},"a":{"en":"Because of the inclusion of the $\\frac{\\delta}{h}$ term, which represents inversely proportional rounding error accumulation.","hu":"A $\\frac{\\delta}{h}$ kifejezés szerepeltetése miatt, amely fordítottan arányos kerekítési hibahalmozódást jelent."}},
    {"q":{"en":"In Theorem 10.6, $f$ must be continuously _____ differentiable with respect to both variables.","hu":"A 10.6. Tételben a $f$-nek folyamatosan _____ differenciálhatónak kell lennie mindkét változó tekintetében."},"a":{"en":"Partially","hu":"Részben"}},
    {"q":{"en":"According to the text, under what condition is the effect of rounding typically small in practice?","hu":"A szöveg szerint a gyakorlatban milyen feltétel mellett jellemzően kicsi a kerekítés hatása?"},"a":{"en":"When the step size $h$ is significantly larger than the rounding error $\\delta$.","hu":"Ha a $h$ lépésszám jelentősen nagyobb, mint a $\\delta$ kerekítési hiba."}},
    {"q":{"en":"What are the domain and codomain of the function $f$ as defined in Theorem 10.6?","hu":"Mi a $f$ függvény tartománya és kódtartománya a 10.6. Tételben meghatározottak szerint?"},"a":{"en":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$","hu":"$f \\colon [t_0, T] \\times \\mathbb{R} \\to \\mathbb{R}$"}},
    {"q":{"en":"The factor $\\frac{hM_2}{2}$ in the total error bound represents the _____ error.","hu":"A $\\frac{hM_2}{2}$ tényező a teljes hibahatárban a _____ hibát jelenti."},"a":{"en":"Discretization (or truncation)","hu":"Diszkretizálás (vagy csonkítás)"}},
    {"q":{"en":"The factor $\\frac{\\delta}{h}$ in the total error bound represents the _____ error.","hu":"A $\\frac{\\delta}{h}$ tényező a teljes hibahatárban a _____ hibát jelenti."},"a":{"en":"Rounding (or computation)","hu":"Kerekítés (vagy számítás)"}},
    {"q":{"en":"Function: $g(h) = \\frac{hM_2}{2} + \\frac{\\delta}{h}$","hu":"Funkció: $g(h) = \\frac{hM_2}{2} + \\frac{\\delta}{h}$"},"a":{"en":"Purpose: To determine the optimal step size $h$ that minimizes the combined discretization and rounding error.","hu":"Cél: Az optimális $h$ lépésméret meghatározása, amely minimalizálja a kombinált diszkretizálási és kerekítési hibát."}},
    {"q":{"en":"If a step size $h$ is chosen to be 'too small', how does it impact the Euler method's output?","hu":"Ha egy $h$ lépésméretet „túl kicsinek” választunk, hogyan befolyásolja az Euler-módszer kimenetét?"},"a":{"en":"The error becomes significant due to the dominance of accumulated rounding errors.","hu":"A hiba a felhalmozódott kerekítési hibák dominanciája miatt válik jelentőssé."}},
    {"q":{"en":"In the derivation, the inequality $|w_{i+1} - z_{i+1}| \\le (1 + hL)|w_i - z_i| + \\delta$ describes the _____ of error between steps.","hu":"A levezetésben a $|w_{i+1} - z_{i+1}| \\le (1 + hL)|w_i - z_i| + \\delta$ egyenlőtlenség leírja a lépések közötti _____ hiba mértékét."},"a":{"en":"Propagation","hu":"Szaporítás"}},
    {"q":{"en":"What is the range of the index $i$ for the steps defined in Theorem 10.6?","hu":"Mekkora a $i$ index tartománya a 10.6. Tételben meghatározott lépésekhez?"},"a":{"en":"$i = 0, 1, \\ldots, n$","hu":"$i = 0, 1, \\ldots, n$"}},
    {"q":{"en":"What is the physical meaning of $T - t_0$ in the error formulas?","hu":"Mi a $T - t_0$ fizikai jelentése a hibaképletekben?"},"a":{"en":"The total length of the time interval over which the differential equation is being solved.","hu":"Annak az időtartamnak a teljes hossza, amely alatt a differenciálegyenletet megoldják."}},
    {"q":{"en":"Term: Lipschitz Condition","hu":"Fogalom: Lipschitz állapot"},"a":{"en":"Definition: $|f(t, y_1) - f(t, y_2)| \\le L|y_1 - y_2|$, used here to bound the difference in function values based on the difference in state values.","hu":"Definíció: $|f(t, y_1) - f(t, y_2)| \\le L|y_1 - y_2|$, itt a függvényértékek különbségének lekötésére szolgál az állapotértékek különbsége alapján."}},
    {"q":{"en":"True or False: In practice, decreasing $h$ always leads to a more accurate solution in Euler's method.","hu":"Igaz vagy hamis: A gyakorlatban a $h$ csökkentése mindig pontosabb megoldáshoz vezet az Euler-módszerben."},"a":{"en":"False, because below a certain threshold, rounding errors begin to increase the total error.","hu":"Hamis, mert egy bizonyos küszöb alatt a kerekítési hibák elkezdik növelni a teljes hibát."}},
    {"q":{"en":"Which theorem is cited as the basis for deriving the final total error bound in Euler's method?","hu":"Melyik tételre hivatkozunk az Euler-módszerben a végső teljes hiba levezetésének alapjául?"},"a":{"en":"Theorem 10.3 (referred to in the Hungarian and English source excerpts).","hu":"10.3. Tétel (a magyar és angol forrásrészletekben hivatkozunk rá)."}},
    {"q":{"en":"In the exercise provided, what specific value is given for the rounding error $\\delta$?","hu":"A megadott gyakorlatban milyen konkrét értéket ad a $\\delta$ kerekítési hiba?"},"a":{"en":"$0.00001$","hu":"$0.00001$"}},
    {"q":{"en":"How is the total number of steps $n$ related to $T$, $t_0$, and $h$?","hu":"Hogyan kapcsolódik a $n$ lépések teljes száma a $T$, $t_0$ és $h$ lépésekhez?"},"a":{"en":"$n = \\frac{T - t_0}{h}$","hu":"$n = \\frac{T - t_0}{h}$"}},
    {"q":{"en":"In the total error formula, what is the role of the exponential term $e^{L(T - t_0)}$?","hu":"A teljes hibaképletben mi a szerepe a $e^{L(T - t_0)}$ exponenciális tagnak?"},"a":{"en":"It accounts for the potential exponential growth of errors over the integration interval.","hu":"Ez figyelembe veszi a hibák potenciális exponenciális növekedését az integrációs intervallum alatt."}},
    {"q":{"en":"What property of the triangle inequality allows us to state $|y - w| \\le |y - z| + |z - w|$?","hu":"A háromszög-egyenlőtlenség melyik tulajdonsága teszi lehetővé a $|y - w| \\le |y - z| + |z - w|$ állítást?"},"a":{"en":"Subadditivity (the magnitude of a sum is less than or equal to the sum of magnitudes).","hu":"Szubadditivitás (egy összeg nagysága kisebb vagy egyenlő, mint a nagyságösszeg)."}},
    {"q":{"en":"Which derivative of the solution $y(t)$ is critical for determining the truncation error bound?","hu":"A $y(t)$ megoldás melyik deriváltja kritikus a csonkítási hibahatár meghatározásához?"},"a":{"en":"The second derivative, $y''(t)$.","hu":"A második származék, a $y''(t)$."}},
    {"q":{"en":"In the expression $\\frac{e^{L(T-t_0)} - 1}{L}$, what happens as $L$ becomes very small?","hu":"Mi történik a $\\frac{e^{L(T-t_0)} - 1}{L}$ kifejezésben, amikor a $L$ nagyon kicsi lesz?"},"a":{"en":"The expression approaches $(T - t_0)$, the length of the interval.","hu":"A kifejezés megközelíti a $(T - t_0)$-t, az intervallum hosszát."}},
    {"q":{"en":"When $h$ is very large, which component of the error factor $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ dominates?","hu":"Ha a $h$ nagyon nagy, a $\\frac{hM_2}{2} + \\frac{\\delta}{h}$ hibatényező melyik összetevője dominál?"},"a":{"en":"The discretization error component, $\\frac{hM_2}{2}$.","hu":"A diszkretizálási hiba komponens, $\\frac{hM_2}{2}$."}},
    {"q":{"en":"The error bound for $|w_i - z_i|$ is found using a recursive inequality of the form $x_{i+1} \\le (1+a)x_i + b$. What is $x_i$ in this context?","hu":"A $|w_i - z_i|$ korlátos hibát a $x_{i+1} \\le (1+a)x_i + b$ formájú rekurzív egyenlőtlenség segítségével találjuk meg. Mi a $x_i$ ebben az összefüggésben?"},"a":{"en":"The magnitude of the difference between the computed and exact Euler sequences, $|w_i - z_i|$.","hu":"A kiszámított és a pontos Euler-sorozat közötti különbség nagysága, $|w_i - z_i|$."}},
    {"q":{"en":"Why does the rounding error term $\\frac{\\delta}{h}$ contain $h$ in the denominator?","hu":"Miért tartalmazza a $\\frac{\\delta}{h}$ kerekítési hiba tag a nevezőben a $h$-t?"},"a":{"en":"Because the number of steps (and thus the number of times rounding error is added) is inversely proportional to $h$.","hu":"Mivel a lépések száma (és így a kerekítési hiba hozzáadásának száma) fordítottan arányos a $h$-vel."}},
    {"q":{"en":"Cloze: In numerical analysis, the discretization error is $O(h)$, but the total error including rounding is not, because the latter involves a term proportional to _____.","hu":"Close: Numerikus elemzésben a diszkretizációs hiba $O(h)$, de a kerekítéssel együtt járó teljes hiba nem, mert ez utóbbi _____-vel arányos tagot tartalmaz."},"a":{"en":"$h^{-1}$ (or $1/h$)","hu":"$h^{-1}$ (vagy $1/h$)"}},
    {"q":{"en":"What does the 'max' in the definition of $M_2$ ensure about the resulting error bound?","hu":"Mit biztosít a 'max' a $M_2$ definíciójában a kapott hibakorlátról?"},"a":{"en":"It ensures the bound is valid for the 'worst-case' curvature of the solution over the entire interval.","hu":"Biztosítja, hogy a korlát érvényes legyen a megoldás „legrosszabb” görbületére a teljes intervallumban."}},
    {"q":{"en":"In the context of Exercise 2, finding the 'minimum point' of $g(h)$ helps a programmer identify the _____.","hu":"A 2. gyakorlat összefüggésében a $g(h)$ „minimális pontjának” megtalálása segít a programozónak azonosítani a _____."},"a":{"en":"Optimal step size.","hu":"Optimális lépésméret."}},
    {"q":{"en":"Is the Lipschitz constant $L$ dependent on the step size $h$?","hu":"A Lipschitz-állandó $L$ függ a $h$ lépésmérettől?"},"a":{"en":"No, it is a property of the function $f$ and the region of interest.","hu":"Nem, ez a $f$ függvény és az érdeklődési terület tulajdonsága."}},
    {"q":{"en":"What does the term $(e^{L(T - t_0)} - 1)$ represent in the context of the sensitivity of the differential equation?","hu":"Mit jelent a $(e^{L(T - t_0)} - 1)$ kifejezés a differenciálegyenlet érzékenységének összefüggésében?"},"a":{"en":"The amplification factor of errors due to the dynamics of the system.","hu":"A rendszer dinamikájából adódó hibák erősítési tényezője."}},
    {"q":{"en":"How does Theorem 10.6 differ from a standard Euler error theorem that ignores rounding?","hu":"Miben különbözik a 10.6. tétel a szokásos Euler-hibatételtől, amely figyelmen kívül hagyja a kerekítést?"},"a":{"en":"It includes an extra term $\\frac{\\delta}{h}$ and an initial error term $|\\delta_0|e^{L(T-t_0)}$.","hu":"Tartalmaz egy extra $\\frac{\\delta}{h}$ kifejezést és egy $|\\delta_0|e^{L(T-t_0)}$ kezdeti hibakifejezést."}}
  ],
  "10.4": [
    {"q":{"en":"What is the general formula for a one-step method used to approximate the solution of an Initial Value Problem (IVP)?","hu":"Mi az egylépéses módszer általános képlete a kezdeti értékprobléma (IVP) megoldásának közelítésére?"},"a":{"en":"$z_{i+1} = z_i + hF(t_i, z_i; h)$","hu":"$z_{i+1} = z_i + hF(t_i, z_i; h)$"}},
    {"q":{"en":"In the general one-step method formula $z_{i+1} = z_i + hF(t_i, z_i; h)$, what does $h$ represent?","hu":"A $z_{i+1} = z_i + hF(t_i, z_i; h)$ általános egylépéses módszer képletében mit jelent a $h$?"},"a":{"en":"The step size or distance between equidistant mesh points.","hu":"Lépésméret vagy távolság az egyenlő távolságra lévő hálópontok között."}},
    {"q":{"en":"For Euler's method, what is the specific definition of the function $F(t, z; h)$?","hu":"Az Euler-módszer esetében mi a $F(t, z; h)$ függvény konkrét meghatározása?"},"a":{"en":"$F(t, z; h) = f(t, z)$","hu":"$F(t, z; h) = f(t, z)$"}},
    {"q":{"en":"How is the $(i+1)$-th local truncation error $\\tau_{i+1}$ defined for a general one-step method?","hu":"Hogyan definiálható a $(i+1)$-edik helyi csonkítási hiba $\\tau_{i+1}$ egy általános egylépéses módszerhez?"},"a":{"en":"$\\tau_{i+1} := \\frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h)$","hu":"$\\tau_{i+1}:= \\frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h)$"}},
    {"q":{"en":"In the definition of local truncation error, what does $y(t)$ represent?","hu":"A helyi csonkítási hiba definíciójában mit jelent a $y(t)$?"},"a":{"en":"The exact solution of the Initial Value Problem.","hu":"A kezdeti érték probléma pontos megoldása."}},
    {"q":{"en":"According to Theorem 10.7, what property must $F$ have regarding its second variable to ensure convergence?","hu":"A 10.7. Tétel szerint milyen tulajdonsággal kell rendelkeznie $F$ második változójával kapcsolatban, hogy biztosítsa a konvergenciát?"},"a":{"en":"It must be Lipschitz continuous in its second variable.","hu":"Második változójában Lipschitz folytonosnak kell lennie."}},
    {"q":{"en":"What continuity requirement does Theorem 10.7 place on the function $F$ with respect to its variables?","hu":"Milyen folytonossági követelményt támaszt a 10.7. Tétel a $F$ függvényre a változóira vonatkozóan?"},"a":{"en":"It must be continuously differentiable with respect to its first two variables.","hu":"Folyamatosan differenciálhatónak kell lennie az első két változóhoz képest."}},
    {"q":{"en":"If the local truncation error of a method is of order $\\alpha$, what is the inequality involving $h$ and a constant $K_2$?","hu":"Ha egy metódus lokális csonkítási hibája $\\alpha$ nagyságrendű, akkor mekkora a $h$ és egy állandó $K_2$ egyenlőtlensége?"},"a":{"en":"$|\\tau_{i+1}| \\le K_2 h^\\alpha$","hu":"$|\\tau_{i+1}| \\le K_2 h^\\alpha$"}},
    {"q":{"en":"If a one-step method has a local truncation error of order $\\alpha$, what is the order of convergence for the global error $|y(t_i) - z_i|$?","hu":"Ha egy egylépéses metódusban $\\alpha$ nagyságrendű lokális csonkítási hiba van, akkor milyen a $|y(t_i) - z_i|$ globális hiba konvergenciája?"},"a":{"en":"Order $\\alpha$","hu":"Rendeljen $\\alpha$"}},
    {"q":{"en":"What is the formal bound for global error $|y(t_i) - z_i|$ in a method of order $\\alpha$?","hu":"Mi a formális korlátja a $|y(t_i) - z_i|$ globális hibának a $\\alpha$ sorrendű metódusban?"},"a":{"en":"$|y(t_i) - z_i| \\le Kh^\\alpha$","hu":"$|y(t_i) - z_i| \\le Kh^\\alpha$"}},
    {"q":{"en":"Taylor's method is motivated by approximating the solution using a higher-order _____.","hu":"Taylor módszerét a megoldásnak egy magasabb rendű _____ segítségével történő közelítése motiválja."},"a":{"en":"Taylor polynomial","hu":"Taylor polinom"}},
    {"q":{"en":"What is the Taylor expansion of the exact solution $y(t)$ at $t_{i+1}$ around the point $t_i$ up to order $\\alpha$?","hu":"Mennyi a $y(t)$ pontos megoldás Taylor kiterjesztése a $t_{i+1}$-nél a $t_i$ pont körül a $\\alpha$ megrendelésre?"},"a":{"en":"$y(t_{i+1}) = \\sum_{k=0}^{\\alpha} \\frac{y^{(k)}(t_i)}{k!}h^k + \\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$","hu":"$y(t_{i+1}) = \\sum_{k=0}^{\\alpha} \\frac{y^{(k)}(t_i)}{k!}h^k + \\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$"}},
    {"q":{"en":"In the Taylor expansion remainder term, where is the point $\\xi_i$ located?","hu":"A Taylor-kiterjesztés maradék kifejezésében hol található a $\\xi_i$ pont?"},"a":{"en":"In the interval between $t_i$ and $t_{i+1}$ (denoted $\\langle t_i, t_{i+1} \\rangle$).","hu":"A $t_i$ és a $t_{i+1}$ közötti intervallumban ($\\langle t_i, t_{i+1} \\rangle$)."}},
    {"q":{"en":"How is the second derivative $y''(t)$ expressed in terms of $f(t, y(t))$ using the chain rule?","hu":"Hogyan fejezhető ki a $y''(t)$ második derivált $f(t, y(t))$-ben a láncszabály használatával?"},"a":{"en":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$","hu":"$y''(t) = \\frac{\\partial f}{\\partial t}(t, y(t)) + \\frac{\\partial f}{\\partial y}(t, y(t))f(t, y(t))$"}},
    {"q":{"en":"What notation represents the $i$-th total derivative of the composite function $f(t, y(t))$ with respect to $t$?","hu":"Milyen jelöléssel jelöljük a $f(t, y(t))$ összetett függvény $i$-edik teljes deriváltját a $t$ függvényhez képest?"},"a":{"en":"$f^{(i)}(t, y(t))$","hu":"$f^{(i)}(t, y(t))$"}},
    {"q":{"en":"Using the derivative notation, what is the relationship between $y^{(i)}(t)$ and $f$?","hu":"A derivált jelöléssel mi a kapcsolat a $y^{(i)}(t)$ és a $f$ között?"},"a":{"en":"$y^{(i)}(t) = f^{(i-1)}(t, y(t))$ for $i \\ge 1$.","hu":"$y^{(i)}(t) = f^{(i-1)}(t, y(t))$ $i \\ge 1$-hez."}},
    {"q":{"en":"Formula: Define the function $F(t, z; h)$ for a Taylor's method of order $\\alpha$.","hu":"Képlet: Határozza meg a $F(t, z; h)$ függvényt egy Taylor-féle $\\alpha$ sorrendben."},"a":{"en":"$F(t, z; h) := f(t, z) + \\frac{1}{2}f^{(1)}(t, z)h + \\dots + \\frac{1}{\\alpha!}f^{(\\alpha-1)}(t, z)h^{\\alpha-1}$","hu":"$F(t, z; h):= f(t, z) + \\frac{1}{2}f^{(1)}(t, z)h + \\dots + \\frac{1}{\\alpha!}f^{(\\alpha-1)}(t, z)h^{\\alpha-1}$"}},
    {"q":{"en":"What is the local truncation error $\\tau_{i+1}$ for a Taylor's method of order $\\alpha$?","hu":"Mi a $\\tau_{i+1}$ helyi csonkítási hiba a Taylor-féle $\\alpha$ rendelési módszernél?"},"a":{"en":"$\\tau_{i+1} = \\frac{1}{(\\alpha + 1)!}f^{(\\alpha)}(\\xi_i, y(\\xi_i))h^\\alpha$","hu":"$\\tau_{i+1} = \\frac{1}{(\\alpha + 1)!}f^{(\\alpha)}(\\xi_i, y(\\xi_i))h^\\alpha$"}},
    {"q":{"en":"To use a Taylor's method of order $\\alpha$, what differentiability class must $f$ belong to?","hu":"A Taylor-féle $\\alpha$ sorrendű metódus használatához melyik differenciálhatósági osztályba kell tartoznia a $f$-nek?"},"a":{"en":"$f \\in C^\\alpha$","hu":"$f \\in C^\\alpha$"}},
    {"q":{"en":"Example: For $y' = 2y - 10t^2 + 2t$, calculate $f^{(1)}(t, y(t))$.","hu":"Példa: $y' = 2y - 10t^2 + 2t$ esetén számítsa ki a $f^{(1)}(t, y(t))$-t."},"a":{"en":"$4y(t) - 20t^2 - 16t + 2$","hu":"$4y(t) - 20t^2 - 16t + 2$"}},
    {"q":{"en":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the second derivative $f^{(2)}(t, y(t))$?","hu":"Az ODE $y' = 2y - 10t^2 + 2t$ esetében mi a $f^{(2)}(t, y(t))$ második származéka?"},"a":{"en":"$8y(t) - 40t^2 - 32t - 16$","hu":"$8y(t) - 40t^2 - 32t - 16$"}},
    {"q":{"en":"In a second-order Taylor method, how does the error typically change if the step size $h$ is halved?","hu":"Egy másodrendű Taylor-módszerben általában hogyan változik a hiba, ha a $h$ lépésszám felére csökken?"},"a":{"en":"The error reduces to approximately one quarter of its previous value.","hu":"A hiba körülbelül a korábbi érték negyedére csökken."}},
    {"q":{"en":"The numerical method $z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i) + \\frac{h^2}{2}(4z_i - 20t_i^2 - 16t_i + 2)$ is a _____ order Taylor method.","hu":"A $z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i) + \\frac{h^2}{2}(4z_i - 20t_i^2 - 16t_i + 2)$ numerikus módszer egy _____ sorrendű Taylor-módszer."},"a":{"en":"second","hu":"második"}},
    {"q":{"en":"Why is the term $f^{(i)}(t, z)$ used instead of $f^{(i)}(t, y(t))$ in the final definition of the Taylor method formula?","hu":"Miért a $f^{(i)}(t, z)$ kifejezést használják a $f^{(i)}(t, y(t))$ helyett a Taylor-módszer képletének végső definíciójában?"},"a":{"en":"To represent the formula evaluated at the approximate solution $z$ rather than the exact solution $y(t)$.","hu":"A $z$ közelítő megoldással kiértékelt képlet ábrázolása a $y(t)$ pontos megoldás helyett."}},
    {"q":{"en":"In the context of Taylor's method, what does $y^{(3)}(t)$ equal in terms of $f$?","hu":"A Taylor-módszerrel összefüggésben mit jelent $y^{(3)}(t)$ a $f$ szempontjából?"},"a":{"en":"$f^{(2)}(t, y(t))$","hu":"$f^{(2)}(t, y(t))$"}},
    {"q":{"en":"How does the accuracy of a third-order Taylor's method generally compare to Euler's method for the same step size?","hu":"Hogyan hasonlítható össze egy harmadrendű Taylor-módszer pontossága az Euler-módszerrel azonos lépésméret esetén?"},"a":{"en":"The third-order Taylor's method produces a significantly smaller error.","hu":"A harmadrendű Taylor-módszer lényegesen kisebb hibát produkál."}},
    {"q":{"en":"What is the initial condition value $z_0$ in the Taylor method examples provided in the text?","hu":"Mi a $z_0$ kezdeti feltételérték a szövegben található Taylor-módszer példáiban?"},"a":{"en":"$z_0 = 1$","hu":"$z_0 = 1$"}},
    {"q":{"en":"Process: How is $y'''(t)$ computed for Taylor's method using $f$?","hu":"Folyamat: Hogyan történik a $y'''(t)$ kiszámítása a Taylor-módszerhez a $f$ használatával?"},"a":{"en":"By differentiating the expression for $y''(t)$ with respect to $t$ and substituting $y' = f(t, y)$.","hu":"A $y''(t)$ kifejezés megkülönböztetésével a $t$-hez képest és a $y' = f(t, y)$ helyettesítésével."}},
    {"q":{"en":"The notation $f^{(i)}(t, y(t))$ denotes the $i$-th derivative of the _____ function $f(t, y(t))$ with respect to $t$.","hu":"A $f^{(i)}(t, y(t))$ jelölés a $f(t, y(t))$ _____ függvény $i$-edik deriváltját jelöli a $t$ függvényhez képest."},"a":{"en":"composite","hu":"összetett"}},
    {"q":{"en":"If $h=0.2$ and $h=0.1$ are compared in a 3rd order method, the error reduction factor should be roughly _____.","hu":"Ha a $h=0.2$-t és a $h=0.1$-t egy 3. rendű módszerrel hasonlítjuk össze, a hibacsökkentési tényezőnek nagyjából _____-nak kell lennie."},"a":{"en":"one eighth ($2^3$)","hu":"egy nyolcad ($2^3$)"}},
    {"q":{"en":"True or False: Taylor's method can be generalized for non-uniform mesh points using $h_i$ instead of a constant $h$.","hu":"Igaz vagy hamis: Taylor módszere általánosítható nem egyenletes hálópontokra a $h_i$ használatával az állandó $h$ helyett."},"a":{"en":"True","hu":"Igaz"}},
    {"q":{"en":"What is the primary practical difficulty in implementing high-order Taylor's methods?","hu":"Mi az elsődleges gyakorlati nehézség a magasrendű Taylor-módszerek megvalósításában?"},"a":{"en":"The need to analytically compute and evaluate multiple high-order partial derivatives of $f$.","hu":"A $f$ több magas rendű parciális deriváltjának analitikus kiszámításának és kiértékelésének szükségessége."}},
    {"q":{"en":"Which specific one-step method is equivalent to a first-order Taylor's method?","hu":"Melyik konkrét egylépéses módszer felel meg az elsőrendű Taylor-módszernek?"},"a":{"en":"Euler's method","hu":"Euler módszere"}},
    {"q":{"en":"In Theorem 10.7, what is the relationship between the local truncation error order $\\alpha$ and the convergence order?","hu":"A 10.7. Tételben mi a kapcsolat a $\\alpha$ lokális csonkítási hibasorrend és a konvergenciasorrend között?"},"a":{"en":"They are the same; the method converges in order $\\alpha$.","hu":"Ugyanazok; a metódus a $\\alpha$ sorrendben konvergál."}},
    {"q":{"en":"What does the symbol $\\xi_i$ represent in the Taylor expansion remainder?","hu":"Mit jelent a $\\xi_i$ szimbólum a Taylor-kiterjesztés maradékában?"},"a":{"en":"An unknown point in the interval $(t_i, t_{i+1})$ where the high-order derivative is evaluated for the error term.","hu":"Egy ismeretlen pont a $(t_i, t_{i+1})$ intervallumban, ahol a magasabb rendű derivált a hibatagra kiértékelésre kerül."}},
    {"q":{"en":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the value of $y'(0)$ given $y(0)=1$?","hu":"Az ODE $y' = 2y - 10t^2 + 2t$ esetében mennyi a $y'(0)$ értéke a $y(0)=1$ mellett?"},"a":{"en":"$2(1) - 10(0)^2 + 2(0) = 2$","hu":"$2(1) - 10(0)^2 + 2(0) = 2$"}},
    {"q":{"en":"If a method is order $\\alpha=2$, and the error at $h=0.2$ is $1.1825e-02$, what is the approximate expected error at $h=0.1$?","hu":"Ha egy módszer a $\\alpha=2$ sorrend, és a $h=0.2$ hiba $1.1825e-02$, akkor mi a hozzávetőlegesen várható hiba a $h=0.1$-nél?"},"a":{"en":"Approximately $2.956e-03$ (one quarter of the original error).","hu":"Körülbelül $2.956e-03$ (az eredeti hiba egynegyede)."}},
    {"q":{"en":"Concept: Equidistant mesh points","hu":"Koncepció: egyenlő távolságra lévő hálópontok"},"a":{"en":"Definition: A set of points $t_i$ where the distance between consecutive points $t_{i+1} - t_i$ is a constant value $h$.","hu":"Definíció: $t_i$ pontok halmaza, ahol a $t_{i+1} - t_i$ egymást követő pontok közötti távolság $h$ állandó érték."}},
    {"q":{"en":"Cloze: The Taylor's method of order $\\alpha$ requires $F(t, z; h)$ to include derivatives of $f$ up to order _____.","hu":"Bezárás: A Taylor-féle $\\alpha$ rendelési módszer megköveteli, hogy a $F(t, z; h)$ tartalmazza a $f$ származékait _____ rendelésig."},"a":{"en":"$\\alpha - 1$","hu":"$\\alpha - 1$"}},
    {"q":{"en":"In the definition of $\\tau_{i+1}$, what term represents the finite difference approximation of the derivative?","hu":"A $\\tau_{i+1}$ definíciójában melyik tag jelenti a derivált véges differenciális közelítését?"},"a":{"en":"$\\frac{y(t_{i+1}) - y(t_i)}{h}$","hu":"$\\frac{y(t_{i+1}) - y(t_i)}{h}$"}},
    {"q":{"en":"Why is the Lipschitz property of $F$ in the second variable necessary for Theorem 10.7?","hu":"Miért szükséges a $F$ Lipschitz tulajdonsága a második változóban a 10.7 Tételhez?"},"a":{"en":"To ensure that the differences between the approximate steps and the exact solution do not grow uncontrollably (stability/convergence).","hu":"Annak érdekében, hogy a közelítő lépések és a pontos megoldás közötti különbségek ne növekedjenek ellenőrizhetetlenül (stabilitás/konvergencia)."}},
    {"q":{"en":"What is the purpose of selecting $F$ such that $\\tau_{i+1}$ is high-order?","hu":"Mi a célja a $F$ kiválasztásának úgy, hogy a $\\tau_{i+1}$ kiváló minőségű legyen?"},"a":{"en":"To achieve a higher order of convergence and thus a more accurate numerical solution for a given step size $h$.","hu":"Adott $h$ lépésnagyságnál magasabb rendű konvergencia és ezáltal pontosabb numerikus megoldás elérése érdekében."}},
    {"q":{"en":"What interval is $F$ defined on for the general one-step method?","hu":"Milyen intervallumon van meghatározva a $F$ az általános egylépéses módszerhez?"},"a":{"en":"$[t_0, T] \\times \\mathbb{R} \\times [0, H]$","hu":"$[t_0, T] \\times \\mathbb{R} \\times [0, H]$"}},
    {"q":{"en":"In the expansion for $y(t_{i+1})$, the first two terms $y(t_i) + hf(t_i, y(t_i))$ correspond to which basic method?","hu":"A $y(t_{i+1})$ kiterjesztésében az első két $y(t_i) + hf(t_i, y(t_i))$ kifejezés melyik alapmódszernek felel meg?"},"a":{"en":"Euler's method","hu":"Euler módszere"}},
    {"q":{"en":"For $y' = 2y - 10t^2 + 2t$, what is the coefficient of $h^3/6$ in the third-order Taylor method step formula?","hu":"$y' = 2y - 10t^2 + 2t$ esetén mekkora a $h^3/6$ együtthatója a harmadrendű Taylor-módszer lépésképletében?"},"a":{"en":"$8z_i - 40t_i^2 - 32t_i - 16$","hu":"$8z_i - 40t_i^2 - 32t_i - 16$"}},
    {"q":{"en":"What is the global error notation used in Theorem 10.7?","hu":"Mi a 10.7 Tételben használt globális hibajelölés?"},"a":{"en":"$|y(t_i) - z_i|$","hu":"$|y(t_i) - z_i|$"}},
    {"q":{"en":"Formula: Write the total derivative operator $\\frac{d}{dt}$ applied to $f(t, y(t))$.","hu":"Képlet: Írja be a $f(t, y(t))$-re alkalmazott $\\frac{d}{dt}$ teljes derivált operátort."},"a":{"en":"$\\frac{d}{dt}f(t, y(t)) = \\frac{\\partial f}{\\partial t} + \\frac{\\partial f}{\\partial y}y'$","hu":"$\\frac{d}{dt}f(t, y(t)) = \\frac{\\partial f}{\\partial t} + \\frac{\\partial f}{\\partial y}y'$"}},
    {"q":{"en":"In the provided tables, as $t_i$ increases, what generally happens to the error $|y(t_i) - z_i|$?","hu":"A megadott táblázatokban a $t_i$ növekedésével általában mi történik a $|y(t_i) - z_i|$ hibával?"},"a":{"en":"The error generally increases as the solution progresses.","hu":"A hiba általában növekszik a megoldás előrehaladtával."}},
    {"q":{"en":"Term: One-step method","hu":"Fogalom: Egylépéses módszer"},"a":{"en":"Definition: A numerical procedure where the approximation at the next time level $z_{i+1}$ is calculated using only information from the current time level $z_i$.","hu":"Definíció: Numerikus eljárás, ahol a közelítés a következő $z_{i+1}$ időszinten csak az aktuális $z_i$ időszint információiból kerül kiszámításra."}},
    {"q":{"en":"What does the notation $\\langle t, t_i \\rangle$ typically denote in the context of Taylor's theorem?","hu":"Mit jelöl a $\\langle t, t_i \\rangle$ jelölés jellemzően Taylor tételének kontextusában?"},"a":{"en":"The open interval between $t$ and $t_i$.","hu":"A $t$ és a $t_i$ közötti nyitott intervallum."}},
    {"q":{"en":"If $f(t, y)$ is a function of $y$ only (autonomous), how does the formula for $y''(t)$ simplify?","hu":"Ha a $f(t, y)$ csak a $y$ függvénye (autonóm), hogyan egyszerűsödik a $y''(t)$ képlete?"},"a":{"en":"$y''(t) = \\frac{\\partial f}{\\partial y}f$","hu":"$y''(t) = \\frac{\\partial f}{\\partial y}f$"}},
    {"q":{"en":"In the second-order Taylor method example, what is the value of $f^{(1)}$ at $t=0, z=1$?","hu":"A másodrendű Taylor-módszer példájában mi a $f^{(1)}$ értéke $t=0, z=1$-nél?"},"a":{"en":"$4(1) - 20(0)^2 - 16(0) + 2 = 6$","hu":"$4(1) - 20(0)^2 - 16(0) + 2 = 6$"}},
    {"q":{"en":"Given $z_0 = 1, h = 0.2$, and $f(t_0, z_0) = 2$, and $f^{(1)}(t_0, z_0) = 6$, calculate $z_1$ for a 2nd order Taylor method.","hu":"Adott $z_0 = 1, h = 0.2$, $f(t_0, z_0) = 2$ és $f^{(1)}(t_0, z_0) = 6$, számítsa ki a $z_1$-t egy 2. sorrendű Taylor-módszerhez."},"a":{"en":"$z_1 = 1 + 0.2(2) + \\frac{0.2^2}{2}(6) = 1 + 0.4 + 0.12 = 1.52$","hu":"$z_1 = 1 + 0.2(2) + \\frac{0.2^2}{2}(6) = 1 + 0.4 + 0.12 = 1.52$"}},
    {"q":{"en":"Which theorem in the text provides the theoretical basis for the convergence of the Taylor method?","hu":"A szöveg melyik tétele adja meg a Taylor-módszer konvergenciájának elméleti alapját?"},"a":{"en":"Theorem 10.7","hu":"10.7. Tétel"}},
    {"q":{"en":"The local truncation error $\\tau_{i+1}$ is the difference between the exact solution's increment and the numerical method's increment, divided by _____.","hu":"A helyi csonkítási hiba $\\tau_{i+1}$ a pontos megoldás növekménye és a numerikus módszer növekménye közötti különbség, osztva _____-val."},"a":{"en":"the step size $h$","hu":"a lépésméret $h$"}},
    {"q":{"en":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the derivative $\\frac{\\partial f}{\\partial y}$?","hu":"Az ODE $y' = 2y - 10t^2 + 2t$ esetében mi a $\\frac{\\partial f}{\\partial y}$ származéka?"},"a":{"en":"$2$","hu":"$2$"}},
    {"q":{"en":"For the ODE $y' = 2y - 10t^2 + 2t$, what is the derivative $\\frac{\\partial f}{\\partial t}$?","hu":"Az ODE $y' = 2y - 10t^2 + 2t$ esetében mi a $\\frac{\\partial f}{\\partial t}$ származéka?"},"a":{"en":"$-20t + 2$","hu":"$-20t + 2$"}},
    {"q":{"en":"Formula: The general form of the remainder term in the Taylor expansion of degree $\\alpha$.","hu":"Képlet: A maradék tag általános formája a $\\alpha$ fokozat Taylor-kiterjesztésében."},"a":{"en":"$\\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$","hu":"$\\frac{y^{(\\alpha+1)}(\\xi_i)}{(\\alpha+1)!}h^{\\alpha+1}$"}},
    {"q":{"en":"Cloze: In the expression for $F(t, z; h)$, the coefficient of the $h^{k-1}$ term is _____.","hu":"Close: A $F(t, z; h)$ kifejezésben a $h^{k-1}$ tag együtthatója _____."},"a":{"en":"$\\frac{1}{k!}f^{(k-1)}(t, z)$","hu":"$\\frac{1}{k!}f^{(k-1)}(t, z)$"}},
    {"q":{"en":"In the provided tables, which method shows a smaller error at $t=1.0$ for $h=0.1$: Second-order or Third-order Taylor?","hu":"A megadott táblázatokban melyik metódus mutat kisebb hibát a $t=1.0$-nél a $h=0.1$ esetén: Másodrendű vagy harmadrendű Taylor?"},"a":{"en":"Third-order Taylor method ($4.1989e-03$ vs $8.4425e-02$).","hu":"Harmadrendű Taylor-módszer ($4.1989e-03$ vs $8.4425e-02$)."}}
  ],
  "10.5": [
    {"q":{"en":"What is the primary motivation for using Runge–Kutta methods instead of high-order Taylor methods?","hu":"Mi az elsődleges motiváció a Runge–Kutta módszerek használatára a magas szintű Taylor módszerek helyett?"},"a":{"en":"To avoid the complex computation of higher-order derivatives of $f$ while maintaining high convergence rates.","hu":"A $f$ magasabb rendű származékainak összetett számításának elkerülése, miközben magas konvergencia-arányt tartunk fenn."}},
    {"q":{"en":"In the context of ODEs, what happens to the computational complexity of Taylor's method as the order increases?","hu":"Az ODE-k kontextusában mi történik a Taylor-módszer számítási bonyolultságával a sorrend növekedésével?"},"a":{"en":"It increases significantly because the formulas for the derivatives $f^{(i)}$ becomes increasingly complicated.","hu":"Jelentősen növekszik, mivel a $f^{(i)}$ származékok képletei egyre bonyolultabbá válnak."}},
    {"q":{"en":"Runge–Kutta methods aim to reduce computational complexity while preserving the _____ of Taylor methods.","hu":"A Runge–Kutta módszerek célja a számítási bonyolultság csökkentése, miközben megőrzi a Taylor-módszerek _____."},"a":{"en":"high convergence rates","hu":"magas konvergencia ráták"}},
    {"q":{"en":"What mathematical expansion is used to derive the parameters for second-order Runge–Kutta methods?","hu":"Milyen matematikai kiterjesztéssel származtatják a másodrendű Runge–Kutta metódusok paramétereit?"},"a":{"en":"The multivariable Taylor formula for $f(t + a, z + b)$.","hu":"A többváltozós Taylor-képlet a $f(t + a, z + b)$-hez."}},
    {"q":{"en":"How is the 'essential part' of $f(t + \\frac{h}{2}, z + \\frac{h}{2}f(t, z))$ related to the second-order Taylor method?","hu":"Hogyan kapcsolódik a $f(t + \\frac{h}{2}, z + \\frac{h}{2}f(t, z))$ „lényeges része” a másodrendű Taylor-módszerhez?"},"a":{"en":"It coincides with the Taylor function $F(t, z; h)$ except for the second-order error term $E$.","hu":"Ez egybeesik a $F(t, z; h)$ Taylor-függvénnyel, kivéve a $E$ másodrendű hibatagot."}},
    {"q":{"en":"What is the specific iteration formula for the midpoint method?","hu":"Mi a felezőpont módszer konkrét iterációs képlete?"},"a":{"en":"$z_{i+1} = z_i + hf(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}f(t_i, z_i))$","hu":"$z_{i+1} = z_i + hf(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}f(t_i, z_i))$"}},
    {"q":{"en":"What is the order of convergence for the midpoint method?","hu":"Mi a felezőpont módszer konvergencia sorrendje?"},"a":{"en":"Quadratic (second-order).","hu":"Kvadratikus (másodrendű)."}},
    {"q":{"en":"Under what condition regarding the function $f$ does the midpoint method guaranteed quadratic convergence?","hu":"Milyen feltételek mellett garantálja a felezőpont módszer a $f$ függvényre a másodfokú konvergenciát?"},"a":{"en":"When $f$ is Lipschitz continuous in its second variable and $f \\in C^2$.","hu":"Amikor a $f$ Lipschitz folyamatos a második változójában és a $f \\in C^2$."}},
    {"q":{"en":"In the general explicit Runge–Kutta formula $F(t, z; h) = \\sum_{j=1}^{p}\\gamma_j G_j$, what is the definition of $G_1$?","hu":"Mi a $G_1$ definíciója az általános explicit Runge–Kutta formulában, a $F(t, z; h) = \\sum_{j=1}^{p}\\gamma_j G_j$?"},"a":{"en":"$G_1(t, z; h) = f(t, z)$","hu":"$G_1(t, z; h) = f(t, z)$"}},
    {"q":{"en":"What is the general recursive formula for the stage values $G_j$ in an explicit Runge–Kutta method?","hu":"Mi az általános rekurzív képlet a $G_j$ szakaszértékekre egy explicit Runge–Kutta módszerben?"},"a":{"en":"$G_j(t, z; h) = f(t + \\alpha_j h, z + h\\sum_{k=1}^{j-1}\\beta_{jk}G_k(t, z; h))$","hu":"$G_j(t, z; h) = f(t + \\alpha_j h, z + h\\sum_{k=1}^{j-1}\\beta_{jk}G_k(t, z; h))$"}},
    {"q":{"en":"What is the primary goal when selecting the parameters $\\gamma_j$, $\\alpha_j$, and $\\beta_{jk}$ in Runge–Kutta methods?","hu":"Mi az elsődleges cél a $\\gamma_j$, $\\alpha_j$ és $\\beta_{jk}$ paraméterek kiválasztásakor a Runge–Kutta metódusokban?"},"a":{"en":"To achieve the highest possible order for the local truncation error.","hu":"A helyi csonkítási hiba lehető legmagasabb sorrendjének elérése érdekében."}},
    {"q":{"en":"For a Runge–Kutta method with $p=2$, what is the general form of the function $F(t, z; h)$?","hu":"A $p=2$-vel rendelkező Runge–Kutta metódus esetén mi a $F(t, z; h)$ függvény általános formája?"},"a":{"en":"$F(t, z; h) = \\gamma_1 f(t, z) + \\gamma_2 f(t + \\alpha_1 h, z + \\beta_{21}hf(t, z))$","hu":"$F(t, z; h) = \\gamma_1 f(t, z) + \\gamma_2 f(t + \\alpha_1 h, z + \\beta_{21}hf(t, z))$"}},
    {"q":{"en":"Which specific parameter values in a $p=2$ Runge–Kutta method yield the midpoint method?","hu":"A $p=2$ Runge–Kutta metódusban mely konkrét paraméterértékek adják a középpont módszert?"},"a":{"en":"$\\gamma_1 = 0$, $\\gamma_2 = 1$, and $\\alpha_1 = \\beta_{21} = 1/2$.","hu":"$\\gamma_1 = 0$, $\\gamma_2 = 1$ és $\\alpha_1 = \\beta_{21} = 1/2$."}},
    {"q":{"en":"Why is it impossible to construct a third-order Runge–Kutta method using only two stages ($p=2$)?","hu":"Miért lehetetlen egy harmadrendű Runge–Kutta metódus létrehozása csak két szakaszból ($p=2$)?"},"a":{"en":"The $p=2$ formula lacks terms corresponding to $\\frac{\\partial f}{\\partial t}\\frac{\\partial f}{\\partial y}$ and $(\\frac{\\partial f}{\\partial y})^2 f$ found in the third-order Taylor expansion.","hu":"A $p=2$ képletből hiányoznak a harmadrendű Taylor-kiterjesztésben található $\\frac{\\partial f}{\\partial t}\\frac{\\partial f}{\\partial y}$ és $(\\frac{\\partial f}{\\partial y})^2 f$ kifejezések."}},
    {"q":{"en":"To ensure a $p=2$ Runge–Kutta method is at least second-order, what must the sum $\\gamma_1 + \\gamma_2$ equal?","hu":"Ahhoz, hogy a $p=2$ Runge–Kutta metódus legalább másodrendű legyen, mekkora legyen a $\\gamma_1 + \\gamma_2$ összege?"},"a":{"en":"1","hu":"1"}},
    {"q":{"en":"In a second-order Runge–Kutta method ($p=2$), what is the required value for the product $\\gamma_2 \\alpha_1$?","hu":"Másodrendű Runge–Kutta módszerben ($p=2$) mi a szükséges érték a $\\gamma_2 \\alpha_1$ szorzathoz?"},"a":{"en":"$1/2$","hu":"$1/2$"}},
    {"q":{"en":"In a second-order Runge–Kutta method ($p=2$), what is the required value for the product $\\gamma_2 \\beta_{21}$?","hu":"Másodrendű Runge–Kutta módszerben ($p=2$) mi a szükséges érték a $\\gamma_2 \\beta_{21}$ szorzathoz?"},"a":{"en":"$1/2$","hu":"$1/2$"}},
    {"q":{"en":"What are the parameter values $\\gamma_1$, $\\gamma_2$, $\\alpha_1$, and $\\beta_{21}$ for the modified Euler method?","hu":"Melyek a $\\gamma_1$, $\\gamma_2$, $\\alpha_1$ és $\\beta_{21}$ paraméterértékek a módosított Euler-módszerhez?"},"a":{"en":"$\\gamma_1 = 1/2$, $\\gamma_2 = 1/2$, $\\alpha_1 = 1$, and $\\beta_{21} = 1$.","hu":"$\\gamma_1 = 1/2$, $\\gamma_2 = 1/2$, $\\alpha_1 = 1$ és $\\beta_{21} = 1$."}},
    {"q":{"en":"What is the iteration formula for the modified Euler method?","hu":"Mi a módosított Euler-módszer iterációs képlete?"},"a":{"en":"$z_{i+1} = z_i + \\frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i)))$","hu":"$z_{i+1} = z_i + \\frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i)))$"}},
    {"q":{"en":"What is the geometric interpretation of the modified Euler method?","hu":"Mi a módosított Euler-módszer geometriai értelmezése?"},"a":{"en":"It moves from $(t_i, z_i)$ using the average of the slopes at the current point and the Euler-predicted next point.","hu":"$(t_i, z_i)$-ről mozog az aktuális pont meredekségének átlagával és az Euler által előre jelzett következő ponttal."}},
    {"q":{"en":"In the modified Euler method, what does $w_{i+1} = z_i + hf(t_i, z_i)$ represent?","hu":"A módosított Euler-módszerben mit jelent a $w_{i+1} = z_i + hf(t_i, z_i)$?"},"a":{"en":"The intermediate predicted value for $z$ at $t_{i+1}$ calculated via a standard Euler step.","hu":"A $z$ köztes becsült értéke $t_{i+1}$-nél standard Euler-lépéssel számítva."}},
    {"q":{"en":"What are the parameter values $\\gamma_1$, $\\gamma_2$, $\\alpha_1$, and $\\beta_{21}$ for Heun's method as described in the source?","hu":"Melyek a $\\gamma_1$, $\\gamma_2$, $\\alpha_1$ és $\\beta_{21}$ paraméterértékek a forrásban leírt Heun-módszerhez?"},"a":{"en":"$\\gamma_1 = 1/4$, $\\gamma_2 = 3/4$, $\\alpha_1 = 2/3$, and $\\beta_{21} = 2/3$.","hu":"$\\gamma_1 = 1/4$, $\\gamma_2 = 3/4$, $\\alpha_1 = 2/3$ és $\\beta_{21} = 2/3$."}},
    {"q":{"en":"What is the specific iteration formula for Heun's method?","hu":"Mi a Heun-módszer konkrét iterációs képlete?"},"a":{"en":"$z_{i+1} = z_i + \\frac{h}{4}(f(t_i, z_i) + 3f(t_i + \\frac{2h}{3}, z_i + \\frac{2}{3}hf(t_i, z_i)))$","hu":"$z_{i+1} = z_i + \\frac{h}{4}(f(t_i, z_i) + 3f(t_i + \\frac{2h}{3}, z_i + \\frac{2}{3}hf(t_i, z_i)))$"}},
    {"q":{"en":"Both the modified Euler method and Heun's method belong to which class of Runge–Kutta formulas?","hu":"A módosított Euler-módszer és a Heun-módszer is a Runge–Kutta képletek melyik osztályába tartozik?"},"a":{"en":"Second-order Runge–Kutta methods.","hu":"Másodrendű Runge–Kutta módszerek."}},
    {"q":{"en":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=4$ stages?","hu":"A rendelési táblázat szerint mekkora a maximális elérhető sorrend egy Runge–Kutta módszernél $p=4$ szakaszokkal?"},"a":{"en":"4","hu":"4"}},
    {"q":{"en":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=5$ stages?","hu":"A rendelési táblázat szerint mekkora a maximális elérhető sorrend egy Runge–Kutta módszernél $p=5$ szakaszokkal?"},"a":{"en":"4","hu":"4"}},
    {"q":{"en":"According to the order table, what is the maximum achievable order for a Runge–Kutta method with $p=6$ stages?","hu":"A rendelési táblázat szerint mekkora a maximális elérhető sorrend egy Runge–Kutta módszernél $p=6$ szakaszokkal?"},"a":{"en":"5","hu":"5"}},
    {"q":{"en":"What is the value of the first stage $w_{i,1}$ in the classical fourth-order Runge–Kutta method?","hu":"Mekkora a $w_{i,1}$ első fokozat értéke a klasszikus negyedrendű Runge–Kutta módszerben?"},"a":{"en":"$w_{i,1} = f(t_i, z_i)$","hu":"$w_{i,1} = f(t_i, z_i)$"}},
    {"q":{"en":"In the classical RK4 method, what is the formula for the second stage $w_{i,2}$?","hu":"A klasszikus RK4 módszerben mi a képlet a $w_{i,2}$ második szakaszhoz?"},"a":{"en":"$w_{i,2} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,1})$","hu":"$w_{i,2} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,1})$"}},
    {"q":{"en":"In the classical RK4 method, what is the formula for the third stage $w_{i,3}$?","hu":"A klasszikus RK4 módszerben mi a képlet a $w_{i,3}$ harmadik fokozathoz?"},"a":{"en":"$w_{i,3} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,2})$","hu":"$w_{i,3} = f(t_i + \\frac{h}{2}, z_i + \\frac{h}{2}w_{i,2})$"}},
    {"q":{"en":"In the classical RK4 method, what is the formula for the fourth stage $w_{i,4}$?","hu":"A klasszikus RK4 módszerben mi a képlet a $w_{i,4}$ negyedik szakaszhoz?"},"a":{"en":"$w_{i,4} = f(t_{i+1}, z_i + hw_{i,3})$","hu":"$w_{i,4} = f(t_{i+1}, z_i + hw_{i,3})$"}},
    {"q":{"en":"What is the final step formula for $z_{i+1}$ in the classical fourth-order Runge–Kutta method?","hu":"Mi a $z_{i+1}$ utolsó lépésének képlete a klasszikus negyedrendű Runge–Kutta módszerben?"},"a":{"en":"$z_{i+1} = z_i + \\frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4})$","hu":"$z_{i+1} = z_i + \\frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4})$"}},
    {"q":{"en":"What smoothness condition on $f$ is required for the classical Runge–Kutta method to have a fourth-order local truncation error?","hu":"Milyen simasági feltétel szükséges a $f$-n ahhoz, hogy a klasszikus Runge–Kutta metódus negyedrendű lokális csonkítási hibával rendelkezzen?"},"a":{"en":"$f \\in C^5$","hu":"$f \\in C^5$"}},
    {"q":{"en":"How does the classical fourth-order Runge–Kutta method relate to Simpson's rule?","hu":"Hogyan kapcsolódik a klasszikus negyedrendű Runge–Kutta módszer Simpson szabályához?"},"a":{"en":"If $f$ depends only on $t$, the method reduces to Simpson's rule.","hu":"Ha a $f$ csak a $t$-től függ, a módszer Simpson-szabályra redukálódik."}},
    {"q":{"en":"How many function evaluations per step are required for the classical fourth-order Runge–Kutta method?","hu":"Hány függvényértékelésre van szükség lépésenként a klasszikus negyedrendű Runge–Kutta módszerhez?"},"a":{"en":"Four","hu":"Négy"}},
    {"q":{"en":"How many function evaluations per step are required for the modified Euler method?","hu":"Hány függvénykiértékelés szükséges lépésenként a módosított Euler-módszerhez?"},"a":{"en":"Two","hu":"Két"}},
    {"q":{"en":"In the $p=2$ case, how many equations must be satisfied to identify as many second-order terms as possible?","hu":"A $p=2$ esetben hány egyenletnek kell teljesülnie ahhoz, hogy a lehető legtöbb másodrendű tagot azonosítsuk?"},"a":{"en":"Six (three for first-order agreement and three for partial second-order agreement).","hu":"Hat (három elsőrendű és három részleges másodrendű megállapodás esetén)."}},
    {"q":{"en":"For the IVP $y' = 2 - t - y, y(0) = 1$, how do the results of the midpoint, modified Euler, and Heun methods compare?","hu":"Az IVP $y' = 2 - t - y, y(0) = 1$ esetében hogyan viszonyulnak a középponti, módosított Euler- és Heun-módszerek eredményei?"},"a":{"en":"They generate the same approximate solution for any step size $h$.","hu":"Ugyanazt a hozzávetőleges megoldást generálják bármely $h$ lépésmérethez."}},
    {"q":{"en":"What is the relationship between the local truncation error of the midpoint method ($\\tau_{i+1}$) and the second-order Taylor method ($\\bar{\\tau}_{i+1}$)?","hu":"Mi a kapcsolat a középponti módszer ($\\tau_{i+1}$) és a másodrendű Taylor-módszer ($\\bar{\\tau}_{i+1}$) lokális csonkítási hibája között?"},"a":{"en":"$\\tau_{i+1} = \\bar{\\tau}_{i+1} - E(t_i, y(t_i), \\frac{h}{2}, \\frac{h}{2}f(t_i, y(t_i)))$","hu":"$\\tau_{i+1} = \\bar{\\tau}_{i+1} - E(t_i, y(t_i), \\frac{h}{2}, \\frac{h}{2}f(t_i, y(t_i)))$"}},
    {"q":{"en":"In the general RK formula, what do the parameters $\\alpha_j$ represent?","hu":"Az általános RK képletben mit jelentenek a $\\alpha_j$ paraméterek?"},"a":{"en":"The fractions of the step size $h$ added to the time variable $t$ for each stage evaluation.","hu":"A $h$ lépésméret töredékei hozzáadva a $t$ időváltozóhoz minden egyes szakasz kiértékeléséhez."}},
    {"q":{"en":"In the general RK formula, what do the parameters $\\gamma_j$ represent?","hu":"Az általános RK képletben mit jelentenek a $\\gamma_j$ paraméterek?"},"a":{"en":"The weights assigned to each stage's slope $G_j$ in the final average.","hu":"Az egyes szakaszok $G_j$ lejtéséhez rendelt súlyok a végső átlagban."}},
    {"q":{"en":"What is the local truncation error order of a 'third-order' Runge–Kutta method?","hu":"Mi a „harmadrendű” Runge–Kutta metódus lokális csonkítási hibasorrendje?"},"a":{"en":"Third-order ($O(h^3)$).","hu":"Harmadrendű ($O(h^3)$)."}},
    {"q":{"en":"For $p=1$, the Runge–Kutta method reduces to which well-known numerical method?","hu":"A $p=1$ esetében a Runge–Kutta módszer melyik jól ismert numerikus módszerre redukálja?"},"a":{"en":"The Euler method.","hu":"Az Euler-módszer."}},
    {"q":{"en":"If $f$ is Lipschitz continuous in its second variable, the midpoint method's increment function $F$ is also _____.","hu":"Ha a $f$ Lipschitz folytonos a második változójában, akkor a felezőpont módszer $F$ növekményfüggvénye is _____."},"a":{"en":"Lipschitz continuous in its second variable","hu":"Lipschitz folytonos a második változójában"}},
    {"q":{"en":"What is the maximum order of a Runge–Kutta method where the number of stages $p$ equals 10?","hu":"Mi a maximális sorrendje egy Runge–Kutta metódusnak, ahol a $p$ szakaszok száma 10?"},"a":{"en":"7","hu":"7"}},
    {"q":{"en":"What is the maximum order of a Runge–Kutta method where the number of stages $p$ equals 2?","hu":"Mi a maximális sorrendje egy Runge–Kutta metódusnak, ahol a $p$ szakaszok száma 2?"},"a":{"en":"2","hu":"2"}},
    {"q":{"en":"In the classical RK4 method, the time points used for the four slopes are $t_i$, $t_i + h/2$, $t_i + h/2$, and _____.","hu":"A klasszikus RK4 módszerben a négy lejtőhöz használt időpontok a következők: $t_i$, $t_i + h/2$, $t_i + h/2$ és _____."},"a":{"en":"$t_{i+1}$ (or $t_i + h$)","hu":"$t_{i+1}$ (vagy $t_i + h$)"}},
    {"q":{"en":"Which method uses a slope calculated at $t_i + 2h/3$ as its second stage?","hu":"Melyik módszer használja a $t_i + 2h/3$-nél számított meredekséget második fokozatként?"},"a":{"en":"Heun's method.","hu":"Heun módszere."}},
    {"q":{"en":"Which method uses a slope calculated at $t_i + h/2$ using an intermediate Euler half-step?","hu":"Melyik módszer használja a $t_i + h/2$-nél kiszámított meredekséget egy közbenső Euler-féllépéssel?"},"a":{"en":"The midpoint method.","hu":"A középpont módszere."}},
    {"q":{"en":"What characterizes an 'explicit' Runge–Kutta method compared to an implicit one?","hu":"Mi jellemzi az „explicit” Runge–Kutta módszert az implicithez képest?"},"a":{"en":"Each stage $G_j$ is calculated using only previously determined stages $G_1, \\dots, G_{j-1}$.","hu":"Minden egyes $G_j$ fokozatot csak a korábban meghatározott $G_1, \\dots, G_{j-1}$ fokozatok alapján számítanak ki."}},
    {"q":{"en":"The error term $E(t, z, a, b)$ in the derivation of the midpoint method is of what order?","hu":"Milyen nagyságrendű a $E(t, z, a, b)$ hibatag a felezőpont módszer levezetésében?"},"a":{"en":"Second-order.","hu":"Másodrendű."}},
    {"q":{"en":"In the context of the $p=2$ RK method, what is the role of $\\beta_{21}$?","hu":"A $p=2$ RK módszerrel összefüggésben mi a $\\beta_{21}$ szerepe?"},"a":{"en":"It is the coefficient weighting the first slope $G_1$ in the argument of the second stage $G_2$.","hu":"Ez a $G_1$ első meredekséget súlyozó együttható a második szakasz $G_2$ argumentumában."}},
    {"q":{"en":"When comparing the numerical results for $y' = 2y - 10t^2 + 2t$, which method typically shows the smallest error at $t=1.0$ for $h=0.1$?","hu":"A $y' = 2y - 10t^2 + 2t$ számszerű eredményeinek összehasonlításakor általában melyik módszer mutatja a legkisebb hibát a $t=1.0$ értéknél a $h=0.1$ esetében?"},"a":{"en":"The classical fourth-order Runge–Kutta method.","hu":"A klasszikus negyedrendű Runge–Kutta módszer."}},
    {"q":{"en":"The function $F(t, z; h)$ in a Runge–Kutta method is often called the _____ function.","hu":"A Runge–Kutta metódusban a $F(t, z; h)$ függvényt gyakran _____ függvénynek nevezik."},"a":{"en":"increment","hu":"növekedés"}},
    {"q":{"en":"To achieve a fourth-order local error, what is the minimum number of stages required?","hu":"A negyedrendű lokális hiba eléréséhez hány fokozat szükséges?"},"a":{"en":"4","hu":"4"}},
    {"q":{"en":"To achieve a fifth-order local error, what is the minimum number of stages required?","hu":"Ötödrendű lokális hiba eléréséhez hány fokozat szükséges?"},"a":{"en":"6","hu":"6"}},
    {"q":{"en":"In the derivation of RK methods, why is the 'Lipschitz continuity' of $f$ important?","hu":"Miért fontos a $f$ 'Lipschitz-folytonossága' az RK módszerek levezetésében?"},"a":{"en":"It ensures the stability and convergence of the numerical approximation.","hu":"Ez biztosítja a numerikus közelítés stabilitását és konvergenciáját."}},
    {"q":{"en":"The midpoint method is an example of a _____ stage Runge–Kutta method.","hu":"A középpont módszer egy példa a _____ szakaszú Runge–Kutta módszerre."},"a":{"en":"two","hu":"két"}},
    {"q":{"en":"In the modified Euler method, the final slope is the _____ of the slopes at the beginning and end of the interval.","hu":"A módosított Euler-módszerben a végső meredekség az intervallum elején és végén lévő meredekségek _____."},"a":{"en":"arithmetic mean (or average)","hu":"számtani átlag (vagy átlag)"}},
    {"q":{"en":"What is the sum of the weights $\\gamma_j$ in the classical RK4 method?","hu":"Mennyi a $\\gamma_j$ súlyok összege a klasszikus RK4 módszerben?"},"a":{"en":"1 (from $\\frac{1}{6} + \\frac{2}{6} + \\frac{2}{6} + \\frac{1}{6}$).","hu":"1 ($\\frac{1}{6} + \\frac{2}{6} + \\frac{2}{6} + \\frac{1}{6}$-ből)."}}
  ],
};
