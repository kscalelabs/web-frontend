import { useEffect, useState } from "react";
import { CursorTypes } from "@/components/util/constants";

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

export function setCustomCursorForStates(currentCursor: string | undefined) {
  let customCursorUrl: string | null;

  // Use a switch statement to set the cursor based on its state
  switch (currentCursor) {
    case CursorTypes.DEFAULT:
      customCursorUrl = "./styles/cursor/default.svg";
      break;
    case CursorTypes.POINTER:
      customCursorUrl = "./styles/cursor/pointer.svg";
      break;
    case CursorTypes.PROGRESS:
      customCursorUrl = "./styles/cursor/progress.svg";
      break;
    case CursorTypes.WAIT:
      customCursorUrl = "./styles/cursor/wait.svg";
      break;
    case CursorTypes.TEXT:
      customCursorUrl = "./styles/cursor/text.svg";
      break;
    case CursorTypes.ALIAS:
      customCursorUrl = "./styles/cursor/alias.svg";
      break;
    case CursorTypes.NOT_ALLOWED:
      customCursorUrl = "./styles/cursor/not-allowed.svg";
      break;
    case CursorTypes.E_RESIZE:
      customCursorUrl = "./styles/cursor/e-resize.svg";
      break;
    case CursorTypes.NE_RESIZE:
      customCursorUrl = "./styles/cursor/ne-resize.svg";
      break;
    case CursorTypes.NW_RESIZE:
      customCursorUrl = "./styles/cursor/nw-resize.svg";
      break;
    case CursorTypes.S_RESIZE:
      customCursorUrl = "./styles/cursor/s-resize.svg";
      break;
    case CursorTypes.SE_RESIZE:
      customCursorUrl = "./styles/cursor/se-resize.svg";
      break;
    case CursorTypes.SW_RESIZE:
      customCursorUrl = "./styles/cursor/sw-resize.svg";
      break;
    case CursorTypes.W_RESIZE:
      customCursorUrl = "./styles/cursor/w-resize.svg";
      break;
    case CursorTypes.N_RESIZE:
      customCursorUrl = "./styles/cursor/n-resize.svg";
      break;
    case CursorTypes.GRAB:
      customCursorUrl = "./styles/cursor/grab.svg";
      break;
    case CursorTypes.GRABBING:
      customCursorUrl = "./styles/cursor/grabbing.svg";
      break;
    default:
      customCursorUrl = null; // Default to no custom cursor if not in list
  }

  // Set the custom cursor if a URL was assigned
  if (customCursorUrl) {
    return customCursorUrl;
  }
}
