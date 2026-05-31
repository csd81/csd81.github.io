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
  ],
};
