# Elemi függvények, függvénytranszformációk

<!-- OCR of "elemi fv-ek_ fvtranszf.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 27 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Függvénytani alapfogalmak

- **Függvény:** két halmaz elemei közötti egyértelmű hozzárendelés. Jel.: $f:A\to B$
  Elnevezések:
  - **Értelmezési tartomány:** $A$, jel.: $D_f$
  - **Képhalmaz:** $B$
  - **Értékkészlet:** $B$ azon elemei, amelyeket $f$ hozzárendel az $A$ elemeihez. Jel.: $R_f$
- **Függvények jellemzése:** (valós-valós függvényekre)
  - **Zérushely:** az értelmezési tartomány olyan $x_0$ eleme, melyre $f(x_0)=0$ (a függvény grafikonja ebben a pontban metszi vagy érinti az $x$ tengelyt).
  - **Szélsőérték:** maximum vagy minimum, mindkettő lehet abszolút (globális) szélsőérték, vagy lokális szélsőérték.

### Függvénytani alapfogalmak (folyt.)

**Monotonitás:** Egy $f$ függvény egy intervallumon monoton növekvő, ha az intervallumon értelmezve van, és ha az intervallumbeli $x_1$ és $x_2$ pontokra $x_1<x_2$ teljesül, akkor $f(x_1)\le f(x_2)$.
Hasonlóan értelmezhető:
- egy intervallumon monoton csökkenő
- egy intervallumon szigorúan monoton növekvő
- egy intervallumon szigorúan monoton csökkenő függvény.

Megjegyzés: az intervallum lehet az egész értelmezési tartomány is.

**Periodicitás:** Egy $f$ függvény periodikus, ha van olyan $c>0$ szám, melyre teljesül, hogy ha $x\in D_f$, akkor $x\pm c\in D_f$ is teljesül és $f(x\pm c)=f(x)$. Az ilyen tulajdonságú $c$ számok közül a legkisebbet – ha létezik – az $f$ függvény periódusának hívjuk.

### Függvénytani alapfogalmak (folyt.)

**Paritás:** paritás szempontjából a függvények háromfélék lehetnek:
- páros
- páratlan
- se nem páros, se nem páratlan.

Az $f$ függvény **páros**, ha $x\in D_f$ esetén $-x\in D_f$ is teljesül és $f(-x)=f(x)$. A páros függvények grafikonja szimmetrikus az $y$ tengelyre.

Az $f$ függvény **páratlan**, ha $x\in D_f$ esetén $-x\in D_f$ is teljesül és $f(-x)=-f(x)$. A páratlan függvények grafikonja szimmetrikus az origóra.

## Konstans függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto c\quad\text{vagy}\quad f(x)=c,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=\{c\}$
- grafikonja az $x$ tengellyel párhuzamos egyenes
- zérushely: ha $c=0$, akkor $\forall x\in\mathbb{R}$; ha $c\ne 0$, akkor nincs

## Elsőfokú függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto m\cdot x+b\quad\text{vagy}\quad f(x)=m\cdot x+b,\ x\in\mathbb{R},\ (m\ne 0)$$
- $D_f=\mathbb{R}$, $R_f=\mathbb{R}$
- grafikonja egyenes, amely az $y$ tengelyt $b$-nél metszi és meredeksége $m$
- zérushely: $x=-b/m$
- monotonitás: ha $m>0$: szig. mon. növekedő $\mathbb{R}$-en; ha $m<0$: szig. mon. csökkenő $\mathbb{R}$-en.
- (pl. $f(x)=2x+3$; $f(x)=-x+2$)

## Másodfokú függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto x^2\quad\text{vagy}\quad f(x)=x^2,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=[0,\infty)$
- grafikonja normálparabola
- zérushely: $x=0$
- monotonitás: $(-\infty,0]$-en szig. mon. csökken, $[0,\infty)$-en szig. mon. nő.
- abszolút minimum: helye $x=0$, értéke $y=f(0)=0$
- páros függvény

## Harmadfokú függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto x^3\quad\text{vagy}\quad f(x)=x^3,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=\mathbb{R}$
- zérushely: $x=0$
- monotonitás: szig. mon. nő $\mathbb{R}$-en
- páratlan függvény

## Gyökfüggvény

