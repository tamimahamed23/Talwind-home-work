/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {



        screens: {


           
            'sm': '576px',
            // => @media (min-width: 640px) { ... }
      
            'md': '960px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1124px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          },
      extend: {

       
        screens: {
          'xs': '376px',
          // => @media (min-width: 992px) { ... }
        },
      },
    },
    plugins: [],
  }