import { motion } from "motion/react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { ColorVariant } from "@/components/color/Color";
import { Discord, IconMode } from "@/components/footer/socialMediaSvgs";
import { NavCTAButton, Size } from "@/components/buttons/CTAButtons";

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16 grid-m ">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          With over 2000 people in our Discord, our community has collaboratively on 6 humanoid
          robot projects, building off each other&apos;s work and publishing papers on the forefront
          of embodied AI tools.
        </p>
      </hgroup>
      <menu className="col-span-full flex flex-row gap-x-4">
        <NavCTAButton href="/" variant={ColorVariant.PLASMA} size={Size.NORMAL}>
          Join the Discord <Discord mode={IconMode.SET} />
        </NavCTAButton>
        <motion.a
          href="/"
          className="text-body w-fit text-plasma dark:text-plasma-dark flex flex-row gap-1 items-center"
          initial="initial"
          whileHover="hover"
          variants={{
            initial: {
              opacity: 0.6,
            },
            hover: {
              opacity: 1,
            },
          }}
        >
          Send feedback <ExpressiveArrow size={"size-4"} />
        </motion.a>
      </menu>

      <article className="col-span-full md:col-span-4 flex flex-col gap-y-4 my-16">
        <h2 className="text-caption uppercase opacity-70 relative y-1/2">About us</h2>
        <p>
          We&apos;re hackers, engineers, and researchers that believe in a world where robots are
          made for everyone
        </p>
        <p>
          We&apos;re from Tesla AI, Google, Meta FAIR, Stanford, and Xiaomi building opportunities
          for robots to be more than workers.
        </p>
      </article>
    </section>
  );
};

export default CommunitySection;
