## 7.3. Newton–Cotes-formulák

Legyen $f \in C(a, b)$. A határozott integrált is, a deriválthoz hasonlóan, határérték segítségével definiáljuk. Riemann-összeg segítségével ez a következő alakban adható meg: vegyük az $[a, b]$ intervallum egy $a = x_0 < x_1 < \cdots < x_n = b$ beosztását, és minden $[x_{i-1}, x_i]$ részintervallumból válasszunk ki egy $\xi_i$ pontot. Ekkor az $\int_a^b f(x)\,dx$ integrál a $\sum_{i=1}^{n} f(\xi_i)(x_i - x_{i-1})$ alakú Riemann-féle közelítő összeg határértéke, ha a beosztás normája, azaz $\max\{x_i - x_{i-1} : i = 1, \ldots, n\}$ nullához tart. Egy ilyen Riemann-összeg például

$$
\int_a^b f(x)\,dx \approx \frac{b - a}{n}\left(f\left(\frac{x_0 + x_1}{2}\right) + f\left(\frac{x_1 + x_2}{2}\right) + \cdots + f\left(\frac{x_{n-1} + x_n}{2}\right)\right),
\tag{7.26}
$$

ahol $x_i = a + i(b - a)/n$, $i = 0, 1, \ldots, n$. Ezt a közelítő képletet **érintőformulának** nevezzük. (Az érintőformulával kapcsolatban lásd az 5. és 6. feladatokat!)

A numerikus differenciáláshoz hasonlóan integrál közelítő képletek levezetésére is alkalmazhatjuk a Lagrange-módszert: Az $[a, b]$ intervallumon vegyünk (többnyire ekvidisztáns) osztópontokat és legyen $L_n$ a választott alappontokhoz és az $f$ függvényhez tartozó interpolációs polinom. Tekintsük a $\int_a^b L_n(x)\,dx$-et mint a $\int_a^b f(x)\,dx$ közelítését. Feltéve, hogy $f \in C^{n+1}(a, b)$, a közelítés hibáját megkapjuk a 6.5. tétel felhasználásával:

$$
\begin{aligned}
\int_a^b f(x)\,dx ={}& \sum_{k=0}^{n} f(x_k)\int_a^b l_k(x)\,dx \\
&+ \int_a^b \frac{f^{(n+1)}(\xi(x))}{(n+1)!}(x - x_0)(x - x_1)\cdots(x - x_n)\,dx,
\end{aligned}
\tag{7.27}
$$

ahol $l_k(x)$ a (6.2) egyenlettel definiált (az alappontoktól függő) $n$-edfokú polinom. Ezzel egy

$$
\int_a^b f(x)\,dx \approx \sum_{k=0}^{n} c_k f(x_k)
\tag{7.28}
$$

alakú integrál közelítő képletet kaptunk, ahol a $c_k$ súlyokat a

$$
c_k = \int_a^b l_k(x)\,dx
\tag{7.29}
$$

integrálok adják. A (7.28) alakú közelítő képleteket **kvadratúra képleteknek** nevezzük, azokat a kvadratúra képleteket pedig, ahol a $c_k$ súlyokat a (7.29) integrálok adják, **Newton–Cotes-formuláknak** hívjuk. Ha az alappontokhoz az $a$ és $b$ pontok is hozzá tartoznak, akkor a (7.28)–(7.29) képletet **zárt Newton–Cotes-formuláknak**, ha az összes alappont az $(a, b)$ nyílt intervallumból van, akkor **nyílt Newton–Cotes-formuláknak** nevezzük. Egy kvadratúra formula **pontossági foka** $n$, ha a képlet az integrál pontos értékét adja vissza minden legfeljebb $n$-edfokú polinomra, de van olyan $n+1$-edfokú polinom, amelyre a képlet nem egyezik meg az integrál pontos értékével. Az $n + 1$ pontra felírt Newton–Cotes-formulák pontossági rendje tehát legalább $n$, hiszen az $n$-edfokú polinomot interpoláló Lagrange-polinom hibája 0. Megmutatható azonban, hogy páros $n$-re a Newton–Cotes-formula $(n + 1)$-edrendű polinomokra is pontos értéket ad vissza.

Vizsgáljuk meg $n = 1$-re a zárt Newton–Cotes-képletet. Legyen $x_0 = a$, $x_1 = b$, $h = b - a$. Ekkor

$$
L_1(x) = f(x_0)\frac{x - x_1}{x_0 - x_1} + f(x_1)\frac{x - x_0}{x_1 - x_0},
$$

így

