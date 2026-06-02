import { useEffect, useMemo, useState } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang } from '../shared/providers/LanguageProvider';
import { MarkdownView } from '../shared/ui/MarkdownView';
import { normalizeMath } from '../shared/ui/normalizeMath';
import {
  rehypePracticeBoxes, rehypeConceptEm, practiceBoxComponents, prepareStudyGuide,
} from '../shared/ui/practiceBoxes';
import { CHAPTERS } from '../chapters/registry';
import { TOPICS } from './practice/content';
import { CHEATSHEETS } from './practice/cheatsheets';
import {
  subsectionsFor, subsectionBySlug, GUIDE_CHAPTERS,
  chapterBook, chapterSlides, hasBook, hasSlides, type Flashcard,
} from './practice/guides';
import { videoFor } from './practice/guides/videos';
import glossaryMd from './practice/glossary.md?raw';
import './practice/practice.css';

/** Copy-to-clipboard button for a box's Markdown/LaTeX source (à la the Szalkai
 *  calc boxes). Stops the click from toggling the surrounding <details>. */
function CopyButton({ source }: { source: string }) {
  const { lang } = useLang();
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="practice__copy"
      title={lang === 'hu' ? 'Forrás másolása (Markdown/LaTeX)' : 'Copy source (Markdown/LaTeX)'}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard?.writeText(source).then(
          () => { setDone(true); setTimeout(() => setDone(false), 1200); },
          () => {},
        );
      }}
    >
      {done ? (lang === 'hu' ? '✓ másolva' : '✓ copied') : '⧉ LaTeX'}
    </button>
  );
}

/** The /practice landing page: study-guide chapter cards + cheatsheets,
 *  worked examples and the glossary. */
