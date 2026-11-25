import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#131313",
          card: "#181818",
          surface: "#212121",
          border: "rgba(255, 255, 255, 0.1)",
          text: "#fafafa",
          muted: "#8c8c8a",
          dark: "#0a0a0a",
          pure: "#000000",
          accent: "#b6f419",
          "accent-hover": "#cbff46",
          "accent-subtle": "rgba(182, 244, 25, 0.12)",
          light: "#ffffff",
          "light-card": "#fafafa",
          "light-muted": "#666663",
          "light-border": "rgba(0, 0, 0, 0.08)",
        },
      },
      borderRadius: {
        card: "24px",
        pill: "999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "marquee-infinite": "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "trail-fade": "trail-fade 0.95s cubic-bezier(0.19,1,0.22,1) forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "trail-fade": {
          "0%": { opacity: "0", transform: "translate(-50%,-50%) scale(0.82)" },
          "15%": { opacity: "0.95", transform: "translate(-50%,-50%) scale(1.02)" },
          "60%": { opacity: "0.9", transform: "translate(-50%,-50%) scale(1)" },
          "100%": { opacity: "0", transform: "translate(-50%,-58%) scale(0.96)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
