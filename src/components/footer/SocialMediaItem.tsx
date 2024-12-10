import { SocialMediaItemProps } from "@/components/util/interfaces";
import Link from "next/link";

const SocialMediaItem = (props: SocialMediaItemProps) => {
  return (
    <Link className={"m-0 p-0"} href={props.linkURL} target={"_blank"}>
      {props.iconSvg}
    </Link>
  );
};

export default SocialMediaItem;
