module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.vue', './src/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f7f7f7',
          100: '#efefef',
          200: '#d7d7d7',
          300: '#bebebe',
          400: '#8e8e8e',
          500: '#5d5d5d',
          600: '#545454',
          700: '#464646',
          800: '#383838',
          900: '#2e2e2e',
        },
      },
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
