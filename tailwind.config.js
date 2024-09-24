/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',    // Custom primary color (blue)
        secondary: '#F59E0B',  // Custom secondary color (yellow)
        danger: '#EF4444',     // Custom danger color (red)
        success: '#10B981',    // Custom success color (green)
        semidark: '#323232',       // Custom dark color (grayish-black)
        lightd: '#D9D9D9'
      },
    },
  },
  plugins: [
    require('daisyui'),

  ],
}
