import React, { ComponentProps, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { copyString } from "@/components/util/functions";
import Copy from "@/assets/icons/icon_copy.svg";
import { CopyCheck } from "../Icon/CopyCheck";
import { BundledLanguage, codeToHtml } from "shiki";
import clsx from "clsx";

interface CopyStringProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  string: string;
}

interface Props
  extends ComponentProps<"div">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  html: string;
  raw: string;
}

const buttonStyles = cva(
  "group inline-flex items-center gap-1 px-1.5 bg-stone-900 rounded-md border border-stone-700 text-stone-300 hover:text-stone-100 active:text-stone-400 transition-colors duration-100 active:duration-50 cursor-pointer",
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
  "my-auto fill-stone-300 group-hover:fill-stone-100 group-active:fill-orange-500 transition-colors duration-100",
  {
    variants: {
      size: {
        regular: "size-5",
        large: "size-6",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
);

export const CopyString = ({ string, size, font }: CopyStringProps) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    copyString(string);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };
  return (
    <button className={buttonStyles({ font, size })} onClick={() => handleClick()} type="button">
      {string}
      <div className={iconStyles({ size })}>
        <CopyCheck open={clicked} />
      </div>
    </button>
  );
};

export const CodeBlock = ({ html, raw, ...props }: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    copyString(raw);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div
      className={clsx(
        "flex w-full rounded-lg bg-stone-800 border border-stone-700 divide-x divide-stone-700 overflow-hidden mb-4",
        props.className
      )}
    >
      <ShikiCodeBlock html={html} />
      {/* </div> */}
      <div className="ml-auto p-2">
        <button
          className="flex justify-center items-center size-9 hover:bg-stone-700 transition-colors duration-200 rounded-lg"
          onClick={() => handleClick()}
          type="button"
        >
          <span className="absolute size-12 top-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden" />
          <div className="size-6">
            <CopyCheck open={clicked} />
          </div>
        </button>
      </div>
    </div>
  );
};

// components/CodeBlock.tsx
interface CodeBlockProps {
  html: string;
}

function ShikiCodeBlock({ html }: CodeBlockProps) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: html }}
      className="overflow-auto px-4 py-2 scrollbar-thin scrollbar-track-stone-700 scrollbar-thumb-stone-500"
    />
  );
}
