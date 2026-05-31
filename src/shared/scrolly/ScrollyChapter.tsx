import { useEffect, type ReactNode } from 'react';
import { ScrollyTopBar } from './ScrollyTopBar';
import type { SectionMeta } from './types';
import './scrolly.css';

/**
 * Page shell for a scrollytelling chapter: the sticky top-bar nav (progress +
 * jump menu) followed by the stacked section components. Scrolls to `#<id>` on
 * mount if the URL carries a section hash (deep-link support).
 */
export function ScrollyChapter({
  sections,
  children,
}: {
  sections: SectionMeta[];
  children: ReactNode;
}) {
  useEffect(() => {
    const id = decodeURIComponent((typeof location !== 'undefined' ? location.hash : '').replace(/^#/, ''));
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }, []);

  return (
    <div className="scrolly-page">
      <ScrollyTopBar sections={sections} />
      {children}
    </div>
  );
}

export default ScrollyChapter;
