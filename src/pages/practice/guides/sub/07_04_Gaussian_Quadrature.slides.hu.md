# 7.4. Gauss-féle kvadratúra formulák

---

Az előző szakaszban láttuk, hogy a Newton–Cotes-formulák a pontos integrált adják vissza bizonyos fokszámú polinomok esetén. Ebben a szakaszban olyan kvadratúra képletek levezetésével foglalkozunk, amelyek hasonló tulajdonságúak. Tekintsük az

$$
\int_a^b f(x)\,dx \approx \sum_{i=1}^{n} c_i f(x_i)
$$

általános kvadratúra képletet. Teljesül a következő állítás:

**Tétel**

Egy

$$
Q(f) \equiv \sum_{i=1}^{n} c_i f(x_i)
\tag{17}
$$

kvadratúra formula akkor és csak akkor pontos egy tetszőleges $p(x) = a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0$ legfeljebb $m$-edfokú polinomra, ha pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re.

---

**Bizonyítás**

Abból, hogy $Q$ pontos minden legfeljebb $m$-edfokú polinomra, természetesen következik, hogy pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re. Most tegyük fel, hogy $Q$ pontos az $x^i$ hatványfüggvényekre minden $i = 0, 1, \ldots, m$-re. Ekkor az integrál és a $Q$ kvadratúra formula linearitásából következik

$$
\begin{aligned}
\int_a^b a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0\,dx &= a_m\int_a^b x^m\,dx + a_{m-1}\int_a^b x^{m-1}\,dx + \cdots + a_0\int_a^b 1\,dx \\
&= a_m Q(x^m) + a_{m-1} Q(x^{m-1}) + \cdots + a_0 Q(1) \\
&= Q(a_m x^m + a_{m-1} x^{m-1} + \cdots + a_0).
\end{aligned}
$$

---

A $Q(f) = \sum_{i=1}^{n} c_i f(x_i)$ formulában $2n$ darab paraméter szerepel, a $c_i, x_i$ számok ($i = 1, 2, \ldots, n$). Azt várhatjuk, hogy egy ilyen kvadratúra képlet legfeljebb $(2n - 1)$-edfokú polinomokra adjon vissza pontos értéket, hiszen azokban is $2n$ együttható van. A $Q$ kvadratúra formula akkor és csak akkor pontos a legfeljebb $(2n - 1)$-edfokú polinomokra, ha

$$
\begin{aligned}
\int_a^b 1\,dx &= \sum_{i=1}^{n} c_i \\
\int_a^b x\,dx &= \sum_{i=1}^{n} c_i x_i \\
&\;\;\vdots \\
\int_a^b x^{2n-1}\,dx &= \sum_{i=1}^{n} c_i x_i^{2n-1}
\end{aligned}
$$

Azt a kvadratúra formulát, amelyet a fenti egyenletrendszer megoldása segítségével írunk fel, **$n$ pontra felírt Gauss-féle kvadratúra formulának** nevezzük.

---

Most tekintsünk egy speciális esetet, legyen $[a, b] = [-1, 1]$ és $n = 2$. Ekkor az egyenletekből kapjuk az integrálokat kiszámolva

$$
\begin{aligned}
2 &= c_1 + c_2 \quad\text{(18)} \\
0 &= c_1 x_1 + c_2 x_2 \quad\text{(19)} \\
\frac{2}{3} &= c_1 x_1^2 + c_2 x_2^2 \quad\text{(20)} \\
0 &= c_1 x_1^3 + c_2 x_2^3. \quad\text{(21)}
\end{aligned}
$$

A (19) egyenlet alapján

$$
c_1 x_1 = -c_2 x_2,
$$

ezért ha $c_1 x_1 = 0$, akkor $c_2 x_2 = 0$ is teljesül, de ez ellentmond a (20) egyenletnek. Ezért a $c_1, c_2, x_1$ és $x_2$ változók mindegyike nem 0. A (21) egyenletből

$$
c_1 x_1^3 = -c_2 x_2^3
$$

adódik, így

$$
x_1^2 = x_2^2.
$$

---

Két eset lehetséges: (1) $x_1 = x_2$, vagy (2) $x_1 = -x_2$. Az (1) esetben a (19) egyenletet felhasználva kapjuk, hogy

$$
0 = c_1 + c_2,
$$

ami ellentmond a (18) egyenletnek. Ezért az (1) eset nem lehetséges. Így

$$
x_1 = -x_2.
$$

Ekkor (19) egyenletből kapjuk, hogy $c_1 = c_2$, így (18) szerint

$$
c_1 = c_2 = 1,
$$

de ekkor a (20) egyenlet miatt

$$
\frac{2}{3} = 2x_1^2.
$$

Ezért $x_1 = \pm\frac{1}{\sqrt{3}} = \pm\frac{\sqrt{3}}{3}$. Azaz a (18)–(21) egyenletrendszernek (a sorrendtől eltekintve) egyértelmű megoldása:

