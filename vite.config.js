import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/perfume-bs-Layout/",
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    open: "/",
  },
});
