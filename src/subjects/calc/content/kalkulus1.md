# Kalkulus informatikusoknak I.

Győri István, Pituk Mihály

## 1. fejezet

# Halmazok, függvények

## 1.1. Halmazok

Az *egész számok* halmazának jele $\mathbb{Z}$. A nemnegatív egész számokat *természetes számoknak* nevezzük. A természetes számok halmazát az $\mathbb{N}$, a pozitív egész számok halmazát pedig az $\mathbb{N}^{+}$ szimbólummal jelöljük. A *valós számok* halmazának jele $\mathbb{R}$. Az $\mathbb{R}$ halmazt *számegyenesnek* is szokás nevezni.

Egy $x$ valós szám *abszolút értékét* az

$$
|x| =
\begin{cases}
x, & \text{ha } x \ge 0,\\
-x, & \text{ha } x < 0
\end{cases}
$$

képlettel definiáljuk. Geometrialag $|x|$ az $x$ számnak 0-tól való távolsága a számegyenesen. Általánosabban, ha $x$ és $y$ két valós szám, akkor $|x-y|$ az $x$ és $y$ számok egymástől való távolsága a számegyenesen. Bármely $x,y \in \mathbb{R}$ esetén

$$
|x+y| \le |x| + |y|.
$$

*(háromszög-egyenlőtlenség)*

Ha $H$ egy adott *halmaz*, akkor az $x \in H$ ($x \notin H$) szimbólum azt jelenti, hogy $x$ eleme ($x$ nem eleme) $H$-nak. Egy halmazt megadhatunk elemeinek a felsorolásával vagy azoknak a tulajdonságoknak a leírásával, amelyek a halmaz elemeit jellemzik. Az 1, 3 és 10 számokból álló halmazt a következőképpen jelöljük:

$$
H = \{1,3,10\}.
$$

Ha $T(x)$ egy állítás (tulajdonság), amely a benne szereplő $x$ változótól függően lehet igaz vagy hamis, akkor

$$
H = \{x \mid T(x)\}
$$

azoknak az $x$ elemeknek a halmazát jelöli, amelyekre $T(x)$ igaz. Legyen

$$
H = \{x \in \mathbb{R} \mid |x-1| < 3\}.
$$

Az abszolút érték geometriai jelentéséből azonnal adódik, hogy $H$ azon $x \in \mathbb{R}$ számokból áll, amelyekre $-2 < x < 4$.

Legyen $A$, $B$ két halmaz. $A$ részhalmaza $B$-nek, jelben $A \subset B$, ha $A$ minden eleme $B$-nek is eleme. $A$ és $B$ *egyesítését*, *metszetét* és *különbségét* az

$$
\begin{aligned}
A \cup B &= \{x \mid x \in A \text{ vagy } x \in B\},\\
A \cap B &= \{x \mid x \in A \text{ és } x \in B\},\\
A \setminus B &= \{x \mid x \in A \text{ és } x \notin B\}
\end{aligned}
$$

képletekkel definiáljuk. $A$ és $B$ *Descartes-szorzatának* jele $A \times B$. Az $A \times B$ halmaz azon $(a,b)$ rendezett párokból áll, amelyekre $a \in A$ és $b \in B$. Tehát

$$
A \times B = \{(a,b) \mid a \in A \text{ és } b \in B\}.
$$

Az *üres halmaz* jele $\emptyset$. Ha $A \cap B = \emptyset$, akkor az $A$, $B$ halmazokat *diszjunktaknak* mondjuk.

## 1.2. Számhalmazok

**1.2.1. Definíció.** $\mathbb{R}$ részhalmazait (valós) *számhalmazoknak* mondjuk.

**1.2.2. Definíció.** Legyen $A \subset \mathbb{R}$. A $c \in \mathbb{R}$ számot az $A$ halmaz *felső korlátjának* (*alsó korlátjának*) mondjuk, ha minden $x \in A$ esetén $x \le c$ ($x \ge c$).

Az $A$ halmaz *felülről korlátos* (*alulról korlátos*), ha létezik felső korlátja (alsó korlátja). Az $A$ halmaz *korlátos*, ha korlátos felülről és alulról is.

Könnyű belátni, hogy $A \subset \mathbb{R}$ éppen akkor korlátos, ha létezik $k > 0$ úgy, hogy minden $x \in A$-ra $|x| \le k$.

Az *intervallumok* speciális számhalmazok. A *korlátos intervallumok* a következők:

$$
\begin{aligned}
(a,b) &= \{x \in \mathbb{R} \mid a < x < b\},\\
[a,b) &= \{x \in \mathbb{R} \mid a \le x < b\},\\
(a,b] &= \{x \in \mathbb{R} \mid a < x \le b\},\\
[a,b] &= \{x \in \mathbb{R} \mid a \le x \le b\},
\end{aligned}
$$

ahol $a,b \in \mathbb{R}$, $a < b$. Az első intervallum *nyílt*, a második *balról zárt, jobbról nyílt*, a harmadik *balról nyílt, jobbról zárt*, a negyedik pedig *zárt*. A

$$
\begin{aligned}
(c,\infty) &= \{x \in \mathbb{R} \mid x > c\},\\
[c,\infty) &= \{x \in \mathbb{R} \mid x \ge c\},\\
(-\infty,c) &= \{x \in \mathbb{R} \mid x < c\},\\
(-\infty,c] &= \{x \in \mathbb{R} \mid x \le c\},
\end{aligned}
$$

ahol $c \in \mathbb{R}$, valamint a

$$
(-\infty,\infty) = \mathbb{R}
$$

*nem korlátos intervallum*.

**1.2.3. Definíció.** Legyen $A \subset \mathbb{R}$. Az $m \in A$ számot az $A$ halmaz *legnagyobb elemének vagy maximumának* (*legkisebb elemének vagy minimumának*) mondjuk, ha minden $x \in A$ esetén $x \le m$ ($x \ge m$). Jelölés: $m = \max A$, illetve $m = \min A$.

**1.2.4. Példa.** Ha $A = (0,1)$, akkor $\min A$ és $\max A$ sem létezik. Ha $A = [0,1)$, akkor $\min A = 0$, $\max A$ nem létezik. Ha $A = (0,1]$, akkor $\min A$ nem létezik, $\max A = 1$. Ha pedig $A = [0,1]$, akkor $\min A = 0$ és $\max A = 1$.

Az előző példa azt mutatja, hogy korlátos $A$ esetén is előfordulhat, hogy $\min A$ és $\max A$ sem létezik. Ugyanakkor igaz a következő:

**1.2.5. Tétel.** *Ha $\emptyset \ne A \subset \mathbb{R}$ felülről korlátos (alulról korlátos), akkor $A$ felső korlátjai (alsó korlátjai) között mindig van legkisebb (legnagyobb).*

**1.2.6. Definíció.** Legyen $\emptyset \ne A \subset \mathbb{R}$. Ha $A$ felülről korlátos (alulról korlátos), akkor $A$ legkisebb felső korlátját (legnagyobb alsó korlátját) az $A$ halmaz *felső határának vagy szuprémumának* (*alsó határának vagy infimumának*) nevezzük. Jelölés: $\sup A$, illetve $\inf A$.

## 1.3. A függvény definíciója

A függvény definíciója a következő:

**1.3.1. Definíció.** Legyenek $A$ és $B$ adott halmazok. Az $A \times B$ Descartes-szorzat $Z$ részhalmazát *$A$-ból $B$-be vezető ($A \to B$ típusú) függvénynek (leképezésnek)* mondjuk, ha bármely $x \in A$ esetén legfeljebb egy $y \in B$ létezik úgy, hogy $(x,y) \in Z$. Ha ezt a leképezést $f$-fel jelöljük, akkor $(x,y) \in Z$ esetén $y$-t az *$x$ elem $f$ általi képének* mondjuk, és azt írjuk, hogy $y = f(x)$. Az $f$ függvény *értelmezési tartományán* a

$$
D(f) = \{x \in A \mid \text{létezik } y \in B \text{ úgy, hogy } (x,y) \in Z\}
$$

halmazt, $f$ *értékkészletén* pedig az

$$
R(f) = \{y \in B \mid \text{létezik } x \in A \text{ úgy, hogy } (x,y) \in Z\}
$$

halmazt értjük.

Azt, hogy $f$ $A$-ból $B$-be vezető leképezés az $f : A \to B$ szimbólummal jelöljük. Más szóval az $f : A \to B$ szimbólum azt jelenti, hogy $D(f) \subset A$ és $R(f) \subset B$. Hangsúlyozzuk, hogy általában $D(f) \ne A$ és $R(f) \ne B$.

Ha $H \subset D(f)$, akkor a *$H$ halmaz $f$ általi képén* az

$$
f(H) = \{f(x) \mid x \in H\}
$$

halmazt értjük.

Legyen $H \subset D(f)$. Az *$f$ függvény $H$ halmazra való leszűkítésén (megszorításán)*, jele $f|_H$, azt a függvényt értjük, amelynek értelmezési tartománya $D(f|_H) = H$, és képlete

$$
(f|_H)(x) = f(x), \qquad x \in H.
$$

Az $f : A \to B$ függvény *grafikonja*

$$
\operatorname{graph}(f) = \{(x,f(x)) \mid x \in D(f)\} \subset A \times B.
$$

**1.3.2. Példa.** Legyen

$$
Z = \{(x,y) \in \mathbb{R} \times \mathbb{R} \mid x^2 + y^2 = 1\} \subset \mathbb{R} \times \mathbb{R}.
$$

$Z$ az $x,y$-sík azon pontjainak a halmaza, amelyek rajta vannak a $(0,0)$ középpontú 1 sugarú körvonalon. A $Z$ halmaz nem leképezés $\mathbb{R}$-ből $\mathbb{R}$-be, mert $(0,1) \in Z$ és $(0,-1) \in Z$ is teljesül. Viszont a

$$
Z = \{(x,y) \in \mathbb{R} \times \mathbb{R} \mid x^2 + y^2 = 1,\ y \ge 0\} \subset \mathbb{R} \times \mathbb{R}
$$

halmaz, a $(0,0)$ középpontú 1 sugarú felső félkörvonal, már $\mathbb{R}$-ből $\mathbb{R}$-be vezető leképezés. Ha $f$-fel jelöljük, akkor a definícióban használt jelöléssel $D(f) = [-1,1]$, $R(f) = [0,1]$ és

$$
y = f(x) = \sqrt{1-x^2}, \qquad x \in [-1,1].
$$

## 1.4. Az összetett függvény

**1.4.1. Definíció.** Legyen $f : A \to B$ és $g : B \to C$ két függvény. Minden olyan $x \in D(g)$ esetén, amelyre $g(x) \in D(f)$, legyen

$$
(f \circ g)(x) = f(g(x)).
$$

Az $f \circ g$-vel jelölt függvényt, amelynek értelmezési tartománya

$$
D(f \circ g) = \{x \in D(g) \mid g(x) \in D(f)\},
$$

$f$ és $g$ *kompozíciójának* nevezzük.

**1.4.2. Példa.** Legyen

$$
\begin{aligned}
f(x) &= 4x+2, \qquad x \in [0,1],\\
g(x) &= x-3, \qquad x \in [0,4].
\end{aligned}
$$

Ekkor

$$
(f \circ g)(x) = f(g(x)) = 4g(x)+2 = 4(x-3)+2 = 4x-10.
$$

Mivel $D(f) = [0,1]$, $g(x) = x-3 \in D(f)$ éppen akkor, ha $3 \le x \le 4$. Ha figyelembe vesszük, hogy $D(g) = [0,4]$, azt kapjuk, hogy

$$
D(f \circ g) = [3,4].
$$

## 1.5. Az inverz függvény

**1.5.1. Definíció.** Az $f$ függvényt *invertálhatónak* (*egy-egyértelműnek*) mondjuk, ha bármely $x_1,x_2 \in D(f)$, $x_1 \ne x_2$ esetén $f(x_1) \ne f(x_2)$.

**1.5.2. Definíció.** Ha $f : A \to B$ invertálható, $D(f) = A$ és $R(f) = B$, akkor azt mondjuk, hogy $f$ *kölcsönösen egyértelmű leképezést* létesít $A$ és $B$ között. Más szóval $f$ *bijektív leképezés* vagy röviden *bijekció*.

**1.5.3. Definíció.** Ha $f$ invertálható, akkor $f$ *inverz függvénye* az a függvény, amely $R(f)$-et képezi $D(f)$-be, és minden $y \in R(f)$-hez azt az $x \in D(f)$-et rendeli, amelyre $y = f(x)$. Az inverz függvény jele: $f_{-1}$.

A definícióból következik, hogy $D(f_{-1}) = R(f)$ és $R(f_{-1}) = D(f)$, továbbá minden $x \in D(f)$-re

$$
f_{-1}(f(x)) = x,
$$

és minden $y \in R(f)$ esetén

$$
f(f_{-1}(y)) = y.
$$

**1.5.4. Példa.** A

$$
g(x) = 1 - x^2, \qquad x \in [-1,1]
$$

függvény nem invertálható, mert $g(-1) = g(1)$. Az

$$
f(x) = 1 - x^2, \qquad x \in [-1,0]
$$

függvény viszont invertálható, mert ha valamely $x_1,x_2 \in D(f) = [-1,0]$ esetén $f(x_1) = f(x_2)$, akkor azt kapjuk, hogy $x_1^2 = x_2^2$, s innen $|x_1| = |x_2|$, majd $-x_1 = -x_2$, és végül $x_1 = x_2$ adódik. Könnyű belátni, hogy $R(f) = [0,1]$. Az

$$
y = f(x) = 1 - x^2, \qquad x \in D(f) = [-1,0],\ y \in R(f) = [0,1]
$$

feltételekből kapjuk, hogy $x^2 = 1-y$. Innen $|x| = \sqrt{1-y}$, majd $-x = \sqrt{1-y}$, és végül

$$
x = -\sqrt{1-y} = f_{-1}(y)
$$

adódik. Tehát $f$ inverz függvénye:

$$
f_{-1}(x) = -\sqrt{1-x}, \qquad x \in [0,1].
$$

## 1.6. Egyváltozós valós függvények

**1.6.1. Definíció.** Az $f$ függvényt *valós függvénynek* mondjuk, ha $R(f) \subset \mathbb{R}$. Az $f$ függvényt *egyváltozós függvénynek* mondjuk, ha $D(f) \subset \mathbb{R}$.

A továbbiakban egyváltozós valós függvényeket, azaz $\mathbb{R}$-ből $\mathbb{R}$-be vezető függvényeket fogunk vizsgálni. Az egyváltozós valós függvények grafikonjait az $x,y$-síkban ábrázolhatjuk,

$$
\operatorname{graph}(f) = \{(x,f(x)) \mid x \in D(f)\} \subset \mathbb{R} \times \mathbb{R} = \mathbb{R}^2.
$$

Az inverz függvény definíciójából kapjuk, hogy ha $f : \mathbb{R} \to \mathbb{R}$ invertálható, akkor az $f_{-1}$ inverz függvény grafikonját $f$ grafikonjának az $y = x$ egyenesre való tükrözésével kapjuk.


---

<!-- PDF page 11 -->

**1.6.2. Definíció.** Ha $f_1$ és $f_2$ valós függvények, akkor az $f_1 \pm f_2$, $f_1 \cdot f_2$ és $\frac{f_1}{f_2}$ függvényeket az

$$
\begin{aligned}
(f_1 \pm f_2)(x) &= f_1(x) \pm f_2(x), &
x &\in D(f_1 \pm f_2) = D(f_1) \cap D(f_2),\\
(f_1 \cdot f_2)(x) &= f_1(x) \cdot f_2(x), &
x &\in D(f_1 \cdot f_2) = D(f_1) \cap D(f_2),\\
\left(\frac{f_1}{f_2}\right)(x) &= \frac{f_1(x)}{f_2(x)}, &
x &\in D\left(\frac{f_1}{f_2}\right)
= \{x \in D(f_1) \cap D(f_2) \mid f_2(x) \ne 0\}
\end{aligned}
$$

képletekkel definiáljuk.

**1.6.3. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *felülről korlátos* (*alulról korlátos*), ha létezik $c \in \mathbb{R}$ úgy, hogy minden $x \in D(f)$-re $f(x) \le c$ ($f(x) \ge c$).

Az $f : \mathbb{R} \to \mathbb{R}$ függvény *korlátos*, ha korlátos felülről és alulról is.

Könnyű belátni, hogy $f : \mathbb{R} \to \mathbb{R}$ éppen akkor korlátos, ha létezik $k > 0$ úgy, hogy minden $x \in D(f)$-re $|f(x)| \le k$.

**1.6.4. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *monoton növekedő* (*monoton csökkenő*), ha bármely $x_1,x_2 \in D(f)$, $x_1 < x_2$ esetén $f(x_1) \le f(x_2)$ ($f(x_1) \ge f(x_2)$). Ha az utolsó egyenlőtlenséget $<$-re ($>$-ra) cseréljük, akkor a *szigorúan monoton növekedő* (*szigorúan monoton csökkenő*) függvény definícióját kapjuk.

Az $f : \mathbb{R} \to \mathbb{R}$ függvény *monoton* (*szigorúan monoton*), ha monoton növekedő vagy monoton csökkenő (szigorúan monoton növekedő vagy szigorúan monoton csökkenő).

**1.6.5. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *páros* (*páratlan*), ha bármely $x \in D(f)$ esetén $-x \in D(f)$, és $f(-x) = f(x)$ ($f(-x) = -f(x)$).

Minden páros függvény grafikonja szimmetrikus az $y$-tengelyre nézve, és minden páratlan függvény grafikonja szimmetrikus az origóra $((0,0)$ pontra) nézve.

**1.6.6. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *periodikus* a $p$ periódussal, ha bármely $x \in D(f)$ esetén $x+p \in D(f)$, és $f(x+p) = f(x)$.

**1.6.7. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *állandó* (*konstans*), ha létezik $c \in \mathbb{R}$ úgy, hogy minden $x \in D(f)$ esetén $f(x) = c$.

**1.6.8. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *zérushelyén* olyan $a \in D(f)$ pontot értünk, ahol $f(a) = 0$. Ha $f(a) = 0$, azt is mondjuk, hogy $f$ *eltűnik az $a$ helyen*.


<!-- PDF page 12 -->

# 2. fejezet

# Egyváltozós valós függvények határértéke és folytonossága

## 2.1. Konvergens sorozatok

**2.1.1. Definíció.** *Sorozatnak* olyan függvényt nevezünk, amelynek értelmezési tartománya $\mathbb{N}$. Valós sorozatnak $\mathbb{N}$-en definiált valós függvényt nevezünk. Ha $a : \mathbb{N} \to \mathbb{R}$ egy valós sorozat, akkor az $a(n)$ számot $a_n$-nel szokás jelölni. Az $a_n$-et a sorozat *$n$-edik tagjának* mondjuk. Az $a : \mathbb{N} \to \mathbb{R}$ helyett az $\{a_n\}_{n=0}^{\infty}$ vagy $\{a_n\}$ jelölés használatos.

