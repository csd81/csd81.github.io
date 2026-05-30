import type { Bi } from "../contexts/LanguageContext";

export interface SectionMeta {
  id: string;
  no: string;
  title: Bi;
  blurb: Bi;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: "calculus",
    no: "8.1",
    title: { en: "Calculus, refreshed", hu: "Analízis, felfrissítve" },
    blurb: {
      en: "Where can a minimum hide? Gradients, Hessians, and the min/max/saddle test.",
      hu: "Hol bújhat meg a minimum? Gradiens, Hesse-mátrix, és a min/max/nyeregpont teszt.",
    },
  },
  {
    id: "golden",
    no: "8.2",
    title: { en: "Golden Section Search", hu: "Aranymetszéses keresés" },
    blurb: {
      en: "Shrink an interval around the minimum — reusing one point each step.",
      hu: "Szűkítsük az intervallumot a minimum köré — minden lépésben egy pontot újrahasználva.",
    },
  },
  {
    id: "simplex",
    no: "8.3",
    title: { en: "Simplex & Nelder–Mead", hu: "Szimplex és Nelder–Mead" },
    blurb: {
      en: "A triangle that flips, stretches and squeezes its way downhill.",
      hu: "Egy háromszög, amely tükrözve, nyújtva és húzva gurul a völgybe.",
    },
  },
  {
    id: "gradient",
    no: "8.4",
    title: { en: "Gradient Method", hu: "Gradiens módszer" },
    blurb: {
      en: "Always walk straight downhill. Simple — but watch it zig-zag.",
      hu: "Mindig lefelé a legmeredekebben. Egyszerű — de figyeld a cikcakkot.",
    },
  },
  {
    id: "linsys",
    no: "8.5",
    title: { en: "Linear Systems by Descent", hu: "Lineáris rendszerek lejtéssel" },
    blurb: {
      en: "Solve A x = b by rolling a quadratic bowl to its bottom.",
      hu: "Oldd meg az A x = b rendszert egy kvadratikus tál aljára gurulva.",
    },
  },
  {
    id: "newton",
    no: "8.6",
    title: { en: "Newton's Method", hu: "Newton-módszer" },
    blurb: {
      en: "Use curvature, not just slope — and converge ridiculously fast.",
      hu: "Használd a görbületet, ne csak a meredekséget — és konvergálj iszonyú gyorsan.",
    },
  },
  {
    id: "quasinewton",
    no: "8.7",
    title: { en: "Quasi-Newton", hu: "Kvázi-Newton" },
    blurb: {
      en: "Newton's speed without the Hessian: Broyden, PSB, BFGS, DFP race.",
      hu: "Newton sebessége Hesse-mátrix nélkül: Broyden, PSB, BFGS, DFP verseny.",
    },
  },
];
