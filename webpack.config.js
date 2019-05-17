const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|service)/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./static/index.html",
            filename: "./index.html"
        })
    ]
};
