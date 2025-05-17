import { Button } from "@/components/ui/Button/Button";
import BackgroundVideo from "next-video/background-video";
import HeroVideo from "@/videos/landing/landing_video_0514.mp4";

export function LandingHero() {
  return (
    <section className="relative min-h-[20rem] h-[87.5svh] max-h-[1280px] overflow-hidden">
      <BackgroundVideo className="min-h-[20rem] h-[87.5svh] max-h-[1280px]" src={HeroVideo}>
        <div className="z-50 section-container h-full sm:content-end">
          <hgroup className="col-span-4 md:col-span-5 xl:col-span-4 2xl:col-span-7 z-10">
            <h1 className="mb-3">Open-source humanoid robots, built for developers</h1>
            <p className="text-body-1 mb-6">
              We&apos;re accelerating the timeline to a world with billions of robots, and making
              sure they&apos;re accessible, auditable, and beneficial to humanity.
            </p>
            <Button adaptive={true} href="/benchmarks" size="lg">
              Get started now
            </Button>
          </hgroup>
          {/* </BackgroundVideo> */}
        </div>
      </BackgroundVideo>
    </section>
  );
}

{
  /* <BackgroundVideo src={HeroVideo}> */
}
<div className="z-50 section-container h-full sm:content-end">
  <hgroup className="col-span-4 md:col-span-5 xl:col-span-4 2xl:col-span-7 z-10">
    <h1 className="mb-3">Open-source humanoid robots, built for developers</h1>
    <p className="text-body-1 mb-6">
      We&apos;re accelerating the timeline to a world with billions of robots, and making sure
      they&apos;re accessible, auditable, and beneficial to humanity.
    </p>
    <Button adaptive={true} href="/benchmarks" size="lg">
      Get started now
    </Button>
  </hgroup>
  {/* </BackgroundVideo> */}
</div>;
