import { useState } from 'react';
import { F } from '../../lib/fraction';
import { useI18n } from '../../app/LanguageContext';
import { quizzes, type QuizItem } from '../../content/quizzes';
import { Tex } from '../math/Tex';

function fracEq(a: string, b: string): boolean {
  try {
    return F(a.trim()).equals(F(b.trim()));
  } catch {
    return false;
  }
}

function checkAnswer(item: QuizItem, state: AnswerState): boolean {
  switch (item.kind) {
    case 'choice':
      return state.choice === item.answer;
    case 'truefalse':
      return state.bool === item.answer;
    case 'numeric':
      return fracEq(state.text ?? '', item.answer);
    case 'vector': {
      const parts = (state.text ?? '').split(/[,\s]+/).filter(Boolean);
      if (parts.length !== item.answer.length) return false;
      return parts.every((p, i) => fracEq(p, item.answer[i]));
    }
  }
}

interface AnswerState {
  choice?: number;
  bool?: boolean;
  text?: string;
}

function QuizCard({
  item,
  onAnswered,
}: {
  item: QuizItem;
  onAnswered: (correct: boolean) => void;
}) {
  const { t, pick } = useI18n();
  const [state, setState] = useState<AnswerState>({});
  const [checked, setChecked] = useState(false);
  const [showSol, setShowSol] = useState(false);

  const correct = checked && checkAnswer(item, state);

  function doCheck() {
    setChecked(true);
    onAnswered(checkAnswer(item, state));
  }

  return (
    <div className="card stack">
      <div>
        <span className="section-eyebrow">{t('quiz.title')}</span>
        <p style={{ marginBottom: 6 }}>{pick(item.prompt)}</p>
        {item.tex && <Tex tex={item.tex} block />}
      </div>

      {item.kind === 'choice' && (
        <div className="choices">
          {item.choices.map((c, i) => {
            let cls = 'choice';
            if (state.choice === i) cls += ' selected';
            if (checked && i === item.answer) cls += ' correct';
            if (checked && state.choice === i && i !== item.answer) cls += ' wrong';
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !checked && setState({ choice: i })}
                disabled={checked}
              >
                {pick(c)}
              </button>
            );
          })}
        </div>
      )}

      {item.kind === 'truefalse' && (
        <div className="seg">
          <button
            className={state.bool === true ? 'active' : ''}
            onClick={() => !checked && setState({ bool: true })}
          >
            {t('quiz.true')}
          </button>
          <button
            className={state.bool === false ? 'active' : ''}
            onClick={() => !checked && setState({ bool: false })}
          >
            {t('quiz.false')}
          </button>
        </div>
      )}

      {(item.kind === 'numeric' || item.kind === 'vector') && (
        <input
          type="text"
          placeholder={
            item.kind === 'vector' ? 'x₁, x₂, …' : t('quiz.placeholder')
          }
          value={state.text ?? ''}
          onChange={(e) => setState({ text: e.target.value })}
          disabled={checked}
          style={{ maxWidth: 280 }}
        />
      )}

      <div className="row">
        {!checked ? (
          <button className="btn" onClick={doCheck}>
            {t('quiz.check')}
          </button>
        ) : (
          <span className={correct ? 'feedback ok' : 'feedback err'}>
            {correct ? t('quiz.correct') : t('quiz.incorrect')}
          </span>
        )}
        <button className="btn secondary" onClick={() => setShowSol((s) => !s)}>
          {showSol ? t('quiz.hideSolution') : t('quiz.showSolution')}
        </button>
      </div>

      {showSol && <div className="caption">{pick(item.solution)}</div>}
    </div>
  );
}

export function QuizRunner() {
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const [results, setResults] = useState<Record<number, boolean>>({});

  const item = quizzes[idx];
  const score = Object.values(results).filter(Boolean).length;

  return (
    <div className="stack">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <span className="muted">{t('quiz.questionOf', { a: idx + 1, b: quizzes.length })}</span>
        <span className="pill">
          {t('quiz.score')}: {score} / {Object.keys(results).length}
        </span>
      </div>

      <QuizCard
        key={item.id}
        item={item}
        onAnswered={(correct) => setResults((r) => ({ ...r, [idx]: correct }))}
      />

      <div className="row">
        <button
          className="icon-btn"
          onClick={() => setIdx((i) => Math.max(0, i - 1))}
          disabled={idx === 0}
        >
          ◀ {t('quiz.prev')}
        </button>
        <button
          className="icon-btn"
          onClick={() => setIdx((i) => Math.min(quizzes.length - 1, i + 1))}
          disabled={idx === quizzes.length - 1}
        >
          {t('quiz.next')} ▶
        </button>
      </div>
    </div>
  );
}
