# Kalkulus II. Példatár

<!-- Merged book: each exercise shows the problem, then its Útmutatás (hint) and Megoldás (solution) in collapsible <details>. Source OCR: Szalkai István, Dósa György, Pannon Egyetem. -->

## 1. fejezet
### F1. Többváltozós függvények folytonossága és deriválhatósága

#### Folytonosság

**1.1.** Számítsuk ki a következő függvények határértékét és ellenőrizzük lehetséges folytonosságukat a feltüntetett „kritikus" helyeken:

**a)** $\displaystyle\lim_{(x,y)\to(\pi,0)}\cos(y)\sin\!\left(\tfrac{x}{2}\right)$, $\quad\displaystyle\lim_{(x,y)\to(0,1)}\frac{\sin(xy)}{x}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{1}{xy}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\left(\frac{1}{x}-\frac{1}{y}\right)$,

**b)** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{y^2}{x^2+y^2}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^2}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{\sin(x)\sin(y)}{x^2+y^2}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{x+y}{x-y}$,

**c)** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x}{\sqrt{x^2+y^2}}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{\sqrt{x^2+y^2}}$, $\quad\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2}{\sqrt{x^2+y^2}}$,

**d)** $\displaystyle\lim_{(x,y)\to(1,1)}\frac{x^2+y^2}{x^2-y^2}$, $\quad\displaystyle\lim_{(x,y)\to(1,1)}\frac{x-y}{x^2-y^2}$,

**e)** $\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x+y}{x^2+y^2}$, $\quad\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x+y}{x^2-y^2}$, $\quad\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x\cdot y}{x^2+y^2}$, $\quad\displaystyle\lim_{(x,y)\to(\infty,\infty)}\sin\!\left(\frac{\pi x}{6x+y}\right)$.

<details>
<summary><strong>Útmutatás</strong></summary>

Először közelítsük az $(x,y)$ pontot a megadott $(a,b)$ helyhez egy görbe (pl. egyenes) mentén, azaz pl. $(x,y)\to(0,0)$ esetén legyen $y=tx$ és vizsgáljuk a $\displaystyle\lim_{x\to 0}f(x,tx)$ határértéket, ahol $t\in\mathbb{R}$ rögzített, de tetszőleges valós szám. Ezen határértékeknek *minden* $t\in\mathbb{R}$ esetén meg kell egyezniük ahhoz, hogy $f(x,y)$-nak *lehessen* határértéke az $(a,b)$ pontban, bár ez még *nem elégséges* a $\displaystyle\lim_{(x,y)\to(a,b)}f(x,y)$ határérték létezéséhez.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\displaystyle\lim_{(x,y)\to(\pi,0)}\cos(y)\sin\!\left(\tfrac{x}{2}\right)=1\cdot 1=1.$

$\displaystyle\lim_{(x,y)\to(0,1)}\frac{\sin(xy)}{x}=\lim_{(x,y)\to(0,1)}\frac{\sin(xy)}{yx}\cdot y=1\cdot 1=1.$

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{1}{xy}$ nem létezik, mert $y=tx$ esetén $\lim_{x\to 0}\frac{1}{tx^2}$ különböző $t$ számokra különböző eredményt ad ($t=1$: $+\infty$, $t=-1$: $-\infty$). Azonban $\displaystyle\lim_{(x,y)\to(0,0)}\left|\frac{1}{xy}\right|=+\infty$ könnyen belátható.

$\displaystyle\lim_{(x,y)\to(0,0)}\left(\frac{1}{x}-\frac{1}{y}\right)$ nem létezik, mert $\lim_{x\to 0}\left(\frac{t-1}{tx}\right)=0$ vagy $\pm\infty$, $t$-től és $x$ előjelétől függően.

**b)** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{y^2}{x^2+y^2}$ nem létezik, mert $\frac{t^2x^2}{x^2+t^2x^2}=\frac{t^2}{1+t^2}$ nem csak egy értéket vesz fel.

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy^2}{x^2+y^2}=0$ mert $y=tx$ esetén $\frac{t^2x^3}{x^2+t^2x^2}=x\cdot\frac{t^2}{1+t^2}$, és $\left|\frac{t^2}{1+t^2}\right|<K$, így $\left|\frac{xy^2}{x^2+y^2}\right|<|x|\cdot K\to 0$.

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{\sin(x)\sin(y)}{x^2+y^2}$ nem létezik, mert $y=tx$ esetén $\frac{\sin(x)}{x}\cdot\frac{\sin(tx)}{tx}\cdot\frac{t}{1+t^2}$ határértéke függ $t$-től.

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{x+y}{x-y}$ nem létezik, mert $\frac{1+t}{1-t}$ függ $t$-től.

**c)** $\displaystyle\lim_{(x,y)\to(0,0)}\frac{x}{\sqrt{x^2+y^2}}$ nem létezik, mert $\frac{\pm 1}{\sqrt{1+t^2}}$ függ $t$-től.

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{xy}{\sqrt{x^2+y^2}}=0$ mert $=x\frac{t}{\sqrt{1+t^2}}$ és $\left|\frac{t}{\sqrt{1+t^2}}\right|<K$, így $<|x|\cdot K\to 0$.

$\displaystyle\lim_{(x,y)\to(0,0)}\frac{x^2}{\sqrt{x^2+y^2}}=0$ az előzőhöz hasonlóan.

**d)** $\displaystyle\lim_{(x,y)\to(1,1)}\frac{x^2+y^2}{x^2-y^2}$ nem létezik (a nevező előjele instabil, $\to$ „$\pm\infty$").

$\displaystyle\lim_{(x,y)\to(1,1)}\frac{x-y}{x^2-y^2}=\lim\frac{1}{x+y}=\frac{1}{2}.$

**e)** $\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x+y}{x^2+y^2}=0$, mert $=\frac{1}{x}\cdot\frac{1+t}{1+t^2}\to 0$.

$\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x+y}{x^2-y^2}=\frac{1}{x-y}$ nem létezik ($y=x+h$: $\frac{-1}{h}$ minden $h$-ra más).

$\displaystyle\lim_{(x,y)\to(\infty,\infty)}\frac{x\cdot y}{x^2+y^2}$ nem létezik ($=\frac{t}{1+t^2}$ minden $t$-re más).

$\displaystyle\lim_{(x,y)\to(\infty,\infty)}\sin\!\left(\frac{\pi x}{6x+y}\right)$ nem létezik ($\frac{\pi}{6+t}$ minden $t$-re más).
</details>

#### Parciális deriváltak

**1.2.** Adjuk meg a parciális deriváltak értékét az adott helyeken!

**a)** $f(x,y)=2x^2+y-\dfrac{\sqrt{x}}{y}+\pi\qquad x\ge 0,\ y\ne 0$

$\dfrac{\partial}{\partial x}f(1,2)$, $\quad\dfrac{\partial}{\partial y}f(1,2)$, $\quad\dfrac{\partial}{\partial x}f(0,-4)$, $\quad\dfrac{\partial}{\partial y}f(0,-4)$.

**b)** $f(x,y,z)=z\,e^{-\frac{x}{y}}\qquad x,z\in\mathbb{R},\ y\ne 0$

$\dfrac{\partial}{\partial x}f(0,1,2)$, $\quad\dfrac{\partial}{\partial y}f(1,2,0)$, $\quad\dfrac{\partial}{\partial z}f(1,1,0)$.

**c)** $f(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2} & \text{ha}\quad x^2+y^2>0\\[2mm] 0 & \text{ha}\quad x^2+y^2=0,\end{cases}\qquad \dfrac{\partial}{\partial x}f(0,0)$, $\quad\dfrac{\partial}{\partial y}f(0,1)$, $\quad\dfrac{\partial}{\partial x}f(1,2)$.

<details>
<summary><strong>Útmutatás</strong></summary>

Ha $\underline a=(a_1,\dots,a_n)\in Dom(f)$, adjuk meg pl. az első változó szerinti $x\mapsto f(x,a_2,\dots,a_n)$ parciális függvény deriváltját az $x=a_1$ helyen:
$$\frac{\partial}{\partial x}f(\underline a):=\lim_{x\to a_1}\frac{f(x,a_2,\dots,a_n)-f(a_1,a_2,\dots,a_n)}{x-a_1}\in\mathbb{R}.$$
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $x\mapsto f(x,2)=2x^2+2-\frac{\sqrt x}{2}+\pi$, $\frac{\partial}{\partial x}f(x,2)=4x-\frac{1}{4\sqrt x}$, így $\frac{\partial}{\partial x}f(1,2)=4-\frac14=\frac{15}{4}$.
$y\mapsto f(1,y)=2+y-\frac{1}{y}+\pi$, $\frac{\partial}{\partial y}f(1,y)=1+\frac{1}{y^2}$, így $\frac{\partial}{\partial y}f(1,2)=\frac54$.
$x\mapsto f(x,-4)=2x^2-4+\frac{\sqrt x}{4}+\pi$ $x=0$-ban nem differenciálható, tehát $\frac{\partial}{\partial x}f(0,-4)$ nem létezik.
$y\mapsto f(0,y)=y+\pi$, így $\frac{\partial}{\partial y}f(0,-4)=1$.

**b)** $\frac{\partial}{\partial x}f(0,1,2)=-2$, $\quad\frac{\partial}{\partial y}f(1,2,0)=0$, $\quad\frac{\partial}{\partial z}f(1,1,0)=\frac{1}{e}$.

**c)** $\frac{\partial}{\partial x}f(0,0)=0$, $\quad\frac{\partial}{\partial y}f(0,1)=0$, $\quad\frac{\partial}{\partial x}f(1,2)=\frac{6}{25}$.
</details>

**1.3.** Adjuk meg a parciális derivált függvényeket!

**a)** $f(x,y,z)=x^2+x\cdot y^2+3z^2\qquad x,y,z\in\mathbb{R}$

$\dfrac{\partial}{\partial x}f(x,y,z)$, $\quad\dfrac{\partial}{\partial y}f(x,y,z)$, $\quad\dfrac{\partial}{\partial z}f(x,y,z)$.

**b)** $f(x,y)=\dfrac{x}{\sqrt{x^2+y^2}}\qquad (x^2+y^2>0)$, $\quad\dfrac{\partial}{\partial x}f(x,y)$, $\quad\dfrac{\partial}{\partial y}f(x,y)$.

<details>
<summary><strong>Útmutatás</strong></summary>

Vizsgáljuk, hogy $Dom(f)$ mely pontjaiban adható meg az adott változó szerinti parciális derivált függvény (ami a többi változótól is függ).
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial}{\partial x}=2x+y^2$, $\quad\frac{\partial}{\partial y}=2xy$, $\quad\frac{\partial}{\partial z}=6z\ (x,y,z\in\mathbb{R})$.

**b)** $\frac{\partial}{\partial x}\left(\frac{x}{\sqrt{x^2+y^2}}\right)=\frac{y^2}{(x^2+y^2)^{3/2}}$, $\quad\frac{\partial}{\partial y}\left(\frac{x}{\sqrt{x^2+y^2}}\right)=-\frac{xy}{(x^2+y^2)^{3/2}}\quad (x^2+y^2>0).$
</details>

#### Differenciálhatóság

**1.4.** Vizsgáljuk meg az alábbi függvények differenciálhatóságát!

**a)** $f(x,y)=x^2-xy+y^2$

**b)** $f(x,y)=y\sin^2 x+x\cos^2 y$

**c)** $f(x,y,z)=\sqrt{x^2+y^2+z^2}$

**d)** $f(x,y)=\ln\!\left(1+\dfrac{y}{x}\right)$

**e)** $f(x,y)=\begin{cases}\dfrac{xy}{x^2+y^2} & x^2+y^2>0\\[2mm] 0 & x^2+y^2=0\end{cases}$

**f)** $f(x,y)=\begin{cases}\dfrac{x|y|}{\sqrt{x^2+y^2}} & x^2+y^2>0\\[2mm] 0 & x^2+y^2=0\end{cases}$

<details>
<summary><strong>Útmutatás</strong></summary>

Használjuk a tételeket: **i)** ahol a parciális derivált függvények folytonosak, ott a függvény (totálisan) differenciálható; **ii)** ahol a függvény nem folytonos, ott nem lehet differenciálható; **iii)** differenciálhatóság esetén
$$f(\underline x)=f(\underline a)+\sum_i\frac{\partial}{\partial x_i}f(\underline a)(x_i-a_i)+R(\underline x),\qquad \lim_{\underline x\to\underline a}\frac{R(\underline x)}{|\underline x-\underline a|}=0.$$
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial}{\partial x}=2x-y$, $\frac{\partial}{\partial y}=2y-x$ folytonosak, $f$ differenciálható minden $(x,y)\in\mathbb{R}^2$ pontban.

**b)** $\frac{\partial}{\partial x}=y\sin 2x+\cos^2 y$, $\frac{\partial}{\partial y}=\sin^2 x-x\sin 2y$ folytonosak, $f$ differenciálható minden $\mathbb{R}^2$ pontban.

**c)** $\frac{\partial}{\partial x}f=\frac{x}{\sqrt{x^2+y^2+z^2}}$ (hasonlóan $y,z$), folytonosak az origót kivéve, ezért $f$ differenciálható minden $\mathbb{R}^3\smallsetminus\{(0,0,0)\}$ pontban.

**d)** $\frac{\partial}{\partial x}=-\frac1x\cdot\frac{y}{x+y}$, $\frac{\partial}{\partial y}=\frac{1}{x+y}$ ($x\ne 0,\ \frac yx>-1$), folytonosak, ezért $f$ differenciálható a $\{x\ne 0,\ \frac yx>-1\}$ halmaz pontjaiban.

**e)** A parciális deriváltak folytonosak $\mathbb{R}^2\smallsetminus\{(0,0)\}$-on, ott $f$ differenciálható. Az origóban $f$ nem folytonos ($\lim_n f(\frac1n,\frac1n)=\frac12\ne f(0,0)=0$), tehát ott *nem* differenciálható.

**f)** A deriváltak folytonosak $\mathbb{R}^2\smallsetminus\{(a,0)\}$-on; az $x$-tengely pontjaiban a maradéktag-feltétel sérül ($\frac{\operatorname{sign}(a)}{\sqrt2}\ne 0$), tehát ott *nem* differenciálható.

*(5. ábra: a $z=\frac{x|y|}{\sqrt{x^2+y^2}}$ felület nyeregszerű grafikonja.)*
</details>

**1.5.** Adjuk meg a gradiensvektort az adott pontokban!

**a)** $f(x,y)=x^3+y^2-3xy\qquad (0,0),\quad (0,1),\quad (x,y),$

**b)** $f(x,y,z)=\sqrt{x^2+y^2+z^2}\qquad (1,1,1),\quad (x,y,z),$

**c)** $f(x,y,z)=x^2+y^2+z^2\qquad (1,2,3),\quad (x,y,z),$

**d)** $f(x,y,z)=\dfrac{z}{\sqrt{x^2+y^2}}\qquad (3,4,5),\quad (x,y,z).$

<details>
<summary><strong>Útmutatás</strong></summary>

Ellenőrizzük a differenciálhatóságot, majd $\operatorname{grad}f(\underline a)=\left(\frac{\partial}{\partial x_1}f(\underline a),\dots,\frac{\partial}{\partial x_n}f(\underline a)\right)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\operatorname{grad}f(0,0)=(0,0)$, $\operatorname{grad}f(0,1)=(-3,2)$, $\operatorname{grad}f(x,y)=(3x^2-3y,2y-3x)$.

**b)** $\operatorname{grad}f(1,1,1)=\left(\frac{1}{\sqrt3},\frac{1}{\sqrt3},\frac{1}{\sqrt3}\right)$, $\operatorname{grad}f(x,y,z)=\frac{(x,y,z)}{\sqrt{x^2+y^2+z^2}}$.

**c)** $\operatorname{grad}f(1,2,3)=(2,4,6)$, $\operatorname{grad}f(x,y,z)=(2x,2y,2z)$.

**d)** $\operatorname{grad}f(3,4,5)=\left(\frac{-3}{25},\frac{-4}{25},\frac15\right)$, $\operatorname{grad}f(x,y,z)=\left(\frac{-xz}{(x^2+y^2)^{3/2}},\frac{-yz}{(x^2+y^2)^{3/2}},\frac{1}{\sqrt{x^2+y^2}}\right)$.
</details>

#### Iránymenti derivált

**1.6.** Adjuk meg az $f$ függvény iránymenti deriváltját az $a$ pontban a $v$ vektor illetve $\alpha$ szög irányában!

**a)** $f(x,y,z)=e^{x^2+y^2}\qquad a=(-1,2),\qquad v=\left(\tfrac{1}{\sqrt 2},\tfrac{1}{\sqrt 2}\right),$

**b)** $f(x,y,z)=z\sin(x+y)\qquad a=\left(\tfrac{\pi}{3},\tfrac{\pi}{6},1\right),\qquad v=\left(3,\sqrt{11},4\right),$

**c)** $f(x,y)=\ln(x+y)\qquad a=(1,1),\qquad \alpha=30^\circ,$

**d)** $f(x,y)=\begin{cases}\dfrac{x|y|}{\sqrt{x^2+y^2}} & x^2+y^2>0\\[2mm] 0 & x^2+y^2=0\end{cases}\qquad a=(0,0),\qquad v=\left(1,\sqrt 3\right).$

<details>
<summary><strong>Útmutatás</strong></summary>

Legyen $\underline v$ egységvektor: $D_{\underline v}f(\underline a)=\lim_{t\to 0}\frac{f(\underline a+t\underline v)-f(\underline a)}{t}$. Ha $f$ differenciálható: $D_{\underline v}f(\underline a)=\operatorname{grad}f(\underline a)\cdot\underline v$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\operatorname{grad}f(-1,2)=(-2e^6,4e^6)$, $D_v f=-2e^6\cdot\frac{1}{\sqrt2}+4e^6\cdot\frac{1}{\sqrt2}=\sqrt2 e^6\approx 570{,}53$. *(A forrás végig $e^6$-tal számol, bár $(-1)^2+2^2=5$ — az eltérés az eredeti tankönyv elírása.)*

