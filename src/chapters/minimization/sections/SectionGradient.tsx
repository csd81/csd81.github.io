import { useEffect, useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "./registry";
import SectionShell from "./SectionShell";
import Scrolly, { type ScrollyStep } from "../components/Scrolly";
import ContourPlot, { type ContourOverlay } from "../components/plots/ContourPlot";
import { PlayBar, RangeField, SelectField, usePlayer } from "../components/controls";
import Tex from "../components/Math";
import MathDetails from "../components/MathDetails";
import { Callout, Theorem } from "../components/Callout";
import { rosen2y } from "../math/functions";
import { add, norm, scale, sub, type Vec } from "../math/linalg";
import { gradientConstant, gradientOptimal } from "../algorithms/gradient";

const meta = SECTIONS.find((s) => s.id === "gradient")!;
type Mode = "constant" | "optimal";

export default function SectionGradient() {
  const { t } = useLang();
  const fn = rosen2y;
  const [start, setStart] = useState<Vec>([-1, 4]);
  const [mode, setMode] = useState<Mode>("constant");
  const [h, setH] = useState(0.3);

  const result = useMemo(
    () =>
      mode === "constant"
        ? gradientConstant(fn, start, h, 26)
        : gradientOptimal(fn, start, 16),
    [fn, start, mode, h]
  );
  const player = usePlayer(result.points.length);
  const stepFrames = [0, 1, 2, result.points.length - 1, result.points.length - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "The idea", hu: "Az ötlet" }),
      title: t({ en: "Walk straight downhill", hu: "Lefelé, egyenesen" }),
      body: (
        <p>
          {t({
            en: "From any point, the steepest downhill direction is the negative gradient −∇f. The gradient method just keeps stepping that way.",
            hu: "Bármely pontból a legmeredekebb lefelé irány a negatív gradiens, −∇f. A gradiens módszer egyszerűen mindig arra lép.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Perpendicular", hu: "Merőleges" }),
      title: t({ en: "Gradient ⟂ contour", hu: "Gradiens ⟂ szintvonal" }),
      body: (
        <>
          <p>
            {t({
              en: "The gradient is always perpendicular to the contour line through that point — so each step crosses the level curves at a right angle.",
              hu: "A gradiens mindig merőleges a ponton átmenő szintvonalra — így minden lépés derékszögben metszi a szintvonalakat.",
            })}
          </p>
          <Callout emoji="🧭">
            {t({
              en: "The orange arrow is the descent direction. Click anywhere on the plot to drop a new starting point!",
              hu: "A narancs nyíl a lejtés iránya. Kattints bárhová az ábrán egy új kezdőpontért!",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "Step size", hu: "Lépésköz" }),
      title: t({ en: "How far each step?", hu: "Milyen messze lépjünk?" }),
      body: (
        <p>
          {t({
            en: "With a constant step you never land exactly on the minimum — you orbit it. The optimal method instead line-searches for the best step each time.",
            hu: "Állandó lépésközzel sosem érsz pontosan a minimumba — körözöl körülötte. Az optimális módszer ehelyett minden lépésben a legjobb lépéshosszt keresi.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The catch", hu: "A bökkenő" }),
      title: t({ en: "Zig-zag in the valley", hu: "Cikcakk a völgyben" }),
      body: (
        <p>
          {t({
            en: "Consecutive optimal steps are perpendicular, so in a long narrow valley the path bounces side to side and creeps forward slowly. Convergence is only linear.",
            hu: "Az egymást követő optimális lépések merőlegesek, ezért egy hosszú, keskeny völgyben a pálya oldalról oldalra pattog és lassan kúszik előre. A konvergencia csak lineáris.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Try it", hu: "Próbáld ki" }),
      title: t({ en: "Compare the two modes", hu: "Hasonlítsd össze a két módot" }),
      body: (
        <p>
          {t({
            en: "Switch between constant and optimal steps, drag the step-size slider, and click different starts. Watch the path and the error readout react.",
            hu: "Válts az állandó és az optimális lépés között, húzd a lépésköz-csúszkát, és kattints különböző kezdőpontokra. Figyeld, hogyan reagál a pálya és a hiba-kijelző.",
          })}
        </p>
      ),
    },
  ];

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={(active) => (
          <GradientGraphic
            result={result}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
            mode={mode}
            setMode={setMode}
            h={h}
            setH={setH}
            onPick={setStart}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "Steepest descent", hu: "Legmeredekebb lejtés" })}>
          <p>
            {t({
              en: "Among all unit directions u, the directional derivative is most negative for",
              hu: "Az összes u egységirány közül az iránymenti derivált a következőre a legnegatívabb:",
            })}
          </p>
          <Tex block>{"\\mathbf{u} = -\\,\\frac{f'(\\mathbf p)}{\\lVert f'(\\mathbf p)\\rVert_2}, \\qquad \\mathbf p^{(k+1)} = \\mathbf p^{(k)} - \\alpha_k\\, f'(\\mathbf p^{(k)})."}</Tex>
          <p>
            {t({
              en: "Constant step: αₖ = h / ‖f′(pₖ)‖. Optimal step: choose αₖ to minimize φ(t) = f(pₖ − t f′(pₖ)) along the ray.",
              hu: "Állandó lépés: αₖ = h / ‖f′(pₖ)‖. Optimális lépés: válaszd αₖ-t úgy, hogy minimalizálja a φ(t) = f(pₖ − t f′(pₖ)) függvényt a félegyenesen.",
            })}
          </p>
        </Theorem>
        <Theorem label={t({ en: "Why it zig-zags", hu: "Miért cikcakkozik" })} proof>
          <p>
            {t({
              en: "At an optimal step φ′(αₖ)=0, i.e. f′(pₖ₊₁)·f′(pₖ)=0 — successive search directions are orthogonal. In an ill-conditioned valley that forces a slow staircase.",
              hu: "Optimális lépésnél φ′(αₖ)=0, azaz f′(pₖ₊₁)·f′(pₖ)=0 — az egymást követő keresési irányok merőlegesek. Rosszul kondicionált völgyben ez lassú lépcsőzést eredményez.",
            })}
          </p>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function GradientGraphic({
  result,
  player,
  targetFrame,
  mode,
  setMode,
  h,
  setH,
  onPick,
}: {
  result: ReturnType<typeof gradientConstant>;
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
  mode: Mode;
  setMode: (m: Mode) => void;
  h: number;
  setH: (v: number) => void;
  onPick: (p: Vec) => void;
}) {
  const { t } = useLang();
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const i = Math.min(player.i, result.frames.length - 1);
  const fr = result.frames[i];
  const cur = fr.p;
  const g = fr.grad ?? [0, 0];
  const gn = norm(g) || 1;
  const arrowTo = add(cur, scale(sub([0, 0], g), 0.4 / gn));

  const overlay: ContourOverlay = {
    paths: [{ pts: result.points.slice(0, i + 1) }],
    points: [{ p: cur, ring: true }],
    arrow: { from: cur, to: arrowTo },
    showMin: true,
  };

  return (
    <div>
      <ContourPlot fn={rosen2y} overlay={overlay} height={400} onPick={onPick} />
      <div className="plot__legend">
        <span><i className="swatch" style={{ background: "var(--plot-path)" }} /> {t({ en: "path", hu: "pálya" })}</span>
        <span><i className="swatch" style={{ background: "var(--plot-accent)" }} /> −∇f</span>
        <span><i className="swatch" style={{ background: "var(--plot-point)" }} /> {t({ en: "minimum (1, ½)", hu: "minimum (1, ½)" })}</span>
      </div>
      <div className="readout">
        <span><span className="k">k</span> <b>{fr.k}</b></span>
        <span><span className="k">pₖ</span> <b>({cur[0].toFixed(3)}, {cur[1].toFixed(3)})</b></span>
        <span><span className="k">f</span> <b>{fr.fval.toFixed(4)}</b></span>
        <span><span className="k">‖p−p*‖</span> <b>{(fr.err ?? 0).toFixed(4)}</b></span>
      </div>
      <div className="controls">
        <PlayBar
          i={player.i}
          count={result.points.length}
          playing={player.playing}
          onPlay={player.play}
          onStep={player.step}
          onReset={player.reset}
          onScrub={player.setI}
        />
        <SelectField
          label={t({ en: "Step rule", hu: "Lépésszabály" })}
          value={mode}
          onChange={(m) => setMode(m as Mode)}
          options={[
            { value: "constant", label: t({ en: "Constant step", hu: "Állandó lépés" }) },
            { value: "optimal", label: t({ en: "Optimal (line search)", hu: "Optimális (vonalkeresés)" }) },
          ]}
        />
        {mode === "constant" && (
          <RangeField
            label={t({ en: "step h", hu: "lépés h" })}
            value={h}
            min={0.05}
            max={0.8}
            step={0.05}
            onChange={setH}
            fmt={(v) => v.toFixed(2)}
          />
        )}
      </div>
    </div>
  );
}
