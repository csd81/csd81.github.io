## 2.5. Newton-módszer

### 46. fólia — szakaszcím

**2.5. Newton-módszer**

### 47. fólia — Taylor-tétel

Idézzük fel a Taylor-tételt.

**Tétel (Taylor-tétel).** *Legyen $f\in C^{n+1}[a,b]$, és legyen $x_0\in(a,b)$. Ekkor minden $x\in(a,b)$-hez létezik olyan*

$$\xi=\xi(x)\in\langle x,x_0\rangle=(\min\{x,x_0\},\max\{x,x_0\}),$$

*hogy*

$$f(x)=T_n(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}, \qquad x\in[a,b],$$

*ahol*

$$T_n(x)=f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n.$$

### 48. fólia — Newton-iteráció definíciója

Oldjuk meg a

$$f(x)=0$$

egyenletet. Legyen $p_0$ rögzített, és tekintsük az

$$f(p_0)+f'(p_0)(x-p_0)=0$$

lineáris egyenletet. Ennek megoldása

$$x=p_0-\frac{f(p_0)}{f'(p_0)},$$

feltéve $f'(p_0)\neq 0$. A

$$p_{k+1}=p_k-\frac{f(p_k)}{f'(p_k)} \tag{6}$$

rekurziót *Newton–Raphson-módszernek* vagy *Newton-módszernek* vagy *érintőmódszernek* hívjuk.

### 49a. fólia — Newton 1. lépés

*Ábra (Newton-módszer: 1. lépés): piros görbe $y=f(x)$; az $(p_0,f(p_0))$ pontban húzott érintő (kék egyenes) metszi az $x$-tengelyt — ez a metszéspont $p_1$.*

### 49b. fólia — Newton 2. lépés

*Ábra (Newton-módszer: 2. lépés): ugyanaz a görbe, hozzávéve az $(p_1,f(p_1))$ pontban húzott zöld érintőt, ami az $x$-tengelyt $p_2$-ben metszi; $p_2$ már közel van a gyökhöz.*

### 50. fólia — Példa

**Példa.** A Newton-módszert alkalmazva oldjuk meg az $e^x-2\cos x=0$ egyenletet.

**Newton-módszer, $f(x)=e^x-2\cos x$, $p_0=0.1$, $TOL=10^{-5}$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.1000000000 | -8.8484e-01 |
| 1 | 0.7781206411 | 7.5291e-01 |
| 2 | 0.5678850726 | 7.8450e-02 |
| 3 | 0.5402639121 | 1.3139e-03 |
| 4 | 0.5397853041 | 3.9302e-07 |
| 5 | 0.5397851608 | 3.5207e-14 |

### 51. fólia — Newton mint fixpont-iteráció

A Newton-módszer egy fixpont iteráció a

$$g(x):=x-\frac{f(x)}{f'(x)} \tag{7}$$

iterációs függvénnyel. $g$-t differenciálva kapjuk

$$g'(x)=1-\frac{(f'(x))^2-f(x)f''(x)}{(f'(x))^2}=\frac{f(x)f''(x)}{(f'(x))^2}. \tag{8}$$

Legyen $p$ az $f$ függvény olyan gyöke, amelyre $f'(p)\neq 0$. Ekkor $g'(p)=0$, így a fixpont tételből rögtön következik:

**Tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a Newton-módszer lokálisan konvergál $p$-hez.*

---
### 52. fólia — arctan-példa

**Példa.** Tekintsük az $f(x)=0.5\arctan x$ függvényt. Ennek egyetlen gyöke $p=0$. $f'(0)=0.5$, így a Newton-módszer lokálisan konvergál $p=0$-hoz. Ellenőrizhető, hogy létezik olyan $p^*\approx 1.3918$, hogy $p_0=p^*$-ra a sorozat

$$p^*,-p^*,p^*,-p^*,\dots,$$

azaz periodikus. Továbbá, ha $|p_0|<p^*$, akkor $p_n\to 0$, és ha $|p_0|>p^*$, akkor $|p_n|\to\infty$.

*Ábra: a piros $y=0.5\arctan x$ görbéje, kék és zöld érintők a $\pm p^*$ pontokban, valamint a vízszintes vonalak $f(p^*)$ és $f(-p^*)$ szintjén — mutatja a periodikus pályát.*

Az alábbi táblázatban a $p_0=1.4$ kezdeti értékhez tartozó sorozat első néhány tagját nyomtattuk ki.

### 53. fólia — táblázat

**Newton-módszer, $f(x)=0.5\arctan x$, $p_0=1.4$**

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 1.4000000e+00 | 0.4752734 |
| 1 | -1.4136186e+00 | -0.4775591 |
| 2 | 1.4501293e+00 | 0.4835443 |
| 3 | -1.5506260e+00 | -0.4990071 |
| 4 | 1.8470541e+00 | 0.5372889 |
| 5 | -2.8935624e+00 | -0.6190257 |
| 6 | 8.7103258e+00 | 0.7282453 |
| 7 | -1.0324977e+02 | -0.7805557 |
| 8 | 1.6540564e+04 | 0.7853679 |
| 9 | -4.2972148e+08 | -0.7853982 |
| 10 | 2.9006412e+17 | 0.7853982 |
| 11 | -1.3216239e+35 | -0.7853982 |
| 12 | 2.7436939e+70 | 0.7853982 |
| 13 | -1.1824729e+141 | -0.7853982 |
| 14 | 2.1963537e+282 | 0.7853982 |

### 54. fólia — Newton hátrányai

A Newton-módszer gyors, de az alkalmazásához szükség van az $f'(x)$ képletére. Ez problémás, ha
- az $f$ képlete bonyolult, mert ekkor az $f'$ képlete nagyon hosszú is lehet,
- nincs képletünk $f$-re, de ki tudjuk értékelni az $f(x)$ függvényértékeket nagy pontossággal numerikusan.

---
