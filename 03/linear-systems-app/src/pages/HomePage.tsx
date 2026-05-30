import { Link } from 'react-router-dom';
import { useI18n } from '../app/LanguageContext';
import { sections } from '../content/sections';

export function HomePage() {
  const { t, pick } = useI18n();
  return (
    <div className="stack" style={{ gap: 28 }}>
      <section className="hero">
        <span className="section-eyebrow">{t('app.subtitle')}</span>
        <h1>{t('app.title')}</h1>
        <p>{t('home.tagline')}</p>
        <p style={{ marginTop: 4 }}>{t('home.lead')}</p>
        <div className="cta-row">
          <Link className="btn" to="/lab">
            {t('home.openLab')} →
          </Link>
          <Link className="btn secondary" to="/quiz">
            {t('home.openQuiz')}
          </Link>
          <Link className="btn secondary" to="/lessons">
            {t('home.browse')}
          </Link>
        </div>
      </section>

      <section>
        <div className="lesson-list">
          {sections.map((s) => (
            <Link key={s.id} to={`/lessons/${s.id}`} className="lesson-card">
              <div className="num">§{s.number}</div>
              <div style={{ fontWeight: 600, margin: '4px 0' }}>{pick(s.title)}</div>
              <div className="muted" style={{ fontSize: '0.9rem' }}>
                {pick(s.summary)}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
