import { Link } from 'react-router-dom';
import { useLang } from '../providers/LanguageProvider';
import { chapterBySlug } from '../../chapters/registry';

/** Temporary chapter body shown until a chapter is migrated into the unified app. */
export function ChapterPlaceholder({ slug }: { slug: string }) {
  const { t, lang } = useLang();
  const ch = chapterBySlug(slug);
  if (!ch) return null;
  return (
    <div className="card center" style={{ marginTop: '2rem' }}>
      <p className="muted" style={{ fontWeight: 700, letterSpacing: '0.08em' }}>
        {lang === 'hu' ? `${ch.num}. FEJEZET` : `CHAPTER ${ch.num}`}
      </p>
      <h1>{t(ch.title)}</h1>
      <p className="muted">{t(ch.blurb)}</p>
      <p style={{ marginTop: '1.5rem' }}>
        {lang === 'hu'
          ? 'Az interaktív tananyag áttöltése folyamatban.'
          : 'Interactive content is being migrated into the unified app.'}
      </p>
      <Link className="btn btn--primary" to="/" style={{ marginTop: '1rem' }}>
        {lang === 'hu' ? '← Vissza a tartalomhoz' : '← Back to contents'}
      </Link>
    </div>
  );
}

export default ChapterPlaceholder;
