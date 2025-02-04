const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', 
                        '@babel/preset-react'
                      ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg)$/,
          loader: "url-loader?limit=8192"
        }
      ]
    }
  };