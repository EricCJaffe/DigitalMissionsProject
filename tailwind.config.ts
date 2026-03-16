import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 800: "#1e3a5f", 900: "#0f2744" },
        accent: { 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488" },
        warm: { 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706" }
      }
    }
  },
  plugins: []
} satisfies Config;
