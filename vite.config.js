import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  // 别名设置
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // 插件设置
  plugins: [],
  // 构建设置
  build: {
    outDir: "dist",
    minify: "terser",
    sourcemap: false,
  },
  // 开发服务器设置
  server: {
    port: 3000,
    open: true,
    proxy: {},
  },
});