$$f:\mathbb{R}_0^+\to\mathbb{R},\ x\mapsto\sqrt x\quad\text{vagy}\quad f(x)=\sqrt x,\ x\ge 0$$
- $D_f=[0,\infty)$, $R_f=[0,\infty)$
- zérushely: $x=0$
- monotonitás: szig. mon. nő $[0,\infty)$-en
- abszolút minimum: helye $x=0$, értéke $y=f(0)=0$

## Köbgyök-függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto\sqrt[3]{x}\quad\text{vagy}\quad f(x)=\sqrt[3]{x},\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=\mathbb{R}$
- zérushely: $x=0$
- monotonitás: szig. mon. nő $\mathbb{R}$-en
- páratlan függvény

## Abszolútérték-függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto|x|\quad\text{vagy}\quad f(x)=|x|,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=[0,\infty)$
- zérushely: $x=0$
- monotonitás: $(-\infty,0]$-en szig. mon. csökken, $[0,\infty)$-en szig. mon. nő.
- abszolút minimum: helye $x=0$, értéke $y=f(0)=0$
- páros függvény

## Lineáris törtfüggvény

$$f:\mathbb{R}\setminus\{0\}\to\mathbb{R},\ x\mapsto\frac1x\quad\text{vagy}\quad f(x)=\frac1x,\ x\in\mathbb{R}\setminus\{0\}$$
- $D_f=\mathbb{R}\setminus\{0\}$, $R_f=\mathbb{R}\setminus\{0\}$
- zérushely: nincs
- monotonitás: $(-\infty,0)$-n szig. mon. csökken, $(0,\infty)$-en szig. mon. csökken.
- páratlan függvény

## Exponenciális függvény

$$f:\mathbb{R}\to\mathbb{R},\ x\mapsto a^x\quad\text{vagy}\quad f(x)=a^x,\ x\in\mathbb{R}\quad(a>0,\ a\ne 1)$$
- $D_f=\mathbb{R}$, $R_f=\mathbb{R}^+$
- zérushely: nincs
- monotonitás: ha $a>1$: szig. mon. nő; ha $0<a<1$: szig. mon. csökken.
- (pl. $f(x)=2^x$; $f(x)=(\tfrac12)^x$)

## Logaritmus függvény

$$f:\mathbb{R}^+\to\mathbb{R},\ x\mapsto\log_a x\quad\text{vagy}\quad f(x)=\log_a x,\ x\in\mathbb{R}^+\quad(a>0,\ a\ne 1)$$
- $D_f=\mathbb{R}^+$, $R_f=\mathbb{R}$
- zérushely: $x=1$
- monotonitás: ha $a>1$: szig. mon. nő; ha $0<a<1$: szig. mon. csökken.
- (pl. $f(x)=\log_2 x$; $f(x)=\log_{1/2}x$)

## Szinuszfüggvény

$$f(x)=\sin x,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=[-1,1]$
- zérushely: $x=k\cdot\pi$, $k\in\mathbb{Z}$
- monotonitás: $[\pi/2+2k\pi,\ 3\pi/2+2k\pi]$-n szig. mon. csökken, $[-\pi/2+2k\pi,\ \pi/2+2k\pi]$-n szig. mon. nő.
- abszolút maximum: helye $x=\pi/2+2k\pi$, értéke $y=1$
- abszolút minimum: helye $x=3\pi/2+2k\pi$, értéke $y=-1$
- páratlan függvény
- periodikus, periódusa: $2\pi$

## Koszinuszfüggvény

$$f(x)=\cos x,\ x\in\mathbb{R}$$
- $D_f=\mathbb{R}$, $R_f=[-1,1]$
- zérushely: $x=\pi/2+k\cdot\pi$, $k\in\mathbb{Z}$
- monotonitás: $[2k\pi,\ \pi+2k\pi]$-n szig. mon. csökken, $[\pi+2k\pi,\ 2\pi+2k\pi]$-n szig. mon. nő.
- abszolút maximum: helye $x=2k\pi$, értéke $y=1$
- abszolút minimum: helye $x=\pi+2k\pi$, értéke $y=-1$
- páros függvény
- periodikus, periódusa: $2\pi$

## Tangensfüggvény

$$f(x)=\operatorname{tg}x,\ x\ne\frac{\pi}{2}+k\pi,\ k\in\mathbb{Z}$$
- $D_f=\mathbb{R}\setminus\{\pi/2+k\cdot\pi\mid k\in\mathbb{Z}\}$, $R_f=\mathbb{R}$
- zérushely: $x=k\cdot\pi$, $k\in\mathbb{Z}$
- monotonitás: $(-\pi/2+k\pi,\ \pi/2+k\pi)$-n szig. mon. nő.
- páratlan függvény
- periodikus, periódusa: $\pi$

