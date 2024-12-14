import { NavCTAButton } from "@/components/buttons/CTAButtons";
import { ColorVariant, FillMode } from "@/components/color/Color";
import {
  EVLAIcon,
  KOSIcon,
  KRECIcon,
  KSIMIcon,
  KLANGIcon,
} from "@/components/iconography/ResearchIcons";
import { useWindowSize } from "@/components/util/functions";
import { cubicBezier, motion, useMotionValue } from "motion/react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const RESEARCH_ITEMS = [
  {
    title: "Edge VLA",
    description:
      "Our general purpose foundation AI model, helping robots complete tasks autonomously. Through open-source data contributions, we're training a highly efficient model together.",
    image: "/images/research/edge-vla.png",
    link: "/",
    icon: <EVLAIcon />,
  },
  {
    title: "K-OS",
    description:
      "We've been refining our Rust-based package manager, streamlined operations for humanoid robotics hardware. 40% faster compiling compared to other ROS2-based systems.",
    image: "/images/research/edge-vla.png",
    link: "/",
    icon: <KOSIcon />,
  },
  {
    title: "Klang",
    description:
      "Dedicated to efficiently parsing natural language, Klang acts a simple and flexible way to get started building robot applications. As of now, it supports EVLA to turn language into actions.",
    image: "/images/research/edge-vla.png",
    link: "/",
    icon: <KLANGIcon />,
  },
  {
    title: "kRec",
    description:
      "Our system for organizing and managing all your robot data produced during your research.",
    image: "/images/research/edge-vla.png",
    link: "/",
    icon: <KRECIcon />,
  },
  {
    title: "kSim",
    description:
      "Built off of Issac Gym, get started with locomotion and manipulation with our simulation packages. We're working on building this out further to help you test your robot's movements on screen and in the physical world. ",
    image: "/images/research/edge-vla.png",
    link: "/",
    icon: <KSIMIcon />,
  },
];

interface ResearchItem {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
  icon: React.ReactNode;
}

const ResearchCard = ({ title, description, image, link, index, icon }: ResearchItem) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-methyl via-plasma to-oxide rounded-lg flex-none"
      key={`research-card--${index}`}
      draggable={false}
    >
      <article className="p-4 flex flex-col gap-24 h-full w-[66.25vw] sm:w-[calc(100vw_*_(1.7_/3_+_0.025))] md:w-[calc(100vw_*_(2.8_/_9_+_0.075))] 2xl:w-[calc(100vw_*_(0.875_/_3))] 4xl:w-[21.5625vw]">
        {icon}
        <div className="flex flex-col gap-y-4 h-full">
          <h3 className="text-body">{title}</h3>
          <p className="text-caption">{description}</p>
          <NavCTAButton
            href={link}
            target="_blank"
            className="mt-auto w-fit px-2"
            variant={ColorVariant.PLASMA}
            mode={FillMode.INVERT}
          >
            View project
          </NavCTAButton>
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
    if (width < 640) {
      return {
        card: 66.25,
        gap: 5,
        max: RESEARCH_ITEMS.length - 1,
      };
    }
    if (width < 768) {
      return {
        card: 170 / 3 + 2.5,
        gap: 2.5,
        max: RESEARCH_ITEMS.length - 1,
      };
    }
    if (width < 1440) {
      return {
        card: 280 / 9 + 7.5,
        gap: 2.5,
        max: RESEARCH_ITEMS.length - 2,
      };
    }
    if (width < 1920) {
      return {
        card: 87.5 / 3,
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
    if (x <= -DRAG_BUFFER && imgIndex < dimensions.max) {
      setImgIndex((pv) => Math.min(pv + Math.round(x / -DRAG_BUFFER), dimensions.max));
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
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
    <div className="col-span-full -mx-[5vw] px-[5vw] overflow-hidden relative">
      <menu className="flex max-lg:justify-end gap-4 lg:gap-2 mb-4 max-lg:text-heading-sm">
        <motion.button
          onClick={decrement}
          aria-label="Previous"
          className="select-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: imgIndex > 0 ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
        >
          &larr;
        </motion.button>
        <motion.button
          onClick={increment}
          aria-label="Next"
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
            translateX: `-${imgIndex * (dimensions.card + dimensions.gap)}vw`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex flex-none cursor-grab active:cursor-grabbing gap-x-[5vw] sm:gap-x-[2.5vw] 2xl:gap-x-[1.25vw]"
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
        <span className="text-caption uppercase opacity-70 relative y-1/2">Research</span>
        <h2 className="text-heading-md">
          The humanoid robot is as strong as its brain, not its body.
        </h2>
        <p>
          While we provide robust, accessible hardware, our end-to-end model is what makes K-Bot
          perform. Here&apos;s some of the progress we&apos;ve made:
        </p>
      </hgroup>
      {/* <ResearchCarousel /> */}
      <SwipeCarousel />
    </section>
  );
};

export default ResearchSection;
