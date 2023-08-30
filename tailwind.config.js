
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,html}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'yellow': '#FAD24B',
      'orange': '#EE9F2F',
      'blue': '#7EBEA9',
      'light-grey': '#E1E5E1',
      'dark-brown': '#36321B',
      'white': '#FFFFFF',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
};
