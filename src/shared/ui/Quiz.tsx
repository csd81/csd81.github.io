import { useState, type ReactNode } from 'react';
import katex from 'katex';
import { Math } from './Math';
import { useLang, type Bi } from '../providers/LanguageProvider';

/** Render a string with $...$ inline math via KaTeX. */
function Inline({ text }: { text: string }): ReactNode {
  if (!text.includes('$')) return text;
  const parts: ReactNode[] = [];
  const re = /\$([^$]+)\$/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let k = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index));
    try {
      const html = katex.renderToString(m[1], { throwOnError: false });
      parts.push(<span key={k++} dangerouslySetInnerHTML={{ __html: html }} />);
    } catch {
      parts.push(m[0]);
    }
    last = re.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export interface QuizQuestion {
  id: string;
  /** prompt may be bilingual or a plain string */
  prompt: Bi | string;
  /** optional display formula shown under the prompt */
  tex?: string;
  options: (Bi | string)[];
  answer: number;
  explanation?: Bi | string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
  /** called with (correct, total) when the user submits */
  onScore?: (correct: number, total: number) => void;
}

const STRINGS = {
  title: { en: 'Quick check', hu: 'Gyors kérdés' },
  submit: { en: 'Submit', hu: 'Beküldés' },
  retry: { en: 'Try again', hu: 'Újra' },
  score: { en: 'Score', hu: 'Eredmény' },
  correct: { en: 'Correct', hu: 'Helyes' },
  incorrect: { en: 'Incorrect', hu: 'Helytelen' },
  explanation: { en: 'Explanation', hu: 'Magyarázat' },
} satisfies Record<string, Bi>;

/** Self-contained multiple-choice quiz with bilingual content and per-attempt scoring. */
export function Quiz({ questions, title, onScore }: QuizProps) {
  const { t } = useLang();
  const [picked, setPicked] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const tx = (v: Bi | string) => (typeof v === 'string' ? v : t(v));
  const correctCount = questions.filter((q) => picked[q.id] === q.answer).length;

  const submit = () => {
    setSubmitted(true);
    onScore?.(correctCount, questions.length);
  };
  const retry = () => {
    setPicked({});
    setSubmitted(false);
  };

  return (
    <section className="quiz card">
      <h3 className="quiz__title">🎯 {title ?? t(STRINGS.title)}</h3>
      <ol className="quiz__list">
        {questions.map((q, qi) => {
          const sel = picked[q.id];
          return (
            <li key={q.id} className="quiz__q">
              <p className="quiz__prompt">
                <span className="quiz__num">{qi + 1}.</span> <Inline text={tx(q.prompt)} />
              </p>
              {q.tex && (
                <div className="quiz__tex">
                  <Math tex={q.tex} display />
                </div>
              )}
              <div className="quiz__options">
                {q.options.map((opt, oi) => {
                  const isPicked = sel === oi;
                  const isCorrect = oi === q.answer;
                  let state = '';
                  if (submitted) {
                    if (isCorrect) state = 'is-correct';
                    else if (isPicked) state = 'is-wrong';
                    else state = 'is-dim';
                  } else if (isPicked) state = 'is-picked';
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      className={`quiz__opt ${state}`}
                      onClick={() => setPicked((p) => ({ ...p, [q.id]: oi }))}
                    >
                      <Inline text={tx(opt)} />
                    </button>
                  );
                })}
              </div>
              {submitted && q.explanation && (
                <p className={`quiz__explain ${sel === q.answer ? 'is-correct' : 'is-wrong'}`}>
                  <strong>{sel === q.answer ? t(STRINGS.correct) : t(STRINGS.incorrect)}</strong> —{' '}
                  {t(STRINGS.explanation)}: <Inline text={tx(q.explanation)} />
                </p>
              )}
            </li>
          );
        })}
      </ol>
      <div className="quiz__actions">
        {!submitted ? (
          <button
            className="btn btn--primary"
            onClick={submit}
            disabled={Object.keys(picked).length < questions.length}
          >
            {t(STRINGS.submit)}
          </button>
        ) : (
          <>
            <span className="quiz__result">
              {t(STRINGS.score)}: {correctCount}/{questions.length}
            </span>
            <button className="btn" onClick={retry}>
              {t(STRINGS.retry)}
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Quiz;
