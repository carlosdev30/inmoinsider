/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'surface': '#FAF7F2',
        'accent': '#EEDFD1',
        'red': {
          600: '#D7263D',
          700: '#b91c1c',
        }
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '22px',
        '3xl': '32px',
      },
      boxShadow: {
        'card': '0 6px 24px rgba(0,0,0,0.06)',
      }
    },
  },
  plugins: [],
};