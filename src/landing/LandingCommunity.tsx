import Discord from "@/assets/icons/icon_discord.svg";
import { Button, ExpressiveButton } from "@/components/ui/Button/Button";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";

export const LandingCommunity = () => {
  return (
    <section className="section">
      <hgroup className="col-span-default col-start-default mb-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">Community</h2>
        <p className="text-heading-1 mb-2">Take ownership of how we build</p>
        <p className="mb-4">
          Get rapid-fire development support through our Discord—home to 2000+ active members who
          have collaborated on 6 humanoid robots and counting.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <Button href="https://discord.gg/pVwubQT9Sg" external icon={Discord}>
            Join our Discord
          </Button>
          <a
            className="w-fit text-body-2 transition-colors duration-300 text-orange-700 hover:text-orange-800 focus:text-orange-800 active:text-orange-900"
            href="https://docs.google.com/forms/d/e/1FAIpQLSemVaJ6HfieS9xDKv7SqWYArHyHLV-kraraiT_VEmPL_6lkPw/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send feedback
          </a>
        </div>
      </hgroup>
      <figure className="col-span-full sm:col-span-2 lg:col-span-4 2xl:col-start-2 aspect-square sm:aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
        <Image
          src={"/photos/community/Team.webp"}
          alt={"Our team working on K-Bot V2"}
          fill
          className="object-cover"
          loading={"eager"}
          priority={true}
          sizes={"100dvw"}
        />
      </figure>
      <figure className="col-span-full sm:col-span-2 aspect-square sm:aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
        <Image
          src={"/photos/community/leRobotHand.webp"}
          alt={"Hugging Face leRobot demo"}
          fill
          className="object-cover object-[50%_15%]"
          loading={"eager"}
          priority={true}
          sizes={"100dvw"}
        />
      </figure>
      <figure className="col-span-full sm:col-span-2 sm:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-start-3  aspect-square sm:aspect-video rounded-lg relative overflow-hidden mb-4 md:mb-6">
        <Image
          src={"/photos/community/HackathonDemos.webp"}
          alt={"Hackathon demos at K-Scale Labs"}
          fill
          className="object-cover"
          loading={"eager"}
          priority={true}
          sizes={"100dvw"}
        />
      </figure>
    </section>
  );
};
