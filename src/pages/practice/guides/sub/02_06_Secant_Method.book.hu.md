## 2.6. Szelőmódszer

A Newton-módszer képletében szerepel az $f$ függvény deriváltja. A gyakorlatban viszont $f'$ sokszor nem ismert (pl. $f$ nem képlettel van megadva, hanem egy numerikus eljárás generálja a függvény értékét egy megadott pontban), vagy a derivált képletének kiértékelése túl sok gépi számolást igényel, így „nem éri meg" a használata. A derivált használatát küszöböli ki a *szelőmódszer*. Legyen az $f$ függvény $p_0$ és $p_1$ két egymástól különböző, általunk választott kezdeti érték. Tekintsük az $f$ függvény grafikonjának $p_0$ és $p_1$ pontjaihoz tartozó szelőt, azaz a $(p_0,f(p_0))$ és $(p_1,f(p_1))$ pontokon átmenő egyenest. Ennek egyenlete:

$$y=f(p_1)+\frac{f(p_1)-f(p_0)}{p_1-p_0}(x-p_1).$$

A szelő az $x$-tengelyt az $x=p_1-\frac{p_1-p_0}{f(p_1)-f(p_0)}f(p_1)$ pontban metszi. Ezt a pontot $p_2$-vel jelöljük. Ezután tekintsük a $p_1$ és $p_2$ pontokhoz tartozó szelőt, és annak az $x$-tengellyel vett metszéspontját jelöljük $p_3$-mal. Ezt az eljárást folytatva kapjuk a

$$p_{k+1}=p_k-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \tag{2.10}$$

sorozatot. A (2.10) képlettel definiált kétlépéses iterációs módszert *szelőmódszernek* nevezzük.

**2.25. példa.** A szelőmódszert alkalmazva a 2.17. példa feladatára a 2.7. táblázatban felsorolt értékeket kapjuk. Itt is akkor állítottuk le a sorozat generálását, amikor az egymás utáni tagok távolsága kisebb lett, mint az előre megadott tolerancia érték. Összehasonlítva az eredményt a 2.5. táblázattal, látható, hogy a szelőmódszer valamivel lassabban konvergál, mint a Newton-módszer. $\square$

**2.7. táblázat.** Szelőmódszer, $f(x)=e^x-2\cos x$, $p_0=0$, $p_1=1$, $TOL=10^{-5}$

| $k$ | $p_k$ | $f(p_k)$ |
|---:|---|---|
| 0 | 0.0000000000 | -1.0000e+00 |
| 1 | 1.0000000000 | 1.6377e+00 |
| 2 | 0.3791214458 | -3.9698e-01 |
| 3 | 0.5002604213 | -1.0576e-01 |
| 4 | 0.5442561500 | 1.2301e-02 |
| 5 | 0.5396724494 | -3.0921e-04 |
| 6 | 0.5397848464 | -8.6246e-07 |
| 7 | 0.5397851608 | 6.0793e-11 |

A szelőmódszer konvergenciájának igazolásához szükségünk lesz a következő eredményre.

**2.26. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Legyen $p_k$ a szelőmódszerrel generált sorozat. Ekkor minden $k$-ra léteznek olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$ és $\eta_k\in\langle p_k,p_{k-1}\rangle$ számok, hogy*

$$p_{k+1}-p=\tfrac{1}{2}\frac{f''(\xi_k)}{f'(\eta_k)}(p_k-p)(p_{k-1}-p). \tag{2.11}$$

**Bizonyítás.** Kis számolással belátható

$$
\begin{aligned}
p_{k+1}-p &= p_k-p-\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}f(p_k) \\
&= \frac{(p_{k-1}-p)f(p_k)-(p_k-p)f(p_{k-1})}{f(p_k)-f(p_{k-1})} \\
&= \frac{(p_k-p)(p_{k-1}-p)}{f(p_k)-f(p_{k-1})}\left(\frac{f(p_k)}{p_k-p}-\frac{f(p_{k-1})}{p_{k-1}-p}\right) \\
&= (p_k-p)(p_{k-1}-p)\frac{p_k-p_{k-1}}{f(p_k)-f(p_{k-1})}\cdot\frac{\frac{f(p_k)-f(p)}{p_k-p}-\frac{f(p_{k-1})-f(p)}{p_{k-1}-p}}{p_k-p_{k-1}}.
\end{aligned}
$$

A Lagrange-féle középérték tétel szerint létezik olyan $\eta_k\in\langle p_k,p_{k-1}\rangle$ szám, hogy

$$\frac{f(p_k)-f(p_{k-1})}{p_k-p_{k-1}}=f'(\eta_k).$$

A tétel bizonyításának befejezéséhez azt kell megmutatnunk, hogy létezik olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$, hogy

$$\frac{\frac{f(p_k)-f(p)}{p_k-p}-\frac{f(p_{k-1})-f(p)}{p_{k-1}-p}}{p_k-p_{k-1}}=\frac{f''(\xi_k)}{2}. \tag{2.12}$$

