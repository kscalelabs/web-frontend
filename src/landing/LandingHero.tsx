import { Button } from "@/components/ui/Button/Button";

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
          <source src="/videos/landing/landing_video_0506.mp4" type="video/mp4" />
        </video>
        <hgroup className="col-span-4 2xl:col-start-2 2xl:col-span-4 z-10">
          <h1 className="mb-4">Open-source humanoid robots, built for developers</h1>
          <p className="text-body-1 mb-4">
            We&apos;re building the most integrated stack—from hardware to machine learning—to power
            the next generation of general-purpose robotics.
          </p>
          <Button adaptive={true} href="/benchmarks" size="lg">
            View humanoid benchmarks
          </Button>
        </hgroup>
      </div>
    </section>
  );
}
