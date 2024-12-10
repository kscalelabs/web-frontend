import React from "react";
import {motion} from "motion/react";
import {
    bgBlackDarkWhite,
    textWhiteDarkBlack,
    navMotionTransition,
    transitionEaseLinearDuration300, scaleMotionNumber
} from "@/components/util/constants";

const CTAButton = () => {
    return (
        <motion.button
            className={"font-planar font-normal text-2xl px-4 py-2 select-none z-50 " +
                bgBlackDarkWhite + " hover:bg-accent-blood-orange " +
                transitionEaseLinearDuration300 + textWhiteDarkBlack}
            transition={navMotionTransition}
            initial={{
                scale: 1,
                borderRadius: "0.375rem",
            }}
            whileHover={scaleMotionNumber}>
            Order GPR 1.0
        </motion.button>
    );
};

export default CTAButton;