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
        w640: "640px",
        w1024: "1024px",
        w1440: "1440px",
        "2xl": "1440px",
        "3xl": "1536px",
        "4xl": "1920px",
        "5xl": "2560px",
      },
      fontSize: {
        "heading-d-xl": [
          "4rem",
          {
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-d-lg": [
          "4rem",
          {
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-d-md": [
          "3.5rem",
          {
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-d-sm": [
          "2.625rem",
          {
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-1-xl": [
          "2.5rem",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-1-lg": [
          "2rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-1-md": [
          "1.8125rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-1-sm": [
          "1.8125rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          },
        ],
        "heading-2-xl": [
          "1.875rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-2-lg": [
          "1.75rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-2-md": [
          "1.5625rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.01em",
          },
        ],
        "heading-2-sm": [
          "1.5625rem",
          {
            lineHeight: "1.15",
            letterSpacing: "-0.01em",
          },
        ],
        "body-1-xl": [
          "1.4375rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
          },
        ],
        "body-1-lg": [
          "1.3125rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
          },
        ],
        "body-1-md": [
          "1.3125rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
          },
        ],
        "body-1-sm": [
          "1.3125rem",
          {
            lineHeight: "1.2",
            letterSpacing: "0",
          },
        ],
        "body-2-xl": [
          "1.1875rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-2-lg": [
          "1.125rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-2-md": [
          "1.125rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-2-sm": [
          "1.0625rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-3-xl": [
          "1.0625rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-3-lg": [
          "1rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-3-md": [
          "1rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
          },
        ],
        "body-3-sm": [
          "0.875rem",
          {
            lineHeight: "1.3",
            letterSpacing: "0",
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
        display: ["var(--font-apparat)"],
        sans: ["var(--font-planar)"],
        mono: ["var(--font-cofo)"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;

export default config;
