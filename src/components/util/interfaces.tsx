import { Dispatch, JSX, SetStateAction } from "react";

export interface SocialMediaItemProps {
  linkURL: string;
  iconSvg: JSX.Element;
}

export interface ExpressiveArrowProps {
  size: string;
}

export interface BurgerOpenButtonProps {
  isOpen: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}

export interface SvgProps {
  styling: string;
}
