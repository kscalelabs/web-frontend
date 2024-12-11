import SocialMediaItem from "@/components/footer/SocialMediaItem";
import { Discord, Facebook, Github, LinkedIn, Twitter } from "@/components/footer/socialMediaSvgs";
import FooterLogotype from "@/components/logos/footerLogotype";
import Link from "next/link";
import { JSX } from "react";

const socialMediaSvgs: JSX.Element[] = [
  <Discord key={"discord"} />,
  <LinkedIn key={"linkedin"} />,
  <Twitter key={"twitter"} />,
  <Facebook key={"facebook"} />,
  <Github key={"github"} />,
];

const socialMediaLinks: string[] = [
  "https://discord.gg/kscale",
  "https://www.linkedin.com/company/kscale",
  "https://x.com/kscalelabs",
  "https://www.facebook.com/kscalelabs/",
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
        "flex flex-col items-start gap-4 text-off-white font-planar font-normal " + extraStyling
      }
    >
      <p className={"text-2xl md:text-xl sm:text-lg"}>{title}</p>
      <ul className={"flex flex-col items-start gap-3"}>
        {items.map((item, index) => (
          <li key={index} className={"list-none text-lg md:text-md sm:text-sm"}>
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
  const CopyRight = () => {
    return (
      <p
        className={"font-planar font-light text-md md:text-sm sm:text-xs text-off-white opacity-75"}
      >
        Copyright © 2024 K-Scale Labs
      </p>
    );
  };

  return (
    <footer className={"z-50 bg-accent-blood-orange text-off-white p-6"}>
      <div
        className={"container mx-auto flex flex-col md:flex-row justify-between items-start gap-10"}
      >
        <div className={"flex flex-col gap-4"}>
          <FooterLogotype />
          <ul className={"flex flex-row gap-4"}>
            {socialMediaLinks.map((link: string, index: number) => (
              <li className={"list-none"} key={index}>
                <SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />
              </li>
            ))}
          </ul>
        </div>
        <div className={"flex flex-col md:flex-row gap-10"}>
          <FooterSectionList
            title={"Get in touch"}
            items={[
              { title: "ben@kscale.dev", url: "mailto:ben@kscale.dev" },
              { title: "Schedule a call", url: "https://calendly.com/kscale" },
            ]}
            extraStyling={"col-span-3"}
          />
          <FooterSectionList
            title={"Legal"}
            items={[
              { title: "Terms of service", url: "https://dashboard.kscale.dev/tos" },
              { title: "Privacy policy", url: "https://dashboard.kscale.dev/privacy" },
            ]}
            extraStyling={"col-span-2"}
          />
        </div>
      </div>
      <div className={"container mx-auto mt-6"}>
        <CopyRight />
      </div>
    </footer>
  );
}
