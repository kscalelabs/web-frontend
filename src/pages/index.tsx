import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import CommunitySection from "@/landing/CommunitySection";
import GallerySection from "@/landing/GallerySection";
import HeaderSection from "@/landing/HeaderSection";
import ResearchSection from "@/landing/ResearchSection";
import RobotSection from "@/landing/RobotSection";
import SpecSection from "@/landing/SpecSection";
import Sponsors from "@/landing/Sponsors";
import WhatCanItDoSection from "@/landing/WhatCanItDoSection";
import { useLenis } from "lenis/dist/lenis-react";
import { useEffect } from "react";

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
        <WhatCanItDoSection />
        <RobotSection />
        <GallerySection />
        <CommunitySection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
