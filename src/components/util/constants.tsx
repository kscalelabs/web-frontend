export const transitionEaseLinearDuration300: string = " transition ease-linear duration-300 ";

export const navItems: string[] = ["Docs", "Dashboard", "Buy K-Bot"];
export const navItemLinks: { link: string; target: string }[] = [
  { link: "https://docs.kscale.dev/", target: "_blank" },
  { link: "https://dashboard.kscale.dev", target: "_self" },
  { link: "https://discord.com/invite/kscale", target: "_blank" },
];

export const navItemsMobile: string[] = ["Docs", "Dashboard", "Discord"];
export const navItemLinksMobile: { link: string; target: string }[] = [
  { link: "https://docs.kscale.dev/", target: "_blank" },
  { link: "https://dashboard.kscale.dev", target: "_self" },
  { link: "https://discord.com/invite/kscale", target: "_blank" },
];

export enum IconMode {
  FULL,
  SET,
}

export enum Size {
  THIN,
  NORMAL,
}

export enum ColorVariant {
  FILAMENT,
  CARBON,
  METHYL,
  PLASMA,
  OXIDE,
  RUST,
  MOLTEN,
  SOL,
}

export enum FillMode {
  DEFAULT,
  FILL,
  INVERT,
  STROKE,
}

export const CursorTypes = {
  DEFAULT: "default",
  POINTER: "pointer",
  PROGRESS: "progress",
  WAIT: "wait",
  TEXT: "text",
  ALIAS: "alias",
  NOT_ALLOWED: "not-allowed",
  E_RESIZE: "e-resize",
  NE_RESIZE: "ne-resize",
  NW_RESIZE: "nw-resize",
  S_RESIZE: "s-resize",
  SE_RESIZE: "se-resize",
  SW_RESIZE: "sw-resize",
  W_RESIZE: "w-resize",
  N_RESIZE: "n-resize",
  GRAB: "grab",
  GRABBING: "grabbing",
};

export const TeamCol1 = () => [
  "Aaron",
  "Ali",
  "Benjamin",
  "Denys",
  "Jingxiang",
];

export const TeamCol2 = () => ["Paweł", "Rui", "Viraj", "Wesley"];
