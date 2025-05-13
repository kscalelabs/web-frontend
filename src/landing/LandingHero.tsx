import { Button } from "@/components/ui/Button/Button";
import { motion, useScroll } from "motion/react";

export function LandingHero() {
  return (
    <section className="py-8 relative min-h-[20rem] h-[87.5svh] max-h-[1280px] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        <video
          width="1920"
          height="1080"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover brightness-[0.25]"
        >
          <source src="/videos/landing/landing_video_0512.mp4" type="video/mp4" />
        </video>
        <hgroup className="col-span-4 2xl:col-start-1 2xl:col-span-4 z-10">
          <h1 className="mb-4">Open-source humanoid robots, built for developers</h1>
          <p className="text-body-1 mb-4">
            We&apos;re building the most integrated open-source stack&mdash;from hardware to machine
            learning&mdash;powering the next era of general-purpose robotics.
          </p>
          <Button adaptive={true} href="https://leaderboard.kscale.dev" external size="lg">
            View humanoid benchmarks
          </Button>
        </hgroup>
      </div>
    </section>
  );
}
