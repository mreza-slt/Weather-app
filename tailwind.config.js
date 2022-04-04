module.exports = {

  content: ["./src/**/*.{html,js}"],  theme: {
    extend: {},
  },

  theme: {
    colors: {
      'white': '#ffffff',
      'black': {
        800: '#232931',
        900: '#000',
      },
      'gray':'#343d4b'
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],}
