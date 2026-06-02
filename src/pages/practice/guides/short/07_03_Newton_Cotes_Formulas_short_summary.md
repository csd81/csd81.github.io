**7.3. Newton–Cotes-formulák** 




## 1. Bevezetés és a Lagrange-módszer alapelve

A határozott integrál matematikai definíciója szerint egy függvény alatti terület a Riemann-féle közelítő összegek határértékeként kapható meg, ahogy a felosztás lépésköze nullához tart.

A numerikus integrálás (más néven **kvadratúra-eljárások**) célja az $\int_a^b f(x)\,dx$ integrál közelítése diszkrét pontokban felvett függvényértékek súlyozott összegeként:


$$\int_a^b f(x)\,dx \approx \sum_{i=0}^n c_i f(x_i)$$

A Newton–Cotes-formulák levezetéséhez a **Lagrange-módszert** alkalmazzuk: az $[a,b]$ intervallumot felosztjuk ekvidisztáns (egyenlő távolságú) $x_0, x_1, \dots, x_n$ alappontokra, ahol a lépésköz $h = \frac{b-a}{n}$. Az $f(x)$ függvényt helyettesítjük az ezekre a pontokra illesztett $L_n(x)$ Lagrange-féle interpolációs polinommal, majd ezt a polinomot pontosan (analitikusan) integráljuk:


$$\int_a^b f(x)\,dx \approx \int_a^b L_n(x)\,dx = \sum_{k=0}^n f(x_k) \underbrace{\int_a^b l_k(x)\,dx}_{c_k}$$


Az így kapott $c_k$ integrálokat a kvadratúra-képlet **súlyainak** nevezzük.



## 2. Zárt Newton–Cotes-formulák

A zárt formulák esetén az intervallum két végpontja ($a$ és $b$) is szigorúan az alappontok közé tartozik (azaz $x_0 = a$ és $x_n = b$).

### A) Trapézformula (Trapezoidal Rule) — $n=1$

Ha mindössze két alappontunk van ($x_0=a$ és $x_1=b$), az interpolációs polinom egyenes lineáris összekötés (elsőfokú polinom). Geometriailag a területet egy trapézzal közelítjük.

* **A formula:** 
$$\int_{x_0}^{x_1} f(x)\,dx = \frac{h}{2}\big(f(x_0) + f(x_1)\big) - \frac{h^3}{12}f''(\xi)$$


* **Képlethiba:** $-\frac{h^3}{12}f''(\xi) \sim \mathcal{O}(h^3)$. A képlet pontos minden olyan polinomra, amelynek fokszáma legfeljebb 1 (lineáris függvények).

### B) Simpson-formula (Simpson's Rule) — $n=2$

Három ekvidisztáns alappontot választunk: $x_0=a$, $x_1 = \frac{a+b}{2}$ (középpont) és $x_2=b$. Az interpolációs polinom egy másodfokú parabola.

* **A formula:**

$$\int_{x_0}^{x_2} f(x)\,dx = \frac{h}{3}\big(f(x_0) + 4f(x_1) + f(x_2)\big) - \frac{h^5}{90}f^{(4)}(\xi)$$


* **Képlethiba:** $-\frac{h^5}{90}f^{(4)}(\xi) \sim \mathcal{O}(h^5)$.
* **Érdekesség:** Bár a levezetés másodfokú polinomra történt, a hiba a negyedik deriválttól függ ($f^{(4)}$), ami azt jelenti, hogy a Simpson-módszer **minden harmadfokú polinomot is teljesen pontosan integrál**.

### Magasabb rendű zárt formulák (levezetés nélkül)

* **Simpson $\frac{3}{8}$-ados formula ($n=3$):** 
$$\int_{x_0}^{x_3} f(x)\,dx = \frac{3h}{8}\bigl(f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\bigr) - \frac{3h^5}{80}f^{(4)}(\xi)$$


* **Milne-képlet ($n=4$):**

$$\int_{x_0}^{x_4} f(x)\,dx = \frac{2h}{45}\bigl(7f(x_0) + 32f(x_1) + 12f(x_2) + 32f(x_3) + 7f(x_4)\bigr) - \frac{8h^7}{945}f^{(6)}(\xi)$$





## 3. Nyílt Newton–Cotes-formulák

A nyílt eljárásoknál az integrálási intervallum végpontjait ($a$ és $b$) **nem használjuk alappontként**, azaz a függvényértékeket csak az intervallum belsejéből vett pontokban értékeljük ki. Legyen $x_{-1} = a$ és $x_{n+1} = b$.

* **Érintőformula vagy téglalapszabály ($n=0$):** Csak az intervallum középpontját használja ($x_0 = \frac{a+b}{2}$).

$$\int_{x_{-1}}^{x_1} f(x)\,dx = 2hf(x_0) + \frac{h^3}{3}f''(\xi)$$


* **Kétpontos nyílt formula ($n=1$):**

$$\int_{x_{-1}}^{x_2} f(x)\,dx = \frac{3h}{2}\bigl(f(x_0) + f(x_1)\bigr) + \frac{3h^3}{4}f''(\xi)$$


* **Hárompontos nyílt formula ($n=2$):**

$$\int_{x_{-1}}^{x_3} f(x)\,dx = \frac{4h}{3}\bigl(2f(x_0) - f(x_1) + 2f(x_2)\bigr) + \frac{14h^5}{45}f^{(4)}(\xi)$$





## 4. Numerikus stabilitás kerekítési hibák esetén

Amikor az $f(x_i)$ függvényértékeket számítógépen kiértékeljük, azok elkerülhetetlenül tartalmaznak egy kicsi, $\varepsilon$ korlátú kerekítési hibát ($y_i$). A 7.15-ös tétel megnyugtató választ ad a hibaterjedésre:

> **7.15. Tétel:** Tegyük fel, hogy a kvadratúra-képlet pontos a konstans $f(x)=1$ függvényre (azaz a súlyok összege megegyezik az intervallum hosszával: $\sum c_i = b-a$), és **minden $c_i$ súly pozitív ($c_i > 0$)**. Ekkor a felhalmozódó kerekítési hiba abszolút értéke korlátos marad:
> 
> $$\left|\sum_{i=1}^{n} c_i f(x_i) - \sum_{i=1}^{n} c_i y_i\right| \leq \varepsilon(b - a)$$
> 
> 

### Kritikus elméleti következmény

Mivel a hiba felső korlátja $\varepsilon(b-a)$, a felhalmozódó kerekítési hiba **teljesen független az alappontok számától és a $h$ lépésköztől**. Ellentétben a numerikus differenciálással (ahol a $h \to 0$ katasztrofális divergenciát okozott), a pozitív súlyú numerikus integrálási sémák **numerikusan rendkívül stabilak**.

*Figyelmeztetés:* Nagyon magas rendű ($n \geq 8$) Newton–Cotes-formulák esetén negatív súlyok is megjelennek, ami rontja a stabilitást. Emiatt a gyakorlatban a magas fokú polinomok helyett inkább az alacsonyabb fokú sémák (Trapéz, Simpson) egymás utáni láncolatát, az úgynevezett **összetett kvadratúra-formulákat** használják.