export const transitionEaseLinearDuration300: string = " transition ease-linear duration-300 ";

export type NavigationConfig = {
  name: string;
  link: string;
  isExternal: boolean;
};

export const navigationConfig: NavigationConfig[] = [
  {
    name: "Mission",
    link: "/why",
    isExternal: false,
  },
  {
    name: "Docs",
    link: "https://docs.kscale.dev/",
    isExternal: true,
  },
  {
    name: "Research",
    link: "/research", // Internal link to the research page
    isExternal: false,
  },
  // {
  //   name: "Dashboard",
  //   link: "https://dashboard.kscale.dev",
  //   isExternal: false,
  // },
  // {
  //   name: "Forum",
  //   link: "https://forum.kscale.dev",
  //   isExternal: true,
  // },
  {
    name: "Discord",
    link: "https://discord.gg/pVwubQT9Sg",
    isExternal: true,
  },
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

export const TeamCol1 = () => ["Aaron", "Ben", "Denys", "JX", "Rui"];

export const TeamCol2 = () => ["Ali", "Chris", "Ian", "Paweł", "Wesley"];
