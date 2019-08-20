var WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
    entry: ['babel-polyfill', "./src/client/registration/index.js"],
    output: {
        path: __dirname + "/src/client/builds/",
        filename: "registration-bundle.js"
    },
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jsx?$/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new WebpackNotifierPlugin(),
    ],
    devtool: "source-map"
};
