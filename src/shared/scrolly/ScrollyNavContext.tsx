import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { SectionMeta } from './types';

interface Ctx {
  sections: SectionMeta[];
  setSections: (s: SectionMeta[]) => void;
}

const ScrollyNavContext = createContext<Ctx | null>(null);

/**
 * Lets a chapter publish its in-page sections so the single global app-nav can
 * render one unified "§ jump ▾" menu + scroll progress — instead of a second
 * sticky bar below the nav.
 */
export function ScrollyNavProvider({ children }: { children: ReactNode }) {
  const [sections, setSections] = useState<SectionMeta[]>([]);
  const value = useMemo(() => ({ sections, setSections }), [sections]);
  return <ScrollyNavContext.Provider value={value}>{children}</ScrollyNavContext.Provider>;
}

export function useScrollyNav(): Ctx {
  return useContext(ScrollyNavContext) ?? { sections: [], setSections: () => {} };
}
