import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../content/types";

export type Theme = "light" | "dark";

export interface Progress {
  /** ids of theory sections that have been opened/read */
  sectionsViewed: string[];
  /** number of successful solver runs by type */
  luSolved: number;
  choleskySolved: number;
  /** ids of exercises answered correctly */
  exercisesDone: string[];
  /** has the learner used both languages at least once */
  usedLangs: Lang[];
  /** unlocked badge ids */
  badges: string[];
}

interface AppState {
  lang: Lang;
  theme: Theme;
  progress: Progress;
  setLang: (l: Lang) => void;
  toggleLang: () => void;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
  markSectionViewed: (id: string) => void;
  recordSolve: (kind: "lu" | "cholesky") => void;
  recordExercise: (id: string) => void;
  unlockBadge: (id: string) => boolean; // returns true if newly unlocked
  resetProgress: () => void;
}

const emptyProgress: Progress = {
  sectionsViewed: [],
  luSolved: 0,
  choleskySolved: 0,
  exercisesDone: [],
  usedLangs: [],
  badges: [],
};

function prefersDark(): Theme {
  if (typeof window !== "undefined" && window.matchMedia) {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return "light";
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      lang: "en",
      theme: prefersDark(),
      progress: emptyProgress,

      setLang: (l) =>
        set((s) => ({
          lang: l,
          progress: {
            ...s.progress,
            usedLangs: s.progress.usedLangs.includes(l)
              ? s.progress.usedLangs
              : [...s.progress.usedLangs, l],
          },
        })),
      toggleLang: () => get().setLang(get().lang === "en" ? "hu" : "en"),

      setTheme: (t) => set({ theme: t }),
      toggleTheme: () => set((s) => ({ theme: s.theme === "dark" ? "light" : "dark" })),

      markSectionViewed: (id) =>
        set((s) =>
          s.progress.sectionsViewed.includes(id)
            ? s
            : { progress: { ...s.progress, sectionsViewed: [...s.progress.sectionsViewed, id] } }
        ),

      recordSolve: (kind) =>
        set((s) => ({
          progress: {
            ...s.progress,
            luSolved: s.progress.luSolved + (kind === "lu" ? 1 : 0),
            choleskySolved: s.progress.choleskySolved + (kind === "cholesky" ? 1 : 0),
          },
        })),

      recordExercise: (id) =>
        set((s) =>
          s.progress.exercisesDone.includes(id)
            ? s
            : { progress: { ...s.progress, exercisesDone: [...s.progress.exercisesDone, id] } }
        ),

      unlockBadge: (id) => {
        if (get().progress.badges.includes(id)) return false;
        set((s) => ({ progress: { ...s.progress, badges: [...s.progress.badges, id] } }));
        return true;
      },

      resetProgress: () => set({ progress: emptyProgress }),
    }),
    {
      name: "mfa-store",
      partialize: (s) => ({ lang: s.lang, theme: s.theme, progress: s.progress }),
    }
  )
);
