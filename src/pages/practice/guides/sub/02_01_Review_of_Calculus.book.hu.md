## 2.1. Analízis előismeretek

Ebben a szakaszban összefoglaljuk azokat az analízisből ismert fogalmakat, tételeket, amelyekre a későbbiekben gyakran fogunk hivatkozni.

Az $[a,b]$ intervallumon értelmezett valós értékű folytonos függvények halmazát $C[a,b]$-vel jelöljük. Azon $f\colon [a,b]\to\mathbb{R}$ függvények halmazát, amelyek $[a,b]$-n folytonosak és $(a,b)$-n $m$-szer folytonosan differenciálhatók, $C^m[a,b]$-vel jelöljük.

**2.1. tétel.** *Legyen $f\in C[a,b]$. Ekkor $f$ felveszi maximumát és minimumát $[a,b]$-n, azaz létezik olyan $c,d\in [a,b]$, hogy*

$$f(c)=\max_{x\in[a,b]} f(x) \qquad \text{és} \qquad f(d)=\min_{x\in[a,b]} f(x).$$

Az $a$ és $b$ számok által generált nyílt intervallumot $\langle a,b\rangle$-vel jelöljük, azaz

$$\langle a,b\rangle := (\min\{a,b\},\max\{a,b\}),$$

ill. ennek általánosításaként $\langle a_1,a_2,\dots,a_n\rangle$ jelöli az $a_1,a_2,\dots,a_n$ számok által generált nyílt intervallumot, azaz

$$\langle a_1,a_2,\dots,a_n\rangle := (\min\{a_1,\dots,a_n\},\max\{a_1,\dots,a_n\}).$$

A következő eredmény szerint egy folytonos függvény bármely két értéke közti minden értéket felvesz.

**2.2. tétel.** *Legyen $f\in C[a,b]$, $f(a)\neq f(b)$, és legyen $d\in\langle f(a),f(b)\rangle$. Ekkor létezik olyan $c\in(a,b)$, hogy $f(c)=d$.*

**2.3. tétel (Rolle).** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos függvény differenciálható az $(a,b)$ intervallumon, és $f(a)=f(b)$. Ekkor létezik olyan $\xi\in(a,b)$ szám, hogy $f'(\xi)=0$.*

**2.4. tétel (Lagrange-féle középértéktétel).** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos az $[a,b]$ intervallumon és differenciálható az $(a,b)$ intervallumon. Ekkor létezik olyan $\xi\in(a,b)$ szám, hogy $f(b)-f(a)=f'(\xi)(b-a)$.*

**2.5. tétel (Taylor-tétel).** *Legyen $f\in C^{n+1}[a,b]$, és legyen $x_0\in(a,b)$. Ekkor minden $x\in(a,b)$-hez létezik olyan $\xi=\xi(x)\in\langle x,x_0\rangle$, hogy*

$$f(x) = f(x_0)+f'(x_0)(x-x_0)+\frac{f''(x_0)}{2}(x-x_0)^2+\dots+\frac{f^{(n)}(x_0)}{n!}(x-x_0)^n+\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}.$$

A következő tételt integrálokra vonatkozó középértéktételnek is nevezik.

**2.6. tétel.** *Legyen $f\colon[a,b]\to\mathbb{R}$ folytonos függvény, $g\colon[a,b]\to\mathbb{R}$ integrálható függvény amely nem vált előjelet $[a,b]$-n (azaz $g(x)\geq 0$ vagy $g(x)\leq 0$ teljesül minden $x\in[a,b]$-re). Ekkor létezik egy olyan $\xi\in(a,b)$ szám, hogy*

$$\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx.$$

A következő eredményt úgy szokás röviden megfogalmazni, hogy egymásba skatulyázott zárt intervallumoknak létezik egy közös pontja, ha az intervallumok hossza nullához tart.

**2.7. tétel.** *Legyen $[a_n,b_n]$ ($n=1,2,\dots$) korlátos zárt intervallumoknak egy sorozata, amelyre $[a_{n+1},b_{n+1}]\subset [a_n,b_n]$ teljesül minden $n$-re, és $(b_n-a_n)\to 0$ ha $n\to\infty$. Ekkor létezik olyan $c\in [a_1,b_1]$ szám, hogy $a_n\to c$ és $b_n\to c$, ha $n\to\infty$.*

**2.8. tétel.** *Monoton és korlátos számsorozatnak létezik határértéke.*

Zárjuk ezt a szakaszt az algebra alaptételének nevezett eredmény felidézésével, amelyet a következő alakban fogalmazunk meg:

**2.9. tétel (Az algebra alaptétele).** *Egy*

$$p(x)=a_n x^n+\dots+a_1 x+a_0, \qquad a_j\in\mathbb{C}\;(j=0,\dots,n),\quad a_n\neq 0$$

*polinomnak pontosan $n$ db komplex gyöke van multiplicitásokkal számolva.*

A tételnek általában arra a következményére lesz szükségünk, hogy ha egy $p(x)=a_n x^n+\dots+a_1 x+a_0$ polinomnak van $n+1$ db gyöke, akkor az a $p\equiv 0$ (azonosan nulla) polinom.

---
