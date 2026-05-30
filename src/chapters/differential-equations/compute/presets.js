// Textbook IVP presets (scalar). `f` and `exact` are mathjs expression strings
// in variables t and y (exact in t only). Page refs are to Chapter 10 (Hartung).
export const PRESETS = [
  {
    id: "main",
    en: "y' = 2y − 10t² + 2t   (Example 10.2/10.8)",
    hu: "y' = 2y − 10t² + 2t   (10.2./10.8. példa)",
    f: "2*y - 10*t^2 + 2*t",
    exact: "5*t^2 + 4*t + 2 - exp(2*t)",
    t0: 0, T: 1, y0: 1, h: 0.2,
  },
  {
    id: "exp",
    en: "y' = 2y + 6,  y(0)=2   (exact −3 + 5e^{2t})",
    hu: "y' = 2y + 6,  y(0)=2   (megoldás −3 + 5e^{2t})",
    f: "2*y + 6",
    exact: "-3 + 5*exp(2*t)",
    t0: 0, T: 1, y0: 2, h: 0.1,
  },
  {
    id: "tlnt",
    en: "t y' − y = 2t,  y(1)=1   (exact 2t·ln t + t)",
    hu: "t y' − y = 2t,  y(1)=1   (megoldás 2t·ln t + t)",
    f: "(2*t + y) / t",
    exact: "2*t*log(t) + t",
    t0: 1, T: 2, y0: 1, h: 0.1,
  },
  {
    id: "poly",
    en: "y' − (2/t)y = 1,  y(1)=1   (exact 2t² − t)",
    hu: "y' − (2/t)y = 1,  y(1)=1   (megoldás 2t² − t)",
    f: "1 + (2/t)*y",
    exact: "2*t^2 - t",
    t0: 1, T: 2, y0: 1, h: 0.2,
  },
  {
    id: "sqrt",
    en: "y' = t/(1+y),  y(1)=2   (exact √(t²+8) − 1)",
    hu: "y' = t/(1+y),  y(1)=2   (megoldás √(t²+8) − 1)",
    f: "t / (1 + y)",
    exact: "sqrt(t^2 + 8) - 1",
    t0: 1, T: 3, y0: 2, h: 0.1,
  },
  {
    id: "logistic",
    en: "y' = y(1 − y),  y(0)=0.1   (logistic, exact)",
    hu: "y' = y(1 − y),  y(0)=0.1   (logisztikus, megoldás)",
    f: "y * (1 - y)",
    exact: "1 / (1 + 9*exp(-t))",
    t0: 0, T: 6, y0: 0.1, h: 0.5,
  },
];

export function presetById(id) {
  return PRESETS.find((p) => p.id === id) || PRESETS[0];
}
