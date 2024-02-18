import { defineConfig } from "vite";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { glob } from "glob";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/perfume-bs-Layout/",
  build: {
    outDir: resolve(__dirname, "dist"),
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync("*.html")
          .map(
            (file) => [file.replace(/\.html$/, "")],
            fileURLToPath(new URL(file, import.meta.url))
          )
      ),
    },
  },
  server: {
    open: "/",
  },
});
