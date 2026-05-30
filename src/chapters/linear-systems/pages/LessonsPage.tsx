import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../app/LanguageContext';
import { sections, getSection } from '../content/sections';
import { SectionView } from '../components/notes/SectionView';

export function LessonsPage() {
  const { t, pick } = useI18n();
  return (
    <div className="stack">
      <div>
        <span className="section-eyebrow">{t('nav.sections')}</span>
        <h1 style={{ margin: '4px 0' }}>{t('app.title')}</h1>
      </div>
      <div className="lesson-list">
        {sections.map((s) => (
          <Link key={s.id} to={`/linear-systems/lessons/${s.id}`} className="lesson-card">
            <div className="num">§{s.number}</div>
            <div style={{ fontWeight: 600, margin: '4px 0' }}>{pick(s.title)}</div>
            <div className="muted" style={{ fontSize: '0.9rem' }}>
              {pick(s.summary)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LessonPage() {
  const { id } = useParams();
  const { t } = useI18n();
  const section = id ? getSection(id) : undefined;
  if (!section) {
    return (
      <p>
        {t('common.notFound')} <Link to="/linear-systems/lessons">{t('nav.sections')}</Link>
      </p>
    );
  }
  return (
    <div className="stack">
      <Link to="/linear-systems/lessons" className="muted">
        ← {t('nav.sections')}
      </Link>
      <SectionView section={section} />
    </div>
  );
}
