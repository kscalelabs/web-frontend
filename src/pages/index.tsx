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
        <section className="relative px-layout min-h-[20rem] h-[80svh] lg:h-svh flex flex-col grid-r justify-end md:content-end py-16 overflow-hidden">
          <video
            width="1920"
            height="1080"
            autoPlay
            muted
            loop
            className="absolute inset-0 size-full object-cover brightness-50"
          >
            <source src="/videos/landing_video_test.mp4" type="video/mp4" />
          </video>
          <hgroup className="col-span-4 lg:col-span-3 2xl:col-span-5 z-10">
            <h1 className="mb-4">Embodied AI for everybody with a computer</h1>
            <p className="mb-4">
              K-Scale Labs provides open-source tools to train and develop general-purpose robots.
            </p>
            <Button adaptive={true}>View community benchmarks</Button>
          </hgroup>
        </section>
        <section className="px-layout flex flex-col py-16 ">
          <hgroup className="col-span-full mb-4">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2>
            <h3 className="mb-4">Humanoid robots for all your research and development needs</h3>
          </hgroup>
          <ul className="flex flex-col gap-8 md:gap-6 md:grid grid-cols-2 lg:grid-cols-3">
            <li>
              <article>
                <div className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl mb-4" />
                <h4 className="text-heading-1">K-Bot</h4>
                <h5 className="text-heading-2 mb-1">Full sized humanoid</h5>
                <p className="text-stone-400 mb-4">Starting at $9,000 USD</p>
                <Button href="https://shop.kscale.dev" external>
                  Pre-order now
                </Button>
              </article>
            </li>
            <li>
              <article>
                <div className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl mb-4" />
                <h4 className="text-heading-1">Z-Bot</h4>
                <h5 className="text-heading-2 mb-1">Small but mighty</h5>
                <p className="text-stone-400 mb-4">Starting at $1,000 USD</p>
                <Button href="https://zeroth.bot" external>
                  Buy now
                </Button>
              </article>
            </li>
            <li>
              <article>
                <div className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl mb-4" />
                <h4 className="text-heading-1 flex items-center gap-2">
                  M-Bot{" "}
                  <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1">
                    Coming soon
                  </span>
                </h4>
              </article>
            </li>
          </ul>
        </section>
        <section className="px-layout flex flex-col grid-r py-16 bg-stone-950">
          <hgroup className="col-span-full 2xl:col-span-4 2xl:col-start-2 mb-4">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Demos</h2>
            <h3 className="mb-4">See how K-Bot&apos;s continuously improved</h3>
          </hgroup>
          <article className="col-span-full 2xl:col-span-6 2xl:col-start-2 aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl p-6 flex flex-col justify-end">
            <p>An impressive statistic about the current state of locomotion.</p>
          </article>
        </section>
        <section className="px-layout flex flex-col grid-r py-16 ">
          <hgroup className="col-span-full 2xl:col-span-4 2xl:col-start-2 mb-4">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our achievements</h2>
            <h3 className="mb-4">
              We&apos;ve completed 3 generations of robots in less than a year
            </h3>
          </hgroup>
          <article className="col-span-full 2xl:col-span-6 2xl:col-start-2 aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl p-6 flex flex-col justify-end">
            <p>An impressive statistic about the current state of locomotion.</p>
          </article>
        </section>

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
