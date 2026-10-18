/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      // Type steps, in rem so they follow the visitor's browser font size.
      // Size only: each use sets its own leading and tracking.
      fontSize: {
        small: '0.9375rem', // 15px
        body: '1.125rem', // 18px
        heading: 'clamp(1.5rem, 2.2vw, 1.875rem)', // 24–30px
        display: 'clamp(2.75rem, 5.4vw, 5.25rem)', // 44–84px
        'display-narrow': 'clamp(2.75rem, 9.5vw, 5.25rem)', // phone menu and project names
        menu: 'clamp(2.75rem, 4.2vw, 4rem)', // footer menu
        hero: 'clamp(3rem, 7.4vw, 7.5rem)', // 48–120px
      },
      // Theme tokens defined in globals.css.
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        'brand-blue': 'var(--brand-blue)',
        'brand-blue-strong': 'var(--brand-blue-strong)',
        'brand-green': 'var(--brand-green)',
        'brand-red': 'var(--brand-red)',
      },
    },
  },
  plugins: [],
};
