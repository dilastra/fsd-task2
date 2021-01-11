const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        exclude: [/node_modules/, /fonts/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|svg|ttf)$/,
        exclude: [/node_modules/, /images/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[contenthash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kit/colors-and-type.html",
      template: "./src/pages/ui-kit/colors-and-type.pug",
      inject: true,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