function PracticeHome() {
  const { t, lang } = useLang();
  return (
    <div className="practice">
      <header className="practice__hero">
        <p className="practice__kicker">{lang === 'hu' ? 'Gyakorlat' : 'Practice'}</p>
        <h1>{lang === 'hu' ? 'Vizsgafelkészülés' : 'Exam preparation'}</h1>
        <p className="practice__lead">
          {lang === 'hu'
            ? 'Tananyagok és összefoglalók fejezetenként, vizsga-puskák, kidolgozott példák és fogalomtár egy helyen.'
            : 'Per-chapter study guides and summaries, exam cheatsheets, worked examples and a glossary in one place.'}
        </p>
        <nav className="practice__toc">
          <a href="#guides">{lang === 'hu' ? 'Tananyagok' : 'Study guides'}</a>
          <a href="#cheatsheets">{lang === 'hu' ? 'Puskák' : 'Cheatsheets'}</a>
          <a href="#examples">{lang === 'hu' ? 'Kidolgozott példák' : 'Worked examples'}</a>
          <a href="#glossary">{lang === 'hu' ? 'Fogalomtár' : 'Glossary'}</a>
        </nav>
      </header>

      <section className="practice__section" id="guides">
        <h2 className="practice__h2">
          {lang === 'hu' ? '📚 Tananyagok és összefoglalók' : '📚 Study guides & summaries'}
        </h2>
        <p className="practice__lead">
          {lang === 'hu'
            ? 'Válassz fejezetet, majd alfejezetet — minden alfejezethez egy rövid összefoglaló és egy részletes tananyag tartozik.'
            : 'Pick a chapter, then a subsection — each has a short summary and a detailed study guide.'}
        </p>
        <ul className="home__grid">
          {CHAPTERS.filter((c) => GUIDE_CHAPTERS.includes(c.num)).map((c) => (
            <li key={c.num}>
              <Link to={`/practice/guide/${c.num}`} className="chcard">
                <span className="chcard__num">{String(c.num).padStart(2, '0')}</span>
                <span className="chcard__body">
                  <span className="chcard__title">{t(c.title)}</span>
                  <span className="chcard__blurb">
                    {subsectionsFor(c.num).length} {lang === 'hu' ? 'alfejezet' : 'subsections'}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="practice__section" id="cheatsheets">
        <h2 className="practice__h2">
          {lang === 'hu' ? '📌 Vizsga-puskák (must-know)' : '📌 Exam cheatsheets (must-know)'}
        </h2>
        {CHEATSHEETS.map((c, i) => (
          <details className="practice__example" key={i} open>
            <summary>
              <span className="practice__example-title">{`${i + 1}. ${t(c.title)}`}</span>
              <CopyButton source={t(c.body)} />
            </summary>
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
                <summary>
                  <span className="practice__example-title">{t(it.label)}</span>
                  <CopyButton source={t(it.body)} />
                </summary>
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
            <span className="practice__example-title">
              {lang === 'hu' ? 'Numerikus analízis fogalomtár (A–Z)' : 'Numerical analysis glossary (A–Z)'}
            </span>
            <CopyButton source={glossaryMd} />
          </summary>
          <MarkdownView markdown={glossaryMd} />
        </details>
      </section>
    </div>
  );
}

/** Lecture-video player for a subsection (YouTube embed or native <video>).
 *  Renders nothing until a URL is registered in guides/videos.ts. */
function SubVideo({ base }: { base: string }) {
  const { lang } = useLang();
  const url = videoFor(base);
  if (!url) return null;
  const yt = url.startsWith('yt:') ? url.slice(3) : null;
  return (
    <section className="practice__guide-block">
      <div className="practice__guide-head">
        <h2 className="practice__h2">{lang === 'hu' ? '🎬 Videó' : '🎬 Video'}</h2>
      </div>
      <div className="subvideo">
        {yt ? (
          <iframe
            className="subvideo__frame"
            src={`https://www.youtube-nocookie.com/embed/${yt}`}
            title={lang === 'hu' ? 'Előadásvideó' : 'Lecture video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="subvideo__el" controls preload="metadata" src={url} />
        )}
      </div>
    </section>
  );
}

/** Flip-card self-test deck (front/back rendered with KaTeX). */
function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const { lang } = useLang();
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const go = (next: number) => {
    setPos((p) => Math.min(Math.max(p + next, 0), cards.length - 1));
    setRevealed(false);
  };
  const shuffle = () => {
    const o = [...order];
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [o[i], o[j]] = [o[j], o[i]];
    }
    setOrder(o); setPos(0); setRevealed(false);
  };
  const reset = () => { setOrder(cards.map((_, i) => i)); setPos(0); setRevealed(false); };

  const card = cards[order[pos]];

  return (
    <div className="flashcards">
      <div className="flashcards__bar">
        <span className="flashcards__count">{pos + 1} / {cards.length}</span>
        <CopyButton source={`${card.front}\n\n---\n\n${card.back}`} />
        <span className="flashcards__spacer" />
        <button type="button" className="flashcards__btn" onClick={shuffle}>
          {lang === 'hu' ? '🔀 Keverés' : '🔀 Shuffle'}
        </button>
        <button type="button" className="flashcards__btn" onClick={reset}>
          {lang === 'hu' ? 'Eredeti sorrend' : 'Reset'}
        </button>
      </div>

      <button
        type="button"
        className={`flashcard${revealed ? ' flashcard--back' : ''}`}
        onClick={() => setRevealed((r) => !r)}
      >
        <span className="flashcard__tag">
          {revealed ? (lang === 'hu' ? 'Válasz' : 'Answer') : (lang === 'hu' ? 'Kérdés' : 'Question')}
        </span>
        <div className="flashcard__face">
          <MarkdownView markdown={revealed ? card.back : card.front} />
        </div>
        <span className="flashcard__hint">
          {revealed
            ? (lang === 'hu' ? 'Kattints a kérdéshez' : 'Tap for question')
            : (lang === 'hu' ? 'Kattints a válaszért' : 'Tap to reveal')}
        </span>
      </button>

      <div className="flashcards__nav">
        <button type="button" className="flashcards__btn" onClick={() => go(-1)} disabled={pos === 0}>
          ‹ {lang === 'hu' ? 'Előző' : 'Prev'}
        </button>
        <button type="button" className="flashcards__btn" onClick={() => setRevealed((r) => !r)}>
          {revealed ? (lang === 'hu' ? 'Kérdés' : 'Question') : (lang === 'hu' ? 'Válasz' : 'Answer')}
        </button>
        <button type="button" className="flashcards__btn" onClick={() => go(1)} disabled={pos === cards.length - 1}>
          {lang === 'hu' ? 'Következő' : 'Next'} ›
        </button>
      </div>
    </div>
  );
}

/** Subsection chooser for one chapter. */
function ChapterGuide() {
  const { t, lang } = useLang();
  const { ch } = useParams();
  const chapter = Number(ch);
  const meta = CHAPTERS.find((c) => c.num === chapter);
  const subs = subsectionsFor(chapter);

  if (!meta || subs.length === 0) {
    return (
      <div className="practice">
        <Link to="/practice" className="practice__back">← {lang === 'hu' ? 'Gyakorlat' : 'Practice'}</Link>
        <p className="practice__lead">{lang === 'hu' ? 'A fejezet nem található.' : 'Chapter not found.'}</p>
      </div>
    );
  }

  return (
    <div className="practice">
      <Link to="/practice#guides" className="practice__back">
        ← {lang === 'hu' ? 'Tananyagok' : 'Study guides'}
      </Link>
      <header className="practice__hero practice__hero--compact">
        <p className="practice__kicker">
          {lang === 'hu' ? `${chapter}. fejezet` : `Chapter ${chapter}`}
        </p>
        <h1>{t(meta.title)}</h1>
        <p className="practice__lead">{t(meta.blurb)}</p>
      </header>

      {(hasBook(chapter) || hasSlides(chapter)) && (
        <ul className="home__grid">
          {hasBook(chapter) && (
            <li>
              <Link to={`/practice/guide/${chapter}/book`} className="chcard">
                <span className="chcard__num">📖</span>
                <span className="chcard__body">
                  <span className="chcard__title">{lang === 'hu' ? 'Teljes fejezet' : 'Full chapter'}</span>
                  <span className="chcard__blurb">
                    {lang === 'hu' ? 'A tankönyv teljes fejezete' : 'The complete textbook chapter'}
                  </span>
                </span>
              </Link>
            </li>
          )}
          {hasSlides(chapter) && (
            <li>
              <Link to={`/practice/guide/${chapter}/slides`} className="chcard">
                <span className="chcard__num">🖥️</span>
                <span className="chcard__body">
                  <span className="chcard__title">{lang === 'hu' ? 'Diák' : 'Slides'}</span>
                  <span className="chcard__blurb">
                    {lang === 'hu' ? 'Előadásdiák (Hartung Ferenc)' : 'Lecture slides (Ferenc Hartung)'}
                  </span>
                </span>
              </Link>
            </li>
          )}
        </ul>
      )}

      <h2 className="practice__h2" style={{ marginTop: '1.6rem' }}>
        {lang === 'hu' ? 'Alfejezetek' : 'Subsections'}
      </h2>
      <ul className="home__grid">
        {subs.map((s) => (
          <li key={s.slug}>
            <Link to={`/practice/guide/${chapter}/${s.slug}`} className="chcard">
              <span className="chcard__num">{s.number}</span>
              <span className="chcard__body">
                <span className="chcard__title">{s.title}</span>
                <span className="chcard__blurb">
                  {lang === 'hu' ? 'Összefoglaló + tananyag' : 'Summary + study guide'}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** One subsection: its short summary (HU) and study guide (EN). */
function SubsectionGuide() {
  const { lang } = useLang();
  const { ch, sub } = useParams();
  const chapter = Number(ch);
  const subs = subsectionsFor(chapter);
  const idx = subs.findIndex((s) => s.slug === sub);
  const s = sub ? subsectionBySlug(chapter, sub) : undefined;

  if (!s) {
    return (
      <div className="practice">
        <Link to={`/practice/guide/${chapter}`} className="practice__back">
          ← {lang === 'hu' ? 'Alfejezetek' : 'Subsections'}
        </Link>
        <p className="practice__lead">{lang === 'hu' ? 'Az alfejezet nem található.' : 'Subsection not found.'}</p>
      </div>
    );
  }

  const prev = subs[idx - 1];
  const next = subs[idx + 1];

  return (
    <div className="practice">
      <Link to={`/practice/guide/${chapter}`} className="practice__back">
        ← {lang === 'hu' ? 'Alfejezetek' : 'Subsections'}
      </Link>
      <header className="practice__hero practice__hero--compact">
        <p className="practice__kicker">{lang === 'hu' ? `${chapter}. fejezet` : `Chapter ${chapter}`}</p>
        <h1>{s.number}. {s.title}</h1>
      </header>

      <section className="practice__guide-block">
        <div className="practice__guide-head">
          <h2 className="practice__h2">{lang === 'hu' ? '⚡ Rövid összefoglaló' : '⚡ Short summary'}</h2>
          <CopyButton source={lang === 'en' && s.shortEn ? s.shortEn : s.short} />
        </div>
        <MarkdownView
          markdown={lang === 'en' && s.shortEn ? s.shortEn : s.short}
          rehypePlugins={[rehypeConceptEm]}
        />
      </section>

      {(() => {
        const book = lang === 'hu' ? (s.subBookHu || s.subBookEn) : (s.subBookEn || s.subBookHu);
        return book ? (
          <section className="practice__guide-block">
            <div className="practice__guide-head">
              <h2 className="practice__h2">{lang === 'hu' ? '📖 Tankönyv' : '📖 Textbook'}</h2>
              <CopyButton source={book} />
            </div>
            <BoxedMarkdown md={book} />
          </section>
        ) : null;
      })()}

      {(() => {
        const deck = lang === 'hu' ? (s.subSlidesHu || s.subSlidesEn) : (s.subSlidesEn || s.subSlidesHu);
        return deck ? (
          <section className="practice__guide-block">
            <div className="practice__guide-head">
              <h2 className="practice__h2">{lang === 'hu' ? '🖥️ Diák' : '🖥️ Slides'}</h2>
            </div>
            <SlideDeck markdown={deck} />
          </section>
        ) : null;
      })()}

      <section className="practice__guide-block">
        <div className="practice__guide-head">
          <h2 className="practice__h2">{lang === 'hu' ? '📘 Tananyag' : '📘 Study guide'}</h2>
          {s.study.trim() && <CopyButton source={s.study} />}
        </div>
        {s.study.trim() ? (
          <BoxedMarkdown md={prepareStudyGuide(s.study)} />
        ) : (
          <p className="practice__muted">
            {lang === 'hu' ? 'Ehhez az alfejezethez még nincs tananyag.' : 'No study guide for this subsection yet.'}
          </p>
        )}
      </section>

      {s.flashcards.length > 0 && (
        <section className="practice__guide-block">
          <div className="practice__guide-head">
            <h2 className="practice__h2">{lang === 'hu' ? '🃏 Tanulókártyák' : '🃏 Flashcards'}</h2>
          </div>
          <FlashcardDeck cards={s.flashcards} />
        </section>
      )}

      <SubVideo base={s.base} />

      <nav className="practice__chnav">
        {prev ? (
          <Link to={`/practice/guide/${chapter}/${prev.slug}`} className="practice__back">← {prev.number} {prev.title}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/practice/guide/${chapter}/${next.slug}`} className="practice__back">{next.number} {next.title} →</Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}

/** Markdown rendered with Szalkai/calculus-style callout boxes (numbered
 *  theorems/defs/examples/list items boxed, each with a copy button) and
 *  coloured concept emphasis. */
function BoxedMarkdown({ md }: { md: string }) {
  const source = useMemo(() => normalizeMath(md), [md]);
  return (
    <MarkdownView
      markdown={md}
      components={practiceBoxComponents}
      rehypePlugins={[[rehypePracticeBoxes, { source }], rehypeConceptEm]}
    />
  );
}

/** Present a slide deck one slide at a time (split on `---` separators). */
function SlideDeck({ markdown }: { markdown: string }) {
  const { lang } = useLang();
  const slides = useMemo(() => {
    // Primary: explicit `---` separators (chapter decks). Fallback: split before
    // each `### ` heading (per-subsection `_sl` decks use `### N. fólia` titles).
    const byRule = markdown.split(/\n-{3,}[ \t]*\n/).map((s) => s.trim()).filter(Boolean);
    if (byRule.length >= 3) return byRule;
    const byH3 = markdown.split(/\n(?=###\s)/).map((s) => s.trim()).filter(Boolean);
    if (byH3.length >= 3) return byH3;
    return byRule.length ? byRule : [markdown.trim()];
  }, [markdown]);
  const [i, setI] = useState(0);
  const clamp = (n: number) => Math.min(Math.max(n, 0), slides.length - 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') setI((n) => clamp(n + 1));
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp') setI((n) => clamp(n - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  if (!slides.length) return null;

  return (
    <div className="slidedeck">
      <div className="slidedeck__stage">
        <MarkdownView className="slidedeck__slide" markdown={slides[i]} />
      </div>
      <div className="slidedeck__nav">
        <button type="button" className="flashcards__btn" onClick={() => setI((n) => clamp(n - 1))} disabled={i === 0}>
          ‹ {lang === 'hu' ? 'Előző' : 'Prev'}
        </button>
        <span className="flashcards__count">{i + 1} / {slides.length}</span>
        <CopyButton source={slides[i]} />
        <button
          type="button"
          className="flashcards__btn"
          onClick={() => setI((n) => clamp(n + 1))}
          disabled={i === slides.length - 1}
        >
          {lang === 'hu' ? 'Következő' : 'Next'} ›
        </button>
      </div>
    </div>
  );
}

/** Full-chapter book text, or the lecture slides, for one chapter. */
function ChapterReader({ kind }: { kind: 'book' | 'slides' }) {
  const { t, lang } = useLang();
  const { ch } = useParams();
  const chapter = Number(ch);
  const meta = CHAPTERS.find((c) => c.num === chapter);
  const md = kind === 'book' ? chapterBook(chapter, lang) : chapterSlides(chapter, lang);

  if (!meta || !md) {
    return (
      <div className="practice">
        <Link to={`/practice/guide/${chapter}`} className="practice__back">
          ← {lang === 'hu' ? 'Vissza' : 'Back'}
        </Link>
        <p className="practice__lead">{lang === 'hu' ? 'A tartalom nem található.' : 'Content not found.'}</p>
      </div>
    );
  }

  const label = kind === 'book'
    ? (lang === 'hu' ? 'Teljes fejezet' : 'Full chapter')
    : (lang === 'hu' ? 'Diák' : 'Slides');

  return (
    <div className="practice">
      <Link to={`/practice/guide/${chapter}`} className="practice__back">← {t(meta.title)}</Link>
      <header className="practice__hero practice__hero--compact">
        <p className="practice__kicker">
          {(lang === 'hu' ? `${chapter}. fejezet` : `Chapter ${chapter}`)} · {label}
        </p>
        <h1>{t(meta.title)}</h1>
      </header>
      {kind === 'slides' ? <SlideDeck markdown={md} /> : <MarkdownView markdown={md} />}
    </div>
  );
}

export default function Practice() {
  return (
    <Routes>
      <Route index element={<PracticeHome />} />
      <Route path="guide/:ch" element={<ChapterGuide />} />
      <Route path="guide/:ch/book" element={<ChapterReader kind="book" />} />
      <Route path="guide/:ch/slides" element={<ChapterReader kind="slides" />} />
      <Route path="guide/:ch/:sub" element={<SubsectionGuide />} />
    </Routes>
  );
}
