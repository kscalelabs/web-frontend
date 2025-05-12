import Link from "next/link";
import Marquee from "react-fast-marquee";
import AIGrant from "../../public/photos/landing/sponsors/AIGrant";
import FellowsFund from "../../public/photos/landing/sponsors/FellowsFund";
import GFT from "../../public/photos/landing/sponsors/GFT";
import Lombard from "../../public/photos/landing/sponsors/Lombard";
import NinjaCapital from "../../public/photos/landing/sponsors/NinjaCapital";
import Pioneer from "../../public/photos/landing/sponsors/Pioneer";
import YCommunity from "../../public/photos/landing/sponsors/YCommunity";

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

// Add CSS for fill-foreground if it doesn't exist
const sponsorStyles = `
  .fill-foreground {
    fill: var(--foreground);
  }
`;

const Sponsors = () => {
  return (
    <section className="section">
      <div className="container">
        {/* Adding a heading for visibility */}
        <hgroup className="col-span-default col-start-default mb-6">
          <h2 className="text-body-2 font-medium text-stone-400 mb-1">Our supporters</h2>
          <p className="text-heading-1 mb-4">Backed by world-class investors</p>
        </hgroup>
        <style dangerouslySetInnerHTML={{ __html: sponsorStyles }} />
        <div className="w-screen col-span-full flex flex-col gap-3 items-center pt-8 pb-16">
          <Marquee className="min-h-20" speed={40}>
            {SvgChildren.map((sponsor, index) => {
              return (
                <Link
                  href={sponsor.linkURL}
                  target={"_blank"}
                  key={index}
                  aria-label={`Investor:${sponsor.name}`}
                  className="mx-8"
                >
                  {sponsor.component}
                </Link>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
