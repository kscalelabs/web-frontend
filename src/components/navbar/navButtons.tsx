import { motion } from "motion/react";
import React from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { navItemLinks, navItems } from "@/components/util/constants";

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
  },
};

export const NavLogInButton = ({ atTop = true }: { atTop: boolean }) => {
  return (
    <motion.a
      href={navItemLinks[1].link}
      target={navItemLinks[1].target}
      className="-col-end-2 md:-col-end-3 2xl:-col-end-3 2xl:text-[0.75rem] lg:text-[1rem] md:text-[0.8rem]
      select-none size-fit self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      animate={{ color: atTop ? "var(--filament)" : "var(--foreground)" }}
      whileHover="hover"
    >
      {navItems[1]}
    </motion.a>
  );
};

export const NavDocsButton = ({ atTop = true }: { atTop: boolean }) => {
  return (
    <motion.a
      href={navItemLinks[0].link}
      target={navItemLinks[0].target}
      className="-col-end-3 md:-col-end-4 2xl:-col-end-4 2xl:text-[0.75rem] lg:text-[1rem] md:text-[0.8rem]
      flex flex-row gap-1 size-fit items-center select-none self-center pointer-events-auto"
      variants={arrowLinkVariants}
      initial="initial"
      animate={{ color: atTop ? "var(--filament)" : "var(--foreground)" }}
      whileHover="hover"
    >
      {navItems[0]} <ExpressiveArrow size={"size-4"} />
    </motion.a>
  );
};
