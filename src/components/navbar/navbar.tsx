import { navigationConfig } from "@/components/util/constants";
import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
import { useLenis } from "lenis/dist/lenis-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import Wordmark from "@/assets/wordmark.svg";
import Discord from "@/assets/icons/icon_discord.svg";
import X from "@/assets/icons/icon_x.svg";
import Github from "@/assets/icons/icon_github.svg";
import Link from "next/link";
import { LinkButton } from "../ui/Button/Button";
import { CopyButton } from "../ui/Button/CopyButton";

export default function NavBar({ href = "/" }: { href?: string } = {}) {
  const { scrollY } = useScroll();
  const lenis = useLenis();
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [desktopPreviousScroll, setPrevScroll] = useState(scrollY.get());
  const [mobileOpen, setMobileOpen] = useState(false);

  // const safelist: string[] = ["-col-end-4", "-col-end-3", "-col-end-2", "-col-end-1"];

  function update(current: number, previous: number): void {
    if (current < previous) {
      setDesktopOpen(false);
    } else if (current > 100 && current > previous) {
      setDesktopOpen(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (current: number) => {
    // update(current, desktopPreviousScroll);
    setPrevScroll(current);
  });
  const width = useWindowSize().width;

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

  useEffect(() => {
    setMobileOpen(false);
    lenis?.start();
  }, [width, lenis]);

  useEffect(() => {
    if (lenis) {
      if (mobileOpen) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [mobileOpen, lenis]);

  return (
    <div className="relative h-20 md:h-24">
      <motion.header className="fixed top-0 inset-x-0 z-50 px-layout py-4 max-md:bg-background flex justify-between max-md:items-center max-md:border-b border-b-stone-800 md:h-24">
        {/* {navBasedOnWidth(width >= 768)} */}
        <Link href="/" className="my-auto">
          <Logo className="w-auto h-10 sm:hidden" />
          <Wordmark className="max-sm:hidden w-auto h-10" />
        </Link>
        <nav className="flex gap-2 md:gap-6 items-center md:hidden">
          <LinkButton href="/benchmarks">View benchmarks</LinkButton>
          <motion.button
            className="bg-orange-600/50 size-12 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Hamburger open={mobileOpen} />
          </motion.button>
        </nav>
        <motion.nav
          className="relative flex gap-2 md:gap-6 items-center md:items-start max-md:hidden p-2 pl-4"
          onMouseOver={() => setDesktopOpen(true)}
          onMouseLeave={() => setDesktopOpen(false)}
          animate={{
            height: desktopOpen ? "12rem" : "4rem",
          }}
        >
          <div className="-z-10 absolute inset-0 bg-stone-800 border border-stone-900 rounded-2xl" />
          <hgroup className="relative mt-3.5 w-32">
            <h2
              className={clsx(
                "text-body-3 transition-colors duration-300",
                desktopOpen ? "text-stone-400" : "text-foreground"
              )}
              onMouseOver={() => setDesktopOpen(true)}
            >
              Products
            </h2>
            <motion.ul
              className="mt-2 flex flex-col gap-2 absolute"
              animate={{ opacity: desktopOpen ? 1 : 0, display: desktopOpen ? "flex" : "none" }}
            >
              <li>
                <a
                  href="https://discord.com/invite/pVwubQT9Sg"
                  target="_blank"
                  className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                >
                  K-Bot
                </a>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/pVwubQT9Sg"
                  target="_blank"
                  className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                >
                  Z-Bot
                </a>
              </li>
            </motion.ul>
          </hgroup>
          <hgroup className="relative mt-3.5 w-32">
            <h2
              className={clsx(
                "text-body-3 transition-colors duration-300",
                desktopOpen ? "text-stone-400" : "text-foreground"
              )}
              onMouseOver={() => setDesktopOpen(true)}
            >
              Community
            </h2>
            <motion.ul
              className="mt-2 flex flex-col gap-2"
              animate={{ opacity: desktopOpen ? 1 : 0, display: desktopOpen ? "flex" : "none" }}
            >
              <li>
                <Link
                  href="/research"
                  className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                >
                  Careers
                </Link>
              </li>
              <li>
                <a
                  href="https://discord.com/invite/pVwubQT9Sg"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                >
                  Discord
                </a>
              </li>
            </motion.ul>
          </hgroup>
          <LinkButton href="/benchmarks">View benchmarks</LinkButton>
        </motion.nav>
      </motion.header>
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            className={`fixed top-20 bg-background inset-x-0 bottom-0 z-50`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="h-full flex flex-col gap-16 py-8 overflow-auto px-layout">
              <ul className="flex flex-col gap-8">
                <li className="text-heading-1">
                  <a
                    href="https://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                  >
                    K-Bot
                  </a>
                </li>
                <li className="text-heading-1">
                  <a
                    href="https://google.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                  >
                    Z-Bot
                  </a>
                </li>
                <li className="text-heading-1">
                  <a
                    href="https://docs.kscale.dev"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                  >
                    Docs
                  </a>
                </li>
                <li className="text-heading-1">
                  <Link
                    href="kscale.dev/research"
                    className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                  >
                    Research
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-6 mt-auto">
                <li className="text-body-2">
                  <CopyButton />
                </li>
                <li>
                  <menu className="flex gap-6 items-center">
                    <li>
                      <a
                        href="https://discord.com/invite/pVwubQT9Sg"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="relative block group"
                      >
                        <Discord className="size-9 group-hover:scale-110 group-focus:scale-110 group-active:scale-90 transition-transform duration-300" />
                        <span className="absolute size-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/kscalelabs"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="relative block group"
                      >
                        <X className="size-9 group-hover:scale-110 group-focus:scale-110 group-active:scale-90 transition-transform duration-300" />
                        <span className="absolute size-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  [@media(pointer:fine)]:hidden" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/kscalelabs"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="relative block group"
                      >
                        <Github className="size-9 group-hover:scale-110 group-focus:scale-110 group-active:scale-90 transition-transform duration-300" />
                        <span className="absolute size-12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" />
                      </a>
                    </li>
                  </menu>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
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

function copyEmail() {
  try {
    navigator.clipboard.writeText("inquiries@kscale.dev");
  } catch (error) {
    console.error("Failed to copy email: ", error);
  }
}
