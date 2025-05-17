import { VisualStack } from "@/assets/content/VisualStack";

export function LandingMission() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="col-span-full sm:col-span-4 md:col-span-4 md:col-start-2 lg:col-span-3 2xl:col-span-5 2xl:col-start-3 4xl:col-span-6 4xl:col-start-4 mb-12">
          <h2 className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-3 lg:col-start-2 2xl:col-span-5 2xl:col-start-3 4xl:col-span-6 4xl:col-start-4 text-heading-1 mb-2">
            We&apos;re building a robotics stack that lets you deploy physical AI in the real world
          </h2>
          <p className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-5 2xl:col-start-3 4xl:col-span-6 4xl:col-start-4 text-body-1 mb-6">
            Our software, hardware, and machine learning stack is seemlessly integrated, allowing
            you to focus on building applications instead of installing packages.
          </p>
        </div>
        <figure className="w-full col-span-full sm:col-span-4 md:col-span-4 lg:col-span-3 2xl:col-span-3 4xl:col-span-4 sm:-col-end-1 md:-col-end-2 2xl:-col-end-3 4xl:-col-end-4 aspect-video rounded-lg mb-24">
          <VisualStack />
        </figure>
        {/* <p className="col-span-full sm:col-span-3 md:col-span-4 lg:col-span-3 2xl:col-span-5 4xl:col-span-6 sm:-col-end-1 md:-col-end-1 lg:-col-end-2 2xl:-col-end-3 4xl:-col-end-4 text-heading-1 mb-6"> */}
        <p className="col-span-full sm:col-span-4 md:col-start-2 2xl:col-span-6 2xl:col-start-4 4xl:col-span-8 4xl:col-start-5 text-heading-1 text-center lg:my-12 2xl:my-20 4xl:my-24">
          Owning every layer—from metal to model—lets us move faster, integrate more deeply, and
          open-source each breakthrough for the whole world to build on.
        </p>
      </div>
    </section>
  );
}
