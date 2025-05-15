import { ElementType } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonOrLinkProps } from "../Button/Button";

interface Props extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
  icon: ElementType;
  external?: boolean;
  type?: "button" | "submit" | "reset";
}

const buttonStyles = cva("relative block group");

const iconStyles = cva(
  "size-9 group-hover:scale-110 group-focus:scale-110 group-active:scale-90 transition-transform duration-300"
);

export const IconButton = ({ href, icon: Icon, ...props }: Props) => {
  const wrapperClasses = buttonStyles({});
  const iconClasses = iconStyles({});
  const touchTarget =
    "absolute size-12 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden";

  return href ? (
    <a
      className={wrapperClasses}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...(props as ButtonOrLinkProps)}
    >
      <span className={touchTarget} />
      <Icon className={iconClasses} />
    </a>
  ) : (
    <button className={wrapperClasses} type={props.type} {...(props as ButtonOrLinkProps)}>
      <span className={touchTarget} />
      <Icon className={iconClasses} />
    </button>
  );
};
