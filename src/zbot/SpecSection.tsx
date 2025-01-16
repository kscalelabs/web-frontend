import { photoPathAltText, photoPaths } from "@/components/util/photoPaths";
import Image from "next/image";

const SpecSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid gap-y-8 py-16">
      <hgroup className="col-span-full sm:col-span-4 sm:col-start-2 md:col-span-5 md:col-start-2 lg:col-span-4 lg:col-start-2 2xl:col-span-5 2xl:col-start-2 3xl:col-span-5 3xl:col-start-2 4xl:col-span-4 4xl:col-start-2 flex flex-col gap-4">
        <span className="text-caption uppercase text-foreground70">Specs</span>
        <h2 className="text-heading-md">
          Zeroth Bot&apos;s hardware is designed to be affordable and reliable.
        </h2>
        <p>
          We&apos;ve designed Zeroth Bot to be the most affordable and reliable humanoid robot
          platform for research and development.
        </p>
      </hgroup>
    </section>
  );
};

export default SpecSection;
