import { useWindowSize } from "@/components/util/functions";
import clsx from "clsx";
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
import { useLenis } from "lenis/dist/lenis-react";
import { Hamburger } from "../ui/Icon/Hamburger";

export const Navbar = () => {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [desktopHover, setDesktopHover] = useState(false);
  // const [desktopScrollDetect, setDesktopScrollDetect] = useState(false); // Changed to false
  const [desktopOpen, setDesktopOpen] = useState(false); // Changed to false
  // const [desktopPreviousScroll, setPrevScroll] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTopOpen, setMobileTopOpen] = useState(false);
  const lenis = useLenis();

  useMotionValueEvent(scrollY, "change", () => {
    setMobileTopOpen(scrollY.get() > 50);
  });

  const width = useWindowSize().width;

  useEffect(() => {
    // console.log("fire");
    if (width >= 1024) {
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
    const resetNavbar = () => {
      // setDesktopOpen(pathname === "/");
      setMobileOpen(false);
      // setDesktopScrollDetect(true);
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
      href: "https://shop.kscale.dev/products/kbot",
    },
    {
      name: "Z-Bot",
      href: "https://shop.kscale.dev/products/zbot",
    },
    {
      name: "Docs",
      href: "https://docs.kscale.dev",
    },
    {
      name: "Join us",
      href: "/join",
    },
  ];

  const desktopLinks = [
    {
      name: "Products",
      items: [
        {
          name: "K-Bot",
          href: "https://shop.kscale.dev/products/kbot",
        },
        {
          name: "Z-Bot",
          href: "https://shop.kscale.dev/products/zbot",
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
          name: "Join us",
          href: "/join",
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
          "fixed top-0 inset-x-0 z-50 border-b lg:h-22 2xl:h-22 transitions-all duration-300 ease-out from-background from-5% to-transparent",
          mobileTopOpen || mobileOpen
            ? "bg-background border-b-stone-800"
            : "bg-transparent border-b-transparent"
        )}
      >
        <div className="max-w-[2160px] mx-auto px-layout py-4 flex lg:grid grid-cols-[192px_1fr_192px] lg:gap-x-6 justify-between items-center">
          {/* {navBasedOnWidth(width >= 768)} */}
          <Link href="/" className="my-auto">
            <Logo className="w-auto h-10 sm:hidden" />
            <Wordmark className="max-sm:hidden w-auto h-10" />
          </Link>
          <nav className="flex gap-2 items-center lg:hidden">
            <Button href="/benchmarks" intent="secondary">
              Get started
            </Button>
            <motion.button
              className="bg-stone-400 size-12 rounded-lg"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Hamburger open={mobileOpen} />
            </motion.button>
          </nav>
          <nav
            className="relative flex gap-4 md:gap-6 lg:justify-center items-center md:items-start max-lg:hidden p-2 pl-4"
            onMouseOver={() => setDesktopHover(true)}
            onMouseLeave={() => setDesktopHover(false)}
          >
            {desktopLinks.map((group) => (
              <ul className="mt-2 flex gap-4 md:gap-6" key={`nav-group-${group.name}`}>
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
              </ul>
            ))}
          </nav>
          <div className="max-lg:hidden flex justify-end">
            <Button href="/benchmarks" size="sm" intent="secondary">
              Get started
            </Button>
          </div>
        </div>
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
              <ul className="flex flex-col gap-4 mt-auto">
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

export default Navbar;
