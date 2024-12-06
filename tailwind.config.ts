import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/styles/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "off-white": "#f1f1f1",
                "off-black": "#010101",
                "col1": "#ff4d00",
                "col2": "#d000ff",
            },
            fontFamily: {
                apparat: ['KMR Apparat', 'sans-serif'],
                planar: ['GT Planar', 'sans-serif'],
                mono: ['Cofo Sans Mono', 'monospace'],
            }
        },
    },
    plugins: [],
} satisfies Config;
