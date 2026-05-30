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
import { newton } from "../algorithms/newton";
import { gradientOptimal } from "../algorithms/gradient";

const meta = SECTIONS.find((s) => s.id === "newton")!;
const START: Vec = [-1, 4];

export default function SectionNewton() {
  const { t } = useLang();
  const [showGradient, setShowGradient] = useState(true);

  const nwt = useMemo(() => newton(rosen2y, START, 8), []);
  const grad = useMemo(() => gradientOptimal(rosen2y, START, 16), []);
  const player = usePlayer(Math.max(nwt.points.length, 6));
  const stepFrames = [0, 1, 2, nwt.points.length - 1, nwt.points.length - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "Use the curve", hu: "Használd a görbületet" }),
      title: t({ en: "Fit a bowl, jump to its bottom", hu: "Illessz egy tálat, ugorj az aljára" }),
      body: (
        <p>
          {t({
            en: "Gradient methods only know the slope. Newton's method also uses curvature: it fits a quadratic bowl (the 2nd-order Taylor model) at the current point and jumps straight to that bowl's minimum.",
            hu: "A gradiens módszer csak a meredekséget ismeri. A Newton-módszer a görbületet is használja: a jelenlegi pontban illeszt egy kvadratikus tálat (a másodrendű Taylor-modellt), és egyenesen annak minimumába ugrik.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The step", hu: "A lépés" }),
      title: t({ en: "Solve, don't crawl", hu: "Oldd meg, ne kússz" }),
      body: (
        <>
          <p>
            {t({
              en: "Each step solves a small linear system with the Hessian H = f''. The update is pₖ₊₁ = pₖ − H⁻¹∇f. No step-size tuning needed.",
              hu: "Minden lépés egy kis lineáris rendszert old meg a H = f'' Hesse-mátrixszal. A frissítés pₖ₊₁ = pₖ − H⁻¹∇f. Nincs szükség lépésköz-hangolásra.",
            })}
          </p>
          <Callout emoji="⚡">
            {t({
              en: "For this function Newton reaches the minimum to machine precision in ~5 steps — and from (1, 3) it lands exactly in one.",
              hu: "Erre a függvényre a Newton ~5 lépésben gépi pontossággal eléri a minimumot — (1, 3)-ból pedig egyetlen lépésben pontosan odaér.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "Speed", hu: "Sebesség" }),
      title: t({ en: "Quadratic convergence", hu: "Kvadratikus konvergencia" }),
      body: (
        <p>
          {t({
            en: "Near the minimum the error roughly squares each step: digits of accuracy double. The convergence chart below shows Newton plunging while the gradient method inches down.",
            hu: "A minimum közelében a hiba nagyjából négyzetre emelkedik lépésenként: a pontos jegyek száma megduplázódik. Az alábbi konvergencia-ábrán a Newton zuhan, míg a gradiens módszer araszol.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The price", hu: "Az ára" }),
      title: t({ en: "You must know H", hu: "Ismerned kell H-t" }),
      body: (
        <p>
          {t({
            en: "Newton needs the Hessian and a fresh linear solve every step — expensive in high dimensions. And if H isn't positive definite, the “jump” can head uphill.",
            hu: "A Newtonhoz minden lépésben kell a Hesse-mátrix és egy új lineáris megoldás — sok változónál drága. És ha H nem pozitív definit, az „ugrás” akár felfelé is vihet.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Compare", hu: "Hasonlíts" }),
      title: t({ en: "Newton vs gradient", hu: "Newton kontra gradiens" }),
      body: (
        <p>
          {t({
            en: "Both start at (−1, 4). Toggle the gradient path on and off to feel the difference between a handful of Newton jumps and a long gradient staircase.",
            hu: "Mindkettő (−1, 4)-ből indul. Kapcsold be-ki a gradiens pályát, hogy megérezd a különbséget néhány Newton-ugrás és egy hosszú gradiens-lépcső között.",
          })}
        </p>
      ),
    },
  ];

  const series: Series[] = [
    {
      label: "Newton",
      color: "var(--plot-path2)",
      errs: nwt.frames.map((f) => f.err ?? 0),
    },
    {
      label: t({ en: "Gradient", hu: "Gradiens" }),
      color: "var(--plot-path)",
      errs: grad.frames.map((f) => f.err ?? 0),
    },
  ];

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={(active) => (
          <NewtonGraphic
            nwt={nwt}
            grad={grad}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
            showGradient={showGradient}
            setShowGradient={setShowGradient}
          />
        )}
      />

      <div style={{ marginTop: 18 }}>
        <p className="muted" style={{ marginBottom: 6 }}>
          {t({
            en: "Error vs iteration (log scale) — Newton's curve falls off a cliff:",
            hu: "Hiba az iteráció függvényében (log skála) — a Newton görbéje leszakad:",
          })}
        </p>
        <div className="scrolly__graphic" style={{ boxShadow: "none" }}>
          <ConvergenceChart series={series} height={300} />
          <div className="plot__legend">
            <span><i className="swatch" style={{ background: "var(--plot-path2)" }} /> Newton</span>
            <span><i className="swatch" style={{ background: "var(--plot-path)" }} /> {t({ en: "Gradient (optimal)", hu: "Gradiens (optimális)" })}</span>
          </div>
        </div>
      </div>

      <MathDetails>
        <Theorem label={t({ en: "Newton's iteration", hu: "Newton-iteráció" })}>
          <Tex block>{"\\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\big(f''(\\mathbf p^{(k)})\\big)^{-1} f'(\\mathbf p^{(k)})."}</Tex>
          <p>
            {t({
              en: "This is exactly Newton's method applied to the equation ∇f(x) = 0.",
              hu: "Ez pontosan a Newton-módszer a ∇f(x) = 0 egyenletre alkalmazva.",
            })}
          </p>
        </Theorem>
        <Theorem label={t({ en: "Convergence", hu: "Konvergencia" })} proof>
          <p>
            {t({
              en: "If f ∈ C³, ∇f(p)=0 and f''(p) is positive definite, the iteration converges quadratically:",
              hu: "Ha f ∈ C³, ∇f(p)=0 és f''(p) pozitív definit, az iteráció kvadratikusan konvergál:",
            })}
          </p>
          <Tex block>{"\\lVert \\mathbf p^{(k+1)} - \\mathbf p\\rVert \\le C\\,\\lVert \\mathbf p^{(k)} - \\mathbf p\\rVert^2."}</Tex>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function NewtonGraphic({
  nwt,
  grad,
  player,
  targetFrame,
  showGradient,
  setShowGradient,
}: {
  nwt: ReturnType<typeof newton>;
  grad: ReturnType<typeof gradientOptimal>;
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
  showGradient: boolean;
  setShowGradient: (v: boolean) => void;
}) {
  const { t } = useLang();
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const i = player.i;
  const ni = Math.min(i, nwt.points.length - 1);
  const paths = [
    { pts: nwt.points.slice(0, ni + 1), color: "var(--plot-path2)" },
  ];
  if (showGradient)
    paths.push({
      pts: grad.points.slice(0, Math.min(i + 1, grad.points.length)),
      color: "var(--plot-path)",
    });

  const overlay: ContourOverlay = {
    paths,
    points: [{ p: nwt.points[ni], ring: true, color: "var(--plot-path2)" }],
    showMin: true,
  };
  const fr = nwt.frames[ni];

  return (
    <div>
      <ContourPlot fn={rosen2y} overlay={overlay} height={400} />
      <div className="plot__legend">
        <span><i className="swatch" style={{ background: "var(--plot-path2)" }} /> Newton</span>
        {showGradient && <span><i className="swatch" style={{ background: "var(--plot-path)" }} /> {t({ en: "gradient", hu: "gradiens" })}</span>}
      </div>
      <div className="readout">
        <span><span className="k">k</span> <b>{fr.k}</b></span>
        <span><span className="k">pₖ</span> <b>({nwt.points[ni][0].toFixed(4)}, {nwt.points[ni][1].toFixed(4)})</b></span>
        <span><span className="k">f</span> <b>{fr.fval.toExponential(2)}</b></span>
        <span><span className="k">‖p−p*‖</span> <b>{(fr.err ?? 0).toExponential(2)}</b></span>
      </div>
      <div className="controls">
        <PlayBar
          i={player.i}
          count={Math.max(nwt.points.length, 6)}
          playing={player.playing}
          onPlay={player.play}
          onStep={player.step}
          onReset={player.reset}
          onScrub={player.setI}
        />
        <button
          className={`ctl-btn${showGradient ? " ctl-btn--accent" : ""}`}
          onClick={() => setShowGradient(!showGradient)}
        >
          {showGradient
            ? t({ en: "Hide gradient path", hu: "Gradiens pálya elrejtése" })
            : t({ en: "Show gradient path", hu: "Gradiens pálya mutatása" })}
        </button>
      </div>
    </div>
  );
}
