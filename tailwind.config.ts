import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // SongMap Brand Colors
        primary: {
          DEFAULT: "#2F5982",
          50: "#EBF2FA",
          100: "#D0E4F5",
          200: "#A1C8EB",
          300: "#72ABE0",
          400: "#438FD5",
          500: "#2F5982",
          600: "#264A6C",
          700: "#1C3A55",
          800: "#132B3F",
          900: "#091B29",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F0FE",
          100: "#EDE0FD",
          200: "#D5B9FB",
          300: "#BC92F9",
          400: "#A46BF7",
          500: "#8B5CF6",
          600: "#6D35E4",
          700: "#5525B3",
          800: "#3D1A82",
          900: "#251050",
        },
        accent: {
          DEFAULT: "#06B6D4",
          50: "#ECFEFF",
          100: "#CFFAFE",
          200: "#A5F3FC",
          300: "#67E8F9",
          400: "#22D3EE",
          500: "#06B6D4",
          600: "#0891B2",
          700: "#0E7490",
          800: "#155E75",
          900: "#164E63",
        },
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          2: "rgb(var(--surface-2) / <alpha-value>)",
        },
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        "muted-foreground": "rgb(var(--muted-foreground) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(47,89,130,0.4) 0%, rgba(5,11,20,0) 100%)",
        "accent-glow":
          "radial-gradient(ellipse 40% 30% at 50% 50%, rgba(6,182,212,0.15) 0%, transparent 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "wave": "wave 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
