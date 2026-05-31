import type { ReactNode } from 'react';
import { useLang } from '../providers/LanguageProvider';
import type { SectionMeta } from './types';

/**
 * Section wrapper for a scrollytelling chapter: an anchored `<section>` with a
 * bilingual header (eyebrow §no + title + blurb), then the section body
 * (Scrolly + theory + decks) as children. Anchor is `#<meta.id>`.
 */
export default function SectionShell({ meta, children }: { meta: SectionMeta; children: ReactNode }) {
  const { t } = useLang();
  return (
    <section className="section" id={meta.id}>
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">
            {t({ en: 'Section', hu: 'Szakasz' })} {meta.no}
          </span>
          <h2>{t(meta.title)}</h2>
          <p>{t(meta.blurb)}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
