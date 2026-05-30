import { useState } from "react";
import { useParams } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";
import { useContent } from "../lib/useContent.js";
import MarkdownView from "../components/MarkdownView.jsx";
import FieldDemo from "../components/FieldDemo.jsx";
import CompareDemo from "../components/CompareDemo.jsx";
import ConvergenceDemo from "../components/ConvergenceDemo.jsx";
import { SECTIONS } from "../sections.js";

const DEMO_COMPONENTS = {
  field: FieldDemo,
  compare: CompareDemo,
  convergence: ConvergenceDemo,
};

export default function Theory() {
  const { sectionId } = useParams();
  const { lang } = useLang();
  const t = useT(lang);
  const [docType, setDocType] = useState("textbook");
  const { doc, error } = useContent(lang, docType);

  const meta = SECTIONS.find((s) => s.id === sectionId);
  const DemoComp = meta && meta.demo ? DEMO_COMPONENTS[meta.demo] : null;

  let section = null;
  if (doc) {
    section = doc.sections.find((s) => s.id === sectionId) || doc.sections[0];
  }

  return (
    <div>
      <div className="controls" style={{ justifyContent: "flex-end" }}>
        <div className="field">
          <label>{t.docType}</label>
          <div className="toggle-group">
            <button className={`btn ${docType === "textbook" ? "active" : ""}`} onClick={() => setDocType("textbook")}>
              {t.textbook}
            </button>
            <button className={`btn ${docType === "slides" ? "active" : ""}`} onClick={() => setDocType("slides")}>
              {t.slides}
            </button>
          </div>
        </div>
      </div>

      {error && <div className="err-banner">⚠ {error}</div>}
      {!doc && !error && <div className="loading">…</div>}
      {section && <MarkdownView markdown={section.markdown} />}

      {DemoComp && <DemoComp presetId="main" />}
    </div>
  );
}