**b)** $v$ normáltja $\left(\frac36,\frac{\sqrt{11}}6,\frac46\right)$, $\operatorname{grad}f\left(\frac\pi6,\frac\pi6,1\right)=\left(\frac12,\frac12,\frac{\sqrt3}2\right)$, $D_v f=\frac{3+2\sqrt{11}+8\sqrt3}{24}\approx 0{,}978\,74$.

**c)** $v=\left(\cos\frac\pi6,\sin\frac\pi6\right)=\left(\frac{\sqrt3}2,\frac12\right)$, $\operatorname{grad}f(1,1)=\left(\frac12,\frac12\right)$, $D_{30^\circ}f(1,1)=\frac{\sqrt3+1}{4}\approx 0{,}683\,01$.

**d)** $f$ a $(0,0)$-ban nem differenciálható; az $\underline e_v=\left(\frac12,\frac{\sqrt3}2\right)$ irányú $g(t)=f\!\left(\frac t2,\frac{t\sqrt3}2\right)=\frac{t\sqrt3}{4}$ derivált $t=0$-ban: $D_{\underline v}f(0,0)=g'(0)=\frac{\sqrt3}{4}$. (Minden $\alpha$ irányban $D_\alpha f(0,0)=\cos\alpha|\sin\alpha|$, de $f$ mégsem differenciálható.)
</details>

**1.7.** Adjuk meg az $f(x,y)=x^2-2x^2y+xy^2+1$ függvény $P(1,2)$ pontbeli $\overrightarrow{Q}(4,6)$ vektor irányába vett iránymenti deriváltját!

<details>
<summary><strong>Megoldás</strong></summary>

$v=\overrightarrow{PQ}(3,4)$, normálva $\left(\frac35,\frac45\right)$. $\operatorname{grad}f(1,2)=(-2,2)$, így $D_{\overrightarrow{PQ}}f(1,2)=-2\cdot\frac35+2\cdot\frac45=\frac25$.
</details>

**1.8.** Milyen irányban változik „legjobban" az $f(x,y)=x^2+4y^2$ függvény a $P(2,1)$ pontban?

<details>
<summary><strong>Útmutatás</strong></summary>

A Cauchy–Schwarz–Bunyakovszkij egyenlőtlenségből $-|\operatorname{grad}f|\le D_v f\le|\operatorname{grad}f|$; egyenlőség a gradienssel párhuzamos irányban. A „legjobb" irány a gradiens, illetve ellentettje.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$\operatorname{grad}f(2,1)=(4,8)$. Legnagyobb növekedés: $v=(4,8)$, értéke $|\operatorname{grad}f(2,1)|=\sqrt{4^2+8^2}=4\sqrt5$. Legnagyobb csökkenés: $-v=(-4,-8)$, értéke $-4\sqrt5$.
</details>

#### Összetett függvény deriválása

**1.9.** Adjuk meg az összetett függvény deriváltját!

**a)** $f(x,y,z)=xyz,\qquad x(u,v)=u^2+v,\qquad y(u,v)=u-v^2,\qquad z(u,v)=\sin u,$

**b)** $f(x,y)=\dfrac{x}{y},\qquad x(t)=\ln t,\qquad y(t)=e^t,$

**c)** $f(x,y)=e^{x^2+y^2},\qquad x(r,\phi)=r\cos\phi,\qquad y(r,\phi)=r\sin\phi.$

<details>
<summary><strong>Útmutatás</strong></summary>

Használjuk a többdimenziós láncszabályt: $\frac{\partial}{\partial u}F=\sum_k\frac{\partial f}{\partial x_k}\cdot\frac{\partial x_k}{\partial u}$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial}{\partial u}f=(u-v^2)\sin u\cdot 2u+(u^2+v)\sin u+(u^2+v)(u-v^2)\cos u$;
$\frac{\partial}{\partial v}f=(u-v^2)\sin u+(u^2+v)\sin u\cdot(-2v)$.

**b)** $\frac{d}{dt}f(\ln t,e^t)=\frac{1}{e^t}\cdot\frac1t-\frac{\ln t}{e^{2t}}\cdot e^t=\frac{1-t\ln t}{te^t}$.

**c)** $\frac{\partial}{\partial r}f=2re^{r^2}$, $\quad\frac{\partial}{\partial\phi}f=0$ (a $2\sin\phi\cos\phi=\sin 2\phi$ azonossággal).
</details>

**1.10.** Adjuk meg az $f\circ(x,y)$ összetett függvény gradiensét az $\underline a$ pontban, ha

**a)** $f(x,y)=x^2+xy,\qquad \underline a=(1,2),\qquad x(1,2)=3,\qquad y(1,2)=4,$
$\operatorname{grad} x(1,2)=(-1,0),\qquad \operatorname{grad} y(1,2)=(\sqrt 2,10),$

**b)** $\dfrac{\partial}{\partial x}f(-1,1)=3,\qquad \dfrac{\partial}{\partial y}f(-1,1)=2,$
$x(u,v)=u^2-v^2,\quad y(u,v)=-\dfrac{uv}{\sqrt 2},\qquad \underline a=(-1,\sqrt 2).$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial}{\partial x}f(3,4)=10$, $\frac{\partial}{\partial y}f(3,4)=4$, így $\operatorname{grad}F(1,2)=\left(10(-1)+4\sqrt2,\ 10\cdot 0+4\cdot 10\right)=\left(4\sqrt2-10,\ 40\right)$.

**b)** Az $\underline a=(-1,\sqrt2)$-ben $\frac{\partial x}{\partial u}=-2,\ \frac{\partial y}{\partial u}=-1,\ \frac{\partial x}{\partial v}=-2\sqrt2,\ \frac{\partial y}{\partial v}=\frac{1}{\sqrt2}$, így $\operatorname{grad}F(-1,\sqrt2)=\left(3(-2)+2(-1),\ 3(-2\sqrt2)+2\frac{1}{\sqrt2}\right)=\left(-8,-5\sqrt2\right)$.
</details>

**1.11.** Legyen $g:\mathbb{R}\to\mathbb{R}$ differenciálható függvény, és legyen

$$f(x,y)=xy+g\!\left(\frac{y}{x}\right)\qquad (x\ne 0).$$

Mutassuk meg, hogy teljesül az $x\cdot\dfrac{\partial}{\partial x}f(x,y)+y\cdot\dfrac{\partial}{\partial y}f(x,y)=2xy$ összefüggés.

<details>
<summary><strong>Megoldás</strong></summary>

$\frac{\partial}{\partial x}f=y-\frac{y}{x^2}g'\!\left(\frac yx\right)$, $\frac{\partial}{\partial y}f=x+\frac1x g'\!\left(\frac yx\right)$. Szorozva $x$-szel ill. $y$-nal és összeadva a $g'$-os tagok kiesnek, marad $2xy$.
</details>

#### Magasabbrendű deriváltak

**1.12.** Adjuk meg az alábbi parciális derivált függvényeket:

**a)** $f(x,y)=\sqrt{2xy+y^2}\qquad \dfrac{\partial^2}{\partial x^2}f,\quad \dfrac{\partial^2}{\partial x\partial y}f,\quad \dfrac{\partial^2}{\partial y^2}f,$

**b)** $f(x,y,z)=2x^2y-3y^2z+xyz\qquad \dfrac{\partial^2}{\partial x\partial y}f,\quad \dfrac{\partial^2}{\partial x^2}f,\quad \dfrac{\partial^3}{\partial x\partial y\partial z}f,\quad \dfrac{\partial^3}{\partial x^2\partial y}f,$

**c)** $f(x,y)=x^y\qquad \dfrac{\partial^2}{\partial x\partial y}f,\quad \dfrac{\partial^2}{\partial y\partial x}f,\quad \dfrac{\partial^3}{\partial x^2\partial y}f,\quad \dfrac{\partial^3}{\partial x\partial y\partial x}f.$

<details>
<summary><strong>Útmutatás</strong></summary>

Pl. $\frac{\partial^2}{\partial x\partial y}f=\frac{\partial}{\partial y}\left(\frac{\partial}{\partial x}f\right)$ — a jelölésnek megfelelő sorrendben deriválunk.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** ($2xy+y^2>0$) $\frac{\partial^2}{\partial x^2}=\frac{-y^2}{(y^2+2xy)^{3/2}}$, $\frac{\partial^2}{\partial x\partial y}=\frac{xy}{(y^2+2xy)^{3/2}}$, $\frac{\partial^2}{\partial y^2}=\frac{-x^2}{(y^2+2xy)^{3/2}}$.

**b)** $\frac{\partial^2}{\partial x\partial y}=4x+z$, $\frac{\partial^2}{\partial x^2}=4y$, $\frac{\partial^3}{\partial x\partial y\partial z}=1$, $\frac{\partial^3}{\partial x^2\partial y}=4$.

**c)** ($x>0$) $\frac{\partial^2}{\partial x\partial y}=\frac{\partial^2}{\partial y\partial x}=x^{y-1}(y\ln x+1)$, $\frac{\partial^3}{\partial x^2\partial y}=\frac{\partial^3}{\partial x\partial y\partial x}=x^{y-2}(2y+y^2\ln x-y\ln x-1)$. (A deriváltak folytonosak, ezért a sorrend nem számít.)
</details>

**1.13.** Számítsuk ki a következő parciális deriváltak értékét a megadott helyen:

**a)** $f(x,y)=\dfrac{1+x}{1+y}\qquad \dfrac{\partial^2}{\partial x^2}f(0,0),\qquad \dfrac{\partial^2}{\partial x\partial y}f(1,1),\qquad \dfrac{\partial^2}{\partial y^2}f(2,2),$

**b)** $f(x,y)=\begin{cases}\dfrac{x^3y-xy^3}{x^2+y^2} & x^2+y^2>0\\[2mm] 0 & x^2+y^2=0\end{cases}\qquad \dfrac{\partial^2}{\partial x\partial y}f(0,0),\qquad \dfrac{\partial^2}{\partial y\partial x}f(0,0).$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial^2}{\partial x^2}f(0,0)=0$, $\frac{\partial^2}{\partial x\partial y}f(1,1)=-\frac14$, $\frac{\partial^2}{\partial y^2}f(2,2)=\frac29$.

**b)** $\frac{\partial^2}{\partial x\partial y}f(0,0)=-1$, $\frac{\partial^2}{\partial y\partial x}f(0,0)=1$. A vegyes másodrendű deriváltak nem egyenlők, mert nem folytonosak (a Young/Schwarz-feltétel sérül).
</details>

**1.14.** Ha $g,h:\mathbb{R}\to\mathbb{R}$ kétszer differenciálható függvények, mutassuk meg, hogy az

$$f(x,y)=g(xy)+\sqrt{xy}\cdot h\!\left(\frac{y}{x}\right)\qquad (xy>0)$$

függvényre teljesül, hogy $x^2\dfrac{\partial^2}{\partial x^2}f(x,y)-y^2\dfrac{\partial^2}{\partial y^2}f(x,y)=0.$

<details>
<summary><strong>Megoldás</strong></summary>

A másodrendű deriváltak kiszámítása és $x^2$-tel ill. $y^2$-tel való szorzása után a $g''$, $h$, $h'$, $h''$ tagok rendre kiejtik egymást, így a különbség $0$.
</details>

#### Szélsőértékszámítás

**1.15.** Hol vannak stacionárius pontjai (hol lehet szélsőértéke) az alábbi függvényeknek?

**a)** $f(x,y,z)=x^2+2xy-2x+2y^2-2y+z^2+1$

**b)** $f(x,y)=e^{x^2-y^2}$

**c)** $f(x,y)=\sin x+\cos y+x-y.$

<details>
<summary><strong>Útmutatás</strong></summary>

Keressük a stacionárius $\underline a\in Dom(f)$ pontokat: ahol $\operatorname{grad}f(\underline a)=\underline 0$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $P(1,0,0)$ stacionárius pont; mivel $f=((x-1)+y)^2+y^2+z^2\ge 0=f(1,0,0)$, ez globális minimumhely.

**b)** $P(0,0)$ stacionárius pont; *nincs* szélsőérték, mert $f(x,0)=e^{x^2}>1>e^{-y^2}=f(0,y)$. *(6. ábra: a $z=e^{x^2-y^2}$ nyeregfelület.)*

**c)** $P_{k,l}\left(\pi+2k\pi,\ \frac{3\pi}{2}+2l\pi\right)\ (k,l\in\mathbb{N})$ stacionárius pontok.
</details>

**1.16.** Keressük az alábbi függvények szélsőértékeit:

**a)** $f(x,y)=2x^4+y^4-x^2-2y^2$

**b)** $f(x,y)=xe^{-\frac{x^2+y^2}{2}}$

**c)** $f(x,y)=x^4+y^4-2x^2+4xy-2y^2$

**d)** $f(x,y)=xy\sqrt{1-x^2-y^2}\qquad (x^2+y^2\le 1)$

**e)** $f(x,y)=\dfrac{1-x+y}{\sqrt{1+x^2+y^2}}.$

<details>
<summary><strong>Útmutatás</strong></summary>

Stacionárius pontban vizsgáljuk a $\Delta_f(\underline a)=\frac{\partial^2}{\partial x^2}f\cdot\frac{\partial^2}{\partial y^2}f-\left(\frac{\partial^2}{\partial x\partial y}f\right)^2$ kifejezést: $\Delta>0$ esetén van szélsőérték (minimum ha $\frac{\partial^2}{\partial x^2}f>0$, maximum ha $<0$); $\Delta<0$ esetén nyeregpont; $\Delta=0$ esetén további vizsgálat kell.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** 9 stacionárius pont. $P_{1,3,7,9}\left(\pm\frac12,\pm1\right)$ minimumhelyek, $f=-\frac98$; $P_5(0,0)$ maximumhely; $P_2,P_4,P_6,P_8$ nyeregpontok. *(7. ábra.)*

**b)** $P(1,0)$ lokális maximum ($f=\frac{1}{\sqrt e}$), $Q(-1,0)$ lokális minimum ($f=-\frac{1}{\sqrt e}$).

**c)** $P(-\sqrt2,\sqrt2)$ és $Q(\sqrt2,-\sqrt2)$ lokális minimumhelyek, $f=-8$; $R(0,0)$-ban $\Delta=0$, de a grafikonból látszik, hogy nyeregpont. *(8. ábra.)*

**d)** $P(0,0)$ nyeregpont; $Q_1\left(\frac{1}{\sqrt3},\frac{1}{\sqrt3}\right)$ maximum $f=\frac{\sqrt3}{9}$, $Q_2\left(-\frac{1}{\sqrt3},\frac{1}{\sqrt3}\right)$ minimum $f=-\frac{\sqrt3}{9}$ (és a többi $Q$ szimmetrikusan).
</details>

#### Érintősík, Taylor-polinom, közelítő módszerek

**1.17. i)** Írja fel az alábbi függvények érintősíkjának egyenletét a megadott $\underline a$ pontokban, **ii)** az érintősík segítségével közelítse a függvényt az $\underline a$ pont egy környezetében, **iii)** számítsa ki a függvény értékét közelítőleg a $\underline b$ pontban:

**a)** $f(x,y)=x^2+y^2,\qquad \underline a=(4,3),\qquad \underline b=(4{,}01;2{,}97),$

**b)** $f(x,y)=x^y+\dfrac{x}{y},\qquad \underline a=(3,2),\qquad \underline b=(2{,}98;2{,}03),$

**c)** $x^3+x-y^3+2y+z^3+15=0,\qquad P=(-1,3,2),\qquad \underline{b}(-1{,}03;2{,}96).$

<details>
<summary><strong>Útmutatás</strong></summary>

Az érintősík éppen az 1-rendű Taylor-polinom: $z=f(x_0,y_0)+f'_x(x_0,y_0)(x-x_0)+f'_y(x_0,y_0)(y-y_0)$, és így $f(x,y)\approx$ ugyanez.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $f'_x=2x,\ f'_x(a)=8$; $f'_y=2y,\ f'_y(a)=6$; érintősík $z=25+8(x-4)+6(y-3)$, azaz $8x+6y-z=25$. Közelítés: $f(\underline b)\approx 8\cdot 4{,}01+6\cdot 2{,}97-25=24{,}9$ (valódi érték $4{,}01^2+2{,}97^2=24{,}901$).

**b)** $f'_x=y\,x^{y-1}+\frac1y,\ f'_y=x^y\ln x-\frac{x}{y^2}$; érintősík $z=\frac{13}{2}x+(9\ln3-\tfrac34)y-(18\ln3+\tfrac{15}{2})\approx 6{,}5x+9{,}1375y-27{,}275$; $f(\underline b)\approx 10{,}6441$.

**c)** $z$-re megoldva $z=-\sqrt[3]{x^3+x-y^3+2y+15}$, $f(-1,3)=2$. Érintősík $z=2-\frac13(x+1)+\frac{25}{12}(y-3)$; $f(\underline b)\approx 1{,}9267$.
</details>

**1.18.** Keresse meg az alábbi egyenletrendszer egy közelítő megoldását a függvények érintősíkjainak segítségével a megadott kezdő értékekből kiindulva, 6 tizedesjegy pontossággal:

$$\begin{cases}f(x,y)=x^3+2xy^2-y^4+37=0\\ g(x,y)=3x^2-5x^2y+2y^3-6=0\end{cases}$$

$$x_0=1{,}5,\quad y_0=2{,}5,\quad \text{ill.}\quad x_0=1,\quad y_0=1.$$

<details>
<summary><strong>Útmutatás</strong></summary>

Linearizálva (Newton-módszer): a $\{f=0,g=0\}$ helyett az érintősíkokból adódó lineáris egyenletrendszert oldjuk meg $(x_1,y_1)$-re, majd iterálunk egyre pontosabb gyökökért.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

