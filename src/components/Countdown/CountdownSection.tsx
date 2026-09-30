import { features } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";
import Countdown from "@/components/Countdown/Countdown";

export default function CountdownSection() {
  if (!features.countdown) return null;
  return (
    <section className="section countdown-section" aria-label="Countdown to the wedding">
      <div className="container center">
        <Reveal>
          <span className="eyebrow">Counting Down</span>
        </Reveal>
        <Reveal delay={140}>
          <Countdown />
        </Reveal>
      </div>
    </section>
  );
}
