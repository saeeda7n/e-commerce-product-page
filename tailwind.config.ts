import type { Config } from "tailwindcss";

const config: Config = {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  container: {
   center: true,
   padding: "1rem",
   screens: {
    "2xl": "1400px",
   },
  },
  extend: {
   fontFamily: {
    lexend: ["var(--lexend)", "inter"],
   },
   colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
   },
  },
 },
 plugins: [],
};
export default config;
