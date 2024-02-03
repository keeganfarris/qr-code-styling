const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.config.common.js");

module.exports = merge(
  {
    ...commonConfig,
    module: {
      ...commonConfig.module,
      rules: commonConfig.module.rules.filter((rule) => rule.loader !== "eslint-loader")
    }
  },
  {
    mode: "development",
    devtool: "inline-source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "head",
        scriptLoading: "blocking"
      })
    ],
    output: {
      libraryExport: "default"
    }
  }
);
