const path = require('path');

const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const postcssNormalize = require('postcss-normalize');

const resolve = (...args) => path.resolve.apply(null, [__dirname, ...args]);

const paths = {
  root: (...args) => resolve(...args),
  source: (...args) => resolve('src', ...args),
  dist: (...args) => resolve('dist', ...args),
};

const createWebpackConfig = (env = {}) => {
  const isEnvDevelopment = !!env.development;
  const isEnvProduction = !!env.production;

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: {},
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        loader: require.resolve('postcss-loader'),
        options: {
          postcssOptions: {
            plugins: [
              require('postcss-preset-env')({
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
              }),
              postcssNormalize(),
            ],
          },
          sourceMap: true,
        },
      },
    ].filter(Boolean);

    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: true,
            root: paths.source(),
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        },
      );
    }

    return loaders;
  };

  const config = {
    target: 'web',
    mode: isEnvProduction ? 'production' : 'development',
    // Stop compilation early in production
    bail: isEnvProduction,
    devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
    entry: {
      app: [paths.source('index.tsx')],
    },
    output: {
      path: resolve('dist'),
      pathinfo: isEnvDevelopment,
      filename: 'static/js/[name].[contenthash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
      // this defaults to 'window', but by setting it to 'this' then
      // module chunks which are built will work in web workers as well.
      globalObject: 'this',
    },
    module: {
      rules: [
        {
          oneOf: [
            {
              test: /\.(ts|js)x?$/,
              include: paths.source(),
              use: {
                loader: 'babel-loader',
                options: {
                  // This is a feature of `babel-loader` for webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true,
                  // See #6846 for context on why cacheCompression is disabled
                  cacheCompression: false,
                  compact: isEnvProduction,
                },
              },
            },
            {
              test: /\.css$/,
              exclude: /\.modue\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourcemap: true,
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
            {
              test: /\.modue\.css$/,
              use: getStyleLoaders({
                importLoaders: 1,
                sourcemap: true,
                modules: {
                  localIdentContext: paths.source(),
                  localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
              }),
            },
            {
              test: /\.scss$/,
              exclude: /\.module\.scss$/,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: true,
                },
                'sass-loader',
              ),
              sideEffects: true,
            },
            {
              test: /\.module\.scss$/,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: true,
                  modules: {
                    localIdentContext: paths.source(),
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                  },
                },
                'sass-loader',
              ),
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {},
    },
    plugins: [
      PnpWebpackPlugin,
      new webpack.DefinePlugin({
        APP_VERSION: JSON.stringify('0.0.1'),
      }),
      // isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      new HtmlWebpackPlugin({
        template: paths.source('index.html'),
        inject: true,
      }),
      new CleanWebpackPlugin(),
    ].filter(Boolean),
    resolveLoader: {
      plugins: [
        // Also related to Plug'n'Play, but this time it tells webpack to load its loaders
        // from the current package.
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
    node: false,
  };

  if (isEnvDevelopment) {
    config.devServer = {
      contentBase: paths.dist(),
      compress: true,
      port: 9000,
      disableHostCheck: true,
      // historyApiFallback: true,
      // hot: true,
    };
  }

  return config;
};

module.exports = createWebpackConfig;
