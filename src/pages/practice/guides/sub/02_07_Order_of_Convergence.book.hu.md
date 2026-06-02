## 2.7. Konvergencia rendje

Az eddig vizsgált iterációs módszerekel alkalmazva tapasztaltuk, hogy a különböző módszerek eltérő sebességgel konvergálnak. A konvergencia gyorsaságának jellemzésére bevezetjük a konvergencia rendjének fogalmát.

Legyen $p_k$ egy konvergens sorozat, melynek határértéke $p$. A $p_k$ sorozat *konvergencia rendje* $\alpha$, ha $\alpha\geq 1$ és létezik olyan $c\geq 0$ szám, hogy

$$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{minden } k\geq 0\text{-ra}, \tag{2.16}$$

és $\alpha=1$ esetén még azt is kikötjük, hogy $c<1$ legyen.

Ha pontosabban akarunk fogalmazni, akkor a (2.16) egyenlőtlenséget teljesítő $p_k$ sorozatra azt mondhatjuk, hogy a konvergencia rendje *legalább* $\alpha$, hiszen elképzelhető, hogy a (2.16) egyenlőtlenséget $\alpha$-nál nagyobb kitevővel is teljesíti. Mi a „legalább" jelzőt elhagyjuk, de a konvergencia rend fogalmát ebben az értelemben használjuk. Ha azt szeretnénk hangsúlyozni, hogy a $p_k$ sorozat a (2.16) egyenlőtlenséget teljesíti valamely $\alpha$-ra, de azt nem teljesíti egy $\alpha$-nál nagyobb kitevőre sem, akkor azt mondjuk, hogy a konvergencia rendje *pontosan* $\alpha$.

Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$, akkor *lineáris*, ha $\alpha=2$, akkor *kvadratikus* konvergenciáról beszélünk.

Ha egy $p_k$ sorozat lineárisan konvergál $p$-hez, akkor könnyen látható, hogy teljesíti a

$$|p_k-p|\leq c^k|p_0-p| \tag{2.17}$$

becslést. Néhány módszer esetében nem könnyű a (2.16) típusú egyenlőtlenséget belátni az $\alpha=1$ esetben, viszont könnyebb a (2.17) egyenlőtlenséget igazolni. Ezért a lineáris konvergencia előbbi általános definícióját kibővítjük úgy, hogy ha egy $p_k$ sorozat teljesíti a (2.17) egyenlőtlenséget egy $0\leq c<1$ konstanssal, akkor is lineáris konvergenciáról beszélünk.

Tegyük fel, hogy $p_k\to p$, és a konvergencia rendje $\alpha$. A

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha} \tag{2.18}$$

véges határértéket, ha létezik, a $p_k$ sorozat *aszimptotikus hibakonstansának* nevezzük. Könnyen látható, hogy ha a (2.18) határérték létezik és véges, akkor a $p_k$ sorozat konvergencia rendje $\alpha$. Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$ és az aszimptotikus hibakonstansa 0, akkor *szuperlineáris* konvergenciáról beszélünk.

**2.28. tétel.** *Tegyük fel, hogy a $p_k$ sorozat $\alpha$ rendben konvergál $p$-hez a $\lambda\neq 0$ aszimptotikus hibakonstanssal. Ekkor*
1. $\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=0$ minden $\beta<\alpha$-ra, és
2. $\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\infty$ minden $\beta>\alpha$-ra.

**Bizonyítás.** Az állítás következik a

$$\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\cdot\frac{1}{|p_k-p|^{\beta-\alpha}}$$

összefüggésből. $\square$

A tételből következik, hogy ha egy $p_k$ sorozat (legalább) $\alpha$ rendben konvergál, és az aszimptotikus hibakonstans létezik és nem 0, akkor a konvergencia rendje pontosan $\alpha$.

