## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

A (6.3) képletnek van egy kellemetlen hátránya: új osztópont felvételekor teljesen újra kell számolni a (6.3) kifejezést. Ezt a hiányosságot kiküszöböli ki a Lagrange-polinom egy másik alakja, az ún. Newton-féle alak. Tegyük fel, hogy $f$ függvényt akarjuk interpolálni, azaz $y_i = f(x_i)$. A Lagrange-féle interpolációs polinom Newton-féle alakjának levezetéséhez induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. Vizsgáljuk most az $L_i(x) - L_{i-1}(x)$ különbséget! $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\ldots$, $x_{i-1}$-ben, ezért $L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0$ $(j = 0, 1, \ldots, i - 1)$. De ekkor az algebra alaptétele szerint $L_i - L_{i-1}$ alakja:

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

ahol $a_i \in \mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a (6.3) képletet, kapjuk, hogy

$$\begin{aligned}
f(x_i) - \sum_{k=0}^{i-1} f(x_k) &\frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= a_i(x_i - x_0) \cdots (x_i - x_{i-1}).
\end{aligned}$$

Ebből $a_i$-t kifejezve

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \cdot \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

Összefoglalva az eddigieket, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}) \tag{6.6}
\end{aligned}$$

képlettel is. Hangsúlyozzuk, hogy ez ugyanaz a polinom, mint (6.3), csak egy másik alakban felírva. A (6.6) formulával definiált polinomot nevezzük *Lagrange-féle interpolációs polinom Newton-féle alakjának* vagy röviden *Newton-polinomnak.*

A (6.6) képletből leolvasható ennek a formulának az előnye a (6.3) képlethez viszonyítva. Először is, új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

Fontos előny még az is, hogy a (6.6) alakban felírt polinomot könnyen kiértékelhetjük a Horner-elrendezés segítségével. Ebből az alakból rögtön leolvasható a polinom fokszáma is. Ha pl. $f[x_0, x_1, \ldots, x_n] \neq 0$, akkor a polinom $n$-edfokú. A 6.13 algoritmusban megadtuk a Newton-féle interpolációs polinom együtthatóinak, azaz az $a_i = f[x_0, \ldots, x_i]$ értékek kiszámítását, a 6.14 algoritmusban pedig a Newton-polinom kiértékelését Horner-eljárással.

**6.13. algoritmus. A Newton-polinom együtthatóinak generálása**

```
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         y_i, (i = 0, 1, ..., n) - függvényértékek
OUTPUT:  a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói, ahol a_i
                                    az i-edfokú tag együtthatója

for i = 0, 1, ..., n do
    a_i ← y_i
end do
for j = 1, 2, ..., n do
    for i = n, n − 1, ..., j do
        a_i ← (a_i − a_{i−1})/(x_i − x_{i−j})
    end do
end do
output(a_0, a_1, ..., a_n)
```

Megjegyezzük, hogy a 6.13 algoritmust úgy szerveztük, hogy a Newton-polinom felírása közben számolt osztott differenciák közül csak az együtthatókhoz szükségeseket őrizzük meg a számolás végéig.

**6.14. algoritmus. A Newton-polinom kiértékelése**

```
INPUT:   n - az alappontok száma − 1
         x_i, (i = 0, 1, ..., n) - alappontok
         a_i, (i = 0, 1, ..., n) - a Newton-polinom együtthatói
         x - a pont, ahol kiértékeljük a Newton-polinomot
OUTPUT:  y - a Newton-polinom értéke x-ben

y ← a_n
for i = n − 1, n − 2, ..., 0 do
    y ← y(x − x_i) + a_i
end do
output(y)
```

Kézi számoláskor az osztópontokat, a megadott függvényértékeket és a számított osztott differenciákat érdemes a 6.1 táblázatban látható módon egy háromszög alakú táblázatban elrendezni. A táblázat első két oszlopában szereplő számok input adatok, a táblázat többi elemét számoljuk a tőle balra álló és az a fölötti eggyel kisebb rendű osztott differenciák különbségét osztva megfelelő $x_k$ értékek különbségének hányadosaként. A táblázatban a bekeretezett számok fogják adni a (6.6) képletben szereplő együtthatókat.

*6.1. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

**6.15. példa.** Tekintsük újra a 6.2 példát. Adjuk meg $L_3(x)$ Newton-féle alakját, majd számítsuk ki $L_3(0)$-t! Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát:

$$
\begin{array}{rrrrr}
-1 & -3 & & & \\
1 & 1 & 2 & & \\
2 & 3 & 2 & 0 & \\
3 & 29 & 26 & 12 & 3
\end{array}
$$

Ebből kapjuk, hogy

