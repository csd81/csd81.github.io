## 7.2. Richardson-extrapoláció

Tegyük fel, hogy adott egy $M$ mennyiség, amelynek ismerjük egy $K(h)$ közelítését, ahol $h$ a közelítő módszer paramétere (lépésköze), és ismerjük a közelítés képlethibáját is. Feltesszük, hogy a hiba speciális alakú, $h$-szerint páros hatványú véges (vagy végtelen) hatványsorba fejthető:

$$
M = K(h) + a_2 h^2 + a_4 h^4 + a_6 h^6 + \cdots + a_{2m} h^{2m} + b(h),
\tag{7.20}
$$

ahol $|b(h)| \leq B h^{2m+2}$ valamely $B > 0$ konstanssal. Ez a hiba $h$-ban másodrendű. Most egy általános módszert ismertetünk, amelynek segítségével magasabbrendű hibával rendelkező közelítő képletet nyerhetünk a $K(h)$ képletből kiindulva. Írjuk fel $h/2$-re az előző közelítő képletet és a hozzá tartozó hibát:

$$
M = K(h/2) + a_2 \frac{h^2}{4} + a_4 \frac{h^4}{16} + a_6 \frac{h^6}{64} + \cdots + a_{2m}\frac{h^{2m}}{2^{2m}} + b(h/2).
\tag{7.21}
$$

A (7.21) egyenlet 4-szereséből kivonva a (7.20) egyenletet a $h$-ban másodrendű hibatag kiesik. A kapott egyenletből $M$-et kifejezhetjük:

$$
\begin{aligned}
M ={}& \frac{4K(h/2) - K(h)}{3} - \frac{1}{4}a_4 h^4 - \frac{5}{16}a_6 h^6 \\
&- \cdots - \frac{2^{2m-2} - 1}{2^{2m-2}\cdot 3}a_{2m}h^{2m} + \frac{4b(h/2) - b(h)}{3}.
\end{aligned}
\tag{7.22}
$$

Ezt az összefüggést felírhatjuk a következő alakban:

$$
M = K^{(1)}(h) + a_4^{(1)} h^4 + a_6^{(1)} h^6 + \cdots + a_{2m}^{(1)} h^{2m} + b^{(1)}(h),
\tag{7.23}
$$

ahol

$$
K^{(1)} \equiv \frac{4K(h/2) - K(h)}{3}, \qquad b^{(1)}(h) \equiv \frac{4b(h/2) - b(h)}{3}, \qquad a_{2i}^{(1)} \equiv \frac{1 - 4^{i-1}}{4^{i-1}\cdot 3}a_{2i},
$$

$i = 2, \ldots, m$. A (7.23) egyenlet azt mutatja, hogy ha a $K^{(1)}(h)$ képletet $M$ közelítésének tekintjük, akkor a közelítés hibája $h$-ban már negyedrendű. Az előbbi ötletet újra alkalmazhatjuk: A (7.23) egyenletbe $h/2$-t helyettesítünk, majd a kapott egyenlet 16-szorosából kivonjuk a (7.23) egyenletet, és a kapott egyenletet megoldjuk $M$-re. Ekkor a $h^4$ tagok kiesnek, és az

$$
M = K^{(2)}(h) + a_6^{(2)} h^6 + \cdots + a_{2m}^{(2)} h^{2m} + b^{(2)}(h),
\tag{7.24}
$$

egyenletet kapjuk, ahol

$$
K^{(2)} \equiv \frac{16K^{(1)}(h/2) - K^{(1)}(h)}{15}, \qquad b^{(2)}(h) \equiv \frac{16b^{(1)}(h/2) - b^{(1)}(h)}{15},
$$

$$
a_{2i}^{(2)} \equiv \frac{1 - 4^{i-2}}{4^{i-2}\cdot 15}a_{2i}^{(1)}, \qquad i = 3, \ldots, m.
$$

A (7.24) képlet szerint $K^{(2)}(h)$ hatodrendű hibával közelíti $M$-et. Az eljárást folytatva definiálhatjuk a

