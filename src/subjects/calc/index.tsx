/** Calculus books — raw markdown dumps (Győri–Pituk I/II, Szalkai–Mikó Analízis). */
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { MarkdownView } from '../../shared/ui/MarkdownView';
import '../../pages/home.css';
import '../ila/ila.css';

const RAW = import.meta.glob('./content/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

interface Book { id: string; title: string; author: string; blurb: string; md: string; }

const META: Record<string, { title: string; author: string; blurb: string }> = {
  kalkulus1: { title: 'Kalkulus informatikusoknak I.', author: 'Győri István, Pituk Mihály', blurb: 'Halmazok, függvények, sorozatok, határérték, differenciálszámítás.' },
  kalkulus2: { title: 'Kalkulus informatikusoknak II.', author: 'Győri István, Pituk Mihály', blurb: 'Végtelen sorok, integrálszámítás, többváltozós analízis.' },
  'anal-tk1b': { title: 'Matematikai analízis I.', author: 'Dr. Szalkai István, Mikó Teréz · Pannon Egyetem', blurb: 'Alapfogalmak, függvények, sorozatok, határérték, deriválás (0–7. fejezet).' },
};

const BOOKS: Book[] = Object.entries(RAW)
  .map(([path, md]) => {
    const id = path.replace(/^\.\/content\//, '').replace(/\.md$/, '');
    const m = META[id] ?? { title: id, author: '', blurb: '' };
    return { id, ...m, md };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

export const CALC_BOOKS = BOOKS.map(({ id, title, author, blurb }) => ({ id, title, author, blurb }));

const bookById = (id: string) => BOOKS.find((b) => b.id === id);

function Landing() {
  return (
    <div className="ila">
      <p className="ila__kicker">Analízis · Calculus</p>
      <h1 className="ila__title">Kalkulus könyvek</h1>
      <p className="ila__cite">Teljes tankönyvek Markdown formában, KaTeX-renderelt képletekkel.</p>
      <ul className="ila__grid">
        {BOOKS.map((b, i) => (
          <li key={b.id}>
            <Link to={`/calc/${b.id}`} className="chcard">
              <span className="chcard__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{b.title}</span>
                <span className="chcard__blurb">{b.author}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BookView() {
  const { id } = useParams();
  const book = id ? bookById(id) : undefined;
  if (!book) {
    return (
      <div className="ila">
        <Link to="/calc" className="ila__back">← Könyvek</Link>
        <p className="ila__cite">A könyv nem található.</p>
      </div>
    );
  }
  return (
    <div className="ila">
      <Link to="/calc" className="ila__back">← Könyvek</Link>
      <MarkdownView markdown={book.md} />
    </div>
  );
}

export default function Calc() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path=":id" element={<BookView />} />
    </Routes>
  );
}
