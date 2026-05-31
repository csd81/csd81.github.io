# Kalkulus informatikusoknak II.

Győri István, Pituk Mihály


# 1. fejezet

# Végtelen sorok

## 1.1. Végtelen sorok konvergenciája

Legyen $\mathbb{N}$ a nemnegatív egész számok halmaza, $\mathbb{N}^+$ pedig a pozitív egészek halmaza. A valós számok halmazát az $\mathbb{R}$, a komplex számok halmazát pedig a $\mathbb{C}$ szimbólummal jelöljük.

**1.1.1. Definíció.** Legyen adva egy $\{a_k\}_{k=0}^{\infty}$ valós sorozat. A

$$\sum_{k=0}^{\infty} a_k = a_0 + a_1 + a_2 + \ldots$$

végtelen összeget *végtelen sornak* nevezzük. Az

$$s_n = \sum_{k=0}^{n} a_k = a_0 + a_1 + \cdots + a_n$$

összeget a $\sum_{k=0}^{\infty} a_k$ sor *$n$-edik részletösszegének* mondjuk. Ha az $\{s_n\}_{n=0}^{\infty}$ sorozat konvergens, akkor a $\sum_{k=0}^{\infty} a_k$ végtelen sort is *konvergensnek* mondjuk, az

$$s = \lim_{n\to\infty} s_n$$

véges határértéket pedig a *sor összegének* nevezzük, és ugyancsak a

$$\sum_{k=0}^{\infty} a_k$$

szimbólummal jelöljük. Tehát

$$\sum_{k=0}^{\infty} a_k = \lim_{n\to\infty} \sum_{k=0}^{n} a_k.$$

Ha az $\{s_n\}_{n=0}^{\infty}$ sorozat divergens, akkor a $\sum_{k=0}^{\infty} a_k$ sort is *divergensnek* mondjuk.


Ha $a_n \geq 0$ minden $n \in \mathbb{N}$-re, akkor a részletösszegek $\{s_n\}_{n=0}^{\infty}$ sorozata monoton növekedő. Tehát egy nemnegatív tagú sor éppen akkor konvergens, ha az $\{s_n\}_{n=0}^{\infty}$ sorozat felülről korlátos.

Legyen $m \in \mathbb{N}^+$ és $\{b_i\}_{i=m}^{\infty}$ egy valós sorozat. A

$$\sum_{i=m}^{\infty} b_i = b_m + b_{m+1} + b_{m+2} + \ldots$$

végtelen sor azonos az $\mathbb{N}$-en indexelt

$$\sum_{k=0}^{\infty} b_{k+m}$$

sorral, és összege:

$$\sum_{i=m}^{\infty} b_i = \lim_{n\to\infty} \sum_{i=m}^{n} b_i,$$

feltéve, hogy a limesz létezik és véges.

**1.1.2. Példa.**

$$\sum_{k=1}^{\infty} \frac{1}{k(k+1)} = \lim_{n\to\infty} \sum_{k=1}^{n} \frac{1}{k(k+1)} = \lim_{n\to\infty} \sum_{k=1}^{n} \left(\frac{1}{k} - \frac{1}{k+1}\right)$$
$$= \lim_{n\to\infty} \left(1 - \frac{1}{n+1}\right) = 1.$$

**1.1.3. Példa.** A $\sum_{k=0}^{\infty} (-1)^k$ sor divergens, mert a részletösszegek

$$s_n = \begin{cases} 1, & \text{ha } n \text{ páratlan} \\ 0, & \text{ha } n \text{ páros} \end{cases}$$

sorozata divergens.

## 1.2. A geometriai sor

**1.2.1. Definíció.** Legyen $a \in \mathbb{R}$ és $q \in \mathbb{R}$ adott. A

$$\sum_{k=0}^{\infty} aq^k = a + aq + aq^2 + aq^3 + \ldots$$

sort *geometriai (mértani) sornak* nevezzük. Az $a$ szám a sor első tagja, a $q$ szám pedig a sor *kvóciense (hányadosa)*.


A

$$\sum_{k=0}^{n} aq^k = \begin{cases} a\dfrac{1-q^{n+1}}{1-q}, & \text{ha } q \neq 1 \text{ és } n \in \mathbb{N}, \\ (n+1)a, & \text{ha } q = 1 \text{ és } n \in \mathbb{N}, \end{cases}$$

reláció, valamint a $\{q^n\}_{n=0}^{\infty}$ geometriai sorozat konvergenciatulajdonságaiból adódik a következő:

**1.2.2. Tétel** (A geometriai sor konvergenciája)**.** Legyen $a \in \mathbb{R} \setminus \{0\}$ és $q \in \mathbb{R}$. A $\sum_{k=0}^{\infty} aq^k$ geometriai sor pontosan akkor konvergens, ha $|q| < 1$, és konvergencia esetén összege $\dfrac{a}{1-q}$.

## 1.3. Műveletek konvergens sorokkal

**1.3.1. Tétel.** Ha a $\sum_{k=0}^{\infty} a_k$ és $\sum_{k=0}^{\infty} b_k$ sorok konvergensek és összegük $s$ illetve $t$, és $\alpha$ és $\beta$ pedig valós számok, akkor a $\sum_{k=0}^{\infty} (\alpha a_k + \beta b_k)$ sor is konvergens, és összege $\alpha s + \beta t$, azaz

$$\sum_{k=0}^{\infty} (\alpha a_k + \beta b_k) = \alpha \sum_{k=0}^{\infty} a_k + \beta \sum_{k=0}^{\infty} b_k.$$

**1.3.2. Példa.** Az előző tételből és a geometriai sor konvergenciatulajdonságaiból következik, hogy

$$\sum_{k=0}^{\infty} \frac{2^k + 3^k}{5^k} = \sum_{k=0}^{\infty} \left(\left(\frac{2}{5}\right)^k + \left(\frac{3}{5}\right)^k\right) = \sum_{k=0}^{\infty} \left(\frac{2}{5}\right)^k + \sum_{k=0}^{\infty} \left(\frac{3}{5}\right)^k = \frac{5}{3} + \frac{5}{2} = \frac{25}{6}.$$

## 1.4. A konvergencia szükséges feltétele

**1.4.1. Tétel** (A konvergencia szükséges feltétele)**.** Ha a $\sum_{k=0}^{\infty} a_k$ sor konvergens, akkor $\lim_{k\to\infty} a_k = 0$.

**1.4.2. Példa.** A

$$\sum_{k=1}^{\infty} \frac{k}{k+1}$$

sor divergens, mert

$$\frac{n}{n+1} = \frac{1}{\frac{1}{n}+1} \to 1 \neq 0, \qquad \text{ha } n \to \infty.$$

**1.4.3. Definíció.** A

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

sort *harmonikus sornak* nevezzük.

Be fogjuk látni, hogy a harmonikus sor divergens annak ellenére, hogy $\frac{1}{n} \to 0$. Tehát a $\lim_{n\to\infty} a_n = 0$ feltétel szükséges, de nem elegendő feltétele a $\sum_{k=0}^{\infty} a_k$ sor konvergenciájának.


## 1.5. Abszolút és feltételes konvergencia

**1.5.1. Definíció.** A $\sum_{k=0}^{\infty} a_k$ sort *abszolút konvergensnek* mondjuk, ha a

$$\sum_{k=0}^{\infty} |a_k|$$

sor konvergens.

Ha a $\sum_{k=0}^{\infty} a_k$ sor konvergens, de nem abszolút konvergens, akkor *feltételesen konvergensnek* nevezzük.

A konvergens és abszolút konvergens sorok között a következő a kapcsolat.

**1.5.2. Tétel.** Ha egy sor abszolút konvergens, akkor konvergens is.

A tétel megfordítása nem igaz. Be fogjuk látni, hogy a

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

sor konvergens, de mivel

$$\left|(-1)^k \frac{1}{k}\right| = \frac{1}{k}, \qquad k \in \mathbb{N}^+,$$

és a $\sum_{k=1}^{\infty} \frac{1}{k}$ harmonikus sor divergens, ezért a $\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$ sor nem abszolút konvergens. Tehát a $\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$ sor feltételesen konvergens.

## 1.6. Konvergenciakritériumok

Elegendő feltételeket adunk végtelen sorok konvergenciájára vagy divergenciájára. Megfogalmazásukhoz szükségünk van a következő fogalmakra.

**1.6.1. Definíció.** A $t \in \overline{\mathbb{R}} = \mathbb{R} \cup \{+\infty, -\infty\}$ számot az $\{a_n\}_{n=0}^{\infty}$ sorozat *torlódási pontjának* nevezzük, ha az $\{a_n\}_{n=0}^{\infty}$ sorozatnak van olyan $\{a_{n_k}\}_{k=0}^{\infty}$ részsorozata, amelyre

$$\lim_{k\to\infty} a_{n_k} = t.$$

Be lehet bizonyítani a következő tulajdonságot.

**1.6.2. Tétel.** Bármely valós $\{a_n\}_{n=0}^{\infty}$ sorozat torlódási pontjai között $\overline{\mathbb{R}}$-ban van legnagyobb és legkisebb is.

**1.6.3. Példa.** A $\{(-1)^n\}_{n=0}^{\infty}$ sorozat legnagyobb torlódási pontja $1$, legkisebb torlódási pontja pedig $-1$. A $\{(-1)^n n\}_{n=0}^{\infty}$ sorozat legnagyobb torlódási pontja $+\infty$, legkisebb torlódási pontja pedig $-\infty$.


**1.6.4. Definíció.** Az $\{a_n\}_{n=0}^{\infty}$ sorozat legnagyobb (legkisebb) torlódási pontját a sorozat *limesz szuperiorának (limesz inferiorának)* nevezzük, és a

$$\limsup_{n\to\infty} a_n \qquad \left(\liminf_{n\to\infty} a_n\right)$$

szimbólummal jelöljük.

Nyilvánvaló, hogy

$$\liminf_{n\to\infty} a_n \leq \limsup_{n\to\infty} a_n.$$

Azt is be lehet látni, hogy $\lim_{n\to\infty} a_n$ pontosan akkor létezik $\overline{\mathbb{R}}$-ban, ha

$$\liminf_{n\to\infty} a_n = \limsup_{n\to\infty} a_n.$$

Az ígért konvergenciakritériumok a következők:

**1.6.5. Tétel** (Hányadoskritérium)**.** Tegyük fel, hogy $|a_n| > 0$ véges számú kivétellel. Ha

$$\limsup_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} < 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor abszolút konvergens. Ha

$$\liminf_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} > 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor divergens.

Speciálisan, ha az

$$L = \lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|}$$

határérték (véges vagy végtelen) létezik, akkor $L < 1$ esetén a $\sum_{k=0}^{\infty} a_k$ sor abszolút konvergens, $L > 1$ esetén pedig divergens.

Hangsúlyozzuk, hogy ha

$$\lim_{n\to\infty} \frac{|a_{n+1}|}{|a_n|} = 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor konvergenciatulajdonságainak meghatározására a hányadoskritérium nem használható.

**1.6.6. Példa.** A

$$\sum_{k=1}^{\infty} \frac{k^k}{k!}$$

sor divergens, mert

$$\frac{\frac{(n+1)^{n+1}}{(n+1)!}}{\frac{n^n}{(n)!}} = \frac{(n+1)^{(n+1)} n!}{n^n (n+1)!} = \left(\frac{n+1}{n}\right)^n = \left(1 + \frac{1}{n}\right)^n \to e > 1, \qquad \text{ha } n \to \infty.$$


**1.6.7. Tétel** (Gyökkritérium)**.** Ha

$$\limsup_{n\to\infty} \sqrt[n]{|a_n|} < 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor abszolút konvergens. Ha

$$\liminf_{n\to\infty} \sqrt[n]{|a_n|} > 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor divergens.

Speciálisan, ha az

$$L = \lim_{n\to\infty} \sqrt[n]{|a_n|}$$

határérték (véges vagy végtelen) létezik, akkor $L < 1$ esetén a $\sum_{k=0}^{\infty} a_k$ sor abszolút konvergens, $L > 1$ esetén pedig divergens.

Ha

$$\lim_{n\to\infty} \sqrt[n]{|a_n|} = 1,$$

akkor a $\sum_{k=0}^{\infty} a_k$ sor konvergenciatulajdonságainak meghatározására a gyökkritérium nem használható.

**1.6.8. Példa.** A

$$\sum_{k=1}^{\infty} \frac{k}{2^k}$$

sor konvergens, mert

$$\sqrt[n]{\frac{n}{2^n}} = \frac{\sqrt[n]{n}}{2} \to \frac{1}{2} < 1, \qquad \text{ha } n \to \infty.$$

**1.6.9. Tétel** (Integrálkritérium)**.** Legyen $f : [0,\infty) \to (0,\infty)$ folytonos, monoton csökkenő és pozitív. Ekkor a

$$\sum_{k=0}^{\infty} f(k)$$

sor akkor és csak akkor konvergens, ha az $\int_0^{\infty} f$ improprius integrál konvergens.

Az állítás igaz marad akkor is, ha a $0$ számot tetszőleges $m \in \mathbb{N}^+$ számra cseréljük.

**1.6.10. Példa.** A

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

harmonikus sor divergens, mert

$$\int_1^{\infty} \frac{1}{t}\, dt = \lim_{x\to\infty} \int_1^{x} \frac{1}{t}\, dt = \lim_{x\to\infty} \ln x = \infty.$$

Ugyancsak az integrálkritérium segítségével látható be:


**1.6.11. Tétel.** Ha $\alpha > 1$, akkor a

$$\sum_{k=1}^{\infty} \frac{1}{k^{\alpha}}$$

sor konvergens, ha pedig $\alpha \leq 1$, akkor divergens.

**1.6.12. Definíció.** A

$$\sum_{k=1}^{\infty} \frac{1}{k^{\alpha}}, \qquad \alpha \in (0,1) \cup (1,\infty)$$

sort *hiperharmonikus sornak* nevezzük.

**1.6.13. Tétel** (Összehasonlító kritérium)**.** Ha

$$|a_k| \leq b_k \qquad \text{véges számú kivétellel,}$$

és a $\sum_{k=0}^{\infty} b_k$ sor konvergens, akkor a $\sum_{k=0}^{\infty} a_k$ sor abszolút konvergens. Ha

$$a_k \geq b_k \geq 0 \qquad \text{véges számú kivétellel,}$$

és a $\sum_{k=0}^{\infty} b_k$ sor divergens, akkor a $\sum_{k=0}^{\infty} a_k$ sor is divergens.

Az összehasonlító kritériumból könnyen levezethető az alábbi:

**1.6.14. Tétel.** Ha $b_k > 0$ véges számú kivétellel és valamely $L \in (0,\infty)$ számra

$$\lim_{k\to\infty} \frac{a_k}{b_k} = L,$$

akkor a $\sum_{k=0}^{\infty} a_k$ és $\sum_{k=0}^{\infty} b_k$ sorok közül vagy mindkettő konvergens, vagy pedig mindkettő divergens.

**1.6.15. Példa.** A

$$\sum_{k=0}^{\infty} \frac{k+2}{k^2 + 2k + 5}$$

sor divergens, mert

$$\frac{\frac{k+2}{k^2+2k+5}}{\frac{1}{k}} = \frac{k(k+2)}{k^2 + 2k + 5} \to 1, \qquad \text{ha } k \to \infty,$$

és a

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

(harmonikus) sor divergens.

**1.6.16. Definíció.** Legyen $\{a_k\}_{k=0}^{\infty}$ egy pozitív tagú sorozat. Ekkor a

