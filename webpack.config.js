const path = require("path");
const PugPlugin = require("pug-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist/"),
    // publicPath: '/',
  },

  entry: {
    // define Pug files here
    index: "./src/base.pug", // => dist/index.html
    //'pages/about': './src/views/about/index.pug', // => dist/pages/about.html
    // ...
  },
  performance: {
    hints: false,
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },

  devServer: {
    port: 9001,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },

  plugins: [
    new PugPlugin({
      pretty: true, // formatting HTML, useful for development mode
      js: {
        // output filename of extracted JS file from source script
        filename: "index.js",
      },
      css: {
        // output filename of extracted CSS file from source style
        filename: "style.css",
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets/jpg", to: "jpg" },
        { from: "./src/assets//png", to: "png" },
        // { from: 'src/svg', to: 'svg' },
        // { from: 'src/css', to: 'css' },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: PugPlugin.loader, // Pug loader
      },
      {
        test: /\.(css|sass|scss)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.exec.js$/,
        use: ["script-loader"],
      },
    ],
  },
};
