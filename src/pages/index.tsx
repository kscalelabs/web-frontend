import { useEffect } from "react";
import { Button } from "@/components/ui/Button/Button";
import { useLenis } from "lenis/dist/lenis-react";
import Link from "next/link";
import { LandingDemos } from "@/landing/LandingDemos";
import { LandingAchievements } from "@/landing/LandingAchievements";
import { LandingCommunity } from "@/landing/LandingCommunity";
import { LandingKSim } from "@/landing/LandingKSim";
import { LandingProducts } from "@/landing/LandingProducts";
import { LandingStack } from "@/landing/LandingStack";
import { LandingMission } from "@/landing/LandingMission";
import { LandingDiagram } from "@/landing/LandingDiagram";
import Sponsors from "@/landing/Sponsors";
import { CopyCode } from "@/components/ui/Code/CopyCode";
import { LandingContact } from "@/components/landing/LandingContact";

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
        <section className="relative px-layout min-h-[20rem] h-[80svh] lg:h-svh flex flex-col grid-r justify-end sm:content-end py-16 overflow-hidden">
          <video
            width="1920"
            height="1080"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 size-full object-cover brightness-50"
          >
            <source src="/videos/landing_video_0506.mp4" type="video/mp4" />
          </video>
          <hgroup className="col-span-4 lg:col-span-3 2xl:col-span-5 z-10">
            <h1 className="mb-4">Open-source humanoid robots, build for developers</h1>
            <p className="mb-4">
              Accelerating the world&apos;s transition to general-purpose robots by building the
              most integrated stack for humanoid robots.
            </p>
            <Button adaptive={true} href="/benchmarks">
              View community benchmarks
            </Button>
          </hgroup>
        </section>
        <LandingProducts />
        <LandingMission />
        <LandingDiagram />
        {/* <RobotSection /> */}
        <LandingDemos />
        <LandingStack />
        <LandingKSim />
        <LandingCommunity />
        <LandingAchievements />
        <LandingContact />
        <Sponsors />
      </main>
    </div>
  );
}
