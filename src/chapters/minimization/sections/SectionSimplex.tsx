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
import type { Vec } from "../math/linalg";
import { nelderMead, simplexMethod } from "../algorithms/simplex";

const meta = SECTIONS.find((s) => s.id === "simplex")!;
type Variant = "simplex" | "nm";
const INIT: Vec[] = [
  [-2, 4],
  [-1, 4],
  [-1.5, 5],
];

export default function SectionSimplex() {
  const { t } = useLang();
  const [variant, setVariant] = useState<Variant>("nm");
  const [alpha, setAlpha] = useState(1.4);
  const [beta, setBeta] = useState(0.7);

  const frames = useMemo(
    () =>
      variant === "simplex"
        ? simplexMethod(rosen2y, INIT, 26)
        : nelderMead(rosen2y, INIT, alpha, beta, 22),
    [variant, alpha, beta]
  );
  const player = usePlayer(frames.length);
  const stepFrames = [0, 1, 2, 3, frames.length - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "No derivatives", hu: "Derivált nélkül" }),
      title: t({ en: "Send in a triangle", hu: "Küldj be egy háromszöget" }),
      body: (
        <p>
          {t({
            en: "These methods never compute a gradient. They keep a shape — for two variables, a triangle (a simplex) — and move it downhill using only function values at its corners.",
            hu: "Ezek a módszerek sosem számolnak gradienst. Egy alakzatot tartanak fenn — két változóra háromszöget (szimplexet) — és csak a sarkokban felvett függvényértékek alapján mozgatják lefelé.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Reflect", hu: "Tükrözés" }),
      title: t({ en: "Flip the worst corner", hu: "Fordítsd át a legrosszabb sarkot" }),
      body: (
        <>
          <p>
            {t({
              en: "Find the worst vertex (highest f). Reflect it through the centroid of the others — the dotted line — to a trial point on the far side.",
              hu: "Keresd meg a legrosszabb csúcsot (legnagyobb f). Tükrözd a többiek súlypontján át — a szaggatott vonal mentén — egy próbapontba a túloldalon.",
            })}
          </p>
          <Callout emoji="🟢">
            {t({
              en: "Green = best vertex, amber = worst, the open dot = trial point being tested.",
              hu: "Zöld = legjobb csúcs, borostyán = legrosszabb, az üres pont = a tesztelt próbapont.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "Expand / contract", hu: "Nyújtás / húzás" }),
      title: t({ en: "Greedy or cautious", hu: "Mohó vagy óvatos" }),
      body: (
        <p>
          {t({
            en: "Nelder–Mead is adaptive: if a reflection is great, expand further (factor α); if it's poor, contract back (factor β); if even that fails, shrink toward the best vertex.",
            hu: "A Nelder–Mead alkalmazkodó: ha a tükrözés remek, nyújts tovább (α tényező); ha gyenge, húzd vissza (β tényező); ha még az sem segít, zsugorítsd a legjobb csúcs felé.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Crawl down", hu: "Lekúszás" }),
      title: t({ en: "The amoeba walks", hu: "Az amőba sétál" }),
      body: (
        <p>
          {t({
            en: "Repeating these moves, the triangle tumbles and stretches down the valley — which is why Nelder–Mead is nicknamed the “amoeba” method.",
            hu: "E lépéseket ismételve a háromszög bukfencezve és nyúlva gurul le a völgyben — ezért becézik a Nelder–Mead-et „amőba” módszernek.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Tune it", hu: "Hangold" }),
      title: t({ en: "Simplex vs Nelder–Mead", hu: "Szimplex kontra Nelder–Mead" }),
      body: (
        <p>
          {t({
            en: "Switch to the plain simplex (reflect-or-shrink only) and compare. Then play with α and β — bigger α is bolder, smaller β contracts harder.",
            hu: "Válts az egyszerű szimplexre (csak tükrözés vagy zsugorítás) és hasonlítsd össze. Aztán játssz az α és β értékkel — nagyobb α merészebb, kisebb β erősebben húz.",
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
          <SimplexGraphic
            frames={frames}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
            variant={variant}
            setVariant={setVariant}
            alpha={alpha}
            setAlpha={setAlpha}
            beta={beta}
            setBeta={setBeta}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "The moves", hu: "A lépések" })}>
          <p>
            {t({ en: "Order vertices f(x⁰) ≤ … ≤ f(xⁿ); centroid of the best n:", hu: "Rendezd a csúcsokat f(x⁰) ≤ … ≤ f(xⁿ); a legjobb n súlypontja:" })}
          </p>
          <Tex block>{"\\mathbf x_c = \\tfrac1n\\textstyle\\sum_{i=0}^{n-1}\\mathbf x^{(i)}, \\qquad \\mathbf x_r = 2\\mathbf x_c - \\mathbf x^{(n)}."}</Tex>
          <p>{t({ en: "Expansion and contraction:", hu: "Nyújtás és húzás:" })}</p>
          <Tex block>{"\\mathbf x_e = \\mathbf x_c + \\alpha(\\mathbf x_r - \\mathbf x_c), \\qquad \\mathbf x_z = \\mathbf x_c \\pm \\beta(\\mathbf x_r - \\mathbf x_c)."}</Tex>
        </Theorem>
        <Theorem label={t({ en: "Stopping", hu: "Megállás" })} proof>
          <p>
            {t({
              en: "Stop when the simplex is tiny, or when the spread of values is small:",
              hu: "Állj meg, ha a szimplex apró, vagy ha az értékek szórása kicsi:",
            })}
          </p>
          <Tex block>{"\\sigma = \\sqrt{\\tfrac1{n+1}\\textstyle\\sum_{i=0}^{n}\\big(f(\\mathbf x^{(i)}) - \\bar f\\big)^2} < \\text{tol}."}</Tex>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function SimplexGraphic({
  frames,
  player,
  targetFrame,
  variant,
  setVariant,
  alpha,
  setAlpha,
  beta,
  setBeta,
}: {
  frames: ReturnType<typeof nelderMead>;
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
  variant: Variant;
  setVariant: (v: Variant) => void;
  alpha: number;
  setAlpha: (v: number) => void;
  beta: number;
  setBeta: (v: number) => void;
}) {
  const { t } = useLang();
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const i = Math.min(player.i, frames.length - 1);
  const fr = frames[i];
  const overlay: ContourOverlay = {
    triangles: [{ verts: fr.verts, centroid: fr.centroid, trial: fr.trial }],
    showMin: true,
  };
  const bestF = Math.min(...fr.fvals);

  return (
    <div>
      <ContourPlot fn={rosen2y} overlay={overlay} height={400} />
      <div className="readout">
        <span><span className="k">k</span> <b>{fr.k}</b></span>
        <span><span className="k">{t({ en: "action", hu: "lépés" })}</span> <b>{t(fr.action)}</b></span>
        <span><span className="k">{t({ en: "best f", hu: "legjobb f" })}</span> <b>{bestF.toFixed(4)}</b></span>
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
        <SelectField
          label={t({ en: "Method", hu: "Módszer" })}
          value={variant}
          onChange={(v) => setVariant(v as Variant)}
          options={[
            { value: "nm", label: "Nelder–Mead" },
            { value: "simplex", label: t({ en: "Plain simplex", hu: "Egyszerű szimplex" }) },
          ]}
        />
        {variant === "nm" && (
          <>
            <RangeField label="α" value={alpha} min={1.1} max={2.5} step={0.1} onChange={setAlpha} fmt={(v) => v.toFixed(1)} />
            <RangeField label="β" value={beta} min={0.2} max={0.9} step={0.1} onChange={setBeta} fmt={(v) => v.toFixed(1)} />
          </>
        )}
      </div>
    </div>
  );
}
