tailwind.config = {
  theme: {
    extend: {
      colors: {
        'coc-green': '#4d9559',
        'coc-dark': '#38703d',
        'coc-light': '#5ba568',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'marker': ['Permanent Marker', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  }
}