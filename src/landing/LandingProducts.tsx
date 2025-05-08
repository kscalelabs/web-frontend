import { Button } from "@/components/ui/Button/Button";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import ArrowL from "@/assets/icons/icon_arrowL.svg";
import ArrowR from "@/assets/icons/icon_arrowR.svg";
import RobotWrapper from "@/components/robot/RobotWrapper";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1.5,
  stiffness: 80,
  damping: 20,
};

const imgs = Array.from({ length: 3 });

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
      <hgroup className="col-span-default col-start-default mb-6">
        <h2 className="text-body-2 font-medium text-stone-400 mb-1">Products</h2>
        <p className="text-heading-1">
          Humanoid robots for all your research and development needs
        </p>
      </hgroup>
      <div className="mb-6 flex gap-2 md:place-self-end max-md:col-start-1 lg:-col-end-1 2xl:-col-end-2 lg:hidden">
        <Button onClick={() => decrement()} icon={ArrowL} disabled={index == 0} />
        <Button onClick={() => increment()} icon={ArrowR} disabled={index == cardDimensions.max} />
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
          <ul className="flex lg:col-span-6 gap-4 md:gap-6 2xl:col-start-2">
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
            <li className="min-w-[80vw] md:min-w-[40vw] lg:min-w-0 lg:col-span-2 lg:w-full">
              <article className="p-4 bg-stone-900 rounded-2xl h-full flex flex-col items-center">
                {/* <div className="aspect-square sm:aspect-video mb-4 size-full" /> */}
                <RobotWrapper />
                <h4 className="text-heading-2 mb-1">K-Bot</h4>
                <h5 className="text-body-2">Full sized humanoid</h5>
                <p className="text-body-3 text-stone-400 mb-4">Starting at $9,000 USD</p>
                <Button href="https://shop.kscale.dev" external fullWidth>
                  Pre-order now
                </Button>
              </article>
            </li>
            <li className="min-w-[80vw] md:min-w-[40vw] lg:min-w-0 lg:col-span-2 lg:w-full">
              <article className="p-4 bg-stone-900 rounded-2xl h-full flex flex-col items-center">
                {/* <div className="aspect-square sm:aspect-video mb-4 size-full" /> */}
                <RobotWrapper />
                <h4 className="text-heading-2 mb-1">Z-Bot</h4>
                <h5 className="text-body-2">Small but mighty</h5>
                <p className="text-body-3 text-stone-400 mb-4">Starting at $1,000 USD</p>
                <Button href="https://zeroth.bot" external fullWidth>
                  Buy now
                </Button>
              </article>
            </li>
            <li className="min-w-[80vw] md:min-w-[40vw] lg:min-w-0 lg:col-span-2 lg:w-full">
              <article className="p-4 bg-stone-900 rounded-2xl h-full flex flex-col items-center">
                {/* <div className="aspect-square sm:aspect-video mb-4 size-full" /> */}
                <RobotWrapper />
                <hgroup className="mt-auto flex flex-col items-center">
                  <h4 className="text-heading-2 flex items-center gap-2 mb-1">M-Bot </h4>
                  <span className="text-stone-500 text-body-3 font-bold border border-stone-500 rounded-full px-3 py-1">
                    Coming soon
                  </span>
                </hgroup>
              </article>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
