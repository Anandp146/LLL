module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hide-scrollbar": {
            "-webkit-overflow-scrolling": "touch",
            "::-webkit-scrollbar": { display: "none" },
            "scrollbar-width": "none",
            "-ms-overflow-style": "none",
          },
        },
        ["responsive"]
      );
    },
  ],
};
