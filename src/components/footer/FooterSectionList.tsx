import { FooterSectionListProps } from "@/components/util/interfaces";
import Link from "next/link";

const FooterSectionList = (props: FooterSectionListProps) => {
  return (
    <section
      className={
        "flex flex-col items-start w1024:gap-5 w640:gap-3 gap-8 text-off-white font-planar font-normal " +
        props.extraStyling
      }
    >
      <p className={"w1440:text-3xl w1024:text-3xl w640:text-2xl text-3xl"}>{props.title}</p>
      <div className={"flex flex-col items-start w1024:gap-5 w640:gap-4 gap-7 "}>
        {props.itemTitles.map((itemTitle: string, index: number) => {
          return (
            <li key={index} className={"list-none w1024:text-xl w640:text-lg text-xl"}>
              <Link href={props.itemUrls[index]} target={"_blank"}>
                {itemTitle}
              </Link>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default FooterSectionList;
