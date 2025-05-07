import { Button } from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import ArrowL from "@/assets/icons/icon_arrowL.svg";
import ArrowR from "@/assets/icons/icon_arrowR.svg";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1.5,
  stiffness: 80,
  damping: 20,
};

const imgs = Array.from({ length: 7 });

export const LandingAchievements = () => {
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
            {imgs.map((_, index) => (
              <article
                className="min-w-[80vw] md:min-w-[40vw] 2xl:min-w-[30vw] flex flex-col md:flex-col-reverse gap-2"
                key={`achievement--${index}`}
              >
                <hgroup>
                  <h3 className="text-body-3 font-bold inline-flex gap-4">
                    <time dateTime="2025-02">Feb. 2025</time>
                    <span>K-Bot</span>
                  </h3>
                  <p>An impressive statistic about the current state of locomotion.</p>
                </hgroup>
                <div className="aspect-[3/4] sm:aspect-video bg-gradient-to-br from-rust via-background to-methyl rounded-2xl"></div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
