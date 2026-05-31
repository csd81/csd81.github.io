import { useLang } from '../shared/providers/LanguageProvider';
import { MarkdownView } from '../shared/ui/MarkdownView';
import { TOPICS } from './practice/content';
import { CHEATSHEETS } from './practice/cheatsheets';
import glossaryMd from './practice/glossary.md?raw';
import './practice/practice.css';

export default function Practice() {
  const { t, lang } = useLang();
  return (
    <div className="practice">
      <header className="practice__hero">
        <p className="practice__kicker">{lang === 'hu' ? 'Gyakorlat' : 'Practice'}</p>
        <h1>{lang === 'hu' ? 'Vizsgafelkészülés' : 'Exam preparation'}</h1>
        <p className="practice__lead">
          {lang === 'hu'
            ? 'Vizsga-puskák, kidolgozott példák és fogalomtár egy helyen.'
            : 'Exam cheatsheets, worked examples and a glossary in one place.'}
        </p>
        <nav className="practice__toc">
          <a href="#cheatsheets">{lang === 'hu' ? 'Puskák' : 'Cheatsheets'}</a>
          <a href="#examples">{lang === 'hu' ? 'Kidolgozott példák' : 'Worked examples'}</a>
          <a href="#glossary">{lang === 'hu' ? 'Fogalomtár' : 'Glossary'}</a>
        </nav>
      </header>

      <section className="practice__section" id="cheatsheets">
        <h2 className="practice__h2">
          {lang === 'hu' ? '📌 Vizsga-puskák (must-know)' : '📌 Exam cheatsheets (must-know)'}
        </h2>
        {CHEATSHEETS.map((c, i) => (
          <details className="practice__example" key={i} open>
            <summary>{`${i + 1}. ${t(c.title)}`}</summary>
            <MarkdownView markdown={t(c.body)} />
          </details>
        ))}
      </section>

      <section className="practice__section" id="examples">
        <h2 className="practice__h2">{lang === 'hu' ? '📝 Kidolgozott példák' : '📝 Worked examples'}</h2>
        {TOPICS.map((topic, i) => (
          <div className="practice__topic" key={i}>
            <h3 className="practice__topic-title">{t(topic.title)}</h3>
            {topic.items.map((it, j) => (
              <details className="practice__example" key={j}>
                <summary>{t(it.label)}</summary>
                <MarkdownView markdown={t(it.body)} />
              </details>
            ))}
          </div>
        ))}
      </section>

      <section className="practice__section" id="glossary">
        <h2 className="practice__h2">{lang === 'hu' ? '📖 Fogalomtár' : '📖 Glossary'}</h2>
        <details className="practice__example">
          <summary>
            {lang === 'hu' ? 'Numerikus analízis fogalomtár (A–Z)' : 'Numerical analysis glossary (A–Z)'}
          </summary>
          <MarkdownView markdown={glossaryMd} />
        </details>
      </section>
    </div>
  );
}
