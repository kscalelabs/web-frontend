import { Dispatch, SetStateAction } from "react";

export interface TextProps {
  text: string;
}

export interface Text2Props {
  text: string;
  text2: string;
}

export interface TextColourProps {
  text: string;
  color: string;
}

export interface LinkProps {
  linkURL: string;
}

export interface SizeColourProps {
  styling: string;
}

export interface BurgerOpenButtonProps {
  isOpen: boolean;
  onClick: Dispatch<SetStateAction<boolean>>;
}
