module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lexend_deca: "'Lexend Deca', sans-serif",
        big_shoulders: "'Big Shoulders Display', cursive",
      },

      colors: {
        bright_orange: "#e38826",
        dark_cyan: "#006970",
        very_dark_cyan: "#004241",
        transparent_white: "rgba(255, 255, 255, 0.75)",
        very_light_gray: "#f2f2f2",
      },
      fontSize: {
        "sm+1": "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