$$\sum_{k=0}^{\infty} (-1)^k a_k \qquad \text{és} \qquad \sum_{k=0}^{\infty} (-1)^{k+1} a_k$$

sorokat *váltakozó előjelű soroknak* nevezzük.


Elegendő csak az első sort vizsgálni, mert a második az elsőnek $-1$-szerese.

A váltakozó előjelű sorok konvergenciájáról szól a következő:

**1.6.17. Tétel** (Leibniz-féle kritérium)**.** Ha $\{a_k\}_{k=0}^{\infty}$ pozitív tagú, monoton csökkenő sorozat, és $\lim_{k\to\infty} a_k = 0$, akkor a

$$\sum_{k=0}^{\infty} (-1)^k a_k$$

váltakozó előjelű sor konvergens.

**1.6.18. Példa.** A Leibniz-kritériumból az $a_k = \dfrac{1}{k}$ ($k \in \mathbb{N}^+$) választással kapjuk, hogy a

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

sor konvergens. Később be fogjuk látni, hogy

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k} = -\ln 2.$$

## 1.7. Hatványsorok

**1.7.1. Definíció.** Legyen adva egy $x_0 \in \mathbb{R}$ szám és egy $\{a_k\}_{k=0}^{\infty}$ valós sorozat. A

$$\sum_{k=0}^{\infty} a_k (x - x_0)^k = a_0 + a_1(x - x_0) + a_2(x - x_0)^2 + \ldots$$

függvényt $x_0$ *körüli hatványsornak* nevezzük. Az $x_0$ szám a hatványsor *középpontja*, $x$ pedig a valós *változó*.

**1.7.2. Definíció.** A hatványsor *konvergenciatartományán* a

$$K = \left\{ c \in \mathbb{R} \;\middle|\; \text{a } \sum_{k=0}^{\infty} a_k (c - x_0)^k \text{ számsor konvergens} \right\}$$

halmazt értjük.

Nyilvánvaló, hogy $x_0 \in K$, tehát $K \neq \emptyset$. Célunk a konvergenciatartomány leírása. Ennek szempontjából alapvető fontosságú a következő:

**1.7.3. Tétel** (Abel-féle lemma)**.** Ha valamely $c \neq x_0$ szám esetén a

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

számsor konvergens, akkor minden olyan $x$-re, amelyre $|x - x_0| < |c - x_0|$ a

$$\sum_{k=0}^{\infty} a_k (x - x_0)^k$$

számsor abszolút konvergens.


Az Abel-féle lemmából következik az alábbi:

**1.7.4. Tétel.** Legyen $K$ a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor konvergenciatartománya, és

$$r = \sup\{ |c - x_0| \mid c \in K \} \in [0, \infty].$$

Ha $r = 0$, akkor $K = \{x_0\}$. Ha $r = +\infty$, akkor minden $c \in \mathbb{R}$ esetén a

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

sor abszolút konvergens, és így $K = \mathbb{R}$. Ha pedig $r \in (0, \infty)$, akkor minden olyan $c$-re, amelyre $|c - x_0| < r$ ($|c - x_0| > r$) a

$$\sum_{k=0}^{\infty} a_k (c - x_0)^k$$

sor abszolút konvergens (divergens), s ezért

$$(x_0 - r, x_0 + r) \subset K \subset [x_0 - r, x_0 + r].$$

Mivel a hatványsor konvergenciatartománya az $r = 0$ esetől eltekintve intervallum, a konvergenciatartomány helyett a *konvergenciaintervallum* elnevezés is használatos.

**1.7.5. Definíció.** Az előző tételben szereplő $r$ számot a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor *konvergenciasugarának* nevezzük.

A konvergenciasugár meghatározása szolgál a következő:

**1.7.6. Tétel** (Cauchy–Hadamard-képlet)**.** Legyen $r$ a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor konvergenciasugara, és

$$\rho = \limsup_{k\to\infty} \sqrt[k]{|a_k|}.$$

Ekkor

$$r = \begin{cases} 0, & \text{ha } \rho = +\infty \\ \dfrac{1}{\rho}, & \text{ha } \rho \in (0, \infty) \\ +\infty, & \text{ha } \rho = 0 \end{cases}.$$

**1.7.7. Példa.** A

$$\sum_{k=1}^{\infty} \frac{(x+1)^k}{k}$$

$-1$ körüli hatványsor konvergenciasugara $r = 1$, mert

$$\rho = \limsup_{k\to\infty} \sqrt[k]{\frac{1}{k}} = \lim_{k\to\infty} \frac{1}{\sqrt[k]{k}} = 1.$$


A hatványsor $K$ konvergenciatartományára teljesül a

$$(-2, 0) \subset K \subset [-2, 0]$$

reláció. Mivel az $x = 0$-ra adódó

$$\sum_{k=1}^{\infty} \frac{1}{k}$$

sor divergens (harmonikus sor), és az $x = -2$-re adódó

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k}$$

sor konvergens (a Leibniz-kritérium szerint), ezért

$$K = [-2, 0).$$

A hatványsor konvergenciatartományának meghatározására gyakran jól használható a következő:

**1.7.8. Tétel.** Legyen $r$ a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor konvergenciasugara. Tegyük fel, hogy $a_k \neq 0$ véges számú kivétellel, és valamely $\lambda \in [0, \infty]$ számra

$$\lim_{k\to\infty} \frac{|a_{k+1}|}{|a_k|} = \lambda.$$

Ekkor

$$r = \begin{cases} 0, & \text{ha } \lambda = +\infty \\ \dfrac{1}{\lambda}, & \text{ha } \lambda \in (0, \infty) \\ +\infty, & \text{ha } \lambda = 0 \end{cases}.$$

**1.7.9. Példa.** A

$$\sum_{k=0}^{\infty} \frac{x^k}{k!}$$

$0$ körüli hatványsor konvergenciasugara $r = +\infty$, mert

$$\lambda = \lim_{k\to\infty} \frac{\frac{1}{(k+1)!}}{\frac{1}{k!}} = \lim_{k\to\infty} \frac{1}{k+1} = 0.$$

Ezért a konvergenciatartomány $K = \mathbb{R}$.


## 1.8. Az összegfüggvény tulajdonságai

**1.8.1. Definíció.** Legyen $K$ a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor konvergenciatartománya. Az

$$s(x) = \sum_{k=0}^{\infty} a_k (x - x_0)^k, \qquad x \in K,$$

képlettel definiált $s : K \to \mathbb{R}$ függvényt a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor *összegfüggvényének* mondjuk.

Az összegfüggvényt fontosabb tulajdonságait írják le a következő tételek.

**1.8.2. Tétel** (Az összegfüggvény folytonossága)**.** Ha egy hatványsor konvergenciasugara pozitív, akkor a hatványsor összegfüggvénye folytonos a konvergenciaintervallumán.

**1.8.3. Tétel** (Tagonkénti differenciálás)**.** Ha $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor $r$ konvergenciasugara pozitív, akkor a hatványsor $s$ összegfüggvénye akárhányszor differenciálható a konvergenciaintervallum belsejében, és $i$-edik deriváltja a hatványsor $n$-szeri tagonkénti differenciálásával kapható meg, azaz

$$s'(x) = \sum_{k=1}^{\infty} a_k k (x - x_0)^{k-1},$$
$$s''(x) = \sum_{k=2}^{\infty} a_k k(k-1) (x - x_0)^{k-2},$$
$$\vdots$$
$$s^{(n)}(x) = \sum_{k=n}^{\infty} a_k k(k-1)\ldots(k-n+1)(x - x_0)^{k-n},$$

valahányszor $|x - x_0| < r$.

**1.8.4. Példa.** Korábban már beláttuk, hogy a

$$\sum_{k=1}^{\infty} \frac{(x+1)^k}{k}$$

hatványsor konvergenciaintervalluma a $[-2, 0)$ intervallum. Ezért az

$$s(x) = \sum_{k=1}^{\infty} \frac{(x+1)^k}{k}, \qquad x \in [-2, 0),$$

függvény differenciálható a $(-2, 0)$-n, és itt

$$s'(x) = \sum_{k=1}^{\infty} (x+1)^{k-1} = -\frac{1}{x},$$


a geometriai sor összegképlete alapján. Mivel $s(-1) = 0$, a Newton–Leibniz-szabály szerint minden $x \in (-2, 0)$ esetén

$$s(x) = s(-1) + \int_{-1}^{x} s'(t)\, dt = -\int_{-1}^{x} \frac{1}{t}\, dt = -\left[\ln|t|\right]_{-1}^{x} = -\ln|x|.$$

Az $s$ függvény $-2$-ben jobbról folytonos, ezért

$$\sum_{k=1}^{\infty} (-1)^k \frac{1}{k} = s(-2) = \lim_{x\to -2+} s(x) = -\ln 2.$$

**1.8.5. Tétel** (Tagonkénti integrálás)**.** Ha a $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor konvergenciasugara pozitív és $[a, b]$ része a hatványsor konvergenciaintervallumának, akkor a hatványsor $s$ összegfüggvénye tagonként integrálható $[a, b]$-n, azaz

$$\int_a^b s(x)\, dx = \sum_{k=0}^{\infty} \int_a^b a_k (x - x_0)^k\, dx = \sum_{k=0}^{\infty} a_k \left[\frac{(x - x_0)^{k+1}}{k+1}\right]_a^b.$$

## 1.9. Taylor-sor, Taylor-polinom

Tegyük fel, hogy az $f$ függvény $x_0$ körüli hatványsorba fejthető, azaz létezik egy $\sum_{k=0}^{\infty} a_k (x - x_0)^k$ hatványsor úgy, hogy a hatványsor $r$ konvergenciasugara pozitív, és

$$f(x) = \sum_{k=0}^{\infty} a_k (x - x_0)^k, \qquad \text{valahányszor } |x - x_0| < r.$$

A tagonkénti differenciálásról szóló tételből következik, hogy ekkor $f$ akárhányszor differenciálható, és minden $k \in \mathbb{N}$ esetén

$$a_k = \frac{f^{(k)}(x_0)}{k!}.$$

(Definíció szerint $0! = 1$.) Ez a tény motiválja a következő sor bevezetését és vizsgálatát.

**1.9.1. Definíció.** Tegyük fel, hogy az $f$ függvény akárhányszor differenciálható az $x_0 \in D(f)$ helyen. A

$$T(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k$$

hatványsort az $f$ függvény $x_0$ *körüli Taylor-sorának* nevezzük. A hatványsor $n$-edik

$$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k$$

részletösszegét az $f$ függvény $n$-edik $x_0$ körüli *Taylor-polinomjának* mondjuk. Az $x_0 = 0$ esetben használatos a *MacLaurin-sor* illetve *MacLaurin-polinom* elnevezés is.

Az

$$R_n(x) = f(x) - T_n(x)$$

különbséget az $f$ függvény $n$-edik $x_0$ körüli *maradéktagjának* mondjuk.


**1.9.2. Példa.** Minden $k \in \mathbb{N}$ esetén $\exp^{(k)} = \exp$. Ezért az $\exp$ függvény $0$ körüli Taylor-sora

$$T(x) = \sum_{k=0}^{\infty} \frac{x^k}{k!}.$$

Korábban már beláttuk, hogy ez a hatványsor a számegyenes minden pontjában abszolút konvergens.

## 1.10. Taylor tétele

Taylor tételének megfogalmazásához szükségünk van a következő jelölésre.

**1.10.1. Definíció.** Bármely $x_0, x \in \mathbb{R}$, $x \neq x_0$ esetén

$$[x_0; x] = \begin{cases} [x_0, x], & \text{ha } x_0 < x \\ [x, x_0], & \text{ha } x < x_0. \end{cases}$$

Hasonlóképpen definiáljuk az $(x_0; x)$ nyílt intervallumot.

**1.10.2. Tétel** (Taylor tétele)**.** Legyen $x_0, x \in \mathbb{R}$, $x \neq x_0$. Ha valamely $n \in \mathbb{N}$ esetén $f^{(n)}$ folytonos az $[x_0; x]$ intervallumon és differenciálható az $(x_0; x)$-en, akkor létezik $c \in (x_0; x)$ úgy, hogy

$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x - x_0)^{n+1}.$$

Megjegyezzük, hogy az $n = 0$ esetben Taylor tétele Lagrange tételére megy át.

**1.10.3. Definíció.** Az $R_n(x)$ maradéktagnak Taylor tételében szereplő alakját a *maradéktag Lagrange-féle alakjának* nevezzük.

Taylor tétele gyakran jól használható függvényértékek közelítő számítására.

**1.10.4. Definíció.** Bármely $n \in \mathbb{N}$ esetén az $\exp$ függvény $0$ körüli $n$-edik Taylor polinomja

$$T_n(x) = \sum_{k=0}^{n} \frac{x^k}{k!}.$$

Ezért ha az $e = \exp 1$ szám értékét a Taylor-polinom

$$T_n(1) = \sum_{k=0}^{n} \frac{1}{k!}$$

értékével helyettesítjük, akkor Taylor tétele szerint létezik $c \in (0, 1)$ úgy, hogy az $e = \exp 1$ pontos értéke és a „közelítő" $T_n(1)$ érték közötti különbség az

$$\exp(1) - T_n(1) = R_n(1) = \frac{e^c}{(n+1)!}$$


alakban írható. Mivel $c < 1$, ezért

$$\frac{e^c}{(n+1)!} < \frac{e}{(n+1)!} < \frac{3}{(n+1)!}.$$

Ezért ha azt szeretnénk, hogy a valódi és a közelítő érték közötti távolság kisebb legyen $10^{-2}$-nál, akkor az $n$ számot elegendő úgy választani, hogy

$$\frac{3}{(n+1)!} < \frac{1}{100},$$

vagyis 4-nél nagyobbnak. Tehát

$$T_5(1) = 1 + \frac{1}{2} + \frac{1}{6} + \frac{1}{24} + \frac{1}{120} = 2.716$$

már $10^{-2}$ pontossággal közelíti az $e$ számot.

## 1.11. Nevezetes hatványsorok

Taylor tétele jól használható arra is, hogy bizonyos függvényeket hatványsorba fejtsünk. Taylor tételének egyik következménye:

**1.11.1. Tétel.** Legyen $(a, b) \subset \mathbb{R}$. Tegyük fel, hogy $f$ akárhányszor differenciálható $(a, b)$-n és létezik $M \in (0, \infty)$ úgy, hogy minden $n \in \mathbb{N}$-re $|f^{(n)}| \leq M$ az $(a, b)$-n. Ekkor bármely $x$, $x_0 \in (a, b)$ esetén

$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!} (x - x_0)^k.$$

Az előző tételből könnyen megkapható néhány nevezetes hatványsor.

**1.11.2. Tétel** (Az $\exp$ függvény hatványsora)**.** Bármely $x \in \mathbb{R}$ esetén

$$\exp x = \sum_{k=0}^{\infty} \frac{x^k}{k!}.$$

**1.11.3. Tétel** (A $\sin$ függvény hatványsora)**.** Bármely $x \in \mathbb{R}$ esetén

$$\sin x = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k+1}}{(2k+1)!}.$$

**1.11.4. Tétel** (A $\cos$ függvény hatványsora)**.** Bármely $x \in \mathbb{R}$ esetén

$$\cos x = \sum_{k=0}^{\infty} (-1)^k \frac{x^{2k}}{(2k)!}.$$


## 1.12. Komplex hatványsorok

