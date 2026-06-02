## 2.7. Konvergencia rendje

### 60. fólia — szakaszcím

**2.7. Konvergencia rendje**

### 61. fólia — definíció

Legyen $p_k$ egy konvergens sorozat, melynek határértéke $p$. A $p_k$ sorozat *konvergencia rendje* $\alpha$, ha $\alpha\geq 1$ és létezik olyan $c\geq 0$ szám, hogy

$$|p_{k+1}-p|\leq c|p_k-p|^\alpha \quad \text{minden } k\geq 0\text{-ra}, \tag{10}$$

és $\alpha=1$ esetén még azt is kikötjük, hogy $c<1$ legyen. A (10) egyenlőtlenséget felírhatjuk a következő alakban is:

$$\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\leq c, \qquad k\geq 0.$$

- A (10)-et teljesítő $p_k$ sorozatra azt mondhatjuk, hogy a konvergencia rendje *legalább* $\alpha$.
- Ha a $p_k$ sorozat a (10) egyenlőtlenséget teljesíti valamely $\alpha$-ra, de azt nem teljesíti egy $\alpha$-nál nagyobb kitevőre sem, akkor azt mondjuk, hogy a konvergencia rendje *pontosan* $\alpha$.
- Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$, akkor *lineáris*, ha $\alpha=2$, akkor *kvadratikus* konvergenciáról beszélünk.

### 62. fólia — lineáris konvergencia kibővített definíciója

Ha egy $p_k$ sorozat lineárisan konvergál $p$-hez, akkor könnyen látható, hogy teljesíti a

$$|p_k-p|\leq c|p_{k-1}-p|\leq c^2|p_{k-2}-p|\leq\dots\leq c^k|p_0-p|$$

egyenlőtlenségeket. Néhány módszer esetében nem könnyű a (10) típusú egyenlőtlenséget belátni az $\alpha=1$ esetben. Ezért a lineáris konvergencia előbbi általános definícióját kibővítjük úgy, hogy ha egy $p_k$ sorozat teljesíti a

$$|p_k-p|\leq c^k|p_0-p|$$

egyenlőtlenséget egy $0\leq c<1$ konstanssal, akkor is *lineáris konvergenciáról* beszélünk.

### 63. fólia — aszimptotikus hibakonstans, szuperlineáris

Tegyük fel, hogy $p_k\to p$, és a konvergencia rendje $\alpha$. A

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^\alpha} \tag{11}$$

véges határértéket, ha létezik, a $p_k$ sorozat *aszimptotikus hibakonstansának* nevezzük. Könnyen látható, hogy ha a (11) határérték létezik és véges, akkor a $p_k$ sorozat konvergencia rendje $\alpha$. Ha egy $p_k$ sorozat konvergencia rendje $\alpha=1$ és az aszimptotikus hibakonstansa 0, akkor *szuperlineáris* konvergenciáról beszélünk.

### 64. fólia — Tétel a rend egyértelműségéről

**Tétel.** *Tegyük fel, hogy a $p_k$ sorozat $\alpha$ rendben konvergál $p$-hez a $\lambda\neq 0$ aszimptotikus hibakonstanssal. Ekkor*
1. $\displaystyle\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=0$ *minden $\beta<\alpha$-ra, és*
2. $\displaystyle\lim_{k\to\infty}\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\infty$ *minden $\beta>\alpha$-ra.*

**Bizonyítás.** Az állítás következik a

$$\frac{|p_{k+1}-p|}{|p_k-p|^\beta}=\frac{|p_{k+1}-p|}{|p_k-p|^\alpha}\cdot\frac{1}{|p_k-p|^{\beta-\alpha}}$$

összefüggésből.

*Ha egy $p_k$ sorozat (legalább) $\alpha$ rendben konvergál, és az aszimptotikus hibakonstans létezik és nem 0, akkor a konvergencia rendje pontosan $\alpha$.*

### 65. fólia — Newton konvergencia rendje, példa

**Példa.** Tekintsük újra a korábbi példában vizsgált Newton-iterációt! Az alábbi táblázat utolsó három oszlopában feltüntettük a $|p_{k+1}-p|/|p_k-p|^\alpha$ kifejezések értékeit $\alpha=1,2$ és 3-ra, használva a $p=0.5397851608092811$ értéket.

