module.exports = {
  purge: {
    content: [
      './src/*.js',
      './src/*.jsx'
    ],
    options: {
      whitelist: ['bg-color-500']
    }
  },
  theme: {
    extend: {
    	spacing: {
    		'120': '30rem', 
    		'108': '27rem'
    	}
    },
  },
  variants: {},
  plugins: [],
}
