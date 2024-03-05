/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Inter':['Inter'],
      },
      colors:{
        'background-color':'#EEF2F5',
        'nav-button-start-color':'rgb(39,110,226)',
        'nav-button-end-color':'rgba(19,80,231)',
        'green-blue-card-start':'rgba(113,235,157)',
        'green-blue-card-end':'rgba(20,97,171,1)',
        'red-card-start':'rgba(249,157,87,1)',
        'red-card-end':'rgba(237,63,60,1)',
      },
      backgroundImage: {
        'logo': "url('https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg')"
      }
    }
    
  },
  plugins: [],
}

