import CTAButton from "@/components/buttons/ctaButton";
import Logotype from "@/components/logos/logotype";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import NavButton from "@/components/navbar/navButton";
import { useWindowSize } from "@/components/util/functions";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "docs", link: "https://docs.kscale.dev/" },
  { name: "dashboard", link: "https://dashboard.kscale.dev" },
];

const navVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-100%",
  },
};

const navItemVariants = {
  visible: {
    y: "0%",
  },
  hidden: {
    y: "-100%",
  },
};

const desktopNavStyling = "flex flex-row gap-8 justify-between py-7 px-[5%] fixed w-full";
const mobileNavStyling = "w-[100%] z-50 top-0 left-0 fixed ";

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

  const navStyling = (isDesktop: boolean) => {
    return isDesktop ? desktopNavStyling : mobileNavStyling;
  };

  const mobileNavBar = () => {
    return (
      <menu
        className={
          "overflow-hidden w-[100%] p-4 top-0 left-0 gap-2.5 " +
          (mobileShouldOpenBurger ? "h-[100dvh] bg-off-white dark:bg-off-black" : "  h-fit")
        }
      >
        <div className={" flex flex-row grow justify-between"}>
          {mobileShouldOpenBurger ? (
            <Logotype />
          ) : (
            <motion.div
              variants={navVariants}
              animate={desktopNavHidden ? "hidden" : "visible"}
              transition={{
                ease: [0.1, 0.25, 0.3, 1],
                duration: 0.5,
                staggerChildren: 0.05,
              }}
            >
              <motion.div
                variants={navItemVariants}
                transition={{
                  ease: [0.1, 0.25, 0.3, 1],
                  duration: 0.3,
                }}
              >
                <Logotype />
              </motion.div>
            </motion.div>
          )}
          <BurgerOpenButton isOpen={mobileShouldOpenBurger} onClick={setMobileShouldOpenBurger} />
        </div>
        {BurgerMenu({ isOpen: mobileShouldOpenBurger, items: navItems })}
      </menu>
    );
  };

  const desktopNavBar = () => {
    return (
      <>
        <Logotype />
        <div className={"flex flex-row gap-3 items-center"}>
          <motion.div
            className={"flex flex-row gap-3 items-center"}
            variants={navVariants}
            animate={desktopNavHidden ? "hidden" : "visible"}
            transition={{
              ease: [0.1, 0.25, 0.3, 1],
              duration: 0.5,
              staggerChildren: 0.05,
            }}
          >
            {navItems.map((item, i) => {
              return (
                <motion.div
                  key={i}
                  variants={navItemVariants}
                  transition={{
                    ease: [0.1, 0.25, 0.3, 1],
                    duration: 0.3,
                  }}
                >
                  <NavButton text={item.name} text2={item.link} />
                </motion.div>
              );
            })}
          </motion.div>
          <CTAButton />
        </div>
      </>
    );
  };

  useEffect(() => {
    if (mobileShouldOpenBurger) {
      document.body.classList.add("scroll-lock");
    } else {
      document.body.classList.remove("scroll-lock");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [mobileShouldOpenBurger]);

  return <nav className={navStyling(width > 1023)}>{navBasedOnWidth(width > 1023)}</nav>;
}
