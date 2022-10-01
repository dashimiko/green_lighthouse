const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname,'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      'window.Swiper': 'swiper',
			Swiper: 'swiper',
		}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules:[
    {test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader,
         {
           loader: "css-loader",
           options: { importLoaders: 1 }
         },
         "postcss-loader"
        ],
  },
  {
    test: /\.(svg|jpg|png)$/,
    type: 'asset/resource',
  }
  ]
  },
  externals: {
    swiper: 'Swiper',
  },
}
