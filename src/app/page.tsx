import { features } from "@/data/wedding";
import Pager from "@/components/Pager";
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
    <Pager>
      <Hero />
      <CoupleSection />
      <WeddingDate />
      <InvitationMessage />
      <Gallery />
      <CountdownSection />
      <Location />
      <FinalSection />
      {features.music && <MusicToggle />}
    </Pager>
  );
}
