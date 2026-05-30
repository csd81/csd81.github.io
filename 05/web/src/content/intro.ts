import type { Section } from "./types";

export const introSection: Section = {
  id: "intro",
  title: { en: "Chapter 5 — Matrix Factorization", hu: "5. fejezet — Mátrix faktorizáció" },
  blocks: [
    {
      id: "intro-overview",
      kind: "text",
      body: [
        {
          rich: {
            en: "We investigate the matrix factorization problem: for a given square matrix $\\mathbf{A}$ we look for special matrices $\\mathbf{B}$ and $\\mathbf{C}$ such that $\\mathbf{A} = \\mathbf{BC}$.",
            hu: "A mátrix faktorizáció feladatát vizsgáljuk: adott $\\mathbf{A}$ négyzetes mátrixhoz olyan speciális $\\mathbf{B}$ és $\\mathbf{C}$ mátrixokat keresünk, amelyekre $\\mathbf{A} = \\mathbf{BC}$.",
          },
        },
        {
          text: {
            en: "First we study the LU factorization (lower × upper triangular), then the Cholesky factorization (a special symmetric case). These decompositions let us solve linear systems efficiently and underpin later methods such as eigenvalue iteration.",
            hu: "Először az LU-faktorizációt (alsó × felső trianguláris) tanulmányozzuk, majd a Cholesky-faktorizációt (egy speciális szimmetrikus esetet). Ezek a felbontások hatékonnyá teszik a lineáris egyenletrendszerek megoldását, és alapját képezik későbbi módszereknek, például a sajátérték-iterációnak.",
          },
        },
      ],
    },
    {
      id: "intro-howto",
      kind: "remark",
      label: { en: "How to use this site", hu: "Hogyan használd az oldalt" },
      body: [
        {
          text: {
            en: "Read the theory, then open the interactive solvers to factor your own matrices step by step, watch the guided animations of the textbook examples, and test yourself in the Practice section. Switch language (EN/HU) and theme (light/dark) any time from the header. Your progress and badges are saved in your browser.",
            hu: "Olvasd el az elméletet, majd nyisd meg az interaktív megoldókat, hogy lépésről lépésre faktorizáld saját mátrixaidat, nézd meg a tankönyvi példák vezetett animációit, és ellenőrizd magad a Gyakorlás részben. A nyelvet (EN/HU) és a témát (világos/sötét) bármikor válthatod a fejlécből. A haladásod és a jelvényeid a böngésződben tárolódnak.",
          },
        },
      ],
    },
  ],
};
