import { NavCTAButton } from "@/components/buttons/CTAButtons";
import Logotype from "@/components/logos/logotype";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavDocsButton, NavLogInButton } from "@/components/navbar/navButtons";
import { useWindowSize } from "@/components/util/functions";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
import BurgerMenu from "@/components/navbar/burgerMenu";
import { FillMode } from "@/components/util/constants";
import { useLenis } from "lenis/dist/lenis-react";
import clsx from "clsx";

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
          initial={{ backgroundColor: "var(--background-0)" }}
          animate={{
            backgroundColor: !atTop ? "var(--background)" : "var(--background-0)",
          }}
          exit={{ backgroundColor: "var(--background-0)" }}
          transition={{ duration: 0.2, ease: "circOut" }}
        >
          <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} />
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
        <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} />
        <NavDocsButton atTop={atTop} />
        <NavLogInButton atTop={atTop} />
        <NavCTAButton className=" col-span-2 -col-end-1 " mode={FillMode.FILL}>
          View products
        </NavCTAButton>
      </>
    );
  };
  useEffect(() => {
    setMobileShouldOpenBurger(false);
    lenis?.start();
  }, [width]);

  useEffect(() => {
    if (lenis) {
      if (mobileShouldOpenBurger) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [mobileShouldOpenBurger]);

  return (
    <motion.nav
      className="fixed top-0 inset-x-0 z-50 h-[100dvh] md:h-auto md:py-4 grid-a grid-rows-[min-content_auto] pointer-events-none"
      initial={{
        backgroundColor: "var(--background-0)",
      }}
      animate={{
        backgroundColor:
          width >= 768
            ? atTop
              ? "var(--background-0)"
              : "var(--background)"
            : mobileShouldOpenBurger
              ? "var(--background)"
              : "var(--background-0)",
      }}
    >
      {navBasedOnWidth(width >= 768)}
    </motion.nav>
  );
}
