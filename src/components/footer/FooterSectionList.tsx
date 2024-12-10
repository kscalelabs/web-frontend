import {FooterSectionListProps} from "@/components/util/interfaces";
import Link from "next/link";

const FooterSectionList = (props: FooterSectionListProps) => {
    return (
        <section className={"flex flex-col items-start gap-2"}>
            <text>{props.title}</text>
            <div className={"flex flex-col items-start gap-1"}>
                {props.itemTitles.map((itemTitle: string, index: number) => {
                    return (
                        <li key={index} className={"list-none"}>
                            <Link href={props.itemUrls[index]} target={"_blank"}>
                                {itemTitle}
                            </Link>
                        </li>
                    )
                })}
            </div>
        </section>
    )
};

export default FooterSectionList;