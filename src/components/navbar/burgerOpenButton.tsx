import { BurgerOpenButtonProps } from "@/components/util/interfaces";
import clsx from "clsx";
import { motion } from "motion/react";

const BurgerOpenButton = ({ atTop = true, ...props }: BurgerOpenButtonProps) => {
  return (
    <button
      className={clsx("cursor-pointer h-fit", props.className)}
      onClick={() => {
        props.onClick(!props.isOpen);
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-6 translate-y-1"
      >
        <motion.rect
          x="3"
          y="6"
          width="18"
          height="2"
          initial={{
            rotate: 0,
            y: 0,
            fill: "var(--filament)",
          }}
          animate={{
            rotate: props.isOpen ? 15 : 0,
            y: props.isOpen ? -2 : 0,
            fill: atTop && !props.isOpen ? "var(--filament)" : "var(--foreground)",
          }}
        />
        <motion.rect
          x="3"
          y="11"
          width="18"
          height="2"
          initial={{
            fill: "var(--filament)",
          }}
          animate={{
            fill: atTop && !props.isOpen ? "var(--filament)" : "var(--foreground)",
          }}
        />
        <motion.rect
          x="3"
          y="16"
          width="18"
          height="2"
          initial={{
            fill: "var(--filament)",
          }}
          animate={{
            fill: atTop && !props.isOpen ? "var(--filament)" : "var(--foreground)",
          }}
        />
      </svg>
    </button>
  );
};

export default BurgerOpenButton;
