import { JSX } from "react";
import SocialMediaItem from "@/components/footer/SocialMediaItem";
import FooterLogotype from "@/components/logos/footerLogotype";
import { Discord, LinkedIn, Twitter, Facebook, Github } from "@/components/footer/socialMediaSvgs";
import FooterSectionList from "@/components/footer/FooterSectionList";
import { useWindowSize } from "@/components/util/functions";

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

export default function Footer() {
  const width = useWindowSize().width;
  const CopyRight = () => {
    return (
      <p
        className={
          "font-planar font-light w1440:text-lg w1024:text-md w640:text-sm text-off-white " +
          "w1024:opacity-75 opacity-50 "
        }
      >
        Copyright ©2024 K-Scale Labs
      </p>
    );
  };

  const footerBasedOnBreakpoints = () => {
    if (width >= 1440) {
      return <FooterWidth1440 />;
    } else if (width >= 1024) {
      return <FooterWidth1024 />;
    } else if (width >= 640) {
      return <FooterWidth640 />;
    } else if (width < 640) {
      return <FooterWidthMobile />;
    }
  };

  const FooterWidthMobile = () => {
    return (
      <div className={"flex flex-col cols-span-1 gap-24"}>
        <div className={"flex flex-col cols-span-1 gap-20 w-[100%]"}>
          <section className={"flex flex-col items-start gap-16 col-span-1"}>
            <div className={"flex flex-col items-start gap-5 "}>
              <FooterLogotype />
              <div className={"flex flex-row gap-8"}>
                {socialMediaLinks.map((link: string, index: number) => {
                  return (
                    <li className={"scale-150 list-none"} key={index}>
                      {<SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />}
                    </li>
                  );
                })}
              </div>
            </div>
            <FooterSectionList
              title={"Get in touch"}
              itemTitles={["ben@kscale.dev", "Schedule a call"]}
              itemUrls={["mailto:ben@kscale.dev", ""]}
              extraStyling={" col-span-3"}
            />
          </section>
          <section className={"flex flex-row justify-between gap-12 col-span-1"}>
            <FooterSectionList
              title={"Product"}
              itemTitles={["GPR 1.0", "Send feedback"]}
              itemUrls={[
                "https://shop.kscale.dev/products/gpr-basic",
                "https://forms.gle/HB5uj5r5mGQZUBtd8",
              ]}
              extraStyling={" col-span-2"}
            />
            <FooterSectionList
              title={"Legal"}
              itemTitles={["Terms of service", "Privacy policy", "Pre-order terms"]}
              itemUrls={[
                "https://dashboard.kscale.dev/tos",
                "https://dashboard.kscale.dev/privacy",
                "",
              ]}
              extraStyling={" col-span-2 "}
            />
          </section>
        </div>
        <CopyRight />
      </div>
    );
  };

  const FooterWidth640 = () => {
    return (
      <>
        <section className={"flex flex-col items-start gap-5 col-span-3"}>
          <FooterLogotype />
          <div className={"flex flex-row gap-8"}>
            {socialMediaLinks.map((link: string, index: number) => {
              return (
                <li className={"scale-150 list-none"} key={index}>
                  {<SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />}
                </li>
              );
            })}
          </div>
        </section>
        <section className={"flex flex-col items-start gap-12 col-span-2"}>
          <FooterSectionList
            title={"Get in touch"}
            itemTitles={["ben@kscale.dev", "Schedule a call"]}
            itemUrls={["mailto:ben@kscale.dev", ""]}
            extraStyling={" col-span-3"}
          />
          <FooterSectionList
            title={"Product"}
            itemTitles={["GPR 1.0", "Send feedback"]}
            itemUrls={[
              "https://shop.kscale.dev/products/gpr-basic",
              "https://forms.gle/HB5uj5r5mGQZUBtd8",
            ]}
            extraStyling={" col-span-2"}
          />
          <FooterSectionList
            title={"Legal"}
            itemTitles={["Terms of service", "Privacy policy", "Pre-order terms"]}
            itemUrls={[
              "https://dashboard.kscale.dev/tos",
              "https://dashboard.kscale.dev/privacy",
              "",
            ]}
            extraStyling={" col-span-2 "}
          />
          <CopyRight />
        </section>
      </>
    );
  };

  const FooterWidth1024 = () => {
    return (
      <>
        <section className={"flex flex-col items-start gap-16 col-span-5"}>
          <div className={"flex flex-col items-start gap-5"}>
            <FooterLogotype />
            <div className={"flex flex-row gap-8"}>
              {socialMediaLinks.map((link: string, index: number) => {
                return (
                  <li className={"scale-125 list-none"} key={index}>
                    {<SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />}
                  </li>
                );
              })}
            </div>
          </div>
          <FooterSectionList
            title={"Get in touch"}
            itemTitles={["ben@kscale.dev", "Schedule a call"]}
            itemUrls={["mailto:ben@kscale.dev", ""]}
            extraStyling={" col-span-3"}
          />
          <CopyRight />
        </section>
        <section className={"flex items-center pt-40 row-2 col-span-2 h-min"}>
          <div className={"flex flex-row items-start gap-16 "}>
            <FooterSectionList
              title={"Product"}
              itemTitles={["GPR 1.0", "Send feedback"]}
              itemUrls={[
                "https://shop.kscale.dev/products/gpr-basic",
                "https://forms.gle/HB5uj5r5mGQZUBtd8",
              ]}
              extraStyling={" col-span-2"}
            />
            <FooterSectionList
              title={"Legal"}
              itemTitles={["Terms of service", "Privacy policy", "Pre-order terms"]}
              itemUrls={[
                "https://dashboard.kscale.dev/tos",
                "https://dashboard.kscale.dev/privacy",
                "",
              ]}
              extraStyling={" col-span-2 "}
            />
          </div>
        </section>
      </>
    );
  };

  const FooterWidth1440 = () => {
    return (
      <>
        <section className={"flex flex-col items-start gap-28 col-span-5"}>
          <div className={"flex flex-col gap-4"}>
            <FooterLogotype />
            <div className={"flex flex-row gap-6"}>
              {socialMediaLinks.map((link: string, index: number) => {
                return (
                  <li className={"scale-150 list-none"} key={index}>
                    {<SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]} />}
                  </li>
                );
              })}
            </div>
          </div>
          <CopyRight />
        </section>
        <FooterSectionList
          title={"Get in touch"}
          itemTitles={["ben@kscale.dev", "Schedule a call"]}
          itemUrls={["mailto:ben@kscale.dev", ""]}
          extraStyling={" col-span-3"}
        />
        <FooterSectionList
          title={"Product"}
          itemTitles={["GPR 1.0", "Send feedback"]}
          itemUrls={[
            "https://shop.kscale.dev/products/gpr-basic",
            "https://forms.gle/HB5uj5r5mGQZUBtd8",
          ]}
          extraStyling={" col-span-2"}
        />
        <FooterSectionList
          title={"Legal"}
          itemTitles={["Terms of service", "Privacy policy", "Pre-order terms"]}
          itemUrls={[
            "https://dashboard.kscale.dev/tos",
            "https://dashboard.kscale.dev/privacy",
            "",
          ]}
          extraStyling={" col-span-2 "}
        />
      </>
    );
  };

  return (
    <footer className={"z-50 bg-accent-blood-orange text-off-white whitespace-nowrap "}>
      {footerBasedOnBreakpoints()}
    </footer>
  );
}
