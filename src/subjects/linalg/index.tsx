import { useMemo, type CSSProperties } from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useLang, type Bi, type Lang } from '../../shared/providers/LanguageProvider';
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
  chapters: { en: 'Chapters', hu: 'Fejezetek' },
  notFound: { en: 'Document not found.', hu: 'A dokumentum nem található.' },
  chapterNotFound: { en: 'Chapter not found.', hu: 'A fejezet nem található.' },
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

type LoadedDoc = NonNullable<ReturnType<typeof docById>>;
const isBook = (d: LoadedDoc | undefined): d is LoadedDoc & { srcHu: string } => !!d?.srcHu;

/* ── Chapter splitting (book parts → chapters, à la /calc) ──────────────── */

interface Chapter { key: string; num: number | null; title: string; sections: string[]; body: string; }

/** A numbered chapter heading: `# 1. Vektorok`, `# 10. Szinguláris érték`. */
const CH_RE = /^#\s+(\d+)\.\s+(.+?)\s*$/;
/** Unnumbered back-matter headings (kept as their own chapter cards). */
const BACKMATTER: Record<string, string> = {
  'Irodalomjegyzék': 'irodalomjegyzek', 'Tárgymutató': 'targymutato',
  'Bibliography': 'bibliography', 'Index': 'index',
};

function chapterHead(line: string): { num: number | null; title: string; key: string } | null {
  const m = line.match(CH_RE);
  if (m) return { num: parseInt(m[1], 10), title: m[2].trim(), key: m[1] };
  const h = line.match(/^#\s+(.+?)\s*$/);
  const t = h?.[1].trim();
  if (t && BACKMATTER[t]) return { num: null, title: t, key: BACKMATTER[t] };
  return null;
}

/**
 * Split a book part on its chapter headings. The book/part title and any
 * pre-chapter preamble (part intro) are dropped; each chapter's `sections` are
 * its `##` headings (a card table of contents).
 */
function splitChapters(md: string): Chapter[] {
  if (!md) return [];
  const lines = md.split('\n');
  const starts: number[] = [];
  lines.forEach((l, i) => { if (chapterHead(l)) starts.push(i); });
  return starts.map((start, k) => {
    const end = k + 1 < starts.length ? starts[k + 1] : lines.length;
    const info = chapterHead(lines[start])!;
    const body = lines.slice(start + 1, end).join('\n').trim();
    const sections = body.split('\n')
      .map((l) => l.match(/^##\s+(.+?)\s*$/)?.[1]?.trim())
      .filter((s): s is string => !!s);
    return { key: info.key, num: info.num, title: info.title, sections, body };
  });
}

/** Active-language chapters: HU is canonical; in EN use the translated chapter
 *  (numbered ones matched by number, unnumbered back-matter matched in order)
 *  while keeping the HU `key` so routes stay stable across a language toggle.
 *  Falls back to the HU chapter where no translation exists. */
function chaptersFor(hu: Chapter[], en: Chapter[], lang: Lang): Chapter[] {
  if (lang !== 'en' || en.length === 0) return hu;
  const enByNum = new Map(en.filter((e) => e.num != null).map((e) => [e.num, e]));
  const enExtra = en.filter((e) => e.num == null);
  let ei = 0;
  return hu.map((h) => {
    const e = h.num != null ? enByNum.get(h.num) : enExtra[ei++];
    return e ? { ...e, key: h.key } : h;
  });
}

const chDisplay = (c: Chapter) => (c.num != null ? `${c.num}. ${c.title}` : c.title);

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

/** Book part page — a card per chapter, with a `##`-section table of contents. */
function BookView({ doc }: { doc: LoadedDoc & { srcHu: string } }) {
  const { t, lang } = useLang();
  const hu = useMemo(() => splitChapters(doc.markdown), [doc.markdown]);
  const en = useMemo(() => splitChapters(doc.markdownEn ?? ''), [doc.markdownEn]);
  const chapters = chaptersFor(hu, en, lang);
  return (
    <div className="dimat">
      <Link to="/linalg" className="dimat__back">{t(UI.back)}</Link>
      <header className="dimat__topichdr">
        <p className="dimat__kicker">{t(UI.kicker)}</p>
        <h1 className="dimat__title">{doc.title}</h1>
        <p className="dimat__lead">{doc.blurb}</p>
      </header>
      <ul className="ila__grid">
        {chapters.map((c) => (
          <li key={c.key}>
            <Link to={`/linalg/${doc.id}/${c.key}`} className="chcard">
              <span className="chcard__num">{c.num ?? '§'}</span>
              <span className="chcard__body">
                <span className="chcard__title">{chDisplay(c)}</span>
                {c.sections.length > 0 && (
                  <span className="chcard__desc">{c.sections.join(' · ')}</span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Single book chapter, with prev/next navigation. */
function ChapterView() {
  const { id, ch } = useParams();
  const { t, lang } = useLang();
  const doc = useMemo(() => (id ? docById(id) : undefined), [id]);
  const hu = useMemo(() => splitChapters(isBook(doc) ? doc.markdown : ''), [doc]);
  const en = useMemo(() => splitChapters(isBook(doc) ? (doc.markdownEn ?? '') : ''), [doc]);

  if (!isBook(doc)) {
    return (
      <div className="dimat">
        <Link to="/linalg" className="dimat__back">{t(UI.back)}</Link>
        <p className="dimat__lead">{t(UI.notFound)}</p>
      </div>
    );
  }
  const chapters = chaptersFor(hu, en, lang);
  const idx = chapters.findIndex((c) => c.key === ch);
  if (idx < 0) {
    return (
      <div className="dimat">
        <Link to={`/linalg/${doc.id}`} className="dimat__back">← {t(UI.chapters)}</Link>
        <p className="dimat__lead">{t(UI.chapterNotFound)}</p>
      </div>
    );
  }
  const c = chapters[idx];
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];
  return (
    <div className="dimat">
      <Link to={`/linalg/${doc.id}`} className="dimat__back">← {doc.title}</Link>
      <header className="dimat__topichdr">
        <p className="dimat__kicker">{doc.title}</p>
        <h1 className="dimat__title">{chDisplay(c)}</h1>
      </header>
      <MarkdownView markdown={c.body} />
      <nav className="calc-chnav">
        {prev
          ? <Link to={`/linalg/${doc.id}/${prev.key}`} className="dimat__back">← {chDisplay(prev)}</Link>
          : <span />}
        {next
          ? <Link to={`/linalg/${doc.id}/${next.key}`} className="dimat__back">{chDisplay(next)} →</Link>
          : <span />}
      </nav>
    </div>
  );
}

/** `/linalg/:id` — chapter index for book parts, flat document otherwise. */
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

  if (isBook(doc)) return <BookView doc={doc} />;

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
      <Route path=":id/:ch" element={<ChapterView />} />
    </Routes>
  );
}
