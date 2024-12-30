# mini-project-5th-sem

1.
npm create vite@latest
project name : diagnosis-portal
framework: react
varient: typescript

2.
now,
cd diagnosis-portal
npm install

3.
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

4.
Add this import header in your main css file, src/index.css in our case:
@tailwind base;
@tailwind components;
@tailwind utilities;
 
5. Configure the tailwind template paths in tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

6. Edit tsconfig.json file
   "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }

7. Edit tsconfig.app.json file
   {
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}

8. npm install -D @types/node

9. Update vite.config.ts

    import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

10. npx shadcn@latest init

11. newYork, Zinc, yes

12. npx shadcn@latest add button
