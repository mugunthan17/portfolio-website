import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/portfolioWebsite/",
  build: {
    outDir: "dist",
    assetsDir: "assets"
  }
});