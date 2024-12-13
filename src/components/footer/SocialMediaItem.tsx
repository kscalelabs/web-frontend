import { SocialMediaItemProps } from "@/components/util/interfaces";
import { motion } from "motion/react";
import Link from "next/link";

const SocialMediaItem = (props: SocialMediaItemProps) => {
  return (
    <Link className={"m-0 p-0 size-6 flex"} href={props.linkURL} target={"_blank"}>
      <motion.div
        // variants={{
        //   initial: {
        //     opacity: 1,
        //   },
        //   hover: {
        //     opacity: 0.5,
        //   },
        // }}
        initial="initial"
        whileHover="hover"
        transition={{
          duration: 0.2,
          ease: "circOut",
        }}
      >
        {props.iconSvg}
      </motion.div>
    </Link>
  );
};

export default SocialMediaItem;