$$L_3(x) = -3 + 2(x + 1) + 3(x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = -3 + 2 \cdot 1 + 3 \cdot 1(-1)(-2) = 5$. Természetesen egyszerűsítve $L_3$ képletét visszakapjuk a 6.2 példában kiszámolt $L_3(x) = 3x^3 - 6x^2 - x + 5$ képletet. $\square$

Most az interpoláció képlethibájával foglalkozunk újra. A 6.1 szakaszban megállapítottuk, hogy a közelítés hibája az $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)(x - x_1) \cdots (x - x_n)$ alakban írható fel. Ez a képlet természetesen érvényes a Newton-alakban felírt interpolációs polinomot használva is, de itt megadjuk a képlethiba egy másik alakját.

**6.16. tétel.** *Legyenek $x_i \in (a,b)$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. (Ha $x = x_i$ valamely $i$-re, akkor az állítás nyilvánvaló.) Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\square$

Az interpoláció képlethibájának a 6.16 tételben közölt alakja elsősorban elméleti jelentőségű, hiszen $f[x_0, \ldots, x_n, x]$ kiszámításához $f(x)$ ismerete is kell. Fontos viszont a tétel következménye. Ha összehasonlítjuk az előző tétel állítását a 6.5 tétellel, akkor rögtön kapjuk a következő eredményt:

**6.17. következmény.** *Ha $f \in C^n(a,b)$ és $x_i$ $(i = 0, \ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$, hogy*

$$f[x_0, x_1, \ldots, x_n] = \frac{1}{n!} f^{(n)}(\xi).$$

### Feladatok

1. Ismételje meg a 6.1 szakasz 1. feladatát a Lagrange-polinom Newton-féle alakját használva!

2. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor
   $$P(x) = \sum_{i=0}^{n} P[x_0, \ldots, x_i] \prod_{k=0}^{i-1} (x - x_k).$$

3. Legyenek $x_0, \ldots, x_n$ páronként különböző számok. Igazolja, hogy ha $P$ egy $n$-edfokú polinom, akkor $P[x_0, \ldots, x_m] = 0$ minden $m > n$-re!

4. Mutassa meg, hogy ha $f(x) = c_0 + c_1 x + \cdots + c_n x^n$, akkor $c_n = f[x_0, x_1, \ldots, x_n]$!

5. Bizonyítsa be, hogy

   $$f[x_0, x_1, \ldots, x_n] = \frac{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & f(x_0) \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & f(x_1) \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & f(x_n)
   \end{vmatrix}
   }{
   \begin{vmatrix}
   1 & x_0 & x_0^2 & \cdots & x_0^{n-1} & x_0^n \\
   1 & x_1 & x_1^2 & \cdots & x_1^{n-1} & x_1^n \\
   \vdots & \vdots & \vdots & & \vdots & \vdots \\
   1 & x_n & x_n^2 & \cdots & x_n^{n-1} & x_n^n
   \end{vmatrix}
   }!$$

6. Mutassa meg, hogy
   $$\lim_{(x_1, x_2, \ldots, x_n) \to (x_0, x_0, \ldots, x_0)} f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(x_0)}{n!}!$$
   (Útmutatás: Használja a 6.17 következményt!)

7. Legyen $f \in C^2$. Definiálja a következő osztott differenciákat:
   $$f[x_0, x_0, x_1] \equiv \lim_{x_2 \to x_0} f[x_0, x_2, x_1], \quad f[x_0, x_1, x_0] \equiv \lim_{x_2 \to x_0} f[x_0, x_1, x_2],$$
   és
   $$f[x_1, x_0, x_0] \equiv \lim_{x_2 \to x_0} f[x_1, x_0, x_2], \qquad f[x_0, x_0, x_0] = \frac{f''(x_0)}{2}!$$
   Mutassa meg, hogy az előbbi határértékek léteznek, és az így definiált másodrendű osztott differenciák megőrzik a páronként különböző alappontokra felírt osztott differenciák szokásos tulajdonságait:

   (a) $f[x_0, x_0, x_1] = \dfrac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}$,

   (b) $f[x_1, x_0, x_0] = \dfrac{f[x_0, x_0] - f[x_1, x_0]}{x_0 - x_1}$,

   (c) $f[x_0, x_0, x_1] = f[x_0, x_1, x_0] = f[x_1, x_0, x_0]$,

   (d) $\lim_{(x_1, x_2) \to (x_0, x_0)} f[x_0, x_1, x_2] = f[x_0, x_0, x_0]$,

   (e) Létezik olyan $\xi \in \langle x_0, x_1 \rangle$, hogy $f[x_0, x_0, x_1] = f''(\xi)/2$.

8. Ellenőrizze, hogy a 6.13 algoritmus valóban visszaadja a Newton-polinom együtthatóit!
