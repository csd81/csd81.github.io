# Halmazok

<!-- OCR of "halmazok.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 10 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Halmazok

- **Alapfogalmak:** halmaz, halmaz eleme. Jelölés: $A$, $a\in A$
- **Üres halmaz:** nincs egyetlen eleme sem. Jel.: $\emptyset$, $\{\,\}$
- **Egyenlő halmazok:** $A=B$, ha a két halmaznak az elemei ugyanazok.
- **Részhalmaz:** Az $A$ halmaz részhalmaza a $B$ halmaznak, ha $A$ minden eleme eleme $B$-nek is. Jel.: $A\subseteq B$
- **Valódi részhalmaz:** Az $A$ halmaz valódi részhalmaza a $B$ halmaznak, ha $A\subseteq B$ és $B$-nek van olyan eleme, amely nem eleme az $A$ halmaznak. Jel.: $A\subset B$
- **Bármely $A$ halmaz esetén:**
$$A\subseteq A$$
$$\emptyset\subseteq A$$
$$A\subseteq B\text{ és }B\subseteq A\Leftrightarrow A=B$$

## Halmazműveletek: komplementer

**Komplementer:** Legyen $U$ az alaphalmaz, univerzum. Az $A$ halmaz $U$-ra vonatkozó komplementer halmaza az $U$ azon elemeit tartalmazza, amelyek nem elemei $A$-nak:
$$\overline A=\{x\mid x\notin A\}.$$

Tulajdonságai:
$$\overline{\overline A}=A,\quad\overline U=\emptyset,\quad\overline\emptyset=U.$$

## Halmazműveletek: unió

**Unió (egyesítés):**
$$A\cup B=\{x\mid x\in A\text{ vagy }x\in B\}$$

Tulajdonságai:
$$A\cup B=B\cup A$$
$$A\cup(B\cup C)=(A\cup B)\cup C$$
$$A\cup A=A,\quad A\cup\emptyset=A,\quad A\cup U=U$$

## Halmazműveletek: metszet

**Metszet (közös rész):**
$$A\cap B=\{x\mid x\in A\text{ és }x\in B\}$$

Tulajdonságai:
$$A\cap B=B\cap A$$
$$A\cap(B\cap C)=(A\cap B)\cap C$$
$$A\cap A=A,\quad A\cap\emptyset=\emptyset,\quad A\cap U=A$$

**Diszjunkt halmazok:** $A$ és $B$ diszjunkt, ha nincs közös elemük, azaz $A\cap B=\emptyset$.

## Halmazműveletek: további tulajdonságok

$$A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$$
$$A\cap(B\cup C)=(A\cap B)\cup(A\cap C)$$
$$\overline A\cup\overline B=\overline{A\cap B}\qquad\text{(De Morgan)}$$
$$\overline A\cap\overline B=\overline{A\cup B}\qquad\text{(De Morgan)}$$

## Halmazműveletek: különbség

**Különbség:** Az $A$ és $B$ halmaz különbsége olyan elemeket tartalmaz, amelyek elemei $A$-nak, de nem elemei $B$-nek:
$$A\setminus B=\{x\mid x\in A\text{ és }x\notin B\}$$
Azaz:
$$A\setminus B=A\cap\overline B$$

## Halmazok elemszáma

- Az $A$ halmaz elemszáma: jel.: $|A|$
- Halmazok:
  - véges halmazok: elemek száma véges
  - végtelen halmazok: elemek száma végtelen
- **Logikai szita:**
$$|A\cup B|=|A|+|B|-|A\cap B|$$
$$|A\cup B\cup C|=|A|+|B|+|C|-|A\cap B|-|B\cap C|-|A\cap C|+|A\cap B\cap C|$$
$$\dots$$

## Számhalmazok

- **Természetes számok:** $\mathbb{N}=\{0,1,2,\dots\}$
- **Egész számok:** $\mathbb{Z}=\{\dots,-1,-2,0,1,2,\dots\}$
- **Racionális számok:** $\mathbb{Q}$: két egész szám hányadosaként felírható számok; tizedes tört alakjuk véges, vagy végtelen periodikus.
- **Irracionális számok:** $\mathbb{Q}^*$: nem írhatóak fel két egész szám hányadosaként; tizedes tört alakjuk végtelen, nem periodikus. Például: $\pi,\sqrt 2$
- **Valós számok:** $\mathbb{R}=\mathbb{Q}\cup\mathbb{Q}^*$; ábrázolásuk számegyenesen történhet
- **Intervallumok:** $[a,b]$, $(a,b)$, $[a,\infty)$, $[a,b)$, …

## Logika elemei

- **Kijelentések közti kapcsolatok:**
  - Implikáció: $A\Rightarrow B$
  - Ekvivalencia: $A\Leftrightarrow B$
- **Logikai kvantorok:**
  - Univerzális kvantor: „minden, bármely" Jel.: $\forall$
  - Egzisztenciális kvantor: „létezik" Jel.: $\exists$
