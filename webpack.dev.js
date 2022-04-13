const path = require("path");
const common = require("./webpack.common.js");
const {merge} = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        open: true,
        port: 8080
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ]
            }
        ]
    }
});