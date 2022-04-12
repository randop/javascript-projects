const webpack = require('webpack');
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require("fs");
const indexTemplateData = fs.readFileSync('./ui/src/index.template.html', {encoding:'utf8', flag:'r'});

const config = {
  entry: [
    'react-hot-loader/patch',
    './ui/src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: ({ htmlWebpackPlugin }) => indexTemplateData,
      filename: 'index.html',
    }),    
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      GOOGLE_MAPS_API_KEY: JSON.stringify('test_API-key2')
    })
  ],
  devServer: {
    'static': {
      directory: './public/dist'
    },
    port: 9090,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
};

module.exports = (env, argv) => {
  if (argv.hot) {
    // Cannot use 'contenthash' when hot reloading is enabled.
    config.output.filename = '[name].[chunkhash].js';
  }

  /*** Example of using copy-webpack-plugin
  if (argv.mode==="production") {
    config.plugins.push(new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public/dist/index.html'), to: path.resolve(__dirname, 'public') },        
      ],
    }));
  }
  ***/

  return config;
};