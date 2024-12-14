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
    <div
      className={
        "flex flex-col items-start w-[100%] gap-10 py-12 list-none justify-evenly " +
        (isOpen ? "h-[100dvh] bg-background " : "h-fit")
      }
    >
      {navItemsMobile.map((navItem, index) => {
        return (
          <motion.button
            key={index}
            className={
              "font-planar font-normal capitalize text-4xl select-none flex flex-row text-foreground " +
              " hover:text-rust " +
              transitionEaseLinearDuration300
            }
            initial="initial"
            whileHover="hover"
            aria-label="Menu"
          >
            <Link className={"font-planar"} href={navItemLinksMobile[index]} target={"_blank"}>
              {navItem}
            </Link>
            {index !== 1 ? <ExpressiveArrow size={"size-10"} /> : <></>}
          </motion.button>
        );
      })}

      <CTASubtitleButton
        subtitle="Available for pre-order, Q1 2025"
        className="w-full"
        mode={FillMode.FILL}
      >
        Buy K-Bot today
      </CTASubtitleButton>
    </div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
