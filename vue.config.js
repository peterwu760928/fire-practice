const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "./",
  outputDir: "public",
  indexPath: "index.html",
  transpileDependencies: true,
});
