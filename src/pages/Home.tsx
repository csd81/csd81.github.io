import { Link } from 'react-router-dom';
import { useLang } from '../shared/providers/LanguageProvider';
import { CHAPTERS } from '../chapters/registry';
import './home.css';

export default function Home() {
  const { t, lang } = useLang();
  return (
    <div className="home">
      <header className="home__hero">
        <p className="home__kicker">
          {lang === 'hu' ? 'Interaktív tananyag' : 'Interactive coursework'}
        </p>
        <h1 className="home__title">
          {lang === 'hu' ? 'Numerikus módszerek' : 'Numerical Methods'}
        </h1>
        <p className="home__lead">
          {lang === 'hu'
            ? 'Tíz fejezet interaktív bemutatókkal, levezetésekkel és kvízekkel — magyarul és angolul.'
            : 'Ten chapters of interactive demos, derivations and quizzes — in Hungarian and English.'}
        </p>
      </header>

      <ul className="home__grid">
        {CHAPTERS.map((c) => (
          <li key={c.slug}>
            <Link to={`/${c.slug}`} className="chcard">
              <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
              <span className="chcard__body">
                <span className="chcard__title">{t(c.title)}</span>
                <span className="chcard__blurb">{t(c.blurb)}</span>
              </span>
            </Link>
          </li>
        ))}
        <li>
          <a href="/sandbox/" className="chcard chcard--sandbox">
            <span className="chcard__num">🦀</span>
            <span className="chcard__body">
              <span className="chcard__title">
                {lang === 'hu' ? 'Interaktív homokozó' : 'Interactive Sandbox'}
              </span>
              <span className="chcard__blurb">
                {lang === 'hu'
                  ? 'Rust→WebAssembly numerikus homokozó mátrixnyelv-REPL-lel, fejezetenkénti demókkal.'
                  : 'A Rust→WebAssembly numerics playground with a matrix-language REPL and per-chapter demos.'}
              </span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
