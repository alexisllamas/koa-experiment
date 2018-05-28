const  path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: {
    app: ['./webapp/index.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./webapp/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      "/api": "http://localhost:4000/"
    }
  },
};
