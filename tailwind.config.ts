import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/landing/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      screens: {
        xs: "480px",
        w1440: "1440px",
        w1024: "1024px",
        w640: "640px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontSize: {
        "heading-sm": [
          "1.25rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-md": [
          "1.925rem",
          {
            lineHeight: "2rem",
            letterSpacing: "-0.015em",
          },
        ],
        "heading-lg": [
          "3.1rem",
          {
            lineHeight: "3rem",
            letterSpacing: "-0.02em",
          },
        ],
        body: [
          "0.85rem",
          {
            lineHeight: "1rem",
            letterSpacing: "-0.01em",
          },
        ],
        caption: [
          "0.7rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.02em",
          },
        ],
        code: [
          "0.7rem",
          {
            lineHeight: "0.7rem",
            letterSpacing: "0.02em",
          },
        ],
        "code--caption": [
          "0.65rem",
          {
            lineHeight: "0.7rem",
            letterSpacing: "0.03em",
          },
        ],
      },
      colors: {
        background: "var(--background)",
        filament60: "var(--filament-60)",
        filament70: "var(--filament-70)",
        foreground60: "var(--foreground-60)",
        foreground70: "var(--foreground-70)",
        foreground: "var(--foreground)",
        filament: "var(--filament)",
        carbon: "var(--carbon)",
        methyl: "var(--methyl)",
        plasma: "var(--plasma)",
        oxide: "var(--oxide)",
        rust: "var(--rust)",
        molten: "var(--molten)",
        sol: "var(--sol)",
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
