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
            className="absolute inset-0 size-full object-cover brightness-[0.25]"
          >
            <source src="/videos/landing_video_0506.mp4" type="video/mp4" />
          </video>
          <hgroup className="col-span-4 lg:col-span-3 2xl:col-span-4 5xl:col-span-3 z-10">
            <h1 className="mb-4">Open-source humanoid robots, built for developers</h1>
            <p className="text-body-1 mb-4">
              K-Scale Labs is accelerating the world&apos;s transition to general-purpose robots by
              building the most integrated stack for humanoid robots.
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
        <LandingAchievements />
        <LandingCommunity />
        <section className="section">
          <hgroup className="col-span-default col-start-default mb-6">
            <h2 className="text-body-2 font-medium text-stone-400 mb-1">About us</h2>
            <p className="text-heading-1 mb-2">
              We&apos;re hackers, engineers, and researchers that believe in a world where robots
              are made for everyone.
            </p>
            <p className="text-body-1 mb-6">
              Shoot us an email at{" "}
              <CopyCode string="inquiries@kscale.dev" size="large" font="regular" /> for any
              business inquiries or if you want to connect with us!
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {/* <Button onClick={() => copyEmail()} icon={Copy}>
                Copy email address
              </Button> */}
              <Link
                className="w-fit text-body-2 transition-colors duration-300 text-orange-700 hover:text-orange-800 focus:text-orange-800 active:text-orange-900"
                href="/careers"
              >
                See open roles (3)
              </Link>
            </div>
          </hgroup>
          <aside className="col-span-full md:col-span-2 lg:col-span-1 lg:-col-end-1 2xl:-col-end-2">
            <h3 className="text-body-3 font-medium text-stone-400 mb-1">Our team (10)</h3>
            <ul className="grid grid-cols-2 gap-x-4 lg:flex flex-col gap-y-2">
              <li>Aaron</li>
              <li>Ali</li>
              <li>Ben</li>
              <li>Chris</li>
              <li>Ian</li>
              <li>Jingxiang</li>
              <li>Pawel</li>
              <li>Rui</li>
              <li>Scott</li>
              <li>Wesley</li>
            </ul>
          </aside>
        </section>

        <Sponsors />
      </main>
    </div>
  );
}
