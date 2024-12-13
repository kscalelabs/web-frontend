import CTAButton from "@/components/buttons/ctaButton";
import Logotype from "@/components/logos/logotype";
import BurgerMenu from "@/components/navbar/burgerMenu";
import BurgerOpenButton from "@/components/navbar/burgerOpenButton";
import DarkModeToggle from "@/components/navbar/DarkModeToggle";
import NavButton from "@/components/navbar/navButton";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { ExpressiveArrow } from "@/components/iconography/Iconography";
// import { useLenis } from "lenis/react";
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
    return mobileNavBar();
  };

  // const lenis = useLenis();

  const mobileNavBar = () => {
    return (
      <menu
        className={clsx(
          "grid-m overflow-hidden py-4 items-end md:items-center bg-background dark:bg-background-dark",
          mobileShouldOpenBurger ? "h-[100dvh]" : "h-fit"
        )}
      >
        <Logotype />

        {width >= 768 ? (
          <>
            <motion.a
              href="https://docs.kscale.dev/"
              target="_blank"
              className="-col-end-3 md:-col-end-4 flex flex-row gap-1 items-center"
              variants={arrowLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              Docs <ExpressiveArrow />
            </motion.a>
            <motion.a
              href="https://dashboard.kscale.dev"
              target="_blank"
              className="-col-end-2 md:-col-end-3"
              variants={arrowLinkVariants}
              initial="initial"
              whileHover="hover"
            >
              Log in
            </motion.a>
            <CTAButton className="md:col-span-2 md:col-start-8 2xl:col-span-2 2xl:col-start-11">
              Buy GPR <ExpressiveArrow />
            </CTAButton>
          </>
        ) : (
          <div className="-col-end-1 col-span-2 flex flex-row gap-2 justify-end h-fit">
            <CTAButton>Buy GPR</CTAButton>
            <BurgerOpenButton isOpen={mobileShouldOpenBurger} onClick={setMobileShouldOpenBurger} />
          </div>
        )}

        {/* {width < 640 && BurgerMenu({ isOpen: mobileShouldOpenBurger, items: navItems })} */}
      </menu>
    );
  };

  // const desktopNavBar = () => {
  //   return (
  //     <>
  //       <Logotype />
  //       <div className="flex flex-row gap-3 items-center">
  //         <motion.div
  //           className="flex flex-row gap-3 items-center"
  //           variants={navVariants}
  //           animate={desktopNavHidden ? "hidden" : "visible"}
  //           transition={{
  //             ease: [0.1, 0.25, 0.3, 1],
  //             duration: 0.5,
  //             staggerChildren: 0.05,
  //           }}
  //         >
  //           {navItems.map((item, i) => (
  //             <motion.div
  //               key={i}
  //               variants={navItemVariants}
  //               transition={{
  //                 ease: [0.1, 0.25, 0.3, 1],
  //                 duration: 0.3,
  //               }}
  //             >
  //               <NavButton text={item.name} text2={item.link} />
  //             </motion.div>
  //           ))}
  //           <motion.div
  //             variants={navItemVariants}
  //             transition={{
  //               ease: [0.1, 0.25, 0.3, 1],
  //               duration: 0.3,
  //             }}
  //           >
  //             <DarkModeToggle />
  //           </motion.div>
  //         </motion.div>
  //         <CTAButton />
  //       </div>
  //     </>
  //   );
  // };

  useEffect(() => {
    if (mobileShouldOpenBurger) {
      document.body.classList.add("scroll-lock");
      // lenis.stop();
    } else {
      document.body.classList.remove("scroll-lock");
      // lenis.start();
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("scroll-lock");
    };
  }, [mobileShouldOpenBurger]);

  return <nav className="fixed top-0 inset-x-0 z-50">{navBasedOnWidth(false)}</nav>;
}
function useLenis() {
  throw new Error("Function not implemented.");
}