Komplex sorozatok és sorok konvergenciájának, valamint a komplex hatványsorok konvergenciatartományának a definícióját úgy kapjuk, hogy a valós sorozatok, sorok, illetve hatványsorok megfelelő definíciójában $\mathbb{R}$-et $\mathbb{C}$-re cseréljük. A sorozatok határértékszámításának szabályai és a sorok konvergenciakritériumai a monotonitási és rendezési relációkra hivatkozókat leszámítva átvihetők a komplex esetre is. Hasonló a helyzet a komplex hatványsorok konvergenciatartományával is. Ha $\{c_k\}_{k=0}^{\infty}$ komplex számok sorozata és $z_0 \in \mathbb{C}$, akkor a

$$\sum_{k=0}^{\infty} c_k (z - z_0)^k$$

komplex változójú hatványsor konvergenciatartományát hasonlóképpen jellemezhetjük, mint a valós hatványsorokét. Pontosabban, ha

$$\rho = \limsup_{k\to\infty} \sqrt[k]{|c_k|},$$

akkor a $\sum_{k=0}^{\infty} c_k (z - z_0)^k$ hatványsor konvergenciasugara

$$r = \begin{cases} 0, & \text{ha } \rho = +\infty \\ \dfrac{1}{\rho}, & \text{ha } \rho \in (0, \infty), \\ +\infty & \text{ha } \rho = 0 \end{cases}$$

azaz ha $|z - z_0| < r$, akkor a $\sum_{k=0}^{\infty} c_k (z - z_0)^k$ sor abszolút konvergens, ha pedig $|z - z_0| > r$, akkor divergens.

Az exp, sin és cos függvények hatványsor alakjáról szóló eredmények lehetőséget adnak ezen függvények komplex számokra való kiterjesztésére.

**1.12.1. Definíció.** Bármely $z \in \mathbb{C}$ esetén legyen

$$\exp z = \sum_{k=0}^{\infty} \frac{z^k}{k!},$$

$$\sin z = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k+1}}{(2k+1)!},$$

$$\cos z = \sum_{k=0}^{\infty} (-1)^k \frac{z^{2k}}{(2k)!}.$$

A valós exp függvényhez hasonlóan $z \in \mathbb{C}$ esetén is használatos az $\exp z = e^z$ jelölés.

Végül ismertetünk három a komplex exp, sin és cos függvényekre vonatkozó nevezetes azonosságot.


**1.12.2. Tétel** (Euler-formulák)**.** *Bármely* $z \in \mathbb{C}$ *helyen*

$$e^{iz} = \cos z + i \sin z,$$

$$\sin z = \frac{e^{iz} - e^{-iz}}{2i},$$

$$\cos z = \frac{e^{iz} + e^{-iz}}{2}.$$

Az első Euler-formulát a komplex szám trigonometrikus alakjával kombinálva kapjuk a $z \neq 0$ komplex szám *exponenciális alakját:*

$$z = re^{i\varphi},$$

ahol $r = |z|$, $\varphi$ pedig $z$ argumentuma.


# 2. fejezet

# Egy információátviteli probléma

## 2.1. Jelsorozatok átvitele

Legyen adva egy üzenetátviteli rendszer, amelyben az üzeneteket két alapjel – mondjuk $a$ és $b$ – segítségével kódoljuk és továbbítjuk. Egy üzenet formája az $a$ és $b$ alapjelekből álló valamely véges hosszúságú sorozat, például: $abaabbb$. Ilyen rendszer a telegráf vagy a binárisan kódolt adatátviteli rendszerek (fax, internet, stb.).

A rendszerben az $a$ alapjel átviteléhez $k_1$, míg a $b$ alapjel átviteléhez $k_2$ időegységre van szükség ($k_1$ és $k_2$ pozitív egész). Tegyük fel a határozottság kedvéért, hogy $k_2 \geq k_1$. Felmerül a kérdés: hány olyan egymástól különböző üzenet (jelsorozat) van, amelyek átviteléhez pontosan $n$ időegység kell?

Jelölje $s_n$ mindazon egymástól különböző üzeneteknek a számát, amelyek pontosan $n$ időegység alatt vihetők át. Ekkor $s_n$ teljesíti a

$$s_n = s_{n-k_1} + s_{n-k_2}, \qquad n \geq k_2 + 1$$

rekurzív összefüggést, hiszen csak két különböző eset fordulhat elő: ha az utolsó átvitt alapjel $k_1$ hosszú volt, akkor előtte összesen $s_{n-k_1}$ db különböző $n - k_1$ hosszú jelsorozat lehetett, ha pedig az utolsó átvitt alapjel $k_2$ hosszú volt, akkor előtte összesen $s_{n-k_2}$-féle $n - k_2$ hosszú jelsorozat lehetett. Ez a rekurzív képlet akkor határozza meg egyértelműen az $\{s_n\}$ sorozatot, ha megadjuk a sorozat első $k_2$ db kezdeti értékét:

$$s_1 = u_1, \quad s_2 = u_2, \quad \ldots, \quad s_{k_2} = u_{k_2}.$$

**Speciális eset:** Legyen az $a = \cdot$ jel átviteléhez szükséges idő egy egység, azaz $k_1 = 1$, és a $b = -$ jel átviteléhez szükséges idő két egység, azaz $k_2 = 2$. A szemléltetés kedvéért táblázatba foglaltuk az $\{s_n\}$ sorozat első néhány tagját és a hozzájuk tartozó jelsorozatokat:

| $n$ | $s_n$ | lehetséges jelsorozatok |
|:---:|:---:|:---:|
| 1 | 1 | $\cdot$ |
| 2 | 2 | $\cdot\,\cdot$; $-$ |
| 3 | 3 | $\cdot\,\cdot\,\cdot$; $\cdot\,-$; $-\,\cdot$ |
| 4 | 5 | $\cdot\,\cdot\,\cdot\,\cdot$; $\cdot\,\cdot\,-$; $\cdot\,-\,\cdot$; $-\,\cdot\,\cdot$; $--$ |


Az $\{s_n\}$ sorozatot ebben az esetben az

$$s_n = s_{n-1} + s_{n-2}, \quad n \geq 3,$$
$$s_1 = 1, \quad s_2 = 2,$$

rekurzió határozza meg.

Az információelméletben az áteresztő csatorna kapacitását, jele $C$, a

$$C = \lim_{n \to +\infty} \frac{\log_2 s_n}{n}$$

formulával definiálják [3].

Felmerülnek a következő kérdések:

- Mi lehet $s_n$ képlete?
- Hogyan számolható ki az áteresztő csatorna $C$ kapacitása, és hogyan változik $C$ $k_1$ és $k_2$ függvényében?

A kérdéseket a következő részben bevezetett *z-transzformált* segítségével fogjuk megválaszolni.

## 2.2. A z-transzformált fogalma

**2.2.1. Definíció.** Legyen adva egy komplex számokból álló $\{x_n\}_{n=0}^{\infty}$ sorozat. Az $\{x_n\}_{n=0}^{\infty}$ sorozat *z-transzformáltját* az

$$X(z) = \sum_{n=0}^{\infty} \frac{x_n}{z^n}$$

képlettel definiáljuk minden olyan $z \in \mathbb{C}$-re, amelyre a jobb oldalon szereplő komplex számsor konvergens. Jelölés: $X = \mathcal{Z}\{x_n\}$.

Az $X = \mathcal{Z}\{x_n\}$ függvény (ha létezik) komplex változójú és komplex értékű. Ha $w = \dfrac{1}{z}$, akkor

$$X(1/w) = \sum_{n=0}^{\infty} x_n w^n$$

egy komplex hatványsor, tehát a z-transzformált vizsgálata során felhasználhatjuk a komplex hatványsorokra vonatkozó eredményeinket. Eszerint ha

$$R = \limsup_{n \to \infty} \sqrt[n]{|x_n|},$$

akkor $|z| > R$ esetén a

$$\sum_{n=0}^{\infty} \frac{x_n}{z^n}$$

sor konvergens, $|z| < R$ esetén pedig divergens.


**2.2.2. Definíció.** Az

$$R = \limsup_{n \to \infty} \sqrt[n]{|x_n|}, \qquad 0 \leq R \leq \infty,$$

számot az $X = \mathcal{Z}\{x_n\}$ z-transzformált *konvergenciasugarának* nevezzük.

**2.2.3. Tétel** (Egzisztencia tétel)**.** *Legyen adva egy $\{x_n\}_{n=0}^{\infty}$ komplex sorozat. Ha az $X = \mathcal{Z}\{x_n\}$ z-transzformált $R$ konvergenciasugara véges, akkor $X$ értelmezve van minden olyan $z \in \mathbb{C}$ helyen, amelyre $|z| > R$.*

**2.2.4. Tétel** (Unicitás tétel)**.** *Legyen $\{x_n\}_{n=0}^{\infty}$ és $\{y_n\}_{n=0}^{\infty}$ két komplex sorozat. Tegyük fel, hogy az $X = \mathcal{Z}\{x_n\}$ és $Y = \mathcal{Z}\{y_n\}$ z-transzformáltak konvergenciasugarai végesek, továbbá*

$$X(z) = Y(z), \qquad \text{ha } |z| \text{ elég nagy}.$$

*Ekkor $x_n = y_n$ minden $n \in \mathbb{N}$-re.*

## 2.3. A z-transzformált tulajdonságai

**2.3.1. Tétel** (Linearitás)**.** *Legyen $\{x_n\}_{n=0}^{\infty}$ és $\{y_n\}_{n=0}^{\infty}$ két komplex sorozat. Tegyük fel, hogy a $\mathcal{Z}\{x_n\}$ és $\mathcal{Z}\{y_n\}$ z-transzformáltak konvergenciasugarai végesek, és $a, b \in \mathbb{C}$. Ekkor*

$$\mathcal{Z}\{ax_n + by_n\}(z) = a\mathcal{Z}\{x_n\}(z) + b\mathcal{Z}\{y_n\}(z), \qquad \text{ha } |z| \text{ elég nagy}.$$

**2.3.2. Tétel** (Eltolás)**.** *Legyen adva egy $\{x_n\}_{n=0}^{\infty}$ komplex sorozat. Ha az $X = \mathcal{Z}\{x_n\}$ z-transzformált $R$ konvergenciasugara véges, akkor bármely $k \in \mathbb{N}^+$ esetén*

$$\mathcal{Z}\{x_{n+k}\}(z) = z^k X(z) - \sum_{j=0}^{k-1} x_j z^{j-k}, \qquad ha~|z| > R.$$

**2.3.3. Tétel** (Konvolúciós tétel)**.** *Legyen $\{x_n\}_{n=0}^{\infty}$ és $\{y_n\}_{n=0}^{\infty}$ két komplex sorozat, és definiáljuk az $\{u_n\}_{n=0}^{\infty}$ sorozatot az*

$$u_n = \sum_{j=0}^{n} x_{n-j} y_j, \qquad ha~n \in \mathbb{N}$$

*képlettel. Ha az $X = \mathcal{Z}\{x_n\}$ és $Y = \mathcal{Z}\{y_n\}$ z-transzformált $R_1$, illetve $R_2$ konvergenciasugarai végesek, akkor az $U = \mathcal{Z}\{u_n\}$ z-transzformált konvergenciasugara is véges, és*

$$U(z) = X(z)Y(z), \qquad \text{ha } |z| \text{ elég nagy}.$$

**2.3.4. Definíció.** Az előző tételben szereplő $\{u_n\}_{n=0}^{\infty}$ sorozatot az $\{x_n\}_{n=0}^{\infty}$ és $\{y_n\}_{n=0}^{\infty}$ sorozat *konvolúciójának* nevezzük.

Néhány konkrét sorozat z-transzformáltját a következő táblázat tartalmazza:


| $x_n$ | $X(z) = \mathcal{Z}\{x_n\}(z)$ |
|:---:|:---:|
| $1$ | $\dfrac{z}{z-1}$ |
| $a^n$ | $\dfrac{z}{z-a}$ |
| $na^n$ | $\dfrac{az}{(z-a)^2}$ |
| $n^2 a^n$ | $\dfrac{az(z+a)}{(z-a)^3}$ |
| $n^3 a^n$ | $\dfrac{az(z^2 + 4az + a^2)}{(z-a)^4}$ |
| $n^k a^n$ | $(-1)^k D^k\left(\dfrac{z}{z-a}\right); \quad D = z\dfrac{d}{dz}$ |
| $a^n \sin(n\omega)$ | $\dfrac{az\sin(n\omega)}{z^2 - 2az\cos\omega + a^2}$ |
| $a^n \cos(n\omega)$ | $\dfrac{z(z - a\cos\omega)}{z^2 - 2az\cos\omega + a^2}$ |

$$(a, b, \omega \in \mathbb{R} \text{ és } k \in \mathbb{N}^+)$$

A továbbiakban szükségünk lesz a következő tételre:

**2.3.5. Tétel.** *Legyen $k \in \mathbb{N}^+$, $a_1, \ldots, a_k \in \mathbb{R}$, és $\{b_n\}_{n=0}^{\infty}$ egy komplex sorozat. Tegyük fel, hogy $\{x_n\}_{n=0}^{\infty}$ olyan komplex sorozat, amelyre*

$$x_{n+k} = a_1 x_{n+k-1} + a_2 x_{n+k-2} + \cdots + a_k x_n + b_n, \qquad ha~n \in \mathbb{N},$$

*továbbá*

$$\limsup_{n \to \infty} \sqrt[n]{|b_n|} < \infty.$$

*Ekkor*

$$\limsup_{n \to \infty} \sqrt[n]{|x_n|} < \infty.$$

## 2.4. A jelátviteli probléma vizsgálata

Tekintsük a 2.1. szakaszban definiált információátviteli probléma

$$s_n = s_{n-1} + s_{n-2}, \qquad ha~n \geq 3,$$
$$s_1 = 1, \qquad s_2 = 2,$$

speciális esetét. A problémát írhatjuk az ekvivalens

$$s_{n+2} = s_{n+1} + s_n, \qquad ha~n \geq 0,$$
$$s_0 = 1, \qquad s_1 = 1,$$


alakban is. Legyen $S = \mathcal{Z}\{s_n\}$. Ha vesszük mindkét oldal $z$-transzformáltját és alkalmazzuk az eltolási tételt, azt kapjuk, hogy

$$z^2 S(z) - z^2 s_0 - z s_1 = z S(z) - z s_0 + S(z).$$

A kezdeti értékeket behelyettesítésével:

$$(z^2 - z - 1)S(z) = z^2,$$

azaz

$$S(z) = \frac{z^2}{z^2 - z - 1}.$$

Bontsuk $S(z)$-t parciális törtekre úgy, hogy egy $z$ szorzótényezőt meghagyunk a számlálóban:

$$\frac{z^2}{z^2 - z - 1} = \frac{z^2}{(z - z_1)(z - z_2)} = z\left(\frac{A}{z - z_1} + \frac{B}{z - z_2}\right),$$

ahol

$$z_1 = \frac{1 + \sqrt{5}}{2}, \quad z_2 = \frac{1 - \sqrt{5}}{2}.$$

Ezt végigszámolva azt kapjuk, hogy

$$A = \frac{1}{\sqrt{5}} z_1 \qquad \text{és} \qquad B = -\frac{1}{\sqrt{5}} z_2,$$

tehát

$$S(z) = \frac{1}{\sqrt{5}} z_1 \frac{z}{z - z_1} - \frac{1}{\sqrt{5}} z_2 \frac{z}{z - z_2}.$$

Innen

