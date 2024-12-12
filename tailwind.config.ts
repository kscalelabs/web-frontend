import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        w1440: "1440px",
        w1024: "1024px",
        w640: "640px",
      },
      colors: {
        background: {
          DEFAULT: "#ffffff",
          dark: "#120e15",
        },
        foreground: {
          DEFAULT: "#120e15",
          dark: "#ffffff",
        },
        "off-white": "#ffffff",
        "off-black": "#120e15",
        "accent-blood-orange": "#fa4300",
      },
      fontFamily: {
        apparat: ["KMR Apparat", "sans-serif"],
        planar: ["GT Planar", "sans-serif"],
        mono: ["Cofo Sans Mono", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
