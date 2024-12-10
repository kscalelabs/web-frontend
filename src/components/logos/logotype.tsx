import React from "react";
import Link from "next/link";
import { textBlackDarkWhite, transitionEaseLinearDuration300 } from "@/components/util/constants";

const Logotype = () => {
  return (
    <button>
      <Link
        className={
          "font-apparat font-bold text-3xl select-none z-50 whitespace-nowrap " +
          textBlackDarkWhite +
          " hover:text-accent-blood-orange " +
          transitionEaseLinearDuration300
        }
        href={"/"}
      >
        k-scale labs
      </Link>
    </button>
  );
};

export default Logotype;
