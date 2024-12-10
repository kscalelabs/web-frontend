import {FooterProps} from "@/components/util/interfaces";
import Link from "next/link";

const FooterItem = (props: FooterProps) => {
    return (
        <Link className={"m-0 p-0"} href={props.linkURL} target={"_blank"}>
            {props.iconSvg}
        </Link>
    );
}

export default FooterItem;

