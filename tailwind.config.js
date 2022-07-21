import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './content/**/*.{md,yml,json,json5,csv}'
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '6rem',
      },
    },
    fontSize: {
      'tiny': '.875rem',
      'small': '0.965rem',
      'regular': '1rem',
      'base': '1.275rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '5xl': '3rem',
      'h2': '2.25rem',
      '6xl': '4rem',
      'h1': '4rem',
      '7xl': '5rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'picton-blue': {
        DEFAULT: '#4FA8E7',
        '50': '#F1F8FD',
        '100': '#DFEFFB',
        '200': '#BBDDF6',
        '300': '#97CBF1',
        '400': '#73BAEC',
        '500': '#4FA8E7',
        '600': '#1E8FDF',
        '700': '#1870AE',
        '800': '#11507D',
        '900': '#0A304B'
      },
      zinc: {
        50: "#F2F2F3",
        100: "#E2E2E4",
        200: "#C5C5C9",
        300: "#AAAAB1",
        400: "#8D8D96",
        500: "#71717A",
        600: "#5B5B62",
        700: "#45454A",
        800: "#2C2C30",
        900: "#161618"
      }
    },
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      }
    },
    fontFamily: {
      sans: ['sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      freckle: ['Freckle Face', 'cursive'],
      taviraj: ['Taviraj', 'serif'],
      roboto: ['Roboto', 'sans-serif'],
    }
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
