import { NavCTAButton } from "@/components/buttons/CTAButtons";
import Logotype from "@/components/logos/logotype";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavDocsButton, NavLogInButton } from "@/components/navbar/navButtons";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useEffect, useState } from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import BurgerMenu from "@/components/navbar/burgerMenu";

const navButtons: React.ReactNode[] = [
  { component: <NavDocsButton />, key: "docs" },
  { component: <NavLogInButton />, key: "login" },
].map((item) => React.cloneElement(item.component, { key: item.key }));

const navVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-150%",
  },
};

const navItemVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-150%",
  },
};

export default function NavBar() {
  const { scrollY } = useScroll();
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
    return (
      <menu
        className={
          "overflow-hidden w-[100%] p-4 top-0 left-0 gap-2.5 " +
          (mobileShouldOpenBurger ? "h-[100dvh] bg-background " : "h-fit")
        }
      >
        <div className={" flex flex-row grow justify-between"}>
          <Logotype />
          <BurgerOpenButton isOpen={mobileShouldOpenBurger} onClick={setMobileShouldOpenBurger} />
        </div>
        {BurgerMenu(mobileShouldOpenBurger)}
      </menu>
    );
  };

  const desktopNavBar = () => {
    return (
      <div className={"grid-m pt-5"}>
        <Logotype />
        <div className="justify-self-end w1440:col-span-10 w1024:col-span-7 w640:col-span-7 flex flex-row gap-3 items-center">
          <motion.div
            className="flex flex-row gap-3 items-center"
            variants={navVariants}
            animate={desktopNavHidden ? "hidden" : "visible"}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.5,
              staggerChildren: 0.05,
            }}
          >
            {navButtons.map((navItem, i) => (
              <motion.div
                className={"flex flex-row"}
                key={i}
                variants={navItemVariants}
                transition={{
                  ease: [0.1, 0.25, 0.3, 1],
                  duration: 0.3,
                }}
              >
                {navItem}
              </motion.div>
            ))}
          </motion.div>
          <NavCTAButton className="md:col-span-2 md:col-start-8 2xl:col-span-2 2xl:col-start-11">
            {`Buy GPR`}
            <motion.div initial="initial" whileHover="hover">
              <ExpressiveArrow size={"size-4"} />
            </motion.div>
          </NavCTAButton>
        </div>
      </div>
    );
  };

  useEffect(() => {
    if (mobileShouldOpenBurger) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [mobileShouldOpenBurger]);

  return <nav className="fixed top-0 inset-x-0 z-50">{navBasedOnWidth(width >= 768)}</nav>;
}