A továbbiakban csak valós sorozatokkal fogunk foglalkozni.

**2.1.2. Definíció.** Az $a \in \mathbb{R}$ számot az $\{a_n\}$ sorozat *határértékének* (*limeszének*) mondjuk, ha bármely $\varepsilon > 0$ esetén létezik $n_0 \in \mathbb{N}$ úgy, hogy minden $n \ge n_0$-ra $|a_n-a| < \varepsilon$. Jelölés: $a_n \to a$ vagy

$$
\lim_{n \to \infty} a_n = a.
$$

A definícióban szereplő $n_0$ számot az $\varepsilon$ hibakorláthoz tartozó *küszöbszámnak* nevezzük.

Az $a_n \to a \in \mathbb{R}$ feltétel geometriailag azt jelenti, hogy bármely $\varepsilon > 0$ esetén az $\{a_n\}$ sorozat tagjai véges számú kivétellel benne vannak az $x,y$-sík $a-\varepsilon < y < a+\varepsilon$ sávjában.

**2.1.3. Definíció.** Az $\{a_n\}$ sorozatot *konvergensnek* mondjuk, ha létezik $a \in \mathbb{R}$, úgy, hogy $a_n \to a$. Azokat a sorozatokat, amelyek nem konvergensek, *divergenseknek* nevezzük.

**2.1.4. Tétel (A határérték egyértelműsége).** *Minden konvergens sorozatnak pontosan egy határértéke van.*

**2.1.5. Példa.** Legyen

$$
a_n = \frac{n}{n+1}, \qquad n \in \mathbb{N}.
$$

Ha a törtet $\frac{1}{n}$-nel bővítjük, azt kapjuk, hogy

$$
a_n = \frac{1}{1+\frac{1}{n}}, \qquad n \in \mathbb{N}.
$$


<!-- PDF page 13 -->

Ebből könnyű megsejteni, hogy $\lim_{n\to\infty} a_n = 1$. Ezt igazolni fogjuk a definíció szerint is. Legyen $\varepsilon > 0$ adva. Ekkor az $|a_n-1| < \varepsilon$ feltétel ($n \in \mathbb{N}$ esetén) ekvivalens (egyenértékű) az

$$
\left|\frac{n}{n+1} - 1\right| < \varepsilon,
$$

illetve

$$
n \ge \frac{1}{\varepsilon} - 1
$$

egyenlőtlenséggel. Tehát bármely olyan $n_0 \in \mathbb{N}$, amelyre $n_0 > \frac{1}{\varepsilon}-1$ az $\varepsilon$ hibakorlátnak megfelelő küszöbszám. Mivel $\varepsilon > 0$ tetszőleges volt, ezért $a_n \to 1$.

**2.1.6. Definíció.** Ha $\{n_k\}_{k=0}^{\infty}$ természetes számok szigorúan monoton növekedő sorozata, akkor az $\{a_{n_k}\}_{k=0}^{\infty}$ sorozatot az $\{a_n\}_{n=0}^{\infty}$ sorozat *részsorozatának* nevezzük.

Az alábbi tulajdonság nyilvánvaló.

**2.1.7. Tétel.** *Ha az $\{a_n\}_{n=0}^{\infty}$ sorozat konvergens, akkor $\{a_n\}_{n=0}^{\infty}$ bármely $\{a_{n_k}\}_{k=0}^{\infty}$ részsorozata is konvergens, és*

$$
\lim_{k\to\infty} a_{n_k} = \lim_{n\to\infty} a_n.
$$

A tételből következik, hogy az $a_n = (-1)^n$ sorozat divergens, hiszen

$$
a_{2k} = 1 \to 1, \qquad \text{és} \qquad a_{2k+1} = -1 \to -1.
$$

Mivel a sorozatok speciális valós függvények, a korlátosságukat (alulról és felülről is) már definiáltuk.

**2.1.8. Tétel (A konvergencia és korlátosság kapcsolata).** *Minden konvergens sorozat korlátos.*

Az $a_n = (-1)^n$ sorozat példája mutatja, hogy a fordított állítás nem igaz. Közvetlenül a definícióból vezethető le a következő állítás.

**2.1.9. Tétel.** *Ha $a_n \to 0$ és a $\{b_n\}$ sorozat korlátos, akkor $a_n b_n \to 0$.*

A következő tétel azt mutatja, hogy konvergens sorozatokból az alapművelek alkalmazásával szintén konvergens sorozatokat kapunk.

**2.1.10. Tétel (Műveletek határértékekkel).** *Ha $a_n \to a \in \mathbb{R}$, $b_n \to b \in \mathbb{R}$, akkor*

1. $a_n + b_n \to a+b$,
2. $a_n b_n \to ab$,
3. $b_n \ne 0$ minden $n \in \mathbb{N}$-re és $b \ne 0$ további feltételek mellett $\frac{a_n}{b_n} \to \frac{a}{b}$.

A $\le$ egyenlőtlenség két konvergens sorozat tagjai között „öröklődik” a határértékekre is.

**2.1.11. Tétel (Határátmenet egyenlőtlenségekben).** *Ha $a_n \le b_n$ véges számú kivétellel, $a_n \to a \in \mathbb{R}$ és $b_n \to b \in \mathbb{R}$, akkor $a \le b$.*


<!-- PDF page 14 -->

Az $a_n = 0$ és $b_n = \frac{1}{n}$ sorozatok példája mutatja, hogy az előző tételben a $\le$ egyenlőtlenség nem cserélhető ki $<$-re.

Az előző tulajdonsághoz kapcsolódik a következő:

**2.1.12. Tétel (Rendőrelv).** *Ha $a_n \le b_n \le c_n$ véges számú kivétellel és valamely $h \in \mathbb{R}$ esetén*

$$
\lim_{n\to\infty} a_n = \lim_{n\to\infty} c_n = h,
$$

*akkor*

$$
\lim_{n\to\infty} b_n = h.
$$

Nem minden korlátos sorozat konvergens. Viszont igaz a következő:

**2.1.13. Tétel (Bolzano-Weierstrass-féle kiválasztási tétel).** *Minden korlátos sorozatnak van konvergens részsorozata.*

Egy konvergens sorozat tagjai nagy $n$-ekre közel kerülnek a határértékhez, és ezért egymáshoz is. Meg lehet mutatni, hogy ez a tulajdonság egyben a konvergencia kritériuma is.

**2.1.14. Tétel (Cauchy-féle konvergenciakritérium).** *Az $\{a_n\}$ sorozat akkor és csak akkor konvergens, ha bármely $\varepsilon > 0$ esetén létezik $n_0 \in \mathbb{N}$ úgy, hogy minden $n \ge n_0$ és $m \ge n_0$ esetén $|a_n-a_m| < \varepsilon$.*

## 2.2. Végtelenhez tartó sorozatok

Most olyan sorozatokat fogunk vizsgálni, amelyek minden határon túl nőnek vagy csökkennek.

**2.2.1. Definíció.** Azt mondjuk, hogy az $\{a_n\}$ sorozat *tart a plusz végtelenhez* (*mínusz végtelenhez*), ha bármely $c \in \mathbb{R}$ esetén létezik $n_0 \in \mathbb{N}$ úgy, hogy minden $n \ge n_0$-ra $a_n > c$ ($a_n < c$). Jelölés:

$$
a_n \to \infty \quad (a_n \to -\infty),
\qquad \text{illetve} \qquad
\lim_{n\to\infty} a_n = \infty
\quad
\left(\lim_{n\to\infty} a_n = -\infty\right).
$$

Az $a_n \to \infty$ ($a_n \to -\infty$) feltétel geometriailag azt jelenti, hogy bármely $c \in \mathbb{R}$ esetén az $\{a_n\}$ sorozat tagjai véges számú kivétellel benne vannak az $x,y$-sík $y > c$ ($y < c$) félsíkjában.

**2.2.2. Példa.** Megmutatjuk a definíció alapján, hogy $n^2 \to \infty$. Legyen $c \in \mathbb{R}$ adott. Ha $c < 0$, akkor az $n^2 > c$ egyenlőtlenség igaz minden $n \in \mathbb{N}$-re, $c \ge 0$ esetén pedig éppen akkor teljesül, ha $n > \sqrt{c}$. Tehát $c < 0$ esetén bármely $n_0 \in \mathbb{N}$, $c \ge 0$ esetén pedig az $n_0 \in \mathbb{N}$, $n_0 > \sqrt{c}$ választás felel meg a definícióban előírt feltételnek.

A következő tulajdonság nyilvánvaló.

**2.2.3. Tétel.** *Ha $a_n \to \infty$ ($a_n \to -\infty$), akkor $\{a_n\}$ alulról (felülről) korlátos.*

A $\pm\infty$-be tartó sorozatokra érvényesek a következő szabályok.


<!-- PDF page 15 -->

**2.2.4. Tétel (Műveletek végtelen határértékekkel).**

1. *Ha $a_n \to \infty$, akkor $-a_n \to -\infty$.*
2. *Ha $a_n \to \infty$ és $\{b_n\}$ alulról korlátos, akkor $a_n+b_n \to \infty$.*
3. *Ha $a_n \to \infty$ és van olyan $c > 0$ ($d < 0$), hogy $b_n \ge c$ ($b_n \le d$) véges számú kivétellel, akkor $a_n b_n \to \infty$ ($a_n b_n \to -\infty$).*
4. *Ha $a_n \to \infty$, akkor $\frac{1}{a_n} \to 0$.*
5. *Ha $a_n \to 0$ és $a_n > 0$ ($a_n < 0$) véges számú kivétellel, akkor $\frac{1}{a_n} \to \infty$ ($\frac{1}{a_n} \to -\infty$).*

Az (i)-(iv)-hez hasonló állításokat meg lehet fogalmazni arra az esetre is, amikor $a_n \to -\infty$.

**2.2.5. Tétel (Határátmenet egyenlőtlenségben).** *Ha $a_n \le b_n$ véges számú kivétellel és $a_n \to \infty$ ($b_n \to -\infty$), akkor $b_n \to \infty$ ($a_n \to -\infty$).*

## 2.3. Monoton sorozatok

Az $\{a_n\}$ sorozat éppen akkor monoton növekedő (monoton csökkenő), ha minden $n \in \mathbb{N}$-re $a_n \le a_{n+1}$ ($a_n \ge a_{n+1}$), ha pedig a $\le$ ($\ge$) egyenlőtlenséget $<$-re ($>$-ra) cseréljük, akkor a szigorúan monoton növekedő (szigorúan monoton csökkenő) sorozat jellemzését kapjuk.

Egy monoton sorozatnak mindig létezik (véges vagy végtelen) határértéke.

**2.3.1. Tétel (Monoton sorozat határértéke).** *Ha az $\{a_n\}$ sorozat monoton növekedő (monoton csökkenő) és felülről nem korlátos (alulról nem korlátos), akkor $a_n \to \infty$ ($a_n \to -\infty$).*

*Ha az $\{a_n\}$ sorozat monoton növekedő (monoton csökkenő) és felülről korlátos (alulról korlátos), akkor $a_n \to \sup A$ ($a_n \to \inf A$), ahol $A = \{a_n \mid n \in \mathbb{N}\}$.*

*Speciálisan, minden monoton és korlátos sorozat konvergens.*

**2.3.2. Példa.** Legyen $a_0 = \sqrt{2}$ és

$$
a_{n+1} = \sqrt{2+a_n}, \qquad n \in \mathbb{N}.
$$

Teljes indukcióval bizonyítható, hogy $\{a_n\}$ monoton növekedő és minden $n \in \mathbb{N}$-re $\sqrt{2} \le a_n \le 2$. Az előző tétel szerint $a_n \to a$ valamely $a \in \mathbb{R}$-re. Elvégezve a határátmenetet az egyenletben és az utóbbi egyenlőtlenségben, azt kapjuk, hogy

$$
a = \sqrt{2+a}
\qquad \text{és} \qquad
\sqrt{2} \le a \le 2.
$$

Innen $a^2 = 2+a$, tehát $a = -1$ vagy $a = 2$. Mivel a $\sqrt{2} \le a \le 2$ feltételnek csak $a = 2$ felel meg, ezért $a = 2$.


<!-- PDF page 16 -->

## 2.4. Speciális sorozatok

Ismertetünk néhány fontos sorozatot és azok konvergenciatulajdonságait.

**2.4.1. Tétel (A $\{q^n\}$ geometriai sorozat).** *Ha $q > 1$, akkor $q^n \to \infty$. Ha $q = 1$, akkor $q^n = 1 \to 1$. Ha $q \in (-1,1)$, akkor $q^n \to 0$. Ha pedig $q \le -1$, akkor a $\{q^n\}_{n=0}^{\infty}$ sorozatnak sem véges, sem végtelen határértéke nem létezik.*

**2.4.2. Példa.**

$$
\frac{2^n+3^n}{4^n+5^n}
=
\frac{\left(\frac{2}{5}\right)^n + \left(\frac{3}{5}\right)^n}
{\left(\frac{4}{5}\right)^n + 1}
\longrightarrow 0,
$$

miközben felhasználtuk a geometriai sorozat konvergenciatulajdonságait.

**2.4.3. Tétel (Az $\{\sqrt[n]{a}\}$ sorozat).** *Bármely $a > 0$ esetén $\sqrt[n]{a} \to 1$.*

**2.4.4. Tétel (Az $\{\sqrt[n]{n}\}$ sorozat).** *$\sqrt[n]{n} \to 1$.*

**2.4.5. Példa.**

$$
\lim_{n\to\infty} \sqrt[n]{2n+1} = 1,
$$

mert minden $n \in \mathbb{N}^{+}$-ra

$$
\sqrt[n]{2}\sqrt[n]{n}
= \sqrt[n]{2n}
\le \sqrt[n]{2n+1}
\le \sqrt[n]{3n}
= \sqrt[n]{3}\sqrt[n]{n},
$$

és

$$
\lim_{n\to\infty}\left(\sqrt[n]{2}\sqrt[n]{n}\right)
=
\lim_{n\to\infty}\left(\sqrt[n]{3}\sqrt[n]{n}\right)
= 1.
$$

**2.4.6. Tétel (Az $\left\{\left(1+\frac{1}{n}\right)^n\right\}$ sorozat).** *Az $\left\{\left(1+\frac{1}{n}\right)^n\right\}$ sorozat monoton növekedő és korlátos, ezért konvergens is.*

**2.4.7. Definíció.** Az

$$
e = \lim_{n\to\infty}\left(1+\frac{1}{n}\right)^n
$$

határértéket *Euler-féle számnak* nevezzük. Közelítő értéke:

$$
e \approx 2,7.
$$

## 2.5. A bővített számegyenes

**2.5.1. Definíció.** Az

$$
\overline{\mathbb{R}} = \mathbb{R} \cup \{+\infty,-\infty\}
$$

halmazt bővített számegyenesnek nevezzük.


<!-- PDF page 17 -->

A valós számok $<$ rendezési relációját kiterjesztjük $\overline{\mathbb{R}}$-ra a következőképpen: minden $a \in \mathbb{R}$ esetén

$$
-\infty < a, \qquad \text{és} \qquad a < \infty,
$$

valamint

$$
-\infty < \infty.
$$

A $\pm\infty$ szimbólumokkal a következő műveleteket definiáljuk:

$$
-(\pm\infty) = \mp\infty;
$$

$$
\begin{aligned}
+\infty + a &= a + (+\infty) = +\infty, && \text{ha } a > -\infty,\\
-\infty + a &= a + (-\infty) = -\infty, && \text{ha } a < +\infty;
\end{aligned}
$$

$$
\begin{aligned}
(\pm\infty)\cdot a &= a\cdot(\pm\infty) = \pm\infty, && \text{ha } a > 0,\\
(\pm\infty)\cdot a &= a\cdot(\pm\infty) = \mp\infty, && \text{ha } a < 0;
\end{aligned}
$$

$$
\frac{a}{\pm\infty} = 0, \qquad \text{ha } a \in \mathbb{R}.
$$

Hangsúlyozzuk, hogy a

$$
+\infty-\infty, \qquad -\infty+\infty,
$$

$$
(\pm\infty)\cdot 0, \qquad 0\cdot(\pm\infty),
$$

$$
\frac{\pm\infty}{\pm\infty}, \qquad
\frac{\pm\infty}{\mp\infty}, \qquad
\frac{a}{0} \quad (a \in \overline{\mathbb{R}})
$$

műveleteket nem értelmezzük.

Az előző definíciókat azért vezettük be, hogy a határértékszámítás szabályait egységesen fogalmazhassuk meg.

**2.5.2. Tétel (Műveletek határértékekkel).** *Ha $a_n \to a \in \overline{\mathbb{R}}$ és $b_n \to b \in \overline{\mathbb{R}}$, akkor*

1. $a_n + b_n \to a+b$,
2. $a_n b_n \to ab$,
3. $\frac{a_n}{b_n} \to \frac{a}{b}$,

*feltéve, hogy a jobb oldalon szereplő művelet értelmezve van a bővített számegyenesen.*

## 2.6. Környezetek és pontozott környezetek

**2.6.1. Definíció.** Egy $a \in \mathbb{R}$ pont ($\varepsilon$-sugarú) *környezetén*

$$
K_{\varepsilon}(a) = \{x \in \mathbb{R} \mid |x-a| < \varepsilon\}
= (a-\varepsilon,a+\varepsilon)
$$

alakú halmazt (intervallumot) értünk, ahol $\varepsilon \in (0,\infty)$.

Az $a \in \mathbb{R}$ pont ($\varepsilon$-sugarú) *pontozott környezetén*

$$
P_{\varepsilon}(a) = K_{\varepsilon}(a) \setminus \{a\}
= (a-\varepsilon,a) \cup (a,a+\varepsilon)
$$

alakú halmazt értünk, ahol $\varepsilon \in (0,\infty)$.


<!-- PDF page 18 -->

$K_{\varepsilon}(a)$ azon $x \in \mathbb{R}$ pontok halmaza, amelyekre $|x-a| < \varepsilon$, azaz $a$-tól való távolságuk kisebb, mint $\varepsilon$. Hasonlóképpen, $P_{\varepsilon}(a)$ azon $a$-tól különböző $x \in \mathbb{R}$ pontok halmaza, amelyeknek $a$-tól való távolsága kisebb, mint $\varepsilon$.

A jobb oldali és bal oldali környezeteket hasonlóképpen definiáljuk.

**2.6.2. Definíció.** Az $a \in \mathbb{R}$ pont ($\varepsilon$-sugarú) *jobb oldali* (*bal oldali*) *környezetén*

$$
K_{\varepsilon}^{+}(a) = [a,a+\varepsilon)
\qquad
\left(K_{\varepsilon}^{-}(a) = (a-\varepsilon,a]\right)
$$

alakú intervallumot értünk, ahol $\varepsilon \in (0,\infty)$.