Az $x_0=1{,}5,\ y_0=2{,}5$ kezdőpontból a Newton-iteráció gyökhöz tart: $(x_1,y_1)=(2{,}33766;3{,}26184)$, majd $(2{,}05632;3{,}03767)$, $(2{,}00176;3{,}00094)$, … végül $(x_5,y_5)=(2{,}00000;3{,}00000)$ a megadott pontossággal. — Az $x_0=y_0=1$ kezdőpontból 13 lépés után a másik gyök: $(x_{13},y_{13})=(-1{,}37487;-2{,}15624)$.
</details>

**1.19.** Írja fel az $f(x,y,z)=\dfrac{x^2y}{x+3z}$ függvény $\underline a=(2,-1,8)$ pont körüli 3-rendű Taylor-polinomját, és ennek felhasználásával becsülje meg az $f(1{,}99,-0{,}89,8{,}06)$ függvényértéket!

<details>
<summary><strong>Útmutatás</strong></summary>

$\left(T^{(N)}_{\underline a}f\right)(\underline x)=\sum_{k=0}^N\sum_{|\overline m|=k}\frac{f^{(\overline m)}(\underline a)}{k!}(\underline x-\underline a)^{\overline m}$ a multiindexes Taylor-formula.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$f(\underline a)=\frac{-4}{26}$; az elsőrendű tagok $f'_x(\underline a)=\frac{-25}{169},\ f'_y(\underline a)=\frac{2}{13},\ f'_z(\underline a)=\frac{3}{169}$, és így tovább a másod- és harmadrendű deriváltakig. A 3-rendű Taylor-polinom (a vezető tagokkal):
$$\left(T^3_{\underline a}f\right)(x,y,z)\approx -0{,}1538-0{,}1479(x-2)+0{,}1538(y+1)+0{,}0178(z-8)-0{,}0328(x-2)^2-\dots$$
Ebbe behelyettesítve $f(1{,}99,-0{,}89,8{,}06)\approx -0{,}1538-\dots$; a Taylor-becslés és a valódi érték eltérése csak $\approx 0{,}000\,000\,708$.
</details>

## 2. fejezet
### F2. Két- és többváltozós integrálok

#### Szukcesszív integrálás

**2.1.** Számítsuk ki az alábbi *szukcesszív* (ismételt) integrálokat:

**a)** $\displaystyle\int_3^7\left(\int_4^5 x^2+y^3\,dx\right)dy$, $\quad\displaystyle\int_1^2\left(\int_8^9 x^5y^3\,dy\right)dx$,

**b)** $\displaystyle\iint_H f$ ahol $f(x,y)=\dfrac{x}{y}$ és $H$ az $A(2,3),B(2,5),C(6,5),D(6,3)$ pontok által határolt téglalap.

**c)** $\displaystyle\iint_{[1,2]\times[0,3]}(2x^2+3xy+4y^2)\,dx\,dy.$

<details>
<summary><strong>Útmutatás</strong></summary>

Téglalapon szukcesszíve integrálunk (Fubini tétele): „vízszintes" $\iint_H f=\int_c^d\left(\int_a^b f\,dx\right)dy$, vagy „függőleges" $\int_a^b\left(\int_c^d f\,dy\right)dx$ — a két számítás egyenértékű.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\int_3^7\!\left(\int_4^5 x^2+y^3\,dx\right)dy=\int_3^7\!\left(\frac{61}{3}+y^3\right)dy\approx 661{,}3333$; $\quad\int_1^2\!\left(\int_8^9 x^5y^3\,dy\right)dx=\int_1^2\frac{2465}{4}x^5\,dx=\frac{2465}{24}(2^6-1)=6470{,}625$.

**b)** Függőlegesen $\int_2^6 x\ln\!\left(\frac53\right)dx=\ln\!\left(\frac53\right)\cdot\frac12(6^2-2^2)\approx 8{,}1732$ (vízszintesen ugyanez).

**c)** $\int_1^2\!\left(\int_0^3 2x^2+3xy+4y^2\,dy\right)dx=\int_1^2(6x^2+\tfrac{27}{2}x+36)\,dx=\frac{281}{4}=70{,}25$.
</details>

**2.2.** Számítsa ki az alábbi $\displaystyle\int_a^b\int_{u(x)}^{v(x)}f(x,y)\,dy\,dx$ integrálokat, ahol

**a)** $u(x)=x^2-2x-4,\ v(x)=3x^2+8x,\ f(x,y)=3x^2+8y^2-xy,\ a=-6{,}83,\ b=8{,}49,$

**b)** $u(x)=x^2+x-4,\ v(x)=3\sqrt{x}+8x,\ f(x,y)=x^2+xy,\ a=3,\ b=9.$

<details>
<summary><strong>Útmutatás</strong></summary>

Az általánosított szukcesszív képlet: $\int_a^b\left(\int_{u(x)}^{v(x)}f\,dy\right)dx=\int_a^b\left(F_y(x,v(x))-F_y(x,u(x))\right)dx$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A belső integrál $\int_{x^2-2x-4}^{3x^2+8x}(3x^2+8y^2-xy)\,dy=\frac{208}{3}x^6+588x^5+1516x^4+\frac{3764}{3}x^3+20x^2+264x+\frac{512}{3}$, majd $\int_{-6,83}^{8,49}\!\dots\,dx\approx 8{,}3951\times10^7$.

**b)** A belső integrál $\int_{x^2+x-4}^{3\sqrt x+8x}(x^2+xy)\,dy=-\frac12x^5-2x^4+\frac{85}{2}x^3+\frac{25}{2}x^2-8x+27(\sqrt x)^5$, majd $\int_3^9\!\dots\,dx=-\frac{1458}{7}\sqrt3+\frac{721341}{35}\approx 20248{,}9814$.
</details>

**2.3.** Számítsa ki az alábbi $\displaystyle\iint_H f$ integrálokat, ahol a $H$ korlátos tartományt alulról és felülről a $g$ és $h$ függvénygörbék határolják:

**a)** $f(x,y)=x+y,\quad g(x)=x^2+2x,\quad h(x)=4-x^2,$

**b)** $f(x,y)=2y,\quad g(x)=x^2,\quad h(x)=x+2,$

**c)** $f(x,y)=y\cos(x),\quad g(x)=\sin(x),\quad h(x)=2\sin(x),\quad 0\le x\le\pi.$

<details>
<summary><strong>Útmutatás</strong></summary>

Először a $g$ és $h$ metszéspontjait számítsuk ki, állapítsuk meg, melyik az alsó/felső határ, majd a 2.2. mintájára.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** Metszéspontok $x_1=-2,x_2=1$; $[-2,1]$-en $x^2+2x\le 4-x^2$, így $\iint_H f=\int_{-2}^1(-4x^3-8x^2+4x+8)\,dx=9$.

**b)** Metszéspontok $x_1=-1,x_2=2$; $\iint_H f=\int_{-1}^2(-x^4+x^2+4x+4)\,dx=\frac{72}{5}$.

**c)** $\int_0^\pi\!\left(\int_{\sin x}^{2\sin x}y\cos x\,dy\right)dx=\int_0^\pi\frac32\sin^2 x\cos x\,dx=0$.
</details>

**2.4.** Számítsa ki az alábbi $\displaystyle\iint_H f$ integrálokat. (Minden esetben rajzolja fel a $H$ tartományt is. Ahol lehet, számítsa ki az integrált mind függőlegesen, mind vízszintesen is.)

**a)** $f(x,y)=x^2+y+1$, $H$-t az $x$-tengely, $y$-tengely és az $x+2y=1$ egyenes határolják,

**b)** $f(x,y)=\sqrt{1-x^2}$ és $H=\{(x,y):x\le y\le 1,\ 0\le x\le 1\}$,

**c)** $f(x,y)=xy$ és $H$ a koordinátatengelyek és az $y=1-x$ egyenes által bezárt korlátos halmaz,

**d!)** $f(x,y)=x^2+y^3$, $H=ABC\triangle=$ az $A(3,2),B(5,8)$ és $C(9,4)$ pontok által meghatározott háromszög,

**e)** $f(x,y)=yx$ és $H=$ az $(1,0)$ középpontú egységsugarú kör $x$ tengely feletti fele,

**f)** $f(x,y)=y$ és $H=$ origó középpontú egységsugarú kör I. síknegyedbe eső negyede,

**g)** $f(x,y)=1+2xy$ és $H$ az $y=\sqrt{x},\ y=2x-1$ és $x=0$ görbék által határolt korlátos halmaz,

**h)** $f(x,y)=xe^y$ és $H$-t az $x=0,\ y=0,\ y=2$ és $y=4-2x$ egyenesek határolják.

<details>
<summary><strong>Útmutatás</strong></summary>

A $d)$ háromszög oldalegyeneseihez: az $U(u_1,u_2),V(v_1,v_2)$ pontokon átmenő egyenes $(x-v_1)(u_2-v_2)=(u_1-v_1)(y-v_2)$. Néhány feladatban az integrál csak egyik irányban végezhető el.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\iint_H f=\frac13$ (függőlegesen és vízszintesen is).

**b)** $\iint_H\sqrt{1-x^2}=\frac{\pi}{4}-\frac13\approx 0{,}4521$ (felhasználva $\int\sqrt{1-x^2}\,dx=\frac12\arcsin x+\frac14\sin(2\arcsin x)$).

**c)** $\int_0^1\!\int_0^{1-x}xy\,dy\,dx=\frac{1}{24}$.

**d)** Az oldalegyenesek $a:\ y=-x+13$, $b:\ y=\frac13x+1$, $c:\ y=3x-7$. $x=5$-nél kettévágva: az első tényező $\approx 631{,}5062$, a második $\approx 1891{,}1605$, összegük $\iint_H f=\frac{51152}{81}+\frac{153184}{81}=\frac{7568}{3}\approx 2522{,}6667$.

**e)** Az $(1,0)$ közepű félkörön $\iint_H yx=\frac23$.

**f)** $\iint_H y=\frac13$ (függőlegesen és vízszintesen is).
</details>

**2.5.** Adja meg a $H$ tartományt az alábbi feladatokban:

**a)** $\displaystyle\int_1^3\int_1^{4x-x^2}f(x,y)\,dy\,dx$, $\qquad$ **b)** $\displaystyle\int_{-\sqrt 3/2}^{\sqrt 3/2}\int_{1/2}^{\sqrt{1-y^2}}f(x,y)\,dx\,dy$,

**c)** $\displaystyle\int_0^2\int_y^{1+\sqrt{1-y}}f(x,y)\,dx\,dy.$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $H=\{(x,y):1\le y\le 4x-x^2,\ 1\le x\le 3\}$ — az $y=4x-x^2$ parabola és az $x=1,\ x=3,\ y=1$ egyenesek határolják.

**b)** $H=\left\{(x,y):\frac12\le x\le\sqrt{1-y^2},\ -\frac{\sqrt3}{2}\le y\le\frac{\sqrt3}{2}\right\}$ — az $x^2+y^2=1$ körből az $x=\frac12$ egyenes által levágott (jobb oldali, kisebbik) körszelet.

**c)** $1<y$ esetén $\sqrt{1-y}$ nem értelmezett, ezért $H=\left\{(x,y):y\le x\le 1+\sqrt{1-y},\ 0\le y\le 1\right\}$ — az $y=1-(x-1)^2$ parabola és az $y=x$, $y=0$ egyenesek határolják.
</details>

**2.6.** Cserélje fel az integrálás sorrendjét (azaz vízszintes és függőleges irányát) az alábbi feladatokban:

**a)** $\displaystyle\int_0^{1,5}\int_0^{3-y/2}f(x,y)\,dx\,dy$, $\quad\displaystyle\int_0^1\int_y^1 f(x,y)\,dx\,dy$, $\quad\displaystyle\int_1^3\int_1^{4x-x^2}f(x,y)\,dy\,dx$,

$\displaystyle\int_0^1\int_{-\sqrt{1-y^2}}^{1-y}f(x,y)\,dx\,dy$, $\quad\displaystyle\int_{-\sqrt 3/2}^{\sqrt 3/2}\int_y^{\sqrt{1-y^2}}f(x,y)\,dx\,dy$,

**b\*)** $\displaystyle\int_0^3\int_0^{x^2}f(x,y)\,dy\,dx+\int_3^4\int_{2x-6}^{x^2}f(x,y)\,dy\,dx$,

**c)** a **2.5.** feladatban szereplő integrálokban.

<details>
<summary><strong>Megoldás</strong></summary>

**a)** Pl. az első: $y=6-2x$-vel ekvivalens az $x=3-\frac y2$ egyenes, így a megfordított sorrend
$$\int_0^{2,25}\!\left(\int_0^{1,5}f\,dy\right)dx+\int_{2,25}^{3}\!\left(\int_0^{6-2x}f\,dy\right)dx.$$

**b\*)** A $H$-t az $x$ tengely, az $y=x^2$ parabola, az $x=4$ és $y=2x-6$ egyenesek határolják; a két görbe $(4,2)$-ben metszi egymást, ezért $y=2$-nél kettévágva
$$\iint_H f=\int_0^2\!\left(\int_{\sqrt y}^{y/2+6}f\,dx\right)dy+\int_2^{16}\!\left(\int_{\sqrt y}^{4}f\,dx\right)dy.$$
A többi a $H$ ábrájáról hasonlóan adódik.
</details>

**2.7.** Számítsa ki az $\displaystyle\iint_H e^{x^2}\,dx\,dy$ integrált, ahol $H$-t az $x$-tengely, az $y=x$ és az $x=1$ egyenesek határolják.

<details>
<summary><strong>Megoldás</strong></summary>

$H$ az $O(0,0),A(1,1),B(1,0)$ háromszög. Liouville tétele szerint $\int e^{x^2}\,dx$ nem írható fel elemi képlettel, ezért csak függőlegesen integrálhatunk:
$$\iint_H f=\int_0^1\!\left(\int_0^x e^{x^2}\,dy\right)dx=\int_0^1 xe^{x^2}\,dx=\frac12\left[e^{x^2}\right]_0^1=\frac{e-1}{2}\approx 0{,}859.$$
*(A forrás itt $\frac{e}{2}\approx 1{,}3591$-et ír, ami az alsó határ figyelmen kívül hagyásából eredő elírás.)*
</details>

#### Transzformációk

**2.8.** Számítsuk ki az alábbi $\displaystyle\iint_H f$ integrálokat *polártranszformáció* segítségével, ahol:

**a)** $f(x,y)=y$ és $H=$ origó közepű egységsugarú kör I. síknegyedbe eső negyede,

**b)** $f(x,y)=yx$ és $H=$ az $(1,0)$ közepű egységsugarú kör $x$ tengely feletti fele,

**c₁)** $f(x,y)=\sqrt[3]{x^2+y^2}$ és $H=\{(x,y):x^2+y^2\le 1,\ y>-x\}$,

**c₂)** $f(x,y)=\ln(1+x^2+y^2)$ és $H=\{(x,y):1\le x^2+y^2\le 4\}$,

**c₃)** $f(x,y)=x^3-2xy$ és $H=\left\{(x,y):1\le x^2+y^2\le 4,\ \dfrac{\sqrt 3}{3}x\le y\le\sqrt 3\,x\right\}$,

**d)** $f(x,y)=3x+y$ és $H=\left\{(x,y):\dfrac{x^2}{4}+\dfrac{y^2}{9}\le 1\right\}.$

<details>
<summary><strong>Útmutatás</strong></summary>

Kör esetén polártranszformáció $x=r\cos\varphi+u_0,\ y=r\sin\varphi+v_0$, Jacobi-determinánsa $J(r,\varphi)=r$. Ellipszisre Yvory-transzformáció $x=ar\cos\varphi+u_0,\ y=br\sin\varphi+v_0$, $Y(r,\varphi)=r\cdot a\cdot b$. Általában $\iint_H f\,dx\,dy=\iint_M f(u,v)\cdot|\det J|\,dk\,d\ell$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $0\le r\le 1,\ 0\le\varphi\le\frac\pi2$: $\int_0^{\pi/2}\sin\varphi\left(\int_0^1 r^2\,dr\right)d\varphi=\frac13[-\cos\varphi]_0^{\pi/2}=\frac13$.

**b)** $(u_0,v_0)=(1,0),\ 0\le r\le 1,\ 0\le\varphi\le\pi$: $\int_0^\pi\int_0^1\big(r^3\sin\varphi\cos\varphi+r^2\sin\varphi\big)\,dr\,d\varphi=\frac{1}{16}\cdot 0+\frac13(1+1)=\frac23$.

A $c_1)$–$c_3)$ és $d)$ feladatok ugyanígy, polár- ill. Yvory-transzformációval számolhatók.
</details>

**2.9.** Számítsuk ki az alábbi $\displaystyle\iint_H f$ integrálokat *lineáris transzformáció* segítségével, ahol:

**a)** $f(x,y)=x^2-y^2$ és $H=$ az $A(0,0),B(3,1),C(5,4),D(2,3)$ pontok által meghatározott paralelogramma,

**b)** $f(x,y)=xy$ és $H=$ az $A(0,0),B(1,2),C(1,3),D(2,1)$ pontok által meghatározott paralelogramma,

**c)** $f(x,y)=x+y$ és $H=$ az $A(-2,0),B(0,3),C(2,0),D(0,-3)$ pontok által meghatározott paralelogramma.

<details>
<summary><strong>Útmutatás</strong></summary>

Paralelogrammára (az $\overrightarrow u=(a_1,b_1),\overrightarrow v=(a_2,b_2)$ vektorok feszítik ki, kezdőcsúcs $A(c_1,c_2)$): $x=a_1k+b_1\ell+c_1,\ y=a_2k+b_2\ell+c_2$ ($0\le k,\ell\le 1$), $\det J=a_1b_2-a_2b_1$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\overrightarrow u=(3,1),\ \overrightarrow v=(2,3)$, az $\{x=3k+2\ell,\ y=k+3\ell\}$ helyettesítéssel ($\det J=7$): $\iint_H f=7\int_0^1\int_0^1(8k^2+6k\ell-5\ell^2)\,dk\,d\ell=\frac{35}{2}$.

