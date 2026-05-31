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
            ? 'Dr. Hartung Ferenc jegyzetei alapján.'
            : 'Based on notes by Dr. Hartung Ferenc.'}
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
          <Link to="/practice" className="chcard chcard--practice">
            <span className="chcard__num">📝</span>
            <span className="chcard__body">
              <span className="chcard__title">{lang === 'hu' ? 'Gyakorlat' : 'Practice'}</span>
              <span className="chcard__blurb">
                {lang === 'hu' ? 'Kidolgozott példák' : 'Worked examples'}
              </span>
            </span>
          </Link>
        </li>
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

      <h2 className="home__section-title">
        {lang === 'hu' ? 'Diszkrét matematika' : 'Discrete Math'}
      </h2>
      <ul className="home__grid">
        <li>
          <Link to="/dimat" className="chcard">
            <span className="chcard__num">🧮</span>
            <span className="chcard__body">
              <span className="chcard__title">
                {lang === 'hu' ? 'Diszkrét matematika' : 'Discrete Mathematics'}
              </span>
              <span className="chcard__blurb">
                {lang === 'hu'
                  ? 'Kombinatorika és gráfelmélet — 18 témakör elmélettel, megoldásokkal és kvízzel.'
                  : 'Combinatorics & graph theory — 18 topics with theory, solutions and a quiz.'}
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/ila" className="chcard">
            <span className="chcard__num">📐</span>
            <span className="chcard__body">
              <span className="chcard__title">
                {lang === 'hu' ? 'ILA — Logikai és algebrai alapok' : 'ILA — Logic & Algebra Foundations'}
              </span>
              <span className="chcard__blurb">
                {lang === 'hu'
                  ? '18 interaktív fejezet: halmazok, relációk, logika, gráfok, számelmélet.'
                  : '18 interactive chapters: sets, relations, logic, graphs, number theory.'}
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
