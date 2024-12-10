import React from "react";
import Link from "next/link";
import {
    textBlackDarkWhite,
    transitionEaseLinearDuration300
} from "@/components/util/constants";

const FooterLogotype = () => {
    return (
        <button>
            <Link className={"font-apparat font-bold text-4xl select-none z-50 whitespace-nowrap " +
                +" text-off-white " + transitionEaseLinearDuration300} href={"/"}>
                k-scale labs
            </Link>
        </button>
    );
}

export default FooterLogotype;