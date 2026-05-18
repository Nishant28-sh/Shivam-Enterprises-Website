/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: "#059669",
          teal: "#0d9488",
          slateDark: "#0f172a",
          slateSoft: "#f8fafc",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -45px rgba(15, 23, 42, 0.6)",
      },
      borderRadius: {
        hero: "2rem",
      },
    },
  },
  plugins: [],
};
