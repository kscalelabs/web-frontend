export const transitionEaseLinearDuration300: string = " transition ease-linear duration-300 ";

export type NavigationConfig = {
  name: string;
  children: {
    name: string;
    link: string;
    isExternal: boolean;
  }[];
};

export const navigationConfig: NavigationConfig[] = [
  {
    name: "Products",
    children: [
      {
        name: "K-Bot",
        link: "/products/k-bot",
        isExternal: false,
      },
      {
        name: "Z-Bot",
        link: "/products/z-bot",
        isExternal: false,
      },
    ],
  },
  {
    name: "Community",
    children: [
      {
        name: "Leaderboard",
        link: "/leaderboard",
        isExternal: false,
      },
      {
        name: "Docs",
        link: "https://docs.kscale.dev/",
        isExternal: true,
      },
      {
        name: "Discord",
        link: "https://discord.gg/pVwubQT9Sg",
        isExternal: true,
      },
    ],
  },
  {
    name: "Company",
    children: [
      {
        name: "About",
        link: "/about",
        isExternal: false,
      },
      {
        name: "Research",
        link: "/research",
        isExternal: false,
      },
    ],
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
