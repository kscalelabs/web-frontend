import { motion } from "motion/react";

export const Hamburger = ({ open }: { open: boolean }) => {
  return (
    <svg viewBox="0 0 48 48">
      {[16, 24, 32].map((x, index_x) =>
        [16, 24, 32].map((y, index_y) => (
          <motion.circle
            r={2}
            initial={{
              cx: x,
              cy: y,
            }}
            animate={{
              cx: open ? 24 : x,
              cy: open ? 24 : y,
            }}
            className="fill-stone-800"
            key={`nav-hamburger-circle-${index_x}-${index_y}`}
            transition={{
              duration: 0.3,
              ease: "circInOut",
            }}
          />
        ))
      )}
      {[16, 32].map((x, index_x) =>
        [16, 32].map((y, index_y) => (
          <motion.path
            initial={{
              d: `M ${x} ${y} L ${x} ${y}`,
            }}
            animate={{
              d: open ? `M ${x} ${y} L 24 24` : `M ${x} ${y} L ${x} ${y}`,
            }}
            className="stroke-stone-800"
            strokeWidth={2}
            key={`nav-hamburger-path-${index_x}-${index_y}`}
          />
        ))
      )}
    </svg>
  );
};
