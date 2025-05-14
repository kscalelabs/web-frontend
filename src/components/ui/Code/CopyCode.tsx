import React, { ComponentProps, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { copyString } from "@/components/util/functions";
import Copy from "@/assets/icons/icon_copy.svg";
import { CopyCheck } from "../Icon/CopyCheck";
import { BundledLanguage, codeToHtml } from "shiki";

interface CopyStringProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  string: string;
}

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  html: string;
  raw: string;
}

const buttonStyles = cva(
  "group inline-flex px-1.5 bg-stone-900 rounded-md border border-stone-700 text-stone-300 hover:text-stone-100 active:text-orange-500 transition-colors duration-100 active:duration-50 cursor-pointer",
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
        regular: "size-6",
        large: "size-5",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  }
);

export const CopyString = ({ string, size, font }: CopyStringProps) => {
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

export const CodeBlock = ({ html, raw }: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    copyString(raw);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className="flex w-full">
      <div className="p-4 overflow-auto bg-stone-800 my-4 rounded-lg border border-stone-700 text-body-3 w-full">
        <ShikiCodeBlock html={html} />
      </div>
      <div className="ml-auto p-4">
        <button
          className="flex justify-center items-center size-9 bg-gray-800 hover:bg-gray-700 rounded-lg"
          onClick={() => handleClick()}
          type="button"
        >
          <CopyCheck open={clicked} />
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
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
