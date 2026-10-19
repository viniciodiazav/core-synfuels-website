import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070e16",
          900: "#0a1926",
          850: "#0f2233",
          800: "#152c42",
          700: "#1c3750",
          600: "#2b4d6e",
        },
        forest: {
          950: "#0c2314",
          900: "#14361e",
          850: "#1b4526",
          800: "#21532f",
          700: "#2a693b",
          600: "#36844b",
          500: "#459c5d",
          200: "#cbe3d3",
          100: "#e5f0e8",
          50: "#f2f7f3",
        },
        surface: {
          canvas: "#f4f7f2",
          light: "#f9faf8",
          subtle: "#edf2eb",
          border: "#d6e2d4",
          card: "#ffffff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
