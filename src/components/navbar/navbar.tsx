import { NavCTAButton } from "@/components/buttons/CTAButtons";
import Logotype from "@/components/logos/logotype";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import { NavDocsButton, NavLogInButton } from "@/components/navbar/navButton";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
import { isDarkMode } from "@/components/util/isDarkMode";
import BurgerMenu from "@/components/navbar/burgerMenu";

const navButtons: React.ReactNode[] = [<NavDocsButton />, <NavLogInButton />];

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

const arrowLinkVariants = {
  hover: {
    opacity: 0.5,
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
      <nav
        className={clsx(
          "grid-m overflow-hidden py-4 items-end md:items-center bg-background ",
          mobileShouldOpenBurger ? "h-[100dvh]" : "h-fit"
        )}
      >
        <Logotype />

        {/*{width < 640 && BurgerMenu(mobileShouldOpenBurger, navItems, navItemLinks)}*/}
      </nav>
    );
  };

  const desktopNavBar = () => {
    return (
      <div className={"grid-m"}>
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
            <ExpressiveArrow />
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
