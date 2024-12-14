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

const svgSizeStyling = "w-60 h-fit";
const SvgChildren = [
  {
    component: <FellowsFund styling={svgSizeStyling} />,
    linkURL: "https://www.fellowsfundvc.com/",
    key: "fellows",
  },
  { component: <GFT styling={svgSizeStyling} />, linkURL: "https://www.gft.vc/", key: "gft" },
  {
    component: <Lombard styling={svgSizeStyling} />,
    linkURL: "https://lombardstreet.vc/",
    key: "lombard",
  },
  {
    component: <NinjaCapital styling={svgSizeStyling} />,
    linkURL: "https://www.ninjacapital.com/",
    key: "ninja",
  },
  {
    component: <YCommunity styling={svgSizeStyling} />,
    linkURL: "https://www.ycombinator.com/companies/k-scale-labs",
    key: "yCommunity",
  },
  {
    component: <AIGrant styling={svgSizeStyling} />,
    linkURL: "https://aigrant.com/",
    key: "aiGrant",
  },
  {
    component: <Pioneer styling={svgSizeStyling} />,
    linkURL: "https://www.pioneerfund.vc/",
    key: "pioneer",
  },
];

const Sponsors = () => {
  return (
    <section className="col-span-full flex flex-col gap-3 items-center w1440:pt-16 w1024:pt-12 w640:pt-10 pt-8 ">
      <h4
        className={"font-normal font-planar text-foreground "}
      >{`Backed by the industry's best`}</h4>
      <Marquee>
        {SvgChildren.map((sponsor, index) => {
          return (
            <Link href={sponsor.linkURL} target={"_blank"} key={index}>
              {sponsor.component}
            </Link>
          );
        })}
      </Marquee>
    </section>
  );
};

export default Sponsors;
