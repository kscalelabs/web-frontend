import { Button } from "@/components/ui/Button/Button";

export function LandingHero() {
  return (
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
  );
} 