## Kotangensfüggvény

$$f(x)=\operatorname{ctg}x,\ x\ne k\pi,\ k\in\mathbb{Z}$$
- $D_f=\mathbb{R}\setminus\{k\cdot\pi\mid k\in\mathbb{Z}\}$, $R_f=\mathbb{R}$
- zérushely: $x=\pi/2+k\cdot\pi$, $k\in\mathbb{Z}$
- monotonitás: $(k\pi,\ \pi+k\pi)$-n szig. mon. csökken.
- páratlan függvény
- periodikus, periódusa: $\pi$

## Függvénytranszformációk

**Változó transzformációk:**
1. $f(x)\Rightarrow f(x+c)$
2. $f(x)\Rightarrow f(-x)$
3. $f(x)\Rightarrow f(a\cdot x),\ a>0$
4. $f(x)\Rightarrow f(|x|)$

**Függvényérték transzformációk:**
1. $f(x)\Rightarrow f(x)+c$
2. $f(x)\Rightarrow -f(x)$
3. $f(x)\Rightarrow a\cdot f(x),\ a>0$
4. $f(x)\Rightarrow|f(x)|$

## Változó transzformációk

**1. $f(x)\Rightarrow f(x+c)$:** A grafikon az $x$ tengely mentén $-c$-vel eltolódik.
(Pl. $x^2\Rightarrow(x+3)^2$; $\log_2 x\Rightarrow\log_2(x-3)$; $\sqrt x\Rightarrow\sqrt{x+1}$.)

### Változó transzformációk (folyt.)

**2. $f(x)\Rightarrow f(-x)$:** A grafikon az $y$ tengelyre tükröződik.
(Pl. $\sqrt x\Rightarrow\sqrt{-x}$; $x^3\Rightarrow(-x)^3$; $2^x\Rightarrow 2^{-x}$.)

**3. $f(x)\Rightarrow f(a\cdot x),\ a>0$:** A grafikon az $x$ tengely mentén $1/a$-szorosára változik: ha $0<a<1$, akkor nyúlik; ha $a>1$, akkor zsugorodik.
(Pl. $x^2\Rightarrow(2x)^2$; $3^x\Rightarrow 3^{2x}$; $\sin x\Rightarrow\sin(0{,}5x)$.)

**4. $f(x)\Rightarrow f(|x|)$:** A függvény grafikonjának $y$ tengelytől balra eső részét elhagyjuk, az $y$ tengelytől jobbra eső részt megőrizzük, és tükrözzük az $y$ tengelyre.
(Pl. $2^x\Rightarrow 2^{|x|}$; $x^2\Rightarrow|x|^2$; $\sqrt x\Rightarrow\sqrt{|x|}$.)

## Függvényérték transzformációk

**1. $f(x)\Rightarrow f(x)+c$:** A grafikon az $y$ tengely mentén $c$-vel eltolódik.
(Pl. $x^2\Rightarrow x^2+3$; $\log_2 x\Rightarrow\log_2 x+2$; $\sqrt x\Rightarrow\sqrt x-1$.)

**2. $f(x)\Rightarrow -f(x)$:** A grafikon az $x$ tengelyre tükröződik.
(Pl. $x^2\Rightarrow-x^2$; $\cos x\Rightarrow-\cos x$; $\sqrt[3]{x}\Rightarrow-\sqrt[3]{x}$.)

**3. $f(x)\Rightarrow a\cdot f(x),\ a>0$:** A grafikon az $y$ tengely mentén $a$-szorosára változik: ha $0<a<1$, akkor zsugorodik; ha $a>1$, akkor nyúlik.
(Pl. $x^2\Rightarrow 2x^2$; $\sin x\Rightarrow 2\sin x$; $\sqrt x\Rightarrow 0{,}5\sqrt x$.)

**4. $f(x)\Rightarrow|f(x)|$:** A grafikon $x$ tengely alatti része tükröződik az $x$ tengelyre.
(Pl. $\log_2 x\Rightarrow|\log_2 x|$; $(\tfrac12)^x\Rightarrow|(\tfrac12)^x|$; $\sin x\Rightarrow|\sin x|$.)
