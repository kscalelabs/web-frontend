import { useRef } from "react";
import { motion, useInView } from "motion/react";
import RobotWrapper from "@/components/robot/RobotWrapper";
import { CTAButton } from "@/components/buttons/CTAButtons";
import { DownArrowIcon } from "@/components/iconography/Iconography";
import { ColorVariant, FillMode } from "@/components/util/constants";

const REGISTRATION_URL = "https://lu.ma/kscale-ai-day";

const HeaderSection = () => {
  const ref = useRef(null);

  return (
    <>
      <header className="col-span-full flex flex-row min-h-[90svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
        <div className="flex flex-col w-full md:w-auto self-end gap-3 md:gap-5 justify-center items-start">
          <div className="flex flex-col w-full md:w-auto md:gap-4">
            <h1 className="text-4xl md:text-[4.2rem] tracking-tight">K-Scale AI Day</h1>
            <h4 className="text-base md:text-[1.1rem] tracking-tight">
              Launching our robots, research, and models
            </h4>
          </div>
          <CTAButton
            mode={FillMode.FILL}
            href={REGISTRATION_URL}
            variant={ColorVariant.RUST}
            className="w-full md:w-auto md:px-24 whitespace-nowrap py-4 text-[1rem]"
          >
            Join us on Feb 22nd ↗
          </CTAButton>
        </div>
        {/* <div
          className="flex flex-col items-end relative h-[60svh] lg:h-full lg:w-full min-h-[16rem]"
          ref={ref}
        >
          <RobotWrapper />
        </div> */}
      </header>
      <div className="flex col-span-full pt-4 justify-center">
        <DownArrowIcon />
      </div>
    </>
  );
};

export default HeaderSection;