**Newton-módszer konvergencia rendje, $f(x)=e^x-2\cos x$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ | $\alpha=3$ |
|---:|---|---|---|---|---|
| 0 | 0.0000000000 | -1.0000e+00 | | | |
| 1 | 1.0000000000 | 1.6377e+00 | 8.5259e-01 | 1.5795e+00 | 2.9262e+00 |
| 2 | 0.6279041258 | 2.5516e-01 | 1.9147e-01 | 4.1605e-01 | 9.0404e-01 |
| 3 | 0.5442066314 | 1.2164e-02 | 5.0176e-02 | 5.6941e-01 | 6.4619e+00 |
| 4 | 0.5397973257 | 3.3375e-05 | 2.7513e-03 | 6.2226e-01 | 1.4074e+02 |
| 5 | 0.5397851609 | 2.5388e-10 | 7.6071e-06 | 6.2533e-01 | 5.1404e+04 |

---
### 66. fólia — Tétel: $\alpha$-rendű konvergencia → lokális

**Tétel.** *Tegyük fel, hogy a $p_k$ sorozat teljesíti a (10) egyenlőtlenséget valamely $c\geq 0$-ra és $\alpha>1$-re. Ekkor a $p_n$ sorozat lokálisan konvergál a $p$ számhoz, valamint minden $k$-ra*

$$|p_k-p|\leq c^{\frac{\alpha^k-1}{\alpha-1}}|p_0-p|^{\alpha^k}. \tag{12}$$

**Bizonyítás.**

$$
\begin{aligned}
|p_k-p| &\leq c|p_{k-1}-p|^\alpha\leq c(c|p_{k-2}-p|^\alpha)^\alpha=c^{1+\alpha}|p_{k-2}-p|^{\alpha^2} \\
&\leq c^{1+\alpha+\alpha^2}|p_{k-3}-p|^{\alpha^3}\leq\dots\leq c^{1+\alpha+\alpha^2+\dots+\alpha^{k-1}}|p_0-p|^{\alpha^k},
\end{aligned}
$$

amiből következik a (12). Ekkor

$$|p_k-p|\leq c^{\frac{1}{1-\alpha}}\left(c^{\frac{1}{\alpha-1}}|p_0-p|\right)^{\alpha^k},$$

így ha $p_0$ olyan, hogy $c^{\frac{1}{\alpha-1}}|p_0-p|<1$, akkor $p_k\to p$, azaz $p_k$ lokálisan konvergál $p$-hez.

### 67. fólia — lineáris vs. kvadratikus, példa

**Példa.** Legyenek $p_k\to p$ és $q_k\to q$ lineárisan ill. kvadratikusan konvergáló sorozatok, amelyekre $c=1/2$. Továbbá tegyük fel, hogy $|p_0-p|<1$ és $|q_0-q|<1$. Ekkor kapjuk, hogy $|p_k-p|\leq (1/2)^k$ ill. $|q_k-q|\leq (1/2)^{2^k-1}$. Az alábbi táblázatban ezeket a hibakorlátokat soroltuk fel $k=1,2,\dots,5$-re.

| $k$ | $(1/2)^k$ | $(1/2)^{2^k-1}$ |
|---:|---|---|
| 1 | 5.0000⋅10⁻¹ | 5.0000⋅10⁻¹ |
| 2 | 2.5000⋅10⁻¹ | 1.2500⋅10⁻¹ |
| 3 | 1.2500⋅10⁻¹ | 7.8125⋅10⁻³ |
| 4 | 6.2500⋅10⁻² | 3.0518⋅10⁻⁵ |
| 5 | 3.1250⋅10⁻² | 4.6566⋅10⁻¹⁰ |
| 6 | 1.5625⋅10⁻² | 1.0842⋅10⁻¹⁹ |

### 68. fólia — fixpont iteráció rendje

**Tétel.** *Legyen $g\in C^m[a,b]$, $p\in(a,b)$ és $p=g(p)$. Tekintsük a $p_{k+1}=g(p_k)$ fixpont iterációt.*
1. *Ha $|g'(p)|<1$, akkor a fixpont iteráció lokálisan lineárisan konvergál $p$-hez.*
2. *Ha $g'(p)=g''(p)=\dots=g^{(m-1)}(p)=0$, akkor a fixpont iteráció lokálisan $m$-edrendben konvergál $p$-hez a $g^{(m)}(p)/m!$ aszimptotikus hibakonstanssal.*