**2.29. példa.** Tekintsük újra a 2.22. példában vizsgált Newton-iterációt! A 2.8. táblázat utolsó három oszlopában feltüntettük a $|p_{k+1}-p|/|p_k-p|^\alpha$ kifejezések értékeit $\alpha=1,2$ és 3-ra, használva a $p=0.5397851608092811$ értéket. Látható, hogy $\alpha=1$-re a kifejezés 0-hoz tart, $\alpha=2$-re korlátos marad, de nem tart 0-hoz, $\alpha=3$-ra pedig a végtelenbe tart. (Természetesen egy sorozat első 4 tagjából még nem tudunk messzemenő következtetéseket levonni, de ha több tagját generálnánk a sorozatnak, ellenőrizhetjük az előbb említett eredményt.) Úgy tapasztaljuk tehát, hogy a sorozat konvergencia rendje 2. $\square$

**2.8. táblázat.** Newton-módszer konvergencia rendje, $f(x)=e^x-2\cos x$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ | $\alpha=3$ |
|---:|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 | | | |
| 1 | 1.0000000000 | 1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 | 2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 | 1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 | 3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 | 2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

**2.30. tétel.** *Tegyük fel, hogy a $p_k$ sorozat teljesíti a (2.16) egyenlőtlenséget valamely $c\geq 0$-ra és $\alpha>1$-re. Ekkor a $p_n$ sorozat lokálisan konvergál a $p$ számhoz, valamint minden $k$-ra*

$$|p_k-p|\leq c^{\frac{\alpha^k-1}{\alpha-1}}|p_0-p|^{\alpha^k}. \tag{2.19}$$

**Bizonyítás.** Teljes indukcióval könnyen igazolható a (2.19) egyenlőtlenség. Ebből viszont következik, hogy

$$|p_k-p|\leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0-p|\right)^{\alpha^k},$$

így ha $p_0$ olyan, hogy $c^{\frac{1}{\alpha-1}}|p_0-p|<1$, akkor $p_k\to p$, azaz $p_k$ lokálisan konvergál $p$-hez. $\square$

**2.31. példa.** Legyenek $p_k\to p$ és $q_k\to q$ lineárisan ill. kvadratikusan konvergáló sorozatok, amelyek teljesítik a (2.17) ill. (2.16) egyenlőtlenségeket $c=1/2$-re. Továbbá tegyük fel, hogy $|p_0-p|<1$ és $|q_0-q|<1$. Ekkor a (2.17) és (2.19) egyenlőtlenségekből kapjuk, hogy $|p_k-p|\leq (1/2)^k$ ill. $|q_k-q|\leq (1/2)^{2^k-1}$. A 2.9. táblázatban ezeket a hibakorlátokat soroltuk fel $k=1,2,\dots,5$-re. Látható, hogy a hiba mennyivel gyorsabban csökken (azaz a konvergencia mennyivel gyorsabb) a kvadratikus esetben. $\square$

**2.9. táblázat.** Lineáris vs. kvadratikus konvergencia

| $k$ | $(1/2)^k$ | $(1/2)^{2^k-1}$ |
|---:|---|---|
| 1 | 5.0000⋅10⁻¹ | 5.0000⋅10⁻¹ |
| 2 | 2.5000⋅10⁻¹ | 1.2500⋅10⁻¹ |
| 3 | 1.2500⋅10⁻¹ | 7.8125⋅10⁻³ |
| 4 | 6.2500⋅10⁻² | 3.0518⋅10⁻⁵ |
| 5 | 3.1250⋅10⁻² | 4.6566⋅10⁻¹⁰ |
| 6 | 1.5625⋅10⁻² | 1.0842⋅10⁻¹⁹ |

**2.32. tétel.** *Legyen $g\in C^m[a,b]$, $p\in(a,b)$ és $p=g(p)$. Tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációt.*
1. *Ha $|g'(p)|<1$, akkor a fixpont iteráció lokálisan lineárisan konvergál $p$-hez.*
2. *Ha $g'(p)=g''(p)=\dots=g^{(m-1)}(p)=0$, akkor a fixpont iteráció lokálisan $m$-edrendben konvergál $p$-hez a $g^{(m)}(p)/m!$ aszimptotikus hibakonstanssal.*

**Bizonyítás.** Az 1. állítás a 2.15. tétel bizonyításából következik.

A 2. állítás bizonyításához vegyük a $g$ függvény $p$-körüli $(m-1)$-edrendű Taylor-közelítését:

$$g(p_k)=g(p)+g'(p)(p_k-p)+\dots+\frac{g^{(m-1)}(p)}{(m-1)!}(p_k-p)^{m-1}+\frac{g^{(m)}(\xi_k)}{m!}(p_k-p)^m,$$

