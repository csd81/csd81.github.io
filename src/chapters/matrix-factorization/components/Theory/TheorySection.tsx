import { useEffect } from "react";
import type { Section, TheoryBlock, BlockKind } from "../../content/types";
import { useT } from "../../i18n/useT";
import { useAppStore } from "../../store/useAppStore";
import { Math, RichText } from "../Math/Math";
import "./theory.css";

const KIND_LABEL: Record<BlockKind, { en: string; hu: string } | null> = {
  text: null,
  definition: { en: "Definition", hu: "Definíció" },
  theorem: { en: "Theorem", hu: "Tétel" },
  proof: { en: "Proof", hu: "Bizonyítás" },
  example: { en: "Example", hu: "Példa" },
  algorithm: { en: "Algorithm", hu: "Algoritmus" },
  remark: { en: "Remark", hu: "Megjegyzés" },
};

export function TheorySection({ section }: { section: Section }) {
  const { tb } = useT();
  const markViewed = useAppStore((s) => s.markSectionViewed);

  useEffect(() => {
    markViewed(section.id);
  }, [section.id, markViewed]);

  return (
    <section className="theory">
      <h1>{tb(section.title)}</h1>
      {section.blocks.map((block) => (
        <Block key={block.id} block={block} />
      ))}
    </section>
  );
}

function Block({ block }: { block: TheoryBlock }) {
  const { tb, lang } = useT();
  const isCallout = block.kind !== "text";
  const label =
    block.label?.[lang] ?? (KIND_LABEL[block.kind] ? KIND_LABEL[block.kind]![lang] : undefined);

  return (
    <div className={isCallout ? `callout callout--${block.kind}` : "block"}>
      {label && <div className="callout__label">{label}</div>}
      <div className="block__body">
        {block.body.map((frag, i) => {
          if (frag.math) return <Math key={i} tex={frag.math} display />;
          if (frag.rich)
            return (
              <p key={i}>
                <RichText text={tb(frag.rich)} />
              </p>
            );
          if (frag.text) return <p key={i}>{tb(frag.text)}</p>;
          return null;
        })}
      </div>
    </div>
  );
}
