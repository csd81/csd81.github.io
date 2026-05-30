import { useEffect, useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "./registry";
import SectionShell from "./SectionShell";
import Scrolly, { type ScrollyStep } from "../components/Scrolly";
import ContourPlot, { type ContourOverlay } from "../components/plots/ContourPlot";
import ConvergenceChart, { type Series } from "../components/plots/ConvergenceChart";
import { PlayBar, usePlayer } from "../components/controls";
import Tex from "../components/Math";
import MathDetails from "../components/MathDetails";
import { Callout, Theorem } from "../components/Callout";
import { rosen2y } from "../math/functions";
import type { Vec } from "../math/linalg";
import { quasiNewton, type QNUpdate, QN_LABELS } from "../algorithms/quasiNewton";

const meta = SECTIONS.find((s) => s.id === "quasinewton")!;
const START: Vec = [2, 2];
const COLORS: Record<QNUpdate, string> = {
  broyden: "var(--plot-axis)",
  psb: "var(--warm)",
  bfgs: "var(--plot-path)",
  dfp: "var(--plot-path2)",
};

export default function SectionQuasiNewton() {
  const { t } = useLang();
  const [focus, setFocus] = useState<QNUpdate>("bfgs");

  const runs = useMemo(() => {
    const kinds: QNUpdate[] = ["broyden", "psb", "bfgs", "dfp"];
    return Object.fromEntries(
      kinds.map((k) => [k, quasiNewton(rosen2y, START, k, 12)])
    ) as Record<QNUpdate, ReturnType<typeof quasiNewton>>;
  }, []);

  const maxLen = Math.max(...Object.values(runs).map((r) => r.points.length));
  const player = usePlayer(maxLen);
  const stepFrames = [0, 1, 2, maxLen - 1, maxLen - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "The dilemma", hu: "A dilemma" }),
      title: t({ en: "Newton is fast but greedy", hu: "A Newton gyors, de falánk" }),
      body: (
        <p>
          {t({
            en: "Newton converges beautifully — but it demands the exact Hessian and a linear solve every step. In big problems that's too costly. Can we get Newton-like speed without it?",
            hu: "A Newton gyönyörűen konvergál — de pontos Hesse-mátrixot és lineáris megoldást kíván lépésenként. Nagy feladatokban ez túl drága. Megkaphatjuk a Newton-szerű sebességet enélkül?",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The secant idea", hu: "A szelő-ötlet" }),
      title: t({ en: "Learn curvature from steps", hu: "Tanuld a görbületet a lépésekből" }),
      body: (
        <>
          <p>
            {t({
              en: "Keep an approximation A ≈ Hessian and improve it each step so it matches the observed change in gradient: A·s = y, where s = pₖ₊₁−pₖ and y = ∇fₖ₊₁−∇fₖ. That's the secant equation.",
              hu: "Tarts fenn egy A ≈ Hesse közelítést, és javítsd lépésenként úgy, hogy illeszkedjen a gradiens megfigyelt változására: A·s = y, ahol s = pₖ₊₁−pₖ és y = ∇fₖ₊₁−∇fₖ. Ez a szelő-egyenlet.",
            })}
          </p>
          <Callout emoji="🧩">
            {t({
              en: "Different ways to satisfy A·s = y give different updates: Broyden, PSB, BFGS, DFP.",
              hu: "Az A·s = y különböző teljesítési módjai más-más frissítést adnak: Broyden, PSB, BFGS, DFP.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "Keep it nice", hu: "Tartsd szépen" }),
      title: t({ en: "Symmetric & positive definite", hu: "Szimmetrikus és pozitív definit" }),
      body: (
        <p>
          {t({
            en: "A true Hessian is symmetric; near a minimum it's positive definite. PSB enforces symmetry; BFGS and DFP also preserve positive-definiteness, so the step always points downhill.",
            hu: "A valódi Hesse szimmetrikus; minimum közelében pozitív definit. A PSB kikényszeríti a szimmetriát; a BFGS és a DFP a pozitív definitséget is megőrzi, így a lépés mindig lefelé mutat.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The race", hu: "A verseny" }),
      title: t({ en: "Four updates, one valley", hu: "Négy frissítés, egy völgy" }),
      body: (
        <p>
          {t({
            en: "All four start at (2, 2) with a finite-difference Hessian guess. BFGS and DFP plunge nearly as fast as Newton; PSB is close behind; plain Broyden lags. Watch the log-scale chart.",
            hu: "Mind a négy (2, 2)-ből indul, véges differenciás Hesse-becsléssel. A BFGS és a DFP majdnem olyan gyorsan zuhan, mint a Newton; a PSB szorosan mögöttük; az egyszerű Broyden lemarad. Figyeld a log-skálás ábrát.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The winner", hu: "A győztes" }),
      title: t({ en: "Why BFGS rules", hu: "Miért uralkodik a BFGS" }),
      body: (
        <p>
          {t({
            en: "BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) is the workhorse behind most real-world optimizers. There's even a recursion for the inverse, so each step avoids solving a system entirely.",
            hu: "A BFGS (Broyden–Fletcher–Goldfarb–Shanno, 1970) a legtöbb valós optimalizáló igáslova. Az inverzre is van rekurzió, így minden lépés teljesen elkerüli a rendszer megoldását.",
          })}
        </p>
      ),
    },
  ];

  const series: Series[] = (["broyden", "psb", "bfgs", "dfp"] as QNUpdate[]).map(
    (k) => ({
      label: QN_LABELS[k],
      color: COLORS[k],
      errs: runs[k].frames.map((f) => f.err ?? 0),
    })
  );

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={(active) => (
          <QNGraphic
            runs={runs}
            series={series}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
            focus={focus}
            setFocus={setFocus}
            count={maxLen}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "Secant equation", hu: "Szelő-egyenlet" })}>
          <Tex block>{"\\mathbf s^{(k)} = \\mathbf p^{(k+1)} - \\mathbf p^{(k)}, \\quad \\mathbf y^{(k)} = f'(\\mathbf p^{(k+1)}) - f'(\\mathbf p^{(k)}), \\quad A^{(k+1)}\\mathbf s^{(k)} = \\mathbf y^{(k)}."}</Tex>
        </Theorem>
        <Theorem label={t({ en: "BFGS update", hu: "BFGS frissítés" })} proof>
          <Tex block>{"A^{(k+1)} = A^{(k)} + \\frac{\\mathbf y\\mathbf y^{\\mathsf T}}{\\mathbf y^{\\mathsf T}\\mathbf s} - \\frac{A^{(k)}\\mathbf s\\,\\mathbf s^{\\mathsf T}A^{(k)}}{\\mathbf s^{\\mathsf T}A^{(k)}\\mathbf s}."}</Tex>
          <p>
            {t({
              en: "DFP swaps the roles of s and y; PSB is the symmetric correction of Broyden's rank-1 update. All keep A symmetric, and BFGS/DFP keep it positive definite when yᵀs > 0.",
              hu: "A DFP felcseréli s és y szerepét; a PSB a Broyden rang-1 frissítésének szimmetrikus javítása. Mind szimmetrikusan tartja A-t, és a BFGS/DFP pozitív definitnek is, ha yᵀs > 0.",
            })}
          </p>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function QNGraphic({
  runs,
  series,
  player,
  targetFrame,
  focus,
  setFocus,
  count,
}: {
  runs: Record<QNUpdate, ReturnType<typeof quasiNewton>>;
  series: Series[];
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
  focus: QNUpdate;
  setFocus: (k: QNUpdate) => void;
  count: number;
}) {
  const { t } = useLang();
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const i = player.i;
  const run = runs[focus];
  const fi = Math.min(i, run.points.length - 1);
  const overlay: ContourOverlay = {
    paths: [{ pts: run.points.slice(0, fi + 1), color: COLORS[focus] }],
    points: [{ p: run.points[fi], ring: true, color: COLORS[focus] }],
    showMin: true,
  };
  const upTo = series.map((s) => ({ ...s, upTo: i }));

  return (
    <div>
      <ContourPlot fn={rosen2y} overlay={overlay} height={300} />
      <ConvergenceChart series={upTo} height={220} />
      <div className="plot__legend">
        {(["broyden", "psb", "bfgs", "dfp"] as QNUpdate[]).map((k) => (
          <button
            key={k}
            onClick={() => setFocus(k)}
            style={{
              border: 0,
              background: "transparent",
              cursor: "pointer",
              fontWeight: focus === k ? 800 : 500,
              color: focus === k ? "var(--ink)" : "var(--ink-soft)",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <i className="swatch" style={{ background: COLORS[k] }} />
            {QN_LABELS[k]}
          </button>
        ))}
      </div>
      <div className="readout">
        <span><span className="k">{t({ en: "showing path", hu: "látható pálya" })}</span> <b>{QN_LABELS[focus]}</b></span>
        <span><span className="k">k</span> <b>{fi}</b></span>
        <span><span className="k">‖p−p*‖</span> <b>{(run.frames[fi].err ?? 0).toExponential(2)}</b></span>
      </div>
      <div className="controls">
        <PlayBar
          i={player.i}
          count={count}
          playing={player.playing}
          onPlay={player.play}
          onStep={player.step}
          onReset={player.reset}
          onScrub={player.setI}
        />
      </div>
    </div>
  );
}