Az $a \in \mathbb{R}$ pont ($\varepsilon$-sugarú) *jobb oldali* (*bal oldali*) *pontozott környezetén*

$$
P_{\varepsilon}^{+}(a) = (a,a+\varepsilon)
\qquad
\left(P_{\varepsilon}^{-}(a) = (a-\varepsilon,a)\right)
$$

alakú intervallumot értünk, ahol $\varepsilon \in (0,\infty)$.

Most a $+\infty$ és $-\infty$ környezeteit és pontozott környezeteit definiáljuk.

**2.6.3. Definíció.** A $+\infty$ *környezetén és egyúttal pontozott környezetén* $(c,\infty)$ alakú intervallumot értünk, ahol $c \in \mathbb{R}$.

A $-\infty$ *környezetén és egyúttal pontozott környezetén* $(-\infty,c)$ alakú intervallumot értünk, ahol $c \in \mathbb{R}$.

## 2.7. A függvény határértéke

**2.7.1. Definíció.** A $b \in \overline{\mathbb{R}}$ számot az $f : \mathbb{R} \to \mathbb{R}$ függvény *határértékének* mondjuk az $a \in \overline{\mathbb{R}}$ pontban, ha $f$ értelmezve van $a$ valamely pontozott környezetében és bármely olyan $\{x_n\}_{n=0}^{\infty}$ sorozatra, amelyre $x_n \in D(f)$, $x_n \ne a$ minden $n \in \mathbb{N}$-re, és $x_n \to a$, a függvényértékek $\{f(x_n)\}_{n=0}^{\infty}$ sorozata $b$-hez tart. Jelölés: $f(x) \to b$, ha $x \to a$ vagy

$$
\lim_{x\to a} f(x) = b.
$$

Hasonlóan definiáljuk a jobb oldali és bal oldali határértékeket is.

**2.7.2. Definíció.** A $b \in \overline{\mathbb{R}}$ számot az $f : \mathbb{R} \to \mathbb{R}$ függvény *jobb oldali* (*bal oldali*) *határértékének* mondjuk az $a \in [-\infty,\infty)$ ($a \in (-\infty,\infty]$) pontban, ha $f$ értelmezve van $a$ valamely jobb oldali (bal oldali) pontozott környezetében és bármely olyan $\{x_n\}_{n=0}^{\infty}$ sorozatra, amelyre $x_n \in D(f)$, $x_n > a$ ($x_n < a$) minden $n \in \mathbb{N}$-re, és $x_n \to a$, a függvényértékek $\{f(x_n)\}_{n=0}^{\infty}$ sorozata $b$-hez tart. Jelölés: $f(x) \to b$, ha $x \to a+$ ($f(x) \to b$, ha $x \to a-$) vagy

$$
\lim_{x\to a+} f(x) = b
\qquad
\left(\lim_{x\to a-} f(x) = b\right).
$$

Nyilvánvaló, hogy $a = -\infty$ ($a = +\infty$) esetén a határérték és a jobb oldali (bal oldali) határérték fogalma megegyezik.

A határérték és a féloldali határértékek között a következő a kapcsolat.

**2.7.3. Tétel.** *Legyen $a \in \mathbb{R}$. A $\lim_{x\to a} f(x)$ határérték pontosan akkor létezik, ha $\lim_{x\to a+} f(x)$ és $\lim_{x\to a-} f(x)$ létezik, és*

$$
\lim_{x\to a-} f(x) = \lim_{x\to a+} f(x).
$$


<!-- PDF page 19 -->

A határértéket definiálhattuk volna a környezetek és pontozott környezetek segítségével is. Ugyanis igaz a következő állítás.

**2.7.4. Tétel.** *Az $f : \mathbb{R} \to \mathbb{R}$ függvény határértéke az $a \in \overline{\mathbb{R}}$ pontban egyenlő a $b \in \overline{\mathbb{R}}$ számmal pontosan akkor, ha $b$ bármely $K$ környezetéhez létezik az $a$ számnak olyan $P$ pontozott környezete, amelyre $f(P) \subset K$.*

Hasonlóképpen fogalmazhatjuk át a jobb oldali és bal oldali határérték definícióját is. A definícióból és a sorozatokra vontakozó eredményekből következik:

**2.7.5. Tétel (A határértékszámítás szabályai).** *Legyen $a \in \overline{\mathbb{R}}$.*

1. *Ekkor*

$$
\lim_{x\to a}(f(x)+g(x))
=
\lim_{x\to a} f(x) + \lim_{x\to a} g(x),
$$

$$
\lim_{x\to a}(f(x)\cdot g(x))
=
\lim_{x\to a} f(x) \cdot \lim_{x\to a} g(x),
$$

$$
\lim_{x\to a}\frac{f(x)}{g(x)}
=
\frac{\lim_{x\to a} f(x)}{\lim_{x\to a} g(x)},
$$

*feltéve, hogy $\lim_{x\to a} f(x)$ és $\lim_{x\to a} g(x)$ létezik, és a jobb oldalon szereplő művelet értelmezve van $\overline{\mathbb{R}}$-ban.*

2. *Ha $\lim_{x\to a} f(x) = 0$ és $g$ korlátos $a$ valamely pontozott környezetében, akkor $\lim_{x\to a}(f(x)\cdot g(x)) = 0$.*

3. *Ha $\lim_{x\to a} f(x) = 0$ és $f > 0$ $a$ valamely pontozott környezetében, akkor*

$$
\lim_{x\to a} \frac{1}{f(x)} = +\infty.
$$

4. *Ha $\lim_{x\to a} f(x) = 0$ és $f < 0$ $a$ valamely pontozott környezetében, akkor*

$$
\lim_{x\to a} \frac{1}{f(x)} = -\infty.
$$

5. *Ha $\lim_{x\to a} f(x)$, $\lim_{x\to a} g(x)$ létezik és $f \le g$ $a$ valamely pontozott környezetében, akkor*

$$
\lim_{x\to a} f(x) \le \lim_{x\to a} g(x).
$$

6. *(rendőrelv) Ha $\lim_{x\to a} f(x) = \lim_{x\to a} h(x) = b \in \overline{\mathbb{R}}$ és $f \le g \le h$ az $a$ pont valamely pontozott környezetében, akkor $\lim_{x\to a} g(x) = b$.*

Hasonló állításokat lehet megfogalmazni jobb oldali és bal oldali határértékekre is. Most következzen két további fontos állítás.

**2.7.6. Tétel (Az összetett függvény határértéke).** *Legyen $a \in \overline{\mathbb{R}}$. Ha*

$$
\lim_{x\to a} g(x) = b \in \overline{\mathbb{R}},
\qquad
\lim_{x\to b} f(x) = c \in \overline{\mathbb{R}},
$$

*és $g(x) \ne b$ minden $x$-re az $a$ pont valamely pontozott környezetéből, akkor*

$$
\lim_{x\to a} f(g(x)) = c.
$$


<!-- PDF page 20 -->

**2.7.7. Tétel (Monoton függvény határértéke).** *Legyen $-\infty \le a < b \le +\infty$. Ha $f$ monoton $(a,b)$-ben, akkor $\lim_{x\to a+} f(x)$ és $\lim_{x\to b-} f(x)$ létezik. Ha $f$ monoton növekedő $(a,b)$-ben, akkor*

$$
\lim_{x\to a+} f(x) = \inf f((a,b)),
\qquad
\lim_{x\to b-} f(x) = \sup f((a,b)),
$$

*ha pedig $f$ monoton csökkenő $(a,b)$-ben, akkor*

$$
\lim_{x\to a+} f(x) = \sup f((a,b)),
\qquad
\lim_{x\to b-} f(x) = \inf f((a,b)),
$$

*ahol $f((a,b)) = \{f(x) \mid x \in (a,b)\}$.*

## 2.8. Folytonosság

**2.8.1. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvényt *folytonosnak* mondjuk az $a \in D(f)$ helyen, ha

$$
\lim_{x\to a} f(x) = f(a).
$$

Az $f : \mathbb{R} \to \mathbb{R}$ függvény *jobbról* (*balról*) *folytonos* az $a \in D(f)$ helyen, ha

$$
\lim_{x\to a+} f(x) = f(a)
\qquad
\left(\lim_{x\to a-} f(x) = f(a)\right).
$$

Nyilvánvaló, hogy az $f : \mathbb{R} \to \mathbb{R}$ függvény pontosan akkor folytonos az $a$ helyen, ha itt jobbról és balról is folytonos.

Ha figyelembe vesszük, hogy a határérték definíciója átfogalmazható környezetek segítségével, akkor a folytonosság következő ekvivalens megfogalmazását kapjuk.

**2.8.2. Tétel.** *Az $f : \mathbb{R} \to \mathbb{R}$ függvény pontosan akkor folytonos az $a \in D(f)$ helyen, ha $f$ értelmezve van $a$ valamely környezetében és bármely $\varepsilon > 0$ esetén létezik $\delta > 0$ úgy, hogy minden $x \in D(f)$, $|x-a| < \delta$ esetén $|f(x)-f(a)| < \varepsilon$.*

Ha $f$ nem folytonos az $a$ helyen, azt is mondjuk, hogy $f$-nek itt *szakadása* van. A definícióból és a határértékszámítás szabályaiból következnek az alábbi tulajdonságok.

**2.8.3. Tétel (Műveletek folytonos függvényekkel).** *Ha $f$ és $g$ folytonosak az $a$ helyen, akkor*

1. *ugyanilyen $f+g$ is,*
2. *ugyanilyen $fg$ is,*
3. *$g(a) \ne 0$ további feltétel mellett ugyanilyen $\frac{f}{g}$ is.*

*Ha $g$ folytonos az $a$ helyen és $f$ folytonos a $g(a)$ helyen, akkor $f \circ g$ folytonos az $a$ helyen.*

Most egy függvény intervallumon való folytonosságát definiáljuk.

**2.8.4. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum $a$ és $b$ végpontokkal, ahol

$$
-\infty \le a < b \le +\infty.
$$

Az $f$ függvényt *folytonosnak* nevezzük az $I$ intervallumon, ha $f$ folytonos minden $c \in (a,b)$ pontban, továbbá $a \in I$ esetén $a$-ban jobbról folytonos, $b \in I$ esetén pedig $b$-ben balról folytonos.


<!-- PDF page 21 -->

**2.8.5. Tétel (Műveletek intervallumon folytonos függvényekkel).** *Ha $f$ és $g$ folytonosak az $I \subset \mathbb{R}$ intervallumon, akkor*

1. *ugyanilyen $f+g$ is,*
2. *ugyanilyen $fg$ is,*
3. *ha $g$ sehol sem tűnik el $I$-ben, akkor ugyanilyen $\frac{f}{g}$ is.*

Most a korlátos, zárt intervallumon folytonos függvények fontosabb tulajdonságait ismertetjük.

**2.8.6. Tétel (Weierstrass tétele).** *Ha az $f$ függvény folytonos az $[a,b] \subset \mathbb{R}$ intervallumon, akkor az $[a,b]$-hez tartozó függvényértékek között mindig van legnagyobb és legkisebb is.*

A feltételek fontosságát illusztrálja a következő két példa.

**2.8.7. Példa.** Az

$$
f(x) = \frac{1}{x}, \qquad x \in (0,1]
$$

függvény folytonos a $(0,1]$ intervallumon. Ugyanakkor

$$
\lim_{x\to 0+} f(x) = \infty,
$$

ezért a $(0,1]$ intervallumhoz tartozó függvényértékek között nincs legnagyobb. Tehát Weierstrass tételében lényeges, hogy zárt intervallumról van szó.

**2.8.8. Példa.** Legyen

$$
f(x) =
\begin{cases}
\frac{1}{x}, & \text{ha } x \in (0,1],\\
0, & \text{ha } x = 0
\end{cases}
$$

Annak ellenére, hogy $f$ csak 0-ban nem folytonos (jobbról), a függvényértékek között nincs legnagyobb.

**2.8.9. Tétel (Bolzano-féle közbülsőérték-tétel).** *Ha $f$ folytonos az $[a,b] \subset \mathbb{R}$ intervallumon, akkor bármely $f(a)$ és $f(b)$ közé eső $d$ szám esetén van olyan $c \in [a,b]$, amelyre $f(c) = d$.*

Bolzano tételének két fontos következménye:

**2.8.10. Tétel.** *Ha $f$ folytonos az $[a,b] \subset \mathbb{R}$ intervallumon és $f(a)f(b) < 0$, akkor létezik $c \in (a,b)$ úgy, hogy $f(c) = 0$.*

**2.8.11. Tétel.** *Ha az $f$ függvény folytonos és nem állandó az $I \subset \mathbb{R}$ intervallumon, akkor $f(I)$ intervallum.*

A következő két állítás az összetett és inverz függvény folytonosságáról szól.

**2.8.12. Tétel (Az összetett függvény folytonossága).** *Ha $g$ folytonos és nem állandó az $I \subset \mathbb{R}$ intervallumon és $f$ folytonos a $J = g(I)$ intervallumon, akkor $f \circ g$ folytonos az $I$ intervallumon.*

**2.8.13. Tétel (Az inverz függvény folytonossága).** *Ha $f$ szigorúan monoton és folytonos az $I \subset \mathbb{R}$ intervallumon, akkor $f$ invertálható az $I$ intervallumon és $f_{-1}$ folytonos a $J = f(I)$ intervallumon.*


<!-- PDF page 22 -->

## 2.9. Az elemi alapfüggvények

Az alábbiakban felsorolunk néhány elemi alapfüggvényt és azok fontosabb tulajdonságait.

**Identikus függvény** ($\operatorname{id}$). Az

$$
\operatorname{id}(x) = x, \qquad x \in \mathbb{R},
$$

képlettel definiált *identikus függvény* folytonos és szigorúan monoton növekedő a $(-\infty,\infty)$-n.

**Pozitív kitevőjű hatványfüggvények** ($\operatorname{id}^n$, $n \in \mathbb{N}^{+}$). Bármely $n \in \mathbb{N}^{+}$ esetén az

$$
\operatorname{id}^n(x) = x^n, \qquad x \in \mathbb{R},
$$

képlettel definiált *$n$-edik hatványfüggvény* folytonos a $(-\infty,\infty)$-n; páratlan $n$ esetén a $(-\infty,\infty)$-n szigorúan monoton növekedő, ha pedig $n$ páros, akkor a $(-\infty,0]$-n szigorúan monoton csökkenő és a $[0,\infty)$-n szigorúan monoton növekedő. Ha $n$ páros (páratlan), akkor az $\operatorname{id}^n$ függvény is páros (páratlan).

**Negatív kitevőjű hatványfüggvények** ($\operatorname{id}^{-n}$, $n \in \mathbb{N}^{+}$). Bármely $n \in \mathbb{N}^{+}$ esetén az

$$
\operatorname{id}^{-n}(x) = x^{-n} = \frac{1}{x^n}, \qquad x \in \mathbb{R}\setminus\{0\}
$$

képlettel definiált $\operatorname{id}^{-n} : \mathbb{R}\setminus\{0\} \to \mathbb{R}$ hatványfüggvény folytonos a $(-\infty,0)$ és $(0,\infty)$ intervallumon; a $(0,\infty)$-n szigorúan monoton csökkenő, továbbá páros vagy páratlan attól függően, hogy $n$ páros vagy páratlan.

**Gyökfüggvények** ($\operatorname{id}^{1/n}$, $n \in \mathbb{N}^{+}$). Bármely $n \in \mathbb{N}^{+}$ esetén az $n$-edik gyökfüggvényt, jele $\operatorname{id}^{1/n}$, az

$$
\operatorname{id}^{1/n} =
\begin{cases}
(\operatorname{id}^{n})_{-1}, & \text{ha } n \text{ páratlan},\\
\left(\operatorname{id}^{n}|_{[0,\infty)}\right)_{-1}, & \text{ha } n \text{ páros}
\end{cases}
$$

képlettel definiáljuk. Jelölés:

$$
\operatorname{id}^{1/n}(x) = \sqrt[n]{x}, \qquad
x \in
\begin{cases}
(-\infty,\infty), & \text{ha } n \text{ páratlan},\\
[0,\infty), & \text{ha } n \text{ páros}.
\end{cases}
$$

Az $\operatorname{id}^{1/n}$ függvény folytonos és szigorúan monoton növekedő a $[0,\infty)$-n, illetve a $(-\infty,\infty)$-n attól függően, hogy $n$ páros vagy páratlan.

**Polinomok.** Legyen $n \in \mathbb{N}$ és $a_0,a_1,\ldots,a_n \in \mathbb{R}$ adottak. A

$$
p(x) = a_0x^n + a_1x^{n-1} + \cdots + a_n, \qquad x \in \mathbb{R},
$$

képlettel definiált $p : \mathbb{R} \to \mathbb{R}$ függvényt $n$-edfokú polinomnak nevezzük; az $a_0$ szám a $p$ polinom *főegyütthatója*. A $p$ polinom folytonos a $(-\infty,\infty)$-n.


<!-- PDF page 23 -->

**Természetes logaritmusfüggvény** ($\ln$). Meg lehet mutatni, hogy létezik egy valós függvény, jele $\ln$, a következő tulajdonságokkal:

$$
D(\ln) = (0,\infty),
$$

$$
\ln(xy) = \ln x + \ln y, \qquad \text{ha } x,y \in (0,\infty),
$$

$$
\lim_{x\to 0} \frac{\ln(1+x)}{x} = 1.
$$

Ezek a tulajdonságok az $\ln$ függvényt egyértelműen meghatározzák. Az $\ln$ függvényt *természetes logaritmusfüggvénynek* nevezzük. Az $\ln$ függvény szigorúan monoton növekedő és folytonos a $(0,\infty)$-n, továbbá

$$
\ln 1 = 0, \qquad \ln e = 1,
$$

$$
\ln x^n = n \ln x, \qquad \text{ha } x \in (0,\infty) \text{ és } n \in \mathbb{N},
$$

$$
\lim_{x\to 0+} \ln x = -\infty,
\qquad
\lim_{x\to\infty} \ln x = \infty.
$$

**Exponenciális függvény** ($\exp$). Az *exponenciális függvényt*, jele $\exp$, az

$$
\exp = (\ln)_{-1}
$$

képlettel definiáljuk. Az $\exp : (-\infty,\infty) \to (0,\infty)$ függvény pozitív, szigorúan monoton növekedő és folytonos a $(-\infty,\infty)$-n. További fontosabb tulajdonságai:

$$
\exp 0 = 1, \qquad \exp 1 = e,
$$

$$
\exp(x+y) = \exp x \exp y, \qquad \text{ha } x,y \in \mathbb{R},
$$

$$
\lim_{x\to -\infty} \exp x = 0,
\qquad
\lim_{x\to \infty} \exp x = \infty,
$$

$$
\lim_{n\to\infty}\left(1+\frac{x}{n}\right)^n = \exp x,
$$

$$
\lim_{x\to 0} \frac{\exp x - 1}{x} = 1.
$$

