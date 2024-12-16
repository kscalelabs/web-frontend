import Marquee from "react-fast-marquee";
import Pioneer from "../../public/sponsors/Pioneer";
import React from "react";
import GFT from "../../public/sponsors/GFT";
import YCommunity from "../../public/sponsors/YCommunity";
import AIGrant from "../../public/sponsors/AIGrant";
import NinjaCapital from "../../public/sponsors/NinjaCapital";
import Lombard from "../../public/sponsors/Lombard";
import FellowsFund from "../../public/sponsors/FellowsFund";
import Link from "next/link";

const svgSizeStyling = "w-60 h-auto";
const SvgChildren = [
  {
    component: <FellowsFund styling={svgSizeStyling} />,
    linkURL: "https://www.fellowsfundvc.com/",
    key: "fellows",
    name: "Fellows Fund",
  },
  {
    component: <GFT styling={svgSizeStyling} />,
    linkURL: "https://www.gft.vc/",
    key: "gft",
    name: "GFT Ventures",
  },
  {
    component: <Lombard styling={svgSizeStyling} />,
    linkURL: "https://lombardstreet.vc/",
    key: "lombard",
    name: "Lombardstreet Ventures",
  },
  {
    component: <NinjaCapital styling={svgSizeStyling} />,
    linkURL: "https://www.ninjacapital.com/",
    key: "ninja",
    name: "Ninja Capital",
  },
  {
    component: <YCommunity styling={svgSizeStyling} />,
    linkURL: "https://www.ycombinator.com/companies/k-scale-labs",
    key: "yCombinator",
    name: "Y Combinator",
  },
  {
    component: <AIGrant styling={svgSizeStyling} />,
    linkURL: "https://aigrant.com/",
    key: "aiGrant",
    name: "AI Grant",
  },
  {
    component: <Pioneer styling={svgSizeStyling} />,
    linkURL: "https://www.pioneerfund.vc/",
    key: "pioneer",
    name: "Pioneer",
  },
];

const Sponsors = () => {
  return (
    <section
      className={
        "w-screen col-span-full flex flex-col gap-3 items-center " +
        " w1440:pt-16 w1024:pt-12 w640:pt-10 sponsors "
      }
    >
      <h2
        className={"font-normal font-planar text-foreground text-heading-sm "}
      >{`Backed by the industry's best`}</h2>
      <Marquee className={""}>
        {SvgChildren.map((sponsor, index) => {
          return (
            <Link
              href={sponsor.linkURL}
              target={"_blank"}
              key={index}
              aria-label={`Investor:${sponsor.name}`}
            >
              {sponsor.component}
            </Link>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Sponsors;
