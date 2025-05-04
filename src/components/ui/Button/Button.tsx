import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

export type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonStyles = cva(
  "transition-colors duration-300 text-body-2 px-3 py-3 rounded-lg font-medium flex justify-center items-center",
  {
    variants: {
      intent: {
        primary: "bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800",
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
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
      adaptive: false,
    },
  }
);

export const Button = ({ href, external, intent, adaptive, fullWidth, ...props }: Props) => {
  const classes = buttonStyles({ intent, fullWidth, adaptive });
  return href ? (
    external ? (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ButtonOrLinkProps)}
      >
        {props.children}
      </a>
    ) : (
      <Link className={classes} href={href} {...(props as ButtonOrLinkProps)}>
        {props.children}
      </Link>
    )
  ) : (
    <button className={classes} type={props.type} {...(props as ButtonOrLinkProps)}>
      {props.children}
    </button>
  );
};
