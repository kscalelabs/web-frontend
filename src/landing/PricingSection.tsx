import { CTASubtitleButton } from "@/components/buttons/CTAButtons";
import { FillMode } from "@/components/util/constants";

const PricingSection = () => {
  return (
    <section className="col-span-full grid md:grid-cols-2 3xl:col-span-10 3xl:col-start-2 4xl:col-span-8 4xl:col-start-3 sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw] gap-y-4 py-16">
      <article className="flex flex-col gap-y-4 p-6 md:p-8 bg-gradient-to-br from-methyl to-rust rounded-lg text-filament">
        <hgroup>
          <span className="text-caption opacity-60">Limited edition &mdash; 20 units total</span>
          <h3 className="text-heading-md font-apparat">
            Get free yearly hardware upgrades as a founder
          </h3>
        </hgroup>
        <p className=" text-body mb-24">
          Priority delivery and yearly service on new parts and hardware, for the rest of your life.
        </p>
        <CTASubtitleButton
          className="mt-auto w-full"
          href="https://shop.kscale.dev/products/kbot-fe"
          subtitle="$833 per month"
          mode={FillMode.INVERT}
        >
          Order K-Bot FE
        </CTASubtitleButton>
      </article>

      <article className="flex flex-col gap-y-4 p-6 md:p-8 border border-plasma rounded-lg dark:text-filament">
        <hgroup>
          <span className="text-caption opacity-60">Available for all engineers</span>
          <h3 className="text-heading-md font-apparat">
            Our plug and play robotics solution, at an accessible price.
          </h3>
        </hgroup>
        <p className="text-body mb-8">
          {`Invest in yourself and your engineering potential with K-Bot's embodied AI ecosystem.`}
        </p>
        <CTASubtitleButton
          className="mt-auto w-full"
          href="https://shop.kscale.dev/products/kbot"
          subtitle="$533 per month"
        >
          Order K-Bot
        </CTASubtitleButton>
      </article>
    </section>
  );
};

export default PricingSection;
