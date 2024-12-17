import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import HeaderSection from "@/landing/HeaderSection";
import ResearchSection from "@/landing/ResearchSection";
import SpecSection from "@/landing/SpecSection";
import RobotSection from "@/landing/RobotSection";
import GallerySection from "@/landing/GallerySection";
import PricingSection from "@/landing/PricingSection";
import CommunitySection from "@/landing/CommunitySection";
import Sponsors from "@/landing/Sponsors";
import { Grid } from "@/components/grid/Grid";
import { useEffect } from "react";
import { useLenis } from "lenis/dist/lenis-react";

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
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="gap-y-4">
        <HeaderSection />
        <ResearchSection />
        <SpecSection />
        <RobotSection />
        <GallerySection />
        <PricingSection />
        <CommunitySection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
