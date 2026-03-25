const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
  publicDir: "../public",
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
};
