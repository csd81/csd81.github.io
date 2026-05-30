import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type ModuleId = 'fixed-point' | 'jacobi-gs' | 'spectral' | 'condition';

/** Best quiz result per module: fraction 0..1 of correct answers. */
export type Scores = Partial<Record<ModuleId, { best: number; total: number }>>;

interface ProgressState {
  scores: Scores;
  recordScore: (id: ModuleId, correct: number, total: number) => void;
  reset: () => void;
}

const ProgressContext = createContext<ProgressState | null>(null);
const STORAGE_KEY = 'ims.progress';

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [scores, setScores] = useState<Scores>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}') as Scores;
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  }, [scores]);

  const recordScore = (id: ModuleId, correct: number, total: number) => {
    setScores((prev) => {
      const fracPrev = prev[id] ? prev[id]!.best / prev[id]!.total : -1;
      const fracNew = correct / total;
      if (fracNew >= fracPrev) {
        return { ...prev, [id]: { best: correct, total } };
      }
      return prev;
    });
  };

  const reset = () => setScores({});

  return (
    <ProgressContext.Provider value={{ scores, recordScore, reset }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