$$s_n = \frac{1}{\sqrt{5}} \left(\frac{1 + \sqrt{5}}{2}\right)^{n+1} - \frac{1}{\sqrt{5}} \left(\frac{1 - \sqrt{5}}{2}\right)^{n+1}$$


minden $n \in \mathbb{N}^+$-re. Ha erre a sorozatra kiszámítjuk a csatorna áteresztő képességét, azt kapjuk, hogy

$$
\begin{aligned}
C &= \lim_{n \to +\infty} \frac{\log_2 s_n}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2\left[\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} - \frac{1}{\sqrt{5}}\left(\frac{1-\sqrt{5}}{2}\right)^{n+1}\right]}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2\left[\frac{1}{\sqrt{5}}\left(\frac{1+\sqrt{5}}{2}\right)^{n+1}\left(1 - \left(\frac{\frac{1-\sqrt{5}}{2}}{\frac{1+\sqrt{5}}{2}}\right)^{n+1}\right)\right]}{n} \\[2mm]
&= \lim_{n \to +\infty} \frac{\log_2 \frac{1}{\sqrt{5}} + \log_2\left(\frac{1+\sqrt{5}}{2}\right)^{n+1} + \log_2\left(1 - \left(\frac{1-\sqrt{5}}{1+\sqrt{5}}\right)^{n+1}\right)}{n} \\[2mm]
&= \lim_{n \to \infty} \frac{\log_2 \frac{1}{\sqrt{5}}}{n} + \lim_{n \to +\infty} \frac{(n+1)\log_2 \frac{1+\sqrt{5}}{2}}{n} + \lim_{n \to +\infty} \frac{\log_2\left(1 - \left(\frac{1-\sqrt{5}}{1+\sqrt{5}}\right)^{n+1}\right)}{n} \\[2mm]
&= 0 + \log_2 \frac{1 + \sqrt{5}}{2} + 0.
\end{aligned}
$$

Tehát

$$C = \log_2 \frac{1 + \sqrt{5}}{2} \approx 0{,}7.$$


# 3. fejezet

# Többváltozós függvények differenciálszámítása

## 3.1. Az $p$-dimenziós euklideszi tér

Bármely $p \in \mathbb{N}^+$ esetén az $\mathbb{R}^p$ szimbólum a $p$-dimenziós valós oszlopvektorok terét jelöli. $\mathbb{R}^p$ elemeit *vektoroknak* vagy *pontoknak* nevezzük; $\mathbb{R}^1 = \mathbb{R}$.

Bármely $x = (x_1, \ldots, x_p)^T$, $y = (y_1, \ldots, y_p)^T \in \mathbb{R}^p$ és $\lambda \in \mathbb{R}$ esetén

$$x + y = (x_1 + y_1, \ldots, x_p + y_p)^T,$$
$$\lambda x = (\lambda x_1, \ldots, \lambda x_n)^T,$$

ahol a $T$ felső index a vektorok transzponálására utal, azaz sorvektorok helyett oszlopvektorokat kell írunk. A fenti két művelettel együtt $\mathbb{R}^p$ valós vektortér, amelynek dimenziója $p$. Az $e_1 = (1, 0, \ldots, 0)^T$, $e_2 = (0, 1, \ldots, 0)^T$, $\ldots$ $e_p = (0, 0, \ldots, 1)^T$ vektorok az $\mathbb{R}^p$ tér bázisát alkotják. Ezeket a vektorokat *kanonikus bázisvektoroknak* nevezzük. Bármely $x = (x_1, x_2, \ldots, x_p)^T \in \mathbb{R}^p$ vektor esetén

$$x = \sum_{i=1}^{p} x_i e_i.$$

Az $x = (x_1, x_2, \ldots, x_p)^T \in \mathbb{R}^p$ vektor *hosszát* vagy *euklideszi normáját* a

$$\|x\| = \left( \sum_{i=1}^{p} x_i^2 \right)^{1/2}$$

képlettel definiáljuk.

Az $x$ és $y \in \mathbb{R}^p$ pontok egymástól való *euklideszi távolsága*

$$\rho_p(x, y) = \|x - y\|.$$


## 3.2. Pontsorozat konvergenciája

**3.2.1. Definíció.** Legyen $\{a_n\}_{n=0}^{\infty}$ adott $\mathbb{R}^p$-beli sorozat. Azt mondjuk, hogy az $\{a_n\}$ pontsorozat az $a \in \mathbb{R}^p$ *limeszponthoz tart*, ha $\|a_n - a\| \to 0$, ha $n \to \infty$. A jelölés a szokásos:

$$\lim_{n\to\infty} a_n = a, \qquad \text{illetve} \qquad a_n \to a.$$

Az $\{a_n\}$ pontsorozat *konvergens*, ha van limeszpontja, különben *divergens*.

A következő egyszerű tétel a pontsorozatok konvergenciáját visszavezeti valós számsorozatok konvergenciájára.

**3.2.2. Tétel.** *Legyen* $a_n = (a_{n1}, \ldots, a_{np})^T$, $n \in \mathbb{N}$, *és* $a = (a_1, \ldots, a_p)^T \in \mathbb{R}^p$. *Az*

$$a_n \to a$$

*limeszreláció pontosan akkor teljesül, ha minden* $i \in \{1, \ldots, p\}$ *esetén*

$$a_{ni} \to a_i.$$

## 3.3. Környezetek, pontozott környezetek

**3.3.1. Definíció.** Legyen $a \in \mathbb{R}^p$ és $\varepsilon > 0$. Az $a$ pont $\varepsilon$ *sugarú környezetén* a

$$K_\varepsilon(a) = \{\, x \in \mathbb{R}^p \mid \|x - a\| < \varepsilon \,\}$$

halmazt értjük. A

$$P_\varepsilon(a) = K_\varepsilon(a) \setminus \{a\}$$

halmazt a pont $\varepsilon$ *sugarú pontozott környezetének* mondjuk.

A $p = 1$ esetben $K_\varepsilon(a)$ átmegy az $(a - \varepsilon, a + \varepsilon)$ intervallumba, $p = 2$ esetén az $a \in \mathbb{R}^2$ középpontú $\varepsilon$ sugarú körbe (a körvonal nélkül), $p = 3$ esetén pedig az $a \in \mathbb{R}^3$ középpontú $\varepsilon$ sugarú gömbbe (a gömbfelület nélkül).

## 3.4. Nyílt, zárt és korlátos ponthalmazok

A következő definíció egy $x \in \mathbb{R}^p$ pontnak egy $A \subset \mathbb{R}^p$ ponthalmazhoz viszonyított helyzetét osztályozza.

**3.4.1. Definíció.** Legyen $x \in \mathbb{R}^p$ és $A \subset \mathbb{R}^p$. Azt mondjuk, hogy $x$ *belső pontja* $A$-nak, ha van olyan $\varepsilon > 0$, hogy $K_\varepsilon(x) \subset A$; $x$ *külső pontja* $A$-nak, ha van olyan $\varepsilon > 0$, hogy $A \cap K_\varepsilon(x) = \emptyset$; $x$ *határpontja* $A$-nak, ha minden $\varepsilon > 0$-ra $K_\varepsilon(x) \cap A \neq \emptyset \neq K_\varepsilon(x) \setminus A$.

A következő ábrán látható $A \subset \mathbb{R}^2$ halmaznak $x$ belső pontja, $y$ külső pontja, $z$ pedig határpontja.


*3.1. ábra.*

**3.4.2. Definíció.** Az $A \subset \mathbb{R}^p$ ponthalmazt *nyíltnak* mondjuk, ha minden $x \in A$ pont belső pontja $A$-nak, és *zártnak*, ha az $\mathbb{R}^p \setminus A$ ponthalmaz nyílt.

Az $A \subset \mathbb{R}^p$ halmaz összes belső pontjából álló halmazt $A$ *belsejének* nevezzük és $\operatorname{int} A$-val jelöljük. Az $A$ halmaz határpontjaiból álló halmaz neve $A$ *határa*.

Az $\operatorname{int} A$ jelölés az „interior" latin szóból ered, amelynek jelentése „belső".

Egy ponthalmaz zártságának ellenőrzésére gyakran jól használható a következő tétel:

**3.4.3. Tétel.** *Egy* $A \subset \mathbb{R}^p$ *ponthalmaz akkor és csak akkor zárt, ha bármely $A$-beli konvergens pontsorozat limeszpontja eleme $A$-nak, azaz ha* $a_n \in A$ *minden $n \in \mathbb{N}$-re és valamely $a \in \mathbb{R}^p$ esetén* $a_n \to a$*, akkor* $a \in A$.

**3.4.4. Példa.** Ha $[\alpha, \beta] \subset \mathbb{R}$, $f$, $g$ pedig az $[\alpha, \beta]$ intervallumon folytonos valós függvények, amelyekre $g \leq f$ az $[\alpha, \beta]$-n, akkor az

$$A = \{\, (x, y)^T \in \mathbb{R}^2 \mid \alpha \leq x \leq \beta,\ g(x) \leq y \leq f(x) \,\} \subset \mathbb{R}^2$$

halmaz zárt. Valóban, ha $(x_n, y_n)^T \in A$ minden $n \in \mathbb{N}$-re, azaz

$$\alpha \leq x_n \leq \beta, \qquad g(x_n) \leq y_n \leq f(x_n), \qquad n \in \mathbb{N},$$

és valamely $(x, y)^T \in \mathbb{R}^2$ estén $(x_n, y_n)^T \to (x, y)^T$, akkor $x_n \to x$ és $y_n \to y$, és felhasználva $f$ és $g$ folytonosságát az előző egyenlőtlenségrendszerből határátmenet után azt kapjuk, hogy

$$\alpha \leq x \leq \beta, \qquad g(x) \leq y \leq f(x).$$

Tehát $(x, y)^T \in A$.

**3.4.5. Definíció.** Az $A \subset \mathbb{R}^p$ ponthalmazt *korlátosnak* nevezzük, ha létezik $r \in (0, \infty)$ úgy, hogy $A \subset K_r(0)$.

**3.4.6. Definíció.** Az $\{a_n\}_{n=0}^{\infty}$ $\mathbb{R}^p$-beli pontsorozat *korlátos*, ha az $A = \{\, a_n \mid n \in \mathbb{N} \,\}$ halmaz korlátos.

A számsorozatok elméletéből ismert kiválasztási tétel átvihető pontsorozatokra is.

**3.4.7. Tétel** (Bolzano–Weierstrass-tétel)**.** *$\mathbb{R}^p$-ben minden korlátos pontsorozatnak van konvergens részsorozata.*


## 3.5. Többváltozós függvények

**3.5.1. Definíció.** Legyen $p, q \in \mathbb{N}^+$. Az $f$ függvény $\mathbb{R}^q$*-ba vezető $p$ változós*, ha $f : \mathbb{R}^p \to \mathbb{R}^q$, azaz $D(f) \subset \mathbb{R}^p$. Ha $q > 1$, akkor $f$-et *vektorfüggvénynek*, $q = 1$ esetén pedig *valós függvénynek* nevezzük.

Rögzített $k \in \{1, \ldots, q\}$ esetén minden $x \in D(f)$-hez rendeljük hozzá az $f(x) \in \mathbb{R}^q$ képpont $k$-adik koordinátáját. Így egy $f_k : \mathbb{R}^p \to \mathbb{R}$ $p$ változós valós függvény keletkezik, amelyet $f$ $k$*-adik koordinátafüggvényének* nevezzük.

A koordinátafüggvények ismeretében $f$ egyértelműen meg van határozva, hiszen

$$f(x) = (f_1(x), \ldots, f_q(x))^T, \qquad \text{ha } x \in D(f).$$

Az $\mathbb{R}^p \to \mathbb{R}^q$ típusú többváltozós függvények fontos osztályát a lineáris leképezések alkotják. Az $L : \mathbb{R}^p \to \mathbb{R}^q$ leképezés *lineáris*, ha $D(L) = \mathbb{R}^p$, továbbá minden $x, y \in \mathbb{R}^p$ és $\lambda \in \mathbb{R}$ esetén

$$L(x + y) = L(x) + L(y),$$
$$L(\lambda x) = \lambda L(x).$$

A lineáris algebrából ismert, hogy bármely $L : \mathbb{R}^p \to \mathbb{R}^q$ lineáris leképezés az

$$L(x) = M_L \cdot x, \qquad x \in \mathbb{R}^p,$$

alakban írható, ahol $M_L$ $q \times p$ típusú valós mátrix. Az $M_L$ mátrixot az $L$ leképezés *(kanonikus bázisokra vonatkozó) mátrixának* nevezzük.

## 3.6. Határérték és folytonosság

Az egyváltozós valós függvények határértékének és folytonosságának definícióját lemásolva kapjuk a többváltozós függvények határértékének, illetve folytonosságának definícióját.

**3.6.1. Definíció.** Legyen $p, q \in \mathbb{N}^+$. Azt mondjuk, hogy a $b \in \mathbb{R}^q$ pont az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény *határértéke* az $a \in \mathbb{R}^p$ pontban, ha $f$ értelmezve van $a$ valamely pontozott környezetében, és bármely olyan $\{x_n\}_{n=0}^{\infty}$ sorozatra, amelyre $x_n \in D(f)$, $x_n \neq a$ minden $n \in \mathbb{N}$-re, és $x_n \to a$, a függvényértékek $\{f(x_n)\}_{n=0}^{\infty}$ sorozata $b$-hez tart. Jelölés: $f(x) \to b$, ha $x \to b$ vagy $\lim_{x\to a} f(x) = b$.

**3.6.2. Definíció.** Azt mondjuk, hogy az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény *folytonos* az $a \in D(f)$ pontban, ha

$$\lim_{x\to a} f(x) = f(a),$$

azaz ha $f$ értelmezve van $a$ valamely környezetében, és bármely olyan $\{x_n\}_{n=0}^{\infty}$ sorozatra, amelyre $x_n \in D(f)$ és $x_n \to a$, a függvényértékek $\{f(x_n)\}_{n=0}^{\infty}$ sorozata $f(a)$-hoz tart.

Most a folytonosságnál általánosabb, az értelmezési tartomány valamely részhalmazára szorítkozva vett folytonosság fogalmát definiáljuk.


**3.6.3. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$, és $a \in A \subset D(f)$. Azt mondjuk, hogy $f$ $A$*-ra szorítkozva folytonos* az $a$ pontban, ha bármely olyan $\{x_n\}_{n=0}^{\infty}$ sorozatra, amelyre $x_n \in A$ és $x_n \to a$, a függvényértékek $\{f(x_n)\}_{n=0}^{\infty}$ sorozata $f(a)$-hoz tart.

Ha $f$ egyváltozós valós függvény ($p = q = 1$) és valamely $a \in D(f)$ és $\delta > 0$ esetén $[a, a + \delta) \subset D(f)$ ($(a - \delta, a] \subset D(f)$), akkor $f$-nek az $[a, a + \delta)$ ($(a - \delta, a]$) halmazra szorítkozva vett folytonossága azt jelenti, hogy $f$ az $a$ helyen jobbról (balról) folytonos.

A következő tétel azt mutatja, hogy egy vektorfüggvény határértékének és folytonosságának vizsgálata során elegendő a koordinátafüggvényeire szorítkozni.

**3.6.4. Tétel.** *Legyen* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *adott függvény,* $x \in D(f)$ *esetén*

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*továbbá* $a \in A \subset D(f)$ *és* $b = (b_1, \ldots, b_q)^T \in \mathbb{R}^q$*. Ekkor*

$$\lim_{x\to a} f(x) = b$$

*pontosan akkor, ha minden* $k \in \{1, \ldots, q\}$ *esetén*

