# Hatvány, gyök, logaritmus

<!-- OCR of "hatvany_gyok_log.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 8 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Hatványozás értelmezése

**Hatvány:** $a^n$ — $a$: alap, $n$: kitevő

Hatványozás értelmezése:
- **Pozitív egész kitevőre:** legyen $n\in\mathbb{N}^+$, $a\in\mathbb{R}$. Ekkor:
$$a^n=a\cdot a\cdot\dots\cdot a\quad(n\text{-szer})$$
- **0 kitevőre:** legyen $a\in\mathbb{R}$, $a\ne 0$. Ekkor:
$$a^0=1\quad(0^0\text{ hatványt nem értelmezzük})$$
- **Negatív egész kitevőre:** legyen $n\in\mathbb{N}^+$, $a\in\mathbb{R}$, $a\ne 0$. Ekkor:
$$a^{-n}=\frac{1}{a^n}$$

## Gyökvonás értelmezése

**Négyzetgyök:** Egy nemnegatív $a$ szám négyzetgyöke az a nemnegatív szám, amelynek négyzete $a$. Jel.: $\sqrt a$

**$n$-edik gyök:**
1. Legyen $n$ páros pozitív egész szám: $n=2k$, $k\in\mathbb{N}^+$. Egy nemnegatív $a$ szám $2k$-adik gyöke az a nemnegatív szám, amelynek $2k$-adik hatványa $a$.
2. Legyen $n$ páratlan pozitív egész szám: $n=2k+1$, $k\in\mathbb{N}^+$. Egy $a$ valós szám $2k+1$-edik gyöke az a szám, amelynek $2k+1$-edik hatványa $a$.

Jel.: $\sqrt[n]{a}$

## Gyökvonás azonosságai

$$\sqrt[n]{a\cdot b}=\sqrt[n]{a}\cdot\sqrt[n]{b}\qquad a,b\ge 0,\ n\in\mathbb{N},\ n\ge 2$$
$$\sqrt[n]{\frac ab}=\frac{\sqrt[n]{a}}{\sqrt[n]{b}}\qquad a\ge 0,\ b>0,\ n\in\mathbb{N},\ n\ge 2$$
$$\sqrt[n]{a^k}=\left(\sqrt[n]{a}\right)^k\qquad a>0,\ n\in\mathbb{N},\ n\ge 2,\ k\in\mathbb{Z}$$
$$\sqrt[n]{\sqrt[m]{a}}=\sqrt[n\cdot m]{a}\qquad a\ge 0,\ n,m\in\mathbb{N},\ n,m\ge 2$$
$$\sqrt[n]{a^m}=\sqrt[n\cdot k]{a^{m\cdot k}}\qquad a>0,\ n,k\in\mathbb{N},\ n,k\ge 2,\ m\in\mathbb{Z}$$

## Hatványozás értelmezése (folyt.)

**Racionális tört kitevőjű hatvány:** Legyen $n=p/q$, $p\in\mathbb{Z}$, $q\in\mathbb{Z}$, $q>1$, $a\in\mathbb{R}$, $a>0$. Ekkor:
$$a^{\frac pq}=\sqrt[q]{a^p}$$

A hatványozás irracionális kitevőre is kiterjeszthető.

## A hatványozás azonosságai

Minden lehetséges értelmezésre:
$$a^m\cdot a^n=a^{m+n}$$
$$\frac{a^m}{a^n}=a^{m-n}$$
$$(a\cdot b)^n=a^n\cdot b^n$$
$$\left(\frac ab\right)^n=\frac{a^n}{b^n}$$
$$\left(a^n\right)^m=a^{n\cdot m}$$

## A logaritmus értelmezése

Legyen $a>0$, $a\ne 1$ és $b>0$. Ekkor a $b$ szám $a$ alapú logaritmusa (jel.: $\log_a b$) jelenti azt a valós számot (kitevőt), amelyre $a$-t emelve $b$-t kapunk:
$$a^{\log_a b}=b$$

Pl.: $\log_2 8=3$, mert $2^3=8$; $\quad\log_2 1=0$, mert $2^0=1$; $\quad\log_2(1/8)=-3$, mert $2^{-3}=1/8$

Speciálisan, a 10-es alapú logaritmus jelölése: $\lg$

## A logaritmus azonosságai

Legyen $a,b,c>0$, $a\ne 1$. Ekkor:
$$\log_a(b\cdot c)=\log_a b+\log_a c$$
$$\log_a\left(\frac bc\right)=\log_a b-\log_a c$$
$$\log_a(b^k)=k\cdot\log_a b,\quad k\in\mathbb{R}$$
$$\log_a(a^k)=k,\quad k\in\mathbb{R}$$
$$\log_a b=\frac{\log_c b}{\log_c a},\quad c\ne 1$$
