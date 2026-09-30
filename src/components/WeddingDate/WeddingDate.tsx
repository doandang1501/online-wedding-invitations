import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";

export default function WeddingDate() {
  const [d, m, y] = wedding.date.split(".");
  return (
    <section className="section date" aria-label="Wedding date">
      <div className="container date__inner">
        <Reveal>
          <span className="eyebrow">Save the Date</span>
        </Reveal>
        <Reveal delay={120}>
          <p className="date__time">{wedding.time}</p>
        </Reveal>
        <Reveal delay={220}>
          <p className="date__big font-display">
            <span>{d}</span>
            <span className="dot" aria-hidden="true">◆</span>
            <span>{m}</span>
            <span className="dot" aria-hidden="true">◆</span>
            <span>{y}</span>
          </p>
        </Reveal>
        <Reveal delay={320}>
          <p className="date__venue">{wedding.venue.short}</p>
        </Reveal>
        <Reveal className="rule date__rule" delay={380}>
          <span className="diamond" aria-hidden="true">◆</span>
        </Reveal>
      </div>
    </section>
  );
}
