import { ComponentProps, ElementType, useEffect, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

export type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  icon?: ElementType; // Optional SVGR icon
  iconPosition?: "start" | "end";
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonStyles = cva(
  "font-medium relative overflow-hidden transition-all duration-300 px-3 py-3 rounded-lg flex justify-center items-center gap-2",
  {
    variants: {
      intent: {
        primary:
          "text-foreground bg-orange-700 hover:bg-orange-800 focus:bg-orange-800 active:bg-orange-900",
        secondary:
          "bg-stone-300 hover:bg-stone-400 focus:bg-stone-300 active:bg-stone-500 text-stone-800",
      },
      size: {
        sm: "h-10 text-body-3",
        md: "h-12 text-body-2",
        lg: "h-16 text-body-1",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
      fullHeight: {
        true: "h-full",
        false: null,
      },
      adaptive: {
        true: "w-full sm:w-fit",
        false: null,
      },
      disabled: {
        true: "opacity-25 cursor-not-allowed",
        false: null,
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
      fullHeight: false,
      adaptive: false,
    },
  }
);

export const Button = ({
  href,
  external,
  iconPosition = "end",
  intent,
  size,
  adaptive,
  fullWidth,
  fullHeight,
  disabled = false,
  icon: Icon,
  ...props
}: Props) => {
  const classes = buttonStyles({ intent, fullWidth, fullHeight, adaptive, disabled, size });

  const renderContent = () => (
    <>
      {iconPosition === "start" && Icon && <Icon className="size-6 pointer-events-none" />}
      {props.children}
      {iconPosition === "end" && Icon && <Icon className="size-6 pointer-events-none" />}
    </>
  );

  return href ? (
    external ? (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ButtonOrLinkProps)}
      >
        {renderContent()}
      </a>
    ) : (
      <Link className={classes} href={href} {...(props as ButtonOrLinkProps)}>
        {renderContent()}
      </Link>
    )
  ) : (
    <button className={classes} type={props.type} {...(props as ButtonOrLinkProps)}>
      {renderContent()}
    </button>
  );
};

export const ExpressiveButton = ({
  iconPosition = "end",
  intent,
  adaptive,
  fullWidth,
  disabled = false,
  icon: Icon,
  ...props
}: Props) => {
  const classes = buttonStyles({ intent, fullWidth, adaptive, disabled });

  const renderContent = () => (
    <>
      {iconPosition === "start" && Icon && <Icon className="size-6 pointer-events-none" />}
      {props.children}
      {iconPosition === "end" && Icon && <Icon className="size-6 pointer-events-none" />}
    </>
  );

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setClicked(false);
      }, 1500);
    }
  }, [clicked]);

  return (
    <button
      className={classes}
      type={props.type}
      onClick={() => {
        setClicked(true);
      }}
      {...(props as ButtonOrLinkProps)}
    >
      {renderContent()}
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3, ease: "circOut" }}
            key="confirmation"
            className="absolute inset-0 bg-purple-600 flex justify-center items-center"
          >
            <span className="text-body-2">Confirmed</span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};
