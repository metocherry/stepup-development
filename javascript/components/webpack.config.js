const HTMLWeebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/frameworks/web/index.tsx',
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@adapters': path.resolve(__dirname, 'src/adapters/'),
      '@domains': path.resolve(__dirname, 'src/domains/'),
      '@frameworks': path.resolve(__dirname, 'src/frameworks/'),
      '@di': path.resolve(__dirname, 'src/di/'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HTMLWeebPackPlugin({
      template: './src/frameworks/web/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
