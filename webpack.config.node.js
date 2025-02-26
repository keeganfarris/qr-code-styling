const commonConfig = require("./webpack.config.common.js");

const config = commonConfig;

module.exports = (env, argv) => {
  config.mode = argv.mode;

  config.output.libraryExport = "default";

  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  if (argv.mode === "production") {
    config.devtool = "source-map";
    config.output.publicPath = "http://localhost:3050/js";
  }

  return config;
};
