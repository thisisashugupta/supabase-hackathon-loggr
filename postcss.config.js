// postcss.config.js

// tailwind.config.js
export default {
  purge: {
    content: [
      "./src/**/*.html", // HTML files
      "./src/**/*.js", // JavaScript files
      "./src/**/*.jsx", // JSX files
      // Add more file paths as needed
    ],
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
