import {
  FillMode,
  navItemLinksMobile,
  navItemsMobile,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { motion } from "motion/react";
import Link from "next/link";
import { CTASubtitleButton } from "@/components/buttons/CTAButtons";

const BurgerMenu = (isOpen: boolean) => {
  return isOpen ? (
    <motion.div
      className={"flex flex-col col-span-full list-none justify-evenly"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "circOut" }}
    >
      {navItemsMobile.map((navItem, index) => {
        return (
          <motion.button
            key={index}
            className={
              "col-span-full font-planar font-normal capitalize text-4xl select-none flex flex-row text-foreground w-fit pointer-events-auto" +
              " hover:text-rust " +
              transitionEaseLinearDuration300
            }
            initial="initial"
            whileHover="hover"
            aria-label="Menu"
          >
            <Link
              className={"font-planar pointer-events-auto"}
              href={navItemLinksMobile[index].link}
              target={navItemLinksMobile[index].target}
            >
              {navItem}
            </Link>
            {index !== 1 ? <ExpressiveArrow size={"size-10"} /> : <></>}
          </motion.button>
        );
      })}

      <CTASubtitleButton
        subtitle="Available for pre-order, Q1 2025"
        className="w-full col-span-full h-fit"
        mode={FillMode.FILL}
      >
        Buy K-Bot today
      </CTASubtitleButton>
    </motion.div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
