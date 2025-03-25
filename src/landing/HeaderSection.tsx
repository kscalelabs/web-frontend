import { CTAButton } from "@/components/buttons/CTAButtons";
import { DownArrowIcon } from "@/components/iconography/Iconography";
import RobotWrapper from "@/components/robot/RobotWrapper";
import { ColorVariant, FillMode } from "@/components/util/constants";
import { useRef } from "react";

// const PREORDER_URL = "https://shop.kscale.dev/collections/all";
// const PREORDER_URL = "https://discord.gg/pVwubQT9Sg";

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
            <CTAButton
              mode={FillMode.FILL}
              href="https://docs.kscale.dev/"
              variant={ColorVariant.RUST}
              className="w-full md:w-auto md:px-12 whitespace-nowrap py-4 text-[1rem]"
            >
              Documentation ↗
            </CTAButton>
            <CTAButton
              mode={FillMode.FILL}
              href="/why"
              variant={ColorVariant.FILAMENT}
              className="w-full md:w-auto md:px-12 whitespace-nowrap py-4 text-[1rem]"
            >
              Mission ↗
            </CTAButton>
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
