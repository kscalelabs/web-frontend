import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "media",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "off-white": "var(--off-white)",
                "off-black": "var(--off-black)",
                "accent-aubergine": "var(--accent-aubergine)",
                "accent-dragonfruit": "var(--accent-dragonfruit)",
                "accent-apple": "var(--accent-apple)",
                "accent-blood-orange": "var(--accent-blood-orange)",
                "accent-tangerine": "var(--accent-tangerine)",
                "accent-butter": "var(--accent-butter)",
            },
            fontFamily: {
                apparat: ['KMR Apparat', 'sans-serif'],
                planar: ['GT Planar', 'sans-serif'],
                mono: ['Cofo Sans Mono', 'monospace'],
            },

        },
    },
    plugins: [],
} satisfies Config;
