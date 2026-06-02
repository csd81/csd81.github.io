## 10.5. Runge–Kutta-módszerek

A Taylor-módszer nehézsége az, hogy a módszer alkalmazásához ki kell számítani az $f^{(i)}$ deriváltakat, amikor könnyen kaphatunk olyan bonyolult képleteket, amelyek kiértékelése jelentős gépidőt igényelhet, és a sok aritmetikai művelet elvégzése közben a számolási hibák felhalmozódásától is tarthatunk. A *Runge–Kutta-módszerek* a Taylor-módszerek számolási igényét igyekeznek csökkenteni, megőrizve azok magasrendű konvergenciáját. Az alapötletet először másodrendű esetben mutatjuk meg.

Legyen $f \in C^2$, és tekintsük a másodrendű Taylor-módszert definiáló

$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right)$$

függvényt! (Itt is, mint eddig, $\frac{\partial f}{\partial y}$ jelöli az $f$ függvény második változó szerinti parciális deriváltját.) Hasonlítsuk össze ezt a képletet a következő Taylor-formulával:

$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + E(t, z, a, b),$$

ahol a hibatag másodrendű, azaz

$$E(t, z, a, b) = \frac{1}{2}\left(\frac{\partial^2 f}{\partial t^2}(\xi, \eta)a^2 + 2\frac{\partial^2 f}{\partial t \partial y}(\xi, \eta)ab + \frac{\partial^2 f}{\partial y^2}(\xi, \eta)b^2\right) \tag{10.22}$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

182 — *10. Közönséges differenciálegyenletek*

valamely $\xi \in \langle t, t + a \rangle$ és $\eta \in \langle z, z + b \rangle$-re. Ha az $a = h/2$ és $b = f(t, z)h/2$ paraméter választást használjuk, kapjuk hogy

$$f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right) = F(t, z; h) + E\left(t, z, \frac{h}{2}, \frac{h}{2}f(t, z)\right),$$

azaz $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ „lényeges része" megegyezik $F(t, z; h)$-val. Jelentős különbség viszont, hogy $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$-t sokkal egyszerűbb kiszámolni, mint $F(t, z; h)$-t. Ez adja az ötletet, hogy tekintsük a

$$z_{i+1} = z_i + hf\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right), \quad i = 0, 1, 2, \ldots, \qquad z_0 = y_0 \tag{10.23}$$

közelítő módszert. Ezt a módszert *felezőpont-módszernek* nevezzük. Legyen $\tau_{i+1}$ a felezőpont-módszer, $\bar{\tau}_{i+1}$ pedig a másodrendű Taylor-módszer $(i+1)$-edik lokális képlethibája. Ekkor

$$
\begin{aligned}
\tau_{i+1} &= \frac{y(t_{i+1}) - y(t_i)}{h} - f\left(t_i + \frac{h}{2}, y(t_i) + \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \bar{\tau}_{i+1} - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right).
\end{aligned}
$$

Az előző szakaszból ismert, hogy $|\bar{\tau}_{i+1}| \le \bar{K}h^2$, és (10.22) valamint $f \in C^2$ biztosítja, hogy létezik olyan $\tilde{K}$, hogy $\left|E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right)\right| \le \tilde{K}h^2$. Ebből viszont következik, hogy $|\tau_{i+1}| \le (\bar{K} + \tilde{K})h^2$, és így a (10.23) módszer másodrendben konvergál, feltéve, hogy a 10.7. tételben a Lipschitz-feltétel is teljesül. Ez a feltétel nyilvánvalóan teljesül, ha feltesszük, hogy $f$ Lipschitz-tulajdonságú a második változójában. (Lásd a 2. feladatot!)

Az előzőekkel analóg módon definiáljuk $F$-et a következő módon:

$$
\begin{aligned}
F(t, z; h) &:= \sum_{j=1}^{p}\gamma_j G_j(t, z; h), \\
G_1(t, z; h) &:= f(t, z), \\
G_j(t, z; h) &:= f\left(t + \alpha_j h, z + h\sum_{k=1}^{j-1}\beta_{jk}G_k(t, z; h)\right), \qquad j = 2, 3, \ldots, p.
\end{aligned}
\tag{10.24}
$$

A (10.18) és (10.24) képletekkel definiált módszerek osztályát *(explicit) Runge–Kutta-módszereknek* nevezzük. A cél úgy megválasztani a képletekben szereplő paramétereket, hogy a lehető legmagasabb rendű lokális képlethibát kapjuk.

Tekintsük most a $p = 2$ esetet. Erre

$$F(t, z; h) = \gamma_1 f(t, z) + \gamma_2 f(t + \alpha_1 h, z + \beta_{21}hf(t, z)).$$

