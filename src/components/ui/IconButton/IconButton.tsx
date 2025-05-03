// components/IconButton.tsx
import clsx from "clsx";
import { ComponentPropsWithoutRef, ElementType } from "react";

type IconButtonProps = {
  icon: ElementType;
  href?: string;
  className?: string;
  iconClassName?: string;
  "aria-label": string;
} & ComponentPropsWithoutRef<"button">;

export default function IconButton({
  icon: Icon,
  href,
  className,
  iconClassName,
  ...props
}: IconButtonProps) {
  const baseClasses = clsx(
    "inline-flex items-center justify-center p-2 rounded transition-colors hover:bg-gray-200",
    className
  );

  const iconClasses = clsx("w-6 h-6", iconClassName);

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props["aria-label"]}
      >
        <Icon className={iconClasses} />
      </a>
    );
  }

  return (
    <button type="button" className={baseClasses} {...props}>
      <Icon className={iconClasses} />
    </button>
  );
}
