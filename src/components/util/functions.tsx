import { useEffect, useState } from "react";

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export const copyString = async (string: string) => {
  // Check if the clipboard API is available
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(string);
    } catch {
      // Fallback to legacy approach
      legacyCopy(string);
    }
  } else {
    // Use legacy approach for browsers that don't support clipboard API
    legacyCopy(string);
  }
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
