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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        btnPrimary: "var(--btn-primary)",
        btnDisabled: "var(--btn-disabled)",
      },
      backgroundImage: {
        smallbannerImg: "url('/assets/images/home-background.jpg')",
        bannerImg:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),url('/assets/images/home-background.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
