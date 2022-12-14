/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
       'soft-red': ' #C91202',
       'Yellow' : '#7C6A00',
       'Dark-desaturated-cyan' : '#29443E',
       'Dark-blue' : '#193542',
       'Dark-moderate-cyan': '#456861',
       'blue-header':'#3EBFFF',
       'very-dark-blue-gray':'#232F3D',
       'gray-blue':'#5A626C',
       'gray-blue-light':'#808397',
       'gray-blue-very-light':'#A7AAAE',
      'footer':'#91d3c6'
      },

      fontFamily:{
        'fraunces':'Fraunces, serif',
        'barlow':'Barlow, sans-serif',


      },

      backgroundImage: {
        'header': "url('/images/desktop/image-header.jpg')",
        'cherry': "url('/images/desktop/image-graphic-design.jpg')",
        'photography': "url('/images/desktop/image-photography.jpg')",
      }
    },
  },

  plugins: [],
}
