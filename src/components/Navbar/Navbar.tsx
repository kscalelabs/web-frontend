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
import { Button } from "../ui/Button/Button";
import { CopyButton } from "../ui/Button/CopyButton";
import { usePathname } from "next/navigation";
import { IconButton } from "../ui/IconButton/IconButton";

export const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const lenis = useLenis((lenis) => {
    // console.log("lenis fire");
    if (lenis.isScrolling === false) setDesktopScrollDetect(true);
  });
  const [desktopHover, setDesktopHover] = useState(false);
  const [desktopScrollDetect, setDesktopScrollDetect] = useState(true);
  const [desktopOpen, setDesktopOpen] = useState(true);
  const [desktopPreviousScroll, setPrevScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTopOpen, setMobileTopOpen] = useState(false);

  function update(previous: number): void {
    if (width < 1024 || desktopHover) return;
    if (previous > 0) {
      setDesktopOpen(false);
    } else if (previous < 0) {
      setDesktopOpen(true);
    }
  }

  useMotionValueEvent(scrollY, "change", () => {
    // console.log("scrollY fire");
    if (desktopScrollDetect) {
      // console.log("desktopPreviousScroll", desktopPreviousScroll);
      update(desktopPreviousScroll);
      const y = scrollY.getPrevious();
      // console.log("y", y);
      if (y !== undefined) {
        setPrevScroll(Math.sign(scrollY.get() - y));
      }
    }
    setMobileTopOpen(scrollY.get() > 50);
  });

  const width = useWindowSize().width;

  useEffect(() => {
    // console.log("fire");
    if (width >= 1024) {
      if (desktopHover === false) {
        setDesktopScrollDetect(false);
        setPrevScroll(0);
      }
      setDesktopOpen(desktopHover);
    }
  }, [desktopHover, width]);

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

  useEffect(() => {
    // console.log("pathname", pathname);
    const resetNavbar = () => {
      setDesktopOpen(pathname === "/");
      setMobileOpen(false);
      setDesktopScrollDetect(true);
    };
    resetNavbar();
  }, [pathname]);

  const socials = [
    {
      name: "Discord",
      icon: Discord,
      href: "https://discord.com/invite/pVwubQT9Sg",
    },
    {
      name: "X",
      icon: X,
      href: "https://x.com/kscalelabs",
    },
    {
      name: "Github",
      icon: Github,
      href: "https://github.com/kscalelabs",
    },
  ];

  const mobileLinks = [
    {
      name: "K-Bot",
      href: "https://shop.kscale.dev/",
    },
    {
      name: "Z-Bot",
      href: "https://www.zerothbot.com/",
    },
    {
      name: "Docs",
      href: "https://docs.kscale.dev",
    },
    {
      name: "Careers",
      href: "/careers",
    },
  ];

  const desktopLinks = [
    {
      name: "Products",
      items: [
        {
          name: "K-Bot",
          href: "https://shop.kscale.dev/",
        },
        {
          name: "Z-Bot",
          href: "https://www.zerothbot.com/",
        },
      ],
    },
    {
      name: "Community",
      items: [
        {
          name: "Docs",
          href: "https://docs.kscale.dev",
        },
        {
          name: "Careers",
          href: "/careers",
        },
        {
          name: "Discord",
          href: "https://discord.com/invite/pVwubQT9Sg",
        },
      ],
    },
  ];

  return (
    <div className="lg:h-0">
      <motion.header
        className={clsx(
          "fixed top-0 inset-x-0 z-50 px-layout py-4 flex justify-between max-lg:items-center max-lg:border-b lg:h-24 2xl:h-[6.25rem] transitions-all duration-300 ease-out",
          mobileTopOpen || mobileOpen
            ? "max-2xl:bg-background max-2xl:border-b-stone-800"
            : "max-2xl:bg-transparent max-2xl:border-b-transparent"
        )}
      >
        {/* {navBasedOnWidth(width >= 768)} */}
        <Link href="/" className="my-auto">
          <Logo className="w-auto h-10 sm:hidden" />
          <Wordmark className="max-sm:hidden w-auto h-10" />
        </Link>
        <nav className="flex gap-2 items-center lg:hidden">
          <Button href="/benchmarks">View benchmarks</Button>
          <motion.button
            className="bg-orange-600/50 size-12 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Hamburger open={mobileOpen} />
          </motion.button>
        </nav>
        <nav
          className="relative flex gap-2 md:gap-6 items-center md:items-start max-lg:hidden p-2 pl-4"
          onMouseOver={() => setDesktopHover(true)}
          onMouseLeave={() => setDesktopHover(false)}
        >
          <motion.div
            className="max-lg:hidden -z-10 absolute inset-0 bg-stone-800/80 backdrop-blur-md border border-stone-700 rounded-2xl"
            initial={false}
            animate={{
              height: desktopOpen ? "12rem" : "auto",
            }}
          />
          {desktopLinks.map((group) => (
            <hgroup className="relative mt-3.5 w-32" key={`nav-group-${group.name}`}>
              <h2
                className={clsx(
                  "text-body-3 transition-colors duration-300",
                  desktopOpen ? "text-stone-400" : "text-foreground"
                )}
              >
                {group.name}
              </h2>
              <motion.ul
                className="mt-2 flex flex-col gap-2 absolute"
                initial={false}
                animate={{ opacity: desktopOpen ? 1 : 0, display: desktopOpen ? "flex" : "none" }}
              >
                {group.items.map((item) => (
                  <li key={`nav-item-${group.name}-${item.name}`}>
                    {item.href.startsWith("http") ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="hover:text-neutral-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </motion.ul>
            </hgroup>
          ))}
          <Button href="/benchmarks">View benchmarks</Button>
        </nav>
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
                {mobileLinks.map((link) => (
                  <li key={`nav-mobile-${link.name}`} className="text-heading-1">
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="hover:text-stone-400 focus:text-stone-400 transition-colors duration-300 font-medium"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-6 mt-auto">
                <li className="text-body-2">
                  <CopyButton />
                </li>
                <li>
                  <menu className="flex gap-6 items-center">
                    {socials.map((social, i) => (
                      <li key={`footer-social-${social.name}`}>
                        <IconButton key={i} icon={social.icon} href={social.href} />
                      </li>
                    ))}
                  </menu>
                </li>
              </ul>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <svg viewBox="0 0 48 48">
      {[16, 24, 32].map((x, index_x) =>
        [16, 24, 32].map((y, index_y) => (
          <motion.circle
            r={2}
            initial={{
              cx: x,
              cy: y,
            }}
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
            initial={{
              d: `M ${x} ${y} L ${x} ${y}`,
            }}
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
  );
};

export default Navbar;
