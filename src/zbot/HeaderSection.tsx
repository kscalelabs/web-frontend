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
          src={photoPaths.LANDING_IMAGE_2}
          alt={photoPathAltText.LANDING_IMAGE_ALT_2}
          fill
          className="object-cover brightness-50"
          priority={true}
          loading={"eager"}
        />
      </div>
      <hgroup className="z-10 text-filament col-span-full sm:col-span-4 md:col-span-5 md:col-start-5 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">Zeroth Bot Physical AI</h1>
        <h2 className="text-body">
          Powerful, affordable, and open-source robotics dev kit & platform for builders.
      </h2>
        <form
          action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
          method="post"
          target="_blank"
          className="flex flex-col gap-2"
        >
          <input
            type="email"
            name="EMAIL"
            className="w-full px-4 py-2 text-sm rounded-md bg-background/10 border border-filament/20 backdrop-blur-sm text-rust placeholder:text-filament/50"
            placeholder="Enter your email for updates"
          />
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              name="b_a090115c9a76e96d327360f7d_8a6ee81bb8"
              tabIndex={-1}
            />
          </div>
          <input
            type="submit"
            value="Get Early Access"
            name="subscribe"
            className="w-full px-6 py-2 text-sm rounded-md bg-rust text-filament font-medium cursor-pointer hover:opacity-90 transition-opacity"
          />
        </form>
      </hgroup>
    </header>
  );
};

export default HeaderSection;
