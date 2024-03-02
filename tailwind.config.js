/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
      },
      keyframes: {
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
      spacing: {
        7: "1.5rem",
        headerM: "90px",
        cardW: "265px",
        cardH: "500px",
        80: "80%",
        contW: "1400px",
      },
      colors: {
        // bluesp: "#0ea5e9",
        // bgDarkTheme: "#1e293b",
        // buttonDark: "#2f418a",
        // buttonDarkHov: "#0f121b",
        // inputDark: "#3c4155",
        // darkSecondText: "#c2c8cf",
        // iconDark: "#1e293b",
        inputBg: "#363636",
        bckgr: "#141414",
        grey: "#ababab",
        darkbg: "#334d5c",
        mainShadow: "10px 10px 25px -4px rgba(0,0,0,0.75)",
      },
    },
  },
  variants: {},
  plugins: [],
};
