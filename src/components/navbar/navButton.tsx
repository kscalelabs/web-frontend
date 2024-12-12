import { Text2Props } from "@/components/util/interfaces";
import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import {
  textBlackDarkWhite,
  navMotionTransition,
  transitionEaseLinearDuration300,
  scaleMotionNumber,
} from "@/components/util/constants";

const NavButton = (props: Text2Props) => {
  return (
    <motion.button
      className={
        "font-planar font-normal capitalize w-full h-full text-2xl px-4 py-2 select-none " +
        textBlackDarkWhite +
        " hover:bg-accent-blood-orange/10 dark:hover:bg-accent-blood-orange/20 " +
        transitionEaseLinearDuration300
      }
      transition={navMotionTransition}
      initial={{
        scale: 1,
        borderRadius: "0.375rem",
        borderWidth: "2px",
        borderColor: "transparent",
      }}
      whileHover={scaleMotionNumber}
    >
      <Link className={"flex flex-row"} href={props.text2} target={"_blank"}>
        {props.text}
      </Link>
    </motion.button>
  );
};

export default NavButton;
