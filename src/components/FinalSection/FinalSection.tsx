import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";

export default function FinalSection() {
  return (
    <section className="section" aria-label="Closing">
      <div className="container final__inner">
        <Reveal>
          <span className="eyebrow">With love</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="final__closing">{wedding.closing}</p>
        </Reveal>
        <Reveal delay={220}>
          <p className="final__names font-display">
            {wedding.bride} <span className="serif-italic">&amp;</span> {wedding.groom}
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="final__date">{wedding.date}</p>
        </Reveal>
        <Reveal className="rule final__rule" delay={400}>
          <span className="diamond" aria-hidden="true">◆</span>
        </Reveal>
        <Reveal delay={480}>
          <p className="final__foot">
            {wedding.bride} &amp; {wedding.groom} — {wedding.date}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
