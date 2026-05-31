import { useEffect } from 'react';
import type { SectionMeta } from './types';
import { useScrollyNav } from './ScrollyNavContext';

/**
 * Publishes a chapter's sections to the global app-nav (which renders the
 * unified "§ jump ▾" menu + scroll progress). Renders nothing itself — there is
 * no longer a second sticky bar. Chapters keep calling
 * `<ScrollyTopBar sections={SECTIONS} />` unchanged.
 */
export function ScrollyTopBar({ sections }: { sections: SectionMeta[] }) {
  const { setSections } = useScrollyNav();
  useEffect(() => {
    setSections(sections);
    return () => setSections([]);
  }, [sections, setSections]);
  return null;
}

export default ScrollyTopBar;
