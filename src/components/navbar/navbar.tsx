import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Logotype from "@/components/logos/logotype";
import NavButton from "@/components/navbar/navButton";
import { useEffect, useState } from "react";
import { useWindowSize } from "@/components/util/functions";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavCTAButton } from "@/components/buttons/CTAButtons";
import { ExpressiveArrow } from "@/components/iconography/Iconography";

const navItems: string[] = ["Docs", "Log in"];
const navItemLinks: string[] = ["https://docs.kscale.dev/", "https://dashboard.kscale.dev/login"];

const navCTAText = "Buy GPR";
const navCTAURL = "https://shop.kscale.dev/collections/all";

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

const desktopNavStyling = "flex flex-row gap-8 justify-between py-2 px-6 fixed w-full";
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
          "overflow-hidden w-[100%] p-4 top-0 left-0 gap-2.5 bg-background " +
          (mobileShouldOpenBurger ? "h-[100dvh] " : " h-fit")
        }
      >
        <div className={" flex flex-row grow justify-between"}>
          <Logotype />
          <BurgerOpenButton isOpen={mobileShouldOpenBurger} onClick={setMobileShouldOpenBurger} />
        </div>
        {BurgerMenu(mobileShouldOpenBurger, navItems, navItemLinks)}
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
            {navItems.map((name, i) => {
              return (
                <motion.div
                  key={i}
                  variants={navItemVariants}
                  transition={{
                    ease: [0.1, 0.25, 0.3, 1],
                    duration: 0.3,
                  }}
                  className={i === 0 ? "flex flex-row" : ""}
                >
                  <NavButton text={name} text2={navItemLinks[i]} />
                  {i === 0 ? <ExpressiveArrow /> : undefined}
                </motion.div>
              );
            })}
          </motion.div>
          <NavCTAButton children={navCTAText} href={navCTAURL} />
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
