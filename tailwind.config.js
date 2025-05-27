/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        text: 'var(--text-color)',
        light: 'var(--light-color)',
        dark: 'var(--dark-color)',
        background: 'var(--background-color)',
        border: 'var(--border-color)',
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.text'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: theme('colors.accent'),
              },
            },
            h1: {
              fontFamily: theme('fontFamily.serif'),
            },
            h2: {
              fontFamily: theme('fontFamily.serif'),
            },
            h3: {
              fontFamily: theme('fontFamily.serif'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