Az $\exp$ és $\ln$ függvények segítségével definiálhatjuk egy pozitív szám tetszőleges hatványát.

**2.9.1. Definíció.** Bármely $a \in (0,\infty)$ és $b \in \mathbb{R}$ esetén

$$
a^b = \exp(b\ln a).
$$

Mivel $\ln e = 1$, ezért a definíció szerint

$$
e^x = \exp x, \qquad x \in \mathbb{R}.
$$

**Általános alapú exponenciális függvény** ($\exp_a$, $a > 0$, $a \ne 1$). Bármely $a \in (0,1) \cup (1,\infty)$ esetén az

$$
\exp_a x = a^x = \exp(x\ln a), \qquad x \in \mathbb{R},
$$


<!-- PDF page 24 -->

képlettel definiált $\exp_a : (-\infty,\infty) \to (0,\infty)$ függvényt $a$ alapú exponenciális függvénynek nevezzük. Az $\exp_a$ függvény pozitív, folytonos, $a \in (0,1)$ esetén szigorúan monoton csökkenő, $a \in (1,\infty)$ esetén pedig szigorúan monoton növekedő. További fontosabb tulajdonságai:

$$
a^0 = 1,
$$

$$
a^{x+y} = a^x a^y, \qquad \text{ha } x,y \in \mathbb{R},
$$

$$
(a^x)^y = a^{xy}, \qquad \text{ha } x,y \in \mathbb{R},
$$

$$
\text{ha } a \in (0,1), \quad
\text{akkor } \lim_{x\to -\infty} a^x = \infty
\text{ és }
\lim_{x\to\infty} a^x = 0.
$$

$$
\text{ha } a \in (1,\infty), \quad
\text{akkor } \lim_{x\to -\infty} a^x = 0
\text{ és }
\lim_{x\to\infty} a^x = \infty.
$$

**Általános alapú logaritmusfüggvény** ($\log_a$, $a > 0$, $a \ne 1$). Bármely $a \in (0,1)\cup(1,\infty)$ esetén a $\log_a$-val jelölt $a$ alapú logaritmusfüggvény definíciója:

$$
\log_a = (\exp_a)_{-1}.
$$

A $\log_a : (0,\infty) \to \mathbb{R}$ függvény folytonos, $a \in (0,1)$ esetén szigorúan monoton csökkenő, $a \in (1,\infty)$ esetén pedig szigorúan monoton növekedő. Fontosabb tulajdonságai:

$$
\log_a 1 = 0,
$$

$$
\log_a(a^x) = x, \qquad \text{ha } x \in \mathbb{R},
$$

$$
a^{\log_a x} = x, \qquad \text{ha } x \in (0,\infty),
$$

$$
\log_a(xy) = \log_a x + \log_a y, \qquad \text{ha } x,y \in (0,\infty),
$$

$$
\log_a(x^y) = y\log_a x, \qquad \text{ha } x \in (0,\infty) \text{ és } y \in \mathbb{R};
$$

$$
\log_a x = \frac{\ln x}{\ln a}, \qquad \text{ha } x \in (0,\infty),
$$

$$
\text{ha } a \in (0,1), \quad
\text{akkor } \lim_{x\to 0+} \log_a x = \infty
\text{ és }
\lim_{x\to\infty} \log_a x = -\infty,
$$

$$
\text{ha } a \in (1,\infty), \quad
\text{akkor } \lim_{x\to 0+} \log_a x = -\infty
\text{ és }
\lim_{x\to\infty} \log_a x = \infty.
$$

**Általános kitevőjű hatványfüggvény** ($\operatorname{id}^b$, $b \in \mathbb{R}$). Bármely $b \in \mathbb{R}$ esetén az

$$
\operatorname{id}^b(x) = x^b = \exp(b\ln x), \qquad x \in (0,\infty),
$$

képlettel definiált $\operatorname{id}^b : (0,\infty) \to \mathbb{R}$ függvény folytonos a $(0,\infty)$-n. Ha $b \in (0,\infty)$, akkor szigorúan monoton növekedő, ha pedig $b \in (-\infty,0)$, akkor szigorúan monoton csökkenő. További tulajdonságok:

$$
x^{-b} = \frac{1}{x^b}, \qquad \text{ha } x \in (0,\infty) \text{ és } b \in \mathbb{R},
$$

$$
x^{b+c} = x^b x^c, \qquad \text{ha } x \in (0,\infty) \text{ és } b,c \in \mathbb{R},
$$

$$
(x^b)^c = x^{bc}, \qquad \text{ha } x \in (0,\infty) \text{ és } b,c \in \mathbb{R},
$$


<!-- PDF page 25 -->

$$
\text{ha } b \in (0,\infty), \quad
\text{akkor } \lim_{x\to 0+} x^b = 0
\text{ és }
\lim_{x\to\infty} x^b = \infty.
$$

$$
\text{ha } b \in (-\infty,0), \quad
\text{akkor } \lim_{x\to 0+} x^b = \infty
\text{ és }
\lim_{x\to\infty} x^b = 0.
$$

A harmadik tulajdonság szerint ha $x \in (0,\infty)$ és $n \in \mathbb{N}^{+}$, akkor

$$
\left(x^{1/n}\right)^n = x.
$$

Tehát

$$
x^{1/n} = \sqrt[n]{x}, \qquad \text{ha } x \in (0,\infty) \text{ és } n \in \mathbb{N}^{+}.
$$

**Trigonometrikus függvények** ($\sin$, $\cos$, $\operatorname{tg}$, $\operatorname{ctg}$). Az $x,y$-sík 1 sugarú körvonalának minden $P$ pontja azonosítható azzal a radiánban mért $x \in [0,2\pi)$ szöggel, amelyet az $OP$ szakasz ($O = (0,0)$) bezár az $x$-tengely pozitív irányával. A $[0,2\pi)$-n úgy definiáljuk a $\sin$ és $\cos$ (*szinusz* és *koszinusz*) függvényeket, hogy az $x \in [0,2\pi)$ szöggel azonosított $P$ pont koordinátái: $P = (\cos x,\sin x)$. Ezután mindkét függvényt kiterjesztjük a $(-\infty,\infty)$-re a

$$
\sin(x+2k\pi) = \sin x,
\qquad
\cos(x+2k\pi) = \cos x,
\qquad
x \in [0,2\pi),\ k \in \mathbb{Z},
$$

képlettel. Ekkor $D(\sin) = D(\cos) = (-\infty,\infty)$, $R(\sin) = R(\cos) = [-1,1]$. Mindkét függvény periodikus $2\pi$ periódussal és folytonos a $(-\infty,\infty)$-n. A $\sin$ függvény szigorúan monoton növekedő a $[-\pi/2,\pi/2]$-n és szigorúan monoton csökkenő a $[\pi/2,3\pi/2]$-n. A $\cos$ függvény szigorúan monoton csökkenő a $[0,\pi]$-n és szigorúan monoton növekedő a $[\pi,2\pi]$-n. További fontosabb tulajdonságok:

$$
\sin 0 = 0,\quad
\sin\frac{\pi}{6} = \frac{1}{2},\quad
\sin\frac{\pi}{4} = \frac{\sqrt{2}}{2},\quad
\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2},\quad
\sin\frac{\pi}{2} = 1,\quad
\sin\pi = 0,
$$

$$
\cos 0 = 1,\quad
\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2},\quad
\cos\frac{\pi}{4} = \frac{\sqrt{2}}{2},\quad
\cos\frac{\pi}{3} = \frac{1}{2},\quad
\cos\frac{\pi}{2} = 0,\quad
\cos\pi = -1,
$$

$$
\sin(-x) = -\sin x,\qquad \cos(-x)=\cos x,\qquad x \in \mathbb{R},
$$

$$
\sin^2 x + \cos^2 x = 1,\qquad x \in \mathbb{R},
$$

$$
\sin(x+y) = \sin x\cos y + \cos x\sin y,\qquad x,y \in \mathbb{R},
$$

$$
\cos(x+y) = \cos x\cos y - \sin x\sin y,\qquad x,y \in \mathbb{R},
$$

$$
\sin(2x) = 2\sin x\cos x,\qquad
\cos(2x) = \cos^2 x - \sin^2 x,\qquad x \in \mathbb{R},
$$

$$
\sin^2 x = \frac{1-\cos(2x)}{2},\qquad
\cos^2 x = \frac{1+\cos(2x)}{2},\qquad x \in \mathbb{R},
$$

$$
\sin x - \sin y =
2\sin\frac{x-y}{2}\cos\frac{x+y}{2},
\qquad x,y \in \mathbb{R},
$$

$$
\cos x - \cos y =
-2\sin\frac{x+y}{2}\sin\frac{x-y}{2},
\qquad x,y \in \mathbb{R},
$$

$$
\lim_{x\to 0} \frac{\sin x}{x} = 1.
$$

A $\operatorname{tg}$ (*tangens*) és $\operatorname{ctg}$ (*kotangens*) függvényeket a

$$
\operatorname{tg} x = \frac{\sin x}{\cos x},
\qquad
\text{ha } x \in \mathbb{R} \setminus \{\pi/2 + k\pi \mid k \in \mathbb{Z}\},
$$


<!-- PDF page 26 -->

illetve

$$
\operatorname{ctg} x = \frac{\cos x}{\sin x},
\qquad
\text{ha } x \in \mathbb{R} \setminus \{k\pi \mid k \in \mathbb{Z}\},
$$

képletekkel értelmezzük. Tehát

$$
D(\operatorname{tg}) =
\mathbb{R}\setminus\{\pi/2+k\pi \mid k \in \mathbb{Z}\},
\qquad
D(\operatorname{ctg}) =
\mathbb{R}\setminus\{k\pi \mid k \in \mathbb{Z}\}.
$$

Megjegyezzük, hogy az angol nyelvű irodalomban a tan és cot jelölés használatos tg és ctg helyett. Mindkét függvény periodikus $\pi$ periódussal, továbbá mindkét függvény folytonos az értelmezési tartományának részintervallumain. A tg függvény szigorúan monoton növekedő a $(-\pi/2,\pi/2)$ intervallumon, $\operatorname{tg} 0 = 0$, és

$$
\lim_{x\to -\frac{\pi}{2}+} \operatorname{tg} x = -\infty,
\qquad
\lim_{x\to \frac{\pi}{2}-} \operatorname{tg} x = +\infty.
$$

A ctg függvény szigorúan monoton csökkenő a $(0,\pi)$-n, $\operatorname{ctg}\frac{\pi}{2} = 0$, és

$$
\lim_{x\to 0+} \operatorname{ctg} x = +\infty,
\qquad
\lim_{x\to \pi-} \operatorname{ctg} x = -\infty.
$$

**Arkuszfüggvények** (arcsin, arccos, arctg, arcctg). Az arkusz szó latin eredetű, jelentése: ív. Az *arkuszszinusz-, arkuszkoszinusz-, arkusztangens-, és arkuszkotangens-függvényeket* a következőképpen definiáljuk:

$$
\begin{aligned}
\arcsin &= \left(\sin|_{[-\pi/2,\pi/2]}\right)_{-1},\\
\arccos &= \left(\cos|_{[0,\pi]}\right)_{-1},\\
\operatorname{arctg} &= \left(\operatorname{tg}|_{(-\pi/2,\pi/2)}\right)_{-1},\\
\operatorname{arcctg} &= \left(\operatorname{ctg}|_{(0,\pi)}\right)_{-1}.
\end{aligned}
$$

Az $\arcsin : [-1,1] \to [-\pi/2,\pi/2]$ páratlan, folytonos és szigorúan monoton növekedő a $[-1,1]$-n, továbbá

$$
\arcsin(-1) = -\frac{\pi}{2},
\qquad
\arcsin 0 = 0,
\qquad
\arcsin 1 = \frac{\pi}{2}.
$$

Az $\arccos : [-1,1] \to [0,\pi]$ folytonos és szigorúan monoton csökkenő a $[-1,1]$-n, továbbá

$$
\arccos(-1) = \pi,
\qquad
\arccos 0 = \frac{\pi}{2},
\qquad
\arccos 1 = 0.
$$

Az $\operatorname{arctg} : (-\infty,\infty) \to (-\pi/2,\pi/2)$ páratlan, folytonos és szigorúan monoton növekedő a $(-\infty,\infty)$-n, $\operatorname{arctg} 0 = 0$, valamint

$$
\lim_{x\to -\infty} \operatorname{arctg} x = -\frac{\pi}{2},
\qquad
\lim_{x\to \infty} \operatorname{arctg} x = \frac{\pi}{2}.
$$

Az $\operatorname{arcctg} : (-\infty,\infty) \to (0,\pi)$ folytonos és szigorúan monoton csökkenő a $(-\infty,\infty)$ intervallumon, $\operatorname{arcctg} 0 = \pi/2$, továbbá

$$
\lim_{x\to -\infty} \operatorname{arcctg} x = \pi,
\qquad
\lim_{x\to \infty} \operatorname{arcctg} x = 0.
$$


<!-- PDF page 27 -->

Az arkuszfüggvények grafikonjai:

![2.1. ábra: $y=\arcsin x$ grafikonja](pages_300/page-27.png)

![2.2. ábra: $y=\arccos x$ grafikonja](pages_300/page-27.png)


<!-- PDF page 28 -->

![2.3. ábra: $y=\operatorname{arctg} x$ grafikonja](pages_300/page-28.png)

![2.4. ábra: $y=\operatorname{arcctg} x$ grafikonja](pages_300/page-28.png)


<!-- PDF page 29 -->

# 3. fejezet

# Egyváltozós valós függvények differenciálszámítása

## 3.1. A differenciálhatóság fogalma

**3.1.1. Definíció.** Legyen $f : \mathbb{R} \to \mathbb{R}$ értelmezve az $a \in D(f)$ pont valamely környezetében, és legyen $x \in D(f)\setminus\{a\}$. Az

$$
\frac{f(x)-f(a)}{x-a}
$$

hányadost az $f$ függvény $a$ és $x$ helyekhez tartozó *különbségi hányadosának* nevezzük.

Az $a$ és $x$ helyekhez tartozó különbségi hányados az $f$ grafikonjának $(a,f(a))$ és $(x,f(x))$ pontjait összekötő egyenes (*szelő*) meredeksége (az ábrán látható $\alpha$ szög tangense).

![3.1. ábra: különbségi hányados és szelő](pages_300/page-29.png)

**3.1.2. Definíció.** Ha a

$$
\lim_{x\to a} \frac{f(x)-f(a)}{x-a}
$$

határérték létezik és véges, akkor az $f$ függvényt *differenciálhatónak* mondjuk az $a$ helyen, a határértéket pedig az $f$ függvény $a$ pontbeli *differenciálhányadosának* nevezzük.


<!-- PDF page 30 -->

**3.1.3. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *deriváltfüggvénye*, röviden *deriváltja*, jele $f'$ vagy $\frac{df}{dx}$, az a függvény, amelynek értelmezési tartománya $D(f)$ azon $x$ pontjaiból áll, amelyekben $f$ differenciálható, és minden ilyen $x$-hez az $f$ függvény $x$ pontbeli differenciálhányadosát rendeli hozzá.

Tehát

