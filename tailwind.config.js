/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'exo-2': ['"Exo 2"', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        mergeAndRotateTop: {
          '50%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(5px) rotate(45deg)' }
        },
        mergeAndRotateTopOut: {
          '50%': { transform: 'rotate(0deg) translateY(6px)'},
          '100%': { transform: 'translateY(0px) rotate(0deg)' }
        },
        mergeAndRotateMid: {
          '50%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(0) rotate(45deg)' }
        },
        mergeAndRotateMidOut: {
          '50%': { transform: 'rotate(0px)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' }
        },
        mergeAndRotateBottom: {
          '50%': { transform: 'translateY(-5px)' },
          '100%': { transform: 'translateY(-6px) rotate(-45deg)'}
        },
        mergeAndRotateBottomOut: {
          '50%': { transform: 'rotate(0) translateY(-5px)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)'}
        }
      },
      animation: {
        mergeAndRotateTop: 'mergeAndRotateTop 0.4s ease-in-out forwards',
        mergeAndRotateTopOut: 'mergeAndRotateTopOut 0.7s ease-in-out forwards',
        mergeAndRotateMid: 'mergeAndRotateMid 0.4s ease-in-out forwards',
        mergeAndRotateMidOut: 'mergeAndRotateMidOut 0.4s ease-in-out forwards',
        mergeAndRotateBottom: 'mergeAndRotateBottom 0.4s ease-in-out forwards',
        mergeAndRotateBottomOut: 'mergeAndRotateBottomOut 0.7s ease-in-out forwards'
      }
    },
  },
  plugins: [],
  corePlugins: {
    transition: true,
  },
};