### 69. fólia — Bizonyítás

**Bizonyítás.** A 2. állítás bizonyításához vegyük a $g$ függvény $p$-körüli $(m-1)$-edrendű Taylor-közelítését:

$$g(p_k)=g(p)+g'(p)(p_k-p)+\dots+\frac{g^{(m-1)}(p)}{(m-1)!}(p_k-p)^{m-1}+\frac{g^{(m)}(\xi_k)}{m!}(p_k-p)^m,$$

ahol $\xi_k\in\langle p_k,p\rangle$. Ebből következik, használva, hogy az első $m-1$ derivált 0 a $p$ pontban, $g(p)=p$ és $g(p_k)=p_{k+1}$, hogy

$$|p_{k+1}-p|=\frac{|g^{(m)}(\xi_k)|}{m!}|p_k-p|^m\leq c|p_k-p|^m. \tag{13}$$

Az utolsó becslésnél használtuk, hogy $g\in C^m[a,b]$, azaz $g^{(m)}$ folytonos, így korlátos $p$ egy környezetében. A (11) határérték létezése következik az előbbiekből, hiszen $\xi_k\to p$ ha $k\to\infty$, mivel $|\xi_k-p|\leq |p_k-p|$, és ezért

$$\lim_{k\to\infty}\frac{p_{k+1}-p}{(p_k-p)^m}=\lim_{k\to\infty}\frac{g^{(m)}(\xi_k)}{m!}=\frac{g^{(m)}(p)}{m!}.$$

### 70. fólia — többszörös gyök

A $p\in(a,b)$ számot az $f\in C[a,b]$ függvény *$m$-szeres gyökének* nevezzük, ha létezik olyan $q\in C[a,b]$ függvény, hogy $q(p)\neq 0$ és

$$f(x)=(x-p)^m q(x), \qquad x\in(a,b). \tag{14}$$

**Tétel.** *Legyen $f\in C^m[a,b]$, $p\in(a,b)$.*
1. *Legyen $p$ $m$-szeres gyöke $f$-nek, és a (14) azonosságot teljesítő $q$ függvény $m$-szer differenciálható. Ekkor*

$$f(p)=f'(p)=f''(p)=\dots=f^{(m-1)}(p)=0, \quad \text{és } f^{(m)}(p)\neq 0. \tag{15}$$

2. *Ha (15) teljesül, akkor $p$ $m$-szeres gyöke $f$-nek.*
3. *Tegyük fel, hogy az $f$ függvény akárhányszor differenciálható, $f$-et előállítja a $p$-körüli Taylor-sora, és $f$ teljesíti a (15) relációkat. Ekkor $p$ $m$-szeres gyöke $f$-nek, és a (14) azonosságot teljesítő $q$ függvény is akárhányszor differenciálható, valamint $q$ is Taylor-sorba fejthető $p$-körül.*

### 71. fólia — Newton rendje gyök multiplicitása szerint

**Tétel.** *Legyen $f\in C^2[a,b]$.*
1. *Ha $f(p)=0$ és $f'(p)\neq 0$, akkor a Newton-iteráció lokálisan kvadratikusan konvergál $p$-hez.*
2. *Ha $f(x)=(x-p)^m q(x)$, ahol $q\in C^2[a,b]$, $q(p)\neq 0$, $m>1$, akkor a Newton-iteráció lokálisan lineárisan konvergál $p$-hez.*

### 72. fólia — Bizonyítás

**Bizonyítás.** Az 1. állítás következik az előző tétel 2. állításából, hiszen a Newton-iteráció egy fixpont iteráció a (7) egyenlettel definiált $g$ iterációs függvénnyel, és $g'(p)=0$ a (8) reláció szerint.

Mivel a

