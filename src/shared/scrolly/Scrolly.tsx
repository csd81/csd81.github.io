import { useScrollama } from './useScrollama';
import type { ScrollyStep } from './types';

interface Props {
  steps: ScrollyStep[];
  /** renders the sticky graphic for the currently-active step index */
  graphic: (active: number) => React.ReactNode;
}

/**
 * Two-column scrollytelling: a sticky graphic on the left whose appearance is
 * driven by the active step on the right. On narrow screens the graphic pins to
 * the top and the steps scroll beneath it (handled in scrolly.css).
 */
export function Scrolly({ steps, graphic }: Props) {
  const { active, register } = useScrollama(steps.length);

  return (
    <div className="scrolly">
      <div className="scrolly__sticky">
        <div className="scrolly__graphic">{graphic(active)}</div>
      </div>
      <div className="scrolly__steps">
        {steps.map((s, i) => (
          <article
            key={i}
            ref={register(i)}
            data-step={i}
            className={`step${i === active ? ' is-active' : ''}`}
          >
            {s.kicker && <div className="step__num">{s.kicker}</div>}
            {s.title && <h3>{s.title}</h3>}
            <div>{s.body}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Scrolly;
