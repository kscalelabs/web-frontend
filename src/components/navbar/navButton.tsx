import { motion } from "motion/react";
import React from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";

const navItems: string[] = ["Docs", "Log In", "Buy GPR"];
const navItemLinks: string[] = [
  "https://docs.kscale.dev/",
  "https://dashboard.kscale.dev",
  "https://shop.kscale.dev/",
];

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
  },
};

export const NavLogInButton = () => {
  return (
    <motion.a
      href={navItemLinks[1]}
      target="_blank"
      className="-col-end-2 md:-col-end-3"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[1]}
    </motion.a>
  );
};

export const NavDocsButton = () => {
  return (
    <motion.a
      href={navItemLinks[0]}
      target="_blank"
      className="-col-end-3 md:-col-end-4 flex flex-row gap-1 items-center"
      variants={arrowLinkVariants}
      initial="initial"
      whileHover="hover"
    >
      {navItems[0]} <ExpressiveArrow />
    </motion.a>
  );
};
