import { motion } from "motion/react";
import { transitionEaseLinearDuration300 } from "@/components/util/constants";
import { useRouter } from "next/router";
import clsx from "clsx";
import { ColorVariant, FillMode } from "../color/Color";

const SHOP_URL = "https://shop.kscale.dev/collections/all";

const getVariantClass = (variant: ColorVariant, mode: FillMode): string => {
  if (mode === FillMode.FILL) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-methyl text-background dark:text-foreground-dark";
      case ColorVariant.PLASMA:
        return "bg-plasma text-background dark:text-foreground-dark";
      case ColorVariant.OXIDE:
        return "bg-oxide text-background dark:text-foreground-dark";
      case ColorVariant.RUST:
        return "bg-rust dark:bg-rust-dark text-background dark:text-foreground-dark";
      case ColorVariant.MOLTEN:
        return "bg-molten text-background dark:text-foreground-dark";
      case ColorVariant.SOL:
        return "bg-sol text-background dark:text-foreground-dark ";
      default:
        return "bg-foreground  dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  } else if (mode === FillMode.INVERT) {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-background text-methyl dark:bg-foreground-dark dark:text-methyl-dark";
      case ColorVariant.PLASMA:
        return "bg-background text-plasma dark:bg-foreground-dark dark:text-plasma-dark";
      case ColorVariant.OXIDE:
        return "bg-background text-oxide dark:bg-foreground-dark dark:text-oxide-dark";
      case ColorVariant.RUST:
        return "bg-background text-rust dark:bg-foreground-dark dark:text-rust-dark";
      case ColorVariant.MOLTEN:
        return "bg-background text-molten dark:bg-foreground-dark dark:text-molten-dark";
      case ColorVariant.SOL:
        return "bg-background text-sol dark:bg-foreground-dark dark:text-sol-dark";
      default:
        return "bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  } else {
    switch (variant) {
      case ColorVariant.METHYL:
        return "bg-background text-methyl dark:bg-foreground-dark dark:text-methyl-dark";
      case ColorVariant.PLASMA:
        return "bg-background text-plasma dark:bg-foreground-dark dark:text-plasma-dark";
      case ColorVariant.OXIDE:
        return "bg-background text-oxide dark:bg-foreground-dark dark:text-oxide-dark";
      case ColorVariant.RUST:
        return "bg-background text-rust dark:bg-foreground-dark dark:text-rust-dark";
      case ColorVariant.MOLTEN:
        return "bg-background text-molten dark:bg-foreground-dark dark:text-molten-dark";
      case ColorVariant.SOL:
        return "bg-background text-sol dark:bg-foreground-dark dark:text-sol-dark";
      default:
        return "bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark";
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 0.95,
    opacity: 0.8,
  },
};

export enum Size {
  THIN,
  NORMAL,
}

export const CTAButton = ({
  children,
  href = SHOP_URL,
  className,
  variant = ColorVariant.RUST,
  mode = FillMode.FILL,
  size = Size.THIN,
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: ColorVariant;
  mode?: FillMode;
  size?: Size;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body px-2 select-none flex flex-row gap-1 justify-center items-center",
        size === Size.THIN ? "py-1" : "py-2",
        "cursor-pointer",
        "rounded",
        getVariantClass(variant, mode),
        className
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
    </motion.button>
  );
};

export const CTASubtitleButton = ({
  className,
  children,
  subtitle,
  href = SHOP_URL,
  variant = ColorVariant.RUST,
  mode = FillMode.FILL,
}: {
  className?: string;
  children: React.ReactNode;
  subtitle: string;
  href?: string;
  variant?: ColorVariant;
  mode?: FillMode;
}) => {
  const router = useRouter();

  return (
    <motion.button
      className={clsx(
        "font-planar font-normal text-body text-center items-center w-fit px-6 py-4 select-none",
        className,
        "cursor-pointer flex flex-col",
        "rounded",
        getVariantClass(variant, mode)
      )}
      variants={hoverVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover="hover"
      whileTap="tap"
      transition={{
        duration: 0.2,
        ease: "circOut",
      }}
      onClick={() => router.push(href ? href : SHOP_URL)}
    >
      {children}
      <span className="block text-body opacity-60">{subtitle}</span>
    </motion.button>
  );
};

export default CTAButton;
