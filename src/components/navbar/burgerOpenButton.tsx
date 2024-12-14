import { BurgerOpenButtonProps } from "@/components/util/interfaces";
import clsx from "clsx";
import { motion } from "motion/react";

const closeBurgerPaths: string[] = [
  "M23.025 9.56738C23.025 10.433 22.3233 11.1348 21.4576 11.1348L1.56738 11.1348C0.701742 11.1348 -5.26833e-08 10.433 0 9.56738C5.26833e-08 8.70174 0.701741 8 1.56738 8L21.4576 8C22.3233 8 23.025 8.70174 23.025 9.56738Z",
  "M23.025 15.2842C23.025 16.1498 22.3233 16.8516 21.4576 16.8516L1.56738 16.8516C0.701742 16.8516 -5.26833e-08 16.1498 0 15.2842C5.26833e-08 14.4185 0.701741 13.7168 1.56738 13.7168L21.4576 13.7168C22.3233 13.7168 23.025 14.4185 23.025 15.2842Z",
  "M23.025 21.001C23.025 21.8666 22.3233 22.5684 21.4576 22.5684L1.56738 22.5684C0.701742 22.5684 -5.26833e-08 21.8666 0 21.001C5.26833e-08 20.1353 0.701741 19.4336 1.56738 19.4336L21.4576 19.4336C22.3233 19.4336 23.025 20.1353 23.025 21.001Z",
];
const openBurgerPaths: string[] = [
  "M23.1426 10.8086C22.8102 11.6079 21.8927 11.9863 21.0935 11.6538L2.72855 4.01498C1.92929 3.68253 1.55087 2.7651 1.88332 1.96584C2.21577 1.16658 3.1332 0.788159 3.93246 1.12061L22.2974 8.75947C23.0966 9.09192 23.4751 10.0093 23.1426 10.8086Z",
  "M23.025 15.8029C23.025 16.6686 22.3233 17.3703 21.4576 17.3703H1.56738C0.701742 17.3703 -5.26833e-08 16.6685 0 15.8029C5.26833e-08 14.9373 0.701741 14.2355 1.56738 14.2355L21.4576 14.2355C22.3233 14.2355 23.025 14.9373 23.025 15.8029Z",
  "M23.025 21.5197C23.025 22.3853 22.3233 23.0871 21.4576 23.0871H1.56738C0.701742 23.0871 -5.26833e-08 22.3853 0 21.5197C5.26833e-08 20.6541 0.701741 19.9523 1.56738 19.9523H21.4576C22.3233 19.9523 23.025 20.6541 23.025 21.5197Z",
];

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="3" y="6" width="18" height="2" fill="#D9D9D9" />
  <rect x="3" y="11" width="18" height="2" fill="#D9D9D9" />
  <rect x="3" y="16" width="18" height="2" fill="#D9D9D9" />
</svg>;

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
