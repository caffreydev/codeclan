// const plugin = require('tailwindcss/plugin');

// /** @type {import('tailwindcss').Config} **/
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxWidth: {
        '1/2': '50%',
        sss: '10rem',
      },
      colors: {
        primary: '#00ADB5',
        grey: {
          100: '#f5f5f5',
          150: '#EEEEEE',
          200: '#bebebe',
          300: '#7a797a',
          400: '#4f4f4f',
          500: '#393939',
          600: '#2f2f2f', // lines/borders
          700: '#252525', // boxes highlights
          800: '#1d1d1d', // boxes
          900: '#0e0f11', // bg
        },
        decline: '#c70000',
        accept: '#028f00',
      },
    },
  },
};
