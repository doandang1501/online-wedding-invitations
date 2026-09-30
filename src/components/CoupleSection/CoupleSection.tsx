import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";
import Photo from "@/components/Photo";

export default function CoupleSection() {
  const c = wedding.couple;
  return (
    <section className="section" aria-label="The couple">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">The Happy Couple</span>
        </Reveal>
        <div className="couple__grid">
          <Reveal className="couple__person" delay={120}>
            <span className="couple__role eyebrow">Cô dâu</span>
            <h2 className="couple__name font-display">{wedding.bride}</h2>
          </Reveal>
          <div className="couple__divider" aria-hidden="true" />
          <Reveal className="couple__person" delay={240}>
            <span className="couple__role eyebrow">Chú rể</span>
            <h2 className="couple__name font-display">{wedding.groom}</h2>
          </Reveal>
        </div>

        <div className="couple__photos">
          <Reveal as="figure">
            <Photo item={c.bride} ratio="2/3" />
          </Reveal>
          <Reveal as="figure" delay={160}>
            <Photo item={c.groom} ratio="2/3" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