$$\lim_{x\to a} f_k(x) = b_k.$$

*Az $f$ függvény éppen akkor folytonos ($A$-ra szorítkozva) az $a$ pontban, ha minden* $k \in \{1, \ldots, q\}$ *esetén* $f_k$ *($A$-ra szorítkozva) folytonos az $a$ helyen.*

Ha $f : \mathbb{R}^p \to \mathbb{R}^q$ és $x = (x_1, \ldots, x_p)^T \in D(f)$, akkor

$$f((x_1, \ldots, x_p)^T)$$

helyett a kényelmesebb

$$f(x_1, \ldots, x_p)$$

jelölést fogjuk használni. Igazodva az általános szokáshoz az $(x_1, \ldots, x_p)^T \in \mathbb{R}^p$ jelölést is úgy „egyszerűsítjük", hogy a transzponálásra utaló $T$ felső indexet elhagyjuk, azaz oszlopvektor helyett sorvektort írunk. Ugyanakkor hangsúlyozzuk, hogy ha valamely $\mathbb{R}^p$-beli vektor mátrix szorzat tényezőjeként szerepel, akkor mindig oszlopvektorként kell értenünk.

**3.6.5. Példa.** Az

$$f(x, y) = \frac{xy}{x^2 + y^2}, \qquad (x, y) \in \mathbb{R}^2 \setminus \{(0, 0)\}$$

függvénynek a $(0, 0)$ pontban nem létezik határértéke, mert ha olyan $(x_n, y_n)$ pontsorozatot tekintünk, amelynek tagjai mind az $y = x$ egyenesen fekszenek és a $(0, 0)$ ponthoz tartanak, akkor $0 \neq x_n$ esetén

$$f(x_n, x_n) = \frac{x_n^2}{x_n^2 + x_n^2} = \frac{1}{2},$$

ugyanakkor az $x$-tengely mentén $y_n = 0$ folytán

$$f(x_n, 0) = 0$$

adódik.


**3.6.6. Példa.** Az

$$f(x, y) = \sin(2x + y^2), \qquad (x, y) \in \mathbb{R}^2,$$

függvény folytonos minden $(a, b) \in \mathbb{R}^2$ pontban, mert bármely $(a, b)$-hez tartó $(x_n, y_n)$ sorozatra $x_n \to a$, $y_n \to b$, és ezért

$$f(x_n, y_n) = \sin(2x_n + y_n^2) \to \sin(2a + b^2) = f(a, b).$$

Az egyváltozós valós függvények határértékéről és folytonosságáról szóló tételek többsége átvihető többváltozós valós függvényekre is. Így például, ha $f$, $g : \mathbb{R}^p \to \mathbb{R}$ folytonosak az $a \in \mathbb{R}^p$ pontban, akkor ugyanilyen $f + g$, $fg$ is, és $g(a) \neq 0$ esetén ugyanilyen $\frac{f}{g}$ is.

Az egyváltozós valós függvények intervallumon való folytonosságának definíciója speciális esete a következő fogalomnak.

**3.6.7. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$ és $A \subset D(f)$. Azt mondjuk, hogy $f$ *folytonos az $A$ halmazon*, ha $f$ minden $a \in A$ pontban $A$-ra szorítkozva folytonos.

Ha $f : \mathbb{R}^p \to \mathbb{R}^q$ és $U \subset D(f)$ nyílt halmaz, akkor $f$ pontosan akkor folytonos az $U$ halmazon, ha folytonos $U$ minden pontjában.

## 3.7. Differenciálhatóság

Az egyváltozós valós függvények elméletéből ismert differenciálhatóság fogalmának kiterjesztése többváltozós függvényekre a következő:

**3.7.1. Definíció.** Az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvényt *(totálisan) differenciálhatónak* mondjuk az $a \in D(f)$ pontban, ha létezik egy $L : \mathbb{R}^p \to \mathbb{R}^q$ lineáris leképezés úgy, hogy

$$\lim_{x\to a} \frac{f(x) - f(a) - L(x - a)}{\|x - a\|} = 0.$$

Az $L$ lineáris leképezést az $f$ függvény $a$ *pontbeli differenciáljának*, az $L$ leképezés $M_L$ mátrixát pedig $f$ $a$*-beli differenciálhányadosának* vagy *Jacobi-mátrixának* nevezzük. Jelölés: $L = Df(a)$, illetve $M_L = f'(a)$.

Valós $f$ esetén ($q = 1$) az $f'(a)$ Jacobi-mátrix $1 \times p$ típusú, azaz $p$ dimenziós sorvektor. Ebben az esetben az $a$ pontbeli Jacobi-mátrix helyett az $a$ pontbeli *gradiens* vagy *gradiensvektor* elnevezés és az $f'(a) = \operatorname{grad} f(a)$ jelölés is használatos.

Meg lehet mutatni, hogy ha létezik, akkor a differenciál egyértelmű.

**3.7.2. Tétel.** *Bármely $f : \mathbb{R}^p \to \mathbb{R}^q$ függvénynek egy adott $a \in D(f)$ pontban legfeljebb egy differenciálja létezik.*

Egy vektorfüggvény differenciálhatósága ekvivalens a koordinátafüggvényeinek differenciálhatóságával.


**3.7.3. Tétel.** *Legyen* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *adott függvény,* $x \in D(f)$ *esetén*

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*továbbá* $a \in D(f)$*. Az $f$ függvény éppen akkor differenciálható az $a$ pontban, ha minden* $k \in \{1, \ldots, q\}$ *esetén az $f_k : \mathbb{R}^p \to \mathbb{R}$ függvény differenciálható az $a$ pontban, és differenciálhatóság esetén az $f'(a)$ Jacobi-mátrix $k$-adik sorvektora* $f_k'(a)$*,* $k \in \{1, \ldots, q\}$.

A differenciálhatóság és a folytonosság közötti kapcsolat hasonló, mint az egyváltozós valós függvényeknél.

**3.7.4. Tétel.** *Ha $f : \mathbb{R}^p \to \mathbb{R}^q$ differenciálható az $a \in D(f)$ pontban, akkor itt folytonos is.*

Arra, hogy a fordított állítás nem igaz már az egyváltozós valós függvényeknél is utaltunk.

## 3.8. Az irány menti derivált, parciális deriváltak

Ha $a, v \in \mathbb{R}^p$, akkor az $a$ ponton áthaladó $v$ irányvektorú egyenes pontjai az

$$x = a + tv$$

alakban írhatók, ahol $t \in \mathbb{R}$. Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$, $t > 0$ és tegyük fel, hogy $v \in \mathbb{R}^p$ egységvektor, azaz $\|v\| = 1$. Tekintsük $f$ értékét abban a pontban, amely $a$-tól $t$ távolságra fekszik a $v$ által megadott irányban, vagyis az $a + tv$ pontban. Ennek és $f(a)$-nak a különbségét a két pont $t$ távolságával osztva az

$$\frac{f(a + tv) - f(a)}{t}$$

$v$ irány menti különbségi hányados keletkezik.

**3.8.1. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$, $a \in D(f)$ és $v \in \mathbb{R}^p$ adott egységvektor. Azt mondjuk, hogy $f$ *differenciálható az $a$ pontban a $v$ irány mentén*, ha a

$$\lim_{t\to 0} \frac{f(a + tv) - f(a)}{t}$$

határérték létezik ($\mathbb{R}^q$-ban). Ezt a határértéket (ha létezik) a $\partial_{(v)} f(a)$ vagy $D_{(v)} f(a)$ szimbólummal jelöljük, és az $f$ függvény $a$-beli $v$ *irány menti differenciálhányadosának* nevezzük.

A definícióból következik:

**3.8.2. Tétel.** *Legyen* $p, q \in \mathbb{N}^+$*,* $f : \mathbb{R}^p \to \mathbb{R}^q$ *függvény,* $x \in D(f)$ *esetén*

$$f(x) = (f_1(x), \ldots, f_q(x))^T,$$

*továbbá* $a \in D(f)$ *és* $v \in \mathbb{R}^p$ *egy adott egységvektor. Az $f$ függvény éppen akkor differenciálható az $a$ pontban a $v$ irány mentén, ha minden* $k \in \{1, \ldots, q\}$ *esetén $f_k$ differenciálható a $v$ irány mentén, és differenciálhatóság esetén*

$$\partial_{(v)} f(a) = (\partial_{(v)} f_1(a), \ldots, \partial_{(v)} f_q(a))^T.$$


Abban a speciális esetben, amikor $v$ megegyezik a kanonikus bázisvektorok valamelyikével az irány menti differenciálhányadost *parciális differenciálhányadosnak* nevezzük. Részletesebben:

**3.8.3. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$, $a \in D(f)$, $i \in \{1, \ldots p\}$ és $e_i \in \mathbb{R}^p$ az $i$-edik kanonikus bázisvektor. Azt mondjuk, hogy $f$ *parciálisan differenciálható az $a$ pontban az $i$-edik változó szerint*, ha $f$ differenciálható $a$-ban az $e_i$ irány mentén. A $\partial_{(e_i)} f(a) \in \mathbb{R}^q$ irány menti differenciálhányadost (ha létezik) az $f$ függvény $a$-beli $i$*-edik változó szerinti parciális differenciálhányadosának* nevezzük.

**3.8.4. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény és $i \in \{1, \ldots, p\}$. Jelöljük $\partial_i f$-fel azt a függvényt, amelynek értelmezési tartománya $D(f)$ azon $x$ pontjaiból áll, amelyekben $f$ az $i$-edik változó szerint parciálisan differenciálható, és értéke minden ilyen $x$ pontban $f$-nek az $i$-edik változó szerinti parciális differenciálhányadosa. A $\partial_i f$ függvényt az $f$ függvény $i$*-edik változó szerinti parciális deriváltfüggvényének* vagy röviden *parciális deriváltjának* nevezzük.

Ha az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény $i$-edik változóját $x_i$-vel jelöljük, akkor az $i$-edik változó szerinti parciális deriváltat a

$$\frac{\partial f}{\partial x_i}, \qquad f'_{x_i}, \qquad \text{vagy} \qquad f_{x_i}$$

szimólumokkal is jelölhetjük.

Legyen $f : \mathbb{R}^p \to \mathbb{R}$ $p$ változós valós függvény, $a = (a_1, \ldots, a_p) \in \mathbb{R}^p$ és $i \in \{1, \ldots, p\}$. Definiáljuk a $h : \mathbb{R} \to \mathbb{R}$ függvényt a

$$h(s) = f(a_1, \ldots a_{i-1}, s, a_{i+1}, \ldots, a_p)$$

képlettel minden olyan $s \in \mathbb{R}$-re, amelyre $(a_1, \ldots a_{i-1}, s, a_{i+1}, \ldots, a_p) \in D(f)$. Könnyű belátni, hogy $f$ pontosan akkor differenciálható $a$-ban az $i$-edik változó szerint, ha $h$ differenciálható az $a_i \in \mathbb{R}$ helyen, és ekkor

$$\partial_i f(a) = h'(a_i).$$

Ezért a parciális deriváltak kiszámításához használhatjuk az egyváltozós valós függvények differenciálási szabályait. A kétváltozós esetben ($p = 2$) a fenti $h$ függvényt a következő ábrák szemléltetik:

**3.8.5. Példa.** Legyen

$$f(x, y) = x^y, \qquad \text{ha } x \in (0, \infty) \text{ és } y \in \mathbb{R}.$$

Ekkor minden $x \in (0, \infty)$ és $y \in \mathbb{R}$ esetén

$$\frac{\partial f}{\partial x}(x, y) = y x^{y-1}, \qquad \frac{\partial f}{\partial y}(x, y) = x^y \ln x.$$

A differenciálhatóság és az irány menti derivált közötti kapcsolatról szól a következő:


*3.2. ábra.*

**3.8.6. Tétel.** *Tegyük fel, hogy $f : \mathbb{R}^p \to \mathbb{R}^q$ differenciálható az $a \in D(f)$ pontban. Ekkor bármely $v \in \mathbb{R}^p$ egységvektor esetén a $\partial_{(v)} f(a)$ irány menti derivált létezik, mégpedig*

$$\partial_{(v)} f(a) = f'(a) \cdot v.$$

*Speciálisan, minden $i \in \{1, \ldots, p\}$ esetén $f$ az $a$ pontban parciálisan differenciálható az $i$-edik változó szerint, és*

$$\partial_i f(a) = f'(a) \cdot e_i,$$

*az $f'(a)$ Jacobi-mátrix $i$-edik oszlopvektora.*

Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$ egy adott függvény, és $x \in D(f)$ esetén

$$f(x) = (f_1(x), \ldots, f_q(x))^T.$$

Ha $f$ differenciálható az $a \in D(f)$ pontban, akkor a 3.8.2. és 3.8.6. Tétel szerint

$$f'(a) = \bigl(\partial_j f_i(a)\bigr)_{\substack{i=1,\ldots,q \\ j=1,\ldots,p}} = \begin{pmatrix} \partial_1 f_1(a) & \ldots & \partial_p f_1(a) \\ \partial_1 f_2(a) & \ldots & \partial_p f_2(a) \\ \ldots & \ldots & \ldots \\ \ldots & \ldots & \ldots \\ \partial_1 f_q(a) & \ldots & \partial_p f_q(a) \end{pmatrix}.$$

**3.8.7. Példa.** Definiáljuk az $f : \mathbb{R}^2 \to \mathbb{R}$ függvényt az

$$f(x, y) = \begin{cases} 0, & \text{ha } x = 0 \text{ vagy } y = 0, \\ 1, & \text{ha } x \neq 0 \text{ és } y \neq 0 \end{cases}$$

képlettel. Könnyű belátni, hogy

$$\frac{\partial f}{\partial x}(0, 0) = \frac{\partial f}{\partial y}(0, 0) = 0,$$

de $f$ nem folytonos a $(0, 0)$ pontban. Ezért a 3.7.4. Tétel szerint $f$ nem differenciálható a $(0, 0)$ pontban.


Az előző példa azt mutatja, hogy a parciális deriváltak létezéséből még nem következik a függvény differenciálhatósága, sőt folytonossága sem. Ugyanakkor a következő tétel alapján a parciális deriváltak folytonossága, már maga után vonja a differenciálhatóságot.

**3.8.8. Tétel.** *Legyen $f : \mathbb{R}^p \to \mathbb{R}^q$ és $a \in D(f)$. Ha minden $i \in \{1, \ldots, p\}$ esetén a $\partial_i f$ parciális derivált folytonos az $a$ pontban, akkor $f$ differenciálható $a$-ban.*

**3.8.9. Példa.** Legyen

$$f(x, y) = \sin(2x + y^2), \qquad (x, y) \in \mathbb{R}^2.$$

Bármely $(x, y) \in \mathbb{R}^2$ esetén

$$\frac{\partial f}{\partial x}(x, y) = 2 \cos(2x + y^2) \qquad \text{és} \qquad \frac{\partial f}{\partial y}(x, y) = 2y \cos(2x + y^2).$$

A 3.6.6. Példában már beláttuk $f$ folytonosságát. Hasonló módon ellenőrizhető, hogy a $\frac{\partial f}{\partial x}$ és $\frac{\partial f}{\partial y}$ függvények is folytonosak $\mathbb{R}^2$ minden pontjában. Ezért $f$ differenciálható minden $(x, y) \in \mathbb{R}^2$ pontban, és

$$f'(x, y) = (2 \cos(2x + y^2),\ 2y \cos(2x + y^2)).$$

