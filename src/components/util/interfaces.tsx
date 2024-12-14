import { Dispatch, JSX, SetStateAction } from "react";

export interface SocialMediaItemProps {
  linkURL: string;
  iconSvg: JSX.Element;
  name: string;
}

export interface ExpressiveArrowProps {
  size: string;
}

export interface BurgerOpenButtonProps {
  className?: string;
  isOpen: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
  atTop: boolean;
}

export interface SvgProps {
  styling: string;
}
