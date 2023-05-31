/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        principal: '#8FB627',
        secundario: '#777374',
        terceario: '#040404',
        cuaternario: '#FFBC44'
      }
    }
  },
  plugins: []
}
