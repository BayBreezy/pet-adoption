module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        start: "0 -2px 7px rgba(0, 0, 0, 0.08)",
      },
      fontFamily: {
        sans: ["'Quicksand'", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#fdf5f6",
          100: "#fbeced",
          200: "#f5cfd1",
          300: "#efb3b5",
          400: "#e4797e",
          500: "#d84047",
          600: "#c23a40",
          700: "#a23035",
          800: "#82262b",
          900: "#6a1f23",
        },
        secondary: "#7D4FBC",
      },
    },
  },
  plugins: [],
};
