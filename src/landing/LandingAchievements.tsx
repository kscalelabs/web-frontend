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
    name: "Z-Bot V3",
    src: "/photos/achievements/ZBotV3.webp",
    alt: "Photo of Z-Bot V3",
    dateTime: "2025-04",
    time: "Apr. 2025",
    desc: "Improved capabilities and a 6-DOF design. With over 20k developers and hobbyists on the waitlist, we plan to launch Z-Bot on Kickstarter this May.",
    width: 600,
    height: 800,
  },
  {
    name: "K-Bot V2",
    src: "/photos/achievements/KBotV2.webp",
    alt: "Photo of K-Bot V2",
    dateTime: "2025-02",
    time: "Feb. 2025",
    desc: "Our latest humanoid robot, designed and built for developers. Strong, modular and capable of everything from chores to industrial applications",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V2",
    src: "/photos/achievements/ZBotV2.webp",
    alt: "Photo of Z-Bot V2",
    dateTime: "2025-01",
    time: "Jan. 2025",
    desc: "Mass-manufacturable, robust tabletop humanoid robot. Used in Stanford’s reinforcement learning class (CS 234) to teach about PPO.",
    width: 600,
    height: 800,
  },
  {
    name: "K-Bot V1",
    src: "/photos/achievements/KBotV1.webp",
    alt: "Photo of K Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Initial complete aluminum prototype. Built to be a lightweight, repairable and developer friendly test bench for our software and ML stack.",
    width: 600,
    height: 800,
  },
  {
    name: "Z-Bot V1",
    src: "/photos/achievements/ZBotV1.webp",
    alt: "Photo of Z-Bot V1",
    dateTime: "2024-11",
    time: "Nov. 2024",
    desc: "Open source, BOM <350 USD, full 3D printed humanoid robot. Used as a learning tool at universities across the world to teach robotics and RL.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy Mini",
    src: "/photos/achievements/StompyMini.webp",
    alt: "Photo of Stompy Mini",
    dateTime: "2024-08",
    time: "Aug. 2024",
    desc: "Re-worked version of Stompy with a smaller form factor, new actuators and redesigned battery and wiring harness. Optimized for training in simulation.",
    width: 600,
    height: 800,
  },
  {
    name: "Stompy",
    src: "/photos/achievements/Stompy.webp",
    alt: "Photo of Stompy",
    dateTime: "2024-04",
    time: "Apr. 2024",
    desc: "Our first 3D printed robot, which we built in two months with four 3D printers. Optimized for cuteness.",
    width: 600,
    height: 800,
  },
];

export const LandingAchievements = () => {
  const [index, setIndex] = useState(0);
  const width = useWindowSize().width;

  const cardDimensions = useMemo(() => {
    return {
      width: width < 768 ? 80 : width < 1440 ? 40 : 20,
      gap: width < 768 ? 1 : 1.5,
      max: width < 768 ? imgs.length - 1 : width < 1440 ? imgs.length - 2 : imgs.length - 3,
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
      <hgroup className="col-span-default col-start-default mb-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our achievements</h2>
        <p className="text-heading-1">
          We&apos;ve completed 7 generations of robots in less than a year
        </p>
      </hgroup>
      <div className="mb-6 flex gap-2 md:place-self-end max-md:col-start-1 lg:-col-end-1 2xl:-col-end-2">
        <Button onClick={() => decrement()} icon={ArrowL} disabled={index == 0} />
        <Button onClick={() => increment()} icon={ArrowR} disabled={index == cardDimensions.max} />
      </div>
      <div className="-mx-5 px-5 lg:-mx-10 lg:px-10 col-span-full overflow-hidden">
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
            translateX: `calc(-${index * cardDimensions.width}vw - ${index * cardDimensions.gap}rem)`,
            // translateX: `-${index * 40}rem`,
          }}
          onDragEnd={onDragEnd}
          transition={SPRING_OPTIONS}
        >
          <div className="flex gap-4 md:gap-6 2xl:col-start-2">
            {imgs.map((item, index) => (
              <article
                className="min-w-[80vw] sm:min-w-[40vw] 2xl:min-w-[20vw] flex flex-col gap-4"
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
        </motion.div>
      </div>
    </section>
  );
};
