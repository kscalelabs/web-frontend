import { InlineCTA } from "@/components/buttons/CTAButtons";
import { ExpressiveArrow } from "@/components/iconography/Iconography";

const DataSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid py-16">
      <article className="col-span-full sm:col-span-4 md:col-start-2 flex flex-col mb-12 gap-8">
        <hgroup className="flex flex-col gap-4">
          <span className="text-caption uppercase opacity-70 relative y-1/2">Data buy-back</span>
          <h2 className="text-heading-md">Get refunded each month that you send us data.</h2>
          <p>
            If you collect at least 100 hours of telemetry over the course of a month we&apos;ll pay
            you back the month&apos;s payment.
          </p>
        </hgroup>
        <InlineCTA href="https://dashboard.kscale.dev/privacy">
          See privacy policy <ExpressiveArrow size={"size-4"} />
        </InlineCTA>
      </article>
    </section>
  );
};

export default DataSection;