$$
c_1 = c_2 = 1 \quad\text{és}\quad x_1 = -\frac{\sqrt{3}}{3}, \quad x_2 = \frac{\sqrt{3}}{3}.
$$

---

A másodrendű Gauss-féle kvadratúra formula képlete tehát:

$$
\int_{-1}^{1} f(x)\,dx \approx f\left(-\frac{\sqrt{3}}{3}\right) + f\left(\frac{\sqrt{3}}{3}\right).
$$

**Példa**

Számítsuk ki az $f(x) = e^x$ függvény integráljának egy közelítését a $[-1, 1]$ intervallumon! A Gauss-formula alapján

$$
\int_{-1}^{1} e^x\,dx \approx e^{-\frac{\sqrt{3}}{3}} + e^{\frac{\sqrt{3}}{3}} = 2.3426961.
$$

Ezt az $e - 1/e = 2.350424$ pontos értékkel összehasonlítva kapjuk, hogy a közelítés hibája $0.0077062$, ami a képlet egyszerűségéhez viszonyítva nagyon kicsi.

---

Szükségünk lesz az ortogonális függvények fogalmára. Az $f$ és $g$ függvényeket egymásra **ortogonálisnak** nevezzük az $[a, b]$ intervallumon, ha

$$
\int_a^b f(x)g(x)\,dx = 0.
$$

Megmutatjuk, hogy létezik polinomoknak egy olyan $(P_i)_{i=0,1,\ldots}$ sorozata, amelyek páronként ortogonálisak a $[-1, 1]$ intervallumon, és $P_i$ $i$-edfokú polinom. Legyen

$$
P_0(x) := 1 \quad\text{és}\quad P_1(x) := x.
$$

Ekkor $P_0$ és $P_1$ ortogonális egymásra a $[-1, 1]$ intervallumon. Keressük $P_2$-t a

$$
P_2(x) = x^2 + a_{2,1} P_1(x) + a_{2,0} P_0(x)
$$

alakban.

---

Ekkor a kívánt ortogonalitás alapján

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_0(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,1}\int_{-1}^{1} P_1(x)P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx \\
&= \int_{-1}^{1} x^2 P_0(x)\,dx + a_{2,0}\int_{-1}^{1} P_0^2(x)\,dx,
\end{aligned}
$$

amit megoldva

$$
a_{2,0} = -\frac{\int_{-1}^{1} x^2 P_0(x)\,dx}{\int_{-1}^{1} P_0^2(x)\,dx}.
$$

---

Ehhez hasonlóan

$$
\begin{aligned}
0 &= \int_{-1}^{1} P_2(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx + a_{2,0}\int_{-1}^{1} P_0(x)P_1(x)\,dx \\
&= \int_{-1}^{1} x^2 P_1(x)\,dx + a_{2,1}\int_{-1}^{1} P_1^2(x)\,dx,
\end{aligned}
$$

így

$$
a_{2,1} = -\frac{\int_{-1}^{1} x^2 P_1(x)\,dx}{\int_{-1}^{1} P_1^2(x)\,dx}.
$$

---

$P_2$-t tehát egyértelműen felírhatjuk a keresett alakban. Ezt az eljárást folytatva ha $P_0, \ldots, P_i$ már definiált, $P_{i+1}$-et a

$$
P_{i+1}(x) = x^{i+1} + a_{i+1,i} P_i(x) + \cdots + a_{i+1,0} P_0(x)
$$

alakban keressük. Ekkor az előbbi számoláshoz hasonlóan kapjuk, hogy

$$
a_{i+1,j} = -\frac{\int_{-1}^{1} x^{i+1} P_j(x)\,dx}{\int_{-1}^{1} P_j^2(x)\,dx}, \qquad j = 0, 1, \ldots, i,
$$

tehát $P_{i+1}$ egyértelműen definiálható. Ezt az eljárást **Gram–Schmidt-féle ortogonalizálásnak** nevezzük, a kapott $P_i$ polinomokat pedig $i$-edfokú **Legendre-polinomnak** hívjuk.

---

Az első néhány Legendre-polinom képlete:

$$
\begin{aligned}
P_0(x) &= 1, \\
P_1(x) &= x, \\
P_2(x) &= x^2 - \frac{1}{3}, \\
P_3(x) &= x^3 - \frac{3}{5}x, \\
P_4(x) &= x^4 - \frac{6}{7}x^2 + \frac{3}{35}
\end{aligned}
$$

Megmutatható hogy a Legendre-polinomok teljesítik a

$$
P_{n+1}(x) = xP_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x)
$$

rekurzív képletet.

---

**Tétel**

Legyen $P_i$ az $i$-edik Legendre-polinom. Ekkor

