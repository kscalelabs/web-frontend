import { CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { FillMode } from "@/components/color/Color";

const HeaderSection = () => {
  return (
    <header className="col-span-full grid grid-cols-subgrid min-h-[90svh] auto-rows-auto items-end text-foreground bg-background">
      {/* <Image src="/images/header.png" alt="Header" fill /> */}
      <hgroup className="col-span-full sm:col-span-4 md:col-span-5 md:col-start-5 lg:col-span-4 lg:col-start-6 xl:col-span-3 xl:col-start-6 2xl:col-start-8 2xl:col-span-5 4xl:col-start-8 4xl:col-span-4 flex flex-col mb-12 gap-4">
        <h1 className="text-heading-lg">Made to be modified</h1>
        <h2 className="text-body">
          GPR 1.0 is an open-source &amp; auditable robot, for those who prefer transparency over
          trust.
        </h2>
        <CTASubtitleButton subtitle="Available on Shopify" className="w-full" mode={FillMode.FILL}>
          Order GPR 0.5
        </CTASubtitleButton>
      </hgroup>
    </header>
  );
};

export default HeaderSection;