A $b)$ és $c)$ ugyanígy, a megfelelő lineáris helyettesítéssel.
</details>

**2.10.** Számítsuk ki az alábbi $\displaystyle\iint_H f$ integrálokat *egyéb* transzformáció segítségével, ahol:

**a)** $f(x,y)=\dfrac{y}{x}$, $H=$ az $y=\dfrac{1}{x},\ y=\dfrac{4}{x},\ y=x$ és $y=2x$ görbék által meghatározott korlátos síkrész,

**b\*)** $f(x,y)=1$, $H=$ az $y=\dfrac{1}{x},\ y=\dfrac{4}{x},\ y=x^2/2$ és $y=2x^2$ görbék által meghatározott korlátos síkrész,

**c)** $f(x,y)=2x+3y$, $H=$ az $y=\dfrac{1}{x},\ y=\dfrac{3}{x},\ y=\dfrac{1}{2}\sqrt{x}$ és $y=5\sqrt{x}$ görbék által meghatározott korlátos síkrész.

<details>
<summary><strong>Útmutatás</strong></summary>

Ha a $H$-t $y=k\cdot\varphi(x)$ és $y=\ell\cdot\psi(x)$ görbeseregek zárják közre, akkor minden $P(x,y)$ a két görbe metszéspontjaként áll elő, amiből egy $(k,\ell)\mapsto(x,y)$ transzformáció és annak $\det J$-je adódik. (Pl. **a)**: $J:(k,\ell)\mapsto\left(\sqrt{\frac k\ell},\sqrt{k\ell}\right)$, $\det J=\frac{1}{2\ell}$.)
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $1\le k\le 4,\ 1\le\ell\le 2$, $\det J=\frac{1}{2\ell}$. A transzformációban $\frac yx=\frac{\sqrt{k\ell}}{\sqrt{k/\ell}}=\ell$, így az integrandus $\ell\cdot\frac{1}{2\ell}=\frac12$: $\iint_H\frac yx\,dx\,dy=\int_1^2\!\left(\int_1^4\frac12\,dk\right)d\ell=\int_1^2\frac32\,d\ell=\frac32$.

**b\*)** $x=k^{1/3}\ell^{-1/3},\ y=k^{2/3}\ell^{1/3}$, $\det J=\frac29\ell^{-1}+\frac19\ell^{-5/3}$: $\iint_H 1\,dx\,dy=\frac43\ln 2-\frac12\,2^{-2/3}+\frac12\,2^{2/3}\approx 1{,}4029$.

**c)** $x=k^{2/3}\ell^{-2/3},\ y=k^{1/3}\ell^{2/3}$, $\det J=\frac23\ell^{-1}$: $\iint_H(2x+3y)\,dx\,dy\approx 25{,}0029$.
</details>

#### Többváltozós integrálok

**2.11.** Számítsuk ki az alábbi szukcesszív többszörös integrálokat:

**a)** $\displaystyle\iiint_H (x+3y^5+xz^2)\,dx\,dy\,dz$ ahol $H$ az $(-1,2,-3)$ és $(4,5,9)$ átlós csúcsokkal meghatározott téglatest,

**b)** $\displaystyle\int_1^2\int_{2-x}^{2+3x}\int_{x-7y}^{x+y}(x^2-3y^3+xz)\,dz\,dy\,dx$, $\qquad$ **c\*)** $\displaystyle\int_0^a\int_0^{b\sqrt{1-\frac{z^2}{a^2}}}\int_{c\sqrt{\frac{x^2}{a^2}+\frac{y^2}{b^2}}}^{c}\frac{yz}{\sqrt x}\,dz\,dy\,dx.$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\int_{-3}^9\int_2^5\int_{-1}^4(x+3y^5+xz^2)\,dx\,dy\,dz=472\,770$.

**b)** A három egymásba ágyazott integrál kiszámítása után $\frac{-342928}{5}=-68585{,}6$.

**c\*)** $\frac{8}{45}\sqrt a\,b^2c^2$.
</details>

## 3. fejezet
### F3. Többváltozós integrálok alkalmazásai

**3.1.** Számítsuk ki az alábbi görbék közötti *területet*:

**a)** $y=\dfrac{1}{x},\quad y=\dfrac{4}{x},\quad y=x$ és $y=2x$,

**b)** $y=\dfrac{1}{x},\quad y=\dfrac{4}{x},\quad y=x^2/2$ és $y=2x^2.$

<details>
<summary><strong>Útmutatás</strong></summary>

$H\subseteq\mathbb{R}^2$ terület: $T_H=\iint_H 1\,dx\,dy$ (a 2.10. transzformációival).
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A 2.10.a) transzformációjával $T_H=\int_1^2\!\left(\int_1^4\frac{1}{2\ell}\,dk\right)d\ell=\frac32\ln 2\approx 1{,}0397$.

**b)** A 2.10.b) feladatban már kiszámoltuk: $T_H=\frac43\ln 2-\frac12\,2^{-2/3}+\frac12\,2^{2/3}\approx 1{,}4029$.
</details>

**3.2.** Határozza meg az $f(x,y)=1-x^2-2y^2$ ellipszis keresztmetszetű „paraboloid" $[x,y]$ sík feletti részének *térfogatát*.

**3.3.** Határozza meg az $x^2+z^2=r^2$ és $y^2+z^2=r^2$ egymásra merőleges hengerek *metszetének térfogatát*.

<details>
<summary><strong>Útmutatás</strong></summary>

$V_P=\iiint_P 1\,dx\,dy\,dz$. Az $[x,y]$ sík feletti részt felülről a megfelelő függvényfelület határolja.
</details>

<details>
<summary><strong>Megoldás (3.2)</strong></summary>

A felület az $[x,y]$ síkot az $1-x^2-2y^2=0$ ellipszisben metszi, így $H=\{x^2+2y^2\le 1\}$. Yvory-transzformációval $V=\int_0^{2\pi}\int_0^1(1-r^2\cos^2\varphi-r^2\sin^2\varphi)\frac{r}{\sqrt2}\,dr\,d\varphi=\frac{\sqrt2\,\pi}{4}\approx 1{,}1107$.
</details>

<details>
<summary><strong>Megoldás (3.3)</strong></summary>

A két henger tengelyei az $x$ és $y$ tengelyek; felülről a határoló $z=\sqrt{r^2-x^2}$. A közös rész egy nyolcadát számolva $V=16\int_0^r\!\int_0^x\sqrt{r^2-x^2}\,dy\,dx=16\int_0^r x\sqrt{r^2-x^2}\,dx=\frac{16}{3}r^3$. (Bláthy Ottó szemléletes megoldása szerint a köbtartalom a gömbéhez úgy aránylik, mint $4:\pi$, tehát $\frac{4}{\pi}\cdot\frac43 r^3\pi=\frac{16}{3}r^3$.)
</details>

**3.4.** Mekkora *térfogatot* metsz ki az origó középpontú, $R=2$ sugarú gömbből az $\rho=R/2$ sugarú, az origót érintő henger (*Viviani-féle test*)?

<details>
<summary><strong>Útmutatás</strong></summary>

A henger egyenlete $(x-1)^2+y^2=\rho^2$, a térfogatot felülről a gömb határolja.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

A gömb $z=\sqrt{R^2-x^2-y^2}$, a tartomány a $T=\{(x-1)^2+y^2\le\rho^2\}$ origót érintő kör. Polártranszformációval ($T:\ -\frac\pi2\le\varphi\le\frac\pi2,\ 0\le r\le R\cos\varphi$):
$$V=2\int_{-\pi/2}^{\pi/2}\!\int_0^{R\cos\varphi}r\sqrt{R^2-r^2}\,dr\,d\varphi=\frac43R^3\left(\frac\pi2-\frac23\right)\approx 1{,}2055\,R^3.$$
</details>

**3.5.** Határozza meg a $z=xy$ ún. **„nyeregfelület"** $x^2+y^2=R$ kör „feletti" részének *felszínét*.

**3.6.** Határozza meg a $z=\sqrt{1-x^2-y^2}$ forgási paraboloid alakú tükör *felszínét*.

<details>
<summary><strong>Útmutatás</strong></summary>

A $z=f(x,y)$ felület felszíne $A=\iint_H\sqrt{1+\left(\frac{\partial}{\partial x}f\right)^2+\left(\frac{\partial}{\partial y}f\right)^2}\,dx\,dy$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**3.5.** $\frac{\partial}{\partial x}f=y,\ \frac{\partial}{\partial y}f=x$, polártranszformációval $A=\int_0^{2\pi}\!\int_0^R r\sqrt{1+r^2}\,dr\,d\varphi=\frac{2\pi}{3}\big((R^2+1)^{3/2}-1\big)$.

**3.6.** $\frac{\partial}{\partial x}f=-2x,\ \frac{\partial}{\partial y}f=-2y$, polártranszformációval $A=\iint_{x^2+y^2\le1}\sqrt{1+4x^2+4y^2}\,dx\,dy=\frac{\pi}{6}\big(\sqrt{125}-1\big)$.
</details>

**3.7.** Határozzuk meg az alábbi, $[x,y]$ síkban fekvő síkidomok *súlypontjainak* koordinátáit:

**a)** az $y=x^2$ görbe és $y=0,\ x=4$ egyenesek által határolt (homogén) paraboladarab,

**b)** az $x^2+y^2\le R^2$ homogén körlemez $y\ge 0$ fele,

**c)** $\left\{(x,y):x^{2/3}+y^{2/3}\le R^2\right\}$ homogén *asztroid* I. síknegyedbe eső negyede.

<details>
<summary><strong>Útmutatás</strong></summary>

Síklemez ($\rho(x,y)$ sűrűség) súlypontja $x_s=\dfrac{\iint_H x\rho\,dx\,dy}{\iint_H\rho\,dx\,dy}$, $y_s=\dfrac{\iint_H y\rho\,dx\,dy}{\iint_H\rho\,dx\,dy}$. Tehetetlenségi nyomatékok: $\Theta_x=\iint_H y^2\rho\,dx\,dy$, $\Theta_y=\iint_H x^2\rho\,dx\,dy$, $\Theta_z=\Theta_x+\Theta_y$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** Nevező $T=\int_0^4\sqrt x\,dx=\frac{16}{3}$, $x_s$ számláló $\int_0^4 x\sqrt x\,dx=\frac{64}{5}$, $y_s$ számláló $\int_0^4\frac12 x\,dx=4$, tehát $S=\left(\frac{12}{5},\frac34\right)$.

**b)** Szimmetria miatt $x_s=0$; a félkör területe $\frac{R^2\pi}{2}$, $\iint_H y=\frac23R^3$, így $S=\left(0,\frac{4R}{3\pi}\right)$.

**c)** Az $x=r\cos^3\varphi,\ y=r\sin^3\varphi$ asztroid-transzformációval ($\det J=3r\cos^2\varphi\sin^2\varphi$) a nevező $\frac{3\pi}{32}R^2$, a számláló $\frac{8}{105}R^3$, tehát szimmetria miatt $S=\left(\frac{256}{315\pi}R,\frac{256}{315\pi}R\right)$.
</details>

**3.8.** Az $[x,y]$ sík $(0,0),(1,0),(1,1),(0,1)$ négyzete fölé állított ($z$ tengellyel párhuzamos) négyzetes hasábot elvágjuk a $(0,0,0),(1,0,1),(1,1,2),(0,1,1)$ pontokon átmenő $S$ síkkal.

**a)** Határozzuk meg a keletkezett test *súlypontjának* $[x,y]$ síkra való *vetületét*.

**b)** Határozzuk meg a súlypont $z$ koordinátáját is!

<details>
<summary><strong>Útmutatás</strong></summary>

A sík egyenlete $x+y-z=0$, vagyis a test magassága $f(x,y)=x+y$, amit a négyzet alakú lemez $\rho(x,y)$ tömegeloszlásának vehetünk.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A test szimmetrikus az $y=x$ egyenesre, így $x_s=y_s$. A számláló $\iint_{[0,1]^2}x(x+y)\,dx\,dy=\frac{7}{12}$, a nevező $\iint_{[0,1]^2}(x+y)\,dx\,dy=1$, tehát a súlypont vetülete $\overline S=\left(\frac{7}{12},\frac{7}{12}\right)$.

**b)** $z_s$ számlálója $\iiint_K z\,dx\,dy\,dz=\int_0^1\!\int_0^1\frac12(x+y)^2\,dx\,dy=\frac{7}{12}$, nevezője $V_K=1$, tehát $S=\left(\frac{7}{12},\frac{7}{12},\frac{7}{12}\right)$.
</details>

**3.9.** Határozzuk meg a $z=0,\ x=a,\ y=b$ síkokkal és a $z^2=xy$ felülettel határolt homogén test *súlypontját*.

**3.10.** Határozzuk meg az $R$ sugarú, $m$ tömegű homogén körlap középpontjára vonatkozó *tehetetlenségi nyomatékát*!

**3.11.** Határozzuk meg az $a\times b$ méretű homogén téglalap oldalaira vonatkozó *tehetetlenségi nyomatékát*.

**3.12.** Határozzuk meg az $y=x^2$ görbe és az $y=x$ egyenes közötti homogén síklemez origóra vonatkozó *tehetetlenségi nyomatékát*.

**3.13.** Határozzuk meg az $a$ élű kocka középpontján átmenő, az élekkel párhuzamos tengelyre vonatkozó *tehetetlenségi nyomatékát*.

<details>
<summary><strong>Útmutatás</strong></summary>

Térbeli $K$ test ($\rho(x,y,z)$): tömeg $m=\iiint_K\rho$, súlypont $x_s=\frac1m\iiint_K x\rho$ stb. Tehetetlenségi nyomatékok: $\Theta_x=\iiint_K(y^2+z^2)\rho$, $\Theta_y=\iiint_K(x^2+z^2)\rho$, $\Theta_z=\iiint_K(x^2+y^2)\rho$, $\Theta_0=\iiint_K(x^2+y^2+z^2)\rho$; tetszőleges $e$ egyenesre $\Theta_e=\iiint_K f(x,y,z)\rho$, ahol $f$ az $e$-től való távolság négyzete.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**3.9.** Közös nevező $m=V=\iiint_K 1=\frac49 a^{3/2}b^{3/2}$, $x_s$ számláló $\frac{4}{15}a^{5/2}b^{3/2}$, $y_s$ számláló $\frac{4}{15}a^{3/2}b^{5/2}$, $z_s$ számláló $\frac18 a^2b^2$, tehát $S=\left(\frac35 a,\frac35 b,\frac{9}{32}\sqrt{ab}\right)$.

**3.10.** $\rho=\frac{m}{R^2\pi}$ állandó, polártranszformációval $\Theta_z=\frac{m}{R^2\pi}\iint_{x^2+y^2\le R^2}(x^2+y^2)\,dx\,dy=\frac{m}{R^2\pi}\cdot\frac{2\pi R^4}{4}=\frac12 R^2m$.

**3.11.** $H=[0,a]\times[0,b]$: $\Theta_x=\rho\iint_H y^2\,dx\,dy=\frac{\rho}{3}ab^3=\frac13 mb^2$ és $\Theta_y=\frac13 ma^2$ ($m=\rho ab$). (Ez egy $b$ ill. $a$ hosszúságú, $m$ tömegű rúd végpontjára vett nyomatéka is.)

**3.12.** $\Theta_{(0,0)}=\Theta_x+\Theta_y=\iint_H(x^2+y^2)\,dx\,dy=\int_0^1\!\int_{x^2}^x(x^2+y^2)\,dy\,dx=\frac{3}{35}$.

**3.13.** A kocka középpontja az origó, a tengely az $x$ tengely: $\Theta_x=\rho\iiint(y^2+z^2)\,dx\,dy\,dz=\rho a\left(\frac{1}{12}a^4+\frac{1}{12}a^4\right)=\frac16\rho a^5=\frac16 ma^2$ ($m=\rho a^3$).
</details>

## 4. fejezet
### F4. Közönséges differenciálegyenletek alapjai

**4.0.** Adjuk meg az alábbi differenciálegyenletek értelmezési tartományát:

**a)** $y'=x^2-y^2,\qquad y'=2\sqrt{y},\qquad y'=\dfrac{x\cdot y}{x^2-1},\qquad y'=\dfrac{x}{2y}+\dfrac{y}{2x},$

**b)** $x\cdot y'+2y=3x,\qquad x-\dfrac{y^2}{x^3}+\dfrac{y}{x^2}\cdot y'=0.$

<details>
<summary><strong>Útmutatás</strong></summary>

$x$-re és $y$-ra mindig egy (összefüggő) intervallumot kell megadnunk!
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $y'=x^2-y^2$: $x,y\in\mathbb{R}$. $\quad y'=2\sqrt y$: $x\in\mathbb{R},y\ge 0$. $\quad y'=\frac{xy}{x^2-1}$: $x>1$ vagy $x<1$, $y\in\mathbb{R}$. $\quad y'=\frac{x}{2y}+\frac{y}{2x}$: $(x>0$ vagy $x<0)$ és $(y>0$ vagy $y<0)$, azaz valamelyik (nyílt) síknegyed.

**b)** $xy'+2y=3x\Rightarrow y'=3-2\frac yx$: $x>0$ vagy $x<0$, $y\in\mathbb{R}$. $\quad x-\frac{y^2}{x^3}+\frac{y}{x^2}y'=0\Rightarrow y'=\frac{y^2-x^4}{xy}$: valamelyik nyílt síknegyed.
</details>

**4.1.** Számítsuk ki az alábbi explicit egyenletek kezdetiérték-feladatai megoldásgörbéinek megadott pontbeli érintő egyenletét! Számítsuk ki $y''$ értékét is a megadott pontokban!

**a)** $y'=x^2-y^2,\qquad y(1)=2,$

**b)** $y'(x)=\dfrac{x^2}{y\cdot(1+x^3)},\qquad y(2)=3,$

**c)** $y'(x)=\dfrac{x}{2y}+\dfrac{y}{2x},\qquad y(-1)=-2,$