$$g(x):=\begin{cases}x-\frac{f(x)}{f'(x)}, & x\neq p,\\ p, & x=p\end{cases}$$

függvényre

$$g(x)=x-\frac{(x-p)^m q(x)}{m(x-p)^{m-1}q(x)+(x-p)^m q'(x)}=x-\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $g$ folytonosan differenciálható $p$-ben, és kis számolással kapjuk

$$g'(p)=1-\frac{1}{m}.$$

Így az előző tétel 2. pontja szerint a konvergencia rendje lineáris.

### 73. fólia — Példa: $x^3+x^2-8x-12$

**Példa.** Keressük meg az $f(x)=x^3+x^2-8x-12$ polinom egy gyökét a Newton–Raphson-módszerrel, a $p_0=0$ és a $p_0=2$ kiindulási értéket és a $10^{-5}$ tolerancia értéket használva! Könnyen látható, hogy $x=-2$ kétszeres gyöke, $x=3$ pedig egyszeres gyöke a polinomnak.

### 74. fólia — táblázat, $p_0=0$

**Newton-módszer, $f(x)=x^3+x^2-8x-12$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 0.0000000000 | -1.2000e+01 | | |
| 1 | -1.5000000000 | -1.1250e+00 | 2.5000e-01 | 1.2500e-01 |
| 2 | -1.7647058824 | -2.6379e-01 | 4.7059e-01 | 9.4118e-01 |
| 3 | -1.8853313477 | -6.4237e-02 | 4.8734e-01 | 2.0712e+00 |
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
| 16 | -1.9999863259 | -9.3491e-10 | 5.0000e-01 | 1.8283e+04 |
| 17 | -1.9999931629 | -2.3373e-10 | 5.0000e-01 | 3.6565e+04 |

### 75. fólia — táblázat, $p_0=2$

**Newton-módszer, $f(x)=x^3+x^2-8x-12$**

| $k$ | $p_k$ | $f(p_k)$ | $\alpha=1$ | $\alpha=2$ |
|---:|---|---|---|---|
| 0 | 2.0000000000 | -1.6000e+01 | | |
| 1 | 4.0000000000 | 3.6000e+01 | 1.0000e+00 | 1.0000e+00 |
| 2 | 3.2500000000 | 6.8906e+00 | 2.5000e-01 | 2.5000e-01 |
| 3 | 3.0217391304 | 5.4821e-01 | 8.6957e-02 | 3.4783e-01 |
| 4 | 3.0001866020 | 4.6654e-03 | 8.5837e-03 | 3.9485e-01 |
| 5 | 3.0000000139 | 3.4816e-07 | 7.4632e-05 | 3.9996e-01 |
| 6 | 3.0000000000 | 1.9400e-15 | 5.5721e-09 | 4.0011e-01 |

### 76. fólia — szelőmódszer rendje

**Tétel.** *Ha $f$-nek $p$ egyszeres gyöke, akkor a szelőmódszer*

$$\alpha=\frac{1+\sqrt{5}}{2}\approx 1.618$$

*rendben lokálisan konvergál $p$-hez.*

### 77. fólia — módosított Newton többszörös gyökhöz

Legyen $f\in C^3[a,b]$, és tegyük fel, hogy $p\in(a,b)$ többszörös gyöke $f$-nek, pontosabban feltesszük, hogy $f(x)=(x-p)^m q(x)$ alakú, ahol $m>1$ és $q\in C^3[a,b]$. Definiáljuk a

$$\mu(x)=\begin{cases}\frac{f(x)}{f'(x)}, & \text{ha } x\neq p,\\ 0, & x=p\end{cases}$$

függvényt. Könnyen ellenőrizhető, hogy

$$\mu(x)=\frac{(x-p)q(x)}{mq(x)+(x-p)q'(x)},$$

ezért $\mu\in C^2[a,b]$, továbbá $\mu'(p)=\tfrac{1}{m}$, így $p$ csak egyszeres gyöke $\mu$-nek. Ezért ha $f$ helyett a $\mu$ függvényre alkalmazzuk a Newton-módszert, kvadratikus konvergenciát kapunk. Ennek a módszernek a definíciója tehát

$$p_{k+1}=p_k-\frac{\mu(p_k)}{\mu'(p_k)}=p_k-\frac{f(p_k)f'(p_k)}{(f'(p_k))^2-f(p_k)f''(p_k)}. \tag{16}$$

---
