const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'resources/assets/js/app/src/index.js'),
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