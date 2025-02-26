const commonConfig = require("./webpack.config.common.js");
const config = commonConfig;

module.exports = (env, argv) => {
  config.mode = argv.mode;

  if (argv.mode === "development") {
    config.devtool = "inline-source-map";
    config.watch = true;
  }

  if (argv.mode === "production") {
    config.output.publicPath = "/static/js/";
    config.devtool = "source-map";
  }

  return config;
};
