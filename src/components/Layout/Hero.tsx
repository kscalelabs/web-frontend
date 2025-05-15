import Image from "next/image";
export const Hero = ({
  heading,
  eyebrow,
  children,
}: {
  heading: string;
  eyebrow: string;
  children?: React.ReactNode;
}) => {
  return (
    <section className="py-8 relative min-h-[20rem] h-[75svh] max-h-[1280px] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        <Image
          src="/photos/thumbnails/thumbnail_sub.png"
          width={2560}
          height={1280}
          className="absolute inset-0 size-full object-cover"
          alt=""
        />
        <hgroup className="col-span-4 md:col-span-4 md:col-start-2 2xl:col-span-6 2xl:col-start-3 4xl:col-start-3 z-10">
          <h1 className="text-body-2 font-medium font-sans text-stone-400 mb-1">{eyebrow}</h1>
          <h2 className="text-heading-d1 mb-6">{heading}</h2>
          <p className="text-body-1 mb-4">{children}</p>
        </hgroup>
      </div>
    </section>
  );
};
