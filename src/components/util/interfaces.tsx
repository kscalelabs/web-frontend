import { Dispatch, JSX, SetStateAction } from "react";
import { string } from "postcss-selector-parser";

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

export interface SponsorPngWrapperProps {
  imgLink: string;
  altDescription: string;
  styling: string;
  width: number;
  height: number;
}