(Ha $\gamma_1 = 0$, $\gamma_2 = 1$, $\alpha_1 = \beta_{21} = 1/2$, akkor visszakapjuk a felezőpont-módszert.) Próbáljuk meg úgy megválasztani a paramétereket, hogy harmadrendű lokális hibát kapjunk. Alkalmazzuk a másodrendű Taylor-formulát a jobb oldalra:

$$
\begin{aligned}
F(t, z; h) &= (\gamma_1 + \gamma_2)f(t, z) + h\gamma_2\left(\alpha_1\frac{\partial f}{\partial t}(t, z) + \beta_{21}f(t, z)\frac{\partial f}{\partial y}(t, z)\right) \\
&\quad + \frac{h^2}{2}\gamma_2\left(\alpha_1^2\frac{\partial^2 f}{\partial t^2}(t, z) + 2\alpha_1\beta_{21}f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z) \right. \\
&\quad \left. + \beta_{21}^2(f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z)\right) + E(t, z, \alpha_1 h, \beta_{21}hf(t, z)),
\end{aligned}
\tag{10.25}
$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.5. Runge–Kutta-módszerek* — 183

ahol $E$ a harmadrendű hibatag. Hasonlítsuk ezt össze a harmadrendű Taylor-módszert definiáló

$$
\begin{aligned}
\tilde{F}(t, z; h) &= f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \\
&\quad + \frac{h^2}{6}\left(\frac{\partial^2 f}{\partial t^2}(t, z) + 2f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z) \right. \\
&\quad \left. + (f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z) + \frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z) + \left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)\right)
\end{aligned}
\tag{10.26}
$$

függvénnyel. Láthatjuk, hogy $F$ legfeljebb másodrendű tagjai mind szerepelnek $\tilde{F}$ képletében. Fordítva ez nem teljesül: a (10.26)-ban szereplő $\frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z)$ és $\left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)$ tagoknak nincs megfelelőjük (10.25)-ben. Ez azt jelenti, hogy nem tudunk minden $h$-ban másodrendű tagot helyettesíteni $F$ másodrendű tagjaival. A kapott képlet így csak másodrendű lehet. Próbáljuk meg azért a lehető legtöbb másodrendű tagot előállítani. Olyan paramétereket keresünk, amelyeknél a (10.25) és (10.26) nullad- és elsőfokú tagjai megegyeznek, azaz:

$$\gamma_1 + \gamma_2 = 1, \qquad \gamma_2\alpha_1 = \frac{1}{2}, \qquad \gamma_2\beta_{21} = \frac{1}{2}, \tag{10.27}$$

valamint a megfelelő másodrendű tagok együtthatói is megegyeznek:

$$\frac{\gamma_2}{2}\alpha_1^2 = \frac{1}{6}, \qquad \gamma_2\alpha_2\beta_{21} = \frac{1}{3}, \qquad \frac{\gamma_2}{2}\beta_{21}^2 = \frac{1}{6}. \tag{10.28}$$

Látható, hogy például $\gamma_1 = \gamma_2 = 1/2$, $\alpha_1 = \beta_{21} = 1$ paraméterek megoldásai (10.27)-nek, de nem teljesítik (10.28) egyenleteket. Viszont mivel a Taylor-módszer minden legfeljebb elsőrendű tagját visszakapjuk, így a felező-módszerhez hasonlóan belátható, hogy másodrendű módszert kapunk. Ezt a

$$z_{i+1} = z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i))\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = y_0 \tag{10.29}$$

formulával definiált módszert *módosított Euler-módszernek* nevezzük.

