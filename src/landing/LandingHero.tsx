import { Button } from "@/components/ui/Button/Button";
// import BackgroundVideo from "next-video";
// import Video from "next-video";
// import HeroVideo from "@/videos/landing/landing_video_0514.mp4";

export function LandingHero() {
  return (
    <section className="py-16 relative min-h-[20rem] h-[90svh] lg:h-[95svh] max-h-[1280px] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        <video
          width="1920"
          height="1080"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-x-0 -inset-y-2 size-full object-cover object-top brightness-[0.4]"
        >
          <source src="/videos/landing/landing_video_0514.mp4" type="video/mp4" />
        </video>

        <hgroup className="col-span-4 md:col-span-5 xl:col-span-4 2xl:col-span-7 z-10">
          <h1 className="mb-3">Open-source humanoid robots, built for developers</h1>
          <p className="text-body-1 mb-6">
            We&apos;re accelerating the timeline to a world with billions of robots, and making sure
            they&apos;re accessible, auditable, and beneficial to humanity.
          </p>
          <Button adaptive={true} href="/benchmarks" size="lg">
            Join the RL training challenge
          </Button>
        </hgroup>
        {/* </BackgroundVideo> */}
      </div>
    </section>
  );
}