$$
\begin{aligned}
\int_{x_0}^{x_1} L_1(x)\,dx &= f(x_0)\int_{x_0}^{x_1} \frac{x - x_1}{x_0 - x_1}\,dx + f(x_1)\int_{x_0}^{x_1} \frac{x - x_0}{x_1 - x_0}\,dx \\
&= \left[f(x_0)\frac{(x - x_1)^2}{2(x_0 - x_1)} + f(x_1)\frac{(x - x_0)^2}{2(x_1 - x_0)}\right]_{x_0}^{x_1} \\
&= \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr).
\end{aligned}
$$

Ennek a formulának a hibáját (7.27) szerint az

$$
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) = \int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx
$$

képlet adja. A hibatag átalakításához használjuk, hogy $(x - x_0)(x - x_1) < 0$, ha $x \in (x_0, x_1)$, ezért alkalmazható a 2.6. tétel. Létezik tehát olyan $\eta \in (x_0, x_1)$ konstans, hogy

$$
\int_{x_0}^{x_1} \frac{f''(\xi(x))}{2}(x - x_0)(x - x_1)\,dx = \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)(x - x_1)\,dx,
$$

tehát

$$
\begin{aligned}
\int_{x_0}^{x_1} f(x)\,dx - \frac{h}{2}\bigl(f(x_0) + f(x_1)\bigr) &= \frac{f''(\eta)}{2}\int_{x_0}^{x_1}(x - x_0)^2 - h(x - x_0)\,dx \\
&= \frac{f''(\eta)}{2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_1} \\
&= -\frac{h^3}{12}f''(\eta).
\end{aligned}
$$

Kaptuk tehát az ún. **elemi trapézformulát**:

$$
\int_a^b f(x)\,dx = \frac{h}{2}\bigl(f(a) + f(b)\bigr) - \frac{h^3}{12}f''(\xi), \qquad \xi \in (a, b).
\tag{7.30}
$$

A képlet a nevét a geometriai jelentéséből kapta: a $\frac{h}{2}\bigl(f(a) + f(b)\bigr)$ kifejezés az $f$ függvény grafikonjának $a$ és $b$ $x$-koordinátájú pontjához tartozó szelő alatti területet, azaz a trapéz területét adja vissza.

Az elemi trapéz formula akkor alkalmazható sikeresen, ha az intervallum hossza kicsi. Ha az intervallum hossza nem kicsi, akkor osszuk fel az $[a, b]$ intervallumot $n$ egyenlő hosszú részintervallumra az $x_i$ ($i = 0, 1, \ldots, n$) osztópontokkal, ahol $x_i = a + ih$, $h = (b - a)/n$, és minden részintervallumra alkalmazzuk az elemi trapézformulát:

$$
\begin{aligned}
\int_a^b f(x)\,dx &= \sum_{i=1}^{n}\int_{x_{i-1}}^{x_i} f(x)\,dx \\
&= \sum_{i=1}^{n}\frac{h}{2}\bigl(f(x_{i-1}) + f(x_i)\bigr) - \frac{h^3}{12}\sum_{i=1}^{n} f''(\xi_i) \\
&= \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{nh^3}{12}\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i).
\end{aligned}
$$

Feltéve, hogy $f \in C^2(a, b)$, a 2.2. tétel szerint az $\frac{1}{n}\sum_{i=1}^{n} f''(\xi_i)$ átlagérték helyettesíthető egy $f''(\xi)$ alakú függvényértékkel. Ezért, használva még a $hn = b - a$ összefüggést,

$$
\int_a^b f(x)\,dx = \frac{h}{2}\left(f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right) - \frac{(b - a)h^2}{12}f''(\xi), \qquad \xi \in (a, b).
\tag{7.31}
$$

Ezt a képletet **összetett trapézformulának** nevezzük.

**7.7. példa.** Számítsuk ki az $\int_0^1 x^2 e^x\,dx$ integrál közelítő értékét a trapézformulával $h = 1$ (elemi trapézformula), $h = 0.5$ és $h = 0.25$ lépésközt használva! Könnyen ellenőrizhető, hogy a pontos integrál $\int_0^1 x^2 e^x\,dx = e - 2 = 0.7182818$. Az első esetben

$$
\int_0^1 x^2 e^x\,dx \approx \frac{1}{2}(0 + e) = 1.3591409.
$$

A hiba ekkor $0.6408591$. Ha $h = 0.5$-re alkalmazzuk az összetett trapézformulát, akkor

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{2}(0 + 2 \cdot 0.5^2 e^{0.5} + e) = 0.8856606.
$$

Ennek hibája $0.1673788$. Végül $h = 0.25$-re

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{2}(0 + 2 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 2 \cdot 0.75^2 e^{0.75} + e) = 0.7605963,
$$

aminek a hibája $0.0423145$. Látható, hogy felezve a lépésközt a hiba körülbelül a negyedrészére csökken, azaz a hiba $h$-ban másodrendű. $\quad\square$

