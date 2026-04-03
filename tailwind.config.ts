import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "var(--color-navy)",
          light: "var(--color-navy-light)",
        },
        rose: {
          deep: "var(--color-rose-deep)",
          DEFAULT: "var(--color-rose-deep)",
          light: "var(--color-rose-light)",
          pale: "var(--color-rose-pale)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          light: "var(--color-gold-light)",
        },
        cream: {
          DEFAULT: "var(--color-cream)",
        },
        sage: {
          DEFAULT: "var(--color-sage)",
          light: "var(--color-sage-light)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      spacing: {
        "0.5": "0.125rem",
        "1": "0.25rem",
        "1.5": "0.375rem",
        "2": "0.5rem",
        "2.5": "0.625rem",
        "3": "0.75rem",
        "4": "1rem",
      }
    },
  },
  plugins: [],
};
export default config;

