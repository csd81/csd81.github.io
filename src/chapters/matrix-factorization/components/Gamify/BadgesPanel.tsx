import { motion } from "framer-motion";
import { useT } from "../../i18n/useT";
import { useAppStore } from "../../store/useAppStore";
import { BADGES, overallProgress } from "./badges";
import { ProgressRing } from "./ProgressRing";
import "./badges.css";

export function BadgesPanel() {
  const { t, tb } = useT();
  const progress = useAppStore((s) => s.progress);
  const reset = useAppStore((s) => s.resetProgress);

  const earnedCount = BADGES.filter((b) => b.earned(progress)).length;

  return (
    <div className="badges card">
      <div className="badges__head">
        <ProgressRing value={overallProgress(progress)} size={56} stroke={6} />
        <div>
          <h3 style={{ margin: 0 }}>{t("badges")}</h3>
          <p style={{ margin: "0.2em 0 0", color: "var(--text-faint)", fontSize: "0.85rem" }}>
            {earnedCount} / {BADGES.length}
          </p>
        </div>
        <button className="btn sm ghost" style={{ marginLeft: "auto" }} onClick={reset}>
          {t("reset_progress")}
        </button>
      </div>

      <div className="badges__grid">
        {BADGES.map((b) => {
          const earned = b.earned(progress);
          return (
            <motion.div
              key={b.id}
              className={`badge${earned ? " is-earned" : ""}`}
              initial={false}
              animate={earned ? { scale: [1, 1.12, 1] } : {}}
              transition={{ duration: 0.5 }}
              title={tb(b.desc)}
            >
              <span className="badge__icon">{earned ? b.icon : "🔒"}</span>
              <span className="badge__name">{tb(b.name)}</span>
              <span className="badge__desc">{tb(b.desc)}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
