import { ComponentProps, ElementType, useEffect, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { copyString } from "@/components/util/functions";
import Copy from "@/assets/icons/icon_copy.svg";
import clsx from "clsx";

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  string: string;
}

const buttonStyles = cva(
  "group inline-flex mx-0.5 px-1.5 bg-stone-900 rounded-md border border-stone-800 text-stone-300 hover:text-stone-100 active:text-orange-500 transition-colors duration-100 active:duration-50 cursor-pointer",
  {
    variants: {
      font: {
        regular: null,
        mono: "font-mono",
      },
      size: {
        regular: "text-body-2",
        large: "text-body-1",
      },
    },
    defaultVariants: {
      font: "mono",
      size: "regular",
    },
  }
);

const iconStyles = cva(
  "ml-1.5 my-auto fill-stone-300 group-hover:fill-stone-100 group-active:fill-orange-500 transition-colors duration-100",
  {
    variants: {
      size: {
        regular: "size-4",
        large: "size-5",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
);

export const CopyCode = ({ string, size, font, ...props }: Props) => {
  return (
    <button
      className={buttonStyles({ font, size })}
      onClick={() => copyString(string)}
      type="button"
    >
      {string}
      <Copy className={iconStyles({ size })} />
    </button>
  );
};
