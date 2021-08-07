module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pattern': "url('./images/background.png')",
        
      })
    },
    backgroundColor:theme=>({
      ...theme('colors'),
      'nav':'#FDA445',
      'nav-hover':'#FFC587',
      
    }),
    textColor: theme => theme('colors'),
     textColor: {
       'orange': '#FFA53b',
       
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
