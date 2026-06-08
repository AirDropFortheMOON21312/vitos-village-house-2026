import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: "#f6f7f0",
          100: "#e8ead8",
          200: "#d3d7b3",
          300: "#b8be87",
          400: "#9da561",
          500: "#838b47",
          600: "#666e37",
          700: "#4f562c",
          800: "#3f4426",
          900: "#353921",
        },
        terra: {
          50: "#fdf4ef",
          100: "#fbe5d3",
          200: "#f6c8a6",
          300: "#f0a470",
          400: "#e87840",
          500: "#c4693a",
          600: "#a85030",
          700: "#8c3e29",
        },
        azure: {
          50: "#eff8ff",
          100: "#dbeffe",
          200: "#bfe3fe",
          300: "#93d2fd",
          400: "#60b8fb",
          500: "#3b98f6",
          600: "#1b6b9a",
          900: "#0d2137",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
