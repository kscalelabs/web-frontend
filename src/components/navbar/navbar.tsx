import Logotype from "@/components/logos/logotype";
// import BurgerMenu from "@/components/navbar/burgerMenu";
// import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { navigationConfig } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { useLenis } from "lenis/dist/lenis-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import Wordmark from "@/assets/wordmark.svg";
import Link from "next/link";
import { map } from "d3";

export default function NavBar({ href = "/" }: { href?: string } = {}) {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [, setDesktopNavHidden] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [open, setOpen] = useState(false);

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
          {/* <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} /> */}
          {/* <BurgerOpenButton
            className="-col-end-1 place-self-end pointer-events-auto"
            atTop={atTop}
            isOpen={mobileShouldOpenBurger}
            onClick={setMobileShouldOpenBurger}
          /> */}
        </motion.menu>
        {/* <AnimatePresence>{BurgerMenu(mobileShouldOpenBurger)}</AnimatePresence> */}
      </>
    );
  };

  const desktopNavBar = () => {
    return (
      <div className="z-10 col-span-full flex flex-row justify-between overflow-hidden py-4 items-start h-fit px-[5vw] -mx-[5vw]">
        {/* <Logotype atTop={atTop} isMenuOpen={mobileShouldOpenBurger} href={href} /> */}
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

  // useEffect(() => {
  //   setMobileShouldOpenBurger(false);
  //   lenis?.start();
  // }, [width, lenis]);

  useEffect(() => {
    if (lenis) {
      if (open) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [open, lenis]);

  return (
    <>
      <motion.header className="fixed top-0 inset-x-0 z-50 px-layout py-4 bg-background flex justify-between items-center border-b border-b-stone-800">
        {/* {navBasedOnWidth(width >= 768)} */}
        <Link href="/">
          <Logo className="w-auto h-10 md:hidden" />
          <Wordmark className="max-md:hidden w-auto h-10" />
        </Link>
        <nav className="flex gap-2 items-center">
          <button className="bg-orange-600 text-body-2 py-[0.75rem] px-2 rounded-lg">
            View benchmarks
          </button>
          <motion.button
            className="bg-orange-600/50 size-12 rounded-lg"
            onClick={() => setOpen(!open)}
          >
            <Hamburger open={open} />
          </motion.button>
        </nav>
      </motion.header>
      <AnimatePresence>
        {open && (
          <motion.aside
            className={`fixed px-layout py-4 top-20 bg-background inset-x-0 bottom-0 z-50 flex flex-col`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul className="flex flex-col gap-8">
              <li className="text-heading-1">K-Bot</li>
              <li className="text-heading-1">Z-Bot</li>
              <li className="text-heading-1">Docs</li>
              <li className="text-heading-1">Research</li>
            </ul>
            <ul className="flex flex-col gap-4 mt-auto">
              <li>
                <span className="block">inquiries@kscale.dev</span>
                <button className="">Copy email</button>
              </li>
              <li>
                <menu className="flex gap-4">
                  <li>
                    <div className="rounded-full bg-white size-6" />
                  </li>
                  <li>
                    <div className="rounded-full bg-white size-6" />
                  </li>
                  <li>
                    <div className="rounded-full bg-white size-6" />
                  </li>
                </menu>
              </li>
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    // <button className="bg-orange-600/50 size-12 rounded-lg">
    <svg viewBox="0 0 48 48">
      {[16, 24, 32].map((x, index_x) =>
        [16, 24, 32].map((y, index_y) => (
          <motion.circle
            r={2}
            animate={{
              cx: open ? 24 : x,
              cy: open ? 24 : y,
            }}
            fill="orange"
            key={`nav-hamburger-circle-${index_x}-${index_y}`}
            transition={{
              duration: 0.3,
              ease: "circInOut",
            }}
          />
        ))
      )}
      {[16, 32].map((x, index_x) =>
        [16, 32].map((y, index_y) => (
          <motion.path
            animate={{
              d: open ? `M ${x} ${y} L 24 24` : `M ${x} ${y} L ${x} ${y}`,
            }}
            stroke="orange"
            strokeWidth={2}
            key={`nav-hamburger-path-${index_x}-${index_y}`}
          />
        ))
      )}
    </svg>
    // </button>
  );
};
