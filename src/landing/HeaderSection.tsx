import { DownArrowIcon } from "@/components/iconography/Iconography";
import RobotWrapper from "@/components/robot/RobotWrapper";
import { useRef } from "react";

// const PREORDER_URL = "https://shop.kscale.dev/collections/all";
// const PREORDER_URL = "https://discord.gg/pVwubQT9Sg";

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
)

const HeaderSection = () => {
  const ref = useRef(null);

  return (
    <>
      <header className="col-span-full flex flex-col md:flex-row min-h-[90svh] auto-rows-auto justify-end md:justify-start items-center text-foreground -mx-[5vw] px-[5vw] gap-6 md:gap-10">
        <div className="flex order-2 md:order-1 flex-col w-full md:w-auto self-end gap-3 md:gap-5 justify-center items-start z-10">
          <div className="flex flex-col w-full md:w-auto md:gap-4">
            <h1 className="text-4xl md:text-[4.2rem] tracking-tight whitespace-nowrap">
              K-Scale Labs
            </h1>
            <h4 className="text-base md:text-[1.1rem] tracking-tight">
              Moving humanity up the Kardashev scale
            </h4>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
            <EmailSignupSection />
          </div>
        </div>
        <div
          className="order-1 md:order-2 md:flex flex-col w-full items-end md:flex-1 top-0 lg:h-full h-[50vh] overflow-hidden md:min-h-[16rem]"
          ref={ref}
        >
          <RobotWrapper />
        </div>
      </header>
      <div className="flex col-span-full pt-4 justify-center">
        <DownArrowIcon />
      </div>
    </>
  );
};

export default HeaderSection;
