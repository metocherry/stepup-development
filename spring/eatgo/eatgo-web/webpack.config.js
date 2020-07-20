const { join, resolve } = require("path");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PROJECT_DIR = resolve(__dirname);

const paths = {
    source(location = "") {
        return join(PROJECT_DIR, "src", location);
    },
    dist(location = "") {
        return join(PROJECT_DIR, "dist", location);
    },
};

module.exports = (env = {}) => {
    const config = {
        entry: paths.source("index.js"),
        output: {
            filename: "bundle.js",
            path: paths.dist(),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: paths.source("index.html")
            }),
        ],
    };

    if (env.development) {
        return merge(config, {
            devtool: "inline-source-map",
            devServer: {
                contentBase: paths.dist(),
                publicPath: "/",
                port: 3000,
                compress: true,
                inline: true,
                hot: true,
                overlay: true,
                stats: "errors-only",
                historyApiFallback: true,
            },
        });
    }

    return merge(config, {
        mode: "production"
    });
};
