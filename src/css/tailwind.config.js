const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{html,s,jsx,ts,tsx}"],
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        hind: ['Hind', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bangers: ['Bangers', 'cursive'],
      },
      colors: {
        rose: colors.rose,
        fuchsia: colors.fuchsia,
        cyan: colors.cyan,
        emerald: colors.emerald,
        purple: colors.purple,
        violet: colors.violet,
        red: colors.red,
        orange: colors.orange,
        pink: colors.pink,
        teal: colors.teal,
        'cool-gray': colors.gray,
        'blue-gray': colors.slate,
      },
      screens: {
        xs: '520px',
      },
      spacing: {
        '2/3': '66.666667%',
        '5/6': '83.333333%',
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ],
};
