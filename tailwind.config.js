/** @type {import('tailwindcss').Config} */
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [keepPreset],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-120': 
            'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)',
            
    }),
    fontFamily:{
      poetsen:["Poetsen One", "sans-serif"],
      pacifico:["Pacifico", "cursive"],
      
    }
  },
  plugins: [],
}
}