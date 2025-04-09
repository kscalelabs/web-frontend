import { CTAButton, InlineCTA } from "@/components/buttons/CTAButtons";
import { Discord } from "@/components/footer/socialMediaSvgs";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import {
  ColorVariant,
  FillMode,
  IconMode,
  Size,
  TeamCol1,
  TeamCol2,
} from "@/components/util/constants";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";

const TeamColumn = ({ members, styling }: { members: string[]; styling: string }) => (
  <ul className={styling + " col-span-2 whitespace-nowrap"}>
    {members.map((member, index) => (
      <li className="list-none" key={index}>
        {member}
      </li>
    ))}
  </ul>
);

// const CommunitySection = () => {
//   return (
//     <section className="col-span-full grid grid-cols-subgrid auto-rows-min gap-y-4 pb-16">
//       <article
//         className="col-span-full sm:col-span-5 md:col-span-5
//           lg:col-span-4 xl:col-span-3 w1440:col-span-4
//           2xl:col-span-4 4xl:col-span-3 5xl:col-span-3
//           flex flex-col gap-y-4 pb-6"
//       >
//         <h2 className="text-caption uppercase text-foreground70 relative y-1/2">About us</h2>
//         <p>
//           We&apos;re hackers, engineers, and researchers that believe in a world where robots are
//           made for everyone.
//         </p>
//       </article>
//       <div className="col-span-full flex gap-x-6 justify-start">
//         <TeamColumn members={TeamCol1()} styling={"space-y-0.5"} />
//         <TeamColumn members={TeamCol2()} styling={"space-y-0.5"} />
//       </div>
//     </section>
//   );
// };

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
          href="https://discord.gg/se4fRTsek7"
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
            src={photoPaths.COMMUNITY_MAIN_BIG}
            alt={photoPathAltText.COMMUNITY_MAIN_BIG_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
        <figure className="col-span-full  md:col-span-2 2xl:col-span-3 aspect-square sm:aspect-video rounded-md relative overflow-hidden">
          <Image
            src={photoPaths.COMMUNITY_UPPER_RIGHT}
            alt={photoPathAltText.COMMUNITY_UPPER_RIGHT_ALT}
            fill
            className="object-cover object-[50%_15%]"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
        <figure className="col-span-full md:col-span-5 md:col-start-2 2xl:col-span-5 2xl:col-start-4 aspect-square sm:aspect-video rounded-md relative overflow-hidden">
          <Image
            src={photoPaths.COMMUNITY_BOTTOM}
            alt={photoPathAltText.COMMUNITY_BOTTOM_ALT}
            fill
            className="object-cover"
            loading={"eager"}
            priority={true}
            sizes={"100dvw"}
          />
        </figure>
      </aside>

      <article
        className="col-span-full sm:col-span-5 md:col-span-5 md:col-start-2
          lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2
          3xl:col-span-4 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 5xl:col-span-3 5xl:col-start-2
          flex flex-col gap-y-4 pt-16 pb-6"
      >
        <h2 className="text-caption uppercase text-foreground70 relative y-1/2">
          Join Our Mission
        </h2>
        <p>
          We&apos;re hackers, engineers, and researchers that believe in a world where robots are
          made for everyone.
        </p>
      </article>
      <div
        className="col-span-full sm:col-span-5 md:col-span-5 md:col-start-2
          lg:col-span-4 lg:col-start-2 xl:col-span-3 xl:col-start-2 2xl:col-span-5 2xl:col-start-2
          3xl:col-span-4 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 5xl:col-span-3 5xl:col-start-2
          flex gap-x-6 justify-start"
      >
        <TeamColumn members={TeamCol1()} styling={"space-y-0.5"} />
        <TeamColumn members={TeamCol2()} styling={"space-y-0.5"} />
      </div>
    </section>
  );
};

export default CommunitySection;
