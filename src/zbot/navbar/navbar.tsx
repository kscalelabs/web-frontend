import Logotype from "@/components/logos/logotype";
import BurgerMenu from "@/zbot/navbar/burgerMenu";
import BurgerOpenButton from "@/zbot/navbar/burgerOpenButton";
import { zbotNavigationConfig, type NavigationConfig } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { useLenis } from "lenis/dist/lenis-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);

  function update(current: number, previous: number): void {
    if (current < previous) {
      setDesktopNavHidden(false);
    } else if (current > 100 && current > previous) {
      setDesktopNavHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (current: number) => {
    update(current, desktopPreviousScroll);
    setPrevScroll(current);
  });
  const width = useWindowSize().width;

  const navBasedOnWidth = (isDesktop: boolean) => {
    return isDesktop ? desktopNavBar() : mobileNavBar();
  };

  const atTop = scrollY.get() < 100;

  const mobileNavBar = () => {
    return (
      <>
        <motion.menu
          className={clsx(
            "col-span-full grid grid-cols-subgrid overflow-hidden py-4 items-end h-fit px-[5vw] -mx-[5vw]"
          )}
          initial={{ backgroundColor: "var(--carbon)" }}
          animate={{
            backgroundColor: "var(--carbon)",
          }}
          exit={{ backgroundColor: "var(--carbon)" }}
          transition={{ duration: 0.2, ease: "circOut" }}
        >
          <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href="/zbot" />
          <BurgerOpenButton
            className="-col-end-1 place-self-end pointer-events-auto"
            atTop={atTop}
            isOpen={mobileShouldOpenBurger}
            onClick={setMobileShouldOpenBurger}
          />
        </motion.menu>
        <AnimatePresence>{BurgerMenu(mobileShouldOpenBurger)}</AnimatePresence>
      </>
    );
  };

  const desktopNavBar = () => {
    return (
      <>
        <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href="/zbot" />
        <div
          className={
            "flex flex-row gap-6 items-center 2xl:-col-end-3 xl:-col-end-3 lg:-col-end-3 md:-col-end-3"
          }
        >
          {zbotNavigationConfig.map((navItem, index) => {
            return (
              <motion.a
                key={index}
                href={navItem.link}
                target={navItem.isExternal ? "_blank" : "_self"}
                className={clsx(
                  "-col-end-3 md:-col-end-4 2xl:-col-end-4 2xl:text-[0.75rem] lg:text-[1rem] md:text-[0.8rem] flex flex-row gap-2 size-fit items-center select-none self-center pointer-events-auto",
                  "text-filament"
                )}
                initial="initial"
                whileHover="hover"
                transition={{ duration: 0.2, ease: "circOut" }}
              >
                {navItem.name}
                {navItem.isExternal && (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 4 },
                    }}
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </motion.svg>
                )}
              </motion.a>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <nav className="sticky top-0 z-50 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 2xl:grid-cols-12 gap-x-4 px-4 sm:px-0">
      {navBasedOnWidth(width >= 768)}
    </nav>
  );
}
