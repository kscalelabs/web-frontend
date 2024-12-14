import {
  navItemLinks,
  navItems,
  transitionEaseLinearDuration300,
} from "@/components/util/constants";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { motion } from "motion/react";
import Link from "next/link";

const BurgerMenu = (isOpen: boolean) => {
  return isOpen ? (
    <div className={"flex flex-col items-start w-[100%] gap-10 py-12 list-none"}>
      {navItems.map((navItem, index) => {
        return (
          <motion.button
            key={index}
            className={
              "font-planar font-normal capitalize text-2xl select-none flex flex-row text-foreground " +
              " hover:text-rust " +
              transitionEaseLinearDuration300
            }
            initial="initial"
            whileHover="hover"
            aria-label="Menu"
          >
            <Link href={navItemLinks[index]} target={"_blank"}>
              {navItem}
            </Link>
            {index !== 1 ? <ExpressiveArrow size={"size-7"} /> : <></>}
          </motion.button>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
