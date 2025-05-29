module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      backdropBlur: {
        'md': '12px',
      },
      colors: {
        primary: '#1e3a8a',    // Основной синий
        'primary-dark': '#153060',
        accent: '#dc2626',     // Акцентный красный
        // Заменяем текущий metal на полную палитру
        metal: {
          100: '#f0f2f4',
          200: '#d4d8dd',
          300: '#b8bec6',
          400: '#9ca4af',
          500: '#808a98',
          600: '#647081',
          700: '#48566a',
          800: '#2c3c53',
          900: '#10223c',
        }
      },
      boxShadow: {
        'industrial': '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}