import { useMemo } from 'react';
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
} satisfies Record<string, Bi>;

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
              {docs.map((d) => (
                <li key={d.id}>
                  <Link to={`/linalg/${d.id}`} className="chcard">
                    <span className="chcard__num">{d.icon}</span>
                    <span className="chcard__body">
                      <span className="chcard__title">{d.title}</span>
                      <span className="chcard__blurb">{d.blurb}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function DocView() {
  const { id } = useParams();
  const { t } = useLang();
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
      <MarkdownView markdown={doc.markdown} />
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
