/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#222831",
        "color-white-100": "#f9f9f9",
        "color-primary-100": "#986cf5",
        "color-black-100": "#1e1e1e",
        purple: "#decffc",
        "purple-100": "#f3e8ff",  // Adding the lighter shade of purple
        gray2: "#84848a",
        "color-black-50": "#9a9a9a",
        "color-white-75": "#f2f2f2",
        black1: "#000",
        thistle: "#c5b9e6",
        darkgray: "#9e9e9e",
        gainsboro: "#e0e0e0",
        mediumslateblue: "#624de3",
        linen: "#fef2e5",
        chocolate: "#cd6200",
        darkslategray: "#333",
        ghostwhite: "#f7f6fe",
        mintcream: "#ebf9f1",
        seagreen: "#1f9254",
        lavender: "#f1eafe",
        gray: "rgba(30, 30, 30, 0.5)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        montserrat: "Montserrat",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "6xl": "25px",
        "341xl": "360px",
        "6xs-5": "6.5px",
        "xl-2": "20.2px",
        "2xs-1": "10.1px",
        "3xl": "22px",
        "sm-5": "13.5px",
      },
    },
    fontSize: {
      "13xl": "32px",
      xs: "12px",
      sm: "14px",
      smi: "13px",
      xl: "20px",
      "2xs-1": "10.1px",
      "base-9": "16.9px",
      base: "16px",
      lgi: "19px",
      "7xl": "26px",
      "3xl-1": "22.1px",
      lg: "18px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      lg: {
        max: "1200px",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
