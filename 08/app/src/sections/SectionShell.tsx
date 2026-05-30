import type { ReactNode } from "react";
import { useLang } from "../contexts/LanguageContext";
import type { SectionMeta } from "./registry";

export default function SectionShell({
  meta,
  children,
}: {
  meta: SectionMeta;
  children: ReactNode;
}) {
  const { t } = useLang();
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
      </div>
    </section>
  );
}
