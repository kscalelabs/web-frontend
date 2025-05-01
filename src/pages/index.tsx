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
    <div className="min-h-screen">
      {/* <NavBar /> */}
      <main className="">
        <section className="px-5 md:px-10">
          <h1 className="text-heading-d">K-Scale Labs</h1>
          <h2 className="text-heading-1">The new frontier</h2>
          <h3 className="text-heading-2">Electronic masterpieces of America</h3>
          <p className="text-body-1">
            If the differences between desktop and mobile are primarily visual (e.g., spacing, font
            sizes, or alignment), using CSS media queries to restyle the same component is more
            efficient.
          </p>
          <p className="text-body-2">
            If both versions share most of the same logic or structure, restyling avoids duplicating
            code and reduces maintenance overhead.
          </p>
          <p className="text-body-3">
            CSS media queries are designed for responsive design and can handle many layout
            adjustments without requiring separate components.
          </p>
        </section>
        {/* <HeaderSection />
        {/* <CatchphraseSection /> */}
        {/* <ResearchSection />
        <SpecSection />
        <WhatCanItDoSection />
        <RobotSection />
        <GallerySection />
        <CommunitySection /> */}
      </main>
      <Sponsors />
      <Footer />
    </div>
  );
}
