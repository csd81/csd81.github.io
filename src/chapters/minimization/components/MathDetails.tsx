import type { ReactNode } from "react";
import { useLang } from "../contexts/LanguageContext";

interface Props {
  children: ReactNode;
  /** optional custom summary label; defaults to "Show the math" / "Mutasd a matekot" */
  label?: { en: string; hu: string };
}

/** Collapsible "show the math" disclosure for theorems / proofs / derivations. */
export default function MathDetails({ children, label }: Props) {
  const { t } = useLang();
  const text = label ?? { en: "Show the math", hu: "Mutasd a matekot" };
  return (
    <details className="mathdetails">
      <summary>
        <span className="chev">▶</span>
        <span>∑ {t(text)}</span>
      </summary>
      <div className="mathdetails__body">{children}</div>
    </details>
  );
}
