import { Button } from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import ArrowL from "@/assets/icons/icon_arrowL.svg";
import ArrowR from "@/assets/icons/icon_arrowR.svg";
import Image from "next/image";
// import FiberRobot from "@/components/robot/FiberRobot";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1.5,
  stiffness: 80,
  damping: 20,
};

const imgs = [
  {
    name: "K-Bot",
    desc: "General-purpose humanoid robot",
    src: "/photos/landing/thumbnail/thumbnail_kbot.png",
    alt: "Photo of K-Bot",
    price: "$8,999 USD",
    oldPrice: "$16,999 USD",
    links: [
      { text: "Pre-order now", href: "https://shop.kscale.dev/products/kbot" },
      { text: "Learn more", href: "/kbot" },
    ],
  },
  {
    name: "Z-Bot",
    desc: "Mini end-to-end humanoid robot",
    src: "/photos/landing/thumbnail/thumbnail_zbot.png",
    alt: "Photo of Z-Bot",
    price: "$999 USD",
    oldPrice: "$1,999 USD",
    links: [
      { text: "Pre-order now", href: "https://www.zerothbot.com/" },
      { text: "Learn more", href: "https://www.zerothbot.com/" },
    ],
  },
  {
    name: "M-Bot",
    desc: "Compact humanoid for developers",
    src: "/photos/landing/thumbnail/thumbnail_mbot.png",
    alt: "Photo of M-Bot",
    price: "$2,999 USD",
    oldPrice: "$3,999 USD",
  },
];

export const LandingProducts = () => {
  const [index, setIndex] = useState(0);
  const width = useWindowSize().width;

  const cardDimensions = useMemo(() => {
    return {
      width: width < 768 ? 80 : width < 1440 ? 40 : 30,
      gap: width < 768 ? 1 : 1.5,
      max: width < 768 ? imgs.length - 1 : imgs.length - 2,
    };
  }, [width]);

  const dragX = useMotionValue(0);

  const decrement = () => {
    if (index > 0) {
      setIndex((pv) => pv - 1);
    }
  };
  const increment = () => {
    if (index < cardDimensions.max) {
      setIndex((pv) => pv + 1);
    }
  };

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && index < cardDimensions.max) {
      setIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && index > 0) {
      setIndex((pv) => pv - 1);
    }
  };

  useEffect(() => {
    setIndex(0);
  }, [width]);

  return (
    <section className="section">
      <div className="container">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2>
          <p className="text-heading-1">
            General-purpose humanoid robots for developers, hobbyists, and researchers
          </p>
        </hgroup>
        <div className="mb-6 flex gap-2 md:place-self-end max-md:col-start-1 lg:-col-end-1 2xl:-col-end-2 lg:hidden">
          <Button onClick={() => decrement()} icon={ArrowL} disabled={index == 0} />
          <Button
            onClick={() => increment()}
            icon={ArrowR}
            disabled={index == cardDimensions.max}
          />
        </div>
        <div className="-mx-5 px-5 lg:-mx-10 lg:px-10 col-span-full overflow-hidden">
          <motion.div
            className="grid-r"
            drag={width < 1024 ? "x" : undefined}
            // dragConstraints={dragRef}
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={0.1}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `calc(-${index * cardDimensions.width}vw - ${index * cardDimensions.gap}rem)`,
              // translateX: `-${index * 40}rem`,
            }}
            onDragEnd={onDragEnd}
            transition={SPRING_OPTIONS}
          >
            <ul className="flex lg:col-span-6 2xl:col-span-4 4xl:col-span-6 gap-4 md:gap-6 2xl:col-start-2 4xl:col-start-2">
              {/* {imgs.map((item) => (
                <article className="min-w-[80vw] md:min-w-[40vw] 2xl:min-w-[30vw] flex flex-col md:flex-col-reverse gap-2">
                  <hgroup>
                    <h3 className="text-body-3 font-bold inline-flex gap-4">
                      <time dateTime="2025-02">Feb. 2025</time>
                      <span>K-Bot</span>
                    </h3>
                    <p>An impressive statistic about the current state of locomotion.</p>
                  </hgroup>
                  <div className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl"></div>
                </article>
              ))} */}
              {imgs.map((item, index) => (
                <li
                  className="min-w-[80vw] md:min-w-[40vw] lg:min-w-0 lg:col-span-2 lg:w-full"
                  key={`product--${index}`}
                >
                  <article className="relative bg-stone-950 border border-stone-700 rounded-2xl flex flex-col justify-end items-center overflow-hidden aspect-[3/4] text-center">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={1080}
                      height={1440}
                      className="object-cover mb-4 absolute inset-0 size-full object-top"
                      loading={"eager"}
                      priority={true}
                      sizes={"100dvw"}
                    />
                    <hgroup className="mt-auto flex flex-col items-center z-10 w-full bg-gradient-to-t from-stone-950 from-75% to-transparent py-2">
                      <h4 className="text-heading-2 mb-1">{item.name}</h4>
                      <h5 className="text-body-2">{item.desc}</h5>
                      <p className="text-body-3 font-medium mb-4">
                        From {item.price}{" "}
                        <s className="font-normal text-stone-400">{item.oldPrice}</s>
                      </p>
                      {item.links ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <Button
                            href={item.links[0].href}
                            external={item.links[0].href.startsWith("https://")}
                          >
                            {item.links[0].text}
                          </Button>
                          <a
                            href={item.links[1].href}
                            className="text-orange-500 hover:text-orange-400 whitespace-nowrap text-body-2 font-medium flex items-center gap-1"
                            target={item.links[1].href.startsWith("https://") ? "_blank" : "_self"}
                          >
                            {item.links[1].text} <ArrowR className="size-4 fill-current" />
                          </a>
                        </div>
                      ) : (
                        <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1">
                          Coming soon
                        </span>
                      )}
                    </hgroup>
                  </article>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
