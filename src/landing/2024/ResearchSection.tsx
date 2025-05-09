import { ColorVariant } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { motion, useMotionValue } from "motion/react";
import { useEffect, useMemo, useState } from "react";

const RESEARCH_ITEMS = [
  {
    title: "K-Bot",
    description:
      "Our monorepo with the core dependencies required for building and deploying your own K-Bot.",
    link: "https://github.com/kscalelabs/kbot",

    variant: ColorVariant.METHYL,
  },
  {
    title: "K-SIM",
    description:
      "Open-source reinforcement learning library for learning locomotion and manipulation policies, built on MJX.",
    link: "https://github.com/kscalelabs/ksim",

    variant: ColorVariant.PLASMA,
  },
  {
    title: "K-OS",
    description:
      "K-Scale's real-time operating system, built on Rust, with support for language-agnostic downstream clients.",
    link: "https://github.com/kscalelabs/kos",

    variant: ColorVariant.OXIDE,
  },
  {
    title: "K-OS SIM",
    description:
      "Simulation backend for K-OS, letting you test your deployment code in a simulated environment before trying it out on a physical robot.",
    link: "https://github.com/kscalelabs/kos-sim",

    variant: ColorVariant.RUST,
  },
  {
    title: "Onshape Converter",
    description: "Convert Onshape CAD models to simulation-ready artifacts.",
    link: "https://github.com/kscalelabs/onshape",

    variant: ColorVariant.MOLTEN,
  },
];

interface ResearchItem {
  title: string;
  description: string;
  link: string;
  index: number;
  variant: ColorVariant;
}

const ResearchCard = ({ title, description, index, variant }: ResearchItem) => {
  const bg = (variant: ColorVariant): string => {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-methyl ";
      case ColorVariant.PLASMA:
        return "bg-plasma ";
      case ColorVariant.OXIDE:
        return "bg-oxide ";
      case ColorVariant.RUST:
        return "bg-rust ";
      case ColorVariant.MOLTEN:
        return "bg-molten ";
      case ColorVariant.SOL:
        return "bg-sol ";
      case ColorVariant.FILAMENT:
        return "bg-filament ";
      case ColorVariant.CARBON:
        return "bg-carbon ";
      default:
        return "bg-foreground ";
    }
  };
  return (
    <motion.div
      className={clsx("bg-gradient-to-br rounded-lg flex-none cursor-grab", bg(variant))}
      key={`research-card--${index}`}
      draggable={false}
    >
      <article className="p-4 flex flex-col gap-24 h-full w-[80vw] xs:w-[66.25vw] sm:w-[calc(100vw_*_(1.7_/3_+_0.025))] md:w-[calc(100vw_*_(2.8_/_9_+_0.075))] 2xl:w-[calc(100vw_*_(0.875_/_3))] 4xl:w-[21.5625vw]">
        <div className={"flex flex-col gap-y-4 h-full text-filament cursor-grab"}>
          <h3 className={"text-heading-sm font-apparat cursor-grab"}>{title}</h3>
          <p className={"text-body cursor-grab"}>{description}</p>
        </div>
      </article>
    </motion.div>
  );
};

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 1,
  stiffness: 100,
  damping: 20,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const width = useWindowSize().width;

  const dimensions = useMemo(() => {
    if (width < 480) {
      return {
        card: 80,
        gap: 5,
        max: RESEARCH_ITEMS.length - 1,
        offset: 0,
      };
    }
    if (width < 640) {
      return {
        card: 70,
        gap: 5,
        max: RESEARCH_ITEMS.length - 1,
      };
    }
    if (width < 768) {
      return {
        card: 60,
        gap: 2.5,
        max: RESEARCH_ITEMS.length - 1,
      };
    }
    if (width < 1440) {
      return {
        card: 40,
        gap: 2.5,
        max: RESEARCH_ITEMS.length - 2,
      };
    }
    if (width < 1920) {
      return {
        card: 30,
        gap: 1.25,
        max: RESEARCH_ITEMS.length - 3,
      };
    }
    return {
      card: 21.25,
      gap: 1.25,
      max: RESEARCH_ITEMS.length - 4,
    };
  }, [width]);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    if (x <= -(width < 768 ? dimensions.card / 2 : DRAG_BUFFER) && imgIndex < dimensions.max) {
      setImgIndex((pv) => Math.min(pv + Math.round(x / -DRAG_BUFFER), dimensions.max));
    } else if (x >= (width < 768 ? dimensions.card / 2 : DRAG_BUFFER) && imgIndex > 0) {
      setImgIndex((pv) => Math.max(pv - Math.round(x / DRAG_BUFFER), 0));
    }
  };

  const decrement = () => {
    if (imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  const increment = () => {
    if (imgIndex < dimensions.max) {
      setImgIndex((pv) => pv + 1);
    }
  };

  useEffect(() => {
    setImgIndex(0);
  }, [width]);

  return (
    <div className={"col-span-full -mx-[5vw] px-[5vw] overflow-hidden relative "}>
      <menu className="flex max-lg:justify-end gap-4 lg:gap-2 mb-4 max-lg:text-heading-sm ">
        <motion.button
          onClick={decrement}
          aria-label="Previous article"
          className="select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: imgIndex > 0 ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          &larr;
        </motion.button>
        <motion.button
          onClick={increment}
          aria-label="Next article"
          className="select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: imgIndex < dimensions.max ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          &rarr;
        </motion.button>
      </menu>
      <div className="">
        {/* <div className="fixed top-0 left-0 z-50 text-molten">
          {imgIndex} {dimensions.card} {dimensions.gap}
        </div> */}
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `${-1 * imgIndex * (dimensions.card + dimensions.gap) + (imgIndex > 0 ? dimensions.gap : 0)}vw`,
          }}
          transition={{ SPRING_OPTIONS }}
          onDragEnd={onDragEnd}
          className="flex flex-none cursor-grab gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
        >
          <Images />
        </motion.div>
      </div>
    </div>
  );
};

const Images = () => {
  return (
    <>
      {RESEARCH_ITEMS.map((item, i) => (
        <ResearchCard {...item} index={i} key={`research-card--${i}`} />
      ))}
    </>
  );
};

// const Dots = ({ imgIndex, setImgIndex }) => {
//   return (
//     <div className="mt-4 flex w-full justify-center gap-2">
//       {imgs.map((_, idx) => {
//         return (
//           <button
//             key={idx}
//             onClick={() => setImgIndex(idx)}
//             className={`h-3 w-3 rounded-full transition-colors ${
//               idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
//             }`}
//           />
//         );
//       })}
//     </div>
//   );
// };

const ResearchSection = () => {
  return (
    <section className="col-span-full grid grid-cols-subgrid auto-rows-min py-16">
      <hgroup className="col-span-full sm:col-span-4 2xl:col-span-4 flex flex-col mb-12 gap-4">
        <span className="text-caption uppercase text-foreground70 relative y-1/2">Research</span>
        <h2 className="text-heading-md">Humanoid robots as strong as their brains.</h2>
      </hgroup>
      {/* <ResearchCarousel /> */}
      <SwipeCarousel />
    </section>
  );
};

export default ResearchSection;
