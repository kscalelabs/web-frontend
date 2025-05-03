import SocialMediaItem from "@/components/Footer/SocialMediaItem";
import Discord from "@/assets/icons/icon_discord.svg";
import Github from "@/assets/icons/icon_github.svg";
import X from "@/assets/icons/icon_x.svg";
import Wordmark from "@/assets/wordmark.svg";
import FooterLogotype from "@/components/logos/footerLogotype";
import { circOut } from "motion";
import { AnimatePresence, cubicBezier, motion } from "motion/react";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import { CopyButton } from "../ui/Button/CopyButton";

// const socialMediaSvgs: JSX.Element[] = [
//   <Discord key={"discord"} />,
//   <Twitter key={"twitter"} />,
//   <Github key={"github"} />,
// ];

// x

export interface FooterSectionListProps {
  title: string;
  items: { title: string; url: string; isInternal?: boolean }[];
  extraStyling: string;
}

const FooterSectionList = ({ extraStyling, items, title }: FooterSectionListProps) => {
  return (
    <section
      className={
        "flex flex-col items-start gap-4 text-filament font-planar font-normal " + extraStyling
      }
    >
      <h3 className={"text-caption uppercase opacity-[77%]"}>{title}</h3>
      <ul className={"flex flex-col items-start gap-4 md:gap-6"}>
        {items.map((item, index) => (
          <li key={index} className={"list-none"}>
            <Link href={item.url} target={"_blank"} className="hover:underline">
              <motion.span
                initial={{ opacity: 1 }}
                whileHover={{ opacity: 0.77 }}
                transition={{ duration: 0.3, ease: circOut }}
              >
                {item.title}
              </motion.span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function Footer() {
  return (
    <footer
      className={
        "py-8 gap-y-8 px-layout bg-background border-t border-stone-800 flex flex-col gap-8"
      }
    >
      <Link href="/" className="my-auto">
        <Wordmark className="w-auto h-10" />
      </Link>
      <section>
        <h2 className="text-body-3 font-bold text-stone-500 mb-2">Product</h2>
        <div className="flex flex-col gap-6">
          <a
            href="/tos"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium relative flex items-center hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 w-full bg-red-500/50 [@media(pointer:fine)]:hidden" />
            Send feedback
          </a>
        </div>
      </section>
      <section>
        <h2 className="text-body-3 font-bold text-stone-500 mb-2">Legal</h2>
        <div className="flex flex-col gap-6">
          <Link
            href="/tos"
            className="font-medium relative flex items-center hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 w-full bg-red-500/50 [@media(pointer:fine)]:hidden" />
            Terms of service
          </Link>
          <Link
            href="/privacy"
            className="font-medium relative flex items-center hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 w-full bg-red-500/50 [@media(pointer:fine)]:hidden" />
            Privacy policy
          </Link>
        </div>
      </section>
      <CopyButton />
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
    </footer>
  );
}
