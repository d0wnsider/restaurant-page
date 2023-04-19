const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map", // activating for dev tools like watch and webserver
  plugins: [
    new HtmlWebpackPlugin({
      title: "Farm Smoothies",
    }),
  ],
  output: {
    filename: "[name].bundle.js", // dynamically generate bundle names from entry points
    path: path.resolve(__dirname, "dist"),
    clean: true, // cleaning /dist
  },
  module: {
    rules: [
      {
        // loader for css
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // loader for images
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        // loader for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
