import type { ReactNode } from "react";
import { useLang } from "../contexts/LanguageContext";
import type { SectionMeta } from "./registry";
import { GlossaryDeck, FlashcardDeck } from "../components/Decks";
import { MarkdownView } from "../../../shared/ui/MarkdownView";
import { CodeTabs } from "../../../shared/ui/CodeTabs";
import { getTheory } from "../content/theory";
import { getCodeFor } from "../content/code";
import { Quiz } from "../../../shared/ui/Quiz";
import { getQuiz } from "../content/quiz";

export default function SectionShell({
  meta,
  children,
}: {
  meta: SectionMeta;
  children: ReactNode;
}) {
  const { t, lang } = useLang();
  const theory = getTheory(meta.id, lang);
  const code = getCodeFor(meta.id);
  const quiz = getQuiz(meta.id);
  return (
    <section className="section" id={meta.id}>
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">
            {t({ en: "Section", hu: "Szakasz" })} {meta.no}
          </span>
          <h2>{t(meta.title)}</h2>
          <p>{t(meta.blurb)}</p>
        </div>
        {children}
        {theory && (
          <details className="section__theory" open>
            <summary>{t({ en: "Full theory", hu: "Teljes elmélet" })}</summary>
            <MarkdownView markdown={theory} />
          </details>
        )}
        {code.map((c) => (
          <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
        ))}
        <GlossaryDeck deck={meta.id} />
        <FlashcardDeck deck={meta.id} />
        {quiz.length > 0 && <Quiz questions={quiz} />}
      </div>
    </section>
  );
}
