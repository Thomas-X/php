const path = require('path');
module.exports = {
    // /app/src/index.js
    entry: path.resolve(__dirname, 'resources/assets/js/tmp.js'),
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: 'app.js'
    },
    mode: process.env.NODE_ENV,
    module: {
        rules: [
            { test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}