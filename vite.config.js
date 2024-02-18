import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "/test/", // 修改成您的專案名稱，如果您的專案是部署到根目錄則設置為 '/Repository/'
  build: {
    outDir: resolve(__dirname, "dist"),
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "src/index.html",
  },
});
