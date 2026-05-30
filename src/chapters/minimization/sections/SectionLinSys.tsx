import { useEffect, useMemo } from "react";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "./registry";
import SectionShell from "./SectionShell";
import Scrolly, { type ScrollyStep } from "../components/Scrolly";
import ConvergenceChart, { type Series } from "../components/plots/ConvergenceChart";
import { PlayBar, usePlayer } from "../components/controls";
import Tex from "../components/Math";
import MathDetails from "../components/MathDetails";
import { Callout, Theorem } from "../components/Callout";
import type { Mat, Vec } from "../math/linalg";
import { gradientSolve } from "../algorithms/linsys";

const meta = SECTIONS.find((s) => s.id === "linsys")!;

const A: Mat = [
  [4, 2, -1],
  [2, 5, 0],
  [-1, 0, 3],
];
const b: Vec = [0, 8, 1];
const xStar: Vec = [-1, 2, 0];
const x0: Vec = [3, 3, 3];

export default function SectionLinSys() {
  const { t } = useLang();
  const frames = useMemo(() => gradientSolve(A, b, x0, xStar, 14), []);
  const player = usePlayer(frames.length);
  const stepFrames = [0, 1, 2, frames.length - 1, frames.length - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "A surprise link", hu: "Meglepő kapcsolat" }),
      title: t({ en: "Solving = minimizing", hu: "Megoldani = minimalizálni" }),
      body: (
        <>
          <p>
            {t({
              en: "If A is symmetric and positive definite, the quadratic g(x) = ½xᵀAx − bᵀx has exactly one minimum — and its gradient is ∇g = Ax − b. So ∇g = 0 is precisely Ax = b.",
              hu: "Ha A szimmetrikus és pozitív definit, a g(x) = ½xᵀAx − bᵀx kvadratikusnak pontosan egy minimuma van — és a gradiense ∇g = Ax − b. Tehát ∇g = 0 épp az Ax = b.",
            })}
          </p>
          <Callout emoji="🎢">
            {t({
              en: "Solving the linear system becomes rolling a paraboloid bowl to the bottom — no matrix inverse required.",
              hu: "A lineáris rendszer megoldása egy paraboloid tál aljára gurulássá válik — mátrixinverz nélkül.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "The residual", hu: "A reziduum" }),
      title: t({ en: "Which way is down?", hu: "Merre van lefelé?" }),
      body: (
        <p>
          {t({
            en: "The downhill direction is the residual r = b − Ax (the negative gradient). Step along it by the exact distance that minimizes g on that line.",
            hu: "A lefelé irány az r = b − Ax reziduum (a negatív gradiens). Lépj mentén pontosan akkorát, amely minimalizálja g-t azon az egyenesen.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The step", hu: "A lépés" }),
      title: t({ en: "An exact line-search formula", hu: "Pontos vonalkeresési képlet" }),
      body: (
        <p>
          {t({
            en: "Because g is quadratic, the best step length has a closed form: αₖ = (rᵀr)/(rᵀAr). No searching — just plug in.",
            hu: "Mivel g kvadratikus, a legjobb lépéshossz zárt alakú: αₖ = (rᵀr)/(rᵀAr). Nincs keresés — csak behelyettesítés.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Watch it solve", hu: "Nézd, ahogy megold" }),
      title: t({ en: "A 3×3 system, live", hu: "Egy 3×3 rendszer, élőben" }),
      body: (
        <p>
          {t({
            en: "Starting from (3, 3, 3), both the error ‖pₖ − x*‖ and the residual ‖rₖ‖ shrink steadily toward the true solution (−1, 2, 0).",
            hu: "A (3, 3, 3)-ból indulva a hiba ‖pₖ − x*‖ és a reziduum ‖rₖ‖ is folyamatosan csökken a valódi (−1, 2, 0) megoldás felé.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Note", hu: "Megjegyzés" }),
      title: t({ en: "Steady, but linear", hu: "Egyenletes, de lineáris" }),
      body: (
        <p>
          {t({
            en: "Like the gradient method it descends reliably but only linearly — conjugate-gradient methods (next courses) fix the zig-zag and finish in n steps.",
            hu: "A gradiens módszerhez hasonlóan megbízhatóan, de csak lineárisan ereszkedik — a konjugált gradiens módszerek (későbbi kurzusok) megszüntetik a cikcakkot és n lépésben végeznek.",
          })}
        </p>
      ),
    },
  ];

  const series: Series[] = [
    { label: "err", color: "var(--plot-path)", errs: frames.map((f) => f.err) },
    { label: "res", color: "var(--plot-path2)", errs: frames.map((f) => f.res) },
  ];

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={(active) => (
          <LinSysGraphic
            frames={frames}
            series={series}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "Gradient of the quadratic", hu: "A kvadratikus gradiense" })}>
          <Tex block>{"g(\\mathbf x) = \\tfrac12 \\mathbf x^{\\mathsf T} A\\mathbf x - \\mathbf b^{\\mathsf T}\\mathbf x + c, \\qquad g'(\\mathbf x) = A\\mathbf x - \\mathbf b."}</Tex>
          <p>
            {t({
              en: "If A is positive definite, g has a unique global minimum at x = A⁻¹b — the solution of the system.",
              hu: "Ha A pozitív definit, g-nek egyetlen globális minimuma van az x = A⁻¹b pontban — a rendszer megoldása.",
            })}
          </p>
        </Theorem>
        <Theorem label={t({ en: "The iteration", hu: "Az iteráció" })} proof>
          <Tex block>{"\\mathbf r^{(k)} = \\mathbf b - A\\mathbf p^{(k)}, \\quad \\alpha_k = \\frac{(\\mathbf r^{(k)})^{\\mathsf T}\\mathbf r^{(k)}}{(\\mathbf r^{(k)})^{\\mathsf T} A\\,\\mathbf r^{(k)}}, \\quad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} + \\alpha_k \\mathbf r^{(k)}."}</Tex>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function LinSysGraphic({
  frames,
  series,
  player,
  targetFrame,
}: {
  frames: ReturnType<typeof gradientSolve>;
  series: Series[];
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
}) {
  const { t } = useLang();
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const i = Math.min(player.i, frames.length - 1);
  const fr = frames[i];
  const upToSeries = series.map((s) => ({ ...s, upTo: i }));

  return (
    <div>
      <div style={{ padding: "16px 16px 0", fontFamily: "var(--mono)", fontSize: ".82rem", color: "var(--ink-soft)" }}>
        <Tex block>{"\\begin{aligned} 4x_1 + 2x_2 - x_3 &= 0 \\\\ 2x_1 + 5x_2\\;\\;\\;\\; &= 8 \\\\ -x_1 \\;\\;\\;\\;\\;+ 3x_3 &= 1 \\end{aligned}"}</Tex>
      </div>
      <ConvergenceChart series={upToSeries} height={260} yLabel="error / residual" />
      <div className="plot__legend">
        <span><i className="swatch" style={{ background: "var(--plot-path)" }} /> ‖pₖ − x*‖</span>
        <span><i className="swatch" style={{ background: "var(--plot-path2)" }} /> ‖rₖ‖</span>
      </div>
      <div className="readout">
        <span><span className="k">k</span> <b>{fr.k}</b></span>
        <span><span className="k">pₖ</span> <b>({fr.p.map((v) => v.toFixed(3)).join(", ")})</b></span>
        <span><span className="k">{t({ en: "error", hu: "hiba" })}</span> <b>{fr.err.toExponential(2)}</b></span>
      </div>
      <div className="controls">
        <PlayBar
          i={player.i}
          count={frames.length}
          playing={player.playing}
          onPlay={player.play}
          onStep={player.step}
          onReset={player.reset}
          onScrub={player.setI}
        />
        <span className="pill">{t({ en: "true x* = (−1, 2, 0)", hu: "valódi x* = (−1, 2, 0)" })}</span>
      </div>
    </div>
  );
}
