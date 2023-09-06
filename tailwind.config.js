/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{tsx,mdx}',
    './components/**/*.{tsx,mdx}',
    './app/**/*.{tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FFFFFF',
      bgDark: '#131315',
      borderGray: '#242428',
      purple: '#8273F7',
      textWhite: '#F1F1F3',
      textGrey: '#908F99',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // that is animation class
      animation: {
        fadeOut: 'fadeOut 5s ease-in-out',
        flicker: 'flicker 0.4s infinite',
      },
      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.purple') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        flicker: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }),
    },
  },
  plugins: [],
}
