import clsx from "clsx";
import { useEffect, useState } from "react";

export const CopyButton = ({ className }: { className?: string }) => {
  const handleCopyEmail = async () => {
    const email = "inquiries@kscale.dev";

    // Check if the clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        // Fallback to legacy approach
        legacyCopy(email);
      }
    } else {
      // Use legacy approach for browsers that don't support clipboard API
      legacyCopy(email);
    }
    setIsCopied(true);
  };

  // Legacy approach using temporary input element
  const legacyCopy = (text: string) => {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand("copy");
    } catch {}
    document.body.removeChild(tempInput);
  };

  const [isCopied, setIsCopied] = useState(false);

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
        {isCopied ? "Copied to clipboard" : "Copy email"}
      </button>
    </div>
  );
};
