/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#16A34A",
          dark: "#14532D",
          light: "#DCFCE7",
          muted: "#BBF7D0",
        },
        accent: {
          sky: "#0EA5E9",
          amber: "#F59E0B",
        },
        surface: {
          DEFAULT: "#EFF1E6",
          card: "#F5F6EE",
        },
        border: {
          DEFAULT: "#DDE3D4",
        },
        text: {
          primary: "#1E293B",
          secondary: "#64748B",
        },
      },
      fontFamily: {
        heading: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(15, 23, 42, 0.08)",
        card: "0 8px 32px -8px rgba(15, 23, 42, 0.1)",
        elevated: "0 16px 48px -12px rgba(15, 23, 42, 0.14)",
        glow: "0 0 40px -8px rgba(22, 163, 74, 0.25)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.25rem",
        "4xl": "1.5rem",
      },
      backdropBlur: {
        nav: "16px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