**d\*)** $x\cdot y'(x)+2\cdot y(x)=3x,\qquad y(0)=0.$

<details>
<summary><strong>Útmutatás</strong></summary>

Pl. **a)**: $x_0=1,\ y_0=2$; az érintő egyenes $y=y(x_0)+y'(x_0)(x-x_0)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $m=y'(1)=1^2-2^2=-3$, érintő $y=2-3(x-1)=5-3x$; $y''=2x-2yy'$, $y''(1)=2-2\cdot2\cdot(-3)=14$.

**b)** $m=y'(2)=\frac{4}{27}$, érintő $y=\frac{4}{27}x+\frac{73}{27}$; $y''(2)=\frac{-4}{81}$.

**c)** $m=y'(-1)=\frac54$, érintő $y=-2+\frac54(x+1)$; $y''(-1)=\frac34$.

**d\*)** $x=y=0$ esetén az egyenletből $y'(0)$ nem határozható meg, ezért a K.É.P.-nak *nincs* megoldása.
</details>

**4.2.** Vázoljuk az alábbi explicit egyenletek iránymezőjét, a megadott tartományok legalább $4\times 4$ pontjában, majd vázoljuk a megoldás-sereget („*általános megoldás*"). Végül rajzoljuk fel a K.É.P. megoldását vázlatosan.

**a)** $y'=x^2-y^2,\quad 2\le x\le 5,\ 1\le y\le 4,\quad y(3)=2,$

**b)** $y'=2\sqrt{y},\quad -2\le x\le 2,\ 0\le y\le 4,\quad y(1)=2,$

**c)** $y'=\dfrac{x\cdot y}{x^2-1},\quad 1<x\le 4,\ 0\le y\le 4,\quad y(2)=1.$

<details>
<summary><strong>Útmutatás</strong></summary>

Először a választott pontokban az érintő egy kis darabját kell felrajzolnunk. (A megoldás után használható a mellékelt Iranymezo.exe program.)
</details>

**4.3.** Oldjuk meg az előző feladat K.É.P.-t *közelítőleg* $\delta=0{,}1$ lépésközzel: számoljunk ki legalább 10 lépést (Euler „*töröttvonal*" közelítő módszere).

<details>
<summary><strong>Útmutatás</strong></summary>

A függvényt egy $\delta$ hosszú intervallumon az érintőjével közelítjük, majd a végpontban az újabb érintővel folytatjuk, s.í.t. (A megoldás után használható a mellékelt Eulertv.exe program.)
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $P_0=(3;2),\ y'(3)=5$, $x_1=3{,}1\Rightarrow y_1=2{,}5$; $y'(3{,}1)=3{,}36\Rightarrow y_2=2{,}836$; … a 10 lépéses Euler-tábla végén $y(4{,}0)\approx 3{,}8684$.

| $i$ | $x_i$ | $y_i$ | $y'_i$ |
|---|---|---|---|
| 0 | 3,0 | 2,0000 | 5,0000 |
| 1 | 3,1 | 2,5000 | 3,3600 |
| 2 | 3,2 | 2,8360 | 2,1971 |
| 5 | 3,5 | 3,3359 | 1,1215 |
| 10 | 4,0 | 3,8684 | 1,0358 |

**b)** hasonlóan $y(2{,}0)\approx 5{,}7027$; **c)** $y(3{,}0)\approx 1{,}6366$.
</details>

**4.4.** Ellenőrizzük, hogy az alábbi egyenleteket kielégítik-e a megadott függvények:

**a)** $y'=\dfrac{y}{x},\qquad y(x)=c\cdot x\ (c\in\mathbb{R})$,

**b)** $y'=\dfrac{x\cdot y}{x^2-1}$ ahol $x^2+\dfrac{y^2}{b^2}=1\ (b>0,|x|\le 1,y>0)$,

**c)** $y'=2\sqrt{y}$ ha $y_1(x)=(x-c)^2$ ill. $y_2(x)=\begin{cases}(x-c)^2 & \text{ha}\quad x\ge c\\ 0 & \text{máskor}\end{cases}\ (c\in\mathbb{R}).$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $y=cx$: $y'=c=\frac{cx}{x}=\frac yx$ ✓.

**b)** $y=b\sqrt{1-x^2}$: $y'=\frac{-2bx}{2\sqrt{1-x^2}}$, és $\frac{xy}{x^2-1}=\frac{xb\sqrt{1-x^2}}{x^2-1}=\frac{xb}{-\sqrt{1-x^2}}$ — ugyanaz ✓.

**c)** $y_1'=2(x-c)$, $2\sqrt{y_1}=2|x-c|$ — CSAK $x\ge c$ esetén egyenlő; $y_2'=2\sqrt{y_2}$ teljesül, hiszen $y_2$ kizárólag $x\ge c$ esetén értelmezett (nemnulla).
</details>

## 5. fejezet
### F5. Elsőrendű differenciálegyenletek

Oldjuk meg az alábbi elsőrendű differenciálegyenleteket.

#### Szétválasztható változójú egyenletek

**5.1. a)** $y'(x)=y^2(x)\cdot\cos(x),\quad y(0)=2,$
**b)** $y'(x)=\dfrac{x^2}{y\cdot(1+x^3)},\quad y(1)=2,$
**c)** $y'(x)-1-x-y^2-xy^2=0,\quad y(0)=1.$

<details>
<summary><strong>Útmutatás</strong></summary>

$y'=H(y)\cdot G(x)$ esetén osztunk $H(y)$-nal, integrálunk: $\int\frac{1}{H(y)}\,dy=\int G(x)\,dx+C$, általános megoldás $y=\mathcal H^{-1}(\mathcal G(x)+C)$. A K.É.P.-ből $C$, $Dom(y)$ egyetlen összefüggő intervallum.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{-1}{y}=-\sin x+C$, általános megoldás $y=\frac{1}{\sin x+C}$; $y(0)=2\Rightarrow C=\frac12$. $Dom(y)$: $-0{,}5236<x<3{,}6652$.

**b)** $\frac12 y^2=\frac13\ln|1+x^3|+C$, $y=\pm\sqrt{\frac23\ln|1+x^3|+C}$; $C=4-\frac23\ln2\approx 3{,}5379$. $Dom(y)$: $-1<x$.

**c)** $y'=(1+x)(1+y^2)$, $\arctan y=x+\frac12x^2+C$, $y=\operatorname{tg}\!\left(x+\frac12x^2+C\right)$; $C=\frac\pi4$. $Dom(y)$: $-2{,}6034<x<0{,}6034$.
</details>

#### Visszavezethető típusok

A következő típusú differenciálegyenleteket bizonyos transzformációkkal szétválasztható változójú egyenletekké alakíthatjuk.

**5.2. a)** $y'(x)=(y-x)^2,\quad y(1)=3,$ $\qquad$ **b)** $y'(x)=(2x+3y)^2+1,\quad y(0)=-1,$
**c)** $y'(x)=\cos(x+y),\quad y(0)=\dfrac{\pi}{2}.$

<details>
<summary><strong>Útmutatás</strong></summary>

$y'=F(ax+by+c)$ típusnál az $u:=ax+by+c$ helyettesítés szétválaszthatóvá tesz: $y'=\frac1b u'-\frac ab$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $u=y-x$: $y=\frac{2}{1-e^{2(x+C)}}-1+x$; $C=\frac12\ln\frac13-1\approx -1{,}5493$. $Dom(y)$: $x<-C\approx 1{,}5493$.

**b)** $u=2x+3y$: $y=\frac{5}{3\sqrt{15}}\operatorname{tg}\!\left(\sqrt{15}(x+C)+\frac\pi2\right)-\frac23x$; $C\approx -0{,}7062$. $Dom(y)$: $-0{,}1049<x<0{,}7062$.

**c)** $u=x+y$: $y=2\arctan(C+x)-x$; $C=1$. $Dom(y)=\mathbb{R}$.
</details>

**5.3. a)** $y'(x)=\dfrac{y^2}{x^2}+\dfrac{y}{x},\quad y(1)=3,$ $\qquad$ **b)** $y'(x)=\dfrac{x}{2y}+\dfrac{y}{2x},\quad y(-1)=-2,$
**c)** $y'(x)=\dfrac{y}{x}-\cos\dfrac{y}{x},\quad y(3)=\pi.$

<details>
<summary><strong>Útmutatás</strong></summary>

$y'=F\!\left(\frac yx\right)$ („homogén fokszámú") esetén $u:=\frac yx$, $y=xu$, $y'=u+xu'$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $u=\frac yx$: $\frac{-1}{u}=\ln x+C$, $y=\frac{-x}{\ln x+C}$; $C=-\frac13$. $Dom(y)$: $1<x<e^{1/3}\approx 1{,}3956$.

**b)** $u=\frac yx$: $y=x\sqrt{1-\frac{1}{x\,e^C}}$ ahol $C=\ln\frac13$. $Dom(y)$: $x<0$.

**c)** $u=\frac yx$: $y=x\arcsin\!\left(1-\frac{2}{1+x^{-2}D}\right)$ ahol $D\approx 125{,}3538$. $Dom(y)$: $0<x$.
</details>

#### Lineáris egyenletek

**5.4.** $y'(x)-x\cdot y(x)=x,\quad y(0)=1.$

<details>
<summary><strong>Útmutatás</strong></summary>

$y'+p(x)y=q(x)$. **I. Direkt:** $P=\int p$, beszorzunk $e^{P}$-vel, $(ye^{P})'=qe^{P}$, így $y=e^{-P}\int q e^{P}\,dx$. **II. Állandó variálása:** a homogén megoldásban $y=\pm e^{-P}D(x)$ alakot keresünk.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$P(x)=\int -x\,dx=-\frac12x^2$, $\int x e^{-x^2/2}\,dx=-e^{-x^2/2}+C$, így $y=e^{x^2/2}(-e^{-x^2/2}+C)=Ce^{x^2/2}-1$; $y(0)=C-1=1\Rightarrow C=2$. $Dom(y)=\mathbb{R}$.
</details>

**5.5. a)** $y'(x)+\dfrac{y(x)}{x}+e^x=0,\quad y(1)=0,$ $\qquad$ **b)** $y'(x)-\dfrac{2x}{1+x^2}\cdot y(x)=1,\quad y(0)=1,$
**c)** $y'(x)+\dfrac{1-x}{x^2}\cdot y(x)=e^{1/x},\quad y(-1)=2.$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $P=\ln x$, $y=-e^x\left(1-\frac1x\right)+\frac Cx$; $y(1)=0\Rightarrow C=0$. $Dom(y)=\mathbb{R}^+$.

**b)** $P=-\ln(x^2+1)$, $y=(x^2+1)(\arctan x+C)$; $y(0)=1\Rightarrow C=1$. $Dom(y)=\mathbb{R}$.

**c)** $P=-\ln(-x)-\frac1x$ (mert $x_0<0$), $y=xe^{1/x}(\ln(-x)-C)$; $y(-1)=2\Rightarrow C=2e\approx 5{,}4366$. $Dom(y)=\mathbb{R}^-$.
</details>

**5.6. a)** $y'(x)+y(x)=e^{-x},\quad y(1)=0,$ $\qquad$ **b)** $x\cdot y'(x)+2y(x)=3x,\quad y(0)=0,$
**c)** $(1-x^2)\cdot y'(x)+x\cdot y(x)=1,\quad y(0)=1,$
**d)** $y'(x)+\operatorname{tg}(x)\cdot y(x)=\sin(2x),\quad y(0)=2.$

#### Bernoulli-egyenletek

**5.7. a)** $y'(x)-\dfrac{y(x)}{x}=2y^2(x),\quad y(1)=2,$ $\qquad$ **b)** $y'(x)-y(x)=x\cdot\sqrt{y(x)},\quad y(0)=1,$
**c)** $y'(x)-\dfrac{2y}{x}=\dfrac{y^3}{x^3},\quad y(-1)=2.$

<details>
<summary><strong>Útmutatás</strong></summary>

Bernoulli: $y'+a(x)y=b(x)y^\beta$. Az $u:=y^{1-\beta}$ helyettesítés lineáris egyenletre vezet.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $u=y^{-1}$: $u'+\frac ux=-2$, $y=\frac{x}{C-x^2}$; $y(1)=\frac{1}{C-1}=2\Rightarrow C=\frac32$. $Dom(y)$: $0<x<\sqrt{\frac32}\approx 1{,}2247$.

**b)** $u=y^{1/2}$: $u'-\frac12u=\frac x2$, $y=\big(e^{x/2}(-e^{-x/2}(x+2)+C)\big)^2$; $y(0)=1\Rightarrow C=3$. $Dom(y)$: $x\in\mathbb{R}$.

**c)** $u=y^{-2}$: $u'+\frac4x u=\frac{-2}{x^3}$, $y=\frac{x^2}{\sqrt{C-x^2}}$; $y(-1)=2\Rightarrow C=\frac54$. $Dom(y)$: $-\sqrt{\frac54}<x<0$.
</details>

#### Egzakt egyenletek

**5.8. a)** $(x^2+y)-(y-x)y'(x)=0,\quad y(2)=3,$
**b)** $y'(x)=\dfrac{2x+3y\cdot x^2}{3y^2-x^3},\quad y(0)=0,$
**c)** $x-\dfrac{y^2}{x^3}+\dfrac{y}{x^2}\cdot y'(x)=0,\quad y(1)=-2,$
**d)** $\left(\dfrac{y}{x+y}\right)^2+\left(\dfrac{x}{x+y}\right)^2\cdot y'(x)=0,\quad y(2)=3.$

<details>
<summary><strong>Útmutatás</strong></summary>

Egzakt: $P(x,y)+Q(x,y)y'=0$, ahol $\frac{\partial P}{\partial y}=\frac{\partial Q}{\partial x}$. $\int P\,dx+\psi(y)=\int Q\,dy+\varphi(x)=F(x,y)$; a K.É.P.-ből $F(x,y)=c_0$, amit $y$-ra megoldva kapjuk a megoldást.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\frac{\partial P}{\partial y}=1=\frac{\partial Q}{\partial x}$ ✓; $F(x,y)=\frac13x^3+yx-\frac12y^2=c$, $F(2,3)=\frac{25}{6}$, így $y=x+\frac{\sqrt3}{3}\sqrt{2x^3+3x^2-25}$.

**b)** $(2x+3yx^2)+(x^3-3y^2)y'=0$, $\frac{\partial P}{\partial y}=3x^2=\frac{\partial Q}{\partial x}$ ✓; $F=x^2+yx^3-y^3=F(0,0)=0$, $y=\mathcal R(x)+\frac{x^3}{3\mathcal R(x)}$ ahol $\mathcal R(x)=\sqrt[3]{\sqrt{x^4/4-x^9/27}+x^2/2}$.

**c)** $\frac{\partial P}{\partial y}=\frac{-2y}{x^3}=\frac{\partial Q}{\partial x}$ ✓; $F=\frac12x^2+\frac{1}{2x^2}y^2=F(1,-2)=\frac52$, $y=-x\sqrt{5-x^2}$.