Az $f$ függvény $a = (0, 0)$ pontbeli $v = \left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right)$ irány menti deriváltja

$$\partial_{(v)} f(a) = f'(a) \cdot v = (2, 0) \cdot \left( \frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}} \right)^T = \frac{2}{\sqrt{2}} = \sqrt{2}.$$

Megjegyezzük, hogy egy kétváltozós valós $f$ függvény differenciálhatósága egy $(a, b) \in D(f)$ pontban geometriailag azt jelenti, hogy a $z = f(x, y)$ felülethez annak $(a, b, f(a, b))$ pontjában érintősík illeszthető.

**3.8.10. Definíció.** Tegyük fel, hogy $f : \mathbb{R}^2 \to \mathbb{R}$ differenciálható az $(a, b) \in D(f)$ pontban. Ekkor a

$$z = \partial_1 f(a, b)(x - a) + \partial_2 f(a, b)(y - b) + f(a, b)$$

egyenletű síkot az $f$ függvény $(a, b)$ ponthoz tartozó *érintősíkjának* nevezzük.

## 3.9. A láncszabály

Az összetett függvény differenciálási szabálya vektorfüggvényekre a következő:

**3.9.1. Tétel** (Láncszabály)**.** *Legyen $p, q, r \in \mathbb{N}^+$. Ha $f : \mathbb{R}^p \to \mathbb{R}^q$ differenciálható az $a \in D(f)$ pontban és $g : \mathbb{R}^q \to \mathbb{R}^r$ differenciálható az $f(a)$ pontban, akkor $g \circ f$ is differenciálható az $a$ pontban, és*

$$D(g \circ f) = Dg(f(a)) \circ Df(a),$$


továbbá

$$(g \circ f)'(a) = g'(f(a)) \cdot f'(a),$$

ahol $\cdot$ a mátrix szorzást jelöli, azaz minden $i \in \{1, \ldots, p\}$ és $k \in \{1, \ldots, r\}$ esetén

$$\partial_i (g_k \circ f)(a) = \sum_{j=1}^{q} \partial_j g_k(f(a))\, \partial_i f_j(a),$$

ahol a $g_k$-k és $f_j$-k a $g$, illetve $f$ vektorfüggvény koordinátafüggvényei.

## 3.10. Középértéktétel

Legyen $a, b \in \mathbb{R}^p$, $a \neq b$. Ekkor az $a$ és $b$ pontokat összekötő zárt szakasz pontjai $a + t(b - a)$ alakban írhatók, ahol $t \in [0, 1]$.

**3.10.1. Definíció.** Bármely $a, b \in \mathbb{R}^p$, $a \neq b$, esetén legyen

$$[a, b] = \{\, a + t(b - a) \mid t \in [0, 1] \},$$

és

$$(a, b) = \{\, a + t(b - a) \mid t \in (0, 1) \}.$$

A következő tétel Lagrange tételének általánosítása többváltozós valós függvényekre.

**3.10.2. Tétel.** *Legyen $a, b \in \mathbb{R}^p$, $a \neq b$. Ha $f : \mathbb{R}^p \to \mathbb{R}$ folytonos az $[a, b]$ szakaszon és differenciálható minden $x \in (a, b)$ pontban, akkor létezik $c \in (a, b)$ úgy, hogy*

$$f(b) - f(a) = f'(c) \cdot (b - a) = \sum_{i=1}^{p} \partial_i f(c)(b_i - a_i).$$

## 3.11. Schwarz tétele

**3.11.1. Definíció.** Ha $f : \mathbb{R}^p \to \mathbb{R}^q$ és valamely $i, j \in \{1, \ldots, p\}$ és $a \in D(f)$ esetén a

$$\partial_j(\partial_i f)(a)$$

parciális differenciálhányados létezik, akkor azt a

$$\partial_{ij} f(a)$$

szimbólummal jelöljük. A $\partial_{ij} f$ függvények $f$ *másodrendű parciális deriváltjai*.

Ha az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény változóit rendre az $x_1, \ldots, x_p$ betűkkel jelöljük, akkor $\partial_{ij} f(a)$ helyett a

$$\frac{\partial^2 f}{\partial x_j \partial x_i}(a), \qquad f''_{x_i x_j}(a), \qquad \text{illetve} \qquad f_{x_i x_j}(a)$$


jelölés is használatos. Figyeljük meg, hogy a deriválások sorrendje az indexes jelölésmód esetén balról jobbra, a tört alakú jelölésmód esetén pedig jobbról balra halad. Ha $i = j$, akkor $\frac{\partial^2 f}{\partial x_i \partial x_i}$ helyett a $\frac{\partial^2 f}{\partial x_i^2}$ jelölés használatos.

A $\partial_{ii} f$ alakúakat *tiszta*, a $\partial_{ij} f$ ($i \neq j$) alakúakat pedig *vegyes* másodrendű parciális deriváltaknak szokás nevezni.

Az előző definícióhoz hasonlóan „rekurzióval" definiálhatók a harmadrendű, negyedrendű stb. parciális deriváltak. Az $f : \mathbb{R}^p \to \mathbb{R}^q$ függvény $\partial_i f$ ($i \in \{1, \ldots, p\}$) parciális deriváltjait *elsőrendű parciális deriváltaknak* mondjuk, ha szükség van megkülönböztetésükre a magasabb rendűektől.

A következő tétel azt mutatja, hogy bizonyos feltételek mellett a vegyes parciális deriváltak kiszámításakor a deriválások sorrendje felcserélhető.

**3.11.2. Tétel** (Schwarz tétele)**.** *Legyen $f : \mathbb{R}^2 \to \mathbb{R}$ adott függvény. Tegyük fel, hogy a $\partial_1 f$, $\partial_2 f$ függvények definiálva vannak az $(a, b) \in D(f)$ pont valamely környezetében és a $\partial_{12} f$ függvény folytonos az $(a, b)$ pontban. Ekkor $\partial_{21} f(a, b)$ létezik, és*

$$\partial_{21} f(a, b) = \partial_{12} f(a, b).$$

## 3.12. Abszolút és lokális szélsőértékhelyek

Az egyváltozós valós függvények esetéhez hasonlóan bevezetjük a következő elnevezéseket:

**3.12.1. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}$, $a \in H \subset D(f)$. Azt mondjuk, hogy az $a$ pont $f$-nek $H$*-ra nézve abszolút maximumhelye* (*abszolút minimumhelye*), ha minden $x \in H$ esetén

$$f(x) \leq f(a) \qquad (f(x) \geq f(a)).$$

Az abszolút maximumhely és abszolút minimumhely helyett a *globális maximumhely*, illetve *globális minimumhely* elnevezés is használatos.

A következő tétel Weierstrass tételének kiterjesztése többváltozós függvényekre.

**3.12.2. Tétel.** *Legyen $H$ nemüres, korlátos és zárt részhalmaza $\mathbb{R}^p$-nek. Ha $f : \mathbb{R}^p \to \mathbb{R}$ folytonos a $H$ halmazon, akkor $f$-nek $H$-ra nézve létezik abszolút maximumhelye és abszolút minimumhelye is.*

Most a lokális szélsőértékhelyeket definiáljuk.

**3.12.3. Definíció.** Legyen $f : \mathbb{R}^p \to \mathbb{R}$. Azt mondjuk, hogy az $a \in D(f)$ pont az $f$ függvény *lokális maximumhelye* (*lokális minimumhelye*), ha létezik $\delta > 0$ úgy, hogy $K_\delta(a) \subset D(f)$, és minden $x \in K_\delta(a)$, $x \neq a$, esetén

$$f(x) \leq f(a) \qquad (f(x) \geq f(a)).$$

Ha a $\leq$ ($\geq$) egyenlőtlenséget $<$-re ($>$-ra) cseréljük, akkor a *szigorú lokális maximumhely* (*szigorú lokális minimumhely*) definícióját kapjuk.


Lokális szélsőértékhely létezésére ad szükséges feltételt a következő:

**3.12.4. Tétel.** *Legyen $f : \mathbb{R}^p \to \mathbb{R}$ és $a \in \operatorname{int} D(f)$. Tegyük fel, hogy $a$ az $f$ függvény lokális maximumhelye vagy minimumhelye. Ha valamely $i \in \{1, \ldots, p\}$ esetén $\partial_i f(a)$ létezik, akkor $\partial_i f(a) = 0$. Speciálisan, ha $f$ differenciálható az $a$ pontban, akkor minden $i \in \{1, \ldots, p\}$ esetén $\partial_i f(a) = 0$.*

A tétel megfordítása nem igaz, amint erre már az egyváltozós valós függvényeknél is utaltunk.

**3.12.5. Definíció.** Legyen adva egy $f : \mathbb{R}^p \to \mathbb{R}$ függvény. Az $a \in D(f)$ pontot $f$ *kritikus (stacionárius) pontjának* mondjuk, ha $a \in \operatorname{int} D(f)$ és minden $i \in \{1, \ldots, p\}$ esetén $\partial_i f(a) = 0$.

Az előző tétel szerint egy differenciálható függvénynek csak kritikus pont lehet lokális szélsőértékhelye.

**3.12.6. Példa.** Az

$$f(x, y) = x^3 - y^3 + 3x + y, \qquad (x, y) \in \mathbb{R}^2,$$

függvénynek nincsen maximumhelye, mert minden $(x, y) \in \mathbb{R}^2$ pontban

$$\frac{\partial f}{\partial x}(x, y) = 3(x^2 + 1) > 0.$$

Most keressük $f$ maximumát a

$$H = \{\, (x, y) \in \mathbb{R}^2 \mid 0 \leq x \leq 1,\ 0 \leq y \leq 1 - x \}$$

halmazra nézve. Mivel $H$ korlátos és zárt, $f$ pedig folytonos $H$-n, ezért $f$-nek $H$-ra nézve létezik maximumhelye. A

$$\frac{\partial f}{\partial x}(x, y) = 3(x^2 + 1) > 0, \qquad x \in \mathbb{R},$$

egyenlőtlenségből következik, hogy minden rögzített $y \in [0, 1]$ esetén a $h(x) = f(x, y)$, $x \in \mathbb{R}$, függvény szigorúan monoton növekedő. Ezért

$$\max_{(x,y)\in H} f(x, y) = \max_{x\in[0,1]} f(x, 1 - x).$$

Mivel minden $x \in [0, 1]$ esetén

$$\frac{d}{dx} f(x, 1 - x) = 6x^2 - 6x + 5 = 6\left(x - \frac{1}{2}\right)^2 + \frac{7}{2} > 0,$$

ezért

$$\max_{(x,y)\in H} f(x, y) = f(1, 0) = 4.$$


A következő tétel elegendő feltételt ad arra, hogy egy kétváltozós valós függvénynek egy adott kritikus pontban lokális szélsőértéke legyen.

**3.12.7. Tétel.** *Legyen adva egy $f : \mathbb{R}^2 \to \mathbb{R}$ függvény és $(a, b) \in \operatorname{int} D(f)$. Tegyük fel, hogy $f$ másodrendű parciális deriváltjai folytonosak az $(a, b)$ pontban, továbbá*

$$\partial_1 f(a, b) = \partial_2 f(a, b) = 0.$$

*Ha*

$$\partial_{11} f(a, b)\, \partial_{22} f(a, b) - \bigl[\partial_{12} f(a, b)\bigr]^2 > 0,$$

*akkor $(a, b)$ $f$-nek lokális szélsőértékhelye, mégpedig ha*

$$\partial_{11} f(a, b) > 0,$$

*akkor lokális minimumhelye, ha pedig*

$$\partial_{11} f(a, b) < 0,$$

*akkor lokális maximumhelye.*

*Ha*

$$\partial_{11} f(a, b)\, \partial_{22} f(a, b) - \bigl[\partial_{12} f(a, b)\bigr]^2 < 0,$$

*akkor $(a, b)$ $f$-nek nem lokális szélsőértékhelye.*

**3.12.8. Példa.** Legyen

$$f(x, y) = x^3 + y^3 - 3xy, \qquad \text{ha } (x, y) \in \mathbb{R}^2.$$

Ekkor minden $(x, y) \in \mathbb{R}^2$ esetén

$$\partial_1 f(x, y) = 3x^2 - 3y \qquad \text{és} \qquad \partial_2 f(x, y) = 3y^2 - 3x.$$

Könnyen ellenőrizhető, hogy $f$-nek két kritikus pontja van, $(0, 0)$ és $(1, 1)$. A

$$\partial_{11} f(x, y) = 6x, \qquad \partial_{22} f(x, y) = 6y, \qquad \partial_{12} f(x, y) = -3, \qquad \partial_{21} f(x, y) = -3$$

másodrendű parciális deriváltak folytonosak. Mivel

$$\partial_{11} f(0, 0)\, \partial_{22} f(0, 0) - \bigl[\partial_{12} f(0, 0)\bigr]^2 = -9 < 0,$$

ezért a $(0, 0)$ pont nem lokális szélsőértékhely. Ugyanakkor

$$\partial_{11} f(1, 1)\, \partial_{22} f(1, 1) - \bigl[\partial_{12} f(1, 1)\bigr]^2 = 27 > 0 \qquad \text{és} \qquad \partial_{11} f(1, 1) = 6 > 0$$

folytán az $(1, 1)$ pont $f$ lokális minimumhelye.


# 4. fejezet

# Területi integrál

## 4.1. A terület fogalma

Definiálni szeretnénk síkidomok, azaz $\mathbb{R}^2$ részhalmazainak a területét. A terület fogalmát a téglalapok területére fogjuk visszavezetni. Ezt a célt szolgálják a következő definíciók.

**4.1.1. Definíció.** Legyen $a, b, c, d \in \mathbb{R}$, $a < b$, $c < d$. Az

$$I = [a,b] \times [c,d] \subset \mathbb{R}^2$$

halmazt *(kétdimenziós) intervallumnak* nevezzük (lásd a 4.1. ábra).

*(ábra: 4.1. ábra.)*

Az $I$ intervallum *területe:*

$$t(I) = (b-a)(d-c).$$

**4.1.2. Definíció.** A $H_1, \ldots, H_n$ halmazokat, ahol $n \in \mathbb{N}^+$ és $H_i \subset \mathbb{R}^2$ ($i \in \{1, \ldots, n\}$), *egymásba nem nyúlóknak* mondjuk, ha bármely $i \neq j$ esetén

$$\operatorname{int} H_i \cap \operatorname{int} H_j = \emptyset,$$

azaz $H_i$-nek és $H_j$-nek nincs közös belső pontja.


Most már definiálhatjuk egy korlátos síkbeli halmaz külső és belső területét.

**4.1.3. Definíció.** Legyen $H \subset \mathbb{R}^2$ korlátos halmaz. Legyen $k(H)$ az összes olyan

$$\sum_{j=1}^{n} t(I_j)$$

alakú összegből álló számhalmaz infimuma (alsó határa), ahol $n \in \mathbb{N}^+$, az $I_j \subset \mathbb{R}^2$ halmazok pedig intervallumok ($j = 1, \ldots, n$), amelyek befedik $H$-t (lásd a következő ábra), azaz

$$H \subset \bigcup_{j=1}^{n} I_j.$$

*(ábra: 4.2. ábra.)*

A $k(H)$ számot a $H$ halmaz *külső területének* nevezzük.

A $H$ halmaz *belső területe*, jelben $b(H)$, az összes olyan

$$\sum_{j=1}^{n} t(I_j)$$

