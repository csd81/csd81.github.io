import { useEffect, useRef } from "react";
import { useT } from "../i18n/useT";
import { useAppStore } from "../store/useAppStore";
import { Exercise } from "../components/Practice/Exercise";
import { BadgesPanel } from "../components/Gamify/BadgesPanel";
import { exercises } from "../content/exercises";
import { BADGES } from "../components/Gamify/badges";
import { Toast } from "../components/Gamify/Toast";

export function PracticePage() {
  const { t, lang } = useT();
  const progress = useAppStore((s) => s.progress);
  const unlockBadge = useAppStore((s) => s.unlockBadge);

  // detect newly-earned badges and surface a toast
  const toastRef = useRef<(msg: string) => void>(() => {});
  useEffect(() => {
    for (const b of BADGES) {
      if (b.earned(progress) && unlockBadge(b.id)) {
        toastRef.current(`${b.icon} ${t("badge_unlocked")} — ${b.name[lang]}`);
      }
    }
  }, [progress, unlockBadge, t, lang]);

  const lu = exercises.filter((e) => e.group === "lu");
  const ch = exercises.filter((e) => e.group === "cholesky");

  return (
    <div className="page-narrow">
      <h1>{t("nav_practice")}</h1>
      <BadgesPanel />

      <h2>{lang === "en" ? "LU exercises" : "LU feladatok"}</h2>
      {lu.map((e) => (
        <Exercise key={e.id} ex={e} />
      ))}

      <h2>{lang === "en" ? "Cholesky exercises" : "Cholesky feladatok"}</h2>
      {ch.map((e) => (
        <Exercise key={e.id} ex={e} />
      ))}

      <Toast bind={(fn) => (toastRef.current = fn)} />
    </div>
  );
}
