import { useEffect, useState } from "react";

export const CopyButton = () => {
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
      }, 2500);
    }
  }, [isCopied]);
  return (
    <div className="text-body-2">
      <span
        className="block text-stone-500 transition-colors duration-300 cursor-pointer peer"
        role="button"
        onClick={() => handleCopyEmail()}
      >
        inquiries@kscale.dev
      </span>
      <button
        className="font-medium relative flex items-center hover:text-stone-400 focus:text-stone-400 peer-hover:text-stone-400 transition-colors duration-300"
        onClick={() => handleCopyEmail()}
      >
        <span className="absolute h-12 w-full [@media(pointer:fine)]:hidden" />
        Copy email
      </button>
    </div>
  );
};
