import { motion } from "motion/react";
import SocialMediaItem from "@/components/footer/SocialMediaItem";
import { Discord, Github, LinkedIn, Twitter } from "@/components/footer/socialMediaSvgs";
import FooterLogotype from "@/components/logos/footerLogotype";
import Link from "next/link";
import { JSX } from "react";

const socialMediaSvgs: JSX.Element[] = [
  <Discord key={"discord"} />,
  <LinkedIn key={"linkedin"} />,
  <Twitter key={"twitter"} />,
  <Github key={"github"} />,
];

const socialMediaLinks: string[] = [
  "https://discord.gg/kscale",
  "https://www.linkedin.com/company/kscale",
  "https://x.com/kscalelabs",
  "https://github.com/kscalelabs",
];

export interface FooterSectionListProps {
  title: string;
  items: { title: string; url: string; isInternal?: boolean }[];
  extraStyling: string;
}

const FooterSectionList = ({ extraStyling, items, title }: FooterSectionListProps) => {
  return (
    <section
      className={
        "flex flex-col items-start gap-4 text-background dark:text-foreground-dark font-planar font-normal " +
        extraStyling
      }
    >
      <h3 className={"text-caption uppercase opacity-[77%]"}>{title}</h3>
      <ul className={"flex flex-col items-start gap-4"}>
        {items.map((item, index) => (
          <li key={index} className={"list-none"}>
            <Link href={item.url} target={"_blank"}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default function Footer() {
  const handleCopyEmail = async () => {
    const email = "ben@kscale.dev";

    // Check if the clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        console.error("Clipboard API failed:", err);
        // Fallback to legacy approach
        legacyCopy(email);
      }
    } else {
      // Use legacy approach for browsers that don't support clipboard API
      legacyCopy(email);
    }
  };

  // Legacy approach using temporary input element
  const legacyCopy = (text: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Legacy clipboard copy failed:", err);
    }
    document.body.removeChild(tempInput);
  };

  return (
    <footer
      className={"z-50 bg-rust text-background dark:text-foreground-dark py-8 grid-m gap-y-8"}
    >
      <ul
        className={
          "col-span-full sm:col-span-2 md:col-span-3 5xl:col-span-2 flex flex-row gap-4 mb-8"
        }
      >
        {socialMediaLinks.map((link: string, index: number) => (
          <li className={"list-none"} key={index}>
            <SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />
          </li>
        ))}
      </ul>

      <section
        className={
          "flex flex-col items-start gap-4 text-background dark:text-foreground-dark font-planar font-normal col-span-full sm:col-span-3 sm:col-start-4 md:col-span-2 md:col-start-4 2xl:col-start-7"
        }
      >
        <h3 className={"text-caption uppercase opacity-[77%]"}>Get in touch</h3>
        <hgroup>
          <h4>Business inquiries</h4>
          <div className="cursor-pointer" onClick={() => handleCopyEmail()}>
            <p className="opacity-[77%]">ben@kscale.dev</p>
            <motion.button
              className="bg-background dark:bg-foreground-dark text-rust dark:text-rust-dark text-code--caption px-1.5 py-[0.15rem] rounded-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [1.1, 0.9, 1.1], transition: { duration: 0.1 } }}
            >
              Copy email
            </motion.button>
          </div>
        </hgroup>
      </section>
      <FooterSectionList
        title={"Product"}
        items={[
          { title: "GPR 0.5", url: "https://dashboard.kscale.dev/tos" },
          { title: "Send feedback", url: "https://dashboard.kscale.dev/privacy" },
        ]}
        extraStyling={"col-span-2 sm:col-span-3 sm:col-start-4 md:col-span-2"}
      />
      <FooterSectionList
        title={"Legal"}
        items={[
          { title: "Terms of service", url: "https://dashboard.kscale.dev/tos" },
          { title: "Privacy policy", url: "https://dashboard.kscale.dev/privacy" },
        ]}
        extraStyling={"col-span-2 sm:col-span-3 sm:col-start-4 md:col-span-2"}
      />

      <FooterLogotype />
    </footer>
  );
}
