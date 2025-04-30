import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";

const EmailSignupSection = () => (
  <form
    action="https://dev.us22.list-manage.com/subscribe/post?u=a090115c9a76e76d327360f7d&amp;id=8a6ee81bb8&amp;f_id=00c3dce1f0"
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
        <input type="text" name="b_a090115c9a76e76d327360f7d_8a6ee81bb8" tabIndex={-1} />
      </div>
      <button
        type="submit"
        name="subscribe"
        className="whitespace-nowrap px-4 py-2 text-sm sm:rounded-l-none rounded-md bg-rust text-filament font-medium cursor-pointer hover:bg-rust/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 ease-in-out sm:-ml-px"
      >
        Get Updates
      </button>
    </div>
  </form>
);

const BuyNowButton = () => (
  <div className="w-full sm:w-auto md:w-full lg:max-w-md">
    <div className="flex flex-col sm:flex-row sm:gap-0 gap-3">
      <a
        href="http://url.kscale.dev/shop"
        className="w-full text-center whitespace-nowrap px-4 py-2 text-sm rounded-md bg-rust text-filament font-medium cursor-pointer hover:bg-rust/90 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 ease-in-out"
        target="_blank"
      >
        Order Now
      </a>
    </div>
  </div>
);

const HeaderSection = () => {
  return (
    <header className="col-span-full min-h-[90svh] flex flex-col items-start justify-end text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="absolute inset-0">
        <img
          src={photoPaths.LANDING_IMAGE_3}
          className="w-full h-full object-cover"
          aria-label={photoPathAltText.LANDING_IMAGE_3_ALT}
        />
      </div>
      <div className="flex items-end justify-between w-full mb-12">
        <hgroup className="z-10 text-filament flex flex-col gap-4">
          <h1 className="text-heading-lg text-rust font-medium">Humanoid robots</h1>
          <h1 className="text-heading-lg font-medium">made for developers, by developers</h1>
          {/* <BuyNowButton />
        <EmailSignupSection /> */}
        </hgroup>
        <hgroup className="flex flex-col items-end gap-1.5 justify-end text-white z-10">
          <p className="text-body">GESTURE SUPPORT</p>
          <p className="text-body">VOICE COMMAND</p>
          <p className="text-body">INTEGRATED HARDWARE</p>
          <p className="text-body">SOFTWARE ECOSYSTEM</p>
          <p className="text-body">OPEN-SOURCE AI</p>
        </hgroup>
      </div>
    </header>
  );
};

export default HeaderSection;
