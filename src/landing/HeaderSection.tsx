import { CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { FillMode } from "@/components/util/constants";
import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[90svh] auto-rows-auto items-end text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <Image
          sizes={"100vw"}
          src={photoPaths.LANDING_IMAGE}
          alt={photoPathAltText.LANDING_IMAGE_ALT}
          fill
          className="object-cover brightness-50"
          priority={true}
          loading={"eager"}
        />
      </div>
      <hgroup className="z-10 text-filament col-span-full sm:col-span-4 md:col-span-5 md:col-start-5 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">The world's freest humanoid robots</h1>
        <h2 className="text-body">Designed to move humanity up the Kardashev scale</h2>
        <CTASubtitleButton
          subtitle="Contribute to the Community"
          className="w-full"
          mode={FillMode.FILL}
        >
          Join our Discord
        </CTASubtitleButton>
      </hgroup>
    </header>
  );
};

export default HeaderSection;
