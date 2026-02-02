/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm Industrial Theme Color Palette
        // Hejaaz Technologies Orange & Cream Theme
        hejaaz: {
          // Primary - Dark Text & Footer
          primary: '#222222',
          'primary-light': '#3A3A3A',
          'primary-dark': '#0F0F0F',

          // Secondary - Orange Accent
          secondary: '#FA8112',
          'secondary-light': '#FB9B42',
          'secondary-dark': '#E07310',

          // Accent Colors - Safety Indicators
          success: '#2ECC71',      // Safe / Success Green
          warning: '#F1C40F',      // Warning Yellow
          danger: '#E74C3C',       // Danger / Overload Red
          accent: '#FA8112',       // Main Orange Accent

          // Backgrounds
          surface: '#F5E7C6',      // Light Beige Cards
          'surface-light': '#FAF3E1',  // Main Cream Background
          'surface-alt': '#F0DFB5',    // Alternative Beige
          white: '#FFFFFF',

          // Text Colors
          dark: '#222222',
          'dark-secondary': '#3A3A3A',
          gray: '#5A5A5A',
          'gray-light': '#8A8A8A',

          // Border Colors
          border: '#E8D7B0',

          // Legacy mappings (for backward compatibility)
          'industrial-blue': '#222222',  // Now dark gray
          'safety-teal': '#FA8112',      // Now orange
          steel: '#5A5A5A',
        },
      },

      // Extend ring colors to include custom hejaaz colors
      ringColor: {
        hejaaz: {
          primary: '#222222',
          secondary: '#FA8112',
          accent: '#FA8112',
        },
      },
      // Extend border colors
      borderColor: ({ theme }) => ({
        ...theme('colors'),
      }),
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'heading': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      maxWidth: {
        'content': '72rem',
        'narrow': '48rem',
        'wide': '80rem',
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'elevated': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'header': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px 0 rgb(0 0 0 / 0.03)',
        'industrial': '0 4px 20px -2px rgb(34 34 34 / 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in': 'slideIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-12px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backgroundImage: {
        'gradient-industrial': 'linear-gradient(135deg, #222222 0%, #3A3A3A 100%)',
        'gradient-safety': 'linear-gradient(135deg, #FA8112 0%, #E07310 100%)',
        'gradient-surface': 'linear-gradient(180deg, #FAF3E1 0%, #F5E7C6 100%)',
      },
    },
  },
  plugins: [],
}