**d)** $\frac{\partial P}{\partial y}=\frac{2xy}{(x+y)^3}=\frac{\partial Q}{\partial x}$ ✓; $F=\frac{xy}{x+y}=F(2,3)=\frac65$, $y=\frac{6x}{5x-6}$. (Az egyenlet $y'=\frac{-y^2}{x^2}$ alakra is hozható, vagyis szeparálható.)
</details>

## 6. fejezet
### F6. Elsőrendű differenciálegyenletek alkalmazásai

**6.1.** Határozzuk meg azon függvénygörbéket, melyeket az $y$ tengely körül állandó $\omega$ szögsebességgel megforgatva *tetszőleges* pontjára helyezett pontszerű test egyensúlyban marad.

<details>
<summary><strong>Megoldás</strong></summary>

Az $\left(\overrightarrow F_g+\overrightarrow F_c\right)\parallel\overrightarrow F_t$ és $\overrightarrow F_t\perp e$ feltételekből $f'(x_0)=\frac{F_c}{F_g}=\frac{mx_0\omega^2}{mg}=kx_0$ ($k>0$), ahonnan $f(x)=\int kx\,dx=\frac k2x^2+C$ — tehát a forgó pohár víz felszíne forgási paraboloid. *(9. ábra.)*
</details>

**6.2.** Határozzuk meg azon görbék egyenletét, amelyeknél az érintési pont felezi az érintőnek a koordinátatengelyek közötti szakaszát.

<details>
<summary><strong>Megoldás</strong></summary>

A felezés feltétele $x\cdot f'(x)=-f(x)$ szétválasztható egyenletre vezet: $\ln f=-\ln x+C$, tehát $f(x)=\frac{e^C}{x}=\frac Dx$ ($D>0$).
</details>

**6.3.** Keressük meg azokat az $y=f(x)$ görbéket, amelyeknek bármely $E(x_0,y_0)$ pontjára teljesül a következő: az $E$-ben húzott *érintő*, az érintési pontban húzott „*függőleges*" *egyenes* ($x=x_0$) és a „vízszintes" ordináta- ($y$-) *tengely* által határolt háromszög területe (mindig) egységnyi.

<details>
<summary><strong>Megoldás</strong></summary>

A háromszög területe $T(x_0)=\mp\frac12\frac{f^2(x_0)}{f'(x_0)}=1$, ami az $f'(x)=\mp\frac12 f^2(x)$ szétválasztható egyenletre vezet, megoldása $f(x)=\frac{-1}{\mp x/2+C}=\frac{2}{\pm x+D}$ ($C,D\in\mathbb{R}$).
</details>

**6.4.** Egy test 10 perc alatt $100\,{}^\circ$C-ról $60\,{}^\circ$C-ra hűlt le. A környező levegő hőmérsékletét $20\,{}^\circ$C-on tartják. Mikorra hűl le a test $25\,{}^\circ$C-ra, ha a hűlés sebessége arányos a test és a környezet hőmérsékletének különbségével?

<details>
<summary><strong>Megoldás</strong></summary>

$x'(t)=k(x(t)-20)$ ($k<0$), $x(0)=100,\ x(10)=60$. Általános megoldás $x(t)e^{-kt}=20e^{-kt}+C$, a K.É.P.-ból $C=80,\ k=-\frac{1}{10}\ln2\approx -0{,}0693$. Az $x(t_0)=25$ egyenlet megoldása $t_0=40$ perc.
</details>

**6.5.** $100$ gr sóra vizet öntünk és keverjük, az oldódás sebessége a még fel nem oldódott só tömegével arányos. 1 perc elteltével még $50$ gr feloldatlan só volt az oldatban. Adjuk meg a feloldott só tömegének időtől való függését!

<details>
<summary><strong>Megoldás</strong></summary>

$x(t)$ a fel nem oldott só: $x'(t)=k\,x(t)$ ($k<0$), $x(0)=100,\ x(1)=50$, megoldása $x(t)=100\cdot\left(\frac12\right)^t$ ($k=-\ln2\approx -0{,}6931$). A *feloldott* só mennyisége $100\left(1-\frac{1}{2^t}\right)$.
</details>

**6.6.** Egy $50$ literes tartályban $8\%$-os sóoldat van. Egyszerre megnyitunk két csapot: az egyiken $4\,\ell/\text{perc}$ sebességgel $10\%$-os sóoldat folyik be, a másikon (egyenletes elkeveredést feltételezve) ugyancsak $4\,\ell/\text{perc}$ sebességgel folyik ki az oldat. Mennyi só lesz a tartályban $15$ perc múlva?

<details>
<summary><strong>Megoldás</strong></summary>

$m(t)$ az oldott só: $m'(t)=0{,}4-\frac{4}{50}m(t)$, $m(0)=4$. Megoldása $m(t)=Ce^{-0{,}08t}+5$, $C=-1$; $15$ perc múlva $m(15)=5-e^{-1{,}2}\approx 4{,}6988$ g, a koncentráció $c(15)=\frac{1}{50}m(15)\approx 9{,}4\%$.
</details>

**6.7. \*** A járda szélén húzunk $h$ hosszú kötélen egy (pontszerű) kiskocsit, amely kezdetben $d>0$ távolságban van a járdától. Milyen görbe mentén halad a kocsi?

<details>
<summary><strong>Megoldás</strong></summary>

Az érintő $y$-tengelymetszetéből $f'(x_0)=\mp\sqrt{\frac{h^2-x_0^2}{x_0^2}}$, ahonnan
$$f(x)=\pm\int\sqrt{\frac{h^2-x^2}{x^2}}\,dx=h\ln\!\left(\frac{\sqrt{h^2-x^2}-h}{x}\right)+\sqrt{h^2-x^2}+C.$$
A $C$ az $f(d)=0$ K.É.P.-ból. A görbe neve *vonszolási görbe* (traktrix).
</details>

**6.8.** Tetszőleges edény alján levő, az edény méreteihez képest kisméretű lyukon keresztül a víz kifolyási sebessége $v=0{,}6\sqrt{2gh}$, ahol $h$ a nyílás feletti vízoszlop magassága. Mennyi idő alatt folyik ki a víz az $A$ területű lyukon keresztül, ha az edény

**a)** alapkörén álló henger,
**b)** csúcsán álló (lefelé szűkülő) kúp,
**c)** felül nyitott félgömb.

<details>
<summary><strong>Megoldás</strong></summary>

$V'(t)=-A\cdot 0{,}6\sqrt{2g\,h(t)}$.

**a)** Henger ($T$ alapterület): $h'(t)=-K\sqrt{h(t)}$ szétválasztható, $h(t)=\left(C-\frac K2 t\right)^2$, $C=\sqrt{h_0}$, $0\le t\le\frac CK$.

**b)** Kúp: $h'(t)=-K\,h^{-3/2}(t)$, $h(t)=\left(\frac52(C-Kt)\right)^{2/5}$, $C=\frac25 h_0^{5/2}$.

**c)** Félgömb: a $h$ magasságú süveg térfogata $V=\frac\pi3 h^2(3R-h)$, így $\frac43 R h^{3/2}-\frac25 h^{5/2}=-Kt+C$ ($C=\frac43Rh_0^{3/2}-\frac25h_0^{5/2}$), amelyet közelítőleg (pl. intervallum-felezéssel) oldunk meg $h(t)$-re.
</details>

**6.9.** Milyen alakot vesz fel a két rögzített végénél felfüggesztett homogén, nem nyúló kötél, amit csak a saját súlya terhel?

<details>
<summary><strong>Útmutatás</strong></summary>

Írjuk fel a kötél két közeli, $(x_0,f(x_0))$ és $(x_0+h,f(x_0+h))$ pontjában ható erőket: az érintő irányú kötélerők vízszintes összetevői kiegyenlítik egymást, míg a függőleges összetevők különbsége a gravitációs erővel egyezik meg ($\rho$ sűrűség, $Q$ keresztmetszet).
</details>

<details>
<summary><strong>Megoldás</strong></summary>

A $h\to 0$ határátmenet az $f''(x)=K\sqrt{1+(f'(x))^2}$ egyenletre vezet ($K=\frac{\rho Qg}{F_v}$). Az $u=f'$ helyettesítéssel $\operatorname{Arsinh}(u)=Kx+C_1$, majd integrálva a *láncgörbe* (catenary):
$$f(x)=\frac1K\cosh(Kx+C_1)+C_2,$$
ahol $C_1,C_2$ a két rögzítési pontból (a $\cosh\alpha-\cosh\beta=2\sinh\frac{\alpha+\beta}{2}\sinh\frac{\alpha-\beta}{2}$ azonossággal) határozható meg.
</details>

**6.10.** $u(t)$ feszültségforrásra kapcsolunk sorosan egy $R=20\,\Omega$ ellenállást és egy $L=10\,H$ önindukciójú tekercset. Határozzuk meg a $t\ge 0$ idő függvényében az $i(t)$ áramerősséget, ha $i(0)=0$ és

**a)** $u(t)=100$ V (egyenfeszültség),
**b)** $u(t)=U_0\cdot\sin(\omega t)$ V (váltófeszültség), $\omega=100\pi,\ U_0=240$ V.

<details>
<summary><strong>Útmutatás</strong></summary>

Az áramkörre $R\cdot i(t)+L\cdot i'(t)=u(t)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A szétválasztható egyenlet megoldása $i(t)=\frac{U_0}{R}\left(1-e^{-\frac RL t}\right)$, a feladat adataival $i(t)=5-5e^{-2t}$; $\lim_{t\to\infty}i(t)=\frac{U_0}{R}=5$.

**b)** $L i'+Ri=U_0\sin(\omega t)$ lineáris, általános megoldása $i(t)=\frac{U_0}{\sqrt{L^2\omega^2+R^2}}\sin\!\left(\omega t-\arctan\frac{L\omega}{R}\right)+Ce^{-\frac RL t}$; $i(0)=0\Rightarrow C\approx 0{,}07639$. A paraméterekkel $i(t)\approx 0{,}07639\sin(314t-1{,}5644)+0{,}07639\,e^{-2t}$.
</details>

## 7. fejezet
### F7. Parciális törtekre bontás

**7.1.** Végezze el a következő polinomok maradékos osztását:

**a)** $(x^4+x^2):(x-2)$,
**b)** $(x^3+3x+5):(2x^2-7x+9)$,
**c)** $(4x^5+5x-2):(2x^3+3).$

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $x^4+x^2=(x-2)(x^3+2x^2+5x+10)+20$.

**b)** $x^3+3x+5=(2x^2-7x+9)\left(\frac12x+\frac74\right)+\left(\frac{43}{4}x-\frac{43}{4}\right)$.

**c)** $4x^5+5x-2=(2x^3+3)\cdot 2x^2+(-6x^2+5x-2)$.
</details>

**7.2.** Bontsa fel irreducibilis tényezők szorzatára az alábbi polinomokat:

**a)** $x^3-1,\quad x^3+1,\quad x^4-1,\quad x^4+1,\quad x^2-3x+1,\quad x^2+5x+7,$
**b)** $2x^3-5x^2+3x-2,\quad 2x^3-x^2-1,$
**c\*)** $x^4+2x^3+2x^2+2x-1.$

<details>
<summary><strong>Útmutatás</strong></summary>

Az Algebra Alaptétele (valós változat): minden legalább harmadfokú polinom felbontható alacsonyabb fokú polinomok szorzatára. Másodfokú $p(x)=ax^2+bx+c$ akkor és csak akkor reducibilis, ha $D\ge 0$ (ekkor $p=(x-x_1)(x-x_2)$); $D<0$ esetén irreducibilis.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $x^3-1=(x-1)(x^2+x+1)$, $x^3+1=(x+1)(x^2-x+1)$, $x^4-1=(x-1)(x+1)(x^2+1)$, $x^4+1=(x^2-x\sqrt2+1)(x^2+x\sqrt2+1)$, $x^2-3x+1$ reducibilis ($D>0$), $x^2+5x+7$ irreducibilis ($D<0$).

**b)** $2x^3-5x^2+3x-2=(x-2)(2x^2-x+1)$, $\quad 2x^3-x^2-1=(x-1)(2x^2+x+1)$.

**c\*)** $x^4+2x^3+2x^2+2x-1\approx(x-0{,}3392)(x+1{,}7130)(x^2+0{,}6263x+1{,}7208)$.
</details>

**7.3.** Bontsa fel az alábbi törteket egy *valódi* tört és egy polinom összegére:

$$\dfrac{x^4+3x-6}{x^2+x-2},\quad \dfrac{2x^3-7x}{x^4-3},\quad \dfrac{3x^3-2x^2+4}{x^2-8x+15},\quad \dfrac{x^5+1}{x^5-3x},\quad \dfrac{x^5+2x^2+3}{x+1}.$$

<details>
<summary><strong>Megoldás</strong></summary>

Ahol a számláló fokszáma nem kisebb a nevezőénél, polinomosztással:
$$\frac{x^4+3x-6}{x^2+x-2}=(x^2-x+3)+\frac{-2x}{x^2+x-2},\qquad \frac{3x^3-2x^2+4}{x^2-8x+15}=(3x+22)+\frac{131x-326}{x^2-8x+15},$$
$$\frac{x^5+1}{x^5-3x}=1+\frac{3x}{x^5-3x},\qquad \frac{x^5+2x^2+3}{x+1}=(x^4-x^3+x^2+x-1)+\frac{4}{x+1}.$$
(A $\frac{2x^3-7x}{x^4-3}$ már valódi tört, a számláló foka kisebb.)
</details>

**7.4.** Írja fel az alábbi törtek racionális tört alakját, a konstansok kiszámítása nélkül:

$$\dfrac{x^3-8x^2+12}{(x-1)^2\,(x^2+4x+9)},\quad \dfrac{x^4+5x^2+3}{(x+7)\,(x^2+5x+7)^2},$$

$$\dfrac{x^2+8x+2}{(x-1)^3\,(x^2+4x+9)^2\,(x+7)\,(x^2+5)},\quad \dfrac{3x^3-2x^2+4}{x^2-8x+15}.$$

<details>
<summary><strong>Megoldás</strong></summary>

$$\frac{x^3-8x^2+12}{(x-1)^2(x^2+4x+9)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{Cx+D}{x^2+4x+9},$$
$$\frac{x^4+5x^2+3}{(x+7)(x^2+5x+7)^2}=\frac{A}{x+7}+\frac{Bx+C}{x^2+5x+7}+\frac{Dx+E}{(x^2+5x+7)^2},$$
$$\frac{x^2+8x+2}{(x-1)^3(x^2+4x+9)^2(x+7)(x^2+5)}=\frac{A}{x-1}+\frac{B}{(x-1)^2}+\frac{C}{(x-1)^3}+\frac{Dx+E}{x^2+4x+9}+\frac{Fx+G}{(x^2+4x+9)^2}+\frac{H}{x+7}+\frac{Ix+J}{x^2+5},$$
$$\frac{3x^3-2x^2+4}{x^2-8x+15}=(3x+22)+\frac{A}{x-3}+\frac{B}{x-5}.$$
</details>

**7.5.** Bontsa fel az alábbi törteket parciális törtekre:

$$\dfrac{1}{k\cdot (k+1)},\quad \dfrac{x+6}{x^2+x-2},\quad \dfrac{3x+2}{(x^2+2x+5)\,(x+1)},\quad \dfrac{x^2-1}{x^3+2x^2},\quad \dfrac{x}{(1-2x)^2},$$

$$\dfrac{x}{(x-1)^3},\quad \dfrac{x^3}{(x^2+1)^2},\quad \dfrac{x^2+5}{x^4-16},\quad \dfrac{1}{(1-x^2)\,(1-x^3)},\quad \dfrac{3x^3-2x^2+4}{x^2-8x+15},$$

$$(*)\quad \dfrac{7s^4+23s^3-30s^2-172s-150}{(s+2)^4(s-5)}.$$

<details>
<summary><strong>Útmutatás</strong></summary>

A parciális (elemi/rész-) törtekre bontás módszere megtalálható Szalkai István honlapján (ParcTort-pdfw.pdf) vagy a *Diszkrét matematika és algoritmuselmélet* c. könyv függelékében.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$$\frac{1}{k(k+1)}=\frac1k-\frac{1}{k+1},\qquad \frac{x+6}{x^2+x-2}=\frac{-4/3}{x+2}+\frac{7/3}{x-1},$$
$$\frac{3x+2}{(x^2+2x+5)(x+1)}=\frac{-1/4}{x+1}+\frac{\frac14 x+\frac{13}{4}}{x^2+2x+5},\qquad \frac{x^2-1}{x^3+2x^2}=\frac{-1/2}{x^2}+\frac{1/4}{x}+\frac{3/4}{x+2},$$
$$\frac{x}{(1-2x)^2}=\frac{-1/2}{1-2x}+\frac{1/2}{(1-2x)^2},\qquad \frac{x}{(x-1)^3}=\frac{1}{(x-1)^3}+\frac{1}{(x-1)^2},$$
$$\frac{x^3}{(x^2+1)^2}=\frac{-x}{(x^2+1)^2}+\frac{x}{x^2+1},\qquad \frac{x^2+5}{x^4-16}=\frac{9/32}{x-2}-\frac{9/32}{x+2}-\frac{1/8}{x^2+4},$$
$$\frac{1}{(1-x^2)(1-x^3)}=\frac{1/4}{1-x}+\frac{1/6}{(1-x)^2}+\frac{1/4}{1+x}+\frac{1/3}{1+x+x^2},$$
$$\frac{3x^3-2x^2+4}{x^2-8x+15}=(3x+22)+\frac{-33{,}5}{x-3}+\frac{164{,}5}{x-5},$$
$$(*)\quad \frac{7s^4+23s^3-30s^2-172s-150}{(s+2)^4(s-5)}=\frac{11317/2401}{s+2}-\frac{2/343}{(s+2)^2}-\frac{2/49}{(s+2)^3}-\frac{2/7}{(s+2)^4}+\frac{5490/2401}{s-5}.$$
</details>

## 8. fejezet
### F8. Laplace-transzformáció és inverze

**8.1. a)** Vázoljuk az alábbi függvényeket és számítsuk ki Laplace-transzformáltjukat a definíció alapján:

$$f_1(t)=\begin{cases}1 & \text{ha}\quad 2\le t<3\\ 0 & \text{máskor}\end{cases},\qquad f_2(t)=\begin{cases}1 & \text{ha}\quad 2\le t\\ 0 & \text{máskor}\end{cases},$$

$$f_3(t)=\begin{cases}t & \text{ha}\quad 3\le t\\ 0 & \text{máskor}\end{cases},\qquad (!)\ f_4(t)=\begin{cases}t-1 & \text{ha}\quad 1\le t<2\\ 1 & \text{ha}\quad 2\le t\\ 0 & \text{máskor}\end{cases},$$

$f_5(t)=$ a $(3,2)$ és $(5,7)$ pontokat összekötő szakasz,

$$f_6(t)=\begin{cases}\sin(t) & \text{ha}\quad 2\pi\le t\le 4\pi\\ 0 & \text{máskor}\end{cases},\qquad f_7(t)=\begin{cases}k & \text{ha}\quad k-1\le t<k\ (k=1,2,3,\dots)\\ 0 & \text{máskor}\end{cases}.$$

**b)** Az alábbi periodikus függvényekhez keressünk képletet, majd határozzuk meg Laplace-transzformáltjaikat (használjuk a *Heaviside*-függvényt: $H(t)=1$ ha $t\ge 0$ és $H(t)=0$ máskor).

*(1. ábra: két periodikus jel — (i) négyszögjel $b$ magassággal, $a$ periódussal; (ii) fűrészfog-jel $b$ magassággal, $a$ periódussal.)*

<details>
<summary><strong>Útmutatás</strong></summary>

A Laplace-transzformáció definíciója: $F(s)=\mathcal L(f)(s):=\int_0^\infty f(t)e^{-st}\,dt$ (ha az improprius integrál konvergens). Alaptulajdonságok és transzformáltak: Szalkai honlapja (Laplace-tabl+.pdf).
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A definíció szerint:
$$\mathcal L(f_1)=\frac{e^{-2s}-e^{-3s}}{s},\quad \mathcal L(f_2)=\frac1s e^{-2s},\quad \mathcal L(f_3)=\frac{3s+1}{s^2}e^{-3s},\quad \mathcal L(f_4)=\frac{1}{s^2}\left(e^{-s}-e^{-2s}\right),$$
$$\mathcal L(f_5)=\frac{-1}{2s^2}\left(e^{-5s}(14s+5)-e^{-3s}(4s+5)\right),\quad \mathcal L(f_6)=\frac{1}{s^2+1}\left(e^{-2\pi s}-e^{-4\pi s}\right),\quad \mathcal L(f_7)=\frac{e^{-s}(e^s-1)}{s(e^{-s}-1)^2}.$$