alakú összegből álló számhalmaz szuprémuma (alsó határa), ahol $n \in \mathbb{N}^+$, az $I_j \subset \mathbb{R}^2$ halmazok pedig egymásba nem nyúló intervallumok, amelyekre $I_j \subset H$ ($j = 1, \ldots, n$) (lásd a következő ábra), feltéve, hogy $H$ tartalmaz egyáltalán intervallumot. Ha $H$ egyetlen intervallumot sem tartalmaz, legyen $b(H) = 0$.

Nyilvánvaló, hogy az imént definiált $b(H)$ és $k(H)$ számok alsó, illetve felső becslést adnak a $H$ halmaz általunk definiálni kívánt területére. A $H$ halmaz korlátosságát azért kell feltennünk, hogy be lehessen fedni véges számú intervallummal. Ezek után kézenfekvő a következő:

**4.1.4. Definíció.** A $H \subset \mathbb{R}^2$ halmazt *mérhetőnek* mondjuk, ha $H$ korlátos és $b(H) = k(H)$. Ha $H$ mérhető, akkor $H$ *területén* a

$$t(H) = b(H) = k(H)$$

számot értjük.


*(ábra: 4.3. ábra.)*

A területnek ez a fogalma Jordan francia matematikustól származik. A terület fontosabb tulajdonságait foglalják össze a következő tételek.

**4.1.5. Tétel.** Ha $H_1$ és $H_2$ mérhetők, akkor $H_1 \cup H_2$, $H_1 \cap H_2$, $H_1 \setminus H_2$ is mérhető.

**4.1.6. Tétel.** Ha a $H_1, \ldots, H_n$ halmazok mérhetők és egymásba nem nyúlók, továbbá

$$H = \bigcup_{j=1}^{n} H_j,$$

akkor $H$ is mérhető, és

$$t(H) = \sum_{j=1}^{n} t(H_j).$$

**4.1.7. Tétel.** Egy $H \subset \mathbb{R}^2$ halmazra a következő állítások egyenértékűek:

(i) $t(H) = 0$,

(ii) $k(H) = 0$,

(iii) bármely $\varepsilon > 0$ esetén léteznek $I_1, \ldots, I_n$ intervallumok úgy, hogy

$$H \subset \bigcup_{j=1}^{n} I_j \qquad \text{és} \qquad \sum_{j=1}^{n} t(I_j) < \varepsilon.$$

**4.1.8. Tétel.** A $H \subset \mathbb{R}^2$ halmaz pontosan akkor mérhető, ha korlátos és határa nulla területű.

A síkban bevezetett területfogalom mintájára bevezethetnénk a háromdimenziós térben vagy általánosabban az $\mathbb{R}^p$ térben a *Jordan-féle térfogat* fogalmát. Nyilvánvaló, hogy $\mathbb{R}^p$-ben a $p$-dimenziós

$$I = [a_1, b_1] \times [a_2, b_2] \cdots \times [a_p, b_p]$$

intervallumok

$$t(I) = (b_1 - a_1)(b_2 - a_2) \cdots (b_p - a_p)$$

térfogatából kellene kiindulnunk.


## 4.2. A területi integrál fogalma

Legyen adva egy mérhető és zárt $H \subset \mathbb{R}^2$ halmaz és egy $H$-n folytonos nemnegatív $f : H \to [0, \infty)$ függvény. Kiszámítandó annak a testnek a $V$ térfogata, amelyet felülről a $z = f(x,y)$ felületnek $H$ feletti része, alulról pedig az $xy$-síkbeli $H$ halmaz határol (lásd a 4.4. ábra).

*(ábra: 4.4. ábra.)*

Az egyváltozós Riemann-integrál mintájára az alábbi fogalmak segítségével alsó és felső becslést adhatunk a kiszámítandó test térfogatára.

**4.2.1. Definíció.** Legyen $H \subset \mathbb{R}^2$ mérhető. A $H$ halmaz $\Phi$ *felosztásán* olyan egymásba nem nyúló, nemüres mérhető $H_1, \ldots, H_n$ halmazok (véges) sorozatát értjük, amelyekre

$$\bigcup_{j=1}^{n} H_j = H.$$

Jelölés: $\Phi = \{H_1, \ldots, H_n\}$.

**4.2.2. Definíció.** Legyen adva egy $H \subset \mathbb{R}^2$ mérhető halmaz és egy $f$ korlátos valós függvény a $H$ halmazon. Ha $\Phi = \{H_1, \ldots, H_n\}$ a $H$ halmaz egy felosztása, akkor $f$ korlátossága miatt minden $i \in \{1, \ldots, n\}$ esetén az

$$m_i = \inf f(H_i), \qquad M_i = \sup f(H_i)$$

számok végesek. Az

$$s_\Phi = \sum_{i=1}^{n} m_i\, t(H_i)$$

összeget az $f$ függvény $\Phi$ felosztáshoz tartozó *(Darboux-féle) alsó összegének*, a

$$S_\Phi = \sum_{i=1}^{n} M_i\, t(H_i)$$

összeget pedig az $f$ függvény $\Phi$ felosztáshoz tartozó *(Darboux-féle) felső összegének* nevezzük.


Nyilvánvaló, hogy ha $f$ korlátos a mérhető $H$ halmazon, akkor $H$ bármely $\Phi$ felosztására

$$t(H)\inf f(H) \leq s_\Phi \leq S_\Phi \leq t(H)\sup f(H).$$

**4.2.3. Definíció.** Bármely a $H \subset \mathbb{R}^2$ mérhető halmazon definiált korlátos $f$ függvény esetén legyen

$$I_A = \sup\{\, s_\Phi \mid \Phi \text{ a } H \text{ halmaz felosztása} \,\}$$

és

$$I_F = \inf\{\, S_\Phi \mid \Phi \text{ az } H \text{ halmaz felosztása} \,\}.$$

Az $I_A$ számot $f$ $H$-n vett *(Darboux-féle) alsó integráljának*, az $I_F$ számot pedig $f$ $H$-n vett *(Darboux-féle) felső integráljának* nevezzük.

Ha $V$ annak a testnek a térfogata, amelyre a szakasz elején utaltunk, akkor $H$ bármely $\Phi$ felosztására

$$s_\Phi \leq V \leq S_\Phi,$$

és ezért

$$I_A \leq V \leq I_F.$$

**4.2.4. Definíció.** Legyen $H \subset \mathbb{R}^2$ mérhető. A $H$-n definiált $f$ függvényt *integrálhatónak* mondjuk, ha $f$ korlátos és $I_A = I_F$. Ha $f$ integrálható $H$-n, akkor az

$$I = I_A = I_F$$

közös értéket $f$ $H$-n vett *(Riemann-féle) területi integráljának* nevezzük. Jele:

$$I = \iint_H f(x,y)\,dx\,dy \qquad \text{vagy csak} \qquad \iint_H f.$$

## 4.3. A területi integrál tulajdonságai

**4.3.1. Tétel** (Egzisztencia tétel). Ha $H \subset \mathbb{R}^2$ mérhető és zárt, $f$ pedig folytonos $H$-n, akkor $f$ integrálható is.

A tételből és a 4.2.4. Definíció előtti megjegyzésből adódik a területi integrál geometriai jelentése: ha $H \subset \mathbb{R}^2$ mérhető és zárt, $f$ pedig egy a $H$-n folytonos nemnegatív függvény, akkor $\iint_H f$ annak a testnek a térfogata, amelyet felülről a $z = f(x,y)$ felület $H$ feletti része alulról pedig az $xy$-síkbeli $H$ halmaz határol.

A területi integrál fontosabb tulajdonságait írják le a következő tételek.

**4.3.2. Tétel.** Ha $f$ integrálható a mérhető $H$-n, és $G \subset H$ mérhető, akkor $f$ integrálható $G$-n is.

**4.3.3. Tétel.** Ha $f$ integrálható az egymásba nem nyúló, mérhető $H_i$ ($i = 1, \ldots, n$) halmazok mindegyikén, akkor integrálható a

$$H = \bigcup_{i=1}^{n} H_i$$


halmazon is, és

$$\iint_H f = \sum_{i=1}^{n} \iint_{H_i} f.$$

**4.3.4. Tétel.** Ha $f$ és $g$ integrálható a mérhető $H$ halmazon, $c \in \mathbb{R}$, akkor $cf$ és $f + g$ is integrálható $H$-n, és

$$\iint_H (cf) = c \iint_H f,$$
$$\iint_H (f + g) = \iint_H f + \iint_H g.$$

**4.3.5. Tétel.** Ha $f$ és $g$ integrálható a mérhető $H$ halmazon, és $f \leq g$ $H$-n, akkor

$$\iint_H f \leq \iint_H g.$$

**4.3.6. Tétel.** Ha $f$ integrálható a mérhető $H$ halmazon, akkor $|f|$ is integrálható $H$-n, és

$$\left| \iint_H f \right| \leq \iint_H |f|.$$

## 4.4. A területi integrál kiszámítása

Most olyan tételeket ismertetünk, amelyek lehetővé teszik a területi integrál kiszámítását egyváltozós Riemann-integrálokkal. Először nézzük az intervallumon való integrálást.

**4.4.1. Tétel.** Legyen $f$ integrálható az

$$I = [a,b] \times [c,d] \subset \mathbb{R}^2$$

intervallumon, és tegyük fel, hogy minden $x \in [a,b]$ esetén létezik az ($x$-től függő)

$$g(x) = \int_c^d f(x,y)\,dy$$

integrál. Ekkor $g$ integrálható $[a,b]$-n, és

$$\iint_I f = \int_a^b g(x)\,dx,$$

avagy

$$\iint_I f(x,y)\,dx\,dy = \int_a^b \left( \int_c^d f(x,y)\,dy \right) dx.$$

A 4.4.1. Tétel feltételei teljesülnek, ha például $f$ folytonos az $I$ intervallumon.

Természetesen $x$ és $y$ szerepe felcserélhető, azaz ha $f$ integrálható $I$-n, és minden rögzített $y \in [c,d]$ esetén létezik a

$$h(y) = \int_a^b f(x,y)\,dx$$


integrál, akkor $h$ integrálható $[c,d]$-n, és

$$\iint_I f = \int_c^d h(y)\,dy = \int_c^d \left( \int_a^b f(x,y)\,dx \right) dy.$$

Az utolsó „kétszeres integrálnál" a zárójelet néha el is szokták hagyni. Hangsúlyozzuk, hogy ilyenkor az integrálás mindig belülről halad kifelé.

A területi integrálnak kétszeres integrállá való átalakítása alkalmazható az intervallumoknál általánosabb síkidomokon is. Vezessük be a következő elnevezést:

**4.4.2. Definíció.** Legyen $\varphi$ és $\psi$ az $[a,b] \subset \mathbb{R}$ intervallumon definiált folytonos valós függvény, és $\varphi \leq \psi$ az $[a,b]$-n. Ekkor az

$$N = \{(x,y) \in \mathbb{R}^2 \mid a \leq x \leq b,\ \varphi(x) \leq y \leq \psi(x)\}$$

halmazt $y$-ra nézve *normáltartománynak* nevezzük (lásd a következő ábra).

*(ábra: 4.5. ábra.)*

Hasonlóan az

$$M = \{(x,y) \in \mathbb{R}^2 \mid a \leq y \leq b,\ \varphi(y) \leq x \leq \psi(y)\}$$

alakú halmazok neve $x$-re nézve *normáltartomány* (lásd a következő ábra).

Meg lehet mutatni, hogy:

**4.4.3. Tétel.** Bármely normáltartomány korlátos, zárt és mérhető, továbbá ha $f$ integrálható az előző definícióban szereplő $N$ normáltartományon, akkor

$$\iint_N f(x,y)\,dx\,dy = \int_a^b \left( \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy \right) dx,$$

feltéve, hogy a jobb oldali belső integrál minden $x \in [a,b]$-re létezik.

Hasonlóképpen, ha $f$ integrálható az $M$ normáltartományon, akkor

$$\iint_M f(x,y)\,dx\,dy = \int_a^b \left( \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx \right) dy,$$

feltéve, hogy a jobb oldali belső integrál minden $y \in [a,b]$-re létezik.


*(ábra: 4.6. ábra.)*

Megjegyezzük, hogy ha $f$ folytonos az $N$, illetve $M$ normáltartományon, akkor a 4.4.3. Tétel feltételei teljesülnek.

Az

$$\int_a^b \left( \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy \right) dx \qquad \text{és} \qquad \int_a^b \left( \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx \right) dy$$

kétszeres integrálokat szokták az

$$\int_a^b dx \int_{\varphi(x)}^{\psi(x)} f(x,y)\,dy, \qquad \text{illetve} \qquad \int_a^b dy \int_{\varphi(y)}^{\psi(y)} f(x,y)\,dx$$

alakban is írni.

**4.4.4. Példa.** Legyen $H \subset \mathbb{R}^2$ az a korlátos halmaz, amelyet az $y = x$, $y = 0$, $x = 1$ és $x = 2$ egyenesek határolnak, és számítsuk ki a

$$\iint_H e^{\frac{y}{x}}\,dx\,dy$$

területi integrált!

*(ábra: 4.7. ábra.)*


Nyilván

$$H = \{(x,y) \in \mathbb{R}^2 \mid 1 \leq x \leq 2,\ 0 \leq y \leq x\}$$

(lásd a 4.7. ábra).

Mivel $H$ normáltartomány $y$-ra nézve és az integrandus folytonos $H$-n, ezért

$$\iint_H e^{\frac{y}{x}}\,dx\,dy = \int_1^2 \left( \int_0^x e^{\frac{y}{x}}\,dy \right) dx = \int_1^2 \left[ x e^{\frac{y}{x}} \right]_{y=0}^{x} dx$$
$$= \int_1^2 x(e - 1)\,dx = \left[ (e-1)\frac{x^2}{2} \right]_1^2 = \frac{3(e-1)}{2}.$$


# 5. fejezet

# Differenciálegyenletek

## 5.1. Elsőrendű lineáris differenciálegyenlet

Közönséges (skaláris) *differenciálegyenlet* alatt olyan függvényegyenletet értünk, amelyben az ismeretlen egyváltozós valós $y$ függvénynek a deriváltjai is szerepelnek. Egy $n$-ed rendű differenciálegyenletet szimbolikusan az