ahol $\xi_k\in\langle p_k,p\rangle$. Ebből következik, használva, hogy az első $m-1$ derivált 0 a $p$ pontban, $g(p)=p$ és $g(p_k)=p_{k+1}$, hogy

$$|p_{k+1}-p|=\frac{|g^{(m)}(\xi_k)|}{m!}|p_k-p|^m\leq c|p_k-p|^m. \tag{2.20}$$

Az utolsó becslésnél használtuk, hogy $g\in C^m[a,b]$, azaz $g^{(m)}$ folytonos, így korlátos $p$ egy környezetében. A (2.18) határérték létezése következik az előbbiekből, hiszen $\xi_k\to p$ ha $k\to\infty$, mivel $|\xi_k-p|\leq|p_k-p|$, és ezért

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^m}=\lim_{k\to\infty}\frac{g^{(m)}(\xi_k)}{m!}=\frac{g^{(m)}(p)}{m!}.\quad\square$$

A tételből következik, hogy a fixpont iteráció konvergenciájának rendje mindig egész szám (feltéve hogy a $g$ függvény elegendően sokszor differenciálható). A 2.36. tételben meg fogjuk mutatni, hogy ez általában nem igaz többlépéses iterációs módszerekre.

Szükségünk lesz még a többszörös gyök fogalmára. A $p\in(a,b)$ számot az $f\in C[a,b]$ függvény $m$-szeres gyökének nevezzük, ha létezik olyan $q\in C[a,b]$ függvény, hogy $q(p)\neq 0$ és

$$f(x)=(x-p)^m q(x), \quad x\in(a,b). \tag{2.21}$$

Könnyen igazolható a következő állítás:

**2.33. tétel.** *Legyen $f\in C^m[a,b]$, $p\in(a,b)$.*
1. *Legyen $p$ $m$-szeres gyöke $f$-nek, és a (2.21) azonosságot teljesítő $q$ függvény $m$-szer differenciálható. Ekkor*

$$f(p)=f'(p)=f''(p)=\dots=f^{(m-1)}(p)=0, \quad \text{és } f^{(m)}(p)\neq 0. \tag{2.22}$$

2. *Ha (2.22) teljesül, akkor $p$ $m$-szeres gyöke $f$-nek.*
3. *Tegyük fel, hogy az $f$ függvény akárhányszor differenciálható, $f$-et előállítja a $p$-körüli Taylor-sora, és $f$ teljesíti a (2.22) relációkat. Ekkor $p$ $m$-szeres gyöke $f$-nek, és a (2.21) azonosságot teljesítő $q$ függvény is akárhányszor differenciálható, valamint $q$ is Taylor-sorba fejthető $p$-körül.*

A következő tétel szerint ha $f$-nek $p$ egyszeres gyöke, akkor a Newton-módszer kvadratikusan, ha pedig többszörös gyöke, akkor lineárisan konvergál.

**2.34. tétel.** *Legyen $f\in C^2[a,b]$.*
1. *Ha $f(p)=0$ és $f'(p)\neq 0$, akkor a Newton-iteráció lokálisan kvadratikusan konvergál $p$-hez.*
2. *Ha $f(x)=(x-p)^m q(x)$, ahol $q\in C^2[a,b]$, $q(p)\neq 0$, $m>1$, akkor a Newton-iteráció lokálisan lineárisan konvergál $p$-hez.*

**Bizonyítás.** Az 1. állítás következik a 2.32. tétel 2. állításából, hiszen a Newton-iteráció egy fixpont iteráció a (2.8) egyenlettel definiált $g$ iterációs függvénnyel, és $g'(p)=0$ a (2.9) reláció szerint.

Mivel a