**b)** Periodikus jelek a Heaviside-függvénnyel: $f=b(H(t)-H(t-a)+H(t-2a)-\dots)\Rightarrow \mathcal L(f)=\frac{b}{s(1+e^{-as})}$; $g=\frac ba tH(t)-bH(t-a)-bH(t-2a)-\dots\Rightarrow \mathcal L(g)=\frac{b}{as^2}-\frac{be^{-as}}{s(1-e^{-as})}$.
</details>

**8.2.** Számítsuk ki az alábbi függvények Laplace-transzformáltját az alapfüggvények és a műveleti szabályok segítségével:

**a)** $7t^2-3t+5,\quad 3-4e^{(5+6i)t},\quad e^{5t}\cos(2t),\quad t^3 e^{-7t},\quad t^3 e^{it},\quad \operatorname{sh}(2t),\quad t\cdot\operatorname{ch}(3t),\quad t^2 e^{6t}\sin(4t),$

**b\*)** $5^t,\quad \cos^2(t),\quad \cos^3(4t),\quad \dfrac{1-e^{-t}}{t},$

**c)** $f_1(t)$ és $f_4(t)$ a **8.1.** feladatból.

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\mathcal L(7t^2-3t+5)=\frac{14}{s^3}-\frac{3}{s^2}+\frac5s$; $\ \mathcal L(3-4e^{(5+6i)t})=\frac3s-\frac{4}{s-(5+6i)}$; $\ \mathcal L(e^{5t}\cos2t)=\frac{s-5}{(s-5)^2+4}$; $\ \mathcal L(t^3e^{-7t})=\frac{6}{(s+7)^4}$; $\ \mathcal L(t^3e^{it})=\frac{6}{(s-i)^4}$; $\ \mathcal L(\operatorname{sh}2t)=\frac{2}{s^2-4}$; $\ \mathcal L(t\operatorname{ch}3t)=\frac{s^2+9}{(s^2-9)^2}$; $\ \mathcal L(t^2e^{6t}\sin4t)=\frac{32(3s^2-36s+92)}{(s^2-12s+52)^3}$.

**b\*)** $\mathcal L(5^t)=\frac{1}{s-\ln5}$; $\ \mathcal L(\cos^2 t)=\frac{s^2+2}{s(s^2+4)}$; $\ \mathcal L(\cos^3 4t)=\frac{s(s^2+112)}{(s^2+144)(s^2+16)}$; $\ \mathcal L\!\left(\frac{1-e^{-t}}{t}\right)=\ln\!\left(1+\frac1s\right)$.

**c)** $\mathcal L(f_1)=\frac1s(e^{-2s}-e^{-3s})$; $\ \mathcal L(f_4)=\frac{1}{s^2}(e^{-s}-e^{-2s})$ (az eltolási tétellel, $f_1=f_2(t)-f_2(t-1)$ ill. $f_4=f_3(t+2)-f_3(t+1)$).
</details>

**8.3.** Számítsuk ki az alábbi függvények Laplace-transzformáltját:
$$t\cdot\cos(\omega t),\quad t\cdot\sin(\omega t),\quad t\cdot\operatorname{ch}(\omega t),\quad t\cdot\operatorname{sh}(\omega t).$$

<details>
<summary><strong>Megoldás</strong></summary>

A $\mathcal L(t\cdot f(t))=-\frac{d}{ds}\mathcal L(f)$ szabállyal:
$$\mathcal L(t\cos\omega t)=\frac{s^2-\omega^2}{(s^2+\omega^2)^2},\quad \mathcal L(t\sin\omega t)=\frac{2\omega s}{(s^2+\omega^2)^2},\quad \mathcal L(t\operatorname{ch}\omega t)=\frac{s^2+\omega^2}{(s^2-\omega^2)^2},\quad \mathcal L(t\operatorname{sh}\omega t)=\frac{2\omega s}{(\omega^2-s^2)^2}.$$
</details>

**8.4.** Számítsuk ki az alábbi racionális törtfüggvények *inverz Laplace*-transzformáltját parciális törtekre bontással:

**a)** $\dfrac{1}{5s-3},\quad \dfrac{1}{s^2-4},\quad \dfrac{1}{s^2+4},\quad \dfrac{5s+3}{s^2+4},\quad \dfrac{s+10}{s^2+4s+3},\quad \dfrac{1}{(s+3)^5},\quad \dfrac{1}{(2s-1)^3},$
$\dfrac{s+1}{(s+3)^5},\quad \dfrac{4s+2}{s^2+6s+13},\quad \dfrac{1}{s^3+6s^2+13s},\quad \dfrac{s^2}{(s-3)^5},$

**b\*)** $\dfrac{1}{(s^2+\omega^2)^2},\quad \dfrac{s}{(s^2+\omega^2)^2},\quad \dfrac{s^2}{(s^2+\omega^2)^2},$

**c)** $\dfrac{3s+6}{(s^2+4)^2},\quad \dfrac{s^2-3}{(s^2+4)^2},\quad \dfrac{s^3}{(s^2+9)^2},\quad \dfrac{5s+3}{(s^2-1)^2}.$

<details>
<summary><strong>Útmutatás</strong></summary>

Az inverz definíciója: $f(t)=\int_{x_0-i\infty}^{x_0+i\infty}F(s)e^{st}\,ds$ ($x_0>\alpha$), de a gyakorlatban parciális törtekre bontunk és táblázatból visszakeresünk.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $\mathcal L^{-1}\!\left(\frac{1}{5s-3}\right)=\frac15 e^{3t/5}$; $\ \frac{1}{s^2-4}\to\frac12\operatorname{sh}2t$; $\ \frac{1}{s^2+4}\to\frac12\sin2t$; $\ \frac{5s+3}{s^2+4}\to 5\cos2t+\frac32\sin2t$; $\ \frac{s+10}{s^2+4s+3}\to\frac92e^{-t}-\frac72e^{-3t}$; $\ \frac{1}{(s+3)^5}\to\frac{1}{4!}t^4e^{-3t}$; $\ \frac{1}{(2s-1)^3}\to\frac{1}{8\cdot2!}t^2e^{t/2}$; $\ \frac{s+1}{(s+3)^5}\to e^{-3t}\!\left(\frac{1}{3!}t^3-\frac{2}{4!}t^4\right)$; $\ \frac{4s+2}{s^2+6s+13}\to(4\cos2t-5\sin2t)e^{-3t}$; $\ \frac{1}{s^3+6s^2+13s}\to\frac{1}{13}-\frac{1}{13}\!\left(\cos2t+\frac32\sin2t\right)e^{-3t}$; $\ \frac{s^2}{(s-3)^5}\to e^{3t}\!\left(\frac12 t^2+t^3+\frac{9}{4!}t^4\right)$.

**b\*)** $\frac{s}{(s^2+\omega^2)^2}\to\frac{1}{2\omega}t\sin\omega t$; $\ \frac{1}{(s^2+\omega^2)^2}\to\frac{1}{2\omega^3}(\sin\omega t-\omega t\cos\omega t)$; $\ \frac{s^2}{(s^2+\omega^2)^2}\to\frac{1}{2\omega}(\sin\omega t+\omega t\cos\omega t)$.

**c)** $\frac{3s+6}{(s^2+4)^2}\to\left(\frac34 t+\frac38\right)\sin2t-\frac34 t\cos2t$; $\ \frac{s^2-3}{(s^2+4)^2}\to\frac{1}{16}\sin2t+\frac78 t\cos2t$; $\ \frac{s^3}{(s^2+9)^2}\to\cos3t-\frac{9}{6}t\sin3t$; $\ \frac{5s+3}{(s^2-1)^2}\to\left(\frac34-\frac12 t\right)e^{-t}+\left(-\frac34+2t\right)e^t$.
</details>

**8.5.** Számítsuk ki a következő konvolúciókat:
$$e^{\alpha x}*e^{\beta x},\quad x*e^{\lambda x},\quad x^2*e^{\lambda x},\quad 1*f(x),\quad \dfrac{x^n}{n!}*\dfrac{x^k}{k!}\ (n,k\in\mathbb{N}).$$

<details>
<summary><strong>Megoldás</strong></summary>

$$e^{\alpha x}*e^{\beta x}=\frac{e^{\beta x}-e^{\alpha x}}{\beta-\alpha},\qquad x*e^{\lambda x}=\frac{1}{\lambda^2}e^{\lambda x}-\frac{x}{\lambda}-\frac{1}{\lambda^2},$$
$$x^2*e^{\lambda x}=\frac{1}{\lambda^3}\left(2e^{\lambda x}-x^2\lambda^2-2x\lambda-2\right),\qquad 1*f(x)=F(x)-F(0),\qquad \frac{x^n}{n!}*\frac{x^k}{k!}=\frac{x^{k+n+1}}{(k+n+1)!}.$$
</details>

## 9. fejezet
### F9. Integro-differenciálegyenletek megoldása Laplace-transzformációval

#### Lineáris differenciálegyenletek és -rendszerek

Laplace-transzformációval oldjuk meg az alábbi lineáris differenciálegyenleteket:

