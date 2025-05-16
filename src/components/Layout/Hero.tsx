import Image from "next/image";
import { Button } from "../ui/Button/Button";
export const Hero = ({
  heading,
  eyebrow,
  children,
  href,
  src,
  external = false,
  buttonText,
  icon,
}: {
  heading: string;
  eyebrow: string;
  children?: React.ReactNode;
  src?: string;
  href?: string;
  external?: boolean;
  buttonText?: string;
  icon?: React.ElementType;
}) => {
  return (
    <section className="py-8 relative min-h-[20rem] h-[75svh] max-h-[1280px] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        {src && src.includes("mp4") ? (
          <video
            width="1920"
            height="1080"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 -inset-y-2 size-full object-cover brightness-[0.4]"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src ? src : "/photos/thumbnails/thumbnail_sub.webp"}
            width={2560}
            height={1280}
            className="absolute inset-0 -inset-y-2 size-full object-cover brightness-[0.4]"
            alt=""
            priority={true}
          />
        )}
        <hgroup className="col-span-4 md:col-span-4 md:col-start-2 2xl:col-span-6 2xl:col-start-3 4xl:col-start-3 z-10">
          <h1 className="text-body-2 font-medium font-sans text-stone-400 mb-1">{eyebrow}</h1>
          <h2 className="text-heading-d1 mb-3">{heading}</h2>
          <p className="text-body-1 mb-6">{children}</p>
          {href && (
            <Button href={href} external={external} icon={icon}>
              {buttonText}
            </Button>
          )}
        </hgroup>
      </div>
    </section>
  );
};

export const ArticleHero = ({
  heading,
  eyebrow,
  children,
  href,
  src,
  external = false,
  buttonText,
  icon,
}: {
  heading: string;
  eyebrow?: string;
  children?: React.ReactNode;
  href?: string;
  src?: string;
  external?: boolean;
  buttonText?: string;
  icon?: React.ElementType;
}) => {
  return (
    <section className="pt-48 pb-0 relative min-h-[20rem] overflow-hidden">
      <div className="section-container h-full justify-end sm:content-end">
        <div className="mb-12 md:grid grid-cols-subgrid col-span-full md:col-span-4 md:col-start-2 2xl:col-span-8 4xl:col-span-8 2xl:col-start-3 4xl:col-start-5">
          <h2 className="text-heading-d1 col-span-full xl:col-span-3 2xl:col-span-6 mb-4">
            {heading}
          </h2>
          <p className="text-body-1 col-span-4 lg:col-span-3 2xl:col-span-6 mb-4">{children}</p>
          <div className="flex col-span-full max-xl:col-start-1 2xl:justify-end 2xl:-col-end-1 lg:col-span-2 2xl:justify-self-end">
            {href && (
              <Button href={href} external={external} icon={icon} adaptive={true}>
                {buttonText}
              </Button>
            )}
          </div>
        </div>
        <figure className="mb-12 aspect-video col-span-full md:col-span-4 md:col-start-2 2xl:col-span-8 4xl:col-span-8 2xl:col-start-3 4xl:col-start-5 z-0 overflow-hidden rounded-lg">
          {src && src.includes("mp4") ? (
            <video
              width="1920"
              height="1080"
              autoPlay
              muted
              loop
              playsInline
              className="size-full object-cover"
            >
              <source src={src} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={src ? src : "/photos/thumbnails/thumbnail_sub.webp"}
              width={2560}
              height={1280}
              className="size-full object-cover"
              alt=""
              priority={true}
            />
          )}
        </figure>
      </div>
    </section>
  );
};
