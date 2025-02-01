import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    typography,
    forms,
    animate,
    plugin(({ addBase }) => {
      addBase({
        ":root": {
          "--background": "0 0% 100%",
          "--foreground": "222.2 84% 4.9%",
          "--primary": "198.6 88.7% 48.4%",
          "--secondary": "0 0% 20%",
          "--accent": "37.7 92.1% 50.2%",
          "--radius": "0.5rem",
        },
        ".dark": {
          "--background": "222.2 84% 4.9%",
          "--foreground": "210 40% 98%",
          "--primary": "198.6 88.7% 48.4%",
          "--secondary": "0 0% 40%",
          "--accent": "37.7 92.1% 50.2%",
        },
      });
    }),
  ],
} satisfies Config;
