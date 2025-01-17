import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { navigationConfig, transitionEaseLinearDuration300 } from "@/components/util/constants";
import { motion } from "motion/react";
import Link from "next/link";

const BurgerMenu = (isOpen: boolean) => {
  return isOpen ? (
    <motion.div
      className={"flex flex-col col-span-full list-none justify-evenly"}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "circOut" }}
    >
      {navigationConfig.map((navItem, index) => {
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
              href={navItem.link}
              target={navItem.isExternal ? "_blank" : "_self"}
            >
              {navItem.name}
            </Link>
            {navItem.isExternal ? <ExpressiveArrow size={"size-10"} /> : <></>}
          </motion.button>
        );
      })}
    </motion.div>
  ) : (
    <></>
  );
};

export default BurgerMenu;
