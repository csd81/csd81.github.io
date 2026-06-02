**2.1. Analízis előismeretek** 



## 1. Alapvető jelölések és függvényhalmazok

A jegyzet különbséget tesz a függvények simasága (differenciálhatósági foka) szerint az alábbi halmazok bevezetésével:

* **$C[a,b]$:** Az $[a,b]$ zárt intervallumon értelmezett valós értékű, **folytonos** függvények halmaza.
* **$C^m[a,b]$:** Azon függvények halmaza, amelyek $[a,b]$-n folytonosak, és a nyílt $(a,b)$ intervallumon **$m$-szer folytonosan differenciálhatók**.

### Az intervallum feszített nyílt alakja ($\langle \cdot \rangle$)

Az $a$ és $b$ valós számok (ahol a sorrendjük vagy nagyságuk nem feltétlenül rögzített) által generált nyílt intervallumot az alábbi módon jelöljük:


$$\langle a,b\rangle := (\min\{a,b\}, \max\{a,b\})$$


Általánosításként $\langle a_1, a_2, \dots, a_n \rangle$ jelöli a felsorolt számok minimuma és maximuma által kifeszített legkisebb nyílt intervallumot.



## 2. Szélsőérték-tétel és Közbülsőérték-tétel

### Weierstrass-féle szélsőérték-tétel (2.1. Tétel)

> Ha $f \in C[a,b]$, akkor a függvény **felveszi a maximumát és a minimumát** a zárt $[a,b]$ intervallumon. Vagyis létezik olyan $c, d \in [a,b]$, amelyekre:
> 
> $$f(c)=\max_{x\in[a,b]} f(x) \qquad \text{és} \qquad f(d)=\min_{x\in[a,b]} f(x)$$
> 
> 

### Rolle-féle középértéktétel (2.2. Tétel)

Ha $f \in C[a,b]$ és a nyílt intervallumon differenciálható ($f \in C^1[a,b]$), valamint az intervallum végpontjaiban a felvett értékei megegyeznek ($f(a)=f(b)$), akkor létezik legalább egy olyan belső $\xi \in (a,b)$ pont, ahol a függvény **érintője vízszintes**, azay a deriváltja nulla:


$$f'(\xi) = 0$$

### Lagrange-féle középértéktétel (2.3. Tétel)

A Rolle-tétel általánosítása arra az esetre, amikor a végpontok értékei eltérnek. Ha $f \in C^1[a,b]$, akkor létezik olyan $\xi \in (a,b)$ belső pont, ahol az érintő meredeksége megegyezik a végpontokat összekötő szelő meredekségével:


$$f'(\xi) = \frac{f(b)-f(a)}{b-a} \implies f(b) - f(a) = f'(\xi)(b-a)$$



## 3. Cauchy-féle középértéktétel és a Taylor-tétel

### Cauchy-féle középértéktétel (2.4. Tétel)

Ha $f, g \in C[a,b]$ és a nyílt intervallumon differenciálhatók, valamint $g'(x) \neq 0$ minden $x \in (a,b)$ esetén, akkor létezik olyan $\xi \in (a,b)$ pont, amelyre:


$$\frac{f'( \xi )}{g'( \xi )} = \frac{f(b)-f(a)}{g(b)-g(a)}$$

### Taylor-tétel (2.5. Tétel)

A Taylor-tétel lehetővé teszi egy elegendően sokszor differenciálható függvény polinommal történő közelítését egy $x_0$ pont környezetében, miközben pontos képletet ad a közelítés hibájára (maradéktag).

Ha $f \in C^{n+1}[a,b]$ és $x_0 \in (a,b)$, akkor minden $x \in [a,b]$ esetén létezik egy olyan $\xi \in \langle x, x_0 \rangle$ belső pont, amelyre a függvény felírható az $n$-edfokú Taylor-polinom és a Lagrange-féle maradéktag összegeként:


$$f(x) = f(x_0) + f'(x_0)(x - x_0) + \frac{f''(x_0)}{2}(x - x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x - x_0)^n + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}$$



## 4. Integrál-középértéktétel és a Cantor-féle skatulyázási tétel

### Integrálokra vonatkozó középértéktétel (2.6. Tétel)

> Legyen $f \in C[a,b]$ folytonos függvény, és $g\colon [a,b] \to \mathbb{R}$ egy integrálható függvény, amely **nem vált előjelet** az $[a,b]$ intervallumon (azaz végig $g(x) \ge 0$ vagy $g(x) \le 0$). Ekkor létezik egy olyan $\xi \in (a,b)$ szám, hogy:
> 
> $$\int_a^b f(x)g(x)\,dx = f(\xi)\int_a^b g(x)\,dx$$
> 
> 

### Cantor-féle közösrész-tétel (2.7. Tétel)

Ez a tétel biztosítja a numerikus intervallumszűkítő eljárások (például az intervallumfelezés módszerének) elméleti konvergenciáját.

> Legyen $[a_n, b_n]$ korlátos és zárt intervallumoknak egy olyan sorozata, amelyre igaz, hogy minden lépésben egymásba ágyazottak, azaz $[a_{n+1}, b_{n+1}] \subset [a_n, b_n]$ minden $n$-re. Ha az intervallumok hossza a végtelenben nullához tart, azaz $(b_n - a_n) \to 0$, ha $n \to \infty$, akkor:
> **Létezik pontosan egy olyan $c \in \mathbb{R}$ közös pont**, amely mindegyik zárt intervallumnak eleme ($c \in [a_n, b_n]$ minden $n$-re).