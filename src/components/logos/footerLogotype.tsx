import React from "react";
import Link from "next/link";
import { transitionEaseLinearDuration300 } from "@/components/util/constants";

const FooterLogotype = () => {
  return (
    <button className={"w-min"}>
      <Link
        className={
          "font-apparat font-bold w1024:text-5xl w640:text-4xl text-5xl select-none z-50 whitespace-nowrap " +
          +" text-off-white " +
          transitionEaseLinearDuration300
        }
        href={"/"}
      >
        k-scale labs
      </Link>
    </button>
  );
};

export default FooterLogotype;
