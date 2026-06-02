import { useMemo, type CSSProperties } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang, type Bi } from '../../shared/providers/LanguageProvider';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import { DOCS, GROUP_LABEL, GROUP_ORDER, docById } from './content';
import '../../pages/home.css';
import '../ila/ila.css';
import '../dimat/dimat.css';

const UI = {
  kicker: { en: 'Linear Algebra', hu: 'Lineáris algebra' },
  title: { en: 'Linear Algebra', hu: 'Lineáris algebra' },
  lead: {
    en: 'Lecture decks and notes (dr. Leitold Adrien & dr. Szalkai István, University of Pannonia) on vector spaces, matrices, linear maps and the elementary basis transformation — with KaTeX-rendered math.',
    hu: 'Előadás-diák és jegyzetek (dr. Leitold Adrien és dr. Szalkai István, Pannon Egyetem) a vektorterekről, mátrixokról, lineáris leképezésekről és az elemi bázistranszformációról — KaTeX-szel rendelt képletekkel.',
  },
  back: { en: '← All topics', hu: '← Témakörök' },
  notFound: { en: 'Document not found.', hu: 'A dokumentum nem található.' },
  soon: { en: 'Coming soon', hu: 'Hamarosan' },
} satisfies Record<string, Bi>;

const soonBadge: CSSProperties = {
  display: 'inline-block',
  alignSelf: 'flex-start',
  marginTop: '.4rem',
  padding: '.1rem .5rem',
  borderRadius: '999px',
  fontSize: '.72rem',
  fontWeight: 700,
  letterSpacing: '.02em',
  textTransform: 'uppercase',
  background: 'rgba(180,83,9,.14)',
  color: '#b45309',
};

function Landing() {
  const { t } = useLang();
  return (
    <div className="dimat">
      <header className="dimat__hero">
        <p className="dimat__kicker">{t(UI.kicker)}</p>
        <h1 className="dimat__title">{t(UI.title)}</h1>
        <p className="dimat__lead">{t(UI.lead)}</p>
      </header>

      {GROUP_ORDER.map((g) => {
        const docs = DOCS.filter((d) => d.group === g);
        if (!docs.length) return null;
        return (
          <section key={g}>
            <h2 className="home__section-title">{t(GROUP_LABEL[g])}</h2>
            <ul className="dimat__grid">
              {docs.map((d) => {
                const inner = (
                  <>
                    <span className="chcard__num">{d.icon}</span>
                    <span className="chcard__body">
                      <span className="chcard__title">{d.title}</span>
                      <span className="chcard__blurb">{d.blurb}</span>
                      {d.comingSoon && <span style={soonBadge}>{t(UI.soon)}</span>}
                    </span>
                  </>
                );
                return (
                  <li key={d.id}>
                    {d.comingSoon ? (
                      <div
                        className="chcard"
                        aria-disabled="true"
                        style={{ cursor: 'default', opacity: 0.7 }}
                      >
                        {inner}
                      </div>
                    ) : (
                      <Link to={`/linalg/${d.id}`} className="chcard">
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function DocView() {
  const { id } = useParams();
  const { t, lang } = useLang();
  const doc = useMemo(() => (id ? docById(id) : undefined), [id]);

  if (!doc) {
    return (
      <div className="dimat">
        <Link to="/linalg" className="dimat__back">{t(UI.back)}</Link>
        <p className="dimat__lead">{t(UI.notFound)}</p>
      </div>
    );
  }

  return (
    <div className="dimat">
      <Link to="/linalg" className="dimat__back">{t(UI.back)}</Link>
      <header className="dimat__topichdr">
        <p className="dimat__kicker">{t(UI.kicker)}</p>
        <h1 className="dimat__title">{doc.title}</h1>
      </header>
      <MarkdownView markdown={lang === 'en' && doc.markdownEn ? doc.markdownEn : doc.markdown} />
    </div>
  );
}

export default function Linalg() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<DocView />} />
    </Routes>
  );
}
