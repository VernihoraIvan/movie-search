import tailwindcssAnimate from "tailwindcss-animate";
/** @type {import('tailwindcss').Config} */
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
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      screens: {
        xxs: { max: "460px" },
        xs: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1200px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
      },
      width: {
        fit: "fit-content",
      },
      spacing: {
        7: "1.5rem",
        headerM: "90px",
        cardW: "265px",
        cardH: "500px",
        imgH: "400px",
        filmW: "145px",
        filmH: "210px",
        80: "80%",
        contW: "1400px",
        45: "45%",
      },
      colors: {
        inputBgDark: "#363636",
        bckgrDark: "#141414",
        bckgrLight: "#f4f3ee",
        colorLight: "#463f3a",
        secColorLight: "#8A817C",
        hoverBtnLight: "#BCB8B1",
        btnCol: "#8A817C",
        btnHoverCol: "#BCB8B1",
        btnTextCol: "#f0dfda",
        grey: "#ababab",
        mainShadow: "10px 10px 25px -4px rgba(0,0,0,0.75)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
