import { useEffect } from "react";
import { useLenis } from "lenis/dist/lenis-react";
import { LandingDemos } from "@/landing/LandingDemos";
import { LandingAchievements } from "@/landing/LandingAchievements";
import { LandingCommunity } from "@/landing/LandingCommunity";
import { LandingKSim } from "@/landing/LandingKSim";
import { LandingProducts } from "@/landing/LandingProducts";
import { LandingStack } from "@/landing/LandingStack";
import { LandingMission } from "@/landing/LandingMission";
import { LandingDiagram } from "@/landing/LandingDiagram";
import Sponsors from "@/landing/Sponsors";
import { LandingContact } from "@/landing/LandingContact";
import { LandingHero } from "@/landing/LandingHero";

export default function Home() {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      const handleScroll = () => {
        if (lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", true);
        }
        if (!lenis.isScrolling) {
          document.body.classList.toggle("scroll-bar", false);
        }
      };

      lenis.on("scroll", handleScroll);

      return () => {
        lenis.off("scroll", handleScroll);
      };
    }
  }, [lenis]);

  return (
    <div>
      <main className="">
        <LandingHero />
        <LandingProducts />
        <LandingMission />
        <LandingDiagram />
        {/* <RobotSection /> */}
        <LandingDemos />
        <LandingStack />
        <LandingKSim />
        <LandingAchievements />
        <LandingCommunity />
        <LandingContact />
        <Sponsors />
      </main>
    </div>
  );
}
