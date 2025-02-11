import { CTAButton, CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode } from "@/components/util/constants";

const REGISTRATION_URL = "https://lu.ma/kscale-ai-day";

const HeaderSection = () => {
  return (
    <header className="col-span-full flex flex-row min-h-[90svh] auto-rows-auto items-center text-foreground bg-background relative overflow-hidden -mx-[5vw] px-[5vw]">
      <div className="flex flex-col self-end gap-5  justify-center items-start">
        <div className="flex flex-col gap-4">
          <h1 className="text-[4.2rem] tracking-tight">K-Scale AI Day</h1>
          <h4 className="text-[1.1rem] tracking-tight">
            Launching our robots, research, and models
          </h4>
        </div>
        <CTAButton
          variant={ColorVariant.RUST}
          mode={FillMode.FILL}
          className="px-24 whitespace-nowrap py-4 text-[1rem]"
        >
          Join us on Feb 22nd ↗
        </CTAButton>
      </div>
    </header>
  );
};

export default HeaderSection;
