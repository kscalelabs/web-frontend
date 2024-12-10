import React from "react";
import {motion} from "motion/react";
import {
    bgBlackDarkWhite,
    textWhiteDarkBlack,
    navMotionTransition,
    transitionEaseLinearDuration300, scaleMotionNumber
} from "@/components/util/constants";
import Link from "next/link";

const CTAButton = () => {
    return (
        <motion.div
            className={"font-planar font-normal text-2xl px-4 py-2 select-none z-50 " +
                bgBlackDarkWhite + " hover:bg-accent-blood-orange whitespace-nowrap " +
                transitionEaseLinearDuration300 + textWhiteDarkBlack}
            transition={navMotionTransition}
            initial={{
                scale: 1,
                borderRadius: "0.375rem",
            }}
            whileHover={scaleMotionNumber}>
            <Link href={"https://shop.kscale.dev/products/gpr-basic"} target={"_blank"}>
                Order GPR 1.0
            </Link>
        </motion.div>
    );
};

export default CTAButton;