$$
D(f') = \{a \in D(f) \mid f \text{ differenciálható az } a \text{ helyen}\}
$$

és

$$
f'(a) = \lim_{x\to a} \frac{f(x)-f(a)}{x-a},
\qquad \text{ha } a \in D(f').
$$

**3.1.4. Definíció.** Ha $f : \mathbb{R} \to \mathbb{R}$ differenciálható az $a$ helyen, akkor az

$$
y = f'(a)(x-a) + f(a)
$$

egyenest az $f$ függvény $a$ helyhez tartozó *érintőjének* nevezzük.

Tehát az $f'(a)$ differenciálhányados az $f$ függvény $a$ helyhez tartozó érintőjének a meredeksége (az ábrán látható $\alpha$ szög tangense).

![3.2. ábra: érintő egyenes](pages_300/page-30.png)

Az $f : \mathbb{R} \to \mathbb{R}$ függvény $a$ pontbeli *jobb oldali* (*bal oldali*) *differenciálhányadosának* (*deriváltjának*) definícióját úgy kapjuk, hogy az $a$ pontbeli differenciálhányados definíciójában szereplő határértéket jobb oldali (bal oldali) határértékkel helyettesítjük. Jele: $f'_+(a)$ ($f'_-(a)$). Tehát

$$
f'_+(a) = \lim_{x\to a+} \frac{f(x)-f(a)}{x-a}
$$

és

$$
f'_-(a) = \lim_{x\to a-} \frac{f(x)-f(a)}{x-a},
$$

feltéve, hogy a jobb oldali, illetve bal oldali határérték létezik és véges. A következő összefüggés nyilvánvaló.


<!-- PDF page 31 -->

**3.1.5. Tétel.** $f'(a)$ éppen akkor létezik, ha $f'_+(a)$ és $f'_-(a)$ is létezik, és

$$
f'_+(a) = f'_-(a).
$$

**3.1.6. Példa.** Az $f(x) = |x|$, $x \in \mathbb{R}$, függvény nem differenciálható 0-ban, mert

$$
f'_+(0) = \lim_{x\to 0+}\frac{|x|-0}{x-0}
= \lim_{x\to 0+}\frac{x}{x} = 1,
$$

és

$$
f'_-(0) = \lim_{x\to 0-}\frac{|x|-0}{x-0}
= \lim_{x\to 0-}\frac{-x}{x} = -1.
$$

A következő tétel a differenciálhatóság és folytonosság közötti kapcsolatról szól.

**3.1.7. Tétel.** *Ha $f : \mathbb{R} \to \mathbb{R}$ differenciálható az $a$ helyen, akkor itt folytonos is.*

A tétel megfordítása nem igaz, mert például az $f(x) = |x|$, $x \in \mathbb{R}$, függvény folytonos 0-ban, de itt nem differenciálható.

## 3.2. Differenciálási szabályok

A következő tételek a fontosabb differenciálási szabályokat írják le.

**3.2.1. Tétel (Differenciálási szabályok).** *Ha $f : \mathbb{R} \to \mathbb{R}$ és $g : \mathbb{R} \to \mathbb{R}$ differenciálható az $a$ helyen, akkor ugyanilyen az $f \pm g$, $f \cdot g$, és a $g(a) \ne 0$ feltétel mellett az $\frac{f}{g}$ függvény is, mégpedig*

$$
(f \pm g)'(a) = f'(a) \pm g'(a),
$$

$$
(f\cdot g)'(a) = f'(a)g(a) + f(a)g'(a),
$$

$$
\left(\frac{f}{g}\right)'(a)
=
\frac{f'(a)g(a)-f(a)g'(a)}{g^2(a)}.
$$

**3.2.2. Tétel (Az összetett függvény differenciálása).** *Ha $g : \mathbb{R} \to \mathbb{R}$ differenciálható az $a$ helyen és $f : \mathbb{R} \to \mathbb{R}$ differenciálható a $g(a)$ helyen, akkor $f \circ g$ is differenciálható az $a$ helyen, mégpedig*

$$
(f \circ g)'(a) = f'(g(a)) \cdot g'(a).
$$

**3.2.3. Tétel (Az inverz függvény differenciálása).** *Ha $f : \mathbb{R} \to \mathbb{R}$ folytonos és szigorúan monoton az $a$ pont valamely környezetében, differenciálható az $a$ helyen és $f'(a) \ne 0$, akkor $f_{-1}$ is differenciálható a $b = f(a)$ helyen, mégpedig*

$$
(f_{-1})'(b) = \frac{1}{f'(a)}
=
\frac{1}{f'(f_{-1}(b))}.
$$


<!-- PDF page 32 -->

## 3.3. Az elemi alapfüggvények deriváltjai

Az elemi alapfüggvények deriváltfüggvényeit táblázatban foglaltuk össze.

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ | $0$ |
| $x^b$ | $bx^{b-1}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x\ln a$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\log_a x$ | $\frac{1}{x\ln a}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\operatorname{tg}x$ | $\frac{1}{\cos^2 x}$ |
| $\operatorname{ctg}x$ | $-\frac{1}{\sin^2 x}$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\operatorname{arctg}x$ | $\frac{1}{1+x^2}$ |
| $\operatorname{arcctg}x$ | $-\frac{1}{1+x^2}$ |

$(c \in \mathbb{R},\ b \in \mathbb{R},\ a \in (0,\infty)\setminus\{1\})$

A táblázat úgy értendő, hogy $f$ differenciálható minden olyan $x$ helyen, ahol $f$ értelmezve van és az $f'(x)$ kifejezés értelmes.

Előfordul, hogy egy függvény az értelmezési tartományának feltüntetése nélkül, csak a képletével van megadva. Ilyenkor a függvény értelmezési tartományán minden olyan $x \in \mathbb{R}$ számnak a halmazát értjük, amelyekre a kifejezés értelmes. Kivételt csak a

$$
h(x) = f(x)^{g(x)}
$$

alakú függvények képeznek, amelyek értelmezési tartományán a

$$
D(h) = \{x \in D(f) \cap D(g) \mid f(x) > 0\}
$$


<!-- PDF page 33 -->

halmazt értjük. Az ilyen esetekben a deriváltfüggvény jelölésére $f'(x)$ helyett a kényelmesebb $(f(x))'$ szimbólum használatos. Eszerint az $\ln(x-2)$ „függvény” értelmezési tartománya a $(2,\infty)$ intervallum, és itt

$$
(\ln(x-2))' = \frac{1}{x-2}.
$$

**3.3.1. Példa.** Az $x^x$ függvény értelmezési tartománya a $(0,\infty)$ intervallum, és itt

$$
(x^x)' = (e^{x\ln x})'
= e^{x\ln x}(x\ln x)'
= e^{x\ln x}\left(1\ln x + x\frac{1}{x}\right)
= x^x(\ln x+1).
$$

## 3.4. Magasabb rendű deriváltak

**3.4.1. Definíció.** Az $f : \mathbb{R} \to \mathbb{R}$ függvény *első deriváltján* az $f'$ deriváltfüggvényt értjük. Bármely $n \in \mathbb{N}^{+}$ esetén $f$ $(n+1)$-edik deriváltjának az $n$-edik derivált deriváltfüggvényét mondjuk. Az $f$ $n$-edik deriváltját $f^{(n)}$-nel jelöljük. Ha $a \in D(f^{(n)})$, akkor $f$-et $n$-szer differenciálhatónak mondjuk az $a$ helyen.

Magát $f$-et $f$ nulladik deriváltjának is szokták nevezni, és $f^{(0)}$-val jelölik. Az $n=2,3$ esetben inkább az

$$
f^{(2)} = f'', \qquad f^{(3)} = f'''
$$

jelölés használatos. Találkozhatunk az $n$-edik derivált

$$
f^{(n)} = \frac{d^n f}{dx^n}
$$

tört alakú jelölésével is.

## 3.5. Intervallumon való differenciálhatóság

**3.5.1. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum $a$ és $b$ végpontokkal, ahol

$$
-\infty \le a < b \le \infty.
$$

Azt mondjuk, hogy az $f : I \to \mathbb{R}$ függvény *differenciálható az $I$ intervallumon*, ha $f$ differenciálható minden $x \in (a,b)$ helyen, továbbá ha $a \in I$, akkor $f$ $a$-ban jobbról differenciálható, ha pedig $b \in I$, akkor $f$ $b$-ben balról differenciálható. Ekkor az

$$
f'_I(x) =
\begin{cases}
f'(x), & \text{ha } x \in (a,b),\\
f'_+(a), & \text{ha } x = a \text{ és } a \in I,\\
f'_-(b), & \text{ha } x = b \text{ és } b \in I
\end{cases}
$$

képlettel definiált $f'_I : I \to \mathbb{R}$ függvényt az $f$ függvény $I$ intervallumon vett deriváltfüggvényének nevezzük.

A továbbiakban szükségünk lesz a következő fogalomra is.

**3.5.2. Definíció.** Az $f$ függvényt *folytonosan differenciálhatónak* nevezzük az $I \subset \mathbb{R}$ intervallumon, ha $f$ differenciálható $I$-n és az $f'_I$ deriváltfüggvény folytonos $I$-n.


<!-- PDF page 34 -->

## 3.6. Középértéktételek

Ismertetjük a differenciálszámítás három fontos középértéktételét.

**3.6.1. Tétel (Rolle tétele).** *Legyen $[a,b] \subset \mathbb{R}$. Ha $f : \mathbb{R} \to \mathbb{R}$ folytonos $[a,b]$-n, differenciálható $(a,b)$-n és $f(a)=f(b)$, akkor létezik $c \in (a,b)$ úgy, hogy*

$$
f'(c)=0.
$$

A tétel feltételei mellett az $f$ függvénynek van olyan érintője, amelyik párhuzamos az $x$-tengellyel.

**3.6.2. Tétel (Lagrange tétele).** *Legyen $[a,b] \subset \mathbb{R}$. Ha $f : \mathbb{R} \to \mathbb{R}$ folytonos $[a,b]$-n és differenciálható $(a,b)$-n, akkor létezik $c \in (a,b)$ úgy, hogy*

$$
f'(c)=\frac{f(b)-f(a)}{b-a}.
$$

A tétel feltételei mellett az $f$ függvénynek van olyan érintője, amelyik párhuzamos az $a$ és $b$ helyekhez tartozó szelővel.

Az $f(b)=f(a)$ esetben Lagrange tétele Rolle tételébe megy át.

**3.6.3. Tétel (Cauchy tétele).** *Legyen $[a,b] \subset \mathbb{R}$. Ha $f : \mathbb{R} \to \mathbb{R}$ és $g : \mathbb{R} \to \mathbb{R}$ folytonosak $[a,b]$-n, differenciálhatók $(a,b)$-n és $g'$ sehol sem tűnik el $(a,b)$-n, akkor létezik $c \in (a,b)$ úgy, hogy*

$$
\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.
$$

A $g(x)=x$ esetben Cauchy tétele Lagrange tételébe megy át.

## 3.7. Monotonitási kritériumok

**3.7.1. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum $a$ és $b$ végpontokkal, ahol

$$
-\infty \le a < b \le \infty.
$$

Az $I$ intervallum belsején az $(a,b)$ intervallumot értjük. Jele: $\operatorname{int} I$.

A következő fontos tétel Lagrange tételének következménye.

**3.7.2. Tétel (Monotonitási kritériumok).** *Legyen $I \subset \mathbb{R}$ intervallum. Ha az $f : \mathbb{R} \to \mathbb{R}$ függvény folytonos $I$-n, differenciálható $I$ belsejében, és $f' \ge 0$ ($f' \le 0$) $I$ belsejében, akkor $f$ az $I$ intervallumon monoton növekedő (monoton csökkenő), ha pedig az $f' \ge 0$ ($f' \le 0$) feltételt az $f' > 0$ ($f' < 0$) feltételre cseréljük, akkor $f$ szigorúan monoton növekedő (szigorúan monoton csökkenő) $I$-n.*

Az előző tétel speciális esete a következő:

**3.7.3. Tétel.** *Legyen $I \subset \mathbb{R}$ intervallum. Ha $f : \mathbb{R} \to \mathbb{R}$ folytonos $I$-n és $f'=0$ $I$ belsejében, akkor $f$ állandó.*


<!-- PDF page 35 -->

## 3.8. A L’Hospital-szabály

A Cauchy-féle középértéktétel segítségével lehet bizonyítani a következő állítást.

**3.8.1. Tétel (L’Hospital-szabály).** *Legyen $a \in \overline{\mathbb{R}}$. Tegyük fel, hogy vagy*

$$
\lim_{x \to a} f(x)=\lim_{x \to a} g(x)=0,
$$

*vagy pedig*

$$
\lim_{x \to a} |g(x)|=\infty.
$$

*Ha valamely $b \in \overline{\mathbb{R}}$ esetén*

$$
\lim_{x \to a} \frac{f'(x)}{g'(x)}=b,
$$

*akkor*

$$
\lim_{x \to a} \frac{f(x)}{g(x)}=b.
$$

*Hasonló állítások igazak jobb oldali és bal oldali határértékek esetén is.*

**3.8.2. Példa.** A L’Hospital-szabály ismételt alkalmazásával kapjuk, hogy

$$
\lim_{x \to 0}\frac{e^x-\sin x-1}{x^2}
=\lim_{x \to 0}\frac{e^x-\cos x}{2x}
=\lim_{x \to 0}\frac{e^x+\sin x}{2}
=\frac{1}{2}.
$$

**3.8.3. Példa.** A L’Hospital-szabály szerint

$$
\lim_{x \to \infty}\frac{\ln(1+3x)^7}{\ln(2+5x)^4}
=\lim_{x \to \infty}\frac{7\ln(1+3x)}{4\ln(1+5x)}
=\frac{7}{4}\lim_{x \to \infty}
\frac{\frac{3}{1+3x}}{\frac{5}{2+5x}}
=\frac{21}{20}\lim_{x \to \infty}\frac{2+5x}{1+3x}
=\frac{7}{4}.
$$

## 3.9. Abszolút és lokális szélsőértékek

**3.9.1. Definíció.** Legyen adva egy $f : \mathbb{R} \to \mathbb{R}$ függvény. Az $a \in D(f)$ számot $f$ *abszolút maximumhelyének* (*abszolút minimumhelyének*) mondjuk, ha minden $x \in D(f)$-re $f(x) \le f(a)$ ($f(x) \ge f(a)$).

Az abszolút maximumhely és abszolút minimumhely közös neve *abszolút szélsőértékhely*. Az abszolút szélsőértékhely helyett a *globális szélsőértékhely* elnevezés is használatos.

**3.9.2. Definíció.** Az $a \in D(f)$ szám $f$ *lokális maximumhelye* (*lokális minimumhelye*), ha $f$ definiálva van $a$ valamely $\delta$-sugarú környezetében ($\delta > 0$), továbbá minden $x \in (a-\delta,a) \cup (a,a+\delta)$ esetén $f(x) \le f(a)$ ($f(x) \ge f(a)$). Ha $\le$ ($\ge$) egyenlőtlenséget $<$-re ($>$-ra) cseréljük, akkor a *szigorú lokális maximumhely* (*szigorú lokális minimumhely*) definícióját kapjuk.

A (szigorú) lokális maximumhelyek és lokális minimumhelyek közös neve (szigorú) lokális szélsőértékhely.


<!-- PDF page 36 -->

A következő tételben lokális szélsőértékhely létezésének szükséges feltételét adjuk meg.

**3.9.3. Tétel.** *Ha $a$ az $f : \mathbb{R} \to \mathbb{R}$ függvény lokális szélsőértékhelye és $f$ differenciálható az $a$ helyen, akkor $f'(a)=0$.*

**3.9.4. Definíció.** Azokat az $a$ pontokat, amelyekre $f'(a)=0$ az $f : \mathbb{R} \to \mathbb{R}$ függvény *kritikus* (*stacionárius*) *pontjainak* nevezzük.

**3.9.5. Példa.** Könnyű ellenőrizni, hogy $0$ az $f(x)=x^3$, $x \in \mathbb{R}$, függvény kritikus pontja, ugyanakkor $f$ szigorúan monoton növekedő a $(-\infty,\infty)$-n. Tehát egy kritikus pont általában nem lokális szélsőértékhely.

A monotonitási kritériumokból következik, hogy ha $a$ az $f : \mathbb{R} \to \mathbb{R}$ függvény kritikus pontja, és az $f'$ deriváltfüggvény előjelet vált az $a$ pontban, akkor $a$ $f$-nek lokális szélsőértékhelye.

Weierstrass tételéből tudjuk, hogy bármely korlátos zárt intervallumon folytonos függvénynek van abszolút maximumhelye és abszolút minimumhelye. Ezeket a következőképpen határozhatjuk meg:

**3.9.6. Tétel.** *Legyen $[a,b] \subset \mathbb{R}$. Ha $f$ folytonos $[a,b]$-n, akkor legnagyobb (legkisebb) értékét vagy az intervallum valamelyik végpontjában, vagy pedig olyan $c \in (a,b)$ pontban veszi fel, ahol $f'(c)=0$ vagy $f'(c)$ nem létezik.*

**3.9.7. Példa.** Keressük meg az

$$
f(x)=3x^4-20x^3+48x^2-48x+1, \qquad x \in [0,3],
$$

függvény (abszolút) maximumát és minimumát. Mivel $f$ folytonos és

$$
f'(x)=12(x^3-5x^2+8x-4)=12(x-1)(x-2)^2, \qquad x \in (0,3),
$$

ezért az előző tétel szerint $f$ maximumhelye és minimumhelye az

$$
x_1=0, \qquad x_2=1, \qquad x_3=2, \qquad x_4=3
$$

pontok valamelyike. Összehasonlítva az

$$
f(0)=1, \qquad f(1)=-16, \qquad f(2)=-15, \qquad f(3)=-8
$$

függvényértékeket azt kapjuk, hogy a legnagyobb függvényérték $1$, a legkisebb pedig $-16$.

## 3.10. Konvexség, konkávság

Emlékeztetőül: egy $f : \mathbb{R} \to \mathbb{R}$ függvény $x_1, x_2 \in D(f)$, $x_1 < x_2$, helyekhez tartozó szelőjének meredeksége

$$
\frac{f(x_2)-f(x_1)}{x_2-x_1},
$$

a szelő egyenlete pedig

$$
y=\frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1).
$$


<!-- PDF page 37 -->

**3.10.1. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum és $f : I \to \mathbb{R}$. Az $f$ függvényt az $I$-n *konvexnek* (*konkávnak*) mondjuk, ha bármely $x_1, x, x_2 \in I$, $x_1 < x < x_2$, esetén

$$
f(x) \le \frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1),
\qquad
\left(
f(x) \ge \frac{f(x_2)-f(x_1)}{x_2-x_1}(x-x_1)+f(x_1)
\right).
$$

Ha $\le$ ($\ge$) egyenlőtlenséget $<$-re ($>$-ra) cseréljük, akkor az $I$-n *szigorúan konvex* (*szigorúan konkáv*) függvény definícióját kapjuk.

Az $f$ függvény akkor konvex (konkáv) az $I$ intervallumon, ha bármely $x_1, x_2 \in I$, $x_1 < x_2$, esetén az $x_1$ és $x_2$ helyekhez tartozó szelő az $(x_1,x_2)$ intervallumon $f$ grafikonja fölött (alatt) fekszik.

**3.10.2. Tétel (Konvexség és konkávság kritériuma).** *Ha $f$ folytonos az $I \subset \mathbb{R}$ intervallumon és $f'$ (szigorúan) monoton növekedő ((szigorúan) monoton csökkenő) $I$ belsejében, akkor az $f$ függvény $I$-n (szigorúan) konvex ((szigorúan) konkáv).*

*Speciálisan, ha $f : \mathbb{R} \to \mathbb{R}$ folytonos az $I$-n és $f'' \ge 0$ ($f'' \le 0$) $I$ belsejében, akkor $f$ $I$-n konvex (konkáv), ha pedig a $\ge$ ($\le$) egyenlőtlenséget $>$-re ($<$-ra) cseréljük, akkor $f$ $I$-n szigorúan konvex (szigorúan konkáv).*

**3.10.3. Példa.** Legyen

$$
f(x)=\frac{1}{1+x^2}, \qquad x \in \mathbb{R}.
$$

Az $f$ függvény folytonos, továbbá

$$
f'(x)=\frac{-2x}{(1+x^2)^2}, \qquad x \in \mathbb{R},
$$

$$
f''(x)=\frac{2\cdot(3x^2-1)}{(1+x^2)^3}, \qquad x \in \mathbb{R}.
$$

Mivel $f'' < 0$ a $\left(-\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right)$ intervallumon és $f'' > 0$ a $\left(-\infty,-\frac{1}{\sqrt{3}}\right)$, $\left(\frac{1}{\sqrt{3}},\infty\right)$ intervallumokon, ezért a $\left(-\frac{1}{\sqrt{3}},\frac{1}{\sqrt{3}}\right)$-n $f$ szigorúan konkáv, a $\left(-\infty,-\frac{1}{\sqrt{3}}\right)$-n és az $\left(\frac{1}{\sqrt{3}},\infty\right)$-n pedig szigorúan konvex.


<!-- PDF page 38 -->

# 4. fejezet

# Egyváltozós valós függvények integrálszámítása

## 4.1. Primitív függvény és határozatlan integrál

**4.1.1. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum és $f$ egy $I$-n definiált valós függvény. Az $F : I \to \mathbb{R}$ függvényt $f$ *primitív függvényének* mondjuk az $I$ intervallumon, ha $F$ differenciálható $I$-n és itt $F'_I=f$.

Emlékeztetőül: $F'_I$ az $F$ függvény $I$-n vett deriváltját jelöli (lásd 3.5.1 Definíció).

A következő tulajdonság Lagrange tételének következménye.

**4.1.2. Tétel.** *Ha $F$ az $f$ függvény primitív függvénye az $I$ intervallumon, akkor minden $c \in \mathbb{R}$ esetén $F+c$ is primitív függvénye $f$-nek $I$-n, és $f$ bármely primitív függvénye $I$-n $F+c$ alakú, ahol $c \in \mathbb{R}$.*

**4.1.3. Definíció.** Egy $f$ valós függvény *határozatlan integrálján* az $I \subset \mathbb{R}$ intervallumon $f$ $I$-n vett primitív függvényeinek halmazát értjük (ha nem üres). Jelölés: $\int f$ vagy $\int f(x)\,dx$. Az $f$ függvényt *integrandusnak* nevezzük.

Ha $F$ primitív függvénye $f$-nek $I$-n, akkor

$$
\int f=\{F+c \mid c \in \mathbb{R}\} \qquad I\text{-n}.
$$

Ezt a következő pontatlan, de rövidsége miatt kényelmes és ezért általánosan használt alakban szokás írni:

$$
\int f=F+c, \qquad \text{(az } I \text{ intervallumon),}
$$

vagy

$$
\int f(x)\,dx=F(x)+c, \qquad (x \in I).
$$

Mivel

$$
\left(\frac{x^2}{2}\right)'=x, \qquad x \in (-\infty,\infty),
$$


<!-- PDF page 39 -->

ezért

$$
\int x\,dx=\frac{x^2}{2}+c, \qquad x \in (-\infty,\infty).
$$

## 4.2. Alapintegrálok

A differenciálási szabályok megfordításával kapjuk a következő integrálokat.

| $\int f(x)\,dx$ | $F(x)+c$ |
|---|---|
| $\int x^b\,dx$ | $\dfrac{x^{b+1}}{b+1}+c$ |
| $\int \dfrac{1}{x}\,dx$ | $\ln |x|+c$ |
| $\int e^x\,dx$ | $e^x+c$ |
| $\int a^x\,dx$ | $\dfrac{a^x}{\ln a}+c$ |
| $\int \sin x\,dx$ | $-\cos x+c$ |
| $\int \cos x\,dx$ | $\sin x+c$ |
| $\int \dfrac{1}{\cos^2 x}\,dx$ | $\operatorname{tg} x+c$ |
| $\int \dfrac{1}{\sin^2 x}\,dx$ | $-\operatorname{ctg} x+c$ |
| $\int \dfrac{1}{\sqrt{1-x^2}}\,dx$ | $\arcsin x+c$ |
| $\int \dfrac{1}{1+x^2}\,dx$ | $\operatorname{arctg} x+c$ |

$$
\left(b \in \mathbb{R}\setminus\{-1\}, \qquad a \in (0,\infty)\setminus\{1\}\right)
$$

A táblázatban szereplő integrálformulák érvényesek minden olyan nyílt intervallumon, ahol
$f$ és a jobb oldalon szereplő függvény értelmezve van.

## 4.3. Integrálás elemi átalakításokkal

**4.3.1. Tétel (Linearitás).** *Ha $f$-nek és $g$-nek primitív függvénye az $(a,b) \subset \mathbb{R}$ intervallumon $F$, illetve $G$, továbbá $k \in \mathbb{R}$, akkor $(kf)$-nek primitív függvénye $(a,b)$-n $kF$, $(f+g)$-nek


<!-- PDF page 40 -->

pedig $F+G$. Eszerint*

$$
\int (kf)=k\int f,
$$

$$
\int (f+g)=\int f+\int g.
$$

Az első képletet úgy kell érteni, hogy az $\int (kf)$ függvényhalmaz elemei az $\int f$ függvényhalmaz elemeinek $k$-szorosai, a második képletet pedig úgy, hogy az $\int(f+g)$ függvényhalmaz elemei az $\int f$ és $\int g$ függvényhalmaz elemeinek összeadásával állnak elő. Hasonlóképpen értendők a további határozatlan integrálokkal kapcsolatos képletek is.

**4.3.2. Tétel (Lineáris helyettesítés).** *Legyen $f$-nek az $(\alpha,\beta) \subset \mathbb{R}$ intervallumon primitív függvénye $F$, továbbá $g(x)=ax+b$ lineáris függvény, $a,b \in \mathbb{R}$, $a \ne 0$, és $(\gamma,\delta)$ olyan intervallum, hogy $g((\gamma,\delta)) \subset (\alpha,\beta)$. Ekkor az $f \circ g$ függvénynek $(\gamma,\delta)$-n primitív függvénye $\frac{1}{a}(F \circ g)$, azaz*

$$
\int f(ax+b)\,dx=\frac{1}{a}F(ax+b)+c, \qquad x \in (\gamma,\delta).
$$

**4.3.3. Példa.**

$$
\int \sqrt{3x+5}\,dx
=\int (3x+5)^{\frac{1}{2}}\,dx
=\frac{1}{3}\frac{(3x+5)^{\frac{3}{2}}}{\frac{3}{2}}+c
=\frac{2}{9}\sqrt{(3x+5)^3}+c,
$$

ahol $x \in \left(-\frac{5}{3},\infty\right)$.

**4.3.4. Példa.**

$$
\begin{aligned}
\int \cos^2 x\,dx
&=\int \frac{1+\cos 2x}{2}\,dx
=\int \left(\frac{1}{2}+\frac{\cos 2x}{2}\right)\,dx \\
&=\frac{1}{2}\int 1\,dx+\frac{1}{2}\int \cos 2x\,dx
=\frac{1}{2}x+\frac{1}{2}\frac{\sin 2x}{2}+c
=\frac{x}{2}+\frac{\sin 2x}{4}+c,
\end{aligned}
$$

ahol $x \in (-\infty,\infty)$.

## 4.4. Parciális integrálás

A szorzat deriváltjából könnyen levezethető a következő tétel.

**4.4.1. Tétel (Parciális integrálás).** *Legyen $(a,b) \subset \mathbb{R}$. Ha $f$ és $g$ differenciálhatók $(a,b)$-n és az $fg'$ függvénynek van primitív függvénye $(a,b)$-n, akkor az $f'g$ függvénynek is van primitív függvénye $(a,b)$-n, és*

$$
\int f'(x)g(x)\,dx=f(x)g(x)-\int f(x)g'(x)\,dx,
\qquad x \in (a,b).
$$


<!-- PDF page 41 -->

**4.4.2. Példa.**

$$
\int (\cos x)x\,dx
=\int (\sin x)'x\,dx
=(\sin x)x-\int (\sin x)1\,dx
=(\sin x)x+\cos x+c,
$$

ahol $x \in (-\infty,\infty)$.

## 4.5. Integrálás helyettesítéssel

Az alábbi tétel az összetett függvény differenciálási szabályából következik.

**4.5.1. Tétel (1. típusú helyettesítés).** *Legyen $g$ differenciálható és nem állandó az $(a,b) \subset \mathbb{R}$ intervallumon. Ha $F$ primitív függvénye $f$-nek a $g((a,b))$ intervallumon, akkor $F \circ g$ primitív függvénye $f$-nek $(a,b)$-n, azaz*

$$
\int (f(g(x)))g'(x)\,dx=F(g(x))+c, \qquad x \in (a,b),
$$

*avagy*

$$
\int (f(g(x)))g'(x)\,dx=\left[\int f(u)\,du\right]_{u=g(x)}.
$$

Ez utóbbi képlethez formálisan úgy is eljuthatunk, hogy a bal oldali integrálban bevezetjük az $u=g(x)$ helyettesítést, majd a $\frac{du}{dx}=g'(x)$ képletből a $g'(x)\,dx=du$ összefüggést származtatjuk, és így jutunk a jobb oldalon látható integrálhoz.

**4.5.2. Példa.** Az

$$
\int (\sin^2 x)\cos x\,dx
$$

integrálból az $u=\sin x$ helyettesítéssel, amikor $\frac{du}{dx}=\cos x$, s így $\cos x\,dx=du$, az

$$
\left[\int u^2\,du\right]_{u=\sin x}
$$

integrált kapjuk. Mivel

$$
\int u^2\,du=\frac{u^3}{3}+c,
$$

ezért

$$
\int (\sin^2 x)\cos x\,dx=\frac{\sin^3 x}{3}+c,
\qquad x \in (-\infty,\infty).
$$

**4.5.3. Tétel (2. típusú helyettesítés).** *Tegyük fel, hogy $g$ differenciálható az $(\alpha,\beta) \subset \mathbb{R}$ intervallumon és $g'$ sehol sem tűnik el $(\alpha,\beta)$-n. Ha $H$ primitív függvénye $(f \circ g)g'$-nek $(\alpha,\beta)$-n, akkor $H \circ g^{-1}$ primitív függvénye $f$-nek a $g((\alpha,\beta))$ intervallumon, azaz*

$$
\int f(x)\,dx=
\left[\int (f(g(u)))g'(u)\,du\right]_{u=g^{-1}(x)},
\qquad x \in g((\alpha,\beta)).
$$


<!-- PDF page 42 -->

A képlethez formálisan úgy juthatunk el, hogy a bal oldali integrálban elvégezzük az $x=g(u)$ helyettesítést, majd a $\frac{dx}{du}=g'(u)$ összefüggésből a $dx=g'(u)\,du$ kifejezést származtatjuk, végül megkapjuk a jobb oldali integrált. Ennek kiszámítása után $u$ helyébe $g^{-1}(x)$-et kell írnunk.

**4.5.4. Példa.** Az

$$
\int x\sqrt[3]{x-1}\,dx
$$

integrálból az $x=u^3+1$ helyettesítéssel a $\frac{dx}{du}=3u^2$ és $dx=3u^2\,du$ kifejezéseket használva az

$$
\int (u^3+1)u\,3u^2\,du
=3\int (u^6+u^3)\,du
$$

integrált kapjuk. Ezt már ki tudjuk számítani:

$$
3\int (u^6+u^3)\,du
=3\left(\frac{u^7}{7}+\frac{u^4}{4}\right)+c
=\frac{3}{7}u^7+\frac{3}{4}u^4+c.
$$

Végül az $x=u^3+1$ összefüggésből nyert $u=\sqrt[3]{x-1}$ felhasználásával kapjuk, hogy

$$
\int x\sqrt[3]{x-1}\,dx
=\frac{3}{7}\left(\sqrt[3]{x-1}\right)^7
+\frac{3}{4}\left(\sqrt[3]{x-1}\right)^4+c,
\qquad x \in (-\infty,\infty).
$$

## 4.6. A Riemann-integrál definíciója

Adott egy nemnegatív folytonos $f$ az $[a,b] \subset \mathbb{R}$ intervallumon. Kiszámítandó annak a „görbevonalú” trapéznak a $T$ területe, amelyet felülről az $y=f(x)$ görbe, oldalról az $x=a$ és $x=b$ egyenesek, alulról pedig az $x$-tengely határol. Az alábbiakban definiált fogalmak segítségével alsó és felső becslést adhatunk $T$-re. A konstrukció abban az általánosabb esetben is használható, amikor $f$ csupán korlátos $[a,b]$-n.

**4.6.1. Definíció.** Az $[a,b] \subset \mathbb{R}$ intervallum *felosztásán* olyan véges $\{x_0,\ldots,x_k\}$ sorozatot értünk, amelyre

$$
a=x_0<x_1<\cdots<x_k=b.
$$

**4.6.2. Definíció.** Legyen adva egy korlátos $f$ függvény az $[a,b]$ intervallumon és $\Phi=\{x_0,\ldots,x_k\}$ legyen $[a,b]$ egy felosztása. A korlátosság miatt minden $i \in \{1,2,\ldots,k\}$ esetén az

$$
m_i=\inf f([x_{i-1},x_i]), \qquad M_i=\sup f([x_{i-1},x_i])
$$

számok jól definiáltak. Az

$$
s_\Phi=\sum_{i=1}^k m_i(x_i-x_{i-1})
$$

összeget az $f$ függvény $\Phi$ felosztáshoz tartozó *alsó összegének*, az

$$
S_\Phi=\sum_{i=1}^k M_i(x_i-x_{i-1})
$$

összeget az $f$ függvény $\Phi$ felosztáshoz tartozó *felső összegének* nevezzük (lásd a 4.1 ábra).


<!-- PDF page 43 -->

![4.1. ábra](pages_300/page-43.png)

Ha $f$ korlátos $[a,b]$-n, akkor $[a,b]$ bármely $\Phi$ felosztására

$$
\inf f([a,b])\cdot(b-a) \le s_\Phi \le S_\Phi \le \sup f([a,b])\cdot(b-a).
$$

**4.6.3. Definíció.** Bármely $[a,b]$-n korlátos $f$ esetén legyen

$$
I_A=\sup\{s_\Phi \mid \Phi \text{ az } [a,b] \text{ felosztása}\},
$$

és

$$
I_F=\inf\{S_\Phi \mid \Phi \text{ az } [a,b] \text{ felosztása}\}.
$$

Az $I_A$ számot az $f$ függvény *(Darboux-féle) alsó integráljának*, az $I_F$ számot pedig $f$ *(Darboux-féle) felső integráljának* nevezzük.

Nyilvánvaló, hogy ha $f$ nemnegatív és folytonos $[a,b]$-n, akkor az $[a,b]$ bármely $\Phi$ felosztására

$$
s_\Phi \le T \le S_\Phi,
$$

és ezért

$$
I_A \le T \le I_F
$$

is teljesül, ahol $T$ a kiszámítandó terület.

**4.6.4. Definíció.** Az $f$ függvényt *integrálhatónak* mondjuk az $[a,b] \subset \mathbb{R}$ intervallumon, ha $f$ korlátos $[a,b]$-n és $I_A=I_F$. Ekkor az $I=I_A=I_F$ közös értéket az $f$ függvény $[a,b]$-n vett *Riemann-féle határozott integráljának*, vagy röviden *Riemann-integráljának* nevezzük. Jele:

$$
\int_a^b f \qquad \text{vagy} \qquad \int_a^b f(x)\,dx.
$$

Szükségünk lesz a következő fogalomra.

**4.6.5. Definíció.** Azt mondjuk, hogy az $f$ függvény *szakaszosan folytonos* (*szakaszosan monoton*) az $[a,b] \subset \mathbb{R}$ intervallumon, ha $[a,b]$-nek létezik $\{x_0,\ldots,x_k\}$ felosztása ($a=x_0<x_1<\cdots<x_k=b$) úgy, hogy az $(x_{i-1},x_i)$, $i \in \{1,\ldots,k\}$, részintervallumok mindegyikében $f$ folytonos (monoton).


<!-- PDF page 44 -->

A következő tétel azt mutatja, hogy a függvények egy igen széles osztálya integrálható.

**4.6.6. Tétel (Egzisztencia tétel).** *Ha $f$ korlátos és szakaszosan folytonos vagy szakaszosan monoton az $[a,b]$ intervallumon, akkor $f$ integrálható is $[a,b]$-n.*

Legyen $f$ nemnegatív és folytonos $[a,b]$-n. Ekkor $f$ integrálhatósága folytán $I_A=I_F=\int_a^b f$. Figyelembe véve, hogy $I_A \le T \le I_F$, azt kapjuk, hogy

$$
T=\int_a^b f,
$$

ahol $T$ a szakasz elején említett síkidom területe.

A következő tétel azt mutatja, hogy az integrálhatóságot és az integrál értékét nem befolyásolja, ha az integrandust véges számú pontban megváltoztatjuk.

**4.6.7. Tétel.** *Legyenek $f$ és $g$ az $[a,b] \subset \mathbb{R}$ intervallumon definiált valós függvények. Ha $f$ integrálható az $[a,b]$-n, és van $[a,b]$-nek olyan véges $H$ részhalmaza, hogy $f=g$ az $[a,b]\setminus H$ halmazon, akkor $g$ is integrálható $[a,b]$-n, és*

$$
\int_a^b g=\int_a^b f.
$$

Ez a tétel motiválja az alábbi definíciót.

**4.6.8. Definíció.** A $g$ függvényt az $[a,b] \subset \mathbb{R}$ intervallumon *tágabb értelemben integrálhatónak* mondjuk, ha van olyan az $[a,b]$-n integrálható $f$, amely $g$-vel $[a,b]$-n véges számú pont kivételével egyenlő. Ekkor definícióképpen

$$
\int_a^b g=\int_a^b f.
$$

**4.6.9. Példa.** A

$$
g(x)=\frac{\sin x}{x}, \qquad x \in (0,1]
$$

függvény ugyan nincs definiálva $0$-ban, mégis tágabb értelemben integrálható a $[0,1]$-en, mivel a

$$
\lim_{x \to 0} g(x)=\lim_{x \to 0}\frac{\sin x}{x}=1
$$

limeszreláció folytán korlátos, és ha a $0$ helyen bárhogyan definiáljuk, akkor szintén korlátos és szakaszosan folytonos függvényt kapunk.

A továbbiakban az integrálhatóságot mindig tágabb értelemben fogjuk érteni.


<!-- PDF page 45 -->

## 4.7. A Riemann-integrál tulajdonságai

A következő tételekben összefoglaljuk a Riemann-integrál fontosabb tulajdonságait.

**4.7.1. Tétel.** *Ha $f$ és $g$ integrálható az $[a,b] \subset \mathbb{R}$ intervallumon és $\alpha,\beta$ állandók, akkor $\alpha f+\beta g$ is integrálható az $[a,b]$-n, és*

$$
\int_a^b(\alpha f+\beta g)=\alpha\int_a^b f+\beta\int_a^b g.
$$

**4.7.2. Tétel.** *Ha $f$ és $g$ integrálható az $[a,b] \subset \mathbb{R}$ intervallumon és $f \le g$ az $[a,b]$-n, akkor*

$$
\int_a^b f \le \int_a^b g.
$$

**4.7.3. Tétel.** *Ha $f$ integrálható az $[a,b] \subset \mathbb{R}$ intervallumon, akkor $|f|$ is integrálható az $[a,b]$-n, és*

$$
\left|\int_a^b f\right| \le \int_a^b |f|.
$$

**4.7.4. Tétel.** *Ha $f$ integrálható az $[a,b]$ intervallumon és $c \in (a,b)$, akkor $f$ integrálható $[a,c]$-n és $[c,b]$-n is, és*

$$
\int_a^b f=\int_a^c f+\int_c^b f.
$$

## 4.8. A Riemann-integrál kiszámítása

A Riemann-integrál kiszámítása szempontjából alapvető fontosságú a következő tétel.

**4.8.1. Tétel (Newton-Leibniz-szabály).** *Ha $f$ integrálható az $[a,b] \subset \mathbb{R}$ intervallumon, $F$ folytonos $[a,b]$-n, továbbá $F$ primitív függvénye $f$-nek $(a,b)$-n, akkor*

$$
\int_a^b f(x)\,dx=F(b)-F(a).
$$

**4.8.2. Definíció.** Legyen $[a,b] \subset \mathbb{R}$ intervallum. Az $F(b)-F(a)$ különbséget az $[F(x)]_a^b$ szimbólummal jelöljük, és az $F$ függvény $[a,b]$ intervallumon vett *megváltozásának* nevezzük.

A Newton-Leibniz-szabályt a Lagrange-féle középértéktétel segítségével lehet igazolni.

**4.8.3. Példa.** A Newton-Leibniz-szabály szerint

$$
\int_2^3 x^2\,dx
=\left[\frac{x^3}{3}\right]_2^3
=\frac{3^3}{3}-\frac{2^3}{3}
=\frac{27}{3}-\frac{8}{3}
=\frac{19}{3}.
$$

A parciális integrálás a következőképpen fogalmazható át határozott integrálra.


<!-- PDF page 46 -->

**4.8.4. Tétel (Parciális integrálás).** *Ha $f$ és $g$ folytonosan differenciálható az $[a,b] \subset \mathbb{R}$ intervallumon, akkor*

$$
\int_a^b f'(x)g(x)\,dx=[f(x)g(x)]_a^b-\int_a^b f(x)g'(x)\,dx.
$$

**4.8.5. Példa.**

$$
\begin{aligned}
\int_1^2 \ln x\,dx
&=\int_1^2 1\cdot \ln x\,dx
=\int_1^2 (x)'\ln x\,dx \\
&=[x\ln x]_1^2-\int_1^2 x\frac{1}{x}\,dx
=2\ln 2-\int_1^2 1\,dx \\
&=2\ln 2-[x]_1^2
=2\ln 2-1.
\end{aligned}
$$

Vezessük be a következő jelölést.

**4.8.6. Definíció.** Bármely $a \in D(f)$ esetén legyen

$$
\int_a^a f=0,
$$

továbbá $b<a$ esetén

$$
\int_a^b f=-\int_b^a f,
$$

feltéve, hogy $f$ integrálható a $[b,a] \subset \mathbb{R}$ intervallumon.

**4.8.7. Tétel (Integrálás helyettesítéssel).** *Tegyük fel, hogy $g$ nem állandó és folytonosan differenciálható az $[a,b] \subset \mathbb{R}$ intervallumon és $f$ folytonos a $g([a,b])$ intervallumon. Ekkor*

$$
\int_{g(a)}^{g(b)} f(x)\,dx=\int_a^b f(g(u))g'(u)\,du.
$$

**4.8.8. Példa.** A $2-x=u$, avagy $x=g(u)=2-u$ helyettesítéssel kapjuk, hogy

$$
\begin{aligned}
\int_0^1 \frac{x}{\sqrt{2-x}}\,dx
&=-\int_{g(1)}^{g(2)}\frac{x}{\sqrt{2-x}}\,dx
=\int_1^2 \frac{2-u}{\sqrt{u}}\,du \\
&=\int_1^2 \left(\frac{2}{\sqrt{u}}-\sqrt{u}\right)\,du
=\left[4\sqrt{u}-\frac{2}{3}\sqrt{u^3}\right]_1^2 \\
&=4(\sqrt{2}-1)-\frac{2}{3}(\sqrt{8}-1).
\end{aligned}
$$

## 4.9. Az integrálfüggvény

**4.9.1. Definíció.** Legyen $I \subset \mathbb{R}$ intervallum, és tegyük fel, hogy $f$ integrálható $I$ bármely zárt részintervallumán. Rögzített $c \in I$ esetén legyen

$$
G(x)=\int_c^x f, \qquad \text{ha } x \in I.
$$

A $G : I \to \mathbb{R}$ függvényt az $f$ függvény $c$ helyhez tartozó *integrálfüggvényének* nevezzük.


<!-- PDF page 47 -->

Ha $f$ integrálható $I$ minden zárt részintervallumán, akkor tetszőleges $c,d,x \in I$ esetén

$$
\int_c^x f=\int_d^x f+\int_c^d f.
$$

Ezért ha $G$ az $f$ függvény valamely $c \in I$ helyhez tartozó integrálfüggvénye, akkor $f$-nek bármely más helyhez tartozó integrálfüggvénye $G+k$ alakú, ahol $k$ állandó.

A következő tételek az integrálfüggvény két fontos tulajdonságát írják le.

**4.9.2. Tétel.** *Ha $G$ valamely $c \in I$ helyhez tartozó integrálfüggvénye $f$-nek az $I \subset \mathbb{R}$ intervallumon, akkor $G$ folytonos $I$-n.*

**4.9.3. Tétel.** *Legyen $G$ valamely $c \in I$ helyhez tartozó integrálfüggvénye $f$-nek az $I \subset \mathbb{R}$ intervallumon, és $a \in I$. Ha $a$ nem jobb oldali (bal oldali) végpontja $I$-nek, és itt $f$ jobbról (balról) folytonos, akkor $G$ jobbról (balról) differenciálható az $a$ helyen, és*

$$
G'_+(a)=f(a) \qquad (G'_-(a)=f(a)).
$$

Az előző tétel egyik fontos következménye, hogy minden folytonos függvénynek van primitív függvénye. Pontosabban:

**4.9.4. Tétel.** *Ha $f$ folytonos az $I \subset \mathbb{R}$ intervallumon, akkor itt van primitív függvénye, és primitív függvényei egybeesnek integrálfüggvényeivel.*

## 4.10. Az improprius integrál

A Riemann-integrál két alapvető hátránya, hogy csak korlátos intervallumon és csak korlátos függvényekre definiált. Az integrálhatóság definíciójának egy lehetséges kiterjesztése nem korlátos függvényekre és nem korlátos intervallumokra a következő:

**4.10.1. Definíció.** Legyen $a,b \in \overline{\mathbb{R}}$, $a<b$, és tegyük fel, hogy $f$ integrálható az $(a,b)$ intervallum minden zárt részintervallumán. Azt mondjuk, hogy az $f$ függvény *improprius integrálja* $(a,b)$-n *konvergens*, ha $f$ valamely $c \in (a,b)$ helyhez tartozó

$$
G(x)=\int_c^x f, \qquad \text{ha } x \in (a,b),
$$

integrálfüggvényére a

$$
\lim_{x \to a+}G(x) \qquad \text{és} \qquad \lim_{x \to b-}G(x)
$$

határérték létezik és véges. Ekkor az

$$
I=\lim_{x \to b-}G(x)-\lim_{x \to a+}G(x)
=\lim_{x \to b-}\int_c^x f+\lim_{x \to a+}\int_x^c f
$$

számot az $f$ függvény $(a,b)$-n vett *improprius integráljának* mondjuk, és az

$$
\int_a^b f, \qquad \text{illetőleg} \qquad \int_a^b f(x)\,dx
$$

szimbólummal jelöljük. Ha $f$ improprius integrálja $(a,b)$-n nem konvergens, akkor *divergensnek* mondjuk.


<!-- PDF page 48 -->

Az „improprius” latin eredetű szó jelentése „nem valódi”.

Az, hogy az improprius integrál értékét ugyanazzal az $\int_a^b f$ szimbólummal jelöljük, mint a Riemann-integrált nem okoz zavart, mert igaz a következő:

**4.10.2. Tétel.** *Legyen $a,b \in \mathbb{R}$, $a<b$, és $f$ korlátos az $[a,b]$-n. Ekkor $f$-nek $(a,b)$-n pontosan akkor improprius integrálja az $I$ szám, ha $f$ (Riemann szerint) integrálható $[a,b]$-n, és integrálja $I$.*

Ha $a \in \mathbb{R}$ és $f$ korlátos $a$-nak egy jobb oldali vagy bal oldali környezetében, akkor az improprius integrált egyszerűbben is jellemezhetjük.

**4.10.3. Tétel.** *Legyen $a \in \mathbb{R}$, $b \in \overline{\mathbb{R}}$ ($a \in \overline{\mathbb{R}}$, $b \in \mathbb{R}$), $a<b$. Tegyük fel, hogy $f$ korlátos $a$-nak egy jobb oldali ($b$-nek egy bal oldali) környezetében, továbbá $f$ integrálható $(a,b)$ minden zárt részintervallumán. Az $f$ függvény $(a,b)$-n vett improprius integrálja pontosan akkor konvergens, ha a*

$$
\lim_{x \to b-}\int_a^x f
\qquad
\left(\lim_{x \to a+}\int_x^b f\right)
$$

*határérték létezik és véges, konvergencia esetén pedig*

$$
\int_a^b f=\lim_{x \to b-}\int_a^x f
\qquad
\left(\int_a^b f=\lim_{x \to a+}\int_x^b f\right).
$$

A Newton-Leibniz-szabály módosítható improprius integrálok kiszámítására is.

**4.10.4. Tétel.** *Legyen $a,b \in \overline{\mathbb{R}}$, $a<b$, $f$ integrálható $(a,b)$ minden zárt részintervallumán, és tegyük fel, hogy $F$ primitív függvénye $f$-nek $(a,b)$-n. Ekkor $f$ improprius integrálja $(a,b)$-n pontosan akkor konvergens, ha létezik és véges a*

$$
\lim_{x \to a+}F(x) \qquad \text{és} \qquad \lim_{x \to b-}F(x)
$$

*határérték, konvergencia esetén pedig*

$$
\int_a^b f=\lim_{x \to b-}F(x)-\lim_{x \to a+}F(x).
$$

**4.10.5. Definíció.** A függvénymegváltozáshoz hasonlóan a

$$
\lim_{x \to b-}F(x)-\lim_{x \to a+}F(x)
$$

különbséget (amennyiben a bal és jobb oldali határérték létezik és véges) az

$$
[F(x)]_{a+}^{b-}
$$

szimbólummal jelöljük.


<!-- PDF page 49 -->

**4.10.6. Példa.** Az előző tétel szerint

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx
=[2\sqrt{x}]_{0+}^{1-}
=\lim_{x \to 1-}2\sqrt{x}-\lim_{x \to 0+}2\sqrt{x}
=2.
$$

Megjegyezzük, hogy ez az integrál a Riemann-féle értelemben nem létezik, mert

$$
\lim_{x \to 0+}\frac{1}{\sqrt{x}}=+\infty
$$

folytán az integrandus nem korlátos.

**4.10.7. Példa.**

$$
\int_{-\infty}^{\infty}\frac{1}{1+x^2}\,dx
=\lim_{x \to \infty}\operatorname{arctg} x-\lim_{x \to -\infty}\operatorname{arctg} x
=\pi.
$$

Az improprius integrál konvergenciájának gyakran jól használható elegendő feltétele a következő:

**4.10.8. Tétel.** *Legyen $a,b \in \overline{\mathbb{R}}$, $a<b$. Ha $f$ és $g$ integrálható $(a,b)$ minden zárt részintervallumán, továbbá az $(a,b)$-n $|f| \le g$, és az*

$$
\int_a^b g
$$

*improprius integrál konvergens, akkor az*

$$
\int_a^b f
$$

*improprius integrál is konvergens.*

**4.10.9. Példa.** Az

$$
\int_1^\infty \frac{\sin x}{x^2}\,dx
$$

improprius integrál konvergens, mert

$$
\left|\frac{\sin x}{x^2}\right| \le \frac{1}{x^2}, \qquad \text{ha } x \in (1,\infty),
$$

és az

$$
\int_1^\infty \frac{1}{x^2}\,dx
=\left[-\frac{1}{x}\right]_1^\infty
=\lim_{x \to \infty}\left(-\frac{1}{x}\right)+1
=1
$$

improprius integrál konvergens.


<!-- PDF page 50 -->

## 4.11. Az integrálszámítás néhány alkalmazása

A Riemann-integrál jól használható síkidomok területének és forgástestek térfogatának kiszámítására. (A terület és térfogat fogalmának részletesebb tárgyalásához később vissza fogunk térni.)

**4.11.1. Tétel (Területszámítás).** *Legyen $[a,b] \subset \mathbb{R}$. Tegyük fel, hogy $f$ és $g$ olyan folytonos függvények $[a,b]$-n, amelyekre $g \le f$ az $[a,b]$-n. Annak a síkidomnak a területe, amelyet felülről $f$ grafikonja, alulról $g$ grafikonja, oldalról pedig az $x=a$ és $x=b$ egyenesek határolnak (lásd a következő ábra):*

$$
T=\int_a^b (f(x)-g(x))\,dx.
$$

![4.2. ábra](pages_300/page-50.png)

**4.11.2. Példa.** Annak a síkidomnak a $T$ területe, amelyet felülről az $f(x)=\sqrt{x}$, alulról pedig az $g(x)=x^2$ függvény grafikonja határol (a $[0,1]$ intervallumon):

$$
T=\int_0^1(\sqrt{x}-x^2)\,dx
=\left[\frac{2}{3}\sqrt{x^3}-\frac{x^3}{3}\right]_0^1
=\frac{2}{3}-\frac{1}{3}
=\frac{1}{3}.
$$

**4.11.3. Tétel (Forgástest térfogata).** *Ha $f$ nemnegatív folytonos függvény az $[a,b] \subset \mathbb{R}$ intervallumon, akkor annak a testnek a térfogata, amely $f$ grafikonjának az $x$-tengely körüli megforgatásával keletkezik (lásd a következő ábra):*

$$
V=\pi\int_a^b f^2(x)\,dx.
$$


<!-- PDF page 51 -->

![4.3. ábra](pages_300/page-51.png)

**4.11.4. Példa.** Annak a testnek a térfogata, amely az $f(x)=1+e^x$, $x \in [0,2]$, függvény grafikonjának az $x$-tengely körüli megforgatásával keletkezik:

$$
\begin{aligned}
V
&=\pi\int_0^2 (1+e^x)^2\,dx
=\pi\int_0^2 (1+2e^x+e^{2x})\,dx \\
&=\pi\left[x+2e^x+\frac{e^{2x}}{2}\right]_0^2
=2\pi e^2+\frac{\pi(e^4-1)}{2}.
\end{aligned}
$$

A Riemann-integrál segítségével függvénygrafikon ívhosszát is kiszámíthatjuk. Az ívhossz definíciója a következő:

**4.11.5. Definíció.** Legyen adva egy $f$ függvény az $[a,b] \subset \mathbb{R}$ intervallumon. Ha $\Phi=\{x_0,\ldots,x_k\}$ $[a,b]$ felosztása, akkor az $f$ grafikonjának $(x_{i-1},f(x_{i-1}))$ és $(x_i,f(x_i))$ pontpárjait ($i \in \{1,\ldots,k\}$) összekötő szakaszok egy *törött vonalat* (*poligont*) alkotnak, amelynek hossza:

$$
\ell_\Phi=\sum_{i=1}^k \sqrt{(x_i-x_{i-1})^2+(f(x_i)-f(x_{i-1}))^2}.
$$

Ha

$$
\ell=\sup\{\ell_\Phi \mid \Phi \text{ az } [a,b] \text{ felosztása}\}<\infty,
$$

akkor $f$ grafikonját *rektifikálhatónak* mondjuk, és az $\ell$ számot a grafikon *ívhosszának* nevezzük.

**4.11.6. Tétel (Függvénygrafikon ívhossza).** *Ha $f$ folytonosan differenciálható az $[a,b] \subset \mathbb{R}$ intervallumon, akkor $f$ grafikonja rektifikálható, és ívhossza:*

$$
\ell=\int_a^b \sqrt{1+(f'(x))^2}\,dx.
$$

**4.11.7. Példa.** Az $f(x)=\frac{2}{3}\sqrt{(1+x)^3}$ függvény deriváltja a $[0,1]$ intervallumon:

$$
f'(x)=\sqrt{1+x}, \qquad x \in [0,1].
$$


<!-- PDF page 52 -->

Ezért $f$ grafikonjának ívhossza:

$$
\ell=\int_0^1 \sqrt{2+x}\,dx
=\left[\frac{2}{3}\sqrt{(2+x)^3}\right]_0^1
=\frac{2}{3}(\sqrt{27}-\sqrt{8}).
$$


<!-- PDF page 53 -->

# 5. fejezet

# Egy villamosságtani probléma

## 5.1. Soros RLC áramkör

Ha egy váltakozóáramú áramforráshoz sorosan egy $R$ ohmos ellenállást, egy $L$ induktivitású tekercset és egy $C$ kapacitású kondenzátort kapcsolunk, akkor az ún. soros RLC áramkört kapjuk [1]:

![5.1. ábra](pages_300/page-53.png)

Tegyük fel, hogy $R$, $L$, $C$ konstans értékek. Jelölje a $t$ időpontban $E(t)$ az áramforrás által az áramkörbe juttatott „külső” feszültséget, $I(t)$ az áramkörben folyó áramerősséget, $Q(t)$ a kondenzátor töltését. Ekkor a tekercs két vége között $L\frac{dI}{dt}$ önindukciós feszültség, a kondenzátoron pedig $Q/C$ feszültség lép fel, ezért Kirchoff második törvénye alapján

$$
E=L\frac{dI}{dt}+\frac{Q}{C}+RI.
$$

Figyelembe véve az $I=\frac{dQ}{dt}=Q'$ összefüggést, azt kapjuk, hogy

$$
LQ''(t)+RQ'(t)+\frac{1}{C}Q(t)=E(t).
$$

Ehhez a másodrendű differenciálegyenlethez tartozó kezdeti értékek:

$$
Q(0)=Q_0, \qquad Q'(0)=I(0)=I_0.
$$

Ezt a problémát a következő részben bevezetett Laplace transzformált segítségével fogjuk vizsgálni.


<!-- PDF page 54 -->

## 5.2. Valós változójú komplex függvények

Bármely $(x,y)$, $(u,v) \in \mathbb{R}^2$ esetén legyen

$$
(x,y)+(u,v)=(x+u,y+v),
$$

$$
(x,y)\cdot(u,v)=(xu-yv,xv+yu).
$$

Az $\mathbb{R}^2$ halmazt a fenti képletekkel definiált összeadás és szorzás műveletével *komplex számtestnek* nevezzük, és $\mathbb{C}$-vel jelöljük. Az $i=(0,1)$ komplex szám a *képzetes egység*. Ha az $(x,0)$ alakú komplex számokat azonosítjuk az $x$ valós számmal, akkor $i^2=-1$, továbbá bármely $z=(x,y)$ komplex szám felírható a $z=x+iy$ *algebrai alakban*, ahol $x=\operatorname{Re} z$ a $z$ szám *valós része*, $y=\operatorname{Im} z$ pedig $z$ *képzetes része*. A $z=x+iy$ szám *abszolút értéke* (*modulusa*)

$$
|z|=\sqrt{x^2+y^2},
$$

és konjugáltja

$$
\overline{z}=x-iy.
$$

Bármely $0 \ne z=x+iy$ komplex szám a

$$
z=r[\cos\varphi+i\sin\varphi]
$$

*trigonometrikus alakban* is írható, ahol $r=|z|$, $\varphi \in \mathbb{R}$ ($z$ argumentuma) pedig olyan, hogy $\cos\varphi=\frac{x}{r}$ és $\sin\varphi=\frac{y}{r}$. Ha

$$
z_1=r_1[\cos\varphi_1+i\sin\varphi_1]
\qquad \text{és} \qquad
z_2=r_2[\cos\varphi_2+i\sin\varphi_2]
$$

két $0$-tól különböző trigonometrikus alakban felírt komplex szám, akkor

$$
z_1z_2=r_1r_2[\cos(\varphi_1+\varphi_2)+i\sin(\varphi_1+\varphi_2)],
$$

$$
\frac{z_1}{z_2}=\frac{r_1}{r_2}[\cos(\varphi_1-\varphi_2)+i\sin(\varphi_1-\varphi_2)].
$$

Az első összefüggésből kapjuk, hogy ha $z=r[\cos\varphi+i\sin\varphi]$ és $n \in \mathbb{N}^+$, akkor

$$
z^n=r^n[\cos(n\varphi)+i\sin(n\varphi)].
$$

Ez Moivre tétele.

Valós változójú komplex függvények, azaz $\mathbb{R} \to \mathbb{C}$ típusú függvények véges határértékének, folytonosságának, differenciálhatóságának és integrálhatóságának a definícióját vissza lehet vezetni a korábban már tárgyalt $\mathbb{R} \to \mathbb{R}$ típusú függvények megfelelő definíciójára. Ha $f : \mathbb{R} \to \mathbb{C}$, akkor $t \in D(f)$ esetén

$$
f(t)=\operatorname{Re} f(t)+i\operatorname{Im} f(t).
$$

A

$$
(\operatorname{Re} f)(t)=\operatorname{Re} f(t), \qquad
(\operatorname{Im} f)(t)=\operatorname{Im} f(t), \qquad t \in D(f),
$$


<!-- PDF page 55 -->

képlettel definiált $\operatorname{Re} f$ és $\operatorname{Im} f$ függvény neve $f$ *valós része*, illetve $f$ *képzetes része*.

A $c \in \mathbb{C}$ szám $f$ határértéke az $a \in \mathbb{R}$ helyen, jelben $\lim_{t \to a} f(t)=c$, ha

$$
\lim_{t \to a}(\operatorname{Re} f)(t)=\operatorname{Re} c,
\qquad \text{és} \qquad
\lim_{t \to a}(\operatorname{Im} f)(t)=\operatorname{Im} c.
$$

Tehát

$$
\lim_{t \to a} f(t)
=\lim_{t \to a}(\operatorname{Re} f)(t)
+i\lim_{t \to a}(\operatorname{Im} f)(t),
$$

feltéve, hogy a jobb oldalon szereplő határértékek léteznek és végesek.

Az $f$ függvény éppen akkor folytonos az $a \in D(f)$ helyen vagy az $I \subset D(f)$ intervallumon, ha ugyanilyenek a $\operatorname{Re} f$ és $\operatorname{Im} f$ függvények.

Az $f$ függvény differenciálhányadosa az $a \in D(f)$ helyen

$$
f'(a)=(\operatorname{Re} f)'(a)+i(\operatorname{Im} f)'(a),
$$

feltéve, hogy a jobb oldalon szereplő differenciálhányadosok léteznek.

Az $f$ függvény éppen akkor integrálható az $[a,b] \subset \mathbb{R}$ intervallumon, ha ugyanilyenek a $\operatorname{Re} f$ és $\operatorname{Im} f$ függvények, és integrálhatóság esetén

$$
\int_a^b f=\int_a^b \operatorname{Re} f+i\int_a^b \operatorname{Im} f.
$$

Ha $(a,b) \subset \mathbb{R}$, akkor $f$ $(a,b)$-n vett improprius integrálja éppen akkor konvergens, ha konvergensek $\operatorname{Re} f$ és $\operatorname{Im} f$ $(a,b)$-n vett improprius integráljai, és konvergencia esetén

$$
\int_a^b f=\int_a^b \operatorname{Re} f+i\int_a^b \operatorname{Im} f.
$$

A fentiekből adódik, hogy a határértékszámítás, differenciálszámítás és integrálszámítás szabályainak nagy része átvihető valós változójú komplex függvényekre is.

A továbbiakban szükségünk lesz az exponenciális függvény kiterjesztésére komplex számokra. A kiterjesztés egyik lehetséges módja: bármely $z \in \mathbb{C}$ esetén legyen

$$
e^z=e^{\operatorname{Re} z}[\cos(\operatorname{Im} z)+i\sin(\operatorname{Im} z)].
$$

Ez az ún. Euler-formula.

## 5.3. A Laplace transzformált fogalma

**5.3.1. Definíció.** Legyen adva egy $[0,\infty)$-en definiált valós vagy komplex $f$ függvény, és tegyük fel, hogy $f$ integrálható (tágabb értelemben) a $[0,\infty)$ bármely korlátos zárt részintervallumán. Azt mondjuk, hogy az $f : [0,\infty) \to \mathbb{C}$ függvény *Laplace transzformáltja létezik* az $s \in \mathbb{C}$ helyen, ha az

$$
\int_0^\infty e^{-st}f(t)\,dt
$$


<!-- PDF page 56 -->

improprius integrál konvergens. Azt az $F : \mathbb{C} \to \mathbb{C}$ függvényt pedig, amelyet az

$$
F(s)=\int_0^\infty e^{-st}f(t)\,dt
$$

képlet definiál minden olyan $s \in \mathbb{C}$-re, amelyre az improprius integrál konvergens, az $f$ függvény *Laplace transzformáltjának* nevezzük, és $F=\mathcal{L}\{f\}$-fel jelöljük. Az $f$ függvény az $\mathcal{L}\{f\}$ Laplace-transzformált *generátorfüggvénye*.

Használatos az $\mathcal{L}\{f(t)\}(s)$ jelölés is, amely főleg akkor kényelmes, ha a generátorfüggvény nincs elnevezve, csak a képletét ismerjük.

Az $\mathcal{L}\{f\}$ függvény (ha létezik) komplex változójú komplex értékű függvény.

**5.3.2. Definíció.** Legyen $\lambda \in \mathbb{R}$. Azt mondjuk, hogy a $[0,\infty)$-n definiált $f$ függvény $\lambda$-*exponenciálisan korlátos*, ha létezik $M \ge 0$ úgy, hogy minden $t \ge 0$ esetén

$$
|f(t)| \le Me^{\lambda t}.
$$

Legyen $\Lambda$ azoknak a $[0,\infty)$-n definiált valós vagy komplex értékű függvényeknek a halmaza, amelyek integrálhatók $[0,\infty)$ minden zárt részintervallumán és valamely $\lambda \in \mathbb{R}$ esetén $\lambda$-exponenciálisan korlátosak.

Meg lehet mutatni, hogy a $\Lambda$-hoz tartozó függvények Laplace transzformáltja jól definiált. Pontosabban:

**5.3.3. Tétel (Egzisztencia tétel).** *Ha $f \in \Lambda$ és $\operatorname{Re}s$ elegendően nagy, akkor az $\mathcal{L}\{f\}(s)$ Laplace-transzformált létezik.*

**5.3.4. Tétel (Unicitás tétel).** *Legyen $f,g \in \Lambda$, és tegyük fel, hogy*

$$
\mathcal{L}\{f(t)\}(s)=\mathcal{L}\{g(t)\}(s), \qquad \text{ha } \operatorname{Re}s \text{ elég nagy}.
$$

*Ha $f$ és $g$ folytonosak a $[0,\infty)$-n, akkor $f(t)=g(t)$ minden $t \ge 0$ esetén.*

## 5.4. A Laplace transzformált tulajdonságai

A következő tételek a Laplace-transzformált fontosabb tulajdonságait foglalják össze.

**5.4.1. Tétel (Linearitás).** *Ha $f,g \in \Lambda$ és $a,b \in \mathbb{C}$, akkor $af+bg \in \Lambda$, és*

$$
\mathcal{L}\{af+bg\}(s)=a\mathcal{L}\{f\}(s)+b\mathcal{L}\{g\}(s),
\qquad \text{ha } \operatorname{Re}s \text{ elég nagy}.
$$

**5.4.2. Tétel (Deriváltak transzformáltjai).** *Ha $f,f' \in \Lambda$, akkor*

$$
\mathcal{L}\{f'\}(s)=s\mathcal{L}\{f\}(s)-f(0+),
\qquad \text{ha } \operatorname{Re}s \text{ elegendően nagy},
$$

ahol

$$
f(0+)=\lim_{t \to 0+}f(t).
$$

Általánosabban, ha valamely $n \in \mathbb{N}^+$ esetén $f,f',\ldots,f^{(n)} \in \Lambda$, akkor

$$
\mathcal{L}\{f^{(n)}\}(s)
=s^n\mathcal{L}\{f\}(s)-s^{n-1}f(0+)-s^{n-2}f'(0+)-\cdots-f^{(n-1)}(0+),
$$

ha $\operatorname{Re}s$ elég nagy.


<!-- PDF page 57 -->

Vezessük be a következő fogalmat.

**5.4.3. Definíció.** Legyenek $f$ és $g$ a $[0,\infty)$-n definiált komplex függvények. Tegyük fel, hogy $f$ és $g$ integrálható a $[0,\infty)$ bármely zárt részintervallumán. Bármely $t \in [0,\infty)$ esetén legyen

$$
(f*g)(t)=\int_0^t f(t-u)g(u)\,du.
$$

Az $f*g$ függvényt $f$ és $g$ *konvolúciójának* nevezzük.

**5.4.4. Tétel (Konvolúciós tétel).** *Ha $f,g \in \Lambda$, akkor $f*g \in \Lambda$, és*

$$
\mathcal{L}\{f*g\}(s)=\mathcal{L}\{f\}(s)\cdot\mathcal{L}\{g\}(s),
\qquad \text{ha } \operatorname{Re}s \text{ elegendően nagy}.
$$

**5.4.5. Tétel (Csillapítási tétel).** *Legyen $f \in \Lambda$ és $z \in \mathbb{C}$. Ekkor a*

$$
g(t)=e^{-zt}f(t), \qquad t \in [0,\infty),
$$

*függvény is a $\Lambda$ osztályba tartozik, és az $\mathcal{L}\{f\}=F$ jelöléssel*

$$
\mathcal{L}\{e^{-zt}f(t)\}(s)=F(s+z),
\qquad \text{ha } \operatorname{Re}s \text{ elég nagy}.
$$

A következő táblázat a $\Lambda$ osztályba tartozó néhány elemi függvény Laplace transzformáltját tartalmazza.

| $f(t)$ | $F(s)=\mathcal{L}\{f(t)\}(s)$ |
|---|---|
| $1$ | $\dfrac{1}{s}$ |
| $t^n$ | $\dfrac{n!}{s^{n+1}}$ |
| $e^{at}$ | $\dfrac{1}{s-a}$ |
| $\sin bt$ | $\dfrac{b}{s^2+b^2}$ |
| $\cos bt$ | $\dfrac{s}{s^2+b^2}$ |
| $e^{at}\sin bt$ | $\dfrac{b}{(s-a)^2+b^2}$ |
| $e^{at}\cos bt$ | $\dfrac{s-a}{(s-a)^2+b^2}$ |
| $t\sin bt$ | $\dfrac{2bs}{(s^2+b^2)^2}$ |
| $t\cos bt$ | $\dfrac{s^2-b^2}{(s^2+b^2)^2}$ |

$$
(n \in \mathbb{N}, \quad a \text{ és } b \in \mathbb{R})
$$


<!-- PDF page 58 -->

A Laplace transzformált differenciálegyenletekre történő alkalmazását teszi lehetővé a következő tétel.

**5.4.6. Tétel.** *Legyen $a_0,\ldots,a_{n-1} \in \mathbb{R}$ és $g \in \Lambda$. Tegyük fel, hogy $x$ a $[0,\infty)$-en $n$-szer differenciálható valós függvény, továbbá*

$$
x^{(n)}(t)+a_{n-1}x^{(n-1)}(t)+\cdots+a_0x(t)=g(t), \qquad \text{ha } t>0.
$$

*Ekkor $x,x',\ldots,x^{(n)} \in \Lambda$.*

## 5.5. A soros RLC áramkör vizsgálata

Most térjünk vissza a bevezetőben tárgyalt soros RLC áramkör kapcsán felmerült

$$
LQ''(t)+RQ'(t)+\frac{1}{C}Q(t)=E(t),
$$

$$
Q(0)=Q_0, \qquad Q'(0)=I(0)=I_0
$$

kezdetiérték-feladat vizsgálatához.

Az első egyenlet mindkét oldalának Laplace transzformáltját véve kapjuk

$$
Ls^2\mathcal{L}\{Q\}(s)-LsQ(0)-LQ'(0)
+Rs\mathcal{L}\{Q\}(s)-RQ(0)
+\frac{1}{C}\mathcal{L}\{Q\}(s)
=\mathcal{L}\{E\}(s).
$$

Innen

$$
\mathcal{L}\{Q\}(s)=\Phi(s)+\Psi(s),
$$

ahol

$$
\Phi(s)=\frac{(Ls+R)Q_0+LI_0}{Ls^2+Rs+\frac{1}{C}},
\qquad
\Psi(s)=\frac{\mathcal{L}\{E\}(s)}{Ls^2+Rs+\frac{1}{C}}.
$$

Vegyük észre, hogy ha φ az

$$
Ly''(t)+Ry'(t)+\frac{1}{C}y(t)=0, \qquad y(0)=Q_0, \qquad y'(0)=I_0
$$

feladat megoldása, ψ pedig az

$$
Ly''(t)+Ry'(t)+\frac{1}{C}y(t)=E(t), \qquad y(0)=0, \qquad y'(0)=0
$$

feladat megoldása, akkor

$$
\mathcal{L}\{\phi(t)\}(s)=\Phi(s)
\qquad \text{és} \qquad
\mathcal{L}\{\psi(t)\}(s)=\Psi(s),
$$

azaz $Q=\phi+\psi$.

Most tekintsük a kezdetiérték-feladat 4 speciális esetét.


<!-- PDF page 59 -->

![5.2. ábra](pages_300/page-59.png)

**1. eset:** Tegyük fel, hogy áramkörben levő elemek ellenállása $0$ (ún. LC kör), azaz $R=0$, és nincs külső feszültség a rendszeren ($E(t)=0$), azaz feltöltjük egy teleppel a kondenzátort, majd a telepet lekapcsoljuk az áramkörről:

Ekkor a differenciálegyenlet alakja:

$$
LQ''(t)+\frac{1}{C}Q(t)=0.
$$

Amint azt már beláttuk,

$$
\mathcal{L}\{Q\}(s)=\Phi(s)=\frac{L(sQ_0+I_0)}{Ls^2+\frac{1}{C}}.
$$

Vezessük be az

$$
\omega_0=\frac{1}{\sqrt{LC}}
$$

jelölést. Ekkor

$$
\mathcal{L}\{Q\}(s)=Q_0\frac{s}{s^2+\omega_0^2}
+\frac{I_0}{\omega_0}\frac{\omega_0}{s^2+\omega_0^2},
$$

és ezért

$$
Q(t)=\phi(t)=Q_0\cos\omega_0t+\frac{I_0}{\omega_0}\sin\omega_0t.
$$

Tehát a rendszer egy $\omega_0$ frekvenciájú szabadrezgést végez. (Az $\omega_0$ számot a rendszer *sajátfrekvenciájának* nevezzük.)

**2. eset:** Tegyük fel, hogy $R=0$, $Q_0=0$, $I_0=0$, és $E(t)=E_0\cos\omega t$ külső feszültség hat a rendszerre, ahol $\omega \ne \omega_0$, $E_0 \in \mathbb{R}$. Ekkor

$$
\mathcal{L}\{Q\}(s)=\Psi(s)
=\frac{E_0}{L\omega_0}\frac{\omega_0}{s^2+\omega_0^2}\frac{s}{s^2+\omega^2},
$$


<!-- PDF page 60 -->

és ezért a konvolúciós és unicitás tétel szerint

$$
\begin{aligned}
Q(t)&=\psi(t) \\
&=\frac{E_0}{L\omega_0}\int_0^t \sin(\omega_0(t-u))\cos\omega u\,du \\
&=\frac{E_0}{2L\omega_0}\int_0^t
\left(\sin(\omega_0(t-u)+\omega u)+\sin(\omega_0(t-u)-\omega u)\right)\,du \\
&=\frac{E_0}{2L\omega_0}
\left(\frac{\cos\omega t-\cos\omega_0t}{\omega_0-\omega}
+\frac{\cos\omega t-\cos\omega_0t}{\omega_0+\omega}\right) \\
&=\frac{E_0}{L(\omega_0^2-\omega^2)}(\cos\omega t-\cos\omega_0t) \\
&=\frac{2E_0}{L(\omega_0^2-\omega^2)}
\sin\frac{(\omega_0-\omega)t}{2}
\sin\frac{(\omega_0+\omega)t}{2}.
\end{aligned}
$$

Ha $|\omega_0-\omega|$ kicsi, akkor $\omega_0+\omega>|\omega_0-\omega|$, és így a megoldás utóbbi képletét úgy is tekinthetjük, hogy az egy gyorsan oszcilláló függvény, $\sin\frac{(\omega_0+\omega)t}{2}$, amelynek az amplitúdója,

$$
\frac{2E_0}{L(\omega_0^2-\omega^2)}
\sin\frac{(\omega_0-\omega)t}{2}
$$

lassan oszcillál. Ezt a jelenséget *lebegésnek* hívják, amely tehát akkor figyelhető meg, ha a külső erő frekvenciája közel megegyezik a rendszer sajátfrekvenciájával. Egy ilyen megoldás grafikonja látható a következő ábrán:

$$
L=2,\quad C=\frac{1}{8},\quad E_0=1,\quad \omega_0=2,\quad \omega=2.1.
$$

![5.3. ábra](pages_300/page-60.png)

**3. eset:** Tegyük fel, hogy $R=0$, $Q_0=0$, $I_0=0$, és $E(t)=E_0\cos\omega_0t$, azaz a rendszer sajátfrekvenciájával megegyező frekvenciájú külső erő hat a rezgőkörre. Ekkor

$$
\mathcal{L}\{Q\}(s)=\Psi(s)
=\frac{E_0}{L\omega_0}\frac{\omega_0}{s^2+\omega_0^2}\frac{s}{s^2+\omega_0^2},
$$


<!-- PDF page 61 -->

és ezért a konvolúciós tétel szerint

$$
\begin{aligned}
Q(t)&=\psi(t) \\
&=\frac{E_0}{L\omega_0}\int_0^t \sin(\omega_0(t-u))\cos\omega_0u\,du \\
&=\frac{E_0}{2L\omega_0}\int_0^t
\left(\sin(\omega_0(t-u)+\omega_0u)+\sin(\omega_0(t-u)-\omega_0u)\right)\,du \\
&=\frac{E_0}{2L\omega_0}t\sin\omega_0t.
\end{aligned}
$$

Egy olyan oszcilláló megoldást kaptunk, amelynek amplitúdója tart végtelenbe, ha $t \to \infty$. Ezt a jelenséget *rezonanciának* hívják.

$$
L=1,\quad C=\frac{1}{25},\quad E_0=1,\quad \omega_0=5.
$$

![5.4. ábra](pages_300/page-61.png)

**4. eset:** Tegyük fel, hogy $R=0$, $Q_0 \in \mathbb{R}$, $I_0 \in \mathbb{R}$, és $E(t)=E_0\cos\omega t$ külső feszültség hat a rendszerre, ahol $\omega \ne \omega_0$, $E_0 \in \mathbb{R}$. Ekkor a megoldás az 1. és 2. esetben kiszámított két függvény összege lesz:

$$
Q(t)=Q_0\cos\omega_0t+\frac{I_0}{\omega_0}\sin\omega_0t
+\frac{E_0}{L(\omega_0^2-\omega^2)}(\cos\omega t-\cos\omega_0t).
$$

 