$$g(x):=\begin{cases}x-\frac{f(x)}{f'(x)}, & x\neq p,\\ p, & x=p\end{cases}$$

függvényre

$$g(x)=x-\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $g$ folytonosan differenciálható $p$-ben, és $g'(p)=1-\tfrac{1}{m}$. Így a 2.32. tétel 2. pontja szerint a konvergencia rendje lineáris. $\square$

**2.35. példa.** Keressük meg az $f(x)=x^3+x^2-8x-12$ polinom egy gyökét a Newton–Raphson-módszerrel, a $p_0=0$ kiindulási értékkel és a $10^{-5}$ tolerancia értéket használva! Könnyen látható, hogy $x=-2$ kétszeres gyöke, $x=3$ pedig egyszeres gyöke a polinomnak. A 2.10. táblázatban található futásnál a $p_0=0$ kezdőértékkel indultunk. Az 2.11. táblázat generálásakor pedig a $p_0=2$ kezdőértékkel indultunk. Az első esetben a sorozat $-2$-höz konvergál, a második esetben pedig 3-hoz. A táblázatokból látható, hogy az első esetben csak lineáris, a másodikban pedig kvadratikus a konvergencia rendje. $\square$

**2.10. táblázat.** Newton-módszer, $f(x)=x^3+x^2-8x-12$, $p_0=0$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 0.0000000000 | -1.2000e+01 | | |
| 1 | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2 | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3 | -1.8853313478 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
| 4 | -1.9433465411 | -1.5866e-02 | 4.9406e-01 | 4.3086e+00 |
| 5 | -1.9718365260 | -3.9436e-03 | 4.9712e-01 | 8.7747e+00 |
| 6 | -1.9859585260 | -9.8308e-04 | 4.9858e-01 | 1.7703e+01 |
| 7 | -1.9929890302 | -2.4542e-04 | 4.9929e-01 | 3.5558e+01 |
| 8 | -1.9964969780 | -6.1313e-05 | 4.9965e-01 | 7.1267e+01 |
| 9 | -1.9982491032 | -1.5323e-05 | 4.9982e-01 | 1.4268e+02 |
| 10 | -1.9991247050 | -3.8300e-06 | 4.9991e-01 | 2.8552e+02 |
| 11 | -1.9995623908 | -9.5743e-07 | 4.9996e-01 | 5.7119e+02 |
| 12 | -1.9997812050 | -2.3935e-07 | 4.9998e-01 | 1.1425e+03 |
| 13 | -1.9998906049 | -5.9835e-08 | 4.9999e-01 | 2.2852e+03 |
| 14 | -1.9999453030 | -1.4959e-08 | 4.9999e-01 | 4.5705e+03 |
| 15 | -1.9999726517 | -3.7396e-09 | 5.0000e-01 | 9.1412e+03 |
| 16 | -1.9999863269 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

**2.11. táblázat.** Newton-módszer, $f(x)=x^3+x^2-8x-12$, $p_0=2$

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 | | |
| 1 | 4.0000000000 | 3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 | 6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 | 5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 | 4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 | 3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 | 1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

**2.36. tétel.** *Ha $f$-nek $p$ egyszeres gyöke, akkor a szelőmódszer $\alpha=(1+\sqrt{5})/2\approx 1.618$ rendben lokálisan konvergál $p$-hez.*

**Bizonyítás.** Használjuk a 2.27. tétel bizonyításában bevezetett jelöléseket és az ott kapott eredményeket. A (2.13) egyenlőtlenség szerint

$$|p_{k+1}-p|\leq M|p_k-p||p_{k-1}-p|.$$

Ebből kiindulva, és a $|p_k-p|\leq \tfrac{1}{M}\varepsilon^{q_k}$ becslést használva kapjuk

$$
\begin{aligned}
|p-p_{k+1}| &\leq |p_k-p|^{r_0} M |p_k-p|^{1-r_0}|p_{k-1}-p| \\
&\leq |p_k-p|^{r_0} M \left(\tfrac{1}{M}\varepsilon^{q_k}\right)^{1-r_0}\tfrac{1}{M}\varepsilon^{q_{k-1}} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{q_k+q_{k-1}-r_0 q_k} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{q_{k+1}-r_0 q_k} \\
&= |p_k-p|^{r_0} M^{r_0-1}\varepsilon^{r_1^{k+1}}.
\end{aligned}
$$

Megjegyezzük, hogy az utolsó lépés a (2.15) egyenlőségből következik (kis számolással). Mivel $r_1^{k+1}\to 0$ ha $k\to\infty$, kapjuk, hogy létezik olyan $c$ konstans, hogy $|p-p_{k+1}|\leq c|p_k-p|^{r_0}$, azaz a konvergencia rendje $r_0=\tfrac{1+\sqrt{5}}{2}$. $\square$

Láttuk, hogy a Newton-módszer többszörös gyökökre alkalmazva csak lineárisan konvergál. Belátható, hogy ez a szelőmódszerre is érvényes. Most azzal foglalkozunk, hogy lehet ezekben az esetekben felgyorsítani a konvergenciát. Legyen $f\in C^3[a,b]$, és tegyük fel, hogy $p\in(a,b)$ többszörös gyöke $f$-nek, pontosabban feltesszük, hogy $f(x)=(x-p)^m q(x)$ alakú, ahol $m>1$ és $q\in C^3[a,b]$. Definiáljuk a

$$\mu(x)=\begin{cases}\frac{f(x)}{f'(x)}, & x\neq p,\\ 0, & x=p\end{cases}$$

függvényt. Könnyen ellenőrizhető, hogy

$$\mu(x)=\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $\mu\in C^2[a,b]$, továbbá $\mu'(p)=\tfrac{1}{m}$, így $p$ csak egyszeres gyöke $\mu$-nek. Ezért ha $f$ helyett a $\mu$ függvényre alkalmazzuk a Newton-módszert, kvadratikus konvergenciát kapunk. Ennek a módszernek a definíciója tehát

$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}. \tag{2.23}$$

**Feladatok**

1. Mutassa meg, hogy az intervallumfelezés módszere lineárisan konvergens!
2. Lássa be a (2.19) egyenlőtlenséget!
3. Legyen $a>0$. Mutassa meg, hogy a

$$p_{k+1}=\frac{p_k(p_k^2+3a)}{3p_k^2+a}$$

egy harmadrendű lokálisan konvergens iterációs módszer $\sqrt{a}$ kiszámolására!

4. Adja meg a $p_k=\tfrac{1}{k}$ sorozat konvergencia rendjét! Mi a konvergencia rendje a $p_k=\tfrac{1}{k^n}$ sorozatnak?
5. Mutassa meg, hogy a $p_k=10^{-2^k}$ sorozat másodrendben konvergál 0-hoz! Adjon meg egy olyan sorozatot, amely $\alpha$-ad rendben konvergens!
6. Mutassa meg, hogy a $\sin^2 x$ függvénynek $x=0$ kétszeres gyöke!
7. Igazolja a 2.33. tételt!
8. Tekintsük a következő iterációs módszereket:
   - (a) (Halley-módszer:) $p_{k+1}=p_k-\frac{1}{a_k}$, ahol $a_k=\frac{f'(p_k)}{f(p_k)}-\tfrac{1}{2}\frac{f''(p_k)}{f'(p_k)}$,
   - (b) (Olver-módszer:) $p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)}-\tfrac{1}{2}\frac{f''(p_k)}{f'(p_k)}\left(\frac{f(p_k)}{f'(p_k)}\right)^2$,

   Határozza meg az egyes módszerek konvergencia rendjét! Alkalmazza ezeket a módszereket a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
9. Keresse meg az $f(x)=(x^2-2)^3$ függvény egy gyökét a Newton-iterációval, a szelőmódszerrel, a (2.23) iterációval és a

$$p_{k+1}=p_k-m\frac{f(p_k)}{f'(p_k)}$$

iterációval, ahol $m$ a gyök multiplicitása! Hasonlítsa össze a módszerek konvergenciájának sebességét! Mi ez utóbbi módszer konvergenciájának rendje?

10. Tegyük fel, hogy egy $f$ függvénynek már meghatároztuk az $x_1$ közelítő gyökét. Ha ezután egy $g(x)=f(x)/(x-x_1)$ függvényre alkalmazunk egy gyökkereső eljárást, akkor azzal $f$ egy másik gyökét (vagy $x_1$-et újra, ha $x_1$ többszörös gyök volt) megkaphatjuk. Ezzel az ún. *deflációs* eljárással határozza meg az
   - (a) $f(x)=x^3-3x^2+4$,  (b) $f(x)=x^4-5x^3+9x^2-7x+2$

   polinomok összes gyökét az egyes gyökök multiplicitásával együtt, tetszőleges gyökkereső algoritmust használva!

---
