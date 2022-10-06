/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surfaces: {
          background: '#FFFAF1',
          header: '#EBFAF2',
          menu: '#a7d6cd',
          primary: '#E3EFE9',
          button: '#FFFFFF',
          text: {
            menu: '#FFFAF1',
            headline: '#212529',
            paragraph: '#495057'
          }
        },
        brand: {
          green: {
            500: '#00856F'
          }
        }
      },
      fontFamily: {
        DmSans: 'DM Sans'
      }
    },
  },
  plugins: [],
}
