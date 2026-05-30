import { useEffect, useMemo, useState } from "react";
import { useLang } from "../contexts/LanguageContext";
import { SECTIONS } from "./registry";
import SectionShell from "./SectionShell";
import Scrolly, { type ScrollyStep } from "../components/Scrolly";
import Function1DPlot from "../components/plots/Function1DPlot";
import { PlayBar, SelectField, usePlayer } from "../components/controls";
import Tex from "../components/Math";
import MathDetails from "../components/MathDetails";
import { Callout, Theorem } from "../components/Callout";
import { FN1D_PRESETS, type Fn1D } from "../math/functions";
import { goldenSection, goldenMid, R } from "../algorithms/goldenSection";

const meta = SECTIONS.find((s) => s.id === "golden")!;

export default function SectionGolden() {
  const { t } = useLang();
  const [fnId, setFnId] = useState("quad1d");
  const fn = FN1D_PRESETS.find((f) => f.id === fnId) as Fn1D;
  const frames = useMemo(() => goldenSection(fn, 0.01, 40), [fn]);
  const player = usePlayer(frames.length);

  // map each scroll step → a frame index
  const stepFrames = [0, 0, 1, 2, frames.length - 1];

  const steps: ScrollyStep[] = [
    {
      kicker: t({ en: "The setup", hu: "A felállás" }),
      title: t({ en: "One valley, one bottom", hu: "Egy völgy, egy mélypont" }),
      body: (
        <>
          <p>
            {t({
              en: "Suppose f is unimodal on [a, b]: it goes down, then up, with a single lowest point. We don't need its derivative — only the ability to evaluate it.",
              hu: "Tegyük fel, hogy f unimodális az [a, b]-n: előbb csökken, majd nő, egyetlen mélyponttal. Nincs szükség a deriváltjára — csak ki kell tudnunk értékelni.",
            })}
          </p>
          <Callout emoji="🎯">
            {t({
              en: "Goal: trap the minimum in shrinking nested intervals, like the bisection method — but for minimizing instead of root-finding.",
              hu: "Cél: egyre szűkülő, egymásba ágyazott intervallumokba zárni a minimumot, mint a felezésnél — de minimumkeresésre.",
            })}
          </Callout>
        </>
      ),
    },
    {
      kicker: t({ en: "Two probes", hu: "Két próba" }),
      title: t({ en: "Peek at two inside points", hu: "Két belső pontnál kukucskálunk" }),
      body: (
        <p>
          {t({
            en: "Place two interior points y < x. Comparing f(y) and f(x) tells us which side the minimum can't be on — so we can throw that side away.",
            hu: "Helyezzünk el két belső pontot, y < x. Az f(y) és f(x) összevetése megmondja, melyik oldalon nem lehet a minimum — azt eldobhatjuk.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "Discard", hu: "Eldobás" }),
      title: t({ en: "Throw away a slice", hu: "Dobjunk el egy szeletet" }),
      body: (
        <p>
          {t({
            en: "If f(x) > f(y) the minimum lies in [a, x]; otherwise in [y, b]. Either way the bracket gets shorter while still containing the minimum.",
            hu: "Ha f(x) > f(y), a minimum az [a, x]-ben van; különben az [y, b]-ben. Akárhogy is, a befogó intervallum rövidül, de továbbra is tartalmazza a minimumot.",
          })}
        </p>
      ),
    },
    {
      kicker: t({ en: "The trick", hu: "A trükk" }),
      title: t({ en: "Why golden? Reuse a point", hu: "Miért arany? Pontot újrahasználunk" }),
      body: (
        <>
          <p>
            {t({
              en: "Pick the split ratio so that one old probe becomes a probe of the new interval. Then every step costs just one new function evaluation, not two.",
              hu: "Válaszd a felosztási arányt úgy, hogy az egyik régi próbapont az új intervallum próbapontja legyen. Így minden lépés csak egy új függvénykiértékelésbe kerül, nem kettőbe.",
            })}
          </p>
          <p>
            {t({
              en: "That requirement forces the golden ratio ",
              hu: "Ez a követelmény az aranymetszést kényszeríti ki: ",
            })}
            <Tex>{"r = \\tfrac{\\sqrt5 - 1}{2} \\approx 0.618"}</Tex>.
          </p>
        </>
      ),
    },
    {
      kicker: t({ en: "Done", hu: "Kész" }),
      title: t({ en: "Squeeze to tolerance", hu: "Szorítsd a tűréshatárig" }),
      body: (
        <>
          <p>
            {t({
              en: "Repeat until the interval is shorter than your tolerance ε, then report its midpoint. The width shrinks by the factor r every step — geometric, predictable convergence.",
              hu: "Ismételd, amíg az intervallum rövidebb nem lesz az ε tűrésnél, majd add vissza a felezőpontját. A szélesség minden lépésben r-szeresére csökken — geometrikus, kiszámítható konvergencia.",
            })}
          </p>
          <Callout emoji="✨">
            {t({
              en: "After n steps the bracket has length (b−a)·rⁿ. Want 3 digits? You can compute n in advance.",
              hu: "n lépés után a befogó hossza (b−a)·rⁿ. Kell 3 jegy? n előre kiszámolható.",
            })}
          </Callout>
        </>
      ),
    },
  ];

  return (
    <SectionShell meta={meta}>
      <Scrolly
        steps={steps}
        graphic={(active) => (
          <GoldenGraphic
            fn={fn}
            fnId={fnId}
            setFnId={setFnId}
            frames={frames}
            player={player}
            targetFrame={stepFrames[active] ?? 0}
          />
        )}
      />

      <MathDetails>
        <Theorem label={t({ en: "The golden ratio, derived", hu: "Az aranymetszés, levezetve" })}>
          <p>
            {t({
              en: "Place points so the two candidate intervals have equal length r(b−a):",
              hu: "Helyezd el a pontokat úgy, hogy a két jelölt intervallum hossza azonos legyen, r(b−a):",
            })}
          </p>
          <Tex block>{"x = a + r(b-a), \\qquad y = a + (1-r)(b-a)."}</Tex>
          <p>
            {t({
              en: "Requiring the surviving probe to land exactly where the next step needs it gives",
              hu: "Megkövetelve, hogy a megmaradó próbapont pont oda essen, ahol a következő lépésnek kell, kapjuk:",
            })}
          </p>
          <Tex block>{"r^2 + r - 1 = 0 \\;\\Longrightarrow\\; r = \\frac{\\sqrt5 - 1}{2} \\approx 0.61803."}</Tex>
        </Theorem>
        <Theorem label={t({ en: "Steps to reach ε", hu: "Lépésszám az ε eléréséhez" })} proof>
          <Tex block>{"n \\ge \\dfrac{\\log\\!\\big(\\varepsilon/(b-a)\\big)}{\\log r}."}</Tex>
          <p>
            {t({
              en: "For f(x)=x²−0.8x+1 on [−1, 2] with ε = 0.005, this gives n ≥ 13.3, i.e. 14 steps — exactly what the demo needs.",
              hu: "Az f(x)=x²−0.8x+1 függvényre a [−1, 2]-n, ε = 0.005 mellett ez n ≥ 13.3, azaz 14 lépés — pontosan annyi, amennyit a demó igényel.",
            })}
          </p>
        </Theorem>
      </MathDetails>
    </SectionShell>
  );
}

function GoldenGraphic({
  fn,
  fnId,
  setFnId,
  frames,
  player,
  targetFrame,
}: {
  fn: Fn1D;
  fnId: string;
  setFnId: (id: string) => void;
  frames: ReturnType<typeof goldenSection>;
  player: ReturnType<typeof usePlayer>;
  targetFrame: number;
}) {
  const { t } = useLang();
  // scroll drives the frame (unless the user is mid-play)
  useEffect(() => {
    if (!player.playing) player.setI(targetFrame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetFrame]);

  const fr = frames[Math.min(player.i, frames.length - 1)];
  const width = fr.b - fr.a;
  const mid = goldenMid(fr);

  return (
    <div>
      <Function1DPlot fn={fn} frame={fr} height={340} />
      <div className="readout">
        <span>
          <span className="k">r</span> <b>{R.toFixed(5)}</b>
        </span>
        <span>
          <span className="k">[a, b]</span>{" "}
          <b>
            [{fr.a.toFixed(3)}, {fr.b.toFixed(3)}]
          </b>
        </span>
        <span>
          <span className="k">{t({ en: "width", hu: "szélesség" })}</span>{" "}
          <b>{width.toFixed(4)}</b>
        </span>
        <span>
          <span className="k">{t({ en: "f-evals", hu: "kiértékelés" })}</span>{" "}
          <b>{fr.evals}</b>
        </span>
        <span>
          <span className="k">{t({ en: "midpoint", hu: "felezőpont" })}</span>{" "}
          <b>{mid.toFixed(5)}</b>
        </span>
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
          label={t({ en: "Function", hu: "Függvény" })}
          value={fnId}
          onChange={setFnId}
          options={FN1D_PRESETS.map((f) => ({ value: f.id, label: f.label }))}
        />
      </div>
    </div>
  );
}
