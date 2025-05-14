import React, { ComponentProps, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { copyString } from "@/components/util/functions";
import Copy from "@/assets/icons/icon_copy.svg";
import { CopyCheck } from "../Icon/CopyCheck";
import { BundledLanguage, codeToHtml } from "shiki";

interface Props
  extends ComponentProps<"button">,
    VariantProps<typeof buttonStyles>,
    VariantProps<typeof iconStyles> {
  string: string;
  code: string;
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

export const CopyCode = ({ string, code }: Props) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    copyString(string);
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className="flex">
      {/* <CodeBlock lang="ts">{['console.log("Hello")', 'console.log("World")'].join("\n")}</CodeBlock> */}
      <button className="size-8" onClick={() => handleClick()} type="button">
        {/* <Copy className={iconStyles({ size })} /> */}
        <CopyCheck open={clicked} />
      </button>
    </div>
  );
};

interface CodeBlockProps {
  children: string;
  lang: BundledLanguage;
}

async function CodeBlock(props: CodeBlockProps) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "github-dark",
  });

  return <div dangerouslySetInnerHTML={{ __html: out }} />;
}
