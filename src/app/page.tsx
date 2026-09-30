import { wedding, features } from "@/data/wedding";
import Hero from "@/components/Hero/Hero";
import CoupleSection from "@/components/CoupleSection/CoupleSection";
import WeddingDate from "@/components/WeddingDate/WeddingDate";
import InvitationMessage from "@/components/InvitationMessage/InvitationMessage";
import Gallery from "@/components/Gallery/Gallery";
import CountdownSection from "@/components/Countdown/CountdownSection";
import Location from "@/components/Location/Location";
import FinalSection from "@/components/FinalSection/FinalSection";
import MusicToggle from "@/components/MusicToggle/MusicToggle";

export default function Page() {
  return (
    <main>
      <Hero />
      <CoupleSection />
      <WeddingDate />
      <InvitationMessage />
      <Gallery />
      <CountdownSection />
      <Location />
      <FinalSection />
      <footer className="footer">
        {wedding.bride} &amp; {wedding.groom} — {wedding.date}
      </footer>
      {features.music && <MusicToggle />}
    </main>
  );
}