$$F(x, y, y', \dots, y^{(n)}) = 0$$

képlettel írhatunk le, ahol $F : \mathbb{R}^{n+2} \to \mathbb{R}$ adott függvény. Az $y$ függvény akkor *megoldása* a differenciálegyenletnek valamely $I \subset \mathbb{R}$ intervallumon, ha $y$ differenciálható $I$-n, és minden $x \in I$-re

$$F(x, y(x), y'(x), \dots, y^{(n)}(x)) = 0.$$

(A deriváltak alatt az $I$-re vonatkozó deriváltakat kell érteni, tehát zárt intervallum esetén a végpontokban a megfelelő féloldali deriváltakat.) Ebben a fejezetben a skaláris differenciálegyenletek néhány típusának a megoldását fogjuk vizsgálni. Először tekintsük az

$$y' + p(x)y = q(x)$$

*elsőrendű lineáris differenciálegyenletet*, ahol $p$ és $q$ az $(\alpha, \beta) \subset \mathbb{R}$ intervallumon értelmezett folytonos valós függvény. Ha $q$ azonosan nulla $(\alpha, \beta)$-n, akkor az egyenletet *homogénnek*, különben pedig *inhomogénnek* nevezzük.

Tegyük fel, hogy $y$ megoldása a differenciálegyenletnek az $(\alpha, \beta)$ intervallumon, azaz

$$y'(x) + p(x)y(x) = q(x),$$

minden $x \in (\alpha, \beta)$-ra. Legyen $P$ primitív függvénye $p$-nek $(\alpha, \beta)$-n. Az utolsó egyenletet $e^{P(x)}$-szel szorozva azt kapjuk, hogy minden $x \in (\alpha, \beta)$ esetén

$$y'(x)e^{P(x)} + p(x)y(x)e^{P(x)} = q(x)e^{P(x)}.$$

Ez ekvivalens az

$$\left(y(x)e^{P(x)}\right)' = q(x)e^{P(x)},$$


$$y(x)e^{P(x)} = \int q(x)e^{P(x)}\,dx,$$

és

$$y(x) = e^{-P(x)} \int q(x)e^{P(x)}\,dx, \qquad x \in (\alpha, \beta)$$

egyenletekkel. Tehát igaz a következő:

**5.1.1. Tétel.** *Legyen $p$ és $q$ az $(\alpha, \beta)$-n folytonos függvény. Ha $P$ és $G$ primitív függvénye $p$-nek, illetve $q \cdot (\exp \circ P)$-nek $(\alpha, \beta)$-n, akkor $y$ pontosan akkor megoldása az*

$$y' + p(x)y = q(x)$$

*egyenletnek az $(\alpha, \beta)$ intervallumon, ha valamely $c \in \mathbb{R}$ esetén*

$$y(x) = e^{-P(x)}\bigl(G(x) + c\bigr),$$

*minden $x \in (\alpha, \beta)$-ra.*

A megoldások alakjából látszik, hogy ha előírjuk az

$$y(x_0) = y_0$$

*kezdeti feltételt*, ahol $x_0 \in (\alpha, \beta)$ és $y_0 \in \mathbb{R}$, akkor ennek pontosan egy megoldás tesz eleget.

**5.1.2. Példa.** Keressük az

$$y' + 3y = x, \qquad y(0) = 1$$

kezdetiérték-feladat megoldását!

Az előző tétel szerint

$$y(x) = e^{-3x} \int x e^{3x}\,dx, \qquad x \in (-\infty, \infty).$$

Parciális integrálással kapjuk, hogy

$$\int x e^{3x}\,dx = \int x \left(\frac{e^{3x}}{3}\right)'\,dx = x\frac{e^{3x}}{3} - \int \frac{e^{3x}}{3}\,dx = \frac{xe^{3x}}{3} - \frac{e^{3x}}{9} + c.$$

Ezért

$$y(x) = \frac{x}{3} - \frac{1}{9} + ce^{-3x}.$$

Figyelembe véve az $y(0) = 1$ kezdeti feltételt, azt kapjuk, hogy

$$1 = y(0) = -\frac{1}{9} + c,$$

és innen $c = \dfrac{10}{9}$. Tehát a kezdetiérték-feladat megoldása

$$y(x) = \frac{x}{3} - \frac{1}{9} + \frac{10}{9}e^{-3x}, \qquad x \in (-\infty, \infty).$$


## 5.2. Szeparábilis differenciálegyenlet

*Szeparábilis differenciálegyenletnek* az

$$y' = g(x)h(y)$$

alakú differenciálegyenletet nevezzük, ahol $g : (\alpha, \beta) \to \mathbb{R}$ és $h : (\gamma, \delta) \to \mathbb{R} \setminus \{0\}$ folytonos függvények, $(\alpha, \beta)$ és $(\gamma, \delta) \subset \mathbb{R}$ intervallumok.

Tegyük fel, hogy $y$ megoldása a differenciálegyenletnek valamely $(a, b) \subset (\alpha, \beta)$ intervallumon, azaz minden $x \in (a, b)$-re

$$y'(x) = g(x)h(y(x)).$$

Azt kapjuk, hogy minden $x \in (a, b)$-re

$$\frac{y'(x)}{h(y(x))} - g(x) = 0,$$

amely ekvivalens az

$$\bigl(F(y(x)) - G(x)\bigr)' = 0$$

feltétellel, ahol $F$ primitív függvénye $\dfrac{1}{h}$-nak a $(\gamma, \delta)$-n, $G$ pedig primitív függvénye $g$-nek az $(\alpha, \beta)$-n. Ez pontosan akkor teljesül, ha létezik $c \in \mathbb{R}$ úgy, hogy

$$F(y(x)) = G(x) + c,$$

minden $x \in (a, b)$-re. Tehát igaz a következő:

**5.2.1. Tétel.** *Legyenek $g : (\alpha, \beta) \to \mathbb{R}$ és $h : (\gamma, \delta) \to \mathbb{R} \setminus \{0\}$ adott folytonos függvények. Legyen $F$ primitív függvénye $\dfrac{1}{h}$-nak $(\gamma, \delta)$-n és $G$ primitív függvénye $g$-nek $(\alpha, \beta)$-n. Ekkor egy $y$ függvény pontosan akkor megoldása az*

$$y' = g(x)h(y)$$

*egyenletnek valamely $(a, b) \subset (\alpha, \beta)$ intervallumon, ha létezik $c \in \mathbb{R}$ úgy, hogy minden $x \in (a, b)$-re*

$$F(y(x)) = G(x) + c.$$

Megjegyezzük, hogy a lineáris differenciálegyenletekkel ellentétben a szeparábilis differenciálegyenlet megoldásai általában nincsenek értelmezve a teljes $(\alpha, \beta)$ intervallumon.

**5.2.2. Példa.** Keressük az

$$y' = y^2, \qquad y(0) = 1,$$

kezdetiérték-feladat megoldását. Mivel $y(0) > 0$ és $y$-nak nem lehet zérushelye, ezért $y > 0$ mindenütt, ahol értelmezve van. A tétel jelöléseivel

$$g(x) = 1, \qquad (\alpha, \beta) = (-\infty, \infty),$$
$$h(x) = x^2, \qquad (\gamma, \delta) = (0, \infty),$$


ezért a tétel szerint létezik $c \in \mathbb{R}$ úgy, hogy

$$-\frac{1}{y(x)} = x + c.$$

Figyelembe véve az $y(0) = 1$ feltételt azt kapjuk, hogy $c = -1$, és így

$$y(x) = \frac{1}{1 - x}.$$

A megoldás csak a $(-\infty, 1)$ intervallumon van értelmezve.

## 5.3. Másodrendű lineáris homogén egyenlet

Legyen $a, b \in \mathbb{R}$. Az

$$y'' + ay' + by = 0$$

egyenletet *másodrendű állandó együtthatós lineáris homogén differenciálegyenletnek* nevezzük. A megoldását az $y(x) = e^{\lambda x}$, $x \in (-\infty, \infty)$, alakban keressük, akkor a

$$\lambda^2 + a\lambda + b = 0$$

*karakterisztikus egyenlethez* jutunk. A következő tétel megadja a karakterisztikus gyökökről függően az egyenlet megoldásait.

**5.3.1. Tétel.** *Legyen $a, b \in \mathbb{R}$. Legyenek a*

$$\lambda^2 + a\lambda + b = 0$$

*egyenlet gyökei $\lambda_1$ és $\lambda_2$.*

*(i) Ha $\lambda_1, \lambda_2 \in \mathbb{R}$, $\lambda_1 \neq \lambda_2$, akkor az egyenlet minden megoldása*

$$y(x) = c_1 e^{\lambda_1 x} + c_2 e^{\lambda_2 x}$$

*alakú, ahol $c_1, c_2 \in \mathbb{R}$.*

*(ii) Ha $\lambda_1 = \lambda_2 = \lambda \in \mathbb{R}$, akkor az egyenlet minden megoldása*

$$y(x) = c_1 e^{\lambda x} + c_2 x e^{\lambda x}$$

*alakú, ahol $c_1, c_2 \in \mathbb{R}$.*

*(iii) Ha $\lambda_1$ és $\lambda_2$ komplex, azaz $\lambda_1 = \alpha + i\beta$, $\lambda_2 = \alpha - i\beta$, ($\alpha, \beta \in \mathbb{R}$), akkor az egyenlet minden megoldása*

$$y(x) = c_1 e^{\alpha x}\cos(\beta x) + c_2 e^{\alpha x}\sin(\beta x)$$

*alakú, ahol $c_1, c_2 \in \mathbb{R}$.*

A tételben szereplő megoldások a teljes számegyenesen értelmezve vannak.


**5.3.2. Példa.** Keressük az

$$y'' + 3y' + 2y = 0$$

egyenlet megoldásait. Mivel a

$$\lambda^2 + 3\lambda + 2 = 0$$

karakterisztikus egyenlet gyökei $\lambda_1 = -2$ és $\lambda_2 = -1$, ezért a tétel szerint minden megoldás

$$y(x) = c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

alakú, ahol $c_1, c_2 \in \mathbb{R}$.

## 5.4. Másodrendű lineáris inhomogén egyenlet

Most tekintsük az

$$y'' + ay' + by = f(x),$$

*inhomogén egyenletet*, ahol $a, b \in \mathbb{R}$, $f$ pedig egy $(\alpha, \beta) \subset \mathbb{R}$ intervallumon folytonos függvény. Az inhomogén és a hozzá tartozó homogén egyenlet megoldásai a következő kapcsolatban vannak:

**5.4.1. Tétel.** *Legyen $a, b \in \mathbb{R}$ és $f$ az $(\alpha, \beta)$-n folytonos függvény. Ha $y_P$ az*

$$y'' + ay' + by = f(x)$$

*egyenlet megoldása $(\alpha, \beta)$-n, akkor az inhomogén egyenlet bármely más $y$ megoldása $(\alpha, \beta)$-n az*

$$y = y_P + y_H$$

*alakban írható, ahol $y_H$ az*

$$y'' + ay' + by = 0$$

*homogén egyenlet megoldása.*

Mivel a homogén egyenlet megoldásait ismerjük, a tétel szerint ahhoz, hogy felírjuk az inhomogén egyenlet összes megoldását elég ismerni az inhomogén egyenlet egyetlen konkrét megoldását, amelyet *partikuláris megoldásnak* is szokás nevezni. A következő tétel speciális alakú jobb oldal esetén megadja a partikuláris megoldás lehetséges alakját.

**5.4.2. Tétel.** *Tekintsük az*

$$y'' + ay' + by = p(x)\, e^{\mu x}\cos(\nu x)$$

*inhomogén egyenletet, ahol $a, b, \mu, \nu \in \mathbb{R}$, $p : \mathbb{R} \to \mathbb{R}$ pedig polinom. Legyenek $\lambda_1$ és $\lambda_2$ a homogén egyenlet*

$$\lambda^2 + a\lambda + b = 0$$


*karakterisztikus egyenletének gyökei. Legyen $\lambda^* = \mu + i\nu$, és definiáljuk az $s$ számot az*

$$s = \begin{cases} 0, & \text{ha } \lambda^* \neq \lambda_1 \text{ és } \lambda^* \neq \lambda_2 \\ 1, & \text{ha } \lambda^* = \lambda_1 \neq \lambda_2 \text{ vagy } \lambda^* = \lambda_2 \neq \lambda_1 \\ 2, & \text{ha } \lambda^* = \lambda_1 = \lambda_2 \end{cases}$$

*képlettel. Ekkor az inhomogén egyenletnek létezik*

$$y_P(x) = x^s\bigl(q_1(x)\, e^{\mu x}\cos(\nu x) + q_2(x)\, e^{\mu x}\sin(\nu x)\bigr)$$

*alakú megoldása, ahol $q_1$ és $q_2$ ugyanolyan fokú polinom, mint $p$.*

Az állítás akkor is igaz, ha az inhomogén egyenlet jobb oldalán $\cos(\nu x)$-et $\sin(\nu x)$-re cseréljük.

**5.4.3. Példa.** Keressük az

$$y'' + 3y' + 2y = \cos(2x)$$

egyenlet megoldásait. Az

$$y'' + 3y' + 2y = 0$$

homogén egyenlet karakterisztikus egyenletének gyökei $\lambda_1 = -2$ és $\lambda_2 = -1$. A tétel jelöléseivel $p(x) = 1$, $\mu = 0$ és $\nu = 2$. Ezért $\lambda^* = 2i$ és $s = 0$. A tétel szerint az

$$y'' + 3y' + 2y = \cos(2x)$$

egyenletnek létezik

$$y_P(x) = A\cos(2x) + B\sin(2x)$$

alakú megoldása, ahol $A, B \in \mathbb{R}$. Deriválással kapjuk, hogy

$$y_P'(x) = -2A\sin(2x) + 2B\cos(2x),$$

és

$$y_P''(x) = -4A\cos(2x) - 4B\sin(2x).$$

Behelyettesítve $y_P$, $y_P'$ és $y_P''$ képleteit az inhomogén egyenletbe azt kapjuk, hogy

$$(-2A + 6B)\cos(2x) - (6A + 2B)\sin(2x) = \cos(2x), \qquad x \in \mathbb{R}.$$

Innen

$$-2A + 6B = 1,$$
$$6A + 2B = 0.$$

Az egyenletrendszer megoldása

$$A = -\frac{1}{20}, \qquad B = \frac{3}{20}.$$

Tehát

$$y_P(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x).$$


Ezt az 5.3. Példa eredményével kombinálva kapjuk, hogy az inhomogén egyenlet összes megoldása

$$y(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

alakú, ahol $c_1, c_2 \in \mathbb{R}$.

A következő tétel segítségével jelentősen kibővíthetjük azoknak az egyenleteknek a körét, amelyeket a „próbafüggvény módszerével" megoldhatunk.

**5.4.4. Tétel** (A szuperpozíció elve). *Legyen $a, b \in \mathbb{R}$, $f_1, f_2$ pedig egy $(\alpha, \beta)$ intervallumon folytonos függvény. Ha $y_1$ és $y_2$ megoldása $(\alpha, \beta)$-n az*

$$y'' + ay' + by = f_1(x),$$

*illetve az*

$$y'' + ay' + by = f_2(x)$$

*egyenletnek, akkor $y_1 + y_2$ megoldása $(\alpha, \beta)$-n az*

$$y'' + ay' + by = f_1(x) + f_2(x)$$

*egyenletnek.*

**5.4.5. Példa.** Az előző tétel szerint az

$$y'' + 3y' + 2y = \cos(2x) + 1$$

egyenlet partikuláris megoldása az

$$y'' + 3y' + 2y = \cos(2x)$$

és

$$y'' + 3y' + 2y = 1$$

egyenlet $y_1$, illetve $y_2$ partikuláris megoldásainak az összege. Az 5.4.3. Példában már beláttuk, hogy

$$y_1(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x), \qquad (-\infty, \infty),$$

és hasonló számolással kapjuk, hogy

$$y_2(x) = \frac{1}{2}, \qquad x \in (-\infty, \infty).$$

Tehát az

$$y'' + 3y' + 2y = \cos(2x) + 1$$

egyenlet partikuláris megoldása

$$y_P(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + \frac{1}{2}, \qquad x \in (-\infty, \infty).$$


Mivel az

$$y'' + 3y' + 2y = 0$$

homogén egyenlet megoldásai

$$y_H(x) = c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

alakúak, ahol $c_1, c_2 \in \mathbb{R}$, az 5.4.1. Tétel szerint az

$$y'' + 3y' + 2y = \cos(2x) + 1$$

egyenlet minden megoldása

$$y(x) = -\frac{1}{20}\cos(2x) + \frac{3}{20}\sin(2x) + \frac{1}{2} + c_1 e^{-2x} + c_2 e^{-x}, \qquad x \in (-\infty, \infty),$$

alakú, ahol $c_1, c_2 \in \mathbb{R}$.