**9.1. a)** $y'+3y=e^x+\cos(2x),\quad y(0)=1,$
**b)** $y''-2y'-3y=e^{3x}+2e^x,\quad y(0)=0,\ y'(0)=0,$
**c)** $y''-6y'+13y=16xe^x,\quad y(0)=2,\ y'(0)=4,$
**d)** $y''+6y'+13y=e^{3x}\cos(2x),\quad y(0)=0,\ y'(0)=0,$
**e)** $y'''+4y'=\cos(2x),\quad y(0)=0,\ y'(0)=0,\ y''(0)=0,$
**f)** $y''-3y'-10y=x^2e^{-2x},\quad y(0)=7,\ y'(0)=2.$

<details>
<summary><strong>Megoldás</strong></summary>

A $\mathcal L(y')=sY-y(0)$ stb. szabályokkal $Y(s)$-re algebrai egyenlet, majd parciális törtekre bontás + inverz:

**a)** $y=\frac{3}{13}\cos2x+\frac{4}{26}\sin2x+\frac14 e^x+\frac{27}{52}e^{-3x}$.

**b)** $y=\frac{5}{16}e^{-x}-\frac12 e^x+\left(\frac{3}{16}+\frac14 t\right)e^{3x}$.

**c)** $y=e^x(1+2x)+e^{3x}(\cos2x-\sin2x)$.

**d)** $y=e^{3x}\left(\frac{1}{52}\cos2x+\frac{1}{78}\sin2x\right)-e^{-3x}\left(\frac{1}{52}\cos2x+\frac{11}{156}\sin2x\right)$.

**e)** $y=\frac{1}{2\cdot2^3}(\sin2x-2x\cos2x)$ (a 8.4.b\*) alapján).

**f)** $y=\frac{5490}{2401}e^{5x}+e^{-2x}\left(-\frac{1}{21}x^3-\frac{2}{98}x^2-\frac{2}{343}x+\frac{11317}{2401}\right)$ (a 7.5.(\*) bontás szerint).
</details>

**9.2. a)** $y^{(3)}(x)+y'(x)=1,\quad y(\pi)=2,\ y'(\pi)=0,\ y''(\pi)=\pi,$
**b)** $y^{(3)}(x)-y''(x)=-6x,\quad y(1)=7,\ y'(1)=10,\ y''(1)=12.$

<details>
<summary><strong>Útmutatás</strong></summary>

Ha a K.É.P. nem az $x_0=0$ pontban van, akkor a függvényt vízszintesen eltolva alkalmazzuk az Eltolási tételt: $\mathcal L(f(t-b))=e^{-bs}F(s)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** A $z(x):=y(x+\pi)$ eltolt ismeretlennel ($z(0)=2,z'(0)=0,z''(0)=\pi$): $z(x)=2+\pi-\sin x-\pi\cos x+x$, így $y(x)=z(x-\pi)=x+2+\sin x+\pi\cos x$.

**b)** A $z(x):=y(x+1)$ eltolttal: $z(x)=x^3+6x^2+10x+7$, így $y(x)=z(x-1)=x^3+3x^2+x+2$.
</details>

**9.3. a)** $y''(x)-y(x)=\dfrac{1}{1+e^x},\quad y(0)=y'(0)=0,$
**b)** $y''(x)=\operatorname{arctg}(x),\quad y(0)=y'(0)=0,$
**c)** $y''(x)-y(x)=\operatorname{th}(x),\quad y(0)=y'(0)=0,$
**d\*)** $y''(x)-2y'(x)+y(x)=1-e^{-x^2},\quad y(0)=y'(0)=0.$

<details>
<summary><strong>Útmutatás</strong></summary>

Ha az egyenlet jobb oldalán álló $f(x)$-nek nincs Laplace-transzformáltja, az $F(s)=\mathcal L(f)$ rövidítéssel dolgozunk, majd a Konvolúció-tétellel: $\mathcal L^{-1}(F\cdot G)=\mathcal L^{-1}(F)*\mathcal L^{-1}(G)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

**a)** $Y=\frac{1}{s^2-1}F(s)$, konvolúcióval $y(x)=\operatorname{sh}x*\frac{1}{1+e^x}=\frac12\left(e^x\ln\frac{1+e^{-x}}{2}-e^{-x}\ln\frac{e^x+1}{2}+e^x-1\right)$.

**b)** $y(x)=x*\arctan x=\frac12(x^2-1)\arctan x+\frac12 x-\frac12 x\ln(x^2+1)$.

**c)** $y(x)=\operatorname{sh}x*\operatorname{th}x=\cosh x\left(\ln\frac{1+e^x}{1-e^x}-\frac\pi2\right)-\sinh x$.

**d\*)** $Y=\frac{1}{(s-1)^2}F(s)$, $y(x)=xe^x*(1-e^{-x^2})$. Mivel $\int e^{-t^2-t}\,dt$ (Liouville) nem elemi, az `erf`-fel: $y(x)=1+xe^x-\frac12 e^x-\frac12 e^{-x^2}-\left(\frac12 e^x+xe^x\right)\cdot\frac{\sqrt\pi e^{1/4}}{2}\left(\operatorname{erf}(x+\tfrac12)-\operatorname{erf}(\tfrac12)\right)$.
</details>

**9.4.** Laplace-transzformációval oldjuk meg az alábbi lineáris differenciálegyenlet-rendszereket:

**a)** $\begin{cases}x'(t)=7x(t)+9y(t) & x(0)=8\\ y'(t)=x(t)-y(t) & y(0)=2\end{cases},$

**b)** $\begin{cases}x'(t)=x(t)+2y(t)+e^{3t} & x(0)=0\\ y'(t)=x(t)+2y(t) & y(0)=0\end{cases},$

**c)** $\begin{cases}x'(t)=-5x(t)-y(t)+5e^t & x(0)=-1\\ y'(t)=x(t)-3y(t)-50te^t & y(0)=2\end{cases},$

**d)** $\begin{cases}x'(t)=y(t)+1 & x(0)=0\\ y'(t)=z(t)+2 & y(0)=0\\ z'(t)=x(t)+3 & z(0)=0\end{cases}.$

<details>
<summary><strong>Megoldás</strong></summary>

Az $X=\mathcal L(x),Y=\mathcal L(y),\dots$ jelölésekkel lineáris algebrai rendszert (akár Cramer-szabállyal) oldunk meg, majd inverz:

**a)** $x(t)=9e^{8t}-e^{-2t}$, $\ y(t)=e^{8t}+e^{-2t}$.

**b)** $x(t)=\frac29 e^{3t}+\frac13 te^{3t}-\frac29$, $\ y(t)=\frac13 te^{3t}-\frac19 e^{3t}+\frac19$.

**c)** $x(t)=2te^t-e^{-4t}+2te^{-4t}$, $\ y(t)=3e^t-12te^t-e^{-4t}-2te^{-4t}$.

**d)** $x(t)=e^{-t/2}\!\left(\cos\sqrt{\tfrac34}t-\tfrac12\sqrt{\tfrac43}\sin\sqrt{\tfrac34}t\right)+2e^t-3$, $\ y(t)=-e^{-t/2}\!\left(\cos\sqrt{\tfrac34}t+\tfrac{\sqrt3}{3}\sin\sqrt{\tfrac34}t\right)+2e^t-1$, $\ z(t)=\sqrt{\tfrac43}e^{-t/2}\sin\sqrt{\tfrac34}t+2e^t-2$.
</details>

#### Integro-differenciálegyenletek és -rendszerek

**9.5.** Laplace-transzformációval oldjuk meg az alábbi integro-differenciálegyenleteket és -rendszereket:

**a)** $y(x)=\sin(x)+\displaystyle\int_0^x e^{x-t}\cdot y(t)\,dt,$

**b)** $y'(x)+2y(x)+\displaystyle\int_0^x y(t)\,dt=\sin(x),\quad y(0)=1,$

**c)** $\begin{cases}y_1(x)=2-\displaystyle\int_0^x (x-t)\cdot y_1(t)\,dt-4\int_0^x y_2(t)\,dt\\ y_2(x)=1-\displaystyle\int_0^x y_1(t)\,dt-\int_0^x (x-t)\cdot y_2(t)\,dt\end{cases}.$

<details>
<summary><strong>Megoldás</strong></summary>

A konvolúciós integrálok $\mathcal L$-transzformáltja $\frac1s,\frac{1}{s^2}$ stb. tényezőkkel jelenik meg:

**a)** $Y=\frac{1}{1+s^2}+\frac{1}{s-1}Y\Rightarrow y(x)=\frac15 e^{2x}-\frac15\cos x+\frac35\sin x$.

**b)** $y(x)=e^{-x}-\frac32 xe^{-x}+\frac12\sin x$.

**c)** $y_1(x)=2e^{-x}(1-x)$, $\ y_2(x)=e^{-x}(1-x)$.
</details>

#### Alkalmazások

**9.6.** Egy $R=3\,\Omega$ ellenállás, egy $L=1$ Henry önindukciójú tekercs és egy $C=0{,}001\,F$ kondenzátor sorban van kapcsolva az $u(t)$ feszültségre. Mekkora lesz az áramerősség $t$ sec múlva? Az alábbi adatok esetén készítsen számításokat:

**a)** $u(t)=u_0,\ i(0)=i'(0)=0$ illetve $i(0)=i_0>0,\ i(0)=i_1\ge 0$ (magára hagyott rezgőkör),

**b)** $u(t)=\sin(10t),\ i(0)=i'(0)=0$ (gerjesztett rezgőkör),

**c\*)** vizsgáljuk meg a megoldás tendenciáját ($\displaystyle\lim_{t\to\infty}i(t)$) a gerjesztő $\omega_g$ frekvenciától függően, azaz $u(t)=\sin(\omega_g t),\ i(0)=i'(0)=0,$

**d\*\*)** oldjuk meg általánosan $R,L,C\in\mathbb{R}$-re ha $u(t)=U_0\cdot\sin(\omega_g t),\ i(0)=i'(0)=0$, majd hasonlítsuk össze a **c)** feladattal.

*(2. ábra: soros R–L–C kör $U(t)$ feszültségforrással.)*

<details>
<summary><strong>Útmutatás</strong></summary>

A rezgőkörre $L\cdot i''(t)+R\cdot i'(t)+\frac1C\cdot i(t)=u'(t)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

Az egyenlet $1\cdot i''+3i'+\frac{1}{0{,}001}i=u'$.

**a)** $u=u_0$ állandó, $u'=0$: $i(0)=i'(0)=0$ esetén $i(t)\equiv 0$; általános kezdetiértékkel $i(t)=i_0 T e^{-\frac32 t}\sin\!\left(\frac{\sqrt{3991}}{2}t+\delta\right)$ — *csillapodó* szinuszhullám.

**b)** $u=\sin(10t)$: $i(t)\approx 0{,}0111\sin(10t+1{,}5375)-0{,}0111\,e^{-\frac32 t}\sin(31{,}5872t+1{,}5128)$ — *beálló* szinuszhullám (a tranziens $e^{-3t/2}\to 0$).

**c\*)** A gerjesztő $\omega_g$ frekvenciától függően a beálló amplitúdó $\frac{\omega_g}{\sqrt{\omega_g^4-1991\omega_g^2+10^6}}$.

**d\*\*)** Általánosan $R,L,C$-re az állandósult áram amplitúdója $A(\omega_g)=\dfrac{U_0}{\sqrt{R^2+\left(L\omega_g-\frac{1}{C\omega_g}\right)^2}}$, ami pontosan akkor *maximális* (rezonancia), ha $\omega_g=\frac{1}{\sqrt{LC}}$, ekkor $A=\frac{U_0}{R}$ és nincs fáziseltolódás.
</details>

**9.7.** Sűrű anyagban lefelé süllyedő test sebessége $m\cdot v'(t)=mg-k\cdot v(t),\ v(0)=v_0$, ahol $g$ a gravitációs állandó, $m,k,v_0\in\mathbb{R}^+$. Keresendő $v(t)$ és a „végleges" sebesség, $\displaystyle\lim_{t\to\infty}v(t)$.

<details>
<summary><strong>Útmutatás</strong></summary>

Ha csak a $\lim_{t\to\infty}v(t)$ érdekel: $\lim_{t\to\infty}f(t)=\lim_{s\to 0}s\cdot F(s)$, ahol $F=\mathcal L(f)$.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$V(s)=\frac{mv_0-\frac gk m^2}{k+ms}+\frac{gm}{ks}$, így $v(t)=\frac{-1}{km}e^{-\frac km t}(gm^2-kmv_0)+\frac{gm}{k}$, és a „végleges" sebesség $\lim_{t\to\infty}v(t)=\frac{gm}{k}$ (a végértéktétellel is: $\lim_{s\to0}sV(s)=\frac{gm}{k}$).
</details>

**9.8.** Egy ideális, $k$ rugóállandójú, súlytalan rugó végén $m$ állandó tömegű test függ, a rugót $s_0$ hosszan megnyújtjuk / összenyomjuk ($s_0>0$ vagy $s_0<0$), ezen felül a rugó végét időben változó $F_K(t)$ kényszererővel terheljük. Írjuk le a rugó végének $s(t)$ kitérési függvényét, ha

**a)** $F_K(t)=0,\ s(0)=s_0$ (elengedett, terheletlen rugó),

**b)** $F_K(t)=mB\cdot\sin(\omega_K t)$ ha $\omega_K\ne\sqrt{\dfrac{k}{m}},\ s(0)=s_0$,

**c)** ugyanaz, mint **b)** csak $\omega_K=\sqrt{\dfrac{k}{m}}.$

<details>
<summary><strong>Útmutatás</strong></summary>

Alkalmazzuk az $F_{rugó}=-k\cdot s$ és $F_{össz}=m\cdot a=m\cdot s''=F_{rugó}+F_K$ összefüggéseket.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

$m s''=-ks+F_K$, $\omega_R=\sqrt{\frac km}$ a saját frekvencia.

**a)** $F_K=0$: $s(t)=s_0\cos(\omega_R t)+\frac{s_1}{\omega_R}\sin(\omega_R t)=\sqrt{s_0^2+\frac{s_1^2}{\omega_R^2}}\sin\!\left(\omega_R t+\operatorname{arctg}\frac{s_0\omega_R}{s_1}\right)$; ha $s_1=0$: $s(t)=s_0\cos(\omega_R t)$.

**b)** $F_K=mB\sin(\omega_K t),\ \omega_K\ne\omega_R$: $s(t)=A_2\sin(\omega_R t+\delta_2)+\frac{B}{\omega_K^2-\omega_R^2}\left(\frac{\omega_K}{\omega_R}\sin\omega_R t-\sin\omega_K t\right)$. (Ha $\omega_K\to\omega_R$, az amplitúdó nagyon nagy lehet.)

**c)** $\omega_K=\omega_R$ (rezonancia): $s(t)=A_3\sin(\omega_R t+\delta_3)-\frac{B}{2\omega_R}t\cos(\omega_R t)$ — az amplitúdó $t\to\infty$ esetén $+\infty$-be tart.
</details>

## 10. fejezet
### F10. Fourier-sorok, alkalmazások

#### Fourier-sorok

**10.1.** Az alábbi ábrákhoz adja meg a függvényt definiáló formulát, majd számítsa ki Fourier-sorukat:

**a)** *(3. ábra: 12 periodikus jel A)–L) — négyszögjelek, fűrészfogak, háromszögjelek és impulzussorozatok, $[-\pi,\pi]$ és egyéb periódusokkal, amplitúdókkal $\pm1,\pm2,\pm3,6,a,b$ stb.)*

**b)** lásd a **8.1.b)** feladat ábráját.

<details>
<summary><strong>Útmutatás</strong></summary>

Fourier-sor ($[-L,L]$ periódus): $\mathcal F(f)=\frac{a_0}2+\sum_{k\ge1}\left(a_k\cos\frac{k\pi x}{L}+b_k\sin\frac{k\pi x}{L}\right)$, ahol $a_k=\frac1L\int_{-L}^L f\cos\frac{k\pi x}{L}\,dx$, $b_k=\frac1L\int_{-L}^L f\sin\frac{k\pi x}{L}\,dx$. Lineáris transzformációkra: ha $g=\alpha f+\beta$, $h=f(\gamma x)$, akkor a Fourier-sor is egyszerűen adódik.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

A jelek (a páros jelek koszinuszos, a páratlanok szinuszos sorúak):

$$\mathcal F(f_A)=\sum_{k=1}^\infty\frac{-4}{(2k-1)\pi}\sin((2k-1)x),\qquad \mathcal F(f_B)=\sum_{k=1}^\infty\frac{4(-1)^{k+1}}{\pi k}\sin(k\pi x),$$
$$\mathcal F(f_E)=\frac12+\sum_{\ell=0}^\infty\frac{-4}{(2\ell+1)^2\pi^2}\cos((2\ell+1)x),\qquad \mathcal F(f_G)=3-6\mathcal F(f_E)(x\pi)=\sum_{\ell=0}^\infty\frac{24}{(2\ell+1)^2\pi^2}\cos((2\ell+1)\pi x),$$
$$\mathcal F(f_J)=\mathcal F(f_A)\!\left(x-\tfrac\pi2\right)=\sum_{\ell=0}^\infty\frac{-4(-1)^\ell}{(2\ell+1)\pi}\cos((2\ell+1)x),\qquad \mathcal F(f_L)=\frac{4}{\pi^2k^2}\cdot(1,2,1,0,1,2,1,0,\dots).$$

A $C),F),H),I),K)$ jelekre a megfelelő $L$ periódussal közvetlenül integrálva kapjuk az $a_k,b_k$ együtthatókat (pl. $f_C$: $\mathcal F\approx 1+9{,}8767\cos(0{,}6981x)-0{,}3219\cos(1{,}3962x)+\dots$; $f_D$: $\sum\frac{12}{2\ell\pi}\sin(2\ell\pi x)$).

**b)** $f=f_{0,1}$ a 10.2.-ben, és $g=-\frac16 f_D+\frac12$, így $\mathcal F(g)=\frac12-\sum_{\ell=1}^\infty\frac{1}{\ell\pi}\sin(2\ell\pi x)$.
</details>

**10.2.** Az alábbi képletekkel megadott periodikus függvényeket rajzolja fel és számítsa ki Fourier-sorukat:

$$f_0(x)=1,\quad x\in\mathbb{R};\qquad f_1(x)=x,\quad x\in[-\pi,\pi];$$
$$f_2(x)=x^2,\quad x\in[-\pi,\pi];\qquad f_3(x)=5x^2-4x+7,\quad x\in[-\pi,\pi];$$
$$f_4(x)=\cos(3x),\quad x\in[-2,2];\qquad f_5(x)=|\sin(x)|;\qquad f_6(x)=e^{-2x},\quad x\in[-2,2];$$

$$f_7(x)=\begin{cases}1 & \text{ha}\ -\pi\le x<0\\ 0 & \text{ha}\ 0\le x<\pi\end{cases},\qquad f_8(x)=\begin{cases}-1 & \text{ha}\ -\pi\le x<0\\ +1 & \text{ha}\ 0\le x<\pi\end{cases},$$

$$f_{u,v}(x)=\begin{cases}u & \text{ha}\ -L\le x<0\\ v & \text{ha}\ 0\le x<L\end{cases},\qquad f_{10}(x)=\begin{cases}0 & \text{ha}\ -\pi\le x<0\\ x & \text{ha}\ 0\le x<\pi\end{cases},$$

$$f_{11}(x)=\begin{cases}x & \text{ha}\ -1\le x<0\\ 2x & \text{ha}\ 0\le x<1\end{cases},\qquad f_{12}(x)=\begin{cases}-1 & \text{ha}\ -2\le x<-1\\ 0 & \text{ha}\ -1\le x<1\\ 3 & \text{ha}\ 1\le x<2\end{cases}.$$

<details>
<summary><strong>Megoldás</strong></summary>

$$\mathcal F(1)=1,\qquad \mathcal F(f_1)=\sum_{k=1}^\infty\frac{2(-1)^{k-1}}{k}\sin(kx),\qquad \mathcal F(f_2)=\frac{\pi^2}{3}+\sum_{k=1}^\infty\frac{4(-1)^k}{k^2}\cos(kx),$$
$$\mathcal F(f_3)=\left(\frac{5\pi^2}{3}+7\right)+\sum_{k=1}^\infty\frac{20(-1)^k}{k^2}\cos(kx)+\sum_{k=1}^\infty\frac{-8(-1)^{k-1}}{k}\sin(kx),$$
$$\mathcal F(f_4)=\frac16\sin6+\sum_{k=1}^\infty\frac{-12(-1)^k\sin6}{k^2\pi^2-36}\cos\frac{k\pi x}{2},\qquad \mathcal F(f_5)=\frac2\pi-\frac4\pi\left(\frac{1}{1\cdot3}\cos2x+\frac{1}{3\cdot5}\cos4x+\dots\right),$$
$$\mathcal F(f_6)=\frac{e^4-e^{-4}}{8}+\sum_{k=1}^\infty\frac{4(-1)^k(e^4-e^{-4})}{k^2\pi^2+16}\cos\frac{k\pi x}{2},\qquad \mathcal F(f_7)=\frac12+\sum_{k=1}^\infty\frac{-2}{(2k-1)\pi}\sin((2k-1)x),$$
$$\mathcal F(f_8)=-\mathcal F(f_A),\qquad \mathcal F(f_{u,v})=\frac{u+v}{2}+\sum_{k=1}^\infty\frac{2(v-u)}{k\pi}\sin\frac{k\pi x}{L},$$
$$\mathcal F(f_{10})=\frac\pi4+\sum_{k=1}^\infty\frac{-2}{(2k-1)^2\pi}\cos((2k-1)x)+\sum_{k=1}^\infty\frac{(-1)^{k+1}}{k}\sin(kx),$$
$$\mathcal F(f_{11})=\frac14+\sum_{\ell=0}^\infty\frac{-2}{(2\ell+1)^2\pi^2}\cos((2\ell+1)\pi x)+\sum_{k=1}^\infty\frac{-3(-1)^k}{k\pi}\sin(k\pi x),$$
$$\mathcal F(f_{12})=\frac12+\sum_{\ell=0}^\infty\frac{-2(-1)^\ell}{(2\ell+1)\pi}\cos\frac{(2\ell+1)\pi}{2}x+\sum_{k=1}^\infty\frac{4\!\left(\cos\frac{k\pi}{2}-(-1)^k\right)}{k\pi}\sin\frac{k\pi}{2}x.$$
</details>

**10.3.** Terjessze ki az alábbi függvényeket **a)** párosan ($y$ tengelyre szimmetrikusan), **b)** páratlanul (origóra szimmetrikusan), majd számítsa ki Fourier-sorukat mindkét esetben:

$$g_1(x)=x,\ x\in[0,2];\qquad g_2(x)=x^2,\ x\in[0,3];\qquad g_3(x)=x(3-x),\ x\in[0,3];$$
$$g_4(x)=|x-1|,\ x\in[0,2];\qquad g_4(x)=\sin(x),\ x\in[0,\pi];\qquad g_5(x)=\cos(x),\ x\in[0,\pi].$$

<details>
<summary><strong>Megoldás</strong></summary>

A *páros* kiterjesztés tisztán koszinuszos ($b_k=0$), a *páratlan* tisztán szinuszos ($a_k=0$) sort ad; a $g_i$-ket a $[0,L]$-en integrálva, majd a megfelelő szimmetriával folytatva a 10.2. mintájára kapjuk az együtthatókat. (Ezeket a feladatokat a könyv önálló gyakorlásra hagyja.)
</details>

**10.4.** Az **10.1.a)** feladat *B)* és *J)* függvényeit hogyan közelíti a Fourier-összegének első négy tagja? Néhány pontban számítsa ki az eltérést, esetleg készítsen vázlatot.

<details>
<summary><strong>Megoldás</strong></summary>

$f_B(x)=2x\approx\frac4\pi\sin(\pi x)-\frac{4}{2\pi}\sin(2\pi x)+\frac{4}{3\pi}\sin(3\pi x)-\frac{4}{4\pi}\sin(4\pi x)$, részösszegek $s_1$ (fekete), $s_2$ (zöld), $s_3$ (piros), $s_4$ (kék). *(11. ábra.)* A periódus végpontjai felé az eltérés nagy (Gibbs-jelenség), de minden rögzített belső intervallumon a hiba (pl. $\delta=10\%$ alatt) egyre kisebb, ha több tagot veszünk. Hasonlóan $f_J(x)\approx\frac4\pi\cos x-\frac{4}{3\pi}\cos3x+\frac{4}{5\pi}\cos5x-\dots$.
</details>

#### Alkalmazások

**10.5.** A bemenetre egyenirányított váltófeszültséget kapcsoltunk: $U_{in}(t)=240\cdot|\sin(100\pi t)|$ (azaz $50$ Hz, $T=\dfrac{1}{100}$). Fejtse Fourier-sorba $U_{in}(t)$-t, majd ennek segítségével határozza meg a kimeneti potenciál Fourier-sorának első három tagját!

*(4. ábra: két aluláteresztő szűrő — (a) soros $1\,H$ tekercs + $1\,\text{k}\Omega$; (b) soros $1\,F$ + $1\,\text{k}\Omega$, $U_{be}$ bemeneti, $U_{ki}$ kimeneti feszültséggel.)*

<details>
<summary><strong>Útmutatás</strong></summary>

R-L-C áramkörökre: soros kapcsolásnál $i_{fo}=i_1=\dots=i_n$, $u_{fo}=u_1+\dots+u_n$; továbbá $u_R=R\cdot i$, $u_L=L\cdot\frac{d}{dt}i$, $u_C=\frac1C\int_0^t i\,d\tau$. Mivel a bemeneti egyenlet $|\sin(100\pi t)|$ miatt közvetlenül nem számolható, helyette Fourier-sorát véve tagonként oldjuk meg és összegezzük.
</details>

<details>
<summary><strong>Megoldás</strong></summary>

A bemenet Fourier-sora ($L=\frac{1}{200}$, páros függvény):
$$U_{be}(t)=240\,\mathcal F(|\sin(100\pi t)|)=\frac{480}{\pi}-\frac{960}{\pi}\left(\frac{1}{1\cdot3}\cos(200\pi t)+\frac{1}{3\cdot5}\cos(400\pi t)+\dots\right).$$
A bemeneti körre $1\cdot i'(t)+R\cdot i(t)=U_{be}(t),\ i(0)=0$, a kimenet $U_{ki}=R\cdot i$. Tagonként megoldva (a tranziens $e^{-Rt}\to0$): az $u_k=v_k\cos(\omega_k t)$ bemenetre $u_{ki,k}=\frac{v_k}{\sqrt{1+k^2\pi^2/25}}\cos\!\left(\omega_k t-\operatorname{arctg}\frac{\omega_k}{R}\right)$. Az első három tag:
$$U_{ki}(t)\approx 152{,}7887-86{,}2340\cos(628{,}3185t-0{,}5610)-17{,}2346\cos(1256{,}6371t-0{,}8986).$$
</details>
