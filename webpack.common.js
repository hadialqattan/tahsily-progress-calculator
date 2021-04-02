const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const RemoveEmptyScriptsPlugin = require('webpack-remove-empty-scripts')

module.exports = {
  optimization: {
    usedExports: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
    splitChunks: {
      minSize: 100000,
      maxSize: 250000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new RemoveEmptyScriptsPlugin(),
    new WebpackManifestPlugin({ removeKeyHash: true }),
    new MiniCssExtractPlugin({ filename: '[name].[chunkhash:8].min.css' }),
    new HtmlWebPackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      filename: 'index.html',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
}
