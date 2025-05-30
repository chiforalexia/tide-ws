import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/postcss7-compat";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        tailwindcss, // TailwindCSS
        autoprefixer, // Auto-prefixes CSS for browser compatibility
      ],
    },
  },
  server: {
    historyApiFallback: true, // Ensures Vue Router history mode works properly
  },
});
