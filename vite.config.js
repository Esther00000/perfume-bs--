import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

export default defineConfig({
  base: "/perfume-bs-Layout/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        product: resolve(__dirname, "src/product.html"),
        login: resolve(__dirname, "src/login.html"),
        detail: resolve(__dirname, "src/detail.html"),
      },
    },
    outDir: "dist",
  },
  server: {
    open: "src/index.html",
  },
});