Számítsuk most ki a (7.27) képletet $n = 2$-re, ekvidisztáns osztópontokat használva, azaz $x_0 = a$, $x_1 = x_0 + h$, $x_2 = b$, $h = (b - a)/2$.

$$
\begin{aligned}
\int_{x_0}^{x_2} L_2(x)\,dx ={}& f(x_0)\int_{x_0}^{x_2} \frac{(x - x_1)(x - x_2)}{(x_0 - x_1)(x_0 - x_2)}\,dx + f(x_1)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_2)}{(x_1 - x_0)(x_1 - x_2)}\,dx \\
&+ f(x_2)\int_{x_0}^{x_2} \frac{(x - x_0)(x - x_1)}{(x_2 - x_0)(x_2 - x_1)}\,dx \\
={}& \frac{f(x_0)}{2h^2}\int_{x_0}^{x_2}(x - x_2 + h)(x - x_2)\,dx - \frac{f(x_1)}{h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - 2h)\,dx \\
&+ \frac{f(x_2)}{2h^2}\int_{x_0}^{x_2}(x - x_0)(x - x_0 - h)\,dx \\
={}& \frac{f(x_0)}{2h^2}\left[\frac{(x - x_2)^3}{3} + h\frac{(x - x_2)^2}{2}\right]_{x_0}^{x_2} - \frac{f(x_1)}{h^2}\left[\frac{(x - x_0)^3}{3} - 2h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
&+ \frac{f(x_2)}{2h^2}\left[\frac{(x - x_0)^3}{3} - h\frac{(x - x_0)^2}{2}\right]_{x_0}^{x_2} \\
={}& \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr).
\end{aligned}
$$

A közelítés képlethibája

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx.
$$

A különbség az előző esethez képest az, hogy most az $(x - x_0)(x - x_1)(x - x_2)$ szorzat különböző előjelű az $(x_0, x_1)$ és az $(x_1, x_2)$ intervallumokon, tehát nem alkalmazható a 2.6. tétel az $(x_0, x_2)$ intervallumon. Másképp járunk tehát el. Legyen

$$
\begin{aligned}
p(x) &\equiv \int_{x_0}^{x}(t - x_0)(t - x_1)(t - x_2)\,dt \\
&= \int_{x_0}^{x}(t - x_1 + h)(t - x_1)(t - x_1 - h)\,dt \\
&= \left[\frac{(t - x_1)^4}{4} - h^2\frac{(t - x_1)^2}{2}\right]_{x_0}^{x} \\
&= \frac{(x - x_1)^4}{4} - \frac{h^2(x - x_1)^2}{2} + \frac{h^4}{4} \\
&= \frac{1}{4}\bigl((x - x_1)^2 - h^2\bigr)^2.
\end{aligned}
$$

Ekkor $p(x_0) = p(x_2) = 0$, így parciális integrálással

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\int_{x_0}^{x_2} \frac{d}{dx}\frac{f'''(\xi(x))}{6}\,p(x)\,dx.
$$

$p$ nemnegatív függvény, ezért a 2.6. és a 6.8. tételeket alkalmazva kapjuk, hogy

$$
\int_{x_0}^{x_2} \frac{f'''(\xi(x))}{6}(x - x_0)(x - x_1)(x - x_2)\,dx = -\frac{f^{(4)}(\eta)}{24}\int_{x_0}^{x_2} p(x)\,dx = -\frac{h^5}{90}f^{(4)}(\eta).
$$

Beláttuk tehát az

$$
\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\bigl(f(x_0) + 4f(x_1) + f(x_2)\bigr) - \frac{h^5}{90}f^{(4)}(\eta), \qquad \eta \in (x_0, x_2)
\tag{7.32}
$$

képletet, az ún. **elemi Simpson-formulát**.

A hibatag képlete mutatja, hogy a Simpson-formula meglepő módon harmadrendű polinomokra is az integrál pontos értékét adja vissza, mivel ekkor $f^{(4)}$ azonosan nulla. Másrészt a várt negyedrendű hiba helyett a képlet eggyel jobb, ötödrendű hibával rendelkezik. Ez a jobb hibarend megmutatható minden páros $n$-re felírt Newton–Cotes-képletnél.

Az összetett trapézformulához hasonlóan vezethető le az **összetett Simpson-formula**: Páros sok egyenlő részre, $2n$ részre osztjuk az $[a, b]$ intervallumot, azaz $h = (b - a)/2n$. Ekkor

$$
\begin{aligned}
\int_a^b f(x)\,dx ={}& \frac{h}{3}\left(f(x_0) + 4\sum_{i=1}^{n} f(x_{2i-1}) + 2\sum_{i=1}^{n-1} f(x_{2i}) + f(x_{2n})\right) \\
&- \frac{(b - a)h^4}{180}f^{(4)}(\xi), \qquad \xi \in (a, b).
\end{aligned}
\tag{7.33}
$$

