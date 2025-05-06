import { ComponentProps, ElementType } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

export type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  icon?: ElementType; // Optional SVGR icon
  iconPosition?: "start" | "end";
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonStyles = cva(
  "transition-all duration-300 text-body-2 px-3 py-3 rounded-lg flex justify-center items-center gap-2",
  {
    variants: {
      intent: {
        primary:
          "text-foreground bg-orange-700 hover:bg-orange-800 focus:bg-orange-800 active:bg-orange-900",
        secondary: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
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
      fullWidth: false,
      adaptive: false,
    },
  }
);

export const Button = ({
  href,
  external,
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
