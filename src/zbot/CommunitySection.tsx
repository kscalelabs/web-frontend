import { CTAButton, InlineCTA } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode, IconMode, Size } from "@/components/util/constants";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { Discord } from "@/components/footer/socialMediaSvgs";
import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const CommunitySection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 py-16 ">
      <hgroup className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 flex flex-col gap-4">
        <span className="text-caption uppercase text-foreground70 relative y-1/2">Community</span>
        <h2 className="text-heading-md">Take ownership of how we keep building.</h2>
        <p>
          Get rapid-fire support during your development process through our Discord&mdash;home to
          2000+ active members who have collaborated on 6 humanoid robots and counting.
        </p>

        <p>
          We are actively publishing papers and collectively exploring the frontier of embodied
          intelligence.
        </p>
      </hgroup>
      <menu className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 h-min flex flex-row flex-wrap gap-4">
        <CTAButton
          href="https://discord.gg/G6KP76uha5"
          variant={ColorVariant.PLASMA}
          size={Size.NORMAL}
          mode={FillMode.FILL}
          target="_blank"
          className="max-md:w-full pointer-events-auto"
        >
          Join the Discord <Discord mode={IconMode.SET} />
        </CTAButton>
        <InlineCTA href="https://docs.google.com/forms/d/e/1FAIpQLSemVaJ6HfieS9xDKv7SqWYArHyHLV-kraraiT_VEmPL_6lkPw/viewform">
          Send feedback <ExpressiveArrow size={"size-4"} />
        </InlineCTA>
      </menu>

      <aside className="my-8 grid grid-cols-subgrid gap-y-4 md:gap-y-[2.5vw] 2xl:gap-y-[1.25vw] col-span-full md:col-span-7 md:col-start-2 2xl:col-span-10 2xl:col-start-2">
        <figure className="col-span-full md:col-span-5 2xl:col-span-7 aspect-square sm:aspect-video rounded-md relative overflow-hidden">
          <Image
            src={photoPaths.ZBOT_COMMUNITY_MAIN_BIG}
            alt={photoPathAltText.ZBOT_COMMUNITY_MAIN_BIG_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
        <figure className="col-span-full  md:col-span-2 2xl:col-span-3 aspect-square sm:aspect-video rounded-md relative overflow-hidden">
          <Image
            src={photoPaths.ZBOT_COMMUNITY_UPPER_RIGHT}
            alt={photoPathAltText.ZBOT_COMMUNITY_UPPER_RIGHT_ALT}
            fill
            className="object-cover object-[50%_15%]"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
        <figure className="col-span-full md:col-span-5 md:col-start-2 2xl:col-span-5 2xl:col-start-4 aspect-square sm:aspect-video rounded-md relative overflow-hidden">
          <Image
            src={photoPaths.ZBOT_COMMUNITY_BOTTOM}
            alt={photoPathAltText.ZBOT_COMMUNITY_BOTTOM_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </aside>

      <article className="col-span-full grid grid-cols-subgrid gap-y-4">
        <span className="text-caption uppercase text-foreground70 col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-span-5 2xl:col-start-2">
          About
        </span>

        <div className="col-span-full grid grid-cols-subgrid gap-x-8">
          <div className="col-span-5 sm:col-span-5 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-5 lg:col-start-2 xl:col-span-5 xl:col-start-2 2xl:col-span-5 2xl:col-start-2 flex flex-col gap-4">
            <h2 className="text-heading-md">Our Team</h2>
            <figure className="aspect-[2/1] relative rounded-md overflow-hidden">
              <Image
                src={photoPaths.ZBOT_TEAM}
                alt={photoPathAltText.ZBOT_TEAM_ALT}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </figure>
            <div className="flex flex-col items-center mt-4 mb-4 sm:mb-8">
              <figure className="w-full h-20 relative rounded-md overflow-hidden translate-x-8 mr-16">
                <Image
                  src={photoPaths.ZBOT_PARTNERS_SVG_WHITE}
                  alt={photoPathAltText.ZBOT_PARTNERS_SVG_WHITE_ALT}
                  width={2688}
                  height={768}
                  className="w-full h-full object-cover object-[10%_30%] hidden dark:block"
                  quality={100}
                  priority
                />
                <Image
                  src={photoPaths.ZBOT_PARTNERS_SVG_BLACK}
                  alt={photoPathAltText.ZBOT_PARTNERS_SVG_BLACK_ALT}
                  width={2688}
                  height={768}
                  className="w-full h-full object-cover object-[10%_30%] dark:hidden"
                  quality={100}
                  priority
                />
              </figure>
              <h3 className="text-sm font-medium -mt-20">Our Partners</h3>
            </div>{" "}
          </div>

          <div className="col-span-4 sm:col-span-4 sm:col-start-7 md:col-span-4 md:col-start-7 lg:col-span-4 lg:col-start-7 xl:col-span-4 xl:col-start-7 2xl:col-span-4 2xl:col-start-7">
            <div className="flex flex-col gap-4 text-xs mt-[3rem]">
              <div className="flex flex-col gap-2">
                <h3 className="text-heading-sm font-medium">Our Story</h3>
                <p className="text-foreground80 leading-relaxed">
                  Previously, it was incredibly expensive and time-consuming for programmers,
                  researchers, and students to build the mechanical, electrical, software, and ML
                  stack by themselves. Jingxiang, Kelsey, and Denys made the first Zeroth Bots as an
                  open-source project aimed at making robotics and AI accessible to everyone.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-heading-sm font-medium">Our Mission</h3>
                <p className="text-foreground80 leading-relaxed">
                  Now, the team is proudly partnered with K-Scale Labs and Grand Journey to bring
                  Zeroth Bots to production and make it possible for anybody that can write Python
                  to program robots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CommunitySection;
