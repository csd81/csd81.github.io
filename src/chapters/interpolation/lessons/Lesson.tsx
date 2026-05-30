import { Tex } from "../components/Math";
import Playground from "../components/Playground";
import type { Method, Pt } from "../mathcore";
import type { Strings } from "../i18n/strings";

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
  const L = str.lessons[method as keyof Strings["lessons"]];
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
    </article>
  );
}
