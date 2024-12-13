import { Dispatch, JSX, SetStateAction } from "react";

export interface BurgerButtonProps {
  text: string;
  text2: string;
}

export interface TextColourProps {
  text: string;
  color: string;
}

export interface FooterSectionListProps {
  title: string;
  itemTitles: string[];
  itemUrls: string[];
  extraStyling: string;
}

export interface SocialMediaItemProps {
  linkURL: string;
  iconSvg: JSX.Element;
}

export interface ExpressiveArrowProps {
  size: string;
}

export interface BurgerMenuProps {
  isOpen: boolean;
  navItemNames: string[];
  navItemLinks: string[];
}

export interface BurgerOpenButtonProps {
  isOpen: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}
