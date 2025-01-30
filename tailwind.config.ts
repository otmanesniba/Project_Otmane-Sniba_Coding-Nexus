import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#0D1117",
        foreground: "#C9D1D9",
        primary: {
          DEFAULT: "#8B5CF6",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#1F2937",
          foreground: "#C9D1D9",
        },
        destructive: {
          DEFAULT: "#D946EF",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#21262D",
          foreground: "#8B949E",
        },
        accent: {
          DEFAULT: "#0EA5E9",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#161B22",
          foreground: "#C9D1D9",
        },
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)',
        'neon-hover': '0 0 10px theme(colors.primary.DEFAULT), 0 0 40px theme(colors.primary.DEFAULT)',
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px theme(colors.primary.DEFAULT), 0 0 20px theme(colors.primary.DEFAULT)'
          },
          '50%': {
            boxShadow: '0 0 10px theme(colors.primary.DEFAULT), 0 0 40px theme(colors.primary.DEFAULT)'
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        'glow': 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;