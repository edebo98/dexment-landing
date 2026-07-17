import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        "surface-strong": "var(--surface-strong)",
        "border-subtle": "var(--border-subtle)",
        ink: {
          DEFAULT: "#0A0A0B",
          50: "#F7F7F6",
          100: "#EEEEEC",
          200: "#E1E1DE",
          300: "#C7C7C3",
          400: "#9C9C96",
          500: "#71716A",
          600: "#535350",
          700: "#3A3A38",
          800: "#232322",
          900: "#141414",
          950: "#0A0A0B",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#FAFAF8",
          mist: "#F4F4F1",
        },
        accent: {
          DEFAULT: "#F2B705",
          50: "#FEF9E7",
          100: "#FCEFC2",
          200: "#FADF85",
          300: "#F7CE47",
          400: "#F2B705",
          500: "#D9A500",
          600: "#B38700",
          700: "#8C6900",
          800: "#664B00",
          900: "#402E00",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 2.2rem + 3.5vw, 5.75rem)", { lineHeight: "1.03", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 2rem + 2.2vw, 4.25rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(2rem, 1.7rem + 1.4vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-sm": ["clamp(1.6rem, 1.4rem + 0.9vw, 2.375rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        content: "1240px",
        narrow: "760px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,10,11,0.04), 0 8px 24px -12px rgba(10,10,11,0.10)",
        elevated: "0 2px 4px rgba(10,10,11,0.04), 0 24px 48px -16px rgba(10,10,11,0.18)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
