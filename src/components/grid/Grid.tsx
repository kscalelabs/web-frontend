import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Grid = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.shiftKey && e.key === "G") {
        setActive(!active);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] pointer-events-none size-full "
    >
      <div className="section-container">
        <div className="bg-orange-500 opacity-10 h-full min-h-svh" />
        <div className="bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-sm:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-sm:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-lg:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-lg:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-2xl:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
        <div className="max-2xl:hidden bg-orange-500 opacity-10  h-full min-h-svh" />
      </div>
    </motion.div>
  );
};
