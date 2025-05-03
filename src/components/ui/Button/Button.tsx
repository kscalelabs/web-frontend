import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

export const AButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-2 rounded-lg font-medium"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};

export const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <Link
      className="bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800 transition-colors duration-300 text-body-2 py-[0.75rem] px-3 rounded-lg font-medium"
      href={href}
    >
      {children}
    </Link>
  );
};

const buttonStyles = cva(
  "transition-colors duration-300 text-body-2 px-3 py-3 rounded-lg font-medium flex justify-center items-center",
  {
    variants: {
      intent: {
        primary: "bg-orange-600 hover:bg-orange-700 focus:bg-orange-700 active:bg-orange-800",
        secondary: "bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

export const Button = ({ href, external, intent, ...props }: Props) => {
  return href ? (
    external ? (
      <a
        className={buttonStyles({ intent })}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as ButtonOrLinkProps)}
      >
        {props.children}
      </a>
    ) : (
      <Link className={buttonStyles({ intent })} href={href} {...(props as ButtonOrLinkProps)}>
        {props.children}
      </Link>
    )
  ) : (
    <button
      className={buttonStyles({ intent })}
      type={props.type}
      {...(props as ButtonOrLinkProps)}
    >
      {props.children}
    </button>
  );
};
