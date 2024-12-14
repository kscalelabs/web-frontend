import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { ColorVariant, FillMode } from "@/components/color/Color";
import { Discord, IconMode } from "@/components/footer/socialMediaSvgs";
import { InlineCTA, NavCTAButton, Size } from "@/components/buttons/CTAButtons";

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16 ">
      <hgroup className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 flex flex-col gap-4">
        <span className="text-caption uppercase opacity-70 relative y-1/2">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          With over 2000 people in our Discord, our community has collaboratively on 6 humanoid
          robot projects, building off each other&apos;s work and publishing papers on the forefront
          of embodied AI tools.
        </p>
      </hgroup>
      <menu className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 h-min flex flex-row gap-x-4">
        <NavCTAButton
          href="https://discord.com/invite/kscale"
          variant={ColorVariant.PLASMA}
          size={Size.NORMAL}
          mode={FillMode.FILL}
          target="_blank"
        >
          Join the Discord <Discord mode={IconMode.SET} />
        </NavCTAButton>
        <InlineCTA href="https://docs.google.com/forms/d/e/1FAIpQLSemVaJ6HfieS9xDKv7SqWYArHyHLV-kraraiT_VEmPL_6lkPw/viewform">
          Send feedback <ExpressiveArrow size={"size-4"} />
        </InlineCTA>
      </menu>

      <article className="col-span-full sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-span-6 2xl:col-start-7 3xl:col-span-5 3xl:col-start-8 4xl:col-span-4 4xl:col-start-7 flex flex-col gap-y-4 my-16">
        <h2 className="text-caption uppercase opacity-70 relative y-1/2">About us</h2>
        <p>
          We&apos;re hackers, engineers, and researchers that believe in a world where robots are
          made for everyone.
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
