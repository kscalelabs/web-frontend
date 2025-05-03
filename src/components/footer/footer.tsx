import Discord from "@/assets/icons/icon_discord.svg";
import Github from "@/assets/icons/icon_github.svg";
import X from "@/assets/icons/icon_x.svg";
import Wordmark from "@/assets/wordmark.svg";
import Link from "next/link";
import { CopyButton } from "../ui/Button/CopyButton";

export default function Footer() {
  return (
    <footer
      className={
        "py-8 px-layout bg-background border-t border-stone-800 flex flex-col grid-r gap-y-8"
      }
    >
      <Link href="/" className="col-span-2 w-fit self-start">
        <Wordmark className="w-auto h-10" />
      </Link>
      <section className="md:col-start-3 max-md:col-span-2 lg:col-start-5 2xl:col-start-7">
        <h2 className="text-body-3 font-bold text-stone-500 mb-2">Product</h2>
        <div className="flex flex-col gap-6">
          <a
            href="/tos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body-2 lg:text-body-3 font-medium lg:font-bold relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full  [@media(pointer:fine)]:hidden" />
            Send feedback
          </a>
        </div>
      </section>
      <section className="md:col-start-3 max-md:col-span-2 lg:col-start-auto">
        <h2 className="text-body-3 font-bold text-stone-500 mb-2">Legal</h2>
        <div className="flex flex-col gap-6">
          <Link
            href="/tos"
            className="text-body-2 lg:text-body-3 font-medium lg:font-bold relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full  [@media(pointer:fine)]:hidden" />
            Terms of service
          </Link>
          <Link
            href="/privacy"
            className="text-body-2 lg:text-body-3 font-medium lg:font-bold relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
          >
            <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full  [@media(pointer:fine)]:hidden" />
            Privacy policy
          </Link>
        </div>
      </section>
      <section className="md:col-start-3 lg:col-start-auto md:col-span-2 flex flex-col gap-8 lg:gap-4 lg:mt-16">
        <CopyButton />
        <menu className="flex gap-6 items-center md:col-start-3 md:col-span-2">
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
      </section>
    </footer>
  );
}
