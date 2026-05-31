import { Tex } from "../components/Math";
import Playground from "../components/Playground";
import { GlossaryDeck, FlashcardDeck } from "../components/Decks";
import type { Method, Pt } from "../mathcore";
import type { Strings } from "../i18n/strings";
import { useLang } from "../../../shared/providers/LanguageProvider";
import { MarkdownView } from "../../../shared/ui/MarkdownView";
import { CodeTabs } from "../../../shared/ui/CodeTabs";
import { Quiz } from "../../../shared/ui/Quiz";
import { getTheory } from "../content/theory";
import { getMethodCode } from "../content/code";
import { getQuiz } from "../content/quiz";

interface LessonProps {
  str: Strings;
  method: Method;
  points: Pt[];
  derivatives?: number[];
  allowCompare?: boolean;
  showTable?: boolean;
  enableDerivatives?: boolean;
}

export default function Lesson({
  str,
  method,
  points,
  derivatives,
  allowCompare,
  showTable,
  enableDerivatives,
}: LessonProps) {
  const { lang } = useLang();
  const L = str.lessons[method as keyof Strings["lessons"]];
  const theory = getTheory(method, lang);
  const code = getMethodCode(method);
  return (
    <article className="lesson">
      <header>
        <h2>{L.title}</h2>
        <p className="intro">{L.intro}</p>
      </header>

      <section className="theorem-card">
        <div className="theorem-tag">{L.theoremTitle}</div>
        <Tex block>{L.theorem}</Tex>
        <p>{L.body}</p>
      </section>

      {theory && (
        <details className="lesson__theory" open>
          <summary>{lang === "hu" ? "Elmélet" : "Theory"}</summary>
          <MarkdownView markdown={theory} />
        </details>
      )}

      {code.map((c) => (
        <CodeTabs key={c.id} snippets={c.snippets} caption={c.caption} />
      ))}

      {getQuiz(method).length > 0 && <Quiz questions={getQuiz(method)} />}

      <p className="tryit">👉 {L.tryIt}</p>

      <Playground
        str={str}
        initialPoints={points}
        initialDerivs={derivatives}
        primary={method}
        allowCompare={allowCompare}
        showTable={showTable}
        enableDerivatives={enableDerivatives}
      />

      <GlossaryDeck deck={method} />
      <FlashcardDeck deck={method} />
    </article>
  );
}
