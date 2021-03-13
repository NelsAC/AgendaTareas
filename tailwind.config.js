module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        rgbaWhite: "rgba(255, 255, 255, 0.3)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
