## 6.3. A Lagrange-féle interpolációs polinom Newton-féle alakja

Adottak $y_i = f(x_i)$ függvényértékek $i = 0, 1, \ldots, n$-re. Induljunk ki az

$$L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))$$

összefüggésből. Definíció szerint $L_0(x) = f(x_0)$ konstans függvény. $L_i - L_{i-1}$ egy legfeljebb $i$-edfokú polinom, és mivel $L_i$ és $L_{i-1}$ is teljesítik az interpolációs egyenletet $x_0$, $\ldots$, $x_{i-1}$-ben, ezért

$$L_i(x_j) - L_{i-1}(x_j) = f(x_j) - f(x_j) = 0, \qquad j = 0, 1, \ldots, i - 1.$$

De ekkor az algebra alaptétele szerint

$$L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}),$$

ahol $a_i \in \mathbb{R}$. Ha ebbe a relációba $x = x_i$-t helyettesítünk és használjuk $L_{i-1}(x_i)$-re a Lagrange-polinom képletet, kapjuk, hogy

$$f(x_i) - \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} = a_i(x_i - x_0) \cdots (x_i - x_{i-1}).$$

---

Ebből $a_i$-t kifejezve

$$\begin{aligned}
a_i &= \frac{f(x_i)}{(x_i - x_0) \cdots (x_i - x_{i-1})} - \frac{1}{(x_i - x_0) \cdots (x_i - x_{i-1})} \\
&\qquad \times \sum_{k=0}^{i-1} f(x_k) \frac{(x_i - x_0) \cdots (x_i - x_{k-1})(x_i - x_{k+1}) \cdots (x_i - x_{i-1})}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_{i-1})} \\
&= \sum_{k=0}^{i} \frac{f(x_k)}{(x_k - x_0) \cdots (x_k - x_{k-1})(x_k - x_{k+1}) \cdots (x_k - x_i)} \\
&= f[x_0, x_1, \ldots, x_i].
\end{aligned}$$

---

Összefoglalva, a Lagrange-féle interpolációs polinomot megadhatjuk az

$$\begin{aligned}
L_n(x) = &\ f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots \\
&+ f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1}) \tag{3}
\end{aligned}$$

képlettel is. A (3) formulával definiált polinomot nevezzük a **Lagrange-féle interpolációs polinom Newton-féle alakjának** vagy röviden **Newton-polinomnak.**

Új osztópont hozzávételével a képlet kényelmesen bővíthető egy új taggal:

$$L_{n+1}(x) = L_n(x) + f[x_0, x_1, \ldots, x_{n+1}](x - x_0) \cdots (x - x_n).$$

---

**Algoritmus: A Newton-polinom együtthatóinak generálása**

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

---

**Algoritmus: A Newton-polinom kiértékelése**

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

---

**Osztott differenciák elrendezése kézi számoláskor**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_1$ | $f(x_1)$ | $\boxed{f[x_0, x_1]}$ | | |
| $x_2$ | $f(x_2)$ | $f[x_1, x_2]$ | $\boxed{f[x_0, x_1, x_2]}$ | |
| $x_3$ | $f(x_3)$ | $f[x_2, x_3]$ | $f[x_1, x_2, x_3]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-2}, x_{n-1}, x_n]$ | $\cdots$ $\boxed{f[x_0, x_1, \ldots, x_n]}$ |

---

**Példa.** Tekintsük újra a korábbi adatokat:

| $x_i$ | -1 | 1 | 2 | 3 |
|-------|----|----|----|----|
| $y_i$ | -2 | 0 | -2 | 2 |

Képezzük a Newton-polinom felírásához szükséges osztott differenciák táblázatát. A lépésenkénti számítás (animáció):

$$\frac{0-(-2)}{1-(-1)} = 1, \quad \frac{-2-0}{2-1} = -2, \quad \frac{2-(-2)}{3-2} = 4,$$
$$\frac{-2-1}{2-(-1)} = -1, \quad \frac{4-(-2)}{3-1} = 3, \quad \frac{3-(-1)}{3-(-1)} = 1.$$

A teljes táblázat:

$$
\begin{array}{rrrrr}
-1 & -2 & & & \\
1 & 0 & 1 & & \\
2 & -2 & -2 & -1 & \\
3 & 2 & 4 & 3 & 1
\end{array}
$$

Ebből következik, hogy

$$L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2),$$

és így $L_3(0) = 2$. $L_3$ képletét egyszerűsítve kapjuk a korábbi eredményt: $L_3(x) = x^3 - 3x^2 + 2$.

---

**Tétel.** *Legyenek $x_i \in (a,b)$ $(i = 0, \ldots, n)$ páronként különböző alappontok és $y_i = f(x_i)$ $(i = 0, \ldots, n)$. Legyen $L_n(x)$ az adatokhoz tartozó $n$-edfokú Lagrange-polinom. Ekkor*

$$f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n).$$

**Bizonyítás.** Rögzítsünk egy $x \in (a, b)$ számot amely nem egyezik meg egyik alapponttal sem. Vegyük $x$-et az alappontokhoz és rendeljük hozzá az $f(x)$ függvényértéket. Legyen $L_{n+1}$ a kibővített adatokhoz tartozó Lagrange-polinom. A Newton-polinom definíciója szerint

$$L_{n+1}(t) = L_n(t) + f[x_0, x_1, \ldots, x_n, x](t - x_0) \cdots (t - x_n).$$

Ebből $t = x$-et véve következik az állítás, hiszen $f(x) = L_{n+1}(x)$. $\square$

---

**Corollary.** *Ha $f \in C^n(a,b)$ és $x_i$ $(i = 0, \ldots, n)$ páronként különböző alappontok, akkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n \rangle$, hogy*

$$f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!}.$$

---
