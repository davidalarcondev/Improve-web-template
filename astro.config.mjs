import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://improve-web-template.pages.dev/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [],
});
