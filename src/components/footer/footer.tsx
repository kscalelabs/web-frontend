import {JSX} from "react";
import SocialMediaItem from "@/components/footer/SocialMediaItem";
import FooterLogotype from "@/components/logos/footerLogotype";
import {Discord, LinkedIn, Twitter, Facebook, Github} from "@/components/footer/socialMediaSvgs";
import FooterSectionList from "@/components/footer/FooterSectionList";
import {useWindowSize} from "@/components/util/functions";

const socialMediaSvgs: JSX.Element[] = [
    <Discord/>,
    <LinkedIn/>,
    <Twitter/>,
    <Facebook/>,
    <Github/>
]

const socialMediaLinks: string[] = [
    "https://discord.gg/kscale",
    "https://www.linkedin.com/company/kscale",
    "https://x.com/kscalelabs",
    "https://www.facebook.com/kscalelabs/",
    "https://github.com/kscalelabs"
]


export default function Footer() {

    const CopyRight = () => {
        return (
            <p className={'font-planar font-light text-sm text-off-white opacity-50 '}>
                Copyright ©2024 K-Scale Labs
            </p>
        )
    }

    const footerBasedOnBreakpoints = () => {
        const width = useWindowSize().width;
        if (width >= 1440) {
            return(
                <FooterWidth1440/>
            )
        } else if (width >=1024) {
            return(
                <FooterWidth1440/>
            )

        } else if (width >= 640) {
            return(
                <FooterWidth1440/>
            )

        } else if (width < 640) {
            return(
                <FooterWidth1440/>
            )

        }
    }

    const FooterWidth1440 = () => {
        return (
            <>
                <section className={"flex flex-col items-start gap-5 "}>
                    <FooterLogotype/>
                    <div className={"flex flex-row gap-4"}>
                        {socialMediaLinks.map((link: string, index: number) => {
                            return (
                                <li className={"list-none"} key={index}>
                                    {<SocialMediaItem linkURL={link} iconSvg={socialMediaSvgs[index]}/>}
                                </li>
                            );
                        })}

                    </div>
                </section>
                <FooterSectionList title={"Product"}
                                   itemTitles={["GPR 1.0", "Send feedback"]}
                                   itemUrls={["", "https://forms.gle/HB5uj5r5mGQZUBtd8"]}/><FooterSectionList
                title={"Legal"}
                itemTitles={["Terms of service", "Privacy policy", "Pre-order terms"]}
                itemUrls={["https://dashboard.kscale.dev/tos", "https://dashboard.kscale.dev/privacy", ""]}/>
                <CopyRight/>
            </>

        )
    }

    return (
        <footer className={"px-[5%] z-50 bg-accent-blood-orange text-off-white w-full h-full]"}>
            {footerBasedOnBreakpoints()}
        </footer>
    );
}