1. $P_i$ ortogonális egy tetszőleges legfeljebb $(i - 1)$-edfokú polinomra.
2. $P_i$ páros függvény ha $i$ páros, és páratlan függvény, ha $i$ páratlan.
3. $P_i$-nek $i$ darab különböző valós gyöke van a $(-1, 1)$ intervallumban, amelyek szimmetrikusak az origóra nézve.
4. Ha $(p_i)_{i=0,1,\ldots}$ (pontosan) $i$-edfokú, páronként ortogonális polinomok egy sorozata, akkor minden $i$-re $p_i(x) = c_i P_i(x)$ valamely $c_i \neq 0$ konstansra.

---

Az alábbi tétel szerint az $n$ pontra felírt Gauss-féle kvadratúra képlet alappontjai a $P_n$ Legendre-polinom gyökeivel egyeznek meg.

**Tétel**

Tegyük fel, hogy az $x_1, x_2, \ldots, x_n$ számok az $n$-edfokú Legendre-polinom gyökei, és legyen

$$
c_i = \int_{-1}^{1} \frac{(x - x_1)\cdots(x - x_{i-1})(x - x_{i+1})\cdots(x - x_n)}{(x_i - x_1)\cdots(x_i - x_{i-1})(x_i - x_{i+1})\cdots(x_i - x_n)}\,dx.
\tag{22}
$$

Ekkor egy tetszőleges legfeljebb $(2n - 1)$-edfokú $p$ polinomra

$$
\int_{-1}^{1} p(x)\,dx = \sum_{i=1}^{n} c_i p(x_i).
$$

---

A következő tétel a Gauss-féle kvadratúra formula képlethibáját adja meg.

**Tétel**

Legyen $f \in C^{2n}(a, b)$. Ekkor létezik olyan $\xi \in (a, b)$, hogy az $n$ pontra felírt Gauss-féle kvadratúra formulára

$$
\int_a^b f(x)\,dx = \sum_{k=1}^{n} c_k f(x_k) + \frac{f^{(2n)}(\xi)}{(2n)!}\int_{-1}^{1} P_n^2(x)\,dx.
$$

---

Belátható, hogy a Gauss-féle kvadratúra formula maradéktagja közelítőleg

$$
\frac{\pi f^{(2n)}(\xi)}{4^n (2n)!}
$$

alakú, azaz ha például $f^{(2n)}$ korlátos $n$-től független korláttal, akkor a Gauss-féle kvadratúra formula exponenciális sebességgel tart 0-hoz, ha $n \to \infty$. Emlékezzünk, hogy a Newton–Cotes-formulák csak polinomiális sebességgel tartanak 0-hoz, ha $n \to \infty$.

---

Az alábbi táblázatban felsoroltuk az első néhány Legendre-polinom gyökeit, és az előző tételből kapott hozzá tartozó $c_i$ együtthatók értékét.

| $n$ | $x_i$ | $c_i$ |
|---|---|---|
| 2 | 0.5773502692 | 1.0000000000 |
|   | -0.5773502692 | 1.0000000000 |
| 3 | 0.7745966692 | 0.5555555556 |
|   | 0.0000000000 | 0.8888888889 |
|   | -0.7745966692 | 0.5555555556 |
| 4 | 0.8611363116 | 0.3478548451 |
|   | 0.3399810436 | 0.6521451549 |
|   | -0.3399810436 | 0.6521451549 |
|   | -0.8611363116 | 0.3478548451 |
| 5 | 0.9061798459 | 0.2369268850 |
|   | 0.5384693101 | 0.4786286705 |
|   | 0.0000000000 | 0.5688888889 |
|   | -0.5384693101 | 0.4786286705 |
|   | -0.9061798459 | 0.2369268850 |

---

A Gauss-féle kvadratúra képletek a $[-1, 1]$ intervallumra vonatkoznak. Egy tetszőleges $[a, b]$ intervallumon vett integrált az $x = ((b - a)t + a + b)/2$ változó helyettesítéssel tudunk a $[-1, 1]$ intervallumra visszavezetni:

$$
\int_a^b f(x)\,dx = \frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)dt.
$$

**Példa**

Közelítsük az $\int_0^1 x^2 e^x\,dx$ integrált másodrendű Gauss-féle kvadratúra képlettel:

$$
\begin{aligned}
\int_0^1 x^2 e^x\,dx &= \frac{1}{2}\int_{-1}^{1}\left(\frac{t + 1}{2}\right)^2 e^{(t+1)/2}\,dt \\
&\approx \frac{1}{2}\left(\left(\frac{-\sqrt{3}/3 + 1}{2}\right)^2 e^{(-\sqrt{3}/3 + 1)/2} + \left(\frac{\sqrt{3}/3 + 1}{2}\right)^2 e^{(\sqrt{3}/3 + 1)/2}\right) \\
&= 0.7119418,
\end{aligned}
$$

amelynek hibája $0.0063400$.
