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
      className="fixed inset-0 z-[1000] grid-a auto-rows-auto pointer-events-none"
    >
      <div className="bg-oxide opacity-10" />
      <div className="bg-oxide opacity-10" />
      <div className="bg-oxide opacity-10" />
      <div className="bg-oxide opacity-10" />
      <div className="hidden sm:block bg-oxide opacity-10" />
      <div className="hidden sm:block bg-oxide opacity-10" />
      <div className="hidden md:block bg-oxide opacity-10" />
      <div className="hidden md:block bg-oxide opacity-10" />
      <div className="hidden md:block bg-oxide opacity-10" />
      <div className="hidden 2xl:block bg-oxide opacity-10" />
      <div className="hidden 2xl:block bg-oxide opacity-10" />
      <div className="hidden 2xl:block bg-oxide opacity-10" />
    </motion.div>
  );
};
