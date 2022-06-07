module.exports = {
  content: ["./src/**/*.{js, jsx, ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FF3D57",
        lightPink: "#FBDBE0",
        blacky: "#0F1419",
        subBlack: "#536471",
        whitey: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#CCCCCC",
          400: "#999999",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
