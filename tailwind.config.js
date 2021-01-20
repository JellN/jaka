module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.jsx',
      './src/**/*.tsx'
    ]
  },
  darkMode: 'class', // or 'media' or false
  theme: {
    minHeight: {
      tasks: '20rem'
    },
    extend: {
      fontSize: {
        '10xl': '200px'
      },
      gridTemplateColumns: {
        hero: '2fr 1fr 1fr',
        'hero-elements': '1fr auto auto',
        dashboard: 'auto 1fr'
      },
      gridTemplateRows: {
        hero: '1fr auto',
        'hero-elements': '1fr auto auto'
      },
      letterSpacing: {
        tightest: '-.15em'
      }
    },
    fontFamily: {
      cursive: ['Fugaz One', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      display: ['Inter', 'sans-serif']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
