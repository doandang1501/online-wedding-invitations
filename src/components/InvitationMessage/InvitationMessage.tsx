import { wedding } from "@/data/wedding";
import { Reveal } from "@/lib/Reveal";

export default function InvitationMessage() {
  const paragraphs = wedding.message.split(/\n\s*\n/);
  return (
    <section className="section" aria-label="Invitation message">
      <div className="container">
        <Reveal className="rule message__rule">
          <span className="diamond" aria-hidden="true">❧</span>
        </Reveal>
        <div className="message__body">
          <Reveal>
            <div className="message__text">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
