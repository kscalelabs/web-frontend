import { useEffect } from "react";
import { Button } from "@/components/ui/Button/Button";
import { useLenis } from "lenis/dist/lenis-react";
import Discord from "@/assets/icons/icon_discord.svg";
import Link from "next/link";
import { LandingDemos } from "@/landing/LandingDemos";
import { LandingAchievements } from "@/landing/LandingAchievements";

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
            playsInline
            className="absolute inset-0 size-full object-cover brightness-50"
          >
            <source src="/videos/landing_video_test.mp4" type="video/mp4" />
          </video>
          <hgroup className="col-span-4 lg:col-span-3 2xl:col-span-5 z-10">
            <h1 className="mb-4">Embodied AI for everybody with a computer</h1>
            <p className="mb-4">
              K-Scale Labs provides open-source tools to train and develop general-purpose robots.
            </p>
            <Button adaptive={true} href="/benchmarks">
              View community benchmarks
            </Button>
          </hgroup>
        </section>
        <section className="px-layout flex flex-col grid-r py-16 ">
          <hgroup className="col-span-full lg:col-span-4 xl:col-span-3 2xl:col-span-4 3xl:col-span-3 4xl:col-span-2 2xl:col-start-2 3xl:col-start-2 4xl:col-start-2 mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2>
            <h3 className="text-heading-1">
              Humanoid robots for all your research and development needs
            </h3>
          </hgroup>
          <ul className="col-span-full 2xl:col-span-6 2xl:col-start-2 flex flex-col gap-8 md:gap-6 md:grid grid-cols-2 lg:grid-cols-3">
            <li>
              <article className="p-4 bg-stone-950 rounded-2xl h-full">
                <div className="aspect-[3/4] sm:aspect-video mb-4" />
                <h4 className="text-heading-2 mb-1">K-Bot</h4>
                <h5 className="text-body-2">Full sized humanoid</h5>
                <p className="text-body-3 text-stone-400 mb-4">Starting at $9,000 USD</p>
                <Button href="https://shop.kscale.dev" external>
                  Pre-order now
                </Button>
              </article>
            </li>
            <li>
              <article className="p-4 bg-stone-950 rounded-2xl h-full">
                <div className="aspect-[3/4] sm:aspect-video mb-4" />
                <h4 className="text-heading-2 mb-1">Z-Bot</h4>
                <h5 className="text-body-2">Small but mighty</h5>
                <p className="text-body-3 text-stone-400 mb-4">Starting at $1,000 USD</p>
                <Button href="https://zeroth.bot" external>
                  Buy now
                </Button>
              </article>
            </li>
            <li>
              <article className="p-4 bg-stone-950 rounded-2xl h-full">
                <div className="aspect-[3/4] sm:aspect-video mb-4" />
                <h4 className="text-heading-2 flex items-center gap-2">
                  M-Bot{" "}
                  <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1">
                    Coming soon
                  </span>
                </h4>
              </article>
            </li>
          </ul>
        </section>
        <LandingDemos />
        <LandingAchievements />
        <section className="section bg-stone-950">
          <hgroup className="col-span-default mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Community</h2>
            <p className="text-heading-1 mb-2">Take ownership of how we build</p>
            <p className="mb-4">
              Get rapid-fire development support through our Discord—home to 2000+ active members
              who have collaborated on 6 humanoid robots and counting.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <Button href="https://discord.gg/pVwubQT9Sg" external icon={Discord}>
                Join our Discord
              </Button>
              <a
                className="w-fit text-body-2 transition-colors duration-300 text-orange-700 hover:text-orange-800 focus:text-orange-800 active:text-orange-900"
                href="https://docs.google.com/forms/d/e/1FAIpQLSemVaJ6HfieS9xDKv7SqWYArHyHLV-kraraiT_VEmPL_6lkPw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send feedback
              </a>
            </div>
          </hgroup>
          <article className="col-span-full 2xl:col-span-6 2xl:col-start-2 aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl p-6 flex flex-col justify-end"></article>
        </section>
        <section className="section">
          <hgroup className="col-span-default mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our team</h2>
            <p className="text-heading-1 mb-6">
              We're hackers, engineers, and researchers that believe in a world where robots are
              made for everyone.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <Button href="https://discord.gg/pVwubQT9Sg" external icon={Discord}>
                Join our Discord
              </Button>
              <Link
                className="w-fit text-body-2 transition-colors duration-300 text-orange-700 hover:text-orange-800 focus:text-orange-800 active:text-orange-900"
                href="/careers"
              >
                See open roles (3)
              </Link>
            </div>
          </hgroup>
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
