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

const SvgChildren = [
  { component: <GFT styling={"w-60 h-60"} />, linkURL: "", key: "gft" },
  { component: <YCommunity styling={"w-60 h-60"} />, linkURL: "", key: "yCommunity" },
  { component: <Pioneer styling={"w-60 h-60"} />, linkURL: "", key: "pioneer" },
  { component: <AIGrant styling={"w-60 h-60"} />, linkURL: "", key: "aiGrant" },
  { component: <NinjaCapital styling={"w-60 h-60"} />, linkURL: "", key: "ninja" },
  { component: <Lombard styling={"w-60 h-60"} />, linkURL: "", key: "lombard" },
  { component: <FellowsFund styling={"w-60 h-60"} />, linkURL: "", key: "fellows" },
];

const Sponsors = () => {
  return (
    <section className="col-span-full flex flex-col gap-10 items-center w1440:py-24 w1024:py-20 w640:py-16 py-12 ">
      <h4 className={"font-normal font-planar text-foreground "}>Backed by the industry's best</h4>
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
