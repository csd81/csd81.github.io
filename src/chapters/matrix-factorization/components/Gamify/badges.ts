import type { Bilingual } from "../../content/types";
import type { Progress } from "../../store/useAppStore";

export interface BadgeDef {
  id: string;
  icon: string;
  name: Bilingual;
  desc: Bilingual;
  /** predicate over progress that unlocks the badge */
  earned: (p: Progress) => boolean;
}

export const BADGES: BadgeDef[] = [
  {
    id: "first-steps",
    icon: "👣",
    name: { en: "First Steps", hu: "Első lépések" },
    desc: { en: "Open your first theory section.", hu: "Nyisd meg az első elméleti részt." },
    earned: (p) => p.sectionsViewed.length >= 1,
  },
  {
    id: "scholar",
    icon: "📚",
    name: { en: "Scholar", hu: "Tudós" },
    desc: { en: "Read all theory sections.", hu: "Olvasd el az összes elméleti részt." },
    earned: (p) =>
      ["intro", "lu", "cholesky"].every((id) => p.sectionsViewed.includes(id)),
  },
  {
    id: "first-lu",
    icon: "🔻",
    name: { en: "First LU", hu: "Első LU" },
    desc: { en: "Run the LU solver successfully.", hu: "Futtasd sikeresen az LU-megoldót." },
    earned: (p) => p.luSolved >= 1,
  },
  {
    id: "cholesky-master",
    icon: "🔺",
    name: { en: "Cholesky Master", hu: "Cholesky mester" },
    desc: { en: "Run the Cholesky solver successfully.", hu: "Futtasd sikeresen a Cholesky-megoldót." },
    earned: (p) => p.choleskySolved >= 1,
  },
  {
    id: "problem-solver",
    icon: "🧠",
    name: { en: "Problem Solver", hu: "Feladatmegoldó" },
    desc: { en: "Solve 3 practice exercises.", hu: "Oldj meg 3 gyakorlófeladatot." },
    earned: (p) => p.exercisesDone.length >= 3,
  },
  {
    id: "champion",
    icon: "🏆",
    name: { en: "Champion", hu: "Bajnok" },
    desc: { en: "Solve 6 practice exercises.", hu: "Oldj meg 6 gyakorlófeladatot." },
    earned: (p) => p.exercisesDone.length >= 6,
  },
  {
    id: "bilingual",
    icon: "🌍",
    name: { en: "Bilingual Learner", hu: "Kétnyelvű tanuló" },
    desc: { en: "Use both English and Hungarian.", hu: "Használd az angolt és a magyart is." },
    earned: (p) => p.usedLangs.includes("en") && p.usedLangs.includes("hu"),
  },
];

/** Overall progress fraction from a weighted blend of activities. */
export function overallProgress(p: Progress): number {
  const earned = BADGES.filter((b) => b.earned(p)).length;
  return earned / BADGES.length;
}
