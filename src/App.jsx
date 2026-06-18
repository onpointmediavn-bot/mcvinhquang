import Navbar from "@/components/Navbar";
import EntryChamber from "@/components/EntryChamber";
import PowerCore from "@/components/PowerCore";
import CustomModule from "@/components/CustomModule";
import SixdoModule from "@/components/SixdoModule";
import RealEstateEngine from "@/components/RealEstateEngine";
import SymphonyModule from "@/components/SymphonyModule";
import HoaXuanModule from "@/components/HoaXuanModule";
import MasteriseModule from "@/components/MasteriseModule";
import MediaEngine from "@/components/MediaEngine";
import CommentaryEngine from "@/components/CommentaryEngine";
import ImpactArchive from "@/components/ImpactArchive";
import ActivationTerminal from "@/components/ActivationTerminal";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-obsidian flex flex-col">
      {/* GLOBAL HUD NAVIGATION BAR */}
      <Navbar />

      {/* 1. MACHINE ENTRY CHAMBER */}
      <EntryChamber />

      {/* 2. CENTRAL POWER CORE */}
      <PowerCore />

      {/* 3. YEAR END PARTY TECHCOMBANK MODULE */}
      <CustomModule />

      {/* 4. SIXDO FASHION SHOW MODULE */}
      <SixdoModule />

      {/* 5. REAL ESTATE ENGINE */}
      <RealEstateEngine />

      {/* 6. SYMPHONY DAEWOO MODULE */}
      <SymphonyModule />

      {/* 7. KICK-OFF HOA XUAN MODULE */}
      <HoaXuanModule />

      {/* 8. MASTERISE STAR CLUB MODULE */}
      <MasteriseModule />

      {/* 9. MEDIA TRANSMISSION ENGINE */}
      <MediaEngine />

      {/* 10. COMMENTARY ENGINE */}
      <CommentaryEngine />

      {/* 11. IMPACT ARCHIVE */}
      <ImpactArchive />

      {/* 12. ACTIVATION TERMINAL */}
      <ActivationTerminal />
    </div>
  );
}
