const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        // options related to how webpack emits results

        // where compiled files go
        path: path.resolve(__dirname, "static"),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "/static",
        filename: 'main.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          loader: "babel-loader"
        }
      ]
    }
  }