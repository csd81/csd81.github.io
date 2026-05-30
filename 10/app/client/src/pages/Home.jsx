import { Link } from "react-router-dom";
import { useLang } from "../contexts/LanguageContext.jsx";
import { useT } from "../i18n/strings.js";

export default function Home() {
  const { lang } = useLang();
  const t = useT(lang);

  const features = [
    { e: "📐", title: t.feat_field_t, d: t.feat_field_d },
    { e: "📊", title: t.feat_compare_t, d: t.feat_compare_d },
    { e: "📉", title: t.feat_conv_t, d: t.feat_conv_d },
    { e: "✏️", title: t.feat_play_t, d: t.feat_play_d },
  ];

  return (
    <div>
      <div className="hero">
        <h1>{t.home_title}</h1>
        <p>{t.home_lead}</p>
      </div>
      <div className="feature-grid">
        {features.map((f) => (
          <div className="feature" key={f.title}>
            <div className="emoji">{f.e}</div>
            <h4>{f.title}</h4>
            <p>{f.d}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: 28 }}>
        <Link to="/playground" className="btn active" style={{ display: "inline-block" }}>
          {t.open_playground}
        </Link>
      </p>
    </div>
  );
}
