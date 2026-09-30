import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";

export default function Location() {
  const { venue } = wedding;
  return (
    <section className="section location" aria-label="Location">
      <div className="container location__inner">
        <Reveal>
          <span className="eyebrow">Địa điểm</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="location__name font-display">{venue.short}</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="location__sub">{venue.name}</p>
        </Reveal>
        {venue.address && (
          <Reveal delay={260}>
            <p className="location__address">{venue.address}</p>
          </Reveal>
        )}
        {venue.mapsUrl && (
          <Reveal delay={320}>
            <a
              className="btn"
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Xem bản đồ
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
