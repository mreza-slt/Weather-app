module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: {
        800: "#232931",
        900: "#000",
      },
      gray: "#343d4b",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
