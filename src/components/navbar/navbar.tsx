import Logotype from "@/components/logos/logotype";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { navigationConfig } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { useLenis } from "lenis/dist/lenis-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

export default function NavBar({ href = "/" }: { href?: string } = {}) {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileShouldOpenBurger, setMobileShouldOpenBurger] = useState(false);

  // const safelist: string[] = ["-col-end-4", "-col-end-3", "-col-end-2", "-col-end-1"];

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
    return mobileNavBar();
  };

  const atTop = scrollY.get() < 400;

  const mobileNavBar = () => {
    return (
      <>
        <motion.menu className={clsx(" overflow-hidden py-4 items-end h-fit bg-background")}>
          <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} />
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
      <div className="z-10 col-span-full flex flex-row justify-between overflow-hidden py-4 items-start h-fit px-[5vw] -mx-[5vw]">
        <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} />
        <div className="flex flex-row z-10 gap-16">
          {navigationConfig.map((navItem, index) => (
            <div className="flex flex-col gap-2">
              <p className="uppercase">{navItem.name}</p>
              <div className="flex flex-col gap-1">
                {navItem.children.map((child, index) => {
                  return (
                    <a href={child.link} target={child.isExternal ? "_blank" : "_self"}>
                      {child.name}
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    setMobileShouldOpenBurger(false);
    lenis?.start();
  }, [width, lenis]);

  useEffect(() => {
    if (lenis) {
      if (mobileShouldOpenBurger) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [mobileShouldOpenBurger, lenis]);

  return (
    <motion.header className="sticky top-0 inset-x-0 z-10 md:h-auto md:py-4 pointer-events-none">
      {navBasedOnWidth(width >= 768)}
    </motion.header>
  );
}
