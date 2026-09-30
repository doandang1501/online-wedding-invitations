import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";

export default function Hero() {
  return (
    <section className="hero" aria-label="Wedding invitation">
      <div className="hero__frame">
        <span className="hero__corner" aria-hidden="true" />
        <Reveal className="hero__eyebrow">
          <span className="eyebrow">{wedding.coupleLabel}</span>
        </Reveal>
        <h1 className="font-display hero__name">
          <Reveal as="span" delay={120}>{wedding.bride}</Reveal>
          <Reveal as="span" delay={240} className="hero__amp serif-italic">&amp;</Reveal>
          <Reveal as="span" delay={360}>{wedding.groom}</Reveal>
        </h1>
        <Reveal className="hero__meta" delay={480}>
          <span className="hero__date">{wedding.date}</span>
          <span className="hero__venue">{wedding.venue.short}</span>
        </Reveal>
        <span className="hero__scroll" aria-hidden="true">Scroll</span>
      </div>
    </section>
  );
}
