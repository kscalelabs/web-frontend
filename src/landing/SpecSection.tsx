import { InlineCTA } from "@/components/buttons/CTAButtons";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const SpecSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
  return (
    <section
      className="col-span-full grid grid-cols-subgrid min-h-[90svh] py-16 gap-y-16  auto-rows-min overflow-y-visible items-start"
      ref={ref}
    >
      <motion.article
        className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8 lg:sticky top-32"
        style={{
          opacity,
        }}
      >
        <hgroup>
          <span className="text-heading-md text-foreground60 font-apparat">What is K-Bot?</span>
          <h2 className="text-heading-md">
            A 4.5 foot humanoid robot, optimized for our approach to software for embodied AI.
          </h2>
        </hgroup>
        <InlineCTA href="https://docs.kscale.dev/robot/intro">
          Read tech specs <ExpressiveArrow size="size-4" />
        </InlineCTA>
      </motion.article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 text-heading-sm">
          {`We've built K-Bot with an aerospace-grade alumininum body, for under $20,000 USD. `}
          <span className="inline text-foreground60">
            Anodized with a matte black finish, because it looks cooler.
          </span>
        </h3>
        <figure className="relative col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 aspect-video rounded-md overflow-hidden">
          <Image
            src="/photos/DSC06746.jpg"
            alt="Photo: Close-up photo of K-Bot's aluminum chassis"
            fill
            className="object-cover"
          />
        </figure>
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 text-heading-sm">
          Equipped with 120 Nm actuators at the hips, taking advantage of strong torque for dynamic
          walking and manipulation.
        </h3>
        <figure className="relative col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 aspect-video rounded-md overflow-hidden">
          <Image
            src="/photos/actuators.jpg"
            alt="Photo: Close-up photo of K-Bot's 120 Nm actuators"
            fill
            className="object-cover"
          />
        </figure>
      </article>
      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 text-heading-sm">
          Explore the potential of any idea with 32 TOPS of AI performance.
        </h3>
        <figure className="relative col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-5 2xl:col-start-8 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-8 aspect-video rounded-md overflow-hidden">
          <Image
            src="/photos/DSC06719.jpg"
            alt="Photo: Close-up photo of K-Bot's onboard Jetson AGX"
            fill
            className="object-cover"
          />
        </figure>
      </article>
    </section>
  );
};

export default SpecSection;