$$
K^{(i+1)} \equiv K^{(i)}(h/2) + \frac{K^{(i)}(h/2) - K^{(i)}(h)}{4^{i+1} - 1}, \qquad i = 0, 1, \ldots, m - 1,
\tag{7.25}
$$

közelítő képleteket, ahol $K^{(0)}(h) \equiv K(h)$. Az ebben a szakaszban leírt módszert egy közelítő képlet pontosságának növelésére **Richardson-extrapolációnak** nevezzük. A módszer természetesen akkor is alkalmazható, ha a hiba $h$-nak nem csak páros hatványait tartalmazza (lásd a 2. és 3. feladatokat), de a későbbiekben az itt bemutatott esetre lesz majd szükségünk.

**7.6. példa.** Az előző szakaszban láttuk, hogy a (7.9) centrális differencia másodrendben közelíti a függvény első deriváltját. A Taylor-módszert alkalmazva megkaphatjuk a képlethiba pontosabb alakját. Tegyük fel, hogy $f \in C^{2m+3}$, és induljunk ki a következő Taylor-képletből:

$$
f(x_0 + h) = f(x_0) + f'(x_0)h + \cdots + \frac{f^{(2m+2)}(x_0)}{(2m+2)!}h^{2m+2} + \frac{f^{(2m+3)}(\xi_1)}{(2m+3)!}h^{2m+3}.
$$

Az előző képletet $h$ helyett $-h$-ra felírva és a két egyenletet kivonva, majd $f'(x_0)$-at kifejezve kapjuk:

$$
\begin{aligned}
f'(x_0) ={}& \frac{f(x_0 + h) - f(x_0 - h)}{2h} - \frac{f'''(x_0)}{3!}h^2 - \frac{f^{(5)}(x_0)}{5!}h^4 \\
&- \cdots - \frac{f^{(2m+1)}(x_0)}{(2m+1)!}h^{2m} - \frac{f^{(2m+3)}(\xi_1) + f^{(2m+3)}(\xi_2)}{(2m+3)!}h^{2m+2},
\end{aligned}
$$

azaz a centrális differencia képlete teljesíti a (7.20) összefüggést. Magasabbrendű képletet kaphatunk tehát a centrális differencia képletből kiindulva a Richardson-extrapolációval. Negyedrendű közelítő képlet ad például a

$$
\begin{aligned}
K^{(1)}(h) &= \frac{4\,\dfrac{f(x_0 + h/2) - f(x_0 - h/2)}{h} - \dfrac{f(x_0 + h) - f(x_0 - h)}{2h}}{3} \\
&= \frac{f(x_0 - h) - 8f(x_0 - h/2) + 8f(x_0 + h/2) - f(x_0 + h)}{6h}
\end{aligned}
$$

formula. Vegyük észre, hogy a kapott képlet lényegében megegyezik a (7.11) formulával. $\quad\square$

### Feladatok

1. Vezessen le egy hatodrendű képletet első derivált közelítésére a centrális differencia képletből kiindulva Richardson-extrapolációval! Alkalmazza a képletet az $f(x) = e^{x^2 + x}$ függvény deriváltjának közelítésére $x = 0$-ban a $h = 0.25$ lépésközt alkalmazva!

2. Fogalmazza meg a Richardson-extrapolációt arra az esetre, ha a közelítés képlethibája $h$ minden hatványát tartalmazhatja, azaz
$$
M = K(h) + a_1 h + a_2 h^2 + \cdots + a_m h^m + b(x)
$$
alakú, ahol $|b(h)| \leq B h^{m+1}$ valamely $B > 0$-ra!

3. Fogalmazza meg a Richardson-extrapolációt arra az általános esetre, amikor
$$
M = K(h) + a_1 h^{\alpha_1} + a_2 h^{\alpha_2} + \cdots + a_m h^{\alpha_m} + b(x)
$$
alakú, ahol $1 \leq \alpha_1 < \alpha_2 < \cdots < \alpha_m$ egész számok és $|b(h)| \leq B h^{\alpha_m + 1}$ valamely $B > 0$-ra!

4. Készítsen harmadrendű képletet első derivált közelítésére Richardson-extrapolációval az egyoldali differencia formulából kiindulva!