Ha a paramétereknek a $\gamma_1 = 1/4$, $\gamma_2 = 3/4$ és $\alpha_1 = \beta_{21} = 2/3$ értékeket választjuk, akkor mind a (10.27) és (10.28) egyenletek teljesülnek. Az ehhez tartozó módszer, az ún. *Heun-módszer* definíciója tehát:

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{4}\left(f(t_i, z_i) + 3f\left(t_i + \frac{2h}{3}, z_i + \frac{2}{3}hf(t_i, z_i)\right)\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0.
\end{aligned}
\tag{10.30}
$$

Mindkét módszer ún. másodrendű Runge–Kutta-képlet (mivel másodrendű lokális képlethibával rendelkeznek).

A módosított Euler-módszerhez is rendelhetünk geometriai tartalmat: tegyük fel, hogy az $i$-edik lépésben már kiszámítottuk a $(t_i, z_i)$ pontot. Ha az Euler-lépéssel folytatnánk a generálást, akkor az $f(t_i, z_i)$ iránytangensű egyenes mentén a $(t_{i+1}, w_{i+1})$ pontba lépnénk tovább, ahol $w_{i+1} := z_i + hf(t_i, z_i)$. Ehelyett vesszük ebben a pontban a megoldás iránytangensét, $f(t_{i+1}, w_{i+1})$-et, és képezzük a $(f(t_i, z_i) + f(t_{i+1}, w_{i+1}))/2$ átlagos iránytangenst, és az ez által meghatározott irányban lépünk $(t_i, z_i)$-ből a $t_{i+1}$ első koordinátájú pontba. Lásd a 10.1. ábrát!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

184 — *10. Közönséges differenciálegyenletek*

![10.1. ábra. A módosított Euler-módszer geometriai interpretációja — A $(t_i, z_i)$ pontból három irányba mutató szakaszok: a folytonos nyíl a $(t_{i+1}, z_{i+1})$ átlagos iránytangensű pontba, a szaggatott nyíl a $(t_{i+1}, w_{i+1})$ Euler-lépés pontjába, a pontozott nyíl a végponti iránytangens irányába.](kep_10_1.png)

**10.1. ábra.** A módosított Euler-módszer geometriai interpretációja

Az eddig megadott néhány képlethez hasonló módon levezethető számos más Runge–Kutta típusú módszer. Belátható, hogy a különböző $p$ értékekhez tartozó (10.24) képletekkel definiált Runge–Kutta-módszerekkel a következő maximális rendű lokális képlethibákat lehet elérni:

| $p$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| a módszer maximális rendje | 1 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |

Az egyik legnépszerűbb (10.24) típusú módszer, a „klasszikus" Runge–Kutta-módszer definíciója:

$$
\begin{aligned}
z_0 &= y_0, \\
w_{i,1} &= f(t_i, z_i), \\
w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right), \\
w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right), \\
w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right), \\
z_{i+1} &= z_i + \frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}), \qquad i = 0, 1, 2, \ldots.
\end{aligned}
\tag{10.31}
$$

Ez a módszer negyedrendű lokális képlethibával rendelkezik (feltéve, hogy $f \in C^5$). A módszer levezetését és a képlethiba rendjének bizonyítását itt nem közöljük.

**10.9. példa.** A (10.8) feladatra alkalmaztuk a módosított Euler-, Heun- és a klasszikus negyedrendű Runge–Kutta-módszereket a $h = 0.2$-es lépésközt használva. A kapott numerikus eredmények a 10.4. táblázatban találhatók. $\square$

### Feladatok

1. Ismételje meg a 10.2. szakasz 1. feladatát felezőpont-, módosított Euler-, Heun- és a klasszikus negyedrendű Runge–Kutta-módszereket használva!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.5. Runge–Kutta-módszerek* — 185

**10.4. táblázat. Runge–Kutta-módszerek**

| | | módosított Euler | | Heun | | klasszikus | |
|------|---------|--------|------------------|--------|------------------|--------|------------------|
| $t_i$ | $y(t_i)$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.0000 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 |
| 0.2 | 1.5082 | 1.5005 | 7.6753e-03 | 1.5042 | 3.9753e-03 | 1.5082 | 1.1773e-05 |
| 0.4 | 2.1745 | 2.1570 | 1.7415e-02 | 2.1663 | 8.2078e-03 | 2.1744 | 2.6024e-05 |
| 0.6 | 2.8799 | 2.8505 | 2.9398e-02 | 2.8679 | 1.1995e-02 | 2.8798 | 4.2338e-05 |
| 0.8 | 3.4470 | 3.4035 | 4.3486e-02 | 3.4331 | 1.3882e-02 | 3.4469 | 5.9304e-05 |
| 1.0 | 3.6109 | 3.5521 | 5.8862e-02 | 3.5998 | 1.1100e-02 | 3.6109 | 7.3610e-05 |

2. Bizonyítsa be, hogy ha $f$ Lipschitz-tulajdonságú a második változójában, akkor a felezőpont-módszert definiáló

$$F(t, z; h) = \frac{1}{2}f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$$

függvény is Lipschitz-tulajdonságú a második változójában.

3. Az Euler-módszer 3. levezetéséhez hasonló módon vezesse le a (10.29) képletet!

4. Mutassa meg, hogy felezőpont-, módosított Euler- és a Heun-módszer minden lépésköz esetén ugyanazt a közelítő megoldást generálja az

$$y' = 2 - t - y, \qquad y(0) = 1$$

kezdeti érték problémára!

5. Keressen geometriai jelentést a klasszikus negyedrendű Runge–Kutta-módszerhez!

6. Igazolja, hogy ha $f$ csak $t$-től függ, akkor a klasszikus negyedrendű Runge–Kutta-módszer a Simpson-féle kvadratúra formulára redukálódik!

7. Fogalmazza meg a klasszikus negyedrendű Runge–Kutta-módszert differenciálegyenlet-rendszerekre!

8. Oldja meg a 10.2. szakasz 3. és 4. feladataiban szereplő kezdeti érték problémákat negyedrendű Runge–Kutta-módszerrel!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*
