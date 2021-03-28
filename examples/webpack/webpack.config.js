/**
 * Comment out everything MiniCssExtractPlugin related for a prod css example
 */

const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash].js',
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        // {
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     esModule: false,
        //   },
        // },
        'css-loader',
        'postcss-loader',
      ],
    }, {
      test: /\.ts(x?)$/,
      use: ['ts-loader'],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Arcade Webpack Example',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    // new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 4000,
  },
};