Ennek direkt bizonyítását a 2. feladatra hagyjuk. Itt most a 6. fejezetben bevezetendő fogalmakra és eredményekre hivatkozva látjuk be a (2.12) relációt. Eszerint (2.12) bal oldala nem más, mint az $f$ függvény $p_{k-1}$, $p$ és $p_k$ pontokra felírt másodrendű osztott differenciája, $f[p_{k-1},p,p_k]$ (lásd a 6.2. szakaszt). A 6.17. következmény szerint létezik olyan $\xi_k\in\langle p_k,p_{k-1},p\rangle$ szám, hogy $f[p_{k-1},p,p_k]=f''(\xi_k)/2$. $\square$

**2.27. tétel.** *Legyen $f\in C^2[a,b]$, és legyen $p\in(a,b)$ olyan, hogy $f(p)=0$ és $f'(p)\neq 0$. Ekkor a szelőmódszer lokálisan konvergál $p$-hez.*

**Bizonyítás.** Legyen $\delta^*$ olyan, hogy $f'(x)\neq 0$ ha $x\in[p-\delta^*,p+\delta^*]$. Ilyen $\delta^*$ létezik, mivel $f'(p)\neq 0$ és $f'$ folytonos. Legyen

$$M:=\frac{\max\{|f''(x)|\colon x\in[p-\delta^*,p+\delta^*]\}}{2\min\{|f'(x)|\colon x\in[p-\delta^*,p+\delta^*]\}}.$$

Válasszuk $\delta$-t úgy, hogy $\delta<\min\{\delta^*,\tfrac{1}{M}\}$ legyen, és legyen $\varepsilon:=M\delta$. Ekkor a feltételek szerint $0<\varepsilon<1$. Legyenek $p_0,p_1\in (p-\delta,p+\delta)$ tetszőleges, és különböző számok. (2.11) és $M$ definíciója szerint $|p_{k+1}-p|\leq M|p_k-p||p_{k-1}-p|$, és ezért

$$M|p_{k+1}-p|\leq M|p_k-p|M|p_{k-1}-p| \tag{2.13}$$

minden $k$-ra. Ezt $k=1$-re alkalmazva $M|p_2-p|\leq M|p_1-p|M|p_0-p|\leq (M\delta)^2=\varepsilon^2<\varepsilon$. Ebből kapjuk, hogy $|p_2-p|\leq\varepsilon/M=\delta$. Ez azt jelenti, hogy $p_2\in(p-\delta,p+\delta)$. Hasonlóan belátható, hogy $p_k\in(p-\delta,p+\delta)$ minden $k$-ra.

$\varepsilon$ definíciójából következik, hogy $M|p_0-p|<\varepsilon$ és $M|p_1-p|<\varepsilon$. Most keresünk egy olyan $q_k$ sorozatot, amelyre $M|p_k-p|\leq\varepsilon^{q_k}$ teljesül minden $k$-ra. Az előbbiek szerint használhatjuk a $q_0=1$ és $q_1=1$ értékeket. Tegyük fel, hogy már definiáltuk a $q_k$ sorozat első $k$ tagját. A (2.13) egyenlőtlenség szerint ekkor az $M|p_{k+1}-p|\leq\varepsilon^{q_k}\varepsilon^{q_{k-1}}$ egyenlőtlenség kell, hogy teljesüljön. Ezért a $M|p_{k+1}-p|\leq\varepsilon^{q_{k+1}}$ becslés teljesülni fog, ha $q_{k+1}$-et úgy választjuk

$$q_{k+1}=q_k+q_{k-1}, \quad k\geq 1, \quad q_0=1, \quad q_1=1 \tag{2.14}$$

legyen. A (2.14) rekurzív képlettel definiált sorozatot *Fibonacci-sorozatnak* nevezzük. Belátható (3. feladat), hogy $q_k$ általános képlete

$$q_k=\frac{1}{\sqrt{5}}(r_0^{k+1}-r_1^{k+1}), \qquad k\geq 0, \tag{2.15}$$

ahol

$$r_0=\frac{1+\sqrt{5}}{2}\approx 1.618, \quad \text{és} \quad r_1=\frac{1-\sqrt{5}}{2}\approx -0.618.$$

Ebből következik, hogy $q_k\to\infty$ ha $k\to\infty$. Ebből viszont kapjuk hogy $p_k\to p$, hiszen

$$|p_k-p|\leq\tfrac{1}{M}\varepsilon^{q_k}\to 0, \quad \text{ha } k\to\infty. \quad\square$$

**Feladatok**

1. Alkalmazza a szelőmódszert a 2.3. szakasz 1. feladatában felsorolt egyenletekre!
2. Lássa be a (2.12) relációt! (Útmutatás: igazolja, hogy a

$$f[a,b,c]=\frac{\frac{f(c)-f(b)}{c-b}-\frac{f(b)-f(a)}{b-a}}{c-a}$$

kifejezés értéke független az $a$, $b$, $c$ számok sorrendjétől! Ezért feltehetjük, hogy $a<b<c$. Vegye az $f$ függvény $b$-körüli elsőrendű Taylor-közelítését a másodrendű hibataggal együtt! Ennek segítségével fejezze ki a jobb oldalon álló kifejezés számlálóját! Végül használja a 2.2. tételt annak igazolására, hogy $f[a,b,c]=f''(\xi)/2$ valamely $\xi\in(a,c)$-re!)
3. Igazolja a (2.15) képletet!

---
