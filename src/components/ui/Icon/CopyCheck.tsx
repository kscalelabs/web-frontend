import { circIn, circOut } from "motion";
import { AnimatePresence, circInOut, motion } from "motion/react";
import { useState } from "react";

export const CopyCheck = ({ open }: { open: boolean }) => {
  const transition = { delay: 0.2, duration: 0.3, ease: circOut };
  const [finished, setFinished] = useState(false);
  return (
    <svg viewBox="0 0 48 48" className="size-full">
      <motion.path
        d="M7 23L18 34L39 13"
        fill="none"
        stroke="white"
        strokeWidth="4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: open ? 1 : 0 }}
        transition={transition}
      />
      <AnimatePresence>
        {open && (
          <motion.circle
            r="4"
            fill="white"
            initial={{ x: 7, y: 23, scale: 1 }}
            animate={{
              x: open ? [7, 18, 39, 39] : 7,
              y: open ? [23, 34, 13, 13] : 23,
              scale: [1, 0],
            }}
            onAnimationComplete={() => setFinished(true)}
            transition={transition}
          />
        )}
      </AnimatePresence>
      <motion.rect
        rx={8}
        stroke="white"
        strokeWidth="4"
        className="fill-stone-800"
        initial={{
          x: 6,
          y: 14,
          width: 28,
          height: 28,
        }}
        animate={{
          x: open ? 32 : 6,
          y: open ? 18 : 14,
          width: open ? 0 : 28,
          height: open ? 0 : 28,
        }}
        transition={{
          ease: circInOut,
        }}
      />
      <motion.rect
        rx={8}
        stroke="white"
        strokeWidth="4"
        className="fill-stone-800"
        initial={{
          x: 14,
          y: 6,
          width: 28,
          height: 28,
        }}
        animate={{
          x: open ? 38 : 14,
          y: open ? 12 : 6,
          width: open ? 0 : 28,
          height: open ? 0 : 28,
        }}
        transition={{
          ease: circInOut,
        }}
      />
    </svg>
  );
};
