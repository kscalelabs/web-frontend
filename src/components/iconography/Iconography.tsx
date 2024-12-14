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

export const DownloadIcon = () => {
  const topPath = {
    initial: {
      y: "-100%",
    },
    hover: {
      y: "0",
    },
  };

  const bottomPath = {
    initial: {
      y: "0",
    },
    hover: {
      y: "100%",
    },
  };

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.01953 20C5.46953 20 4.99886 19.8043 4.60753 19.413C4.2162 19.0217 4.0202 18.5507 4.01953 18V15H6.01953V18H18.0195V15H20.0195V18C20.0195 18.55 19.8239 19.021 19.4325 19.413C19.0412 19.805 18.5702 20.0007 18.0195 20H6.01953Z"
        fill="var(--plasma)"
      />
      <g clipPath="url(#clip0_1970_3057)">
        <motion.path
          d="M12.0195 16L7.01953 11L8.41953 9.55L11.0195 12.15V4H13.0195V12.15L15.6195 9.55L17.0195 11L12.0195 16Z"
          fill="var(--plasma)"
          variants={bottomPath}
        />

        <motion.path
          d="M12.0195 16L7.01953 11L8.41953 9.55L11.0195 12.15V4H13.0195V12.15L15.6195 9.55L17.0195 11L12.0195 16Z"
          fill="var(--plasma)"
          // transform="translate(0 -14)"
          variants={topPath}
        />
      </g>
      <defs>
        <clipPath id="clip0_1970_3057">
          <rect width="12" height="16" transform="translate(6 2)" />
        </clipPath>
      </defs>
    </svg>
  );
};
