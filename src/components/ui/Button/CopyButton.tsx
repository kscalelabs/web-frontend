import { copyString } from "@/components/util/functions";
import clsx from "clsx";
import { useEffect, useState } from "react";
// import { Button } from "./Button";

export const CopyButton = ({ className }: { className?: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = async () => {
    await copyString("inquiries@kscale.dev");
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  }, [isCopied]);
  return (
    <div className={clsx("flex flex-col", className)}>
      <span
        className="text-body-3 font-bold w-fit text-stone-500 transition-colors duration-300 cursor-pointer peer"
        role="button"
        onClick={() => handleCopyEmail()}
      >
        inquiries@kscale.dev
      </span>
      <button
        className="text-body-2 font-medium relative w-fit hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
        onClick={() => handleCopyEmail()}
      >
        <span className="absolute h-12 top-1/2 -translate-y-1/2 w-full [@media(pointer:fine)]:hidden" />
        {isCopied ? <span className="text-green-500">✔</span> : "Copy email"}
      </button>
    </div>
  );
};
