import { motion } from "motion/react";
import { ExpressiveArrowProps } from "@/components/util/interfaces";

export const ExpressiveArrow = (props: ExpressiveArrowProps) => {
  const arrowVariants = {
    initial: {
      x: "0",
      y: "0",
    },
    hover: {
      x: "100%",
      y: "-100%",
    },
  };

  const arrowBottomVariants = {
    initial: {
      x: "-100%",
      y: "100%",
    },
    hover: {
      x: "0%",
      y: "0%",
    },
  };

  return (
    <div className={"relative " + props.size + " flex flex-row overflow-hidden select-none"}>
      <motion.span key="arrow-1" className="block absolute" variants={arrowVariants}>
        &#x2197;
      </motion.span>
      <motion.span key="arrow-2" className="block absolute" variants={arrowBottomVariants}>
        &#x2197;
      </motion.span>
    </div>
  );
};
