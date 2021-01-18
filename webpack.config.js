const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
        exclude: [/node_modules/, /fonts/, /favicons/],
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
        test: /\.(png|xml|ico|svg)$/,
        exclude: [/node_modules/, /fonts/, /images/],
        use: [
          {
            loader: "file-loader",
            options: {
              name: "favicons/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(woff2|woff|eot|svg|ttf)$/,
        exclude: [/node_modules/, /images/, /favicons/],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.pug",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "colors-and-type.html",
      template: "./src/pages/colors-and-type/colors-and-type.pug",
      inject: true,
    }),
    new HtmlWebpackPlugin({
      filename: "form-elements.html",
      template: "./src/pages/form-elements/form-elements.pug",
      inject: true,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build"),
  },
};
