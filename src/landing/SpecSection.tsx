import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import { motion } from "motion/react";
import Image from "next/image";

const SpecSection = () => {
  return (
    <section className="relative col-span-full grid grid-cols-subgrid grid-rows-3 py-16 gap-y-16">
      <motion.aside className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8 row-span-full">
        <div className="lg:sticky top-32">
          <hgroup>
            <span className="text-heading-md text-foreground60 font-apparat">
              Introducting K-Bot
            </span>
            <h2 className="text-heading-md">
              Our next-generation general-purpose humanoid robot, open-source and made for everyone.
            </h2>
          </hgroup>
          {/* <InlineCTA href="https://docs.kscale.dev/robot/intro">
            Read tech specs <ExpressiveArrow size="size-4" />
          </InlineCTA> */}
        </div>
      </motion.aside>
      <article className="col-span-full lg:col-span-5 xl:col-span-5 w1440:col-span-6 w1440:-col-end-1 xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          The world&apos;s best platform for the latest advancements in machine learning for
          robotics.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <Image
            src={photoPaths.K_BOT_DARK}
            alt={photoPathAltText.K_BOT_DARK_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </article>
      <article className="col-span-full lg:col-span-5 xl:col-span-5 w1440:col-span-6 w1440:-col-end-1 xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          Dependable, low-overhead Rust-based operating system, designed for end-to-end neural
          networks.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <video
            src={photoPaths.K_BOT_TOAST_VIDEO}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            aria-label={photoPathAltText.K_BOT_TOAST_VIDEO_ALT}
          />
        </figure>
      </article>
      <article className="col-span-full lg:col-span-5 xl:col-span-5 w1440:col-span-6 w1440:-col-end-1 xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          Using high-torque, low-inertia, MIT Cheetah-style actuators for efficient real-world
          performance in a cost-effective package.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 w1440:col-span-5 w1440:col-start-2 2xl:col-span-5 2xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <Image
            src={photoPaths.K_BOT_ACTUATOR}
            alt={photoPathAltText.K_BOT_ACTUATOR_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </article>
    </section>
  );
};

export default SpecSection;
