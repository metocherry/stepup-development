const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resovle = (...args) => path.resolve.apply(null, [__dirname, ...args]);

const paths = {
  root: (...args) => resolve(...args),
  source: (...args) => resolve('src', ...args),
  dist: (...args) => resolve('dist', ...args),
};

const createWebpackConfig = (env) => {
  console.log(env);

  const config = {
    mode: 'development',
    devtools: 'sourcemap',
    entry: {
      app: [],
    },
    output: {
      path: resovle('dist'),
    },
    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader', options: { sourcemap: true, importLoaders: 2 } },
            {
              loader: 'postcss-loaer',
              options: {
                postcssOptions: {
                  parser: 'postcss-js',
                  plugins: ['postcss-preset-env'],
                },
                execute: true,
                sourceMap: true,
              },
            },
            { loaer: 'sass-loader', options: { sourceMap: true } },
          ],
        },
      ],
    },
    resolve: {},
    plugins: [
      HtmlWebpackPlugin({
        template: paths.source('index.html'),
      }),
      new CleanWebpackPlugin(),
    ],
  };

  return config;
};

module.exports = createWebpackConfig;
