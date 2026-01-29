import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--color-navy)",
          light: "var(--color-navy-light)",
          dark: "var(--color-navy-dark)",
        },
        stone: {
          DEFAULT: "var(--color-stone)",
          light: "var(--color-stone-light)",
          dark: "var(--color-stone-dark)",
          text: "var(--color-stone-text)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          muted: "var(--color-gold-muted)",
        },
      },
      fontFamily: {
        serif: ["var(--font-heading)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "h1": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h2": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3": ["1.5rem", { lineHeight: "1.3" }],
        "h4": ["1.25rem", { lineHeight: "1.35" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        container: "var(--container-max)",
        "container-narrow": "var(--container-narrow)",
      },
      spacing: {
        "section": "var(--spacing-section)",
        "block": "var(--spacing-block)",
        "element": "var(--spacing-element)",
      },
      transitionDuration: {
        DEFAULT: "150ms",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-out",
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgb(181 168 143 / 0.15)",
        card: "0 1px 2px 0 rgb(15 28 46 / 0.04), 0 4px 12px -2px rgb(15 28 46 / 0.08), 0 8px 24px -4px rgb(15 28 46 / 0.06)",
        "card-hover": "0 2px 4px -1px rgb(15 28 46 / 0.06), 0 8px 20px -4px rgb(15 28 46 / 0.1), 0 16px 40px -8px rgb(15 28 46 / 0.08)",
        "card-dark": "0 2px 8px 0 rgb(0 0 0 / 0.2), 0 8px 24px -4px rgb(0 0 0 / 0.24)",
        "card-dark-hover": "0 4px 12px 0 rgb(0 0 0 / 0.22), 0 12px 32px -4px rgb(0 0 0 / 0.28)",
      },
      borderRadius: {
        "card": "1rem",
        "card-lg": "1.25rem",
      },
    },
  },
  plugins: [],
};
export default config;
