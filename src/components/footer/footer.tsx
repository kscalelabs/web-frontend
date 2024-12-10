import {JSX} from "react";
import FooterItem from "@/components/footer/FooterItem";
import FooterLogotype from "@/components/logos/footerLogotype";
import {Discord, LinkedIn, Twitter, Facebook, Github} from "@/components/footer/socialMediaSvgs";

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
const Footer = () => {
    return (
        <footer className={"px-[5%] z-50 bg-accent-blood-orange text-off-white w-full h-full]"}>
            <section className={"flex flex-col items-start gap-5 "}>
                <FooterLogotype/>
                <div className={"flex flex-row gap-4"}>
                    {
                        socialMediaLinks.map((link: string, index: number) => {
                            return (
                                <li className={"list-none"} key={index}>
                                    {<FooterItem linkURL={link} iconSvg={socialMediaSvgs[index]}/>}
                                </li>
                            )
                        })
                    }

                </div>
            </section>
        </footer>
    );
}

export default Footer;