**7.8. példa.** Számítsuk ki az $\int_0^1 x^2 e^x\,dx$ integrál közelítő értékét a Simpson-formulával $h = 0.5$ (elemi Simpson-formula), $h = 0.25$ és $h = 0.125$ lépésközt használva! Az első esetben

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.5}{3}(0 + 4 \cdot 0.5^2 e^{0.5} + e) = 0.7278339.
$$

A hiba ekkor $0.0095520$. Ha $h = 0.25$-re alkalmazzuk az összetett Simpson-formulát, akkor

$$
\int_0^1 x^2 e^x\,dx \approx \frac{0.25}{3}(0 + 4 \cdot 0.25^2 e^{0.25} + 2 \cdot 0.5^2 e^{0.5} + 4 \cdot 0.75^2 e^{0.75} + e) = 0.7189082.
$$

Ennek hibája $0.0006264$. Végül $h = 0.125$-re

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx \approx{}& \frac{0.125}{3}\Bigl(0 + 4 \cdot 0.125^2 e^{0.125} + 2 \cdot 0.25^2 e^{0.25} + 4 \cdot 0.375^2 e^{0.375} + 2 \cdot 0.5^2 e^{0.5} \\
&+ 4 \cdot 0.625^2 e^{0.625} + 2 \cdot 0.75^2 e^{0.75} + 4 \cdot 0.875^2 e^{0.875} + e\Bigr) = 0.7183215,
\end{aligned}
$$

aminek a hibája $0.0000396$. $\quad\square$

Most bizonyítás nélkül felsorolunk néhány egyéb zárt elemi Newton–Cotes-formulát.

**Simpson $\frac{3}{8}$-ados formula:**

$$
\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)
\tag{7.34}
$$

**$n = 4$:**

$$
\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)
\tag{7.35}
$$

Végül levezetés és bizonyítás nélkül felsoroljuk az első néhány nyílt Newton–Cotes-formulát:

$$
\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi),
\tag{7.36}
$$

$$
\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi),
\tag{7.37}
$$

$$
\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi),
\tag{7.38}
$$

$$
\int_{x_{-1}}^{x_4} f(x)\,dx = \frac{5h}{24}\bigl(11f(x_0) + f(x_1) + f(x_2) + 11f(x_3)\bigr) + \frac{95h^5}{144}f^{(4)}(\xi).
\tag{7.39}
$$

Zárjuk ezt a szakaszt a numerikus integrálás stabilitásának vizsgálatával.

**7.9. tétel.** Legyen $\sum_{i=1}^{n} c_i f(x_i)$ egy olyan kvadratúra formula, amely pontos a konstans függvényekre és minden $c_i$ együttható pozitív. Legyen $y_i$ közelítése a pontos $f(x_i)$ függvényértékeknek, és tegyük fel, hogy $|y_i - f(x_i)| \leq \varepsilon$. Ekkor

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a).
$$

*Bizonyítás.* A feltétel szerint $(b - a) = \int_a^b 1\,dx = \sum_{i=1}^{n} c_i$, ezért

$$
\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \sum_{i=1}^{n} c_i |f(x_i) - y_i| \leq \varepsilon\sum_{i=1}^{n} c_i = \varepsilon(b - a). \qquad\square
$$

Megjegyezzük, hogy az összes ebben a fejezetben ismertetendő kvadratúra képlet pontos a konstans függvényekre, és a legtöbb pozitív súlyokat használ. Ezek a módszerek tehát numerikusan stabilak a függvény kerekítési hibájára nézve.

### Feladatok

1. Számítsa ki a következő integrálok közelítő értékét a trapézformula segítségével $h = 0.5, 0.25, 0.125$ lépésközt használva:
   - (a) $\int_0^1 \sin^3 x\,dx$,
   - (b) $\int_1^2 \ln(x + 1)\,dx$,
   - (c) $\int_1^2 e^{1/x}\,dx$.

2. Ismételje meg az 1. feladatot a Simpson-formulát használva!

3. Ismételje meg az 1. feladatot a (7.34)–(7.35) formulákat használva!

4. Ismételje meg az 1. feladatot a (7.36)–(7.39) formulákat használva!

5. Mutassa meg, hogy a (7.26) érintőformula az $[x_i, x_{i+1}]$ intervallumok felezőpontjához húzott érintő alatti területek összegét adja vissza!

6. Mutassa meg, hogy az érintőformula a Newton–Cotes-formulák egyik speciális esete, és vezesse le az érintőformula hibatagját!

7. Vezesse le a (7.34)–(7.35) formulákat (a hibatag alakja nélkül)!

8. Vezesse le a (7.36)–(7.39) formulákat (a hibatag alakja nélkül)!

9. Vezesse le a Simpson-formula képletét a trapézformulából Richardson-extrapolációval!
