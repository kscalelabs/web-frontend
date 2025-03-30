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
    return isDesktop ? desktopNavBar() : mobileNavBar();
  };

  const atTop = scrollY.get() < 400;

  const mobileNavBar = () => {
    return (
      <>
        <motion.menu
          className={clsx(
            "col-span-full grid grid-cols-subgrid overflow-hidden py-4 items-end h-fit px-[5vw] -mx-[5vw] bg-background"
          )}
        >
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
      <div className="col-span-full flex flex-row justify-between overflow-hidden py-4 items-center h-fit px-[5vw] -mx-[5vw]">
        <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} />
        <div className="flex flex-row gap-12">
          {navigationConfig.map((navItem, index) => {
            return (
              <a
                key={index}
                href={navItem.link}
                target={navItem.isExternal ? "_blank" : "_self"}
                className={clsx(
                  "flex justify-end items-end text-base lg:text-md select-none self-center pointer-events-auto h-full relative group",
                  atTop ? "text-white" : "text-foreground"
                )}
              >
                <div className={clsx("flex flex-row gap-2 items-center size-fit")}>
                  {navItem.name}
                </div>
                <div className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-rust transition-all duration-300 group-hover:w-full" />
              </a>
            );
          })}
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
