import { Button } from "@/components/ui/Button/Button";
import { motion, useScroll } from "motion/react";

export function LandingHero() {
  return (
    <section className="py-16 relative min-h-[20rem] h-[87.5svh] max-h-[1280px] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        <video
          width="1920"
          height="1080"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover brightness-[0.4]"
        >
          <source src="/videos/landing/landing_video_0512.mp4" type="video/mp4" />
        </video>
        <hgroup className="col-span-4 md:col-span-5 xl:col-span-4 2xl:col-span-7 z-10">
          <h1 className="mb-4">Open-source humanoid robots, built for developers</h1>
          <p className="text-body-1 mb-6">
            We&apos;re accelerating the timeline to a world with billions of robots, and making sure
            they&apos;re accessible, auditable, and beneficial to humanity.
          </p>
          <Button adaptive={true} href="/benchmarks" size="lg">
            Get started now
          </Button>
        </hgroup>
      </div>
    </section>
  );
}
