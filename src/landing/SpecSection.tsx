import { InlineCTA } from "@/components/buttons/CTAButtons";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import { motion } from "motion/react";
import Image from "next/image";

const SpecSection = () => {
  return (
    <section className="relative col-span-full grid grid-cols-subgrid grid-rows-3 py-16 gap-y-16">
      <motion.aside className="col-span-full sm:col-span-5 md:col-span-6 lg:col-span-4 xl:col-span-4 2xl:col-span-6 4xl:col-span-5 flex flex-col gap-8 row-span-full">
        <div className="lg:sticky top-32">
          <hgroup>
            <span className="text-heading-md text-foreground60 font-apparat">What is K-Bot?</span>
            <h2 className="text-heading-md">
              A general-purpose humanoid robot optimized for the K-Scale software stack.
            </h2>
          </hgroup>
          <InlineCTA href="https://docs.kscale.dev/robot/intro">
            Read tech specs <ExpressiveArrow size="size-4" />
          </InlineCTA>
        </div>
      </motion.aside>
      <article className="col-span-full lg:col-span-5 2xl:col-span-6 2xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          We built K-Bot with an aerospace-grade aluminium body, anodized in a protective matte
          black finish.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <Image
            src={photoPaths.WHAT_IS_K_BOT_1}
            alt={photoPathAltText.WHAT_IS_K_BOT_1_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </article>
      <article className="col-span-full lg:col-span-5 2xl:col-span-6 2xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          Equipped with high-torque quasi-direct drive electric actuators running high-frequency
          closed-loop control.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <Image
            src={photoPaths.WHAT_IS_K_BOT_2}
            alt={photoPathAltText.WHAT_IS_K_BOT_2_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </article>
      <article className="col-span-full lg:col-span-5 2xl:col-span-6 2xl:-col-end-1 4xl:col-span-7 4xl:-col-end-1 grid grid-cols-subgrid gap-y-4">
        <h3 className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 text-heading-sm">
          Dependable, blazing-fast end-to-end neural network inference with our custom
          high-performance operating system.
        </h3>
        <figure className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 aspect-video relative rounded-md overflow-hidden">
          <Image
            src={photoPaths.WHAT_IS_K_BOT_3}
            alt={photoPathAltText.WHAT_IS_K_BOT_3_ALT}
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
