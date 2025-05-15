import { Button } from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import ArrowL from "@/assets/icons/icon_arrowL.svg";
import ArrowR from "@/assets/icons/icon_arrowR.svg";
import Image from "next/image";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1.5,
  stiffness: 80,
  damping: 20,
};

const imgs = [
  {
    name: "K-Bot V2",
    src: "/photos/landing/achievements/KBotV2.webp",
    alt: "Photo of K-Bot V2",
    dateTime: "2025-02",
    time: "Feb. 2025",
    desc: "Our latest humanoid robot, designed and built for developers. Strong, modular and capable of everything from chores to industrial applications",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V2",
    src: "/photos/landing/achievements/ZBotV2.webp",
    alt: "Photo of Z-Bot V2",
    dateTime: "2025-01",
    time: "Jan. 2025",
    desc: "Mass-manufacturable, robust tabletop humanoid robot. Used in Stanford’s reinforcement learning class (CS 234) to teach about PPO.",
    width: 600,
    height: 800,
  },
  {
    name: "K-Bot V1",
    src: "/photos/landing/achievements/KBotV1.webp",
    alt: "Photo of K Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Our initial full-sized complete aluminum prototype. Built as a lightweight, customizable, and developer-friendly test bench for our ML stack. Optimized for sim-to-real focus.",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V1",
    src: "/photos/landing/achievements/ZBotV1.webp",
    alt: "Photo of Z-Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Open-source 3D printed small-scale humanoid robot with BOM < 350. Optimized for portability and affordability. Leveraged as learning tool at universities for teaching robotics and RL.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy Mini",
    src: "/photos/landing/achievements/Stompymini.webp",
    alt: "Photo of Stompy Mini",
    dateTime: "2024-08",
    time: "Aug. 2024",
    desc: "Enhanced version of Stompy with a smaller form factor, new actuators, upgraded battery, and wiring harness. Optimized for simulation training.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy",
    src: "/photos/landing/achievements/Stompy.webp",
    alt: "Photo of Stompy",
    dateTime: "2024-04",
    time: "Apr. 2024",
    desc: "Our first 3D printed robot was built in 2 months with 4 3D printers. Optimized for cuteness.",
    width: 600,
    height: 800,
  },
];

export const LandingAchievements = () => {
  const [index, setIndex] = useState(0);
  const width = useWindowSize().width;

  const cardDimensions = useMemo(() => {
    return {
      width: width < 768 ? 80 : width < 1024 ? 40 : width < 1440 ? 30 : 20,
      gap: width < 768 ? 1 : 1.5,
      max:
        width < 768
          ? imgs.length - 1
          : width < 1024
            ? imgs.length - 2
            : width < 1440
              ? imgs.length - 3
              : imgs.length - 3,
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
      <div className="section-container">
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our achievements</h2>
          <p className="text-heading-1">
            We&apos;ve completed 6 generations of robots in less than a year
          </p>
        </hgroup>
        <div className="mb-6 flex gap-2 md:place-self-end max-md:col-start-1 md:-col-end-1 2xl:-col-end-2">
          <Button onClick={() => decrement()} icon={ArrowL} disabled={index == 0} />
          <Button
            onClick={() => increment()}
            icon={ArrowR}
            disabled={index == cardDimensions.max}
          />
        </div>
        <div className="-mx-5 px-5 lg:-mx-10 lg:px-10 col-span-full overflow-hidden relative">
          {/* <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" /> */}
          <motion.div
            className="grid-r"
            drag="x"
            // dragConstraints={dragRef}
            dragConstraints={{ left: 0, right: 0 }}
            // dragElastic={0.1}
            style={{
              x: dragX,
            }}
            animate={{
              translateX: `calc(-${index} * min(${cardDimensions.width}vw, 600px) - ${index * cardDimensions.gap}rem)`,
              // translateX: `-${index * 40}rem`,
            }}
            onDragEnd={onDragEnd}
            transition={SPRING_OPTIONS}
          >
            <div className="relative flex 2xl:col-start-3">
              <div className="flex gap-x-4 md:gap-x-6 ">
                {imgs.map((item, index) => (
                  <article
                    className="flex-grow w-[80vw] sm:w-[40vw] lg:w-[30vw] 2xl:w-[20vw] max-w-[600px] flex flex-col gap-4"
                    key={`achievement--${index}`}
                  >
                    <hgroup>
                      <h3 className="text-body-3 font-bold inline-flex gap-4">
                        <time dateTime={item.dateTime}>{item.time}</time>
                        <span>{item.name}</span>
                      </h3>
                      <p>{item.desc}</p>
                    </hgroup>
                    <Image
                      src={item.src}
                      className="md:-order-1 max-md:mt-auto aspect-[3/4] rounded-2xl pointer-events-none object-cover object-top"
                      width={item.width}
                      height={item.height}
                      alt={item.alt}
                    />
                  </article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
