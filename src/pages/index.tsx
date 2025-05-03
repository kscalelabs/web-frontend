import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/Button/Button";
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
    <div>
      <main className="">
        <section className="px-layout min-h-[80svh] flex flex-col justify-end bg-gradient-to-t from-background to-rust py-16">
          <h1 className="mb-4">Embodied AI for everybody with a computer</h1>
          <p className="mb-4">
            K-Scale Labs provides open-source tools to train and develop general-purpose robots.
          </p>
          <Button fullWidth>View community benchmarks</Button>
        </section>
        <section className="px-layout flex flex-col grid-r py-16 bg-stone-950">
          <hgroup className="col-span-full mb-4">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Demos</h2>
            <h3 className="mb-4">See how K-Bot&apos;s continuously improved</h3>
          </hgroup>
          <article className="col-span-full 2xl:col-span-6 2xl:col-start-2 aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl p-6 flex flex-col justify-end">
            <p>An impressive statistic about the current state of locomotion.</p>
          </article>
        </section>
        <section className="h-[200svh] bg-white" />
        {/* <section className="px-5 md:px-10">
          <h1 className="mb-4">K-Scale Labs</h1>
          <h2 className="mb-4">The new frontier</h2>
          <h3 className="mb-4">Electronic masterpieces of America</h3>
          <p className="text-body-1 mb-4">
            If the differences between desktop and mobile are primarily visual (e.g., spacing, font
            sizes, or alignment), using CSS media queries to restyle the same component is more
            efficient.
          </p>
          <p className="mb-4">
            If both versions share most of the same logic or structure, restyling avoids duplicating
            code and reduces maintenance overhead.
          </p>
          <p className="text-body-3 mb-4">
            CSS media queries are designed for responsive design and can handle many layout
            adjustments without requiring separate components.
          </p>
        </section> */}
        {/* <HeaderSection /> */}
        {/* <CatchphraseSection /> */}
        {/* <ResearchSection /> */}
        {/* <SpecSection />
        <WhatCanItDoSection />
        <RobotSection />
        <GallerySection />
        <CommunitySection /> */}
      </main>
      {/* <Sponsors /> */}
    </div>
  );
}
