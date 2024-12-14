import { NavCTAButton } from "@/components/buttons/CTAButtons";
import Logotype from "@/components/logos/logotype";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavDocsButton, NavLogInButton } from "@/components/navbar/navButtons";
import { useWindowSize } from "@/components/util/functions";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import BurgerMenu from "@/components/navbar/burgerMenu";
import { FillMode } from "@/components/util/constants";
import Lenis from "lenis";
import { useLenis } from "lenis/dist/lenis-react";
import clsx from "clsx";

const navButtons: React.ReactNode[] = [
  { component: <NavDocsButton />, key: "docs" },
  { component: <NavLogInButton />, key: "login" },
].map((item) => React.cloneElement(item.component, { key: item.key }));

export default function NavBar() {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [desktopNavHidden, setDesktopNavHidden] = useState(false);
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

  const mobileNavBar = () => {
    const atTop = scrollY.get() < 100;
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
          <Logotype atTop={atTop} />
          <BurgerOpenButton
            className="-col-end-1 place-self-end"
            isOpen={mobileShouldOpenBurger}
            onClick={setMobileShouldOpenBurger}
          />
        </motion.menu>
        <AnimatePresence>{BurgerMenu(mobileShouldOpenBurger)}</AnimatePresence>
      </>
    );
  };

  const desktopNavBar = () => {
    const atTop = scrollY.get() < 100;
    return (
      <motion.div
        className={"grid-m py-5"}
        initial={{ backgroundColor: "var(--background-0)" }}
        animate={{ backgroundColor: atTop ? "var(--background-0)" : "var(--background)" }}
      >
        <Logotype atTop={atTop} />
        <div className="z-50 justify-self-end w1440:col-span-10 w1024:col-span-7 w640:col-span-7 flex flex-row gap-3 items-center">
          <motion.div className="flex flex-row gap-3 items-center">
            {navButtons.map((navItem, i) => (
              <motion.div className={"flex flex-row"} key={i}>
                {navItem}
              </motion.div>
            ))}
          </motion.div>
          <NavCTAButton
            className="md:col-span-2 md:col-start-8 2xl:col-span-2 2xl:col-start-11"
            mode={FillMode.FILL}
          >
            {`Buy K-Bot`}
            <motion.div initial="initial" whileHover="hover">
              <ExpressiveArrow size={"size-4"} />
            </motion.div>
          </NavCTAButton>
        </div>
      </motion.div>
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
      className="fixed top-0 inset-x-0 z-50 h-[100dvh] md:h-fit grid-a grid-rows-[min-content_auto]"
      initial={{
        backgroundColor: "var(--background-0)",
      }}
      animate={{
        backgroundColor: mobileShouldOpenBurger ? "var(--background)" : "var(--background-0)",
      }}
    >
      {navBasedOnWidth(width >= 768)}
    </motion.nav>
  );
}
