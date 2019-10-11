const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: "production",
  watch: false,
  entry: "./docs/index.tsx",
  output: {
    path: path.resolve(__dirname, "public")
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require("html-webpack-template"),
      appMountId: "root",
      title: "picto",
      inlineSource: ".(css)$"
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};
