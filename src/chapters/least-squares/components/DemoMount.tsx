import { useEffect, useRef } from 'react';
import { MarkdownView } from '../../../shared/ui/MarkdownView';
import { mountLineDemo } from '../demos/lineDemo.js';
import { mountPolynomialDemo } from '../demos/polynomialDemo.js';
import { mountNonlinearDemo } from '../demos/nonlinearDemo.js';

type Mounter = (host: HTMLElement) => (() => void) | void;
const MOUNTERS: Record<string, Mounter> = {
  line: mountLineDemo,
  polynomial: mountPolynomialDemo,
  nonlinear: mountNonlinearDemo,
};

/**
 * React wrapper that mounts one of the chapter's (imperative) Plotly demos into
 * a ref'd host and tears it down on unmount. The demos keep their own
 * lang/theme subscriptions, so they redraw when the shared toggles change.
 */
export function DemoMount({ component, caption }: { component: string; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host) return;
    const teardown = MOUNTERS[component]?.(host);
    return () => {
      if (typeof teardown === 'function') teardown();
    };
  }, [component]);
  return (
    <figure className="demo-figure">
      <div className="demo-host" ref={ref} />
      {caption && (
        <figcaption>
          <MarkdownView markdown={caption} />
        </figcaption>
      )}
    </figure>
  );
}
