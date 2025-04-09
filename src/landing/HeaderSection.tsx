import { CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { FillMode } from "@/components/util/constants";
import Image from "next/image";
import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const EmailSignupSection = () => (
  <form
    action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e96d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
    method="post"
    target="_blank"
    className="w-full sm:w-auto md:w-full lg:max-w-md"
  >
    <div className="flex flex-col sm:flex-row sm:gap-0 gap-3">
      <input
        type="email"
        name="EMAIL"
        className="w-full px-4 py-2 text-sm sm:rounded-r-none rounded-md bg-background/20 border border-foreground/10 backdrop-blur-md text-rust placeholder:text-filament/50 focus:outline-none focus:ring-1 focus:ring-rust/50 transition-all"
        placeholder="Your email address"
      />
      <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
        <input type="text" name="b_a090115c9a76e96d327360f7d_8a6ee81bb8" tabIndex={-1} />
      </div>
      <button
        type="submit"
        name="subscribe"
        className="whitespace-nowrap px-4 py-2 text-sm sm:rounded-l-none rounded-md bg-rust text-filament font-medium cursor-pointer hover:bg-rust/90 transition-colors sm:-ml-px"
      >
        Get Early Access
      </button>
    </div>
  </form>
);

const HeaderSection = () => {
  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[90svh] auto-rows-auto items-end text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <video
          src={photoPaths.LANDING_VIDEO}
          className="w-full h-full object-cover brightness-50"
          autoPlay
          loop
          muted
          playsInline
          aria-label={photoPathAltText.LANDING_VIDEO_ALT}
        />
      </div>
      <hgroup className="z-10 text-filament col-span-full sm:col-span-4 md:col-span-5 md:col-start-5 lg:col-span-4 lg:col-start-6 w1440:col-span-5 w1440:col-start-8 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">Intelligent Robot, Today</h1>
        <h2 className="text-body">
          The world's most intelligent and accessible open-source humanoid robot for a world where
          robots are made for everyone and by everyone.
        </h2>
        <EmailSignupSection />
      </hgroup>
    </header>
  );
};

export default HeaderSection;
