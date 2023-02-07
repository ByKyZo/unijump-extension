const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      title: ['Space Grotesk', ...defaultTheme.fontFamily.serif],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        'darkPurple': {
          600: '#4B4471',
        }
      },
      opacity: {
        '8': '.08',
        '15': '.15'
      }
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        { 'animation-delay': (value) => ({ 'animation-delay': value }) },
        { values: theme('transitionDelay') }
      );
    }),
  ],
}
